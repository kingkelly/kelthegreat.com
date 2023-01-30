(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_re_under_atlas_", frames: [[221,0,181,327],[0,0,219,275]]}
];


// symbols:



(lib.ASPAR_DB = function() {
	this.spriteSheet = ss["300x600_re_under_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MEAT_DB = function() {
	this.spriteSheet = ss["300x600_re_under_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#023827").s().p("Al1CPQhRAAgghBQgLgVgEgYIgCgtQAAhRBBggQAVgLAYgEQAMgCAIAAILrAAQBRAAAhBBQAQAhAAAgIAAAZQAABRhBAhQghAQggAAg");
	this.shape.setTransform(50.4,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,100.8,28.6), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ASPAR_DB();
	this.instance.parent = this;
	this.instance.setTransform(0,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,-49,181,327), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MEAT_DB();
	this.instance.parent = this;
	this.instance.setTransform(86,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(86,-45,219,275), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape.setTransform(1099.8,126.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAdCTIgth2IgMAAIAAB2Ig7AAIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAHAQQAHAQAAATQAAAcgOAVQgNAUgYAKIAzB+gAgcgcIAcAAQAMAAAJgJQAIgJAAgMQAAgMgIgJQgJgIgMAAIgcAAg");
	this.shape_1.setTransform(1084.9,114.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_2.setTransform(1063.2,114.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBgAgdBYIAdAAQANAAAIgIQAJgIAAgNIAAh1QAAgMgJgJQgIgIgNAAIgdAAg");
	this.shape_3.setTransform(1041.4,114.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAdCTIgth2IgMAAIAAB2Ig7AAIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAHAQQAHAQAAATQAAAcgOAVQgNAUgYAKIAzB+gAgcgcIAcAAQAMAAAJgJQAIgJAAgMQAAgMgIgJQgJgIgMAAIgcAAg");
	this.shape_4.setTransform(1019.7,114.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhPQgIAJAAAMIAAB1QAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIAAgNIAAh1QAAgMgJgJQgJgIgMAAQgMAAgIAIg");
	this.shape_5.setTransform(997.9,114.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgcCUIAAjrIg7AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_6.setTransform(1128.9,72.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIA7AAQAAAMAIAJQAIAIAMAAQAMAAAJgIQAIgJAAgMQAAgNgIgIQgJgJgMAAQgSABgQgHQgRgHgLgMQgMgLgGgQQgHgPAAgUQAAgTAHgQQAGgQAMgMQALgMARgGQAQgIASABQATgBAQAIQAQAGALAMQAMAMAHAQQAHAQAAATIg7AAQAAgMgIgJQgJgIgMAAQgMAAgIAIQgIAJAAAMQAAANAIAIQAIAJAMAAQATAAAQAGQAQAHAMAMQALALAHAQQAHAQAAATQAAASgHARQgHAQgLAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_7.setTransform(1109.3,72.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAdCUIgth3IgNAAIAAB3Ig6AAIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgOAUgWALIAyB+gAgdgcIAdAAQANAAAIgJQAIgIAAgNQAAgMgIgJQgIgIgNAAIgdAAg");
	this.shape_8.setTransform(1088.8,72.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_9.setTransform(1072.9,72.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBWAAIAAA5IhWAAIAAB3g");
	this.shape_10.setTransform(1057,72.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AAeCUIgvh3IgMAAIAAB3Ig6AAIAAkmIBXAAQATgBAQAIQAQAGAMAMQAMAMAGAQQAHAQAAATQAAAcgOAVQgOAUgWALIAyB+gAgdgcIAdAAQANAAAIgJQAJgIAAgNQAAgMgJgJQgIgIgNAAIgdAAg");
	this.shape_11.setTransform(1027.3,72.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIAAjNIA6AAIAADNQAAAMAJAJQAIAIAMAAQAMAAAJgIQAIgJABgMIAAjNIA6AAIAADNQAAATgGAQQgHAQgMAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_12.setTransform(1005.5,72.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGAMAMQAMAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAHQgQAGgTABQgSgBgQgGgAgUhPQgIAJAAAMIAAB1QAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgJQgJgIgMAAQgMAAgIAIg");
	this.shape_13.setTransform(983.8,72.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AgdCUIAAiUIg6iSIA6AAIAdBJIAehJIA6AAIg6CSIAACUg");
	this.shape_14.setTransform(962,72.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih1AAIAAA6IBXAAIAAA7IhXAAIAAB2g");
	this.shape_15.setTransform(1136,30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih0AAIAAA6IBWAAIAAA7IhWAAIAAB2g");
	this.shape_16.setTransform(1114.3,30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgJAIAAAMIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgMgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_17.setTransform(1092.5,30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIA7AAQgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMQAAgNgIgIQgJgIgMAAIhXAAIAAixICvAAIAAA8Ih0AAIAAA6IAcAAQATABAQAGQAQAHAMALQALAMAIAPQAGARAAATQAAASgGARQgIAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_18.setTransform(1062.8,30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgOCUIAAjrIgdAAIAAg8IBXAAIAAEng");
	this.shape_19.setTransform(1045.4,30.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AgdDPIAAhAQgagJgQgXQgQgWAAgeIA6AAQABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgNgJgIQgJgJgMAAQgSAAgQgGQgQgHgMgMQgMgLgHgQQgGgQAAgTQAAgPAEgNQAEgNAIgMQAHgKALgIQALgIANgFIAAhAIA7AAIAABAQAZAJARAWQAQAXAAAeIg6AAQAAgNgJgIQgJgIgMAAQgMAAgIAIQgIAIgBANQABAMAIAJQAIAIAMAAQATAAAQAHQAQAGAMAMQAMALAGAQQAHAQAAATQAAAfgQAWQgRAXgZAJIAABAg");
	this.shape_20.setTransform(1028.1,30.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg8ICvAAIAAA8Ig6AAIAADrg");
	this.shape_21.setTransform(998.3,30.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih0AAIAAA6IBXAAIAAA7IhXAAIAAA6IB0AAIAAA8g");
	this.shape_22.setTransform(976.6,30.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIg6AAQAAgMgJgIQgIgJgNAAQgMAAgIAJQgJAIAAAMIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAgdIgeAAIAAg7IBYAAIAABYQAAASgHARQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_23.setTransform(954.8,30.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape_24.setTransform(868.4,123.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih0AAIAAA6IBWAAIAAA7IhWAAIAAA6IB0AAIAAA8g");
	this.shape_25.setTransform(853.5,111.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAdCUIg5iUIAACUIg7AAIAAknIA7AAIA5CTIAAiTIA7AAIAAEng");
	this.shape_26.setTransform(831.8,111.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AgcCUIAAknIA5AAIAAEng");
	this.shape_27.setTransform(815.9,111.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AhICUIAAknIA6AAIAADrIBXAAIAAA8g");
	this.shape_28.setTransform(801.5,111.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAknIA6AAIA7CTIAAiTIA6AAIAAEng");
	this.shape_29.setTransform(781.2,111.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgSAHgRQAGgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGARAAASIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgJAIABAMIAAB1QgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMIAAh1QAAgMgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_30.setTransform(759.5,111.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AAeCUIgvh2IgMAAIAAB2Ig6AAIAAknIBXAAQATAAAQAIQAQAGAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgNAUgYALIAzB+gAgdgdIAdAAQAMAAAJgIQAJgJAAgMQAAgMgJgIQgJgJgMAAIgdAAg");
	this.shape_31.setTransform(729.7,111.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih1AAIAAA6IBXAAIAAA7IhXAAIAAA6IB1AAIAAA8g");
	this.shape_32.setTransform(708,111.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AhXCUIAAknIBXAAQATAAAQAIQAQAGAMAMQALAMAHAQQAHARAAASIAAB1QAAATgHAQQgHAQgLAMQgMAMgQAGQgQAIgTAAgAgcBYIAcAAQAMAAAJgIQAIgJAAgMIAAh1QAAgMgIgIQgJgJgMAAIgcAAg");
	this.shape_33.setTransform(686.2,111.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AAeCUIgvh2IgMAAIAAB2Ig6AAIAAknIBXAAQATAAAQAIQAQAGAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgNAUgYALIAzB+gAgdgdIAdAAQAMAAAJgIQAJgJAAgMQAAgMgJgIQgJgJgMAAIgdAAg");
	this.shape_34.setTransform(664.5,111.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgSAHgRQAGgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGARAAASIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgJAIAAAMIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgMgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_35.setTransform(642.7,111.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgVAXIAAgtIAsAAIAAAtg");
	this.shape_36.setTransform(805.9,81.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_37.setTransform(791,69.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AAeCTIguh2IgNAAIAAB2Ig6AAIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgNAUgXAKIAyB+gAgdgcIAdAAQAMAAAJgJQAIgJABgMQgBgMgIgIQgJgJgMAAIgdAAg");
	this.shape_38.setTransform(769.3,69.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHAMAMQAMAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgIAIAAAMIAAB1QAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIgBgNIAAh1QABgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_39.setTransform(747.5,69.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AgdCTIAAjqIg6AAIAAg8ICvAAIAAA8Ig7AAIAADqg");
	this.shape_40.setTransform(727,69.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIA7AAQAAANAIAIQAIAIAMAAQAMAAAJgIQAIgIAAgNQAAgNgIgIQgJgJgMAAQgSAAgQgGQgRgHgLgMQgMgLgHgQQgGgPAAgUQAAgTAGgQQAHgQAMgMQALgMARgHQAQgGASgBQATABAQAGQAQAHAMAMQAMAMAGAQQAHAQAAATIg7AAQAAgMgIgIQgJgJgMAAQgMAAgIAJQgIAIAAAMQAAAMAIAJQAIAJAMAAQATgBAQAHQAQAGAMAMQALALAHAQQAHARAAASQAAAUgHAQQgHAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIg");
	this.shape_41.setTransform(705.2,69.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA5IhXAAIAAA7IB1AAIAAA8g");
	this.shape_42.setTransform(815.5,27.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AAdCUIAAh3Ig5AAIAAB3Ig7AAIAAkmIA7AAIAAB2IA5AAIAAh2IA7AAIAAEmg");
	this.shape_43.setTransform(793.8,27.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_44.setTransform(772,27.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGAQAAATQAAAUgGAPQgIAQgLALQgMAMgQAHQgQAHgTgBIgdAAIAAB3gAgdgcIAdAAQAMAAAJgJQAIgIABgNQgBgMgIgJQgJgIgMAAIgdAAg");
	this.shape_45.setTransform(742.3,27.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_46.setTransform(726.4,27.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("AAdCUIg5iUIA5iSIA7AAIg7CSIA7CUgAhXCUIAAkmIA7AAIAACSIAACUg");
	this.shape_47.setTransform(710.5,27.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIA6AAQABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgNgJgIQgJgJgMAAQgSABgQgHQgQgHgMgMQgMgLgHgQQgGgPAAgUQAAgTAGgQQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHAQAAATIg6AAQAAgMgJgJQgJgIgMAAQgMAAgIAIQgIAJgBAMQABANAIAIQAIAJAMAAQATAAAQAGQAQAHAMAMQAMALAGAQQAHAQAAATQAAASgHARQgGAQgMAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_48.setTransform(688.8,27.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AgVAXIAAgtIAsAAIAAAtg");
	this.shape_49.setTransform(548.2,121.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("AAdCTIguh2IgLAAIAAB2Ig7AAIAAklIBXAAQATAAAQAGQAQAHAMAMQALAMAHAQQAHARAAASQAAAcgOAVQgNAVgYAJIAzB+gAgcgcIAcAAQAMAAAJgJQAJgIgBgNQABgMgJgJQgJgIgMAAIgcAAg");
	this.shape_50.setTransform(533.3,109.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AAeCTIgNg7IgiAAIgMA7Ig6AAIA6klIA7AAIA6ElgAAFAdIgFgdIgFAdIAKAAg");
	this.shape_51.setTransform(511.6,109.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AhXCTIAAklICvAAIAAA7Ih1AAIAAA7IBXAAIAAA5IhXAAIAAA7IB1AAIAAA7g");
	this.shape_52.setTransform(489.8,109.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AAdCTIgdiTIgcCTIg7AAIg7klIA7AAIAdCSIAeiSIA5AAIAeCSIAdiSIA7AAIg7Elg");
	this.shape_53.setTransform(462.2,109.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AAdCTIguh2IgLAAIAAB2Ig7AAIAAklIBXAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgNAVgYAJIAzB+gAgcgcIAcAAQAMAAAJgJQAJgIgBgNQABgMgJgJQgJgIgMAAIgcAAg");
	this.shape_54.setTransform(435.8,109.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AhXCTIAAklICvAAIAAA7Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_55.setTransform(414,109.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AhXCTIAAklIBXAAQATAAAQAGQAQAHAMAMQALAMAIAQQAGARAAASIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAHQgQAGgTAAgAgcBYIAcAAQAMAAAJgIQAIgIAAgNIAAh1QAAgMgIgJQgJgIgMAAIgcAAg");
	this.shape_56.setTransform(392.3,109.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AAdCTIg5iTIAACTIg7AAIAAklIA7AAIA5CSIAAiSIA7AAIAAElg");
	this.shape_57.setTransform(370.5,109.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAjNIA6AAIAADNQAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNIAAjNIA6AAIAADNQAAATgGAQQgIAQgMAMQgLAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_58.setTransform(348.8,109.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AAeCUIguh2IgNAAIAAB2Ig6AAIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGARAAASQAAAcgOAVQgOAUgWALIAyB+gAgdgdIAdAAQANAAAIgIQAJgJAAgMQAAgNgJgIQgIgIgNAAIgdAAg");
	this.shape_59.setTransform(496.9,67.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIAAjNIA7AAIAADNQgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMIAAjNIA7AAIAADNQAAATgHAQQgHAQgLAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_60.setTransform(475.2,67.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTABQgSgBgQgGgAgUhPQgIAIgBANIAAB1QABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMIAAh1QAAgNgJgIQgJgIgMAAQgMAAgIAIg");
	this.shape_61.setTransform(453.4,67.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AgcCUIAAiUIg7iSIA7AAIAcBJIAdhJIA7AAIg7CSIAACUg");
	this.shape_62.setTransform(432.9,67.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAkmIA6AAIA7CSIAAiSIA6AAIAAEmg");
	this.shape_63.setTransform(403.1,67.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_64.setTransform(387.2,67.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBYAAIAAA7IhYAAIAAA6IB1AAIAAA7g");
	this.shape_65.setTransform(543,25.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("AA6CTIAAiTIgdCTIg5AAIgeiTIAACTIg6AAIAAkmIBYAAIAcCTIAdiTIBZAAIAAEmg");
	this.shape_66.setTransform(518.3,25.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAHAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgHQgIgJgNAAQgMAAgIAJg");
	this.shape_67.setTransform(493.6,25.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AAdCTIAAh1Ig6AAIAAB1Ig6AAIAAkmIA6AAIAAB2IA6AAIAAh2IA7AAIAAEmg");
	this.shape_68.setTransform(471.8,25.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("AgcCTIAAjqIg7AAIAAg8ICvAAIAAA8Ig7AAIAADqg");
	this.shape_69.setTransform(442.1,25.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#063928").s().p("AAeCTIgNg7IghAAIgNA7Ig6AAIA6kmIA7AAIA6EmgAAFAdIgFgdIgFAdIAKAAg");
	this.shape_70.setTransform(420.3,25.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#063928").s().p("AgcCTIAAjqIg7AAIAAg8ICvAAIAAA8Ig7AAIAADqg");
	this.shape_71.setTransform(390.6,25.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAjOIA7AAIAADOQAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMIAAjOIA6AAIAADOQAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIg");
	this.shape_72.setTransform(368.8,25.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGAQAAATQAAASgFAPQgGAOgLALQALAMAGAPQAFAOAAASQAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBgAgdBYIAdAAQANAAAIgIQAJgJAAgMQAAgNgJgIQgIgIgNAAIgdAAgAgdgdIAdAAQANABAIgJQAJgJAAgMQAAgNgJgHQgIgJgNAAIgdAAg");
	this.shape_73.setTransform(347.1,25.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIA6AAQAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNQAAgNgJgIQgIgJgNAAQgSABgQgHQgQgHgMgMQgMgLgHgQQgGgQAAgTQAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHALAMQAMAMAIAQQAGARAAASIg6AAQAAgMgJgJQgIgIgNAAQgMAAgIAIQgJAJAAAMQAAANAJAIQAIAJAMAAQATAAAQAGQAQAGAMANQALAKAIARQAGAQAAATQAAATgGAQQgIAQgLAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_74.setTransform(211.5,108.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#063928").s().p("AgMAtIAJgtIgSAAIAAgsIAsAAIAAAXIgaBCg");
	this.shape_75.setTransform(198.8,96);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTAAQgSAAgQgGgAgUhPQgJAJAAAMIAAB1QAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNIAAh1QAAgMgJgJQgIgIgNAAQgMAAgIAIg");
	this.shape_76.setTransform(184,108.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgSAHgRQAGgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHAMAMQAMAMAHAQQAGARAAASIg7AAQAAgMgIgJQgJgIgMAAQgMAAgIAIQgJAJAAAMIAAB1QAAANAJAIQAIAIAMAAQAMAAAJgIQAIgIAAgNIAAgeIgdAAIAAg5IBYAAIAABXQAAATgGAQQgHAQgMAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_77.setTransform(162.2,108.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#063928").s().p("AAdCTIg5iTIAACTIg7AAIAAklIA7AAIA5CSIAAiSIA7AAIAAElg");
	this.shape_78.setTransform(140.5,108.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTAAQgSAAgQgGgAgUhPQgJAJAAAMIAAB1QAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNIAAh1QAAgMgJgJQgIgIgNAAQgMAAgIAIg");
	this.shape_79.setTransform(118.7,108.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#063928").s().p("AhICTIAAklIA6AAIAADqIBXAAIAAA7g");
	this.shape_80.setTransform(98.4,108.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#063928").s().p("AgcCTIAAjqIg7AAIAAg7ICvAAIAAA7Ig7AAIAADqg");
	this.shape_81.setTransform(70.2,108.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#063928").s().p("AAdCTIgLg7IgiAAIgNA7Ig6AAIA6klIA6AAIA7ElgAAFAdIgFgdIgFAdIAKAAg");
	this.shape_82.setTransform(50.6,108.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIg7AAQABgNgJgHQgJgJgMAAQgMAAgIAJQgIAHAAANIAAB1QAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJgBgMIAAgdIgdAAIAAg7IBYAAIAABYQAAASgHARQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_83.setTransform(201.3,66.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAknIA6AAIA7CTIAAiTIA6AAIAAEng");
	this.shape_84.setTransform(179.6,66.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#063928").s().p("AgcCUIAAknIA5AAIAAEng");
	this.shape_85.setTransform(163.7,66.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#063928").s().p("AhXCUIAAknIBXAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGARAAASQAAAUgGAPQgIAQgLALQgMAMgQAHQgQAHgTAAIgdAAIAAB2gAgdgdIAdAAQAMAAAJgIQAIgJAAgMQAAgNgIgHQgJgJgMAAIgdAAg");
	this.shape_86.setTransform(147.8,66.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#063928").s().p("AhXCUIAAknIBXAAQATAAAQAIQAQAGAMAMQALAMAHAQQAHARAAASQAAAUgHAPQgHAQgLALQgMAMgQAHQgQAHgTAAIgcAAIAAB2gAgcgdIAcAAQAMAAAJgIQAJgJgBgMQABgNgJgHQgJgJgMAAIgcAAg");
	this.shape_87.setTransform(126.1,66.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgJAHAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgHQgIgJgNAAQgMAAgIAJg");
	this.shape_88.setTransform(104.3,66.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#063928").s().p("AAeCUIAAh2Ig7AAIAAB2Ig6AAIAAknIA6AAIAAB2IA7AAIAAh2IA6AAIAAEng");
	this.shape_89.setTransform(82.6,66.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIA7AAQAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJgBgMQABgNgJgIQgJgJgMABQgSAAgQgHQgRgHgLgMQgMgLgHgQQgGgPAAgUQAAgSAGgRQAHgQAMgMQALgMARgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIg7AAQABgNgJgHQgJgJgMAAQgMAAgIAJQgIAHAAANQAAAMAIAJQAIAIAMAAQATABAQAGQAQAHAMAMQALALAHAPQAHARAAATQAAASgHARQgHAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_90.setTransform(60.8,66.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBXAAIAAA6IhXAAIAAA7IB1AAIAAA7g");
	this.shape_91.setTransform(190,24.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#063928").s().p("AAdCTIg5iTIA5iTIA7AAIg7CTIA7CTgAhXCTIAAkmIA7AAIAACTIAACTgAgcAAg");
	this.shape_92.setTransform(168.3,24.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_93.setTransform(152.4,24.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#063928").s().p("AhICTIAAkmIA6AAIAADrIBXAAIAAA7g");
	this.shape_94.setTransform(138,24.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIA6AAQAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMQAAgNgJgIQgIgIgNgBQgSAAgQgGQgQgHgMgMQgMgLgHgQQgGgQAAgTQAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHALAMQANAMAGAQQAHAQAAATIg6AAQAAgNgJgHQgIgJgNAAQgMAAgIAJQgJAHAAANQAAAMAJAJQAIAJAMgBQATAAAQAHQAQAGAMAMQAMALAGAQQAHARAAASQAAATgHARQgGAQgMAMQgMAMgQAGQgQAIgTgBQgSABgQgIg");
	this.shape_95.setTransform(109.7,24.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#063928").s().p("AgMAtIAJgtIgSAAIAAgsIAsAAIAAAXIgaBCg");
	this.shape_96.setTransform(97,12);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#063928").s().p("AgdCTIAAjqIg6AAIAAg8ICvAAIAAA8Ig6AAIAADqg");
	this.shape_97.setTransform(82.2,24.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_98.setTransform(66.3,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(38.3,5.8,1111.3,135.7), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F4EC").s().p("AAABDQgNgBgJgMQgJgMAAgQIABg0QAAgQAIgMQAKgMANAAQAQAAAIAOQAIANgBAQIgUgFQAAgFgCgFQgDgFgGAAQgLAAAAARIAAA0QAAAGADAFQADAGAFAAQAGAAADgGQACgEAAgGIAAgPIgLgDIAAgWIAfAHIAAAfQAAAQgHAMQgJAOgPAAIgBAAg");
	this.shape.setTransform(127.9,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F4EC").s().p("AhAASQgJgEgCgDIAegDQAqgGASgDQAkgHAagNQAAAOgNAGQgwAThHAEQgCAAgHgEg");
	this.shape_1.setTransform(98.3,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F4EC").s().p("AgDAiQgJgCgFgJQgEgJABgKQACgaAOgJQAJgFAHAHQAHAIACAKQABAHgCAMQgCAMgGAHQgGAHgHAAIgCAAg");
	this.shape_2.setTransform(112.8,37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8F4EC").s().p("AAdAtIg3gJQgLgCgCgJIgBgRIAFghQADgVAXACQAXADAKAKQAKAKADAWIAEAgQABAMgKAAIgDAAg");
	this.shape_3.setTransform(112.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F4EC").s().p("AgDAiQgIgCgFgJQgFgJABgLQACgZAPgJQAIgFAHAHQAMANgEAYQgCAMgGAHQgFAHgHAAIgDAAg");
	this.shape_4.setTransform(125.6,36.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F4EC").s().p("AijDnQgTAAgMgQQgNgQABgUQgPgHgPgRQgRgSACgKQACgMAQAAIgBgSQgCg0AGgdQAShVBDgYQAOgFABgPIAEgsQABgQAQgEIDEg1QALgDAOAHIBxA5QAVAKAAAYIAGD5QABAQgQABIgqAFQgCAagOAWQgSAdgbAAQgcABgPgZQgLgTgCgVIgMABQgBAjgUAXQgUAWgbAAQgVgBgQgVQgPgUABgXIgIAAQgRANgmAJQgBANgLANQgNASgVAAIgBAAgAgTh0QgJAFgGAOQgGAOgCAOQgHA0AFBHQABAUACASQgRANgoAJQg7AMhBAAQgSAAAAAGQAAAIASAQQARAPAJACQgBAWALAOQALAMAPAAQARABAJgRQAIgNAAgMQApgHAVgRIAUAAQAAAaAMASQAMATAVABQAXAAARgXQAPgWAAgbQABgXgDgMQgEgOgLgSQAMAGAIAVQAHASAAAOIAMgBIAAhdQgBg/gFgmQgDgagSgSQgTgRgbgEIgGAAQgLAAgHAEgABjjaQgDACgBAOQgFBtgDDZQgBAZAHAUQAFAOAJAKQALAKALAAQAaABAPgYQAOgWABgfQABgogYgcQAVAOAHAVQACAHADAZIAogEQAHgBABgEIABgLIgHjxQAAgSgQgIIhsg1QgJgEgDAAIgCAAgAjeBUQgBAJAHAHQAGAIAJgBQATAAADgTQABgKgHgHQgGgIgJAAQgUABgCAUgAhjAyQgIAIAAALQABAKAHAIQAIAHAKAAQALAAAHgIQAIgIAAgKQgBgLgHgHQgIgIgKAAQgKABgIAHgAhBhcIhHAOQgfAFgWAZQgXAZgDAeQAAAGADACQADADAJgBICCgWQAMgCAAgQQABgmAFgSQADgKgEgDQgCgBgDAAIgHABg");
	this.shape_5.setTransform(110.7,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8F4EC").s().p("AgCAHQgEgCAAgFQAAgEAFgDIABAAQADAAACADQACACABACQAAADgDADQgCABgDAAg");
	this.shape_6.setTransform(102.5,29.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8F4EC").s().p("AgFALQgFgEAAgHQABgGAFgFQAEgEAGAAIAFABQgFABgEAEQgCAEAAAFQAAAMAKAEIgEAAQgGAAgFgFg");
	this.shape_7.setTransform(101.9,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F4EC").s().p("AAAAGIgBAAQgFgBABgFQAAgEAEgCIABAAQAHAAAAAGQAAAHgFAAIgCgBg");
	this.shape_8.setTransform(90.5,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8F4EC").s().p("AgEAKQgEgEAAgGQAAgFAEgEQAEgFAGABIADAAQgJADAAAKQAAALAJADIgEABQgFgBgEgEg");
	this.shape_9.setTransform(90.1,31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8F4EC").s().p("Ag0AEIBpgRQgQASgmAHQgMACgJAAQgVAAgJgKg");
	this.shape_10.setTransform(98.8,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8F4EC").s().p("Ag6AFQgGAAAAgFQAAgEAGAAIB2AAQAFAAAAAEQAAAFgFAAg");
	this.shape_11.setTransform(150.2,43.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8F4EC").s().p("AgOAiIgCgBIAAgBIAAgCQALggANgWIgZAAIgCgBIgCgCIAAgDIACgCIACgBIAkAAIABABIABACIAAABIgBAFQgRAbgJAcIgBACIgDABg");
	this.shape_12.setTransform(159.7,40.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F4EC").s().p("AgMAVIgGgEIgCgDIABgCIADgDIABAAIADABIAFACIAGACQAEAAAFgEQADgCABgGQgGAFgJAAQgFAAgFgCQgEgBgCgEQgDgCAAgEQAAgEADgEQADgEAEgCQAFgCAGAAQAFAAAEACIAIAFQADADACAEIACAIIgCAJQgBAEgEADQgCADgGACQgEACgFAAQgGAAgFgCgAgIgLQgDABgBADQAAABABAAQAAABAAABQAAAAABAAQAAABABAAQADACAEAAIAGgBQAEgBADgCQgCgEgDgCQgEgCgDAAQgFAAgCACg");
	this.shape_13.setTransform(154.8,39.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8F4EC").s().p("AgMAVIgHgEIgBgDIABgCIABgCIABgBIACAAIADABIAFACIAGACQAEAAAEgEQAFgDAAgFQgHAFgIAAQgFAAgFgCQgEgBgCgEQgDgBAAgFQAAgFADgDQACgEAFgCQAEgCAHAAQAEAAAFACIAIAFQADADACAEQACAEAAAEQAAAFgCAEQgBAEgEADQgDADgFACQgEACgFAAQgGAAgFgCgAgJgLQgCABAAADQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAQADACAEAAIAGgBIAHgDQgCgFgDgBQgEgCgDAAQgEAAgEACg");
	this.shape_14.setTransform(149.4,39.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F4EC").s().p("AAFAWIgCgBIAAgCIAAgcIgHAFIgEABIgDgBIgBgEIAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIAGgEIAEgDIAFgCIAEAAIACABIAAACIAAAlIAAACIgCABg");
	this.shape_15.setTransform(144.7,39.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F4EC").s().p("AgzAFQgGAAAAgFQAAgEAGAAIBnAAQAGAAAAAEQAAAFgGAAg");
	this.shape_16.setTransform(70.9,43.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F4EC").s().p("AgCAEIgCAAIgBgCIAAgDIABgCIACgBIAFAAIACABIABACIAAADIgBACIgCAAg");
	this.shape_17.setTransform(76,40.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8F4EC").s().p("AgBAWIgCgBIgBgCIAAgfIgRAAIgDgBIAAgCIAAgDIAAgCIADgBIArAAIACABIABACIAAADIgBACIgCABIgRAAIAAAfIgBACIgCABg");
	this.shape_18.setTransform(72.9,39.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F4EC").s().p("AgLAVQgFgBgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIABgEIABgBIACgBIADABQAIAFAIAAIAGAAIAEgDIACgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgQgCIgHgCIgEgBIgDgDIgBgFQAAgFAGgFQAHgEAIAAIAJABIAKAEIACADIgBAEIgCABIgCABIgCgBQgGgEgIAAIgFABIgEACQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIABACIADABIAVADIAFACIADADIABAFQAAAFgDADQgDAEgFABQgEACgHAAQgHAAgFgCg");
	this.shape_19.setTransform(67.3,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8F4EC").s().p("AgXAiIgCgBIAAgCIAAg9IAAgCIACgBIAuAAIACABIABACIAAADIgBACIgCABIgmAAIAAAYIAdAAIACABIABACIAAADIgBACIgCABIgdAAIAAAQIAmAAIACABIABACIAAADIgBACIgCABg");
	this.shape_20.setTransform(61.4,40.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8F4EC").s().p("AgaAsIgFgDQgDgDAAgDQAAgEADgDIABgBIADgBIABAAIAAAAIABABIAAAAIABAAQAEADACAAQAEAAACgDIAGgHIghg6IAAgCIABgDIADgBIAIAAIADABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAXAsIAWgsQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgBIAIAAIADABIABACIAAADIglBGIgFAHIgHAFQgEABgFAAQgEAAgEgBg");
	this.shape_21.setTransform(119.7,90.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8F4EC").s().p("AgVAwQgJgDgEgGIAAhVIABgEIADgBIAHAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAEIAAAjQAIgGALAAQAPAAAJAKQAKAKAAAOQAAAPgKAKQgKAKgRAAQgKAAgJgEgAgSAEIAAAdQAHAFAJAAQAJAAAFgGQAGgGAAgJQAAgJgGgGQgGgFgHAAQgKAAgHAHg");
	this.shape_22.setTransform(110.3,87.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8F4EC").s().p("AANAkQgOgIgIgNQgGgIgFgQQgEgRgGgLIgBgDIAEAAQAMACAMAHQAPAMAJAcQAGAXAEAGIABACIgCABQgHAAgKgFg");
	this.shape_23.setTransform(141.3,100.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8F4EC").s().p("AgwA1QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAIgLANgfQAJgWAHgJQAKgMAMgIQAKgGALgDIAGgCIAPAAIgDAHIgLAUIgPAhQgHAPgMALQgLAMgRAFQgMAEgJAAg");
	this.shape_24.setTransform(150.5,96.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8F4EC").s().p("AgJCaIgLgCQgRgEgKgIQgGgFgDgHQgBgGAAgIQAAgPAMgJQAOgKAagCIAXAAQADABAAAEQAAADgDABQgCACgIAAQgNAAgHALQgJAMAEANQAEAJAJAFQAHAGALgCQALgCAPgLQAKgIAPgRIAbgnQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDAAIgFABQgSAAgEgBQgIgDgFgEQgIgFgFgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQgHAHgHAEQgOAIgJABIgNAAQgPgBgIgJQgGgEAAgGQgBgKADgIIAZgoQAGgJACgFIgBgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgJAFIgKAIIgmArIgNAXIgGAKQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgoABQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIABgCIAUgmIAHgLQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQgHgBgFgEQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAABgBABQgCAMgGAJQgKAPgMAIQgMAJgNAEQgOAEgTAAQgLAAgJgFQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgIAJgOAIQgOAGgMAAIgPgCQgMgBgJgFQgVgIgLgNQAAAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgFAEgOAHQgOAFgJAAQgSABgJgDQgMgEgHgHQgFgFgEgKIAAgPQADgLAHgJQAEgFAGgDQALgHANgDQARgDAOAEQARAFALAJIAFADQAAABAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIBGiAIAJgKQAOgPASgFQASgFANAGQAKAFAEAJQAGAMgDAQQgBADgDACQgDACgDgBQgFgBAAgEIABgJQAAgFgCgGQgEgIgIAFQgEADgGAHIgJAOIghA7IgRAfQgIAOgQAPIgOANIgCACIACADIARAOQAOAJAKAEQARAGAPgMQAAAAAAgBQABAAAAAAQAAgBAAAAQgBgBAAAAQgPgPAHgYQAEgPAMgPQAJgKALgGQAPgIAOgDQAYgDARAHQAKADAIAJQACADADAHQAEAHAGAFIAHAEQAIACACgGIAUggIACgBIAqgBQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgGAKIAAACIAJgHQAWgMAQABQAQACAFAOQACAKgFAHIgTAdIgNAYQgCAEAAAFQAAAEAEAAQACAAAEgCQAJgFAPgQQADgEAAgEQgBgTANgRQANgSAUgJQAPgGALgBIAMAAQAMgBAOAHIAIAHQAAAAABABQAAAAABAAQAAAAAAAAQAAgBABAAIACgEQACgEAEAAIAiABIAFgBQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIgwBVIAAABIABAAQAIgEAJgIIAQgMQACgCAAgDQADgSAMgPQANgRAVgIQARgIAWABQARABAMAJQAGAEADAFQAKAOAPAEQATAIATgNQAOgJANgQIAHgJQADgDADAAQADgBACACQACACAAADIgDAJQgDAHAAAIIABANIAAAMQgDAXgMAOIgEAFQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIACAAIAWgJIAYgMQAEgDABAEIACAEQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQgDAEgHACIgZAMQgQAJgRADQgVADgLgBQgTgDgJgOQgFgHACgKQABgLAGgGQAFgFAFAAQAIgBAEABQAGABAEAGQAGALgHAJQgEAGgJABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIABACQAEAFAJAAQAGABADgFQAGgJADgJQADgJAAgTQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgRAGgTgEIgRgFQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAABQgCAHgDAHQgGAOgLALQgLAMgRAHQgTAJgagCQgPgCgMgMIgIgLQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAIgKAHQgPALgRAEQgCABgDADIgEAEIgPAUQgIAJgQAPIgPAMIgUANIgVAKIgXAFgAmUAJQgRAAgIAOQgFAKAEAKQAEAHAIAFQAIAEAJAAQAKgBAJgGIANgMQADgCgDgDQgIgNgIgGQgIgHgKAAIgBAAgAB4ghQgFABgJAGQgLAIgIAMQgOARgGAUQgCAKACAFQADAHAHgBQAIgBAKgIIAKgLQAGgFAEgHQAJgMAFgMQAEgKAAgHIAAgDQAAgFgDgDQgDgCgDAAIgEABgAimgiIgIACQgLAGgLAMQgGAHgIANQgFAGgGAPQgCAIAAAGQABAMALgBQAHgCAFgEQAMgIALgPQAJgLAGgNQAFgNAAgHIAAgEQgCgJgGAAIgCAAgAEVgiQgFAAgIAFQgQALgPAWIgIAPQgGAOABAJQABAKAKAAQAEAAAFgDQAFgDAHgHQAIgGAMgRQAGgIAFgMQAEgLAAgGIAAgDQgCgKgHAAIgBAAg");
	this.shape_25.setTransform(109.3,107.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8F4EC").s().p("AgTBmIAAhmIgphlIApAAIATAzIAUgzIApAAIgpBlIAABmg");
	this.shape_26.setTransform(214.8,64.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8F4EC").s().p("AAUBmIgIgpIgXAAIgIApIgpAAIApjLIAnAAIApDLgAgDAUIAHAAIgEgUg");
	this.shape_27.setTransform(201.7,64.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8F4EC").s().p("AAUBmIgUhmIgTBmIgpAAIgpjLIApAAIAVBlIAUhlIAnAAIAVBlIAUhlIApAAIgpDLg");
	this.shape_28.setTransform(184.2,64.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8F4EC").s().p("Ag8BmIAAjLIB5AAIAAApIhQAAIAAAoIA8AAIAAAoIg8AAIAAApIBQAAIAAApg");
	this.shape_29.setTransform(164.9,64.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8F4EC").s().p("AgTBmIAAiiIgpAAIAAgpIB5AAIAAApIgpAAIAACig");
	this.shape_30.setTransform(149.6,64.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8F4EC").s().p("AAVBmIgJgpIgYAAIgIApIgoAAIAojLIApAAIAoDLgAgDAUIAHAAIgEgUg");
	this.shape_31.setTransform(136,64.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgHgIgGgMQgEgLAAgNIAAhRQAAgNAEgLQAGgMAHgIQAIgHAMgGQALgEAMAAQANAAALAEQAMAGAHAHQAJAJAEALQAFAMAAAMIgpAAQAAgIgGgGQgFgGgJAAQgIAAgGAGQgFAFAAAJIAABRQAAAJAFAFQAGAGAIAAQAJAAAFgGQAGgGAAgIIAAgVIgUAAIAAgoIA9AAIAAA9QAAALgFANQgEALgJAIQgHAIgMAFQgKAFgOAAQgNAAgKgFg");
	this.shape_32.setTransform(121.2,64.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8F4EC").s().p("AgUBmIAAhmIgohlIAoAAIAUAzIAUgzIApAAIgpBlIAABmg");
	this.shape_33.setTransform(97.1,64.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8F4EC").s().p("AAUBmIgfhSIgIAAIAABSIgpAAIAAjLIA8AAQANAAALAEQAMAGAIAHQAIAIAEAMQAFAKAAAOQAAATgKAPQgJAOgQAHIAjBXgAgTgUIATAAQAJAAAFgFQAGgGAAgJQAAgJgGgFQgFgGgJAAIgTAAg");
	this.shape_34.setTransform(82.7,64.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8F4EC").s().p("Ag8BmIAAjLIB5AAIAAApIhQAAIAAAoIA8AAIAAAoIg8AAIAAApIBQAAIAAApg");
	this.shape_35.setTransform(67.4,64.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgIgKgFgKQgEgLAAgNIAAhRQAAgNAEgLQAFgLAIgJQAIgHAMgGQALgEAMAAQAOAAAKAEQAMAGAHAHQAJAJAFALQAEALAAANIgoAAQgBgIgFgGQgHgGgIAAQgIAAgFAGQgHAGAAAIIAABRQAAAIAHAGQAFAGAIAAQAIAAAHgGQAFgGABgIIAoAAQAAANgEALQgFAKgJAKQgHAIgMAEQgKAFgOAAQgNAAgKgFg");
	this.shape_36.setTransform(52.1,64.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgHgIgFgMQgFgLAAgNIAAhRQAAgNAFgLQAFgMAHgIQAIgHAMgGQAMgEALAAQANAAALAEQANAGAGAHQAJAJAFALQAEALAAANIAABRQAAANgEALQgFAKgJAKQgHAHgMAFQgKAFgOAAQgMAAgLgFgAgNg2QgGAFAAAJIAABRQAAAJAGAFQAFAGAIAAQAJAAAGgGQAFgGABgIIAAhRQgBgIgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_37.setTransform(36.8,64.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8F4EC").s().p("AAUBmIgfhSIgIAAIAABSIgpAAIAAjLIA8AAQANAAALAEQAMAGAIAHQAIAIAEAMQAFAKAAAOQAAASgJAQQgKAOgQAHIAjBXgAgTgUIATAAQAIAAAHgFQAFgHAAgIQAAgJgFgFQgGgGgJAAIgTAAg");
	this.shape_38.setTransform(21.5,64.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8F4EC").s().p("AgXBhQgMgFgHgHQgJgKgEgKQgFgMAAgMIAAhRQAAgMAFgMQAEgLAJgJQAHgHAMgGQALgEAMAAQANAAALAEQAMAGAIAHQAHAIAGAMQAEALAAANIgpAAQAAgJgFgFQgGgGgJAAQgIAAgFAGQgGAGAAAIIAABRQAAAIAGAGQAFAGAIAAQAJAAAGgGQAFgFAAgJIAAgVIgUAAIAAgoIA9AAIAAA9QAAANgEALQgGAMgHAHQgIAIgMAFQgKAFgOAAQgNAAgKgFg");
	this.shape_39.setTransform(6.1,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,221,123.3), null);


(lib.ctatext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAyQgEAAgBgEIgQhIIgPBIQgBAEgDAAIgFAAQgEAAAAgEIgWhZQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIADgCQABgBAAAAQABAAAAAAQABABAAAAQAAAAABAAIACADIATBOIARhKQABgEADAAIADAAQAEAAAAAEIARBKIAThOIACgDIAEAAIADACQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgWBZQAAAEgEAAg");
	this.shape.setTransform(74.9,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAjQgJgNAAgWQAAgUAJgOQAJgPAPAAQAOAAAKAMQAKANAAAYQAAAWgIANQgKAOgQAAQgPAAgJgOgAgSgcQgGAMAAAQQAAATAHALQAHAKAKAAQALAAAHgJQAHgKABgVQgBgQgFgMQgHgLgNgBQgLABgHALg");
	this.shape_1.setTransform(63.7,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbAxQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgvhPIAABNQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhZQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIADgBIADAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAIAvBPIAAhMQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgBIADABIABAEIAABZQAAAEgEAAg");
	this.shape_2.setTransform(53.1,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAwQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAhZQAAgBABAAQAAAAAAgBQAAAAAAgBQABAAAAgBIADgBIAgAAQAMABAHAHQAIAIAAALQABAMgIAIQgIAGgMAAIgbAAIAAApQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAgWgEIAbAAQAJABAFgHQAFgFgBgHQAAgHgEgEQgGgHgIAAIgbAAg");
	this.shape_3.setTransform(36.7,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAjQgJgNAAgWQAAgUAIgOQAKgPAPAAQAPAAAJAMQAKANAAAYQAAAWgIANQgKAOgQAAQgOAAgKgOgAgSgcQgGAMAAAQQAAATAHALQAHAKAKAAQALAAAGgJQAJgKgBgVQABgQgHgMQgGgLgNgBQgLABgHALg");
	this.shape_4.setTransform(26.3,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAwQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgoIgrAAIAAAoQgBAFgEAAQgFAAABgFIAAhZQgBgFAFAAQAEAAABAFIAAAoIArAAIAAgoQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIAABZQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_5.setTransform(16,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAoQgFgFgDgFQgCgEAEgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIADACQAIAQANgBQAJAAAGgEQAFgFAAgIQAAgGgDgFQgEgFgNgEQgbgGAAgVQAAgKAHgHQAIgHAMgBQANAAAJAKQAEAFADAFQABAFgEABQgEACgBgEQgDgFgGgFQgGgFgGAAQgJAAgFAFQgEAEAAAHQAAAOAUAFQAOAEAHAGQAGAHAAALQAAAMgIAHQgIAHgNAAQgLAAgKgJg");
	this.shape_6.setTransform(6,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctatext, new cjs.Rectangle(0,0,84.1,20.1), null);


// stage content:
(lib._300x600_re_under = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},10).wait(271).to({regX:41.5,regY:10.4,scaleX:1,scaleY:1,x:149.9,y:562.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:562.1},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:562},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:561.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:149.8,y:561.8},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:561.7},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:561.3},0).wait(1).to({regX:41.5,regY:10.4,scaleX:1.19,scaleY:1.19,x:149.8,y:561.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:561.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:562},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:562.1},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(274).to({regY:14.3,scaleX:1,scaleY:1,y:561.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:561.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:561.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:561.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:561.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:561.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:561.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:561.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:561.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:561.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(412.5,355.4,1,1,-31.7,0,0,89.5,133.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:195.5,regY:92.5,rotation:-30.2,x:468.2,y:265.5},0).wait(1).to({rotation:-28.3,x:451.6,y:266.4},0).wait(1).to({rotation:-25.9,x:430.3,y:267.6},0).wait(1).to({rotation:-22.8,x:402.9,y:269.3},0).wait(1).to({rotation:-19.2,x:369.6,y:271.7},0).wait(1).to({rotation:-15.4,x:335.3,y:274.5},0).wait(1).to({rotation:-12.2,x:305.7,y:277.1},0).wait(1).to({rotation:-9.7,x:282.2,y:279.3},0).wait(1).to({rotation:-7.7,x:263.7,y:281},0).wait(1).to({rotation:-6.1,x:249.2,y:282.5},0).wait(1).to({rotation:-4.9,x:237.4,y:283.6},0).wait(1).to({rotation:-3.9,x:227.9,y:284.7},0).wait(1).to({rotation:-3.1,x:220,y:285.4},0).wait(1).to({rotation:-2.4,x:213.6,y:286.1},0).wait(1).to({rotation:-1.8,x:208.2,y:286.7},0).wait(1).to({rotation:-1.4,x:203.9,y:287.1},0).wait(1).to({rotation:-1,x:200.3,y:287.5},0).wait(1).to({rotation:-0.7,x:197.4,y:287.9},0).wait(1).to({rotation:-0.5,x:195.2,y:288.1},0).wait(1).to({rotation:-0.3,x:193.4,y:288.2},0).wait(1).to({rotation:-0.2,x:192.1,y:288.4},0).wait(1).to({rotation:-0.1,x:191.2,y:288.5},0).wait(1).to({rotation:0,x:190.8},0).wait(1).to({regX:89.5,regY:133.5,x:84.5,y:329.5},0).wait(277));

	// Layer 6 copy
	this.instance_3 = new lib.Symbol2copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-133,289.6,1,1,20.1,0,0,89.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:90.5,regY:114.5,rotation:19.1,x:-115.6,y:273.8},0).wait(1).to({rotation:18,x:-103.1,y:276},0).wait(1).to({rotation:16.4,x:-87.1,y:278.9},0).wait(1).to({rotation:14.5,x:-66.7,y:282.5},0).wait(1).to({rotation:12.1,x:-42.1,y:287},0).wait(1).to({rotation:9.8,x:-17,y:291.5},0).wait(1).to({rotation:7.7,x:4.4,y:295.4},0).wait(1).to({rotation:6.1,x:21.3,y:298.5},0).wait(1).to({rotation:4.9,x:34.3,y:301},0).wait(1).to({rotation:3.9,x:44.7,y:302.9},0).wait(1).to({rotation:3.1,x:52.9,y:304.4},0).wait(1).to({rotation:2.5,x:59.6,y:305.7},0).wait(1).to({rotation:1.9,x:65.1,y:306.7},0).wait(1).to({rotation:1.5,x:69.6,y:307.5},0).wait(1).to({rotation:1.2,x:73.3,y:308.2},0).wait(1).to({rotation:0.9,x:76.4,y:308.8},0).wait(1).to({rotation:0.6,x:78.8,y:309.2},0).wait(1).to({rotation:0.5,x:80.8,y:309.6},0).wait(1).to({rotation:0.3,x:82.4,y:309.9},0).wait(1).to({rotation:0.2,x:83.6,y:310.1},0).wait(1).to({rotation:0.1,x:84.5,y:310.3},0).wait(1).to({rotation:0,x:85.1,y:310.4},0).wait(1).to({x:85.5,y:310.5},0).wait(1).to({regX:89.5,regY:133.5,x:84.5,y:329.5},0).wait(277));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(72).to({regX:593.3,regY:68.2,x:611.1,y:87.9},0).wait(1).to({x:609.4},0).wait(1).to({x:606.2},0).wait(1).to({x:601.1},0).wait(1).to({x:593.5},0).wait(1).to({x:582.7},0).wait(1).to({x:567.1},0).wait(1).to({x:544.3,y:87.8},0).wait(1).to({x:509.7},0).wait(1).to({x:459.9},0).wait(1).to({x:407.5,y:87.7},0).wait(1).to({x:369.8},0).wait(1).to({x:345,y:87.6},0).wait(1).to({x:328.2},0).wait(1).to({x:316.7},0).wait(1).to({x:308.8},0).wait(1).to({x:303.5},0).wait(1).to({x:300.1},0).wait(1).to({x:298.3},0).wait(1).to({regX:131.7,regY:89,x:-163.9,y:108.4},0).wait(47).to({regX:593.3,regY:68.2,x:297.2,y:87.6},0).wait(1).to({x:295.5},0).wait(1).to({x:292.4},0).wait(1).to({x:287.4},0).wait(1).to({x:280.1},0).wait(1).to({x:269.5},0).wait(1).to({x:254.3},0).wait(1).to({x:232},0).wait(1).to({x:198.4},0).wait(1).to({x:149.8},0).wait(1).to({x:98.8},0).wait(1).to({x:62},0).wait(1).to({x:37.8},0).wait(1).to({x:21.6},0).wait(1).to({x:10.4},0).wait(1).to({x:2.6},0).wait(1).to({x:-2.6},0).wait(1).to({x:-5.9},0).wait(1).to({x:-7.6},0).wait(1).to({regX:131.7,regY:89,x:-469.8,y:108.4},0).wait(50).to({regX:593.3,regY:68.2,x:-8.6,y:87.6},0).wait(1).to({x:-10.3},0).wait(1).to({x:-13.3},0).wait(1).to({x:-18},0).wait(1).to({x:-25.1},0).wait(1).to({x:-35.2},0).wait(1).to({x:-49.8},0).wait(1).to({x:-71.1},0).wait(1).to({x:-103.4},0).wait(1).to({x:-150},0).wait(1).to({x:-198.9},0).wait(1).to({x:-234.1},0).wait(1).to({x:-257.3},0).wait(1).to({x:-272.9},0).wait(1).to({x:-283.7},0).wait(1).to({x:-291.1},0).wait(1).to({x:-296.1},0).wait(1).to({x:-299.2},0).wait(1).to({x:-300.9},0).wait(1).to({regX:131.7,regY:89,x:-763,y:108.4},0).wait(53));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,466.4,1,1,0,0,0,110.5,61.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},10).wait(288));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(301));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,300,913.3,600);
// library properties:
lib.properties = {
	id: 'EE864E8176924602B95E85E4297E8BB2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_re_under_atlas_.png", id:"300x600_re_under_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EE864E8176924602B95E85E4297E8BB2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;