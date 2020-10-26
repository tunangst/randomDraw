import React, { Fragment, useState, useEffect } from 'react';
import MandalaCustomDrawOptions from './mandalaCustomDrawOptions/MandalaCustomDrawOptions';
import MandalaDetailOptions from './mandalaDetailsOptions/MandalaDetailOptions';
const initialState = {
	drawType: 'random',
};

const MandalaDropDownMarkUp = ({ adjustMandalaState }) => {
	const [input, setInput] = useState({});
	const [showDrawOptions, setShowDrawOptions] = useState(false);

	const [activeStyle, setActiveStyle] = useState('random');

	const [activeShapeType, setActiveShapeType] = useState('shapeTypeRandom');

	// useEffect(() => {
	// 	console.log('mandalaDropDownMarkUp useEffect');
	// }, [input]);
	const handleSelectionChange = (event) => {
		const name = event.target.name;
		const selection = event.target.selectedOptions[0].value;

		//see if I need to show custom options
		if (name === 'drawType' && selection === 'custom') {
			setShowDrawOptions(true);
		} else {
			setShowDrawOptions(false);
		}
		setInput({
			...input,
			[name]: selection === 'random' ? null : selection,
		});
		//send obj to app
		adjustMandalaState({ [name]: selection });
	};
	const handleBtns = (event) => {
		// adjustBoxState([event.target.name], event.target.value);
		const id = event.target.id;
		// let colorInput = null;
		switch (id) {
			case 'shapeTypeRandom':
				setActiveShapeType(id);
				adjustMandalaState({ shapeType: null });
				break;
			case 'shapeTypeSame':
				setActiveShapeType(id);
				adjustMandalaState({ shapeType: 'same' });
				break;
			case 'shapeTypeIncrement':
				setActiveShapeType(id);
				adjustMandalaState({ shapeType: 'increment' });
				break;
			default:
				break;
		}
	};

	return (
		<section id='mandalaSubControls'>
			<div className='separatorContainer'>
				<div className='separators'>
					<p>
						Draw Type:
						<select
							id='drawType'
							className='mandalaInputs'
							name='drawType'
							onChange={handleSelectionChange}
						>
							<option value='random'>Random</option>
							<option value='strokeOnly'>Stroke Only</option>
							<option value='fillOnly'>Fill Only</option>
							<option value='fillAndStroke'>
								Fill And Stroke
							</option>
							<option value='individual'>Individual</option>
							<option value='chaos'>Chaos</option>
							<option value='outline'>Outline</option>
							<option value='custom'>Custom</option>
						</select>
					</p>
				</div>
				<div className='separators'>
					{showDrawOptions ? (
						<MandalaCustomDrawOptions
							adjustMandalaState={adjustMandalaState}
						/>
					) : null}
				</div>
				<div className='separators'>
					<p>Shape Type:</p>
					<div className='shapeType btnContainer'>
						<button
							id='shapeTypeRandom'
							className={`btns ${
								activeShapeType === 'shapeTypeRandom'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Random
						</button>

						<button
							id='shapeTypeSame'
							className={`btns ${
								activeShapeType === 'shapeTypeSame'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Same
						</button>

						<button
							id='shapeTypeIncrement'
							className={`btns ${
								activeShapeType === 'shapeTypeIncrement'
									? 'active'
									: ''
							}`}
							onClick={handleBtns}
						>
							Increment
						</button>
					</div>
				</div>
				<div className='separators'>
					<MandalaDetailOptions
						adjustMandalaState={adjustMandalaState}
					/>
				</div>
			</div>
		</section>
	);
};

export default MandalaDropDownMarkUp;

// <Fragment>
// <div className='separatorContainer'>
// 	<div className='separators'>
// 		<p>
// 			Box Count:
// 			<input
// 				id='boxCount'
// 				className='inputField'
// 				name='boxCount'
// 				type='number'
// 				value={input.boxCount}
// 				min='2'
// 				step='2'
// 				onChange={handleChange}
// 			/>
// 		</p>
// 	</div>
// 	<div className='separators'>
// 		<p>Primary Color:</p>
// 		<div className='primaryColorContainer btnContainer'>
// 			<button
// 				id='defaultPrimaryColorBtn'
// 				className={`btns ${
// 					activePrimary === 'defaultPrimaryColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Default
// 			</button>
// 			<button
// 				id='randomPrimaryColorBtn'
// 				className={`btns ${
// 					activePrimary === 'randomPrimaryColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Random
// 			</button>
// 			<button
// 				id='choosePrimaryColorBtn'
// 				className={`btns ${
// 					activePrimary === 'choosePrimaryColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Choose
// 				<input
// 					id='choosePrimaryColor'
// 					name='choosePrimaryColor'
// 					type='color'
// 					value={input.choosePrimaryColor}
// 					onChange={handleChange}
// 				/>
// 			</button>
// 		</div>
// 	</div>
// 	<div className='separators'>
// 		<p>Secondary Color:</p>
// 		<div className='secondaryColorContainer btnContainer'>
// 			<button
// 				id='defaultSecondaryColorBtn'
// 				className={`btns ${
// 					activeSecondary === 'defaultSecondaryColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Default Random
// 			</button>
// 			<button
// 				id='chooseSecondaryColorBtn'
// 				className={`btns ${
// 					activeSecondary === 'chooseSecondaryColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Choose
// 				<input
// 					id='chooseSecondaryColor'
// 					type='color'
// 					value={input.chooseSecondaryColor}
// 					onChange={handleChange}
// 				/>
// 			</button>
// 		</div>
// 	</div>
// 	<div className='separators'>
// 		<p>Background Color:</p>
// 		<div className='backgroundColorContainer btnContainer'>
// 			<button
// 				id='defaultBackgroundColorBtn'
// 				className={`btns ${
// 					activeBackground === 'defaultBackgroundColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Default
// 			</button>
// 			<button
// 				id='randomBackgroundColorBtn'
// 				className={`btns ${
// 					activeBackground === 'randomBackgroundColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Random
// 			</button>
// 			<button
// 				id='chooseBackgroundColorBtn'
// 				className={`btns ${
// 					activeBackground === 'chooseBackgroundColorBtn'
// 						? 'active'
// 						: ''
// 				}`}
// 				onClick={handleBtns}
// 			>
// 				Choose
// 				<input
// 					id='chooseBackgroundColor'
// 					type='color'
// 					value={input.chooseBackgroundColor}
// 					onChange={handleChange}
// 				/>
// 			</button>
// 		</div>
// 	</div>
// </div>
// <div className='styleContainer btnContainer'>
// 	<p>Styles</p>
// 	<div className='btnContainer'>
// 		<button
// 			id='randomBtn'
// 			className={`btns boxPatternBtns ${
// 				activeStyle === 'random' ? 'active' : ''
// 			}`}
// 			onClick={handleStyleBtns}
// 		>
// 			Random
// 		</button>
// 		<button
// 			id='fullCloneBtn'
// 			className={`btns boxPatternBtns ${
// 				activeStyle === 'fullClone' ? 'active' : ''
// 			}`}
// 			onClick={handleStyleBtns}
// 		>
// 			Full Clone
// 		</button>
// 		<button
// 			id='fullReflectBtn'
// 			className={`btns boxPatternBtns ${
// 				activeStyle === 'fullReflect' ? 'active' : ''
// 			}`}
// 			onClick={handleStyleBtns}
// 		>
// 			Full Reflect
// 		</button>
// 		<button
// 			id='fullRotateBtn'
// 			className={`btns boxPatternBtns ${
// 				activeStyle === 'fullRotate' ? 'active' : ''
// 			}`}
// 			onClick={handleStyleBtns}
// 		>
// 			Full Rotate
// 		</button>
// 		<button
// 			id='halfReflectBtn'
// 			className={`btns boxPatternBtns ${
// 				activeStyle === 'halfReflect' ? 'active' : ''
// 			}`}
// 			onClick={handleStyleBtns}
// 		>
// 			Half Reflect
// 		</button>
// 		<button
// 			id='noPatternBtn'
// 			className={`btns boxPatternBtns ${
// 				activeStyle === 'noPattern' ? 'active' : ''
// 			}`}
// 			onClick={handleStyleBtns}
// 		>
// 			No Pattern
// 		</button>
// 	</div>
// </div>
// </Fragment>
