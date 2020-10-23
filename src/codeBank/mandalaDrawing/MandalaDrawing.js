import { createCanvasDraw } from '../utilities.js';
import initMandalaDraw from './initMandalaDraw.js';
import getInputStats from './functionPool/_getInputStats.js';
import getDrawType from './functionPool/_getDrawType.js';

const MandalaDrawing = (forceDesignObj) => {
	let { dimensions, mandalaDrawObj } = forceDesignObj;
	let width, height;
	if (dimensions) {
		width = dimensions.width;
		height = dimensions.height;
	}

	const canvasWidth = width ? width : 500;
	const canvasHeight = height ? height : 500;
	const [canvasDraw, ctx2] = createCanvasDraw(canvasWidth, canvasHeight);

	mandalaDrawObj = {
		...mandalaDrawObj,
		canvasWidth,
		canvasHeight,
		canvasDraw,
		ctx2,
	};
	//get and place stats
	let inputStats = getInputStats(mandalaDrawObj);
	//build arr
	inputStats = getDrawType(inputStats);

	initMandalaDraw(inputStats);
};

export { MandalaDrawing };
