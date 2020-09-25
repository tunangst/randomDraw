import specials from './specials/specials.js';
import singles from './singles/singles.js';
import doubles from './doubles/doubles.js';
import { roll } from '../utilities.js';
import {
    draw,
    createPixelMap,
    clear,
    randomColor,
} from './boxDrawingUtilities.js';

let typeOfStyle = 'random';

let canvasSize = 500;
let boxCount = 10;
let pixelSize = canvasSize / boxCount; //draw section divided by how many pixels across
let drawSection = canvasSize / 2;
let primaryToggle = 'default';
let primaryColor = '#000000';
let secondaryColor = randomColor();
let secondaryToggle = 'default';
let backgroundColor = '#ffffff00';
let backgroundToggle = 'default';

let canvasPreview = document.querySelector('#preview');
let canvasDraw = document.querySelector('#draw');
let ctx = canvasPreview.getContext('2d');
let ctx2 = canvasDraw.getContext('2d');
let matrix = [];

const boxDrawing = (props) => {
    console.log(primaryToggle, secondaryToggle, backgroundToggle);
    typeOfStyle = props.typeOfStyle;

    canvasSize = props.canvasSize;
    boxCount = props.boxCount;

    primaryToggle = props.primaryToggle;
    switch (primaryToggle) {
        case 'default':
            primaryColor = '#000000';
            break;
        case 'random':
            primaryColor = randomColor();
            break;
        case 'choose':
            primaryColor = props.primaryColor;
            break;
        default:
            console.log('error in primarytoggle');
            break;
    }

    secondaryToggle = props.secondaryToggle;
    switch (secondaryToggle) {
        case 'default':
            secondaryColor = randomColor(); //new color seed on refresh;
            break;
        case 'random':
            secondaryColor = randomColor();
            break;
        case 'choose':
            secondaryColor = props.secondaryColor;
            break;
        default:
            console.log(secondaryToggle);
            console.log('error in secondaryToggle');
            break;
    }

    backgroundToggle = props.backgroundToggle;
    switch (backgroundToggle) {
        case 'default':
            backgroundColor = '#ffffff00';
            break;
        case 'random':
            backgroundColor = randomColor();
            break;
        case 'choose':
            backgroundColor = props.backgroundColor;
            break;
        default:
            console.log('error in backgroundToggle');
            break;
    }

    if (canvasDraw.getContext) {
        matrix = clear(matrix);
        createPixelMap(matrix);

        draw(matrix, null, null); // draw on ctx not ctx2

        switch (typeOfStyle) {
            case 'random':
                let dice = roll(3);
                switch (dice) {
                    case 1:
                        specials(matrix);
                        break;
                    case 2:
                        singles(matrix);
                        break;
                    case 3:
                        doubles(matrix);
                        break;
                    default:
                        console.log('error in layout variable no dice');
                        break;
                }
                break;
            case 'full clone':
                specials(matrix, 'fullClone');
                break;
            case 'full reflect':
                specials(matrix, 'fullReflect');
                break;
            case 'full rotate':
                specials(matrix, 'fullRotate');
                break;
            case 'half reflect':
                specials(matrix, 'halfReflect');
                break;
            default:
                console.log('error in type of style switch cases');
                break;
        }

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
        //  singles x4
        //      clone
        //      rotate
        //      reflect
        //  doubles x2
        //      clone
        //      rotate
        //      reflect
        //  singles x2 doubles x1
        //      clone (rotate, reflect, clone)
        //      rotate (reflect, clone, rotate)
        //      reflect (clone, rotate, reflect)
        //
        //  specials
        //      full clone (4 clone)
        //      full rotate (4 singles)
        //      full reflect (4 singles)
        //      half reflect (vertical, horizontal)
        //
        //  roll #1: type (singles x4, doubles x2, singles x2 doubles x1, specials)
        //  roll #2: ↓
        //      singles x4
        //          quadrant (1,2,3,4)
        //          type (clone, rotate, reflect)
        //          ... x4
        //      doubles x1 singles x2
        //          quadrant (vertical, horizontal)
        //          type (clone, rotate, reflect)
        //              type (clone, rotate, reflect)
        //      specials
        //          type (full clone, full rotate, full reflect, half reflect)
        //
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~options~~~~~~~~~~~~~~~~~
    } else {
        alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
};

export {
    boxDrawing,
    typeOfStyle,
    canvasSize,
    boxCount,
    pixelSize,
    drawSection,
    primaryColor,
    secondaryColor,
    backgroundColor,
    canvasPreview,
    canvasDraw,
    ctx,
    ctx2,
};
