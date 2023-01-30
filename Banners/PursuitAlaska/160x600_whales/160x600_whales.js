(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"160x600_whales_atlas_P_", frames: [[0,602,25,86],[324,0,160,600],[0,0,160,600],[162,0,160,600]]},
		{name:"160x600_whales_atlas_NP_", frames: [[0,0,160,600],[162,0,160,600]]}
];


// symbols:



(lib.endpath = function() {
	this.spriteSheet = ss["160x600_whales_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.glacier_path1 = function() {
	this.spriteSheet = ss["160x600_whales_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glacier_path2 = function() {
	this.spriteSheet = ss["160x600_whales_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sky_glacier = function() {
	this.spriteSheet = ss["160x600_whales_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.walking_sky = function() {
	this.spriteSheet = ss["160x600_whales_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.walking_sky_mask = function() {
	this.spriteSheet = ss["160x600_whales_atlas_P_"];
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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.glacier_path2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,160,600), null);


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
	this.shape.graphics.f("#0D233F").s().p("AgPAQIAAgfIAfAAIAAAfg");
	this.shape.setTransform(154.6,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgPBGIAAg3Ig1hUIAkAAIAgA4IAig4IAjAAIg2BTIAAA4g");
	this.shape_1.setTransform(144.6,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_2.setTransform(131,38.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AAkBGIhDhYIAABYIgeAAIAAiLIAcAAIBBBVIAAhVIAeAAIAACLg");
	this.shape_3.setTransform(116.1,38.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AAYBGIgcgtIgZAAIAAAtIgeAAIAAiLIA/AAQAZAAANAMQAOANAAAVIAAAAQAAARgIAKQgJALgNAFIAiAygAgdgBIAeAAQALAAAHgFQAGgGAAgJQAAgKgHgFQgGgFgMAAIgdAAg");
	this.shape_4.setTransform(101.5,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgsA3QgQgPAAgfIAAhPIAfAAIAABOQAAASAIAIQAIAJANAAQAOAAAJgIQAHgJABgRIAAhPIAeAAIAABOQAAAQgEAMQgEALgJAIQgIAJgLADQgMAEgNAAQgbAAgRgQg");
	this.shape_5.setTransform(86.2,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgdBCQgNgFgLgKQgKgJgFgNQgGgNABgPIAAgBQgBgOAGgNQAGgNAJgKQALgKAOgGQANgFAPAAQARAAANAFQANAGALAJQAKALAFANQAGANgBAOIAAAAQABAPgGANQgGANgJAKQgLAKgOAFQgNAHgQAAQgQAAgNgHgAgQgoQgIAEgFAGQgGAGgDAIQgDAHAAAJIAAAAQAAAJADAIQADAIAGAGQAFAGAIADQAIAEAIAAQAKAAAHgEQAIgDAFgGQAGgGADgHQADgJAAgIIAAgBQAAgIgDgIQgDgIgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_6.setTransform(70.2,38.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgdBBQgKgGgIgJIATgWQAHAHAGADQAGAEAHABQAIAAAFgGQAFgGAAgMIAAhZIAgAAIAABaQgBANgDAKQgEAJgGAGQgHAHgIADQgKADgKAAQgQAAgMgGg");
	this.shape_7.setTransform(55.5,38.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AAZBGIgegtIgYAAIAAAtIgfAAIAAiLIA/AAQAZAAAOAMQAOAMAAAWIAAABQAAAQgIALQgJAKgNAFIAjAygAgdgBIAeAAQALAAAHgFQAGgGAAgJQAAgKgHgFQgGgFgMAAIgdAAg");
	this.shape_8.setTransform(165.1,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AgsA4QgQgQAAgfIAAhPIAfAAIAABOQAAARAIAJQAIAJANAAQAPAAAHgJQAIgIAAgRIAAhPIAfAAIAABOQAAAQgEAMQgFALgHAJQgJAHgLAEQgMAEgNAAQgcAAgQgPg");
	this.shape_9.setTransform(149.8,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgdBDQgOgGgJgKQgKgKgGgMQgGgNAAgPIAAgBQAAgOAGgNQAGgNAKgKQAJgKAOgGQAOgFAPgBQAQABAOAFQANAGALAKQAJAKAGAMQAFANABAPIAAAAQgBAPgFANQgGANgJAKQgKAKgOAGQgOAFgQABQgPgBgOgFgAgQgoQgIAEgGAGQgFAGgDAIQgDAIAAAIIAAAAQAAAJADAIQADAIAFAGQAHAGAHADQAIAEAIAAQAJAAAIgEQAIgDAGgGQAFgGADgIQADgIAAgIIAAgBQAAgIgDgIQgDgIgFgGQgGgGgIgEQgIgDgJAAQgJAAgHADg");
	this.shape_10.setTransform(133.8,16.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgPBGIAAg3Ig1hUIAkAAIAgA4IAig4IAjAAIg2BTIAAA4g");
	this.shape_11.setTransform(118.1,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgPBGIAAhuIgqAAIAAgdIBzAAIAAAdIgrAAIAABug");
	this.shape_12.setTransform(98.5,16.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AAZBGIgdgtIgZAAIAAAtIgeAAIAAiLIA/AAQAZAAANAMQAOAMAAAWIAAABQAAAQgIALQgJAKgNAFIAiAygAgdgBIAeAAQALAAAHgFQAGgGAAgJQAAgKgHgFQgGgFgMAAIgdAAg");
	this.shape_13.setTransform(85.3,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AAqBHIgNggIg6AAIgNAgIgfAAIA8iNIAbAAIA8CNgAgSAMIAkAAIgSgtg");
	this.shape_14.setTransform(69.7,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgPBGIAAhuIgqAAIAAgdIBzAAIAAAdIgrAAIAABug");
	this.shape_15.setTransform(55.3,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AgaBDQgQgGgMgLIASgWQAJAIALAEQAKAFALAAQAJAAAGgEQAFgDAAgHIAAAAIgBgFQgBgCgDgCIgJgFIgNgDIgUgHQgIgCgGgFQgGgEgEgHQgDgHAAgLIAAAAQAAgKAEgHQADgIAHgFQAGgGAJgDQAJgDALAAQAOAAANAEQANAFALAJIgQAXQgKgGgJgEQgJgEgIAAQgJAAgEAEQgFADAAAGIAAAAQAAADACADQABACADACIAKAEIAOAEIATAHQAIADAGAEQAFAFADAHQADAGAAAJIAAABQAAAKgDAIQgEAIgHAFQgHAGgJADQgKADgLAAQgPAAgPgFg");
	this.shape_16.setTransform(42.3,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(33.9,7.1,140,43.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.walking_sky();
	this.instance.parent = this;
	this.instance.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(70,0,160,600), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.walking_sky_mask();
	this.instance.parent = this;
	this.instance.setTransform(70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(70,0,160,600), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgHAJIAAgRIAPAAIAAARg");
	this.shape.setTransform(116.8,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgQAqQgJgDgIgGIAHgKQAHAGAIADQAHADAHgBQAIABAFgEQAFgEAAgGQAAgEgBgCIgFgEIgHgEIgIgCIgKgDQgFgCgEgCQgEgDgDgEQgDgEAAgGQAAgGADgFQACgEAEgEQAEgDAFgBQAGgDAFAAQAIAAAJADQAIADAHAEIgGAKQgGgEgHgCQgHgCgGAAQgHAAgFADQgEAEAAAFIAAABQAAADACACIAFAEIAHADIAHADIALADQAFACAEACQAEADACAEQADAEAAAGIAAABQAAAFgDAGQgCAEgEAEIgKAFQgGABgHAAQgIAAgKgDg");
	this.shape_1.setTransform(110.4,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgRA8QgHgDgHgGQgFgGgEgIQgEgJABgLQgBgKAEgJQAEgHAFgGQAHgHAHgCQAIgEAHAAQAGAAAFACIAJAEIAHAGIAGAHIAAg1IAOAAIAAB7IgOAAIAAgSIgGAIQgDADgEADQgFADgEABQgGACgFAAQgHAAgIgDgAgLgNQgGACgEAEQgEAEgDAGQgCAGAAAIQAAAHACAHQADAHAEADQAEAFAGADQAGACAFAAQAGAAAGgCQAFgDAFgFQAEgDADgHQADgHgBgHQABgIgDgGQgDgFgEgEQgFgFgFgCQgGgDgGAAQgFAAgGADg");
	this.shape_2.setTransform(100.5,-6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AAZAtIAAgzQAAgMgGgHQgGgHgMAAQgEAAgGACQgEACgEADQgDAEgCAFQgCAFAAAGIAAAyIgOAAIAAhXIAOAAIAAAPQAEgHAIgFQAHgFAKAAQAIAAAGADQAGACAFAFQAEAEACAHQADAGAAAIIAAA2g");
	this.shape_3.setTransform(89.9,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_4.setTransform(79.6,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgXAtIAAhXIAMAAIAAAXIAHgKIAHgIIAKgFQAGgCAFAAIAAAOIgBAAQgHAAgGADQgGADgEAFQgFAFgDAHQgDAHAAAKIAAAjg");
	this.shape_5.setTransform(66.5,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_6.setTransform(57.6,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgFAsIgmhXIAOAAIAdBIIAehIIAOAAIgnBXg");
	this.shape_7.setTransform(47.6,-4.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_8.setTransform(37.6,-4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AAaAtIAAgzQgBgMgGgHQgGgHgMAAQgFAAgEACQgFACgEADQgEAEgCAFQgCAFAAAGIAAAyIgMAAIAAhXIAMAAIAAAPQAFgHAHgFQAIgFAKAAQAIAAAGADQAGACAEAFQAFAEACAHQADAGgBAIIAAA2g");
	this.shape_9.setTransform(27.4,-4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_10.setTransform(124.6,-26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgXAtIAAhXIAMAAIAAAXIAHgKIAHgIIAKgFQAGgCAFAAIAAAOIgBAAQgGAAgHADQgGADgEAFQgFAFgCAHQgEAHAAAKIAAAjg");
	this.shape_11.setTransform(116.6,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgSArQgGgDgFgFQgEgEgCgHQgCgGAAgJIAAg1IANAAIAAAzQAAAMAGAHQAGAHAMAAQAFAAAEgCQAFgCAEgDQADgEACgFQACgFAAgGIAAgyIANAAIAABXIgNAAIAAgQQgEAIgHAFQgHAFgLAAQgIAAgGgCg");
	this.shape_12.setTransform(107.4,-26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AAAA4QgDgBgEgCQgDgEgBgFQgCgEAAgHIAAg0IgNAAIAAgLIANAAIAAgbIANAAIAAAbIAaAAIAAALIgaAAIAAAzQAAAHADAEQAEADAHAAIAGgBIAGgCIAAALIgHADIgJABIgKgCg");
	this.shape_13.setTransform(98.7,-27.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AAaAtIAAgzQAAgMgHgHQgGgHgMAAQgEAAgFACQgFACgEADQgEAEgCAFQgBAFAAAGIAAAyIgOAAIAAhXIAOAAIAAAPQAEgHAHgFQAIgFAKAAQAIAAAGADQAGACAFAFQAEAEACAHQACAGAAAIIAAA2g");
	this.shape_14.setTransform(90.2,-26.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_15.setTransform(79.9,-26.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AgFAsIgmhXIAPAAIAcBIIAehIIAOAAIgmBXg");
	this.shape_16.setTransform(69.9,-26.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AgRA8QgHgDgHgGQgFgGgEgJQgEgIABgLQgBgLAEgHQAEgIAFgHQAHgGAHgDQAIgCAHAAQAGgBAFACIAJAEIAHAGIAGAHIAAg1IAOAAIAAB7IgOAAIAAgRIgGAHQgDADgEADQgFADgEACQgGABgFAAQgHAAgIgDgAgLgOQgGADgEAEQgEAFgDAEQgCAHAAAIQAAAIACAGQADAGAEAFQAEAEAGACQAGADAFAAQAGAAAGgDQAFgCAFgEQAEgFADgGQADgGgBgIQABgIgDgGQgDgFgEgFQgFgEgFgDQgGgCgGAAQgFAAgGACg");
	this.shape_17.setTransform(59.1,-28.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AgRArQgGgBgEgDQgFgEgDgFQgDgFAAgHQABgHACgGQADgFAFgDQAFgDAHgCQAHgCAIAAIAOABIAMADIAAgDQAAgMgHgGQgGgGgNAAQgHAAgGACIgNAEIgDgLIAOgEQAIgCAIgBQASABAKAIQAKAKAAARIAAA0IgNAAIAAgNQgFAGgHAFQgIAFgKAAQgHgBgGgCgAgSAEQgGAFAAAIQAAAFACADIAEAGIAHADIAJABQAFAAAFgCQAGgBADgDIAHgIQACgEAAgGIAAgIIgLgDIgPAAQgLAAgHAEg");
	this.shape_18.setTransform(48.5,-26.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_19.setTransform(33.8,-26.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D233F").s().p("AAaA+IAAg0QgBgKgGgIQgGgHgMAAQgFAAgFACQgEACgEADQgEAFgBADQgDAFAAAGIAAAzIgMAAIAAh7IAMAAIAAA0QAFgIAIgFQAGgEALAAQAIgBAGADQAGADAEAEQAFAFACAGQACAGAAAIIAAA2g");
	this.shape_20.setTransform(23.6,-28.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D233F").s().p("AAAA4QgDgBgDgCQgEgEgCgFQgBgEAAgHIAAg0IgNAAIAAgLIANAAIAAgbIANAAIAAAbIAaAAIAAALIgaAAIAAAzQAAAHADAEQAEADAHAAIAGgBIAGgCIAAALIgHADIgIABIgLgCg");
	this.shape_21.setTransform(14.8,-27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(9.4,-37.8,122.3,43), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgHAJIAAgRIAPAAIAAARg");
	this.shape.setTransform(100.4,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_1.setTransform(93.4,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgNA/IAAhMIgMAAIAAgLIAMAAIAAgIQgBgPAIgHQAGgHAMAAIAIAAIAGACIAAALIgGgCIgHAAQgOAAAAATIAAAHIAbAAIAAALIgbAAIAABMg");
	this.shape_2.setTransform(85.5,-11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgFA9IAAhXIALAAIAABXgAgHgtIAAgPIAOAAIAAAPg");
	this.shape_3.setTransform(79.9,-11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgGA+IAAh7IANAAIAAB7g");
	this.shape_4.setTransform(75.5,-11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgRA8QgHgDgHgGQgFgGgEgJQgDgIAAgLQAAgKADgJQAEgHAFgGQAHgHAHgCQAIgEAIAAQAFABAFABIAJAEIAIAGIAFAHIAAg1IAOAAIAAB7IgOAAIAAgSIgGAIQgDAEgEACQgFADgEABQgGACgEAAQgIAAgIgDgAgLgNQgGACgEAEQgEAEgCAGQgDAGAAAIQAAAHADAHQACAHAEADQAFAFAFADQAFACAGAAQAGAAAFgCQAGgDAFgFQAEgDADgHQACgHAAgHQAAgHgCgHQgDgFgEgEQgFgFgGgCQgFgDgGAAQgGAAgFADg");
	this.shape_5.setTransform(67.4,-11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgFA+IAAh7IALAAIAAB7g");
	this.shape_6.setTransform(59.8,-11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgGA9IAAhXIANAAIAABXgAgHgtIAAgPIAPAAIAAAPg");
	this.shape_7.setTransform(55.3,-11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AAYAsIgXhEIgYBEIgLAAIgfhXIAOAAIAXBFIAYhFIAJAAIAYBFIAYhFIANAAIgeBXg");
	this.shape_8.setTransform(45.8,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AgMAqQgJgDgFgHQgHgGgDgIQgDgJgBgJQABgIADgJQADgIAHgGQAFgHAJgDQAIgEAIAAIAMABQAFABAFADIAHAEIAHAHIgJAJIgLgKQgGgDgKAAQgFAAgGACQgFADgFAEQgEAFgDAGQgCAHAAAGQAAAHACAGQADAGAFAFQADAFAHACQAFADAGAAQAJAAAGgEQAHgEAFgFIAIAIQgGAHgIAFQgJAFgNAAQgIAAgIgEg");
	this.shape_9.setTransform(111.8,-30.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgFA9IAAhXIALAAIAABXgAgHgtIAAgPIAOAAIAAAPg");
	this.shape_10.setTransform(104.7,-32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AAAA4QgDgBgDgCQgEgEgBgFQgCgEAAgHIAAg0IgNAAIAAgLIANAAIAAgbIANAAIAAAbIAaAAIAAALIgaAAIAAAzQAAAHADAEQAEADAHAAIAGgBIAGgCIAAALIgHADIgIABIgLgCg");
	this.shape_11.setTransform(98.9,-31.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgQAqQgJgDgIgGIAHgJQAHAFAIADQAHACAHABQAIgBAFgDQAFgEAAgHQAAgDgBgCIgFgFIgHgCIgIgDIgKgEQgFgBgEgCQgEgDgDgDQgDgFAAgGQAAgGADgEQACgFAEgDQAEgEAFgCQAGgBAFAAQAIgBAJADQAIADAHAEIgGAKQgGgEgHgCQgHgCgGgBQgHAAgFAFQgEADAAAGIAAAAQAAACACADIAFAEIAHADIAHADIALAEQAFABAEACQAEADACAEQADAEAAAGIAAAAQAAAHgDAEQgCAGgEADIgKAFQgGABgHAAQgIAAgKgDg");
	this.shape_12.setTransform(91.2,-30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AgOArQgIgEgGgGQgFgGgEgIQgEgJAAgKQAAgJAEgIQADgIAFgHQAGgGAIgDQAHgEAJAAQAJAAAIAEQAIADAFAHQAFAGADAIQADAJAAAJIAAABIgBADIhEAAQABAHACAFQADAGAEAEQAFADAFACQAFACAFAAQAJAAAHgDQAGgDAGgGIAIAHQgHAIgIAEQgJAFgNAAQgIAAgIgDgAgJggQgFADgEAEQgEAEgCAFIgDAMIA3AAQAAgGgCgFQgCgGgEgEQgDgEgFgDQgFgCgHAAQgFAAgEACg");
	this.shape_13.setTransform(82.1,-30.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AgKBLIgEgBIAAgLIADABIADAAQAEAAADgDQACgDAAgGIAAhcIANAAIAABcQAAAMgGAFQgFAFgJABgAAAg7IAAgPIAPAAIAAAPg");
	this.shape_14.setTransform(74.1,-30.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgRArQgFgBgFgDQgFgEgCgFQgDgFAAgHQAAgHACgGQADgFAFgDQAFgDAHgCQAHgCAIAAIAOABIAMADIAAgDQAAgMgHgGQgHgGgMAAQgHAAgHACIgMAEIgDgLIAOgEQAHgCAJgBQASABAKAIQAJAKAAARIAAA0IgMAAIAAgNQgEAGgIAFQgIAFgLAAQgGgBgGgCgAgRAEQgHAFAAAIQAAAFABADIAGAGIAHADIAIABQAFAAAGgCQAFgBAEgDIAGgIQACgEABgGIAAgIIgMgDIgPAAQgLAAgGAEg");
	this.shape_15.setTransform(67.5,-30.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AA2AtIAAgzQAAgMgHgHQgFgHgLAAQgFAAgFACQgEABgDAEQgEADgCAFQgCAGAAAGIAAAyIgLAAIAAgzQAAgMgHgHQgFgHgLAAQgFAAgFACQgEACgDAEQgEADgCAFQgCAFAAAHIAAAxIgNAAIAAhXIANAAIAAAPIAFgHIAGgFIAIgEIAKgBQALAAAHAFQAGAFADAIIAFgHQADgEAEgCQAEgCAFgCIAKgBQAPAAAJAJQAJAKAAAQIAAA2g");
	this.shape_16.setTransform(54.8,-30.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AgOA+IAAhLIgMAAIAAgLIAMAAIAAgIQABgPAGgHQAHgIAMAAIAIABIAGACIAAALIgGgBIgGgBQgPAAABATIAAAHIAaAAIAAALIgaAAIAABLg");
	this.shape_17.setTransform(38.8,-32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AgRAqQgJgDgGgHQgGgGgEgIQgDgJAAgJQAAgIADgJQAEgIAGgGQAGgHAJgDQAIgEAJAAQAKAAAJAEQAIADAGAGQAGAHADAIQAEAIAAAJQAAAJgEAJQgDAIgHAGQgFAHgJADQgJAEgJAAQgJAAgIgEgAgNgfQgGADgEAEQgDAFgDAGQgCAHgBAGQABAHACAGQACAGAFAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgCAEgFQAEgEADgHQACgGAAgHQAAgGgCgGQgDgHgEgEQgFgFgGgDQgFgCgHAAQgGAAgHACg");
	this.shape_18.setTransform(29.9,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(22.4,-41.8,96.3,42), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgTAUQAUgDgBgRIgLAAIAAgfIAfAAIAAAbQAAATgKAIQgJAJgRAAg");
	this.shape.setTransform(177.4,-6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AAqBGIgNgfIg6AAIgNAfIgfAAIA8iLIAbAAIA8CLgAgSAMIAkAAIgSgsg");
	this.shape_1.setTransform(167,-13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AAaBGIgpg8IgRARIAAArIgfAAIAAiLIAfAAIAAA9IA4g9IAlAAIg5A7IA8BQg");
	this.shape_2.setTransform(152.6,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgaBDQgQgGgMgLIASgWQAJAHALAFQAKAFALAAQAJAAAGgDQAFgEAAgGIAAgBIgBgFQgBgDgDgBIgJgFIgNgDIgUgHQgIgDgGgEQgGgEgEgHQgDgHAAgKIAAgBQAAgJAEgIQADgIAHgGQAGgFAJgDQAJgDALAAQAOAAANAFQANAEALAJIgQAXQgKgHgJgDQgJgEgIAAQgJAAgEAEQgFADAAAGIAAAAQAAADACACQABADADACIAKAEIAOAEIATAGQAIAEAGAEQAFAFADAHQADAGAAAJIAAAAQAAALgDAIQgEAIgHAGQgHAFgJADQgKADgLAAQgPAAgPgFg");
	this.shape_3.setTransform(138,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AAqBGIgNgfIg6AAIgNAfIgfAAIA8iLIAbAAIA8CLgAgSAMIAkAAIgSgsg");
	this.shape_4.setTransform(123.8,-13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgxBGIAAiLIAeAAIAABvIBFAAIAAAcg");
	this.shape_5.setTransform(110.3,-13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AAqBGIgNgfIg6AAIgNAfIgfAAIA8iLIAbAAIA8CLgAgSAMIAkAAIgSgsg");
	this.shape_6.setTransform(95.7,-13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AAkBGIhDhYIAABYIgeAAIAAiLIAcAAIBBBVIAAhVIAeAAIAACLg");
	this.shape_7.setTransform(73.9,-13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_8.setTransform(62.6,-13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(57.2,-22.9,125.5,21.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgfBNQgRgHgOgNIAVgZQALAJALAFQAMAGAMAAQAMAAAFgEQAHgEAAgHIAAgBIgBgGQgCgDgEgCIgJgFIgQgEIgWgHQgKgEgHgFQgGgEgEgJQgFgIAAgMIAAAAQABgLAEgJQAEgJAHgGQAIgHAKgDQAKgEANAAQAQAAAPAGQAPAFAMAKIgSAbQgKgIgLgEQgLgEgJAAQgKAAgFAEQgFAEgBAGIAAAAQABAEABADQACADAEACIAKAFIARAEIAVAIQAKAEAGAEQAHAGADAHQAEAIAAALIAAAAQAAAMgFAJQgEAKgHAGQgIAGgLAEQgLADgNAAQgSAAgSgGg");
	this.shape.setTransform(162.6,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("Ag8BQIAAigIB4AAIAAAgIhWAAIAAAgIBLAAIAAAfIhLAAIAAAiIBXAAIAAAfg");
	this.shape_1.setTransform(148,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgRBQIAAigIAjAAIAACgg");
	this.shape_2.setTransform(136.1,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgYBNQgPgHgLgLQgLgLgGgPQgHgQAAgRIAAAAQAAgQAHgQQAGgPALgLQALgLAPgHQAQgGASAAQALAAAJABQAJACAIADIAOAIIAMAKIgXAaQgJgIgKgFQgKgFgLAAQgKAAgIAEQgJAEgGAHQgGAHgEAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAFAHQAHAHAJAEQAIAEAKAAQANAAAKgFQAKgFAIgIIAXAWIgMAMIgPAJQgIAEgJACQgKACgLAAQgSAAgPgGg");
	this.shape_3.setTransform(124,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("Ag8BQIAAigIB4AAIAAAgIhWAAIAAAgIBLAAIAAAfIhLAAIAAAiIBXAAIAAAfg");
	this.shape_4.setTransform(108,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("Ag/BQIAAigIBBAAQAOAAAMAFQALAEAIAHQAIAHAEALQAFAKAAAMIAAAAQAAAOgGAKQgFALgIAHQgJAHgMADQgMAEgNAAIgbAAIAAAwgAgcAAIAcAAQANABAHgHQAIgHAAgJIAAgBQAAgMgIgHQgIgFgMAAIgcAAg");
	this.shape_5.setTransform(92.9,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgfBNQgRgHgOgNIAVgZQALAJALAFQAMAGAMAAQAMAAAFgEQAHgEAAgHIAAgBIgBgGQgCgDgEgCIgKgFIgPgEIgWgHQgKgEgHgFQgGgEgEgJQgFgIAAgMIAAAAQABgLAEgJQAEgJAIgGQAHgHAKgDQAKgEANAAQAQAAAPAGQAPAFAMAKIgSAbQgKgIgLgEQgLgEgJAAQgKAAgFAEQgFAEgBAGIAAAAQABAEABADQACADAEACIAKAFIAQAEIAWAIQAKAEAGAEQAHAGADAHQAEAIAAALIAAAAQAAAMgFAJQgEAKgHAGQgJAGgKAEQgLADgNAAQgSAAgSgGg");
	this.shape_6.setTransform(77.1,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgYBDQgMgFgIgKQgJgKgEgOQgEgNAAgPQAAgOAEgOQAFgNAIgKQAIgJAMgGQALgFANgBQAOABAMAFQALAGAJAJQAHAKAFANQAEAOAAAOQAAAPgFANQgEANgIALQgIAJgLAGQgMAGgOgBQgNABgLgGgAgMgoQgFADgFAGQgDAGgCAIQgDAIAAAJQAAAKADAHQACAJAEAGQAEAGAFADQAGADAGAAQAHAAAGgCQAFgEAEgGQAFgGACgIQABgIAAgKQAAgIgBgJQgDgIgEgGQgEgGgGgDQgFgDgHgBQgGAAgGAEg");
	this.shape_7.setTransform(171.7,-12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgYBDQgMgFgJgKQgHgKgFgOQgEgNAAgPQAAgOAEgOQAFgNAIgKQAIgJAMgGQALgFANgBQAOABALAFQAMAGAJAJQAHAKAFANQAEAOAAAOQAAAPgEANQgFANgIALQgIAJgMAGQgLAGgOgBQgNABgLgGgAgMgoQgGADgDAGQgFAGgCAIQgCAIAAAJQAAAKACAHQADAJAEAGQAEAGAFADQAGADAGAAQAHAAAGgCQAGgEAEgGQAEgGACgIQACgIAAgKQAAgIgCgJQgDgIgEgGQgEgGgFgDQgGgDgHgBQgGAAgGAEg");
	this.shape_8.setTransform(157.1,-12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AgZBDQgLgFgJgKQgHgKgFgOQgEgNAAgPQAAgOAFgOQAEgNAIgKQAIgJALgGQAMgFANgBQAOABALAFQAMAGAIAJQAJAKAEANQAEAOAAAOQAAAPgEANQgFANgIALQgIAJgMAGQgLAGgOgBQgNABgMgGgAgMgoQgFADgEAGQgFAGgCAIQgBAIAAAJQAAAKABAHQADAJAEAGQAEAGAGADQAFADAGAAQAHAAAGgCQAFgEAFgGQADgGACgIQADgIAAgKQAAgIgDgJQgCgIgEgGQgEgGgFgDQgGgDgHgBQgGAAgGAEg");
	this.shape_9.setTransform(142.5,-12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AAABGIAAhtIgXAHIgGgaIAmgLIAWAAIAACLg");
	this.shape_10.setTransform(130.3,-12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AAYBGIgdgtIgYAAIAAAtIgeAAIAAiLIA+AAQAaAAANAMQAOAMAAAWIAAABQAAARgIAKQgJAKgNAFIAiAygAgdgBIAfAAQALAAAGgGQAGgFAAgJQAAgKgGgFQgHgFgLAAIgeAAg");
	this.shape_11.setTransform(114.1,-12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_12.setTransform(99.9,-12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AgMBHIg5iMIAiAAIAjBhIAlhhIAhAAIg4CMg");
	this.shape_13.setTransform(85.4,-11.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AgdBDQgOgGgJgJQgKgLgGgNQgGgNAAgPIAAAAQAAgOAGgNQAGgNAKgKQAJgKAOgFQAOgHAPAAQAQAAAOAHQANAFALAJQAJAKAGANQAFAOABAOIAAAAQgBAPgFANQgGANgJAKQgKAKgOAGQgOAFgQAAQgPAAgOgFgAgQgnQgIADgGAGQgFAGgDAHQgDAIAAAJIAAAAQAAAJADAIQADAIAFAGQAHAGAHAEQAIADAIAAQAJAAAIgDQAIgEAFgGQAGgGADgIQADgHAAgKIAAAAQAAgIgDgIQgDgIgGgGQgFgGgIgDQgIgEgJAAQgJAAgHAEg");
	this.shape_14.setTransform(69.4,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(58.9,-21.6,122.2,46.3), null);


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


// stage content:
(lib._160x600_whales = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// pursuit
	this.instance = new lib.pursuit();
	this.instance.parent = this;
	this.instance.setTransform(-70.7,569,0.19,0.19,0,0,0,290.3,40.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:289.5,regY:40.1,x:-42.9,y:568.9},0).wait(1).to({x:0.6},0).wait(1).to({x:27},0).wait(1).to({x:43.2},0).wait(1).to({x:54.4},0).wait(1).to({x:62.5},0).wait(1).to({x:68.6},0).wait(1).to({x:73.2},0).wait(1).to({x:76.6},0).wait(1).to({x:79.2},0).wait(1).to({x:81},0).wait(1).to({x:82.2},0).wait(1).to({x:82.8},0).wait(1).to({regX:290.3,regY:40.6,x:83.2,y:569},0).wait(172));

	// Layer_19
	this.instance_1 = new lib.Symbol11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.7,243.5,0.8,0.8,0,0,0,101.9,29.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).wait(1).to({regX:102.4,regY:23.3,x:81.1,y:238.4,alpha:0.002},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:101.9,regY:29.7,x:80.7,y:243.5,alpha:1},0).wait(13));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_136 = new cjs.Graphics().p("AgZJvIAAzKIIoAAIAATKg");
	var mask_graphics_137 = new cjs.Graphics().p("AgZJwIAAzLIIoAAIAATLg");
	var mask_graphics_138 = new cjs.Graphics().p("AgZJzIAAzLIIoAAIAATLg");
	var mask_graphics_139 = new cjs.Graphics().p("AgZJ4IAAzKIIoAAIAATKg");
	var mask_graphics_140 = new cjs.Graphics().p("AgZKAIAAzKIIoAAIAATKg");
	var mask_graphics_141 = new cjs.Graphics().p("AgZKNIAAzLIIoAAIAATLg");
	var mask_graphics_142 = new cjs.Graphics().p("AgZKeIAAzLIIoAAIAATLg");
	var mask_graphics_143 = new cjs.Graphics().p("AgZK1IAAzKIIoAAIAATKg");
	var mask_graphics_144 = new cjs.Graphics().p("AgZLUIAAzKIIoAAIAATKg");
	var mask_graphics_145 = new cjs.Graphics().p("AgZL8IAAzKIIoAAIAATKg");
	var mask_graphics_146 = new cjs.Graphics().p("AgZMqIAAzKIIoAAIAATKg");
	var mask_graphics_147 = new cjs.Graphics().p("AgZNaIAAzLIIoAAIAATLg");
	var mask_graphics_148 = new cjs.Graphics().p("AgZOEIAAzKIIoAAIAATKg");
	var mask_graphics_149 = new cjs.Graphics().p("AgZOoIAAzLIIoAAIAATLg");
	var mask_graphics_150 = new cjs.Graphics().p("AgZPEIAAzKIIoAAIAATKg");
	var mask_graphics_151 = new cjs.Graphics().p("AgZPbIAAzKIIoAAIAATKg");
	var mask_graphics_152 = new cjs.Graphics().p("AgZPtIAAzKIIoAAIAATKg");
	var mask_graphics_153 = new cjs.Graphics().p("AgZP8IAAzLIIoAAIAATLg");
	var mask_graphics_154 = new cjs.Graphics().p("AgZQIIAAzLIIoAAIAATLg");
	var mask_graphics_155 = new cjs.Graphics().p("AgZQRIAAzLIIoAAIAATLg");
	var mask_graphics_156 = new cjs.Graphics().p("AgZQYIAAzLIIoAAIAATLg");
	var mask_graphics_157 = new cjs.Graphics().p("AgZQdIAAzKIIoAAIAATKg");
	var mask_graphics_158 = new cjs.Graphics().p("AgZQhIAAzKIIoAAIAATKg");
	var mask_graphics_159 = new cjs.Graphics().p("AgZQkIAAzLIIoAAIAATLg");
	var mask_graphics_160 = new cjs.Graphics().p("AgZQlIAAzKIIoAAIAATKg");
	var mask_graphics_161 = new cjs.Graphics().p("AgZQmIAAzLIIoAAIAATLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_graphics_136,x:52.7,y:62.3}).wait(1).to({graphics:mask_graphics_137,x:52.7,y:62.4}).wait(1).to({graphics:mask_graphics_138,x:52.7,y:62.7}).wait(1).to({graphics:mask_graphics_139,x:52.7,y:63.2}).wait(1).to({graphics:mask_graphics_140,x:52.7,y:64}).wait(1).to({graphics:mask_graphics_141,x:52.7,y:65.3}).wait(1).to({graphics:mask_graphics_142,x:52.7,y:67}).wait(1).to({graphics:mask_graphics_143,x:52.7,y:69.3}).wait(1).to({graphics:mask_graphics_144,x:52.7,y:72.4}).wait(1).to({graphics:mask_graphics_145,x:52.7,y:76.4}).wait(1).to({graphics:mask_graphics_146,x:52.7,y:81}).wait(1).to({graphics:mask_graphics_147,x:52.7,y:85.8}).wait(1).to({graphics:mask_graphics_148,x:52.7,y:90}).wait(1).to({graphics:mask_graphics_149,x:52.7,y:93.6}).wait(1).to({graphics:mask_graphics_150,x:52.7,y:96.4}).wait(1).to({graphics:mask_graphics_151,x:52.7,y:98.7}).wait(1).to({graphics:mask_graphics_152,x:52.7,y:100.5}).wait(1).to({graphics:mask_graphics_153,x:52.7,y:102}).wait(1).to({graphics:mask_graphics_154,x:52.7,y:103.2}).wait(1).to({graphics:mask_graphics_155,x:52.7,y:104.1}).wait(1).to({graphics:mask_graphics_156,x:52.7,y:104.8}).wait(1).to({graphics:mask_graphics_157,x:52.7,y:105.3}).wait(1).to({graphics:mask_graphics_158,x:52.7,y:105.7}).wait(1).to({graphics:mask_graphics_159,x:52.7,y:106}).wait(1).to({graphics:mask_graphics_160,x:52.7,y:106.1}).wait(1).to({graphics:mask_graphics_161,x:52.7,y:106.2}).wait(25));

	// Layer_17
	this.instance_2 = new lib.endpath();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68,128);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136).to({_off:false},0).wait(50));

	// Layer_16
	this.instance_3 = new lib.Symbol9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,97.8,1,1,0,0,0,103.9,35.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(132).to({_off:false},0).wait(1).to({regX:104,regY:27.6,x:80.1,y:89.9,alpha:0.002},0).wait(1).to({alpha:0.01},0).wait(1).to({alpha:0.025},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.201},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.716},0).wait(1).to({alpha:0.785},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:103.9,regY:35.5,x:80,y:97.8,alpha:1},0).wait(31));

	// Layer_14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_75 = new cjs.Graphics().p("A1NBfIAAi9MAqbAAAIAAC9g");
	var mask_1_graphics_76 = new cjs.Graphics().p("A1NDMIAAmXMAqbAAAIAAGXg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A1NE4IAApvMAqbAAAIAAJvg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A1NGgIAAs/MAqbAAAIAAM/g");
	var mask_1_graphics_79 = new cjs.Graphics().p("A1NIGIAAwLMAqbAAAIAAQLg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A1NJqIAAzTMAqbAAAIAATTg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A1NLLIAA2VMAqbAAAIAAWVg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A1NMqIAA5TMAqbAAAIAAZTg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A1NOGIAA8LMAqbAAAIAAcLg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A1NPfIAA+9MAqbAAAIAAe9g");
	var mask_1_graphics_85 = new cjs.Graphics().p("A1NQ2MAAAghrMAqbAAAMAAAAhrg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A1NSLMAAAgkVMAqbAAAMAAAAkVg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A1NTdMAAAgm5MAqbAAAMAAAAm5g");
	var mask_1_graphics_88 = new cjs.Graphics().p("A1NUsMAAAgpXMAqbAAAMAAAApXg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A1NV5MAAAgrxMAqbAAAMAAAArxg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A1NXDMAAAguFMAqbAAAMAAAAuFg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A1NYLMAAAgwVMAqbAAAMAAAAwVg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A1NZRMAAAgyhMAqbAAAMAAAAyhg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A1NaTMAAAg0lMAqbAAAMAAAA0lg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A1NbUMAAAg2nMAqbAAAMAAAA2ng");
	var mask_1_graphics_95 = new cjs.Graphics().p("A1NcSMAAAg4jMAqbAAAMAAAA4jg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A1NdNMAAAg6ZMAqbAAAMAAAA6Zg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A1NeGMAAAg8LMAqbAAAMAAAA8Lg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A1Ne8MAAAg93MAqbAAAMAAAA93g");
	var mask_1_graphics_99 = new cjs.Graphics().p("A1NfvMAAAg/dMAqbAAAMAAAA/dg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgVNAghMAAAhBBMAqbAAAMAAABBBg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgVNAhPMAAAhCdMAqbAAAMAAABCdg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgVNAh7MAAAhD1MAqbAAAMAAABD1g");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgVNAilMAAAhFJMAqbAAAMAAABFJg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgVNAjMMAAAhGXMAqbAAAMAAABGXg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgVNAjxMAAAhHhMAqbAAAMAAABHhg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgVNAkTMAAAhIlMAqbAAAMAAABIlg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgVNAkyMAAAhJjMAqbAAAMAAABJjg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgVNAlPMAAAhKdMAqbAAAMAAABKdg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgVNAlqMAAAhLTMAqbAAAMAAABLTg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgVNAmCMAAAhMDMAqbAAAMAAABMDg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgVNAmXMAAAhMtMAqbAAAMAAABMtg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgVNAmqMAAAhNTMAqbAAAMAAABNTg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EgVNAm6MAAAhNzMAqbAAAMAAABNzg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgVNAnIMAAAhOPMAqbAAAMAAABOPg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgVNAnUMAAAhOnMAqbAAAMAAABOng");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgVNAncMAAAhO3MAqbAAAMAAABO3g");
	var mask_1_graphics_117 = new cjs.Graphics().p("EgVNAnjMAAAhPFMAqbAAAMAAABPFg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgVNAnnMAAAhPNMAqbAAAMAAABPNg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgVNAnoMAAAhPPMAqbAAAMAAABPPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_1_graphics_75,x:83.4,y:9.5}).wait(1).to({graphics:mask_1_graphics_76,x:83.4,y:20.4}).wait(1).to({graphics:mask_1_graphics_77,x:83.4,y:31.2}).wait(1).to({graphics:mask_1_graphics_78,x:83.4,y:41.6}).wait(1).to({graphics:mask_1_graphics_79,x:83.4,y:51.8}).wait(1).to({graphics:mask_1_graphics_80,x:83.4,y:61.8}).wait(1).to({graphics:mask_1_graphics_81,x:83.4,y:71.5}).wait(1).to({graphics:mask_1_graphics_82,x:83.4,y:81}).wait(1).to({graphics:mask_1_graphics_83,x:83.4,y:90.2}).wait(1).to({graphics:mask_1_graphics_84,x:83.4,y:99.1}).wait(1).to({graphics:mask_1_graphics_85,x:83.4,y:107.8}).wait(1).to({graphics:mask_1_graphics_86,x:83.4,y:116.3}).wait(1).to({graphics:mask_1_graphics_87,x:83.4,y:124.5}).wait(1).to({graphics:mask_1_graphics_88,x:83.4,y:132.4}).wait(1).to({graphics:mask_1_graphics_89,x:83.4,y:140.1}).wait(1).to({graphics:mask_1_graphics_90,x:83.4,y:147.5}).wait(1).to({graphics:mask_1_graphics_91,x:83.4,y:154.7}).wait(1).to({graphics:mask_1_graphics_92,x:83.4,y:161.7}).wait(1).to({graphics:mask_1_graphics_93,x:83.4,y:168.3}).wait(1).to({graphics:mask_1_graphics_94,x:83.4,y:174.8}).wait(1).to({graphics:mask_1_graphics_95,x:83.4,y:181}).wait(1).to({graphics:mask_1_graphics_96,x:83.4,y:186.9}).wait(1).to({graphics:mask_1_graphics_97,x:83.4,y:192.6}).wait(1).to({graphics:mask_1_graphics_98,x:83.4,y:198}).wait(1).to({graphics:mask_1_graphics_99,x:83.4,y:203.1}).wait(1).to({graphics:mask_1_graphics_100,x:83.4,y:208.1}).wait(1).to({graphics:mask_1_graphics_101,x:83.4,y:212.7}).wait(1).to({graphics:mask_1_graphics_102,x:83.4,y:217.1}).wait(1).to({graphics:mask_1_graphics_103,x:83.4,y:221.3}).wait(1).to({graphics:mask_1_graphics_104,x:83.4,y:225.2}).wait(1).to({graphics:mask_1_graphics_105,x:83.4,y:228.9}).wait(1).to({graphics:mask_1_graphics_106,x:83.4,y:232.3}).wait(1).to({graphics:mask_1_graphics_107,x:83.4,y:235.4}).wait(1).to({graphics:mask_1_graphics_108,x:83.4,y:238.3}).wait(1).to({graphics:mask_1_graphics_109,x:83.4,y:241}).wait(1).to({graphics:mask_1_graphics_110,x:83.4,y:243.4}).wait(1).to({graphics:mask_1_graphics_111,x:83.4,y:245.5}).wait(1).to({graphics:mask_1_graphics_112,x:83.4,y:247.4}).wait(1).to({graphics:mask_1_graphics_113,x:83.4,y:249}).wait(1).to({graphics:mask_1_graphics_114,x:83.4,y:250.4}).wait(1).to({graphics:mask_1_graphics_115,x:83.4,y:251.6}).wait(1).to({graphics:mask_1_graphics_116,x:83.4,y:252.4}).wait(1).to({graphics:mask_1_graphics_117,x:83.4,y:253.1}).wait(1).to({graphics:mask_1_graphics_118,x:83.4,y:253.5}).wait(1).to({graphics:mask_1_graphics_119,x:83.4,y:253.6}).wait(67));

	// Layer_13
	this.instance_4 = new lib.glacier_path2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,2);

	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,301.7,1,1,0,0,0,80,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},75).to({state:[{t:this.instance_5}]},49).to({state:[{t:this.instance_5}]},10).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).to({y:303,alpha:0},10).wait(52));

	// Layer_12
	this.instance_6 = new lib.Symbol2copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,106.9,1,1,0,0,0,70.5,32);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,163.6,1,1,0,0,0,70.5,32);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},72).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},28).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(72).to({_off:false},0).wait(1).to({regX:70.4,regY:-17.3,x:79.9,y:57.7,alpha:0.005},0).wait(1).to({y:58.3,alpha:0.024},0).wait(1).to({y:59.5,alpha:0.067},0).wait(1).to({y:62.1,alpha:0.153},0).wait(1).to({y:66.5,alpha:0.301},0).wait(1).to({y:71.3,alpha:0.462},0).wait(1).to({y:74.8,alpha:0.582},0).wait(1).to({y:77.4,alpha:0.67},0).wait(1).to({y:79.4,alpha:0.736},0).wait(1).to({y:80.9,alpha:0.788},0).wait(1).to({y:82.2,alpha:0.829},0).wait(1).to({y:83.2,alpha:0.864},0).wait(1).to({y:84,alpha:0.892},0).wait(1).to({y:84.7,alpha:0.915},0).wait(1).to({y:85.3,alpha:0.934},0).wait(1).to({y:85.8,alpha:0.951},0).wait(1).to({y:86.2,alpha:0.964},0).wait(1).to({y:86.5,alpha:0.974},0).wait(1).to({y:86.7,alpha:0.983},0).wait(1).to({y:86.9,alpha:0.989},0).wait(1).to({y:87.1,alpha:0.994},0).wait(1).to({y:87.2,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:80,y:136.6,alpha:1},0).wait(29).to({regX:70.4,regY:-17.3,x:79.9,y:87.4,alpha:0.995},0).wait(1).to({y:87.9,alpha:0.976},0).wait(1).to({y:89.1,alpha:0.933},0).wait(1).to({y:91.4,alpha:0.847},0).wait(1).to({y:95.4,alpha:0.699},0).wait(1).to({y:99.7,alpha:0.538},0).wait(1).to({y:103,alpha:0.418},0).wait(1).to({y:105.3,alpha:0.33},0).wait(1).to({y:107.1,alpha:0.264},0).wait(1).to({y:108.5,alpha:0.212},0).wait(1).to({y:109.6,alpha:0.171},0).wait(1).to({y:110.6,alpha:0.136},0).wait(1).to({y:111.3,alpha:0.108},0).wait(1).to({y:112,alpha:0.085},0).wait(1).to({y:112.5,alpha:0.066},0).wait(1).to({y:112.9,alpha:0.049},0).wait(1).to({y:113.3,alpha:0.036},0).wait(1).to({y:113.6,alpha:0.026},0).wait(1).to({y:113.8,alpha:0.017},0).wait(1).to({y:114,alpha:0.011},0).wait(1).to({y:114.1,alpha:0.006},0).wait(1).to({y:114.2,alpha:0.002},0).wait(1).to({alpha:0.001},0).to({_off:true},1).wait(38));

	// Layer_11
	this.instance_8 = new lib.Symbol1copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80.1,69.4,1,1,0,0,0,120,35);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).wait(1).to({regX:120.2,regY:-11.8,x:80.3,y:22.7,alpha:0.005},0).wait(1).to({y:23.3,alpha:0.024},0).wait(1).to({y:24.5,alpha:0.067},0).wait(1).to({y:27.1,alpha:0.153},0).wait(1).to({y:31.5,alpha:0.301},0).wait(1).to({y:36.3,alpha:0.462},0).wait(1).to({y:39.8,alpha:0.582},0).wait(1).to({y:42.4,alpha:0.67},0).wait(1).to({y:44.4,alpha:0.736},0).wait(1).to({y:45.9,alpha:0.788},0).wait(1).to({y:47.2,alpha:0.829},0).wait(1).to({y:48.2,alpha:0.864},0).wait(1).to({y:49,alpha:0.892},0).wait(1).to({y:49.7,alpha:0.915},0).wait(1).to({y:50.3,alpha:0.934},0).wait(1).to({y:50.8,alpha:0.951},0).wait(1).to({y:51.2,alpha:0.964},0).wait(1).to({y:51.5,alpha:0.974},0).wait(1).to({y:51.7,alpha:0.983},0).wait(1).to({y:51.9,alpha:0.989},0).wait(1).to({y:52.1,alpha:0.994},0).wait(1).to({y:52.2,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:80.1,y:99.1,alpha:1},0).wait(32).to({regX:120.2,regY:-11.8,x:80.3,y:52.4,alpha:0.995},0).wait(1).to({y:52.9,alpha:0.976},0).wait(1).to({y:54.1,alpha:0.933},0).wait(1).to({y:56.4,alpha:0.847},0).wait(1).to({y:60.4,alpha:0.699},0).wait(1).to({y:64.7,alpha:0.538},0).wait(1).to({y:68,alpha:0.418},0).wait(1).to({y:70.3,alpha:0.33},0).wait(1).to({y:72.1,alpha:0.264},0).wait(1).to({y:73.5,alpha:0.212},0).wait(1).to({y:74.6,alpha:0.171},0).wait(1).to({y:75.6,alpha:0.136},0).wait(1).to({y:76.3,alpha:0.108},0).wait(1).to({y:77,alpha:0.085},0).wait(1).to({y:77.5,alpha:0.066},0).wait(1).to({y:77.9,alpha:0.049},0).wait(1).to({y:78.3,alpha:0.036},0).wait(1).to({y:78.6,alpha:0.026},0).wait(1).to({y:78.8,alpha:0.017},0).wait(1).to({y:79,alpha:0.011},0).wait(1).to({y:79.1,alpha:0.006},0).wait(1).to({y:79.2,alpha:0.002},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120,regY:35,x:80.1,y:126.1,alpha:0},0).wait(38));

	// Layer_15 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_120 = new cjs.Graphics().p("EgXAAoSMAAAhQjMAuBAAAMAAABQjg");
	var mask_2_graphics_121 = new cjs.Graphics().p("EgXAAoSMAAAhQUMAuBAAAMAAABQUg");
	var mask_2_graphics_122 = new cjs.Graphics().p("EgXAAoSMAAAhPjMAuBAAAMAAABPjg");
	var mask_2_graphics_123 = new cjs.Graphics().p("EgXAAoSMAAAhOHMAuBAAAMAAABOHg");
	var mask_2_graphics_124 = new cjs.Graphics().p("EgXAAoSMAAAhLyMAuBAAAMAAABLyg");
	var mask_2_graphics_125 = new cjs.Graphics().p("EgXAAoSMAAAhISMAuBAAAMAAABISg");
	var mask_2_graphics_126 = new cjs.Graphics().p("EgXAAoSMAAAhDLMAuBAAAMAAABDLg");
	var mask_2_graphics_127 = new cjs.Graphics().p("EgXAAoSMAAAg8CMAuBAAAMAAAA8Cg");
	var mask_2_graphics_128 = new cjs.Graphics().p("EgXAAoSMAAAgyyMAuBAAAMAAAAyyg");
	var mask_2_graphics_129 = new cjs.Graphics().p("EgXAAoSMAAAgojMAuBAAAMAAAAojg");
	var mask_2_graphics_130 = new cjs.Graphics().p("EgXAAoSIAA/LMAuBAAAIAAfLg");
	var mask_2_graphics_131 = new cjs.Graphics().p("EgXAAoSIAA3lMAuBAAAIAAXlg");
	var mask_2_graphics_132 = new cjs.Graphics().p("EgXAAoSIAAxrMAuBAAAIAARrg");
	var mask_2_graphics_133 = new cjs.Graphics().p("EgXAAoSIAAtKMAuBAAAIAANKg");
	var mask_2_graphics_134 = new cjs.Graphics().p("EgXAAoSIAApsMAuBAAAIAAJsg");
	var mask_2_graphics_135 = new cjs.Graphics().p("EgXAAoSIAAnDMAuBAAAIAAHDg");
	var mask_2_graphics_136 = new cjs.Graphics().p("EgXAAoSIAAlDMAuBAAAIAAFDg");
	var mask_2_graphics_137 = new cjs.Graphics().p("EgXAAoSIAAjlMAuBAAAIAADlg");
	var mask_2_graphics_138 = new cjs.Graphics().p("EgXAAoSIAAiiMAuBAAAIAACig");
	var mask_2_graphics_139 = new cjs.Graphics().p("EgXAAoSIAAh2MAuBAAAIAAB2g");
	var mask_2_graphics_140 = new cjs.Graphics().p("EgXAAoSIAAhdMAuBAAAIAABdg");
	var mask_2_graphics_141 = new cjs.Graphics().p("EgXAAoSIAAhWMAuBAAAIAABWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_2_graphics_120,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_121,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_122,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_123,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_124,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_125,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_126,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_127,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_128,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_129,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_130,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_131,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_132,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_133,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_134,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_135,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_136,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_137,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_138,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_139,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_140,x:82.7,y:257.8}).wait(1).to({graphics:mask_2_graphics_141,x:82.7,y:257.8}).wait(45));

	// Layer_10
	this.instance_9 = new lib.Symbol4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,300,1.3,1.3,0,0,0,150,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(55).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300.1,alpha:0.004},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300,alpha:0.018},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:80.1,alpha:0.044},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:80,alpha:0.088},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.156},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:80.1,y:300.1,alpha:0.259},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300,alpha:0.397},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:80,alpha:0.547},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.674},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.771},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:80.1,y:300.1,alpha:0.842},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.895},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:300,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.1,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:80,y:300,alpha:1},0).wait(113));

	// Layer_9
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80,300,1.3,1.3,0,0,0,150,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300.1,alpha:0.004},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:300,alpha:0.018},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:80.1,alpha:0.044},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:80,alpha:0.088},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.156},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:80.1,y:300.1,alpha:0.259},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300,alpha:0.397},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:80,alpha:0.547},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.674},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.771},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:80.1,y:300.1,alpha:0.842},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.895},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:300,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:300.1,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.991},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:80,y:300,alpha:1},0).wait(113));

	// Layer_6
	this.instance_11 = new lib.Symbol2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,142,1,1,0,0,0,70.5,32);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(1).to({regX:70.6,regY:-21.9,x:80.1,y:88.2,alpha:0.006},0).wait(1).to({y:88.7,alpha:0.027},0).wait(1).to({y:90,alpha:0.075},0).wait(1).to({y:92.5,alpha:0.174},0).wait(1).to({y:96.7,alpha:0.338},0).wait(1).to({y:100.8,alpha:0.497},0).wait(1).to({y:103.7,alpha:0.612},0).wait(1).to({y:105.9,alpha:0.695},0).wait(1).to({y:107.5,alpha:0.758},0).wait(1).to({y:108.7,alpha:0.807},0).wait(1).to({y:109.8,alpha:0.847},0).wait(1).to({y:110.6,alpha:0.879},0).wait(1).to({y:111.3,alpha:0.906},0).wait(1).to({y:111.8,alpha:0.927},0).wait(1).to({y:112.3,alpha:0.945},0).wait(1).to({y:112.7,alpha:0.96},0).wait(1).to({y:113,alpha:0.972},0).wait(1).to({y:113.2,alpha:0.981},0).wait(1).to({y:113.4,alpha:0.988},0).wait(1).to({y:113.5,alpha:0.994},0).wait(1).to({y:113.6,alpha:0.997},0).wait(1).to({y:113.7,alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:80,y:167.6,alpha:1},0).to({_off:true},43).wait(113));

	// Layer_5
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80.1,69.4,1,1,0,0,0,120,35);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).wait(1).to({regX:119.9,regY:0,x:80,y:34.5,alpha:0.006},0).wait(1).to({y:35.1,alpha:0.027},0).wait(1).to({y:36.6,alpha:0.075},0).wait(1).to({y:39.5,alpha:0.174},0).wait(1).to({y:44.4,alpha:0.338},0).wait(1).to({y:49.1,alpha:0.497},0).wait(1).to({y:52.5,alpha:0.612},0).wait(1).to({y:55,alpha:0.695},0).wait(1).to({y:56.8,alpha:0.758},0).wait(1).to({y:58.3,alpha:0.807},0).wait(1).to({y:59.5,alpha:0.847},0).wait(1).to({y:60.5,alpha:0.879},0).wait(1).to({y:61.2,alpha:0.906},0).wait(1).to({y:61.9,alpha:0.927},0).wait(1).to({y:62.4,alpha:0.945},0).wait(1).to({y:62.9,alpha:0.96},0).wait(1).to({y:63.2,alpha:0.972},0).wait(1).to({y:63.5,alpha:0.981},0).wait(1).to({y:63.7,alpha:0.988},0).wait(1).to({y:63.9,alpha:0.994},0).wait(1).to({y:64,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:80.1,y:99.1,alpha:1},0).to({_off:true},46).wait(113));

	// Layer_8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_10 = new cjs.Graphics().p("A1NBfIAAi9MAqbAAAIAAC9g");
	var mask_3_graphics_11 = new cjs.Graphics().p("A1NCtIAAlZMAqbAAAIAAFZg");
	var mask_3_graphics_12 = new cjs.Graphics().p("A1ND6IAAnzMAqbAAAIAAHzg");
	var mask_3_graphics_13 = new cjs.Graphics().p("A1NFFIAAqJMAqbAAAIAAKJg");
	var mask_3_graphics_14 = new cjs.Graphics().p("A1NGOIAAsbMAqbAAAIAAMbg");
	var mask_3_graphics_15 = new cjs.Graphics().p("A1NHVIAAupMAqbAAAIAAOpg");
	var mask_3_graphics_16 = new cjs.Graphics().p("A1NIaIAAwzMAqbAAAIAAQzg");
	var mask_3_graphics_17 = new cjs.Graphics().p("A1NJeIAAy7MAqbAAAIAAS7g");
	var mask_3_graphics_18 = new cjs.Graphics().p("A1NKfIAA09MAqbAAAIAAU9g");
	var mask_3_graphics_19 = new cjs.Graphics().p("A1NLfIAA29MAqbAAAIAAW9g");
	var mask_3_graphics_20 = new cjs.Graphics().p("A1NMdIAA45MAqbAAAIAAY5g");
	var mask_3_graphics_21 = new cjs.Graphics().p("A1NNZIAA6xMAqbAAAIAAaxg");
	var mask_3_graphics_22 = new cjs.Graphics().p("A1NOUIAA8nMAqbAAAIAAcng");
	var mask_3_graphics_23 = new cjs.Graphics().p("A1NPMIAA+XMAqbAAAIAAeXg");
	var mask_3_graphics_24 = new cjs.Graphics().p("A1NQCMAAAggDMAqbAAAMAAAAgDg");
	var mask_3_graphics_25 = new cjs.Graphics().p("A1NQ3MAAAghtMAqbAAAMAAAAhtg");
	var mask_3_graphics_26 = new cjs.Graphics().p("A1NRqMAAAgjTMAqbAAAMAAAAjTg");
	var mask_3_graphics_27 = new cjs.Graphics().p("A1NSbMAAAgk1MAqbAAAMAAAAk1g");
	var mask_3_graphics_28 = new cjs.Graphics().p("A1NTKMAAAgmTMAqbAAAMAAAAmTg");
	var mask_3_graphics_29 = new cjs.Graphics().p("A1NT3MAAAgntMAqbAAAMAAAAntg");
	var mask_3_graphics_30 = new cjs.Graphics().p("A1NUjMAAAgpFMAqbAAAMAAAApFg");
	var mask_3_graphics_31 = new cjs.Graphics().p("A1NVMMAAAgqXMAqbAAAMAAAAqXg");
	var mask_3_graphics_32 = new cjs.Graphics().p("A1NV0MAAAgrnMAqbAAAMAAAArng");
	var mask_3_graphics_33 = new cjs.Graphics().p("A1NWaMAAAgszMAqbAAAMAAAAszg");
	var mask_3_graphics_34 = new cjs.Graphics().p("A1NW+MAAAgt7MAqbAAAMAAAAt7g");
	var mask_3_graphics_35 = new cjs.Graphics().p("A1NXgMAAAgu/MAqbAAAMAAAAu/g");
	var mask_3_graphics_36 = new cjs.Graphics().p("A1NYBMAAAgwBMAqbAAAMAAAAwBg");
	var mask_3_graphics_37 = new cjs.Graphics().p("A1NYfMAAAgw9MAqbAAAMAAAAw9g");
	var mask_3_graphics_38 = new cjs.Graphics().p("A1NY8MAAAgx3MAqbAAAMAAAAx3g");
	var mask_3_graphics_39 = new cjs.Graphics().p("A1NZXMAAAgytMAqbAAAMAAAAytg");
	var mask_3_graphics_40 = new cjs.Graphics().p("A1NZwMAAAgzfMAqbAAAMAAAAzfg");
	var mask_3_graphics_41 = new cjs.Graphics().p("A1NaHMAAAg0NMAqbAAAMAAAA0Ng");
	var mask_3_graphics_42 = new cjs.Graphics().p("A1NacMAAAg03MAqbAAAMAAAA03g");
	var mask_3_graphics_43 = new cjs.Graphics().p("A1NavMAAAg1dMAqbAAAMAAAA1dg");
	var mask_3_graphics_44 = new cjs.Graphics().p("A1NbBMAAAg2BMAqbAAAMAAAA2Bg");
	var mask_3_graphics_45 = new cjs.Graphics().p("A1NbRMAAAg2hMAqbAAAMAAAA2hg");
	var mask_3_graphics_46 = new cjs.Graphics().p("A1NbeMAAAg27MAqbAAAMAAAA27g");
	var mask_3_graphics_47 = new cjs.Graphics().p("A1NbqMAAAg3TMAqbAAAMAAAA3Tg");
	var mask_3_graphics_48 = new cjs.Graphics().p("A1Nb1MAAAg3pMAqbAAAMAAAA3pg");
	var mask_3_graphics_49 = new cjs.Graphics().p("A1Nb9MAAAg35MAqbAAAMAAAA35g");
	var mask_3_graphics_50 = new cjs.Graphics().p("A1NcDMAAAg4FMAqbAAAMAAAA4Fg");
	var mask_3_graphics_51 = new cjs.Graphics().p("A1NcIMAAAg4PMAqbAAAMAAAA4Pg");
	var mask_3_graphics_52 = new cjs.Graphics().p("A1NcLMAAAg4VMAqbAAAMAAAA4Vg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A1NcMMAAAg4XMAqbAAAMAAAA4Xg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_3_graphics_10,x:83.4,y:9.5}).wait(1).to({graphics:mask_3_graphics_11,x:83.4,y:17.3}).wait(1).to({graphics:mask_3_graphics_12,x:83.4,y:25}).wait(1).to({graphics:mask_3_graphics_13,x:83.4,y:32.5}).wait(1).to({graphics:mask_3_graphics_14,x:83.4,y:39.8}).wait(1).to({graphics:mask_3_graphics_15,x:83.4,y:46.9}).wait(1).to({graphics:mask_3_graphics_16,x:83.4,y:53.8}).wait(1).to({graphics:mask_3_graphics_17,x:83.4,y:60.6}).wait(1).to({graphics:mask_3_graphics_18,x:83.4,y:67.1}).wait(1).to({graphics:mask_3_graphics_19,x:83.4,y:73.5}).wait(1).to({graphics:mask_3_graphics_20,x:83.4,y:79.7}).wait(1).to({graphics:mask_3_graphics_21,x:83.4,y:85.7}).wait(1).to({graphics:mask_3_graphics_22,x:83.4,y:91.6}).wait(1).to({graphics:mask_3_graphics_23,x:83.4,y:97.2}).wait(1).to({graphics:mask_3_graphics_24,x:83.4,y:102.6}).wait(1).to({graphics:mask_3_graphics_25,x:83.4,y:107.9}).wait(1).to({graphics:mask_3_graphics_26,x:83.4,y:113}).wait(1).to({graphics:mask_3_graphics_27,x:83.4,y:117.9}).wait(1).to({graphics:mask_3_graphics_28,x:83.4,y:122.6}).wait(1).to({graphics:mask_3_graphics_29,x:83.4,y:127.1}).wait(1).to({graphics:mask_3_graphics_30,x:83.4,y:131.5}).wait(1).to({graphics:mask_3_graphics_31,x:83.4,y:135.6}).wait(1).to({graphics:mask_3_graphics_32,x:83.4,y:139.6}).wait(1).to({graphics:mask_3_graphics_33,x:83.4,y:143.4}).wait(1).to({graphics:mask_3_graphics_34,x:83.4,y:147}).wait(1).to({graphics:mask_3_graphics_35,x:83.4,y:150.4}).wait(1).to({graphics:mask_3_graphics_36,x:83.4,y:153.7}).wait(1).to({graphics:mask_3_graphics_37,x:83.4,y:156.7}).wait(1).to({graphics:mask_3_graphics_38,x:83.4,y:159.6}).wait(1).to({graphics:mask_3_graphics_39,x:83.4,y:162.3}).wait(1).to({graphics:mask_3_graphics_40,x:83.4,y:164.8}).wait(1).to({graphics:mask_3_graphics_41,x:83.4,y:167.1}).wait(1).to({graphics:mask_3_graphics_42,x:83.4,y:169.2}).wait(1).to({graphics:mask_3_graphics_43,x:83.4,y:171.1}).wait(1).to({graphics:mask_3_graphics_44,x:83.4,y:172.9}).wait(1).to({graphics:mask_3_graphics_45,x:83.4,y:174.5}).wait(1).to({graphics:mask_3_graphics_46,x:83.4,y:175.8}).wait(1).to({graphics:mask_3_graphics_47,x:83.4,y:177}).wait(1).to({graphics:mask_3_graphics_48,x:83.4,y:178.1}).wait(1).to({graphics:mask_3_graphics_49,x:83.4,y:178.9}).wait(1).to({graphics:mask_3_graphics_50,x:83.4,y:179.5}).wait(1).to({graphics:mask_3_graphics_51,x:83.4,y:180}).wait(1).to({graphics:mask_3_graphics_52,x:83.4,y:180.3}).wait(1).to({graphics:mask_3_graphics_53,x:83.4,y:180.4}).wait(20).to({graphics:null,x:0,y:0}).wait(113));

	// Layer_7
	this.instance_13 = new lib.glacier_path1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1,2);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).to({_off:true},63).wait(113));

	// Layer_1
	this.instance_14 = new lib.sky_glacier();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},73).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,300,285.9,600);
// library properties:
lib.properties = {
	id: '05FF95A64E8548BA973EF771F9261256',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/160x600_whales_atlas_P_.png", id:"160x600_whales_atlas_P_"},
		{src:"images/160x600_whales_atlas_NP_.jpg", id:"160x600_whales_atlas_NP_"}
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