import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;
Engine engine;
Moon moon;
Prism prism;
Suspension suspension;
Clay clay;

PApplet app;

void setup() {

  size(800, 600);

  app = this;
  router = new Router(this, 128, false);
  Ani.init(this);

  suspension = new Suspension(500);
  engine = new Engine(router, width / 2, height / 2, width * .75, height / 2);
  moon = new Moon(250);
  prism = new Prism(500);
  clay = new Clay(500);

  noCursor();
  smooth();
}

void draw() {

  background(181);
  //    max(200 - 255 * router.getBand(router.depth / 10, true), 0),
  //    max(200 - 255 * router.getBand(router.depth / 12, true), 0),
  //    max(200 - 255 * router.getBand(router.depth / 14, true), 0));

  router.update();

  clay.render();
  prism.render();
  moon.render();
  engine.render();
  suspension.render();
}

void keyReleased() {
  if (key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setColor(color(255 * amp));
    engine.setAmount((int) map(amp, 0, 1, 1, 12));
    engine.play();
  } 
  else if (key == 'm' || key == 'M') {
    moon.play();
  } 
  else if (key == 'p' || key == 'P') {
    float amp = router.getBand(router.depth - router.depth / 4, false);
    prism.setAmount(floor(map(amp, 0, 1, 3, 12)));
    prism.play();
  } 
  else if (key == 's' || key == 'S') {
    suspension.setTheta(random(TWO_PI));
    suspension.initialize();
    suspension.play();
  } 
  else if (key =='c' || key == 'C') {
    clay.setAmount((int) random(8, 16));
    float x, y, pos = random(8);
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
    clay.setOrigin(x, y);
    clay.setImpact(random(width), random(height));
    clay.initialize();
    clay.play();
  }
}

void stop() {
  router.stop();
  super.stop();
}

