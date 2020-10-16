import randomDraw from './randomDraw.js';
// import { initBoxBtns } from './helperFunctions/helperFunctions.js';
import boxDrawerTemplate from './htmlTemplates/boxDrawerTemplate.js';
import mandalaDrawerTemplate from './htmlTemplates/mandalaDrawerTemplate.js';

let forceDesignObj = {
	typeOfDrawer: 'random',
	dimensions: {
		width: 500,
		height: 500,
	},
	boxDrawObj: {
		boxCount: 10,
	},
	mandalaDraw: {},
};
randomDraw(forceDesignObj);

// const form = document.querySelector('form');
const typeOfDrawerElement = document.querySelector('#typeOfDrawer');
const randomDrawerBtn = document.querySelector('#randomDrawerBtn');
const boxDrawerBtn = document.querySelector('#boxDrawerBtn');
const mandalaDrawerBtn = document.querySelector('#mandalaDrawerBtn');
const dimensionWidth = document.querySelector('#dimensionWidth');
const dimensionHeight = document.querySelector('#dimensionHeight');
const subControls = document.querySelector('.subControls');
let btns = document.querySelectorAll('.btns');

dimensionWidth.addEventListener('change', (event) => {
	forceDesignObj.dimensions.width = event.target.value;
});
dimensionHeight.addEventListener('change', (event) => {
	forceDesignObj.dimensions.height = event.target.value;
});
const initBoxBtnFunctions = () => {
	//boxCount
	const boxCount = document.querySelector('#boxCount');
	boxCount.addEventListener('change', (event) => {
		forceDesignObj.boxDrawObj.boxCount = event.target.value;
	});
	//boxCount
	//primaryColor
	const defaultPrimaryColorBtn = document.querySelector(
		'#defaultPrimaryColorBtn'
	);
	const randomPrimaryColorBtn = document.querySelector(
		'#randomPrimaryColorBtn'
	);
	const choosePrimaryColorBtn = document.querySelector(
		'#choosePrimaryColorBtn'
	);
	defaultPrimaryColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.primaryToggle = 'default';
		randomDraw(forceDesignObj);
	});
	randomPrimaryColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.primaryToggle = 'random';
		randomDraw(forceDesignObj);
	});
	choosePrimaryColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.primaryToggle = 'choose';
		forceDesignObj.boxDrawObj.primaryColor = event.target.children[0].value;
		randomDraw(forceDesignObj);
	});
	//primaryColor
	//secondaryColor
	const defaultSecondaryColorBtn = document.querySelector(
		'#defaultSecondaryColorBtn'
	);
	// const randomSecondaryColorBtn = document.querySelector(
	// 	'#randomSecondaryColorBtn'
	// );
	const chooseSecondaryColorBtn = document.querySelector(
		'#chooseSecondaryColorBtn'
	);
	defaultSecondaryColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.secondaryToggle = 'default';
		randomDraw(forceDesignObj);
	});
	// randomSecondaryColorBtn.addEventListener('click', (event) => {
	// 	forceDesignObj.boxDrawObj.secondaryToggle = 'random';
	// 	randomDraw(forceDesignObj);
	// });
	chooseSecondaryColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.secondaryToggle = 'choose';
		forceDesignObj.boxDrawObj.secondaryColor =
			event.target.children[0].value;
		randomDraw(forceDesignObj);
	});
	//secondaryColor
	//backgroundColor
	const defaultBackgroundColorBtn = document.querySelector(
		'#defaultBackgroundColorBtn'
	);
	const randomBackgroundColorBtn = document.querySelector(
		'#randomBackgroundColorBtn'
	);
	const chooseBackgroundColorBtn = document.querySelector(
		'#chooseBackgroundColorBtn'
	);
	defaultBackgroundColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.backgroundToggle = 'default';
		randomDraw(forceDesignObj);
	});
	randomBackgroundColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.backgroundToggle = 'random';
		randomDraw(forceDesignObj);
	});
	chooseBackgroundColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.backgroundToggle = 'choose';
		forceDesignObj.boxDrawObj.backgroundColor =
			event.target.children[0].value;
		randomDraw(forceDesignObj);
	});
	//backgroundColor
};
const initBtnActiveListeners = () => {
	btns = document.querySelectorAll('.btns');
	btns.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			const siblings = event.target.parentElement.children;
			//remove active class
			for (let i = 0; i < siblings.length; i++) {
				// siblings[i].removeClass('active');
				if (siblings[i].classList.contains('active')) {
					siblings[i].classList.remove('active');
				}
			}

			//issue active class
			event.target.classList.add('active');
		});
	});
};
initBtnActiveListeners();

randomDrawerBtn.addEventListener('click', (event) => {
	forceDesignObj.typeOfDrawer = 'randomDraw';
	forceDesignObj.dimensions = {
		width: dimensionWidth.value,
		height: dimensionHeight.value,
	};
	randomDraw(forceDesignObj);
});
let showBoxDrawFunctions = false;
boxDrawerBtn.addEventListener('click', (event) => {
	//clear options
	if (showMandalaDrawFunctions) {
		subControls.innerHTML = '';
		showMandalaDrawFunctions = false;
	}
	//get stats
	forceDesignObj.typeOfDrawer = 'boxDraw';
	forceDesignObj.dimensions = {
		width: dimensionWidth.value,
		height: dimensionHeight.value,
	};
	//draw with stats
	randomDraw(forceDesignObj);
	//show options
	if (!showBoxDrawFunctions) {
		subControls.innerHTML = subControls.innerHTML + boxDrawerTemplate();
		showBoxDrawFunctions = true;
	}
	//activate new activebtn listeners
	initBtnActiveListeners();
	//activate new functional listeners
	initBoxBtnFunctions();
});
let showMandalaDrawFunctions = false;
mandalaDrawerBtn.addEventListener('click', (event) => {
	//clear options
	if (showBoxDrawFunctions) {
		subControls.innerHTML = '';
		showBoxDrawFunctions = false;
	}
	forceDesignObj.typeOfDrawer = 'mandalaDraw';
	forceDesignObj.dimensions = {
		width: dimensionWidth.value,
		height: dimensionHeight.value,
	};

	//show options
	if (!showMandalaDrawFunctions) {
		subControls.innerHTML = subControls.innerHTML + mandalaDrawerTemplate();
		showMandalaDrawFunctions = true;
	}

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
