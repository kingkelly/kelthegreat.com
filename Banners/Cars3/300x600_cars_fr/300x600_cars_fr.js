(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_cars_fr_atlas_P_", frames: [[399,0,88,62],[0,0,235,330],[237,161,112,107],[351,161,123,65],[237,0,160,159]]},
		{name:"300x600_cars_fr_atlas_NP_", frames: [[0,0,300,600],[0,602,267,230]]}
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
	this.spriteSheet = ss["300x600_cars_fr_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["300x600_cars_fr_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["300x600_cars_fr_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CT_dblbbx = function() {
	this.spriteSheet = ss["300x600_cars_fr_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legopngcopy = function() {
	this.spriteSheet = ss["300x600_cars_fr_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rccar = function() {
	this.spriteSheet = ss["300x600_cars_fr_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["300x600_cars_fr_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgKAxIAAhNIgeAAIAAgUIBRAAIAAAUIgeAAIAABNg");
	this.shape.setTransform(109.4,34.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAxIgvg+IAAA+IgVAAIAAhhIAUAAIAtA7IAAg7IAWAAIAABhg");
	this.shape_1.setTransform(99.3,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAAMAIIgMgfIgMAfIAYAAg");
	this.shape_2.setTransform(88.3,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAxIgug+IAAA+IgWAAIAAhhIAUAAIAtA7IAAg7IAVAAIAABhg");
	this.shape_3.setTransform(77.2,34.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_4.setTransform(67.2,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAxIAAhNIgeAAIAAgUIBQAAIAAAUIgdAAIAABNg");
	this.shape_5.setTransform(57.8,34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAxIgug+IAAA+IgWAAIAAhhIAUAAIAtA7IAAg7IAWAAIAABhg");
	this.shape_6.setTransform(47.8,34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAxIAAhhIAVAAIAABhg");
	this.shape_7.setTransform(39.9,34.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAAMAIIgMgfIgMAfIAYAAg");
	this.shape_8.setTransform(32,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbAxIAAg/IgbApIAAAAIgbgpIAAA/IgVAAIAAhhIAXAAIAZApIAZgpIAYAAIAABhg");
	this.shape_9.setTransform(20.4,34.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoAxIAAgQIA1g+IgzAAIAAgTIBPAAIAAARIg1A9IA1AAIAAATg");
	this.shape_10.setTransform(103.3,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkAxIAAhhIBIAAIAAATIgzAAIAAAUIAtAAIAAASIgtAAIAAAVIA0AAIAAATg");
	this.shape_11.setTransform(93.9,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZAxIgug9IAAA9IgWAAIAAhhIAUAAIAtA7IAAg7IAVAAIAABhg");
	this.shape_12.setTransform(83.5,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAxIAAhhIAVAAIAABhg");
	this.shape_13.setTransform(75.6,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAyIgLgEIgKgEIgKgHIANgQQAHAHAHACIAHADIAHABQAHAAAEgDQADgDAAgEQAAgEgDgDQgEgDgLgDIgOgDQgGgDgEgDQgEgDgCgFQgDgFAAgGIAAgBQAAgHADgFQACgFAFgFQAEgDAHgCQAGgCAHAAIAKABQAFAAAEACIAJADIAIAGIgLARQgHgFgGgDQgHgCgFAAQgGAAgDACQgDADAAADIAAABQAAAEAEACQAEADAMADIANAFIAKAEQAEAEACAEQACAFAAAGIAAABQAAAHgDAGQgCAGgFAEQgFADgHADQgGACgIAAIgKgBg");
	this.shape_14.setTransform(68.7,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIATAAIAqBhgAANAIIgNgfIgNAfIAaAAg");
	this.shape_15.setTransform(59,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAyIgKgDIgJgEIgIgHIgGgHIgEgJIgDgJIgBgLIAAAAIABgJIADgKQACgEADgEIAGgIIAHgGQAEgDAFgBIAKgDIAKgBIAMAAIAKADQAGACAKAHIgOARQgGgFgFgCQgGgDgIAAQgFAAgFADQgFACgEAEQgEAFgCAFQgCAGAAAFIAAAAQAAAGACAHQACAFAEAFQAEAEAFACQAGACAFAAQAGAAAFgCQAGgBAEgDIAAgOIgWAAIAAgSIArAAIAAAqQgLAIgHADQgGADgGABIgMABIgKgBg");
	this.shape_16.setTransform(47.9,18.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdAxIgJgWIgoAAIgJAWIgWAAIAqhhIASAAIArBhgAANAIIgNgfIgMAfIAZAAg");
	this.shape_17.setTransform(37.6,18.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAbAxIAAg/IgbApIAAAAIgbgoIAAA+IgVAAIAAhhIAXAAIAZApIAZgpIAYAAIAABhg");
	this.shape_18.setTransform(26,18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("Aq6D+IAAn6IV1AAIAAH6g");
	this.shape_19.setTransform(63.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-0.4,139.7,50.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.CT_dblbbx();
	this.instance.parent = this;
	this.instance.setTransform(-21,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-21,24,235,330), null);


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
	this.shape.graphics.f("#000000").s().p("AgpAyIAAgRIA2g/Ig0AAIAAgTIBRAAIAAAQIg2BAIA2AAIAAATg");
	this.shape.setTransform(241.4,225.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAyIAAhjIBKAAIAAAUIg0AAIAAAUIAuAAIAAASIguAAIAAAWIA1AAIAAATg");
	this.shape_1.setTransform(231.8,225.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAyIAAgoIgnAAIAAAoIgWAAIAAhjIAWAAIAAAoIAnAAIAAgoIAWAAIAABjg");
	this.shape_2.setTransform(221.3,225.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAzIgKgDQgFgCgEgDIgIgGIgGgIIgEgIIgDgKIgBgLIABgJIADgKIAEgJIAGgHIAIgHIAJgFIAKgDIAKgBQAHAAAGACIAKADQAHACAKAJIgOAQQgHgGgFgCQgHgDgHAAQgGAAgFACQgFADgEAEQgEAEgCAGQgCAGAAAFIAAAAQAAAHACAFQACAGAEAEQAEAFAFACQAFADAGAAQAGAAAIgEQAGgCAGgGIAOAOIgIAIIgJAFQgFADgGABIgNABIgJgBg");
	this.shape_3.setTransform(210.8,225.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAyIAAhPIgfAAIAAgUIBSAAIAAAUIgeAAIAABPg");
	this.shape_4.setTransform(196.5,225.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaAyIgwg+IAAA+IgWAAIAAhjIAVAAIAuA8IAAg8IAVAAIAABjg");
	this.shape_5.setTransform(186.2,225.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAeAyIgJgWIgqAAIgJAWIgWAAIArhkIATAAIArBkgAANAJIgNggIgNAgIAaAAg");
	this.shape_6.setTransform(174.9,225.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaAyIgwg+IAAA+IgVAAIAAhjIAUAAIAuA8IAAg8IAWAAIAABjg");
	this.shape_7.setTransform(163.7,225.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AglAyIAAhjIBKAAIAAAUIg0AAIAAAUIAuAAIAAASIguAAIAAAWIA1AAIAAATg");
	this.shape_8.setTransform(153.4,225.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAyIAAhPIgeAAIAAgUIBSAAIAAAUIgfAAIAABPg");
	this.shape_9.setTransform(143.8,225.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAaAyIgwg+IAAA+IgVAAIAAhjIAUAAIAuA8IAAg8IAWAAIAABjg");
	this.shape_10.setTransform(133.5,225.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAyIAAhjIAVAAIAABjg");
	this.shape_11.setTransform(125.5,225.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAeAyIgJgWIgqAAIgJAWIgWAAIArhkIATAAIArBkgAANAJIgNggIgNAgIAaAAg");
	this.shape_12.setTransform(117.5,225.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcAyIAAhBIgcAqIAAAAIgbgpIAABAIgWAAIAAhjIAYAAIAZAqIAbgqIAXAAIAABjg");
	this.shape_13.setTransform(105.6,225.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(97.8,217.6,150.4,17.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgrBLIAAiSIApAAIAAAeIAHgOQAEgGAGgEQAGgFAHgCQAHgCAJAAIAAAsIgCAAQgKAAgJADQgIADgGAHQgFAGgDAKQgDAJAAANIAAA2g");
	this.shape.setTransform(237.2,93.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgkBJQgJgDgHgGQgHgFgDgJQgEgIAAgLIAAgBQAAgLAEgJQAEgJAIgFQAIgGALgDQAKgDAOAAQAOAAAUAHIAAgDQAAgHgCgFQgBgEgEgEQgEgDgGgCQgGgCgHAAQgLABgKACQgIABgLAEIgLgfQAOgGALgDQAPgEAQAAQARAAAMAFQANAEAIAIQAIAIAEAMQADAMAAAPIAABUIgoAAIAAgQQgIAJgKAFQgLAEgOAAQgLABgJgDgAgTANQgHAGAAAJIAAABQAAAIAGAGQAGAEALAAQAGAAAGgCQAGgCAEgEQAEgCADgGQACgEAAgGIAAgHQgMgGgOABQgNAAgIAEg");
	this.shape_1.setTransform(222.5,93.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AAdBJIgdgtIgdAtIgrAAIAzhJIgyhIIAtAAIAaArIAcgrIArAAIgxBHIAzBKg");
	this.shape_2.setTransform(207.2,93.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("AgUBkIAAiSIApAAIAACSgAgVg+IAAglIArAAIAAAlg");
	this.shape_3.setTransform(195,91.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("AhLBgIAAi/IBOAAQAQAAAOAFQAOAFAJAJQAKAIAFANQAFAMAAAOIAAABQAAAIgCAIQgBAHgDAFQgGANgLAIQgKAJgOAEQgOAEgQAAIggAAIAAA6gAghABIAhAAQAHAAAHgBQAGgCAEgFQAFgDACgGQACgFAAgGIAAgBQAAgHgCgFQgDgGgEgDQgFgEgGgCQgGgCgHAAIghAAg");
	this.shape_4.setTransform(182.6,91.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AgPAmQgHgDgGgGQgFgGgDgHQgEgIAAgIIAAAAQAAgIAEgHQADgHAFgGQAGgGAHgDQAIgDAHAAQAIAAAIADQAHADAGAGQAGAGADAHQADAHAAAIIAAAAQAAAIgDAIQgDAHgGAGQgGAGgHADQgIADgIAAQgHAAgIgDg");
	this.shape_5.setTransform(165.8,91.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AgvBdQgJgDgIgEIAOgfQAJAGAJAAQAFAAADgCQADgCADgFIg5iSIAsAAIAgBiIAghiIArAAIg4CUQgEAMgFAHQgEAJgGAFQgFAEgHADQgHACgJAAQgLgBgJgCg");
	this.shape_6.setTransform(150.8,96.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("AgZBHQgOgGgKgKQgKgKgHgOIgDgOIgCgQIAAgBQAAgOAFgOQAFgOAKgLQAKgKANgHIAOgDQAHgDAIAAQAJAAAIADQAHABAHADIANAIQAFAEAFAGQAIAKAEAPQAFAOAAAPIAAALIhmAAQACAHADAGQADAFAFAEQAFADAFACQAGACAGAAQAKAAAJgEQAIgDAIgIIAZAVQgFAGgHAGQgGAFgIADQgHADgJACQgJACgKAAQgTgCgKgDgAAfgLQAAgHgDgGQgCgFgFgFQgDgEgGgCQgFgCgGAAQgGAAgFACQgFADgEADQgFAFgCAFIgFANIA+AAIAAAAg");
	this.shape_7.setTransform(134.9,93.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AAaBLIAAhRQAAgHgCgGQgCgGgDgDQgDgEgFgCQgFgCgGAAQgFAAgEACQgFACgEAEQgDADgCAGQgCAGAAAHIAABRIgpAAIAAiSIApAAIAAAVQAJgLAJgGIAKgFQAHgCAHAAQAMAAAJAEQAKAEAGAHQAHAHADAKQADAKAAANIAABeg");
	this.shape_8.setTransform(118.1,93.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AgcBHQgVgKgJgHIASgcQALAJAMAFQAMAEAKAAQAIAAAFgDQAEgDAAgFIAAAAQAAgHgJgEIgVgGQgVgHgIgHQgGgEgEgIQgEgHAAgLIAAAAQAAgLAEgJQAEgIAHgHQAIgFAKgDQAKgEAJAAQAOAAAPAFQAPAEAMAIIgQAdQgMgGgKgEQgKgDgIAAQgHAAgEACQgDADAAAFIAAAAQAAAGAJAEIATAIIAQAGQAIADAGAFQAHAEADAHQAFAIAAAJIAAABQAAAMgFAJQgEAJgIAGQgHAFgLADQgKADgLAAQgQAAgQgFg");
	this.shape_9.setTransform(102.4,93.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgUBkIAAiSIApAAIAACSgAgVg+IAAglIArAAIAAAlg");
	this.shape_10.setTransform(91.6,91.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("AhXBgIAAi/IBKAAQAMAAAJACQAKACAKAEQAJADAIAFQAIAFAHAHQAHAGAFAIQAFAHAEAJQADAIACAKQACAJAAAKIAAAAQAAAKgCAKIgFASQgEAIgFAIQgFAIgHAGQgHAHgIAFQgIAFgJADQgKAEgKACQgJACgMAAgAgtA6IAgAAQANAAAKgEQAKgEAIgIQAIgIAEgKQAEgLAAgMIAAgBQAAgMgEgKQgEgLgIgIQgIgHgKgEQgKgFgNAAIggAAg");
	this.shape_11.setTransform(77.3,91.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgZBHQgOgGgKgKQgKgKgHgOIgDgOIgCgQIAAgBQAAgOAFgOQAFgOALgLQAJgKANgHIAOgDQAIgDAHAAQAIAAAIADQAJABAGADIAMAIQAGAEAFAGQAIAKAFAPQAEAOAAAPIgBALIhlAAQACAHADAGQADAFAFAEQAEADAGACQAGACAGAAQAKAAAJgEQAIgDAIgIIAZAVQgGAGgGAGQgHAFgGADQgIADgJACQgIACgKAAQgVgCgJgDgAAfgLQgBgHgCgGQgDgFgDgFQgEgEgFgCQgGgCgGAAQgGAAgFACQgFADgFADQgDAFgEAFIgEANIA+AAIAAAAg");
	this.shape_12.setTransform(49.5,93.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("AgiBgQgMgFgKgJQgJgLgFgNIgFgPIgBgSIAAAAQAAgNAGgSQAFgOAJgLQAKgJAMgFQAMgFANAAQAIAAAGACQAHABAFAEQAKAFAJAKIAAhIIApAAIAADGIgpAAIAAgVQgJAMgKAFIgNAGQgFABgIAAQgNAAgMgFgAgNgMQgGADgFAGQgFAEgCAHQgDAIAAAJIAAAAQAAAJADAIQACAHAFAGQAFAFAGADQAHADAHAAQAHAAAGgDQAHgDAEgFQAGgGACgHQADgIAAgJIAAAAQAAgJgDgIQgCgHgGgEQgEgGgHgDQgGgCgHAAQgHgBgHADg");
	this.shape_13.setTransform(31.6,91.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgUBfQgLgDgJgEQgJgEgIgHQgIgFgGgIIAdgbQAKALALAGQALAFANAAQAMAAAIgFQAHgHAAgKIAAgBQAAgGgCgFQgDgEgEgDQgFgEgHgBQgHgCgIABIgSAAIgGgaIAtguIhLAAIAAgkICBAAIAAAfIgxAuQALACAIAEQAKAEAHAFQAHAGAEAKQAFAKAAAMIAAAAQAAAOgFALQgFAMgJAIQgJAJgMAFQgNAEgQAAQgMAAgLgCg");
	this.shape_14.setTransform(246.3,60.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AgPBhQgLgCgLgEQgKgEgKgGQgJgGgJgHIAZgeQAOALANAGIAOAFIAPABQANAAAHgFQAIgEAAgJIAAAAQAAgJgIgEQgHgGgXgGQgQgEgKgEQgMgEgIgGQgJgGgEgJQgEgKAAgOIAAgBQAAgNAFgKQAEgLAKgIQAJgHAMgEQAMgEAPAAQAJAAAKABQAKACAJADIARAHIAPALIgWAgQgNgKgMgEQgNgFgLAAQgLAAgHAFQgGAEAAAHIAAABQAAAJAIAFQAIAFAYAGQAPAEALAFQALAFAIAFQAIAHAEAJQAEAJAAANIAAAAQAAAOgFALQgGALgJAIQgJAIgNAEQgNADgQAAQgKAAgKgBg");
	this.shape_15.setTransform(221,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("AhIBgIAAi/ICQAAIAAAmIhmAAIAAAnIBZAAIAAAkIhZAAIAAAoIBnAAIAAAmg");
	this.shape_16.setTransform(203.7,60.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("AhEBgIAAi/IAqAAIAACYIBfAAIAAAng");
	this.shape_17.setTransform(186.4,60.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AgVBhQgKgCgJgEQgJgDgIgGIgPgMQgHgGgFgIIgJgRQgEgJgCgKQgCgJAAgKIAAgBQAAgJACgKQACgJAEgJQAEgJAFgIQAFgIAHgHQAHgHAIgFQAIgGAJgDQAKgEAKgCQAKgCAKAAQALAAALACQAKACAJAEQAJADAIAGIAPAMIAMAOQAGAIADAJQAEAJACAKQACAJAAAKIAAAAQAAAKgCAKQgCAJgEAJIgJARQgFAIgHAHQgHAHgIAFQgIAFgJAEQgKAEgKACQgKACgLAAQgKAAgLgCgAgXg2QgKAEgIAIQgHAJgEAKQgFALAAAMIAAAAQAAAMAFALQAEALAIAIQAHAJALAEQALAFALAAQANAAALgEQAKgFAIgIQAHgJAFgKQAEgLAAgMIAAgBQAAgLgFgLQgEgLgHgIQgIgJgLgEQgLgFgMAAQgMAAgLAFg");
	this.shape_18.setTransform(165.6,60.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C61E24").s().p("AAyBgIhdh5IAAB5IgpAAIAAi/IAnAAIBZB1IAAh1IApAAIAAC/g");
	this.shape_19.setTransform(143.2,60.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C61E24").s().p("AgLBhQgKgCgJgDQgKgEgIgFQgIgFgGgHIgMgOQgFgIgEgJQgEgJgBgKQgCgKAAgKIAAgBQAAgJACgKQACgJADgJQAEgJAFgIQAFgIAHgHQAHgHAIgFQAIgGAJgDQAJgEAKgCQAKgCAKAAQANAAALACQAKABAJAEQAMAEAUAPIgaAgQgMgKgKgEQgNgFgPAAQgKAAgLAFQgKAEgHAIQgIAJgEAKQgEALAAAMIAAAAQAAANAEALQAEALAIAJQAIAIAKAEQALAFAMAAQALAAAKgDQALgDAHgGIAAgbIgqAAIAAgjIBTAAIAABSQgVAQgOAFIgWAHQgMACgNAAQgKAAgKgCg");
	this.shape_20.setTransform(121.5,60.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C61E24").s().p("AA5BhIgRgrIhQAAIgSArIgrAAIBSjBIAnAAIBSDBgAAZARIgZg+IgZA+IAyAAg");
	this.shape_21.setTransform(101.4,60.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C61E24").s().p("AhQBgIAAi/IBYAAQAQAAANAFQAMAEAIAIQAHAHADAIQAEAIAAAKIAAAAQAAAIgDAHQgBAGgEAFQgGAJgLAHQAIADAHADQAGAEAFAGQAEAFADAIQACAHABAKIAAAAQgBANgFAKQgFAKgJAHQgJAGgOADQgNAEgQAAgAgoA7IAyAAQAOAAAHgFQAJgGgBgKIAAAAQAAgLgHgFQgEgDgGgBQgGgBgIAAIgwAAgAgogRIAoAAQANAAAHgFQAJgFAAgLIAAAAQAAgKgIgFQgGgFgOAAIgpAAg");
	this.shape_22.setTransform(81.3,60.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C61E24").s().p("AgPBhQgLgCgLgEQgKgEgKgGQgJgGgJgHIAZgeQAOALANAGIAOAFIAPABQANAAAHgFQAIgEAAgJIAAAAQAAgJgIgEQgHgGgXgGQgQgEgKgEQgMgEgIgGQgJgGgEgJQgEgKAAgOIAAgBQAAgNAFgKQAEgLAKgIQAJgHAMgEQAMgEAPAAQAJAAAKABQAKACAJADIARAHIAPALIgWAgQgNgKgMgEQgNgFgLAAQgLAAgHAFQgGAEAAAHIAAABQAAAJAIAFQAIAFAYAGQAPAEALAFQALAFAIAFQAIAHAEAJQAEAJAAANIAAAAQAAAOgFALQgGALgJAIQgJAIgNAEQgNADgQAAQgKAAgKgBg");
	this.shape_23.setTransform(53.7,60.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C61E24").s().p("AhIBgIAAi/ICPAAIAAAmIhlAAIAAAnIBZAAIAAAkIhZAAIAAAoIBnAAIAAAmg");
	this.shape_24.setTransform(36.5,60.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C61E24").s().p("AhEBgIAAi/IAqAAIAACYIBfAAIAAAng");
	this.shape_25.setTransform(19.1,60.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLBIIgQgFIgPgGQgHgFgGgGIASgVQALAIAJAEIALAEIAKABQAKgBAFgDQAGgEAAgGIAAgBQAAgFgGgEQgFgEgQgFIgUgFIgPgIQgGgEgDgHQgEgIAAgJIAAgBQAAgKAEgHQADgJAIgFQAGgGAJgDQAKgDAKAAQAHAAAHACIAOADQAGACAGAEIAMAHIgQAXQgKgGgJgEQgKgDgHAAQgJAAgFADQgFADABAGIAAAAQAAAIAFADQAGADASAFQAMADAHAEQAJADAGAEQAFAFADAGQADAHAAAKIAAAAQAAAKgDAJQgFAIgGAGQgIAFgJADQgJADgMAAIgPgBg");
	this.shape_26.setTransform(270.4,31.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag1BHIAAiNIBqAAIAAAcIhLAAIAAAcIBCAAIAAAbIhCAAIAAAeIBMAAIAAAcg");
	this.shape_27.setTransform(257.6,31.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgyBHIAAiNIAfAAIAABxIBGAAIAAAcg");
	this.shape_28.setTransform(244.8,31.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgyBHIAAiNIAfAAIAABxIBGAAIAAAcg");
	this.shape_29.setTransform(232.3,31.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgOBHIAAiNIAdAAIAACNg");
	this.shape_30.setTransform(222.1,31.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AArBHIgOgfIg6AAIgOAfIgfAAIA8iOIAdAAIA8COgAASAMIgSgtIgSAtIAkAAg");
	this.shape_31.setTransform(210.7,31.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgNBHIg5iOIAiAAIAlBkIAlhkIAhAAIg6COg");
	this.shape_32.setTransform(197.1,31.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZBEIgLgFIgJgHIgHgJIgFgLIgDgMIgBgPIAAhQIAfAAIAABPQAAAJACAGQACAHAEAEQAEAFAGACQAGACAGAAQAHAAAGgCQAFgCAEgEQAEgFACgGQACgGAAgJIAAhQIAgAAIAABPIgBAPIgEANQgCAGgDAFIgHAJIgJAHIgLAFQgQAEgJAAQgSgBgHgDg");
	this.shape_33.setTransform(181.9,31.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgPBIQgIgBgHgEQgGgCgGgEIgLgJIgJgLQgEgGgDgGQgDgGgBgIIgBgOIAAgBIABgOIAEgNQADgHAEgGIAJgLIALgJQAGgEAHgDQAHgDAHgBIAPgBQAIAAAIABQAHABAHADQAHADAGAEIALAJQAFAFAEAGQAEAFADAIIAEANQABAHAAAHIAAAAIgBAPIgEAOIgHAMIgJALIgLAJQgGAEgHACQgHAEgIABQgHABgIABIgPgCgAgRgoQgHAEgGAFQgGAHgDAIQgDAHAAAJIAAAAQAAAJADAJQADAHAGAGQAGAHAIADQAIADAIABQAJgBAIgDQAIgDAGgHQAFgGAEgHQADgIAAgJIAAgBQAAgIgEgIQgDgIgFgHQgGgFgIgEQgIgDgJAAQgJAAgIADg");
	this.shape_34.setTransform(165.6,31.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAZBHIgegtIgYAAIAAAtIgfAAIAAiNIBAAAQAJAAAPAEQAKADAHAIQAGAGADAHQADAJAAAKIAAAAQAAAJgCAHQgCAHgEAEQgEAGgGAEQgFAEgHACIAiAzgAgdgBIAfAAQAFAAAFgCQAEgBADgCQADgDACgEQACgDAAgFIAAgBQAAgFgCgDQgCgEgDgCQgDgDgFgCIgKgBIgeAAg");
	this.shape_35.setTransform(150.2,31.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgPBHIAAhwIgrAAIAAgdIB1AAIAAAdIgsAAIAABwg");
	this.shape_36.setTransform(135.8,31.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgLBIIgQgFIgPgGQgHgFgGgGIASgVQALAIAJAEIALAEIAKABQAKgBAFgDQAGgEAAgGIAAgBQAAgFgGgEQgFgEgQgFIgUgFIgPgIQgGgEgDgHQgEgIAAgJIAAgBQAAgKAEgHQADgJAIgFQAGgGAJgDQAKgDAKAAQAHAAAHACIAOADQAGACAGAEIAMAHIgQAXQgKgGgJgEQgKgDgHAAQgJAAgFADQgFADABAGIAAAAQAAAIAFADQAGADASAFQAMADAHAEQAJADAGAEQAFAFADAGQADAHAAAKIAAAAQAAAKgDAJQgFAIgGAGQgIAFgJADQgJADgMAAIgPgBg");
	this.shape_37.setTransform(116.5,31.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgPBIQgIgBgHgEQgGgCgGgEIgLgJIgJgLQgEgGgDgGQgDgGgBgIIgBgOIAAgBIABgOIAEgNQADgHAEgGIAJgLIALgJQAGgEAHgDQAHgDAHgBIAPgBQAIAAAIABQAHABAHADQAHADAGAEIALAJQAFAFAEAGQAEAFADAIIAEANQABAHAAAHIAAAAIgBAPIgEAOIgHAMIgJALIgLAJQgGAEgHACQgHAEgIABQgHABgIABIgPgCgAgRgoQgHAEgGAFQgGAHgDAIQgDAHAAAJIAAAAQAAAJADAJQADAHAGAGQAGAHAIADQAIADAIABQAJgBAIgDQAIgDAGgHQAFgGAEgHQADgIAAgJIAAgBQAAgIgEgIQgDgIgFgHQgGgFgIgEQgIgDgJAAQgJAAgIADg");
	this.shape_38.setTransform(101.7,31.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgNBHIg5iOIAjAAIAkBkIAkhkIAiAAIg6COg");
	this.shape_39.setTransform(86.4,31.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLBIIgQgFIgOgGQgIgFgGgGIASgVQAKAIAKAEIALAEIALABQAJgBAGgDQAFgEAAgGIAAgBQAAgFgFgEQgGgEgRgFIgTgFIgPgIQgGgEgDgHQgEgIABgJIAAgBQgBgKAEgHQAEgJAGgFQAHgGAJgDQAJgDALAAQAHAAAHACIAOADQAGACAHAEIALAHIgRAXQgJgGgJgEQgJgDgJAAQgIAAgFADQgEADgBAGIAAAAQAAAIAHADQAFADASAFQAMADAHAEQAJADAFAEQAGAFADAGQADAHAAAKIAAAAQAAAKgEAJQgDAIgIAGQgHAFgJADQgKADgLAAIgPgBg");
	this.shape_40.setTransform(66.1,31.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag1BHIAAiNIBqAAIAAAcIhLAAIAAAcIBCAAIAAAbIhCAAIAAAeIBMAAIAAAcg");
	this.shape_41.setTransform(53.2,31.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgPBHIAAhwIgrAAIAAgdIB1AAIAAAdIgsAAIAABwg");
	this.shape_42.setTransform(39.6,31.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZBEIgLgFIgJgHIgHgJIgFgLIgDgMIgBgPIAAhQIAfAAIAABPQAAAJACAGQACAHAEAEQAEAFAGACQAGACAGAAQAHAAAGgCQAFgCAEgEQAEgFACgGQACgGAAgJIAAhQIAgAAIAABPIgBAPIgEANQgCAGgDAFIgHAJIgJAHIgLAFQgQAEgJAAQgSgBgHgDg");
	this.shape_43.setTransform(25.4,31.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgPBIQgIgBgHgEQgGgCgGgEIgLgJIgJgLQgEgGgDgGQgDgGgBgIIgBgOIAAgBIABgOIAEgNQADgHAEgGIAJgLIALgJQAGgEAHgDQAHgDAHgBIAPgBQAIAAAIABQAHABAHADQAHADAGAEIALAJQAFAFAEAGQAEAFADAIIAEANQABAHAAAHIAAAAIgBAPIgEAOIgHAMIgJALIgLAJQgGAEgHACQgHAEgIABQgHABgIABIgPgCgAgRgoQgHAEgGAFQgGAHgDAIQgDAHAAAJIAAAAQAAAJADAJQADAHAGAGQAGAHAIADQAIADAIABQAJgBAIgDQAIgDAGgHQAFgGAEgHQADgIAAgJIAAgBQAAgIgEgIQgDgIgFgHQgGgFgIgEQgIgDgJAAQgJAAgIADg");
	this.shape_44.setTransform(9.1,31.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgPBHIAAhwIgrAAIAAgdIB1AAIAAAdIgsAAIAABwg");
	this.shape_45.setTransform(-5.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-14.1,14.5,293.3,94.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-0.1,-5.1,-0.1,5.1).s().p("AvOAzIAAhlIedAAIAABlg");
	this.shape.setTransform(42.1,163.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],-0.1,-5.1,-0.1,5.1).s().p("AvOAzIAAhlIedAAIAABlg");
	this.shape_1.setTransform(42.1,182.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AAaAzIgwg/IAAA/IgWAAIAAhlIAVAAIAuA+IAAg+IAWAAIAABlg");
	this.shape_2.setTransform(51.1,186.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgKAzIAAhlIAVAAIAABlg");
	this.shape_3.setTransform(42.9,186.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgSAxQgEgBgEgDIgFgFIgGgGIgDgIIgCgJIgCgKIAAg6IAXAAIAAA5QAAAGABAFQACAFADADQADADAEACQAEABAEAAQAFAAAEgBQAEgCADgDQADgDACgFQABgEAAgGIAAg6IAWAAIAAA5IgBALIgCAJIgDAIIgGAGIgGAFQgDADgFABQgLADgHAAQgMgBgGgCg");
	this.shape_4.setTransform(35,186.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgLAyIgJgDQgGgDgIgIIAOgPQAFAFAEACQAFADAFAAIAFgBIAEgDIADgFIABgIIAAhBIAXAAIAABCQAAAJgDAHQgCAHgFAEQgFAFgGACQgHADgHAAQgGAAgFgCg");
	this.shape_5.setTransform(25,186.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgOAyQgIgDgFgFIgFgHIgEgIIgDgKIAAgOIAAAAQAAgHACgOIAEgKIAEgIIAHgGIAIgFQAEgDAFgBIAJgBQAIAAAKADQAHADAIAFIgNASQgFgFgEgBQgFgCgGAAQgEAAgFACQgDACgDAEIgDAIIgCAHIAKgEQAFgCAFAAQAIAAAHACQAGACAFAEQAEAEAEAFQACAGAAAIQAAAIgDAHQgCAGgGAFQgFAEgIADQgHADgHAAQgMgBgEgCgAgGAEIgGADQgCACgBADQgBADAAADIAAAAIABAGIADAFQADACADABIAHABIAHgBIAFgDQADgCAAgDQACgCAAgEQAAgDgCgDQAAgDgDgCQgCgCgEgBIgHgBIgGABg");
	this.shape_6.setTransform(12.2,186.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AAAAzIAAhPIgRAFIgEgSIAcgJIAPAAIAABlg");
	this.shape_7.setTransform(3.8,186.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgmAzIAAhlIBMAAIAAAUIg1AAIAAAVIAvAAIAAATIgvAAIAAAVIA2AAIAAAUg");
	this.shape_8.setTransform(72.7,168.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AgkAzIAAhlIAXAAIAABQIAyAAIAAAVg");
	this.shape_9.setTransform(63.6,168.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AgmAzIAAhlIBMAAIAAAUIg1AAIAAAVIAvAAIAAATIgvAAIAAAVIA2AAIAAAUg");
	this.shape_10.setTransform(49.7,168.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AgkAzIAAhlIAXAAIAABQIAyAAIAAAVg");
	this.shape_11.setTransform(40.5,168.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AgkAzIAAhlIAXAAIAABQIAyAAIAAAVg");
	this.shape_12.setTransform(31.5,168.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AAfAzIgKgXIgqAAIgJAXIgXAAIArhlIAUAAIAsBlgAANAJIgNggIgNAgIAaAAg");
	this.shape_13.setTransform(21,168.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AgIAzIgLgDIgKgFIgKgHIANgQQAHAGAHADIAIADIAIAAQAGAAAEgCQAEgDAAgEQAAgFgEgCQgEgDgMgDIgNgFQgHgCgEgDQgEgDgDgFQgCgFAAgHIAAgBQAAgHADgFQACgGAFgEQAFgEAGgCQAHgCAHAAIAKAAIAKADIAJAEIAIAFIgMARQgGgFgHgCQgGgDgGAAQgGAAgEADQgDACAAAEQAAAFAEADQAFACAMAEIAOAEQAGADAEADQAEADACAFQACAFAAAGIAAABQAAAHgCAGQgDAGgFAEQgFAEgHACQgHACgIAAIgLgBg");
	this.shape_14.setTransform(10.7,168.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AAaAzIgwhAIAABAIgWAAIAAhlIAVAAIAuA+IAAg+IAWAAIAABlg");
	this.shape_15.setTransform(-4,168.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AgmAzIAAhlIBMAAIAAAUIg1AAIAAAVIAvAAIAAATIgvAAIAAAVIA2AAIAAAUg");
	this.shape_16.setTransform(-14.3,168.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.3,158.3,194.9,37.9);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},123).wait(54));

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
(lib._300x600_cars_fr = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47.6,590,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(212).to({startPosition:196},0).to({alpha:0,startPosition:206},10).to({_off:true},1).wait(40));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,424.5,0.133,0.133,0,0,0,63.9,18.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(247).to({_off:false},0).wait(1).to({regX:63.5,regY:24.9,scaleX:0.27,scaleY:0.27,x:149.8,y:426.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:149.7,y:427.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:149.5,y:429.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:430.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:149.4,y:431.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:431.9},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:432.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:432.3},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:149.3,y:432.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:149.4,y:432.6},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({regX:63.6,regY:18.5,scaleX:1.33,scaleY:1.33,x:150,y:424.5},0).wait(4));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(224).to({_off:false},0).to({alpha:1},15).wait(24));

	// Layer 8
	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,149,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,176.6,0.9,0.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:149.9,y:152.4},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:149.8,y:159.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:149.7,y:167.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.6,y:170.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:172.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:174.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:175},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:175.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.5,y:175.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:176},0).to({_off:true},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).wait(98).to({startPosition:0},0).to({alpha:0},10).wait(41));

	// Layer 7
	this.instance_5 = new lib.Tween14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.5,225.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.4,246.7,0.9,0.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:150.4,y:228.1},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:150.3,y:233.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:150.1,y:239.5},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:242.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:150,y:243.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:244.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:245.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:245.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:246.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:246.2},0).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).wait(94).to({startPosition:0},0).to({alpha:0},10).wait(41));

	// Layer 9
	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,331.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,342.1,0.9,0.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(111).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:149.9,y:332.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:149.8,y:335.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:149.7,y:338.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.6,y:339.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:340.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:340.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:341.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:341.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.5,y:341.6},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).wait(90).to({startPosition:0},0).to({alpha:0},10).wait(41));

	// Layer 10
	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,454.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween19("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,452.8,0.9,0.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:149.9,y:454.2},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:149.8,y:453.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:149.7,y:453},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.6,y:452.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:452.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:452.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:452.4},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:452.3},0).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(126).to({_off:false},0).wait(86).to({startPosition:0},0).to({alpha:0},10).wait(41));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.7,276.8,1.344,1.344,0,0,0,46.9,13.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({alpha:1},12).wait(103).to({alpha:0},10).wait(41));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(140.1,38.5,0.9,0.9,0,0,0,119.4,17.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(97).to({_off:false},0).to({alpha:1},12).wait(103).to({alpha:0},10).wait(41));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(152.8,254,0.121,0.121,0,0,0,72.5,63);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:71.4,regY:62.6,scaleX:0.13,scaleY:0.13,x:152.6,y:253.9,alpha:0.007},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:152.5,alpha:0.033},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:152.4,y:253.8,alpha:0.097},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:152,alpha:0.259},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:151.3,y:253.7,alpha:0.529},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:150.9,y:253.6,alpha:0.692},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:150.6,y:253.5,alpha:0.789},0).wait(1).to({scaleX:1,scaleY:1,x:150.5,alpha:0.853},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:150.3,alpha:0.899},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.932},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:150.2,y:253.4,alpha:0.956},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:253.5,alpha:0.974},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:150.1,alpha:0.986},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.994},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.999},0).wait(1).to({regX:72.7,regY:62.5,scaleX:1.15,scaleY:1.15,x:151.4,y:253.9,alpha:1},0).to({regY:62.6,scaleX:1.33,scaleY:1.33,y:254},66).wait(1).to({regX:71.4,scaleX:1.39,scaleY:1.39,x:149.5,alpha:0.988},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:149.3,alpha:0.938},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:148.6,y:254.1,alpha:0.776},0).wait(1).to({scaleX:4.52,scaleY:4.52,x:146.5,y:254.2,alpha:0.333},0).wait(1).to({scaleX:5.41,scaleY:5.41,x:145.6,alpha:0.147},0).wait(1).to({scaleX:5.8,scaleY:5.8,x:145.2,y:254.3,alpha:0.066},0).wait(1).to({scaleX:5.99,scaleY:5.99,x:145,y:254.2,alpha:0.025},0).wait(1).to({scaleX:6.08,scaleY:6.08,x:144.9,y:254.3,alpha:0.005},0).wait(1).to({regX:72.7,scaleX:6.11,scaleY:6.11,x:152.8,y:254.2,alpha:0},0).wait(172));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(297.8,49.9,2.1,2.1,0,0,0,99,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({alpha:1},14).wait(59).to({alpha:0},4).wait(176));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({alpha:0},5).wait(171));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.1,298.1,306,606);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_cars_fr_atlas_P_.png", id:"300x600_cars_fr_atlas_P_"},
		{src:"images/300x600_cars_fr_atlas_NP_.jpg", id:"300x600_cars_fr_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;