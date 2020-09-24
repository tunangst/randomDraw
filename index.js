// import boxDrawing from './codeBank/boxDrawing/boxDrawing.js';
import randomDraw from './codeBank/randomDraw.js';
import { randomColor } from './codeBank/boxDrawing/utilities.js';
const boxDrawing = randomDraw.boxDrawing;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('form submit');
    const form = event.target.elements;
    const typeOfDrawing = form.typeOfDrawing.value;
    const typeOfStyle = form.typeOfStyle.value;
    const canvasSize = form.canvasSize.value;
    const boxCount = form.boxCount.value;

    // const primaryToggle = form.primaryToggle.value === 'on' ?

    const defaultPrimary = '#000000';
    const defaultSecondary = null;
    const defaultBackground = '#ffffff00';

    const primaryColor =
        form.primaryToggle.value === 'default'
            ? defaultPrimary
            : form.primaryToggle.value === 'random'
            ? randomColor()
            : form.primaryColor.value;

    const secondaryColor =
        form.secondaryToggle.value === 'default'
            ? defaultSecondary
            : form.secondaryToggle.value === 'random'
            ? randomColor()
            : form.secondaryColor.value;

    const backgroundColor =
        form.backgroundToggle.value === 'default'
            ? defaultBackground
            : form.backgroundToggle.value === 'random'
            ? randomColor()
            : form.backgroundColor.value;

    console.log(typeOfDrawing);
    console.log(typeOfStyle);
    console.log(canvasSize);
    console.log(boxCount);
    console.log(primaryColor);
    console.log(secondaryColor);
    console.log(backgroundColor);

    //get info here
    let setObj = {
        typeOfStyle,
        canvasSize,
        boxCount,
        primaryColor,
        secondaryColor,
        backgroundColor,
    };
    if (typeOfDrawing === 'Box Drawing') boxDrawing(setObj);
});

// boxDrawing();
