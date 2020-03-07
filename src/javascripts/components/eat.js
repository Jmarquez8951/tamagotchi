import util from '../helpers/util';
import tamagotchiData from '../helpers/data/tamagotchiData';

const eatingFunction = () => {
  const myTamagotchi = tamagotchiData.getEatScore();
  const myTamagotchiName = tamagotchiData.getName();

  let domString = '';
  domString += '<div>';
  domString += `<p>Name: ${myTamagotchiName.name}</p>`;
  domString += `<p>Fullness: ${myTamagotchi.full}</p>`;
  domString += '<button id="healthy-button">Healthy Food</button>';
  domString += '<button id="junk-button">Junk Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

const foodEvents = () => {
  $('#healthy-button').click(healthyEvent);
  $('#junk-button').click(junkEvent);
};

const healthyEvent = () => {
  const myTamagotchi = tamagotchiData.getEatScore();
  if (myTamagotchi.full >= 90) {
    myTamagotchi.full = 100;
  } else {
    myTamagotchi.full += 10;
  }
  eatingFunction();
};

const junkEvent = () => {
  const myTamagotchi = tamagotchiData.getEatScore();
  if (myTamagotchi.full >= 3) {
    myTamagotchi.full -= 3;
  } else {
    myTamagotchi.full = 0;
  }
  eatingFunction();
};

export default { eatingFunction };
