import React from 'react';
import Loading from './loading/Loading';

const Modal = ({ type, handleModal }) => {
	let inner;
	switch (type) {
		case 'loading':
			inner = <Loading />;
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
			<div className='close' onClick={() => handleModal(null)}>
				X
			</div>
			<Loading />
			<div className='backdrop'></div>
		</section>
	);
};

export default Modal;
