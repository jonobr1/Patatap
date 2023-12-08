import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { map, range } from "../underscore.js";

let playing = false;
let direction = true;
let animate_ins = [], animate_outs = [];

const options = { in: 0, out: 0 };
const amount = 32;
const last = amount - 1;
const circles = range(amount).map((i) => {

  const circle = new Two.Polygon(0, 0, 0, 3);
  circle.theta = 0;
  circle.destination = 0;
  return circle;

});

const group = two.makeGroup(circles);
group.noStroke().fill = palette.colors.white;
group.join = 'miter';

resize();
reset();

function start(silent) {
  playing = true;
  animate_ins[0].start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  group.fill = palette.colors.white;
}

function resize() {
  group.translation.copy(center);
}

function reset() {

  if (animate_ins.length > 0) {
    animate_ins.forEach(stop);
    animate_ins.length = 0;
  }
  if (animate_outs.length > 0) {
    animate_outs.forEach(stop);
    animate_outs.length = 0;
  }

  direction = Math.random() > 0.5;
  group.rotation = Math.random() * TWO_PI;

  const radius = animations.min_dimension * 0.45;
  const bubbleRadius = two.height * 1.2 / 90;
  const offset = - Math.PI / 6;

  for (let i = 0; i < circles.length; i++) {

    let pct = i / amount;
    let npt = (i + 1) / amount;

    const circle = circles[i];
    circle.visible = false;
    circle.radius = bubbleRadius;
    circle.destination = TWO_PI * pct;
    circle.theta = 0;
    circle.translation.set(radius, 0);

    const ain = new TWEEN.Tween(circle)
      .to({ theta: circle.destination }, 0.1 * duration / (i + 1))
      .onStart(() => (circle.visible = true))
      .onUpdate(() => {

        const theta = circle.theta * (direction ? 1 : - 1);
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta);

        circle.translation.set(x, y);
        circle.rotation = theta + offset;

      })
      .onComplete(() => {

        if (i >= last) {
          animate_outs[0].start();
          return;
        }

        const next = circles[i + 1];
        const tween = animate_ins[i + 1];

        next.theta = circle.theta;
        next.translation.copy(circle.translation);
        tween.start();

      });

    animate_ins.push(ain);

    const destination = Math.min(npt * TWO_PI, TWO_PI);

    const aout = new TWEEN.Tween(circle)
      .to({ theta: destination }, 0.1 * duration / (amount - (i + 1)))
      .onUpdate(() => {

        const theta = circle.theta * (direction ? 1 : - 1);
        const x = radius * Math.cos(theta);
        const y = radius * Math.sin(theta);

        circle.translation.set(x, y);
        circle.rotation = theta + offset;

      })
      .onComplete(() => {

        circle.visible = false;

        if (i >= last - 1) {
          reset();
        } else {
          animate_outs[i + 1].start();
        }

      });

    animate_outs.push(aout);

  }

  playing = false;

}

function stop(tween) {
  tween.stop();
}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '2,4',
  name: 'corona',
  sounds: []
};

register(animation.hash, animation);
export default animation;