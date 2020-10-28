import { createCanvasDraw } from '../utilities.js';
import runMandalaDraw from './runMandalaDraw.js';
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
	let mandalaInput = {
		...mandalaDrawObj,
		canvasWidth,
		canvasHeight,
		canvasDraw,
		ctx2,
	};
	//get and place stats
	mandalaInput = getInputStats(mandalaInput);
	// debugger;
	mandalaInput = getDrawType(mandalaInput);

	runMandalaDraw(mandalaInput);

	//convert canvas to an image
	//return image
	// return ctx2;
	const dataURL = mandalaInput.canvasDraw.toDataURL('image/png');
	return dataURL;
};

export { MandalaDrawing };
