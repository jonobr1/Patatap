class Record {

  private Date endTime;
  private ArrayList lines;
  private String[] output;
  
  Record() {
    lines = new ArrayList();
  }

  public void add(Character action) {
    String s = frameCount + " " + action;
    lines.add(s);
  }

  public void add(String action) {
    String s = frameCount + " " + action;
    lines.add(s);
  }

  public void finalize() {
    endTime = new Date();
    String filename = "../data/" + endTime.toString() + ".txt";
    output = new String[lines.size()];
    for (int i = 0; i < output.length; i++) {
      output[i] = (String) lines.get(i);
    }
    println("Saved actions out to: " + filename);
    saveStrings(filename, output);
  }

}
