import util from '../helpers/util';
import tamagotchiData from '../helpers/data/tamagotchiData';

const healthyEvent = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  if (myTamagotchi.full >= 90) {
    myTamagotchi.full = 100;
  } else {
    myTamagotchi.full += 10;
  }
  console.error(myTamagotchi.full);
  // eslint-disable-next-line no-use-before-define
  eatingFunction();
};

const junkEvent = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  if (myTamagotchi.full >= 3) {
    myTamagotchi.full -= 3;
  } else {
    myTamagotchi.full = 0;
  }
  console.error(myTamagotchi.full);
  // eslint-disable-next-line no-use-before-define
  eatingFunction();
};

const foodEvents = () => {
  $('#healthy-button').click(healthyEvent);
  $('#junk-button').click(junkEvent);
};

const eatingFunction = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div>';
  domString += `<p>Fullness: ${myTamagotchi.full}</p>`;
  domString += `<p>Name: ${myTamagotchi.name}</p>`;
  domString += '<button id="healthy-button">Healthy Food</button>';
  domString += '<button id="junk-button">Junk Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  foodEvents();
};

export default { eatingFunction };
