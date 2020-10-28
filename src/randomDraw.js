import randomInterface from './codeBank/randomInterface.js';

const BoxDrawing = randomInterface.BoxDrawing;
const MandalaDrawing = randomInterface.MandalaDrawing;
const RandomDrawing = randomInterface.RandomDrawing;

let max = 20;
let sequence = [];

const pushSequence = (design) => {
	sequence.push(design);
	while (sequence.length > max) {
		sequence.shift();
	}
};
const getSequence = (suggestMax) => {
	// debugger;
	max = suggestMax;
	while (sequence.length > max) {
		sequence.shift();
	}
	return sequence;
};
const getImage = () => {
	let image;
	if (sequence.length > 0) image = sequence[sequence.length - 1];
	// const image = sequence[sequence.length - 1];
	console.log(image);
	return image;
};

const randomDraw = (forceDesignObj = {}) => {
	const { typeOfDrawer } = forceDesignObj;
	if (!forceDesignObj.boxDrawObj) {
		forceDesignObj.boxDrawObj = {};
	}
	if (!forceDesignObj.mandalaDrawObj) {
		forceDesignObj.mandalaDrawObj = {};
	}
	switch (typeOfDrawer) {
		case 'boxDraw':
			const box = BoxDrawing(forceDesignObj);
			pushSequence(box);
			return;
		case 'mandalaDraw':
			const mandala = MandalaDrawing(forceDesignObj);
			pushSequence(mandala);
			return;
		default:
			const random = RandomDrawing(forceDesignObj);
			pushSequence(random);
			return;
	}
};

export { randomDraw, getSequence, getImage };
