class Moon extends Neuron {

  public float x;
  public float y;
  public float r;

  private int amount = 16;
  private PVector[] _points;  // Reference
  private PVector[] points;   // Animated

  Moon(int d) {
    pigment = color(227, 79, 12);
    x = width / 2;
    y = height / 2;
    r = height / 3;
    setDuration(d);
    initialize();
  }

  Moon(float _x, float _y, float _r) {
    x = _x;
    y = _y;
    r = _r;
    initialize();
  }

  public void initialize() {

    _points = new PVector[amount];
    points = new PVector[amount];
    reset();
  }

  public void play() {
    animate_in();
  }

  public void animate_in() {
    
    AniSequence s = new AniSequence(app);
    s.beginSequence();
    s.beginStep();
    
    int l = amount;
    for (int i = 0; i < l; i++) {
      PVector pos = points[i];
      PVector ref = _points[i];
      s.add(Ani.to(pos, duration, delay, "x", ref.x, easing));
      if (i < l - 1) {
        s.add(Ani.to(pos, duration, delay, "y", ref.y, easing));
      } 
      else {
        s.add(Ani.to(pos, duration, delay, "y", ref.y, easing));
      }
    }
    
    s.endStep();
    s.endSequence();
    s.start();
    
  }

  public void animate_out() {

    AniSequence s = new AniSequence(app);
    s.beginSequence();
    s.beginStep();
    
    int l = amount;
    for (int i = 0; i < l; i++) {
      PVector pos = points[i];
      PVector ref = _points[i];
      s.add(Ani.to(pos, duration, duration, "x", ref.x, easing));
      if (i < l - 1) {
        s.add(Ani.to(pos, duration, duration, "y", ref.y, easing));
      } 
      else {
        s.add(Ani.to(pos, duration, duration, "y", ref.y, easing));
      }
    }
    
    s.endStep();
    s.endSequence();
    s.start();
    
  }

  public void reset() {

    for (int i = 0; i < amount; i++) {
      float theta = (i / (float) amount) * TWO_PI;
      float xpos = r * cos(theta) + x;
      float ypos = r * sin(theta) + y;
      _points[i] = new PVector(xpos, ypos);
      if (i <= amount / 2) {
        PVector ref = _points[i];
        points[i] = new PVector(ref.x, ref.y);
      } 
      else {
        PVector ref = _points[amount - i];
        points[i] = new PVector(ref.x, ref.y);
        ;
      }
    }
  }

  public void render() {

    noStroke();
    fill(pigment);
    beginShape();
    for (int i = 0; i < amount; i++) {
      PVector pos = points[i];
      curveVertex(pos.x, pos.y);
    }
    endShape(CLOSE);
  }
}

