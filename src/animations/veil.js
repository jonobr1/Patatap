import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import { register, center } from "./index.js";
import { duration, two } from "../common.js";
import palette from "./palette.js";

let playing = false;
let animate_in, animate_out;

const points = [
  new Two.Anchor(-center.x, -center.y),
  new Two.Anchor(center.x, -center.y),
  new Two.Anchor(center.x, center.y),
  new Two.Anchor(-center.x, center.y)
];
const shape = two.makePath(points);
shape.closed = true;
shape.fill = palette.colors.highlight;
shape.noStroke();

const dest_in = { y: center.y }, dest_out = { y: 0 };

reset();

function start(silent) {
  playing = true;
  shape.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  shape.fill = palette.colors.highlight;
}

function resize() {
  points[0].set(- center.x, - center.y);
  points[1].set(center.x, - center.y);
  points[2].set(center.x, center.y);
  points[3].set(- center.x, center.y);
}

function reset() {
  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  shape.visible = false;
  playing = false;

  if (Math.random() > 0.5) {
    shape.translation.set(center.x, - center.y);
    dest_out.y = two.height * 1.5;
  } else {
    shape.translation.set(center.x, two.height * 1.5);
    dest_out.y = - center.y;
  }

  dest_in.y = center.y;

  animate_in = new TWEEN.Tween(shape.translation)
    .to(dest_in, duration * 0.5)
    .easing(TWEEN.Easing.Exponential.Out)
    .onComplete(() => (animate_out.start()));

  animate_out = new TWEEN.Tween(shape.translation)
    .to(dest_out, duration * 0.5)
    .easing(TWEEN.Easing.Exponential.In)

}

const animation = {
  start: start,
  update: update,
  resize: resize,
  clear: reset,
  get playing() { return playing; },
  hash: '1,1',
  name: 'veil',
  sounds: []
};

register(animation.hash, animation);
export default animation;