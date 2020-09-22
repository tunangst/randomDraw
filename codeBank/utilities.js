import {
    ctx,
    ctx2,
    pixelSize,
    drawSection,
    primaryColor,
    secondaryColor,
    emptyColor,
    matrix,
} from './variables.js';

const roll = (range) => {
    const test = Math.floor(Math.random() * range + 1); // 1 - range
    return test;
};

const draw = (usingMatrix, xCoord = 0, yCoord = 0) => {
    for (let matrixRow = 0; matrixRow < usingMatrix.length; matrixRow++) {
        for (
            let matrixColumn = 0;
            matrixColumn < usingMatrix[matrixRow].length;
            matrixColumn++
        ) {
            const pixel = usingMatrix[matrixRow][matrixColumn];
            const calcX = pixel.xStart + xCoord;
            const calcY = pixel.yStart + yCoord;

            if (xCoord === 0 && yCoord === 0) {
                ctx.fillStyle = pixel.color;
                ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
                ctx.strokeStyle = `rgb(255, 255, 255)`;
                ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);
            }

            ctx2.fillStyle = pixel.color;
            ctx2.fillRect(calcX, calcY, pixelSize, pixelSize);
            ctx2.strokeStyle = `rgb(255, 255, 255)`;
            ctx2.strokeRect(calcX, calcY, pixelSize, pixelSize);
        }
    }
    return usingMatrix;
};

const randomSecondary = () => {
    const randomColorHex = () => {
        return Math.round(Math.random() * 255);
    };
    const randomR = randomColorHex();
    const randomG = randomColorHex();
    const randomB = randomColorHex();
    const color = `rgb(${randomR},${randomG},${randomB})`;
    console.log(color);
    return color;
};

const whatToPlace = (xStart, yStart) => {
    const randomColor = roll(3);
    let pixel = {
        xStart,
        yStart,
    };
    // ctx.strokeStyle = `rgb(255, 255, 255)`;
    // ctx.strokeRect(xStart, yStart, pixelSize, pixelSize);
    // ctx.fillRect(xStart, yStart, pixelSize, pixelSize);
    switch (randomColor) {
        case 1:
            pixel.color = emptyColor;
            break;
        case 2:
            pixel.color = primaryColor;
            break;
        case 3:
            pixel.color = secondaryColor;
            break;
        default:
            console.log('error, sorry');
    }
    return pixel;
};

const createPixelMap = () => {
    //this will cycle through y axis on pixel size
    for (let y = 0; y < drawSection; y += pixelSize) {
        //this will cycle through x axis on pixel size
        let row = [];
        for (let x = 0; x < drawSection; x += pixelSize) {
            // console.log(`${x} starting pixel draw,`);
            const pixel = whatToPlace(x, y);
            row.push(pixel);
        }
        matrix.push(row);
    }
};

const combineMatrixTopHalf = (matrix1, matrix2) => {
    let combinedMatrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        const combine = [...matrix1[i], ...matrix2[i]];
        combinedMatrix.push(combine);
    }
    return combinedMatrix;
};
const combineMatrixLeftHalf = (matrix1, matrix2) => {
    return [...matrix1, ...matrix2];
};

export {
    roll,
    draw,
    randomSecondary,
    createPixelMap,
    combineMatrixTopHalf,
    combineMatrixLeftHalf,
};
