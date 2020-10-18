// import { drawSectionWidth, drawSectionHeight } from '../BoxDrawing.js';
import {
	reflectVerticalAxis,
	reflectHorizontalAxis,
} from '../singles/reflect.js';
import {
	boxDraw,
	InputNode,
	combineMatrixTopHalf,
} from '../boxDrawingUtilities.js';

const fullReflect = (boxDrawObj) => {
	let adjustedMatrix = [];
	let combinedMatrix = [];
	let reflectedMatrix = [];

	let inputNode = new InputNode(
		boxDrawObj.ctx,
		boxDrawObj.ctx2,
		boxDrawObj.matrix,
		boxDrawObj.pixelWidth,
		boxDrawObj.pixelHeight
	);

	boxDraw(inputNode);

	adjustedMatrix = reflectVerticalAxis(
		boxDrawObj,
		boxDrawObj.drawSectionWidth,
		0
	);

	inputNode.matrix = adjustedMatrix;

	boxDraw(inputNode);

	combinedMatrix = combineMatrixTopHalf(boxDrawObj.matrix, adjustedMatrix);

	inputNode.matrix = combinedMatrix;

	reflectedMatrix = reflectHorizontalAxis(
		inputNode,
		0,
		boxDrawObj.drawSectionHeight
	);

	inputNode.matrix = reflectedMatrix;

	boxDraw(inputNode);
};

export default fullReflect;
