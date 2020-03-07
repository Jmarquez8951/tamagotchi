import util from '../helpers/util';
import tamagotchi from '../helpers/data/tamagotchiData';

const runAway = () => {
  const myTamagotchi = tamagotchi.getStrengthScore();
  if (myTamagotchi.strength >= 99) {
    myTamagotchi.strength = 100;
  } else {
    myTamagotchi.strength += 1;
  }
  // eslint-disable-next-line no-use-before-define
  fightFunction();
};

const fightButton = () => {
  const myTamagotchi = tamagotchi.getStrengthScore();
  if (myTamagotchi.strength <= 10) {
    myTamagotchi.strength = 0;
  } else {
    myTamagotchi.strength -= 10;
  }
  // eslint-disable-next-line no-use-before-define
  fightFunction();
};

const fightEvents = () => {
  $('#run-away').click(runAway);
  $('#fight-button').click(fightButton);
};

const fightFunction = () => {
  const myTamagotchi = tamagotchi.getStrengthScore();
  const myTamagotchiName = tamagotchi.getName();

  let domString = '';
  domString += '<div>';
  domString += `<p>${myTamagotchiName.name}</p>`;
  domString += `<p>Strength: ${myTamagotchi.strength}</p>`;
  domString += '<button id="run-away">Bravely Runaway</button>';
  domString += '<button id="fight-button">Commit Violence</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  fightEvents();
};

export default { fightFunction };
