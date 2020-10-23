import { rotateClockwise } from '../singles/rotate.js';
import { boxDraw, InputNode } from '../boxDrawingUtilities.js';

const fullRotate = (boxDrawObj) => {
	let rotatedMatrix1 = [];
	let rotatedMatrix2 = [];
	let rotatedMatrix3 = [];

	boxDraw(boxDrawObj);

	let inputNode = new InputNode(
		boxDrawObj.ctx,
		boxDrawObj.ctx2,
		boxDrawObj.matrix,
		boxDrawObj.pixelWidth,
		boxDrawObj.pixelHeight
	);

	rotatedMatrix1 = rotateClockwise(boxDrawObj);

	inputNode.matrix = rotatedMatrix1;

	boxDraw(inputNode, boxDrawObj.drawSectionWidth, 0);

	rotatedMatrix2 = rotateClockwise(inputNode);

	inputNode.matrix = rotatedMatrix2;

	boxDraw(
		inputNode,
		boxDrawObj.drawSectionWidth,
		boxDrawObj.drawSectionHeight
	);

	rotatedMatrix3 = rotateClockwise(inputNode);

	inputNode.matrix = rotatedMatrix3;

	boxDraw(inputNode, 0, boxDrawObj.drawSectionHeight);
};

export default fullRotate;
