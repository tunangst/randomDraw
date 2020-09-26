import { ctx, ctx2 } from './MandalaDrawing.js';

class PointNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const getPoints = (x, y, width, height) => {
    const pointA = new PointNode(x, y);
    const pointB = new PointNode(width - x, y);
    const pointC = new PointNode(x, height - y);
    const pointD = new PointNode(width - x, height - y);
    return [pointA, pointB, pointC, pointD];
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

const mandalaDraw = () => {
    const testPointA = 83.3323;
    const testPoints = getPoints(testPointA, testPointA * 2, 500, 500);
    testPoints.forEach((point) => {
        // ctx2.moveTo(point.x, point.y);
        console.log(point);
        ctx2.beginPath();
        // ctx2.moveTo(xStart, yStart);
        // ctx2.quadraticCurveTo(besierPointX, besierPointY, endPointX, endPointY);
        // ctx2.quadraticCurveTo(Astart.x, Aend.y, Aend.x, Aend.y);
        ctx2.strokeStyle = 'orange';
        ctx2.lineWidth = '5';
        ctx2.arc(point.x, point.y, 50, 0, 2 * Math.PI, false);
        // ctx2.arc(50, 50, 50, 0, 2 * Math.PI, false);
        // ctx2.arc(xCenter, yCenter, radius, starting angle in radians, ending angle in radians, counterclockwise = true);
        ctx2.stroke();
    });
};

// ctx.fillStyle = pixel.color;
// ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
// ctx.strokeStyle = `rgb(255, 255, 255)`;
// ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);

export { PointNode, getPoints, mandalaDraw };
