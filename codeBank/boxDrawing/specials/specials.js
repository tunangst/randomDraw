import { roll } from '../utilities.js';
import fullClone from './fullClone.js';
import fullRotate from './fullRotate.js';
import fullReflect from './fullReflect.js';
import halfReflect from './halfReflect.js';

const specials = (matrix) => {
    console.log(`special layout`);
    //      specials
    //          type (full clone, full rotate, full reflect, half reflect)
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
};

export default specials;
