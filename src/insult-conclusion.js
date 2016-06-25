import Randomizer from "./randomizer";

class InsultConclusion extends Randomizer {
  DATA() {
    return [
      "cock-womble",
      "fuck-muppet",
      "numpty",
      "cocksplat",
      "jizz-trumpet",
      "shitgibbon",
      "fuck-nugget",
      "ballbag"
    ];
  }

  pick() {
    return this.pickItems(1);
  }

  render(text) {
    return `
      <span class="clause">
        ${text}
      </span>
    `;
  }
}

export default InsultConclusion;
