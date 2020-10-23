import randomDraw from './randomDraw.js';
import boxDrawerTemplate from './templates&functions/boxDrawerTemplate.js';
import mandalaDrawerTemplate from './templates&functions/mandalaDrawerTemplate.js';
// import writeInputCode from './templates&functions/writeInputCode.js';
import {
	cloneObj,
	writeInputCode,
} from './templates&functions/helperFunctions.js';

let forceDesignObj = {
	// typeOfDrawer: 'random',
	// dimensions: {
	// 	width: null,
	// 	height: null,
	// },
	// testStr: '',
	// boxDrawObj: {},
	// mandalaDrawObj: {},
};
// let forceDesignObj = {};

const randomDrawerBtn = document.querySelector('#randomDrawerBtn');
const boxDrawerBtn = document.querySelector('#boxDrawerBtn');
const mandalaDrawerBtn = document.querySelector('#mandalaDrawerBtn');
const dimensionWidth = document.querySelector('#dimensionWidth');
const dimensionHeight = document.querySelector('#dimensionHeight');
const codeInjection = document.querySelector('.codeInjection');
const subControls = document.querySelector('.subControls');
let btns = document.querySelectorAll('.btns');

dimensionWidth.addEventListener('change', (event) => {
	event.preventDefault();
	if (!forceDesignObj.dimensions) {
		forceDesignObj.dimensions = {};
	}
	forceDesignObj.dimensions.width = event.target.value;
	codeInjection.innerHTML = writeInputCode(forceDesignObj);
	const newDesignObj = cloneObj(forceDesignObj);
	randomDraw(newDesignObj);
});
dimensionHeight.addEventListener('change', (event) => {
	event.preventDefault();
	if (!forceDesignObj.dimensions) {
		forceDesignObj.dimensions = {};
	}
	forceDesignObj.dimensions.height = event.target.value;
	codeInjection.innerHTML = writeInputCode(forceDesignObj);
	const newDesignObj = cloneObj(forceDesignObj);
	randomDraw(newDesignObj);
});

