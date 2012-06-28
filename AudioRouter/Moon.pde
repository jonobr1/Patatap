class Moon extends Neuron {

  public float x;
  public float y;
  public float r;

  private int amount = 32;
  private PVector[] _points;  // Reference
  private PVector[] points;   // Animated
  private float slave = 0;

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
      s.add(Ani.to(pos, duration, delay, "y", ref.y, easing));
    }
    
    s.add(Ani.to(this, duration, "slave", 0, easing, "onEnd:animate_out"));
    s.endStep();
    s.endSequence();
    s.start();
    
  }

  public void animate_out() {

    AniSequence s = new AniSequence(app);
    s.beginSequence();
    s.beginStep();
    
    int last = amount - 1;
    int l = ceil(amount / 2);
    for (int i = 0; i < l; i++) {
      int index = amount - i;
      if (i == 0) {
        index = 0;
      }
      PVector pos = points[i];
      PVector ref = _points[index];
      s.add(Ani.to(pos, duration, "x", ref.x, easing));
      s.add(Ani.to(pos, duration, "y", ref.y, easing));
    }
    
    s.add(Ani.to(this, duration, "slave", 0, easing, "onEnd:animate_end"));
    s.endStep();
    s.endSequence();
    s.start();
    
    
    
  }

  public void animate_end() {
    reset();
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
      vertex(pos.x, pos.y);
    }
    endShape(CLOSE);
  }
}

