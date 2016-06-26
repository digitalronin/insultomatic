import InsultGenerator from './insult-generator';

(new InsultGenerator({
  target: document.getElementsByTagName('article')[0]
})).setup();
