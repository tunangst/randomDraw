// import { roll, randomColor, lightColor } from '../../utilities.js';
// import { halfWidth, halfHeight, height, width } from '../mandalaDrawing.js';
import { findHypotenuse } from '../mandalaDrawingUtilities.js';
// import getBlendMode from './_getBlendMode.js';
import getShapeArr from './_getShapeArr.js';

const getInputStats = (canvasWidth, canvasHeight, canvasDraw, ctx2) => {
	//|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
	let inputObj = {
		width: canvasWidth || 500,
		height: canvasHeight || 500,
		halfWidth: Math.floor(canvasWidth / 2) || 250,
		halfHeight: Math.floor(canvasHeight / 2) || 250,
		canvasDraw: canvasDraw || null,
		ctx2: ctx2 || null,

		loopCount: 5, //roll(5)
		currentLoop: null,
		percent: null, // created in loop

		backgroundLoopSwitch: true,
		initLoopSwitch: false,

		customBackgroundSwitch: false,
		customBackgroundColor: null,
		customStrokeColor: null,
		customShape: null,

		clearSwitch: false,
		clearAll: false,
		clearRandomLoops: false,
		clearIndividual: false,

		fillSwitch: false,
		fillAll: false,
		fillRandomLoops: false,
		fillIndividual: false,
		fillColor: null,
		fillColorAll: false,
		fillColorRandomLoops: false,
		fillColorIndividual: false,

		strokeSwitch: false,
		strokeAll: false,
		strokeRandomLoops: false,
		strokeIndividual: false,
		strokeColor: null,
		strokeColorAll: false,
		strokeColorRandomLoops: false,
		strokeColorIndividual: false,
		strokeWidth: 1,
		strokeWidthAll: false,
		strokeWidthRandomLoops: false,
		strokeWidthIndividual: false,

		useSize: canvasWidth > canvasHeight ? canvasWidth : canvasHeight,
		useHalfSize: null,
		maxFullPath: findHypotenuse(canvasWidth, canvasHeight),

		pathRadius: null,
		minPathRadius: 20,
		maxPathRadius: null,
		minShapeCount: 4,
		maxShapeCount: 200,
		maxShapeSize: 200,

		shapeCount: null, // default, randomize
		shapeSize: null, //default, shape size needs to be adjusted based on path
		shapeArr: null,

		blendMode: null, // have to find in loop
	};
	inputObj.useHalfSize = inputObj.useSize / 2;
	inputObj.maxPathRadius = findHypotenuse(
		inputObj.halfWidth,
		inputObj.halfHeight
	);

	return inputObj;
};

export default getInputStats;
