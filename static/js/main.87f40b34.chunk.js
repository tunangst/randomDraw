(this.webpackJsonprandomDraw=this.webpackJsonprandomDraw||[]).push([[0],{1:function(e,a,t){"use strict";t.d(a,"h",(function(){return o})),t.d(a,"i",(function(){return r})),t.d(a,"b",(function(){return n})),t.d(a,"d",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return i})),t.d(a,"g",(function(){return s})),t.d(a,"f",(function(){return u})),t.d(a,"e",(function(){return d}));var o=function(e){return Math.floor(Math.random()*e+1)},r=function(e,a){return Math.floor(Math.random()*(a-e+1))+e},n=function(){return 1===o(2)},l=function(e,a){var t=document.querySelector("#canvasTemplate");t&&t.remove();var o=document.createElement("canvas");o.id="canvasTemplate",o.width=e,o.height=a;var r=o.getContext("2d");return[o,r]},c=function(e,a){var t=document.querySelector(".randomDraw")||document.querySelector("#randomDraw");t.innerHTML="";var o=document.createElement("canvas");o.id="canvasDraw",o.width=e,o.height=a;var r=o.getContext("2d");return t.appendChild(o),[o,r]},i=function(e){return e.matrix=[],e.ctx&&e.ctx.clearRect(0,0,e.canvasWidth,e.canvasHeight),e.ctx2&&e.ctx2.clearRect(0,0,e.canvasWidth,e.canvasHeight),e.matrix},s=function(){var e=o(256),a=o(256),t=o(256);return"rgb(".concat(e,",").concat(a,",").concat(t,")")},u=function(e){var a,t=r(0,360),o=r(0,100);return a=e>150?99:r(e>100?95:e>50?90:80,99),"hsl(".concat(t,",").concat(o,"%,").concat(a,"%)")},d=function(e){var a,t=r(0,360),o=r(0,100);return a=e>150?1:r(e>100?5:e>50?10:20,1),"hsl(".concat(t,",").concat(o,"%,").concat(a,"%)")}},11:function(module,__webpack_exports__,__webpack_require__){"use strict";var _utilities_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),getDrawType=function getDrawType(inputs,forceType){var loopCycle=function loopCycle(word){eval("inputs.".concat(word,"All = ").concat(Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__.b)())),eval("inputs.".concat(word,"All"))||(eval("inputs.".concat(word,"RandomLoops = ").concat(Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__.b)())),eval("inputs.".concat(word,"RandomLoops"))||(eval("inputs.".concat(word,"Individual = ").concat(Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__.b)())),eval("inputs.".concat(word,"Individual"))||loopCycle(word)))},chaos=function(){inputs.fillSwitch=!0,inputs.strokeSwitch=!0,loopCycle("clear"),loopCycle("fill"),loopCycle("fillColor"),loopCycle("stroke"),loopCycle("strokeColor"),loopCycle("strokeWidth")},strokeOnly=function(){inputs.fillSwitch=!0,inputs.strokeSwitch=!0,inputs.clearIndividual=!0,inputs.strokeAll=!0,loopCycle("strokeColor"),loopCycle("strokeWidth")},custom=function(){},fillOnly=function(){inputs.fillSwitch=!0,inputs.clearAll=!0,inputs.fillAll=!0,loopCycle("fillColor")},fillAndStroke=function(){inputs.fillSwitch=!0,inputs.strokeSwitch=!0,inputs.fillAll=!0,inputs.strokeAll=!0,loopCycle("clear"),loopCycle("strokeColor"),loopCycle("fillColor")},individual=function(){inputs.fillSwitch=!0,inputs.strokeSwitch=!0,inputs.clearIndividual=!0,inputs.fillIndividual=!0,inputs.fillColorIndividual=!0,inputs.strokeIndividual=!0,inputs.strokeColorIndividual=!0,inputs.strokeWidthIndividual=!0},outline=function(){inputs.customBackgroundSwitch=!0,inputs.customBackgroundColor="#fff",inputs.customStrokeColor="#000",inputs.blendMode="source-over",inputs.maxShapeCount=50,inputs.customShape="noLine",inputs.strokeSwitch=!0,inputs.fillSwitch=!1,inputs.strokeAll=!0,inputs.clearAll=!0,inputs.strokeColorAll=!0,inputs.strokeWidthAll=!0};if(forceType)eval("".concat(forceType,"()"));else{var dice=Object(_utilities_js__WEBPACK_IMPORTED_MODULE_0__.h)(5);switch(dice){case 1:strokeOnly();break;case 2:fillOnly();break;case 3:fillAndStroke();break;case 4:individual();break;case 5:chaos();break;default:console.log("error in getDrawType")}}return inputs};__webpack_exports__.a=getDrawType},12:function(e,a,t){e.exports=t(18)},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),n=t(10),l=t.n(n),c=(t(17),t(2)),i=t(3),s=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"randomDraw"),r.a.createElement("button",{id:"sequence",className:"btn"},"sequence"),r.a.createElement("img",{id:"randomDrawSequence"}))},u=function(e){return JSON.parse(JSON.stringify(e))},d=function(e){!function e(a){for(var t in a)a[t]&&"object"===typeof a[t]?(e(a[t]),0===Object.keys(a[t]).length&&delete a[t]):void 0!==a[t]&&null!==a[t]&&""!==a[t]||delete a[t];return a}(e);return"randomDraw(".concat(JSON.stringify(e,null,"  "),");")},h=function(e){var a=e.state,t=u(a);return t=d(t),r.a.createElement("section",{className:"codeInjectionContainer"},r.a.createElement("pre",null,r.a.createElement("code",{className:"codeInjection"},t)))},m=t(4),p={boxCount:10,choosePrimaryColor:"#000000",chooseSecondaryColor:"#8C00FF",chooseBackgroundColor:"#FFFFFF00"},b=function(e){var a=e.adjustBoxState,t=Object(o.useState)(p),n=Object(i.a)(t,2),l=n[0],s=n[1],u=Object(o.useState)("defaultPrimaryColorBtn"),d=Object(i.a)(u,2),h=d[0],b=d[1],f=Object(o.useState)("defaultSecondaryColorBtn"),g=Object(i.a)(f,2),x=g[0],C=g[1],w=Object(o.useState)("defaultBackgroundColorBtn"),v=Object(i.a)(w,2),k=v[0],S=v[1],O=Object(o.useState)("random"),j=Object(i.a)(O,2),y=j[0],D=j[1],E=function(e){var t=e.target.value,o=e.target.id;"boxCount"===o&&(t=Number(t),a(Object(m.a)({},o,t))),s(Object(c.a)(Object(c.a)({},l),{},Object(m.a)({},o,t)))},B=function(e){var t=e.target.id;switch(t){case"defaultPrimaryColorBtn":b(t),a({primaryToggle:"default"});break;case"randomPrimaryColorBtn":b(t),a({primaryToggle:"random"});break;case"choosePrimaryColorBtn":b(t),a({primaryToggle:"choose",primaryColor:l.choosePrimaryColor});break;case"defaultSecondaryColorBtn":C(t),a({secondaryToggle:"default"});break;case"chooseSecondaryColorBtn":C(t),a({secondaryToggle:"choose",secondaryColor:l.chooseSecondaryColor});break;case"defaultBackgroundColorBtn":S(t),a({backgroundToggle:"default"});break;case"randomBackgroundColorBtn":S(t),a({backgroundToggle:"random"});break;case"chooseBackgroundColorBtn":S(t),a({backgroundToggle:"choose",backgroundColor:l.chooseBackgroundColor});break;default:console.log("error in handleBtns")}},R=function(e){var t=e.target.innerText,o=t.charAt(0).toLowerCase()+t.replace(/\s/g,"").slice(1);D(o),a({drawStyle:o})};return r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"separatorContainer"},r.a.createElement("div",{className:"separators"},r.a.createElement("p",null,"Box Count:",r.a.createElement("input",{id:"boxCount",className:"inputField",name:"boxCount",type:"number",value:l.boxCount,min:"2",step:"2",onChange:E}))),r.a.createElement("div",{className:"separators"},r.a.createElement("p",null,"Primary Color:"),r.a.createElement("div",{className:"primaryColorContainer btnContainer"},r.a.createElement("button",{id:"defaultPrimaryColorBtn",className:"btns ".concat("defaultPrimaryColorBtn"===h?"active":""),onClick:B},"Default"),r.a.createElement("button",{id:"randomPrimaryColorBtn",className:"btns ".concat("randomPrimaryColorBtn"===h?"active":""),onClick:B},"Random"),r.a.createElement("button",{id:"choosePrimaryColorBtn",className:"btns ".concat("choosePrimaryColorBtn"===h?"active":""),onClick:B},"Choose",r.a.createElement("input",{id:"choosePrimaryColor",name:"choosePrimaryColor",type:"color",value:l.choosePrimaryColor,onChange:E})))),r.a.createElement("div",{className:"separators"},r.a.createElement("p",null,"Secondary Color:"),r.a.createElement("div",{className:"secondaryColorContainer btnContainer"},r.a.createElement("button",{id:"defaultSecondaryColorBtn",className:"btns ".concat("defaultSecondaryColorBtn"===x?"active":""),onClick:B},"Default Random"),r.a.createElement("button",{id:"chooseSecondaryColorBtn",className:"btns ".concat("chooseSecondaryColorBtn"===x?"active":""),onClick:B},"Choose",r.a.createElement("input",{id:"chooseSecondaryColor",type:"color",value:l.chooseSecondaryColor,onChange:E})))),r.a.createElement("div",{className:"separators"},r.a.createElement("p",null,"Background Color:"),r.a.createElement("div",{className:"backgroundColorContainer btnContainer"},r.a.createElement("button",{id:"defaultBackgroundColorBtn",className:"btns ".concat("defaultBackgroundColorBtn"===k?"active":""),onClick:B},"Default"),r.a.createElement("button",{id:"randomBackgroundColorBtn",className:"btns ".concat("randomBackgroundColorBtn"===k?"active":""),onClick:B},"Random"),r.a.createElement("button",{id:"chooseBackgroundColorBtn",className:"btns ".concat("chooseBackgroundColorBtn"===k?"active":""),onClick:B},"Choose",r.a.createElement("input",{id:"chooseBackgroundColor",type:"color",value:l.chooseBackgroundColor,onChange:E}))))),r.a.createElement("div",{className:"styleContainer btnContainer"},r.a.createElement("p",null,"Styles"),r.a.createElement("div",{className:"btnContainer"},r.a.createElement("button",{id:"randomBtn",className:"btns boxPatternBtns ".concat("random"===y?"active":""),onClick:R},"Random"),r.a.createElement("button",{id:"fullCloneBtn",className:"btns boxPatternBtns ".concat("fullClone"===y?"active":""),onClick:R},"Full Clone"),r.a.createElement("button",{id:"fullReflectBtn",className:"btns boxPatternBtns ".concat("fullReflect"===y?"active":""),onClick:R},"Full Reflect"),r.a.createElement("button",{id:"fullRotateBtn",className:"btns boxPatternBtns ".concat("fullRotate"===y?"active":""),onClick:R},"Full Rotate"),r.a.createElement("button",{id:"halfReflectBtn",className:"btns boxPatternBtns ".concat("halfReflect"===y?"active":""),onClick:R},"Half Reflect"),r.a.createElement("button",{id:"noPatternBtn",className:"btns boxPatternBtns ".concat("noPattern"===y?"active":""),onClick:R},"No Pattern"))))},f={loopCount:5,minShapeSize:20,maxShapeSize:200,minShapeCount:4,maxShapeCount:200,minPathRadius:20,maxPathRadius:500,blendMode:"default",chooseBackgroundColor:"#ffffff"},g=function(e){var a=e.adjustMandalaState,t=Object(o.useState)(f),n=Object(i.a)(t,2),l=n[0],s=n[1],u=Object(o.useState)(!1),d=Object(i.a)(u,2),h=(d[0],d[1],function(e){var t=e.target.id,o=e.target.value;if("customBackgroundSwitch"!==t)s(Object(c.a)(Object(c.a)({},l),{},Object(m.a)({},t,o))),"chooseBackgroundColor"!==t&&a(Object(m.a)({},t,o));else{var r,n=e.target.checked;a((r={},Object(m.a)(r,t,n),Object(m.a)(r,"chooseBackgroundColor",l.chooseBackgroundColor),r))}});return r.a.createElement(o.Fragment,null,r.a.createElement("p",null,"Loop Count:",r.a.createElement("input",{id:"loopCount",className:"mandalaInputs",name:"loopCount",type:"number",value:l.loopCount,min:"2",onChange:h})),r.a.createElement("p",null,"Min Shape Size:",r.a.createElement("input",{id:"minShapeSize",className:"mandalaInputs",name:"minShapeSize",type:"number",value:l.minShapeSize,min:"2",onChange:h})),r.a.createElement("p",null,"Max Shape Size:",r.a.createElement("input",{id:"maxShapeSize",className:"mandalaInputs",name:"maxShapeSize",type:"number",value:l.maxShapeSize,min:"2",onChange:h})),r.a.createElement("p",null,"Min Shape Count:",r.a.createElement("input",{id:"minShapeCount",className:"mandalaInputs",name:"minShapeCount",type:"number",value:l.minShapeCount,min:"2",onChange:h})),r.a.createElement("p",null,"Max Shape Count:",r.a.createElement("input",{id:"maxShapeCount",className:"mandalaInputs",name:"maxShapeCount",type:"number",value:l.maxShapeCount,min:"2",onChange:h})),r.a.createElement("p",null,"Min Path Radius:",r.a.createElement("input",{id:"minPathRadius",className:"mandalaInputs",name:"minPathRadius",type:"number",value:l.minPathRadius,min:"2",onChange:h})),r.a.createElement("p",null,"Max Path Radius:",r.a.createElement("input",{id:"maxPathRadius",className:"mandalaInputs",name:"maxPathRadius",type:"number",value:l.maxPathRadius,min:"2",onChange:h})),r.a.createElement("p",null,"Blend Mode:",r.a.createElement("input",{id:"blendMode",className:"mandalaInputs",name:"blendMode",type:"string",value:l.blendMode,onChange:h})),r.a.createElement("p",null,"Background Color:",r.a.createElement("input",{id:"customBackgroundSwitch",className:"mandalaInputs",name:"customBackgroundSwitch",type:"checkbox",onChange:h}),r.a.createElement("input",{id:"chooseBackgroundColor",name:"chooseBackgroundColor",type:"color",value:l.chooseBackgroundColor,onChange:h})))},x=function(e){var a=e.adjustMandalaState,t=Object(o.useState)({}),n=Object(i.a)(t,2),l=(n[0],n[1],Object(o.useState)(!1)),c=Object(i.a)(l,2),s=c[0],u=c[1],d=Object(o.useState)("random"),h=Object(i.a)(d,2);h[0],h[1];return r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"separatorContainer"},r.a.createElement("div",{className:"separators"},r.a.createElement("p",null,"Draw Type:",r.a.createElement("select",{id:"drawType",className:"mandalaInputs",name:"drawType",onChange:function(e){var t=e.target.name,o=e.target.selectedOptions[0].value;u("drawType"===t&&"custom"===o),a(Object(m.a)({},t,o))}},r.a.createElement("option",{value:"random"},"random"),r.a.createElement("option",{value:"strokeOnly"},"Stroke Only"),r.a.createElement("option",{value:"fillOnly"},"Fill Only"),r.a.createElement("option",{value:"fillAndStroke"},"Fill And Stroke"),r.a.createElement("option",{value:"individual"},"Individual"),r.a.createElement("option",{value:"chaos"},"Chaos"),r.a.createElement("option",{value:"outline"},"Outline"),r.a.createElement("option",{value:"custom"},"Custom")))),r.a.createElement("div",{className:"separators"},s?r.a.createElement(g,{adjustMandalaState:a}):null)))},C={width:500,height:500},w=function(e){e.draw,e.state;var a,t=e.adjustState,n=e.adjustDimensions,l=e.adjustBoxState,s=e.adjustMandalaState,u=Object(o.useState)(C),d=Object(i.a)(u,2),h=d[0],p=d[1],f=Object(o.useState)("randomDrawerBtn"),g=Object(i.a)(f,2),w=g[0],v=g[1],k=Object(o.useState)(!1),S=Object(i.a)(k,2),O=S[0],j=S[1],y=Object(o.useState)(""),D=Object(i.a)(y,2),E=D[0],B=D[1],R=function(e){var a=e.target.id;switch(a){case"boxDrawerBtn":v(a),t({typeOfDrawer:"boxDraw"}),j(!0),B("box");break;case"mandalaDrawerBtn":v(a),t({typeOfDrawer:"mandalaDraw"}),j(!0),B("mandala");break;default:v("randomDrawerBtn"),t({typeOfDrawer:"random"}),j(!1),console.log("error in handleBtnClick",a)}},P=function(e){p(Object(c.a)(Object(c.a)({},h),{},Object(m.a)({},e.target.name,e.target.value))),n(Object(m.a)({},e.target.name,Number(e.target.value)))};switch(E){case"box":a=r.a.createElement(b,{adjustBoxState:l});break;case"mandala":a=r.a.createElement(x,{adjustMandalaState:s});break;default:a=null}return r.a.createElement("section",{className:"controls"},r.a.createElement("div",{className:"mainControls"},r.a.createElement("div",{className:"drawerContainer btnContainer"},r.a.createElement("button",{id:"randomDrawerBtn",className:"btns ".concat("randomDrawerBtn"===w?"active":""),onClick:R},"Random Draw"),r.a.createElement("button",{id:"boxDrawerBtn",className:"btns ".concat("boxDrawerBtn"===w?"active":""),onClick:R},"Box Draw"),r.a.createElement("button",{id:"mandalaDrawerBtn",className:"btns",onClick:R},"Mandala Draw")),r.a.createElement("p",null,"Dimensions:",r.a.createElement("input",{id:"dimensionWidth",name:"width",className:"inputField",type:"number",value:h.width,min:"2",step:"2",onChange:P}),"x",r.a.createElement("input",{id:"dimensionHeight",name:"height",className:"inputField",type:"number",value:h.height,min:"2",step:"2",onChange:P}))),r.a.createElement("div",{className:"subControls"},O?a:null))},v=function(){return r.a.createElement("section",{className:"randomDraw"},"Drawing will go here")},k=t(1),S=t(5),O=t(7),j=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.matrix;if(null!==a||null!==t){for(var r=0;r<o.length;r++)for(var n=0;n<o[r].length;n++){var l=o[r][n],c=l.xStart+a,i=l.yStart+t;if(null===a&&null===t)return e.ctx.fillStyle=l.color,e.ctx.fillRect(c,i,e.pixelWidth,e.pixelHeight),e.ctx.strokeStyle="rgb(255, 255, 255)",void e.ctx.strokeRect(c,i,e.pixelWidth,e.pixelHeight);e.ctx2.fillStyle=l.color,e.ctx2.fillRect(c,i,e.pixelWidth,e.pixelHeight),e.ctx2.strokeStyle="rgb(255, 255, 255)",e.ctx2.strokeRect(c,i,e.pixelWidth,e.pixelHeight)}return o}for(var s=0;s<o.length;s++)for(var u=0;u<o[s].length;u++){var d=o[s][u],h=d.xStart+a,m=d.yStart+t;e.ctx.fillStyle=d.color,e.ctx.fillRect(h,m,e.pixelWidth,e.pixelHeight),e.ctx.strokeStyle="rgb(255, 255, 255)",e.ctx.strokeRect(h,m,e.pixelWidth,e.pixelHeight)}},y=function e(a,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#020";Object(O.a)(this,e),this.xStart=a,this.yStart=t,this.color=o},D=function e(a,t,o,r,n){Object(O.a)(this,e),this.ctx=a,this.ctx2=t,this.matrix=o,this.pixelWidth=r,this.pixelHeight=n},E=function(e,a,t){var o=Object(k.h)(3),r=new y(a,t);switch(o){case 1:r.color=e.backgroundColor;break;case 2:r.color=e.primaryColor;break;case 3:r.color=e.secondaryColor;break;default:console.log("error, sorry")}return r},B=function(e,a){var t=[];if("noPattern"===a)for(var o=0;o<e.canvasHeight;o+=e.pixelHeight){for(var r=[],n=0;n<e.canvasWidth;n+=e.pixelWidth){var l=E(e,n,o);r.push(l)}t.push(r)}else for(var c=0;c<e.drawSectionHeight;c+=e.pixelHeight){for(var i=[],s=0;s<e.drawSectionWidth;s+=e.pixelWidth){var u=E(e,s,c);i.push(u)}t.push(i)}return t},R=function(e,a){for(var t=[],o=0;o<e.length;o++){var r=[].concat(Object(S.a)(e[o]),Object(S.a)(a[o]));t.push(r)}return t},P=function(e,a){return[].concat(Object(S.a)(e),Object(S.a)(a))},W=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.matrix,r=a,n=t,l=[],c=0;c<o.length;c++){for(var i=[],s=0;s<o[c].length;s++){var u=o[c][s],d=new y(r,n,u.color);i.push(d),r+=e.pixelWidth}l.push(i),r=a,n+=e.pixelHeight}return n=t,l},_=function(e){var a,t,o,r=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight);j(e),a=W(e,e.drawSectionWidth,0),r.matrix=a,j(r),t=W(e,e.drawSectionWidth,e.drawSectionHeight),r.matrix=t,j(r),o=W(e,0,e.drawSectionHeight),r.matrix=o,j(r)},T=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.matrix,r=a,n=t,l=[],c=0;c<o[0].length;c++){for(var i=[],s=o.length-1;s>=0;s--){var u=o[s][c],d=new y(r,n,u.color);i.push(d),r+=e.pixelWidth}l.push(i),r=a,n+=e.pixelHeight}return n=t,[].concat(l)},M=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.matrix,r=a,n=t,l=[],c=o[0].length-1;c>=0;c--){for(var i=[],s=0;s<o.length;s++){var u=o[s][c],d=new y(r,n,u.color);i.push(d),r+=e.pixelWidth}l.push(i),r=a,n+=e.pixelHeight}return n=t,[].concat(l)},N=function(e){var a,t,o;j(e);var r=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight);a=T(e),r.matrix=a,j(r,e.drawSectionWidth,0),t=T(r),r.matrix=t,j(r,e.drawSectionWidth,e.drawSectionHeight),o=T(r),r.matrix=o,j(r,0,e.drawSectionHeight)},H=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.matrix,r=a,n=t,l=[],c=0;c<o.length;c++){for(var i=[],s=o[c].length-1;s>=0;s--){var u=o[c][s],d=new y(r,n,u.color);i.push(d),r+=e.pixelWidth}l.push(i),r=a,n+=e.pixelHeight}return n=t,l},I=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=e.matrix,r=a,n=t,l=[],c=o.length-1;c>=0;c--){for(var i=[],s=0;s<o[c].length;s++){var u=o[c][s],d=new y(r,n,u.color);i.push(d),r+=e.pixelWidth}l.push(i),r=a,n+=e.pixelHeight}return n=t,l},A=function(e){var a,t,o,r=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight);j(r),a=H(e,e.drawSectionWidth,0),r.matrix=a,j(r),t=R(e.matrix,a),r.matrix=t,o=I(r,0,e.drawSectionHeight),r.matrix=o,j(r)},z=function(e){j(e);var a=[],t=[],o=[],r=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight);switch(Object(k.h)(2)){case 1:a=W(e,e.drawSectionWidth,0),r.matrix=a,j(r),t=R(e.matrix,a),r.matrix=t,o=I(r,0,e.drawSectionHeight),r.matrix=o,j(r);break;case 2:a=W(e,0,e.drawSectionHeight),r.matrix=a,j(r),t=P(e.matrix,a),r.matrix=t,o=H(r,e.drawSectionWidth,0),r.matrix=o,j(r);break;default:console.log("error in halfReflect switch")}},F=function(e){var a=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight),t=B(e,"noPattern");a.matrix=t,j(a)},L=function(e){if(e.drawStyle&&"random"!==e.drawStyle)switch(e.drawStyle){case"fullClone":_(e);break;case"fullReflect":A(e);break;case"fullRotate":N(e);break;case"halfReflect":z(e);break;case"noPattern":F(e);break;default:console.log("error in forcedraw of specials")}else switch(Object(k.h)(5)){case 1:_(e);break;case 2:N(e);break;case 3:A(e);break;case 4:z(e);break;case 5:F(e);break;default:console.log("error in layout variable")}},q=function(e){var a=function(e){for(var a=[],t=[];a.length<4;){var o=Object(k.h)(4);if(!a.includes(o)){var r={};switch(o){case 1:r.x=0,r.y=0;break;case 2:r.x=e.drawSectionWidth,r.y=0;break;case 3:r.x=e.drawSectionWidth,r.y=e.drawSectionHeight;break;case 4:r.x=0,r.y=e.drawSectionHeight;break;default:console.log("error in findQuadrantOrder")}a.push(o),t.push(r)}}return t}(e);[1,Object(k.h)(3),Object(k.h)(3),Object(k.h)(3)].forEach((function(t,o){var r=a[o].x,n=a[o].y,l=[],c=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight);switch(t){case 1:l=W(e,r,n),c.matrix=l,j(c);break;case 2:l=1===Object(k.h)(2)?H(e,r,n):I(e,r,n),c.matrix=l,j(c);break;case 3:l=1===Object(k.h)(2)?T(e,r,n):M(e,r,n),c.matrix=l,j(c);break;default:console.log("error in number variable")}}))},U=function(e){j(e);var a=Object(k.h)(2),t=Object(k.h)(3),o=Object(k.h)(3),r=[],n=1===a?{x:e.drawSectionWidth,y:0}:{x:0,y:e.drawSectionHeight},l=1===a?{x:0,y:e.drawSectionHeight}:{x:e.drawSectionWidth,y:0},c=new D(e.ctx,e.ctx2,e.matrix,e.pixelWidth,e.pixelHeight);switch(t){case 1:r=W(e,n.x,n.y),c.matrix=r,j(c);break;case 2:r=1===Object(k.h)(2)?T(c,n.x,n.y):M(c,n.x,n.y),c.matrix=r,j(c);break;case 3:r=1===Object(k.h)(2)?H(c,n.x,n.y):I(c,n.x,n.y),c.matrix=r,j(c);break;default:console.log("error in style dice variable")}var i=[];i=1===a?R(e.matrix,r):P(e.matrix,r);var s=[],u=[];switch(c.matrix=i,o){case 1:j(c,l.x,l.y);break;case 2:s=T(c),c.matrix=s,s=T(c,l.x,l.y),c.matrix=s,j(c);break;case 3:u=1===a?I(c,l.x,l.y):H(c,l.x,l.y),c.matrix=u,j(c);break;default:console.log("error in style dice variable")}},J=function(e){var a,t,o=e.dimensions,r=e.boxDrawObj;o&&(a=o.width,t=o.height);var n=a||500,l=t||500,s=r.boxCount||10,u=n/s||250,d=l/s||250,h=Math.floor(n/2),m=Math.floor(l/2),p=r.primaryToggle||"default",b=r.secondaryToggle||"default",f=r.backgroundToggle||"default",g=Object(k.d)(h,m),x=Object(i.a)(g,2),C=x[0],w=x[1],v=Object(k.c)(n,l),O=Object(i.a)(v,2),y=O[0],D=O[1];switch(p){case"default":r.primaryColor="#000000";break;case"random":r.primaryColor=Object(k.g)();break;case"choose":var E;E=r.primaryColor?r.primaryColor:"#000000",r.primaryColor=E;break;default:console.log("error in primarytoggle"),r.primaryColor="#000000"}switch(b){case"default":case"random":r.secondaryColor=Object(k.g)();break;case"choose":var R;R=r.secondaryColor?r.secondaryColor:"#8C00FF",r.secondaryColor=R;break;default:console.log("error in secondaryToggle"),r.secondaryColor=Object(k.g)()}switch(f){case"default":r.backgroundColor="#ffffff00";break;case"random":r.backgroundColor=Object(k.g)();break;case"choose":var P;P=r.backgroundColor?r.backgroundColor:"#ffffff00",r.backgroundColor=P;break;default:console.log("error in backgroundToggle"),r.backgroundColor="#ffffff00"}if((r=Object(c.a)(Object(c.a)({},r),{},{canvasWidth:n,canvasHeight:l,matrix:[],boxCount:s,pixelWidth:u,pixelHeight:d,drawSectionWidth:h,drawSectionHeight:m,canvasTemplate:C,ctx:w,canvasDraw:y,ctx2:D})).canvasDraw.getContext)switch(r.matrix=Object(k.a)(r),r.matrix=Object(S.a)(B(r)),j(r),r.drawStyle||"random"){case"random":switch(Object(k.h)(3)){case 1:L(r);break;case 2:q(r);break;case 3:U(r);break;default:console.log("error in layout variable no dice")}break;default:L(r)}else alert("You need Safari or Firefox 1.5+ to see this demo.");return r.canvasDraw.toDataURL("image/png")},K=function(e){var a;switch(e){case e>100:a=1;break;case e>90:a=Object(k.h)(2);break;case e>60:a=Object(k.h)(3);break;case e>40:a=Object(k.h)(4);break;default:a=Object(k.h)(5)}return a},Q=function(e){return e.clearSwitch?Object(k.g)():"screen"===e.blendMode?Object(k.e)(e.shapeCount):"multiply"===e.blendMode?Object(k.f)(e.shapeCount):Object(k.g)()},Y=function(e,a){return e?("clear"===e&&a.clearIndividual&&(a.clearSwitch=Object(k.b)()),"fill"===e&&a.fillSwitch&&a.fillColorIndividual&&(a.fillColor=Q(a)),"stroke"===e&&a.strokeSwitch&&(a.strokeColorIndividual&&(a.strokeColor=Q(a)),a.strokeWidthIndividual&&(a.strokeWidth=K(a.shapeCount))),a):(console.log("error in checkIndividual switch, no type"),a)},G=function(e){e.ctx2.save(),e.ctx2.moveTo(e.pathRadius-e.shapeSize,0),e.ctx2.lineTo(e.shapeSize,0),e.ctx2.restore()},V=function(e){e.ctx2.save(),e.ctx2.moveTo(e.pathRadius-e.shapeSize,e.pathRadius-e.shapeSize),e.ctx2.lineTo(-e.shapeSize/2,e.shapeSize/2),e.ctx2.restore()},X=function(e){var a=e.shapeArr[e.currentLoop-1];if(a!==V&&a!==G)for(var t=1;t<=e.shapeCount;t++)(e=Y("clear",e)).ctx2.globalCompositeOperation="destination-out",e.ctx2.beginPath(),a(e),e.ctx2.fillStyle=e.color,e.ctx2.fill(),e.ctx2.closePath(),e.ctx2.globalCompositeOperation="source-over",e.ctx2.rotate(2*Math.PI/e.shapeCount)},Z=function(e){var a=e.shapeArr[e.currentLoop-1];if(a!==V&&a!==G)for(var t=1;t<=e.shapeCount;t++)(e=Y("fill",e)).ctx2.globalCompositeOperation=e.blendMode,e.ctx2.beginPath(),a(e),e.ctx2.fillStyle=e.fillColor,e.ctx2.fill(),e.ctx2.closePath(),e.ctx2.globalCompositeOperation="source-over",e.ctx2.rotate(2*Math.PI/e.shapeCount)},$=function(e){for(var a=e.shapeArr[e.currentLoop-1],t=1;t<=e.shapeCount;t++)(e=Y("stroke",e)).ctx2.globalCompositeOperation="source-over",e.ctx2.beginPath(),a(e),e.ctx2.lineWidth=e.strokeWidth,e.ctx2.strokeStyle=e.strokeColor,e.ctx2.stroke(),e.ctx2.closePath(),e.ctx2.globalCompositeOperation="source-over",e.ctx2.rotate(2*Math.PI/e.shapeCount)},ee=function(e){return e.ctx2.save(),e.ctx2.translate(e.halfWidth,e.halfHeight),e.clearSwitch&&X(e),e.fillSwitch&&Z(e),e.strokeSwitch&&$(e),e.ctx2.restore(),e},ae=function(e){e.ctx2.clearRect(0,0,e.width,e.height)},te=function(e){return e.shapeCount=Object(k.i)(e.minShapeCount,e.maxShapeCount),e.pathRadius=Object(k.i)(e.maxPathRadius,e.maxFullPath),e.shapeSize=e.pathRadius,e.customBackgroundSwitch?(e.fillColor=e.customBackgroundColor,e.strokeColor=e.customStrokeColor):(e.fillColor=Q(e),e.strokeColor=Q(e)),e.fillSwitch=!0,e.backgroundLoopSwitch=!1,e},oe=function(e){return e.clearRandomLoops&&(e.clearSwitch=Object(k.b)()),e.FillRandomLoops&&(e.fillSwitch=Object(k.b)()),e.fillSwitch&&e.fillColorRandomLoops&&(e.fillColor=Q(e)),e.strokeRandomLoops&&(e.strokeSwitch=Object(k.b)()),e.strokeSwitch&&(e.strokeColorRandomLoops&&(e.strokeColor=Q(e),e.strokeColorIndividual=1===Object(k.h)(10)),e.strokeWidthRandomLoops&&(e.strokeWidth=K(e.shapeCount),e.strokeWidthIndividual=1===Object(k.h)(10))),e.strokeIndividual&&(e.strokeSwitch=!0),e.fillIndividual&&(e.fillSwitch=!0),e},re=function(e){for(var a=e.pathRadius,t=e.shapeSize-e.pathRadius;t>=-5&&t<=5;)console.log("improperspacing while loop, changing pathRadius variable"),t=(a=Object(k.i)(e.minPathRadius,e.maxPathRadius))-e.pathRadius;return e.pathRadius=a,e},ne=function(e){return e.pathRadius=Object(k.i)(e.minPathRadius,e.maxPathRadius),e.shapeSize=e.maxShapeSize*e.percent,e.shapeCount=Object(k.i)(e.minShapeCount,e.maxShapeCount),e=re(e),(e=oe(e)).customBackgroundSwitch&&(e.fillColor=e.customBackgroundColor,e.strokeColor=e.customStrokeColor),e},le=function(e){e.ctx2.rect(e.shapeSize/2,e.pathRadius,-e.shapeSize,-e.shapeSize)},ce=function(e){e.ctx2.save(),e.ctx2.rotate(Math.PI/4),e.ctx2.rect(e.pathRadius,e.pathRadius,-e.shapeSize,-e.shapeSize),e.ctx2.restore()},ie=function(e){e.ctx2.arc(0,e.pathRadius,e.shapeSize,0,2*Math.PI,!1)},se=function(e){e.ctx2.ellipse(0,e.pathRadius,e.shapeSize/5,e.shapeSize,0,0,2*Math.PI)},ue=function(e,a){var t;if(a){for(;a&&a>3;)a-=3;t=a}else if(e)switch(e){case"circle":return ie;case"oval":return se;case"square":return le;case"diamond":return ce;case"starburst":return G;case"slant":return V;case"no-line":t=Object(k.h)(2);break;default:console.log("default in customshape, get shapefunction")}else t=Object(k.h)(3);switch(t){case 1:switch(Object(k.h)(2)){case 1:return ie;case 2:return se;default:console.log("error in getShapeFunction ellipse")}case 2:switch(Object(k.h)(2)){case 1:return le;case 2:return ce;default:console.log("error in getShapeFunction square")}case 3:switch(Object(k.h)(2)){case 1:return G;case 2:return V;default:console.log("error in getShapeFunction line")}default:return void console.log("error in getShapeType")}},de=function(e,a,t){var o;t?("random"===t&&(o=1),"same"===t&&(o=2),"increment"===t&&(o=3)):o=Object(k.h)(3);var r=[];switch(o){case 1:for(var n=0;n<e;n++)r.push(ue(a));break;case 2:for(var l=ue(a),c=0;c<e;c++)r.push(l);break;case 3:for(var i=0;i<e;i++)r.push(ue(a,i+1));break;default:console.log("error in getShapeArr")}return r},he=function(e){return e.clearAll?e.clearSwitch=!0:e.clearSwitch=!1,e.fillAll?(e.fillSwitch=!0,e.fillColorAll&&(e.fillColor=Q(e))):e.fillSwitch=!1,e.strokeAll?(e.strokeSwitch=!0,e.strokeColorAll&&(e.strokeColor=Q(e)),e.strokeWidthAll&&(e.strokeWidth=1)):e.strokeSwitch=!1,e},me=function(e){ae(e);for(var a=e.loopCount;a>0;a--)e.currentLoop=a,e.percent=a/e.loopCount,e.customShape||(e.maxShapeCount=Math.ceil(e.useHalfSize*e.percent)),e=e.backgroundLoopSwitch?te(e):ne(e),1===(e=ee(e)).percent&&(e=he(e))},pe=function(e,a){var t=Math.sqrt(Math.pow(e,2)+Math.pow(a,2));return Math.round(t)},be=function(){var e;switch(Object(k.h)(3)){case 1:e="difference";break;case 2:e="screen";break;case 3:e="multiply";break;default:console.log("error in getBlendMode")}return e},fe=function(e){var a=e.canvasWidth,t=e.canvasHeight,o=Object(c.a)({width:a||500,height:t||500,halfWidth:Math.floor(a/2)||250,halfHeight:Math.floor(t/2)||250,loopCount:5,currentLoop:null,percent:null,backgroundLoopSwitch:!0,initLoopSwitch:!1,customBackgroundSwitch:!1,customBackgroundColor:null,customStrokeColor:null,customShape:null,clearSwitch:!1,clearAll:!1,clearRandomLoops:!1,clearIndividual:!1,drawType:null,fillSwitch:!1,fillAll:!1,fillRandomLoops:!1,fillIndividual:!1,fillColor:null,fillColorAll:!1,fillColorRandomLoops:!1,fillColorIndividual:!1,strokeSwitch:!1,strokeAll:!1,strokeRandomLoops:!1,strokeIndividual:!1,strokeColor:null,strokeColorAll:!1,strokeColorRandomLoops:!1,strokeColorIndividual:!1,strokeWidth:1,strokeWidthAll:!1,strokeWidthRandomLoops:!1,strokeWidthIndividual:!1,useSize:a>t?a:t,useHalfSize:null,maxFullPath:pe(a,t),pathRadius:null,minPathRadius:20,maxPathRadius:null,minShapeCount:4,maxShapeCount:200,maxShapeSize:200,shapeCount:null,shapeSize:null,shapeArr:null,blendMode:be()},e);return o.useHalfSize=o.useSize/2,o.maxPathRadius=pe(o.halfWidth,o.halfHeight),o.shapeArr=de(o.loopCount,o.customShape),o},ge=t(11),xe=function(e){var a,t,o=e.dimensions,r=e.mandalaDrawObj;o&&(a=o.width,t=o.height);var n=a||500,l=t||500,s=Object(k.c)(n,l),u=Object(i.a)(s,2),d=u[0],h=u[1];r=Object(c.a)(Object(c.a)({},r),{},{canvasWidth:n,canvasHeight:l,canvasDraw:d,ctx2:h});var m=fe(r);return m=Object(ge.a)(m),me(m),r.canvasDraw.toDataURL("image/png")},Ce={RandomDrawing:function(e){var a;switch(Object(k.h)(2)){case 1:a=J;break;case 2:a=xe;break;default:console.log("error in randomDraw random dice")}return a(e)},BoxDrawing:J,MandalaDrawing:xe},we=Ce.BoxDrawing,ve=Ce.MandalaDrawing,ke=Ce.RandomDrawing,Se=[],Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.typeOfDrawer;switch(e.boxDrawObj||(e.boxDrawObj={}),e.mandalaDrawObj||(e.mandalaDrawObj={}),a){case"boxDraw":var t=we(e);return void Se.push(t);case"mandalaDraw":var o=ve(e);return void Se.push(o);default:var r=ke(e);return void Se.push(r)}};var je=function(){var e=Object(o.useState)({}),a=Object(i.a)(e,2),t=a[0],n=a[1];Object(o.useEffect)((function(){!function(e,a,t,o,r){console.log("in resetDefaults"),console.log("testing for infinite loop"),e.typeOfDrawer&&"random"===e.typeOfDrawer&&a({typeOfDrawer:null}),e.dimensions&&(500===e.dimensions.width&&t({width:null}),500===e.dimensions.height&&t({height:null})),e.boxDrawObj&&(e.boxDrawObj.primaryToggle&&("default"!==e.boxDrawObj.primaryToggle&&"random"!==e.boxDrawObj.primaryToggle||("default"===e.boxDrawObj.primaryToggle&&o({primaryToggle:null}),e.boxDrawObj.primaryColor&&o({primaryColor:null}))),e.boxDrawObj.secondaryToggle&&("default"!==e.boxDrawObj.secondaryToggle&&"random"!==e.boxDrawObj.secondaryToggle||("default"===e.boxDrawObj.secondaryToggle&&o({secondaryToggle:null}),e.boxDrawObj.secondaryColor&&o({secondaryColor:null}))),e.boxDrawObj.backgroundToggle&&("default"!==e.boxDrawObj.backgroundToggle&&"random"!==e.boxDrawObj.backgroundToggle||("default"===e.boxDrawObj.backgroundToggle&&o({backgroundToggle:null}),e.boxDrawObj.backgroundColor&&o({backgroundColor:null}))),e.boxDrawObj.primaryColor&&"#000000"===e.boxDrawObj.primaryColor&&o({primaryColor:null}),e.boxDrawObj.secondaryColor&&"#8C00FF"===e.boxDrawObj.secondaryColor&&o({secondaryColor:null}),e.boxDrawObj.backgroundColor&&"#FFFFFF00"===e.boxDrawObj.backgroundColor&&o({backgroundColor:null}),"random"===e.boxDrawObj.drawStyle&&o({drawStyle:null})),e.mandalaDrawObj&&e.mandalaDrawObj.drawType&&("random"===e.mandalaDrawObj.drawType&&r({drawType:null}),"custom"!==e.mandalaDrawObj.drawType&&(e.mandalaDrawObj.loopCount&&r({loopCount:null}),e.mandalaDrawObj.minShapeSize&&r({minShapeSize:null}),e.mandalaDrawObj.maxShapeSize&&r({maxShapeSize:null}),e.mandalaDrawObj.minShapeCount&&r({minShapeCount:null}),e.mandalaDrawObj.maxShapeCount&&r({maxShapeCount:null}),e.mandalaDrawObj.minPathRadius&&r({minPathRadius:null}),e.mandalaDrawObj.maxPathRadius&&r({maxPathRadius:null}),e.mandalaDrawObj.blendMode&&r({blendMode:null}),e.mandalaDrawObj.customBackgroundSwitch&&r({customBackgroundSwitch:null}),e.mandalaDrawObj.chooseBackgroundColor&&r({chooseBackgroundColor:null})),"custom"===e.mandalaDrawObj.drawType&&!1===e.mandalaDrawObj.customBackgroundSwitch&&r({customBackgroundSwitch:null,chooseBackgroundColor:null}))}(t,l,d,m,p);var e=u(t);Oe(e)}),[t]);var l=function(e){n(Object(c.a)(Object(c.a)({},t),e))},d=function(e){n(Object(c.a)(Object(c.a)({},t),{},{dimensions:Object(c.a)(Object(c.a)({},t.dimensions),e)}))},m=function(e){n(Object(c.a)(Object(c.a)({},t),{},{boxDrawObj:Object(c.a)(Object(c.a)({},t.boxDrawObj),e)}))},p=function(e){n(Object(c.a)(Object(c.a)({},t),{},{mandalaDrawObj:Object(c.a)(Object(c.a)({},t.mandalaDrawObj),e)}))};return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(h,{state:t}),r.a.createElement("main",null,r.a.createElement(w,{draw:function(){Oe(t)},state:t,adjustState:l,adjustDimensions:d,adjustBoxState:m,adjustMandalaState:p}),r.a.createElement(v,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.87f40b34.chunk.js.map