import { Application } from "pixi.js";
import { ZstPackage } from "./zstd.js";

const app = new Application();

async function setup() {
  await app.init({ background: '#000000', resizeTo: window });
  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);
}

async function preload() {
  const zstCdnUrl = "";
  const pkg = await ZstPackage.open(zstCdnUrl);
}

(async () => {
  await setup();
  await preload();
})();