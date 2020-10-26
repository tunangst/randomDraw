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
	const handleTypeBtns = (event) => {
		const name = event.target.name;
		let id = event.target.id;

		if (name === 'drawType' && id === 'mandalaCustom') {
			id = 'custom';
			setShowDrawOptions(true);
		} else {
			setShowDrawOptions(false);
		}
		if (id === 'random') id = null;
		setInput({
			...input,
			drawType: id === 'random' ? null : id,
		});
		setActiveStyle(id);
		//place as default;
		adjustMandalaState({ drawType: id });
	};

	return (
		<section id='mandalaSubControls'>
			<div className='separatorContainer'>
				<div className='separators'>
					<MandalaDetailOptions
						adjustMandalaState={adjustMandalaState}
					/>
				</div>
				<div className='separators'>
					<p>Draw Type:</p>
					<div className='btnContainer'>
						<button
							id='random'
							name='drawType'
							className={`btns boxPatternBtns ${
								activeStyle === 'random' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Random
						</button>
						<button
							id='strokeOnly'
							name='drawType'
							className={`btns ${
								activeStyle === 'strokeOnly' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Stroke Only
						</button>
						<button
							id='fillOnly'
							name='drawType'
							className={`btns ${
								activeStyle === 'fillOnly' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Fill Only
						</button>
						<button
							id='fillAndStroke'
							name='drawType'
							className={`btns ${
								activeStyle === 'fillAndStroke' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Fill and Stroke
						</button>
						<button
							id='individual'
							name='drawType'
							className={`btns ${
								activeStyle === 'individual' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Individual
						</button>
						<button
							id='chaos'
							name='drawType'
							className={`btns ${
								activeStyle === 'chaos' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Chaos
						</button>
						<button
							id='outline'
							name='drawType'
							className={`btns ${
								activeStyle === 'outline' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							Outline
						</button>
						<button
							id='mandalaCustom'
							name='drawType'
							className={`btns custom ${
								activeStyle === 'custom' ? 'active' : ''
							}`}
							onClick={handleTypeBtns}
						>
							<p>Custom</p>
						</button>
					</div>
				</div>
				<div className='separators'>
					{showDrawOptions ? (
						<MandalaCustomDrawOptions
							adjustMandalaState={adjustMandalaState}
						/>
					) : null}
				</div>
			</div>
			<div className='separators closingSeparator'>
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
							activeShapeType === 'shapeTypeSame' ? 'active' : ''
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
		</section>
	);
};

export default MandalaDropDownMarkUp;
// <div className='separators'>
// 	<p>
// 		Draw Type:
// 		<select
// 			id='drawType'
// 			className='mandalaInputs'
// 			name='drawType'
// 			onChange={handleSelectionChange}
// 		>
// 			<option value='random'>Random</option>
// 			<option value='strokeOnly'>Stroke Only</option>
// 			<option value='fillOnly'>Fill Only</option>
// 			<option value='fillAndStroke'>Fill And Stroke</option>
// 			<option value='individual'>Individual</option>
// 			<option value='chaos'>Chaos</option>
// 			<option value='outline'>Outline</option>
// 			<option value='custom'>Custom</option>
// 		</select>
// 	</p>
// </div>;

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
// </div>;
