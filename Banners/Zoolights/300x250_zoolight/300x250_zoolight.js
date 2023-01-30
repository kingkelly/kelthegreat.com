(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_zoolight_atlas_", frames: [[0,252,300,140],[0,0,300,250],[0,394,49,37]]}
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



(lib.bb_logo = function() {
	this.spriteSheet = ss["300x250_zoolight_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_zoolights = function() {
	this.spriteSheet = ss["300x250_zoolight_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glimma = function() {
	this.spriteSheet = ss["300x250_zoolight_atlas_"];
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


(lib.Symbol10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBSQgIgDgHgGQgHgFgFgHQgDgGgCgHIgDgNIAgAAQABAJAEAFQAGAHAKAAQAJAAAHgGQAGgGAAgJQAAgHgDgEQgDgEgGgEIgWgJQgOgFgGgFQgHgGgFgJQgDgIAAgLQAAgNAGgLQAHgLALgGQALgGALAAQALAAAKAFQAKAEAFAGQAHAHACAHQADAIABAKIgfAAQgBgJgDgEQgEgGgKAAQgGAAgFAFQgFAFAAAHQAAAIAGAFQAEAEANAEQAOAFAGADQAJAFAGAGQAFAGADAIQADAJAAAKQAAAZgTAPQgPALgSAAQgIAAgKgDg");
	this.shape.setTransform(149.6,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBRIAAiFIgeAAIAAgcIBZAAIAAAcIgeAAIAACFg");
	this.shape_1.setTransform(139.5,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBRIAAihIBXAAIAAAcIg5AAIAAAnIA2AAIAAAcIg2AAIAAAnIA5AAIAAAbg");
	this.shape_2.setTransform(129.1,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXBRIgyhHIAAAAIAABHIgeAAIAAihIAeAAIAABGIAAAAIAyhGIAkAAIg9BQIA9BRg");
	this.shape_3.setTransform(117.6,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A8QgZgZAAgjQgBgSAIgPQAHgQALgKQAKgLAMgGQASgIARAAQAOAAANAEQANAFALAIQAKAIAIAJQAEAGAFAKIgiAAQgKgKgKgGQgLgGgNAAQgMAAgNAIQgMAHgIAOQgHANgBAOQAAAMAGALQAEAKAIAHQAHAHAIAEQAKAFALAAQAYAAARgUIAjAAQgGAMgGAHQgJAKgKAHQgKAGgLADQgLAEgNAAQgiAAgYgZg");
	this.shape_4.setTransform(101.5,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBRIAAihIAdAAIAAChg");
	this.shape_5.setTransform(89.6,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBRIAAiFIgeAAIAAgcIBZAAIAAAcIgeAAIAACFg");
	this.shape_6.setTransform(82,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBRIAAg8Ig2hlIAhAAIAjBKIAjhKIAiAAIg2BlIAAA8g");
	this.shape_7.setTransform(64.4,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBQQgJgDgHgFQgHgFgEgGQgDgGgDgJQgCgKAAgQIAAhmIAeAAIAABmQAAALADAIQADAHAGAFQAHAEAIAAQAKAAAHgFQAGgEADgIQACgGAAgMIAAhmIAeAAIAABmQAAAVgFANQgEAIgIAHQgHAGgKAEQgKAEgOAAQgMAAgKgDg");
	this.shape_8.setTransform(50.5,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BRIAAihIAgAAQAUgBAJADQAKACAHAFQAIAGAFAJQAEAIAAALQAAAUgSAKQAJAEAFADQAHAGAEAJQADAHAAALQAAAKgDAIQgEAIgGAGQgGAHgGADQgGADgJACQgJABgPAAgAgWA2IAPAAQAQAAAHgHQAHgFAAgLQAAgJgHgGQgHgGgPAAIgQAAgAgWgRIAKAAQAOAAAFgFQAGgEAAgJQAAgIgFgEQgFgFgMAAIgNAAg");
	this.shape_9.setTransform(37.6,13.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A548E").s().p("ArZDmQhfAAhEhDQhDhDAAhgQAAheBDhEQBEhDBfAAIWzAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAg");
	this.shape_10.setTransform(91.4,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D71FF").s().p("AgbBMQgOgIgHgOQgIgOABgPQAAgHACgHQABgFADgGIAHgNIAshFIAjAAIgkA3IAHgBQAMAAALAIQAMAHAHAMQAGALAAAPQAAAPgHAOQgIAOgNAIQgOAHgOAAQgOAAgNgHgAgVAJQgFAHAAAKQAAAMAIAIQAIAJAKAAQAMAAAIgJQAHgJAAgKQAAgMgIgIQgIgIgLABQgMgBgJAKg");
	this.shape_11.setTransform(164.1,59.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D71FF").s().p("AAhBRIhEh1IAAAAIAAB1IgeAAIAAihIAiAAIBCB1IABAAIAAh1IAeAAIAAChg");
	this.shape_12.setTransform(143.7,58.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D71FF").s().p("AAuBRIgRgqIg5AAIgSAqIghAAIBEihIAXAAIBEChgAASALIgSgxIAAAAIgSAxIAkAAg");
	this.shape_13.setTransform(127.4,58.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D71FF").s().p("AgUBOQgJgEgGgJQgGgJgDgOIAfAAQACAHADADQAEADAEAAQAHAAAEgFQAEgEAAgLIAAh1IAeAAIAAB0QAAAPgFALQgGALgKAGQgLAGgNAAQgKAAgKgFg");
	this.shape_14.setTransform(113.3,59.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D71FF").s().p("AgeANIAAgZIA9AAIAAAZg");
	this.shape_15.setTransform(98,60.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D71FF").s().p("AAMBRIAAgYIhFAAIAAgYIBJhxIAZAAIAABtIARAAIAAAcIgRAAIAAAYgAgaAdIAmAAIAAg8IgBAAg");
	this.shape_16.setTransform(81.1,58.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D71FF").s().p("AgzBTIAAgcIA6g2QAJgIAEgIQAFgIAAgHQAAgLgHgGQgHgIgKAAQgHAAgFAFQgHADgCAHQgEAGAAALIgcAAIAAgGQgBgNAIgNQAHgNAMgHQAMgHAOAAQAPAAAMAHQANAHAGANQAIAMAAAOQgBAKgCAIQgDAJgFAGQgIALgNALIggAdIBAAAIAAAcg");
	this.shape_17.setTransform(68.8,58.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D71FF").s().p("AgLBRIg/ihIAfAAIArB7IAAAAIAsh7IAgAAIg/Chg");
	this.shape_18.setTransform(48.9,58.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D71FF").s().p("AgiBNQgQgHgKgLQgLgLgFgMQgIgRAAgTQAAgQAGgPQAGgQALgLQALgLAOgGQASgJASAAQATAAAPAHQAPAHAMALQAKALAGANQAIARAAASQAAAOgEANQgFANgHAKQgHAKgLAIQgKAIgOAEQgNAFgOAAQgSAAgQgIgAgVgzQgKAFgHAHQgIAIgEAKQgEALAAAKQAAAMAEAKQAFAKAHAHQAGAIALAFQAKAEALAAQAOAAANgHQANgHAHgOQAIgNAAgPQAAgOgIgNQgHgOgNgHQgMgIgPAAQgLAAgKAFg");
	this.shape_19.setTransform(31.9,58.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D71FF").s().p("AAhBRIhEh1IAAAAIAAB1IgeAAIAAihIAiAAIBCB1IABAAIAAh1IAeAAIAAChg");
	this.shape_20.setTransform(14.6,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-4.6,-9.5,192,85), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_logo();
	this.instance.parent = this;
	this.instance.setTransform(2,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(2,13,300,140), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glimma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,37);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("AAkMtIAAhmIBIAAIAAhaIBBAAIAACnIgoAAIAAAZgADBMoIAAixIDaAAIAACxgAkZJZIAAhfIA6AAIAABfgArkHDIAAiqICvAAIAACqgAkvEKIAAkLICdAAIAAELgABiBxIAAhyIDDAAIAABygAgDgcIAAhaIiAAAIAAg1IgFAAIAAggIA8AAIAAARIBwAAIAAAwIAbAAIAABugAp5gfIAAmmIB/AAIgPGmgAJUh5IAAlZICRAAIAAFZgAAcqlIAAg6IAeAAIAAhNIDhAAIAACHg");
	this.shape.setTransform(-2.8,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-76.9,0,148.2,162.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("AAGPzIAAiFIAFAAIAAhzICsAAIAACeIhrAAIAABagAL+M1IAAhBIBkAAIAAhEICEAAIAAgjIAhAAIAAAjIAoAAIAABVIiAAAIAAAwgAjJKGIAAneIBJAAIAAHegADiHZIAAiOIAMAAIAAg8IEMAAIAABcIi5AAIAABugAwuGJIAAg8IAwAAIAAhhIAeAAIAAhdIBhAAIAAgUIC0AAIAABTIhmAAIAAAeIAFAAIAAB9IgZAAIAAAggAKSEqIAAgeIi5AAIAAhNIg3AAIAAjPIBxAAIAACEIDmAAIAAAHICJAAIAAAjIBGAAIAABdIhGAAIAAAvgAB2B0IAAidIDIAAIAACdgArCB0IAAkLICbAAIAAELgAL7i3IAAnFIAKAAIACAFQAJAOAcAKIALAEIAAGkgAChi6IAAjZICCAAIAAhLIBuAAIAABLIAFAAIAADZgAlhjOIAAkYIAoAAIAAgZIAKAAIAAhuIBmAAIAACUIgZAAIAAA3IgqAAIAADUgAhJqCIAAljIBvAAIAAAMIAoAAIAABdIgoAAIAACTIAcAAIAABkIgcAAIAAADgAj2qHIAAlrIA8AAIAAFrgACNsJIAAgPIhkAAIAAgwIETAAIAAAZIAHAAIAAAmg");
	this.shape.setTransform(24.7,101.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-82.4,0,214.2,202.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("Al7PvIAAg7IhQAAIAAh5IibAAIAAgjIgZAAIAAh3IBQAAIAAAyIC0AAIAAgpIAZAAIAAg8IBGAAIAAheIBzAAIAAAEIAeAAIAABlIgeAAIAABkIhGAAIAABFIgyAAIAABgIGPAAIAAgUICbAAIAABkIhzAAIAAAdgAMgPrIAAjrIgtAAIAAhlIDcAAIAAApIAyAAIAAAnIAjAAIAAEAgAtbERIAAgLIiMAAIAAiuIg8AAIAAjmIF8AAIAADmIhfAAIAABUIAFAAIAABlgAI6BSIAAkhIAUAAIAAgOIDDAAIAACfIhuAAIAACQgAhPBOIAAknIA8AAIAAEngAkrA0IAAkNIBzAAIAAENgAnLjJIAAjrIngAAIAAlLIIhAAIAAEeIAoAAIAAEYgAFUjdIAAm0IAtAAIAAgKID/AAIAACHIjhAAIAAE3gADImNIAAhtIBuAAIAABtgAlEqqIAAh8IFJAAIAAB8gAl2tJIAAimIA8AAIAACmg");
	this.shape.setTransform(94,76.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-12,-24,212,201.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("AoWQ7IAAjnIGGAAIAADngAAyQOIAAi+IDrAAIAAiMIBpAAIAACgIgjAAIAACqgAu/OfIAAibIhaAAIAAi0IDmAAIAAiRICgAAIAADnIhfAAIAABeIh4AAIAACbgAJiOVIAAgKIgeAAIAAh3IiRAAIAAluIBLAAIAABkIEsAAIAAEKIhfAAIAAB3IgyAAIAAAKgAphHsIAAiuIBfAAIAACugALpE4IAAhKIkYAAIAAjwIGBAAIAAgtIExAAIAAAtIAFAAIAADwIknAAIAABKgAiuEpIAAgnIhkAAIAAkOID1AAIAAEOIhLAAIAAAngAEJgbIAAmzIDNAAIAAGzgAqEgfIAAmpICMAAIAAGpgAhPnxIAAhpIgeAAIAAgtIBBAAIAAAjIDHAAIAABzgADSn7IAAi9ID6AAIAAC9gAyHpPIAAmbIETAAIAAhQIG9AAIAADhIlUAAIAAEKg");
	this.shape.setTransform(116,100.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,-8,232,216.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("ABORHIAAiRIHaAAIAACRgAwmMqIAAhpIhaAAIAAksIDOAAIAAEEIA7AAIAACRgAQJK8IAAkdIg9AAIAAjmIDEAAIAACbIAjAAIAAFogAhvKZIAAiRIAEAAIAAjwIB8AAIAADwIAzAAIAACRgAnDJYIAAkEIDNAAIAAEEgAG2I1IAAjDIByAAIAADDgAB7HgIAAi5IBkAAIAAC5gAmgCbIAAlEIBFAAIAAFEgAs/CCIAAjMInRAAIAAj/IIlAAIAADDIAzAAIAAEIgAkBizIAAjNIAyAAIAAg8IAaAAIAAgtIAZAAIAAhzICtAAIAACqIhsAAIAAAeIgUAAIAAAUIAKAAIAADNgANPkhIAAkxIg7AAIAAhuIA7AAIAAhfIHCAAIAAH+gAixp/IAAnHIBzAAIAAHHgAnYrjIAAkJIBzAAIAAEJgAFwtHIAAivIDwAAIAACvg");
	this.shape.setTransform(47.3,100.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-82.4,-9,259.5,219), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_zoolights();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(24.6,18.6,0.1,0.1,172.2,0,0,24.3,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:24.5,regY:18.5,scaleX:0.4,scaleY:0.4,x:24.5,y:18.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:24.4,y:18.1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:18},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({regX:24.4,regY:18.4,scaleX:1,scaleY:1,x:24.7,y:18.5},0).wait(1).to({regX:24.5,regY:18.5,scaleX:0.99,scaleY:0.99,x:24.6,y:18.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:24.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:24.6},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:18.5},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:18.4},0).wait(1).to({scaleX:0.11,scaleY:0.11,y:18.5},0).wait(1).to({regX:24.3,regY:17.9,scaleX:0.1,scaleY:0.1,y:18.6},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.9,16.3,5.4,4.3);


(lib.MastaBlasta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// twinkle
	this.instance = new lib.Symbol7("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-13.5,23,0.5,0.5,0,0,0,24.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:-13.4,y:22.9,startPosition:1},0).wait(1).to({rotation:16.1,x:-13.5,y:22.8,startPosition:2},0).wait(1).to({rotation:36.1,x:-13.6,startPosition:3},0).wait(1).to({rotation:61.1,x:-13.7,y:22.6,startPosition:4},0).wait(1).to({rotation:86.9,x:-13.9,startPosition:5},0).wait(1).to({rotation:110.2,x:-14,y:22.5,startPosition:6},0).wait(1).to({rotation:129.7,x:-14.2,y:22.4,startPosition:7},0).wait(1).to({rotation:145.2,x:-14.3,y:22.3,startPosition:8},0).wait(1).to({rotation:156.9,x:-14.4,y:22.2,startPosition:9},0).wait(1).to({rotation:165.4,startPosition:10},0).wait(1).to({rotation:170.9,x:-14.5,y:22.1,startPosition:11},0).wait(1).to({rotation:174,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,y:22,startPosition:13},0).wait(1));

	// twinkle
	this.instance_1 = new lib.Symbol7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.5,37,1,1,0,0,0,24.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:50.6,y:36.7,startPosition:1},0).wait(1).to({rotation:16.1,x:50.7,startPosition:2},0).wait(1).to({rotation:36.1,y:36.5,startPosition:3},0).wait(1).to({rotation:61.1,y:36.3,startPosition:4},0).wait(1).to({rotation:86.9,y:36.1,startPosition:5},0).wait(1).to({rotation:110.2,y:35.9,startPosition:6},0).wait(1).to({rotation:129.7,x:50.6,y:35.7,startPosition:7},0).wait(1).to({rotation:145.2,x:50.5,y:35.6,startPosition:8},0).wait(1).to({rotation:156.9,y:35.4,startPosition:9},0).wait(1).to({rotation:165.4,x:50.4,y:35.3,startPosition:10},0).wait(1).to({rotation:170.9,startPosition:11},0).wait(1).to({rotation:174,y:35.2,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,x:50.5,y:35.1,startPosition:13},0).wait(5));

	// twinkle
	this.instance_2 = new lib.Symbol7("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-19.5,-95,0.7,0.7,0,0,0,24.6,18.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).wait(1).to({regY:18.3,rotation:3.9,x:-19.4,y:-95.1,startPosition:1},0).wait(1).to({rotation:16.1,startPosition:2},0).wait(1).to({rotation:36.1,x:-19.3,y:-94.9,startPosition:3},0).wait(1).to({rotation:61.1,x:-19.2,y:-94.7,startPosition:4},0).wait(1).to({rotation:86.9,x:-19.3,y:-94.4,startPosition:5},0).wait(1).to({rotation:110.2,y:-94.3,startPosition:6},0).wait(1).to({rotation:129.7,x:-19.4,y:-94.1,startPosition:7},0).wait(1).to({rotation:145.2,y:-94,startPosition:8},0).wait(1).to({rotation:156.9,y:-93.9,startPosition:9},0).wait(1).to({rotation:165.4,x:-19.5,y:-93.8,startPosition:10},0).wait(1).to({rotation:170.9,x:-19.4,startPosition:11},0).wait(1).to({rotation:174,x:-19.5,startPosition:12},0).wait(1).to({regX:24.4,regY:18.4,rotation:175,x:-19.4,y:-94,startPosition:13},0).wait(12));

	// twinkle
	this.instance_3 = new lib.Symbol7("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-71.5,13,1,1,0,0,0,24.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:-71.3,y:12.8,startPosition:1},0).wait(1).to({rotation:16.1,x:-71.1,y:12.9,startPosition:2},0).wait(1).to({rotation:36.1,x:-70.8,y:13,startPosition:3},0).wait(1).to({rotation:61.1,x:-70.5,y:13.1,startPosition:4},0).wait(1).to({rotation:86.9,x:-70.2,startPosition:5},0).wait(1).to({rotation:110.2,x:-70,y:13.3,startPosition:6},0).wait(1).to({rotation:129.7,x:-69.9,y:13.2,startPosition:7},0).wait(1).to({rotation:145.2,x:-69.8,startPosition:8},0).wait(1).to({rotation:156.9,x:-69.7,startPosition:9},0).wait(1).to({rotation:165.4,x:-69.6,startPosition:10},0).wait(1).to({rotation:170.9,y:13.3,startPosition:11},0).wait(1).to({rotation:174,x:-69.5,y:13.2,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,y:13.1,startPosition:13},0).wait(16));

	// twinkle
	this.instance_4 = new lib.Symbol7("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(110.5,-65,1,1,0,0,0,24.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:110.6,y:-65.2,startPosition:1},0).wait(1).to({rotation:16.1,x:110.7,y:-65.1,startPosition:2},0).wait(1).to({rotation:36.1,y:-65,startPosition:3},0).wait(1).to({rotation:61.1,y:-64.9,startPosition:4},0).wait(1).to({rotation:86.9,startPosition:5},0).wait(1).to({rotation:110.2,y:-64.7,startPosition:6},0).wait(1).to({rotation:129.7,x:110.6,y:-64.8,startPosition:7},0).wait(1).to({rotation:145.2,x:110.5,y:-64.7,startPosition:8},0).wait(1).to({rotation:156.9,startPosition:9},0).wait(1).to({rotation:165.4,x:110.4,startPosition:10},0).wait(1).to({rotation:170.9,startPosition:11},0).wait(1).to({rotation:174,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,x:110.5,y:-64.9,startPosition:13},0).wait(33));

	// Layer 7
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(20,-86.5,1,1,0,0,0,12.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({alpha:0},36,cjs.Ease.get(-0.98)).to({_off:true},47).wait(5));

	// Layer 6
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-19.8,-78.8,1,1,0,0,0,3,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({alpha:0},34,cjs.Ease.get(-1)).to({_off:true},51).wait(5));

	// Layer 5
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-90.2,-50.4,1,1,0,0,0,27.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({alpha:0.641},9).to({alpha:0.801},11).to({alpha:0},25).to({_off:true},45).wait(5));

	// Layer 10
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-79.9,-90.9,1,1,0,0,0,19,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({alpha:0.602},10).to({alpha:0.801},17).to({alpha:0},24).to({_off:true},42).wait(5));

	// Layer 3
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-40.2,-84.2,1,1,0,0,0,5.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({alpha:0.379},20).to({alpha:0.578},12).to({alpha:0},19).wait(51));

	// Layer 12
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(3,8,1,1,0,0,0,153,133);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


// stage content:
(lib._300x250_zoolight = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// grad
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0.459,1],0,0,0,0,0,200).s().p("A4DT7MAAAgn1MAwHAAAMAAAAn1g");
	this.shape.setTransform(151,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(159));

	// Layer 17
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(150.1,44,1,1,0,0,0,88.4,15.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},27,cjs.Ease.get(-1)).wait(3));

	// Layer 16
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149,123,1,1,0,0,0,150,37);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(0.96)).wait(24));

	// MASTA
	this.instance_2 = new lib.MastaBlasta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.2,122,1,1,0,0,0,7.2,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({startPosition:110},0).to({alpha:0},18,cjs.Ease.get(1)).wait(38));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66FF00").ss(0.1,1,1).p("A4I0TMAwRAAAMAAAAonMgwRAAAg");
	this.shape_1.setTransform(148.5,124.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#25077A").s().p("A4IUUMAAAgonMAwRAAAMAAAAong");
	this.shape_2.setTransform(148.5,124.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(143.1,118.1,312,262);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_zoolight_atlas_.png", id:"300x250_zoolight_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;