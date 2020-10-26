import { rollRange } from '../../utilities.js';
import drawBackground from './draw/drawBackground.js';
import getColorType from './_getColorType.js';

const getBackgroundStats = (inputs) => {
	inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
	inputs.pathRadius = rollRange(inputs.maxPathRadius, inputs.maxFullPath);
	inputs.shapeSize = inputs.pathRadius;
	// //****************INSIDE FIRST ROLL****************
	// //****************INSIDE FIRST ROLL****************
	// console.log(inputs);
	// force white background
	if (inputs.drawType === 'outline') {
		drawBackground(inputs);
	}
	if (inputs.customBackgroundSwitch) {
		inputs.fillColor = inputs.customBackgroundColor;
		inputs.strokeColor = inputs.customStrokeColor;
	} else {
		inputs.fillColor = getColorType(inputs);
		inputs.strokeColor = getColorType(inputs);
	}

	inputs.fillSwitch = true;
	inputs.backgroundLoopSwitch = false; // switch off
	return inputs;
};
export default getBackgroundStats;
