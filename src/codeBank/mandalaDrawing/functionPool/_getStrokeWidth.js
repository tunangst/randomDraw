import { roll } from '../../utilities.js';
const getStrokeWidth = (shapeCount) => {
    let dice;
    switch (shapeCount) {
        case shapeCount > 100:
            dice = 1;
            break;
        case shapeCount > 90:
            dice = roll(2);
            break;
        case shapeCount > 60:
            dice = roll(3);
            break;
        case shapeCount > 40:
            dice = roll(4);
            break;
        default:
            dice = roll(5);
            break;
    }
    return dice;
};

export default getStrokeWidth;
