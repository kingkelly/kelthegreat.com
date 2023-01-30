(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_birdy_atlas_", frames: [[0,0,626,120],[628,0,310,231]]}
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



(lib.docBC = function() {
	this.spriteSheet = ss["300x600_birdy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.volcanoman = function() {
	this.spriteSheet = ss["300x600_birdy_atlas_"];
	this.gotoAndStop(1);
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.docBC();
	this.instance.parent = this;
	this.instance.setTransform(-142,-30,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-30,563.4,108);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAOIgEgDIgEgFIgBgGIABgFIAEgFIAEgDIAFgBIAGABIAFADIADAFIABAFIgBAGIgDAFIgFADIgGABg");
	this.shape.setTransform(68.7,280.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_1.setTransform(61.6,274);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAeIAWhBIAZAKIgeA+g");
	this.shape_2.setTransform(53.5,267.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgIgHQgGgHgNAAQgIAAgHADQgIAEgGAFIAABHIAQAAIAAAUIg5AAIAAgUIARAAIAAhQIgRAAIAAgVIAnAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAFAGADAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_3.setTransform(42.1,275.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_4.setTransform(28.2,275.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_5.setTransform(18.8,272.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0A+IAAgUIARAAIAAg3QAAgOgHgHQgHgHgNAAQgIAAgJAEQgHADgGAGIAABGIAQAAIAAAUIg4AAIAAgUIASAAIAAg3QAAgOgIgHQgGgHgOAAQgIAAgHADQgIAEgGAFIAABHIARAAIAAAUIg6AAIAAgUIARAAIAAhQIgRAAIAAgVIAoAAIAAAPIAIgHIAJgFIALgEIAKgBQANAAAJAFQAJAFAFAKIAJgHIALgHIALgEQAGgCAHAAQAJAAAIADQAIADAFAFQAGAGADAIQACAJAAALIAAA6IARAAIAAAUg");
	this.shape_6.setTransform(-2.4,275.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_7.setTransform(-21.2,275.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA9IAAgUIAGAAIgYgeIgWAeIAGAAIAAAUIgpAAIAAgUIAKAAIAlgqIgigmIgNAAIAAgVIApAAIAAAVIgFAAIAVAcIAXgcIgGAAIAAgVIAoAAIAAAVIgKAAIgiAnIAkApIAJAAIAAAUg");
	this.shape_8.setTransform(-33.9,275.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA8QgKgEgIgJQgHgHgFgNQgDgMAAgPQgBgNAEgLQADgMAIgIQAHgJAKgFQAMgFAMAAQAOAAAKAEQAIAFAGAGQAGAHADAJQADAJACAIIAAAJIABAIIhXAAIAAAKIADAIQAEAMAKAGQAJAFALABQAKgBAJgCQAJgCAJgGIAJAOQgLAJgMAEQgNAEgNAAQgLAAgLgEgAAfgOIgCgMQgCgFgEgFQgDgEgGgDQgFgCgIAAQgGAAgHACQgFACgEAFQgEADgCAHQgDAFgBAHIA+AAg");
	this.shape_9.setTransform(-47.5,275.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_10.setTransform(141.8,247);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_11.setTransform(131.5,248.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_12.setTransform(122,245.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_13.setTransform(112.3,248.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_14.setTransform(102.4,247);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTA8QgLgEgIgJQgHgHgEgMQgFgNAAgPQABgMADgMQADgMAIgIQAHgJALgFQALgFANAAQANAAAJAEQAJAFAHAGQAFAHADAJQADAJABAIIABAJIAAAIIhWAAIABAKIACAIQAEAMAJAGQAKAFAMABQAJgBAJgCQAIgCAKgGIAJAOQgMAJgMAEQgMAEgNAAQgLAAgKgEgAAfgOIgCgMQgCgFgDgFQgEgEgFgDQgGgCgIAAQgHAAgFACQgGACgEAFQgEADgDAHQgCAFgBAHIA+AAg");
	this.shape_15.setTransform(90.7,248.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA0A+IAAgUIARAAIAAg3QAAgOgHgHQgHgHgNAAQgIAAgJAEQgIADgGAGIAABGIARAAIAAAUIg4AAIAAgUIASAAIAAg3QAAgOgIgHQgGgHgNAAQgJAAgHADQgIAEgGAFIAABHIAQAAIAAAUIg5AAIAAgUIARAAIAAhQIgRAAIAAgVIAnAAIAAAPIAJgHIAJgFIALgEIAKgBQANAAAJAFQAJAFAGAKIAJgHIAKgHIALgEQAGgCAHAAQAJAAAIADQAIADAFAFQAGAGADAIQACAJAAALIAAA6IARAAIAAAUg");
	this.shape_16.setTransform(72.2,248.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_17.setTransform(52.9,248.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_18.setTransform(41.4,247);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag/BaIAAgUIARAAIAAiHIgRAAIAAgVIAmAAIAAAKQAIgGAJgDQAIgEAKAAQAMAAAKAFQAKAEAHAIQAHAIAEAMQAEALAAAOQAAAOgEANQgFALgHAIQgIAJgLAFQgLAEgNAAQgIAAgIgBIgNgFIAAAnIATAAIAAAUgAgLhCQgIADgFAGIAABBQADAEAIADQAHADAKAAQAHAAAHgCQAHgDAFgGQAGgGADgIQADgIAAgLQAAgLgDgIQgDgIgFgFQgFgGgHgCQgHgDgIAAQgHAAgIADg");
	this.shape_19.setTransform(29.4,251.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_20.setTransform(15,248.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgIgHQgHgHgMAAQgIAAgHADQgIAEgHAFIAABHIARAAIAAAUIg5AAIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAGAGACAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_21.setTransform(-5.3,248.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_22.setTransform(-20.1,248.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNBYIgNgDIgNgFQgHgDgFgFIALgRIAIAFIAKAFIALACIALABQAIAAAGgCQAHgCAEgEQAFgFACgIQACgIAAgMIAAgCQgGAGgIAEQgIADgKAAQgLAAgLgEQgLgEgHgJQgIgIgFgMQgEgLAAgPQAAgOAEgMQAEgLAIgIQAIgJALgFQALgEAMAAQAJAAAIACQAHADAHAFIAAgHIAWAAIAABzQAAAdgOAPQgOAPgcAAgAgJhCQgHADgFAFQgFAGgDAIQgDAIAAALQAAALACAIQADAIAFAGQAFAFAHAEQAHACAIAAIAKgBIAIgDIAGgEIAFgEIAAhCQgGgFgIgDQgIgCgIAAQgHAAgGADg");
	this.shape_23.setTransform(-39,251.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALA+IAAgUIASAAIAAg3QAAgOgIgHQgGgHgOAAQgHAAgHADQgIAEgGAFIAABHIARAAIAAAUIg6AAIAAgUIARAAIAAhQIgRAAIAAgVIAoAAIAAAPIAIgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAFAGADAIQADAJABALIAAA6IAQAAIAAAUg");
	this.shape_24.setTransform(-53.7,248.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_25.setTransform(-65.4,245.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AApBbIgwg2IgQAAIAAAiIAKAAIAAAUIg0AAIAAgUIAUAAIAAiNIgVAAIAAgUIArAAIAAAUIAABaIAVAAIAbgdIgHAAIAAgUIAuAAIAAAUIgPAAIglAlIAoArIAPAAIAAAUg");
	this.shape_26.setTransform(-76.6,245.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_27.setTransform(-91.7,248.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_28.setTransform(-106,248.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhBBZIAAgUIAQAAIAAiIIgQAAIAAgVIBOAAQALABAKAEQAJAEAHAGQAHAIAEAJQAEAJAAALQAAALgGAKQgGAJgMAGQAGACAEAEQAFAEADAFQAEAFACAFIABALQAAALgEAKQgEAKgHAGQgHAIgJAEQgKAEgLAAgAgaBFIApAAQAFAAAFgDIAJgHQADgFACgFQACgHAAgGQAAgFgCgEQgCgFgDgEIgJgGQgFgCgFAAIgpAAgAgagKIAoAAQAFAAAFgBQAFgDAEgEQADgEACgEQACgFAAgGQAAgFgCgFQgCgHgDgDQgEgFgFgDQgFgCgFAAIgoAAg");
	this.shape_29.setTransform(-120.6,246);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-477,229.8,971.3,60), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAOIgFgDIgDgFIgBgGIABgFIADgFIAFgDIAFgBIAGABIAFADIADAFIABAFIgBAGIgDAFIgFADIgGABg");
	this.shape.setTransform(112.9,250.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBZQgLgFgIgIQgIgJgEgMQgEgMAAgPQAAgOAEgMQAEgKAIgIQAHgIALgFQALgEAOgBQAHAAAIACQAHADAHAEIAAguIgRAAIAAgUIAmAAIAAChIASAAIAAAUIgnAAIAAgKQgGAGgIAEQgIACgJAAQgMAAgKgDgAgSgLQgHADgFAFQgFAFgDAHQgDAJAAAKQAAALADAIQADAKAFAFQAFAGAHADQAHADAIgBQAJABAHgDQAGgDAGgGIAAhDQgGgFgIgCQgHgCgHAAQgIAAgHADg");
	this.shape_1.setTransform(102.9,242.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_2.setTransform(89.6,245.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_3.setTransform(77.3,245.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMBbIAAgUIAQAAIAAg3QAAgOgHgGQgHgIgNAAQgHAAgHAEQgIADgHAFIAABHIASAAIAAAUIg6AAIAAgUIASAAIAAiNIgQAAIAAgUIAmAAIAABKIABAAIAHgGIAJgFIAKgDIAKgBQAJAAAIACQAIADAFAGQAGAFADAJQADAHAAAMIAAA6IASAAIAAAUg");
	this.shape_4.setTransform(63.2,242.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_5.setTransform(44.1,245.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_6.setTransform(34.6,242.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBYIgNgDIgNgFQgHgDgFgFIALgRIAIAFIAKAFIALACIALABQAIAAAGgCQAHgCAEgEQAFgFACgIQACgIAAgMIAAgCQgGAGgIADQgIAEgKAAQgLAAgLgEQgLgEgHgJQgIgIgFgMQgEgLAAgPQAAgOAEgMQAEgMAIgHQAIgJALgFQALgEAMAAQAJAAAIACQAHACAHAGIAAgHIAWAAIAAB0QAAAdgOAPQgOAOgcAAgAgJhCQgHADgFAFQgFAGgDAIQgDAIAAALQAAAKACAJQADAIAFAFQAFAHAHACQAHADAIAAIAKgBIAIgDIAGgDIAFgFIAAhCQgGgFgIgDQgIgBgIAAQgHAAgGACg");
	this.shape_7.setTransform(18,248.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgIgHQgGgHgNAAQgIAAgHADQgIAEgGAFIAABHIAQAAIAAAUIg5AAIAAgUIARAAIAAhQIgRAAIAAgVIAnAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAFAGADAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_8.setTransform(3.4,245.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_9.setTransform(-8.3,242.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_10.setTransform(-16.7,243.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALA+IAAgUIASAAIAAg3QAAgOgIgHQgGgHgOAAQgGAAgIADQgIAEgGAFIAABHIARAAIAAAUIg6AAIAAgUIARAAIAAhQIgRAAIAAgVIAoAAIAAAPIAIgHIAJgFIAKgEIAKgBQAKAAAHADQAJADAFAFQAFAGADAIQAEAJAAALIAAA6IARAAIAAAUg");
	this.shape_11.setTransform(-29.2,245.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTA8QgLgEgHgJQgIgHgEgMQgFgNAAgPQABgNADgLQAEgMAHgIQAHgJALgFQAKgFANAAQAOAAAJAEQAJAEAHAHQAFAHADAJQADAIABAJIABAJIAAAIIhWAAIABAKIACAIQAEAMAJAGQAKAGAMAAQAJAAAJgDQAIgDALgFIAJAOQgNAJgMAEQgMAEgNAAQgLAAgKgEgAAfgOIgCgMQgCgFgDgFQgEgEgFgDQgGgCgIAAQgHAAgFACQgGACgEAFQgEADgDAHQgCAGgBAGIA+AAg");
	this.shape_12.setTransform(-44.4,245.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_13.setTransform(-56.7,245.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_14.setTransform(-69,245.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag+BZIAAgUIAQAAIAAiJIgQAAIAAgUIBGAAQAMAAAKADQAKADAIAGQAHAGAEAJQAEAJAAAMQAAAKgEAJQgEAIgHAHQgHAGgLADQgKADgMAAIgfAAIAAA/IASAAIAAAUgAgXgMIAfAAQAHAAAGgBQAFgCAEgEQAEgDADgGQACgFAAgHQAAgNgIgHQgIgIgSAAIgcAAg");
	this.shape_15.setTransform(-82.2,242.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-92.3,226.6,209.9,33), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.volcanoman();
	this.instance.parent = this;
	this.instance.setTransform(-537,284,1.181,1.181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-537,284,366.2,272.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBaIgFgDIgDgFIgCgGIACgGIADgEIAFgEIAGgBIAGABIADAEIAEAEIABAGIgBAGIgEAFIgDADIgGACgAgUAzIABgVQABgIADgHQACgHAEgGIALgKIALgJIAJgIQADgDACgEQACgFAAgGQAAgFgCgFQgCgFgDgEIgJgGQgFgCgFAAQgJAAgGADQgGADgEAFQgEAEgCAGIgBAIIgVgBQABgKAEgJQAEgIAHgHQAHgHAKgEQAJgEALAAQALAAAKAEQAJAEAGAHQAGAGADAJQADAIAAAJQAAAMgGAKQgGAKgMAJIgMAJQgIAGgDAJQgDAJAAAGIgBAPg");
	this.shape.setTransform(250.3,211);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBbIAAgUIASAAIAAiNIgSAAIAAgUIAmAAIAAChIATAAIAAAUg");
	this.shape_1.setTransform(240,210.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_2.setTransform(229.2,214);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_3.setTransform(218.5,212.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_4.setTransform(210.3,211.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA7QgLgEgIgIQgIgJgEgMQgEgMAAgOQAAgNAEgMQAFgMAIgIQAIgJAKgFQALgEALAAQAMAAAKADQAKAEAIAJIAMAAIAAAUIgWAAQgFgJgHgEQgIgEgKAAQgGAAgHADQgHADgFAGQgFAGgDAJQgDAIAAAJQAAAKADAJQADAHAFAGQAFAHAHACQAHAEAGAAQALAAAJgGQAIgFAFgLIASAJQgEAHgFAHQgFAGgGAEQgHAEgIACQgHACgJABQgMAAgKgGg");
	this.shape_5.setTransform(199.9,214);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgFgMQgDgMAAgPQgBgNAEgLQADgMAIgJQAHgIAKgFQAMgFANAAQANAAAKAEQAIAEAGAHQAGAHADAJQADAJACAJIAAAJIABAIIhXAAIAAAJIADAIQAEAMAKAGQAJAFALAAQAKABAJgDQAJgCAJgGIAJAPQgLAIgMAEQgNAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgGgDQgFgCgIAAQgGAAgHACQgFADgEADQgEAEgCAGQgDAHgBAHIA+AAg");
	this.shape_6.setTransform(186.1,214);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_7.setTransform(173.8,213.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgFgMQgDgMAAgPQAAgNADgLQAEgMAHgJQAHgIAKgFQAMgFANAAQANAAAJAEQAKAEAFAHQAGAHADAJQADAJACAJIAAAJIABAIIhXAAIABAJIACAIQAEAMAKAGQAJAFALAAQAKABAJgDQAJgCAJgGIAJAPQgLAIgMAEQgNAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgGgDQgFgCgIAAQgGAAgHACQgFADgEADQgEAEgDAGQgCAHgBAHIA+AAg");
	this.shape_8.setTransform(155.8,214);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMBbIAAgUIAQAAIAAg3QAAgOgHgGQgHgIgNAAQgHAAgHAEQgIADgHAFIAABHIASAAIAAAUIg6AAIAAgUIASAAIAAiNIgQAAIAAgUIAmAAIAABKIABAAIAHgGIAJgFIAKgDIAKgBQAJAAAIACQAIADAFAGQAGAFADAJQADAHAAAMIAAA6IASAAIAAAUg");
	this.shape_9.setTransform(141.5,210.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_10.setTransform(129,212.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_11.setTransform(113.5,213.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_12.setTransform(100.7,214);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgrBbIAAgUIASAAIAAhSIgUAAIAAgSIAUAAIAAgTQAAgLADgIQADgHAFgGQAFgFAIgDQAGgCAJAAIALAAIAJACIAHACIAFADIgHAPIgJgDIgNgCQgKAAgFAGQgFAGAAAMIAAAUIAbAAIAAASIgbAAIAABSIASAAIAAAUg");
	this.shape_13.setTransform(90.5,210.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_14.setTransform(75.3,212.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_15.setTransform(67.1,211.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrBbIAAgUIASAAIAAhSIgUAAIAAgSIAUAAIAAgTQAAgLADgIQADgHAFgGQAFgFAIgDQAGgCAJAAIALAAIAJACIAHACIAFADIgHAPIgJgDIgNgCQgKAAgFAGQgFAGAAAMIAAAUIAbAAIAAASIgbAAIAABSIASAAIAAAUg");
	this.shape_16.setTransform(60,210.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_17.setTransform(50,212.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_18.setTransform(37,214.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_19.setTransform(22.5,214);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglBYIAAgUIAOAAIAOghIgphmIgKAAIAAgUIAuAAIAAAUIgOAAIAcBMIAdhMIgPAAIAAgUIAvAAIAAAUIgNAAIg1CHIAQAAIAAAUg");
	this.shape_20.setTransform(226.2,189.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBYQgLgEgIgIQgIgIgEgMQgEgNAAgPQAAgOAEgLQAEgLAIgIQAHgJALgEQALgFAOABQAHAAAIACQAHABAHAGIAAgvIgRAAIAAgVIAmAAIAACiIASAAIAAAUIgnAAIAAgKQgGAGgIADQgIAEgJAAQgMAAgKgFgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAJQADAIAFAGQAFAGAHADQAHADAIAAQAJAAAHgDQAGgDAGgGIAAhCQgGgFgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_21.setTransform(212.4,184.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_22.setTransform(199.2,186.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_23.setTransform(190,184.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgLBaQgIgDgFgEIAAAHIgWAAIAAihIgSAAIAAgUIAoAAIAABHQAIgGAJgEQAIgDAKAAQAMAAAJAEQAKAFAIAIQAHAIAEAKQAEAMAAANQAAAPgFAMQgEAMgIAIQgIAJgLAFQgLAEgNAAQgIAAgIgCgAgLgKQgHADgGAGIAABAQAEAEAHADQAHADAKAAQAIAAAHgDQAGgCAGgGQAFgGADgIQADgJAAgLQAAgKgDgIQgDgIgFgFQgFgFgHgDQgGgDgIAAQgIAAgIAEg");
	this.shape_24.setTransform(178.5,184);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_25.setTransform(159.3,187);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcBYQgLgEgIgIQgIgIgEgMQgEgNAAgPQAAgOAEgLQAEgLAIgIQAHgJALgEQALgFAOABQAHAAAIACQAHABAHAGIAAgvIgRAAIAAgVIAmAAIAACiIASAAIAAAUIgnAAIAAgKQgGAGgIADQgIAEgJAAQgMAAgKgFgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAJQADAIAFAGQAFAGAHADQAHADAIAAQAJAAAHgDQAGgDAGgGIAAhCQgGgFgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_26.setTransform(140.4,184.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgHgHQgIgJgEgMQgFgMAAgPQABgNADgLQAEgMAHgJQAHgIALgFQAKgFANAAQAOAAAJAEQAJAEAHAHQAFAHADAJQADAJABAJIABAJIAAAIIhWAAIABAJIACAIQAEAMAJAGQAKAFAMAAQAJABAJgDQAIgCALgGIAJAPQgNAIgMAEQgMAEgNAAQgLAAgKgEgAAfgNIgCgNQgCgGgDgEQgEgEgFgDQgGgCgIAAQgHAAgFACQgGADgEADQgEAEgDAGQgCAHgBAHIA+AAg");
	this.shape_27.setTransform(125.7,187);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgEgMQgFgMAAgPQAAgNAEgLQADgMAIgJQAHgIALgFQALgFANAAQANAAAJAEQAJAEAHAHQAFAHADAJQADAJABAJIABAJIAAAIIhWAAIABAJIACAIQAEAMAKAGQAJAFALAAQAKABAJgDQAIgCAKgGIAJAPQgMAIgMAEQgMAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgFgDQgGgCgIAAQgHAAgGACQgFADgEADQgEAEgDAGQgCAHgBAHIA+AAg");
	this.shape_28.setTransform(112,187);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALA+IAAgUIASAAIAAg3QAAgOgIgHQgGgHgNAAQgIAAgHADQgIAEgGAFIAABHIAQAAIAAAUIg5AAIAAgUIARAAIAAhQIgRAAIAAgVIAnAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAFAGADAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_29.setTransform(97.4,186.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_30.setTransform(75.6,187.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_31.setTransform(61.1,187);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdBZIAAgUIAQAAIAAg/IgvhKIgNAAIAAgUIA5AAIAAAUIgRAAIAhA5IAkg5IgTAAIAAgUIA5AAIAAAUIgPAAIgxBLIAAA+IASAAIAAAUg");
	this.shape_32.setTransform(46.2,184.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(13.4,168,245,60), null);


(lib.shaker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHCDIgHgFIgFgIIgCgIIACgIIAFgHIAHgFIAIgBIAIABIAGAFIAFAHIABAIIgBAIIgFAIIgGAFIgIABgAgOA+IgHjBIAqAAIgGDBg");
	this.shape.setTransform(164.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCAIgHgFIgEgHIgDgIIADgIIAEgHIAHgFIAJgCIAIACIAGAFIAEAHIACAIIgCAIIgEAHIgGAFIgIACgAgcBIIABgdQABgMAEgKQADgKAGgIIAQgPIAQgNIAMgKQAFgGADgGQACgGAAgIQAAgIgCgHQgDgHgFgFQgFgGgHgDQgIgDgHAAQgNAAgJAEQgIAFgGAHQgFAGgDAIIgCAMIgegCQACgOAFgMQAGgNAKgJQAKgKAOgFQAOgGAPAAQARAAAMAGQANAFAJAJQAIAJAFANQAFAMAAANQAAARgJAOQgJAOgQAMIgSANQgKAJgFANQgEAMAAAJIgBAVg");
	this.shape_1.setTransform(150.8,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBXIAAgcIAYAAIAAhOQAAgTgKgKQgKgLgTAAQgKAAgLAFQgLAGgKAHIAABkIAZAAIAAAcIhRAAIAAgcIAYAAIAAhyIgYAAIAAgcIA3AAIAAAUIAMgKIANgHIAOgFIAPgBQAOAAALADQALAEAIAIQAIAHAEANQAEAMAAARIAABRIAYAAIAAAcg");
	this.shape_2.setTransform(130.2,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBVQgPgGgMgMQgKgLgGgRQgGgRAAgWQAAgSAFgRQAFgQALgMQAKgMAPgIQAPgHATAAQATAAANAGQANAGAJAKQAHAJAFANQAEAMACANIABANIAAAMIh7AAIABANIADAMQAHAQANAJQANAIARAAQANAAANgEQAMgDAPgIIAMAVQgRALgRAGQgRAGgSAAQgRAAgOgGgAAsgTIgDgSQgDgIgEgGQgFgGgIgEQgIgDgMAAQgJAAgIADQgIADgGAGQgGAGgDAIQgDAIgCALIBYAAg");
	this.shape_3.setTransform(108.6,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARCBIAAgcIAXAAIAAhPQAAgUgKgJQgKgKgTAAQgJAAgLAFQgLAFgKAHIAABlIAZAAIAAAcIhSAAIAAgcIAaAAIAAjJIgXAAIAAgcIA2AAIAABpIABAAIALgIIAMgIIAOgEIAOgCQAOAAALAEQALAEAIAIQAHAHAFANQAEALAAAQIAABTIAaAAIAAAcg");
	this.shape_4.setTransform(88.4,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAnBXIgniIIgmCIIgdAAIgviRIgOAAIAAgcIA2AAIAAAcIgIAAIAeBtIApiJIAZAAIAoCJIAfhtIgKAAIAAgcIA2AAIAAAcIgOAAIgwCRg");
	this.shape_5.setTransform(63,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1B9IAAgdIAVAAIASguIg5iRIgOAAIAAgdIBBAAIAAAdIgUAAIAoBtIAphtIgUAAIAAgdIBBAAIAAAdIgSAAIhLC/IAWAAIAAAdg");
	this.shape_6.setTransform(31.9,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQB/QgLgEgIgGIAAALIgeAAIAAjlIgZAAIAAgcIA3AAIAABkQALgIANgFQAMgFAOAAQARAAAOAGQAOAHALALQAKALAFAQQAFAQAAATQABAVgHARQgGAQgLAMQgLAMgPAHQgQAGgSABQgMgBgMgDgAgQgPQgLAFgIAJIAABbQAFAGALAEQAKAEAPAAQAKAAAKgEQAKgEAIgIQAHgIAEgMQAFgMAAgQQAAgPgFgLQgEgLgGgHQgIgIgKgEQgKgEgKAAQgLAAgMAFg");
	this.shape_7.setTransform(12.1,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shaker, new cjs.Rectangle(0,0,172.7,45.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA5QgHgDgEgEIgFgGIgEgJIgBgNQAAgGACgKIAKgtIgPAAIAEgTIAmAAIgNA6QgFAVAEAJQAFAKAOAAQAHAAAEgCQAFgCAEgEIAHgJIAOg+IgPAAIAFgTIAlAAIgWBgIARAAIgEATIgnAAIADgMIgIAGIgHAFIgJACIgIABQgHAAgHgCg");
	this.shape.setTransform(111.7,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA5QgKgEgHgIQgHgGgEgLQgEgJAAgLQAAgIACgJQACgKAFgHQAEgIAGgGQAHgGAHgFQAIgEAIgCQAJgDAIAAQALAAAKAEQAKAEAHAHQAHAHAEAKQAEAJAAALQAAAJgCAJQgCAJgFAHQgEAIgGAHQgHAGgHAFQgIAEgIADQgJACgIAAQgMAAgJgEgAgJglQgIAEgGAGQgGAGgDAJQgEAJAAAKQAAAHACAGQADAHAEAFQAEAEAGACQAFADAHAAQAHAAAIgEQAIgDAGgHQAGgGAEgJQADgJAAgKQAAgHgCgGQgDgHgEgEQgEgEgGgDQgGgCgGAAQgIAAgHADg");
	this.shape_1.setTransform(97.5,71.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBUIAEgTIAMAAIAVghIgNhgIgLAAIAFgTIAqAAIgEATIgJAAIAHBGIAshGIgJAAIAEgTIAqAAIgFATIgJAAIhSCBIALAAIgEATg");
	this.shape_2.setTransform(84.4,74.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA6IAWhfIgWAAIAFgTIArAAIgDAPIAFgGIAIgGIAIgDIAJgBIAHAAIAGAAIAJABIgHAgIgXAAIADgOQgLAAgHAFQgHAGgFAJIgNA5IATAAIgEATg");
	this.shape_3.setTransform(67.3,71.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA5QgIgEgGgGQgGgHgEgIQgEgJAAgKQAAgPAGgOQAGgNAKgKQAJgKANgFQANgFAOAAQAIAAAIACQAHADAFAEIABgGIAXAAIgXBfIASAAIgEATIgoAAIABgIQgHAFgHADQgHACgIAAQgKAAgIgDgAgIglQgIAEgHAGQgGAHgEAKQgEAJAAAMQAAAHACAGQACAFADAEQAEAEAFACQAFACAGAAIAIgBIAIgDIAHgDIAGgEIAOg9QgCgEgHgDQgGgCgKAAQgIAAgIADg");
	this.shape_4.setTransform(53.4,71.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZA6QgJgEgHgHQgHgHgEgJQgEgKAAgNQAAgNAFgNQAFgNAJgJQAJgJANgGQAMgFANAAQALAAAJADQAIAEAGAGQAHAGADAIQADAIAAAJIgBALIgBAJIhYAAIAAACIgBADQAAAHADAGQACAGAEAEQAEAFAGACQAFADAHAAQAIAAAIgEQAIgEAGgHIAQAMIgJAJQgFAFgGACQgHADgHACIgOABQgKAAgKgDgAAjgNQAAgHgCgFQgCgGgDgDQgEgEgFgCQgGgBgGAAQgHAAgEACQgGACgFAEQgFADgEAGIgGALIBBAAIAAAAg");
	this.shape_5.setTransform(39.9,71.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQA7IARhGQADgNgFgIQgFgGgMAAQgJAAgHADQgIAEgHAHIgTBTIgXAAIAXhfIgWAAIAEgTIAsAAIgDALQAIgGAJgEQAIgEALAAQAJAAAIADQAGADAFAFQAFAGABAHQABAJgCAKIgNA3IARAAIgFATg");
	this.shape_6.setTransform(25.4,71.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZA6QgJgEgHgHQgHgHgEgJQgEgKAAgNQAAgNAFgNQAFgNAJgJQAJgJANgGQAMgFANAAQALAAAJADQAIAEAGAGQAHAGADAIQADAIAAAJIgBALIgBAJIhYAAIAAACIgBADQAAAHADAGQACAGAEAEQAEAFAGACQAFADAHAAQAIAAAIgEQAIgEAGgHIAQAMIgJAJQgFAFgGACQgHADgHACIgOABQgKAAgKgDgAAjgNQAAgHgCgFQgCgGgDgDQgEgEgFgCQgGgBgGAAQgHAAgEACQgGACgFAEQgFADgEAGIgGALIBBAAIAAAAg");
	this.shape_7.setTransform(6.4,71.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQA7IARhGQADgNgFgIQgFgGgMAAQgJAAgHADQgIAEgHAHIgTBTIgXAAIAWhfIgVAAIAEgTIArAAIgCALQAIgGAJgEQAIgEALAAQAJAAAIADQAGADAFAFQAEAGACAHQABAJgCAKIgNA3IARAAIgEATg");
	this.shape_8.setTransform(-8.2,71.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbA5QgKgEgHgIQgHgGgEgLQgEgJAAgLQAAgIACgJQACgKAFgHQAEgIAGgGQAHgGAHgFQAIgEAIgCQAJgDAIAAQALAAAKAEQAKAEAHAHQAHAHAEAKQAEAJAAALQAAAJgCAJQgCAJgFAHQgEAIgGAHQgHAGgHAFQgIAEgIADQgJACgIAAQgMAAgJgEgAgJglQgIAEgGAGQgGAGgDAJQgEAJAAAKQAAAHACAGQADAHAEAFQAEAEAGACQAFADAHAAQAHAAAIgEQAIgDAGgHQAGgGAEgJQADgJAAgKQAAgHgCgGQgDgHgEgEQgEgEgGgDQgGgCgGAAQgIAAgHADg");
	this.shape_9.setTransform(-22.7,71.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBUQgIgEgHgGQgGgHgEgJQgDgJAAgLQAAgPAFgNQAGgMAJgKQAJgKANgFQANgFANAAQAJAAAHACQAIADAGAEIAKgtIgTAAIAEgTIAqAAIgkCaIAUAAIgFATIgpAAIABgIQgGAFgGACQgHADgIAAQgKAAgJgEgAgQgJQgIADgGAGQgHAGgDAKQgEAJAAALQAAAIACAGQACAGAEAEQAEAEAFACQAGADAGAAQAHAAAIgEQAGgDAGgGIAOg7QgEgEgGgDQgHgDgJAAQgIAAgIAEg");
	this.shape_10.setTransform(-41.5,68.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQA7IARhGQADgNgFgIQgFgGgMAAQgJAAgHADQgIAEgHAHIgTBTIgXAAIAWhfIgVAAIAEgTIArAAIgCALQAIgGAJgEQAIgEALAAQAJAAAIADQAGADAFAFQAEAGACAHQABAJgCAKIgNA3IARAAIgEATg");
	this.shape_11.setTransform(-56.8,71.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBVIAWhfIgVAAIAFgTIAqAAIgVBfIARAAIgEATgAAIg4IgFgDIgDgFIAAgGIAAgGIADgEIAFgEIAGgBIAFABIAGAEIACAEIABAGIgBAGIgCAFIgGADIgFABg");
	this.shape_12.setTransform(-68,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag7ByIAiiUIgYAAIAFgTIAXAAIAFgUQACgLAFgIQAEgHAFgFQAGgFAIgCQAIgCAIAAIAKAAIAJACIAGACIAFACIgLASIgIgEIgLgBQgJAAgHAFQgGAFgDAMIgEATIAfAAIgEATIgfAAIgiCUg");
	this.shape_13.setTransform(-75,71.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("A2PjWMAsfAAAIAAGtMgsfAAAg");
	this.shape_14.setTransform(15.4,69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-127.9,47.3,286.8,45), null);


(lib.doclogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(277,101.3,0.63,0.63,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.doclogo, new cjs.Rectangle(187.5,82.3,354.7,68), null);


(lib.bywhen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shaker();
	this.instance.parent = this;
	this.instance.setTransform(86.3,22.5,1,1,0,0,0,86.3,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bywhen, new cjs.Rectangle(0,0,172.7,45.1), null);


// stage content:
(lib._300x600_birdy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(536.1,270.9,0.95,0.95,0,0,0,105.5,22.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(311).to({_off:false},0).wait(1).to({regX:15.4,regY:69.8,x:449,y:316.2},0).wait(1).to({x:443.3},0).wait(1).to({x:430.5},0).wait(1).to({x:404.1},0).wait(1).to({x:356.6},0).wait(1).to({x:305.8},0).wait(1).to({x:269.2},0).wait(1).to({x:243.2},0).wait(1).to({x:223.7},0).wait(1).to({x:208.6},0).wait(1).to({x:196.6},0).wait(1).to({x:186.8},0).wait(1).to({x:178.8},0).wait(1).to({x:172.2},0).wait(1).to({x:166.9},0).wait(1).to({x:162.5},0).wait(1).to({x:159},0).wait(1).to({x:156.2},0).wait(1).to({x:154},0).wait(1).to({x:152.4},0).wait(1).to({x:151.4},0).wait(1).to({x:150.7},0).wait(1).to({regX:105.5,regY:22.1,x:236.1,y:270.9},0).wait(27));

	// Layer 6
	this.instance_1 = new lib.doclogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-339.8,195.2,0.8,0.8,0,0,0,143.1,30.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(311).to({_off:false},0).wait(1).to({regX:364.9,regY:116.3,x:-160.8,y:264.1},0).wait(1).to({x:-154.8},0).wait(1).to({x:-141.5},0).wait(1).to({x:-114.1},0).wait(1).to({x:-64.7},0).wait(1).to({x:-11.8},0).wait(1).to({x:26.3},0).wait(1).to({x:53.3},0).wait(1).to({x:73.5},0).wait(1).to({x:89.3},0).wait(1).to({x:101.8},0).wait(1).to({x:112},0).wait(1).to({x:120.3},0).wait(1).to({x:127.1},0).wait(1).to({x:132.7},0).wait(1).to({x:137.2},0).wait(1).to({x:140.9},0).wait(1).to({x:143.8},0).wait(1).to({x:146.1},0).wait(1).to({x:147.7},0).wait(1).to({x:148.8},0).wait(1).to({x:149.4},0).wait(1).to({regX:143.1,regY:30.2,x:-27.8,y:195.2},0).wait(27));

	// Layer 5
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(364,68,1,1,0,0,0,221.8,32.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).wait(37).to({y:67},0).wait(1).to({regX:12.9,regY:245.1,x:155.1,y:279.4},0).wait(1).to({y:278.2},0).wait(1).to({y:274.9},0).wait(1).to({y:269.4},0).wait(1).to({y:265.7},0).wait(1).to({y:263.6},0).wait(1).to({y:262.3},0).wait(1).to({y:261.5},0).wait(1).to({y:261},0).wait(1).to({y:260.8},0).wait(1).to({regX:221.8,regY:32.4,x:364,y:48},0).wait(75).to({regX:12.9,regY:245.1,x:155.1,y:261.5},0).wait(1).to({y:264.1},0).wait(1).to({y:269.1},0).wait(1).to({y:277.3},0).wait(1).to({y:290},0).wait(1).to({y:309.6},0).wait(1).to({y:340.9},0).wait(1).to({y:393.1},0).wait(1).to({y:466.4},0).wait(1).to({y:523.9},0).wait(1).to({y:559.2},0).wait(1).to({y:581.7},0).wait(1).to({y:596.7},0).wait(1).to({y:606.8},0).wait(1).to({y:613.6},0).wait(1).to({y:617.8},0).wait(1).to({y:620},0).wait(1).to({regX:221.8,regY:32.4,x:364,y:408},0).to({_off:true},1).wait(38));

	// Layer 4
	this.instance_3 = new lib.bywhen();
	this.instance_3.parent = this;
	this.instance_3.setTransform(808.2,72.7,4.84,4.84,6,0,0,86.5,22.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364,60.8,1,1,0,0,0,221.8,17.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off:false},0).wait(1).to({regX:84.9,regY:25.5,scaleX:4.76,scaleY:4.76,rotation:5.7,x:784.3,y:87.3},0).wait(1).to({scaleX:4.52,scaleY:4.52,rotation:4.9,x:741.1,y:92.5},0).wait(1).to({scaleX:4.15,scaleY:4.15,rotation:3.7,x:672.9,y:100.8},0).wait(1).to({scaleX:3.67,scaleY:3.67,rotation:2,x:585.2,y:111.3},0).wait(1).to({scaleX:3.12,scaleY:3.12,rotation:0.2,x:485.9,y:123.2},0).wait(1).to({scaleX:2.56,scaleY:2.56,rotation:-1.7,x:384.5,y:135.3},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:-3.4,x:291.1,y:146.3},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-4.8,x:215.8,y:155.2},0).wait(1).to({scaleX:1.37,scaleY:1.37,rotation:-5.7,x:166.6,y:161},0).wait(1).to({regX:86.3,regY:22.7,scaleX:1.28,scaleY:1.28,rotation:-6,x:151,y:159.3},0).to({_off:true},79).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(219).to({_off:false},0).to({alpha:1},16).wait(70).to({regX:9.2,regY:259.4,x:151.4,y:303.2},0).wait(1).to({y:305.8},0).wait(1).to({y:310.7},0).wait(1).to({y:318.7},0).wait(1).to({y:331.1},0).wait(1).to({y:350.3},0).wait(1).to({y:380.9},0).wait(1).to({y:431.9},0).wait(1).to({y:503.5},0).wait(1).to({y:559.8},0).wait(1).to({y:594.3},0).wait(1).to({y:616.3},0).wait(1).to({y:631},0).wait(1).to({y:640.9},0).wait(1).to({y:647.5},0).wait(1).to({y:651.6},0).wait(1).to({y:653.8},0).wait(1).to({regX:221.8,regY:17.7,x:364,y:412.8},0).to({_off:true},1).wait(38));

	// Layer 2
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-200.6,49.8,1,1,0,0,0,136.3,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:135.9,regY:197.6,x:-187.6,y:215},0).wait(1).to({x:-170.6},0).wait(1).to({x:-148.6},0).wait(1).to({x:-118.8},0).wait(1).to({x:-78.5},0).wait(1).to({x:-32.4},0).wait(1).to({x:6.5},0).wait(1).to({x:35},0).wait(1).to({x:56.3},0).wait(1).to({x:72.7},0).wait(1).to({x:85.7},0).wait(1).to({x:96.4},0).wait(1).to({x:105.3},0).wait(1).to({x:112.7},0).wait(1).to({x:119},0).wait(1).to({x:124.4},0).wait(1).to({x:128.9},0).wait(1).to({x:132.8},0).wait(1).to({x:136.1},0).wait(1).to({x:138.9},0).wait(1).to({x:141.3},0).wait(1).to({x:143.3},0).wait(1).to({x:144.9},0).wait(1).to({x:146.2},0).wait(1).to({x:147.3},0).wait(1).to({x:148},0).wait(1).to({x:148.6},0).wait(1).to({x:148.9},0).wait(1).to({regX:136.3,regY:32.4,x:149.4,y:49.8},0).wait(63).to({regX:135.9,regY:197.6,scaleX:1.01,scaleY:1.01,x:146.8,y:215.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:139.6,y:215.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:125.5,y:216.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:102.2,y:218.9},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:66,y:222},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:11.2,y:226.6},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:-66.2,y:233.1},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:-158.4,y:240.8},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:-242.7,y:247.8},0).wait(1).to({scaleX:2.58,scaleY:2.58,x:-307.2,y:253.3},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:-354.1,y:257.2},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:-388.1,y:260},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:-412.6,y:262.1},0).wait(1).to({scaleX:3,scaleY:3,x:-430,y:263.5},0).wait(1).to({scaleX:3.04,scaleY:3.04,x:-442,y:264.6},0).wait(1).to({scaleX:3.07,scaleY:3.07,x:-449.7,y:265.2},0).wait(1).to({scaleX:3.08,scaleY:3.08,x:-453.8,y:265.6},0).wait(1).to({regX:136.2,regY:32.4,scaleX:3.09,scaleY:3.09,x:-454.1,y:-244.2},0).to({_off:true},163).wait(89));

	// Layer 3
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(539.9,459,0.835,0.835,0,0,0,112.2,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-353.9,regY:420.4,x:150.8,y:707},0).wait(1).to({y:696},0).wait(1).to({y:681.6},0).wait(1).to({y:662.2},0).wait(1).to({y:636},0).wait(1).to({y:605.9},0).wait(1).to({y:580.6},0).wait(1).to({y:562},0).wait(1).to({y:548.2},0).wait(1).to({y:537.5},0).wait(1).to({y:529},0).wait(1).to({y:522},0).wait(1).to({y:516.2},0).wait(1).to({y:511.4},0).wait(1).to({y:507.3},0).wait(1).to({y:503.8},0).wait(1).to({y:500.8},0).wait(1).to({y:498.3},0).wait(1).to({y:496.1},0).wait(1).to({y:494.3},0).wait(1).to({y:492.7},0).wait(1).to({y:491.4},0).wait(1).to({y:490.4},0).wait(1).to({y:489.5},0).wait(1).to({y:488.8},0).wait(1).to({y:488.3},0).wait(1).to({y:488},0).wait(1).to({y:487.8},0).wait(1).to({regX:112.2,regY:112.8,x:539.9,y:231},0).wait(63).to({regX:-353.9,regY:420.4,scaleX:0.84,scaleY:0.84,x:150.7,y:487.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:150.5,y:486.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:150.2,y:484.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:149.6,y:481.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:148.7,y:477.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:147.3,y:470.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:145.3,y:460.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:143,y:448.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:140.8,y:438.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:139.1,y:429.9},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:138,y:423.9},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:137.1,y:419.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:136.5,y:416.6},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:136,y:414.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:135.7,y:412.8},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:135.5,y:411.9},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:135.4,y:411.3},0).wait(1).to({regX:112.5,regY:112.5,scaleX:1.38,scaleY:1.38,x:779.2,y:-13.8},0).wait(1).to({regX:-353.9,regY:420.4,x:135.1,y:411.5},0).wait(2).to({x:135.2},0).wait(1).to({x:135.3},0).wait(1).to({x:135.5},0).wait(1).to({x:135.8},0).wait(1).to({x:136.1},0).wait(1).to({x:136.5},0).wait(1).to({x:136.8},0).wait(1).to({x:137.1},0).wait(1).to({x:137.2},0).wait(1).to({x:137.4},0).wait(2).to({regX:112.5,regY:112.5,x:781.6,y:-13.8},0).wait(1).to({regX:-353.9,regY:420.4,x:137.5,y:411.5},0).wait(1).to({y:411.6},0).wait(1).to({y:411.7},0).wait(1).to({y:411.8},0).wait(1).to({y:412},0).wait(1).to({y:412.3},0).wait(1).to({y:412.6},0).wait(1).to({y:413},0).wait(1).to({y:413.4},0).wait(1).to({y:413.9},0).wait(1).to({y:414.4},0).wait(1).to({y:414.9},0).wait(1).to({y:415.3},0).wait(1).to({y:415.7},0).wait(1).to({y:415.9},0).wait(1).to({y:416.1},0).wait(1).to({y:416.2},0).wait(1).to({y:416.3},0).wait(1).to({regX:112.5,regY:112.5,x:781.6,y:-9},0).wait(1).to({regX:-353.9,regY:420.4,x:137.4,y:416.3},0).wait(1).to({y:416.2},0).wait(2).to({y:416.1},0).wait(1).to({x:137.3,y:415.9},0).wait(1).to({y:415.7},0).wait(1).to({x:137.2,y:415.5},0).wait(1).to({x:137.1,y:415.2},0).wait(1).to({x:137,y:414.9},0).wait(1).to({x:136.8,y:414.5},0).wait(1).to({x:136.7,y:414.1},0).wait(1).to({x:136.6,y:413.7},0).wait(1).to({x:136.5,y:413.4},0).wait(1).to({x:136.4,y:413.2},0).wait(1).to({x:136.3,y:413},0).wait(1).to({y:412.9},0).wait(1).to({y:412.8},0).wait(1).to({y:412.7},0).wait(1).to({regX:112.5,regY:112.5,x:780.4,y:-12.6},0).wait(1).to({regX:-353.9,regY:420.4,x:136.3,y:412.7},0).wait(3).to({y:412.6},0).wait(1).to({x:136.4},0).wait(1).to({y:412.5},0).wait(1).to({x:136.5},0).wait(1).to({x:136.6,y:412.4},0).wait(1).to({x:136.7,y:412.3},0).wait(1).to({x:136.8,y:412.2},0).wait(1).to({x:136.9,y:412},0).wait(1).to({x:137,y:411.9},0).wait(1).to({x:137.1,y:411.8},0).wait(1).to({x:137.2,y:411.7},0).wait(1).to({x:137.3,y:411.6},0).wait(1).to({x:137.4},0).wait(1).to({y:411.5},0).wait(3).to({regX:112.5,regY:112.5,x:781.6,y:-13.8},0).to({_off:true},1).wait(179));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#76BD23").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(1,1,1,1,0,0,0,-149,-299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(361));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.6,300,627.2,829.7);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_birdy_atlas_.png", id:"300x600_birdy_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;