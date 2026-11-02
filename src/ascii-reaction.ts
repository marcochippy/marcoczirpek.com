import { useEffect, useRef } from "react";

// ── Einstellungen ───────────────────────────────────────────
const RAMP = " .·:-=+*#%@"; // dunkel → hell
const CELL_W = 9; // CSS-px pro Zeichen
const CELL_H = 16;
const FPS = 24;
const STEPS = 8; // Simulationsschritte pro Frame (mehr = schnelleres Wachstum)
const SEED_TEXT = "404"; // Startform, "" = nur Zufallströpfchen
const DAY_SEED = true; // true: pro Tag ein Muster, false: pro Besuch
const GLITCH_MS = 140;
const GLITCH_GAP: [number, number] = [2500, 7500];
const HOVER_MS: [number, number] = [150, 450];
const HOVER_GAP: [number, number] = [700, 2200];
const RADIUS = 200; // Reveal-Radius in CSS-px
const EASE = 0.15;
const PALETTE = ["#ff3d81", "#ffb347", "#3dffb0", "#3db4ff", "#a23dff"];
const BLOBS = [
  { x: 0.2, y: 0.3, c: "#ff3d81" },
  { x: 0.8, y: 0.2, c: "#3db4ff" },
  { x: 0.6, y: 0.85, c: "#3dffb0" },
];

// Gray-Scott: DU/DV Diffusion, WY gleicht die hohen Zellen aus (9:16 → runde Muster)
const DU = 0.2, DV = 0.1, WY = (CELL_W / CELL_H) ** 2;

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const lerp = (a: number, b: number, s: number) => a + (b - a) * s;

// Seeded RNG (mulberry32): gleicher Seed → gleiche Zahlenfolge
function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Parameter-Drift: Tageszeit + langsames Atmen bewegen (F, k) durch Muster-Typen
// k folgt der Kurve sqrt(F)/2 − F, dort liegen die lebendigen Muster
function params(sec: number, phase: number) {
  const dayFrac = (Date.now() % 86400000) / 86400000;
  const s = 0.5 + 0.35 * Math.sin(2 * Math.PI * dayFrac) + 0.15 * Math.sin((sec * 2 * Math.PI) / 480 + phase);
  const F = lerp(0.03, 0.055, s);
  return { F, k: Math.sqrt(F) / 2 - F + 0.0005 };
}

