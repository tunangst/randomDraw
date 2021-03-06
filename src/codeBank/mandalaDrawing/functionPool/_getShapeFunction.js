import { roll } from '../../utilities.js';
import { slant, starburst } from './draw/drawLine.js';
import { square, diamond } from './draw/drawSquare.js';
import { circle, oval } from './draw/drawEllipse.js';

const getShapeFunction = (inputs) => {
	const diceRange = 3; // length of cases when ready
	let dice;
	//forceNumber should increment, lets the invoke call the case
	if (inputs.shapeNumber) {
		while (inputs.shapeNumber && inputs.shapeNumber > diceRange) {
			inputs.shapeNumber = inputs.shapeNumber - diceRange;
		}
		dice = inputs.shapeNumber;
	} else if (inputs.customShape) {
		// debugger;
		switch (inputs.customShape) {
			case 'circle':
				return circle;
			case 'oval':
				return oval;
			case 'square':
				return square;
			case 'diamond':
				return diamond;
			case 'starburst':
				return starburst;
			case 'slant':
				return slant;
			case 'noLine':
				dice = roll(2);
				break;
			default:
				console.log('default in customshape, get shapefunction');
				break;
		}
	} else {
		if (inputs.drawType === 'fillOnly') {
			dice = roll(2);
		} else {
			dice = roll(3);
		}
	}

	switch (dice) {
		case 1: // draw ellipse
			const ellipseDice = roll(2);
			// ellipseDice = 2;
			switch (ellipseDice) {
				case 1:
					return circle;
				case 2:
					return oval;
				default:
					console.log('error in getShapeFunction ellipse');
					break;
			}
		// return drawCircle;
		case 2: // draw square
			let squareDice = roll(2);
			switch (squareDice) {
				case 1:
					return square;
				case 2:
					return diamond;
				default:
					console.log('error in getShapeFunction square');
					break;
			}
		case 3: // draw line
			let lineDice = roll(2);
			switch (lineDice) {
				case 1:
					return starburst;
				case 2:
					return slant;
				default:
					console.log('error in getShapeFunction line');
					break;
			}

		default:
			console.log('error in getShapeType');
			return;
	}
};
export default getShapeFunction;
