const roll = (range) => {
    const test = Math.floor(Math.random() * range + 1); // 1 - range
    return test;
};

export { roll };
