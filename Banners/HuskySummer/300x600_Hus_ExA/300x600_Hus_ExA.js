(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_Hus_ExA_atlas_P_", frames: [[255,0,203,265],[0,0,253,267],[0,269,208,216]]}
];


// symbols:



(lib.db_Blue = function() {
	this.initialize(img.db_Blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.db_gas = function() {
	this.spriteSheet = ss["300x600_Hus_ExA_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_gas_blur = function() {
	this.spriteSheet = ss["300x600_Hus_ExA_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_logo = function() {
	this.spriteSheet = ss["300x600_Hus_ExA_atlas_P_"];
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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_gas_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,253,267), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AgkCPIAAjdIhVAAIAAhAID0AAIAABAIhWAAIAADdg");
	this.shape.setTransform(235.1,91.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_1.setTransform(208.8,91.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("ABDCPIgRgzIhjAAIgSAzIhNAAIBrkdIBKAAIBrEdgAAgAkIgghjIAAAAIggBjIBAAAg");
	this.shape_2.setTransform(181.4,91.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AhoCPIAAkdIDRAAIAAA8IiHAAIAAA6IB1AAIAAA5Ih1AAIAABug");
	this.shape_3.setTransform(156,91.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_4.setTransform(117,91.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_5.setTransform(90.4,91.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AhnBpQglgpAAhAQAAg/AlgpQAmgsBBAAQBBAAAnAsQAlApAAA/QAABAglApQgnAshBAAQhBAAgmgsgAgyg5QgPAWAAAjQAAAkAPAWQARAbAhAAQAhAAASgbQAPgWAAgkQAAgjgPgWQgSgbghAAQghAAgRAbg");
	this.shape_6.setTransform(60.7,91.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AhiBpQgmgqAAg/QAAg+AmgqQAogsA/AAQAxAAAjAZQAoAcAFAyIhKAAQgCgRgQgLQgQgLgXAAQggAAgSAbQgPAWAAAjQAAAkAPAWQASAbAgAAQAcAAASgMQARgMADgTIg0AAIAAg3IB4AAIAACcIgwAAIgFgfQgaAlg1AAQg/AAgogsg");
	this.shape_7.setTransform(29.3,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AA2CPQgFgHgEgnQgCgbgGgNQgKgSgXAAIg4AAIAABoIhKAAIAAkdICRAAQApAAAbATQAgAVAAAoQAAAZgMATQgMATgVAIIAAABQAkAJAFA7QAEA4AIAJgAg0gSIA+AAQAiAAAAghQAAgfgmAAIg6AAg");
	this.shape_8.setTransform(210.7,54.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_9.setTransform(182.2,54.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("ABZCPIAAjYIgBAAIg8DYIg3AAIg8jYIgBAAIAADYIhGAAIAAkdIBtAAIAxC+IAAAAIAyi+IBtAAIAAEdg");
	this.shape_10.setTransform(149.6,54.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF464").s().p("ABZCPIAAjYIgBAAIg8DYIg3AAIg8jYIgBAAIAADYIhGAAIAAkdIBtAAIAxC+IAAAAIAyi+IBtAAIAAEdg");
	this.shape_11.setTransform(112.6,54.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF464").s().p("AhdBzQgfgfAAg+IAAinIBLAAIAACrQAAAcAMAOQAMAOAZAAQAaAAAMgOQAMgOAAgcIAAirIBLAAIAACnQAAA+geAfQgfAfhAAAQg/AAgegfg");
	this.shape_12.setTransform(79.3,55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF464").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_13.setTransform(51.1,54.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkCPIAAjdIhVAAIAAhAID0AAIAABAIhWAAIAADdg");
	this.shape_14.setTransform(235.1,92.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_15.setTransform(208.8,92.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABDCPIgRgzIhjAAIgSAzIhNAAIBrkdIBKAAIBrEdgAAgAkIgghjIAAAAIggBjIBAAAg");
	this.shape_16.setTransform(181.4,92.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhoCPIAAkdIDRAAIAAA8IiHAAIAAA6IB1AAIAAA5Ih1AAIAABug");
	this.shape_17.setTransform(156,92.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_18.setTransform(117,92.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_19.setTransform(90.4,92.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhnBpQglgpAAhAQAAg/AlgpQAmgsBBAAQBBAAAnAsQAlApAAA/QAABAglApQgnAshBAAQhBAAgmgsgAgyg5QgPAWAAAjQAAAkAPAWQARAbAhAAQAhAAASgbQAPgWAAgkQAAgjgPgWQgSgbghAAQghAAgRAbg");
	this.shape_20.setTransform(60.7,92.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhiBpQgmgqAAg/QAAg+AmgqQAogsA/AAQAxAAAjAZQAoAcAFAyIhKAAQgCgRgQgLQgQgLgXAAQggAAgSAbQgPAWAAAjQAAAkAPAWQASAbAgAAQAcAAASgMQARgMADgTIg0AAIAAg3IB4AAIAACcIgwAAIgFgfQgaAlg1AAQg/AAgogsg");
	this.shape_21.setTransform(29.3,92.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA2CPQgFgHgEgnQgCgbgGgNQgKgSgXAAIg4AAIAABoIhKAAIAAkdICRAAQApAAAbATQAgAVAAAoQAAAZgMATQgMATgVAIIAAABQAkAJAFA7QAEA4AIAJgAg0gSIA+AAQAiAAAAghQAAgfgmAAIg6AAg");
	this.shape_22.setTransform(210.7,55.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_23.setTransform(182.2,55.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABZCPIAAjYIgBAAIg8DYIg3AAIg8jYIgBAAIAADYIhGAAIAAkdIBtAAIAxC+IAAAAIAyi+IBtAAIAAEdg");
	this.shape_24.setTransform(149.6,55.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABZCPIAAjYIgBAAIg8DYIg3AAIg8jYIgBAAIAADYIhGAAIAAkdIBtAAIAxC+IAAAAIAyi+IBtAAIAAEdg");
	this.shape_25.setTransform(112.6,55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhdBzQgfgfAAg+IAAinIBLAAIAACrQAAAcAMAOQAMAOAZAAQAaAAAMgOQAMgOAAgcIAAirIBLAAIAACnQAAA+geAfQgfAfhAAAQg/AAgegfg");
	this.shape_26.setTransform(79.3,56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_27.setTransform(51.1,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(12,38.4,238.1,82), null);


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.467,1],-15.1,-8.8,15.2,8.7).s().p("AlBDPIFUpLIEuCuIlSJLg");
	this.shape.setTransform(32.2,52.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shine, new cjs.Rectangle(0,14,64.3,76.3), null);


(lib.gascan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_gas();
	this.instance.parent = this;
	this.instance.setTransform(-107,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(-107,65,203,265), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.db_Blue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(413.2,7.9,1,1,0,0,0,127.2,41.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AA2CPQgFgHgEgnQgCgbgGgNQgKgSgXAAIg4AAIAABoIhKAAIAAkdICRAAQApAAAbATQAgAVAAAoQAAAZgMATQgMATgVAIIAAABQAkAJAFA7QAEA4AIAJgAg0gSIA+AAQAiAAAAghQAAgfgmAAIg6AAg");
	this.shape.setTransform(233.7,58.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_1.setTransform(205.2,58.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AgkCPIAAjdIhVAAIAAhAIDzAAIAABAIhUAAIAADdg");
	this.shape_2.setTransform(178.1,58.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_3.setTransform(151.8,58.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("ABDCPIgRgzIhjAAIgSAzIhNAAIBrkdIBKAAIBrEdgAAgAkIgghjIAAAAIggBjIBAAAg");
	this.shape_4.setTransform(124.5,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhoCPIAAkdIDRAAIAAA8IiHAAIAAA6IB1AAIAAA5Ih1AAIAABug");
	this.shape_5.setTransform(99,58.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AA1CPIg1hfIg5BfIhWAAIBmiVIheiIIBYAAIAvBZIAyhZIBVAAIhcCIIBlCVg");
	this.shape_6.setTransform(59.3,58.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AhRB2QgigcADgzIA/AAQgBAxAyAAQAUAAAMgIQAOgJAAgRQAAgngxAAIgSABIAAguIASAAQAsAAAAgdQAAgNgLgHQgMgIgRABQgrAAABAnIhAAAQACguAegZQAdgYAtAAQAqAAAcASQAiAUAAAnQAAAUgKAPQgLAQgSADIAAABQAwAMAAA0QAAAsgkAYQgfAVguAAQgzAAgfgZg");
	this.shape_7.setTransform(32.5,58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_8.setTransform(244.9,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkCPIAAjdIhWAAIAAhAID1AAIAABAIhWAAIAADdg");
	this.shape_9.setTransform(218.7,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuCPIhiixIgBAAIAACxIhFAAIAAkdIBMAAIBiCvIABAAIAAivIBGAAIAAEdg");
	this.shape_10.setTransform(190.9,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkCPIAAkdIBJAAIAAEdg");
	this.shape_11.setTransform(169.8,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhnBpQglgpAAhAQAAg/AlgpQAmgsBBAAQBBAAAnAsQAlApAAA/QAABAglApQgnAshBAAQhBAAgmgsgAgyg5QgPAWAAAjQAAAkAPAWQARAbAhAAQAhAAASgbQAPgWAAgkQAAgjgPgWQgSgbghAAQghAAgRAbg");
	this.shape_12.setTransform(148,19.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah3CPIAAkdICHAAQAtAAAbAVQAgAYAAAvQgBBihnAAIg8AAIAABfgAgsgJIAxAAQAoAAAAgkQAAglgoAAIgxAAg");
	this.shape_13.setTransform(119.5,19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkCPIAAjdIhVAAIAAhAID0AAIAABAIhWAAIAADdg");
	this.shape_14.setTransform(79.5,19.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_15.setTransform(53.2,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhiBpQgmgqAAg/QAAg+AmgqQAogsA/AAQAxAAAjAZQAoAcAFAyIhKAAQgCgRgQgLQgQgLgXAAQggAAgSAbQgPAWAAAjQAAAkAPAWQASAbAgAAQAcAAASgMQARgMADgTIg0AAIAAg3IB4AAIAACcIgwAAIgFgfQgaAlg1AAQg/AAgogsg");
	this.shape_16.setTransform(23.2,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AA2CPQgFgHgEgnQgCgbgGgNQgKgSgXAAIg4AAIAABoIhKAAIAAkdICRAAQApAAAbATQAgAVAAAoQAAAZgMATQgMATgVAIIAAABQAkAJAFA7QAEA4AIAJgAg0gSIA+AAQAiAAAAghQAAgfgmAAIg6AAg");
	this.shape_17.setTransform(233.7,59.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_18.setTransform(205.2,59.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkCPIAAjdIhVAAIAAhAIDzAAIAABAIhUAAIAADdg");
	this.shape_19.setTransform(178.1,59.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_20.setTransform(151.8,59.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABDCPIgRgzIhjAAIgSAzIhNAAIBrkdIBKAAIBrEdgAAgAkIgghjIAAAAIggBjIBAAAg");
	this.shape_21.setTransform(124.5,59.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhoCPIAAkdIDRAAIAAA8IiHAAIAAA6IB1AAIAAA5Ih1AAIAABug");
	this.shape_22.setTransform(99,59.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA1CPIg1hfIg5BfIhWAAIBmiVIheiIIBYAAIAvBZIAyhZIBVAAIhcCIIBlCVg");
	this.shape_23.setTransform(59.3,59.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhRB2QgigcADgzIA/AAQgBAxAyAAQAUAAAMgIQAOgJAAgRQAAgngxAAIgSACIAAgvIASAAQAsAAAAgdQAAgNgLgHQgMgIgRAAQgrAAABAoIhAAAQACgtAegaQAdgYAtAAQAqAAAcASQAiAUAAAnQAAAUgKAPQgLAQgSADIAAACQAwALAAA0QAAArgkAZQgfAVguAAQgzAAgfgZg");
	this.shape_24.setTransform(32.5,59.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhWB9QglgbAAgzIBKAAQACAsAzAAQATAAANgGQAOgIAAgPQAAgQgagKIg3gQQgmgKgTgOQgbgWAAgjQAAgrAmgYQAhgUAtAAQAvAAAfAWQAkAZAAAtIhKAAQABgSgPgJQgNgHgSAAQgkAAAAAYQAAAOAaAJQAOAFAqAKQAlAKATAQQAaAUAAAjQAAAygmAZQghAVg1AAQg1AAghgYg");
	this.shape_25.setTransform(244.9,20.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkCPIAAjdIhWAAIAAhAID1AAIAABAIhWAAIAADdg");
	this.shape_26.setTransform(218.7,20.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAuCPIhiixIgBAAIAACxIhFAAIAAkdIBMAAIBiCvIABAAIAAivIBGAAIAAEdg");
	this.shape_27.setTransform(190.9,20.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkCPIAAkdIBJAAIAAEdg");
	this.shape_28.setTransform(169.8,20.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhnBpQglgpAAhAQAAg/AlgpQAmgsBBAAQBBAAAnAsQAlApAAA/QAABAglApQgnAshBAAQhBAAgmgsgAgyg5QgPAWAAAjQAAAkAPAWQARAbAhAAQAhAAASgbQAPgWAAgkQAAgjgPgWQgSgbghAAQghAAgRAbg");
	this.shape_29.setTransform(148,20.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ah3CPIAAkdICHAAQAtAAAbAVQAgAYAAAvQgBBihnAAIg8AAIAABfgAgsgJIAxAAQAoAAAAgkQAAglgoAAIgxAAg");
	this.shape_30.setTransform(119.5,20.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkCPIAAjdIhVAAIAAhAID0AAIAABAIhWAAIAADdg");
	this.shape_31.setTransform(79.5,20.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhzCPIAAkdIDjAAIAAA8IiYAAIAAAyICLAAIAAA4IiLAAIAAA3ICcAAIAABAg");
	this.shape_32.setTransform(53.2,20.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhiBpQgmgqAAg/QAAg+AmgqQAogsA/AAQAxAAAjAZQAoAcAFAyIhKAAQgCgRgQgLQgQgLgXAAQggAAgSAbQgPAWAAAjQAAAkAPAWQASAbAgAAQAcAAASgMQARgMADgTIg0AAIAAg3IB4AAIAACcIgwAAIgFgfQgaAlg1AAQg/AAgogsg");
	this.shape_33.setTransform(23.2,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(6,3.6,530.1,83.4), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgaIAAjFQAAgaAeAAIODAAQAeAAAAAaIAADFQAAAageAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AnBB9QgeAAAAgaIAAjFQAAgaAeAAIODAAQAeAAAAAaIAADFQAAAageAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:5.7}).wait(19).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_47,x:41,y:5.7}).wait(52).to({graphics:null,x:0,y:0}).wait(54));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(28).to({_off:false},0).wait(35).to({x:-50.5},0).to({_off:true},17).wait(54));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAfQgJgHAAgMIAPAAQAAAHAFADQAEADAGAAQAGAAADgBQAFgDAAgFQAAgFgHgCIgNgEQgKgDgFgDQgGgFAAgJQAAgKAIgGQAIgFAKAAQAMAAAHAFQAJAGAAAMIgPAAQgBgLgMAAQgFAAgDACQgDACAAAEQAAAEAEACIAQAFQAIACAFADQAIAEAAALQAAAKgHAGQgIAGgOAAQgMAAgJgGg");
	this.shape.setTransform(76.8,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAPAAIAAA6IAiAAIAAANg");
	this.shape_1.setTransform(70.9,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAkIAAhHIAPAAIAABHg");
	this.shape_2.setTransform(66.2,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAkIgGgQIgZAAIgGAQIgQAAIAbhHIAPAAIAbBHgAAJAIIgJgZIAAAAIgIAZIARAAg");
	this.shape_3.setTransform(61.3,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAkIAAg5IgVAAIAAgOIA5AAIAAAOIgVAAIAAA5g");
	this.shape_4.setTransform(54.9,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA0AAIAAAOIgkAAIAAAPIAhAAIAAALIghAAIAAASIAlAAIAAANg");
	this.shape_5.setTransform(48.8,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAkIAAhHIAfAAQAOAAAIAJQAJAJAAARQAAAQgHAJQgJALgPAAgAgPAXIAOAAQAHAAAEgFQAGgGAAgLQAAgKgFgGQgEgGgLAAIgLAAg");
	this.shape_6.setTransform(41.8,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAkIgCgIIgBgJQAAgGgDgDQgDgCgFAAIgPAAIAAAcIgQAAIAAhHIAmAAQAJAAAGAGQAGAGAAAIQAAANgMAEIAAAAQAKADABAOIAAAIQABAGACADgAgOgCIAQAAQALAAAAgLQAAgJgLAAIgQAAg");
	this.shape_7.setTransform(31.8,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA1AAIAAAOIgmAAIAAAPIAiAAIAAALIgiAAIAAASIAmAAIAAANg");
	this.shape_8.setTransform(25,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAxAAIAAAOIghAAIAAAQIAcAAIAAALIgcAAIAAAeg");
	this.shape_9.setTransform(18.9,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAxAAIAAAOIgiAAIAAAQIAeAAIAAALIgeAAIAAAeg");
	this.shape_10.setTransform(13,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgPAAgKgKgAgOgQQgEAHAAAJQAAAKAEAHQAFAHAJAAQAJAAAGgHQAFgHgBgKQABgJgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_11.setTransform(5.9,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AFQAfQgKgHABgMIAPAAQAAAHAFADQAEADAHAAQAGAAADgBQAFgDAAgFQAAgFgHgCIgPgEQgKgDgEgDQgGgFAAgJQAAgKAIgGQAHgFALAAQANAAAHAFQAJAGAAAMIgQAAQAAgLgNAAQgFAAgDACQgEACAAAEQABAEAEACIARAFQAIACAEADQAJAEAAALQAAAKgIAGQgHAGgOAAQgNAAgJgGgAl5AbQgJgLAAgQQAAgPAJgKQAKgLAQAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgQAAgKgKgAlugQQgEAHAAAJQAAAKAEAHQAFAHAKAAQAJAAAGgHQAFgHgBgKQABgJgFgHQgFgHgKAAQgKAAgFAHgAEQAkIAAhHIAQAAIAAA6IAjAAIAAANgADzAkIAAhHIAQAAIAABHgADdAkIgGgQIgaAAIgGAQIgPAAIAbhHIAQAAIAaBHgADUAIIgJgZIgBAAIgJAZIATAAgACCAkIAAg5IgWAAIAAgOIA7AAIAAAOIgWAAIAAA5gAAyAkIAAhHIA1AAIAAAOIgmAAIAAAPIAiAAIAAALIgiAAIAAASIAnAAIAAANgAgYAkIAAhHIAeAAQAPAAAIAJQAJAJAAARQAAAQgHAJQgJALgQAAgAgIAXIANAAQAIAAAEgFQAGgGAAgLQAAgKgFgGQgEgGgMAAIgKAAgAhOAkIgBgIIgBgJQAAgGgDgDQgDgCgFAAIgRAAIAAAcIgPAAIAAhHIAnAAQAJAAAFAGQAHAGgBAIQAAANgLAEIAAAAQAKADABAOIAAAIQAAAGACADgAhsgCIASAAQAKAAAAgLQAAgJgKAAIgSAAgAi8AkIAAhHIA2AAIAAAOIgmAAIAAAPIAjAAIAAALIgjAAIAAASIAmAAIAAANgAj2AkIAAhHIAxAAIAAAOIgiAAIAAAQIAeAAIAAALIgeAAIAAAegAkyAkIAAhHIAzAAIAAAOIgjAAIAAAQIAeAAIAAALIgeAAIAAAeg");
	this.shape_12.setTransform(41.1,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).to({state:[{t:this.shape_12}]},28).to({state:[]},52).wait(54));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1BAEDB").s().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");
	this.shape_13.setTransform(41,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},19).wait(28).to({_off:false},0).to({_off:true},52).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.8,96,25);


// stage content:
(lib._300x600_Hus_ExA = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:-5.5,regY:197.5,x:-85.7,y:297.7},0).wait(1).to({x:-49.9,y:298.1},0).wait(1).to({x:-9.1,y:298.5},0).wait(1).to({x:28.9,y:298.9},0).wait(1).to({x:61,y:299.2},0).wait(1).to({x:87.2,y:299.5},0).wait(1).to({x:108.5,y:299.7},0).wait(1).to({x:125.7,y:299.9},0).wait(1).to({x:139.7,y:300.1},0).wait(1).to({x:150.9,y:300.2},0).wait(1).to({x:159.8,y:300.3},0).wait(1).to({x:166.8,y:300.4},0).wait(1).to({x:172.1},0).wait(1).to({x:176,y:300.5},0).wait(1).to({x:178.6},0).wait(1).to({x:180},0).wait(1).to({regX:52,regY:68,x:238,y:171},0).wait(1).to({regX:-5.5,regY:197.5,x:180.4,y:300.5},0).wait(1).to({x:180.1},0).wait(1).to({x:179.3},0).wait(1).to({x:177.9},0).wait(1).to({x:175.1},0).wait(1).to({x:171.8},0).wait(1).to({x:169.9},0).wait(1).to({x:169},0).wait(1).to({x:168.6},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(62));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.5,298.5,1,1,0,0,0,126.5,133.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(1).to({x:-100.3,alpha:0.959},0).wait(1).to({x:-69.9,alpha:0.897},0).wait(1).to({x:-35.3,alpha:0.827},0).wait(1).to({x:-3,alpha:0.761},0).wait(1).to({x:24.2,alpha:0.706},0).wait(1).to({x:46.4,alpha:0.661},0).wait(1).to({x:64.5,alpha:0.624},0).wait(1).to({x:79.1,alpha:0.594},0).wait(1).to({x:90.9,alpha:0.57},0).wait(1).to({x:100.4,alpha:0.551},0).wait(1).to({x:108,alpha:0.536},0).wait(1).to({x:113.9,alpha:0.524},0).wait(1).to({x:118.4,alpha:0.515},0).wait(1).to({x:121.7,alpha:0.508},0).wait(1).to({x:123.9,alpha:0.503},0).wait(1).to({x:125.2,alpha:0.501},0).wait(1).to({x:125.5,alpha:0.5},0).wait(1).to({x:125.4,alpha:0.496},0).wait(1).to({x:124.8,alpha:0.482},0).wait(1).to({x:123.6,alpha:0.451},0).wait(1).to({x:121.2,alpha:0.391},0).wait(1).to({x:116.6,alpha:0.276},0).wait(1).to({x:111.1,alpha:0.139},0).wait(1).to({x:107.9,alpha:0.06},0).wait(1).to({x:106.4,alpha:0.022},0).wait(1).to({x:105.7,alpha:0.005},0).wait(1).to({x:105.5,alpha:0},0).wait(62));

	// cta
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(218,560.6,1.1,1.1,0,0,0,41.1,7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({alpha:1,startPosition:47},19).wait(52));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_54 = new cjs.Graphics().p("AzSNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_55 = new cjs.Graphics().p("AxoNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_56 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_57 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_58 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_59 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_60 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_61 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_62 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_63 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_64 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_65 = new cjs.Graphics().p("Aw2NIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_66 = new cjs.Graphics().p("AwRNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_67 = new cjs.Graphics().p("AvzNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_68 = new cjs.Graphics().p("AvdNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_69 = new cjs.Graphics().p("AvMNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_70 = new cjs.Graphics().p("AvBNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_71 = new cjs.Graphics().p("Au7NIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_72 = new cjs.Graphics().p("Au5NIIAAsgMAi0AAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:-123.5,y:84}).wait(1).to({graphics:mask_graphics_55,x:-112.9,y:84}).wait(1).to({graphics:mask_graphics_56,x:-82.4,y:84}).wait(1).to({graphics:mask_graphics_57,x:-45.4,y:84}).wait(1).to({graphics:mask_graphics_58,x:-9.9,y:84}).wait(1).to({graphics:mask_graphics_59,x:20.6,y:84}).wait(1).to({graphics:mask_graphics_60,x:46,y:84}).wait(1).to({graphics:mask_graphics_61,x:66.9,y:84}).wait(1).to({graphics:mask_graphics_62,x:84,y:84}).wait(1).to({graphics:mask_graphics_63,x:98,y:84}).wait(1).to({graphics:mask_graphics_64,x:109.4,y:84}).wait(1).to({graphics:mask_graphics_65,x:115.1,y:84}).wait(1).to({graphics:mask_graphics_66,x:118.8,y:84}).wait(1).to({graphics:mask_graphics_67,x:121.7,y:84}).wait(1).to({graphics:mask_graphics_68,x:124,y:84}).wait(1).to({graphics:mask_graphics_69,x:125.6,y:84}).wait(1).to({graphics:mask_graphics_70,x:126.7,y:84}).wait(1).to({graphics:mask_graphics_71,x:127.3,y:84}).wait(1).to({graphics:mask_graphics_72,x:127.6,y:84}).wait(71));

	// masked
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape.setTransform(247.1,130.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIAAAAQACgHAGgGQAHgFAIAAIAHAAIAAASIgIgBQgJAAgGAHQgGAIAAAMIAAAng");
	this.shape_1.setTransform(240.4,130.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_2.setTransform(232.3,130.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqAqIAAgvQAAgMgCgEQgDgGgKAAQgRAAAAAWIAAAvIgSAAIAAg0QAAgIgDgEQgDgFgIAAQgIAAgFAFQgFAGgBALIAAAvIgSAAIAAhRIASAAIAAALIAAAAQAJgOARABQAQgBAFAOQALgOAPABQAcAAAAAcIAAA3g");
	this.shape_3.setTransform(220.6,130.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIARAAIAAAQIAAAAQACgHAGgGQAHgFAIAAIAHAAIAAASIgIgBQgJAAgGAHQgGAIAAAMIAAAng");
	this.shape_4.setTransform(207,130.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_5.setTransform(199,130.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA5IgcgrIgcArIgXAAIAog6Iglg3IAXAAIAZAoIAbgoIAXAAIgmA3IAoA6g");
	this.shape_6.setTransform(184.6,129.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAvQgJgKgBgSIASAAQAAALAGAGQAFAHAKAAQAJAAAGgFQAGgGABgJQgBgVgcACIAAgNQAKABAGgEQAIgFAAgJQAAgHgFgFQgFgEgHAAQgIAAgGAHQgEAGAAAKIgTAAQABgRAKgLQAKgKAQAAQAOAAAKAHQALAIAAAOQAAATgQAFIAAABQAJACAGAGQAFAIABALQgBAPgLAKQgMAJgQAAQgSAAgLgLg");
	this.shape_7.setTransform(175.1,129.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIASAAIAAALQAHgOASAAQASAAAKANQAKAMAAATQAAARgJAMQgKAOgRAAQgSAAgIgNIAAApgAgQgiQgHAHABAOQAAANAGAHQAGAIAKAAQAMAAAFgJQAGgHAAgMQAAgMgGgIQgHgJgKAAQgLAAgFAIg");
	this.shape_8.setTransform(161.6,132);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAKIAAgzIATAAIAAAxQAAAUAPAAQAUAAAAgWIAAgvIASAAIAABRIgSAAIAAgMIAAAAQgDAGgHAFQgHADgFABQgggBAAggg");
	this.shape_9.setTransform(151.9,130.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(141,129.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_11.setTransform(137.1,129.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA5IAAhRIARAAIAABRgAgIgnIAAgRIARAAIAAARg");
	this.shape_12.setTransform(133.3,129.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKA5IAAhEIgNAAIAAgNIANAAIAAgHQAAgPAHgGQAFgEAKAAIAMABIAAAOIgIgBQgJAAAAAJIAAAJIAQAAIAAANIgQAAIAABEg");
	this.shape_13.setTransform(129,129.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjAKIAAgzIASAAIAAAxQAAAUAQAAQATAAAAgWIAAgvIASAAIAABRIgSAAIAAgMIAAAAQgDAGgHAFQgGADgHABQgegBAAggg");
	this.shape_14.setTransform(117.4,130.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_15.setTransform(108.1,130.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggA5IAAgQIAJABQAFAAADgDQADgCABgGIADgHIgghRIAUAAIAVA9IAAAAIAVg9IATAAIggBWQgHAPgCAFQgHAJgNAAIgMgBg");
	this.shape_16.setTransform(99.2,132.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAqIAAgzQAAgSgQAAQgIAAgFAGQgGAHAAAJIAAAvIgTAAIAAhRIASAAIAAAMIAAAAQAJgPAQABQAOgBAHAIQAJAHgBAOIAAA3g");
	this.shape_17.setTransform(86.1,130.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_18.setTransform(77.2,130.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASA5IAAg0QAAgRgQAAQgIAAgFAGQgGAGAAAIIAAAxIgTAAIAAhxIATAAIAAAqQADgGAHgDQAHgEAHAAQAOAAAHAHQAJAHgBANIAAA5g");
	this.shape_19.setTransform(68.1,129.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXA5IgXhXIAAAAIgXBXIgVAAIgdhxIAUAAIAUBWIABAAIAXhWIATAAIAXBWIAAAAIAVhWIAUAAIgfBxg");
	this.shape_20.setTransform(56,129.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},54).wait(89));

	// dog
	this.instance_3 = new lib.db_logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,493,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-170.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({regX:271.4,regY:39.6,x:5.9,y:62.6},0).wait(1).to({x:7.5},0).wait(1).to({x:10.3},0).wait(1).to({x:14.6},0).wait(1).to({x:21},0).wait(1).to({x:29.8},0).wait(1).to({x:42},0).wait(1).to({x:58.7},0).wait(1).to({x:81.7},0).wait(1).to({x:112.9},0).wait(1).to({x:151.6},0).wait(1).to({x:189.8},0).wait(1).to({x:220.2},0).wait(1).to({x:242.2},0).wait(1).to({x:257.8},0).wait(1).to({x:268.8},0).wait(1).to({x:276.5},0).wait(1).to({x:281.7},0).wait(1).to({x:285.1},0).wait(1).to({x:286.9},0).wait(1).to({regX:95.9,regY:32,x:111.9,y:55},0).wait(90));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,300,560,601);
// library properties:
lib.properties = {
	id: '3425675A7A2D434FB1A7BE1713B1B77E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_Blue.jpg", id:"db_Blue"},
		{src:"images/300x600_Hus_ExA_atlas_P_.png", id:"300x600_Hus_ExA_atlas_P_"}
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
an.compositions['3425675A7A2D434FB1A7BE1713B1B77E'] = {
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