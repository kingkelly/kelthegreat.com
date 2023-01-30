(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_st_hell_atlas_", frames: [[0,159,125,126],[0,0,164,157]]}
];


// symbols:



(lib.JUBES_BB = function() {
	this.spriteSheet = ss["300x250_st_hell_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.WORMS_BB = function() {
	this.spriteSheet = ss["300x250_st_hell_atlas_"];
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
	this.instance = new lib.WORMS_BB();
	this.instance.parent = this;
	this.instance.setTransform(-58.4,107.5,1,1,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-58.4,89.5,180.2,174), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JUBES_BB();
	this.instance.parent = this;
	this.instance.setTransform(93.9,33,0.999,0.999,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(46.7,33,163,163.5), null);


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
	this.shape_48.setTransform(223.5,139.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAAAxIBhAAIAAAyg");
	this.shape_49.setTransform(210.9,129);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADDIBIAAIAAAyg");
	this.shape_50.setTransform(193.8,129);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AgdB1QgNgFgKgKQgJgKgGgNQgFgOgBgQIAxAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAQgPAAgOgFQgNgGgKgJQgJgJgGgOQgFgNgBgQQABgQAFgNQAGgNAJgLQAKgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKALAGANQAFANAAAQIgxAAQAAgKgHgHQgHgIgKAAQgKAAgHAIQgHAHAAAKQAAAKAHAIQAHAGAKABQAPgBAOAGQANAFAKALQAKAJAGANQAFANAAAQQAAAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_51.setTransform(176.7,129);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_52.setTransform(163.2,129);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AAYB7IgKgyIgcAAIgKAyIgxAAIAxj1IAwAAIAyD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_53.setTransform(149.8,129);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AgYB7IAAh7Igxh6IAxAAIAYA+IAYg+IAyAAIgyB6IAAB7g");
	this.shape_54.setTransform(124.6,129);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQAOAFAKAKQAJALAFANQAHANgBAQIAABhQABAQgHAOQgFANgJAKQgKAKgOAFQgOAGgPAAgAgYBJIAYAAQAKAAAHgGQAHgIAAgKIAAhhQAAgKgHgHQgHgIgKAAIgYAAg");
	this.shape_55.setTransform(107.4,129);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_56.setTransform(89.1,129);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AAYB7IgJgyIgdAAIgKAyIgwAAIAwj1IAwAAIAxD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_57.setTransform(70.7,129);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgJgKgGgNQgFgOgBgQIAAhhQABgQAFgNQAGgNAJgLQALgKANgFQANgGAPAAQAQAAANAGQANAFAKAKQAKALAGANQAFANAAAQIgxAAQAAgKgHgHQgHgIgKAAQgKAAgHAIQgHAHAAAKIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAxAAQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGg");
	this.shape_58.setTransform(52.4,129);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAAAyIBhAAIAAAxg");
	this.shape_59.setTransform(236.1,94);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_60.setTransform(217.8,94);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_61.setTransform(199.4,94);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_62.setTransform(174.2,94);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_63.setTransform(160.7,94);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgwAAIAAj1IBIAAQAQAAANAGQANAFALAKQAJALAGANQAFANAAAQQABAYgMARQgMAQgTAJIAqBpgAgYgXIAYAAQAKgBAHgGQAHgIAAgKQAAgKgHgIQgHgHgKAAIgYAAg");
	this.shape_64.setTransform(140.5,94);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_65.setTransform(122.1,94);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADEIBJAAIAAAxg");
	this.shape_66.setTransform(105,94);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKALAFANQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgJAKgOAFQgOAGgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgHgKAAIgYAAg");
	this.shape_67.setTransform(87.9,94);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQANAFALAKQAJALAFANQAHANAAAQIAABhQAAAQgHANQgFAOgJAKQgLAKgNAFQgOAGgPAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgHgKAAIgYAAg");
	this.shape_68.setTransform(69.5,94);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgOQgGgNABgQIAAhhQgBgQAGgNQAFgNAKgLQALgKANgFQANgGAPAAQAPAAAOAGQANAFAKAKQAKALAFANQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgKAKgNAFQgOAGgPAAQgPAAgNgGgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgHgKAAQgKAAgHAHg");
	this.shape_69.setTransform(51.2,94);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_70.setTransform(34,94);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#063928").s().p("AAYB7IgJgxIgdAAIgKAxIgxAAIAxj1IAwAAIAyD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_71.setTransform(229.9,59);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_72.setTransform(204.7,59);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAyAAIgyB6IAyB7gAhJB7IAAj1IAxAAIAAB6IAAB7gAgYAAg");
	this.shape_73.setTransform(186.3,59);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_74.setTransform(172.8,59);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_75.setTransform(160.6,59);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAxAAIgxB6IAAB7g");
	this.shape_76.setTransform(136.7,59);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQQAAAXgNASQgLAQgTAJIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_77.setTransform(120.5,59);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAirIAyAAIAACrQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_78.setTransform(102.2,59);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAABjg");
	this.shape_79.setTransform(83.8,59);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAAhhQAAgQAGgNQAFgOALgKQAKgKAMgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_80.setTransform(58.6,59);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_81.setTransform(40.3,59);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_82.setTransform(198.1,24);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_83.setTransform(180.9,24);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#063928").s().p("AAYB7IgJgxIgdAAIgKAxIgxAAIAxj1IAwAAIAxD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_84.setTransform(165.8,24);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgxAAIAAj1IAxAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_85.setTransform(147.4,24);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADEIBJAAIAAAxg");
	this.shape_86.setTransform(123.4,24);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_87.setTransform(107.5,24);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAAAyIBhAAIAAAxg");
	this.shape_88.setTransform(90.4,24);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_89.setTransform(72.1,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(23.4,7.6,858.3,144.5), null);


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
(lib._300x250_st_hell = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ctatxt
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({alpha:1},10).wait(42).to({regX:40.7,regY:-330.4,scaleX:1,scaleY:1,x:149.1,y:221.3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:221.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:149,y:220.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:220.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:148.9,y:220.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:219.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:219.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:148.8},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:628.3},0).wait(1).to({regX:40.7,regY:-330.4,scaleX:1.19,scaleY:1.19,x:148.8,y:219.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:148.9,y:220.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149,y:221},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:221.2},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({_off:false},0).to({alpha:1},10).wait(45).to({regY:-326.8,scaleX:1,scaleY:1,y:220.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:220.9},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:221},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:221.1},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:630.3},0).wait(1).to({regY:-326.8,scaleX:1.19,scaleY:1.19,x:149.5,y:221.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:221},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:220.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:220.8},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(3));

	// Layer 6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-104.1,329.2,1,1,30,0,0,89.5,133.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:128.1,regY:114.8,rotation:27.6,x:-54.8,y:325.4},0).wait(1).to({rotation:24.5,x:-46.8,y:316.8},0).wait(1).to({rotation:20.6,x:-36.7,y:305.6},0).wait(1).to({rotation:15.6,x:-24,y:291.3},0).wait(1).to({rotation:9.6,x:-9.3,y:274.3},0).wait(1).to({rotation:3.4,x:5.3,y:257.1},0).wait(1).to({rotation:-1.8,x:17.5,y:242.6},0).wait(1).to({rotation:-5.9,x:26.7,y:231.2},0).wait(1).to({rotation:-9.2,x:33.8,y:222.5},0).wait(1).to({rotation:-11.7,x:39.4,y:215.6},0).wait(1).to({rotation:-13.7,x:43.7,y:210.2},0).wait(1).to({rotation:-15.3,x:47.3,y:205.8},0).wait(1).to({rotation:-16.7,x:50.1,y:202.2},0).wait(1).to({rotation:-17.8,x:52.4,y:199.3},0).wait(1).to({rotation:-18.7,x:54.3,y:197},0).wait(1).to({rotation:-19.4,x:55.9,y:195},0).wait(1).to({rotation:-20.1,x:57.2,y:193.4},0).wait(1).to({rotation:-20.5,x:58.2,y:192.1},0).wait(1).to({rotation:-20.9,x:59,y:191.1},0).wait(1).to({rotation:-21.2,x:59.6,y:190.3},0).wait(1).to({rotation:-21.4,x:60.1,y:189.7},0).wait(1).to({rotation:-21.6,x:60.4,y:189.3},0).wait(1).to({rotation:-21.7,x:60.6,y:189.2},0).wait(1).to({regX:89.4,regY:133.6,x:31.7,y:220.7},0).wait(155));

	// Layer 3
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(442.2,368.8,1,1,-45,0,0,67.5,174.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:31.7,regY:176.5,rotation:-42.6,x:408.4,y:388.4},0).wait(1).to({rotation:-39.5,x:395.9,y:379.5},0).wait(1).to({rotation:-35.6,x:380.2,y:367.8},0).wait(1).to({rotation:-30.5,x:360.2,y:352.8},0).wait(1).to({rotation:-24.5,x:336.4,y:334.6},0).wait(1).to({rotation:-18.3,x:312.6,y:315.8},0).wait(1).to({rotation:-13,x:292.6,y:299.6},0).wait(1).to({rotation:-8.9,x:277,y:286.8},0).wait(1).to({rotation:-5.7,x:265,y:276.9},0).wait(1).to({rotation:-3.1,x:255.6,y:269},0).wait(1).to({rotation:-1.1,x:248.2,y:262.6},0).wait(1).to({rotation:0.6,x:242.2,y:257.5},0).wait(1).to({rotation:1.9,x:237.4,y:253.4},0).wait(1).to({rotation:3,x:233.3,y:250},0).wait(1).to({rotation:3.9,x:230.1,y:247.1},0).wait(1).to({rotation:4.7,x:227.4,y:244.8},0).wait(1).to({rotation:5.3,x:225.2,y:242.9},0).wait(1).to({rotation:5.8,x:223.5,y:241.4},0).wait(1).to({rotation:6.2,x:222,y:240.1},0).wait(1).to({rotation:6.5,x:220.9,y:239.2},0).wait(1).to({rotation:6.7,x:220.2,y:238.6},0).wait(1).to({rotation:6.9,x:219.6,y:238.1},0).wait(1).to({x:219.3,y:237.8},0).wait(1).to({regX:67.6,regY:174.6,rotation:7,x:255.1,y:240.1},0).wait(64).to({regX:31.7,regY:176.5,x:219.3,y:237.5},0).wait(1).to({x:219.7,y:237.2},0).wait(1).to({x:220.3,y:236.5},0).wait(1).to({x:221.4,y:235.5},0).wait(1).to({x:222.9,y:233.9},0).wait(1).to({x:225.2,y:231.7},0).wait(1).to({x:228.3,y:228.6},0).wait(1).to({x:232.7,y:224.1},0).wait(1).to({x:238.8,y:218},0).wait(1).to({x:246.5,y:210.3},0).wait(1).to({x:254.5,y:202.4},0).wait(1).to({x:261.2,y:195.6},0).wait(1).to({x:266.4,y:190.4},0).wait(1).to({x:270.4,y:186.4},0).wait(1).to({x:273.5,y:183.3},0).wait(1).to({x:276,y:180.9},0).wait(1).to({x:277.9,y:179},0).wait(1).to({x:279.4,y:177.5},0).wait(1).to({x:280.5,y:176.4},0).wait(1).to({x:281.5,y:175.4},0).wait(1).to({x:282.1,y:174.8},0).wait(1).to({x:282.6,y:174.3},0).wait(1).to({x:283,y:173.9},0).wait(1).to({x:283.1,y:173.8},0).wait(1).to({regX:67.6,regY:174.6,x:319.1,y:176.1},0).wait(67));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(67).to({regX:452,regY:73.8,x:469.8,y:93.5},0).wait(1).to({x:468.1},0).wait(1).to({x:464.9},0).wait(1).to({x:459.8},0).wait(1).to({x:452.2},0).wait(1).to({x:441.4},0).wait(1).to({x:425.8},0).wait(1).to({x:403,y:93.4},0).wait(1).to({x:368.4},0).wait(1).to({x:318.6},0).wait(1).to({x:266.2,y:93.3},0).wait(1).to({x:228.5},0).wait(1).to({x:203.7,y:93.2},0).wait(1).to({x:186.9},0).wait(1).to({x:175.4},0).wait(1).to({x:167.5},0).wait(1).to({x:162.2},0).wait(1).to({x:158.8},0).wait(1).to({regX:131.7,regY:89,x:-163.3,y:108.4},0).wait(73));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.1,159.5,0.656,0.656,0,0,0,110.6,61.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(103).to({_off:false},0).to({alpha:1},10).wait(67));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

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
		{src:"images/300x250_st_hell_atlas_.png", id:"300x250_st_hell_atlas_"}
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