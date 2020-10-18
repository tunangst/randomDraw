import randomInterface from './codeBank/randomInterface.js';

const BoxDrawing = randomInterface.BoxDrawing;
const MandalaDrawing = randomInterface.MandalaDrawing;
const RandomDrawing = randomInterface.RandomDrawing;

const randomDraw = (forceDesignObj = {}) => {
	const { typeOfDrawer } = forceDesignObj;
	switch (typeOfDrawer) {
		case 'boxDraw':
			BoxDrawing(forceDesignObj);
			return;
		case 'mandalaDraw':
			MandalaDrawing(forceDesignObj);
			return;
		default:
			RandomDrawing(forceDesignObj);
			return;
	}
};

export default randomDraw;
