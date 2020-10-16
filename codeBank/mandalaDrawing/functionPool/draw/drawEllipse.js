// import { ctx2 } from '../../MandalaDrawing.js';

const circle = (inputs) => {
	inputs.ctx2.arc(
		0,
		inputs.pathRadius,
		inputs.shapeSize,
		0,
		2 * Math.PI,
		false
	);
};

const oval = (inputs) => {
	// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
	inputs.ctx2.ellipse(
		0,
		inputs.pathRadius,
		inputs.shapeSize / 5,
		inputs.shapeSize,
		0,
		0,
		2 * Math.PI
	);
};

export { circle, oval };
