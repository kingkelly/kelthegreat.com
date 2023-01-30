(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_longos_rare_atlas_", frames: [[286,327,138,142],[0,0,442,325],[0,707,234,210],[0,327,284,378]]}
];


// symbols:



(lib.CAB_new_logo = function() {
	this.spriteSheet = ss["300x250_longos_rare_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ribeye = function() {
	this.spriteSheet = ss["300x250_longos_rare_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["300x250_longos_rare_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["300x250_longos_rare_atlas_"];
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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CAB_new_logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,138,142), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYApIgSgmIgGgMIgDAMIgTAmIgCAAIgehQIASAAIAMAgIAEAOIACgFIADgJIAPghIABAAIARAhIAEAOIAFgOIALggIARAAIgdBQg");
	this.shape.setTransform(67.5,-118.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_1.setTransform(56.9,-118.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgApIgogmIgKgKIACAOIAAAiIgRAAIAAhRIACAAIApAmIAJAKIgBgNIAAgiIAPAAIAABQg");
	this.shape_2.setTransform(47.9,-118.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIAcAAQANAAAHAHQAKAHgBANQABANgKAHQgHAHgNAAIgMAAIAAAbgAgMAAIAMAAQANAAgBgNQABgMgNAAIgMAAg");
	this.shape_3.setTransform(37.7,-118.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_4.setTransform(29,-118.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARApIAAggIghAAIAAAgIgRAAIAAhRIARAAIAAAjIAhAAIAAgjIARAAIAABRg");
	this.shape_5.setTransform(20,-118.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAZIANgIQAHAKAJAAQAFAAADgCQADgDAAgDQAAgEgDgDIgJgEIgDgCQgKgFgFgEQgFgGAAgKQAAgJAGgGQAHgHAKAAQARAAAHAOIgNAIQgEgHgHAAQgCAAgDACQgCACAAADQAAAEADACQACACAFACIAEACQALAFAFAEQAGAHAAAJQAAAMgIAGQgHAGgNAAQgVAAgIgRg");
	this.shape_6.setTransform(12.4,-118.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AmzB0IAAjnINnAAIAADng");
	this.shape_7.setTransform(41.4,-119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-2.1,-131.5,87.1,23.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(361,-412,0.455,0.455,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(160,-412,201,147.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(-26.4,-416.8,0.288,0.288,0,0,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-108.2,-416.8,81.8,108.9), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgQARQgHgHAAgKQAAgKAHgGQAIgHAIABQAKgBAHAHQAHAGAAAKQAAAKgHAHQgHAGgKABQgIgBgIgGg");
	this.shape.setTransform(66.7,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AAXBRIgng7IgNARIAAAqIgsAAIAAiiIAsAAIAABEIAxhEIAwAAIg2BHIA8Bbg");
	this.shape_1.setTransform(55.9,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("ABGBUIhmhUIAABRIgoAAIAAikQAAgBAAAAQAAgBAAAAQABAAAAABQABAAABABIBmBTIAAhRIAoAAIAAClQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgCgCg");
	this.shape_2.setTransform(38.3,55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AgVBRIAAiiIArAAIAACig");
	this.shape_3.setTransform(25.9,55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AAdBRIAAg/Ig4AAIAAA/IgsAAIAAiiIAsAAIAAA/IA4AAIAAg/IArAAIAACig");
	this.shape_4.setTransform(13.6,55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AgVBRIAAh9IgrAAIAAglICBAAIAAAlIgrAAIAAB9g");
	this.shape_5.setTransform(-2,55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AgyBCQgUgRAAggIAAhjIAsAAIAABjQAAAdAaAAQAbAAAAgdIAAhjIAsAAIAABjQAAAggUARQgTARggAAQgfAAgTgRg");
	this.shape_6.setTransform(104.4,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("Ag8A8QgbgYAAgkQAAgkAbgYQAZgWAjAAQAkAAAaAWQAaAYAAAkQAAAkgaAYQgaAXgkAAQgjAAgZgXgAgfgfQgLAMAAATQAAAUALANQAMANATAAQAUAAAMgNQALgNAAgUQAAgTgLgMQgMgNgUgBQgTABgMANg");
	this.shape_7.setTransform(86.7,29);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AgUBRIAAg/Ig6hjIAwAAIAfA8IAhg8IAtAAIg4BiIAABAg");
	this.shape_8.setTransform(69.6,29);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("ABGBVIhlhVIAABRIgqAAIAAikQAAgBABAAQAAgBAAAAQABAAAAABQABAAABABIBlBTIAAhRIAqAAIAAClQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAgBAAIgCgBg");
	this.shape_9.setTransform(47.3,29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_10.setTransform(30.4,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AAdBRIAAhAIg4AAIAABAIgsAAIAAiiIAsAAIAAA/IA4AAIAAg/IArAAIAACig");
	this.shape_11.setTransform(13.6,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AgVBRIAAh9IgrAAIAAglICBAAIAAAlIgrAAIAAB9g");
	this.shape_12.setTransform(-2,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E52527").s().p("AAUBRIgbgyIgQAAIAAAyIgsAAIAAiiIBCAAQAeABASAPQAQAQAAAaQAAAhgeAOIAiA5gAgXgCIAUAAQAXAAAAgVQAAgUgXgBIgUAAg");
	this.shape_13.setTransform(87,3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_14.setTransform(72.3,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E52527").s().p("AAUBRIgbgyIgPAAIAAAyIgtAAIAAiiIBCAAQAeABASAPQAQAQAAAaQAAAhgeAOIAiA5gAgWgCIATAAQAXAAAAgVQAAgUgXgBIgTAAg");
	this.shape_15.setTransform(57.6,3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_16.setTransform(41.3,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E52527").s().p("AAUBRIgcgyIgOAAIAAAyIgsAAIAAiiIBBAAQAeABARAPQARAQAAAaQAAAhgdAOIAiA5gAgWgCIAUAAQAVAAAAgVQAAgUgVgBIgUAAg");
	this.shape_17.setTransform(25.8,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E52527").s().p("AhAA1IAggXQAOARATAAQAVAAAAgNQAAgIgQgFIgTgHQgogNAAgjQAAgXARgOQAPgMAWAAQAmAAASAWIgZAaQgLgMgRAAQgPAAAAALQAAAJALADIAVAIQAYAHAKAMQAKALAAASQAAAYgPANQgQAPgfAAQgsAAgXgfg");
	this.shape_18.setTransform(4.8,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E52527").s().p("AgVBRIAAiiIArAAIAACig");
	this.shape_19.setTransform(-5.4,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E52527").s().p("Ag3BRIAAiiIBuAAIAAAlIhBAAIAAAhIA6AAIAAAkIg6AAIAAA4g");
	this.shape_20.setTransform(123.6,-23);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_21.setTransform(110.1,-23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E52527").s().p("Ag6BRIAAiiIByAAIAAAlIhGAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_22.setTransform(96.2,-23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E52527").s().p("AhBBRIAAiiIBGAAQAZAAAPALQAOAMAAATQAAAbgXAJQAdAHAAAeQAAAXgPAMQgQAMgfAAgAgWAvIAZAAQATAAAAgRQAAgQgTAAIgZAAgAgWgRIAWAAQAQAAAAgOQAAgPgQgBIgWAAg");
	this.shape_23.setTransform(81.7,-23);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E52527").s().p("AgVBRIAAh9IgrAAIAAglICBAAIAAAlIgrAAIAAB9g");
	this.shape_24.setTransform(60.9,-23);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_25.setTransform(45.7,-23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E52527").s().p("Ag6BRIAAiiIByAAIAAAlIhGAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_26.setTransform(31,-23);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E52527").s().p("AAUBRIgbgyIgQAAIAAAyIgsAAIAAiiIBCAAQAeAAASAQQAQAQAAAaQAAAhgeANIAiA6gAgXgCIAUAAQAXAAAAgVQAAgUgXgBIgUAAg");
	this.shape_27.setTransform(16.3,-23);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E52527").s().p("Ag1A8QgZgXAAglQAAgkAZgXQAagYAiAAQArAAAXAdIgfAbQgNgSgXAAQgRAAgMAOQgLAMABATQAAAUALANQALAOAUAAQASAAAOgGIAAgRIghAAIAAghIBHAAIAABGQgaAWgtABQgjgBgagXg");
	this.shape_28.setTransform(-0.5,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-11.1,-35.6,257.1,106), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgQARQgHgHAAgKQAAgKAHgGQAIgGAIAAQAKAAAHAGQAHAGAAAKQAAAKgHAHQgHAGgKAAQgIAAgIgGg");
	this.shape.setTransform(82.6,92.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhAA1IAggXQAOARATAAQAVAAAAgNQAAgIgQgFIgTgHQgogNAAgjQAAgXARgOQAPgMAWAAQAmAAASAWIgZAaQgLgMgRAAQgPAAAAALQAAAJALADIAVAIQAYAHAKAMQAKALAAASQAAAYgPANQgQAPgfAAQgsAAgXgfg");
	this.shape_1.setTransform(72.3,86.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AgUBRIAAg/Ig6hjIAwAAIAfA8IAhg8IAtAAIg5BiIAABAg");
	this.shape_2.setTransform(58,86.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_3.setTransform(42.1,86.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AhIBRIAAiiIA/AAQAjAAAXAWQAYAXAAAkQAAAlgYAXQgXAVgjAAgAgcAsIAOAAQATABAMgMQALgNAAgUQAAgUgLgLQgMgMgTgBIgOAAg");
	this.shape_4.setTransform(26.2,86.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AgJBRIAAh9IgYAAIAAglIBDAAIAACig");
	this.shape_5.setTransform(6.7,86.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("Ag+BSQgEABADgEIBGhLQAQgSAAgMQAAgJgFgEQgFgGgJABQgJgBgGAIQgHAGgCAMIgngMQAFgYARgOQARgNAZABQAagBARAOQARAOAAAYQAAAZgaAcIgXAYIAxAAIAAAjg");
	this.shape_6.setTransform(-4.4,86.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AhIBRIAAiiIA/AAQAkABAWAVQAYAXAAAkQAAAlgYAXQgWAWgkgBgAgcAsIAPAAQASABALgMQAMgNAAgUQAAgUgMgLQgLgNgSAAIgPAAg");
	this.shape_7.setTransform(133.8,60.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_8.setTransform(118.5,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("Ag1A8QgZgYAAgkQAAgkAZgXQAagXAiAAQArgBAXAdIgfAbQgNgSgXAAQgRABgMANQgLAMABATQAAAUALANQALAOAUAAQASAAAOgGIAAgRIghAAIAAghIBHAAIAABGQgaAWgtABQgjAAgagYg");
	this.shape_9.setTransform(102.5,60.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_10.setTransform(85.8,60.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AhAA1IAggXQAOARATAAQAVAAAAgNQAAgIgQgFIgTgHQgogNAAgjQAAgXARgOQAPgMAWAAQAmAAASAWIgZAaQgLgMgRAAQgPAAAAALQAAAJALADIAVAIQAYAHAKAMQAKALAAASQAAAYgPANQgQAPgfAAQgsAAgXgfg");
	this.shape_11.setTransform(64.8,60.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AgVBRIAAiiIArAAIAACig");
	this.shape_12.setTransform(54.6,60.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E52527").s().p("Ag3BRIAAiiIBuAAIAAAlIhBAAIAAAhIA5AAIAAAkIg5AAIAAA4g");
	this.shape_13.setTransform(38.9,60.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_14.setTransform(25.4,60.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_15.setTransform(11.5,60.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E52527").s().p("AhBBRIAAiiIBGAAQAZAAAPALQAOALAAAVQAAAagXAJQAdAHABAeQAAAXgQAMQgRAMgeAAgAgWAvIAZAAQATAAAAgRQAAgQgTAAIgZAAgAgWgRIAWAAQAQAAAAgOQAAgPgQgBIgWAAg");
	this.shape_16.setTransform(-3,60.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_17.setTransform(116.9,34.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_18.setTransform(100.6,34.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_19.setTransform(84.3,34.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E52527").s().p("AhAA1IAggXQAOARATAAQAVAAAAgNQAAgIgQgFIgTgHQgogNAAgjQAAgXARgOQAPgMAWAAQAmAAASAWIgZAaQgLgMgRAAQgPAAAAALQAAAJALADIAVAIQAYAHAKAMQAKALAAASQAAAYgPANQgQAPgfAAQgsAAgXgfg");
	this.shape_20.setTransform(63.3,34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E52527").s().p("AgyBCQgUgRAAggIAAhjIAsAAIAABjQAAAdAaAAQAbAAAAgdIAAhjIAsAAIAABjQAAAggUARQgTARggAAQgfAAgTgRg");
	this.shape_21.setTransform(48.4,34.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E52527").s().p("Ag0A8QgbgXAAglQAAgkAbgXQAZgYAjAAQArAAAWAdIgeAbQgOgSgWAAQgSAAgMAOQgLAMAAATQAAAUALANQANAOATAAQATAAAMgGIAAgRIgfAAIAAghIBHAAIAABGQgbAWgsABQgkgBgZgXg");
	this.shape_22.setTransform(31.4,34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E52527").s().p("ABGBVIhlhVIAABRIgqAAIAAikQAAgBABAAQAAgBAAAAQABAAAAABQABAAABABIBlBTIAAhRIAqAAIAAClQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAgBAAIgCgBg");
	this.shape_23.setTransform(14.1,34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_24.setTransform(-2.8,34.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E52527").s().p("AhIBSIAAijIA/AAQAkABAWAVQAYAWAAAlQAAAlgYAWQgWAXgkAAgAgcAsIAPAAQASAAALgMQAMgLAAgVQAAgUgMgLQgLgMgSAAIgPAAg");
	this.shape_25.setTransform(99.5,8.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E52527").s().p("Ag6BSIAAijIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAlg");
	this.shape_26.setTransform(84.2,8.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E52527").s().p("AgVBSIAAijIArAAIAACjg");
	this.shape_27.setTransform(73.3,8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E52527").s().p("Ag2BSIAAijIBtAAIAAAlIhBAAIAAAhIA5AAIAAAkIg5AAIAAA5g");
	this.shape_28.setTransform(63.3,8.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E52527").s().p("AgVBSIAAijIArAAIAACjg");
	this.shape_29.setTransform(52.7,8.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E52527").s().p("AgVBSIAAh+IgrAAIAAglICBAAIAAAlIgrAAIAAB+g");
	this.shape_30.setTransform(42,8.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E52527").s().p("AAUBSIgbgzIgQAAIAAAzIgsAAIAAijIBCAAQAeAAASAQQAQAQAAAaQAAAhgeANIAiA7gAgXgCIAUAAQAXAAAAgVQAAgUgXAAIgUAAg");
	this.shape_31.setTransform(27.6,8.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E52527").s().p("Ag6BSIAAijIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAlg");
	this.shape_32.setTransform(12.9,8.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E52527").s().p("Ag0A8QgagYAAgkQAAgjAZgYQAYgYAiAAQAuABAYAiIghAXQgNgUgYAAQgRAAgKAOQgLAMAAATQAAATALANQALAOASAAQAaAAAMgXIAiAWQgXAngxAAQgjgBgYgXg");
	this.shape_33.setTransform(-2.5,8.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E52527").s().p("AAUBSIgcg0IgOAAIAAA0IgsAAIAAiiIBBAAQAeAAARAPQARARAAAZQAAAhgdANIAiA7gAgWgCIAUAAQAVAAAAgVQAAgUgVAAIgUAAg");
	this.shape_34.setTransform(32.6,-17.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E52527").s().p("AgyBCQgUgRAAggIAAhjIAsAAIAABjQAAAdAaAAQAbAAAAgdIAAhjIAsAAIAABjQAAAggUARQgTARggAAQgfAAgTgRg");
	this.shape_35.setTransform(16.1,-17.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E52527").s().p("Ag8A8QgbgYAAgkQAAgkAbgXQAZgYAjAAQAkAAAaAYQAaAXAAAkQAAAkgaAYQgaAYgkAAQgjAAgZgYgAgfggQgLANAAATQAAAUALAMQAMAOATAAQAUAAAMgOQALgMAAgUQAAgTgLgNQgMgMgUAAQgTAAgMAMg");
	this.shape_36.setTransform(-1.6,-17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-13,-30,219.6,132), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(126.9,-445,0.32,0.32,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(52,-445,74.9,67.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2722").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIANgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgJgJgAgQgQQgHAHAAAJQAAALAHAHQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgIgJAAQgKAAgHAIgAAIARIgDgIQgBgFgEAAIgEAAIAAAMIgHAAIAAgeIALgBQAHAAAEACQADACAAAFQAAAGgHABIAAAAQAEABACAHIACAIgAgEAAIAEAAQAGAAAAgFQABgFgHABIgEAAg");
	this.shape.setTransform(242.4,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(204.1,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(228.2,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(119.3,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,245.6,84.5), null);


(lib.Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAgIgBgCIAAgYIgUgiIAAgCIABgCIACAAIADABIAQAfIARgfIADgBIACAAIABACIAAACIgUAiIAAAYIgBACIgCABIgBgBg");
	this.shape.setTransform(2.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Y, new cjs.Rectangle(-2,-3.2,10.2,14.8), null);


(lib.V = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAhQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgSg7QAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIADAAIABACIAQA2IARg2IABgCIADAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIgSA7QgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(2.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.V, new cjs.Rectangle(-2,-3.2,10.2,14.8), null);


(lib.RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgSAhQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAg7IABgCIADgBIAOAAQANAAAHAJQAHAJAAAOQAAAPgHAJQgIAJgMAAgAgQAbIAMAAQAKAAAGgIQAFgIAAgLQAAgLgFgHQgGgIgKAAIgMAAg");
	this.shape.setTransform(16.1,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AgRAhIgCgBIgBgCIAAg7IABgDIACAAIAjAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABIgBACIgDABIggAAIAAAYIAXAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBACIgDABIgXAAIAAAYIAgAAIADABIABACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_1.setTransform(9.7,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AAPAgIgPgdIgPAAIAAAbIAAACIgCABIgDgBIgBgCIAAg7IABgCIADgBIAVAAQAHAAAGAFQAFAFAAAIQAAAHgEAFQgFAEgGABIAOAaIAAACIgBACIgCAAIgDgBgAgPgCIATAAQAFAAADgEQADgDAAgFQAAgFgDgDQgDgEgFAAIgTAAg");
	this.shape_2.setTransform(3.4,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RED, new cjs.Rectangle(-2,-3.2,23.3,14.8), null);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgRAhIgCgBIgBgCIAAg7IABgDIACAAIAjAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABIgCACIgCABIggAAIAAAYIAXAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgCACIgCABIgXAAIAAAYIAgAAIACABIACACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape.setTransform(3.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.E, new cjs.Rectangle(-2,-3.2,10.4,14.8), null);


(lib.DELI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAgIgBgCIAAg7IABgCIABgBQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAA7QAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgBgBg");
	this.shape.setTransform(20,4.5);

	this.text = new cjs.Text(" ", "9px 'GroceryGateway'", "#18423B");
	this.text.lineHeight = 13;
	this.text.parent = this;
	this.text.setTransform(18.5,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AgQAhQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAg7QAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIACABIABACIAAA4IAeAAIADABIABACIgBACIgDABg");
	this.shape_1.setTransform(15.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AgRAhIgCgBIgCgCIAAg7IACgDIACAAIAjAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIgBACIgCABIggAAIAAAYIAXAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIgBACIgCABIgXAAIAAAYIAgAAIACABIABACQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_2.setTransform(9.8,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgSAhQgBAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAg7IABgCIADgBIAOAAQANAAAHAJQAHAJAAAOQAAAPgHAJQgIAJgMAAgAgQAbIAMAAQAKAAAGgIQAFgIAAgLQAAgLgFgHQgGgIgKAAIgMAAg");
	this.shape_3.setTransform(3.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DELI, new cjs.Rectangle(-2,-3.2,28.7,14.8), null);


(lib.B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgRAhQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAg7IABgCIADgBIATAAQAJAAAFAEQAGAFAAAJQAAAKgIAEQAIAFAAAKQAAAJgFAFQgGAEgJAAgAgOAbIAQAAQAOAAAAgMQAAgMgOAAIgQAAgAgOgCIAQAAQAFAAAEgDQAFgDAAgGQAAgMgOAAIgQAAg");
	this.shape.setTransform(3.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.B, new cjs.Rectangle(-2,-3.2,10.6,14.8), null);


(lib.gg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GG_hor_svg
	this.instance = new lib.Y();
	this.instance.parent = this;
	this.instance.setTransform(69.8,-86.9,1,1,0,0,0,3.1,4.2);

	this.instance_1 = new lib.B();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64,-86.9,1,1,0,0,0,3.3,4.2);

	this.instance_2 = new lib.RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(46.3,-86.9,1,1,0,0,0,9.6,4.2);

	this.instance_3 = new lib.E();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33.9,-86.9,1,1,0,0,0,3.2,4.2);

	this.instance_4 = new lib.V();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27.8,-86.9,1,1,0,0,0,3.1,4.2);

	this.instance_5 = new lib.DELI();
	this.instance_5.parent = this;
	this.instance_5.setTransform(13,-86.9,1,1,0,0,0,12.3,4.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgLA8IAAg8IgXg7IAXAAIALAfIAMgfIAXAAIgXA7IAAA8g");
	this.shape.setTransform(94.2,-68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AAMA8IgGgYIgMAAIgFAYIgXAAIAXh3IAXAAIAXB3gAgCAMIAEAAIgCgMg");
	this.shape_1.setTransform(86.2,-68.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AAKA8IgKg8IgLA8IgVAAIgWh3IAWAAIALA7IAKg7IAVAAIAMA7IALg7IAWAAIgWB3g");
	this.shape_2.setTransform(76.2,-68.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgiA8IAAh3IBFAAIAAAZIguAAIAAAXIAiAAIAAAXIgiAAIAAAYIAuAAIAAAYg");
	this.shape_3.setTransform(66.2,-68.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18423B").s().p("AgLA8IAAheIgXAAIAAgZIBFAAIAAAZIgYAAIAABeg");
	this.shape_4.setTransform(57.2,-68.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18423B").s().p("AAMA8IgGgYIgMAAIgFAYIgXAAIAXh3IAXAAIAXB3gAgCAMIAEAAIgCgMg");
	this.shape_5.setTransform(50.2,-68.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18423B").s().p("AgNA5QgHgDgEgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAEgEAHgDQAGgDAHAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHIgXAAQAAgFgEgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAvQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFIAAgMIgMAAIAAgXIAjAAIAAAjQAAAIgDAGQgCAGgGAGQgEAEgGADQgFADgJAAQgIAAgFgDg");
	this.shape_6.setTransform(41.2,-68.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AgLA8IAAg8IgXg7IAXAAIALAfIALgfIAYAAIgYA7IAAA8g");
	this.shape_7.setTransform(29.2,-68.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18423B").s().p("AALA8IgRgwIgFAAIAAAwIgXAAIAAh3IAiAAQAHAAAHADQAGADAFAEQAFAGACAGQADAHAAAHQAAALgGAJQgFAIgJAEIAUAzgAgLgLIALAAQAFAAADgEQADgDAAgFQAAgFgDgEQgDgCgFAAIgLAAg");
	this.shape_8.setTransform(21.2,-68.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18423B").s().p("AgiA8IAAh3IBFAAIAAAZIguAAIAAAXIAiAAIAAAXIgiAAIAAAYIAuAAIAAAYg");
	this.shape_9.setTransform(12.2,-68.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18423B").s().p("AgNA5QgGgDgFgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAFgEAGgDQAGgDAHAAQAHAAAHADQAGADAFAEQAFAGACAGQADAHAAAHIgXAAQAAgFgEgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAvQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFIAXAAQAAAIgDAGQgCAGgFAGQgFAEgGADQgGADgIAAQgIAAgFgDg");
	this.shape_10.setTransform(4.2,-68.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18423B").s().p("AgNA5QgHgDgEgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAEgEAHgDQAGgDAHAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHIAAAvQAAAIgDAGQgCAGgGAGQgEAEgGADQgGADgIAAQgIAAgFgDgAgIgfQgDADAAAFIAAAvQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFIAAgvQAAgFgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_11.setTransform(-4.8,-68.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18423B").s().p("AAMA8IgSgwIgFAAIAAAwIgXAAIAAh3IAiAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHQAAAMgGAIQgFAIgKAEIAVAzgAgLgLIALAAQAFAAADgEQAEgDAAgFQAAgFgEgEQgDgCgFAAIgLAAg");
	this.shape_12.setTransform(-12.8,-68.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18423B").s().p("AgNA5QgHgDgEgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAEgEAHgDQAGgDAHAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHIgXAAQAAgFgEgDQgDgDgFAAQgFAAgDADQgDADAAAFIAAAvQAAAFADADQADAEAFAAQAFAAADgEQAEgDAAgFIAAgMIgMAAIAAgXIAjAAIAAAjQAAAIgDAGQgCAGgGAGQgEAEgGADQgFADgJAAQgIAAgFgDg");
	this.shape_13.setTransform(-21.8,-68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gg, new cjs.Rectangle(-25.3,-94.3,123,32), null);


// stage content:
(lib._300x250_longos_rare = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(69.1,33.8,0.403,0.403,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(232));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299,566.3,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({x:201.8,y:616},41,cjs.Ease.quartOut).wait(175));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(652.9,-71.2,1,1,-75,0,0,45.5,60.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:437.5},41,cjs.Ease.quartOut).wait(180));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(688.1,375.2,1,1,-55,0,0,126,92.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({regY:92.6,rotation:0,x:151,y:487.6},41,cjs.Ease.quartOut).wait(180));

	// Layer_1
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(266,214,0.269,0.269,0,0,0,69.4,71.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(-1)).wait(62).to({alpha:0},18).wait(108));

	// Layer_10
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27.4,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(146).to({_off:false},0).to({x:92.6,alpha:1},33,cjs.Ease.quartInOut).wait(53));

	// GG_stack_svg
	this.instance_6 = new lib.gg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-27.7,298.9,1,1,0,0,0,45.3,29.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(143).to({_off:false},0).to({x:92.3,alpha:1},33,cjs.Ease.quartInOut).wait(56));

	// Layer_4
	this.instance_7 = new lib.Symbol1copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-92.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({x:157.7},41,cjs.Ease.quartInOut).wait(82));

	// text1
	this.instance_8 = new lib.Symbol1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-137.7,213.3,1,1,0,0,0,128.5,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:157.7},40,cjs.Ease.quintOut).wait(65).to({x:437.7,alpha:0},35,cjs.Ease.quartInOut).to({_off:true},1).wait(91));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(232));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,125,579.2,250);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_longos_rare_atlas_.png", id:"300x250_longos_rare_atlas_"}
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
an.compositions['A8C478718CAB45E28846BC16F88772FB'] = {
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