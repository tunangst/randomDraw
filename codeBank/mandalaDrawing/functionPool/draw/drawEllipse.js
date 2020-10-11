import { ctx2 } from '../../MandalaDrawing.js';

const circle = (shapeSize, pathRadius) => {
    ctx2.arc(0, pathRadius, shapeSize, 0, 2 * Math.PI, false);
};

const oval = (shapeSize, pathRadius) => {
    // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
    ctx2.ellipse(0, pathRadius, shapeSize / 5, shapeSize, 0, 0, 2 * Math.PI);
};

export { circle, oval };
