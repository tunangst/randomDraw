import { roll, findQuadrantOrder, draw } from '../utilities.js';
import clone from './clone.js';
import { reflectVerticalAxis, reflectHorizontalAxis } from './reflect.js';
import { rotateClockwise, rotateCounterClockwise } from './rotate.js';

const singles = (matrix) => {
    console.log(`singles layout`);
    //  roll #2: ↓
    //      singles x4
    //          quadrant (1,2,3,4)
    //          type (clone, rotate, reflect)
    //          ... x4
    //      quadrants
    //          _________
    //          |_1_|_2_|  {x: 0, y: 0}     ,{x: 250, y: 0}
    //          |_3_|_4_|  {x: 0, y: 250}   ,{x: 250, y: 250}
    //      rolls
    //          1 = clone
    //          2 = reflect
    //          3 = rotate

    const quadrantDice = findQuadrantOrder();
    const styleDice = [1, roll(3), roll(3), roll(3)];

    console.log(quadrantDice);
    console.log(styleDice);
    styleDice.forEach((number, index) => {
        const xPos = quadrantDice[index].x;
        const yPos = quadrantDice[index].y;
        let adjustedMatrix = [];
        switch (number) {
            case 1:
                console.log(`clone`);
                adjustedMatrix = clone(matrix, xPos, yPos);

                draw(adjustedMatrix);

                break;
            case 2:
                console.log(`reflect`);
                const directionDiceReflect = roll(2); // 1 = vertical axis reflect. 2 = horizontal axis reflect
                console.log(
                    `${
                        directionDiceReflect === 1
                            ? 'vertical axis reflect'
                            : 'horizontal axis reflect'
                    }`
                );
                directionDiceReflect === 1
                    ? (adjustedMatrix = reflectVerticalAxis(matrix, xPos, yPos))
                    : (adjustedMatrix = reflectHorizontalAxis(
                          matrix,
                          xPos,
                          yPos
                      ));

                draw(adjustedMatrix);

                break;
            case 3:
                console.log(`rotate`);
                // const directionDiceRotate = roll(2); // 1 = clockwise rotate. 2 = counter clockwise rotate
                const directionDiceRotate = 2; // 1 = clockwise rotate. 2 = counter clockwise rotate
                console.log(
                    `${
                        directionDiceRotate === 1
                            ? 'clockwise rotate'
                            : 'counter clockwise rotate'
                    }`
                );
                directionDiceRotate === 1
                    ? (adjustedMatrix = rotateClockwise(matrix, xPos, yPos))
                    : (adjustedMatrix = rotateCounterClockwise(
                          matrix,
                          xPos,
                          yPos
                      ));

                // adjustedMatrix = rotate(matrix, xPos, yPos);

                draw(adjustedMatrix);

                break;
            default:
                console.log('error in number variable');
                break;
        }
    });
};

export default singles;
