import React, { useState, useEffect } from 'react';
import Card from './card/Card';

const Sequence = ({ sequence }) => {
	let intervalId;

	const scroll = (target, direction) => {
		switch (direction) {
			case 'left':
				target.scrollLeft -= 10;
				break;
			case 'right':
				target.scrollLeft += 10;
				break;
			default:
				console.log('direction in sequence default');
				break;
		}
	};
	const handleMouseEnter = (event) => {
		event.preventDefault();
		const id = event.target.id;

		let target;
		switch (id) {
			case 'sequenceLeft':
				target = event.target.nextElementSibling;
				intervalId = setInterval(() => scroll(target, 'left'), 10);
				console.log(target, 'target');

				console.log('sequence left, mouse enter');
				break;
			case 'sequenceRight':
				target = event.target.previousElementSibling;
				intervalId = setInterval(() => scroll(target, 'right'), 10);
				console.log(target, 'target');

				console.log('sequence right, mouse enter');
				break;
			default:
				console.log('default in sequence case');
				break;
		}
		console.log();
	};
	const handleMouseLeave = (event) => {
		const id = event.target.id;
		switch (id) {
			case 'sequenceLeft':
				clearInterval(intervalId);
				console.log('sequence left, mouse leave');
				break;
			case 'sequenceRight':
				clearInterval(intervalId);
				console.log('sequence right, mouse leave');
				break;
			default:
				console.log('default in sequence case');
				break;
		}
		console.log();
	};
	let cardDeck;
	if (sequence.length <= 1) {
		cardDeck = null;
	} else {
		cardDeck = [...sequence];
		cardDeck.shift();
	}
	return (
		<section id='sequence'>
			<div
				id='sequenceLeft'
				className='sequenceScrolls'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<span className='arrow'></span>
			</div>
			<div className='cardContainer'>
				{cardDeck &&
					cardDeck.map((card, index) => (
						<Card key={`card${index}`} image={card} />
					))}
			</div>
			<div
				id='sequenceRight'
				className='sequenceScrolls'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<span className='arrow'></span>
			</div>
		</section>
	);
};

export default Sequence;
// create a none overflow
// add hover areas to scroll through
