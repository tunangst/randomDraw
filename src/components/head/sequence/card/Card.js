import React from 'react';

const Card = ({ image, adjustModal }) => {
	const handleClick = (event) => {
		adjustModal({
			display: true,
			type: 'image',
			payload: image,
		});
	};
	return (
		<figure className='card' onClick={handleClick}>
			<img src={image} alt='generated design image' />
		</figure>
	);
};

export default Card;
