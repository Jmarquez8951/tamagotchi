import util from '../helpers/util';
import tamagotchi from '../helpers/data/tamagotchiData';

const napEvent = () => {
  const myTamagotchi = tamagotchi.getEnergyScore();
  if (myTamagotchi.energy >= 50) {
    myTamagotchi.energy = 100;
  } else {
    myTamagotchi.energy += 50;
  }
  // eslint-disable-next-line no-use-before-define
  sleepFunction();
};

const slumberEvent = () => {
  const myTamagotchi = tamagotchi.getEnergyScore();
  if (myTamagotchi.energy >= 40) {
    myTamagotchi.energy = 100;
  } else {
    myTamagotchi.energy += 60;
  }
  // eslint-disable-next-line no-use-before-define
  sleepFunction();
};

const sleepEvents = () => {
  $('#quick-nap').click(napEvent);
  $('#deep-slumber').click(slumberEvent);
};

const sleepFunction = () => {
  const myTamagotchi = tamagotchi.getEnergyScore();
  const myTamagotchiName = tamagotchi.getName();

  let domString = '';
  domString += '<div>';
  domString += `<p>${myTamagotchiName.name}</p>`;
  domString += `<p>Energy: ${myTamagotchi.energy}</p>`;
  domString += '<button id="quick-nap">Nap</button>';
  domString += '<button id="deep-slumber">Deep Slumber</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  sleepEvents();
};

export default { sleepFunction };
