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
    if (shapeCount > 70) {
        randomL = rollRange(85, 95); //0=black 50=normal 100=white
    } else if (shapeCount > 130) {
        randomL = rollRange(90, 95); //0=black 50=normal 100=white
    } else if (shapeCount > 180) {
        randomL = 98;
    } else {
        randomL = rollRange(50, 95); //0=black 50=normal 100=white
    }
    console.log(`hsl(${randomH},${randomS}%,${randomL}%)`);
    return `hsl(${randomH},${randomS}%,${randomL}%)`;
};

export { roll, rollRange, coinFlip, clear, randomColor, lightColor };
