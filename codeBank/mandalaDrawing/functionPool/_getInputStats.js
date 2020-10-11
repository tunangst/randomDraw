import { roll, randomColor, lightColor } from '../../utilities.js';
import { halfWidth, halfHeight, height, width } from '../mandalaDrawing.js';
import { findHypotenuse } from '../mandalaDrawingUtilities.js';
// import getBlendMode from './_getBlendMode.js';
import getShapeArr from './_getShapeArr.js';

const getInputStats = (
    blendMode,
    strokeSwitch,
    fillSwitch,
    clearAll,
    clearRandomLoops,
    clearIndividual,
    fillAll,
    fillRandomLoops,
    fillIndividual,
    fillColorAll,
    fillColorRandomLoops,
    fillColorIndividual,
    strokeAll,
    strokeRandomLoops,
    strokeIndividual,
    strokeColorAll,
    strokeColorRandomLoops,
    strokeColorIndividual,
    strokeWidthAll,
    strokeWidthRandomLoops,
    strokeWidthIndividual
) => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    let inputObj = {
        loopCount: 5, //roll(5)
        currentLoop: null,
        percent: null, // created in loop

        backgroundLoopSwitch: true,
        initLoopSwitch: false,

        clearSwitch: false,
        clearAll,
        clearRandomLoops,
        clearIndividual,

        fillSwitch, //set for background only
        fillAll,
        fillRandomLoops,
        fillIndividual,
        fillColor: null,
        fillColorAll,
        fillColorRandomLoops,
        fillColorIndividual,

        strokeSwitch,
        strokeAll,
        strokeRandomLoops,
        strokeIndividual,
        strokeColor: null,
        strokeColorAll,
        strokeColorRandomLoops,
        strokeColorIndividual,
        strokeWidth: 1,
        strokeWidthAll,
        strokeWidthRandomLoops,
        strokeWidthIndividual,

        useSize: width > height ? width : height,
        useHalfSize: null,
        maxFullPath: findHypotenuse(width, height),

        pathRadius: null,
        minPathRadius: 20,
        maxPathRadius: findHypotenuse(halfWidth, halfHeight),
        minShapeCount: 4,
        maxShapeCount: 200, //
        maxShapeSize: 200,

        shapeCount: null, // default, randomize
        shapeSize: null, //default, shape size needs to be adjusted based on path
        shapeArr: null,

        blendMode, // have to find in loop
    };
    inputObj.useHalfSize = inputObj.useSize / 2;
    inputObj.shapeArr = getShapeArr(inputObj.loopCount);

    return inputObj;
};

export default getInputStats;
