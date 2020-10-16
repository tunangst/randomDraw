import { ctx2, width, height } from '../../mandalaDrawing.js';

const clearDrawingArea = () => {
    ctx2.clearRect(0, 0, width, height);
};

export default clearDrawingArea;
