import { ctx2 } from '../../MandalaDrawing.js';
// import { roll } from '../../../utilities.js';

const starburst = (shapeSize, pathRadius) => {
    //starburst
    ctx2.save();
    ctx2.moveTo(pathRadius - shapeSize, 0);
    ctx2.lineTo(shapeSize, 0);
    ctx2.restore();
    //starburst
};
const slant = (shapeSize, pathRadius) => {
    //slant
    ctx2.save();
    ctx2.moveTo(pathRadius - shapeSize, pathRadius - shapeSize);
    ctx2.lineTo(-shapeSize / 2, shapeSize / 2);
    ctx2.restore();
    // ctx2.stroke();
    //slant
};

export { starburst, slant };
