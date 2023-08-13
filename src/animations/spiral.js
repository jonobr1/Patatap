import { clamp, map, range } from "../underscore.js";
import Two from "two.js";
import * as TWEEN from "@tweenjs/tween.js";
import animations, { register, center } from "./index.js";
import { duration, two, TWO_PI } from "../common.js";
import palette from "./palette.js";

let playing = false;
const amount = 120, resolution = 4;

let magnitude, linewidth, animate_in;

const group = two.makeGroup();
const lines = range(amount).map(() => {

  const line = new Two.Line();
  line.noFill();
  line.cap = line.join = 'round';

  group.add(line);

  return line;

});

resize();
reset();

function start(silent) {
  group.visible = true;
  playing = true;
  animate_in.start();
  if (!silent && animation.sound) {
    animation.sound.stop().play();
  }
}

function update() {
  group.stroke = palette.colors.black;
}

function resize() {
  group.translation.copy(center);
  magnitude = animations.min_dimension / 2;
  linewidth = magnitude / amount;
  lines.forEach(updateLine);
  lines.reverse();
}

function reset() {

  group.visible = false;
  group.rotation = Math.PI - Math.random() * TWO_PI;
  group.scale = 1;

  if (animate_in) {
    animate_in.stop();
  }

  animate_in = new TWEEN.Tween(group)
    .easing(TWEEN.Easing.Circular.In)
    .to({ rotation: Math.PI / 8, scale: 8 }, duration * 2)
    .onUpdate(onUpdate)
    .onComplete(reset);


  playing = false;

}

function onUpdate(group, u) {
  const t = clamp(map(u, 0, 0.25, 0, 1), 0, 1);
  const index = Math.floor(t * amount);
  for (let i = 0; i < lines.length; i++) {
    lines[i].visible = i <= index;
  }
}

function updateLine(line, i) {

  let pct = i / amount;
  let r = magnitude * pct;
  let theta = pct * Math.PI * resolution;

  const x1 = r * Math.cos(theta);
  const y1 = r * Math.sin(theta);

  pct = (i + 0.25) / amount;
  r = magnitude * pct;
  theta = pct * Math.PI * resolution;

  const x2 = r * Math.cos(theta);
  const y2 = r * Math.sin(theta);

  line.vertices[0].set(x1, y1);
  line.vertices[1].set(x2, y2);
  line.linewidth = (1 - Math.sqrt(1 - pct)) * linewidth;

}

const animation = {
  start: start,
  update: update,
  clear: reset,
  resize: resize,
  get playing() { return playing },
  hash: '0,9',
  name: 'dotted-spiral',
  sounds: []
};

register(animation.hash, animation);
export default animation;