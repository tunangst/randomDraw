import { ctx2 } from '../../mandalaDrawing.js';
import checkIndividualSwitches from '../_checkIndividualSwitches.js';
import { slant, starburst } from './drawLine.js';

const clearLoop = (inputs) => {
    const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];
    if (shapeFunction === slant || shapeFunction === starburst) return;

    for (let clearShape = 1; clearShape <= inputs.shapeCount; clearShape++) {
        inputs = checkIndividualSwitches('clear', inputs);

        ctx2.globalCompositeOperation = 'destination-out';
        ctx2.beginPath();
        shapeFunction(inputs.shapeSize, inputs.pathRadius);
        ctx2.fillStyle = inputs.color;
        ctx2.fill();
        ctx2.closePath();
        ctx2.globalCompositeOperation = 'source-over';
        ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
    }
};

export default clearLoop;
