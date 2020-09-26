import { roll, randomColor } from '../utilities.js';
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

const randomStartingPoint = () => {
    const dice = roll(halfWidth);
    return new PointNode(dice, halfWidth);
};

const getPoints = (startX, startY, width, height) => {
    const widthHalf = width / 2;
    const heightHalf = height / 2;
    const axisSeparator = heightHalf - startY; // distance from start point to axis
    const edgeSeparator = startX; // distance from start point to edge of canvas

    const startA = new PointNode(startX, startY);
    const endA = new PointNode(widthHalf - axisSeparator, edgeSeparator);

    const startB = new PointNode(widthHalf + axisSeparator, edgeSeparator);
    const endB = new PointNode(width - edgeSeparator, startA.y);

    const startC = new PointNode(endA.x, height - edgeSeparator);
    const endC = new PointNode(startA.x, heightHalf + axisSeparator);

    const startD = new PointNode(endB.x, endC.y);
    const endD = new PointNode(startB.x, startC.y);

    return [
        { start: startA, end: endA },
        { start: startB, end: endB },
        { start: startC, end: endC },
        { start: startD, end: endD },
    ];
};

function getQuadraticBezierXYatT(startPt, controlPt, endPt, T) {
    var x =
        Math.pow(1 - T, 2) * startPt.x +
        2 * (1 - T) * T * controlPt.x +
        Math.pow(T, 2) * endPt.x;
    var y =
        Math.pow(1 - T, 2) * startPt.y +
        2 * (1 - T) * T * controlPt.y +
        Math.pow(T, 2) * endPt.y;
    return new PointNode(x, y);
    // return ({
    //     x: x,
    //     y: y
    // });
}
//this loops over the path, chooses a point based on the increment
// (var t = 0; t < % of the curve; t += % spacing)
// for (var t = 0; t < 101; t += 5) {
//     var point = getQuadraticBezierXYatT(startPoint, controlPoint, endPoint, t / 100);
//     ctx.beginPath();
//     ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
//     ctx.closePath();
//     ctx.fillStyle = randomColor();
//     ctx.fill();
// }

const drawLine = () => {
    ctx2.moveTo(0, 0);
    ctx2.lineTo(0, 200);
    ctx2.lineTo(100, 0);
};
const drawCircle = (pathRadius, shapeSize) => {
    // pathRadius = 100, shapeSize = 100 looks cool
    // 50, 50
    ctx2.arc(0, pathRadius, shapeSize, 0, 2 * Math.PI, false);
};
const drawRect = (shapeSize) => {
    ctx2.rect(10, 10, shapeSize, shapeSize);
};

const mandalaDraw = () => {
    const shapeCount = 10;
    const pathRadius = 150;
    const shapeSize = 25;

    ctx2.translate(halfWidth, halfHeight);

    for (let i = 1; i <= shapeCount; i++) {
        // ctx2.fillStyle = randomColor();
        ctx2.beginPath();
        // getShape();
        // drawCircle(pathRadius, shapeSize);
        // drawRect(shapeSize);
        // drawLine();
        drawCircle(50, 50);
        ctx2.closePath();

        ctx2.rotate((2 * Math.PI) / shapeCount);

        ctx2.lineWidth = 5;
        ctx2.strokeStyle = 'orange';
        ctx2.stroke();
    }
};

// ctx.fillStyle = pixel.color;
// ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
// ctx.strokeStyle = `rgb(255, 255, 255)`;
// ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);

export { PointNode, getPoints, mandalaDraw };
