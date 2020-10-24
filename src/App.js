import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import CodeInjector from './components/CodeInjector';
import Controls from './components/Controls';
import MainDisplay from './components/MainDisplay';

import { randomDraw } from './randomDraw.js';
import { cloneObj, resetDefaults } from './functions/functions.js';

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

	useEffect(() => {
		//reset defaults
		resetDefaults(
			designState,
			adjustState,
			adjustDimensions,
			adjustBoxState,
			adjustMandalaState
		);

		//clone state
		const inputObj = cloneObj(designState);
		//draw
		randomDraw(inputObj);
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
			<Nav />
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
