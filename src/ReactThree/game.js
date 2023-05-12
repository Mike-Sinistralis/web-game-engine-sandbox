/* eslint-disable no-unused-vars */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshBasicMaterial
} from 'three';

let camera;
let renderer;
let scene;
let geometry;
let material;
let cube;

const onResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

export const teardown = () => {
  scene.remove(cube);
  geometry.dispose();
  material.dispose();
  renderer.dispose();

  window.removeEventListener('resize', onResize);
};

export const init = (canvas) => {
  // Create renderer
  renderer = new WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create scene
  scene = new Scene();

  // Create camera
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a mesh with box geometry and basic material
  geometry = new BoxGeometry(1, 1, 1);
  material = new MeshBasicMaterial({ color: 0xaaaaaa });
  cube = new Mesh(geometry, material);
  scene.add(cube);

  // Create animation loop
  const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', onResize);
};
