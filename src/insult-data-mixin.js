let InsultDataMixin = Base => class extends Base {

  ENTITIES() {
    return [
      "nugget",
      "sack",
      "splat",
      "bag",
      "rat",
      "weasel",
      "ferret",
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

};

export default InsultDataMixin;
