// #################################### idea ######################################
// stacking effect when you use rollRange(0, threshRadius50) for every pass

// move this to edges for one of the effects being on the sides off center
// ctx2.translate(halfWidth, halfHeight)

// outer circle
// ctx2.translate(halfWidth, halfHeight);
// drawCircle(width, halfHeight);
// drawCircle(halfWidth, height);
//
// top left is center inside begin path, bot right web outside of beginpath
// ctx2.translate(0, 0);
// drawCircle(width, height);
// #################################### idea ######################################

class PointNode {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

// const randomStartingPoint = () => {
// 	const dice = roll(halfWidth);
// 	return new PointNode(dice, halfWidth);
// };

const findHypotenuse = (width, height) => {
	const hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
	return Math.round(hypotenuse);
};

// const mandalaDraw = () => {
// 	// const mandalaType = roll(5);
// 	const mandalaType = 1;
// 	switch (mandalaType) {
// 		case 1:
// 			specialShape();
// 			break;
// 		case 2:
// 			oneShape();
// 			break;
// 		case 3:
// 			multiShapes();
// 			break;
// 		default:
// 			break;
// 	}

// };

export {
	PointNode,
	// mandalaDraw,
	findHypotenuse,
};
