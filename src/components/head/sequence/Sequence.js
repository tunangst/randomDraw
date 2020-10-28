import React, { useState, useEffect } from 'react';
import Card from './card/Card';

const Sequence = ({ sequence }) => {
	const handleMouseEnter = (event) => {
		console.log(event.relatedTarget);
		console.log(event);
		const id = event.target.id;
		switch (id) {
			case 'sequenceLeft':
				console.log('sequence left, mouse enter');
				break;
			case 'sequenceRight':
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
				console.log('sequence left, mouse leave');
				break;
			case 'sequenceRight':
				console.log('sequence right, mouse leave');
				break;
			default:
				console.log('default in sequence case');
				break;
		}
		console.log();
	};
	// const handleLeftHover = (event) => {
	// 	console.log('leftHover');
	// };
	// const handleRightHover = (event) => {
	// 	console.log('rightHover');
	// };

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
				{sequence.map((card, index) => (
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
