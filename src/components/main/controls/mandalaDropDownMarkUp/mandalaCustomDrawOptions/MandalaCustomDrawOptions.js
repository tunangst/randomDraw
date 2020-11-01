import React, { useState, useEffect } from 'react';

const initialState = {
	clear: {
		clearAll: false,
		clearRandomLoops: false,
		clearIndividual: false,
	},
	fill: {
		fillAll: false,
		fillRandomLoops: false,
		fillIndividual: false,
	},
	fillColor: {
		fillColorAll: false,
		fillColorRandomLoops: false,
		fillColorIndividual: false,
	},
	stroke: {
		strokeAll: false,
		strokeRandomLoops: false,
		strokeIndividual: false,
	},
	strokeColor: {
		strokeColorAll: false,
		strokeColorRandomLoops: false,
		strokeColorIndividual: false,
	},
	strokeWidth: {
		strokeWidthAll: false,
		strokeWidthRandomLoops: false,
		strokeWidthIndividual: false,
	},
};

const MandalaCustomDrawOptions = ({ adjustMandalaState }) => {
	const [input, setInput] = useState(initialState);
	const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);

	useEffect(() => {
		console.log('useEffect in mandalaCustomDrawOptions');
		adjustMandalaState({
			drawType: 'custom',
			...collapseState(input),
		});
	}, [input]);

	const collapseState = (state) => {
		let collapsedState = {};
		for (let lvl1Key in state) {
			for (let lvl2Key in state[lvl1Key]) {
				collapsedState[lvl2Key] = state[lvl1Key][lvl2Key];
			}
		}
		return collapsedState;
	};
	const handleChange = (event) => {
		event.stopPropagation();
		let id = event.target.id;
		let name = event.target.name;

		if (event.target.checked && input[name][id]) {
			event.target.checked = false;
			setInput({
				...input,

				[name]: {
					...initialState[name],
				},
			});
		} else {
			// //update this state
			setInput({
				...input,
				[name]: {
					...initialState[name],
					[id]: true,
				},
			});
		}
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
						onClick={handleChange}
					/>

					<input
						id='clearRandomLoops'
						className='mandalaInputs'
						name='clear'
						type='radio'
						value='random'
						onClick={handleChange}
					/>

					<input
						id='clearIndividual'
						className='mandalaInputs'
						name='clear'
						type='radio'
						value='individual'
						onClick={handleChange}
					/>
				</div>
				<div>
					<input
						id='fillAll'
						className='mandalaInputs'
						name='fill'
						type='radio'
						value='all'
						onClick={handleChange}
					/>

					<input
						id='fillRandomLoops'
						className='mandalaInputs'
						name='fill'
						type='radio'
						value='random'
						onClick={handleChange}
					/>

					<input
						id='fillIndividual'
						className='mandalaInputs'
						name='fill'
						type='radio'
						value='individual'
						onClick={handleChange}
					/>
				</div>
				<div>
					<input
						id='fillColorAll'
						className='mandalaInputs'
						name='fillColor'
						type='radio'
						value='all'
						onClick={handleChange}
					/>

					<input
						id='fillColorRandomLoops'
						className='mandalaInputs'
						name='fillColor'
						type='radio'
						value='random'
						onClick={handleChange}
					/>

					<input
						id='fillColorIndividual'
						className='mandalaInputs'
						name='fillColor'
						type='radio'
						value='individual'
						onClick={handleChange}
					/>
				</div>
				<div>
					<input
						id='strokeAll'
						className='mandalaInputs'
						name='stroke'
						type='radio'
						value='all'
						onClick={handleChange}
					/>

					<input
						id='strokeRandomLoops'
						className='mandalaInputs'
						name='stroke'
						type='radio'
						value='random'
						onClick={handleChange}
					/>

					<input
						id='strokeIndividual'
						className='mandalaInputs'
						name='stroke'
						type='radio'
						value='individual'
						onClick={handleChange}
					/>
				</div>
				<div>
					<input
						id='strokeColorAll'
						className='mandalaInputs'
						name='strokeColor'
						type='radio'
						value='all'
						onClick={handleChange}
					/>

					<input
						id='strokeColorRandomLoops'
						className='mandalaInputs'
						name='strokeColor'
						type='radio'
						value='random'
						onClick={handleChange}
					/>

					<input
						id='strokeColorIndividual'
						className='mandalaInputs'
						name='strokeColor'
						type='radio'
						value='individual'
						onClick={handleChange}
					/>
				</div>
				<div>
					<input
						id='strokeWidthAll'
						className='mandalaInputs'
						name='strokeWidth'
						type='radio'
						value='all'
						onClick={handleChange}
					/>

					<input
						id='strokeWidthRandomLoops'
						className='mandalaInputs'
						name='strokeWidth'
						type='radio'
						value='random'
						onClick={handleChange}
					/>

					<input
						id='strokeWidthIndividual'
						className='mandalaInputs'
						name='strokeWidth'
						type='radio'
						value='individual'
						onClick={handleChange}
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
