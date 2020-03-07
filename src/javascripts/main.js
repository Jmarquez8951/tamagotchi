import '../styles/main.scss';
import eat from './components/eat';
import fun from './components/play';
import fight from './components/fight';

const init = () => {
  eat.eatingFunction();
  fun.playFunction();
  fight.fightFunction();
};

init();
