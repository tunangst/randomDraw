import React, { useState, useEffect } from 'react';
import Modal from './components/modal/Modal';
import Head from './components/head/Head';
import CodeInjector from './components/codeInjector/CodeInjector';
import Main from './components/main/Main';
import Controls from './components/main/controls/Controls';
import MainDisplay from './components/main/mainDisplay/MainDisplay';

import { randomDraw, getImage } from './randomDraw.js';
import {
	cloneObj,
	resetDefaults,
	clearEmpties,
	checkSequenceSize,
	changeFavicon,
} from './functions/functions.js';

const initialModalState = {
	display: false,
	type: '',
	payload: '',
};

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
	const [drawImage, setDrawImage] = useState(null);
	const [designState, setDesignState] = useState({});
	const [modalState, setModalState] = useState(initialModalState);
	const [sequence, setSequence] = useState([]);

	useEffect(() => {
		//reset defaults
		//updates the state then runs again
		resetDefaults(
			designState,
			adjustState,
			adjustDimensions,
			adjustBoxState,
			adjustMandalaState
		);
		//clear clone state and clear empty regions
		const inputObj = clearEmpties(cloneObj(designState));
		//draw
		draw(inputObj);
		// make sure arr isnt over max (default 20)
		checkSequenceSize(sequence, setSequence, null);
		//getImg
		const grabImg = getImage();
		if (grabImg) {
			//update sequence
			grabImg && setSequence([grabImg, ...sequence]);
			//also update faviocon
			grabImg && changeFavicon(grabImg);
			//replace randomDraw from drawing on screen canvas
			//have it create canvas then show it here
			setDrawImage(grabImg);
		}
	}, [designState]);
	// const toggleModal = () => {
	// 	setModalState({
	// 		...modalState,
	// 		display: !modalState.display,
	// 	});
	// };
	const adjustModal = (obj) => {
		setModalState({
			...modalState,
			...obj,
		});
	};
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
	const draw = async (inputObj) => {
		randomDraw(inputObj);
	};

	return (
		<div className='App'>
			<CodeInjector state={designState} />
			{modalState.display && (
				<Modal
					type={modalState.type}
					payload={modalState.payload}
					adjustModal={adjustModal}
				/>
			)}
			<Head sequence={sequence} adjustModal={adjustModal} />
			<Main>
				<Controls
					modalType={modalState.type}
					adjustModal={adjustModal}
					state={designState}
					adjustState={adjustState}
					adjustDimensions={adjustDimensions}
					adjustBoxState={adjustBoxState}
					adjustMandalaState={adjustMandalaState}
				/>
				<MainDisplay drawImage={drawImage} />
			</Main>
		</div>
	);
}

export default App;

//maybe add fractals
//maybe add pixel trails
