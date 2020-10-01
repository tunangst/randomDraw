import { ctx2, width, height } from '../../mandalaDrawing.js';
const drawBackground = (background) => {
    ctx2.rect(0, 0, width, height);
    ctx2.fillStyle = background;
    ctx2.fill();
};
export default drawBackground;
