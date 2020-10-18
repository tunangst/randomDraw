import { roll } from '../../utilities.js';
import {
	boxDraw,
	InputNode,
	combineMatrixLeftHalf,
	combineMatrixTopHalf,
} from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';
import {
	reflectVerticalAxis,
	reflectHorizontalAxis,
} from '../singles/reflect.js';

const halfReflect = (boxDrawObj) => {
	boxDraw(boxDrawObj);
	let clonedMatrix = [];
	let combinedMatrix = [];
	let reflectedMatrix = [];

	let inputNode = new InputNode(
		boxDrawObj.ctx,
		boxDrawObj.ctx2,
		boxDrawObj.matrix,
		boxDrawObj.pixelWidth,
		boxDrawObj.pixelHeight
	);

	const quadrantDice = roll(2);
	switch (quadrantDice) {
		case 1:
			//horizontal reflect
			clonedMatrix = clone(boxDrawObj, boxDrawObj.drawSectionWidth, 0);

			inputNode.matrix = clonedMatrix;

			boxDraw(inputNode);

			combinedMatrix = combineMatrixTopHalf(
				boxDrawObj.matrix,
				clonedMatrix
			);

			inputNode.matrix = combinedMatrix;

			reflectedMatrix = reflectHorizontalAxis(
				inputNode,
				0,
				boxDrawObj.drawSectionHeight
			);

			inputNode.matrix = reflectedMatrix;

			boxDraw(inputNode);

			break;
		case 2:
			//vertical reflect
			clonedMatrix = clone(boxDrawObj, 0, boxDrawObj.drawSectionHeight);

			inputNode.matrix = clonedMatrix;

			boxDraw(inputNode);

			combinedMatrix = combineMatrixLeftHalf(
				boxDrawObj.matrix,
				clonedMatrix
			);

			inputNode.matrix = combinedMatrix;

			reflectedMatrix = reflectVerticalAxis(
				inputNode,
				boxDrawObj.drawSectionWidth,
				0
			);

			inputNode.matrix = reflectedMatrix;

			boxDraw(inputNode);
			break;
		default:
			console.log('error in halfReflect switch');
			break;
	}
};

export default halfReflect;
