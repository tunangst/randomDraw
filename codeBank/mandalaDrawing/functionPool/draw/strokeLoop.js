import { ctx2 } from '../../mandalaDrawing.js';

const strokeLoop = (inputs) => {
    const shapeFunction = inputs.shapeArr[inputs.currentLoop - 1];

    for (let strokeShape = 1; strokeShape <= inputs.shapeCount; strokeShape++) {
        // ctx2.globalCompositeOperation = 'multiply'; // great for clear first
        // ctx2.globalCompositeOperation = 'screen'; // also good option for both
        // ctx2.globalCompositeOperation = 'difference'; // always looks good
        //     ctx2.globalCompositeOperation = blendMode;
        //     ctx2.beginPath();
        //     shapeFunction(shapeSize, pathRadius);
        //     ctx2.fillStyle = color;
        //     ctx2.fill();
        //     ctx2.closePath();
        //     ctx2.globalCompositeOperation = 'source-over';
        ctx2.globalCompositeOperation = 'screen';
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
