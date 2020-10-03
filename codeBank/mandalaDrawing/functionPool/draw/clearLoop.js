import { ctx2 } from '../../mandalaDrawing.js';

const clearLoop = (inputs) => {
    const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];

    for (let clearShape = 1; clearShape <= inputs.shapeCount; clearShape++) {
        if (inputs.clearSwitch) {
            ctx2.globalCompositeOperation = 'destination-out';
            ctx2.beginPath();
            shapeFunction(inputs.shapeSize, inputs.pathRadius);
            ctx2.fillStyle = inputs.color;
            ctx2.fill();
            ctx2.closePath();
            ctx2.globalCompositeOperation = 'source-over';
        }
        ctx2.rotate((2 * Math.PI) / inputs.shapeCount);
    }
};

export default clearLoop;
