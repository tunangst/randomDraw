import React from 'react';
import { cloneObj, writeInputCode } from '../functions/functions.js';

const CodeInjector = ({ state }) => {
	//get code
	let displayState = cloneObj(state);
	// clearEmpties(displayState);
	displayState = writeInputCode(displayState);
	// console.log(displayState);

	return (
		<section className='codeInjectionContainer'>
			<pre>
				<code className='codeInjection'>{displayState}</code>
			</pre>
		</section>
	);
};

export default CodeInjector;
