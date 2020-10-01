import loop from './loop.js';
import getInputStats from '../functionPool/_getInputStats.js';
import drawBackground from '../functionPool/draw/drawBackground.js';

const specialShape = () => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    // const loopCount = roll(5);
    let inputStats = getInputStats();

    //draw background
    drawBackground(inputStats.background);

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
        //call loop
        inputStats = loop(inputStats);
        //reset loop stats
        inputStats.backgroundLoopSwitch = true;
        inputStats.initSwitch = false;
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
