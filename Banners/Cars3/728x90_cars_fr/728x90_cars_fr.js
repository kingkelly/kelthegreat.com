(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_cars_fr_atlas_P_", frames: [[223,92,88,59],[109,92,112,66],[0,0,375,90],[0,92,107,95],[377,0,123,116]]},
		{name:"728x90_cars_fr_atlas_NP_", frames: [[0,0,728,90],[730,0,267,230]]}
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
	this.spriteSheet = ss["728x90_cars_fr_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["728x90_cars_fr_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.carbg = function() {
	this.spriteSheet = ss["728x90_cars_fr_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["728x90_cars_fr_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ct_leader = function() {
	this.spriteSheet = ss["728x90_cars_fr_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lego = function() {
	this.spriteSheet = ss["728x90_cars_fr_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["728x90_cars_fr_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgJAuIAAhIIgcAAIAAgTIBLAAIAAATIgcAAIAABIg");
	this.shape.setTransform(106.1,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXAuIgrg6IAAA6IgUAAIAAhbIATAAIAqA4IAAg4IATAAIAABbg");
	this.shape_1.setTransform(96.8,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbAuIgIgVIglAAIgJAVIgUAAIAnhbIARAAIAnBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_2.setTransform(86.5,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAuIgrg6IAAA6IgUAAIAAhbIATAAIApA4IAAg4IAUAAIAABbg");
	this.shape_3.setTransform(76.3,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghAuIAAhbIBDAAIAAASIgvAAIAAATIApAAIAAAQIgpAAIAAAUIAvAAIAAASg");
	this.shape_4.setTransform(67,26.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAuIAAhIIgcAAIAAgTIBLAAIAAATIgcAAIAABIg");
	this.shape_5.setTransform(58.2,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXAuIgrg6IAAA6IgUAAIAAhbIATAAIApA4IAAg4IAUAAIAABbg");
	this.shape_6.setTransform(48.9,26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAuIAAhbIATAAIAABbg");
	this.shape_7.setTransform(41.6,26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbAuIgIgVIglAAIgJAVIgUAAIAnhbIARAAIAnBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_8.setTransform(34.3,26.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaAuIAAg7IgaAmIAAAAIgZgmIAAA7IgUAAIAAhbIAWAAIAXAnIAYgnIAVAAIAABbg");
	this.shape_9.setTransform(23.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAuIAAgQIAxg5IgvAAIAAgRIBJAAIAAAOIgxA6IAxAAIAAASg");
	this.shape_10.setTransform(100.5,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAuIAAhaIBDAAIAAASIgvAAIAAASIApAAIAAARIgpAAIAAATIAvAAIAAASg");
	this.shape_11.setTransform(91.7,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYAuIgsg6IAAA6IgTAAIAAhaIASAAIApA2IAAg2IAVAAIAABag");
	this.shape_12.setTransform(82.1,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAuIAAhaIATAAIAABag");
	this.shape_13.setTransform(74.8,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAuIgLgDQgFgCgEgDQgFgCgEgEIAMgOQAHAGAGACIAHACIAGABQAHAAADgCQAEgDgBgEQABgDgEgDQgEgCgKgDIgMgEIgKgFQgEgCgCgFQgCgEAAgHIAAAAQAAgHACgFQADgEAEgFQAEgDAGgCQAGgCAGAAIAJABIAJACIAIAEIAHAFIgKAPQgGgEgGgCQgGgDgFAAQgFAAgEACQgDADAAADQAAAEAEADIAPAFIANAEIAJAFQAEADABAEQACAFAAAGQAAAGgCAFQgDAGgEADQgEAEgHACQgGACgHAAIgJgBg");
	this.shape_14.setTransform(68.3,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbAuIgIgVIglAAIgJAVIgUAAIAnhbIARAAIAnBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_15.setTransform(59.3,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAuIgJgCIgIgFIgHgFIgGgHIgEgIIgCgJIgBgKIABgIIACgJIAEgIIAGgHIAHgGIAIgFIAJgCIAJgBIAMABIAJACQAFADAKAHIgMAPQgGgFgFgCQgGgCgHAAQgFAAgFACIgIAGQgDAEgCAFQgCAFAAAFIAAAAQAAAGACAFQACAFADAEQAEAEAFADQAFACAFAAQAGAAAEgBQAFgCAEgDIAAgNIgUAAIAAgQIAnAAIAAAmQgKAIgGADIgLADIgMABIgJgBg");
	this.shape_16.setTransform(49,11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbAuIgIgVIglAAIgJAVIgUAAIAnhbIARAAIAnBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_17.setTransform(39.5,11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaAuIAAg7IgaAmIAAAAIgZgmIAAA7IgTAAIAAhaIAVAAIAXAmIAYgmIAVAAIAABag");
	this.shape_18.setTransform(28.8,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC0000").s().p("AqYDuIAAnbIUxAAIAAHbg");
	this.shape_19.setTransform(63.5,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-6.2,133,47.5);


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
	this.shape.graphics.f("#000000").s().p("AgpAzIAAgRIA3hAIg1AAIAAgUIBRAAIAAASIg2BAIA2AAIAAATg");
	this.shape.setTransform(550.2,-150.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAzIAAhlIBMAAIAAAUIg1AAIAAAVIAvAAIAAASIgvAAIAAAWIA2AAIAAAUg");
	this.shape_1.setTransform(540.3,-150.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAzIAAgpIgpAAIAAApIgWAAIAAhlIAWAAIAAAoIApAAIAAgoIAWAAIAABlg");
	this.shape_2.setTransform(529.8,-150.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAzIgLgDIgJgEIgHgHIgGgHIgFgJIgDgKIgBgLIAAAAIABgKIADgKIAFgIIAGgIIAHgHIAJgFIALgDIAKgBIANABQAGABAFADQAHACAJAJIgOAQQgGgFgGgDQgHgDgHAAQgGAAgEACQgGADgEAEQgEAFgCAFQgCAGAAAGQAAAGACAGQACAGAEAEQAEAFAFACQAFADAGAAQAGAAAJgDQAFgDAHgGIAOAOIgIAIIgKAGQgEACgHABQgGACgGAAIgKgCg");
	this.shape_3.setTransform(519,-150.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAzIAAhQIgfAAIAAgVIBTAAIAAAVIgeAAIAABQg");
	this.shape_4.setTransform(581.4,-165.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaAzIgwg/IAAA/IgWAAIAAhlIAVAAIAuA+IAAg+IAWAAIAABlg");
	this.shape_5.setTransform(570.9,-165.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfAzIgKgXIgqAAIgJAXIgXAAIAshlIATAAIAsBlgAANAJIgNggIgNAgIAaAAg");
	this.shape_6.setTransform(559.5,-165.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaAzIgwg/IAAA/IgWAAIAAhlIAVAAIAuA+IAAg+IAWAAIAABlg");
	this.shape_7.setTransform(548,-165.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAzIAAhlIBMAAIAAAUIg1AAIAAAVIAvAAIAAASIgvAAIAAAWIA2AAIAAAUg");
	this.shape_8.setTransform(537.6,-165.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAzIAAhQIgfAAIAAgVIBTAAIAAAVIgeAAIAABQg");
	this.shape_9.setTransform(527.9,-165.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAaAzIgwg/IAAA/IgWAAIAAhlIAVAAIAuA+IAAg+IAWAAIAABlg");
	this.shape_10.setTransform(517.4,-165.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAzIAAhlIAVAAIAABlg");
	this.shape_11.setTransform(509.2,-165.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfAzIgKgXIgqAAIgJAXIgXAAIArhlIAUAAIAsBlgAANAJIgNggIgNAgIAaAAg");
	this.shape_12.setTransform(501.1,-165.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAdAzIAAhBIgdAqIAAAAIgcgqIAABBIgWAAIAAhlIAYAAIAaAsIAbgsIAYAAIAABlg");
	this.shape_13.setTransform(489.1,-165.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(481.2,-173.8,106.6,32.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgiA8IAAh0IAhAAIAAAXQABgGAEgEIAHgJQAFgDAGgCQAGgCAHABIAAAiIgCAAQgIAAgHADQgGACgFAGQgEAFgDAHQgBAHAAALIAAArg");
	this.shape.setTransform(355.7,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgcA6QgIgCgFgFQgGgEgDgHQgDgHAAgIIAAgBQAAgJAEgIQADgGAGgEQAGgEAJgDQAJgCAKAAQALAAARAEIAAgCQAAgEgCgFQgBgEgEgDQgDgCgEgBQgFgCgFAAQgJAAgIACQgHABgJADIgIgZQALgEAJgCQAMgDAMAAQAOAAAKADQAKAEAGAGQAGAHAEAJQADAJAAAMIAABDIghAAIAAgNQgGAIgIADQgIAEgMAAQgIAAgHgCgAgPAKQgGAFAAAIIAAAAQAAAHAFAEQAFADAIAAIAKgBQAFgBADgDQAEgDABgEQACgEAAgEIAAgGQgJgEgMAAQgKAAgGADg");
	this.shape_1.setTransform(344,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AAXA6IgXgkIgXAkIgjAAIApg6Igng6IAjAAIAVAjIAWgjIAjAAIgoA6IAqA6g");
	this.shape_2.setTransform(331.8,38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("AgQBPIAAh0IAhAAIAAB0gAgRgxIAAgeIAjAAIAAAeg");
	this.shape_3.setTransform(322.2,36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("Ag7BMIAAiXIA9AAQANAAALAEQALADAIAHQAHAHAEAKQAEAKAAALIAAABIgBAMIgEAKQgEAKgJAHQgIAHgLADQgLADgMAAIgaAAIAAAugAgaABIAaAAQAGAAAFgBQAFgCADgDQAEgDACgEQABgFAAgFQAAgFgCgFQgBgEgEgDQgEgDgFgCQgFgBgFAAIgaAAg");
	this.shape_4.setTransform(312.2,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AgMAeQgFgCgFgFQgFgEgCgGQgCgGgBgHIAAAAQABgGACgGQACgGAFgEQAFgEAFgDQAHgCAFAAQAHAAAFACQAGADAFAEQAEAEADAGQADAGgBAGIAAAAQABAHgDAGQgDAGgEAEQgFAFgGACQgFACgHAAQgFAAgHgCg");
	this.shape_5.setTransform(298.9,37);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AgmBKQgGgCgHgEIALgYQAIAFAGAAQAFAAACgCQADgBACgFIguh0IAjAAIAaBOIAZhOIAjAAIgtB3IgHAPQgEAGgEAEQgEAEgFABQgGACgIAAQgIAAgIgCg");
	this.shape_6.setTransform(286.9,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("AgTA4QgLgEgJgIQgIgIgFgLIgDgMIgBgNQgBgLAFgMQAEgLAIgIQAIgIAKgFIALgDQAGgCAFAAQAIAAAGACQAHABAFACQAFADAEAEIAIAIQAHAIAEAMQAEALAAAMIgBAIIhRAAIAFAKQACAFAEACQADADAFACQAEABAFAAQAIAAAHgDQAGgCAIgHIATARIgJAJIgLAHIgOAEQgGACgIAAQgRgCgGgDgAAZgIQgBgGgBgEQgCgFgEgDQgDgEgEgBQgFgCgFAAQgDAAgFACQgEABgEAEQgDADgBAEQgDAFgBAGIAxAAIAAAAg");
	this.shape_7.setTransform(274.2,38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AAVA7IAAg/QAAgGgCgFQgBgEgDgDQgDgDgEgCQgDgBgFgBQgDABgFABQgDACgDADQgCADgCAEQgBAFgBAGIAAA/IghAAIAAh0IAhAAIAAARQAHgJAHgEIAJgEQAEgCAHABQAJAAAIACQAGADAGAGQAFAFACAJQADAIAAAKIAABKg");
	this.shape_8.setTransform(260.9,38.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AgVA4QgSgHgHgGIAOgWQAJAHAKADQAKAEAGAAQAHAAAFgDQACgCAAgEIAAAAQABgFgIgDIgQgGQgQgFgHgGQgFgDgDgFQgDgHgBgIIAAAAQAAgJAEgHQADgHAGgFQAGgEAHgDQAJgCAHAAQALAAAMADQAMAEAJAGIgMAXQgKgFgHgDQgJgDgHAAQgEAAgEACQgCADAAADIAAABQgBAEAIADIAPAHIANAEQAGADAFAEQAGADACAGQADAGAAAHIAAABQABAJgEAIQgDAHgGAEQgGAFgJACQgHACgKAAQgMAAgMgEg");
	this.shape_9.setTransform(248.5,38.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgQBPIAAh0IAhAAIAAB0gAgRgxIAAgeIAiAAIAAAeg");
	this.shape_10.setTransform(239.9,36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("AhFBMIAAiXIA7AAQAJAAAHABIAQAEIAOAHIAMAJIAJAMIAHANQADAGACAIIABAPIAAAAQAAAIgBAIQgCAHgDAHIgHANIgJALIgMAJQgHAFgHACQgHADgJACQgHABgJAAgAgkAuIAaAAQAKAAAIgDQAIgEAGgGQAGgGAEgIQADgJAAgKIAAAAQAAgJgDgJQgEgIgGgGQgGgGgIgEQgIgDgKAAIgaAAg");
	this.shape_11.setTransform(228.4,37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgTA4QgMgEgIgIQgIgIgFgLIgDgMIgBgNQAAgLAEgMQAEgLAIgIQAHgIALgFIALgDQAGgCAFAAQAIAAAGACQAGABAGACQAFADAEAEIAIAIQAIAIADAMQAEALAAAMIgBAIIhQAAIAEAKQACAFAEACQADADAFACQAEABAFAAQAIAAAHgDQAGgCAIgHIATARIgKAJIgKAHIgOAEQgHACgHAAQgRgCgGgDgAAZgIQAAgGgCgEQgDgFgDgDQgDgEgEgBQgEgCgGAAQgEAAgEACQgEABgEAEQgDADgBAEQgDAFgBAGIAxAAIAAAAg");
	this.shape_12.setTransform(206.4,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("AgbBNQgJgEgIgIQgIgIgEgLIgDgMIgCgNIAAgBQABgKAEgPQAEgLAIgIQAHgHAKgFQAKgDAKAAQAGgBAFACQAFABAEACQAIAFAHAIIAAg6IAiAAIAACeIgiAAIAAgRQgHAJgIAGQgEACgGABQgEABgGAAQgKAAgKgDgAgJgJQgGACgEAFQgEADgCAFQgDAHABAHIAAABQgBAHADAFQACAHAEADQAEAFAGACQAFACAEAAQAGAAAFgCQAFgCAEgFQAFgDACgHQABgFAAgHIAAgBQAAgHgBgHQgCgFgFgDQgEgFgFgCQgFgCgGgBQgEABgFACg");
	this.shape_13.setTransform(192.1,36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgPBMQgKgCgHgEQgHgDgGgFIgLgLIAXgWQAIAKAJADQAIAFALABQAJgBAHgFQAFgEAAgJIAAgBQAAgEgCgDQgBgEgFgDIgJgEQgGgBgGAAIgOAAIgEgUIAjglIg8AAIAAgcIBnAAIAAAYIgnAmIAPAEQAIADAGAFQAFAEAEAHQADAIAAAKIAAAAQAAALgDAKQgFAJgHAGQgGAHgLAEQgKADgMABQgKAAgIgCg");
	this.shape_14.setTransform(171.6,37.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AgMBNQgJgBgIgDQgIgEgIgEQgIgFgGgFIATgZQALAKALAEIALAEIAMABQAKAAAGgEQAGgDAAgIIAAAAQAAgHgGgDQgGgFgSgEIgVgGQgJgFgHgEQgGgFgEgHQgDgIAAgLIAAgBQAAgKAEgIQADgIAIgHQAHgGAKgDQAKgDALAAQAHgBAIACIAPADQAHADAHAEIAMAIIgSAaQgKgIgKgDQgKgFgIAAQgKAAgFAFQgFADAAAGIAAAAQAAAIAHADQAGAEATAFIAVAHQAJAEAGAEQAGAGADAGQADAIAAAKIAAAAQAAAMgEAIQgEAJgHAGQgIAGgKADQgKADgNAAIgQgBg");
	this.shape_15.setTransform(151.3,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("Ag5BMIAAiXIByAAIAAAeIhRAAIAAAeIBHAAIAAAdIhHAAIAAAgIBSAAIAAAeg");
	this.shape_16.setTransform(137.6,37);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("Ag2BMIAAiXIAiAAIAAB5IBLAAIAAAeg");
	this.shape_17.setTransform(123.8,37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AgQBNQgIgBgIgDQgHgDgGgFQgHgEgFgFQgGgFgEgHQgEgGgDgHQgDgHgCgIIgBgQIAAAAQAAgHABgIIAFgPQADgHAFgGIAJgMQAGgFAGgEQAGgFAIgDQAIgDAHgBQAIgCAIAAQAJAAAJACQAIABAHADIANAHIANAKQAFAFAEAHQAEAGADAHIAFAPQABAHAAAIIAAAAQAAAIgBAIIgFAPIgHANIgKAMQgFAFgHAEQgGAFgHADQgIADgIABIgRACQgIAAgIgCgAgSgrQgIADgGAHQgGAGgEAJQgDAJAAAJIAAAAQAAAKADAIQAEAJAGAHQAGAGAIAEQAJAEAJAAQALAAAIgEQAIgDAHgHQAFgHAEgIQADgJAAgKIAAAAQAAgJgDgJQgDgIgHgHQgGgHgJgDQgIgEgKAAQgJAAgJAEg");
	this.shape_18.setTransform(107.2,37);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C61E24").s().p("AAnBMIhJhgIAABgIghAAIAAiXIAfAAIBHBdIAAhdIAhAAIAACXg");
	this.shape_19.setTransform(89.3,37);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C61E24").s().p("AgJBNQgIgBgHgDQgHgDgHgEQgGgEgFgFIgKgMQgEgGgDgHQgDgHgBgIQgCgIAAgJIAAAAQAAgHACgIIAEgPIAHgNIAKgMQAFgFAHgEQAGgFAHgDQAIgDAIgBQAIgCAHAAIATABIAQAEQAJAEAQAMIgVAZQgJgIgJgDQgJgEgNAAQgIAAgIAEQgIADgGAHQgGAHgDAIQgEAJAAAJIAAAAQAAAKAEAJQADAJAGAHQAHAGAIAEQAJADAJAAQAJAAAIgCQAIgCAGgFIAAgWIgiAAIAAgcIBDAAIAABCQgRAMgLAFQgJADgJACQgJACgKAAQgIAAgJgCg");
	this.shape_20.setTransform(72.1,37);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C61E24").s().p("AAuBNIgOgjIg/AAIgPAjIgiAAIBCiZIAdAAIBCCZgAAUANIgUgxIgUAxIAoAAg");
	this.shape_21.setTransform(56.1,37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C61E24").s().p("AhABMIAAiXIBGAAQANAAAKADQAKAEAHAGQAFAFADAHQACAGAAAIIAAABQAAAGgBAFQgCAFgDAEQgFAHgJAFIAMAFQAGAEADAEQAEAFACAFQACAGAAAIIAAAAQAAALgEAIQgEAHgIAGQgHAFgLADQgKACgNAAgAgfAvIAnAAQALAAAGgEQAGgEAAgJIAAAAQAAgIgGgEQgDgDgEgBIgLgBIgmAAgAgfgOIAfAAQAKAAAGgDQAHgFAAgIIAAAAQAAgIgGgEQgGgEgKAAIggAAg");
	this.shape_22.setTransform(40,37);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C61E24").s().p("AgMBNQgJgBgIgDQgIgEgIgEQgIgFgGgFIATgZQALAKALAEIALAEIAMABQAKAAAGgEQAGgDAAgIIAAAAQAAgHgGgDQgGgFgSgEIgVgGQgJgFgHgEQgGgFgEgHQgDgIAAgLIAAgBQAAgKAEgIQADgIAIgHQAHgGAKgDQAKgDALAAQAHgBAIACIAPADQAHADAHAEIAMAIIgSAaQgKgIgKgDQgKgFgIAAQgKAAgFAFQgFADAAAGIAAAAQAAAIAHADQAGAEATAFIAVAHQAJAEAGAEQAGAGADAGQADAIAAAKIAAAAQAAAMgEAIQgEAJgHAGQgIAGgKADQgKADgNAAIgQgBg");
	this.shape_23.setTransform(18,37);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C61E24").s().p("Ag5BMIAAiXIByAAIAAAeIhRAAIAAAeIBHAAIAAAdIhHAAIAAAgIBSAAIAAAeg");
	this.shape_24.setTransform(4.3,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C61E24").s().p("Ag2BMIAAiXIAiAAIAAB5IBLAAIAAAeg");
	this.shape_25.setTransform(-9.5,37);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMBNQgJgBgIgDQgIgEgIgEQgIgFgGgFIATgZQALAKALAEIALAEIAMABQAKAAAGgEQAGgDAAgIIAAAAQAAgHgGgDQgGgFgSgEIgVgGQgJgFgHgEQgGgEgEgIQgDgIAAgLIAAgBQAAgKAEgIQADgIAIgHQAHgGAKgDQAKgDALAAQAHgBAIACIAPADQAHADAHAEIAMAIIgSAaQgKgIgKgDQgKgFgIAAQgKAAgFAFQgFADAAAGIAAAAQAAAIAHAEQAGADATAFIAVAHQAJAEAGAEQAGAGADAGQADAIAAAKIAAAAQAAAMgEAIQgEAJgHAGQgIAGgKADQgKADgNAAIgQgBg");
	this.shape_26.setTransform(319.7,13.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag5BMIAAiXIByAAIAAAeIhRAAIAAAeIBHAAIAAAdIhHAAIAAAgIBSAAIAAAeg");
	this.shape_27.setTransform(306,13.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag2BMIAAiXIAiAAIAAB5IBLAAIAAAeg");
	this.shape_28.setTransform(292.2,13.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag2BMIAAiXIAiAAIAAB5IBLAAIAAAeg");
	this.shape_29.setTransform(278.7,13.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQBMIAAiXIAhAAIAACXg");
	this.shape_30.setTransform(267.7,13.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAuBNIgOgjIhAAAIgNAjIgjAAIBBiZIAfAAIBBCZgAAUANIgUgxIgTAxIAnAAg");
	this.shape_31.setTransform(255.5,13.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOBNIg+iZIAmAAIAmBrIAohrIAlAAIg+CZg");
	this.shape_32.setTransform(240.9,13.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbBJQgHgCgFgDIgJgHIgIgKQgDgFgCgHQgDgGgBgIIgBgQIAAhVIAiAAIAABUQAAAKACAHQACAHAFAFQAEAEAGADQAGACAHAAQAIAAAFgCQAHgCAEgFQAFgEACgIQACgGAAgJIAAhWIAiAAIAABUIgBARIgFAOQgCAGgDAGIgHAKIgKAHIgLAFQgTAEgJABQgTgCgIgDg");
	this.shape_33.setTransform(224.6,13.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQBNQgIgBgHgDQgIgDgHgFQgGgEgFgFQgFgFgFgHQgEgGgDgHQgDgHgBgIIgCgQIAAAAQAAgHACgIIAEgPQADgHAEgGIAKgMQAFgFAHgEQAGgFAIgDQAHgDAJgBQAHgCAJAAQAIAAAIACQAIABAIADIAOAHIALAKQAGAFAEAHQAFAGADAHIADAPQACAHAAAIIAAAAQAAAIgCAIIgEAPIgHANIgKAMQgFAFgGAEQgHAFgIADQgHADgIABIgRACQgIAAgIgCgAgSgrQgIADgGAHQgGAGgDAJQgEAJAAAJIAAAAQAAAKAEAIQADAJAGAHQAHAGAHAEQAKAEAJAAQAJAAAJgEQAIgDAGgHQAHgHADgIQADgJAAgKIAAAAQAAgJgEgJQgDgIgGgHQgGgHgIgDQgJgEgKAAQgJAAgJAEg");
	this.shape_34.setTransform(207,13.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbBMIgggxIgaAAIAAAxIgiAAIAAiXIBFAAQAKAAAQAEQALAEAHAHQAHAHADAIQADAJAAALQAAAKgCAHQgCAIgFAFQgEAFgGAFQgGAEgHADIAlA2gAgfgBIAhAAQAGAAAFgCQAEgBAEgDIAFgHQABgEAAgFIAAAAQAAgGgBgEQgCgEgEgDQgDgCgFgCQgFgBgGAAIggAAg");
	this.shape_35.setTransform(190.4,13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBMIAAh4IguAAIAAgfIB9AAIAAAfIguAAIAAB4g");
	this.shape_36.setTransform(175,13.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMBNQgJgBgIgDQgIgEgIgEQgIgFgGgFIATgZQALAKALAEIALAEIAMABQAKAAAGgEQAGgDAAgIIAAAAQAAgHgGgDQgGgFgSgEIgVgGQgJgFgHgEQgGgEgEgIQgDgIAAgLIAAgBQAAgKAEgIQADgIAIgHQAHgGAKgDQAKgDALAAQAHgBAIACIAPADQAHADAHAEIAMAIIgSAaQgKgIgKgDQgKgFgIAAQgKAAgFAFQgFADAAAGIAAAAQAAAIAHAEQAGADATAFIAVAHQAJAEAGAEQAGAGADAGQADAIAAAKIAAAAQAAAMgEAIQgEAJgHAGQgIAGgKADQgKADgNAAIgQgBg");
	this.shape_37.setTransform(154.3,13.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBNQgIgBgIgDQgHgDgHgFQgGgEgFgFQgGgFgEgHQgEgGgDgHQgDgHgBgIIgCgQIAAAAQAAgHACgIIAEgPQADgHAEgGIAKgMQAGgFAGgEQAGgFAIgDQAHgDAJgBQAHgCAJAAQAIAAAJACQAHABAIADIAOAHIALAKQAGAFAEAHQAFAGADAHIADAPQACAHAAAIIAAAAQAAAIgCAIIgEAPIgHANIgKAMQgFAFgGAEQgHAFgIADQgHADgIABIgRACQgIAAgIgCgAgRgrQgJADgGAHQgGAGgDAJQgEAJAAAJIAAAAQAAAKAEAIQADAJAGAHQAHAGAIAEQAIAEAKAAQAJAAAJgEQAIgDAGgHQAHgHADgIQADgJAAgKIAAAAQAAgJgEgJQgDgIgGgHQgGgHgIgDQgJgEgKAAQgJAAgIAEg");
	this.shape_38.setTransform(138.3,13.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOBNIg+iZIAmAAIAmBrIAohrIAlAAIg+CZg");
	this.shape_39.setTransform(121.9,13.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgMBNQgJgBgIgDQgIgEgIgEQgIgFgGgFIATgZQALAKALAEIALAEIAMABQAKAAAGgEQAGgDAAgIIAAAAQAAgHgGgDQgGgFgSgEIgVgGQgJgFgHgEQgGgEgEgIQgDgIAAgLIAAgBQAAgKAEgIQADgIAIgHQAHgGAKgDQAKgDALAAQAHgBAIACIAPADQAHADAHAEIAMAIIgSAaQgKgIgKgDQgKgFgIAAQgKAAgFAFQgFADAAAGIAAAAQAAAIAHAEQAGADATAFIAVAHQAJAEAGAEQAGAGADAGQADAIAAAKIAAAAQAAAMgEAIQgEAJgHAGQgIAGgKADQgKADgNAAIgQgBg");
	this.shape_40.setTransform(100,13.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag5BMIAAiXIByAAIAAAeIhRAAIAAAeIBHAAIAAAdIhHAAIAAAgIBSAAIAAAeg");
	this.shape_41.setTransform(86.3,13.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQBMIAAh4IguAAIAAgfIB9AAIAAAfIguAAIAAB4g");
	this.shape_42.setTransform(71.6,13.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgbBJQgGgCgFgDIgKgHIgHgKQgEgFgCgHQgDgGAAgIIgBgQIAAhVIAhAAIAABUQAAAKACAHQACAHAEAFQAFAEAGADQAGACAHAAQAHAAAHgCQAGgCAEgFQAFgEABgIQADgGAAgJIAAhWIAhAAIAABUIgBARIgDAOQgCAGgEAGIgIAKIgKAHIgLAFQgRAEgKABQgTgCgIgDg");
	this.shape_43.setTransform(56.3,13.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQBNQgIgBgIgDQgHgDgHgFQgGgEgFgFQgGgFgEgHQgEgGgDgHQgDgHgBgIIgCgQIAAAAQAAgHACgIIAEgPQADgHAEgGIAKgMQAGgFAGgEQAGgFAIgDQAHgDAJgBQAHgCAJAAQAIAAAJACQAHABAIADIAOAHIALAKQAGAFAEAHQAFAGACAHIAEAPQACAHAAAIIAAAAQAAAIgCAIIgEAPIgHANIgKAMQgFAFgGAEQgHAFgIADQgHADgIABIgRACQgIAAgIgCgAgRgrQgJADgGAHQgGAGgDAJQgEAJAAAJIAAAAQAAAKAEAIQADAJAGAHQAHAGAIAEQAIAEAKAAQAJAAAJgEQAIgDAGgHQAHgHADgIQADgJAAgKIAAAAQAAgJgEgJQgDgIgGgHQgGgHgIgDQgJgEgKAAQgJAAgIAEg");
	this.shape_44.setTransform(38.8,13.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgQBMIAAh4IguAAIAAgfIB9AAIAAAfIguAAIAAB4g");
	this.shape_45.setTransform(23.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-22.6,1.1,388.2,50.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-5.4,0,5.4).s().p("AwBA2IAAhrMAgDAAAIAABrg");
	this.shape.setTransform(166,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AAbA2IgzhEIAABEIgWAAIAAhqIAVAAIAyBAIAAhAIAWAAIAABqg");
	this.shape_1.setTransform(238.9,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AgLA2IAAhqIAXAAIAABqg");
	this.shape_2.setTransform(230.3,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgTAzIgIgDIgGgGIgGgGIgDgIIgDgKIgBgLIAAg8IAYAAIAAA7QAAAHACAFQABAFADADIAHAFQAFACAEAAQAGAAAEgCQAEgCADgDQADgDACgFQABgFAAgGIAAg8IAYAAIAAA7IgBALQgBAGgCAEIgEAJIgFAGIgHAGIgIADQgMADgHAAQgNgBgGgCg");
	this.shape_3.setTransform(221.9,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgMA1IgJgDQgGgDgJgJIAPgQQAFAFAEADQAFACAGAAIAFgBQADgBABgCQACgCACgDIABgIIAAhEIAXAAIAABFQAAAJgCAHQgDAHgFAFQgEAFgIADQgHACgIAAQgFAAgGgBg");
	this.shape_4.setTransform(211.4,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgQA1QgHgEgFgFIgGgHIgEgJIgDgKIAAgPIAAAAQAAgHACgPIAEgKIAFgIIAHgHQADgEAFgCIAJgDIAKgBQAIAAALACQAIAEAHAGIgMARQgGgEgEgCQgGgCgGAAQgFAAgEACQgEADgDAEQgCAEgBAEIgBAIQAEgDAFgCQAGgCAFAAQAIAAAIACQAHADAEADQAGAFACAFQADAHAAAIIAAABQAAAHgDAIQgDAGgGAFQgFAFgHADQgIADgJAAQgMgBgFgCgAgHAEQgDABgDADIgDAEIgBAHIABAHIAEAEIAFAEIAIABIAHgBQADgBADgDQADgBABgDQABgDAAgEIAAAAQAAgEgBgCQgBgDgDgCIgGgEIgIgBIgHABg");
	this.shape_5.setTransform(197.9,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AABA2IAAhTIgSAEIgFgTIAdgJIAQAAIAABrg");
	this.shape_6.setTransform(189.1,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_7.setTransform(177,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgmA2IAAhqIAYAAIAABUIA1AAIAAAWg");
	this.shape_8.setTransform(167.3,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_9.setTransform(152.7,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AglA2IAAhqIAXAAIAABUIA0AAIAAAWg");
	this.shape_10.setTransform(143.1,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AglA2IAAhqIAXAAIAABUIA0AAIAAAWg");
	this.shape_11.setTransform(133.6,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AAgA2IgJgYIgtAAIgKAYIgYAAIAuhrIAVAAIAuBrgAAOAJIgOgiIgNAiIAbAAg");
	this.shape_12.setTransform(122.4,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AgIA2QgGgBgGgDIgLgEIgKgIIAOgRQAHAGAIADIAIAEIAIAAQAHAAAEgDQAEgCAAgFQAAgFgEgCQgEgEgMgDIgPgEIgLgGQgFgDgCgFQgDgGAAgIIAAAAQAAgHADgGQACgGAGgEQAFgEAGgDQAHgCAIAAIALABQAFAAAFACIAKAFIAIAFIgMASQgHgFgHgDQgHgDgGAAQgGAAgEADQgEADAAAEIAAAAQAAAFAFADQAEADAOAEIAOAEIALAGQAEAEACAFQACAFAAAGIAAABQAAAHgCAHQgDAGgFAEQgGAEgHADQgHACgJAAIgLgBg");
	this.shape_13.setTransform(111.6,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AAcA2Ig0hEIAABEIgWAAIAAhqIAVAAIAyBAIAAhAIAWAAIAABqg");
	this.shape_14.setTransform(96.3,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_15.setTransform(85.3,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.4,-2,205.2,22);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},140).wait(37));

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
(lib._728x90_cars_fr = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44,82,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({startPosition:214},0).to({alpha:0,startPosition:224},10).to({_off:true},1).wait(32));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(553.1,47.3,0.1,0.1,0,0,0,63.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(257).to({_off:false},0).wait(1).to({regY:17.5,scaleX:0.2,scaleY:0.2,y:47},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:46.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:46.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:46.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:46.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:46.3},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:46.2},0).wait(1).to({regY:18.5,scaleX:1,scaleY:1,y:47.3},0).wait(3));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,61);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).to({alpha:1},13).wait(20));

	// Layer 8
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(470.9,48.7,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(504.4,51.2,0.605,0.605,0,0,0,0.2,0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(126).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:471,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:471.6,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:473.2,y:48.8,alpha:0.071},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:476.8,y:49.1,alpha:0.179},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:486.5,y:49.7,alpha:0.47},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:494,y:50.2,alpha:0.695},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:497.6,y:50.5,alpha:0.804},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:499.9,y:50.7,alpha:0.871},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:501.4,y:50.8,alpha:0.916},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:502.4,alpha:0.947},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:503.1,y:50.9,alpha:0.969},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:503.6,alpha:0.984},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:503.9,alpha:0.993},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:504.1,alpha:0.998},0).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(141).to({_off:false},0).wait(88).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 7
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(463.6,46.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(431.5,68,0.605,0.605,0,0,0,0.1,0.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:463.3,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:462.7,y:46.9,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:461.2,y:47.9,alpha:0.071},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:457.7,y:50.2,alpha:0.179},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:448.3,y:56.4,alpha:0.47},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:441.1,y:61.1,alpha:0.695},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:437.5,y:63.5,alpha:0.804},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:435.4,y:64.9,alpha:0.871},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:433.9,y:65.8,alpha:0.916},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:432.9,y:66.5,alpha:0.947},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:432.2,y:67,alpha:0.969},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:431.8,y:67.3,alpha:0.984},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:431.5,y:67.5,alpha:0.993},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:431.3,y:67.6,alpha:0.998},0).to({_off:true},1).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(134).to({_off:false},0).wait(95).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 9
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(437.2,46.3,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(463.9,36.4,0.605,0.605,0,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(112).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,y:46.1,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:437.8,y:45.9,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:439,y:45.5,alpha:0.071},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:441.8,y:44.4,alpha:0.179},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:449.5,y:41.5,alpha:0.47},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:455.5,y:39.2,alpha:0.695},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:458.4,y:38.1,alpha:0.804},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:460.2,y:37.4,alpha:0.871},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:461.4,y:36.9,alpha:0.916},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:462.2,y:36.6,alpha:0.947},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:462.8,y:36.4,alpha:0.969},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:463.2,y:36.3,alpha:0.984},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:463.4,y:36.2,alpha:0.993},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:463.5,y:36.1,alpha:0.998},0).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(127).to({_off:false},0).wait(102).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 10
	this.instance_9 = new lib.Tween9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(470.6,46,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(418.2,47,0.605,0.605,0,0,0,0.2,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(105).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.1,scaleY:0.1,x:470.3,alpha:0.005},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:469.2,alpha:0.025},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:466.8,alpha:0.071},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:461.1,y:46.1,alpha:0.179},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:445.8,y:46.3,alpha:0.47},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:434,y:46.5,alpha:0.695},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:428.2,alpha:0.804},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:424.7,y:46.6,alpha:0.871},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:422.4,alpha:0.916},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:420.7,alpha:0.947},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:419.6,y:46.7,alpha:0.969},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:418.8,alpha:0.984},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:418.3,alpha:0.993},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:418,alpha:0.998},0).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120).to({_off:false},0).wait(109).to({startPosition:0},0).to({alpha:0},10).wait(33));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.7,276.8,1.344,1.344,0,0,0,46.9,13.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({_off:false},0).to({alpha:1},12).wait(85).to({alpha:0},10).wait(36));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(140.1,38.5,0.9,0.9,0,0,0,119.4,17.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129).to({_off:false},0).to({alpha:1},12).wait(85).to({alpha:0},10).wait(36));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(152.1,47.2,0.055,0.055,0,0,0,73,63);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:72.8,regY:62.4,scaleX:0.06,scaleY:0.06,y:47.1,alpha:0.007},0).wait(1).to({scaleX:0.07,scaleY:0.07,y:47.2,alpha:0.033},0).wait(1).to({scaleX:0.1,scaleY:0.1,y:47.1,alpha:0.097},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:152,alpha:0.259},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:47,alpha:0.529},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.692},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.789},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:46.9,alpha:0.853},0).wait(1).to({scaleX:0.49,scaleY:0.49,alpha:0.899},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.932},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:151.9,alpha:0.956},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:152,alpha:0.974},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:151.9,alpha:0.986},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:152,alpha:0.994},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.999},0).wait(1).to({regX:72.6,regY:62.5,x:152.1,y:47.2,alpha:1},0).to({regX:72.8,regY:62.6,scaleX:0.61,scaleY:0.61,x:152.2},66).wait(1).to({regY:62.4,scaleX:0.63,scaleY:0.63,x:152.1,y:47,alpha:0.988},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:152,y:46.8,alpha:0.938},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:151.7,y:46,alpha:0.776},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:150.9,y:43.7,alpha:0.333},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:150.5,y:42.6,alpha:0.147},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:150.3,y:42.2,alpha:0.066},0).wait(1).to({scaleX:2.02,scaleY:2.02,y:42,alpha:0.025},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:150.2,y:41.9,alpha:0.005},0).wait(1).to({regY:62.6,scaleX:2.06,scaleY:2.06,y:42.3,alpha:0},0).wait(181));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(297.8,49.9,2.1,2.1,0,0,0,99,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({alpha:1},14).wait(59).to({alpha:0},4).wait(185));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({alpha:0},5).wait(180));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(189));

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
		{src:"images/728x90_cars_fr_atlas_P_.png", id:"728x90_cars_fr_atlas_P_"},
		{src:"images/728x90_cars_fr_atlas_NP_.jpg", id:"728x90_cars_fr_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;