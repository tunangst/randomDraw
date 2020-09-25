import { drawSection } from '../BoxDrawing.js';
import { rotateClockwise } from '../singles/rotate.js';
import { boxDraw } from '../boxDrawingUtilities.js';

const fullRotate = (matrix) => {
    console.log(`fullRotate`);

    let rotatedMatrix1 = [];
    let rotatedMatrix2 = [];
    let rotatedMatrix3 = [];

    boxDraw(matrix);

    rotatedMatrix1 = rotateClockwise(matrix);
    boxDraw(rotatedMatrix1, drawSection, 0);

    rotatedMatrix2 = rotateClockwise(rotatedMatrix1);
    boxDraw(rotatedMatrix2, drawSection, drawSection);

    rotatedMatrix3 = rotateClockwise(rotatedMatrix2);
    boxDraw(rotatedMatrix3, 0, drawSection);
};

export default fullRotate;
