import {
    PointNode,
    getPoints,
    mandalaDraw,
} from './mandalaDrawingUtilities.js';
//looks like ctx.moveTo(x,y) is very powerful here

let canvasPreview = document.querySelector('#preview');
let canvasDraw = document.querySelector('#draw');
let ctx = canvasPreview.getContext('2d');
let ctx2 = canvasDraw.getContext('2d');
let matrix = [];

const MandalaDrawing = () => {
    console.log('MandalaDrawing');
    mandalaDraw();
};

export { MandalaDrawing, ctx, ctx2 };
