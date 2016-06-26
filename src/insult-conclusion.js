import Randomizer from "./randomizer";

class InsultConclusion extends Randomizer {

  ENTITIES() {
    return [
      "nugget",
      "sack",
      "splat",
      "bag",
      "rat",
      "weasel",
      "monkey",
      "gibbon",
      "muppet",
      "womble",
      "muppet",
      "panda",
      "goblin",
    ];
  }

  ATTRIBUTES() {
    return [
      "cock",
      "fuck",
      "shit",
      "turd",
      "fart",
      "jizz",
      "spunk",
      "arse",
      "wank",
    ];
  }

  build() {
    return this.combine(this.ATTRIBUTES(), this.ENTITIES());
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
