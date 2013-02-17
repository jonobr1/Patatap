(function() {

  var amount = 1, radius = 100, duration = 1000;

  _.each(_.range(amount), function(i) {

    var pct = (i + 1) / amount;

    var amt = i + 3;
    var circles = [];

    var points = _.map(_.range(amt), function(j) {
      var pct = j / amt;
      var theta = pct * Math.PI * 2.0;
      var x = radius * Math.cos(theta);
      var y = radius * Math.sin(theta);
      var circle = two.makeCircle(x, y, 2);
      circle.fill = COLORS.black;
      circle.noStroke();
      circles.push(circle);
      return new Two.Vector(x, y);
    });

    var poly = two.makePolygon(points);
    poly.stroke = COLORS.black;
    poly.linewidth = 0.5;
    poly.noFill();

    var group = two.makeGroup(poly);
    group.translation.set(two.width / 2, two.height / 2);

    group.add(circles);

    var options = {
      scale: 0
    };

    var animate = new TWEEN.Tween(options)
      .to({ scale: 10 }, duration)
      .easing(TWEEN.Easing.Circular.Out)
      .onUpdate(function() {
        group.scale = options.scale;
      })
      .onComplete(reset);

    trigger.add({
      start: function() {
        group.visible = true;
        animate.start();
      }
    }, animate, Math.round(pct * 256), 0.1);

    function reset() {
      group.rotation = Math.PI * 2 * Math.random();
      group.visible = false;
      options.scale = 0;
      group.scale = 0;
    }

    reset();

  });

})();