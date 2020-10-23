const cloneObj = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

function clearEmpties(obj) {
	for (let key in obj) {
		if (!obj[key] || typeof obj[key] !== 'object') {
			//remove strings null and undefined
			if (
				obj[key] === undefined ||
				obj[key] === null ||
				obj[key] === ''
			) {
				delete obj[key];
			}
			continue; // If null or not an object, skip to the next iteration
		}
		// The property is an object
		clearEmpties(obj[key]); // <-- Make a recursive call on the nested object
		if (Object.keys(obj[key]).length === 0) {
			delete obj[key]; // The object had no properties, so delete that property
		}
	}
}

const writeInputCode = (obj) => {
	clearEmpties(obj);

	const tab = `  `;
	let html = `randomDraw(${JSON.stringify(obj, null, tab)});`;
	// console.log(html);

	return html;
};

export { cloneObj, clearEmpties, writeInputCode };
