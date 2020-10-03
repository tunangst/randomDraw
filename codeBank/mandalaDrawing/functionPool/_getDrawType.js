import { roll, coinFlip } from '../../utilities.js';

const getDrawType = () => {
    // const dice = roll(3);
    let clearAll = false;
    let clearRandomLoops = false;
    let clearIndividual = false;

    let fillAll = false;
    let fillRandomLoops = false;
    let fillIndividual = false;

    let strokeAll = false;
    let strokeRandomLoops = false;
    let strokeIndividual = false;

    const loopCycle = (word) => {
        eval(`${word}All = ${coinFlip()}`);

        if (!eval(`${word}All`)) {
            eval(`${word}RandomLoops = ${coinFlip()}`);
        } else {
            return;
        }
        if (!eval(`${word}RandomLoops`)) {
            eval(`${word}Individual = ${coinFlip()}`);
        } else {
            return;
        }
        if (!eval(`${word}Individual`)) {
            loopCycle(word);
        } else {
            return;
        }
    };

    const chaos = () => {
        clearIndividual = true;
        fillIndividual = true;
        strokeIndividual = true;
    };
    const strokeOnly = () => {
        // loopCycle('clear');
        strokeAll = true;
    };
    const fillOnly = () => {
        loopCycle('clear');
        fillAll = true;
    };
    const fillAndStroke = () => {
        loopCycle('clear');
        fillAll = true;
        strokeAll = true;
    };
    const dice = 1;
    switch (dice) {
        case 1:
            strokeOnly();
            break;
        case 2:
            fillOnly();
            break;
        case 3:
            fillAndStroke();
            break;
        case 4:
            chaos();
            break;
        default:
            console.log('error in getDrawType');
            break;
    }
    return {
        clearAll,
        clearRandomLoops,
        clearIndividual,
        fillAll,
        fillRandomLoops,
        fillIndividual,
        strokeAll,
        strokeRandomLoops,
        strokeIndividual,
    };
};

export default getDrawType;
