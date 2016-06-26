import Randomizer from "./randomizer";
import InsultDataMixin from "./insult-data-mixin";

class InsultClause extends InsultDataMixin(Randomizer) {
  DATA() {
    return [
      "ferret-haired",
      "tiny-fingered",
      "cheeto-faced",
      "weasel-headed",
    ];
  }

  build(n) {
    n = n || 1;
    return this.pickItems(n);
  }

}

export default InsultClause;
