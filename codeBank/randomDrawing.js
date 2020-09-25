import { roll } from './utilities.js';
import { BoxDrawing } from './boxDrawing/BoxDrawing.js';
import { MandalaDrawing } from './mandalaDrawing/MandalaDrawing.js';

const dice = 2;
let randomDrawing;
switch (dice) {
    case 1:
        randomDrawing = BoxDrawing;
        break;
    case 2:
        randomDrawing = MandalaDrawing;
        break;
    default:
        console.log('error in randomDraw random dice');
        break;
}

export default randomDrawing;
