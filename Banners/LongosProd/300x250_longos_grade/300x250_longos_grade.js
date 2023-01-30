(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_longos_grade_atlas_", frames: [[0,0,442,325],[0,707,234,210],[0,327,284,378]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["300x250_longos_grade_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["300x250_longos_grade_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["300x250_longos_grade_atlas_"];
	this.gotoAndStop(2);
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
	this.shape.setTransform(149.2,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("Ag2BRIAAiiIBuAAIAAAlIhDAAIAAAhIA6AAIAAAkIg6AAIAAA4g");
	this.shape_1.setTransform(139.7,55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("Ag8A8QgbgYAAgkQAAgjAbgZQAZgWAjAAQAkAAAaAWQAaAZAAAjQAAAkgaAYQgaAXgkAAQgjAAgZgXgAgfggQgLANAAATQAAAUALANQAMANATAAQAUAAAMgNQALgNAAgUQAAgTgLgNQgMgNgUAAQgTAAgMANg");
	this.shape_2.setTransform(123.4,55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhIBRIAAiiIA/AAQAjAAAXAWQAYAXAAAkQAAAlgYAXQgXAVgjAAgAgcAsIAOAAQATABAMgMQALgNAAgUQAAgUgLgMQgMgLgTgBIgOAAg");
	this.shape_3.setTransform(100.4,55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AgyBCQgUgRAAggIAAhjIAsAAIAABjQAAAdAaAAQAbAAAAgdIAAhjIAsAAIAABjQAAAggUARQgTARggAAQgfAAgTgRg");
	this.shape_4.setTransform(83.4,55.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("Ag8A8QgbgYAAgkQAAgjAbgZQAZgWAjAAQAkAAAaAWQAaAZAAAjQAAAkgaAYQgaAXgkAAQgjAAgZgXgAgfggQgLANAAATQAAAUALANQAMANATAAQAUAAAMgNQALgNAAgUQAAgTgLgNQgMgNgUAAQgTAAgMANg");
	this.shape_5.setTransform(65.7,55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AAUBRIgcgzIgOAAIAAAzIgsAAIAAiiIBBAAQAeABASAQQAQAPAAAaQAAAhgeAOIAjA5gAgWgCIATAAQAXAAAAgVQAAgVgXAAIgTAAg");
	this.shape_6.setTransform(49,55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AhABRIAAiiIBBAAQAeAAASARQAQAQAAAaQAAAZgQAPQgSAQgeABIgVAAIAAAugAgUgBIAUAAQAWAAAAgVQAAgWgWAAIgUAAg");
	this.shape_7.setTransform(33.7,55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("Ag6BRIAAiiIByAAIAAAlIhGAAIAAAbIA6AAIAAAiIg6AAIAAAcIBJAAIAAAkg");
	this.shape_8.setTransform(13.4,55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhBBRIAAiiIBGAAQAZABAPAKQAOAMAAAUQAAAbgXAIQAdAHABAfQAAAWgQAMQgQAMgfAAgAgWAvIAZAAQATAAAAgRQAAgQgTAAIgZAAgAgWgRIAWAAQAQAAAAgPQAAgPgQABIgWAAg");
	this.shape_9.setTransform(-1.1,55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AhIBRIAAiiIA/AAQAjAAAXAWQAYAXAAAkQAAAlgYAXQgXAVgjAAgAgcAsIAPAAQASABALgMQAMgNAAgUQAAgUgMgLQgLgMgSgBIgPAAg");
	this.shape_10.setTransform(134.9,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("Ag4BRIAAiiIAtAAIAAB+IBEAAIAAAkg");
	this.shape_11.setTransform(120,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AgyBCQgUgRAAggIAAhjIAsAAIAABjQAAAdAaAAQAbAAAAgdIAAhjIAsAAIAABjQAAAggUARQgTARggAAQgfAAgTgRg");
	this.shape_12.setTransform(104.6,29.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E52527").s().p("Ag8A8QgbgYAAgkQAAgkAbgYQAZgWAjAAQAkAAAaAWQAaAYAAAkQAAAkgaAYQgaAXgkAAQgjAAgZgXgAgfgfQgLAMAAATQAAAUALANQAMANATAAQAUAAAMgNQALgNAAgUQAAgTgLgMQgMgNgUgBQgTABgMANg");
	this.shape_13.setTransform(86.9,29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E52527").s().p("AgqBUIhEikIAuAAIAeBMIAihQQABAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAIAlBQIAdhMIArAAIhDCkQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgphXIgnBXIgBACIgCgCg");
	this.shape_14.setTransform(66.3,28.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E52527").s().p("AAuBTIgDhFIgpAvQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgqgwIgEBGIgqAAIAJikQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIBOBXIBNhXQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIAJCkg");
	this.shape_15.setTransform(39.4,28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E52527").s().p("Ag8A8QgbgYAAgkQAAgkAbgYQAZgWAjAAQAkAAAaAWQAaAYAAAkQAAAkgaAYQgaAXgkAAQgjAAgZgXgAgfgfQgLAMAAATQAAAUALANQAMANATAAQAUAAAMgNQALgNAAgUQAAgTgLgMQgMgNgUgBQgTABgMANg");
	this.shape_16.setTransform(20.1,29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E52527").s().p("AAuBTIgDhFIgpAvQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgqgwIgEBGIgqAAIAJikQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIBOBXIBNhXQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIAJCkg");
	this.shape_17.setTransform(0.8,28.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E52527").s().p("AgUBRIAAg/Ig6hjIAwAAIAfA8IAgg8IAuAAIg4BiIAABAg");
	this.shape_18.setTransform(139.8,3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E52527").s().p("ABGBVIhmhVIAABRIgoAAIAAikQAAgBAAAAQAAgBAAAAQABAAAAABQABAAABABIBmBTIAAhRIAoAAIAAClQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgCgBg");
	this.shape_19.setTransform(123.3,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_20.setTransform(106.4,2.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E52527").s().p("Ag6BRIAAiiIByAAIAAAlIhGAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_21.setTransform(85.9,3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E52527").s().p("AhIBRIAAiiIA/AAQAkABAWAVQAYAXAAAkQAAAlgYAXQgWAWgkgBgAgcAsIAOAAQATABALgMQAMgNAAgUQAAgTgMgMQgLgNgTAAIgOAAg");
	this.shape_22.setTransform(70.8,3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_23.setTransform(53.9,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E52527").s().p("AAUBRIgcgyIgOAAIAAAyIgsAAIAAiiIBCAAQAdABARAPQARAQAAAaQAAAhgdAOIAiA5gAgWgCIAUAAQAVAAAAgVQAAgUgVgBIgUAAg");
	this.shape_24.setTransform(38.4,3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E52527").s().p("Ag1A8QgagYAAgkQAAgkAagXQAZgYAkAAQAqAAAXAdIgeAbQgOgSgWAAQgTABgLANQgLAMAAATQABAUAKANQANAOATAAQASAAANgGIAAgRIgfAAIAAghIBHAAIAABGQgcAWgrABQgkAAgagYg");
	this.shape_25.setTransform(21.6,3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_26.setTransform(-0.9,2.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E52527").s().p("AgPARQgIgHAAgKQAAgJAIgHQAGgGAJgBQAKABAHAGQAHAHAAAJQAAAKgHAHQgHAGgKAAQgJAAgGgGg");
	this.shape_27.setTransform(105,-17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E52527").s().p("Ag2BRIAAiiIBtAAIAAAlIhBAAIAAAhIA5AAIAAAkIg5AAIAAA4g");
	this.shape_28.setTransform(95.5,-23);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_29.setTransform(82,-23);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E52527").s().p("Ag6BRIAAiiIBxAAIAAAlIhFAAIAAAbIA6AAIAAAhIg6AAIAAAdIBJAAIAAAkg");
	this.shape_30.setTransform(68.1,-23);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E52527").s().p("AhBBRIAAiiIBGAAQAZAAAOALQAPAMAAATQAAAbgXAJQAdAHABAeQAAAXgQAMQgRAMgdAAgAgWAvIAZAAQATAAAAgRQAAgQgTAAIgZAAgAgWgRIAWAAQAQAAAAgOQAAgPgQgBIgWAAg");
	this.shape_31.setTransform(53.6,-23);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_32.setTransform(31.7,-23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_33.setTransform(15.4,-23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E52527").s().p("AAkBUIgJgUIg4AAIgIAUIgrAAIBQilQAAgBAAAAQAAgBAAAAQABAAAAABQAAAAABABIBPClgAANAgIgOghIgOAhIAcAAg");
	this.shape_34.setTransform(-0.9,-23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-11.1,-35.6,257.1,106), null);


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
(lib._300x250_longos_grade = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(69.1,33.8,0.403,0.403,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299,566.3,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:201.8,y:616},41,cjs.Ease.quartOut).wait(28));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(652.9,-71.2,1,1,-75,0,0,45.5,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:437.5},41,cjs.Ease.quartOut).wait(33));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(688.1,375.2,1,1,-55,0,0,126,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:92.6,rotation:0,x:151,y:487.6},41,cjs.Ease.quartOut).wait(33));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-27.4,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({x:92.6,alpha:1},33,cjs.Ease.quartInOut).wait(3));

	// GG_stack_svg
	this.instance_5 = new lib.gg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27.7,298.9,1,1,0,0,0,45.3,29.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:92.3,alpha:1},33,cjs.Ease.quartInOut).wait(6));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-24.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:157.7},41,cjs.Ease.quartInOut).wait(32));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,-0.3,530.5,375.3);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_longos_grade_atlas_.png", id:"300x250_longos_grade_atlas_"}
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