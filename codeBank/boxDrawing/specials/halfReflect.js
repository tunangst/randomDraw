import { drawSectionWidth, drawSectionHeight } from '../BoxDrawing.js';
import { roll } from '../../utilities.js';
import {
	boxDraw,
	combineMatrixLeftHalf,
	combineMatrixTopHalf,
} from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';
import {
	reflectVerticalAxis,
	reflectHorizontalAxis,
} from '../singles/reflect.js';

const halfReflect = (matrix) => {
	boxDraw(matrix);
	let clonedMatrix = [];
	let combinedMatrix = [];
	let reflectedMatrix = [];

	const quadrantDice = roll(2);
	switch (quadrantDice) {
		case 1:
			//horizontal reflect
			clonedMatrix = clone(matrix, drawSectionWidth, 0);
			boxDraw(clonedMatrix);

			combinedMatrix = combineMatrixTopHalf(matrix, clonedMatrix);
			reflectedMatrix = reflectHorizontalAxis(combinedMatrix, 0, 250);
			boxDraw(reflectedMatrix);

			break;
		case 2:
			//vertical reflect
			clonedMatrix = clone(matrix, 0, drawSectionHeight);
			boxDraw(clonedMatrix);

			combinedMatrix = combineMatrixLeftHalf(matrix, clonedMatrix);
			reflectedMatrix = reflectVerticalAxis(combinedMatrix, 250, 0);
			boxDraw(reflectedMatrix);

			break;
		default:
			console.log('error in halfReflect switch');
			break;
	}
};

export default halfReflect;
