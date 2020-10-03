import { rollRange } from '../../utilities.js';

const checkShapeSpacing = (inputs) => {
    let newPath = inputs.pathRadius;
    let improperSpacing = inputs.shapeSize - inputs.pathRadius;

    while (improperSpacing >= -5 && improperSpacing <= 5) {
        console.log('improperspacing while loop, changing pathRadius variable');

        newPath = rollRange(inputs.minPathRadius, inputs.maxPathRadius);
        improperSpacing = newPath - inputs.pathRadius;
    }
    inputs.pathRadius = newPath;
    return inputs;
};

export default checkShapeSpacing;
