(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_kenai45_atlas_NP_", frames: [[602,0,300,600],[0,0,600,1200],[602,602,300,600]]}
];


// symbols:



(lib.db_bottom = function() {
	this.initialize(img.db_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,382);


(lib.db_glacier = function() {
	this.spriteSheet = ss["300x600_kenai45_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_ship = function() {
	this.spriteSheet = ss["300x600_kenai45_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_whale = function() {
	this.spriteSheet = ss["300x600_kenai45_atlas_NP_"];
	this.gotoAndStop(2);
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


(lib.whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_whale();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whale, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59E39").s().p("AAWBKQgLgNAAgRIAAgBQAAgSALgNQAMgMASAAQASAAALAMQALANAAARIAAABQAAASgLAMQgMANgSAAQgSAAgLgMgAAoAcQgEAGAAAIIAAABQAAAJAEAGQAFAGAHAAQAHAAAEgGQAEgGAAgIIAAgBQAAgJgEgGQgFgGgHAAQgHAAgEAGgAhLBUIBEhaIA2hNIAdAAIhEBZIg2BOgAhQgMQgLgMAAgRIAAgBQAAgSALgMQAMgNASAAQARAAAMANQALALAAATIAAAAQAAASgLAMQgMAMgSAAQgSAAgLgMgAg+g5QgEAGAAAJIAAAAQAAAJAEAGQAFAGAHAAQAHAAAEgGQAEgGAAgIIAAgBQAAgJgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape.setTransform(112.5,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F59E39").s().p("Ag1A+QgUgYAAglIAAgBQAAgkAUgYQAVgaAhAAQAgAAAVAZQAVAYgBAlIAAAAQABAlgVAZQgVAZghAAQggAAgVgZgAgZgmQgLAPABAXIAAAAQgBAYALAOQAKAQAQAAQAQAAAKgQQAKgPAAgWIAAgBQAAgWgKgPQgLgPgQAAQgPgBgKAPg");
	this.shape_1.setTransform(93.5,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59E39").s().p("AABBVIAAiDIgdAHIgIgfIAwgNIAZAAIAACog");
	this.shape_2.setTransform(78.8,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59E39").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_3.setTransform(59.8,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59E39").s().p("AgQBVIhDioIAoAAIArB1IAsh1IAoAAIhDCog");
	this.shape_4.setTransform(42.4,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59E39").s().p("AAyBVIgPgmIhGAAIgPAmIgmAAIBIioIAhAAIBICogAAWAOIgWg1IgWA1IAsAAg");
	this.shape_5.setTransform(26.9,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F59E39").s().p("AhCA7IAXgaQAYAVAYAAQAZAAAAgQIAAAAQAAgIgHgEQgGgFgUgFQgdgIgLgIQgPgLgBgXIAAgBQAAgWARgOQARgOAZgBQAjAAAaAWIgTAcQgXgRgUAAQgJAAgGAEQgGAFAAAGIAAAAQAAAIAIAFQAGADAVAHQAcAHALAJQAOAMAAAVIAAABQAAAYgRAOQgQANgcAAQgoAAgfgbg");
	this.shape_6.setTransform(9.6,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,124.9,28), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABtIAAjVIA9AAIAAArQAUgxAwACIAAA/IgEAAQhAAAAABLIAABPg");
	this.shape.setTransform(202.4,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBRQgfgfAAgxIAAgBQAAguAdggQAfghAtAAQAzAAAcAkQAZAgAAAwIgBAQIiUAAQAKAqApAAQAdAAAXgWIAjAfQggAog4AAQgvAAgggfgAAugQQgDgVgLgMQgNgNgSAAQgmAAgIAuIBbAAIAAAAg");
	this.shape_1.setTransform(180.9,68.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSB4QgeggAAgzIAAgBQAAgyAegfQAcgcAogBQAnAAAbAhIAAhqIA9AAIAAEjIg9AAIAAgfQgaAjgoAAQgoAAgcgcgAgjgGQgQAQAAAaIAAABQAAAaAQARQAPAQAVABQAVgBAPgQQAQgRAAgaIAAgBQAAgagQgPQgPgRgVAAQgVAAgPAQg");
	this.shape_2.setTransform(154.7,64.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBtIAAh2QAAgsglAAQglAAAAAsIAAB2Ig9AAIAAjVIA9AAIAAAeQAbgiAjAAQAiAAATAVQATAVAAAlIAACKg");
	this.shape_3.setTransform(129.3,68.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSBPQghggAAguIAAgBQAAguAhggQAighAwAAQAxAAAiAhQAhAgAAAuIAAAAQAAAvgiAgQghAhgxAAQgxAAghghgAgpgpQgOARAAAYIAAAAQAAAYAQARQAQASAXAAQAZAAAQgRQAPgRAAgYIAAgBQAAgXgQgRQgQgSgYAAQgZAAgQARg");
	this.shape_4.setTransform(103.6,68.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApBsIgpiCIgpCCIg3AAIhCjXIA+AAIAiCBIApiBIAzAAIApCCIAjiCIA9AAIhDDXg");
	this.shape_5.setTransform(73.1,68.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqCTIAAihIgYAAIAAgyIAYAAIAAgOQABgiARgSQARgQAfAAQAYAAAUAFIAAAzQgPgFgNAAQgXAAAAAXIAAAIIAyAAIAAAyIgxAAIAAChg");
	this.shape_6.setTransform(36.6,64.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhSBPQghggAAguIAAgBQAAguAhggQAighAwAAQAxAAAiAhQAhAgAAAuIAAAAQAAAvgiAgQghAhgxAAQgxAAghghgAgpgpQgOARAAAYIAAAAQAAAYAQARQAQASAXAAQAZAAAQgRQAPgRAAgYIAAgBQAAgXgQgRQgQgSgYAAQgZAAgQARg");
	this.shape_7.setTransform(15.4,68.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWBOIAagoQAjAaAfAAQAaAAAAgQIAAgBQAAgJgOgFQgEgDgZgIQgdgIgPgMQgUgPAAgcIAAgBQAAgfAWgTQAXgSAgAAQArAAAlAZIgXAqQgigUgYAAQgWAAABAPIAAAAQgBAIANAHIAeALQAdAKAPALQAVAQAAAaIAAABQAAAigYASQgWARgkAAQgyAAgpghg");
	this.shape_8.setTransform(182.5,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABtIAAjVIA9AAIAAArQAUgxAwACIAAA/IgEAAQhAAAAABLIAABPg");
	this.shape_9.setTransform(165.2,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhMBdQgVgRgBgfIAAgBQAAgiAZgRQAWgQAogBQAZABAaAIIAAgDQAAgogtAAQgbAAggANIgPgvQAngRArAAQAxAAAYAXQAWAYAAAtIAAB8Ig6AAIAAgYQgYAbgoAAQgfABgVgSgAgnAqIAAABQAAAMAKAHQAIAGAPABQAVAAANgLQANgLAAgQIAAgLQgSgIgVAAQgpAAAAAeg");
	this.shape_10.setTransform(143.7,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhIBRQgggfAAgxIAAgBQAAguAeggQAeghAtAAQAyAAAdAkQAZAgAAAwIAAAQIiVAAQAKAqAqAAQAcAAAYgWIAiAfQggAog3AAQgwAAgfgfgAAugQQgDgVgMgMQgLgNgTAAQgmAAgHAuIBaAAIAAAAg");
	this.shape_11.setTransform(120.1,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AheB9IAUgsQAOAJAMAAQAPAAAGgOIhUjXIBBAAIAwCRIAuiRIBAAAIhTDbQgMAhgQANQgOAOgbAAQgdAAgZgPg");
	this.shape_12.setTransform(95.9,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhpBlIAmgtQAhAeAiAAQAUAAANgKQAMgKAAgSIAAgBQAAgSgOgKQgNgKgVAAQgXAAgYAKIgkgXIAIiJICrAAIAAA2Ih2AAIgDAwQATgFARAAQArAAAaAVQAdAXAAAsIAAACQAAAsgdAaQgdAagwAAQg9AAgsgpg");
	this.shape_13.setTransform(59,20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZCNIAAg8IiHAAIgKgsICYixIA0AAIAACqIAmAAIAAAzIgmAAIAAA8gAgwAeIBJAAIAAhWg");
	this.shape_14.setTransform(32.6,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,212,89), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlB3IAVgtQAjATAlAAQA9AAAAg6IAAgLQgeAjgnAAQgoAAgbgaQgdgcAAgtIAAgBQAAguAdgcQAcgaAnAAQAnAAAdAgIAAgcIA9AAIAAClQAAA6gcAbQgdAdg+AAQg1AAgqgXgAgkhMQgPAOAAAVIAAABQAAAWAPAOQAPANAVAAQAWAAAQgNQAPgOAAgWIAAgBQAAgVgPgOQgQgOgWAAQgVAAgPAOg");
	this.shape.setTransform(167.8,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBtIAAh2QAAgsglAAQglAAAAAsIAAB2Ig9AAIAAjVIA9AAIAAAeQAbgiAjAAQAiAAATAVQATAVAAAlIAACKg");
	this.shape_1.setTransform(142.4,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdCSIAAjWIA8AAIAADWgAgfhbIAAg2IA/AAIAAA2g");
	this.shape_2.setTransform(123.9,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcBrIAAgrIBuh5IhrAAIAAgxIC2AAIAAArIhuB5IBuAAIAAAxg");
	this.shape_3.setTransform(106.7,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBdQgWgRABgfIAAgBQAAgiAXgRQAXgQAogBQAaABAZAIIAAgDQAAgogtAAQgbAAggANIgPgvQAngRArAAQAwAAAYAXQAYAYAAAtIAAB8Ig8AAIAAgYQgYAbgnAAQggABgUgSgAgnAqIAAABQAAAMAJAHQAKAGAOABQAVAAANgLQANgLAAgQIAAgLQgSgIgVAAQgpAAAAAeg");
	this.shape_4.setTransform(83,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABnBtIAAh2QAAgsgkAAQgkAAAAAsIAAB2Ig8AAIAAh2QAAgsgkAAQglAAAAAsIAAB2Ig9AAIAAjVIA9AAIAAAeQAbgiAkAAQAqAAASAiQAdgiApAAQAiAAATAUQAUAUAAAnIAACKg");
	this.shape_5.setTransform(52.8,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABUCNIgZg/Ih2AAIgZA/Ig/AAIB3kZIA5AAIB4EZgAAkAYIgkhaIglBaIBJAAg");
	this.shape_6.setTransform(17.9,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,183.9,44), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_ship();
	this.instance.parent = this;
	this.instance.setTransform(0,5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,5,300,600), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBRQgggfAAgxIAAgBQAAguAeggQAeghAtAAQAyAAAdAkQAZAgAAAwIAAAQIiVAAQAKAqAqAAQAcAAAYgWIAiAfQggAog3AAQgwAAgfgfgAAugQQgDgVgMgMQgLgNgTAAQgmAAgHAuIBaAAIAAAAg");
	this.shape.setTransform(189.4,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABnBtIAAh2QAAgsgkAAQgkAAAAAsIAAB2Ig8AAIAAh2QAAgsgkAAQglAAAAAsIAAB2Ig9AAIAAjVIA9AAIAAAeQAbgiAkAAQAqAAASAiQAdgiApAAQAiAAATAUQAUAUAAAnIAACKg");
	this.shape_1.setTransform(158.3,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSBPQghggAAguIAAgBQAAguAhggQAighAwAAQAxAAAiAhQAhAgAAAuIAAAAQAAAvgiAgQghAhgxAAQgxAAghghgAgpgpQgOARAAAYIAAAAQAAAYAPARQARASAXAAQAZAAAQgRQAPgRAAgYIAAgBQAAgXgQgRQgQgSgYAAQgZAAgQARg");
	this.shape_2.setTransform(126,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWBOIAagoQAjAaAfAAQAaAAAAgQIAAgBQAAgJgNgFQgFgDgagIQgcgIgOgMQgVgPAAgcIAAgBQAAgfAXgTQAVgSAhAAQAsAAAkAZIgXAqQgigUgYAAQgVAAgBAPIAAAAQAAAIAOAHIAdALQAdAKAPALQAVAQAAAaIAAABQAAAigYASQgWARgkAAQgyAAgpghg");
	this.shape_3.setTransform(102.4,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBRQgggfAAgxIAAgBQAAguAdggQAfghAtAAQAzAAAcAkQAZAgAAAwIgBAQIiUAAQAJAqArAAQAcAAAXgWIAjAfQggAog4AAQgvAAgfgfgAAugQQgDgVgMgMQgLgNgTAAQgmAAgHAuIBaAAIAAAAg");
	this.shape_4.setTransform(80.3,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApBsIgpiCIgpCCIg3AAIhCjXIA+AAIAiCBIApiBIAzAAIApCCIAjiCIA9AAIhDDXg");
	this.shape_5.setTransform(50.9,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABUCNIgZg/Ih2AAIgZA/Ig/AAIB3kZIA5AAIB4EZgAAkAYIgkhaIglBaIBJAAg");
	this.shape_6.setTransform(17.9,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,203.8,44), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBRQgggfAAgxIAAgBQAAguAdggQAfghAtAAQAyAAAdAkQAZAgAAAwIgBAQIiUAAQAJAqArAAQAcAAAXgWIAjAfQggAog3AAQgwAAgfgfgAAugQQgDgVgMgMQgMgNgSAAQglAAgIAuIBaAAIAAAAg");
	this.shape.setTransform(194.7,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeCSIAAkjIA9AAIAAEjg");
	this.shape_1.setTransform(176.5,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzB0IAAAcIg9AAIAAkjIA9AAIAABtQAagkAoAAQAoABAcAcQAeAfAAAyIAAABQAAAzgeAgQgcAcgoAAQgnAAgbgggAgkgFQgQAPAAAaIAAABQAAAaAQARQAPARAVAAQAVgBAPgQQAQgQAAgbIAAgBQAAgagQgPQgPgRgVAAQgVAAgPARg");
	this.shape_2.setTransform(157.4,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeCSIAAjWIA8AAIAADWgAgfhbIAAg2IA/AAIAAA2g");
	this.shape_3.setTransform(137.5,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSB4QgeggAAgzIAAgBQAAgyAegfQAcgcAogBQAnAAAbAhIAAhqIA9AAIAAEjIg9AAIAAgfQgaAjgoAAQgoAAgcgcgAgjgGQgQAQAAAaIAAABQAAAaAQARQAPARAVAAQAVAAAPgRQAQgRAAgaIAAgBQAAgagQgPQgPgRgVAAQgVAAgPAQg");
	this.shape_4.setTransform(117.4,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBRQgggfAAgxIAAgBQAAguAdggQAfghAtAAQAyAAAdAkQAZAgAAAwIgBAQIiUAAQAJAqArAAQAcAAAXgWIAjAfQggAog3AAQgwAAgfgfgAAugQQgDgVgMgMQgLgNgTAAQglAAgIAuIBaAAIAAAAg");
	this.shape_5.setTransform(92.1,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABtIAAjVIA9AAIAAArQAUgxAwACIAAA/IgEAAQhAAAAABLIAABPg");
	this.shape_6.setTransform(72.4,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBPQggggABguIAAgBQgBguAgggQAgghAvAAQA2AAAhAkIgmAoQgWgXgbAAQgVAAgPARQgPARAAAYIAAAAQAAAZAPARQAPARAYAAQAZAAAYgXIAkAkQgkAog0AAQgvAAggghg");
	this.shape_7.setTransform(52.1,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBtIAAh2QAAgsglAAQglAAAAAsIAAB2Ig9AAIAAjVIA9AAIAAAeQAbgiAjAAQAiAAATAVQATAVAAAlIAACKg");
	this.shape_8.setTransform(28,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeCMIAAkXIA9AAIAAEXg");
	this.shape_9.setTransform(8.8,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,209.1,44), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_bottom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,382), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBBIALAAIgLAAIAAgJIAbgWIgbAAIAAgCIAZgbIgZAAIAAgCIAdgeIgdAAIAAgCIAdgfIgdgkIAAg+QAoAGAhATQAhATAWAdIgVAZIAgAhIggAAIAgAgIgbAAIAbAdIgeAAIAiAbQgSAmgmAaQgmAbgxAHgAgCA/IAjgdIgeAAIAcgdIgcAAIAgggIggAAIAgghIglgsIgBAAIgmAsIAgAhIgfAAIAfAgIgbAAIAbAdIgdAAg");
	this.shape.setTransform(117.6,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPB9QgmgagSgmIAigbIgeAAIAcgdIgcAAIAgggIggAAIAgghIgVgZQAWgdAhgTQAhgTAogGIAAA+IgdAkIAdAfIAAACIgdAAIAdAeIAAACIgZAAIAZAbIAAACIgbAAIAbAWIAAAJIgLAAIALAAIAABeQgxgHgmgbgAADA/IAkgdIgdAAIAbgdIgbAAIAfggIgfAAIAfghIglgsIAAAAIgmAsIAgAhIggAAIAgAgIgcAAIAcAdIgeAAg");
	this.shape_1.setTransform(95.9,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai7GSIBjiaQhHgagrg2Qgsg3AAhEQAAhAAqg3QApg1BEgbQhkgVhMhOIAOgXQASgcAbgXQBUhKB/AAIAhABQA9AAAqAoQAqAnAAA4QAAAigQAdQgPAcgdATQBGAaAqA2QArA3AABBQAABEgsA3QgsA2hGAaIBjCagAAYFlIBDAdIAqg5IgshEIgXAiIgugQgAhtFJIArA5IBCgdIAEhOIgsAQIgZgigAAiDgIAJgBQBPgIA2gzQA1gzAAhEQAAhDg1gzQg2gzhPgIIgJgBgAgMiEQhPAIg1AzQg1AzAABDQAABFA1AyQA1AzBPAIIAKABIAAllgAhIirQgighgGguIgjAAQAcA1AvAaIAAAAgAgclCQgaAYAAAhQAAAiAaAYQAZAXAjAAQAkAAAagXQAZgYgBgiQABghgZgYQgagXgkAAQgjAAgZAXgAi1jfQgIgKgKgRIgTAAQAOANAXAOIAAAAgAh9k4QgQAXgHAZIAkAAIAAgBQAAg2AngmQggATgUAagAi9kwQgUARgRAXIAdAAQASgoAlggQgYAOgXASg");
	this.shape_2.setTransform(105.2,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgagQIA1AOIgjATg");
	this.shape_3.setTransform(99.9,74.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgagQIA1AOIgjATg");
	this.shape_4.setTransform(100.9,71.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgagCIA1gOIgSAhg");
	this.shape_5.setTransform(112.9,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgagCIA1gOIgSAhg");
	this.shape_6.setTransform(111.9,71.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRATQgIgJAAgKQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAAKgHAJQgIAHgLAAQgKAAgHgHg");
	this.shape_7.setTransform(108.4,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBALIgHgOIAAALIAAABIABABIgBABIgDAAIgBgBIABgBIAAgBIAAgPIAAgBIgBgBIABgBIAEAAIAHAPIAHgPIAFAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIAAABIAAAPIAAABIABABIgBABIgGAAIAAgBIAAgBIABgBIAAgLIgHAOg");
	this.shape_8.setTransform(148.9,121.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBALIgBgBIABgBIAAAAIAAgQIgDAAIgBAAIgBABIgCABIgBgBIAAgCIABgBIACgBIANAAIACABIAAABIAAACIAAABIgCgBIgBgBIgBAAIgDAAIAAAQIAAAAIABABIgBABg");
	this.shape_9.setTransform(146.4,121.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBEQgMAAgNgEIgJgaIABgDQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQADABABADQAFALAIAEQAHADAKAAIAGAAQAFgBAFgCQAHgDADgGQAEgGAAgJIAAgBQAAgJgHgFQgDgCgHgCQgGgCgJgBQgMgCgHgDQgJgDgEgIQgEgIAAgJQAAgQAMgNQANgLASAAIADAAQAUABAPAKIABAAIgDAUQAAADgEAAIAAAAQgDAAgCgEQgDgHgHgFQgHgGgHAAIgBAAQgHAAgFACIgHAFIgDAFIgCAGIgBAGIABAGQACAFADADIAGADIAGABIARADIANADQAIADAEAEIAGAJQACAEAAAJQAAATgQAOQgHAGgKADIgOAEg");
	this.shape_10.setTransform(139.5,126.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdBAQgCAAgGgHIglg0IgKAAIAAAsQAAAFAEABQAFACAAADQAAAEgEAAIgeAAQgFAAAAgEQAAgDAFgCQAEgBAAgFIAAhhQAAgEgEgCQgFgBAAgEQAAgEAFAAIAzAAQAIAAAMADQAKAEAGAKQAFAIAAALQAAALgGAIQgFAHgJACQgIAEgDAAIAmAxIAEACQAFAAAAAEQAAAEgEAAgAgagEIASAAIAKgCQAFgBAFgEQAHgHAAgKQAAgKgHgHQgHgGgLAAIgUAAg");
	this.shape_11.setTransform(123.6,126.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWA/QgLgDgHgIQgLgOAAgdIAAg7QAAgEgEgBQgFgCAAgEQAAgEAEAAIAeAAQAFAAAAAEQAAAEgFACQgEABAAAEIABBGQABALADAGQADAGAHAEQAHADAMAAQAVAAAIgQQAGgMAAgZIAAgvQAAgEgEgBQgFgCAAgEQAAgEAEAAIAXAAQAEAAAAAEQAAAEgEACQgFABAAAEIAAA7QAAAOgCAKQgDAMgGAHQgLAOgaAAQgOAAgMgDg");
	this.shape_12.setTransform(104.6,126.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBDQgbAAgTgRQgUgSAAgcIAAgEQABgdATgTQATgSAegBIABAAQAeABAUARQATASAAAbIAAAEQgCAfgUASQgUARgcABgAgjgmQgKAQAAAXQAAAWANARQANAQATAAIAAAAQAUAAANgRQANgQAAgWIAAAAQAAgVgLgSQgLgRgYAAQgZABgKAQg");
	this.shape_13.setTransform(84.9,126.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBAQgEAAAAgEQAAgDAEgCQAFgBAAgFIAAhkIgVAAQgEAAgCADIgHAJQgDAFgDAAQgFAAABgEIAAgRQgBgFADgCQADgBAHAAIBSAAIALABQACABABAGIAAARQgBAEgEAAQgCAAgDgFIgIgJQgCgDgFAAIgTAAIAABkQAAAFAEABQAEACAAADQAAAEgEAAg");
	this.shape_14.setTransform(66.6,126.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BiIgOgmIAAgDIACgDQACgEAEAAQAEACADAFQAHARAMAGQAMAFAOAAIAJgBQAIgBAJgDQAIgFAGgKQAGgJAAgNIAAgCQAAgNgKgIQgEgDgLgDQgKgDgPgBQgNgCgPgGQgOgGgGgMQgGgLAAgOQAAgbATgRQATgSAcAAIAEAAQAgACAWAPIABAAIgEAeQAAAGgGgBIgBAAQgDAAgEgFQgFgMgKgIQgJgHgNgBIgCAAQgKAAgHAEQgHADgEADQgDAEgDAEQgCAFAAAFIgBAJIABAIQADAIAFAFIAKAEIAJACIAJACIAQADIAUAEQAKAEAHAHQAGAFAEAJQAEAHAAAMQAAAfgYATQgNALgOAFQgOAEgIAAIgLAAQgTAAgUgFg");
	this.shape_15.setTransform(204.3,98.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhhBdQAAgGAHgCQAHgCAAgHIAAiWQAAgIgHgBQgHgDAAgGQAAgFAHgBIA2AAIArABQAXACAUAJQAUAIANASQAPAWAAAkQAAAWgKAUQgIATgTAPQggAZgsgBIg9AAIgOABQgHAAAAgGgAgyhPIAACeQAOACAPAAIALAAQArgDATgkQAKgTAAgaIAAgFQgCgogYgSQgUgPggAAIgEAAQgSAAgMACg");
	this.shape_16.setTransform(185,98.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBhQgDABgJgLIg5hQIgQAAIAABEQAAAHAHACQAHADAAAFQAAAFgHAAIgtAAQgHAAAAgFQABgGAGgCQAHgCAAgHIAAiVQAAgGgHgDQgGgCgBgGQAAgGAHAAIBPAAQAPABAPAEQAPAFAKAQQAHANAAAQQAAAPgJAOQgIAKgMAEQgNAGgFAAIA5BMQAEACAEABQAGAAABAFIAAABQgBAFgGAAgAgpgHIAcAAQALAAAFgDQAJgCAGgGQALgKgBgQQAAgPgKgKQgKgLgSAAIgfAAg");
	this.shape_17.setTransform(164.4,98.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGBnQgnAAgegbQgegbAAgsIAAgFQABguAdgcQAegbAtgBIABAAQAtAAAfAcQAdAaAAAqIAAAGQgCAvgfAbQgfAagqADgAg2g7QgQAYAAAkQAAAjAUAZQATAYAfABIAAAAQAeAAAUgaQAUgaAAggIAAgBQAAgggRgbQgQgaglAAQgmAAgQAZg");
	this.shape_18.setTransform(142.1,98.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfB9IAAgNQAHgEADgEQAFgGACgGQACgFgBgKIAAizQAAgGgGgDQgHgCAAgFQAAgGAGAAIAuAAQAGAAAAAGQAAAFgHACQgGADAAAGIAACRQgBAZgDAPQgDAOgKAKQgNANgUAFg");
	this.shape_19.setTransform(125,101.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag8BhQgHAAAAgFQAAgDAFgDIAEgDIAEgEIABgEIAAiVQAAgHgHgCQgHgDAAgFQAAgGAHAAICAAAIAAAmQAAAGgHAAQgDAAgFgHIgLgNQgEgFgHAAIg0AAIAABDIAaAAQAEAAADgDIAEgHQACgEAEAAQAHAAAAAGIAAAiQAAAFgHAAQgEAAgDgEIgEgHQgCgCgEgBIgaAAIAABFIABAFIADAEIAEACQAFADAAADIAAACQgCADgEAAg");
	this.shape_20.setTransform(112.4,98.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWBhQgHAAABgFQAAgFAGgDQAHgCAAgHIAAiVQAAgHgHgCQgGgDAAgFQAAgGAGAAIAtAAQAGAAAAAGQABAFgIADQgGACAAAHIAACVQAAAHAGACQAIADgBAFQAAAFgGAAg");
	this.shape_21.setTransform(89.1,98.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA1BjIgEgBIgEgDIAAgDIACgDIAFgFIABgDIgBgDIgTgsIhIAAIgUAvIAAAEIACADIAAACIABADIgBACQgBAEgFAAIgjAAQgFAAAAgEIAAgCQABgEAEgCIAKgEQAEgDACgEIBOiuIAMAAIAAAAIBMCuQAAADAFAEIAMAGIADADIAAADIAAACQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAgAAZAQIgchEIgdBEIA5AAg");
	this.shape_22.setTransform(72.5,98.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABWBlIgegHIAAAAIh6iYIAACBQAAAHAHACQAHADAAAFQAAAGgHAAIgiAAQgGAAAAgGQAAgFAGgDQAHgBAAgIIAAiVQAAgGgHgDQgGgCAAgFQAAgGAGAAIAlAAIB6CZIAAiDQAAgGgGgDQgHgCAAgFQAAgGAGAAIAiAAQAIAAAAAGQAAAFgIACQgGADAAAGIgBCzg");
	this.shape_23.setTransform(49.5,99);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhBBhQgGAAAAgFQAAgFAHgDQAGgCAAgHIAAiVQAAgHgGgCQgHgDAAgFQAAgGAGAAICBAAIAAAmQgBAGgGAAQgDAAgGgHIgKgNQgFgFgFAAIg1AAIAABDIAaAAQAGAAACgHQADgHAGAAQAHAAgBAGIAAAiQABAFgHAAQgGAAgDgHQgDgGgGgBIgZAAIAABJIA1AAQAKAAAIgJIAMgPQAEgEADAAQAHABAAAFIAAAEIgLAkg");
	this.shape_24.setTransform(28.7,98.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnBhQgGAAAAgFQAAgCACgDIABgBIgDgFIhOhIIAABCQAAAHAHACQAHADAAAFQAAAFgHAAIgtAAQgHAAAAgFQAAgFAHgDQAGgCAAgHIAAiVQAAgHgGgCQgHgDAAgFQAAgGAHAAIAtAAQAHAAAAAGQAAAFgHADQgHACAAAHIAAA9IBQhNQAHgHAFAAQAFAAADACIAPAHQAEACAAADIgBADIgIAYIgNgGIgJgCQgFAAgEAFIgzAyIBiBbIAGAEQAEADAAADQAAAFgGAAg");
	this.shape_25.setTransform(9.1,98.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,211.2,133.2), null);


(lib.galcier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_glacier();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.galcier, new cjs.Rectangle(0,0,300,600), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAxIgWg/IgVA/IgTAAIgihhIAYAAIAUBCIAWhDIASAAIAVBDIAVhCIAXAAIgiBhg");
	this.shape.setTransform(135.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAkQgOgPAAgUIAAgBQAAgUAOgPQAQgOAVgBQAWABAPAOQAPAOAAAVIAAAAQAAAVgPAPQgPAOgWAAQgWAAgPgOgAgUgVQgJAJAAAMIAAAAQABANAIAIQAJAKALAAQANAAAJgJQAHgJABgMIAAgBQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_1.setTransform(121.3,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAxIgug+IAAA+IgWAAIAAhhIAUAAIAtA8IAAg8IAWAAIAABhg");
	this.shape_2.setTransform(109.9,36.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAxIgdgqIgLAMIAAAeIgWAAIAAhhIAWAAIAAArIAmgrIAbAAIgpAqIAqA3g");
	this.shape_3.setTransform(95.6,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglAkQgOgPAAgUIAAgBQAAgUAOgPQAQgOAVgBQAWABAPAOQAPAOAAAVIAAAAQAAAVgPAPQgPAOgWAAQgWAAgPgOgAgUgVQgJAJAAAMIAAAAQABANAIAIQAJAKALAAQANAAAJgJQAHgJABgMIAAgBQAAgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_4.setTransform(84,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgUIAAgBQAAgUAPgPQAPgOAVgBQAWABAPAOQAPAOAAAVIAAAAQAAAVgPAPQgPAOgWAAQgWAAgOgOgAgUgVQgJAJABAMIAAAAQAAANAIAIQAJAKALAAQANAAAIgJQAIgJAAgMIAAgBQABgMgJgJQgJgJgMAAQgMAAgIAJg");
	this.shape_5.setTransform(72.1,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAxIAAhhIAsAAQARAAAIAIQAHAIAAAJQAAAPgNAGQATAHAAARQgBAOgJAGQgKAHgRAAgAgUAeIAZAAQAPAAAAgKIAAgBQAAgLgQABIgYAAgAgUgIIAUAAQAPAAAAgLQgBgKgOAAIgUAAg");
	this.shape_6.setTransform(61.4,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F58F35").s().p("AvEDhIAAnBIeJAAIAAHBg");
	this.shape_7.setTransform(99.5,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(3,13,193,45), null);


// stage content:
(lib.RECOVER_300x600_kenai45 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150.1,57.5,0.48,0.48,0,0,0,105.7,66.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).wait(269));

	// Layer_9
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,201.6,1,1,0,0,0,62.5,12.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200).to({_off:false},0).wait(1).to({regX:62.3,regY:12.8,x:149.9,y:201.7,alpha:0.003},0).wait(1).to({y:201.9,alpha:0.013},0).wait(1).to({y:202.3,alpha:0.032},0).wait(1).to({y:202.9,alpha:0.063},0).wait(1).to({y:203.8,alpha:0.109},0).wait(1).to({y:205.2,alpha:0.176},0).wait(1).to({y:207.1,alpha:0.27},0).wait(1).to({y:209.5,alpha:0.394},0).wait(1).to({y:212.3,alpha:0.533},0).wait(1).to({y:214.8,alpha:0.659},0).wait(1).to({y:216.8,alpha:0.759},0).wait(1).to({y:218.3,alpha:0.834},0).wait(1).to({y:219.4,alpha:0.889},0).wait(1).to({y:220.2,alpha:0.929},0).wait(1).to({y:220.8,alpha:0.958},0).wait(1).to({y:221.2,alpha:0.978},0).wait(1).to({y:221.5,alpha:0.991},0).wait(1).to({y:221.6,alpha:0.998},0).wait(1).to({regX:62.5,regY:12.7,x:150.1,alpha:1},0).wait(66));

	// Layer_8
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,148.7,1,1,0,0,0,101.9,19.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,133,1,1,0,0,0,106,40.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({y:178.7,alpha:1},15,cjs.Ease.get(1)).wait(38).to({regX:101.5,regY:20.1,x:149.6,y:179.2,alpha:0.993},0).wait(1).to({y:179.9,alpha:0.97},0).wait(1).to({y:181.3,alpha:0.922},0).wait(1).to({y:183.9,alpha:0.836},0).wait(1).to({y:188.1,alpha:0.695},0).wait(1).to({y:194,alpha:0.499},0).wait(1).to({y:199.5,alpha:0.315},0).wait(1).to({y:203.4,alpha:0.186},0).wait(1).to({y:205.8,alpha:0.104},0).wait(1).to({y:207.4,alpha:0.052},0).wait(1).to({y:208.3,alpha:0.021},0).wait(1).to({y:208.8,alpha:0.005},0).wait(1).to({regX:101.9,regY:19.8,x:150,y:208.7,alpha:0},0).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(196).to({_off:false},0).wait(1).to({regX:106.3,regY:42.6,x:150.3,y:135.6,alpha:0.005},0).wait(1).to({y:136.1,alpha:0.022},0).wait(1).to({y:137.1,alpha:0.056},0).wait(1).to({y:138.8,alpha:0.113},0).wait(1).to({y:141.6,alpha:0.204},0).wait(1).to({y:145.7,alpha:0.341},0).wait(1).to({y:150.9,alpha:0.514},0).wait(1).to({y:155.7,alpha:0.674},0).wait(1).to({y:159.2,alpha:0.792},0).wait(1).to({y:161.6,alpha:0.873},0).wait(1).to({y:163.3,alpha:0.927},0).wait(1).to({y:164.3,alpha:0.963},0).wait(1).to({y:165,alpha:0.985},0).wait(1).to({y:165.3,alpha:0.997},0).wait(1).to({regX:106,regY:40.1,x:150,y:163,alpha:1},0).wait(74));

	// texty
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,177.7,1,1,0,0,0,104.5,19.8);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.2,148.7,1,1,0,0,0,92,19.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({regX:105.5,regY:19.6,x:151,alpha:0.993},0).wait(1).to({y:178.4,alpha:0.97},0).wait(1).to({y:179.8,alpha:0.922},0).wait(1).to({y:182.4,alpha:0.836},0).wait(1).to({y:186.6,alpha:0.695},0).wait(1).to({y:192.5,alpha:0.499},0).wait(1).to({y:198,alpha:0.315},0).wait(1).to({y:201.9,alpha:0.186},0).wait(1).to({y:204.3,alpha:0.104},0).wait(1).to({y:205.9,alpha:0.052},0).wait(1).to({y:206.8,alpha:0.021},0).wait(1).to({y:207.3,alpha:0.005},0).wait(1).to({regX:104.5,regY:19.8,x:150,y:207.7,alpha:0},0).to({_off:true},1).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).wait(1).to({regX:91.1,regY:22.6,x:147.3,y:151.6,alpha:0.004},0).wait(1).to({y:152,alpha:0.019},0).wait(1).to({y:152.9,alpha:0.048},0).wait(1).to({y:154.3,alpha:0.096},0).wait(1).to({y:156.6,alpha:0.171},0).wait(1).to({y:160,alpha:0.284},0).wait(1).to({y:164.6,alpha:0.437},0).wait(1).to({y:169.4,alpha:0.599},0).wait(1).to({y:173.4,alpha:0.731},0).wait(1).to({y:176.2,alpha:0.826},0).wait(1).to({y:178.2,alpha:0.892},0).wait(1).to({y:179.6,alpha:0.938},0).wait(1).to({y:180.5,alpha:0.968},0).wait(1).to({y:181.1,alpha:0.987},0).wait(1).to({y:181.4,alpha:0.997},0).wait(1).to({regX:92,regY:19.8,x:148.2,y:178.7,alpha:1},0).wait(51).to({regX:91.1,regY:22.6,x:147.3,y:181.7,alpha:0.993},0).wait(1).to({y:182.4,alpha:0.97},0).wait(1).to({y:183.8,alpha:0.922},0).wait(1).to({y:186.4,alpha:0.836},0).wait(1).to({y:190.6,alpha:0.695},0).wait(1).to({y:196.5,alpha:0.499},0).wait(1).to({y:202,alpha:0.315},0).wait(1).to({y:205.9,alpha:0.186},0).wait(1).to({y:208.3,alpha:0.104},0).wait(1).to({y:209.9,alpha:0.052},0).wait(1).to({y:210.8,alpha:0.021},0).wait(1).to({y:211.3,alpha:0.005},0).wait(1).to({regX:92,regY:19.8,x:148.2,y:208.7,alpha:0},0).wait(82));

	// butt
	this.instance_6 = new lib.cta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(160,538.5,1,1,0,0,0,110,27.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},20,cjs.Ease.get(1)).wait(265));

	// whiteshit
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,410,1,1,0,0,0,150,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(285));

	// Layer_7
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,285.5,1,1,0,0,0,150,285.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,alpha:1},12).to({scaleX:1.09,scaleY:1.09,x:150.1},154).wait(1));

	// Layer_6
	this.instance_9 = new lib.whale();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,alpha:1},13).to({scaleX:1.1,scaleY:1.1},59).wait(154));

	// Layer_2
	this.instance_10 = new lib.galcier();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,266.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.1,scaleY:1.1},72).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,601);
// library properties:
lib.properties = {
	id: '644DE44FDD594B418D5533437E2D54D4',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_bottom.png", id:"db_bottom"},
		{src:"images/300x600_kenai45_atlas_NP_.jpg", id:"300x600_kenai45_atlas_NP_"}
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