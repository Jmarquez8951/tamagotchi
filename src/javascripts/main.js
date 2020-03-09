import '../styles/main.scss';
import eat from './components/eat/eat';
import fun from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';

const init = () => {
  eat.eatingFunction();
  fun.playFunction();
  fight.fightFunction();
  sleep.sleepFunction();
};

init();
