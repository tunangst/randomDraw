import randomInterface from './codeBank/randomInterface.js';

const BoxDrawing = randomInterface.BoxDrawing;
const MandalaDrawing = randomInterface.MandalaDrawing;
const RandomDrawing = randomInterface.RandomDrawing;

let sequence = [];

const getSequence = (length) => {
	if (sequence.length > length) {
		sequence.shift();
	}
	const image = sequence[sequence.length - 1];
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
			sequence.push(box);
			return;
		case 'mandalaDraw':
			const mandala = MandalaDrawing(forceDesignObj);
			sequence.push(mandala);
			return;
		default:
			const random = RandomDrawing(forceDesignObj);
			sequence.push(random);
			return;
	}
};

export { randomDraw, getSequence };
