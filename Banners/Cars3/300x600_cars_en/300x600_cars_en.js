(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_cars_en_atlas_P_", frames: [[399,0,88,62],[0,0,235,330],[237,161,112,107],[351,161,123,65],[237,0,160,159]]},
		{name:"300x600_cars_en_atlas_NP_", frames: [[0,0,300,600],[0,602,267,230]]}
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
	this.spriteSheet = ss["300x600_cars_en_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blackcar = function() {
	this.spriteSheet = ss["300x600_cars_en_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["300x600_cars_en_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CT_dblbbx = function() {
	this.spriteSheet = ss["300x600_cars_en_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.legopngcopy = function() {
	this.spriteSheet = ss["300x600_cars_en_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rccar = function() {
	this.spriteSheet = ss["300x600_cars_en_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.trike = function() {
	this.spriteSheet = ss["300x600_cars_en_atlas_P_"];
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
	this.shape.setTransform(100.2,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgHIgHgHIgFgJIgDgLIgBgLIAAAAIABgKIADgKIAFgJIAHgIIAIgHIAKgFIAKgDIALgCQAGABAGABIALADIAJAFIAIAHIAHAIIAFAJIADAKIABAKIAAAAIgBALIgDAKIgFAKIgHAHIgIAHIgKAFIgKADIgMABQgFABgGgCgAgMgdQgGACgEAFQgEAEgCAGQgDAGAAAGIAAAAQAAAGADAHQACAFAEAGQAFAEAFADQAGACAGAAQAHAAAGgCQAGgDAEgEQAEgFACgGQADgGAAgHIAAAAQAAgFgDgHQgCgGgEgEQgFgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(86,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA1IgyhCIAABCIgXAAIAAhpIAWAAIAwBAIAAhAIAXAAIAABpg");
	this.shape_2.setTransform(73.7,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA1IAAhpIArAAQAJAAAIADQAGACAGAFQAFAGADAGQACAHAAAIIAAAIIgDAHQgDAHgGAEQgFAFgIACQgIADgIAAIgRAAIAAAggAgRAAIARAAIAIAAIAFgDQADgCABgDQABgDABgEIAAAAQgBgDgBgDIgEgGQgCgBgDgBIgIgBIgRAAg");
	this.shape_3.setTransform(58.7,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgHIgHgHIgFgJIgDgLIgBgLIAAAAIABgKIADgKIAFgJIAHgIIAIgHIAKgFIAKgDIALgCQAGABAGABIALADIAJAFIAIAHIAHAIIAFAJIADAKIABAKIAAAAIgBALIgDAKIgFAKIgHAHIgIAHIgKAFIgKADIgMABQgFABgGgCgAgMgdQgGACgEAFQgEAEgCAGQgDAGAAAGIAAAAQAAAGADAHQACAFAEAGQAFAEAFADQAGACAGAAQAHAAAGgCQAGgDAEgEQAEgFACgGQADgGAAgHIAAAAQAAgFgDgHQgCgGgEgEQgFgFgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(46.9,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA1IAAgrIgqAAIAAArIgWAAIAAhpIAWAAIAAAqIAqAAIAAgqIAYAAIAABpg");
	this.shape_5.setTransform(34.9,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA1IgLgDIgMgGQgFgDgFgEIAOgQQAHAGAIADIAHADIAIABQAHgBAFgCQADgDABgEQgBgFgDgDQgFgDgLgDIgPgEIgLgGQgEgDgDgFQgDgGABgHIAAAAQAAgHACgHQADgFAFgFQAFgDAGgDQAHgCAIAAIAKABIAKADIAKADIAIAHIgLARQgIgGgHgCQgGgDgGAAQgHAAgDADQgEACAAAEIAAABQAAAFAFACQAFADAMADIAOAGQAHACAEACQAEAFACAEQACAGABAGIAAABQgBAHgDAGQgCAHgGADQgEAFgHACQgIACgIAAIgLgBg");
	this.shape_6.setTransform(24.3,18.6);

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
	this.shape.graphics.f("#000000").s().p("AgQBNIAAh6IgvAAIAAgfIB/AAIAAAfIgvAAIAAB6g");
	this.shape.setTransform(213.8,222.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAuBNIgOgiIhAAAIgOAiIgiAAIBBiZIAeAAIBDCZgAAUANIgUgxIgUAxIAoAAg");
	this.shape_1.setTransform(200,222.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjBOIgjhkIgiBkIgdAAIg1iaIAlAAIAgBnIAihoIAcAAIAjBoIAghnIAjAAIg1Cag");
	this.shape_2.setTransform(172.4,222.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRBOQgIgCgHgDQgHgDgHgEQgHgEgFgGIgKgLQgEgGgDgIQgDgHgBgHIgCgRIAAAAIACgPIAFgPQACgHAEgHQAFgGAFgFIANgKQAGgEAHgDQAIgDAIgCIAQgCQAJABAJABQAHACAIADQAIADAGAEQAHAEAFAGQAFAFAFAGQAEAHADAHIAFAOIABAQIAAAAIgBAQIgGAPIgGANIgLAMIgMAKQgGAEgHADQgIADgIACQgIABgJABIgRgCgAgSgsQgIAEgHAGQgFAIgEAIQgEAJABAJIAAAAQgBAKAEAIQAEAKAFAGQAHAHAJADQAIAEAJAAQAKAAAJgEQAIgDAHgGQAFgIAEgIQADgIAAgLIAAAAQAAgJgDgJQgEgJgFgGQgHgHgJgEQgJgDgJAAQgKAAgIADg");
	this.shape_3.setTransform(151.6,222.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAnBNIhJhhIAABhIgiAAIAAiZIAgAAIBHBeIAAheIAiAAIAACZg");
	this.shape_4.setTransform(133.6,222.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(122.6,210.8,100.7,26.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C61E24").s().p("AgYBzQgNgDgMgGQgLgFgJgIQgJgHgIgIIAjgiQANAOAMAGQAOAIAQAAQAPAAAJgIQAJgHAAgNIAAgBQAAgHgDgGQgDgFgGgEQgGgDgJgCQgIgCgKAAIgVAAIgIggIA3g3IhaAAIAAgsICbAAIAAAnIg7A3QANADAKAEQAMAEAIAIQAJAHAFALQAGAMAAAPIAAABQAAAQgGAOQgGAOgLAKQgLAKgPAFQgQAHgTgBQgOAAgNgCg");
	this.shape.setTransform(184.9,97.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C61E24").s().p("AgSB1QgOgDgMgEQgNgFgLgHQgMgHgKgJIAegkQAQAOAQAHIASAFQAJACAJAAQAPAAAJgGQAJgFAAgLIAAAAQAAgKgJgGQgJgGgcgIQgTgFgMgEQgPgGgJgHQgLgHgFgMQgFgMAAgQIAAgBQAAgPAGgNQAGgNALgKQAKgJAPgFQAPgFASAAQALAAAMACQAMACAKAEQALAEAKAFIASANIgaAmQgQgLgOgGQgQgGgNAAQgOAAgIAGQgIAGAAAIIAAABQAAALAKAGQAKAGAdAIQATAEAMAGQAOAGAJAHQAKAIAFALQAEALAAAPIAAAAQAAARgGAOQgGANgLAJQgMAKgPAEQgQAFgSAAQgNAAgMgCg");
	this.shape_1.setTransform(154.3,97.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C61E24").s().p("AAoB0IgwhLIgoAAIAABLIgzAAIAAjnIBpAAQAPAAAYAHQAQAFAMAMQAKAKAFANQAFAOAAAQIAAABQAAANgDAMQgEALgHAIQgGAJgJAGQgKAHgLAEIA5BTgAgwgCIAzAAQAJAAAHgDQAHgCAFgFQAFgDADgHQADgFgBgIIAAAAQAAgJgCgGQgDgGgGgFQgEgEgIgCQgHgCgJAAIgyAAg");
	this.shape_2.setTransform(132.9,97.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C61E24").s().p("ABFB0IgVg0IhhAAIgVA0Ig0AAIBjjnIAuAAIBkDngAAeAUIgehKIgfBKIA9AAg");
	this.shape_3.setTransform(107.1,97.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C61E24").s().p("AgMB1QgMgDgKgEQgLgEgJgGQgKgHgIgIQgHgIgHgKQgGgJgEgLQgFgKgCgMQgDgMABgMIAAgBQgBgLADgMQACgMAFgKQADgLAHgKQAGgJAIgJQAIgHAKgHQAKgHAKgEQAMgEALgDQAMgCANAAQAQAAAOACQAMADALAFQAPAGAXATIggAmQgOgNgOgGQgPgIgRABQgNgBgNAGQgLAFgJAKQgJALgGANQgEANAAAOIAAAAQAAAPAEANQAGANAJAKQAJAKALAGQANAFANABQAOgBAUgHQAMgGAPgNIAhAhQgKAJgJAHQgKAJgLAFQgMAFgNADQgOACgQAAQgMABgMgDg");
	this.shape_4.setTransform(82.1,97.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C61E24").s().p("AghBVQgagLgMgJIAWghQAOAKAPAGQAOAFALAAQALAAAGgEQAFgDAAgGIAAgBQAAgHgLgFIgZgIQgZgJgLgIQgIgFgEgJQgFgJAAgNIAAAAQAAgNAFgLQAFgKAJgIQAJgHAMgEQAMgDAMAAQARAAARAFQARAGAPAJIgTAjQgOgIgMgEQgNgFgJAAQgIAAgFAEQgFADAAAGIAAAAQAAAHALAFIAYAJIATAIQALAEAGAGQAJAFAEAIQAFAJAAAMIAAAAQAAAPgFALQgFALgKAHQgJAHgMADQgMADgPAAQgSAAgTgGg");
	this.shape_5.setTransform(243.7,63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C61E24").s().p("AggAgQAJgBAGgCQAHgDAEgEQAHgIgBgOIgUAAIAAg0IA1AAIAAAsQAAAPgEAMQgEAMgIAHQgIAIgKADQgLAEgPAAg");
	this.shape_6.setTransform(230.5,55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C61E24").s().p("Ag0BaIAAiwIAyAAIAAAkQADgKAFgGQAFgIAHgFQAHgFAIgDQAJgCALAAIAAA0IgCAAQgNAAgKAEQgKAEgHAIQgHAIgDALQgDALAAAQIAABBg");
	this.shape_7.setTransform(218.9,63.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C61E24").s().p("AgrBYQgLgEgIgGQgJgHgEgKQgFgLAAgNIAAgBQAAgOAFgLQAFgKAJgGQAKgHANgEQANgDAQAAQARAAAZAIIAAgEQAAgHgCgGQgDgHgEgDQgFgEgHgDQgHgCgJAAQgNAAgMACQgKACgOAGIgMgmQAQgIAOgDQARgEAUAAQAVAAAPAGQAPAEAJAKQAKAJAFAPQAEAOAAASIAABmIgwAAIAAgTQgKALgMAFQgNAGgSAAQgMAAgLgDgAgXARQgJAFAAANIAAAAQAAAKAIAGQAHAGANgBQAHAAAIgCQAHgCAFgEQAFgEADgGQADgGAAgGIAAgJQgOgHgSAAQgPAAgKAHg");
	this.shape_8.setTransform(201.2,64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C61E24").s().p("AAjBYIgjg3IgjA3Ig1AAIA+hYIg7hXIA1AAIAgAzIAigzIA0AAIg7BWIA+BZg");
	this.shape_9.setTransform(182.8,63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C61E24").s().p("AgYB4IAAivIAxAAIAACvgAgZhLIAAgsIAzAAIAAAsg");
	this.shape_10.setTransform(168.2,60.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C61E24").s().p("AhbBzIAAjlIBeAAQAUAAARAFQARAGALAKQAMALAFAPQAHAPAAASIAAAAQAAAKgCAJQgCAJgEAHQgGAOgOAKQgMAKgSAGQgQAFgTAAIgnAAIAABFgAgoABIAoAAQAJAAAIgCQAHgCAGgFQAFgEADgHQACgHAAgHIAAAAQAAgJgDgHQgCgHgGgDQgGgFgHgCQgIgCgIAAIgoAAg");
	this.shape_11.setTransform(153.1,61.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C61E24").s().p("AgSAuQgJgEgHgHQgGgHgEgJQgEgJAAgKIAAAAQAAgJAEgJQAEgJAGgHQAHgGAJgEQAJgEAJAAQAKAAAJAEQAJAEAHAGQAGAHAFAJQADAJAAAJIAAAAQAAAKgDAJQgFAJgGAHQgHAHgJAEQgJADgKAAQgJAAgJgDg");
	this.shape_12.setTransform(133,61.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C61E24").s().p("Ag5BwQgKgDgLgGIARgkQAMAHAKAAQAGAAAEgDQAEgCADgHIhFiwIA1AAIAnB3IAnh3IA0AAIhEC0QgFAOgGAIQgFAKgHAGQgGAGgIACQgJADgLAAQgNABgLgEg");
	this.shape_13.setTransform(114.8,66.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C61E24").s().p("AgeBWQgRgHgNgNQgMgLgHgSIgFgRIgCgUIAAAAQAAgSAHgRQAGgQAMgNQALgNAQgHIARgFQAJgCAJAAQAKAAAKACQAKACAIAEQAIADAHAGIAMAMQAKANAFARQAGASAAASIgBANIh6AAQACAJAEAGQADAHAGAEQAGAEAHADQAHACAHAAQANAAAKgFQAKgEAKgJIAdAZIgOANQgIAHgJAEQgJAEgKADQgLACgMAAQgYgCgLgEgAAmgOQgBgIgDgGQgDgHgFgGQgFgFgGgCQgHgDgHAAQgHAAgHADQgGADgFAEQgFAGgDAGQgDAHgCAIIBLAAIAAAAg");
	this.shape_14.setTransform(95.6,64);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C61E24").s().p("AAfBaIAAhhQAAgKgCgGQgDgHgDgEQgEgFgGgDQgGgBgGAAQgHAAgGABQgFADgFAFQgDAEgCAHQgDAGAAAKIAABhIgyAAIAAiwIAyAAIAAAZQALgNAKgGQAHgFAFgCQAJgCAJAAQAOAAAMAEQALAFAHAJQAIAIAEAMQAEAMAAAPIAAByg");
	this.shape_15.setTransform(75.4,63.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C61E24").s().p("AghBVQgagLgMgJIAWghQAOAKAPAGQAOAFALAAQALAAAGgEQAFgDAAgGIAAgBQAAgHgLgFIgZgIQgZgJgLgIQgIgFgEgJQgFgJAAgNIAAAAQAAgNAFgLQAFgKAJgIQAJgHAMgEQAMgDAMAAQARAAARAFQARAGAPAJIgTAjQgOgIgMgEQgNgFgJAAQgIAAgFAEQgFADAAAGIAAAAQAAAHALAFIAYAJIATAIQALAEAGAGQAJAFAEAIQAFAJAAAMIAAAAQAAAPgFALQgFALgKAHQgJAHgMADQgMADgPAAQgSAAgTgGg");
	this.shape_16.setTransform(56.5,63.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C61E24").s().p("AgYB4IAAivIAxAAIAACvgAgZhLIAAgsIAzAAIAAAsg");
	this.shape_17.setTransform(43.6,60.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C61E24").s().p("AhqBzIAAjlIBbAAQAOAAALACQANACALAFQAKAEAKAGQAKAGAIAHQAJAIAGAJQAGAKAFAKQAEAKADAMQABALAAAMIAAAAQAAAMgBALQgDAMgEALQgFAKgGAJQgGAKgJAHQgIAIgKAGQgKAGgKAEQgLAFgNACQgLACgOAAgAg3BFIAoAAQAPAAANgEQAMgFAJgKQAJgJAGgMQAEgNAAgPIAAgBQAAgOgEgNQgGgNgJgJQgJgJgMgGQgNgEgPAAIgoAAg");
	this.shape_18.setTransform(26.3,61.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSB1QgOgDgMgEQgNgFgLgHQgMgHgKgJIAegkQAQAOAQAHIASAFQAJACAJAAQAPAAAJgGQAJgFAAgLIAAAAQAAgKgJgGQgJgGgcgIQgTgFgMgEQgPgGgJgHQgLgHgFgMQgFgMAAgQIAAgBQAAgPAGgNQAGgNALgKQAKgJAPgFQAPgFASAAQALAAAMACQAMACAKAEQALAEAKAFIASANIgaAmQgQgLgOgGQgQgGgNAAQgOAAgIAGQgIAGAAAIIAAABQAAALAKAGQAKAGAdAIQATAEAMAGQAOAGAJAHQAKAIAFALQAEALAAAPIAAAAQAAARgGAOQgGANgLAJQgMAKgPAEQgQAFgSAAQgNAAgMgCg");
	this.shape_19.setTransform(225.4,24.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNB1QgMgCgMgFQgLgEgJgGQgKgHgIgHQgIgIgHgJQgGgKgEgLQgEgLgDgMQgCgMAAgNIAAAAQAAgLACgMQADgLAEgLQAEgLAHgJQAGgKAIgIQAJgJAJgGQAKgGAKgFQAMgEAMgDQAMgDAMABQAPAAAOABQAMACALAFQAOAFAZASIggAnQgOgNgNgEQgOgHgUAAQgMABgMAFQgMAGgKAJQgJAKgFANQgFAOAAAOIAAAAQAAAPAFAOQAGANAIAKQAKALANAFQANAGAOgBQAOAAAMgDQAMgEAKgGIAAgiIgzAAIAAgrIBkAAIAABkQgaATgQAGQgNAGgOACQgOADgPAAQgNAAgMgCg");
	this.shape_20.setTransform(202,24.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA8B0IhviSIAACSIgzAAIAAjnIAvAAIBsCNIAAiNIAyAAIAADng");
	this.shape_21.setTransform(176.2,24.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZB0IAAjnIAyAAIAADng");
	this.shape_22.setTransform(157.7,24.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAvB0IAAhdIhdAAIAABdIgzAAIAAjnIAzAAIAABcIBdAAIAAhcIAzAAIAADng");
	this.shape_23.setTransform(139.5,24.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZB0IAAi3IhFAAIAAgwIC+AAIAAAwIhHAAIAAC3g");
	this.shape_24.setTransform(116.4,24.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhSB0IAAjnIAzAAIAAC5IByAAIAAAug");
	this.shape_25.setTransform(86.5,24.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhSB0IAAjnIAzAAIAAC5IByAAIAAAug");
	this.shape_26.setTransform(66.1,24.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABFB0IgVg0IhgAAIgWA0IgzAAIBjjnIAtAAIBkDngAAeAUIgehKIgeBKIA8AAg");
	this.shape_27.setTransform(42,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(9.5,6.8,246.2,112.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-5.4,0,5.4).s().p("AwBA2IAAhrMAgDAAAIAABrg");
	this.shape.setTransform(42.1,182.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-5.4,0,5.4).s().p("AwBA2IAAhrMAgDAAAIAABrg");
	this.shape_1.setTransform(42.1,164.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AgPA1QgIgDgGgGIgFgHIgEgIIgDgLIAAgPIAAAAQAAgHACgPIAEgKIAFgJIAHgGQAEgEAEgCIAKgDIAJgBQAIAAALADQAIACAHAHIgMASQgGgFgFgCQgFgCgGAAQgEAAgFACQgEADgDAEQgCAEgBAEIgBAIQAEgDAFgCQAGgCAFAAQAJAAAHACQAGADAFAEQAFAEAEAFQACAHAAAIIAAABQAAAHgDAHQgDAHgGAFQgFAFgHADQgIADgIAAQgNgBgEgCgAgGAEQgEABgDADIgDAEIgBAHIABAHIAEAEIAGAEIAHABIAHgBQADgBADgDQACgBACgDQABgDAAgDIAAgBQAAgDgBgDQgCgDgCgCIgGgEIgIgBIgGABg");
	this.shape_2.setTransform(55,187);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AABA2IAAhTIgSAEIgGgTIAfgJIAPAAIAABrg");
	this.shape_3.setTransform(46.2,186.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_4.setTransform(34.1,187);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AAcA2IgzhEIAABEIgYAAIAAhqIAWAAIAxBAIAAhAIAXAAIAABqg");
	this.shape_5.setTransform(22.7,187);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgTAzIgIgDIgGgGIgGgGIgDgIIgDgKIgBgLIAAg8IAYAAIAAA7QAAAHACAFQABAFADADIAHAFQAFACAEAAQAGAAAEgCQAEgCADgDQADgDACgFQABgFAAgGIAAg8IAYAAIAAA7IgBALQgBAGgCAEIgEAJIgFAGIgHAGIgIADQgMADgHAAQgNgBgGgCg");
	this.shape_6.setTransform(10.9,187);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgMA1IgJgDQgGgDgJgJIAPgQQAFAFAEADQAFACAGAAIAFgBQADgBABgCQACgCACgDIABgIIAAhEIAXAAIAABFQAAAJgCAHQgDAHgFAFQgEAFgIADQgHACgIAAQgFAAgGgBg");
	this.shape_7.setTransform(0.4,187);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgIA2QgGgBgGgDIgLgEIgKgIIAOgRQAHAGAIADIAIADIAIABQAHAAAEgDQAEgCAAgFQAAgFgEgCQgEgDgMgEIgPgEIgLgGQgFgDgCgFQgDgGAAgIIAAAAQAAgHADgGQACgGAGgEQAFgEAGgDQAHgCAIAAIALABQAFAAAFACIAKAEIAIAGIgMASQgHgFgHgDQgHgCgGAAQgGAAgEACQgEADAAAEIAAAAQAAAFAFADQAEADAOAEIAOAEIALAGQAEADACAGQACAFAAAGIAAABQAAAIgCAGQgDAGgFAFQgGADgHADQgHACgJAAIgLgBg");
	this.shape_8.setTransform(75.9,168.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_9.setTransform(66.3,168.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AATA2IgWgjIgTAAIAAAjIgXAAIAAhqIAwAAQAGgBAMADQAHADAGAGQAEAEADAGQACAGAAAIQAAAHgCAFQgBAFgDADQgDAFgFADIgJAEIAaAngAgWAAIAXAAIAIgCQADgBACgCIAEgEIABgGIAAgBQAAgEgBgDQgBgCgDgCIgGgEIgHgBIgXAAg");
	this.shape_10.setTransform(55.8,168.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AgLA2IAAhVIghAAIAAgVIBYAAIAAAVIggAAIAABVg");
	this.shape_11.setTransform(44.9,168.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AAgA2IgJgYIgtAAIgKAYIgYAAIAuhrIAVAAIAuBrgAAOAJIgOgiIgNAiIAbAAg");
	this.shape_12.setTransform(35.3,168);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AgoA2IAAhqIBQAAIAAAUIg5AAIAAAWIAyAAIAAAUIgyAAIAAAWIA6AAIAAAWg");
	this.shape_13.setTransform(24.4,168.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AAWA2IAAgrIgrAAIAAArIgXAAIAAhqIAXAAIAAAqIArAAIAAgqIAXAAIAABqg");
	this.shape_14.setTransform(13.2,168.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AgLA2IAAhVIggAAIAAgVIBYAAIAAAVIghAAIAABVg");
	this.shape_15.setTransform(2.5,168.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AAbA2IgzhEIAABEIgWAAIAAhqIAVAAIAyBAIAAhAIAWAAIAABqg");
	this.shape_16.setTransform(-13.1,168.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C3D0DE").s().p("AgLA2IAAhqIAXAAIAABqg");
	this.shape_17.setTransform(-21.7,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,159.1,205.2,38.1);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},89).to({state:[]},118).wait(59));

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
(lib._300x600_cars_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copyright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.6,591.2,1,1,0,0,0,42.8,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(196).to({startPosition:196},0).to({alpha:0,startPosition:206},10).to({_off:true},1).wait(40));

	// CTA
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,466.5,0.133,0.133,0,0,0,63.9,18.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(231).to({_off:false},0).wait(1).to({regX:63.5,regY:18.5,scaleX:0.27,scaleY:0.27,x:149.8,y:466.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:149.7,y:466.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:149.5,y:466.2},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:149.4,y:466.1},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:149.3},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:149.4},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({regX:63.6,scaleX:1.33,scaleY:1.33,x:150,y:466.5},0).wait(4));

	// cantirelogo
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(54,61);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(208).to({_off:false},0).to({alpha:1},15).wait(24));

	// Layer 8
	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,171.4,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,182.1,0.9,0.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:149.9,y:172.6},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:149.8,y:175.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:149.7,y:178.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.6,y:179.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:180.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:180.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:181.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:181.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.5,y:181.6},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).wait(82).to({startPosition:0},0).to({alpha:0},10).wait(41));

	// Layer 7
	this.instance_5 = new lib.Tween14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.5,245.1,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.4,250.9,0.9,0.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:150.4,y:245.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:150.3,y:247.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:150.1,y:248.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:249.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:150,y:249.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:250.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:250.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:250.4},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:250.5},0).to({_off:true},1).wait(129));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).wait(78).to({startPosition:0},0).to({y:251,alpha:0},10).wait(41));

	// Layer 9
	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,345.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween17("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,346.3,0.9,0.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(111).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:149.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:149.8,y:345.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:149.7,y:345.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.6},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:345.9},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.5},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).wait(74).to({startPosition:0},0).to({y:346.4,alpha:0},10).wait(41));

	// Layer 10
	this.instance_9 = new lib.Tween18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,468.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween19("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,457,0.9,0.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(115).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2,scaleY:0.2,x:149.9,y:467},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:149.8,y:463.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:149.7,y:460.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.6,y:458.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:458},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:457.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:457.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:456.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:149.5,y:456.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:456.6},0).to({_off:true},1).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(126).to({_off:false},0).wait(70).to({startPosition:0},0).to({y:457.1,alpha:0},10).wait(41));

	// Layer 6
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.7,276.8,1.344,1.344,0,0,0,46.9,13.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(97).to({_off:false},0).to({alpha:1},12).wait(87).to({alpha:0},10).wait(41));

	// Layer 5
	this.instance_12 = new lib.Symbol2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(140.1,38.5,0.9,0.9,0,0,0,119.4,17.3);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(97).to({_off:false},0).to({alpha:1},12).wait(87).to({alpha:0},10).wait(41));

	// cars logo
	this.instance_13 = new lib.Symbol4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(152.8,254,0.121,0.121,0,0,0,72.5,63);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:71.4,regY:62.6,scaleX:0.13,scaleY:0.13,x:152.6,y:253.9,alpha:0.007},0).wait(1).to({scaleX:0.15,scaleY:0.15,alpha:0.033},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:152.5,y:253.8,alpha:0.097},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:152.3,alpha:0.259},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:152,y:253.7,alpha:0.529},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:151.8,y:253.6,alpha:0.692},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:151.7,y:253.5,alpha:0.789},0).wait(1).to({scaleX:1,scaleY:1,x:151.6,alpha:0.853},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.899},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.932},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:151.5,y:253.4,alpha:0.956},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:253.5,alpha:0.974},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.986},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.994},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.999},0).wait(1).to({regX:72.7,regY:62.5,scaleX:1.15,scaleY:1.15,x:152.8,y:253.9,alpha:1},0).to({regY:62.6,scaleX:1.33,scaleY:1.33,y:254},66).wait(1).to({regX:71.4,scaleX:1.39,scaleY:1.39,x:150.9,alpha:0.988},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:150.6,alpha:0.938},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:149.7,y:254.1,alpha:0.776},0).wait(1).to({scaleX:4.52,scaleY:4.52,x:147,y:254.2,alpha:0.333},0).wait(1).to({scaleX:5.41,scaleY:5.41,x:145.8,alpha:0.147},0).wait(1).to({scaleX:5.8,scaleY:5.8,x:145.3,y:254.3,alpha:0.066},0).wait(1).to({scaleX:5.99,scaleY:5.99,x:145,y:254.2,alpha:0.025},0).wait(1).to({scaleX:6.08,scaleY:6.08,x:144.9,y:254.3,alpha:0.005},0).wait(1).to({regX:72.7,scaleX:6.11,scaleY:6.11,x:152.8,y:254.2,alpha:0},0).wait(156));

	// date
	this.instance_14 = new lib.Symbol1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(297.8,49.9,2.1,2.1,0,0,0,99,11.6);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(10).to({_off:false},0).to({alpha:1},14).wait(59).to({alpha:0},4).wait(160));

	// black bg
	this.instance_15 = new lib.blacky();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.6,127.1,1,1,0,0,0,153.5,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(87).to({alpha:0},5).wait(155));

	// gradient
	this.instance_16 = new lib.Symbol5();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.1,125.1,1,1,0,0,0,153,128);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(83).to({_off:false},0).wait(164));

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
		{src:"images/300x600_cars_en_atlas_P_.png", id:"300x600_cars_en_atlas_P_"},
		{src:"images/300x600_cars_en_atlas_NP_.jpg", id:"300x600_cars_en_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;