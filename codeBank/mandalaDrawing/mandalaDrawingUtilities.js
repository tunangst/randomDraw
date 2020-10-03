// #################################### idea ######################################
// stacking effect when you use rollRange(0, threshRadius50) for every pass

// move this to edges for one of the effects being on the sides off center
// ctx2.translate(halfWidth, halfHeight)

// outer circle
// ctx2.translate(halfWidth, halfHeight);
// drawCircle(width, halfHeight);
// drawCircle(halfWidth, height);
//
// top left is center inside begin path, bot right web outside of beginpath
// ctx2.translate(0, 0);
// drawCircle(width, height);
// #################################### idea ######################################

import { roll, rollRange, randomColor } from '../utilities.js';
import {
    ctx,
    ctx2,
    halfWidth,
    halfHeight,
    height,
    width,
} from './MandalaDrawing.js';
import { oneShape } from './oneShape/oneShape.js';
import specialShape from './special/specialShape.js';

class PointNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class inputsNode {
    constructor(pathRadius, shapeSize, shapeCount) {
        this.pathRadius = pathRadius || null;
        this.shapeSize = shapeSize || null;
        this.shapeCount = shapeCount || null;
    }
}

const getShapeFunction = (shape) => {
    debugger;
    let shapeFunction;
    switch (shape) {
        case 'circle':
            shapeFunction = drawCircle;
            break;
        case 'square':
            shapeFunction = drawSquare;
            break;
        case 'line':
            shapeFunction = drawCircle;
            // shapeFunction = drawLine;
            break;
        case 'oval':
            shapeFunction = drawSquare;
            // shapeFunction = drawOval;
            break;
        case 'rectangle':
            shapeFunction = drawCircle;
            // shapeFunction = drawRectangle;
            break;
        default:
            console.log('error in oneShape roll shape variable');
            break;
    }
    return shapeFunction;
};

const randomStartingPoint = () => {
    const dice = roll(halfWidth);
    return new PointNode(dice, halfWidth);
};

const findHypotenuse = (width, height) => {
    const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    return Math.round(hypotenuse);
};

const clearDrawingArea = (
    clearOrDraw,
    clearSwitch,
    shapeFunction,
    pathRadius,
    shapeSize,
    shapeCount,
    color
) => {
    //nextShapeDraw is the function
    // debugger;
    if (clearOrDraw === 'clear') {
        ctx2.globalCompositeOperation = 'destination-out';
        ctx2.beginPath();
        shapeFunction(shapeSize, pathRadius);
        ctx2.fill();
        ctx2.closePath();
        ctx2.globalCompositeOperation = 'source-over';
    }
    if (clearOrDraw === 'fill') {
        let blendMode;
        if (clearSwitch === 'cleared') {
            blendMode = getBlendMode(4);
        } else {
            blendMode = getBlendMode(3);
        }
        // ctx2.globalCompositeOperation = 'multiply'; // great for clear first
        // ctx2.globalCompositeOperation = 'screen'; // also good option for both
        // ctx2.globalCompositeOperation = 'difference'; // cool chaos option both ways
        ctx2.globalCompositeOperation = blendMode;
        ctx2.beginPath();
        shapeFunction(shapeSize, pathRadius);
        ctx2.fillStyle = color;
        ctx2.fill();
        ctx2.closePath();
        ctx2.globalCompositeOperation = 'source-over';
    }

    ctx2.rotate((2 * Math.PI) / shapeCount);
};

const getLineWidth = (shapeCount) => {
    // shape size around 250 total
    // shapeCount 200 needs lineWidth of 1;
    // ...        150 could be ...       2
    // ...        100 could be ...       3
    // ...         90 could be ...       4
    // ...         70 could be ...       5
    let lineWidth;
    if (shapeCount >= 200) lineWidth = 1;
    if (shapeCount >= 150) lineWidth = rollRange(1, 2);
    if (shapeCount >= 100) lineWidth = rollRange(1, 3);
    if (shapeCount >= 90) lineWidth = rollRange(1, 4);
    if (shapeCount >= 70) lineWidth = rollRange(1, 5);
};
const mandalaDraw = () => {
    // const mandalaType = roll(5);
    const mandalaType = 1;
    switch (mandalaType) {
        case 1:
            specialShape();
            break;
        case 2:
            oneShape();
            break;
        case 3:
            multiShapes();
            break;
        default:
            break;
    }
    // fillBackground();
    // const getNumberOfShapes = 5;
    // const getNumberOfShapes = roll(5);
    // console.log(getNumberOfShapes);
    // for (let currentPass = getNumberOfShapes; currentPass > 0; currentPass--) {
    //     console.log(currentPass, getNumberOfShapes);
    //     getShape(currentPass, getNumberOfShapes);
    // }
};

// ctx.fillStyle = pixel.color;
// ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
// ctx.strokeStyle = `rgb(255, 255, 255)`;
// ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);

export {
    PointNode,
    mandalaDraw,
    getShapeFunction,
    // drawCircle,
    // drawLine,
    // drawSquare,
    findHypotenuse,
    clearDrawingArea,
    // getBlendMode,
};
