import { roll, coinFlip } from '../../utilities.js';

const getDrawType = (inputs) => {
	const forceType = inputs.drawType ? inputs.drawType : null;
	const loopCycle = (word) => {
		eval(`inputs.${word}All = ${coinFlip()}`);

		if (!eval(`inputs.${word}All`)) {
			eval(`inputs.${word}RandomLoops = ${coinFlip()}`);
		} else {
			return;
		}
		if (!eval(`inputs.${word}RandomLoops`)) {
			eval(`inputs.${word}Individual = ${coinFlip()}`);
		} else {
			return;
		}
		if (!eval(`inputs.${word}Individual`)) {
			loopCycle(word);
		} else {
			return;
		}
	};

	const chaos = () => {
		inputs.fillSwitch = true;
		inputs.strokeSwitch = true;
		loopCycle('clear');
		loopCycle('fill');
		loopCycle('fillColor');
		loopCycle('stroke');
		loopCycle('strokeColor');
		loopCycle('strokeWidth');
	};
	const strokeOnly = () => {
		inputs.fillSwitch = true;
		inputs.strokeSwitch = true;
		// loopCycle('clear');
		inputs.clearIndividual = true;
		inputs.strokeAll = true;
		loopCycle('strokeColor');
		loopCycle('strokeWidth');
	};
	const custom = () => {};
	const fillOnly = () => {
		inputs.fillSwitch = true;
		inputs.clearAll = true;
		inputs.fillAll = true;
		loopCycle('fillColor');
		// fillColorRandomLoops = true;
	};
	const fillAndStroke = () => {
		inputs.fillSwitch = true;
		inputs.strokeSwitch = true;
		inputs.fillAll = true;
		inputs.strokeAll = true;
		loopCycle('clear');
		loopCycle('strokeColor');
		loopCycle('fillColor');
	};
	const individual = () => {
		inputs.fillSwitch = true;
		inputs.strokeSwitch = true;
		inputs.clearIndividual = true;
		inputs.fillIndividual = true;
		inputs.fillColorIndividual = true;
		inputs.strokeIndividual = true;
		inputs.strokeColorIndividual = true;
		inputs.strokeWidthIndividual = true;
	};
	const outline = () => {
		inputs.customBackgroundSwitch = true;
		inputs.customBackgroundColor = '#fff';
		inputs.customStrokeColor = '#000';
		inputs.blendMode = 'source-over';
		inputs.maxShapeCount = 50;
		inputs.customShape = 'noLine';

		inputs.strokeSwitch = true;
		inputs.fillSwitch = false;
		inputs.fillAll = true;
		inputs.strokeAll = true;
		inputs.clearAll = true;
		// inputs.clearRandomLoops = true;
		inputs.strokeColorAll = true;
		inputs.strokeWidthAll = true;
	};
	if (forceType && forceType !== 'random') {
		if (forceType === 'custom') return inputs;
		eval(`${forceType}()`);
	} else {
		const dice = roll(5);
		switch (dice) {
			case 1:
				strokeOnly();
				break;
			case 2:
				fillOnly();
				break;
			case 3:
				fillAndStroke();
				break;
			case 4:
				individual();
				break;
			case 5:
				chaos();
				break;
			// case 6:
			// 	outline();
			// 	break;
			// case 7:
			// 	custom();
			// 	break;
			default:
				console.log('error in getDrawType');
				break;
		}
	}
	return inputs;
};

export default getDrawType;
