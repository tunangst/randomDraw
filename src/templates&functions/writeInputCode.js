const writeInputCode = (drawingObj) => {
	const tab = `  `;
	let html = `randomDraw(${JSON.stringify(drawingObj, null, tab)});`;
	console.log(html);

	return html;
};

export default writeInputCode;
