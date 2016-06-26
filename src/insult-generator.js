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
    return this._template({
      clauses: this._clauses().join(', '),
      conclusion: this._conclusion()
    });
  }

  _template(attrs) {
    return `
      <div class="insult">
        <span class="clauses">
          ${attrs.clauses}
        </span>
        <span class="conclusion">
          ${attrs.conclusion}
        </span>
      </div>
      <button id='new-insult' class='btn btn-primary btn-lg'>Hit me again!</button>
    `;
  }

  _clauses() {
    return (new InsultClause())
      .build(3)
      .map((clause) => clause);
  }

  _conclusion() {
    return (new InsultConclusion()).build();
  }

  _bindActions() {
    document
      .getElementById('new-insult')
      .addEventListener('click', () => this.generate());
  }
}

export default InsultGenerator;
