import { ctx2 } from '../../mandalaDrawing.js';
import checkIndividualSwitches from '../_checkIndividualSwitches.js';

const fillLoop = (inputs) => {
    const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];

    for (let fillShape = 1; fillShape <= inputs.shapeCount; fillShape++) {
        inputs = checkIndividualSwitches('fill', inputs);

        // ctx2.globalCompositeOperation = 'multiply'; // great for clear first
        // ctx2.globalCompositeOperation = 'screen'; // also good option for both
        ctx2.globalCompositeOperation = 'difference'; // cool chaos option both ways
        // ctx2.globalCompositeOperation = inputs.blendMode || 'source-over';
        ctx2.beginPath();
        shapeFunction(inputs.shapeSize, inputs.pathRadius);
        ctx2.fillStyle = inputs.fillColor;
        ctx2.fill();
        ctx2.closePath();
        ctx2.globalCompositeOperation = 'source-over';
        ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
    }
};

export default fillLoop;
