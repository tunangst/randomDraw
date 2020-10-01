import { roll, rollRange, randomColor } from '../../utilities.js';
import getStrokeWidth from '../functionPool/_getStrokeWidth.js';
import getStrokeColor from '../functionPool/_getStrokeColor.js';
// import {
//     findHypotenuse,
//     drawCircle,
//     drawSquare,
//     clearDrawingArea,
//     getBlendMode,
// } from '../MandalaDrawingUtilities.js';
// import {
//     ctx,
//     ctx2,
//     halfWidth,
//     halfHeight,
//     height,
//     width,
// } from '../mandalaDrawing.js';
// import {
//     getShapeFunction,
//     getStrokeAndFillType,
//     getRandomStrokeWidth,
// } from './oneShape.js';

const loop = (inputs) => {
    // inputs = {
    // currentLoop: null,
    // loopCount: 5, //roll(5)
    // backgroundLoopSwitch: true,
    // initSwitch: false,
    // pathRadius: null,
    // useSize: width > height ? width : height,
    // useHalfSize: null,
    // percent: null, // created in loop
    // maxFullPath: findHypotenuse(width, height),
    // maxHalfPath: findHypotenuse(halfWidth, halfHeight),
    // background: getBackground(),
    // shapeSizeType: getShapeSizeType(), //not built, fixed or random
    // shapeSize: 50, //default, shape size needs to be adjusted based on path
    // shapeCount: 20, // default, randomize
    // shapeArr: null,
    // strokeWidthType: getType(3),
    // strokeWidth: 1,
    // strokeColorType: getType(),
    // strokeColor: randomColor(),
    // fillColorType: getType(),
    // fillColor: randomColor(),
    // fill: false,
    // clearType: getType(3),
    // clear: false,
    // blendMode: null, // have to find in loop
    // testInput: 'hello',
    // }
    inputs.percent = inputs.currentLoop / inputs.loopCount;

    // const sizeBasedOnIndex = Math.ceil(inputs.useSize * input.percent);
    const minBackgroundShapeCount = 4;
    const minShapeCount = 20;
    const maxShapeCount = Math.ceil(inputs.useHalfSize * inputs.percent);
    // const countBasedOnIndex = Math.ceil((100 * input.percent) / 2);

    //****************INSIDE FIRST ROLL****************
    //****************INSIDE FIRST ROLL****************
    if (inputs.backgroundLoopSwitch) {
        inputs.shapeCount = rollRange(minBackgroundShapeCount, maxShapeCount);
        inputs.pathRadius = rollRange(inputs.maxHalfPath, inputs.maxFullPath);
        inputs.shapeSize = inputs.pathRadius;
        inputs.backgroundLoopSwitch = false; // switch off
        inputs.initSwitch = true; // switch init on
        //****************INSIDE FIRST ROLL****************
        //****************INSIDE FIRST ROLL****************
    } else if (inputs.initSwitch) {
        //****************INSIDE INIT ROLLS****************
        //               same for whole loop
        //****************INSIDE INIT ROLLS****************
        //loopSame, allSame, none definitions,
        inputs.shapeCount = rollRange(minShapeCount, maxShapeCount);
        inputs.shapeSize = rollRange(minShapeCount, maxShapeCount);

        inputs.strokeWidth = getStrokeWidth(
            inputs.strokeWidthType,
            inputs.shapeCount
        );
        inputs.strokeColor = getStrokeColor(inputs.strokeColorType);

        inputs.initSwitch = false; // switch off

        // 'allSame''loopsSame''none''loopsRandom''allRandom'
    } else {
        //****************INSIDE OTHER ROLLS****************
        //          things changing every increment
        //****************INSIDE OTHER ROLLS****************
        if (inputs.clearType === 'allRandom') {
        }
        if (inputs.strokeWidthType === 'none') {
            inputs.strokeWidth = 0;
        }
    }
    // all same things in the loop. width, color, color, fill

    debugger;

    // inputs.pathRadius = rollRange(maxHalfPath, maxFullPath);

    //******STARTING DRAW*********** */
    //******STARTING DRAW*********** */
    //******MOVE CENTER POINT*********** */
    ctx2.translate(halfWidth, halfHeight); // move to center

    if (strokeAndFillObj.fill.color) {
        if (strokeAndFillObj.fill.color === 'random') {
            inputs.fillColor = inputs.fillColor;
            inputs.fillColor = randomColor();
        } else {
            inputs.fillColor = inputs.fillColor;
        }
        inputs.fillSwitch = true;
    }
    roll(2) === 1 ? (inputs.clearSwitch = true) : (inputs.clearSwitch = false);

    if (inputs.clearSwitch || inputs.fillSwitch) {
        for (let i = 1; i <= inputs.shapeCount; i++) {
            // debugger;
            if (inputs.clearSwitch) {
                clearDrawingArea(
                    'clear',
                    inputs.clearSwitch,
                    inputs.shapeFunction,
                    inputs.pathRadius,
                    inputs.shapeSize,
                    inputs.shapeCount,
                    inputs.background
                );
            }
        }
        for (let i = 1; i <= inputs.shapeCount; i++) {
            // debugger;
            if (inputs.fillSwitch) {
                clearDrawingArea(
                    'fill',
                    inputs.clearSwitch,
                    inputs.shapeFunction,
                    inputs.pathRadius,
                    inputs.shapeSize,
                    inputs.shapeCount,
                    inputs.fillColor
                );
            }
        }
    }
    //******STARTING DRAW*********** */
    //******STARTING DRAW*********** */
    for (let i = 1; i <= inputs.shapeCount; i++) {
        ctx2.beginPath();
        // debugger;
        inputs.shapeFunction(inputs.shapeSize, inputs.pathRadius);

        //************************stroke**************** */
        if (strokeAndFillObj.stroke.width) {
            //there is a stroke width
            if (strokeAndFillObj.stroke.width === 'random') {
                inputs.strokeWidth = getRandomStrokeWidth(inputs.shapeCount);
                ctx2.lineWidth = inputs.strokeWidth;
            } else {
                ctx2.lineWidth = inputs.strokeWidth;
            }
        } else {
            //there is not a stroke width
            ctx2.lineWidth = 0;
        }
        if (strokeAndFillObj.stroke.color) {
            if (strokeAndFillObj.stroke.color === 'random') {
                ctx2.strokeStyle = inputs.strokeColor;
                ctx2.stroke();
                //do stroke color here then
                inputs.strokeColor = randomColor();
            } else {
                //fixed
                ctx2.strokeStyle = inputs.strokeColor;
                ctx2.stroke();
            }
        } else {
            //there is no stroke color
        }

        //************************stroke**************** */
        // ctx2.beginPath();
        // drawCircle(shapeSize, pathRadius);
        // ctx2.lineWidth = 1;
        // ctx2.strokeStyle = randomColorValue;
        // ctx2.stroke();
        ctx2.closePath();
        ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
    }
    ctx2.translate(-halfWidth, -halfHeight); // move back to (0,0)
    //******MOVE CENTER POINT BACK*********** */
    //******ENDING DRAW*********** */
    //******ENDING DRAW*********** */
    //******ENDING DRAW*********** */
    //******ENDING DRAW*********** */

    //before implementation, if background ? clearShapeArea will be the background color
    //gradient pbly doesnt work well with clearing
    console.log(inputs);
    return inputs;
};

export default loop;
