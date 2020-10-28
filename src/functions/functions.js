const cloneObj = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};
const clearEmpties = (obj) => {
	for (let key in obj) {
		if (!obj[key] || typeof obj[key] !== 'object') {
			//remove strings null and undefined
			if (
				obj[key] === undefined ||
				obj[key] === null ||
				obj[key] === false ||
				obj[key] === ''
			) {
				delete obj[key];
			}
			continue; // If null or not an object, skip to the next iteration
		}
		// The property is an object
		clearEmpties(obj[key]); // <-- Make a recursive call on the nested object
		if (Object.keys(obj[key]).length === 0) {
			delete obj[key]; // The object had no properties, so delete that property
		}
	}
	return obj;
};
const writeInputCode = (obj) => {
	clearEmpties(obj);
	const tab = `  `;
	let html = `randomDraw(${JSON.stringify(obj, null, tab)});`;
	return html;
};

const resetDefaults = (
	state,
	adjustState,
	adjustDimensions,
	adjustBoxState,
	adjustMandalaState
) => {
	// const state = cloneObj(inputState);
	console.log('in resetDefaults');
	console.log('testing for infinite loop');
	// ======= dimensions adjustments
	// ~~~~~~~~~~~~~~~ reset default values of typeOfDrawer
	if (state.typeOfDrawer && state.typeOfDrawer === 'random') {
		adjustState({ typeOfDrawer: null });
	}
	// ~~~~~~~~~~~~~~~ reset default values of typeOfDrawer
	// ~~~~~~~~~~~~~~~ reset default values of width and height
	if (state.dimensions) {
		if (state.dimensions.width === 500) {
			adjustDimensions({ width: null });
		}
		if (state.dimensions.height === 500) {
			adjustDimensions({ height: null });
		}
	}
	// ~~~~~~~~~~~~~~~ reset default values of width and height
	// ======= dimensions adjustments
	// ======= boxDrawObj adjustments
	if (state.boxDrawObj) {
		if (state.boxDrawObj.boxCount && state.boxDrawObj.boxCount === 10) {
			adjustBoxState({ boxCount: null });
		}
		// ~~~~~~~~~~~~~~~ off 'choose' toggle remove color value
		if (state.boxDrawObj.primaryToggle) {
			if (
				state.boxDrawObj.primaryToggle === 'default' ||
				state.boxDrawObj.primaryToggle === 'random'
			) {
				//remove toggle
				if (state.boxDrawObj.primaryToggle === 'default') {
					adjustBoxState({ primaryToggle: null });
				}
				//remove color
				if (state.boxDrawObj.primaryColor) {
					adjustBoxState({ primaryColor: null });
				}
			}
		}
		if (state.boxDrawObj.secondaryToggle) {
			if (
				state.boxDrawObj.secondaryToggle === 'default' ||
				state.boxDrawObj.secondaryToggle === 'random'
			) {
				//remove toggle
				if (state.boxDrawObj.secondaryToggle === 'default') {
					adjustBoxState({ secondaryToggle: null });
				}
				//remove color
				if (state.boxDrawObj.secondaryColor) {
					adjustBoxState({ secondaryColor: null });
				}
			}
		}
		if (state.boxDrawObj.backgroundToggle) {
			if (
				state.boxDrawObj.backgroundToggle === 'default' ||
				state.boxDrawObj.backgroundToggle === 'random'
			) {
				//remove toggle
				if (state.boxDrawObj.backgroundToggle === 'default') {
					adjustBoxState({ backgroundToggle: null });
				}
				//remove color
				if (state.boxDrawObj.backgroundColor) {
					adjustBoxState({ backgroundColor: null });
				}
			}
		}
		// ~~~~~~~~~~~~~~~ off 'choose' toggle remove color value
		// ~~~~~~~~~~~~~~~ if color is same as default, remove property
		if (
			state.boxDrawObj.primaryColor &&
			state.boxDrawObj.primaryColor === '#000000'
		) {
			adjustBoxState({ primaryColor: null });
		}
		if (
			state.boxDrawObj.secondaryColor &&
			state.boxDrawObj.secondaryColor === '#8C00FF'
		) {
			adjustBoxState({ secondaryColor: null });
		}
		if (
			state.boxDrawObj.backgroundColor &&
			state.boxDrawObj.backgroundColor === '#FFFFFF00'
		) {
			adjustBoxState({ backgroundColor: null });
		}
		// ~~~~~~~~~~~~~~~ if color is same as default, remove property
		// ~~~~~~~~~~~~~~~ reset drawStyle default
		if (state.boxDrawObj.drawStyle === 'random') {
			adjustBoxState({ drawStyle: null });
		}
		// ======= boxDrawObj adjustments
	}
	// ======= mandalaDrawObj adjustments
	if (state.mandalaDrawObj) {
		// ~~~~~~~~~~~~~~~ reset drawType
		if (state.mandalaDrawObj.drawType) {
			if (state.mandalaDrawObj.drawType === 'random') {
				adjustMandalaState({ drawType: null });
			} else if (state.mandalaDrawObj.drawType !== 'custom') {
				//delete all mods in <MandalaCustomDrawOptions />
				state.mandalaDrawObj.clearAll &&
					adjustMandalaState({ clearAll: false });
				state.mandalaDrawObj.clearRandomLoops &&
					adjustMandalaState({ clearRandomLoops: false });
				state.mandalaDrawObj.clearIndividualLoops &&
					adjustMandalaState({ clearIndividualLoops: false });
				state.mandalaDrawObj.fillAll &&
					adjustMandalaState({ fillAll: false });
				state.mandalaDrawObj.fillRandomLoops &&
					adjustMandalaState({ fillRandomLoops: false });
				state.mandalaDrawObj.fillIndividualLoops &&
					adjustMandalaState({ fillIndividualLoops: false });
				state.mandalaDrawObj.fillColorAll &&
					adjustMandalaState({ fillColorAll: false });
				state.mandalaDrawObj.fillColorRandomLoops &&
					adjustMandalaState({ fillColorRandomLoops: false });
				state.mandalaDrawObj.fillColorIndividualLoops &&
					adjustMandalaState({ fillColorIndividualLoops: false });
				state.mandalaDrawObj.strokeAll &&
					adjustMandalaState({ strokeAll: false });
				state.mandalaDrawObj.strokeRandomLoops &&
					adjustMandalaState({ strokeRandomLoops: false });
				state.mandalaDrawObj.strokeIndividualLoops &&
					adjustMandalaState({ strokeIndividualLoops: false });
				state.mandalaDrawObj.strokeColorAll &&
					adjustMandalaState({ strokeColorAll: false });
				state.mandalaDrawObj.strokeColorRandomLoops &&
					adjustMandalaState({ strokeColorRandomLoops: false });
				state.mandalaDrawObj.strokeColorIndividualLoops &&
					adjustMandalaState({ strokeColorIndividualLoops: false });
				state.mandalaDrawObj.strokeWidthAll &&
					adjustMandalaState({ strokeWidthAll: false });
				state.mandalaDrawObj.strokeWidthRandomLoops &&
					adjustMandalaState({ strokeWidthRandomLoops: false });
				state.mandalaDrawObj.strokeWidthIndividualLoops &&
					adjustMandalaState({ strokeWidthIndividualLoops: false });
				// ~~~~~~~~~~~~~~~ reset drawType
				// ~~~~~~~~~~~~~~~ reset drawType insides
			} else if (state.mandalaDrawObj.drawType === 'custom') {
				if (state.mandalaDrawObj.customBackgroundSwitch === false) {
					adjustMandalaState({
						customBackgroundSwitch: null,
						chooseBackgroundColor: null,
					});
				}
			}
			// ~~~~~~~~~~~~~~~ reset drawType insides
		}
		if (
			state.mandalaDrawObj.shapeType &&
			state.mandalaDrawObj.shapeType === 'random'
		) {
			adjustMandalaState({ shapeType: null });
		}
		if (
			state.mandalaDrawObj.blendMode &&
			state.mandalaDrawObj.blendMode === 'default'
		) {
			adjustMandalaState({ blendMode: null });
		}
		if (
			state.mandalaDrawObj.loopCount &&
			state.mandalaDrawObj.loopCount === 5
		) {
			adjustMandalaState({ loopCount: null });
		}
		if (
			state.mandalaDrawObj.minShapeSize &&
			state.mandalaDrawObj.minShapeSize === 20
		) {
			adjustMandalaState({ minShapeSize: null });
		}
		// if (
		// 	state.mandalaDrawObj.maxShapeSize &&
		// 	state.mandalaDrawObj.maxShapeSize === 200
		// ) {
		// 	adjustMandalaState({ maxShapeSize: null });
		// }
		if (
			state.mandalaDrawObj.minShapeCount &&
			state.mandalaDrawObj.minShapeCount === 4
		) {
			adjustMandalaState({ minShapeCount: null });
		}
		if (
			state.mandalaDrawObj.maxShapeCount &&
			state.mandalaDrawObj.maxShapeCount === 200
		) {
			adjustMandalaState({ maxShapeCount: null });
		}
		if (
			state.mandalaDrawObj.minPathRadius &&
			state.mandalaDrawObj.minPathRadius === 20
		) {
			adjustMandalaState({ minPathRadius: null });
		}
		// if (
		// 	state.mandalaDrawObj.maxPathRadius &&
		// 	state.mandalaDrawObj.maxPathRadius === 200
		// ) {
		// 	adjustMandalaState({ maxPathRadius: null });
		// }

		// ~~~~~~~~~~~~~~~ reset loopCount

		// ======= mandalaDrawObj adjustments
	}
	// return state;
};

const checkSequenceSize = (sequence, setSequence, maxSize = 20) => {
	if (sequence.length > maxSize - 1) {
		const adjustedArr = [...sequence];
		sequence.shift();
		setSequence([...adjustedArr]);
	}
};
export {
	cloneObj,
	clearEmpties,
	writeInputCode,
	resetDefaults,
	checkSequenceSize,
};
