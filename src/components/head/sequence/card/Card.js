import React from 'react';

const Card = ({ image }) => {
	const handleClick = (event) => {
		console.log('clicked');
		//open modal with large image
	};
	return (
		<figure className='card' onClick={handleClick}>
			<img src={image} alt='generated design image' />
		</figure>
	);
};

export default Card;
