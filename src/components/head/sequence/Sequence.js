import React, { useState, useEffect } from 'react';
import Card from './card/Card';
import { getSequence } from '../../../randomDraw';

const Sequence = () => {
	// const [cardSequence, setCardSequence] = useState([]);
	const cardNumber = 5;
	// setCardSequence([...getSequence(cardNumber)]);
	const cardSequence = getSequence(cardNumber);
	// useEffect(() => {
	// 	debugger;
	// 	console.log('useEffect in sequence');
	// 	const sequence = getSequence(cardNumber);
	// 	setCardSequence([...sequence]);
	// }, [cardSequence]);

	// for (let i = 0; i < cardNumber; i++) {
	// 	cardSequence.push(<Card image={cardSequence[i]} />);
	// }

	return (
		<section id='sequence'>
			{cardSequence.map((card) => (
				<Card image={card} />
			))}
		</section>
	);
};

export default Sequence;
// create a none overflow
// add hover areas to scroll through
