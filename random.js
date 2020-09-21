const canvas = document.querySelector('#draw');
const canvas2 = document.querySelector('#full');
// const primaryColor = `black`;
const primaryColor = `rgb(0,0,0)`;
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
// const secondaryColor = 'teal';
const secondaryColor = randomSecondary();
// const emptyColor = `white`;
const emptyColor = `rgba(0,0,0,.0)`;
const canvasSize = 500;
const drawSection = 250;
// const borderSize = 1;
const pixelSize = drawSection / 5; //draw section divided by how many pixels across
console.log(pixelSize);
let xPos = 0; //starting position
let yPos = 0; //starting position
let matrix = [];
// ^^^^^^^^^^^^^^^^^^ variables ^^^^^^^^^^^^^^^^^^^^^^

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
//  singles x4
//      clone
//      rotate
//      reflect
//  doubles x2
//      clone
//      rotate
//      reflect
//  singles x2 doubles x1
//      clone (rotate, reflect, clone)
//      rotate (reflect, clone, rotate)
//      reflect (clone, rotate, reflect)
//singles x2
////singles x2
////double
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
const roll = (range) => {
    const test = Math.floor(Math.random() * range + 1); // 1 - range
    return test;
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
const fullRotate = (matrix) => {
    xPos = 0;
    yPos = 0;
    let adjustedMatrix = [];
    // loop over columns in order;
    // loop over rows backwards;
    const rotate = (useMatrix, xOffset, yOffset) => {
        let tempMatrix = [];
        for (let column = 0; column < useMatrix[0].length; column++) {
            let rowArr = [];
            for (let row = useMatrix.length - 1; row >= 0; row--) {
                const pixel = useMatrix[row][column];
                pixel.xStart = xPos;
                pixel.yStart = yPos;

                rowArr.push(pixel);
                xPos += pixelSize;
            }
            tempMatrix.push(rowArr);
            xPos = 0;
            yPos += pixelSize;
        }
        adjustedMatrix = [...tempMatrix];
        draw(adjustedMatrix, xOffset, yOffset);
        yPos = 0;
    };
    draw(matrix, 0, 0);
    rotate(matrix, 250, 0);
    rotate(adjustedMatrix, 250, 250);
    rotate(adjustedMatrix, 0, 250);
};
const fullReflect = (matrix) => {
    xPos = 0;
    yPos = 0;
    let adjustedMatrix = [];
    let combinedMatrix = [];
    // loop over rows in order;
    // loop over columns backwards;
    const reflectHorizontal = (useMatrix, xOffset, yOffset) => {
        let tempMatrix = [];
        for (let row = 0; row < useMatrix.length; row++) {
            let rowArr = [];
            for (
                let column = useMatrix[row].length - 1;
                column >= 0;
                column--
            ) {
                const pixel = useMatrix[row][column];
                pixel.xStart = xPos;
                pixel.yStart = yPos;

                rowArr.push(pixel);
                xPos += pixelSize;
            }
            tempMatrix.push(rowArr);
            xPos = 0;
            yPos += pixelSize;
        }
        adjustedMatrix = [...tempMatrix];
        yPos = 0;
        draw(adjustedMatrix, xOffset, yOffset);
    };
    // loop over rows backwards;
    // loop over columns in order;
    const reflectVertical = (useMatrix, xOffset, yOffset) => {
        let tempMatrix = [];
        for (let row = useMatrix.length - 1; row >= 0; row--) {
            let rowArr = [];
            for (let column = 0; column < useMatrix[row].length; column++) {
                const pixel = useMatrix[row][column];
                //have to create a new obj because combinedMatrix[4] would === combinedMatrix[5]
                const newPixel = {};
                newPixel.xStart = xPos;
                newPixel.yStart = yPos;
                newPixel.color = pixel.color;
                rowArr.push(newPixel);
                xPos += pixelSize;
            }
            tempMatrix.push(rowArr);
            xPos = 0;
            yPos += pixelSize;
        }
        adjustedMatrix = [...tempMatrix];
        yPos = 0;
        draw(adjustedMatrix, xOffset, yOffset);
    };

    draw(matrix, 0, 0);
    reflectHorizontal(matrix, 250, 0);
    // build combinedMatrix
    for (let i = 0; i < matrix.length; i++) {
        const combine = [...matrix[i], ...adjustedMatrix[i]];
        combinedMatrix.push(combine);
    }
    reflectVertical(combinedMatrix, 0, 250);
};
// const reflect = (useMatrix) => {
//     xPos = 0;
//     yPos = 0;
//     const matrixIndexColumn = 0; // 0 - useMatrix[0].length
//     const matrixIndexRow = 0; // 0 - useMatrix.length
//     let editMatrix = [];

//     // loop over columns in order;
//     // loop over rows backwards;

//     for (let column = 0; column < useMatrix[0].length; column++) {
//         let rowArr = [];
//         for (let row = useMatrix.length - 1; row >= 0; row--) {
//             const pixel = useMatrix[column][row]; // this being column row rotates it
//             // console.log(matrixRow, matrixColumn);
//             console.log(`~~~~~~~~~`);
//             console.log(pixel);
//             pixel.xStart = xPos;
//             pixel.yStart = yPos;
//             console.log(pixel);
//             console.log(`~~~~~~~~~`);
//             xPos += pixelSize;

//             rowArr.push(pixel);
//         }
//         editMatrix.push(rowArr);
//         xPos = 0;
//         yPos += pixelSize;
//     }
//     draw(editMatrix, 250, 0);
//     console.log(editMatrix);
// };
const clone = (matrix, xStart, yStart) => {
    draw(matrix, xStart, yStart);
};
const fullClone = (matrix) => {
    clone(matrix, 0, 0);
    clone(matrix, 250, 0);
    clone(matrix, 250, 250);
    clone(matrix, 0, 250);
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

const draw = (usingMatrix, xCoord = 0, yCoord = 0) => {
    for (let matrixRow = 0; matrixRow < usingMatrix.length; matrixRow++) {
        for (
            let matrixColumn = 0;
            matrixColumn < usingMatrix[matrixRow].length;
            matrixColumn++
        ) {
            const pixel = usingMatrix[matrixRow][matrixColumn];
            let calcX = pixel.xStart + xCoord;
            let calcY = pixel.yStart + yCoord;

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
};
// const singlesX4 = () => {
//     //  singles x4
//     //      clone
//     //      rotate
//     //      reflect
//     const typeDice = roll(2);
//     const quadrantDice = roll(4);
//     switch (typeDice) {
//         case 1:
//             fullClone(matrix);
//             break;
//         case 2:
//             fullRotate(matrix);
//             break;
//         case 3:
//             // fullReflect();
//             break;
//         case 4:
//             // halfReflect();
//             break;
//         default:
//             console.log('error in layout variable');
//             break;
//     }
// };
const specials = () => {
    //      specials
    //          type (full clone, full rotate, full reflect, half reflect)
    // const typeOfSpecial = roll(4);
    // const dice = roll(2);
    const dice = 4;
    console.log(dice);
    switch (dice) {
        case 1:
            fullClone(matrix);
            break;
        case 2:
            fullRotate(matrix);
            break;
        case 3:
            fullReflect(matrix);
            break;
        case 4:
            // halfReflect();
            break;
        default:
            console.log('error in layout variable');
            break;
    }
};

if (canvas.getContext) {
    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');
    var ctx2 = canvas2.getContext('2d');

    // console.log(matrix);
    createPixelMap();
    // console.log(matrix);

    // rotateTimesThree(matrix);
    // rotateTimesThree(matrix);

    // const layout = roll(4);
    const layout = 4;
    console.log(layout);
    switch (layout) {
        case 1:
            singlesX4();
            break;
        case 2:
            // doublesX2();
            break;
        case 3:
            // singlesX2DoublesX1();
            break;
        case 4:
            specials();
            break;
        default:
            console.log('error in layout variable');
            break;
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
    //  singles x4
    //      clone
    //      rotate
    //      reflect
    //  doubles x2
    //      clone
    //      rotate
    //      reflect
    //  singles x2 doubles x1
    //      clone (rotate, reflect, clone)
    //      rotate (reflect, clone, rotate)
    //      reflect (clone, rotate, reflect)
    //
    //  specials
    //      full clone (4 clone)
    //      full rotate (4 singles)
    //      full reflect (4 singles)
    //      half reflect (vertical, horizontal)
    //
    //  roll #1: type (singles x4, doubles x2, singles x2 doubles x1, specials)
    //  roll #2: ↓
    //      singles x4
    //          quadrant (1,2,3,4)
    //          type (clone, rotate, reflect)
    //          ... x4
    //      doubles x1 singles x2
    //          quadrant (vertical, horizontal)
    //          type (clone, rotate, reflect)
    //              type (clone, rotate, reflect)
    //      specials
    //          type (full clone, full rotate, full reflect, half reflect)
    //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
} else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
}

// debugger;
