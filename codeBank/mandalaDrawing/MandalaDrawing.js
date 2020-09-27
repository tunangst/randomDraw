import { PointNode, mandalaDraw } from './mandalaDrawingUtilities.js';
//looks like ctx.moveTo(x,y) is very powerful here

// let typeOfStyle = 'random';

let canvasPreview = document.querySelector('#preview');
let canvasDraw = document.querySelector('#draw');
let ctx = canvasPreview.getContext('2d');
let ctx2 = canvasDraw.getContext('2d');

let canvasSize = 500;
let height = 500;
let width = 500;
let boxCount = 10;
let pixelSize = canvasSize / boxCount; //draw section divided by how many pixels across
let halfWidth = canvasSize / 2;
let halfHeight = canvasSize / 2;
let primaryToggle = 'default';
let primaryColor = '#000000';
// let secondaryColor = randomColor();
let secondaryToggle = 'default';
let backgroundColor = '#ffffff00';
let backgroundToggle = 'default';
let matrix = [];

const MandalaDrawing = () => {
    console.log('MandalaDrawing');
    mandalaDraw();
};

export { MandalaDrawing, ctx, ctx2, height, width, halfWidth, halfHeight };
