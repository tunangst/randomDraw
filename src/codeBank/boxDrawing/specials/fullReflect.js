import { drawSectionWidth, drawSectionHeight } from '../BoxDrawing.js';
import {
	reflectVerticalAxis,
	reflectHorizontalAxis,
} from '../singles/reflect.js';
import { boxDraw, combineMatrixTopHalf } from '../boxDrawingUtilities.js';

const fullReflect = (matrix) => {
	let adjustedMatrix = [];
	let combinedMatrix = [];
	let reflectedMatrix = [];

	boxDraw(matrix);

	adjustedMatrix = reflectVerticalAxis(matrix, drawSectionWidth, 0);
	boxDraw(adjustedMatrix);

	combinedMatrix = combineMatrixTopHalf(matrix, adjustedMatrix);
	reflectedMatrix = reflectHorizontalAxis(
		combinedMatrix,
		0,
		drawSectionHeight
	);
	boxDraw(reflectedMatrix);
};

export default fullReflect;
