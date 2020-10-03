import { rollRange, lightColor, coinFlip } from '../../utilities.js';

import checkShapeSpacing from './_checkShapeSpacing.js';

const getFollowingLoopStats = (inputs) => {
    //****************INSIDE OTHER ROLLS****************
    //          things changing every increment
    //****************INSIDE OTHER ROLLS****************
    inputs.pathRadius = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs.shapeSize = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
    inputs.shapeSize = checkShapeSpacing(
        inputs.shapeSize,
        inputs.pathRadius,
        inputs.maxShapeCount
    );
    const shapeMax = 200;
    inputs.pathRadius = rollRange(20, inputs.maxHalfPath);
    // inputs.shapeSize = rollRange(20, inputs.pathRadius + 10);
    inputs.shapeSize = shapeMax * inputs.percent;
    inputs.shapeCount = rollRange(5, inputs.shapeSize); //inputs.pathRadius / 10;

    console.log(`+++++++++++++++++++++++++++++++++++++++`);
    console.log(`fillColor:  ${inputs.fillColor}`);
    console.log(`percent:  ${inputs.percent}`);
    console.log(`pathRadius:  ${inputs.pathRadius}`);
    console.log(`shapeSize:  ${inputs.shapeSize}`);
    console.log(`shapeCount:  ${inputs.shapeCount}`);
    console.log(`+++++++++++++++++++++++++++++++++++++++`);
    inputs.fillColor = lightColor(inputs.shapeCount);

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

export default getFollowingLoopStats;
