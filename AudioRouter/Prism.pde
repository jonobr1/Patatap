class Prism extends Neuron {

  public float x;
  public float y;
  public float distance;
  public Easing easing = Ani.CIRC_IN;
  public color pigment = color(0);

  private int amount = 3;
  private float offset = - PI / 2;
  private PVector[] points;
  private PVector[] _points;

  private float magnitude = 0.0;
  private float m = 50.0;

  Prism(int d) {
    duration = d / (float) 1000;
    x = width / 2;
    y = height / 2;
    distance = width;
    initialize();
  }

  /**
   * Setters
   */

  public void setAmount(int a) {
    amount = a;
    initialize();
  }

  public void setMagnitude(float m) {
    this.m = m;
  }

  /**
   * Getters
   */

  public int getAmount() {
    return amount;
  }

  public void play() {
    if (playing) {
      return;
    }
    animate_in();
  }

  private void animate_in() {
    
    playing = true;
    
    AniSequence s = new AniSequence(app);
    s.beginSequence();
    s.beginStep();
    
    for (int i = 0; i < amount; i++) {
      PVector pos = points[i];
      PVector ref = _points[i];
      s.add(Ani.to(pos, duration, delay, "x", ref.x, easing));
      s.add(Ani.to(pos, duration, delay, "y", ref.y, easing)); 
    }
    
    s.add(Ani.to(this, duration, delay, "magnitude", m, easing, "onEnd:animate_end"));
    s.endStep();
    s.endSequence();
    s.start();
    
  }

  private void animate_end() {
    reset();
    playing = false;
  }

  public void initialize() {
    points = new PVector[amount];
    _points = new PVector[amount];
    reset();
  }

  public void reset() {

    magnitude = 0.0;

    for (int i = 0; i < amount; i++) {
      float pct = (i + 1) / (float) amount;
      float theta = pct * TWO_PI + offset;
      float _x = cos(theta);
      float _y = sin(theta);
      points[i] = new PVector(x, y);
      _points[i] = new PVector(distance * _x + x, distance * _y + y);
    }
  }
  
  public void render() {
    
    if (!playing) {
      return;
    }
    
    stroke(pigment);
    strokeWeight(1);
    noFill();
    beginShape();
    for (int i = 0; i < amount; i++) {
      PVector pos = points[i];
      vertex(pos.x, pos.y);
    }
    endShape(CLOSE);
    
    noStroke();
    fill(pigment);
    for (int i = 0; i < amount; i++) {
      PVector pos = points[i];
      ellipse(pos.x, pos.y, magnitude, magnitude);
    }
    
  }
}

