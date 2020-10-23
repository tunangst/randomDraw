    //yes
    width: canvasWidth || 500,
    height: canvasHeight || 500,
    loopCount: 5, //roll(5)
    
    customBackgroundSwitch: false,
    customBackgroundColor: null,

    customStrokeColor: null,
    customShape: null,

    clearSwitch: false,
    clearAll: false,
    clearRandomLoops: false,
    clearIndividual: false,

    fillSwitch: false,
    fillAll: false,
    fillRandomLoops: false,
    fillIndividual: false,
    fillColor: null,
    fillColorAll: false,
    fillColorRandomLoops: false,
    fillColorIndividual: false,
    
    strokeSwitch: false,
    strokeAll: false,
    strokeRandomLoops: false,
    strokeIndividual: false,
    strokeColor: null,
    strokeColorAll: false,
    strokeColorRandomLoops: false,
    strokeColorIndividual: false,
    strokeWidth: 1,
    strokeWidthAll: false,
    strokeWidthRandomLoops: false,
    strokeWidthIndividual: false,

    minPathRadius: 20,
    maxPathRadius: findHypotenuse(inputObj.halfWidth,inputObj.halfHeight);
    
    minShapeCount: 4,
    maxShapeCount: 200,
    maxShapeSize: 200,
    shapeCount: null, // default, randomize
    shapeSize: null, //default, shape size needs to be adjusted based on path
    blendMode: //'source-over', 'screen', 'difference', 'multiply'

    drawType: null //strokeOnly,fillOnly,fillAndStroke,individual,chaos,outline,custom: allows to edit (..all, ..random, ...individual)
// 	break;
    //no
        //calculated references 
    halfWidth: Math.floor(canvasWidth / 2) || 250,
    halfHeight: Math.floor(canvasHeight / 2) || 250,
    useSize: canvasWidth > canvasHeight ? canvasWidth : canvasHeight,
    useHalfSize: null,
    maxFullPath: findHypotenuse(canvasWidth, canvasHeight),
    pathRadius: null,
    shapeArr: null,
        //loop requirement
    currentLoop: null,
    percent: null, // created in loop
    backgroundLoopSwitch: true,
    initLoopSwitch: false,










    ...mandalaDrawObj, // override input stats
};
inputObj.useHalfSize = inputObj.useSize / 2;