import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;
Engine engine;
Moon moon;
PApplet app;

void setup() {
  size(800, 600, OPENGL);
  app = this;
  router = new Router(this, 128, false);
  Ani.init(this);
  engine = new Engine(router, width / 2, height / 2, width * .75, height / 2);
  moon = new Moon(150);
  noCursor();
  smooth();
}

void draw() {

  background(181);
//    max(200 - 255 * router.getBand(router.depth / 10, true), 0),
//    max(200 - 255 * router.getBand(router.depth / 12, true), 0),
//    max(200 - 255 * router.getBand(router.depth / 14, true), 0));

  router.update();
  moon.render();
  engine.render();
}

void keyReleased() {
  if (key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setColor(color(255 * amp));
    engine.setAmount((int) map(amp, 0, 1, 1, 12));
    engine.play();
  } else if (key == 's' || key == 'S') {
    moon.play();
  }
  
}

void stop() {
  router.stop();
  super.stop();
}

