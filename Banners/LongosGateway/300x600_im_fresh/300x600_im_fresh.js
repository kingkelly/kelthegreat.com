(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_im_fresh_atlas_", frames: [[107,0,126,192],[0,0,105,248],[107,194,63,120],[0,250,88,81]]}
];


// symbols:



(lib.tom2_db = function() {
	this.spriteSheet = ss["300x600_im_fresh_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tom3_db = function() {
	this.spriteSheet = ss["300x600_im_fresh_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tom4_db = function() {
	this.spriteSheet = ss["300x600_im_fresh_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tom_db = function() {
	this.spriteSheet = ss["300x600_im_fresh_atlas_"];
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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tom4_db();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,63,120), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tom3_db();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,105,248), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAyQgEAAgBgEIgQhIIgPBIQgBAEgDAAIgFAAQgEAAAAgEIgWhZQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIADgCQABgBAAAAQABAAAAAAQABABAAAAQAAAAABAAIACADIATBOIARhKQABgEADAAIADAAQAEAAAAAEIARBKIAThOIACgDIAEAAIADACQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgWBZQAAAEgEAAg");
	this.shape.setTransform(83.9,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAjQgJgOAAgVQAAgVAJgNQAJgOAPAAQAOAAAKALQAKANAAAYQAAAVgIAOQgKAPgQAAQgPAAgJgPgAgSgcQgGALAAARQAAASAHAMQAHALAKAAQALAAAHgKQAHgLABgUQgBgRgFgLQgHgLgNAAQgLAAgHALg");
	this.shape_1.setTransform(72.7,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbAyQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBIgvhOIAABMQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAhZQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIADgBIADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABIAvBPIAAhNQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgBIADABIABADIAABZQAAAFgEAAg");
	this.shape_2.setTransform(62.1,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAwQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAhZQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADgBIAgAAQAMgBAHAIQAIAIAAALQABAMgIAIQgIAHgMAAIgbAAIAAAoQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgAgWgDIAbAAQAJgBAFgGQAFgEgBgIQAAgGgEgGQgGgFgIAAIgbAAg");
	this.shape_3.setTransform(45.7,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAjQgJgOAAgVQAAgVAIgNQAKgOAPAAQAPAAAJALQAKANAAAYQAAAVgIAOQgKAPgQAAQgOAAgKgPgAgSgcQgGALAAARQAAASAHAMQAHALAKAAQALAAAGgKQAJgLgBgUQABgRgHgLQgGgLgNAAQgLAAgHALg");
	this.shape_4.setTransform(35.3,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAwQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgoIgrAAIAAAoQgBAFgEAAQgFAAABgFIAAhZQgBgFAFAAQAEAAABAFIAAAoIArAAIAAgoQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAIAABZQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_5.setTransform(25,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAoQgFgFgDgGQgCgEAEgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABIADACQAIAPANAAQAJAAAGgFQAFgFAAgIQAAgHgDgEQgEgFgNgEQgbgHAAgUQAAgKAHgHQAIgIAMABQANAAAJAJQAEAFADAGQABADgEADQgEABgBgEQgDgFgGgFQgGgFgGAAQgJAAgFAFQgEAEAAAHQAAAOAUAGQAOADAHAGQAGAHAAALQAAAMgIAHQgIAIgNAAQgLAAgKgKg");
	this.shape_6.setTransform(15,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#023827").s().p("Al1CPQhRAAgghBQgLgVgEgYIgCgtQAAhRBBggQAVgLAYgEQAMgCAIAAILrAAQBRAAAhBBQAQAhAAAgIAAAZQAABRhBAhQghAQggAAg");
	this.shape_7.setTransform(50.4,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,100.8,28.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tom2_db();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,126,192), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tom_db();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,88,81), null);


(lib.Symbol1copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgbAcIAAg3IA3AAIAAA3g");
	this.shape.setTransform(243.7,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgqCuQgUgIgOgPQgPgPgJgUQgIgUAAgXIBJAAQgBAPALAKQAKALAPAAQAPAAALgLQALgKAAgPQAAgQgLgLQgLgJgPgBQgXABgTgJQgUgJgPgOQgOgOgJgUQgIgUAAgXQAAgXAIgVQAJgTAOgPQAPgPAUgIQATgIAXgBQAXABAUAIQAUAIAOAPQAQAPAIATQAIAVAAAXIhIAAQAAgPgLgLQgLgKgPAAQgPAAgKAKQgLALABAPQgBAPALAKQAKALAPAAQAYAAATAIQAVAJAOAPQAPAOAIATQAIAUAAAXQAAAYgIAUQgIAUgPAPQgOAOgVAJQgTAJgYAAQgWAAgUgJg");
	this.shape_1.setTransform(225.6,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgqCuQgUgIgOgPQgQgPgIgUQgIgUAAgXIBIAAQAAAPALAKQAKALAPAAQAPAAALgLQALgKAAgPQAAgQgLgLQgLgJgPgBQgXABgTgJQgVgJgOgOQgPgOgIgUQgIgUAAgXQAAgXAIgVQAIgTAPgPQAOgPAVgIQATgIAXgBQAXABAUAIQAUAIAOAPQAQAPAIATQAIAVAAAXIhIAAQAAgPgLgLQgLgKgPAAQgPAAgKAKQgLALAAAPQAAAPALAKQAKALAPAAQAYAAATAIQAVAJAOAPQAPAOAIATQAIAUAAAXQAAAYgIAUQgIAUgPAPQgOAOgVAJQgTAJgYAAQgWAAgUgJg");
	this.shape_2.setTransform(198.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhsC3IAAltIDZAAIAABKIiRAAIAABIIBsAAIAABIIhsAAIAABJICRAAIAABKg");
	this.shape_3.setTransform(172.3,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAkC3IhIi3IAAC3IhIAAIAAltIBIAAIBIC2IAAi2IBJAAIAAFtg");
	this.shape_4.setTransform(145.6,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AhsC3IAAltIDZAAIAABKIiRAAIAABIIBsAAIAABIIhsAAIAABJICRAAIAABKg");
	this.shape_5.setTransform(119,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AAkC3Ig5iTIgOAAIAACTIhJAAIAAltIBsAAQAXABAVAIQATAIAPAPQAOAPAJATQAIAVAAAXQAAAigRAbQgRAZgdAMIA/CdgAgjgkIAjAAQAQAAAKgLQAKgKAAgPQAAgPgKgLQgKgKgQAAIgjAAg");
	this.shape_6.setTransform(92.3,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIAAiRQAAgXAIgVQAJgTAOgPQAPgPAUgIQAUgIAWgBQAYABATAIQAUAIAPAPQAPAPAIATQAIAVAAAXIAACRQAAAXgIAUQgIAUgPAPQgPAPgUAIQgTAJgYAAQgWAAgUgJgAgZhiQgKALAAAPIAACRQAAAPAKAKQAKALAPAAQAQAAAKgLQAKgKAAgPIAAiRQAAgPgKgLQgKgKgQAAQgPAAgKAKg");
	this.shape_7.setTransform(65.7,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AgkC3IAAkjIhIAAIAAhKIDZAAIAABKIhJAAIAAEjg");
	this.shape_8.setTransform(40.2,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgqCuQgUgIgOgPQgQgPgIgUQgIgUAAgXIBIAAQAAAPALAKQAKALAPAAQAPAAALgLQALgKgBgPQABgQgLgLQgLgJgPgBQgXABgTgJQgVgJgOgOQgPgOgIgUQgIgUAAgXQAAgXAIgVQAIgTAPgPQAOgPAVgIQATgIAXgBQAXABAUAIQAUAIAPAPQAOAPAJATQAIAVAAAXIhJAAQABgPgLgLQgLgKgPAAQgPAAgKAKQgLALAAAPQAAAPALAKQAKALAPAAQAYAAATAIQAUAJAPAPQAOAOAJATQAIAUAAAXQAAAYgIAUQgJAUgOAPQgPAOgUAJQgTAJgYAAQgWAAgUgJg");
	this.shape_9.setTransform(14.8,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy4, new cjs.Rectangle(0,0,296,56), null);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AhsC3IAAltIDZAAIAABKIiRAAIAABIIBtAAIAABIIhtAAIAABJICRAAIAABKg");
	this.shape.setTransform(150.3,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAkC3IAAiTIhIAAIAACTIhIAAIAAltIBIAAIAACSIBIAAIAAiSIBJAAIAAFtg");
	this.shape_1.setTransform(123.7,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgkC3IAAkjIhIAAIAAhKIDZAAIAABKIhJAAIAAEjg");
	this.shape_2.setTransform(97,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhaC3IAAltIBJAAIAAEjIBsAAIAABKg");
	this.shape_3.setTransform(62.6,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AhaC3IAAltIBJAAIAAEjIBsAAIAABKg");
	this.shape_4.setTransform(39.6,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AAkC3IgOhKIgrAAIgPBKIhIAAIBIltIBIAAIBJFtgAAHAjIgHgjIgGAjIANAAg");
	this.shape_5.setTransform(14.8,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(0,0,296,56), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgkC3IAAkjIhIAAIAAhKIDZAAIAABKIhJAAIAAEjg");
	this.shape.setTransform(174.7,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIAAj/IBJAAIAAD/QAAAPAKAKQAKALAPAAQAQAAAKgLQAKgKAAgPIAAj/IBJAAIAAD/QAAAXgIAUQgIAUgPAPQgPAPgUAIQgTAJgYAAQgWAAgUgJg");
	this.shape_1.setTransform(148,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIAAiRQAAgXAIgVQAJgTAOgPQAPgPAUgIQAUgIAWgBQAYABATAIQAUAIAOAPQAQAPAIATQAIAVAAAXIAACRQAAAXgIAUQgIAUgQAPQgOAPgUAIQgTAJgYAAQgWAAgUgJgAgZhiQgKALAAAPIAACRQAAAPAKAKQAKALAPAAQAPAAALgLQALgKAAgPIAAiRQAAgPgLgLQgLgKgPAAQgPAAgKAKg");
	this.shape_2.setTransform(121.4,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AAlC3IAAiTIhIAAIAACTIhJAAIAAltIBJAAIAACSIBIAAIAAiSIBIAAIAAFtg");
	this.shape_3.setTransform(94.7,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AgjC3IAAkjIhJAAIAAhKIDZAAIAABKIhIAAIAAEjg");
	this.shape_4.setTransform(68.1,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgjC3IAAltIBHAAIAAFtg");
	this.shape_5.setTransform(48.7,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AAkC3Igki3IgjC3IhJAAIhJltIBJAAIAkC2IAli2IBHAAIAlC2IAki2IBJAAIhJFtg");
	this.shape_6.setTransform(22,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,0,296,56), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgQA4IALg4IgWAAIAAg3IA3AAIAAAcIghBTg");
	this.shape.setTransform(244.9,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIBJAAQAAAPAKAKQAKALAPAAQAQAAAKgLQAKgKAAgPQAAgQgKgLQgKgJgQgBQgWABgVgJQgTgJgPgOQgOgOgJgUQgIgUAAgXQAAgXAIgVQAJgTAOgPQAPgPATgIQAVgIAWgBQAYABATAIQAUAIAPAPQAPAPAIATQAIAVAAAXIhJAAQAAgPgKgLQgKgKgQAAQgPAAgKAKQgKALAAAPQAAAPAKAKQAKALAPAAQAXAAAVAIQATAJAPAPQAOAOAJATQAIAUAAAXQAAAYgIAUQgJAUgOAPQgPAOgTAJQgVAJgXAAQgWAAgUgJg");
	this.shape_1.setTransform(226.8,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIBJAAQAAAPAKAKQAKALAPAAQAPAAALgLQALgKAAgPQAAgQgLgLQgLgJgPgBQgWABgUgJQgUgJgPgOQgOgOgJgUQgIgUAAgXQAAgXAIgVQAJgTAOgPQAPgPAUgIQAUgIAWgBQAYABATAIQAUAIAOAPQAQAPAIATQAIAVAAAXIhIAAQAAgPgLgLQgLgKgPAAQgPAAgKAKQgKALAAAPQAAAPAKAKQAKALAPAAQAXAAAVAIQATAJAPAPQAOAOAJATQAIAUAAAXQAAAYgIAUQgJAUgOAPQgPAOgTAJQgVAJgXAAQgWAAgUgJg");
	this.shape_2.setTransform(200.1,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhsC3IAAltIDZAAIAABKIiRAAIAABIIBsAAIAABIIhsAAIAABJICRAAIAABKg");
	this.shape_3.setTransform(174.7,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAkC3IhHi3IAAC3IhJAAIAAltIBJAAIBHC2IAAi2IBJAAIAAFtg");
	this.shape_4.setTransform(148,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AAlC3IAAiTIhIAAIAACTIhJAAIAAltIBJAAIAACSIBIAAIAAiSIBIAAIAAFtg");
	this.shape_5.setTransform(121.4,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIBJAAQAAAPAKAKQAKALAPAAQAPAAALgLQALgKAAgPQAAgQgLgLQgLgJgPgBQgXABgTgJQgVgJgOgOQgPgOgIgUQgIgUAAgXQAAgXAIgVQAIgTAPgPQAOgPAVgIQATgIAXgBQAYABATAIQAUAIAOAPQAPAPAJATQAIAVAAAXIhIAAQAAgPgLgLQgLgKgPAAQgPAAgKAKQgKALAAAPQAAAPAKAKQAKALAPAAQAXAAAVAIQATAJAPAPQAPAOAIATQAIAUAAAXQAAAYgIAUQgIAUgPAPQgPAOgTAJQgVAJgXAAQgXAAgTgJg");
	this.shape_6.setTransform(94.7,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AhsC3IAAltIDZAAIAABKIiQAAIAABIIBsAAIAABIIhsAAIAABJICQAAIAABKg");
	this.shape_7.setTransform(68.1,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAlC3Ig6iTIgPAAIAACTIhIAAIAAltIBsAAQAYABATAIQAVAIAOAPQAPAPAIATQAIAVAAAXQAAAigRAbQgRAZgcAMIA+CdgAgkgkIAkAAQAPAAALgLQALgKAAgPQAAgPgLgLQgLgKgPAAIgkAAg");
	this.shape_8.setTransform(41.4,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AhsC3IAAltIDZAAIAABKIiRAAIAABIIBsAAIAABIIhsAAIAACTg");
	this.shape_9.setTransform(14.8,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,0,296,56), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgPgPgIgUQgIgUAAgXIBJAAQAAAPAKAKQAKALAPAAQAQAAAKgLQAKgKAAgPQAAgQgKgLQgKgJgQgBQgWABgVgJQgTgJgPgOQgOgOgJgUQgIgUAAgXQAAgXAIgVQAJgTAOgPQAPgPATgIQAVgIAWgBQAXABAUAIQAUAIAPAPQAOAPAJATQAIAVAAAXIhJAAQAAgPgKgLQgKgKgQAAQgPAAgKAKQgKALAAAPQAAAPAKAKQAKALAPAAQAXAAAVAIQATAJAPAPQAOAOAJATQAIAUAAAXQAAAYgIAUQgJAUgOAPQgPAOgTAJQgVAJgXAAQgXAAgTgJg");
	this.shape.setTransform(154,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgbA4IAAhvIA3AAIgXBvg");
	this.shape_1.setTransform(135.8,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgqCuQgUgIgOgPQgQgPgIgUQgIgUAAgXIAAiRQAAgXAIgVQAIgTAQgPQAOgPAUgIQATgIAXgBQAYABATAIQAUAIAPAPQAOAPAJATQAIAVAAAXIAACRQAAAXgIAUQgJAUgOAPQgPAPgUAIQgTAJgYAAQgXAAgTgJgAgZhiQgLALAAAPIAACRQAAAPALAKQAKALAPAAQAPAAALgLQAKgKAAgPIAAiRQAAgPgKgLQgLgKgPAAQgPAAgKAKg");
	this.shape_2.setTransform(117.7,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AgqCuQgUgIgOgPQgQgPgIgUQgIgUAAgXIAAiRQAAgXAIgVQAIgTAQgPQAOgPAUgIQATgIAXgBQAXABAUAIQAUAIAPAPQAOAPAJATQAIAVAAAXIhJAAQAAgPgKgLQgKgKgQAAQgPAAgKAKQgLALAAAPIAACRQAAAPALAKQAKALAPAAQAQAAAKgLQAKgKAAgPIAAglIgkAAIAAhIIBtAAIAABsQAAAYgIAUQgJAUgOAPQgPAOgUAJQgUAJgXAAQgXAAgTgJg");
	this.shape_3.setTransform(91.1,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAkC3IhIi3IAAC3IhIAAIAAltIBIAAIBIC2IAAi2IBJAAIAAFtg");
	this.shape_4.setTransform(64.4,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgqCuQgUgIgPgPQgOgPgJgUQgIgUAAgXIAAiRQAAgXAIgVQAJgTAOgPQAPgPAUgIQAUgIAWgBQAYABATAIQAUAIAPAPQAPAPAIATQAIAVAAAXIAACRQAAAXgIAUQgIAUgPAPQgPAPgUAIQgTAJgYAAQgWAAgUgJgAgZhiQgKALAAAPIAACRQAAAPAKAKQAKALAPAAQAQAAAKgLQAKgKAAgPIAAiRQAAgPgKgLQgKgKgQAAQgPAAgKAKg");
	this.shape_5.setTransform(37.8,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AhaC3IAAltIBJAAIAAEjIBsAAIAABKg");
	this.shape_6.setTransform(12.9,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,296,56), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F4EC").s().p("AAABDQgNgBgJgMQgJgMAAgQIABg0QAAgQAIgMQAKgMANAAQAQAAAIAOQAIANgBAQIgUgFQAAgFgCgFQgDgFgGAAQgLAAAAARIAAA0QAAAGADAFQADAGAFAAQAGAAADgGQACgEAAgGIAAgPIgLgDIAAgWIAfAHIAAAfQAAAQgHAMQgJAOgPAAIgBAAg");
	this.shape.setTransform(127.9,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8F4EC").s().p("AhAASQgJgEgCgDIAegDQAqgGASgDQAkgHAagNQAAAOgNAGQgwAThHAEQgCAAgHgEg");
	this.shape_1.setTransform(98.3,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F4EC").s().p("AgDAiQgJgCgFgJQgEgJABgKQACgaAOgJQAJgFAHAHQAHAIACAKQABAHgCAMQgCAMgGAHQgGAHgHAAIgCAAg");
	this.shape_2.setTransform(112.8,37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8F4EC").s().p("AAdAtIg3gJQgLgCgCgJIgBgRIAFghQADgVAXACQAXADAKAKQAKAKADAWIAEAgQABAMgKAAIgDAAg");
	this.shape_3.setTransform(112.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8F4EC").s().p("AgDAiQgIgCgFgJQgFgJABgLQACgZAPgJQAIgFAHAHQAMANgEAYQgCAMgGAHQgFAHgHAAIgDAAg");
	this.shape_4.setTransform(125.6,36.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F4EC").s().p("AijDnQgTAAgMgQQgNgQABgUQgPgHgPgRQgRgSACgKQACgMAQAAIgBgSQgCg0AGgdQAShVBDgYQAOgFABgPIAEgsQABgQAQgEIDEg1QALgDAOAHIBxA5QAVAKAAAYIAGD5QABAQgQABIgqAFQgCAagOAWQgSAdgbAAQgcABgPgZQgLgTgCgVIgMABQgBAjgUAXQgUAWgbAAQgVgBgQgVQgPgUABgXIgIAAQgRANgmAJQgBANgLANQgNASgVAAIgBAAgAgTh0QgJAFgGAOQgGAOgCAOQgHA0AFBHQABAUACASQgRANgoAJQg7AMhBAAQgSAAAAAGQAAAIASAQQARAPAJACQgBAWALAOQALAMAPAAQARABAJgRQAIgNAAgMQApgHAVgRIAUAAQAAAaAMASQAMATAVABQAXAAARgXQAPgWAAgbQABgXgDgMQgEgOgLgSQAMAGAIAVQAHASAAAOIAMgBIAAhdQgBg/gFgmQgDgagSgSQgTgRgbgEIgGAAQgLAAgHAEgABjjaQgDACgBAOQgFBtgDDZQgBAZAHAUQAFAOAJAKQALAKALAAQAaABAPgYQAOgWABgfQABgogYgcQAVAOAHAVQACAHADAZIAogEQAHgBABgEIABgLIgHjxQAAgSgQgIIhsg1QgJgEgDAAIgCAAgAjeBUQgBAJAHAHQAGAIAJgBQATAAADgTQABgKgHgHQgGgIgJAAQgUABgCAUgAhjAyQgIAIAAALQABAKAHAIQAIAHAKAAQALAAAHgIQAIgIAAgKQgBgLgHgHQgIgIgKAAQgKABgIAHgAhBhcIhHAOQgfAFgWAZQgXAZgDAeQAAAGADACQADADAJgBICCgWQAMgCAAgQQABgmAFgSQADgKgEgDQgCgBgDAAIgHABg");
	this.shape_5.setTransform(110.7,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8F4EC").s().p("AgCAHQgEgCAAgFQAAgEAFgDIABAAQADAAACADQACACABACQAAADgDADQgCABgDAAg");
	this.shape_6.setTransform(102.5,29.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8F4EC").s().p("AgFALQgFgEAAgHQABgGAFgFQAEgEAGAAIAFABQgFABgEAEQgCAEAAAFQAAAMAKAEIgEAAQgGAAgFgFg");
	this.shape_7.setTransform(101.9,30);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F4EC").s().p("AAAAGIgBAAQgFgBABgFQAAgEAEgCIABAAQAHAAAAAGQAAAHgFAAIgCgBg");
	this.shape_8.setTransform(90.5,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8F4EC").s().p("AgEAKQgEgEAAgGQAAgFAEgEQAEgFAGABIADAAQgJADAAAKQAAALAJADIgEABQgFgBgEgEg");
	this.shape_9.setTransform(90.1,31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8F4EC").s().p("Ag0AEIBpgRQgQASgmAHQgMACgJAAQgVAAgJgKg");
	this.shape_10.setTransform(98.8,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8F4EC").s().p("Ag6AFQgGAAAAgFQAAgEAGAAIB2AAQAFAAAAAEQAAAFgFAAg");
	this.shape_11.setTransform(150.2,43.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8F4EC").s().p("AgOAiIgCgBIAAgBIAAgCQALggANgWIgZAAIgCgBIgCgCIAAgDIACgCIACgBIAkAAIABABIABACIAAABIgBAFQgRAbgJAcIgBACIgDABg");
	this.shape_12.setTransform(159.7,40.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8F4EC").s().p("AgMAVIgGgEIgCgDIABgCIADgDIABAAIADABIAFACIAGACQAEAAAFgEQADgCABgGQgGAFgJAAQgFAAgFgCQgEgBgCgEQgDgCAAgEQAAgEADgEQADgEAEgCQAFgCAGAAQAFAAAEACIAIAFQADADACAEIACAIIgCAJQgBAEgEADQgCADgGACQgEACgFAAQgGAAgFgCgAgIgLQgDABgBADQAAABABAAQAAABAAABQAAAAABAAQAAABABAAQADACAEAAIAGgBQAEgBADgCQgCgEgDgCQgEgCgDAAQgFAAgCACg");
	this.shape_13.setTransform(154.8,39.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8F4EC").s().p("AgMAVIgHgEIgBgDIABgCIABgCIABgBIACAAIADABIAFACIAGACQAEAAAEgEQAFgDAAgFQgHAFgIAAQgFAAgFgCQgEgBgCgEQgDgBAAgFQAAgFADgDQACgEAFgCQAEgCAHAAQAEAAAFACIAIAFQADADACAEQACAEAAAEQAAAFgCAEQgBAEgEADQgDADgFACQgEACgFAAQgGAAgFgCgAgJgLQgCABAAADQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAQADACAEAAIAGgBIAHgDQgCgFgDgBQgEgCgDAAQgEAAgEACg");
	this.shape_14.setTransform(149.4,39.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8F4EC").s().p("AAFAWIgCgBIAAgCIAAgcIgHAFIgEABIgDgBIgBgEIAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAIAGgEIAEgDIAFgCIAEAAIACABIAAACIAAAlIAAACIgCABg");
	this.shape_15.setTransform(144.7,39.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F4EC").s().p("AgzAFQgGAAAAgFQAAgEAGAAIBnAAQAGAAAAAEQAAAFgGAAg");
	this.shape_16.setTransform(70.9,43.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F4EC").s().p("AgCAEIgCAAIgBgCIAAgDIABgCIACgBIAFAAIACABIABACIAAADIgBACIgCAAg");
	this.shape_17.setTransform(76,40.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8F4EC").s().p("AgBAWIgCgBIgBgCIAAgfIgRAAIgDgBIAAgCIAAgDIAAgCIADgBIArAAIACABIABACIAAADIgBACIgCABIgRAAIAAAfIgBACIgCABg");
	this.shape_18.setTransform(72.9,39.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F4EC").s().p("AgLAVQgFgBgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIABgEIABgBIACgBIADABQAIAFAIAAIAGAAIAEgDIACgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBgBAAIgQgCIgHgCIgEgBIgDgDIgBgFQAAgFAGgFQAHgEAIAAIAJABIAKAEIACADIgBAEIgCABIgCABIgCgBQgGgEgIAAIgFABIgEACQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIABACIADABIAVADIAFACIADADIABAFQAAAFgDADQgDAEgFABQgEACgHAAQgHAAgFgCg");
	this.shape_19.setTransform(67.3,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8F4EC").s().p("AgXAiIgCgBIAAgCIAAg9IAAgCIACgBIAuAAIACABIABACIAAADIgBACIgCABIgmAAIAAAYIAdAAIACABIABACIAAADIgBACIgCABIgdAAIAAAQIAmAAIACABIABACIAAADIgBACIgCABg");
	this.shape_20.setTransform(61.4,40.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8F4EC").s().p("AgaAsIgFgDQgDgDAAgDQAAgEADgDIABgBIADgBIABAAIAAAAIABABIAAAAIABAAQAEADACAAQAEAAACgDIAGgHIghg6IAAgCIABgDIADgBIAIAAIADABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAXAsIAWgsQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgBIAIAAIADABIABACIAAADIglBGIgFAHIgHAFQgEABgFAAQgEAAgEgBg");
	this.shape_21.setTransform(119.7,90.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8F4EC").s().p("AgVAwQgJgDgEgGIAAhVIABgEIADgBIAHAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIABAEIAAAjQAIgGALAAQAPAAAJAKQAKAKAAAOQAAAPgKAKQgKAKgRAAQgKAAgJgEgAgSAEIAAAdQAHAFAJAAQAJAAAFgGQAGgGAAgJQAAgJgGgGQgGgFgHAAQgKAAgHAHg");
	this.shape_22.setTransform(110.3,87.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8F4EC").s().p("AANAkQgOgIgIgNQgGgIgFgQQgEgRgGgLIgBgDIAEAAQAMACAMAHQAPAMAJAcQAGAXAEAGIABACIgCABQgHAAgKgFg");
	this.shape_23.setTransform(141.3,100.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8F4EC").s().p("AgwA1QgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAIgLANgfQAJgWAHgJQAKgMAMgIQAKgGALgDIAGgCIAPAAIgDAHIgLAUIgPAhQgHAPgMALQgLAMgRAFQgMAEgJAAg");
	this.shape_24.setTransform(150.5,96.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8F4EC").s().p("AgJCaIgLgCQgRgEgKgIQgGgFgDgHQgBgGAAgIQAAgPAMgJQAOgKAagCIAXAAQADABAAAEQAAADgDABQgCACgIAAQgNAAgHALQgJAMAEANQAEAJAJAFQAHAGALgCQALgCAPgLQAKgIAPgRIAbgnQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDAAIgFABQgSAAgEgBQgIgDgFgEQgIgFgFgGQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAABgBAAQgHAHgHAEQgOAIgJABIgNAAQgPgBgIgJQgGgEAAgGQgBgKADgIIAZgoQAGgJACgFIgBgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgJAFIgKAIIgmArIgNAXIgGAKQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgoABQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIABgCIAUgmIAHgLQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQgHgBgFgEQgBgBAAAAQAAAAgBAAQAAAAAAAAQAAABgBABQgCAMgGAJQgKAPgMAIQgMAJgNAEQgOAEgTAAQgLAAgJgFQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgIAJgOAIQgOAGgMAAIgPgCQgMgBgJgFQgVgIgLgNQAAAAAAAAQgBgBAAAAQgBAAAAABQgBAAAAAAQgFAEgOAHQgOAFgJAAQgSABgJgDQgMgEgHgHQgFgFgEgKIAAgPQADgLAHgJQAEgFAGgDQALgHANgDQARgDAOAEQARAFALAJIAFADQAAABAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIBGiAIAJgKQAOgPASgFQASgFANAGQAKAFAEAJQAGAMgDAQQgBADgDACQgDACgDgBQgFgBAAgEIABgJQAAgFgCgGQgEgIgIAFQgEADgGAHIgJAOIghA7IgRAfQgIAOgQAPIgOANIgCACIACADIARAOQAOAJAKAEQARAGAPgMQAAAAAAgBQABAAAAAAQAAgBAAAAQgBgBAAAAQgPgPAHgYQAEgPAMgPQAJgKALgGQAPgIAOgDQAYgDARAHQAKADAIAJQACADADAHQAEAHAGAFIAHAEQAIACACgGIAUggIACgBIAqgBQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgGAKIAAACIAJgHQAWgMAQABQAQACAFAOQACAKgFAHIgTAdIgNAYQgCAEAAAFQAAAEAEAAQACAAAEgCQAJgFAPgQQADgEAAgEQgBgTANgRQANgSAUgJQAPgGALgBIAMAAQAMgBAOAHIAIAHQAAAAABABQAAAAABAAQAAAAAAAAQAAgBABAAIACgEQACgEAEAAIAiABIAFgBQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIgwBVIAAABIABAAQAIgEAJgIIAQgMQACgCAAgDQADgSAMgPQANgRAVgIQARgIAWABQARABAMAJQAGAEADAFQAKAOAPAEQATAIATgNQAOgJANgQIAHgJQADgDADAAQADgBACACQACACAAADIgDAJQgDAHAAAIIABANIAAAMQgDAXgMAOIgEAFQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIACAAIAWgJIAYgMQAEgDABAEIACAEQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQgDAEgHACIgZAMQgQAJgRADQgVADgLgBQgTgDgJgOQgFgHACgKQABgLAGgGQAFgFAFAAQAIgBAEABQAGABAEAGQAGALgHAJQgEAGgJABQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIABACQAEAFAJAAQAGABADgFQAGgJADgJQADgJAAgTQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAABQgRAGgTgEIgRgFQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAABQgCAHgDAHQgGAOgLALQgLAMgRAHQgTAJgagCQgPgCgMgMIgIgLQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABgBAAIgKAHQgPALgRAEQgCABgDADIgEAEIgPAUQgIAJgQAPIgPAMIgUANIgVAKIgXAFgAmUAJQgRAAgIAOQgFAKAEAKQAEAHAIAFQAIAEAJAAQAKgBAJgGIANgMQADgCgDgDQgIgNgIgGQgIgHgKAAIgBAAgAB4ghQgFABgJAGQgLAIgIAMQgOARgGAUQgCAKACAFQADAHAHgBQAIgBAKgIIAKgLQAGgFAEgHQAJgMAFgMQAEgKAAgHIAAgDQAAgFgDgDQgDgCgDAAIgEABgAimgiIgIACQgLAGgLAMQgGAHgIANQgFAGgGAPQgCAIAAAGQABAMALgBQAHgCAFgEQAMgIALgPQAJgLAGgNQAFgNAAgHIAAgEQgCgJgGAAIgCAAgAEVgiQgFAAgIAFQgQALgPAWIgIAPQgGAOABAJQABAKAKAAQAEAAAFgDQAFgDAHgHQAIgGAMgRQAGgIAFgMQAEgLAAgGIAAgDQgCgKgHAAIgBAAg");
	this.shape_25.setTransform(109.3,107.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8F4EC").s().p("AgTBmIAAhmIgphlIApAAIATAzIAUgzIApAAIgpBlIAABmg");
	this.shape_26.setTransform(214.8,64.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8F4EC").s().p("AAUBmIgIgpIgXAAIgIApIgpAAIApjLIAnAAIApDLgAgDAUIAHAAIgEgUg");
	this.shape_27.setTransform(201.7,64.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8F4EC").s().p("AAUBmIgUhmIgTBmIgpAAIgpjLIApAAIAVBlIAUhlIAnAAIAVBlIAUhlIApAAIgpDLg");
	this.shape_28.setTransform(184.2,64.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8F4EC").s().p("Ag8BmIAAjLIB5AAIAAApIhQAAIAAAoIA8AAIAAAoIg8AAIAAApIBQAAIAAApg");
	this.shape_29.setTransform(164.9,64.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F8F4EC").s().p("AgTBmIAAiiIgpAAIAAgpIB5AAIAAApIgpAAIAACig");
	this.shape_30.setTransform(149.6,64.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8F4EC").s().p("AAVBmIgJgpIgYAAIgIApIgoAAIAojLIApAAIAoDLgAgDAUIAHAAIgEgUg");
	this.shape_31.setTransform(136,64.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgHgIgGgMQgEgLAAgNIAAhRQAAgNAEgLQAGgMAHgIQAIgHAMgGQALgEAMAAQANAAALAEQAMAGAHAHQAJAJAEALQAFAMAAAMIgpAAQAAgIgGgGQgFgGgJAAQgIAAgGAGQgFAFAAAJIAABRQAAAJAFAFQAGAGAIAAQAJAAAFgGQAGgGAAgIIAAgVIgUAAIAAgoIA9AAIAAA9QAAALgFANQgEALgJAIQgHAIgMAFQgKAFgOAAQgNAAgKgFg");
	this.shape_32.setTransform(121.2,64.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8F4EC").s().p("AgUBmIAAhmIgohlIAoAAIAUAzIAUgzIApAAIgpBlIAABmg");
	this.shape_33.setTransform(97.1,64.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8F4EC").s().p("AAUBmIgfhSIgIAAIAABSIgpAAIAAjLIA8AAQANAAALAEQAMAGAIAHQAIAIAEAMQAFAKAAAOQAAATgKAPQgJAOgQAHIAjBXgAgTgUIATAAQAJAAAFgFQAGgGAAgJQAAgJgGgFQgFgGgJAAIgTAAg");
	this.shape_34.setTransform(82.7,64.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8F4EC").s().p("Ag8BmIAAjLIB5AAIAAApIhQAAIAAAoIA8AAIAAAoIg8AAIAAApIBQAAIAAApg");
	this.shape_35.setTransform(67.4,64.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgIgKgFgKQgEgLAAgNIAAhRQAAgNAEgLQAFgLAIgJQAIgHAMgGQALgEAMAAQAOAAAKAEQAMAGAHAHQAJAJAFALQAEALAAANIgoAAQgBgIgFgGQgHgGgIAAQgIAAgFAGQgHAGAAAIIAABRQAAAIAHAGQAFAGAIAAQAIAAAHgGQAFgGABgIIAoAAQAAANgEALQgFAKgJAKQgHAIgMAEQgKAFgOAAQgNAAgKgFg");
	this.shape_36.setTransform(52.1,64.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8F4EC").s().p("AgXBhQgMgEgIgIQgHgIgFgMQgFgLAAgNIAAhRQAAgNAFgLQAFgMAHgIQAIgHAMgGQAMgEALAAQANAAALAEQANAGAGAHQAJAJAFALQAEALAAANIAABRQAAANgEALQgFAKgJAKQgHAHgMAFQgKAFgOAAQgMAAgLgFgAgNg2QgGAFAAAJIAABRQAAAJAGAFQAFAGAIAAQAJAAAGgGQAFgGABgIIAAhRQgBgIgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_37.setTransform(36.8,64.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8F4EC").s().p("AAUBmIgfhSIgIAAIAABSIgpAAIAAjLIA8AAQANAAALAEQAMAGAIAHQAIAIAEAMQAFAKAAAOQAAASgJAQQgKAOgQAHIAjBXgAgTgUIATAAQAIAAAHgFQAFgHAAgIQAAgJgFgFQgGgGgJAAIgTAAg");
	this.shape_38.setTransform(21.5,64.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8F4EC").s().p("AgXBhQgMgFgHgHQgJgKgEgKQgFgMAAgMIAAhRQAAgMAFgMQAEgLAJgJQAHgHAMgGQALgEAMAAQANAAALAEQAMAGAIAHQAHAIAGAMQAEALAAANIgpAAQAAgJgFgFQgGgGgJAAQgIAAgFAGQgGAGAAAIIAABRQAAAIAGAGQAFAGAIAAQAJAAAGgGQAFgFAAgJIAAgVIgUAAIAAgoIA9AAIAAA9QAAANgEALQgGAMgHAHQgIAIgMAFQgKAFgOAAQgNAAgKgFg");
	this.shape_39.setTransform(6.1,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,221,123.3), null);


// stage content:
(lib._300x600_im_fresh = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// cta
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(149.6,515.8,1,1,0,0,0,50.4,14.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({alpha:1},17,cjs.Ease.get(-0.93)).wait(47).to({regY:14.3,scaleX:1,scaleY:1,y:515.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:515.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:515.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:515.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:515.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:515.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:515.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:515.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:515.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:515.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:515.8},0).wait(51).to({regY:14.3,scaleX:1,scaleY:1,y:515.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:515.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:515.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:515.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:515.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:515.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:515.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:515.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:515.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:515.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:515.8},0).wait(1));

	// Layer 7
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.5,641,1,1,0,0,0,31.5,60);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({x:345.5,y:636},0).wait(1).to({x:340.1,y:629.2},0).wait(1).to({x:332.2,y:619.4},0).wait(1).to({x:320.5,y:604.7},0).wait(1).to({x:307.2,y:588.1},0).wait(1).to({x:297.4,y:575.9},0).wait(1).to({x:290.9,y:567.8},0).wait(1).to({x:286.2,y:561.9},0).wait(1).to({x:282.7,y:557.5},0).wait(1).to({x:280,y:554.1},0).wait(1).to({x:277.8,y:551.4},0).wait(1).to({x:276,y:549.2},0).wait(1).to({x:274.6,y:547.4},0).wait(1).to({x:273.4,y:545.9},0).wait(1).to({x:272.4,y:544.7},0).wait(1).to({x:271.6,y:543.7},0).wait(1).to({x:271,y:542.9},0).wait(1).to({x:270.5,y:542.3},0).wait(1).to({x:270.1,y:541.8},0).wait(1).to({x:269.8,y:541.4},0).wait(1).to({x:269.6,y:541.2},0).wait(1).to({x:269.5,y:541},0).wait(148));

	// Layer 6
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.5,596,1,1,0,0,0,52.5,124);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({x:-42.4,y:590},0).wait(1).to({x:-35.7,y:581.8},0).wait(1).to({x:-25.8,y:570},0).wait(1).to({x:-11.2,y:552.5},0).wait(1).to({x:5.5,y:532.5},0).wait(1).to({x:17.6,y:517.9},0).wait(1).to({x:25.8,y:508.1},0).wait(1).to({x:31.6,y:501.1},0).wait(1).to({x:36,y:495.9},0).wait(1).to({x:39.4,y:491.7},0).wait(1).to({x:42.2,y:488.5},0).wait(1).to({x:44.4,y:485.8},0).wait(1).to({x:46.2,y:483.6},0).wait(1).to({x:47.7,y:481.9},0).wait(1).to({x:48.9,y:480.4},0).wait(1).to({x:49.9,y:479.2},0).wait(1).to({x:50.7,y:478.3},0).wait(1).to({x:51.3,y:477.5},0).wait(1).to({x:51.8,y:476.9},0).wait(1).to({x:52.1,y:476.5},0).wait(1).to({x:52.4,y:476.2},0).wait(1).to({x:52.5,y:476.1},0).wait(1).to({y:476},0).wait(148));

	// Layer 5
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(318,-4,1,1,0,0,0,63,96);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({x:314,y:1.1},0).wait(1).to({x:308.6,y:7.8},0).wait(1).to({x:300.7,y:17.7},0).wait(1).to({x:289,y:32.3},0).wait(1).to({x:275.7,y:49},0).wait(1).to({x:265.9,y:61.1},0).wait(1).to({x:259.4,y:69.3},0).wait(1).to({x:254.7,y:75.1},0).wait(1).to({x:251.2,y:79.5},0).wait(1).to({x:248.5,y:82.9},0).wait(1).to({x:246.3,y:85.7},0).wait(1).to({x:244.5,y:87.9},0).wait(1).to({x:243.1,y:89.7},0).wait(1).to({x:241.9,y:91.2},0).wait(1).to({x:240.9,y:92.4},0).wait(1).to({x:240.1,y:93.4},0).wait(1).to({x:239.5,y:94.2},0).wait(1).to({x:239,y:94.8},0).wait(1).to({x:238.6,y:95.3},0).wait(1).to({x:238.3,y:95.6},0).wait(1).to({x:238.1,y:95.9},0).wait(1).to({x:238,y:96},0).wait(150));

	// Layer 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37,-40.5,1,1,0,0,0,44,40.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({x:-32.9,y:-36.4},0).wait(1).to({x:-27.5,y:-31},0).wait(1).to({x:-19.6,y:-23.1},0).wait(1).to({x:-7.9,y:-11.4},0).wait(1).to({x:5.4,y:1.9},0).wait(1).to({x:15.1,y:11.6},0).wait(1).to({x:21.6,y:18.1},0).wait(1).to({x:26.3,y:22.8},0).wait(1).to({x:29.8,y:26.3},0).wait(1).to({x:32.6,y:29.1},0).wait(1).to({x:34.7,y:31.2},0).wait(1).to({x:36.5,y:33},0).wait(1).to({x:38,y:34.5},0).wait(1).to({x:39.1,y:35.6},0).wait(1).to({x:40.1,y:36.6},0).wait(1).to({x:40.9,y:37.4},0).wait(1).to({x:41.5,y:38},0).wait(1).to({x:42,y:38.5},0).wait(1).to({x:42.4,y:38.9},0).wait(1).to({x:42.7,y:39.2},0).wait(1).to({x:42.9,y:39.4},0).wait(1).to({x:43,y:39.5},0).wait(151));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.7,424.3,1,1,0,0,0,110.5,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(185));

	// Layer_6
	this.instance_6 = new lib.Symbol1copy4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(171,328,1,1,0,0,0,148,28);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(1).to({regX:125.1,regY:22.8,x:148.1,y:321.6,alpha:0.062},0).wait(1).to({y:319.9,alpha:0.147},0).wait(1).to({y:317.4,alpha:0.271},0).wait(1).to({y:314.1,alpha:0.435},0).wait(1).to({y:311,alpha:0.589},0).wait(1).to({y:308.8,alpha:0.698},0).wait(1).to({y:307.3,alpha:0.775},0).wait(1).to({y:306.2,alpha:0.831},0).wait(1).to({y:305.3,alpha:0.873},0).wait(1).to({y:304.7,alpha:0.905},0).wait(1).to({y:304.2,alpha:0.93},0).wait(1).to({y:303.8,alpha:0.95},0).wait(1).to({y:303.5,alpha:0.966},0).wait(1).to({y:303.3,alpha:0.977},0).wait(1).to({y:303.1,alpha:0.986},0).wait(1).to({y:302.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:302.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:308,alpha:1},0).wait(154));

	// Layer_5
	this.instance_7 = new lib.Symbol1copy3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(171,276,1,1,0,0,0,148,28);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regX:82.5,regY:22.8,x:105.5,y:269.6,alpha:0.062},0).wait(1).to({y:267.9,alpha:0.147},0).wait(1).to({y:265.4,alpha:0.271},0).wait(1).to({y:262.1,alpha:0.435},0).wait(1).to({y:259,alpha:0.589},0).wait(1).to({y:256.8,alpha:0.698},0).wait(1).to({y:255.3,alpha:0.775},0).wait(1).to({y:254.2,alpha:0.831},0).wait(1).to({y:253.3,alpha:0.873},0).wait(1).to({y:252.7,alpha:0.905},0).wait(1).to({y:252.2,alpha:0.93},0).wait(1).to({y:251.8,alpha:0.95},0).wait(1).to({y:251.5,alpha:0.966},0).wait(1).to({y:251.3,alpha:0.977},0).wait(1).to({y:251.1,alpha:0.986},0).wait(1).to({y:250.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:250.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:256,alpha:1},0).wait(156));

	// Layer_4
	this.instance_8 = new lib.Symbol1copy2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(171,224,1,1,0,0,0,148,28);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).wait(1).to({regX:94.7,regY:22.8,x:117.7,y:217.6,alpha:0.062},0).wait(1).to({y:215.9,alpha:0.147},0).wait(1).to({y:213.4,alpha:0.271},0).wait(1).to({y:210.1,alpha:0.435},0).wait(1).to({y:207,alpha:0.589},0).wait(1).to({y:204.8,alpha:0.698},0).wait(1).to({y:203.3,alpha:0.775},0).wait(1).to({y:202.2,alpha:0.831},0).wait(1).to({y:201.3,alpha:0.873},0).wait(1).to({y:200.7,alpha:0.905},0).wait(1).to({y:200.2,alpha:0.93},0).wait(1).to({y:199.8,alpha:0.95},0).wait(1).to({y:199.5,alpha:0.966},0).wait(1).to({y:199.3,alpha:0.977},0).wait(1).to({y:199.1,alpha:0.986},0).wait(1).to({y:198.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:198.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:204,alpha:1},0).wait(158));

	// Layer_3
	this.instance_9 = new lib.Symbol1copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(171,172,1,1,0,0,0,148,28);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},0).wait(1).to({regX:125.8,regY:25.6,x:148.8,y:168.4,alpha:0.062},0).wait(1).to({y:166.7,alpha:0.147},0).wait(1).to({y:164.2,alpha:0.271},0).wait(1).to({y:160.9,alpha:0.435},0).wait(1).to({y:157.8,alpha:0.589},0).wait(1).to({y:155.6,alpha:0.698},0).wait(1).to({y:154.1,alpha:0.775},0).wait(1).to({y:153,alpha:0.831},0).wait(1).to({y:152.1,alpha:0.873},0).wait(1).to({y:151.5,alpha:0.905},0).wait(1).to({y:151,alpha:0.93},0).wait(1).to({y:150.6,alpha:0.95},0).wait(1).to({y:150.3,alpha:0.966},0).wait(1).to({y:150.1,alpha:0.977},0).wait(1).to({y:149.9,alpha:0.986},0).wait(1).to({y:149.7,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:149.6,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:152,alpha:1},0).wait(160));

	// Layer_2
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(171,120,1,1,0,0,0,148,28);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).wait(1).to({regX:84.3,regY:21.4,x:107.3,y:112.2,alpha:0.062},0).wait(1).to({y:110.5,alpha:0.147},0).wait(1).to({y:108,alpha:0.271},0).wait(1).to({y:104.7,alpha:0.435},0).wait(1).to({y:101.6,alpha:0.589},0).wait(1).to({y:99.4,alpha:0.698},0).wait(1).to({y:97.9,alpha:0.775},0).wait(1).to({y:96.8,alpha:0.831},0).wait(1).to({y:95.9,alpha:0.873},0).wait(1).to({y:95.3,alpha:0.905},0).wait(1).to({y:94.8,alpha:0.93},0).wait(1).to({y:94.4,alpha:0.95},0).wait(1).to({y:94.1,alpha:0.966},0).wait(1).to({y:93.9,alpha:0.977},0).wait(1).to({y:93.7,alpha:0.986},0).wait(1).to({y:93.5,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:93.4,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:100,alpha:1},0).wait(162));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(1,1,1,1,0,0,0,-149,-299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: '5D77C6F7EED74AA5B4888F040BF1E3A6',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_im_fresh_atlas_.png", id:"300x600_im_fresh_atlas_"}
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
an.compositions['5D77C6F7EED74AA5B4888F040BF1E3A6'] = {
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