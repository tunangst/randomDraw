import React, { useState } from 'react';

const initialState = {
	isScrolling: false,
	canvasWidth: 0,
	canvasHeight: 0,
	endX: 0,
	endY: 0,
	startX: 0,
	startY: 0,
};

const MainDisplay = ({ drawImage }) => {
	const [scroll, setScroll] = useState(initialState);
	const html = document.querySelector('html');

	const handleMouseMove = (event) => {
		if (scroll.isScrolling) {
			const windowScrollX = window.scrollX;
			const windowScrollY = window.scrollY;
			const pageX = event.pageX;
			const pageY = event.pageY;
			const calcMoveX = scroll.startX - pageX + windowScrollX;
			const calcMoveY = scroll.startY - pageY + windowScrollY;
			//move
			html.scrollLeft = calcMoveX;
			html.scrollTop = calcMoveY;
		}
	};
	const handleMouseDown = (event) => {
		// //mouse coords
		const pageX = event.pageX;
		const pageY = event.pageY;
		setScroll({
			...scroll,
			isScrolling: true,
			startX: pageX,
			startY: pageY,
		});
	};
	const handleMouseUp = (event) => {
		setScroll({
			...scroll,
			isScrolling: false,
			startX: scroll.endX,
			startY: scroll.endY,
		});
	};

	return (
		<section
			id='randomDraw'
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseUp}
			onMouseUp={handleMouseUp}
			onMouseOut={handleMouseUp}
			onMouseMove={handleMouseMove}
		>
			<img src={drawImage} alt='Drawing will go here' />
		</section>
	);
};
export default MainDisplay;
