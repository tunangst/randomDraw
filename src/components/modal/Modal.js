import React from 'react';
import Loading from './loading/Loading';
import Image from './image/Image';

const Modal = ({ type, payload, adjustModal }) => {
	const handleModalClose = () => {
		adjustModal({
			display: false,
		});
	};

	let inner;
	switch (type) {
		case 'loading':
			inner = <Loading />;
			break;
		case 'image':
			inner = <Image src={payload} />;
			break;
		default:
			console.log('default in Modal');
			break;
	}
	return (
		<section id='modal'>
			<div className='modalContainer'>
				<div className='close' onClick={handleModalClose}>
					X
				</div>
				{inner}
			</div>
			<div className='backdrop'></div>
		</section>
	);
};

export default Modal;
