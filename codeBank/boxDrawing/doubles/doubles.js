import { drawSection } from '../boxDrawing.js';
import { roll } from '../../utilities.js';
import { draw } from '../boxDrawingUtilities.js';
import clone from '../singles/clone.js';
import {
    reflectHorizontalAxis,
    reflectVerticalAxis,
} from '../singles/reflect.js';
import { rotateClockwise, rotateCounterClockwise } from '../singles/rotate.js';
import {
    combineMatrixTopHalf,
    combineMatrixLeftHalf,
} from '../boxDrawingUtilities.js';

const doubles = (matrix) => {
    console.log(`doubles layout`);
    //  roll #1: ↓
    //      singles x1
    //          quadrant (2,3)
    //          type (clone, rotate [r, l], reflect [r, l])
    //      quadrants
    //          _________
    //          |_1_|_2_|  {x: 0, y: 0}             ,{x: drawSection, y: 0}
    //          |_3_|_4_|  {x: 0, y: drawSection}   ,{x: drawSection, y: drawSection}
    //      type
    //          1 = clone
    //          2 = rotate
    //          3 = reflect
    //  roll #2: ↓
    //      type (clone, rotate x2, reflect)

    draw(matrix);
    const quadrantDice = roll(2); // 1 = q2. 2 = q3
    const styleDice = roll(3); // 1= clone, 2= rotate, 3= reflect
    const doubleDice = roll(3); // 1= clone, 2= rotate x2, 3= reflect
    let directionDice = 0;
    let adjustedMatrix = [];

    const quadrant =
        quadrantDice === 1
            ? { x: drawSection, y: 0 }
            : { x: 0, y: drawSection };
    const quadrantDouble =
        quadrantDice === 1
            ? { x: 0, y: drawSection }
            : { x: drawSection, y: 0 };

    switch (styleDice) {
        case 1:
            console.log(`clone`);
            adjustedMatrix = clone(matrix, quadrant.x, quadrant.y);
            draw(adjustedMatrix);
            break;
        case 2:
            console.log(`rotate`);
            directionDice = roll(2); // 1 = clockwise. 2 = counter clockwise
            directionDice === 1
                ? (adjustedMatrix = rotateClockwise(
                      matrix,
                      quadrant.x,
                      quadrant.y
                  ))
                : (adjustedMatrix = rotateCounterClockwise(
                      matrix,
                      quadrant.x,
                      quadrant.y
                  ));
            console.log(
                directionDice === 1 ? 'clockwise' : 'counter clockwise'
            );
            draw(adjustedMatrix);
            break;
        case 3:
            console.log(`reflect`);
            directionDice = roll(2); // 1 = vertical axis reflect. 2 = horizontal axis reflect
            directionDice === 1
                ? (adjustedMatrix = reflectVerticalAxis(
                      matrix,
                      quadrant.x,
                      quadrant.y
                  ))
                : (adjustedMatrix = reflectHorizontalAxis(
                      matrix,
                      quadrant.x,
                      quadrant.y
                  ));
            console.log(
                directionDice === 1 ? 'vertical axis' : 'horizontal axis'
            );
            draw(adjustedMatrix);
            break;
        default:
            console.log('error in style dice variable');
            break;
    }

    let combinedMatrix = [];
    quadrantDice === 1
        ? (combinedMatrix = combineMatrixTopHalf(matrix, adjustedMatrix))
        : (combinedMatrix = combineMatrixLeftHalf(matrix, adjustedMatrix));
    let rotatedMatrix = [];
    let reflectedMatrix = [];

    switch (doubleDice) {
        case 1:
            console.log(`clone`);
            draw(combinedMatrix, quadrantDouble.x, quadrantDouble.y);
            break;
        case 2: //quadrantDice === 1, combine top
            console.log(`rotate`);
            rotatedMatrix = rotateClockwise(
                rotateClockwise(combinedMatrix),
                quadrantDouble.x,
                quadrantDouble.y
            ); // rotate twice
            draw(rotatedMatrix);
            break;
        case 3: // quadrantDice === 1, reflect horizontal : reflect vertical
            console.log(`reflect`);
            reflectedMatrix =
                quadrantDice === 1
                    ? reflectHorizontalAxis(
                          combinedMatrix,
                          quadrantDouble.x,
                          quadrantDouble.y
                      )
                    : reflectVerticalAxis(
                          combinedMatrix,
                          quadrantDouble.x,
                          quadrantDouble.y
                      );
            draw(reflectedMatrix);

            break;

        default:
            console.log('error in style dice variable');
            break;
    }
};

export default doubles;
