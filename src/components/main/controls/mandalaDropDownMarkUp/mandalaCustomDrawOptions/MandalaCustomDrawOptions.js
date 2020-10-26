import React, { Fragment, useState, useEffect } from 'react';

const initialState = {
	clear: {
		clearAll: false,
		clearRandomLoops: false,
		clearIndividualLoops: false,
	},
	fill: {
		fillAll: false,
		fillRandomLoops: false,
		fillIndividualLoops: false,
	},
	fillColor: {
		fillColorAll: false,
		fillColorRandomLoops: false,
		fillColorIndividualLoops: false,
	},
	stroke: {
		strokeAll: false,
		strokeRandomLoops: false,
		strokeIndividualLoops: false,
	},
	strokeColor: {
		strokeColorAll: false,
		strokeColorRandomLoops: false,
		strokeColorIndividualLoops: false,
	},
	strokeWidth: {
		strokeWidthAll: false,
		strokeWidthRandomLoops: false,
		strokeWidthIndividualLoops: false,
	},
};

const MandalaCustomDrawOptions = ({ adjustMandalaState }) => {
	const [input, setInput] = useState(initialState);
	const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);

	useEffect(() => {
		console.log(
			'refresh on input change so it does not take two submits to show'
		);
		adjustMandalaState({ ...collapseState(input) });
		//prevent input state refreshing component,
	}, [input]);

	const collapseState = (state) => {
		let collapsedState = {};
		for (let lvl1Key in state) {
			for (let lvl2Key in state[lvl1Key]) {
				// if (state[lvl1Key][lvl2Key]) {
				collapsedState[lvl2Key] = state[lvl1Key][lvl2Key];
				// }
			}
		}
		return collapsedState;
	};
	const handleChange = (event) => {
		event.stopPropagation();
		let id = event.target.id;
		let name = event.target.name;
		// let value = event.target.value;

		// //update this state
		setInput({
			...input,
			[name]: {
				...initialState[name],
				[id]: true,
			},
		});
	};

	return (
		<section id='customContainer'>
			<section className='customInputs'>
				<div>
					<input
						id='clearAll'
						className='mandalaInputs'
						name='clear'
						type='radio'
						value='all'
						onChange={handleChange}
					/>

					<input
						id='clearRandomLoops'
						className='mandalaInputs'
						name='clear'
						type='radio'
						value='random'
						onChange={handleChange}
					/>

					<input
						id='clearIndividual'
						className='mandalaInputs'
						name='clear'
						type='radio'
						value='individual'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						id='fillAll'
						className='mandalaInputs'
						name='fill'
						type='radio'
						value='all'
						onChange={handleChange}
					/>

					<input
						id='fillRandomLoops'
						className='mandalaInputs'
						name='fill'
						type='radio'
						value='random'
						onChange={handleChange}
					/>

					<input
						id='fillIndividual'
						className='mandalaInputs'
						name='fill'
						type='radio'
						value='individual'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						id='fillColorAll'
						className='mandalaInputs'
						name='fillColor'
						type='radio'
						value='all'
						onChange={handleChange}
					/>

					<input
						id='fillColorRandomLoops'
						className='mandalaInputs'
						name='fillColor'
						type='radio'
						value='random'
						onChange={handleChange}
					/>

					<input
						id='fillColorIndividual'
						className='mandalaInputs'
						name='fillColor'
						type='radio'
						value='individual'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						id='strokeAll'
						className='mandalaInputs'
						name='stroke'
						type='radio'
						value='all'
						onChange={handleChange}
					/>

					<input
						id='strokeRandomLoops'
						className='mandalaInputs'
						name='stroke'
						type='radio'
						value='random'
						onChange={handleChange}
					/>

					<input
						id='strokeIndividual'
						className='mandalaInputs'
						name='stroke'
						type='radio'
						value='individual'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						id='strokeColorAll'
						className='mandalaInputs'
						name='strokeColor'
						type='radio'
						value='all'
						onChange={handleChange}
					/>

					<input
						id='strokeColorRandomLoops'
						className='mandalaInputs'
						name='strokeColor'
						type='radio'
						value='random'
						onChange={handleChange}
					/>

					<input
						id='strokeColorIndividual'
						className='mandalaInputs'
						name='strokeColor'
						type='radio'
						value='individual'
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						id='strokeWidthAll'
						className='mandalaInputs'
						name='strokeWidth'
						type='radio'
						value='all'
						onChange={handleChange}
					/>

					<input
						id='strokeWidthRandomLoops'
						className='mandalaInputs'
						name='strokeWidth'
						type='radio'
						value='random'
						onChange={handleChange}
					/>

					<input
						id='strokeWidthIndividual'
						className='mandalaInputs'
						name='strokeWidth'
						type='radio'
						value='individual'
						onChange={handleChange}
					/>
				</div>
			</section>
			<section className='customLabels'>
				<div>
					<label htmlFor='clearAll'>Clear All Loops:</label>
					<label htmlFor='clearRandomLoops'>
						Clear Random Loops:
					</label>
					<label htmlFor='clearIndividual'>Clear Individual:</label>
				</div>
				<div>
					<label htmlFor='fillAll'>Fill All Loops:</label>
					<label htmlFor='fillRandomLoops'>Fill Random Loops:</label>
					<label htmlFor='fillIndividual'>Fill Individual:</label>
				</div>
				<div>
					<label htmlFor='fillColorAll'>Fill Color All Loops:</label>
					<label htmlFor='fillColorRandomLoops'>
						Fill Color Random Loops:
					</label>
					<label htmlFor='fillColorIndividual'>
						Fill Color Individual:
					</label>
				</div>
				<div>
					<label htmlFor='strokeAll'>Stroke All Loops:</label>
					<label htmlFor='strokeRandomLoops'>
						Stroke Random Loops:
					</label>
					<label htmlFor='strokeIndividual'>Stroke Individual:</label>
				</div>
				<div>
					<label htmlFor='strokeColorAll'>
						Stroke Color All Loops:
					</label>
					<label htmlFor='strokeColorRandomLoops'>
						Stroke Color Random Loops:
					</label>
					<label htmlFor='strokeColorIndividual'>
						Stroke Color Individual:
					</label>
				</div>
				<div>
					<label htmlFor='strokeWidthAll'>
						Stroke Width All Loops:
					</label>
					<label htmlFor='strokeWidthRandomLoops'>
						Stroke Width Random Loops:
					</label>
					<label htmlFor='strokeWidthIndividual'>
						Stroke Width Individual:
					</label>
				</div>
			</section>
		</section>
	);
};

export default MandalaCustomDrawOptions;
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