const handleGetToggleCheck = (toggleCheck) => {
	switch (toggleCheck) {
		case 'dimensions':
			if (!forceDesignObj.dimensions) {
				forceDesignObj.dimensions = {};
			}
			break;
		case 'boxDrawObj':
			if (!forceDesignObj.boxDrawObj) {
				forceDesignObj.boxDrawObj = {};
			}
			break;
		default:
			console.log('error in handleGetToggleCheck');
			break;
	}
};
const handleBtnClick = (event) => {
	event.preventDefault();
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
};
const initBtnActiveListeners = () => {
	btns = document.querySelectorAll('.btns');
	console.log(btns);
	btns.forEach((btn) => {
		btn.removeEventListener('click', handleBtnClick);
		btn.addEventListener('click', handleBtnClick);
	});
};
const initBoxBtnFunctions = () => {
	//place default count
	//boxCount
	const boxCount = document.querySelector('#boxCount');
	boxCount.addEventListener('change', (event) => {
		event.preventDefault();
		let correctedValue = event.target.value;
		if (correctedValue % 2 !== 0) {
			correctedValue++;
			boxCount.value = correctedValue;
		}
		handleGetToggleCheck('boxDrawObj');
		forceDesignObj.boxDrawObj.boxCount = event.target.value;
		if (event.target.value == 10) {
			delete forceDesignObj.boxDrawObj.boxCount;
		}
		codeInjection.innerHTML = writeInputCode(forceDesignObj);
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
	const choosePrimaryColor = document.querySelector('#choosePrimaryColor');
	defaultPrimaryColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		if (forceDesignObj.boxDrawObj) {
			if (forceDesignObj.boxDrawObj.primaryToggle) {
				delete forceDesignObj.boxDrawObj.primaryToggle;
				delete forceDesignObj.boxDrawObj.primaryColor;
			}
		}

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	randomPrimaryColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		handleGetToggleCheck('boxDrawObj');
		forceDesignObj.boxDrawObj.primaryToggle = 'random';

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	choosePrimaryColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		handleGetToggleCheck('boxDrawObj');
		forceDesignObj.boxDrawObj.primaryToggle = 'choose';
		forceDesignObj.boxDrawObj.primaryColor = event.target.children[0].value;

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	choosePrimaryColor.addEventListener('click', (event) => {
		event.stopPropagation();
	});
	//primaryColor
	//secondaryColor
	const defaultSecondaryColorBtn = document.querySelector(
		'#defaultSecondaryColorBtn'
	);
	const chooseSecondaryColorBtn = document.querySelector(
		'#chooseSecondaryColorBtn'
	);
	const chooseSecondaryColor = document.querySelector(
		'#chooseSecondaryColor'
	);
	defaultSecondaryColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		if (forceDesignObj.boxDrawObj) {
			if (forceDesignObj.boxDrawObj.secondaryToggle) {
				delete forceDesignObj.boxDrawObj.secondaryToggle;
				delete forceDesignObj.boxDrawObj.secondaryColor;
			}
		}

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	chooseSecondaryColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		handleGetToggleCheck('boxDrawObj');
		forceDesignObj.boxDrawObj.secondaryToggle = 'choose';
		forceDesignObj.boxDrawObj.secondaryColor =
			event.target.children[0].value;

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	chooseSecondaryColor.addEventListener('click', (event) => {
		event.stopPropagation();
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
	const chooseBackgroundColor = document.querySelector(
		'#chooseBackgroundColor'
	);
	defaultBackgroundColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		if (forceDesignObj.boxDrawObj) {
			if (forceDesignObj.boxDrawObj.backgroundToggle) {
				delete forceDesignObj.boxDrawObj.backgroundToggle;
				delete forceDesignObj.boxDrawObj.backgroundColor;
			}
		}

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	randomBackgroundColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		handleGetToggleCheck('boxDrawObj');
		forceDesignObj.boxDrawObj.backgroundToggle = 'random';

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	chooseBackgroundColorBtn.addEventListener('click', (event) => {
		event.preventDefault();
		handleGetToggleCheck('boxDrawObj');
		forceDesignObj.boxDrawObj.backgroundToggle = 'choose';
		forceDesignObj.boxDrawObj.backgroundColor =
			event.target.children[0].value;

		codeInjection.innerHTML = writeInputCode(forceDesignObj);
		//clone designObj
		const newDesignObj = cloneObj(forceDesignObj);
		//get img
		randomDraw(newDesignObj);
	});
	chooseBackgroundColor.addEventListener('click', (event) => {
		event.stopPropagation();
	});
	//backgroundColor
};
const initBoxDrawChoiceListeners = () => {
	const boxPatternBtns = document.querySelectorAll('.boxPatternBtns');
	// debugger;
	if (boxPatternBtns.length > 1) {
		boxPatternBtns.forEach((boxPatternBtn) => {
			boxPatternBtn.addEventListener('click', (event) => {
				event.preventDefault();
				let convertedWord;
				const word = event.target.innerText;
				convertedWord =
					word.charAt(0).toLowerCase() +
					word.replace(/\s/g, '').slice(1);
				// debugger;
				handleGetToggleCheck('boxDrawObj');
				if (convertedWord === 'random') {
					delete forceDesignObj.boxDrawObj.drawStyle;
				} else {
					forceDesignObj.boxDrawObj.drawStyle = convertedWord;
				}
				// debugger;
				codeInjection.innerHTML = writeInputCode(forceDesignObj);
				//clone designObj
				const newDesignObj = cloneObj(forceDesignObj);
				//get img
				randomDraw(newDesignObj);
			});
		});
	}
};

//place these listeners on starting 3 btns
initBtnActiveListeners();
//Random Draw listener
randomDrawerBtn.addEventListener('click', (event) => {
	event.preventDefault();
	forceDesignObj.typeOfDrawer = '';
	if (forceDesignObj.boxDrawObj) {
		delete forceDesignObj.boxDrawObj;
	}
	if (forceDesignObj.mandalaDrawObj) {
		delete forceDesignObj.mandalaDrawObj;
	}

	codeInjection.innerHTML = writeInputCode(forceDesignObj);
	//clone designObj
	const newDesignObj = cloneObj(forceDesignObj);
	//get img
	randomDraw(newDesignObj);
});
//Random Draw listener
//Box Draw listener and switch
let showBoxDrawFunctions = false;
boxDrawerBtn.addEventListener('click', (event) => {
	event.preventDefault();
	//clear options
	if (showMandalaDrawFunctions) {
		subControls.innerHTML = '';
		showMandalaDrawFunctions = false;
	}
	//get stats
	forceDesignObj.typeOfDrawer = 'boxDraw';
	forceDesignObj.boxDrawObj = {};

	//draw with stats
	//show options
	if (!showBoxDrawFunctions) {
		subControls.innerHTML = subControls.innerHTML + boxDrawerTemplate();
		showBoxDrawFunctions = true;
		//activate new activebtn listeners
		initBtnActiveListeners();
		//activate new functional listeners
		initBoxBtnFunctions();
	}
	initBoxDrawChoiceListeners();

	if (forceDesignObj.mandalaDrawObj) {
		delete forceDesignObj.mandalaDrawObj;
	}
	//get input code html
	codeInjection.innerHTML = writeInputCode(forceDesignObj);
	//clone designObj
	const newDesignObj = cloneObj(forceDesignObj);
	//get img
	randomDraw(newDesignObj);
});
//Box Draw listener and switch
//Mandala Draw listener and switch
let showMandalaDrawFunctions = false;
mandalaDrawerBtn.addEventListener('click', (event) => {
	event.preventDefault();
	//clear options
	if (showBoxDrawFunctions) {
		subControls.innerHTML = '';
		showBoxDrawFunctions = false;
	}
	forceDesignObj.typeOfDrawer = 'mandalaDraw';
	forceDesignObj.mandalaDrawObj = {};

	//show options
	if (!showMandalaDrawFunctions) {
		subControls.innerHTML = subControls.innerHTML + mandalaDrawerTemplate();
		showMandalaDrawFunctions = true;
	}

	if (forceDesignObj.boxDrawObj) {
		delete forceDesignObj.boxDrawObj;
	}
	codeInjection.innerHTML = writeInputCode(forceDesignObj);
	//clone designObj
	const newDesignObj = cloneObj(forceDesignObj);
	//get img
	randomDraw(newDesignObj);
});
//Mandala Draw listener and switch

//clone designObj
const newDesignObj = cloneObj(forceDesignObj);
//get img
window.onload = () => {
	randomDraw(newDesignObj);
	codeInjection.innerHTML = writeInputCode(forceDesignObj);
};

//check for Navigation Timing API support
if (window.performance) {
	console.info('window.performance works fine on this browser');
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	console.info('This page is reloaded');
} else {
	console.info('This page is not reloaded');
}

console.log('the same listener on btns are being applied multiple times');
