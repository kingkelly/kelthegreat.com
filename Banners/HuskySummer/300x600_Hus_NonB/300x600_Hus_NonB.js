(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_Hus_NonB_atlas_P_", frames: [[242,602,208,216],[0,0,300,600],[302,0,138,313],[0,602,240,309]]}
];


// symbols:



(lib.db_logo = function() {
	this.spriteSheet = ss["300x600_Hus_NonB_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_purp = function() {
	this.spriteSheet = ss["300x600_Hus_NonB_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_slurp = function() {
	this.spriteSheet = ss["300x600_Hus_NonB_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.db_slurp_blur = function() {
	this.spriteSheet = ss["300x600_Hus_NonB_atlas_P_"];
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
	this.instance = new lib.db_slurp_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,240,309), null);


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
	this.instance = new lib.db_slurp();
	this.instance.parent = this;
	this.instance.setTransform(-90,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(-90,66,138,313), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.db_purp();
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
	this.shape.graphics.f("#FFF464").s().p("AAwCAQgDgGgFgiQgBgZgGgLQgJgRgVAAIgxAAIAABdIhEAAIAAj/ICDAAQAmAAAYAQQAcAUAAAkQgBAWgJAQQgMASgTAHIAAABQAhAHAEA3QAEAyAIAHgAgugQIA3AAQAeAAAAgeQABgcgiAAIg0AAg");
	this.shape.setTransform(247.9,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AhnCAIAAj/IDMAAIAAA1IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA5g");
	this.shape_1.setTransform(222.2,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AghCAIAAjGIhMAAIAAg5IDbAAIAAA5IhNAAIAADGg");
	this.shape_2.setTransform(197.9,56.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgKgRgMQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgVg");
	this.shape_3.setTransform(174.2,56.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AA8CAIgPguIhZAAIgQAuIhFAAIBgj/IBDAAIBgD/gAAdAhIgdhZIAAAAIgdBZIA6AAg");
	this.shape_4.setTransform(149.6,56.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AheCAIAAj/IC9AAIAAA1Ih6AAIAAA1IBpAAIAAAyIhpAAIAABjg");
	this.shape_5.setTransform(126.7,56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AheCAIAAj/IC9AAIAAA1Ih6AAIAAA1IBpAAIAAAyIhpAAIAABjg");
	this.shape_6.setTransform(93.5,56.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AheCAIAAj/IC9AAIAAA1Ih6AAIAAA1IBpAAIAAAyIhpAAIAABjg");
	this.shape_7.setTransform(71.5,56.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_8.setTransform(46.4,57.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AghCAIAAjGIhMAAIAAg5IDbAAIAAA5IhNAAIAADGg");
	this.shape_9.setTransform(21.5,56.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgKgRgMQgXgTAAggQAAgmAigWQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgVg");
	this.shape_10.setTransform(-2.2,56.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_11.setTransform(202.4,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_12.setTransform(177.8,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAwCBQgDgHgFgjQgBgYgGgMQgJgQgVAAIgxAAIAABeIhEAAIAAkBICDAAQAlAAAZARQAcATAAAlQgBAVgJASQgMARgTAHIAAABQAhAIAEA1QAEAzAIAIgAgugQIA3AAQAeAAAAgeQAAgcghAAIg0AAg");
	this.shape_13.setTransform(152.9,18.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA0IBpAAIAAA0IhpAAIAABjg");
	this.shape_14.setTransform(128.9,18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_15.setTransform(94.2,18.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_16.setTransform(70.6,18.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhYBfQgjgmAAg5QAAg4AjgmQAkgnA4AAQAtAAAgAWQAkAaADAtIhCAAQgCgQgPgKQgOgKgUABQgdgBgQAZQgNAUAAAfQAAAgANAUQAQAZAdAAQAZAAAQgLQAPgLADgRIgvAAIAAgyIBtAAIAACNIgsAAIgEgcQgYAhgwAAQg4AAgkgng");
	this.shape_17.setTransform(43.6,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAwCBQgDgGgFgkQgBgYgGgMQgJgQgVAAIgxAAIAABeIhEAAIAAkBICDAAQAmAAAYARQAcAUAAAkQgBAVgJARQgMASgTAHIAAABQAhAHAEA2QAEAzAIAIgAgugQIA3AAQAeAAAAgeQABgcgiAAIg0AAg");
	this.shape_18.setTransform(247.9,57.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_19.setTransform(222.2,57.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_20.setTransform(197.9,57.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgJgRgNQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARANQAYASAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_21.setTransform(174.2,57.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA8CBIgPgvIhZAAIgQAvIhFAAIBgkBIBDAAIBgEBgAAdAhIgdhZIAAAAIgdBZIA6AAg");
	this.shape_22.setTransform(149.6,57.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA1IBpAAIAAAzIhpAAIAABjg");
	this.shape_23.setTransform(126.7,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA1IBpAAIAAAzIhpAAIAABjg");
	this.shape_24.setTransform(93.5,57.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA1IBpAAIAAAzIhpAAIAABjg");
	this.shape_25.setTransform(71.5,57.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_26.setTransform(46.4,58.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_27.setTransform(21.5,57.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhNBxQgigYAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgJgRgNQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcAUQAgAWAAApIhDAAQABgRgNgHQgLgHgRAAQggAAAAAWQAAAMAXAJQANAEAlAIQAiALARANQAYASAAAgQAAAtgjAWQgdATgwAAQgwAAgdgVg");
	this.shape_28.setTransform(-2.2,57.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_29.setTransform(202.4,19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_30.setTransform(177.8,19.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAwCBQgDgHgFgjQgBgYgGgMQgJgQgVAAIgxAAIAABeIhEAAIAAkBICDAAQAlAAAZARQAcATAAAlQgBAVgJASQgMAQgTAJIAAAAQAhAIAEA1QAEAzAIAIgAgugQIA3AAQAeAAAAgeQAAgcghAAIg0AAg");
	this.shape_31.setTransform(152.9,19.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AheCBIAAkBIC9AAIAAA2Ih6AAIAAA0IBpAAIAAA0IhpAAIAABjg");
	this.shape_32.setTransform(128.9,19.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_33.setTransform(94.2,19.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_34.setTransform(70.6,19.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhYBfQgjgmAAg5QAAg4AjgmQAkgnA4AAQAtAAAgAWQAkAZADAuIhCAAQgCgQgPgKQgOgKgUAAQgdAAgQAZQgNAUAAAfQAAAgANAUQAQAYAdAAQAZABAQgLQAPgLADgRIgvAAIAAgyIBtAAIAACNIgsAAIgEgcQgYAhgwAAQg4AAgkgng");
	this.shape_35.setTransform(43.6,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-16.2,3.6,540.6,79.4), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAfQgJgHAAgMIAPAAQAAAHAFADQAEADAGAAQAGAAADgBQAFgDAAgFQAAgFgHgCIgNgEQgKgDgFgDQgGgFAAgJQAAgKAIgGQAIgFAKAAQAMAAAHAFQAJAGAAAMIgPAAQgBgLgMAAQgFAAgDACQgDACAAAEQAAAEAEACIAQAFQAIACAFADQAIAEAAALQAAAKgHAGQgIAGgOAAQgMAAgJgGg");
	this.shape.setTransform(76.9,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAPAAIAAA6IAiAAIAAANg");
	this.shape_1.setTransform(71,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAkIAAhHIAPAAIAABHg");
	this.shape_2.setTransform(66.3,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAkIgGgQIgZAAIgGAQIgQAAIAbhHIAPAAIAbBHgAAJAIIgJgZIAAAAIgIAZIARAAg");
	this.shape_3.setTransform(61.4,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAkIAAg5IgVAAIAAgOIA5AAIAAAOIgVAAIAAA5g");
	this.shape_4.setTransform(55,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA0AAIAAAOIgkAAIAAAPIAhAAIAAALIghAAIAAASIAlAAIAAANg");
	this.shape_5.setTransform(48.9,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAkIAAhHIAeAAQAOAAAJAJQAIAJABARQgBAQgHAJQgJALgPAAgAgPAXIAOAAQAHAAAEgFQAGgGAAgLQAAgKgFgGQgFgGgJAAIgMAAg");
	this.shape_6.setTransform(41.9,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAkIgCgIIgBgJQAAgGgDgDQgDgCgFAAIgPAAIAAAcIgQAAIAAhHIAmAAQAJAAAGAGQAGAGAAAIQAAANgMAEIAAAAQAKADABAOIAAAIQABAGACADgAgOgCIAQAAQALAAAAgLQAAgJgLAAIgQAAg");
	this.shape_7.setTransform(31.9,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA1AAIAAAOIglAAIAAAPIAhAAIAAALIghAAIAAASIAlAAIAAANg");
	this.shape_8.setTransform(25.1,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAxAAIAAAOIghAAIAAAQIAcAAIAAALIgcAAIAAAeg");
	this.shape_9.setTransform(19,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAxAAIAAAOIgiAAIAAAQIAeAAIAAALIgeAAIAAAeg");
	this.shape_10.setTransform(13.1,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgPAAgKgKgAgOgQQgEAHgBAJQABAKAEAHQAFAHAJAAQAJAAAGgHQAFgHgBgKQABgJgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_11.setTransform(6,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AFQAfQgKgHABgMIAPAAQAAAHAFADQAEADAHAAQAFAAAEgBQAFgDAAgFQAAgFgHgCIgPgEQgKgDgEgDQgGgFAAgJQAAgKAIgGQAIgFAKAAQAMAAAIAFQAIAGABAMIgQAAQAAgLgNAAQgFAAgDACQgDACAAAEQAAAEADACIASAFQAIACAEADQAJAEAAALQAAAKgIAGQgHAGgPAAQgMAAgJgGgAl5AbQgJgLAAgQQAAgPAJgKQAKgLAQAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgQAAgKgKgAlugQQgEAHgBAJQABAKAEAHQAFAHAKAAQAJAAAGgHQAFgHgBgKQABgJgFgHQgFgHgKAAQgKAAgFAHgAERAkIAAhHIAPAAIAAA6IAjAAIAAANgADzAkIAAhHIAQAAIAABHgADdAkIgGgQIgaAAIgGAQIgPAAIAbhHIAQAAIAaBHgADUAIIgJgZIgBAAIgJAZIATAAgACCAkIAAg5IgWAAIAAgOIA7AAIAAAOIgWAAIAAA5gAAyAkIAAhHIA1AAIAAAOIgmAAIAAAPIAiAAIAAALIgiAAIAAASIAnAAIAAANgAgXAkIAAhHIAdAAQAPAAAJAJQAIAJABARQgBAQgHAJQgJALgQAAgAgIAXIANAAQAIAAAEgFQAGgGAAgLQAAgKgFgGQgFgGgKAAIgLAAgAhNAkIgCgIIgBgJQAAgGgDgDQgDgCgFAAIgRAAIAAAcIgPAAIAAhHIAnAAQAJAAAFAGQAHAGgBAIQAAANgLAEIAAAAQAKADAAAOIABAIQABAGABADgAhsgCIASAAQAKAAAAgLQAAgJgKAAIgSAAgAi8AkIAAhHIA2AAIAAAOIgmAAIAAAPIAjAAIAAALIgjAAIAAASIAmAAIAAANgAj2AkIAAhHIAxAAIAAAOIgiAAIAAAQIAeAAIAAALIgeAAIAAAegAkyAkIAAhHIAzAAIAAAOIgjAAIAAAQIAeAAIAAALIgeAAIAAAeg");
	this.shape_12.setTransform(41.2,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).to({state:[{t:this.shape_12}]},28).to({state:[]},54).wait(52));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1BAEDB").s().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");
	this.shape_13.setTransform(41,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},19).wait(28).to({_off:false},0).to({_off:true},54).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.8,96,25);


// stage content:
(lib._300x600_Hus_NonB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:-21,regY:222.5,x:-101.2,y:322.7},0).wait(1).to({x:-65.4,y:323.1},0).wait(1).to({x:-24.6,y:323.5},0).wait(1).to({x:13.4,y:323.9},0).wait(1).to({x:45.5,y:324.2},0).wait(1).to({x:71.7,y:324.5},0).wait(1).to({x:93,y:324.7},0).wait(1).to({x:110.2,y:324.9},0).wait(1).to({x:124.2,y:325.1},0).wait(1).to({x:135.4,y:325.2},0).wait(1).to({x:144.3,y:325.3},0).wait(1).to({x:151.3,y:325.4},0).wait(1).to({x:156.6},0).wait(1).to({x:160.5,y:325.5},0).wait(1).to({x:163.1},0).wait(1).to({x:164.5},0).wait(1).to({regX:52,regY:68,x:238,y:171},0).wait(1).to({regX:-21,regY:222.5,x:164.9,y:325.5},0).wait(1).to({x:164.6},0).wait(1).to({x:163.8},0).wait(1).to({x:162.4},0).wait(1).to({x:159.6},0).wait(1).to({x:156.3},0).wait(1).to({x:154.4},0).wait(1).to({x:153.5},0).wait(1).to({x:153.1},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(64));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-173,320.5,1,1,0,0,0,120,154.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(1).to({x:-148.6,y:320.7,alpha:0.975},0).wait(1).to({x:-111.8,y:321.1,alpha:0.938},0).wait(1).to({x:-69.8,y:321.5,alpha:0.896},0).wait(1).to({x:-30.7,y:321.9,alpha:0.856},0).wait(1).to({x:2.3,y:322.3,alpha:0.823},0).wait(1).to({x:29.2,y:322.5,alpha:0.796},0).wait(1).to({x:51.1,y:322.8,alpha:0.774},0).wait(1).to({x:68.8,y:322.9,alpha:0.756},0).wait(1).to({x:83.1,y:323.1,alpha:0.742},0).wait(1).to({x:94.6,y:323.2,alpha:0.73},0).wait(1).to({x:103.8,y:323.3,alpha:0.721},0).wait(1).to({x:110.9,y:323.4,alpha:0.713},0).wait(1).to({x:116.4,alpha:0.708},0).wait(1).to({x:120.3,y:323.5,alpha:0.704},0).wait(1).to({x:123,alpha:0.701},0).wait(1).to({x:124.5,alpha:0.7},0).wait(1).to({x:125,alpha:0.699},0).wait(1).to({x:124.9,alpha:0.694},0).wait(1).to({x:124.6,alpha:0.674},0).wait(1).to({x:124,alpha:0.631},0).wait(1).to({x:122.8,alpha:0.547},0).wait(1).to({x:120.5,alpha:0.386},0).wait(1).to({x:117.8,alpha:0.194},0).wait(1).to({x:116.2,alpha:0.084},0).wait(1).to({x:115.5,alpha:0.03},0).wait(1).to({x:115.1,alpha:0.006},0).wait(1).to({x:115,alpha:0},0).wait(64));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:-123.5,y:84}).wait(1).to({graphics:mask_graphics_55,x:-112.9,y:84}).wait(1).to({graphics:mask_graphics_56,x:-82.4,y:84}).wait(1).to({graphics:mask_graphics_57,x:-45.4,y:84}).wait(1).to({graphics:mask_graphics_58,x:-9.9,y:84}).wait(1).to({graphics:mask_graphics_59,x:20.6,y:84}).wait(1).to({graphics:mask_graphics_60,x:46,y:84}).wait(1).to({graphics:mask_graphics_61,x:66.9,y:84}).wait(1).to({graphics:mask_graphics_62,x:84,y:84}).wait(1).to({graphics:mask_graphics_63,x:98,y:84}).wait(1).to({graphics:mask_graphics_64,x:109.4,y:84}).wait(1).to({graphics:mask_graphics_65,x:115.1,y:84}).wait(1).to({graphics:mask_graphics_66,x:118.8,y:84}).wait(1).to({graphics:mask_graphics_67,x:121.7,y:84}).wait(1).to({graphics:mask_graphics_68,x:124,y:84}).wait(1).to({graphics:mask_graphics_69,x:125.6,y:84}).wait(1).to({graphics:mask_graphics_70,x:126.7,y:84}).wait(1).to({graphics:mask_graphics_71,x:127.3,y:84}).wait(1).to({graphics:mask_graphics_72,x:127.6,y:84}).wait(73));

	// masked
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgBgOIASAAQABAOARAAQATAAgBgLQAAgGgIgDIgSgFQgMgCgGgEQgIgGAAgLQAAgMAMgHQAJgFANAAQANAAAJAGQAKAHACANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAIADIASAEQANADAFAEQAJAGAAALQAAANgMAHQgLAHgOAAQgQAAgJgIg");
	this.shape.setTransform(223.4,147.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_1.setTransform(214.8,147.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAkQgLgHAAgOIATAAQABAOAQAAQATAAAAgLQgBgGgIgDIgRgFQgNgCgGgEQgIgGAAgLQAAgMALgHQAKgFANAAQAOAAAIAGQAKAHACANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAJADIARAEQAMADAHAEQAIAGAAALQAAANgNAHQgJAHgPAAQgPAAgKgIg");
	this.shape_2.setTransform(206.2,147.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAhQgKALgSAAQgMAAgIgGQgIgHAAgMQAAgOAKgFQAHgEAPgBIAQgDQAIgCAAgHQAAgLgRAAQgRAAgBANIgSAAQACgcAjAAQANAAAJAGQALAGAAAMIAAAqQAAAGAEAAIAEAAIAAAMQgFADgGAAQgMAAgCgLgAAEADIgLACQgPACAAAMQAAAFAGADQAFACAGAAQAGAAAGgDQAHgFAAgIIAAgNQgDACgHABg");
	this.shape_3.setTransform(197.8,147.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA5IAAg0QAAgRgQAAQgIgBgFAHQgGAGAAAIIAAAxIgTAAIAAhxIATAAIAAAqQADgGAHgDQAHgEAHAAQAOAAAHAHQAJAIgBAMIAAA5g");
	this.shape_4.setTransform(188.6,145.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAfQgLgLAAgTQAAgTALgMQAKgNATAAQAPAAAKAIQALAIABAOIgSAAQgCgPgRAAQgIAAgGAFQgHAIAAAQQAAALAEAIQAGAJAKAAQAIAAAGgFQAFgFABgJIASAAQgFAighAAQgRAAgLgNg");
	this.shape_5.setTransform(179.6,147.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXArIAAhSIARAAIAAAQIAAAAQACgHAGgGQAHgFAIgBIAHABIAAARIgIAAQgJAAgGAHQgGAIAAAMIAAAog");
	this.shape_6.setTransform(172.9,147.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjAKIAAg0IASAAIAAAyQAAAUAQAAQATAAAAgWIAAgwIATAAIAABSIgSAAIAAgMIgBAAQgDAHgHADQgGAFgHAAQgeAAAAghg");
	this.shape_7.setTransform(165,147.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIARAAIAAALQAIgOARAAQATAAALANQAJAMAAATQAAARgIAMQgLAOgQAAQgTAAgIgNIAAApgAgRgiQgFAHgBAOQAAANAHAHQAGAIAKAAQALAAAHgJQAFgHAAgMQAAgMgGgIQgHgJgKAAQgKAAgHAIg");
	this.shape_8.setTransform(155.8,148.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_9.setTransform(144.3,145.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_10.setTransform(138.1,147.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjAKIAAg0IASAAIAAAyQAAAUAQAAQATAAAAgWIAAgwIATAAIAABSIgSAAIAAgMIgBAAQgDAHgHADQgGAFgHAAQgeAAAAghg");
	this.shape_11.setTransform(129,147.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKA5IAAhEIgOAAIAAgOIAOAAIAAgHQAAgOAHgGQAFgEAKAAIANABIAAAOIgIgBQgKAAABAJIAAAIIAPAAIAAAOIgPAAIAABEg");
	this.shape_12.setTransform(122,145.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAvQgJgKAAgSIARAAQAAALAGAGQAFAHAKAAQAKAAAFgFQAGgGABgJQgBgVgcACIAAgNQAJABAHgEQAIgFAAgJQAAgHgFgFQgFgEgHAAQgIAAgGAHQgEAGAAAKIgTAAQABgRAKgLQAKgKAQAAQAOAAAKAHQALAIAAAOQAAATgQAFIAAABQAJACAGAGQAFAIABALQgBAPgMAKQgKAJgRAAQgSAAgLgLg");
	this.shape_13.setTransform(110.6,146);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXArIAAhSIARAAIAAAQIAAAAQACgHAGgGQAHgFAIgBIAHABIAAARIgIAAQgJAAgGAHQgGAIAAAMIAAAog");
	this.shape_14.setTransform(99.5,147.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_15.setTransform(91.8,147.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_16.setTransform(84.6,146.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKA5IAAhEIgOAAIAAgOIAOAAIAAgHQAAgOAHgGQAEgEALAAIANABIAAAOIgIgBQgKAAABAJIAAAIIAPAAIAAAOIgPAAIAABEg");
	this.shape_17.setTransform(79.6,145.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQAhQgKALgSAAQgMAAgIgGQgIgHAAgMQAAgOAKgFQAHgEAPgBIAQgDQAIgCAAgHQAAgLgRAAQgRAAgBANIgSAAQACgcAjAAQANAAAJAGQALAGAAAMIAAAqQAAAGAEAAIAEAAIAAAMQgFADgGAAQgMAAgCgLgAAEADIgLACQgPACAAAMQAAAFAGADQAFACAGAAQAGAAAGgDQAHgFAAgIIAAgNQgDACgHABg");
	this.shape_18.setTransform(72.8,147.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXArIAAhSIARAAIAAAQIAAAAQACgHAGgFQAHgGAIgBIAHABIAAARIgIAAQgJAAgGAHQgGAIAAAMIAAAog");
	this.shape_19.setTransform(218.7,128.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_20.setTransform(211,128.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_21.setTransform(203.8,127.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAkQgLgHAAgOIASAAQACAOAQAAQATAAAAgLQgBgGgIgDIgRgFQgNgCgGgEQgIgGAAgLQAAgMAMgHQAJgFANAAQANAAAJAGQALAHABANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAJADIARAEQAMADAHAEQAIAGAAALQAAANgNAHQgKAHgOAAQgPAAgKgIg");
	this.shape_22.setTransform(197.1,128.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQAhQgKALgSAAQgMAAgIgGQgIgHAAgMQAAgOAKgFQAHgEAPgBIAQgDQAIgCAAgHQAAgLgRAAQgRAAgBANIgSAAQACgcAjAAQANAAAJAGQALAGAAAMIAAAqQAAAGAEAAIAEAAIAAAMQgFADgGAAQgMAAgCgLgAAEADIgLACQgPACAAAMQAAAFAGADQAFACAGAAQAGAAAGgDQAHgFAAgIIAAgNQgDACgHABg");
	this.shape_23.setTransform(188.7,128.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKA5IAAhEIgOAAIAAgOIAOAAIAAgHQAAgOAHgGQAEgEALAAIANABIAAAOIgIgBQgJAAAAAJIAAAIIAPAAIAAAOIgPAAIAABEg");
	this.shape_24.setTransform(181.7,126.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcA5IgcgsIgcAsIgXAAIAog6Iglg3IAXAAIAZAoIAbgoIAXAAIgmA3IAoA6g");
	this.shape_25.setTransform(169.5,126.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAvQgKgKAAgSIASAAQAAALAEAGQAHAHAJAAQAJAAAGgFQAHgGAAgJQAAgVgdACIAAgNQAKABAGgEQAIgFAAgJQAAgHgFgFQgFgEgHAAQgJAAgFAHQgEAGAAAKIgTAAQABgRAKgLQAKgKAQAAQAOAAAKAHQALAIAAAOQAAATgQAFIAAABQAJACAGAGQAGAIAAALQAAAPgNAKQgLAJgQAAQgSAAgKgLg");
	this.shape_26.setTransform(159.9,127);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgBgOIASAAQABAOARAAQATAAgBgLQAAgGgIgDIgSgFQgMgCgGgEQgIgGAAgLQAAgMAMgHQAJgFANAAQAOAAAIAGQAKAHACANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAIADIASAEQANADAFAEQAJAGAAALQAAANgNAHQgKAHgOAAQgPAAgKgIg");
	this.shape_27.setTransform(147,128.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_28.setTransform(140,127.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASArIAAg0QAAgSgQAAQgIAAgFAHQgGAGAAAIIAAAxIgTAAIAAhSIASAAIAAAMIAAABQAJgQAQAAQAOABAHAGQAJAIgBANIAAA5g");
	this.shape_29.setTransform(132.9,128.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIA5IAAhSIARAAIAABSgAgIgnIAAgRIARAAIAAARg");
	this.shape_30.setTransform(126.4,126.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgeAfQgLgMAAgTQAAgTALgLQALgNATAAQATAAAMANQALALAAATQAAATgLAMQgMANgTAAQgTAAgLgNgAgRgTQgGAIAAALQAAAMAGAIQAGAJALAAQALAAAHgJQAFgIAAgMQAAgLgFgIQgHgJgLAAQgLAAgGAJg");
	this.shape_31.setTransform(119.8,128.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIASAAIAAALQAHgOASAAQASAAAKANQAKAMAAATQAAARgJAMQgKAOgRAAQgSAAgJgNIAAApgAgQgiQgHAHABAOQAAANAGAHQAGAIAKAAQALAAAHgJQAFgHAAgMQAAgMgGgIQgGgJgLAAQgLAAgFAIg");
	this.shape_32.setTransform(110.4,129.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_33.setTransform(98.1,127.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_34.setTransform(91.2,128.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AglAqQgOgRAAgZQAAgYAOgRQAPgSAYAAQAUAAANAKQAOALACASIgUAAQgBgKgIgHQgJgFgLAAQgQAAgJANQgJAMABARQgBASAJAMQAJAOAQAAQAPAAAIgJQAJgIAAgPIgeAAIAAgOIAwAAIAAA7IgMAAIgDgNQgJAJgHADQgIAEgLAAQgYAAgPgSg");
	this.shape_35.setTransform(80.6,126.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},54).wait(91));

	// dog
	this.instance_3 = new lib.db_logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,493,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-170.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({regX:254.1,regY:38.1,x:-11.4,y:61.1},0).wait(1).to({x:-9.8},0).wait(1).to({x:-6.9},0).wait(1).to({x:-2.3},0).wait(1).to({x:4.2},0).wait(1).to({x:13.4},0).wait(1).to({x:26},0).wait(1).to({x:43.2},0).wait(1).to({x:67.1},0).wait(1).to({x:99.4},0).wait(1).to({x:139.5},0).wait(1).to({x:179.1},0).wait(1).to({x:210.5},0).wait(1).to({x:233.3},0).wait(1).to({x:249.4},0).wait(1).to({x:260.8},0).wait(1).to({x:268.8},0).wait(1).to({x:274.2},0).wait(1).to({x:277.7},0).wait(1).to({x:279.5},0).wait(1).to({regX:95.9,regY:32,x:121.9,y:55},0).wait(92));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.2,300,582.2,601);
// library properties:
lib.properties = {
	id: '3425675A7A2D434FB1A7BE1713B1B77E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_Hus_NonB_atlas_P_.png", id:"300x600_Hus_NonB_atlas_P_"}
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