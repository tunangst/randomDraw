import { ctx2 } from '../../MandalaDrawing.js';

const drawLine = () => {
    ctx2.moveTo(0, 0);
    ctx2.lineTo(0, 200);
    ctx2.lineTo(100, 0);
};

export default drawLine;
