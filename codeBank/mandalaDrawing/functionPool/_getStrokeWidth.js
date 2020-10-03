import { roll } from '../../utilities.js';
const getStrokeWidth = (shapeCount) => {
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

export default getStrokeWidth;
