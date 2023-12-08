import * as TWEEN from "@tweenjs/tween.js";
import Two from "two.js";
import animations, { register, center } from "./index.js";
import { TWO_PI, duration, two } from "../common.js";
import palette from "./palette.js";
import { range } from "../underscore.js";

let playing = false;
let animate_out;

const amount = 8;
const points = range(8).map(() => new Two.Anchor());
const shape = two.makePath(points);
const sequence = [];

shape.closed = true;
shape.noStroke().fill = palette.colors.highlight;

resize();
reset();

function start(silent) {
  playing = true;
  shape.visible = true;
  if (sequence.length > 0) {
    for (let i = 0; i < sequence[0].length; i++) {
      sequence[0][i].start();
    }
  }
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  shape.fill = palette.colors.highlight;
}

function resize() {
  shape.translation.copy(center);
}

function reset() {

  if (sequence.length > 0) {
    for (let i = 0; i < sequence.length; i++) {
      const parallel = sequence[i];
      for (let j = 0; j < parallel.length; j++) {
        parallel[j].stop();
      }
    }
    sequence.length = 0;
  }
  if (animate_out) {
    animate_out.stop();
  }

  shape.visible = 0;
  shape.scale = 1;
  shape.rotation = Math.random() * TWO_PI;

  const startAngle = 0;
  const endAngle = TWO_PI;
  const drift = Math.random() * TWO_PI;
  const radius = two.height / 6;

  shape.vertices.forEach((v, i) => {

    const pct = i / amount;
    const theta = startAngle;

    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);

    v.set(x, y);

    const index = i + 1;
    const center = Math.PI * (index / amount);
    const parallel = range(amount).map((j) => {

      const t = Math.min(j / index, 1);
      const angle = t * (endAngle - startAngle)
        + startAngle + center + drift;
      const p = shape.vertices[j];

      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return new TWEEN.Tween(p)
        .to({ x, y }, duration / (amount + 2))
        .easing(TWEEN.Easing.Sinusoidal.Out);

    });

    sequence.push(parallel);

    parallel[0].onComplete(() => {
      const parallel = sequence[index];
      if (parallel && parallel.length > 0) {
        parallel.forEach((tween) => tween.start());
        return;
      }
      animate_out.start();
    });

  });

  animate_out = new TWEEN.Tween(shape)
    .to({ scale: 0 }, duration / (amount + 2))
    .easing(TWEEN.Easing.Sinusoidal.Out)
    .onComplete(reset);

  playing = false;

}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing; },
  hash: '1,7',
  name: 'pinwheel',
  sounds: []
};

register(animation.hash, animation);
export default animation;
