import { roll } from '../../utilities.js';
import { InputNode } from '../boxDrawingUtilities.js';
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

const doubles = (boxDrawObj) => {
	boxDraw(boxDrawObj);
	const quadrantDice = roll(2); // 1 = q2. 2 = q3
	const styleDice = roll(3); // 1= clone, 2= rotate, 3= reflect
	const doubleDice = roll(3); // 1= clone, 2= rotate x2, 3= reflect
	let directionDice = 0;
	let adjustedMatrix = [];

	const quadrant =
		quadrantDice === 1
			? { x: boxDrawObj.drawSectionWidth, y: 0 }
			: { x: 0, y: boxDrawObj.drawSectionHeight };
	const quadrantDouble =
		quadrantDice === 1
			? { x: 0, y: boxDrawObj.drawSectionHeight }
			: { x: boxDrawObj.drawSectionWidth, y: 0 };

	let inputNode = new InputNode(
		boxDrawObj.ctx,
		boxDrawObj.ctx2,
		boxDrawObj.matrix,
		boxDrawObj.pixelWidth,
		boxDrawObj.pixelHeight
	);

	switch (styleDice) {
		case 1:
			//clone
			adjustedMatrix = clone(boxDrawObj, quadrant.x, quadrant.y);

			inputNode.matrix = adjustedMatrix;

			boxDraw(inputNode);
			break;
		case 2:
			//rotate
			directionDice = roll(2); // 1 = clockwise. 2 = counter clockwise
			directionDice === 1
				? (adjustedMatrix = rotateClockwise(
						inputNode,
						quadrant.x,
						quadrant.y
				  ))
				: (adjustedMatrix = rotateCounterClockwise(
						inputNode,
						quadrant.x,
						quadrant.y
				  ));

			inputNode.matrix = adjustedMatrix;

			boxDraw(inputNode);
			break;
		case 3:
			//reflect

			directionDice = roll(2); // 1 = vertical axis reflect. 2 = horizontal axis reflect
			directionDice === 1
				? (adjustedMatrix = reflectVerticalAxis(
						inputNode,
						quadrant.x,
						quadrant.y
				  ))
				: (adjustedMatrix = reflectHorizontalAxis(
						inputNode,
						quadrant.x,
						quadrant.y
				  ));

			inputNode.matrix = adjustedMatrix;

			boxDraw(inputNode);
			break;
		default:
			console.log('error in style dice variable');
			break;
	}

	let combinedMatrix = [];
	quadrantDice === 1
		? (combinedMatrix = combineMatrixTopHalf(
				boxDrawObj.matrix,
				adjustedMatrix
		  ))
		: (combinedMatrix = combineMatrixLeftHalf(
				boxDrawObj.matrix,
				adjustedMatrix
		  ));
	let rotatedMatrix = [];
	let reflectedMatrix = [];

	inputNode.matrix = combinedMatrix;

	switch (doubleDice) {
		case 1:
			//clone

			boxDraw(inputNode, quadrantDouble.x, quadrantDouble.y);
			break;
		case 2: //quadrantDice === 1, combine top
			//rotate

			rotatedMatrix = rotateClockwise(inputNode);
			inputNode.matrix = rotatedMatrix;
			rotatedMatrix = rotateClockwise(
				inputNode,
				quadrantDouble.x,
				quadrantDouble.y
			); // rotate twice

			inputNode.matrix = rotatedMatrix;

			boxDraw(inputNode);
			break;
		case 3: // quadrantDice === 1, reflect horizontal : reflect vertical
			//reflect
			reflectedMatrix =
				quadrantDice === 1
					? reflectHorizontalAxis(
							inputNode,
							quadrantDouble.x,
							quadrantDouble.y
					  )
					: reflectVerticalAxis(
							inputNode,
							quadrantDouble.x,
							quadrantDouble.y
					  );

			inputNode.matrix = reflectedMatrix;

			boxDraw(inputNode);

			break;

		default:
			console.log('error in style dice variable');
			break;
	}
};

export default doubles;
