const roll = (range) => {
    // 1 - range
    return Math.floor(Math.random() * range + 1);
};
const rollRange = (min, max) => {
    const answer = Math.floor(Math.random() * (max - min + 1)) + min;
    return answer;
};

const coinFlip = () => {
    const coin = roll(2);
    const face = coin === 1 ? true : false;
    return face;
};

const clear = (matrix, { ctx, ctx2, canvasSize }) => {
    matrix = [];
    ctx && ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx2 && ctx2.clearRect(0, 0, canvasSize, canvasSize);
    return matrix;
};

const randomColor = () => {
    const randomR = roll(256);
    const randomG = roll(256);
    const randomB = roll(256);
    return `rgb(${randomR},${randomG},${randomB})`;
};

const lightColor = (shapeCount) => {
    const randomH = rollRange(0, 360);
    const randomS = rollRange(0, 100);
    let randomL;
    if (shapeCount > 150) {
        randomL = 99;
    } else if (shapeCount > 100) {
        randomL = rollRange(95, 99); //0=black 50=normal 100=white
    } else if (shapeCount > 50) {
        randomL = rollRange(90, 99); //0=black 50=normal 100=white
    } else {
        randomL = rollRange(80, 99); //0=black 50=normal 100=white
    }
    return `hsl(${randomH},${randomS}%,${randomL}%)`;
};

const darkColor = (shapeCount) => {
    const randomH = rollRange(0, 360);
    const randomS = rollRange(0, 100);
    let randomL;
    // debugger;
    if (shapeCount > 150) {
        randomL = 1;
    } else if (shapeCount > 100) {
        randomL = rollRange(5, 1); //0=black 50=normal 100=white
    } else if (shapeCount > 50) {
        randomL = rollRange(10, 1); //0=black 50=normal 100=white
    } else {
        randomL = rollRange(20, 1); //0=black 50=normal 100=white
    }
    return `hsl(${randomH},${randomS}%,${randomL}%)`;
};

export { roll, rollRange, coinFlip, clear, randomColor, lightColor, darkColor };
