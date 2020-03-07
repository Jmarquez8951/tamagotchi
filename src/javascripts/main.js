import '../styles/main.scss';
import eat from './components/eat';
import fun from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.eatingFunction();
  fun.playFunction();
  fight.fightFunction();
  sleep.sleepFunction();
};

init();
