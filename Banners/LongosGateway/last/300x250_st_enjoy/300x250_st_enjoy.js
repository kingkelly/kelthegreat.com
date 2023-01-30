(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_st_enjoy_atlas_", frames: [[0,0,171,189],[173,0,171,189],[346,0,114,140],[346,142,84,114]]}
];


// symbols:



(lib.poatoes_only = function() {
	this.spriteSheet = ss["300x250_st_enjoy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ribbon_bb_only = function() {
	this.spriteSheet = ss["300x250_st_enjoy_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.turkey_bb = function() {
	this.spriteSheet = ss["300x250_st_enjoy_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.VEG_BB = function() {
	this.spriteSheet = ss["300x250_st_enjoy_atlas_"];
	this.gotoAndStop(3);
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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.poatoes_only();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,189);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.VEG_BB();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,84,114), null);


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
	this.instance = new lib.turkey_bb();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,60.5,1,1,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-11.5,48,128.6,151.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ribbon_bb_only();
	this.instance.parent = this;
	this.instance.setTransform(32.5,134.8,1,1,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(32.5,28.4,251.5,254.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(1110.1,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAQAAANAGQAOAFAKALQAJAKAFANQAHAOgBAPQABAXgMASQgMAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_1.setTransform(1097.5,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAyIhhAAIAAAwIBIAAIAAAxIhIAAIAAAwIBhAAIAAAyg");
	this.shape_2.setTransform(1079.2,63.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_3.setTransform(1060.8,63.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_4.setTransform(1042.5,63.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_5.setTransform(1029,63.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQANAFAKALQAKAKAGANQAFAOABAPIAABhQgBAQgFAOQgGANgKAKQgKAKgNAFQgOAGgPAAgAgYBJIAYAAQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_6.setTransform(1015.6,63.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgFgOAAgQIAwAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgNgFQgOgGgKgJQgKgKgFgNQgFgNAAgQQAAgQAFgNQAFgNAKgKQAKgLAOgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAFANQAHANgBAQIgxAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAQAAANAGQANAFALALQAJAJAFANQAHAOgBAPQABAPgHAOQgFANgJALQgLAKgNAFQgNAGgQAAQgPAAgNgGg");
	this.shape_7.setTransform(1128.2,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAYB7IgKgyIgcAAIgKAyIgxAAIAxj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_8.setTransform(1111.1,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AAxB7IAAh7IgZB7IgvAAIgah7IAAB7IgwAAIAAj1IBKAAIAXB6IAYh6IBKAAIAAD1g");
	this.shape_9.setTransform(1090.5,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_10.setTransform(1070.9,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgcB1QgOgFgKgKQgJgKgGgNQgFgOgBgQIAxAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgNgFQgOgGgKgJQgJgKgGgNQgFgNgBgQQABgQAFgNQAGgNAJgKQAKgLAOgFQANgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFANAAAQIgxAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQANAFAKALQAKAJAGANQAFAOAAAPQAAAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgNgGg");
	this.shape_11.setTransform(1053.7,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_12.setTransform(1040.4,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAPAAAOAGQAOAFAKALQAJAKAFANQAHANgBAQQABAXgMASQgMAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_13.setTransform(1027.2,28.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AAYB7IAAhiIgwAAIAABiIgwAAIAAj1IAwAAIAABiIAwAAIAAhiIAxAAIAAD1g");
	this.shape_14.setTransform(1009.1,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgLgKgFgNQgGgOAAgQIAAhhQAAgQAGgNQAFgNALgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHANAAAQIgyAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAyAAQAAAQgHAOQgFANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_15.setTransform(991.9,28.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_16.setTransform(853.9,73.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAyIhhAAIAAAwIBJAAIAAAxIhJAAIAAAwIBhAAIAAAyg");
	this.shape_17.setTransform(841.3,63.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_18.setTransform(823,63.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_19.setTransform(809.5,63.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADDIBJAAIAAAyg");
	this.shape_20.setTransform(797.3,63.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_21.setTransform(780.2,63.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgGgOABgQIAAhhQgBgPAGgOQAFgNAKgKQALgLANgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAFANQAHAOgBAPIAABhQABAQgHAOQgFANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_22.setTransform(761.8,63.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAQAAANAGQAOAFAKALQAJAKAFANQAHAOgBAPQABAXgMASQgMAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_23.setTransform(736.6,63.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAyIhhAAIAAAwIBIAAIAAAxIhIAAIAAAwIBhAAIAAAyg");
	this.shape_24.setTransform(718.3,63.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAQAAANAGQANAFAKALQAKAKAGANQAFAOAAAPIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAgAgYBJIAYAAQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_25.setTransform(699.9,63.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgxAAIAAj1IBJAAQAPAAAOAGQANAFAKALQAKAKAGANQAFAOAAAPQAAAXgMASQgLAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_26.setTransform(681.6,63.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgNQgFgOgBgQIAAhhQABgPAFgOQAGgNAKgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFAOABAPIAABhQgBAQgFAOQgGANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_27.setTransform(663.2,63.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_28.setTransform(867.1,38.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAxIBIAAIAAAxIhIAAIAAAwIBhAAIAAAyg");
	this.shape_29.setTransform(854.5,28.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAQAAANAGQANAFALALQAJAKAGANQAFANAAAQQABAXgMASQgMAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_30.setTransform(836.2,28.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgJgKgGgNQgFgOAAgQIAAhhQAAgQAFgNQAGgNAJgKQALgLANgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAGANQAFANAAAQIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAhhQAAgLgHgGQgHgIgKAAQgKAAgHAIg");
	this.shape_31.setTransform(817.8,28.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_32.setTransform(800.7,28.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgLgKgFgNQgGgOABgQIAwAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgOgFQgNgGgJgJQgLgKgFgNQgGgNABgQQgBgQAGgNQAFgNALgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHANAAAQIgyAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQANAFALALQAJAJAFANQAHAOAAAPQAAAPgHAOQgFANgJALQgLAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_33.setTransform(782.3,28.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AhIB7IAAj1ICSAAIAAAxIhiAAIAAAxIBIAAIAAAxIhIAAIAAAwIBiAAIAAAyg");
	this.shape_34.setTransform(757.1,28.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AAYB7IAAhiIgwAAIAABiIgwAAIAAj1IAwAAIAABiIAwAAIAAhiIAxAAIAAD1g");
	this.shape_35.setTransform(738.8,28.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_36.setTransform(720.4,28.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAQAAANAGQAOAFAKALQAJAKAFANQAHANgBAQQABAQgHANQgFANgJAKQgKAJgOAGQgNAFgQABIgYAAIAABigAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_37.setTransform(695.2,28.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_38.setTransform(681.7,28.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAxAAIgxB6IAxB7gAhIB7IAAj1IAwAAIAAB6IAAB7g");
	this.shape_39.setTransform(668.3,28.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgFgOgBgQIAxAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgNgFQgOgGgKgJQgKgKgFgNQgFgNgBgQQABgQAFgNQAFgNAKgKQAKgLAOgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAGANQAFANAAAQIgxAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAQAAANAGQANAFALALQAJAJAGANQAFAOAAAPQAAAPgFAOQgGANgJALQgLAKgNAFQgNAGgQAAQgPAAgNgGg");
	this.shape_40.setTransform(650,28.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_41.setTransform(508.7,85.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AgdB1QgMgFgKgKQgLgKgFgOQgGgNAAgQIAxAAQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKQAAgKgHgHQgHgIgKAAQgPAAgOgFQgNgFgJgKQgLgJgFgOQgGgNAAgQQAAgQAGgNQAFgNALgLQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKALAFANQAHANAAAQIgyAAQAAgKgHgIQgHgHgKAAQgKAAgHAHQgHAIAAAKQAAAKAHAIQAHAGAKABQAPgBAOAGQAOAFAJALQAKAJAFANQAHANAAAQQAAAPgHAOQgFANgKALQgJAKgOAFQgOAGgPAAQgPAAgOgGg");
	this.shape_42.setTransform(497.4,75.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAxAAIgxB6IAAB7g");
	this.shape_43.setTransform(480.2,75.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AAYB7IgKgxIgcAAIgKAxIgxAAIAxj1IAwAAIAyD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_44.setTransform(463.1,75.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAQAAANAGQAOAFAKAKQAJALAFANQAHANgBAQIAABhQABAQgHANQgFAOgJAKQgKAKgOAFQgNAGgQAAgAgYBKIAYAAQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgHgKAAIgYAAg");
	this.shape_45.setTransform(445.9,75.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_46.setTransform(433.6,75.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_47.setTransform(422.6,75.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgQAFgNQAGgNAKgLQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKALAGANQAFANABAQIAABhQgBAQgFANQgGAOgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgHgKAAQgKAAgHAHg");
	this.shape_48.setTransform(406.7,75.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_49.setTransform(389.6,75.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBJAAIAAAvIhJAAIAAAyIBiAAIAAAxg");
	this.shape_50.setTransform(529.1,40.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_51.setTransform(512,40.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_52.setTransform(494.8,40.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAxAAIgxB6IAAB7g");
	this.shape_53.setTransform(472,40.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgQAFgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQIAABhQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_54.setTransform(454.9,40.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#063928").s().p("AgcB2QgNgGgLgKQgKgKgFgOQgGgNABgQIAwAAQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAirIAxAAIAACrQABAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgNgFg");
	this.shape_55.setTransform(437.7,40.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_56.setTransform(420.6,40.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#063928").s().p("AhIB7IAAj1ICSAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAyIBiAAIAAAxg");
	this.shape_57.setTransform(403.4,40.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgQAFgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQIAABhQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_58.setTransform(380.6,40.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_59.setTransform(363.5,40.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_60.setTransform(500.6,5.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#063928").s().p("AAxB7IAAh7IgZB7IgvAAIgZh7IAAB7IgxAAIAAj1IBKAAIAXB6IAYh6IBKAAIAAD1g");
	this.shape_61.setTransform(481,5.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_62.setTransform(466.2,5.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_63.setTransform(454,5.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAyIBiAAIAAAxg");
	this.shape_64.setTransform(431.2,5.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAxAAIgxB6IAxB7gAhIB7IAAj1IAwAAIAAB6IAAB7gAgYAAg");
	this.shape_65.setTransform(414.1,5.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_66.setTransform(401.8,5.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_67.setTransform(390.8,5.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_68.setTransform(189.1,104.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADEIBJAAIAAAxg");
	this.shape_69.setTransform(177.8,94);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#063928").s().p("AAYB7IgKgxIgcAAIgKAxIgxAAIAxj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_70.setTransform(160.7,94);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_71.setTransform(147.2,94);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#063928").s().p("AgdB1QgMgFgKgKQgLgKgFgOQgGgNAAgQIAAhhQAAgQAGgNQAFgNALgLQAKgKAMgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKALAFANQAHANAAAQIgyAAQAAgKgHgIQgHgHgKAAQgKAAgHAHQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAyAAQAAAQgHANQgFAOgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_72.setTransform(133.8,94);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#063928").s().p("AhIB7IAAj1ICSAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAyIBiAAIAAAxg");
	this.shape_73.setTransform(115.4,94);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQAOAFAKAKQAJALAFANQAHANAAAQQAAAQgHANQgFAOgJAJQgKAKgOAFQgOAFgPAAIgYAAIAABjgAgYgXIAYAAQAKgBAHgGQAHgIAAgKQAAgKgHgIQgHgHgKAAIgYAAg");
	this.shape_74.setTransform(97.1,94);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgOQgGgNABgQIAwAAQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKQAAgKgHgHQgHgIgKAAQgPAAgNgFQgOgFgKgKQgKgJgFgOQgGgNABgQQgBgQAGgNQAFgNAKgLQAKgKAOgFQANgGAPAAQAQAAANAGQANAFAKAKQAKALAFANQAHANgBAQIgxAAQAAgKgHgIQgHgHgKAAQgKAAgHAHQgHAIAAAKQAAAKAHAIQAHAGAKABQAQgBANAGQAOAFAKAKQAJAKAFANQAHANgBAQQABAPgHAOQgFANgJALQgKAKgOAFQgNAGgQAAQgPAAgNgGg");
	this.shape_75.setTransform(78.7,94);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAAhhQAAgQAGgNQAFgOALgKQAKgKAMgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAgZIgYAAIAAgvIBKAAIAABIQAAAQgHANQgFAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_76.setTransform(200.8,59);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_77.setTransform(182.5,59);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_78.setTransform(169,59);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_79.setTransform(155.6,59);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_80.setTransform(138.4,59);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#063928").s().p("AhIB7IAAj1ICSAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAyIBiAAIAAAxg");
	this.shape_81.setTransform(121.3,59);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#063928").s().p("AAxB7IAAh7IgZB7IgvAAIgah7IAAB7IgwAAIAAj1IBKAAIAXB6IAYh6IBKAAIAAD1g");
	this.shape_82.setTransform(100.5,59);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgGgNAAgQIAAhhQAAgQAGgNQAGgOAKgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAGAOQAFANABAQIAABhQgBAQgFANQgGAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_83.setTransform(79.7,59);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAxAAQAAAKAHAIQAHAGAKABQAKgBAHgGQAHgIAAgKQAAgKgHgIQgHgHgKAAQgPABgOgGQgNgFgJgKQgLgKgFgNQgGgNAAgQQAAgQAGgNQAFgOALgKQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKAKAFAOQAHANAAAQIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAPgBAOAGQAOAFAJAKQAKAKAFANQAHANAAAQQAAAQgHANQgFAOgKAKQgJAJgOAHQgOAFgPAAQgPAAgOgFg");
	this.shape_84.setTransform(61.3,59);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAyIBIAAIAAAvIhIAAIAABjg");
	this.shape_85.setTransform(224.4,24);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#063928").s().p("Ag8B7IAAj1IAxAAIAADEIBIAAIAAAxg");
	this.shape_86.setTransform(207.3,24);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_87.setTransform(190.2,24);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAxAAQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKQAAgKgHgIQgHgGgKgBQgPABgOgGQgNgFgJgLQgKgJgGgNQgFgNgBgQQABgPAFgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOABAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKQAAAKAHAHQAHAIAKAAQAPAAAOAFQANAFAKAKQAKAJAGAOQAFANABAQQgBAQgFANQgGAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_88.setTransform(171.8,24);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAGAJAJQAKAKAFAOQAGAOABAPQAAAXgNASQgLARgTAIIArBpgAgYgXIAYAAQAKAAAHgIQAHgHAAgKQAAgKgHgIQgHgGgKgBIgYAAg");
	this.shape_89.setTransform(153.5,24);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#063928").s().p("AgdB2QgMgGgKgKQgLgKgFgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAirIAyAAIAACrQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFg");
	this.shape_90.setTransform(135.1,24);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgLgKgFgOQgGgNABgQIAAhhQgBgPAGgOQAFgOALgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAFAOQAHAOAAAPIAABhQAAAQgHANQgFAOgKAKQgKAKgNAGQgOAFgPAAQgPAAgOgFgAgRhCQgHAIAAAKIAABhQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAhhQAAgKgHgIQgHgGgKgBQgKABgHAGg");
	this.shape_91.setTransform(116.8,24);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAxAAIgxB6IAAB7g");
	this.shape_92.setTransform(98.4,24);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_93.setTransform(73.2,24);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAyIBhAAIAAAxg");
	this.shape_94.setTransform(56.1,24);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#063928").s().p("AgdB2QgNgGgJgKQgKgKgGgOQgFgNgBgQIAAhhQABgPAFgOQAGgOAKgKQAJgJANgGQAOgGAPAAQAPAAAOAGQANAGAKAJQAKAKAGAOQAFAOABAPIgyAAQAAgKgHgIQgHgGgKgBQgKABgHAGQgHAIAAAKIAABhQAAAKAHAIQAHAHAKAAQAKAAAHgHQAHgIAAgKIAAgZIgYAAIAAgvIBKAAIAABIQgBAQgFANQgGAOgKAKQgKAJgNAHQgOAFgPAAQgPAAgOgFg");
	this.shape_95.setTransform(37.7,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(27.1,-10.4,1112.8,127.5), null);


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
(lib._300x250_st_enjoy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ctatxt
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({alpha:1},10).wait(168).to({regX:40.7,regY:-330.4,scaleX:1,scaleY:1,x:149.1,y:221.3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:221.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:149,y:220.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:220.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:148.9,y:220.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:219.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:219.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:148.8},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:628.3},0).wait(1).to({regX:40.7,regY:-330.4,scaleX:1.19,scaleY:1.19,x:148.8,y:219.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:148.9,y:220.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149,y:221},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:221.2},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(2));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({_off:false},0).to({alpha:1},10).wait(173).to({regY:-326.8,scaleX:1,scaleY:1,y:220.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:220.9},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:221},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:221.1},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:630.3},0).wait(1).to({regY:-326.8,scaleX:1.19,scaleY:1.19,x:149.5,y:221.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:221},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:220.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:220.8},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(2));

	// Layer_1
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-61.9,168,1,1,-30,0,0,42,57);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).wait(1).to({x:-61.7,y:167.9},0).wait(1).to({rotation:-29.8,x:-61.4,y:167.5},0).wait(1).to({rotation:-29.5,x:-60.6,y:166.9},0).wait(1).to({rotation:-29.1,x:-59.4,y:165.8},0).wait(1).to({rotation:-28.4,x:-57.7,y:164.3},0).wait(1).to({rotation:-27.5,x:-55.2,y:162.2},0).wait(1).to({rotation:-26.3,x:-51.9,y:159.2},0).wait(1).to({rotation:-24.5,x:-47.3,y:155.3},0).wait(1).to({rotation:-22.2,x:-41.2,y:149.9},0).wait(1).to({rotation:-19.3,x:-33.3,y:143},0).wait(1).to({rotation:-15.9,x:-24.2,y:135},0).wait(1).to({rotation:-12.6,x:-15.4,y:127.4},0).wait(1).to({rotation:-9.8,x:-8,y:120.8},0).wait(1).to({rotation:-7.6,x:-2.1,y:115.6},0).wait(1).to({rotation:-5.8,x:2.6,y:111.6},0).wait(1).to({rotation:-4.4,x:6.2,y:108.4},0).wait(1).to({rotation:-3.3,x:9.2,y:105.8},0).wait(1).to({rotation:-2.5,x:11.5,y:103.8},0).wait(1).to({rotation:-1.8,x:13.4,y:102.1},0).wait(1).to({rotation:-1.2,x:14.8,y:100.9},0).wait(1).to({rotation:-0.8,x:15.9,y:99.9},0).wait(1).to({rotation:-0.5,x:16.8,y:99.2},0).wait(1).to({rotation:-0.3,x:17.4,y:98.6},0).wait(1).to({rotation:-0.1,x:17.8,y:98.2},0).wait(1).to({rotation:0,x:18,y:98.1},0).wait(1).to({x:18.1,y:98},0).wait(193));

	// Layer_4
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(100.5,271.5,1,1,0,0,0,85.5,94.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({_off:false},0).wait(1).to({x:100.3,y:271.3},0).wait(1).to({x:99.5,y:270.6},0).wait(1).to({x:98,y:269.2},0).wait(1).to({x:95.6,y:266.9},0).wait(1).to({x:91.9,y:263.4},0).wait(1).to({x:86.3,y:258.2},0).wait(1).to({x:78.1,y:250.4},0).wait(1).to({x:66.8,y:239.8},0).wait(1).to({x:54.4,y:228.2},0).wait(1).to({x:44,y:218.3},0).wait(1).to({x:36.1,y:211},0).wait(1).to({x:30.4,y:205.6},0).wait(1).to({x:26.2,y:201.6},0).wait(1).to({x:23,y:198.7},0).wait(1).to({x:20.7,y:196.5},0).wait(1).to({x:19,y:194.9},0).wait(1).to({x:17.9,y:193.8},0).wait(1).to({x:17.1,y:193.1},0).wait(1).to({x:16.7,y:192.7},0).wait(1).to({x:16.5,y:192.6},0).wait(199));

	// Layer 6
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-103.9,329.3,1,1,-30,0,0,89.5,133.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:158.2,regY:155.6,rotation:-26.1,x:-22,y:310.7},0).wait(1).to({rotation:-21.2,x:-8,y:306.7},0).wait(1).to({rotation:-14.9,x:9.1,y:301.6},0).wait(1).to({rotation:-6.8,x:29.8,y:294.9},0).wait(1).to({rotation:2.9,x:52.7,y:286.6},0).wait(1).to({rotation:12.8,x:74.1,y:277.3},0).wait(1).to({rotation:21.3,x:90.9,y:268.5},0).wait(1).to({rotation:27.9,x:103.2,y:261},0).wait(1).to({rotation:33.1,x:112.4,y:254.6},0).wait(1).to({rotation:37.2,x:119.3,y:249.2},0).wait(1).to({rotation:40.4,x:124.7,y:244.7},0).wait(1).to({rotation:43.1,x:129,y:241},0).wait(1).to({rotation:45.2,x:132.5,y:237.8},0).wait(1).to({rotation:47,x:135.3,y:235},0).wait(1).to({rotation:48.5,x:137.5,y:232.8},0).wait(1).to({rotation:49.7,x:139.4,y:230.8},0).wait(1).to({rotation:50.6,x:140.9,y:229.3},0).wait(1).to({rotation:51.4,x:142.1,y:228},0).wait(1).to({rotation:52.1,x:143.1,y:227.1},0).wait(1).to({rotation:52.5,x:143.8,y:226.2},0).wait(1).to({rotation:52.9,x:144.3,y:225.7},0).wait(1).to({rotation:53.1,x:144.7,y:225.3},0).wait(1).to({rotation:53.3,x:144.9,y:225.1},0).wait(1).to({regX:89.4,regY:133.6,x:121.7,y:156.8},0).wait(63).to({regX:89.2,regY:133.7,rotation:33.2,x:-30.5,y:148.9},23).wait(196));

	// Layer 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(442.2,368.8,1,1,-45,0,0,67.5,174.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).wait(1).to({regX:52.8,regY:123.8,rotation:-42.6,x:388.3,y:335.4},0).wait(1).to({rotation:-39.5,x:378.7,y:325.3},0).wait(1).to({rotation:-35.6,x:366.7,y:312.7},0).wait(1).to({rotation:-30.5,x:351.6,y:296.7},0).wait(1).to({rotation:-24.5,x:333.8,y:277.9},0).wait(1).to({rotation:-18.3,x:316.1,y:259.1},0).wait(1).to({rotation:-13,x:301.3,y:243.5},0).wait(1).to({rotation:-8.9,x:289.7,y:231.5},0).wait(1).to({rotation:-5.7,x:280.8,y:222.3},0).wait(1).to({rotation:-3.1,x:273.8,y:215.2},0).wait(1).to({rotation:-1.1,x:268.3,y:209.6},0).wait(1).to({rotation:0.6,x:263.8,y:205.1},0).wait(1).to({rotation:1.9,x:260.2,y:201.4},0).wait(1).to({rotation:3,x:257.2,y:198.5},0).wait(1).to({rotation:3.9,x:254.8,y:196},0).wait(1).to({rotation:4.7,x:252.7,y:194},0).wait(1).to({rotation:5.3,x:251,y:192.4},0).wait(1).to({rotation:5.8,x:249.8,y:191.1},0).wait(1).to({rotation:6.2,x:248.7,y:190.1},0).wait(1).to({rotation:6.5,x:247.8,y:189.2},0).wait(1).to({rotation:6.7,x:247.3,y:188.7},0).wait(1).to({rotation:6.9,x:246.9,y:188.3},0).wait(1).to({x:246.6,y:188.1},0).wait(1).to({regX:67.6,regY:174.6,rotation:7,x:255.1,y:240.1},0).wait(195));

	// Layer 2
	this.instance_6 = new lib.Symbol1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(67).to({regX:582.9,regY:49.7,x:600.7,y:69.4},0).wait(1).to({x:599},0).wait(1).to({x:595.8},0).wait(1).to({x:590.7},0).wait(1).to({x:583.1},0).wait(1).to({x:572.3},0).wait(1).to({x:556.7},0).wait(1).to({x:533.9,y:69.3},0).wait(1).to({x:499.3},0).wait(1).to({x:449.5},0).wait(1).to({x:397.1,y:69.2},0).wait(1).to({x:359.4},0).wait(1).to({x:334.6,y:69.1},0).wait(1).to({x:317.8},0).wait(1).to({x:306.3},0).wait(1).to({x:298.4},0).wait(1).to({x:293.1},0).wait(1).to({x:289.7},0).wait(1).to({regX:131.7,regY:89,x:-163.3,y:108.4},0).wait(55).to({regX:582.9,regY:49.7,x:287,y:69.1},0).wait(1).to({x:284},0).wait(1).to({x:278.5},0).wait(1).to({x:269.6},0).wait(1).to({x:256.4},0).wait(1).to({x:237.4},0).wait(1).to({x:211},0).wait(1).to({x:176.3},0).wait(1).to({x:135.8},0).wait(1).to({x:96.8},0).wait(1).to({x:64.7},0).wait(1).to({x:40.3},0).wait(1).to({x:22.2},0).wait(1).to({x:9},0).wait(1).to({x:-0.5},0).wait(1).to({x:-7},0).wait(1).to({x:-11.1},0).wait(1).to({x:-13.4},0).wait(1).to({regX:131.7,regY:89,x:-465.3,y:108.4},0).wait(53).to({regX:582.9,regY:49.7,x:-14.9,y:69.1},0).wait(1).to({x:-17.7},0).wait(1).to({x:-22.8},0).wait(1).to({x:-30.8},0).wait(1).to({x:-42.7},0).wait(1).to({x:-59.5},0).wait(1).to({x:-82.8},0).wait(1).to({x:-113.8},0).wait(1).to({x:-151.7},0).wait(1).to({x:-191.5},0).wait(1).to({x:-226.8},0).wait(1).to({x:-254.9},0).wait(1).to({x:-276.3},0).wait(1).to({x:-292.3},0).wait(1).to({x:-304.1},0).wait(1).to({x:-312.6},0).wait(1).to({x:-318.5},0).wait(1).to({x:-322.4},0).wait(1).to({x:-324.5},0).wait(1).to({regX:131.7,regY:89,x:-776.3,y:108.4},0).wait(55));

	// logo
	this.instance_7 = new lib.logo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.1,159.5,0.656,0.656,0,0,0,110.6,61.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(103).to({_off:false},0).to({alpha:1},10).wait(194));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(307));

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
		{src:"images/300x250_st_enjoy_atlas_.png", id:"300x250_st_enjoy_atlas_"}
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