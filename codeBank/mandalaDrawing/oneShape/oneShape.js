import { roll, rollRange, randomColor } from '../../utilities.js';
import { findHypotenuse } from '../MandalaDrawingUtilities.js';
import {
    ctx,
    ctx2,
    halfWidth,
    halfHeight,
    height,
    width,
} from '../mandalaDrawing.js';
import drawCircle from '../functionPool/draw/drawCircle.js';
import drawSquare from '../functionPool/draw/drawSquare.js';
// import loop from './loop.js';

const getShape = (forceNumber) => {
    // let dice = roll(5);
    let dice;
    //forceNumber should increment, lets the invoke call the case
    while (forceNumber && forceNumber > 5) {
        forceNumber = forceNumber - 5;
    }
    forceNumber ? (dice = forceNumber) : (dice = roll(5)); //roll(5)

    switch (dice) {
        case 1:
            return 'circle';
        case 2:
            return 'square';
        case 3:
            return 'line';
        case 4:
            return 'oval';
        case 5:
            return 'rectangle';
        default:
            console.log('error in getShapeType');
            return;
    }
};
const getShapeArr = (loopCount, forceNumber) => {
    let shapeStyleDice;
    console.log(forceNumber);
    if (forceNumber) {
        if (forceNumber === 'random') shapeStyleDice = 1;
        if (forceNumber === 'same') shapeStyleDice = 2;
        if (forceNumber === 'increment') shapeStyleDice = 3;
    } else {
        shapeStyleDice = roll(3);
    }
    let shape = null;
    let shapeArr = [];
    console.log('getShapeArr');
    switch (shapeStyleDice) {
        case 1:
            console.log('random');
            for (let loop = loopCount; loop > 0; loop--) {
                shape = getShape();
                shapeArr.push(shape);
            }
            break;
        case 2:
            console.log('same');
            shape = getShape();
            for (let loop = loopCount; loop > 0; loop--) {
                shapeArr.push(shape);
            }
            break;
        case 3:
            console.log('increment');
            for (let loop = loopCount; loop > 0; loop--) {
                shape = getShape(loop);
                shapeArr.push(shape);
            }
            break;
        default:
            console.log('error in getShapeArr');
            break;
    }
    console.log(shapeArr, '  shapeArr');
    return shapeArr;
};
const getShapeSizeType = () => {
    const dice = roll(2);
    console.log('getShapeSizeType');
    switch (dice) {
        case 1:
            return 'random';
        case 2:
            return 'fixed';
        default:
            console.log('error in getShapeSize');
            return;
    }
};
const getBackground = () => {
    console.log('getBackground');
    const dice = roll(2);
    let color;
    switch (dice) {
        case 1:
            console.log('no color');
            color = 'rgba(255, 255, 255, 0)';
            break;
        case 2:
            console.log('solid color');
            const diceSolidColor = roll(3);
            switch (diceSolidColor) {
                case 1:
                    console.log('random');
                    color = randomColor();
                    break;
                case 2:
                    console.log('white');
                    color = 'rgb(250, 250, 250)';
                    break;
                case 3:
                    console.log('black');
                    color = 'rgb(5, 5, 5)';
                    break;
            }
            break;
        // case 3:
        //     console.log('gradient mesh');
        //     console.log('have not created gradient mesh yet');
        //     break;
        default:
            console.log('error in getbackground');
            break;
    }
    return color;
};
const getRandomOrSame = () => {
    console.log('getRandomOrSame');
    const dice = roll(2);
    switch (dice) {
        case 1:
            console.log('random');
            return 'random';
        case 2:
            console.log('same');
            return 'same';
        default:
            console.log('error in getRandomOrSame');
            return;
    }
};
const getStrokeAndFillType = () => {
    console.log('getStrokeAndFillType');
    const fillTypeDice = roll(3);
    const strokeAndFillObj = {
        fill: {
            color: false,
        },
        stroke: {
            color: false,
            width: false,
        },
    };

    switch (fillTypeDice) {
        case 1:
            console.log('stroke only');

            strokeAndFillObj.fill.color = false;
            strokeAndFillObj.stroke.width = getRandomOrSame();
            strokeAndFillObj.stroke.color = getRandomOrSame();
            break;
        case 2:
            console.log('fill only');
            strokeAndFillObj.stroke = false;
            strokeAndFillObj.fill.color = getRandomOrSame();
            break;
        case 3:
            console.log('stroke and fill');
            strokeAndFillObj.stroke.width = getRandomOrSame();
            strokeAndFillObj.stroke.color = getRandomOrSame();

            strokeAndFillObj.fill.color = getRandomOrSame();
            break;
        default:
            console.log('error in getStrokeAndFillType');
            break;
    }
    return strokeAndFillObj;
    //get fill type: *******************
    //  stroke only
    //      stroke width
    //          random
    //          same, 1
    //      stroke color
    //          random
    //          same
    //  fill only
    //      fill color
    //          random
    //          same
    //  stroke & fill
    //      stroke width
    //          random
    //          same, 1
    //      stroke color
    //          random
    //          same
    //      fill color
    //          random
    //          same
};

const getRandomStrokeWidth = (shapeCount) => {
    // shape size around 250 total
    // shapeCount 200 needs lineWidth of 1;
    // ...        150 could be ...       2
    // ...        100 could be ...       3
    // ...         90 could be ...       4
    // ...         70 could be ...       5
    let dice;
    switch (shapeCount) {
        case shapeCount > 200:
            dice = 1;
            break;
        case shapeCount > 150:
            dice = roll(2);
            break;
        case shapeCount > 100:
            dice = roll(3);
            break;
        case shapeCount > 90:
            dice = roll(4);
            break;
        default:
            dice = roll(5);
            break;
    }
    return dice;
};

