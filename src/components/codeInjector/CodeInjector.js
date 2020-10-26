import React from 'react';
import { cloneObj, writeInputCode } from '../../functions/functions.js';

const CodeInjector = ({ state }) => {
	//get code
	let displayCode = cloneObj(state);
	// clearEmpties(displayCode);
	displayCode = writeInputCode(displayCode);
	// console.log(displayCode);

	return (
		<section id='codeInjectionContainer'>
			<pre>
				<code className='codeInjection'>{displayCode}</code>
			</pre>
		</section>
	);
};

export default CodeInjector;
