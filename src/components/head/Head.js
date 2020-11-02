import React, { useState } from 'react';
import Sequence from './sequence/Sequence';
import { getImage } from '../../randomDraw';

const Head = ({ sequence, adjustModal }) => {
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

	let sequenceArrow;
	if (showSequence) {
		sequenceArrow = '↑ sequence ↑';
	} else {
		sequenceArrow = '↓ sequence ↓';
	}

	return (
		<header id='head'>
			<section className='headContainer'>
				<img id='icon' src={iconImage} />
				<h1>randomDraw</h1>
				<button
					className='btns toggleSequence'
					onClick={handleSequence}
				>
					{sequenceArrow}
				</button>
			</section>
			{showSequence && (
				<Sequence sequence={sequence} adjustModal={adjustModal} />
			)}
		</header>
	);
};

export default Head;
