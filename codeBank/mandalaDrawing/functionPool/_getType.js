import { roll } from '../../utilities.js';

const getType = (number) => {
    const dice = number || roll(6);
    switch (dice) {
        case 1:
            return 'allSame';
        case 2:
            return 'loopsSame';
        case 3:
            return 'none';
        case 4:
            return 'allNone';
        case 5:
            return 'loopsRandom';
        case 6:
            return 'allRandom';
        default:
            console.log('error in getStrokeWidthType');
            return;
    }
};

export default getType;
