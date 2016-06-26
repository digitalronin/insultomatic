import Randomizer from "./randomizer";
import InsultDataMixin from "./insult-data-mixin";

class InsultConclusion extends InsultDataMixin(Randomizer) {

  build() {
    return this.combine(this.ATTRIBUTES(), this.ENTITIES(), '');
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
