import { coinFlip, lightColor } from '../../utilities.js';
import getStrokeWidth from './_getStrokeWidth.js';

const checkIndividualSwitches = (type, inputs) => {
    if (!type) {
        console.log('error in checkIndividual switch, no type');
        return inputs;
    }
    if (type === 'clear') {
        if (inputs.clearIndividual) {
            inputs.clearSwitch = coinFlip();
        }
    }
    if (type === 'fill') {
        if (inputs.fillIndividual) {
            inputs.fillSwitch = coinFlip();
        }
        if (inputs.fillSwitch) {
            if (inputs.fillColorIndividual) {
                inputs.fillColor = lightColor();
            }
        }
    }
    if (type === 'stroke') {
        if (inputs.strokeIndividual) {
            inputs.strokeSwitch = coinFlip();
        }
        if (inputs.strokeSwitch) {
            if (inputs.strokeColorIndividual) {
                inputs.strokeColor = lightColor();
            }
            if (inputs.strokeWidthIndividual) {
                inputs.strokeWidth = getStrokeWidth(inputs.shapeCount);
            }
        }
    }

    return inputs;
};
export default checkIndividualSwitches;
