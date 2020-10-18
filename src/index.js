import randomDraw from './randomDraw.js';
import boxDrawerTemplate from './templates&functions/boxDrawerTemplate.js';
import mandalaDrawerTemplate from './templates&functions/mandalaDrawerTemplate.js';
import writeInputCode from './templates&functions/writeInputCode.js';

let forceDesignObj = {
	typeOfDrawer: 'random',
	dimensions: {
		width: 500,
		height: 500,
	},
	boxDrawObj: {},
	mandalaDrawObj: {},
};

const randomDrawerBtn = document.querySelector('#randomDrawerBtn');
const boxDrawerBtn = document.querySelector('#boxDrawerBtn');
const mandalaDrawerBtn = document.querySelector('#mandalaDrawerBtn');
const dimensionWidth = document.querySelector('#dimensionWidth');
const dimensionHeight = document.querySelector('#dimensionHeight');
const codeInjection = document.querySelector('.codeInjection');
const subControls = document.querySelector('.subControls');
let btns = document.querySelectorAll('.btns');

dimensionWidth.addEventListener('change', (event) => {
	forceDesignObj.dimensions.width = event.target.value;
});
dimensionHeight.addEventListener('change', (event) => {
	forceDesignObj.dimensions.height = event.target.value;
});

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
const initBoxBtnFunctions = () => {
	//place default count
	//boxCount
	const boxCount = document.querySelector('#boxCount');
	boxCount.addEventListener('change', (event) => {
		let correctedValue = event.target.value;
		if (correctedValue % 2 !== 0) {
			correctedValue++;
			boxCount.value = correctedValue;
		}

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
		delete forceDesignObj.boxDrawObj.primaryToggle;
		delete forceDesignObj.boxDrawObj.primaryColor;
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
	const chooseSecondaryColorBtn = document.querySelector(
		'#chooseSecondaryColorBtn'
	);
	defaultSecondaryColorBtn.addEventListener('click', (event) => {
		delete forceDesignObj.boxDrawObj.secondaryToggle;
		delete forceDesignObj.boxDrawObj.secondaryColor;
		randomDraw(forceDesignObj);
	});
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
		delete forceDesignObj.boxDrawObj.backgroundToggle;
		delete forceDesignObj.boxDrawObj.backgroundColor;
		randomDraw(forceDesignObj);
	});
	randomBackgroundColorBtn.addEventListener('click', (event) => {
		forceDesignObj.boxDrawObj.backgroundToggle = 'random';
		forceDesignObj.boxDrawObj.backgroundColor = 'random';
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
const initBoxDrawChoiceListeners = () => {
	const boxPatternBtns = document.querySelectorAll('.boxPatternBtns');
	if (boxPatternBtns.length > 1) {
		boxPatternBtns.forEach((boxPatternBtn) => {
			boxPatternBtn.addEventListener('click', (event) => {
				let convertedWord;
				const word = event.target.innerText;
				convertedWord =
					word.charAt(0).toLowerCase() +
					word.replace(/\s/g, '').slice(1);

				forceDesignObj.boxDrawObj.drawStyle = convertedWord;
				randomDraw(forceDesignObj);
			});
		});
	}
};

//place these listeners on starting 3 btns
initBtnActiveListeners();
//Random Draw listener
randomDrawerBtn.addEventListener('click', (event) => {
	forceDesignObj.typeOfDrawer = 'randomDraw';
	forceDesignObj.dimensions = {
		width: dimensionWidth.value,
		height: dimensionHeight.value,
	};
	randomDraw(forceDesignObj);
});
//Random Draw listener
//Box Draw listener and switch
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
	//show options
	if (!showBoxDrawFunctions) {
		subControls.innerHTML = subControls.innerHTML + boxDrawerTemplate();
		showBoxDrawFunctions = true;
	}
	//activate new activebtn listeners
	initBtnActiveListeners();
	//activate new functional listeners
	initBoxBtnFunctions();
	initBoxDrawChoiceListeners();
	//get img
	randomDraw(forceDesignObj);
	//get input code html
	codeInjection.innerHTML = writeInputCode(forceDesignObj.boxDrawObj);
});
//Box Draw listener and switch
//Mandala Draw listener and switch
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
//Mandala Draw listener and switch

randomDraw(forceDesignObj);

console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
//this also ruins the randomDraw input code writing by reposting primaryColor etc
console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
console.log('bug: draws on init 3 times');
