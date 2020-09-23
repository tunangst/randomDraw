import { rotateClockwise } from '../singles/rotate.js';
import { draw } from '../utilities.js';

const fullRotate = (matrix) => {
    console.log(`fullRotate`);

    let rotatedMatrix1 = [];
    let rotatedMatrix2 = [];
    let rotatedMatrix3 = [];

    draw(matrix);

    rotatedMatrix1 = rotateClockwise(matrix);
    draw(rotatedMatrix1, 250, 0);

    rotatedMatrix2 = rotateClockwise(rotatedMatrix1);
    draw(rotatedMatrix2, 250, 250);

    rotatedMatrix3 = rotateClockwise(rotatedMatrix2);
    draw(rotatedMatrix3, 0, 250);
};

export default fullRotate;
