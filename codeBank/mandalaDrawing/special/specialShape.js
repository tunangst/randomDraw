import loop from './loop.js';
import getInputStats from '../functionPool/_getInputStats.js';
import getBackgroundLoopStats from '../functionPool/_getBackgroundLoopStats.js';
// import getInitLoopStats from '../functionPool/_getInitLoopStats.js';
import getFollowingLoopStats from '../functionPool/_getFollowingLoopStats.js';
import getShapeArr from '../functionPool/_getShapeArr.js';
import getDrawType from '../functionPool/_getDrawType.js';
import checkBackgroundSwitches from '../functionPool/_checkBackgroundSwitches.js';
import getBlendMode from '../functionPool/_getBlendMode.js';

const specialShape = () => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    //init stats
    let inputStats = getInputStats();
    //'strokeOnly','fillOnly','fillAndStroke','individual','chaos','outline'
    inputStats = getBlendMode(inputStats);
    //overrides
    inputStats = getDrawType(inputStats, 'outline');
    //build arr
    inputStats.shapeArr = getShapeArr(inputStats);

    //start looping
    for (
        let currentLoop = inputStats.loopCount;
        currentLoop > 0;
        currentLoop--
    ) {
        inputStats.currentLoop = currentLoop;
        inputStats.percent = currentLoop / inputStats.loopCount;
        if (!inputStats.customShape) {
            inputStats.maxShapeCount = Math.ceil(
                inputStats.useHalfSize * inputStats.percent
            );
        }
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
