import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import CodeInjector from './components/CodeInjector';
import Controls from './components/Controls';
import MainDisplay from './components/MainDisplay';

import { randomDraw } from './randomDraw.js';

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
		//reset default values
		if (designState.dimensions) {
			if (designState.dimensions.width === 500) {
				setDesignState({
					...designState,
					dimensions: {
						...designState.dimensions,
						width: null,
					},
				});
			}
			if (designState.dimensions.height === 500) {
				setDesignState({
					...designState,
					dimensions: {
						...designState.dimensions,
						height: null,
					},
				});
			}
		}
	}, [designState]);

	const adjustState = (key, value) => {
		setDesignState({
			...designState,
			[key]: value,
		});
	};

	const adjustDimensions = (key, value) => {
		setDesignState({
			...designState,
			dimensions: {
				...designState.dimensions,
				[key]: value,
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
				/>
				<MainDisplay />
			</main>
		</div>
	);
}

export default App;
