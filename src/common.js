import Two from "two.js";

export const two = new Two({
  type: Two.Types.canvas,
  fullscreen: true,
  ratio: 1
});

two.renderer.domElement.style.position = 'absolute';
two.renderer.domElement.id = 'stage';

export const TWO_PI = Math.PI * 2;
export const duration = 1000;
export const drag = 0.125;

export const mouse = new Two.Vector();

export const container = document.querySelector('#container');

export const isLocal = url.boolean('local')
  || window.location.href.match(/localhost/i);
export const path = isLocal ? 'assets/'
  : '//storage.googleapis.com/cdn.patatap.com/';