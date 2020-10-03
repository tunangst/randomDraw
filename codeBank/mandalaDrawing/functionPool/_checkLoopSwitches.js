import { lightColor, coinFlip } from '../../utilities.js';
import getStrokeWidth from './_getStrokeWidth.js';

const checkLoopSwitches = (inputs) => {
    if (inputs.clearRandomLoops) {
        inputs.clearSwitch = coinFlip();
    }
    if (inputs.FillRandomLoops) {
        inputs.fillSwitch = coinFlip();
    }
    if (inputs.fillSwitch) {
        if (inputs.fillColorRandomLoops) {
            inputs.fillColor = lightColor();
        }
    }
    if (inputs.strokeRandomLoops) {
        inputs.strokeSwitch = coinFlip();
    }
    if (inputs.strokeSwitch) {
        if (inputs.strokeColorRandomLoops) {
            inputs.strokeColor = lightColor();
        }
        if (inputs.strokeWidthRandomLoops) {
            inputs.strokeWidth = getStrokeWidth(inputs.shapeCount);
        }
    }

    return inputs;
};
export default checkLoopSwitches;
