import { roll } from '../../utilities.js';
import getShapeFunction from './_getShapeFunction.js';

const getShapeArr = (inputs, forceNumber) => {
    let shapeStyleDice;

    if (forceNumber) {
        if (forceNumber === 'random') shapeStyleDice = 1;
        if (forceNumber === 'same') shapeStyleDice = 2;
        if (forceNumber === 'increment') shapeStyleDice = 3;
    } else {
        shapeStyleDice = roll(3);
    }
    let shapeArr = [];
    switch (shapeStyleDice) {
        case 1:
            for (let loop = 0; loop < inputs.loopCount; loop++) {
                shapeArr.push(getShapeFunction(inputs));
            }
            break;
        case 2:
            const sameShape = getShapeFunction(inputs);
            for (let loop = 0; loop < inputs.loopCount; loop++) {
                shapeArr.push(sameShape);
            }
            break;
        case 3:
            for (let loop = 0; loop < inputs.loopCount; loop++) {
                shapeArr.push(getShapeFunction(inputs, loop + 1));
            }
            break;
        default:
            console.log('error in getShapeArr');
            break;
    }
    return shapeArr;
};

export default getShapeArr;
