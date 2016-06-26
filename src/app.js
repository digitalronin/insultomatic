import InsultGenerator from './insult-generator';

(new InsultGenerator({
  target: document.getElementsByTagName('main')[0]
})).setup();
