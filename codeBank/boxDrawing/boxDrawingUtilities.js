import { roll } from '../utilities.js';
import {
	ctx,
	ctx2,
	pixelWidth,
	pixelHeight,
	drawSectionWidth,
	drawSectionHeight,
	primaryColor,
	secondaryColor,
	backgroundColor,
} from './BoxDrawing.js';

const boxDraw = (usingMatrix, xCoord = 0, yCoord = 0) => {
	if (xCoord === null && yCoord === null) {
		for (let matrixRow = 0; matrixRow < usingMatrix.length; matrixRow++) {
			for (
				let matrixColumn = 0;
				matrixColumn < usingMatrix[matrixRow].length;
				matrixColumn++
			) {
				const pixel = usingMatrix[matrixRow][matrixColumn];
				const calcX = pixel.xStart + xCoord;
				const calcY = pixel.yStart + yCoord;

				ctx.fillStyle = pixel.color;
				ctx.fillRect(calcX, calcY, pixelWidth, pixelHeight);
				ctx.strokeStyle = `rgb(255, 255, 255)`;
				ctx.strokeRect(calcX, calcY, pixelWidth, pixelHeight);
			}
		}
		return;
	}
	for (let matrixRow = 0; matrixRow < usingMatrix.length; matrixRow++) {
		for (
			let matrixColumn = 0;
			matrixColumn < usingMatrix[matrixRow].length;
			matrixColumn++
		) {
			const pixel = usingMatrix[matrixRow][matrixColumn];
			const calcX = pixel.xStart + xCoord;
			const calcY = pixel.yStart + yCoord;

			if (xCoord === null && yCoord === null) {
				ctx.fillStyle = pixel.color;
				ctx.fillRect(calcX, calcY, pixelWidth, pixelHeight);
				ctx.strokeStyle = `rgb(255, 255, 255)`;
				ctx.strokeRect(calcX, calcY, pixelWidth, pixelHeight);
				return;
			}

			ctx2.fillStyle = pixel.color;
			ctx2.fillRect(calcX, calcY, pixelWidth, pixelHeight);
			ctx2.strokeStyle = `rgb(255, 255, 255)`;
			ctx2.strokeRect(calcX, calcY, pixelWidth, pixelHeight);
		}
	}
	return usingMatrix;
};
class PixelNode {
	constructor(xStart, yStart, color = '#020') {
		this.xStart = xStart;
		this.yStart = yStart;
		this.color = color;
	}
}
const whatToPlace = (xStart, yStart) => {
	const rollColor = roll(3);
	let pixel = new PixelNode(xStart, yStart);
	switch (rollColor) {
		case 1:
			pixel.color = backgroundColor;
			break;
		case 2:
			pixel.color = primaryColor;
			break;
		case 3:
			pixel.color = secondaryColor;
			break;
		default:
			console.log('error, sorry');
	}
	return pixel;
};

const createPixelMap = (matrix) => {
	//this will cycle through y axis on pixel height
	for (let y = 0; y < drawSectionHeight; y += pixelHeight) {
		let row = [];
		//this will cycle through x axis on pixel width
		for (let x = 0; x < drawSectionWidth; x += pixelWidth) {
			// console.log(`${x} starting pixel draw,`);
			const pixel = whatToPlace(x, y);
			row.push(pixel);
		}
		matrix.push(row);
	}
};

const combineMatrixTopHalf = (matrix1, matrix2) => {
	let combinedMatrix = [];
	for (let i = 0; i < matrix1.length; i++) {
		const combine = [...matrix1[i], ...matrix2[i]];
		combinedMatrix.push(combine);
	}
	return combinedMatrix;
};
const combineMatrixLeftHalf = (matrix1, matrix2) => {
	return [...matrix1, ...matrix2];
};

const findQuadrantOrder = () => {
	let order = [];
	let quadrantArray = [];

	while (order.length < 4) {
		let test = roll(4);
		if (!order.includes(test)) {
			let quadrant = {};
			switch (test) {
				case 1:
					quadrant.x = 0;
					quadrant.y = 0;
					break;
				case 2:
					quadrant.x = drawSectionWidth;
					quadrant.y = 0;
					break;
				case 3:
					quadrant.x = drawSectionWidth;
					quadrant.y = drawSectionHeight;
					break;
				case 4:
					quadrant.x = 0;
					quadrant.y = drawSectionHeight;
					break;
				default:
					console.log('error in findQuadrantOrder');
					break;
			}
			order.push(test);
			quadrantArray.push(quadrant);
		}
	}
	return quadrantArray;
};

export {
	boxDraw,
	PixelNode,
	createPixelMap,
	combineMatrixTopHalf,
	combineMatrixLeftHalf,
	findQuadrantOrder,
};
