import React, { useState } from 'react';
import MandalaCustomDrawOptions from './mandalaCustomDrawOptions/MandalaCustomDrawOptions';
import MandalaDetailOptions from './mandalaDetailOptions/MandalaDetailOptions';
import MandalaSameShapeOptions from './mandalaSameShapeOptions/MandalaSameShapeOptions';

const MandalaDropDownMarkUp = ({ adjustMandalaState }) => {
	const [showDrawOptions, setShowDrawOptions] = useState(false);
	const [showShapeTypeOptions, setShowShapeTypeOptions] = useState(false);

	const [activeDrawType, setActiveDrawType] = useState('random');
	const [activeShapeType, setActiveShapeType] = useState('shapeTypeRandom');

	const handleShapeTypeBtns = (event) => {
		const id = event.target.id;
		switch (id) {
			case 'shapeTypeRandom':
				setActiveShapeType(id);
				setShowShapeTypeOptions(false);
				adjustMandalaState({ shapeType: null });
				break;
			case 'shapeTypeSame':
				setActiveShapeType(id);
				setShowShapeTypeOptions(true);
				adjustMandalaState({ shapeType: 'same' });
				break;
			case 'shapeTypeIncrement':
				setActiveShapeType(id);
				setShowShapeTypeOptions(false);
				adjustMandalaState({ shapeType: 'increment' });
				break;
			default:
				break;
		}
	};
	const handleDrawTypeBtns = (event) => {
		let id = event.target.id;
		switch (id) {
			case 'random':
				setShowDrawOptions(false);
				setActiveDrawType(id);
				adjustMandalaState({ drawType: null });
				break;
			case 'mandalaCustom':
				setShowDrawOptions(true);
				setActiveDrawType('custom');
				// adjust mandala state done in module to prevent 2 renderings
				break;
			case 'strokeOnly':
			case 'fillOnly':
			case 'fillAndStroke':
			case 'individual':
			case 'chaos':
			case 'outline':
				setShowDrawOptions(false);
				setActiveDrawType(id);
				adjustMandalaState({ drawType: id });
			default:
				setShowDrawOptions(false);
				console.log('in default of mandala dropdown markup');
				break;
		}
	};

	return (
		<section id='mandalaSubControls'>
			<div className='separatorContainer'>
				<div className='separators'>
					<MandalaDetailOptions
						adjustMandalaState={adjustMandalaState}
					/>
				</div>
				<div className='separators drawTypeSeparator'>
					<p>Draw Type:</p>
					<div className='btnContainer'>
						<button
							id='random'
							name='drawType'
							className={`btns boxPatternBtns ${
								activeDrawType === 'random' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Random
						</button>
						<button
							id='strokeOnly'
							name='drawType'
							className={`btns ${
								activeDrawType === 'strokeOnly' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Stroke Only
						</button>
						<button
							id='fillOnly'
							name='drawType'
							className={`btns ${
								activeDrawType === 'fillOnly' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Fill Only
						</button>
						<button
							id='fillAndStroke'
							name='drawType'
							className={`btns ${
								activeDrawType === 'fillAndStroke'
									? 'active'
									: ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Fill and Stroke
						</button>
						<button
							id='individual'
							name='drawType'
							className={`btns ${
								activeDrawType === 'individual' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Individual
						</button>
						<button
							id='chaos'
							name='drawType'
							className={`btns ${
								activeDrawType === 'chaos' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Chaos
						</button>
						<button
							id='outline'
							name='drawType'
							className={`btns ${
								activeDrawType === 'outline' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							Outline
						</button>
						<button
							id='mandalaCustom'
							name='drawType'
							className={`btns custom ${
								activeDrawType === 'custom' ? 'active' : ''
							}`}
							onClick={handleDrawTypeBtns}
						>
							<p>Custom</p>
						</button>
					</div>
				</div>
				<div className='separators  customSeparator'>
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
						onClick={handleShapeTypeBtns}
					>
						Random
					</button>

					<button
						id='shapeTypeSame'
						className={`btns ${
							activeShapeType === 'shapeTypeSame' ? 'active' : ''
						}`}
						onClick={handleShapeTypeBtns}
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
						onClick={handleShapeTypeBtns}
					>
						Increment
					</button>
				</div>
				{showShapeTypeOptions && (
					<MandalaSameShapeOptions
						adjustMandalaState={adjustMandalaState}
					/>
				)}
			</div>
		</section>
	);
};

export default MandalaDropDownMarkUp;
