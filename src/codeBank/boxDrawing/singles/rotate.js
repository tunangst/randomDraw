import { PixelNode } from '../boxDrawingUtilities.js';
// import { pixelWidth, pixelHeight } from '../BoxDrawing.js';

const rotateClockwise = (boxDrawObj, xOffset = 0, yOffset = 0) => {
	const useMatrix = boxDrawObj.matrix;
	let xPos = xOffset;
	let yPos = yOffset;
	let tempMatrix = [];
	let rotatedMatrix = [];

	for (let column = 0; column < useMatrix[0].length; column++) {
		let rowArr = [];

		for (let row = useMatrix.length - 1; row >= 0; row--) {
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
	rotatedMatrix = [...tempMatrix];

	return rotatedMatrix;
};

const rotateCounterClockwise = (boxDrawObj, xOffset = 0, yOffset = 0) => {
	const useMatrix = boxDrawObj.matrix;
	//loop columns reverse
	//loop over rows in order
	let xPos = xOffset;
	let yPos = yOffset;
	let tempMatrix = [];
	let rotatedMatrix = [];

	for (let column = useMatrix[0].length - 1; column >= 0; column--) {
		let rowArr = [];

		for (let row = 0; row < useMatrix.length; row++) {
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
	rotatedMatrix = [...tempMatrix];

	return rotatedMatrix;
};

export { rotateClockwise, rotateCounterClockwise };
