import React, { useState } from 'react';

const MandalaSameShapeOptions = ({ adjustMandalaState }) => {
	const [activeSameShape, setActiveSameShape] = useState('random');
	const handleSameShapeBtns = (event) => {
		let id = event.target.id;
		const name = event.target.name;
		setActiveSameShape(id);
		if (id === 'random') {
			id = null;
		}
		adjustMandalaState({ [name]: id });
	};
	return (
		<div className='btnContainer'>
			<button
				id='random'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'random' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Random
			</button>
			<button
				id='circle'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'circle' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Circle
			</button>
			<button
				id='oval'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'oval' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Oval
			</button>
			<button
				id='square'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'square' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Square
			</button>
			<button
				id='diamond'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'diamond' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Diamond
			</button>
			<button
				id='starburst'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'starburst' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Starburst
			</button>
			<button
				id='slant'
				name='customShape'
				className={`thinBtns ${
					activeSameShape === 'slant' ? 'active' : ''
				}`}
				onClick={handleSameShapeBtns}
			>
				Slant
			</button>
		</div>
	);
};

export default MandalaSameShapeOptions;
