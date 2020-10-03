import { rollRange, lightColor } from '../../utilities.js';

const getBackgroundStats = (inputs) => {
    inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs.pathRadius = rollRange(inputs.maxPathRadius, inputs.maxFullPath);
    inputs.shapeSize = inputs.pathRadius;
    // //****************INSIDE FIRST ROLL****************
    // //****************INSIDE FIRST ROLL****************

    inputs.backgroundLoopSwitch = false; // switch off
    return inputs;
};
export default getBackgroundStats;
