(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_glaciers_atlas_P_", frames: [[229,602,25,86],[0,602,227,389],[302,0,120,505],[0,0,300,600]]},
		{name:"300x600_glaciers_atlas_NP_", frames: [[302,0,300,600],[0,0,300,600]]}
];


// symbols:



(lib.endpath = function() {
	this.spriteSheet = ss["300x600_glaciers_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glacier = function() {
	this.spriteSheet = ss["300x600_glaciers_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glacier_path1 = function() {
	this.spriteSheet = ss["300x600_glaciers_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glacier_path2 = function() {
	this.spriteSheet = ss["300x600_glaciers_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.walk_screen = function() {
	this.spriteSheet = ss["300x600_glaciers_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.walkers = function() {
	this.spriteSheet = ss["300x600_glaciers_atlas_NP_"];
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


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIATAAIAqBhgAAMAIIgMgfIgNAfIAZAAg");
	this.shape.setTransform(164.1,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAxIgegpIgLALIAAAeIgVAAIAAhhIAVAAIAAArIAmgrIAaAAIgnApIAqA4g");
	this.shape_1.setTransform(154,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAjIANgPQAOALAOAAQAOAAAAgJQAAgFgDgCQgEgCgLgDQgRgFgHgFQgJgGAAgNIAAgBQAAgNAKgJQAJgHAPgBQAUAAAQANIgLAQQgOgJgLgBQgGAAgDADQgDADAAADIAAAAQAAAFAEACQAEADAMAEQAQADAHAGQAIAGAAANIAAAAQAAAPgKAIQgKAHgQAAQgXAAgSgPg");
	this.shape_2.setTransform(143.8,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAANAIIgNgfIgMAfIAZAAg");
	this.shape_3.setTransform(133.9,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAxIAAhhIAVAAIAABNIAwAAIAAAUg");
	this.shape_4.setTransform(124.4,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAANAIIgNgfIgMAfIAZAAg");
	this.shape_5.setTransform(114.2,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_6.setTransform(100,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAxIgUgfIgRAAIAAAfIgVAAIAAhhIArAAQATAAAKAKQAIAJAAAOQAAAVgVAIIAYAjgAgUAAIAVAAQAIAAAEgEQAEgEAAgHQAAgNgQAAIgVAAg");
	this.shape_7.setTransform(90.4,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgUIAAgBQAAgUAPgPQAPgPAVAAQAXAAAOAPQAPAOAAAVIAAAAQAAAVgPAPQgOAOgXAAQgVAAgPgOgAgVgVQgHAJAAAMIAAAAQgBANAJAIQAJAKALAAQANAAAIgJQAJgJgBgMIAAgBQAAgMgIgJQgJgJgMAAQgMAAgJAJg");
	this.shape_8.setTransform(79.1,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAxIAAhhIAVAAIAABNIAwAAIAAAUg");
	this.shape_9.setTransform(69.2,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAxIAAhhIAnAAQARAAALAJQAKAKAAAPQAAAPgMAKQgLAIgQABIgQAAIAAAdgAgQABIAQAAQAIgBAEgDQAFgEAAgHQAAgHgFgDQgFgEgHAAIgQAAg");
	this.shape_10.setTransform(60.2,24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAxIgWghIgVAhIgZAAIAigxIghgwIAaAAIATAgIAVggIAYAAIggAwIAiAxg");
	this.shape_11.setTransform(50,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_12.setTransform(40.5,24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41B44").s().p("AssC2IAAlrIZZAAIAAFrg");
	this.shape_13.setTransform(102.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(21.1,5.2,162.6,36.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgXAYIAAgvIAvAAIAAAvg");
	this.shape.setTransform(179.9,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgWBpIAAhTIhRh+IA2AAIAxBVIAzhVIA1AAIhRB9IAABUg");
	this.shape_1.setTransform(164.9,52.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_2.setTransform(144.6,52.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AA2BpIhliEIAACEIgtAAIAAjRIArAAIBhCBIAAiBIAuAAIAADRg");
	this.shape_3.setTransform(122.2,52.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAoAAAWAWQASASAAAeIAAAAQAAAvgtARIAzBLgAgrgCIAtAAQARAAAKgIQAJgIAAgOIAAgBQAAgdgkAAIgtAAg");
	this.shape_4.setTransform(100.3,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AhCBTQgZgYAAguIAAh3IAuAAIAAB2QAAAZANAOQALANAVAAQAWAAALgNQAMgNAAgYIAAh4IAvAAIAAB2QAAAugZAZQgYAYgrAAQgrAAgXgYg");
	this.shape_5.setTransform(77.4,52.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AhPBNQgggfAAgtIAAgBQAAgsAgggQAhgfAuAAQAxgBAfAgQAfAfAAAtIAAAAQAAAugfAeQghAhgvAAQgvgBgggfgAgtguQgRATAAAbIAAAAQgBAcATASQASAUAaAAQAcAAASgTQASgTAAgbIAAgBQgBgbgRgSQgTgUgbAAQgbAAgSATg");
	this.shape_6.setTransform(53.3,52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AhHBLIAeghQATAWATAAQAbAAAAgjIAAiGIAwAAIAACIQAAAkgUAUQgUATgiAAQgqABgbggg");
	this.shape_7.setTransform(31.2,52.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAoAAAWAVQASATAAAeIAAAAQAAAvgtARIAzBLgAgrgCIAtAAQARAAAKgIQAJgIAAgOIAAgBQAAgdgkAAIgtAAg");
	this.shape_8.setTransform(195.6,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AhDBTQgXgYAAguIAAh3IAuAAIAAB2QgBAZAMAOQANANAUAAQAVAAAMgNQAMgNAAgYIAAh4IAuAAIAAB2QAAAugZAZQgXAYgrAAQgrAAgYgYg");
	this.shape_9.setTransform(172.8,15.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AhPBNQgggfABgtIAAgBQgBgsAgggQAggfAvAAQAwgBAgAgQAgAfAAAtIAAAAQAAAuggAeQggAhgwAAQgvgBgggfgAgtguQgSATAAAbIAAAAQABAbARAUQATATAaAAQAcAAASgTQARgTAAgbIAAgBQABgbgTgSQgSgUgbAAQgbAAgSATg");
	this.shape_10.setTransform(148.7,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgWBpIAAhTIhRh+IA2AAIAxBUIAzhUIA1AAIhRB9IAABUg");
	this.shape_11.setTransform(125.2,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgWBpIAAimIhAAAIAAgrICtAAIAAArIhAAAIAACmg");
	this.shape_12.setTransform(95.8,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAoAAAWAVQASATAAAeIAAAAQAAAvgtARIAzBLgAgrgCIAtAAQARAAAKgIQAJgIAAgOIAAgBQAAgdgkAAIgtAAg");
	this.shape_13.setTransform(76,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBbDTgAAbASIgbhDIgcBDIA3AAg");
	this.shape_14.setTransform(52.6,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgWBpIAAimIhAAAIAAgrICtAAIAAArIhAAAIAACmg");
	this.shape_15.setTransform(31,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AhSBKIAbghQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgJgFgYgHQgkgJgPgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAgAAQAsAAAiAbIgZAjQgdgWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAIAFAbAHQAiAKAQAMQARAOAAAaIAAABQAAAegWASQgUARgjAAQgyAAgmgig");
	this.shape_16.setTransform(11.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,207.8,71), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glacier_path2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,120,505), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.walkers();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.walk_screen();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(141.4,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgzAyIALgPQAWARAXAAQAMAAAIgFQAIgGAAgJIAAgBQAAgKgKgFQgHgEgQgFQgVgGgJgEQgOgLAAgQIAAAAQAAgSANgKQANgLATAAQAaAAAWAPIgJAPQgUgNgUAAQgLAAgHAGQgHAFAAAIIAAABQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAAAQAAATgOALQgNALgVAAQgeAAgZgUg");
	this.shape_1.setTransform(131.6,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgvBOQgUgUAAgfIAAgBQAAgfAUgTQASgSAaAAQAfgBAUAdIAAhSIAUAAIAAC9IgUAAIAAgbQgUAegfAAQgaAAgSgSgAghgLQgOANAAAYIAAABQAAAWAPAQQAOANASAAQAUAAANgOQAQgPgBgWIAAgBQABgWgQgPQgNgOgUAAQgTAAgOAOg");
	this.shape_2.setTransform(116.3,47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AAnBEIAAhNQAAgTgKgLQgKgLgSABQgQAAgLALQgMAMAAATIAABLIgUAAIAAiFIAUAAIAAAYQAQgaAdAAQAYAAAOAOQAOAPAAAYIAABSg");
	this.shape_3.setTransform(100.2,50);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgrAzQgTgUAAgfIAAAAQAAgcASgVQATgUAaAAQAdAAARAVQAQATABAdIAAAHIhqAAQACAVAOANQAMALASAAQAZAAARgSIANALQgWAZgiAAQgbAAgTgTgAAsgHQgCgTgLgMQgMgOgSgBQgRABgMANQgMANgCATIBWAAIAAAAg");
	this.shape_4.setTransform(84.5,50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgkBEIAAiFIAUAAIAAAjQAHgSANgKQAPgKASABIAAAVIgBAAQgXAAgOAQQgPAQAAAdIAAA1g");
	this.shape_5.setTransform(64.4,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgrAzQgTgUAAgfIAAAAQAAgcASgVQATgUAaAAQAdAAARAVQAQATAAAdIAAAHIhpAAQACAVAOANQANALARAAQAZAAARgSIANALQgXAZghAAQgaAAgUgTgAAsgHQgCgTgLgMQgMgOgTgBQgQABgMANQgMANgCATIBWAAIAAAAg");
	this.shape_6.setTransform(50.8,50.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgIBEIg6iHIAWAAIAsBvIAuhvIAVAAIg6CHg");
	this.shape_7.setTransform(35.4,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgrAzQgTgUAAgfIAAAAQAAgcASgVQATgUAaAAQAdAAARAVQAQATAAAdIAAAHIhpAAQACAVAOANQANALARAAQAZAAARgSIANALQgXAZghAAQgaAAgUgTgAAsgHQgCgTgLgMQgMgOgSgBQgRABgMANQgMANgCATIBWAAIAAAAg");
	this.shape_8.setTransform(20.2,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AAnBEIAAhNQAAgTgKgLQgKgLgSABQgQAAgLALQgMAMAAATIAABLIgUAAIAAiFIAUAAIAAAYQAQgaAdAAQAYAAAOAOQAOAPAAAYIAABSg");
	this.shape_9.setTransform(4.6,50);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgqAzQgVgUAAgfIAAAAQABgcASgVQASgUAbAAQAdAAASAVQAPATAAAdIAAAHIhpAAQACAWANAMQANALASAAQAYABATgUIAMAMQgWAZghAAQgbAAgTgTgAArgGQgCgVgKgMQgMgOgTAAQgQAAgMAOQgMAMgCAVIBVAAIAAAAg");
	this.shape_10.setTransform(153.4,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgkBEIAAiFIAUAAIAAAjQAHgSANgKQAPgKASABIAAAVIgBAAQgXAAgOAQQgPAQAAAdIAAA1g");
	this.shape_11.setTransform(141.1,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgsA2QgOgPAAgYIAAhTIAUAAIAABOQAAATAKAKQAKALARAAQARAAAMgLQALgMAAgTIAAhMIATAAIAACGIgTAAIAAgYQgRAbgcAAQgZAAgNgPg");
	this.shape_12.setTransform(127,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AgVAzIAAhRIgTAAIAAgRIATAAIAAgpIAUAAIAAApIAqAAIAAARIgqAAIAABOQAAAWAWAAQAKAAAJgEIAAARQgLAGgNAAQglAAAAgmg");
	this.shape_13.setTransform(113.7,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AAnBEIAAhNQAAgTgKgLQgKgKgSgBQgQAAgLAMQgMAMAAATIAABLIgUAAIAAiFIAUAAIAAAXQAQgaAdAAQAYAAAOAPQAOAOAAAZIAABSg");
	this.shape_14.setTransform(100.7,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgrAzQgTgUAAgfIAAAAQAAgcASgVQATgUAaAAQAdAAARAVQAQATAAAdIAAAHIhpAAQACAWAOAMQANALARAAQAZABARgUIANAMQgXAZghAAQgaAAgUgTgAAsgGQgCgVgLgMQgMgOgTAAQgQAAgMAOQgMAMgCAVIBWAAIAAAAg");
	this.shape_15.setTransform(85,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AgIBEIg6iHIAWAAIAsBvIAuhvIAVAAIg6CHg");
	this.shape_16.setTransform(69.6,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AgvBOQgUgTAAggIAAgBQAAgeAUgVQASgRAagBQAfABAUAcIAAhSIAUAAIAAC9IgUAAIAAgbQgUAfgfAAQgagBgSgSgAgggLQgOANgBAYIAAABQAAAXAPAOQANAPATAAQATAAAOgPQAPgPABgWIAAgBQgBgWgPgOQgOgPgTAAQgUAAgMAOg");
	this.shape_17.setTransform(53,13.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AgqA7QgQgMAAgUIAAAAQAAgVAQgLQAPgKAagBQAVAAAUAHIAAgGQAAgkgoAAQgTAAgVAKIgGgRQAZgKAXgBQAcAAAPAPQAOAOAAAZIAABRIgTAAIAAgUQgSAXgeABQgUAAgOgLgAgcAGQgKAIAAANIAAAAQAAAMAKAHQAKAIAOAAQASAAANgKQANgLAAgQIAAgNQgUgFgUABQgRAAgLAGg");
	this.shape_18.setTransform(36.8,16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AgqAzQgVgUAAgfIAAAAQABgcASgVQASgUAbAAQAdAAASAVQAPATAAAdIAAAHIhpAAQACAWANAMQANALASAAQAYABATgUIAMAMQgWAZghAAQgbAAgTgTgAArgGQgCgVgKgMQgMgOgTAAQgQAAgMAOQgMAMgCAVIBVAAIAAAAg");
	this.shape_19.setTransform(14.3,16.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D233F").s().p("AAnBfIAAhPQAAgRgKgLQgKgLgSAAQgQAAgLAMQgMALAAASIAABNIgUAAIAAi9IAUAAIAABPQAQgaAdAAQAYAAAOAOQAOAPAAAYIAABTg");
	this.shape_20.setTransform(-1.3,13.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D233F").s().p("AgVAzIAAhRIgTAAIAAgRIATAAIAAgpIAUAAIAAApIAqAAIAAARIgqAAIAABOQAAAWAWAAQAKAAAJgEIAAARQgLAGgNAAQglAAAAgmg");
	this.shape_21.setTransform(-14.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-22,0,185.1,64), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(120.3,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgzAyIALgPQAWARAXAAQAMAAAIgFQAIgGAAgJIAAgBQAAgKgKgFQgHgEgQgFQgVgGgJgEQgOgLAAgQIAAAAQAAgSANgKQANgLATAAQAaAAAWAPIgJAPQgUgNgUAAQgLAAgHAGQgHAFAAAIIAAABQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAAAQAAATgOALQgNALgVAAQgeAAgZgUg");
	this.shape_1.setTransform(110.4,50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgkBEIAAiFIAUAAIAAAjQAHgSANgKQAPgKASABIAAAVIgBAAQgXAAgOAQQgPAQAAAdIAAA1g");
	this.shape_2.setTransform(99.6,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgqAzQgVgUABgfIAAAAQAAgcASgVQASgUAbAAQAdAAASAVQAQATAAAdIAAAHIhqAAQACAVAOANQAMALASAAQAYAAATgSIAMALQgXAZggAAQgcAAgSgTgAArgHQgCgTgKgMQgMgOgSgBQgRABgMANQgMANgCATIBVAAIAAAAg");
	this.shape_3.setTransform(86.1,50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_4.setTransform(74.9,47.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgpAyQgUgVAAgdIAAAAQAAgcAUgUQAUgVAcAAQAgAAAWAYIgNAOQgUgVgVAAQgTAAgOAPQgOAPAAAWIAAAAQAAAWAOAPQAOAPAUAAQAXAAASgUIANAMQgXAaggAAQgcAAgUgUg");
	this.shape_5.setTransform(64.3,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgqA7QgQgMAAgTIAAgBQAAgVAQgLQAPgLAaABQAVgBAUAHIAAgGQAAgkgoAAQgTAAgVAKIgGgRQAZgLAXABQAcAAAPAOQAOAOAAAZIAABRIgTAAIAAgUQgSAXgeAAQgUABgOgLgAgcAGQgKAHAAAOIAAAAQAAAMAKAIQAKAGAOABQASgBANgJQANgLAAgQIAAgNQgUgFgUABQgRgBgLAHg");
	this.shape_6.setTransform(48.8,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_7.setTransform(38.3,47.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("Ag8BHIAJgQQAXASAcAAQAWgBANgLQANgNAAgXIAAgQQgVAcgfAAQgZAAgTgRQgTgSAAgbIAAAAQAAgdATgRQATgRAZAAQAfAAAVAbIAAgZIAUAAIAABuQAAAfgSARQgSARggABQgiAAgagTgAghg7QgOANAAAUIAAABQAAATAOANQAOANATAAQATAAAOgNQAQgMgBgUIAAAAQABgVgQgNQgOgMgTAAQgTAAgOAMg");
	this.shape_8.setTransform(25.9,52.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_9.setTransform(135.5,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgqA7QgQgMAAgUIAAAAQAAgVAQgLQAPgKAagBQAVAAAUAHIAAgGQAAgkgoAAQgTAAgVAKIgGgRQAZgKAXgBQAcAAAPAPQAOAOAAAZIAABRIgTAAIAAgUQgSAXgeABQgUAAgOgLgAgcAGQgKAIAAANIAAAAQAAAMAKAHQAKAIAOAAQASAAANgKQANgLAAgQIAAgNQgUgFgUABQgRAAgLAGg");
	this.shape_10.setTransform(124.2,16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgzAyIALgPQAWASAXgBQAMABAIgGQAIgGAAgJIAAgBQAAgJgKgGQgHgEgQgFQgVgGgJgEQgOgKAAgRIAAAAQAAgRANgLQANgKATAAQAaAAAWAOIgJAPQgUgNgUAAQgLAAgHAFQgHAGAAAJIAAAAQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAABQAAASgOALQgNAKgVAAQgeABgZgUg");
	this.shape_11.setTransform(110.4,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgzAyIALgPQAWASAXgBQAMABAIgGQAIgGAAgJIAAgBQAAgJgKgGQgHgEgQgFQgVgGgJgEQgOgKAAgRIAAAAQAAgRANgLQANgKATAAQAaAAAWAOIgJAPQgUgNgUAAQgLAAgHAFQgHAGAAAJIAAAAQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAABQAAASgOALQgNAKgVAAQgeABgZgUg");
	this.shape_12.setTransform(97.5,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AgxAyQgUgUAAgeIAAAAQAAgcAUgUQAUgVAeAAQAdAAAUAVQAUATAAAdIAAAAQAAAdgUAUQgUAVgeAAQgdAAgUgUgAgjgkQgOAPAAAVIAAAAQAAAVAPAQQAOAPAVAAQAVAAAOgPQANgPAAgWIAAAAQABgVgOgPQgPgPgVAAQgVAAgOAPg");
	this.shape_13.setTransform(82.9,16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_14.setTransform(71.1,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgxAyQgUgUAAgeIAAAAQAAgcAUgUQAUgVAdAAQAeAAAVAVQATATAAAdIAAAAQAAAdgUAUQgUAVgeAAQgdAAgUgUgAgjgkQgOAPAAAVIAAAAQAAAVAPAQQAOAPAUAAQAWAAAOgPQANgPAAgWIAAAAQAAgVgNgPQgPgPgVAAQgUAAgPAPg");
	this.shape_15.setTransform(59.4,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AgpAyQgUgVAAgdIAAAAQAAgcAUgUQAUgVAcAAQAgAAAWAXIgNAPQgUgVgVABQgTAAgOAOQgOAQAAAVIAAAAQAAAWAOAPQAOAPAUAAQAXAAASgUIANAMQgXAaggAAQgcAAgUgUg");
	this.shape_16.setTransform(43.7,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AgVBfIAAh0IgTAAIAAgRIATAAIAAgMQAAgWAMgMQAJgLATAAQAMABAJADIAAARQgMgDgHAAQgXAAAAAcIAAALIAqAAIAAARIgpAAIAAB0g");
	this.shape_17.setTransform(24.1,13.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AgxAyQgUgUAAgeIAAAAQAAgcAUgUQAUgVAdAAQAeAAAVAVQATATAAAdIAAAAQAAAdgUAUQgUAVgeAAQgdAAgUgUgAgjgkQgNAPAAAVIAAAAQAAAVAOAQQAOAPAUAAQAWAAAOgPQAOgPAAgWIAAAAQAAgVgPgPQgOgPgVAAQgUAAgPAPg");
	this.shape_18.setTransform(10.5,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-3.9,0,148.8,64), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgcAdQAegDgCgaIgSAAIAAgvIAvAAIAAAoQAAA2g2ABg");
	this.shape.setTransform(206.2,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBaDTgAAcASIgchDIgbBDIA3AAg");
	this.shape_1.setTransform(190.6,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AAoBpIhAhaIgYAaIAABAIgvAAIAAjRIAvAAIAABcIBUhcIA4AAIhWBZIBaB4g");
	this.shape_2.setTransform(168.9,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AhSBKIAbghQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgIgFgZgHQglgJgOgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAhAAQAsAAAgAbIgXAjQgegWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAJAFAbAHQAhAKAPAMQASAOAAAaIAAABQAAAegVASQgVARgjAAQgzAAglgig");
	this.shape_3.setTransform(147,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBaDTgAAcASIgchDIgbBDIA3AAg");
	this.shape_4.setTransform(125.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBnAAIAAAqg");
	this.shape_5.setTransform(105.4,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBbDTgAAbASIgbhDIgcBDIA3AAg");
	this.shape_6.setTransform(83.5,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AA2BpIhkiEIAACEIguAAIAAjRIAqAAIBiCAIAAiAIAtAAIAADRg");
	this.shape_7.setTransform(50.8,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_8.setTransform(33.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(26.9,0,186.2,34), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AhSBLIAbgiQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgIgFgZgHQglgJgOgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAhAAQAsAAAgAbIgXAjQgegWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAJAFAbAHQAhAKAPAMQASAOAAAaIAAABQAAAegVASQgVARgjAAQgzAAglghg");
	this.shape.setTransform(228,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_1.setTransform(209,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_2.setTransform(190,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_3.setTransform(174.9,51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AA7BpIAAiIIg7BYIAAAAIg7hXIAACHIgtAAIAAjRIAyAAIA2BZIA3hZIAyAAIAADRg");
	this.shape_4.setTransform(156.9,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_5.setTransform(125.3,51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAoAAAWAVQASATAAAeIAAAAQAAAvgtARIAzBLgAgrgCIAtAAQARAAAKgIQAJgIAAgOIAAgBQAAgdgkAAIgtAAg");
	this.shape_6.setTransform(104.7,51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBaDTgAAcASIgchDIgbBDIA3AAg");
	this.shape_7.setTransform(81.3,51.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AhDBTQgYgYAAguIAAh3IAvAAIAAB2QAAAZAMAOQAMANAUAAQAWAAALgNQAMgNAAgYIAAh4IAvAAIAAB2QAAAugaAZQgYAYgqAAQgrAAgYgYg");
	this.shape_8.setTransform(58.2,51.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AA8BZQgcASghAAQgwAAgggfQgfggAAgsIAAgBQAAgtAfgfQAhggAvAAQAwAAAfAgQAgAeAAAuIAAAAQAAAggSAcIAVASIgdAhgAgvgwQgRATAAAcIAAAAQAAAbASATQASATAbABQAQAAALgGIghgdIAdghIAiAfQAGgNAAgPIAAgBQAAgbgSgTQgSgUgbABQgbAAgTASg");
	this.shape_9.setTransform(34.2,51.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AhSBLIAbgiQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgJgFgYgHQgkgJgPgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAgAAQAsAAAiAbIgZAjQgdgWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAIAFAbAHQAiAKAQAMQARAOAAAaIAAABQAAAegWASQgUARgjAAQgyAAgmghg");
	this.shape_10.setTransform(11.5,51.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AhDBNQgZgeAAguIAAgBQAAgtAZgfQAbggApABQAoAAAaAeQAaAfAAAuIAAAAQAAAvgaAeQgaAfgpABQgoAAgbgggAghgvQgMASAAAdIAAAAQAAAdAMATQANATAVAAQAUAAAMgTQANgTAAgcIAAgBQAAgcgNgTQgNgTgUAAQgUAAgNATg");
	this.shape_11.setTransform(165.4,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AhDBNQgZgeAAguIAAgBQAAgtAagfQAaggAoABQApAAAbAeQAZAfAAAuIAAAAQAAAvgZAeQgbAfgpABQgpAAgagggAgggvQgNASAAAdIAAAAQAAAdANATQANATATAAQAVAAAMgTQANgTAAgcIAAgBQAAgcgNgTQgNgTgUAAQgTAAgNATg");
	this.shape_12.setTransform(143.5,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AhDBNQgZgeAAguIAAgBQAAgtAagfQAaggAoABQAqAAAaAeQAZAfAAAuIAAAAQAAAvgZAeQgbAfgpABQgoAAgbgggAghgvQgMASAAAdIAAAAQAAAdAMATQAOATATAAQAVAAANgTQAMgTAAgcIAAgBQAAgcgNgTQgNgTgUAAQgTAAgOATg");
	this.shape_13.setTransform(121.6,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AgcAdQAegDgCgaIgSAAIAAgvIAvAAIAAAoQAAA2g2ABg");
	this.shape_14.setTransform(105.8,26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AhNBUIAYgkQAXASAXAAQAUAAAMgRQAIgMACgSQgSAOgYAAQgiABgVgTQgUgRAAgfIAAgBQAAggAWgVQAXgUAjAAQAlAAAXAWQAZAZAAA2IAAABQAAAzgYAfQgYAfgrABQgngBgegYgAgbg7QgJAIAAAPIAAABQAAAOAKAIQAKAJAQAAQAQAAAKgJQAKgIAAgOIAAgBQAAgOgKgJQgKgJgQAAQgRAAgKAJg");
	this.shape_15.setTransform(92.2,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AhNBrIAAglIBGg6QAUgPAHgKQAJgMAAgMQAAgNgIgHQgIgHgNAAQgKAAgKAHQgJAGgMAPIghgaQARgXAQgKQATgKAZgBQAhAAAUASQAUASAAAdIAAABQAAAYgOASQgLAOgeAYIgiAaIBbAAIAAApg");
	this.shape_16.setTransform(72.8,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,239.9,70), null);


(lib.pursuit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieA6IALgOQAZAXAfAAQAQAAAKgIQAKgHAAgNIAAAAQAAgMgIgGQgKgHgYgFQgdgHgMgJQgOgLAAgUIAAAAQAAgTAPgNQAQgNAXAAQAfAAAaAVIgLANQgWgRgZAAQgPAAgKAHQgJAIAAALIAAABQAAAMAIAGQAKAHAaAHQAbAFANAKQANALAAASIAAABQAAAUgQANQgPANgZAAQglAAgdgagACNBRIAAiCIg7BWIgBAAIg7hWIAACCIgSAAIAAihIATAAIA7BXIA7hXIASAAIAAChg");
	this.shape.setTransform(563.2,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB1F48").s().p("AAQCXQgQgVgXgLQgZgKgaAFQgZAEgTARIDOlEQAIgMANAGQANAFgEAOIhXF2QgBgZgOgWg");
	this.shape_1.setTransform(443,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsDEQgNgFADgOIBWl2QABAZAPAVQAPAWAYAKQAZALAagFQAagFAUgSIjQFGQgFAIgIAAQgDAAgEgCg");
	this.shape_2.setTransform(431.3,60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBEsIAAndIi2AAIAAh6IHvAAIAAB6Ii2AAIAAHdg");
	this.shape_3.setTransform(506.7,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai/DtQhFhEAAiDIAAlVICEAAIAAFSQAABHAiAnQAiAlA8ABQA9AAAiglQAiglAAhGIAAlWICEAAIAAFQQAACGhHBGQhEBEh7AAQh7AAhDhEg");
	this.shape_4.setTransform(366.5,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah0EcQhDgYg1gwIBOhdQBYBJBaAAQAoAAAXgPQAXgPAAgbIAAgBQAAgagXgPQgZgRhIgTQhngagpgfQg2gqAAhTIAAgCQAAhRA7gyQA6gxBdAAQB+AABfBMIhEBjQhVg7hGAAQglAAgVAPQgTAPAAAWIAAACQAAAdAaAPQAYAOBOAVQBiAZArAlQAxAqAABLIAAABQAABYg9AyQg8AwhjAAQhEAAhBgYg");
	this.shape_5.setTransform(280.5,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABpEsIiAjAIhnAAIAADAIiEAAIAApXIERAAQBxAAA+A9QAzAzAABWIAAACQAABGgjAvQghAtg9AXICTDWgAh+gIICFAAQAvAAAbgXQAagXABgmIAAgCQgBgqgbgWQgbgWgxAAIiCAAg");
	this.shape_6.setTransform(199.2,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai/DtQhFhEAAiDIAAlVICEAAIAAFSQAABHAiAnQAiAlA8ABQA9AAAiglQAiglAAhGIAAlWICEAAIAAFQQAACGhHBGQhEBEh7AAQh7AAhDhEg");
	this.shape_7.setTransform(108.1,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjsEsIAApXID0AAQBqAAA+A6QA9A4AABdIAAACQAABjhGA5QhDA2hoAAIhkAAIAAC0gAhoADIBoAAQAwAAAcgZQAcgaAAgnIAAgCQAAgsgdgYQgcgXgxAAIhmAAg");
	this.shape_8.setTransform(23.7,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pursuit, new cjs.Rectangle(0,0,579.1,80.3), null);


(lib.alska_redbutt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAqIgIgTIgiAAIgIATIgTAAIAkhTIARAAIAjBTgAALAHIgLgaIgKAaIAVAAg");
	this.shape.setTransform(127,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAqIgZgjIgKAKIAAAZIgSAAIAAhTIASAAIAAAkIAhgkIAXAAIgjAjIAkAwg");
	this.shape_1.setTransform(118.3,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAeIAKgNQANAKAMAAQAMAAAAgIIAAgBQAAgDgEgCQgDgCgJgDQgPgEgGgEQgHgFAAgMIAAAAQAAgLAIgHQAIgHANAAQARAAAOAKIgKAOQgMgIgJAAQgFAAgDACQgDACAAAEQAAAEAEACQADACAKACQAOAEAGAEQAHAHAAAKQAAANgJAGQgIAHgOAAQgTAAgPgNg");
	this.shape_2.setTransform(109.6,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAALAHIgLgaIgKAaIAVAAg");
	this.shape_3.setTransform(101.1,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_4.setTransform(93,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAALAHIgLgaIgLAaIAWAAg");
	this.shape_5.setTransform(84.3,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAAQIgsAAIAAARIAnAAIAAAQIgnAAIAAASIAtAAIAAAQg");
	this.shape_6.setTransform(72.1,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIgRgbIgPAAIAAAbIgSAAIAAhTIAlAAQAQAAAJAIQAHAIAAAMQAAASgSAHIAUAegAgRAAIASAAQAHAAADgDQAEgDAAgGIAAAAQAAgMgOgBIgSAAg");
	this.shape_7.setTransform(63.9,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgRANgMQANgNASgBQATAAANANQAMAMAAASQAAASgMAMQgNANgTABQgTAAgMgNgAgSgSQgGAIgBAKQAAALAIAHQAHAJAKgBQALABAHgJQAIgHAAgLQgBgKgHgIQgHgIgLAAQgKAAgIAIg");
	this.shape_8.setTransform(54.2,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_9.setTransform(45.7,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAhAAQAPAAAJAIQAIAIAAANIAAABQAAANgKAHQgJAIgOAAIgOAAIAAAZgAgOAAIAOAAQAHAAAEgCQAEgEAAgFQAAgHgEgDQgEgDgHgBIgOAAg");
	this.shape_10.setTransform(38,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAqIgTgdIgSAdIgVAAIAdgqIgcgpIAWAAIAQAbIASgbIAVAAIgcApIAdAqg");
	this.shape_11.setTransform(29.3,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAAQIgsAAIAAARIAnAAIAAAQIgnAAIAAASIAtAAIAAAQg");
	this.shape_12.setTransform(21.1,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41B44").s().p("Ar/B8IBbj3IWkAAIAAD3g");
	this.shape_13.setTransform(76.8,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.alska_redbutt, new cjs.Rectangle(0,0,153.6,24.9), null);


// stage content:
(lib._300x600_glaciers = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// explore Alaska
	this.instance = new lib.alska_redbutt();
	this.instance.parent = this;
	this.instance.setTransform(386.3,568.5,1,1,0,0,0,76.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:356.9},0).wait(1).to({x:311.1},0).wait(1).to({x:283.3},0).wait(1).to({x:266.2},0).wait(1).to({x:254.4},0).wait(1).to({x:245.9},0).wait(1).to({x:239.5},0).wait(1).to({x:234.6},0).wait(1).to({x:231},0).wait(1).to({x:228.3},0).wait(1).to({x:226.4},0).wait(1).to({x:225.2},0).wait(1).to({x:224.5},0).wait(1).to({x:224.3},0).wait(115).to({x:224.8},0).wait(1).to({x:226.8},0).wait(1).to({x:230.5},0).wait(1).to({x:236.7},0).wait(1).to({x:246.2},0).wait(1).to({x:260.3},0).wait(1).to({x:279.8},0).wait(1).to({x:302.8},0).wait(1).to({x:324.3},0).wait(1).to({x:341.5},0).wait(1).to({x:354.5},0).wait(1).to({x:364.1},0).wait(1).to({x:371.3},0).wait(1).to({x:376.7},0).wait(1).to({x:380.5},0).wait(1).to({x:383.2},0).wait(1).to({x:385},0).wait(1).to({x:386},0).wait(1).to({x:386.3},0).wait(39));

	// pursuit
	this.instance_1 = new lib.pursuit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.7,569,0.19,0.19,0,0,0,290.3,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:289.5,regY:40.1,x:-30.4,y:568.9},0).wait(1).to({x:7.8},0).wait(1).to({x:31},0).wait(1).to({x:45.2},0).wait(1).to({x:55},0).wait(1).to({x:62.1},0).wait(1).to({x:67.5},0).wait(1).to({x:71.5},0).wait(1).to({x:74.5},0).wait(1).to({x:76.8},0).wait(1).to({x:78.3},0).wait(1).to({x:79.4},0).wait(1).to({x:80},0).wait(1).to({regX:290.3,regY:40.6,x:80.3,y:569},0).wait(110).to({regX:289.5,regY:40.1,x:80.4,y:568.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:81.2,y:569},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:82.9,y:569.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:85.5,y:569.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:89.6,y:569.6},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:95.7,y:570.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:104.1,y:570.7},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:114,y:571.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:123.3,y:572.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:130.7,y:572.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:136.3,y:573.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:140.5,y:573.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:143.6,y:573.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:145.9,y:573.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:147.6,y:574},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:148.7,y:574.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.5,y:574.2},0).wait(1).to({x:149.9},0).wait(1).to({regX:290.6,regY:40.9,x:150.3,y:574.4},0).wait(44));

	// Layer_19
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,254.1,1,1,0,0,0,101.9,29.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).wait(1).to({regX:102.4,regY:23.3,x:151.2,y:247.7,alpha:0.002},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:101.9,regY:29.7,x:150.7,y:254.1,alpha:1},0).wait(13));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_136 = new cjs.Graphics().p("AFEKjIAAzKIIpAAIAATKg");
	var mask_graphics_137 = new cjs.Graphics().p("AFEKkIAAzKIIpAAIAATKg");
	var mask_graphics_138 = new cjs.Graphics().p("AFEKnIAAzKIIpAAIAATKg");
	var mask_graphics_139 = new cjs.Graphics().p("AFEKsIAAzKIIpAAIAATKg");
	var mask_graphics_140 = new cjs.Graphics().p("AFEK0IAAzKIIpAAIAATKg");
	var mask_graphics_141 = new cjs.Graphics().p("AFELAIAAzKIIpAAIAATKg");
	var mask_graphics_142 = new cjs.Graphics().p("AFELRIAAzLIIpAAIAATLg");
	var mask_graphics_143 = new cjs.Graphics().p("AFELnIAAzKIIpAAIAATKg");
	var mask_graphics_144 = new cjs.Graphics().p("AFEMGIAAzLIIpAAIAATLg");
	var mask_graphics_145 = new cjs.Graphics().p("AFEMsIAAzKIIpAAIAATKg");
	var mask_graphics_146 = new cjs.Graphics().p("AFENZIAAzKIIpAAIAATKg");
	var mask_graphics_147 = new cjs.Graphics().p("AFEOHIAAzKIIpAAIAATKg");
	var mask_graphics_148 = new cjs.Graphics().p("AFEOwIAAzKIIpAAIAATKg");
	var mask_graphics_149 = new cjs.Graphics().p("AFEPTIAAzLIIpAAIAATLg");
	var mask_graphics_150 = new cjs.Graphics().p("AFEPuIAAzKIIpAAIAATKg");
	var mask_graphics_151 = new cjs.Graphics().p("AFEQEIAAzKIIpAAIAATKg");
	var mask_graphics_152 = new cjs.Graphics().p("AFEQWIAAzKIIpAAIAATKg");
	var mask_graphics_153 = new cjs.Graphics().p("AFEQkIAAzKIIpAAIAATKg");
	var mask_graphics_154 = new cjs.Graphics().p("AFEQwIAAzLIIpAAIAATLg");
	var mask_graphics_155 = new cjs.Graphics().p("AFEQ4IAAzKIIpAAIAATKg");
	var mask_graphics_156 = new cjs.Graphics().p("AFEQ/IAAzKIIpAAIAATKg");
	var mask_graphics_157 = new cjs.Graphics().p("AFERFIAAzLIIpAAIAATLg");
	var mask_graphics_158 = new cjs.Graphics().p("AFERIIAAzKIIpAAIAATKg");
	var mask_graphics_159 = new cjs.Graphics().p("AFERLIAAzLIIpAAIAATLg");
	var mask_graphics_160 = new cjs.Graphics().p("AFERMIAAzKIIpAAIAATKg");
	var mask_graphics_161 = new cjs.Graphics().p("AFERNIAAzLIIpAAIAATLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_graphics_136,x:87.7,y:67.6}).wait(1).to({graphics:mask_graphics_137,x:87.7,y:67.6}).wait(1).to({graphics:mask_graphics_138,x:87.7,y:67.9}).wait(1).to({graphics:mask_graphics_139,x:87.7,y:68.4}).wait(1).to({graphics:mask_graphics_140,x:87.7,y:69.2}).wait(1).to({graphics:mask_graphics_141,x:87.7,y:70.4}).wait(1).to({graphics:mask_graphics_142,x:87.7,y:72.1}).wait(1).to({graphics:mask_graphics_143,x:87.7,y:74.3}).wait(1).to({graphics:mask_graphics_144,x:87.7,y:77.4}).wait(1).to({graphics:mask_graphics_145,x:87.7,y:81.2}).wait(1).to({graphics:mask_graphics_146,x:87.7,y:85.7}).wait(1).to({graphics:mask_graphics_147,x:87.7,y:90.3}).wait(1).to({graphics:mask_graphics_148,x:87.7,y:94.4}).wait(1).to({graphics:mask_graphics_149,x:87.7,y:97.9}).wait(1).to({graphics:mask_graphics_150,x:87.7,y:100.6}).wait(1).to({graphics:mask_graphics_151,x:87.7,y:102.8}).wait(1).to({graphics:mask_graphics_152,x:87.7,y:104.6}).wait(1).to({graphics:mask_graphics_153,x:87.7,y:106}).wait(1).to({graphics:mask_graphics_154,x:87.7,y:107.2}).wait(1).to({graphics:mask_graphics_155,x:87.7,y:108}).wait(1).to({graphics:mask_graphics_156,x:87.7,y:108.7}).wait(1).to({graphics:mask_graphics_157,x:87.7,y:109.3}).wait(1).to({graphics:mask_graphics_158,x:87.7,y:109.6}).wait(1).to({graphics:mask_graphics_159,x:87.7,y:109.9}).wait(1).to({graphics:mask_graphics_160,x:87.7,y:110}).wait(1).to({graphics:mask_graphics_161,x:87.7,y:110.1}).wait(25));

	// Layer_17
	this.instance_3 = new lib.endpath();
	this.instance_3.parent = this;
	this.instance_3.setTransform(138,137);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).wait(50));

	// Layer_16
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,97.8,1,1,0,0,0,103.9,35.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(132).to({_off:false},0).wait(1).to({regY:34,y:96.3,alpha:0.002},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.201},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regY:35.5,y:97.8,alpha:1},0).wait(31));

	// Layer_14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_75 = new cjs.Graphics().p("Az2BfIAAi9MAqcAAAIAAC9g");
	var mask_1_graphics_76 = new cjs.Graphics().p("Az1DMIAAmXMAqbAAAIAAGXg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Az1E4IAApvMAqbAAAIAAJvg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Az1GgIAAs/MAqbAAAIAAM/g");
	var mask_1_graphics_79 = new cjs.Graphics().p("Az1IGIAAwLMAqbAAAIAAQLg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Az1JqIAAzTMAqbAAAIAATTg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Az1LLIAA2VMAqbAAAIAAWVg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Az1MqIAA5TMAqbAAAIAAZTg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Az1OGIAA8LMAqbAAAIAAcLg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Az1PfIAA+9MAqbAAAIAAe9g");
	var mask_1_graphics_85 = new cjs.Graphics().p("Az1Q2MAAAghrMAqbAAAMAAAAhrg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Az1SLMAAAgkVMAqbAAAMAAAAkVg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Az1TdMAAAgm5MAqbAAAMAAAAm5g");
	var mask_1_graphics_88 = new cjs.Graphics().p("Az1UsMAAAgpXMAqbAAAMAAAApXg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Az1V5MAAAgrxMAqbAAAMAAAArxg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Az1XDMAAAguFMAqbAAAMAAAAuFg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Az1YLMAAAgwVMAqbAAAMAAAAwVg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Az1ZRMAAAgyhMAqbAAAMAAAAyhg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Az1aTMAAAg0lMAqbAAAMAAAA0lg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Az1bUMAAAg2nMAqbAAAMAAAA2ng");
	var mask_1_graphics_95 = new cjs.Graphics().p("Az1cSMAAAg4jMAqbAAAMAAAA4jg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Az1dNMAAAg6ZMAqbAAAMAAAA6Zg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Az1eGMAAAg8LMAqbAAAMAAAA8Lg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Az1e8MAAAg93MAqbAAAMAAAA93g");
	var mask_1_graphics_99 = new cjs.Graphics().p("Az1fvMAAAg/dMAqbAAAMAAAA/dg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgT1AghMAAAhBBMAqbAAAMAAABBBg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgT1AhPMAAAhCdMAqbAAAMAAABCdg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgT1Ah7MAAAhD1MAqbAAAMAAABD1g");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgT1AilMAAAhFJMAqbAAAMAAABFJg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgT1AjMMAAAhGXMAqbAAAMAAABGXg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgT1AjxMAAAhHhMAqbAAAMAAABHhg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgT1AkTMAAAhIlMAqbAAAMAAABIlg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgT1AkyMAAAhJjMAqbAAAMAAABJjg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgT1AlPMAAAhKdMAqbAAAMAAABKdg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgT1AlqMAAAhLTMAqbAAAMAAABLTg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgT1AmCMAAAhMDMAqbAAAMAAABMDg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgT1AmXMAAAhMtMAqbAAAMAAABMtg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgT1AmqMAAAhNTMAqbAAAMAAABNTg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EgT1Am6MAAAhNzMAqbAAAMAAABNzg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgT1AnIMAAAhOPMAqbAAAMAAABOPg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgT1AnUMAAAhOnMAqbAAAMAAABOng");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgT1AncMAAAhO3MAqbAAAMAAABO3g");
	var mask_1_graphics_117 = new cjs.Graphics().p("EgT1AnjMAAAhPFMAqbAAAMAAABPFg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgT1AnnMAAAhPNMAqbAAAMAAABPNg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgT2AnoMAAAhPPMAqcAAAMAAABPPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_1_graphics_75,x:144.6,y:9.5}).wait(1).to({graphics:mask_1_graphics_76,x:144.6,y:20.4}).wait(1).to({graphics:mask_1_graphics_77,x:144.6,y:31.2}).wait(1).to({graphics:mask_1_graphics_78,x:144.6,y:41.6}).wait(1).to({graphics:mask_1_graphics_79,x:144.6,y:51.8}).wait(1).to({graphics:mask_1_graphics_80,x:144.6,y:61.8}).wait(1).to({graphics:mask_1_graphics_81,x:144.6,y:71.5}).wait(1).to({graphics:mask_1_graphics_82,x:144.6,y:81}).wait(1).to({graphics:mask_1_graphics_83,x:144.6,y:90.2}).wait(1).to({graphics:mask_1_graphics_84,x:144.6,y:99.1}).wait(1).to({graphics:mask_1_graphics_85,x:144.6,y:107.8}).wait(1).to({graphics:mask_1_graphics_86,x:144.6,y:116.3}).wait(1).to({graphics:mask_1_graphics_87,x:144.6,y:124.5}).wait(1).to({graphics:mask_1_graphics_88,x:144.6,y:132.4}).wait(1).to({graphics:mask_1_graphics_89,x:144.6,y:140.1}).wait(1).to({graphics:mask_1_graphics_90,x:144.6,y:147.5}).wait(1).to({graphics:mask_1_graphics_91,x:144.6,y:154.7}).wait(1).to({graphics:mask_1_graphics_92,x:144.6,y:161.7}).wait(1).to({graphics:mask_1_graphics_93,x:144.6,y:168.3}).wait(1).to({graphics:mask_1_graphics_94,x:144.6,y:174.8}).wait(1).to({graphics:mask_1_graphics_95,x:144.6,y:181}).wait(1).to({graphics:mask_1_graphics_96,x:144.6,y:186.9}).wait(1).to({graphics:mask_1_graphics_97,x:144.6,y:192.6}).wait(1).to({graphics:mask_1_graphics_98,x:144.6,y:198}).wait(1).to({graphics:mask_1_graphics_99,x:144.6,y:203.1}).wait(1).to({graphics:mask_1_graphics_100,x:144.6,y:208.1}).wait(1).to({graphics:mask_1_graphics_101,x:144.6,y:212.7}).wait(1).to({graphics:mask_1_graphics_102,x:144.6,y:217.1}).wait(1).to({graphics:mask_1_graphics_103,x:144.6,y:221.3}).wait(1).to({graphics:mask_1_graphics_104,x:144.6,y:225.2}).wait(1).to({graphics:mask_1_graphics_105,x:144.6,y:228.9}).wait(1).to({graphics:mask_1_graphics_106,x:144.6,y:232.3}).wait(1).to({graphics:mask_1_graphics_107,x:144.6,y:235.4}).wait(1).to({graphics:mask_1_graphics_108,x:144.6,y:238.3}).wait(1).to({graphics:mask_1_graphics_109,x:144.6,y:241}).wait(1).to({graphics:mask_1_graphics_110,x:144.6,y:243.4}).wait(1).to({graphics:mask_1_graphics_111,x:144.6,y:245.5}).wait(1).to({graphics:mask_1_graphics_112,x:144.6,y:247.4}).wait(1).to({graphics:mask_1_graphics_113,x:144.6,y:249}).wait(1).to({graphics:mask_1_graphics_114,x:144.6,y:250.4}).wait(1).to({graphics:mask_1_graphics_115,x:144.6,y:251.6}).wait(1).to({graphics:mask_1_graphics_116,x:144.6,y:252.4}).wait(1).to({graphics:mask_1_graphics_117,x:144.6,y:253.1}).wait(1).to({graphics:mask_1_graphics_118,x:144.6,y:253.5}).wait(1).to({graphics:mask_1_graphics_119,x:144.6,y:253.6}).wait(67));

	// Layer_13
	this.instance_5 = new lib.glacier_path2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90,2);

	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,254.5,1,1,0,0,0,60,252.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},75).to({state:[{t:this.instance_6}]},49).to({state:[{t:this.instance_6}]},10).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).to({alpha:0},10).wait(52));

	// Layer_12
	this.instance_7 = new lib.Symbol2copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,106.9,1,1,0,0,0,70.5,32);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,163.6,1,1,0,0,0,70.5,32);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},72).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},28).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(72).to({_off:false},0).wait(1).to({regX:70.4,regY:30.4,x:149.9,y:105.4,alpha:0.005},0).wait(1).to({y:106,alpha:0.024},0).wait(1).to({y:107.2,alpha:0.067},0).wait(1).to({y:109.8,alpha:0.153},0).wait(1).to({y:114.2,alpha:0.301},0).wait(1).to({y:119,alpha:0.462},0).wait(1).to({y:122.5,alpha:0.582},0).wait(1).to({y:125.1,alpha:0.67},0).wait(1).to({y:127.1,alpha:0.736},0).wait(1).to({y:128.6,alpha:0.788},0).wait(1).to({y:129.9,alpha:0.829},0).wait(1).to({y:130.9,alpha:0.864},0).wait(1).to({y:131.7,alpha:0.892},0).wait(1).to({y:132.4,alpha:0.915},0).wait(1).to({y:133,alpha:0.934},0).wait(1).to({y:133.5,alpha:0.951},0).wait(1).to({y:133.9,alpha:0.964},0).wait(1).to({y:134.2,alpha:0.974},0).wait(1).to({y:134.4,alpha:0.983},0).wait(1).to({y:134.6,alpha:0.989},0).wait(1).to({y:134.8,alpha:0.994},0).wait(1).to({y:134.9,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:150,y:136.6,alpha:1},0).wait(29).to({regX:70.4,regY:30.4,x:149.9,y:135.1,alpha:0.995},0).wait(1).to({y:135.6,alpha:0.976},0).wait(1).to({y:136.8,alpha:0.933},0).wait(1).to({y:139.1,alpha:0.847},0).wait(1).to({y:143.1,alpha:0.699},0).wait(1).to({y:147.4,alpha:0.538},0).wait(1).to({y:150.7,alpha:0.418},0).wait(1).to({y:153,alpha:0.33},0).wait(1).to({y:154.8,alpha:0.264},0).wait(1).to({y:156.2,alpha:0.212},0).wait(1).to({y:157.3,alpha:0.171},0).wait(1).to({y:158.3,alpha:0.136},0).wait(1).to({y:159,alpha:0.108},0).wait(1).to({y:159.7,alpha:0.085},0).wait(1).to({y:160.2,alpha:0.066},0).wait(1).to({y:160.6,alpha:0.049},0).wait(1).to({y:161,alpha:0.036},0).wait(1).to({y:161.3,alpha:0.026},0).wait(1).to({y:161.5,alpha:0.017},0).wait(1).to({y:161.7,alpha:0.011},0).wait(1).to({y:161.8,alpha:0.006},0).wait(1).to({y:161.9,alpha:0.002},0).wait(1).to({alpha:0.001},0).to({_off:true},1).wait(38));

	// Layer_11
	this.instance_9 = new lib.Symbol1copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.1,69.4,1,1,0,0,0,120,35);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(69).to({_off:false},0).wait(1).to({regX:120.3,regY:17.8,x:150.4,y:52.3,alpha:0.005},0).wait(1).to({y:52.9,alpha:0.024},0).wait(1).to({y:54.1,alpha:0.067},0).wait(1).to({y:56.7,alpha:0.153},0).wait(1).to({y:61.1,alpha:0.301},0).wait(1).to({y:65.9,alpha:0.462},0).wait(1).to({y:69.4,alpha:0.582},0).wait(1).to({y:72,alpha:0.67},0).wait(1).to({y:74,alpha:0.736},0).wait(1).to({y:75.5,alpha:0.788},0).wait(1).to({y:76.8,alpha:0.829},0).wait(1).to({y:77.8,alpha:0.864},0).wait(1).to({y:78.6,alpha:0.892},0).wait(1).to({y:79.3,alpha:0.915},0).wait(1).to({y:79.9,alpha:0.934},0).wait(1).to({y:80.4,alpha:0.951},0).wait(1).to({y:80.8,alpha:0.964},0).wait(1).to({y:81.1,alpha:0.974},0).wait(1).to({y:81.3,alpha:0.983},0).wait(1).to({y:81.5,alpha:0.989},0).wait(1).to({y:81.7,alpha:0.994},0).wait(1).to({y:81.8,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:150.1,y:99.1,alpha:1},0).wait(32).to({regX:120.3,regY:17.8,x:150.4,y:82,alpha:0.995},0).wait(1).to({y:82.5,alpha:0.976},0).wait(1).to({y:83.7,alpha:0.933},0).wait(1).to({y:86,alpha:0.847},0).wait(1).to({y:90,alpha:0.699},0).wait(1).to({y:94.3,alpha:0.538},0).wait(1).to({y:97.6,alpha:0.418},0).wait(1).to({y:99.9,alpha:0.33},0).wait(1).to({y:101.7,alpha:0.264},0).wait(1).to({y:103.1,alpha:0.212},0).wait(1).to({y:104.2,alpha:0.171},0).wait(1).to({y:105.2,alpha:0.136},0).wait(1).to({y:105.9,alpha:0.108},0).wait(1).to({y:106.6,alpha:0.085},0).wait(1).to({y:107.1,alpha:0.066},0).wait(1).to({y:107.5,alpha:0.049},0).wait(1).to({y:107.9,alpha:0.036},0).wait(1).to({y:108.2,alpha:0.026},0).wait(1).to({y:108.4,alpha:0.017},0).wait(1).to({y:108.6,alpha:0.011},0).wait(1).to({y:108.7,alpha:0.006},0).wait(1).to({y:108.8,alpha:0.002},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120,regY:35,x:150.1,y:126.1,alpha:0},0).wait(38));

	// Layer_15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_120 = new cjs.Graphics().p("EgWkAoSMAAAhQjMAuAAAAMAAABQjg");
	var mask_2_graphics_121 = new cjs.Graphics().p("EgWkAoSMAAAhQUMAuAAAAMAAABQUg");
	var mask_2_graphics_122 = new cjs.Graphics().p("EgWkAoSMAAAhPjMAuAAAAMAAABPjg");
	var mask_2_graphics_123 = new cjs.Graphics().p("EgWkAoSMAAAhOHMAuAAAAMAAABOHg");
	var mask_2_graphics_124 = new cjs.Graphics().p("EgWkAoSMAAAhLyMAuAAAAMAAABLyg");
	var mask_2_graphics_125 = new cjs.Graphics().p("EgWkAoSMAAAhISMAuAAAAMAAABISg");
	var mask_2_graphics_126 = new cjs.Graphics().p("EgWkAoSMAAAhDLMAuAAAAMAAABDLg");
	var mask_2_graphics_127 = new cjs.Graphics().p("EgWkAoSMAAAg8CMAuAAAAMAAAA8Cg");
	var mask_2_graphics_128 = new cjs.Graphics().p("EgWkAoSMAAAgyyMAuAAAAMAAAAyyg");
	var mask_2_graphics_129 = new cjs.Graphics().p("EgWkAoSMAAAgojMAuAAAAMAAAAojg");
	var mask_2_graphics_130 = new cjs.Graphics().p("EgWkAoSIAA/LMAuAAAAIAAfLg");
	var mask_2_graphics_131 = new cjs.Graphics().p("EgWkAoSIAA3lMAuAAAAIAAXlg");
	var mask_2_graphics_132 = new cjs.Graphics().p("EgWkAoSIAAxrMAuAAAAIAARrg");
	var mask_2_graphics_133 = new cjs.Graphics().p("EgWkAoSIAAtKMAuAAAAIAANKg");
	var mask_2_graphics_134 = new cjs.Graphics().p("EgWkAoSIAApsMAuAAAAIAAJsg");
	var mask_2_graphics_135 = new cjs.Graphics().p("EgWkAoSIAAnDMAuAAAAIAAHDg");
	var mask_2_graphics_136 = new cjs.Graphics().p("EgWkAoSIAAlDMAuAAAAIAAFDg");
	var mask_2_graphics_137 = new cjs.Graphics().p("EgWkAoSIAAjlMAuAAAAIAADlg");
	var mask_2_graphics_138 = new cjs.Graphics().p("EgWkAoSIAAiiMAuAAAAIAACig");
	var mask_2_graphics_139 = new cjs.Graphics().p("EgWkAoSIAAh2MAuAAAAIAAB2g");
	var mask_2_graphics_140 = new cjs.Graphics().p("EgWkAoSIAAhdMAuAAAAIAABdg");
	var mask_2_graphics_141 = new cjs.Graphics().p("EgWkAoSIAAhWMAuAAAAIAABWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_2_graphics_120,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_121,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_122,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_123,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_124,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_125,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_126,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_127,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_128,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_129,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_130,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_131,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_132,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_133,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_134,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_135,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_136,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_137,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_138,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_139,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_140,x:150,y:257.8}).wait(1).to({graphics:mask_2_graphics_141,x:150,y:257.8}).wait(45));

	// Layer_10
	this.instance_10 = new lib.Symbol4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,300,1.3,1.3,0,0,0,150,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300.1,alpha:0.004},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300,alpha:0.018},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:150.1,alpha:0.044},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:150,alpha:0.088},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.156},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:150.1,y:300.1,alpha:0.259},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300,alpha:0.397},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150,alpha:0.547},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.674},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.771},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.1,y:300.1,alpha:0.842},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.895},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:300,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.1,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:300,alpha:1},0).wait(113));

	// Layer_9
	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,300,1.3,1.3,0,0,0,150,300);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300.1,alpha:0.004},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300,alpha:0.018},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:150.1,alpha:0.044},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:150,alpha:0.088},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.156},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:150.1,y:300.1,alpha:0.259},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300,alpha:0.397},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150,alpha:0.547},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.674},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.771},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.1,y:300.1,alpha:0.842},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.895},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:300,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.1,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:300,alpha:1},0).wait(113));

	// Layer_6
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,142,1,1,0,0,0,70.5,32);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({_off:false},0).wait(1).to({regX:70,regY:32.4,x:149.5,y:142.5,alpha:0.006},0).wait(1).to({y:143,alpha:0.027},0).wait(1).to({y:144.3,alpha:0.075},0).wait(1).to({y:146.8,alpha:0.174},0).wait(1).to({y:151,alpha:0.338},0).wait(1).to({y:155.1,alpha:0.497},0).wait(1).to({y:158,alpha:0.612},0).wait(1).to({y:160.2,alpha:0.695},0).wait(1).to({y:161.8,alpha:0.758},0).wait(1).to({y:163,alpha:0.807},0).wait(1).to({y:164.1,alpha:0.847},0).wait(1).to({y:164.9,alpha:0.879},0).wait(1).to({y:165.6,alpha:0.906},0).wait(1).to({y:166.1,alpha:0.927},0).wait(1).to({y:166.6,alpha:0.945},0).wait(1).to({y:167,alpha:0.96},0).wait(1).to({y:167.3,alpha:0.972},0).wait(1).to({y:167.5,alpha:0.981},0).wait(1).to({y:167.7,alpha:0.988},0).wait(1).to({y:167.8,alpha:0.994},0).wait(1).to({y:167.9,alpha:0.997},0).wait(1).to({y:168,alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:150,y:167.6,alpha:1},0).to({_off:true},43).wait(113));

	// Layer_5
	this.instance_13 = new lib.Symbol1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.1,69.4,1,1,0,0,0,120,35);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).wait(1).to({regX:119.8,regY:33.6,x:149.9,y:68.1,alpha:0.006},0).wait(1).to({y:68.7,alpha:0.027},0).wait(1).to({y:70.2,alpha:0.075},0).wait(1).to({y:73.1,alpha:0.174},0).wait(1).to({y:78,alpha:0.338},0).wait(1).to({y:82.7,alpha:0.497},0).wait(1).to({y:86.1,alpha:0.612},0).wait(1).to({y:88.6,alpha:0.695},0).wait(1).to({y:90.4,alpha:0.758},0).wait(1).to({y:91.9,alpha:0.807},0).wait(1).to({y:93.1,alpha:0.847},0).wait(1).to({y:94.1,alpha:0.879},0).wait(1).to({y:94.8,alpha:0.906},0).wait(1).to({y:95.5,alpha:0.927},0).wait(1).to({y:96,alpha:0.945},0).wait(1).to({y:96.5,alpha:0.96},0).wait(1).to({y:96.8,alpha:0.972},0).wait(1).to({y:97.1,alpha:0.981},0).wait(1).to({y:97.3,alpha:0.988},0).wait(1).to({y:97.5,alpha:0.994},0).wait(1).to({y:97.6,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:150.1,y:99.1,alpha:1},0).to({_off:true},46).wait(113));

	// Layer_8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_10 = new cjs.Graphics().p("Az2BfIAAi9MAqcAAAIAAC9g");
	var mask_3_graphics_11 = new cjs.Graphics().p("Az1C7IAAl1MAqbAAAIAAF1g");
	var mask_3_graphics_12 = new cjs.Graphics().p("Az1EWIAAorMAqbAAAIAAIrg");
	var mask_3_graphics_13 = new cjs.Graphics().p("Az1FuIAArbMAqbAAAIAALbg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Az1HFIAAuJMAqbAAAIAAOJg");
	var mask_3_graphics_15 = new cjs.Graphics().p("Az1IZIAAwxMAqbAAAIAAQxg");
	var mask_3_graphics_16 = new cjs.Graphics().p("Az1JqIAAzTMAqbAAAIAATTg");
	var mask_3_graphics_17 = new cjs.Graphics().p("Az1K6IAA1zMAqbAAAIAAVzg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Az1MIIAA4PMAqbAAAIAAYPg");
	var mask_3_graphics_19 = new cjs.Graphics().p("Az1NTIAA6lMAqbAAAIAAalg");
	var mask_3_graphics_20 = new cjs.Graphics().p("Az1OcIAA83MAqbAAAIAAc3g");
	var mask_3_graphics_21 = new cjs.Graphics().p("Az1PjIAA/FMAqbAAAIAAfFg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Az1QoMAAAghPMAqbAAAMAAAAhPg");
	var mask_3_graphics_23 = new cjs.Graphics().p("Az1RqMAAAgjTMAqbAAAMAAAAjTg");
	var mask_3_graphics_24 = new cjs.Graphics().p("Az1SrMAAAglVMAqbAAAMAAAAlVg");
	var mask_3_graphics_25 = new cjs.Graphics().p("Az1TpMAAAgnRMAqbAAAMAAAAnRg");
	var mask_3_graphics_26 = new cjs.Graphics().p("Az1UlMAAAgpJMAqbAAAMAAAApJg");
	var mask_3_graphics_27 = new cjs.Graphics().p("Az1VfMAAAgq9MAqbAAAMAAAAq9g");
	var mask_3_graphics_28 = new cjs.Graphics().p("Az1WWMAAAgsrMAqbAAAMAAAAsrg");
	var mask_3_graphics_29 = new cjs.Graphics().p("Az1XMMAAAguXMAqbAAAMAAAAuXg");
	var mask_3_graphics_30 = new cjs.Graphics().p("Az1X/MAAAgv9MAqbAAAMAAAAv9g");
	var mask_3_graphics_31 = new cjs.Graphics().p("Az1YwMAAAgxfMAqbAAAMAAAAxfg");
	var mask_3_graphics_32 = new cjs.Graphics().p("Az1ZfMAAAgy9MAqbAAAMAAAAy9g");
	var mask_3_graphics_33 = new cjs.Graphics().p("Az1aMMAAAg0XMAqbAAAMAAAA0Xg");
	var mask_3_graphics_34 = new cjs.Graphics().p("Az1a2MAAAg1rMAqbAAAMAAAA1rg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Az1bfMAAAg29MAqbAAAMAAAA29g");
	var mask_3_graphics_36 = new cjs.Graphics().p("Az1cFMAAAg4JMAqbAAAMAAAA4Jg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Az1cpMAAAg5RMAqbAAAMAAAA5Rg");
	var mask_3_graphics_38 = new cjs.Graphics().p("Az1dLMAAAg6VMAqbAAAMAAAA6Vg");
	var mask_3_graphics_39 = new cjs.Graphics().p("Az1dqMAAAg7TMAqbAAAMAAAA7Tg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Az1eIMAAAg8PMAqbAAAMAAAA8Pg");
	var mask_3_graphics_41 = new cjs.Graphics().p("Az1ejMAAAg9FMAqbAAAMAAAA9Fg");
	var mask_3_graphics_42 = new cjs.Graphics().p("Az1e8MAAAg93MAqbAAAMAAAA93g");
	var mask_3_graphics_43 = new cjs.Graphics().p("Az1fTMAAAg+lMAqbAAAMAAAA+lg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Az1foMAAAg/PMAqbAAAMAAAA/Pg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Az1f6MAAAg/zMAqbAAAMAAAA/zg");
	var mask_3_graphics_46 = new cjs.Graphics().p("EgT1AgLMAAAhAVMAqbAAAMAAABAVg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EgT1AgZMAAAhAxMAqbAAAMAAABAxg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EgT1AglMAAAhBJMAqbAAAMAAABBJg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EgT1AgvMAAAhBdMAqbAAAMAAABBdg");
	var mask_3_graphics_50 = new cjs.Graphics().p("EgT1Ag2MAAAhBrMAqbAAAMAAABBrg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EgT1Ag8MAAAhB3MAqbAAAMAAABB3g");
	var mask_3_graphics_52 = new cjs.Graphics().p("EgT1Ag/MAAAhB9MAqbAAAMAAABB9g");
	var mask_3_graphics_53 = new cjs.Graphics().p("EgT2AhAMAAAhB/MAqcAAAMAAABB/g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_3_graphics_10,x:144.6,y:9.5}).wait(1).to({graphics:mask_3_graphics_11,x:144.6,y:18.7}).wait(1).to({graphics:mask_3_graphics_12,x:144.6,y:27.8}).wait(1).to({graphics:mask_3_graphics_13,x:144.6,y:36.6}).wait(1).to({graphics:mask_3_graphics_14,x:144.6,y:45.3}).wait(1).to({graphics:mask_3_graphics_15,x:144.6,y:53.7}).wait(1).to({graphics:mask_3_graphics_16,x:144.6,y:61.8}).wait(1).to({graphics:mask_3_graphics_17,x:144.6,y:69.8}).wait(1).to({graphics:mask_3_graphics_18,x:144.6,y:77.6}).wait(1).to({graphics:mask_3_graphics_19,x:144.6,y:85.1}).wait(1).to({graphics:mask_3_graphics_20,x:144.6,y:92.4}).wait(1).to({graphics:mask_3_graphics_21,x:144.6,y:99.5}).wait(1).to({graphics:mask_3_graphics_22,x:144.6,y:106.4}).wait(1).to({graphics:mask_3_graphics_23,x:144.6,y:113}).wait(1).to({graphics:mask_3_graphics_24,x:144.6,y:119.5}).wait(1).to({graphics:mask_3_graphics_25,x:144.6,y:125.7}).wait(1).to({graphics:mask_3_graphics_26,x:144.6,y:131.7}).wait(1).to({graphics:mask_3_graphics_27,x:144.6,y:137.5}).wait(1).to({graphics:mask_3_graphics_28,x:144.6,y:143}).wait(1).to({graphics:mask_3_graphics_29,x:144.6,y:148.4}).wait(1).to({graphics:mask_3_graphics_30,x:144.6,y:153.5}).wait(1).to({graphics:mask_3_graphics_31,x:144.6,y:158.4}).wait(1).to({graphics:mask_3_graphics_32,x:144.6,y:163.1}).wait(1).to({graphics:mask_3_graphics_33,x:144.6,y:167.6}).wait(1).to({graphics:mask_3_graphics_34,x:144.6,y:171.8}).wait(1).to({graphics:mask_3_graphics_35,x:144.6,y:175.9}).wait(1).to({graphics:mask_3_graphics_36,x:144.6,y:179.7}).wait(1).to({graphics:mask_3_graphics_37,x:144.6,y:183.3}).wait(1).to({graphics:mask_3_graphics_38,x:144.6,y:186.7}).wait(1).to({graphics:mask_3_graphics_39,x:144.6,y:189.8}).wait(1).to({graphics:mask_3_graphics_40,x:144.6,y:192.8}).wait(1).to({graphics:mask_3_graphics_41,x:144.6,y:195.5}).wait(1).to({graphics:mask_3_graphics_42,x:144.6,y:198}).wait(1).to({graphics:mask_3_graphics_43,x:144.6,y:200.3}).wait(1).to({graphics:mask_3_graphics_44,x:144.6,y:202.4}).wait(1).to({graphics:mask_3_graphics_45,x:144.6,y:204.2}).wait(1).to({graphics:mask_3_graphics_46,x:144.6,y:205.9}).wait(1).to({graphics:mask_3_graphics_47,x:144.6,y:207.3}).wait(1).to({graphics:mask_3_graphics_48,x:144.6,y:208.5}).wait(1).to({graphics:mask_3_graphics_49,x:144.6,y:209.5}).wait(1).to({graphics:mask_3_graphics_50,x:144.6,y:210.2}).wait(1).to({graphics:mask_3_graphics_51,x:144.6,y:210.8}).wait(1).to({graphics:mask_3_graphics_52,x:144.6,y:211.1}).wait(1).to({graphics:mask_3_graphics_53,x:144.6,y:211.2}).wait(20).to({graphics:null,x:0,y:0}).wait(113));

	// Layer_7
	this.instance_14 = new lib.glacier_path1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(44,24);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({_off:true},63).wait(113));

	// Layer_1
	this.instance_15 = new lib.glacier();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},73).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.2,300,572.9,600);
// library properties:
lib.properties = {
	id: '05FF95A64E8548BA973EF771F9261256',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_glaciers_atlas_P_.png", id:"300x600_glaciers_atlas_P_"},
		{src:"images/300x600_glaciers_atlas_NP_.jpg", id:"300x600_glaciers_atlas_NP_"}
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
an.compositions['05FF95A64E8548BA973EF771F9261256'] = {
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