import { drawSection } from '../boxDrawing.js';
import { rotateClockwise } from '../singles/rotate.js';
import { draw } from '../boxDrawingUtilities.js';

const fullRotate = (matrix) => {
    console.log(`fullRotate`);

    let rotatedMatrix1 = [];
    let rotatedMatrix2 = [];
    let rotatedMatrix3 = [];

    draw(matrix);

    rotatedMatrix1 = rotateClockwise(matrix);
    draw(rotatedMatrix1, drawSection, 0);

    rotatedMatrix2 = rotateClockwise(rotatedMatrix1);
    draw(rotatedMatrix2, drawSection, drawSection);

    rotatedMatrix3 = rotateClockwise(rotatedMatrix2);
    draw(rotatedMatrix3, 0, drawSection);
};

export default fullRotate;
