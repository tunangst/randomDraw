const cloneObj = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export default cloneObj;
