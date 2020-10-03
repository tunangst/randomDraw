import { rollRange } from '../../utilities.js';

const checkShapeSpacing = (shapeSize, pathRadius, maxShapeSize) => {
    let newSize = shapeSize;
    let improperSpacing = shapeSize - pathRadius;

    while (improperSpacing >= -5 && improperSpacing <= 5) {
        console.log('improperspacing while loop, changing pathRadius variable');

        newSize = rollRange(20, maxShapeSize);
        // pathRadius = rollRange(0, threshRadius25);
        improperSpacing = newSize - pathRadius;
    }
    return newSize;
};

export default checkShapeSpacing;
