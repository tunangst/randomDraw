import { randomSecondary } from './utilities.js';

export const canvas = document.querySelector('#draw');
export const canvas2 = document.querySelector('#full');
export const ctx = canvas.getContext('2d');
export const ctx2 = canvas2.getContext('2d');
// const primaryColor = `black`;
export const primaryColor = `rgb(0,0,0)`;
// const randomSecondary = () => {
//     const randomColorHex = () => {
//         return Math.round(Math.random() * 255);
//     };
//     const randomR = randomColorHex();
//     const randomG = randomColorHex();
//     const randomB = randomColorHex();
//     const color = `rgb(${randomR},${randomG},${randomB})`;
//     console.log(color);
//     return color;
// };
// const secondaryColor = 'teal';
export let secondaryColor = randomSecondary();
// const emptyColor = `white`;
export const emptyColor = `rgba(0,0,0,.0)`;
export const canvasSize = 500;
export const drawSection = canvasSize / 2;
// const borderSize = 1;
export const pixelSize = drawSection / 2; //draw section divided by how many pixels across
console.log(`pixel size = ${pixelSize}`);
export let xPos = 0; //starting position
export let yPos = 0; //starting position
export let matrix = [];
