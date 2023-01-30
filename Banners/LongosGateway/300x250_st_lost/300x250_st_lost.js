(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_st_lost_atlas_", frames: [[124,0,116,138],[0,0,122,174]]}
];


// symbols:



(lib.bag_bb = function() {
	this.spriteSheet = ss["300x250_st_lost_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eggbut_bb = function() {
	this.spriteSheet = ss["300x250_st_lost_atlas_"];
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
	this.instance = new lib.eggbut_bb();
	this.instance.parent = this;
	this.instance.setTransform(-10.8,32,1,1,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-10.8,18.6,140.3,186.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bag_bb();
	this.instance.parent = this;
	this.instance.setTransform(88.3,29.6,0.999,0.999,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(36.6,29.6,159.1,171.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(875.5,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANAAAQQAAAXgMASQgLAQgTAJIAqBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_1.setTransform(862.9,58.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_2.setTransform(844.6,58.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAGAOQAFANABAQIAABhQgBAQgFANQgGAOgKAKQgJAKgOAGQgOAFgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_3.setTransform(826.2,58.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAFAOQAHANAAAQQgBAXgMASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_4.setTransform(807.9,58.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOALgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_5.setTransform(789.5,58.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICSAAIAAAxIgyAAIAADEg");
	this.shape_6.setTransform(764.3,58.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AAYB7IgYg9IgYA9IgxAAIAxh7Igxh6IAxAAIAYA+IAYg+IAxAAIgxB6IAxB7g");
	this.shape_7.setTransform(747.2,58.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_8.setTransform(728.8,58.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_9.setTransform(710.5,58.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_10.setTransform(685.3,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAirIAyAAIAACrQgBAQgGANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_11.setTransform(666.9,58.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAAhhQAAgQAGgNQAFgOALgKQAKgKAMgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_12.setTransform(648.6,58.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAyAAIgyB6IAAB7g");
	this.shape_13.setTransform(630.2,58.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAABjg");
	this.shape_14.setTransform(826.6,23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAABjg");
	this.shape_15.setTransform(808.2,23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNAAgQIAAhhQAAgPAGgOQAFgOALgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_16.setTransform(789.9,23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNAAgQIAxAAQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIhJAAIAAiSICTAAIAAAxIhiAAIAAAyIAYAAQAPAAAOAFQAOAFAJAKQAKAJAFAOQAHANAAAQQAAAQgHANQgFAOgKAKQgJAJgOAHQgOAFgPAAQgPAAgOgFg");
	this.shape_17.setTransform(764.7,23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgMB7IAAjEIgYAAIAAgxIBJAAIAAD1g");
	this.shape_18.setTransform(750,23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgYCsIAAg1QgWgIgNgSQgOgTAAgZIAxAAQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgLgHgHQgHgHgKAAQgPAAgOgFQgNgGgJgKQgKgJgGgNQgGgNAAgQQAAgMAEgMQAEgLAGgJQAGgJAJgHQAJgGALgEIAAg1IAwAAIAAA1QAWAHAOATQAOATAAAZIgyAAQAAgLgHgHQgHgHgKAAQgKAAgHAHQgHAHAAALQAAAKAHAHQAHAHAKAAQAPAAAOAGQAOAFAJAKQAKAJAFAOQAGANABAQQAAAZgOATQgOASgWAIIAAA1g");
	this.shape_19.setTransform(735.3,23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_20.setTransform(710.1,23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAyIBiAAIAAAxg");
	this.shape_21.setTransform(691.8,23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNABgQIAAhhQgBgPAGgOQAFgOALgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAgZIgYAAIAAgvIBKAAIAABIQAAAQgHANQgFAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_22.setTransform(673.4,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_23.setTransform(543.9,68.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAAAyIBhAAIAAAxg");
	this.shape_24.setTransform(531.3,58.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_25.setTransform(513,58.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_26.setTransform(499.5,58.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADEIBJAAIAAAxg");
	this.shape_27.setTransform(487.3,58.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_28.setTransform(470.2,58.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgQAGgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAGANABAQIAABhQgBAQgGANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_29.setTransform(451.8,58.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKAKAGAOQAFANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_30.setTransform(426.6,58.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_31.setTransform(408.3,58.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQANAFALAKQAJAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgJAKQgLAKgNAGQgOAFgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_32.setTransform(389.9,58.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgwAAIAAj1IBIAAQAPAAAOAGQAOAFAKAKQAJAKAFAOQAHANgBAQQABAXgMASQgMAQgTAJIAqBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_33.setTransform(371.6,58.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOAKgKQALgKANgFQANgGAPAAQAQAAANAGQANAFAKAKQAKAKAFAOQAHANgBAQIAABhQABAQgHANQgFAOgKAKQgKAKgNAGQgNAFgQAAQgPAAgNgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_34.setTransform(353.2,58.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_35.setTransform(557.1,33.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_36.setTransform(544.5,23.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAGAJAJQAKAKAFAOQAHAOAAAPQgBAXgMASQgLARgTAIIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_37.setTransform(526.2,23.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNABgQIAAhhQgBgPAGgOQAFgOALgKQAKgJAMgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_38.setTransform(507.8,23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_39.setTransform(490.7,23.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AgcB2QgOgGgKgKQgJgKgGgOQgFgNgBgQIAxAAQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBQgPABgNgGQgOgFgKgKQgJgKgGgNQgFgNgBgQQABgPAFgOQAGgOAJgKQAKgJAOgGQANgGAPAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOAAAPIgxAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAPAAAOAFQANAFAKAKQAKAJAGAOQAFANAAAQQAAAQgFANQgGAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgNgFg");
	this.shape_40.setTransform(472.3,23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_41.setTransform(447.1,23.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgxAAIAAj1IAxAAIAABjIAwAAIAAhjIAyAAIAAD1g");
	this.shape_42.setTransform(428.8,23.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_43.setTransform(410.4,23.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQAOAGAJAJQAKAKAFAOQAGAOABAPQgBAQgGANQgFANgKAKQgJAKgOAFQgOAGgPgBIgYAAIAABjgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_44.setTransform(385.2,23.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_45.setTransform(371.7,23.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAyAAIgyB6IAyB7gAhJB7IAAj1IAxAAIAAB6IAAB7gAgYAAg");
	this.shape_46.setTransform(358.3,23.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNABgQIAwAAQAAAKAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBQgPABgOgGQgNgFgJgKQgLgKgFgNQgGgNABgQQgBgPAGgOQAFgOALgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAPAAAOAFQANAFALAKQAJAJAFAOQAHANAAAQQAAAQgHANQgFAOgJAKQgLAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_47.setTransform(340,23.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_48.setTransform(218,69.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAxAAIgxB6IAxB7gAhJB7IAAj1IAxAAIAAB6IAAB7g");
	this.shape_49.setTransform(205.5,59);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgQAFgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAyAAQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_50.setTransform(187.1,59);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AAYB7IgKgxIgcAAIgKAxIgwAAIAwj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_51.setTransform(170,59);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANAAAQQAAAPgEAMQgFAMgJAJQAJAKAFANQAEAMAAAOQAAAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKQAAgKgHgIQgHgHgKAAIgYAAgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_52.setTransform(152.8,59);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_53.setTransform(127.6,59);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_54.setTransform(114.1,59);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_55.setTransform(93.9,59);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_56.setTransform(80.4,59);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AAYB7IgJgxIgdAAIgKAxIgxAAIAxj1IAwAAIAyD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_57.setTransform(67,59);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgOAKgKQALgKANgFQANgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANgBAQIgxAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAgZIgYAAIAAgvIBJAAIAABIQABAQgHANQgFAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgNgFg");
	this.shape_58.setTransform(49.8,59);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AgSB7IAAgmIAlAAIAAAmgAgSBDIAAhxIASAAQAIAAAFgFQAGgGAAgIQAAgIgGgFQgFgGgIAAQgHAAgGAGQgFAFAAAIIgmAAQAAgMAEgKQAFgLAHgHQAIgIAKgFQALgEALAAQAMAAAKAEQALAFAIAIQAHAHAEALQAFAKAAAMQAAATgLAPQgKAOgRAGIAABOg");
	this.shape_59.setTransform(227.2,24);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOAAAPQAAAXgMASQgLARgTAIIAqBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_60.setTransform(210.9,24);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAirIAxAAIAACrQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAirIAyAAIAACrQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_61.setTransform(192.5,24);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgPAGgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAGAOABAPIAABhQgBAQgGANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_62.setTransform(174.2,24);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgxAAIAAj1IAxAAIAABjIAwAAIAAhjIAyAAIAAD1g");
	this.shape_63.setTransform(155.8,24);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_64.setTransform(130.6,24);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AAYB7IgKgxIgcAAIgKAxIgwAAIAwj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_65.setTransform(112.3,24);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICSAAIAAAxIgyAAIAADEg");
	this.shape_66.setTransform(87.1,24);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgJgKgGgOQgFgNgBgQIAxAAQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBQgPABgNgGQgOgFgKgLQgJgJgGgNQgFgNgBgQQABgPAFgOQAGgOAJgKQAKgJAOgGQANgGAPAAQAQAAANAGQANAGAKAJQAKAKAGAOQAFAOAAAPIgxAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAQAAANAFQANAFALAKQAJAJAGAOQAFANAAAQQAAAQgFANQgGAOgJAKQgLAJgNAHQgNAFgQAAQgPAAgNgFg");
	this.shape_67.setTransform(69.9,24);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AgdB2QgNgGgKgKQgJgKgGgOQgFgNgBgQIAAhhQABgPAFgOQAGgOAJgKQAKgJANgGQAOgGAPAAQAQAAANAGQANAGAKAJQAKAKAGAOQAFAOAAAPIAABhQAAAQgFANQgGAOgKAKQgKAKgNAGQgNAFgQAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_68.setTransform(51.6,24);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_69.setTransform(35.6,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(26.2,7.6,855.4,74.5), null);


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
(lib._300x250_st_lost = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ctatxt
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({alpha:1},10).wait(111).to({regX:40.7,regY:-330.4,scaleX:1,scaleY:1,x:149.1,y:221.3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:221.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:149,y:220.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:220.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:148.9,y:220.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:219.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:219.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:148.8},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:628.3},0).wait(1).to({regX:40.7,regY:-330.4,scaleX:1.19,scaleY:1.19,x:148.8,y:219.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:148.9,y:220.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149,y:221},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:221.2},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({alpha:1},10).wait(114).to({regY:-326.8,scaleX:1,scaleY:1,y:220.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:220.9},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:221},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:221.1},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:630.3},0).wait(1).to({regY:-326.8,scaleX:1.19,scaleY:1.19,x:149.5,y:221.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:221},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:220.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:220.8},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91.1,453.2,1,1,30,0,0,89.5,133.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:116.1,regY:115.2,rotation:27.6,x:-53.3,y:438.4},0).wait(1).to({rotation:24.5,x:-46.3,y:423},0).wait(1).to({rotation:20.6,x:-37.4,y:403.2},0).wait(1).to({rotation:15.6,x:-26.3,y:377.9},0).wait(1).to({rotation:9.6,x:-13.3,y:347.7},0).wait(1).to({rotation:3.4,x:-0.3,y:317.1},0).wait(1).to({rotation:-1.8,x:10.5,y:291.1},0).wait(1).to({rotation:-5.9,x:18.8,y:270.7},0).wait(1).to({rotation:-9.2,x:25.2,y:254.9},0).wait(1).to({rotation:-11.7,x:30.2,y:242.5},0).wait(1).to({rotation:-13.7,x:34.2,y:232.6},0).wait(1).to({rotation:-15.3,x:37.4,y:224.6},0).wait(1).to({rotation:-16.7,x:40,y:218.1},0).wait(1).to({rotation:-17.8,x:42.1,y:212.7},0).wait(1).to({rotation:-18.7,x:43.8,y:208.4},0).wait(1).to({rotation:-19.4,x:45.3,y:204.8},0).wait(1).to({rotation:-20.1,x:46.4,y:201.8},0).wait(1).to({rotation:-20.5,x:47.3,y:199.4},0).wait(1).to({rotation:-20.9,x:48.1,y:197.6},0).wait(1).to({rotation:-21.2,x:48.7,y:196.2},0).wait(1).to({rotation:-21.4,x:49.1,y:195.1},0).wait(1).to({rotation:-21.6,x:49.4,y:194.4},0).wait(1).to({rotation:-21.7,x:49.6,y:194},0).wait(1).to({regX:89.4,regY:133.6,x:31.7,y:220.7},0).wait(138));

	// Layer 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(471.2,507.5,1,1,-45,0,0,67.5,174.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:59.4,regY:111.7,rotation:-42.6,x:412.6,y:454.2},0).wait(1).to({rotation:-39.5,x:402.1,y:435.9},0).wait(1).to({rotation:-35.6,x:388.7,y:412.5},0).wait(1).to({rotation:-30.5,x:372,y:383},0).wait(1).to({rotation:-24.5,x:352.3,y:348},0).wait(1).to({rotation:-18.3,x:332.7,y:313},0).wait(1).to({rotation:-13,x:316.1,y:283.6},0).wait(1).to({rotation:-8.9,x:303.2,y:260.8},0).wait(1).to({rotation:-5.7,x:293.2,y:243.3},0).wait(1).to({rotation:-3.1,x:285.4,y:229.7},0).wait(1).to({rotation:-1.1,x:279.2,y:218.9},0).wait(1).to({rotation:0.6,x:274.2,y:210.1},0).wait(1).to({rotation:1.9,x:270,y:203},0).wait(1).to({rotation:3,x:266.6,y:197.2},0).wait(1).to({rotation:3.9,x:263.8,y:192.4},0).wait(1).to({rotation:4.7,x:261.5,y:188.5},0).wait(1).to({rotation:5.3,x:259.7,y:185.3},0).wait(1).to({rotation:5.8,x:258.2,y:182.8},0).wait(1).to({rotation:6.2,x:257,y:180.8},0).wait(1).to({rotation:6.5,x:256.1,y:179.3},0).wait(1).to({rotation:6.7,x:255.4,y:178.1},0).wait(1).to({rotation:6.9,x:255,y:177.4},0).wait(1).to({x:254.7,y:176.9},0).wait(1).to({regX:67.6,regY:174.6,rotation:7,x:255.1,y:240.1},0).wait(138));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(67).to({regX:453.4,regY:38.8,x:471.2,y:58.5},0).wait(1).to({x:469.5},0).wait(1).to({x:466.3},0).wait(1).to({x:461.2},0).wait(1).to({x:453.6},0).wait(1).to({x:442.8},0).wait(1).to({x:427.2},0).wait(1).to({x:404.4,y:58.4},0).wait(1).to({x:369.8},0).wait(1).to({x:320},0).wait(1).to({x:267.6,y:58.3},0).wait(1).to({x:229.9},0).wait(1).to({x:205.1,y:58.2},0).wait(1).to({x:188.3},0).wait(1).to({x:176.8},0).wait(1).to({x:168.9},0).wait(1).to({x:163.6},0).wait(1).to({x:160.2},0).wait(1).to({regX:131.7,regY:89,x:-163.3,y:108.4},0).wait(56));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.1,159.5,0.656,0.656,0,0,0,110.6,61.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).to({alpha:1},10).wait(127));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: '36372565E0E242689BDFA96224DEC98B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_st_lost_atlas_.png", id:"300x250_st_lost_atlas_"}
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