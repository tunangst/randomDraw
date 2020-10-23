// import { ctx2 } from '../../mandalaDrawing.js';
import checkIndividualSwitches from '../_checkIndividualSwitches.js';
import { slant, starburst } from './drawLine.js';

const fillLoop = (inputs) => {
	const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];
	if (shapeFunction === slant || shapeFunction === starburst) return;
	for (let fillShape = 1; fillShape <= inputs.shapeCount; fillShape++) {
		inputs = checkIndividualSwitches('fill', inputs);

		inputs.ctx2.globalCompositeOperation = inputs.blendMode; // great for clear first
		// ctx2.globalCompositeOperation = 'multiply'; // great for clear first
		// ctx2.globalCompositeOperation = 'screen'; // also good option for both
		// ctx2.globalCompositeOperation = 'difference'; // cool chaos option both ways
		// ctx2.globalCompositeOperation = inputs.blendMode || 'source-over';
		// ctx2.globalCompositeOperation = 'source-over';
		inputs.ctx2.beginPath();
		shapeFunction(inputs);
		inputs.ctx2.fillStyle = inputs.fillColor;
		inputs.ctx2.fill();
		inputs.ctx2.closePath();
		inputs.ctx2.globalCompositeOperation = 'source-over';
		inputs.ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
	}
};

export default fillLoop;
