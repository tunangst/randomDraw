import { ctx2 } from '../../MandalaDrawing.js';
const drawCircle = (shapeSize, pathRadius) => {
    ctx2.arc(0, pathRadius, shapeSize, 0, 2 * Math.PI, false);
};

export default drawCircle;
