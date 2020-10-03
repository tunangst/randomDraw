import { roll, rollRange, randomColor, lightColor } from '../../utilities.js';
import getStrokeWidth from '../functionPool/_getStrokeWidth.js';
import getColor from '../functionPool/_getColor.js';
import clearDrawingArea from '../functionPool/draw/clearDrawingArea.js';

import { ctx2, halfWidth, halfHeight } from '../mandalaDrawing.js';

import clearLoop from '../functionPool/draw/clearLoop.js';
import fillLoop from '../functionPool/draw/fillLoop.js';
import strokeLoop from '../functionPool/draw/strokeLoop.js';

const loop = (inputs) => {
    ctx2.save();
    ctx2.translate(halfWidth, halfHeight); // move to center

    inputs.clearSwitch && clearLoop(inputs);

    inputs.fillSwitch && fillLoop(inputs);

    inputs.strokeSwitch && strokeLoop(inputs);

    ctx2.restore();
    //******MOVE CENTER POINT BACK*********** */
    //******ENDING DRAW*********** */
    //******ENDING DRAW*********** */
    //******ENDING DRAW*********** */
    //******ENDING DRAW*********** */
    return inputs;
};

export default loop;
