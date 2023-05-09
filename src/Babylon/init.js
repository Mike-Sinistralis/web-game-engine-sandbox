/* eslint-disable no-unused-vars */
import {
  Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder
} from '@babylonjs/core';

import { setEngine, getEngine } from './engine';
import { onResize } from './const';

export const init = (canvas) => {
  const engine = new Engine(canvas, true);
  setEngine(engine);

  const scene = new Scene(engine);
  const camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);
  const light1 = new HemisphericLight('light1', new Vector3(1, 1, 0), scene);
  const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 1 }, scene);

  engine.runRenderLoop(() => {
    if (scene) {
      scene.render();
    }
  });

  window.addEventListener('resize', onResize);
};
