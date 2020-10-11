import { ctx2 } from '../../MandalaDrawing.js';

const square = (shapeSize, pathRadius) => {
    // ctx.rect(x, y, width, height);
    ctx2.rect(shapeSize / 2, pathRadius, -shapeSize, -shapeSize);
};
const diamond = (shapeSize, pathRadius) => {
    ctx2.save();
    ctx2.rotate(Math.PI / 4);
    ctx2.rect(pathRadius, pathRadius, -shapeSize, -shapeSize);
    ctx2.restore();
};

export { square, diamond };
