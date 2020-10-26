import { rollRange, lightColor, coinFlip } from '../../utilities.js';
import checkLoopSwitches from './_checkLoopSwitches.js';

import checkShapeSpacing from './_checkShapeSpacing.js';

const getFollowingLoopStats = (inputs) => {
	//****************INSIDE OTHER ROLLS****************
	//          things changing per loop
	//****************INSIDE OTHER ROLLS****************
	//default
	let definedShapeRange = inputs.maxShapeSize * inputs.percent;
	//if user selected a min shape size
	if (inputs.minShapeSize) {
		definedShapeRange = rollRange(inputs.minShapeSize, inputs.maxShapeSize);
	}

	inputs.pathRadius = rollRange(inputs.minPathRadius, inputs.maxPathRadius);
	inputs.shapeSize = definedShapeRange;
	inputs.shapeCount = rollRange(inputs.minShapeCount, inputs.maxShapeCount);
	inputs = checkShapeSpacing(inputs);

	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
	inputs = checkLoopSwitches(inputs);
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~
	if (inputs.customBackgroundSwitch) {
		inputs.fillColor = inputs.customBackgroundColor;
		inputs.strokeColor = inputs.customStrokeColor;
	}

	return inputs;
};

export default getFollowingLoopStats;
