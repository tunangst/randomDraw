import { roll, randomColor, lightColor } from '../../utilities.js';
import { halfWidth, halfHeight, height, width } from '../mandalaDrawing.js';
import { findHypotenuse } from '../mandalaDrawingUtilities.js';
// import getBlendMode from './_getBlendMode.js';
import getShapeArr from './_getShapeArr.js';

const getInputStats = (
    clearAll,
    clearRandomLoops,
    clearIndividual,
    fillAll,
    fillRandomLoops,
    fillIndividual,
    strokeAll,
    strokeRandomLoops,
    strokeIndividual
) => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    let inputObj = {
        loopCount: 5, //roll(5)
        currentLoop: null,
        percent: null, // created in loop

        backgroundLoopSwitch: true,
        initSwitch: false,

        clearSwitch: false,
        clearAll,
        clearRandomLoops,
        clearIndividual,

        fillSwitch: true, //set for background only
        fillAll,
        fillRandomLoops,
        fillIndividual,
        fillColor: null,

        strokeSwitch: true,
        strokeAll,
        strokeRandomLoops,
        strokeIndividual,
        strokeWidth: 1,
        strokeColor: lightColor(),

        useSize: width > height ? width : height,
        useHalfSize: null,
        maxFullPath: findHypotenuse(width, height),
        maxHalfPath: findHypotenuse(halfWidth, halfHeight),

        pathRadius: null,
        minBackgroundShapeCount: 4,
        minShapeCount: 20,

        shapeCount: null, // default, randomize
        shapeSize: null, //default, shape size needs to be adjusted based on path
        shapeArr: null,
        // strokeSwitch: true,
        // fillSwitch: true,
        blendMode: null, // have to find in loop
    };
    inputObj.useHalfSize = inputObj.useSize / 2;
    inputObj.shapeArr = getShapeArr(inputObj.loopCount, 'same');
    //strokeWidthType = 'allSame''allRandom''loopsSame''loopsRandom''none'

    // const blendModeInput = inputObj.clearSwitch === true ? 4 : 3;
    // inputObj.blendMode = getBlendMode(blendModeInput);
    inputObj.blendMode = 'multiply';
    return inputObj;
};

export default getInputStats;
