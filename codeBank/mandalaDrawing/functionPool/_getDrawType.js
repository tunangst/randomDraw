import { roll, coinFlip } from '../../utilities.js';

//ADD COLOR CHANGE AND MAYBE WIDTH CHANGE IN HERE EVENTUALLY

const getDrawType = (forceType) => {
    // const dice = roll(3);
    // let clearSwitch = false;
    let strokeSwitch = false;
    let fillSwitch = false;

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
        fillSwitch = true;
        strokeSwitch = true;
        loopCycle('clear');
        loopCycle('fill');
        loopCycle('fillColor');
        loopCycle('stroke');
        loopCycle('strokeColor');
        loopCycle('strokeWidth');
    };
    const strokeOnly = () => {
        fillSwitch = true;
        strokeSwitch = true;
        // loopCycle('clear');
        clearIndividual = true;
        strokeAll = true;
        loopCycle('strokeColor');
        loopCycle('strokeWidth');
    };
    const testThis = () => {
        // loopCycle('clear');
        clearIndividual = true;
        strokeAll = true;
        strokeColorRandomLoops = true;
        // loopCycle('strokeColor');
        loopCycle('strokeWidth');
    };
    const fillOnly = () => {
        fillSwitch = true;
        clearAll = true;
        fillAll = true;
        loopCycle('fillColor');
        // fillColorRandomLoops = true;
    };
    const fillAndStroke = () => {
        fillSwitch = true;
        strokeSwitch = true;
        fillAll = true;
        strokeAll = true;
        loopCycle('clear');
        loopCycle('strokeColor');
        loopCycle('fillColor');
    };
    const individual = () => {
        fillSwitch = true;
        strokeSwitch = true;
        clearIndividual = true;
        fillIndividual = true;
        fillColorIndividual = true;
        strokeIndividual = true;
        strokeColorIndividual = true;
        strokeWidthIndividual = true;
    };

    // const dice = 2;
    // work on this
    // work on this
    // work on this
    // work on this
    // work on this
    // work on this
    const dice = 5;
    switch (forceType) {
        case 'strokeOnly':
            break;
        case 'fillOnly':
            break;
    }
    // work on this
    // work on this
    // work on this
    // work on this
    // work on this
    // work on this
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
            individual();
            break;
        case 5:
            chaos();
            break;
        default:
            console.log('error in getDrawType');
            break;
    }
    return {
        strokeSwitch,
        fillSwitch,
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
