(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _insultGenerator = require('./insult-generator');

var _insultGenerator2 = _interopRequireDefault(_insultGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _insultGenerator2.default({
  target: document.getElementsByTagName('article')[0]
}).setup();

},{"./insult-generator":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _randomizer = require("./randomizer");

var _randomizer2 = _interopRequireDefault(_randomizer);

var _insultDataMixin = require("./insult-data-mixin");

var _insultDataMixin2 = _interopRequireDefault(_insultDataMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsultClause = function (_InsultDataMixin) {
  _inherits(InsultClause, _InsultDataMixin);

  function InsultClause() {
    _classCallCheck(this, InsultClause);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InsultClause).apply(this, arguments));
  }

  _createClass(InsultClause, [{
    key: "build",
    value: function build(n) {
      n = n || 1;

      var rtn = [];
      var attributes = this.pickItems(n, this.ATTRIBUTES());
      var anatomised = this.pickItems(n, this.ANATOMISED());

      while (n > 0) {
        rtn.push([attributes[n - 1], anatomised[n - 1]].join('-').replace("--", "-"));
        n--;
      }

      // some words end in a hyphen, already
      return rtn;
    }
  }]);

  return InsultClause;
}((0, _insultDataMixin2.default)(_randomizer2.default));

exports.default = InsultClause;

},{"./insult-data-mixin":4,"./randomizer":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _randomizer = require("./randomizer");

var _randomizer2 = _interopRequireDefault(_randomizer);

var _insultDataMixin = require("./insult-data-mixin");

var _insultDataMixin2 = _interopRequireDefault(_insultDataMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsultConclusion = function (_InsultDataMixin) {
  _inherits(InsultConclusion, _InsultDataMixin);

  function InsultConclusion() {
    _classCallCheck(this, InsultConclusion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InsultConclusion).apply(this, arguments));
  }

  _createClass(InsultConclusion, [{
    key: "build",
    value: function build(existingText) {
      var attribute = this._pickItem(this.ATTRIBUTES(), existingText);
      var entity = this._pickItem(this.ENTITIES(), existingText);

      return [attribute, entity].join('');
    }
  }, {
    key: "_pickItem",
    value: function _pickItem(list, existingText) {
      var foundUnusedItem = false;
      var item = void 0;

      while (!foundUnusedItem) {
        item = this.pickItems(1, list);
        foundUnusedItem = existingText.indexOf(item) === -1;
      }

      return item;
    }
  }]);

  return InsultConclusion;
}((0, _insultDataMixin2.default)(_randomizer2.default));

exports.default = InsultConclusion;

},{"./insult-data-mixin":4,"./randomizer":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsultDataMixin = function InsultDataMixin(Base) {
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "ENTITIES",
      value: function ENTITIES() {
        var animals = ["rat", "weasel", "hound", "puppy", "piglet", "whippet", "ferret", "stoat", "monkey", "gibbon", "muppet", "womble", "muppet", "panda", "goblin", "toad", "hog", "frog", "gecko", "lizard", "penguin", "wombat", "slug", "worm", "maggot", "grub", "larva", "beetle", "chicken", "squirrel", "hamster", "gerbil", "rabbit", "rodent", "badger", "demon", "devil", "ogre", "zombie", "vampire", "pigeon", "parrot", "puffin", "turkey", "mongoose", "gargoyle", "troll", "monster", "snipe", "shrew", "shrike", "vulture"];

        var actors = ["thief", "wanker", "fucker", "herder", "worrier", "botherer", "collector", "guzzler", "jerker", "tugger", "puller", "breeder", "poker", "fister", "farmer", "curdler"];

        var things = ["nugget", "sack", "splat", "bag", "pot", "jug", "teapot", "waffle", "turd", "fart", "cock", "cunt", "twat", "trumpet", "whistle", "stick", "doughnut", "burger", "crumpet", "pizza", "cake", "salad", "trifle"];

        return things.concat(actors).concat(animals);
      }
    }, {
      key: "ATTRIBUTES",
      value: function ATTRIBUTES() {
        return ["dick", "cock", "fuck", "shit", "turd", "fart", "jizz", "spunk", "arse", "wank", "cunt", "lard", "vomit", "puke", "piss", "urine", "pus-", "gutter", "bile", "phlegm", "sweat", "mucus", "snot"];
      }
    }, {
      key: "ANATOMISED",
      value: function ANATOMISED() {
        return ["brained", "faced", "headed", "necked", "eyed", "browed", "nosed", "lipped", "jawed", "mouthed", "cheeked", "eared", "gutted", "waisted", "bellied", "fingered", "handed", "armed", "chested", "faced", "toothed", "shouldered", "hipped", "haired", "legged", "arsed", "bottomed", "footed", "toed", "smelling", "boned", "skinned", "hearted", "spleened", "livered"];
      }
    }]);

    return _class;
  }(Base);
};

