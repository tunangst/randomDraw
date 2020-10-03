import { rollRange, coinFlip } from '../../utilities.js';
import checkShapeSpacing from './_checkShapeSpacing.js';
import checkLoopSwitches from './_checkLoopSwitches.js';

const getInitLoopStats = (inputs) => {
    //****************INSIDE INIT ROLLS****************
    //               everything the same in every loop go here
    //****************INSIDE INIT ROLLS****************

    inputs.pathRadius = rollRange(inputs.minPathRadius, inputs.maxPathRadius);
    inputs.shapeSize = inputs.maxShapeSize * inputs.percent;
    inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);

    inputs = checkShapeSpacing(inputs);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
    inputs = checkLoopSwitches(inputs);

    // strokeSwitch: true,
    // strokeAll,
    // strokeRandomLoops,
    // strokeIndividual,
    // strokeWidth: 1,
    // strokeColor: lightColor(),
    // if (inputs.strokeRandomLoops) {
    //     inputs.strokeSwitch = coinFlip();
    // }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
    // inputs.initLoopSwitch = false;
    return inputs;
};
export default getInitLoopStats;
