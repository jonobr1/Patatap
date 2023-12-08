import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { map, range } from "../underscore.js";

let playing = false;
let animate_in, animate_out;

const amount = 200;
const points = range(amount).map(() => new Two.Anchor());
const squiggle = two.makePath(points, true);
squiggle.noFill().stroke = palette.colors.accent;
squiggle.cap = squiggle.join = 'round';

resize();
reset();

function start(silent) {
  playing = true;
  squiggle.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  squiggle.stroke = palette.colors.accent;
}

function resize() {
  squiggle.linewidth = animations.min_dimension / 40;
  squiggle.translation.copy(center);
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  const phi = Math.round(Math.random() * 6) + 1;
  const offset = Math.PI / 2;
  const width = center.x;
  const height = two.height / 3;

  squiggle.rotation = Math.random() > 0.5 ? Math.PI : 0;
  squiggle.beginning = squiggle.ending = 0;
  squiggle.visible = false;

  for (let i = 0; i < squiggle.vertices.length; i++) {
    const v = squiggle.vertices[i];
    const pct = i / amount;
    const theta = TWO_PI * phi * pct + offset;
    const x = map(pct, 0, 1, - width / 2, width / 2);
    const y = height * Math.sin(theta);
    v.set(x, y);
  }

  animate_in = new TWEEN.Tween(squiggle)
    .to({ ending: 1 }, duration * 0.5)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onComplete(onComplete);

  animate_out = new TWEEN.Tween(squiggle)
    .to({ beginning: 1 }, duration * 0.5)
    .easing(TWEEN.Easing.Sinusoidal.In)
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
  hash: '0,7',
  name: 'squiggle',
  sounds: []
};

register(animation.hash, animation);
export default animation;