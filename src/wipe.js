(function() {

  /**
   * Vertex structure for Rectangle
   * 
   * 2 - 3
   * |   |
   * 1 - 0
   *
   */

  var duration = 1000;
  var width = two.width, height = two.height, x = width / 2, y = height / 2;
  var shape = two.makeRectangle(x, y, width, height);

  shape.fill = COLORS.background;
  shape.noStroke();

  var points = shape.vertices;

  points[3].x = points[2].x;
  points[0].x = points[1].x;

  var animate_in = new TWEEN.Tween({ x: 0 }).to({ x: 1 }, duration)
    .easing(TWEEN.Easing.Circular.Out)
    .onUpdate(function(v) {
      points[3].x = points[0].x = width * v;
    })
    .onComplete(function() {
      animate_out.start();
    });

  var animate_out = new TWEEN.Tween({ x: 0 }).to({ x: 1 }, duration)
    .easing(TWEEN.Easing.Circular.Out)
    .onUpdate(function(v) {
      points[1].x = points[2].x = width * v;
    })
    .onComplete(function() {
      points[3].x = points[2].x = points[1].x = points[0].x = - width / 2;
      shape.visible = false;
    });

  // Reset shape dimensions on resize.

  two.bind('resize', function() {

    width = two.width;
    height = two.height;

    x = width / 2;
    y = height / 2;

    shape.translation.set(x, y);
    points[2].y = points[3].y = - y;
    points[1].y = points[0].y = y;

  });

  trigger.add({
    start: function() {
      shape.visible = true;
      animate_in.start();
    }
  }, animate_out, 25, 0.3);

})();