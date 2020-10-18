import specials from './specials/specials.js';
import singles from './singles/singles.js';
import doubles from './doubles/doubles.js';
import { roll, clear, randomColor } from '../utilities.js';
import { boxDraw, createPixelMap } from './boxDrawingUtilities.js';

import { createCanvasTemplate, createCanvasDraw } from '../utilities.js';
import getBackgroundStats from '../mandalaDrawing/functionPool/_getBackgroundLoopStats.js';

// let typeOfStyle = 'random';

// let canvasWidth = 500;
// let canvasHeight = 500;
// let boxCount = 10;
// let pixelWidth = canvasWidth / boxCount; //draw section divided by how many pixels across
// let pixelHeight = canvasHeight / boxCount; //draw section divided by how many pixels across
// let drawSectionWidth = canvasWidth / 2;
// let drawSectionHeight = canvasHeight / 2;
// let primaryToggle = 'default';
// let primaryColor = '#000000';
// let secondaryColor = randomColor();
// let secondaryToggle = 'default';
// let backgroundColor = '#ffffff00';
// let backgroundToggle = 'default';

// let canvasTemplate = null;
// let canvasDraw = null;
// // let canvasPreview = document.querySelector('#preview');
// // let canvasDraw = document.querySelector('#draw');
// let ctx = null;
// let ctx2 = null;
// let matrix = [];

const BoxDrawing = (forceDesignObj) => {
	let {
		dimensions: { width, height },
		boxDrawObj,
	} = forceDesignObj;

	const canvasWidth = width || 500;
	const canvasHeight = height || 500;
	const matrix = [];
	const pixelWidth = canvasWidth / boxDrawObj.boxCount || 250;
	const pixelHeight = canvasHeight / boxDrawObj.boxCount || 250;
	const drawSectionWidth = Math.floor(canvasWidth / 2);
	const drawSectionHeight = Math.floor(canvasHeight / 2);

	const [canvasTemplate, ctx] = createCanvasTemplate(
		drawSectionWidth,
		drawSectionHeight
	);
	const [canvasDraw, ctx2] = createCanvasDraw(canvasWidth, canvasHeight);

	if (!boxDrawObj.primaryToggle) boxDrawObj.primaryToggle = 'default';
	if (!boxDrawObj.secondaryToggle) boxDrawObj.secondaryToggle = 'default';
	if (!boxDrawObj.backgroundToggle) boxDrawObj.backgroundToggle = 'default';

	switch (boxDrawObj.primaryToggle) {
		case 'default':
			boxDrawObj.primaryColor = '#000000';
			break;
		case 'random':
			boxDrawObj.primaryColor = randomColor();
			break;
		case 'choose':
			//keep input
			break;
		default:
			console.log('error in primarytoggle');
			primaryColor = '#000000';
			break;
	}

	switch (boxDrawObj.secondaryToggle) {
		case 'default':
		case 'random':
			boxDrawObj.secondaryColor = randomColor(); //new color seed on refresh;
			break;
		case 'choose':
			//keep input
			break;
		default:
			console.log('error in secondaryToggle');
			boxDrawObj.secondaryColor = randomColor();
			break;
	}

	switch (boxDrawObj.backgroundToggle) {
		case 'default':
			boxDrawObj.backgroundColor = '#ffffff00';
			break;
		case 'random':
			boxDrawObj.backgroundColor = randomColor();
			break;
		case 'choose':
			//keep input
			break;
		default:
			console.log('error in backgroundToggle');
			boxDrawObj.backgroundColor = '#ffffff00';
			break;
	}
	//build up input obj
	boxDrawObj = {
		...boxDrawObj,
		canvasWidth,
		canvasHeight,
		matrix,
		pixelWidth,
		pixelHeight,
		drawSectionWidth,
		drawSectionHeight,
		canvasTemplate,
		ctx,
		canvasDraw,
		ctx2,
	};

	if (boxDrawObj.canvasDraw.getContext) {
		//clear previous matrix
		boxDrawObj.matrix = clear(boxDrawObj);
		//create new matrix
		boxDrawObj.matrix = [...createPixelMap(boxDrawObj)];

		boxDraw(boxDrawObj); // draw on ctx not ctx2

		// switch ('random') {
		switch (boxDrawObj.drawStyle || 'random') {
			case 'random':
				let dice = 3;
				// let dice = roll(3);
				switch (dice) {
					case 1:
						specials(boxDrawObj);
						break;
					case 2:
						singles(boxDrawObj);
						break;
					case 3:
						doubles(boxDrawObj);
						break;
					default:
						console.log('error in layout variable no dice');
						break;
				}
				break;
			default:
				specials(boxDrawObj);
				console.log('not random or error in boxdrawing switch');
				break;
		}
	} else {
		alert('You need Safari or Firefox 1.5+ to see this demo.');
	}
};

export { BoxDrawing };
