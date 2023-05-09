/* eslint-disable no-unused-vars */
import Phaser from 'phaser';

let gameInstance = null;

function preload() {
  this.load.image('sky', '/space3.png');
  this.load.image('logo', '/phaser3-logo.png');
  this.load.image('red', '/red.png');
}

function create() {
  this.add.image(400, 300, 'sky');

  const emitter = this.add.particles(0, 0, 'red', {
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  });

  const logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

const onResize = () => {
  gameInstance.scale.resize(window.innerWidth, window.innerHeight);
};

export const teardown = () => {
  gameInstance.destroy(true);

  window.removeEventListener('resize', onResize);
};

export const init = (canvas) => {
  const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: canvas,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
      },
    },
    scene: {
      preload,
      create,
    },
  };

  gameInstance = new Phaser.Game(config);

  window.addEventListener('resize', onResize);
};
