class Squiggle extends Neuron {

  private int amount;
  private float revolutions;
  private float angle;
  private float distance;
  private float amplitude;
  private float state = 0.0;
  private boolean entering = false;

  private float frequency;
  private PVector[] points;
  private PVector pointer;
  private PVector origin;

  Squiggle(int d) {
    duration = d / (float) 1000;
    distance = width / 2;
    amplitude = height / 4;
    angle = 0;
    revolutions = 10;
    amount = 256;
    origin = new PVector(width / 2, height / 2);
    initialize();
  }

  /**
   * Setters
   */

  public void setRevolutions(int r) {
    if (playing) {
      return;
    }
    revolutions = r;
  }

  public void setAmount(int a) {
    if (playing) {
      return;
    }
    amount = a;
  }

  public void setAngle(float a) {
    if (playing) {
      return;
    }
    angle = a;
  }

  public void setAmplitude(float a) {
    if (playing) {
      return;
    }
    amplitude = a;
  }

  public void setDistance(float d) {
    if (playing) {
      return;
    }
    distance = d;
  }

  public void initialize() {

    if (playing) {
      return;
    }

    points = new PVector[amount];
    reset();
  }

  public void reset() {

    if (playing) {
      return;
    }
    
    for (int i = 0; i < amount; i++) {
      points[i] = getPointOnLine(i / (float) amount);
    }
  }

  public void play() {
    if (playing) {
      return;
    }
    animate_in();
  }

  public void animate_in() {
    playing = true;
    entering = true;
    state = 0.0;
    Ani.to(this, duration, delay, "state", 1.0, easing, "onEnd:animate_out");
  }

  public void animate_out() {
    entering = false;
    state = 0.0;
    Ani.to(this, duration, delay, "state", 1.0, easing, "onEnd:animate_end");
  }

  public void animate_end() {
    playing = false;
    reset();
  }

  public void render() {

    if (!playing) {
      return;
    }


    strokeWeight(height / 60);
    strokeCap(ROUND);
    strokeJoin(ROUND);
    stroke(pigment.r, pigment.g, pigment.b);

    noFill();
    beginShape();
    if (entering) {
      for (int i = 0; i < amount; i++) {
        float pct = i / (float) amount;
        if (pct >= state) {
          continue;
        }
        PVector p = points[i];
        vertex(p.x, p.y);
      }
      PVector t = getPointOnLine(state);
      vertex(t.x, t.y);
    } 
    else {
      PVector l = getPointOnLine(1.0);
      vertex(l.x, l.y);
      for (int i = amount - 1; i >= 0; i--) {
        float pct = i / (float) amount;
        if (pct <= state) {
          continue;
        }
        PVector p = points[i];
        vertex(p.x, p.y);
      }
      PVector t = getPointOnLine(state);
      vertex(t.x, t.y);
    }
    endShape();
  }

  private PVector getPointOnLine(float pct) {

    float half_distance = distance / 2;
    float theta = pct * revolutions * TWO_PI;
    float up = angle - HALF_PI;

    float x = origin.x - (half_distance) * cos(angle);
    x += pct * distance * Math.cos(angle);
    x += cos(up) * cos(theta) * amplitude;

    float y = origin.y - (half_distance) * sin(angle);
    y += pct * distance * Math.sin(angle);
    y += sin(up) * sin(theta + up) * amplitude;

    return new PVector(x, y);
  }
}

