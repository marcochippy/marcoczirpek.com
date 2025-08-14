import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

const destinationURL = 'https://marcoczirpek.com/404';
const statusCode = 301;

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    return Response.redirect(destinationURL, statusCode);
  }
}
