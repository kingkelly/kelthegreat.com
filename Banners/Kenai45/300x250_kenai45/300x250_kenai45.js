(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_kenai45_atlas_NP_", frames: [[0,335,325,271],[0,608,300,250],[0,0,400,333]]}
];


// symbols:



(lib.bb_boat = function() {
	this.spriteSheet = ss["300x250_kenai45_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_glacier = function() {
	this.spriteSheet = ss["300x250_kenai45_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_whale = function() {
	this.spriteSheet = ss["300x250_kenai45_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.db_bottom = function() {
	this.initialize(img.db_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,382);// helper functions:

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


(lib.whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_whale();
	this.instance.parent = this;
	this.instance.setTransform(-39,349,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whale, new cjs.Rectangle(-39,349,380.9,317.1), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59E39").s().p("AARA3QgJgJAAgOIAAAAQAAgNAJgJQAIgKAOAAQANAAAJAKQAIAJAAANQAAAOgIAJQgJAKgNAAQgOAAgIgKgAAeAVQgDAEAAAHQAAAGADAGQAEAEAFAAQAFAAAEgEQADgFAAgHIAAAAQAAgHgEgEQgDgFgFABQgGgBgDAFgAg4A/IAzhDIAog6IAWAAIgzBDIgoA6gAg8gIQgIgKAAgNQAAgOAIgJQAJgJAOAAQANAAAJAJQAIAJAAANIAAABQAAANgIAKQgJAIgOAAQgNAAgJgIgAgugrQgDAFAAAGIAAABQAAAHADAEQADAEAGAAQAFAAADgEQADgEAAgHQAAgHgDgFQgDgEgGAAQgFAAgDAEg");
	this.shape.setTransform(99.6,218.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F59E39").s().p("AgoAvQgPgTAAgbIAAgBQAAgbAPgSQAQgTAYAAQAZAAAQATQAPASAAAbIAAAAQAAAcgPATQgQASgZAAQgYAAgQgSgAgTgcQgIALAAARIAAAAQAAASAIAKQAIAMALAAQAMAAAIgLQAIgMAAgQIAAgBQAAgRgIgKQgIgMgMAAQgLAAgIALg");
	this.shape_1.setTransform(85.3,218.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59E39").s().p("AAAA/IAAhiIgVAGIgGgXIAjgLIATAAIAAB+g");
	this.shape_2.setTransform(74.4,218.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59E39").s().p("AgvA/IAAh9IBeAAIAAAZIhDAAIAAAZIA7AAIAAAYIg7AAIAAAaIBEAAIAAAZg");
	this.shape_3.setTransform(60.1,218.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59E39").s().p("AgLA/Igzh+IAeAAIAhBYIAghYIAeAAIgzB+g");
	this.shape_4.setTransform(47,218.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59E39").s().p("AAmA/IgMgcIg0AAIgMAcIgcAAIA2h+IAZAAIA2B+gAAQALIgQgoIgQAoIAgAAg");
	this.shape_5.setTransform(36.2,218.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F59E39").s().p("AgxAtIARgUQASAPASAAQASAAAAgMIAAAAQAAgGgEgCQgGgEgOgEQgWgGgIgGQgMgIAAgRIAAgBQAAgRANgKQAMgLATAAQAaAAAUAQIgOAVQgSgNgOAAQgIAAgEAEQgEADAAAFIAAAAQAAAGAFAEQAFACAQAEQAUAGAKAHQAKAIAAARQAAASgNALQgMAKgVAAQgeAAgXgUg");
	this.shape_6.setTransform(23.2,218.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(15.5,208,93.9,22), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBHIAAiKIAoAAIAAAcQAMggAfABIAAAqIgCAAQgpAAAAAwIAAAzg");
	this.shape.setTransform(228.9,277.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA1QgUgVAAgfIAAgBQAAgeATgUQAUgVAdAAQAhAAASAWQAQAVAAAfIAAAKIhgAAQAGAcAbAAQASAAAQgOIAWAUQgVAagkAAQgegBgVgTgAAegKQgCgNgHgJQgIgHgMgBQgYABgGAdIA7AAIAAAAg");
	this.shape_1.setTransform(215,277.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BOQgTgUAAgiIAAAAQAAghATgUQASgSAaAAQAZAAASAVIAAhFIAnAAIAAC9IgnAAIAAgUQgRAWgaAAQgaAAgSgSgAgXgDQgKAKAAARIAAAAQAAARAKALQAKALANAAQAOAAAKgLQAKgLAAgRIAAAAQAAgRgKgKQgKgLgOAAQgNAAgKALg");
	this.shape_2.setTransform(198,275.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZBHIAAhNQAAgcgZAAQgXAAAAAcIAABNIgoAAIAAiLIAoAAIAAAVQARgXAWAAQAXAAANAOQAMANAAAZIAABZg");
	this.shape_3.setTransform(181.5,277.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1AzQgVgUAAgeIAAgBQAAgeAVgUQAWgVAfAAQAggBAWAVQAVAVAAAeIAAAAQAAAegVAVQgWAWggAAQgfAAgWgWgAgagaQgJAKAAAQIAAAAQAAAQAKALQAKALAPAAQARAAAKgLQAKgLAAgPIAAgBQAAgPgLgLQgKgMgQAAQgQAAgKAMg");
	this.shape_4.setTransform(164.7,277.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBHIgbhVIgaBVIgkAAIgriMIApAAIAWBTIAahTIAhAAIAbBUIAXhUIAnAAIgsCMg");
	this.shape_5.setTransform(144.9,277.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBgIAAhpIgRAAIAAggIARAAIAAgJQAAgXALgLQALgLAUAAQAQAAAMAEIAAAhQgJgEgJAAQgOAAAAAQIAAAFIAgAAIAAAgIggAAIAABpg");
	this.shape_6.setTransform(121.2,275.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1AzQgVgUAAgeIAAgBQAAgeAVgUQAWgVAfAAQAggBAWAVQAVAVAAAeIAAAAQAAAegVAVQgWAWggAAQgfAAgWgWgAgagaQgJAKAAAQIAAAAQAAAQAKALQAKALAPAAQARAAAKgLQAKgLAAgPIAAgBQAAgPgLgLQgKgMgQAAQgQAAgKAMg");
	this.shape_7.setTransform(107.4,277.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4AzIARgaQAXAQAUAAQARAAAAgKIAAAAQAAgGgJgEIgTgHQgTgFgJgHQgNgKAAgSIAAAAQAAgWAOgMQAPgLAUAAQAdAAAYAQIgQAcQgWgNgPgBQgOAAAAAKIAAAAQAAAGAJAEIASAHQAUAHAJAHQAOAJAAASIAAAAQAAAXgQALQgOALgYAAQggAAgbgVg");
	this.shape_8.setTransform(84.3,277.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpBHIAAiKIAoAAIAAAcQAMggAfABIAAAqIgCAAQgpAAAAAwIAAAzg");
	this.shape_9.setTransform(73.1,277.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxA9QgOgMAAgUIAAAAQAAgWAQgLQAOgLAaAAQAQAAARAGIAAgCQAAgagdAAQgSAAgVAIIgJgeQAZgMAcAAQAfAAAQAQQAPAPAAAdIAABQIgmAAIAAgPQgQASgZAAQgVAAgNgLgAgZAbIAAABQAAAHAGAFQAGAEAKAAQANAAAIgGQAIgHAAgLIAAgHQgLgFgOAAQgaAAAAATg");
	this.shape_10.setTransform(59.1,277.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA1QgUgVAAgfIAAgBQAAgeATgUQAUgVAdAAQAhAAASAWQAQAVAAAfIAAAKIhgAAQAGAcAbAAQASAAAQgOIAWAUQgVAagkAAQgegBgVgTgAAegKQgCgNgHgJQgIgHgMgBQgYABgGAdIA7AAIAAAAg");
	this.shape_11.setTransform(43.8,277.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag9BRIANgcQAJAFAIAAQAKAAAEgJIg3iLIAqAAIAfBeIAeheIAqAAIg2COQgIAWgKAIQgJAJgSAAQgTAAgQgKg");
	this.shape_12.setTransform(28,280);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEBCIAZgdQAVATAWAAQANAAAIgHQAIgGAAgMIAAAAQAAgMgJgGQgIgHgOAAQgOAAgQAHIgXgPIAFhaIBvAAIAAAjIhNAAIgCAgQANgDAKAAQAcAAARAOQATAOAAAdIAAABQAAAdgTARQgTAQgfABQgnAAgdgbg");
	this.shape_13.setTransform(4.1,275.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARBcIAAgnIhYAAIgHgdIBjhzIAhAAIAABvIAZAAIAAAhIgZAAIAAAngAgfAUIAwAAIAAg4g");
	this.shape_14.setTransform(-13.1,275.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-23.9,262,259.8,30), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWBlIASgmQAeAQAgAAQAzAAAAgxIAAgJQgZAdgiAAQghAAgXgWQgZgYAAgmIAAAAQAAgnAZgYQAXgWAhAAQAhAAAZAbIAAgYIA0AAIAACMQAAAxgXAXQgZAYg1AAQgtAAgkgTgAgehBQgNAMAAATIAAAAQAAATANAMQAMAKASAAQATAAANgKQANgMAAgTIAAAAQAAgTgNgMQgNgMgTAAQgSAAgMAMg");
	this.shape.setTransform(156.4,244.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBdIAAhlQAAglgfAAQgfAAgBAlIAABlIgzAAIAAi2IAzAAIAAAaQAXgdAdAAQAeAAAQASQARASgBAgIAAB1g");
	this.shape_1.setTransform(134.9,241.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZB8IAAi2IAzAAIAAC2gAgahOIAAgtIA1AAIAAAtg");
	this.shape_2.setTransform(119.1,238.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhOBbIAAgkIBdhnIhaAAIAAgqICaAAIAAAkIhdBnIBdAAIAAAqg");
	this.shape_3.setTransform(104.5,242.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBBQQgSgPAAgbIAAgBQAAgdAUgOQAUgOAhABQAWgBAWAIIAAgDQAAgigmABQgYAAgaAKIgNgoQAhgPAkAAQAqAAAUAVQAUAUAAAlIAABpIgyAAIAAgTQgVAXghAAQgbAAgSgOgAghAjIAAABQAAAKAIAHQAHAFANAAQARAAALgJQAMgJAAgNIAAgKQgPgGgSgBQgjAAAAAZg");
	this.shape_4.setTransform(84.4,242.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABXBdIAAhlQAAglgeAAQgfAAAAAlIAABlIgzAAIAAhlQAAglgeAAQgfAAAAAlIAABlIg0AAIAAi2IA0AAIAAAaQAWgdAfAAQAkAAAPAdQAYgdAjAAQAeAAAQARQAQASAAAgIAAB2g");
	this.shape_5.setTransform(58.7,241.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABHB4IgVg2IhkAAIgWA2Ig1AAIBmjvIAvAAIBmDvgAAfAUIgfhMIgfBMIA+AAg");
	this.shape_6.setTransform(29,239.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(13.5,222,156.9,38), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_boat();
	this.instance.parent = this;
	this.instance.setTransform(-51,284,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-51,284,390,325.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BFQgbgbAAgpIAAgBQAAgnAZgbQAZgcAnAAQArAAAYAeQAVAbAAApIAAAOIh+AAQAIAjAjAAQAYAAAVgSIAdAaQgbAigvAAQgpAAgagagAAngOQgCgRgKgLQgKgKgQAAQggAAgHAmIBNAAIAAAAg");
	this.shape.setTransform(176.3,241.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABXBdIAAhlQAAglgeAAQgfAAAAAlIAABlIgzAAIAAhlQAAglgeAAQgfAAAAAlIAABlIg0AAIAAi2IA0AAIAAAaQAWgdAfAAQAkAAAPAdQAYgdAjAAQAeAAAQARQAQASAAAgIAAB2g");
	this.shape_1.setTransform(149.8,240.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBDQgbgbAAgnIAAgBQgBgnAcgbQAdgcApAAQAqAAAdAcQAcAbAAAnIAAAAQAAAogcAbQgdAcgqAAQgpAAgdgcgAgigjQgNAOAAAVIAAAAQAAAVANAOQAPAPATAAQAVAAAOgPQAMgNAAgVIAAgBQABgUgNgOQgPgPgUAAQgVAAgNAOg");
	this.shape_2.setTransform(122.4,241.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBDIAWgiQAeAVAbAAQAVAAAAgNIAAgBQAAgHgLgFIgZgJQgZgHgMgKQgSgNAAgYIAAAAQAAgbAUgQQASgPAcAAQAlAAAfAVIgUAkQgdgRgUAAQgSAAAAAMIAAABQAAAHALAFIAZAKQAZAIAMAJQASANAAAXIAAAAQAAAdgUAQQgTAOgfAAQgqAAgjgbg");
	this.shape_3.setTransform(102.3,241.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BFQgbgbAAgpIAAgBQAAgnAZgbQAZgcAnAAQArAAAYAeQAVAbAAApIAAAOIh+AAQAIAjAjAAQAYAAAVgSIAdAaQgbAigvAAQgpAAgagagAAngOQgCgRgKgLQgKgKgQAAQggAAgHAmIBNAAIAAAAg");
	this.shape_4.setTransform(83.6,241.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBcIgjhvIgjBvIguAAIg4i3IA0AAIAeBuIAihuIArAAIAjBuIAehuIAzAAIg4C3g");
	this.shape_5.setTransform(58.6,241.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABHB4IgVg2IhkAAIgWA2Ig1AAIBmjvIAvAAIBmDvgAAfAUIgfhMIgfBMIA+AAg");
	this.shape_6.setTransform(30.5,238.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(15,221,173.8,38), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9BFQgbgbAAgpIAAgBQAAgnAZgbQAZgcAnAAQArAAAYAeQAVAbAAApIAAAOIh+AAQAIAjAjAAQAYAAAVgSIAdAaQgbAigvAAQgpAAgagagAAngOQgCgRgKgLQgKgKgQAAQggAAgHAmIBNAAIAAAAg");
	this.shape.setTransform(181.2,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB8IAAj3IAzAAIAAD3g");
	this.shape_1.setTransform(165.7,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBjIAAAXIg0AAIAAj3IA0AAIAABcQAWgdAiAAQAiAAAXAYQAaAaAAArIAAAAQAAAsgZAaQgYAZgiAAQghAAgXgbgAgfgFQgNAOAAAWIAAAAQAAAXANAOQANAOASAAQASAAANgOQANgOAAgXIAAAAQAAgWgNgOQgNgOgSAAQgSAAgNAOg");
	this.shape_2.setTransform(149.5,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZB8IAAi1IAzAAIAAC1gAgahNIAAguIA1AAIAAAug");
	this.shape_3.setTransform(132.5,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBlQgagaAAgsIAAAAQAAgrAZgaQAYgYAiAAQAhAAAXAbIAAhaIA0AAIAAD3Ig0AAIAAgaQgWAegiAAQgiAAgXgZgAgegFQgNANAAAXIAAAAQAAAXANAOQANAOARAAQATAAANgOQANgOAAgXIAAAAQAAgWgNgOQgNgOgTAAQgRAAgNAOg");
	this.shape_4.setTransform(115.5,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BFQgbgbAAgpIAAgBQAAgnAZgbQAZgcAnAAQArAAAYAeQAVAbAAApIAAAOIh+AAQAIAjAjAAQAYAAAVgSIAdAaQgbAigvAAQgpAAgagagAAngOQgCgRgKgLQgKgKgQAAQggAAgHAmIBNAAIAAAAg");
	this.shape_5.setTransform(94,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BdIAAi2IA0AAIAAAlQARgqAoACIAAA2IgDAAQg2AAAABAIAABDg");
	this.shape_6.setTransform(77.2,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BDQgagbAAgnIAAgBQAAgnAagbQAbgcAoAAQAuAAAbAfIgfAiQgTgUgXAAQgRAAgNAOQgNAPAAAUIAAAAQAAAVANAPQANAOATAAQAWAAAUgTIAeAfQgeAhgsAAQgnAAgcgcg");
	this.shape_7.setTransform(59.9,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBdIAAhlQAAglggAAQgeAAAAAlIAABlIg1AAIAAi2IA1AAIAAAaQAWgdAeAAQAdAAARASQAQASAAAgIAAB1g");
	this.shape_8.setTransform(39.5,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZB3IAAjtIAzAAIAADtg");
	this.shape_9.setTransform(23.2,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(15.4,-7,178.3,38), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_bottom();
	this.instance.parent = this;
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,10,300,382), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AhHBBIALAAIgLAAIAAgJIAbgWIgbAAIAAgCIAZgbIgZAAIAAgCIAdgeIgdAAIAAgCIAdgfIgdgkIAAg+QAoAGAhATQAhATAWAdIgVAZIAgAhIggAAIAgAgIgbAAIAbAdIgeAAIAiAbQgSAmgmAaQgmAbgxAHgAgCA/IAjgdIgeAAIAcgdIgcAAIAgggIggAAIAgghIglgsIgBAAIgmAsIAgAhIgfAAIAfAgIgbAAIAbAdIgdAAg");
	this.shape.setTransform(113.4,730.3,0.65,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AgPB9QgmgagSgmIAigbIgeAAIAcgdIgcAAIAgggIggAAIAgghIgVgZQAWgdAhgTQAhgTAogGIAAA+IgdAkIAdAfIAAACIgdAAIAdAeIAAACIgZAAIAZAbIAAACIgbAAIAbAWIAAAJIgLAAIALAAIAABeQgxgHgmgbgAADA/IAkgdIgdAAIAbgdIgbAAIAfggIgfAAIAfghIglgsIAAAAIgmAsIAgAhIggAAIAgAgIgcAAIAcAdIgeAAg");
	this.shape_1.setTransform(99.3,730.3,0.65,0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066CC").s().p("Ai7GSIBjiaQhHgagrg2Qgsg3AAhEQAAhAAqg3QApg1BEgbQhkgVhMhOIAOgXQASgcAbgXQBUhKB/AAIAhABQA9AAAqAoQAqAnAAA4QAAAigQAdQgPAcgdATQBGAaAqA2QArA3AABBQAABEgsA3QgsA2hGAaIBjCagAAYFlIBDAdIAqg5IgshEIgXAiIgugQgAhtFJIArA5IBCgdIAEhOIgsAQIgZgigAAiDgIAJgBQBPgIA2gzQA1gzAAhEQAAhDg1gzQg2gzhPgIIgJgBgAgMiEQhPAIg1AzQg1AzAABDQAABFA1AyQA1AzBPAIIAKABIAAllgAhIirQgighgGguIgjAAQAcA1AvAaIAAAAgAgclCQgaAYAAAhQAAAiAaAYQAZAXAjAAQAkAAAagXQAZgYgBgiQABghgZgYQgagXgkAAQgjAAgZAXgAi1jfQgIgKgKgRIgTAAQAOANAXAOIAAAAgAh9k4QgQAXgHAZIAkAAIAAgBQAAg2AngmQggATgUAagAi9kwQgUARgRAXIAdAAQASgoAlggQgYAOgXASg");
	this.shape_2.setTransform(105.4,727.4,0.65,0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AgagQIA1AOIgjATg");
	this.shape_3.setTransform(101.9,749.6,0.65,0.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AgagQIA1AOIgjATg");
	this.shape_4.setTransform(102.6,747.5,0.65,0.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s().p("AgagCIA1gOIgSAhg");
	this.shape_5.setTransform(110.4,749.6,0.65,0.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066CC").s().p("AgagCIA1gOIgSAhg");
	this.shape_6.setTransform(109.7,747.5,0.65,0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066CC").s().p("AgRATQgIgJAAgKQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAAKgHAJQgIAHgLAAQgKAAgHgHg");
	this.shape_7.setTransform(107.5,709.8,0.65,0.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgBALIgHgOIAAALIAAABIABABIgBABIgDAAIgBgBIABgBIAAgBIAAgPIAAgBIgBgBIABgBIAEAAIAHAPIAHgPIAFAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIAAABIAAAPIAAABIABABIgBABIgGAAIAAgBIAAgBIABgBIAAgLIgHAOg");
	this.shape_8.setTransform(133.8,780.2,0.65,0.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("AgBALIgBgBIABgBIAAAAIAAgQIgDAAIgBAAIgBABIgCABIgBgBIAAgCIABgBIACgBIANAAIACABIAAABIAAACIAAABIgCgBIgBgBIgBAAIgDAAIAAAQIAAAAIABABIgBABg");
	this.shape_9.setTransform(132.2,780.2,0.65,0.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066CC").s().p("AgKBEQgMAAgNgEIgJgaIABgDQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQADABABADQAFALAIAEQAHADAKAAIAGAAQAFgBAFgCQAHgDADgGQAEgGAAgJIAAgBQAAgJgHgFQgDgCgHgCQgGgCgJgBQgMgCgHgDQgJgDgEgIQgEgIAAgJQAAgQAMgNQANgLASAAIADAAQAUABAPAKIABAAIgDAUQAAADgEAAIAAAAQgDAAgCgEQgDgHgHgFQgHgGgHAAIgBAAQgHAAgFACIgHAFIgDAFIgCAGIgBAGIABAGQACAFADADIAGADIAGABIARADIANADQAIADAEAEIAGAJQACAEAAAJQAAATgQAOQgHAGgKADIgOAEg");
	this.shape_10.setTransform(127.7,783.4,0.65,0.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066CC").s().p("AAdBAQgCAAgGgHIglg0IgKAAIAAAsQAAAFAEABQAFACAAADQAAAEgEAAIgeAAQgFAAAAgEQAAgDAFgCQAEgBAAgFIAAhhQAAgEgEgCQgFgBAAgEQAAgEAFAAIAzAAQAIAAAMADQAKAEAGAKQAFAIAAALQAAALgGAIQgFAHgJACQgIAEgDAAIAmAxIAEACQAFAAAAAEQAAAEgEAAgAgagEIASAAIAKgCQAFgBAFgEQAHgHAAgKQAAgKgHgHQgHgGgLAAIgUAAg");
	this.shape_11.setTransform(117.3,783.4,0.65,0.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066CC").s().p("AgWA/QgLgDgHgIQgLgOAAgdIAAg7QAAgEgEgBQgFgCAAgEQAAgEAEAAIAeAAQAFAAAAAEQAAAEgFACQgEABAAAEIABBGQABALADAGQADAGAHAEQAHADAMAAQAVAAAIgQQAGgMAAgZIAAgvQAAgEgEgBQgFgCAAgEQAAgEAEAAIAXAAQAEAAAAAEQAAAEgEACQgFABAAAEIAAA7QAAAOgCAKQgDAMgGAHQgLAOgaAAQgOAAgMgDg");
	this.shape_12.setTransform(105,783.5,0.65,0.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066CC").s().p("AgDBDQgbAAgTgRQgUgSAAgcIAAgEQABgdATgTQATgSAegBIABAAQAeABAUARQATASAAAbIAAAEQgCAfgUASQgUARgcABgAgjgmQgKAQAAAXQAAAWANARQANAQATAAIAAAAQAUAAANgRQANgQAAgWIAAAAQAAgVgLgSQgLgRgYAAQgZABgKAQg");
	this.shape_13.setTransform(92.2,783.4,0.65,0.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066CC").s().p("AgOBAQgEAAAAgEQAAgDAEgCQAFgBAAgFIAAhkIgVAAQgEAAgCADIgHAJQgDAFgDAAQgFAAABgEIAAgRQgBgFADgCQADgBAHAAIBSAAIALABQACABABAGIAAARQgBAEgEAAQgCAAgDgFIgIgJQgCgDgFAAIgTAAIAABkQAAAFAEABQAEACAAADQAAAEgEAAg");
	this.shape_14.setTransform(80.3,783.4,0.65,0.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066CC").s().p("Ag2BiIgOgmIAAgDIACgDQACgEAEAAQAEACADAFQAHARAMAGQAMAFAOAAIAJgBQAIgBAJgDQAIgFAGgKQAGgJAAgNIAAgCQAAgNgKgIQgEgDgLgDQgKgDgPgBQgNgCgPgGQgOgGgGgMQgGgLAAgOQAAgbATgRQATgSAcAAIAEAAQAgACAWAPIABAAIgEAeQAAAGgGgBIgBAAQgDAAgEgFQgFgMgKgIQgJgHgNgBIgCAAQgKAAgHAEQgHADgEADQgDAEgDAEQgCAFAAAFIgBAJIABAIQADAIAFAFIAKAEIAJACIAJACIAQADIAUAEQAKAEAHAHQAGAFAEAJQAEAHAAAMQAAAfgYATQgNALgOAFQgOAEgIAAIgLAAQgTAAgUgFg");
	this.shape_15.setTransform(169.8,765.3,0.65,0.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AhhBdQAAgGAHgCQAHgCAAgHIAAiWQAAgIgHgBQgHgDAAgGQAAgFAHgBIA2AAIArABQAXACAUAJQAUAIANASQAPAWAAAkQAAAWgKAUQgIATgTAPQggAZgsgBIg9AAIgOABQgHAAAAgGgAgyhPIAACeQAOACAPAAIALAAQArgDATgkQAKgTAAgaIAAgFQgCgogYgSQgUgPggAAIgEAAQgSAAgMACg");
	this.shape_16.setTransform(157.2,765.4,0.65,0.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066CC").s().p("AAsBhQgDABgJgLIg5hQIgQAAIAABEQAAAHAHACQAHADAAAFQAAAFgHAAIgtAAQgHAAAAgFQABgGAGgCQAHgCAAgHIAAiVQAAgGgHgDQgGgCgBgGQAAgGAHAAIBPAAQAPABAPAEQAPAFAKAQQAHANAAAQQAAAPgJAOQgIAKgMAEQgNAGgFAAIA5BMQAEACAEABQAGAAABAFIAAABQgBAFgGAAgAgpgHIAcAAQALAAAFgDQAJgCAGgGQALgKgBgQQAAgPgKgKQgKgLgSAAIgfAAg");
	this.shape_17.setTransform(143.9,765.4,0.65,0.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0066CC").s().p("AgGBnQgnAAgegbQgegbAAgsIAAgFQABguAdgcQAegbAtgBIABAAQAtAAAfAcQAdAaAAAqIAAAGQgCAvgfAbQgfAagqADgAg2g7QgQAYAAAkQAAAjAUAZQATAYAfABIAAAAQAeAAAUgaQAUgaAAggIAAgBQAAgggRgbQgQgaglAAQgmAAgQAZg");
	this.shape_18.setTransform(129.4,765.3,0.65,0.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0066CC").s().p("AgfB9IAAgNQAHgEADgEQAFgGACgGQACgFgBgKIAAizQAAgGgGgDQgHgCAAgFQAAgGAGAAIAuAAQAGAAAAAGQAAAFgHACQgGADAAAGIAACRQgBAZgDAPQgDAOgKAKQgNANgUAFg");
	this.shape_19.setTransform(118.2,767.2,0.65,0.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0066CC").s().p("Ag8BhQgHAAAAgFQAAgDAFgDIAEgDIAEgEIABgEIAAiVQAAgHgHgCQgHgDAAgFQAAgGAHAAICAAAIAAAmQAAAGgHAAQgDAAgFgHIgLgNQgEgFgHAAIg0AAIAABDIAaAAQAEAAADgDIAEgHQACgEAEAAQAHAAAAAGIAAAiQAAAFgHAAQgEAAgDgEIgEgHQgCgCgEgBIgaAAIAABFIABAFIADAEIAEACQAFADAAADIAAACQgCADgEAAg");
	this.shape_20.setTransform(110,765.4,0.65,0.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0066CC").s().p("AgWBhQgHAAABgFQAAgFAGgDQAHgCAAgHIAAiVQAAgHgHgCQgGgDAAgFQAAgGAGAAIAtAAQAGAAAAAGQABAFgIADQgGACAAAHIAACVQAAAHAGACQAIADgBAFQAAAFgGAAg");
	this.shape_21.setTransform(94.9,765.4,0.65,0.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0066CC").s().p("AA1BjIgEgBIgEgDIAAgDIACgDIAFgFIABgDIgBgDIgTgsIhIAAIgUAvIAAAEIACADIAAACIABADIgBACQgBAEgFAAIgjAAQgFAAAAgEIAAgCQABgEAEgCIAKgEQAEgDACgEIBOiuIAMAAIAAAAIBMCuQAAADAFAEIAMAGIADADIAAADIAAACQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAgAAZAQIgchEIgdBEIA5AAg");
	this.shape_22.setTransform(84.1,765.3,0.65,0.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0066CC").s().p("ABWBlIgegHIAAAAIh6iYIAACBQAAAHAHACQAHADAAAFQAAAGgHAAIgiAAQgGAAAAgGQAAgFAGgDQAHgBAAgIIAAiVQAAgGgHgDQgGgCAAgFQAAgGAGAAIAlAAIB6CZIAAiDQAAgGgGgDQgHgCAAgFQAAgGAGAAIAiAAQAIAAAAAGQAAAFgIACQgGADAAAGIgBCzg");
	this.shape_23.setTransform(69.1,765.6,0.65,0.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0066CC").s().p("AhBBhQgGAAAAgFQAAgFAHgDQAGgCAAgHIAAiVQAAgHgGgCQgHgDAAgFQAAgGAGAAICBAAIAAAmQgBAGgGAAQgDAAgGgHIgKgNQgFgFgFAAIg1AAIAABDIAaAAQAGAAACgHQADgHAGAAQAHAAgBAGIAAAiQABAFgHAAQgGAAgDgHQgDgGgGgBIgZAAIAABJIA1AAQAKAAAIgJIAMgPQAEgEADAAQAHABAAAFIAAAEIgLAkg");
	this.shape_24.setTransform(55.6,765.4,0.65,0.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("AAnBhQgGAAAAgFQAAgCACgDIABgBIgDgFIhOhIIAABCQAAAHAHACQAHADAAAFQAAAFgHAAIgtAAQgHAAAAgFQAAgFAHgDQAGgCAAgHIAAiVQAAgHgGgCQgHgDAAgFQAAgGAHAAIAtAAQAHAAAAAGQAAAFgHADQgHACAAAHIAAA9IBQhNQAHgHAFAAQAFAAADACIAPAHQAEACAAADIgBADIgIAYIgNgGIgJgCQgFAAgEAFIgzAyIBiBbIAGAEQAEADAAADQAAAFgGAAg");
	this.shape_25.setTransform(42.9,765.4,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(37,701.3,137.3,86.5), null);


(lib.galcier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_glacier();
	this.instance.parent = this;
	this.instance.setTransform(0,340);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.galcier, new cjs.Rectangle(0,340,300,250), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAoIgSgzIgRAzIgPAAIgbhPIATAAIAQA1IASg1IAOAAIARA1IARg1IASAAIgbBPg");
	this.shape.setTransform(43.1,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRIAAAAQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgSAAgLgMgAgRgRQgGAHAAAKQAAAKAHAHQAGAIAKAAQAKAAAHgIQAHgHAAgKIAAAAQAAgJgHgIQgHgHgKAAQgJAAgIAHg");
	this.shape_1.setTransform(32,65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAnIgmgwIAAAwIgRAAIAAhOIAQAAIAkAwIAAgwIARAAIAABOg");
	this.shape_2.setTransform(22.8,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPAnIgYghIgJAJIAAAYIgRAAIAAhOIARAAIAAAjIAfgjIAVAAIggAiIAiAsg");
	this.shape_3.setTransform(11.3,65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRIAAAAQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgSAAgLgMgAgRgRQgGAHAAAKQAAAKAHAHQAGAIAKAAQAKAAAHgIQAGgHABgKIAAAAQgBgJgGgIQgHgHgKAAQgJAAgIAHg");
	this.shape_4.setTransform(2,65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRIAAAAQAAgQAMgMQAMgMARAAQASAAAMAMQAMAMAAAQQAAARgMAMQgMAMgSAAQgRAAgMgMgAgQgRQgHAHAAAKQAAAKAHAHQAHAIAJAAQAKAAAHgIQAGgHAAgKIAAAAQAAgJgGgIQgHgHgKAAQgKAAgGAHg");
	this.shape_5.setTransform(-7.6,65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAnIAAhOIAjAAQANABAHAGQAGAGAAAIQAAAMgLAFQAQAFgBAOIAAAAQABALgJAFQgHAFgOAAgAgPAYIATAAQAMAAAAgJQABgIgNAAIgTAAgAgPgGIAPAAQAMAAAAgJQAAgIgMAAIgPAAg");
	this.shape_6.setTransform(-16.3,65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F58F35").s().p("An0CNIAAkZIPpAAIAAEZg");
	this.shape_7.setTransform(14.5,64.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-35.6,50.4,100.2,28.2), null);


// stage content:
(lib._300x250_kenai45 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(254.1,-110.8,0.48,0.48,0,0,0,105.7,66.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).wait(269));

	// Layer_9
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,-148.4,1,1,0,0,0,62.5,12.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200).to({_off:false},0).wait(1).to({regX:62.4,regY:218.1,x:150,y:57.1,alpha:0.003},0).wait(1).to({y:57.3,alpha:0.013},0).wait(1).to({y:57.6,alpha:0.032},0).wait(1).to({y:58.3,alpha:0.063},0).wait(1).to({y:59.2,alpha:0.109},0).wait(1).to({y:60.5,alpha:0.176},0).wait(1).to({y:62.4,alpha:0.27},0).wait(1).to({y:64.9,alpha:0.394},0).wait(1).to({y:67.7,alpha:0.533},0).wait(1).to({y:70.2,alpha:0.659},0).wait(1).to({y:72.2,alpha:0.759},0).wait(1).to({y:73.7,alpha:0.834},0).wait(1).to({y:74.8,alpha:0.889},0).wait(1).to({y:75.6,alpha:0.929},0).wait(1).to({y:76.2,alpha:0.958},0).wait(1).to({y:76.6,alpha:0.978},0).wait(1).to({y:76.8,alpha:0.991},0).wait(1).to({y:77,alpha:0.998},0).wait(1).to({regX:62.5,regY:12.7,x:150.1,y:-128.4,alpha:1},0).wait(66));

	// Layer_8
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,-201.3,1,1,0,0,0,101.9,19.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,-217,1,1,0,0,0,106,40.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({y:-171.3,alpha:1},15,cjs.Ease.get(1)).wait(38).to({regX:101.5,regY:238.4,x:149.6,y:47.5,alpha:0.993},0).wait(1).to({y:48.2,alpha:0.97},0).wait(1).to({y:49.7,alpha:0.922},0).wait(1).to({y:52.2,alpha:0.836},0).wait(1).to({y:56.5,alpha:0.695},0).wait(1).to({y:62.3,alpha:0.499},0).wait(1).to({y:67.8,alpha:0.315},0).wait(1).to({y:71.7,alpha:0.186},0).wait(1).to({y:74.2,alpha:0.104},0).wait(1).to({y:75.7,alpha:0.052},0).wait(1).to({y:76.7,alpha:0.021},0).wait(1).to({y:77.2,alpha:0.005},0).wait(1).to({regX:101.9,regY:19.8,x:150,y:-141.3,alpha:0},0).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(196).to({_off:false},0).wait(1).to({regY:277.4,y:20.4,alpha:0.005},0).wait(1).to({y:21,alpha:0.022},0).wait(1).to({y:22,alpha:0.056},0).wait(1).to({y:23.7,alpha:0.113},0).wait(1).to({y:26.4,alpha:0.204},0).wait(1).to({y:30.5,alpha:0.341},0).wait(1).to({y:35.7,alpha:0.514},0).wait(1).to({y:40.5,alpha:0.674},0).wait(1).to({y:44.1,alpha:0.792},0).wait(1).to({y:46.5,alpha:0.873},0).wait(1).to({y:48.1,alpha:0.927},0).wait(1).to({y:49.2,alpha:0.963},0).wait(1).to({y:49.8,alpha:0.985},0).wait(1).to({y:50.2,alpha:0.997},0).wait(1).to({regY:40.1,y:-187,alpha:1},0).wait(74));

	// texty
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,57.7,1,1,0,0,0,104.5,19.8);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.2,-201.3,1,1,0,0,0,92,19.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({regX:105.3,regY:10,x:150.8,y:48.1,alpha:0.993},0).wait(1).to({y:49.1,alpha:0.97},0).wait(1).to({y:51,alpha:0.922},0).wait(1).to({y:54.4,alpha:0.836},0).wait(1).to({y:60.1,alpha:0.695},0).wait(1).to({y:67.9,alpha:0.499},0).wait(1).to({y:75.2,alpha:0.315},0).wait(1).to({y:80.4,alpha:0.186},0).wait(1).to({y:83.7,alpha:0.104},0).wait(1).to({y:85.8,alpha:0.052},0).wait(1).to({y:87,alpha:0.021},0).wait(1).to({y:87.7,alpha:0.005},0).wait(1).to({regX:104.5,regY:19.8,x:150,y:97.7,alpha:0},0).to({_off:true},1).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).wait(1).to({regX:91.2,regY:241.6,x:147.4,y:20.6,alpha:0.004},0).wait(1).to({y:21.1,alpha:0.019},0).wait(1).to({y:21.9,alpha:0.048},0).wait(1).to({y:23.4,alpha:0.096},0).wait(1).to({y:25.6,alpha:0.171},0).wait(1).to({y:29,alpha:0.284},0).wait(1).to({y:33.6,alpha:0.437},0).wait(1).to({y:38.5,alpha:0.599},0).wait(1).to({y:42.4,alpha:0.731},0).wait(1).to({y:45.3,alpha:0.826},0).wait(1).to({y:47.3,alpha:0.892},0).wait(1).to({y:48.6,alpha:0.938},0).wait(1).to({y:49.5,alpha:0.968},0).wait(1).to({y:50.1,alpha:0.987},0).wait(1).to({y:50.4,alpha:0.997},0).wait(1).to({regX:92,regY:19.8,x:148.2,y:-171.3,alpha:1},0).wait(51).to({regX:91.2,regY:241.6,x:147.4,y:50.7,alpha:0.993},0).wait(1).to({y:51.4,alpha:0.97},0).wait(1).to({y:52.9,alpha:0.922},0).wait(1).to({y:55.4,alpha:0.836},0).wait(1).to({y:59.7,alpha:0.695},0).wait(1).to({y:65.5,alpha:0.499},0).wait(1).to({y:71,alpha:0.315},0).wait(1).to({y:74.9,alpha:0.186},0).wait(1).to({y:77.4,alpha:0.104},0).wait(1).to({y:78.9,alpha:0.052},0).wait(1).to({y:79.9,alpha:0.021},0).wait(1).to({y:80.4,alpha:0.005},0).wait(1).to({regX:92,regY:19.8,x:148.2,y:-141.3,alpha:0},0).wait(82));

	// butt
	this.instance_6 = new lib.cta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,188.5,1,1,0,0,0,110,27.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},20,cjs.Ease.get(1)).wait(265));

	// whiteshit
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,135.1,1,0.614,0,0,0,150,191.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(285));

	// Layer_7
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,-61.5,0.97,0.97,0,0,0,150,285.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({_off:false},0).to({regX:150.1,regY:285.5,scaleX:0.99,scaleY:0.99,x:150.1,y:-64.5,alpha:1},12).to({regX:150,scaleX:1.09,scaleY:1.09,y:-74.5},154).wait(1));

	// Layer_6
	this.instance_9 = new lib.whale();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,-50,1,1,0,0,0,150,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,y:-52.3,alpha:1},13).to({scaleX:1.1,scaleY:1.1,y:-63},59).wait(154));

	// Layer_2
	this.instance_10 = new lib.galcier();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,-83.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.04,scaleY:1.04},31).to({regY:266.4,scaleX:1.05,scaleY:1.05,x:150.1,y:-83.6},4).to({regY:266.5,scaleX:1.1,scaleY:1.1,x:150,y:-83.5},37).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,115,300,268.4);
// library properties:
lib.properties = {
	id: '644DE44FDD594B418D5533437E2D54D4',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_bottom.png", id:"db_bottom"},
		{src:"images/300x250_kenai45_atlas_NP_.jpg", id:"300x250_kenai45_atlas_NP_"}
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
an.compositions['644DE44FDD594B418D5533437E2D54D4'] = {
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