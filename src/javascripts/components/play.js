import util from '../helpers/util';
import tamagotchiData from '../helpers/data/tamagotchiData';

const superFunEvent = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  if (myTamagotchi.fun >= 50) {
    myTamagotchi.fun = 100;
  } else {
    myTamagotchi.fun += 50;
  }
  // eslint-disable-next-line no-use-before-define
  playFunction();
};

const funEvent = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  if (myTamagotchi.fun >= 98) {
    myTamagotchi.fun = 100;
  } else {
    myTamagotchi.fun += 2;
  }
  // eslint-disable-next-line no-use-before-define
  playFunction();
};

const playEvents = () => {
  $('#super-fun-button').click(superFunEvent);
  $('#fun-button').click(funEvent);
};

const playFunction = () => {
  const myTamagotchi = tamagotchiData.getTamagotchi();
  let domString = '';
  domString += '<div>';
  domString += `<p>Fun: ${myTamagotchi.fun}</p>`;
  domString += '<button id="super-fun-button">Skydiving</button>';
  domString += '<button id="fun-button">Walking</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  playEvents();
};

export default { playFunction };
