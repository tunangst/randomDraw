import { ctx2 } from '../../mandalaDrawing.js';
import getBlendMode from '../_getBlendMode.js';

const clearDrawingArea = (
    clearOrFill,
    clearSwitch,
    fillSwitch,
    shapeFunction,
    pathRadius,
    shapeSize,
    shapeCount,
    color
) => {
    //nextShapeDraw is the function
    // if (clearOrFill === 'clear') {
    //     if (clearSwitch) {
    //         ctx2.globalCompositeOperation = 'destination-out';
    //         ctx2.beginPath();
    //         shapeFunction(shapeSize, pathRadius);
    //         ctx2.fillStyle = color;
    //         ctx2.fill();
    //         ctx2.closePath();
    //         ctx2.globalCompositeOperation = 'source-over';
    //     }
    // }
    if (clearOrFill === 'fill') {
        if (fillSwitch) {
            // let blendMode;
            // if (clearSwitch === 'cleared') {
            //     blendMode = getBlendMode(4);
            // } else {
            //     blendMode = getBlendMode(3);
            // }
            // ctx2.globalCompositeOperation = 'multiply'; // great for clear first
            // ctx2.globalCompositeOperation = 'screen'; // also good option for both
            // ctx2.globalCompositeOperation = 'difference'; // cool chaos option both ways
            // ctx2.globalCompositeOperation = blendMode || 'source-over';
            ctx2.beginPath();
            shapeFunction(shapeSize, pathRadius);
            ctx2.fillStyle = color;
            ctx2.fill();
            ctx2.closePath();
            ctx2.globalCompositeOperation = 'source-over';
        }
    }

    ctx2.rotate((2 * Math.PI) / shapeCount);
};

export default clearDrawingArea;
