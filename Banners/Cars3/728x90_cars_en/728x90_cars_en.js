(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_cars_en_atlas_P_", frames: [[223,92,88,59],[109,92,112,66],[0,0,375,90],[0,92,107,95],[377,0,123,116]]},
		{name:"728x90_cars_en_atlas_NP_", frames: [[0,0,728,90],[730,0,267,230]]}
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
	this.spriteSheet = ss["728x90_cars_en_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["728x90_cars_en_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carbg = function() {
	this.spriteSheet = ss["728x90_cars_en_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["728x90_cars_en_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ct_leader = function() {
	this.spriteSheet = ss["728x90_cars_en_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lego = function() {
	this.spriteSheet = ss["728x90_cars_en_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["728x90_cars_en_atlas_P_"];
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

	// Layer 3
	this.instance = new lib.ct_leader();
	this.instance.parent = this;
	this.instance.setTransform(25,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(25,-61,375,90), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BGgradient();
	this.instance.parent = this;
	this.instance.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(3,3,728,90), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.7,1,1).p("AgPqhIAfAAIAAAhIAATJIAAAlIAAA0IgfAAIAAg0IAAglIAAzJg");
	this.shape.setTransform(145.3,64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.9,1,1).p("ALLgRIAmAAIAAAjIgmAAArwgRIWbAAAKrASI2bAA");
	this.shape_1.setTransform(75.4,125.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ArWpcIAATJIAAAkIAAAcIg0AAIAA1ZIA0AAIAAAOIXhAAIAABCIgmAAALFpcI2bAAArWqeIAABC");
	this.shape_2.setTransform(72.8,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ALEK5IAAg0IAAgkIAAzJI2aAAIAAhCIAABCIAATJIAAAkIAAAcIgzAAIAA1ZIAzAAIAAAOIXhAAIAABCIgmAAIAAghIghAAIAhAAIAAAhIAATJIAAAkIAAA0gALEpoIAAghgALlKFIAAgkIAmAAIAAAkgArWKFIAAgkIWaAAIAAAkgArWKFg");
	this.shape_3.setTransform(72.8,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Cars3Logo_1080();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-6,-8.2,157.7,141.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBDIAAhpIgoAAIAAgbIBtAAIAAAbIgpAAIAABpg");
	this.shape.setTransform(561,-158.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAoBDIgMgeIg3AAIgMAeIgfAAIA6iFIAaAAIA5CFgAARAMIgRgrIgRArIAiAAg");
	this.shape_1.setTransform(549.1,-158.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBDIgehWIgdBWIgZAAIguiFIAfAAIAcBZIAehZIAYAAIAeBZIAchZIAeAAIguCFg");
	this.shape_2.setTransform(525.2,-158.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOBEIgOgFQgGgCgFgEQgGgEgFgEIgIgLIgGgLQgDgGgBgHQgCgGAAgIIAAAAIACgNIAEgNIAGgLIAIgKIALgJQAFgEAHgDIANgDIAOgCQAIAAAHACIAOADIAMAHQAFAEAFAFQAFAEADAGIAGALIAEANQACAHAAAGIAAAAIgCAOIgEAMIgGAMIgIALIgLAIIgMAGIgNAFIgPABQgHAAgHgBgAgPglQgIACgFAHQgFAFgDAHQgDAIAAAIIAAAAQAAAIADAIQADAIAFAFQAGAHAHACQAIAEAHAAQAJAAAHgEQAIgCAFgHQAFgFADgIQADgHAAgJIAAAAQAAgIgDgHQgDgIgFgFQgGgHgHgCQgIgEgIAAQgIAAgHAEg");
	this.shape_3.setTransform(507.3,-158.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAjBDIhAhUIAABUIgdAAIAAiEIAbAAIA9BRIAAhRIAdAAIAACEg");
	this.shape_4.setTransform(491.7,-158.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(482.2,-168.8,87.1,23), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgVBjQgLgDgKgEQgJgEgJgHQgHgGgHgIIAegdQALAMALAGQAMAGANAAQANAAAIgGQAIgHAAgLIAAAAQAAgHgDgEQgDgGgFgCQgFgDgHgDQgHgBgIAAIgTAAIgGgbIAugwIhNAAIAAgmICGAAIAAAhIgzAwQALADAJADQAKAEAHAGQAIAHAEAJQAFAKAAAOIAAAAQAAAOgFAMQgFAMgKAJQgJAJgNAEQgOAGgQgBQgMAAgMgCg");
	this.shape.setTransform(316.8,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgQBlQgLgCgLgEQgLgEgKgGQgKgGgJgIIAagfQAOALAOAGIAPAFQAIACAHAAQAOAAAIgFQAHgFAAgJIAAAAQAAgJgHgFQgJgGgXgGIgbgIQgNgFgIgGQgJgGgEgKQgFgKAAgPIAAAAQAAgOAFgLQAFgLAKgIQAJgIANgEQANgFAPAAQAKAAAKACQAKACAJADIASAIIAQALIgXAhQgOgKgMgFQgNgFgMAAQgMAAgHAFQgGAFAAAHIAAABQAAAKAIAFQAIAFAaAGQAQAFALAEQAMAGAHAFQAJAHAEAKQAEAJAAANIAAABQAAAOgFAMQgGALgKAJQgJAHgOAEQgNAFgQAAQgLAAgLgCg");
	this.shape_1.setTransform(290.4,40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AAjBkIgqhAIgiAAIAABAIgsAAIAAjHIBaAAQANAAAVAFQAOAGAKAKQAIAIAFALQAEAMAAAOIAAABQAAAMgDAKQgDAJgGAHQgFAIgIAFQgIAGgKAEIAxBHgAgpgCIArAAQAIAAAGgCQAHgCAEgEQAEgDACgGQADgFAAgGIAAgBQAAgHgDgFQgCgFgFgEQgEgEgGgBQgHgCgIAAIgqAAg");
	this.shape_2.setTransform(272,40.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("AA8BkIgTgtIhTAAIgSAtIgtAAIBWjHIAnAAIBWDHgAAaARIgag/IgaA/IA0AAg");
	this.shape_3.setTransform(249.7,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("AgKBlQgKgCgKgEQgJgEgIgFQgIgGgHgHQgHgHgFgIQgGgIgDgJQgEgKgCgKQgCgKAAgKIAAgBQAAgKACgKQACgKADgJQAEgJAGgJIAMgPQAHgHAIgFQAIgGAKgEIAUgGQAKgCALAAQAOAAALACQAMACAJAEQANAGATARIgbAgQgNgLgLgGQgNgGgOAAQgMAAgLAFQgKAFgIAJQgIAIgEALQgEAMAAAMIAAAAQAAANAEALQAEAMAIAIQAIAJAKAFQALAFAMAAQALAAASgHQAKgFANgMIAcAdQgIAIgIAGQgJAHgJAFQgKAEgMADQgMACgOAAQgKAAgKgCg");
	this.shape_4.setTransform(228.2,40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AgdBJQgWgJgKgIIATgdQAMAJAMAFQANAFAKgBQAJAAAFgCQAEgDAAgGIAAAAQAAgGgKgFIgVgHQgWgHgJgIQgGgEgEgHQgEgJgBgKIAAAAQAAgMAFgKQAEgIAIgGQAHgHALgDQAKgDALAAQAOAAAPAFQAPAFAMAHIgQAfQgLgHgLgEQgLgDgIgBQgHAAgFADQgDADAAAFIAAAAQAAAGAJAEIAUAIIARAHQAJAEAGAEQAHAFAEAHQAEAIAAAKIAAAAQAAANgEAKQgFAJgIAGQgIAGgLADQgKADgMAAQgRAAgQgGg");
	this.shape_5.setTransform(201.6,42.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AgbAcIAMgDQAGgDAEgDQAGgHgBgMIgRAAIAAgtIAtAAIAAAmQAAANgDALQgEAKgHAGQgGAHgJADQgKADgNAAg");
	this.shape_6.setTransform(190.3,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("AgtBOIAAiYIArAAIAAAfQACgJAFgFQAEgHAGgEQAGgFAIgCQAHgCAKAAIAAAtIgCAAQgLAAgJAEQgIADgGAHQgHAGgCAKQgCAKgBANIAAA5g");
	this.shape_7.setTransform(180.2,42.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AglBMQgKgEgHgFQgHgHgEgIQgEgJAAgLIAAgBQAAgMAEgJQAFgJAIgGQAIgGAMgDQALgCAOAAQAOAAAWAGIAAgDQAAgGgCgGQgCgFgFgDQgEgEgGgCQgGgCgHAAQgMAAgKADQgJABgLAFIgLghQAOgHAMgCQAPgEARAAQASAAANAFQANAEAIAIQAIAJAEAMQAEAMAAAQIAABYIgpAAIAAgRQgJAKgKAEQgLAGgPAAQgLAAgKgDgAgUAOQgHAFAAALIAAAAQgBAJAHAFQAGAFALAAQAHAAAGgCQAHgCAEgEQAFgDACgFQACgFAAgGIAAgIQgMgFgPAAQgNAAgJAFg");
	this.shape_8.setTransform(164.9,42.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AAeBMIgegvIgeAvIguAAIA2hMIg0hMIAvAAIAbAtIAdgtIAtAAIgzBLIA2BNg");
	this.shape_9.setTransform(149,42.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgUBoIAAiYIApAAIAACYgAgWhAIAAgnIAtAAIAAAng");
	this.shape_10.setTransform(136.4,39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("AhOBkIAAjHIBRAAQARAAAOAFQAOAFAKAJQAKAKAGAMQAFANAAAPIAAABQAAAIgCAIQgBAIgDAFQgHANgLAJQgLAJgOAEQgPAFgQAAIghAAIAAA8gAgiABIAiAAQAIAAAGgBQAHgDAEgEQAEgEADgFQACgGAAgGIAAgBQAAgHgCgGQgDgGgFgDQgEgEgHgCQgGgCgIAAIghAAg");
	this.shape_11.setTransform(123.4,40.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgQAnQgHgDgGgGQgGgFgDgIQgDgIAAgJIAAAAQAAgHADgJQADgHAGgGQAGgGAHgDQAIgDAIgBQAJABAIADQAHADAGAGQAGAGADAHQADAJAAAHIAAAAQAAAJgDAIQgDAIgGAFQgGAGgHADQgIAEgJAAQgIAAgIgEg");
	this.shape_12.setTransform(106,40);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("AgxBhQgJgDgJgFIAPgfQAKAGAIAAQAGAAADgCQAEgCACgGIg8iZIAuAAIAiBoIAhhoIAuAAIg7CcIgJAUQgFAIgGAFQgFAFgHACQgIADgJAAQgMAAgJgDg");
	this.shape_13.setTransform(90.3,44.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgaBJQgPgFgLgKQgKgLgGgOIgEgQIgCgRIAAAAQAAgQAFgOQAGgPAKgKQAKgLAOgHIAOgEIAPgCQAKAAAIACIAQAFIAMAIIALAKQAJAMAFAPQAEAOAAARIgBALIhpAAQABAHAEAFQADAHAFADQAFAEAGACQAGABAHAAQAKAAAJgDQAJgDAJgJIAYAWQgFAGgHAGIgOAJQgIAEgJACQgJABgLAAQgUgBgKgFgAAhgLQgCgIgCgGQgDgFgEgFQgEgEgFgDQgGgCgHAAQgFAAgFACQgHADgDAEQgFAFgCAFQgDAGgCAIIBBAAIAAAAg");
	this.shape_14.setTransform(73.8,42.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AAbBOIAAhUQgBgIgBgGQgCgGgEgEQgCgEgGgCQgEgCgHAAQgFAAgFACQgFACgDAEQgEAEgCAGQgBAGgBAIIAABUIgrAAIAAiYIArAAIAAAWQAJgMAJgFIALgGQAHgCAIAAQAMAAAKAEQAJAEAHAHQAHAIADAKQAEALAAANIAABig");
	this.shape_15.setTransform(56.3,42.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("AgdBJQgWgJgKgIIATgdQALAJANAFQANAFAKgBQAIAAAGgCQAEgDAAgGIAAAAQAAgGgKgFIgVgHQgWgHgJgIQgGgEgEgHQgEgJgBgKIAAAAQAAgMAFgKQAEgIAIgGQAHgHALgDQAKgDALAAQAOAAAPAFQAPAFAMAHIgQAfQgLgHgLgEQgLgDgIgBQgHAAgFADQgDADAAAFIAAAAQAAAGAJAEIAUAIIARAHQAJAEAGAEQAHAFAEAHQAEAIAAAKIAAAAQAAANgEAKQgFAJgIAGQgIAGgLADQgKADgMAAQgRAAgQgGg");
	this.shape_16.setTransform(40.1,42.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("AgUBoIAAiYIApAAIAACYgAgWhAIAAgnIAtAAIAAAng");
	this.shape_17.setTransform(28.9,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AhbBkIAAjHIBOAAQAMAAAJACQALACAKAEQAJADAJAGIAPAMIANAOIAJARQAEAJACAKQACAKAAAKIAAAAQAAAKgCAKQgCAKgEAJIgJARIgNAPIgPAMQgJAFgJAEQgKAEgLACQgJACgMAAgAgvA8IAiAAQANAAALgEQAKgEAJgIQAHgIAEgLQAFgLAAgNIAAgBQAAgMgFgLQgEgLgHgIQgJgIgKgFQgLgEgNAAIgiAAg");
	this.shape_18.setTransform(13.9,40.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQBlQgLgCgLgEQgLgEgKgGQgKgGgJgIIAagfQAOALAOAGIAPAFIAPACQAOAAAIgFQAHgFAAgJIAAAAQAAgJgHgFQgJgGgXgGIgbgIQgNgFgIgGQgJgGgEgKQgFgKAAgPIAAAAQAAgOAFgLQAFgLAKgIQAJgIANgEQANgFAPAAQAKAAAKACQAKACAJADIASAIIAQALIgXAhQgOgKgMgFQgNgFgMAAQgMAAgHAFQgGAFAAAHIAAABQAAAKAIAFQAIAFAaAGQAQAFALAEQAMAGAHAFQAJAHAEAKQAEAJAAANIAAABQAAAOgFAMQgGALgKAJQgJAHgOAEQgNAFgQAAQgLAAgLgCg");
	this.shape_19.setTransform(244.2,11.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBlQgKgCgKgEQgJgDgJgGQgIgFgHgHQgHgHgFgIQgGgIgDgKQgEgJgCgKQgCgKAAgLIAAgBQAAgJACgLQACgKAEgJQADgJAGgJQAFgIAIgHQAHgHAIgFQAIgGAKgEIAUgGQAKgCAKAAQAOAAALACQALABAJAEQANAFAVAPIgcAiQgMgLgLgEQgNgGgQAAQgLAAgKAFQgLAFgIAJQgIAIgEALQgEAMAAAMIAAAAQAAANAEAMQAFAMAIAIQAIAJALAFQALAEAMAAQAMAAALgDQAKgDAIgGIAAgcIgsAAIAAglIBXAAIAABWQgXAQgOAGQgLAEgLADQgNACgNAAQgLAAgLgCg");
	this.shape_20.setTransform(224,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA0BkIhhh+IAAB+IgrAAIAAjHIApAAIBcB6IAAh6IArAAIAADHg");
	this.shape_21.setTransform(201.8,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVBkIAAjHIArAAIAADHg");
	this.shape_22.setTransform(185.8,11.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AApBkIAAhQIhQAAIAABQIgsAAIAAjHIAsAAIAABPIBQAAIAAhPIArAAIAADHg");
	this.shape_23.setTransform(170.2,11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVBkIAAieIg9AAIAAgpIClAAIAAApIg9AAIAACeg");
	this.shape_24.setTransform(150.2,11.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhHBkIAAjHIAsAAIAACfIBjAAIAAAog");
	this.shape_25.setTransform(124.3,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhHBkIAAjHIAsAAIAACfIBjAAIAAAog");
	this.shape_26.setTransform(106.7,11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA8BkIgTgtIhTAAIgSAtIgtAAIBWjIIAnAAIBWDIgAAaARIgahAIgaBAIA0AAg");
	this.shape_27.setTransform(85.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.8,-4.2,329.9,63), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-5.4,0,5.4).s().p("AwBA2IAAhrMAgDAAAIAABrg");
	this.shape.setTransform(166,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AgPA1QgIgEgGgFIgFgHIgEgJIgDgKIAAgPIAAAAQAAgHACgPIAEgKIAFgIIAHgHQAEgEAEgCIAKgDIAJgBQAIAAALACQAIAEAHAGIgMARQgGgEgFgCQgFgCgGAAQgEAAgFACQgEADgDAEQgCAEgBAEIgBAIQAEgDAFgCQAGgCAFAAQAIAAAIACQAGADAFADQAFAFADAFQADAHAAAIIAAABQAAAHgDAIQgDAGgGAFQgFAFgHADQgIADgIAAQgNgBgEgCgAgGAEQgEABgDADIgDAEIgBAHIABAHIAEAEIAGAEIAHABIAHgBQADgBADgDQACgBACgDQABgDAAgEIAAAAQAAgEgBgCQgCgDgCgCIgGgEIgIgBIgGABg");
	this.shape_1.setTransform(241.3,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AABA2IAAhTIgSAEIgGgTIAfgJIAPAAIAABrg");
	this.shape_2.setTransform(232.5,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_3.setTransform(220.4,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AAcA2IgzhEIAABEIgYAAIAAhqIAWAAIAxBAIAAhAIAYAAIAABqg");
	this.shape_4.setTransform(209,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgTAzIgIgDIgGgGIgGgGIgDgIIgDgKIgBgLIAAg8IAYAAIAAA7QAAAHACAFQABAFADADIAHAFQAFACAEAAQAGAAAEgCQAEgCADgDQADgDACgFQABgFAAgGIAAg8IAYAAIAAA7IgBALQgBAGgCAEIgEAJIgFAGIgHAGIgIADQgMADgHAAQgNgBgGgCg");
	this.shape_5.setTransform(197.2,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgMA1IgJgDQgGgDgJgJIAPgQQAFAFAEADQAFACAGAAIAFgBQADgBABgCQACgCACgDIABgIIAAhEIAXAAIAABFQAAAJgCAHQgDAHgFAFQgEAFgIADQgHACgIAAQgFAAgGgBg");
	this.shape_6.setTransform(186.7,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgIA2QgGgBgGgDIgLgEIgKgIIAOgRQAHAGAIADIAIAEIAIAAQAHAAAEgDQAEgCAAgFQAAgFgEgCQgEgEgMgDIgPgEIgLgGQgFgDgCgFQgDgGAAgIIAAAAQAAgHADgGQACgGAGgEQAFgEAGgDQAHgCAIAAIALABQAFAAAFACIAKAFIAIAFIgMASQgHgFgHgDQgHgDgGAAQgGAAgEADQgEADAAAEIAAAAQAAAFAFADQAEADAOAEIAOAEIALAGQAEAEACAFQACAFAAAGIAAABQAAAHgCAHQgDAGgFAEQgGAEgHADQgHACgJAAIgLgBg");
	this.shape_7.setTransform(173.2,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_8.setTransform(163.6,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AATA2IgWgjIgTAAIAAAjIgXAAIAAhqIAwAAQAGgBAMADQAHADAGAFQAEAFADAGQACAGAAAIQAAAGgCAGQgBAFgDADQgDAFgFADIgJAFIAaAmgAgWAAIAXAAIAIgBQADgCACgCIAEgEIABgHIAAAAQAAgEgBgDQgBgCgDgCIgGgEIgHgBIgXAAg");
	this.shape_9.setTransform(153.1,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AgKA2IAAhVIgiAAIAAgVIBYAAIAAAVIggAAIAABVg");
	this.shape_10.setTransform(142.3,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AAgA2IgJgYIgtAAIgKAYIgYAAIAuhrIAVAAIAuBrgAAOAJIgOgiIgNAiIAbAAg");
	this.shape_11.setTransform(132.6,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_12.setTransform(121.7,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AAWA2IAAgrIgrAAIAAArIgXAAIAAhqIAXAAIAAAqIArAAIAAgqIAXAAIAABqg");
	this.shape_13.setTransform(110.6,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AgLA2IAAhVIghAAIAAgVIBYAAIAAAVIggAAIAABVg");
	this.shape_14.setTransform(99.8,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AAcA2IgzhEIAABEIgYAAIAAhqIAWAAIAxBAIAAhAIAYAAIAABqg");
	this.shape_15.setTransform(84.3,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AgLA2IAAhqIAXAAIAABqg");
	this.shape_16.setTransform(75.7,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.4,0.7,205.2,19.3);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},136).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.6,12);


(lib.blacky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5ZAHgIAAu/MByzAAAIAAO/g");
	this.shape.setTransform(367.7,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blacky, new cjs.Rectangle(0.3,-1,734.9,96.1), null);


// stage content:
(lib._728x90_cars_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.8,83.1,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(214).to({startPosition:214},0).to({alpha:0,startPosition:224},10).to({_off:true},1).wait(32));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(553.1,47.3,0.1,0.1,0,0,0,63.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(242).to({_off:false},0).wait(1).to({scaleX:0.2,scaleY:0.2,y:47.2},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:47.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:47.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:47.3},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:47.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:47.3},0).wait(1).to({scaleX:1,scaleY:1,y:47.2},0).wait(1).to({scaleX:1,scaleY:1,y:47.3},0).wait(3));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,61);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).to({alpha:1},13).wait(20));

	// Layer 8
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(460.9,48.7,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(501.1,51.7,0.672,0.672,0,0,0,0.2,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(126).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:461,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:461.8,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:463.6,y:48.8,alpha:0.071},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:468,y:49.1,alpha:0.179},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:479.5,y:49.9,alpha:0.47},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:488.5,y:50.5,alpha:0.695},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:492.9,y:50.8,alpha:0.804},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:495.6,y:51,alpha:0.871},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:497.4,y:51.1,alpha:0.916},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:498.6,y:51.2,alpha:0.947},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:499.5,y:51.3,alpha:0.969},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:500.1,alpha:0.984},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:500.4,alpha:0.993},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:500.6,y:51.4,alpha:0.998},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(141).to({_off:false},0).wait(73).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 7
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(453.6,46.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(420,70.2,0.672,0.672,0,0,0,0.1,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:453.3,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:452.7,y:47,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:451.1,y:48.1,alpha:0.071},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:447.4,y:50.6,alpha:0.179},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:437.6,y:57.4,alpha:0.47},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:430,y:62.7,alpha:0.695},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:426.3,y:65.3,alpha:0.804},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:424.1,y:66.8,alpha:0.871},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:422.5,y:67.9,alpha:0.916},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:421.5,y:68.6,alpha:0.947},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:420.8,y:69.1,alpha:0.969},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:420.3,y:69.5,alpha:0.984},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:419.9,y:69.7,alpha:0.993},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:419.8,y:69.8,alpha:0.998},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(134).to({_off:false},0).wait(80).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 9
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(427.2,46.3,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(456,35.2,0.672,0.672,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,y:46.1,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:427.8,y:45.9,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:429.1,y:45.4,alpha:0.071},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:432.2,y:44.2,alpha:0.179},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:440.5,y:40.9,alpha:0.47},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:446.9,y:38.4,alpha:0.695},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:450.1,y:37.1,alpha:0.804},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:452,y:36.4,alpha:0.871},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:453.3,y:35.9,alpha:0.916},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:454.2,y:35.5,alpha:0.947},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:454.8,y:35.3,alpha:0.969},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:455.2,y:35.1,alpha:0.984},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:455.5,y:35,alpha:0.993},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:455.6,y:34.9,alpha:0.998},0).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(127).to({_off:false},0).wait(87).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 10
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(460.6,46,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(405.3,47,0.672,0.672,0,0,0,0.2,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:460.3,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:459.2,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:456.6,alpha:0.071},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:450.6,y:46.1,alpha:0.179},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:434.4,y:46.3,alpha:0.47},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:421.9,y:46.4,alpha:0.695},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:415.8,y:46.5,alpha:0.804},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:412.1,y:46.6,alpha:0.871},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:409.6,alpha:0.916},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:407.9,alpha:0.947},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:406.7,alpha:0.969},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:405.8,y:46.7,alpha:0.984},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:405.3,alpha:0.993},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:405,alpha:0.998},0).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120).to({_off:false},0).wait(94).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.7,276.8,1.344,1.344,0,0,0,46.9,13.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},0).to({alpha:1},12).wait(70).to({alpha:0},10).wait(36));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(140.1,38.5,0.9,0.9,0,0,0,119.4,17.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129).to({_off:false},0).to({alpha:1},12).wait(70).to({alpha:0},10).wait(36));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(152.1,47.2,0.055,0.055,0,0,0,73,63);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:72.8,regY:62.4,scaleX:0.06,scaleY:0.06,y:47.1,alpha:0.007},0).wait(1).to({scaleX:0.07,scaleY:0.07,y:47.2,alpha:0.033},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:47.1,alpha:0.097},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:152,alpha:0.259},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:47,alpha:0.529},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.692},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.789},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:46.9,alpha:0.853},0).wait(1).to({scaleX:0.49,scaleY:0.49,alpha:0.899},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.932},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:151.9,alpha:0.956},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:152,alpha:0.974},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:151.9,alpha:0.986},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:152,alpha:0.994},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.999},0).wait(1).to({regX:72.6,regY:62.5,x:152.1,y:47.2,alpha:1},0).to({regX:72.8,regY:62.6,scaleX:0.61,scaleY:0.61,x:152.2},66).wait(1).to({regY:62.4,scaleX:0.63,scaleY:0.63,x:152.1,y:47,alpha:0.988},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:152,y:46.8,alpha:0.938},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:151.7,y:46,alpha:0.776},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:150.9,y:43.7,alpha:0.333},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:150.5,y:42.6,alpha:0.147},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:150.3,y:42.2,alpha:0.066},0).wait(1).to({scaleX:2.02,scaleY:2.02,y:42,alpha:0.025},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:150.2,y:41.9,alpha:0.005},0).wait(1).to({regY:62.6,scaleX:2.06,scaleY:2.06,y:42.3,alpha:0},0).wait(166));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(297.8,49.9,2.1,2.1,0,0,0,99,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({alpha:1},14).wait(59).to({alpha:0},4).wait(170));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({alpha:0},5).wait(165));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(174));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(361.4,42,734.9,96.1);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_cars_en_atlas_P_.png", id:"728x90_cars_en_atlas_P_"},
		{src:"images/728x90_cars_en_atlas_NP_.jpg", id:"728x90_cars_en_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;