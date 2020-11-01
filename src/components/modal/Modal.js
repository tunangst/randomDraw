import React from 'react';
import loading from './loading/loading';

const Modal = ({ type }) => {
	let inner;
	switch (type) {
		case 'loading':
			inner = loading();
			break;
		case 'image':
			inner = '';
			break;
		default:
			console.log('default in Modal');
			break;
	}
	return (
		<section id='modal'>
			{inner}
			<div className='backdrop'></div>
		</section>
	);
};

export default Modal;
