import { createCanvasDraw } from '../utilities.js';
import initMandalaDraw from './initMandalaDraw.js';
import getInputStats from './functionPool/_getInputStats.js';
import getDrawType from './functionPool/_getDrawType.js';

const MandalaDrawing = (forceDesignObj) => {
	let {
		dimensions: { width, height },
		mandalaDrawObj,
	} = forceDesignObj;

	const canvasWidth = width || 500;
	const canvasHeight = height || 500;
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
