(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_cars_fr_atlas_P_", frames: [[348,277,88,59],[234,277,112,66],[0,0,388,275],[125,277,107,95],[0,277,123,116]]},
		{name:"300x250_cars_fr_atlas_NP_", frames: [[0,0,300,250],[0,252,267,230]]}
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
	this.spriteSheet = ss["300x250_cars_fr_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["300x250_cars_fr_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carbg = function() {
	this.spriteSheet = ss["300x250_cars_fr_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["300x250_cars_fr_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CT_Kids = function() {
	this.spriteSheet = ss["300x250_cars_fr_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lego = function() {
	this.spriteSheet = ss["300x250_cars_fr_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["300x250_cars_fr_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgLA0IAAhSIgfAAIAAgVIBVAAIAAAVIgfAAIAABSg");
	this.shape.setTransform(112.6,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbA0IgyhBIAABBIgXAAIAAhnIAWAAIAwA/IAAg/IAXAAIAABng");
	this.shape_1.setTransform(101.8,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfA1IgJgYIgrAAIgKAYIgYAAIAthpIAVAAIAtBpgAAOAJIgOghIgNAhIAbAAg");
	this.shape_2.setTransform(90,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbA0IgyhBIAABBIgXAAIAAhnIAWAAIAwA/IAAg/IAXAAIAABng");
	this.shape_3.setTransform(78.1,36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnA0IAAhnIBPAAIAAAUIg4AAIAAAVIAxAAIAAAUIgxAAIAAAWIA4AAIAAAUg");
	this.shape_4.setTransform(67.4,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA0IAAhSIghAAIAAgVIBWAAIAAAVIggAAIAABSg");
	this.shape_5.setTransform(57.3,36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA0IgyhBIAABBIgXAAIAAhnIAWAAIAwA/IAAg/IAXAAIAABng");
	this.shape_6.setTransform(46.5,36);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA0IAAhnIAXAAIAABng");
	this.shape_7.setTransform(38.1,36);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfA1IgJgYIgrAAIgKAYIgYAAIAthpIAVAAIAtBpgAAOAJIgOghIgNAhIAbAAg");
	this.shape_8.setTransform(29.7,36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdA0IAAhDIgdAsIAAAAIgdgrIAABCIgXAAIAAhnIAZAAIAbAsIAbgsIAaAAIAABng");
	this.shape_9.setTransform(17.3,36);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA0IAAgRIA5hCIg3AAIAAgUIBVAAIAAARIg5BCIA5AAIAAAUg");
	this.shape_10.setTransform(106.2,19);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnA0IAAhnIBOAAIAAAUIg3AAIAAAVIAwAAIAAAUIgwAAIAAAWIA4AAIAAAUg");
	this.shape_11.setTransform(96.1,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA0IgyhBIAABBIgXAAIAAhnIAWAAIAwA/IAAg/IAXAAIAABng");
	this.shape_12.setTransform(84.9,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLA0IAAhnIAXAAIAABng");
	this.shape_13.setTransform(76.5,19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA1IgMgDIgLgFQgFgDgFgFIAOgQQAIAGAHADIAHACIAIABQAIAAADgCQAFgDAAgFQAAgEgFgDQgEgDgMgDIgOgFIgLgFQgEgDgDgFQgCgGAAgHIAAgBQAAgGADgGQACgGAFgEQAFgFAGgBQAIgDAHAAIALABIAJACIAKAEIAJAGIgMASQgIgGgHgCQgGgDgGABQgGgBgEADQgDADgBAEIAAAAQABAFAEADQAEACANADIAOAFQAHADAEADQAEADACAGQACAFAAAGIAAAAQAAAIgCAHQgDAFgGAFQgFAEgGACQgIACgIAAIgLgBg");
	this.shape_14.setTransform(69.1,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfA1IgJgYIgrAAIgKAYIgYAAIAthpIAVAAIAtBpgAAOAJIgOghIgNAhIAbAAg");
	this.shape_15.setTransform(58.6,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFA1IgMgDQgEgBgFgDIgHgHQgEgEgDgEIgFgJIgDgKIgBgLIAAgBIABgKIADgKIAFgKIAHgIIAHgGIAKgFIALgDQAFgBAFAAIANABIALACQAGADALAIIgOARQgHgFgFgCQgHgDgIAAQgGAAgFACQgGADgEAEQgEAFgCAGQgDAGAAAGIAAAAQAAAHADAGQACAGAEAFQAEAEAGADQAGACAGAAQAGAAAFgCQAHgBADgDIAAgPIgWAAIAAgTIAtAAIAAAtQgMAIgHADQgGADgGABIgOACQgFAAgFgCg");
	this.shape_16.setTransform(46.7,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAfA1IgJgYIgrAAIgKAYIgYAAIAthpIAVAAIAtBpgAAOAJIgOghIgNAhIAbAAg");
	this.shape_17.setTransform(35.7,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdA0IAAhDIgdAsIAAAAIgdgrIAABCIgXAAIAAhnIAaAAIAaAsIAcgsIAZAAIAABng");
	this.shape_18.setTransform(23.3,19);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AqsD6IAAnzIVZAAIAAHzg");
	this.shape_19.setTransform(63.5,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,1.8,137,50);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT_Kids();
	this.instance.parent = this;
	this.instance.setTransform(-3,-31,0.503,0.503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-3,-31,195.3,138.4), null);


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
	this.shape.graphics.f("#000000").s().p("AguA5IAAgTIA9hHIg7AAIAAgXIBbAAIAAAUIg9BHIA9AAIAAAWg");
	this.shape.setTransform(124.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgqA5IAAhxIBVAAIAAAXIg9AAIAAAWIA1AAIAAAWIg1AAIAAAYIA9AAIAAAWg");
	this.shape_1.setTransform(113.5,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXA5IAAguIgtAAIAAAuIgZAAIAAhxIAZAAIAAAtIAtAAIAAgtIAZAAIAABxg");
	this.shape_2.setTransform(101.7,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFA5IgLgDQgGgCgEgEIgJgHIgHgIIgFgKIgDgLIgBgLIAAgBIABgLQABgGACgFIAFgKIAHgJIAJgHIAKgFIALgEIAMgBQAIABAGABQAHABAFADQAHACALAKIgPASQgHgGgHgDQgHgEgIABQgHgBgGADQgFADgFAFQgEAFgDAGQgCAGAAAHIAAAAQAAAHACAGQADAHAEAFQAEAFAGACQAGAEAHAAQAGAAAKgEQAGgDAHgHIAQAQIgJAJQgFADgFADIgMAEQgHACgIgBIgLgBg");
	this.shape_3.setTransform(89.8,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLA5IAAhaIgjAAIAAgXIBdAAIAAAXIgjAAIAABag");
	this.shape_4.setTransform(73.6,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdA5Ig2hIIAABIIgYAAIAAhxIAXAAIA0BFIAAhFIAYAAIAABxg");
	this.shape_5.setTransform(62,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiA5IgKgZIgvAAIgKAZIgaAAIAxhxIAVAAIAxBxgAAPAJIgPgjIgOAjIAdAAg");
	this.shape_6.setTransform(49.3,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdA5Ig2hIIAABIIgYAAIAAhxIAXAAIA0BFIAAhFIAYAAIAABxg");
	this.shape_7.setTransform(36.5,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgqA5IAAhxIBVAAIAAAXIg9AAIAAAWIA1AAIAAAWIg1AAIAAAYIA9AAIAAAWg");
	this.shape_8.setTransform(25,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLA5IAAhaIgjAAIAAgXIBdAAIAAAXIgjAAIAABag");
	this.shape_9.setTransform(14.1,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAdA5Ig2hIIAABIIgYAAIAAhxIAXAAIA0BFIAAhFIAYAAIAABxg");
	this.shape_10.setTransform(2.5,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMA5IAAhxIAYAAIAABxg");
	this.shape_11.setTransform(-6.5,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAiA5IgKgZIgvAAIgKAZIgaAAIAxhxIAVAAIAxBxgAAPAJIgPgjIgOAjIAdAAg");
	this.shape_12.setTransform(-15.6,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgA5IAAhJIggAvIAAAAIgfgvIAABJIgZAAIAAhxIAbAAIAdAxIAegxIAbAAIAABxg");
	this.shape_13.setTransform(-29,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-37.7,4.8,169.6,19.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgZAsIAAhVIAYAAIAAARIAEgIIAGgGQADgDAEgBQAFgBAFAAIAAAaIgBAAQgHAAgEACQgFACgEADQgDAEgBAGQgBAFgBAHIAAAgg");
	this.shape.setTransform(255.7,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgVArQgFgCgEgDQgEgEgDgEQgCgGAAgGQAAgHADgGQACgEAFgDQAEgEAHgBQAGgCAIAAQAIAAAMAEIAAgBQAAgFgBgCQgBgEgDgCQgCgCgDAAIgHgBIgNABIgLADIgHgTQAIgDAHgBQAJgCAJAAQAKAAAHACQAIADAEAEQAFAFACAHQADAHAAAJIAAAxIgYAAIAAgKQgFAGgGACQgGADgIAAQgGAAgGgBgAgLAIQgEADAAAGQAAAFAEADQADADAGAAIAHgCIAGgDIAEgEIABgGIAAgFQgHgDgIAAQgHAAgFADg");
	this.shape_1.setTransform(247.1,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AASArIgSgbIgRAbIgaAAIAfgrIgdgqIAaAAIAQAZIAQgZIAaAAIgeAqIAfArg");
	this.shape_2.setTransform(238,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("AgMA7IAAhVIAYAAIAABVgAgMgkIAAgWIAZAAIAAAWg");
	this.shape_3.setTransform(231,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("AgsA5IAAhxIAuAAQAJAAAJAEQAIACAFAFQAGAFADAIQADAHAAAJIAAAAIgBAJIgDAHQgDAIgHAFQgGAEgIADQgIACgJABIgTAAIAAAigAgTABIATAAQAEAAAEgBQAEgBACgDQADgCABgDQACgDAAgDIAAgBQAAgEgCgDIgEgGQgCgCgEgBIgIgBIgTAAg");
	this.shape_4.setTransform(223.6,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AgIAWQgFgCgDgCQgDgEgDgFIgBgJIAAAAQAAgEABgEQADgEADgEQADgDAFgCQAEgCAEAAQAFAAAEACIAIAFIAFAIQACAEAAAEIAAAAQAAAFgCAEIgFAJIgIAEQgEACgFAAQgEAAgEgCg");
	this.shape_5.setTransform(213.7,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AgbA3IgKgEIAIgSQAFADAFAAIAFgBIAEgFIgihVIAaAAIATA5IATg5IAZAAIghBXIgFAMIgGAHIgHAEQgEACgGgBQgGABgFgCg");
	this.shape_6.setTransform(204.8,27.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("AgOApQgIgCgHgHQgGgFgDgIIgDgJIAAgKQAAgJADgHQADgJAGgGQAFgGAIgDIAIgDIAIgBIAKABIAJADIAHAEIAGAGQAFAHADAIQACAJAAAIIAAAGIg7AAIADAHIAEAGIAGADQAEABADAAQAGAAAFgCQAFgCAFgFIAOANIgHAGIgIAFQgEADgFABIgLABQgMgBgFgDgAATgGIgCgHIgEgHQgDgCgDgBQgDgBgEAAIgGABQgDABgCACIgEAHIgCAHIAkAAIAAAAg");
	this.shape_7.setTransform(195.4,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AAPAsIAAgvQAAgEgBgEIgDgGIgFgDQgCgBgEAAQgCAAgDABIgFADIgDAGIgBAIIAAAvIgZAAIAAhVIAZAAIAAALQAFgFAFgEIAGgDIAIgBQAHAAAGACQAFACAEAEQAEAFACAGQACAFAAAIIAAA3g");
	this.shape_8.setTransform(185.5,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AgQAqQgMgGgGgEIAKgQQAHAFAIACQAHADAFAAQAFAAADgCQACgBAAgDIAAgBQAAgDgFgDIgMgEQgMgEgFgEQgEgCgCgEQgDgFAAgGIAAAAQAAgHADgFQACgFAFgDQAEgEAGgCQAFgCAGAAQAIAAAJADQAIADAHAEIgJARIgNgGQgGgCgFAAQgDAAgCACQgDACAAACIAAABQAAADAGACIALAFIAJADIAJAFQAEACACAFQACAEAAAGQAAAHgCAFQgDAGgEADQgFAEgGABQgGACgHAAQgIAAgKgDg");
	this.shape_9.setTransform(176.3,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgMA7IAAhVIAYAAIAABVgAgMgkIAAgWIAZAAIAAAWg");
	this.shape_10.setTransform(170,24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("AgzA5IAAhxIAsAAIAMABQAGABAFADIALAFIAIAGIAHAJIAGAJIADALIABALIAAAAIgBAMIgDAKIgGAKIgHAIIgIAHIgLAFQgFADgGABIgMABgAgaAiIATAAQAHAAAGgDQAGgCAFgFQAEgEADgGQACgHAAgGIAAgBQAAgHgCgGQgDgGgEgEQgFgFgGgCQgGgDgHAAIgTAAg");
	this.shape_11.setTransform(161.5,24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgOApQgIgCgHgHQgGgFgDgIIgDgJIAAgKQAAgJADgHQADgJAGgGQAFgGAIgDIAIgDIAIgBIAKABIAJADIAHAEIAGAGQAFAHADAIQACAJAAAIIAAAGIg7AAIADAHIAEAGIAGADQAEABADAAQAGAAAFgCQAFgCAFgFIAOANIgHAGIgIAFQgEADgFABIgLABQgMgBgFgDgAATgGIgCgHIgEgHQgDgCgDgBQgDgBgEAAIgGABQgDABgCACIgEAHIgCAHIAkAAIAAAAg");
	this.shape_12.setTransform(145.1,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("AgTA5QgIgDgGgGQgFgGgDgIIgDgJIAAgKIAAAAQAAgHADgLQADgIAFgGQAGgGAHgDQAHgDAIAAIAIABIAHADQAGADAFAGIAAgrIAYAAIAAB1IgYAAIAAgMQgFAGgGAEIgHADIgIABQgIAAgGgDgAgHgGQgEABgDADQgCADgCAEQgCAFAAAFIAAAAQAAAFACAFQACAEACADQADAEAEABQAEACADAAQAEAAAEgCQAEgBADgEQADgDABgEQACgFAAgFIAAAAQAAgFgCgFQgBgEgDgDQgDgDgEgBQgEgCgEAAQgDAAgEACg");
	this.shape_13.setTransform(134.6,24.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgMA4IgLgEIgKgGIgIgIIARgRQAGAIAGACQAHAEAHAAQAHAAAEgEQAFgEAAgGIAAAAQAAgEgCgCIgEgEQgDgCgEgCIgIAAIgKAAIgEgPIAagbIgrAAIAAgWIBKAAIAAATIgcAbIALAEQAGACAEADQAEAEADAEQACAHAAAHIAAABQAAAHgDAHQgCAHgGAFQgFAFgHADQgIACgJABQgHgBgHgBg");
	this.shape_14.setTransform(119.4,24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AgJA5QgGgBgGgDQgHgBgFgEIgLgIIAPgRQAIAGAIADIAIADIAIABQAIAAAEgDQAFgCAAgGIAAAAQAAgFgFgDQgEgDgNgDIgPgFQgIgDgEgDQgFgDgDgGQgCgFAAgJQAAgIACgGQADgHAGgEQAFgFAHgCQAIgCAIAAIALABIALACIAKAFIAJAGIgNATQgIgFgHgDQgHgDgGAAQgHAAgEADQgEACAAAFIAAAAQAAAGAFADQAFACAOAEQAJACAGADQAHADAEADQAFAEACAFQADAGAAAHQAAAIgDAHQgDAHgGAEQgGAFgHACQgIACgJAAIgMgBg");
	this.shape_15.setTransform(104.4,24.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("AgqA5IAAhxIBVAAIAAAXIg9AAIAAAWIA1AAIAAAWIg1AAIAAAXIA9AAIAAAXg");
	this.shape_16.setTransform(94.2,24.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("AgoA5IAAhxIAZAAIAABaIA4AAIAAAXg");
	this.shape_17.setTransform(84,24.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AgMA6IgLgEIgKgFIgJgIIgHgIIgGgKIgDgLIgBgLIAAgBIABgLIADgLQADgFADgEIAHgJIAJgIIAKgFIALgEIANgBIAMABIALAEIAKAFIAJAIIAHAIIAGAKIADALIABALIAAAAIgBAMQgBAGgCAFIgGAJIgHAJIgJAIIgKAFIgLADQgGABgHABIgMgBgAgNggQgGADgEAFQgFAFgDAGQgCAHAAAGIAAAAQAAAHACAHQADAGAFAFQAFAFAFACQAHADAHAAQAGAAAHgCQAGgDAFgFQAEgFACgGQADgHAAgGIAAgBQAAgGgDgHQgCgGgFgFQgEgFgHgDQgFgCgIAAQgGAAgHACg");
	this.shape_18.setTransform(71.7,24.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C61E24").s().p("AAdA5Ig2hHIAABHIgYAAIAAhxIAXAAIA0BFIAAhFIAYAAIAABxg");
	this.shape_19.setTransform(58.4,24.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C61E24").s().p("AgGA6IgMgEIgKgFIgJgHIgHgJIgEgKIgEgKIgBgMIAAgBIABgLIAEgLQACgFADgEIAHgJIAIgIIAKgFIAMgEIAMgBIANABIAMADQAHADAMAJIgQATQgHgGgGgCQgIgDgIAAQgGAAgGACQgGADgFAFQgEAFgDAGQgCAHAAAGIAAAAQAAAIACAGQADAHAEAEQAGAFAFADQAHADAGAAQAHAAAGgCQAGgCAFgDIAAgQIgZAAIAAgUIAxAAIAAAvQgNAKgIADIgNAEQgHABgHABIgMgBg");
	this.shape_20.setTransform(45.7,24.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C61E24").s().p("AAiA5IgKgaIgvAAIgKAaIgaAAIAxhxIAVAAIAxBxgAAPAJIgPgjIgOAjIAdAAg");
	this.shape_21.setTransform(33.8,24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C61E24").s().p("AgvA5IAAhxIAzAAQAKABAIACQAHACAFAFQAEAEACAFQACAFAAAFIAAABQAAAEgCAEIgDAHQgDAGgHADIAJAEIAHAFQADAEAAAEQACAEAAAGIAAAAQAAAIgDAGQgDAGgFAEQgGADgIADQgIACgJAAgAgXAiIAdAAQAJAAAEgDQAFgDgBgFIAAgBQABgGgFgDIgGgCIgIgBIgcAAgAgXgKIAXAAQAIAAAEgDQAFgCAAgHQAAgGgEgCQgFgDgHAAIgYAAg");
	this.shape_22.setTransform(21.9,24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C61E24").s().p("AgJA5QgGgBgGgDQgHgBgFgEIgLgIIAPgRQAIAGAIADIAIADIAIABQAIAAAEgDQAFgCAAgGIAAAAQAAgFgFgDQgEgDgNgDIgPgFQgIgDgEgDQgFgDgDgGQgCgFAAgJQAAgIACgGQADgHAGgEQAFgFAHgCQAIgCAIAAIALABIALACIAKAFIAJAGIgNATQgIgFgHgDQgHgDgGAAQgHAAgEADQgEACAAAFIAAAAQAAAGAFADQAFACAOAEQAJACAGADQAHADAEADQAFAEACAFQADAGAAAHQAAAIgDAHQgDAHgGAEQgGAFgHACQgIACgJAAIgMgBg");
	this.shape_23.setTransform(5.7,24.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C61E24").s().p("AgqA5IAAhxIBVAAIAAAXIg8AAIAAAWIA0AAIAAAWIg0AAIAAAXIA8AAIAAAXg");
	this.shape_24.setTransform(-4.5,24.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C61E24").s().p("AgoA5IAAhxIAZAAIAABaIA4AAIAAAXg");
	this.shape_25.setTransform(-14.8,24.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJA5QgGgBgGgDQgHgCgFgDIgLgIIAPgRQAIAGAIAEIAIACIAIABQAIAAAEgCQAFgEAAgFIAAAAQAAgFgFgDQgEgDgNgDIgPgFQgIgDgEgDQgFgDgDgGQgCgFAAgJQAAgIACgGQADgGAGgFQAFgEAHgCQAIgDAIAAIALABIALACIAKAFIAJAGIgNATQgIgGgHgCQgHgDgGAAQgHAAgEACQgEAEAAADIAAABQAAAFAFADQAFADAOAEQAJACAGADQAHADAEACQAFAFACAFQADAGAAAHQAAAIgDAHQgDAGgGAFQgGAEgHADQgIACgJAAIgMgBg");
	this.shape_26.setTransform(229.1,6.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgqA4IAAhvIBUAAIAAAVIg7AAIAAAYIA0AAIAAAUIg0AAIAAAYIA8AAIAAAWg");
	this.shape_27.setTransform(218.9,6.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgoA4IAAhvIAZAAIAABZIA4AAIAAAWg");
	this.shape_28.setTransform(208.7,6.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgoA4IAAhvIAZAAIAABZIA4AAIAAAWg");
	this.shape_29.setTransform(198.7,6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLA4IAAhvIAYAAIAABvg");
	this.shape_30.setTransform(190.6,6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAiA5IgKgaIgvAAIgKAaIgaAAIAxhxIAVAAIAxBxgAAPAKIgPgkIgOAkIAdAAg");
	this.shape_31.setTransform(181.5,6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKA5IguhxIAcAAIAdBOIAdhOIAaAAIgtBxg");
	this.shape_32.setTransform(170.8,7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUA2QgFgBgDgDQgEgCgDgEIgGgHIgEgIIgDgKIAAgMIAAg/IAYAAIAAA/QAAAGACAFQACAGADADQADAEAFACQAEABAFAAQAGAAAEgBQAFgCADgEQADgDABgFQACgFAAgHIAAg/IAZAAIAAA+IgBAMIgCAKIgFAJIgFAHQgEAEgEACIgIAEQgNAEgHAAQgOgCgGgCg");
	this.shape_33.setTransform(158.6,7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgLA6IgMgEIgLgFIgIgHIgHgJIgGgKIgDgLIgBgMIAAAAIABgLIADgKQACgGAEgEIAHgJIAJgHIAKgGIAMgDIALgBIANABIAMADIAJAGIAJAHIAIAIIAFAKIADALIABALIAAAAIgBALQgBAGgDAGIgEAKIgIAJIgJAHIgKAFIgLADQgHACgGAAIgLgBgAgNggQgGADgEAFQgFAFgCAGQgDAHAAAGIAAAAQAAAHADAHQACAGAFAFQAEAFAHADQAGACAGAAQAIABAGgDQAGgDAFgFQAFgEACgHQACgGAAgIIAAAAQAAgGgCgHQgDgGgEgFQgFgFgGgDQgHgCgHgBQgGABgHACg");
	this.shape_34.setTransform(145.6,6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATA4IgWgkIgUAAIAAAkIgZAAIAAhvIAyAAQAIAAAMACQAIADAFAGQAFAEADAHQADAHgBAIQAAAHgCAFQgBAGgEAEQgDAEgEADIgKAFIAcAogAgXgBIAYAAQAEAAAEgBIAGgDIAEgFIABgHIAAAAIgBgHIgEgFIgGgDIgJgBIgXAAg");
	this.shape_35.setTransform(133.4,6.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLA4IAAhZIgjAAIAAgWIBdAAIAAAWIgjAAIAABZg");
	this.shape_36.setTransform(121.9,6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJA5QgGgBgGgDQgHgCgFgDIgLgIIAPgRQAIAGAIAEIAIACIAIABQAIAAAEgCQAFgEAAgFIAAAAQAAgFgFgDQgEgDgNgDIgPgFQgIgDgEgDQgFgDgDgGQgCgFAAgJQAAgIACgGQADgGAGgFQAFgEAHgCQAIgDAIAAIALABIALACIAKAFIAJAGIgNATQgIgGgHgCQgHgDgGAAQgHAAgEACQgEAEAAADIAAABQAAAFAFADQAFADAOAEQAJACAGADQAHADAEACQAFAFACAFQADAGAAAHQAAAIgDAHQgDAGgGAFQgGAEgHADQgIACgJAAIgMgBg");
	this.shape_37.setTransform(106.6,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMA6IgLgEIgKgFIgJgHIgHgJIgFgKIgEgLIgBgMIAAAAIABgLIAEgKQABgGAEgEIAHgJIAJgHIAKgGIALgDIANgBIAMABIALADIALAGIAJAHIAGAIIAGAKIADALIABALIAAAAIgBALQgBAGgCAGIgGAKIgHAJIgIAHIgLAFIgMADQgFACgHAAIgMgBgAgNggQgGADgFAFQgEAFgDAGQgCAHAAAGIAAAAQAAAHACAHQADAGAEAFQAFAFAGADQAHACAHAAQAGABAHgDQAGgDAFgFQAEgEACgHQADgGAAgIIAAAAQAAgGgDgHQgCgGgFgFQgEgFgHgDQgFgCgIgBQgGABgHACg");
	this.shape_38.setTransform(94.7,6.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKA5IguhxIAcAAIAdBOIAdhOIAaAAIgtBxg");
	this.shape_39.setTransform(82.6,7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJA5QgGgBgGgDQgHgCgFgDIgLgIIAPgRQAIAGAIAEIAIACIAIABQAIAAAEgCQAFgEAAgFIAAAAQAAgFgFgDQgEgDgNgDIgPgFQgIgDgEgDQgFgDgDgGQgCgFAAgJQAAgIACgGQADgGAGgFQAFgEAHgCQAIgDAIAAIALABIALACIAKAFIAJAGIgNATQgIgGgHgCQgHgDgGAAQgHAAgEACQgEAEAAADIAAABQAAAFAFADQAFADAOAEQAJACAGADQAHADAEACQAFAFACAFQADAGAAAHQAAAIgDAHQgDAGgGAFQgGAEgHADQgIACgJAAIgMgBg");
	this.shape_40.setTransform(66.4,6.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgqA4IAAhvIBVAAIAAAVIg8AAIAAAYIA0AAIAAAUIg0AAIAAAYIA8AAIAAAWg");
	this.shape_41.setTransform(56.2,6.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgLA4IAAhZIgjAAIAAgWIBdAAIAAAWIgjAAIAABZg");
	this.shape_42.setTransform(45.3,6.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUA2QgFgBgDgDQgEgCgDgEIgGgHIgEgIIgDgKIAAgMIAAg/IAYAAIAAA/QAAAGACAFQACAGADADQADAEAFACQAEABAFAAQAGAAAEgBQAFgCADgEQADgDABgFQACgFAAgHIAAg/IAZAAIAAA+IgBAMIgCAKIgFAJIgFAHQgEAEgEACIgIAEQgNAEgHAAQgOgCgGgCg");
	this.shape_43.setTransform(34,7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMA6IgLgEIgLgFIgIgHIgHgJIgFgKIgEgLIgBgMIAAAAIABgLIAEgKQACgGADgEIAHgJIAJgHIAKgGIALgDIANgBIAMABIAMADIAKAGIAJAHIAGAIIAGAKIADALIABALIAAAAIgBALQgBAGgDAGIgFAKIgHAJIgIAHIgLAFIgMADQgFACgHAAIgMgBgAgNggQgGADgFAFQgEAFgDAGQgCAHAAAGIAAAAQAAAHACAHQADAGAEAFQAFAFAGADQAHACAHAAQAGABAHgDQAGgDAFgFQAEgEACgHQADgGAAgIIAAAAQAAgGgDgHQgCgGgEgFQgFgFgHgDQgFgCgIgBQgGABgHACg");
	this.shape_44.setTransform(21,6.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLA4IAAhZIgjAAIAAgWIBdAAIAAAWIgjAAIAABZg");
	this.shape_45.setTransform(9.4,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-21.9,-2,282.5,37.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-6,0,6).s().p("AxzA8IAAh3MAjnAAAIAAB3g");
	this.shape.setTransform(106,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AAfA7Ig5hKIAABKIgaAAIAAh2IAYAAIA3BJIAAhJIAaAAIAAB2g");
	this.shape_1.setTransform(184,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AgMA7IAAh2IAZAAIAAB2g");
	this.shape_2.setTransform(174.5,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgVA5IgJgEIgHgGIgGgIQgDgDgBgGQgCgEgBgGIgBgMIAAhEIAaAAIAABDQAAAHACAFQACAGADAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQADgEACgFQACgGAAgGIAAhEIAaAAIAABDIgBAMIgDALIgEAJIgGAIIgIAGIgJAEQgNAEgIAAQgPgCgGgCg");
	this.shape_3.setTransform(165.2,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgOA7QgFgBgFgDQgHgDgIgJIAQgTQAFAGAFADQAFADAHAAIAGgBIAEgEQACgCABgEIACgJIAAhLIAbAAIAABNQgBAKgDAIQgDAIgFAFQgFAGgIADQgIACgIAAQgIAAgGgBg");
	this.shape_4.setTransform(153.5,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgRA6QgIgDgHgGIgFgIIgFgJIgDgMIgBgRQAAgIADgRIAEgLIAGgJIAHgIIAKgGIAKgEIALAAQAIAAANADQAIADAJAGIgOAVQgHgFgEgCQgHgCgHAAQgFAAgFACQgEADgDAEIgEAJIgBAJQAFgEAFgCQAGgCAHAAQAJAAAHACQAJADAFAFQAGAFADAFQADAIAAAJIAAAAQAAAKgDAHQgEAHgGAGQgGAFgJADQgIADgKABQgMgCgGgCgAgHAFIgHAEQgCACgBADIgCAHIAAAAIACAIQABADACACQADACAEACIAIABIAIgBQAEgCADgCQADgCAAgDQACgEAAgEIAAAAQAAgDgCgEQgBgDgCgCIgHgEIgIgBIgIABg");
	this.shape_5.setTransform(138.5,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AABA8IAAhdIgVAGIgFgVIAhgLIASAAIAAB3g");
	this.shape_6.setTransform(128.7,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgsA7IAAh2IBYAAIAAAYIg+AAIAAAYIA3AAIAAAWIg3AAIAAAZIA/AAIAAAXg");
	this.shape_7.setTransform(115.2,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgqA7IAAh2IAaAAIAABfIA7AAIAAAXg");
	this.shape_8.setTransform(104.5,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AgsA7IAAh2IBYAAIAAAYIg+AAIAAAYIA3AAIAAAWIg3AAIAAAZIA/AAIAAAXg");
	this.shape_9.setTransform(88.3,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AgqA7IAAh2IAaAAIAABfIA7AAIAAAXg");
	this.shape_10.setTransform(77.5,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AgqA7IAAh2IAaAAIAABfIA7AAIAAAXg");
	this.shape_11.setTransform(67,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AAkA8IgLgaIgyAAIgKAaIgbAAIAzh3IAXAAIAzB3gAAQAKIgQglIgPAlIAfAAg");
	this.shape_12.setTransform(54.6,9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AgJA8IgNgDIgNgHQgGgDgFgFIAPgTQAJAIAIADIAJADIAJABQAIAAAEgDQAFgDAAgFIAAAAQAAgGgFgCQgEgEgOgDIgQgGQgIgDgFgDQgFgDgDgGQgCgGAAgJIAAAAQAAgJADgGQADgHAFgFQAGgEAIgDQAHgCAJAAIAMABIALACIALAGIAJAGIgNAUQgIgGgIgDQgIgDgGAAQgHAAgEADQgEADAAAFQAAAFAFAEQAFACAOAEIAQAFQAIADAEAEQAFAEADAGQACAFAAAIIAAAAQAAAJgDAHQgDAHgGAEQgGAGgIACQgIACgKAAIgMgBg");
	this.shape_13.setTransform(42.6,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AAfA7Ig5hKIAABKIgaAAIAAh2IAYAAIA3BJIAAhJIAaAAIAAB2g");
	this.shape_14.setTransform(25.5,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AgsA7IAAh2IBYAAIAAAYIg+AAIAAAYIA3AAIAAAWIg3AAIAAAZIA/AAIAAAXg");
	this.shape_15.setTransform(13.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-3.5,228,24.5);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},124).wait(53));

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
(lib._300x250_cars_fr = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.8,241,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({startPosition:197},0).to({alpha:0,startPosition:207},10).to({_off:true},1).wait(34));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.6,192.6,0.1,0.1,0,0,0,63.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(243).to({_off:false},0).wait(1).to({regY:26.8,scaleX:0.2,scaleY:0.2,x:149.5,y:194.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:149.6,y:197.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:149.5,y:200.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:149.6,y:202.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:203.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:203.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:204.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.5,y:204.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:204.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.6,y:204.8},0).wait(1).to({scaleX:1,scaleY:1,x:149.5,y:204.9},0).wait(1).to({regY:18.5,scaleX:1,scaleY:1,x:149.6,y:196.6},0).wait(3));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,51);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(223).to({_off:false},0).to({alpha:1},14).wait(21));

	// Layer 8
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(159.9,133.7,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(211.2,138.9,0.85,0.85);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:160.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:161.1,y:133.8},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:163.4,y:134},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:168.9,y:134.5},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:183.7,y:135.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:195.2,y:137},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:200.8,y:137.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:204.2,y:137.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:206.5,y:138.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:208.1,y:138.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:209.2,y:138.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:210},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:210.4,y:138.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:210.7},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(133).to({_off:false},0).wait(80).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 7
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(147.8,136.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(108.8,162.3,0.85,0.85);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:147.5},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:146.8,y:137},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:145,y:138.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:140.7,y:141},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:129.3,y:148.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:120.4,y:154.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:116.1,y:156.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:113.4,y:158.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:111.7,y:159.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:110.4,y:160.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:109.6,y:161.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:109,y:161.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:108.6,y:161.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:108.4,y:161.8},0).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(125).to({_off:false},0).wait(88).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 9
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.2,131.3,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.3,118.1,0.85,0.85);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(101).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:153.1,y:131.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,y:130.9},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:153.2,y:130.2},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:128.8},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:153.4,y:124.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:153.6,y:121.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:153.7,y:120.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:119.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:153.8,y:118.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:118.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:118.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:117.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:117.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:117.7},0).to({_off:true},1).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(116).to({_off:false},0).wait(97).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 10
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(145.6,133,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(90.1,133,0.85,0.85);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(92).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:145.3,y:132.9},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:144.2},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:141.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:135.5},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:119.3,y:132.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:106.7,y:132.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:100.6,y:132.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:96.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:94.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:92.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:91.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:90.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:90},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:89.8},0).to({_off:true},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(107).to({_off:false},0).wait(106).to({startPosition:0},0).to({alpha:0},10).wait(35));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.4,217.3,1,1,0,0,0,47.1,13.3);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(122).to({_off:false},0).to({alpha:1},10).wait(78).to({alpha:0},10).wait(38));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,38.4,1,1,0,0,0,119.3,17.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(122).to({_off:false},0).to({alpha:1},10).wait(78).to({alpha:0},10).wait(38));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,123,0.1,0.1,0,0,0,72.5,62.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:73.1,regY:61.4,scaleX:0.12,scaleY:0.12,alpha:0.025},0).wait(1).to({scaleX:0.16,scaleY:0.16,alpha:0.064},0).wait(1).to({scaleX:0.21,scaleY:0.21,y:123.2,alpha:0.127},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:123.4,alpha:0.241},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:150.1,y:123.8,alpha:0.444},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:150,y:124.2,alpha:0.628},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:124.4,alpha:0.737},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:150.1,y:124.6,alpha:0.808},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:150,y:124.7,alpha:0.858},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:124.8,alpha:0.896},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.924},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:124.9,alpha:0.946},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.963},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.976},0).wait(1).to({scaleX:0.97,scaleY:0.97,alpha:0.985},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:150.1,y:125,alpha:0.992},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:150,alpha:0.997},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:150.1,alpha:0.999},0).wait(1).to({regX:72.5,regY:62.5,scaleX:0.98,scaleY:0.98,x:149.5,y:126.1,alpha:1},0).to({scaleX:1.08,scaleY:1.08,x:149.4,y:123.2},63).wait(1).to({regX:73.1,regY:61.4,scaleX:1.12,scaleY:1.12,x:150.1,y:122,alpha:0.986},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:150.2,y:121.9,alpha:0.93},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:150.6,y:121.8,alpha:0.783},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:151.4,y:121.4,alpha:0.434},0).wait(1).to({scaleX:3.52,scaleY:3.52,x:152.1,y:121,alpha:0.166},0).wait(1).to({scaleX:3.84,scaleY:3.84,x:152.3,y:120.9,alpha:0.056},0).wait(1).to({scaleX:3.97,scaleY:3.97,x:152.4,y:120.8,alpha:0.012},0).wait(1).to({regX:72.5,regY:62.4,scaleX:4,scaleY:4,x:150.2,y:125,alpha:0},0).wait(168));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,210.9,1,1,0,0,0,99.1,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(16).to({_off:false},0).to({alpha:1},11).wait(56).to({alpha:0},4).wait(171));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(86).to({alpha:0},5).wait(167));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(175));

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
		{src:"images/300x250_cars_fr_atlas_P_.png", id:"300x250_cars_fr_atlas_P_"},
		{src:"images/300x250_cars_fr_atlas_NP_.jpg", id:"300x250_cars_fr_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;