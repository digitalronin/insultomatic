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
      "waffle",
      "turd",
      "fart",
      "cock",
      "cunt",
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
      "cunt",
    ];
  }

  ANATOMISED() {
    return [
      "faced",
      "gutted",
      "bellied",
      "fingered",
      "handed",
      "chested",
      "faced",
      "haired",
      "legged",
      "arsed",
      "footed",
      "toed",
    ];
  }

};

export default InsultDataMixin;
