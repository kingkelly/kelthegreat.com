(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_giant_atlas_", frames: [[0,252,300,250],[0,0,300,250],[0,504,300,250],[0,756,300,250],[302,202,99,58],[302,0,169,200]]}
];


// symbols:



(lib.bb_bg = function() {
	this.spriteSheet = ss["300x600_giant_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_black = function() {
	this.spriteSheet = ss["300x600_giant_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_panda = function() {
	this.spriteSheet = ss["300x600_giant_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_sunflare = function() {
	this.spriteSheet = ss["300x600_giant_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["300x600_giant_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.panda_left = function() {
	this.spriteSheet = ss["300x600_giant_atlas_"];
	this.gotoAndStop(5);
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
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(-38,317,0.719,0.719);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBMQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBgBIAAh1IgmAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgXQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIBtAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAAXQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgmAAIAAB1QAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape.setTransform(90.8,270.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BMQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAiPQAAgBAAgBQABAAAAgBQAAAAABAAQABgBAAAAIBsAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAAAXQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIhOAAIAAAfIBDAAQAAAAABAAQABAAAAABQAAAAABABQAAABAAAAIAAAWQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAIhDAAIAAAhIBOAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIAAAXQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_1.setTransform(78.6,270.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWBMQgDgBgBgCIgjg4IgJAMIAAArQAAABAAABQAAAAAAABQgBAAgBAAQAAABgBAAIgbAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAiPQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAbAAQABAAAAABQABAAABAAQAAABAAAAQAAABAAABIAAA3IAog3QACgDADgBIAjAAQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIgBADIg0A/IA4BOQAAABAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAg");
	this.shape_2.setTransform(65.1,270.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoA4QgXgWAAgiQAAgfAXgXQAXgWAfAAQAYgBAYARQABAAAAAAQAAABAAAAQABABgBABQAAAAAAABIgOAVQgBABAAAAQgBAAAAAAQgBABAAgBQgBAAgBAAQgPgLgPAAQgRAAgNAOQgNAOAAARQAAATANAOQANAOARAAQALAAAJgFIAFgDIAFgDQABAAABgBQABAAAAAAQABAAAAABQABAAAAABIAOAVQAAAAAAABQABAAgBABQAAAAAAABQAAAAgBABQgUAPgcAAQgfABgXgWg");
	this.shape_3.setTransform(51.1,270.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBMQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAiPQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIAZAAQABAAABABQAAAAABAAQAAABAAAAQABABAAABIAACPQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_4.setTransform(40.6,270.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBMQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAh1IgoAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgXQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAIBuAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAAXQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgnAAIAAB1QAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_5.setTransform(31.5,270.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBMQgDgBgCgDIgYgxIgXAAIAAAxQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAIgaAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAiPQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIBIAAQASABAPAPQAOAOgBAVQABAQgKAMQgJANgOAEIAbAyIABADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAgAgcgEIAjAAQAHAAAHgFQAHgHAAgIQAAgKgHgGQgHgFgHgBIgjAAg");
	this.shape_6.setTransform(13.8,270.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBIQgMgEgIgIQgHgIgFgMQgEgLAAgPIAAhWQAAgBAAgBQAAAAABgBQAAAAABAAQABgBAAAAIAbAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABUQAAAiAcAAQAdAAAAgiIAAhUQAAgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAaAAQABAAABABQABAAAAAAQABABAAAAQAAABAAABIAABWQAAAPgEALQgEAMgIAIQgIAIgMAEQgMAEgOAAQgNAAgMgEg");
	this.shape_7.setTransform(-1.8,270.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3A4QgXgWAAghQAAgiAXgWQAXgWAgABQAhgBAXAWQAXAWAAAiQAAAhgXAWQgXAWghgBQggABgXgWgAgfgfQgNANAAATQAAASANAOQANAOASAAQATAAANgOQAOgNAAgTQAAgTgOgNQgNgOgTAAQgSAAgNAOg");
	this.shape_8.setTransform(-18.2,270.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBMQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAhDIg3hLIgBgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAiAAQADABADADIAeAwIAfgwQACgDADgBIAiAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgBADIg3BLIAABDQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_9.setTransform(-33,270.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBMQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAh1IgoAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgXQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAIBuAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAAXQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgnAAIAAB1QAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_10.setTransform(-51.3,270.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2BMQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAiPQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIBsAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAAAXQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIhOAAIAAAfIBDAAQABAAAAAAQABAAAAABQAAAAABABQAAABAAAAIAAAWQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIhDAAIAAAhIBOAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAIAAAXQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_11.setTransform(-63.4,270.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgwA3QgXgWAAghQAAgfAXgXQAXgXAfAAQAYAAAXAQQABABAAAAQABABAAAAQAAABAAAAQAAABgBABIgNAVQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQgQgLgOAAQgRAAgNAOQgNANAAASQAAATANAOQANANARAAQAVAAAMgJIAAgNIgcAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgYQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIA6AAQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABIAABLQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIgbAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgBQgPAHgSAAQghAAgVgXg");
	this.shape_12.setTransform(-79.6,270.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,1,1).p("AzVkBMAmrAAAIAAIEMgmrAAAg");
	this.shape_13.setTransform(4,270.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.8,243.6,249.7,115.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.208,1],-36.1,0,35.9,0).s().p("AlnPFIAA+JILPAAIAAeJg");
	this.shape.setTransform(22,103.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.panda_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-14,0,183.1,200), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_bg();
	this.instance.parent = this;
	this.instance.setTransform(0,210);

	this.instance_1 = new lib.bb_bg();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,300,460), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBRQgGgGAAgIQAAgJAGgFQAGgGAHAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAFgJAAQgHAAgGgFgAgGAcQgEAAAAgDIgJhqQAAgEADAAIAiAAQAAAAABAAQABAAAAABQAAAAAAABQAAABAAABIgJBqQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(147.2,56.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBVIgDgBIhNhqIAABnQAAAEgDAAIgcAAQgEAAAAgEIAAihQAAgEAEAAIAcAAIADACIBNBpIAAhnQAAgEADAAIAbAAQAFAAAAAEIAAChQAAAEgFAAg");
	this.shape_1.setTransform(133.7,56.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_2.setTransform(117.4,56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABVQgDAAAAgEIAAihQAAgEADAAIBKAAQAYAAARARQARARAAAaQAAAZgRARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAgAAQAMAAAIgGQAJgHAAgNQAAgOgJgHQgIgGgMAAIggAAg");
	this.shape_3.setTransform(101.3,56.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9A/QgbgZAAgmQAAglAbgZQAagYAjAAQAlAAAaAYQAbAZAAAlQAAAmgbAZQgaAYglAAQgjAAgagYgAgjgkQgPAQAAAUQAAAWAPAPQAPAPAUAAQAWAAAPgPQAOgPAAgWQAAgUgOgQQgQgPgVAAQgUAAgPAPg");
	this.shape_4.setTransform(82.6,56.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBWQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBIgfhlIgeBlQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgnAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIgzijQgBgDAEAAIAhAAQACAAACADIAiB5IAih5QABgDADAAIAgAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAiB5IAjh5QAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIAjAAQAEgBgCAFIg0CiQAAABAAABQgBAAAAABQgBAAAAAAQAAABgBAAg");
	this.shape_5.setTransform(53.2,56.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9A/QgbgZAAgmQAAglAbgZQAagYAjAAQAlAAAaAYQAaAZABAlQgBAmgaAZQgaAYglAAQgjAAgagYgAgjgkQgPAQAAAUQAAAWAPAPQAPAPAUAAQAWAAAPgPQAPgPAAgWQAAgUgPgQQgQgPgVAAQgUAAgPAPg");
	this.shape_6.setTransform(30.5,56.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBVIgEgBIhNhqIAABnQAAAEgEAAIgbAAQgDAAAAgEIAAihQAAgEADAAIAbAAIAEACIBMBpIAAhnQAAgEAFAAIAbAAQADAAAAAEIAAChQAAAEgDAAg");
	this.shape_7.setTransform(11.3,56.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_8.setTransform(196,27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3A+QgZgZAAglQAAgjAagaQAagaAjAAQAbAAAaASQAEACgDADIgPAYQgCADgDgCQgSgMgQAAQgTAAgPAPQgPAQAAAUQAAAWAPAPQAOAPAUAAQAXAAAOgLIAAgOIgfAAQgEAAAAgEIAAgaQAAgEAEAAIBAAAQAEAAAAAEIAABUQAAAEgEAAIgdAAQgEAAAAgEIAAgBQgSAIgTAAQglAAgZgag");
	this.shape_9.setTransform(177.8,27.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_10.setTransform(160.8,27.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BEQgEgDADgCIARgVQACgDADACQASANATAAQAZAAAAgTQAAgJgOgFIgNgFIgNgEQgXgJgKgHQgOgOABgVQgBgLAFgIQAFgJAIgHQAIgFAMgEQAMgDAPAAQAZAAAaAPQACACgBADIgQAWQgCAEgCgCQgRgLgQAAQgYAAgBAOQAAAIARAGIAQAGIARAGQAmANAAAjQgBAYgRAOQgSAOgcAAQghAAgagTg");
	this.shape_11.setTransform(146.1,27.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag7BEQgEgDADgCIARgVQACgDADACQARANAUAAQAZAAAAgTQAAgJgPgFIgLgFIgOgEQgXgJgKgHQgOgOABgVQAAgLAEgIQAFgJAIgHQAIgFAMgEQAMgDAOAAQAaAAAaAPQACACgBADIgQAWQgCAEgCgCQgRgLgQAAQgYAAgBAOQAAAIARAGIAQAGIARAGQAlANAAAjQAAAYgRAOQgSAOgcAAQghAAgagTg");
	this.shape_12.setTransform(132.3,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_13.setTransform(117.4,27.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhABVQgEAAABgEIAAihQgBgEAEAAIBKAAQAYAAARARQARARABAaQgBAZgRARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAfAAQANAAAIgGQAJgHAAgNQgBgOgIgHQgIgGgNAAIgfAAg");
	this.shape_14.setTransform(102,27.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_15.setTransform(78.7,27.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhIBVQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAiiQAAgEADAAIBCAAQAkAAAYAZQAWAYAAAjQAAAlgZAYQgZAYgiAAgAgmA1IAaAAQAUAAAPgPQAPgQAAgWQAAgZgSgQQgJgIgQgCIgIgBIgPAAIgKAAg");
	this.shape_16.setTransform(62.3,27.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AArBVIgEgBIhNhqIAABnQAAAEgDAAIgcAAQgDAAgBgEIAAihQABgEADAAIAcAAIADACIBNBpIAAhnQAAgEAEAAIAaAAQAEAAAAAEIAAChQAAAEgEAAg");
	this.shape_17.setTransform(43.5,27.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_18.setTransform(26.3,27.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhABVQgDAAAAgEIAAihQAAgEADAAIBKAAQAYAAARARQARARAAAaQAAAZgRARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAgAAQAMAAAIgGQAJgHAAgNQAAgOgJgHQgIgGgMAAIggAAg");
	this.shape_19.setTransform(10.8,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNBRQgGgGAAgIQAAgJAGgFQAGgGAHAAQAJAAAFAGQAGAFAAAJQAAAIgGAGQgFAFgJAAQgHAAgGgFgAgGAcQgEAAAAgDIgJhqQAAgEADAAIAiAAQAAAAABAAQABAAAAABQAAAAAAABQAAABAAABIgJBqQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_20.setTransform(147.2,57.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAqBVIgDgBIhNhqIAABnQAAAEgDAAIgcAAQgEAAAAgEIAAihQAAgEAEAAIAcAAIADACIBNBpIAAhnQAAgEADAAIAbAAQAFAAAAAEIAAChQAAAEgFAAg");
	this.shape_21.setTransform(133.7,57.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_22.setTransform(117.4,57.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhABVQgDAAAAgEIAAihQAAgEADAAIBKAAQAYAAARARQARARAAAaQAAAZgRARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAgAAQAMAAAIgGQAJgHAAgNQAAgOgJgHQgIgGgMAAIggAAg");
	this.shape_23.setTransform(101.3,57.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag9A/QgbgZAAgmQAAglAbgZQAagYAjAAQAlAAAaAYQAbAZAAAlQAAAmgbAZQgaAYglAAQgjAAgagYgAgjgkQgPAQAAAUQAAAWAPAPQAPAPAUAAQAWAAAPgPQAOgPAAgWQAAgUgOgQQgQgPgVAAQgUAAgPAPg");
	this.shape_24.setTransform(82.6,57.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAiBWQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBIgfhlIgeBlQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgnAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIgzijQgBgDAEAAIAhAAQACAAACADIAiB5IAih5QABgDADAAIAgAAQAAAAABAAQAAAAAAAAQABABAAABQAAAAABABIAiB5IAjh5QAAgBAAAAQABgBAAgBQAAAAABAAQAAAAAAAAIAjAAQAEAAgCAEIg0CiQAAABAAABQgBAAAAABQgBAAAAAAQAAABgBAAg");
	this.shape_25.setTransform(53.2,57.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag9A/QgbgZAAgmQAAglAbgZQAagYAjAAQAlAAAaAYQAaAZABAlQgBAmgaAZQgaAYglAAQgjAAgagYgAgjgkQgPAQAAAUQAAAWAPAPQAPAPAUAAQAWAAAPgPQAPgPAAgWQAAgUgPgQQgQgPgVAAQgUAAgPAPg");
	this.shape_26.setTransform(30.5,57.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AArBVIgEgBIhNhqIAABnQAAAEgEAAIgbAAQgDAAAAgEIAAihQAAgEADAAIAbAAIAEACIBMBpIAAhnQAAgEAFAAIAbAAQADAAAAAEIAAChQAAAEgDAAg");
	this.shape_27.setTransform(11.3,57.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_28.setTransform(196,28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag3A+QgZgZAAglQAAgjAagaQAagaAjAAQAbAAAaASQAEACgDADIgPAYQgCADgDgCQgSgMgQAAQgTAAgPAPQgPAQAAAUQAAAWAPAPQAOAPAUAAQAXAAAOgLIAAgOIgfAAQgEAAAAgEIAAgaQAAgEAEAAIBAAAQAEAAAAAEIAABUQAAAEgEAAIgdAAQgEAAAAgEIAAgBQgSAIgTAAQglAAgZgag");
	this.shape_29.setTransform(177.8,28.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_30.setTransform(160.8,28.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag7BEQgEgDADgCIARgWQACgCADACQASANATAAQAZAAAAgTQAAgJgOgFIgNgFIgNgEQgXgJgKgHQgOgOABgVQgBgLAFgIQAFgJAIgHQAIgFAMgEQAMgDAPAAQAZAAAaAPQACABgBAEIgQAWQgCAEgCgCQgRgLgQAAQgYAAgBAOQAAAJARAGIAQAFIARAGQAmANAAAjQgBAYgRAOQgSAOgcAAQghAAgagTg");
	this.shape_31.setTransform(146.1,28.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag7BEQgEgDADgCIARgWQACgCADACQARANAUAAQAZAAAAgTQAAgJgPgFIgLgFIgOgEQgXgJgKgHQgOgOABgVQAAgLAEgIQAFgJAIgHQAIgFAMgEQAMgDAOAAQAaAAAaAPQACABgBAEIgQAWQgCAEgCgCQgRgLgQAAQgYAAgBAOQAAAJARAGIAQAFIARAGQAlANAAAjQAAAYgRAOQgSAOgcAAQghAAgagTg");
	this.shape_32.setTransform(132.3,28.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_33.setTransform(117.4,28.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhABVQgEAAABgEIAAihQgBgEAEAAIBKAAQAYAAARARQARARABAaQgBAZgRARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAfAAQANAAAIgGQAJgHAAgNQgBgOgIgHQgIgGgNAAIgfAAg");
	this.shape_34.setTransform(102,28.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_35.setTransform(78.7,28.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhIBVQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAiiQAAgEADAAIBCAAQAkAAAYAZQAWAYAAAjQAAAlgZAYQgZAYgiAAgAgmA1IAaAAQAUAAAPgPQAPgQAAgWQAAgZgSgQQgJgIgQgCIgIgBIgPAAIgKAAg");
	this.shape_36.setTransform(62.3,28.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AArBVIgEgBIhNhqIAABnQAAAEgDAAIgcAAQgDAAgBgEIAAihQABgEADAAIAcAAIADACIBNBpIAAhnQAAgEAEAAIAaAAQAEAAAAAEIAAChQAAAEgEAAg");
	this.shape_37.setTransform(43.5,28.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_38.setTransform(26.3,28.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhABVQgDAAAAgEIAAihQAAgEADAAIBKAAQAYAAARARQARARAAAaQAAAZgRARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAgAAQAMAAAIgGQAJgHAAgNQAAgOgJgHQgIgGgMAAIggAAg");
	this.shape_39.setTransform(10.8,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,10.5,205.2,63.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgGgGg");
	this.shape.setTransform(258.6,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BEQgEgCADgDIARgVQACgEADADQASANATAAQAZAAAAgTQAAgJgOgGIgNgEIgNgEQgXgJgKgIQgOgNABgVQgBgLAFgJQAFgIAIgGQAIgHAMgDQAMgDAOAAQAaAAAaAPQACACgBADIgQAWQgCAEgCgCQgRgLgQAAQgYABgBANQAAAIARAGIAQAHIARAFQAmANAAAjQgBAYgRAOQgSAOgcAAQghAAgagTg");
	this.shape_1.setTransform(248.3,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BEQgEgCADgDIARgVQACgEADADQARANAUAAQAZAAAAgTQAAgJgPgGIgLgEIgOgEQgXgJgKgIQgOgNABgVQAAgLAEgJQAFgIAIgGQAIgHAMgDQAMgDAOAAQAaAAAaAPQACACgBADIgQAWQgCAEgCgCQgRgLgQAAQgYABgBANQAAAIARAGIAQAHIARAFQAlANAAAjQAAAYgSAOQgRAOgcAAQghAAgagTg");
	this.shape_2.setTransform(234.4,54.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBVQgEAAAAgEIAAihQAAgEAEAAIAdAAQAEAAAAAEIAAChQAAAEgEAAg");
	this.shape_3.setTransform(223.7,54.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BVQgDAAgBgEIAAhhIgiA5QAAABAAABQgBAAAAABQgBAAAAABQAAAAgBAAIgXAAIgDgEIgjg5IAABhQAAAEgDAAIgdAAQgDAAgBgEIAAihQABgEADAAIAfAAQACAAACAEIAuBQIAvhQQADgEABAAIAfAAQADAAAAAEIAAChQAAAEgDAAg");
	this.shape_4.setTransform(209.4,54.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBVQgEAAAAgEIAAiEIgrAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgaQAAgEAEAAIB7AAQAEAAAAAEIAAAaQAAADgEAAIgrAAIAACEQgBAEgEAAg");
	this.shape_5.setTransform(185.9,54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAlIgEgFQgDgDAEgCQAQgKgBgNQgJgBgGgFQgFgGAAgIQAAgKAHgFQAGgGAKAAQALAAAGAIQAHAHAAAOQAAANgKANQgLAOgOAFIgDABIgBgBg");
	this.shape_6.setTransform(177,49.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBVIgEgBIhNhqIAABnQAAAEgEAAIgbAAQgDAAgBgEIAAihQABgEADAAIAbAAIAEACIBMBpIAAhnQABgEAEAAIAbAAQADAAAAAEIAAChQAAAEgDAAg");
	this.shape_7.setTransform(165.8,54.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFABACgGIA7ihQACgEACAAIAeAAQACAAACAEIA6CiQACAEgEAAgAgSATIAlAAIgTg4g");
	this.shape_8.setTransform(148.6,54.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA/QgagZAAgmQAAgjAagaQAagaAkAAQAaAAAbASQADACgCADIgQAYQgCADgDgCQgRgMgQAAQgUAAgPAPQgOAQAAAUQAAAWAOAPQAPAQAUAAQAMgBAJgEIAGgEIAGgEQAEgCABAEIAQAWQACADgDADQgWARgfABQgkgBgagYg");
	this.shape_9.setTransform(133,54.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOBVQgEAAABgEIAAiEIgsAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAgaQAAgEAEAAIB7AAQAEAAAAAEIAAAaQAAADgEAAIgrAAIAACEQAAAEgFAAg");
	this.shape_10.setTransform(111.9,54.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BEQgDgCACgDIARgVQACgEADADQARANAUAAQAZAAAAgTQAAgJgOgGIgNgEIgNgEQgYgJgJgIQgOgNAAgVQAAgLAFgJQAFgIAIgGQAIgHAMgDQANgDAOAAQAZAAAZAPQAEACgDADIgOAWQgDAEgDgCQgQgLgQAAQgYABAAANQgBAIARAGIAQAHIARAFQAmANAAAjQAAAYgSAOQgSAOgdAAQggAAgagTg");
	this.shape_11.setTransform(98.6,54.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBSQgNgFgJgJQgJgJgFgNQgFgNAAgQIAAhiQAAgEAEAAIAeAAQADAAAAAEIAABeQAAAnAgAAQAhAAAAgnIAAheQAAgEAEAAIAdAAQAEAAAAAEIAABiQAAAQgFANQgFANgIAJQgJAJgNAFQgNAEgRAAQgPAAgNgEg");
	this.shape_12.setTransform(82.9,54.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0BHQgDgDAEgEIARgRQACgDADADQAIAIALAAQAbAAAAgiIAAhmQAAgEAEAAIAdAAQAEAAAAAEIAABmQAAAggTASQgRAPgcAAQgaAAgQgPg");
	this.shape_13.setTransform(67.2,54.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBSQgNgFgJgJQgJgJgFgNQgFgNAAgQIAAhiQAAgEAEAAIAeAAQADAAAAAEIAABeQAAAnAgAAQAhAAAAgnIAAheQAAgEAEAAIAdAAQAEAAAAAEIAABiQAAAQgFANQgFANgIAJQgJAJgNAFQgNAEgRAAQgPAAgNgEg");
	this.shape_14.setTransform(46.4,54.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+A/QgbgZAAgmQAAglAbgZQAagYAkAAQAlAAAaAYQAaAZAAAlQAAAmgaAZQgaAYglAAQgkAAgagYgAgjgkQgPAQAAAUQAAAWAOAPQAQAPAUAAQAVAAAPgPQAQgPgBgWQABgUgQgQQgPgPgVAAQgUAAgPAPg");
	this.shape_15.setTransform(27.8,54.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBVQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAgBIAAhLIg+hVIgBgDQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAmAAQAFAAACAEIAiA1IAjg1QACgEAEAAIAmAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIgBADIg/BVIAABLQAAAEgDAAg");
	this.shape_16.setTransform(10,54.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_17.setTransform(190,27.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtA/QgagZAAgmQAAgjAagaQAagZAkAAQAaAAAbARQADACgCADIgQAYQgCADgDgCQgRgMgQAAQgUAAgPAPQgOAQAAAUQAAAVAOAQQAPAPAUAAQAMAAAJgEIAGgEIAGgEQAEgCABAEIAQAWQACADgDADQgWARgfABQgkAAgagZg");
	this.shape_18.setTransform(173.8,27.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAqBVIgDgBIhNhqIAABnQAAAEgDAAIgcAAQgDAAgBgEIAAihQABgEADAAIAcAAIADACIBNBpIAAhnQAAgEADAAIAbAAQAEAAAAAEIAAChQAAAEgEAAg");
	this.shape_19.setTransform(156.4,27.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_20.setTransform(140.1,27.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBVQgEAAAAgEIAAihQAAgEAEAAIAdAAQAEAAAAAEIAAChQAAAEgEAAg");
	this.shape_21.setTransform(127.9,27.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAbBVQgEAAgBgEIgcg2IgZAAIAAA2QAAAEgEAAIgeAAQgEAAAAgEIAAihQAAgEAEAAIBSAAQAVAAAQAQQAQARAAAXQAAASgKAOQgKAOgRAGIAeA4IABAEQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAgAgfgFIAnAAQAIAAAIgGQAHgHABgKQgBgLgHgHQgIgFgIAAIgnAAg");
	this.shape_22.setTransform(116.3,27.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_23.setTransform(100.4,27.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhABVQgDAAAAgEIAAihQAAgEADAAIBKAAQAYAAARARQASARgBAaQABAZgSARQgRAQgYAAIgoAAIAAAvQAAAEgEAAgAgeACIAgAAQAMAAAIgGQAIgHAAgNQABgOgJgHQgIgGgMAAIggAAg");
	this.shape_24.setTransform(84.3,27.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAtBVQgEAAgDgEIgmg0IglA0QgDAEgEAAIgoAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIABgEIBAhPIg/hQIgBgDQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAnAAQAEAAADAEIAkA0IAkgzQADgFAEAAIAoAAQAFAAgEAFIg+BPIBABQIABAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_25.setTransform(66.9,27.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag9BVQgDAAAAgEIAAihQAAgEADAAIB7AAQADAAAAAEIAAAaQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIhZAAIAAAjIBLAAQAEAAAAAEIAAAYQAAAEgEAAIhLAAIAAAkIBZAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAAEgDAAg");
	this.shape_26.setTransform(51.3,27.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAqBVIgDgBIhNhqIAABnQAAAEgDAAIgcAAQgEAAAAgEIAAihQAAgEAEAAIAcAAIADACIBNBpIAAhnQAAgEADAAIAbAAQAFAAAAAEIAAChQAAAEgFAAg");
	this.shape_27.setTransform(27,27.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AArBVQgDAAgBgDIgKgfIg5AAIgKAfQgBADgDAAIggAAQgFAAACgEIA7ihQACgFACAAIAeAAQACAAACAFIA6ChQACAFgEgBgAgSATIAlAAIgTg4g");
	this.shape_28.setTransform(9.8,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,10.5,264.2,60.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_sunflare();
	this.instance.parent = this;
	this.instance.setTransform(-38,-31,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-38,-31,375,312.5), null);


(lib.panduh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.486,1],0,-51.4,0,57.2).s().p("A4XInIAAxNMAwvAAAIAARNg");
	this.shape.setTransform(150.7,264);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bb_panda();
	this.instance.parent = this;
	this.instance.setTransform(-68,-31,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panduh, new cjs.Rectangle(-68,-31,375,350.2), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_black();
	this.instance.parent = this;
	this.instance.setTransform(-68,-31,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(-68,-31,375,312.5), null);


// stage content:
(lib._300x600_giant = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(145.2,228.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(162).to({_off:false},0).to({y:217.6,alpha:1},53,cjs.Ease.get(1)).wait(31));

	// Layer 6
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122,35.8,1,1,0,0,0,106,25.4);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(108.7,36.1,1,1,0,0,0,93.7,26.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},25,cjs.Ease.get(-1)).wait(76).to({alpha:0},23,cjs.Ease.get(1)).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(125).to({_off:false},0).to({alpha:1},25,cjs.Ease.get(-1)).wait(96));

	// tiopBlok
	this.instance_3 = new lib.black();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.6,141.2,1.331,1.331,180,0,0,150.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:94.1,y:162.9,alpha:0},72,cjs.Ease.get(-1)).wait(174));

	// pandatop
	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(110.5,126.4,1.512,1.512,90,0,0,84.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:150.5,y:166.4},184).wait(62));

	// blok
	this.instance_5 = new lib.black();
	this.instance_5.parent = this;
	this.instance_5.setTransform(181,486.1,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:119.5,regY:125.2,x:150.4,y:485.6},0).wait(1).to({x:150.2,y:484.9},0).wait(1).to({x:150.1,y:484.2},0).wait(1).to({x:150,y:483.5},0).wait(1).to({x:149.8,y:482.8},0).wait(1).to({x:149.7,y:482},0).wait(1).to({x:149.5,y:481.2},0).wait(1).to({x:149.4,y:480.4},0).wait(1).to({x:149.2,y:479.6},0).wait(1).to({x:149.1,y:478.8},0).wait(1).to({x:148.9,y:477.9},0).wait(1).to({x:148.7,y:477.1},0).wait(1).to({x:148.6,y:476.2},0).wait(1).to({x:148.4,y:475.3},0).wait(1).to({x:148.2,y:474.3},0).wait(1).to({x:148,y:473.4},0).wait(1).to({x:147.8,y:472.4},0).wait(1).to({x:147.7,y:471.4},0).wait(1).to({x:147.5,y:470.4},0).wait(1).to({x:147.3,y:469.3},0).wait(1).to({x:147.1,y:468.3},0).wait(1).to({x:146.8,y:467.2},0).wait(1).to({x:146.6,y:466.1},0).wait(1).to({x:146.4,y:464.9},0).wait(1).to({x:146.2,y:463.8},0).wait(1).to({x:146,y:462.6},0).wait(1).to({x:145.7,y:461.4},0).wait(1).to({x:145.5,y:460.2},0).wait(1).to({x:145.3,y:459},0).wait(1).to({x:145,y:457.8},0).wait(1).to({x:144.8,y:456.5},0).wait(1).to({x:144.5,y:455.2},0).wait(1).to({x:144.3,y:453.9},0).wait(1).to({x:144,y:452.6},0).wait(1).to({x:143.8,y:451.2},0).wait(1).to({x:143.5,y:449.9},0).wait(1).to({x:143.3,y:448.5},0).wait(1).to({x:143,y:447.1},0).wait(1).to({x:142.7,y:445.7},0).wait(1).to({regX:150,regY:125,x:173,y:444.1},0).wait(1).to({regX:119.5,regY:125.2,x:142.2,y:442.8,alpha:0.987},0).wait(1).to({x:141.9,y:441.4,alpha:0.973},0).wait(1).to({x:141.6,y:439.9,alpha:0.96},0).wait(1).to({x:141.3,y:438.4,alpha:0.946},0).wait(1).to({x:141,y:436.9,alpha:0.932},0).wait(1).to({x:140.8,y:435.4,alpha:0.919},0).wait(1).to({x:140.5,y:433.9,alpha:0.905},0).wait(1).to({x:140.2,y:432.4,alpha:0.891},0).wait(1).to({x:139.9,y:430.9,alpha:0.877},0).wait(1).to({x:139.6,y:429.4,alpha:0.863},0).wait(1).to({x:139.3,y:427.8,alpha:0.849},0).wait(1).to({x:139,y:426.3,alpha:0.835},0).wait(1).to({x:138.7,y:424.8,alpha:0.82},0).wait(1).to({x:138.4,y:423.3,alpha:0.806},0).wait(1).to({x:138.1,y:421.7,alpha:0.792},0).wait(1).to({x:137.8,y:420.2,alpha:0.778},0).wait(1).to({x:137.5,y:418.7,alpha:0.764},0).wait(1).to({x:137.2,y:417.1,alpha:0.75},0).wait(1).to({x:137,y:415.6,alpha:0.736},0).wait(1).to({x:136.7,y:414.1,alpha:0.722},0).wait(1).to({x:136.4,y:412.6,alpha:0.708},0).wait(1).to({x:136.1,y:411.1,alpha:0.694},0).wait(1).to({x:135.8,y:409.6,alpha:0.68},0).wait(1).to({x:135.5,y:408.1,alpha:0.667},0).wait(1).to({x:135.2,y:406.7,alpha:0.653},0).wait(1).to({x:135,y:405.2,alpha:0.64},0).wait(1).to({x:134.7,y:403.8,alpha:0.626},0).wait(1).to({x:134.4,y:402.3,alpha:0.613},0).wait(1).to({x:134.1,y:400.9,alpha:0.6},0).wait(1).to({x:133.9,y:399.5,alpha:0.587},0).wait(1).to({x:133.6,y:398.1,alpha:0.574},0).wait(1).to({x:133.3,y:396.7,alpha:0.562},0).wait(1).to({x:133.1,y:395.4,alpha:0.549},0).wait(1).to({x:132.8,y:394,alpha:0.537},0).wait(1).to({x:132.6,y:392.7,alpha:0.524},0).wait(1).to({x:132.3,y:391.4,alpha:0.512},0).wait(1).to({x:132.1,y:390.1,alpha:0.5},0).wait(1).to({x:131.8,y:388.8,alpha:0.489},0).wait(1).to({x:131.6,y:387.5,alpha:0.477},0).wait(1).to({x:131.3,y:386.3,alpha:0.465},0).wait(1).to({x:131.1,y:385.1,alpha:0.454},0).wait(1).to({x:130.9,y:383.9,alpha:0.443},0).wait(1).to({x:130.6,y:382.7,alpha:0.432},0).wait(1).to({x:130.4,y:381.5,alpha:0.421},0).wait(1).to({x:130.2,y:380.4,alpha:0.411},0).wait(1).to({x:130,y:379.3,alpha:0.4},0).wait(1).to({x:129.8,y:378.1,alpha:0.39},0).wait(1).to({x:129.6,y:377.1,alpha:0.38},0).wait(1).to({x:129.4,y:376,alpha:0.37},0).wait(1).to({x:129.1,y:374.9,alpha:0.36},0).wait(1).to({x:128.9,y:373.9,alpha:0.351},0).wait(1).to({x:128.8,y:372.9,alpha:0.342},0).wait(1).to({x:128.6,y:371.9,alpha:0.332},0).wait(1).to({x:128.4,y:370.9,alpha:0.323},0).wait(1).to({x:128.2,y:369.9,alpha:0.314},0).wait(1).to({x:128,y:369,alpha:0.306},0).wait(1).to({x:127.8,y:368.1,alpha:0.297},0).wait(1).to({x:127.7,y:367.1,alpha:0.289},0).wait(1).to({x:127.5,y:366.3,alpha:0.28},0).wait(1).to({x:127.3,y:365.4,alpha:0.272},0).wait(1).to({x:127.2,y:364.5,alpha:0.265},0).wait(1).to({x:127,y:363.7,alpha:0.257},0).wait(1).to({x:126.8,y:362.9,alpha:0.249},0).wait(1).to({x:126.7,y:362.1,alpha:0.242},0).wait(1).to({x:126.5,y:361.3,alpha:0.234},0).wait(1).to({x:126.4,y:360.5,alpha:0.227},0).wait(1).to({x:126.2,y:359.7,alpha:0.22},0).wait(1).to({x:126.1,y:359,alpha:0.213},0).wait(1).to({x:126,y:358.3,alpha:0.207},0).wait(1).to({x:125.8,y:357.5,alpha:0.2},0).wait(1).to({x:125.7,y:356.9,alpha:0.194},0).wait(1).to({x:125.5,y:356.2,alpha:0.187},0).wait(1).to({x:125.4,y:355.5,alpha:0.181},0).wait(1).to({x:125.3,y:354.9,alpha:0.175},0).wait(1).to({x:125.2,y:354.2,alpha:0.169},0).wait(1).to({x:125.1,y:353.6,alpha:0.164},0).wait(1).to({x:124.9,y:353,alpha:0.158},0).wait(1).to({x:124.8,y:352.4,alpha:0.153},0).wait(1).to({x:124.7,y:351.8,alpha:0.147},0).wait(1).to({x:124.6,y:351.2,alpha:0.142},0).wait(1).to({x:124.5,y:350.7,alpha:0.137},0).wait(1).to({x:124.4,y:350.1,alpha:0.132},0).wait(1).to({x:124.3,y:349.6,alpha:0.127},0).wait(1).to({x:124.2,y:349.1,alpha:0.122},0).wait(1).to({x:124.1,y:348.6,alpha:0.118},0).wait(1).to({x:124,y:348.1,alpha:0.113},0).wait(1).to({x:123.9,y:347.6,alpha:0.109},0).wait(1).to({x:123.8,y:347.2,alpha:0.104},0).wait(1).to({x:123.7,y:346.7,alpha:0.1},0).wait(1).to({x:123.6,y:346.3,alpha:0.096},0).wait(1).to({y:345.8,alpha:0.092},0).wait(1).to({x:123.5,y:345.4,alpha:0.088},0).wait(1).to({x:123.4,y:345,alpha:0.084},0).wait(1).to({x:123.3,y:344.6,alpha:0.081},0).wait(1).to({y:344.2,alpha:0.077},0).wait(1).to({x:123.2,y:343.8,alpha:0.074},0).wait(1).to({x:123.1,y:343.5,alpha:0.07},0).wait(1).to({x:123,y:343.1,alpha:0.067},0).wait(1).to({y:342.8,alpha:0.064},0).wait(1).to({x:122.9,y:342.4,alpha:0.061},0).wait(1).to({y:342.1,alpha:0.058},0).wait(1).to({x:122.8,y:341.8,alpha:0.055},0).wait(1).to({x:122.7,y:341.5,alpha:0.052},0).wait(1).to({y:341.2,alpha:0.049},0).wait(1).to({x:122.6,y:340.9,alpha:0.047},0).wait(1).to({y:340.6,alpha:0.044},0).wait(1).to({x:122.5,y:340.4,alpha:0.042},0).wait(1).to({y:340.1,alpha:0.039},0).wait(1).to({x:122.4,y:339.8,alpha:0.037},0).wait(1).to({y:339.6,alpha:0.035},0).wait(1).to({x:122.3,y:339.4,alpha:0.032},0).wait(1).to({y:339.1,alpha:0.03},0).wait(1).to({x:122.2,y:338.9,alpha:0.028},0).wait(1).to({y:338.7,alpha:0.026},0).wait(1).to({y:338.5,alpha:0.025},0).wait(1).to({x:122.1,y:338.3,alpha:0.023},0).wait(1).to({y:338.1,alpha:0.021},0).wait(1).to({y:338,alpha:0.02},0).wait(1).to({x:122,y:337.8,alpha:0.018},0).wait(1).to({y:337.6,alpha:0.016},0).wait(1).to({y:337.5,alpha:0.015},0).wait(1).to({x:121.9,y:337.3,alpha:0.014},0).wait(1).to({y:337.2,alpha:0.012},0).wait(1).to({y:337.1,alpha:0.011},0).wait(1).to({y:336.9,alpha:0.01},0).wait(1).to({x:121.8,y:336.8,alpha:0.009},0).wait(1).to({y:336.7,alpha:0.008},0).wait(1).to({y:336.6,alpha:0.007},0).wait(1).to({y:336.5,alpha:0.006},0).wait(1).to({y:336.4,alpha:0.005},0).wait(1).to({x:121.7},0).wait(1).to({y:336.3,alpha:0.004},0).wait(1).to({y:336.2,alpha:0.003},0).wait(1).to({y:336.1},0).wait(1).to({alpha:0.002},0).wait(1).to({y:336},0).wait(1).to({alpha:0.001},0).wait(2).to({y:335.9},0).wait(1).to({alpha:0},0).wait(4).to({regX:150,regY:125,x:152.2,y:335.7},0).to({_off:true},1).wait(61));

	// panda
	this.instance_6 = new lib.panduh();
	this.instance_6.parent = this;
	this.instance_6.setTransform(180,504.1,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:119.5,regY:144.1,x:149.4,y:522.4},0).wait(1).to({x:149.2,y:521.7},0).wait(1).to({x:149.1,y:520.9},0).wait(1).to({x:148.9,y:520.2},0).wait(1).to({x:148.8,y:519.4},0).wait(1).to({x:148.7,y:518.5},0).wait(1).to({x:148.5,y:517.7},0).wait(1).to({x:148.3,y:516.8},0).wait(1).to({x:148.2,y:515.9},0).wait(1).to({x:148,y:515},0).wait(1).to({x:147.8,y:514.1},0).wait(1).to({x:147.7,y:513.2},0).wait(1).to({x:147.5,y:512.2},0).wait(1).to({x:147.3,y:511.2},0).wait(1).to({x:147.1,y:510.2},0).wait(1).to({x:146.9,y:509.1},0).wait(1).to({x:146.7,y:508.1},0).wait(1).to({x:146.5,y:507},0).wait(1).to({x:146.3,y:505.9},0).wait(1).to({x:146.1,y:504.7},0).wait(1).to({x:145.9,y:503.6},0).wait(1).to({x:145.7,y:502.4},0).wait(1).to({x:145.5,y:501.2},0).wait(1).to({x:145.3,y:500},0).wait(1).to({x:145,y:498.7},0).wait(1).to({x:144.8,y:497.5},0).wait(1).to({x:144.6,y:496.2},0).wait(1).to({x:144.3,y:494.9},0).wait(1).to({x:144.1,y:493.5},0).wait(1).to({x:143.8,y:492.2},0).wait(1).to({x:143.6,y:490.8},0).wait(1).to({x:143.3,y:489.4},0).wait(1).to({x:143,y:488},0).wait(1).to({x:142.8,y:486.5},0).wait(1).to({x:142.5,y:485.1},0).wait(1).to({x:142.2,y:483.6},0).wait(1).to({x:142,y:482.1},0).wait(1).to({x:141.7,y:480.6},0).wait(1).to({x:141.4,y:479},0).wait(1).to({x:141.1,y:477.5},0).wait(1).to({x:140.8,y:475.9},0).wait(1).to({x:140.5,y:474.3},0).wait(1).to({x:140.3,y:472.7},0).wait(1).to({x:140,y:471.1},0).wait(1).to({x:139.7,y:469.5},0).wait(1).to({x:139.4,y:467.9},0).wait(1).to({x:139.1,y:466.3},0).wait(1).to({x:138.8,y:464.6},0).wait(1).to({x:138.5,y:463},0).wait(1).to({x:138.2,y:461.3},0).wait(1).to({x:137.9,y:459.6},0).wait(1).to({x:137.5,y:458},0).wait(1).to({x:137.2,y:456.3},0).wait(1).to({x:136.9,y:454.6},0).wait(1).to({x:136.6,y:453},0).wait(1).to({x:136.3,y:451.3},0).wait(1).to({x:136,y:449.7},0).wait(1).to({x:135.7,y:448},0).wait(1).to({x:135.4,y:446.3},0).wait(1).to({x:135.1,y:444.7},0).wait(1).to({x:134.8,y:443.1},0).wait(1).to({x:134.5,y:441.4},0).wait(1).to({x:134.2,y:439.8},0).wait(1).to({x:133.9,y:438.2},0).wait(1).to({x:133.6,y:436.6},0).wait(1).to({x:133.3,y:435},0).wait(1).to({x:133,y:433.4},0).wait(1).to({x:132.8,y:431.9},0).wait(1).to({x:132.5,y:430.3},0).wait(1).to({x:132.2,y:428.8},0).wait(1).to({x:131.9,y:427.3},0).wait(1).to({x:131.6,y:425.8},0).wait(1).to({x:131.4,y:424.3},0).wait(1).to({x:131.1,y:422.9},0).wait(1).to({x:130.8,y:421.4},0).wait(1).to({x:130.6,y:420},0).wait(1).to({x:130.3,y:418.6},0).wait(1).to({x:130.1,y:417.2},0).wait(1).to({x:129.8,y:415.8},0).wait(1).to({x:129.6,y:414.5},0).wait(1).to({x:129.3,y:413.1},0).wait(1).to({x:129.1,y:411.8},0).wait(1).to({x:128.8,y:410.5},0).wait(1).to({x:128.6,y:409.3},0).wait(1).to({x:128.4,y:408},0).wait(1).to({x:128.2,y:406.8},0).wait(1).to({x:127.9,y:405.6},0).wait(1).to({x:127.7,y:404.4},0).wait(1).to({x:127.5,y:403.2},0).wait(1).to({x:127.3,y:402.1},0).wait(1).to({x:127.1,y:401},0).wait(1).to({x:126.9,y:399.9},0).wait(1).to({x:126.7,y:398.8},0).wait(1).to({x:126.5,y:397.7},0).wait(1).to({x:126.3,y:396.7},0).wait(1).to({x:126.1,y:395.6},0).wait(1).to({x:125.9,y:394.6},0).wait(1).to({x:125.7,y:393.6},0).wait(1).to({x:125.6,y:392.7},0).wait(1).to({x:125.4,y:391.7},0).wait(1).to({x:125.2,y:390.8},0).wait(1).to({x:125.1,y:389.9},0).wait(1).to({x:124.9,y:389},0).wait(1).to({x:124.7,y:388.1},0).wait(1).to({x:124.6,y:387.2},0).wait(1).to({x:124.4,y:386.4},0).wait(1).to({x:124.3,y:385.6},0).wait(1).to({x:124.1,y:384.8},0).wait(1).to({x:124,y:384},0).wait(1).to({x:123.8,y:383.2},0).wait(1).to({x:123.7,y:382.4},0).wait(1).to({x:123.6,y:381.7},0).wait(1).to({x:123.4,y:381},0).wait(1).to({x:123.3,y:380.3},0).wait(1).to({x:123.2,y:379.6},0).wait(1).to({x:123,y:378.9},0).wait(1).to({x:122.9,y:378.2},0).wait(1).to({x:122.8,y:377.6},0).wait(1).to({x:122.7,y:377},0).wait(1).to({x:122.6,y:376.3},0).wait(1).to({x:122.5,y:375.7},0).wait(1).to({x:122.4,y:375.1},0).wait(1).to({x:122.2,y:374.6},0).wait(1).to({x:122.1,y:374},0).wait(1).to({x:122,y:373.5},0).wait(1).to({x:121.9,y:372.9},0).wait(1).to({x:121.8,y:372.4},0).wait(1).to({y:371.9},0).wait(1).to({x:121.7,y:371.4},0).wait(1).to({x:121.6,y:370.9},0).wait(1).to({x:121.5,y:370.5},0).wait(1).to({x:121.4,y:370},0).wait(1).to({x:121.3,y:369.5},0).wait(1).to({x:121.2,y:369.1},0).wait(1).to({y:368.7},0).wait(1).to({x:121.1,y:368.3},0).wait(1).to({x:121,y:367.9},0).wait(1).to({x:120.9,y:367.5},0).wait(1).to({y:367.1},0).wait(1).to({x:120.8,y:366.8},0).wait(1).to({x:120.7,y:366.4},0).wait(1).to({y:366.1},0).wait(1).to({x:120.6,y:365.7},0).wait(1).to({y:365.4},0).wait(1).to({x:120.5,y:365.1},0).wait(1).to({y:364.8},0).wait(1).to({x:120.4,y:364.5},0).wait(1).to({x:120.3,y:364.2},0).wait(1).to({y:363.9},0).wait(1).to({x:120.2,y:363.7},0).wait(1).to({y:363.4},0).wait(1).to({y:363.2},0).wait(1).to({x:120.1,y:362.9},0).wait(1).to({y:362.7},0).wait(1).to({x:120,y:362.5},0).wait(1).to({y:362.3},0).wait(1).to({y:362.1},0).wait(1).to({x:119.9,y:361.9},0).wait(1).to({y:361.7},0).wait(1).to({y:361.5},0).wait(1).to({x:119.8,y:361.4},0).wait(1).to({y:361.2},0).wait(1).to({y:361.1},0).wait(1).to({x:119.7,y:360.9},0).wait(1).to({y:360.8},0).wait(1).to({y:360.7},0).wait(1).to({y:360.5},0).wait(1).to({y:360.4},0).wait(1).to({x:119.6,y:360.3},0).wait(1).to({y:360.2},0).wait(1).to({y:360.1},0).wait(2).to({y:360},0).wait(1).to({y:359.9},0).wait(1).to({x:119.5},0).wait(1).to({y:359.8},0).wait(2).to({y:359.7},0).wait(2).to({y:359.6},0).wait(4).to({regX:150,regY:125,x:150,y:340.5},0).wait(62));

	// Layer 4
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(169.5,476.6,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:149.5,regY:125.2,x:168.9,y:475.8,alpha:0.004},0).wait(1).to({x:168.7,y:474.7,alpha:0.009},0).wait(1).to({x:168.6,y:473.7,alpha:0.014},0).wait(1).to({x:168.5,y:472.6,alpha:0.018},0).wait(1).to({x:168.3,y:471.5,alpha:0.023},0).wait(1).to({x:168.2,y:470.4,alpha:0.028},0).wait(1).to({x:168,y:469.2,alpha:0.033},0).wait(1).to({x:167.9,y:468,alpha:0.039},0).wait(1).to({x:167.7,y:466.8,alpha:0.044},0).wait(1).to({x:167.5,y:465.6,alpha:0.05},0).wait(1).to({x:167.4,y:464.3,alpha:0.055},0).wait(1).to({x:167.2,y:463,alpha:0.061},0).wait(1).to({x:167,y:461.7,alpha:0.067},0).wait(1).to({x:166.8,y:460.3,alpha:0.073},0).wait(1).to({x:166.7,y:458.9,alpha:0.079},0).wait(1).to({x:166.5,y:457.5,alpha:0.086},0).wait(1).to({x:166.3,y:456,alpha:0.092},0).wait(1).to({x:166.1,y:454.5,alpha:0.099},0).wait(1).to({x:165.9,y:453,alpha:0.106},0).wait(1).to({x:165.7,y:451.4,alpha:0.113},0).wait(1).to({x:165.5,y:449.8,alpha:0.12},0).wait(1).to({x:165.3,y:448.2,alpha:0.127},0).wait(1).to({x:165,y:446.6,alpha:0.134},0).wait(1).to({x:164.8,y:444.9,alpha:0.142},0).wait(1).to({x:164.6,y:443.2,alpha:0.149},0).wait(1).to({x:164.4,y:441.4,alpha:0.157},0).wait(1).to({x:164.1,y:439.6,alpha:0.165},0).wait(1).to({x:163.9,y:437.8,alpha:0.173},0).wait(1).to({x:163.7,y:436,alpha:0.181},0).wait(1).to({x:163.4,y:434.1,alpha:0.189},0).wait(1).to({x:163.2,y:432.2,alpha:0.198},0).wait(1).to({x:162.9,y:430.3,alpha:0.206},0).wait(1).to({x:162.7,y:428.3,alpha:0.215},0).wait(1).to({x:162.4,y:426.3,alpha:0.224},0).wait(1).to({x:162.1,y:424.3,alpha:0.233},0).wait(1).to({x:161.9,y:422.3,alpha:0.242},0).wait(1).to({x:161.6,y:420.2,alpha:0.251},0).wait(1).to({x:161.3,y:418.1,alpha:0.26},0).wait(1).to({x:161,y:416,alpha:0.27},0).wait(1).to({x:160.8,y:413.9,alpha:0.279},0).wait(1).to({x:160.5,y:411.7,alpha:0.289},0).wait(1).to({x:160.2,y:409.6,alpha:0.299},0).wait(1).to({x:159.9,y:407.4,alpha:0.308},0).wait(1).to({x:159.6,y:405.2,alpha:0.318},0).wait(1).to({x:159.3,y:402.9,alpha:0.328},0).wait(1).to({x:159,y:400.7,alpha:0.338},0).wait(1).to({x:158.7,y:398.5,alpha:0.348},0).wait(1).to({x:158.4,y:396.2,alpha:0.358},0).wait(1).to({x:158.1,y:393.9,alpha:0.368},0).wait(1).to({x:157.8,y:391.6,alpha:0.378},0).wait(1).to({x:157.5,y:389.4,alpha:0.388},0).wait(1).to({x:157.2,y:387.1,alpha:0.398},0).wait(1).to({x:156.9,y:384.8,alpha:0.409},0).wait(1).to({x:156.6,y:382.5,alpha:0.419},0).wait(1).to({x:156.3,y:380.2,alpha:0.429},0).wait(1).to({x:156,y:377.9,alpha:0.439},0).wait(1).to({x:155.7,y:375.6,alpha:0.449},0).wait(1).to({x:155.4,y:373.3,alpha:0.46},0).wait(1).to({x:155.1,y:371.1,alpha:0.47},0).wait(1).to({x:154.8,y:368.8,alpha:0.48},0).wait(1).to({x:154.6,y:366.5,alpha:0.49},0).wait(1).to({x:154.3,y:364.3,alpha:0.5},0).wait(1).to({x:154,y:362.1,alpha:0.51},0).wait(1).to({x:153.7,y:359.8,alpha:0.519},0).wait(1).to({x:153.4,y:357.6,alpha:0.529},0).wait(1).to({x:153.1,y:355.5,alpha:0.539},0).wait(1).to({x:152.8,y:353.3,alpha:0.549},0).wait(1).to({x:152.5,y:351.2,alpha:0.558},0).wait(1).to({x:152.3,y:349,alpha:0.568},0).wait(1).to({x:152,y:346.9,alpha:0.577},0).wait(1).to({x:151.7,y:344.8,alpha:0.586},0).wait(1).to({x:151.4,y:342.8,alpha:0.595},0).wait(1).to({x:151.2,y:340.7,alpha:0.604},0).wait(1).to({x:150.9,y:338.7,alpha:0.613},0).wait(1).to({x:150.6,y:336.7,alpha:0.622},0).wait(1).to({x:150.4,y:334.8,alpha:0.631},0).wait(1).to({x:150.1,y:332.9,alpha:0.639},0).wait(1).to({x:149.9,y:330.9,alpha:0.648},0).wait(1).to({x:149.6,y:329.1,alpha:0.656},0).wait(1).to({x:149.4,y:327.2,alpha:0.665},0).wait(1).to({x:149.2,y:325.4,alpha:0.673},0).wait(1).to({x:149,y:323.6,alpha:0.681},0).wait(1).to({x:148.7,y:321.8,alpha:0.689},0).wait(1).to({x:148.5,y:320.1,alpha:0.696},0).wait(1).to({x:148.3,y:318.3,alpha:0.704},0).wait(1).to({x:148.1,y:316.6,alpha:0.711},0).wait(1).to({x:147.8,y:315,alpha:0.719},0).wait(1).to({x:147.6,y:313.4,alpha:0.726},0).wait(1).to({x:147.4,y:311.7,alpha:0.733},0).wait(1).to({x:147.2,y:310.2,alpha:0.74},0).wait(1).to({x:147,y:308.6,alpha:0.747},0).wait(1).to({x:146.8,y:307.1,alpha:0.754},0).wait(1).to({x:146.6,y:305.6,alpha:0.76},0).wait(1).to({x:146.4,y:304.1,alpha:0.767},0).wait(1).to({x:146.2,y:302.7,alpha:0.773},0).wait(1).to({x:146,y:301.3,alpha:0.78},0).wait(1).to({x:145.9,y:299.9,alpha:0.786},0).wait(1).to({x:145.7,y:298.5,alpha:0.792},0).wait(1).to({x:145.5,y:297.2,alpha:0.798},0).wait(1).to({x:145.3,y:295.9,alpha:0.804},0).wait(1).to({x:145.2,y:294.6,alpha:0.809},0).wait(1).to({x:145,y:293.3,alpha:0.815},0).wait(1).to({x:144.8,y:292.1,alpha:0.82},0).wait(1).to({x:144.7,y:290.9,alpha:0.826},0).wait(1).to({x:144.5,y:289.7,alpha:0.831},0).wait(1).to({x:144.4,y:288.6,alpha:0.836},0).wait(1).to({x:144.2,y:287.4,alpha:0.841},0).wait(1).to({x:144.1,y:286.3,alpha:0.846},0).wait(1).to({x:143.9,y:285.2,alpha:0.851},0).wait(1).to({x:143.8,y:284.2,alpha:0.856},0).wait(1).to({x:143.7,y:283.1,alpha:0.86},0).wait(1).to({x:143.5,y:282.1,alpha:0.865},0).wait(1).to({x:143.4,y:281.1,alpha:0.869},0).wait(1).to({x:143.3,y:280.1,alpha:0.874},0).wait(1).to({x:143.2,y:279.2,alpha:0.878},0).wait(1).to({x:143,y:278.3,alpha:0.882},0).wait(1).to({x:142.9,y:277.3,alpha:0.886},0).wait(1).to({x:142.8,y:276.4,alpha:0.89},0).wait(1).to({x:142.7,y:275.6,alpha:0.894},0).wait(1).to({x:142.6,y:274.7,alpha:0.898},0).wait(1).to({x:142.5,y:273.9,alpha:0.901},0).wait(1).to({x:142.4,y:273.1,alpha:0.905},0).wait(1).to({x:142.3,y:272.3,alpha:0.908},0).wait(1).to({x:142.1,y:271.5,alpha:0.912},0).wait(1).to({y:270.8,alpha:0.915},0).wait(1).to({x:142,y:270,alpha:0.919},0).wait(1).to({x:141.9,y:269.3,alpha:0.922},0).wait(1).to({x:141.8,y:268.6,alpha:0.925},0).wait(1).to({x:141.7,y:267.9,alpha:0.928},0).wait(1).to({x:141.6,y:267.3,alpha:0.931},0).wait(1).to({x:141.5,y:266.6,alpha:0.934},0).wait(1).to({x:141.4,y:266,alpha:0.936},0).wait(1).to({x:141.3,y:265.4,alpha:0.939},0).wait(1).to({y:264.8,alpha:0.942},0).wait(1).to({x:141.2,y:264.2,alpha:0.944},0).wait(1).to({x:141.1,y:263.7,alpha:0.947},0).wait(1).to({x:141,y:263.1,alpha:0.949},0).wait(1).to({y:262.6,alpha:0.952},0).wait(1).to({x:140.9,y:262.1,alpha:0.954},0).wait(1).to({x:140.8,y:261.5,alpha:0.956},0).wait(1).to({y:261.1,alpha:0.958},0).wait(1).to({x:140.7,y:260.6,alpha:0.96},0).wait(1).to({y:260.1,alpha:0.963},0).wait(1).to({x:140.6,y:259.7,alpha:0.965},0).wait(1).to({x:140.5,y:259.3,alpha:0.966},0).wait(1).to({y:258.8,alpha:0.968},0).wait(1).to({x:140.4,y:258.4,alpha:0.97},0).wait(1).to({y:258.1,alpha:0.972},0).wait(1).to({x:140.3,y:257.7,alpha:0.973},0).wait(1).to({y:257.3,alpha:0.975},0).wait(1).to({x:140.2,y:257,alpha:0.977},0).wait(1).to({y:256.6,alpha:0.978},0).wait(1).to({y:256.3,alpha:0.98},0).wait(1).to({x:140.1,y:256,alpha:0.981},0).wait(1).to({y:255.7,alpha:0.982},0).wait(1).to({x:140,y:255.4,alpha:0.984},0).wait(1).to({y:255.1,alpha:0.985},0).wait(1).to({y:254.9,alpha:0.986},0).wait(1).to({x:139.9,y:254.6,alpha:0.987},0).wait(1).to({y:254.4,alpha:0.988},0).wait(1).to({y:254.1,alpha:0.989},0).wait(1).to({x:139.8,y:253.9,alpha:0.99},0).wait(1).to({y:253.7,alpha:0.991},0).wait(1).to({y:253.5,alpha:0.992},0).wait(1).to({y:253.3,alpha:0.993},0).wait(1).to({x:139.7,y:253.2},0).wait(1).to({y:253,alpha:0.994},0).wait(1).to({y:252.8,alpha:0.995},0).wait(1).to({y:252.7,alpha:0.996},0).wait(1).to({y:252.6},0).wait(1).to({x:139.6,y:252.4,alpha:0.997},0).wait(1).to({y:252.3},0).wait(1).to({y:252.2,alpha:0.998},0).wait(1).to({y:252.1},0).wait(2).to({y:252,alpha:0.999},0).wait(1).to({y:251.9},0).wait(2).to({y:251.8,alpha:1},0).wait(2).to({y:251.7},0).wait(3).to({regX:150,regY:125,x:140,y:251.5},0).wait(62));

	// bg
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:230,y:230},0).wait(244).to({regY:125,y:125},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(246));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,232.9,499.1,765.3);
// library properties:
lib.properties = {
	id: 'D547157FA6F64472B414D6DD33F856D2',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_giant_atlas_.png", id:"300x600_giant_atlas_"}
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
an.compositions['D547157FA6F64472B414D6DD33F856D2'] = {
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