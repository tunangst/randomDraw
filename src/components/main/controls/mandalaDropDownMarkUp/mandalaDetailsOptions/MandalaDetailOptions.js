import React, { useState } from 'react';

const initialState = {
	blendMode: 'random',
	loopCount: 5,
	minShapeSize: 20,
	maxShapeSize: '',
	minShapeCount: 4,
	maxShapeCount: 200,
	minPathRadius: 20,
	maxPathRadius: '',
	chooseBackgroundColor: '#8C00FF',
};

const MandalaDetailOptions = ({ adjustMandalaState }) => {
	const [input, setInput] = useState(initialState);

	const handleReset = () => {
		setInput({
			...initialState,
		});
		adjustMandalaState({
			loopCount: null,
			minShapeSize: null,
			maxShapeSize: null,
			minShapeCount: null,
			maxShapeCount: null,
			minPathRadius: null,
			maxPathRadius: null,
			blendMode: null,
			chooseBackgroundColor: null,
		});
	};
	const handleChange = (event) => {
		const id = event.target.id;
		let value = event.target.value;
		if (initialState[id] === value) {
			value = null;
		}
		//defaults
		switch (id) {
			case 'chooseBackgroundColor':
				setInput({
					...input,
					[id]: value,
				});
				break;
			case 'customBackgroundSwitch':
				const checked = event.target.checked;
				adjustMandalaState({
					[id]: checked,
					chooseBackgroundColor: input.chooseBackgroundColor,
				});
				break;
			case 'blendMode':
				adjustMandalaState({ [id]: value });
				setInput({
					...input,
					[id]: value,
				});
				break;
			case 'loopCount':
			case 'minShapeSize':
			case 'maxShapeSize':
			case 'maxShapeSize':
			case 'minShapeCount':
			case 'maxShapeCount':
			case 'minPathRadius':
			case 'maxPathRadius':
				value = Number(value);
				adjustMandalaState({ [id]: value });
				setInput({
					...input,
					[id]: value,
				});
				break;

			default:
				console.log(
					'in default in handle change of mandala detail options'
				);
				break;
		}
		// if (initialState[id] === value) {
		// adjustMandalaState({ [id]: null });
		// setInput({
		// ...input,
		// [id]: value,
		// });
		// return;
		// }
		//custom
		// if (id === 'customBackgroundSwitch') {
		// 	const checked = event.target.checked;
		// 	adjustMandalaState({
		// 		[id]: checked,
		// 		chooseBackgroundColor: input.chooseBackgroundColor,
		// 	});
		// 	return;
		// }
		//update this state
		// if (id !== 'blendMode') {
		// 	value = Number(value);
		// }
		// setInput({
		// 	...input,
		// 	[id]: value,
		// });

		// if (id === 'chooseBackgroundColor') return;
		//update main state
		// adjustMandalaState({ [id]: value });
	};

	return (
		<section id='detailsContainer'>
			<header>
				Details: <span>(some of these values are calculated)</span>
			</header>
			<div className='container'>
				<section className='detailsInputs'>
					<select
						name='blendMode'
						id='blendMode'
						className='mandalaInputs'
						onChange={handleChange}
					>
						<option value='random'>random</option>
						<option value='difference'>difference</option>
						<option value='screen'>screen</option>
						<option value='multiply'>multiply</option>
					</select>
					<input
						id='loopCount'
						className='mandalaInputs'
						name='loopCount'
						type='number'
						value={input.loopCount}
						min='2'
						onChange={handleChange}
					/>
					<input
						id='minShapeSize'
						className='mandalaInputs'
						name='minShapeSize'
						type='number'
						value={input.minShapeSize}
						min='2'
						onChange={handleChange}
					/>
					<input
						id='maxShapeSize'
						className='mandalaInputs'
						name='maxShapeSize'
						type='number'
						value={input.maxShapeSize}
						min='2'
						placeholder='200'
						onChange={handleChange}
					/>
					<input
						id='minShapeCount'
						className='mandalaInputs'
						name='minShapeCount'
						type='number'
						value={input.minShapeCount}
						min='2'
						onChange={handleChange}
					/>
					<input
						id='maxShapeCount'
						className='mandalaInputs'
						name='maxShapeCount'
						type='number'
						value={input.maxShapeCount}
						min='2'
						onChange={handleChange}
					/>
					<input
						id='minPathRadius'
						className='mandalaInputs'
						name='minPathRadius'
						type='number'
						value={input.minPathRadius}
						min='2'
						onChange={handleChange}
					/>
					<input
						id='maxPathRadius'
						className='mandalaInputs'
						name='maxPathRadius'
						type='number'
						value={input.maxPathRadius}
						min='2'
						placeholder='500'
						onChange={handleChange}
					/>
					<div>
						<input
							id='chooseBackgroundColor'
							name='chooseBackgroundColor'
							type='color'
							value={input.chooseBackgroundColor}
							onChange={handleChange}
						/>
						<input
							id='customBackgroundSwitch'
							className='mandalaInputs'
							name='customBackgroundSwitch'
							type='checkbox'
							onChange={handleChange}
						/>
					</div>
				</section>
				<section className='detailsLabels'>
					<label htmlFor='blendMode'>Blend Mode</label>
					<label htmlFor='loopCount'>Loop Count</label>
					<label htmlFor='minShapeSize'>Min Shape Size</label>
					<label htmlFor='maxShapeSize'>Max Shape Size</label>
					<label htmlFor='minShapeCount'>Min Shape Count</label>
					<label htmlFor='maxShapeCount'>Max Shape Count</label>
					<label htmlFor='minPathRadius'>Min Path Radius</label>
					<label htmlFor='maxPathRadius'>Max Path Radius</label>
					<label htmlFor='backgroundColor'>Background Color</label>
				</section>
				<section className='detailsReset'>
					<button className='resetBtn' onClick={handleReset}>
						Reset
					</button>
				</section>
			</div>
		</section>
	);
};

export default MandalaDetailOptions;