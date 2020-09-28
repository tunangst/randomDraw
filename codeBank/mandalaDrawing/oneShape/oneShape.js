import { roll } from '../../utilities.js';
import {
    ctx,
    ctx2,
    halfWidth,
    halfHeight,
    height,
    width,
} from '../mandalaDrawing.js';
// import { drawCircle } from '../mandalaDrawingUtilities';

const getShape = (shapeRoll) => {};

const getBuildStats = () => {
    const rollShapeFunctionType = roll(1); // 1: circle, 2: square, 3: triangle 4: line, ?? 5: oval, 6: rectangle
    let shapeFunctionTypeResult;

    switch (rollShapeFunctionType) {
        case 1:
            shapeFunctionTypeResult = 'drawCircle';
            break;
        case 2:
            shapeFunctionTypeResult = 'square';
            break;
        case 3:
            shapeFunctionTypeResult = 'triangle';
            break;
        case 4:
            shapeFunctionTypeResult = 'line';
            break;
        case 5:
            shapeFunctionTypeResult = 'oval';
            break;
        case 6:
            shapeFunctionTypeResult = 'rectangle';
            break;
        default:
            console.log('error in oneShape rollShapeFunctionType');
            break;
    }

    const rollShapeSizeType = roll(2);

    let shapeSizeTypeResult = rollShapeSizeType === 1 ? 'random' : 'fixed';

    const rollColorType = roll(2);

    let colorTypeResult = rollColorType === 1 ? 'random' : 'same';

    const rollFillType = roll(3);

    let fillTypeResult =
        rollFillType === 1
            ? 'stroke only'
            : rollFillType === 2
            ? 'fill only'
            : 'fill then stroke';

    const rollStrokeSizeType = roll(2);

    let strokeSizeResult = rollStrokeSizeType === 1 ? 'random' : 'same';

    const rollBackgroundType = roll(3);

    let backgroundTypeResult =
        rollBackgroundType === 1
            ? 'stroke only'
            : rollBackgroundType === 2
            ? 'fill only'
            : 'fill then stroke';

    const rollLoopCount = roll(5);

    return {
        shapeFunctionTypeResult,
        shapeSizeTypeResult,
        colorTypeResult,
        fillTypeResult,
        strokeSizeResult,
        backgroundTypeResult,
        loopCount: rollLoopCount,
    };
};

const oneShape = () => {
    const buildStats = getBuildStats();
    for (let key in buildStats) {
        console.log(key, buildStats[key]);
    }

    // const percent = currentPass / totalPasses;
    // const useSize = width > height ? width : height;
    // const useHalfSize = useSize / 2;

    for (
        let currentPass = buildStats.loopCount;
        currentPass > 0;
        currentPass--
    ) {
        console.log(currentPass, buildStats.loopCount);
        // getShape(currentPass, getNumberOfShapes);
    }

    // const sizeBasedOnIndex = Math.ceil(useSize * percent);
    // const halfSizeBasedOnIndex = Math.ceil(useHalfSize * percent);
    // const countBasedOnIndex = Math.ceil((100 * percent) / 2);

    // const maxHalfPath = findHypotenuse(halfWidth, halfHeight);
    // const maxFullPath = findHypotenuse(width, height);
};

export default oneShape;

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
