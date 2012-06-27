import de.looksgood.ani.*;
import de.looksgood.ani.easing.*;

import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;
Engine engine;
PApplet app;

void setup() {
  size(800, 600, OPENGL);
  app = this;
  router = new Router(this, 128, false);
//  router.setSensitivity(300);
  Ani.init(this);
  engine = new Engine(router, width / 2, height / 2, width, height);
  noCursor();
  smooth();
}

void draw() {

  background(0);
//    max(200 - 255 * router.getBand(router.depth / 10, true), 0),
//    max(200 - 255 * router.getBand(router.depth / 12, true), 0),
//    max(200 - 255 * router.getBand(router.depth / 14, true), 0));

  router.update();
  engine.render();
}

void keyReleased() {
  if (key == 'e' || key == 'E') {
    float amp = router.getBand(router.depth / 4, false);
    engine.setColor(color(255 * amp));
    engine.setAmount((int) map(amp, 0, 1, 1, 12));
    engine.play();
  }
}

void stop() {
  router.stop();
  super.stop();
}

