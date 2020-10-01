import { roll } from '../../utilities.js';
import drawCircle from './draw/drawCircle.js';
import drawSquare from './draw/drawSquare.js';
import drawLine from './draw/drawLine.js';

const getShapeFunction = (forceNumber) => {
    const diceRange = 2; // length of cases when ready
    // let dice = roll(5);
    let dice;
    //forceNumber should increment, lets the invoke call the case
    while (forceNumber && forceNumber > diceRange) {
        forceNumber = forceNumber - diceRange;
    }
    forceNumber ? (dice = forceNumber) : (dice = roll(diceRange)); //roll(5)

    switch (dice) {
        case 1:
            return drawCircle;
        case 2:
            return drawSquare;
        case 3:
            return drawLine; // not ready yet
        case 4:
            return 'oval'; // not built yet
        case 5:
            return 'rectangle'; // not built yet
        default:
            console.log('error in getShapeType');
            return;
    }
};
export default getShapeFunction;
