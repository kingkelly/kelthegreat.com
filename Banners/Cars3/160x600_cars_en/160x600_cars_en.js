(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_cars_en_atlas_P_", frames: [[399,0,88,62],[0,0,235,330],[237,161,112,107],[351,161,123,65],[237,0,160,159]]},
		{name:"160x600_cars_en_atlas_NP_", frames: [[0,0,300,600],[0,602,267,230]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BGgradient = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CT_dblbbx = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legopngcopy = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rccar = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["160x600_cars_en_atlas_P_"];
	this.gotoAndStop(4);
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


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trike();
	this.instance.parent = this;
	this.instance.setTransform(-80,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-79.5,160,159);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trike();
	this.instance.parent = this;
	this.instance.setTransform(-80,-79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-79.5,160,159);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legopngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-56,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-53.5,112,107);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legopngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-56,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-53.5,112,107);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rccar();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32.5,123,65);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rccar();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32.5,123,65);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blackcar();
	this.instance.parent = this;
	this.instance.setTransform(-44,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-31,88,62);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blackcar();
	this.instance.parent = this;
	this.instance.setTransform(-44,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-31,88,62);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA1IgYhEIgXBEIgUAAIgkhpIAZAAIAWBGIAXhGIATAAIAYBGIAVhGIAZAAIgkBpg");
	this.shape.setTransform(100.2,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgHIgHgIIgFgJIgDgKIgBgLIAAAAIABgKIADgKIAFgJIAHgIIAIgHIAKgFIAKgDIALgBQAGAAAGABIALADIAJAFIAIAHIAHAIIAFAJIADAKIABAKIAAAAIgBALIgDAKIgFAJIgHAIIgIAHIgKAFIgKADQgGACgGgBQgFABgGgCgAgMgdQgGACgEAEQgEAFgCAGQgDAGAAAGIAAAAQAAAGADAGQACAGAEAGQAFAEAFACQAGADAGAAQAHAAAGgDQAGgCAEgEQAEgFACgGQADgGAAgHIAAAAQAAgFgDgHQgCgGgEgEQgFgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(86,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA1IgyhCIAABCIgXAAIAAhpIAWAAIAwBAIAAhAIAXAAIAABpg");
	this.shape_2.setTransform(73.7,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA1IAAhpIArAAQAJABAIACQAGACAGAFQAFAGADAGQACAHAAAIIAAAIIgDAHQgDAHgGAEQgFAFgIACQgIADgIAAIgRAAIAAAggAgRAAIARAAIAIAAIAFgDQADgCABgDQABgDABgEIAAAAQgBgDgBgDIgEgGQgCgBgDgBIgIgBIgRAAg");
	this.shape_3.setTransform(58.7,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgHIgHgIIgFgJIgDgKIgBgLIAAAAIABgKIADgKIAFgJIAHgIIAIgHIAKgFIAKgDIALgBQAGAAAGABIALADIAJAFIAIAHIAHAIIAFAJIADAKIABAKIAAAAIgBALIgDAKIgFAJIgHAIIgIAHIgKAFIgKADQgGACgGgBQgFABgGgCgAgMgdQgGACgEAEQgEAFgCAGQgDAGAAAGIAAAAQAAAGADAGQACAGAEAGQAFAEAFACQAGADAGAAQAHAAAGgDQAGgCAEgEQAEgFACgGQADgGAAgHIAAAAQAAgFgDgHQgCgGgEgEQgFgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(46.9,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA1IAAgrIgqAAIAAArIgWAAIAAhpIAWAAIAAAqIAqAAIAAgqIAYAAIAABpg");
	this.shape_5.setTransform(34.9,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA1IgLgDIgMgGQgFgCgFgFIAOgQQAHAGAIADIAHADIAIABQAHgBAFgCQADgCABgFQgBgFgDgDQgFgDgLgDIgPgEIgLgGQgEgDgDgFQgDgFABgIIAAAAQAAgHACgHQADgFAFgFQAFgEAGgCQAHgCAIAAIAKABIAKACIAKAFIAIAGIgLARQgIgFgHgDQgGgDgGAAQgHAAgDADQgEACAAAEIAAABQAAAFAFACQAFADAMAEIAOAEQAHADAEACQAEAEACAFQACAFABAHIAAAAQgBAIgDAGQgCAGgGAEQgEAEgHADQgIACgIAAIgLgBg");
	this.shape_6.setTransform(24.3,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("Ap6C5IAAlxIT1AAIAAFxg");
	this.shape_7.setTransform(63.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,37);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.CT_dblbbx();
	this.instance.parent = this;
	this.instance.setTransform(-49,80,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-49,80,154.2,216.5), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BGgradient();
	this.instance.parent = this;
	this.instance.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(3,3,300,600), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvMMbIAAi0ICsAAIAAzNIisAAIAAi0IeZAAIAAC0Ii4AAIAATNIC4AAIAAC0gArEJnIWUAAIAAzNI2UAAg");
	this.shape.setTransform(71.4,62.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Cars3Logo_1080();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-25.9,-16.9,194.6,159), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLA4IAAhYIgiAAIAAgXIBbAAIAAAXIghAAIAABYg");
	this.shape.setTransform(152.7,219);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiA4IgKgZIgvAAIgLAZIgZAAIAxhvIAVAAIAxBvgAAPAKIgPgkIgPAkIAeAAg");
	this.shape_1.setTransform(142.6,219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZA5IgZhJIgYBJIgWAAIgmhxIAaAAIAYBLIAYhLIAVAAIAZBLIAXhLIAaAAIgmBxg");
	this.shape_2.setTransform(122.5,219.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMA5IgLgEIgKgFQgFgDgEgEIgHgIIgFgKQgDgFgBgGIgBgMIABgLIAEgKQACgGADgEIAHgJIAJgHQAFgDAFgDQAGgCAGgBIALgBIANABQAGABAFACIAKAFIAJAIQAEAEADAFIAFAJIADALQACAGAAAFIAAAAQAAAGgCAGIgDALIgFAKIgHAIIgJAHIgKAFIgMAEQgGABgGAAIgMgBgAgNgfQgGACgFAFQgEAEgCAHQgDAHAAAGIAAAAQAAAHADAHQACAGAFAFQAEAFAGADQAHACAGAAQAHAAAHgCQAGgDAEgFQAFgFACgGQADgHAAgHQAAgHgDgGQgCgGgFgFQgEgFgHgCQgGgDgHgBQgHABgGADg");
	this.shape_3.setTransform(107.3,219.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdA4Ig1hGIAABGIgZAAIAAhvIAXAAIA0BEIAAhEIAYAAIAABvg");
	this.shape_4.setTransform(94.2,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(86.2,210.3,73.4,19.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgQBLQgIgCgHgEQgIgDgGgEQgGgFgFgGIAXgWQAJAJAHAEQAJAFALAAQAJAAAGgFQAGgFAAgIIAAAAQAAgFgCgEQgCgEgEgCQgDgCgGgBQgGgCgFAAIgPAAIgEgUIAjglIg7AAIAAgcIBlAAIAAAZIgmAkQAIACAHADQAIADAFAEQAGAFADAHQAEAIAAAKIAAABQAAAKgEAJQgEAKgGAGQgIAHgKAEQgKADgMAAQgJAAgKgCg");
	this.shape.setTransform(88,77.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgMBMIgRgEQgIgDgHgFQgIgEgHgGIAUgYQALAJAKAFIAMADIALABQAKAAAGgDQAGgEAAgHIAAAAQAAgHgGgEQgGgEgSgFQgNgDgHgDQgKgEgGgEQgHgFgDgHQgEgIAAgLIAAAAQAAgKAEgJQAEgIAHgGQAHgGAKgEQAKgDALAAIAPABIAPAEQAHACAGAEIAMAIIgRAZQgKgHgKgEQgKgEgIAAQgKAAgFAEQgFAEAAAGIAAAAQAAAHAHAEQAGAEATAFQAMADAIAEQAKAEAFAEQAHAFADAHQADAIAAAKQAAALgEAJQgEAJgIAGQgHAGgKADQgKADgNAAIgQgCg");
	this.shape_1.setTransform(67.9,77.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AAbBMIgggxIgaAAIAAAxIghAAIAAiXIBEAAQAJAAAQAEQALAEAIAIQAHAGADAJQADAJAAAKIAAABQAAAJgCAHQgDAIgEAFQgEAFgGAFQgGAEgHADIAkA2gAgfgBIAhAAQAGAAAEgCQAGgBACgDQAEgDACgEQACgEAAgFIAAAAQAAgFgCgEQgCgEgEgDQgDgDgFgBQgFgCgGAAIggAAg");
	this.shape_2.setTransform(53.9,77.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("AAuBMIgPgiIg/AAIgOAiIghAAIBBiXIAdAAIBCCXgAAUANIgUgwIgUAwIAoAAg");
	this.shape_3.setTransform(37,77.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("AgIBNIgPgFIgMgHIgMgJIgJgMQgEgGgDgHQgDgHgCgIQgBgHAAgJIAAAAQAAgHABgIIAFgOIAHgOIAJgLIAMgKQAGgEAHgDQAIgDAHgCQAIgBAIAAQAKAAAJABQAJACAIADQAJAEAPANIgWAYQgIgIgKgEQgKgFgKAAQgJAAgIAEQgIAEgGAGQgGAHgDAIQgDAJAAAJQAAAKADAIQADAJAGAHQAGAGAIAEQAIAEAJAAQAJAAANgFQAIgEAJgJIAWAVIgNAMQgGAFgHADQgHAEgKABQgJACgKAAIgQgBg");
	this.shape_4.setTransform(20.7,77.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AgWA4QgQgIgIgFIAOgWQAJAGAKAEQAJAEAHAAQAHAAAEgDQADgCAAgEQAAgFgHgDIgQgGQgQgFgHgGQgFgDgDgFQgDgHAAgIIAAAAQAAgJADgGQADgIAGgEQAGgFAIgDQAHgCAIAAQALAAAMAEQALADAJAHIgMAWQgJgEgIgEQgIgDgGAAQgFABgEACQgDACAAAEIAAAAQAAAFAHADIAQAGIAMAFQAHACAFAEQAFAEADAFQADAGAAAHQAAAKgDAHQgEAIgGAEQgGAEgIADQgIACgJAAQgMAAgNgEg");
	this.shape_5.setTransform(126.6,55.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AgVAVIAKgCIAHgEQAFgGgBgJIgNAAIAAgiIAjAAIAAAdQgBAKgCAIQgCAHgGAFQgFAFgHACQgHADgJAAg");
	this.shape_6.setTransform(118,49.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("AgiA7IAAhzIAhAAIAAAYQABgHAEgEQAEgFAEgDQAFgEAFgCQAGgBAHAAIAAAiIgCAAQgIAAgGADQgHACgFAGQgEAFgCAHQgCAHAAAKIAAArg");
	this.shape_7.setTransform(110.4,55.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AgcA6QgHgDgGgEQgFgFgDgGQgDgHAAgJQAAgJADgHQADgHAHgEQAGgFAIgCQAJgCAKAAQALAAARAFIAAgCQAAgFgCgEQgBgEgEgDQgDgDgEgBIgKgBQgJAAgIABIgPAFIgIgZIATgHQAMgDANAAQANAAAKAEQAJADAHAGQAGAHADAJQADAJAAAMIAABDIggAAIAAgNQgGAHgIAEQgIAEgMAAQgIAAgHgCgAgPALQgGAEAAAIIAAAAQAAAHAFADQAFAEAIAAQAFAAAFgBQAFgCADgDQADgCACgEQACgEAAgEIAAgGQgJgEgMAAQgKAAgGAEg");
	this.shape_8.setTransform(98.7,55.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AAXA6IgXgkIgXAkIgiAAIAog6Igng5IAkAAIAUAiIAWgiIAjAAIgoA5IApA6g");
	this.shape_9.setTransform(86.7,55.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgPBPIAAhzIAfAAIAABzgAgQgxIAAgdIAhAAIAAAdg");
	this.shape_10.setTransform(77.1,53.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("Ag7BMIAAiXIA9AAQANAAALAEQALAEAHAHQAIAHAEAJQAEAKAAAMIAAAAIgBAMIgEAKQgEAKgJAHQgIAGgLAEQgMADgLAAIgaAAIAAAugAgaABIAaAAQAGAAAFgBQAFgCADgDIAGgHQABgEAAgFIAAgBQAAgFgBgFQgCgEgEgDQgDgDgGgBQgEgCgGAAIgaAAg");
	this.shape_11.setTransform(67.2,53.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgMAeQgFgDgFgEQgEgEgDgGQgCgGAAgHIAAAAQAAgGACgGQADgFAEgFQAFgEAFgDQAGgCAGAAQAGAAAGACQAGADAFAEQAEAFADAFQACAGAAAGIAAAAQAAAHgCAGQgDAGgEAEQgFAEgGADQgGACgGAAQgGAAgGgCg");
	this.shape_12.setTransform(54,53.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("AglBJQgHgBgHgEIALgYQAIAEAHAAQAEAAACgBQADgCACgEIgth0IAiAAIAaBOIAZhOIAiAAIgsB2IgHAPQgEAGgEAEQgEAEgFACQgGACgHAAQgJAAgHgDg");
	this.shape_13.setTransform(42.1,57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgUA4QgLgEgHgIQgJgIgFgLIgDgMIgBgNIAAAAQAAgLAEgLQAFgLAHgJQAIgIAKgFIAMgDIAKgBIAOABIALAEIAKAGIAIAIQAHAIADAMQAEALAAAMIAAAIIhQAAQABAGACAEIAHAHQAEADAEABQAEACAFAAQAIAAAHgDQAGgDAIgGIASARIgJAJIgLAHIgNAEQgHABgHAAQgQgBgIgDgAAZgIIgCgKQgCgFgEgDQgDgEgEgBQgEgCgGAAQgEAAgEACQgEABgDAEQgDADgCAEIgDALIAwAAIAAAAg");
	this.shape_14.setTransform(29.5,55.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AAUA7IAAhAIgBgKQgBgFgDgDQgCgDgEgBQgEgCgFAAQgDAAgEACQgEABgDADQgCADgCAFQgBAFAAAFIAABAIghAAIAAhzIAhAAIAAAQQAHgIAGgEIAJgFQAFgBAGAAQAJAAAIADQAHACAFAGQAFAGADAIQACAIAAAKIAABKg");
	this.shape_15.setTransform(16.2,55.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("AgWA4QgQgIgIgFIAOgWQAJAGAKAEQAJAEAHAAQAHAAAEgDQADgCAAgEQAAgFgHgDIgQgGQgQgFgHgGQgFgDgDgFQgDgHAAgIIAAAAQAAgJADgGQADgIAGgEQAGgFAIgDQAHgCAIAAQALAAAMAEQALADAJAHIgMAWQgJgEgIgEQgIgDgGAAQgFABgEACQgDACAAAEIAAAAQAAAFAHADIAQAGIAMAFQAHACAFAEQAFAEADAFQADAGAAAHQAAAKgDAHQgEAIgGAEQgGAEgIADQgIACgJAAQgMAAgNgEg");
	this.shape_16.setTransform(3.9,55.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("AgPBPIAAhzIAfAAIAABzgAgQgxIAAgdIAhAAIAAAdg");
	this.shape_17.setTransform(-4.6,53.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AhFBMIAAiXIA8AAIAPACIAQAEIAOAHIALAJIAKALIAHANQADAHABAHQACAIAAAHQAAAIgCAHQgBAIgDAHIgHANIgKALQgFAFgGAEQgHAEgHADQgIADgIABIgPACgAgjAuIAaAAQAJAAAIgEQAIgDAGgGQAHgGACgIQAEgJAAgKIAAAAQAAgJgEgIQgCgJgHgGQgGgGgIgDQgIgEgJAAIgaAAg");
	this.shape_18.setTransform(-16,53.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNBVQgKgCgJgDQgJgEgIgEQgJgGgIgGIAWgaQAMAJAMAFIANAFIANABQALAAAGgEQAHgFAAgHIAAAAQAAgIgHgEQgHgFgTgFIgXgHQgLgEgHgFQgHgFgEgIQgEgJAAgMIAAgBQAAgLAEgKQAFgJAIgHQAIgGAKgEQALgEANAAQAIAAAJACIAQAEIAPAHIAOAJIgUAcQgLgIgLgEQgLgFgJAAQgLAAgGAEQgFAEAAAHIAAAAQAAAIAHAFQAHAEAVAFQAOAEAJAEQAKAEAHAFQAHAGADAIQAEAIAAALIAAAAQAAANgFAKQgEAJgJAHQgIAHgLADQgMAEgNAAQgJAAgJgCg");
	this.shape_19.setTransform(121.4,28);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgKBVQgIgCgJgCIgOgIQgIgFgGgFQgFgGgFgIQgFgGgDgIQgDgIgBgIIgCgSIAAgBQAAgIACgIQABgJADgIQADgIAFgHQAFgHAGgFQAFgHAIgEIAPgIIAQgGQAKgBAIAAQAMAAAJABQAJABAIAEQALADARAOIgXAcQgKgJgJgEQgLgEgOAAQgJAAgJAEQgJAEgHAHQgGAIgEAJQgEAJABALIAAAAQgBALAEAKQAEAKAHAHQAGAHAKAEQAKAEAJAAQAKAAAKgDQAIgCAHgFIAAgYIglAAIAAgfIBJAAIAABIQgTAPgMAEQgJAEgKACQgLACgLAAQgIAAgKgCg");
	this.shape_20.setTransform(104.3,28);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AArBUIhRhqIAABqIgkAAIAAinIAiAAIBPBnIAAhnIAkAAIAACng");
	this.shape_21.setTransform(85.5,28);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_22.setTransform(72,28);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAiBUIAAhDIhDAAIAABDIglAAIAAinIAlAAIAABDIBDAAIAAhDIAlAAIAACng");
	this.shape_23.setTransform(58.8,28);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIgzAAIAACFg");
	this.shape_24.setTransform(41.9,28);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag7BUIAAinIAlAAIAACGIBTAAIAAAhg");
	this.shape_25.setTransform(20.1,28);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag7BUIAAinIAlAAIAACGIBTAAIAAAhg");
	this.shape_26.setTransform(5.2,28);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAyBVIgPgmIhGAAIgQAmIglAAIBIipIAhAAIBICpgAAWAOIgWg1IgWA1IAsAAg");
	this.shape_27.setTransform(-12.3,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-27.3,14.8,162,77), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],65.1,-3.5,65.1,3.4).s().p("AgMAjIAAhFIAZAAIAABFg");
	this.shape.setTransform(-59.8,163.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],65.1,-3.5,65.1,3.4).s().p("AgMAjIAAhFIAZAAIAABFg");
	this.shape_1.setTransform(-59.8,150.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],2.2,-3.2,2.2,3.1).s().p("AooAfIAAg9IRQAAIAAA9g");
	this.shape_2.setTransform(3,151.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],2.2,-3.1,2.2,3.1).s().p("AooAgIAAg/IRQAAIAAA/g");
	this.shape_3.setTransform(3,163.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-59.1,-3.5,-59.1,3.4).s().p("AgBAjIAAhFIADAAIAABFg");
	this.shape_4.setTransform(65.1,163.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-59.8,-3.5,-59.8,3.4).s().p("AgEAjIAAhFIAJAAIAAAsIAAAZg");
	this.shape_5.setTransform(77.8,162.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-59.1,-3.5,-59.1,3.4).s().p("AgBAjIAAhFIADAAIAABFg");
	this.shape_6.setTransform(65.1,150);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-59.8,-3.5,-59.8,3.4).s().p("AgEAjIAAhFIAJAAIAABFg");
	this.shape_7.setTransform(77.8,150.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-60.4,-3.5,-60.4,3.4).s().p("AAAAjIAAhFIABAAIAABFg");
	this.shape_8.setTransform(78.4,172.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-60.4,-3.5,-60.4,3.4).s().p("AAAAjIAAgsIAAgZIABAAIAABFg");
	this.shape_9.setTransform(78.4,160.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-98,-5.4,-98,5.4).s().p("AgtA2IAAhrIBbAAIAABrg");
	this.shape_10.setTransform(140.1,182.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-98,-5.4,-98,5.4).s().p("AgtA2IAAhrIBbAAIAABrg");
	this.shape_11.setTransform(140.1,164.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AgOAuQgGgCgFgFIgFgGQgCgDgBgFIgCgJIgBgNIAAAAQAAgGACgNIADgJIAFgIIAFgGIAIgFIAIgDIAJgBQAGAAAKADQAHADAHAFIgMAQQgEgEgFgCQgEgCgGAAQgDAAgFADQgDABgCAEIgEAHIgBAHQAEgDAFgBQAFgCAFAAQAHAAAGACQAGACAFAEQAEAEADAEQACAGAAAHQAAAHgCAHQgEAFgEAFQgFAEgGACQgIADgHAAQgKgBgFgCgAgGAEIgFADIgDAEIgBAGIAAAAIABAGQABACADACIAEADIAHABIAGgBIAFgDIAEgEIABgGIAAAAIgBgGQgCgCgCgCIgFgDIgHgBIgGABg");
	this.shape_12.setTransform(20.1,166.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AAAAwIAAhKIgPAFIgFgSIAbgIIAOAAIAABfg");
	this.shape_13.setTransform(12.4,166.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AgjAvIAAhdIBGAAIAAASIgxAAIAAAUIArAAIAAARIgrAAIAAAUIAyAAIAAASg");
	this.shape_14.setTransform(1.7,166.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AAYAvIgtg7IAAA7IgUAAIAAhdIATAAIArA5IAAg5IAVAAIAABdg");
	this.shape_15.setTransform(-8.3,166.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AgQAuIgIgEIgGgEIgEgHIgEgHIgCgIIAAgKIAAg1IAUAAIAAA0QAAAHACADQABAFADADQACADAFACQADABAEAAQAFAAAEgBQADgCADgDQACgDACgEIABgKIAAg1IAVAAIAAA0IgBAKIgCAJIgDAHIgFAHIgGAEIgHAEQgLACgGAAQgMgBgEgBg");
	this.shape_16.setTransform(-18.7,166.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C3D0DE").s().p("AgLAvIgIgEQgFgCgHgIIANgOQAEAFAEACQAEADAFAAIAFgBQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBIADgFIABgHIAAg8IAVAAIAAA9QAAAIgCAHQgCAGgFAEQgEAEgGADQgHACgHAAIgKgBg");
	this.shape_17.setTransform(-28,166.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C3D0DE").s().p("AgDAcIgHgCIgGgCIgFgEIAHgJQAEADAEACIAEABIAEABQADAAACgCQABAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAgBgBQgBgBgHgCIgHgCIgGgDIgEgEQgBgDAAgEIAAAAQAAgEABgDQACgDADgCQACgDAEgBIAHgBIAGABIAFABIAFACIAFADIgHAJIgIgEIgGgBQgDAAgCABQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAABABQAAABAAAAQAAABABAAQAAABABAAIAJADIAHADIAFACIAEAFIABAGQAAAEgBAEIgFAFIgGADQgEACgFAAIgEgBg");
	this.shape_18.setTransform(21.4,154);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C3D0DE").s().p("AgUAcIAAg3IApAAIAAALIgdAAIAAALIAZAAIAAALIgZAAIAAALIAdAAIAAALg");
	this.shape_19.setTransform(16.3,154);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C3D0DE").s().p("AAKAcIgLgSIgKAAIAAASIgMAAIAAg3IAYAAIAKABQAEACADADQACACABADQACADAAAFIAAAAIgBAGIgDAEIgEAEIgEACIANAUgAgLAAIAMAAIAEAAIADgCIABgDIABgDIAAAAIgBgDIgCgDIgDgBIgEgBIgLAAg");
	this.shape_20.setTransform(10.9,154);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C3D0DE").s().p("AgFAcIAAgsIgRAAIAAgLIAtAAIAAALIgRAAIAAAsg");
	this.shape_21.setTransform(5.2,154);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C3D0DE").s().p("AARAcIgFgMIgXAAIgFAMIgNAAIAYg3IAKAAIAYA3gAAIAFIgIgRIgGARIAOAAg");
	this.shape_22.setTransform(0.2,154);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C3D0DE").s().p("AgUAcIAAg3IApAAIAAALIgdAAIAAALIAZAAIAAALIgZAAIAAALIAdAAIAAALg");
	this.shape_23.setTransform(-5.5,154);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C3D0DE").s().p("AALAcIAAgWIgVAAIAAAWIgNAAIAAg3IANAAIAAAWIAVAAIAAgWIANAAIAAA3g");
	this.shape_24.setTransform(-11.3,154);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C3D0DE").s().p("AgFAcIAAgsIgRAAIAAgLIAtAAIAAALIgRAAIAAAsg");
	this.shape_25.setTransform(-16.9,154);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C3D0DE").s().p("AAOAcIgagjIAAAjIgMAAIAAg3IALAAIAZAiIAAgiIANAAIAAA3g");
	this.shape_26.setTransform(-25,154);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C3D0DE").s().p("AgFAcIAAg3IALAAIAAA3g");
	this.shape_27.setTransform(-29.5,154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,146.6,205.8,41.6);


(lib.copyright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C3D0DE").s().p("AgMAWIAAgqIAMAAIAAAIIABgDIADgEIAEgBQACgBADAAIAAANIgBAAIgFABIgFADIgCAEIAAAGIAAAQg");
	this.shape.setTransform(82.1,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AgKAVIgFgCIgDgEIgBgGIABgGIAEgEIAFgCIAHgBIAKACIAAgBIgBgDIgBgDIgDgBIgDgBIgHABIgFACIgDgKIAHgCIAIgBQAFAAAEABQAEABACADQACACABAEQACADAAAEIAAAYIgMAAIAAgEIgGAEQgCABgEAAIgGgBgAgFAEQgCABAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACACADAAIACgBIADgBIACgDIABgDIAAgCQgDgCgFAAQgDAAgCACg");
	this.shape_1.setTransform(77.8,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AAJAVIgJgNIgIANIgMAAIAOgVIgOgUIANAAIAHAMIAIgMIANAAIgOAUIAOAVg");
	this.shape_2.setTransform(73.3,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgFAdIAAgqIALAAIAAAqgAgFgRIAAgLIALAAIAAALg");
	this.shape_3.setTransform(69.8,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgVAcIAAg3IAWAAQAFAAAEACIAHADIAEAHQABADAAAFIAAAEIgBADIgFAGQgDACgFACIgIABIgJAAIAAARgAgJAAIAJAAIAEAAIADgBIACgDIABgDIAAAAIgBgEIgCgDIgDgBIgEgBIgJAAg");
	this.shape_4.setTransform(66.1,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgWAlIAihJIALAAIgjBJg");
	this.shape_5.setTransform(61.1,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgNAbIgFgCIAEgIIAFABIADgBIACgCIgSgqIAOAAIAJAcIAJgcIAMAAIgQArIgDAGIgDADIgDACIgEABIgGgBg");
	this.shape_6.setTransform(57.3,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgHAVQgDgCgEgDQgDgDgBgEIgBgEIgBgFIAAAAQAAgEACgEQABgEADgDQADgDADgCIAEgBIAEAAIAFAAIAEABIAEADIADADQACADABAEQACAEAAAEIAAADIgdAAIABAEIACACIAEACIACAAIAGgBIAFgDIAHAGIgDAEIgFACIgEACIgGAAIgIgBgAAJgDIgBgDIgCgDIgDgCIgDgBIgCABIgDACIgCADIgBADIARAAIAAAAg");
	this.shape_7.setTransform(52.6,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AAHAWIAAgXIAAgEIgCgDIgBgBIgEgBIgCABIgCABIgCADIAAAEIAAAXIgNAAIAAgqIANAAIAAAGIAEgFIADgBIAEgBIAHABIAEADIADAFIABAHIAAAbg");
	this.shape_8.setTransform(47.7,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AgIAVIgJgFIAGgIQADACAEABIAFACIAEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBIgEgCIgJgEIgDgCIgBgGIABgFIAEgFIAEgCIAGgBIAIABQAEABAEADIgFAIIgGgDIgGgBIgCABQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQABABABAAIAEACIAFACIAEACIADADQABACABADQgBAEgBACIgEAFIgEACIgHABIgJgBg");
	this.shape_9.setTransform(43.2,6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AgFAdIAAgqIALAAIAAAqgAgGgRIAAgLIANAAIAAALg");
	this.shape_10.setTransform(40,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AgZAcIAAg3IAWAAIAGABIAFABIAFACIAEAEIAEAEIADAFIABAFIABAFIgBAFIgBAGIgDAFIgEAEIgEADIgFADIgFACIgGAAgAgMARIAJAAQADAAADgCIAFgDIAEgFQABgDAAgEIgBgGIgEgFQgCgCgDgCQgDgBgDAAIgJAAg");
	this.shape_11.setTransform(35.8,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AgSAcIAZgsIgaAAIAAgLIAnAAIAAAKIgYAtg");
	this.shape_12.setTransform(27.8,5.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AAAAcIAAgrIgJADIgCgKIAPgFIAIAAIAAA3g");
	this.shape_13.setTransform(23.3,5.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AgEAdIgFgCIgFgDIgDgDIgDgEIgCgFIgBgGIgBgGIABgFIABgGIACgEIADgFIAEgDIAEgCIAFgCIAEgBIAFABIAFACIAEACIAEADIADAFIACAEIABAGIABAFIgBAGIgBAGIgCAFIgDAEIgEADIgEADIgFACIgFAAIgEAAgAgEgPIgEADQgCACAAAEIgBAGIABAHQAAADACADIAEAEQACABACAAIAFgBIAEgEIACgGIABgHIgBgGIgCgGIgEgDQgCgCgDAAIgEACg");
	this.shape_14.setTransform(19,5.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AgUAcIAAgKIATgOIAGgGIACgEIAAgDQAAgDgCgDQgCgBgDAAQgCAAgDABQgCACgDAEIgJgHIAEgEIAFgFIAFgCIAGAAQAEAAAEABQADABADADQACABACAEQABADAAAEIgBAHIgDADIgEAGIgHAFIgIAHIAYAAIAAAKg");
	this.shape_15.setTransform(13.6,5.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AgFAdIgFgCIgFgDIgFgDIgDgFIgDgEIgBgGIgBgGIABgFIABgFIADgFIADgFIAFgDIAFgCIAFgCIAFgBIAGABIAFACIAFACIAFADIADAFIADAEIABAGIABAFIgBAGIgBAFIgDAFIgEAFIgEADIgFADIgFACIgGAAIgFAAgAgEgYIgFABIgFACIgDAEIgDADIgDAFIgBAFIgBAEIABAFIABAFIADAEIADAFIADACIAFACIAFACIAEABIAFgBIAFgCIAEgCIAEgDIADgEIADgEIABgFIABgFIgBgFIgBgEIgDgFIgDgDIgEgEIgEgCIgFgBIgFAAIgEAAgAgFAOIgFgDQgCgCgBgDIgBgGIAAAAIABgGIADgFQACgCADgBQADgCADABQAEgBADACIAFADIgFAFIgDgCIgEgBIgDABIgDACIgCADIAAADIAAADIACADIADADIADAAIAEgBIADgDIAFAFQgDADgCABQgEABgEAAIgFgBg");
	this.shape_16.setTransform(5.4,5.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAWIAAgqIAMAAIAAAIIABgDIADgEIAEgBQACgBADAAIAAANIgBAAIgFABIgFADIgCAEIAAAGIAAAQg");
	this.shape_17.setTransform(82.1,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAVIgFgCIgDgEIgBgGIABgGIAEgEIAFgCIAHgBIAKACIAAgBIgBgDIgBgDIgDgBIgDgBIgHABIgFACIgDgKIAHgCIAIgBQAFAAAEABQAEABACADQACACABAEQACADAAAEIAAAYIgMAAIAAgEIgGAEQgCABgEAAIgGgBgAgFAEQgCABAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACACADAAIACgBIADgBIACgDIABgDIAAgCQgDgCgFAAQgDAAgCACg");
	this.shape_18.setTransform(77.8,6.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAJAVIgJgNIgIANIgMAAIAOgVIgOgUIANAAIAHAMIAIgMIANAAIgOAUIAOAVg");
	this.shape_19.setTransform(73.3,6.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAdIAAgqIALAAIAAAqgAgFgRIAAgLIALAAIAAALg");
	this.shape_20.setTransform(69.8,5.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAcIAAg3IAWAAQAFAAAEACIAHADIAEAHQABADAAAFIAAAEIgBADIgFAGQgDACgFACIgIABIgJAAIAAARgAgJAAIAJAAIAEAAIADgBIACgDIABgDIAAAAIgBgEIgCgDIgDgBIgEgBIgJAAg");
	this.shape_21.setTransform(66.1,5.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWAlIAihJIALAAIgjBJg");
	this.shape_22.setTransform(61.1,5.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNAbIgFgCIAEgIIAFABIADgBIACgCIgSgqIAOAAIAJAcIAJgcIAMAAIgQArIgDAGIgDADIgDACIgEABIgGgBg");
	this.shape_23.setTransform(57.3,6.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAVQgDgCgEgDQgDgDgBgEIgBgEIgBgFIAAAAQAAgEACgEQABgEADgDQADgDADgCIAEgBIAEAAIAFAAIAEABIAEADIADADQACADABAEQACAEAAAEIAAADIgdAAIABAEIACACIAEACIACAAIAGgBIAFgDIAHAGIgDAEIgFACIgEACIgGAAIgIgBgAAJgDIgBgDIgCgDIgDgCIgDgBIgCABIgDACIgCADIgBADIARAAIAAAAg");
	this.shape_24.setTransform(52.6,6.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAHAWIAAgXIAAgEIgCgDIgBgBIgEgBIgCABIgCABIgCADIAAAEIAAAXIgNAAIAAgqIANAAIAAAGIAEgFIADgBIAEgBIAHABIAEADIADAFIABAHIAAAbg");
	this.shape_25.setTransform(47.7,6.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIAVIgJgFIAGgIQADACAEABIAFACIAEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBAAgBgBIgEgCIgJgEIgDgCIgBgGIABgFIAEgFIAEgCIAGgBIAIABQAEABAEADIgFAIIgGgDIgGgBIgCABQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQABABABAAIAEACIAFACIAEACIADADQABACABADQgBAEgBACIgEAFIgEACIgHABIgJgBg");
	this.shape_26.setTransform(43.2,6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAdIAAgqIALAAIAAAqgAgGgRIAAgLIANAAIAAALg");
	this.shape_27.setTransform(40,5.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAcIAAg3IAWAAIAGABIAFABIAFACIAEAEIAEAEIADAFIABAFIABAFIgBAFIgBAGIgDAFIgEAEIgEADIgFADIgFACIgGAAgAgMARIAJAAQADAAADgCIAFgDIAEgFQABgDAAgEIgBgGIgEgFQgCgCgDgCQgDgBgDAAIgJAAg");
	this.shape_28.setTransform(35.8,5.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAcIAZgsIgaAAIAAgLIAnAAIAAAKIgYAtg");
	this.shape_29.setTransform(27.8,5.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAAAcIAAgrIgJADIgCgKIAPgFIAIAAIAAA3g");
	this.shape_30.setTransform(23.3,5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEAdIgFgCIgFgDIgDgDIgDgEIgCgFIgBgGIgBgGIABgFIABgGIACgEIADgFIAEgDIAEgCIAFgCIAEgBIAFABIAFACIAEACIAEADIADAFIACAEIABAGIABAFIgBAGIgBAGIgCAFIgDAEIgEADIgEADIgFACIgFAAIgEAAgAgEgPIgEADQgCACAAAEIgBAGIABAHQAAADACADIAEAEQACABACAAIAFgBIAEgEIACgGIABgHIgBgGIgCgGIgEgDQgCgCgDAAIgEACg");
	this.shape_31.setTransform(19,5.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAcIAAgKIATgOIAGgGIACgEIAAgDQAAgDgCgDQgCgBgDAAQgCAAgDABQgCACgDAEIgJgHIAEgEIAFgFIAFgCIAGAAQAEAAAEABQADABADADQACABACAEQABADAAAEIgBAHIgDADIgEAGIgHAFIgIAHIAYAAIAAAKg");
	this.shape_32.setTransform(13.6,5.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAdIgFgCIgFgDIgFgDIgDgFIgDgEIgBgGIgBgGIABgFIABgFIADgFIADgFIAFgDIAFgCIAFgCIAFgBIAGABIAFACIAFACIAFADIADAFIADAEIABAGIABAFIgBAGIgBAFIgDAFIgEAFIgEADIgFADIgFACIgGAAIgFAAgAgEgYIgFABIgFACIgDAEIgDADIgDAFIgBAFIgBAEIABAFIABAFIADAEIADAFIADACIAFACIAFACIAEABIAFgBIAFgCIAEgCIAEgDIADgEIADgEIABgFIABgFIgBgFIgBgEIgDgFIgDgDIgEgEIgEgCIgFgBIgFAAIgEAAgAgFAOIgFgDQgCgCgBgDIgBgGIAAAAIABgGIADgFQACgCADgBQADgCADABQAEgBADACIAFADIgFAFIgDgCIgEgBIgDABIgDACIgCADIAAADIAAADIACADIADADIADAAIAEgBIADgDIAFAFQgDADgCABQgEABgEAAIgFgBg");
	this.shape_33.setTransform(5.4,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},114).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.6,12);


(lib.blacky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgX5AvWMAAAherMAvzAAAMAAABerg");
	this.shape.setTransform(153,303);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blacky, new cjs.Rectangle(0,0,306,606), null);


// stage content:
(lib._160x600_cars_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.9,592.4,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192).to({startPosition:192},0).to({alpha:0,startPosition:202},10).to({_off:true},1).wait(39));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.9,410.5,0.133,0.133,0,0,0,63.9,18.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(226).to({_off:false},0).wait(1).to({regX:63.5,regY:18.5,scaleX:0.23,scaleY:0.23,x:79.8,y:410.4},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:79.7,y:410.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:79.6},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:79.5,y:410.2},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({regX:63.6,regY:18.6,scaleX:0.96,scaleY:0.96,x:79.9,y:410.5},0).wait(4));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,61);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).to({alpha:1},13).wait(25));

	// Layer 8
	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,149,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(80,149,0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.19,scaleY:0.19,x:79.9,y:148.9},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:79.8,y:148.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:79.7,y:148.7},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:79.6,y:148.6},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).to({_off:true},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).wait(78).to({startPosition:0},0).to({alpha:0},10).wait(40));

	// Layer 7
	this.instance_5 = new lib.Tween14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.5,225.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.5,225.5,0.8,0.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.19,scaleY:0.19,x:80.4,y:225.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:80.3,y:225.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:80.2,y:225.2},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:80.1,y:225.1},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).wait(74).to({startPosition:0},0).to({alpha:0},10).wait(40));

	// Layer 9
	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,331.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,331.5,0.8,0.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(111).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.19,scaleY:0.19,x:79.9,y:331.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:79.8,y:331.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:79.7,y:331.2},0).wait(1).to({scaleX:0.67,scaleY:0.67},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:79.6,y:331.1},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).wait(70).to({startPosition:0},0).to({alpha:0},10).wait(40));

	// Layer 10
	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,454.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween19("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(80,451.7,0.8,0.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.19,scaleY:0.19,x:79.9,y:454.1},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:79.8,y:453.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:79.7,y:452.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:451.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:79.6,y:451.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:451.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:451.4},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:451.3},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(126).to({_off:false},0).wait(66).to({startPosition:0},0).to({alpha:0},10).wait(40));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.7,276.8,1.344,1.344,0,0,0,46.9,13.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({alpha:1},12).wait(83).to({alpha:0},10).wait(40));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(140.1,38.5,0.9,0.9,0,0,0,119.4,17.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(97).to({_off:false},0).to({alpha:1},12).wait(83).to({alpha:0},10).wait(40));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(82.8,254,0.121,0.121,0,0,0,72.5,63);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:71.4,regY:62.6,scaleX:0.13,scaleY:0.13,x:82.6,y:253.9,alpha:0.007},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:82.5,alpha:0.033},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:82.3,y:253.8,alpha:0.097},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:81.7,alpha:0.259},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:80.7,y:253.7,alpha:0.529},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:80.2,alpha:0.692},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:79.8,y:253.6,alpha:0.789},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:79.6,alpha:0.853},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:79.4,alpha:0.899},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:79.3,alpha:0.932},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:79.2,alpha:0.956},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.974},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:79.1,alpha:0.986},0).wait(1).to({scaleX:0.81,scaleY:0.81,alpha:0.994},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:79,alpha:0.999},0).wait(1).to({regX:72.7,scaleX:0.82,scaleY:0.82,x:80,y:253.9,alpha:1},0).to({regX:72.8,scaleX:0.99,scaleY:0.99,x:81.4},66).wait(1).to({regX:71.4,scaleX:1.05,scaleY:1.05,x:80,alpha:0.988},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:79.7,y:253.8,alpha:0.938},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:78.8,alpha:0.776},0).wait(1).to({scaleX:4.4,scaleY:4.4,x:76.4,alpha:0.333},0).wait(1).to({scaleX:5.36,scaleY:5.36,x:75.4,y:253.7,alpha:0.147},0).wait(1).to({scaleX:5.77,scaleY:5.77,x:74.9,alpha:0.066},0).wait(1).to({scaleX:5.98,scaleY:5.98,x:74.7,alpha:0.025},0).wait(1).to({scaleX:6.08,scaleY:6.08,x:74.6,alpha:0.005},0).wait(1).to({regX:72.7,scaleX:6.11,scaleY:6.11,x:82.8,y:254.2,alpha:0},0).to({_off:true},1).wait(150));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(297.8,49.9,2.1,2.1,0,0,0,99,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({alpha:1},14).wait(59).to({alpha:0},4).wait(155));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({alpha:0},5).wait(150));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(80.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.1,298.1,306,606);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_cars_en_atlas_P_.png", id:"160x600_cars_en_atlas_P_"},
		{src:"images/160x600_cars_en_atlas_NP_.jpg", id:"160x600_cars_en_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;