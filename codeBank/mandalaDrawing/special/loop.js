import { roll, rollRange, randomColor, lightColor } from '../../utilities.js';

import checkIndividualSwitches from '../functionPool/_checkIndividualSwitches.js';

// import { ctx2, halfWidth, halfHeight } from '../mandalaDrawing.js';

import clearLoop from '../functionPool/draw/clearLoop.js';
import fillLoop from '../functionPool/draw/fillLoop.js';
import strokeLoop from '../functionPool/draw/strokeLoop.js';

const loop = (inputs) => {
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ check clear fill stroke ~~~~~~~~~~~

	inputs.ctx2.save();
	inputs.ctx2.translate(inputs.halfWidth, inputs.halfHeight); // move to center

	inputs.clearSwitch && clearLoop(inputs);

	inputs.fillSwitch && fillLoop(inputs);

	inputs.strokeSwitch && strokeLoop(inputs);

	inputs.ctx2.restore();
	//******MOVE CENTER POINT BACK*********** */
	//******ENDING DRAW*********** */
	//******ENDING DRAW*********** */
	//******ENDING DRAW*********** */
	//******ENDING DRAW*********** */
	return inputs;
};

export default loop;
