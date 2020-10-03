import { ctx2 } from '../../MandalaDrawing.js';

const drawDiamond = (shapeSize, pathRadius) => {
    ctx2.save();
    ctx2.rotate(Math.PI / 4);
    ctx2.rect(pathRadius, pathRadius, -shapeSize, -shapeSize);
    ctx2.restore();
};

export default drawDiamond;
