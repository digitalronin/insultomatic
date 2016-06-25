import InsultGenerator from './insult-generator';

window.generateInsult = () => {
  let target = document.getElementsByTagName('main')[0];
  target.innerHTML = InsultGenerator.generate();
};

window.generateInsult();
