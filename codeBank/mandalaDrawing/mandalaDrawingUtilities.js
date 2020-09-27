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

const getShape = (label) => {
    const useSize = width > height ? width : height;
    const useHalfSize = useSize / 2;

    const maxHalfPath = findHypotenuse(halfWidth, halfHeight);
    const maxFullPath = findHypotenuse(width, height);

    let shapeCount;
    let shapeSize;
    let pathRadius;

    if (label === 'background') {
        pathRadius = rollRange(maxHalfPath, maxFullPath); // between halfWidth and width
        shapeCount = rollRange(4, 200); // 4-200 what looks good
        shapeSize = pathRadius;
    } else {
        shapeCount = 20;
        const thresh50 = useHalfSize / 2;
        const thresh25 = thresh50 / 2;
        // shapeSize = 100;
        shapeSize = rollRange(20, thresh25);
        const halfShape = shapeSize / 2;
        const threshRadius50 = thresh50 - halfShape;
        const threshRadius25 = thresh25 - halfShape;
        console.log(threshRadius25, halfHeight);

        pathRadius = rollRange(0, threshRadius25); // max is width or height min is 10?

        let improperSpacing = shapeSize - pathRadius;
        console.log(improperSpacing);
        while (improperSpacing >= -5 && improperSpacing <= 5) {
            console.log(
                'improperspacing while loop, changing pathRadius variable'
            );
            pathRadius = rollRange(0, threshRadius25);
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
    // const backgroundShapeCount = rollRange(4, 200); // 4-200 || 40
    // circle
    // min = findHypotenuse(halfWidth, halfHeight)
    // max = (width, height)

    // background needs same shapeSize as pathRadius
    // background needs minimum

    // const shapeCount = backgroundShapeCount;
    ctx2.translate(halfWidth, halfHeight); // move to center
    // #################################### idea ##############
    // move this to edges for one of the effects being on the sides off center
    // ctx2.translate(halfWidth, halfHeight)
    // #################################### idea ##############

    // loop over clearing the path for below
    for (let i = 1; i <= shapeCount; i++) {
        const inputs = new inputsNode(pathRadius, shapeSize, shapeCount);
        clearDrawingArea(drawCircle, inputs);
    }
    // loop over for drawing the next path
    for (let i = 1; i <= shapeCount; i++) {
        ctx2.beginPath();
        drawCircle(shapeSize, pathRadius);
        ctx2.lineWidth = 1;
        ctx2.strokeStyle = 'orange';
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

const mandalaDraw = () => {
    // shape size around 250 total
    // shapeCount 200 needs lineWidth of 1;
    // ...        150 could be ...       2
    // ...        100 could be ...       3
    // ...         90 could be ...       4
    // ...         70 could be ...       5

    // const getNumberOfShapes = roll(5);
    const getNumberOfShapes = 2;
    console.log(getNumberOfShapes);
    for (let i = 0; i < getNumberOfShapes; i++) {
        if (i !== 0) {
            getShape();
        } else {
            getShape('background');
        }
    }
    // ctx2.translate(halfWidth, halfHeight);
    const shapeSize = 40;
    const shapeCount = 50;
    const pathRadius = 200;
};

// ctx.fillStyle = pixel.color;
// ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
// ctx.strokeStyle = `rgb(255, 255, 255)`;
// ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);

export { PointNode, mandalaDraw };
