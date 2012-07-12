int mod(int v, int l) {
  while (v < 0) {
    v += l;
  }
  return v % l;
}
