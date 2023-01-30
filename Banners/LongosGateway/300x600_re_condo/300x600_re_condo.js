(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_re_condo_atlas_", frames: [[0,0,179,267],[181,0,135,349]]}
];


// symbols:



(lib.grapes_bb = function() {
	this.spriteSheet = ss["300x600_re_condo_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.wine_bb = function() {
	this.spriteSheet = ss["300x600_re_condo_atlas_"];
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wine_bb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,135,349), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grapes_bb();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,179,267), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape.setTransform(1099.8,133.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAdCTIgth1IgMAAIAAB1Ig7AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAHAQQAHAQAAATQAAAcgOAVQgNAVgYAJIAzB+gAgcgdIAcAAQAMABAJgJQAIgJAAgMQAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_1.setTransform(1084.9,121.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBYAAIAAA7IhYAAIAAA6IB1AAIAAA7g");
	this.shape_2.setTransform(1063.2,121.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBgAgdBYIAdAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgHQgIgJgNAAIgdAAg");
	this.shape_3.setTransform(1041.4,121.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAdCTIgth1IgMAAIAAB1Ig7AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAHAQQAHAQAAATQAAAcgOAVQgNAVgYAJIAzB+gAgcgdIAcAAQAMABAJgJQAIgJAAgMQAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_4.setTransform(1019.7,121.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgHASAAQATAAAQAHQAQAHALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgIAHAAANIAAB1QAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMIAAh1QAAgNgJgHQgJgJgMAAQgMAAgIAJg");
	this.shape_5.setTransform(997.9,121.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgdCTIAAjqIg6AAIAAg7ICvAAIAAA7Ig6AAIAADqg");
	this.shape_6.setTransform(1128.3,79.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIA6AAQABANAIAIQAIAIAMAAQANAAAIgIQAJgIAAgNQAAgNgJgIQgJgJgMAAQgSAAgQgGQgQgHgMgMQgMgLgHgQQgGgQAAgTQAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHALAMQANAMAGAQQAHARAAASIg6AAQAAgMgJgJQgJgIgMAAQgMAAgIAIQgIAJgBAMQABANAIAIQAIAJAMAAQATgBAQAHQAQAHAMALQAMALAGARQAHAQAAASQAAAUgHAQQgGAQgMAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_7.setTransform(1108.7,79.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAdCTIguh2IgLAAIAAB2Ig7AAIAAklIBXAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgNAVgYAJIAzB+gAgcgcIAcAAQAMAAAJgJQAIgIAAgNQAAgMgIgJQgIgIgNAAIgcAAg");
	this.shape_8.setTransform(1088.2,79.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgcCTIAAklIA5AAIAAElg");
	this.shape_9.setTransform(1072.3,79.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AhXCTIAAklICvAAIAAA7Ih1AAIAAA7IBXAAIAAA5IhXAAIAAB2g");
	this.shape_10.setTransform(1057.6,79.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AAdCTIguh2IgLAAIAAB2Ig7AAIAAklIBXAAQATAAAQAGQAQAHAMAMQALAMAHAQQAHARAAASQAAAcgOAVQgNAVgYAJIAzB+gAgcgcIAcAAQAMAAAJgJQAJgIgBgNQAAgMgIgJQgJgIgMAAIgcAAg");
	this.shape_11.setTransform(1027.9,79.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAjNIA6AAIAADNQAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNIAAjNIA6AAIAADNQAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_12.setTransform(1006.1,79.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgSAHgRQAGgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHAMAMQALAMAIAQQAGARAAASIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAHQgQAGgTAAQgSAAgQgGgAgUhPQgJAJAAAMIAAB1QAAANAJAIQAIAIAMAAQAMAAAJgIQAIgIAAgNIAAh1QAAgMgIgJQgJgIgMAAQgMAAgIAIg");
	this.shape_13.setTransform(984.4,79.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AgcCTIAAiTIg7iSIA7AAIAcBKIAdhKIA7AAIg7CSIAACTg");
	this.shape_14.setTransform(962.6,79.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA6IhXAAIAAB2g");
	this.shape_15.setTransform(1136,37.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBWAAIAAA6IhWAAIAAB2g");
	this.shape_16.setTransform(1114.3,37.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTABQgSgBgQgGgAgUhPQgJAIAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgIQgIgIgNAAQgMAAgIAIg");
	this.shape_17.setTransform(1092.5,37.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIA7AAQgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMQAAgNgIgIQgJgJgMABIhXAAIAAiwICvAAIAAA7Ih0AAIAAA7IAcAAQATAAAQAGQAQAHAMAMQALALAIAQQAGAQAAATQAAASgGARQgIAQgLAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_18.setTransform(1062.8,37.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgOCUIAAjrIgdAAIAAg7IBXAAIAAEmg");
	this.shape_19.setTransform(1045.4,37.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AgdDPIAAhAQgagJgQgXQgQgWAAgeIA6AAQABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgNgJgIQgJgJgMAAQgSAAgQgGQgQgHgMgMQgMgLgHgQQgGgQAAgTQAAgPAEgNQAEgNAIgMQAHgKALgIQALgIANgFIAAhAIA7AAIAABAQAZAJARAWQAQAXAAAeIg6AAQAAgNgJgIQgJgIgMAAQgMAAgIAIQgIAIgBANQABAMAIAJQAIAIAMAAQATAAAQAHQAQAGAMAMQAMALAGAQQAHAQAAATQAAAfgQAWQgRAXgZAJIAABAg");
	this.shape_20.setTransform(1028.1,37.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_21.setTransform(998.3,37.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBXAAIAAA6IhXAAIAAA6IB0AAIAAA8g");
	this.shape_22.setTransform(976.6,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIg6AAQAAgNgJgIQgIgIgNAAQgMAAgIAIQgJAIAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAgdIgeAAIAAg6IBYAAIAABXQAAASgHARQgGAQgNAMQgLAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_23.setTransform(954.8,37.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape_24.setTransform(868.4,133.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih0AAIAAA6IBWAAIAAA7IhWAAIAAA6IB0AAIAAA7g");
	this.shape_25.setTransform(853.5,121.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAdCTIg5iTIAACTIg7AAIAAkmIA7AAIA5CTIAAiTIA7AAIAAEmg");
	this.shape_26.setTransform(831.8,121.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_27.setTransform(815.9,121.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AhICTIAAkmIA6AAIAADrIBXAAIAAA7g");
	this.shape_28.setTransform(801.5,121.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AAeCTIg7iTIAACTIg6AAIAAkmIA6AAIA7CTIAAiTIA6AAIAAEmg");
	this.shape_29.setTransform(781.2,121.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgTAHgQQAGgQAMgMQAMgMAQgHQAQgHASAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAHABANIAAB1QgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMIAAh1QAAgNgIgHQgJgJgMAAQgMAAgIAJg");
	this.shape_30.setTransform(759.5,121.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AAeCTIgvh1IgMAAIAAB1Ig6AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQAMAMAGAQQAHAQAAATQAAAcgOAVQgNAVgYAJIAzB+gAgdgdIAdAAQAMABAJgJQAJgJAAgMQAAgNgJgHQgJgJgMAAIgdAAg");
	this.shape_31.setTransform(729.7,121.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBXAAIAAA7IhXAAIAAA6IB1AAIAAA7g");
	this.shape_32.setTransform(708,121.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAHAQQAHAQAAATIAAB1QAAATgHAQQgHAQgLAMQgMAMgQAGQgQAIgTgBgAgcBYIAcAAQAMAAAJgIQAIgJAAgMIAAh1QAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_33.setTransform(686.2,121.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AAeCTIgvh1IgMAAIAAB1Ig6AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQAMAMAGAQQAHAQAAATQAAAcgOAVQgNAVgYAJIAzB+gAgdgdIAdAAQAMABAJgJQAJgJAAgMQAAgNgJgHQgJgJgMAAIgdAAg");
	this.shape_34.setTransform(664.5,121.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgTAHgQQAGgQAMgMQAMgMAQgHQAQgHASAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAHAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgHQgIgJgNAAQgMAAgIAJg");
	this.shape_35.setTransform(642.7,121.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgVAXIAAgtIAsAAIAAAtg");
	this.shape_36.setTransform(805.9,91.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AhXCTIAAklICvAAIAAA7Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_37.setTransform(791,79.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AAeCTIguh2IgNAAIAAB2Ig6AAIAAklIBXAAQATAAAQAGQAQAHAMAMQALAMAIAQQAGARAAASQAAAcgOAVQgNAVgXAJIAyB+gAgdgcIAdAAQAMAAAJgJQAIgIABgNQgBgMgIgJQgJgIgMAAIgdAAg");
	this.shape_38.setTransform(769.3,79.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAHQgQAGgTAAQgSAAgQgGgAgUhPQgIAJAAAMIAAB1QAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIgBgNIAAh1QABgMgJgJQgJgIgMAAQgMAAgIAIg");
	this.shape_39.setTransform(747.5,79.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AgdCTIAAjqIg6AAIAAg7ICvAAIAAA7Ig7AAIAADqg");
	this.shape_40.setTransform(727,79.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIA7AAQAAANAIAIQAIAIAMAAQAMAAAJgIQAIgIAAgNQAAgNgIgIQgJgJgMAAQgSAAgQgGQgRgHgLgMQgMgLgHgQQgGgQAAgTQAAgSAGgRQAHgQAMgMQALgMARgHQAQgGASAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASIg7AAQAAgMgIgJQgJgIgMAAQgMAAgIAIQgIAJAAAMQAAANAIAIQAIAJAMAAQATgBAQAHQAQAHAMALQALALAHARQAHAQAAASQAAAUgHAQQgHAQgLAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_41.setTransform(705.2,79.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA6IhXAAIAAA6IB1AAIAAA8g");
	this.shape_42.setTransform(815.5,37.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AAdCUIAAh2Ig5AAIAAB2Ig7AAIAAkmIA7AAIAAB2IA5AAIAAh2IA7AAIAAEmg");
	this.shape_43.setTransform(793.8,37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_44.setTransform(772,37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGARAAASQAAAUgGAPQgIAQgLALQgMAMgQAHQgQAHgTAAIgdAAIAAB2gAgdgcIAdAAQAMgBAJgIQAIgJABgMQgBgNgIgIQgJgIgMAAIgdAAg");
	this.shape_45.setTransform(742.3,37.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_46.setTransform(726.4,37.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("AAdCUIg5iUIA5iSIA7AAIg7CSIA7CUgAhXCUIAAkmIA7AAIAACSIAACUgAgcAAg");
	this.shape_47.setTransform(710.5,37.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIA6AAQABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgNgJgIQgJgJgMABQgSAAgQgHQgQgHgMgMQgMgLgHgQQgGgPAAgUQAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIg6AAQAAgNgJgIQgJgIgMAAQgMAAgIAIQgIAIgBANQABAMAIAJQAIAIAMABQATAAAQAGQAQAHAMAMQAMALAGAQQAHAQAAATQAAASgHARQgGAQgMAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_48.setTransform(688.8,37.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape_49.setTransform(572.6,115.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("AAeCUIguh2IgNAAIAAB2Ig6AAIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGARAAASQAAAcgOAVQgNAUgXALIAyB+gAgdgdIAdAAQAMAAAJgIQAIgJABgMQgBgNgIgIQgJgIgMAAIgdAAg");
	this.shape_50.setTransform(557.8,103.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA6IBXAAIAAA7IhXAAIAAA6IB0AAIAAA8g");
	this.shape_51.setTransform(536,103.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA6IBYAAIAAA7IhYAAIAAA6IB1AAIAAA8g");
	this.shape_52.setTransform(514.3,103.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGARAAASQAAASgFAOQgGAPgLALQALAMAGAOQAFAPAAASQAAATgGAQQgIAQgLAMQgMAMgQAHQgQAGgTABgAgdBYIAdAAQAMAAAJgIQAIgJAAgMQAAgNgIgIQgJgJgMABIgdAAgAgdgdIAdAAQAMAAAJgIQAIgJAAgMQAAgNgIgIQgJgIgMAAIgdAAg");
	this.shape_53.setTransform(492.5,103.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQAMAMAGAQQAHARAAASIAAB1QAAATgHAQQgHAQgLAMQgMAMgQAHQgQAGgTABgAgcBYIAcAAQAMAAAJgIQAJgJgBgMIAAh1QABgNgJgIQgJgIgMAAIgcAAg");
	this.shape_54.setTransform(462.8,103.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAkmIA6AAIA7CSIAAiSIA6AAIAAEmg");
	this.shape_55.setTransform(441,103.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AAdCUIgLg8IgiAAIgMA8Ig7AAIA7kmIA5AAIA7EmgAAFAdIgFgdIgFAdIAKAAg");
	this.shape_56.setTransform(419.3,103.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA6IBYAAIAAA7IhYAAIAAA6IB1AAIAAA8g");
	this.shape_57.setTransform(389.5,103.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAkmIA6AAIA7CSIAAiSIA6AAIAAEmg");
	this.shape_58.setTransform(367.8,103.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_59.setTransform(351.9,103.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AAdCUIgdiUIgcCUIg7AAIg7kmIA7AAIAdCSIAeiSIA5AAIAeCSIAdiSIA7AAIg7Emg");
	this.shape_60.setTransform(330.1,103.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AAdCTIguh1IgLAAIAAB1Ig7AAIAAkmIBXAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgNAVgYAKIAzB9gAgcgdIAcAAQAMABAJgJQAIgJAAgMQAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_61.setTransform(534.6,61.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih0AAIAAA6IBXAAIAAA7IhXAAIAAA6IB0AAIAAA7g");
	this.shape_62.setTransform(512.8,61.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AgdCTIg6kmIA6AAIAdCTIAeiTIA6AAIg6Emg");
	this.shape_63.setTransform(491.1,61.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_64.setTransform(475.2,61.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AhICTIAAkmIA6AAIAADrIBXAAIAAA7g");
	this.shape_65.setTransform(460.8,61.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih0AAIAAA6IBWAAIAAA7IhWAAIAAA6IB0AAIAAA7g");
	this.shape_66.setTransform(440.5,61.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATAAAQAIQAQAGAMAMQAMAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAGQgQAIgTgBgAgdBYIAdAAQAMAAAJgIQAJgJAAgMIAAh1QAAgNgJgHQgJgJgMAAIgdAAg");
	this.shape_67.setTransform(418.8,61.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBXAAIAAA7IhXAAIAAA6IB1AAIAAA7g");
	this.shape_68.setTransform(389,61.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("AAdCTIgdiTIgcCTIg7AAIg7kmIA7AAIAdCTIAeiTIA5AAIAeCTIAdiTIA7AAIg7Emg");
	this.shape_69.setTransform(361.4,61.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#063928").s().p("AgVAXIAAgtIAsAAIAAAtg");
	this.shape_70.setTransform(213.1,157.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#063928").s().p("AgVAtIAAhZIAsAAIgSBZg");
	this.shape_71.setTransform(205.1,132.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_72.setTransform(190.3,144.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#063928").s().p("AhICTIAAkmIA6AAIAADrIBXAAIAAA7g");
	this.shape_73.setTransform(170,144.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATQAAASgGAPQgFAOgLALQALAMAFAPQAGAPAAARQAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBgAgcBYIAcAAQAMAAAJgIQAIgIAAgNQAAgNgIgIQgJgJgMAAIgcAAgAgcgcIAcAAQAMAAAJgJQAIgJAAgMQAAgMgIgIQgJgJgMAAIgcAAg");
	this.shape_74.setTransform(149.7,144.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#063928").s().p("AAdCTIgMg7IgiAAIgLA7Ig7AAIA7kmIA5AAIA7EmgAAGAdIgGgdIgFAdIALAAg");
	this.shape_75.setTransform(128,144.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#063928").s().p("AgcCTIAAjqIg7AAIAAg8ICvAAIAAA8Ig7AAIAADqg");
	this.shape_76.setTransform(107.4,144.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgIAIgBAMIAAB1QABANAIAIQAIAIAMAAQAMAAAJgIQAJgIAAgNIAAh1QAAgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_77.setTransform(77.7,144.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#063928").s().p("AgdCTIAAjqIg6AAIAAg8ICvAAIAAA8Ig6AAIAADqg");
	this.shape_78.setTransform(55.9,144.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#063928").s().p("AA6CUIAAiUIgdCUIg5AAIgeiUIAACUIg6AAIAAkmIBYAAIAcCSIAdiSIBYAAIAAEmg");
	this.shape_79.setTransform(245.2,102.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#063928").s().p("AAeCUIguh3IgNAAIAAB3Ig6AAIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgOAUgWALIAyB+gAgdgcIAdAAQANAAAIgJQAJgIAAgNQAAgMgJgJQgIgIgNAAIgdAAg");
	this.shape_80.setTransform(220.5,102.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#063928").s().p("AAdCUIgLg8IgiAAIgMA8Ig7AAIA7kmIA5AAIA7EmgAAFAdIgFgdIgFAdIAKAAg");
	this.shape_81.setTransform(198.8,102.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA5IhXAAIAAB3g");
	this.shape_82.setTransform(180.2,102.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#063928").s().p("AgVAtIAAhZIAsAAIgSBZg");
	this.shape_83.setTransform(165.3,90.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#063928").s().p("AAdCUIgdiUIgcCUIg7AAIg7kmIA7AAIAdCSIAeiSIA5AAIAeCSIAdiSIA7AAIg7Emg");
	this.shape_84.setTransform(136.6,102.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBXAAIAAA5IhXAAIAAA7IB0AAIAAA8g");
	this.shape_85.setTransform(109,102.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAkmIA6AAIA7CSIAAiSIA6AAIAAEmg");
	this.shape_86.setTransform(87.2,102.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBWAAIAAA5IhWAAIAAA7IB0AAIAAA8g");
	this.shape_87.setTransform(57.5,102.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#063928").s().p("AAdCUIAAh3Ig5AAIAAB3Ig7AAIAAkmIA7AAIAAB2IA5AAIAAh2IA7AAIAAEmg");
	this.shape_88.setTransform(35.7,102.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_89.setTransform(14,102.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIA6AAQAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMQAAgNgJgIQgIgIgNAAQgSgBgQgGQgQgHgMgMQgMgLgGgQQgHgPAAgUQAAgSAHgRQAGgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGARAAASIg6AAQAAgMgJgIQgIgJgNAAQgMAAgIAJQgJAIAAAMQAAAMAJAJQAIAIAMAAQATABAQAGQAQAHAMALQALAMAIAPQAGARAAASQAAATgGARQgIAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_90.setTransform(224.2,60.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#063928").s().p("AgcCUIAAknIA5AAIAAEng");
	this.shape_91.setTransform(208.3,60.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#063928").s().p("AgVAtIAAhZIAsAAIgSBZg");
	this.shape_92.setTransform(191.3,48.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgSAHgRQAGgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgIAIAAAMIAAB1QAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_93.setTransform(176.5,60.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#063928").s().p("AhXCUIAAknIBXAAQATAAAQAIQAQAGAMAMQAMAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAGQgQAIgTAAgAgdBYIAdAAQANAAAIgIQAJgJAAgMIAAh1QAAgMgJgIQgIgJgNAAIgdAAg");
	this.shape_94.setTransform(154.7,60.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#063928").s().p("AAdCUIg6iUIAACUIg6AAIAAknIA6AAIA6CTIAAiTIA7AAIAAEng");
	this.shape_95.setTransform(133,60.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgIAIAAAMIAAB1QAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_96.setTransform(111.2,60.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGALAMQANAMAGAQQAHARAAASIg6AAQAAgMgJgIQgIgJgNAAQgMAAgIAJQgJAIAAAMIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIA6AAQAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_97.setTransform(89.5,60.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgSAHgRQAGgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGARAAASIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIgAgUhOQgJAIABAMIAAB1QgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMIAAh1QAAgMgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_98.setTransform(59.7,60.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#063928").s().p("AgcCUIAAjrIg7AAIAAg8ICvAAIAAA8Ig7AAIAADrg");
	this.shape_99.setTransform(38,60.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATABAQAGQAQAHAMAMQAMAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAGQgQAIgTgBgAgcBYIAcAAQAMAAAJgIQAJgIgBgNIAAh1QABgMgJgIQgJgJgMAAIgcAAg");
	this.shape_100.setTransform(203.1,18.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#063928").s().p("AAeCTIguh2IgNAAIAAB2Ig6AAIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgOAUgWAKIAyB+gAgdgcIAdAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAIgdAAg");
	this.shape_101.setTransform(181.4,18.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#063928").s().p("AAdCTIgLg7IgiAAIgMA7Ig7AAIA7kmIA5AAIA7EmgAAFAdIgFgdIgFAdIAKAAg");
	this.shape_102.setTransform(159.6,18.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#063928").s().p("AgdCTIAAiTIg6iTIA6AAIAdBLIAdhLIA7AAIg7CTIAACTg");
	this.shape_103.setTransform(141.1,18.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_104.setTransform(120.5,18.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#063928").s().p("AAdCTIg6iTIAACTIg6AAIAAkmIA6AAIA6CTIAAiTIA7AAIAAEmg");
	this.shape_105.setTransform(98.8,18.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_106.setTransform(82.9,18.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#063928").s().p("AgcCTIg7kmIA7AAIAcCTIAdiTIA7AAIg7Emg");
	this.shape_107.setTransform(67,18.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#063928").s().p("AgVAtIAAhZIAsAAIgSBZg");
	this.shape_108.setTransform(52.1,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(1.6,0,1148,172), null);


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
(lib._300x600_re_condo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},10).wait(272).to({regX:41.5,regY:10.4,scaleX:1,scaleY:1,x:149.9,y:562.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:562.1},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:562},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:561.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:149.8,y:561.8},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:561.7},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:561.3},0).wait(1).to({regX:41.5,regY:10.4,scaleX:1.19,scaleY:1.19,x:149.8,y:561.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:561.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:562},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:562.1},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(275).to({regY:14.3,scaleX:1,scaleY:1,y:561.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:561.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:561.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:561.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:561.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:561.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:561.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:561.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:561.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:561.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91.1,453.2,1,1,30,0,0,89.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:28.6,x:-82.8,y:447.4},0).wait(1).to({rotation:26.8,x:-72.5,y:440.2},0).wait(1).to({rotation:24.6,x:-59.1,y:430.8},0).wait(1).to({rotation:21.6,x:-42.1,y:418.7},0).wait(1).to({rotation:18.1,x:-21.7,y:404.3},0).wait(1).to({rotation:14.6,x:-0.8,y:389.7},0).wait(1).to({rotation:11.5,x:17,y:377.1},0).wait(1).to({rotation:9.1,x:31,y:367.2},0).wait(1).to({rotation:7.3,x:41.9,y:359.5},0).wait(1).to({rotation:5.8,x:50.5,y:353.4},0).wait(1).to({rotation:4.6,x:57.3,y:348.6},0).wait(1).to({rotation:3.7,x:62.9,y:344.7},0).wait(1).to({rotation:2.9,x:67.5,y:341.5},0).wait(1).to({rotation:2.3,x:71.2,y:338.9},0).wait(1).to({rotation:1.7,x:74.3,y:336.7},0).wait(1).to({rotation:1.3,x:76.9,y:334.9},0).wait(1).to({rotation:1,x:78.9,y:333.5},0).wait(1).to({rotation:0.7,x:80.6,y:332.3},0).wait(1).to({rotation:0.4,x:81.9,y:331.4},0).wait(1).to({rotation:0.3,x:82.9,y:330.7},0).wait(1).to({rotation:0.1,x:83.6,y:330.1},0).wait(1).to({x:84.1,y:329.8},0).wait(1).to({rotation:0,x:84.4,y:329.5},0).wait(1).to({x:84.5},0).wait(278));

	// Layer 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.2,507.5,1,1,-45,0,0,67.5,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-42.9,x:460.2,y:500.5},0).wait(1).to({rotation:-40.2,x:446.4,y:491.7},0).wait(1).to({rotation:-36.8,x:428.7,y:480.4},0).wait(1).to({rotation:-32.5,x:406,y:465.9},0).wait(1).to({rotation:-27.2,x:378.8,y:448.6},0).wait(1).to({rotation:-21.9,x:351,y:430.9},0).wait(1).to({rotation:-17.3,x:327.3,y:415.8},0).wait(1).to({rotation:-13.7,x:308.7,y:403.9},0).wait(1).to({rotation:-10.9,x:294.2,y:394.7},0).wait(1).to({rotation:-8.7,x:282.7,y:387.4},0).wait(1).to({rotation:-7,x:273.6,y:381.5},0).wait(1).to({rotation:-5.5,x:266.2,y:376.8},0).wait(1).to({rotation:-4.4,x:260.1,y:372.9},0).wait(1).to({rotation:-3.4,x:255.1,y:369.8},0).wait(1).to({rotation:-2.6,x:251,y:367.1},0).wait(1).to({rotation:-2,x:247.7,y:365},0).wait(1).to({rotation:-1.4,x:244.9,y:363.3},0).wait(1).to({rotation:-1,x:242.7,y:361.8},0).wait(1).to({rotation:-0.7,x:241,y:360.7},0).wait(1).to({rotation:-0.4,x:239.6,y:359.9},0).wait(1).to({rotation:-0.2,x:238.6,y:359.3},0).wait(1).to({rotation:-0.1,x:238,y:358.8},0).wait(1).to({rotation:0,x:237.6,y:358.6},0).wait(1).to({x:237.5,y:358.5},0).wait(278));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(73).to({regX:575,regY:80.6,x:592.8,y:100.3},0).wait(1).to({x:591.1},0).wait(1).to({x:587.9},0).wait(1).to({x:582.8},0).wait(1).to({x:575.2},0).wait(1).to({x:564.4},0).wait(1).to({x:548.8},0).wait(1).to({x:526,y:100.2},0).wait(1).to({x:491.4},0).wait(1).to({x:441.6},0).wait(1).to({x:389.2,y:100.1},0).wait(1).to({x:351.5},0).wait(1).to({x:326.7,y:100},0).wait(1).to({x:309.9},0).wait(1).to({x:298.4},0).wait(1).to({x:290.5},0).wait(1).to({x:285.2},0).wait(1).to({x:281.8},0).wait(1).to({x:280},0).wait(1).to({regX:131.7,regY:89,x:-163.9,y:108.4},0).wait(47).to({regX:575,regY:80.6,x:278.9,y:100},0).wait(1).to({x:277.2},0).wait(1).to({x:274.1},0).wait(1).to({x:269.1},0).wait(1).to({x:261.8},0).wait(1).to({x:251.2},0).wait(1).to({x:236},0).wait(1).to({x:213.7},0).wait(1).to({x:180.1},0).wait(1).to({x:131.5},0).wait(1).to({x:80.5},0).wait(1).to({x:43.7},0).wait(1).to({x:19.5},0).wait(1).to({x:3.3},0).wait(1).to({x:-7.9},0).wait(1).to({x:-15.7},0).wait(1).to({x:-20.9},0).wait(1).to({x:-24.2},0).wait(1).to({x:-25.9},0).wait(1).to({regX:131.7,regY:89,x:-469.8,y:108.4},0).wait(50).to({regX:575,regY:80.6,x:-26.9,y:100},0).wait(1).to({x:-28.6},0).wait(1).to({x:-31.6},0).wait(1).to({x:-36.3},0).wait(1).to({x:-43.4},0).wait(1).to({x:-53.5},0).wait(1).to({x:-68.1},0).wait(1).to({x:-89.4},0).wait(1).to({x:-121.7},0).wait(1).to({x:-168.3},0).wait(1).to({x:-217.2},0).wait(1).to({x:-252.4},0).wait(1).to({x:-275.6},0).wait(1).to({x:-291.2},0).wait(1).to({x:-302},0).wait(1).to({x:-309.4},0).wait(1).to({x:-314.4},0).wait(1).to({x:-317.5},0).wait(1).to({x:-319.2},0).wait(1).to({regX:131.7,regY:89,x:-763,y:108.4},0).wait(53));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,466.4,1,1,0,0,0,110.5,61.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},10).wait(289));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.3,300,877.6,678.6);
// library properties:
lib.properties = {
	id: 'EE864E8176924602B95E85E4297E8BB2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_re_condo_atlas_.png", id:"300x600_re_condo_atlas_"}
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