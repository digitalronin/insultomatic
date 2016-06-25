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
      <!-- TODO: this is a hack. Find a better way. -->
      <button onClick='window.generateInsult()'>Refresh</button>
    `;
  },

  conclusion() {
    return (new InsultConclusion()).pickItems(1);
  },

  clauses() {
    let arr = (new InsultClause()).pickItems(3);
    return arr.map((clause) => { return (new InsultClause()).render(clause); });
  }
};

export default InsultGenerator;
