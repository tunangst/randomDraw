import { rollRange, lightColor } from '../../utilities.js';

const getBackgroundStats = (inputs) => {
    inputs.shapeCount = rollRange(
        inputs.minBackgroundShapeCount,
        inputs.maxShapeCount
    );
    inputs.pathRadius = rollRange(inputs.maxHalfPath, inputs.maxFullPath);
    inputs.shapeSize = inputs.pathRadius;
    // //****************INSIDE FIRST ROLL****************
    // //****************INSIDE FIRST ROLL****************
    inputs.fillColor = lightColor(inputs.shapeCount);

    inputs.backgroundLoopSwitch = false; // switch off
    inputs.initLoopSwitch = true; // switch init on
    return inputs;
};
export default getBackgroundStats;
