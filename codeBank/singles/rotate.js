import { pixelSize } from '../variables.js';

const rotate = (useMatrix, xOffset, yOffset) => {
    let xPos = 0;
    let yPos = 0;
    let tempMatrix = [];
    let rotatedMatrix = [];

    for (let column = 0; column < useMatrix[0].length; column++) {
        let rowArr = [];

        for (let row = useMatrix.length - 1; row >= 0; row--) {
            const pixel = useMatrix[row][column];
            const newPixel = {};
            newPixel.xStart = xPos;
            newPixel.yStart = yPos;
            newPixel.color = pixel.color;
            pixel.xStart = xPos;
            pixel.yStart = yPos;

            rowArr.push(newPixel);
            xPos += pixelSize;
        }
        tempMatrix.push(rowArr);
        xPos = 0;
        yPos += pixelSize;
    }
    yPos = 0;
    rotatedMatrix = [...tempMatrix];

    return rotatedMatrix;
};

export default rotate;
