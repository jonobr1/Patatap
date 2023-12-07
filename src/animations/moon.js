import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { range } from "../underscore.js";

let playing = false;
let animate_in, animate_out;

const amount = 64;
const half = amount / 2;
const destinations = [];
const points = range(amount).map(() => {
  destinations.push(new Two.Vector());
  return new Two.Anchor();
});

const moon = two.makePath(points);
const options = { in: 0, out: 0 };

moon.fill = palette.colors.foreground;
moon.noStroke();

resize();
reset();

function start(silent) {
  playing = true;
  moon.visible = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  moon.fill = palette.colors.foreground;
}

function resize() {
  moon.translation.copy(center);
}

function reset() {

  if (animate_in) {
    animate_in.stop();
  }
  if (animate_out) {
    animate_out.stop();
  }

  options.in = 0;
  options.out = 0;

  moon.visible = false;
  moon.rotation = Math.random() * TWO_PI;

  const radius = animations.min_dimension * 0.33;
  moon.vertices.map((v, i) => {
    const pct = i / (amount - 1);
    const theta = pct * TWO_PI;
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    destinations[i].set(x, y);
    if (i < half) {
      destinations[i].y *= -1;
    }
    v.set(x, Math.abs(y));
  });

  animate_in = new TWEEN.Tween(options)
    .to({ in: 1 }, duration * 0.5)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onUpdate(() => {
      for (let i = half; i < amount; i++) {
        points[i].lerp(destinations[i], options.in);
      }
    })
    .onComplete(onComplete);

  animate_out = new TWEEN.Tween(options)
    .to({ out: 1 }, duration * 0.5)
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onUpdate(() => {
      for (let i = 0; i < half; i++) {
        points[i].lerp(destinations[i], options.out);
      }
    })
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
  hash: '0,2',
  name: 'moon',
  sounds: []
};

register(animation.hash, animation);
export default animation;