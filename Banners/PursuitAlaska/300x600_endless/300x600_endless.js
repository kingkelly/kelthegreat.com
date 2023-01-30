(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_endless_atlas_", frames: [[302,0,300,600],[0,0,300,600]]}
];


// symbols:



(lib.glacier_path2 = function() {
	this.spriteSheet = ss["300x600_endless_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.walkers = function() {
	this.spriteSheet = ss["300x600_endless_atlas_"];
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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0VZaQgwhdAAAFMABfgyzUAosAAeAAAAAKMgCVAzcUAAAAAKgmXABVIAAAAQgDAAgshYg");
	mask.setTransform(152.5,169.1);

	// Layer_2
	this.instance = new lib.glacier_path2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(17.6,0,270,340.6), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAxIgWg/IgVA/IgTAAIghhhIAXAAIAUBCIAWhDIARAAIAXBDIAUhCIAWAAIghBhg");
	this.shape.setTransform(136.9,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgUIAAgBQAAgUAPgPQAPgPAVAAQAXAAAPAPQAOAOAAAVIAAAAQAAAVgOAPQgPAOgXAAQgVAAgPgOgAgVgVQgHAJgBAMIAAAAQAAANAJAIQAJAKALAAQANAAAIgJQAJgJAAgMIAAgBQgBgMgIgJQgJgJgMAAQgMAAgJAJg");
	this.shape_1.setTransform(123.1,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAxIgvg+IAAA+IgUAAIAAhhIATAAIAtA7IAAg7IAVAAIAABhg");
	this.shape_2.setTransform(111.6,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAxIgegpIgLALIAAAeIgVAAIAAhhIAVAAIAAArIAmgrIAaAAIgnApIAqA4g");
	this.shape_3.setTransform(97.3,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgUIAAgBQAAgUAPgPQAPgPAVAAQAXAAAPAPQAOAOAAAVIAAAAQAAAVgOAPQgPAOgXAAQgVAAgPgOgAgVgVQgHAJgBAMIAAAAQAAANAJAIQAJAKALAAQANAAAIgJQAJgJAAgMIAAgBQgBgMgIgJQgJgJgMAAQgMAAgJAJg");
	this.shape_4.setTransform(85.7,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglAkQgOgPAAgUIAAgBQAAgUAOgPQAQgPAVAAQAXAAAPAPQAOAOAAAVIAAAAQAAAVgOAPQgPAOgXAAQgWAAgPgOgAgVgVQgHAJgBAMIAAAAQAAANAJAIQAIAKAMAAQANAAAJgJQAHgJABgMIAAgBQAAgMgJgJQgIgJgNAAQgMAAgJAJg");
	this.shape_5.setTransform(73.8,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAxIAAhhIAsAAQAQAAAKAIQAGAHAAAKQAAAOgNAIQASAGAAARQABANgLAIQgJAGgRAAgAgUAeIAZAAQAPAAAAgKIAAgBQAAgKgQAAIgYAAgAgUgIIAUAAQAOAAAAgLQABgKgOAAIgVAAg");
	this.shape_6.setTransform(63.1,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D41B44").s().p("AqYC2IAAlrIUxAAIAAFrg");
	this.shape_7.setTransform(101,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(34.6,5.2,133,36.4), null);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D21B43").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(180,162.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D21B43").s().p("AAZBHIAAhMQAAgdgYAAQgYAAAAAdIAABMIgoAAIAAiKIAoAAIAAAUQARgXAXAAQAWAAANAOQAMANAAAYIAABag");
	this.shape_1.setTransform(168.3,157.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D21B43").s().p("AAbBHIgbhVIgaBVIgkAAIgriMIApAAIAWBUIAahVIAhAAIAbBVIAXhUIAnAAIgsCMg");
	this.shape_2.setTransform(148.9,157.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D21B43").s().p("Ag1A0QgVgVAAgeIAAgBQAAgeAVgUQAWgWAfABQAgAAAWAUQAVAWAAAdIAAAAQAAAfgVAVQgWAUggAAQgfAAgWgUgAgagaQgJALAAAPIAAAAQAAAQAKALQAKALAPAAQARAAAKgLQAKgKAAgQIAAgBQAAgPgLgLQgKgLgQAAQgQAAgKALg");
	this.shape_3.setTransform(129.1,157.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D21B43").s().p("Ag1BOQgTgUAAgiIAAAAQAAghATgUQASgSAaAAQAZAAASAVIAAhFIAnAAIAAC9IgnAAIAAgUQgRAWgaAAQgaAAgSgSgAgXgDQgKAKAAARIAAAAQAAARAKALQAKALANAAQAOAAAKgLQAKgLAAgRIAAAAQAAgRgKgKQgKgLgOAAQgNAAgKALg");
	this.shape_4.setTransform(111.4,155);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D21B43").s().p("Ag6BDQgWgbAAgoIAAAAQAAgnAXgbQAXgbAiAAQAkAAAXAbQAWAaAAAoIAAAAQAAAogWAbQgXAbgkAAQgjAAgXgbgAgcgpQgLAQAAAZIAAAAQAAAZALARQALAQARAAQASAAALgQQALgRAAgZIAAAAQAAgYgLgRQgLgQgSAAQgRAAgLAQg");
	this.shape_5.setTransform(85.7,155.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D21B43").s().p("Ag6BDQgWgbAAgoIAAAAQAAgnAXgbQAXgbAiAAQAkAAAXAbQAWAaAAAoIAAAAQAAAogWAbQgXAbgkAAQgjAAgXgbgAgcgpQgLAQAAAZIAAAAQAAAZALARQALAQARAAQASAAALgQQALgRAAgZIAAAAQAAgYgLgRQgLgQgSAAQgRAAgLAQg");
	this.shape_6.setTransform(66.7,155.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D21B43").s().p("AhEBCIAZgdQAVATAWAAQANAAAIgHQAIgGAAgMIAAgBQAAgLgJgHQgIgGgOAAQgOAAgQAGIgXgOIAFhaIBvAAIAAAjIhNAAIgCAgQANgDAKAAQAcAAARANQATAPAAAdIAAAAQAAAegTAQQgTARgfAAQgnABgdgbg");
	this.shape_7.setTransform(48.9,155.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D21B43").s().p("AgKBvIAAgaQgigEgbgVIAUgdQAXARAUAEIAAgqQgdgIgNgKQgOgNAAgXIAAAAQAAgVAPgOQAPgOAYgCIAAgPIAbAAIAAAQQAZADAXAQIgRAeQgRgLgQgEIAAAnQAeAIANANQAOAMAAAWIAAAAQAAAWgQAOQgOANgZACIAAAagAAPA1QATgDAAgOIAAAAQAAgNgTgGgAgagvIAAABQAAAMASAHIAAgkQgSACAAAOg");
	this.shape_8.setTransform(32.5,155.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D21B43").s().p("Ag9BRIAHgPQAJAFAMAAQAJAAAGgGQAGgGAGgOIg9iEIAWAAIAwBuIArhuIAWAAIg5CJQgIAVgKAJQgKAIgQAAQgOABgOgIg");
	this.shape_9.setTransform(155.4,126.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D21B43").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_10.setTransform(144.3,121.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D21B43").s().p("AAnBEIAAhNQAAgTgKgLQgKgLgSABQgQAAgLALQgMAMAAASIAABMIgUAAIAAiFIAUAAIAAAYQAQgaAdAAQAYAAAOAOQAOAOAAAZIAABSg");
	this.shape_11.setTransform(133,124.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D21B43").s().p("AgxAyQgUgVAAgdIAAAAQAAgcAUgUQAUgVAeAAQAdAAAUAVQAUATAAAdIAAAAQAAAdgUAUQgUAVgeAAQgdAAgUgUgAgjgkQgOAPAAAVIAAAAQAAAWAPAPQAOAPAVAAQAVAAAOgPQANgPABgWIAAAAQgBgVgOgPQgOgQgVAAQgUAAgPAQg");
	this.shape_12.setTransform(116.6,124.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D21B43").s().p("AAnBfIAAhOQAAgTgKgKQgKgLgSAAQgQAAgLAMQgMALAAASIAABNIgUAAIAAi9IAUAAIAABPQAQgaAdAAQAYAAAOAPQAOAOAAAXIAABUg");
	this.shape_13.setTransform(92.5,121.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D21B43").s().p("AgVAzIAAhRIgTAAIAAgRIATAAIAAgpIAUAAIAAApIAqAAIAAARIgqAAIAABOQAAAWAWAAQAKAAAJgEIAAARQgLAGgNAAQglAAAAgmg");
	this.shape_14.setTransform(79,122.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D21B43").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_15.setTransform(70.5,122.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D21B43").s().p("AAkBEIgkhpIgjBpIgSAAIgviGIAVAAIAkBrIAkhsIAQAAIAkBsIAjhrIAVAAIgvCGg");
	this.shape_16.setTransform(55.9,124.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9copy, new cjs.Rectangle(22.1,108.6,163.7,63), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AhSBKIAbggQAfAZAfAAQAeAAAAgUIAAAAQAAgJgIgFQgJgHgYgGQglgJgOgLQgTgOAAgdIAAAAQAAgdAVgRQAVgSAfAAQAtAAAgAbIgYAjQgdgWgYAAQgNAAgHAGQgHAFAAAIIAAABQAAAKAJAFQAJAFAaAIQAjAIAPAMQARAPAAAbIAAAAQAAAegWASQgVARgiAAQgyAAgmgig");
	this.shape.setTransform(159,84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgWBpIAAinIhAAAIAAgqICtAAIAAAqIhAAAIAACng");
	this.shape_1.setTransform(139.9,84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_2.setTransform(125.1,84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBbDTgAAbASIgbhDIgcBDIA3AAg");
	this.shape_3.setTransform(108.3,84);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AAvBqIgviJIguCJIgpAAIhHjSIAxAAIAsCNIAviOIAmAAIAwCOIAriNIAwAAIhHDSg");
	this.shape_4.setTransform(79.6,84.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBaDTgAAbASIgbhDIgbBDIA2AAg");
	this.shape_5.setTransform(50.9,84);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBbDTgAAbASIgbhDIgcBDIA3AAg");
	this.shape_6.setTransform(157.4,47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AAoBpIhAhZIgYAZIAABAIgvAAIAAjRIAvAAIAABcIBUhcIA4AAIhWBZIBaB4g");
	this.shape_7.setTransform(135.7,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AhSBKIAbghQAfAaAfAAQAeAAAAgUIAAAAQAAgJgIgGQgIgGgZgGQgkgJgPgLQgTgOAAgdIAAAAQAAgdAVgRQAVgSAfAAQAtAAAhAbIgZAjQgdgWgYAAQgNAAgHAGQgHAFAAAIIAAAAQAAALAJAFQAIAFAbAIQAjAIAPANQARAOAAAbIAAAAQAAAegWASQgVARgiAAQgyAAgmgig");
	this.shape_8.setTransform(113.9,47.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgwAAIBbjTIApAAIBbDTgAAbASIgbhDIgcBDIA3AAg");
	this.shape_9.setTransform(92.6,47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AhKBpIAAjRIAuAAIAACnIBoAAIAAAqg");
	this.shape_10.setTransform(72.3,47.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AA/BqIgTgvIhYAAIgTAvIgvAAIBajTIApAAIBaDTgAAbASIgbhDIgbBDIA2AAg");
	this.shape_11.setTransform(50.4,47);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AAlBpIgshDIgkAAIAABDIgvAAIAAjRIBfAAQAoAAAWAVQASATAAAeIAAAAQAAAvgtARIAzBLgAgrgCIAtAAQARAAAKgIQAJgIAAgOIAAgBQAAgdgkAAIgtAAg");
	this.shape_12.setTransform(139.4,10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AhDBTQgYgYAAguIAAh3IAuAAIAAB2QAAAZANAOQALANAVAAQAWAAALgNQAMgNAAgYIAAh4IAvAAIAAB2QAAAugZAZQgYAYgrAAQgrAAgYgYg");
	this.shape_13.setTransform(116.6,10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AhPBNQgggfAAgtIAAgBQAAgsAgggQAhgfAuAAQAxgBAfAgQAfAfAAAtIAAAAQAAAugfAeQggAhgwAAQgvgBgggfgAgtguQgRATAAAbIAAAAQgBAbATAUQASATAaAAQAcAAASgTQASgTAAgbIAAgBQgBgbgRgSQgTgUgbAAQgbAAgSATg");
	this.shape_14.setTransform(92.5,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgWBpIAAhTIhRh+IA2AAIAxBUIAzhUIA1AAIhRB9IAABUg");
	this.shape_15.setTransform(69,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(36.5,-5.4,134.9,108), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.walkers();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(133.8,90.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgzAyIALgPQAWARAXAAQAMAAAIgFQAIgGAAgJIAAgBQAAgKgKgFQgHgEgQgFQgVgGgJgEQgOgLAAgQIAAAAQAAgSANgKQANgLATAAQAaAAAWAPIgJAPQgUgNgUAAQgLAAgHAGQgHAFAAAIIAAABQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAAAQAAATgOALQgNALgVAAQgeAAgZgUg");
	this.shape_1.setTransform(124,85.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgqAzQgUgUAAgfIAAAAQAAgcASgVQATgUAaAAQAdAAARAVQAQATABAdIAAAHIhqAAQACAVAOANQAMALASAAQAZAAASgSIAMALQgWAZgiAAQgbAAgSgTgAAsgHQgCgTgLgMQgMgOgSgBQgRABgMANQgMANgCATIBWAAIAAAAg");
	this.shape_2.setTransform(110.1,85.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_3.setTransform(99,82.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgkBEIAAiFIAUAAIAAAjQAHgSANgKQAPgKASABIAAAVIgBAAQgXAAgOAQQgPAQAAAdIAAA1g");
	this.shape_4.setTransform(91,85.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgqA7QgQgMAAgTIAAgBQAAgVAQgLQAPgLAaABQAVgBAUAHIAAgGQAAgkgoAAQgTAAgVAKIgGgRQAZgLAXAAQAcAAAPAPQAOAOAAAZIAABRIgTAAIAAgUQgSAXgeAAQgUABgOgLgAgcAGQgKAHAAAOIAAAAQAAAMAKAIQAKAGAOABQASgBANgJQANgLAAgQIAAgNQgUgFgUABQgRgBgLAHg");
	this.shape_5.setTransform(77.1,85.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgkBEIAAiFIAUAAIAAAjQAHgSANgKQAPgKASABIAAAVIgBAAQgXAAgOAQQgPAQAAAdIAAA1g");
	this.shape_6.setTransform(65.5,85.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AgrAzQgTgUgBgfIAAAAQAAgcATgVQATgUAaAAQAdAAARAVQARATgBAdIAAAHIhpAAQACAVANANQAOALARAAQAZAAARgSIANALQgWAZghAAQgcAAgTgTgAAsgHQgCgTgLgMQgLgOgUgBQgQABgMANQgMANgCATIBWAAIAAAAg");
	this.shape_7.setTransform(51.9,85.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AAnBEIAAhNQAAgTgKgLQgKgLgSABQgQAAgLALQgMAMAAATIAABLIgUAAIAAiFIAUAAIAAAYQAQgaAdAAQAYAAAOAOQAOAPAAAYIAABSg");
	this.shape_8.setTransform(36.3,85.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_9.setTransform(24.8,82.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AgVAzIAAhRIgTAAIAAgRIATAAIAAgpIAUAAIAAApIAqAAIAAARIgqAAIAABOQAAAWAWAAQAKAAAJgEIAAARQgLAGgNAAQglAAAAgmg");
	this.shape_10.setTransform(16,83.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_11.setTransform(7.5,82.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AgvBOQgUgTAAggIAAgBQAAgeAUgVQATgRAagBQAeABAUAcIAAhSIAUAAIAAC9IgUAAIAAgbQgUAfgeAAQgagBgTgSgAgggLQgOANgBAYIAAABQAAAXAPAOQANAPATAAQATAAAPgPQAPgPAAgWIAAgBQAAgWgPgOQgPgPgTAAQgUAAgMAOg");
	this.shape_12.setTransform(138.4,48.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AgrAzQgTgUgBgfIAAAAQAAgcATgVQATgUAaAAQAdAAARAVQARATgBAdIAAAHIhpAAQACAWANAMQAOALARAAQAZABARgUIANAMQgWAZghAAQgcAAgTgTgAAsgGQgCgVgLgMQgLgOgUAAQgQAAgMAOQgMAMgCAVIBWAAIAAAAg");
	this.shape_13.setTransform(122.6,51.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("Ag5BDIAAgMIBYhoIhVAAIAAgRIBwAAIAAANIhYBnIBYAAIAAARg");
	this.shape_14.setTransform(107.6,51.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_15.setTransform(97,48.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("ABSBEIAAhNQAAgTgJgLQgJgLgRAAQgQABgKAKQgLAMAAATIAABMIgTAAIAAhNQAAgTgJgLQgJgLgQAAQgRABgKALQgLAMAAATIAABLIgUAAIAAiFIAUAAIAAAXQARgaAbAAQAeABAMAaQARgaAegBQAXABAOAOQANAOAAAZIAABSg");
	this.shape_16.setTransform(81.3,51.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AgxAyQgUgUAAgeIAAAAQAAgcAUgUQAUgVAeAAQAdAAAUAVQAUATAAAdIAAAAQAAAdgUAUQgUAVgeAAQgdAAgUgUgAgjgkQgOAPAAAVIAAAAQAAAVAPAQQAOAPAVAAQAVAAAOgPQANgPAAgWIAAAAQABgVgOgPQgPgPgVAAQgVAAgOAPg");
	this.shape_17.setTransform(60.5,51.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AgVAzIAAhRIgTAAIAAgRIATAAIAAgpIAUAAIAAApIAqAAIAAARIgqAAIAABOQAAAWAWAAQAKAAAJgEIAAARQgLAGgNAAQglAAAAgmg");
	this.shape_18.setTransform(46.7,49.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AgzAyIALgPQAWASAXgBQAMABAIgGQAIgGAAgJIAAgBQAAgJgKgGQgHgEgQgFQgVgGgJgEQgOgKAAgRIAAAAQAAgRANgLQANgKATAAQAaAAAWAOIgJAPQgUgNgUAAQgLAAgHAFQgHAGAAAJIAAAAQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAABQAAASgOALQgNAKgVAAQgeABgZgUg");
	this.shape_19.setTransform(35,51.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0D233F").s().p("AgsA2QgNgPAAgYIAAhTIATAAIAABOQAAATAKAKQAKALARAAQARAAALgLQAMgMAAgTIAAhMIAUAAIAACGIgUAAIAAgYQgQAbgdAAQgYAAgOgPg");
	this.shape_20.setTransform(20.6,51.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D233F").s().p("Ag3BDQgagbAAgnIAAgBQAAgmAagcQAagbAnAAQAoAAAfAcIgOAQQgagZgfAAQgdAAgVAWQgUAVAAAfIAAAAQAAAgAUAWQAVAVAdAAQAfAAAbgaIAOANQggAggpAAQgmAAgagbg");
	this.shape_21.setTransform(3.5,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-8.5,35.1,158,64), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AgLAOIAAgbIAXAAIAAAbg");
	this.shape.setTransform(128.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AgqA7QgQgMAAgTIAAgBQAAgVAQgLQAPgKAagBQAVAAAUAHIAAgGQAAgkgoAAQgTAAgVAKIgGgRQAZgKAXgBQAcAAAPAPQAOAOAAAZIAABRIgTAAIAAgUQgSAXgeABQgUAAgOgLgAgcAGQgKAIAAANIAAAAQAAAMAKAHQAKAIAOAAQASAAANgKQANgLAAgQIAAgNQgUgFgUABQgRAAgLAGg");
	this.shape_1.setTransform(117.2,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AAkBfIgvg+IgbAbIAAAjIgVAAIAAi9IAVAAIAACCIBHhKIAZAAIg5A4IA7BNg");
	this.shape_2.setTransform(103.6,51.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgzAyIALgPQAWASAXgBQAMABAIgGQAIgGAAgJIAAgBQAAgJgKgGQgHgEgQgFQgVgGgJgEQgOgKAAgRIAAAAQAAgRANgLQANgKATAAQAaAAAWAOIgJAPQgUgNgUAAQgLAAgHAFQgHAGAAAJIAAAAQAAAJALAFQAGAEARAFQAUAHAJAFQAOAKAAAQIAAABQAAASgOALQgNAKgVAAQgeABgZgUg");
	this.shape_3.setTransform(88.7,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgqA7QgQgMAAgTIAAgBQAAgVAQgLQAPgKAagBQAVAAAUAHIAAgGQAAgkgoAAQgTAAgVAKIgGgRQAZgKAXgBQAcAAAPAPQAOAOAAAZIAABRIgTAAIAAgUQgSAXgeABQgUAAgOgLgAgcAGQgKAIAAANIAAAAQAAAMAKAHQAKAIAOAAQASAAANgKQANgLAAgQIAAgNQgUgFgUABQgRAAgLAGg");
	this.shape_4.setTransform(74.5,54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AgJBfIAAi9IATAAIAAC9g");
	this.shape_5.setTransform(64,51.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("ABGBcIgVgwIhiAAIgWAwIgVAAIBTi3IATAAIBTC3gAApAZIgphcIgpBcIBSAAg");
	this.shape_6.setTransform(50.4,51.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AAnBEIAAhNQAAgTgKgLQgKgKgSgBQgQAAgLAMQgMAMAAATIAABLIgUAAIAAiFIAUAAIAAAXQAQgaAdAAQAYAAAOAPQAOAOAAAZIAABSg");
	this.shape_7.setTransform(24.4,53.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgJBdIAAiFIATAAIAACFgAgKhGIAAgWIAVAAIAAAWg");
	this.shape_8.setTransform(12.9,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(7.4,37.8,126.2,30), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D233F").s().p("AhSBLIAbgiQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgJgFgYgHQgkgJgPgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAgAAQAsAAAiAbIgZAjQgdgWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAIAFAbAHQAiAKAQAMQARAOAAAaIAAABQAAAegWASQgUARgjAAQgyAAgmghg");
	this.shape.setTransform(221.7,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_1.setTransform(202.7,51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_2.setTransform(187.1,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D233F").s().p("AgWBpIAAimIhAAAIAAgrICtAAIAAArIhAAAIAACmg");
	this.shape_3.setTransform(172.4,51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_4.setTransform(157.7,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D233F").s().p("AhKBpIAAjRIAuAAIAACnIBoAAIAAAqg");
	this.shape_5.setTransform(144.2,51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_6.setTransform(129.1,51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D233F").s().p("AhYBpIAAjRIBgAAQAlAAASASQAOAPAAAVIAAABQABAegcAPQAnAOAAAlIAAABQABAcgXAPQgUAOgkAAgAgrBBIA2AAQAgAAAAgYIAAAAQABgXgjABIg0AAgAgrgTIAqAAQAhAAAAgXIAAAAQAAgVgeAAIgtAAg");
	this.shape_7.setTransform(113.9,51.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D233F").s().p("AgWBpIAAjRIAtAAIAADRg");
	this.shape_8.setTransform(97.4,51.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D233F").s().p("AhSBLIAbgiQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgIgFgZgHQglgJgOgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAhAAQAsAAAgAbIgXAjQgegWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAIAFAcAHQAhAKAPAMQASAOAAAaIAAABQAAAegVASQgWARgiAAQgyAAgmghg");
	this.shape_9.setTransform(82.6,51.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D233F").s().p("AhSBLIAbgiQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgJgFgYgHQgkgJgPgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAgAAQAtAAAhAbIgZAjQgdgWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAIAFAbAHQAjAKAPAMQARAOAAAaIAAABQAAAegWASQgUARgjAAQgzAAglghg");
	this.shape_10.setTransform(63.4,51.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D233F").s().p("AhPBNQgfgfAAgtIAAgBQAAgsAfggQAggfAvAAQAwgBAgAgQAgAfAAAtIAAAAQAAAuggAeQghAhgvAAQgvgBgggfgAgtguQgSATAAAbIAAAAQABAbARAUQATATAaAAQAcAAASgTQARgTAAgbIAAgBQABgbgTgSQgSgUgbAAQgbAAgSATg");
	this.shape_11.setTransform(41.2,51.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D233F").s().p("AhSBpIAAjRIBVAAQAlAAAWAUQAVAUAAAgIAAABQAAAigZAUQgXATgkAAIgjAAIAAA/gAgkABIAkAAQARAAAKgIQAJgJAAgOIAAgBQAAgPgKgIQgKgJgQABIgkAAg");
	this.shape_12.setTransform(19.3,51.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D233F").s().p("AhSBKIAbghQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgJgFgYgHQglgJgOgLQgTgPAAgcIAAAAQAAgdAVgRQAVgSAgAAQArAAAiAbIgYAjQgegWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAJAFAbAHQAhAKAPAMQASAOAAAaIAAABQAAAegVASQgWARgiAAQgzAAglgig");
	this.shape_13.setTransform(182.3,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D233F").s().p("AhSBKIAbghQAfAaAfAAQAeAAAAgTIAAgBQAAgJgIgGQgIgFgZgHQglgJgOgLQgTgPAAgcIAAAAQAAgdAVgRQAUgSAhAAQAsAAAgAbIgXAjQgegWgYAAQgNABgHAFQgHAFAAAIIAAAAQAAALAJAFQAIAFAcAHQAhAKAPAMQASAOAAAaIAAABQAAAegVASQgWARgiAAQgyAAgmgig");
	this.shape_14.setTransform(163.1,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D233F").s().p("AhPBpIAAjRICdAAIAAApIhvAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_15.setTransform(144.1,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D233F").s().p("AhLBpIAAjRIAvAAIAACnIBoAAIAAAqg");
	this.shape_16.setTransform(125.1,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D233F").s().p("AhgBpIAAjRIBSAAQAwAAAgAeQAfAdAAAtIAAAAQAAAtgfAdQggAfgwAAgAgxBAIAjAAQAcAAARgSQASgRAAgcIAAgBQAAgbgSgRQgRgTgcABIgjAAg");
	this.shape_17.setTransform(103.8,15.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D233F").s().p("AA2BpIhliEIAACEIguAAIAAjRIArAAIBiCAIAAiAIAtAAIAADRg");
	this.shape_18.setTransform(79.8,15.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D233F").s().p("AhPBpIAAjRICeAAIAAApIhwAAIAAAqIBiAAIAAApIhiAAIAAAsIBxAAIAAApg");
	this.shape_19.setTransform(58.3,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(6.4,0,227.2,70), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAZAqIgIgTIgiAAIgIATIgTAAIAkhTIARAAIAjBTgAALAHIgLgaIgKAaIAVAAg");
	this.shape.setTransform(127,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAqIgZgjIgKAKIAAAZIgSAAIAAhTIASAAIAAAkIAhgkIAXAAIgjAjIAkAwg");
	this.shape_1.setTransform(118.3,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAeIAKgNQANAKAMAAQAMAAAAgIIAAgBQAAgDgEgCQgDgCgJgDQgPgEgGgEQgHgFAAgMIAAAAQAAgLAIgHQAIgHANAAQARAAAOAKIgKAOQgMgIgJAAQgFAAgDACQgDACAAAEQAAAEAEACQADACAKACQAOAEAGAEQAHAHAAAKQAAANgJAGQgIAHgOAAQgTAAgPgNg");
	this.shape_2.setTransform(109.6,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAALAHIgLgaIgKAaIAVAAg");
	this.shape_3.setTransform(101.1,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_4.setTransform(93,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAqIgHgTIgjAAIgIATIgSAAIAkhTIAQAAIAkBTgAALAHIgLgaIgLAaIAWAAg");
	this.shape_5.setTransform(84.3,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAAQIgsAAIAAARIAnAAIAAAQIgnAAIAAASIAtAAIAAAQg");
	this.shape_6.setTransform(72.1,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAqIgRgbIgPAAIAAAbIgSAAIAAhTIAlAAQAQAAAJAIQAHAIAAAMQAAASgSAHIAUAegAgRAAIASAAQAHAAADgDQAEgDAAgGIAAAAQAAgMgOgBIgSAAg");
	this.shape_7.setTransform(63.9,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgRANgMQANgNASgBQATAAANANQAMAMAAASQAAASgMAMQgNANgTABQgTAAgMgNgAgSgSQgGAIgBAKQAAALAIAHQAHAJAKgBQALABAHgJQAIgHAAgLQgBgKgHgIQgHgIgLAAQgKAAgIAIg");
	this.shape_8.setTransform(54.2,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAqIAAhTIASAAIAABCIApAAIAAARg");
	this.shape_9.setTransform(45.7,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAqIAAhTIAhAAQAPAAAJAIQAIAIAAANIAAABQAAANgKAHQgJAIgOAAIgOAAIAAAZgAgOAAIAOAAQAHAAAEgCQAEgEAAgFQAAgHgEgDQgEgDgHgBIgOAAg");
	this.shape_10.setTransform(38,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATAqIgTgdIgSAdIgVAAIAdgqIgcgpIAWAAIAQAbIASgbIAVAAIgcApIAdAqg");
	this.shape_11.setTransform(29.3,12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAqIAAhTIA+AAIAAAQIgsAAIAAARIAnAAIAAAQIgnAAIAAASIAtAAIAAAQg");
	this.shape_12.setTransform(21.1,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D41B44").s().p("Ar/B8IBbj3IWkAAIAAD3g");
	this.shape_13.setTransform(76.8,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.alska_redbutt, new cjs.Rectangle(0,0,153.6,24.9), null);


// stage content:
(lib._300x600_endless = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// explore Alaska
	this.instance = new lib.alska_redbutt();
	this.instance.parent = this;
	this.instance.setTransform(386.3,568.5,1,1,0,0,0,76.8,12.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:356.9},0).wait(1).to({x:311.1},0).wait(1).to({x:283.3},0).wait(1).to({x:266.2},0).wait(1).to({x:254.4},0).wait(1).to({x:245.9},0).wait(1).to({x:239.5},0).wait(1).to({x:234.6},0).wait(1).to({x:231},0).wait(1).to({x:228.3},0).wait(1).to({x:226.4},0).wait(1).to({x:225.2},0).wait(1).to({x:224.5},0).wait(1).to({x:224.3},0).wait(58).to({x:224.9},0).wait(1).to({x:227.1},0).wait(1).to({x:231.4},0).wait(1).to({x:238.5},0).wait(1).to({x:249.6},0).wait(1).to({x:266.2},0).wait(1).to({x:288.6},0).wait(1).to({x:312.8},0).wait(1).to({x:333.5},0).wait(1).to({x:349.2},0).wait(1).to({x:360.7},0).wait(1).to({x:369.2},0).wait(1).to({x:375.3},0).wait(1).to({x:379.8},0).wait(1).to({x:382.8},0).wait(1).to({x:384.8},0).wait(1).to({x:385.9},0).wait(1).to({x:386.3},0).wait(29));

	// pursuit
	this.instance_1 = new lib.pursuit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.7,569,0.19,0.19,0,0,0,290.3,40.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:289.5,regY:40.1,x:-30.4,y:568.9},0).wait(1).to({x:7.8},0).wait(1).to({x:31},0).wait(1).to({x:45.2},0).wait(1).to({x:55},0).wait(1).to({x:62.1},0).wait(1).to({x:67.5},0).wait(1).to({x:71.5},0).wait(1).to({x:74.5},0).wait(1).to({x:76.8},0).wait(1).to({x:78.3},0).wait(1).to({x:79.4},0).wait(1).to({x:80},0).wait(1).to({regX:290.3,regY:40.6,x:80.3,y:569},0).wait(58).to({regX:289.5,regY:40.1,x:80.4,y:568.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:81.4,y:569},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:83.2,y:569.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:86.3,y:569.3},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:91.1,y:569.7},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:98.2,y:570.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:107.9,y:571},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:118.3,y:571.8},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:127.3,y:572.5},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:134,y:573},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:139,y:573.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:142.6,y:573.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:145.3,y:573.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:147.2,y:574},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:148.6,y:574.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.4,y:574.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.9},0).wait(1).to({regX:290.6,regY:40.9,x:150.3,y:574.4},0).wait(29));

	// Layer_19
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,294.6,1,1,0,0,0,101.9,29.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).wait(1).to({regX:101,regY:23.3,x:149.8,y:288.2,alpha:0.002},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.044},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.674},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.924},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:101.9,regY:29.7,x:150.7,y:294.6,alpha:1},0).wait(2));

	// Layer_16 copy
	this.instance_3 = new lib.Symbol9copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,81.6,1,1,0,0,0,103.9,35.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).wait(1).to({regX:103.7,regY:139.7,x:149.8,y:185.8,alpha:0.002},0).wait(1).to({y:185.9,alpha:0.01},0).wait(1).to({y:186.2,alpha:0.025},0).wait(1).to({y:186.5,alpha:0.048},0).wait(1).to({y:187.1,alpha:0.083},0).wait(1).to({y:187.9,alpha:0.132},0).wait(1).to({y:189,alpha:0.201},0).wait(1).to({y:190.5,alpha:0.292},0).wait(1).to({y:192.3,alpha:0.404},0).wait(1).to({y:194.2,alpha:0.521},0).wait(1).to({y:195.9,alpha:0.628},0).wait(1).to({y:197.3,alpha:0.716},0).wait(1).to({y:198.5,alpha:0.785},0).wait(1).to({y:199.4,alpha:0.84},0).wait(1).to({y:200,alpha:0.882},0).wait(1).to({y:200.6,alpha:0.916},0).wait(1).to({y:201,alpha:0.942},0).wait(1).to({y:201.3,alpha:0.962},0).wait(1).to({y:201.6,alpha:0.977},0).wait(1).to({y:201.8,alpha:0.988},0).wait(1).to({y:201.9,alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:103.9,regY:35.5,x:150,y:97.8,alpha:1},0).wait(14));

	// Layer_16
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,84.3,1,1,0,0,0,103.9,35.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).wait(1).to({regY:47.1,y:95.9,alpha:0.002},0).wait(1).to({y:96,alpha:0.01},0).wait(1).to({y:96.2,alpha:0.025},0).wait(1).to({y:96.5,alpha:0.048},0).wait(1).to({y:97,alpha:0.083},0).wait(1).to({y:97.6,alpha:0.132},0).wait(1).to({y:98.6,alpha:0.201},0).wait(1).to({y:99.8,alpha:0.292},0).wait(1).to({y:101.3,alpha:0.404},0).wait(1).to({y:102.9,alpha:0.521},0).wait(1).to({y:104.3,alpha:0.628},0).wait(1).to({y:105.5,alpha:0.716},0).wait(1).to({y:106.4,alpha:0.785},0).wait(1).to({y:107.2,alpha:0.84},0).wait(1).to({y:107.8,alpha:0.882},0).wait(1).to({y:108.2,alpha:0.916},0).wait(1).to({y:108.6,alpha:0.942},0).wait(1).to({y:108.8,alpha:0.962},0).wait(1).to({y:109,alpha:0.977},0).wait(1).to({y:109.2,alpha:0.988},0).wait(1).to({y:109.3,alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({regY:35.5,y:97.8,alpha:1},0).wait(17));

	// Layer_14 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_21 = new cjs.Graphics().p("Az2BfIAAi9MAqcAAAIAAC9g");
	var mask_graphics_22 = new cjs.Graphics().p("Az1ChIAAlBMAqbAAAIAAFBg");
	var mask_graphics_23 = new cjs.Graphics().p("Az1DjIAAnFMAqbAAAIAAHFg");
	var mask_graphics_24 = new cjs.Graphics().p("Az1EjIAApFMAqbAAAIAAJFg");
	var mask_graphics_25 = new cjs.Graphics().p("Az1FiIAArDMAqbAAAIAALDg");
	var mask_graphics_26 = new cjs.Graphics().p("Az1GfIAAs9MAqbAAAIAAM9g");
	var mask_graphics_27 = new cjs.Graphics().p("Az1HbIAAu1MAqbAAAIAAO1g");
	var mask_graphics_28 = new cjs.Graphics().p("Az1IWIAAwrMAqbAAAIAAQrg");
	var mask_graphics_29 = new cjs.Graphics().p("Az1JPIAAydMAqbAAAIAASdg");
	var mask_graphics_30 = new cjs.Graphics().p("Az1KHIAA0NMAqbAAAIAAUNg");
	var mask_graphics_31 = new cjs.Graphics().p("Az1K9IAA15MAqbAAAIAAV5g");
	var mask_graphics_32 = new cjs.Graphics().p("Az1LzIAA3lMAqbAAAIAAXlg");
	var mask_graphics_33 = new cjs.Graphics().p("Az1MmIAA5LMAqbAAAIAAZLg");
	var mask_graphics_34 = new cjs.Graphics().p("Az1NZIAA6xMAqbAAAIAAaxg");
	var mask_graphics_35 = new cjs.Graphics().p("Az1OKIAA8TMAqbAAAIAAcTg");
	var mask_graphics_36 = new cjs.Graphics().p("Az1O6IAA9zMAqbAAAIAAdzg");
	var mask_graphics_37 = new cjs.Graphics().p("Az1PpIAA/RMAqbAAAIAAfRg");
	var mask_graphics_38 = new cjs.Graphics().p("Az1QWMAAAggrMAqbAAAMAAAAgrg");
	var mask_graphics_39 = new cjs.Graphics().p("Az1RCMAAAgiDMAqbAAAMAAAAiDg");
	var mask_graphics_40 = new cjs.Graphics().p("Az1RsMAAAgjXMAqbAAAMAAAAjXg");
	var mask_graphics_41 = new cjs.Graphics().p("Az1SVMAAAgkpMAqbAAAMAAAAkpg");
	var mask_graphics_42 = new cjs.Graphics().p("Az1S9MAAAgl5MAqbAAAMAAAAl5g");
	var mask_graphics_43 = new cjs.Graphics().p("Az1TjMAAAgnFMAqbAAAMAAAAnFg");
	var mask_graphics_44 = new cjs.Graphics().p("Az1UIMAAAgoPMAqbAAAMAAAAoPg");
	var mask_graphics_45 = new cjs.Graphics().p("Az1UsMAAAgpXMAqbAAAMAAAApXg");
	var mask_graphics_46 = new cjs.Graphics().p("Az1VOMAAAgqbMAqbAAAMAAAAqbg");
	var mask_graphics_47 = new cjs.Graphics().p("Az1VwMAAAgrfMAqbAAAMAAAArfg");
	var mask_graphics_48 = new cjs.Graphics().p("Az1WPMAAAgsdMAqbAAAMAAAAsdg");
	var mask_graphics_49 = new cjs.Graphics().p("Az1WuMAAAgtbMAqbAAAMAAAAtbg");
	var mask_graphics_50 = new cjs.Graphics().p("Az1XLMAAAguVMAqbAAAMAAAAuVg");
	var mask_graphics_51 = new cjs.Graphics().p("Az1XmMAAAgvLMAqbAAAMAAAAvLg");
	var mask_graphics_52 = new cjs.Graphics().p("Az1YAMAAAgv/MAqbAAAMAAAAv/g");
	var mask_graphics_53 = new cjs.Graphics().p("Az1YZMAAAgwxMAqbAAAMAAAAwxg");
	var mask_graphics_54 = new cjs.Graphics().p("Az1YxMAAAgxhMAqbAAAMAAAAxhg");
	var mask_graphics_55 = new cjs.Graphics().p("Az1ZHMAAAgyNMAqbAAAMAAAAyNg");
	var mask_graphics_56 = new cjs.Graphics().p("Az1ZcMAAAgy3MAqbAAAMAAAAy3g");
	var mask_graphics_57 = new cjs.Graphics().p("Az1ZwMAAAgzfMAqbAAAMAAAAzfg");
	var mask_graphics_58 = new cjs.Graphics().p("Az1aCMAAAg0DMAqbAAAMAAAA0Dg");
	var mask_graphics_59 = new cjs.Graphics().p("Az1aTMAAAg0lMAqbAAAMAAAA0lg");
	var mask_graphics_60 = new cjs.Graphics().p("Az1aiMAAAg1DMAqbAAAMAAAA1Dg");
	var mask_graphics_61 = new cjs.Graphics().p("Az1awMAAAg1fMAqbAAAMAAAA1fg");
	var mask_graphics_62 = new cjs.Graphics().p("Az1a9MAAAg15MAqbAAAMAAAA15g");
	var mask_graphics_63 = new cjs.Graphics().p("Az1bJMAAAg2RMAqbAAAMAAAA2Rg");
	var mask_graphics_64 = new cjs.Graphics().p("Az1bTMAAAg2lMAqbAAAMAAAA2lg");
	var mask_graphics_65 = new cjs.Graphics().p("Az1bbMAAAg21MAqbAAAMAAAA21g");
	var mask_graphics_66 = new cjs.Graphics().p("Az1bjMAAAg3FMAqbAAAMAAAA3Fg");
	var mask_graphics_67 = new cjs.Graphics().p("Az1bpMAAAg3RMAqbAAAMAAAA3Rg");
	var mask_graphics_68 = new cjs.Graphics().p("Az1buMAAAg3bMAqbAAAMAAAA3bg");
	var mask_graphics_69 = new cjs.Graphics().p("Az1bxMAAAg3hMAqbAAAMAAAA3hg");
	var mask_graphics_70 = new cjs.Graphics().p("Az1bzMAAAg3lMAqbAAAMAAAA3lg");
	var mask_graphics_71 = new cjs.Graphics().p("Az2b0MAAAg3nMAqcAAAMAAAA3ng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_graphics_21,x:144.6,y:9.5}).wait(1).to({graphics:mask_graphics_22,x:144.6,y:16.1}).wait(1).to({graphics:mask_graphics_23,x:144.6,y:22.7}).wait(1).to({graphics:mask_graphics_24,x:144.6,y:29.1}).wait(1).to({graphics:mask_graphics_25,x:144.6,y:35.4}).wait(1).to({graphics:mask_graphics_26,x:144.6,y:41.5}).wait(1).to({graphics:mask_graphics_27,x:144.6,y:47.5}).wait(1).to({graphics:mask_graphics_28,x:144.6,y:53.4}).wait(1).to({graphics:mask_graphics_29,x:144.6,y:59.1}).wait(1).to({graphics:mask_graphics_30,x:144.6,y:64.7}).wait(1).to({graphics:mask_graphics_31,x:144.6,y:70.1}).wait(1).to({graphics:mask_graphics_32,x:144.6,y:75.5}).wait(1).to({graphics:mask_graphics_33,x:144.6,y:80.6}).wait(1).to({graphics:mask_graphics_34,x:144.6,y:85.7}).wait(1).to({graphics:mask_graphics_35,x:144.6,y:90.6}).wait(1).to({graphics:mask_graphics_36,x:144.6,y:95.4}).wait(1).to({graphics:mask_graphics_37,x:144.6,y:100.1}).wait(1).to({graphics:mask_graphics_38,x:144.6,y:104.6}).wait(1).to({graphics:mask_graphics_39,x:144.6,y:109}).wait(1).to({graphics:mask_graphics_40,x:144.6,y:113.2}).wait(1).to({graphics:mask_graphics_41,x:144.6,y:117.3}).wait(1).to({graphics:mask_graphics_42,x:144.6,y:121.3}).wait(1).to({graphics:mask_graphics_43,x:144.6,y:125.1}).wait(1).to({graphics:mask_graphics_44,x:144.6,y:128.8}).wait(1).to({graphics:mask_graphics_45,x:144.6,y:132.4}).wait(1).to({graphics:mask_graphics_46,x:144.6,y:135.8}).wait(1).to({graphics:mask_graphics_47,x:144.6,y:139.2}).wait(1).to({graphics:mask_graphics_48,x:144.6,y:142.3}).wait(1).to({graphics:mask_graphics_49,x:144.6,y:145.4}).wait(1).to({graphics:mask_graphics_50,x:144.6,y:148.3}).wait(1).to({graphics:mask_graphics_51,x:144.6,y:151}).wait(1).to({graphics:mask_graphics_52,x:144.6,y:153.6}).wait(1).to({graphics:mask_graphics_53,x:144.6,y:156.1}).wait(1).to({graphics:mask_graphics_54,x:144.6,y:158.5}).wait(1).to({graphics:mask_graphics_55,x:144.6,y:160.7}).wait(1).to({graphics:mask_graphics_56,x:144.6,y:162.8}).wait(1).to({graphics:mask_graphics_57,x:144.6,y:164.8}).wait(1).to({graphics:mask_graphics_58,x:144.6,y:166.6}).wait(1).to({graphics:mask_graphics_59,x:144.6,y:168.3}).wait(1).to({graphics:mask_graphics_60,x:144.6,y:169.8}).wait(1).to({graphics:mask_graphics_61,x:144.6,y:171.2}).wait(1).to({graphics:mask_graphics_62,x:144.6,y:172.5}).wait(1).to({graphics:mask_graphics_63,x:144.6,y:173.7}).wait(1).to({graphics:mask_graphics_64,x:144.6,y:174.7}).wait(1).to({graphics:mask_graphics_65,x:144.6,y:175.5}).wait(1).to({graphics:mask_graphics_66,x:144.6,y:176.3}).wait(1).to({graphics:mask_graphics_67,x:144.6,y:176.9}).wait(1).to({graphics:mask_graphics_68,x:144.6,y:177.4}).wait(1).to({graphics:mask_graphics_69,x:144.6,y:177.7}).wait(1).to({graphics:mask_graphics_70,x:144.6,y:177.9}).wait(1).to({graphics:mask_graphics_71,x:144.6,y:178}).wait(48));

	// Layer_13
	this.instance_5 = new lib.Symbol12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,301,1,1,0,0,0,150,300);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).wait(51).to({alpha:0},10).wait(37));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},30).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).wait(1).to({regX:70.2,regY:65.5,x:149.7,y:140.5,alpha:0.005},0).wait(1).to({y:141.1,alpha:0.024},0).wait(1).to({y:142.3,alpha:0.067},0).wait(1).to({y:144.9,alpha:0.153},0).wait(1).to({y:149.3,alpha:0.301},0).wait(1).to({y:154.1,alpha:0.462},0).wait(1).to({y:157.6,alpha:0.582},0).wait(1).to({y:160.2,alpha:0.67},0).wait(1).to({y:162.2,alpha:0.736},0).wait(1).to({y:163.7,alpha:0.788},0).wait(1).to({y:165,alpha:0.829},0).wait(1).to({y:166,alpha:0.864},0).wait(1).to({y:166.8,alpha:0.892},0).wait(1).to({y:167.5,alpha:0.915},0).wait(1).to({y:168.1,alpha:0.934},0).wait(1).to({y:168.6,alpha:0.951},0).wait(1).to({y:169,alpha:0.964},0).wait(1).to({y:169.3,alpha:0.974},0).wait(1).to({y:169.5,alpha:0.983},0).wait(1).to({y:169.7,alpha:0.989},0).wait(1).to({y:169.9,alpha:0.994},0).wait(1).to({y:170,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:70.5,regY:32,x:150,y:136.6,alpha:1},0).wait(31).to({regX:70.2,regY:65.5,x:149.7,y:170.2,alpha:0.995},0).wait(1).to({y:170.7,alpha:0.976},0).wait(1).to({y:171.9,alpha:0.933},0).wait(1).to({y:174.2,alpha:0.847},0).wait(1).to({y:178.2,alpha:0.699},0).wait(1).to({y:182.5,alpha:0.538},0).wait(1).to({y:185.8,alpha:0.418},0).wait(1).to({y:188.1,alpha:0.33},0).wait(1).to({y:189.9,alpha:0.264},0).wait(1).to({y:191.3,alpha:0.212},0).wait(1).to({y:192.4,alpha:0.171},0).wait(1).to({y:193.4,alpha:0.136},0).wait(1).to({y:194.1,alpha:0.108},0).wait(1).to({y:194.8,alpha:0.085},0).wait(1).to({y:195.3,alpha:0.066},0).wait(1).to({y:195.7,alpha:0.049},0).wait(1).to({y:196.1,alpha:0.036},0).wait(1).to({y:196.4,alpha:0.026},0).wait(1).to({y:196.6,alpha:0.017},0).wait(1).to({y:196.8,alpha:0.011},0).wait(1).to({y:196.9,alpha:0.006},0).wait(1).to({y:197,alpha:0.002},0).wait(1).to({alpha:0.001},0).to({_off:true},1).wait(23));

	// Layer_11
	this.instance_8 = new lib.Symbol1copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.1,69.4,1,1,0,0,0,120,35);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).wait(1).to({regX:120.4,regY:33.5,x:150.5,y:68,alpha:0.005},0).wait(1).to({y:68.6,alpha:0.024},0).wait(1).to({y:69.8,alpha:0.067},0).wait(1).to({y:72.4,alpha:0.153},0).wait(1).to({y:76.8,alpha:0.301},0).wait(1).to({y:81.6,alpha:0.462},0).wait(1).to({y:85.1,alpha:0.582},0).wait(1).to({y:87.7,alpha:0.67},0).wait(1).to({y:89.7,alpha:0.736},0).wait(1).to({y:91.2,alpha:0.788},0).wait(1).to({y:92.5,alpha:0.829},0).wait(1).to({y:93.5,alpha:0.864},0).wait(1).to({y:94.3,alpha:0.892},0).wait(1).to({y:95,alpha:0.915},0).wait(1).to({y:95.6,alpha:0.934},0).wait(1).to({y:96.1,alpha:0.951},0).wait(1).to({y:96.5,alpha:0.964},0).wait(1).to({y:96.8,alpha:0.974},0).wait(1).to({y:97,alpha:0.983},0).wait(1).to({y:97.2,alpha:0.989},0).wait(1).to({y:97.4,alpha:0.994},0).wait(1).to({y:97.5,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120,regY:35,x:150.1,y:99.1,alpha:1},0).wait(34).to({regX:120.4,regY:33.5,x:150.5,y:97.7,alpha:0.995},0).wait(1).to({y:98.2,alpha:0.976},0).wait(1).to({y:99.4,alpha:0.933},0).wait(1).to({y:101.7,alpha:0.847},0).wait(1).to({y:105.7,alpha:0.699},0).wait(1).to({y:110,alpha:0.538},0).wait(1).to({y:113.3,alpha:0.418},0).wait(1).to({y:115.6,alpha:0.33},0).wait(1).to({y:117.4,alpha:0.264},0).wait(1).to({y:118.8,alpha:0.212},0).wait(1).to({y:119.9,alpha:0.171},0).wait(1).to({y:120.9,alpha:0.136},0).wait(1).to({y:121.6,alpha:0.108},0).wait(1).to({y:122.3,alpha:0.085},0).wait(1).to({y:122.8,alpha:0.066},0).wait(1).to({y:123.2,alpha:0.049},0).wait(1).to({y:123.6,alpha:0.036},0).wait(1).to({y:123.9,alpha:0.026},0).wait(1).to({y:124.1,alpha:0.017},0).wait(1).to({y:124.3,alpha:0.011},0).wait(1).to({y:124.4,alpha:0.006},0).wait(1).to({y:124.5,alpha:0.002},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120,regY:35,x:150.1,y:126.1,alpha:0},0).wait(23));

	// Layer_9
	this.instance_9 = new lib.Symbol5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: '05FF95A64E8548BA973EF771F9261256',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_endless_atlas_.png", id:"300x600_endless_atlas_"}
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