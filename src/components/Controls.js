import React, { useState, Fragment } from 'react';
import BoxDropDownMarkUp from './BoxDropDownMarkUp';
// import { randomDraw } from '../../randomDraw';

const initialInputState = {
	width: 500,
	height: 500,
};

const Controls = ({
	draw,
	state,
	adjustState,
	adjustDimensions,
	adjustBoxState,
}) => {
	const [input, setInput] = useState(initialInputState);
	const [active, setActive] = useState('randomDrawerBtn');
	const [dropDown, setDropDown] = useState(false);
	const [whichDropDown, setWhichDropDown] = useState(''); //'draw', 'mandala'

	const handleBtnClick = (event) => {
		let id = event.target.id;
		switch (id) {
			case 'boxDrawerBtn':
				setActive(id);
				adjustState({ typeOfDrawer: 'boxDraw' });
				setDropDown(true);
				setWhichDropDown('box');
				break;
			case 'mandalaDrawerBtn':
				setActive(id);
				adjustState({ typeOfDrawer: 'mandalaDraw' });
				setDropDown(true);
				setWhichDropDown('mandala');
				break;
			default:
				setActive('randomDrawerBtn');
				adjustState({ typeOfDrawer: 'random' });
				setDropDown(false);
				console.log('error in handleBtnClick', id);
				break;
		}
	};
	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
		adjustDimensions({ [event.target.name]: Number(event.target.value) });
	};

	let dropDownMarkUp;
	switch (whichDropDown) {
		case 'box':
			dropDownMarkUp = (
				<BoxDropDownMarkUp adjustBoxState={adjustBoxState} />
			);
			break;
		case 'mandala':
			// dropDownMarkUp = <DropDownMarkUp />;
			break;
		default:
			dropDownMarkUp = null;
			break;
	}

	return (
		<section className='controls'>
			<div className='mainControls'>
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
						className='btns'
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
			</div>
			<div className='subControls'>
				{dropDown ? dropDownMarkUp : null}
			</div>
		</section>
	);
};
export default Controls;
