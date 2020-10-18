import { roll } from '../utilities.js';

const boxDraw = (boxDrawObj, xCoord = 0, yCoord = 0) => {
	const usingMatrix = boxDrawObj.matrix;

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

				boxDrawObj.ctx.fillStyle = pixel.color;
				boxDrawObj.ctx.fillRect(
					calcX,
					calcY,
					boxDrawObj.pixelWidth,
					boxDrawObj.pixelHeight
				);
				boxDrawObj.ctx.strokeStyle = `rgb(255, 255, 255)`;
				boxDrawObj.ctx.strokeRect(
					calcX,
					calcY,
					boxDrawObj.pixelWidth,
					boxDrawObj.pixelHeight
				);
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
				boxDrawObj.ctx.fillStyle = pixel.color;
				boxDrawObj.ctx.fillRect(
					calcX,
					calcY,
					boxDrawObj.pixelWidth,
					boxDrawObj.pixelHeight
				);
				boxDrawObj.ctx.strokeStyle = `rgb(255, 255, 255)`;
				boxDrawObj.ctx.strokeRect(
					calcX,
					calcY,
					boxDrawObj.pixelWidth,
					boxDrawObj.pixelHeight
				);
				return;
			}
			boxDrawObj.ctx2.fillStyle = pixel.color;
			boxDrawObj.ctx2.fillRect(
				calcX,
				calcY,
				boxDrawObj.pixelWidth,
				boxDrawObj.pixelHeight
			);
			boxDrawObj.ctx2.strokeStyle = `rgb(255, 255, 255)`;
			boxDrawObj.ctx2.strokeRect(
				calcX,
				calcY,
				boxDrawObj.pixelWidth,
				boxDrawObj.pixelHeight
			);
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
class InputNode {
	constructor(ctx, ctx2, matrix, pixelWidth, pixelHeight) {
		this.ctx = ctx;
		this.ctx2 = ctx2;
		this.matrix = matrix;
		this.pixelWidth = pixelWidth;
		this.pixelHeight = pixelHeight;
	}
}

const whatToPlace = (boxDrawObj, xStart, yStart) => {
	const rollColor = roll(3);
	let pixel = new PixelNode(xStart, yStart);
	switch (rollColor) {
		case 1:
			pixel.color = boxDrawObj.backgroundColor;
			break;
		case 2:
			pixel.color = boxDrawObj.primaryColor;
			break;
		case 3:
			pixel.color = boxDrawObj.secondaryColor;
			break;
		default:
			console.log('error, sorry');
	}
	return pixel;
};

const createPixelMap = (boxDrawObj, patternOverride) => {
	const newMatrix = [];
	if (patternOverride === 'noPattern') {
		debugger;
		//this will cycle through y axis on pixel height
		for (
			let y = 0;
			y < boxDrawObj.canvasHeight;
			y += boxDrawObj.pixelHeight
		) {
			let row = [];
			//this will cycle through x axis on pixel width
			for (
				let x = 0;
				x < boxDrawObj.canvasWidth;
				x += boxDrawObj.pixelWidth
			) {
				// console.log(`${x} starting pixel draw,`);
				const pixel = whatToPlace(boxDrawObj, x, y);
				row.push(pixel);
			}
			newMatrix.push(row);
		}
	} else {
		//this will cycle through y axis on pixel height
		for (
			let y = 0;
			y < boxDrawObj.drawSectionHeight;
			y += boxDrawObj.pixelHeight
		) {
			let row = [];
			//this will cycle through x axis on pixel width
			for (
				let x = 0;
				x < boxDrawObj.drawSectionWidth;
				x += boxDrawObj.pixelWidth
			) {
				// console.log(`${x} starting pixel draw,`);
				const pixel = whatToPlace(boxDrawObj, x, y);
				row.push(pixel);
			}
			newMatrix.push(row);
		}
	}
	return newMatrix;
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

const findQuadrantOrder = (boxDrawObj) => {
	// console.log(boxDrawObj);
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
					quadrant.x = boxDrawObj.drawSectionWidth;
					quadrant.y = 0;
					break;
				case 3:
					quadrant.x = boxDrawObj.drawSectionWidth;
					quadrant.y = boxDrawObj.drawSectionHeight;
					break;
				case 4:
					quadrant.x = 0;
					quadrant.y = boxDrawObj.drawSectionHeight;
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
	InputNode,
	createPixelMap,
	combineMatrixTopHalf,
	combineMatrixLeftHalf,
	findQuadrantOrder,
};
