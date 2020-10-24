import specials from './specials/specials.js';
import singles from './singles/singles.js';
import doubles from './doubles/doubles.js';
import { roll, clear, randomColor } from '../utilities.js';
import { boxDraw, createPixelMap } from './boxDrawingUtilities.js';

import { createCanvasTemplate, createCanvasDraw } from '../utilities.js';

const BoxDrawing = (forceDesignObj) => {
	// if(forceDesignObj)
	let { dimensions, boxDrawObj } = forceDesignObj;
	let width, height;
	if (dimensions) {
		width = dimensions.width;
		height = dimensions.height;
	}

	const canvasWidth = width ? width : 500;
	const canvasHeight = height ? height : 500;
	const matrix = [];
	const boxCount = boxDrawObj.boxCount || 10;
	const pixelWidth = canvasWidth / boxCount || 250;
	const pixelHeight = canvasHeight / boxCount || 250;
	const drawSectionWidth = Math.floor(canvasWidth / 2);
	const drawSectionHeight = Math.floor(canvasHeight / 2);

	const primaryToggle = boxDrawObj.primaryToggle || 'default';
	const secondaryToggle = boxDrawObj.secondaryToggle || 'default';
	const backgroundToggle = boxDrawObj.backgroundToggle || 'default';

	const [canvasTemplate, ctx] = createCanvasTemplate(
		drawSectionWidth,
		drawSectionHeight
	);
	const [canvasDraw, ctx2] = createCanvasDraw(canvasWidth, canvasHeight);

	switch (primaryToggle) {
		case 'default':
			boxDrawObj.primaryColor = '#000000';
			break;
		case 'random':
			boxDrawObj.primaryColor = randomColor();
			break;
		case 'choose':
			let inputColor;
			if (!boxDrawObj.primaryColor) {
				inputColor = '#000000';
			} else {
				inputColor = boxDrawObj.primaryColor;
			}
			boxDrawObj.primaryColor = inputColor;
			break;
		default:
			console.log('error in primarytoggle');
			boxDrawObj.primaryColor = '#000000';
			break;
	}

	switch (secondaryToggle) {
		case 'default':
		case 'random':
			boxDrawObj.secondaryColor = randomColor(); //new color seed on refresh;
			break;
		case 'choose':
			let inputColor;
			if (!boxDrawObj.secondaryColor) {
				inputColor = '#8C00FF';
			} else {
				inputColor = boxDrawObj.secondaryColor;
			}
			boxDrawObj.secondaryColor = inputColor;
			break;
		default:
			console.log('error in secondaryToggle');
			boxDrawObj.secondaryColor = randomColor();
			break;
	}

	switch (backgroundToggle) {
		case 'default':
			boxDrawObj.backgroundColor = '#ffffff00';
			break;
		case 'random':
			boxDrawObj.backgroundColor = randomColor();
			break;
		case 'choose':
			let inputColor;
			if (!boxDrawObj.backgroundColor) {
				inputColor = '#ffffff00';
			} else {
				inputColor = boxDrawObj.backgroundColor;
			}
			boxDrawObj.backgroundColor = inputColor;
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
		boxCount,
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

		switch (boxDrawObj.drawStyle || 'random') {
			case 'random':
				let dice = roll(3);
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
				break;
		}
	} else {
		alert('You need Safari or Firefox 1.5+ to see this demo.');
	}
	//convert canvas to an image
	//return image
	// return ctx2;

	const dataURL = boxDrawObj.canvasDraw.toDataURL('image/png');
	return dataURL;
};

export { BoxDrawing };
