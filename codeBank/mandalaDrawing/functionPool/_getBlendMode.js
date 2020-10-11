import { roll } from '../../utilities.js';

const getBlendMode = (force) => {
    if (force) {
        const blends = ['source-over', 'screen', 'difference', 'multiply'];
        if (blends.includes(force)) return force;
    }
    const dice = roll(3);
    let blend;
    switch (dice) {
        case 1:
            blend = 'difference';
            break;
        case 2:
            blend = 'screen';
            break;
        case 3:
            blend = 'multiply';
            break;
        // case 4:
        //     blend = 'source-over';
        //     break;
        default:
            console.log('error in getBlendMode');
            break;
    }

    return blend;
};

export default getBlendMode;
