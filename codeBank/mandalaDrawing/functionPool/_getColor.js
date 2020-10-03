import { randomColor } from '../../utilities.js';
const getColor = (type) => {
    if (type === 'allNone' || type === 'none') {
        return 'rgba(255,255,255,0)';
    } else {
        return randomColor();
    }
};

export default getColor;
