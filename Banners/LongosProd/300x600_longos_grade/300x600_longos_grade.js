(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_longos_grade_atlas_", frames: [[0,0,442,325],[0,707,234,210],[0,327,284,378]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["300x600_longos_grade_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["300x600_longos_grade_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["300x600_longos_grade_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAXApIgSgmIgEgLIgEALIgTAmIgCAAIgehRIASAAIAMAhIAEAOIACgFIADgJIAPgiIACAAIAQAiIAEAOIAFgOIALghIARAAIgdBRg");
	this.shape.setTransform(78.6,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_1.setTransform(68,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgApIgogmIgKgKIACAOIAAAiIgQAAIAAhSIABAAIApAnIAJALIgBgOIAAgjIAPAAIAABRg");
	this.shape_2.setTransform(59.1,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdApIAAhRIAdAAQAMAAAIAHQAKAHAAANQAAANgKAHQgIAHgMAAIgMAAIAAAbgAgMAAIAMAAQANAAgBgNQABgMgNAAIgMAAg");
	this.shape_3.setTransform(48.8,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_4.setTransform(40.2,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARApIAAggIghAAIAAAgIgRAAIAAhRIARAAIAAAjIAhAAIAAgjIARAAIAABRg");
	this.shape_5.setTransform(31.1,22.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAZIANgIQAHAKAJAAQAFAAADgCQADgDAAgDQAAgEgDgDIgJgEIgDgCQgKgFgFgEQgFgGAAgKQAAgJAGgGQAHgHAKAAQARAAAHAOIgNAIQgEgHgHAAQgCAAgDACQgCACAAADQAAAEADACQACACAFACIAEACQALAFAFAEQAGAHAAAJQAAAMgIAGQgHAGgNAAQgVAAgIgRg");
	this.shape_6.setTransform(23.5,22.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("Ao6CiIAAlDIR1AAIAAFDg");
	this.shape_7.setTransform(51.1,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-6,6,114.2,32.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,252,185.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,90.9,121), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgYAaQgLgLAAgPQAAgOALgKQALgKANAAQAOAAALAKQALAKAAAOQAAAPgLALQgLAJgOAAQgNAAgLgJg");
	this.shape.setTransform(187.3,168.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhSB6IAAj0IClAAIAAA4IhjAAIAAAyIBXAAIAAA2IhXAAIAABUg");
	this.shape_1.setTransform(173,159.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_2.setTransform(148.5,159.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhsB6IAAj0IBeAAQA1AAAjAiQAjAhAAA3QAAA4gjAiQgjAhg1gBgAgrBDIAWAAQAdAAARgSQARgTAAgeQAAgdgRgTQgRgSgdAAIgWAAg");
	this.shape_3.setTransform(114,159.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AhLBkQgegaAAgwIAAiVIBBAAIAACUQAAAsAoAAQApAAAAgsIAAiUIBBAAIAACVQAAAwgeAaQgcAYgwAAQgvAAgcgYg");
	this.shape_4.setTransform(88.5,160);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_5.setTransform(61.9,159.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AAeB6IgqhMIgWAAIAABMIhCAAIAAj0IBjAAQAtAAAaAZQAZAYAAAnQAAAxgtAVIAzBWgAgigDIAeAAQAhAAAAgfQAAggghAAIgeAAg");
	this.shape_6.setTransform(36.8,159.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AhhB6IAAj0IBiAAQAuAAAaAaQAZAYAAAnQAAAlgZAYQgaAYguAAIggAAIAABGgAgfgCIAeAAQAhAAAAgfQAAghghAAIgeAAg");
	this.shape_7.setTransform(13.9,159.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AhXB6IAAjzICqAAIAAA3IhpAAIAAAoIBYAAIAAAzIhYAAIAAArIBuAAIAAA2g");
	this.shape_8.setTransform(176,121.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhhB6IAAjzIBpAAQAlAAAVAQQAWAQAAAfQAAAogiANQAsAMAAAsQAAAjgYASQgYATgtgBgAgiBHIAmAAQAcAAAAgaQAAgZgcAAIgmAAgAgigaIAiAAQAYABAAgWQAAgXgYAAIgiAAg");
	this.shape_9.setTransform(154.1,121.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AhsB6IAAjzIBeAAQA1AAAjAgQAjAjAAA2QAAA4gjAiQgjAgg1AAgAgrBDIAWAAQAdAAARgSQARgTAAgeQAAgdgRgSQgRgTgdAAIgWAAg");
	this.shape_10.setTransform(121.8,121.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AhTB6IAAjzIBBAAIAAC9IBnAAIAAA2g");
	this.shape_11.setTransform(99.4,121.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AhLBkQgegaAAgwIAAiVIBBAAIAACUQAAAsAoAAQApAAAAgsIAAiUIBBAAIAACVQAAAwgeAaQgcAYgwAAQgvAAgcgYg");
	this.shape_12.setTransform(76.3,122);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_13.setTransform(49.7,121.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E52527").s().p("Ag/B+Ihnj3IBFAAIAtBzIA0h4QAAAAABgBQAAAAABAAQAAAAAAAAQABABAAAAIA3B4IArhzIBCAAIhlD3QgCAEgCgEIg+iDIg7CDQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_14.setTransform(18.9,121.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E52527").s().p("ABFB9IgFhpIg9BHQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIhAhHIgFBpIhAAAIAOj3QAAgBAAAAQABgBAAAAQABAAAAABQABAAABABIB0CDIBziDQABgBABAAQAAgBABAAQAAAAAAABQAAAAABABIAOD3g");
	this.shape_15.setTransform(157.5,83.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_16.setTransform(128.5,83.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E52527").s().p("ABGB9IgHhpIg9BHQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIg/hHIgGBpIhAAAIAOj3QAAgBAAAAQABgBAAAAQABAAAAABQABAAAAABIB1CDIBziDQABgBABAAQAAgBAAAAQABAAAAABQAAAAAAABIAPD3g");
	this.shape_17.setTransform(99.6,83.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E52527").s().p("AggB7IAAhfIhViVIBIAAIAuBaIAxhaIBEAAIhUCTIAABhg");
	this.shape_18.setTransform(64.4,83.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E52527").s().p("ABpB/IiYh/IAAB6Ig+AAIAAj3QAAgFAFAFICYB9IAAh6IA+AAIAAD4QAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_19.setTransform(39.7,83.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_20.setTransform(14.3,83.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E52527").s().p("AhXB7IAAj1ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAApIBuAAIAAA4g");
	this.shape_21.setTransform(144.6,45.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E52527").s().p("AhsB7IAAj1IBeAAQA1ABAjAgQAjAjAAA2QAAA4gjAiQgjAhg1AAgAgrBDIAWAAQAdAAARgSQARgSAAgfQAAgegRgRQgRgTgdAAIgWAAg");
	this.shape_22.setTransform(121.9,45.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_23.setTransform(96.6,45.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E52527").s().p("AAeB7IgqhNIgWAAIAABNIhCAAIAAj1IBjAAQAtAAAaAZQAZAYAAAmQAAAygtAVIAzBXgAgigDIAeAAQAhAAAAggQAAgfghAAIgeAAg");
	this.shape_24.setTransform(73.3,45.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E52527").s().p("AhQBaQgmgkAAg2QAAg1AmgkQAmgjA1AAQBAAAAjArIguAoQgVgagiAAQgcAAgQATQgQATAAAdQAAAeAQAUQASAUAfAAQAbAAAUgJIAAgZIgwAAIAAgxIBqAAIAABpQgpAhhBAAQg2AAgngjg");
	this.shape_25.setTransform(48.1,45.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_26.setTransform(14.3,45.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E52527").s().p("AgZAaQgKgLAAgPQAAgOAKgKQAMgKANAAQAPAAAKAKQALAKAAAOQAAAPgLALQgKAJgPAAQgNAAgMgJg");
	this.shape_27.setTransform(173.4,16.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E52527").s().p("AhSB6IAAj0IClAAIAAA4IhkAAIAAAyIBYAAIAAA2IhYAAIAABUg");
	this.shape_28.setTransform(159.1,7.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E52527").s().p("AhXB6IAAj0ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAApIBuAAIAAA3g");
	this.shape_29.setTransform(138.8,7.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E52527").s().p("AhXB6IAAj0ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAApIBuAAIAAA3g");
	this.shape_30.setTransform(118,7.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E52527").s().p("AhhB6IAAj0IBpAAQAlAAAVARQAWAQAAAfQAAAogiAMQAsANAAAsQAAAigYATQgYASgtAAgAgiBHIAmAAQAcAAAAgZQAAgagcAAIgmAAgAgigZIAiAAQAYAAAAgXQAAgWgYAAIgiAAg");
	this.shape_31.setTransform(96.2,7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E52527").s().p("AA1B+IgMgeIhVAAIgMAeIhAAAIB3j4QABgFADAFIB2D4gAATAxIgVgzIgVAzIAqAAg");
	this.shape_32.setTransform(63.3,7.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E52527").s().p("AA1B+IgMgeIhVAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_33.setTransform(38.8,7.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_34.setTransform(14.3,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,-10,257.1,192), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(0,0,93.6,84), null);


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

}).prototype = getMCSymbolPrototype(lib.Y, new cjs.Rectangle(-2,-3.1,10.2,14.8), null);


(lib.V = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAhQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgSg7QAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAAAIADAAIABACIAQA2IARg2IABgCIADAAQAAAAABAAQAAABABAAQAAABAAABQAAAAAAABIgSA7QgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(2.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.V, new cjs.Rectangle(-2,-3.1,10.2,14.8), null);


(lib.RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgSAhQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAg7IABgCIADgBIAOAAQANAAAHAJQAHAJAAAOQAAAPgHAJQgIAJgMAAgAgQAbIAMAAQAKAAAGgIQAFgIAAgLQAAgLgFgHQgGgIgKAAIgMAAg");
	this.shape.setTransform(16.1,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AgRAhIgCgBIgBgCIAAg7IABgDIACAAIAjAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIgBACIgDABIggAAIAAAYIAXAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIgBACIgDABIgXAAIAAAYIAgAAIADABIABACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_1.setTransform(9.7,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AAPAgIgPgdIgPAAIAAAbIAAACIgCABIgDgBIgBgCIAAg7IABgCIADgBIAVAAQAHAAAGAFQAFAFAAAIQAAAHgEAFQgFAEgGABIAOAaIAAACIgBACIgCAAIgDgBgAgPgCIATAAQAFAAADgEQADgDAAgFQAAgFgDgDQgDgEgFAAIgTAAg");
	this.shape_2.setTransform(3.4,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RED, new cjs.Rectangle(-2,-3.1,23.3,14.8), null);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgRAhIgCgBIgBgCIAAg7IABgDIACAAIAjAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIgCACIgCABIggAAIAAAYIAXAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIgCACIgCABIgXAAIAAAYIAgAAIACABIACACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape.setTransform(3.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.E, new cjs.Rectangle(-2,-3.1,10.4,14.8), null);


(lib.DELI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAgIgBgCIAAg7IABgCIABgBQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAA7QAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgBgBg");
	this.shape.setTransform(20,4.5);

	this.text = new cjs.Text(" ", "9px 'GroceryGateway'", "#18423B");
	this.text.lineHeight = 13;
	this.text.parent = this;
	this.text.setTransform(18.5,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AgQAhQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIAAg7QAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAIACABIABACIAAA4IAeAAIADABIABACIgBACIgDABg");
	this.shape_1.setTransform(15.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AgRAhIgCgBIgCgCIAAg7IACgDIACAAIAjAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIgBACIgCABIggAAIAAAYIAXAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgBACIgCABIgXAAIAAAYIAgAAIACABIABACQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_2.setTransform(9.8,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgSAhQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAg7IABgCIADgBIAOAAQANAAAHAJQAHAJAAAOQAAAPgHAJQgIAJgMAAgAgQAbIAMAAQAKAAAGgIQAFgIAAgLQAAgLgFgHQgGgIgKAAIgMAAg");
	this.shape_3.setTransform(3.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DELI, new cjs.Rectangle(-2,-3.1,28.7,14.8), null);


(lib.B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgRAhQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIAAg7IABgCIADgBIATAAQAJAAAFAEQAGAFAAAJQAAAKgIAEQAIAFAAAKQAAAJgFAFQgGAEgJAAgAgOAbIAQAAQAOAAAAgMQAAgMgOAAIgQAAgAgOgCIAQAAQAFAAAEgDQAFgDAAgGQAAgMgOAAIgQAAg");
	this.shape.setTransform(3.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.B, new cjs.Rectangle(-2,-3.1,10.6,14.8), null);


(lib.gg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Y();
	this.instance.parent = this;
	this.instance.setTransform(78.6,17.4,1,1,0,0,0,3.1,4.2);

	this.instance_1 = new lib.B();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.9,17.4,1,1,0,0,0,3.3,4.2);

	this.instance_2 = new lib.RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54.8,17.4,1,1,0,0,0,9.6,4.2);

	this.instance_3 = new lib.E();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42,17.4,1,1,0,0,0,3.2,4.2);

	this.instance_4 = new lib.V();
	this.instance_4.parent = this;
	this.instance_4.setTransform(35.9,17.4,1,1,0,0,0,3.1,4.2);

	this.instance_5 = new lib.DELI();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.9,17.4,1,1,0,0,0,12.3,4.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgQBVIAAhVIgihVIAiAAIAQArIARgrIAiAAIgiBVIAABVg");
	this.shape.setTransform(85.3,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AARBVIgahEIgHAAIAABEIgiAAIAAiqIAyAAQAMAAAIAFQAJADAIAHQAHAIADAJQAEAJAAALQAAAPgIANQgIAMgNAFIAdBJgAgQgQIAQAAQAHgBAFgEQAFgGAAgGQAAgHgFgFQgFgFgHAAIgQAAg");
	this.shape_1.setTransform(72.6,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AgyBVIAAiqIBlAAIAAAjIhDAAIAAAiIAyAAIAAAhIgyAAIAAAjIBDAAIAAAhg");
	this.shape_2.setTransform(59.2,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgGgFgKQgDgJAAgMIAAhDQAAgMADgIQAEgKAHgHQAHgGAKgFQAIgEALAAQALAAAJAEQAKAFAGAGQAIAJADAIQAEAJAAALIgiAAQAAgHgFgFQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgEAAgIIAiAAQAAALgEAKQgDAJgIAHQgGAGgKAFQgJAEgLgBQgLABgIgEg");
	this.shape_3.setTransform(45.7,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgGgFgKQgDgJAAgMIAAhDQAAgMADgIQAEgKAHgHQAHgGAKgFQAIgEALAAQALAAAJAEQAKAFAGAGQAIAJADAIQAEAJAAALIAABDQAAALgEAKQgDAJgIAHQgGAGgKAFQgJAEgLgBQgLABgIgEgAgLgtQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgEAAgIIAAhDQAAgHgFgFQgFgFgHAAQgHAAgEAFg");
	this.shape_4.setTransform(32.3,38.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18423B").s().p("AARBVIgahEIgHAAIAABEIgiAAIAAiqIAyAAQAMAAAIAFQAKAEAGAGQAIAJADAIQAEAJAAALQAAAPgIANQgIAMgNAFIAdBJgAgQgQIAQAAQAHgBAFgEQAFgFAAgHQAAgHgFgFQgFgFgHAAIgQAAg");
	this.shape_5.setTransform(18.8,38.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18423B").s().p("AgTBSQgJgEgIgHQgGgGgEgKQgEgJAAgMIAAhDQAAgNAEgHQADgJAHgIQAIgHAJgDQAIgFALAAQAMAAAIAFQAKAEAGAGQAIAHADAKQAEAJAAALIgiAAQAAgHgFgFQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgFAAgHIAAgRIgRAAIAAghIAzAAIAAAyQAAALgEAKQgEAKgHAGQgGAGgKAFQgIAEgMgBQgLABgIgEg");
	this.shape_6.setTransform(5.3,38.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AgQBWIAAhWIgihVIAiAAIAQArIARgrIAiAAIgiBVIAABWg");
	this.shape_7.setTransform(85.5,59.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18423B").s().p("AARBWIgHgjIgTAAIgHAjIgiAAIAiirIAhAAIAiCrgAgDARIAGAAIgDgRg");
	this.shape_8.setTransform(74.1,59.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18423B").s().p("AARBWIgRhWIgQBWIgiAAIgiirIAiAAIARBVIARhVIAhAAIARBVIAShVIAiAAIgiCrg");
	this.shape_9.setTransform(59.1,59.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18423B").s().p("AgzBWIAAirIBnAAIAAAjIhEAAIAAAiIAyAAIAAAhIgyAAIAAAiIBEAAIAAAjg");
	this.shape_10.setTransform(42.6,59.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18423B").s().p("AgQBWIAAiIIgiAAIAAgjIBlAAIAAAjIgiAAIAACIg");
	this.shape_11.setTransform(29.5,59.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18423B").s().p("AARBWIgHgjIgTAAIgHAjIgiAAIAiirIAhAAIAiCrgAgCARIAGAAIgEgRg");
	this.shape_12.setTransform(17.8,59.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgHgFgJQgDgJAAgMIAAhDQAAgMADgIQAFgKAGgHQAIgHAJgEQAJgEAKAAQAKAAAKAEQAJAEAHAHQAIAIADAJQAEAJAAALIgiAAQAAgIgFgEQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAFQAEAEAHAAQAHAAAFgEQAFgFAAgIIAAgRIgRAAIAAghIAzAAIAAAyQAAAKgEALQgDAIgIAIQgGAHgKAEQgIAEgMAAQgLAAgIgEg");
	this.shape_13.setTransform(5.1,59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gg, new cjs.Rectangle(0,10,90.7,58.5), null);


// stage content:
(lib._300x600_longos_grade = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(102.1,54.8,0.576,0.576,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.8,656.4,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:616},41,cjs.Ease.quartOut).wait(34));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(381.7,417.5,1,1,-75,0,0,45.5,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:437.5},41,cjs.Ease.quartOut).wait(39));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(383.5,618.1,1,1,-55,0,0,126,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:92.6,rotation:0,x:151,y:487.6},41,cjs.Ease.quartOut).wait(39));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-27.4,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({x:92.6,alpha:1},33,cjs.Ease.quartInOut).wait(9));

	// GG_stack_svg
	this.instance_5 = new lib.gg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27.7,298.9,1,1,0,0,0,45.3,29.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:92.3,alpha:1},33,cjs.Ease.quartInOut).wait(12));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-92.3,213.3,1,1,0,0,0,128.5,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:157.7},42,cjs.Ease.quartInOut).wait(38));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,300,752.4,774.4);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_longos_grade_atlas_.png", id:"300x600_longos_grade_atlas_"}
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