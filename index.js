import randomDraw from './codeBank/randomDraw.js';

const BoxDrawing = randomDraw.BoxDrawing;
const MandalaDrawing = randomDraw.MandalaDrawing;
const randomDrawing = randomDraw.randomDrawing;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('form submit');
    const form = event.target.elements;
    const typeOfDrawing = form.typeOfDrawing.value;
    const typeOfStyle = form.typeOfStyle.value;
    const canvasSize = form.canvasSize.value;
    const boxCount = form.boxCount.value;

    const primaryToggle = form.primaryToggle.value;
    const primaryColor = form.primaryColor.value;

    const secondaryToggle = form.secondaryToggle.value;
    const secondaryColor = form.secondaryColor.value;

    const backgroundToggle = form.backgroundToggle.value;
    const backgroundColor = form.backgroundColor.value;

    //get info here
    let setObj = {
        typeOfStyle,
        canvasSize,
        boxCount,
        primaryToggle,
        primaryColor,
        secondaryToggle,
        secondaryColor,
        backgroundToggle,
        backgroundColor,
    };
    if (typeOfDrawing === 'random') randomDrawing(setObj);
    if (typeOfDrawing === 'Box Drawing') BoxDrawing(setObj);
    if (typeOfDrawing === 'Mandala Drawing') MandalaDrawing(setObj);
});
