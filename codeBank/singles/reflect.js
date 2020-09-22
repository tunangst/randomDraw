import { pixelSize } from '../variables.js';
import { draw } from '../utilities.js';

const reflectVerticalAxis = (useMatrix, xOffset = 0, yOffset = 0) => {
    // reset();
    let xPos = xOffset;
    let yPos = yOffset;
    let tempMatrix = [];
    for (let row = 0; row < useMatrix.length; row++) {
        let rowArr = [];
        for (let column = useMatrix[row].length - 1; column >= 0; column--) {
            const pixel = useMatrix[row][column];
            const newPixel = {};
            newPixel.xStart = xPos;
            newPixel.yStart = yPos;
            newPixel.color = pixel.color;

            rowArr.push(newPixel);
            xPos += pixelSize;
        }
        tempMatrix.push(rowArr);
        xPos = xOffset;
        yPos += pixelSize;
    }
    // adjustedMatrix = [...tempMatrix];

    yPos = yOffset;
    // draw(tempMatrix);
    return tempMatrix;
};

const reflectHorizontalAxis = (useMatrix, xOffset = 0, yOffset = 0) => {
    // reset();
    let xPos = xOffset;
    let yPos = yOffset;
    let tempMatrix = [];
    for (let row = useMatrix.length - 1; row >= 0; row--) {
        let rowArr = [];
        for (let column = 0; column < useMatrix[row].length; column++) {
            const pixel = useMatrix[row][column];
            //have to create a new obj because combinedMatrix[4] would === combinedMatrix[5]
            const newPixel = {
                xStart: xPos,
                yStart: yPos,
                color: pixel.color,
            };
            rowArr.push(newPixel);
            xPos += pixelSize;
        }
        tempMatrix.push(rowArr);
        xPos = xOffset;
        yPos += pixelSize;
    }
    // adjustedMatrix = [...tempMatrix];
    yPos = yOffset;
    // draw(tempMatrix, xOffset, yOffset);
    return tempMatrix;
};

export { reflectVerticalAxis, reflectHorizontalAxis };
