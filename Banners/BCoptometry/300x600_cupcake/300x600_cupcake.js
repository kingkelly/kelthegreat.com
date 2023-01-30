(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_cupcake_atlas_", frames: [[0,0,286,271],[0,273,626,120]]}
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



(lib.cupcakegirl_big = function() {
	this.spriteSheet = ss["300x600_cupcake_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.docBC = function() {
	this.spriteSheet = ss["300x600_cupcake_atlas_"];
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
	this.instance = new lib.cupcakegirl_big();
	this.instance.parent = this;
	this.instance.setTransform(-510,261,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-510,261,314.6,298.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBaIgFgDIgDgFIgCgGIACgGIADgEIAFgEIAGgBIAGABIADAEIAEAEIABAGIgBAGIgEAFIgDADIgGACgAgUAzIABgVQABgIADgHQACgHAEgGIALgKIALgJIAJgIQADgDACgEQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgEgFgCQgFgCgFAAQgJAAgGADQgGADgEAFQgEAEgCAGIgBAIIgVgBQABgKAEgJQAEgIAHgHQAHgHAKgEQAJgEALAAQALAAAKAEQAJAEAGAHQAGAGADAJQADAIAAAJQAAAMgGAKQgGAKgMAJIgMAJQgIAGgDAJQgDAJAAAGIgBAPg");
	this.shape.setTransform(264.1,238);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_1.setTransform(251.9,240.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgFgMQgDgMAAgPQgBgNAEgLQADgMAIgJQAHgIAKgFQAMgFAMAAQAOAAAKAEQAIAEAGAHQAGAHADAJQADAJACAJIAAAJIABAIIhXAAIAAAJIADAIQAEAMAKAGQAJAFALAAQAKABAJgDQAJgCAJgGIAJAPQgLAIgMAEQgNAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgGgDQgFgCgIAAQgGAAgHACQgFADgEADQgEAEgCAGQgDAHgBAHIA+AAg");
	this.shape_2.setTransform(239.2,241);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_3.setTransform(226.8,241);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBaIAAgUIASAAIAAhQIgSAAIAAgVIAnAAIAABlIASAAIAAAUgAgFg7IgFgEIgDgFIgBgGIABgFIADgFIAFgDIAFgCIAGACIAFADIADAFIABAFIgBAGIgDAFIgFAEIgGABg");
	this.shape_4.setTransform(217.3,238.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_5.setTransform(206.6,241);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_6.setTransform(194.5,240.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBYQgLgEgIgIQgIgIgEgMQgEgNAAgPQAAgOAEgLQAEgLAIgIQAHgJALgEQALgFAOABQAHAAAIACQAHABAHAGIAAgvIgRAAIAAgVIAmAAIAACiIASAAIAAAUIgnAAIAAgKQgGAGgIADQgIAEgJAAQgMAAgKgFgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAJQADAIAFAGQAFAGAHADQAHADAIAAQAJAAAHgDQAGgDAGgGIAAhCQgGgFgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_7.setTransform(181.7,238.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA+IAAgUIARAAIAAg3QAAgOgHgHQgIgHgMAAQgIAAgHADQgIAEgHAFIAABHIARAAIAAAUIg4AAIAAgUIARAAIAAhQIgRAAIAAgVIAmAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAGAGACAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_8.setTransform(166.2,240.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_9.setTransform(149.6,241.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrBbIAAgUIASAAIAAhSIgUAAIAAgSIAUAAIAAgTQAAgLADgIQADgHAFgGQAFgFAIgDQAGgCAJAAIALAAIAJACIAHACIAFADIgHAPIgJgDIgNgCQgKAAgFAGQgFAGAAAMIAAAUIAbAAIAAASIgbAAIAABSIASAAIAAAUg");
	this.shape_10.setTransform(139.2,237.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcBbIAAgUIASAAIAAiNIgSAAIAAgUIAmAAIAAChIATAAIAAAUg");
	this.shape_11.setTransform(124.6,237.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_12.setTransform(113.3,241);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_13.setTransform(99,241);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMBbIAAgUIAQAAIAAg3QAAgOgHgGQgHgIgNAAQgHAAgHAEQgIADgHAFIAABHIASAAIAAAUIg6AAIAAgUIASAAIAAiNIgQAAIAAgUIAmAAIAABKIABAAIAHgGIAJgFIAKgDIAKgBQAJAAAIACQAIADAFAGQAGAFADAJQADAHAAAMIAAA6IASAAIAAAUg");
	this.shape_14.setTransform(84.1,237.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTA7QgLgEgIgIQgIgJgEgMQgEgMAAgOQAAgNAEgMQAFgMAIgIQAIgJAKgFQALgEALAAQAMAAAKADQAKAEAIAJIAMAAIAAAUIgWAAQgFgJgHgEQgIgEgKAAQgGAAgHADQgHADgFAGQgFAGgDAJQgDAIAAAJQAAAKADAJQADAHAFAGQAFAHAHACQAHAEAGAAQALAAAJgGQAIgFAFgLIASAJQgEAHgFAHQgFAGgGAEQgHAEgIACQgHACgJABQgMAAgKgGg");
	this.shape_15.setTransform(69.6,241);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_16.setTransform(57.1,241);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgFgMQgDgMAAgPQgBgNAEgLQADgMAIgJQAHgIAKgFQAMgFAMAAQAOAAAKAEQAIAEAGAHQAGAHADAJQADAJACAJIAAAJIABAIIhXAAIAAAJIADAIQAEAMAKAGQAJAFALAAQAKABAJgDQAJgCAJgGIAJAPQgLAIgMAEQgNAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgGgDQgFgCgIAAQgGAAgHACQgFADgEADQgEAEgCAGQgDAHgBAHIA+AAg");
	this.shape_17.setTransform(38.9,241);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMBbIAAgUIAQAAIAAg3QAAgOgHgGQgHgIgNAAQgHAAgHAEQgIADgHAFIAABHIASAAIAAAUIg6AAIAAgUIASAAIAAiNIgQAAIAAgUIAmAAIAABKIABAAIAHgGIAJgFIAKgDIAKgBQAJAAAIACQAIADAFAGQAGAFADAJQADAHAAAMIAAA6IASAAIAAAUg");
	this.shape_18.setTransform(24.6,237.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBBQQgGgCgEgFQgEgEgCgIQgCgIAAgLIABhCIgUAAIAAgSIAUAAIAAgdIAUgKIAAAnIAdAAIAAASIgdAAIAABFQAAAHABAFQACAEADACQAEACAFAAIAIgBIAJgDIAFAOIgMAFQgGACgJAAQgIAAgFgCg");
	this.shape_19.setTransform(12.1,239.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgrA9IAAgUIARAAIAAhQIgRAAIAAgUIAnAAIAAARIAEgHIAGgGIAHgEQAEgBAFAAIALAAIALAAIAAAbIgWAAIAAgIIgIACQgEABgEADQgDADgDAFQgCAEgBAHIAAA5IAUAAIAAAUg");
	this.shape_20.setTransform(224.6,213.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_21.setTransform(211.8,214);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrBbIAAgUIASAAIAAhSIgUAAIAAgSIAUAAIAAgTQAAgLADgIQADgHAFgGQAFgFAIgDQAGgCAJAAIALAAIAJACIAHACIAFADIgHAPIgJgDIgNgCQgKAAgFAGQgFAGAAAMIAAAUIAbAAIAAASIgbAAIAABSIASAAIAAAUg");
	this.shape_22.setTransform(201.6,210.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVA8QgJgFgFgHIgMAAIAAgUIAYAAQAAAFACADQACAEAEACIAIADIAIABIAJgBIAIgDIAFgFQACgDAAgEQAAgGgEgEQgEgEgJgEIgWgIQgPgEgGgIQgHgIAAgMQAAgHADgHQACgGAGgFQAFgFAIgDQAIgCAKAAQAMAAAJADQAJAEAHAJIALAAIAAAUIgYAAQAAgFgCgDIgGgGIgIgDIgIgBIgIABIgHADQgDACgCADQgBADAAADQAAAGAEAEQADADAJADIAWAJQAPAFAHAHQAHAJAAAMQAAAIgDAHQgDAHgGAEQgGAFgJADQgIACgKAAQgNAAgJgEg");
	this.shape_23.setTransform(185,214);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgFgMQgDgMAAgPQAAgNADgLQAEgMAHgJQAHgIAKgFQAMgFANAAQANAAAJAEQAKAEAFAHQAGAHADAJQADAJACAJIAAAJIABAIIhXAAIAAAJIADAIQAEAMAKAGQAJAFALAAQAKABAJgDQAJgCAJgGIAJAPQgMAIgLAEQgNAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgGgDQgFgCgIAAQgGAAgHACQgFADgEADQgEAEgDAGQgCAHgBAHIA+AAg");
	this.shape_24.setTransform(172,214);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AApBbIgwg2IgQAAIAAAiIAKAAIAAAUIg0AAIAAgUIAUAAIAAiNIgVAAIAAgUIArAAIAAAUIAABaIAVAAIAbgdIgHAAIAAgUIAuAAIAAAUIgPAAIglAlIAoArIAPAAIAAAUg");
	this.shape_25.setTransform(158.2,210.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeA9QgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgIACgGQADgGADgEQAEgEAFgCIALgFIALgDIALAAIAOAAIAKACIAAgKQAAgHgCgFQgCgEgDgDQgDgEgFgBQgFgCgFAAIgKABIgKACIgIADIgGADIgHgPIAJgFIALgEIAMgDIALgBQAKAAAIADQAJACAGAFQAFAGAEAIQADAIAAALIAAA8IANAAIAAAUIgjAAIAAgLQgHAGgIAFQgIAEgKAAQgJAAgIgDgAgQAGQgFACgEACQgEADgCAEQgCAEAAAFQAAAFACAEIAFAGIAHADIAKABIAJgBIAHgCIAHgFIAGgFIAAgbIgYAAQgHAAgFABg");
	this.shape_26.setTransform(143.6,214);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTA7QgLgEgIgIQgIgJgEgMQgEgMAAgOQAAgNAEgMQAFgMAIgIQAIgJAKgFQALgEALAAQAMAAAKADQAKAEAIAJIAMAAIAAAUIgWAAQgFgJgHgEQgIgEgKAAQgGAAgHADQgHADgFAGQgFAGgDAJQgDAIAAAJQAAAKADAJQADAHAFAGQAFAHAHACQAHAEAGAAQALAAAJgGQAIgFAFgLIASAJQgEAHgFAHQgFAGgGAEQgHAEgIACQgHACgJABQgMAAgKgGg");
	this.shape_27.setTransform(130.8,214);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/BaIAAgUIARAAIAAiHIgRAAIAAgVIAmAAIAAAKQAIgGAJgDQAIgEAKAAQAMAAAKAFQAKAEAHAIQAHAIAEAMQAEALAAAOQAAAOgEANQgFALgHAIQgIAJgLAFQgLAEgNAAQgIAAgIgBIgNgFIAAAnIATAAIAAAUgAgLhCQgIADgFAGIAABBQADAEAIADQAHADAKAAQAHAAAHgCQAHgDAFgGQAGgGADgIQADgIAAgLQAAgLgDgIQgDgIgFgFQgFgGgHgCQgHgDgIAAQgHAAgIADg");
	this.shape_28.setTransform(116.7,216.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_29.setTransform(101,214.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTA7QgLgEgIgIQgIgJgEgMQgEgMAAgOQAAgNAEgMQAFgMAIgIQAIgJAKgFQALgEALAAQAMAAAKADQAKAEAIAJIAMAAIAAAUIgWAAQgFgJgHgEQgIgEgKAAQgGAAgHADQgHADgFAGQgFAGgDAJQgDAIAAAJQAAAKADAJQADAHAFAGQAFAHAHACQAHAEAGAAQALAAAJgGQAIgFAFgLIASAJQgEAHgFAHQgFAGgGAEQgHAEgIACQgHACgJABQgMAAgKgGg");
	this.shape_30.setTransform(87.3,214);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXBaIAphDIgLADIgJABQgLAAgLgEQgLgEgIgHQgHgIgGgJQgFgLAAgLQAAgPAFgLQAFgMAIgIQAKgIAKgEQAMgEALAAQANAAALAEQALAEAJAIQAIAIAFALQAFALAAANQAAALgEAKIgKAUIgtBPgAgPhCQgGADgGAFQgFAFgEAHQgDAHAAAJQAAAKADAHQAEAHAGAFQAFAEAIADQAIACAGAAQAKAAAHgDQAFgCAFgEQAGgFADgHQADgHAAgKQAAgJgDgHQgDgIgGgFQgFgFgHgCQgIgDgIAAQgHAAgIADg");
	this.shape_31.setTransform(68,211);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUBYQgJgDgHgFQgIgFgFgHQgFgGgEgJIAUgJQACAGADAFQAEAFAFAEQAFADAGACQAGACAGAAQAIAAAHgDQAHgDAGgGQAFgFADgHQADgHAAgJQAAgHgDgIQgDgHgGgFQgFgEgHgEQgHgDgIAAQgJABgIADQgIADgFAFIgRgDIAAhbIBjAAIAAATIhQAAIAAA1QAGgEAHgDQAHgCAJAAQAMAAALAFQALAEAIAJQAIAIAFAJQAEAKAAAMQAAAMgEAMQgFAKgIAIQgIAIgLAFQgLAEgNABQgKgBgJgCg");
	this.shape_32.setTransform(54,211.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcBYQgLgEgIgIQgIgIgEgMQgEgNAAgPQAAgOAEgLQAEgLAIgIQAHgJALgEQALgFAOABQAHAAAIACQAHABAHAGIAAgvIgRAAIAAgVIAmAAIAACiIASAAIAAAUIgnAAIAAgKQgGAGgIADQgIAEgJAAQgMAAgKgFgAgSgLQgHACgFAGQgFAEgDAJQgDAHAAALQAAALADAJQADAIAFAGQAFAGAHADQAHADAIAAQAJAAAHgDQAGgDAGgGIAAhCQgGgFgIgDQgHgCgHAAQgIAAgHADg");
	this.shape_33.setTransform(186.3,184.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTA8QgLgFgHgHQgIgJgEgMQgFgMAAgPQABgNADgLQAEgMAHgJQAHgIALgFQAKgFANAAQAOAAAJAEQAJAEAHAHQAFAHADAJQADAJABAJIABAJIAAAIIhWAAIABAJIACAIQAEAMAJAGQAKAFAMAAQAJABAJgDQAIgCALgGIAJAPQgNAIgMAEQgMAEgNAAQgLAAgKgEgAAfgNIgCgNQgCgGgDgEQgEgEgFgDQgGgCgIAAQgHAAgFACQgGADgEADQgEAEgDAGQgCAHgBAHIA+AAg");
	this.shape_34.setTransform(171.6,187);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUA8QgKgFgIgHQgHgJgEgMQgFgMAAgPQAAgNAEgLQADgMAIgJQAHgIALgFQALgFANAAQANAAAJAEQAJAEAHAHQAFAHADAJQADAJABAJIABAJIAAAIIhWAAIABAJIACAIQAEAMAKAGQAJAFALAAQAKABAJgDQAIgCAKgGIAJAPQgMAIgMAEQgMAEgNAAQgLAAgLgEgAAfgNIgCgNQgCgGgEgEQgDgEgFgDQgGgCgIAAQgHAAgGACQgFADgEADQgEAEgDAGQgCAHgBAHIA+AAg");
	this.shape_35.setTransform(157.9,187);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AALA+IAAgUIASAAIAAg3QAAgOgIgHQgGgHgNAAQgIAAgHADQgIAEgGAFIAABHIAQAAIAAAUIg5AAIAAgUIARAAIAAhQIgRAAIAAgVIAnAAIAAAPIAJgHIAJgFIAKgEIAKgBQAKAAAIADQAHADAGAFQAFAGADAIQADAJAAALIAAA6IARAAIAAAUg");
	this.shape_36.setTransform(143.3,186.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYA7QgIgCgFgGQgFgGgDgIQgDgJAAgLIAAg5IgQAAIAAgVIAnAAIAABLQAAAOAGAHQAHAHAMAAQAGAAAIgCQAIgDAHgFIAAhIIgQAAIAAgVIAnAAIAABlIANAAIAAAUIgjAAIAAgLQgIAGgKADQgKAEgKAAQgJAAgHgDg");
	this.shape_37.setTransform(121.5,187.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYA8QgLgFgIgIQgIgJgEgMQgFgMAAgOQAAgNAFgMQAEgMAJgIQAIgJALgFQALgEAMAAQAOAAALAEQALAFAIAIQAIAJAFAMQAEALAAAOQAAAOgEAMQgFAMgIAIQgIAJgLAFQgLAEgOAAQgMAAgMgEgAgNgpQgHACgFAGQgGAGgDAIQgDAJAAAKQAAAKADAJQADAIAGAGQAFAGAHADQAHAEAGAAQAIAAAHgEQAHgDAFgGQAGgGADgIQACgIAAgLQAAgKgCgJQgDgIgFgGQgGgGgHgCQgHgDgIAAQgGAAgHADg");
	this.shape_38.setTransform(107,187);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdBZIAAgUIAQAAIAAg/IgvhKIgNAAIAAgUIA5AAIAAAUIgRAAIAhA5IAkg5IgTAAIAAgUIA5AAIAAAUIgPAAIgxBLIAAA+IASAAIAAAUg");
	this.shape_39.setTransform(92.1,184.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(5.6,168,266.6,87), null);


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
(lib._300x600_cupcake = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:138.7,regY:211.1,x:-184.8,y:228.5},0).wait(1).to({x:-167.8},0).wait(1).to({x:-145.8},0).wait(1).to({x:-116},0).wait(1).to({x:-75.7},0).wait(1).to({x:-29.6},0).wait(1).to({x:9.3},0).wait(1).to({x:37.8},0).wait(1).to({x:59.1},0).wait(1).to({x:75.5},0).wait(1).to({x:88.5},0).wait(1).to({x:99.2},0).wait(1).to({x:108.1},0).wait(1).to({x:115.5},0).wait(1).to({x:121.8},0).wait(1).to({x:127.2},0).wait(1).to({x:131.7},0).wait(1).to({x:135.6},0).wait(1).to({x:138.9},0).wait(1).to({x:141.7},0).wait(1).to({x:144.1},0).wait(1).to({x:146.1},0).wait(1).to({x:147.7},0).wait(1).to({x:149},0).wait(1).to({x:150.1},0).wait(1).to({x:150.8},0).wait(1).to({x:151.4},0).wait(1).to({x:151.7},0).wait(1).to({regX:136.3,regY:32.4,x:149.4,y:49.8},0).wait(63).to({regX:138.7,regY:211.1,scaleX:1.01,scaleY:1.01,x:149.6,y:228.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:142.5,y:229.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:128.5,y:231.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:105.5,y:234.6},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:69.6,y:239.3},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:15.4,y:246.5},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:-61.3,y:256.6},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:-152.7,y:268.6},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:-236.1,y:279.6},0).wait(1).to({scaleX:2.58,scaleY:2.58,x:-300,y:288},0).wait(1).to({scaleX:2.74,scaleY:2.74,x:-346.5,y:294.2},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:-380.1,y:298.6},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:-404.3,y:301.8},0).wait(1).to({scaleX:3,scaleY:3,x:-421.6,y:304},0).wait(1).to({scaleX:3.04,scaleY:3.04,x:-433.4,y:305.6},0).wait(1).to({scaleX:3.07,scaleY:3.07,x:-441.1,y:306.6},0).wait(1).to({scaleX:3.08,scaleY:3.08,x:-445.2,y:307.2},0).wait(1).to({regX:136.2,regY:32.4,scaleX:3.09,scaleY:3.09,x:-454.1,y:-244.2},0).to({_off:true},163).wait(89));

	// Layer 3
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(539.9,459,0.835,0.835,0,0,0,112.2,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-352.7,regY:410,x:151.8,y:698.3},0).wait(1).to({y:687.3},0).wait(1).to({y:672.9},0).wait(1).to({y:653.5},0).wait(1).to({y:627.3},0).wait(1).to({y:597.2},0).wait(1).to({y:571.9},0).wait(1).to({y:553.3},0).wait(1).to({y:539.5},0).wait(1).to({y:528.8},0).wait(1).to({y:520.3},0).wait(1).to({y:513.3},0).wait(1).to({y:507.5},0).wait(1).to({y:502.7},0).wait(1).to({y:498.6},0).wait(1).to({y:495.1},0).wait(1).to({y:492.1},0).wait(1).to({y:489.6},0).wait(1).to({y:487.4},0).wait(1).to({y:485.6},0).wait(1).to({y:484},0).wait(1).to({y:482.7},0).wait(1).to({y:481.7},0).wait(1).to({y:480.8},0).wait(1).to({y:480.1},0).wait(1).to({y:479.6},0).wait(1).to({y:479.3},0).wait(1).to({y:479.1},0).wait(1).to({regX:112.2,regY:112.8,x:539.9,y:231},0).wait(63).to({regX:-352.7,regY:410,scaleX:0.84,scaleY:0.84,x:151.7,y:478.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:151.5,y:477.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:151.2,y:475.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:150.6,y:472.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:149.8,y:467.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:148.4,y:460.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:146.5,y:449.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:144.3,y:437.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:142.2,y:425.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:140.6,y:416.9},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:139.5,y:410.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:138.7,y:405.9},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:138.1,y:402.6},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:137.6,y:400.2},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:137.4,y:398.6},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:137.2,y:397.5},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:137.1,y:397},0).wait(1).to({regX:112.5,regY:112.5,scaleX:1.38,scaleY:1.38,x:779.2,y:-13.8},0).wait(1).to({regX:-352.7,regY:410,x:136.7,y:397.1},0).wait(1).to({x:136.8},0).wait(1).to({x:136.9},0).wait(1).to({x:137},0).wait(1).to({x:137.2},0).wait(1).to({x:137.5},0).wait(1).to({x:137.8},0).wait(1).to({x:138.1},0).wait(1).to({x:138.5},0).wait(1).to({x:138.7},0).wait(1).to({x:138.9},0).wait(1).to({x:139},0).wait(1).to({x:139.1},0).wait(1).to({regX:112.5,regY:112.5,x:781.6,y:-13.8},0).wait(1).to({regX:-352.7,regY:410,x:139.1,y:397.2},0).wait(2).to({y:397.3},0).wait(1).to({y:397.5},0).wait(1).to({y:397.6},0).wait(1).to({y:397.9},0).wait(1).to({y:398.2},0).wait(1).to({y:398.6},0).wait(1).to({y:399.1},0).wait(1).to({y:399.6},0).wait(1).to({y:400.1},0).wait(1).to({y:400.6},0).wait(1).to({y:401},0).wait(1).to({y:401.3},0).wait(1).to({y:401.6},0).wait(1).to({y:401.7},0).wait(1).to({y:401.9},0).wait(2).to({regX:112.5,regY:112.5,x:781.6,y:-9},0).wait(1).to({regX:-352.7,regY:410,x:139.1,y:401.9},0).wait(2).to({y:401.8},0).wait(1).to({x:139,y:401.7},0).wait(1).to({y:401.6},0).wait(1).to({x:138.9,y:401.4},0).wait(1).to({x:138.8,y:401.1},0).wait(1).to({x:138.7,y:400.8},0).wait(1).to({x:138.6,y:400.5},0).wait(1).to({x:138.5,y:400.1},0).wait(1).to({x:138.4,y:399.8},0).wait(1).to({x:138.2,y:399.4},0).wait(1).to({x:138.1,y:399.1},0).wait(1).to({y:398.8},0).wait(1).to({x:138,y:398.6},0).wait(1).to({y:398.5},0).wait(1).to({x:137.9,y:398.4},0).wait(2).to({regX:112.5,regY:112.5,x:780.4,y:-12.6},0).wait(1).to({regX:-352.7,regY:410,x:137.9,y:398.3},0).wait(3).to({x:138},0).wait(1).to({y:398.2},0).wait(1).to({x:138.1},0).wait(1).to({y:398.1},0).wait(1).to({x:138.2,y:398},0).wait(1).to({x:138.3,y:397.9},0).wait(1).to({x:138.4,y:397.8},0).wait(1).to({x:138.6,y:397.7},0).wait(1).to({x:138.7,y:397.6},0).wait(1).to({x:138.8,y:397.5},0).wait(1).to({x:138.9,y:397.4},0).wait(1).to({x:139,y:397.3},0).wait(1).to({y:397.2},0).wait(1).to({x:139.1},0).wait(3).to({regX:112.5,regY:112.5,x:781.6,y:-13.8},0).to({_off:true},1).wait(179));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C08632").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(1,1,1,1,0,0,0,-149,-299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(361));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.4,300,631.4,831.6);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_cupcake_atlas_.png", id:"300x600_cupcake_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;