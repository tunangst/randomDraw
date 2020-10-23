// import { ctx2 } from '../../MandalaDrawing.js';

const square = (inputs) => {
	// ctx.rect(x, y, width, height);
	inputs.ctx2.rect(
		inputs.shapeSize / 2,
		inputs.pathRadius,
		-inputs.shapeSize,
		-inputs.shapeSize
	);
};
const diamond = (inputs) => {
	inputs.ctx2.save();
	inputs.ctx2.rotate(Math.PI / 4);
	inputs.ctx2.rect(
		inputs.pathRadius,
		inputs.pathRadius,
		-inputs.shapeSize,
		-inputs.shapeSize
	);
	inputs.ctx2.restore();
};

export { square, diamond };