exports.default = InsultDataMixin;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _insultClause = require('./insult-clause');

var _insultClause2 = _interopRequireDefault(_insultClause);

var _insultConclusion = require('./insult-conclusion');

var _insultConclusion2 = _interopRequireDefault(_insultConclusion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InsultGenerator = function () {
  function InsultGenerator(config) {
    _classCallCheck(this, InsultGenerator);

    this.target = config.target;
  }

  _createClass(InsultGenerator, [{
    key: 'setup',
    value: function setup() {
      this.target.innerHTML = '\n      <p>\n        NSFW. Highly offensive. Click at your own risk.\n      </p>\n      ' + this._button("I can take it. Hit me!") + '\n    ';
      this._bindActions();
    }
  }, {
    key: 'generate',
    value: function generate() {
      this.target.innerHTML = this._generateHtml();
      this._bindActions();
    }
  }, {
    key: '_generateHtml',
    value: function _generateHtml() {
      var clauses = this._clauses().join(', ');

      return this._template({
        clauses: clauses,
        conclusion: this._conclusion(clauses)
      });
    }
  }, {
    key: '_template',
    value: function _template(attrs) {
      return '\n      <div class="insult">\n        <span class="clauses">\n          ' + attrs.clauses + '\n        </span>\n        <span class="conclusion">\n          ' + attrs.conclusion + '\n        </span>\n      </div>\n      <button id=\'new-insult\' class=\'btn btn-primary btn-lg\'>Hit me again!</button>\n    ';
    }
  }, {
    key: '_button',
    value: function _button(text) {
      text = text || 'Hit me again!';

      return '\n      <button id=\'new-insult\' class=\'btn btn-primary btn-lg\'>' + text + '</button>\n      ';
    }
  }, {
    key: '_clauses',
    value: function _clauses() {
      return new _insultClause2.default().build(3).map(function (clause) {
        return clause;
      });
    }
  }, {
    key: '_conclusion',
    value: function _conclusion(existingText) {
      return new _insultConclusion2.default().build(existingText);
    }
  }, {
    key: '_bindActions',
    value: function _bindActions() {
      var _this = this;

      document.getElementById('new-insult').addEventListener('click', function () {
        return _this.generate();
      });
    }
  }]);

  return InsultGenerator;
}();

exports.default = InsultGenerator;

},{"./insult-clause":2,"./insult-conclusion":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Randomizer = function () {
  function Randomizer() {
    _classCallCheck(this, Randomizer);
  }

  _createClass(Randomizer, [{
    key: "pickItems",
    value: function pickItems(n, list) {
      list = list || this.DATA();

      if (n > list.length) {
        throw "Randomizer.pickItems: " + n + " requested but only " + list.length + " available";
      }

      var set = new Set();

      while (set.size < n) {
        set.add(this.randomItem(list));
      }

      var rtn = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = set.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
          rtn.push(i);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return rtn;
    }
  }, {
    key: "combine",
    value: function combine(list1, list2, combiner) {
      return [this.pickItems(1, list1), this.pickItems(1, list2)].join(combiner);
    }
  }, {
    key: "randomItem",
    value: function randomItem(list) {
      var i = Math.floor(Math.random() * list.length);
      return list[i];
    }
  }]);

  return Randomizer;
}();

exports.default = Randomizer;

},{}]},{},[1]);
