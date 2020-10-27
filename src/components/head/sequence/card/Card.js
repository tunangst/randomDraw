import React from 'react';

const Card = ({ image }) => {
	const handleClick = (event) => {
		console.log('clicked');
		//open modal with large image
	};
	return (
		<section className='card' onClick={handleClick}>
			<img src={image} alt='generated design image' />
		</section>
	);
};

export default Card;
