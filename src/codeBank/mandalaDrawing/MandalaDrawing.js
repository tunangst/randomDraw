import { createCanvasDraw } from '../utilities.js';
import initMandalaDraw from './initMandalaDraw.js';
import getInputStats from './functionPool/_getInputStats.js';
// import { PointNode, mandalaDraw } from './mandalaDrawingUtilities.js';
//looks like ctx.moveTo(x,y) is very powerful here

// let typeOfStyle = 'random';

// let canvasPreview = document.querySelector('#preview');
// let canvasDraw = document.querySelector('#draw');
// let ctx = canvasPreview.getContext('2d');
// let ctx2 = canvasDraw.getContext('2d');

let canvasWidth = 500;
let canvasHeight = 500;
let canvasDraw = null;
let ctx2 = null;

// console.log(inputStats);

const MandalaDrawing = (forceDesignObj) => {
	// console.log(forceDesignObj);
	const {
		dimensions: { width, height },
		mandalaDrawObj,
	} = forceDesignObj;
	if (width) {
		canvasWidth = width;
	}
	if (height) {
		canvasHeight = height;
	}
	// debugger;

	// console.log('MandalaDrawing');
	//create canvas
	[canvasDraw, ctx2] = createCanvasDraw(canvasWidth, canvasHeight);

	let inputStats = getInputStats(canvasWidth, canvasHeight, canvasDraw, ctx2);
	initMandalaDraw(inputStats);
};

export { MandalaDrawing };
