(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x50_ci_atlas_P_", frames: [[0,0,728,90],[730,0,115,83],[847,0,38,38]]},
		{name:"320x50_ci_atlas_NP_", frames: [[0,0,728,90],[0,92,728,90]]}
];


// symbols:



(lib.lb_ice = function() {
	this.spriteSheet = ss["320x50_ci_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lb_icetruckfield = function() {
	this.spriteSheet = ss["320x50_ci_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lb_metro = function() {
	this.spriteSheet = ss["320x50_ci_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lb_truck = function() {
	this.spriteSheet = ss["320x50_ci_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sm_play = function() {
	this.spriteSheet = ss["320x50_ci_atlas_P_"];
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


(lib.travelAB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgCAFQgJgJABgJQABgIAIAHIAMAJIAAAXQgHgGgGgHg");
	this.shape.setTransform(-218.6,97.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAuAmIAAhLIAkAAIAABLgAAAAmIAAgLQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgTAEIADgIIgCgEIgRgOIADgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgDgLIAKACQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIADgFIAJAKQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgFgVIAIADIACgBIAFgLIAHALIABABIAIgDIgFAVQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAIACgBIAIgKIADAFQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIAKgCIgDALQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIADABIgRAOQgCADAAABIAEAIIgTgEQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAALgAhRAmIAAhLIAkAAIAABLg");
	this.shape_1.setTransform(-76.4,109.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888888").s().p("AE8HQQgHgFAAgLQAAgNAMgGQAGgCAWgCQAGgBACgCQADgCAAgFQAAgQgTAAQgJAAgFAEQgGAFAAAIIgJAAQAAgMAJgHQAIgFANgBQAbAAAAAYIAAAnQAAAGAGAAIADAAIAAAIIgGAAQgHAAgCgEQgCgDAAgGQgFAHgGAEQgGAEgKAAQgLAAgHgGgAFgGuQgQADgHACQgLADAAAKQAAAGAFAFQAFADAGAAQALAAAIgGQAHgHAAgKIAAgMIAAAAQgBACgHABgADrHKQgIgKAAgSQAAgQAIgLQAJgMAQAAQAJAAAHAFQAHAEADAIIAAgrIAKAAIAABnIgJAAIAAgPIAAAAQgDAIgIAEQgHAFgJAAQgQAAgJgMgADyGZQgGAJAAAMQAAANAGAKQAGAKAMgBQAOABAHgKQAFgKAAgNQAAgNgFgIQgHgKgOAAQgMAAgGAKgACfHQQgHgFAAgLQAAgNAMgGQAGgCAVgCQAHgBACgCQADgCAAgFQAAgQgTAAQgJAAgFAEQgGAFAAAIIgJAAQAAgMAJgHQAHgFAOgBQAbAAAAAYIAAAnQAAAGAFAAIADAAIAAAIIgGAAQgGAAgCgEQgCgDAAgGIgBAAQgFAHgFAEQgGAEgKAAQgMAAgGgGgADDGuQgQADgHACQgLADAAAKQAAAGAFAFQAEADAHAAQALAAAHgGQAIgHAAgKIAAgMQgBACgHABgAAHHQQgHgFAAgLQAAgNAMgGQAGgCAVgCQAHgBACgCQADgCAAgFQAAgQgTAAQgJAAgFAEQgGAFAAAIIgJAAQAAgMAJgHQAHgFAOgBQAbAAAAAYIAAAnQAAAGAFAAIADAAIAAAIIgGAAQgGAAgCgEQgCgDAAgGQgGAHgFAEQgGAEgLAAQgKAAgHgGgAArGuQgQADgHACQgLADAAAKQAAAGAFAFQAEADAHAAQALAAAHgGQAIgHAAgKIAAgMIAAAAQgBACgHABgAhYHFQgMgOAAgWQAAgXAMgOQAOgRAXAAQAPAAAMAJQAMAJACAPIgKAAQgCgMgJgGQgJgHgLABQgTgBgLAOQgJAMAAAUQAAASAJAMQALAOATABQANAAAJgKQAJgJABgOIAKAAQgCATgLALQgLALgSAAQgXAAgOgRgACBHUIAAgvQAAgWgSAAQgLAAgGAIQgHAGAAAMIAAArIgJAAIAAhLIAJAAIAAAOQAD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");
	this.shape_2.setTransform(-129.1,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.travelAB, new cjs.Rectangle(-219.6,19.7,178.9,94), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_metro();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.556,0.556);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,404.5,50), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D50032").ss(3,2,1).p("AkvAAIJfAA");
	this.shape.setTransform(-26.2,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-58.1,-3.6,63.8,3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00567B").s().p("AANAaIgNgmIgNAmIgDAAIgSgzIAHAAIANAlIANglIADAAIANAlIANglIAHAAIgRAzg");
	this.shape.setTransform(62.7,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00567B").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIgAgNgNQgFAGAAAHQAAAIAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgIQAAgIgGgFQgGgGgIAAQgHAAgGAGg");
	this.shape_1.setTransform(56.1,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00567B").s().p("AARAaIgegkIAAAkIgHAAIAAgzIADAAIAfAkIAAgkIAHAAIAAAzg");
	this.shape_2.setTransform(50.4,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00567B").s().p("AgJAYQgFgDgCgFIAFgEQAEAIAHAAQAFAAACgCQADgDAAgDQAAgEgGgDIgKgFQgIgEAAgIQAAgGAFgEQAEgEAGAAQAKAAAFAIIgEAEQgFgFgGAAQgCAAgDACQgCACAAADQAAAEAEACIAMAGQAHAEAAAIQAAAGgFAEQgEAFgIAAQgEAAgFgDg");
	this.shape_3.setTransform(44,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00567B").s().p("AAKAaIgNgVIgHAAIAAAVIgHAAIAAgzIARAAQAHAAAFAFQAEAEAAAGQAAAGgDAEQgDADgGABIAOAWgAgKgBIAJAAQAEAAADgCQACgDAAgEQAAgEgCgCQgCgCgEAAIgKAAg");
	this.shape_4.setTransform(40.1,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00567B").s().p("AgNAVQgFgFAAgIIAAghIAHAAIAAAgQAAAGADADQADADAFAAQAFAAAEgDQADgDAAgGIAAggIAHAAIAAAhQAAAIgFAFQgGAFgIAAQgIAAgFgFg");
	this.shape_5.setTransform(35.2,4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00567B").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIgAgNgNQgFAGAAAHQAAAIAFAGQAGAGAHAAQAIAAAGgGQAGgGAAgIQAAgIgGgFQgGgGgIAAQgHAAgGAGg");
	this.shape_6.setTransform(29.7,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00567B").s().p("AgCAaIAAgTIgSggIAIAAIAMAZIAOgZIAHAAIgRAgIAAATg");
	this.shape_7.setTransform(24.6,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00567B").s().p("AARAaIgegkIAAAkIgHAAIAAgzIADAAIAfAkIAAgkIAHAAIAAAzg");
	this.shape_8.setTransform(17.9,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00567B").s().p("AAPAaIgFgOIgTAAIgFAOIgIAAIAVgzIADAAIAVAzgAAHAGIgHgTIgHATIAOAAg");
	this.shape_9.setTransform(12.8,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00567B").s().p("AgQAaIAAgzIAGAAIAAAsIAcAAIAAAHg");
	this.shape_10.setTransform(8.7,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00567B").s().p("AgQAaIAAgzIARAAQAHAAAFAFQAEAEAAAHQAAAHgFADQgEAFgIAAIgJAAIAAAUgAgJAAIAJAAQAEAAAEgCQACgDAAgEQAAgEgCgDQgDgCgEAAIgKAAg");
	this.shape_11.setTransform(4.4,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,68.5,11), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sm_play();
	this.instance.parent = this;
	this.instance.setTransform(-72,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-72,-3,38,38), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00587C").s().p("AgyBRIAAihIBlAAIAAAVIhOAAIAAAwIBIAAIAAAUIhIAAIAAAzIBOAAIAAAVg");
	this.shape.setTransform(240.7,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00587C").s().p("AAeBRIgphCIgXAAIAABCIgWAAIAAihIA3AAQAYAAANAOQAOAOAAAUQAAARgLANQgKALgRAEIAtBEgAgigEIAdAAQAPAAAJgIQAIgIAAgMQAAgMgHgIQgIgHgMAAIgiAAg");
	this.shape_1.setTransform(227.2,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00587C").s().p("AgyBRIAAihIBlAAIAAAVIhOAAIAAAwIBIAAIAAAUIhIAAIAAAzIBOAAIAAAVg");
	this.shape_2.setTransform(213.3,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00587C").s().p("AApBRIAAhJIhRAAIAABJIgWAAIAAihIAWAAIAABEIBRAAIAAhEIAWAAIAAChg");
	this.shape_3.setTransform(197.9,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00587C").s().p("AAeBRIgphCIgXAAIAABCIgWAAIAAihIA3AAQAYAAANAOQAOAOAAAUQAAARgLANQgKALgRAEIAtBEgAgigEIAdAAQAPAAAJgIQAIgIAAgMQAAgMgHgIQgIgHgMAAIgiAAg");
	this.shape_4.setTransform(177.7,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00587C").s().p("AgyBRIAAihIBlAAIAAAVIhOAAIAAAwIBIAAIAAAUIhIAAIAAAzIBOAAIAAAVg");
	this.shape_5.setTransform(163.8,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00587C").s().p("Ag2A8QgXgYgBgjQAAgkAZgYQAZgYAiAAQAVAAARAIQASAIAMAOIgQAOQgUgXgfABQgaAAgSARQgSASAAAbQAAAbASARQASASAZAAQAOAAAOgGQANgHALgKIAAghIg3AAIAAgTIBMAAIAAA+QgeAigsAAQgjAAgYgYg");
	this.shape_6.setTransform(147.7,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00587C").s().p("Ag2A8QgYgYAAgjQAAgkAagYQAYgYAiAAQAUAAATAIQASAIALAOIgQAOQgUgXggABQgZAAgSARQgSASAAAbQAAAbASARQASASAYAAQAPAAAOgGQANgHALgKIAAghIg3AAIAAgTIBLAAIAAA+QgdAigtAAQgiAAgYgYg");
	this.shape_7.setTransform(129.8,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00587C").s().p("AgKBRIAAihIAVAAIAAChg");
	this.shape_8.setTransform(117.9,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00587C").s().p("Ag6BRIAAihIA/AAQAWAAALAMQAMAMAAAQQAAAMgGAJQgGAJgKADQAPAEAIALQAIALAAAQQAAATgOANQgNAOgYAAgAgkA9IApAAQAOAAAIgJQAJgIAAgLQAAgMgJgIQgIgJgPAAIgoAAgAgkgPIAmAAQAMAAAHgHQAHgGAAgKQAAgJgHgHQgHgGgLAAIgnAAg");
	this.shape_9.setTransform(107.9,10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00587C").s().p("AgxBRIAAihIBjAAIAAAVIhOAAIAAAwIBJAAIAAAUIhJAAIAAAzIBOAAIAAAVg");
	this.shape_10.setTransform(88.3,10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00587C").s().p("AAeBRIgphCIgXAAIAABCIgWAAIAAihIA3AAQAYAAANAOQAOAOAAAUQAAARgLANQgKALgRAEIAtBEgAgigEIAdAAQAPAAAJgIQAIgIAAgMQAAgMgHgIQgIgHgMAAIgiAAg");
	this.shape_11.setTransform(74.8,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00587C").s().p("AAvBRIgQgqIg9AAIgQAqIgYAAIBBihIAMAAIBBChgAAXASIgXg8IgXA8IAuAAg");
	this.shape_12.setTransform(59.7,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00587C").s().p("AgfBMQgPgJgIgRIARgNQANAaAYAAQAOAAAJgHQAHgHAAgKQAAgOgQgJIgigQQgZgQAAgXQAAgTANgMQAOgNAVAAQAfAAARAYIgPAOQgNgRgUgBQgJAAgIAHQgIAGABAKQAAANANAHIAnAUQAYAOgBAYQAAAUgPANQgQANgWAAQgRAAgPgIg");
	this.shape_13.setTransform(40.6,10.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00587C").s().p("AgKBRIAAg6Ig3hnIAYAAIApBRIAqhRIAYAAIg4BnIAAA6g");
	this.shape_14.setTransform(27.5,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00587C").s().p("AAwBRIgRgqIg9AAIgRAqIgXAAIBCihIAKAAIBBChgAAXASIgXg8IgWA8IAtAAg");
	this.shape_15.setTransform(13.1,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00587C").s().p("AhDBRIAAihIA9AAQAhAAAUAWQAVAWAAAkQAAAmgVAVQgVAWgjAAgAgtA8IAlAAQAYAAAPgRQAOgRAAgaQAAgagOgQQgPgRgYAAIglAAg");
	this.shape_16.setTransform(-2.2,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-13,0,262.2,26), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_truck();
	this.instance.parent = this;
	this.instance.setTransform(12,4,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(12,4,96.6,69.7), null);


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
	this.instance.setTransform(-80,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-80,0,728,90), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00587C").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape.setTransform(269.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00587C").s().p("AhGBHQgcgcAAgqQAAgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_1.setTransform(248,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00587C").s().p("AhHBgIAAgQIBoiWIhjAAIAAgZICHAAIAAAQIhnCXIBqAAIAAAYg");
	this.shape_2.setTransform(228.9,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00587C").s().p("AgMBgIAAi/IAZAAIAAC/g");
	this.shape_3.setTransform(217.2,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_4.setTransform(205.9,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00587C").s().p("AhGBHQgdgcABgqQgBgpAegdQAdgdAoAAQApAAAdAdQAdAeABAnQgBApgdAdQgdAdgpAAQgpAAgdgcgAgygzQgWAVABAfQAAAfAUAVQAVAVAeAAQAfAAAVgVQAUgVABgfQgBgfgUgVQgVgWgfAAQgdAAgVAWg");
	this.shape_5.setTransform(185.7,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00587C").s().p("AAwBgIAAhWIhfAAIAABWIgaAAIAAi/IAaAAIAABRIBfAAIAAhRIAaAAIAAC/g");
	this.shape_6.setTransform(164.8,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00587C").s().p("AAzBgIgziOIgxCOIgPAAIhCi/IAcAAIAuCMIAziMIALAAIA0CMIAtiMIAcAAIhCC/g");
	this.shape_7.setTransform(135.1,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_8.setTransform(114.4,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00587C").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape_9.setTransform(95.8,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00587C").s().p("AA4BgIgUgyIhIAAIgTAyIgdAAIBPi/IAMAAIBOC/gAAbAVIgbhHIgbBHIA2AAg");
	this.shape_10.setTransform(70.6,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_11.setTransform(48,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00587C").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_12.setTransform(32.1,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00587C").s().p("AhGBHQgcgcgBgqQABgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_13.setTransform(11.9,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00587C").s().p("AhABgIAAi/IAaAAIAACmIBnAAIAAAZg");
	this.shape_14.setTransform(-6,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00587C").s().p("Ag+BgIAAi/IA/AAQAeAAAQARQAQASAAAYQAAAZgQAQQgRARgeAAIgkAAIAABKgAgkgBIAkAAQARAAAKgKQAKgKAAgPQAAgPgJgKQgJgJgQAAIgnAAg");
	this.shape_15.setTransform(-22,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00587C").s().p("AAxBgIgxhMIgvBMIgfAAIBAhgIg9hfIAeAAIAtBKIAwhKIAeAAIg/BfIBABgg");
	this.shape_16.setTransform(-38.9,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00587C").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_17.setTransform(-54.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-64.8,0,346.4,30), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape.setTransform(269.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBHQgcgcAAgqQAAgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_1.setTransform(248,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBgIAAgQIBoiWIhjAAIAAgZICHAAIAAAQIhnCXIBqAAIAAAYg");
	this.shape_2.setTransform(228.9,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMBgIAAi/IAZAAIAAC/g");
	this.shape_3.setTransform(217.2,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_4.setTransform(205.9,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBHQgdgcABgqQgBgpAegdQAdgdAoAAQApAAAdAdQAdAeABAnQgBApgdAdQgdAdgpAAQgpAAgdgcgAgygzQgWAVABAfQAAAfAUAVQAVAVAeAAQAfAAAVgVQAUgVABgfQgBgfgUgVQgVgWgfAAQgdAAgVAWg");
	this.shape_5.setTransform(185.7,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBgIAAhWIhfAAIAABWIgaAAIAAi/IAaAAIAABRIBfAAIAAhRIAaAAIAAC/g");
	this.shape_6.setTransform(164.8,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAzBgIgziOIgxCOIgPAAIhCi/IAcAAIAuCMIAziMIALAAIA0CMIAtiMIAcAAIhCC/g");
	this.shape_7.setTransform(135.1,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_8.setTransform(114.4,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABABgIhyiHIAACHIgaAAIAAi/IAMAAIB0CIIAAiIIAZAAIAAC/g");
	this.shape_9.setTransform(95.8,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA4BgIgUgyIhIAAIgTAyIgdAAIBPi/IAMAAIBOC/gAAbAVIgbhHIgbBHIA2AAg");
	this.shape_10.setTransform(70.6,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_11.setTransform(48,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBgIgxhOIgaAAIAABOIgaAAIAAi/IBBAAQAcAAAQARQAQAQAAAYQAAATgMAQQgMAOgVAFIA1BQgAgogGIAiAAQASABAKgKQAKgJAAgOQAAgOgJgJQgJgKgOABIgoAAg");
	this.shape_12.setTransform(32.1,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGBHQgcgcgBgqQABgpAdgdQAdgdAoAAQApAAAdAdQAeAegBAnQABApgeAdQgdAdgpAAQgqAAgcgcgAgygzQgWAVAAAfQABAfAUAVQAVAVAeAAQAfAAAVgVQAUgVAAgfQAAgfgUgVQgWgWgeAAQgdAAgVAWg");
	this.shape_13.setTransform(11.9,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhABgIAAi/IAaAAIAACmIBnAAIAAAZg");
	this.shape_14.setTransform(-6,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BgIAAi/IA/AAQAeAAAQARQAQASAAAYQAAAZgQAQQgRARgeAAIgkAAIAABKgAgkgBIAkAAQARAAAKgKQAKgKAAgPQAAgPgJgKQgJgJgQAAIgnAAg");
	this.shape_15.setTransform(-22,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAxBgIgxhMIgvBMIgfAAIBAhgIg9hfIAeAAIAtBKIAwhKIAeAAIg/BfIBABgg");
	this.shape_16.setTransform(-38.9,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IB3AAIAAAZIhdAAIAAA5IBWAAIAAAXIhWAAIAAA9IBdAAIAAAZg");
	this.shape_17.setTransform(-54.4,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-64.8,0,346.4,30), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4DB1E4").s().p("AhMAmIAqhLIABAAIBuAvIiZAcg");
	this.shape.setTransform(32.6,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4DB1E4").s().p("AhHguICPAgIgRA9g");
	this.shape_1.setTransform(32.4,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4DB1E4").s().p("AgWAMIAAAAIgfgMIAZgtIBRBag");
	this.shape_2.setTransform(34.9,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4DB1E4").s().p("AgcgaIAygJIAHBIg");
	this.shape_3.setTransform(45.8,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4DB1E4").s().p("AAUgeIAGAzIgyAKg");
	this.shape_4.setTransform(45.3,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4DB1E4").s().p("AhBguICDAdIgwA/g");
	this.shape_5.setTransform(40,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4DB1E4").s().p("AhEgBICJgYIgNA0g");
	this.shape_6.setTransform(34.2,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4DB1E4").s().p("AgmASIAOg0IA/BFg");
	this.shape_7.setTransform(44.5,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4DB1E4").s().p("AgegbIBLAQIhZAng");
	this.shape_8.setTransform(43.5,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D6D8A").s().p("AgpAyIAAhkIAmAAQAUAAAMAOQANAOAAAWQAAAYgNANQgMANgWAAgAgcAmIAYAAQAOgBAJgKQAIgLAAgQQAAgQgIgJQgJgMgOAAIgYAAg");
	this.shape_9.setTransform(62.3,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D6D8A").s().p("AghAyIAAhkIAOAAIAABXIA1AAIAAANg");
	this.shape_10.setTransform(53.2,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D6D8A").s().p("AgeAyIAAhkIA+AAIAAANIgxAAIAAAfIAsAAIAAALIgsAAIAAAhIAxAAIAAAMg");
	this.shape_11.setTransform(44.7,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D6D8A").s().p("AgGAyIAAhkIANAAIAABkg");
	this.shape_12.setTransform(38.4,46.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D6D8A").s().p("AgeAyIAAhkIA9AAIAAAOIgvAAIAAAeIAoAAIAAAMIgoAAIAAAsg");
	this.shape_13.setTransform(33,46.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D6D8A").s().p("AgeAyIAAhkIA9AAIAAANIgwAAIAAAfIAtAAIAAALIgtAAIAAAhIAwAAIAAAMg");
	this.shape_14.setTransform(24.7,46.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2D6D8A").s().p("AggAmQgPgPAAgWQAAgWAQgQQAPgOAUAAQAOAAAMAGQALAGAHAKIgKAIQgOgRgUAAQgPAAgLALQgLALAAARQAAAQALALQALALAPAAQAVgBANgRIAKAJQgQAWgcAAQgVAAgPgOg");
	this.shape_15.setTransform(15.2,46.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D6D8A").s().p("AgGAyIAAhkIANAAIAABkg");
	this.shape_16.setTransform(7.8,46.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D6D8A").s().p("AAdAyIgKgaIglAAIgKAaIgPAAIAohjIAHAAIAoBjgAgOALIAcAAIgOglg");
	this.shape_17.setTransform(69.2,33.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D6D8A").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_18.setTransform(62.6,33.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D6D8A").s().p("AgjAyIAAhjIAmAAQANAAAIAIQAHAHAAAKQAAAQgNAEQAIADAFAGQAGAHAAAKQgBALgHAIQgJAJgPAAgAgWAmIAZAAQAJAAAGgGQAEgEAAgHQAAgIgEgFQgGgFgJAAIgZAAgAgWgJIAXAAQAQAAAAgOQAAgGgEgDQgFgFgGAAIgYAAg");
	this.shape_19.setTransform(56.5,33.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2D6D8A").s().p("AAkAyIAAhDIgiAyIgDAAIgigyIAABDIgOAAIAAhjIAHAAIAqA/IArg/IAHAAIAABjg");
	this.shape_20.setTransform(45.3,33.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D6D8A").s().p("AgaAqQgKgKABgRIAAhBIANAAIAAA/QAAAZAWAAQAWAAABgZIAAg/IANAAIAABBQABARgLAKQgKAJgQAAQgQAAgKgJg");
	this.shape_21.setTransform(34.3,33.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D6D8A").s().p("AghAyIAAhjIAOAAIAABWIA1AAIAAANg");
	this.shape_22.setTransform(26.1,33.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D6D8A").s().p("AgkAlQgPgPAAgVQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgQAPgVAAQgVAAgPgPgAgagaQgLAKAAAQQAAAQALAMQALALAPgBQAQABALgLQALgMAAgQQAAgQgLgLQgLgLgQAAQgPAAgLAMg");
	this.shape_23.setTransform(15.6,33.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2D6D8A").s().p("AggAmQgPgPAAgXQAAgWAQgOQAOgPAVAAQAOAAAMAGQALAGAHAKIgLAJQgMgSgVAAQgPAAgLALQgLAMAAAQQAAAQALALQALALAPAAQAVAAANgRIAKAIQgQAWgcAAQgVAAgPgOg");
	this.shape_24.setTransform(4.8,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,73.6,52.1), null);


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(37.3,26.1,0.583,0.583,0,0,0,36.9,30.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8EFF0").s().p("AnGEhIAApBIONAAIgMAdIjbIHIgNAdg");
	this.shape.setTransform(45.6,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(261));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(199.2,38.6,1,1,0,0,0,34.2,5.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(190).to({_off:false},0).to({alpha:1},23).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_10
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(246.9,35.6,0.075,0.631,0,0,0,0.7,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({_off:false},0).to({regX:0.3,scaleX:0.49,x:269.4},11,cjs.Ease.get(0.7)).wait(73));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.travelAB();
	this.instance.parent = this;
	this.instance.setTransform(356.7,32.6,0.191,0.191,0,0,0,174.5,91.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(359.1,26.1,0.556,0.556,0,0,0,62,16.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({alpha:1},18).wait(32).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-1)).wait(49));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(44.6,-1.4,0.667,0.667);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:60.6,y:5.6,alpha:1},32,cjs.Ease.quartOut).wait(85));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(202.2,25.1,0.667,0.667,0,0,0,363.9,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,y:25,alpha:1},32,cjs.Ease.quartOut).wait(89));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(180,25.1,0.667,0.667,0,0,0,364,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({regX:363.9,scaleX:0.56,scaleY:0.56,x:202.2,y:25,alpha:1},36,cjs.Ease.quartOut).wait(161));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol1copy();
	this.instance.parent = this;
	this.instance.setTransform(230.6,28.1,0.556,0.556,0,0,0,173.2,15.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({alpha:1},30,cjs.Ease.quintInOut).wait(46).to({scaleX:0.44,scaleY:0.44,alpha:0},32,cjs.Ease.quartOut).wait(89));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(230.6,28.1,0.667,0.667,0,0,0,173.2,15.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,alpha:1},46,cjs.Ease.quartOut).wait(11).to({alpha:0},25).to({_off:true},51).wait(121));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(122.3,25,1.17,1.17,0,0,0,202.2,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:122.2},96).wait(165));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(220.9,28.4,0.556,0.556,0,0,0,154.7,15.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({alpha:1},32,cjs.Ease.quartInOut).wait(80));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._320x50_ci = function(mode,startPosition,loop) {
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
	this.frame_260 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(260).call(this.frame_260).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(261));

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

	this.timeline.addTween(cjs.Tween.get(this.Layer_10).wait(261));

	// Layer_11_obj_
	this.Layer_11 = new lib.Scene_1_Layer_11();
	this.Layer_11.name = "Layer_11";
	this.Layer_11.parent = this;
	this.Layer_11.depth = 0;
	this.Layer_11.isAttachedToCamera = 0
	this.Layer_11.isAttachedToMask = 0
	this.Layer_11.layerDepth = 0
	this.Layer_11.layerIndex = 2
	this.Layer_11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_11).wait(261));

	// Layer_9_obj_
	this.Layer_9 = new lib.Scene_1_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 3
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(261));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(45.6,25,1,1,0,0,0,45.6,25);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 4
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(261));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 5
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(261));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 6
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(261));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 7
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(261));

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 8
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(261));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 9
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(261));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(122.3,25,1,1,0,0,0,122.3,25);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 10
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(261));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.7,20.8,473.2,58.5);
// library properties:
lib.properties = {
	id: '7B403E80A7D44A2B8EE866C143177BDC',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x50_ci_atlas_P_.png", id:"320x50_ci_atlas_P_"},
		{src:"images/320x50_ci_atlas_NP_.jpg", id:"320x50_ci_atlas_NP_"}
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