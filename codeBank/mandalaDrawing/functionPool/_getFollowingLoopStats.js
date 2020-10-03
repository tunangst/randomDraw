import { rollRange, lightColor, coinFlip } from '../../utilities.js';
import checkLoopSwitches from './_checkLoopSwitches.js';

import checkShapeSpacing from './_checkShapeSpacing.js';

const getFollowingLoopStats = (inputs) => {
    //****************INSIDE OTHER ROLLS****************
    //          things changing per loop
    //****************INSIDE OTHER ROLLS****************

    inputs.pathRadius = rollRange(inputs.minPathRadius, inputs.maxPathRadius);
    inputs.shapeSize = inputs.maxShapeSize * inputs.percent;
    inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs = checkShapeSpacing(inputs);

    // inputs.fillColor = lightColor(inputs.shapeCount);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
    inputs = checkLoopSwitches(inputs);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~

    return inputs;
};

export default getFollowingLoopStats;
