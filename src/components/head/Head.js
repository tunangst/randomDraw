import React, { useState } from 'react';
import Sequence from './sequence/Sequence';
import { getImage } from '../../randomDraw';

const Head = ({ sequence }) => {
	const [showSequence, setShowSequence] = useState(false);
	let iconImage;
	if (sequence.length > 0) {
		iconImage = sequence[0];
	} else {
		iconImage = getImage();
	}

	const handleSequence = (event) => {
		setShowSequence(!showSequence);
	};

	return (
		<header id='head'>
			<section className='headContainer'>
				<img id='icon' src={iconImage} />
				<h1>randomDraw</h1>
				<button
					className='btns toggleSequence'
					onClick={handleSequence}
				>
					sequence
				</button>
			</section>
			{showSequence && <Sequence sequence={sequence} />}
		</header>
	);
};

export default Head;
