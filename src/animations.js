var two = new Two({
  fullscreen: true
}).appendTo(document.body);

/**
 * Collection of animations and such for Neuronal Synchrony.
 */

window.animations = (function() {

  var width = two.width, height = two.height;
  var center = { x: width / 2, y: height / 2 };
  var duration = 1000;
  var drag = 0.0625;

  var Easing = TWEEN.Easing;
  var PALETTE = [
    {
      background: { r: 181, g: 181, b: 181 },
      middleground: { r: 141, g: 164, b: 170 },
      foreground: { r: 227, g: 79, b: 12 },
      highlight: { r: 163, g: 141, b: 116 },
      accent: { r: 255, g: 197, b: 215 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 0, g: 0, b: 0 }
    },
    {
      background: { r: 57, g: 109, b: 193 },
      middleground: { r: 186, g: 60, b: 223 },
      foreground: { r: 213, g: 255, b: 93 },
      highlight: { r: 213, g: 160, b: 255 },
      accent: { r: 36, g: 221, b: 165 },
      white: { r: 215, g: 236, b: 255 },
      black: { r: 0, g: 0, b: 0 }
    },
    {
      background: { r: 217, g: 82, b: 31 },
      middleground: { r: 143, g: 74, b: 45 },
      foreground: { r: 255, g: 108, b: 87 },
      highlight: { r: 255, g: 126, b: 138 },
      accent: { r: 227, g: 190, b: 141 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 0, g: 0, b: 0 }
    },
    {
      background: { r: 255, g: 244, b: 211 },
      middleground: { r: 207, g: 145, b: 79 },
      foreground: { r: 38, g: 83, b: 122 },
      highlight: { r: 178, g: 87, b: 53 },
      accent: { r: 235, g: 192, b: 92 },
      white: { r: 226, g: 82, b: 87 },
      black: { r: 0, g: 0, b: 0 }
    },
    {
      background: { r: 191, g: 178, b: 138 },
      middleground: { r: 115, g: 44, b: 3 },
      foreground: { r: 89, g: 81, b: 57 },
      highlight: { r: 217, g: 210, b: 176 },
      accent: { r: 242, g: 239, b: 220 },
      white: { r: 22, g: 33, b: 44 },
      black: { r: 255, g: 255, b: 255 }
    },
    {
      background: { r: 255, g: 255, b: 255 },
      middleground: { r: 151, g: 41, b: 164 },
      foreground: { r: 1, g: 120, b: 186 },
      highlight: { r: 255, g: 255, b: 0 },
      accent: { r: 255, g: 51, b: 148 },
      white: { r: 255, g: 255, b: 255 },
      black: { r: 255, g: 255, b: 255 }
    },
    {
      background: { r: 39, g: 6, b: 54 },
      middleground: { r: 69, g: 26, b: 87 },
      foreground: { r: 252, g: 25, b: 246 },
      highlight: { r: 52, g: 255, b: 253 },
      accent: { r: 133, g: 102, b: 193 },
      white: { r: 253, g: 228, b: 252 },
      black: { r: 255, g: 255, b: 255 }
    }
  ];
  var current = 0
  var _colors = {};
  var colors = {};

  _.each(PALETTE[current], function(v, k) {
    _colors[k] = _.clone(v);
    colors[k] = toString(v);
  });

  document.body.style.background = colors.background;

  var prism = (function() {

    var amount = 6, r1 = 100, r2 = 2, scalar = 10;

    var circles = [];
    var points = _.map(_.range(amount), function(i) {
      var pct = i / amount;
      var theta = Math.PI * 2 * pct;
      var x = r1 * Math.cos(theta);
      var y = r1 * Math.sin(theta);
      var circle = two.makeCircle(x, y, r2);
      circle.fill = colors.black;
      circle.noStroke();
      circles.push(circle);
      return new Two.Vector(x, y);
    });

    var prism = two.makePolygon(points);
    prism.stroke = colors.black;
    prism.noFill();
    prism.linewidth = 0.5;

    var group = two.makeGroup(prism).add(circles);
    group.translation.set(width / 2, height / 2);

    var options = { ending: 0 };

    var start = function() {
      group.visible = true;
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      prism.stroke = colors.black;
      _.each(circles, function(c) {
        c.fill = colors.black;
      });
    };
    var resize = function() {
      group.translation.set(width / 2, height / 2);
    };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1 }, duration)
      .easing(Easing.Circular.In)
      .onUpdate(function() {
        group.scale = options.ending * scalar;
      })
      .onComplete(function() {
        start.onComplete();
      });

    function reset() {
      group.visible = false;
      group.rotation = Math.random() * Math.PI * 2;
      options.ending = group.scale = 0;
    }

    reset();

    return {
      start: start,
      update: update,
      resize: resize
    };

  })();

  var clay = (function() {

    var amount = 8, w = width * Math.random(), h = height * Math.random();
    var distance = height, rotation = Math.PI / 2;

    var destinations = [];
    var points = _.map(_.range(amount), function(i) {
      var pct = i / amount;
      var theta = Math.PI * 2 * pct;
      var x = distance * Math.sin(theta);
      var y = distance * Math.cos(theta);
      destinations.push(new Two.Vector(x, y));
      return new Two.Vector(x, y);
    });

    var clay = two.makeCurve(points);
    clay.fill = colors.middleground;
    clay.noStroke();

    points = clay.vertices;

    var start = function() {
      clay.visible = true;
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      clay.fill = colors.middleground;
    };
    var resize = function() {};

    var options = { ending: 0 };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1 }, duration * 1.5)
      .easing(Easing.Circular.InOut)
      .onUpdate(function() {
        var t = options.ending;
        _.each(points, function(v, i) {
          var d = destinations[i];
          var x = lerp(v.x, d.x, t);
          var y = lerp(v.y, d.y, t);
          v.set(x, y);
        });
      })
      .onComplete(function() {
        start.onComplete();
      })

    function reset() {
      clay.visible = false;
      impact = new Two.Vector(Math.random() * width, Math.random() * height);
      var x, y, pos = Math.random() * 8;

      if (pos > 7) {
        // north
        x = width / 2;
        y = 0;
      } else if (pos > 6) {
        // north-west
        x = 0;
        y = 0;
      } else if (pos > 5) {
        // west
        x = 0;
        y = height / 2;
      } else if (pos > 4) {
        // south-west
        x = 0;
        y = height;
      } else if (pos > 3) {
        // south
        x = width / 2;
        y = height;
      }  else if (pos > 2) {
        // south-east
        x = width;
        y = height;
      } else if (pos > 1) {
        // east
        x = width;
        y = height / 2;
      } else {
        x = width;
        y = 0;
      }

      clay.translation.set(x, y);
      options.ending = 0;
      distance = height;

      _.each(points, function(v, i) {
        var v = points[i];
        var pct = i / amount;
        var ptheta = pct * Math.PI * 2 + rotation;
        var theta = angleBetween(v, impact) - ptheta;
        v.set(distance * Math.cos(ptheta), distance * Math.sin(ptheta));
        var d = v.distanceTo(impact);
        var a = 5 * distance / Math.sqrt(d);
        var x = a * Math.cos(theta) + v.x;
        var y = a * Math.sin(theta) + v.y;
        destinations[i].set(x, y);
      });
    }

    reset();

    return {
      start: start,
      update: update,
      resize: resize
    };

  })();

  var pistons = (function() {

    var amount = 6, w = width * 0.75, h = height / 2;
    var begin, end;

    var shapes = _.map(_.range(amount), function(i) {

      var pct = i / amount;
      var d = h / amount - h / 40;
      var x = center.x;
      var y = (center.y - h / 2) + i * h / amount;

      var shape = two.makeRectangle(x, y, w, d);

      shape.fill = colors.white;
      shape.noStroke();

      return shape;

    });

    var options = { ending: 0, beginning: 0 };

    var start = function() {
      _.each(shapes, function(shape) {
        shape.visible = true;
      });
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      _.each(shapes, function(s) {
        s.fill = colors.white;
      });
    }; // Mainly for color in the future
    var resize = function() {

      w = width * 0.75, h = height / 2;

      _.each(shapes, function(shape, i) {

        var pct = i / amount;
        var d = h / amount - h / 40;
        var x = center.x;
        var y = (center.y - h / 2) + i * h / amount;

        shape.translation.set(x, y);

        var points = shape.vertices;

        points[2].y = points[3].y = - d / 2;
        points[0].y = points[1].y =   d / 2;

      });

    };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1.0 }, duration / 2)
      .easing(Easing.Cubic.Out)
      .onUpdate(function() {
        _.each(shapes, function(s) {
          var points = s.vertices;
          points[3].x = points[0].x = end * options.ending;
        });
      })
      .onComplete(function() {
        _out.start();
      });

    var _out = new TWEEN.Tween(options)
      .to({ beginning: 1.0 }, duration / 2)
      .easing(Easing.Cubic.Out)
      .onUpdate(function() {
        _.each(shapes, function(s) {
          var points = s.vertices;
          points[1].x = points[2].x = end * options.beginning;
        });
      })
      .onComplete(function() {
        start.onComplete();
      });

    function reset() {
      options.beginning = options.ending = 0;
      var rotated = Math.random() > 0.5 ? true : false;
      if (rotated) {
        begin = - w / 2;
        end = w / 2;
      } else {
        begin = w / 2;
        end = - w / 2;
      }
      _.each(shapes, function(s) {
        shapes.visible = false;
        var points = s.vertices;
        points[0].x = points[1].x = points[2].x = points[3].x = begin;
      });
    }

    reset();

    return {
      update: update,
      resize: resize,
      start: start
    };

  })();

  var suspension = (function() {

    var amount = 32, r1 = 3, r2 = 10, theta, deviation, amplitude = width / 2;

    var destinations = [];
    var circles = _.map(_.range(amount), function(i) {
      var circle = two.makeCircle(0, 0, Math.round(map(Math.random(), 0, 1, r1, r2)));
      circle.fill = colors.white;
      circle.noStroke();
      destinations.push(new Two.Vector());
      return circle;
    });

    var group = two.makeGroup(circles);
    group.translation.set(width / 2, height / 2);

    var start = function() {
      _.each(circles, function(c) {
        c.visible = true;
      })
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      group.fill = colors.white;
    };
    var resize = function() {
      group.translation.set(width / 2, height / 2);
    };

    var options = { ending: 0 };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1 }, duration)
      .easing(Easing.Circular.In)
      .onUpdate(function() {
        var t = options.ending;
        _.each(circles, function(c, i) {
          var d = destinations[i];
          var x = lerp(c.translation.x, d.x, t);
          var y = lerp(c.translation.y, d.y, t);
          c.translation.set(x, y);
        });
      })
      .onComplete(function() {
        start.onComplete();
      });

    function reset() {

      theta = Math.random() * Math.PI * 2;
      deviation = map(Math.random(), 0, 1, Math.PI * 0.25, Math.PI);
      var hd = deviation / 2;
      amplitude = height * 0.66;
      var ha = amplitude / 2;

      options.ending = 0;

      _.each(circles, function(c, i) {
        c.visible = false;
        c.translation.set(0, 0);
        var t = theta + map(Math.random(), 0, 1, - hd, hd);
        var distance = Math.random() * ha + ha;
        var x = distance * Math.cos(t);
        var y = distance * Math.sin(t);
        destinations[i].set(x, y);
      });
    }

    reset();

    return {
      start: start,
      update: update,
      resize: resize
    };

  })();

  var timer = (function() {

    var amount = 128, radius = height / 3;

    var points = _.map(_.range(amount), function(i) {

      var pct = i / amount;
      var theta = pct * Math.PI * 2;
      var x = radius * Math.cos(theta);
      var y = radius * Math.sin(theta);

      return new Two.Vector(x, y);

    });

    points.push(points[0], points[1]);

    var timer = two.makePolygon(points, true);
    timer.stroke = colors.highlight;
    timer.cap = 'butt';
    timer.linewidth = height / 10;
    timer.noFill();

    timer.translation.set(width / 2, height / 2);

    points = timer.vertices;

    var start = function() {
      timer.visible = true;
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      timer.stroke = colors.highlight;
    };
    var resize = function() {
      timer.translation.set(width / 2, height / 2);
      radius = height / 3;
      timer.linewidth = height / 10;
      _.each(points, function(v, i) {
        var pct = i / amount;
        var theta = pct * Math.PI * 2;
        var x = radius * Math.cos(theta);
        var y = radius * Math.sin(theta);
        v.set(x, y);
      });
    };

    var options = { ending: 0, beginning: 0 };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1 }, duration)
      .easing(Easing.Circular.Out)
      .onUpdate(function() {
        timer.ending = options.ending;
      })
      .onComplete(function() {
        _out.start();
      });

    var _out = new TWEEN.Tween(options)
      .to({ beginning: 1 }, duration)
      .easing(Easing.Circular.In)
      .onUpdate(function() {
        timer.beginning = options.beginning;
      })
      .onComplete(function() {
        start.onComplete();
      });

    function reset() {
      timer.visible = false;
      timer.rotation -= Math.PI / 8;
      options.ending = options.beginning = 0;
      timer.ending = timer.beginning = 0;
    }

    reset();

    return {
      start: start,
      update: update,
      resize: resize
    };

  })();

  var moon = (function() {

    var amount = 32, half = amount / 2;
    var radius = height * 0.33;

    var destinations = [];
    var points = _.map(_.range(amount), function(i) {
      var pct = i / amount;
      var theta = pct * Math.PI * 2;
      var x = radius * Math.cos(theta);
      var y = radius * Math.sin(theta);
      destinations.push({ x: x, y: y });
      return new Two.Vector(x, y);
    });

    var moon = two.makePolygon(points);
    moon.translation.set(width / 2, height / 2);
    moon.fill = colors.foreground;
    moon.noStroke();

    var options = { ending: 0, beginning: 0 };

    var start = function() {
      moon.visible = true;
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      moon.fill = colors.foreground;
    };
    var resize = function() {
      radius = height * 0.33;
      moon.translation.set(width / 2, height / 2);
    };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1.0 }, duration)
      .easing(Easing.Circular.Out)
      .onUpdate(function() {
        var t = options.ending;
        for (var i = half; i < amount; i++) {
          var v = points[i];
          var d = destinations[i];
          var y = lerp(v.y, d.y, t);
          v.y = y;
        }
      })
      .onComplete(function() {
        _out.start();
      });

    var _out = new TWEEN.Tween(options)
      .to({ beginning: 1.0 }, duration)
      .easing(Easing.Circular.Out)
      .onUpdate(function() {
        var t = options.beginning;
        for (var i = 0; i < half; i++) {
          var v = points[i];
          var d = destinations[i];
          var y = lerp(v.y, negate(d.y), t);
          v.y = y;
        }
      })
      .onComplete(function() {
        start.onComplete();
      })

    function reset() {
      moon.visible = false;
      moon.rotation = Math.random() * Math.PI * 2;
      options.beginning = options.ending = 0;
      _.each(points, function(v, i) {
        var pct = i / amount;
        var theta = pct * Math.PI * 2;
        var x = radius * Math.cos(theta);
        var y = radius * Math.sin(theta);
        destinations[i] = { x: x, y: y };
        v.set(x, Math.abs(y));
      });
    }

    reset();

    return {
      resize: resize,
      update: update,
      start: start
    };

  })();

  var squiggle = (function() {

    var amount = 200, w = width / 2, phi = 6, h = height * 0.33;
    var offset = Math.PI * 0.55;

    var points = _.map(_.range(amount), function(i) {
      var pct = i / amount;
      var theta = Math.PI * 2 * phi * pct + offset;
      var x = map(pct, 0, 1, - w / 2, w / 2);
      var y = h * Math.sin(theta);
      return new Two.Vector(x, y);
    });

    var squiggle = two.makeCurve(points, true);
    squiggle.translation.set(width / 2, height / 2);
    squiggle.stroke = colors.accent;
    squiggle.linewidth = 12;
    squiggle.noFill();

    points = squiggle.vertices;

    var start = function() {
      squiggle.visible = true;
      _in.start();
    };

    start.onComplete = reset;

    var update = function() {
      squiggle.stroke = colors.accent;
    };
    var resize = function() {
      w = width / 2;
      h = height * 0.33;
      squiggle.translation.set(width / 2, height / 2);
    };

    var options = { ending: 0, beginning: 0 };

    var _in = new TWEEN.Tween(options)
      .to({ ending: 1.0 }, duration)
      .easing(Easing.Cubic.Out)
      .onUpdate(function() {
        squiggle.ending = options.ending;
      })
      .onComplete(function() {
        _out.start();
      });

    var _out = new TWEEN.Tween(options)
      .to({ beginning: 1.0 }, duration)
      .easing(Easing.Cubic.In)
      .onUpdate(function() {
        squiggle.beginning = options.beginning;
      })
      .onComplete(function() {
        start.onComplete();
      })

    function reset() {
      squiggle.visible = false;
      phi = Math.round(Math.random() * 6) + 1;
      offset = Math.PI / 2;
      squiggle.rotation = Math.random() > 0.5 ? Math.PI : 0;
      options.beginning = options.ending = 0;
      squiggle.beginning = squiggle.ending = 0;
      _.each(points, function(v, i) {
        var pct = i / amount;
        var theta = Math.PI * 2 * phi * pct + offset;
        var x = map(pct, 0, 1, - w / 2, w / 2);
        var y = h * Math.sin(theta);
        v.set(x, y);
      })
    }

    reset();

    return {
      start: start,
      resize: resize,
      update: update
    };

  })();

  two.bind('resize', function() {
    width = two.width;
    height = two.height;
    center.x = width / 2;
    center.y = height / 2;
    pistons.resize();
    moon.resize();
    suspension.resize();
    prism.resize();
    squiggle.resize();
    timer.resize();
  });

  var changedColors = false;
  var changeColors = function() {
    current = (current + 1) % PALETTE.length;
    changedColors = false;
  };

  changeColors.onComplete = function() {};

  return {

    // An update loop

    update: function() {
      var palette = PALETTE[current];
      var amount = 0;
      _.each(_colors, function(v, k) {
        var c = palette[k];
        var r = v.r, g = v.g, b = v.b;
        if (_.isEqual(c, v)) {
          amount++;
        }
        v.r = ease(r, c.r, drag);
        v.g = ease(g, c.g, drag);
        v.b = ease(b, c.b, drag);
        colors[k] = toString(v);
      });
      if (amount >= PALETTE.length) {
        if (!changedColors) {
          changedColors = true;
          changeColors.onComplete();
        }
        return;
      }
      squiggle.update();
      moon.update();
      timer.update();
      suspension.update();
      pistons.update();
      clay.update();
      prism.update();
      document.body.style.background = colors.background;
    },

    // The animations!

    initializers: [
      prism.start,
      moon.start,
      pistons.start,
      squiggle.start,
      timer.start,
      clay.start,
      suspension.start,
      changeColors
    ]

  };

})();

function ease(cur, dest, t) {
  var d = dest - cur;
  if (Math.abs(d) <= 0.0001) {
    return dest;
  } else {
    return cur + d * t;
  }
}

function toString(o) {
  return 'rgb(' + Math.round(o.r) + ',' + Math.round(o.g) + ',' + Math.round(o.b) + ')';
}

function angleBetween(v1, v2) {
  var dx = v2.x - v1.x;
  var dy = v2.y - v2.y;
  return Math.atan2(dy, dx);
}

function negate(v) {
  return v * -1;
}

function lerp(a, b, t) {
  return (b - a) * t + a;
}

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}