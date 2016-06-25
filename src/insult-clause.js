import Randomizer from "./randomizer";

class InsultClause extends Randomizer {
  DATA() {
    return [
      "ferret-haired",
      "tiny-fingered",
      "cheeto-faced"
    ];
  }

  render(text) {
    return `
      <span class="clause">
        ${text}
      </span>
    `;
  }

}

export default InsultClause;
