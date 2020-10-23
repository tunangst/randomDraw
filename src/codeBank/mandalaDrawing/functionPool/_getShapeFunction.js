import { roll } from '../../utilities.js';
import { slant, starburst } from './draw/drawLine.js';
import { square, diamond } from './draw/drawSquare.js';
import { circle, oval } from './draw/drawEllipse.js';

const getShapeFunction = (customShape, forceNumber) => {
	const diceRange = 3; // length of cases when ready
	let dice;
	//forceNumber should increment, lets the invoke call the case
	if (forceNumber) {
		while (forceNumber && forceNumber > diceRange) {
			forceNumber = forceNumber - diceRange;
		}
		dice = forceNumber;
	} else if (customShape === 'noLine') {
		dice = roll(2);
	} else {
		dice = roll(3);
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
