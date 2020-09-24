import { drawSection } from '../variables.js';
import {
    roll,
    draw,
    combineMatrixLeftHalf,
    combineMatrixTopHalf,
} from '../utilities.js';
import clone from '../singles/clone.js';
import {
    reflectVerticalAxis,
    reflectHorizontalAxis,
} from '../singles/reflect.js';

const halfReflect = (matrix) => {
    draw(matrix);
    let clonedMatrix = [];
    let combinedMatrix = [];
    let reflectedMatrix = [];

    const quadrantDice = roll(2);
    switch (quadrantDice) {
        case 1:
            console.log(`halfReflect: horizontal reflect`);

            clonedMatrix = clone(matrix, drawSection, 0);
            draw(clonedMatrix);

            combinedMatrix = combineMatrixTopHalf(matrix, clonedMatrix);
            reflectedMatrix = reflectHorizontalAxis(combinedMatrix, 0, 250);
            draw(reflectedMatrix);

            break;
        case 2:
            console.log(`halfReflect: vertical reflect`);

            clonedMatrix = clone(matrix, 0, drawSection);
            draw(clonedMatrix);

            combinedMatrix = combineMatrixLeftHalf(matrix, clonedMatrix);
            reflectedMatrix = reflectVerticalAxis(combinedMatrix, 250, 0);
            draw(reflectedMatrix);

            break;
        default:
            console.log('error in halfReflect switch');
            break;
    }
};

export default halfReflect;
