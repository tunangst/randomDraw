class PointNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const getPoints = (x, y, width, height) => {
    const pointA = new PointNode(x, y);
    const pointB = new PointNode(width - x, y);
    const pointC = new PointNode(1, height - y);
    const pointD = new PointNode(width - x, height - y);
    return {
        pointA,
        pointB,
        pointC,
        pointD,
    };
};

const mandalaDraw = () => {};

// ctx.fillStyle = pixel.color;
// ctx.fillRect(calcX, calcY, pixelSize, pixelSize);
// ctx.strokeStyle = `rgb(255, 255, 255)`;
// ctx.strokeRect(calcX, calcY, pixelSize, pixelSize);

export { PointNode, getPoints, mandalaDraw };
