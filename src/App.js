import React, { useState, useEffect } from 'react';
import Head from './components/head/Head';
import Sequence from './components/head/sequence/Sequence';
import CodeInjector from './components/codeInjector/CodeInjector';
import Controls from './components/main/controls/Controls';
import MainDisplay from './components/main/mainDisplay/MainDisplay';

import { randomDraw, getImage } from './randomDraw.js';
import {
	cloneObj,
	writeInputCode,
	resetDefaults,
	clearEmpties,
	checkSequenceSize,
} from './functions/functions.js';

function App() {
	// let forceDesignObj = {
	// 		typeOfDrawer: 'random',
	// 			dimensions: {
	// 				width: null,
	// 				height: null,
	// 			},
	// 		testStr: '',
	// 		boxDrawObj: {},
	// 		mandalaDrawObj: {},
	// };
	// let forceDesignObj = {};
	const [designState, setDesignState] = useState({});
	const [sequence, setSequence] = useState([]);

	useEffect(() => {
		console.log(designState);
		//reset defaults
		// debugger;

		//updates the state then runs again
		resetDefaults(
			designState,
			adjustState,
			adjustDimensions,
			adjustBoxState,
			adjustMandalaState
		);
		//clear clone state and clear empty regions
		let inputObj = clearEmpties(cloneObj(designState));

		//draw
		randomDraw(inputObj);

		//getImg
		checkSequenceSize(sequence, setSequence);
		const grabImg = getImage();
		// debugger;
		setSequence([...sequence, grabImg]);
	}, [designState]);

	const adjustState = (obj) => {
		setDesignState({
			...designState,
			...obj,
		});
	};

	const adjustDimensions = (obj) => {
		setDesignState({
			...designState,
			dimensions: {
				...designState.dimensions,
				...obj,
			},
		});
	};
	const adjustBoxState = (obj) => {
		setDesignState({
			...designState,
			boxDrawObj: {
				...designState.boxDrawObj,
				...obj,
			},
		});
	};
	const adjustMandalaState = (obj) => {
		setDesignState({
			...designState,
			mandalaDrawObj: {
				...designState.mandalaDrawObj,
				...obj,
			},
		});
	};

	const draw = () => {
		randomDraw(designState);
	};

	return (
		<div className='App'>
			<Head sequence={sequence} />
			<CodeInjector state={designState} />
			<main>
				<Controls
					draw={draw}
					state={designState}
					adjustState={adjustState}
					adjustDimensions={adjustDimensions}
					adjustBoxState={adjustBoxState}
					adjustMandalaState={adjustMandalaState}
				/>
				<MainDisplay />
			</main>
		</div>
	);
}

export default App;

//maybe add fractals
//maybe add pixel trails
