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
import oneShape from './oneShape/oneShape.js';

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

const getShapeFunction = (rollShape) => {
    switch (rollShape) {
        case 1:
            shapeFunction = drawCircle;
            break;
        default:
            console.log('error in oneShape roll shape variable');
            break;
    }
};

const randomStartingPoint = () => {
    const dice = roll(halfWidth);
    return new PointNode(dice, halfWidth);
};

const findHypotenuse = (width, height) => {
    const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    return Math.round(hypotenuse / 2);
};

const drawLine = () => {
    ctx2.moveTo(0, 0);
    ctx2.lineTo(0, 200);
    ctx2.lineTo(100, 0);
};
const drawCircle = (shapeSize, pathRadius) => {
    ctx2.arc(0, pathRadius, shapeSize, 0, 2 * Math.PI, false);
};
const drawRect = (shapeSize) => {
    ctx2.rect(10, 10, shapeSize, shapeSize);
};

const clearDrawingArea = (
    shapeFunction,
    { pathRadius, shapeSize, shapeCount }
) => {
    //nextShapeDraw is the function
    ctx2.beginPath();
    shapeFunction(shapeSize, pathRadius);
    ctx2.globalCompositeOperation = 'destination-out';
    ctx2.fill();
    ctx2.closePath();
    ctx2.rotate((2 * Math.PI) / shapeCount);
    ctx2.globalCompositeOperation = 'source-over';
};

const getShape = (currentPass, totalPasses) => {
    const percent = currentPass / totalPasses;
    const useSize = width > height ? width : height;
    const useHalfSize = useSize / 2;

    const sizeBasedOnIndex = Math.ceil(useSize * percent);
    const halfSizeBasedOnIndex = Math.ceil(useHalfSize * percent);
    const countBasedOnIndex = Math.ceil((100 * percent) / 2);

    const maxHalfPath = findHypotenuse(halfWidth, halfHeight);
    const maxFullPath = findHypotenuse(width, height);

    const randomColorValue = randomColor();
    let shapeCount;
    let shapeSize;
    let pathRadius;

    if (currentPass === totalPasses) {
        pathRadius = rollRange(maxHalfPath, maxFullPath); // between halfWidth and width
        shapeCount = rollRange(4, 200); // 4-200 what looks good
        shapeSize = pathRadius;
    } else {
        shapeCount = rollRange(20, halfSizeBasedOnIndex);
        // console.log(`size based on index ${sizeBasedOnIndex}`);
        // console.log(`half size based on index ${halfSizeBasedOnIndex}`);
        // console.log(`count based on index ${countBasedOnIndex}`);

        shapeSize = rollRange(20, halfSizeBasedOnIndex);
        pathRadius = halfSizeBasedOnIndex; // max is width or height min is 10?

        let improperSpacing = shapeSize - pathRadius;
        while (improperSpacing >= -5 && improperSpacing <= 5) {
            console.log(
                'improperspacing while loop, changing pathRadius variable'
            );
            shapeSize = rollRange(20, halfSizeBasedOnIndex);
            // pathRadius = rollRange(0, threshRadius25);
            improperSpacing = shapeSize - pathRadius;
        }
        // pathRadius = 35; // max is width or height min is 10?
        // pathRadius = maxFullPath; // max is width or height
        // shapeSize = rollRange(10, useHalfSize);
        //pathradius - shapesize === 0 gives filled in center
        //pathradius = 0 gives hole in center the size of size
        //shapeSize - pathRadius = ...
        // 40 - 45 = -5 is okay
        // range (-5, 5) is not okay
        // 40 - 35 = 5 is okay
    }
    const inputs = new inputsNode(pathRadius, shapeSize, shapeCount);

    ctx2.translate(halfWidth, halfHeight); // move to center

    // loop over clearing the path for below
    for (let i = 1; i <= shapeCount; i++) {
        // clearDrawingArea(drawCircle, inputs);
    }
    // loop over for drawing the next path
    for (let i = 1; i <= shapeCount; i++) {
        ctx2.beginPath();
        drawCircle(shapeSize, pathRadius);
        ctx2.lineWidth = 1;
        ctx2.strokeStyle = randomColorValue;
        ctx2.stroke();
        ctx2.closePath();
        ctx2.rotate((2 * Math.PI) / shapeCount);
    }
    ctx2.translate(-halfWidth, -halfHeight); // move back to (0,0)

    // let shapeCount;
    // let shapeSize;
    // let pathRadius;
    // const middleShapeCount = 40; // 4-200
    // const middleShapeSize = 250;
    // const middlePathRadius = 250;
    // ========================================= cool design ideas =========
};

const fillBackground = () => {
    ctx2.beginPath();
    ctx2.rect(0, 0, width, height);
    ctx2.fillStyle = 'black';
    ctx2.fill();
    ctx2.closePath();
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
            oneShape();
            break;
        case 2:
            multiShapes();
            break;
        default:
            break;
    }
    // fillBackground();
    const getNumberOfShapes = 5;
    // const getNumberOfShapes = roll(5);
    console.log(getNumberOfShapes);
    for (let currentPass = getNumberOfShapes; currentPass > 0; currentPass--) {
        console.log(currentPass, getNumberOfShapes);
        getShape(currentPass, getNumberOfShapes);
    }
};

// ctx.fillStyle = pixel.color;
// ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
// ctx.strokeStyle = `rgb(255, 255, 255)`;
// ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);

export { PointNode, mandalaDraw, getShapeFunction, drawCircle };
