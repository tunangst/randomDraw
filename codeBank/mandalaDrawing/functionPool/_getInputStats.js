// import { roll, randomColor, lightColor } from '../../utilities.js';
import { halfWidth, halfHeight, height, width } from '../mandalaDrawing.js';
import { findHypotenuse } from '../mandalaDrawingUtilities.js';
// import getBlendMode from './_getBlendMode.js';
import getShapeArr from './_getShapeArr.js';

const getInputStats = () => {
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    let inputObj = {
        loopCount: 5, //roll(5)
        currentLoop: null,
        percent: null, // created in loop

        backgroundLoopSwitch: true,
        initLoopSwitch: false,

        customBackgroundSwitch: false,
        customBackgroundColor: null,
        customStrokeColor: null,
        customShape: null,

        clearSwitch: false,
        clearAll: false,
        clearRandomLoops: false,
        clearIndividual: false,

        fillSwitch: false,
        fillAll: false,
        fillRandomLoops: false,
        fillIndividual: false,
        fillColor: null,
        fillColorAll: false,
        fillColorRandomLoops: false,
        fillColorIndividual: false,

        strokeSwitch: false,
        strokeAll: false,
        strokeRandomLoops: false,
        strokeIndividual: false,
        strokeColor: null,
        strokeColorAll: false,
        strokeColorRandomLoops: false,
        strokeColorIndividual: false,
        strokeWidth: 1,
        strokeWidthAll: false,
        strokeWidthRandomLoops: false,
        strokeWidthIndividual: false,

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

        blendMode: null, // have to find in loop
    };
    inputObj.useHalfSize = inputObj.useSize / 2;

    return inputObj;
};

export default getInputStats;
