import { roll } from '../../utilities.js';
import { findQuadrantOrder, boxDraw } from '../boxDrawingUtilities.js';
import clone from './clone.js';
import { reflectVerticalAxis, reflectHorizontalAxis } from './reflect.js';
import { rotateClockwise, rotateCounterClockwise } from './rotate.js';

const singles = (matrix) => {
	//  roll #2: ↓
	//      singles x4
	//          quadrant (1,2,3,4)
	//          type (clone, rotate, reflect)
	//          ... x4
	//      quadrants
	//          _________
	//          |_1_|_2_|  {x: 0, y: 0}             ,{x: drawSection, y: 0}
	//          |_3_|_4_|  {x: 0, y: drawSection}   ,{x: drawSection, y: drawSection}
	//      rolls
	//          1 = clone
	//          2 = reflect
	//          3 = rotate

	const quadrantDice = findQuadrantOrder();
	const styleDice = [1, roll(3), roll(3), roll(3)];

	styleDice.forEach((number, index) => {
		const xPos = quadrantDice[index].x;
		const yPos = quadrantDice[index].y;
		let adjustedMatrix = [];

		switch (number) {
			case 1:
				//clone
				adjustedMatrix = clone(matrix, xPos, yPos);

				boxDraw(adjustedMatrix);

				break;
			case 2:
				//reflect
				const directionDiceReflect = roll(2); // 1 = vertical axis reflect. 2 = horizontal axis reflect

				directionDiceReflect === 1
					? (adjustedMatrix = reflectVerticalAxis(matrix, xPos, yPos))
					: (adjustedMatrix = reflectHorizontalAxis(
							matrix,
							xPos,
							yPos
					  ));

				boxDraw(adjustedMatrix);

				break;
			case 3:
				//rotate
				const directionDiceRotate = roll(2); // 1 = clockwise rotate. 2 = counter clockwise rotate

				directionDiceRotate === 1
					? (adjustedMatrix = rotateClockwise(matrix, xPos, yPos))
					: (adjustedMatrix = rotateCounterClockwise(
							matrix,
							xPos,
							yPos
					  ));

				boxDraw(adjustedMatrix);

				break;
			default:
				console.log('error in number variable');
				break;
		}
	});
};

export default singles;
