import { roll, coinFlip } from '../../utilities.js';

//ADD COLOR CHANGE AND MAYBE WIDTH CHANGE IN HERE EVENTUALLY

const getDrawType = () => {
    // const dice = roll(3);
    let clearAll = false;
    let clearRandomLoops = false;
    let clearIndividual = false;

    let fillAll = false;
    let fillRandomLoops = false;
    let fillIndividual = false;

    let fillColorAll = false;
    let fillColorRandomLoops = false;
    let fillColorIndividual = false;

    let strokeAll = false;
    let strokeRandomLoops = false;
    let strokeIndividual = false;

    let strokeColorAll = false;
    let strokeColorRandomLoops = false;
    let strokeColorIndividual = false;

    let strokeWidthAll = false;
    let strokeWidthRandomLoops = false;
    let strokeWidthIndividual = false;

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
        strokeWidthIndividual = true;
        strokeColorIndividual = true;
        // loopCycle('strokeColor');
        // loopCycle('strokeWidth');
    };
    const fillOnly = () => {
        // loopCycle('clear');
        clearAll = true;
        fillAll = true;

        fillColorRandomLoops = true;
    };
    const fillAndStroke = () => {
        loopCycle('clear');
        fillAll = true;
        strokeAll = true;
    };

    const dice = 2;
    switch (dice) {
        case 1:
            strokeOnly();
            // testThis();
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
        fillColorAll,
        fillColorRandomLoops,
        fillColorIndividual,
        strokeAll,
        strokeRandomLoops,
        strokeIndividual,
        strokeColorAll,
        strokeColorRandomLoops,
        strokeColorIndividual,
        strokeWidthAll,
        strokeWidthRandomLoops,
        strokeWidthIndividual,
    };
};

export default getDrawType;
