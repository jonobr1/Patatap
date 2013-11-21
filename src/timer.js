(function() {

  var x = two.width / 2;
  var y = two.height / 2;
  var radius = two.height / 4;
  var duration = 1000;

  var amount = 128;

  var points = _.map(_.range(128), function(i) {
    var pct = i / amount;
    var theta = pct * Math.PI * 2;
    var x = radius * Math.cos(theta);
    var y = radius * Math.sin(theta);
    return new Two.Vector(x, y);
  });

  points
    .push(
      new Two.Vector().copy(points[0]),
      new Two.Vector().copy(points[1])
    );

  var shape = two.makePolygon(points, true);
  shape.closed = false;
  shape.cap = 'butt';
  shape.stroke = COLORS.accent;
  shape.noFill();

  var options = {
    beginning: 0,
    ending: 0
  };

  var animate_in = new TWEEN.Tween(options)
    .to({ ending: 1.0 }, duration)
    .onUpdate(function() {
      shape.ending = options.ending;
    })
    .easing(TWEEN.Easing.Cubic.Out)
    .onComplete(function() {
      animate_out.start();
    });

  var animate_out = new TWEEN.Tween(options)
    .to({ beginning: 1.0 }, duration)
    .onUpdate(function() {
      shape.beginning = options.beginning;
    })
    .easing(TWEEN.Easing.Cubic.In)
    .onComplete(reset);

  trigger.add({
    start: function() {
      shape.visible = true;
      animate_in();
    }
  }, animate_out, 200, 0.1);

  function reset() {
    shape.visible = false;
    shape.scale = Math.random() * 2 + 1;
    shape.linewidth = Math.round(Math.random() * 20) + 8;
    shape.rotation = Math.random() * Math.PI * 2;
    shape.beginning = shape.ending = options.beginning = options.ending = 0;
  }

  function updatePosition() {
    shape.translation.set(two.width / 2, two.height / 2);
  }

  two.bind('resize', updatePosition);

  updatePosition();

  reset();

})();