import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;

Router router;

void setup() {
  size(512, 200);
  router = new Router(this, 128, true);
}

void draw() {
  background(0);

  router.update();

}

void stop() {
  router.stop();
  super.stop();
}

