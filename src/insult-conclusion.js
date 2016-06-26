import Randomizer from "./randomizer";
import InsultDataMixin from "./insult-data-mixin";

class InsultConclusion extends InsultDataMixin(Randomizer) {

  build(existingText) {
    let attribute = this._pickItem(this.ATTRIBUTES(), existingText);
    let entity    = this._pickItem(this.ENTITIES(), existingText);

    return [attribute, entity].join('');
  }

  _pickItem(list, existingText) {
    let foundUnusedItem = false;
    let item;

    while(!foundUnusedItem) {
      item = this.pickItems(1, list);
      foundUnusedItem = (existingText.indexOf(item) === -1);
    }

    return item;
  }

}

export default InsultConclusion;
