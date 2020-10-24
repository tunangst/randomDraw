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
			}
			if (state.mandalaDrawObj.drawType !== 'custom') {
				//delete all mods in <MandalaCustomDrawOptions />
				state.mandalaDrawObj.loopCount &&
					adjustMandalaState({ loopCount: null });
				state.mandalaDrawObj.minShapeSize &&
					adjustMandalaState({ minShapeSize: null });
				state.mandalaDrawObj.maxShapeSize &&
					adjustMandalaState({ maxShapeSize: null });
				state.mandalaDrawObj.minShapeCount &&
					adjustMandalaState({ minShapeCount: null });
				state.mandalaDrawObj.maxShapeCount &&
					adjustMandalaState({ maxShapeCount: null });
				state.mandalaDrawObj.minPathRadius &&
					adjustMandalaState({ minPathRadius: null });
				state.mandalaDrawObj.maxPathRadius &&
					adjustMandalaState({ maxPathRadius: null });
				state.mandalaDrawObj.blendMode &&
					adjustMandalaState({ blendMode: null });
				state.mandalaDrawObj.customBackgroundSwitch &&
					adjustMandalaState({ customBackgroundSwitch: null });
				state.mandalaDrawObj.chooseBackgroundColor &&
					adjustMandalaState({ chooseBackgroundColor: null });
			}
			// ~~~~~~~~~~~~~~~ reset drawType
			// ~~~~~~~~~~~~~~~ reset drawType insides
			if (state.mandalaDrawObj.drawType === 'custom') {
				if (state.mandalaDrawObj.customBackgroundSwitch === false) {
					adjustMandalaState({
						customBackgroundSwitch: null,
						chooseBackgroundColor: null,
					});
				}
			}
			// ~~~~~~~~~~~~~~~ reset drawType insides
		}

		// ~~~~~~~~~~~~~~~ reset loopCount

		// ======= mandalaDrawObj adjustments
	}
};

export { cloneObj, clearEmpties, writeInputCode, resetDefaults };
