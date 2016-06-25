import InsultClause from './insult-clause';
import InsultConclusion from './insult-conclusion';

class InsultGenerator {

  constructor(config) {
    this.target = config.target;
  }

  generate() {
    this.target.innerHTML = this._generateHtml();
    this._bindActions();
  }

  _generateHtml() {
    return `
      <div class="insult">
        <span class="clauses">
          ${this._clauses().join('')}
        </span>
        <span class="conclusion">
          ${this._conclusion()}
        </span>
      </div>
      <button id='new-insult'>Refresh</button>
    `;
  }

  _clauses() {
    return (new InsultClause())
      .pickItems(3)
      .map((clause) => { return (new InsultClause()).render(clause); });
  }

  _conclusion() {
    return (new InsultConclusion()).pickItems(1);
  }

  _bindActions() {
    document
      .getElementById('new-insult')
      .addEventListener('click', () => this.generate());
  }
}

export default InsultGenerator;
