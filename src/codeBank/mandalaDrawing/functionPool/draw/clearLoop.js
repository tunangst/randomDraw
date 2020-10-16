// import { ctx2 } from '../../mandalaDrawing.js';
import checkIndividualSwitches from '../_checkIndividualSwitches.js';
import { slant, starburst } from './drawLine.js';

const clearLoop = (inputs) => {
	const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];
	if (shapeFunction === slant || shapeFunction === starburst) return;

	for (let clearShape = 1; clearShape <= inputs.shapeCount; clearShape++) {
		inputs = checkIndividualSwitches('clear', inputs);

		inputs.ctx2.globalCompositeOperation = 'destination-out';
		inputs.ctx2.beginPath();
		shapeFunction(inputs);
		inputs.ctx2.fillStyle = inputs.color;
		inputs.ctx2.fill();
		inputs.ctx2.closePath();
		inputs.ctx2.globalCompositeOperation = 'source-over';
		inputs.ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
	}
};

export default clearLoop;
