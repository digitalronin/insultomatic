import Randomizer from "./randomizer";
import InsultDataMixin from "./insult-data-mixin";

class InsultClause extends InsultDataMixin(Randomizer) {

  build(n) {
    n = n || 1;

    let rtn = [];
    let attributes = this.pickItems(n, this.ATTRIBUTES());
    let anatomised = this.pickItems(n, this.ANATOMISED());

    while(n > 0) {
      rtn.push(
        [ attributes[n - 1], anatomised[n - 1] ]
        .join('-')
        .replace("--", "-")
      );
      n--;
    }

    // some words end in a hyphen, already
    return rtn;
  }

}

export default InsultClause;
