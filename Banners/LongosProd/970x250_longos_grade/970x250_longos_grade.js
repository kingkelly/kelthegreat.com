(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x250_longos_grade_atlas_", frames: [[0,0,442,325],[0,707,234,210],[0,327,284,378]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["970x250_longos_grade_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["970x250_longos_grade_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["970x250_longos_grade_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAYApIgSgmIgGgMIgDAMIgTAmIgBAAIgfhQIASAAIAMAgIAEAOIABgFIAEgJIAPghIABAAIAQAhIAGAOIAEgOIAMggIAQAAIgeBQg");
	this.shape.setTransform(298.6,-128.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_1.setTransform(288,-128.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgApIgogmIgKgKIABAOIAAAiIgQAAIAAhRIACAAIAoAmIAKAKIgBgNIAAgiIAQAAIAABQg");
	this.shape_2.setTransform(279.1,-128.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIAcAAQANAAAHAHQAJAHAAANQAAANgJAHQgHAHgNAAIgLAAIAAAbgAgLAAIAKAAQAOAAAAgNQAAgMgOAAIgKAAg");
	this.shape_3.setTransform(268.8,-128.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_4.setTransform(260.2,-128.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARApIAAggIghAAIAAAgIgRAAIAAhRIARAAIAAAjIAhAAIAAgjIARAAIAABRg");
	this.shape_5.setTransform(251.1,-128.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAZIANgIQAHAKAJAAQAFAAADgCQADgDAAgDQAAgEgDgDIgJgEIgDgCQgKgFgFgEQgFgGAAgKQAAgJAGgGQAHgHAKAAQARAAAHAOIgNAIQgEgHgHAAQgCAAgDACQgCACAAADQAAAEADACQACACAFACIAEACQALAFAFAEQAGAHAAAJQAAAMgIAGQgHAGgNAAQgVAAgIgRg");
	this.shape_6.setTransform(243.5,-128.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("Ao6CiIAAlDIR1AAIAAFDg");
	this.shape_7.setTransform(271.1,-128.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(214,-144.9,114.1,32.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(479,-352,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(479,-352,340,250), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(546,-370,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(546,-370,142,189), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgKAOAAQAPAAAKAKQALAKAAAOQAAAPgLALQgKAJgPAAQgOAAgLgJg");
	this.shape.setTransform(476.2,64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhSB7IAAj1IClAAIAAA4IhkAAIAAAxIBYAAIAAA2IhYAAIAABWg");
	this.shape_1.setTransform(461.9,55.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_2.setTransform(437.3,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhsB7IAAj1IBeAAQA1ABAjAgQAjAiAAA3QAAA4gjAiQgjAhg1AAgAgrBDIAWAAQAdAAARgSQARgSAAgfQAAgegRgRQgRgTgdAAIgWAAg");
	this.shape_3.setTransform(402.9,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AhLBkQgegaAAgwIAAiVIBBAAIAACUQAAAsAoAAQApAAAAgsIAAiUIBBAAIAACVQAAAwgeAaQgcAYgwAAQgvAAgcgYg");
	this.shape_4.setTransform(377.3,56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_5.setTransform(350.8,55.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AAeB7IgqhNIgWAAIAABNIhCAAIAAj1IBjAAQAtAAAaAZQAZAYAAAmQAAAzgtATIAzBYgAgigDIAeAAQAhAAAAggQAAgfghAAIgeAAg");
	this.shape_6.setTransform(325.7,55.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AhhB7IAAj1IBiAAQAuAAAaAaQAZAYAAAmQAAAmgZAYQgaAYguABIggAAIAABGgAgfgBIAeAAQAhAAAAghQAAggghAAIgeAAg");
	this.shape_7.setTransform(302.8,55.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AhXB7IAAj1ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAAqIBuAAIAAA3g");
	this.shape_8.setTransform(272.3,55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhhB7IAAj1IBpAAQAlABAVAQQAWARAAAeQAAAogiAMQAsAMAAAuQAAAhgYATQgYASgtABgAgiBHIAmAAQAcAAAAgaQAAgZgcAAIgmAAgAgigaIAiAAQAYAAAAgVQAAgXgYAAIgiAAg");
	this.shape_9.setTransform(250.5,55.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AhsB7IAAj1IBeAAQA1ABAjAgQAjAiAAA3QAAA4gjAiQgjAhg1AAgAgrBDIAWAAQAdAAARgSQARgSAAgfQAAgegRgRQgRgTgdAAIgWAAg");
	this.shape_10.setTransform(218.1,55.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AhTB7IAAj1IBBAAIAAC+IBmAAIAAA3g");
	this.shape_11.setTransform(195.7,55.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AhLBkQgegaAAgwIAAiVIBBAAIAACUQAAAsAoAAQApAAAAgsIAAiUIBBAAIAACVQAAAwgeAaQgcAYgwAAQgvAAgcgYg");
	this.shape_12.setTransform(172.6,56);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_13.setTransform(146.1,55.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E52527").s().p("AhAB+Ihmj3IBFAAIAuBzIAzh4QAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIA3B4IAshzIBBAAIhlD3QgCAEgDgEIg8iDIg8CDQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_14.setTransform(115.2,55.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E52527").s().p("ABFB9IgFhpIg9BHQgBAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAIhAhHIgFBpIhAAAIAOj3QAAgBAAAAQABgBAAAAQABAAAAABQABAAABABIB0CDIB0iDQAAgBABAAQAAgBABAAQAAAAAAABQAAAAABABIAOD3g");
	this.shape_15.setTransform(74.8,55.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E52527").s().p("AhbBaQgngkAAg2QAAg1AngkQAmgjA1AAQA2AAAmAjQAnAkAAA1QAAA2gnAkQgmAjg2AAQg1AAgmgjgAgvgwQgQATAAAdQAAAeAQATQASAUAdAAQAeAAASgUQAQgTAAgeQAAgdgQgTQgSgTgeAAQgdAAgSATg");
	this.shape_16.setTransform(45.8,55.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E52527").s().p("ABGB9IgHhpIg8BHQgBAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAIhAhHIgFBpIhAAAIAOj3QAAgBAAAAQABgBAAAAQABAAAAABQABAAAAABIB1CDIBziDQABgBABAAQAAgBABAAQAAAAAAABQAAAAABABIAOD3g");
	this.shape_17.setTransform(16.9,55.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E52527").s().p("AggB6IAAheIhViWIBIAAIAuBaIAxhaIBEAAIhUCUIAABgg");
	this.shape_18.setTransform(410.5,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E52527").s().p("ABpB/IiYh/IAAB6Ig+AAIAAj3QAAgFAFAFICYB9IAAh6IA+AAIAAD4QAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_19.setTransform(385.7,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAAUAxIgVgzIgXAzIAsAAg");
	this.shape_20.setTransform(360.3,17.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E52527").s().p("AhXB6IAAj0ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAApIBuAAIAAA3g");
	this.shape_21.setTransform(329.5,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E52527").s().p("AhsB6IAAj0IBeAAQA1AAAjAiQAjAhAAA3QAAA4gjAiQgjAhg1gBgAgrBDIAWAAQAdAAARgSQARgSAAgfQAAgdgRgTQgRgSgdAAIgWAAg");
	this.shape_22.setTransform(306.9,17.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAAUAxIgVgzIgXAzIAsAAg");
	this.shape_23.setTransform(281.6,17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E52527").s().p("AAeB6IgqhMIgWAAIAABMIhCAAIAAj0IBjAAQAtABAaAYQAZAYAAAnQAAAxgtAVIAzBWgAgigDIAeAAQAhAAAAgfQAAggghAAIgeAAg");
	this.shape_24.setTransform(258.3,17.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E52527").s().p("AhQBaQgmgkAAg2QAAg1AmgkQAmgjA1AAQBAAAAjArIguAoQgVgagiAAQgcAAgQATQgQATAAAdQAAAeAQAUQASAUAfAAQAbAAAUgJIAAgZIgwAAIAAgxIBqAAIAABpQgpAhhBAAQg2AAgngjg");
	this.shape_25.setTransform(233,17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_26.setTransform(199.2,17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E52527").s().p("AgZAaQgKgLAAgPQAAgOAKgKQAMgKANAAQAPAAAKAKQALAKAAAOQAAAPgLALQgKAJgPAAQgNAAgMgJg");
	this.shape_27.setTransform(173.4,26.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E52527").s().p("AhSB6IAAj0IClAAIAAA4IhkAAIAAAyIBYAAIAAA2IhYAAIAABUg");
	this.shape_28.setTransform(159.1,17.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E52527").s().p("AhXB6IAAj0ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAApIBuAAIAAA3g");
	this.shape_29.setTransform(138.8,17.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E52527").s().p("AhXB6IAAj0ICqAAIAAA4IhpAAIAAAoIBYAAIAAA0IhYAAIAAApIBuAAIAAA3g");
	this.shape_30.setTransform(118,17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E52527").s().p("AhhB6IAAj0IBpAAQAlAAAVARQAWARAAAeQAAAogiAMQAsAMAAAuQAAAigYASQgYASgtAAgAgiBHIAmAAQAcAAAAgZQAAgagcAAIgmAAgAgigZIAiAAQAYAAAAgXQAAgWgYAAIgiAAg");
	this.shape_31.setTransform(96.2,17.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E52527").s().p("AA1B+IgMgeIhVAAIgMAeIhAAAIB3j4QABgFADAFIB2D4gAATAxIgVgzIgVAzIAqAAg");
	this.shape_32.setTransform(63.3,17.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E52527").s().p("AA1B+IgMgeIhVAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_33.setTransform(38.8,17.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E52527").s().p("AA2B+IgOgeIhUAAIgMAeIhAAAIB3j4QABgFACAFIB3D4gAATAxIgUgzIgXAzIArAAg");
	this.shape_34.setTransform(14.3,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,0,658,78), null);


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
	this.shape.setTransform(242.4,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(204.1,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(228.2,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(119.3,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,-12.2,245.6,84.5), null);


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

	// Layer_1
	this.instance = new lib.Y();
	this.instance.parent = this;
	this.instance.setTransform(118.9,-77.1,1.016,1.016,0,0,0,3.2,4.1);

	this.instance_1 = new lib.B();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113.1,-77.1,1.016,1.016,0,0,0,3.4,4.1);

	this.instance_2 = new lib.RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(95.2,-77.1,1.016,1.016,0,0,0,9.8,4.1);

	this.instance_3 = new lib.E();
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.5,-77.1,1.016,1.016,0,0,0,3.3,4.1);

	this.instance_4 = new lib.V();
	this.instance_4.parent = this;
	this.instance_4.setTransform(76.3,-77.1,1.016,1.016,0,0,0,3.2,4.1);

	this.instance_5 = new lib.DELI();
	this.instance_5.parent = this;
	this.instance_5.setTransform(61.4,-77.1,1.016,1.016,0,0,0,12.6,4.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgLA8IAAg8IgXg7IAXAAIALAfIAMgfIAXAAIgXA7IAAA8g");
	this.shape.setTransform(175.7,-52.6,1.588,1.588);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AAMA8IgGgYIgMAAIgFAYIgXAAIAXh3IAXAAIAXB3gAgCAMIAEAAIgCgMg");
	this.shape_1.setTransform(163,-52.6,1.588,1.588);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AAKA8IgKg8IgLA8IgVAAIgWh3IAWAAIALA7IAKg7IAVAAIAMA7IALg7IAWAAIgWB3g");
	this.shape_2.setTransform(147.1,-52.6,1.588,1.588);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgiA8IAAh3IBFAAIAAAZIguAAIAAAXIAiAAIAAAXIgiAAIAAAYIAuAAIAAAYg");
	this.shape_3.setTransform(131.2,-52.6,1.588,1.588);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18423B").s().p("AgLA8IAAheIgXAAIAAgZIBFAAIAAAZIgYAAIAABeg");
	this.shape_4.setTransform(116.9,-52.6,1.588,1.588);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18423B").s().p("AAMA8IgGgYIgMAAIgFAYIgXAAIAXh3IAXAAIAXB3gAgCAMIAEAAIgCgMg");
	this.shape_5.setTransform(105.8,-52.6,1.588,1.588);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18423B").s().p("AgNA5QgHgDgEgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAEgEAHgDQAGgDAHAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHIgXAAQAAgFgEgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAvQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFIAAgMIgMAAIAAgXIAjAAIAAAjQAAAIgDAGQgCAGgGAGQgEAEgGADQgFADgJAAQgIAAgFgDg");
	this.shape_6.setTransform(91.5,-52.6,1.588,1.588);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AgLA8IAAg8IgXg7IAXAAIALAfIALgfIAYAAIgYA7IAAA8g");
	this.shape_7.setTransform(72.5,-52.6,1.588,1.588);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18423B").s().p("AALA8IgRgwIgFAAIAAAwIgXAAIAAh3IAiAAQAHAAAHADQAGADAFAEQAFAGACAGQADAHAAAHQAAALgGAJQgFAIgJAEIAUAzgAgLgLIALAAQAFAAADgEQADgDAAgFQAAgFgDgEQgDgCgFAAIgLAAg");
	this.shape_8.setTransform(59.8,-52.6,1.588,1.588);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18423B").s().p("AgiA8IAAh3IBFAAIAAAZIguAAIAAAXIAiAAIAAAXIgiAAIAAAYIAuAAIAAAYg");
	this.shape_9.setTransform(45.5,-52.6,1.588,1.588);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18423B").s().p("AgNA5QgGgDgFgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAFgEAGgDQAGgDAHAAQAHAAAHADQAGADAFAEQAFAGACAGQADAHAAAHIgXAAQAAgFgEgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAvQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFIAXAAQAAAIgDAGQgCAGgFAGQgFAEgGADQgGADgIAAQgIAAgFgDg");
	this.shape_10.setTransform(32.8,-52.6,1.588,1.588);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18423B").s().p("AgNA5QgHgDgEgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAEgEAHgDQAGgDAHAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHIAAAvQAAAIgDAGQgCAGgGAGQgEAEgGADQgGADgIAAQgIAAgFgDgAgIgfQgDADAAAFIAAAvQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFIAAgvQAAgFgEgDQgDgDgFAAQgEAAgEADg");
	this.shape_11.setTransform(18.5,-52.6,1.588,1.588);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18423B").s().p("AAMA8IgSgwIgFAAIAAAwIgXAAIAAh3IAiAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHQAAAMgGAIQgFAIgKAEIAVAzgAgLgLIALAAQAFAAADgEQAEgDAAgFQAAgFgEgEQgDgCgFAAIgLAAg");
	this.shape_12.setTransform(5.8,-52.6,1.588,1.588);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18423B").s().p("AgNA5QgHgDgEgEQgFgGgCgGQgDgFAAgJIAAgvQAAgIADgGQACgGAFgGQAEgEAHgDQAGgDAHAAQAHAAAHADQAGADAEAEQAGAGACAGQADAHAAAHIgXAAQAAgFgEgDQgDgDgFAAQgFAAgDADQgDADAAAFIAAAvQAAAFADADQADAEAFAAQAFAAADgEQAEgDAAgFIAAgMIgMAAIAAgXIAjAAIAAAjQAAAIgDAGQgCAGgGAGQgEAEgGADQgFADgJAAQgIAAgFgDg");
	this.shape_13.setTransform(-8.5,-52.6,1.588,1.588);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gg, new cjs.Rectangle(-14,-84.5,195.3,41.5), null);


// stage content:
(lib._970x250_longos_grade = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(102.1,54.8,0.576,0.576,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.8,656.4,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:616},41,cjs.Ease.quartOut).wait(77));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1294.6,780.5,1,1,-75,0,0,45.5,60.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:435.5},41,cjs.Ease.quartOut).wait(82));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(655.5,431.2,1,1,-55,0,0,126,92.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regY:92.6,rotation:0,x:151,y:487.6},41,cjs.Ease.quartOut).wait(82));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(92.6,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({alpha:1},26,cjs.Ease.quartInOut).wait(49));

	// GG_stack_svg
	this.instance_5 = new lib.gg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-27.7,298.9,1,1,0,0,0,45.3,29.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:92.3,alpha:1},33,cjs.Ease.quartInOut).wait(56));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-362.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:157.7},41,cjs.Ease.quartInOut).wait(82));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,125,970,250);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x250_longos_grade_atlas_.png", id:"970x250_longos_grade_atlas_"}
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