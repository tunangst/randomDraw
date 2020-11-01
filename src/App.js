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
	const [modalType, setModalType] = useState(null);
	const [designState, setDesignState] = useState({});
	const [sequence, setSequence] = useState([]);

	console.log(modalType);
	console.log(modalType);
	console.log(modalType);
	console.log(modalType);
	console.log(`!!!!!!!!`);
	useEffect(() => {
		// handleModal(null);

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
			handleModal(null);
		}
	}, [designState]);

	const handleModal = (type) => {
		setModalType(type);
	};
	const adjustState = (obj) => {
		handleModal('loading');
		setDesignState({
			...designState,
			...obj,
		});
	};
	const adjustDimensions = (obj) => {
		handleModal('loading');
		setDesignState({
			...designState,
			dimensions: {
				...designState.dimensions,
				...obj,
			},
		});
	};
	const adjustBoxState = (obj) => {
		handleModal('loading');
		setDesignState({
			...designState,
			boxDrawObj: {
				...designState.boxDrawObj,
				...obj,
			},
		});
	};
	const adjustMandalaState = (obj) => {
		handleModal('loading');
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

	console.log(`!!!!!!!!`);
	console.log(modalType);
	console.log(modalType);
	console.log(modalType);
	console.log(modalType);
	return (
		<div className='App'>
			<CodeInjector state={designState} />
			{modalType && <Modal type={modalType} />}
			<Head sequence={sequence} />
			<Main>
				<Controls
					modalType={modalType}
					handleModal={handleModal}
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
