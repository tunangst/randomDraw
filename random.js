const canvas = document.querySelector('canvas');
const primaryColor = `rgb(0,0,0)`;
const randomSecondary = () => {
    const randomColorHex = () => {
        return Math.round(Math.random() * 255);
    };
    const randomR = randomColorHex();
    const randomG = randomColorHex();
    const randomB = randomColorHex();
    const color = `rgb(${randomR},${randomG},${randomB})`;
    console.log(color);
    return color;
};
const secondaryColor = randomSecondary();
const emptyColor = `rgba(0,0,0,.0)`;
const canvasSize = 500;
const drawSection = 250;
// const borderSize = 1;
const pixelSize = drawSection / 5; //draw section divided by how many pixels across
console.log(pixelSize);
let xPos = 0; //starting position
let yPos = 0; //starting position
// ^^^^^^^^^^^^^^^^^^ variables ^^^^^^^^^^^^^^^^^^^^^^

const whatToPlace = (xStart, yStart) => {
    const random = Math.round(Math.random() * 2 + 1); // 1-3
    ctx.strokeStyle = `rgb(255, 255, 255)`;
    ctx.strokeRect(xStart, yStart, pixelSize, pixelSize);
    ctx.fillRect(xStart, yStart, pixelSize, pixelSize);
    switch (random) {
        case 1:
            ctx.fillStyle = emptyColor;
            break;
        case 2:
            ctx.fillStyle = primaryColor;
            // ctx.fillRect(xStart, 50, pixelSize, pixelSize);
            break;
        case 3:
            ctx.fillStyle = secondaryColor;
            // ctx.strokeStyle = `rgb(255, 255, 255)`;
            // ctx.strokeRect(xStart, 50, pixelSize, pixelSize);
            break;
        default:
            console.log('error, sorry');
    }
};
const rotateTimesThree = () => {
    const rotation = (80 * Math.PI) / 180;
    let cloneData = ctx;
    ctx.rotate(rotation);
    ctx.drawImage(canvas, 250, 0);
    ctx.rotate(-rotation);

    // let cloneData = ctx.getImageData(0, 0, 250, 250);
    // let rotateData = cloneData.rotate((90 * Math.PI) / 180);
    // ctx.translate(250, 0);
    // debugger;
    // ctx.translate(-150, -75);

    //(scale horizontal, skew horizontal, skew vertical, scale vertical, moves horizontal, moves vertical)
    // ctx.putImageData(rotateData, 250, 0);
    // ctx.setTransform(0, 0, 0, 0, 250, 0);
};
const howToClone = () => {
    const random = Math.round(Math.random() * 2 + 1); // 1-3
    switch (random) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            console.log('error, sorry');
    }
};

if (canvas.getContext) {
    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ drawSection
    //this will cycle through y axis on pixel size
    for (let y = yPos; y < drawSection; y += pixelSize) {
        //this will cycle through x axis on pixel size
        for (let x = xPos; x < drawSection; x += pixelSize) {
            console.log(`${x} starting pixel draw,`);
            whatToPlace(x, y);
        }
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ drawSection
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ cloneSection

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ cloneSection

    // Draw shapes
    // ctx.fillStyle = secondaryColor;
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);
    rotateTimesThree();
} else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
}

// debugger;
