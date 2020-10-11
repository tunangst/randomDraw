import { roll } from '../../utilities.js';

const getBlendMode = (inputs, force) => {
    if (force) {
        const blends = ['source-over', 'screen', 'difference', 'multiply'];
        if (blends.includes(force)) return force;
    }
    const dice = roll(3);
    switch (dice) {
        case 1:
            inputs.blendMode = 'difference';
            break;
        case 2:
            inputs.blendMode = 'screen';
            break;
        case 3:
            inputs.blendMode = 'multiply';
            break;
        // case 4:
        //     blend = 'source-over';
        //     break;
        default:
            console.log('error in getBlendMode');
            break;
    }

    return inputs;
};

export default getBlendMode;
