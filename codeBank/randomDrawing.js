import { roll } from './utilities.js';
import { boxDrawing } from './boxDrawing/boxDrawing.js';

const dice = roll(1);
let randomDrawing;
switch (dice) {
    case 1:
        randomDrawing = boxDrawing;
        break;
    default:
        console.log('error in randomDraw random dice');
        break;
}

export default randomDrawing;
