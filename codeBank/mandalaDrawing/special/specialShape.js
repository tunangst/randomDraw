import loop from './loop.js';
import getInputStats from '../functionPool/_getInputStats.js';
import getBackgroundLoopStats from '../functionPool/_getBackgroundLoopStats.js';
import getInitLoopStats from '../functionPool/_getInitLoopStats.js';
import getFollowingLoopStats from '../functionPool/_getFollowingLoopStats.js';
import getDrawType from '../functionPool/_getDrawType.js';
import getResetSwitches from '../functionPool/_getResetSwitches.js';

const specialShape = () => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    // let stroke;
    // let fill;
    // let clear;

    // const chaos = () => {

    // }
    // const strokeOnly = () => {
    //     stroke = true;
    //     fill = false;
    //     clear = roll(2)
    // }
    const drawType = getDrawType();

    let inputStats = getInputStats(
        drawType.clearAll,
        drawType.clearRandomLoops,
        drawType.clearIndividual,
        drawType.fillAll,
        drawType.fillRandomLoops,
        drawType.fillIndividual,
        drawType.strokeAll,
        drawType.strokeRandomLoops,
        drawType.strokeIndividual
    );

    //draw background
    // drawBackground(inputStats.background);

    //start looping
    for (
        let currentLoop = inputStats.loopCount;
        currentLoop > 0;
        currentLoop--
    ) {
        //define loop specific things here
        // 'strokeWidthType''strokeColorType''fillColorType''clearType'
        // 'allSame''loopsSame''none''loopsRandom''allRandom'
        inputStats.currentLoop = currentLoop;
        inputStats.percent = currentLoop / inputStats.loopCount;
        inputStats.maxShapeCount = Math.ceil(
            inputStats.useHalfSize * inputStats.percent
        );

        if (inputStats.backgroundLoopSwitch) {
            inputStats = getBackgroundLoopStats(inputStats);
        } else if (inputStats.initLoopSwitch) {
            inputStats = getInitLoopStats(inputStats);
        } else {
            inputStats = getFollowingLoopStats(inputStats);
        }
        //call loop
        inputStats = loop(inputStats);
        //reset loop stats
        if (inputStats.percent === 1) {
            inputStats = getResetSwitches(inputStats);
        }
    }

    //write things needing before the loop
    //write things needed in loop
    // const shape = inputs.shapeArr[inputs.currentLoop - 1]; // -1 because this stops at 1 and internal array goes to 0
    // ctx2.beginPath();

    // ctx2.rect(0, 0, width, height);
    // ctx2.fillStyle = background;
    // ctx2.fill();
    // // ctx2.closePath();
    // console.log(background);

    // for (let currentLoop = loopCount; currentLoop > 0; currentLoop--) {
    //     inputObj.currentLoop = currentLoop;
    //     inputObj.loopCount = loopCount;
    //     // inputObj.shape = shapeArr[currentLoop - 1];
    //     // inputObj.shapeFunction = getShapeFunction(inputObj.shape);

    //     const newInputObj = loop(inputObj);
    //     console.log(inputObj, newInputObj);
    //     inputObj = newInputObj;
    // }
};

export default specialShape;
