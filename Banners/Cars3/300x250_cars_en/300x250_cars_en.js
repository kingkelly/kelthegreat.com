(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_cars_en_atlas_P_", frames: [[234,320,88,59],[234,252,112,66],[0,0,388,250],[125,252,107,95],[0,252,123,116]]},
		{name:"300x250_cars_en_atlas_NP_", frames: [[0,0,300,250],[0,252,267,230]]}
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
	this.spriteSheet = ss["300x250_cars_en_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["300x250_cars_en_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carbg = function() {
	this.spriteSheet = ss["300x250_cars_en_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["300x250_cars_en_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CT_Kids = function() {
	this.spriteSheet = ss["300x250_cars_en_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lego = function() {
	this.spriteSheet = ss["300x250_cars_en_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["300x250_cars_en_atlas_P_"];
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


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carbg();
	this.instance.parent = this;
	this.instance.setTransform(-56,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-33,112,66);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.carbg();
	this.instance.parent = this;
	this.instance.setTransform(-56,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-33,112,66);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lego();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-47.5,107,95);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lego();
	this.instance.parent = this;
	this.instance.setTransform(-53.5,-47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-47.5,107,95);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blackcar();
	this.instance.parent = this;
	this.instance.setTransform(-44,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-29.5,88,59);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blackcar();
	this.instance.parent = this;
	this.instance.setTransform(-44,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-29.5,88,59);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trike();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-58,123,116);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trike();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-58,123,116);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA1IgYhDIgXBDIgUAAIgkhoIAZAAIAWBGIAXhHIATAAIAYBHIAVhGIAZAAIgkBog");
	this.shape.setTransform(100.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgGIgHgJIgFgJIgDgKIgBgKIAAgBIABgKIADgKIAFgKIAHgIIAIgGIAKgFIAKgDIALgBQAGAAAGABIALADIAJAFIAIAGIAHAIIAFAJIADALIABAKIAAAAIgBALIgDAKIgFAJIgHAJIgIAGIgKAFIgKADIgMACQgFAAgGgCgAgMgeQgGADgEAEQgEAFgCAGQgDAGAAAGIAAAAQAAAHADAGQACAFAEAFQAFAFAFACQAGADAGAAQAHAAAGgDQAGgCAEgFQAEgEACgGQADgGAAgGIAAgBQAAgFgDgHQgCgGgEgEQgFgFgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_1.setTransform(86,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA0IgyhBIAABBIgXAAIAAhnIAWAAIAwA/IAAg/IAXAAIAABng");
	this.shape_2.setTransform(73.7,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA0IAAhnIArAAQAJgBAIADQAGADAGAFQAFAEADAHQACAHAAAIIAAAJIgDAGQgDAHgGAFQgFAEgIADQgIACgIAAIgRAAIAAAfgAgRABIARAAIAIgBIAFgDQADgCABgDQABgDABgDIAAgBQgBgEgBgDIgEgEQgCgDgDgBIgIgBIgRAAg");
	this.shape_3.setTransform(58.7,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgGIgHgJIgFgJIgDgKIgBgKIAAgBIABgKIADgKIAFgKIAHgIIAIgGIAKgFIAKgDIALgBQAGAAAGABIALADIAJAFIAIAGIAHAIIAFAJIADALIABAKIAAAAIgBALIgDAKIgFAJIgHAJIgIAGIgKAFIgKADIgMACQgFAAgGgCgAgMgeQgGADgEAEQgEAFgCAGQgDAGAAAGIAAAAQAAAHADAGQACAFAEAFQAFAFAFACQAGADAGAAQAHAAAGgDQAGgCAEgFQAEgEACgGQADgGAAgGIAAgBQAAgFgDgHQgCgGgEgEQgFgFgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_4.setTransform(46.9,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA0IAAgpIgqAAIAAApIgWAAIAAhnIAWAAIAAApIAqAAIAAgpIAYAAIAABng");
	this.shape_5.setTransform(34.9,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA1IgLgDIgMgFQgFgDgFgFIAOgQQAHAGAIADIAHACIAIABQAHAAAFgCQADgDABgFQgBgEgDgDQgFgDgLgDIgPgFIgLgFQgEgDgDgFQgDgGABgHIAAgBQAAgGACgGQADgGAFgEQAFgFAGgBQAHgDAIAAIAKABIAKACIAKAEIAIAGIgLASQgIgGgHgCQgGgDgGABQgHgBgDADQgEADAAAEIAAAAQAAAFAFADQAFACAMADIAOAFQAHADAEADQAEADACAGQACAFABAGIAAAAQgBAIgDAHQgCAFgGAFQgEAEgHACQgIACgIAAIgLgBg");
	this.shape_6.setTransform(24.3,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("Ap6C5IAAlxIT1AAIAAFxg");
	this.shape_7.setTransform(63.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,37);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT_Kids();
	this.instance.parent = this;
	this.instance.setTransform(-3,-31,0.503,0.503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-3,-31,195.3,125.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BGgradient();
	this.instance.parent = this;
	this.instance.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(3,3,300,250), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AryqCIAAgJIAZAAIAAAJIWoAAIAAgUIAlAAIAAUFIAEAAIAAAeIgEAAIAAAKIglAAIAAgKArypeIgFAAIAAgkIAFAAArZKNIgZAAIAAzrIAAgkArZJvIAAAeALPJvIAlAAAL0KNIglAAI2oAAArZpeIAATNIWoAAIAAzNgArZqCIAAAkALPpeIAAgk");
	this.shape.setTransform(73.1,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ALPKXIAAgKIAlAAIAAAKgAL0KNIglAAI2oAAIAAgeIAAAeIgZAAIAAzrIAAgkIAAgJIAZAAIAAAJIWoAAIAAgUIAlAAIAAUFIglAAIAAzNI2oAAIAAgkIAAAkIAATNIWoAAIAlAAIAEAAIAAAegALPpeIAAgkgALPJvgAr3peIAAgkIAFAAIAAAkg");
	this.shape_1.setTransform(73.1,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Cars3Logo_1080();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-3.9,-5.9,154,134.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBGIAAhvIgrAAIAAgcIBzAAIAAAcIgrAAIAABvg");
	this.shape.setTransform(84.3,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAqBHIgNggIg6AAIgNAgIgfAAIA8iNIAbAAIA8CNgAASAMIgSgtIgSAtIAkAAg");
	this.shape_1.setTransform(71.7,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAgBHIgghbIgfBbIgaAAIgwiMIAhAAIAdBeIAfhfIAaAAIAfBfIAdheIAgAAIgwCMg");
	this.shape_2.setTransform(46.6,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPBHIgOgEIgNgHIgKgJIgJgLIgHgLIgEgOQgCgHAAgHIAAgBQAAgGACgIIAEgNIAHgNIAJgKIAKgJQAGgEAHgDQAHgDAIgBQAHgBAHAAIAQABIAOAEQAGADAGAEQAGAEAGAEIAJALIAGANIAEANQABAHAAAHIAAAAQAAAIgBAGIgEAOIgHAMIgIALIgMAJQgFAEgHACQgHADgIACQgHABgIABIgPgCgAgQgoQgIAEgGAGQgFAGgDAIQgDAHAAAJIAAAAQAAAJADAIQADAIAFAGQAHAGAHADQAIAEAIAAQAKAAAHgEQAIgDAFgGQAGgGADgHQADgJAAgIIAAgBQAAgIgDgIQgDgIgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(27.7,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkBGIhDhYIAABYIgeAAIAAiLIAcAAIBBBVIAAhVIAeAAIAACLg");
	this.shape_4.setTransform(11.3,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(1.3,0,91.5,24), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgRBQQgJgCgIgEQgHgEgHgFQgGgFgFgGIAYgYQAJALAIAEQAKAFALAAQAKAAAGgFQAHgGAAgJIAAAAQAAgFgDgEQgCgEgEgCQgEgCgGgCQgGgCgGABIgPAAIgFgWIAlgnIg+AAIAAgeIBsAAIAAAbIgpAmQAJACAHADQAIADAGAFQAGAFAEAIQADAIAAAKIAAABQAAALgEAKQgEAKgHAHQgIAHgLAEQgKAEgOAAQgJAAgKgCg");
	this.shape.setTransform(242.2,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgMBRQgKgBgIgDIgRgIQgJgFgHgHIAVgZQAMAKALAEIAMAEQAGACAGAAQALAAAHgEQAFgEABgHIAAgBQgBgHgFgEQgIgEgSgFQgNgEgJgDQgKgEgHgFQgHgFgEgIQgEgIAAgMIAAAAQABgLAEgJQAEgJAIgGQAHgHALgDQAKgEAMAAIAQACIAQAEQAHACAHAEIANAJIgSAbQgMgIgJgEQgLgEgKAAQgJAAgGAEQgFAEAAAGIAAAAQAAAIAHAEQAHAEAUAFQANAEAIAEQAKAEAGAEQAHAGADAHQADAIAAALIAAAAQAAAMgDAJQgFAKgIAGQgIAGgKAEQgLADgNAAIgRgCg");
	this.shape_1.setTransform(220.9,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AAcBQIgigzIgbAAIAAAzIgkAAIAAigIBJAAQAKAAARAFQAMAEAIAIQAGAHAEAJQADAJAAALIAAABQAAAJgCAJQgCAHgFAGQgEAGgHAFQgGAEgIADIAoA5gAghgBIAiAAQAHgBAFgBQAFgCADgDQAEgCACgFQACgEAAgFIAAgBQAAgFgCgFQgCgEgEgDQgDgCgGgCQgEgCgHABIgiAAg");
	this.shape_2.setTransform(206,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("AAwBRIgOgkIhDAAIgPAkIgkAAIBFihIAfAAIBFChgAAVANIgVgzIgVAzIAqAAg");
	this.shape_3.setTransform(188,34.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("AgIBRQgIgBgIgDQgHgDgGgFQgIgEgFgGQgGgGgEgGQgEgHgDgHQgDgIgCgIQgBgIAAgJIAAAAQAAgIABgIQACgIADgIIAHgOIAKgMQAFgGAIgEQAGgFAHgDQAJgDAIgCQAHgBAJAAQAMAAAJABQAJACAIADQALAFAPANIgWAaQgLgJgIgEQgLgFgMAAQgJAAgJAEQgIAEgGAHQgHAHgDAJQgDAJAAAKIAAAAQAAAKADAJQAEAJAFAHQAHAIAIADQAJAEAJAAQAKAAAOgFQAIgEALgJIAWAWIgMAMQgIAGgIADQgHAEgKACQgJACgMAAQgIAAgIgCg");
	this.shape_4.setTransform(170.6,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AgXA8QgSgJgIgGIAPgXQAKAIAKADQAKAEAHAAQAIAAAEgDQADgCABgFIAAAAQAAgFgIgDIgRgGQgSgGgHgGQgGgDgDgGQgDgHAAgIIAAAAQAAgKADgHQAEgHAGgGQAHgFAIgCQAIgCAJgBQALABAMADQAMAEAKAHIgNAYQgJgFgJgDQgJgEgGAAQgGAAgDACQgEADAAAEQAAAFAIADIAQAHIAOAFQAHADAFAEQAGADADAGQADAGAAAJIAAAAQAAAKgDAIQgEAHgGAFQgHAFgJACQgIACgKAAQgMAAgOgDg");
	this.shape_5.setTransform(149.2,36.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AgVAlIAFhJIAmAAIAAABIgYBIg");
	this.shape_6.setTransform(140.5,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("AgkA/IAAh7IAjAAIAAAZIAFgLQAEgFAEgEQAFgEAGgBQAHgCAHAAIAAAlIgCAAQgIAAgHACQgHADgFAFQgFAGgDAIQgBAHAAALIAAAug");
	this.shape_7.setTransform(132.7,36.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AgeA9QgHgCgGgFQgGgFgEgHQgCgHAAgJIAAgBQAAgJADgIQADgHAHgEQAGgFAKgDQAJgCALAAQAMAAARAFIAAgCQAAgFgBgFQgCgEgEgDQgDgDgFgBQgFgCgFAAQgKAAgIACIgRAFIgIgbQALgEAKgDQAMgCANAAQAOAAALADQAKAEAIAGQAGAHADAKQADAKAAANIAABGIghAAIAAgNQgHAHgJAEQgIAEgMAAQgJAAgIgCgAgQALQgGAFAAAIIAAAAQAAAHAFAEQAGAEAIAAQAGAAAEgBQAFgCAEgDIAGgGQACgEAAgFIAAgGQgLgFgMAAQgKAAgHAEg");
	this.shape_8.setTransform(120.3,36.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AAYA+IgYgnIgYAnIglAAIArg+Igpg9IAlAAIAWAlIAXglIAlAAIgqA9IAsA+g");
	this.shape_9.setTransform(107.5,36.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgQBUIAAh6IAhAAIAAB6gAgRg0IAAgfIAjAAIAAAfg");
	this.shape_10.setTransform(97.3,34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("Ag/BQIAAigIBBAAQAOAAAMAFQALAEAIAHQAIAHAEALQAFAKAAAMIAAAAQAAAHgCAHIgEAKQgEAKgKAIQgIAHgMADQgMAEgNAAIgbAAIAAAwgAgcAAIAcAAQAGABAFgBQAFgCAEgEQAEgDACgEQACgEAAgFIAAgBQAAgGgCgFQgCgEgEgDQgEgDgFgCQgGgCgFABIgcAAg");
	this.shape_11.setTransform(86.8,34.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgNAfQgGgCgFgFQgEgFgDgGQgDgGAAgHIAAAAQAAgGADgHQADgGAEgEQAFgFAGgDQAHgCAGAAQAHAAAGACQAGADAGAFQAEAEACAGQAEAHAAAGIAAAAQAAAHgEAGQgCAGgEAFQgGAFgGACQgGADgHAAQgGAAgHgDg");
	this.shape_12.setTransform(72.8,34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("AgoBPIgOgHIAMgaQAIAFAHABQAFAAACgCQADgCACgEIgwh7IAlAAIAbBSIAbhSIAkAAIgvB9QgEAKgEAGQgEAHgEAEQgEADgGADQgGACgIAAQgJAAgIgCg");
	this.shape_13.setTransform(60.1,38.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgVA7QgLgEgJgJQgJgIgFgMIgDgMIgBgOIAAAAQgBgMAFgMQAEgMAJgIQAIgJALgFIAMgEIALgBQAIAAAHABIAMAEQAGADAFAEQAFADADAFQAIAJADAMQADAMAAANIAAAJIhUAAQABAGACAEQADAFAEADQADADAGABQAEACAGAAQAJAAAHgDQAGgDAHgHIAUASIgJAKIgMAHQgGADgHABQgIACgIAAQgRgCgIgDgAAagJQAAgGgCgFIgGgIQgDgEgEgBQgFgCgGAAQgEAAgEACQgEABgEAEQgDADgCAFQgDAFgBAGIAzAAIAAAAg");
	this.shape_14.setTransform(46.7,36.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AAVA/IAAhEQABgGgCgFQgCgFgCgDQgCgDgEgBQgFgCgEAAQgFAAgDACQgFABgDADQgCADgCAFQgCAFAAAGIAABEIgjAAIAAh7IAjAAIAAASQAIgJAHgFQAFgDADgBIAMgCQALAAAHADQAIADAGAGQAFAGADAJQACAIAAALIAABPg");
	this.shape_15.setTransform(32.6,36.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("AgXA8QgSgJgIgGIAPgXQAKAIAKADQAKAEAIAAQAHAAAEgDQAEgCgBgFIAAAAQAAgFgHgDIgRgGQgSgGgHgGQgFgDgDgGQgEgHAAgIIAAAAQAAgKAEgHQADgHAHgGQAFgFAJgCQAIgCAIgBQAMABAMADQAMAEAKAHIgNAYQgJgFgJgDQgJgEgHAAQgEAAgEACQgEADABAEQAAAFAHADIARAHIANAFQAHADAFAEQAFADADAGQAEAGAAAJIAAAAQAAAKgEAIQgDAHgHAFQgGAFgIACQgJACgKAAQgNAAgNgDg");
	this.shape_16.setTransform(19.5,36.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("AgQBUIAAh6IAhAAIAAB6gAgRg0IAAgfIAjAAIAAAfg");
	this.shape_17.setTransform(10.5,34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AhJBQIAAigIA+AAQAKABAIABQAJACAHADQAIADAHAEQAHAEAFAGIAKALQAFAHADAHQADAHACAIQABAIAAAIIAAAAQAAAIgBAIQgCAJgDAHQgDAHgFAGIgKANQgFAFgHAEQgHAEgIADQgHAEgJABQgIACgKgBgAgmAxIAbAAQALAAAJgEQAIgEAGgGQAHgGADgJQAEgJAAgLIAAAAQAAgJgEgKQgDgJgHgGQgGgHgIgDQgJgEgLABIgbAAg");
	this.shape_18.setTransform(-1.6,34.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKBHIgQgFIgPgHIgNgKIASgVQAKAIAJAEIALAEIALABQAJAAAFgEQAGgDAAgHIAAAAQAAgGgGgEQgFgDgQgFIgTgFQgJgEgGgEQgGgEgDgHQgDgIAAgKIAAAAQAAgJADgIQAEgIAGgGQAGgFAKgDQAIgDALAAIAOABIANADIANAGIAMAIIgRAXQgKgHgIgDQgJgEgIAAQgIAAgGAEQgEADAAAFIAAABQAAAHAGADQAGADARAFQALADAIAEQAJADAFAEQAGAFADAGQACAHAAAJIAAABQABAKgEAIQgEAIgHAFQgGAHgKACQgJADgMAAQgHAAgHgBg");
	this.shape_19.setTransform(175.6,11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIBHIgOgEQgHgDgFgEIgLgIIgJgLQgEgFgCgHIgEgOQgCgHAAgHIAAgBQAAgGACgIIAEgNIAGgNIAJgKIALgJQAGgEAGgDIAOgEQAIgBAHAAQAJAAAIABQAIABAGACQAJAEAPALIgUAXQgIgHgIgEQgJgDgLAAQgHAAgIADQgHAEgGAGQgFAGgDAIQgDAIAAAIIAAAAQAAAKADAIQADAIAFAGQAGAGAIADQAIAEAIAAQAIAAAIgDQAHgCAGgEIAAgUIgfAAIAAgZIA9AAIAAA7QgQAMgKAEIgQAFQgJACgJAAQgHgBgIgBg");
	this.shape_20.setTransform(161.4,11);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAkBGIhDhYIAABYIgeAAIAAiLIAcAAIBBBVIAAhVIAeAAIAACLg");
	this.shape_21.setTransform(145.8,11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_22.setTransform(134.5,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcBGIAAg4Ig4AAIAAA4IgeAAIAAiLIAeAAIAAA3IA4AAIAAg3IAfAAIAACLg");
	this.shape_23.setTransform(123.6,11);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPBGIAAhvIgqAAIAAgcIBzAAIAAAcIgrAAIAABvg");
	this.shape_24.setTransform(109.5,11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgxBGIAAiLIAeAAIAABvIBFAAIAAAcg");
	this.shape_25.setTransform(91.4,11);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgxBGIAAiLIAeAAIAABvIBFAAIAAAcg");
	this.shape_26.setTransform(79,11);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAqBHIgNggIg6AAIgNAgIgfAAIA8iNIAbAAIA8CNgAASAMIgSgtIgSAtIAkAAg");
	this.shape_27.setTransform(64.4,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-13,0,264.6,49), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-6,0,6).s().p("AxzA8IAAh3MAjnAAAIAAB3g");
	this.shape.setTransform(106,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AgRA6QgJgDgFgGIgHgIIgEgJIgDgMIgBgRQAAgIADgRIAFgLIAFgJIAHgIIAJgGIALgEIAMAAQAHAAANADQAIADAIAGIgNAVQgGgFgGgCQgGgCgGAAQgGAAgEACQgFADgDAEIgEAJIgCAJQAGgEAFgCQAGgCAHAAQAJAAAIACQAHADAGAFQAGAFADAFQADAIAAAJIAAAAQAAAKgEAHQgDAHgGAGQgGAFgJADQgIADgKABQgNgCgFgCgAgIAFIgFAEQgEACgBADIgBAHIAAAAIABAIQABADAEACQACACAEACIAHABIAJgBQAEgCADgCQACgCABgDQACgEAAgEIAAAAQAAgDgCgEQgBgDgCgCIgHgEIgJgBIgIABg");
	this.shape_1.setTransform(189.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AABA8IAAhdIgUAGIgGgVIAigLIARAAIAAB3g");
	this.shape_2.setTransform(180,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgsA7IAAh2IBYAAIAAAYIg+AAIAAAYIA3AAIAAAWIg3AAIAAAZIA/AAIAAAXg");
	this.shape_3.setTransform(166.5,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AAfA7Ig5hKIAABKIgaAAIAAh2IAYAAIA3BJIAAhJIAaAAIAAB2g");
	this.shape_4.setTransform(153.8,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgVA5IgJgEIgHgGIgGgIQgDgDgBgGQgCgEgBgGIgBgMIAAhEIAaAAIAABDQAAAHACAFQACAGADAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQADgEACgFQACgGAAgGIAAhEIAaAAIAABDIgBAMIgDALIgEAJIgGAIIgIAGIgJAEQgNAEgIAAQgPgCgGgCg");
	this.shape_5.setTransform(140.7,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgOA7QgFgBgFgDQgHgDgJgJIARgTQAFAGAFADQAFADAHAAIAFgBIAGgEQABgCABgEIABgJIAAhLIAbAAIAABNQAAAKgCAIQgDAIgGAFQgFAGgIADQgIACgIAAQgHAAgHgBg");
	this.shape_6.setTransform(129,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgJA8IgNgDIgNgHQgGgDgFgFIAPgTQAJAIAIADIAJADIAJABQAIAAAEgDQAFgDAAgFIAAAAQAAgGgFgCQgEgEgOgDIgQgGQgIgDgFgDQgFgDgDgGQgCgGAAgJIAAAAQAAgJADgGQADgHAFgFQAGgEAIgDQAHgCAJAAIAMABIALACIALAGIAJAGIgNAUQgIgGgIgDQgIgDgGAAQgHAAgEADQgEADAAAFQAAAFAFAEQAFACAOAEIAQAFQAIADAEAEQAFAEADAGQACAFAAAIIAAAAQAAAJgDAHQgDAHgGAEQgGAGgIACQgIACgKAAIgMgBg");
	this.shape_7.setTransform(114.1,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgsA7IAAh2IBYAAIAAAYIg+AAIAAAYIA3AAIAAAWIg3AAIAAAZIA/AAIAAAXg");
	this.shape_8.setTransform(103.4,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AAVA7IgZgmIgUAAIAAAmIgaAAIAAh2IA1AAQAIAAAMADQAJAEAGAFQAFAGACAHQADAGAAAJQAAAHgCAGQgCAGgDADIgIAJQgFADgGACIAdAqgAgYAAIAZAAQAFAAAEgCQADgBADgDQADgBABgEIABgGIAAgBQAAgEgBgDQgBgEgDgCIgHgDIgIgBIgZAAg");
	this.shape_9.setTransform(91.7,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AgMA7IAAhdIgkAAIAAgZIBhAAIAAAZIgkAAIAABdg");
	this.shape_10.setTransform(79.7,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AAkA8IgLgaIgxAAIgLAaIgbAAIAzh3IAXAAIAzB3gAAPAKIgPglIgPAlIAeAAg");
	this.shape_11.setTransform(69,9.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AgsA7IAAh2IBYAAIAAAYIg+AAIAAAYIA3AAIAAAWIg3AAIAAAZIA/AAIAAAXg");
	this.shape_12.setTransform(56.9,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AAYA7IAAgvIgvAAIAAAvIgaAAIAAh2IAaAAIAAAvIAvAAIAAgvIAaAAIAAB2g");
	this.shape_13.setTransform(44.5,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AgMA7IAAhdIgkAAIAAgZIBhAAIAAAZIgkAAIAABdg");
	this.shape_14.setTransform(32.5,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AAfA7Ig5hKIAABKIgaAAIAAh2IAYAAIA3BJIAAhJIAaAAIAAB2g");
	this.shape_15.setTransform(15.2,9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AgMA7IAAh2IAZAAIAAB2g");
	this.shape_16.setTransform(5.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-0.5,228,21.5);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},119).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.6,12);


(lib.blacky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3+UKMAAAgoTMAv9AAAMAAAAoTg");
	this.shape.setTransform(153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blacky, new cjs.Rectangle(0,0,307,258), null);


// stage content:
(lib._300x250_cars_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.8,242,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(197).to({startPosition:197},0).to({alpha:0,startPosition:207},10).to({_off:true},1).wait(34));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,192.6,0.1,0.1,0,0,0,63.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:149.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:149.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:149.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:149.6},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.5},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.6},0).wait(1).to({scaleX:1,scaleY:1,x:149.5},0).wait(1).to({scaleX:1,scaleY:1,x:149.6},0).wait(3));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,61);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(207).to({_off:false},0).to({alpha:1},14).wait(21));

	// Layer 8
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.9,133.7,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(215.5,146,0.85,0.85);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:160.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:161.2,y:133.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:163.7,y:134.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:169.7,y:135.8},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:185.8,y:139.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:198.2,y:141.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:204.3,y:143.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:208,y:144},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:210.4,y:144.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:212.2,y:144.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:213.4,y:145.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:214.2,y:145.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:214.7,y:145.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:215},0).to({_off:true},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(133).to({_off:false},0).wait(64).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 7
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(147.8,136.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(101,169.5,0.85,0.85);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:147.5,y:136.6},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:146.6,y:137.2},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:144.4,y:138.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:139.3,y:142.3},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:125.6,y:151.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:115,y:159.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:109.8,y:162.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:106.6,y:164.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:104.5,y:166.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:103.1,y:167.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:102,y:168.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:101.3,y:168.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:100.9,y:168.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:100.6,y:169},0).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(125).to({_off:false},0).wait(72).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 9
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.2,131.3,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.5,121.5,0.85,0.85);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:153.1,y:131.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,y:130.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:153.2,y:130.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:153.3,y:129.4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:153.6,y:126.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:153.8,y:124.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:153.9,y:123.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:122.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:154,y:121.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:121.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:121.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:154.1,y:121.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:121.1},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(116).to({_off:false},0).wait(81).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 10
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(145.6,133,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(85,138,0.85,0.85);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(92).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:145.2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:144,y:133.1},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:141.2,y:133.3},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:134.6,y:133.8},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:116.9,y:135.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:103.2,y:136.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:96.5,y:136.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:92.4,y:137},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:89.7,y:137.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:87.8,y:137.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:86.5,y:137.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:85.5,y:137.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:85},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:84.7,y:137.6},0).to({_off:true},1).wait(135));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(107).to({_off:false},0).wait(90).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.4,217.3,1,1,0,0,0,47.1,13.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(122).to({_off:false},0).to({alpha:1},10).wait(62).to({alpha:0},10).wait(38));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,38.4,1,1,0,0,0,119.3,17.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(122).to({_off:false},0).to({alpha:1},10).wait(62).to({alpha:0},10).wait(38));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,123,0.1,0.1,0,0,0,72.5,62.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:73.1,regY:61.4,scaleX:0.12,scaleY:0.12,alpha:0.025},0).wait(1).to({scaleX:0.16,scaleY:0.16,alpha:0.064},0).wait(1).to({scaleX:0.21,scaleY:0.21,y:123.2,alpha:0.127},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:123.4,alpha:0.241},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:150.1,y:123.8,alpha:0.444},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:150,y:124.2,alpha:0.628},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:124.4,alpha:0.737},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:150.1,y:124.6,alpha:0.808},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:150,y:124.7,alpha:0.858},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:124.8,alpha:0.896},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.924},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:124.9,alpha:0.946},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.963},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.976},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.985},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:150.1,y:125,alpha:0.992},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:150,alpha:0.997},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:150.1,alpha:0.999},0).wait(1).to({regX:72.5,regY:62.5,scaleX:0.98,scaleY:0.98,x:149.5,y:126.1,alpha:1},0).to({scaleX:1.08,scaleY:1.08,x:149.4,y:126.2},63).wait(1).to({regX:73.1,regY:61.4,scaleX:1.12,scaleY:1.12,x:150.1,y:125,alpha:0.986},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:150.2,y:124.7,alpha:0.93},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:150.6,y:124.1,alpha:0.783},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:151.4,y:122.7,alpha:0.434},0).wait(1).to({scaleX:3.52,scaleY:3.52,x:152.1,y:121.5,alpha:0.166},0).wait(1).to({scaleX:3.84,scaleY:3.84,x:152.3,y:121.1,alpha:0.056},0).wait(1).to({scaleX:3.97,scaleY:3.97,x:152.4,y:120.9,alpha:0.012},0).wait(1).to({regX:72.5,regY:62.4,scaleX:4,scaleY:4,x:150.2,y:125,alpha:0},0).wait(152));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,210.9,1,1,0,0,0,99.1,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off:false},0).to({alpha:1},11).wait(56).to({alpha:0},4).wait(155));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86).to({alpha:0},5).wait(151));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.1,123.1,307,258);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_cars_en_atlas_P_.png", id:"300x250_cars_en_atlas_P_"},
		{src:"images/300x250_cars_en_atlas_NP_.jpg", id:"300x250_cars_en_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;