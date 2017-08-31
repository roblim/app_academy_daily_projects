Array.prototype.bubbleSort = function() {
  const arrLen = this.length;
  let i = 0;
  let skips = 0;
  while (skips < (arrLen - 1)) {
    skips = 0;
    while (i < (arrLen - 1)) {
      if (this[i] > this[i + 1]) {
        let first = this[i];
        this[i] = this[i + 1];
        this[i + 1] = first;
        i ++;
      } else {
        i++;
        skips ++;
        continue;
      }
    }
    i = 0;
  }
  return this;
};

String.prototype.substrings = function() {
  const result = [];
  let i;
  for (i = 0; i < this.length; i++) {
    let idx2 = i + 1;
    while (idx2 < this.length + 1) {
      result.push(this.slice(i, idx2));
      idx2 ++;
    }
  }
  return result;
};
