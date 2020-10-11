import { lightColor, coinFlip, roll } from '../../utilities.js';
import getStrokeWidth from './_getStrokeWidth.js';
import getColorType from './_getColorType.js';

const checkLoopSwitches = (inputs) => {
    //clear
    if (inputs.clearRandomLoops) {
        inputs.clearSwitch = coinFlip();
    }
    //clear
    //fill
    if (inputs.FillRandomLoops) {
        inputs.fillSwitch = coinFlip();
    }
    if (inputs.fillSwitch) {
        if (inputs.fillColorRandomLoops) {
            inputs.fillColor = getColorType(inputs);
        }
    }
    //fill
    //stroke
    if (inputs.strokeRandomLoops) {
        inputs.strokeSwitch = coinFlip();
    }
    if (inputs.strokeSwitch) {
        if (inputs.strokeColorRandomLoops) {
            inputs.strokeColor = getColorType(inputs);
            //chance for randomIndividual color to be a single loop choice
            inputs.strokeColorIndividual = roll(10) === 1 ? true : false;
        }
        if (inputs.strokeWidthRandomLoops) {
            inputs.strokeWidth = getStrokeWidth(inputs.shapeCount);
            //chance for randomIndividual width to be a single loop choice
            inputs.strokeWidthIndividual = roll(10) === 1 ? true : false;
        }
    }
    //stroke
    //individual
    if (inputs.strokeIndividual) {
        inputs.strokeSwitch = true;
    }
    if (inputs.fillIndividual) {
        inputs.fillSwitch = true;
    }
    //individual

    return inputs;
};
export default checkLoopSwitches;
