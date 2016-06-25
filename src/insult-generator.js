import InsultClause from './insult-clause';
import InsultConclusion from './insult-conclusion';

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
    return (new InsultConclusion()).pickItems(1);
  },

  clauses() {
    let arr = (new InsultClause()).pickItems(2);
    return arr.map((clause) => { return (new InsultClause()).render(clause); });
  }
};

export default InsultGenerator;
