import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;

void setup() {
  size(512, 200, OPENGL);
  router = new Router(this, 128, true);
  router.setSensitivity(300);
}

void draw() {

  background(0);

  router.update();

  if (router.isRange(0, 9, 1)) {
    fill(255, 0, 0);
    rect(0, 0, width, height);
  }

}

void stop() {
  router.stop();
  super.stop();
}

