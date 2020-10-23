import { boxDraw, InputNode } from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';

const fullClone = (boxDrawObj) => {
	let cloneMatrix1 = [];
	let cloneMatrix2 = [];
	let cloneMatrix3 = [];

	let inputNode = new InputNode(
		boxDrawObj.ctx,
		boxDrawObj.ctx2,
		boxDrawObj.matrix,
		boxDrawObj.pixelWidth,
		boxDrawObj.pixelHeight
	);

	boxDraw(boxDrawObj);

	cloneMatrix1 = clone(boxDrawObj, boxDrawObj.drawSectionWidth, 0);

	inputNode.matrix = cloneMatrix1;

	boxDraw(inputNode);

	cloneMatrix2 = clone(
		boxDrawObj,
		boxDrawObj.drawSectionWidth,
		boxDrawObj.drawSectionHeight
	);

	inputNode.matrix = cloneMatrix2;

	boxDraw(inputNode);

	cloneMatrix3 = clone(boxDrawObj, 0, boxDrawObj.drawSectionHeight);

	inputNode.matrix = cloneMatrix3;

	boxDraw(inputNode);
};

export default fullClone;
