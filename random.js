import { matrix, canvas } from './codeBank/variables.js';
import specials from './codeBank/specials/specials.js';
import { createPixelMap } from './codeBank/utilities.js';

if (canvas.getContext) {
    createPixelMap();

    const layout = 4;
    switch (layout) {
        case 1:
            singlesX4();
            break;
        case 2:
            // doublesX2();
            break;
        case 3:
            // singlesX2DoublesX1();
            break;
        case 4:
            specials(matrix);
            break;
        default:
            console.log('error in layout variable');
            break;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
    //  singles x4
    //      clone
    //      rotate
    //      reflect
    //  doubles x2
    //      clone
    //      rotate
    //      reflect
    //  singles x2 doubles x1
    //      clone (rotate, reflect, clone)
    //      rotate (reflect, clone, rotate)
    //      reflect (clone, rotate, reflect)
    //
    //  specials
    //      full clone (4 clone)
    //      full rotate (4 singles)
    //      full reflect (4 singles)
    //      half reflect (vertical, horizontal)
    //
    //  roll #1: type (singles x4, doubles x2, singles x2 doubles x1, specials)
    //  roll #2: ↓
    //      singles x4
    //          quadrant (1,2,3,4)
    //          type (clone, rotate, reflect)
    //          ... x4
    //      doubles x1 singles x2
    //          quadrant (vertical, horizontal)
    //          type (clone, rotate, reflect)
    //              type (clone, rotate, reflect)
    //      specials
    //          type (full clone, full rotate, full reflect, half reflect)
    //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
} else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
}
