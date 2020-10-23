import { boxDraw, InputNode, createPixelMap } from '../boxDrawingUtilities.js';

const noPattern = (boxDrawObj) => {
	let inputNode = new InputNode(
		boxDrawObj.ctx,
		boxDrawObj.ctx2,
		boxDrawObj.matrix,
		boxDrawObj.pixelWidth,
		boxDrawObj.pixelHeight
	);

	let getMatrix = createPixelMap(boxDrawObj, 'noPattern');
	inputNode.matrix = getMatrix;

	boxDraw(inputNode);
};

export default noPattern;
