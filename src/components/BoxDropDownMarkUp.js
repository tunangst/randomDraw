import React, { Fragment, useState, useEffect } from 'react';

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

	useEffect(() => {
		console.log('refresh dropdown');
		//prevent input state refreshing component,
	}, []);

	const handleChange = (event) => {
		// debugger;
		let value = event.target.value;
		let keyName = event.target.id;
		if (keyName === 'boxCount') {
			value = Number(value);
			adjustBoxState({ [keyName]: value });
		}
		setInput({
			...input,
			[keyName]: value,
		});
	};

	const handleBtns = (event) => {
		// adjustBoxState([event.target.name], event.target.value);
		const id = event.target.id;
		// let colorInput = null;
		switch (id) {
			case 'defaultPrimaryColorBtn':
				setActivePrimary(id);
				adjustBoxState({ primaryToggle: 'default' });
				break;
			case 'randomPrimaryColorBtn':
				setActivePrimary(id);
				adjustBoxState({ primaryToggle: 'random' });
				break;
			case 'choosePrimaryColorBtn':
				setActivePrimary(id);
				adjustBoxState({
					primaryToggle: 'choose',
					primaryColor: input.choosePrimaryColor,
				});
				break;
			case 'defaultSecondaryColorBtn':
				setActiveSecondary(id);
				adjustBoxState({ secondaryToggle: 'default' });
				break;
			case 'chooseSecondaryColorBtn':
				setActiveSecondary(id);
				adjustBoxState({
					secondaryToggle: 'choose',
					secondaryColor: input.chooseSecondaryColor,
				});
				break;
			case 'defaultBackgroundColorBtn':
				setActiveBackground(id);
				adjustBoxState({ backgroundToggle: 'default' });
				break;
			case 'randomBackgroundColorBtn':
				setActiveBackground(id);
				adjustBoxState({ backgroundToggle: 'random' });
				break;
			case 'chooseBackgroundColorBtn':
				setActiveBackground(id);
				adjustBoxState({
					backgroundToggle: 'choose',
					backgroundColor: input.chooseBackgroundColor,
				});
				break;
			default:
				console.log('error in handleBtns');
				break;
		}
	};

	const handleStyleBtns = (event) => {
		const word = event.target.innerText;
		// let colorInput = null;
		const convertedWord =
			word.charAt(0).toLowerCase() + word.replace(/\s/g, '').slice(1);
		setActiveStyle(convertedWord);
		adjustBoxState({ drawStyle: convertedWord });
	};

	return (
		<Fragment>
			<div className='separatorContainer'>
				<div className='separators'>
					<p>
						Box Count:
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
					</p>
				</div>
				<div className='separators'>
					<p>Primary Color:</p>
					<div className='primaryColorContainer btnContainer'>
						<button
							id='defaultPrimaryColorBtn'
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
								name='choosePrimaryColor'
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
		</Fragment>
	);
};

export default BoxDropDownMarkUp;
