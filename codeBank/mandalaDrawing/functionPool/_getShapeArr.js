import getShapeFunction from './_getShapeFunction.js';

const getShapeArr = (loopCount, forceNumber) => {
    let shapeStyleDice;

    if (forceNumber) {
        if (forceNumber === 'random') shapeStyleDice = 1;
        if (forceNumber === 'same') shapeStyleDice = 2;
        if (forceNumber === 'increment') shapeStyleDice = 3;
    } else {
        shapeStyleDice = roll(3);
    }

    let shape = null;
    let shapeArr = [];

    switch (shapeStyleDice) {
        case 1:
            for (let loop = loopCount; loop > 0; loop--) {
                shapeArr.push(getShapeFunction());
            }
            break;
        case 2:
            const sameShape = getShapeFunction();
            for (let loop = loopCount; loop > 0; loop--) {
                shapeArr.push(sameShape);
            }
            break;
        case 3:
            for (let loop = loopCount; loop > 0; loop--) {
                shapeArr.push(getShapeFunction(loop));
            }
            break;
        default:
            console.log('error in getShapeArr');
            break;
    }
    console.log(shapeArr, '  shapeArr');
    return shapeArr;
};

export default getShapeArr;
