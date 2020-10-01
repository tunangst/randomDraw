// import { roll, rollRange, randomColor } from '../../utilities.js';
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

// const loop = (inputs) => {
//     // inputs = {
//     //      currentLoop,
//     //      loopCount,
//     //      useSize,
//     //      useHalfSize,
//     //      maxFullPath,
//     //      maxHalfPath,
//     //      shapeSizeType,
//     //      shapeArr,
//     //      strokeWidth,
//     //      strokeColor,
//     //      fillColor,
//     // }

//     // console.log(inputs.currentLoop, inputs.loopCount);
//     const percent = inputs.currentLoop / inputs.loopCount;

//     const sizeBasedOnIndex = Math.ceil(inputs.useSize * percent);
//     const halfSizeBasedOnIndex = Math.ceil(inputs.useHalfSize * percent);
//     const countBasedOnIndex = Math.ceil((100 * percent) / 2);

//     const maxHalfPath = findHypotenuse(halfWidth, halfHeight);
//     const maxFullPath = findHypotenuse(width, height);

//     inputs.shapeCount = rollRange(20, halfSizeBasedOnIndex);
//     // const shape = inputs.shapeArr[inputs.currentLoop - 1]; // -1 because this stops at 1 and internal array goes to 0
//     // console.log('shape ', inputs.shape);
//     inputs.shapeFunction = getShapeFunction(inputs.shape);
//     // console.log('shapeFunction ', shapeFunction);

//     inputs.shapeSize =
//         inputs.shapeSizeType === 'random'
//             ? rollRange(20, halfSizeBasedOnIndex)
//             : 50;

//     const strokeAndFillObj = getStrokeAndFillType();
//     // let strokeWidth = 1;

//     inputs.pathRadius = rollRange(maxHalfPath, maxFullPath);

//     if (percent === 1) {
//         inputs.pathRadius = rollRange(maxHalfPath, maxFullPath); // between halfWidth and width
//         inputs.shapeCount = rollRange(4, 200); // 4-200 what looks good
//         inputs.shapeSize = inputs.pathRadius;
//     }
//     //******STARTING DRAW*********** */
//     //******STARTING DRAW*********** */
//     //******MOVE CENTER POINT*********** */
//     ctx2.translate(halfWidth, halfHeight); // move to center

//     if (strokeAndFillObj.fill.color) {
//         if (strokeAndFillObj.fill.color === 'random') {
//             inputs.fillColor = inputs.fillColor;
//             inputs.fillColor = randomColor();
//         } else {
//             inputs.fillColor = inputs.fillColor;
//         }
//         inputs.fillSwitch = true;
//     }
//     roll(2) === 1 ? (inputs.clearSwitch = true) : (inputs.clearSwitch = false);

//     if (inputs.clearSwitch || inputs.fillSwitch) {
//         for (let i = 1; i <= inputs.shapeCount; i++) {
//             // debugger;
//             if (inputs.clearSwitch) {
//                 clearDrawingArea(
//                     'clear',
//                     inputs.clearSwitch,
//                     inputs.shapeFunction,
//                     inputs.pathRadius,
//                     inputs.shapeSize,
//                     inputs.shapeCount,
//                     inputs.background
//                 );
//             }
//         }
//         for (let i = 1; i <= inputs.shapeCount; i++) {
//             // debugger;
//             if (inputs.fillSwitch) {
//                 clearDrawingArea(
//                     'fill',
//                     inputs.clearSwitch,
//                     inputs.shapeFunction,
//                     inputs.pathRadius,
//                     inputs.shapeSize,
//                     inputs.shapeCount,
//                     inputs.fillColor
//                 );
//             }
//         }
//     }
//     //******STARTING DRAW*********** */
//     //******STARTING DRAW*********** */
//     for (let i = 1; i <= inputs.shapeCount; i++) {
//         ctx2.beginPath();
//         // debugger;
//         inputs.shapeFunction(inputs.shapeSize, inputs.pathRadius);

//         //************************stroke**************** */
//         if (strokeAndFillObj.stroke.width) {
//             //there is a stroke width
//             if (strokeAndFillObj.stroke.width === 'random') {
//                 inputs.strokeWidth = getRandomStrokeWidth(inputs.shapeCount);
//                 ctx2.lineWidth = inputs.strokeWidth;
//             } else {
//                 ctx2.lineWidth = inputs.strokeWidth;
//             }
//         } else {
//             //there is not a stroke width
//             ctx2.lineWidth = 0;
//         }
//         if (strokeAndFillObj.stroke.color) {
//             if (strokeAndFillObj.stroke.color === 'random') {
//                 ctx2.strokeStyle = inputs.strokeColor;
//                 ctx2.stroke();
//                 //do stroke color here then
//                 inputs.strokeColor = randomColor();
//             } else {
//                 //fixed
//                 ctx2.strokeStyle = inputs.strokeColor;
//                 ctx2.stroke();
//             }
//         } else {
//             //there is no stroke color
//         }

//         //************************stroke**************** */
//         // ctx2.beginPath();
//         // drawCircle(shapeSize, pathRadius);
//         // ctx2.lineWidth = 1;
//         // ctx2.strokeStyle = randomColorValue;
//         // ctx2.stroke();
//         ctx2.closePath();
//         ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
//     }
//     ctx2.translate(-halfWidth, -halfHeight); // move back to (0,0)
//     //******MOVE CENTER POINT BACK*********** */
//     //******ENDING DRAW*********** */
//     //******ENDING DRAW*********** */
//     //******ENDING DRAW*********** */
//     //******ENDING DRAW*********** */

//     //before implementation, if background ? clearShapeArea will be the background color
//     //gradient pbly doesnt work well with clearing
//     console.log(inputs);
//     return inputs;
// };

// export default loop;
