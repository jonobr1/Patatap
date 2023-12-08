import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { map, range } from "../underscore.js";

let playing = false;

const amount = 12;
const circles = range(amount).map((i) => {

  const circle = new Two.Circle();
  circle.key = palette.getRandomKey();
  circle.stroke = palette.colors[circle.key];
  circle.noFill();

  return circle;

});

const group = two.makeGroup(circles);

resize();
reset();

function start(silent) {
  playing = true;
  group.visible = true;
  for (let i = 0; i < circles.length; i++) {
    circles[i].tween.start();
  }
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    circle.stroke = palette.colors[circle.key];
  }
}

function resize() {
  group.translation.copy(center);
}

function reset() {

  let index, longest = 0;
  const innerRadius = two.height * 2 / 90;
  const outerRadius = two.height * 4 / 90;

  circles.forEach((circle, i) => {

    const theta = TWO_PI * Math.random();
    const x = Math.random() * center.y * Math.cos(theta);
    const y = Math.random() * center.y * Math.sin(theta);
    const delay = Math.random() * duration * 0.5;

    circle.translation.set(x, y);
    circle.visible = false;
    circle.scale = 0;
    circle.radius = Math.round(
      map(Math.random(), 0, 1, innerRadius, outerRadius)
    );
    circle.linewidth = Math.random() * 20 + 40;

    if (circle.tween) {
      circle.tween.stop();
    }

    circle.tween = new TWEEN.Tween(circle)
      .to({ scale: 1, linewidth: 0 }, 0.2 * duration)
      .easing(TWEEN.Easing.Sinusoidal.Out)
      .delay(delay)
      .onStart(() => (circle.visible = true))
      .onComplete(() => (circle.visible = false));

    if (longest < delay) {
      longest = delay;
      index = i;
    }

  });

  circles[index].tween.onComplete(() => {
    circles[index].visible = false;
    reset();
  });

}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '0,8',
  name: 'glimmer',
  sounds: []
};

register(animation.hash, animation);
export default animation;