const getShapeFunction = (shape) => {
    let shapeFunction;
    // let altShape = 'square';
    switch (shape) {
        case 'circle':
            shapeFunction = drawCircle;
            break;
        case 'square':
            shapeFunction = drawSquare;
            break;
        case 'line':
            shapeFunction = drawCircle;
            break;
        case 'oval':
            shapeFunction = drawSquare;
            break;
        case 'rectangle':
            shapeFunction = drawCircle;
            break;
        default:
            console.log('error in oneShape roll shape variable');
            break;
    }
    return shapeFunction;
};

const oneShape = () => {
    // const buildStats = getBuildStats();
    // for (let key in buildStats) {
    //     console.log(key, buildStats[key]);
    // }

    // const percent = currentPass / totalPasses;
    // const useSize = width > height ? width : height;
    // const useHalfSize = useSize / 2;
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ mandala loop
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||
    const loopCount = 5;
    // const loopCount = roll(5);
    let percent;
    const useSize = width > height ? width : height;
    const useHalfSize = useSize / 2;
    // const maxHalfPath = findHypotenuse(halfWidth, halfHeight);
    // const maxFullPath = findHypotenuse(width, height);
    //|||||||||||||||||||||||||||||||||stats|||||||||||||||||||

    const shapeSizeType = getShapeSizeType(); // need to build still
    let shapeSize;
    const shapeArr = getShapeArr(loopCount, 'same');
    // let shape;
    console.log(shapeArr);

    const background = getBackground();
    //paint background here
    let inputObj = {
        currentLoop: null,
        loopCount: null,
        pathRadius: null,
        useSize,
        useHalfSize,
        maxFullPath: findHypotenuse(width, height),
        maxHalfPath: findHypotenuse(halfWidth, halfHeight),
        background,
        blendMode: null,
        shapeSizeType,
        shapeSize: 50,
        shapeCount: 20,
        shapeArr,
        shape: null,
        shapeFunction: null,
        strokeWidth: 1,
        strokeColor: randomColor(),
        fillColor: randomColor(),
        clearSwitch: false,
        fillSwitch: false,
        testInput: 'hello',
    };
    console.log(inputObj.background);
    console.log(inputObj.background);
    console.log(inputObj.background);
    console.log(inputObj.background);
    console.log(inputObj.background);
    console.log(inputObj.background);
    console.log(inputObj.background);
    // debugger;

    const blendModeInput = inputObj.clearSwitch === true ? 4 : 3;
    inputObj.blendMode = getBlendMode(blendModeInput);
    //write things needing before the loop
    //write things needed in loop
    // const shape = inputs.shapeArr[inputs.currentLoop - 1]; // -1 because this stops at 1 and internal array goes to 0
    // ctx2.beginPath();
    ctx2.rect(0, 0, width, height);
    ctx2.fillStyle = background;
    ctx2.fill();
    // ctx2.closePath();
    console.log(background);

    for (let currentLoop = loopCount; currentLoop > 0; currentLoop--) {
        inputObj.currentLoop = currentLoop;
        inputObj.loopCount = loopCount;
        inputObj.shape = shapeArr[currentLoop - 1];
        // debugger;
        inputObj.shapeFunction = getShapeFunction(inputObj.shape);

        // const newInputObj = loop(inputObj);
        console.log(inputObj, newInputObj);
        inputObj = newInputObj;
    }

    //get loop count: *******************
    //  2 - idk yet 5?

    //////get shape type: *******************
    //////  random
    //////  same
    //////  increment

    //////get shape style: *******************
    //////  circle, square, line, oval, rectangle

    //////get shape size: *******************
    //////  random
    //////  fixed

    //////get background type: *******************
    //////  none
    //////  single color
    //////  gradient mesh

    //get fill type: *******************
    //  stroke only
    //      stroke width
    //          random
    //          same
    //      stroke color
    //          random
    //          same
    //  fill only
    //      fill color
    //          random
    //          same
    //  stroke & fill
    //      stroke width
    //          random
    //          same
    //      stroke color
    //          random
    //          same
    //      fill color
    //          random
    //          same
};

export {
    oneShape,
    getShapeFunction,
    getStrokeAndFillType,
    getRandomStrokeWidth,
};

// const percent = currentPass / totalPasses;
// const useSize = width > height ? width : height;
// const useHalfSize = useSize / 2;

// const sizeBasedOnIndex = Math.ceil(useSize * percent);
// const halfSizeBasedOnIndex = Math.ceil(useHalfSize * percent);
// const countBasedOnIndex = Math.ceil((100 * percent) / 2);

// const maxHalfPath = findHypotenuse(halfWidth, halfHeight);
// const maxFullPath = findHypotenuse(width, height);

// const randomColorValue = randomColor();
// let shapeCount;
// let shapeSize;
// let pathRadius;

// if (currentPass === totalPasses) {
//     pathRadius = rollRange(maxHalfPath, maxFullPath); // between halfWidth and width
//     shapeCount = rollRange(4, 200); // 4-200 what looks good
//     shapeSize = pathRadius;
// } else {
//     shapeCount = rollRange(20, halfSizeBasedOnIndex);

//     shapeSize = rollRange(20, halfSizeBasedOnIndex);
//     pathRadius = halfSizeBasedOnIndex; // max is width or height min is 10?

//     let improperSpacing = shapeSize - pathRadius;
//     while (improperSpacing >= -5 && improperSpacing <= 5) {
//         console.log(
//             'improperspacing while loop, changing pathRadius variable'
//         );
//         shapeSize = rollRange(20, halfSizeBasedOnIndex);
//         improperSpacing = shapeSize - pathRadius;
//     }

// }
