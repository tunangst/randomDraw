import { drawSectionWidth, drawSectionHeight } from '../BoxDrawing.js';
import { boxDraw } from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';

const fullClone = (matrix) => {
	let cloneMatrix1 = [];
	let cloneMatrix2 = [];
	let cloneMatrix3 = [];

	boxDraw(matrix);

	cloneMatrix1 = clone(matrix, drawSectionWidth, 0);
	boxDraw(cloneMatrix1);

	cloneMatrix2 = clone(matrix, drawSectionWidth, drawSectionHeight);
	boxDraw(cloneMatrix2);

	cloneMatrix3 = clone(matrix, 0, drawSectionHeight);
	boxDraw(cloneMatrix3);
};

export default fullClone;
