import { roll, randomColor } from '../../utilities.js';

const getBackground = () => {
    const dice = roll(2);
    let color;
    switch (dice) {
        case 1:
            color = 'rgba(255, 255, 255, 0)';
            break;
        case 2:
            const diceSolidColor = roll(3);
            switch (diceSolidColor) {
                case 1:
                    color = randomColor();
                    break;
                case 2:
                    color = 'rgb(250, 250, 250)';
                    break;
                case 3:
                    color = 'rgb(5, 5, 5)';
                    break;
            }
            break;
        default:
            console.log('error in getbackground');
            break;
    }
    return color;
};

export default getBackground;
