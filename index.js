import { matrix, canvas } from './codeBank/variables.js';
import specials from './codeBank/specials/specials.js';
import singles from './codeBank/singles/singles.js';
import doubles from './codeBank/doubles/doubles.js';
import { roll, draw, createPixelMap } from './codeBank/utilities.js';

if (canvas.getContext) {
    createPixelMap();

    draw(matrix, null, null); // draw on ctx not ctx2

    const dice = roll(3);
    switch (dice) {
        case 1:
            specials(matrix);
            break;
        case 2:
            singles(matrix);
            break;
        case 3:
            doubles(matrix);
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
