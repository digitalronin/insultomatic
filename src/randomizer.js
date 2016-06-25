class Randomizer {
  pickItems(n) {
    if (n > this.DATA().length) {
      throw(`Randomizer.pickItems: ${n} requested but only ${this.DATA().length} available`);
    }

    let set = new Set();

    while(set.size < n) {
      set.add(this.randomItem());
    }

    let rtn = [];
    for(let i of set.values()) { rtn.push(i); }

    return rtn;
  }

  randomItem() {
    let i = Math.floor(Math.random() * this.DATA().length);
    return this.DATA()[i];
  }

}

export default Randomizer;
