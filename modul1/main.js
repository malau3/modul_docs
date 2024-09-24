import { Honda, Mitsubishi } from './classunguided.js';

const HondaBeat = new Honda('125 cc', '2024', 'Honda Beat', 20000000);

HondaBeat.informasi();

HondaBeat.infoMotor();

HondaBeat.infoCCMotor();

console.log('Motor ini bernama '+ HondaBeat.getterNama())

console.log("")

const Xpander = new Mitsubishi('4595 mm L x 1750 mm W x 1750 mm H', 'Bensin', 'Mitsubishi Xpander', 230000000);

Xpander.informasi();

Xpander.infoBB();

Xpander.infoDimensi();
