export function each(list, func) {
  return Array.prototype.forEach.call(list, func);
}

export function clamp(v, a, b) {
  return Math.min(Math.max(v, a), b);
}

export function map(v, a, b, c, d) {
  const pct = (v - a) / (b - a);
  return pct * (d - c) + c;
}

export function range(n) {
  return [...Array(n).keys()]
}

export function defaults(base) {

  if (arguments.length < 2) {
    return base;
  }

  for (let i = 1; i < arguments.length; i++) {
    const obj = arguments[i];
    for (let k in obj) {
      if (typeof base[k] == 'undefined') {
        base[k] = obj[k];
      }
    }
  }

  return base;

}

export function extend(base) {

  if (arguments.length < 2) {
    return base;
  }

  for (let i = 1; i < arguments.length; i++) {
    const obj = arguments[i];
    for (let k in obj) {
      base[k] = obj[k];
    }
  }

  return base;

}

export function mod(v, l) {
  while (v < 0) {
    v += l;
  }
  return v % l;
}

export function debounce(func, timeout) {

  let timer;

  return () => {

    if (timer) {
      clearTimeout(timer);
    }

    const scope = this;
    const args = arguments;

    timer = setTimeout(() => {
      timer = null;
      func.apply(scope, args);
    }, timeout);

  };

}

export function once(func) {
  let fired = false;
  return () => {
    if (!fired) {
      func.apply(this, arguments);
      fired = true;
    }
  };
}

export function after(times, func) {
  let invocations = 0;
  return () => {
    if (invocations++ <= times - 1) {
      func.apply(this, arguments);
    }
  }
}