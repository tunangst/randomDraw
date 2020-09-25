import { boxDrawing } from './boxDrawing/boxDrawing.js';

const roll = Math.round(Math.random() + 1);
let randomDrawing;
switch (roll) {
    case 1:
        randomDrawing = boxDrawing;
        break;
    case 2:
        randomDrawing = boxDrawing;
        break;
    default:
        console.log('error in randomDraw random roll');
        break;
}

export default randomDrawing;
