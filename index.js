import randomDraw from './randomDraw.js';
import boxDrawerTemplate from './htmlTemplates/boxDrawerTemplate.js';
randomDraw();

let forceDesignObj = {};

// const form = document.querySelector('form');
const typeOfDrawerElement = document.querySelector('#typeOfDrawer');
const randomDrawerBtn = document.querySelector('#randomDrawerBtn');
const boxDrawerBtn = document.querySelector('#boxDrawerBtn');
const mandalaDrawerBtn = document.querySelector('#mandalaDrawerBtn');
const dimensionWidth = document.querySelector('#dimensionWidth');
const dimensionHeight = document.querySelector('#dimensionHeight');
const controls = document.querySelector('.controls');

randomDrawerBtn.addEventListener('click', (event) => {
    forceDesignObj.typeOfDrawer = 'randomDraw';
    forceDesignObj.dimensions = {
        width: dimensionWidth.value,
        height: dimensionHeight.value,
    };
    randomDraw(forceDesignObj);
});
boxDrawerBtn.addEventListener('click', (event) => {
    forceDesignObj.typeOfDrawer = 'boxDraw';
    forceDesignObj.dimensions = {
        width: dimensionWidth.value,
        height: dimensionHeight.value,
    };
    randomDraw(forceDesignObj);
    controls.innerHTML = controls.innerHTML + boxDrawerTemplate();
});
mandalaDrawerBtn.addEventListener('click', (event) => {
    forceDesignObj.typeOfDrawer = 'mandalaDraw';
    forceDesignObj.dimensions = {
        width: dimensionWidth.value,
        height: dimensionHeight.value,
    };
    randomDraw(forceDesignObj);
});

// const typeOfStyle = form.typeOfStyle.value;
// const boxCount = form.boxCount.value;

// const primaryToggle = form.primaryToggle.value;
// const primaryColor = form.primaryColor.value;

// const secondaryToggle = form.secondaryToggle.value;
// const secondaryColor = form.secondaryColor.value;

// const backgroundToggle = form.backgroundToggle.value;
// const backgroundColor = form.backgroundColor.value;

// typeOfDrawerElement.addEventListener('change', (event) => {
//     const drawer = event.target.value;
//     switch (drawer) {
//         case 'Box Drawing':
//             form.innerHTML = form.innerHTML + boxDrawerTemplate();
//             break;
//         case 'Mandala Drawing':
//             form.innerHTML = form.innerHTML + boxDrawerTemplate();
//             break;

//         default:
//             console.log('error in index type of drawing');
//             break;
//     }
// });

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('form submit');
//     const form = event.target.elements;

//     //get info here
//     let setObj = {
//         typeOfDrawer,
//         dimentions, //{width: x, height: y}
//     };
//     boxCount,
//     primaryToggle,
//     primaryColor,
//     secondaryToggle,
//     secondaryColor,
//     backgroundToggle,
//     backgroundColor,
// };
// let setObj = {
//     typeOfStyle,
//     canvasSize,
//     boxCount,
//     primaryToggle,
//     primaryColor,
//     secondaryToggle,
//     secondaryColor,
//     backgroundToggle,
//     backgroundColor,
// };
// if (typeOfDrawing === 'random') randomDrawing(setObj);
// if (typeOfDrawing === 'Box Drawing') BoxDrawing(setObj);
// if (typeOfDrawing === 'Mandala Drawing') MandalaDrawing(setObj);
// });

// randomDraw();
