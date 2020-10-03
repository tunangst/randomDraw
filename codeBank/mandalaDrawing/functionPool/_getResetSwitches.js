const getResetSwitches = (inputs) => {
    if (inputs.clearAll) {
        inputs.clearSwitch = true;
    } else {
        inputs.clearSwitch = false;
    }
    if (inputs.fillAll) {
        inputs.fillSwitch = true;
    } else {
        inputs.fillSwitch = false;
    }
    if (inputs.strokeAll) {
        inputs.strokeSwitch = true;
    } else {
        inputs.strokeSwitch = false;
    }
    return inputs;
};
export default getResetSwitches;
