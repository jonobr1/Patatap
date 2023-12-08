import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { duration, two, TWO_PI } from "../common.js";
import palette from "./palette.js";

let playing = false;
let animate_in, animate_out;

const timer = two.makeCircle();
timer.stroke = palette.colors.highlight;
timer.closed = false;
timer.scale = new Two.Vector(1, 1);
timer.cap = 'butt';
timer.noFill();

const destinations = {
  in: { ending: 1 },
  out: { beginning: 1 }
};

reset();
resize();

function start(silent) {
  playing = true;
  timer.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function resize() {
  timer.radius = animations.min_dimension / 3;
  timer.linewidth = animations.min_dimension / 10;
  timer.translation.copy(center);
}

function update() {
  timer.stroke = palette.colors.highlight;
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  timer.visible = false;
  timer.rotation = TWO_PI * Math.random();
  timer.beginning = timer.ending = 0;

  if (Math.random() > 0.5) {
    timer.scale.x *= -1;
  }

  animate_in = new TWEEN.Tween(timer)
    .to(destinations.in, duration / 3)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onComplete(() => animate_out.start());

  animate_out = new TWEEN.Tween(timer)
    .to(destinations.out, duration / 3)
    .easing(TWEEN.Easing.Sinusoidal.In)
    .onComplete(reset);

  playing = false;

}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '0,4',
  name: 'timer',
  sounds: []
};

register(animation.hash, animation);
export default animation;