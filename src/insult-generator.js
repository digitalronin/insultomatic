import InsultClause from './insult-clause';

let InsultGenerator = {
  generate() {
    return `
      <div class="insult">
        <span class="clauses">
          ${this.clauses().join('')}
        </span>
        <span class="conclusion">
          ${this.conclusion()}
        </span>
      </div>
    `;
  },

  conclusion() {
    return "knob-gobbler";
  },

  clauses() {
    let arr = (new InsultClause()).clauses(2);
    return arr.map((clause) => { return (new InsultClause()).render(clause); });
  }
};

export default InsultGenerator;
