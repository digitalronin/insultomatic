let InsultDataMixin = Base => class extends Base {

  ENTITIES() {
    const animals = [
      "rat",
      "weasel",
      "hound",
      "whippet",
      "ferret",
      "stoat",
      "monkey",
      "gibbon",
      "muppet",
      "womble",
      "muppet",
      "panda",
      "goblin",
      "toad",
      "hog",
      "frog",
      "gecko",
      "lizard",
      "penguin",
      "wombat",
      "slug",
      "worm",
      "maggot",
      "grub",
      "larva",
      "beetle",
      "chicken",
      "squirrel",
      "hamster",
      "gerbil",
      "rabbit",
      "rodent",
      "badger",
      "demon",
      "devil",
      "ogre",
      "zombie",
      "vampire",
      "pigeon",
      "parrot",
      "puffin",
      "turkey",
      "mongoose",
      "gargoyle",
      "troll",
      "monster",
      "snipe",
      "shrew",
      "shrike",
      "vulture",
    ];

    const actors = [
      "thief",
      "wanker",
      "fucker",
      "herder",
      "worrier",
      "botherer",
      "collector",
      "guzzler",
      "jerker",
      "tugger",
      "puller",
      "breeder",
      "poker",
      "fister",
      "farmer",
      "curdler",
    ];

    const things = [
      "nugget",
      "sack",
      "splat",
      "bag",
      "pot",
      "jug",
      "teapot",
      "waffle",
      "turd",
      "fart",
      "cock",
      "cunt",
      "twat",
      "lackwit",
      "trumpet",
      "whistle",
      "stick",
      "doughnut",
      "burger",
      "pizza",
      "cake",
      "salad",
      "trifle",
    ];

    return things.concat(actors).concat(animals);
  }

  ATTRIBUTES() {
    return [
      "dick",
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
      "lard",
      "vomit",
      "puke",
      "piss",
      "urine",
      "pus",
      "gutter",
      "bile",
      "phlegm",
      "sweat",
      "mucus",
      "snot",
    ];
  }

  ANATOMISED() {
    return [
      "brained",
      "faced",
      "headed",
      "necked",
      "eyed",
      "browed",
      "nosed",
      "lipped",
      "jawed",
      "mouthed",
      "cheeked",
      "eared",
      "gutted",
      "waisted",
      "bellied",
      "fingered",
      "handed",
      "armed",
      "chested",
      "faced",
      "toothed",
      "shouldered",
      "hipped",
      "haired",
      "legged",
      "arsed",
      "bottomed",
      "footed",
      "toed",
      "smelling",
      "boned",
      "skinned",
      "hearted",
      "spleened",
      "livered",
    ];
  }

};

export default InsultDataMixin;
