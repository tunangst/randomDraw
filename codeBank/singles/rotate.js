import { pixelSize } from '../variables.js';

const rotateClockwise = (useMatrix, xOffset = 0, yOffset = 0) => {
    let xPos = xOffset;
    let yPos = yOffset;
    let tempMatrix = [];
    let rotatedMatrix = [];

    for (let column = 0; column < useMatrix[0].length; column++) {
        let rowArr = [];

        for (let row = useMatrix.length - 1; row >= 0; row--) {
            const pixel = useMatrix[row][column];
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
    yPos = yOffset;
    rotatedMatrix = [...tempMatrix];

    return rotatedMatrix;
};

const rotateCounterClockwise = (useMatrix, xOffset = 0, yOffset = 0) => {
    //loop columns reverse
    //loop over rows in order
    let xPos = xOffset;
    let yPos = yOffset;
    let tempMatrix = [];
    let rotatedMatrix = [];

    for (let column = useMatrix[0].length - 1; column >= 0; column--) {
        let rowArr = [];

        for (let row = 0; row < useMatrix.length; row++) {
            const pixel = useMatrix[row][column];
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
    yPos = yOffset;
    rotatedMatrix = [...tempMatrix];

    return rotatedMatrix;
};

export { rotateClockwise, rotateCounterClockwise };
