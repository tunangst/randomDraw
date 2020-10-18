import { roll } from '../../utilities.js';
import {
	findQuadrantOrder,
	boxDraw,
	InputNode,
} from '../boxDrawingUtilities.js';
import clone from './clone.js';
import { reflectVerticalAxis, reflectHorizontalAxis } from './reflect.js';
import { rotateClockwise, rotateCounterClockwise } from './rotate.js';

const singles = (boxDrawObj) => {
	const quadrantDice = findQuadrantOrder(boxDrawObj);
	const styleDice = [1, roll(3), roll(3), roll(3)];

	styleDice.forEach((number, index) => {
		const xPos = quadrantDice[index].x;
		const yPos = quadrantDice[index].y;
		let adjustedMatrix = [];

		let inputNode = new InputNode(
			boxDrawObj.ctx,
			boxDrawObj.ctx2,
			boxDrawObj.matrix,
			boxDrawObj.pixelWidth,
			boxDrawObj.pixelHeight
		);

		switch (number) {
			case 1:
				//clone
				adjustedMatrix = clone(boxDrawObj, xPos, yPos);

				inputNode.matrix = adjustedMatrix;

				boxDraw(inputNode);
				break;
			case 2:
				//reflect
				const directionDiceReflect = roll(2); // 1 = vertical axis reflect. 2 = horizontal axis reflect

				directionDiceReflect === 1
					? (adjustedMatrix = reflectVerticalAxis(
							boxDrawObj,
							xPos,
							yPos
					  ))
					: (adjustedMatrix = reflectHorizontalAxis(
							boxDrawObj,
							xPos,
							yPos
					  ));

				inputNode.matrix = adjustedMatrix;

				boxDraw(inputNode);
				break;
			case 3:
				//rotate
				const directionDiceRotate = roll(2); // 1 = clockwise rotate. 2 = counter clockwise rotate

				directionDiceRotate === 1
					? (adjustedMatrix = rotateClockwise(boxDrawObj, xPos, yPos))
					: (adjustedMatrix = rotateCounterClockwise(
							boxDrawObj,
							xPos,
							yPos
					  ));

				inputNode.matrix = adjustedMatrix;

				boxDraw(inputNode);
				break;
			default:
				console.log('error in number variable');
				break;
		}
	});
};

export default singles;
