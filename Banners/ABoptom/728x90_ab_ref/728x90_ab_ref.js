(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_ab_ref_atlas_", frames: [[0,0,446,126],[0,128,320,50]]}
];


// symbols:



(lib.lb_logo = function() {
	this.spriteSheet = ss["728x90_ab_ref_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ref_image = function() {
	this.spriteSheet = ss["728x90_ab_ref_atlas_"];
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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABcIAAi3IA+AAQAeAAASARQASARAAAdIAAABQABAdgVARQgSARgeAAIgWAAIAAA4gAgaACIAWAAQANAAAJgHQAIgIAAgOQAAgegeAAIgWAAg");
	this.shape.setTransform(191.4,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BcIAAi3IAmAAIAACUIBJAAIAAAjg");
	this.shape_1.setTransform(176.8,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BcIAAi3IB2AAIAAAiIhQAAIAAAoIBGAAIAAAiIhGAAIAAApIBRAAIAAAig");
	this.shape_2.setTransform(162.3,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBcIAAhLIg7AAIAABLIgnAAIAAi3IAnAAIAABKIA7AAIAAhKIAnAAIAAC3g");
	this.shape_3.setTransform(145.8,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnBcIhIhuIAABuIglAAIAAi3IAjAAIBFBqIAAhqIAmAAIAAC3g");
	this.shape_4.setTransform(122.3,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAtBdIgOgoIg+AAIgOAoIgmAAIBCi5IAjAAIBCC5gAAUATIgUg7IgUA7IAoAAg");
	this.shape_5.setTransform(104.4,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBFQgWgaAAgqIAAgBQAAgqAYgaQAXgaAkAAQAjAAAYAZIgXAdQgSgSgUAAQgRAAgMAQQgNAQAAAaIAAAAQAAAbANAQQAMAQASAAQATAAATgTIAXAbQgbAcgkAAQgjAAgXgag");
	this.shape_6.setTransform(87.7,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BcIAAi3IB2AAIAAAiIhQAAIAAAoIBGAAIAAAiIhGAAIAAApIBRAAIAAAig");
	this.shape_7.setTransform(66.4,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBdIghh0IghB0IgjAAIg0i4IAoAAIAfB4IAih5IAgAAIAiB5IAfh4IAnAAIg0C4g");
	this.shape_8.setTransform(45.8,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00BCE4").s().p("AyhEeIAAo7MAlDAAAIAAI7g");
	this.shape_9.setTransform(117.6,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-0.9,1.6,237.2,57.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_logo();
	this.instance.parent = this;
	this.instance.setTransform(-40,11,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-40,11,490.6,138.6), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ref_image();
	this.instance.parent = this;
	this.instance.setTransform(-37,0,2.169,2.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApfImIAAxLIS+AAIAARLg");
	this.shape.setTransform(-56.1,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-116.9,-1.4,773.9,110), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaCNQgFgDgFgEQgEgFgDgFQgCgGAAgHQAAgHACgFQADgGAEgFQAFgEAFgDQAGgCAHAAQAHAAAFACQAFADAEAEQAFAFADAGQACAFAAAHQAAAHgCAGQgDAFgFAFQgEAEgFADQgFACgHAAQgHAAgGgCgAgpBDIABgXIABgRIADgNIAHgLIAJgJIAMgKIAOgNIAIgLIAEgLIABgOQABgKgGgHQgFgHgJAAIgJABQgFACgEADQgDAEgDAGQgCAFAAAKIg5gGQAAgUAHgOQAHgPALgKQAMgKAPgEQAQgFARAAQARAAAPAFQAPAFAMAKQALAKAGAOQAGAPAAATQAAATgJARQgJAQgTAOIgPANQgHAGgDAHQgEAHgCAJIgBAXg");
	this.shape.setTransform(131.1,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDCAQgKgEgIgHQgHgIgFgMQgEgMAAgPIAAhSIgaAAIAAgvIAbAAIAAgtIA3gbIAABIIAlAAIAAAvIgmAAIAABOIABALIADAHIAFADIAHABIAMgBIALgDIAHAjQgJAGgLADQgLAEgQgBQgLAAgJgDg");
	this.shape_1.setTransform(113.2,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBcQgTgIgMgOQgNgNgHgTQgHgSAAgUQAAgUAHgTQAHgSANgNQANgOASgHQASgIAVAAQAWAAASAHQARAIALANQAMAMAGASQAHARAAAUIABAIIAAAJIiJAAIAAAGQACAIAFAGQAFAGAGAFQAHAEAIACIAPACIAPgBIAPgDIANgEIANgFIAUAlIgTALIgRAIIgTAEIgWABQgYAAgTgIgAAmgYIgEgLQgCgGgEgEQgFgEgGgCQgGgDgKAAQgJAAgHADQgHACgFAEQgFAEgDAGIgFALIBOAAg");
	this.shape_2.setTransform(95.7,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhICIIAAgxIAgAAIAPgkIg7iJIgTAAIAAgxIBcAAIAAAxIgOAAIAaBGIAbhGIgQAAIAAgxIBcAAIAAAxIgVAAIhICtIAgAAIAAAxg");
	this.shape_3.setTransform(74.1,54.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDCAQgKgEgIgHQgHgIgFgMQgEgMAAgPIAAhSIgaAAIAAgvIAbAAIAAgtIA3gbIAABIIAlAAIAAAvIgmAAIAABOIABALIADAHIAFADIAHABIAMgBIALgDIAHAjQgJAGgLADQgLAEgQgBQgLAAgJgDg");
	this.shape_4.setTransform(47.6,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBjIgPgDIgMgFIgKgHIggAAIAAgyIAzAAIAAABQAAAFADAEIAIAHIALAEIANABQAQAAAHgEQAIgEAAgHQAAgFgEgEQgDgDgKgDIghgIQghgFgRgOQgQgPAAgXQAAgOAGgLQAGgLALgIQALgHAPgFQAOgEARAAIATABIAQADIAMAGIAKAGIAfAAIAAAyIguAAQAAgEgDgEQgDgEgFgDIgOgFIgQgCIgJABIgIACIgGAFQgCACAAAEIAAAFIADADIAFAEIAIACIAhAHQASADANAGQAMAGAIAGQAIAHADAJQADAJAAAKQAAAQgHAMQgIANgMAHQgMAIgPAFQgQADgPAAg");
	this.shape_5.setTransform(30.7,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2CMIAAgyIAcAAIAAhYIgcAAIAAgwIBTAAIAACIIAaAAIAAAygAgJhNQgGgDgFgEQgEgEgCgGQgDgGAAgHQAAgGADgGQACgGAEgFQAFgEAGgCQAFgDAHAAQAGAAAGADQAFACAFAEQAEAFADAGQACAGAAAGQAAAHgCAGQgDAGgEAEQgFAEgFADQgGACgGAAQgHAAgFgCg");
	this.shape_6.setTransform(13.8,45.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhVBdIAAgxIAcAAIAAhXIgbAAIAAgyIBTAAIAAAOQAHgHAKgDQAKgEALAAIAZAAIAYAAIAABFIgzAAIAAgUIgOABIgKADQgFADgDAEQgDAEgBAGIAABDIAlAAIAAAxg");
	this.shape_7.setTransform(-3.4,50.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDCAQgKgEgIgHQgHgIgFgMQgEgMAAgPIAAhSIgaAAIAAgvIAbAAIAAgtIA3gbIAABIIAlAAIAAAvIgmAAIAABOIABALIADAHIAFADIAHABIAMgBIALgDIAHAjQgJAGgLADQgLAEgQgBQgLAAgJgDg");
	this.shape_8.setTransform(-21.1,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBcQgTgIgMgOQgNgNgHgTQgHgSAAgUQAAgUAHgTQAHgSANgNQANgOASgHQASgIAVAAQAWAAASAHQARAIALANQAMAMAGASQAHARAAAUIABAIIAAAJIiJAAIAAAGQACAIAFAGQAFAGAGAFQAHAEAIACIAPACIAPgBIAPgDIANgEIANgFIAUAlIgTALIgRAIIgTAEIgWABQgYAAgTgIgAAmgYIgEgLQgCgGgEgEQgFgEgGgCQgGgDgKAAQgJAAgHADQgHACgFAEQgFAEgDAGIgFALIBOAAg");
	this.shape_9.setTransform(-38.6,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABiBfIAAhqQAAgQgIgIQgJgKgOAAQgLAAgIAFQgJAFgJAMIAAADIAAAFIAAA9IAbAAIAAAxIhUAAIAAhqQAAgIgDgGQgCgGgEgEQgEgEgGgDQgGgDgHAAQgJAAgJAEQgKAFgJALIAABHIAeAAIAAAxIh0AAIAAgxIAcAAIAAhXIgcAAIAAgyIBWAAIAAAQQALgIAPgGQAOgFAQAAQAVAAAPAHQAOAIAJAPIAOgMIAPgKIASgGQAKgCAJAAQAjAAASASQATAUAAAkIAABCIAaAAIAAAxg");
	this.shape_10.setTransform(-68.3,50.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoBbQgSgIgNgNQgNgOgIgRQgGgSAAgVQgBgTAIgSQAIgSANgOQAMgNATgIQASgIAVAAQAWAAASAIQATAIANANQANAOAHASQAIASAAATQAAAUgIASQgHASgMAOQgOANgSAIQgTAIgWAAQgVAAgTgIgAgQgsQgJADgGAGQgGAHgEAJQgEAJABAKQgBALAEAJQAEAIAGAHQAGAGAJAEQAIAEAIAAQAKAAAIgEQAIgDAGgHQAGgGADgJQAEgJAAgLQAAgKgEgJQgDgJgGgHQgGgGgIgDQgIgEgKABIgBAAQgJAAgGADg");
	this.shape_11.setTransform(-99.2,50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDCAQgKgEgIgHQgHgIgFgMQgEgMAAgPIAAhSIgaAAIAAgvIAbAAIAAgtIA3gbIAABIIAlAAIAAAvIgmAAIAABOIABALIADAHIAFADIAHABIAMgBIALgDIAHAjQgJAGgLADQgLAEgQgBQgLAAgJgDg");
	this.shape_12.setTransform(-118.3,46.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhwCLIAAgxIAfAAIAAitIgUAAIAAgxIBSAAIAAACIASgFQAIgDAJAAQAVAAARAIQASAIANANQANAOAIARQAGASAAAUQAAAVgGARQgIASgNANQgNANgRAHQgSAJgVgBQgMABgJgDIgUgHIAAAqIAiAAIAAAxgAgIhSQgLAGgGALIAAA0QAFAKALAFQAJAFAMABQAJAAAIgEQAJgEAGgFQAGgGAEgJQADgJAAgLQABgLgEgJQgDgJgHgGQgGgGgJgEQgIgDgJAAQgLAAgJAGg");
	this.shape_13.setTransform(-137.3,54.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoBbQgSgIgNgNQgNgOgIgRQgHgSAAgVQAAgTAIgSQAHgSANgOQANgNATgIQASgIAVAAQAWAAATAIQARAIAOANQANAOAIASQAGASAAATQAAAUgGASQgIASgNAOQgNANgSAIQgTAIgWAAQgVAAgTgIgAgRgsQgIADgGAGQgGAHgEAJQgDAJgBAKQABALADAJQAEAIAGAHQAGAGAIAEQAJAEAIAAQAJAAAJgEQAIgDAGgHQAGgGAEgJQADgJAAgLQAAgKgDgJQgEgJgGgHQgGgGgIgDQgJgEgJABIgBAAQgIAAgIADg");
	this.shape_14.setTransform(-160.8,50.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAiBfIAAhqQAAgQgIgJQgIgJgOAAQgJAAgJAEQgKAEgJAMIAABHIAfAAIAAAxIh1AAIAAgxIAcAAIAAhXIgbAAIAAgyIBVAAIAAARQAMgKAOgFQAOgFAQAAQAiAAASATQASASAAAlIAABCIAbAAIAAAxg");
	this.shape_15.setTransform(-192.4,50.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3BdQgNgEgJgIQgJgIgFgLQgFgLAAgNQAAgNAFgLQAFgLAJgHQAJgHAOgFQAOgFARAAIAXACIATADIAAgGQAAgGgCgGQgDgFgFgEQgFgCgGgCIgPgCQgRAAgNAEQgNADgLAGIgSgjQATgMAUgHQAUgHAWAAQARAAAPAEQAPAEAKAJQALAIAGAOQAGAOAAAVIAABDIAZAAIAAAxIhOAAIAAgKIgLAHIgKAFIgLADIgMAAQgRAAgNgFgAgfATIgHADIgFAGIgCAIQAAAIAGAGQAGAFAMAAQANAAAJgEQALgEAHgGIAAgXIgqAAg");
	this.shape_16.setTransform(-217.9,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-230.9,22.1,375.7,48.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00BCE4").s().p("Eg43AJAIAAyAMBxvAAAIAASAg");
	this.shape.setTransform(364,57.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,728,115.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBcQgRgHgNgOQgMgMgHgTQgHgSAAgWQAAgWAIgSQAGgSANgNQAMgNARgHQASgHATAAQAVAAARAHQASAHAMANQAMANAHASQAHATAAAVQAAAWgHASQgHASgMANQgMAOgSAHQgRAHgVAAQgUAAgRgHgAgVhBQgLAFgIAJQgIAIgEANQgFAOAAAQQAAAQAFANQAEANAIAJQAIAJALAGQAKAEALAAQANAAALgEQAKgGAIgJQAIgJAFgNQAEgNAAgQQAAgQgEgOQgFgNgIgIQgIgJgKgFQgLgEgNAAQgLAAgKAEg");
	this.shape.setTransform(472,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBB7QgKgDgGgHQgGgHgDgMQgDgMAAgRIAAhnIgeAAIAAgbIAfAAIAAgtIAggPIAAA8IArAAIAAAbIgsAAIAABrQAAAMACAGQADAHAFADQAGACAHAAIANgBIANgEIAIAWIgTAHQgJADgNAAQgMAAgIgDg");
	this.shape_1.setTransform(454.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsCNIAAggIAbAAIAAjaIgbAAIAAgeIA9AAIAAD4IAcAAIAAAgg");
	this.shape_2.setTransform(433.4,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBeQgMgEgIgIQgJgHgEgKQgFgKAAgLQAAgMAEgJQADgKAGgGQAGgHAIgEIARgHIARgEIARgBIAVABIAQACIAAgQQAAgKgDgHQgDgHgFgFQgGgFgGgCQgIgCgIAAIgQABIgOADIgNAEIgKAFIgLgXIAPgIIARgGIASgEIASgCQAPAAANAEQANAEAIAIQAJAIAGANQAEAMAAASIAABcIAVAAIAAAfIg2AAIAAgRQgLAKgNAGQgMAGgQAAQgOAAgLgEgAgZAKQgIACgGAEQgGAEgDAHQgEAGAAAIQAAAHAEAGQACAFAFAEQAFAEAHABIAPACIANgBIAMgFIALgGIAJgIIAAgqIgnAAQgJAAgIACg");
	this.shape_3.setTransform(416.9,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBeIAAgfIAaAAIAAh8IgaAAIAAgfIA8AAIAAAaIAGgLIAJgIIALgGQAGgCAHAAIASAAIAQAAIAAApIgiAAIAAgMQgGAAgGACQgGADgGAEQgFAFgEAHQgDAHgCAKIAABZIAfAAIAAAfg");
	this.shape_4.setTransform(398.3,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBeIAAgfIAaAAIAAh8IgaAAIAAgfIA8AAIAAAaIAGgLIAJgIIALgGQAGgCAHAAIASAAIAQAAIAAApIgiAAIAAgMQgGAAgGACQgGADgGAEQgFAFgEAHQgDAHgCAKIAABZIAfAAIAAAfg");
	this.shape_5.setTransform(381,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBdQgRgHgLgMQgLgNgHgTQgHgSAAgYQAAgUAGgSQAFgRAMgNQAKgOARgIQAQgIAVABQAWgBAOAHQAOAGAJALQAJAKAEAOQAFANACAPIABANIAAANIiFAAIAAAPIAEANQAGARAQAKQAOAJARgBQAQABANgEQAOgFAPgIIANAXQgSAMgTAHQgSAFgUAAQgSAAgQgFgAAwgVIgDgTQgDgJgFgHQgGgGgIgEQgJgDgMAAQgLgBgJAEQgIAEgGAFQgHAHgDAJQgEAJgCALIBgAAg");
	this.shape_6.setTransform(361.4,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDCNIAAggIAcAAIAAiAIgfAAIAAgbIAfAAIAAgdQAAgQAFgMQAEgMAIgJQAIgIALgEQAKgDAOAAIARABIAOACIAKADIAJAEIgLAXIgPgEQgJgCgKAAQgPAAgJAJQgHAJAAASIAAAeIAqAAIAAAbIgqAAIAACAIAcAAIAAAgg");
	this.shape_7.setTransform(346.5,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBdQgRgHgLgMQgLgNgHgTQgHgSAAgYQAAgUAGgSQAFgRAMgNQAKgOARgIQAQgIAVABQAWgBAOAHQAOAGAJALQAJAKAFAOQAEANACAPIABANIAAANIiFAAIAAAPIAEANQAGARAQAKQAOAJARgBQAQABANgEQAOgFAPgIIANAXQgSAMgTAHQgSAFgUAAQgSAAgQgFgAAwgVIgDgTQgDgJgFgHQgGgGgIgEQgJgDgMAAQgLgBgJAEQgIAEgGAFQgHAHgDAJQgEAJgCALIBgAAg");
	this.shape_8.setTransform(326.7,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBeIAAgfIAaAAIAAh8IgaAAIAAgfIA8AAIAAAaIAGgLIAJgIIALgGQAGgCAHAAIASAAIAQAAIAAApIgiAAIAAgMQgGAAgGACQgGADgGAEQgFAFgEAHQgDAHgCAKIAABZIAfAAIAAAfg");
	this.shape_9.setTransform(307.9,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBeQgMgEgIgIQgJgHgEgKQgFgKAAgLQAAgMAEgJQADgKAGgGQAGgHAIgEIAQgHIASgEIARgBIAVABIAQACIAAgQQAAgKgDgHQgDgHgFgFQgGgFgGgCQgIgCgIAAIgQABIgOADIgNAEIgKAFIgLgXIAPgIIAQgGIASgEIASgCQAQAAANAEQAMAEAJAIQAJAIAGANQAEAMAAASIAABcIAVAAIAAAfIg3AAIAAgRQgKAKgNAGQgMAGgQAAQgOAAgLgEgAgZAKQgIACgGAEQgGAEgDAHQgDAGgBAIQAAAHAEAGQACAFAFAEQAFAEAHABIAPACIAOgBIALgFIALgGIAIgIIABgqIgnAAQgJAAgIACg");
	this.shape_10.setTransform(280.9,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBdQgRgHgLgMQgMgNgGgTQgHgSAAgYQAAgUAGgSQAFgRAMgNQAKgOARgIQAQgIAWABQAUgBAPAHQAOAGAJALQAJAKAFAOQAEANACAPIABANIAAANIiFAAIABAPIADANQAGARAQAKQAOAJARgBQAPABAOgEQAOgFAPgIIANAXQgSAMgTAHQgSAFgUAAQgSAAgQgFgAAwgVIgDgTQgDgJgFgHQgFgGgJgEQgIgDgNAAQgLgBgJAEQgIAEgGAFQgHAHgDAJQgEAJgCALIBgAAg");
	this.shape_11.setTransform(251.9,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsCIQgRgGgLgNQgNgNgGgTQgHgSAAgYQAAgWAGgRQAHgRAMgMQAMgOARgGQAQgHAVAAQAMAAAMADQALADAKAHIAAhIIgZAAIAAgeIA7AAIAAD4IAbAAIAAAgIg9AAIAAgQQgJAJgMAGQgMAEgOAAQgTABgQgHgAgcgSQgLAFgHAIQgIAHgFAMQgEANAAAPQAAASAEAOQAEAMAIAJQAIAKALAEQALAEAMAAQAOAAALgEQAKgEAIgKIAAhnQgJgIgMgDQgLgDgMAAQgMAAgKAEg");
	this.shape_12.setTransform(230.5,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBeQgMgEgIgIQgJgHgEgKQgFgKAAgLQAAgMAEgJQADgKAGgGQAGgHAIgEIARgHIARgEIARgBIAVABIAQACIAAgQQAAgKgDgHQgDgHgFgFQgGgFgGgCQgIgCgIAAIgQABIgOADIgNAEIgKAFIgLgXIAPgIIARgGIASgEIASgCQAPAAANAEQANAEAIAIQAJAIAGANQAEAMAAASIAABcIAVAAIAAAfIg2AAIAAgRQgLAKgNAGQgMAGgQAAQgOAAgLgEgAgZAKQgIACgGAEQgGAEgDAHQgEAGAAAIQAAAHAEAGQACAFAFAEQAFAEAHABIAPACIANgBIAMgFIALgGIAJgIIAAgqIgnAAQgJAAgIACg");
	this.shape_13.setTransform(208.5,9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABTCJIAAgfIAdAAIAAjRIhfDwIgeAAIhhjxIAADSIAcAAIAAAfIhZAAIAAgfIAaAAIAAjPIgaAAIAAgjIBXAAIBWDrIBYjrIBSAAIAAAjIgaAAIAADPIAaAAIAAAfg");
	this.shape_14.setTransform(179,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(157.3,-18.3,328.2,48.7), null);


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,188,228,0)","rgba(0,188,228,0.898)"],[0.004,0.843],-75.1,-12.6,355.7,-12.6).s().p("Eg3kAJPIAAydMBvJAAAIAASdg");
	this.shape.setTransform(75.1,59.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(-280.6,0,711.4,118.3), null);


// stage content:
(lib._728x90_ab_ref = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(56.9,20.7,0.44,0.44,0,0,0,92.5,21.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(148).to({_off:false},0).to({alpha:1},17).wait(40).to({regX:117.6,regY:30.1,scaleX:0.44,scaleY:0.44,x:67.9,y:24.4},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:67.4,y:24.3},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:66.9,y:24.1},0).wait(1).to({regX:92.5,regY:21.6,scaleX:0.4,scaleY:0.4,x:56.9,y:20.7},0).wait(1).to({regX:117.6,regY:30.1,scaleX:0.4,scaleY:0.4,x:66.9,y:24},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:67,y:24.1},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:67.4,y:24.2},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:67.8,y:24.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:67.9,y:24.4},0).wait(1).to({regX:92.5,regY:21.5,scaleX:0.44,scaleY:0.44,x:56.9,y:20.7},0).wait(134));

	// Layer_6
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(255.4,20.2,0.22,0.22,0,0,0,223.2,63);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({alpha:1},24).wait(190));

	// Layer_3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(239.6,24.7,0.44,0.44,0,0,0,134.1,19);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).wait(1).to({regX:-44.1,regY:49.8,x:161.3,y:38.2,alpha:0.004},0).wait(1).to({y:38.1,alpha:0.018},0).wait(1).to({y:38,alpha:0.047},0).wait(1).to({y:37.8,alpha:0.096},0).wait(1).to({y:37.5,alpha:0.17},0).wait(1).to({y:37,alpha:0.267},0).wait(1).to({y:36.6,alpha:0.37},0).wait(1).to({y:36.2,alpha:0.463},0).wait(1).to({y:35.8,alpha:0.543},0).wait(1).to({y:35.5,alpha:0.61},0).wait(1).to({y:35.3,alpha:0.666},0).wait(1).to({y:35.1,alpha:0.714},0).wait(1).to({y:34.9,alpha:0.755},0).wait(1).to({y:34.7,alpha:0.791},0).wait(1).to({y:34.6,alpha:0.821},0).wait(1).to({y:34.5,alpha:0.848},0).wait(1).to({y:34.4,alpha:0.872},0).wait(1).to({y:34.3,alpha:0.892},0).wait(1).to({y:34.2,alpha:0.91},0).wait(1).to({y:34.1,alpha:0.926},0).wait(1).to({alpha:0.94},0).wait(1).to({y:34,alpha:0.952},0).wait(1).to({alpha:0.962},0).wait(1).to({y:33.9,alpha:0.971},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.984},0).wait(1).to({y:33.8,alpha:0.989},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(1).to({regX:134.1,regY:19,x:239.6,y:20.3},0).wait(48).to({regX:-44.1,regY:49.8,x:161.3,y:33.8,alpha:0.999},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.991},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.983},0).wait(1).to({y:33.9,alpha:0.971},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.956},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.936},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:34,alpha:0.91},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.877},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:34.1,alpha:0.835},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:34.2,alpha:0.779},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:34.4,alpha:0.707},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:161.4,y:34.6,alpha:0.615},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:34.8,alpha:0.505},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:161.5,y:35,alpha:0.395},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:35.2,alpha:0.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:35.4,alpha:0.226},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:35.5,alpha:0.169},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:35.6,alpha:0.125},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.091},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:161.6,y:35.7,alpha:0.065},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:35.8,alpha:0.045},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.029},0).wait(1).to({alpha:0.018},0).wait(1).to({scaleX:0.51,scaleY:0.51,alpha:0.009},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:134.2,regY:19,x:251.7,y:20.3,alpha:0},0).wait(215));

	// Layer_2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.7,24.7,0.44,0.44,0,0,0,181.8,19);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:321.6,regY:5.5,x:161.2,y:18.7,alpha:0.005},0).wait(1).to({y:18.6,alpha:0.023},0).wait(1).to({y:18.4,alpha:0.06},0).wait(1).to({y:18.2,alpha:0.124},0).wait(1).to({y:17.7,alpha:0.218},0).wait(1).to({y:17.2,alpha:0.331},0).wait(1).to({y:16.8,alpha:0.439},0).wait(1).to({y:16.4,alpha:0.53},0).wait(1).to({y:16,alpha:0.606},0).wait(1).to({y:15.8,alpha:0.668},0).wait(1).to({y:15.5,alpha:0.72},0).wait(1).to({y:15.3,alpha:0.764},0).wait(1).to({y:15.2,alpha:0.802},0).wait(1).to({y:15,alpha:0.834},0).wait(1).to({y:14.9,alpha:0.862},0).wait(1).to({y:14.8,alpha:0.886},0).wait(1).to({y:14.7,alpha:0.906},0).wait(1).to({y:14.6,alpha:0.924},0).wait(1).to({alpha:0.939},0).wait(1).to({y:14.5,alpha:0.952},0).wait(1).to({alpha:0.964},0).wait(1).to({y:14.4,alpha:0.973},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.987},0).wait(1).to({y:14.3,alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(1).to({regX:181.8,regY:19,x:99.7,y:20.3},0).wait(78).to({regX:321.6,regY:5.5,x:161.2,y:14.3,alpha:0.999},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.991},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.983},0).wait(1).to({x:161.1,alpha:0.971},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:161.2,alpha:0.956},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.936},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:14.2,alpha:0.91},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.877},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.835},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:14.1,alpha:0.779},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:161.3,y:14,alpha:0.707},0).wait(1).to({scaleX:0.47,scaleY:0.47,alpha:0.615},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:13.9,alpha:0.505},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:13.8,alpha:0.395},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:161.4,y:13.7,alpha:0.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:13.6,alpha:0.226},0).wait(1).to({scaleX:0.49,scaleY:0.49,alpha:0.169},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.125},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:13.5,alpha:0.091},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.065},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:161.5,alpha:0.045},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:13.4,alpha:0.029},0).wait(1).to({alpha:0.018},0).wait(1).to({scaleX:0.51,scaleY:0.51,y:13.5,alpha:0.009},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:181.6,regY:19,x:90.8,y:20.3,alpha:0},0).wait(211));

	// blue grad
	this.instance_4 = new lib.grad();
	this.instance_4.parent = this;
	this.instance_4.setTransform(226.3,19.6,0.44,0.44,0,0,0,215.5,46.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(113).to({_off:false},0).to({alpha:1},24).wait(211));

	// photo
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(172.6,20.2,0.44,0.44,0,0,0,337.6,45.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112).to({_off:false},0).wait(1).to({regX:270.1,regY:53.5,x:142.9,y:23.9,alpha:0.001},0).wait(1).to({x:142.8,alpha:0.003},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.014},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.023},0).wait(1).to({x:142.7,alpha:0.035},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.05},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:142.6,y:24,alpha:0.069},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.093},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:142.5,alpha:0.124},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:142.4,alpha:0.162},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:142.2,y:24.1,alpha:0.211},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:142,alpha:0.273},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:141.8,alpha:0.35},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:141.5,y:24.2,alpha:0.444},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:141.1,alpha:0.546},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:140.8,alpha:0.641},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:140.5,y:24.3,alpha:0.721},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:140.3,alpha:0.784},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:140.2,alpha:0.834},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:140,alpha:0.874},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:139.9,alpha:0.905},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.93},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:139.8,alpha:0.949},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:24.4,alpha:0.965},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:139.7,alpha:0.977},0).wait(1).to({alpha:0.986},0).wait(1).to({y:24.3,alpha:0.992},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:24.4,alpha:0.997},0).wait(1).to({x:139.6,alpha:0.999},0).wait(1).to({regX:337.6,regY:44.8,x:172.6,y:20.2,alpha:1},0).to({regX:337.4,scaleX:0.55,scaleY:0.55,x:172.5},204).wait(1));

	// bg
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,19.8,0.44,0.44,0,0,0,364,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},280).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,320,50.7);
// library properties:
lib.properties = {
	id: '2A02497E1FBF40D6821484D518ACB558',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_ab_ref_atlas_.png", id:"728x90_ab_ref_atlas_"}
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
an.compositions['2A02497E1FBF40D6821484D518ACB558'] = {
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