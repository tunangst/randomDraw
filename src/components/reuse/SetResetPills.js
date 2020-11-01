import React from 'react';

const SetResetPills = ({ handleSet, handleReset }) => {
	return (
		<div className='setResetPills'>
			<button className='setBtn' onClick={handleSet}>
				Set
			</button>
			<button className='resetBtn' onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default SetResetPills;
