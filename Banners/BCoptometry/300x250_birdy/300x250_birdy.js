(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_birdy_atlas_", frames: [[0,233,318,67],[0,0,310,231]]}
];


// symbols:



(lib.docBC = function() {
	this.spriteSheet = ss["300x250_birdy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.volcanoman = function() {
	this.spriteSheet = ss["300x250_birdy_atlas_"];
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.docBC();
	this.instance.parent = this;
	this.instance.setTransform(-142,-30,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-30,286.2,60.3);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAOIgFgDIgDgFIgBgGIABgFIADgEIAFgEIAFgCIAGACIAFAEIADAEIABAFIgBAGIgDAFIgFADIgGACg");
	this.shape.setTransform(68.9,120.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_1.setTransform(61.8,114.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAfIAWhDIAYAKIgdA+g");
	this.shape_2.setTransform(53.7,107.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgHgHQgIgHgMAAQgHAAgIADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAHADQAJADAFAFQAGAGADAIQACAJAAALIAAA6IARAAIAAAUg");
	this.shape_3.setTransform(42.2,115.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_4.setTransform(28.4,116);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_5.setTransform(18.9,113.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0A+IAAgUIARAAIAAg3QAAgOgHgHQgHgHgNAAQgIAAgIAEQgIADgHAGIAABGIARAAIAAAUIg3AAIAAgUIARAAIAAg3QAAgOgHgHQgIgHgMAAQgJAAgHADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIALgBQANAAAJAFQAJAFAGAKIAJgHIAKgHIALgEQAGgCAGAAQAKAAAIADQAIADAGAFQAFAGADAIQADAJgBALIAAA6IASAAIAAAUg");
	this.shape_6.setTransform(-2.3,115.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_7.setTransform(-21.1,116);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA9IAAgUIAGAAIgYgeIgWAeIAGAAIAAAUIgpAAIAAgUIAKAAIAlgqIgigmIgNAAIAAgVIApAAIAAAVIgFAAIAVAcIAXgcIgGAAIAAgVIAoAAIAAAVIgKAAIgiAnIAkApIAJAAIAAAUg");
	this.shape_8.setTransform(-33.8,116);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgEgMQgFgLAAgQQAAgNAEgLQADgMAIgJQAHgIALgFQALgFANAAQANAAAJAEQAJAFAHAGQAFAHADAJQADAJABAJIABAJIAAAIIhWAAIABAJIACAIQAEAMAKAGQAJAGALgBQAKABAJgDQAIgDAKgFIAJAPQgMAIgMAEQgMAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgGgCQgFgDgIAAQgHAAgGADQgFACgEADQgEAFgDAFQgCAGgBAIIA+AAg");
	this.shape_9.setTransform(-47.3,116);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_10.setTransform(141.9,87.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_11.setTransform(131.6,89);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_12.setTransform(122.2,86.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_13.setTransform(112.5,88.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_14.setTransform(102.5,87.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgHgHQgIgJgFgMQgDgLAAgQQAAgNADgLQADgMAIgJQAHgIAKgFQALgFANAAQAOAAAKAEQAIAFAGAGQAGAHADAJQADAJACAJIAAAJIAAAIIhWAAIAAAJIADAIQAEAMAJAGQAKAGAMgBQAJABAJgDQAJgDAKgFIAJAPQgMAIgNAEQgMAEgNAAQgLAAgKgEgAAfgNIgCgNQgCgGgDgEQgEgEgFgCQgGgDgIAAQgHAAgFADQgGACgEADQgEAFgCAFQgDAHgBAHIA+AAg");
	this.shape_15.setTransform(90.9,89);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA0A+IAAgUIARAAIAAg3QAAgOgHgHQgHgHgOAAQgHAAgIAEQgIADgHAGIAABGIARAAIAAAUIg3AAIAAgUIARAAIAAg3QAAgOgHgHQgHgHgNAAQgIAAgIADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIALgBQANAAAKAFQAIAFAGAKIAJgHIAKgHIALgEQAGgCAGAAQAKAAAIADQAIADAGAFQAFAGADAIQACAJAAALIAAA6IASAAIAAAUg");
	this.shape_16.setTransform(72.3,88.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_17.setTransform(53,89);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_18.setTransform(41.5,87.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/BaIAAgUIARAAIAAiHIgRAAIAAgVIAmAAIAAAKQAIgGAJgDQAIgEAKAAQAMAAAKAFQAKAEAHAIQAHAIAEAMQAEALAAAOQAAAOgEANQgFALgHAIQgIAJgLAFQgLAEgNAAQgIAAgIgBIgNgFIAAAnIATAAIAAAUgAgLhCQgIADgFAGIAABBQADAEAIADQAHADAKAAQAHAAAHgCQAHgDAFgGQAGgGADgIQADgIAAgLQAAgLgDgIQgDgIgFgFQgFgGgHgCQgHgDgIAAQgHAAgIADg");
	this.shape_19.setTransform(29.6,91.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_20.setTransform(15.2,89);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgHgHQgIgHgNAAQgGAAgIADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAHADQAJADAFAFQAFAGAEAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_21.setTransform(-5.1,88.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_22.setTransform(-19.9,89);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNBYIgNgDIgNgFQgHgDgFgFIALgSIAIAGIAKAEIALAEIALABQAIAAAGgCQAHgDAEgEQAFgFACgIQACgIAAgNIAAgBQgGAGgIADQgIAEgKAAQgLAAgLgEQgLgFgHgHQgIgJgFgMQgEgLAAgQQAAgNAEgMQAEgLAIgJQAIgIALgEQALgFAMAAQAJAAAIADQAHACAHAEIAAgGIAWAAIAAB0QAAAcgOAPQgOAPgcAAgAgJhBQgHACgFAGQgFAFgDAIQgDAIAAAKQAAALACAJQADAIAFAGQAFAFAHAEQAHACAIAAIAKgBIAIgCIAGgFIAFgEIAAhBQgGgGgIgCQgIgCgIgBQgHABgGADg");
	this.shape_23.setTransform(-38.9,91.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgHgHQgIgHgMAAQgIAAgHADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAHADQAJADAFAFQAGAGADAIQACAJAAALIAAA6IARAAIAAAUg");
	this.shape_24.setTransform(-53.5,88.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_25.setTransform(-65.2,86.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AApBbIgwg2IgQAAIAAAiIAKAAIAAAUIg0AAIAAgUIAUAAIAAiNIgVAAIAAgUIArAAIAAAUIAABaIAVAAIAbgdIgHAAIAAgUIAuAAIAAAUIgPAAIglAlIAoArIAPAAIAAAUg");
	this.shape_26.setTransform(-76.5,85.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_27.setTransform(-91.5,89);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_28.setTransform(-105.9,89);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhBBZIAAgUIAQAAIAAiJIgQAAIAAgUIBOABQALAAAKADQAJAFAHAHQAHAGAEAKQAEAKAAALQAAAKgGAKQgGAKgMAFQAGACAEAEQAFAEADAFQAEAFACAFIABALQAAALgEAKQgEAJgHAIQgHAHgJAEQgKAEgLAAgAgaBFIApAAQAFAAAFgDIAJgHQADgFACgGQACgFAAgGQAAgFgCgFQgCgFgDgEIgJgGQgFgCgFAAIgpAAgAgagJIAoAAQAFgBAFgCQAFgCAEgDQADgEACgFQACgFAAgFQAAgGgCgGQgCgFgDgFQgEgEgFgDQgFgDgFAAIgoAAg");
	this.shape_29.setTransform(-120.4,86.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-130.8,70,279.3,60), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAOIgFgDIgDgFIgBgGIABgFIADgEIAFgEIAFgCIAGACIAFAEIADAEIABAFIgBAGIgDAFIgFADIgGACg");
	this.shape.setTransform(114,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBYQgLgEgIgIQgIgIgEgMQgEgNAAgPQAAgOAEgLQAEgLAIgIQAHgJALgEQALgFAOABQAHAAAIACQAHABAHAGIAAgvIgRAAIAAgVIAmAAIAACiIASAAIAAAUIgnAAIAAgKQgGAGgIADQgIAEgJAAQgMAAgKgFgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAJQADAIAFAGQAFAGAHADQAHADAIAAQAJAAAHgDQAGgDAGgGIAAhCQgGgFgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_1.setTransform(104,85.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_2.setTransform(90.8,87.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_3.setTransform(78.5,88);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMBbIAAgUIAQAAIAAg3QAAgOgHgGQgHgIgNAAQgHAAgHAEQgIADgHAFIAABHIASAAIAAAUIg6AAIAAgUIASAAIAAiNIgQAAIAAgUIAmAAIAABKIABAAIAHgGIAJgFIAKgDIAKgBQAJAAAIACQAIADAFAGQAGAFADAJQADAHAAAMIAAA6IASAAIAAAUg");
	this.shape_4.setTransform(64.4,84.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_5.setTransform(45.2,88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_6.setTransform(35.8,85.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBYIgNgDIgNgFQgHgDgFgFIALgSIAIAGIAKAEIALAEIALABQAIAAAGgDQAHgBAEgFQAFgFACgIQACgIAAgMIAAgCQgGAGgIAEQgIADgKAAQgLAAgLgEQgLgEgHgJQgIgIgFgMQgEgLAAgQQAAgNAEgMQAEgLAIgJQAIgIALgEQALgFAMAAQAJAAAIACQAHADAHAEIAAgGIAWAAIAABzQAAAegOAOQgOAPgcAAgAgJhBQgHACgFAGQgFAFgDAIQgDAIAAAKQAAALACAJQADAIAFAGQAFAFAHAEQAHACAIAAIAKgBIAIgCIAGgFIAFgEIAAhCQgGgFgIgCQgIgDgIAAQgHAAgGAEg");
	this.shape_7.setTransform(19.2,90.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgHgHQgIgHgMAAQgIAAgHADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAHADQAJADAFAFQAGAGADAIQACAJAAALIAAA6IARAAIAAAUg");
	this.shape_8.setTransform(4.5,87.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_9.setTransform(-7.2,85.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_10.setTransform(-15.6,86.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALA+IAAgUIASAAIAAg3QAAgOgIgHQgGgHgOAAQgHAAgHADQgIAEgGAFIAABHIARAAIAAAUIg6AAIAAgUIARAAIAAhQIgRAAIAAgVIAoAAIAAAPIAIgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAFAGADAIQADAJABALIAAA6IAQAAIAAAUg");
	this.shape_11.setTransform(-28,87.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgHgHQgIgJgFgMQgDgMAAgPQAAgNADgLQADgMAIgJQAHgIAKgFQALgFANAAQAOAAAKAEQAIAEAGAHQAGAHADAJQADAJACAJIAAAJIAAAIIhWAAIAAAJIADAIQAEAMAJAGQAKAFAMAAQAJABAJgDQAJgCAKgGIAJAPQgMAIgNAEQgMAEgNAAQgLAAgKgEgAAfgNIgCgNQgCgGgDgEQgEgEgFgDQgGgCgIAAQgHAAgFACQgGADgEADQgEAEgCAGQgDAHgBAHIA+AAg");
	this.shape_12.setTransform(-43.2,88);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_13.setTransform(-55.5,87.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_14.setTransform(-67.8,88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BZIAAgUIAQAAIAAiJIgQAAIAAgUIBGAAQAMAAAKADQAKADAIAGQAHAGAEAJQAEAJAAAMQAAAKgEAJQgEAIgHAHQgHAGgLADQgKADgMAAIgfAAIAAA/IASAAIAAAUgAgXgMIAfAAQAHAAAGgBQAFgCAEgEQAEgDADgGQACgFAAgHQAAgNgIgHQgIgIgSAAIgcAAg");
	this.shape_15.setTransform(-81,85.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-91.1,69,209.9,33), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.volcanoman();
	this.instance.parent = this;
	this.instance.setTransform(-607,174,1.181,1.181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-607,174,366.2,272.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBaIgFgDIgDgFIgCgGIACgGIADgEIAFgEIAGgBIAGABIADAEIAEAEIABAGIgBAGIgEAFIgDADIgGACgAgUAzIABgVQABgIADgHQACgHAEgGIALgKIALgJIAJgIQADgDACgEQACgFAAgGQAAgFgCgFQgCgFgDgEIgJgGQgFgCgFAAQgJAAgGADQgGADgEAFQgEAEgCAGIgBAIIgVgBQABgKAEgJQAEgIAHgHQAHgHAKgEQAJgEALAAQALAAAKAEQAJAEAGAHQAGAGADAJQADAIAAAJQAAAMgGAKQgGAKgMAJIgMAJQgIAGgDAJQgDAJAAAGIgBAPg");
	this.shape.setTransform(254,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBbIAAgUIASAAIAAiNIgSAAIAAgUIAmAAIAAChIATAAIAAAUg");
	this.shape_1.setTransform(243.6,41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_2.setTransform(232.9,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_3.setTransform(222.1,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_4.setTransform(214,42.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgIgJQgIgIgEgMQgEgMAAgOQAAgNAEgMQAFgLAIgJQAIgIAKgGQALgEALAAQAMAAAKADQAKAFAIAIIAMAAIAAAUIgWAAQgFgJgHgEQgIgEgKAAQgGAAgHADQgHADgFAGQgFAGgDAJQgDAIAAAJQAAAKADAIQADAJAFAGQAFAFAHAEQAHADAGAAQALgBAJgFQAIgGAFgKIASAJQgEAIgFAFQgFAGgGAEQgHAFgIACQgHADgJgBQgMAAgKgEg");
	this.shape_5.setTransform(203.5,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgEgLQgFgMAAgQQABgNADgLQADgMAIgJQAHgIALgFQALgFANAAQANAAAJAEQAJAFAHAGQAFAHADAJQADAIABAKIABAJIAAAIIhWAAIABAJIACAIQAEAMAJAGQAKAGAMgBQAJAAAJgCQAIgDAKgFIAJAPQgMAIgMAEQgMAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgFgDgFQgEgEgFgCQgGgDgIAAQgHAAgFADQgGACgEADQgEAFgDAFQgCAGgBAIIA+AAg");
	this.shape_6.setTransform(189.7,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_7.setTransform(177.4,44.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgHgHQgIgJgEgLQgFgMAAgQQABgNADgLQAEgMAHgJQAHgIALgFQAKgFANAAQAOAAAKAEQAIAFAHAGQAFAHADAJQADAIABAKIABAJIAAAIIhWAAIABAJIACAIQAEAMAJAGQAKAGAMgBQAJAAAJgCQAIgDALgFIAJAPQgNAIgMAEQgMAEgNAAQgLAAgKgEgAAfgNIgCgNQgCgFgDgFQgEgEgFgCQgGgDgIAAQgHAAgFADQgGACgEADQgEAFgDAFQgCAGgBAIIA+AAg");
	this.shape_8.setTransform(159.5,45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMBbIAAgUIAQAAIAAg3QAAgOgHgGQgHgIgNAAQgHAAgHAEQgIADgHAFIAABHIASAAIAAAUIg6AAIAAgUIASAAIAAiNIgQAAIAAgUIAmAAIAABKIABAAIAHgGIAJgFIAKgDIAKgBQAJAAAIACQAIADAFAGQAGAFADAJQADAHAAAMIAAA6IASAAIAAAUg");
	this.shape_9.setTransform(145.1,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_10.setTransform(132.6,43.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_11.setTransform(117.2,44.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_12.setTransform(104.4,45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrBbIAAgUIASAAIAAhSIgUAAIAAgSIAUAAIAAgTQAAgLADgIQADgHAFgGQAFgFAIgDQAGgCAJAAIALAAIAJACIAHACIAFADIgHAPIgJgDQgHgCgGAAQgKAAgFAGQgFAGAAAMIAAAUIAbAAIAAASIgbAAIAABSIASAAIAAAUg");
	this.shape_13.setTransform(94.2,41.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_14.setTransform(78.9,43.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_15.setTransform(70.8,42.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrBbIAAgUIASAAIAAhSIgUAAIAAgSIAUAAIAAgTQAAgLADgIQADgHAFgGQAFgFAIgDQAGgCAJAAIALAAIAJACIAHACIAFADIgHAPIgJgDQgHgCgGAAQgKAAgFAGQgFAGAAAMIAAAUIAbAAIAAASIgbAAIAABSIASAAIAAAUg");
	this.shape_16.setTransform(63.7,41.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_17.setTransform(53.7,43.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_18.setTransform(40.6,45.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_19.setTransform(26.1,45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglBYIAAgUIAPAAIAMghIgohmIgKAAIAAgUIAuAAIAAAUIgOAAIAcBMIAdhMIgOAAIAAgUIAuAAIAAAUIgNAAIg1CHIAQAAIAAAUg");
	this.shape_20.setTransform(229.9,21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBZQgLgFgIgIQgIgJgEgLQgEgMAAgQQAAgOAEgMQAEgKAIgIQAHgJALgEQALgEAOgBQAHAAAIACQAHADAHAEIAAguIgRAAIAAgUIAmAAIAAChIASAAIAAAUIgnAAIAAgKQgGAGgIAEQgIACgJAAQgMAAgKgDgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAIQADAKAFAFQAFAGAHADQAHACAIAAQAJAAAHgCQAGgDAGgGIAAhDQgGgEgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_21.setTransform(216.1,16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_22.setTransform(202.8,18.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_23.setTransform(193.6,16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLBaQgIgDgFgEIAAAHIgWAAIAAihIgSAAIAAgUIAoAAIAABHQAIgGAJgEQAIgDAKAAQAMAAAJAEQAKAFAIAIQAHAIAEAKQAEAMAAANQAAAPgFAMQgEAMgIAIQgIAJgLAFQgLAEgNAAQgIAAgIgCgAgLgKQgHADgGAGIAABAQAEAEAHADQAHADAKAAQAIAAAHgDQAGgCAGgGQAFgGADgIQADgJAAgLQAAgKgDgIQgDgIgFgFQgFgFgHgDQgGgDgIAAQgIAAgIAEg");
	this.shape_24.setTransform(182.1,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_25.setTransform(163,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcBZQgLgFgIgIQgIgJgEgLQgEgMAAgQQAAgOAEgMQAEgKAIgIQAHgJALgEQALgEAOgBQAHAAAIACQAHADAHAEIAAguIgRAAIAAgUIAmAAIAAChIASAAIAAAUIgnAAIAAgKQgGAGgIAEQgIACgJAAQgMAAgKgDgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAIQADAKAFAFQAFAGAHADQAHACAIAAQAJAAAHgCQAGgDAGgGIAAhDQgGgEgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_26.setTransform(144.1,16.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgIgFgMQgDgMAAgQQgBgMAEgMQADgMAIgIQAHgJAKgFQAMgFAMAAQAOAAAKAEQAIAFAGAGQAGAHADAJQADAIACAKIAAAJIABAIIhXAAIAAAJIADAIQAEAMAKAGQAJAGALgBQAKAAAJgCQAJgDAJgFIAJAPQgLAIgMAEQgNAEgNAAQgLAAgLgEgAAfgOIgCgMQgCgGgEgEQgDgEgGgCQgFgDgIAAQgGAAgHADQgFABgEAEQgEAFgCAGQgDAFgBAHIA+AAg");
	this.shape_27.setTransform(129.4,19);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgHgHQgIgIgFgMQgDgMAAgQQAAgMADgMQADgMAIgIQAHgJAKgFQALgFANAAQAOAAAKAEQAIAFAGAGQAGAHADAJQADAIACAKIAAAJIAAAIIhWAAIAAAJIADAIQAEAMAJAGQAKAGAMgBQAJAAAJgCQAJgDAKgFIAJAPQgMAIgNAEQgMAEgNAAQgLAAgKgEgAAfgOIgCgMQgCgGgDgEQgEgEgFgCQgGgDgIAAQgHAAgFADQgGABgEAEQgEAFgCAGQgDAFgBAHIA+AAg");
	this.shape_28.setTransform(115.6,19);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgHgHQgIgHgNAAQgGAAgIADQgIAEgHAFIAABHIASAAIAAAUIg5AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAHADQAJADAFAFQAFAGAEAIQACAJAAALIAAA6IASAAIAAAUg");
	this.shape_29.setTransform(101.1,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_30.setTransform(79.2,19.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_31.setTransform(64.7,19);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdBZIAAgUIARAAIAAg/IgvhKIgPAAIAAgUIA6AAIAAAUIgQAAIAgA5IAjg5IgSAAIAAgUIA6AAIAAAUIgQAAIgyBLIAAA+IATAAIAAAUg");
	this.shape_32.setTransform(49.9,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(17,0,245,59), null);


(lib.shaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHCDIgHgFIgFgIIgCgIIACgIIAFgHIAHgFIAIgBIAIABIAGAFIAFAHIABAIIgBAIIgFAIIgGAFIgIABgAgOA+IgHjBIAqAAIgGDBg");
	this.shape.setTransform(164.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCAIgHgFIgEgHIgDgIIADgIIAEgHIAHgFIAJgCIAIACIAGAFIAEAHIACAIIgCAIIgEAHIgGAFIgIACgAgcBIIABgdQABgMAEgKQADgKAGgIIAQgPIAQgNIAMgKQAFgGADgGQACgGAAgIQAAgIgCgHQgDgHgFgFQgFgGgHgDQgIgDgHAAQgNAAgJAEQgIAFgGAHQgFAGgDAIIgCAMIgegCQACgOAFgMQAGgNAKgJQAKgKAOgFQAOgGAPAAQARAAAMAGQANAFAJAJQAIAJAFANQAFAMAAANQAAARgJAOQgJAOgQAMIgSANQgKAJgFANQgEAMAAAJIgBAVg");
	this.shape_1.setTransform(150.8,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBXIAAgcIAYAAIAAhOQAAgTgKgKQgKgLgTAAQgKAAgLAFQgLAGgKAHIAABkIAZAAIAAAcIhRAAIAAgcIAYAAIAAhyIgYAAIAAgcIA3AAIAAAUIAMgKIANgHIAOgFIAPgBQAOAAALADQALAEAIAIQAIAHAEANQAEAMAAARIAABRIAYAAIAAAcg");
	this.shape_2.setTransform(130.2,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBVQgPgGgMgMQgKgLgGgRQgGgRAAgWQAAgSAFgRQAFgQALgMQAKgMAPgIQAPgHATAAQATAAANAGQANAGAJAKQAHAJAFANQAEAMACANIABANIAAAMIh7AAIABANIADAMQAHAQANAJQANAIARAAQANAAANgEQAMgDAPgIIAMAVQgRALgRAGQgRAGgSAAQgRAAgOgGgAAsgTIgDgSQgDgIgEgGQgFgGgIgEQgIgDgMAAQgJAAgIADQgIADgGAGQgGAGgDAIQgDAIgCALIBYAAg");
	this.shape_3.setTransform(108.6,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARCBIAAgcIAXAAIAAhPQAAgUgKgJQgKgKgTAAQgJAAgLAFQgLAFgKAHIAABlIAZAAIAAAcIhSAAIAAgcIAaAAIAAjJIgXAAIAAgcIA2AAIAABpIABAAIALgIIAMgIIAOgEIAOgCQAOAAALAEQALAEAIAIQAHAHAFANQAEALAAAQIAABTIAaAAIAAAcg");
	this.shape_4.setTransform(88.4,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBXIgniIIgmCIIgdAAIgviRIgOAAIAAgcIA2AAIAAAcIgIAAIAeBtIApiJIAZAAIAoCJIAfhtIgKAAIAAgcIA2AAIAAAcIgOAAIgwCRg");
	this.shape_5.setTransform(63,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1B9IAAgdIAVAAIASguIg5iRIgOAAIAAgdIBBAAIAAAdIgUAAIAoBtIAphtIgUAAIAAgdIBBAAIAAAdIgSAAIhLC/IAWAAIAAAdg");
	this.shape_6.setTransform(31.9,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQB/QgLgEgIgGIAAALIgeAAIAAjlIgZAAIAAgcIA3AAIAABkQALgIANgFQAMgFAOAAQARAAAOAGQAOAHALALQAKALAFAQQAFAQAAATQABAVgHARQgGAQgLAMQgLAMgPAHQgQAGgSABQgMgBgMgDgAgQgPQgLAFgIAJIAABbQAFAGALAEQAKAEAPAAQAKAAAKgEQAKgEAIgIQAHgIAEgMQAFgMAAgQQAAgPgFgLQgEgLgGgHQgIgIgKgEQgKgEgKAAQgLAAgMAFg");
	this.shape_7.setTransform(12.1,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shaker, new cjs.Rectangle(0,0,172.7,45.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAvQgGgCgEgDIgEgGIgDgIQgBgEAAgGIACgMIAJgmIgNAAIADgPIAgAAIgLAvQgFARAEAIQAEAIAMAAQAFAAAEgCIAHgEIAGgIIAMgzIgNAAIAEgPIAfAAIgSBOIAOAAIgEAQIggAAIACgKIgGAGIgGADIgHACIgGAAQgHAAgFgBg");
	this.shape.setTransform(181.9,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAvQgIgEgGgFQgGgGgDgIQgDgIAAgJQAAgIACgGQACgIAEgHQADgFAGgGQAFgFAFgEQAHgDAHgDQAHgCAGAAQAKABAIADQAIADAGAGQAGAGAEAIQADAIAAAJQAAAHgCAHQgCAHgEAHQgDAGgGAGQgFAFgGAEQgGADgHACQgIACgGAAQgJAAgJgDgAgHgfQgHAEgFAFQgFAFgDAIQgDAHAAAHQAAAHACAFQACAGADADQAEAEAFACQAEACAGAAQAGAAAHgDQAFgDAGgFQAEgGAEgHQADgHAAgIQgBgHgBgEQgCgGgEgDQgEgEgEgCQgFgCgGAAQgFAAgGACg");
	this.shape_1.setTransform(170.2,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag3BGIAEgRIAJAAIARgaIgKhQIgJAAIADgPIAjAAIgDAPIgIAAIAGA6IAlg6IgIAAIAEgPIAiAAIgDAPIgIAAIhEBqIAKAAIgEARg");
	this.shape_2.setTransform(159.3,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAwIAThOIgTAAIAFgQIAjAAIgDANIAFgGIAGgEIAHgDIAHgBIAGAAIAFAAIAHABIgFAaIgTAAIADgLQgKAAgGAEQgFAFgEAHIgLAvIAQAAIgEAQg");
	this.shape_3.setTransform(145.2,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAvQgHgDgFgFQgFgGgDgHQgDgHAAgIQAAgNAFgLQAFgLAHgIQAJgIAKgEQALgFAMAAQAHAAAFACQAGACAFAEIABgFIASAAIgSBOIAOAAIgDAQIgiAAIACgGQgHAEgFACQgGACgGAAQgIAAgHgDgAgGgeQgHADgFAFQgGAGgDAIQgDAIAAAJQAAAGABAFQABAEADADQADAEAFABQAEACAFAAIAHgBIAGgCIAFgDIAGgDIALgzQgCgDgFgCQgFgCgIAAQgHAAgGADg");
	this.shape_4.setTransform(133.7,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAwQgIgDgFgGQgHgGgCgIQgEgIAAgKQAAgLAEgLQAEgKAIgIQAHgIAKgEQALgFALAAQAIAAAIADQAHADAFAGQAFAFADAGQACAHAAAHIAAAJIgBAHIhJAAIAAACIAAACQAAAGACAFQACAFADAEQADADAFACQAEACAGAAQAGAAAHgDQAGgDAFgFIAOAKIgHAHIgKAGQgFACgGABIgMACQgIAAgIgDgAgEggQgEABgEAEQgEADgDAEQgDAEgCAFIA1AAQAAgFgBgFQgCgEgDgDQgDgDgFgCQgEgBgFAAQgGAAgEACg");
	this.shape_5.setTransform(122.6,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAxIANg6QADgLgEgGQgFgFgKAAQgHAAgFADQgHADgGAFIgQBFIgSAAIAShPIgSAAIAEgQIAkAAIgDAKQAHgGAHgDQAIgDAIAAQAIAAAGADQAFACAEAEQAEAFABAHQABAGgCAJIgKAtIANAAIgDAQg");
	this.shape_6.setTransform(110.5,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAwQgIgDgFgGQgHgGgCgIQgEgIAAgKQAAgLAFgLQAEgKAHgIQAHgIALgEQAJgFALAAQAJAAAIADQAHADAFAGQAFAFACAGQADAHAAAHIAAAJIgCAHIhIAAIgBACIAAACQAAAGACAFQADAFADAEQADADAFACQAFACAFAAQAHAAAGgDQAHgDAEgFIAOAKIgHAHIgKAGQgFACgHABIgKACQgKAAgHgDgAgDggQgFABgEAEQgEADgDAEQgEAEgBAFIA1AAQAAgFgBgFQgCgEgDgDQgDgDgFgCQgEgBgFAAQgGAAgDACg");
	this.shape_7.setTransform(94.9,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAxIANg6QADgLgEgGQgFgFgKAAQgHAAgFADQgHADgGAFIgQBFIgSAAIAShPIgSAAIAEgQIAkAAIgDAKQAHgGAHgDQAIgDAIAAQAIAAAGADQAFACAEAEQAEAFABAHQABAGgCAJIgKAtIANAAIgDAQg");
	this.shape_8.setTransform(82.8,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAvQgHgEgGgFQgHgGgDgIQgDgIAAgJQAAgIACgGQACgIADgHQAEgFAGgGQAEgFAGgEQAHgDAHgDQAHgCAGAAQAKABAIADQAIADAGAGQAGAGAEAIQADAIAAAJQAAAHgDAHQgCAHgDAHQgDAGgGAGQgFAFgGAEQgGADgHACQgIACgGAAQgJAAgJgDgAgHgfQgHAEgFAFQgFAFgDAIQgDAHAAAHQAAAHACAFQACAGADADQAEAEAEACQAFACAGAAQAGAAAHgDQAGgDAFgFQAFgGADgHQACgHAAgIQAAgHgBgEQgCgGgEgDQgDgEgFgCQgFgCgGAAQgFAAgGACg");
	this.shape_9.setTransform(70.9,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBFQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgMAEgLQAFgKAIgIQAHgIALgEQAKgFALAAQAHAAAHACIALAGIAIglIgQAAIAEgQIAiAAIgdB/IAQAAIgEAQIgiAAIABgGIgKAFQgGADgGAAQgIAAgIgEgAgNgIQgHADgFAFQgFAFgDAIQgDAHAAAKQAAAGACAFQABAFAEADQADAEAEACQAFACAFAAQAGAAAGgDQAFgDAFgFIAMgwQgDgEgGgCQgFgCgIAAQgGAAgHACg");
	this.shape_10.setTransform(55.3,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAxIANg6QADgLgEgGQgFgFgKAAQgHAAgFADQgHADgGAFIgQBFIgSAAIAShPIgSAAIAEgQIAkAAIgDAKQAHgGAHgDQAIgDAIAAQAIAAAGADQAFACAEAEQAEAFABAHQABAGgCAJIgKAtIANAAIgDAQg");
	this.shape_11.setTransform(42.7,24.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXBHIAThPIgSAAIAFgQIAiAAIgSBPIAPAAIgDAQgAAGguIgDgDIgDgEIAAgFIAAgEIADgEIADgDIAGgBIAEABIAEADIACAEIABAEIgBAFIgCAEIgEADIgEABg");
	this.shape_12.setTransform(33.4,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBfIAdh7IgUAAIAEgPIATAAIAEgRQACgKAEgGQAEgGAEgEQAFgEAGgCQAGgCAIAAIAIABIAGABIAGACIAEACIgKAOIgGgCIgJgBQgIAAgFADQgFAFgCAKIgEAQIAaAAIgEAPIgZAAIgcB7g");
	this.shape_13.setTransform(27.5,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("A1DjFMAqHAAAIAAGLMgqHAAAg");
	this.shape_14.setTransform(103.5,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-32.2,2.2,271.5,41.6), null);


(lib.doclogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(142,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.doclogo, new cjs.Rectangle(0,0,286.2,60.3), null);


(lib.bywhen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shaker();
	this.instance.parent = this;
	this.instance.setTransform(86.3,22.5,1,1,0,0,0,86.3,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bywhen, new cjs.Rectangle(0,0,172.7,45.1), null);


// stage content:
(lib._300x250_birdy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(152.5,-33.5,1,1,0,0,0,105.5,22);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(311).to({_off:false},0).wait(1).to({regX:103.5,regY:22.9,x:150.5,y:-31.6},0).wait(1).to({y:-28.1},0).wait(1).to({y:-20.3},0).wait(1).to({y:-4.2},0).wait(1).to({y:24.7},0).wait(1).to({y:55.7},0).wait(1).to({y:78},0).wait(1).to({y:93.9},0).wait(1).to({y:105.8},0).wait(1).to({y:115},0).wait(1).to({y:122.3},0).wait(1).to({y:128.3},0).wait(1).to({y:133.2},0).wait(1).to({y:137.2},0).wait(1).to({y:140.4},0).wait(1).to({y:143.1},0).wait(1).to({y:145.3},0).wait(1).to({y:147},0).wait(1).to({y:148.3},0).wait(1).to({y:149.3},0).wait(1).to({y:149.9},0).wait(1).to({y:150.3},0).wait(1).to({regX:105.5,regY:22,x:152.5,y:149.5},0).wait(27));

	// Layer 6
	this.instance_1 = new lib.doclogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(142.1,-95.3,1,1,0,0,0,143.1,30.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(311).to({_off:false},0).wait(1).to({regY:30.1,y:-94.4},0).wait(1).to({y:-90.9},0).wait(1).to({y:-83},0).wait(1).to({y:-66.9},0).wait(1).to({y:-37.7},0).wait(1).to({y:-6.6},0).wait(1).to({y:15.9},0).wait(1).to({y:31.8},0).wait(1).to({y:43.7},0).wait(1).to({y:53},0).wait(1).to({y:60.4},0).wait(1).to({y:66.4},0).wait(1).to({y:71.3},0).wait(1).to({y:75.3},0).wait(1).to({y:78.6},0).wait(1).to({y:81.3},0).wait(1).to({y:83.4},0).wait(1).to({y:85.2},0).wait(1).to({y:86.5},0).wait(1).to({y:87.4},0).wait(1).to({y:88.1},0).wait(1).to({y:88.5},0).wait(1).to({regY:30.2,y:88.7},0).wait(27));

	// Layer 5
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,68,1,1,0,0,0,221.8,32.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).wait(37).to({y:67},0).wait(1).to({regX:14.1,regY:87.6,x:156.3,y:121.9},0).wait(1).to({y:120.7},0).wait(1).to({y:117.4},0).wait(1).to({y:111.9},0).wait(1).to({y:108.2},0).wait(1).to({y:106.1},0).wait(1).to({y:104.8},0).wait(1).to({y:104},0).wait(1).to({y:103.5},0).wait(1).to({y:103.3},0).wait(1).to({regX:221.8,regY:32.4,x:364,y:48},0).wait(75).to({regX:14.1,regY:87.6,x:156.3,y:103.6},0).wait(1).to({y:104.8},0).wait(1).to({y:107.1},0).wait(1).to({y:111},0).wait(1).to({y:116.9},0).wait(1).to({y:126},0).wait(1).to({y:140.6},0).wait(1).to({y:165},0).wait(1).to({y:199.2},0).wait(1).to({y:226},0).wait(1).to({y:242.5},0).wait(1).to({y:253},0).wait(1).to({y:260},0).wait(1).to({y:264.7},0).wait(1).to({y:267.9},0).wait(1).to({y:269.8},0).wait(1).to({y:270.9},0).wait(1).to({regX:221.8,regY:32.4,x:364,y:216},0).to({_off:true},1).wait(38));

	// Layer 4
	this.instance_3 = new lib.bywhen();
	this.instance_3.parent = this;
	this.instance_3.setTransform(653.5,72.6,4,4,6,0,0,86.5,22.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,60.8,1,1,0,0,0,221.8,17.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off:false},0).wait(1).to({regX:84.9,regY:25.5,scaleX:3.94,scaleY:3.94,rotation:5.7,x:634.7,y:82.2},0).wait(1).to({scaleX:3.75,scaleY:3.75,rotation:4.9,x:602,y:79.8},0).wait(1).to({scaleX:3.46,scaleY:3.46,rotation:3.7,x:550.3,y:75.9},0).wait(1).to({scaleX:3.08,scaleY:3.08,rotation:2,x:483.9,y:70.8},0).wait(1).to({scaleX:2.65,scaleY:2.65,rotation:0.2,x:408.7,y:65.1},0).wait(1).to({scaleX:2.21,scaleY:2.21,rotation:-1.7,x:331.9,y:59},0).wait(1).to({scaleX:1.81,scaleY:1.81,rotation:-3.4,x:261.2,y:53.5},0).wait(1).to({scaleX:1.49,scaleY:1.49,rotation:-4.8,x:204.1,y:49},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:-5.7,x:166.8,y:46.1},0).wait(1).to({regX:86.3,regY:22.6,scaleX:1.2,scaleY:1.2,rotation:-6,x:155.3,y:41.6},0).to({_off:true},79).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},16).wait(70).to({regX:9.4,regY:99.6,x:151.6,y:143},0).wait(1).to({y:144.2},0).wait(1).to({y:146.4},0).wait(1).to({y:150},0).wait(1).to({y:155.7},0).wait(1).to({y:164.4},0).wait(1).to({y:178.3},0).wait(1).to({y:201.5},0).wait(1).to({y:234.1},0).wait(1).to({y:259.6},0).wait(1).to({y:275.3},0).wait(1).to({y:285.3},0).wait(1).to({y:292},0).wait(1).to({y:296.5},0).wait(1).to({y:299.5},0).wait(1).to({y:301.4},0).wait(1).to({y:302.3},0).wait(1).to({regX:221.8,regY:17.7,x:364,y:220.8},0).to({_off:true},1).wait(38));

	// Layer 2
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-140.6,45.8,1,1,0,0,0,136.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:139.6,regY:29.1,x:-126.2,y:42.6},0).wait(1).to({x:-112.1,y:42.8},0).wait(1).to({x:-93.9,y:43},0).wait(1).to({x:-69.2,y:43.4},0).wait(1).to({x:-35.8,y:43.8},0).wait(1).to({x:2.4,y:44.4},0).wait(1).to({x:34.6,y:44.8},0).wait(1).to({x:58.3,y:45.1},0).wait(1).to({x:75.9,y:45.4},0).wait(1).to({x:89.5,y:45.6},0).wait(1).to({x:100.3,y:45.7},0).wait(1).to({x:109.1,y:45.8},0).wait(1).to({x:116.5,y:46},0).wait(1).to({x:122.6},0).wait(1).to({x:127.8,y:46.1},0).wait(1).to({x:132.3,y:46.2},0).wait(1).to({x:136.1},0).wait(1).to({x:139.3,y:46.3},0).wait(1).to({x:142},0).wait(1).to({x:144.4},0).wait(1).to({x:146.3,y:46.4},0).wait(1).to({x:148},0).wait(1).to({x:149.3},0).wait(1).to({x:150.4},0).wait(1).to({x:151.3},0).wait(1).to({x:151.9},0).wait(1).to({x:152.3},0).wait(1).to({x:152.6},0).wait(1).to({regX:136.3,regY:32.4,x:149.4,y:49.8},0).wait(63).to({regX:139.6,regY:29.1,scaleX:1.01,scaleY:1.01,x:150.6,y:46.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:143.8,y:47.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:130.7,y:48},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:108.9,y:49.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:74.8,y:52},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:23.6,y:55.8},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:-49,y:61},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:-135.5,y:67.2},0).wait(1).to({scaleX:2.01,scaleY:2.01,x:-214.4,y:72.9},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:-274.9,y:77.2},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:-318.9,y:80.4},0).wait(1).to({scaleX:2.38,scaleY:2.38,x:-350.7,y:82.7},0).wait(1).to({scaleX:2.44,scaleY:2.44,x:-373.7,y:84.3},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:-390,y:85.5},0).wait(1).to({scaleX:2.52,scaleY:2.52,x:-401.2,y:86.3},0).wait(1).to({scaleX:2.54,scaleY:2.54,x:-408.4,y:86.9},0).wait(1).to({scaleX:2.55,scaleY:2.55,x:-412.3,y:87.1},0).wait(1).to({regX:136.2,regY:32.4,scaleX:2.55,scaleY:2.55,x:-422.1,y:95.8},0).to({_off:true},163).wait(89));

	// Layer 3
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(784,51,0.6,0.6,0,0,0,112.1,112.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-423.9,regY:310.4,x:450.3,y:169.5},0).wait(1).to({x:435},0).wait(1).to({x:415.1},0).wait(1).to({x:388.2},0).wait(1).to({x:351.8},0).wait(1).to({x:310.2},0).wait(1).to({x:275.1},0).wait(1).to({x:249.3},0).wait(1).to({x:230.1},0).wait(1).to({x:215.3},0).wait(1).to({x:203.5},0).wait(1).to({x:193.9},0).wait(1).to({x:185.9},0).wait(1).to({x:179.2},0).wait(1).to({x:173.5},0).wait(1).to({x:168.6},0).wait(1).to({x:164.5},0).wait(1).to({x:161},0).wait(1).to({x:158},0).wait(1).to({x:155.4},0).wait(1).to({x:153.3},0).wait(1).to({x:151.5},0).wait(1).to({x:150},0).wait(1).to({x:148.8},0).wait(1).to({x:147.9},0).wait(1).to({x:147.2},0).wait(1).to({x:146.8},0).wait(1).to({x:146.5},0).wait(1).to({regX:112.1,regY:112.9,x:468,y:51},0).wait(63).to({regX:-423.9,regY:310.4,scaleX:0.6,scaleY:0.6,x:146.4,y:169.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:146.3,y:169.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:146.1,y:170.6},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:145.8,y:171.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:145.4,y:173.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:144.8,y:175.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:143.8,y:179.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:142.7,y:183.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:141.7,y:187.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:140.9,y:190},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:140.3,y:192.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:140,y:193.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:139.6,y:194.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:139.4,y:195.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:139.3,y:196},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:139.2,y:196.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:139.1,y:196.6},0).wait(1).to({regX:112.4,regY:112.8,scaleX:0.98,scaleY:0.98,x:664.3,y:3.2},0).wait(1).to({regX:-423.9,regY:310.4,x:138.9,y:196.8},0).wait(1).to({y:196.7},0).wait(1).to({x:139},0).wait(1).to({y:196.6},0).wait(1).to({x:139.1,y:196.4},0).wait(1).to({x:139.2,y:196.2},0).wait(1).to({x:139.4,y:195.9},0).wait(1).to({x:139.5,y:195.6},0).wait(1).to({x:139.6,y:195.3},0).wait(1).to({x:139.7,y:195.1},0).wait(1).to({x:139.8,y:195},0).wait(1).to({x:139.9,y:194.9},0).wait(1).to({y:194.8},0).wait(1).to({regX:112.4,regY:112.8,x:665.3,y:1.2},0).wait(1).to({regX:-423.9,regY:310.4,x:139.9,y:194.8},0).wait(3).to({x:139.8,y:194.9},0).wait(2).to({x:139.7,y:195},0).wait(2).to({x:139.6,y:195.1},0).wait(1).to({x:139.5,y:195.2},0).wait(1).to({x:139.4,y:195.3},0).wait(1).to({x:139.3,y:195.4},0).wait(1).to({x:139.2,y:195.5},0).wait(1).to({x:139.1,y:195.6},0).wait(1).to({x:139,y:195.7},0).wait(2).to({x:138.9,y:195.8},0).wait(3).to({regX:112.4,regY:112.8,x:664.3,y:2.2},0).wait(1).to({regX:-423.9,regY:310.4,x:138.9,y:195.8},0).wait(2).to({y:195.7},0).wait(1).to({x:138.8},0).wait(1).to({y:195.6},0).wait(1).to({x:138.7,y:195.5},0).wait(1).to({y:195.4},0).wait(1).to({x:138.6,y:195.2},0).wait(1).to({x:138.5,y:195},0).wait(1).to({x:138.4,y:194.8},0).wait(1).to({x:138.3,y:194.6},0).wait(1).to({x:138.2,y:194.4},0).wait(1).to({x:138.1,y:194.2},0).wait(1).to({x:138,y:194.1},0).wait(1).to({y:194},0).wait(1).to({x:137.9,y:193.9},0).wait(1).to({y:193.8},0).wait(2).to({regX:112.4,regY:112.8,x:663.3,y:0.2},0).wait(1).to({regX:-423.9,regY:310.4,x:137.9,y:193.8},0).wait(2).to({x:138},0).wait(1).to({y:193.9},0).wait(1).to({x:138.1},0).wait(1).to({x:138.2},0).wait(1).to({x:138.3,y:194},0).wait(1).to({x:138.4,y:194.1},0).wait(1).to({x:138.6,y:194.2},0).wait(1).to({x:138.8,y:194.3},0).wait(1).to({x:139,y:194.4},0).wait(1).to({x:139.2,y:194.5},0).wait(1).to({x:139.4},0).wait(1).to({x:139.5,y:194.6},0).wait(1).to({x:139.7,y:194.7},0).wait(1).to({x:139.8},0).wait(1).to({y:194.8},0).wait(1).to({x:139.9},0).wait(2).to({regX:112.4,regY:112.8,x:665.3,y:1.2},0).to({_off:true},1).wait(179));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#76BD23").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(361));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.9,125,832.3,251.4);
// library properties:
lib.properties = {
	id: 'DCCA7DDDDB474A279771A470BF7560D2',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_birdy_atlas_.png", id:"300x250_birdy_atlas_"}
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
an.compositions['DCCA7DDDDB474A279771A470BF7560D2'] = {
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