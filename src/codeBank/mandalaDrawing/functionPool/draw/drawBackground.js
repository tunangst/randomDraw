// import { ctx2, width, height } from '../../mandalaDrawing.js';
const drawBackground = (inputs) => {
	inputs.ctx2.rect(0, 0, inputs.width, inputs.height);
	inputs.ctx2.fillStyle = '#fff';
	inputs.ctx2.fill();
};
export default drawBackground;
