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

const MainDisplay = () => {
	const [scroll, setScroll] = useState(initialState);
	// const document = document.querySelector('document');
	const html = document.querySelector('html');
	const randomDraw = document.querySelector('#randomDraw');
	let canvas;

	const handleMouseMove = (event) => {
		if (scroll.isScrolling) {
			const windowScrollX = window.scrollX;
			const windowScrollY = window.scrollY;
			const pageX = event.pageX;
			const pageY = event.pageY;
			const calcMoveX = scroll.startX - pageX + windowScrollX;
			const calcMoveY = scroll.startY - pageY + windowScrollY;
			setScroll({
				...scroll,
				endX: windowScrollX,
				endY: windowScrollY,
			});
			html.scrollLeft = calcMoveX;
			html.scrollTop = calcMoveY;
			// console.log('scroll.startX');
			// console.log(scroll.startX);
			// console.log('scroll.startY');
			// console.log(scroll.startY);
			// console.log(calcMoveX, calcMoveY);
		}
		//mouse coords
		// var cX = event.clientX;
		// var sX = event.screenX;
		// var cY = event.clientY;
		// var sY = event.screenY;
		// var coords1 = 'client - X: ' + cX + ', Y coords: ' + cY;
		// var coords2 = 'screen - X: ' + sX + ', Y coords: ' + sY;
		// console.log(coords1, coords2);
		// console.log(sX - cX, 'x');
		// console.log(sY - cY, 'Y');
		// const width = randomDraw.offsetWidth;
		// const height = randomDraw.offsetHeight;
		// const pageX = event.clientX + document.documentElement.scrollLeft;
		// console.log(pageX);
		// if (scroll.isScrolling) {
		// 	const scrollbarWidth =
		// 		randomDraw.offsetWidth - randomDraw.clientWidth;
		// 	console.log(scrollbarWidth);
		// 	console.log(randomDraw.offsetWidth);
		// 	console.log(randomDraw.clientWidth);
		// 	html.scrollLeft = pageX;
		// }
	};
	const handleMouseDown = (event) => {
		// //mouse coords
		const pageX = event.pageX;
		const pageY = event.pageY;
		const windowScrollX = window.scrollX;
		const windowScrollY = window.scrollY;
		console.log(windowScrollX, windowScrollY);
		console.log(pageX, pageY);
		setScroll({
			...scroll,
			isScrolling: true,
			startX: pageX,
			startY: pageY,
		});
		// setScroll({
		// 	...scroll,
		// 	isScrolling: true,
		// 	startX: pageX,
		// 	startY: pageY,
		// });
		// var cX = event.clientX;
		// var sX = event.screenX;
		// var cY = event.clientY;
		// var sY = event.screenY;
		// var coords1 = 'client - X: ' + cX + ', Y coords: ' + cY;
		// var coords2 = 'screen - X: ' + sX + ', Y coords: ' + sY;
		// console.log(coords1, coords2);
		// console.log(sX - cX, 'x');
		// console.log(sY - cY, 'Y');
		// if (!canvas) {
		// 	canvas = document.querySelector('#randomDraw').childNodes[0];
		// }
		// let width, height;
		// if (scroll.startX === 0 || scroll.startY === 0) {
		// 	width = canvas.getBoundingClientRect().width;
		// 	height = canvas.getBoundingClientRect().height;
		// } else {
		// 	width = scroll.scrollLeft;
		// 	height = scroll.scrollTop;
		// }
		// setScroll({
		// 	...scroll,
		// 	canvasWidth: width,
		// 	canvasHeight: height,
		// });
		// // target.scrollLeft -= 10
		// setScroll({
		// 	...scroll,
		// 	isScrolling: true,
		// 	clientX: event.clientX,
		// 	clientY: event.clientY,
		// });
		// console.log(event.clientX, event.clientY, 'clientX', 'clientY');
		// console.log(event.movementX, event.movementY, 'movementX', 'movementY');
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
			Drawing will go here
		</section>
	);
};
export default MainDisplay;
