class Randomizer {
  pickItems(n, list) {
    list = list || this.DATA();

    if (n > list.length) {
      throw(`Randomizer.pickItems: ${n} requested but only ${list.length} available`);
    }

    let set = new Set();

    while(set.size < n) {
      set.add(this.randomItem(list));
    }

    let rtn = [];
    for(let i of set.values()) { rtn.push(i); }

    return rtn;
  }

  combine(list1, list2) {
    return this.pickItems(1, list1) + this.pickItems(1, list2);
  }

  randomItem(list) {
    let i = Math.floor(Math.random() * list.length);
    return list[i];
  }

}

export default Randomizer;
