import { drawSection } from '../variables.js';
import { draw } from '../utilities.js';
import clone from '../singles/clone.js';

const fullClone = (matrix) => {
    console.log(`fullClone`);

    let cloneMatrix1 = [];
    let cloneMatrix2 = [];
    let cloneMatrix3 = [];

    draw(matrix);

    cloneMatrix1 = clone(matrix, drawSection, 0);
    draw(cloneMatrix1);

    cloneMatrix2 = clone(matrix, drawSection, drawSection);
    draw(cloneMatrix2);

    cloneMatrix3 = clone(matrix, 0, drawSection);
    draw(cloneMatrix3);
};

export default fullClone;
