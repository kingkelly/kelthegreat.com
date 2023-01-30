(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_st_pass_atlas_", frames: [[116,0,105,98],[0,142,155,91],[0,0,114,140],[157,100,84,114]]}
];


// symbols:



(lib.potates_bb = function() {
	this.spriteSheet = ss["300x250_st_pass_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.top_bb = function() {
	this.spriteSheet = ss["300x250_st_pass_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.turkey_bb = function() {
	this.spriteSheet = ss["300x250_st_pass_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.VEG_BB = function() {
	this.spriteSheet = ss["300x250_st_pass_atlas_"];
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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.top_bb();
	this.instance.parent = this;
	this.instance.setTransform(8,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(8,57,155,91), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(214.5,172.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAPAAAOAGQAOAGAKAKQAJAJAFAOQAHAOgBAPQABAXgMASQgMARgTAIIAqBpgAgYgYIAYAAQAKABAHgIQAHgGAAgLQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_1.setTransform(201.9,162);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgGgOABgQIAAhhQgBgPAGgOQAFgOAKgJQALgKANgGQANgGAPAAQAQAAANAGQANAGAKAKQAKAJAFAOQAHAOgBAPIAABhQABAQgHAOQgFANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_2.setTransform(183.6,162);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgFgOAAgQIAAhhQAAgPAFgOQAFgOAKgJQALgKANgGQANgGAPAAQAQAAANAGQANAGAKAKQAKAJAGAOQAFAOAAAPIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_3.setTransform(165.2,162);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAQAAANAGQANAGAKAKQAKAJAGAOQAFAOAAAPIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAgAgYBJIAYAAQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_4.setTransform(146.9,162);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgYB7IAAjDIgxAAIAAgyICSAAIAAAyIgxAAIAADDg");
	this.shape_5.setTransform(121.7,162);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_6.setTransform(103.3,162);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgNQgFgOgBgQIAAhhQABgPAFgOQAGgOAKgJQAJgKANgGQAOgGAPAAQAPAAAOAGQANAGAKAKQAKAJAGAOQAFAOABAPIAABhQgBAQgFAOQgGANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_7.setTransform(85,162);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAPAAAOAGQAOAGAKAKQAJAJAFAOQAHAOAAAPQAAAXgMASQgMARgTAIIArBpgAgYgYIAYAAQAKABAHgIQAHgGAAgLQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_8.setTransform(67.8,162);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAyIhhAAIAAAwIBIAAIAAAxIhIAAIAABig");
	this.shape_9.setTransform(49.5,162);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAQAAANAGQANAFALALQAJAKAGANQAFAOAAAPQABAXgMASQgMAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_10.setTransform(247.6,127);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgJgKgGgNQgFgOgBgQIAAirIAxAAIAACrQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAirIAxAAIAACrQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGg");
	this.shape_11.setTransform(229.2,127);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgdB1QgNgFgKgKQgJgKgGgNQgFgOgBgQIAAhhQABgPAFgOQAGgNAJgKQAKgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFAOAAAPIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_12.setTransform(210.9,127);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAyAAIgyB6IAAB7g");
	this.shape_13.setTransform(194.7,127);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgGgOABgQIAAhhQgBgPAGgOQAFgNAKgKQALgLANgFQANgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHAOgBAPIAABhQABAQgHAOQgFANgKAKQgKAKgNAFQgOAGgPAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_14.setTransform(169.5,127);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AgYB7IAAjDIgxAAIAAgyICSAAIAAAyIgxAAIAADDg");
	this.shape_15.setTransform(152.4,127);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AgdB1QgNgFgKgKQgJgKgGgNQgFgOgBgQIAAhhQABgPAFgOQAGgNAJgKQAKgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFAOAAAPIgxAAQAAgLgHgGQgHgIgKABQgKgBgHAIQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAgYIgYAAIAAgxIBJAAIAABJQAAAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_16.setTransform(127.2,127);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_17.setTransform(108.8,127);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_18.setTransform(95.3,127);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAyIhiAAIAAAwIBJAAIAAAxIhJAAIAABig");
	this.shape_19.setTransform(81.9,127);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAyIhiAAIAAAwIBJAAIAAAxIhJAAIAABig");
	this.shape_20.setTransform(63.6,127);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AgdB1QgMgFgKgKQgLgKgFgNQgGgOABgQIAAirIAwAAIAACrQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAirIAyAAIAACrQAAAQgHAOQgFANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_21.setTransform(45.2,127);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AgYB7IAAjDIgwAAIAAgyICSAAIAAAyIgyAAIAADDg");
	this.shape_22.setTransform(26.9,127);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgNQgFgOgBgQIAxAAQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLQAAgLgHgGQgHgIgKABQgPgBgOgFQgNgGgJgKQgKgIgGgOQgFgNgBgQQABgPAFgOQAGgNAKgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFAOABAPIgyAAQAAgLgHgGQgHgIgKABQgKgBgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQANAGAKAKQAKAIAGAOQAFAOABAPQgBAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_23.setTransform(10.7,127);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQANAFAKALQAKAKAGANQAFANAAAQIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgOAGgPAAgAgYBJIAYAAQAKAAAHgGQAHgIAAgKIAAhhQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_24.setTransform(224.4,92);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_25.setTransform(206,92);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAYB7IgKgyIgcAAIgKAyIgxAAIAxj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_26.setTransform(187.7,92);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AgKAmIAHgmIgPAAIAAglIAlAAIAAAUIgWA3g");
	this.shape_27.setTransform(168.1,104.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AgcB1QgNgFgKgKQgLgKgFgNQgGgOABgQIAwAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgNgFQgOgGgJgJQgLgKgFgNQgGgNABgQQgBgQAGgNQAFgNALgKQAJgLAOgFQANgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHANgBAQIgxAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQAOAFAKALQAJAJAFANQAHAOgBAPQABAPgHAOQgFANgJALQgKAKgOAFQgOAGgPAAQgPAAgNgGg");
	this.shape_28.setTransform(155.6,92);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAxIhhAAIAAAxIBIAAIAAAxIhIAAIAAAwIBhAAIAAAyg");
	this.shape_29.setTransform(137.2,92);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgFgOAAgQIAAhhQAAgQAFgNQAFgNAKgKQALgLANgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAGANQAFANAAAQIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAhhQAAgLgHgGQgHgIgKAAQgKAAgHAIg");
	this.shape_30.setTransform(118.9,92);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_31.setTransform(101.7,92);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AAYB7IgJgyIgdAAIgKAyIgwAAIAwj1IAwAAIAxD1gAAFAYIgFgYIgEAYIAJAAg");
	this.shape_32.setTransform(85.6,92);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_33.setTransform(69.4,92);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgFgOAAgQIAAhhQAAgQAFgNQAFgNAKgKQALgLANgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAGANQAFANAAAQIAABhQAAAQgFAOQgGANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAhhQAAgLgHgGQgHgIgKAAQgKAAgHAIg");
	this.shape_34.setTransform(52.3,92);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAQAAANAGQANAFAKALQAKAKAGANQAFANAAAQQAAAQgFANQgGANgKAKQgKAJgNAGQgNAFgQABIgYAAIAABigAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_35.setTransform(33.9,92);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgKAmIAHgmIgPAAIAAglIAlAAIAAAUIgWA3g");
	this.shape_36.setTransform(252.3,69.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AgYB7IAAh7Igwh6IAwAAIAYA+IAYg+IAyAAIgyB6IAAB7g");
	this.shape_37.setTransform(239.7,57);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAyIBJAAIAAAvIhJAAIAAAxIBhAAIAAAyg");
	this.shape_38.setTransform(222.6,57);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAyAAIgyB6IAyB7gAhJB7IAAj1IAxAAIAAB6IAAB7g");
	this.shape_39.setTransform(204.2,57);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AAYB7IgmhjIgKAAIAABjIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJAKQAKALAFANQAGANABAQQAAAYgNARQgLAQgTAJIArBpgAgYgXIAYAAQAKgBAHgGQAHgIAAgKQAAgKgHgHQgHgIgKAAIgYAAg");
	this.shape_40.setTransform(185.9,57);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgdB1QgMgFgKgKQgLgKgFgOQgGgNAAgQIAAirIAxAAIAACrQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAirIAyAAIAACrQAAAQgHANQgFAOgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_41.setTransform(167.5,57);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICSAAIAAAxIgyAAIAADEg");
	this.shape_42.setTransform(149.2,57);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AhIB7IAAj1ICSAAIAAAxIhiAAIAAAyIBIAAIAAAvIhIAAIAAAxIBiAAIAAAyg");
	this.shape_43.setTransform(124,57);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#063928").s().p("AAYB7IAAhjIgwAAIAABjIgwAAIAAj1IAwAAIAABjIAwAAIAAhjIAxAAIAAD1g");
	this.shape_44.setTransform(105.6,57);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#063928").s().p("AgYB7IAAjEIgwAAIAAgxICRAAIAAAxIgxAAIAADEg");
	this.shape_45.setTransform(87.3,57);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgOQgGgNABgQIAwAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAQgPAAgNgFQgOgGgKgJQgKgJgFgOQgGgNABgQQgBgQAGgNQAFgNAKgLQAKgKAOgFQANgGAPAAQAQAAANAGQANAFAKAKQAKALAFANQAHANgBAQIgxAAQAAgKgHgHQgHgIgKAAQgKAAgHAIQgHAHAAAKQAAAKAHAIQAHAGAKABQAQgBANAGQAOAFAKALQAJAJAFANQAHANgBAQQABAPgHAOQgFANgJALQgKAKgOAFQgNAGgQAAQgPAAgNgGg");
	this.shape_46.setTransform(62.1,57);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgOQgFgNgBgQIAxAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAQgPAAgOgFQgNgGgJgJQgKgJgGgOQgFgNgBgQQABgQAFgNQAGgNAKgLQAJgKANgFQAOgGAPAAQAPAAAOAGQANAFAKAKQAKALAGANQAFANABAQIgyAAQAAgKgHgHQgHgIgKAAQgKAAgHAIQgHAHAAAKQAAAKAHAIQAHAGAKABQAPgBAOAGQANAFAKALQAKAJAGANQAFANABAQQgBAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_47.setTransform(44.9,57);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#063928").s().p("AAYB7IgKgyIgcAAIgKAyIgwAAIAwj1IAwAAIAxD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_48.setTransform(27.8,57);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQANAFAKAKQAKALAGANQAFANABAQQgBAQgFANQgGAOgKAJQgKAJgNAGQgOAFgPAAIgYAAIAABjgAgYgXIAYAAQAKgBAHgGQAHgIAAgKQAAgKgHgHQgHgIgKAAIgYAAg");
	this.shape_49.setTransform(11.6,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,41,259.4,144), null);


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
	this.instance = new lib.potates_bb();
	this.instance.parent = this;
	this.instance.setTransform(82.1,62.5,0.999,0.999,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(45.4,62.5,134,130.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(800.1,73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJALQAKAKAGANQAFAOABAPQAAAXgNASQgLAQgTAJIArBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_1.setTransform(787.5,63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAyIhiAAIAAAwIBJAAIAAAxIhJAAIAAAwIBiAAIAAAyg");
	this.shape_2.setTransform(769.2,63.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_3.setTransform(750.8,63.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_4.setTransform(732.5,63.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_5.setTransform(719,63.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAQAAANAGQAOAFAKALQAJAKAFANQAHAOgBAPIAABhQABAQgHAOQgFANgJAKQgKAKgOAFQgNAGgQAAgAgYBJIAYAAQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_6.setTransform(705.6,63.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgNQgGgOAAgQIAAhhQAAgQAGgNQAGgNAKgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFANABAQIgyAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAgYIgYAAIAAgxIBKAAIAABJQgBAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_7.setTransform(837,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_8.setTransform(818.7,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_9.setTransform(805.2,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AgYB7Igwj1IAwAAIAYB6IAYh6IAyAAIgyD1g");
	this.shape_10.setTransform(791.8,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_11.setTransform(779.5,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgJgKgGgNQgFgOAAgQIAAhhQAAgQAFgNQAGgNAJgKQALgLANgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAGANQAFANAAAQIgxAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAgYIgYAAIAAgxIBJAAIAABJQAAAPgFAOQgGANgKALQgKAKgNAFQgNAGgQAAQgPAAgNgGg");
	this.shape_12.setTransform(766.1,28.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgLgKgFgNQgGgOAAgQIAxAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgOgFQgNgGgJgJQgLgKgFgNQgGgNAAgQQAAgQAGgNQAFgNALgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHANAAAQIgyAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQAOAFAJALQAKAJAFANQAHAOAAAPQAAAPgHAOQgFANgKALQgJAKgOAFQgOAGgPAAQgPAAgOgGg");
	this.shape_13.setTransform(748.9,28.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAxAAIgxB6IAxB7gAhJB7IAAj1IAxAAIAAB6IAAB7gAgYAAg");
	this.shape_14.setTransform(732.8,28.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_15.setTransform(714.4,28.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AAYB7IgKgyIgcAAIgKAyIgwAAIAwj1IAwAAIAyD1gAAEAYIgEgYIgEAYIAIAAg");
	this.shape_16.setTransform(697.3,28.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AAYB7IAAhiIgwAAIAABiIgxAAIAAj1IAxAAIAABiIAwAAIAAhiIAxAAIAAD1g");
	this.shape_17.setTransform(680.1,28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_18.setTransform(663,28.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_19.setTransform(543.9,73.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AhIB7IAAj1ICRAAIAAAyIhhAAIAAAwIBIAAIAAAxIhIAAIAAAwIBhAAIAAAyg");
	this.shape_20.setTransform(531.3,63.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgwAAIAAj1IAwAAIAwB6IAAh6IAxAAIAAD1g");
	this.shape_21.setTransform(513,63.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_22.setTransform(499.5,63.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("Ag8B7IAAj1IAwAAIAADDIBJAAIAAAyg");
	this.shape_23.setTransform(487.3,63.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AAYB7Igwh7IAAB7IgxAAIAAj1IAxAAIAwB6IAAh6IAyAAIAAD1g");
	this.shape_24.setTransform(470.2,63.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AgdB1QgNgFgJgKQgKgKgGgNQgGgOAAgQIAAhhQAAgPAGgOQAGgNAKgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAGAOABAPIAABhQgBAQgGAOQgFANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_25.setTransform(451.8,63.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJALQAKAKAGANQAFAOABAPQAAAXgNASQgLAQgTAJIArBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_26.setTransform(426.6,63.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAyIhiAAIAAAwIBJAAIAAAxIhJAAIAAAwIBiAAIAAAyg");
	this.shape_27.setTransform(408.3,63.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#063928").s().p("AhIB7IAAj1IBIAAQAPAAAOAGQANAFALALQAJAKAFANQAHAOAAAPIAABhQAAAQgHAOQgFANgJAKQgLAKgNAFQgOAGgPAAgAgYBJIAYAAQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_28.setTransform(389.9,63.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgwAAIAAj1IBIAAQAPAAAOAGQAOAFAKALQAJAKAFANQAHAOgBAPQABAXgMASQgMAQgTAJIAqBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABIgYAAg");
	this.shape_29.setTransform(371.6,63.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#063928").s().p("AgcB1QgNgFgLgKQgKgKgFgNQgGgOABgQIAAhhQgBgPAGgOQAFgNAKgKQALgLANgFQANgGAPAAQAQAAANAGQANAFAKALQAKAKAFANQAHAOgBAPIAABhQABAQgHAOQgFANgKAKQgKAKgNAFQgNAGgQAAQgPAAgNgGgAgRhBQgHAGAAALIAABhQAAALAHAGQAHAIAKgBQAKABAHgIQAHgGAAgLIAAhhQAAgLgHgGQgHgIgKABQgKgBgHAIg");
	this.shape_30.setTransform(353.2,63.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#063928").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape_31.setTransform(557.1,38.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#063928").s().p("AhJB7IAAj1ICTAAIAAAxIhiAAIAAAxIBJAAIAAAxIhJAAIAAAwIBiAAIAAAyg");
	this.shape_32.setTransform(544.5,28.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#063928").s().p("AAYB7IgmhiIgKAAIAABiIgxAAIAAj1IBJAAQAPAAAOAGQAOAFAJALQAKAKAFANQAHANAAAQQgBAXgMASQgLAQgTAJIArBpgAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_33.setTransform(526.2,28.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#063928").s().p("AgdB1QgMgFgKgKQgLgKgFgNQgGgOABgQIAAhhQgBgQAGgNQAFgNALgKQAKgLAMgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHANAAAQIAABhQAAAQgHAOQgFANgKAKQgKAKgNAFQgOAGgPAAQgPAAgOgGgAgRhBQgHAGAAALIAABhQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKIAAhhQAAgLgHgGQgHgIgKAAQgKAAgHAIg");
	this.shape_34.setTransform(507.8,28.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICSAAIAAAxIgxAAIAADEg");
	this.shape_35.setTransform(490.7,28.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#063928").s().p("AgcB1QgOgFgKgKQgJgKgGgNQgFgOgBgQIAxAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgNgFQgOgGgKgJQgJgKgGgNQgFgNgBgQQABgQAFgNQAGgNAJgKQAKgLAOgFQANgGAPAAQAPAAAOAGQANAFAKALQAKAKAGANQAFANAAAQIgxAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQANAFAKALQAKAJAGANQAFAOAAAPQAAAPgFAOQgGANgKALQgKAKgNAFQgOAGgPAAQgPAAgNgGg");
	this.shape_36.setTransform(472.3,28.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#063928").s().p("AhJB7IAAj1ICSAAIAAAxIhhAAIAAAxIBJAAIAAAxIhJAAIAAAwIBhAAIAAAyg");
	this.shape_37.setTransform(447.1,28.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#063928").s().p("AAYB7IAAhiIgwAAIAABiIgxAAIAAj1IAxAAIAABiIAwAAIAAhiIAyAAIAAD1g");
	this.shape_38.setTransform(428.8,28.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#063928").s().p("AgYB7IAAjEIgxAAIAAgxICTAAIAAAxIgyAAIAADEg");
	this.shape_39.setTransform(410.4,28.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#063928").s().p("AhJB7IAAj1IBJAAQAPAAAOAGQAOAFAJALQAKAKAFANQAGANABAQQgBAQgGANQgFANgKAKQgJAJgOAGQgOAFgPABIgYAAIAABigAgYgYIAYAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKAAIgYAAg");
	this.shape_40.setTransform(385.2,28.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#063928").s().p("AgXB7IAAj1IAvAAIAAD1g");
	this.shape_41.setTransform(371.7,28.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#063928").s().p("AAYB7Igwh7IAwh6IAyAAIgyB6IAyB7gAhJB7IAAj1IAxAAIAAB6IAAB7gAgYAAg");
	this.shape_42.setTransform(358.3,28.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#063928").s().p("AgdB1QgMgFgKgKQgLgKgFgNQgGgOABgQIAwAAQAAAKAHAIQAHAGAKAAQAKAAAHgGQAHgIAAgKQAAgLgHgGQgHgIgKABQgPgBgOgFQgNgGgJgJQgLgKgFgNQgGgNABgQQgBgQAGgNQAFgNALgKQAJgLANgFQAOgGAPAAQAPAAAOAGQANAFAKALQAKAKAFANQAHANAAAQIgyAAQAAgLgHgGQgHgIgKAAQgKAAgHAIQgHAGAAALQAAAKAHAIQAHAGAKAAQAPAAAOAGQANAFALALQAJAJAFANQAHAOAAAPQAAAPgHAOQgFANgJALQgLAKgNAFQgOAGgPAAQgPAAgOgGg");
	this.shape_43.setTransform(340,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(329.3,12.6,519.6,74), null);


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
(lib._300x250_st_pass = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ctatxt
	this.instance = new lib.ctatext();
	this.instance.parent = this;
	this.instance.setTransform(150.4,561.9,1,1,0,0,0,42,10.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130).to({_off:false},0).to({alpha:1},10).wait(105).to({regX:40.7,regY:-330.4,scaleX:1,scaleY:1,x:149.1,y:221.3},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:221.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:149,y:220.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:220.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:148.9,y:220.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:219.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:219.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:148.8},0).wait(1).to({regX:42.1,regY:10.1,scaleX:1.2,scaleY:1.2,x:150.5,y:628.3},0).wait(1).to({regX:40.7,regY:-330.4,scaleX:1.19,scaleY:1.19,x:148.8,y:219.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:148.9,y:220.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149,y:221},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:221.2},0).wait(1).to({regX:42,regY:10.1,scaleX:1,scaleY:1,x:150.4,y:561.9},0).wait(1));

	// cta
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,561.8,1,1,0,0,0,50.4,14.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).to({alpha:1},10).wait(108).to({regY:-326.8,scaleX:1,scaleY:1,y:220.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:220.9},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:221},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:221.1},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:630.3},0).wait(1).to({regY:-326.8,scaleX:1.19,scaleY:1.19,x:149.5,y:221.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:221},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:220.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:220.8},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:561.8},0).wait(3));

	// Layer_1
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-61.9,168,1,1,-30,0,0,42,57);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).wait(1).to({x:-61.7},0).wait(1).to({rotation:-29.8,x:-61.3,y:167.7},0).wait(1).to({rotation:-29.5,x:-60.4,y:167.2},0).wait(1).to({rotation:-29.1,x:-59.1,y:166.4},0).wait(1).to({rotation:-28.4,x:-57.1,y:165.4},0).wait(1).to({rotation:-27.5,x:-54.4,y:163.8},0).wait(1).to({rotation:-26.3,x:-50.7,y:161.7},0).wait(1).to({rotation:-24.5,x:-45.5,y:158.9},0).wait(1).to({rotation:-22.2,x:-38.6,y:155.1},0).wait(1).to({rotation:-19.3,x:-29.7,y:150.2},0).wait(1).to({rotation:-15.9,x:-19.5,y:144.5},0).wait(1).to({rotation:-12.6,x:-9.6,y:139},0).wait(1).to({rotation:-9.8,x:-1.2,y:134.3},0).wait(1).to({rotation:-7.6,x:5.4,y:130.6},0).wait(1).to({rotation:-5.8,x:10.6,y:127.7},0).wait(1).to({rotation:-4.4,x:14.8,y:125.4},0).wait(1).to({rotation:-3.3,x:18.1,y:123.6},0).wait(1).to({rotation:-2.5,x:20.7,y:122.1},0).wait(1).to({rotation:-1.8,x:22.8,y:121},0).wait(1).to({rotation:-1.2,x:24.4,y:120.1},0).wait(1).to({rotation:-0.8,x:25.6,y:119.4},0).wait(1).to({rotation:-0.5,x:26.6,y:118.8},0).wait(1).to({rotation:-0.3,x:27.3,y:118.4},0).wait(1).to({rotation:-0.1,x:27.7,y:118.2},0).wait(1).to({rotation:0,x:28,y:118.1},0).wait(1).to({x:28.1,y:118},0).wait(52));

	// Layer 6
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-104.1,329.2,1,1,30,0,0,89.5,133.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({_off:false},0).wait(1).to({regX:112.3,regY:127.5,rotation:27.6,x:-74.7,y:329.4},0).wait(1).to({rotation:24.5,x:-66.5,y:321.7},0).wait(1).to({rotation:20.6,x:-55.9,y:311.9},0).wait(1).to({rotation:15.6,x:-42.7,y:299.3},0).wait(1).to({rotation:9.6,x:-26.9,y:284.2},0).wait(1).to({rotation:3.4,x:-11.2,y:268.8},0).wait(1).to({rotation:-1.8,x:2.1,y:255.8},0).wait(1).to({rotation:-5.9,x:12.3,y:245.5},0).wait(1).to({rotation:-9.2,x:20.3,y:237.5},0).wait(1).to({rotation:-11.7,x:26.4,y:231.2},0).wait(1).to({rotation:-13.7,x:31.4,y:226.3},0).wait(1).to({rotation:-15.3,x:35.4,y:222.2},0).wait(1).to({rotation:-16.7,x:38.6,y:218.9},0).wait(1).to({rotation:-17.8,x:41.2,y:216.3},0).wait(1).to({rotation:-18.7,x:43.4,y:214},0).wait(1).to({rotation:-19.4,x:45.2,y:212.2},0).wait(1).to({rotation:-20.1,x:46.7,y:210.7},0).wait(1).to({rotation:-20.5,x:47.9,y:209.5},0).wait(1).to({rotation:-20.9,x:48.8,y:208.6},0).wait(1).to({rotation:-21.2,x:49.5,y:207.9},0).wait(1).to({rotation:-21.4,x:50,y:207.3},0).wait(1).to({rotation:-21.6,x:50.3,y:207},0).wait(1).to({rotation:-21.7,x:50.6,y:206.8},0).wait(1).to({regX:89.4,regY:133.6,x:31.7,y:220.7},0).wait(126));

	// Layer 3
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(442.2,368.8,1,1,-45,0,0,67.5,174.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110).to({_off:false},0).wait(1).to({regX:52.8,regY:123.8,rotation:-42.6,x:388.3,y:335.4},0).wait(1).to({rotation:-39.5,x:378.7,y:325.3},0).wait(1).to({rotation:-35.6,x:366.7,y:312.7},0).wait(1).to({rotation:-30.5,x:351.6,y:296.7},0).wait(1).to({rotation:-24.5,x:333.8,y:277.9},0).wait(1).to({rotation:-18.3,x:316.1,y:259.1},0).wait(1).to({rotation:-13,x:301.3,y:243.5},0).wait(1).to({rotation:-8.9,x:289.7,y:231.5},0).wait(1).to({rotation:-5.7,x:280.8,y:222.3},0).wait(1).to({rotation:-3.1,x:273.8,y:215.2},0).wait(1).to({rotation:-1.1,x:268.3,y:209.6},0).wait(1).to({rotation:0.6,x:263.8,y:205.1},0).wait(1).to({rotation:1.9,x:260.2,y:201.4},0).wait(1).to({rotation:3,x:257.2,y:198.5},0).wait(1).to({rotation:3.9,x:254.8,y:196},0).wait(1).to({rotation:4.7,x:252.7,y:194},0).wait(1).to({rotation:5.3,x:251,y:192.4},0).wait(1).to({rotation:5.8,x:249.8,y:191.1},0).wait(1).to({rotation:6.2,x:248.7,y:190.1},0).wait(1).to({rotation:6.5,x:247.8,y:189.2},0).wait(1).to({rotation:6.7,x:247.3,y:188.7},0).wait(1).to({rotation:6.9,x:246.9,y:188.3},0).wait(1).to({x:246.6,y:188.1},0).wait(1).to({regX:67.6,regY:174.6,rotation:7,x:255.1,y:240.1},0).wait(126));

	// Layer_5
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(131,-92.1,1,1,45,0,0,64.3,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:85.5,regY:102.5,rotation:43.4,x:128,y:-54.3},0).wait(1).to({rotation:41.5,x:129.2,y:-49.6},0).wait(1).to({rotation:39.1,x:130.6,y:-43.6},0).wait(1).to({rotation:35.9,x:132.5,y:-35.9},0).wait(1).to({rotation:31.6,x:135.1,y:-25.6},0).wait(1).to({rotation:26.2,x:138.2,y:-12.9},0).wait(1).to({rotation:21,x:141.3,y:-0.9},0).wait(1).to({rotation:16.9,x:143.5,y:8.4},0).wait(1).to({rotation:13.8,x:145.2,y:15.2},0).wait(1).to({rotation:11.5,x:146.5,y:20.2},0).wait(1).to({rotation:9.6,x:147.4,y:24.2},0).wait(1).to({rotation:8.1,x:148.2,y:27.5},0).wait(1).to({rotation:6.9,x:148.9,y:30.1},0).wait(1).to({rotation:5.8,x:149.4,y:32.3},0).wait(1).to({rotation:4.9,x:149.8,y:34.3},0).wait(1).to({rotation:4.2,x:150.2,y:36},0).wait(1).to({rotation:3.5,x:150.5,y:37.3},0).wait(1).to({rotation:2.9,x:150.8,y:38.5},0).wait(1).to({rotation:2.4,x:151,y:39.6},0).wait(1).to({rotation:2,x:151.3,y:40.5},0).wait(1).to({rotation:1.6,x:151.4,y:41.3},0).wait(1).to({rotation:1.3,x:151.6,y:41.9},0).wait(1).to({rotation:1,x:151.7,y:42.5},0).wait(1).to({rotation:0.8,x:151.8,y:43},0).wait(1).to({rotation:0.6,x:152,y:43.4},0).wait(1).to({rotation:0.4,y:43.7},0).wait(1).to({rotation:0.3,x:152.1,y:44},0).wait(1).to({rotation:0.2,y:44.2},0).wait(1).to({rotation:0.1,x:152.2,y:44.4},0).wait(1).to({rotation:0,y:44.5},0).wait(1).to({y:44.6},0).wait(1).to({regX:64.3,regY:75.8,x:131,y:17.8},0).wait(74).to({regX:85.5,regY:102.5,x:152.2,y:44.2},0).wait(1).to({y:43.1},0).wait(1).to({y:40.9},0).wait(1).to({y:37.3},0).wait(1).to({y:31.6},0).wait(1).to({y:23},0).wait(1).to({y:10.1},0).wait(1).to({y:-6.5},0).wait(1).to({y:-22.8},0).wait(1).to({y:-35.3},0).wait(1).to({y:-44.4},0).wait(1).to({y:-51},0).wait(1).to({y:-55.8},0).wait(1).to({y:-59.3},0).wait(1).to({y:-61.8},0).wait(1).to({y:-63.5},0).wait(1).to({y:-64.6},0).wait(1).to({y:-65.3},0).wait(1).to({regX:64.3,regY:75.8,x:131,y:-92.2},0).wait(136));

	// Layer_4
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125.5,1,1,0,0,0,129.7,72);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({alpha:1},14).wait(84).to({regX:129.1,regY:109.5,x:149.4,y:163.5},0).wait(1).to({y:165.3},0).wait(1).to({y:168.6},0).wait(1).to({y:174.2},0).wait(1).to({y:183},0).wait(1).to({y:196.3},0).wait(1).to({y:216.2},0).wait(1).to({y:242},0).wait(1).to({y:267.1},0).wait(1).to({y:286.5},0).wait(1).to({y:300.5},0).wait(1).to({y:310.7},0).wait(1).to({y:318.1},0).wait(1).to({y:323.4},0).wait(1).to({y:327.3},0).wait(1).to({y:330},0).wait(1).to({y:331.8},0).wait(1).to({y:332.7},0).wait(1).to({regX:129.7,regY:72,x:150,y:295.5},0).wait(136));

	// Layer 2
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.1,108.7,1,1,0,0,0,131.7,89);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(84).to({regX:588.5,regY:46,x:606.3,y:65.7},0).wait(1).to({x:604.6},0).wait(1).to({x:601.4},0).wait(1).to({x:596.3},0).wait(1).to({x:588.7},0).wait(1).to({x:577.9},0).wait(1).to({x:562.3},0).wait(1).to({x:539.5,y:65.6},0).wait(1).to({x:504.9},0).wait(1).to({x:455.1},0).wait(1).to({x:402.7,y:65.5},0).wait(1).to({x:365},0).wait(1).to({x:340.2,y:65.4},0).wait(1).to({x:323.4},0).wait(1).to({x:311.9},0).wait(1).to({x:304},0).wait(1).to({x:298.7},0).wait(1).to({x:295.3},0).wait(1).to({regX:131.7,regY:89,x:-163.3,y:108.4},0).wait(55).to({regX:588.5,regY:46,x:292.6,y:65.4},0).wait(1).to({x:289.6},0).wait(1).to({x:284.1},0).wait(1).to({x:275.2},0).wait(1).to({x:262},0).wait(1).to({x:243},0).wait(1).to({x:216.6},0).wait(1).to({x:181.9},0).wait(1).to({x:141.4},0).wait(1).to({x:102.4},0).wait(1).to({x:70.3},0).wait(1).to({x:45.9},0).wait(1).to({x:27.8},0).wait(1).to({x:14.6},0).wait(1).to({x:5.1},0).wait(1).to({x:-1.4},0).wait(1).to({x:-5.5},0).wait(1).to({x:-7.8},0).wait(1).to({regX:131.7,regY:89,x:-465.3,y:108.4},0).wait(63));

	// logo
	this.instance_8 = new lib.logo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149.1,159.5,0.656,0.656,0,0,0,110.6,61.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120).to({_off:false},0).to({alpha:1},10).wait(130));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-20.2,300,395.3);
// library properties:
lib.properties = {
	id: '36372565E0E242689BDFA96224DEC98B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_st_pass_atlas_.png", id:"300x250_st_pass_atlas_"}
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