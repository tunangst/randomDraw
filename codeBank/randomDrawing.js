import { roll } from './utilities.js';
import { BoxDrawing } from './boxDrawing/BoxDrawing.js';
import { MandalaDrawing } from './mandalaDrawing/MandalaDrawing.js';

const RandomDrawing = (forceDesignObj) => {
    const dice = roll(2);
    let returnRandomDrawing;
    switch (dice) {
        case 1:
            returnRandomDrawing = BoxDrawing;
            break;
        case 2:
            returnRandomDrawing = MandalaDrawing;
            break;
        default:
            console.log('error in randomDraw random dice');
            break;
    }
    returnRandomDrawing(forceDesignObj);
};

export default RandomDrawing;
