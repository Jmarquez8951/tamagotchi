import util from '../helpers/util';
import tamagotchi from '../helpers/data/tamagotchiData';

const eatingFunction = () => {
  let domString = '';
  domString += '<div>';
  domString += `${tamagotchi.getTamagotchi().health}`;
  domString += `${tamagotchi.getTamagotchi().name}`;
  domString += '<button>Healthy Food</button>';
  domString += '<button>Junk Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

export default { eatingFunction };
