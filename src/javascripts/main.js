import '../styles/main.scss';
import eat from './components/eat';
import fun from './components/play';

const init = () => {
  eat.eatingFunction();
  fun.playFunction();
};

init();
