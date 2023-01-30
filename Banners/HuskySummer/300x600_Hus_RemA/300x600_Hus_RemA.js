(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_Hus_RemA_atlas_P_", frames: [[0,602,236,289],[302,0,195,301],[0,0,300,600],[302,303,208,216]]}
];


// symbols:



(lib.db_cafe_blur = function() {
	this.spriteSheet = ss["300x600_Hus_RemA_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_coffee = function() {
	this.spriteSheet = ss["300x600_Hus_RemA_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_green = function() {
	this.spriteSheet = ss["300x600_Hus_RemA_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.db_logo = function() {
	this.spriteSheet = ss["300x600_Hus_RemA_atlas_P_"];
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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_cafe_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,236,289), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AghCBIAAjHIhMAAIAAg5IDbAAIAAA5IhNAAIAADHg");
	this.shape.setTransform(224.7,90.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgJgRgNQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARANQAYASAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_1.setTransform(201,90.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AA8CBIgQgvIhZAAIgPAvIhFAAIBgkAIBDAAIBgEAgAAdAhIgdhZIAAAAIgdBZIA6AAg");
	this.shape_2.setTransform(176.4,90.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AheCBIAAkAIC9AAIAAA1Ih6AAIAAA1IBpAAIAAAzIhpAAIAABjg");
	this.shape_3.setTransform(153.5,90.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgJgRgNQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARANQAYASAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_4.setTransform(118.5,90.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhnCBIAAkAIDMAAIAAA1IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_5.setTransform(94.5,90.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtg0QgOAVAAAfQAAAgAOAUQAQAZAdAAQAeAAAQgZQAOgUAAggQAAgfgOgVQgQgXgeAAQgdAAgQAXg");
	this.shape_6.setTransform(67.8,90.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AhYBfQgjgmABg5QgBg4AjgmQAkgnA5AAQArAAAgAXQAkAZAFAtIhEAAQgBgQgOgKQgOgJgVAAQgdAAgQAXQgOAVAAAfQAAAgAOAUQAQAZAdAAQAZgBAPgKQAQgLADgSIgvAAIAAgwIBsAAIAACMIgrAAIgEgdQgXAigwAAQg5AAgkgng");
	this.shape_7.setTransform(39.5,90.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AAxCAQgFgGgDgiQgCgZgGgLQgJgRgUAAIgzAAIAABdIhCAAIAAj/ICBAAQAmAAAYAQQAcAUAAAkQABAWgLAQQgKASgUAHIAAABQAhAHAFA2QADAzAHAHgAgvgQIA3AAQAgAAAAgeQAAgcgiAAIg1AAg");
	this.shape_8.setTransform(202.8,53.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AhnCAIAAj/IDMAAIAAA1IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA5g");
	this.shape_9.setTransform(177.1,53.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("ABQCAIAAjBIAAAAIg2DBIgzAAIg2jBIAAAAIAADBIg/AAIAAj/IBiAAIAsCqIAAAAIAtiqIBiAAIAAD/g");
	this.shape_10.setTransform(147.7,53.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF464").s().p("ABQCAIAAjBIAAAAIg2DBIgzAAIg2jBIAAAAIAADBIg/AAIAAj/IBiAAIAsCqIAAAAIAtiqIBiAAIAAD/g");
	this.shape_11.setTransform(114.4,53.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF464").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_12.setTransform(84.4,53.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF464").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgKgRgMQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARAOQAYARAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_13.setTransform(59.1,53.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_14.setTransform(224.7,91.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhNBxQgigZAAguIBDAAQACAoAuAAQARAAALgGQANgHAAgNQAAgPgXgIIgygPQgjgJgRgNQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgQgNgJQgLgGgRAAQggAAAAAWQAAAMAXAIQANAFAlAIQAiAKARAOQAYATAAAfQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_15.setTransform(201,91.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA8CBIgQguIhZAAIgPAuIhFAAIBgkBIBDAAIBgEBgAAdAhIgdhaIAAAAIgdBaIA6AAg");
	this.shape_16.setTransform(176.4,91.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA1IBpAAIAAAzIhpAAIAABjg");
	this.shape_17.setTransform(153.5,91.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhNBxQgigZAAguIBDAAQACAoAuAAQARAAALgGQANgHAAgNQAAgPgXgIIgygPQgjgJgRgNQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgQgNgJQgLgGgRAAQggAAAAAWQAAAMAXAIQANAFAlAIQAiAKARAOQAYATAAAfQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_18.setTransform(118.5,91.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_19.setTransform(94.5,91.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtgzQgOAUAAAfQAAAgAOAUQAQAZAdAAQAeAAAQgZQAOgUAAggQAAgfgOgUQgQgYgeAAQgdAAgQAYg");
	this.shape_20.setTransform(67.8,91.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhYBfQgjgmABg5QgBg4AjgmQAkgnA5AAQArAAAgAWQAkAaAFAtIhEAAQgBgQgOgKQgOgJgVAAQgdAAgQAYQgOAUAAAfQAAAgAOAUQAQAZAdAAQAZgBAPgKQAQgLADgRIgvAAIAAgyIBsAAIAACNIgrAAIgEgcQgXAhgwAAQg5AAgkgng");
	this.shape_21.setTransform(39.5,91.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAxCBQgFgGgDgjQgCgZgGgMQgJgQgUAAIgzAAIAABeIhCAAIAAkBICBAAQAmAAAYARQAcAUAAAkQABAVgLARQgKASgUAHIAAABQAhAHAFA2QADAzAHAIgAgvgQIA3AAQAgAAAAgeQAAgcgiAAIg1AAg");
	this.shape_22.setTransform(202.8,54.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_23.setTransform(177.1,54.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABQCBIAAjCIAAAAIg2DCIgzAAIg2jCIAAAAIAADCIg/AAIAAkBIBiAAIAsCrIAAAAIAtirIBiAAIAAEBg");
	this.shape_24.setTransform(147.7,54.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABQCBIAAjCIAAAAIg2DCIgzAAIg2jCIAAAAIAADCIg/AAIAAkBIBiAAIAsCrIAAAAIAtirIBiAAIAAEBg");
	this.shape_25.setTransform(114.4,54.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_26.setTransform(84.4,54.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgJgRgNQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARANQAYASAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_27.setTransform(59.1,54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(23.7,38.4,214.7,78), null);


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
	this.instance = new lib.db_coffee();
	this.instance.parent = this;
	this.instance.setTransform(-100,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(-100,76,195,301), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.db_green();
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
	this.shape.graphics.f("#FFF464").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgKgRgMQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgVg");
	this.shape.setTransform(213.4,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("Ah1CAIAAj/IBuAAQA6gBAiAjQAhAhAAA8QAAA9ghAjQghAgg7AAgAgyBHIAfAAQAmgBAQgRQAQgQAAglQAAhGhGAAIgfAAg");
	this.shape_1.setTransform(188.2,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AAxCAQgFgGgDgiQgCgZgGgLQgJgRgUAAIgzAAIAABdIhCAAIAAj/ICBAAQAmAAAYAQQAcAUAAAkQABAWgLAQQgKASgUAHIAAABQAhAHAFA3QADAyAHAHgAgvgQIA3AAQAgAAAAgeQgBgcghAAIg1AAg");
	this.shape_2.setTransform(161.9,56.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AA8CAIgPguIhZAAIgQAuIhFAAIBgj/IBDAAIBgD/gAAdAhIgdhZIAAAAIgdBZIA6AAg");
	this.shape_3.setTransform(135.6,56.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AAkCAIgkivIAAAAIgjCvIhEAAIhFj/IBDAAIAkC7IABAAIAmi7IA+AAIAlC7IABAAIAki7IBDAAIhGD/g");
	this.shape_4.setTransform(105.5,56.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhnCAIAAj/IDMAAIAAA1IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA5g");
	this.shape_5.setTransform(76.3,56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AAwCAQgEgGgDgiQgCgZgGgLQgIgRgWAAIgxAAIAABdIhEAAIAAj/ICDAAQAmAAAYAQQAcAUAAAkQAAAWgKAQQgMASgTAHIAAABQAhAHAFA3QADAyAIAHgAgugQIA3AAQAeAAAAgeQABgcgiAAIg0AAg");
	this.shape_6.setTransform(51.4,56.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwCBQgDgHgFgjQgBgYgGgMQgIgQgWAAIgyAAIAABeIhDAAIAAkBICDAAQAlAAAYARQAdATAAAlQAAAVgLASQgKARgUAHIAAABQAhAIAEA1QAEAzAHAIgAgvgQIA4AAQAeAAAAgeQAAgcghAAIg1AAg");
	this.shape_7.setTransform(250.4,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_8.setTransform(224.7,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_9.setTransform(200.4,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNBwQgigYAAguIBDAAQACAoAuAAQARAAALgGQANgHAAgNQAAgPgXgJIgygNQgjgLgRgMQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgQgNgJQgLgGgRAAQggAAAAAWQAAANAXAHQANAFAlAJQAiAJARAOQAYATAAAfQAAAtgjAWQgdATgwAAQgwAAgdgWg");
	this.shape_10.setTransform(176.7,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA8CBIgQguIhZAAIgPAuIhFAAIBgkBIBDAAIBgEBgAAdAgIgdhZIAAAAIgdBZIA6AAg");
	this.shape_11.setTransform(152.1,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA0IBpAAIAAA0IhpAAIAABjg");
	this.shape_12.setTransform(129.2,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqCBIhYifIgBAAIAACfIg/AAIAAkBIBFAAIBYCeIABAAIAAieIA/AAIAAEBg");
	this.shape_13.setTransform(92.8,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAxCBQgFgHgDgjQgCgYgGgMQgIgQgVAAIgzAAIAABeIhCAAIAAkBICBAAQAmAAAZARQAbATAAAlQABAVgLASQgKARgUAHIAAABQAhAIAFA1QADAzAIAIgAgvgQIA3AAQAgAAAAgeQAAgcgiAAIg1AAg");
	this.shape_14.setTransform(67.3,18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA8CBIgQguIhZAAIgPAuIhFAAIBgkBIBDAAIBgEBgAAdAgIgdhZIAAAAIgdBZIA6AAg");
	this.shape_15.setTransform(41,18.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_16.setTransform(16.3,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgJgRgNQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARANQAYASAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_17.setTransform(213.4,57.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah1CBIAAkBIBuAAQA6AAAiAjQAhAhAAA8QAAA9ghAjQghAgg7ABgAgyBHIAfAAQAmgBAQgRQAQgQAAgmQAAhFhGAAIgfAAg");
	this.shape_18.setTransform(188.2,57.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAxCBQgFgGgDgkQgCgYgGgMQgJgQgUAAIgzAAIAABeIhCAAIAAkBICBAAQAmAAAYARQAcAUAAAkQABAVgLARQgKASgUAHIAAABQAhAHAFA2QADAzAHAIgAgvgQIA3AAQAgAAAAgeQgBgcghAAIg1AAg");
	this.shape_19.setTransform(161.9,57.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA8CBIgPgvIhZAAIgQAvIhFAAIBgkBIBDAAIBgEBgAAdAhIgdhZIAAAAIgdBZIA6AAg");
	this.shape_20.setTransform(135.6,57.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAkCBIgkiwIAAAAIgjCwIhEAAIhFkBIBDAAIAkC8IABAAIAmi8IA+AAIAlC8IABAAIAki8IBDAAIhGEBg");
	this.shape_21.setTransform(105.5,57.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_22.setTransform(76.3,57.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAwCBQgEgGgDgkQgCgYgGgMQgIgQgWAAIgxAAIAABeIhEAAIAAkBICDAAQAmAAAYARQAcAUAAAkQAAAVgKARQgMASgTAHIAAABQAhAHAFA2QADAzAIAIgAgugQIA3AAQAeAAAAgeQABgcgiAAIg0AAg");
	this.shape_23.setTransform(51.4,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAwCBQgDgHgFgjQgBgYgGgMQgIgQgWAAIgyAAIAABeIhDAAIAAkBICDAAQAlAAAYARQAdATAAAlQAAAVgLASQgKAQgUAJIAAAAQAhAIAEA1QAEAzAHAIgAgvgQIA4AAQAeAAAAgeQAAgcghAAIg1AAg");
	this.shape_24.setTransform(250.4,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_25.setTransform(224.7,19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_26.setTransform(200.4,19.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhNBwQgigYAAguIBDAAQACAoAuAAQARAAALgGQANgHAAgNQAAgPgXgJIgygNQgjgKgRgNQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgQgNgJQgLgGgRAAQggAAAAAWQAAANAXAHQANAFAlAJQAiAJARAOQAYATAAAfQAAAtgjAWQgdATgwAAQgwAAgdgWg");
	this.shape_27.setTransform(176.7,19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA8CBIgQguIhZAAIgPAuIhFAAIBgkBIBDAAIBgEBgAAdAgIgdhZIAAAAIgdBZIA6AAg");
	this.shape_28.setTransform(152.1,19.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA0IBpAAIAAA0IhpAAIAABjg");
	this.shape_29.setTransform(129.2,19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAqCBIhYigIgBAAIAACgIg/AAIAAkBIBFAAIBYCeIABAAIAAieIA/AAIAAEBg");
	this.shape_30.setTransform(92.8,19.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAxCBQgFgHgDgjQgCgYgGgMQgIgQgVAAIgzAAIAABeIhCAAIAAkBICBAAQAmAAAZARQAbATAAAlQABAVgLASQgKAQgUAJIAAAAQAhAIAFA1QADAzAIAIgAgvgQIA3AAQAgAAAAgeQAAgcgiAAIg1AAg");
	this.shape_31.setTransform(67.3,19.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AA8CBIgQguIhZAAIgPAuIhFAAIBgkBIBDAAIBgEBgAAdAgIgdhZIAAAAIgdBZIA6AAg");
	this.shape_32.setTransform(41,19.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_33.setTransform(16.3,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(1.6,3.6,522.8,79.4), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgaIAAjFQAAgaAeAAIODAAQAeAAAAAaIAADFQAAAageAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AnBB9QgeAAAAgaIAAjFQAAgaAeAAIODAAQAeAAAAAaIAADFQAAAageAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:5.7}).wait(19).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_47,x:41,y:5.7}).wait(54).to({graphics:null,x:0,y:0}).wait(52));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(28).to({_off:false},0).wait(35).to({x:-50.5},0).to({_off:true},19).wait(52));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAkIAAhHIAfAAQANAAAKAJQAJAJAAARQAAAQgJAJQgIALgPAAgAgPAXIAOAAQAGAAAGgFQAFgGAAgLQAAgKgEgGQgGgGgKAAIgLAAg");
	this.shape.setTransform(67.5,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAkIgGgQIgZAAIgGAQIgQAAIAbhHIAPAAIAbBHgAAJAIIgJgZIAAAAIgIAZIARAAg");
	this.shape_1.setTransform(60.2,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgPAAgKgKgAgOgQQgFAHABAJQgBAKAFAHQAFAHAJAAQAKAAAFgHQAEgHAAgKQAAgJgEgHQgFgHgKAAQgJAAgFAHg");
	this.shape_2.setTransform(53,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAPAAIAAA6IAiAAIAAANg");
	this.shape_3.setTransform(46.4,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAkIgcgvIgBAAIAAAvIgOAAIAAhHIAPAAIAeAvIAAgvIAOAAIAABHg");
	this.shape_4.setTransform(39.5,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAkIgMgwIgLAwIgQAAIgThHIAQAAIALAwIANgwIANAAIANAxIALgxIAQAAIgTBHg");
	this.shape_5.setTransform(31.1,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAJALQAKAKAAAPQAAAQgKALQgJAKgQAAQgPAAgKgKgAgOgQQgFAHAAAJQAAAKAFAHQAFAHAJAAQAJAAAGgHQAFgHAAgKQAAgJgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_6.setTransform(22.5,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAkIAAhHIAfAAQAOAAAIAJQAKAJgBARQABAQgJAJQgIALgPAAgAgPAXIAOAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgEgGgLAAIgLAAg");
	this.shape_7.setTransform(15.1,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABbAbQgJgLAAgQQAAgPAJgKQAKgLAQAAQAQAAAJALQAKAKAAAPQAAAQgKALQgJAKgQAAQgQAAgKgKgABmgQQgFAHAAAJQAAAKAFAHQAFAHAKAAQAJAAAGgHQAEgHAAgKQAAgJgEgHQgFgHgKAAQgKAAgFAHgAjVAbQgJgLAAgQQAAgPAJgKQAKgLAQAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgQAAgKgKgAjKgQQgEAHAAAJQAAAKAEAHQAFAHAKAAQAKAAAFgHQAFgHAAgKQAAgJgFgHQgFgHgKAAQgKAAgFAHgADnAkIAAhHIAeAAQAPAAAJAJQAJAJAAARQAAAQgIAJQgJALgQAAgAD2AXIAOAAQAIAAAFgFQAFgGAAgLQAAgKgEgGQgFgGgLAAIgMAAgADQAkIgFgQIgbAAIgGAQIgPAAIAbhHIAQAAIAaBHgADHAIIgJgZIgBAAIgJAZIATAAgAAaAkIAAhHIAPAAIAAA6IAjAAIAAANgAgDAkIgdgvIgBAAIAAAvIgOAAIAAhHIAPAAIAeAvIAAgvIAOAAIAABHgAhZAkIgMgwIgMAwIgQAAIgThHIAQAAIALAwIANgwIAOAAIANAxIALgxIAQAAIgTBHgAklAkIAAhHIAfAAQAOAAAJAJQAJAJAAARQAAAQgIAJQgIALgQAAgAkVAXIAOAAQAHAAAFgFQAGgGAAgLQAAgKgFgGQgFgGgLAAIgLAAg");
	this.shape_8.setTransform(41.3,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).to({state:[{t:this.shape_8}]},28).to({state:[]},54).wait(52));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BAEDB").s().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");
	this.shape_9.setTransform(41,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},19).wait(28).to({_off:false},0).to({_off:true},54).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.8,96,25);


// stage content:
(lib._300x600_Hus_RemA = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:-2.5,regY:226.5,x:-82.7,y:326.7},0).wait(1).to({x:-46.9,y:327.1},0).wait(1).to({x:-6.1,y:327.5},0).wait(1).to({x:31.9,y:327.9},0).wait(1).to({x:64,y:328.2},0).wait(1).to({x:90.2,y:328.5},0).wait(1).to({x:111.5,y:328.7},0).wait(1).to({x:128.7,y:328.9},0).wait(1).to({x:142.7,y:329.1},0).wait(1).to({x:153.9,y:329.2},0).wait(1).to({x:162.8,y:329.3},0).wait(1).to({x:169.8,y:329.4},0).wait(1).to({x:175.1},0).wait(1).to({x:179,y:329.5},0).wait(1).to({x:181.6},0).wait(1).to({x:183},0).wait(1).to({regX:52,regY:68,x:238,y:171},0).wait(1).to({regX:-2.5,regY:226.5,x:183.4,y:329.5},0).wait(1).to({x:183.1},0).wait(1).to({x:182.3},0).wait(1).to({x:180.9},0).wait(1).to({x:178.1},0).wait(1).to({x:174.8},0).wait(1).to({x:172.9},0).wait(1).to({x:172},0).wait(1).to({x:171.6},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(64));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-172,326.5,1,1,0,0,0,118,144.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(1).to({x:-148.5,alpha:0.967},0).wait(1).to({x:-113.2,alpha:0.918},0).wait(1).to({x:-72.9,alpha:0.862},0).wait(1).to({x:-35.4,alpha:0.81},0).wait(1).to({x:-3.8,alpha:0.766},0).wait(1).to({x:22.1,alpha:0.73},0).wait(1).to({x:43.1,alpha:0.7},0).wait(1).to({x:60,alpha:0.677},0).wait(1).to({x:73.8,alpha:0.658},0).wait(1).to({x:84.8,alpha:0.642},0).wait(1).to({x:93.6,alpha:0.63},0).wait(1).to({x:100.5,alpha:0.62},0).wait(1).to({x:105.8,alpha:0.613},0).wait(1).to({x:109.6,alpha:0.608},0).wait(1).to({x:112.1,alpha:0.604},0).wait(1).to({x:113.6,alpha:0.602},0).wait(1).to({x:114},0).wait(1).to({alpha:0.597},0).wait(1).to({x:113.6,alpha:0.58},0).wait(1).to({x:113,alpha:0.543},0).wait(1).to({x:111.6,alpha:0.47},0).wait(1).to({x:109.1,alpha:0.332},0).wait(1).to({x:106.1,alpha:0.167},0).wait(1).to({x:104.4,alpha:0.072},0).wait(1).to({x:103.5,alpha:0.026},0).wait(1).to({x:103.2,alpha:0.006},0).wait(1).to({x:103,alpha:0},0).wait(64));

	// cta
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(218,560.6,1.1,1.1,0,0,0,41.1,7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({alpha:1,startPosition:47},19).wait(54));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_54 = new cjs.Graphics().p("AzSNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_55 = new cjs.Graphics().p("AxmNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_56 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_57 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_58 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_59 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_60 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_61 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_62 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_63 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_64 = new cjs.Graphics().p("AxRNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_65 = new cjs.Graphics().p("AwiNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_66 = new cjs.Graphics().p("Av8NIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_67 = new cjs.Graphics().p("AveNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_68 = new cjs.Graphics().p("AvHNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_69 = new cjs.Graphics().p("Au3NIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_70 = new cjs.Graphics().p("AurNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_71 = new cjs.Graphics().p("AulNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_72 = new cjs.Graphics().p("AujNIIAAsgMAi0AAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:-123.5,y:84}).wait(1).to({graphics:mask_graphics_55,x:-112.7,y:84}).wait(1).to({graphics:mask_graphics_56,x:-81.6,y:84}).wait(1).to({graphics:mask_graphics_57,x:-43.9,y:84}).wait(1).to({graphics:mask_graphics_58,x:-8,y:84}).wait(1).to({graphics:mask_graphics_59,x:23.1,y:84}).wait(1).to({graphics:mask_graphics_60,x:48.9,y:84}).wait(1).to({graphics:mask_graphics_61,x:70.1,y:84}).wait(1).to({graphics:mask_graphics_62,x:87.4,y:84}).wait(1).to({graphics:mask_graphics_63,x:101.7,y:84}).wait(1).to({graphics:mask_graphics_64,x:112.4,y:84}).wait(1).to({graphics:mask_graphics_65,x:117.1,y:84}).wait(1).to({graphics:mask_graphics_66,x:120.9,y:84}).wait(1).to({graphics:mask_graphics_67,x:123.8,y:84}).wait(1).to({graphics:mask_graphics_68,x:126.1,y:84}).wait(1).to({graphics:mask_graphics_69,x:127.8,y:84}).wait(1).to({graphics:mask_graphics_70,x:128.9,y:84}).wait(1).to({graphics:mask_graphics_71,x:129.5,y:84}).wait(1).to({graphics:mask_graphics_72,x:129.8,y:84}).wait(73));

	// masked
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA1QgMgHgBgNIASAAQADAMAQAAQAVAAAAgVIAAgMIAAAAQgIAOgQAAQgTAAgJgNQgJgLAAgSQAAgSAKgMQAKgMARAAQARAAAHANIAAAAIAAgLIASAAIAABOQAAAlgoAAQgOAAgJgGgAgQgiQgFAHAAAMQAAAMAFAGQAGAJAKAAQALgBAGgIQAFgIAAgLQAAgMgFgHQgGgJgLABQgKAAgGAJg");
	this.shape.setTransform(251.6,149);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASArIAAg0QgBgSgPAAQgIAAgGAHQgFAGAAAIIAAAxIgTAAIAAhSIASAAIAAAMIAAAAQAJgPAQAAQAOABAIAGQAHAIAAAOIAAA4g");
	this.shape_1.setTransform(242.5,147.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_2.setTransform(233.2,147.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_3.setTransform(226.5,145.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXArIAAhSIARAAIAAAQIAAAAQACgHAGgGQAHgFAIgBIAHABIAAARIgIAAQgJAAgGAHQgGAIAAAMIAAAog");
	this.shape_4.setTransform(217.9,147.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_5.setTransform(210.2,147.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAqArIAAgwQAAgLgDgFQgCgGgKAAQgRAAAAAWIAAAwIgSAAIAAg1QAAgJgDgDQgDgFgJAAQgHAAgFAGQgFAGgBAJIAAAxIgSAAIAAhSIARAAIAAALIABAAQAJgOAQAAQARAAAGAOQAJgOAQAAQAcAAAAAdIAAA4g");
	this.shape_6.setTransform(198.8,147.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqArIAAgwQAAgLgCgFQgDgGgKAAQgRAAgBAWIAAAwIgRAAIAAg1QAAgJgDgDQgEgFgHAAQgIAAgFAGQgGAGABAJIAAAxIgTAAIAAhSIASAAIAAALIAAAAQAJgOARAAQAQAAAFAOQALgOAPAAQAcAAAAAdIAAA4g");
	this.shape_7.setTransform(184.9,147.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAKIAAg0IASAAIAAAyQAAAUAPAAQAUAAAAgWIAAgwIATAAIAABSIgSAAIAAgMIgBAAQgEAHgGADQgGAFgGAAQgfAAAAghg");
	this.shape_8.setTransform(173.4,147.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAkQgLgHAAgOIATAAQABAOAQAAQATAAAAgLQgBgGgIgDIgRgFQgNgCgGgEQgIgGAAgLQAAgMALgHQAKgFANAAQANAAAJAGQALAHABANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAJADIARAEQAMADAGAEQAJAGAAALQAAANgMAHQgKAHgPAAQgQAAgJgIg");
	this.shape_9.setTransform(164.7,147.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_10.setTransform(154.1,145.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_11.setTransform(150.3,145.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAhQgKALgSAAQgMAAgIgGQgIgHAAgMQAAgOAKgFQAHgEAPgBIAQgDQAIgCAAgHQAAgLgRAAQgRAAgBANIgSAAQACgcAjAAQANAAAJAGQALAGAAAMIAAAqQAAAGAEAAIAEAAIAAAMQgFADgGAAQgMAAgCgLgAAEADIgLACQgPACAAAMQAAAFAGADQAFACAGAAQAGAAAGgDQAHgFAAgIIAAgNQgDACgHABg");
	this.shape_12.setTransform(144.1,147.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAkQgLgHAAgOIASAAQABAOARAAQATAAgBgLQAAgGgIgDIgSgFQgMgCgGgEQgIgGAAgLQAAgMALgHQAKgFANAAQANAAAJAGQALAHABANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAIADIASAEQANADAFAEQAJAGAAALQAAANgMAHQgKAHgPAAQgQAAgJgIg");
	this.shape_13.setTransform(131,147.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_14.setTransform(124.1,146.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AASArIAAg0QgBgSgPAAQgIAAgFAHQgGAGAAAIIAAAxIgSAAIAAhSIARAAIAAAMIAAAAQAJgPAQAAQAOABAHAGQAJAIgBAOIAAA4g");
	this.shape_15.setTransform(117,147.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIA5IAAhSIARAAIAABSgAgIgnIAAgRIARAAIAAARg");
	this.shape_16.setTransform(110.4,145.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_17.setTransform(103.8,147.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIASAAIAAALQAHgOASAAQASAAALANQAJAMAAATQAAARgIAMQgLAOgRAAQgSAAgIgNIAAApgAgRgiQgFAHAAAOQAAANAGAHQAGAIAKAAQAMAAAFgJQAGgHAAgMQAAgMgGgIQgHgJgKAAQgKAAgHAIg");
	this.shape_18.setTransform(94.4,148.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgBgOIASAAQABAOARAAQATAAgBgLQAAgGgIgDIgSgFQgMgCgGgEQgIgGAAgLQAAgMAMgHQAJgFANAAQAOAAAIAGQAKAHACANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAIADIASAEQANADAFAEQAJAGAAALQAAANgMAHQgLAHgOAAQgPAAgKgIg");
	this.shape_19.setTransform(80.8,147.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAKIAAg0IASAAIAAAyQAAAUAQAAQATAAAAgWIAAgwIASAAIAABSIgSAAIAAgMIAAAAQgEAHgGADQgGAFgHAAQgfAAABghg");
	this.shape_20.setTransform(72.1,147.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AASArIAAg0QgBgSgPAAQgIAAgGAHQgFAGAAAIIAAAxIgTAAIAAhSIASAAIAAAMIAAAAQAJgPAQAAQAOABAIAGQAHAIAAAOIAAA4g");
	this.shape_21.setTransform(62.9,147.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_22.setTransform(53.6,147.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAsIAAAMIgRAAIAAhxIASAAIAAAqQAEgGAHgEQAHgDAHAAQASAAAKANQAKAMAAASQAAASgJAMQgKANgRAAQgUAAgIgOgAgQgGQgHAHAAAOQABAMAGAIQAGAJAKAAQALAAAHgKQAFgHAAgMQAAgNgGgHQgGgJgLAAQgLAAgFAIg");
	this.shape_23.setTransform(44.2,146);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_24.setTransform(255.6,127.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_25.setTransform(248.7,128.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXA1QgMgHgBgNIASAAQADAMAQAAQAVAAAAgVIAAgMIAAAAQgIAOgQAAQgTAAgJgNQgJgMAAgSQAAgRAKgMQAKgMARAAQARAAAHANIAAAAIAAgLIASAAIAABOQAAAlgoAAQgOAAgJgGgAgQgjQgFAIAAAMQAAAMAFAGQAGAJAKAAQALgBAGgIQAFgIAAgLQAAgMgFgHQgGgJgLAAQgKABgGAIg");
	this.shape_26.setTransform(239.3,130);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAtQgKgMAAgTQAAgUALgMQAKgKAPAAQATAAAIANIAAAAIAAgqIASAAIAABxIgRAAIAAgLQgIANgRAAQgTAAgKgNgAgRgEQgEAHAAAMQgBAMAGAIQAGAJAKAAQALAAAHgKQAFgIABgMQAAgNgHgHQgGgIgLAAQgLAAgGAKg");
	this.shape_27.setTransform(225.3,127);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AASArIAAg0QAAgSgQAAQgIAAgFAHQgGAGAAAIIAAAxIgTAAIAAhSIASAAIAAAMIAAABQAJgQAQAAQAOABAHAGQAJAIgBANIAAA5g");
	this.shape_28.setTransform(216.1,128.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQAhQgKALgSAAQgMAAgIgGQgIgHAAgMQAAgOAKgFQAHgEAPgBIAQgDQAIgCAAgHQAAgLgRAAQgRAAgBANIgSAAQACgcAjAAQANAAAJAGQALAGAAAMIAAAqQAAAGAEAAIAEAAIAAAMQgFADgGAAQgMAAgCgLgAAEADIgLACQgPACAAAMQAAAFAGADQAFACAGAAQAGAAAGgDQAHgFAAgIIAAgNQgDACgHABg");
	this.shape_29.setTransform(207.2,128.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIARAAIAAALQAIgOARAAQATAAALANQAJAMAAATQAAARgIAMQgLAOgQAAQgTAAgIgNIAAApgAgRgiQgFAHgBAOQAAANAHAHQAGAIAKAAQALAAAHgJQAFgHAAgMQAAgMgGgIQgHgJgKAAQgKAAgHAIg");
	this.shape_30.setTransform(193.6,129.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIARAAIAAALQAIgOASAAQASAAAKANQAKAMAAATQAAARgJAMQgJAOgSAAQgSAAgJgNIAAApgAgQgiQgHAHAAAOQABANAGAHQAGAIAKAAQALAAAHgJQAFgHAAgMQAAgMgGgIQgGgJgLAAQgLAAgFAIg");
	this.shape_31.setTransform(183.8,129.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAhA5IgKgeIgtAAIgLAeIgVAAIAshxIAUAAIAsBxgAARALIgRgvIAAAAIgRAvIAiAAg");
	this.shape_32.setTransform(173.4,126.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AggA5IAAgQIAJABQAFAAADgDQADgCABgGIADgHIgghRIAUAAIAVA9IAAAAIAVg9IATAAIggBWQgHAPgCAFQgHAJgNAAIgMgBg");
	this.shape_33.setTransform(159.5,130.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQA5IgYgoIgLAKIAAAeIgSAAIAAhxIASAAIAABAIAgghIAWAAIgfAdIAiA1g");
	this.shape_34.setTransform(151.6,126.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAkQgLgHAAgOIASAAQABAOARAAQATAAgBgLQAAgGgIgDIgSgFQgMgCgGgEQgIgGAAgLQAAgMALgHQAKgFANAAQANAAAJAGQALAHABANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAIADIASAEQANADAFAEQAJAGAAALQAAANgMAHQgKAHgPAAQgQAAgJgIg");
	this.shape_35.setTransform(142.7,128.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgjAKIAAg0IASAAIAAAyQAAAUAQAAQATAAAAgXIAAgvIATAAIAABSIgSAAIAAgMIgBAAQgDAGgHAEQgGAEgHABQgeAAAAghg");
	this.shape_36.setTransform(134,128.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaA5IAAgzIgzAAIAAAzIgUAAIAAhxIAUAAIAAAtIAzAAIAAgtIAUAAIAABxg");
	this.shape_37.setTransform(123.6,126.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AggA5IAAgQIAJABQAGAAACgDQACgCACgGIACgHIgfhRIAUAAIAUA9IABAAIAVg9IATAAIghBWQgFAPgDAFQgHAJgNAAIgMgBg");
	this.shape_38.setTransform(113.7,130.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAqArIAAgwQAAgMgDgEQgDgGgJAAQgRAAAAAWIAAAwIgSAAIAAg0QAAgJgDgFQgDgEgJAAQgHAAgFAGQgGAGAAAJIAAAxIgSAAIAAhSIARAAIAAAMIABAAQAJgPAQAAQARAAAGAPQAJgPARAAQAbAAAAAcIAAA5g");
	this.shape_39.setTransform(102.6,128.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_40.setTransform(86.9,128.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AASA5IAAg0QgBgRgPgBQgIAAgFAHQgGAGAAAIIAAAxIgSAAIAAhxIASAAIAAAqQAEgGAGgDQAHgEAHAAQAOAAAHAHQAJAIgBAMIAAA5g");
	this.shape_41.setTransform(77.8,126.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_42.setTransform(70.5,127.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_43.setTransform(60.8,127.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_44.setTransform(53.9,128.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AglAqQgOgRAAgZQAAgYAOgRQAPgSAYAAQAUAAANAKQAOALACASIgUAAQgBgKgIgHQgJgFgLAAQgQAAgJANQgJAMABARQgBASAJAMQAJAOAQAAQAPAAAIgJQAJgIAAgPIgeAAIAAgOIAwAAIAAA7IgMAAIgDgNQgJAJgHADQgIAEgLAAQgYAAgPgSg");
	this.shape_45.setTransform(43.2,126.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},54).wait(91));

	// dog
	this.instance_3 = new lib.db_logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,493,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-170.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({regX:263.8,regY:38.1,x:-1.7,y:61.1},0).wait(1).to({x:-0.1},0).wait(1).to({x:2.7},0).wait(1).to({x:7},0).wait(1).to({x:13.4},0).wait(1).to({x:22.2},0).wait(1).to({x:34.4},0).wait(1).to({x:51.1},0).wait(1).to({x:74.1},0).wait(1).to({x:105.3},0).wait(1).to({x:144},0).wait(1).to({x:182.2},0).wait(1).to({x:212.6},0).wait(1).to({x:234.6},0).wait(1).to({x:250.2},0).wait(1).to({x:261.2},0).wait(1).to({x:268.9},0).wait(1).to({x:274.1},0).wait(1).to({x:277.5},0).wait(1).to({x:279.3},0).wait(1).to({regX:95.9,regY:32,x:111.9,y:55},0).wait(92));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,300,564.4,601);
// library properties:
lib.properties = {
	id: '3425675A7A2D434FB1A7BE1713B1B77E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_Hus_RemA_atlas_P_.png", id:"300x600_Hus_RemA_atlas_P_"}
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