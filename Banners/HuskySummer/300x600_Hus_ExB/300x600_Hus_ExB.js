(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_Hus_ExB_atlas_P_", frames: [[313,0,142,166],[181,0,130,269],[0,0,179,269]]}
];


// symbols:



(lib.bb_Dogtagpngcopy = function() {
	this.spriteSheet = ss["300x600_Hus_ExB_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_phone = function() {
	this.spriteSheet = ss["300x600_Hus_ExB_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_phone_blur = function() {
	this.spriteSheet = ss["300x600_Hus_ExB_atlas_P_"];
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
	this.instance = new lib.db_phone_blur();
	this.instance.parent = this;
	this.instance.setTransform(32,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(32,23,179,269), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AhNBwQgigXAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgJIgygNQgjgLgRgMQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgRgNgIQgLgGgRAAQggAAAAAWQAAANAXAHQANAFAlAJQAiAKARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgWg");
	this.shape.setTransform(259.3,86.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AghCAIAAjGIhMAAIAAg5IDbAAIAAA5IhNAAIAADGg");
	this.shape_1.setTransform(235.6,86.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AAqCAIhYifIgBAAIAACfIg/AAIAAj/IBFAAIBYCdIABAAIAAidIA/AAIAAD/g");
	this.shape_2.setTransform(210.6,86.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AghCAIAAj/IBDAAIAAD/g");
	this.shape_3.setTransform(191.7,86.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtg0QgOAVAAAfQAAAgAOAVQAQAXAdAAQAeAAAQgXQAOgVAAggQAAgfgOgVQgQgYgeAAQgdAAgQAYg");
	this.shape_4.setTransform(172,86.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhrCAIAAj/IB6AAQAoAAAYASQAdAWgBArQABBXhdAAIg2AAIAABVgAgngIIAsAAQAjAAABggQgBgigjAAIgsAAg");
	this.shape_5.setTransform(146.4,86.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AhNBwQgigXAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgJIgygNQgjgLgRgMQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgRgNgIQgLgGgRAAQggAAAAAWQAAANAXAHQANAFAlAJQAiAKARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgWg");
	this.shape_6.setTransform(110.1,86.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_7.setTransform(84.7,86.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AAqCAIhYifIgBAAIAACfIg/AAIAAj/IBFAAIBYCdIABAAIAAidIA/AAIAAD/g");
	this.shape_8.setTransform(58.1,86.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtg0QgOAVAAAfQAAAgAOAVQAQAXAdAAQAeAAAQgXQAOgVAAggQAAgfgOgVQgQgYgeAAQgdAAgQAYg");
	this.shape_9.setTransform(30.8,86.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("AhvCBIAAkAIB4AAQBcgCAABCQAAAjghARQAUAGAMAPQAMARAAAWQAABQhkAAgAgsBLIA1AAQAkAAAAgdQAAgegkAAIg1AAgAgsgaIAzAAQAKAAAIgFQAKgHAAgNQAAgYgcAAIgzAAg");
	this.shape_10.setTransform(4.3,86.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF464").s().p("AhNBZQgWghAAg4QAAg3AWghQAagnAygBQAzABAaAnQAYAhAAA3QAAA3gYAiQgaAngzABQgygBgagngAgjgzQgFASAAAhQAAAjAFAQQAKAcAZAAQAaAAAJgcQAGgPAAgkQAAgjgGgQQgJgbgaAAQgZAAgKAbg");
	this.shape_11.setTransform(208.7,53.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF464").s().p("AhNBZQgWghAAg4QAAg3AWghQAagnAygBQAzABAaAnQAYAhAAA3QAAA3gYAiQgaAngzABQgygBgagngAgjgzQgFASAAAhQAAAjAFAQQAKAcAZAAQAaAAAJgcQAGgPAAgkQAAgjgGgQQgJgbgaAAQgZAAgKAbg");
	this.shape_12.setTransform(186,53.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF464").s().p("AhNBZQgWghAAg4QAAg3AWghQAagnAygBQAzABAaAnQAYAhAAA3QAAA3gYAiQgaAngzABQgygBgagngAgjgzQgFASAAAhQAAAjAFAQQAKAcAZAAQAaAAAJgcQAGgPAAgkQAAgjgGgQQgJgbgaAAQgZAAgKAbg");
	this.shape_13.setTransform(163.4,53.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF464").s().p("AgCB9IAAiZIg8AAIAAgtQAeABAUgMQAWgNACgbIAyAAIAAD5g");
	this.shape_14.setTransform(139.4,53.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF464").s().p("AghCAIAAjGIhMAAIAAg5IDbAAIAAA5IhNAAIAADGg");
	this.shape_15.setTransform(106.4,53.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF464").s().p("AhnCAIAAj/IDMAAIAAA1IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA5g");
	this.shape_16.setTransform(82.8,53.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF464").s().p("AhYBfQgigmAAg5QAAg4AigmQAkgnA4AAQAsAAAgAXQAlAZAEAtIhEAAQgBgQgOgKQgOgJgVAAQgdAAgQAXQgOAVAAAfQAAAgAOAVQAQAYAdAAQAYAAAQgMQARgKACgSIgvAAIAAgwIBsAAIAACLIgrAAIgEgcQgXAigxAAQg4AAgkgng");
	this.shape_17.setTransform(55.8,53.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhNBwQgigXAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgKgRgMQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgQgNgIQgLgHgRAAQggAAAAAWQAAANAXAIQANAEAlAIQAiALARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgWg");
	this.shape_18.setTransform(259.3,87.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghCAIAAjGIhMAAIAAg5IDbAAIAAA5IhNAAIAADGg");
	this.shape_19.setTransform(235.6,87.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAqCAIhYifIgBAAIAACfIg/AAIAAj/IBFAAIBYCdIABAAIAAidIA/AAIAAD/g");
	this.shape_20.setTransform(210.6,87.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghCAIAAj/IBDAAIAAD/g");
	this.shape_21.setTransform(191.7,87.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtg0QgOAVAAAfQAAAgAOAVQAQAYAdgBQAeABAQgYQAOgVAAggQAAgfgOgVQgQgYgeAAQgdAAgQAYg");
	this.shape_22.setTransform(172,87.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhrCAIAAj/IB6AAQAoAAAYASQAdAWgBArQABBXhdAAIg2AAIAABVgAgngIIAsAAQAjAAABggQgBgigjAAIgsAAg");
	this.shape_23.setTransform(146.4,87.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhNBwQgigXAAgvIBDAAQACAoAuAAQARAAALgGQANgHAAgOQAAgOgXgIIgygPQgjgKgRgMQgXgTAAggQAAgnAigVQAdgSAoAAQArAAAcATQAgAXAAApIhDAAQABgQgNgIQgLgHgRAAQggAAAAAWQAAANAXAIQANAEAlAIQAiALARAOQAYARAAAgQAAAtgjAXQgdASgwAAQgwAAgdgWg");
	this.shape_24.setTransform(110.1,87.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_25.setTransform(84.7,87.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAqCAIhYifIgBAAIAACfIg/AAIAAj/IBFAAIBYCdIABAAIAAidIA/AAIAAD/g");
	this.shape_26.setTransform(58.1,87.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtg0QgOAVAAAfQAAAgAOAVQAQAYAdgBQAeABAQgYQAOgVAAggQAAgfgOgVQgQgYgeAAQgdAAgQAYg");
	this.shape_27.setTransform(30.8,87.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhvCBIAAkAIB4AAQBcgCAABCQAAAjghARQAUAGAMAPQAMARAAAWQAABQhkAAgAgsBLIA1AAQAkAAAAgdQAAgegkAAIg1AAgAgsgaIAzAAQAKAAAIgFQAKgHAAgNQAAgYgcAAIgzAAg");
	this.shape_28.setTransform(4.3,87.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhNBaQgWgjAAg3QAAg3AWghQAagoAyAAQAzAAAaAoQAYAhAAA3QAAA3gYAjQgaAmgzABQgygBgagmgAgjgzQgFASAAAhQAAAjAFAQQAKAcAZAAQAaAAAJgcQAGgPAAgkQAAgigGgRQgJgbgaAAQgZAAgKAbg");
	this.shape_29.setTransform(208.7,54.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhNBaQgWgjAAg3QAAg3AWghQAagoAyAAQAzAAAaAoQAYAhAAA3QAAA3gYAjQgaAmgzABQgygBgagmgAgjgzQgFASAAAhQAAAjAFAQQAKAcAZAAQAaAAAJgcQAGgPAAgkQAAgigGgRQgJgbgaAAQgZAAgKAbg");
	this.shape_30.setTransform(186,54.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhNBaQgWgjAAg3QAAg3AWghQAagoAyAAQAzAAAaAoQAYAhAAA3QAAA3gYAjQgaAmgzABQgygBgagmgAgjgzQgFASAAAhQAAAjAFAQQAKAcAZAAQAaAAAJgcQAGgPAAgkQAAgigGgRQgJgbgaAAQgZAAgKAbg");
	this.shape_31.setTransform(163.4,54.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgCB+IAAiaIg8AAIAAgtQAeABAUgMQAWgNACgbIAyAAIAAD6g");
	this.shape_32.setTransform(139.4,54.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AghCBIAAjHIhMAAIAAg6IDbAAIAAA6IhNAAIAADHg");
	this.shape_33.setTransform(106.4,54.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_34.setTransform(82.8,54.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhYBfQgigmAAg5QAAg4AigmQAkgnA4AAQAsAAAgAXQAlAZAEAtIhEAAQgBgQgOgKQgOgJgVAAQgdAAgQAXQgOAVAAAfQAAAgAOAUQAQAZAdAAQAYgBAQgKQARgLACgSIgvAAIAAgwIBsAAIAACMIgrAAIgEgdQgXAigxAAQg4AAgkgng");
	this.shape_35.setTransform(55.8,54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-11.2,38.4,284.6,74), null);


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
	this.instance = new lib.db_phone();
	this.instance.parent = this;
	this.instance.setTransform(-84,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(-84,85,130,269), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6F41").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(423.2,7.9,1,1,0,0,0,127.2,41.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AhrCAIAAkAIB5AAQApABAYASQAcAWAAArQAABXhdAAIg1AAIAABVgAgngIIAsAAQAkAAAAggQAAgigkAAIgsAAg");
	this.shape.setTransform(204.2,52.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_1.setTransform(177.8,53.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AhcCAIAAkAIBCAAIAADHIB4AAIAAA5g");
	this.shape_2.setTransform(142.9,52.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AhnCAIAAkAIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA5g");
	this.shape_3.setTransform(119.3,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_4.setTransform(93.3,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AheCAIAAkAIC9AAIAAA2Ih6AAIAAA0IBpAAIAAAzIhpAAIAABjg");
	this.shape_5.setTransform(69.8,52.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_6.setTransform(220.2,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtgzQgOAUAAAfQAAAgAOAUQAQAZAdAAQAeAAAQgZQAOgUAAggQAAgfgOgUQgQgZgeABQgdgBgQAZg");
	this.shape_7.setTransform(192.9,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggCBIAAhhIheigIBMAAIAyBpIAzhpIBMAAIheCgIAABhg");
	this.shape_8.setTransform(166.9,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqCBIhYifIgBAAIAACfIg/AAIAAkBIBFAAIBYCeIABAAIAAieIA/AAIAAEBg");
	this.shape_9.setTransform(130.3,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_10.setTransform(105,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAsCBIAAhrIhXAAIAABrIhDAAIAAkBIBDAAIAABeIBXAAIAAheIBDAAIAAEBg");
	this.shape_11.setTransform(79,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkCBIgkixIAAAAIgjCxIhEAAIhFkBIBDAAIAkC7IABAAIAmi7IA+AAIAlC7IABAAIAki7IBDAAIhGEBg");
	this.shape_12.setTransform(48.3,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhrCAIAAj/IB5AAQApAAAYASQAcAWAAArQAABXhdAAIg1AAIAABVgAgngIIAsAAQAkAAAAggQAAgigkAAIgsAAg");
	this.shape_13.setTransform(204.2,53.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_14.setTransform(177.8,54.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhcCAIAAj/IBCAAIAADGIB4AAIAAA5g");
	this.shape_15.setTransform(142.9,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhnCAIAAj/IDMAAIAAA1IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA5g");
	this.shape_16.setTransform(119.3,53.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_17.setTransform(93.3,54.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AheCAIAAj/IC9AAIAAA1Ih6AAIAAA0IBpAAIAAAzIhpAAIAABjg");
	this.shape_18.setTransform(69.8,53.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhUBnQgbgbAAg4IAAiWIBDAAIAACZQAAAaAKAMQALANAXAAQAYAAALgNQAKgMAAgaIAAiZIBDAAIAACWQAAA4gbAbQgbAcg6AAQg5AAgbgcg");
	this.shape_19.setTransform(220.2,19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhdBfQghglAAg6QAAg5AhglQAjgnA6AAQA7AAAjAnQAhAlAAA5QAAA6ghAlQgjAng7AAQg6AAgjgngAgtgzQgOAUAAAfQAAAgAOAUQAQAYAdAAQAeAAAQgYQAOgUAAggQAAgfgOgUQgQgZgeAAQgdAAgQAZg");
	this.shape_20.setTransform(192.9,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AggCBIAAhhIheigIBMAAIAyBpIAzhpIBMAAIheCgIAABhg");
	this.shape_21.setTransform(166.9,19.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAqCBIhYigIgBAAIAACgIg/AAIAAkBIBFAAIBYCeIABAAIAAieIA/AAIAAEBg");
	this.shape_22.setTransform(130.3,19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhnCBIAAkBIDMAAIAAA2IiJAAIAAAtIB9AAIAAAzIh9AAIAAAxICMAAIAAA6g");
	this.shape_23.setTransform(105,19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAsCBIAAhrIhXAAIAABrIhDAAIAAkBIBDAAIAABeIBXAAIAAheIBDAAIAAEBg");
	this.shape_24.setTransform(79,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAkCBIgkixIAAAAIgjCxIhEAAIhFkBIBDAAIAkC7IABAAIAmi7IA+AAIAlC7IABAAIAki7IBDAAIhGEBg");
	this.shape_25.setTransform(48.3,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(29,3.6,540.3,75.4), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgaIAAjFQAAgaAeAAIODAAQAeAAAAAaIAADFQAAAageAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AnBB9QgeAAAAgaIAAjFQAAgaAeAAIODAAQAeAAAAAaIAADFQAAAageAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:5.7}).wait(19).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_47,x:41,y:5.7}).wait(53).to({graphics:null,x:0,y:0}).wait(53));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(28).to({_off:false},0).wait(35).to({x:-50.5},0).to({_off:true},18).wait(53));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).to({state:[{t:this.shape_12}]},28).to({state:[]},53).wait(53));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1BAEDB").s().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");
	this.shape_13.setTransform(41,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},19).wait(28).to({_off:false},0).to({_off:true},53).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.8,96,25);


// stage content:
(lib._300x600_Hus_ExB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:-19,regY:219.5,x:-99.2,y:319.7},0).wait(1).to({x:-63.4,y:320.1},0).wait(1).to({x:-22.6,y:320.5},0).wait(1).to({x:15.4,y:320.9},0).wait(1).to({x:47.5,y:321.2},0).wait(1).to({x:73.7,y:321.5},0).wait(1).to({x:95,y:321.7},0).wait(1).to({x:112.2,y:321.9},0).wait(1).to({x:126.2,y:322.1},0).wait(1).to({x:137.4,y:322.2},0).wait(1).to({x:146.3,y:322.3},0).wait(1).to({x:153.3,y:322.4},0).wait(1).to({x:158.6},0).wait(1).to({x:162.5,y:322.5},0).wait(1).to({x:165.1},0).wait(1).to({x:166.5},0).wait(1).to({regX:52,regY:68,x:238,y:171},0).wait(1).to({regX:-19,regY:219.5,x:166.9,y:322.5},0).wait(1).to({x:166.6},0).wait(1).to({x:165.8},0).wait(1).to({x:164.4},0).wait(1).to({x:161.6},0).wait(1).to({x:158.3},0).wait(1).to({x:156.4},0).wait(1).to({x:155.5},0).wait(1).to({x:155.1},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(63));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-120.5,298.5,1,1,0,0,0,126.5,133.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).wait(1).to({regX:121.5,regY:157.5,x:-105.3,y:322.5,alpha:0.975},0).wait(1).to({x:-74.9,alpha:0.938},0).wait(1).to({x:-40.3,alpha:0.896},0).wait(1).to({x:-8,alpha:0.856},0).wait(1).to({x:19.2,alpha:0.823},0).wait(1).to({x:41.4,alpha:0.796},0).wait(1).to({x:59.5,alpha:0.774},0).wait(1).to({x:74.1,alpha:0.756},0).wait(1).to({x:85.9,alpha:0.742},0).wait(1).to({x:95.4,alpha:0.73},0).wait(1).to({x:103,alpha:0.721},0).wait(1).to({x:108.9,alpha:0.713},0).wait(1).to({x:113.4,alpha:0.708},0).wait(1).to({x:116.7,alpha:0.704},0).wait(1).to({x:118.9,alpha:0.701},0).wait(1).to({x:120.2,alpha:0.7},0).wait(1).to({regX:126.5,regY:133.5,x:125.5,y:298.5,alpha:0.699},0).wait(1).to({regX:121.5,regY:157.5,x:120.4,y:322.5,alpha:0.694},0).wait(1).to({x:119.8,alpha:0.674},0).wait(1).to({x:118.6,alpha:0.631},0).wait(1).to({x:116.2,alpha:0.547},0).wait(1).to({x:111.6,alpha:0.386},0).wait(1).to({x:106.1,alpha:0.194},0).wait(1).to({x:102.9,alpha:0.084},0).wait(1).to({x:101.4,alpha:0.03},0).wait(1).to({x:100.7,alpha:0.006},0).wait(1).to({regX:126.5,regY:133.5,x:105.5,y:298.5,alpha:0},0).wait(63));

	// cta
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(218,560.6,1.1,1.1,0,0,0,41.1,7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({alpha:1,startPosition:47},19).wait(53));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_54 = new cjs.Graphics().p("A0aNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_55 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_56 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_57 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_58 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_59 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_60 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_61 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_62 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_63 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_64 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_65 = new cjs.Graphics().p("AzeNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_66 = new cjs.Graphics().p("AzRNIIAAsgMAm8AAAIAAMgg");
	var mask_graphics_67 = new cjs.Graphics().p("Ay0NIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_68 = new cjs.Graphics().p("AydNIIAAsgMAm8AAAIAAMgg");
	var mask_graphics_69 = new cjs.Graphics().p("AyNNIIAAsgMAm9AAAIAAMgg");
	var mask_graphics_70 = new cjs.Graphics().p("AyBNIIAAsgMAm8AAAIAAMgg");
	var mask_graphics_71 = new cjs.Graphics().p("Ax7NIIAAsgMAm8AAAIAAMgg");
	var mask_graphics_72 = new cjs.Graphics().p("Ax5NIIAAsgMAm8AAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_graphics_54,x:-130.7,y:84}).wait(1).to({graphics:mask_graphics_55,x:-115.3,y:84}).wait(1).to({graphics:mask_graphics_56,x:-83.1,y:84}).wait(1).to({graphics:mask_graphics_57,x:-45.8,y:84}).wait(1).to({graphics:mask_graphics_58,x:-10.1,y:84}).wait(1).to({graphics:mask_graphics_59,x:20.8,y:84}).wait(1).to({graphics:mask_graphics_60,x:46.4,y:84}).wait(1).to({graphics:mask_graphics_61,x:67.4,y:84}).wait(1).to({graphics:mask_graphics_62,x:84.7,y:84}).wait(1).to({graphics:mask_graphics_63,x:98.8,y:84}).wait(1).to({graphics:mask_graphics_64,x:110.3,y:84}).wait(1).to({graphics:mask_graphics_65,x:119.7,y:84}).wait(1).to({graphics:mask_graphics_66,x:125.9,y:84}).wait(1).to({graphics:mask_graphics_67,x:128.9,y:84}).wait(1).to({graphics:mask_graphics_68,x:131.1,y:84}).wait(1).to({graphics:mask_graphics_69,x:132.8,y:84}).wait(1).to({graphics:mask_graphics_70,x:133.9,y:84}).wait(1).to({graphics:mask_graphics_71,x:134.5,y:84}).wait(1).to({graphics:mask_graphics_72,x:134.8,y:84}).wait(72));

	// masked
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIASAAIAAALQAHgOASAAQASAAALANQAJAMAAATQAAARgJAMQgKAOgRAAQgSAAgIgNIAAApgAgRgiQgFAHAAAOQAAANAGAHQAGAIAKAAQAMAAAFgJQAGgHAAgMQAAgMgGgIQgHgJgKAAQgKAAgHAIg");
	this.shape.setTransform(227.6,128.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoA6IAAhwIARAAIAAALQAIgOARAAQATAAALANQAJAMAAATQAAARgIAMQgLAOgQAAQgTAAgIgNIAAApgAgRgiQgFAHgBAOQAAANAHAHQAGAIAKAAQALAAAGgJQAGgHAAgMQAAgMgGgIQgHgJgKAAQgKAAgHAIg");
	this.shape_1.setTransform(217.9,128.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA5IgLgeIgsAAIgLAeIgVAAIAshxIAVAAIAsBxgAARAMIgRgxIAAAAIgRAxIAiAAg");
	this.shape_2.setTransform(207.5,125.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggA5IAAgQIAIABQAHAAACgDQADgCACgGIABgHIgfhRIAUAAIAUA9IABAAIAVg9IATAAIghBWQgFAPgDAFQgHAJgMAAIgNgBg");
	this.shape_3.setTransform(193.6,128.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQA5IgYgoIgLAKIAAAeIgSAAIAAhxIASAAIAAA/IAggfIAWAAIgfAdIAiA0g");
	this.shape_4.setTransform(185.7,125.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAkQgLgHAAgOIASAAQACAOAQAAQATAAgBgLQAAgGgIgDIgSgFQgMgCgGgEQgIgGAAgLQAAgMAMgHQAJgFANAAQAOAAAIAGQALAHABANIgTAAQgCgLgOAAQgPAAAAAIQAAAGAIADIASAEQAMADAHAEQAIAGAAALQAAANgNAHQgKAHgOAAQgPAAgKgIg");
	this.shape_5.setTransform(176.8,127);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkAKIAAgzIATAAIAAAxQAAAUAQAAQATAAAAgWIAAgvIASAAIAABRIgSAAIAAgMIAAAAQgEAGgGAFQgHADgFAAQggAAAAggg");
	this.shape_6.setTransform(168,127.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA5IAAg0IgzAAIAAA0IgUAAIAAhxIAUAAIAAAtIAzAAIAAgtIAUAAIAABxg");
	this.shape_7.setTransform(157.6,125.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggA5IAAgQIAJABQAFAAADgDQADgCABgGIADgHIgghRIAUAAIAVA9IAAAAIAVg9IATAAIggBWQgHAPgCAFQgHAJgNAAIgMgBg");
	this.shape_8.setTransform(147.7,128.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqAqIAAgvQAAgMgCgEQgEgGgJAAQgSAAAAAWIAAAvIgRAAIAAg0QAAgIgDgEQgEgFgHAAQgIAAgFAGQgGAFABALIAAAvIgTAAIAAhRIASAAIAAALIAAAAQAJgOAQABQARgBAGAOQAKgOAQABQAbAAAAAcIAAA3g");
	this.shape_9.setTransform(136.6,126.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAfQgLgLAAgUQAAgRALgNQALgNARAAQATAAAMAPQALAOgDATIg7AAQAAAKAFAHQAGAHAKAAQAPAAAFgOIARAAQgDAOgKAHQgKAIgOAAQgSAAgLgNgAAVgGQAAgJgGgHQgGgGgJAAQgIAAgGAGQgGAGAAAKIApAAIAAAAg");
	this.shape_10.setTransform(120.9,127);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA5IAAg0QAAgRgQAAQgIAAgFAGQgGAGAAAIIAAAxIgTAAIAAhxIATAAIAAAqQADgGAHgDQAHgEAHAAQAOAAAHAHQAIAHAAANIAAA5g");
	this.shape_11.setTransform(111.9,125.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_12.setTransform(104.5,125.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASA5IAAg0QgBgRgPAAQgIAAgGAGQgFAGAAAIIAAAxIgSAAIAAhxIASAAIAAAqQAEgGAGgDQAHgEAHAAQANAAAIAHQAJAHAAANIAAA5g");
	this.shape_13.setTransform(93,125.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAxQgEgFgBgLIAAgwIgNAAIAAgNIANAAIAAgZIASAAIAAAZIAQAAIAAANIgQAAIAAArQAAAHABACQACADAFAAIAIgBIAAAOIgMABQgMAAgFgFg");
	this.shape_14.setTransform(85.7,125.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIA5IAAhRIARAAIAABRgAgIgnIAAgRIARAAIAAARg");
	this.shape_15.setTransform(81.2,125.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXA5IgXhWIAAAAIgXBWIgVAAIgdhxIAUAAIAUBWIABAAIAXhWIATAAIAXBWIAAAAIAVhWIAUAAIgfBxg");
	this.shape_16.setTransform(71.7,125.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},54).wait(90));

	// dog
	this.instance_3 = new lib.bb_Dogtagpngcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19,490,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-180.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({regX:298.7,regY:36.1,x:23.2,y:59.1},0).wait(1).to({x:24.8},0).wait(1).to({x:27.7},0).wait(1).to({x:32.3},0).wait(1).to({x:38.8},0).wait(1).to({x:48},0).wait(1).to({x:60.6},0).wait(1).to({x:77.8},0).wait(1).to({x:101.7},0).wait(1).to({x:134},0).wait(1).to({x:174.1},0).wait(1).to({x:213.7},0).wait(1).to({x:245.1},0).wait(1).to({x:267.9},0).wait(1).to({x:284},0).wait(1).to({x:295.4},0).wait(1).to({x:303.4},0).wait(1).to({x:308.8},0).wait(1).to({x:312.3},0).wait(1).to({x:314.1},0).wait(1).to({regX:95.9,regY:32,x:111.9,y:55},0).wait(91));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,300,547,600);
// library properties:
lib.properties = {
	id: '3425675A7A2D434FB1A7BE1713B1B77E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_Hus_ExB_atlas_P_.png", id:"300x600_Hus_ExB_atlas_P_"}
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