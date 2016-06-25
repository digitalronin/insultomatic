import Randomizer from "./randomizer";

class InsultConclusion extends Randomizer {
  DATA() {
    return [
      "knob-gobbler",
      "cock-womble",
      "spunk-trumpet",
      "muppet",
      "numpty",
      "tool"
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

export default InsultConclusion;
