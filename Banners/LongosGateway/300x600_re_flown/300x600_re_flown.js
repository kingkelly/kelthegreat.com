(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_re_flown_atlas_", frames: [[0,0,286,175],[0,177,271,118]]}
];


// symbols:



(lib.FISH_DB = function() {
	this.spriteSheet = ss["300x600_re_flown_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.thyme_db = function() {
	this.spriteSheet = ss["300x600_re_flown_atlas_"];
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
	this.instance = new lib.thyme_db();
	this.instance.parent = this;
	this.instance.setTransform(-155,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-155,125,271,118), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FISH_DB();
	this.instance.parent = this;
	this.instance.setTransform(20,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(20,-25,286,175), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape.setTransform(794.2,133.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAdCTIguh1IgLAAIAAB1Ig7AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgNAVgYAJIAzB+gAgcgdIAcAAQAMABAJgJQAIgJAAgMQAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_1.setTransform(779.4,121.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBYAAIAAA7IhYAAIAAA6IB1AAIAAA7g");
	this.shape_2.setTransform(757.6,121.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBgAgdBYIAdAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgHQgIgJgNAAIgdAAg");
	this.shape_3.setTransform(735.9,121.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAdCTIguh1IgLAAIAAB1Ig7AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgNAVgYAJIAzB+gAgcgdIAcAAQAMABAJgJQAIgJAAgMQAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_4.setTransform(714.1,121.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgHASAAQATAAAQAHQAQAHALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgIAHgBANIAAB1QABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMIAAh1QAAgNgJgHQgJgJgMAAQgMAAgIAJg");
	this.shape_5.setTransform(692.4,121.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgcCTIAAjqIg7AAIAAg7ICvAAIAAA7Ig7AAIAADqg");
	this.shape_6.setTransform(822.1,79.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIA6AAQAAANAJAIQAIAIAMAAQAMAAAJgIQAIgIABgNQgBgNgIgIQgJgJgMAAQgSAAgQgGQgRgHgLgMQgMgLgGgQQgHgQAAgTQAAgSAHgRQAGgQAMgMQALgMARgHQAQgGASAAQATAAAQAGQAQAHAMAMQAMAMAHAQQAGARAAASIg6AAQgBgMgIgJQgJgIgMAAQgMAAgIAIQgJAJAAAMQAAANAJAIQAIAJAMAAQATgBAQAHQAQAHAMALQALALAIARQAGAQAAASQAAAUgGAQQgIAQgLAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_7.setTransform(802.6,79.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAeCTIgvh2IgMAAIAAB2Ig6AAIAAklIBXAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgOAVgWAJIAyB+gAgdgcIAdAAQANAAAIgJQAJgIAAgNQAAgMgJgJQgIgIgNAAIgdAAg");
	this.shape_8.setTransform(782,79.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgcCTIAAklIA5AAIAAElg");
	this.shape_9.setTransform(766.1,79.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AhXCTIAAklICvAAIAAA7Ih0AAIAAA7IBWAAIAAA5IhWAAIAAB2g");
	this.shape_10.setTransform(751.5,79.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AAeCTIgvh2IgMAAIAAB2Ig6AAIAAklIBXAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgOAVgWAJIAyB+gAgdgcIAdAAQANAAAIgJQAJgIAAgNQAAgMgJgJQgIgIgNAAIgdAAg");
	this.shape_11.setTransform(721.7,79.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIAAjNIA6AAIAADNQAAANAJAIQAIAIAMAAQAMAAAJgIQAIgIAAgNIAAjNIA7AAIAADNQAAATgGAQQgIAQgLAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_12.setTransform(700,79.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHAMAMQAMAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAHQgQAGgTAAQgSAAgQgGgAgUhPQgIAJAAAMIAAB1QAAANAIAIQAIAIAMAAQAMAAAJgIQAIgIAAgNIAAh1QAAgMgIgJQgJgIgMAAQgMAAgIAIg");
	this.shape_13.setTransform(678.2,79.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AgdCTIAAiTIg6iSIA6AAIAdBKIAdhKIA7AAIg7CSIAACTg");
	this.shape_14.setTransform(657.7,79.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA6IhXAAIAAB2g");
	this.shape_15.setTransform(830.5,37.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBXAAIAAA6IhXAAIAAB2g");
	this.shape_16.setTransform(808.7,37.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTABQgSgBgQgGgAgUhPQgJAIAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgIQgIgIgNAAQgMAAgIAIg");
	this.shape_17.setTransform(787,37.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIA7AAQgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMQAAgNgIgIQgJgJgMABIhXAAIAAiwICvAAIAAA7Ih0AAIAAA7IAcAAQATAAAQAGQAQAHAMAMQALALAIAQQAGAQAAATQAAASgGARQgIAQgLAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_18.setTransform(757.2,37.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgOCUIAAjrIgdAAIAAg7IBXAAIAAEmg");
	this.shape_19.setTransform(739.9,37.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AgdDPIAAhAQgagJgQgXQgQgWAAgeIA6AAQABAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgNgJgIQgJgJgMAAQgSAAgQgGQgQgHgMgMQgMgLgHgQQgGgQAAgTQAAgPAEgNQAEgNAIgMQAIgKAKgIQALgIANgFIAAhAIA7AAIAABAQAZAJARAWQAQAXAAAeIg6AAQAAgNgJgIQgJgIgMAAQgMAAgIAIQgIAIgBANQABAMAIAJQAIAIAMAAQATAAAQAHQAQAGAMAMQAMALAGAQQAHAQAAATQAAAfgQAWQgRAXgZAJIAABAg");
	this.shape_20.setTransform(722.5,37.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_21.setTransform(692.8,37.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBXAAIAAA6IhXAAIAAA6IB0AAIAAA8g");
	this.shape_22.setTransform(671,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIg6AAQAAgNgJgIQgIgIgNAAQgMAAgIAIQgJAIAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAgdIgeAAIAAg6IBYAAIAABXQAAASgHARQgGAQgNAMQgLAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_23.setTransform(649.3,37.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape_24.setTransform(562.8,133.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih0AAIAAA6IBWAAIAAA7IhWAAIAAA6IB0AAIAAA7g");
	this.shape_25.setTransform(548,121.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAdCTIg5iTIAACTIg7AAIAAkmIA7AAIA5CTIAAiTIA7AAIAAEmg");
	this.shape_26.setTransform(526.2,121.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_27.setTransform(510.3,121.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AhICTIAAkmIA6AAIAADrIBXAAIAAA7g");
	this.shape_28.setTransform(495.9,121.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AAeCTIg7iTIAACTIg6AAIAAkmIA6AAIA7CTIAAiTIA6AAIAAEmg");
	this.shape_29.setTransform(475.7,121.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgTAHgQQAGgQAMgMQAMgMAQgHQAQgHASAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAHABANIAAB1QgBAMAJAJQAIAIAMAAQAMAAAJgIQAIgJAAgMIAAh1QAAgNgIgHQgJgJgMAAQgMAAgIAJg");
	this.shape_30.setTransform(453.9,121.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AAeCTIgvh1IgMAAIAAB1Ig6AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQAMAMAGAQQAHAQAAATQAAAcgOAVQgOAVgXAJIAzB+gAgdgdIAdAAQAMABAJgJQAJgJAAgMQAAgNgJgHQgJgJgMAAIgdAAg");
	this.shape_31.setTransform(424.2,121.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih1AAIAAA6IBXAAIAAA7IhXAAIAAA6IB1AAIAAA7g");
	this.shape_32.setTransform(402.4,121.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATAAAQAHQAQAHAMAMQALAMAHAQQAHAQAAATIAAB1QAAATgHAQQgHAQgLAMQgMAMgQAGQgQAIgTgBgAgcBYIAcAAQAMAAAJgIQAIgJAAgMIAAh1QAAgNgIgHQgJgJgMAAIgcAAg");
	this.shape_33.setTransform(380.7,121.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AAeCTIgvh1IgMAAIAAB1Ig6AAIAAkmIBXAAQATAAAQAHQAQAHAMAMQAMAMAGAQQAHAQAAATQAAAcgOAVQgOAVgXAJIAzB+gAgdgdIAdAAQAMABAJgJQAJgJAAgMQAAgNgJgHQgJgJgMAAIgdAAg");
	this.shape_34.setTransform(358.9,121.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgTAHgQQAGgQAMgMQAMgMAQgHQAQgHASAAQATAAAQAHQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAHAAANIAAB1QAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMIAAh1QAAgNgJgHQgIgJgNAAQgMAAgIAJg");
	this.shape_35.setTransform(337.2,121.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgVAXIAAgtIAsAAIAAAtg");
	this.shape_36.setTransform(500.3,91.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AhXCTIAAklICvAAIAAA7Ih1AAIAAA7IBYAAIAAA5IhYAAIAAA7IB1AAIAAA7g");
	this.shape_37.setTransform(485.5,79.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AAdCTIgth2IgNAAIAAB2Ig6AAIAAklIBXAAQATAAAQAGQAQAHAMAMQALAMAIAQQAGARAAASQAAAcgOAVQgNAVgXAJIAyB+gAgdgcIAdAAQAMAAAJgJQAIgIAAgNQAAgMgIgJQgJgIgMAAIgdAAg");
	this.shape_38.setTransform(463.7,79.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgSAGgRQAHgQAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHALAMQANAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTAAQgSAAgQgGgAgUhPQgIAJAAAMIAAB1QAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIgBgNIAAh1QABgMgJgJQgJgIgMAAQgMAAgIAIg");
	this.shape_39.setTransform(442,79.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AgdCTIAAjqIg6AAIAAg7ICvAAIAAA7Ig6AAIAADqg");
	this.shape_40.setTransform(421.4,79.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgGgQQgHgQAAgTIA7AAQAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIgBgNQABgNgJgIQgJgJgMAAQgSAAgQgGQgRgHgLgMQgMgLgGgQQgHgQAAgTQAAgSAHgRQAGgQAMgMQALgMARgHQAQgGASAAQATAAAQAGQAQAHALAMQANAMAGAQQAHARAAASIg7AAQABgMgJgJQgJgIgMAAQgMAAgIAIQgIAJAAAMQAAANAIAIQAIAJAMAAQATgBAQAHQAQAHAMALQALALAHARQAHAQAAASQAAAUgHAQQgHAQgLAMQgMAMgQAHQgQAGgTAAQgSAAgQgGg");
	this.shape_41.setTransform(399.7,79.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA6IhXAAIAAA6IB1AAIAAA8g");
	this.shape_42.setTransform(510,37.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AAdCUIAAh2Ig5AAIAAB2Ig7AAIAAkmIA7AAIAAB2IA5AAIAAh2IA7AAIAAEmg");
	this.shape_43.setTransform(488.2,37.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AgcCUIAAjrIg7AAIAAg7ICvAAIAAA7Ig6AAIAADrg");
	this.shape_44.setTransform(466.5,37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGARAAASQAAAUgGAPQgIAQgLALQgMAMgQAHQgQAHgTAAIgdAAIAAB2gAgdgcIAdAAQAMgBAJgIQAIgJAAgMQAAgNgIgIQgJgIgMAAIgdAAg");
	this.shape_45.setTransform(436.7,37.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_46.setTransform(420.8,37.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("AAdCUIg5iUIA5iSIA7AAIg7CSIA7CUgAhXCUIAAkmIA7AAIAACSIAACUg");
	this.shape_47.setTransform(405,37.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIA7AAQAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJAAgMQAAgNgJgIQgJgJgMABQgSAAgQgHQgQgHgMgMQgMgLgHgQQgGgPAAgUQAAgSAGgRQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHARAAASIg6AAQAAgNgJgIQgJgIgMAAQgMAAgIAIQgIAIAAANQAAAMAIAJQAIAIAMABQATAAAQAGQAQAHAMAMQAMALAGAQQAHAQAAATQAAASgHARQgGAQgMAMQgMAMgQAHQgQAGgTABQgSgBgQgGg");
	this.shape_48.setTransform(383.2,37.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AgWAXIAAgtIAsAAIAAAtg");
	this.shape_49.setTransform(221,157.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("AAeCTIguh2IgNAAIAAB2Ig6AAIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgOAUgWAKIAyB+gAgdgcIAdAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAIgdAAg");
	this.shape_50.setTransform(206.1,144.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgTAHgQQAGgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAIABAMIAAB1QgBANAJAIQAIAIAMAAQAMAAAJgIQAIgIAAgNIAAh1QAAgMgIgIQgJgJgMAAQgMAAgIAJg");
	this.shape_51.setTransform(184.4,144.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgIAIAAAMIAAB1QAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIgBgNIAAh1QABgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_52.setTransform(162.6,144.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AhXCTIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBgAgdBYIAdAAQANAAAIgIQAJgIAAgNIAAh1QAAgMgJgIQgIgJgNAAIgdAAg");
	this.shape_53.setTransform(140.9,144.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AAdCTIguh2IgLAAIAAB2Ig7AAIAAkmIBXAAQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgNAUgYAKIAzB+gAgcgcIAcAAQAMAAAJgJQAIgJAAgMQAAgMgIgIQgJgJgMAAIgcAAg");
	this.shape_54.setTransform(111.1,144.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAjOIA7AAIAADOQAAANAIAIQAIAIAMAAQAMAAAJgIQAJgIAAgNIAAjOIA6AAIAADOQAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIg");
	this.shape_55.setTransform(89.4,144.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIAAh1QAAgTAHgQQAGgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHAMAMQALAMAIAQQAGAQAAATIAAB1QAAATgGAQQgIAQgLAMQgMAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAIAAAMIAAB1QAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNIAAh1QAAgMgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_56.setTransform(67.6,144.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AgdCTIAAiTIg6iTIA6AAIAdBLIAehLIA6AAIg6CTIAACTg");
	this.shape_57.setTransform(48.1,144.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AgiCNQgQgHgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgGQAQgIASABQATgBAQAIQAQAGALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAHQgQAGgTABQgSgBgQgGgAgUhPQgIAJAAAMIAAB1QAAAMAIAJQAIAIAMAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgJQgJgIgMAAQgMAAgIAIg");
	this.shape_58.setTransform(235.9,102.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AgdCUIAAjrIg6AAIAAg7ICvAAIAAA7Ig7AAIAADrg");
	this.shape_59.setTransform(215.3,102.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQAMAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAHQgQAGgTABgAgcBYIAcAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgJQgJgIgMAAIgcAAg");
	this.shape_60.setTransform(185.6,102.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih1AAIAAA7IBXAAIAAA5IhXAAIAAA7IB1AAIAAA8g");
	this.shape_61.setTransform(163.8,102.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AAdCUIgth3IgMAAIAAB3Ig7AAIAAkmIBXAAQATgBAQAIQAQAGAMAMQALAMAIAQQAGAQAAATQAAAcgOAVQgNAUgXALIAyB+gAgcgcIAcAAQAMAAAJgJQAIgIAAgNQAAgMgIgJQgJgIgMAAIgcAAg");
	this.shape_62.setTransform(142.1,102.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBXAAIAAA5IhXAAIAAA7IB0AAIAAA8g");
	this.shape_63.setTransform(120.3,102.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AgdCUIg6kmIA6AAIAdCSIAeiSIA6AAIg6Emg");
	this.shape_64.setTransform(98.6,102.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AgcCUIAAkmIA5AAIAAEmg");
	this.shape_65.setTransform(82.7,102.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("AhICUIAAkmIA6AAIAADqIBXAAIAAA8g");
	this.shape_66.setTransform(68.3,102.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("AhXCUIAAkmICvAAIAAA7Ih0AAIAAA7IBWAAIAAA5IhWAAIAAA7IB0AAIAAA8g");
	this.shape_67.setTransform(48,102.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AhXCUIAAkmIBXAAQATgBAQAIQAQAGAMAMQAMAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAHQgQAGgTABgAgcBYIAcAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgJQgJgIgMAAIgcAAg");
	this.shape_68.setTransform(26.3,102.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("AhXCUIAAknIBXAAQATAAAQAIQAQAGAMAMQAMAMAGAQQAHARAAASIAAB1QAAATgHAQQgGAQgMAMQgMAMgQAGQgQAIgTAAgAgcBYIAcAAQAMAAAJgIQAJgJgBgMIAAh1QABgMgJgIQgJgJgMAAIgcAAg");
	this.shape_69.setTransform(211.2,60.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#063928").s().p("AAeCUIg7iUIAACUIg6AAIAAknIA6AAIA7CTIAAiTIA6AAIAAEng");
	this.shape_70.setTransform(189.5,60.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#063928").s().p("AAdCUIgLg8IgiAAIgMA8Ig7AAIA7knIA5AAIA7EngAAFAdIgFgdIgFAdIAKAAg");
	this.shape_71.setTransform(167.7,60.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#063928").s().p("AAeCUIAAh2Ig6AAIAAB2Ig7AAIAAknIA7AAIAAB2IA6AAIAAh2IA6AAIAAEng");
	this.shape_72.setTransform(138,60.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgGgQQgHgQAAgTIA6AAQAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMQAAgNgJgIQgIgIgNAAQgSgBgQgGQgQgHgMgMQgMgLgGgQQgHgPAAgUQAAgSAHgRQAGgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGAMAMQALAMAIAQQAGARAAASIg6AAQAAgMgJgIQgIgJgNAAQgMAAgIAJQgJAIAAAMQAAAMAJAJQAIAIAMAAQATABAQAGQAQAHAMALQALAMAIAPQAGARAAASQAAATgGARQgIAQgLAMQgMAMgQAGQgQAIgTAAQgSAAgQgIg");
	this.shape_73.setTransform(116.2,60.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih0AAIAAA6IBWAAIAAA7IhWAAIAAA6IB0AAIAAA8g");
	this.shape_74.setTransform(94.5,60.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#063928").s().p("AAeCUIgvh2IgMAAIAAB2Ig6AAIAAknIBXAAQATAAAQAIQAQAGAMAMQAMAMAGAQQAHARAAASQAAAcgOAVQgOAUgXALIAzB+gAgdgdIAdAAQAMAAAJgIQAJgJAAgMQAAgMgJgIQgJgJgMAAIgdAAg");
	this.shape_75.setTransform(72.7,60.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#063928").s().p("AhXCUIAAknICvAAIAAA8Ih1AAIAAA6IBXAAIAAA7IhXAAIAAB2g");
	this.shape_76.setTransform(51,60.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#063928").s().p("AAeCTIg7iTIAACTIg6AAIAAkmIA6AAIA7CTIAAiTIA6AAIAAEmg");
	this.shape_77.setTransform(197.7,18.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#063928").s().p("AgcCTIAAkmIA5AAIAAEmg");
	this.shape_78.setTransform(181.8,18.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#063928").s().p("AAdCTIg5iTIAACTIg7AAIAAkmIA7AAIA5CTIAAiTIA7AAIAAEmg");
	this.shape_79.setTransform(157.9,18.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#063928").s().p("AAdCTIgdiTIgcCTIg7AAIg7kmIA7AAIAdCTIAeiTIA5AAIAeCTIAdiTIA7AAIg7Emg");
	this.shape_80.setTransform(130.3,18.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#063928").s().p("AgiCMQgQgGgMgMQgMgMgHgQQgGgQAAgTIAAh1QAAgTAGgQQAHgQAMgMQAMgMAQgHQAQgGASgBQATABAQAGQAQAHALAMQANAMAGAQQAHAQAAATIAAB1QAAATgHAQQgGAQgNAMQgLAMgQAGQgQAIgTgBQgSABgQgIgAgUhOQgJAIAAAMIAAB1QAAANAJAIQAIAIAMAAQANAAAIgIQAJgIAAgNIAAh1QAAgMgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_81.setTransform(103.9,18.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#063928").s().p("AhICTIAAkmIA6AAIAADrIBXAAIAAA7g");
	this.shape_82.setTransform(84.8,18.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#063928").s().p("AhXCTIAAkmICvAAIAAA8Ih0AAIAAA7IBXAAIAAA5IhXAAIAAB2g");
	this.shape_83.setTransform(64.5,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(13.9,0,830.1,172), null);


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
(lib._300x600_re_flown = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},10).wait(223).to({regX:41.5,regY:10.4,scaleX:1,scaleY:1,x:149.9,y:562.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:562.1},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:562},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:561.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:149.8,y:561.8},0).wait(1).to({scaleX:1.18,scaleY:1.18},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:561.7},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:561.3},0).wait(1).to({regX:41.5,regY:10.4,scaleX:1.19,scaleY:1.19,x:149.8,y:561.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:561.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:562},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:562.1},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(226).to({regY:14.3,scaleX:1,scaleY:1,y:561.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:561.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:561.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:561.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:561.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:561.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:561.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:561.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:561.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:561.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(378.5,329.5,1,1,0,0,0,89.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:163,regY:62.5,x:438.3,y:258.5},0).wait(1).to({x:420.9},0).wait(1).to({x:398.6},0).wait(1).to({x:370.1},0).wait(1).to({x:335.8},0).wait(1).to({x:300.9},0).wait(1).to({x:271.1},0).wait(1).to({x:247.6},0).wait(1).to({x:229.4},0).wait(1).to({x:215},0).wait(1).to({x:203.5},0).wait(1).to({x:194.1},0).wait(1).to({x:186.5},0).wait(1).to({x:180.2},0).wait(1).to({x:175.1},0).wait(1).to({x:170.8},0).wait(1).to({x:167.4},0).wait(1).to({x:164.6},0).wait(1).to({x:162.4},0).wait(1).to({x:160.8},0).wait(1).to({x:159.5},0).wait(1).to({x:158.7},0).wait(1).to({x:158.2},0).wait(1).to({regX:89.5,regY:133.5,x:84.5,y:329.5},0).wait(229));

	// Layer 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-67,358.5,1,1,0,0,0,67.5,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-19.5,regY:184,x:-139.7,y:368},0).wait(1).to({x:-121.7},0).wait(1).to({x:-98.6},0).wait(1).to({x:-69.1},0).wait(1).to({x:-33.6},0).wait(1).to({x:2.5},0).wait(1).to({x:33.4},0).wait(1).to({x:57.7},0).wait(1).to({x:76.6},0).wait(1).to({x:91.5},0).wait(1).to({x:103.4},0).wait(1).to({x:113.1},0).wait(1).to({x:121},0).wait(1).to({x:127.5},0).wait(1).to({x:132.8},0).wait(1).to({x:137.2},0).wait(1).to({x:140.8},0).wait(1).to({x:143.7},0).wait(1).to({x:145.9},0).wait(1).to({x:147.7},0).wait(1).to({x:149},0).wait(1).to({x:149.8},0).wait(1).to({x:150.3},0).wait(1).to({regX:67.5,regY:174.5,x:237.5,y:358.5},0).wait(229));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(72).to({regX:428.4,regY:81.8,x:446.2,y:101.5},0).wait(1).to({x:444.5},0).wait(1).to({x:441.3},0).wait(1).to({x:436.2},0).wait(1).to({x:428.6},0).wait(1).to({x:417.8},0).wait(1).to({x:402.2},0).wait(1).to({x:379.4,y:101.4},0).wait(1).to({x:344.8},0).wait(1).to({x:295},0).wait(1).to({x:242.6,y:101.3},0).wait(1).to({x:204.9},0).wait(1).to({x:180.1,y:101.2},0).wait(1).to({x:163.3},0).wait(1).to({x:151.8},0).wait(1).to({x:143.9},0).wait(1).to({x:138.6},0).wait(1).to({x:135.2},0).wait(1).to({x:133.4},0).wait(1).to({regX:131.7,regY:89,x:-163.9,y:108.4},0).wait(47).to({regX:428.4,regY:81.8,x:132.4,y:101.2},0).wait(1).to({x:130.7},0).wait(1).to({x:127.7},0).wait(1).to({x:122.9},0).wait(1).to({x:115.9},0).wait(1).to({x:105.7},0).wait(1).to({x:91.1},0).wait(1).to({x:69.6},0).wait(1).to({x:37.3},0).wait(1).to({x:-9.5},0).wait(1).to({x:-58.6},0).wait(1).to({x:-94},0).wait(1).to({x:-117.2},0).wait(1).to({x:-132.9},0).wait(1).to({x:-143.7},0).wait(1).to({x:-151.1},0).wait(1).to({x:-156.1},0).wait(1).to({x:-159.3},0).wait(1).to({x:-161},0).wait(1).to({regX:131.7,regY:89,x:-458.2,y:108.4},0).wait(74));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,466.4,1,1,0,0,0,110.5,61.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({alpha:1},10).wait(240));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(253));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,300,884.5,600);
// library properties:
lib.properties = {
	id: 'EE864E8176924602B95E85E4297E8BB2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_re_flown_atlas_.png", id:"300x600_re_flown_atlas_"}
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