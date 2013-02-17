(function() {

  var amount = 8;
  var destination = [];
  var radius = 50;
  var duration = 150;

  var points = _.map(_.range(amount), function(i) {
    var pct = i / amount;
    var theta = pct * Math.PI * 2;
    var x = radius * Math.cos(theta);
    var y = radius * Math.sin(theta);
    destination.push(new Two.Vector(x, y));
    return new Two.Vector(0, 0);
  });

  var poly = two.makePolygon(points);
  poly.translation.set(two.width / 2, two.height / 2);
  poly.fill = COLORS.highlight;
  poly.noStroke();

  var options = {
    scale: poly.scale,
    rotation: 0
  };

  var animate_out = new TWEEN.Tween(options)
    .to({ scale: 0 }, duration * 2)
    .onUpdate(function() {
      poly.scale = options.scale;
    })
    .easing(TWEEN.Easing.Circular.In)
    .onComplete(reset);

  var rotation = new TWEEN.Tween(options)
    .onUpdate(function() {
      poly.rotation = options.rotation;
    });

  var tweens = _.map(points, function(p, i) {

    var d = destination[i];
    var v = { x: p.x, y: p.y };
    var t = new TWEEN.Tween(v)
      .to({
        x: d.x,
        y: d.y
      }, duration)
      .onUpdate(function() {
        p.x = v.x;
        p.y = v.y;
      })
      .easing(TWEEN.Easing.Circular.InOut)
      .delay(i * duration / 2);

    t.v = v;

    if (i >= amount - 1) {
      t.onComplete(function() {
        // reset();
        animate_out.start();
      });
    }

    return t;

  });

  trigger.add({ start: begin }, animate_out, 128, 0.1);

  function begin() {
    poly.visible = true;
    _.each(tweens, function(t) {
      t.start();
    });
    rotation.start();
  }

  function reset() {
    poly.visible = false;
    options.rotation = poly.rotation = 0;
    rotation.to({
      rotation: Math.PI * Math.random() * 6 * randomSign()
    }, points.length * duration / 2 + duration);
    poly.scale = options.scale = 5.0 * Math.random() + 1.0;
    _.each(points, function(v, i) {
      var t = tweens[i].v;
      v.x = v.y = t.x = t.y = 0;
    });
  }

  reset();

  two.bind('resize', function() {
    poly.translation.set(two.width / 2, two.height / 2);
  });

  function randomSign() {
    return Math.random() > 0.5 ? 1 : -1;
  }

})();