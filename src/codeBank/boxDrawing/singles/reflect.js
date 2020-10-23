import { PixelNode } from '../boxDrawingUtilities.js';

const reflectVerticalAxis = (boxDrawObj, xOffset = 0, yOffset = 0) => {
	const useMatrix = boxDrawObj.matrix;
	let xPos = xOffset;
	let yPos = yOffset;
	let tempMatrix = [];
	for (let row = 0; row < useMatrix.length; row++) {
		let rowArr = [];
		for (let column = useMatrix[row].length - 1; column >= 0; column--) {
			const pixel = useMatrix[row][column];
			const newPixel = new PixelNode(xPos, yPos, pixel.color);

			rowArr.push(newPixel);
			xPos += boxDrawObj.pixelWidth;
		}
		tempMatrix.push(rowArr);
		xPos = xOffset;
		yPos += boxDrawObj.pixelHeight;
	}
	yPos = yOffset;

	return tempMatrix;
};

const reflectHorizontalAxis = (boxDrawObj, xOffset = 0, yOffset = 0) => {
	const useMatrix = boxDrawObj.matrix;
	let xPos = xOffset;
	let yPos = yOffset;
	let tempMatrix = [];
	for (let row = useMatrix.length - 1; row >= 0; row--) {
		let rowArr = [];
		for (let column = 0; column < useMatrix[row].length; column++) {
			const pixel = useMatrix[row][column];
			const newPixel = new PixelNode(xPos, yPos, pixel.color);

			rowArr.push(newPixel);
			xPos += boxDrawObj.pixelWidth;
		}
		tempMatrix.push(rowArr);
		xPos = xOffset;
		yPos += boxDrawObj.pixelHeight;
	}
	yPos = yOffset;

	return tempMatrix;
};

export { reflectVerticalAxis, reflectHorizontalAxis };
