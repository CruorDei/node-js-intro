/**********************************************************/
// import { maVariable } from './index.js';
// console.log(maVariable);
/**********************************************************/

import chalk from 'chalk';
import randomColor from 'randomcolor';

const names = ['Lou', 'Maxence', 'Nathan', 'Tristan'];

function getRandomColor() {
    const randomInt = () => Math.floor(Math.random() * 256);
    const r = randomInt();
    const g = randomInt();
    const b = randomInt();
    return chalk.rgb(r, g, b);
  }

for (let i = 0; i < names.length; i++) {
    const coloredName = getRandomColor()(names[i]);
    console.log(coloredName);
}