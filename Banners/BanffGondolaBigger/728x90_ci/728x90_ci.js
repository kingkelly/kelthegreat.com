(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_ci_atlas_P_", frames: [[0,0,728,90],[730,0,115,83]]},
		{name:"728x90_ci_atlas_NP_", frames: [[0,0,728,90],[0,92,728,90]]}
];


// symbols:



(lib.lb_ice = function() {
	this.spriteSheet = ss["728x90_ci_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lb_icetruckfield = function() {
	this.spriteSheet = ss["728x90_ci_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lb_metro = function() {
	this.spriteSheet = ss["728x90_ci_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lb_truck = function() {
	this.spriteSheet = ss["728x90_ci_atlas_P_"];
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


(lib.travelAB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgDAHQgOgOACgMQACgLAMAKQAHAHAKAFIAAAiQgLgJgIgKg");
	this.shape.setTransform(87,105.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABCA3IAAhrIAzAAIAABrgAAAA3IAAgRQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBAAAAAAIgbAFQAFgIAAgDQAAgCgEgEIgYgTIAEgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIgEgRIAOACQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAAAIAEgHIAMAOQAAAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIgHgeIAMAGIACgCIAIgQIAIAQIADACIALgGIgGAfQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAIALgOIAEAHIADACIAOgCIgEARQAAAAAAABQAAAAAAABQABAAAAAAQAAAAABAAIAEACIgYATQgDAEAAADQAAACAEAIIgagFQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABIAAARgAh0A3IAAhrIAzAAIAABrg");
	this.shape_1.setTransform(288.9,123.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888888").s().p("AHBKVQgKgJAAgPQAAgUASgHQAIgEAegDQAKgBACgCQAFgDAAgIQAAgWgbAAQgNAAgIAGQgIAGAAAMIgNAAQABgRAMgKQALgIATAAQAnAAAAAiIAAA4QAAAIAHAAIAFgBIAAALIgJAAQgJAAgDgEQgDgFAAgJQgIALgHAFQgJAGgPAAQgPgBgKgGgAH1JkQgXADgKACQgQAGAAANQAAAJAHAHQAHAFAJAAQAPAAALgIQALgKAAgPIAAgRIgBAAQgBADgJACgAFOKLQgLgPAAgYQAAgYALgPQANgRAXAAQAMAAAKAGQALAHAEALIAAg9IANAAIAACRIgMAAIAAgUQgEALgLAHQgLAFgMABQgXAAgNgRgAFXJFQgIAMAAATQAAASAIANQAKAOARAAQATAAAKgOQAIgMAAgTQAAgTgIgMQgKgOgTAAQgRAAgKAOgADiKVQgKgJAAgPQAAgUARgHQAJgEAegDQAJgBADgCQAEgDAAgIQAAgWgbAAQgNAAgHAGQgIAGAAAMIgNAAQABgRAMgKQALgIATAAQAnAAAAAiIAAA4QAAAIAHAAIAEgBIAAALIgIAAQgJAAgEgEQgCgFAAgJIgBAAQgHALgIAFQgJAGgOAAQgQgBgJgGgAEVJkQgXADgJACQgRAGAAANQAAAJAIAHQAGAFAKAAQAPAAAKgIQAMgKgBgPIAAgRQgBADgKACgAAKKVQgKgJAAgPQAAgUARgHQAJgEAegDQAJgBADgCQAFgDAAgIQAAgWgcAAQgMAAgIAGQgIAGAAAMIgNAAQABgRAMgKQALgIATAAQAmAAAAAiIAAA4QAAAIAIAAIAEgBIAAALIgIAAQgJAAgEgEQgCgFAAgJIgBAAQgHALgIAFQgJAGgOAAQgQgBgJgGgAA9JkQgXADgJACQgQAGAAANQAAAJAHAHQAGAFAKAAQAPAAALgIQALgKAAgPIAAgRIgBAAQgBADgKACgAh9KEQgRgUAAggQAAggARgVQATgYAhABQAWAAAQAMQASANACAWIgNAAQgEgRgNgJQgMgKgQAAQgbABgPATQgNASAAAbQAAAaANASQAPAUAbAAQATAAANgNQANgNABgVIAOAAQgDAbgPAQQgRAQgZAAQghAAgTgYgAC4KYIAAhBQAAgggbAAQgPAAgJALQgJAJAAAQIAAA9IgNAAIAAhoIANAAIAAASQAEgKAKgGQAJgGALAAQAVAAAKALQAIAKAAAUIAABDgAzmHQIAAgjQAZAOAiADQBLADBDhDQCCiBB2jPQAmhDAlhMIAnhTQAVgpAZgQQAZgQAYANIAOAIQABACgDAFQgSAdgJAgQgRBAgFBmQgEBeAIBnQC0hqAeiQIACgbQABgIAMACQApAGAEAfQABAKgIApQgZB6gFBMQgHBXAOBKQAHAoAWAdQATAZAVADIANgBQAGgBABACQACADgHAFQgGAFgLACQgXACgYgNQgWgMgMgQQgtg8gBiLQAAhWAPhbQg5BniGBSQAKBkASBAQBDAUgOAdQgRAmgmgWQgpgYjChbQgXgLgLgJQgNgKAAgKQABgLAMgIQANgJAWgGQBEgRBPgnQgIhXAAhVQgBhGAFg3QhGCFhGB0QhsCwhSBSQgsAshEAKQgPADgOAAQg1AAgogggAshFJQBMAnBAAXQgLgqgIhJQg9Agg8AVgALMGpQgggKAFg4QADgvAbg7QhDBVgzApQhQA/gzggQg2giATioQg1AhgiArQgpAygDA2QgBAKACALQgBAGgQABQgoAEADhFQANhTADgeQghA7gtAuQhABAg8AFQguAFgYgUQgWgTgEgiQgsAIg0AHQgVAZgcANQglASgnABQgiAAgUgNQgZgOADgPQADgOAWgGQgMg7AKiFQAMiAgBgSQgCgYACgDQACgIANADQApAFAEAfQABAJgJAqQgIAsgFA2IgHBdQAPg6AcgeQAkgpAzANQAvAMAHA9QAFA5giA4QAlgEAmgIQACgfANggQANggASgUQAngoAqgIQAqgJASAcQATAfgbAoQgcAshEAdQgLAFgRAFQACAhASALQAUANAlgRQAvgXAug5QAaggApg+QAWgfAYAFQAWAHgBAYQAAANgGAbIgKAsQAagvAjglQAhgjAngXIAKg9IALgyIAEgcQACgGAMACQAoAFABAgQABAJgMAqQgJAfADgBIAGgCQA6gMAvATQAlAQAKAZQAFANgDACQgCACgMgGQgcgOglgBQgugBgvASQgOBOABA1QABA5AUAPQAkAcBXhgQAtgxA3hNQA8hHAqgBQAfAAAMAbQAKAXgIAVQgFALgKgJQgNgOgJACQgeAGgdA9QgYAxgJAuQgGAdAKAAQAMABAYgfQATgZAggxQAbglASgCQAcgDAIATIAGApQAFA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");
	this.shape_2.setTransform(214.1,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.travelAB, new cjs.Rectangle(85.4,-4.6,254.2,133.5), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D50032").ss(3,2,1).p("AljAAILHAA");
	this.shape.setTransform(35.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1.5,-1.5,74.3,3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_metro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAnIgUg3IgSA3IgJAAIgahNIANAAIASA3IATg3IAGAAIAUA3IASg3IANAAIgbBNg");
	this.shape.setTransform(105.2,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPANgMQAMgMAPAAQARAAALAMQAMALAAAQQAAARgMALQgLANgRAAQgQAAgMgNgAgTgTQgIAIAAALQAAAMAIAIQAIAIALAAQALABAIgJQAJgIAAgMQAAgLgJgIQgIgIgLAAQgLAAgIAIg");
	this.shape_1.setTransform(95.3,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAnIgrg0IAAA0IgMAAIAAhNIAHAAIAsA1IAAg1IAMAAIAABNg");
	this.shape_2.setTransform(86.6,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAkQgHgEgEgHIAIgIQADAGAFADQAFACAFAAQAGAAAEgCQAEgDAAgFQAAgGgIgEIgQgIQgMgGAAgMQAAgJAHgGQAHgHAKABQAOgBAJAMIgHAIQgGgIgKAAQgEAAgEACQgDAEAAAEQAAAFAHAEIARAJQAMAGAAALQAAALgHAGQgIAHgMAAQgHAAgIgFg");
	this.shape_3.setTransform(76.7,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAnIgRgfIgLAAIAAAfIgMAAIAAhNIAbAAQAMAAAGAHQAHAHAAAJQAAAJgFAGQgEAFgJACIAVAggAgPgCIANAAQAHAAADgEQAEgDAAgGQAAgFgDgDQgDgDgGgBIgPAAg");
	this.shape_4.setTransform(70.7,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAgQgIgHAAgOIAAgyIAMAAIAAAxQAAAIAFAFQAEAFAHAAQAIAAAFgFQAEgFAAgIIAAgxIAMAAIAAAyQAAAOgIAHQgIAIgNAAQgLAAgJgIg");
	this.shape_5.setTransform(63.2,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAcQgMgLABgRQAAgPAMgMQALgMAQAAQARAAALAMQANALAAAQQAAARgNALQgLANgRAAQgQAAgMgNgAgTgTQgIAIAAALQAAAMAIAIQAJAIAKAAQALABAIgJQAJgIAAgMQAAgLgJgIQgIgIgLAAQgKAAgJAIg");
	this.shape_6.setTransform(55,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAnIAAgcIgbgxIAOAAIASAmIATgmIAOAAIgbAxIAAAcg");
	this.shape_7.setTransform(47,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAnIgsg0IAAA0IgMAAIAAhNIAGAAIAtA1IAAg1IAMAAIAABNg");
	this.shape_8.setTransform(36.9,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWAnIgHgTIgcAAIgIATIgNAAIAfhNIAHAAIAfBNgAALAIIgLgaIgJAaIAUAAg");
	this.shape_9.setTransform(29.1,16.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAnIAAhNIAMAAIAABBIApAAIAAAMg");
	this.shape_10.setTransform(22.7,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAnIAAhNIAaAAQAMAAAHAIQAGAHAAAJQAAALgGAGQgHAHgNAAIgNAAIAAAdgAgNAAIANAAQAHAAADgEQAEgEAAgGQAAgFgDgEQgEgDgGgBIgOAAg");
	this.shape_11.setTransform(16.2,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D50032").s().p("ApsCjIAAlFITZAAIAAFFg");
	this.shape_12.setTransform(62.1,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,124.1,32.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape.setTransform(299.7,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_1.setTransform(283.7,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBVAAIAAAXIhVAAIAAA9IBdAAIAAAZg");
	this.shape_2.setTransform(267.2,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00587C").s().p("AAxBgIAAhWIhgAAIAABWIgbAAIAAi/IAbAAIAABRIBgAAIAAhRIAaAAIAAC/g");
	this.shape_3.setTransform(249,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_4.setTransform(225.2,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_5.setTransform(208.7,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00587C").s().p("AhABHQgcgcAAgrQAAgqAdgcQAdgcApAAQAYAAAVAJQAWAKANAQIgSARQgYgbgmAAQgeAAgVAVQgVAVAAAgQAAAfAVAVQAVAVAeAAQAQAAARgHQAQgHAMgNIAAgmIhAAAIAAgXIBZAAIAABJQgkAog0AAQgpAAgcgcg");
	this.shape_6.setTransform(189.6,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00587C").s().p("AhABHQgcgcAAgrQAAgqAdgcQAdgcApAAQAYAAAVAJQAWAKANAQIgSARQgYgbgmAAQgeAAgVAVQgVAVAAAgQAAAfAVAVQAVAVAeAAQAQAAARgHQAQgHAMgNIAAgmIhAAAIAAgXIBZAAIAABJQgkAog0AAQgpAAgcgcg");
	this.shape_7.setTransform(168.5,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00587C").s().p("AgMBgIAAi/IAZAAIAAC/g");
	this.shape_8.setTransform(154.4,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00587C").s().p("AhEBgIAAi/IBKAAQAZAAAOAPQAOAOAAATQABANgIALQgGAKgNAFQARAFAKANQAJANAAASQABAWgRARQgPAQgcAAgAgqBIIAwAAQARAAAKgKQAKgJgBgOQABgOgKgKQgLgKgRAAIgvAAgAgqgRIAtAAQANgBAIgHQAJgJAAgLQAAgLgJgHQgHgIgOAAIgtAAg");
	this.shape_9.setTransform(142.6,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_10.setTransform(119.4,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_11.setTransform(103.5,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00587C").s().p("AA4BgIgTgyIhIAAIgUAyIgdAAIBPi/IAMAAIBNC/gAAcAVIgchHIgaBHIA2AAg");
	this.shape_12.setTransform(85.6,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00587C").s().p("AglBZQgSgKgIgTIATgQQAQAfAcAAQARAAAKgJQAJgIAAgMQAAgQgUgLIgogUQgdgSAAgbQAAgWAQgPQAPgPAaAAQAkAAAVAcIgSARQgPgVgYAAQgMAAgIAHQgKAHAAAMQAAAPARAKIAtAXQAcAQAAAcQAAAZgSAPQgSAPgbAAQgUAAgSgKg");
	this.shape_13.setTransform(63,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00587C").s().p("AgMBgIAAhFIhBh6IAdAAIAwBgIAyhgIAcAAIhBB6IAABFg");
	this.shape_14.setTransform(47.5,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00587C").s().p("AA4BgIgTgyIhIAAIgUAyIgdAAIBOi/IAOAAIBMC/gAAcAVIgchHIgaBHIA2AAg");
	this.shape_15.setTransform(30.5,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00587C").s().p("AhPBgIAAi/IBHAAQAoAAAYAaQAYAaAAAsQAAAsgZAZQgXAagqAAgAg1BHIAsAAQAdAAAQgTQARgVAAgfQAAgfgRgUQgQgTgdAAIgsAAg");
	this.shape_16.setTransform(12.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,309.3,30), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_truck();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,120.8,87.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_icetruckfield();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_ice();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,728,90), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00587C").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape.setTransform(334,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00587C").s().p("AhGBHQgcgcAAgqQAAgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_1.setTransform(312.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00587C").s().p("AhHBgIAAgQIBoiWIhjAAIAAgZICHAAIAAAQIhnCXIBqAAIAAAYg");
	this.shape_2.setTransform(293.7,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00587C").s().p("AgMBgIAAi/IAZAAIAAC/g");
	this.shape_3.setTransform(282,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_4.setTransform(270.7,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00587C").s().p("AhGBHQgdgcABgqQgBgpAegdQAdgdAoAAQApAAAdAdQAdAeABAnQgBApgdAdQgdAdgpAAQgpAAgdgcgAgygzQgWAVABAfQAAAfAUAVQAVAVAeAAQAfAAAVgVQAUgVABgfQgBgfgUgVQgVgWgfAAQgdAAgVAWg");
	this.shape_5.setTransform(250.5,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00587C").s().p("AAwBgIAAhWIhfAAIAABWIgaAAIAAi/IAaAAIAABRIBfAAIAAhRIAaAAIAAC/g");
	this.shape_6.setTransform(229.6,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00587C").s().p("AAzBgIgziOIgxCOIgPAAIhCi/IAcAAIAuCMIAziMIALAAIA0CMIAtiMIAcAAIhCC/g");
	this.shape_7.setTransform(199.9,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_8.setTransform(179.2,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00587C").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape_9.setTransform(160.6,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00587C").s().p("AA4BgIgUgyIhIAAIgTAyIgcAAIBOi/IAMAAIBOC/gAAbAVIgbhHIgbBHIA2AAg");
	this.shape_10.setTransform(135.4,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_11.setTransform(112.8,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_12.setTransform(96.9,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00587C").s().p("AhGBHQgcgcgBgqQABgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_13.setTransform(76.7,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00587C").s().p("AhABgIAAi/IAaAAIAACmIBnAAIAAAZg");
	this.shape_14.setTransform(58.8,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00587C").s().p("Ag+BgIAAi/IA/AAQAeAAAQARQAQASAAAYQAAAZgQAQQgRARgeAAIgkAAIAABKgAgkgBIAkAAQARAAAKgKQAKgKAAgPQAAgPgJgKQgJgJgQAAIgnAAg");
	this.shape_15.setTransform(42.8,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00587C").s().p("AAxBgIgxhMIgvBMIgfAAIBAhgIg9hfIAeAAIAtBKIAwhKIAfAAIhABfIBABgg");
	this.shape_16.setTransform(25.9,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_17.setTransform(10.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,0,346.4,30), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape.setTransform(334,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBHQgcgcAAgqQAAgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_1.setTransform(312.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBgIAAgQIBoiWIhjAAIAAgZICHAAIAAAQIhnCXIBqAAIAAAYg");
	this.shape_2.setTransform(293.7,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBgIAAi/IAZAAIAAC/g");
	this.shape_3.setTransform(282,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_4.setTransform(270.7,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBHQgdgcABgqQgBgpAegdQAdgdAoAAQApAAAdAdQAdAeABAnQgBApgdAdQgdAdgpAAQgpAAgdgcgAgygzQgWAVABAfQAAAfAUAVQAVAVAeAAQAfAAAVgVQAUgVABgfQgBgfgUgVQgVgWgfAAQgdAAgVAWg");
	this.shape_5.setTransform(250.5,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBgIAAhWIhfAAIAABWIgaAAIAAi/IAaAAIAABRIBfAAIAAhRIAaAAIAAC/g");
	this.shape_6.setTransform(229.6,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAzBgIgziOIgxCOIgPAAIhCi/IAcAAIAuCMIAziMIALAAIA0CMIAtiMIAcAAIhCC/g");
	this.shape_7.setTransform(199.9,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_8.setTransform(179.2,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape_9.setTransform(160.6,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA4BgIgUgyIhIAAIgTAyIgcAAIBOi/IAMAAIBOC/gAAbAVIgbhHIgbBHIA2AAg");
	this.shape_10.setTransform(135.4,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_11.setTransform(112.8,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_12.setTransform(96.9,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGBHQgcgcgBgqQABgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_13.setTransform(76.7,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhABgIAAi/IAaAAIAACmIBnAAIAAAZg");
	this.shape_14.setTransform(58.8,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BgIAAi/IA/AAQAeAAAQARQAQASAAAYQAAAZgQAQQgRARgeAAIgkAAIAABKgAgkgBIAkAAQARAAAKgKQAKgKAAgPQAAgPgJgKQgJgJgQAAIgnAAg");
	this.shape_15.setTransform(42.8,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAxBgIgxhMIgvBMIgfAAIBAhgIg9hfIAeAAIAtBKIAwhKIAfAAIhABfIBABgg");
	this.shape_16.setTransform(25.9,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_17.setTransform(10.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,346.4,30), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4DB1E4").s().p("AhMAmIAqhLIABAAIBuAvIiZAcg");
	this.shape.setTransform(32.6,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4DB1E4").s().p("AhHguICPAgIgRA9g");
	this.shape_1.setTransform(32.4,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4DB1E4").s().p("AgWAMIAAAAIgfgMIAZgtIBRBag");
	this.shape_2.setTransform(34.9,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4DB1E4").s().p("AgcgaIAygJIAHBIg");
	this.shape_3.setTransform(45.8,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4DB1E4").s().p("AAUgeIAGAzIgyAKg");
	this.shape_4.setTransform(45.3,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4DB1E4").s().p("AhBguICDAdIgwA/g");
	this.shape_5.setTransform(40,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4DB1E4").s().p("AhEgBICJgYIgNA0g");
	this.shape_6.setTransform(34.2,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4DB1E4").s().p("AgmASIAOg0IA/BFg");
	this.shape_7.setTransform(44.5,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4DB1E4").s().p("AgegbIBLAQIhZAng");
	this.shape_8.setTransform(43.5,21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D6D8A").s().p("AgpAyIAAhkIAmAAQAUAAAMAOQANAOAAAWQAAAYgNANQgMANgWAAgAgcAmIAYAAQAOgBAJgKQAIgLAAgQQAAgQgIgJQgJgMgOAAIgYAAg");
	this.shape_9.setTransform(62.3,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D6D8A").s().p("AghAyIAAhkIAOAAIAABXIA1AAIAAANg");
	this.shape_10.setTransform(53.2,47.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D6D8A").s().p("AgeAyIAAhkIA+AAIAAANIgxAAIAAAfIAsAAIAAALIgsAAIAAAhIAxAAIAAAMg");
	this.shape_11.setTransform(44.7,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D6D8A").s().p("AgGAyIAAhkIANAAIAABkg");
	this.shape_12.setTransform(38.4,47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D6D8A").s().p("AgeAyIAAhkIA9AAIAAAOIgvAAIAAAeIAoAAIAAAMIgoAAIAAAsg");
	this.shape_13.setTransform(33,47.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D6D8A").s().p("AgeAyIAAhkIA9AAIAAANIgwAAIAAAfIAtAAIAAALIgtAAIAAAhIAwAAIAAAMg");
	this.shape_14.setTransform(24.7,47.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2D6D8A").s().p("AggAmQgPgPAAgWQAAgWAQgQQAPgOAUAAQAOAAAMAGQALAGAHAKIgKAIQgOgRgUAAQgPAAgLALQgLALAAARQAAAQALALQALALAPAAQAVgBANgRIAKAJQgQAWgcAAQgVAAgPgOg");
	this.shape_15.setTransform(15.2,47.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D6D8A").s().p("AgGAyIAAhkIANAAIAABkg");
	this.shape_16.setTransform(7.8,47.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D6D8A").s().p("AAdAyIgKgaIglAAIgKAaIgPAAIAohjIAHAAIAoBjgAgOALIAcAAIgOglg");
	this.shape_17.setTransform(69.2,34.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D6D8A").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_18.setTransform(62.6,34.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D6D8A").s().p("AgjAyIAAhjIAmAAQANAAAIAIQAHAHAAAKQAAAQgNAEQAIADAFAGQAGAHAAAKQgBALgHAIQgJAJgPAAgAgWAmIAZAAQAJAAAGgGQAEgEAAgHQAAgIgEgFQgGgFgJAAIgZAAgAgWgJIAXAAQAQAAAAgOQAAgGgEgDQgFgFgGAAIgYAAg");
	this.shape_19.setTransform(56.5,34.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2D6D8A").s().p("AAkAyIAAhDIgiAyIgDAAIgigyIAABDIgOAAIAAhjIAHAAIAqA/IArg/IAHAAIAABjg");
	this.shape_20.setTransform(45.3,34.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D6D8A").s().p("AgaAqQgKgKABgRIAAhBIANAAIAAA/QAAAZAWAAQAWAAABgZIAAg/IANAAIAABBQABARgLAKQgKAJgQAAQgQAAgKgJg");
	this.shape_21.setTransform(34.3,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D6D8A").s().p("AghAyIAAhjIAOAAIAABWIA1AAIAAANg");
	this.shape_22.setTransform(26.1,34.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D6D8A").s().p("AgkAlQgPgPAAgVQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgQAPgVAAQgVAAgPgPgAgagaQgLAKAAAQQAAAQALAMQALALAPgBQAQABALgLQALgMAAgQQAAgQgLgLQgLgLgQAAQgPAAgLAMg");
	this.shape_23.setTransform(15.6,34.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2D6D8A").s().p("AggAmQgPgPAAgXQAAgWAQgOQAOgPAVAAQAOAAAMAGQALAGAHAKIgLAJQgMgSgVAAQgPAAgLALQgLAMAAAQQAAAQALALQALALAPAAQAVAAANgRIAKAIQgQAWgcAAQgVAAgPgOg");
	this.shape_24.setTransform(4.8,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,1,73.6,52.1), null);


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(67.1,47.1,1.05,1.05,0,0,0,36.8,30.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8EFF0").s().p("AszIIIAAwPIZnAAIm4QPg");
	this.shape.setTransform(82,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(260));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_10
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(484.9,64,0.136,1.136,0,0,0,0.4,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176).to({_off:false},0).to({regX:0.3,scaleX:0.88},11,cjs.Ease.get(0.7)).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.travelAB();
	this.instance.parent = this;
	this.instance.setTransform(642,58.6,0.343,0.343,0,0,0,174.5,91.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(646.4,46.8,1,1,0,0,0,62.1,16.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({alpha:1},18).wait(61).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-1)).wait(20));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(149.4,53.6,1.2,1.2,0,0,0,60.4,43.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).to({scaleX:1,scaleY:1,x:169.4,alpha:1},32,cjs.Ease.quartOut).wait(85));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(364,45,1.2,1.2,0,0,0,364,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},32,cjs.Ease.quartOut).wait(89));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(324,45,1.2,1.2,0,0,0,364,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({scaleX:1,scaleY:1,x:364,alpha:1},36,cjs.Ease.quartOut).wait(161));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol1copy();
	this.instance.parent = this;
	this.instance.setTransform(415.2,50.5,1,1,0,0,0,173.2,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).to({alpha:1},30,cjs.Ease.quintInOut).wait(46).to({regY:15.1,scaleX:0.8,scaleY:0.8,y:50.6,alpha:0},32,cjs.Ease.quartOut).wait(89));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(415.2,50.6,1.2,1.2,0,0,0,173.2,15.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regY:15,scaleX:1,scaleY:1,y:50.5,alpha:1},46,cjs.Ease.quartOut).wait(10).to({alpha:0},25).to({_off:true},51).wait(121));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(364,45,1.17,1.17,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},100).wait(160));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(397.6,51,1,1,0,0,0,154.6,15);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).to({alpha:1},34,cjs.Ease.quartInOut).wait(76));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._728x90_ci = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_259 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(259).call(this.frame_259).wait(1));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 0
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(260));

	// Layer_10_obj_
	this.Layer_10 = new lib.Scene_1_Layer_10();
	this.Layer_10.name = "Layer_10";
	this.Layer_10.parent = this;
	this.Layer_10.depth = 0;
	this.Layer_10.isAttachedToCamera = 0
	this.Layer_10.isAttachedToMask = 0
	this.Layer_10.layerDepth = 0
	this.Layer_10.layerIndex = 1
	this.Layer_10.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_10).wait(260));

	// Layer_9_obj_
	this.Layer_9 = new lib.Scene_1_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 2
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(260));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(82,45.1,1,1,0,0,0,82,45.1);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 3
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(260));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 4
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(260));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 5
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(260));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 6
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(260));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 7
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(260));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 8
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(260));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(363.9,45,1,1,0,0,0,363.9,45);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 9
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302.1,37.4,851.8,105.3);
// library properties:
lib.properties = {
	id: '7B403E80A7D44A2B8EE866C143177BDC',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_ci_atlas_P_.png", id:"728x90_ci_atlas_P_"},
		{src:"images/728x90_ci_atlas_NP_.jpg", id:"728x90_ci_atlas_NP_"}
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
an.compositions['7B403E80A7D44A2B8EE866C143177BDC'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;