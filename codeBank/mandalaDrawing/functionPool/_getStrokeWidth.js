const findWidth = (shapeCount) => {
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
const getStrokeWidth = (type, shapeCount) => {
    if (type === 'allNone' || type === 'none') {
        return 0;
    } else {
        return findWidth(shapeCount);
    }
};

export default getStrokeWidth;
