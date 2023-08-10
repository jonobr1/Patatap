export function each(list, func) {
  return Array.prototype.forEach.call(list, func);
}

export function clamp(v, a, b) {
  return Math.min(Math.max(v, a), b);
}

export function range(n) {
  return [...Array(n).keys()]
}

export function defaults(base) {

  if (arguments.length < 2) {
    return base;
  }

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    for (var k in obj) {
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

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    for (var k in obj) {
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

  var timer;

  return function() {

    if (timer) {
      clearTimeout(timer);
    }

    var scope = this;
    var args = arguments;

    timer = setTimeout(function() {
      timer = null;
      func.apply(scope, args);
    }, timeout);

  };

}

export function once(func) {
  let fired = false;
  return function() {
    if (!fired) {
      func.apply(this, arguments);
      fired = true;
    }
  };
}

export function after(times, func) {
  let invocations = 0;
  return function() {
    if (invocations++ <= times - 1) {
      func.apply(this, arguments);
    }
  }
}