export function startAsciiReaction(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext("2d")!;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const palette = document.createElement("canvas");
  const tmp = document.createElement("canvas");

  const seed = DAY_SEED ? Math.floor(Date.now() / 86400000) : (Date.now() & 0xffffffff);
  const rng = mulberry32(seed);
  const phase = rng() * Math.PI * 2;

  let dpr = 1, cols = 0, rows = 0, cw = 0, ch = 0;
  let U = new Float32Array(0), V = U, U2 = U, V2 = U;
  let atlas: HTMLCanvasElement;
  let color = "";

  const glitch = { until: 0, next: performance.now() + 1500, y0: 0, y1: 0, shift: 0 };
  const hover = { until: 0, next: 0, y0: 0, y1: 0, shift: 0 };
  const mouse = { x: 0, y: 0, tx: 0, ty: 0, on: false, s: 0 };

  // ── Simulation ────────────────────────────────────────────
  function drop(cx: number, cy: number, rx = 4, ry = 2) {
    for (let y = -ry; y <= ry; y++)
      for (let x = -rx; x <= rx; x++) {
        const i = ((Math.round(cy) + y + rows) % rows) * cols + ((Math.round(cx) + x + cols) % cols);
        U[i] = 0.5;
        V[i] = 0.25;
      }
  }

  function seedField(r: () => number) {
    U.fill(1);
    V.fill(0);
    for (let n = 0; n < 14; n++) drop(r() * cols, r() * rows);
    if (!SEED_TEXT) return;
    // Text in Rasterkoordinaten zeichnen (y gestaucht, damit er auf dem Screen nicht gestreckt ist)
    const ratio = CELL_W / CELL_H;
    const c = document.createElement("canvas");
    c.width = cols;
    c.height = rows;
    const t = c.getContext("2d", { willReadFrequently: true })!;
    t.setTransform(1, 0, 0, ratio, 0, 0);
    t.font = `bold ${cols * 0.2}px monospace`;
    t.textAlign = "center";
    t.textBaseline = "middle";
    t.fillText(SEED_TEXT, cols / 2, rows / 2 / ratio);
    const px = t.getImageData(0, 0, cols, rows).data;
    for (let i = 0; i < cols * rows; i++) if (px[i * 4 + 3] > 128) { U[i] = 0.5; V[i] = 0.25; }
  }

  function step(F: number, k: number) {
    for (let y = 0; y < rows; y++) {
      const r = y * cols;
      const up = (y ? y - 1 : rows - 1) * cols;
      const dn = (y < rows - 1 ? y + 1 : 0) * cols;
      for (let x = 0; x < cols; x++) {
        const i = r + x;
        const l = x ? i - 1 : r + cols - 1;
        const rt = x < cols - 1 ? i + 1 : r;
        const u = U[i], v = V[i], uvv = u * v * v;
        const lu = U[l] + U[rt] - 2 * u + WY * (U[up + x] + U[dn + x] - 2 * u);
        const lv = V[l] + V[rt] - 2 * v + WY * (V[up + x] + V[dn + x] - 2 * v);
        U2[i] = u + DU * lu - uvv + F * (1 - u);
        V2[i] = v + DV * lv + uvv - (F + k) * v;
      }
    }
    [U, U2] = [U2, U];
    [V, V2] = [V2, V];
  }

  const warmUp = (n: number) => { const { F, k } = params(0, phase); for (let i = 0; i < n; i++) step(F, k); };

  // ── Atlas, Palette, Resize ────────────────────────────────
  function buildAtlas() {
    color = getComputedStyle(canvas).color;
    atlas = document.createElement("canvas");
    atlas.width = cw * RAMP.length;
    atlas.height = ch;
    const a = atlas.getContext("2d")!;
    a.fillStyle = color;
    a.font = `${ch * 0.85}px monospace`;
    a.textAlign = "center";
    a.textBaseline = "middle";
    [...RAMP].forEach((c, i) => a.fillText(c, i * cw + cw / 2, ch / 2));
  }

  function buildPalette() {
    const { width: w, height: h } = canvas;
    palette.width = w;
    palette.height = h;
    const p = palette.getContext("2d")!;
    const lin = p.createLinearGradient(0, 0, w, h);
    PALETTE.forEach((c, i) => lin.addColorStop(i / (PALETTE.length - 1), c));
    p.fillStyle = lin;
    p.fillRect(0, 0, w, h);
    for (const b of BLOBS) {
      const r = Math.max(w, h) * 0.35;
      const g = p.createRadialGradient(b.x * w, b.y * h, 0, b.x * w, b.y * h, r);
      g.addColorStop(0, b.c);
      g.addColorStop(1, b.c + "00");
      p.fillStyle = g;
      p.fillRect(0, 0, w, h);
    }
  }

  function resize() {
    dpr = Math.min(devicePixelRatio, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    cw = Math.round(CELL_W * dpr);
    ch = Math.round(CELL_H * dpr);
    cols = Math.ceil(canvas.width / cw);
    rows = Math.ceil(canvas.height / ch);
    tmp.width = tmp.height = Math.ceil(RADIUS * dpr * 2);
    U = new Float32Array(cols * rows);
    V = U.slice(); U2 = U.slice(); V2 = U.slice();
    seedField(mulberry32(seed));
    warmUp(reduced ? 600 : 250); // sofort sichtbare Struktur
    buildAtlas();
    buildPalette();
  }

  // ── Reveal ────────────────────────────────────────────────
  function reveal(dx: number) {
    if (mouse.s < 0.01) return;
    const r = RADIUS * dpr;
    const x0 = Math.round(mouse.x - r);
    const y0 = Math.round(mouse.y - r);
    const t = tmp.getContext("2d")!;
    t.globalCompositeOperation = "source-over";
    t.clearRect(0, 0, tmp.width, tmp.height);
    t.drawImage(palette, -x0, -y0);
    const mask = t.createRadialGradient(r, r, 0, r, r, r);
    mask.addColorStop(0.3, "rgba(0,0,0,1)");
    mask.addColorStop(1, "rgba(0,0,0,0)");
    t.globalCompositeOperation = "destination-in";
    t.fillStyle = mask;
    t.fillRect(0, 0, tmp.width, tmp.height);
    ctx.globalCompositeOperation = "source-atop";
    ctx.globalAlpha = mouse.s;
    ctx.drawImage(tmp, x0 + dx, y0);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
  }

  // ── Frame ─────────────────────────────────────────────────
  let frame = 0, nextDrop = 0;

  function render(sec: number, now: number) {
    mouse.x += (mouse.tx - mouse.x) * EASE;
    mouse.y += (mouse.ty - mouse.y) * EASE;
    mouse.s += ((mouse.on ? 1 : 0) - mouse.s) * EASE;

    // Simulation + Selbstheilung (Feld tot oder überfüllt → neu aussäen) + zufällige Tropfen
    const { F, k } = params(sec, phase);
    for (let i = 0; i < STEPS; i++) step(F, k);
    if (++frame % 60 === 0) {
      let sum = 0;
      for (let i = 0; i < V.length; i++) sum += V[i];
      const mean = sum / V.length;
      if (mean < 0.01 || mean > 0.3) seedField(Math.random);
    }
    if (sec > nextDrop) {
      drop(rand(0, cols), rand(0, rows));
      nextDrop = sec + rand(8, 20);
    }

    // Globaler Glitch
    if (now > glitch.next) {
      glitch.until = now + GLITCH_MS;
      glitch.next = glitch.until + rand(...GLITCH_GAP);
      glitch.y0 = Math.floor(rand(0, rows));
      glitch.y1 = glitch.y0 + Math.floor(rand(1, rows * 0.12 + 2));
      glitch.shift = Math.round(rand(-14, 14));
      if (getComputedStyle(canvas).color !== color) buildAtlas();
    }
    const glitching = now < glitch.until;

    // Maus-Glitch
    if (mouse.on && now > hover.next) {
      hover.until = now + rand(...HOVER_MS);
      hover.next = hover.until + rand(...HOVER_GAP);
    }
    const hovering = mouse.on && now < hover.until;
    const mx = mouse.x / cw, my = mouse.y / ch, rc = RADIUS / CELL_W;
    if (hovering) {
      hover.y0 = Math.round(my + rand(-RADIUS / CELL_H, RADIUS / CELL_H));
      hover.y1 = hover.y0 + Math.floor(rand(0, 3));
      hover.shift = Math.round(rand(-8, 8));
    }
    canvas.style.filter = glitching || hovering ? "blur(1.2px)" : "blur(0.4px)";

    // Zeichnen: V-Konzentration → Zeichenrampe
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const last = RAMP.length - 1;
    for (let y = 0; y < rows; y++) {
      const inBand = glitching && y >= glitch.y0 && y <= glitch.y1;
      const hRow = hovering && y >= hover.y0 && y <= hover.y1;
      for (let x = 0; x < cols; x++) {
        const glitched = inBand || (hRow && Math.abs(x - mx) < rc);
        const sx = glitched ? (x + (inBand ? glitch.shift : hover.shift) + cols) % cols : x;
        let i = Math.min(last, Math.floor(V[y * cols + sx] * RAMP.length * 2.6));
        if (glitched && Math.random() < 0.12) i = Math.floor(Math.random() * RAMP.length);
        if (i > 0) ctx.drawImage(atlas, i * cw, 0, cw, ch, x * cw, y * ch, cw, ch);
      }
    }
    reveal(hovering ? Math.round(rand(-6, 6)) * dpr : 0);
  }

  // ── Maus: bewegen sät neue Chemie ─────────────────────────
  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    mouse.tx = (e.clientX - r.left) * dpr;
    mouse.ty = (e.clientY - r.top) * dpr;
    if (!mouse.on) { mouse.x = mouse.tx; mouse.y = mouse.ty; }
    mouse.on = true;
    drop(mouse.tx / cw, mouse.ty / ch, 1, 1);
  };
  const onLeave = () => (mouse.on = false);

  // ── Loop ──────────────────────────────────────────────────
  let raf = 0, prev = 0, sec = 0;
  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    const dt = now - prev;
    if (dt < 1000 / FPS) return;
    prev = now;
    sec += Math.min(dt, 100) / 1000;
    render(sec, now);
  };
  const start = () => { prev = performance.now(); raf = requestAnimationFrame(tick); };
  const stop = () => cancelAnimationFrame(raf);
  const onVisibility = () => (document.hidden ? stop() : start());

  const ro = new ResizeObserver(() => { resize(); if (reduced) render(0, 0); });
  ro.observe(canvas);
  resize();

  if (!reduced) {
    start();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
  }

  return () => {
    stop();
    ro.disconnect();
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pointermove", onMove);
    document.documentElement.removeEventListener("pointerleave", onLeave);
  };
}

// ── React-Hook ──────────────────────────────────────────────
export function useAsciiReaction() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => (ref.current ? startAsciiReaction(ref.current) : undefined), []);
  return ref;
}
