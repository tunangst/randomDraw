import randomInterface from './codeBank/randomInterface.js';

const BoxDrawing = randomInterface.BoxDrawing;
const MandalaDrawing = randomInterface.MandalaDrawing;
const RandomDrawing = randomInterface.RandomDrawing;

let arr = [];
const randomDraw = (forceDesignObj = {}) => {
	console.log(arr);
	const { typeOfDrawer } = forceDesignObj;
	if (!forceDesignObj.boxDrawObj) {
		forceDesignObj.boxDrawObj = {};
	}
	if (!forceDesignObj.mandalaDrawObj) {
		forceDesignObj.mandalaDrawObj = {};
	}
	switch (typeOfDrawer) {
		case 'boxDraw':
			arr.push(BoxDrawing(forceDesignObj));
			return;
		case 'mandalaDraw':
			arr.push(MandalaDrawing(forceDesignObj));
			return;
		default:
			arr.push(RandomDrawing(forceDesignObj));
			return;
	}
};

export default randomDraw;
