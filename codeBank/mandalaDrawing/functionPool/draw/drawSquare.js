import { ctx2 } from '../../MandalaDrawing.js';

const drawSquare = (shapeSize, pathRadius) => {
    ctx2.rect(pathRadius / 2, pathRadius, -shapeSize, -shapeSize);
    // ctx2.rect(pathRadius / 2, pathRadius, -shapeSize, -shapeSize + 10);
    // ctx2.rect(two / 2, two, -two, -two);
};

export default drawSquare;
