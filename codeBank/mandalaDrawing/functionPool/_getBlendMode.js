import { roll } from '../../utilities.js';

const getBlendMode = (amount) => {
    const dice = roll(amount);
    let blend;
    switch (dice) {
        case 1:
            blend = 'source-over';
            break;
        case 2:
            blend = 'screen';
            break;
        case 3:
            blend = 'difference';
            break;
        case 4:
            blend = 'multiply';
            break;
        default:
            console.log('error in getBlendMode');
            break;
    }

    return blend;
};

export default getBlendMode;
