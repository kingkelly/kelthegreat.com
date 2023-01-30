(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_flyoverxmas_atlas_", frames: [[0,83,167,80],[0,0,181,81],[169,83,70,55],[183,0,50,51]]}
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
	this.spriteSheet = ss["300x250_flyoverxmas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_reindeer = function() {
	this.spriteSheet = ss["300x250_flyoverxmas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.snow1 = function() {
	this.spriteSheet = ss["300x250_flyoverxmas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.snow2 = function() {
	this.spriteSheet = ss["300x250_flyoverxmas_atlas_"];
	this.gotoAndStop(3);
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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snow2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,51);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snow1();
	this.instance.parent = this;
	this.instance.setTransform(15,12,0.42,0.42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,12,29.4,23.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.snow1();
	this.instance.parent = this;
	this.instance.setTransform(8,6,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,6,49,38.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmMEdIAAo5IMZAAIAAI5g");
	mask.setTransform(46.3,46);

	// Layer 1
	this.instance = new lib.bb_reindeer();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,17.5,79.5,57);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_logo();
	this.instance.parent = this;
	this.instance.setTransform(8,4,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(8,4,150.3,72), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBDIAAg1QAAgLgFgFQgEgFgIAAQgDAAgEABQgDABgDADQgDACgBAFQgCAEAAAGIAAA0IgbAAIAAiFIAbAAIAAAwQAMgNAOAAQAPAAALALQAFAFACAIQAEAHAAAIIAAA7g");
	this.shape.setTransform(241.3,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOA3QgJgKAAgQIAAgrIgMAAIAAgUIAMAAIAAgdIAaAAIAAAdIAXAAIAAAUIgXAAIAAAqQAAAGADADQADADAEAAQADAAADgCQAEgBADgEIAJATQgMAMgOAAQgNAAgKgJg");
	this.shape_1.setTransform(231.8,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA/IAvhkIgeAAIAAAPIgaAAIAAgoIBaAAIAAAVIgzBog");
	this.shape_2.setTransform(222.6,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAxIAAg2QgBgLgEgFQgEgGgIAAQgDAAgEACQgDABgDADQgDADgBAEQgCAFAAAFIAAA1IgbAAIAAhgIAbAAIAAALQAMgMAPAAQAOAAALALQAFAFACAHQAEAHAAAJIAAA6g");
	this.shape_3.setTransform(206.8,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAvQgGgCgFgEQgLgJAAgOQAAgIADgGQADgEAFgEQAFgDAIgCQAHgCAKAAIATAAIAAgBQAAgHgEgFQgEgDgJAAQgGAAgHACQgIADgGAFIgMgSQATgOAYAAQAJAAAHADQAHACAGAEQALAJAAATIAAA8IgaAAIAAgLQgKANgOAAQgIAAgHgDgAgQARQAAAFAEADQAEADAHAAQAHAAAFgEQAGgFAAgIIAAgEIgRAAQgQAAAAAKg");
	this.shape_4.setTransform(195.4,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA7QgKgEgJgJIAPgUQAGAGAGADQAGADAGAAQAFAAAEgFQACgCABgDIABgIIAAg6IgkAAIAAgZIBAAAIAABRQAAAXgLALQgFAGgIADQgIACgIAAQgLABgKgFg");
	this.shape_5.setTransform(184.8,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBDIAAiFIAbAAIAACFg");
	this.shape_6.setTransform(172.9,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBEIAAhgIAbAAIAABggAgKgoQgFgEAAgIQAAgGAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAGQAAAIgFAEQgEAFgHgBQgGABgEgFg");
	this.shape_7.setTransform(167.7,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA3QgKgKAAgQIAAgrIgMAAIAAgUIAMAAIAAgdIAaAAIAAAdIAXAAIAAAUIgXAAIAAAqQAAAGADADQADADAEAAQADAAADgCQAEgBACgEIAKATQgMAMgOAAQgNAAgJgJg");
	this.shape_8.setTransform(161.4,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AASAxIAAg2QABgLgFgFQgEgGgIAAQgDAAgDACQgEABgDADQgDADgCAEQgBAFAAAFIAAA1IgcAAIAAhgIAcAAIAAALQAMgMAOAAQAPAAALALQAFAFACAHQADAHAAAJIAAA6g");
	this.shape_9.setTransform(151.5,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAnQgMgKAAgTIAAg6IAcAAIAAA0QAAAWAQAAQAHAAAHgGQAFgGAAgLIAAgzIAbAAIAABgIgbAAIAAgNQgFAHgHAEQgGADgHAAQgQAAgKgKg");
	this.shape_10.setTransform(139.9,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAvQgGgCgFgEQgLgJAAgOQAAgIADgGQADgEAFgEQAFgDAIgCQAHgCAKAAIATAAIAAgBQAAgHgEgFQgEgDgJAAQgGAAgHACQgIADgGAFIgMgSQATgOAYAAQAJAAAHADQAHACAGAEQALAJAAATIAAA8IgaAAIAAgLQgKANgOAAQgIAAgHgDgAgQARQAAAFAEADQAEADAHAAQAHAAAFgEQAGgFAAgIIAAgEIgRAAQgQAAAAAKg");
	this.shape_11.setTransform(123.9,12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOA3QgJgKAAgQIAAgrIgLAAIAAgUIALAAIAAgdIAaAAIAAAdIAYAAIAAAUIgYAAIAAAqQAAAGADADQADADAEAAQAEAAADgCQADgBADgEIAKATQgNAMgOAAQgNAAgKgJg");
	this.shape_12.setTransform(115.1,11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAxIAAg2QgBgLgEgFQgEgGgIAAQgDAAgEACQgDABgDADQgDADgCAEQgBAFAAAFIAAA1IgbAAIAAhgIAbAAIAAALQAMgMAPAAQAOAAALALQAFAFADAHQADAHAAAJIAAA6g");
	this.shape_13.setTransform(105.2,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAvQgGgCgFgEQgLgJAAgOQAAgIADgGQADgEAFgEQAFgDAIgCQAHgCAKAAIATAAIAAgBQAAgHgEgFQgEgDgJAAQgGAAgHACQgIADgGAFIgMgSQATgOAYAAQAJAAAHADQAHACAGAEQALAJAAATIAAA8IgaAAIAAgLQgKANgOAAQgIAAgHgDgAgQARQAAAFAEADQAEADAHAAQAHAAAFgEQAGgFAAgIIAAgEIgRAAQgQAAAAAKg");
	this.shape_14.setTransform(93.8,12.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxArIARgUQAUARAQAAQAIAAAEgDQAFgDAAgHQAAgFgFgDQgEgEgOgDQgVgFgKgIQgFgEgDgGQgCgHAAgJQAAgSAMgKQANgJATAAQAMAAAMAEQANAEAKAJIgPAUQgQgMgRAAQgGgBgFAEQgDADAAAFQAAAGAEADQAGADAQAFQASAFAKAHQAFAFADAGQACAHAAAIQAAARgNAKQgGAGgJACQgIADgKAAQgdAAgYgWg");
	this.shape_15.setTransform(82.9,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATBDIAAg1QgBgLgEgFQgEgFgIAAQgDAAgEABQgDABgDADQgDACgBAFQgCAEAAAGIAAA0IgbAAIAAiFIAbAAIAAAwQAMgNAOAAQAPAAALALQAFAFACAIQAEAHAAAIIAAA7g");
	this.shape_16.setTransform(66.8,10.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNA3QgKgKAAgQIAAgrIgMAAIAAgUIAMAAIAAgdIAaAAIAAAdIAXAAIAAAUIgXAAIAAAqQAAAGADADQADADAEAAQADAAADgCQAEgBACgEIAKATQgMAMgOAAQgNAAgJgJg");
	this.shape_17.setTransform(57.3,11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNBEIAAhgIAbAAIAABggAgKgoQgFgEAAgIQAAgGAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAGQAAAIgFAEQgEAFgHgBQgGABgEgFg");
	this.shape_18.setTransform(50.5,10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAwIgSgzIgRAzIgcAAIghhfIAcAAIATA5IATg5IAZAAIATA5IATg5IAcAAIghBfg");
	this.shape_19.setTransform(39.8,12.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglBAQgGgCgGgGIAMgUQADAEAEABQAEACADAAQAEAAADgEQACgDAAgEQgMgkgZg+IAdAAIAWA8IAXg8IAdAAIgtBxQgDAJgIAGQgIAGgKAAQgIgBgHgDg");
	this.shape_20.setTransform(21.6,14.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNBDIAAiFIAbAAIAACFg");
	this.shape_21.setTransform(13.7,10.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqA/IAAh9IBVAAIAAAZIg5AAIAAAbIA2AAIAAAXIg2AAIAAAyg");
	this.shape_22.setTransform(5.9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-2,-2,251.1,25.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXCcIAAkIIgjAAIAAgvIB1AAIAAAvIgjAAIAAEIg");
	this.shape.setTransform(238.7,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOCcIAAiBIgaAAIAACBIgxAAIAAk3IAxAAIAACIIAaAAIAAiIIAwAAIAAE3g");
	this.shape_1.setTransform(225.2,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcCdQgKgEgHgJQgHgHgEgMQgEgLAAgPIAAjGQAAgMAFgMQAEgKAIgJQAJgJALgEQALgFAMAAQANAAALAFQAKAEAIAJQAIAJAEAKQAEAMAAAMIAAA6IgsAAIAAg7QAAgOgNAAQgMAAAAAOIAADMQAAANAMAAQANAAAAgNIAAhAIgMAAIAAgmIA7AAIAACaIgcAAIgFgQQgFAKgKAGQgJAFgKAAQgMAAgKgEg");
	this.shape_2.setTransform(210.8,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXCcIAAk3IAvAAIAAE3g");
	this.shape_3.setTransform(200.2,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXCcIAAkIIgjAAIAAgvIB1AAIAAAvIgjAAIAAEIg");
	this.shape_4.setTransform(190.4,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYCcIgiiNIgLgqIAAC3IgqAAIAAk3IAvAAIAeCMIAJArIAAi3IApAAIAAE3g");
	this.shape_5.setTransform(171.7,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXCcQgLgEgIgIQgIgJgGgLQgEgMAAgOIAAjDQAAgOAEgMQAGgLAIgJQAIgIALgEQALgFAMAAQANAAALAFQALAEAIAIQAJAJAFALQAEAMAAAOIAADDQAAAOgEAMQgFALgJAJQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgLhkIAADJQAAANALABQAMgBAAgNIAAjJQAAgOgMAAQgLAAAAAOg");
	this.shape_6.setTransform(157.1,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8CcIAAk3IBAAAQALgBAKAEQALAEAHAGQAJAJAEAKQAEAMABAQIAADBQgBAPgEAMQgEALgJAHQgHAHgLADQgKADgLAAgAgLBvIALAAQAMAAAAgPIAAi/QAAgPgMAAIgLAAg");
	this.shape_7.setTransform(137.9,28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxCcIAAk3IAxAAIAAEKIAxAAIAAAtg");
	this.shape_8.setTransform(125.5,28);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXCcQgLgEgIgIQgIgJgGgLQgEgMAAgOIAAjDQAAgOAEgMQAGgLAIgJQAIgIALgEQALgFAMAAQANAAALAFQALAEAJAIQAIAJAFALQAEAMAAAOIAADDQAAAOgEAMQgFALgIAJQgJAIgLAEQgLAFgNAAQgMAAgLgFgAgLhkIAADJQAAANALABQAMgBAAgNIAAjJQAAgOgMAAQgLAAAAAOg");
	this.shape_9.setTransform(112.3,28);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOCcIAAiBIgbAAIAACBIgwAAIAAk3IAwAAIAACIIAbAAIAAiIIAwAAIAAE3g");
	this.shape_10.setTransform(97.8,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAjQAIAAAFgHQAFgGAAgNIgSAAIAAg2IAkAAIAAAxQABATgLALQgKAMgQAAg");
	this.shape_11.setTransform(82.5,42.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXCcQgLgEgIgIQgJgJgEgLQgFgMAAgOIAAjDQAAgOAFgMQAEgLAJgJQAIgIALgEQAMgFALAAQANAAALAFQALAEAIAIQAJAJAEALQAFAMAAAOIAADDQAAAOgFAMQgEALgJAJQgIAIgLAEQgLAFgNAAQgLAAgMgFgAgLhkIAADJQAAANALABQAMgBgBgNIAAjJQABgOgMAAQgLAAAAAOg");
	this.shape_12.setTransform(72.6,28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAOCcIAAiBIgaAAIAACBIgxAAIAAk3IAxAAIAACIIAaAAIAAiIIAwAAIAAE3g");
	this.shape_13.setTransform(58.1,28);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAjQAHAAAFgHQAFgGAAgNIgRAAIAAg2IAkAAIAAAxQgBATgJALQgKAMgQAAg");
	this.shape_14.setTransform(42.9,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXCcQgLgEgIgIQgIgJgGgLQgEgMAAgOIAAjDQAAgOAEgMQAGgLAIgJQAIgIALgEQALgFAMAAQANAAALAFQALAEAIAIQAJAJAFALQAEAMAAAOIAADDQAAAOgEAMQgFALgJAJQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgLhkIAADJQAAANALABQAMgBAAgNIAAjJQAAgOgMAAQgLAAAAAOg");
	this.shape_15.setTransform(33,28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOCcIAAiBIgaAAIAACBIgxAAIAAk3IAxAAIAACIIAaAAIAAiIIAwAAIAAE3g");
	this.shape_16.setTransform(18.5,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(9,4,237.9,51), null);


(lib.legkick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAzQgDgDgBgFQgBgFAFgHQAOgFAKgaIgBgBQAAgFACgIQABgFgDgHIAAgBIAAgCIABgFIABgDQACgDADgIIACgCIAHABQAUAFgIAcQgCAKgIAGIgDACQAAAEgRAYQgQAVgEAAIgBAAg");
	this.shape.setTransform(105.7,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKA2QgEgDgCgEQgDgEAEgIQAMgIACgbIgBgCQgBgFAAgIQABgFgHgGQgIgJgEgIIADABQAAgFAHgDQAHgDAFAAQAVAAAAAeQgBAKgFAIIgDADQABACgKAcQgKAagDAAIgBAAg");
	this.shape_1.setTransform(107.1,61.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABAtIgBgBIAAgBQAGgHACgHIACAAQAFgNAAgJIAAgCQgEgCgDgDQgFgMgDgCQgWgRgFgEQAEgIAFgCQAEgDAJAAQAPAAAKASQAIAOAAAQIgBAEQgCAIAAAEQAAAFgDAFIgBAEIgGAJIgDAIIgBACIgCAAQgFAAgDgEg");
	this.shape_2.setTransform(107.7,60.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAjIAAgBIAIgJIAIgKIAAgBQAKgKAAgIIAAgDIgEgBIgIgEQgLgGgDgBIgYgEQgKgDgEgMQAOgGALgCIAAAAIACAAIABABQACACAEABIAMAFIAHADIADABIALAFIAGAFIADACIABAHQgBASgIARQgJARgMAJQgKgCABgKg");
	this.shape_3.setTransform(109.1,61.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAsIgEgHIAFgNIABgDQAKgPABgGQABgGgFgEQgEgEgKABQgJAAgNgCIgPgDQgHgDgFgIIACgEIAAgCIAHgDIAEgDIACADQABABAGAAIAIADQAFABAHAAIAFACIAWADIAEADIAHADQABALAAAKQgCAPgLAVQgGANgFABIgDgFgAADgsIgJgDIgGAAIgCABIgFgBIAJgBIANAAIACAEIgCAAg");
	this.shape_4.setTransform(109.6,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAtIgCgBIABgBQAFgHABgHIACAAQAGgNAAgJIgBgCQgDgCgDgDQgFgMgDgCIgUgQIADgDIACgEIAEgEIADgFIABgCIABAAQAQAAAJASQAIAOAAAQIAAAEQgDAIAAAEQAAAFgCAFIgCAEIgFAJIgEAIIgBACIgCAAQgFAAgBgEg");
	this.shape_5.setTransform(108.1,60.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA1IgGgIQgDgEADgGQAMgIACgbIgBgCQgBgEABgJQAAgFgGgGIgIgJIADgFIADgHIABgDIAAAAQAGgCAFAAQAUAAAAAdQAAAKgGAIIgCADQAAADgKAcQgJAYgEAAIAAAAg");
	this.shape_6.setTransform(107.3,61.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/AqQABgGAHgGQAHgFABgJQACgIACgFQACgDgBgEIAAgBIALgFQAKgEAEgFIAGgGQAGgFACgCIABgEIAEgGIAMgJIAEgCQAKgEAPAAQADAAAFAEQAGADAAACQAAAIAGADQAHADgbAQQgcAPgUADIgSADIgBABIgGAVQgDAGgKALIgRAQQgFgGACgKg");
	this.shape_7.setTransform(105.4,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7,p:{x:105.4,y:60.8}}]},2).to({state:[{t:this.shape_7,p:{x:104.9,y:60.5}}]},2).to({state:[{t:this.shape_7,p:{x:104.5,y:60.2}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.8,56.7,5.9,10.2);


(lib.frontLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAzQgDgDgBgFQgBgFAFgHQAOgFAKgaIgBgBQAAgFACgIQABgFgDgHIAAgBIAAgCIABgFIABgDQACgDADgIIACgCIAHABQAUAFgIAcQgCAKgIAGIgDACQAAAEgRAYQgQAVgEAAIgBAAg");
	this.shape.setTransform(105.7,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKA2QgEgDgCgEQgDgEAEgIQAMgIACgbIgBgCQgBgFAAgIQABgFgHgGQgIgJgEgIIADABQAAgFAHgDQAHgDAFAAQAVAAAAAeQgBAKgFAIIgDADQABACgKAcQgKAagDAAIgBAAg");
	this.shape_1.setTransform(107.1,61.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABAtIgBgBIAAgBQAGgHACgHIACAAQAFgNAAgJIAAgCQgEgCgDgDQgFgMgDgCQgWgRgFgEQAEgIAFgCQAEgDAJAAQAPAAAKASQAIAOAAAQIgBAEQgCAIAAAEQAAAFgDAFIgBAEIgGAJIgDAIIgBACIgCAAQgFAAgDgEg");
	this.shape_2.setTransform(107.7,60.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAjIAAgBIAIgJIAIgKIAAgBQAKgKAAgIIAAgDIgEgBIgIgEQgLgGgDgBIgYgEQgKgDgEgMQAOgGALgCIAAAAIACAAIABABQACACAEABIAMAFIAHADIADABIALAFIAGAFIADACIABAHQgBASgIARQgJARgMAJQgKgCABgKg");
	this.shape_3.setTransform(109.1,61.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOArIgEgGIAFgOIABgCQAKgPABgGQABgGgFgEQgEgEgKAAQgJABgNgCIgPgEQgHgDgFgHIACgEIAAgDIAHgCIAEgEIACADQABACAGAAIAIACQAFACAHAAIAFACIAWADIAEADIAHADQABALAAAJQgCAQgLAVQgGAMgFACIgDgGgAgTgvIADgBIADABIgBABIgFgBg");
	this.shape_4.setTransform(109.6,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAtIgCgBIABgBQAFgHABgHIACAAQAGgNAAgJIgBgCQgDgCgDgDQgFgMgDgCIgUgQIADgDIACgEIAEgEIADgFIABgCIABAAQAQAAAJASQAIAOAAAQIAAAEQgDAIAAAEQAAAFgCAFIgCAEIgFAJIgEAIIgBACIgCAAQgFAAgBgEg");
	this.shape_5.setTransform(108.1,60.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA1IgGgIQgDgEADgGQAMgIACgbIgBgCQgBgEABgJQAAgFgGgGIgIgJIADgFIADgHIABgDIAAAAQAGgCAFAAQAUAAAAAdQAAAKgGAIIgCADQAAADgKAcQgJAYgEAAIAAAAg");
	this.shape_6.setTransform(107.3,61.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguApQABgFAIgGQAGgGACgIQABgJADgEQACgEgBgEIAAAAIALgFQAJgFAEgFIAGgGQAGgEABgDIABgEIAGgFIAFgEIAHgGIADgCIALgDIABAQIAAAAIgLARIgFAGIgTAPIgBAAIgJADIgBABIgHABIAAACIgGAUQgEAHgKAKIgRARQgEgGABgLg");
	this.shape_7.setTransform(103.5,61.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguApQABgFAIgGQAGgGACgIQABgJADgEQACgEgBgEIAAAAIALgFQAJgFAEgFIAGgGQAGgEABgDIABgDIAGgGIAMgKIADgCIALgDIABAQIAAABIgLAQIgFAGIgTAPIgBAAIgJADIgBABIgHABIAAACIgGAUQgEAHgKAKIgRARQgEgGABgLg");
	this.shape_8.setTransform(102.5,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8,p:{x:102.5,y:60.8}}]},2).to({state:[{t:this.shape_8,p:{x:101.5,y:60.6}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.8,56.7,5.9,10.2);


(lib.snowflake2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(33,-59.5,0.343,0.343,0,0,0,25.2,25.7);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25,regY:25.5,rotation:-8.7,x:31.5,y:-55.8},0).wait(1).to({rotation:-17.2,x:30.1,y:-52.3},0).wait(1).to({rotation:-25.4,x:28.8,y:-48.9},0).wait(1).to({rotation:-33.3,x:27.5,y:-45.6},0).wait(1).to({rotation:-41,x:26.2,y:-42.3},0).wait(1).to({rotation:-48.4,x:25.1,y:-39.2},0).wait(1).to({rotation:-55.7,x:23.9,y:-36.2},0).wait(1).to({rotation:-62.7,x:22.7,y:-33.2},0).wait(1).to({rotation:-69.6,x:21.6,y:-30.4},0).wait(1).to({rotation:-76.2,x:20.6,y:-27.5},0).wait(1).to({rotation:-82.7,x:19.5,y:-24.8},0).wait(1).to({rotation:-89,x:18.5,y:-22.2},0).wait(1).to({rotation:-95.2,x:17.5,y:-19.6},0).wait(1).to({rotation:-101.2,x:16.6,y:-17.1},0).wait(1).to({rotation:-107,x:15.6,y:-14.6},0).wait(1).to({rotation:-112.7,x:14.7,y:-12.3},0).wait(1).to({rotation:-118.3,x:13.8,y:-10},0).wait(1).to({rotation:-123.7,x:12.9,y:-7.7},0).wait(1).to({rotation:-129,x:12,y:-5.5},0).wait(1).to({rotation:-134.2,x:11.2,y:-3.3},0).wait(1).to({rotation:-139.3,x:10.4,y:-1.3},0).wait(1).to({rotation:-144.3,x:9.6,y:0.9},0).wait(1).to({rotation:-149.1,x:8.8,y:2.9},0).wait(1).to({rotation:-153.8,x:8,y:4.8},0).wait(1).to({rotation:-158.5,x:7.3,y:6.8},0).wait(1).to({rotation:-163,x:6.6,y:8.7},0).wait(1).to({rotation:-167.4,x:5.9,y:10.5},0).wait(1).to({rotation:-171.8,x:5.1,y:12.4},0).wait(1).to({rotation:-176,x:4.5,y:14.1},0).wait(1).to({rotation:-180.2,x:3.8,y:15.9},0).wait(1).to({rotation:-184.3,x:3.1,y:17.6},0).wait(1).to({rotation:-188.3,x:2.5,y:19.2},0).wait(1).to({rotation:-192.2,x:1.8,y:20.8},0).wait(1).to({rotation:-196.1,x:1.2,y:22.4},0).wait(1).to({rotation:-199.8,x:0.6,y:24},0).wait(1).to({rotation:-203.5,x:0,y:25.5},0).wait(1).to({rotation:-207.2,x:-0.6,y:27},0).wait(1).to({rotation:-210.7,x:-1.1,y:28.6},0).wait(1).to({rotation:-214.2,x:-1.7,y:30},0).wait(1).to({rotation:-217.6,x:-2.3,y:31.4},0).wait(1).to({rotation:-221,x:-2.8,y:32.8},0).wait(1).to({rotation:-224.3,x:-3.4,y:34.2},0).wait(1).to({rotation:-227.5,x:-3.9,y:35.6},0).wait(1).to({rotation:-230.7,x:-4.4,y:36.9},0).wait(1).to({rotation:-233.9,x:-4.9,y:38.2},0).wait(1).to({rotation:-236.9,x:-5.5,y:39.5},0).wait(1).to({rotation:-240,x:-5.9,y:40.7},0).wait(1).to({rotation:-242.9,x:-6.4,y:41.9},0).wait(1).to({rotation:-245.8,x:-6.9,y:43.1},0).wait(1).to({rotation:-248.7,x:-7.3,y:44.3},0).wait(1).to({rotation:-251.5,x:-7.8,y:45.6},0).wait(1).to({rotation:-254.3,x:-8.2,y:46.7},0).wait(1).to({rotation:-257,x:-8.7,y:47.8},0).wait(1).to({rotation:-259.7,x:-9.1,y:49},0).wait(1).to({rotation:-262.3,x:-9.5,y:50},0).wait(1).to({rotation:-264.9,x:-9.9,y:51.1},0).wait(1).to({rotation:-267.5,x:-10.4,y:52.1},0).wait(1).to({rotation:-270,x:-10.8,y:53.2},0).wait(1).to({rotation:-272.4,x:-11.2,y:54.2},0).wait(1).to({rotation:-274.9,x:-11.5,y:55.3},0).wait(1).to({rotation:-277.3,x:-12,y:56.2},0).wait(1).to({rotation:-279.6,x:-12.3,y:57.2},0).wait(1).to({rotation:-282,x:-12.7,y:58.2},0).wait(1).to({rotation:-284.2,x:-13.1,y:59.2},0).wait(1).to({rotation:-286.5,x:-13.5,y:60.1},0).wait(1).to({rotation:-288.7,x:-13.8,y:61},0).wait(1).to({rotation:-290.9,x:-14.2,y:61.9},0).wait(1).to({rotation:-293.1,x:-14.5,y:62.8},0).wait(1).to({rotation:-295.2,x:-14.9,y:63.7},0).wait(1).to({rotation:-297.3,x:-15.2,y:64.6},0).wait(1).to({rotation:-299.3,x:-15.5,y:65.5},0).wait(1).to({rotation:-301.4,x:-15.9,y:66.3},0).wait(1).to({rotation:-303.4,x:-16.2,y:67.1},0).wait(1).to({rotation:-305.4,x:-16.6,y:68},0).wait(1).to({rotation:-307.3,x:-16.9,y:68.8},0).wait(1).to({rotation:-309.2,x:-17.2,y:69.6},0).wait(1).to({rotation:-311.1,x:-17.5,y:70.4},0).wait(1).to({rotation:-313,x:-17.8,y:71.2},0).wait(1).to({rotation:-314.9,x:-18.1,y:72},0).wait(1).to({rotation:-316.7,x:-18.4,y:72.7},0).wait(1).to({rotation:-318.5,x:-18.7,y:73.5},0).wait(1).to({rotation:-320.3,x:-19,y:74.3},0).wait(1).to({rotation:-322.1,x:-19.3,y:75},0).wait(1).to({rotation:-323.8,x:-19.6,y:75.7},0).wait(1).to({rotation:-325.5,x:-19.9,y:76.4},0).wait(1).to({rotation:-327.2,x:-20.2,y:77.1},0).wait(1).to({rotation:-328.9,x:-20.4,y:77.8},0).wait(1).to({rotation:-330.6,x:-20.7,y:78.5},0).wait(1).to({rotation:-332.3,x:-20.9,y:79.2},0).wait(1).to({rotation:-333.9,x:-21.2,y:79.9},0).wait(1).to({rotation:-335.5,x:-21.5,y:80.6},0).wait(1).to({rotation:-337.1,x:-21.8,y:81.3},0).wait(1).to({rotation:-338.7,x:-22,y:81.9},0).wait(1).to({rotation:-340.3,x:-22.3,y:82.6},0).wait(1).to({rotation:-341.8,x:-22.5,y:83.2},0).wait(1).to({rotation:-343.3,x:-22.8,y:83.9},0).wait(1).to({rotation:-344.9,x:-23,y:84.5},0).wait(1).to({rotation:-346.4,x:-23.2,y:85.1},0).wait(1).to({rotation:-347.9,x:-23.5,y:85.8},0).wait(1).to({rotation:-349.4,x:-23.7,y:86.4},0).wait(1).to({rotation:-350.8,x:-24,y:87},0).wait(1).to({rotation:-352.3,x:-24.2,y:87.6},0).wait(1).to({rotation:-353.8,x:-24.5,y:88.3},0).wait(1).to({rotation:-355.2,x:-24.7,y:88.8},0).wait(1).to({rotation:-356.6,x:-24.9,y:89.5},0).wait(1).to({rotation:-358.1,x:-25.2,y:90.1},0).wait(1).to({rotation:-359.5,x:-25.5,y:90.7},0).wait(1).to({rotation:-360.9,x:-25.7,y:91.2},0).wait(1).to({rotation:-362.3,x:-25.9,y:91.8},0).wait(1).to({rotation:-363.7,x:-26.1,y:92.4},0).wait(1).to({rotation:-365.1,x:-26.3,y:93},0).wait(1).to({rotation:-366.5,x:-26.6,y:93.6},0).wait(1).to({rotation:-367.8,x:-26.8,y:94.1},0).wait(1).to({rotation:-369.2,x:-27,y:94.7},0).wait(1).to({rotation:-370.6,x:-27.2,y:95.3},0).wait(1).to({rotation:-371.9,x:-27.4,y:95.9},0).wait(1).to({rotation:-373.3,x:-27.7,y:96.4},0).wait(1).to({rotation:-374.6,x:-27.9,y:97},0).wait(1).to({rotation:-376,x:-28.1,y:97.5},0).wait(1).to({rotation:-377.3,x:-28.3,y:98.1},0).wait(1).to({rotation:-378.7,x:-28.6,y:98.7},0).wait(1).to({rotation:-380,x:-28.8,y:99.2},0).wait(1).to({rotation:-381.3,x:-29,y:99.8},0).wait(1).to({rotation:-382.7,x:-29.2,y:100.3},0).wait(1).to({rotation:-384,x:-29.4,y:100.9},0).wait(1).to({rotation:-385.4,x:-29.6,y:101.5},0).wait(1).to({rotation:-386.7,x:-29.8,y:102},0).wait(1).to({rotation:-388.1,x:-30.1,y:102.6},0).wait(1).to({rotation:-389.4,x:-30.3,y:103.2},0).wait(1).to({rotation:-390.7,x:-30.6,y:103.7},0).wait(1).to({rotation:-392.1,x:-30.7,y:104.3},0).wait(1).to({rotation:-393.5,x:-31,y:104.8},0).wait(1).to({rotation:-394.8,x:-31.2,y:105.5},0).wait(1).to({rotation:-396.2,x:-31.4,y:106},0).wait(1).to({rotation:-397.5,x:-31.6,y:106.6},0).wait(1).to({rotation:-398.9,x:-31.9,y:107.1},0).wait(1).to({rotation:-400.3,x:-32.1,y:107.7},0).wait(1).to({rotation:-401.7,x:-32.3,y:108.3},0).wait(1).to({rotation:-403.1,x:-32.6,y:108.9},0).wait(1).to({rotation:-404.5,x:-32.7,y:109.5},0).wait(1).to({rotation:-405.9,x:-33,y:110.1},0).wait(1).to({rotation:-407.3,x:-33.2,y:110.7},0).wait(1).to({rotation:-408.7,x:-33.5,y:111.3},0).wait(1).to({rotation:-410.2,x:-33.7,y:111.9},0).wait(1).to({rotation:-411.6,x:-33.9,y:112.5},0).wait(1).to({rotation:-413.1,x:-34.1,y:113.1},0).wait(1).to({rotation:-414.6,x:-34.4,y:113.7},0).wait(1).to({rotation:-416.1,x:-34.6,y:114.4},0).wait(1).to({rotation:-417.6,x:-34.8,y:115},0).wait(1).to({rotation:-419.1,x:-35.1,y:115.6},0).wait(1).to({rotation:-420.6,x:-35.4,y:116.3},0).wait(1).to({rotation:-422.2,x:-35.6,y:116.9},0).wait(1).to({rotation:-423.7,x:-35.8,y:117.5},0).wait(1).to({rotation:-425.3,x:-36.1,y:118.2},0).wait(1).to({rotation:-426.9,x:-36.4,y:118.9},0).wait(1).to({rotation:-428.5,x:-36.6,y:119.5},0).wait(1).to({rotation:-430.2,x:-36.9,y:120.3},0).wait(1).to({rotation:-431.8,x:-37.2,y:121},0).wait(1).to({rotation:-433.5,x:-37.4,y:121.7},0).wait(1).to({rotation:-435.2,x:-37.7,y:122.4},0).wait(1).to({rotation:-436.9,x:-38,y:123.1},0).wait(1).to({rotation:-438.7,x:-38.2,y:123.8},0).wait(1).to({rotation:-440.5,x:-38.6,y:124.6},0).wait(1).to({rotation:-442.3,x:-38.9,y:125.4},0).wait(1).to({rotation:-444.1,x:-39.1,y:126.1},0).wait(1).to({rotation:-446,x:-39.5,y:126.9},0).wait(1).to({rotation:-447.9,x:-39.8,y:127.7},0).wait(1).to({rotation:-449.8,x:-40,y:128.5},0).wait(1).to({rotation:-451.7,x:-40.4,y:129.3},0).wait(1).to({rotation:-453.7,x:-40.7,y:130.1},0).wait(1).to({rotation:-455.7,x:-41,y:131},0).wait(1).to({rotation:-457.8,x:-41.4,y:131.8},0).wait(1).to({rotation:-459.9,x:-41.7,y:132.7},0).wait(1).to({rotation:-462,x:-42.1,y:133.6},0).wait(1).to({rotation:-464.2,x:-42.4,y:134.5},0).wait(1).to({rotation:-466.4,x:-42.7,y:135.4},0).wait(1).to({rotation:-468.7,x:-43.1,y:136.4},0).wait(1).to({rotation:-471,x:-43.5,y:137.3},0).wait(1).to({rotation:-473.3,x:-43.8,y:138.4},0).wait(1).to({rotation:-475.7,x:-44.2,y:139.4},0).wait(1).to({rotation:-478.2,x:-44.7,y:140.3},0).wait(1).to({rotation:-480.7,x:-45.1,y:141.4},0).wait(1).to({rotation:-483.2,x:-45.5,y:142.5},0).wait(1).to({rotation:-485.9,x:-45.8,y:143.6},0).wait(1).to({rotation:-488.5,x:-46.3,y:144.7},0).wait(1).to({rotation:-491.3,x:-46.8,y:145.8},0).wait(1).to({rotation:-494.1,x:-47.2,y:147},0).wait(1).to({rotation:-497,x:-47.7,y:148.2},0).wait(1).to({rotation:-499.9,x:-48.1,y:149.4},0).wait(1).to({rotation:-502.9,x:-48.7,y:150.7},0).wait(1).to({rotation:-506,x:-49.1,y:152},0).wait(1).to({rotation:-509.2,x:-49.6,y:153.3},0).wait(1).to({rotation:-512.5,x:-50.2,y:154.7},0).wait(1).to({rotation:-515.8,x:-50.7,y:156.1},0).wait(1).to({rotation:-519.2,x:-51.2,y:157.5},0).wait(1).to({rotation:-522.8,x:-51.8,y:159},0).wait(1).to({rotation:-526.4,x:-52.4,y:160.5},0).wait(1).to({rotation:-530.2,x:-53,y:162.1},0).wait(1).to({rotation:-534,x:-53.7,y:163.7},0).wait(1).to({rotation:-538,x:-54.3,y:165.3},0).wait(1).to({rotation:-542.1,x:-54.9,y:167},0).wait(1).to({rotation:-546.4,x:-55.6,y:168.8},0).wait(1).to({rotation:-550.7,x:-56.3,y:170.6},0).wait(1).to({rotation:-555.3,x:-57,y:172.5},0).wait(1).to({rotation:-560,x:-57.8,y:174.5},0).wait(1).to({rotation:-564.8,x:-58.6,y:176.5},0).wait(1).to({rotation:-569.9,x:-59.4,y:178.5},0).wait(1).to({rotation:-575.1,x:-60.3,y:180.8},0).wait(1).to({rotation:-580.5,x:-61.2,y:183},0).wait(1).to({rotation:-586.2,x:-62.1,y:185.4},0).wait(1).to({rotation:-592.1,x:-63,y:187.8},0).wait(1).to({rotation:-598.2,x:-64,y:190.4},0).wait(1).to({rotation:-604.7,x:-65.1,y:193.1},0).wait(1).to({rotation:-611.4,x:-66.2,y:195.9},0).wait(1).to({rotation:-618.5,x:-67.3,y:198.8},0).wait(1).to({rotation:-625.9,x:-68.5,y:201.9},0).wait(1).to({rotation:-633.8,x:-69.9,y:205.2},0).wait(1).to({rotation:-642.1,x:-71.2,y:208.7},0).wait(1).to({rotation:-650.9,x:-72.6,y:212.3},0).wait(1).to({rotation:-660.3,x:-74.2,y:216.2},0).wait(1).to({rotation:-670.3,x:-75.8,y:220.5},0).wait(1).to({rotation:-681.2,x:-77.6,y:225},0).wait(1).to({rotation:-692.9,x:-79.6,y:229.9},0).wait(1).to({rotation:-705.8,x:-81.7,y:235.3},0).wait(1).to({regX:25.2,regY:25.7,rotation:-720,x:-83.9,y:241.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.4,-68.3,17.2,17.5);


(lib.snowflake1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25,21.5,1,1,0,0,0,25,21.5);

	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.3,812.6,1,1,0,0,0,25,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:29.7,regY:23.5,rotation:4,x:30.8,y:32.7},0).wait(1).to({rotation:7.9,x:31.8,y:41.4},0).wait(1).to({rotation:11.5,x:32.8,y:49.7},0).wait(1).to({rotation:15,x:33.7,y:57.6},0).wait(1).to({rotation:18.4,x:34.5,y:65.2},0).wait(1).to({rotation:21.6,x:35.3,y:72.4},0).wait(1).to({rotation:24.6,x:36.1,y:79.4},0).wait(1).to({rotation:27.6,x:36.7,y:86.1},0).wait(1).to({rotation:30.5,x:37.5,y:92.5},0).wait(1).to({rotation:33.2,x:38.1,y:98.8},0).wait(1).to({rotation:35.9,x:38.7,y:104.8},0).wait(1).to({rotation:38.5,x:39.3,y:110.6},0).wait(1).to({rotation:41,x:39.9,y:116.2},0).wait(1).to({rotation:43.4,x:40.5,y:121.5},0).wait(1).to({rotation:45.8,x:40.9,y:126.8},0).wait(1).to({rotation:48,x:41.5,y:131.9},0).wait(1).to({rotation:50.3,x:42,y:136.9},0).wait(1).to({rotation:52.4,x:42.5,y:141.6},0).wait(1).to({rotation:54.5,x:42.9,y:146.3},0).wait(1).to({rotation:56.6,x:43.4,y:150.8},0).wait(1).to({rotation:58.5,x:43.8,y:155.2},0).wait(1).to({rotation:60.5,x:44.3,y:159.5},0).wait(1).to({rotation:62.4,x:44.7,y:163.7},0).wait(1).to({rotation:64.2,x:45.1,y:167.7},0).wait(1).to({rotation:66,x:45.5,y:171.7},0).wait(1).to({rotation:67.8,x:45.9,y:175.6},0).wait(1).to({rotation:69.5,x:46.3,y:179.3},0).wait(1).to({rotation:71.2,x:46.6,y:183},0).wait(1).to({rotation:72.8,x:47,y:186.7},0).wait(1).to({rotation:74.5,x:47.3,y:190.2},0).wait(1).to({rotation:76,x:47.7,y:193.6},0).wait(1).to({rotation:77.6,x:48.1,y:197},0).wait(1).to({rotation:79.1,x:48.3,y:200.3},0).wait(1).to({rotation:80.6,x:48.7,y:203.6},0).wait(1).to({rotation:82,x:49,y:206.7},0).wait(1).to({rotation:83.5,x:49.4,y:209.8},0).wait(1).to({rotation:84.9,x:49.7,y:212.9},0).wait(1).to({rotation:86.2,x:50,y:215.9},0).wait(1).to({rotation:87.6,x:50.3,y:218.8},0).wait(1).to({rotation:88.9,x:50.6,y:221.7},0).wait(1).to({rotation:90.2,x:50.9,y:224.5},0).wait(1).to({rotation:91.5,x:51.1,y:227.3},0).wait(1).to({rotation:92.8,x:51.4,y:229.9},0).wait(1).to({rotation:94,x:51.7,y:232.6},0).wait(1).to({rotation:95.2,x:52,y:235.3},0).wait(1).to({rotation:96.4,x:52.3,y:237.8},0).wait(1).to({rotation:97.6,x:52.5,y:240.4},0).wait(1).to({rotation:98.8,x:52.8,y:242.8},0).wait(1).to({rotation:99.9,x:53.1,y:245.3},0).wait(1).to({rotation:101,x:53.4,y:247.7},0).wait(1).to({rotation:102.1,x:53.6,y:250.1},0).wait(1).to({rotation:103.2,x:53.8,y:252.4},0).wait(1).to({rotation:104.3,x:54.1,y:254.8},0).wait(1).to({rotation:105.4,x:54.4,y:257.1},0).wait(1).to({rotation:106.4,x:54.6,y:259.3},0).wait(1).to({rotation:107.4,x:54.9,y:261.5},0).wait(1).to({rotation:108.5,x:55.1,y:263.6},0).wait(1).to({rotation:109.5,x:55.4,y:265.8},0).wait(1).to({rotation:110.5,x:55.6,y:268},0).wait(1).to({rotation:111.4,x:55.9,y:270},0).wait(1).to({rotation:112.4,x:56.1,y:272.1},0).wait(1).to({rotation:113.4,x:56.3,y:274.1},0).wait(1).to({rotation:114.3,x:56.6,y:276.2},0).wait(1).to({rotation:115.2,x:56.8,y:278.2},0).wait(1).to({rotation:116.2,x:57,y:280.1},0).wait(1).to({rotation:117.1,x:57.3,y:282.1},0).wait(1).to({rotation:118,x:57.5,y:284},0).wait(1).to({rotation:118.9,x:57.7,y:285.9},0).wait(1).to({rotation:119.8,x:57.9,y:287.8},0).wait(1).to({rotation:120.6,x:58.2,y:289.6},0).wait(1).to({rotation:121.5,x:58.3,y:291.5},0).wait(1).to({rotation:122.4,x:58.6,y:293.3},0).wait(1).to({rotation:123.2,x:58.8,y:295.1},0).wait(1).to({rotation:124.1,x:59.1,y:297},0).wait(1).to({rotation:124.9,x:59.3,y:298.7},0).wait(1).to({rotation:125.7,x:59.5,y:300.5},0).wait(1).to({rotation:126.6,x:59.7,y:302.2},0).wait(1).to({rotation:127.4,x:59.9,y:304},0).wait(1).to({rotation:128.2,x:60.2,y:305.7},0).wait(1).to({rotation:129,x:60.4,y:307.4},0).wait(1).to({rotation:129.8,x:60.6,y:309.1},0).wait(1).to({rotation:130.6,x:60.8,y:310.8},0).wait(1).to({rotation:131.4,x:61,y:312.5},0).wait(1).to({rotation:132.2,x:61.2,y:314.1},0).wait(1).to({rotation:133,x:61.4,y:315.8},0).wait(1).to({rotation:133.7,x:61.6,y:317.4},0).wait(1).to({rotation:134.5,x:61.9,y:319.1},0).wait(1).to({rotation:135.3,x:62.1,y:320.7},0).wait(1).to({rotation:136.1,x:62.3,y:322.3},0).wait(1).to({rotation:136.8,x:62.5,y:323.9},0).wait(1).to({rotation:137.6,x:62.7,y:325.5},0).wait(1).to({rotation:138.3,x:62.9,y:327.1},0).wait(1).to({rotation:139.1,x:63.1,y:328.7},0).wait(1).to({rotation:139.8,x:63.3,y:330.3},0).wait(1).to({rotation:140.6,x:63.6,y:331.9},0).wait(1).to({rotation:141.3,x:63.7,y:333.5},0).wait(1).to({rotation:142.1,x:63.9,y:335.1},0).wait(1).to({rotation:142.8,x:64.2,y:336.6},0).wait(1).to({rotation:143.6,x:64.4,y:338.2},0).wait(1).to({rotation:144.3,x:64.6,y:339.8},0).wait(1).to({rotation:145.1,x:64.8,y:341.4},0).wait(1).to({rotation:145.8,x:65.1,y:342.9},0).wait(1).to({rotation:146.6,x:65.3,y:344.5},0).wait(1).to({rotation:147.3,x:65.5,y:346},0).wait(1).to({rotation:148,x:65.7,y:347.6},0).wait(1).to({rotation:148.8,x:65.9,y:349.2},0).wait(1).to({rotation:149.5,x:66.2,y:350.8},0).wait(1).to({rotation:150.3,x:66.4,y:352.3},0).wait(1).to({rotation:151,x:66.6,y:353.9},0).wait(1).to({rotation:151.8,x:66.8,y:355.5},0).wait(1).to({rotation:152.5,x:67,y:357.1},0).wait(1).to({rotation:153.3,x:67.3,y:358.7},0).wait(1).to({rotation:154,x:67.5,y:360.3},0).wait(1).to({rotation:154.8,x:67.8,y:361.9},0).wait(1).to({rotation:155.6,x:68,y:363.5},0).wait(1).to({rotation:156.3,x:68.2,y:365.1},0).wait(1).to({rotation:157.1,x:68.4,y:366.7},0).wait(1).to({rotation:157.9,x:68.7,y:368.4},0).wait(1).to({rotation:158.6,x:68.9,y:369.9},0).wait(1).to({rotation:159.4,x:69.2,y:371.6},0).wait(1).to({rotation:160.2,x:69.4,y:373.3},0).wait(1).to({rotation:161,x:69.6,y:374.9},0).wait(1).to({rotation:161.8,x:69.9,y:376.7},0).wait(1).to({rotation:162.6,x:70.1,y:378.3},0).wait(1).to({rotation:163.4,x:70.4,y:380},0).wait(1).to({rotation:164.2,x:70.7,y:381.8},0).wait(1).to({rotation:165,x:71,y:383.4},0).wait(1).to({rotation:165.9,x:71.2,y:385.2},0).wait(1).to({rotation:166.7,x:71.5,y:387},0).wait(1).to({rotation:167.5,x:71.8,y:388.7},0).wait(1).to({rotation:168.4,x:72,y:390.5},0).wait(1).to({rotation:169.2,x:72.3,y:392.3},0).wait(1).to({rotation:170.1,x:72.6,y:394.1},0).wait(1).to({rotation:171,x:72.8,y:396},0).wait(1).to({rotation:171.9,x:73.2,y:397.9},0).wait(1).to({rotation:172.8,x:73.5,y:399.8},0).wait(1).to({rotation:173.7,x:73.8,y:401.7},0).wait(1).to({rotation:174.6,x:74.1,y:403.6},0).wait(1).to({rotation:175.5,x:74.4,y:405.5},0).wait(1).to({rotation:176.4,x:74.7,y:407.5},0).wait(1).to({rotation:177.4,x:75.1,y:409.5},0).wait(1).to({rotation:178.3,x:75.3,y:411.5},0).wait(1).to({rotation:179.3,x:75.7,y:413.6},0).wait(1).to({rotation:180.3,x:76.1,y:415.7},0).wait(1).to({rotation:181.3,x:76.4,y:417.8},0).wait(1).to({rotation:182.3,x:76.7,y:420},0).wait(1).to({rotation:183.4,x:77.1,y:422.2},0).wait(1).to({rotation:184.4,x:77.5,y:424.3},0).wait(1).to({rotation:185.5,x:77.9,y:426.6},0).wait(1).to({rotation:186.6,x:78.2,y:428.9},0).wait(1).to({rotation:187.7,x:78.6,y:431.3},0).wait(1).to({rotation:188.8,x:79,y:433.7},0).wait(1).to({rotation:189.9,x:79.4,y:436.1},0).wait(1).to({rotation:191.1,x:79.8,y:438.6},0).wait(1).to({rotation:192.3,x:80.3,y:441.1},0).wait(1).to({rotation:193.5,x:80.6,y:443.6},0).wait(1).to({rotation:194.7,x:81.1,y:446.2},0).wait(1).to({rotation:195.9,x:81.6,y:448.9},0).wait(1).to({rotation:197.2,x:82.1,y:451.6},0).wait(1).to({rotation:198.5,x:82.5,y:454.3},0).wait(1).to({rotation:199.9,x:83,y:457.2},0).wait(1).to({rotation:201.2,x:83.5,y:460.1},0).wait(1).to({rotation:202.6,x:84.1,y:463.1},0).wait(1).to({rotation:204,x:84.5,y:466.1},0).wait(1).to({rotation:205.5,x:85.1,y:469.2},0).wait(1).to({rotation:207,x:85.7,y:472.4},0).wait(1).to({rotation:208.5,x:86.2,y:475.7},0).wait(1).to({rotation:210.1,x:86.8,y:479},0).wait(1).to({rotation:211.7,x:87.4,y:482.5},0).wait(1).to({rotation:213.3,x:88.1,y:486},0).wait(1).to({rotation:215,x:88.8,y:489.7},0).wait(1).to({rotation:216.8,x:89.4,y:493.4},0).wait(1).to({rotation:218.6,x:90.1,y:497.3},0).wait(1).to({rotation:220.4,x:90.9,y:501.3},0).wait(1).to({rotation:222.3,x:91.6,y:505.3},0).wait(1).to({rotation:224.3,x:92.3,y:509.6},0).wait(1).to({rotation:226.3,x:93.2,y:514},0).wait(1).to({rotation:228.4,x:94,y:518.6},0).wait(1).to({rotation:230.6,x:94.8,y:523.2},0).wait(1).to({rotation:232.8,x:95.7,y:528.2},0).wait(1).to({rotation:235.2,x:96.7,y:533.3},0).wait(1).to({rotation:237.6,x:97.6,y:538.6},0).wait(1).to({rotation:240.1,x:98.6,y:544.1},0).wait(1).to({rotation:242.8,x:99.6,y:549.9},0).wait(1).to({rotation:245.5,x:100.8,y:555.9},0).wait(1).to({rotation:248.4,x:101.9,y:562.3},0).wait(1).to({rotation:251.4,x:103.1,y:568.9},0).wait(1).to({rotation:254.6,x:104.4,y:576},0).wait(1).to({rotation:258,x:105.7,y:583.4},0).wait(1).to({rotation:261.6,x:107.1,y:591.4},0).wait(1).to({rotation:265.4,x:108.6,y:599.9},0).wait(1).to({rotation:269.5,x:110.3,y:609},0).wait(1).to({rotation:273.9,x:111.9,y:618.8},0).wait(1).to({rotation:278.7,x:113.8,y:629.6},0).wait(1).to({rotation:284,x:115.8,y:641.4},0).wait(1).to({rotation:289.8,x:118,y:654.6},0).wait(1).to({rotation:296.5,x:120.5,y:669.6},0).wait(1).to({rotation:304.2,x:123.3,y:687.2},0).wait(1).to({rotation:313.7,x:126.6,y:708.9},0).wait(1).to({rotation:326.6,x:131,y:738.2},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,12,29.4,23.1);


(lib.snowflake1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25,21.5,1,1,0,0,0,25,21.5);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32.5,regY:25.2,rotation:4,x:33.5,y:34.6},0).wait(1).to({rotation:7.9,x:34.4,y:43.5},0).wait(1).to({rotation:11.5,x:35.2,y:51.9},0).wait(1).to({rotation:15,x:35.9,y:60},0).wait(1).to({rotation:18.4,x:36.6,y:67.7},0).wait(1).to({rotation:21.6,x:37.3,y:75.1},0).wait(1).to({rotation:24.6,x:37.9,y:82.1},0).wait(1).to({rotation:27.6,x:38.4,y:88.9},0).wait(1).to({rotation:30.5,x:39,y:95.4},0).wait(1).to({rotation:33.2,x:39.5,y:101.7},0).wait(1).to({rotation:35.9,x:40,y:107.8},0).wait(1).to({rotation:38.5,x:40.4,y:113.6},0).wait(1).to({rotation:41,x:40.9,y:119.2},0).wait(1).to({rotation:43.4,x:41.3,y:124.7},0).wait(1).to({rotation:45.8,x:41.7,y:130},0).wait(1).to({rotation:48,x:42.1,y:135.1},0).wait(1).to({rotation:50.3,x:42.5,y:140.1},0).wait(1).to({rotation:52.4,x:42.8,y:144.8},0).wait(1).to({rotation:54.5,x:43.2,y:149.5},0).wait(1).to({rotation:56.6,x:43.5,y:154.1},0).wait(1).to({rotation:58.5,x:43.8,y:158.5},0).wait(1).to({rotation:60.5,x:44.1,y:162.8},0).wait(1).to({rotation:62.4,x:44.4,y:167},0).wait(1).to({rotation:64.2,x:44.8,y:171},0).wait(1).to({rotation:66,x:45,y:175},0).wait(1).to({rotation:67.8,x:45.4,y:178.8},0).wait(1).to({rotation:69.5,x:45.6,y:182.6},0).wait(1).to({rotation:71.2,x:45.9,y:186.2},0).wait(1).to({rotation:72.8,x:46.2,y:189.9},0).wait(1).to({rotation:74.5,x:46.4,y:193.3},0).wait(1).to({rotation:76,x:46.7,y:196.8},0).wait(1).to({rotation:77.6,x:47,y:200.1},0).wait(1).to({rotation:79.1,x:47.2,y:203.4},0).wait(1).to({rotation:80.6,x:47.5,y:206.6},0).wait(1).to({rotation:82,x:47.7,y:209.8},0).wait(1).to({rotation:83.5,x:48,y:212.8},0).wait(1).to({rotation:84.9,x:48.2,y:215.8},0).wait(1).to({rotation:86.2,x:48.5,y:218.8},0).wait(1).to({rotation:87.6,x:48.7,y:221.6},0).wait(1).to({rotation:88.9,x:48.9,y:224.5},0).wait(1).to({rotation:90.2,x:49.1,y:227.3},0).wait(1).to({rotation:91.5,x:49.4,y:230},0).wait(1).to({rotation:92.8,x:49.6,y:232.7},0).wait(1).to({rotation:94,x:49.8,y:235.3},0).wait(1).to({rotation:95.2,x:50.1,y:237.9},0).wait(1).to({rotation:96.4,x:50.3,y:240.4},0).wait(1).to({rotation:97.6,x:50.5,y:242.9},0).wait(1).to({rotation:98.8,x:50.7,y:245.3},0).wait(1).to({rotation:99.9,x:50.9,y:247.7},0).wait(1).to({rotation:101,x:51.2,y:250.2},0).wait(1).to({rotation:102.1,x:51.3,y:252.5},0).wait(1).to({rotation:103.2,x:51.5,y:254.8},0).wait(1).to({rotation:104.3,x:51.8,y:257.1},0).wait(1).to({rotation:105.4,x:52,y:259.3},0).wait(1).to({rotation:106.4,x:52.2,y:261.5},0).wait(1).to({rotation:107.4,x:52.4,y:263.6},0).wait(1).to({rotation:108.5,x:52.6,y:265.8},0).wait(1).to({rotation:109.5,x:52.8,y:267.9},0).wait(1).to({rotation:110.5,x:53.1,y:270},0).wait(1).to({rotation:111.4,x:53.2,y:272},0).wait(1).to({rotation:112.4,x:53.4,y:274},0).wait(1).to({rotation:113.4,x:53.6,y:276},0).wait(1).to({rotation:114.3,x:53.9,y:278},0).wait(1).to({rotation:115.2,x:54.1,y:280},0).wait(1).to({rotation:116.2,x:54.3,y:281.9},0).wait(1).to({rotation:117.1,x:54.5,y:283.8},0).wait(1).to({rotation:118,x:54.7,y:285.6},0).wait(1).to({rotation:118.9,x:54.9,y:287.5},0).wait(1).to({rotation:119.8,x:55.1,y:289.4},0).wait(1).to({rotation:120.6,x:55.3,y:291.2},0).wait(1).to({rotation:121.5,x:55.4,y:293},0).wait(1).to({rotation:122.4,x:55.7,y:294.8},0).wait(1).to({rotation:123.2,x:55.9,y:296.6},0).wait(1).to({rotation:124.1,x:56.1,y:298.3},0).wait(1).to({rotation:124.9,x:56.3,y:300.1},0).wait(1).to({rotation:125.7,x:56.5,y:301.8},0).wait(1).to({rotation:126.6,x:56.7,y:303.5},0).wait(1).to({rotation:127.4,x:56.9,y:305.1},0).wait(1).to({rotation:128.2,x:57.1,y:306.8},0).wait(1).to({rotation:129,x:57.3,y:308.5},0).wait(1).to({rotation:129.8,x:57.5,y:310.1},0).wait(1).to({rotation:130.6,x:57.7,y:311.8},0).wait(1).to({rotation:131.4,x:57.9,y:313.5},0).wait(1).to({rotation:132.2,x:58.1,y:315.1},0).wait(1).to({rotation:133,x:58.3,y:316.7},0).wait(1).to({rotation:133.7,x:58.5,y:318.3},0).wait(1).to({rotation:134.5,x:58.7,y:319.9},0).wait(1).to({rotation:135.3,x:58.9,y:321.4},0).wait(1).to({rotation:136.1,x:59.1,y:323},0).wait(1).to({rotation:136.8,x:59.3,y:324.6},0).wait(1).to({rotation:137.6,x:59.5,y:326.1},0).wait(1).to({rotation:138.3,x:59.7,y:327.7},0).wait(1).to({rotation:139.1,x:59.9,y:329.3},0).wait(1).to({rotation:139.8,x:60.1,y:330.8},0).wait(1).to({rotation:140.6,x:60.3,y:332.4},0).wait(1).to({rotation:141.3,x:60.5,y:333.9},0).wait(1).to({rotation:142.1,x:60.7,y:335.4},0).wait(1).to({rotation:142.8,x:61,y:337},0).wait(1).to({rotation:143.6,x:61.2,y:338.5},0).wait(1).to({rotation:144.3,x:61.3,y:340.1},0).wait(1).to({rotation:145.1,x:61.5,y:341.6},0).wait(1).to({rotation:145.8,x:61.8,y:343.1},0).wait(1).to({rotation:146.6,x:62,y:344.6},0).wait(1).to({rotation:147.3,x:62.2,y:346.1},0).wait(1).to({rotation:148,x:62.4,y:347.6},0).wait(1).to({rotation:148.8,x:62.7,y:349.2},0).wait(1).to({rotation:149.5,x:62.9,y:350.8},0).wait(1).to({rotation:150.3,x:63.1,y:352.2},0).wait(1).to({rotation:151,x:63.3,y:353.8},0).wait(1).to({rotation:151.8,x:63.5,y:355.3},0).wait(1).to({rotation:152.5,x:63.8,y:356.9},0).wait(1).to({rotation:153.3,x:64,y:358.4},0).wait(1).to({rotation:154,x:64.2,y:360},0).wait(1).to({rotation:154.8,x:64.5,y:361.5},0).wait(1).to({rotation:155.6,x:64.7,y:363.1},0).wait(1).to({rotation:156.3,x:65,y:364.6},0).wait(1).to({rotation:157.1,x:65.2,y:366.2},0).wait(1).to({rotation:157.9,x:65.4,y:367.8},0).wait(1).to({rotation:158.6,x:65.7,y:369.4},0).wait(1).to({rotation:159.4,x:65.9,y:371},0).wait(1).to({rotation:160.2,x:66.2,y:372.6},0).wait(1).to({rotation:161,x:66.4,y:374.2},0).wait(1).to({rotation:161.8,x:66.8,y:375.9},0).wait(1).to({rotation:162.6,x:67,y:377.5},0).wait(1).to({rotation:163.4,x:67.2,y:379.2},0).wait(1).to({rotation:164.2,x:67.6,y:380.9},0).wait(1).to({rotation:165,x:67.8,y:382.5},0).wait(1).to({rotation:165.9,x:68.1,y:384.2},0).wait(1).to({rotation:166.7,x:68.3,y:386},0).wait(1).to({rotation:167.5,x:68.6,y:387.7},0).wait(1).to({rotation:168.4,x:69,y:389.4},0).wait(1).to({rotation:169.2,x:69.2,y:391.2},0).wait(1).to({rotation:170.1,x:69.5,y:393},0).wait(1).to({rotation:171,x:69.8,y:394.7},0).wait(1).to({rotation:171.9,x:70.2,y:396.6},0).wait(1).to({rotation:172.8,x:70.4,y:398.4},0).wait(1).to({rotation:173.7,x:70.8,y:400.3},0).wait(1).to({rotation:174.6,x:71.1,y:402.1},0).wait(1).to({rotation:175.5,x:71.4,y:404.1},0).wait(1).to({rotation:176.4,x:71.8,y:406},0).wait(1).to({rotation:177.4,x:72.2,y:408},0).wait(1).to({rotation:178.3,x:72.5,y:409.9},0).wait(1).to({rotation:179.3,x:72.9,y:412},0).wait(1).to({rotation:180.3,x:73.3,y:414},0).wait(1).to({rotation:181.3,x:73.6,y:416},0).wait(1).to({rotation:182.3,x:74,y:418.2},0).wait(1).to({rotation:183.4,x:74.4,y:420.3},0).wait(1).to({rotation:184.4,x:74.8,y:422.4},0).wait(1).to({rotation:185.5,x:75.2,y:424.7},0).wait(1).to({rotation:186.6,x:75.6,y:426.9},0).wait(1).to({rotation:187.7,x:76.1,y:429.2},0).wait(1).to({rotation:188.8,x:76.5,y:431.6},0).wait(1).to({rotation:189.9,x:77,y:433.9},0).wait(1).to({rotation:191.1,x:77.4,y:436.3},0).wait(1).to({rotation:192.3,x:77.9,y:438.8},0).wait(1).to({rotation:193.5,x:78.3,y:441.3},0).wait(1).to({rotation:194.7,x:78.8,y:443.8},0).wait(1).to({rotation:195.9,x:79.3,y:446.4},0).wait(1).to({rotation:197.2,x:79.9,y:449.2},0).wait(1).to({rotation:198.5,x:80.4,y:451.8},0).wait(1).to({rotation:199.9,x:81,y:454.6},0).wait(1).to({rotation:201.2,x:81.5,y:457.5},0).wait(1).to({rotation:202.6,x:82.1,y:460.4},0).wait(1).to({rotation:204,x:82.7,y:463.4},0).wait(1).to({rotation:205.5,x:83.3,y:466.5},0).wait(1).to({rotation:207,x:84,y:469.6},0).wait(1).to({rotation:208.5,x:84.6,y:472.9},0).wait(1).to({rotation:210.1,x:85.3,y:476.2},0).wait(1).to({rotation:211.7,x:86,y:479.6},0).wait(1).to({rotation:213.3,x:86.7,y:483.1},0).wait(1).to({rotation:215,x:87.4,y:486.7},0).wait(1).to({rotation:216.8,x:88.2,y:490.4},0).wait(1).to({rotation:218.6,x:89,y:494.2},0).wait(1).to({rotation:220.4,x:89.8,y:498.2},0).wait(1).to({rotation:222.3,x:90.6,y:502.2},0).wait(1).to({rotation:224.3,x:91.5,y:506.4},0).wait(1).to({rotation:226.3,x:92.4,y:510.8},0).wait(1).to({rotation:228.4,x:93.4,y:515.3},0).wait(1).to({rotation:230.6,x:94.3,y:520},0).wait(1).to({rotation:232.8,x:95.4,y:524.9},0).wait(1).to({rotation:235.2,x:96.5,y:530},0).wait(1).to({rotation:237.6,x:97.5,y:535.3},0).wait(1).to({rotation:240.1,x:98.7,y:540.8},0).wait(1).to({rotation:242.8,x:99.8,y:546.6},0).wait(1).to({rotation:245.5,x:101.2,y:552.6},0).wait(1).to({rotation:248.4,x:102.5,y:559},0).wait(1).to({rotation:251.4,x:103.8,y:565.8},0).wait(1).to({rotation:254.6,x:105.3,y:572.8},0).wait(1).to({rotation:258,x:106.8,y:580.3},0).wait(1).to({rotation:261.6,x:108.4,y:588.4},0).wait(1).to({rotation:265.4,x:110.1,y:597},0).wait(1).to({rotation:269.5,x:111.9,y:606.2},0).wait(1).to({rotation:273.9,x:113.8,y:616.2},0).wait(1).to({rotation:278.7,x:115.9,y:627},0).wait(1).to({rotation:284,x:118.2,y:639.1},0).wait(1).to({rotation:289.8,x:120.6,y:652.5},0).wait(1).to({rotation:296.5,x:123.3,y:667.9},0).wait(1).to({rotation:304.2,x:126.3,y:685.8},0).wait(1).to({rotation:313.7,x:129.8,y:708},0).wait(1).to({rotation:326.6,x:134.2,y:738.1},0).wait(1).to({regX:25,regY:21.5,rotation:360,x:136.3,y:812.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,6,49,38.5);


(lib.SNOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.snowflake2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(59.3,-239.1,1,1,0,0,0,25,25.5);

	this.instance_1 = new lib.snowflake2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.6,-169.5,1,1,0,0,180,25,25.5);

	this.instance_2 = new lib.snowflake2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.5,-224.4,1,1,0,0,0,25,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},97).wait(187));

	// Layer 5
	this.instance_3 = new lib.snowflake1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.8,-222,0.49,0.49,0,0,180,24.9,21.4);

	this.instance_4 = new lib.snowflake1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(174,-213.5,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_5 = new lib.snowflake1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-14.7,-275.5,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_6 = new lib.snowflake1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(119.5,-159.8,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_7 = new lib.snowflake1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-47.4,-168.5,0.49,0.49,0,0,180,24.9,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},48).wait(236));

	// Layer 4
	this.instance_8 = new lib.snowflake2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50.4,-76.3,1,1,0,0,180,25,25.5);

	this.instance_9 = new lib.snowflake2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(46.9,-138.7,1,1,0,0,0,25,25.5);

	this.instance_10 = new lib.snowflake2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(104.7,-70.9,1,1,0,0,0,25,25.5);

	this.instance_11 = new lib.snowflake2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-14.8,-179.2,1,1,0,0,0,25,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},54).wait(230));

	// Layer 3
	this.instance_12 = new lib.snowflake2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-70.5,66.6,1,1,0,0,180,25,25.5);

	this.instance_13 = new lib.snowflake2("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(126.6,126.6,1,1,0,0,0,25,25.5);

	this.instance_14 = new lib.snowflake2("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(63.6,22.6,1,1,0,0,0,25,25.5);

	this.instance_15 = new lib.snowflake2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-60,-76.5,1,1,0,0,0,25,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(284));

	// Layer 2
	this.instance_16 = new lib.snowflake1copy("synched",19);
	this.instance_16.parent = this;
	this.instance_16.setTransform(29.8,-230.4,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_17 = new lib.snowflake1copy("synched",19);
	this.instance_17.parent = this;
	this.instance_17.setTransform(176.2,-136.8,0.49,0.49,0,0,180,24.9,21.4);

	this.instance_18 = new lib.snowflake1copy("synched",19);
	this.instance_18.parent = this;
	this.instance_18.setTransform(91.2,-19.3,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_19 = new lib.snowflake1copy("synched",19);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-27.5,-4.3,0.49,0.49,0,0,180,24.9,21.4);

	this.instance_20 = new lib.snowflake1copy("synched",19);
	this.instance_20.parent = this;
	this.instance_20.setTransform(145.2,-215.2,0.49,0.49,0,0,180,24.9,21.4);

	this.instance_21 = new lib.snowflake1copy("synched",19);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-34.4,-154.5,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_22 = new lib.snowflake1("synched",44);
	this.instance_22.parent = this;
	this.instance_22.setTransform(51.3,-222,0.49,0.49,0,0,180,24.9,21.4);

	this.instance_23 = new lib.snowflake1("synched",79);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-10.6,-142.1,0.49,0.49,0,0,0,24.9,21.4);

	this.instance_24 = new lib.snowflake1("synched",19);
	this.instance_24.parent = this;
	this.instance_24.setTransform(113,-99.4,0.49,0.49,0,0,180,24.9,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16}]}).wait(284));

	// Layer 1
	this.instance_25 = new lib.snowflake1("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-101.9,-163.4,0.49,0.49,0,0,0,24.9,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(284));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-178.3,286.2,244.3);


(lib.reindeer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.legkick("synched",3);
	this.instance.parent = this;
	this.instance.setTransform(95.5,51.3,1,1,0,0,0,106.4,61.2);

	this.instance_1 = new lib.legkick("synched",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.1,53.6,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(213));

	// Layer 5
	this.instance_2 = new lib.frontLeg("synched",7);
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.1,55.7,1,1,0,0,0,106.4,61.2);

	this.instance_3 = new lib.frontLeg("synched",7);
	this.instance_3.parent = this;
	this.instance_3.setTransform(121.1,57.2,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(213));

	// Layer 7
	this.instance_4 = new lib.frontLeg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(145,48.3,1,1,0,0,0,106.4,61.2);

	this.instance_5 = new lib.frontLeg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.4,48.7,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(213));

	// Layer 9
	this.instance_6 = new lib.frontLeg("synched",3);
	this.instance_6.parent = this;
	this.instance_6.setTransform(161.8,30,1,1,0,0,0,106.4,61.2);

	this.instance_7 = new lib.frontLeg("synched",3);
	this.instance_7.parent = this;
	this.instance_7.setTransform(163.6,29,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(213));

	// Layer 8
	this.instance_8 = new lib.legkick("synched",12);
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.4,32.8,1,1,0,0,0,106.4,61.2);

	this.instance_9 = new lib.legkick("synched",12);
	this.instance_9.parent = this;
	this.instance_9.setTransform(156.9,33.1,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(213));

	// Layer 6
	this.instance_10 = new lib.legkick("synched",10);
	this.instance_10.parent = this;
	this.instance_10.setTransform(135.8,49.4,1,1,0,0,0,106.4,61.2);

	this.instance_11 = new lib.legkick("synched",10);
	this.instance_11.parent = this;
	this.instance_11.setTransform(138.4,51.8,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(213));

	// Layer 2
	this.instance_12 = new lib.legkick("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(104.7,58.3,1,1,0,0,0,106.4,61.2);

	this.instance_13 = new lib.legkick("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(107.4,61.1,1,1,0,0,0,106.4,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(213));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjxDqQgHACgHgBQgLgDgHgKQgVgCgQgVQgRgXAJgTQgHgEgYgBQgygCgUgdQgHgLgBgNQAAgNAIgJQADgDARgKIAPgKQAJgHAHgCQALgFAaABIBZAEIAGgBQACgCAAgEIgBgGQACgGgBgEQgBgFgIgFQgUgKgGgJQgFgJAAgKQAAgLAFgIQAIgMAUgHQAbgKAcABQANABAHAEQAPAHABARQABAJgHAQQgIASgBAGQAKAGAIAJQALACALgMIAKgIIAKgHQALgGANAFQAOAFAFAKQAHARgNAfQATACATgDIAKgBQAEgNAKgKQAIgKANgEQAXgIAVAQQANAJAFABQAGACAJgCQAOgBAMgDIAUgHIAGgCQgGAAgGgDIgJgFQgGgEgDgDIgKgNQgJgKgDgGQgFgIACgKQABgJAGgHQAHgGAJgDQAJgCAJADIAKAGIAHAHIAFAIQACAEAGAFIAIAIQAGAHABAJQAKgFAPAAQAMAAAGACQALADAFAHIACACIACgBQAQgJAJgBQAJAAAJAFQAIAEAEAIQAEAIgCAKQgCAJgHAHIgTAMQgJALgGAEQgGAFgHABQgQAEgOgCQgGgCgFgDIgDAEIgQAQIgOAQQgIAIgNAHQgQAJgIADQgLAEgMACQgPAEgIgBIgPgGQgFgBgLAAQgmgBgPgTIgYACQgGATgRAFQgLACgFACIgQAMQgNAMgCAJQgCAJgYAOIglAWQgLAHgZAHQgLACgKAAQgKAAgHgDgAD9grIgCgBIgLABQgbADgVgMQgOgIgFgNQgHgUAVgaQATgaAVgBIAPgBQADgBAHgHQAJgLAFgKQADgFAAgEIgEgLQgDgJADgKQADgKAJgFQAQgLAUAJQAGADAQAOQAMAKAbARIAHACQACABAGgDQAJgCAIACQAJADAGAGQAHAJgBAOQgBANgIAJQgNARgcAIQgTAFgOgCIgIAAQgCABgEAHQgIARgKAKQgIAHgPAHIgDAFQgGAHgJACIgIABQgFAAgFgBg");
	mask.setTransform(133.9,35.7);

	// Layer 1
	this.instance_14 = new lib.bb_reindeer();
	this.instance_14.parent = this;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.1,12,85.5,54.8);


// stage content:
(lib._300x250_flyoverxmas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Symbol4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-97.4,175.5,1,1,0,0,0,90.5,40.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({regX:46.3,regY:46,x:-132.3,y:179.4,alpha:0.042},0).wait(1).to({x:-120.3,y:177.4,alpha:0.095},0).wait(1).to({x:-104.2,y:174.6,alpha:0.168},0).wait(1).to({x:-81.5,y:170.8,alpha:0.27},0).wait(1).to({x:-50.8,y:165.5,alpha:0.407},0).wait(1).to({x:-20,y:160.3,alpha:0.545},0).wait(1).to({x:2.7,y:156.4,alpha:0.647},0).wait(1).to({x:18.8,y:153.7,alpha:0.719},0).wait(1).to({x:30.8,y:151.6,alpha:0.773},0).wait(1).to({x:40.1,y:150,alpha:0.815},0).wait(1).to({x:47.4,y:148.8,alpha:0.848},0).wait(1).to({x:53.5,y:147.7,alpha:0.875},0).wait(1).to({x:58.5,y:146.9,alpha:0.898},0).wait(1).to({x:62.7,y:146.2,alpha:0.917},0).wait(1).to({x:66.3,y:145.6,alpha:0.933},0).wait(1).to({x:69.3,y:145,alpha:0.946},0).wait(1).to({x:71.8,y:144.6,alpha:0.957},0).wait(1).to({x:73.9,y:144.3,alpha:0.967},0).wait(1).to({x:75.7,y:144,alpha:0.975},0).wait(1).to({x:77.2,y:143.7,alpha:0.981},0).wait(1).to({x:78.4,y:143.5,alpha:0.987},0).wait(1).to({x:79.3,y:143.3,alpha:0.991},0).wait(1).to({x:80.1,y:143.2,alpha:0.995},0).wait(1).to({x:80.6,y:143.1,alpha:0.997},0).wait(1).to({x:81,y:143,alpha:0.999},0).wait(1).to({x:81.2,alpha:1},0).wait(1).to({regX:90.5,regY:40.5,x:125.5,y:137.5},0).to({x:151.5,y:127.5},196).wait(1));

	// Layer 5
	this.instance_1 = new lib.reindeer("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-100.4,174.5,1,1,0,0,0,90.5,40.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({regX:131.9,regY:39.6,x:-49.7,y:172,alpha:0.042,startPosition:1},0).wait(1).to({x:-37.7,y:169.9,alpha:0.095,startPosition:2},0).wait(1).to({x:-21.6,y:167.1,alpha:0.168,startPosition:3},0).wait(1).to({x:1.1,y:163.1,alpha:0.27,startPosition:4},0).wait(1).to({x:31.8,y:157.7,alpha:0.407,startPosition:5},0).wait(1).to({x:62.6,y:152.3,alpha:0.545,startPosition:6},0).wait(1).to({x:85.3,y:148.4,alpha:0.647,startPosition:7},0).wait(1).to({x:101.4,y:145.5,alpha:0.719,startPosition:8},0).wait(1).to({x:113.4,y:143.4,alpha:0.773,startPosition:9},0).wait(1).to({x:122.7,y:141.8,alpha:0.815,startPosition:10},0).wait(1).to({x:130.1,y:140.5,alpha:0.848,startPosition:11},0).wait(1).to({x:136.1,y:139.5,alpha:0.875,startPosition:12},0).wait(1).to({x:141.1,y:138.6,alpha:0.898,startPosition:13},0).wait(1).to({x:145.3,y:137.8,alpha:0.917,startPosition:14},0).wait(1).to({x:148.9,y:137.2,alpha:0.933,startPosition:15},0).wait(1).to({x:151.9,y:136.7,alpha:0.946,startPosition:16},0).wait(1).to({x:154.4,y:136.3,alpha:0.957,startPosition:17},0).wait(1).to({x:156.5,y:135.9,alpha:0.967,startPosition:18},0).wait(1).to({x:158.3,y:135.6,alpha:0.975,startPosition:19},0).wait(1).to({x:159.8,y:135.3,alpha:0.981,startPosition:20},0).wait(1).to({x:161,y:135.1,alpha:0.987,startPosition:21},0).wait(1).to({x:161.9,y:134.9,alpha:0.991,startPosition:22},0).wait(1).to({x:162.7,y:134.8,alpha:0.995,startPosition:23},0).wait(1).to({x:163.2,y:134.7,alpha:0.997,startPosition:24},0).wait(1).to({x:163.6,alpha:0.999,startPosition:25},0).wait(1).to({x:163.8,y:134.6,alpha:1,startPosition:26},0).wait(1).to({regX:90.5,regY:40.5,x:122.5,y:135.5,startPosition:9},0).to({x:148.5,y:126.5,startPosition:1},196).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,204,1,1,0,0,0,83.5,40);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({alpha:1},27,cjs.Ease.get(0.1)).wait(191));

	// Layer 3
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153,77.3,1,1,0,0,0,125.5,13);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({alpha:1},16,cjs.Ease.get(0.98)).wait(212));

	// Layer 2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(152.2,59.3,2.986,2.986,0,0,0,128.6,28);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:128.4,regY:29.6,scaleX:2.85,scaleY:2.85,x:151.6,y:62.6,alpha:0.067},0).wait(1).to({scaleX:2.65,scaleY:2.65,x:151.7,y:60.3,alpha:0.168},0).wait(1).to({scaleX:2.32,scaleY:2.32,y:56.4,alpha:0.335},0).wait(1).to({scaleX:1.9,scaleY:1.9,y:51.4,alpha:0.545},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:151.8,y:48.1,alpha:0.686},0).wait(1).to({scaleX:1.45,scaleY:1.45,y:46.1,alpha:0.773},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:151.9,y:44.7,alpha:0.832},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:43.8,alpha:0.875},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:43,alpha:0.908},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:151.8,y:42.4,alpha:0.933},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:41.9,alpha:0.952},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:41.6,alpha:0.967},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:151.9,y:41.4,alpha:0.978},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:151.8,y:41.1,alpha:0.987},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:151.9,y:41,alpha:0.993},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:151.8,y:40.9,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,x:151.9,alpha:0.999},0).wait(1).to({regX:128.7,regY:28,scaleX:1,scaleY:1,x:152.1,y:39.3,alpha:1},0).wait(221));

	// snow
	this.instance_5 = new lib.SNOW("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(144,166.5,1,1,0,0,0,25,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(239));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D82532","#AC232E","#B1222D"],[0,0.62,1],-2.2,-121,2.2,123).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,91.7,710.4,283.3);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_flyoverxmas_atlas_.png", id:"300x250_flyoverxmas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;