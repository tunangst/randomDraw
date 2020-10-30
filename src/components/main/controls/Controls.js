import React, { useState } from 'react';
import BoxDropDownMarkUp from './boxDropdownMarkUp/BoxDropDownMarkUp';
import MandalaDropDownMarkUp from './mandalaDropDownMarkUp/MandalaDropDownMarkUp';

const initialInputState = {
	width: 500,
	height: 500,
};

const Controls = ({
	adjustState,
	adjustDimensions,
	adjustBoxState,
	adjustMandalaState,
}) => {
	const [input, setInput] = useState(initialInputState);
	const [active, setActive] = useState('randomDrawerBtn');
	const [dropDown, setDropDown] = useState(false);
	const [whichDropDown, setWhichDropDown] = useState(''); //'draw', 'mandala'

	const handleBtnClick = (event) => {
		let id = event.target.id;
		switch (id) {
			case 'boxDrawerBtn':
				setDropDown(true);
				setWhichDropDown('box');
				setActive(id);
				adjustState({ typeOfDrawer: 'boxDraw' });
				break;
			case 'mandalaDrawerBtn':
				setDropDown(true);
				setWhichDropDown('mandala');
				setActive(id);
				adjustState({ typeOfDrawer: 'mandalaDraw' });
				break;
			case 'randomDrawerBtn':
				setDropDown(false);
				setActive('randomDrawerBtn');
				adjustState({ typeOfDrawer: null });
				break;
			default:
				console.log('error in handlebtnclick in controls');
				break;
		}
	};
	const handleChange = (event) => {
		const name = event.target.name;
		let value = Number(event.target.value);

		setInput({
			...input,
			[name]: event.target.value,
		});
		if (value === 500) {
			value = null;
		}

		adjustDimensions({ [name]: value });
	};

	let dropDownMarkUp;
	switch (whichDropDown) {
		case 'box':
			dropDownMarkUp = (
				<BoxDropDownMarkUp adjustBoxState={adjustBoxState} />
			);
			break;
		case 'mandala':
			dropDownMarkUp = (
				<MandalaDropDownMarkUp
					adjustMandalaState={adjustMandalaState}
				/>
			);
			break;
		default:
			dropDownMarkUp = null;
			break;
	}

	return (
		<section id='controls'>
			<section className='mainControls'>
				<div className='drawerContainer btnContainer'>
					<button
						id='randomDrawerBtn'
						className={`btns ${
							active === 'randomDrawerBtn' ? 'active' : ''
						}`}
						onClick={handleBtnClick}
					>
						Random Draw
					</button>
					<button
						id='boxDrawerBtn'
						className={`btns ${
							active === 'boxDrawerBtn' ? 'active' : ''
						}`}
						onClick={handleBtnClick}
					>
						Box Draw
					</button>
					<button
						id='mandalaDrawerBtn'
						className={`btns ${
							active === 'mandalaDrawerBtn' ? 'active' : ''
						}`}
						onClick={handleBtnClick}
					>
						Mandala Draw
					</button>
				</div>
				<p>
					Dimensions:
					<input
						id='dimensionWidth'
						name='width'
						className='inputField'
						type='number'
						value={input.width}
						min='2'
						step='2'
						onChange={handleChange}
					/>
					x
					<input
						id='dimensionHeight'
						name='height'
						className='inputField'
						type='number'
						value={input.height}
						min='2'
						step='2'
						onChange={handleChange}
					/>
				</p>
			</section>
			{dropDown && dropDownMarkUp}
		</section>
	);
};
export default Controls;
