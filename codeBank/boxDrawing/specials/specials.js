import { roll } from '../utilities.js';
import fullClone from './fullClone.js';
import fullRotate from './fullRotate.js';
import fullReflect from './fullReflect.js';
import halfReflect from './halfReflect.js';

const specials = (matrix, forceDraw) => {
    console.log(`special layout`);
    //      specials
    //          type (full clone, full rotate, full reflect, half reflect)
    if (!forceDraw) {
        const dice = roll(4);
        switch (dice) {
            case 1:
                fullClone(matrix);
                break;
            case 2:
                fullRotate(matrix);
                break;
            case 3:
                fullReflect(matrix);
                break;
            case 4:
                halfReflect(matrix);
                break;
            default:
                console.log('error in layout variable');
                break;
        }
    }
    switch (forceDraw) {
        case 'fullClone':
            fullClone(matrix);
            break;
        case 'fullReflect':
            fullReflect(matrix);
            break;
        case 'fullRotate':
            fullRotate(matrix);
            break;
        case 'halfReflect':
            halfReflect(matrix);
            break;
        default:
            console.log('error in forcedraw of specials');
            break;
    }
};

export default specials;
