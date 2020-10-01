import { roll, randomColor } from '../../utilities.js';
import { halfWidth, halfHeight, height, width } from '../mandalaDrawing.js';
import { findHypotenuse } from '../mandalaDrawingUtilities.js';
import getBackground from './_getBackground.js';
import getShapeArr from './_getShapeArr.js';
// import getBlendMode from './_getBlendMode.js';
import getType from './_getType.js';

const getInputStats = () => {
    const useSize = width > height ? width : height;
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    let inputObj = {
        currentLoop: null,
        loopCount: 5, //roll(5)
        backgroundLoopSwitch: true,
        initSwitch: false,
        pathRadius: null,
        useSize: width > height ? width : height,
        useHalfSize: null,
        percent: null, // created in loop
        maxFullPath: findHypotenuse(width, height),
        maxHalfPath: findHypotenuse(halfWidth, halfHeight),
        background: getBackground(),
        shapeSizeType: getType(3),
        shapeSize: null, //default, shape size needs to be adjusted based on path
        shapeCount: null, // default, randomize
        shapeArr: null,
        strokeWidthType: getType(3),
        strokeWidth: 1,
        strokeColorType: getType(),
        strokeColor: randomColor(),
        fillColorType: getType(),
        fillColor: randomColor(),
        fill: false,
        clearType: getType(3),
        clear: false,
        blendMode: null, // have to find in loop
        testInput: 'hello',
    };
    inputObj.useHalfSize = useSize / 2;
    inputObj.shapeArr = getShapeArr(inputObj.loopCount, 'same');
    //strokeWidthType = 'allSame''allRandom''loopsSame''loopsRandom''none'

    // const blendModeInput = inputObj.clearSwitch === true ? 4 : 3;
    // inputObj.blendMode = getBlendMode(blendModeInput);
    return inputObj;
};

export default getInputStats;
