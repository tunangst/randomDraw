import React, { useState } from 'react';
import SetResetPills from '../../../reuse/SetResetPills';

const initialState = {
	boxCount: 10,
	choosePrimaryColor: '#000000',
	chooseSecondaryColor: '#8C00FF',
	chooseBackgroundColor: '#FFFFFF00',
};

const BoxDropDownMarkUp = ({ adjustBoxState }) => {
	const [input, setInput] = useState(initialState);
	const [activePrimary, setActivePrimary] = useState(
		'defaultPrimaryColorBtn'
	);
	const [activeSecondary, setActiveSecondary] = useState(
		'defaultSecondaryColorBtn'
	);
	const [activeBackground, setActiveBackground] = useState(
		'defaultBackgroundColorBtn'
	);
	const [activeStyle, setActiveStyle] = useState('random');

	const handleChange = (event) => {
		let value = event.target.value;
		let keyName = event.target.id;
		// if (keyName === 'boxCount') {
		// 	value = Number(value);
		// 	adjustBoxState({ [keyName]: value });
		// }
		setInput({
			...input,
			[keyName]: value,
		});
	};

	const handleBtns = (event) => {
		const id = event.target.id;

		switch (id) {
			case 'defaultPrimaryColorBtn':
				setActivePrimary(id);
				adjustBoxState({ primaryToggle: null });
				break;
			case 'randomPrimaryColorBtn':
				setActivePrimary(id);
				adjustBoxState({ primaryToggle: 'random' });
				break;
			case 'choosePrimaryColorBtn':
				setActivePrimary(id);
				let setObj = {};
				setObj.primaryToggle = 'choose';
				if (
					input.choosePrimaryColor !== initialState.choosePrimaryColor
				) {
					setObj.primaryColor = input.choosePrimaryColor;
				}
				adjustBoxState(setObj);
				break;
			case 'defaultSecondaryColorBtn':
				setActiveSecondary(id);
				adjustBoxState({ secondaryToggle: null });
				break;
			case 'chooseSecondaryColorBtn':
				setActiveSecondary(id);
				let setObj2 = {};
				setObj2.secondaryToggle = 'choose';
				if (
					input.chooseSecondaryColor !==
					initialState.chooseSecondaryColor
				) {
					setObj2.secondaryColor = input.chooseSecondaryColor;
				}
				adjustBoxState(setObj2);
				break;
			case 'defaultBackgroundColorBtn':
				setActiveBackground(id);
				adjustBoxState({ backgroundToggle: null });
				break;
			case 'randomBackgroundColorBtn':
				setActiveBackground(id);
				adjustBoxState({ backgroundToggle: 'random' });
				break;
			case 'chooseBackgroundColorBtn':
				setActiveBackground(id);
				let setObj3 = {};
				setObj3.backgroundToggle = 'choose';
				if (
					input.chooseBackgroundColor !==
					initialState.chooseBackgroundColor
				) {
					setObj3.backgroundColor = input.chooseBackgroundColor;
				}
				adjustBoxState(setObj3);
				break;
			default:
				console.log('error in handleBtns');
				break;
		}
	};

	const handleStyleBtns = (event) => {
		const word = event.target.innerText;
		let convertedWord =
			word.charAt(0).toLowerCase() + word.replace(/\s/g, '').slice(1);
		setActiveStyle(convertedWord);
		if (convertedWord === 'random') {
			convertedWord = null;
		}
		adjustBoxState({ drawStyle: convertedWord });
	};

	const handleSet = () => {
		let value = Number(input.boxCount);
		if (Number(input.boxCount) === initialState.boxCount) {
			value = null;
		}
		adjustBoxState({ boxCount: value });
	};
	const handleReset = () => {
		if (input.boxCount !== initialState.boxCount) {
			setInput({
				...input,
				boxCount: initialState.boxCount,
			});
			adjustBoxState({ boxCount: null });
		}
	};

	return (
		<section id='boxSubControls'>
			<div className='separatorContainer'>
				<div className='separators boxCountSeparator'>
					<div className='boxCountContainer'>
						<p>Box Count:</p>
						<input
							id='boxCount'
							className='inputField'
							name='boxCount'
							type='number'
							value={input.boxCount}
							min='2'
							step='2'
							onChange={handleChange}
						/>
					</div>
					<SetResetPills
						handleSet={handleSet}
						handleReset={handleReset}
					/>
				</div>
				<div className='separators'>
					<p>Primary Color:</p>
					<div className='primaryColorContainer btnContainer'>
						<button
							id='defaultPrimaryColorBtn'
							name='primaryColor'
							className={`btns ${
								activePrimary === 'defaultPrimaryColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Default
						</button>
						<button
							id='randomPrimaryColorBtn'
							name='primaryColor'
							className={`btns ${
								activePrimary === 'randomPrimaryColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Random
						</button>
						<button
							id='choosePrimaryColorBtn'
							name='primaryColor'
							className={`btns ${
								activePrimary === 'choosePrimaryColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Choose
							<input
								id='choosePrimaryColor'
								name='primaryColor'
								className='colorInput'
								type='color'
								value={input.choosePrimaryColor}
								onChange={handleChange}
							/>
						</button>
					</div>
				</div>
				<div className='separators'>
					<p>Secondary Color:</p>
					<div className='secondaryColorContainer btnContainer'>
						<button
							id='defaultSecondaryColorBtn'
							name='secondaryColor'
							className={`btns ${
								activeSecondary === 'defaultSecondaryColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Default Random
						</button>
						<button
							id='chooseSecondaryColorBtn'
							name='secondaryColor'
							className={`btns ${
								activeSecondary === 'chooseSecondaryColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Choose
							<input
								id='chooseSecondaryColor'
								className='colorInput'
								name='secondaryColor'
								type='color'
								value={input.chooseSecondaryColor}
								onChange={handleChange}
							/>
						</button>
					</div>
				</div>
				<div className='separators'>
					<p>Background Color:</p>
					<div className='backgroundColorContainer btnContainer'>
						<button
							id='defaultBackgroundColorBtn'
							name='backgroundColor'
							className={`btns ${
								activeBackground === 'defaultBackgroundColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Default
						</button>
						<button
							id='randomBackgroundColorBtn'
							name='backgroundColor'
							className={`btns ${
								activeBackground === 'randomBackgroundColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Random
						</button>
						<button
							id='chooseBackgroundColorBtn'
							name='backgroundColor'
							className={`btns ${
								activeBackground === 'chooseBackgroundColorBtn'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Choose
							<input
								id='chooseBackgroundColor'
								className='colorInput'
								name='backgroundColor'
								type='color'
								value={input.chooseBackgroundColor}
								onChange={handleChange}
							/>
						</button>
					</div>
				</div>
			</div>
			<div className='styleContainer btnContainer'>
				<p>Styles</p>
				<div className='btnContainer'>
					<button
						id='randomBtn'
						className={`btns boxPatternBtns ${
							activeStyle === 'random' ? 'active' : ''
						}`}
						onClick={handleStyleBtns}
					>
						Random
					</button>
					<button
						id='fullCloneBtn'
						className={`btns boxPatternBtns ${
							activeStyle === 'fullClone' ? 'active' : ''
						}`}
						onClick={handleStyleBtns}
					>
						Full Clone
					</button>
					<button
						id='fullReflectBtn'
						className={`btns boxPatternBtns ${
							activeStyle === 'fullReflect' ? 'active' : ''
						}`}
						onClick={handleStyleBtns}
					>
						Full Reflect
					</button>
					<button
						id='fullRotateBtn'
						className={`btns boxPatternBtns ${
							activeStyle === 'fullRotate' ? 'active' : ''
						}`}
						onClick={handleStyleBtns}
					>
						Full Rotate
					</button>
					<button
						id='halfReflectBtn'
						className={`btns boxPatternBtns ${
							activeStyle === 'halfReflect' ? 'active' : ''
						}`}
						onClick={handleStyleBtns}
					>
						Half Reflect
					</button>
					<button
						id='noPatternBtn'
						className={`btns boxPatternBtns ${
							activeStyle === 'noPattern' ? 'active' : ''
						}`}
						onClick={handleStyleBtns}
					>
						No Pattern
					</button>
				</div>
			</div>
		</section>
	);
};

export default BoxDropDownMarkUp;
