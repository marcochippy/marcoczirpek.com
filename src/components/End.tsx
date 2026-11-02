import { useEffect, useState } from 'react';
import { motion, useAnimate, useReducedMotion } from 'motion/react';
import { useAsciiReaction } from '../ascii-reaction';

const TEXT = 'text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight';

const End = () => {
  const ref = useAsciiReaction();
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;

    const loop = async () => {
      if (cancelled) return;
      try {
        await Promise.all([
          animate('[data-layer="magenta"]', { opacity: [0, 0.85, 0], x: [-3, 3, 0] }, { duration: 0.2 }),
          animate('[data-layer="cyan"]', { opacity: [0, 0.85, 0], x: [3, -3, 0] }, { duration: 0.2 }),
          animate('[data-layer="base"]', { x: [0, 1, -1, 0] }, { duration: 0.2 }),
        ]);
      } catch {}
      if (!cancelled) setTimeout(loop, 2000 + Math.random() * 4000);
    };

    const t = setTimeout(loop, 800);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [animate, reduced]);

  return (
    <section className="relative isolate flex items-center justify-center h-screen w-screen">
      <canvas
        ref={ref}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-[#e8e8e8] opacity-20"
      />

      <div
        className="relative isolate flex items-center px-10 py-8"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-16 -inset-y-14 z-0"
          style={{
            background:
              'radial-gradient(ellipse at center, #161616 0%, #161616 35%, rgba(22,22,22,0.75) 60%, rgba(22,22,22,0) 80%)',
          }}
        />

        <div ref={scope} className="relative z-10">
          <motion.span
            aria-hidden
            data-layer="magenta"
            className={`${TEXT} absolute inset-0 text-[#ff2e88] opacity-0`}
            style={{ clipPath: 'inset(0 0 50% 0)' }}>
            404
          </motion.span>
          <motion.span
            aria-hidden
            data-layer="cyan"
            className={`${TEXT} absolute inset-0 text-[#29ffe1] opacity-0`}
            style={{ clipPath: 'inset(50% 0 0 0)' }}>
            404
          </motion.span>
          <motion.h1 data-layer="base" className={`${TEXT} relative text-[#e8e8e8]`}>
            404
          </motion.h1>
        </div>

        <div className="relative z-10 text-sm md:text-base font-light ml-5 text-[#e8e8e8]/60 text-left leading-relaxed">
          <p className="relative">
            <span className={`transition-opacity duration-300 ${hovered ? 'opacity-0' : ''}`}>
              Nothing here anymore.
            </span>
            <span className={`absolute inset-0 transition-opacity duration-300 ${hovered ? '' : 'opacity-0'}`}>
              Something in the works…
            </span>
          </p>
          <p>Domain reserved for personal use.</p>
          <p className="italic">Marco Czirpek</p>
        </div>
      </div>
    </section>
  );
};

export default End;
