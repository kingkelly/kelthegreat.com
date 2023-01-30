(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.board_lb = function() {
	this.initialize(img.board_lb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,118);// helper functions:

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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6B0QgNgNAAgRQAAgSANgNQANgNARAAQATAAAMANQANANAAASQAAARgNANQgMANgTAAQgRAAgNgNgAAngfQgRgRAAgXQAAgXARgRQAQgSAYABQAYgBAQASQARARAAAXQAAAXgRARQgQARgYAAQgYAAgQgRg");
	this.shape.setTransform(8.7,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-4.9,-13.3,27.2,25.9), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAlQgPgQAAgVQAAgTANgOIACgDQAQgPAUAAQAVAAAQAPQAPAQAAAUQAAAVgPAQQgIAHgIAEQgKAEgLAAQgUAAgQgPg");
	this.shape.setTransform(17.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(12.2,0,10.5,10.5), null);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgHAJIAAgRIAQAAIAAARg");
	this.shape.setTransform(109.1,-15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAXIAsAAIAAAWg");
	this.shape_1.setTransform(102.7,-20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AALA4IgVg4IAAA4IgXAAIAAhvIAXAAIAVA3IAAg3IAXAAIAABvg");
	this.shape_2.setTransform(93.7,-20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AgKA4IAAhvIAVAAIAABvg");
	this.shape_3.setTransform(86.9,-20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AgbA4IAAhvIAXAAIAABZIAgAAIAAAWg");
	this.shape_4.setTransform(80.7,-20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AALA4IgVg4IAAA4IgXAAIAAhvIAXAAIAVA3IAAg3IAXAAIAABvg");
	this.shape_5.setTransform(72.3,-20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_6.setTransform(63.3,-20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AALA4IgRgtIgEAAIAAAtIgXAAIAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAKgGAIQgFAHgJAEIAUAwgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_7.setTransform(50.5,-20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAXIAsAAIAAAWg");
	this.shape_8.setTransform(41.5,-20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AghA4IAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgEAEgHADQgGACgHAAgAgKAiIAKAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_9.setTransform(32.5,-20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AALA4IgRgtIgEAAIAAAtIgXAAIAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAKgGAIQgFAHgJAEIAUAwgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_10.setTransform(23.5,-20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(14.5,-20.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AgIAJIAAgRIAQAAIAAARg");
	this.shape_12.setTransform(4.4,-15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAXIAsAAIAAAWg");
	this.shape_13.setTransform(-2,-20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AALA4IgRgtIgEAAIAAAtIgXAAIAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAKgGAIQgFAHgJAEIAUAwgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_14.setTransform(-11,-20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_15.setTransform(-20,-20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AgKA4IAAhZIgXAAIAAgWIBDAAIAAAWIgXAAIAABZg");
	this.shape_16.setTransform(-27.8,-20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAXAAQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEQAAgFgDgEQgDgDgFAAQgGAAgGgCQgHgDgEgEQgFgEgCgGQgDgGAAgHQAAgIADgGQACgGAFgEQAEgFAHgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFQAAAEADAEQADADAEAAQAHAAAGACQAHADAEAEQAEAEADAGQADAGAAAHQAAAIgDAGQgDAGgEAFQgEAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_17.setTransform(-35.6,-20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAXIAsAAIAAAWg");
	this.shape_18.setTransform(-48.3,-20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AALA4IAAgtIgVAAIAAAtIgXAAIAAhvIAXAAIAAAtIAVAAIAAgtIAXAAIAABvg");
	this.shape_19.setTransform(-57.3,-20.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AgKA4IAAhZIgXAAIAAgWIBDAAIAAAWIgXAAIAABZg");
	this.shape_20.setTransform(-66.3,-20.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AghA4IAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAHgDAGQgDAGgEAEQgEAEgHADQgGACgHAAIgKAAIAAAtgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_21.setTransform(-79.1,-20.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AgKA4IAAhvIAVAAIAABvg");
	this.shape_22.setTransform(-85.9,-20.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AALA4IgVg4IAVg3IAXAAIgXA3IAXA4gAghA4IAAhvIAXAAIAAA3IAAA4gAgKAAg");
	this.shape_23.setTransform(-92.6,-20.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAXAAQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEQAAgFgDgEQgDgDgFAAQgGAAgGgCQgHgDgEgEQgFgEgCgGQgDgGAAgHQAAgIADgGQACgGAFgEQAEgFAHgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFQAAAEADAEQADADAEAAQAHAAAGACQAHADAEAEQAEAEADAGQADAGAAAHQAAAIgDAGQgDAGgEAFQgEAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_24.setTransform(-101.6,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(-369,-29,744.1,20), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F4EC").s().p("AgLA6IAAg6IgXg6IAXAAIALAeIAMgeIAXAAIgXA6IAAA6g");
	this.shape.setTransform(-153.5,-153.9,0.644,0.644);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F4EC").s().p("AAMA6IgFgXIgNAAIgFAXIgXAAIAXh0IAXAAIAXB0gAgBAMIADAAIgCgMg");
	this.shape_1.setTransform(-158.3,-153.9,0.644,0.644);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F4EC").s().p("AAMA6IgMg6IgLA6IgXAAIgYh0IAYAAIAMA6IALg6IAXAAIALA6IAMg6IAXAAIgXB0g");
	this.shape_2.setTransform(-164.8,-153.9,0.644,0.644);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8F4EC").s().p("AgiA6IAAh0IBFAAIAAAYIguAAIAAAXIAiAAIAAAXIgiAAIAAAXIAuAAIAAAXg");
	this.shape_3.setTransform(-172,-153.9,0.644,0.644);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F4EC").s().p("AgLA6IAAhcIgXAAIAAgYIBFAAIAAAYIgXAAIAABcg");
	this.shape_4.setTransform(-177.6,-153.9,0.644,0.644);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F4EC").s().p("AALA6IgEgXIgNAAIgFAXIgXAAIAXh0IAWAAIAYB0gAgBAMIADAAIgCgMg");
	this.shape_5.setTransform(-182.6,-153.9,0.644,0.644);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8F4EC").s().p("AgNA4QgHgDgEgFQgEgEgDgGQgDgIAAgHIAAguQAAgGADgHQADgHAEgFQAEgEAHgDQAGgCAHgBQAJABAFACQAHADAEAEQAEAFADAHQADAHAAAGIgXAAQAAgFgEgDQgDgDgFAAQgEAAgEADQgDADAAAFIAAAuQAAAGADADQAFADADAAQAFAAADgDQAEgDAAgGIAAgLIgMAAIAAgXIAjAAIAAAiQAAAHgDAIQgDAGgEAEQgEAFgHADQgFADgJgBQgHABgGgDg");
	this.shape_6.setTransform(-188.1,-153.9,0.644,0.644);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8F4EC").s().p("AgKA6IAAg6IgYg6IAYAAIAKAeIALgeIAYAAIgYA6IAAA6g");
	this.shape_7.setTransform(-196.2,-153.9,0.644,0.644);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F4EC").s().p("AAMA6IgSguIgFAAIAAAuIgXAAIAAh0IAiAAQAIABAGACQAHADAEAEQAEAFAEAHQACAHAAAGQAAALgFAJQgGAIgJAEIAUAxgAgLgLIALAAQAFAAADgDQADgEABgFQgBgEgDgEQgDgDgFAAIgLAAg");
	this.shape_8.setTransform(-201.5,-153.9,0.644,0.644);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8F4EC").s().p("AgiA6IAAh0IBFAAIAAAYIguAAIAAAXIAiAAIAAAXIgiAAIAAAXIAuAAIAAAXg");
	this.shape_9.setTransform(-207.2,-153.9,0.644,0.644);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8F4EC").s().p("AgNA4QgGgCgFgGQgFgEgCgGQgDgHAAgIIAAguQAAgGADgHQACgHAFgFQAFgEAGgDQAFgCAIgBQAJABAFACQAFACAGAFQAFAFACAHQADAHAAAGIgXAAQAAgFgEgDQgDgDgFAAQgEAAgDADQgEADAAAFIAAAuQAAAGAEADQADADAEAAQAFAAADgDQAEgDAAgGIAXAAQAAAIgDAHQgCAGgFAEQgFAGgGACQgFADgJgBQgIABgFgDg");
	this.shape_10.setTransform(-212.8,-153.9,0.644,0.644);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8F4EC").s().p("AgNA4QgGgDgFgFQgEgEgDgGQgDgGAAgJIAAguQAAgIADgFQADgHAEgFQAEgEAHgDQAFgCAIgBQAJABAFACQAHADAEAEQAEAFADAHQADAHAAAGIAAAuQAAAHgDAIQgDAGgEAEQgEAFgHADQgFADgJgBQgIABgFgDgAgHgfQgEAEAAAEIAAAuQAAAEAEAFQAEADADAAQAFAAADgDQAEgDAAgGIAAguQAAgFgEgDQgDgDgFAAQgEAAgDADg");
	this.shape_11.setTransform(-218.5,-153.9,0.644,0.644);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8F4EC").s().p("AAMA6IgSguIgFAAIAAAuIgXAAIAAh0IAiAAQAJABAFACQAGADAFAEQAFAFACAHQADAFAAAIQAAAMgFAIQgGAIgJAEIAUAxgAgLgLIALAAQAFAAAEgDQADgFAAgEQAAgDgDgFQgEgDgFAAIgLAAg");
	this.shape_12.setTransform(-224.1,-153.9,0.644,0.644);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F4EC").s().p("AgNA4QgGgCgFgGQgEgEgEgGQgCgIAAgHIAAguQAAgGACgHQAEgHAEgFQAGgFAFgCQAFgCAIgBQAJABAFACQAGADAFAEQAFAFACAHQADAHAAAGIgXAAQAAgFgEgDQgDgDgFAAQgEAAgDADQgEADAAAFIAAAuQAAAGAEADQADADAEAAQAFAAADgDQAEgDAAgGIAAgLIgMAAIAAgXIAjAAIAAAiQAAAIgDAHQgCAGgFAEQgFAGgGACQgFADgJgBQgIABgFgDg");
	this.shape_13.setTransform(-229.8,-153.9,0.644,0.644);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8F4EC").s().p("AgmADQgFAAAAgDQAAgCAFAAIBNAAQAFAAAAACQAAADgFAAg");
	this.shape_14.setTransform(-187.8,-145,0.644,0.644);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F4EC").s().p("AgJAXIgBAAIgBgCIAAgCQAIgUAIgPIgQAAIgCgBIAAgBIAAgCIAAgBIACgBIAXAAIACABIAAABIAAABIgBADQgLATgFASIgCACIgCAAg");
	this.shape_15.setTransform(-183.7,-146.3,0.644,0.644);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F4EC").s().p("AgHAOIgGgCIAAgDIAAgBIACgCIACAAIACAAIADACIAEABQADAAACgCQADgDAAgCQgFADgFAAIgGgBIgFgEQgCAAAAgEQAAgDACgDQACgCAEgBQACgBAFAAQACAAADABQADAAADADIADAFIACAFIgCAGIgDAFIgGADQgDACgCgBgAgGgHQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIAFABIAEAAIAFgCIgEgEQgCgCgCAAQgEAAgCACg");
	this.shape_16.setTransform(-185.8,-146.8,0.644,0.644);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F4EC").s().p("AgHAOQgDgBgCgBIgBgDIAAgBIABgBIABgBIACAAIABAAIAEACIAEABQADAAACgCQACgCABgDQgFADgFAAIgGgBIgFgEQgBAAAAgEIABgGIAFgDQADgBAFAAQACAAADABQAEABACACIADAFIABAFIgBAGIgDAFIgGADQgDACgCgBQgEABgDgCgAgGgHQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIAFABIAEAAIAEgCQgBgDgCgBQgCgCgDAAIgFACg");
	this.shape_17.setTransform(-188.2,-146.8,0.644,0.644);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8F4EC").s().p("AAEAPIgBgBIgBgBIAAgSIgEADIgDAAIgCAAIgBgCIAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAGgFIADgBIACAAIACABIAAABIAAAZIAAABIgCABg");
	this.shape_18.setTransform(-190.2,-146.8,0.644,0.644);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F4EC").s().p("AghADQgFAAAAgDQAAgCAFAAIBDAAQAFAAAAACQAAADgFAAg");
	this.shape_19.setTransform(-195.3,-145,0.644,0.644);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8F4EC").s().p("AgBADIgBgBIgBgBIAAgBIABgBIABgBIADAAIABABIABABIAAABIgBABIgBABg");
	this.shape_20.setTransform(-193.1,-146.1,0.644,0.644);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8F4EC").s().p("AAAAPIgCgBIAAgBIAAgVIgMAAIgBAAIgBgCIAAgCIABgBIABgBIAdAAIABABIABABIAAACIgBACIgBAAIgMAAIAAAVIAAABIgCABg");
	this.shape_21.setTransform(-194.4,-146.8,0.644,0.644);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8F4EC").s().p("AgHAOIgHgDIgBgCIABgCIACgCIACABQAHADAEAAIADAAIAEgCQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIgCgCIgLgCIgEgBIgDgBIgCgCIgBgDQAAgEAFgDQAEgCAFAAIAGAAIAEACIADABIABACIgBACIgBABIgBABIgBAAQgFgEgFAAIgDABIgDABIgBACIABABIABABIADAAIAHABIAFABIADABIACACIABADQAAADgCADQgDACgCABQgEACgEgBQgEABgEgCg");
	this.shape_22.setTransform(-196.8,-146.8,0.644,0.644);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8F4EC").s().p("AgOAXIgCAAIgBgCIAAgpIABgBIACgBIAdAAIACABIAAABIAAACIAAABIgCABIgZAAIAAAQIATAAIACAAIABACIAAACIgBACIgCAAIgTAAIAAALIAZAAIACAAIAAACIAAACIAAACIgCAAg");
	this.shape_23.setTransform(-199.4,-146.3,0.644,0.644);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8F4EC").s().p("AgIAPIgCgBIgBgCIABgCIABgBIABAAIAAABIADAAIACAAIACgDIgMgUIAAAAIABgBIABgBIACAAIACABIAAAAIAHAPIAIgPIACgBIACAAIABABIABABIAAAAIgOAaIgCACIgDAAg");
	this.shape_24.setTransform(-144.6,-154.4,0.644,0.644);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8F4EC").s().p("AgGAQQgEgBgBgCIAAgcIABgBIABgBIACAAIABABIAAANQADgCAEAAQAEAAAEADQADACAAAGQAAAFgDADQgEAEgFAAQgDAAgDgCgAgGABIAAAKQADACADAAQACAAACgCQACgCAAgDQAAgEgCgBQgCgBgCAAQgDAAgDABg");
	this.shape_25.setTransform(-146.7,-155.1,0.644,0.644);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8F4EC").s().p("AAHAUQgHgEgFgIIgFgMIgGgPIAAgCIACAAQAGAAAGAFQAHAGAGAPQADAKADAGQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgEAAgFgCg");
	this.shape_26.setTransform(-115.6,-155,0.644,0.644);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8F4EC").s().p("AgaAdQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQADgFAIgSQAFgLAEgFQAFgIAGgDQAFgEAGgBIADgBIAIAAIgCAEIgNAcQgEAIgGAGQgHAHgIADIgLABg");
	this.shape_27.setTransform(-112.4,-156.2,0.644,0.644);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8F4EC").s().p("AgEBTIgHgCQgJgCgFgEIgFgGIgBgIQABgJAGgEQAIgFAOgBIAMAAIABACIgBADIgGABQgGgBgEAGQgFAHACAHQAEALAMgBQAFgBAJgGQAGgFAIgJIAJgMIAFgJIABgBIgBAAIgDABIgMgBIgHgDIgHgHQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgDAEgEACQgHAEgFABIgHAAQgHAAgGgGQgCgCgBgDQAAgHABgDIASgcQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIgCAAIgEADIgGAFIgNANIgHAJIgIANIgDAFQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgWAAIgBAAIAAgBIAKgRIACgEIADgGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQgEgBgCgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgBAEgEAHQgHAJgFADQgGAFgHACQgIADgKAAQgFAAgFgDQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgEAFgIADQgGAEgIAAIgIgBIgMgDQgKgFgGgHQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgEADgHADQgGADgGAAQgLAAgDgBQgGgCgFgEQgCgDgCgFIAAgIQABgFAEgGIAFgEQAGgEAHgBQAJgCAIACQAJADAGAEIACACQABAAAAAAQAAABABAAQAAAAAAgBQAAAAAAAAIAmhEIAEgGQAHgIALgDQAKgCAHADQAEACADAFQADAHgBAJQgCAEgEgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgFIgBgGQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgGAGIggA4QgEAHgIAIIgIAHQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAEAEAFADIANAHQAJAEAIgHQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAQgIgJAEgNQACgHAGgIQAFgFAGgEQAIgEAIgCQANgBAJADQAGADADAEIAEAFIAFAHIAEACQAEABABgEIAIgMIACgFIACAAIAXAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgDAFIgBACIAGgEQALgHAIABQAJAAACAIQACAFgDAFIgRAcIgBAFQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAIADgBQAHgFAGgHQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgJAHgKQAHgKALgEQAHgEAHAAIAGAAQAGgBAIAEIAFAEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAWAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgbAtIAAABIABAAQAFgCAEgEIAJgHIABgDQABgJAHgIQAHgJALgFQAIgDANAAQAJABAHAEIAFAFQAFAHAIADQAKADAKgGQAIgFAHgJIAEgEIADgCQAFgBgBAEIgDANIAAANQgBANgHAHIgCADIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBIAYgLQABAAAAgBQABAAAAAAQABABAAAAQAAAAABAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAABIgFADIgOAGQgIAFgKABQgLACgGgBQgKgBgFgIQgDgEABgFQAAgGAEgDIAFgDQAJgBADAFQADAFgEAGQgDADgEABIgBABIABABQACADAFAAQADAAACgCQAEgGABgEQABgFAAgKQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgIADgLgCIgJgCQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgCAHQgDAIgGAGQgGAGgJAEQgLAFgNgCQgJAAgGgHIgFgGQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgGAEQgIAGgJACQgCABgCAEIgJAKIgMANIgJAHIgLAHIgLAFIgMADgAjnAMQgDAFACAGQACAEAFACQAEADAFgBQAGgBAEgCIAHgHQABAAAAAAQAAgBAAAAQABgBgBAAQAAAAAAgBIgJgKQgFgEgGAAQgJABgEAHgABBgSQgEABgEADQgFAEgFAHQgIAIgDALQgCAFACADQACAEADAAQAFgCAFgDIAGgGIAFgHQAFgGADgGIACgJIAAgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgDgBIgCAAgACVgSIgHACQgIAGgIAMIgFAIQgDAIABAEQAAAGAFAAIAFgCIAHgFIALgNQADgEACgGQADgFAAgFIAAgBQgBgFgEAAIgBAAgAhagSIgEABQgFADgGAHIgIAKIgGALIgBAIQABAHAGgCIAGgCQAGgFAGgIQAEgEAEgIQADgHAAgEIAAgDQgBgEgEAAIgBAAg");
	this.shape_28.setTransform(-126.8,-152.2,0.644,0.644);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-232.1,-158,121.4,13.3), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.board_lb();
	this.instance.parent = this;
	this.instance.setTransform(-123,-8.9,0.578,0.578,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2, new cjs.Rectangle(-123,-9,93.1,68.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(163,-25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAXIAsAAIAAAWg");
	this.shape_1.setTransform(157.2,-30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAXAAQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEQAAgFgDgEQgDgDgFAAQgGAAgGgCQgHgDgEgEQgFgEgCgGQgDgGAAgHQAAgIADgGQACgGAFgEQAEgFAHgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFQAAAEADAEQADADAEAAQAHAAAGACQAHADAEAEQAEAEADAGQADAGAAAHQAAAIgDAGQgDAGgEAFQgEAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_2.setTransform(148.8,-30.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AghA4IAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAHgDAGQgDAGgEAEQgEAEgHADQgGACgHAAIgKAAIAAAtgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_3.setTransform(141,-30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AgKA4IAAg4IgXg3IAXAAIAKAcIALgcIAXAAIgXA3IAAA4g");
	this.shape_4.setTransform(133.2,-30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgbA4IAAhvIAWAAIAABZIAhAAIAAAWg");
	this.shape_5.setTransform(126.4,-30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AALA4IgEgWIgNAAIgEAWIgXAAIAXhvIAVAAIAXBvgAACALIgCgLIgBALIADAAg");
	this.shape_6.setTransform(118.6,-30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAXAAQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCg");
	this.shape_7.setTransform(110.8,-30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_8.setTransform(102.4,-30.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AghA4IAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAHgDAGQgDAGgEAEQgEAEgHADQgGACgHAAIgKAAIAAAtgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_9.setTransform(94,-30.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AALA4IgLg4IgKA4IgXAAIgWhvIAWAAIAMA3IALg3IAVAAIAMA3IALg3IAWAAIgWBvg");
	this.shape_10.setTransform(83.3,-30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(73.3,-30.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#063928").s().p("AALA4IgVg4IAAA4IgXAAIAAhvIAXAAIAVA3IAAg3IAXAAIAABvg");
	this.shape_12.setTransform(64.9,-30.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAXAAQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEQAAgFgDgEQgDgDgFAAQgGAAgGgCQgHgDgEgEQgFgEgCgGQgDgGAAgHQAAgIADgGQACgGAFgEQAEgFAHgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFQAAAEADAEQADADAEAAQAHAAAGACQAHADAEAEQAEAEADAGQADAGAAAHQAAAIgDAGQgDAGgEAFQgEAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_13.setTransform(56.5,-30.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAXIAsAAIAAAWg");
	this.shape_14.setTransform(44.9,-30.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#063928").s().p("AALA4IAAgtIgVAAIAAAtIgXAAIAAhvIAXAAIAAAtIAVAAIAAgtIAXAAIAABvg");
	this.shape_15.setTransform(36.5,-30.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#063928").s().p("AgKA4IAAhZIgXAAIAAgWIBDAAIAAAWIgXAAIAABZg");
	this.shape_16.setTransform(28.1,-30.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#063928").s().p("AALA4IgRgtIgEAAIAAAtIgXAAIAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAKgGAIQgFAHgJAEIAUAwgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_17.setTransform(134.3,-46.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_18.setTransform(125.9,-46.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#063928").s().p("AghA4IAAhvIBDAAIAAAWIgsAAIAAAXIAgAAIAAAVIggAAIAAAtg");
	this.shape_19.setTransform(118.1,-46.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#063928").s().p("AghA4IAAhvIAhAAQAHAAAGACQAHADAEAFQAEAEADAGQADAGAAAIQAAAHgDAGQgDAGgEAEQgEAEgHADQgGACgHAAIgKAAIAAAtgAgKgKIAKAAQAFAAADgDQADgEAAgEQAAgFgDgDQgDgEgFAAIgKAAg");
	this.shape_20.setTransform(106.5,-46.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAhOIAXAAIAABOQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAhOIAXAAIAABOQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCg");
	this.shape_21.setTransform(98.1,-46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#063928").s().p("AALA4IgVg4IAVg3IAXAAIgXA3IAXA4gAghA4IAAhvIAXAAIAAA3IAAA4gAgKAAg");
	this.shape_22.setTransform(86.6,-46.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAXAAQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCg");
	this.shape_23.setTransform(78.2,-46.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAAgsQAAgIADgGQACgGAFgEQAFgFAGgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIAAAsQAAAHgDAGQgDAGgEAFQgFAEgGADQgGACgHAAQgGAAgGgCgAgHgdQgDADAAAFIAAAsQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEIAAgsQAAgFgDgDQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(69.8,-46.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#063928").s().p("AgKA4IAAhZIgXAAIAAgWIBDAAIAAAWIgXAAIAABZg");
	this.shape_25.setTransform(62,-46.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#063928").s().p("AgMA2QgGgDgFgEQgFgFgCgGQgDgGAAgHIAXAAQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgEQAAgFgDgEQgDgDgFAAQgGAAgGgCQgHgDgEgEQgFgEgCgGQgDgGAAgHQAAgIADgGQACgGAFgEQAEgFAHgDQAGgCAGAAQAHAAAGACQAGADAFAFQAEAEADAGQADAGAAAIIgXAAQAAgFgDgDQgDgEgFAAQgEAAgDAEQgDADAAAFQAAAEADAEQADADAEAAQAHAAAGACQAHADAEAEQAEAEADAGQADAGAAAHQAAAIgDAGQgDAGgEAFQgEAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_26.setTransform(54.2,-46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-277.5,-55,744.1,36), null);


(lib.ctaaaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAUQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgGgdIgGAdQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIgJgkIAAgBIACgBIABAAIABABIAIAgIAGgeQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAIAeIAIggIAAgBIACAAIABABIAAABIgJAkQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(-425.5,-152.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgGAGAAQAGAAAEAEQAEAGAAAJQAAAJgDAFQgEAGgHAAQgFAAgEgGgAgHgLQgCAFAAAGQAAAIADAEQACAFAEAAQAEAAADgEQADgFAAgIQAAgGgCgFQgDgFgFAAQgEAAgDAFg");
	this.shape_1.setTransform(-430.1,-152.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAUIgBgBIgTgfIAAAeIAAACIgCAAIgCAAIAAgCIAAgjIAAgCIACAAIABAAIACABIASAfIAAgeIABgCIABAAIABAAIABACIAAAjQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_2.setTransform(-434.4,-152.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAUIAAgCIAAgjIAAgCIACAAIAMAAQAFAAADADQADADAAAFQAAAFgDADQgDACgFAAIgKAAIAAAQIgBACIgBAAIgCAAgAgIgBIAKAAQAEAAACgCQACgCAAgDQAAgDgCgCQgCgCgEAAIgKAAg");
	this.shape_3.setTransform(-441.1,-152.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgGAGAAQAGAAAEAEQAEAGAAAJQAAAJgDAFQgEAGgHAAQgFAAgEgGgAgHgLQgCAFAAAGQAAAIADAEQACAFAEAAQAEAAADgEQADgFAAgIQAAgGgCgFQgDgFgFAAQgEAAgDAFg");
	this.shape_4.setTransform(-445.4,-152.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKAUIgBgCIAAgQIgRAAIAAAQQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAgjQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAQIARAAIAAgQIABgCIABAAIABAAIABACIAAAjIgBACIgBAAIgBAAg");
	this.shape_5.setTransform(-449.6,-152.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAQIgDgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABAAIABAAQAEAHAEAAQAEAAACgCQADgCAAgEQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBQgBgCgGgCQgKgCAAgIQAAgEADgDQADgDAEAAQAGAAADAEIADAEQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgEgEQgCgCgDAAQgDAAgCACQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAGAHACQAGABADACQACADAAAEQAAAFgDADQgDADgGAAQgEAAgEgEg");
	this.shape_6.setTransform(-453.6,-152.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#023827").s().p("Al1CPQhRAAgghBQgLgVgEgYIgCgtQAAhRBBggQAVgLAYgEQAMgCAIAAILrAAQBRAAAhBBQAQAhAAAgIAAAZQAABRhBAhQghAQggAAg");
	this.shape_7.setTransform(-439.2,-152.6,0.408,0.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctaaaa, new cjs.Rectangle(-459.7,-158.4,41.1,11.6), null);


(lib.conf_rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape.setTransform(18.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.conf_rect, new cjs.Rectangle(14.3,7.6,9,9), null);


(lib.confetti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3 copy
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-393.9,-44.9,0.49,0.49,0,0,0,9.8,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:10.5,rotation:1080,x:-183.9,y:380},145).to({_off:true},1).wait(11));

	// Layer_3
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-303.9,-114.9,0.49,0.49,0,0,0,9.8,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:10.5,rotation:-360,x:-263.9,y:351.1},116).to({_off:true},1).wait(40));

	// Layer_2
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-333.9,-104.9,0.7,0.7,0,0,0,9.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-360,x:-343.9,y:388.6},116).to({_off:true},1).wait(40));

	// Layer_1 copy
	this.instance_3 = new lib.conf_rect();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-313.9,-87.9,0.6,0.6,0,0,0,8.9,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:17.1,rotation:-360,x:-343.9,y:426.3},119).to({_off:true},1).wait(37));

	// Layer_4 copy
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-393,-63.4,0.49,0.49,0,0,0,8.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-720,x:-343,y:370.1},115).to({_off:true},1).wait(41));

	// Layer_4 copy 2
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-342.9,-83.4,0.7,0.7,0,0,0,9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:1440,x:-338.9,y:371.5},135).to({_off:true},1).wait(21));

	// Layer_4
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-292.9,-63.4,0.7,0.7,0,0,0,9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-720,x:-232.9,y:360.8},156).wait(1));

	// Layer_1 copy 2
	this.instance_7 = new lib.conf_rect();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-273.8,-57.9,0.7,0.7,0,0,0,9,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:17.1,rotation:-720,x:-283.8,y:366.3},119).to({_off:true},1).wait(37));

	// Layer_1
	this.instance_8 = new lib.conf_rect();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-363.9,-107.9,1,1,0,0,0,9,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:360,x:-283.9,y:366.3},92).to({_off:true},1).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.8,-120,136,75.1);


(lib.ConfettiALL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.confetti("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(83.1,-362.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_1 = new lib.confetti("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(246.1,-352.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_2 = new lib.confetti("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(53,-447,1,1,0,0,0,-334.6,-367.1);

	this.instance_3 = new lib.confetti("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.6,-364,0.7,0.7,0,0,0,-334.5,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},50).wait(259));

	// Layer_2
	this.instance_4 = new lib.confetti("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-95.8,-373.9,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_5 = new lib.confetti("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(67.2,-363.9,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_6 = new lib.confetti("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-125.9,-458.2,1,1,0,0,0,-334.6,-367.1);

	this.instance_7 = new lib.confetti("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-56.3,-375.2,0.7,0.7,0,0,0,-334.5,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},115).wait(194));

	// Layer_3
	this.instance_8 = new lib.confetti("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-46.9,-362.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_9 = new lib.confetti("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(116.1,-352.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_10 = new lib.confetti("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-77,-447,1,1,0,0,0,-334.6,-367.1);

	this.instance_11 = new lib.confetti("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-7.4,-364,0.7,0.7,0,0,0,-334.5,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},79).wait(230));

	// Layer_4
	this.instance_12 = new lib.confetti("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-116.9,-367.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_13 = new lib.confetti("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(46.1,-357.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_14 = new lib.confetti("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-147,-452,1,1,0,0,0,-334.6,-367.1);

	this.instance_15 = new lib.confetti("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-77.4,-369,0.7,0.7,0,0,0,-334.5,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},27).wait(282));

	// confetti
	this.instance_16 = new lib.confetti("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-46.9,-352.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_17 = new lib.confetti("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(116.1,-342.7,0.7,0.7,0,0,180,-334.5,-367);

	this.instance_18 = new lib.confetti("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-77,-437,1,1,0,0,0,-334.6,-367.1);

	this.instance_19 = new lib.confetti("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-7.4,-354,0.7,0.7,0,0,0,-334.5,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(309));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-189.9,303.9,75.1);


// stage content:
(lib._320x50_st_stock = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.ctaaaa();
	this.instance.parent = this;
	this.instance.setTransform(677.6,202.1,1,1,0,0,0,50.4,14.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(60).to({regX:-439.2,regY:-152.6,scaleX:1,scaleY:1,x:187.9,y:35.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:188,y:35.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:35.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:188.1},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:188.2,y:35.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:188.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:188.4,y:35.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:188.5},0).wait(1).to({scaleX:1.23,scaleY:1.23},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:188.6,y:35.6},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({regX:50.4,regY:14.3,scaleX:1.25,scaleY:1.25,x:800.5,y:244.2},0).wait(1).to({regX:-439.2,regY:-152.6,scaleX:1.25,scaleY:1.25,x:188.5,y:35.5},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:188.4,y:35.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:188.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:188.1,y:35.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:188,y:35.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:187.9},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:50.4,regY:14.2,scaleX:1,scaleY:1,x:677.6,y:202.1},0).wait(112));

	// Isolation Mode
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(421.6,205.6,1,1,0,0,0,161.8,17.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).to({alpha:1},14).wait(196));

	// Layer 4 copy 2
	this.instance_2 = new lib.Symbol3copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(582.5,138,1,1,0,0,0,133.5,142);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-76.5,regY:25.1,x:368.9,y:21.1},0).wait(1).to({x:364.7},0).wait(1).to({x:359.8},0).wait(1).to({x:354.2},0).wait(1).to({x:347.9},0).wait(1).to({x:341},0).wait(1).to({x:333.9},0).wait(1).to({x:326.8},0).wait(1).to({x:320.3},0).wait(1).to({x:314.3},0).wait(1).to({x:309.1},0).wait(1).to({x:304.6},0).wait(1).to({x:300.7},0).wait(1).to({x:297.4},0).wait(1).to({x:294.6},0).wait(1).to({x:292.2},0).wait(1).to({x:290.2},0).wait(1).to({x:288.4},0).wait(1).to({x:287},0).wait(1).to({x:285.8},0).wait(1).to({x:284.9},0).wait(1).to({x:284.1},0).wait(1).to({x:283.5},0).wait(1).to({x:283},0).wait(1).to({x:282.7},0).wait(1).to({x:282.6},0).wait(1).to({regX:133.5,regY:142,x:492.5,y:138},0).wait(281));

	// Layer 8
	this.instance_3 = new lib.Symbol5copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(488.5,33.5,1,1,0,0,0,372,66);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).wait(1).to({regX:2.5,regY:-20.6,x:119,y:-48.9},0).wait(1).to({y:-43},0).wait(1).to({y:-33.8},0).wait(1).to({y:-20.5},0).wait(1).to({y:-9.3},0).wait(1).to({y:-2.3},0).wait(1).to({y:2.4},0).wait(1).to({y:5.8},0).wait(1).to({y:8.4},0).wait(1).to({y:10.4},0).wait(1).to({y:12},0).wait(1).to({y:13.3},0).wait(1).to({y:14.3},0).wait(1).to({y:15.1},0).wait(1).to({y:15.7},0).wait(1).to({y:16.2},0).wait(1).to({y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({y:16.9},0).wait(1).to({regX:372,regY:66,x:488.5,y:103.5},0).wait(196));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(400,90.5,1,1,0,0,0,372,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:94.3,regY:-38.6,x:122.3,y:-13.2},0).wait(1).to({y:-10.6},0).wait(1).to({y:-7},0).wait(1).to({y:-1.7},0).wait(1).to({y:4.8},0).wait(1).to({y:9.9},0).wait(1).to({y:13.4},0).wait(1).to({y:15.8},0).wait(1).to({y:17.7},0).wait(1).to({y:19.1},0).wait(1).to({y:20.3},0).wait(1).to({y:21.2},0).wait(1).to({y:22},0).wait(1).to({y:22.6},0).wait(1).to({y:23.1},0).wait(1).to({y:23.6},0).wait(1).to({y:23.9},0).wait(1).to({y:24.2},0).wait(1).to({y:24.4},0).wait(1).to({y:24.6},0).wait(1).to({y:24.7},0).wait(1).to({y:24.8},0).wait(1).to({y:24.9},0).wait(1).to({regX:372,regY:67,x:400,y:130.5},0).wait(62).to({regX:94.3,regY:-38.6,x:122.3,y:25},0).wait(1).to({y:25.4},0).wait(1).to({y:26.2},0).wait(1).to({y:27.3},0).wait(1).to({y:29},0).wait(1).to({y:31.3},0).wait(1).to({y:34.6},0).wait(1).to({y:39.4},0).wait(1).to({y:46.5},0).wait(1).to({y:58.7},0).wait(1).to({y:82},0).wait(1).to({y:97.3},0).wait(1).to({y:102.6},0).wait(1).to({y:104.6},0).wait(1).to({regX:372,regY:67,x:400,y:210.5},0).wait(208));

	// Layer_1
	this.instance_5 = new lib.ConfettiALL("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(194.7,-297.9,1,1,0,0,0,10,-273.4);
	this.instance_5.alpha = 0.711;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(308));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(308));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-189.4,744.1,269.7);
// library properties:
lib.properties = {
	id: 'C86D5335F5794974B0170B1D7296B2A3',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/board_lb.png", id:"board_lb"}
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
an.compositions['C86D5335F5794974B0170B1D7296B2A3'] = {
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