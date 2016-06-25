import InsultGenerator from './insult-generator';

function run() {
  let target = document.getElementsByTagName('main')[0];
  target.innerHTML = InsultGenerator.generate();
}

run();
