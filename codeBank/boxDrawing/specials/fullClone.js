import { drawSection } from '../BoxDrawing.js';
import { boxDraw } from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';

const fullClone = (matrix) => {
    console.log(`fullClone`);

    let cloneMatrix1 = [];
    let cloneMatrix2 = [];
    let cloneMatrix3 = [];

    boxDraw(matrix);

    cloneMatrix1 = clone(matrix, drawSection, 0);
    boxDraw(cloneMatrix1);

    cloneMatrix2 = clone(matrix, drawSection, drawSection);
    boxDraw(cloneMatrix2);

    cloneMatrix3 = clone(matrix, 0, drawSection);
    boxDraw(cloneMatrix3);
};

export default fullClone;
