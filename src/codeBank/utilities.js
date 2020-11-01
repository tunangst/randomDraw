const roll = (range) => {
	// 1 - range
	return Math.floor(Math.random() * range + 1);
};
const rollRange = (min, max) => {
	const answer = Math.floor(Math.random() * (max - min + 1)) + min;
	return answer;
};

const coinFlip = () => {
	const coin = roll(2);
	const face = coin === 1 ? true : false;
	return face;
};
const createCanvasTemplate = (width, height) => {
	//remove old canvas
	const old = document.querySelector('#canvasTemplate');
	if (old) {
		old.remove();
	}
	//create new canvas
	let canvasTemplate = document.createElement('canvas');
	canvasTemplate.id = 'canvasTemplate';
	canvasTemplate.width = width;
	canvasTemplate.height = height;
	const ctx = canvasTemplate.getContext('2d');

	return [canvasTemplate, ctx];
};
const createCanvasDraw = (width, height) => {
	//remove old canvas
	const old = document.querySelector('#canvasDraw');
	if (old) {
		old.remove();
	}
	//create new canvas
	let canvasDraw = document.createElement('canvas');
	canvasDraw.id = 'canvasDraw';
	canvasDraw.width = width;
	canvasDraw.height = height;
	const ctx2 = canvasDraw.getContext('2d');

	return [canvasDraw, ctx2];
};

const clear = (inputObj) => {
	inputObj.matrix = [];
	inputObj.ctx &&
		inputObj.ctx.clearRect(
			0,
			0,
			inputObj.canvasWidth,
			inputObj.canvasHeight
		);
	inputObj.ctx2 &&
		inputObj.ctx2.clearRect(
			0,
			0,
			inputObj.canvasWidth,
			inputObj.canvasHeight
		);
	return inputObj.matrix;
};

const randomColor = () => {
	const randomR = roll(256);
	const randomG = roll(256);
	const randomB = roll(256);
	return `rgb(${randomR},${randomG},${randomB})`;
};

const lightColor = (shapeCount) => {
	const randomH = rollRange(0, 360);
	const randomS = rollRange(0, 100);
	let randomL;
	if (shapeCount > 150) {
		randomL = 99;
	} else if (shapeCount > 100) {
		randomL = rollRange(95, 99); //0=black 50=normal 100=white
	} else if (shapeCount > 50) {
		randomL = rollRange(90, 99); //0=black 50=normal 100=white
	} else {
		randomL = rollRange(80, 99); //0=black 50=normal 100=white
	}
	return `hsl(${randomH},${randomS}%,${randomL}%)`;
};

const darkColor = (shapeCount) => {
	const randomH = rollRange(0, 360);
	const randomS = rollRange(0, 100);
	let randomL;
	// debugger;
	if (shapeCount > 150) {
		randomL = 1;
	} else if (shapeCount > 100) {
		randomL = rollRange(5, 1); //0=black 50=normal 100=white
	} else if (shapeCount > 50) {
		randomL = rollRange(10, 1); //0=black 50=normal 100=white
	} else {
		randomL = rollRange(20, 1); //0=black 50=normal 100=white
	}
	return `hsl(${randomH},${randomS}%,${randomL}%)`;
};

//rotate image functions
//rotate image functions
//rotate image functions
//rotate image functions

// const img = new Image();
// img.src = "https://i.stack.imgur.com/C7qq2.png?s=328&g=1";
// img.onload = () => { requestAnimationFrame(mainLoop) } // start when loaded
// const ctx = canvas.getContext("2d");

// function drawImageRotated(img, x, y, scale, rot) {
//   ctx.setTransform(scale, 0, 0, scale, x, y);
//   ctx.rotate(rot);
//   ctx.drawImage(img, -img.width / 2, -img.height / 2);
//   ctx.setTransform(1, 0, 0, 1, 0, 0);
// }

// function mainLoop(time) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawImageRotated(img,canvas.width / 2, canvas.height / 2, 0.5, time / 500);
//   requestAnimationFrame(mainLoop);
// }

//rotate image functions
//rotate image functions
//rotate image functions
//rotate image functions

export {
	roll,
	rollRange,
	coinFlip,
	createCanvasTemplate,
	createCanvasDraw,
	clear,
	randomColor,
	lightColor,
	darkColor,
};
