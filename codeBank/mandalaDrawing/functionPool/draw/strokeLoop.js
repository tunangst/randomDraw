// import { ctx2 } from '../../mandalaDrawing.js';
import checkIndividualSwitches from '../_checkIndividualSwitches.js';

const strokeLoop = (inputs) => {
	const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];

	for (let strokeShape = 1; strokeShape <= inputs.shapeCount; strokeShape++) {
		inputs = checkIndividualSwitches('stroke', inputs);

		inputs.ctx2.globalCompositeOperation = 'source-over';
		inputs.ctx2.beginPath();
		shapeFunction(inputs);

		inputs.ctx2.lineWidth = inputs.strokeWidth;
		inputs.ctx2.strokeStyle = inputs.strokeColor;
		inputs.ctx2.stroke();
		inputs.ctx2.closePath();
		inputs.ctx2.globalCompositeOperation = 'source-over';
		inputs.ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
	}
};
// ctx2.beginPath();
// drawCircle(shapeSize, pathRadius);
// ctx2.lineWidth = 1;
// ctx2.strokeStyle = randomColorValue;
// ctx2.stroke();
// ctx2.closePath();
// ctx2.rotate((2 * Math.PI) / inputs.shapeCount);

export default strokeLoop;
