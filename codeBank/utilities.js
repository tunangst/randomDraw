const roll = (range) => {
    const test = Math.floor(Math.random() * range + 1); // 1 - range
    return test;
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

export { roll, clear, randomColor };
