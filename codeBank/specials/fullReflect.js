import { drawSection } from '../variables.js';
import {
    reflectVerticalAxis,
    reflectHorizontalAxis,
} from '../singles/reflect.js';
import { draw, combineMatrixTopHalf } from '../utilities.js';

const fullReflect = (matrix) => {
    console.log(`fullReflect`);

    let adjustedMatrix = [];
    let combinedMatrix = [];
    let reflectedMatrix = [];

    draw(matrix);

    adjustedMatrix = reflectVerticalAxis(matrix, drawSection, 0);
    draw(adjustedMatrix);

    combinedMatrix = combineMatrixTopHalf(matrix, adjustedMatrix);
    reflectedMatrix = reflectHorizontalAxis(combinedMatrix, 0, drawSection);
    draw(reflectedMatrix);
};

export default fullReflect;
