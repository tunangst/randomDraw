import { randomColor, lightColor, darkColor } from '../../utilities.js';

const getColorType = (inputs) => {
    if (inputs.clearSwitch) {
        return randomColor();
    }

    if (inputs.blendMode === 'screen') {
        return darkColor(inputs.shapeCount);
    } else if (inputs.blendMode === 'multiply') {
        return lightColor(inputs.shapeCount);
    } else {
        return randomColor();
    }
    // return inputs;
};
export default getColorType;
