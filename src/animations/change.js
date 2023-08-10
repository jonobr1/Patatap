import { range } from "../underscore.js";
import { register } from "./index.js";
import palette from "./palette.js";

const name = 'change-colors';
const hash = '3,';

let playing = false;

function start() {
  palette.current = palette.current + 1;
  playing = true;
}

function update() {}
function resize() {}
function clear() {}

const animation = {
  start,
  update,
  clear,
  resize,
  get playing() { return playing },
  hash,
  name
};


range(8).forEach((i) => {
  register(`${hash}${i}`, animation);
});
register('2,7', animation);

export default animation;