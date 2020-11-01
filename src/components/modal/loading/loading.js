import React from 'react';

const Loading = () => {
	const handleAnimationStart = (event) => {
		console.log('animation started');
	};
	const handleAnimationEnd = (event) => {
		console.log('animation ended');
	};
	return (
		<h2>Drawing :^]</h2>
		// <div id='threeRotatingBars'>
		// 	<span
		// 		className='bars'
		// 		onAnimationStart={handleAnimationStart}
		// 		onAnimationEnd={handleAnimationEnd}
		// 	></span>
		// </div>
	);
};
export default Loading;

//animation doesn't start
