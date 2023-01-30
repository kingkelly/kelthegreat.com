(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_im_fat_atlas_", frames: [[107,0,126,192],[0,0,105,248],[107,194,63,120],[0,250,88,81]]}
];


// symbols:



(lib.tom2_db = function() {
	this.spriteSheet = ss["300x600_im_fat_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tom3_db = function() {
	this.spriteSheet = ss["300x600_im_fat_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tom4_db = function() {
	this.spriteSheet = ss["300x600_im_fat_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tom_db = function() {
	this.spriteSheet = ss["300x600_im_fat_atlas_"];
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


(lib.Symbol1copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AggClIAAkGIhCAAIAAhDIDFAAIAABDIhCAAIAAEGg");
	this.shape.setTransform(158.2,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAhClIgNhCIgnAAIgNBCIhCAAIBClJIBBAAIBCFJgAAGAgIgGggIgGAgIAMAAg");
	this.shape_1.setTransform(134,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABDIiDAAIAABBIBiAAIAABBIhiAAIAACEg");
	this.shape_2.setTransform(109.8,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AgyAaIAAgyIBlAAIAAAyg");
	this.shape_3.setTransform(90.8,38.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAhClIghilIggClIhCAAIhBlJIBBAAIAhCkIAhikIBBAAIAgCkIAiikIBBAAIhBFJg");
	this.shape_4.setTransform(65.2,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgmCdQgSgHgNgNQgOgOgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgIQASgHAUAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVIAACDQAAAVgIASQgIASgNAOQgNANgSAHQgSAIgVAAQgUAAgSgIgAgXhYQgJAJAAAOIAACDQAAAOAJAKQAKAIANABQAOgBAJgIQAKgKAAgOIAAiDQAAgOgKgJQgJgJgOAAQgNAAgKAJg");
	this.shape_5.setTransform(34.4,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AhRClIAAlJIBBAAIAAEHIBiAAIAABCg");
	this.shape_6.setTransform(11.9,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy7, new cjs.Rectangle(0,14,296,51), null);


(lib.Symbol1copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AAhClIgNhCIgnAAIgNBCIhCAAIBClJIBBAAIBCFJgAAGAhIgGghIgGAhIAMAAg");
	this.shape.setTransform(111.6,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgmCdQgSgHgNgOQgOgNgHgSQgIgSAAgVIBCAAQAAAOAJAKQAKAJANAAQAOAAAJgJQAKgKAAgOQAAgOgKgKQgJgJgOAAQgUAAgSgHQgSgIgNgOQgOgMgHgSQgIgRAAgWQAAgVAIgSQAHgSAOgNQANgOASgIQASgHAUAAQAVAAASAHQASAIANAOQANANAIASQAIASAAAVIhCAAQAAgOgKgKQgJgJgOAAQgNAAgKAJQgJAKAAAOQAAAOAJAJQAKAKANgBQAVABASAHQASAIANANQANANAIASQAIASAAAUQAAAWgIASQgIASgNANQgNAOgSAHQgSAIgVAAQgUAAgSgIg");
	this.shape_1.setTransform(78.6,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AAhClIgNhCIgnAAIgNBCIhCAAIBClJIBBAAIBCFJgAAGAhIgGghIgGAhIAMAAg");
	this.shape_2.setTransform(54.4,37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AggClIAAkHIhCAAIAAhCIDFAAIAABCIhCAAIAAEHg");
	this.shape_3.setTransform(24.6,37.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AggClIAAlJIBBAAIAAFJg");
	this.shape_4.setTransform(6.9,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy6, new cjs.Rectangle(0,17,296,51), null);


(lib.Symbol1copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABCIiDAAIAABCIBiAAIAABBIhiAAIAACEg");
	this.shape.setTransform(145.4,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgmCeQgSgIgNgOQgOgNgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgHQASgIAUAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVIAACDQAAAVgIASQgIASgNANQgNAOgSAIQgSAHgVAAQgUAAgSgHgAgXhZQgJAKAAAOIAACDQAAAOAJAJQAKAKANgBQAOABAJgKQAKgJAAgOIAAiDQAAgOgKgKQgJgIgOgBQgNABgKAIg");
	this.shape_1.setTransform(121.2,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AAhClIhBilIBBikIBCAAIhCCkIBCClgAhiClIAAlJIBCAAIAACkIAAClg");
	this.shape_2.setTransform(88.2,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AAhClIhBilIAAClIhCAAIAAlJIBCAAIBBCkIAAikIBCAAIAAFJg");
	this.shape_3.setTransform(64,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AggClIAAlJIBBAAIAAFJg");
	this.shape_4.setTransform(46.3,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AAhClIAAiEIhBAAIAACEIhCAAIAAlJIBCAAIAACEIBBAAIAAiEIBCAAIAAFJg");
	this.shape_5.setTransform(28.7,40.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AggClIAAkHIhCAAIAAhCIDFAAIAABCIhCAAIAAEHg");
	this.shape_6.setTransform(4.5,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy5, new cjs.Rectangle(-9,20,296,51), null);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgZAZIAAgxIAzAAIAAAxg");
	this.shape.setTransform(261.1,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AhRClIAAlJIBBAAIAAEGIBiAAIAABDg");
	this.shape_1.setTransform(246.2,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhRClIAAlJIBBAAIAAEGIBiAAIAABDg");
	this.shape_2.setTransform(225.3,32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AggClIAAlJIBBAAIAAFJg");
	this.shape_3.setTransform(209.3,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AhiClIAAlJIBiAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVQAAATgHARQgGARgLAMQALAOAGAQQAHAQAAAUQAAAVgIASQgIASgNAOQgNANgSAIQgSAHgVAAgAggBiIAgAAQAOAAAJgJQAKgJAAgOQAAgPgKgJQgJgJgOAAIggAAgAggggIAgAAQAOgBAJgIQAKgKAAgOQAAgOgKgKQgJgIgOgBIggAAg");
	this.shape_4.setTransform(191.7,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AggClIAAilIhCikIBCAAIAgBTIAhhTIBCAAIhCCkIAAClg");
	this.shape_5.setTransform(158.7,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AAhClIg0iEIgNAAIAACEIhCAAIAAlJIBiAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVQAAAfgQAYQgPAWgaAMIA5CNgAggggIAgAAQAOgBAJgIQAKgKAAgOQAAgOgKgKQgJgIgOgBIggAAg");
	this.shape_6.setTransform(134.5,32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABCIiDAAIAABCIBiAAIAABBIhiAAIAABBICDAAIAABDg");
	this.shape_7.setTransform(110.3,32.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AgmCeQgSgIgNgNQgOgOgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgHQASgIAUAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVIhCAAQAAgOgKgKQgJgIgOgBQgNABgKAIQgJAKAAAOIAACDQAAAOAJAJQAKAJANAAQAOAAAJgJQAKgJAAgOIBCAAQAAAVgIASQgIASgNAOQgNANgSAIQgSAHgVAAQgUAAgSgHg");
	this.shape_8.setTransform(86.1,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AgmCeQgSgIgNgNQgOgOgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgHQASgIAUAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVIAACDQAAAVgIASQgIASgNAOQgNANgSAIQgSAHgVAAQgUAAgSgHgAgXhZQgJAKAAAOIAACDQAAAOAJAJQAKAJANAAQAOAAAJgJQAKgJAAgOIAAiDQAAgOgKgKQgJgIgOgBQgNABgKAIg");
	this.shape_9.setTransform(61.9,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AAhClIg0iEIgNAAIAACEIhCAAIAAlJIBiAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVQAAAfgQAYQgPAWgaAMIA5CNgAggggIAgAAQAOgBAJgIQAKgKAAgOQAAgOgKgKQgJgIgOgBIggAAg");
	this.shape_10.setTransform(37.7,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#063928").s().p("AgmCeQgSgIgNgNQgOgOgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgHQASgIAUAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVIhCAAQAAgOgKgKQgJgIgOgBQgNABgKAIQgJAKAAAOIAACDQAAAOAJAJQAKAJANAAQAOAAAJgJQAKgJAAgOIAAghIghAAIAAhBIBjAAIAABiQAAAUgIATQgIASgNAOQgNANgSAIQgSAHgVAAQgUAAgSgHg");
	this.shape_11.setTransform(13.5,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(0,12,296,51), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgZAZIAAgxIAzAAIAAAxg");
	this.shape.setTransform(241.3,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AAhClIg0iEIgNAAIAACEIhCAAIAAlJIBiAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVQAAAfgQAYQgPAXgaALIA5CNgAggggIAgAAQAOAAAJgJQAKgKAAgOQAAgOgKgJQgJgJgOAAIggAAg");
	this.shape_1.setTransform(224.8,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABDIiDAAIAABBIBiAAIAABBIhiAAIAABCICDAAIAABCg");
	this.shape_2.setTransform(200.6,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AhiClIAAlJIBiAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVIAACDQAAAVgIASQgIASgNAOQgNANgSAHQgSAIgVAAgAggBjIAgAAQAOgBAJgIQAKgKAAgOIAAiDQAAgOgKgJQgJgJgOAAIggAAg");
	this.shape_3.setTransform(176.4,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AAhClIg0iEIgNAAIAACEIhCAAIAAlJIBiAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVQAAAfgQAYQgPAXgaALIA5CNgAggggIAgAAQAOAAAJgJQAKgKAAgOQAAgOgKgJQgJgJgOAAIggAAg");
	this.shape_4.setTransform(152.2,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgmCdQgSgHgNgNQgOgOgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgIQASgHAUAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVIAACDQAAAVgIASQgIASgNAOQgNANgSAHQgSAIgVAAQgUAAgSgIgAgXhYQgJAJAAAOIAACDQAAAOAJAKQAKAIANABQAOgBAJgIQAKgKAAgOIAAiDQAAgOgKgJQgJgJgOAAQgNAAgKAJg");
	this.shape_5.setTransform(128,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AggClIAAkGIhCAAIAAhDIDFAAIAABDIhCAAIAAEGg");
	this.shape_6.setTransform(95,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#063928").s().p("AgmCdQgSgHgNgNQgOgOgHgSQgIgSAAgVIBCAAQAAAOAJAKQAKAIANABQAOgBAJgIQAKgKAAgOQAAgPgKgJQgJgJgOAAQgUAAgSgIQgSgHgNgOQgOgMgHgSQgIgSAAgVQAAgVAIgSQAHgSAOgOQANgNASgIQASgHAUAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVIhCAAQAAgOgKgJQgJgJgOAAQgNAAgKAJQgJAJAAAOQAAAOAJAKQAKAJANAAQAVgBASAJQASAGANAOQANAMAIATQAIARAAAWQAAAUgIATQgIASgNAOQgNANgSAHQgSAIgVAAQgUAAgSgIg");
	this.shape_7.setTransform(73,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#063928").s().p("AAhClIg0iEIgNAAIAACEIhCAAIAAlJIBiAAQAVAAASAHQASAIANANQANAOAIASQAIASAAAVQAAAfgQAYQgPAXgaALIA5CNgAggggIAgAAQAOAAAJgJQAKgKAAgOQAAgOgKgJQgJgJgOAAIggAAg");
	this.shape_8.setTransform(48.8,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#063928").s().p("AggClIAAlJIBBAAIAAFJg");
	this.shape_9.setTransform(31.1,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABDIiDAAIAABBIBiAAIAABBIhiAAIAACEg");
	this.shape_10.setTransform(13.5,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,14,296,51), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AAhClIg0iEIgNAAIAACEIhCAAIAAlJIBiAAQAVAAASAHQASAIANAOQANANAIASQAIASAAAVQAAAfgQAYQgPAWgaAMIA5CNgAggghIAgAAQAOABAJgKQAKgJAAgOQAAgOgKgKQgJgJgOAAIggAAg");
	this.shape.setTransform(165.3,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgmCdQgSgHgNgOQgOgNgHgSQgIgSAAgVIAAjmIBCAAIAADmQAAAOAJAKQAKAJANAAQAOAAAJgJQAKgKAAgOIAAjmIBCAAIAADmQAAAVgIASQgIASgNANQgNAOgSAHQgSAIgVAAQgUAAgSgIg");
	this.shape_1.setTransform(141.1,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AgmCdQgSgHgNgOQgOgNgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgNQANgOASgIQASgHAUAAQAVAAASAHQASAIANAOQANANAIASQAIASAAAVIAACDQAAAVgIASQgIASgNANQgNAOgSAHQgSAIgVAAQgUAAgSgIgAgXhZQgJAKAAAOIAACDQAAAOAJAKQAKAJANAAQAOAAAJgJQAKgKAAgOIAAiDQAAgOgKgKQgJgJgOAAQgNAAgKAJg");
	this.shape_2.setTransform(116.9,37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AggClIAAilIhCikIBCAAIAgBTIAhhTIBCAAIhCCkIAAClg");
	this.shape_3.setTransform(94.9,37.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABCIiDAAIAABBIBiAAIAABCIhiAAIAACEg");
	this.shape_4.setTransform(61.9,37.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABCIiDAAIAABBIBiAAIAABCIhiAAIAACEg");
	this.shape_5.setTransform(37.7,37.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#063928").s().p("AgmCdQgSgHgNgOQgOgNgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgNQANgOASgIQASgHAUAAQAVAAASAHQASAIANAOQANANAIASQAIASAAAVIAACDQAAAVgIASQgIASgNANQgNAOgSAHQgSAIgVAAQgUAAgSgIgAgXhZQgJAKAAAOIAACDQAAAOAJAKQAKAJANAAQAOAAAJgJQAKgKAAgOIAAiDQAAgOgKgKQgJgJgOAAQgNAAgKAJg");
	this.shape_6.setTransform(13.5,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,17,296,51), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#063928").s().p("AgmCeQgSgIgNgOQgOgNgHgSQgIgSAAgVIBCAAQAAAOAJAJQAKAKANgBQAOABAJgKQAKgJAAgOQAAgPgKgJQgJgJgOAAIhiAAIAAjFIDFAAIAABCIiDAAIAABCIAgAAQAVAAASAHQASAIANANQANANAIARQAIATAAAVQAAAUgIATQgIASgNANQgNAOgSAIQgSAHgVAAQgUAAgSgHg");
	this.shape.setTransform(133.5,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#063928").s().p("AgPClIAAkHIghAAIAAhCIBhAAIAAFJg");
	this.shape_1.setTransform(114.2,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#063928").s().p("AggDnIAAhIQgegJgSgZQgSgaAAghIBCAAQAAAOAJAJQAKAJANAAQAOAAAJgJQAKgJAAgOQAAgPgKgJQgJgJgOAAQgUAAgSgIQgSgHgNgOQgOgMgHgSQgIgSAAgVQAAgQAFgQQAFgOAIgNQAJgMAMgJQAMgJAPgFIAAhHIBBAAIAABHQAdAKATAZQASAZAAAiIhCAAQAAgOgKgKQgJgJgOAAQgNAAgKAJQgJAKAAAOQAAAOAJAJQAKAJANAAQAVAAASAIQASAHANAOQANAMAIASQAIASAAAVQAAAigSAZQgTAagdAJIAABIg");
	this.shape_2.setTransform(94.9,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#063928").s().p("AggClIAAkHIhCAAIAAhCIDFAAIAABCIhCAAIAAEHg");
	this.shape_3.setTransform(61.9,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#063928").s().p("AhiClIAAlJIDFAAIAABCIiDAAIAABCIBiAAIAABBIhiAAIAABBICDAAIAABDg");
	this.shape_4.setTransform(37.7,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#063928").s().p("AgmCeQgSgIgNgOQgOgNgHgSQgIgSAAgVIAAiDQAAgVAIgSQAHgSAOgOQANgNASgHQASgIAUAAQAVAAASAIQASAHANANQANAOAIASQAIASAAAVIhCAAQAAgOgKgKQgJgIgOgBQgNABgKAIQgJAKAAAOIAACDQAAAOAJAJQAKAKANgBQAOABAJgKQAKgJAAgOIAAghIghAAIAAhBIBjAAIAABiQAAAUgIATQgIASgNANQgNAOgSAIQgSAHgVAAQgUAAgSgHg");
	this.shape_5.setTransform(13.5,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,20,296,51), null);


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
(lib._300x600_im_fat = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// cta
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(149.6,515.8,1,1,0,0,0,50.4,14.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({_off:false},0).to({alpha:1},17,cjs.Ease.get(-0.93)).wait(47).to({regY:14.3,scaleX:1,scaleY:1,y:515.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:515.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:515.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:515.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:515.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:515.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:515.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:515.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:515.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:515.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:515.8},0).wait(51).to({regY:14.3,scaleX:1,scaleY:1,y:515.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:515.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:515.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:515.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:515.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({regY:14.2,scaleX:1.2,scaleY:1.2,y:515.3},0).wait(1).to({regY:14.3,scaleX:1.19,scaleY:1.19,x:149.5,y:515.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:515.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:515.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:515.9},0).wait(1).to({regY:14.2,scaleX:1,scaleY:1,x:149.6,y:515.8},0).wait(9));

	// Layer 7
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(349.5,641,1,1,0,0,0,31.5,60);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({x:345.5,y:636},0).wait(1).to({x:340.1,y:629.2},0).wait(1).to({x:332.2,y:619.4},0).wait(1).to({x:320.5,y:604.7},0).wait(1).to({x:307.2,y:588.1},0).wait(1).to({x:297.4,y:575.9},0).wait(1).to({x:290.9,y:567.8},0).wait(1).to({x:286.2,y:561.9},0).wait(1).to({x:282.7,y:557.5},0).wait(1).to({x:280,y:554.1},0).wait(1).to({x:277.8,y:551.4},0).wait(1).to({x:276,y:549.2},0).wait(1).to({x:274.6,y:547.4},0).wait(1).to({x:273.4,y:545.9},0).wait(1).to({x:272.4,y:544.7},0).wait(1).to({x:271.6,y:543.7},0).wait(1).to({x:271,y:542.9},0).wait(1).to({x:270.5,y:542.3},0).wait(1).to({x:270.1,y:541.8},0).wait(1).to({x:269.8,y:541.4},0).wait(1).to({x:269.6,y:541.2},0).wait(1).to({x:269.5,y:541},0).wait(258));

	// Layer 6
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.5,596,1,1,0,0,0,52.5,124);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({x:-42.4,y:590},0).wait(1).to({x:-35.7,y:581.8},0).wait(1).to({x:-25.8,y:570},0).wait(1).to({x:-11.2,y:552.5},0).wait(1).to({x:5.5,y:532.5},0).wait(1).to({x:17.6,y:517.9},0).wait(1).to({x:25.8,y:508.1},0).wait(1).to({x:31.6,y:501.1},0).wait(1).to({x:36,y:495.9},0).wait(1).to({x:39.4,y:491.7},0).wait(1).to({x:42.2,y:488.5},0).wait(1).to({x:44.4,y:485.8},0).wait(1).to({x:46.2,y:483.6},0).wait(1).to({x:47.7,y:481.9},0).wait(1).to({x:48.9,y:480.4},0).wait(1).to({x:49.9,y:479.2},0).wait(1).to({x:50.7,y:478.3},0).wait(1).to({x:51.3,y:477.5},0).wait(1).to({x:51.8,y:476.9},0).wait(1).to({x:52.1,y:476.5},0).wait(1).to({x:52.4,y:476.2},0).wait(1).to({x:52.5,y:476.1},0).wait(1).to({y:476},0).wait(258));

	// Layer 5
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(318,-4,1,1,0,0,0,63,96);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({x:314,y:1.1},0).wait(1).to({x:308.6,y:7.8},0).wait(1).to({x:300.7,y:17.7},0).wait(1).to({x:289,y:32.3},0).wait(1).to({x:275.7,y:49},0).wait(1).to({x:265.9,y:61.1},0).wait(1).to({x:259.4,y:69.3},0).wait(1).to({x:254.7,y:75.1},0).wait(1).to({x:251.2,y:79.5},0).wait(1).to({x:248.5,y:82.9},0).wait(1).to({x:246.3,y:85.7},0).wait(1).to({x:244.5,y:87.9},0).wait(1).to({x:243.1,y:89.7},0).wait(1).to({x:241.9,y:91.2},0).wait(1).to({x:240.9,y:92.4},0).wait(1).to({x:240.1,y:93.4},0).wait(1).to({x:239.5,y:94.2},0).wait(1).to({x:239,y:94.8},0).wait(1).to({x:238.6,y:95.3},0).wait(1).to({x:238.3,y:95.6},0).wait(1).to({x:238.1,y:95.9},0).wait(1).to({x:238,y:96},0).wait(260));

	// Layer 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-37,-40.5,1,1,0,0,0,44,40.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({x:-32.9,y:-36.4},0).wait(1).to({x:-27.5,y:-31},0).wait(1).to({x:-19.6,y:-23.1},0).wait(1).to({x:-7.9,y:-11.4},0).wait(1).to({x:5.4,y:1.9},0).wait(1).to({x:15.1,y:11.6},0).wait(1).to({x:21.6,y:18.1},0).wait(1).to({x:26.3,y:22.8},0).wait(1).to({x:29.8,y:26.3},0).wait(1).to({x:32.6,y:29.1},0).wait(1).to({x:34.7,y:31.2},0).wait(1).to({x:36.5,y:33},0).wait(1).to({x:38,y:34.5},0).wait(1).to({x:39.1,y:35.6},0).wait(1).to({x:40.1,y:36.6},0).wait(1).to({x:40.9,y:37.4},0).wait(1).to({x:41.5,y:38},0).wait(1).to({x:42,y:38.5},0).wait(1).to({x:42.4,y:38.9},0).wait(1).to({x:42.7,y:39.2},0).wait(1).to({x:42.9,y:39.4},0).wait(1).to({x:43,y:39.5},0).wait(261));

	// logo
	this.instance_5 = new lib.logo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.7,424.3,1,1,0,0,0,110.5,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(295));

	// Layer_5
	this.instance_6 = new lib.Symbol1copy3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(165,276,1,1,0,0,0,148,28);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({_off:false},0).wait(1).to({regX:133.6,regY:32.8,x:150.6,y:279.6,alpha:0.062},0).wait(1).to({y:277.9,alpha:0.147},0).wait(1).to({y:275.4,alpha:0.271},0).wait(1).to({y:272.1,alpha:0.435},0).wait(1).to({y:269,alpha:0.589},0).wait(1).to({y:266.8,alpha:0.698},0).wait(1).to({y:265.3,alpha:0.775},0).wait(1).to({y:264.2,alpha:0.831},0).wait(1).to({y:263.3,alpha:0.873},0).wait(1).to({y:262.7,alpha:0.905},0).wait(1).to({y:262.2,alpha:0.93},0).wait(1).to({y:261.8,alpha:0.95},0).wait(1).to({y:261.5,alpha:0.966},0).wait(1).to({y:261.3,alpha:0.977},0).wait(1).to({y:261.1,alpha:0.986},0).wait(1).to({y:260.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:260.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:165,y:256,alpha:1},0).wait(27).to({alpha:0},8).wait(168));

	// Layer_4 copy
	this.instance_7 = new lib.Symbol1copy7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(165,224,1,1,0,0,0,148,28);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).wait(1).to({regX:85.9,regY:34.8,x:103,y:229.6,alpha:0.062},0).wait(1).to({y:227.9,alpha:0.147},0).wait(1).to({x:103.2,y:225.4,alpha:0.271},0).wait(1).to({x:103.3,y:222.1,alpha:0.435},0).wait(1).to({x:103.5,y:219,alpha:0.589},0).wait(1).to({x:103.6,y:216.8,alpha:0.698},0).wait(1).to({x:103.7,y:215.3,alpha:0.775},0).wait(1).to({y:214.2,alpha:0.831},0).wait(1).to({x:103.8,y:213.3,alpha:0.873},0).wait(1).to({y:212.7,alpha:0.905},0).wait(1).to({y:212.2,alpha:0.93},0).wait(1).to({x:103.9,y:211.8,alpha:0.95},0).wait(1).to({y:211.5,alpha:0.966},0).wait(1).to({y:211.3,alpha:0.977},0).wait(1).to({y:211.1,alpha:0.986},0).wait(1).to({y:210.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:210.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:166,y:204,alpha:1},0).wait(30).to({alpha:0},8).wait(168));

	// Layer_3 copy
	this.instance_8 = new lib.Symbol1copy6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(165,172,1,1,0,0,0,148,28);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(68).to({_off:false},0).wait(1).to({regX:62.6,regY:37.8,x:79.6,y:180.6,alpha:0.062},0).wait(1).to({y:178.9,alpha:0.147},0).wait(1).to({y:176.4,alpha:0.271},0).wait(1).to({y:173.1,alpha:0.435},0).wait(1).to({y:170,alpha:0.589},0).wait(1).to({y:167.8,alpha:0.698},0).wait(1).to({y:166.3,alpha:0.775},0).wait(1).to({y:165.2,alpha:0.831},0).wait(1).to({y:164.3,alpha:0.873},0).wait(1).to({y:163.7,alpha:0.905},0).wait(1).to({y:163.2,alpha:0.93},0).wait(1).to({y:162.8,alpha:0.95},0).wait(1).to({y:162.5,alpha:0.966},0).wait(1).to({y:162.3,alpha:0.977},0).wait(1).to({y:162.1,alpha:0.986},0).wait(1).to({y:161.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:161.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:165,y:152,alpha:1},0).wait(32).to({alpha:0},8).wait(168));

	// Layer_2 copy
	this.instance_9 = new lib.Symbol1copy5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(171,120,1,1,0,0,0,148,28);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(66).to({_off:false},0).wait(1).to({regX:75,regY:40.8,x:98,y:131.6,alpha:0.062},0).wait(1).to({y:129.9,alpha:0.147},0).wait(1).to({y:127.4,alpha:0.271},0).wait(1).to({y:124.1,alpha:0.435},0).wait(1).to({y:121,alpha:0.589},0).wait(1).to({y:118.8,alpha:0.698},0).wait(1).to({y:117.3,alpha:0.775},0).wait(1).to({y:116.2,alpha:0.831},0).wait(1).to({y:115.3,alpha:0.873},0).wait(1).to({y:114.7,alpha:0.905},0).wait(1).to({y:114.2,alpha:0.93},0).wait(1).to({y:113.8,alpha:0.95},0).wait(1).to({y:113.5,alpha:0.966},0).wait(1).to({y:113.3,alpha:0.977},0).wait(1).to({y:113.1,alpha:0.986},0).wait(1).to({y:112.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:112.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:100,alpha:1},0).wait(34).to({alpha:0},8).wait(168));

	// Layer_4 copy 2
	this.instance_10 = new lib.Symbol1copy2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(171,224,1,1,0,0,0,148,28);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(134).to({_off:false},0).wait(1).to({regX:123.7,regY:34.8,x:146.7,y:229.6,alpha:0.062},0).wait(1).to({y:227.9,alpha:0.147},0).wait(1).to({y:225.4,alpha:0.271},0).wait(1).to({y:222.1,alpha:0.435},0).wait(1).to({y:219,alpha:0.589},0).wait(1).to({y:216.8,alpha:0.698},0).wait(1).to({y:215.3,alpha:0.775},0).wait(1).to({y:214.2,alpha:0.831},0).wait(1).to({y:213.3,alpha:0.873},0).wait(1).to({y:212.7,alpha:0.905},0).wait(1).to({y:212.2,alpha:0.93},0).wait(1).to({y:211.8,alpha:0.95},0).wait(1).to({y:211.5,alpha:0.966},0).wait(1).to({y:211.3,alpha:0.977},0).wait(1).to({y:211.1,alpha:0.986},0).wait(1).to({y:210.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:210.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:204,alpha:1},0).wait(142));

	// Layer_3 copy 2
	this.instance_11 = new lib.Symbol1copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(171,172,1,1,0,0,0,148,28);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(132).to({_off:false},0).wait(1).to({regX:89.4,regY:37.8,x:112.4,y:180.6,alpha:0.062},0).wait(1).to({y:178.9,alpha:0.147},0).wait(1).to({y:176.4,alpha:0.271},0).wait(1).to({y:173.1,alpha:0.435},0).wait(1).to({y:170,alpha:0.589},0).wait(1).to({y:167.8,alpha:0.698},0).wait(1).to({y:166.3,alpha:0.775},0).wait(1).to({y:165.2,alpha:0.831},0).wait(1).to({y:164.3,alpha:0.873},0).wait(1).to({y:163.7,alpha:0.905},0).wait(1).to({y:163.2,alpha:0.93},0).wait(1).to({y:162.8,alpha:0.95},0).wait(1).to({y:162.5,alpha:0.966},0).wait(1).to({y:162.3,alpha:0.977},0).wait(1).to({y:162.1,alpha:0.986},0).wait(1).to({y:161.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:161.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:152,alpha:1},0).wait(144));

	// Layer_2 copy 2
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(171,120,1,1,0,0,0,148,28);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).wait(1).to({regX:73.5,regY:40.8,x:96.5,y:131.6,alpha:0.062},0).wait(1).to({y:129.9,alpha:0.147},0).wait(1).to({y:127.4,alpha:0.271},0).wait(1).to({y:124.1,alpha:0.435},0).wait(1).to({y:121,alpha:0.589},0).wait(1).to({y:118.8,alpha:0.698},0).wait(1).to({y:117.3,alpha:0.775},0).wait(1).to({y:116.2,alpha:0.831},0).wait(1).to({y:115.3,alpha:0.873},0).wait(1).to({y:114.7,alpha:0.905},0).wait(1).to({y:114.2,alpha:0.93},0).wait(1).to({y:113.8,alpha:0.95},0).wait(1).to({y:113.5,alpha:0.966},0).wait(1).to({y:113.3,alpha:0.977},0).wait(1).to({y:113.1,alpha:0.986},0).wait(1).to({y:112.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:112.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:100,alpha:1},0).wait(146));

	// Layer_4
	this.instance_13 = new lib.Symbol1copy2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(171,224,1,1,0,0,0,148,28);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).wait(1).to({regX:123.7,regY:34.8,x:146.7,y:229.6,alpha:0.062},0).wait(1).to({y:227.9,alpha:0.147},0).wait(1).to({y:225.4,alpha:0.271},0).wait(1).to({y:222.1,alpha:0.435},0).wait(1).to({y:219,alpha:0.589},0).wait(1).to({y:216.8,alpha:0.698},0).wait(1).to({y:215.3,alpha:0.775},0).wait(1).to({y:214.2,alpha:0.831},0).wait(1).to({y:213.3,alpha:0.873},0).wait(1).to({y:212.7,alpha:0.905},0).wait(1).to({y:212.2,alpha:0.93},0).wait(1).to({y:211.8,alpha:0.95},0).wait(1).to({y:211.5,alpha:0.966},0).wait(1).to({y:211.3,alpha:0.977},0).wait(1).to({y:211.1,alpha:0.986},0).wait(1).to({y:210.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:210.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:204,alpha:1},0).wait(30).to({alpha:0},9).wait(229));

	// Layer_3
	this.instance_14 = new lib.Symbol1copy();
	this.instance_14.parent = this;
	this.instance_14.setTransform(171,172,1,1,0,0,0,148,28);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).wait(1).to({regX:89.4,regY:37.8,x:112.4,y:180.6,alpha:0.062},0).wait(1).to({y:178.9,alpha:0.147},0).wait(1).to({y:176.4,alpha:0.271},0).wait(1).to({y:173.1,alpha:0.435},0).wait(1).to({y:170,alpha:0.589},0).wait(1).to({y:167.8,alpha:0.698},0).wait(1).to({y:166.3,alpha:0.775},0).wait(1).to({y:165.2,alpha:0.831},0).wait(1).to({y:164.3,alpha:0.873},0).wait(1).to({y:163.7,alpha:0.905},0).wait(1).to({y:163.2,alpha:0.93},0).wait(1).to({y:162.8,alpha:0.95},0).wait(1).to({y:162.5,alpha:0.966},0).wait(1).to({y:162.3,alpha:0.977},0).wait(1).to({y:162.1,alpha:0.986},0).wait(1).to({y:161.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:161.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:152,alpha:1},0).wait(32).to({alpha:0},9).wait(229));

	// Layer_2
	this.instance_15 = new lib.Symbol1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(171,120,1,1,0,0,0,148,28);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).wait(1).to({regX:73.5,regY:40.8,x:96.5,y:131.6,alpha:0.062},0).wait(1).to({y:129.9,alpha:0.147},0).wait(1).to({y:127.4,alpha:0.271},0).wait(1).to({y:124.1,alpha:0.435},0).wait(1).to({y:121,alpha:0.589},0).wait(1).to({y:118.8,alpha:0.698},0).wait(1).to({y:117.3,alpha:0.775},0).wait(1).to({y:116.2,alpha:0.831},0).wait(1).to({y:115.3,alpha:0.873},0).wait(1).to({y:114.7,alpha:0.905},0).wait(1).to({y:114.2,alpha:0.93},0).wait(1).to({y:113.8,alpha:0.95},0).wait(1).to({y:113.5,alpha:0.966},0).wait(1).to({y:113.3,alpha:0.977},0).wait(1).to({y:113.1,alpha:0.986},0).wait(1).to({y:112.9,alpha:0.993},0).wait(1).to({alpha:0.997},0).wait(1).to({y:112.8,alpha:0.999},0).wait(1).to({regX:148,regY:28,x:171,y:100,alpha:1},0).wait(34).to({alpha:0},9).wait(229));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#22B675").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(1,1,1,1,0,0,0,-149,-299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(295));

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
		{src:"images/300x600_im_fat_atlas_.png", id:"300x600_im_fat_atlas_"}
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