import { rollRange, coinFlip } from '../../utilities.js';

const getInitLoopStats = (inputs) => {
    //****************INSIDE INIT ROLLS****************
    //               same for whole loop
    //****************INSIDE INIT ROLLS****************
    //loopSame, allSame, none definitions,
    inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs.shapeSize = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs.pathRadius = rollRange(inputs.maxShapeCount, inputs.maxShapeCount);
    // inputs.pathRadius = rollRange(minShapeCount, maxShapeCount);

    // inputs.strokeWidth = getStrokeWidth(
    //     inputs.strokeWidthType,
    //     inputs.shapeCount
    // );
    // inputs.strokeColor = getColor(inputs.strokeColorType);
    // inputs.fillColor = getColor(inputs.fillColorType);
    // inputs.clearSwitch = getClear(inputs.clearType);

    // inputs.shapeSize = checkShapeSpacing(
    //     inputs.shapeSize,
    //     inputs.pathRadius,
    //     maxShapeCount
    // );

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
    if (inputs.clearRandomLoops) {
        inputs.clearSwitch = coinFlip();
    }
    if (inputs.FillRandomLoops) {
        inputs.fillSwitch = coinFlip();
    }
    if (inputs.strokeRandomLoops) {
        inputs.strokeSwitch = coinFlip();
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
    return inputs;
};
export default getInitLoopStats;
