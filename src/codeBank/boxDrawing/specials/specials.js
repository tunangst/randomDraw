import { roll } from '../../utilities.js';
import fullClone from './fullClone.js';
import fullRotate from './fullRotate.js';
import fullReflect from './fullReflect.js';
import halfReflect from './halfReflect.js';

const specials = (boxDrawObj) => {
	//      specials
	//          type (full clone, full rotate, full reflect, half reflect)
	if (!boxDrawObj.drawStyle || boxDrawObj.drawStyle === 'random') {
		const dice = roll(4);
		switch (dice) {
			case 1:
				fullClone(boxDrawObj);
				break;
			case 2:
				fullRotate(boxDrawObj);
				break;
			case 3:
				fullReflect(boxDrawObj);
				break;
			case 4:
				halfReflect(boxDrawObj);
				break;
			default:
				console.log('error in layout variable');
				break;
		}
	} else {
		switch (boxDrawObj.drawStyle) {
			case 'fullClone':
				fullClone(boxDrawObj);
				break;
			case 'fullReflect':
				fullReflect(boxDrawObj);
				break;
			case 'fullRotate':
				fullRotate(boxDrawObj);
				break;
			case 'halfReflect':
				halfReflect(boxDrawObj);
				break;
			default:
				console.log('error in forcedraw of specials');
				break;
		}
	}
};

export default specials;
