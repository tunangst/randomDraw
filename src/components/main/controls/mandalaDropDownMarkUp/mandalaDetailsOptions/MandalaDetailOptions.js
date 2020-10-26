import React, { Fragment, useState, useEffect } from 'react';

const initialState = {
	loopCount: 5,
	minShapeSize: 20,
	maxShapeSize: 200,
	minShapeCount: 4,
	maxShapeCount: 200,
	minPathRadius: 20,
	maxPathRadius: 500,
	blendMode: 'default',
	chooseBackgroundColor: '#ffffff',
};

const MandalaDetailOptions = ({ adjustMandalaState }) => {
	const [input, setInput] = useState(initialState);
	const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);

	// useEffect(() => {
	// 	console.log('refresh dropdown');
	// 	//prevent input state refreshing component,
	// }, []);

	const handleChange = (event) => {
		let keyName = event.target.id;
		let value = event.target.value;

		//custom
		if (keyName === 'customBackgroundSwitch') {
			const checked = event.target.checked;
			adjustMandalaState({
				[keyName]: checked,
				chooseBackgroundColor: input.chooseBackgroundColor,
			});
			return;
		}
		//update this state
		if (keyName !== 'blendMode') {
			value = Number(value);
		}
		setInput({
			...input,
			[keyName]: value,
		});

		if (keyName === 'chooseBackgroundColor') return;
		//update main state
		adjustMandalaState({ [keyName]: value });
	};

	return (
		<section id='detailsContainer'>
			<header>Details: (some of these values are calculated)</header>
			<div className='container'>
				<section className='detailsInputs'>
					<input
						id='blendMode'
						className='mandalaInputs'
						name='blendMode'
						type='string'
						value={input.blendMode}
						onChange={handleChange}
					/>
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
			</div>
		</section>
	);
};

export default MandalaDetailOptions;
// <Fragment>
// 	<p>
// 		Loop Count:
// 		<input
// 			id='loopCount'
// 			className='mandalaInputs'
// 			name='loopCount'
// 			type='number'
// 			value={input.loopCount}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Min Shape Size:
// 		<input
// 			id='minShapeSize'
// 			className='mandalaInputs'
// 			name='minShapeSize'
// 			type='number'
// 			value={input.minShapeSize}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Max Shape Size:
// 		<input
// 			id='maxShapeSize'
// 			className='mandalaInputs'
// 			name='maxShapeSize'
// 			type='number'
// 			value={input.maxShapeSize}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Min Shape Count:
// 		<input
// 			id='minShapeCount'
// 			className='mandalaInputs'
// 			name='minShapeCount'
// 			type='number'
// 			value={input.minShapeCount}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Max Shape Count:
// 		<input
// 			id='maxShapeCount'
// 			className='mandalaInputs'
// 			name='maxShapeCount'
// 			type='number'
// 			value={input.maxShapeCount}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Min Path Radius:
// 		<input
// 			id='minPathRadius'
// 			className='mandalaInputs'
// 			name='minPathRadius'
// 			type='number'
// 			value={input.minPathRadius}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Max Path Radius:
// 		<input
// 			id='maxPathRadius'
// 			className='mandalaInputs'
// 			name='maxPathRadius'
// 			type='number'
// 			value={input.maxPathRadius}
// 			min='2'
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Blend Mode:
// 		<input
// 			id='blendMode'
// 			className='mandalaInputs'
// 			name='blendMode'
// 			type='string'
// 			value={input.blendMode}
// 			onChange={handleChange}
// 		/>
// 	</p>
// 	<p>
// 		Background Color:
// 		<input
// 			id='customBackgroundSwitch'
// 			className='mandalaInputs'
// 			name='customBackgroundSwitch'
// 			type='checkbox'
// 			onChange={handleChange}
// 		/>
// 		<input
// 			id='chooseBackgroundColor'
// 			name='chooseBackgroundColor'
// 			type='color'
// 			value={input.chooseBackgroundColor}
// 			onChange={handleChange}
// 		/>
// 	</p>
// </Fragment>;
