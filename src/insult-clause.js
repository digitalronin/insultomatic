let InsultClause = {
  DATA: [
    "ferret-haired",
    "tiny-fingered",
    "cheeto-faced"
  ],

  clauses(n) {
    if (n > this.DATA.length) {
      throw(`InsultClause.clauses: ${n} requested but only ${this.DATA.length} available`);
    }

    let set = new Set();

    while(set.size < n) {
      set.add(this.randomText());
    }

    let rtn = [];
    for(let i of set.values()) { rtn.push(i); }

    return rtn;
  },

  render(text) {
    return `
      <span class="clause">
        ${text}
      </span>
    `;
  },

  randomText() {
    let i = Math.floor(Math.random() * this.DATA.length);
    return this.DATA[i];
  }

};

export default InsultClause;
