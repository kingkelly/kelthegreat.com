(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_gondola_atlas_P_", frames: [[485,0,9,13],[302,230,169,216],[0,304,213,410],[0,716,300,118],[302,0,181,228],[215,304,51,11],[0,0,300,302]]},
		{name:"300x250_gondola_atlas_NP_", frames: [[0,0,300,600],[302,0,300,600]]}
];


// symbols:



(lib.chevron = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gondola = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gondola_strings = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mountains = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.People = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Sky1 = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Sky2 = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.squiggle = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.tris = function() {
	this.spriteSheet = ss["300x250_gondola_atlas_P_"];
	this.gotoAndStop(6);
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


(lib.triangles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tris();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.triangles, new cjs.Rectangle(0,0,300,302), null);


(lib.theencore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.933)").s().p("AgTAUQgJgIAAgMQABgMAHgHQAJgIALAAQAMAAAJAIQAHAHABAMQgBAMgHAIQgJAJgMAAQgLAAgIgJg");
	this.shape.setTransform(198.1,305.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.933)").s().p("Ag+BoIAAjOIB7AAIAAAoIhLAAIAAAqIBEAAIAAAnIhEAAIAAAsIBNAAIAAApg");
	this.shape_1.setTransform(186.1,297.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.933)").s().p("AAcBoQgGgsgFgNQgGgOgNABIgbAAIAABGIgxAAIAAjOIBUAAQAfAAASALQAWAPAAAgQAAAvgnAKQATADAJAVQAIATAFAwgAgdgHIAWAAQASABAHgGQAJgHAAgSQAAgOgGgGQgEgEgOAAIggAAg");
	this.shape_2.setTransform(168.7,297.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.933)").s().p("AhDBVQgXgYAAg7QAAg9AagZQAXgXAqAAQAsAAAWAXQAYAYAAA7QAAA8gaAaQgXAXgrAAQgrAAgXgXgAgcg3QgKAOAAApQAAAuAKAMQAKAJASAAQATAAAKgMQAKgNAAgqQAAgsgLgMQgJgKgSAAQgTAAgKALg");
	this.shape_3.setTransform(148.5,297.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.933)").s().p("AgzBXQgYgZAAg8QAAg7AZgaQAVgXAoAAQApAAAVAXIgaAhQgPgOgXAAQgSAAgIAMQgIANAAAoQAAAqAJAMQAIAKAOAAQAXAAASgUIAdAdQgcAhgsAAQgjAAgUgUg");
	this.shape_4.setTransform(130.1,297.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.933)").s().p("AAZBoIhBiNIABCNIguAAIAAjOIA9AAIBBCLIgBiLIAuAAIAADOg");
	this.shape_5.setTransform(110.6,297.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.933)").s().p("Ag+BoIAAjOIB7AAIAAAoIhLAAIAAAqIBEAAIAAAnIhEAAIAAAsIBNAAIAAApg");
	this.shape_6.setTransform(92.1,297.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.933)").s().p("Ag+BoIAAjOIB7AAIAAAoIhLAAIAAAqIBEAAIAAAnIhEAAIAAAsIBNAAIAAApg");
	this.shape_7.setTransform(70.2,297.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.933)").s().p("AAhBoIAAhVIhAAAIAABVIgxAAIAAjOIAxAAIAABQIBAAAIAAhQIAwAAIAADOg");
	this.shape_8.setTransform(51.8,297.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.933)").s().p("AgYBoIAAikIg0AAIAAgqICZAAIAAAqIg1AAIAACkg");
	this.shape_9.setTransform(33.7,297.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theencore, new cjs.Rectangle(23.6,283,180.8,34.4), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAVQgJgJABgMQAAgLAHgJQAIgHAMgBQAMABAIAHQAJAJAAALQAAAMgJAJQgIAHgMABQgLgBgIgHg");
	this.shape.setTransform(96.5,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBnIggiMIggCMIg3AAIgsjOIAwAAIAbCWIAhiQIAwAAIAhCPIAaiVIAwAAIgtDOg");
	this.shape_1.setTransform(78.7,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBVQgYgYAAg7QAAg9AagZQAXgXAqAAQAsAAAWAXQAYAYgBA7QABA9gaAZQgYAXgpAAQgsAAgWgXgAgbg2QgLANAAApQAAAtALAMQAJAKASAAQATAAAJgMQALgMAAgrQAAgsgLgMQgJgKgSAAQgTAAgJAMg");
	this.shape_2.setTransform(55,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBnIAAhUIhAAAIAABUIgxAAIAAjOIAxAAIAABQIBAAAIAAhQIAwAAIAADOg");
	this.shape_3.setTransform(34.5,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBXIAYgkQATAPAeAAQAZAAAAgVQAAgMgPgHIgggMQgVgIgLgKQgPgPAAgZQAAgcAYgSQAVgQAgAAQAoAAAWASIgXAjQgSgMgaAAQgXAAAAAUQAAAKAPAHQAIAEAYAHQAWAIALAKQAOAPAAAaQAAAhgaARQgVAPggAAQgtAAgXgUg");
	this.shape_4.setTransform(16.2,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(6.2,-7,96.6,34.4), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBoQgGgsgFgMQgGgOgNgBIgbAAIAABHIgxAAIAAjOIBUAAQAfgBASALQAWAPAAAhQAAAvgnAKQATAEAJAVQAIASAFAwgAgdgGIAWAAQASAAAHgGQAJgHAAgTQAAgNgGgGQgEgEgOAAIggAAg");
	this.shape.setTransform(197.2,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBoIgLgoIhAAAIgMAoIgxAAIBBjOIA5AAIBBDOgAAWAZIgWhPIgWBPIAsAAg");
	this.shape_1.setTransform(177.9,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BoIAAjOIAxAAIAACiIBGAAIAAAsg");
	this.shape_2.setTransform(162,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBSQgPgRAAgkIAAiFIAxAAIAACEQAAATAFAHQAGAJAVAAQAUAAAHgJQAEgGAAgUIAAiEIAxAAIAACDQAAAjgOARQgUAagvAAQguAAgTgXg");
	this.shape_3.setTransform(143.8,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBXQgYgZAAg7QAAg9AZgaQAVgWAoAAQApAAAVAWIgaAiQgPgOgXAAQgSAAgIAMQgIAMAAAqQAAAqAJAMQAIAJAOABQAXgBASgUIAdAeQgcAggsAAQgjAAgUgUg");
	this.shape_4.setTransform(125.5,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBoIgLgoIhAAAIgMAoIgxAAIBBjOIA5AAIBBDOgAAWAZIgWhPIgWBPIAsAAg");
	this.shape_5.setTransform(107.3,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYBoIAAijIg0AAIAAgrICZAAIAAArIg1AAIAACjg");
	this.shape_6.setTransform(90.1,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBXQgYgZAAg7QAAg9AZgaQAVgWAoAAQApAAAVAWIgaAiQgPgOgXAAQgSAAgIAMQgIAMAAAqQAAAqAJAMQAIAJAOABQAXgBASgUIAdAeQgcAggsAAQgjAAgUgUg");
	this.shape_7.setTransform(74,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BoIAAjOIB7AAIAAAoIhLAAIAAApIBEAAIAAAoIhEAAIAAAsIBNAAIAAApg");
	this.shape_8.setTransform(57.4,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhLBoIAAjOIBOAAQAhAAARANQAXARAAApQAAAogWARQgSAOgiAAIgcAAIAABAgAgagBIAbAAQANABAGgGQAFgFABgTQgBgVgGgGQgFgDgOAAIgaAAg");
	this.shape_9.setTransform(40.6,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhJBXIAYgkQATAPAeAAQAZAAAAgWQAAgLgPgHIgggMQgVgIgLgJQgPgPAAgaQAAgdAYgRQAVgQAgAAQAoAAAVASIgWAjQgRgMgbAAQgXAAAAAUQAAAKAPAGQAIAEAYAIQAWAHAKALQAPAQAAAZQAAAhgaASQgVAOggAAQgtAAgXgUg");
	this.shape_10.setTransform(22.7,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(12.8,-3,195.6,34.4), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArBnIgLgnIhAAAIgMAnIgxAAIBBjOIA5AAIBBDOgAAWAaIgWhPIgWBPIAsAAg");
	this.shape.setTransform(113.5,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBnIAAhTIhAAAIAABTIgxAAIAAjOIAxAAIAABQIBAAAIAAhQIAwAAIAADOg");
	this.shape_1.setTransform(88.2,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBWQgYgYAAg8QAAg8AZgaQAVgWAoAAQApAAAVAWIgaAiQgPgOgXAAQgSAAgIAMQgIANAAApQAAApAJANQAIAKAOgBQAXABASgVIAdAdQgcAhgsAAQgjAAgUgVg");
	this.shape_2.setTransform(69.9,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBnIAAiiIg0AAIAAgsICZAAIAAAsIg1AAIAACig");
	this.shape_3.setTransform(53.2,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArBnIgLgnIhAAAIgMAnIgxAAIBBjOIA5AAIBBDOgAAWAaIgWhPIgWBPIAsAAg");
	this.shape_4.setTransform(35.9,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBWQgYgYAAg8QAAg8AZgaQAVgWAoAAQApAAAVAWIgaAiQgPgOgXAAQgSAAgIAMQgIANAAApQAAApAJANQAIAKAOgBQAXABASgVIAdAdQgcAhgsAAQgjAAgUgVg");
	this.shape_5.setTransform(18.4,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(7.5,0,117.4,68.8), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAVQgIgJgBgMQAAgLAJgJQAHgHAMgBQANABAHAHQAIAJAAALQAAAMgIAJQgHAHgNABQgLgBgIgHg");
	this.shape.setTransform(199.1,293.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBnIggiMIggCMIg3AAIgsjOIAwAAIAbCWIAhiQIAwAAIAhCPIAaiVIAwAAIgtDOg");
	this.shape_1.setTransform(181.3,285.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBVQgXgYAAg7QAAg8AagaQAXgXAqAAQAsAAAWAXQAYAYAAA7QAAA9gaAZQgXAXgrAAQgrAAgXgXgAgcg2QgKANAAApQAAAuAKALQAKAKASAAQATAAAKgMQAKgNAAgqQAAgsgLgMQgJgKgSAAQgTAAgKAMg");
	this.shape_2.setTransform(157.5,285.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBnIAAhUIhAAAIAABUIgxAAIAAjOIAxAAIAABQIBAAAIAAhQIAwAAIAADOg");
	this.shape_3.setTransform(137.1,285.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhJBWIAYgjQATAPAeAAQAZAAAAgVQAAgMgPgHIgfgMQgWgIgLgKQgPgOAAgZQAAgeAXgRQAXgQAeAAQApAAAVASIgWAjQgRgMgaAAQgYAAAAAUQAAAKAPAHQAIAEAXAHQAWAIAMAKQAOAQAAAZQAAAhgaARQgVAPgfAAQgvAAgWgVg");
	this.shape_4.setTransform(118.7,285.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYBnIAAijIg0AAIAAgrICZAAIAAArIg1AAIAACjg");
	this.shape_5.setTransform(97.1,285.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBnIAAhUIhAAAIAABUIgxAAIAAjOIAxAAIAABQIBAAAIAAhQIAwAAIAADOg");
	this.shape_6.setTransform(79,285.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BUQgXgXAAg7QAAg9AZgZQAWgVAtgBQAuAAAYAWIgcAiQgRgNgbAAQgVAAgJAKQgJALAAAqQAAAvAKALQAIAJAVAAQARAAAMgDIAAgnIgiAAIAAgnIBOAAIAABrQghAOgmAAQgtgBgYgWg");
	this.shape_7.setTransform(58.9,285.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBnIAAjOIAvAAIAADOg");
	this.shape_8.setTransform(45,285.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7BnIAAjOIAxAAIAACkIBGAAIAAAqg");
	this.shape_9.setTransform(33.9,285.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(23.8,271,181.6,34.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJBWIAYgjQATAPAeAAQAZAAAAgVQAAgMgPgHIgggMQgWgIgKgKQgPgOAAgZQAAgeAXgRQAXgQAeAAQApAAAVASIgWAjQgRgMgaAAQgYAAAAAUQAAAKAPAGQAIAFAXAHQAWAHALALQAPAPAAAaQAAAhgaASQgVAOgfAAQgvAAgWgVg");
	this.shape.setTransform(147.2,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAmIgChLIApAAIgCBLg");
	this.shape_1.setTransform(135.4,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BnIAAjOIB7AAIAAApIhLAAIAAApIBEAAIAAAoIhEAAIAAAtIBNAAIAAAng");
	this.shape_2.setTransform(123.7,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBnQgGgrgFgMQgGgPgNAAIgbAAIAABGIgxAAIAAjOIBUAAQAfABASAKQAWAQAAAhQAAAtgnALQATADAJAWQAIASAFAvgAgdgGIAWAAQASgBAHgFQAJgHAAgTQAAgOgGgFQgEgEgOAAIggAAg");
	this.shape_3.setTransform(106.3,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBBSQgPgRAAgkIAAiFIAxAAIAACEQAAATAEAHQAHAJAUAAQAVAAAGgJQAGgGAAgUIAAiEIAwAAIAACDQAAAjgNARQgVAagwAAQgsAAgUgXg");
	this.shape_4.setTransform(86.2,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYBnIAAiiIg0AAIAAgsICZAAIAAAsIg1AAIAACig");
	this.shape_5.setTransform(68.1,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBnIgLgnIhAAAIgMAnIgxAAIBBjOIA5AAIBBDOgAAWAaIgWhPIgWBPIAsAAg");
	this.shape_6.setTransform(50.8,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBnIhBiMIABCMIguAAIAAjOIA9AAIBBCNIgBiNIAuAAIAADOg");
	this.shape_7.setTransform(30.8,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(18.1,0,139.4,34.4), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.886)","rgba(255,255,255,0)"],[0,0.816,1],-111,-29.7,111.1,29.8).s().p("AOzLKMghMgI6QgwgNANgwIDMr4QANgwAwANMAhMAI5QAxANgNAwIjML4QgLAmggAAQgJAAgKgCg");
	this.shape.setTransform(121.6,71.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,243.1,143.3), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(1.5,1.5,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,3,3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.People();
	this.instance.parent = this;
	this.instance.setTransform(7,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(7,18,181,228), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.114,1],-34.2,0,34.3,0).s().p("AlWN1IAA7pIKsAAIAAbpg");
	this.shape.setTransform(34.3,88.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,68.5,177), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.243,1],-3,28.9,3.1,-29.3).s().p("AsCDHIBKpIIW7C7IhKJIg");
	this.shape.setTransform(74,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-3.1,-9,154.3,77.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gondola_strings();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,213,410), null);


(lib.stayfor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.933)").s().p("AAcBnQgGgrgFgMQgGgPgNAAIgbAAIAABGIgxAAIAAjOIBUAAQAfABASAKQAWAPAAAiQAAAtgnALQATADAJAWQAIASAFAvgAgdgGIAWAAQASgBAHgFQAJgHAAgTQAAgOgGgFQgEgEgOAAIggAAg");
	this.shape.setTransform(138.6,310.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.933)").s().p("AhCBVQgYgYAAg7QAAg8AagaQAXgXAqAAQAsAAAWAXQAYAXgBA8QABA8gaAaQgYAXgpAAQgsAAgWgXgAgbg3QgLANAAAqQAAAtALANQAJAJASAAQATAAAJgLQALgOAAgqQAAgsgLgMQgJgKgSAAQgTAAgJALg");
	this.shape_1.setTransform(118.4,310.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.933)").s().p("Ag9BnIAAjOIB7AAIAAAsIhKAAIAAArIBEAAIAAApIhEAAIAABOg");
	this.shape_2.setTransform(100.9,310.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.933)").s().p("AgYBnIAAhMIg/iCIA3AAIAgBRIAhhRIA3AAIhBCCIAABMg");
	this.shape_3.setTransform(78.3,310.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.933)").s().p("AArBnIgLgnIhAAAIgMAnIgxAAIBBjOIA5AAIBBDOgAAWAZIgWhOIgWBOIAsAAg");
	this.shape_4.setTransform(60.5,310.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.933)").s().p("AgYBnIAAiiIg0AAIAAgsICZAAIAAAsIg1AAIAACig");
	this.shape_5.setTransform(43.2,310.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.933)").s().p("AhJBWIAYgjQATAPAeAAQAZAAAAgVQAAgMgPgHIgfgMQgXgIgKgKQgPgPAAgYQAAgdAYgSQAWgQAfAAQAoAAAWASIgXAjQgSgMgaAAQgXAAAAAUQAAAKAPAGQAIAFAXAHQAXAIALAKQAOAPAAAaQAAAhgaASQgVAOggAAQgtAAgXgVg");
	this.shape_6.setTransform(27.1,310.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.stayfor, new cjs.Rectangle(17.2,296,132.6,34.4), null);


(lib.squigs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.squiggle();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.squigs, new cjs.Rectangle(0,0,51,11), null);


(lib.skyo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sky1();
	this.instance.parent = this;
	this.instance.setTransform(0,322,1,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.skyo, new cjs.Rectangle(0,322,300,274.9), null);


(lib.sky2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Sky2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky2, new cjs.Rectangle(0,0,300,600), null);


(lib.mounts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Mountains();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mounts, new cjs.Rectangle(0,0,300,118), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxByQgwgvABhDQgBgUAGgUIgBgBIABAAQAOg1AsggQAqgjA3ABQAzAAApAcIgMANQglgYgrAAQguAAgmAcQglAbgOArQAfgCAYAOQAIAEAKAKIA6g7IAVAWIgNANIgIgKIgvAuQAMARAHAbQAXgEAOAJQARALAIAYQAXgCAMAKQAPALAEAWQAZgSAQgcQAQgbADghIgiggIgpAoIgZgZIAMgLIANAMIApgoIAiAhQgEglgUggIALgMIABAAQAeAqAAAyQgBBDgvAvQgvAwhDAAQhCAAgvgwgAiNgbQgCAPAAAMQAAA8AqAqQArArA6AAQAjgBAggRQAAgUgLgHQgIgGgMAAIgKACIgKADIgCgKQgDgYgOgIQgIgFgNABQgLABAAACIgJADIgDgKQgLgygfgRQgRgKgVAAIgOABg");
	this.shape.setTransform(21.2,285.9,0.88,0.88);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAcIA+g+IAHAIIg+A9g");
	this.shape_1.setTransform(8.5,297,0.88,0.88);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAkIBNhOIAGAIIhMBNg");
	this.shape_2.setTransform(9.2,299.3,0.88,0.88);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABdhgIAIAHIi6C5IgPABg");
	this.shape_3.setTransform(26.7,281.5,0.88,0.88);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhpBiIDMjNIAHAHIjPDQg");
	this.shape_4.setTransform(26.3,279.3,0.88,0.88);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfArIAAhVIAjAAQAKAAAGAHQAHAGgBAKIAAAHQAAAFgCAFIADACIABAAIABACQACAGAAAFIAAAHQABAKgIAGQgGAHgKAAgAgNAZIAVAAQAGAAgBgEIAAgIQABgFgEAAIgXAAgAgNgHIARAAQAEgBAAgEIAAgIQABgFgFAAIgRAAg");
	this.shape_5.setTransform(44,281.5,0.88,0.88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANArIAAggIgZAHIAAAZIgSAAIAAg+QAAgKAHgGQAHgHAJAAIAPAAQAKAAAGAHQAHAGAAAKIAAA+gAgMgTIAAATIAZgGIAAgNQAAgFgFAAIgPAAQgFAAAAAFg");
	this.shape_6.setTransform(81.7,291.4,0.88,0.88);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDArQgJAAgHgHQgGgGAAgKIAAg+IASAAIAAA+QAAAFAEAAIAdAAIAAASg");
	this.shape_7.setTransform(75.7,291.4,0.88,0.88);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHArQgJAAgHgHQgHgGAAgKIAAgnQAAgKAHgGQAHgHAJAAIAPAAQAKAAAGAHQAHAGAAAKIAAAnQAAAKgHAGQgGAHgKAAgAgMgTIAAAnQAAAFAFAAIAPAAQAFAAAAgFIAAgnQAAgFgFAAIgPAAQgFAAAAAFg");
	this.shape_8.setTransform(69.7,291.4,0.88,0.88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeArIAAhVIAmAAQAJAAAHAHQAHAGAAAKIAAAnQAAAKgHAGQgHAHgJAAgAgMAZIAUAAQAFAAAAgFIAAgnQAAgFgFAAIgUAAg");
	this.shape_9.setTransform(63.3,291.4,0.88,0.88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANArIAAg+QAAgFgFAAIgUAAIAABDIgSAAIAAhVIAmAAQAKAAAGAHQAHAGAAAKIAAA+g");
	this.shape_10.setTransform(56.8,291.4,0.88,0.88);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHArQgKAAgGgHQgHgGABgKIAAgnQgBgKAHgGQAGgHAKAAIAPAAQAKAAAGAHQAHAGgBAKIAAAnQABAKgHAGQgGAHgKAAgAgMgTIAAAnQAAAFAFAAIAPAAQAFAAAAgFIAAgnQAAgFgFAAIgPAAQgFAAAAAFg");
	this.shape_11.setTransform(50.4,291.4,0.88,0.88);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHArQgKAAgGgHQgGgGgBgKIAAgnQABgKAGgGQAGgHAKAAIAOAAQAKAAAGAHQAIAGAAAKIAAADIgSAEIAAgHQAAgFgGAAIgOAAQgFAAAAAFIAAAnQAAAFAFAAIAOAAQAGAAAAgFIAAgGIgNADIAAgQIAfgHIAAAaQAAAKgIAGQgGAHgKAAg");
	this.shape_12.setTransform(44,291.4,0.88,0.88);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZArIAAg+QAAgJAGgHQAHgHAJAAIAdAAIAAASIgdAAQgEAAAAAFIAAASIAZgHIAAASIgZAHIAAAag");
	this.shape_13.setTransform(68.8,281.4,0.88,0.88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZArIAAg+QAAgJAGgHQAHgHAJAAIAdAAIAAASIgdAAQgEAAAAAFIAAASIAZgHIAAASIgZAHIAAAag");
	this.shape_14.setTransform(63,281.4,0.88,0.88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANArIAAg+QAAgFgFAAIgUAAIAABDIgSAAIAAhVIAmAAQAJAAAHAHQAHAHAAAJIAAA+g");
	this.shape_15.setTransform(56.9,281.4,0.88,0.88);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANArIAAggIgZAHIAAAZIgSAAIAAg+QAAgJAHgHQAGgHAKAAIAPAAQAKAAAGAHQAHAHAAAJIAAA+gAgMgTIAAATIAZgGIAAgNQAAgFgFAAIgPAAQgFAAAAAFg");
	this.shape_16.setTransform(50.4,281.4,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(5.4,269.8,79,33.3), null);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAqIAKgNQAHAIAOAAQAGAAAEgDQAGgEAAgNQAAgLgFgEQgEgCgFAAQgKAAgGAGIgPgEIABg2IA5AAIAAARIgoAAIgBAZQAGgFAKAAQANAAAJAHQAKAIAAARQAAATgNAJQgKAIgOAAQgUAAgKgLg");
	this.shape.setTransform(121.6,229.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcA0IAAgRIAaAAIAAhDIgWAQIgLgNIAfgWIAUAAIAABWIAUAAIAAARg");
	this.shape_1.setTransform(112.9,229.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA1IAHgQQACACAEAAQAGAAAFgFQADgEADgLIgJAAIgXhJIATAAIARA+IAQg+IAUAAIgWBFQgLAogYABQgIAAgFgDg");
	this.shape_2.setTransform(101.9,232.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAnIAAhLIARAAIAAANQAFgPAPAAQAEAAAEACIgEASQgCgCgEAAQgJAAgEAKQgEAJAAANIAAAbg");
	this.shape_3.setTransform(95.5,230.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAiQgGgHAAgKQAAgNAJgFQAJgGAQAAIAKAAIAAgDQAAgIgDgDQgDgDgIAAQgKAAgHAHIgKgLQAKgLASAAQAPAAAIAHQAHAHAAAPIAAAwIgQAAIAAgLQgIANgPAAQgJAAgHgGgAgIAGQgEADAAAHQAAAJAIAAQAFAAAGgFQAGgGABgKIgLAAQgIAAgDACg");
	this.shape_4.setTransform(88,230.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAMIAAgyIATAAIAAAvQgBANAJAAQAFAAAFgIQAGgIAAgPIAAgdIASAAIAABLIgRAAIAAgNQgHAPgQAAQgVAAAAgbg");
	this.shape_5.setTransform(80.3,230.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAnIAAhLIARAAIAAANQAFgPAPAAQAEAAAEACIgEASQgCgCgEAAQgJAAgEAKQgEAJAAANIAAAbg");
	this.shape_6.setTransform(73.5,230.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQAwIgBAJIgPAAIAAhyIASAAIAAAxQAIgMANAAQAaAAAAAlQAAApgcAAQgNAAgIgKgAgJABQgFAHAAAOQAAAKAEAGQAFAFAFAAQAJAAADgHQACgFAAgMQAAgMgCgFQgDgFgGAAQgGAAgGAEg");
	this.shape_7.setTransform(66.1,228.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAfQgKgIAAgVQAAgVAJgJQAKgLAOAAQAgABAAAhIgBAJIguAAQABALADAEQADAFAIABQAMAAAJgJIAKALQgMAMgUAAQgNABgJgJgAAPgIQAAgIgDgEQgDgEgIgBQgOABAAAQIAcAAIAAAAg");
	this.shape_8.setTransform(57.6,230.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA0IAAhnIA7AAIAAARIgnAAIAAAbIAjAAIAAAQIgjAAIAAArg");
	this.shape_9.setTransform(50,229.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAeIAJgLQAHAGALABQALAAAAgJQAAgEgGgDIgMgFQgJgDgEgDQgGgFAAgJQAAgLAJgHQAIgFAMgBQAQAAAIAJIgJAMQgHgGgKAAQgJAAAAAIQAAADAGADIAMAEQASAHAAAPQAAAMgJAHQgIAEgMAAQgSABgIgKg");
	this.shape_10.setTransform(39.6,230.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIAqQgFgGAAgOIAAgfIgMAAIAAgQIAMAAIAAgVIASgCIAAAXIAVAAIAAAQIgVAAIAAAdQAAAIABACQACADAGAAIALgBIABAPQgGACgJAAQgNAAgGgHg");
	this.shape_11.setTransform(33,229.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWAnIAAhLIARAAIAAANQAFgPAPAAQAEAAAEACIgEASQgCgCgEAAQgJAAgEAKQgEAJAAANIAAAbg");
	this.shape_12.setTransform(27.4,230.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAiQgGgHAAgKQAAgNAJgFQAJgGAQAAIAKAAIAAgDQAAgIgDgDQgDgDgIAAQgKAAgHAHIgKgLQAKgLASAAQAPAAAIAHQAHAHAAAPIAAAwIgQAAIAAgLQgIANgPAAQgJAAgHgGgAgIAGQgEADAAAHQAAAJAIAAQAFAAAGgFQAGgGABgKIgLAAQgIAAgDACg");
	this.shape_13.setTransform(19.9,230.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAqQgFgGAAgOIAAgfIgMAAIAAgQIAMAAIAAgVIASgCIAAAXIAVAAIAAAQIgVAAIAAAdQAAAIABACQACADAGAAIALgBIABAPQgGACgJAAQgNAAgGgHg");
	this.shape_14.setTransform(13,229.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiArIAKgOQAJAIAPAAQAQAAAAgOQAAgHgIgEIgQgHQgLgEgGgEQgHgIAAgMQAAgNALgJQAKgIAOAAQATAAALAJIgJAOQgJgGgOAAQgNAAAAAMQgBAHAIAEIAPAGQAMAFAFAEQAIAIAAANQAAAPgMAIQgLAIgNAAQgWAAgLgLg");
	this.shape_15.setTransform(5.9,229.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.date, new cjs.Rectangle(0,221,127.8,19.2), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.chevron();
	this.instance.parent = this;
	this.instance.setTransform(161,25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3D3F").s().p("AgcAwIAAhfIA5AAIAAATIgjAAIAAATIAgAAIAAASIggAAIAAAVIAjAAIAAASg");
	this.shape.setTransform(139.8,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3D3F").s().p("AANAwQgDgUgCgGQgDgGgFAAIgNAAIAAAgIgXAAIAAhfIAnAAQAPAAAIAFQAKAHAAAPQAAAVgSAFQAJACAEAJQADAJADAWgAgNgDIAKAAQAIAAAEgCQAEgDAAgJQAAgHgDgCQgCgCgGAAIgPAAg");
	this.shape_1.setTransform(131.7,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D3D3F").s().p("AgeAoQgLgMAAgbQAAgcAMgMQALgKASAAQAVAAALAKQALALgBAcQABAcgMAMQgLAKgUAAQgUAAgKgKgAgMgZQgFAGAAATQAAAVAFAGQAEAEAIAAQAJAAAFgFQAEgGAAgUQAAgUgFgGQgEgEgJAAQgIAAgEAFg");
	this.shape_2.setTransform(122.3,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D3D3F").s().p("AAfAwIgChGIgSBCIgUAAIgThCIgDBGIgVAAIAFhfIAfAAIAQA8IASg8IAeAAIAGBfg");
	this.shape_3.setTransform(111.5,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3D3D3F").s().p("AANAwQgDgUgCgGQgDgGgFAAIgNAAIAAAgIgXAAIAAhfIAnAAQAPAAAIAFQAKAHAAAPQAAAVgSAFQAJACAEAJQADAJADAWgAgNgDIAKAAQAIAAAEgCQAEgDAAgJQAAgHgDgCQgCgCgGAAIgPAAg");
	this.shape_4.setTransform(98.5,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D3D3F").s().p("AgcAwIAAhfIA5AAIAAATIgjAAIAAATIAgAAIAAASIggAAIAAAVIAjAAIAAASg");
	this.shape_5.setTransform(90.2,30.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D3D3F").s().p("AgMAwIgehfIAYAAIASBGIAThGIAYAAIgeBfg");
	this.shape_6.setTransform(82.1,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3D3F").s().p("AgfAoQgLgMABgbQgBgcAMgMQALgKAUAAQAUAAAKAKQAMALgBAcQABAcgMAMQgLAKgUAAQgUAAgLgKgAgNgZQgEAGAAATQAAAVAFAGQAEAEAIAAQAJAAAEgFQAFgGAAgUQAAgUgFgGQgEgEgIAAQgJAAgFAFg");
	this.shape_7.setTransform(72.9,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3D3D3F").s().p("AgXApQgLgMAAgcQAAgbALgMQAKgLASAAQATAAALALIgNAQQgHgHgLAAQgHAAgEAGQgEAFABATQAAATADAGQAEAFAGAAQALAAAIgKIAOAOQgOAPgUAAQgQAAgJgJg");
	this.shape_8.setTransform(64.3,30.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3D3F").s().p("AghApIALgRQAJAHANAAQAMAAAAgKQAAgFgHgDIgPgGQgJgEgFgEQgIgHAAgMQAAgNALgIQALgIAOAAQASAAAKAJIgKAQQgIgFgMAAQgKAAAAAJQAAAFAGADIAOAEQALAFAFADQAHAIgBAMQAAAPgMAIQgKAHgOAAQgVAAgKgJg");
	this.shape_9.setTransform(56.4,30.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D3D3F").s().p("AgKAwIAAhfIAWAAIAABfg");
	this.shape_10.setTransform(50.7,30.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D3D3F").s().p("AgmAwIAAhfIAmAAQASAAAKAJQALAKAAAcQAAAcgMALQgKAJgRAAgAgPAcIAOAAQAIAAAEgEQAEgFAAgTQAAgSgEgFQgEgFgIAAIgOAAg");
	this.shape_11.setTransform(44.1,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AsUDaQgyABAAgyIAAlRQAAgxAyAAIYpAAQAyAAAAAxIAAFRQAAAygygBg");
	this.shape_12.setTransform(103.2,31);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(19.4,9.2,167.8,43.7), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A4NUoMAAAgpPMAwbAAAMAAAApPg");
	this.shape.setTransform(155,132);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,310,264), null);


(lib.alpenglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBCIAAiDIAZAAIAABtIAwAAIAAAWg");
	this.shape.setTransform(187.6,239.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBCIgJgdIgtAAIgJAdIgaAAIAriDIAdAAIArCDgAARARIgRg4IgRA4IAiAAg");
	this.shape_1.setTransform(176.6,239.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBCIgriDIAaAAIAeBoIAfhoIAaAAIgrCDg");
	this.shape_2.setTransform(165.1,239.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBCIAAiDIAXAAIAACDg");
	this.shape_3.setTransform(156.6,239.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBCIAAhtIglAAIAAgWIBhAAIAAAWIgkAAIAABtg");
	this.shape_4.setTransform(148.9,239.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA2IANgRQAMAKATAAQATAAAAgRQAAgJgJgGIgUgJQgOgFgIgFQgJgKAAgQQAAgQAOgLQANgKASAAQAYAAAOALIgNASQgKgIgSAAQgSAAAAAQQAAAHAKAGIAVAIQANAGAIAGQAKAKgBAQQAAAUgPAKQgNAJgSAAQgcAAgOgOg");
	this.shape_5.setTransform(138.7,239.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBCIAAiDIBKAAIAAAVIgyAAIAAAhIAuAAIAAAUIguAAIAAAkIAzAAIAAAVg");
	this.shape_6.setTransform(129,239.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBCIAAiDIBLAAIAAAWIgyAAIAAAiIAtAAIAAAVIgtAAIAAA2g");
	this.shape_7.setTransform(119.3,239.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBCIgYhhIgYBhIgcAAIgdiDIAYAAIAVBmIAYhiIAZAAIAYBiIAVhmIAYAAIgeCDg");
	this.shape_8.setTransform(101.7,239.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA2QgOgQgBgkQAAglAQgRQAOgPAaAAQAaAAAOAOQAOAQAAAlQAAAlgPARQgOAOgaAAQgbAAgNgOgAgUgmQgJAJAAAdQAAAgAJAJQAGAHAOAAQAOAAAIgIQAHgKABgeQgBgegHgJQgIgIgOAAQgOAAgGAJg");
	this.shape_9.setTransform(86.7,239.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkBCIAAiDIAZAAIAABtIAwAAIAAAWg");
	this.shape_10.setTransform(76,239.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiA1QgPgOgBglQABgnAPgPQANgOAbAAQAdAAAOANIgOARQgLgJgUgBQgOABgHAHQgHAJAAAdQAAAhAIAIQAHAGAPABQANAAAJgDIAAgfIgaAAIAAgUIAwAAIAABBQgTAJgYAAQgcgBgNgOg");
	this.shape_11.setTransform(64.6,239.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBCIgyhhIABBhIgXAAIAAiDIAfAAIAyBiIgBhiIAXAAIAACDg");
	this.shape_12.setTransform(51.9,239.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglBCIAAiDIBKAAIAAAVIgyAAIAAAhIAtAAIAAAUIgtAAIAAAkIAzAAIAAAVg");
	this.shape_13.setTransform(40.4,239.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsBCIAAiDIAuAAQATABALAHQANALAAAYQAAAZgOAKQgKAIgUAAIgVAAIAAAtgAgUAAIAVAAQALAAADgDQAFgEAAgOQAAgOgFgFQgEgEgLAAIgUAAg");
	this.shape_14.setTransform(29.9,239.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkBCIAAiDIAYAAIAABtIAxAAIAAAWg");
	this.shape_15.setTransform(19.8,239.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAgBCIgJgdIgtAAIgJAdIgaAAIAriDIAdAAIArCDgAARARIgRg4IgRA4IAiAAg");
	this.shape_16.setTransform(8.9,239.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.alpenglow, new cjs.Rectangle(1,229.8,192.8,23.3), null);


(lib.TEXT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(123.3,332.5,1,1,0,0,0,66.2,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TEXT1, new cjs.Rectangle(64.6,294,117.4,68.8), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(87.8,306.2,1,1,0,0,0,87.8,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(18.1,285,139.4,34.4), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(1,1,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.102},44,cjs.Ease.get(1)).wait(51).to({alpha:0.602},25).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.strings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(106.5,205,1,1,0,0,0,106.5,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.strings, new cjs.Rectangle(0,0,213,410), null);


(lib.stars = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_33 = new cjs.Graphics().p("AYkJpQnsmd1mmrQmjiCnnh9ImKhlQgOgEgIgMQgIgNAEgOQABgFAFAFQAGAGAFgDQAMgIAOAFIGKBkQH3CCGXB/QV3GvH0GnQALAKABAOQAAABAAAAQAAABAAAAQAAAAgBAAQAAgBAAAAQgEgFgDAEQgKAMgOABIgEAAQgMAAgKgJg");
	var mask_graphics_77 = new cjs.Graphics().p("ARVGzQlbkkvPksQkohclXhZIkWhHQgKgDgGgIQgFgJADgKQAAgBAAAAQABgBAAAAQABAAAAABQABAAABABQAEAEADgCQAJgFAKADIEWBHQFjBbEfBaQPbEwFhEqQAIAHAAAKQAAABAAAAQAAABAAAAQAAAAAAAAQAAgBgBAAQgCgEgDADQgGAIgLABIgCABQgJAAgHgHg");
	var mask_graphics_207 = new cjs.Graphics().p("ARVGzQlbkkvPksQkohclXhZIkWhHQgKgDgGgIQgFgJADgKQAAgBAAAAQABgBAAAAQABAAAAABQABAAABABQAEAEADgCQAJgFAKADIEWBHQFjBbEfBaQPbEwFhEqQAIAHAAAKQAAABAAAAQAAABAAAAQAAAAAAAAQAAgBgBAAQgCgEgDADQgGAIgLABIgCABQgJAAgHgHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_graphics_33,x:121.3,y:214.7}).wait(44).to({graphics:mask_graphics_77,x:-3.1,y:336.9}).wait(130).to({graphics:mask_graphics_207,x:237.1,y:-4}).wait(274));

	// Layer_3
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(-121.6,135.6,1,1,0,0,0,121.5,71.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({regX:121.7,rotation:15,x:372.4,y:345.5,alpha:0.281},24,cjs.Ease.get(0.68)).wait(20).to({regX:121.5,rotation:0,x:-139.1,y:268.5,alpha:1},0).to({regX:121.7,rotation:15,x:221.5,y:447.3},23,cjs.Ease.get(0.68)).wait(107).to({x:7.6,y:-124.3},0).to({x:488.2,y:136},22,cjs.Ease.get(0.7)).to({_off:true},154).wait(98));

	// Layer_1
	this.instance_1 = new lib.Symbol8("synched",45);
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.4,338.1,1,1,0,0,0,1,1);

	this.instance_2 = new lib.Symbol8("synched",124);
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.4,312.1,1,1,0,0,0,1,1);

	this.instance_3 = new lib.Symbol8("synched",89);
	this.instance_3.parent = this;
	this.instance_3.setTransform(112.9,344.6,1,1,0,0,0,1,1);

	this.instance_4 = new lib.Symbol8("synched",89);
	this.instance_4.parent = this;
	this.instance_4.setTransform(67.4,279.6,1,1,0,0,0,1,1);

	this.instance_5 = new lib.Symbol8("synched",45);
	this.instance_5.parent = this;
	this.instance_5.setTransform(41.4,435.6,1,1,0,0,0,1,1);

	this.instance_6 = new lib.Symbol8("synched",124);
	this.instance_6.parent = this;
	this.instance_6.setTransform(119.4,409.6,1,1,0,0,0,1,1);

	this.instance_7 = new lib.Symbol8("synched",89);
	this.instance_7.parent = this;
	this.instance_7.setTransform(67.4,279.6,1,1,0,0,0,1,1);

	this.instance_8 = new lib.Symbol8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(47,348.5,1,1,0,0,0,1,1);

	this.instance_9 = new lib.Symbol8("synched",45);
	this.instance_9.parent = this;
	this.instance_9.setTransform(135.4,-0.6,1,1,0,0,0,1,1);

	this.instance_10 = new lib.Symbol8("synched",124);
	this.instance_10.parent = this;
	this.instance_10.setTransform(213.4,-26.6,1,1,0,0,0,1,1);

	this.instance_11 = new lib.Symbol8("synched",89);
	this.instance_11.parent = this;
	this.instance_11.setTransform(115.9,5.9,1,1,0,0,0,1,1);

	this.instance_12 = new lib.Symbol8("synched",89);
	this.instance_12.parent = this;
	this.instance_12.setTransform(70.4,-59.1,1,1,0,0,0,1,1);

	this.instance_13 = new lib.Symbol8("synched",45);
	this.instance_13.parent = this;
	this.instance_13.setTransform(44.4,96.9,1,1,0,0,0,1,1);

	this.instance_14 = new lib.Symbol8("synched",124);
	this.instance_14.parent = this;
	this.instance_14.setTransform(122.4,70.9,1,1,0,0,0,1,1);

	this.instance_15 = new lib.Symbol8("synched",89);
	this.instance_15.parent = this;
	this.instance_15.setTransform(70.4,-59.1,1,1,0,0,0,1,1);

	this.instance_16 = new lib.Symbol8("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(50,9.8,1,1,0,0,0,1,1);

	this.instance_17 = new lib.Symbol8("synched",38);
	this.instance_17.parent = this;
	this.instance_17.setTransform(346.4,179.1,1,1,0,0,0,1,1);

	this.instance_18 = new lib.Symbol8("synched",19);
	this.instance_18.parent = this;
	this.instance_18.setTransform(320.4,166.1,1,1,0,0,0,1,1);

	this.instance_19 = new lib.Symbol8("synched",45);
	this.instance_19.parent = this;
	this.instance_19.setTransform(86.4,237.6,1,1,0,0,0,1,1);

	this.instance_20 = new lib.Symbol8("synched",59);
	this.instance_20.parent = this;
	this.instance_20.setTransform(307.4,237.6,1,1,0,0,0,1,1);

	this.instance_21 = new lib.Symbol8("synched",124);
	this.instance_21.parent = this;
	this.instance_21.setTransform(164.4,211.6,1,1,0,0,0,1,1);

	this.instance_22 = new lib.Symbol8("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(92,150.5,1,1,0,0,0,1,1);

	this.instance_23 = new lib.Symbol8("synched",89);
	this.instance_23.parent = this;
	this.instance_23.setTransform(255.4,283.1,1,1,0,0,0,1,1);

	this.instance_24 = new lib.Symbol8("synched",89);
	this.instance_24.parent = this;
	this.instance_24.setTransform(177.4,218.1,1,1,0,0,0,1,1);

	this.instance_25 = new lib.Symbol8("synched",89);
	this.instance_25.parent = this;
	this.instance_25.setTransform(66.9,244.1,1,1,0,0,0,1,1);

	this.instance_26 = new lib.Symbol8("synched",89);
	this.instance_26.parent = this;
	this.instance_26.setTransform(21.4,179.1,1,1,0,0,0,1,1);

	this.instance_27 = new lib.Symbol8("synched",38);
	this.instance_27.parent = this;
	this.instance_27.setTransform(255.4,276.6,1,1,0,0,0,1,1);

	this.instance_28 = new lib.Symbol8("synched",99);
	this.instance_28.parent = this;
	this.instance_28.setTransform(190.4,-35.4,1,1,0,0,0,1,1);

	this.instance_29 = new lib.Symbol8("synched",19);
	this.instance_29.parent = this;
	this.instance_29.setTransform(229.4,263.6,1,1,0,0,0,1,1);

	this.instance_30 = new lib.Symbol8("synched",45);
	this.instance_30.parent = this;
	this.instance_30.setTransform(-4.6,335.1,1,1,0,0,0,1,1);

	this.instance_31 = new lib.Symbol8("synched",59);
	this.instance_31.parent = this;
	this.instance_31.setTransform(216.4,335.1,1,1,0,0,0,1,1);

	this.instance_32 = new lib.Symbol8("synched",124);
	this.instance_32.parent = this;
	this.instance_32.setTransform(73.4,309.1,1,1,0,0,0,1,1);

	this.instance_33 = new lib.Symbol8("synched",89);
	this.instance_33.parent = this;
	this.instance_33.setTransform(21.4,179.1,1,1,0,0,0,1,1);

	this.instance_34 = new lib.Symbol8("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(1,248,1,1,0,0,0,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(481));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-60.1,354,497.8);


(lib.spectacular = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(123.3,305.2,1,1,0,0,0,110.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spectacular, new cjs.Rectangle(25.5,283,195.6,34.4), null);


(lib.show = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(60.7,300.2,1,1,0,0,0,54.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.show, new cjs.Rectangle(12.4,274,96.6,34.4), null);


(lib.gondol = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkRK5QgdgjAJhaQAKhaAcluIAblcIEjjYQAKhyBLhUQAmgpAjgUIBLgFQgqALgsAhQhYBDgMB1IgcMzQAFgEAEAGIgJAFIgfC/QhIAmjeCNIgCABQgPAAgNgQgAjVBhQAAgBBLg7IAFkcQhLA4AAgBgAhYgCQBLg2AAgBIAKk2QhVBHAAgBg");
	mask.setTransform(38.9,94.7);

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(106.3,103,1,1,0,0,0,34.2,88.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:-26.7,y:107.5},83).wait(1));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_10 = new cjs.Graphics().p("Aj+FoQgwAAg7AJQh4ARg/AsIAjprQAJgnAVgnQABguAhgtQBBhZChAJQCgAJC5AiQBdARA9APIBMA2QBNBEAXBKQALAaAJAgQAtCbAYGKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:100.1,y:68.5}).wait(119));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.5,84.5,1,1.999,90,0,0,74,29.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regY:29.6,x:226.1,y:84.4},0).wait(1).to({rotation:89.9,x:225.8},0).wait(1).to({x:225.3,y:84.5},0).wait(1).to({rotation:89.8,x:224.6,y:84.4},0).wait(1).to({rotation:89.7,x:223.7,y:84.5},0).wait(1).to({rotation:89.5,x:222.5},0).wait(1).to({rotation:89.3,x:221.2},0).wait(1).to({rotation:89.1,x:219.7,y:84.6},0).wait(1).to({rotation:88.9,x:218,y:84.5},0).wait(1).to({rotation:88.7,x:216.1,y:84.6},0).wait(1).to({rotation:88.4,x:214},0).wait(1).to({rotation:88.1,x:211.8},0).wait(1).to({rotation:87.8,x:209.4},0).wait(1).to({rotation:87.5,x:206.7,y:84.7},0).wait(1).to({rotation:87.1,x:204},0).wait(1).to({rotation:86.7,x:201.1,y:84.8},0).wait(1).to({rotation:86.3,x:197.9},0).wait(1).to({rotation:85.9,x:194.7},0).wait(1).to({rotation:85.5,x:191.2},0).wait(1).to({rotation:85,x:187.7},0).wait(1).to({rotation:84.5,x:184.1,y:84.9},0).wait(1).to({rotation:84,x:180.2,y:85},0).wait(1).to({rotation:83.5,x:176.3},0).wait(1).to({rotation:83,x:172.2,y:85.1},0).wait(1).to({rotation:82.4,x:168.1},0).wait(1).to({rotation:81.9,x:163.8},0).wait(1).to({rotation:81.3,x:159.4,y:85.2},0).wait(1).to({rotation:80.7,x:154.9,y:85.3},0).wait(1).to({rotation:80.1,x:150.3},0).wait(1).to({rotation:79.5,x:145.7},0).wait(1).to({rotation:78.9,x:141,y:85.4},0).wait(1).to({rotation:78.3,x:136.2},0).wait(1).to({rotation:77.7,x:131.3,y:85.5},0).wait(1).to({rotation:77,x:126.4,y:85.6},0).wait(1).to({rotation:76.4,x:121.5,y:85.7},0).wait(1).to({rotation:75.7,x:116.5},0).wait(1).to({rotation:75.1,x:111.4,y:85.8},0).wait(1).to({rotation:74.4,x:106.4,y:85.9},0).wait(1).to({rotation:73.8,x:101.3},0).wait(1).to({rotation:73.1,x:96.2},0).wait(1).to({rotation:72.4,x:91.2,y:86},0).wait(1).to({rotation:71.8,x:86.1,y:86.1},0).wait(1).to({rotation:71.1,x:81},0).wait(1).to({rotation:70.5,x:76,y:86.2},0).wait(1).to({rotation:69.8,x:71},0).wait(1).to({rotation:69.2,x:66,y:86.3},0).wait(1).to({rotation:68.5,x:61.1},0).wait(1).to({rotation:67.9,x:56.1,y:86.4},0).wait(1).to({rotation:67.2,x:51.3,y:86.5},0).wait(1).to({rotation:66.6,x:46.5},0).wait(1).to({rotation:66,x:41.8,y:86.6},0).wait(1).to({rotation:65.4,x:37.1,y:86.7},0).wait(1).to({rotation:64.8,x:32.5},0).wait(1).to({rotation:64.2,x:28,y:86.8},0).wait(1).to({rotation:63.6,x:23.6,y:86.7},0).wait(1).to({rotation:63.1,x:19.2,y:86.8},0).wait(1).to({rotation:62.5,x:15,y:86.9},0).wait(1).to({rotation:62,x:10.9},0).wait(1).to({rotation:61.5,x:6.9},0).wait(1).to({rotation:61,x:3,y:87},0).wait(1).to({rotation:60.5,x:-0.8},0).wait(1).to({rotation:60,x:-4.6,y:87.1},0).wait(1).to({rotation:59.5,x:-8.1},0).wait(1).to({rotation:59.1,x:-11.6},0).wait(1).to({rotation:58.6,x:-14.8,y:87.2},0).wait(1).to({rotation:58.2,x:-18},0).wait(1).to({rotation:57.8,x:-21.1,y:87.3},0).wait(1).to({rotation:57.5,x:-23.9},0).wait(1).to({rotation:57.1,x:-26.7},0).wait(1).to({rotation:56.8,x:-29.4,y:87.4},0).wait(1).to({rotation:56.4,x:-31.8},0).wait(1).to({rotation:56.1,x:-34.1},0).wait(1).to({rotation:55.8,x:-36.3},0).wait(1).to({rotation:55.6,x:-38.3,y:87.5},0).wait(1).to({rotation:55.3,x:-40.1},0).wait(1).to({rotation:55.1,x:-41.9},0).wait(1).to({rotation:54.9,x:-43.4},0).wait(1).to({rotation:54.7,x:-44.8},0).wait(1).to({rotation:54.6,x:-46,y:87.6},0).wait(1).to({rotation:54.4,x:-47.1,y:87.5},0).wait(1).to({rotation:54.3,x:-48},0).wait(1).to({rotation:54.2,x:-48.7,y:87.6},0).wait(1).to({rotation:54.1,x:-49.3},0).wait(1).to({x:-49.7},0).wait(1).to({x:-49.9},0).wait(1).to({regY:29.4,x:-49.8,y:87.4},0).wait(33));

	// Layer_1
	this.instance_2 = new lib.gondola();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,216);


(lib.gondolaaaa = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// gondolalala
	this.instance = new lib.gondol();
	this.instance.parent = this;
	this.instance.setTransform(84.5,108,1,1,0,0,0,84.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:108.1},0).wait(4).to({y:108.2},0).wait(2).to({y:108.3},0).wait(3).to({y:108.4},0).wait(2).to({y:108.5},0).wait(3).to({y:108.6},0).wait(3).to({y:108.7},0).wait(7).to({y:108.8},0).wait(1).to({y:108.7},0).wait(7).to({y:108.6},0).wait(3).to({y:108.5},0).wait(3).to({y:108.4},0).wait(2).to({y:108.3},0).wait(3).to({y:108.2},0).wait(3).to({y:108.1},0).wait(4).to({y:108},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,216);


// stage content:
(lib._300x250_gondola = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150,-295,1.215,1.215,0,0,0,44.9,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(467));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.7,221.9,0.7,0.7,0,0,0,90,31);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(268).to({_off:false},0).wait(1).to({regX:103.2,x:73,alpha:0.002},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.179},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.307},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.554},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.777},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.981},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:90,x:63.7,alpha:1},0).wait(174));

	// Layer_2
	this.instance_2 = new lib.squigs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,-128.5,1,1,0,0,0,25.5,5.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(274).to({_off:false},0).to({alpha:1},22,cjs.Ease.get(-1)).wait(171));

	// Layer_10
	this.instance_3 = new lib.show();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-124.4,-124.8,1,1,0,0,0,60.6,21.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.alpenglow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,-92.6,1,1,0,0,0,96.4,11.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(1).to({regX:60.2,regY:288.6,x:-117.5,y:142.6},0).wait(1).to({x:-109},0).wait(1).to({x:-99},0).wait(1).to({x:-87},0).wait(1).to({x:-72.5},0).wait(1).to({x:-54.7},0).wait(1).to({x:-33.2},0).wait(1).to({x:-9},0).wait(1).to({x:14.7},0).wait(1).to({x:35.2},0).wait(1).to({x:52.2},0).wait(1).to({x:65.9},0).wait(1).to({x:77.4},0).wait(1).to({x:87},0).wait(1).to({x:95.1},0).wait(1).to({x:102.2},0).wait(1).to({x:108.3},0).wait(1).to({x:113.6},0).wait(1).to({x:118.3},0).wait(1).to({x:122.5},0).wait(1).to({x:126.2},0).wait(1).to({x:129.5},0).wait(1).to({x:132.5},0).wait(1).to({x:135.1},0).wait(1).to({x:137.5},0).wait(1).to({x:139.6},0).wait(1).to({x:141.5},0).wait(1).to({x:143.1},0).wait(1).to({x:144.6},0).wait(1).to({x:145.9},0).wait(1).to({x:147},0).wait(1).to({x:148},0).wait(1).to({x:148.9},0).wait(1).to({x:149.6},0).wait(1).to({regX:60.6,regY:21.2,x:150.6,y:-124.8},0).wait(58).to({regX:60.2,regY:288.6,x:164.8,y:142.6,alpha:0.934},0).wait(1).to({x:186.2,alpha:0.837},0).wait(1).to({x:219.5,alpha:0.685},0).wait(1).to({x:262.4,alpha:0.49},0).wait(1).to({x:295,alpha:0.342},0).wait(1).to({x:315.9,alpha:0.247},0).wait(1).to({x:330.1,alpha:0.182},0).wait(1).to({x:340.5,alpha:0.135},0).wait(1).to({x:348.2,alpha:0.1},0).wait(1).to({x:354.2,alpha:0.073},0).wait(1).to({x:358.8,alpha:0.052},0).wait(1).to({x:362.3,alpha:0.036},0).wait(1).to({x:365.1,alpha:0.023},0).wait(1).to({x:367.1,alpha:0.014},0).wait(1).to({x:368.5,alpha:0.008},0).wait(1).to({x:369.5,alpha:0.003},0).wait(1).to({x:370,alpha:0.001},0).wait(1).to({regX:60.6,regY:21.2,x:370.6,y:-124.8,alpha:0},0).to({_off:true},125).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(277).to({_off:false},0).to({alpha:1},22,cjs.Ease.get(-1)).wait(168));

	// Layer_4
	this.instance_5 = new lib.Symbol13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-130,-163.9,1,1,0,0,0,114.5,21.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(262).to({_off:false},0).wait(1).to({regX:114.9,regY:285.6,x:-121.1,y:100.5},0).wait(1).to({x:-111.1},0).wait(1).to({x:-98.9},0).wait(1).to({x:-83.8},0).wait(1).to({x:-65},0).wait(1).to({x:-41.4},0).wait(1).to({x:-13.9},0).wait(1).to({x:13.2},0).wait(1).to({x:36.3},0).wait(1).to({x:54.7},0).wait(1).to({x:69.3},0).wait(1).to({x:81.3},0).wait(1).to({x:91.1},0).wait(1).to({x:99.4},0).wait(1).to({x:106.5},0).wait(1).to({x:112.6},0).wait(1).to({x:117.8},0).wait(1).to({x:122.4},0).wait(1).to({x:126.4},0).wait(1).to({x:130},0).wait(1).to({x:133.1},0).wait(1).to({x:135.8},0).wait(1).to({x:138.2},0).wait(1).to({x:140.4},0).wait(1).to({x:142.2},0).wait(1).to({x:143.8},0).wait(1).to({x:145.2},0).wait(1).to({x:146.4},0).wait(1).to({x:147.4},0).wait(1).to({x:148.2},0).wait(1).to({x:148.9},0).wait(1).to({x:149.5},0).wait(1).to({x:149.9},0).wait(1).to({x:150.1},0).wait(1).to({x:150.3},0).wait(1).to({regX:114.5,regY:21.2,x:150,y:-163.9},0).wait(169));

	// Layer_3
	this.instance_6 = new lib.Symbol12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-129.9,-206.4,1,1,0,0,0,87.8,21.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(259).to({_off:false},0).wait(1).to({regX:88.4,regY:299.6,x:-120.8,y:72},0).wait(1).to({x:-110.8},0).wait(1).to({x:-98.6},0).wait(1).to({x:-83.5},0).wait(1).to({x:-64.7},0).wait(1).to({x:-41.1},0).wait(1).to({x:-13.6},0).wait(1).to({x:13.5},0).wait(1).to({x:36.6},0).wait(1).to({x:55},0).wait(1).to({x:69.6},0).wait(1).to({x:81.6},0).wait(1).to({x:91.4},0).wait(1).to({x:99.7},0).wait(1).to({x:106.7},0).wait(1).to({x:112.8},0).wait(1).to({x:118.1},0).wait(1).to({x:122.7},0).wait(1).to({x:126.7},0).wait(1).to({x:130.3},0).wait(1).to({x:133.4},0).wait(1).to({x:136.1},0).wait(1).to({x:138.5},0).wait(1).to({x:140.7},0).wait(1).to({x:142.5},0).wait(1).to({x:144.1},0).wait(1).to({x:145.5},0).wait(1).to({x:146.7},0).wait(1).to({x:147.7},0).wait(1).to({x:148.5},0).wait(1).to({x:149.2},0).wait(1).to({x:149.8},0).wait(1).to({x:150.2},0).wait(1).to({x:150.4},0).wait(1).to({x:150.6},0).wait(1).to({regX:87.8,regY:21.2,x:150.1,y:-206.4},0).wait(172));

	// Layer_1
	this.instance_7 = new lib.spectacular();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-123.1,-164.8,1,1,0,0,0,123.3,21.2);
	this.instance_7._off = true;

	this.instance_8 = new lib.stayfor();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-119.9,-206,1,1,0,0,0,83.5,21.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.date();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,-67,1,1,0,0,0,63.9,9.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({_off:false},0).wait(1).to({regX:122.9,regY:297.6,x:-115.4,y:111.6},0).wait(1).to({x:-105.9},0).wait(1).to({x:-94.4},0).wait(1).to({x:-80.4},0).wait(1).to({x:-63},0).wait(1).to({x:-41.3},0).wait(1).to({x:-15.6},0).wait(1).to({x:10.8},0).wait(1).to({x:33.9},0).wait(1).to({x:52.7},0).wait(1).to({x:67.6},0).wait(1).to({x:79.8},0).wait(1).to({x:89.9},0).wait(1).to({x:98.4},0).wait(1).to({x:105.6},0).wait(1).to({x:111.8},0).wait(1).to({x:117.2},0).wait(1).to({x:121.9},0).wait(1).to({x:126},0).wait(1).to({x:129.7},0).wait(1).to({x:132.9},0).wait(1).to({x:135.7},0).wait(1).to({x:138.2},0).wait(1).to({x:140.4},0).wait(1).to({x:142.4},0).wait(1).to({x:144.1},0).wait(1).to({x:145.6},0).wait(1).to({x:146.9},0).wait(1).to({x:148},0).wait(1).to({x:148.9},0).wait(1).to({x:149.7},0).wait(1).to({x:150.3},0).wait(1).to({x:150.8},0).wait(1).to({x:151.2},0).wait(1).to({regX:123.3,regY:21.2,x:151.9,y:-164.8},0).wait(63).to({regX:122.9,regY:297.6,x:171.3,y:111.6,alpha:0.934},0).wait(1).to({x:200.5,alpha:0.837},0).wait(1).to({x:246,alpha:0.685},0).wait(1).to({x:304.5,alpha:0.49},0).wait(1).to({x:348.9,alpha:0.342},0).wait(1).to({x:377.4,alpha:0.247},0).wait(1).to({x:396.9,alpha:0.182},0).wait(1).to({x:411,alpha:0.135},0).wait(1).to({x:421.6,alpha:0.1},0).wait(1).to({x:429.7,alpha:0.073},0).wait(1).to({x:436,alpha:0.052},0).wait(1).to({x:440.8,alpha:0.036},0).wait(1).to({x:444.5,alpha:0.023},0).wait(1).to({x:447.3,alpha:0.014},0).wait(1).to({x:449.2,alpha:0.008},0).wait(1).to({x:450.5,alpha:0.003},0).wait(1).to({x:451.3,alpha:0.001},0).wait(1).to({regX:123.3,regY:21.2,x:451.9,y:-164.8,alpha:0},0).to({_off:true},6).wait(310));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(157).to({_off:false},0).wait(1).to({regX:83,regY:310.6,x:-109.2,y:83.4},0).wait(1).to({x:-95},0).wait(1).to({x:-76.3},0).wait(1).to({x:-51},0).wait(1).to({x:-17.9},0).wait(1).to({x:17.3},0).wait(1).to({x:45.9},0).wait(1).to({x:67.1},0).wait(1).to({x:82.9},0).wait(1).to({x:95.2},0).wait(1).to({x:105.1},0).wait(1).to({x:113.1},0).wait(1).to({x:119.7},0).wait(1).to({x:125.3},0).wait(1).to({x:129.9},0).wait(1).to({x:133.8},0).wait(1).to({x:137.1},0).wait(1).to({x:139.9},0).wait(1).to({x:142.2},0).wait(1).to({x:144.2},0).wait(1).to({x:145.7},0).wait(1).to({x:147},0).wait(1).to({x:148},0).wait(1).to({x:148.7},0).wait(1).to({x:149.2},0).wait(1).to({x:149.5},0).wait(1).to({regX:83.5,regY:21.2,x:150.1,y:-206},0).wait(64).to({regX:83,regY:310.6,x:162,y:83.4,alpha:0.95},0).wait(1).to({x:178.6,alpha:0.884},0).wait(1).to({x:201.7,alpha:0.791},0).wait(1).to({x:234.5,alpha:0.66},0).wait(1).to({x:273.1,alpha:0.506},0).wait(1).to({x:304.5,alpha:0.38},0).wait(1).to({x:326.7,alpha:0.292},0).wait(1).to({x:342.6,alpha:0.228},0).wait(1).to({x:354.6,alpha:0.18},0).wait(1).to({x:364,alpha:0.142},0).wait(1).to({x:371.4,alpha:0.112},0).wait(1).to({x:377.5,alpha:0.088},0).wait(1).to({x:382.4,alpha:0.069},0).wait(1).to({x:386.4,alpha:0.053},0).wait(1).to({x:389.7,alpha:0.039},0).wait(1).to({x:392.3,alpha:0.029},0).wait(1).to({x:394.5,alpha:0.02},0).wait(1).to({x:396.2,alpha:0.013},0).wait(1).to({x:397.5,alpha:0.008},0).wait(1).to({x:398.4,alpha:0.004},0).wait(1).to({x:399.1,alpha:0.002},0).wait(1).to({x:399.4,alpha:0},0).wait(1).to({regX:83.5,regY:21.2,x:400.1,y:-206},0).to({_off:true},4).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(280).to({_off:false},0).to({alpha:1},22,cjs.Ease.get(-1)).wait(165));

	// Layer_6
	this.instance_10 = new lib.TEXT1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-125,-163.1,1,1,0,0,0,123.3,63.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.theencore();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-120,-163.5,1,1,0,0,0,114,21.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).wait(1).to({regX:124,regY:308.6,x:-115.7,y:81.9},0).wait(1).to({x:-105.4},0).wait(1).to({x:-92.9},0).wait(1).to({x:-77.4},0).wait(1).to({x:-57.8},0).wait(1).to({x:-33.2},0).wait(1).to({x:-5.1},0).wait(1).to({x:21.6},0).wait(1).to({x:43.7},0).wait(1).to({x:61.2},0).wait(1).to({x:75.1},0).wait(1).to({x:86.4},0).wait(1).to({x:95.7},0).wait(1).to({x:103.6},0).wait(1).to({x:110.3},0).wait(1).to({x:116.1},0).wait(1).to({x:121.1},0).wait(1).to({x:125.4},0).wait(1).to({x:129.2},0).wait(1).to({x:132.5},0).wait(1).to({x:135.4},0).wait(1).to({x:138},0).wait(1).to({x:140.2},0).wait(1).to({x:142.2},0).wait(1).to({x:143.8},0).wait(1).to({x:145.3},0).wait(1).to({x:146.6},0).wait(1).to({x:147.6},0).wait(1).to({x:148.5},0).wait(1).to({x:149.2},0).wait(1).to({x:149.8},0).wait(1).to({x:150.2},0).wait(1).to({x:150.5},0).wait(1).to({x:150.6},0).wait(1).to({regX:123.3,regY:63.6,x:150,y:-163.1},0).wait(67).to({regX:124,regY:308.6,x:165.9,y:81.9,alpha:0.934},0).wait(1).to({x:188.3,alpha:0.837},0).wait(1).to({x:223.2,alpha:0.685},0).wait(1).to({x:268,alpha:0.49},0).wait(1).to({x:302.1,alpha:0.342},0).wait(1).to({x:323.9,alpha:0.247},0).wait(1).to({x:338.8,alpha:0.182},0).wait(1).to({x:349.6,alpha:0.135},0).wait(1).to({x:357.7,alpha:0.1},0).wait(1).to({x:364,alpha:0.073},0).wait(1).to({x:368.8,alpha:0.052},0).wait(1).to({x:372.5,alpha:0.036},0).wait(1).to({x:375.3,alpha:0.023},0).wait(1).to({x:377.4,alpha:0.014},0).wait(1).to({x:379,alpha:0.008},0).wait(1).to({x:380,alpha:0.003},0).wait(1).to({x:380.5,alpha:0.001},0).wait(1).to({regX:123.3,regY:63.6,x:380,y:-163.1,alpha:0},0).to({_off:true},1).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(154).to({_off:false},0).wait(1).to({regX:113.4,regY:297.6,x:-109.4,y:112.9},0).wait(1).to({x:-95.1},0).wait(1).to({x:-76.4},0).wait(1).to({x:-51.2},0).wait(1).to({x:-18},0).wait(1).to({x:17.2},0).wait(1).to({x:45.8},0).wait(1).to({x:66.9},0).wait(1).to({x:82.8},0).wait(1).to({x:95.1},0).wait(1).to({x:105},0).wait(1).to({x:113},0).wait(1).to({x:119.6},0).wait(1).to({x:125.1},0).wait(1).to({x:129.8},0).wait(1).to({x:133.7},0).wait(1).to({x:137},0).wait(1).to({x:139.8},0).wait(1).to({x:142.1},0).wait(1).to({x:144},0).wait(1).to({x:145.6},0).wait(1).to({x:146.8},0).wait(1).to({x:147.8},0).wait(1).to({x:148.5},0).wait(1).to({x:149},0).wait(1).to({x:149.3},0).wait(1).to({regX:114,regY:21.2,x:150,y:-163.5},0).wait(70).to({regX:113.4,regY:297.6,x:162.8,y:112.9,alpha:0.95},0).wait(1).to({x:180.7,alpha:0.884},0).wait(1).to({x:205.7,alpha:0.791},0).wait(1).to({x:241.1,alpha:0.66},0).wait(1).to({x:282.8,alpha:0.506},0).wait(1).to({x:316.8,alpha:0.38},0).wait(1).to({x:340.7,alpha:0.292},0).wait(1).to({x:357.9,alpha:0.228},0).wait(1).to({x:370.9,alpha:0.18},0).wait(1).to({x:381,alpha:0.142},0).wait(1).to({x:389,alpha:0.112},0).wait(1).to({x:395.5,alpha:0.088},0).wait(1).to({x:400.8,alpha:0.069},0).wait(1).to({x:405.2,alpha:0.053},0).wait(1).to({x:408.7,alpha:0.039},0).wait(1).to({x:411.6,alpha:0.029},0).wait(1).to({x:413.9,alpha:0.02},0).wait(1).to({x:415.8,alpha:0.013},0).wait(1).to({x:417.2,alpha:0.008},0).wait(1).to({x:418.2,alpha:0.004},0).wait(1).to({x:418.9,alpha:0.002},0).wait(1).to({x:419.3,alpha:0},0).wait(1).to({regX:114,regY:21.2,x:420,y:-163.5},0).wait(194));

	// Layer_8
	this.instance_12 = new lib.Symbol5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(210.5,222,1,1,0,0,0,90.5,114);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(131).to({_off:false},0).wait(1).to({regX:97.5,regY:132,x:217.5,y:240,alpha:0.001},0).wait(1).to({y:239.9,alpha:0.002},0).wait(1).to({alpha:0.006},0).wait(1).to({y:239.7,alpha:0.01},0).wait(1).to({y:239.6,alpha:0.017},0).wait(1).to({y:239.4,alpha:0.025},0).wait(1).to({y:239.1,alpha:0.035},0).wait(1).to({y:238.8,alpha:0.046},0).wait(1).to({y:238.4,alpha:0.06},0).wait(1).to({y:238,alpha:0.076},0).wait(1).to({y:237.5,alpha:0.095},0).wait(1).to({y:237,alpha:0.116},0).wait(1).to({y:236.3,alpha:0.14},0).wait(1).to({y:235.6,alpha:0.167},0).wait(1).to({y:234.9,alpha:0.198},0).wait(1).to({y:234,alpha:0.231},0).wait(1).to({y:233,alpha:0.267},0).wait(1).to({y:232,alpha:0.307},0).wait(1).to({y:230.9,alpha:0.349},0).wait(1).to({y:229.8,alpha:0.394},0).wait(1).to({y:228.5,alpha:0.44},0).wait(1).to({y:227.3,alpha:0.488},0).wait(1).to({y:226.1,alpha:0.535},0).wait(1).to({y:224.9,alpha:0.582},0).wait(1).to({y:223.7,alpha:0.628},0).wait(1).to({y:222.6,alpha:0.671},0).wait(1).to({y:221.5,alpha:0.711},0).wait(1).to({y:220.5,alpha:0.749},0).wait(1).to({y:219.6,alpha:0.783},0).wait(1).to({y:218.8,alpha:0.815},0).wait(1).to({y:218.1,alpha:0.843},0).wait(1).to({y:217.4,alpha:0.868},0).wait(1).to({y:216.8,alpha:0.891},0).wait(1).to({y:216.3,alpha:0.911},0).wait(1).to({y:215.9,alpha:0.928},0).wait(1).to({y:215.5,alpha:0.943},0).wait(1).to({y:215.1,alpha:0.956},0).wait(1).to({y:214.8,alpha:0.967},0).wait(1).to({y:214.6,alpha:0.977},0).wait(1).to({y:214.4,alpha:0.984},0).wait(1).to({y:214.3,alpha:0.99},0).wait(1).to({y:214.1,alpha:0.995},0).wait(1).to({alpha:0.998},0).wait(1).to({y:214,alpha:0.999},0).wait(1).to({regX:90.5,regY:114,x:210.5,y:196,alpha:1},0).wait(291));

	// black
	this.instance_13 = new lib.black();
	this.instance_13.parent = this;
	this.instance_13.setTransform(153.1,130.1,1,1,0,0,0,155,132);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:0.102},34).wait(98).to({alpha:0},25).wait(310));

	// goindola
	this.instance_14 = new lib.gondolaaaa();
	this.instance_14.parent = this;
	this.instance_14.setTransform(155.5,181,1,1,0,0,0,84.5,108);
	this.instance_14.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:108.4,y:181.9,alpha:0.123},0).wait(1).to({y:182.4,alpha:0.149},0).wait(1).to({y:183.1,alpha:0.178},0).wait(1).to({y:183.9,alpha:0.212},0).wait(1).to({y:184.8,alpha:0.253},0).wait(1).to({y:185.9,alpha:0.303},0).wait(1).to({y:187.2,alpha:0.362},0).wait(1).to({y:188.8,alpha:0.432},0).wait(1).to({y:190.4,alpha:0.505},0).wait(1).to({y:191.9,alpha:0.574},0).wait(1).to({y:193.2,alpha:0.634},0).wait(1).to({y:194.3,alpha:0.683},0).wait(1).to({y:195.3,alpha:0.724},0).wait(1).to({y:196,alpha:0.758},0).wait(1).to({y:196.7,alpha:0.787},0).wait(1).to({y:197.2,alpha:0.812},0).wait(1).to({y:197.7,alpha:0.834},0).wait(1).to({y:198.1,alpha:0.853},0).wait(1).to({y:198.5,alpha:0.87},0).wait(1).to({y:198.8,alpha:0.885},0).wait(1).to({y:199.1,alpha:0.898},0).wait(1).to({y:199.4,alpha:0.91},0).wait(1).to({y:199.6,alpha:0.921},0).wait(1).to({y:199.9,alpha:0.931},0).wait(1).to({y:200,alpha:0.939},0).wait(1).to({y:200.2,alpha:0.947},0).wait(1).to({y:200.4,alpha:0.954},0).wait(1).to({y:200.5,alpha:0.96},0).wait(1).to({y:200.6,alpha:0.966},0).wait(1).to({y:200.8,alpha:0.971},0).wait(1).to({y:200.9,alpha:0.976},0).wait(1).to({y:201,alpha:0.98},0).wait(1).to({alpha:0.983},0).wait(1).to({y:201.1,alpha:0.987},0).wait(1).to({y:201.2,alpha:0.989},0).wait(1).to({alpha:0.992},0).wait(1).to({y:201.3,alpha:0.994},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.997},0).wait(1).to({y:201.4,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(2).to({regY:108,y:201},0).wait(79).to({regY:108.4,y:201.5},0).wait(1).to({y:201.6,alpha:0.998},0).wait(1).to({y:201.9,alpha:0.995},0).wait(1).to({y:202.3,alpha:0.992},0).wait(1).to({y:202.9,alpha:0.987},0).wait(1).to({y:203.6,alpha:0.98},0).wait(1).to({y:204.6,alpha:0.971},0).wait(1).to({y:205.7,alpha:0.961},0).wait(1).to({y:207.1,alpha:0.948},0).wait(1).to({y:208.9,alpha:0.933},0).wait(1).to({y:210.9,alpha:0.914},0).wait(1).to({y:213.4,alpha:0.892},0).wait(1).to({y:216.4,alpha:0.865},0).wait(1).to({y:220.1,alpha:0.832},0).wait(1).to({y:224.6,alpha:0.791},0).wait(1).to({y:230.2,alpha:0.74},0).wait(1).to({y:237.3,alpha:0.676},0).wait(1).to({y:246.4,alpha:0.594},0).wait(1).to({y:257.9,alpha:0.491},0).wait(1).to({y:270.8,alpha:0.374},0).wait(1).to({y:283.2,alpha:0.263},0).wait(1).to({y:293.3,alpha:0.172},0).wait(1).to({y:301.2,alpha:0.101},0).wait(1).to({y:307.4,alpha:0.045},0).wait(1).to({regY:108,y:312,alpha:0},0).wait(320));

	// gondola strings
	this.instance_15 = new lib.strings();
	this.instance_15.parent = this;
	this.instance_15.setTransform(135.5,106,1,1,0,0,0,106.5,205);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.123},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.449},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.592},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.731},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.791},0).wait(1).to({alpha:0.815},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.912},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.973},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(2).to({alpha:1},0).wait(80).to({y:106.1},0).wait(1).to({y:106.3,alpha:0.998},0).wait(1).to({y:106.5,alpha:0.995},0).wait(1).to({y:106.9,alpha:0.992},0).wait(1).to({y:107.5,alpha:0.987},0).wait(1).to({y:108.2,alpha:0.98},0).wait(1).to({y:109.1,alpha:0.971},0).wait(1).to({y:110.3,alpha:0.961},0).wait(1).to({y:111.6,alpha:0.948},0).wait(1).to({y:113.3,alpha:0.933},0).wait(1).to({y:115.3,alpha:0.914},0).wait(1).to({y:117.7,alpha:0.892},0).wait(1).to({y:120.7,alpha:0.865},0).wait(1).to({y:124.2,alpha:0.832},0).wait(1).to({y:128.6,alpha:0.791},0).wait(1).to({y:134.1,alpha:0.74},0).wait(1).to({y:141,alpha:0.676},0).wait(1).to({y:149.9,alpha:0.594},0).wait(1).to({y:161,alpha:0.491},0).wait(1).to({y:173.6,alpha:0.374},0).wait(1).to({y:185.6,alpha:0.263},0).wait(1).to({y:195.5,alpha:0.172},0).wait(1).to({y:203.2,alpha:0.101},0).wait(1).to({y:209.2,alpha:0.045},0).wait(1).to({y:214,alpha:0},0).wait(320));

	// mounts
	this.instance_16 = new lib.mounts();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,232,1,1,0,0,0,150,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(467));

	// gtris
	this.instance_17 = new lib.triangles();
	this.instance_17.parent = this;
	this.instance_17.setTransform(160.1,169,1.08,1,0,0,0,150,151);
	this.instance_17.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(467));

	// stars
	this.instance_18 = new lib.stars();
	this.instance_18.parent = this;
	this.instance_18.setTransform(24.8,-304,1,1,0,0,0,1,1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(149).to({_off:false},0).to({y:-144,alpha:1},23,cjs.Ease.get(1)).wait(294).to({y:-304,mode:"single",startPosition:89},0).wait(1));

	// sky2
	this.instance_19 = new lib.sky2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,33,1,1,0,0,0,150,300);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(149).to({_off:false},0).to({y:32,alpha:1},27).wait(291));

	// sky
	this.instance_20 = new lib.skyo();
	this.instance_20.parent = this;
	this.instance_20.setTransform(150,-50,1,1,0,0,0,150,300);
	this.instance_20.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({alpha:1},34).to({_off:true},143).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,26,324.1,419);
// library properties:
lib.properties = {
	id: 'BBB87069DEC847F9A207D16FEF4AB6C0',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_gondola_atlas_P_.png", id:"300x250_gondola_atlas_P_"},
		{src:"images/300x250_gondola_atlas_NP_.jpg", id:"300x250_gondola_atlas_NP_"}
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
an.compositions['BBB87069DEC847F9A207D16FEF4AB6C0'] = {
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