// import { ctx2 } from '../../MandalaDrawing.js';
// import { roll } from '../../../utilities.js';

const starburst = (inputs) => {
	//starburst
	inputs.ctx2.save();
	inputs.ctx2.moveTo(inputs.pathRadius - inputs.shapeSize, 0);
	inputs.ctx2.lineTo(inputs.shapeSize, 0);
	inputs.ctx2.restore();
	//starburst
};
const slant = (inputs) => {
	//slant
	inputs.ctx2.save();
	inputs.ctx2.moveTo(
		inputs.pathRadius - inputs.shapeSize,
		inputs.pathRadius - inputs.shapeSize
	);
	inputs.ctx2.lineTo(-inputs.shapeSize / 2, inputs.shapeSize / 2);
	inputs.ctx2.restore();
	// ctx2.stroke();
	//slant
};

export { starburst, slant };
