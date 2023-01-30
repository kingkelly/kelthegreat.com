(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_bear_atlas_", frames: [[906,0,25,86],[604,0,300,600],[0,0,300,600],[302,0,300,600]]}
];


// symbols:



(lib.endpath = function() {
	this.spriteSheet = ss["300x600_bear_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glacier = function() {
	this.spriteSheet = ss["300x600_bear_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.walk_screen = function() {
	this.spriteSheet = ss["300x600_bear_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.walkers = function() {
	this.spriteSheet = ss["300x600_bear_atlas_"];
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


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1D49").s().p("AwKcDQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgAvgayQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEgAurZoQgFgEABgGQgBgHAFgEQAEgEAGAAQAHAAAEAEQAEAEAAAHQAAAGgEAEQgEAFgHgBQgGABgEgFgAtvYnQgFgEAAgHQAAgFAFgFQAFgFAFABQAGgBAFAFQAEAFABAFQgBAHgEAEQgFAEgGAAQgFAAgFgEgAstXpQgFgEABgHQgBgGAFgEQAEgFAGABQAHgBAEAFQAEAEAAAGQAAAHgEAEQgEAEgHAAQgGAAgEgEgAroWwQgFgFAAgGQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFABAFQgBAGgEAFQgFAEgGABQgFgBgFgEgAqfV7QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgFgFgApSVMQgFgEAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAQgGAAgEgFgAoFUgQgFgEABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAEQgEAFgHAAQgFAAgFgFgAm2T3QgEgFAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgAllTPQgFgFAAgGQAAgFAFgFQAFgFAFAAQAGAAAFAFQAEAFABAFQgBAGgEAFQgFAEgGABQgFgBgFgEgAkTSpQgFgEABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAEQgEAFgHAAQgFAAgFgFgAjDSCQgFgFAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAEAFABAGQgBAGgEAFQgFAEgGAAQgFAAgFgEgAiARFQgEgEAAgGQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgAhTP3QgEgEAAgGQAAgGAEgFQAEgEAHAAQAGAAAEAEQAFAFgBAGQABAGgFAEQgEAFgGAAQgHAAgEgFgAg8OhQgFgEAAgGQAAgHAFgEQAEgEAGAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAFgGgBQgGABgEgFgAJrN0QgEgFgBgGQABgGAEgFQAEgEAHAAQAFAAAFAEQAFAFgBAGQABAGgFAFQgFAEgFAAQgHAAgEgEgAIPNwQgFgFABgGQgBgFAFgFQAEgFAGAAQAHAAAEAFQAEAFAAAFQAAAGgEAFQgEAEgHABQgGgBgEgEgALHNtQgEgFgBgFQABgHAEgEQAFgEAGgBQAFABAFAEQAFAEAAAHQAAAFgFAFQgFAFgFgBQgGABgFgFgAG0NoQgFgEABgGQgBgGAFgFQAFgEAFAAQAHAAAEAEQAEAFABAGQgBAGgEAEQgEAFgHAAQgFAAgFgFgAgBNiQgEgFgBgGQABgGAEgFQADgEAHAAQAFAAAFAEQAFAFgBAGQABAGgFAFQgFAEgFAAQgHAAgDgEgAFaNeQgFgFABgGQgBgFAFgFQAFgFAFAAQAHAAAEAFQAEAFABAFQgBAGgEAFQgEAEgHABQgFgBgFgEgAMbNSQgFgEABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAEQgEAFgHAAQgFAAgFgFgAEANSQgFgFABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEgABSNKQgFgEAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgACpNJQgEgFgBgGQABgGAEgEQAEgFAHAAQAFAAAFAFQAFAEgBAGQABAGgFAFQgFAEgFAAQgHAAgEgEgANnMkQgEgFAAgFQAAgHAEgEQAEgEAHgBQAFABAFAEQAFAEgBAHQABAFgFAFQgFAFgFgBQgHABgEgFgAOqLoQgFgFAAgGQAAgFAFgFQAEgFAGAAQAGAAAEAFQAFAFAAAFQAAAGgFAFQgEAFgGAAQgGAAgEgFgAPeKfQgEgEgBgGQABgGAEgEQAFgFAGAAQAFAAAFAFQAFAEAAAGQAAAGgFAEQgFAFgFAAQgGAAgFgFgAP2JIQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgAPnHxQgFgFAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgAO+GhQgFgFABgGQgBgGAFgFQAFgEAFAAQAHAAAEAEQAEAFABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEgAOGFaQgFgFAAgFQAAgHAFgEQAEgEAGgBQAGABAEAEQAFAEAAAHQAAAFgFAFQgEAFgGgBQgGABgEgFgANBEhQgEgFAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAQgGAAgFgEgAL4DrQgFgFABgGQgBgGAFgFQAFgEAFAAQAHAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgHAAQgFAAgFgEgAKrC5QgFgFAAgFQAAgGAFgFQAEgEAGgBQAGABAFAEQAEAFAAAGQAAAFgEAFQgFAFgGAAQgGAAgEgFgAJbCLQgEgFgBgGQABgGAEgEQAFgFAGAAQAFAAAFAFQAFAEAAAGQAAAGgFAFQgFAEgFAAQgGAAgFgEgAIOBbQgEgEAAgHQAAgGAEgEQAFgFAGABQAGgBAFAFQAEAEAAAGQAAAHgEAEQgFAEgGAAQgGAAgFgEgAHEAoQgFgEAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAF8gNQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgAE3hIQgFgEABgGQgBgGAFgFQAEgEAGAAQAHAAAEAEQAEAFAAAGQAAAGgEAEQgEAFgHAAQgGAAgEgFgAD1iFQgFgFAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAEAFABAGQgBAGgEAFQgFAEgGAAQgFAAgFgEgAGI37QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgAHE4/QgFgFAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAEAFABAGQgBAGgEAFQgFAEgGAAQgFAAgFgEgAIE5/QgFgFABgGQgBgGAFgFQAFgEAFAAQAHAAAEAEQAEAFABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEgAJK66QgFgFAAgFQAAgGAFgFQAEgEAGgBQAGABAEAEQAFAFAAAGQAAAFgFAFQgEAFgGAAQgGAAgEgFgAKU7tQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgFgFg");
	this.shape.setTransform(128.9,208.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(24.9,28.5,208,359.8), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlXFYIAAqvIKvAAIAAKvg");
	mask.setTransform(13.9,65.3);

	// Layer_1
	this.instance = new lib.endpath();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,30.9,25,55.1), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1D49").s().p("ASubnQgFgEAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAEAFABAGQgBAGgEAEQgFAFgGAAQgFAAgFgFgARabLQgEgFgBgGQABgGAEgEQAEgFAHAAQAFAAAFAFQAFAEgBAGQABAGgFAFQgFAEgFAAQgHAAgEgEgAQEa2QgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgAOqamQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgANSaZQgFgFABgGQgBgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAGgEAFQgEAEgHAAQgGAAgEgEgAL5aOQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEgAKgaEQgEgFgBgGQABgGAEgEQAEgFAHAAQAFAAAFAFQAFAEgBAGQABAGgFAFQgFAEgFAAQgHAAgEgEgAJIZ6QgEgEgBgGQABgGAEgFQAFgEAGAAQAFAAAFAEQAFAFAAAGQAAAGgFAEQgFAFgFAAQgGAAgFgFgAHvZxQgFgEAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAFAFAAAGQAAAGgFAEQgFAFgGAAQgFAAgFgFgAGWZoQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgAE7ZcQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgADgZOQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgACGY9QgEgFgBgGQABgGAEgEQAFgFAGAAQAFAAAFAFQAFAEAAAGQAAAGgFAFQgFAEgFAAQgGAAgFgEgAAsYmQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAgoYJQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgAh4XfQgEgEAAgGQAAgGAEgFQAEgEAHAAQAGAAAEAEQAFAFgBAGQABAGgFAEQgEAFgGAAQgHAAgEgFgAi+WlQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgEgFgAjwVaQgFgFABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEgAkJUBQgFgFABgGQgBgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAGgEAFQgEAEgHAAQgGAAgEgEgAkOSnQgEgFgBgGQABgGAEgEQAFgFAGAAQAFAAAFAFQAFAEAAAGQAAAGgFAFQgFAEgFAAQgGAAgFgEgAj6ROQgFgEAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAEAFABAGQgBAGgEAEQgFAFgGAAQgFAAgFgFgAjNQBQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgAiOPAQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAhHOMQgFgEAAgGQAAgGAFgFQAFgEAGAAQAFAAAFAEQAFAFAAAGQAAAGgFAEQgFAFgFAAQgGAAgFgFgAACNiQgEgFABgGQgBgGAEgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEgABSM8QgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgACiMYQgFgEAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAFAFAAAGQAAAGgFAEQgFAFgGAAQgFAAgFgFgAD0L2QgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgAFHLRQgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAQgGAAgFgFgAGaKpQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgFgEgAHmJ3QgFgEAAgGQAAgGAFgFQAFgEAFAAQAGAAAFAEQAFAFAAAGQAAAGgFAEQgFAFgGAAQgFAAgFgFgAIjI2QgEgEgBgGQABgGAEgFQAEgEAHAAQAFAAAFAEQAFAFgBAGQABAGgFAEQgFAFgFAAQgHAAgEgFgAJEHjQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgFgEgAJBGKQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAIeE1QgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgFgEgAidzwQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgFgEgAjf0vQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAkm1mQgFgFABgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEgAlw2YQgFgFAAgGQAAgGAFgEQAFgFAFAAQAGAAAFAFQAFAEAAAGQAAAGgFAFQgFAEgGAAQgFAAgFgEgAm93GQgFgFABgGQgBgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGQAAAGgEAFQgEAEgHAAQgGAAgEgEgAoN3wQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEgApf4WQgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgFgEgAqy45QgEgEAAgGQAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgFgFgAsG5YQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAQgGAAgEgEgAtc50QgEgFAAgGQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgFgEgAuy6OQgEgFgBgGQABgGAEgEQAEgFAHAAQAFAAAFAFQAFAEgBAGQABAGgFAFQgFAEgFAAQgHAAgEgEgAwJ6mQgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAxj67QgFgEAAgGQAAgGAFgFQAEgEAGAAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFgAzC7RQgEgFAAgGQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEgBAGQABAGgFAFQgEAEgGAAQgHAAgEgEg");
	this.shape.setTransform(152,172.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(29.6,-4.6,244.7,354.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIATAAIAqBhgAgNAIIAZAAIgMgfg");
	this.shape.setTransform(164.1,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAxIgegpIgLALIAAAeIgVAAIAAhhIAVAAIAAArIAmgrIAaAAIgnAqIAqA3g");
	this.shape_1.setTransform(154,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAvQgLgEgJgIIANgPQAHAFAHADQAHAEAHgBQAHABAEgDQAEgDAAgEIgBgEIgDgDIgGgDIgJgCIgOgFIgKgFQgEgDgCgEQgDgGAAgHIAAAAQAAgHADgFQACgGAFgEQAEgDAHgDQAGgCAHAAQAKABAJADQAJADAIAGIgLAQIgNgHQgHgCgFgBQgGABgDACQgEACAAAEIAAAAIABAFQAAAAABAAQAAABABAAQAAABABAAQAAAAABABIAGACIAKAEIANADQAGADAEADQAEADACAFQACAEAAAHIAAAAQAAAHgDAGQgCAFgFAEQgFAFgGABQgHACgIAAQgKAAgLgDg");
	this.shape_2.setTransform(143.8,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAgMAIIAZAAIgNgfg");
	this.shape_3.setTransform(133.9,23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAxIAAhhIAVAAIAABOIAwAAIAAATg");
	this.shape_4.setTransform(124.4,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAgMAIIAZAAIgNgfg");
	this.shape_5.setTransform(114.2,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_6.setTransform(100,23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARAxIgUgfIgRAAIAAAfIgVAAIAAhhIArAAQASAAAKAIQAJAJAAAQQAAAMgGAGQgFAIgKADIAYAjgAgUAAIAVAAQAIAAAEgEQAEgEAAgGQAAgHgEgEQgFgEgHAAIgVAAg");
	this.shape_7.setTransform(90.4,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAvQgKgEgGgHQgIgHgDgJQgEgJAAgKIAAgBQAAgKAEgIQADgKAIgHQAGgGAKgEQAKgFAKAAQALAAAKAFQAJAEAHAGQAHAHAEAJQAEAKAAAJIAAAAQAAAKgEAKQgEAJgHAHQgHAHgJAEQgKADgLAAQgLAAgJgDgAgLgbQgFACgFAEIgFAKQgCAFAAAGIAAAAQAAAHACAFQACAGAEADQAEAFAFADQAFACAGAAQAGAAAGgCQAFgDAEgEIAHgKQABgGAAgFIAAgBQAAgFgBgGQgDgGgEgEQgEgEgGgCQgEgDgHAAQgGAAgFADg");
	this.shape_8.setTransform(79.1,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAxIAAhhIAVAAIAABOIAwAAIAAATg");
	this.shape_9.setTransform(69.2,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAxIAAhhIAnAAQAJAAAHADQAHACAFAEQAEAFADAGQADAGAAAIQAAAIgDAGQgEAHgFAEQgFAEgIADQgHACgHAAIgQAAIAAAdgAgQABIAQAAQAIgBAEgDQAFgEAAgHQAAgHgFgEQgFgEgHAAIgQAAg");
	this.shape_10.setTransform(60.2,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAxIgWgiIgVAiIgZAAIAigxIghgwIAaAAIATAgIAVggIAYAAIggAwIAiAxg");
	this.shape_11.setTransform(50,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_12.setTransform(40.5,23.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41B44").s().p("AssC2IAAlrIZZAAIAAFrg");
	this.shape_13.setTransform(102.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(21.1,5.2,162.6,36.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(184.4,130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AhDBZIAAivIAUAAIAAAbIAJgLQAFgGAHgEQAGgEAIgCQAHgCAJAAQAMAAALAEQAMAFAJAJQAJAJAFANQAGANAAAQQAAARgGAMQgFANgJAJQgJAJgMAFQgLAFgMAAQgJAAgIgDIgOgGQgGgEgFgFIgJgLIAABDgAgRhDQgJAEgHAHQgHAHgEAJQgEAKAAALQAAAMAEAJQAEAJAHAHQAHAHAJAEQAJADAIAAQAKAAAIgDQAJgEAGgGQAHgHAEgJQADgJAAgMQAAgMgDgKQgEgJgHgHQgGgHgJgEQgIgDgKAAQgIAAgJADg");
	this.shape_1.setTransform(173,126.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_2.setTransform(160.6,121.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgVBBQgNgFgJgJQgIgJgGgOQgFgNgBgPQAAgOAGgNQAEgMAIgKQAKgJALgGQAMgFANAAQAPAAALAGQANAFAHAKQAIAJAFANQADANAAAOIAAADIAAADIhpAAQABALAEAIQAFAJAGAGQAGAGAJADQAHADAJAAQAOAAAJgGQAKgFAJgIIAMALQgKALgNAHQgNAHgTAAQgNAAgMgFgAgPgxQgIADgFAHQgGAGgDAIQgEAIgBAKIBVAAQgBgJgCgIQgDgJgGgFQgFgHgIgDQgIgFgKAAQgHABgIADg");
	this.shape_3.setTransform(149.6,124.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AAnBfIAAhOQAAgSgKgLQgKgLgSAAQgHAAgIADQgHADgFAGQgGAFgDAHQgDAIAAAJIAABNIgUAAIAAi9IAUAAIAABPQAHgLALgIQALgHAQAAQAMAAAKAEQAJADAHAIQAHAHADAKQAEAJAAALIAABUg");
	this.shape_4.setTransform(133.9,121.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AAnBEIAAhNQAAgTgKgLQgKgLgSABQgHAAgIACQgHADgFAGQgGAFgDAJQgDAHAAAJIAABMIgUAAIAAiFIAUAAIAAAYQAHgLALgIQALgHAQAAQAMgBAKAEQAJAEAHAHQAHAIADAJQAEAKAAAMIAABSg");
	this.shape_5.setTransform(110.1,124.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgaBDQgJgDgHgFQgHgGgFgHQgEgIAAgKQAAgMAEgHQAEgJAIgEQAIgGAKgDQALgCAMAAQAMgBAKACIATAEIAAgEQAAgSgLgKQgKgJgTAAQgLAAgKACQgKADgJAFIgGgRQALgFAMgDQALgDAOABQAbAAAPANQAPAOAAAbIAABQIgTAAIAAgUQgHAJgMAIQgMAGgRAAQgJAAgJgCgAgbAGQgKAHAAAOQAAAGACAFQADAFAFAEQAEADAGABQAGACAHABQAJAAAIgDQAIgDAGgFQAGgFAEgGQADgHAAgIIAAgNIgRgEQgKgBgMAAQgSAAgKAHg");
	this.shape_6.setTransform(94.1,124.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgTBAQgNgFgJgJQgJgKgFgNQgGgMAAgPQAAgNAGgNQAFgNAJgJQAJgKANgFQAMgGAOAAQAKAAAIABIAOAFIAMAIIAKAKIgNANQgIgIgKgFQgJgHgOAAQgJAAgJAFQgJADgGAIQgHAHgEAJQgDAJAAALQAAALAEAJQADAJAHAIQAHAHAJAEQAJAEAJAAQANAAAKgGQAKgGAIgIIANAMQgKALgNAHQgNAIgTAAQgOAAgMgGg");
	this.shape_7.setTransform(79.7,124.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgVBBQgMgFgKgJQgIgJgGgOQgFgNgBgPQAAgOAGgNQAEgMAJgKQAJgJALgGQAMgFANAAQAPAAALAGQANAFAHAKQAIAJAFANQADANAAAOIAAADIAAADIhpAAQABALAEAIQAFAJAGAGQAGAGAJADQAHADAJAAQANAAAKgGQAKgFAJgIIAMALQgKALgNAHQgNAHgTAAQgNAAgMgFgAgPgxQgHADgGAHQgFAGgEAIQgEAIgBAKIBVAAQAAgJgEgIQgDgJgFgFQgFgHgIgDQgHgFgLAAQgIABgHADg");
	this.shape_8.setTransform(56.8,124.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AAyBcIgyiTIgxCTIgSAAIhAi2IAWAAIA0CWIAyiXIAQAAIAyCXIA0iWIAVAAIhBC2g");
	this.shape_9.setTransform(34.7,122.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgoBjQgXgHgTgRIAcghQAOALAPAHQAPAHARAAQAPAAAHgFQAJgGgBgIIAAgBQABgFgCgDQgCgDgFgDIgMgHIgVgGIgdgIQgNgGgJgGQgJgGgFgLQgFgLAAgPIAAgBQAAgOAFgMQAGgLAKgJQAKgIANgEQANgFARAAQAWAAATAHQATAHARAMIgYAjQgPgJgNgGQgOgFgMAAQgOgBgGAGQgIAFABAIIAAABQgBAFADAEQACADAFAEIANAFIAWAGQAQAFAMAEQANAGAIAGQAJAIAFAJQAEALAAAOIAAAAQAAAPgFAMQgGAMgKAJQgLAIgOAFQgNAEgSAAQgXAAgXgJg");
	this.shape_10.setTransform(203.5,75.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgoBjQgXgHgTgRIAcghQAOALAPAHQAPAHARAAQAOAAAIgFQAJgGAAgIIAAgBQgBgFgBgDQgCgDgFgDIgMgHIgVgGIgdgIQgNgGgJgGQgJgGgFgLQgFgLAAgPIAAgBQAAgOAGgMQAFgLAKgJQAJgIANgEQAOgFARAAQAVAAAUAHQATAHAQAMIgXAjQgOgJgOgGQgOgFgMAAQgNgBgIAGQgGAFgBAIIAAABQAAAFADAEQACADAFAEIANAFIAWAGQAQAFANAEQAMAGAJAGQAJAIADAJQAFALAAAOIAAAAQAAAPgGAMQgGAMgJAJQgKAIgOAFQgPAEgRAAQgXAAgXgJg");
	this.shape_11.setTransform(184.3,75.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_12.setTransform(165.3,75.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_13.setTransform(146.3,75.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AhgBpIAAjRIBSAAQAYAAAUAIQAVAIAPAOQAPAOAIATQAIAUAAAVIAAAAQAAAWgIAUQgIATgPAOQgPAOgVAIQgUAIgYAAgAgxA/IAjAAQAOABALgFQAMgEAIgJQAIgIAFgMQAFgLAAgPIAAAAQAAgNgFgMQgFgLgIgJQgIgIgMgEQgLgGgOAAIgjAAg");
	this.shape_14.setTransform(124.9,75.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AA2BpIhliFIAACFIguAAIAAjRIArAAIBiCAIAAiAIAtAAIAADRg");
	this.shape_15.setTransform(100.9,75.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_16.setTransform(79.5,75.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_17.setTransform(50.4,75.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAmAAAVATQAVARAAAhIAAABQAAAagNAOQgMARgUAHIAzBLgAgrgCIAtAAQASAAAJgIQAJgIAAgNIAAgBQAAgQgKgHQgJgIgRAAIgtAAg");
	this.shape_18.setTransform(29.8,75.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBaDTgAgbASIA2AAIgbhDg");
	this.shape_19.setTransform(6.4,75.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D233F").s().p("AgoBkQgXgJgTgRIAcghQANAMAQAIQAPAGARAAQAPAAAHgFQAJgFgBgKIAAAAQABgFgCgDQgCgEgFgDIgMgFIgVgHIgdgJQgNgFgJgGQgJgHgFgKQgFgKAAgQIAAAAQAAgPAFgMQAGgLAKgIQAKgJAMgFQAOgEARAAQAVAAAUAHQATAHAQANIgXAjQgOgKgOgGQgOgFgMgBQgNAAgIAGQgGAFAAAIIAAAAQAAAGACADQACAFAFACIANAGIAWAHQAQADANAGQAMAFAIAGQAJAIAFAKQAEAKAAAOIAAAAQAAAPgFANQgGAMgKAIQgLAJgOADQgOAFgRAAQgXAAgXgIg");
	this.shape_20.setTransform(205.6,41.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAAqIBiAAIAAAoIhiAAIAAAtIBxAAIAAApg");
	this.shape_21.setTransform(186.6,41.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_22.setTransform(171.1,41.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0D233F").s().p("AgWBpIAAimIhAAAIAAgrICtAAIAAArIhAAAIAACmg");
	this.shape_23.setTransform(156.4,41.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_24.setTransform(141.6,41.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACoIBnAAIAAApg");
	this.shape_25.setTransform(128.1,41.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_26.setTransform(113,41.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0D233F").s().p("AhYBpIAAjRIBgAAQAhAAASAPQASAOAAAZIAAABQAAAJgCAHIgGAMIgIAKIgLAHQASAGALAMQAKAMAAAVIAAAAQAAAPgFALQgGAKgKAIQgLAHgOADQgPAEgRAAgAgrBAIA2AAQAPAAAJgFQAJgGAAgMIAAAAQAAgLgJgFQgIgHgSABIg0AAgAgrgTIArAAQAOAAAJgGQAJgEAAgNIAAAAQAAgLgIgFQgIgGgOABIgtAAg");
	this.shape_27.setTransform(97.8,41.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_28.setTransform(81.3,41.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0D233F").s().p("AgoBkQgXgJgTgRIAbghQAOAMAQAIQAPAGARAAQAOAAAJgFQAHgFABgKIAAAAQAAgFgCgDQgCgEgEgDIgOgFIgUgHIgdgJQgNgFgJgGQgJgHgFgKQgFgKAAgQIAAAAQAAgPAGgMQAFgLAJgIQALgJANgFQANgEAQAAQAXAAATAHQATAHARANIgZAjQgNgKgOgGQgNgFgNgBQgOAAgGAGQgIAFAAAIIAAAAQABAGACADQABAFAGACIAOAGIAVAHQAQADAMAGQANAFAJAGQAIAIAEAKQAFAKAAAOIAAAAQAAAPgFANQgGAMgLAIQgKAJgNADQgOAFgSAAQgXAAgXgIg");
	this.shape_29.setTransform(66.5,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0D233F").s().p("AgoBkQgXgJgTgRIAcghQAOAMAPAIQAPAGARAAQAPAAAHgFQAJgFgBgKIAAAAQABgFgCgDQgCgEgFgDIgMgFIgVgHIgdgJQgNgFgJgGQgJgHgFgKQgFgKAAgQIAAAAQAAgPAFgMQAGgLAJgIQALgJANgFQANgEARAAQAWAAATAHQATAHARANIgYAjQgPgKgNgGQgOgFgMgBQgOAAgGAGQgIAFABAIIAAAAQgBAGADADQACAFAFACIANAGIAWAHQAQADANAGQAMAFAIAGQAJAIAFAKQAEAKAAAOIAAAAQAAAPgFANQgHAMgJAIQgLAJgOADQgNAFgSAAQgXAAgXgIg");
	this.shape_30.setTransform(47.3,41.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0D233F").s().p("AgsBkQgUgIgPgPQgPgPgJgTQgHgUAAgWIAAgBQgBgVAJgUQAIgUAPgPQAPgOAUgJQAVgIAXAAQAZAAAUAIQAVAJAOAOQAPAOAIAUQAIAUAAAWIAAAAQABAXgJATQgIAUgPAOQgPAPgUAJQgVAJgYAAQgXAAgVgJgAgZg8QgLAFgJAJQgIAJgFAMQgEAMAAANIAAAAQAAANAEANQAFALAJAJQAIAKALAFQAMAFANAAQAOAAAMgFQALgFAJgJQAIgJAEgMQAGgMAAgNIAAgBQAAgNgGgMQgEgMgJgIQgIgKgMgFQgMgFgNAAQgOAAgLAFg");
	this.shape_31.setTransform(25.2,41.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0D233F").s().p("AhSBpIAAjRIBVAAQATAAAOAFQAPAGALAJQAKAKAGANQAFANAAAQIAAABQAAASgGAOQgHANgMAJQgLAKgQAFQgPAEgRAAIgjAAIAAA/gAgkABIAkAAQARAAAKgIQAJgJAAgOIAAgBQAAgPgKgIQgKgJgQABIgkAAg");
	this.shape_32.setTransform(3.2,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_33.setTransform(221,8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0D233F").s().p("AArBpIAAhUIhUAAIAABUIgvAAIAAjRIAvAAIAABTIBUAAIAAhTIAuAAIAADRg");
	this.shape_34.setTransform(199,8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0D233F").s().p("AgWBpIAAinIhAAAIAAgqICtAAIAAAqIhAAAIAACng");
	this.shape_35.setTransform(178,8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0D233F").s().p("AgdAdQAfgDgCgaIgSAAIAAgvIAwAAIAAAoQAAAdgPANQgOANgaAAg");
	this.shape_36.setTransform(154.4,18.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBbDTgAgcASIA3AAIgbhDg");
	this.shape_37.setTransform(138.9,7.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0D233F").s().p("AAoBpIhAhaIgYAaIAABAIgvAAIAAjRIAvAAIAABcIBUhcIA4AAIhWBZIBaB4g");
	this.shape_38.setTransform(117.2,8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0D233F").s().p("AgoBjQgXgHgTgRIAbgiQAOANAQAGQAPAHARAAQAOAAAJgFQAHgGABgIIAAgBQAAgFgCgDQgCgEgEgCIgOgHIgUgGIgdgIQgNgGgJgGQgJgGgFgLQgFgLAAgPIAAgBQAAgOAGgLQAFgMAJgJQALgIANgEQANgFAQAAQAXAAATAHQATAHARAMIgZAjQgNgJgOgFQgNgHgNABQgOAAgGAFQgIAFAAAIIAAAAQABAGACADQABAFAGADIAOAFIAVAGQAQAEAMAFQANAGAJAHQAIAHAEAJQAFAKAAAOIAAABQAAAPgGAMQgFAMgLAJQgKAJgNAEQgOAEgSAAQgXAAgXgJg");
	this.shape_39.setTransform(95.3,8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBbDTgAgcASIA3AAIgbhDg");
	this.shape_40.setTransform(74.1,7.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0D233F").s().p("AhKBpIAAjRIAuAAIAACnIBoAAIAAAqg");
	this.shape_41.setTransform(53.7,8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBaDTgAgbASIA3AAIgchDg");
	this.shape_42.setTransform(31.8,7.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0D233F").s().p("AA2BpIhliFIAACFIguAAIAAjRIAsAAIBhCAIAAiAIAuAAIAADRg");
	this.shape_43.setTransform(-0.9,8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_44.setTransform(-17.8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-24.8,-5.4,257.5,144), null);


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
	this.shape.graphics.f("#0D233F").s().p("AgaBDQgJgDgHgFQgHgFgFgJQgEgHAAgLQAAgKAEgJQAEgIAIgEQAIgFAKgDQALgDAMgBQAMAAAKACIATAEIAAgEQAAgTgLgJQgKgJgTAAQgLAAgKADQgKADgJAEIgGgQQALgGAMgDQALgCAOAAQAbAAAPANQAPAOAAAbIAABRIgTAAIAAgVQgHAKgMAGQgMAIgRgBQgJAAgJgCgAgbAGQgKAHAAANQAAAHACAFQADAFAFADQAEAEAGABQAGACAHAAQAJABAIgDQAIgDAGgFQAGgEAEgHQADgHAAgIIAAgNIgRgEQgKAAgMgBQgSABgKAGg");
	this.shape.setTransform(120.4,77.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AAkBfIgvg/IgbAcIAAAjIgVAAIAAi9IAVAAIAACCIBHhLIAZAAIg5A6IA7BMg");
	this.shape_1.setTransform(106.7,74.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgYBAQgPgFgMgJIALgOQAKAIAMAEQAMAEALABQAMAAAIgGQAIgGAAgKIAAAAQAAgFgDgEQgCgEgFgCIgLgFIgMgEIgPgFQgIgCgHgEQgGgEgEgGQgEgHAAgJIAAgBQAAgIADgHQAEgHAGgFQAGgGAIgCQAJgCAJAAQAMAAANADQANAFAKAGIgJAPQgJgGgLgEQgKgDgKAAQgLAAgHAFQgHAGAAAJIAAAAQAAAFADAEQADADAFADIALAEIAMAFIAPAEQAIADAGAEQAGAEAEAGQAEAHAAAJIAAAAQAAAKgEAIQgEAHgGAFQgGAFgJADQgJACgKAAQgNABgPgGg");
	this.shape_2.setTransform(91.9,77.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgaBDQgJgDgHgFQgHgFgFgJQgEgHAAgLQAAgKAEgJQAEgIAIgEQAIgFAKgDQALgDAMgBQAMAAAKACIATAEIAAgEQAAgTgLgJQgKgJgTAAQgLAAgKADQgKADgJAEIgGgQQALgGAMgDQALgCAOAAQAbAAAPANQAPAOAAAbIAABRIgTAAIAAgVQgHAKgMAGQgMAIgRgBQgJAAgJgCgAgbAGQgKAHAAANQAAAHACAFQADAFAFADQAEAEAGABQAGACAHAAQAJABAIgDQAIgDAGgFQAGgEAEgHQADgHAAgIIAAgNIgRgEQgKAAgMgBQgSABgKAGg");
	this.shape_3.setTransform(77.7,77.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_4.setTransform(67.2,74.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("ABGBcIgVgwIhiAAIgWAwIgVAAIBTi3IATAAIBTC3gAgpAZIBSAAIgphbg");
	this.shape_5.setTransform(53.5,75.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AAnBFIAAhOQAAgTgKgKQgKgMgSAAQgHABgIADQgHADgFAFQgGAGgDAHQgDAIAAAJIAABNIgUAAIAAiGIAUAAIAAAXQAHgKALgIQALgIAQAAQAMAAAKAEQAJAEAHAHQAHAHADAKQAEAKAAAMIAABTg");
	this.shape_6.setTransform(27.6,77.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgJBdIAAiGIATAAIAACGgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_7.setTransform(16.1,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(10.6,61.5,119.8,30), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(128.4,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgaBDQgJgDgHgFQgHgFgFgJQgEgHAAgLQAAgKAEgJQAEgIAIgEQAIgFAKgDQALgDAMgBQAMAAAKACIATAEIAAgEQAAgTgLgJQgKgJgTAAQgLAAgKADQgKADgJAEIgGgQQALgGAMgDQALgCAOAAQAbAAAPANQAPAOAAAbIAABRIgTAAIAAgVQgHAKgMAGQgMAIgRgBQgJAAgJgCgAgbAGQgKAHAAANQAAAHACAFQADAFAFADQAEAEAGABQAGACAHAAQAJABAIgDQAIgDAGgFQAGgEAEgHQADgHAAgIIAAgNIgRgEQgKAAgMgBQgSABgKAGg");
	this.shape_1.setTransform(117.2,43.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AAkBfIgvg/IgbAcIAAAjIgVAAIAAi9IAVAAIAACCIBHhLIAZAAIg5A6IA7BMg");
	this.shape_2.setTransform(103.6,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgYBAQgPgFgMgJIALgOQAKAIAMAEQAMAEALABQAMAAAIgGQAIgGAAgKIAAAAQAAgFgDgEQgCgEgFgCIgLgFIgMgEIgPgFQgIgCgHgEQgGgEgEgGQgEgHAAgJIAAgBQAAgIADgHQAEgHAGgFQAGgGAIgCQAJgCAJAAQAMAAANADQANAFAKAGIgJAPQgJgGgLgEQgKgDgKAAQgLAAgHAFQgHAGAAAIIAAABQAAAFADAEQADADAFADIALAEIAMAFIAPAEQAIADAGAEQAGAEAEAGQAEAHAAAJIAAAAQAAAKgEAIQgEAHgGAFQgGAFgJADQgJACgKAAQgNABgPgGg");
	this.shape_3.setTransform(88.7,43.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgaBDQgJgDgHgFQgHgFgFgJQgEgHAAgLQAAgKAEgJQAEgIAIgEQAIgFAKgDQALgDAMgBQAMAAAKACIATAEIAAgEQAAgTgLgJQgKgJgTAAQgLAAgKADQgKADgJAEIgGgQQALgGAMgDQALgCAOAAQAbAAAPANQAPAOAAAbIAABRIgTAAIAAgVQgHAKgMAGQgMAIgRgBQgJAAgJgCgAgbAGQgKAHAAANQAAAHACAFQADAFAFADQAEAEAGABQAGACAHAAQAJABAIgDQAIgDAGgFQAGgEAEgHQADgHAAgIIAAgNIgRgEQgKAAgMgBQgSABgKAGg");
	this.shape_4.setTransform(74.5,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_5.setTransform(64,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("ABGBcIgVgwIhiAAIgWAwIgVAAIBTi3IATAAIBTC3gAgpAZIBSAAIgphbg");
	this.shape_6.setTransform(50.4,40.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AAnBFIAAhOQAAgTgKgKQgKgMgSAAQgHABgIADQgHADgFAFQgGAGgDAHQgDAIAAAJIAABNIgUAAIAAiGIAUAAIAAAXQAHgKALgIQALgIAQAAQAMAAAKAEQAJAEAHAHQAHAHADAKQAEAKAAAMIAABTg");
	this.shape_7.setTransform(24.4,43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgJBdIAAiGIATAAIAACGgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_8.setTransform(12.9,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(7.4,27.3,126.2,30), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AhgBpIAAjRIBSAAQAYAAAUAIQAVAIAPAOQAPAOAIATQAIATAAAWIAAAAQAAAWgIAUQgIASgPAOQgPAPgVAIQgUAIgYAAgAgxA/IAjAAQAOAAALgEQAMgFAIgIQAIgJAFgLQAFgLAAgPIAAAAQAAgNgFgMQgFgLgIgIQgIgJgMgEQgLgGgOAAIgjAAg");
	this.shape.setTransform(214.5,78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_1.setTransform(192.7,78.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_2.setTransform(172.6,78.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AA2BpIhkiEIAACEIguAAIAAjRIAqAAIBiCBIAAiBIAtAAIAADRg");
	this.shape_3.setTransform(150.3,78.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBnAAIAAAqg");
	this.shape_4.setTransform(120.9,78.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBnAAIAAAqg");
	this.shape_5.setTransform(102.4,78.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgbAwIAFhfIAyAAIAAACIgfBdg");
	this.shape_6.setTransform(88.3,73.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AhDBTQgYgXAAgvIAAh3IAuAAIAAB2QAAAaANANQALANAVAAQAWAAALgNQAMgMAAgZIAAh4IAvAAIAAB2QAAAYgHARQgGASgMAMQgNAMgQAGQgSAGgUAAQgqAAgZgYg");
	this.shape_7.setTransform(72.5,79);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgsBkQgUgJgPgOQgPgPgJgTQgHgUgBgXIAAAAQAAgWAJgTQAIgUAPgOQAPgQAVgIQAUgIAXgBQAZABAUAIQAVAJAOAOQAPAOAIAUQAJAUgBAWIAAAAQAAAWgIAUQgIAUgPAPQgPAPgUAIQgVAIgYAAQgXAAgVgIgAgZg8QgMAFgIAJQgIAJgFAMQgEAMAAANIAAAAQAAAOAEAMQAFAMAJAIQAIAKAMAFQALAFANAAQAOAAAMgFQAMgFAIgJQAIgJAEgMQAGgMAAgOIAAAAQAAgMgGgNQgEgLgIgJQgJgKgMgFQgLgFgOAAQgNAAgMAFg");
	this.shape_8.setTransform(48.4,78.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AgWBpIAAhTIhRh+IA2AAIAxBVIAzhVIA1AAIhRB9IAABUg");
	this.shape_9.setTransform(24.9,78.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_10.setTransform(171.3,46.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgfBkQgUgIgOgPQgPgPgIgTQgIgUAAgWIAAgBQAAgVAIgUQAIgUAPgPQAOgOAUgJQAUgJAYABQAOAAAMACQAMADAKAEQAKADAIAHIAQANIgdAhQgNgKgMgHQgNgGgQAAQgMAAgLAFQgMAFgHAJQgJAJgFAMQgEAMAAANIAAAAQAAAOAEAMQAFALAIAKQAIAJAMAFQALAFAMAAQASAAANgHQAMgGANgMIAdAeIgRAPQgJAHgKAGQgKAFgNACQgMACgQABQgVAAgUgJg");
	this.shape_11.setTransform(150,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_12.setTransform(133.7,46.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AgTBqIhWjTIA0AAIA1CTIA3iTIAzAAIhWDTg");
	this.shape_13.setTransform(117.4,46.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AhgBpIAAjRIBSAAQAYAAAUAIQAVAIAPAOQAPAOAIATQAIATAAAWIAAAAQAAAWgIATQgIAUgPANQgPAOgVAJQgUAIgYAAgAgxBAIAjAAQAOgBALgEQAMgFAIgIQAIgIAFgMQAFgLAAgOIAAgBQAAgNgFgLQgFgMgIgIQgIgJgMgFQgLgEgOAAIgjAAg");
	this.shape_14.setTransform(94.9,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBaDTgAgbASIA3AAIgchDg");
	this.shape_15.setTransform(70.9,46);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAoIhiAAIAAAsIBxAAIAAApg");
	this.shape_16.setTransform(176.4,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AArBpIAAhUIhUAAIAABUIgvAAIAAjRIAvAAIAABTIBUAAIAAhTIAuAAIAADRg");
	this.shape_17.setTransform(154.5,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AgWBpIAAinIhAAAIAAgqICtAAIAAAqIhAAAIAACng");
	this.shape_18.setTransform(133.4,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_19.setTransform(106.2,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_20.setTransform(87.7,13.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBaDTgAgbASIA2AAIgbhDg");
	this.shape_21.setTransform(65.8,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(12.1,0,215.8,96.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgoBjQgXgHgTgSIAbggQAOALAQAIQAPAGARAAQAOAAAJgFQAHgFABgKIAAAAQgBgFgBgDQgCgDgEgDIgOgHIgUgGIgdgJQgNgEgJgHQgJgHgFgKQgFgKAAgQIAAgBQAAgOAGgMQAFgLAKgIQAJgJANgEQAOgFAQAAQAWAAAUAHQATAHAQANIgYAjQgOgKgNgGQgNgFgNAAQgNgBgIAGQgGAGgBAHIAAABQAAAFADAEQABADAGADIAOAGIAVAHQAQADANAGQAMAFAJAGQAJAIADAJQAFALAAAOIAAAAQAAAPgGANQgFAMgLAIQgJAIgOAFQgOAEgSAAQgXAAgXgJg");
	this.shape.setTransform(181,78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgWBpIAAinIhAAAIAAgqICtAAIAAAqIhAAAIAACng");
	this.shape_1.setTransform(161.9,78.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_2.setTransform(142.6,78.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAmAAAVASQAVATAAAgIAAABQAAAagNAPQgMAPgUAIIAzBLgAgrgCIAtAAQASAAAJgIQAJgIAAgOIAAgBQAAgOgKgIQgJgHgRgBIgtAAg");
	this.shape_3.setTransform(122,78.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AggBkQgTgIgPgOQgOgPgIgUQgIgUAAgXIAAAAQAAgWAIgTQAIgUAOgOQAPgQAUgIQAUgIAXgBQAPABAMACQAMADALADQAJAFAJAFIAPAOIgdAhQgMgKgNgHQgNgGgQAAQgMAAgMAFQgKAFgJAJQgIAJgEAMQgFAMAAANIAAAAQAAAOAFAMQAEAMAIAIQAIAKALAFQAMAFAMAAQASAAAMgGQANgHAMgLIAeAdIgRAQQgJAHgKAFQgLAEgMADQgMADgPgBQgWAAgVgIg");
	this.shape_4.setTransform(99.7,78.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAnIhiAAIAAAtIBxAAIAAApg");
	this.shape_5.setTransform(78.8,78.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgoBjQgXgHgTgSIAcggQANALAQAIQAPAGARAAQAPAAAHgFQAJgFgBgKIAAAAQABgFgCgDQgCgDgFgDIgMgHIgVgGIgdgJQgNgEgJgHQgJgHgFgKQgFgKAAgQIAAgBQAAgOAFgMQAGgLAKgIQAJgJANgEQAOgFARAAQAVAAAUAHQATAHAQANIgXAjQgOgKgOgGQgOgFgMAAQgNgBgIAGQgGAGAAAHIAAABQAAAFACAEQACADAFADIANAGIAWAHQAQADANAGQAMAFAIAGQAJAIAFAJQAEALAAAOIAAAAQAAAPgFANQgGAMgKAIQgLAIgOAFQgOAEgRAAQgXAAgXgJg");
	this.shape_6.setTransform(58.5,78.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgWBpIAAimIhAAAIAAgrICtAAIAAArIhAAAIAACmg");
	this.shape_7.setTransform(195.6,46.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AhSBpIAAjRIBVAAQATAAAOAFQAPAGALAJQAKAJAGAOQAFANAAAQIAAABQAAATgGANQgHANgMAJQgLAKgQAFQgPAEgRAAIgjAAIAAA/gAgkABIAkAAQARAAAKgIQAJgJAAgOIAAgBQAAgPgKgIQgKgIgQAAIgkAAg");
	this.shape_8.setTransform(176.7,46.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_9.setTransform(156.3,46.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AAoBpIhAhaIgYAaIAABAIgvAAIAAjRIAvAAIAABcIBUhcIA4AAIhWBZIBaB4g");
	this.shape_10.setTransform(136,46.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgWBpIAAimIhAAAIAAgrICtAAIAAArIhAAAIAACmg");
	this.shape_11.setTransform(105.2,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgoBkQgXgJgTgRIAcghQAOANAPAGQAPAHARAAQAOAAAJgFQAIgFAAgKIAAAAQgBgEgBgEQgCgDgEgEIgNgFIgVgHIgdgIQgNgFgJgHQgJgHgFgKQgFgLAAgPIAAAAQAAgPAFgLQAGgMAKgIQAJgJANgFQAOgEARAAQAVAAAUAHQATAHAQANIgXAjQgOgKgOgFQgOgHgMAAQgNABgIAFQgGAGgBAHIAAAAQAAAGADADQACAFAFACIANAGIAWAGQAQAFANAEQAMAGAIAHQAKAHADAKQAFAKAAANIAAABQAAAQgGAMQgGALgJAJQgKAJgOADQgPAFgRAAQgXAAgXgIg");
	this.shape_12.setTransform(85.7,46.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_13.setTransform(66.7,46.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AhYBpIAAjRIBgAAQAhAAASAPQASAOAAAZIAAABQAAAJgCAHIgGAMIgIAKIgLAHQASAGALAMQAKAMAAAVIAAAAQAAAPgFALQgGAKgKAIQgLAHgOADQgPAEgRAAgAgrBBIA2AAQAPgBAJgFQAJgGAAgMIAAAAQAAgKgJgHQgIgFgSAAIg0AAgAgrgTIArAAQAOAAAJgFQAJgFAAgNIAAAAQAAgKgIgGQgIgGgOABIgtAAg");
	this.shape_14.setTransform(46,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAArIBiAAIAAAoIhiAAIAAAsIBxAAIAAApg");
	this.shape_15.setTransform(176.4,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AArBpIAAhUIhUAAIAABUIgvAAIAAjRIAvAAIAABTIBUAAIAAhTIAuAAIAADRg");
	this.shape_16.setTransform(154.5,13.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AgWBpIAAinIhAAAIAAgqICtAAIAAAqIhAAAIAACng");
	this.shape_17.setTransform(133.4,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_18.setTransform(106.2,13.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_19.setTransform(87.7,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBaDTgAgbASIA2AAIgbhDg");
	this.shape_20.setTransform(65.8,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(32.5,0,174.9,96.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAZAqIgIgTIgiAAIgIATIgTAAIAkhTIARAAIAjBTgAgKAHIAVAAIgLgag");
	this.shape.setTransform(127,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAqIgZgkIgKAKIAAAaIgSAAIAAhTIASAAIAAAlIAhglIAXAAIgjAkIAkAvg");
	this.shape_1.setTransform(118.3,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAoQgJgEgHgGIALgOQAFAGAGACQAGADAHAAQAFAAAEgCQADgDAAgDIAAAAIgBgEIgCgCIgGgCIgHgDIgMgEIgJgEQgDgCgCgEQgCgFAAgFIAAgBQAAgFACgGQACgEAEgDQAEgDAFgDQAGgBAGAAQAIAAAIACQAIAEAGAEIgJAPQgGgFgFgBQgGgDgEAAQgFAAgDACQgDADAAACIABAEIADADIAFACIAIADIAMADQAFACADADQAEACABAEQACAFAAAFQAAAGgCAGQgCAEgFAEQgEADgFABQgGACgHAAQgIAAgKgDg");
	this.shape_2.setTransform(109.6,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAgKAHIAVAAIgLgag");
	this.shape_3.setTransform(101.1,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_4.setTransform(93,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAgLAHIAWAAIgLgag");
	this.shape_5.setTransform(84.3,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAARIgsAAIAAARIAnAAIAAAPIgnAAIAAARIAtAAIAAARg");
	this.shape_6.setTransform(72.1,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIgRgbIgPAAIAAAbIgSAAIAAhTIAlAAQAPAAAJAIQAIAGAAANIAAABQAAAKgFAGQgFAGgIADIAUAegAgRAAIASAAQAHAAAEgEQADgDAAgFIAAgBQAAgFgEgEQgEgCgGAAIgSAAg");
	this.shape_7.setTransform(63.9,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRAoQgIgEgGgFQgGgGgDgIQgEgIAAgJQAAgIAEgIQADgHAGgHQAGgFAIgEQAIgEAJABQAKgBAIAEQAIADAGAGQAGAGAEAIQACAIAAAIQAAAJgCAIQgEAIgGAFQgGAGgIAEQgJADgJAAQgJAAgIgDgAgKgXQgEABgEAFIgEAHQgDAGAAAEQAAAGADAEQABAFAEAEIAIAFQAEACAFABQAFgBAFgCQAFgCADgDIAGgIQACgFAAgGQAAgFgCgEQgCgFgEgDIgIgGQgFgCgFAAQgFAAgFACg");
	this.shape_8.setTransform(54.2,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_9.setTransform(45.7,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAhAAQAIAAAGACQAGACAEAEQAEAEACAFQACAGAAAGIAAAAQAAAIgCAEQgDAGgFAEQgEADgGACQgHACgGAAIgOAAIAAAZgAgOABIAOAAQAHAAAEgEQAEgDAAgGQAAgGgEgDQgEgEgHABIgOAAg");
	this.shape_10.setTransform(38,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAqIgTgdIgSAdIgVAAIAdgqIgcgpIAWAAIAQAbIASgbIAVAAIgcApIAdAqg");
	this.shape_11.setTransform(29.3,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAARIgsAAIAAARIAnAAIAAAPIgnAAIAAARIAtAAIAAARg");
	this.shape_12.setTransform(21.1,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41B44").s().p("Ar/B8IBbj3IWkAAIAAD3g");
	this.shape_13.setTransform(76.8,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.alska_redbutt, new cjs.Rectangle(0,0,153.6,24.9), null);


// stage content:
(lib._300x600_bear = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// explore Alaska
	this.instance = new lib.alska_redbutt();
	this.instance.parent = this;
	this.instance.setTransform(386.3,568.5,1,1,0,0,0,76.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:356.9},0).wait(1).to({x:311.1},0).wait(1).to({x:283.3},0).wait(1).to({x:266.2},0).wait(1).to({x:254.4},0).wait(1).to({x:245.9},0).wait(1).to({x:239.5},0).wait(1).to({x:234.6},0).wait(1).to({x:231},0).wait(1).to({x:228.3},0).wait(1).to({x:226.4},0).wait(1).to({x:225.2},0).wait(1).to({x:224.5},0).wait(1).to({x:224.3},0).wait(95).to({x:224.8},0).wait(1).to({x:226.8},0).wait(1).to({x:230.5},0).wait(1).to({x:236.7},0).wait(1).to({x:246.2},0).wait(1).to({x:260.3},0).wait(1).to({x:279.8},0).wait(1).to({x:302.8},0).wait(1).to({x:324.3},0).wait(1).to({x:341.5},0).wait(1).to({x:354.5},0).wait(1).to({x:364.1},0).wait(1).to({x:371.3},0).wait(1).to({x:376.7},0).wait(1).to({x:380.5},0).wait(1).to({x:383.2},0).wait(1).to({x:385},0).wait(1).to({x:386},0).wait(1).to({x:386.3},0).wait(38));

	// pursuit
	this.instance_1 = new lib.pursuit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.7,569,0.19,0.19,0,0,0,290.3,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:289.5,regY:40.1,x:-30.4,y:568.9},0).wait(1).to({x:7.8},0).wait(1).to({x:31},0).wait(1).to({x:45.2},0).wait(1).to({x:55},0).wait(1).to({x:62.1},0).wait(1).to({x:67.5},0).wait(1).to({x:71.5},0).wait(1).to({x:74.5},0).wait(1).to({x:76.8},0).wait(1).to({x:78.3},0).wait(1).to({x:79.4},0).wait(1).to({x:80},0).wait(1).to({regX:290.3,regY:40.6,x:80.3,y:569},0).wait(95).to({regX:289.5,regY:40.1,x:80.4,y:568.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:81.2,y:569},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:82.9,y:569.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:85.5,y:569.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:89.6,y:569.6},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:95.7,y:570.1},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:104.1,y:570.7},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:114,y:571.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:123.3,y:572.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:130.7,y:572.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:136.3,y:573.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:140.5,y:573.5},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:143.6,y:573.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:145.9,y:573.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:147.6,y:574},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:148.7,y:574.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.5,y:574.2},0).wait(1).to({x:149.9},0).wait(1).to({regX:290.6,regY:40.9,x:150.3,y:574.4},0).wait(38));

	// Layer_19
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,294.6,1,1,0,0,0,101.9,29.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).wait(1).to({regX:102.4,regY:23.3,x:151.2,y:288.2,alpha:0.004},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.397},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:101.9,regY:29.7,x:150.7,y:294.6,alpha:1},0).wait(12));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_124 = new cjs.Graphics().p("AFEKjIAAzKIIpAAIAATKg");
	var mask_graphics_125 = new cjs.Graphics().p("AFEKmIAAzLIIpAAIAATLg");
	var mask_graphics_126 = new cjs.Graphics().p("AFEKtIAAzKIIpAAIAATKg");
	var mask_graphics_127 = new cjs.Graphics().p("AFEK8IAAzLIIpAAIAATLg");
	var mask_graphics_128 = new cjs.Graphics().p("AFELUIAAzLIIpAAIAATLg");
	var mask_graphics_129 = new cjs.Graphics().p("AFEL5IAAzLIIpAAIAATLg");
	var mask_graphics_130 = new cjs.Graphics().p("AFEMvIAAzKIIpAAIAATKg");
	var mask_graphics_131 = new cjs.Graphics().p("AFEN7IAAzLIIpAAIAATLg");
	var mask_graphics_132 = new cjs.Graphics().p("AFEPUIAAzLIIpAAIAATLg");
	var mask_graphics_133 = new cjs.Graphics().p("AFEQnIAAzKIIpAAIAATKg");
	var mask_graphics_134 = new cjs.Graphics().p("AFERqIAAzLIIpAAIAATLg");
	var mask_graphics_135 = new cjs.Graphics().p("AFEScIAAzKIIpAAIAATKg");
	var mask_graphics_136 = new cjs.Graphics().p("AFETCIAAzLIIpAAIAATLg");
	var mask_graphics_137 = new cjs.Graphics().p("AFETdIAAzLIIpAAIAATLg");
	var mask_graphics_138 = new cjs.Graphics().p("AFETyIAAzLIIpAAIAATLg");
	var mask_graphics_139 = new cjs.Graphics().p("AFEUBIAAzLIIpAAIAATLg");
	var mask_graphics_140 = new cjs.Graphics().p("AFEUMIAAzMIIpAAIAATMg");
	var mask_graphics_141 = new cjs.Graphics().p("AFEUSIAAzLIIpAAIAATLg");
	var mask_graphics_142 = new cjs.Graphics().p("AFEUWIAAzLIIpAAIAATLg");
	var mask_graphics_143 = new cjs.Graphics().p("AFEUXIAAzLIIpAAIAATLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(124).to({graphics:mask_graphics_124,x:87.7,y:67.6}).wait(1).to({graphics:mask_graphics_125,x:87.7,y:67.8}).wait(1).to({graphics:mask_graphics_126,x:87.7,y:68.5}).wait(1).to({graphics:mask_graphics_127,x:87.7,y:70}).wait(1).to({graphics:mask_graphics_128,x:87.7,y:72.4}).wait(1).to({graphics:mask_graphics_129,x:87.7,y:76.1}).wait(1).to({graphics:mask_graphics_130,x:87.7,y:81.5}).wait(1).to({graphics:mask_graphics_131,x:87.7,y:89.1}).wait(1).to({graphics:mask_graphics_132,x:87.7,y:98}).wait(1).to({graphics:mask_graphics_133,x:87.7,y:106.3}).wait(1).to({graphics:mask_graphics_134,x:87.7,y:113}).wait(1).to({graphics:mask_graphics_135,x:87.7,y:118}).wait(1).to({graphics:mask_graphics_136,x:87.7,y:121.8}).wait(1).to({graphics:mask_graphics_137,x:87.7,y:124.5}).wait(1).to({graphics:mask_graphics_138,x:87.7,y:126.6}).wait(1).to({graphics:mask_graphics_139,x:87.7,y:128.1}).wait(1).to({graphics:mask_graphics_140,x:87.7,y:129.2}).wait(1).to({graphics:mask_graphics_141,x:87.7,y:129.8}).wait(1).to({graphics:mask_graphics_142,x:87.7,y:130.2}).wait(1).to({graphics:mask_graphics_143,x:87.7,y:130.3}).wait(22));

	// Layer_17
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.5,220,1,1,0,0,0,12.5,43);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).wait(41));

	// Layer_16
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,97.8,1,1,0,0,0,103.9,35.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({_off:false},0).wait(1).to({regX:104.4,regY:66.4,x:150.5,y:128.7,alpha:0.005},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.05},0).wait(1).to({alpha:0.101},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.459},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.729},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:103.9,regY:35.5,x:150,y:97.8,alpha:1},0).wait(28));

	// Layer_14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_69 = new cjs.Graphics().p("Az2BfIAAi9MAqcAAAIAAC9g");
	var mask_1_graphics_70 = new cjs.Graphics().p("Az1C4IAAlvMAqbAAAIAAFvg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Az1EQIAAofMAqbAAAIAAIfg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Az1FkIAArHMAqbAAAIAALHg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Az1G3IAAttMAqbAAAIAANtg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Az1IHIAAwNMAqbAAAIAAQNg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Az1JVIAAypMAqbAAAIAASpg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Az1KgIAA0/MAqbAAAIAAU/g");
	var mask_1_graphics_77 = new cjs.Graphics().p("Az1LpIAA3RMAqbAAAIAAXRg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Az1MvIAA5dMAqbAAAIAAZdg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Az1NzIAA7lMAqbAAAIAAblg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Az1O1IAA9pMAqbAAAIAAdpg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Az1P0IAA/nMAqbAAAIAAfng");
	var mask_1_graphics_82 = new cjs.Graphics().p("Az1QxMAAAghhMAqbAAAMAAAAhhg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Az1RsMAAAgjXMAqbAAAMAAAAjXg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Az1SkMAAAglHMAqbAAAMAAAAlHg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Az1TaMAAAgmzMAqbAAAMAAAAmzg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Az1UNMAAAgoZMAqbAAAMAAAAoZg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Az1U+MAAAgp7MAqbAAAMAAAAp7g");
	var mask_1_graphics_88 = new cjs.Graphics().p("Az1VtMAAAgrZMAqbAAAMAAAArZg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Az1WZMAAAgsxMAqbAAAMAAAAsxg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Az1XDMAAAguFMAqbAAAMAAAAuFg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Az1XqMAAAgvTMAqbAAAMAAAAvTg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Az1YPMAAAgwdMAqbAAAMAAAAwdg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Az1YyMAAAgxjMAqbAAAMAAAAxjg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Az1ZSMAAAgyjMAqbAAAMAAAAyjg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Az1ZwMAAAgzfMAqbAAAMAAAAzfg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Az1aLMAAAg0VMAqbAAAMAAAA0Vg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Az1akMAAAg1HMAqbAAAMAAAA1Hg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Az1a7MAAAg11MAqbAAAMAAAA11g");
	var mask_1_graphics_99 = new cjs.Graphics().p("Az1bPMAAAg2dMAqbAAAMAAAA2dg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Az1bhMAAAg3BMAqbAAAMAAAA3Bg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Az1bxMAAAg3hMAqbAAAMAAAA3hg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Az1b+MAAAg37MAqbAAAMAAAA37g");
	var mask_1_graphics_103 = new cjs.Graphics().p("Az1cJMAAAg4RMAqbAAAMAAAA4Rg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Az1cRMAAAg4hMAqbAAAMAAAA4hg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Az1cXMAAAg4tMAqbAAAMAAAA4tg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Az1cbMAAAg41MAqbAAAMAAAA41g");
	var mask_1_graphics_107 = new cjs.Graphics().p("Az2ccMAAAg43MAqcAAAMAAAA43g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_1_graphics_69,x:144.6,y:9.5}).wait(1).to({graphics:mask_1_graphics_70,x:144.6,y:18.4}).wait(1).to({graphics:mask_1_graphics_71,x:144.6,y:27.2}).wait(1).to({graphics:mask_1_graphics_72,x:144.6,y:35.6}).wait(1).to({graphics:mask_1_graphics_73,x:144.6,y:43.9}).wait(1).to({graphics:mask_1_graphics_74,x:144.6,y:51.9}).wait(1).to({graphics:mask_1_graphics_75,x:144.6,y:59.7}).wait(1).to({graphics:mask_1_graphics_76,x:144.6,y:67.2}).wait(1).to({graphics:mask_1_graphics_77,x:144.6,y:74.5}).wait(1).to({graphics:mask_1_graphics_78,x:144.6,y:81.5}).wait(1).to({graphics:mask_1_graphics_79,x:144.6,y:88.3}).wait(1).to({graphics:mask_1_graphics_80,x:144.6,y:94.9}).wait(1).to({graphics:mask_1_graphics_81,x:144.6,y:101.2}).wait(1).to({graphics:mask_1_graphics_82,x:144.6,y:107.3}).wait(1).to({graphics:mask_1_graphics_83,x:144.6,y:113.2}).wait(1).to({graphics:mask_1_graphics_84,x:144.6,y:118.8}).wait(1).to({graphics:mask_1_graphics_85,x:144.6,y:124.2}).wait(1).to({graphics:mask_1_graphics_86,x:144.6,y:129.3}).wait(1).to({graphics:mask_1_graphics_87,x:144.6,y:134.2}).wait(1).to({graphics:mask_1_graphics_88,x:144.6,y:138.9}).wait(1).to({graphics:mask_1_graphics_89,x:144.6,y:143.3}).wait(1).to({graphics:mask_1_graphics_90,x:144.6,y:147.5}).wait(1).to({graphics:mask_1_graphics_91,x:144.6,y:151.4}).wait(1).to({graphics:mask_1_graphics_92,x:144.6,y:155.1}).wait(1).to({graphics:mask_1_graphics_93,x:144.6,y:158.6}).wait(1).to({graphics:mask_1_graphics_94,x:144.6,y:161.8}).wait(1).to({graphics:mask_1_graphics_95,x:144.6,y:164.8}).wait(1).to({graphics:mask_1_graphics_96,x:144.6,y:167.5}).wait(1).to({graphics:mask_1_graphics_97,x:144.6,y:170}).wait(1).to({graphics:mask_1_graphics_98,x:144.6,y:172.3}).wait(1).to({graphics:mask_1_graphics_99,x:144.6,y:174.3}).wait(1).to({graphics:mask_1_graphics_100,x:144.6,y:176.1}).wait(1).to({graphics:mask_1_graphics_101,x:144.6,y:177.7}).wait(1).to({graphics:mask_1_graphics_102,x:144.6,y:179}).wait(1).to({graphics:mask_1_graphics_103,x:144.6,y:180.1}).wait(1).to({graphics:mask_1_graphics_104,x:144.6,y:180.9}).wait(1).to({graphics:mask_1_graphics_105,x:144.6,y:181.5}).wait(1).to({graphics:mask_1_graphics_106,x:144.6,y:181.9}).wait(1).to({graphics:mask_1_graphics_107,x:144.6,y:182}).wait(58));

	// Layer_13
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,301,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).wait(40).to({alpha:0},10).wait(46));

	// Layer_12
	this.instance_6 = new lib.Symbol2copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,106.9,1,1,0,0,0,70.5,32);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,163.6,1,1,0,0,0,70.5,32);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},66).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},19).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(66).to({_off:false},0).wait(1).to({regX:70.6,regY:74.9,x:150.1,y:149.9,alpha:0.005},0).wait(1).to({y:150.5,alpha:0.024},0).wait(1).to({y:151.7,alpha:0.067},0).wait(1).to({y:154.3,alpha:0.153},0).wait(1).to({y:158.7,alpha:0.301},0).wait(1).to({y:163.5,alpha:0.462},0).wait(1).to({y:167,alpha:0.582},0).wait(1).to({y:169.6,alpha:0.67},0).wait(1).to({y:171.6,alpha:0.736},0).wait(1).to({y:173.1,alpha:0.788},0).wait(1).to({y:174.4,alpha:0.829},0).wait(1).to({y:175.4,alpha:0.864},0).wait(1).to({y:176.2,alpha:0.892},0).wait(1).to({y:176.9,alpha:0.915},0).wait(1).to({y:177.5,alpha:0.934},0).wait(1).to({y:178,alpha:0.951},0).wait(1).to({y:178.4,alpha:0.964},0).wait(1).to({y:178.7,alpha:0.974},0).wait(1).to({y:178.9,alpha:0.983},0).wait(1).to({y:179.1,alpha:0.989},0).wait(1).to({y:179.3,alpha:0.994},0).wait(1).to({y:179.4,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:150,y:136.6,alpha:1},0).wait(20).to({regX:70.6,regY:74.9,x:150.1,y:179.6,alpha:0.995},0).wait(1).to({y:180.1,alpha:0.976},0).wait(1).to({y:181.3,alpha:0.933},0).wait(1).to({y:183.6,alpha:0.847},0).wait(1).to({y:187.6,alpha:0.699},0).wait(1).to({y:191.9,alpha:0.538},0).wait(1).to({y:195.2,alpha:0.418},0).wait(1).to({y:197.5,alpha:0.33},0).wait(1).to({y:199.3,alpha:0.264},0).wait(1).to({y:200.7,alpha:0.212},0).wait(1).to({y:201.8,alpha:0.171},0).wait(1).to({y:202.8,alpha:0.136},0).wait(1).to({y:203.5,alpha:0.108},0).wait(1).to({y:204.2,alpha:0.085},0).wait(1).to({y:204.7,alpha:0.066},0).wait(1).to({y:205.1,alpha:0.049},0).wait(1).to({y:205.5,alpha:0.036},0).wait(1).to({y:205.8,alpha:0.026},0).wait(1).to({y:206,alpha:0.017},0).wait(1).to({y:206.2,alpha:0.011},0).wait(1).to({y:206.3,alpha:0.006},0).wait(1).to({y:206.4,alpha:0.002},0).wait(1).to({alpha:0.001},0).to({_off:true},1).wait(32));

	// Layer_11
	this.instance_8 = new lib.Symbol1copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.1,69.4,1,1,0,0,0,120,35);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({_off:false},0).wait(1).to({regX:119.3,regY:46.2,x:149.4,y:80.7,alpha:0.005},0).wait(1).to({y:81.3,alpha:0.024},0).wait(1).to({y:82.5,alpha:0.067},0).wait(1).to({y:85.1,alpha:0.153},0).wait(1).to({y:89.5,alpha:0.301},0).wait(1).to({y:94.3,alpha:0.462},0).wait(1).to({y:97.8,alpha:0.582},0).wait(1).to({y:100.4,alpha:0.67},0).wait(1).to({y:102.4,alpha:0.736},0).wait(1).to({y:103.9,alpha:0.788},0).wait(1).to({y:105.2,alpha:0.829},0).wait(1).to({y:106.2,alpha:0.864},0).wait(1).to({y:107,alpha:0.892},0).wait(1).to({y:107.7,alpha:0.915},0).wait(1).to({y:108.3,alpha:0.934},0).wait(1).to({y:108.8,alpha:0.951},0).wait(1).to({y:109.2,alpha:0.964},0).wait(1).to({y:109.5,alpha:0.974},0).wait(1).to({y:109.7,alpha:0.983},0).wait(1).to({y:109.9,alpha:0.989},0).wait(1).to({y:110.1,alpha:0.994},0).wait(1).to({y:110.2,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:150.1,y:99.1,alpha:1},0).wait(23).to({regX:119.3,regY:46.2,x:149.4,y:110.4,alpha:0.995},0).wait(1).to({y:110.9,alpha:0.976},0).wait(1).to({y:112.1,alpha:0.933},0).wait(1).to({y:114.4,alpha:0.847},0).wait(1).to({y:118.4,alpha:0.699},0).wait(1).to({y:122.7,alpha:0.538},0).wait(1).to({y:126,alpha:0.418},0).wait(1).to({y:128.3,alpha:0.33},0).wait(1).to({y:130.1,alpha:0.264},0).wait(1).to({y:131.5,alpha:0.212},0).wait(1).to({y:132.6,alpha:0.171},0).wait(1).to({y:133.6,alpha:0.136},0).wait(1).to({y:134.3,alpha:0.108},0).wait(1).to({y:135,alpha:0.085},0).wait(1).to({y:135.5,alpha:0.066},0).wait(1).to({y:135.9,alpha:0.049},0).wait(1).to({y:136.3,alpha:0.036},0).wait(1).to({y:136.6,alpha:0.026},0).wait(1).to({y:136.8,alpha:0.017},0).wait(1).to({y:137,alpha:0.011},0).wait(1).to({y:137.1,alpha:0.006},0).wait(1).to({y:137.2,alpha:0.002},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120,regY:35,x:150.1,y:126.1,alpha:0},0).wait(32));

	// Layer_10
	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,300,1.3,1.3,0,0,0,150,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300.1,alpha:0.004},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300,alpha:0.018},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:150.1,alpha:0.044},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:150,alpha:0.088},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.156},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:150.1,y:300.1,alpha:0.259},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300,alpha:0.397},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150,alpha:0.547},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.674},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.771},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.1,y:300.1,alpha:0.842},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.895},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:300,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.1,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:300,alpha:1},0).wait(98));

	// Layer_9
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,300,1.3,1.3,0,0,0,150,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300.1,alpha:0.004},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300,alpha:0.018},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:150.1,alpha:0.044},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:150,alpha:0.088},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.156},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:150.1,y:300.1,alpha:0.259},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300,alpha:0.397},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150,alpha:0.547},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.674},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.771},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.1,y:300.1,alpha:0.842},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.895},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:300,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.1,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:300,alpha:1},0).wait(98));

	// Layer_6
	this.instance_11 = new lib.Symbol2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,142,1,1,0,0,0,70.5,32);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(1).to({regX:70.7,regY:40.8,x:150.2,y:150.9,alpha:0.006},0).wait(1).to({y:151.4,alpha:0.027},0).wait(1).to({y:152.7,alpha:0.075},0).wait(1).to({y:155.2,alpha:0.174},0).wait(1).to({y:159.4,alpha:0.338},0).wait(1).to({y:163.5,alpha:0.497},0).wait(1).to({y:166.4,alpha:0.612},0).wait(1).to({y:168.6,alpha:0.695},0).wait(1).to({y:170.2,alpha:0.758},0).wait(1).to({y:171.4,alpha:0.807},0).wait(1).to({y:172.5,alpha:0.847},0).wait(1).to({y:173.3,alpha:0.879},0).wait(1).to({y:174,alpha:0.906},0).wait(1).to({y:174.5,alpha:0.927},0).wait(1).to({y:175,alpha:0.945},0).wait(1).to({y:175.4,alpha:0.96},0).wait(1).to({y:175.7,alpha:0.972},0).wait(1).to({y:175.9,alpha:0.981},0).wait(1).to({y:176.1,alpha:0.988},0).wait(1).to({y:176.2,alpha:0.994},0).wait(1).to({y:176.3,alpha:0.997},0).wait(1).to({y:176.4,alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:150,y:167.6,alpha:1},0).to({_off:true},37).wait(98));

	// Layer_5
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.1,69.4,1,1,0,0,0,120,35);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).wait(1).to({regX:120.7,regY:46.2,x:150.8,y:80.7,alpha:0.006},0).wait(1).to({y:81.3,alpha:0.027},0).wait(1).to({y:82.8,alpha:0.075},0).wait(1).to({y:85.7,alpha:0.174},0).wait(1).to({y:90.6,alpha:0.338},0).wait(1).to({y:95.3,alpha:0.497},0).wait(1).to({y:98.7,alpha:0.612},0).wait(1).to({y:101.2,alpha:0.695},0).wait(1).to({y:103,alpha:0.758},0).wait(1).to({y:104.5,alpha:0.807},0).wait(1).to({y:105.7,alpha:0.847},0).wait(1).to({y:106.7,alpha:0.879},0).wait(1).to({y:107.4,alpha:0.906},0).wait(1).to({y:108.1,alpha:0.927},0).wait(1).to({y:108.6,alpha:0.945},0).wait(1).to({y:109.1,alpha:0.96},0).wait(1).to({y:109.4,alpha:0.972},0).wait(1).to({y:109.7,alpha:0.981},0).wait(1).to({y:109.9,alpha:0.988},0).wait(1).to({y:110.1,alpha:0.994},0).wait(1).to({y:110.2,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:150.1,y:99.1,alpha:1},0).to({_off:true},40).wait(98));

	// Layer_8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_10 = new cjs.Graphics().p("Az2BfIAAi9MAqcAAAIAAC9g");
	var mask_3_graphics_11 = new cjs.Graphics().p("Az1CvIAAldMAqbAAAIAAFdg");
	var mask_3_graphics_12 = new cjs.Graphics().p("Az1D+IAAn7MAqbAAAIAAH7g");
	var mask_3_graphics_13 = new cjs.Graphics().p("Az1FLIAAqVMAqbAAAIAAKVg");
	var mask_3_graphics_14 = new cjs.Graphics().p("Az1GWIAAsrMAqbAAAIAAMrg");
	var mask_3_graphics_15 = new cjs.Graphics().p("Az1HgIAAu/MAqbAAAIAAO/g");
	var mask_3_graphics_16 = new cjs.Graphics().p("Az1IoIAAxPMAqbAAAIAARPg");
	var mask_3_graphics_17 = new cjs.Graphics().p("Az1JvIAAzdMAqbAAAIAATdg");
	var mask_3_graphics_18 = new cjs.Graphics().p("Az1K0IAA1nMAqbAAAIAAVng");
	var mask_3_graphics_19 = new cjs.Graphics().p("Az1L3IAA3tMAqbAAAIAAXtg");
	var mask_3_graphics_20 = new cjs.Graphics().p("Az1M5IAA5xMAqbAAAIAAZxg");
	var mask_3_graphics_21 = new cjs.Graphics().p("Az1N5IAA7xMAqbAAAIAAbxg");
	var mask_3_graphics_22 = new cjs.Graphics().p("Az1O4IAA9vMAqbAAAIAAdvg");
	var mask_3_graphics_23 = new cjs.Graphics().p("Az1P1IAA/pMAqbAAAIAAfpg");
	var mask_3_graphics_24 = new cjs.Graphics().p("Az1QwMAAAghfMAqbAAAMAAAAhfg");
	var mask_3_graphics_25 = new cjs.Graphics().p("Az1RqMAAAgjTMAqbAAAMAAAAjTg");
	var mask_3_graphics_26 = new cjs.Graphics().p("Az1SiMAAAglDMAqbAAAMAAAAlDg");
	var mask_3_graphics_27 = new cjs.Graphics().p("Az1TZMAAAgmxMAqbAAAMAAAAmxg");
	var mask_3_graphics_28 = new cjs.Graphics().p("Az1UOMAAAgobMAqbAAAMAAAAobg");
	var mask_3_graphics_29 = new cjs.Graphics().p("Az1VBMAAAgqBMAqbAAAMAAAAqBg");
	var mask_3_graphics_30 = new cjs.Graphics().p("Az1VzMAAAgrlMAqbAAAMAAAArlg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Az1WjMAAAgtFMAqbAAAMAAAAtFg");
	var mask_3_graphics_32 = new cjs.Graphics().p("Az1XSMAAAgujMAqbAAAMAAAAujg");
	var mask_3_graphics_33 = new cjs.Graphics().p("Az1X/MAAAgv9MAqbAAAMAAAAv9g");
	var mask_3_graphics_34 = new cjs.Graphics().p("Az1YqMAAAgxTMAqbAAAMAAAAxTg");
	var mask_3_graphics_35 = new cjs.Graphics().p("Az1ZUMAAAgynMAqbAAAMAAAAyng");
	var mask_3_graphics_36 = new cjs.Graphics().p("Az1Z8MAAAgz3MAqbAAAMAAAAz3g");
	var mask_3_graphics_37 = new cjs.Graphics().p("Az1ajMAAAg1FMAqbAAAMAAAA1Fg");
	var mask_3_graphics_38 = new cjs.Graphics().p("Az1bIMAAAg2PMAqbAAAMAAAA2Pg");
	var mask_3_graphics_39 = new cjs.Graphics().p("Az1brMAAAg3VMAqbAAAMAAAA3Vg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Az1cNMAAAg4ZMAqbAAAMAAAA4Zg");
	var mask_3_graphics_41 = new cjs.Graphics().p("Az1ctMAAAg5ZMAqbAAAMAAAA5Zg");
	var mask_3_graphics_42 = new cjs.Graphics().p("Az1dMMAAAg6XMAqbAAAMAAAA6Xg");
	var mask_3_graphics_43 = new cjs.Graphics().p("Az1dpMAAAg7RMAqbAAAMAAAA7Rg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Az1eFMAAAg8JMAqbAAAMAAAA8Jg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Az1eeMAAAg87MAqbAAAMAAAA87g");
	var mask_3_graphics_46 = new cjs.Graphics().p("Az1e3MAAAg9tMAqbAAAMAAAA9tg");
	var mask_3_graphics_47 = new cjs.Graphics().p("Az1fNMAAAg+ZMAqbAAAMAAAA+Zg");
	var mask_3_graphics_48 = new cjs.Graphics().p("Az2fiMAAAg/DMAqcAAAMAAAA/Dg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_3_graphics_10,x:144.6,y:9.5}).wait(1).to({graphics:mask_3_graphics_11,x:144.6,y:17.5}).wait(1).to({graphics:mask_3_graphics_12,x:144.6,y:25.4}).wait(1).to({graphics:mask_3_graphics_13,x:144.6,y:33.1}).wait(1).to({graphics:mask_3_graphics_14,x:144.6,y:40.6}).wait(1).to({graphics:mask_3_graphics_15,x:144.6,y:48}).wait(1).to({graphics:mask_3_graphics_16,x:144.6,y:55.2}).wait(1).to({graphics:mask_3_graphics_17,x:144.6,y:62.3}).wait(1).to({graphics:mask_3_graphics_18,x:144.6,y:69.2}).wait(1).to({graphics:mask_3_graphics_19,x:144.6,y:75.9}).wait(1).to({graphics:mask_3_graphics_20,x:144.6,y:82.5}).wait(1).to({graphics:mask_3_graphics_21,x:144.6,y:88.9}).wait(1).to({graphics:mask_3_graphics_22,x:144.6,y:95.2}).wait(1).to({graphics:mask_3_graphics_23,x:144.6,y:101.3}).wait(1).to({graphics:mask_3_graphics_24,x:144.6,y:107.2}).wait(1).to({graphics:mask_3_graphics_25,x:144.6,y:113}).wait(1).to({graphics:mask_3_graphics_26,x:144.6,y:118.6}).wait(1).to({graphics:mask_3_graphics_27,x:144.6,y:124.1}).wait(1).to({graphics:mask_3_graphics_28,x:144.6,y:129.4}).wait(1).to({graphics:mask_3_graphics_29,x:144.6,y:134.5}).wait(1).to({graphics:mask_3_graphics_30,x:144.6,y:139.5}).wait(1).to({graphics:mask_3_graphics_31,x:144.6,y:144.3}).wait(1).to({graphics:mask_3_graphics_32,x:144.6,y:149}).wait(1).to({graphics:mask_3_graphics_33,x:144.6,y:153.5}).wait(1).to({graphics:mask_3_graphics_34,x:144.6,y:157.8}).wait(1).to({graphics:mask_3_graphics_35,x:144.6,y:162}).wait(1).to({graphics:mask_3_graphics_36,x:144.6,y:166}).wait(1).to({graphics:mask_3_graphics_37,x:144.6,y:169.9}).wait(1).to({graphics:mask_3_graphics_38,x:144.6,y:173.6}).wait(1).to({graphics:mask_3_graphics_39,x:144.6,y:177.1}).wait(1).to({graphics:mask_3_graphics_40,x:144.6,y:180.5}).wait(1).to({graphics:mask_3_graphics_41,x:144.6,y:183.7}).wait(1).to({graphics:mask_3_graphics_42,x:144.6,y:186.8}).wait(1).to({graphics:mask_3_graphics_43,x:144.6,y:189.7}).wait(1).to({graphics:mask_3_graphics_44,x:144.6,y:192.5}).wait(1).to({graphics:mask_3_graphics_45,x:144.6,y:195}).wait(1).to({graphics:mask_3_graphics_46,x:144.6,y:197.5}).wait(1).to({graphics:mask_3_graphics_47,x:144.6,y:199.7}).wait(1).to({graphics:mask_3_graphics_48,x:144.6,y:201.8}).wait(19).to({graphics:null,x:0,y:0}).wait(98));

	// Layer_7
	this.instance_13 = new lib.Symbol14();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).to({_off:true},57).wait(98));

	// Layer_1
	this.instance_14 = new lib.glacier();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},67).wait(98));

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
		{src:"images/300x600_bear_atlas_.png", id:"300x600_bear_atlas_"}
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