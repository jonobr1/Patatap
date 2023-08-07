import Two from "two.js";

export const two = new Two({
  type: Two.Types.canvas
});

two.renderer.domElement.id = 'stage';

export const TWO_PI = Math.PI * 2;
export const duration = 1000;
export const drag = 0.125;

export const mouse = new Two.Vector();