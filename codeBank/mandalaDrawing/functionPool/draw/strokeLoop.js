import { ctx2 } from '../../mandalaDrawing.js';
import checkIndividualSwitches from '../_checkIndividualSwitches.js';

const strokeLoop = (inputs) => {
    const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];

    for (let strokeShape = 1; strokeShape <= inputs.shapeCount; strokeShape++) {
        inputs = checkIndividualSwitches('stroke', inputs);

        ctx2.globalCompositeOperation = 'source-over';
        ctx2.beginPath();
        shapeFunction(inputs.shapeSize, inputs.pathRadius);

        ctx2.lineWidth = inputs.strokeWidth;
        ctx2.strokeStyle = inputs.strokeColor;
        ctx2.stroke();
        ctx2.closePath();
        ctx2.globalCompositeOperation = 'source-over';
        ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
    }
};
// ctx2.beginPath();
// drawCircle(shapeSize, pathRadius);
// ctx2.lineWidth = 1;
// ctx2.strokeStyle = randomColorValue;
// ctx2.stroke();
// ctx2.closePath();
// ctx2.rotate((2 * Math.PI) / inputs.shapeCount);

export default strokeLoop;
