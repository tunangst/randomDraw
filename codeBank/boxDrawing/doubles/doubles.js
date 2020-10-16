import { drawSectionWidth, drawSectionHeight } from '../BoxDrawing.js';
import { roll } from '../../utilities.js';
import {
	boxDraw,
	combineMatrixTopHalf,
	combineMatrixLeftHalf,
} from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';
import {
	reflectHorizontalAxis,
	reflectVerticalAxis,
} from '../singles/reflect.js';
import { rotateClockwise, rotateCounterClockwise } from '../singles/rotate.js';
// import {

// } from '../boxDrawingUtilities.js';

const doubles = (matrix) => {
	//  roll #1: ↓
	//      singles x1
	//          quadrant (2,3)
	//          type (clone, rotate [r, l], reflect [r, l])
	//      quadrants
	//          _________
	//          |_1_|_2_|  {x: 0, y: 0}             ,{x: drawSectionWidth, y: 0}
	//          |_3_|_4_|  {x: 0, y: drawSectionHeight}   ,{x: drawSectionWidth, y: drawSectionHeight}
	//      type
	//          1 = clone
	//          2 = rotate
	//          3 = reflect
	//  roll #2: ↓
	//      type (clone, rotate x2, reflect)

	boxDraw(matrix);
	const quadrantDice = roll(2); // 1 = q2. 2 = q3
	const styleDice = roll(3); // 1= clone, 2= rotate, 3= reflect
	const doubleDice = roll(3); // 1= clone, 2= rotate x2, 3= reflect
	let directionDice = 0;
	let adjustedMatrix = [];

	const quadrant =
		quadrantDice === 1
			? { x: drawSectionWidth, y: 0 }
			: { x: 0, y: drawSectionHeight };
	const quadrantDouble =
		quadrantDice === 1
			? { x: 0, y: drawSectionHeight }
			: { x: drawSectionWidth, y: 0 };

	switch (styleDice) {
		case 1:
			//clone
			adjustedMatrix = clone(matrix, quadrant.x, quadrant.y);
			boxDraw(adjustedMatrix);
			break;
		case 2:
			//rotate
			directionDice = roll(2); // 1 = clockwise. 2 = counter clockwise
			directionDice === 1
				? (adjustedMatrix = rotateClockwise(
						matrix,
						quadrant.x,
						quadrant.y
				  ))
				: (adjustedMatrix = rotateCounterClockwise(
						matrix,
						quadrant.x,
						quadrant.y
				  ));

			boxDraw(adjustedMatrix);
			break;
		case 3:
			//reflect

			directionDice = roll(2); // 1 = vertical axis reflect. 2 = horizontal axis reflect
			directionDice === 1
				? (adjustedMatrix = reflectVerticalAxis(
						matrix,
						quadrant.x,
						quadrant.y
				  ))
				: (adjustedMatrix = reflectHorizontalAxis(
						matrix,
						quadrant.x,
						quadrant.y
				  ));

			boxDraw(adjustedMatrix);
			break;
		default:
			console.log('error in style dice variable');
			break;
	}

	let combinedMatrix = [];
	quadrantDice === 1
		? (combinedMatrix = combineMatrixTopHalf(matrix, adjustedMatrix))
		: (combinedMatrix = combineMatrixLeftHalf(matrix, adjustedMatrix));
	let rotatedMatrix = [];
	let reflectedMatrix = [];

	switch (doubleDice) {
		case 1:
			//clone
			boxDraw(combinedMatrix, quadrantDouble.x, quadrantDouble.y);
			break;
		case 2: //quadrantDice === 1, combine top
			//rotate
			rotatedMatrix = rotateClockwise(
				rotateClockwise(combinedMatrix),
				quadrantDouble.x,
				quadrantDouble.y
			); // rotate twice
			boxDraw(rotatedMatrix);
			break;
		case 3: // quadrantDice === 1, reflect horizontal : reflect vertical
			//reflect
			reflectedMatrix =
				quadrantDice === 1
					? reflectHorizontalAxis(
							combinedMatrix,
							quadrantDouble.x,
							quadrantDouble.y
					  )
					: reflectVerticalAxis(
							combinedMatrix,
							quadrantDouble.x,
							quadrantDouble.y
					  );
			boxDraw(reflectedMatrix);

			break;

		default:
			console.log('error in style dice variable');
			break;
	}
};

export default doubles;
