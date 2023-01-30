(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_4talk_ski_atlas_P_", frames: [[302,0,39,42],[0,0,300,122]]},
		{name:"300x600_4talk_ski_atlas_NP_", frames: [[0,0,300,600],[0,602,300,600],[0,1204,300,600],[302,0,300,600]]}
];


// symbols:



(lib.arrow = function() {
	this.spriteSheet = ss["300x600_4talk_ski_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dbl_aurora = function() {
	this.spriteSheet = ss["300x600_4talk_ski_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dbl_badge = function() {
	this.spriteSheet = ss["300x600_4talk_ski_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dbl_bike = function() {
	this.spriteSheet = ss["300x600_4talk_ski_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dbl_hotel = function() {
	this.spriteSheet = ss["300x600_4talk_ski_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dbl_ski = function() {
	this.spriteSheet = ss["300x600_4talk_ski_atlas_NP_"];
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


(lib.the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwA4QgMgIgBgSQgBgPADgPQADgQAHgNQAGgNAMgJQALgJAPgBQAHABAFAGQAFAGgCAIIgDAPQgDAGgGAHIgJAJIgLAJIgJALQgEAGAAAEQAAAKAEADQAEACAHgBQAHgBAGgDIAKgGIAKgJIAMgLIALgLIAJgJIAFgGIAGgFIAFgBQACABgDAFIgGAMIgJALIgNARIgQAQIgRANQgIAGgKACIgIAAQgMAAgJgGgAgTghQgGAGgCAMIAPgNQAGgHACgJQgKAEgFAHg");
	this.shape.setTransform(36.3,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLCnIgLgHQgEgFgDgGQgCgGAAgHIABgHIABgIIAHgWIAGgWQAGgRAJgRIAAgBIgCgBIgbAXQgNAMgKANIgLARIgIASQgDAEgFgCQgJgGgEgLQgEgKAAgMQAAgMABgMIAEgVIAMgtIAOgvIAQgtIARgoIAKgRIALgNQADgCAEgBIAGABIAFAEIADAGQADAQgFAWQgFAVgHAWQgJAWgLAUQgLATgKALIgBADIgJAfIgJAfIgBAIIAAAJIAJgLIAYgXQAMgLAOgIIALgGQAGgBAGABIAKADQAFADABAFIgBAJIgIAfIgKAhIgHAaQgDALAAADQADADAFgEIANgLIAQgTIARgXIARgVIAOgQQAFgGADABQAEABgCAHIgJAQIgPAXIgTAZIgUAZIgTARQgJAIgHAAIgCAAQgFAAgEgCgAgIh0IgOAkIgNAkIgKAbIAJgMIAMgVIAMgbIAKgbIAEgXQACgLgDgFg");
	this.shape_1.setTransform(22.7,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBCYQgGgFgBgKQgBgLAAgMIAEgXIAEgSIAKgoIAIgmIAJgjIAIghIgQAAIgPABIgQgBIgPgBQgGgCgDgDQgDgDgBgEQABgDADgDQADgCAHgBIAOAAIAUAAIAUAAIALgCIABgBIAEgPIAFgPIAEgOIAEgLQABgEAFABIAJACIAKAGQADAEAAAEQgBAKgDAJIgGAWIApgCIAhgDIALAAIAJABQABAAAAAAQAAAAAAAAQABABgBAAQAAAAAAABIgKAEQgXAIgXAGIgrAIIgCABIgBACIAAABIAAABIgLAmIgMArIgLArIgJAnIgFAeQgCALACADQADAHAGgDQAHgDAJgJIATgXIARgZIAPgXIAJgNIADgGIAHgGIADgDIADgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgDAIIgGAOIgLAWIgPAZIgRAXIgTAUQgKAJgKACIgSAEIgCAAQgGAAgGgGg");
	this.shape_2.setTransform(9.7,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.the, new cjs.Rectangle(0,0,44.7,61), null);


(lib.talkeetna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgICCQgLgHgHgKIgMgXIgPAPIgRAPIgUAKQgMAFgNgBIgSgEIgRgLQgIgGgDgNIgEgVIAFgtIALgvQANgnAXggQAXggAlgNQANgFAOAAQAOAAAMAGQAJAGAIAJQAGALgBANIgDAKIgDAIIgFAEIgFgDIgDgHIgEgIIgHgHIgMgCQgQACgRAVQgQAVgNAcIgYA1IgLAoQgCAVAGAAQAGABAKgMIAYgfIAXgmIATghIAJgPQAKgJALgBQAIAAAJAGQAJAFADAKQAEAJgDALIgKAgQgHASgBAOQABAUAIAGQAIAGARgLQAPgIAOgSIAdgnIAZgmIAVgcIAFgGIAGgCIAFAEIABAGIgSA0QgKAagPAYQgQAXgTAUQgUATgYANQgPAHgMAAIgDAAQgMAAgKgFg");
	this.shape.setTransform(226.3,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUCXIgTgMIgNgSIgHgWQgFgoALgoIAZhKQAGgRgFgGQgEgGgSALQgPAKgLAUIgUArIgPAuIgNAlIgDAIQgMALgGgNIgEgMIgCgMIgFgjIADgrIALgxIAPgtIAPgkQAEgIAJgCQAIgCAIAEQAJADAGAJQAGAHgBAMIgDAFIgDAKIgEAKIgCAFIAPgQIAQgSIARgPQAJgGALgCQAMgBAMAFQALAHAIAJQAIAKADAMQAEAMgCAMQgEAWgKAWIgUArIgSArQgIAWgCAVQgDASAFADQAFADAGgCIANgKIAKgKQAdgdAYgjIAxhBQAVgbAFgDQAGgDgDALIgLAcIgOAfIgVAqIgfAxQgRAYgTARQgUASgSACIgHABQgJAAgIgEg");
	this.shape_1.setTransform(199.1,71.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhfFGQgNgKgFgWQgEgWAAgZIADgxIAGgmIANhVIAMhSIALhNIAMhGIghADIghAEIghADIgggCQgNgCgHgGQgHgHgBgGQAAgHAHgHQAHgGAOgCIAdgCIAqgEIAogFIAYgFIACgDIAGggIAHggIAHgeIAGgYQACgIAKAAIAVAEIAUALQAJAIAAAHQABAVgGAVIgJAvIBWgNIBGgKIAWgCIARgBQAHABgDADIgUALQgvAWguAPIhaAZQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgBAEIgBADIAAABIgRBSIgRBdIgRBeIgMBUIgGA+QgBAYAFAGQAHAOAOgIQANgHARgVIAigyIAig5IAcgyIAPgeIAIgNIALgNIAHgGIAHgEQADAAABAFIgEAQIgLAfIgUAvIgaA2IghA2IgmAtQgSATgWAIIgkAKIgHAAQgMAAgMgJg");
	this.shape_2.setTransform(173.4,62.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcB8QgZgOgGgoQgFgeADghQAEghAMgdQAMgeAWgUQAWgVAggGQARACAKAMQALALgCATIgEAfQgFANgLAPIgSATIgWAYIgRAaQgHAMABAIQAAAVAJAFQAKAFAOgEQAOgDANgHIAVgPIAUgVIAXgaIAVgZIARgVIAKgNIALgMIAKgCQAEAAgEAMIgLAcIgRAZIgaAmIgeAkIghAeQgRAOgVAGQgMACgLAAQgWAAgRgJgAgvhGQgKAPgDAYIAcgdQAMgPAEgUQgUALgLAOg");
	this.shape_3.setTransform(153.2,74.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcB8QgZgOgGgoQgFgeADghQAEghAMgdQAMgeAWgUQAWgVAggGQARACAKAMQALALgCATIgEAfQgFANgLAPIgSATIgWAYIgRAaQgHAMABAIQAAAVAJAFQAKAFAOgEQAOgDANgHIAVgPIAUgVIAXgaIAVgZIARgVIAKgNIALgMIAKgCQAEAAgEAMIgLAcIgRAZIgaAmIgeAkIghAeQgRAOgVAGQgMACgLAAQgWAAgRgJgAgvhGQgKAPgDAYIAcgdQAMgPAEgUQgUALgLAOg");
	this.shape_4.setTransform(132.1,77.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAEFeQgOgBgKgOQgJgOgGgTIgIgrIgEguIgDgqIgEgdQgOAKgKAYIgRAzIgKAzIgDAiIAAAIIAAAHQgBAJgFADIgHABIgIgHIgIgJIgKgdIgHgkIgEgiIgBgaIAEhLIAMheIAThnQALg1AQgyQAPgyATgsQASgsAWgeQAGgJALABQAKAAAKAHQAKAGAGALQAGAKgEAKIgLAzIgRBRIgeBsQgUA9ghBFIgIAfIgCAfIAMgVIAWgfIAcgjIAdggIAdgYQANgKAJAAIANACIAJAHIADAHQgBAEgFACQgIADgQAOIggAiIgcAlIgPAZQAOADAHASQAGAQAFAZIAHAyIAGAwQAEAWAGAOQAGAOALgDQAFAAAIgLIAUgdIAUgmIAVgpIASglIALgcQAEgLAEABQAFABgBAHIgFAeIgKAbIgLAeIgSAnIgXAoQgMAVgPAOQgOAPgQAHQgIAEgIAAQgIAAgIgEgAgJjiIgYBQIgYBXIgTBaIATgvIAUg9IAThCIARg/IAKg1IAGgjg");
	this.shape_5.setTransform(107.7,67.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhSFgQgUgJgGgVQgLgwAAgyQgBg5AHhAQAIg/AOg+QAPg/ATg9QATg9AXg1IAUgsIAYgoQAFgIAIgFQAHgEAKADQASAFABAWQAAAwgHAuQgIAugOAsQgPAsgTApQgTAqgXAlIgDAFIgCAIIgNBIIgKBNIgDBFQABAfAFAQQAFAIAHgBIAMgFIAmgzIAjg1IAggzIAeguQAGgIAEADQAEAEgBAHIgSAmIgSAmIgoBSQgVArgaAgQgRAUgVAFIgGAAQgRAAgSgIgAAVimIgkCAIAOgbIAQgqIASgyIAPg0IAMgvIAGgkQgaA+gTBAg");
	this.shape_6.setTransform(82.9,70);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHCCQgLgHgJgKIgLgXIgOAPIgSAPIgVAKQgKAFgNgBIgTgEIgQgLQgJgGgEgNIgDgVIAFgtIAMgvQAMgnAYggQAWggAmgNQALgFAOAAQAPAAALAGQALAGAGAJQAIALgCANIgCAKIgEAIIgEAEIgGgDIgCgHIgFgIIgIgHIgMgCQgPACgQAVQgRAVgOAcIgXA1IgLAoQgCAVAGAAQAGABAKgMIAXgfIAZgmIATghIAIgPQAJgJALgBQAJAAAJAGQAIAFAFAKQADAJgCALIgLAgQgHASAAAOQAAAUAIAGQAIAGASgLQAPgIAOgSIAcgnIAagmIAUgcIAFgGIAGgCIAFAEIABAGIgSA0QgLAagPAYQgPAXgTAUQgUATgYANQgPAHgNAAIgCAAQgMAAgJgFg");
	this.shape_7.setTransform(57.6,86.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah+FDQgMgDgGgSIgKgoIgFgqIgBgdQABgvAHg1QAGg2AMg1QAMg2ARgzQARgzAXgrIAEgGIgcACIguALIgyAOIgkANIAPALIAVAPIAOAOQADAGgOACIgkAAIgigIIgTgGIgUgJIgRgLQgHgGgBgJQgDgWAUgOQArgcBCgWQBCgVBLgMQBKgNBOgGQBOgFBCAEIANACIAUAGIATAHIAPAIQAEAFgBAEQgBAFgLADIgWAEIgWADIiNATIiIAXIADAJIAHAJIAGALQABAFgCAHQgiBbgYBpQgXBqgVCHIgCARIgDAOIgDARIgDAVQgCAJgGAAIgEgBg");
	this.shape_8.setTransform(40,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.talkeetna, new cjs.Rectangle(0,0,250.8,150.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnDOQgegHgVgOIAjhGQAfAVAvAAQAzgBAfgeQAfgfACg7QglAmhBAAQgnAAghgQQgggQgTgcQgSgeAAgmQAAgpAUggQAVgfAjgRQAkgRAsABQBVgBAxA1QAyA1gBBjQAABFgaAyQgbAzgvAaQgwAZg9AAQgiABgegIgAg6h8QgSAQAAAdQAAAcASAQQAUARAgAAQAeAAATgRQAVgSAAgaQgBgcgTgRQgTgRggAAQgfAAgUARg");
	this.shape.setTransform(98.6,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSDSIAAg+ICfiVQAagYAIgSQAJgSAAgRQAAgYgRgNQgRgOgfAAQgbAAgWALQgWAKgOAUIhHgtQAZgkAqgUQArgUA2AAQAuAAAiAPQAiAPATAcQAUAbAAAlQAAAigOAdQgOAdgpAmIheBZICxAAIAABOg");
	this.shape_1.setTransform(62.1,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGDPIAAlQIhSAAIAAhMICxAAIAAGcg");
	this.shape_2.setTransform(31.7,38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKB6IAAgcQgTgBgRgGQgSgFgLgJIAPgfQAKAGANAFQANAGAOABIAAgsQgSgEgNgGQgNgFgIgKQgJgKAAgSQAAgVAQgQQAQgPAdgDIAAgdIAZAAIAAAcQAgADAVANIgNAgQgTgLgVgCIAAAsQASAEANAFQANAFAIAKQAJALAAAQQAAAWgQAPQgPAQgeADIAAAdgAAPA7QAKgDAEgEQAFgFAAgGQAAgHgFgEQgFgEgJgDgAgYgyQgFAFAAAHQAAAGAFAEQAFAEAJADIAAglQgKACgEAGg");
	this.shape_3.setTransform(10.3,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,120.1,75.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(255,255,255,0.486)","rgba(0,0,0,0)","rgba(255,255,255,0)"],[0,0.502,1,1],15,-18.1,15,33.6).s().p("A0WA1IAAhsIUsiKIIKAAIL2BPIkMAMIBUBGICWAQIklAMIB0A1IwYCRg");
	this.shape.setTransform(130.3,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,260.5,38.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.arrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,39,42), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgYhAvqMAAAhfTMAxDAAAMAAABfTg");
	this.shape.setTransform(157,305);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,314,610), null);


(lib.ski = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_ski();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ski, new cjs.Rectangle(0,0,300,600), null);


(lib.moneynumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.moneynumbers, null, null);


(lib.is = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZDbQgLgCgIgIQgUgSgEgYQgEgXADgXIAKgcQAPggATgWIApgsIgjgqQgSgWgCgcQgDgfAQgdQAPgdAVgTIATgMQAKgFALAEIALADIAIACIAJAEQAGACAAAGIAEAkIAGAYIAGARIAGAQIABAOQgCAFgKgDQgSgFgLgSIgOgiIgFgLIgFgLQgGgBgIAHIgOARQgGALgBAOQAAAOAIANIAKALIANAMIANANIALAKQACADAEACIAIgDIAXgMIAhgQIAhgOIAagGQAFgBACAEQADACgDAEIgHAJIgLAIIgGAFIghAVIgiAXIgGADIgGAEIAQAjQAGAPAAAOIgEAeIgKAjIgTAlIgWAhQgNAPgRAJQgPAJgVACgAgoA3IgZAmIgSAoQgGATAFANQAPgIAPgSQAQgSALgUQALgVADgTQAEgUgJgNg");
	this.shape.setTransform(34.4,68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+C7QgPgIgIgMQgJgLgBgPQgGgsAGguQAGgvAKglIAJgZQAHgHAJACQAKACAJAKQAIAJAFAOQAFAOgEAOIgEAbIgGAaIgDATIgFAZIgFAaIgDATQAAAMAHgGIAUgVIA4hGIA0hEIAJgLIABAAIAAACQADASgEAJIgEAKIgTAhIgZApIgZAmIgTAZIgSAXIgKAGIgOAFIgOACgAgnhhQgMgPgEgRQgFgRAFgSQACgLAKgHQALgIAIACIALAEIAIAIQAGAVgIAUQgKAVgOARQgCADgCAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1.setTransform(16.4,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.is, new cjs.Rectangle(0,0,53.6,122.9), null);


(lib.hotel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_hotel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hotel, new cjs.Rectangle(0,0,300,600), null);


(lib.from = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLATIAAgiIgJAAIAAgFIAKgGIAEgNIAIAAIAAAOIASAAIAAAKIgSAAIAAAiQAAAFACADQADACAEAAIAKgBIAAAKIgGABIgIABQgSAAAAgVg");
	this.shape.setTransform(157.3,63.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOAuIAAgpQAAgGgCgEQgDgDgHAAQgHAAgFAFQgEAEAAAMIAAAhIgOAAIAAhaIAOAAIAAAWIAAANIABAAQACgGAFgCQAFgDAGAAQAXAAABAXIAAArg");
	this.shape_1.setTransform(151.2,62.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAqQgIgEAAgIQABgGADgEQAEgFAHgCQgDAAgCgDIgBgGQAAgEABgBIAHgFQgGgCgCgFQgEgFAAgGQAAgLAHgGQAGgFANgBIAEABIAFABIAWAAIAAAHIgKADIACAEIABAHQAAAKgHAGQgHAFgLAAIgFgBQgFADAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHABIALAAQALAAAFAFQAGAFAAAIQAAAMgJAFQgJAHgQgBQgOABgGgGgAgPAVQgEADAAAFQAAAEAFADQADACAIAAQAKAAAGgDQAFgDAAgGQAAgEgDgCQgDgCgIABIgJAAQgHgBgDADgAgKgiQgDADAAAHQAAAGADADQAEAEAFgBQAMAAAAgMQAAgHgEgDQgCgEgGAAQgFAAgEAEg");
	this.shape_2.setTransform(144,65.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAtIAAhAIANAAIAABAgAgFgfQgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(139.1,62.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAhIAAgnQAAgHgCgEQgDgDgHgBQgIAAgEAGQgEAEAAAMIAAAgIgOAAIAAhAIALAAIACAIIABAAQADgEAFgDQAGgCAFAAQAXAAABAYIAAApg");
	this.shape_4.setTransform(133.7,64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWArIAghVIAMAAIgeBVg");
	this.shape_5.setTransform(124.4,63);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiAhIAAgnQAAgHgDgEQgDgEgGAAQgIABgEAEQgDAFAAALIAAAhIgNAAIAAgnQAAgHgDgEQgDgEgGAAQgIABgDAEQgEAFAAAMIAAAgIgOAAIAAhAIALAAIACAIIABAAQACgEAFgDQAFgCAHAAQAOAAAEAKIABAAQADgFAFgDQAGgCAGAAQAMAAAFAGQAGAGAAAMIAAApg");
	this.shape_6.setTransform(26.6,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgHgFgEgHQgEgIAAgKQAAgPAIgIQAIgJAOAAQAOAAAIAJQAJAIAAAPQAAAQgJAJQgIAIgOAAQgIAAgHgDgAgMgPQgEAFAAAKQAAAXAQAAQAQAAAAgXQAAgVgQAAQgIAAgEAGg");
	this.shape_7.setTransform(17.2,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIALAAIACAMIAAAAQAEgGAEgDQAFgEAGAAIAHAAIgCAOIgGgBQgIgBgEAGQgFAGAAAIIAAAhg");
	this.shape_8.setTransform(11.4,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAAMIghAAIAAAbIAfAAIAAALIgfAAIAAAjg");
	this.shape_9.setTransform(5.6,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.from, new cjs.Rectangle(0,0,161.9,72.8), null);


(lib.calling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAOQgCgSALgRQALgPASgDQAOgDAMAKQAMAJABAOQABATgHAOQgHAOgRACIgJABQgiAAgEgbg");
	this.shape.setTransform(235.9,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AimGLQgYgPgLgXQgKgXgDgdQgDgbADgcIAKgwQAPg9AYg3QAYg3AegxQAdgyAjgwIBIhbIAEgSIABgbIgDgUQgEgGgGAIIgkAnIgqAjIgtAbQgXALgZABQgYAAgPgKQgPgLgHgPQgJgPgDgUIgBgmQADgmARggQARggAjgRQA2gbA3AOIAVAHQAJADAFAJQAMAUgZABIgWABIgWADQgfAEgSATQgTATgJAXQgJAWAAAWQgBAVAGALQAGAFAPgLIAggfIAjglIAfgfIASgNIAZgNIAagGQAMAAAEAMIAJAjIAIAlIACAKIAkgiIAlghIAoggIAogbIACABIABABIgDACIgCAEIgdAqIgdAnIghAqIgiApQgOATgEARIgFAmIgTCPQgJBMgTBKQgSBKggA/QghBAg1AqIgeAEQgPgBgOgIgAg1gaIgvBNIglBTQgQArgIAuIgEA4QABAcALAZQASgMAQgcIAcg9IAWg+IAQgxIANgwIAThDIAPhCQAGgfgCgLg");
	this.shape_1.setTransform(207.4,113.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTC8IgYgPIgSgWIgJgbQgIgxAMgzIAdhdQAIgXgGgGQgHgHgVAOQgTAMgNAaIgWA3IgSA6IgPAtIgEAMQgOANgJgQIgFgOIgEgPIgHgrIADg3IAMg9IARg6IATgtQAEgKAKgDQALgCALAEQAKAEAIAKQAIAKgBAOIgDAHIgEAMIgEAMIgDAHIATgVIATgXIAVgTQAKgIAOgCQAQgDAOAHQAPAIAKALQALANAEAOQAEAPgBAPQgFAcgLAcIgYA2IgVA2QgKAcgCAbQgCAWAGAEQAGAEAHgEIARgNIAMgMQAjgmAegsIA6hTQAZgiAHgEQAHgDgEANIgMAjIgQApIgZA0IglA+QgVAegYAXQgYAWgWAEIgLABQgKAAgJgEg");
	this.shape_2.setTransform(169.6,94.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhADrQgTgJgMgNQgMgOgDgSQgLg2ADg6QADg7AKgwIAJgfQAHgKANACQAMACALALQAMALAHAQQAIASgEASIgDAhIgEAiIgDAXIgEAhIgEAgIgBAYQAAAPAJgIIAXgcIA/hdIA7hZIAJgPIABAAIABACQAGAXgEAMIgEANIgVApIgbA2IgcAyIgWAhIgUAeIgNAJIgQAHIgRAEgAg9h4QgRgSgHgVQgHgVAEgXQACgNAMgLQAMgKALABIAOAEIALAJQALAagKAbQgLAagPAWQgEAEgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_3.setTransform(141.5,89.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhgG7QgZgLgJgaQgPg7gCg+QgChJAHhPQAIhPAPhPQAQhQAWhMQAWhMAbhEIAZg4IAbgyQAGgLAJgFQAKgGAMADQAXAHACAbQACA7gIA6QgJA6gQA4QgQA3gXA0QgWA1gcAuIgDAIIgCAJIgPBcIgKBgIgBBVQACAoAHAUQAHAJAIgBIAQgHIAuhAIAphEIAmhBIAlg7QAHgJAFAEQAFAEgCAJIgUAwIgWAwIgvBnQgZA3ggAoQgUAagbAHIgKABQgVAAgUgJgAAQjQIgqChIASgiIATg1IAUg/IARhCIAOg8IAHgrQgfBNgWBRg");
	this.shape_4.setTransform(118,80.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhgG7QgZgLgJgaQgPg7gCg+QgChJAHhPQAIhPAPhPQAQhQAWhMQAWhMAbhEIAZg4IAbgyQAGgLAJgFQAKgGAMADQAXAHACAbQACA7gIA6QgJA6gQA4QgQA3gXA0QgWA1gcAuIgDAIIgCAJIgPBcIgKBgIgBBVQACAoAHAUQAHAJAIgBIAQgHIAuhAIAphEIAmhBIAlg7QAHgJAFAEQAFAEgCAJIgUAwIgWAwIgvBnQgZA3ggAoQgUAagbAHIgKABQgVAAgUgJgAAQjQIgqChIASgiIATg1IAUg/IARhCIAOg8IAHgrQgfBNgWBRg");
	this.shape_5.setTransform(92.2,84.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AijClIgVgMQgLgIgEgQIgFgbIAFg4IAMg7QAOgxAdgpQAbgpAugRQAPgHARAAQASgBAPAHQANAHAJAMQAJANgBAQIgCAMIgFALIgGAFIgGgEIgEgIIgGgKIgKgJIgPgCQgSADgVAcQgTAbgRAiIgbBEIgNAxQgBAbAHABQAIAAAMgPIAcgnIAcgxIAXgpIALgUQALgMANgBQAMgBALAHQALAHAGAMQAFALgEAOIgMAoQgIAXAAASQABAaAKAGQAKAHAWgNQASgLARgYIAigxIAfgxIAZgkIAGgHIAHgCIAHAEIABAHIgUBDQgNAhgSAeQgRAdgZAZQgXAYgeASQgTAKgQAAQgQAAgOgGQgNgIgLgMIgQgcIgRASIgVATIgaAPQgNAFgQAAg");
	this.shape_6.setTransform(60.8,106.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWCPQgfgDgTgZQgVgcgEgoQgDgpALgnQALgnAYgfQAZgfAigHQAKgEANAGQANAHAFAKIAEAUIgBAZIgDAeIgCAiIgEAHIgIgDQgNgPgFgPIgLgdQgFABgIAOIgNAfIgJAlIgBAjQAEAUAHAJQAIAJAJAAIAUgEIAXgNIBbhFQArgjAngrQAKgHAEAGQADAFgDAIIgLAYIgRAWIggAoIgWAZIgQAPIgLAMIgpAhIgmAaQgVALgYAAIgOgBg");
	this.shape_7.setTransform(28.5,113.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.calling, new cjs.Rectangle(0,0,257.3,184.5), null);


(lib.call = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAMQgCgMAGgMQAHgMANgDQAJgDAJAGQAIAFADAKQACANgEALQgEAKgMADIgKABQgUAAgFgRg");
	this.shape.setTransform(103.4,63.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvE7QgSgGgIgRQgOgogGgsQgHgyAAg4QgBg3AFg4QAGg5AKg2QAKg3AOgxIAOgpIAPglQAEgHAGgFQAGgEAJABQAPADADATQAGApgBApQgCApgIAnQgHAogLAmQgNAmgQAiIgBAGIgBAGIgEBBIAABEIAFA8QAEAbAHANQAEAGAHgBIAKgGIAbgwIAYgyIAWgwIAVgrQAFgHAEACQADADAAAGIgLAjIgMAiIgaBMQgNAngUAfQgMATgSAHQgHACgHAAQgLAAgLgEgAgOiSIgSBzIAKgZIAKgmIAKgtIAGgvIAGgrIABgfQgQA5gJA5g");
	this.shape_1.setTransform(86.9,47.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvE7QgSgGgIgRQgOgogGgsQgHgyAAg4QgBg3AFg4QAGg5AKg2QAKg3AOgxIAOgpIAPglQAEgHAGgFQAGgEAJABQAPADADATQAGApgBApQgCApgIAnQgHAogLAmQgNAmgQAiIgBAGIgBAGIgEBBIAABEIAFA8QAEAbAHANQAEAGAHgBIAKgGIAbgwIAYgyIAWgwIAVgrQAFgHAEACQADADAAAGIgLAjIgMAiIgaBMQgNAngUAfQgMATgSAHQgHACgHAAQgLAAgLgEgAgOiSIgSBzIAKgZIAKgmIAKgtIAGgvIAGgrIABgfQgQA5gJA5g");
	this.shape_2.setTransform(69.3,52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmB4IgQgHQgIgFgEgKIgGgTIAAgnIAEgqQAHgjARgfQAPgeAggQQAKgFAMgCQAMgBAKAEQALADAGAIQAIAIgBALIAAAJIgDAIIgDAFIgEgDIgDgFIgGgHIgHgGIgLAAQgMAEgNAUQgLAUgKAaIgOAwIgFAkQABATAFAAQAFgBAIgLIARgeIAQgkIANgeIAGgOQAHgJAJgCQAIgCAIAFQAIAEAFAHQAEAIgBAKIgGAcQgEARABAMQADASAHAEQAIAEAPgLQALgIAKgSIAVgkIASgkIAOgbIAEgGIAFgCIAEACIACAFIgJAwQgHAYgKAWQgLAWgPASQgPATgTAPQgMAIgLABQgMABgKgEQgJgDgIgIIgNgTIgLAPIgNAOIgRAMQgJAFgMABg");
	this.shape_3.setTransform(48,70.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBlQgVAAgPgQQgRgSgFgcQgGgbAFgcQAFgdAPgXQAPgXAXgHQAHgEAKAEQAJADAEAHIAEAOIABARIAAAWIACAXIgDAFIgFgBQgLgKgEgKIgKgTQgDABgFAKIgHAWIgEAbIADAYQAEAOAFAFQAGAGAHAAIANgFIAPgKIA7g2QAbgcAYghQAHgFADADQACAEgBAGIgHASIgKAQIgTAdIgOATIgKAMIgHAJIgaAbIgYAUQgSALgVAAIgCAAg");
	this.shape_4.setTransform(25.7,77.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.call, new cjs.Rectangle(0,0,123,127.3), null);


(lib.booknow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPBGQgHgBgGgDQgFgEgDgFQgCgGAAgNIAEgbIAFgZIAEgTQAAgBABgBQAAAAAAgBQABAAABAAQAAAAABAAIAJADQAFADAEAFQADAFAAAHIgDARIgEAPIgEAQIgGASQACACAFgIIALgRIAKgVIAIgPQADgEAAgEIACgIQACgDAEAAIAHACIAGAFIAEADQACAFAAAJIgDASIgCAUQAAAKADAGIADAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAgBIAKgYIAJgfIAHgfQACgQAAgKQAAgFAEgCQAEgBAEACIAIAGQAEAEAAAGQABAMAGAHQAFAIAJAEQAJADAJABQAKABAJgCIADAAIgBACIgCADQgHAFgIACQgIADgIgBIgQgEQgIgDgFgFIgIAZIgKAaQgFAMgIAJQgIAKgJADIgGAAIgHgCIgHgFIgGgFQgDgFgBgGIgCgMIAAgLIABgLIgHANIgLAUIgMASQgGAHgEAAIAAAAg");
	this.shape.setTransform(112.9,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3A8QgHgDgDgJQgDgIgBgJIAAgUIACgOIABgEIACgCIACgBIABgBIACgJIAEgJQAGgNAKgKQAKgKAOgDQAJgCAHADQAHACAGAGQAFAFACAGIADAMIAAALIgBAHIAKgDIALgDIALgEIAMgEQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgEAFIgGAGIgGAEIgTAIIgRAHIgJARIgNAVQgHAKgIAHQgJAIgIAAQgLAAgIgGgAgmAUIAAALIACAMIAEAIQAEAAAFgFIAJgMIAHgOIAFgLIgSACIgRgBgAgQgtQgHAEgFAHIgJANIABADQAEAEAAAEQAAACAEABIALgBIALgBIAGgBIACgBIABgBQADgIgBgKQAAgJgGgFQgCgDgFAAIgBAAQgEAAgDACg");
	this.shape_1.setTransform(97.3,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBNIgJgIIgFgJIgDgLQAAgUAHgUIARgjQADgIgCgDQgCgDgJAFQgIADgHAKIgLAVIgKAVIgJARIgCAEQgGAFgDgGIgBgGIgBgGIAAgSIAEgVIAIgYIAJgWIAKgRQACgEAEAAQAEAAAFABQADADADAEQADAFgBAFIgCADIgCAEIgCAFIgCACIAJgHIAIgIIAKgHQAFgCAEAAQAHgBAFAEIAJAJQAEAFAAAGQACAGgCAGQgDALgGALIgMATIgKAUQgGALgCALQgCAIACACQADACADgBIAGgEIAFgFQAQgNAOgQIAcgdQALgNADAAQABgBAAAAQABAAAAABQAAAAAAABQAAABgBABIgHAOIgIAOIgNAUIgSAXQgJALgLAHQgKAIgJAAQgGAAgGgCg");
	this.shape_2.setTransform(84.7,35.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGCuQgHgCgEgHQgEgHgCgKIgCgWIAAgXIABgVIgBgOQgHAEgHALIgLAZIgHAZIgDAQIAAAEIgBAEQgBAFgCABIgEAAIgEgEIgDgFIgEgPIgBgSIgBgRIABgNIAGglIAKgvIAPgxQAIgaAKgYQALgZALgUQAKgVANgOQAEgEAFABQAFAAAFAEQAEAEADAFQACAFgCAGIgIAYIgNAoIgTA0QgNAdgUAgIgGAQIgCAPIAHgKIAMgPIAQgPIAQgPIAPgKQAHgEAEAAIAGACIAFAEIABADQAAABAAAAQgBAAAAABQAAAAgBABQgBAAAAAAQgFAAgIAHIgRAPIgQARIgIAMQAGACADAJQACAJABAMIABAaIAAAYQABALADAHQACAHAFAAQADAAAFgFIALgOIAMgSIAMgTIALgSIAHgNQACgFACAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAABIgEAPIgGANIgHAOIgLASIgOATQgHAKgIAGQgIAHgIADIgGABQgEAAgFgDgAAPhxIgPAnIgQAqIgPArIAMgWIANgdIAMggIAMgfIAIgZIAFgSg");
	this.shape_3.setTransform(62.7,28.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3A8QgHgDgDgJQgDgIgBgJIAAgUIACgOIABgEIACgCIACgBIABgBIACgJIAEgJQAGgNAKgKQAKgKAOgDQAJgCAHADQAHACAGAGQAFAFACAGIADAMIAAALIgBAHIAKgDIALgDIALgEIAMgEQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgEAFIgGAGIgGAEIgTAIIgRAHIgJARIgNAVQgHAKgIAHQgJAIgIAAQgLAAgIgGgAgmAUIAAALIACAMIAEAIQAEAAAFgFIAJgMIAHgOIAFgLIgSACIgRgBgAgQgtQgHAEgFAHIgJANIABADQAEAEAAAEQAAACAEABIALgBIALgBIAGgBIACgBIABgBQADgIgBgKQAAgJgGgFQgCgDgFAAIgBAAQgEAAgDACg");
	this.shape_4.setTransform(49.6,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3A8QgHgDgDgJQgDgIgBgJIAAgUIACgOIABgEIACgCIACgBIABgBIACgJIAEgJQAGgNAKgKQAKgKAOgDQAJgCAHADQAHACAGAGQAFAFACAGIADAMIAAALIgBAHIAKgDIALgDIALgEIAMgEQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIgEAFIgGAGIgGAEIgTAIIgRAHIgJARIgNAVQgHAKgIAHQgJAIgIAAQgLAAgIgGgAgmAUIAAALIACAMIAEAIQAEAAAFgFIAJgMIAHgOIAFgLIgSACIgRgBgAgQgtQgHAEgFAHIgJANIABADQAEAEAAAEQAAACAEABIALgBIALgBIAGgBIACgBIABgBQADgIgBgKQAAgJgGgFQgCgDgFAAIgBAAQgEAAgDACg");
	this.shape_5.setTransform(37.8,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1CkQgKgBgJgDQgJgDgHgHQgIgGgGgLIgOgZQgHgMgBgNQgDgMADgLQADgLALgIIAQgNQAHgFALgDIADgBIADgCIACAAIgEAFIgBADIgNAUQgGAKgDALQgDALAAAMQABALAHAJQAGAIAIAEQAIADAJACIASAAIASgDQAZgGAWgOQAWgOASgTIAKgNIAJgPIAIgPIAEgPQgDgMgFgEQgFgGgKgCQgJgBgNABIgeADIgLACIgLABIgBABIgBAAIgXAxQgLAZgQAWIgDAFIgHAIIgGAEQgDABgBgGQgCgEAAgHIABgNIAEgOIADgLIADgOIAFgOIAPgiIAQgjIAJgUIAJgVQAEgFAGgBQAEAAAFADQAFADAEAGQADAGAAAHIgFAPIgGAOIAEgBIAFgBQAMAAAPgHQAPgHAMgKQAMgKAHgMQAIgMgCgLQgHgLgLgGQgMgHgPgBQgPgBgRADQgRACgQAGQgQAFgOAHQgPAHgJAIQgFABAAgEIAAgJIAEgLIAEgHQAFgLAIgGQAIgHAJgEQAQgGAWgCQAYgDAXADQAYADATAJQAUAJAHARQAFANgCAMQgBANgGALQgFALgJAKQgJAJgKAHIgCACIgCABIANAFIAMAGIAMAMQAFAIACAHQAEAMgCAOQgCANgEAKIgNAYQgIAMgJAIQgYAdgfAQQgfAQgiAGg");
	this.shape_6.setTransform(16.8,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.booknow, new cjs.Rectangle(0,0,125.3,66.1), null);


(lib.bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_bike();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bike, new cjs.Rectangle(0,0,300,600), null);


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_badge();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.badge, new cjs.Rectangle(0,0,300,122), null);


(lib.aurora = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_aurora();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.aurora, new cjs.Rectangle(0,0,300,600), null);


(lib.answer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiCIQgIgCgDgIQgEgJAEgJIAFgoIAFgvIADgwIAGgvQABgGAEgEIAMgEIAMABQAFACADAGQAEAOgDAVIgGApIAZgpIAdgrQAQgVATgOQAUgNAXgBQAMACAHAIIANASIAFAUIABARIgKAYIgIAZQgDANACALQACAMAMAIQAGAGgGADIgNAFIgSAAQgIgBgFgEQgMgPgFgQQgEgPACgSQABgQAHgRIAOghQgZAQgWAbQgTAagSAfIgiBCIghBAQgDAGgGAAIgEgBg");
	this.shape.setTransform(167.7,58.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXBvQgXgOgEgkQgEgbADgfQAFgdAMgbQAMgaAUgSQAUgTAegEQAPACAJALQAKALgCARIgFAbQgFANgKANIgRARIgUAVIgRAXQgHAMABAHQAAATAIAEQAJAFAMgDQANgCAMgHIATgNIAUgSIAVgXIAUgWIAQgTIAJgMIALgKIAJgCQAEABgEAKIgLAZIgQAXIgZAhIgcAhIggAaQgPAMgTAFQgJACgJAAQgVAAgRgKgAgphAQgKANgDAXIAagbQALgNAFgSQgTAJgKANg");
	this.shape_1.setTransform(148.6,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AihCBQgKgGgFgKQgGgKAAgYIACgxIAHgwIAFgiQgBgHAIAAIAQAEQAKAFAHAJQAIAJgBANIgEAgIgEAcIgGAdIgIAhQAEAEAIgNIARgiIAQgoIANgdQAEgHAAgHIADgPQADgHAIAAIANADIAMAHIAGAGQAGAIgBARIgBAiIgBAlQAAASAGAKIAHABQAEAAACgGIAOguIAOg5IAJg7QACgdgCgTQAAgJAGgDQAHgDAIADIAQALQAIAHABALQACAVAMAMQAKANARAGQAQAGASAAQASAAAQgEIAFgBIAAAEIgEAGQgNAKgOAFQgOAFgPAAIgcgFQgPgEgMgJIgKAuIgPAxQgIAXgMASQgOATgRAHIgLABIgNgEIgPgHIgKgJQgGgIgDgKIgFgWIAAgWIgBgTIgLAaIgRAkIgUAiQgKAPgHAAQgNAAgLgGg");
	this.shape_2.setTransform(121.9,62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPDJQgJgCgIgHQgSgQgEgWQgFgUAEgWIAIgZQANgeARgVIAlgoIghgmQgRgUgCgZQgDgdAOgaQANgbATgSIARgLQAJgEALADIAJACIAIACIAIAEQAFACAAAFIAFAhIAGAVIAFAQIAGAOIABANQgBAFgKgCQgQgFgKgQIgNgfIgFgKIgFgJQgGgBgHAFIgNARQgFAKAAAMQgBANAIAMIAJAJIANAMIAMAMIAKAJIAFAEIAHgDIAVgMIAfgPIAegNIAWgGQAFgBADAEQACACgCADIgHAJIgJAHIgHAFIgdATIgfAWIgFADIgGADIAQAgQAFAOABANIgDAbIgJAgIgRAiIgUAeQgLAOgPAJQgOAJgTACgAgjAzIgXAiIgQAlQgGASAFAMQAOgIAOgRQAOgQAJgTQAKgTACgSQAEgSgIgMg");
	this.shape_3.setTransform(93.1,71);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWCLIgRgMIgMgRIgFgUQgEgkALglIAYhCQAHgQgEgFQgEgGgRAKQgOAIgLATIgSAnIgPApIgNAgIgEAIQgLAJgFgLIgEgLIgBgLIgEggIAFgoIALgrIAPgqIAPggQAEgHAHgCQAIgBAIADQAHAEAFAIQAGAHgBAKIgDAFIgDAJIgEAIIgCAFIAPgOIAOgQIAQgNQAIgFALgBQALgCAKAGQAKAGAHAJQAIAJACAMQADAKgCALQgEAUgKAUIgUAmIgRAnQgIAUgDAUQgCAPAEADQAEAEAGgDIAMgJIAJgIQAcgaAXgfIAug6QAUgYAEgCQAGgDgDAKIgLAZIgOAcIgUAmIgdArQgRAWgSAPQgSAPgQACIgEAAQgKAAgIgDg");
	this.shape_4.setTransform(72.3,72.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACOEpIgEgGQgVg/gHhAIgBgzIAEg0IAAgCIgUAAIghAEIgiAEIgXADIgPAJQgcAYgXAaIgvA1QgXAZgbAVQgcAVgjALQgKACgJgIQgFgDAEgGIAJgLQAogjAlgoIBIhPIADgDIAFgEIg/gGIg9gHIgVgEIgVgGQgGgGAGgBIAJgCIAUgFIAVgFIBVgMIBNgKIAGgCIAFgEQAdggAYgjIAvhIIArhIIAphLQAKgSAVADIAMAIQAFAGABAJQABBBgJA+IgPB9IAAAEIAAACIAhAEQARADAGAQQAEALgLAKIgaAMIgbAGIgCACIgBADQgLA5gEA9IgKB3IgDAIIgGAEgABxhPIgXAcIgXAcIgRAYIABAAIAggEIAggFIACAAIABgCIAIgvIAGgvg");
	this.shape_5.setTransform(31.8,59.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer, new cjs.Rectangle(0,0,190.9,127.7), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1,1,0,0,0,60,38);

	this.instance_1 = new lib.moneynumbers();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.9,0.1,1,1,0,0,0,38.2,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-37.9,120.1,75.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.booknow();
	this.instance.parent = this;
	this.instance.setTransform(62.6,33,1,1,0,0,0,62.6,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,125.3,66.1), null);


// stage content:
(lib._300x600_4talk_ski = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// badge
	this.instance = new lib.badge();
	this.instance.parent = this;
	this.instance.setTransform(150,540,1,1,0,0,0,150,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(552));

	// Layer_7
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.5,213.4,1.349,12.915,45,0,0,145.2,27);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(138).to({_off:false},0).to({alpha:0.5},14).to({alpha:0},27).to({scaleX:1.35,scaleY:12.89,rotation:44.9,x:31.9,y:213,alpha:0.25},29).to({scaleX:1.35,scaleY:12.92,rotation:45,x:31.5,y:213.4,alpha:0.309},6).to({alpha:0.77},26).to({scaleX:1.35,scaleY:12.89,rotation:44.9,x:31.9,y:213,alpha:0.641},12).to({scaleX:1.35,scaleY:12.92,rotation:45,x:31.5,y:213.4,alpha:0},33).to({alpha:0.281},41).to({alpha:0.012},79).to({alpha:0.43},54).to({alpha:0},20).to({alpha:0.539},72).wait(1));

	// Layer_6
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(185.5,464,1,1,0,0,0,19.5,21);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(168).to({_off:false},0).wait(1).to({x:185.6,alpha:0.004},0).wait(1).to({x:185.9,alpha:0.017},0).wait(1).to({x:186.5,alpha:0.041},0).wait(1).to({x:187.5,alpha:0.078},0).wait(1).to({x:188.8,alpha:0.131},0).wait(1).to({x:190.6,alpha:0.203},0).wait(1).to({x:192.8,alpha:0.294},0).wait(1).to({x:195.5,alpha:0.401},0).wait(1).to({x:198.4,alpha:0.515},0).wait(1).to({x:201.1,alpha:0.625},0).wait(1).to({x:203.5,alpha:0.721},0).wait(1).to({x:205.5,alpha:0.8},0).wait(1).to({x:207.1,alpha:0.863},0).wait(1).to({x:208.3,alpha:0.911},0).wait(1).to({x:209.2,alpha:0.946},0).wait(1).to({x:209.8,alpha:0.972},0).wait(1).to({x:210.2,alpha:0.988},0).wait(1).to({x:210.4,alpha:0.997},0).wait(1).to({x:210.5,alpha:1},0).wait(365));

	// Layer_3
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.7,490.9,1,1,0,0,0,62.6,33);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(163).to({_off:false},0).wait(1).to({regX:63.7,regY:28.2,x:136.8,y:486,alpha:0.004},0).wait(1).to({y:485.7,alpha:0.015},0).wait(1).to({y:485.2,alpha:0.037},0).wait(1).to({y:484.4,alpha:0.07},0).wait(1).to({y:483.2,alpha:0.116},0).wait(1).to({y:481.6,alpha:0.179},0).wait(1).to({y:479.6,alpha:0.26},0).wait(1).to({y:477.2,alpha:0.356},0).wait(1).to({y:474.5,alpha:0.463},0).wait(1).to({y:471.8,alpha:0.571},0).wait(1).to({y:469.3,alpha:0.67},0).wait(1).to({y:467.2,alpha:0.755},0).wait(1).to({y:465.5,alpha:0.824},0).wait(1).to({y:464.1,alpha:0.879},0).wait(1).to({y:463.1,alpha:0.921},0).wait(1).to({y:462.3,alpha:0.952},0).wait(1).to({y:461.7,alpha:0.975},0).wait(1).to({y:461.4,alpha:0.989},0).wait(1).to({y:461.2,alpha:0.997},0).wait(1).to({regX:62.6,regY:33,x:135.7,y:465.9,alpha:1},0).wait(369));

	// money
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(135.8,194);
	this.instance_4.alpha = 0.109;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(148).to({_off:false},0).wait(1).to({regX:-0.9,regY:0.5,x:134.9,y:191.6,alpha:0.238},0).wait(1).to({y:188.2,alpha:0.388},0).wait(1).to({y:184.4,alpha:0.56},0).wait(1).to({y:180.9,alpha:0.713},0).wait(1).to({y:178.7,alpha:0.815},0).wait(1).to({y:177.2,alpha:0.878},0).wait(1).to({y:176.3,alpha:0.918},0).wait(1).to({y:175.7,alpha:0.945},0).wait(1).to({y:175.3,alpha:0.964},0).wait(1).to({y:175,alpha:0.978},0).wait(1).to({y:174.8,alpha:0.987},0).wait(1).to({y:174.7,alpha:0.993},0).wait(1).to({y:174.6,alpha:0.997},0).wait(1).to({y:174.5,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:135.8,y:174,alpha:1},0).wait(389));

	// from
	this.instance_5 = new lib.from();
	this.instance_5.parent = this;
	this.instance_5.setTransform(154.2,164.5,1,1,0,0,0,80.9,36.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(155).to({_off:false},0).wait(1).to({regX:81.3,regY:38.2,x:154.6,y:166.3,alpha:0.012},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.285},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.991},0).wait(1).to({regX:80.9,regY:36.4,x:154.2,y:164.5,alpha:1},0).wait(386));

	// Layer_4
	this.instance_6 = new lib.calling();
	this.instance_6.parent = this;
	this.instance_6.setTransform(166.4,241.3,1,1,0,0,0,128.6,92.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.call();
	this.instance_7.parent = this;
	this.instance_7.setTransform(223.5,112.7,1,1,0,0,0,61.5,63.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({_off:false},0).wait(1).to({regX:126,regY:94.3,x:163.8,y:243.3,alpha:0.005},0).wait(1).to({y:242.9,alpha:0.022},0).wait(1).to({y:242.4,alpha:0.052},0).wait(1).to({y:241.4,alpha:0.101},0).wait(1).to({y:240.1,alpha:0.171},0).wait(1).to({y:238.3,alpha:0.265},0).wait(1).to({y:236.1,alpha:0.381},0).wait(1).to({y:233.7,alpha:0.508},0).wait(1).to({y:231.4,alpha:0.631},0).wait(1).to({y:229.4,alpha:0.736},0).wait(1).to({y:227.8,alpha:0.82},0).wait(1).to({y:226.6,alpha:0.884},0).wait(1).to({y:225.7,alpha:0.931},0).wait(1).to({y:225,alpha:0.964},0).wait(1).to({y:224.6,alpha:0.985},0).wait(1).to({y:224.4,alpha:0.996},0).wait(1).to({regX:128.6,regY:92.2,x:166.4,y:222.3,alpha:1},0).wait(45).to({regX:126,regY:94.3,x:163.8,y:224.4,alpha:0.995},0).wait(1).to({y:224.8,alpha:0.978},0).wait(1).to({y:225.3,alpha:0.948},0).wait(1).to({y:226.3,alpha:0.899},0).wait(1).to({y:227.6,alpha:0.829},0).wait(1).to({y:229.4,alpha:0.735},0).wait(1).to({y:231.6,alpha:0.619},0).wait(1).to({y:234,alpha:0.492},0).wait(1).to({y:236.3,alpha:0.369},0).wait(1).to({y:238.3,alpha:0.264},0).wait(1).to({y:239.9,alpha:0.18},0).wait(1).to({y:241.1,alpha:0.116},0).wait(1).to({y:242,alpha:0.069},0).wait(1).to({y:242.7,alpha:0.036},0).wait(1).to({y:243.1,alpha:0.015},0).wait(1).to({y:243.3,alpha:0.004},0).wait(1).to({regX:128.6,regY:92.2,x:166.4,y:241.3,alpha:0},0).to({_off:true},9).wait(415));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(137).to({_off:false},0).wait(1).to({regX:60.4,regY:51.5,x:222.4,y:100.5,alpha:0.004},0).wait(1).to({y:100.3,alpha:0.015},0).wait(1).to({y:99.9,alpha:0.037},0).wait(1).to({y:99.3,alpha:0.07},0).wait(1).to({y:98.4,alpha:0.116},0).wait(1).to({y:97.2,alpha:0.179},0).wait(1).to({y:95.7,alpha:0.26},0).wait(1).to({y:93.8,alpha:0.356},0).wait(1).to({y:91.8,alpha:0.463},0).wait(1).to({y:89.7,alpha:0.571},0).wait(1).to({y:87.9,alpha:0.67},0).wait(1).to({y:86.3,alpha:0.755},0).wait(1).to({y:84.9,alpha:0.824},0).wait(1).to({y:83.9,alpha:0.879},0).wait(1).to({y:83.1,alpha:0.921},0).wait(1).to({y:82.5,alpha:0.952},0).wait(1).to({y:82.1,alpha:0.975},0).wait(1).to({y:81.8,alpha:0.989},0).wait(1).to({y:81.6,alpha:0.997},0).wait(1).to({regX:61.5,regY:63.6,x:223.5,y:93.7,alpha:1},0).wait(395));

	// type21
	this.instance_8 = new lib.is();
	this.instance_8.parent = this;
	this.instance_8.setTransform(85.1,191.2,1,1,0,0,0,26.8,61.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.the();
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.7,125.2,1,1,0,0,0,22.4,30.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({_off:false},0).wait(1).to({regX:27.2,regY:66.6,x:85.5,y:196.2,alpha:0.005},0).wait(1).to({y:195.8,alpha:0.022},0).wait(1).to({y:195.3,alpha:0.052},0).wait(1).to({y:194.3,alpha:0.101},0).wait(1).to({y:193,alpha:0.171},0).wait(1).to({y:191.2,alpha:0.265},0).wait(1).to({y:189,alpha:0.381},0).wait(1).to({y:186.6,alpha:0.508},0).wait(1).to({y:184.3,alpha:0.631},0).wait(1).to({y:182.3,alpha:0.736},0).wait(1).to({y:180.7,alpha:0.82},0).wait(1).to({y:179.5,alpha:0.884},0).wait(1).to({y:178.6,alpha:0.931},0).wait(1).to({y:177.9,alpha:0.964},0).wait(1).to({y:177.5,alpha:0.985},0).wait(1).to({y:177.3,alpha:0.996},0).wait(1).to({regX:26.8,regY:61.5,x:85.1,y:172.2,alpha:1},0).wait(51).to({regX:27.2,regY:66.6,x:85.5,y:177.3,alpha:0.995},0).wait(1).to({y:177.7,alpha:0.978},0).wait(1).to({y:178.2,alpha:0.948},0).wait(1).to({y:179.2,alpha:0.899},0).wait(1).to({y:180.5,alpha:0.829},0).wait(1).to({y:182.3,alpha:0.735},0).wait(1).to({y:184.5,alpha:0.619},0).wait(1).to({y:186.9,alpha:0.492},0).wait(1).to({y:189.2,alpha:0.369},0).wait(1).to({y:191.2,alpha:0.264},0).wait(1).to({y:192.8,alpha:0.18},0).wait(1).to({y:194,alpha:0.116},0).wait(1).to({y:194.9,alpha:0.069},0).wait(1).to({y:195.6,alpha:0.036},0).wait(1).to({y:196,alpha:0.015},0).wait(1).to({y:196.2,alpha:0.004},0).wait(1).to({regX:26.8,regY:61.5,x:85.1,y:191.2,alpha:0},0).to({_off:true},5).wait(417));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(135).to({_off:false},0).wait(1).to({regX:20.8,regY:26.5,x:150.1,y:121.2,alpha:0.004},0).wait(1).to({y:121,alpha:0.015},0).wait(1).to({y:120.6,alpha:0.037},0).wait(1).to({y:119.9,alpha:0.07},0).wait(1).to({y:119,alpha:0.116},0).wait(1).to({y:117.8,alpha:0.179},0).wait(1).to({y:116.3,alpha:0.26},0).wait(1).to({y:114.5,alpha:0.356},0).wait(1).to({y:112.4,alpha:0.463},0).wait(1).to({y:110.4,alpha:0.571},0).wait(1).to({y:108.5,alpha:0.67},0).wait(1).to({y:106.9,alpha:0.755},0).wait(1).to({y:105.6,alpha:0.824},0).wait(1).to({y:104.6,alpha:0.879},0).wait(1).to({y:103.8,alpha:0.921},0).wait(1).to({y:103.2,alpha:0.952},0).wait(1).to({y:102.7,alpha:0.975},0).wait(1).to({y:102.5,alpha:0.989},0).wait(1).to({y:102.3,alpha:0.997},0).wait(1).to({regX:22.4,regY:30.4,x:151.7,y:106.2,alpha:1},0).wait(397));

	// type1
	this.instance_10 = new lib.talkeetna();
	this.instance_10.parent = this;
	this.instance_10.setTransform(148.2,124.6,1,1,0,0,0,125.4,75.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.answer();
	this.instance_11.parent = this;
	this.instance_11.setTransform(119.4,86.8,1,1,0,0,0,95.4,63.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).wait(1).to({regX:125.6,regY:68.6,x:148.4,y:117.9,alpha:0.005},0).wait(1).to({y:117.6,alpha:0.022},0).wait(1).to({y:117,alpha:0.052},0).wait(1).to({y:116,alpha:0.101},0).wait(1).to({y:114.6,alpha:0.171},0).wait(1).to({y:112.7,alpha:0.265},0).wait(1).to({y:110.4,alpha:0.381},0).wait(1).to({y:107.8,alpha:0.508},0).wait(1).to({y:105.4,alpha:0.631},0).wait(1).to({y:103.3,alpha:0.736},0).wait(1).to({y:101.6,alpha:0.82},0).wait(1).to({y:100.3,alpha:0.884},0).wait(1).to({y:99.4,alpha:0.931},0).wait(1).to({y:98.7,alpha:0.964},0).wait(1).to({y:98.3,alpha:0.985},0).wait(1).to({y:98.1,alpha:0.996},0).wait(1).to({regX:125.4,regY:75.2,x:148.2,y:104.6,alpha:1},0).wait(90).to({regX:125.6,regY:68.6,x:148.4,y:98.1,alpha:0.995},0).wait(1).to({y:98.4,alpha:0.978},0).wait(1).to({y:99,alpha:0.948},0).wait(1).to({y:99.9,alpha:0.899},0).wait(1).to({y:101.2,alpha:0.829},0).wait(1).to({y:103,alpha:0.735},0).wait(1).to({y:105.2,alpha:0.619},0).wait(1).to({y:107.7,alpha:0.492},0).wait(1).to({y:110,alpha:0.369},0).wait(1).to({y:112,alpha:0.264},0).wait(1).to({y:113.6,alpha:0.18},0).wait(1).to({y:114.8,alpha:0.116},0).wait(1).to({y:115.7,alpha:0.069},0).wait(1).to({y:116.3,alpha:0.036},0).wait(1).to({y:116.7,alpha:0.015},0).wait(1).to({y:116.9,alpha:0.004},0).wait(1).to({regX:125.4,regY:75.2,x:148.2,y:123.6,alpha:0},0).to({_off:true},1).wait(419));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(133).to({_off:false},0).wait(1).to({regX:93,regY:60.6,x:117,y:83.4,alpha:0.004},0).wait(1).to({y:83.2,alpha:0.015},0).wait(1).to({y:82.8,alpha:0.037},0).wait(1).to({y:82.1,alpha:0.07},0).wait(1).to({y:81.2,alpha:0.116},0).wait(1).to({y:80,alpha:0.179},0).wait(1).to({y:78.5,alpha:0.26},0).wait(1).to({y:76.7,alpha:0.356},0).wait(1).to({y:74.6,alpha:0.463},0).wait(1).to({y:72.6,alpha:0.571},0).wait(1).to({y:70.7,alpha:0.67},0).wait(1).to({y:69.1,alpha:0.755},0).wait(1).to({y:67.8,alpha:0.824},0).wait(1).to({y:66.8,alpha:0.879},0).wait(1).to({y:66,alpha:0.921},0).wait(1).to({y:65.4,alpha:0.952},0).wait(1).to({y:64.9,alpha:0.975},0).wait(1).to({y:64.7,alpha:0.989},0).wait(1).to({y:64.5,alpha:0.997},0).wait(1).to({regX:95.4,regY:63.9,x:119.4,y:67.8,alpha:1},0).wait(399));

	// Layer_5
	this.instance_12 = new lib.hotel();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(112).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.101},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(406));

	// blok
	this.instance_13 = new lib.Symbol1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(153,299,1,1,0,0,0,157,304.9);

	this.instance_14 = new lib.aurora();
	this.instance_14.parent = this;
	this.instance_14.setTransform(149.9,300,1.028,1.028,0,0,0,149.8,299.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(534));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(82).to({_off:false},0).to({scaleX:1.07,scaleY:1.07,x:143,y:300.1,alpha:1},13).to({regX:150,regY:299.9,scaleX:1.22,scaleY:1.22,x:120.1,y:299.9},43).wait(414));

	// Layer_2
	this.instance_15 = new lib.bike();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_15.alpha = 0.109;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,alpha:1},7).to({regY:299.9,scaleX:1.21,scaleY:1.21,x:150.1,y:299.9},45).to({_off:true},9).wait(451));

	// Layer_1
	this.instance_16 = new lib.ski();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,300,1.25,1.25,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:1,scaleY:1},51).wait(501));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.5,225,375,750);
// library properties:
lib.properties = {
	id: 'C7CB987D005142BCAE17C71A41D11768',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_4talk_ski_atlas_P_.png", id:"300x600_4talk_ski_atlas_P_"},
		{src:"images/300x600_4talk_ski_atlas_NP_.jpg", id:"300x600_4talk_ski_atlas_NP_"}
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
an.compositions['C7CB987D005142BCAE17C71A41D11768'] = {
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