import { PixelNode } from '../boxDrawingUtilities.js';
import { pixelWidth, pixelHeight } from '../BoxDrawing.js';

const clone = (usingMatrix, xOffset = 0, yOffset = 0) => {
	let xPos = xOffset;
	let yPos = yOffset;
	let tempMatrix = [];
	for (let matrixRow = 0; matrixRow < usingMatrix.length; matrixRow++) {
		let rowArr = [];
		for (
			let matrixColumn = 0;
			matrixColumn < usingMatrix[matrixRow].length;
			matrixColumn++
		) {
			const pixel = usingMatrix[matrixRow][matrixColumn];
			const newPixel = new PixelNode(xPos, yPos, pixel.color);

			rowArr.push(newPixel);
			xPos += pixelWidth;
		}
		tempMatrix.push(rowArr);
		xPos = xOffset;
		yPos += pixelHeight;
	}
	yPos = yOffset;

	return tempMatrix;
};

export default clone;