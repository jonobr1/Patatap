import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { map, range } from "../underscore.js";

let playing = false;
let animate_in, animate_out;

const amount = 120, phi = 6;
const points = range(amount).map(() => new Two.Anchor());
const zigzag = two.makePath(points);
zigzag.closed = false;
zigzag.noFill();
zigzag.join = 'miter';
zigzag.miter = 4;
zigzag.cap = 'butt';

resize();
reset();

function start(silent) {
  playing = true;
  zigzag.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  zigzag.stroke = palette.colors.black;
}

function resize() {
  zigzag.linewidth = animations.min_dimension / 30;
  zigzag.position.copy(center);
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  const offset = Math.PI / 2;
  const index = Math.random() * 4;
  let phi = 5;
  if (index > 3) {
    phi = 5;
  } else if (index > 2) {
    phi = 4;
  } else if (index > 1) {
    phi = 2
  } else {
    phi = 1;
  }

  zigzag.rotation = Math.random() > 0.5 ? Math.PI : 0;
  zigzag.visible = false;
  zigzag.beginning = zigzag.ending = 0;

  if (Math.random() > 0.5) {
    zigzag.translation.set(two.width * 0.85, center.y);
  } else {
    zigzag.translation.set(two.width * 0.15, center.y);
  }

  const width = two.width / 16;
  const height = two.height * 0.66;

  for (let i = 0; i < zigzag.vertices.length; i++) {
    const v = zigzag.vertices[i];
    const pct = i / amount;
    const theta = Math.abs(
      (((2 * (pct * TWO_PI * phi + offset) / Math.PI) - 1) % 4) - 2
    ) - 1;
    const x = theta * width / 2;
    const y = map(pct, 0, 1, - height / 2, height / 2);
    v.set(x, y);
  }

  animate_in = new TWEEN.Tween(zigzag)
    .to({ ending: 1 }, duration * 0.25)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onComplete(onComplete);

  animate_out = new TWEEN.Tween(zigzag)
    .to({ beginning: 1 }, duration * 0.25)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onComplete(reset);

  playing = false;

}

function onComplete() {
  animate_out.start();
}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '1,8',
  name: 'zig-zag',
  sounds: []
};

register(animation.hash, animation);
export default animation;