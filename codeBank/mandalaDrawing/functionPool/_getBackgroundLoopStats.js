import { rollRange, lightColor } from '../../utilities.js';
import getColorType from './_getColorType.js';

const getBackgroundStats = (inputs) => {
    inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs.pathRadius = rollRange(inputs.maxPathRadius, inputs.maxFullPath);
    inputs.shapeSize = inputs.pathRadius;
    // //****************INSIDE FIRST ROLL****************
    // //****************INSIDE FIRST ROLL****************
    inputs.fillColor = getColorType(inputs);
    inputs.strokeColor = getColorType(inputs);

    inputs.fillSwitch = true;
    inputs.backgroundLoopSwitch = false; // switch off
    return inputs;
};
export default getBackgroundStats;
