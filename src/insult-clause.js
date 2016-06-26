import Randomizer from "./randomizer";
import InsultDataMixin from "./insult-data-mixin";

class InsultClause extends InsultDataMixin(Randomizer) {

  build(n) {
    n = n || 1;
    let rtn = [];
    while(n > 0) {
      rtn.push(this._buildClause());
      n--;
    }
    return rtn;
  }

  _buildClause() {
    return this.combine(this.ATTRIBUTES(), this.ANATOMISED(), '-');
  }

}

export default InsultClause;
