(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_re_under_atlas_", frames: [[118,0,111,132],[0,0,116,136]]}
];


// symbols:



(lib.aspar_bb = function() {
	this.spriteSheet = ss["300x250_re_under_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.meat_bb = function() {
	this.spriteSheet = ss["300x250_re_under_atlas_"];
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
	this.shape.setTransform(50.4,-326.8,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(15.1,-336.7,70.6,20), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meat_bb();
	this.instance.parent = this;
	this.instance.setTransform(-16.7,60.2,1,1,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-16.7,46.6,131.2,148.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aspar_bb();
	this.instance.parent = this;
	this.instance.setTransform(95.4,30.2,0.999,0.999,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(46.3,30.2,152,163.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(1173.5,65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAGAOQAFANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_1.setTransform(1160.9,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_2.setTransform(1142.6,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAFAOQAGANABAQIAABhQgBAQgGANQgFAOgKAKQgJAKgOAGQgOAFgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_3.setTransform(1124.2,55.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgwAAIAAj1IBIAAQAPAAAOAGQAOAFAJAKQAKAKAFAOQAHANAAAQQgBAXgLASQgMAQgTAJIArBpgAgYgXIAYAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_4.setTransform(1105.9,55.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOAKgKQALgKANgFQANgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANgBAQIAABhQABAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgNgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_5.setTransform(1087.5,55.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICSAAIAAAxIgyAAIAADEg");
	this.shape_6.setTransform(1062.3,55.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAxAAQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKQAAgKgHgIQgHgHgKAAQgPABgOgGQgNgFgJgKQgKgKgGgNQgFgNgBgQQABgQAFgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAIQAHAHAKAAQAPgBAOAGQAOAFAJAKQAKAKAGANQAFANABAQQgBAQgFANQgGAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_7.setTransform(1046.2,55.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgwAAIAAj1IBIAAQAPAAAOAGQAOAFAKAKQAJAKAFAOQAHANgBAQQAAAXgLASQgMAQgTAJIAqBpgAgYgXIAYAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_8.setTransform(1029,55.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_9.setTransform(1015.5,55.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAABjg");
	this.shape_10.setTransform(1003.3,55.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANAAAQQAAAXgMASQgLAQgTAJIAqBpgAgYgXIAYAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_11.setTransform(978.1,55.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAirIAyAAIAACrQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_12.setTransform(959.8,55.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgQAGgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAGANABAQIAABhQgBAQgGANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_13.setTransform(941.4,55.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AgYB7IAAh7Igxh6IAxAAIAYA+IAYg+IAyAAIgyB6IAAB7g");
	this.shape_14.setTransform(923.1,55.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAABjg");
	this.shape_15.setTransform(1122,20.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAABjg");
	this.shape_16.setTransform(1103.7,20.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgPAFgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOABAPIAABhQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_17.setTransform(1085.3,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgdB2QgNgGgKgKQgJgKgGgOQgGgNAAgQIAxAAQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIhJAAIAAiSICSAAIAAAxIhhAAIAAAyIAYAAQAPAAAOAFQANAFAKAKQAKAJAGAOQAFANAAAQQAAAQgFANQgGAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_18.setTransform(1060.1,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgMB7IAAjEIgYAAIAAgxIBJAAIAAD1g");
	this.shape_19.setTransform(1045.4,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AgYCsIAAg1QgWgIgNgSQgOgTAAgZIAxAAQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgLgHgHQgHgHgKAAQgPAAgOgFQgNgGgKgKQgJgJgGgNQgFgNgBgQQAAgMADgMQAFgLAGgJQAGgJAJgHQAJgGALgEIAAg1IAwAAIAAA1QAWAHAOATQANATAAAZIgxAAQAAgLgHgHQgHgHgKAAQgKAAgHAHQgHAHAAALQAAAKAHAHQAHAHAKAAQAPAAAOAGQANAFAKAKQAKAJAGAOQAFANAAAQQAAAZgNATQgOASgWAIIAAA1g");
	this.shape_20.setTransform(1030.8,20.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_21.setTransform(1005.6,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_22.setTransform(987.2,20.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgPAGgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAGAOABAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAgZIgYAAIAAgvIBKAAIAABIQgBAQgGANQgFAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_23.setTransform(968.9,20.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_24.setTransform(850.3,65.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAAAyIBhAAIAAAxg");
	this.shape_25.setTransform(837.8,55.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_26.setTransform(819.4,55.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_27.setTransform(805.9,55.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_28.setTransform(793.7,55.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_29.setTransform(776.6,55.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgQAGgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQIAABhQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_30.setTransform(758.3,55.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAFAOQAGANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_31.setTransform(733.1,55.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAyIBiAAIAAAxg");
	this.shape_32.setTransform(714.7,55.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQANAFALAKQAJAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgJAKQgLAKgNAGQgOAFgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_33.setTransform(696.4,55.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgwAAIAAj1IBIAAQAPAAAOAGQAOAFAKAKQAJAKAFAOQAHANgBAQQABAXgMASQgMAQgTAJIAqBpgAgYgXIAYAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_34.setTransform(678,55.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOAKgKQALgKANgFQANgGAPAAQAQAAANAGQANAFAKAKQAKAKAFAOQAHANgBAQIAABhQABAQgHANQgFAOgKAKQgKAKgNAGQgNAFgQAAQgPAAgNgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_35.setTransform(659.7,55.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_36.setTransform(863.5,30.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_37.setTransform(851,20.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAGAJAJQAKAKAFAOQAHAOAAAPQgBAXgMASQgLARgTAIIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_38.setTransform(832.6,20.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNABgQIAAhhQgBgPAGgOQAFgOALgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_39.setTransform(814.3,20.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_40.setTransform(797.1,20.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgdB2QgNgGgKgKQgJgKgGgOQgFgNgBgQIAxAAQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBQgPABgOgGQgNgFgKgLQgJgJgGgNQgFgNgBgQQABgPAFgOQAGgOAJgKQAKgJANgGQAOgGAPAAQAQAAANAGQANAGAKAJQAKAKAGAOQAFAOAAAPIgxAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAQAAANAFQANAFAKAKQAKAJAGAOQAFANAAAQQAAAQgFANQgGAOgKAKQgKAJgNAHQgNAFgQAAQgPAAgOgFg");
	this.shape_41.setTransform(778.8,20.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_42.setTransform(753.6,20.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgxAAIAAj1IAxAAIAABjIAwAAIAAhjIAyAAIAAD1g");
	this.shape_43.setTransform(735.2,20.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_44.setTransform(716.9,20.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQAOAGAJAJQAKAKAFAOQAGAOABAPQgBAQgGANQgFANgKAJQgJALgOAFQgOAGgPgBIgYAAIAABjgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_45.setTransform(691.7,20.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_46.setTransform(678.2,20.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAyAAIgyB6IAyB7gAhJB7IAAj1IAxAAIAAB6IAAB7gAgYAAg");
	this.shape_47.setTransform(664.8,20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNABgQIAwAAQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBQgPABgOgGQgNgFgJgLQgLgJgFgNQgGgNABgQQgBgPAGgOQAFgOALgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAPAAAOAFQANAFALAKQAJAJAFAOQAHANAAAQQAAAQgHANQgFAOgJAKQgLAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_48.setTransform(646.4,20.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_49.setTransform(569.7,68.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAFAOQAGANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_50.setTransform(557.1,58.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AAYB7IgKgxIgcAAIgKAxIgxAAIAxj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_51.setTransform(538.8,58.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAAAyIBhAAIAAAxg");
	this.shape_52.setTransform(521.6,58.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AAZB7IgZh7IgYB7IgxAAIgwj1IAwAAIAZB6IAYh6IAxAAIAYB6IAZh6IAwAAIgwD1g");
	this.shape_53.setTransform(499.5,58.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgwAAIAAj1IBIAAQAQAAANAGQANAFALAKQAJAKAGAOQAFANAAAQQABAXgMASQgMAQgTAJIAqBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_54.setTransform(477.5,58.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_55.setTransform(459.2,58.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANAAAQIAABhQAAAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_56.setTransform(440.8,58.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_57.setTransform(422.5,58.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAirIAyAAIAACrQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_58.setTransform(404.1,58.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAFAOQAGANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_59.setTransform(378.9,58.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAirIAyAAIAACrQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_60.setTransform(360.6,58.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOALgKQAKgKAMgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_61.setTransform(342.2,58.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AgYB7IAAh7Igxh6IAxAAIAYA+IAYg+IAxAAIgxB6IAAB7g");
	this.shape_62.setTransform(326.1,58.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_63.setTransform(544.6,23.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_64.setTransform(531.1,23.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_65.setTransform(510.9,23.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("AAxB7IAAh7IgZB7IgvAAIgZh7IAAB7IgxAAIAAj1IBKAAIAXB6IAYh6IBKAAIAAD1g");
	this.shape_66.setTransform(490.1,23.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgPAFgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOABAPIAABhQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_67.setTransform(469.3,23.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgxAAIAAj1IAxAAIAABjIAwAAIAAhjIAyAAIAAD1g");
	this.shape_68.setTransform(450.9,23.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_69.setTransform(425.7,23.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#063928").s().p("AAYB7IgKgxIgcAAIgKAxIgxAAIAxj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_70.setTransform(407.4,23.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_71.setTransform(382.2,23.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNABgQIAAirIAwAAIAACrQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAirIAyAAIAACrQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_72.setTransform(363.8,23.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQAOAGAKAJQAJAKAFAOQAHAOgBAPQABAPgGAMQgEAMgJAJQAJAKAEAMQAGANgBAOQABAQgHANQgFAOgJAKQgKAKgOAGQgOAFgPAAgAgYBKIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_73.setTransform(345.5,23.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgFgNAAgQIAwAAQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKQAAgKgHgIQgHgHgKAAQgPABgNgGQgOgFgKgKQgKgKgFgNQgFgNAAgQQAAgQAFgNQAFgOAKgKQAKgKAOgFQANgGAPAAQAQAAANAGQANAFAKAKQAKAKAGAOQAFANAAAQIgxAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAQgBANAGQANAFALAKQAJAKAGANQAFANAAAQQAAAQgFANQgGAOgJAKQgLAJgNAHQgNAFgQAAQgPAAgNgFg");
	this.shape_74.setTransform(197.6,59);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#063928").s().p("AgKAmIAHgmIgPAAIAAglIAlAAIAAATIgWA4g");
	this.shape_75.setTransform(187.2,48.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgQAGgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAGANABAQIAABhQgBAQgGANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_76.setTransform(174.6,59);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAAhhQAAgQAGgNQAFgOALgKQAKgKAMgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAgZIgYAAIAAgvIBKAAIAABIQAAAQgHANQgFAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_77.setTransform(156.3,59);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_78.setTransform(137.9,59);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOAKgKQALgKANgFQANgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgNgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_79.setTransform(119.6,59);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADEIBJAAIAAAxg");
	this.shape_80.setTransform(103.6,59);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_81.setTransform(79.7,59);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#063928").s().p("AAYB7IgJgxIgdAAIgKAxIgxAAIAxj1IAwAAIAxD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_82.setTransform(64.5,59);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgPAGgOQAFgOAKgKQALgJANgGQANgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAgZIgYAAIAAgvIBKAAIAABIQAAAQgHANQgFAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgNgFg");
	this.shape_83.setTransform(252.8,24);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_84.setTransform(234.4,24);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_85.setTransform(220.9,24);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAQAAANAGQANAGALAJQAJAKAGAOQAFAOAAAPQAAAQgFANQgGANgJAJQgLALgNAFQgNAGgQgBIgYAAIAABjgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_86.setTransform(207.5,24);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAQAAANAGQANAGAKAJQAKAKAGAOQAFAOAAAPQAAAQgFANQgGANgKAJQgKALgNAFQgNAGgQgBIgYAAIAABjgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_87.setTransform(189.2,24);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#063928").s().p("AgdB2QgNgGgKgKQgJgKgGgOQgFgNgBgQIAAhhQABgPAFgOQAGgOAJgKQAKgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOAAAPIAABhQAAAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_88.setTransform(170.8,24);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgxAAIAAj1IAxAAIAABjIAwAAIAAhjIAyAAIAAD1g");
	this.shape_89.setTransform(152.5,24);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAxAAQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBQgPABgOgGQgNgFgJgLQgKgJgGgNQgGgNAAgQQAAgPAGgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAGAOABAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAPAAAOAFQAOAFAJAKQAKAJAFAOQAGANABAQQgBAQgGANQgFAOgKAKQgJAJgOAHQgOAFgPAAQgPAAgOgFg");
	this.shape_90.setTransform(134.1,24);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_91.setTransform(108.9,24);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAyAAIgyB6IAyB7gAhJB7IAAj1IAxAAIAAB6IAAB7gAgYAAg");
	this.shape_92.setTransform(90.6,24);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_93.setTransform(77.1,24);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_94.setTransform(64.9,24);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAwAAQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBQgPABgNgGQgOgFgKgLQgKgJgFgNQgGgNABgQQgBgPAGgOQAFgOAKgKQAKgJAOgGQANgGAPAAQAQAAANAGQANAGAKAJQAKAKAFAOQAHAOgBAPIgxAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAQAAANAFQAOAFAKAKQAJAJAFAOQAHANgBAQQABAQgHANQgFAOgJAKQgKAJgOAHQgNAFgQAAQgPAAgNgFg");
	this.shape_95.setTransform(40.9,24);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#063928").s().p("AgKAmIAHgmIgPAAIAAglIAlAAIAAATIgWA4g");
	this.shape_96.setTransform(30.5,13.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_97.setTransform(17.9,24);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_98.setTransform(4.4,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-4.7,4.4,1184.4,77.6), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F4EC").s().p("AAABDQgNgBgJgMQgJgMAAgQIABg0QAAgQAIgMQAKgMANAAQAQAAAIAOQAIANgBAQIgUgFQAAgFgCgFQgDgFgGAAQgLAAAAARIAAA0QAAAGADAFQADAGAFAAQAGAAADgGQACgEAAgGIAAgPIgLgDIAAgWIAfAHIAAAfQAAAQgHAMQgJAOgPAAIgBAAg");
	this.shape.setTransform(127.9,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F4EC").s().p("AhAASQgJgEgCgDIAegDQAqgGASgDQAkgHAagNQAAAOgNAGQgwAThHAEQgCAAgHgEg");
	this.shape_1.setTransform(98.3,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F4EC").s().p("AgDAiQgJgCgFgJQgEgJABgKQACgaAOgJQAJgFAHAHQAHAIACAKQABAHgCAMQgCAMgGAHQgGAHgHAAIgCAAg");
	this.shape_2.setTransform(112.8,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8F4EC").s().p("AAdAtIg3gJQgLgCgCgJIgBgRIAFghQADgVAXACQAXADAKAKQAKAKADAWIAEAgQABAMgKAAIgDAAg");
	this.shape_3.setTransform(112.4,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F4EC").s().p("AgDAiQgIgCgFgJQgFgJABgLQACgZAPgJQAIgFAHAHQAMANgEAYQgCAMgGAHQgFAHgHAAIgDAAg");
	this.shape_4.setTransform(125.6,24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F4EC").s().p("AijDnQgTAAgMgQQgNgQABgUQgPgHgPgRQgRgSACgKQACgMAQAAIgBgSQgCg0AGgdQAShVBDgYQAOgFABgPIAEgsQABgQAQgEIDEg1QALgDAOAHIBxA5QAVAKAAAYIAGD5QABAQgQABIgqAFQgCAagOAWQgSAdgbAAQgcABgPgZQgLgTgCgVIgMABQgBAjgUAXQgUAWgbAAQgVgBgQgVQgPgUABgXIgIAAQgRANgmAJQgBANgLANQgNASgVAAIgBAAgAgTh0QgJAFgGAOQgGAOgCAOQgHA0AFBHQABAUACASQgRANgoAJQg7AMhBAAQgSAAAAAGQAAAIASAQQARAPAJACQgBAWALAOQALAMAPAAQARABAJgRQAIgNAAgMQApgHAVgRIAUAAQAAAaAMASQAMATAVABQAXAAARgXQAPgWAAgbQABgXgDgMQgEgOgLgSQAMAGAIAVQAHASAAAOIAMgBIAAhdQgBg/gFgmQgDgagSgSQgTgRgbgEIgGAAQgLAAgHAEgABjjaQgDACgBAOQgFBtgDDZQgBAZAHAUQAFAOAJAKQALAKALAAQAaABAPgYQAOgWABgfQABgogYgcQAVAOAHAVQACAHADAZIAogEQAHgBABgEIABgLIgHjxQAAgSgQgIIhsg1QgJgEgDAAIgCAAgAjeBUQgBAJAHAHQAGAIAJgBQATAAADgTQABgKgHgHQgGgIgJAAQgUABgCAUgAhjAyQgIAIAAALQABAKAHAIQAIAHAKAAQALAAAHgIQAIgIAAgKQgBgLgHgHQgIgIgKAAQgKABgIAHgAhBhcIhHAOQgfAFgWAZQgXAZgDAeQAAAGADACQADADAJgBICCgWQAMgCAAgQQABgmAFgSQADgKgEgDQgCgBgDAAIgHABg");
	this.shape_5.setTransform(110.7,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8F4EC").s().p("AgCAHQgEgCAAgFQAAgEAFgDIABAAQADAAACADQACACABACQAAADgDADQgCABgDAAg");
	this.shape_6.setTransform(102.5,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8F4EC").s().p("AgFALQgFgEAAgHQABgGAFgFQAEgEAGAAIAFABQgFABgEAEQgCAEAAAFQAAAMAKAEIgEAAQgGAAgFgFg");
	this.shape_7.setTransform(101.9,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F4EC").s().p("AAAAGIgBAAQgFgBABgFQAAgEAEgCIABAAQAHAAAAAGQAAAHgFAAIgCgBg");
	this.shape_8.setTransform(90.5,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8F4EC").s().p("AgEAKQgEgEAAgGQAAgFAEgEQAEgFAGABIADAAQgJADAAAKQAAALAJADIgEABQgFgBgEgEg");
	this.shape_9.setTransform(90.1,20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8F4EC").s().p("Ag0AEIBpgRQgQASgmAHQgMACgJAAQgVAAgJgKg");
	this.shape_10.setTransform(98.8,27.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8F4EC").s().p("Ag6AFQgGAAAAgFQAAgEAGAAIB2AAQAFAAAAAEQAAAFgFAAg");
	this.shape_11.setTransform(150.2,31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8F4EC").s().p("AgOAiIgCgBIAAgBIAAgCQALggANgWIgZAAIgCgBIgCgCIAAgDIACgCIACgBIAkAAIABABIABACIAAABIgBAFQgRAbgJAcIgBACIgDABg");
	this.shape_12.setTransform(159.7,28.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F4EC").s().p("AgMAVIgGgEIgCgDIABgCIADgDIABAAIADABIAFACIAGACQAEAAAFgEQADgCABgGQgGAFgJAAQgFAAgFgCQgEgBgCgEQgDgCAAgEQAAgEADgEQADgEAEgCQAFgCAGAAQAFAAAEACIAIAFQADADACAEIACAIIgCAJQgBAEgEADQgCADgGACQgEACgFAAQgGAAgFgCgAgIgLQgDABgBADQAAABABAAQAAABAAABQAAAAABAAQAAABABAAQADACAEAAIAGgBQAEgBADgCQgCgEgDgCQgEgCgDAAQgFAAgCACg");
	this.shape_13.setTransform(154.8,27.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8F4EC").s().p("AgMAVIgHgEIgBgDIABgCIABgCIABgBIACAAIADABIAFACIAGACQAEAAAEgEQAFgDAAgFQgHAFgIAAQgFAAgFgCQgEgBgCgEQgDgBAAgFQAAgFADgDQACgEAFgCQAEgCAHAAQAEAAAFACIAIAFQADADACAEQACAEAAAEQAAAFgCAEQgBAEgEADQgDADgFACQgEACgFAAQgGAAgFgCgAgJgLQgCABAAADQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAQADACAEAAIAGgBIAHgDQgCgFgDgBQgEgCgDAAQgEAAgEACg");
	this.shape_14.setTransform(149.4,27.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F4EC").s().p("AAFAWIgCgBIAAgCIAAgcIgHAFIgEABIgDgBIgBgEIAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIAGgEIAEgDIAFgCIAEAAIACABIAAACIAAAlIAAACIgCABg");
	this.shape_15.setTransform(144.7,27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F4EC").s().p("AgzAFQgGAAAAgFQAAgEAGAAIBnAAQAGAAAAAEQAAAFgGAAg");
	this.shape_16.setTransform(70.9,31.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F4EC").s().p("AgCAEIgCAAIgBgCIAAgDIABgCIACgBIAFAAIACABIABACIAAADIgBACIgCAAg");
	this.shape_17.setTransform(76,29.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8F4EC").s().p("AgBAWIgCgBIgBgCIAAgfIgRAAIgDgBIAAgCIAAgDIAAgCIADgBIArAAIACABIABACIAAADIgBACIgCABIgRAAIAAAfIgBACIgCABg");
	this.shape_18.setTransform(72.9,27.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F4EC").s().p("AgLAVQgFgBgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIABgEIABgBIACgBIADABQAIAFAIAAIAGAAIAEgDIACgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgQgCIgHgCIgEgBIgDgDIgBgFQAAgFAGgFQAHgEAIAAIAJABIAKAEIACADIgBAEIgCABIgCABIgCgBQgGgEgIAAIgFABIgEACQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIABACIADABIAVADIAFACIADADIABAFQAAAFgDADQgDAEgFABQgEACgHAAQgHAAgFgCg");
	this.shape_19.setTransform(67.3,27.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8F4EC").s().p("AgXAiIgCgBIAAgCIAAg9IAAgCIACgBIAuAAIACABIABACIAAADIgBACIgCABIgmAAIAAAYIAdAAIACABIABACIAAADIgBACIgCABIgdAAIAAAQIAmAAIACABIABACIAAADIgBACIgCABg");
	this.shape_20.setTransform(61.4,28.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8F4EC").s().p("AgaAsIgFgDQgDgDAAgDQAAgEADgDIABgBIADgBIABAAIAAAAIABABIAAAAIABAAQAEADACAAQAEAAACgDIAGgHIghg6IAAgCIABgDIADgBIAIAAIADABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAXAsIAWgsQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgBIAIAAIADABIABACIAAADIglBGIgFAHIgHAFQgEABgFAAQgEAAgEgBg");
	this.shape_21.setTransform(119.7,78.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8F4EC").s().p("AgVAwQgJgDgEgGIAAhVIABgEIADgBIAHAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAEIAAAjQAIgGALAAQAPAAAJAKQAKAKAAAOQAAAPgKAKQgKAKgRAAQgKAAgJgEgAgSAEIAAAdQAHAFAJAAQAJAAAFgGQAGgGAAgJQAAgJgGgGQgGgFgHAAQgKAAgHAHg");
	this.shape_22.setTransform(110.3,76);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8F4EC").s().p("AANAkQgOgIgIgNQgGgIgFgQQgEgRgGgLIgBgDIAEAAQAMACAMAHQAPAMAJAcQAGAXAEAGIABACIgCABQgHAAgKgFg");
	this.shape_23.setTransform(141.3,88.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8F4EC").s().p("AgwA1QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAIgLANgfQAJgWAHgJQAKgMAMgIQAKgGALgDIAGgCIAPAAIgDAHIgLAUIgPAhQgHAPgMALQgLAMgRAFQgMAEgJAAg");
	this.shape_24.setTransform(150.5,85.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8F4EC").s().p("AgJCaIgLgCQgRgEgKgIQgGgFgDgHQgBgGAAgIQAAgPAMgJQAOgKAagCIAXAAQADABAAAEQAAADgDABQgCACgIAAQgNAAgHALQgJAMAEANQAEAJAJAFQAHAGALgCQALgCAPgLQAKgIAPgRIAbgnQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDAAIgFABQgSAAgEgBQgIgDgFgEQgIgFgFgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQgHAHgHAEQgOAIgJABIgNAAQgPgBgIgJQgGgEAAgGQgBgKADgIIAZgoQAGgJACgFIgBgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgJAFIgKAIIgmArIgNAXIgGAKQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgoABQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIABgCIAUgmIAHgLQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQgHgBgFgEQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAABgBABQgCAMgGAJQgKAPgMAIQgMAJgNAEQgOAEgTAAQgLAAgJgFQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgIAJgOAIQgOAGgMAAIgPgCQgMgBgJgFQgVgIgLgNQAAAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgFAEgOAHQgOAFgJAAQgSABgJgDQgMgEgHgHQgFgFgEgKIAAgPQADgLAHgJQAEgFAGgDQALgHANgDQARgDAOAEQARAFALAJIAFADQAAABAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIBGiAIAJgKQAOgPASgFQASgFANAGQAKAFAEAJQAGAMgDAQQgBADgDACQgDACgDgBQgFgBAAgEIABgJQAAgFgCgGQgEgIgIAFQgEADgGAHIgJAOIghA7IgRAfQgIAOgQAPIgOANIgCACIACADIARAOQAOAJAKAEQARAGAPgMQAAAAAAgBQABAAAAAAQAAgBAAAAQgBgBAAAAQgPgPAHgYQAEgPAMgPQAJgKALgGQAPgIAOgDQAYgDARAHQAKADAIAJQACADADAHQAEAHAGAFIAHAEQAIACACgGIAUggIACgBIAqgBQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgGAKIAAACIAJgHQAWgMAQABQAQACAFAOQACAKgFAHIgTAdIgNAYQgCAEAAAFQAAAEAEAAQACAAAEgCQAJgFAPgQQADgEAAgEQgBgTANgRQANgSAUgJQAPgGALgBIAMAAQAMgBAOAHIAIAHQAAAAABABQAAAAABAAQAAAAAAAAQAAgBABAAIACgEQACgEAEAAIAiABIAFgBQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIgwBVIAAABIABAAQAIgEAJgIIAQgMQACgCAAgDQADgSAMgPQANgRAVgIQARgIAWABQARABAMAJQAGAEADAFQAKAOAPAEQATAIATgNQAOgJANgQIAHgJQADgDADAAQADgBACACQACACAAADIgDAJQgDAHAAAIIABANIAAAMQgDAXgMAOIgEAFQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIACAAIAWgJIAYgMQAEgDABAEIACAEQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQgDAEgHACIgZAMQgQAJgRADQgVADgLgBQgTgDgJgOQgFgHACgKQABgLAGgGQAFgFAFAAQAIgBAEABQAGABAEAGQAGALgHAJQgEAGgJABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIABACQAEAFAJAAQAGABADgFQAGgJADgJQADgJAAgTQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgRAGgTgEIgRgFQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAABQgCAHgDAHQgGAOgLALQgLAMgRAHQgTAJgagCQgPgCgMgMIgIgLQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAIgKAHQgPALgRAEQgCABgDADIgEAEIgPAUQgIAJgQAPIgPAMIgUANIgVAKIgXAFgAmUAJQgRAAgIAOQgFAKAEAKQAEAHAIAFQAIAEAJAAQAKgBAJgGIANgMQADgCgDgDQgIgNgIgGQgIgHgKAAIgBAAgAB4ghQgFABgJAGQgLAIgIAMQgOARgGAUQgCAKACAFQADAHAHgBQAIgBAKgIIAKgLQAGgFAEgHQAJgMAFgMQAEgKAAgHIAAgDQAAgFgDgDQgDgCgDAAIgEABgAimgiIgIACQgLAGgLAMQgGAHgIANQgFAGgGAPQgCAIAAAGQABAMALgBQAHgCAFgEQAMgIALgPQAJgLAGgNQAFgNAAgHIAAgEQgCgJgGAAIgCAAgAEVgiQgFAAgIAFQgQALgPAWIgIAPQgGAOABAJQABAKAKAAQAEAAAFgDQAFgDAHgHQAIgGAMgRQAGgIAFgMQAEgLAAgGIAAgDQgCgKgHAAIgBAAg");
	this.shape_25.setTransform(109.3,96.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8F4EC").s().p("AgTBmIAAhmIgphlIApAAIATAzIAUgzIApAAIgpBlIAABmg");
	this.shape_26.setTransform(214.8,53.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8F4EC").s().p("AAUBmIgIgpIgXAAIgIApIgpAAIApjLIAnAAIApDLgAgDAUIAHAAIgEgUg");
	this.shape_27.setTransform(201.7,53.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8F4EC").s().p("AAUBmIgUhmIgTBmIgpAAIgpjLIApAAIAVBlIAUhlIAnAAIAVBlIAUhlIApAAIgpDLg");
	this.shape_28.setTransform(184.2,53.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8F4EC").s().p("Ag8BmIAAjLIB5AAIAAApIhQAAIAAAoIA8AAIAAAoIg8AAIAAApIBQAAIAAApg");
	this.shape_29.setTransform(164.9,53.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8F4EC").s().p("AgTBmIAAiiIgpAAIAAgpIB5AAIAAApIgpAAIAACig");
	this.shape_30.setTransform(149.6,53.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8F4EC").s().p("AAVBmIgJgpIgYAAIgIApIgoAAIAojLIApAAIAoDLgAgDAUIAHAAIgEgUg");
	this.shape_31.setTransform(136,53.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgHgIgGgMQgEgLAAgNIAAhRQAAgNAEgLQAGgMAHgIQAIgHAMgGQALgEAMAAQANAAALAEQAMAGAHAHQAJAJAEALQAFAMAAAMIgpAAQAAgIgGgGQgFgGgJAAQgIAAgGAGQgFAFAAAJIAABRQAAAJAFAFQAGAGAIAAQAJAAAFgGQAGgGAAgIIAAgVIgUAAIAAgoIA9AAIAAA9QAAALgFANQgEALgJAIQgHAIgMAFQgKAFgOAAQgNAAgKgFg");
	this.shape_32.setTransform(121.2,53.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8F4EC").s().p("AgUBmIAAhmIgohlIAoAAIAUAzIAUgzIApAAIgpBlIAABmg");
	this.shape_33.setTransform(97.1,53.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8F4EC").s().p("AAUBmIgfhSIgIAAIAABSIgpAAIAAjLIA8AAQANAAALAEQAMAGAIAHQAIAIAEAMQAFAKAAAOQAAATgKAPQgJAOgQAHIAjBXgAgTgUIATAAQAJAAAFgFQAGgGAAgJQAAgJgGgFQgFgGgJAAIgTAAg");
	this.shape_34.setTransform(82.7,53.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8F4EC").s().p("Ag8BmIAAjLIB5AAIAAApIhQAAIAAAoIA8AAIAAAoIg8AAIAAApIBQAAIAAApg");
	this.shape_35.setTransform(67.4,53.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgIgKgFgKQgEgLAAgNIAAhRQAAgNAEgLQAFgLAIgJQAIgHAMgGQALgEAMAAQAOAAAKAEQAMAGAHAHQAJAJAFALQAEALAAANIgoAAQgBgIgFgGQgHgGgIAAQgIAAgFAGQgHAGAAAIIAABRQAAAIAHAGQAFAGAIAAQAIAAAHgGQAFgGABgIIAoAAQAAANgEALQgFAKgJAKQgHAIgMAEQgKAFgOAAQgNAAgKgFg");
	this.shape_36.setTransform(52.1,53.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgHgIgFgMQgFgLAAgNIAAhRQAAgNAFgLQAFgMAHgIQAIgHAMgGQAMgEALAAQANAAALAEQANAGAGAHQAJAJAFALQAEALAAANIAABRQAAANgEALQgFAKgJAKQgHAHgMAFQgKAFgOAAQgMAAgLgFgAgNg2QgGAFAAAJIAABRQAAAJAGAFQAFAGAIAAQAJAAAGgGQAFgGABgIIAAhRQgBgIgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_37.setTransform(36.8,53.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8F4EC").s().p("AAUBmIgfhSIgIAAIAABSIgpAAIAAjLIA8AAQANAAALAEQAMAGAIAHQAIAIAEAMQAFAKAAAOQAAASgJAQQgKAOgQAHIAjBXgAgTgUIATAAQAIAAAHgFQAFgHAAgIQAAgJgFgFQgGgGgJAAIgTAAg");
	this.shape_38.setTransform(21.5,53.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8F4EC").s().p("AgXBhQgMgFgHgHQgJgKgEgKQgFgMAAgMIAAhRQAAgMAFgMQAEgLAJgJQAHgHAMgGQALgEAMAAQANAAALAEQAMAGAIAHQAHAIAGAMQAEALAAANIgpAAQAAgJgFgFQgGgGgJAAQgIAAgFAGQgGAGAAAIIAABRQAAAIAGAGQAFAGAIAAQAJAAAGgGQAFgFAAgJIAAgVIgUAAIAAgoIA9AAIAAA9QAAANgEALQgGAMgHAHQgIAIgMAFQgKAFgOAAQgNAAgKgFg");
	this.shape_39.setTransform(6.1,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,-11.5,221,123.3), null);


(lib.ctatext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAhQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgLgwIgJAwQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgQg8IABgCQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIADAAIABACIANA0IALgyQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAIABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAIAMAyIAMg0QAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIABACIgQA8QAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape.setTransform(64.3,-330.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAGgJAKAAQAKAAAGAHQAHAJAAAQQAAAOgGAJQgGAKgLAAQgKAAgGgJgAgMgSQgEAHAAALQAAANAFAHQAEAHAHAAQAHAAAFgGQAFgHAAgOQAAgLgEgHQgEgIgJAAQgHAAgFAIg");
	this.shape_1.setTransform(56.4,-330.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAhQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgfg1IAAAzIgBACIgCABIgCgBIgBgCIAAg7IABgCIACgBIACAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIAfA1IAAgzIABgCIACgBIACABIABACIAAA7QAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_2.setTransform(49,-330.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAgIgBgCIAAg7IABgCIACgBIAWAAQAIAAAEAFQAGAFAAAIQAAAIgFAFQgGAEgHAAIgSAAIAAAbIgBACIgDABIgCgBgAgOgCIASAAQAGAAADgEQACgDAAgFQAAgFgCgDQgEgEgFAAIgSAAg");
	this.shape_3.setTransform(37.3,-330.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAYQgGgKAAgOQAAgNAGgKQAGgJAKAAQAKAAAGAHQAHAJAAAQQAAAOgGAJQgGAKgLAAQgKAAgGgJgAgMgSQgEAHAAALQAAANAFAHQAEAHAHAAQAHAAAFgGQAFgHAAgOQAAgLgEgHQgEgIgJAAQgHAAgFAIg");
	this.shape_4.setTransform(30,-330.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAgIgBgCIAAgbIgdAAIAAAbQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAg7QAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAABIAAAbIAdAAIAAgbIABgDIACAAIACAAIABADIAAA7IgBACIgCABIgCgBg");
	this.shape_5.setTransform(22.7,-330.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAbIgGgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACAAIACABQAFAKAJAAQAGAAAEgDQADgDAAgFQAAgFgCgDQgDgEgIgCQgSgEAAgOQAAgHAFgEQAFgFAIAAQAIAAAGAGIAFAHQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgBgEgEgDQgEgDgEAAQgGAAgDADQgDADAAAEQAAAKANADQAKADAEADQAEAFAAAIQAAAHgFAFQgGAFgIAAQgIAAgGgGg");
	this.shape_6.setTransform(15.7,-330.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctatext, new cjs.Rectangle(11,-338,60.5,14.8), null);


// stage content:
(lib._300x250_re_under = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ctatxt
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:558.9,alpha:1},10).wait(255).to({regX:40.7,regY:-330.4,scaleX:1,scaleY:1,x:149.1,y:218.3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:218.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:149,y:217.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:217.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:148.9,y:217.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:216.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:216.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:148.8},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:625.3},0).wait(1).to({regX:40.7,regY:-330.4,scaleX:1.19,scaleY:1.19,x:148.8,y:216.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:148.9,y:217.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149,y:218},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:218.2},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:558.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:558.8,alpha:1},10).wait(258).to({regY:-326.8,scaleX:1,scaleY:1,y:217.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:217.9},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:218},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:218.1},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:627.3},0).wait(1).to({regY:-326.8,scaleX:1.19,scaleY:1.19,x:149.5,y:218.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:218},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:217.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:217.8},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:558.8},0).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91.1,453.2,1,1,30,0,0,89.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:122.3,regY:112,rotation:27.6,x:-46.3,y:438.5},0).wait(1).to({rotation:24.5,x:-39.3,y:422.7},0).wait(1).to({rotation:20.6,x:-30.5,y:402.4},0).wait(1).to({rotation:15.6,x:-19.5,y:376.5},0).wait(1).to({rotation:9.6,x:-6.6,y:345.6},0).wait(1).to({rotation:3.4,x:6.1,y:314.3},0).wait(1).to({rotation:-1.8,x:16.6,y:287.7},0).wait(1).to({rotation:-5.9,x:24.7,y:266.8},0).wait(1).to({rotation:-9.2,x:30.8,y:250.7},0).wait(1).to({rotation:-11.7,x:35.6,y:238.1},0).wait(1).to({rotation:-13.7,x:39.4,y:228},0).wait(1).to({rotation:-15.3,x:42.5,y:219.9},0).wait(1).to({rotation:-16.7,x:45,y:213.3},0).wait(1).to({rotation:-17.8,x:47,y:207.8},0).wait(1).to({rotation:-18.7,x:48.7,y:203.4},0).wait(1).to({rotation:-19.4,x:50.1,y:199.7},0).wait(1).to({rotation:-20.1,x:51.2,y:196.7},0).wait(1).to({rotation:-20.5,x:52,y:194.3},0).wait(1).to({rotation:-20.9,x:52.8,y:192.4},0).wait(1).to({rotation:-21.2,x:53.3,y:190.9},0).wait(1).to({rotation:-21.4,x:53.7,y:189.9},0).wait(1).to({rotation:-21.6,x:53.9,y:189.2},0).wait(1).to({rotation:-21.7,x:54.1,y:188.8},0).wait(1).to({regX:89.4,regY:133.6,x:31.7,y:220.7},0).wait(271));

	// Layer 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.2,507.5,1,1,-45,0,0,67.5,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:48.8,regY:120.9,rotation:-42.6,x:411,y:468.2},0).wait(1).to({rotation:-39.5,x:399.7,y:449.7},0).wait(1).to({rotation:-35.6,x:385.5,y:426.2},0).wait(1).to({rotation:-30.5,x:367.6,y:396.3},0).wait(1).to({rotation:-24.5,x:346.5,y:360.8},0).wait(1).to({rotation:-18.3,x:325.5,y:325.1},0).wait(1).to({rotation:-13,x:307.9,y:295},0).wait(1).to({rotation:-8.9,x:294.1,y:271.5},0).wait(1).to({rotation:-5.7,x:283.6,y:253.5},0).wait(1).to({rotation:-3.1,x:275.4,y:239.4},0).wait(1).to({rotation:-1.1,x:268.7,y:228.3},0).wait(1).to({rotation:0.6,x:263.5,y:219.2},0).wait(1).to({rotation:1.9,x:259.1,y:211.9},0).wait(1).to({rotation:3,x:255.6,y:205.8},0).wait(1).to({rotation:3.9,x:252.6,y:200.8},0).wait(1).to({rotation:4.7,x:250.2,y:196.8},0).wait(1).to({rotation:5.3,x:248.3,y:193.5},0).wait(1).to({rotation:5.8,x:246.7,y:190.9},0).wait(1).to({rotation:6.2,x:245.5,y:188.8},0).wait(1).to({rotation:6.5,x:244.5,y:187.2},0).wait(1).to({rotation:6.7,x:243.8,y:186},0).wait(1).to({rotation:6.9,x:243.3,y:185.2},0).wait(1).to({x:243.1,y:184.8},0).wait(1).to({regX:67.6,regY:174.6,rotation:7,x:255.1,y:240.1},0).wait(271));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(59).to({regX:588.7,regY:37.2,x:606.5,y:56.9},0).wait(1).to({x:604.8},0).wait(1).to({x:601.6},0).wait(1).to({x:596.5},0).wait(1).to({x:588.9},0).wait(1).to({x:578.1},0).wait(1).to({x:562.5},0).wait(1).to({x:539.7,y:56.8},0).wait(1).to({x:505.1},0).wait(1).to({x:455.3},0).wait(1).to({x:402.9,y:56.7},0).wait(1).to({x:365.2},0).wait(1).to({x:340.4,y:56.6},0).wait(1).to({x:323.6},0).wait(1).to({x:312.1},0).wait(1).to({x:304.2},0).wait(1).to({x:298.9},0).wait(1).to({x:295.5},0).wait(1).to({regX:131.7,regY:89,x:-163.3,y:108.4},0).wait(55).to({x:-163.9},0).wait(1).to({regX:588.7,regY:37.2,x:292.6,y:56.6},0).wait(1).to({x:290.9},0).wait(1).to({x:287.8},0).wait(1).to({x:282.8},0).wait(1).to({x:275.5},0).wait(1).to({x:264.9},0).wait(1).to({x:249.7},0).wait(1).to({x:227.4},0).wait(1).to({x:193.8},0).wait(1).to({x:145.2},0).wait(1).to({x:94.2},0).wait(1).to({x:57.4},0).wait(1).to({x:33.2},0).wait(1).to({x:17},0).wait(1).to({x:5.8},0).wait(1).to({x:-2},0).wait(1).to({x:-7.2},0).wait(1).to({x:-10.5},0).wait(1).to({x:-12.2},0).wait(1).to({regX:131.7,regY:89,x:-469.8,y:108.4},0).wait(50).to({regX:588.7,regY:37.2,x:-13.2,y:56.6},0).wait(1).to({x:-14.9},0).wait(1).to({x:-17.9},0).wait(1).to({x:-22.6},0).wait(1).to({x:-29.7},0).wait(1).to({x:-39.8},0).wait(1).to({x:-54.4},0).wait(1).to({x:-75.7},0).wait(1).to({x:-108},0).wait(1).to({x:-154.6},0).wait(1).to({x:-203.5},0).wait(1).to({x:-238.7},0).wait(1).to({x:-261.9},0).wait(1).to({x:-277.5},0).wait(1).to({x:-288.3},0).wait(1).to({x:-295.7},0).wait(1).to({x:-300.7},0).wait(1).to({x:-303.8},0).wait(1).to({x:-305.5},0).wait(1).to({regX:131.7,regY:89,x:-763,y:108.4},0).wait(52));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.1,159.5,0.656,0.656,0,0,0,110.6,61.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},10).wait(285));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,125,677.6,581.7);
// library properties:
lib.properties = {
	id: '36372565E0E242689BDFA96224DEC98B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_re_under_atlas_.png", id:"300x250_re_under_atlas_"}
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
an.compositions['36372565E0E242689BDFA96224DEC98B'] = {
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