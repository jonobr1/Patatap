import { drag } from "../common.js";

export const keys = ['background', 'middleground', 'foreground', 'highlight', 'accent', 'white', 'black'];
export const palette = [
  {
    // Grey
    background: { r: 181, g: 181, b: 181 },
    middleground: { r: 141, g: 164, b: 170 },
    foreground: { r: 227, g: 79, b: 12 },
    highlight: { r: 163, g: 141, b: 116 },
    accent: { r: 255, g: 197, b: 215 },
    white: { r: 255, g: 255, b: 255 },
    black: { r: 0, g: 0, b: 0 },
    isDark: false
  },
  {
    // White
    background: { r: 255, g: 230, b: 255 },
    middleground: { r: 151, g: 41, b: 164 },
    foreground: { r: 1, g: 120, b: 186 },
    highlight: { r: 255, g: 255, b: 0 },
    accent: { r: 255, g: 51, b: 148 },
    white: { r: 255, g: 255, b: 255 },
    black: { r: 255, g: 255, b: 255 },
    isDark: false
  },
  {
    // Orange
    background: { r: 217, g: 82, b: 31 },
    middleground: { r: 143, g: 74, b: 45 },
    foreground: { r: 255, g: 108, b: 87 },
    highlight: { r: 255, g: 126, b: 138 },
    accent: { r: 227, g: 190, b: 141 },
    white: { r: 255, g: 255, b: 255 },
    black: { r: 0, g: 0, b: 0 },
    isDark: false
  },
  {
    // Blue
    background: { r: 57, g: 109, b: 193 },
    middleground: { r: 186, g: 60, b: 223 },
    foreground: { r: 213, g: 255, b: 93 },
    highlight: { r: 213, g: 160, b: 255 },
    accent: { r: 36, g: 221, b: 165 },
    white: { r: 215, g: 236, b: 255 },
    black: { r: 0, g: 0, b: 0 },
    isDark: true
  },
  {
    // Cream
    background: { r: 255, g: 244, b: 211 },
    middleground: { r: 207, g: 145, b: 79 },
    foreground: { r: 38, g: 83, b: 122 },
    highlight: { r: 178, g: 87, b: 53 },
    accent: { r: 235, g: 192, b: 92 },
    white: { r: 226, g: 82, b: 87 },
    black: { r: 0, g: 0, b: 0 },
    isDark: false
  },
  {
    // Purple
    background: { r: 39, g: 6, b: 54 },
    middleground: { r: 69, g: 26, b: 87 },
    foreground: { r: 252, g: 25, b: 246 },
    highlight: { r: 52, g: 255, b: 253 },
    accent: { r: 133, g: 102, b: 193 },
    white: { r: 253, g: 228, b: 252 },
    black: { r: 255, g: 255, b: 255 },
    isDark: true
  }
];

let current = url.int('palette', 0);
let changing = false;
let _onStart, _onUpdate, _onComplete;
const _colors = {};
const colors = {};

keys.forEach((key) => {
  _colors[key] = { r: 0, g: 0, b: 0 };
  colors[key] = { r: 0, g: 0, b: 0 };
});
set(palette[current]);

function getRandomKey() {
  return keys[Math.floor(Math.random() * keys.length)];
};

export function get() {
  return palette[current];
}

export function set(palette) {

  amount = 0;

  for (let k in _colors) {

    const prev = _colors[k];
    const dest = palette[k];

    prev.r = dest.r;
    prev.g = dest.g;
    prev.b = dest.b;

    amount++;

    colors[k] = toRGB(prev);

  }

  return amount;

};

function tween(palette) {

  let amount = 0;

  for (let k in _colors) {

    const prev = _colors[k];
    const dest = palette[k];

    if (equals(prev, dest)) {
      amount++;
    }

    prev.r = ease(prev.r, dest.r, drag);
    prev.g = ease(prev.g, dest.g, drag);
    prev.b = ease(prev.b, dest.b, drag);

    colors[k] = toRGB(prev);

  }

  return amount;

}

export function ease(cur, dest, t) {
  const d = dest - cur;
  if (Math.abs(d) <= 0.0001) {
    return dest;
  } else {
    return cur + d * t;
  }
}

function equals(c1, c2, t) {
  const threshold = t || 0.25;
  return Math.abs(c1.r - c2.r) < threshold
      && Math.abs(c1.g - c2.g) < threshold
      && Math.abs(c1.b - c2.b) < threshold;
}

export function toRGB({ r, g, b }) {
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}

function onStart(func) {
  _onStart = func;
}
function onUpdate(func) {
  _onUpdate = func;
}
function onComplete(func) {
  _onComplete = func;
}

function update() {

  if (!changing) {
    return;
  }

  const amount = tween(palette[current]);
  if (_onUpdate) {
    _onUpdate();
  }

  if (amount >= keys.length) {
    if (changing) {
      changing = false;
      if (_onComplete) {
        _onComplete(current);
      }
    }
  }

}

export default {
  keys,
  list: palette,
  colors,
  get current() {
    return current;
  },
  set current(v) {
    current = v % palette.length;
    changing = true;
    if (_onStart) {
      _onStart(current);
    }
  },
  get changing() {
    return changing;
  },
  equals,
  getRandomKey,
  get,
  onStart,
  onUpdate,
  onComplete,
  set,
  tween,
  update
};