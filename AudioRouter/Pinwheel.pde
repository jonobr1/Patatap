class Pinwheel extends Neuron {

  private float startAngle;
  private float endAngle;
  private float drift;
  private float distance;
  private PVector origin;
  private int amount; 
  private PVector[] points;
  private float slave = 0;
  public color pigment = color(255, 197, 215);
  private float dur;
//  public Easing easing = Ani.LINEAR;

  Pinwheel(int d) {
    duration = d / (float) 1000;
    amount = 8;
    dur = duration / (float) (amount + 2);
    origin = new PVector(width / 2, height / 2);
    distance = height / 6;
    startAngle = 0;
    endAngle = TWO_PI;
    drift = random(TWO_PI);
    initialize();
  }

  /**
   * Getters
   */

  /**
   * Setters
   */

  public void setAmount(int a) {
    amount = a;
  }

  public void setDrift(float d) {
    drift = d;
  }

  public void setAngles(float s, float e) {
    startAngle = s;
    endAngle = e;
  }

  public void initialize() {
    points = new PVector[amount];
    for (int i = 0; i < amount; i++) {
      points[i] = new PVector();
    }
    reset();
  }

  public void reset() {
    for (int i = 0; i < amount; i++) {
      float pct = i / (float) amount;
      float theta = startAngle;
      points[i].x = distance * cos(theta) + origin.x;
      points[i].y = distance * sin(theta) + origin.y;
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

    AniSequence s = new AniSequence(app);
    s.beginSequence();

    for (int i = 0; i < amount; i++) {

      int index = i + 1;
      float _drift = drift / (float) index;
      float center = PI * (index / (float) amount);
      
      
      s.beginStep();
      for (int j = 0; j < amount; j++) {

        float pct = min(j / (float) index, 1.0);
        float theta = pct * endAngle + startAngle + center + drift;
        
        PVector p = points[j];
        float x, y;

//        if (j >= index) {
//          x = origin.x;
//          y = origin.y;
//        } else {
          x = distance * cos(theta) + origin.x;
          y = distance * sin(theta) + origin.y;
//        }

        s.add(Ani.to(p, dur, "x", x, easing));
        s.add(Ani.to(p, dur, "y", y, easing));

      }
      s.endStep();
    }

    s.beginStep();
    s.add(Ani.to(this, dur, "slave", 0, easing, "onEnd:animate_out"));
    s.endStep();  
    s.endSequence();
    s.start();
  }

  public void animate_out() {
    
    AniSequence s = new AniSequence(app);
    
    s.beginSequence();
    s.beginStep();
    
    for (int i = 0; i < amount; i++) {
      PVector p = points[i];
      s.add(Ani.to(p, dur, "x", origin.x, easing));
      s.add(Ani.to(p, dur, "y", origin.y, easing));
    }
    
    s.endStep();
    s.beginStep();
    s.add(Ani.to(this, 0, "slave", 0, easing, "onEnd:animate_end")); 
    s.endStep();
    s.endSequence();
    s.start();
  }
  
  public void animate_end() {
    playing = false;
    reset();
  }

  public void render() {

    if (!playing) {
      return;
    }

    noStroke();
    fill(pigment);
    beginShape();
    for (int i = 0; i < amount; i++) {
      PVector p = points[i];
//      if (p.x == origin.x && p.y == origin.y) {
//        continue;
//      }
      vertex(p.x, p.y);
    }
    endShape(CLOSE);
  }
}

