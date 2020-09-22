import { pixelSize } from '../variables.js';
import { draw } from '../utilities.js';

const clone = (usingMatrix, xCoord, yCoord) => {
    let xPos = xCoord;
    let yPos = yCoord;
    let tempMatrix = [];
    for (let matrixRow = 0; matrixRow < usingMatrix.length; matrixRow++) {
        let rowArr = [];
        for (
            let matrixColumn = 0;
            matrixColumn < usingMatrix[matrixRow].length;
            matrixColumn++
        ) {
            const pixel = usingMatrix[matrixRow][matrixColumn];
            const newPixel = {
                xStart: xPos,
                yStart: yPos,
                color: pixel.color,
            };
            rowArr.push(newPixel);
            xPos += pixelSize;
        }
        tempMatrix.push(rowArr);
        xPos = xCoord;
        yPos += pixelSize;
    }
    yPos = yCoord;
    // draw(tempMatrix);
    return tempMatrix;
};

export default clone;
