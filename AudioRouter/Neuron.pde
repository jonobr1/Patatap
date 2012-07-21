class Neuron {

  public Palette.Color pigment;
  public float duration = .15;
  public float delay = 0;
  public Easing easing = Ani.CIRC_OUT;
  public boolean playing = false;
  
  Neuron() {
  }
  
  /**
   * Setters
   */
  
  public void setColor(Palette.Color c) {
    pigment = c;
  }
  
  public void setDuration(int d) {
    duration = d / (float) 1000;
  }
  
  public void setDuration(float d) {
    duration = d;
  }
  
  public void setDelay(int d) {
    delay = d / (float) 1000;
  }
  
  public void setDelay(float d) {
    delay = d;
  }
  
  public void setEasing(Easing e) {
    easing = e;
  }
  
  /**
   * Getters
   */
  
  public Palette.Color getColor() {
    return pigment;
  }
  
  public float getDuration() {
    return duration;
  }
  
  public float getDelay() {
    return delay;
  }
  
  public Easing getEasing() {
    return easing;
  }
  
}
