import { lightColor } from '../../utilities.js';

const checkResetBackgroundSwitches = (inputs) => {
    if (inputs.clearAll) {
        inputs.clearSwitch = true;
    } else {
        inputs.clearSwitch = false;
    }
    if (inputs.fillAll) {
        inputs.fillSwitch = true;

        if (inputs.fillColorAll) {
            inputs.fillColor = lightColor();
        }
    } else {
        inputs.fillSwitch = false;
    }
    if (inputs.strokeAll) {
        inputs.strokeSwitch = true;

        if (inputs.strokeColorAll) {
            inputs.strokeColor = lightColor();
        }
        if (inputs.strokeWidthAll) {
            inputs.strokeWidth = 1;
            //stroke all needs 1 because some loops may have high shape count
        }
    } else {
        inputs.strokeSwitch = false;
    }

    return inputs;
};
export default checkResetBackgroundSwitches;

// let clearAll = false;
//     let fillAll = false;
//     let fillColorAll = false;
//     let strokeAll = false;
//     let strokeColorAll = false;
//     let strokeWidthAll = false;
