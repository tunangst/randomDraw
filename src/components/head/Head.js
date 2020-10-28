import React, { useState } from 'react';
import Sequence from './sequence/Sequence';

const Head = ({ sequence }) => {
	const [showSequence, setShowSequence] = useState(false);

	const handleSequence = (event) => {
		setShowSequence(!showSequence);
	};
	return (
		<header id='head'>
			<section className='headContainer'>
				<h1>randomDraw</h1>
				<button
					className='btns toggleSequence'
					onClick={handleSequence}
				>
					sequence
				</button>
				<img id='randomDrawSequence' />
			</section>
			{showSequence && <Sequence sequence={sequence} />}
		</header>
	);
};

export default Head;
