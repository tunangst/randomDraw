import { randomColor } from './utilities.js';
import canvasSize1 from './boxDrawing.js';

export const canvasPreview = document.querySelector('#preview');
export const canvasDraw = document.querySelector('#draw');
export const ctx = canvasPreview.getContext('2d');
export const ctx2 = canvasDraw.getContext('2d');
// const primaryColor = `black`;
export const primaryColor = `rgb(0,0,0)`;
// const secondaryColor = 'teal';
export let secondaryColor = randomColor();
// const emptyColor = `white`;
export const emptyColor = `rgba(0,0,0,.0)`;
export const canvasSize = 500;
export const drawSection = canvasSize / 2;
// const borderSize = 1;
export const pixelSize = drawSection / 5; //draw section divided by how many pixels across
console.log(`pixel size = ${pixelSize}`);
export let xPos = 0; //starting position
export let yPos = 0; //starting position
// export let matrix = [];
