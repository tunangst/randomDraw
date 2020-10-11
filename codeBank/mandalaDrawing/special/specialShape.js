import loop from './loop.js';
import getInputStats from '../functionPool/_getInputStats.js';
import getBackgroundLoopStats from '../functionPool/_getBackgroundLoopStats.js';
// import getInitLoopStats from '../functionPool/_getInitLoopStats.js';
import getFollowingLoopStats from '../functionPool/_getFollowingLoopStats.js';
import getDrawType from '../functionPool/_getDrawType.js';
import checkBackgroundSwitches from '../functionPool/_checkBackgroundSwitches.js';
import getBlendMode from '../functionPool/_getBlendMode.js';

const specialShape = () => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    const drawType = getDrawType();
    // debugger;
    const blendMode = getBlendMode();
    let inputStats = getInputStats(
        blendMode,
        drawType.strokeSwitch,
        drawType.fillSwitch,
        drawType.clearAll,
        drawType.clearRandomLoops,
        drawType.clearIndividual,
        drawType.fillAll,
        drawType.fillRandomLoops,
        drawType.fillIndividual,
        drawType.fillColorAll,
        drawType.fillColorRandomLoops,
        drawType.fillColorIndividual,
        drawType.strokeAll,
        drawType.strokeRandomLoops,
        drawType.strokeIndividual,
        drawType.strokeColorAll,
        drawType.strokeColorRandomLoops,
        drawType.strokeColorIndividual,
        drawType.strokeWidthAll,
        drawType.strokeWidthRandomLoops,
        drawType.strokeWidthIndividual
    );

    //start looping
    for (
        let currentLoop = inputStats.loopCount;
        currentLoop > 0;
        currentLoop--
    ) {
        inputStats.currentLoop = currentLoop;
        inputStats.percent = currentLoop / inputStats.loopCount;
        inputStats.maxShapeCount = Math.ceil(
            inputStats.useHalfSize * inputStats.percent
        );
        if (inputStats.backgroundLoopSwitch) {
            inputStats = getBackgroundLoopStats(inputStats);
            // } else if (inputStats.initLoopSwitch) {
            //     inputStats = getInitLoopStats(inputStats);
        } else {
            inputStats = getFollowingLoopStats(inputStats);
        }
        //call loop
        // console.log({ ...inputStats });
        console.log(inputStats.pathRadius, inputStats.shapeSize);
        // debugger;
        inputStats = loop(inputStats);
        //reset loop stats
        if (inputStats.percent === 1) {
            inputStats = checkBackgroundSwitches(inputStats);
        }
    }
};

export default specialShape;
