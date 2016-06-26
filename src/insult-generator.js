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
    let clauses = this._clauses().join(', ');

    return this._template({
      clauses: clauses,
      conclusion: this._conclusion(clauses)
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

  _conclusion(existingText) {
    return (new InsultConclusion()).build(existingText);
  }

  _bindActions() {
    document
      .getElementById('new-insult')
      .addEventListener('click', () => this.generate());
  }
}

export default InsultGenerator;
