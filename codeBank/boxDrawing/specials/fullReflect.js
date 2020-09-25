import { drawSection } from '../boxDrawing.js';
import {
    reflectVerticalAxis,
    reflectHorizontalAxis,
} from '../singles/reflect.js';
import { boxDraw, combineMatrixTopHalf } from '../boxDrawingUtilities.js';

const fullReflect = (matrix) => {
    console.log(`fullReflect`);

    let adjustedMatrix = [];
    let combinedMatrix = [];
    let reflectedMatrix = [];

    boxDraw(matrix);

    adjustedMatrix = reflectVerticalAxis(matrix, drawSection, 0);
    boxDraw(adjustedMatrix);

    combinedMatrix = combineMatrixTopHalf(matrix, adjustedMatrix);
    reflectedMatrix = reflectHorizontalAxis(combinedMatrix, 0, drawSection);
    boxDraw(reflectedMatrix);
};

export default fullReflect;
