import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { sleep } from '../helpers/sleepModule.js';

const _welcomeScreenFlow = async () => {
  const rainbowTitle = chalkAnimation.rainbow(
    'Welcome to Your Crypto History !\n'
  );

  await sleep(1000);
  rainbowTitle.stop();

  console.log(`
    \r${chalk.bgBlue('MENU')}
    \r${chalk.cyanBright('PRESS 1: Latest Portfolia value Per Token')}
    \r${chalk.cyanBright('PRESS 2: Latest Portfolia For A Token Number')}
    \r${chalk.cyanBright('PRESS 3: Portfolia value Per Token for date')}
    \r${chalk.cyanBright('PRESS 4: Portfolia value Per Token for date and Token Number')}')} 
  `);
}

export function welcomeScreeen() {
  return _welcomeScreenFlow();
}