(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_advil_lines_atlas_", frames: [[220,602,119,73],[0,0,300,600],[0,602,218,138],[220,677,104,30],[0,742,300,27],[220,709,113,8]]}
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



(lib.bb_advillogo = function() {
	this.spriteSheet = ss["300x600_advil_lines_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_bg = function() {
	this.spriteSheet = ss["300x600_advil_lines_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_box = function() {
	this.spriteSheet = ss["300x600_advil_lines_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_cta = function() {
	this.spriteSheet = ss["300x600_advil_lines_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_legal = function() {
	this.spriteSheet = ss["300x600_advil_lines_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bb_line = function() {
	this.spriteSheet = ss["300x600_advil_lines_atlas_"];
	this.gotoAndStop(5);
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
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(56.5,4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-4,113,8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(56.5,4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-4,113,8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AhlBvIAujdICdAAIgJApIhrAAIgLAzIBdAAIgIAlIhdAAIgTBcg");
	this.shape.setTransform(198.1,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhrBvIAvjdICnAAIgIApIh3AAIgKAwIBuAAIgIAlIhuAAIgLA2IB5AAIgJApg");
	this.shape_1.setTransform(177,56.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgvBvIAvjdIAwAAIgvDdg");
	this.shape_2.setTransform(160.9,56.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AhRBvIAujdIAwAAIglC0IBqAAIgJApg");
	this.shape_3.setTransform(145.6,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhqBvIAujdICnAAIgHApIh4AAIgKAwIBuAAIgHAlIhvAAIgLA2IB5AAIgJApg");
	this.shape_4.setTransform(126.5,56.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAjBvIgCgIIAAgHIACgXIABgWQAAgIgDgFQgCgFgEgEQgFgDgFgBIgOgBIgtAAIgSBXIgwAAIAvjdIBoAAQAPAAAMADQANADAIAHQAJAHAEALQAFALAAAQQAAALgEALQgDAKgIAIQgGAIgKAEQgIAFgMACIAAABQAHACAEADQAFAEACAGQAFAKAAAOIAAARIgBAVIAAAOIADAMgAgigJIAsAAQAKAAAJgCQAJgCAHgFQAHgEAEgHQAFgGgBgJQAAgKgDgFQgCgFgGgDQgEgDgHgBIgOgBIgtAAg");
	this.shape_5.setTransform(103.3,56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AAVBvIg8ibIAAAAIgfCbIguAAIAvjdIAyAAIA7CdIAAAAIAgidIAtAAIgvDdg");
	this.shape_6.setTransform(70.5,56.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgvBvIAvjdIAwAAIgvDdg");
	this.shape_7.setTransform(53.4,56.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AA8BvIgHgyIhSAAIgcAyIgzAAICCjdIAyAAIAlDdgAgJAZIA6AAIgLhXIgBAAg");
	this.shape_8.setTransform(35.1,56.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AhpBvIAujdIBYAAQARAAAOAEQAOADAKAHQAKAIAGAMQAGANAAASQAAAJgCAIQgCAIgDAIQgHANgMAKQgMAKgQAFQgPAFgRAAIg8AAIgQBQgAgggFIAxAAQAJAAAIgDQAHgCAFgFQALgJAAgUQAAgIgDgGQgDgFgFgDQgFgDgGgBIgMgCIgpAAg");
	this.shape_9.setTransform(15.4,56.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AhABvIAli0IhFAAIAJgpIC4AAIgJApIhDAAIgkC0g");
	this.shape_10.setTransform(201.7,21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AhJBhQgYgTAAgpIAuAAQAAAMAEAIQADAIAHAFQAGAEAJACQAJACALAAQAGAAAHgCQAIgCAGgDQAGgEAEgGQAEgGgBgIQAAgIgEgFQgFgFgIgEIgSgHIgUgFIgUgIQgKgEgHgGQgJgHgFgKQgEgKAAgOQgBgTAJgNQAHgNAMgIQANgIAPgEQAQgEAQAAQAQAAAPAEQAPAEAMAJQALAIAHAOQAGANABATIguAAQAAgJgEgGQgDgHgEgEQgGgEgIgBIgQgCIgMABQgHACgGADQgFADgEAGQgDAFAAAIQAAAIAGAFQAGAFAIAEIARAGIAPADIAYAIQAKAEAJAGQAHAIAEAKQAFAKAAAPQAAAKgCAIQgCAJgEAHQgJAOgNAIQgNAJgPAEQgQAEgQAAQguAAgWgTg");
	this.shape_11.setTransform(179.2,21.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AA8BvIgHgyIhSAAIgcAyIgzAAICCjdIAyAAIAlDdgAgJAZIA6AAIgLhXIgBAAg");
	this.shape_12.setTransform(155.6,21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AhlBvIAujdICdAAIgJApIhrAAIgLAzIBdAAIgIAlIhdAAIgTBcg");
	this.shape_13.setTransform(137.8,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AgyATIAIglIBcAAIgHAlg");
	this.shape_14.setTransform(120,23.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AhtBvIAujdIBPAAQAvAAAYAXQALALAGAQQAGAQAAAVQAAAbgIAZQgEANgGAKQgGALgIAJQgQASgYAKQgYALgfAAgAg0BGIAlAAQASAAAOgHQAPgHAKgMQAJgLAFgQQAFgPAAgRQAAgMgCgKQgDgKgGgHQgFgHgKgEQgJgEgNAAIgjAAg");
	this.shape_15.setTransform(101.1,21.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF200").s().p("AgvBvIAvjdIAwAAIgvDdg");
	this.shape_16.setTransform(84.7,21.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF200").s().p("Ag2BuQgQgEgMgHQgMgIgIgMQgEgHgCgHQgBgIAAgJIABgRIADgQIAbh/IAxAAIgbB/IgCAGIgBAIIgBAIIgBAGIACAJQACAFAEAFQAFAEAIAEQAIADANAAQAPAAAIgEQAJgEAGgHQAGgHADgKIAGgXIAciCIAwAAIgbCAQgFAXgHATQgIASgMAMQgNANgSAGQgJADgLACIgWABQgQAAgQgDg");
	this.shape_17.setTransform(68.3,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF200").s().p("AAmBgQgLAFgMADQgMACgNAAQgYAAgSgGQgSgGgNgNQgZgZAAgvQgBgaAJgZQAIgYAQgSQAPgTAXgKQAXgLAaAAQAPAAAaAGQASAGANAMQANAMAGASQAIARAAAYQgBAegKAdQgLAcgVATIAYAbIgaAVgAgFhRQgIACgGAEQgOAJgJANQgJAOgEAQQgFARAAAPQAAALADAKQADALAGAHQAGAIAJAFQAKAFAOAAQAJAAAJgEIgRgTIAZgWIAUAWQAMgOAGgTQAGgRAAgTQAAgMgDgKQgCgLgHgHQgFgIgJgFQgKgEgOAAQgJAAgHACg");
	this.shape_18.setTransform(43.1,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF200").s().p("AgvBvIAvjdIAwAAIgvDdg");
	this.shape_19.setTransform(25.5,21.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF200").s().p("AhRBvIAujdIAwAAIglC0IBqAAIgJApg");
	this.shape_20.setTransform(10.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,212.3,76), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_legal();
	this.instance.parent = this;
	this.instance.setTransform(-2,330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-2,330,300,27), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_advillogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,119,73), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_cta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,104,30), null);


(lib.Symbol6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("Ah+DjIA4kJIg1AAIANg8IA1AAIAOg3QAHgYAOgQQANgQAVgJQAVgIAkAAIAdACIAdADIgNBBIgPgCIgOAAQgSAAgIAEQgKAEgEAIIgIASIgFAaIA/AAIgNA8IhAAAIg3EJg");
	this.shape.setTransform(204.6,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("Ah+DjIA4kJIg1AAIANg8IA1AAIAOg3QAHgYAOgQQANgQAUgJQAWgIAkAAIAdACIAdADIgNBBIgPgCIgOAAQgSAAgIAEQgKAEgEAIIgIASIgFAaIA/AAIgNA8IhAAAIg3EJg");
	this.shape_1.setTransform(182.4,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("Ah/CIQgpgjgBhFQAAgpANglIAQgjIAWgeQAYgcAjgQQARgHAUgEQATgFAVAAQAhAAAcAJQAdAIAUARQAUARAKAaQAMAaAAAkQgFA2gJAZQgMAlgZAcQgYAbgjARQgRAHgVAEQgTAEgWAAQhEABgogkgAgbhaQgRAOgMAUQgLAVgGAXQgGAWAAAWQAAAOAEANQAFANAIALQAIAJAMAGQAMAHAPAAQAZgBASgNQARgNAMgVQAMgUAFgYQAGgYAAgUQAAgQgEgOQgDgNgIgJQgHgLgMgEQgNgFgTAAQgWAAgTANg");
	this.shape_2.setTransform(148.8,58);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("Ag4EJIAKg0QgdgEgVgKQgWgKgPgSQgOgRgHgbQgHgaAAgkIBQAAQgBAUADAOQADAOAHAKQANARAXAEIAXh3IgGgDIgpgPQgUgHgOgNQgOgNgJgTQgIgTAAgdQAAggANgYQANgXAWgQQAWgPAcgIQAcgHAeAAIACAAIAJguIAcAAIgKAyQAWAFATAKQASAJAOAQQAOAQAHAWQAHAUgDAcIhPAAQABgYgKgNQgJgNgPgHIgTBmIAqAQQAUAHAQANQAPANAJATQAJAUAAAeQAAAlgOAbQgOAagXARQgXARgcAIQgdAHgcABIgKAygAgFCTIAWgDQAMgEAKgGQAKgIAGgLQAHgMAAgQQAAgMgFgJQgEgIgGgGIgPgLIgQgHgAgCiTIgUAKQgJAFgGAKQgFAJAAAOQAAATANALQAOALATAGIAShiIgEAAg");
	this.shape_3.setTransform(47.7,51.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AiXFfQgwgQgfggQg+hAAHiAICIAAQgEAgAGAZQAGAZAOATQAdAmBAAAQA5AAAngiQAoghAAg+QAAgugdgVQgdgUgqAAIgzAAIAThkIAqAAIAwgEQAXgEAUgLQAUgLAMgSQANgSAAgcQAAgYgIgQQgIgQgOgLQgMgLgSgFIglgFQg8AAgeAeQgfAegNA9IiJAAQAQh0BIg+QAlgfAugPQAvgPA3AAQAqAAAqAJQAqAKAhAWQAhAVAUAjQAVAkAAA0QAAAfgJAbQgKAbgSAWQglArg7AMIAAACQAbAJATAMQAUANALATQALASAFAXQAGAWAAAbQAAAggGAbQgGAbgLAWQgYAugnAdQgoAdg1APQg0AOg7AAQhBAAgwgQg");
	this.shape_4.setTransform(92.3,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy2, new cjs.Rectangle(29.1,0,185.9,124.4), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AgSA9QgKgDgIgEQgIgFgFgIQgFgIAAgMIAfAAQAAAFACAEQACAEAEACQADACAFABIAIACIAHgBIAHgDQADgBACgDQACgDAAgEQAAgIgJgDQgKgEgRgDIgOgFQgGgCgGgCQgFgEgDgFQgDgGAAgIQAAgLAEgIQAFgGAHgFQAHgEAKgCQAJgBAJgBQAJABAJABQAJACAHAFQAIAEAEAHQAFAIABAKIgfAAQgBgJgGgDQgHgEgHAAIgHABIgFABIgFADQgCACAAAEQAAAFAEADIAIAEIALADIANADIAOAEQAHACAFAEQAGADADAGQADAFAAAIQAAAMgFAIQgEAIgIAFQgIAFgJACQgKABgKABQgKgBgJgBg");
	this.shape.setTransform(181.7,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_1.setTransform(171.6,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgXA6QgLgFgIgIQgIgIgEgLQgEgMAAgOQAAgMAEgMQAFgLAIgJQAIgIALgEQALgGANAAQAPAAALAHQAGACAEAEIAJAJQAHAKADAMQADANgBANIhUAAQAAAIACAFQACAHAEADQAHAHANAAQAKAAAHgFQAHgFACgFIAcAAQgDAKgFAIQgGAIgHAFQgOAJgUAAQgNgBgMgEgAgLgjIgJAHQgDAEgBAFIgBAIIA0AAQgDgNgFgGQgDgEgFgCQgEgBgGAAQgHAAgFACg");
	this.shape_2.setTransform(161,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgdBPQgHgDgHgEIgLgLQgKgLgGgQQgFgPAAgSQAAgSAFgPQADgIAEgHIAJgNIALgKIAOgIQAPgHASAAQANAAAMAEQAMAEAJAHQAKAHAGALQAGALABAOIgiAAQgDgOgKgHQgJgHgNAAQgLAAgJAFQgIAFgFAIQgGAIgCAKQgCAKAAAKQAAAKACAKQACAKAGAIQAFAHAIAFQAJAFALAAQAJAAAHgCQAHgDAFgEQAKgJABgSIgkAAIAAgaIBFAAIAABYIgXAAIgEgSQgJAMgMAFQgMAFgMAAQgSAAgPgHg");
	this.shape_3.setTransform(144.5,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgiAOIAAgbIBFAAIAAAbg");
	this.shape_4.setTransform(130.3,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_5.setTransform(121.7,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AghA5QgIgDgFgGQgFgHgCgJQgCgJAAgLIAAhIIAhAAIAABCIABANQABAGACADQAFAIAMAAQAMgBAGgHQAGgJAAgRIAAg+IAhAAIAAB2IgfAAIAAgRIgBAAIgHAJIgJAGQgJAFgKAAQgNAAgJgEg");
	this.shape_6.setTransform(111,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AAbBSIAAg5IAAAAQgFAKgLAEQgKAEgKAAQgJAAgIgDQgJgDgIgHQgHgHgFgMQgFgLAAgRQAAgNAEgLQADgMAHgIQAGgJAKgGIALgEIANgBQAKAAAKAEQAJAFAGAJIAAAAIAAgPIAgAAIAACggAgLg1QgGADgDAGQgEAFgCAHIgBAOQAAAHABAHQACAGADAFQADAFAGAEQAFADAHAAQAJAAAFgDQAFgDAEgGQADgFABgFQACgHAAgIQAAgHgCgGQgBgHgDgGQgDgFgGgEQgFgDgIAAQgHAAgFADg");
	this.shape_7.setTransform(95.9,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_8.setTransform(85.2,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("Ag5BSIAAijIAkAAIAACFIBPAAIAAAeg");
	this.shape_9.setTransform(75,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_10.setTransform(56.3,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_11.setTransform(49.4,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgRA8Igph3IAjAAIAYBRIAAAAIAZhRIAhAAIgpB3g");
	this.shape_12.setTransform(39.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AgdBOQgLgFgGgIQgHgKgDgLQgEgMAAgMQAAgMAEgKQADgMAHgIQAGgIAKgFIALgFIAMgBQAJABAKAEQAKAEAFAJIAAAAIAAg8IAiAAIAACkIggAAIAAgQIAAAAQgGAKgJAFQgKAEgKAAQgOAAgJgGgAgLgNQgHAEgCAEQgEAFgCAHQgBAGAAAIQAAAHABAHQACAGAEAGQADAGAGADQAFADAGAAQAJAAAFgDQAGgEADgFQADgFABgHIACgOQAAgHgCgIQgBgGgDgFQgDgEgGgEQgFgDgJAAQgGAAgFADg");
	this.shape_13.setTransform(25.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AArBSIgMglIg9AAIgNAlIgkAAIA+ijIAkAAIA9CjgAgUASIApAAIgVg7IAAAAg");
	this.shape_14.setTransform(9.6,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(-0.4,0,191.4,31.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AASBLIgOgBQgFgCgFgDQgFgCgDgGQgDgFAAgIIAAhDIgSAAIAAgUIASAAIAAgjIAeAAIAAAjIAYAAIAAAUIgYAAIAAA4QABAIACADQACACAJAAIAEAAIAGAAIAAAYIgJABg");
	this.shape.setTransform(110.4,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgWA4QgLgEgHgIQgIgJgEgLQgEgKAAgNQAAgMAEgMQAEgKAIgJQAIgIALgEQAKgFAMAAQAPAAALAGQAFACAEAEQAFAEADAFQAHAKADAMQADAMgBAMIhRAAQABAHACAGQACAGADACQAHAIAMAAQAKgBAHgEQAGgFACgFIAbAAQgDAKgFAHQgFAIgHAEQgNAJgUAAQgMAAgLgEgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgCgDgFgBQgEgCgGAAQgGAAgFACg");
	this.shape_1.setTransform(99.3,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgbBMIgOgHQgGgFgEgFQgLgLgFgPQgFgPAAgRQAAgRAFgPIAHgOQAEgHAFgFQAEgGAGgEIAOgIQAOgGARAAQAMAAAMAEQALADAJAHQAJAHAGALQAGAKACANIghAAQgEgNgIgGQgJgHgNAAQgKAAgJAEQgIAFgFAIQgFAHgCAKQgCAKgBAJQABAKACAJQACAJAFAIQAFAHAIAFQAJAEAKAAQAIAAAIgCQAGgCAEgEQAKgJABgQIgjAAIAAgZIBDAAIAABUIgXAAIgDgSQgJAMgLAFQgLAEgMAAQgRAAgOgGg");
	this.shape_2.setTransform(83.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(73.3,0,44.1,30.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(129,8,1.142,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,129,8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(8,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,8,113), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(8,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,113);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(113,8,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,138);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(43.6,319,1,1,0,0,0,52,15);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191.5,322.1,1,1,0,0,0,59.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-8.4,285.6,259.4,73), null);


// stage content:
(lib._300x600_advil_lines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(148,343.7,0.1,0.1,0,0,0,106.5,38);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).wait(1).to({regX:106.6,regY:39.9,scaleX:0.2,scaleY:0.2,y:344.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:344.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:345},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:345.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:148.1,y:345.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:148,y:345.5},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:345.6},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,x:148.1},0).wait(1).to({regX:106.2,regY:38,scaleX:1,scaleY:1,x:148,y:343.7},0).wait(7));

	// Layer 11
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151,236.5,1,1,0,0,0,150,13.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({alpha:1},10).wait(2));

	// Layer 1
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158,194.5,1,1,0,0,0,122,36.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({_off:false},0).to({alpha:1},10).wait(12));

	// Layer 6
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(137.5,477.3,0.478,0.478,0,0,0,80.9,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({regX:109,regY:69,scaleX:0.48,scaleY:0.48,x:150.9,y:487},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:484.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:480.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,y:472.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:460.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:150.8,y:442.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:414.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:150.7,y:370.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:150.6,y:320},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:150.5,y:283.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:259.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:150.4,y:244.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:234.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:227.6},0).wait(1).to({scaleX:1,scaleY:1,y:223.5},0).wait(1).to({scaleX:1,scaleY:1,y:221.4},0).wait(1).to({regX:80.5,regY:47,scaleX:1,scaleY:1,x:122.3,y:199},0).wait(21));

	// Layer 5
	this.instance_4 = new lib.Symbol6copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(122.6,160.1,1,1,0,0,0,95.3,26.7);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,6,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(0.92)).wait(54).to({alpha:0},8,cjs.Ease.get(1)).wait(32));

	// Layer 4
	this.instance_5 = new lib.Symbol6copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(401.2,267.9,1,1,0,0,0,95.3,26.7);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(1).to({regX:94.4,regY:19.6,x:390.4,y:260.8},0).wait(1).to({x:374.1},0).wait(1).to({x:346.7},0).wait(1).to({x:302.2},0).wait(1).to({x:252.2},0).wait(1).to({x:216.7},0).wait(1).to({x:193.7},0).wait(1).to({x:178.4},0).wait(1).to({x:167.8},0).wait(1).to({x:160.5},0).wait(1).to({x:155.6},0).wait(1).to({x:152.5},0).wait(1).to({x:150.8},0).wait(1).to({regX:95.3,regY:26.7,x:151.2,y:267.9},0).wait(47).to({alpha:0},8,cjs.Ease.get(1)).wait(33));

	// Layer 3
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-32,147.7,1,1,0,0,0,95.3,26.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(1).to({regX:95.1,regY:17.1,x:-27.8,y:138.1},0).wait(1).to({x:-20.6},0).wait(1).to({x:-8.5},0).wait(1).to({x:11},0).wait(1).to({x:33},0).wait(1).to({x:48.6},0).wait(1).to({x:58.7},0).wait(1).to({x:65.5},0).wait(1).to({x:70.2},0).wait(1).to({x:73.4},0).wait(1).to({x:75.5},0).wait(1).to({x:76.9},0).wait(1).to({x:77.6},0).wait(1).to({regX:95.3,regY:26.7,x:78,y:147.7},0).wait(46).to({alpha:0},8,cjs.Ease.get(1)).wait(34));

	// Layer 10
	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(367.5,239,1,1,0,0,0,56.5,4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({x:367.4},0).wait(1).to({x:367},0).wait(1).to({x:366.3},0).wait(1).to({x:365.1},0).wait(1).to({x:363.4},0).wait(1).to({x:360.9},0).wait(1).to({x:357.2},0).wait(1).to({x:351.5},0).wait(1).to({x:341.4},0).wait(1).to({x:315.3},0).wait(1).to({x:286.6},0).wait(1).to({x:274.6},0).wait(1).to({x:267.4},0).wait(1).to({x:262.4},0).wait(1).to({x:258.7},0).wait(1).to({x:255.8},0).wait(1).to({x:253.6},0).wait(1).to({x:251.9},0).wait(1).to({x:250.5},0).wait(1).to({x:249.5},0).wait(1).to({x:248.7},0).wait(1).to({x:248.2},0).wait(1).to({x:247.8},0).wait(1).to({x:247.6},0).wait(1).to({x:247.5},0).to({x:233.5},46).wait(1).to({x:233},0).wait(1).to({x:231.3},0).wait(1).to({x:228.1},0).wait(1).to({x:223.1},0).wait(1).to({x:215.8},0).wait(1).to({x:205.4},0).wait(1).to({x:190.6},0).wait(1).to({x:169.6},0).wait(1).to({x:139.4},0).wait(1).to({x:97.9},0).wait(1).to({x:51.6},0).wait(1).to({x:13.5},0).wait(1).to({x:-13.6},0).wait(1).to({x:-32.6},0).wait(1).to({x:-46.2},0).wait(1).to({x:-55.8},0).wait(1).to({x:-62.6},0).wait(1).to({x:-67.3},0).wait(1).to({x:-70.3},0).wait(1).to({x:-72},0).wait(1).to({x:-72.5},0).wait(23));

	// Layer 9
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-74.5,229,1,1,0,0,0,64.5,4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).wait(1).to({x:-74.2},0).wait(1).to({x:-73.2},0).wait(1).to({x:-71.4},0).wait(1).to({x:-68.7},0).wait(1).to({x:-64.5},0).wait(1).to({x:-58.4},0).wait(1).to({x:-49.5},0).wait(1).to({x:-35.7},0).wait(1).to({x:-11.3},0).wait(1).to({x:51.6},0).wait(1).to({x:120.9},0).wait(1).to({x:150},0).wait(1).to({x:167.5},0).wait(1).to({x:179.6},0).wait(1).to({x:188.6},0).wait(1).to({x:195.4},0).wait(1).to({x:200.7},0).wait(1).to({x:204.9},0).wait(1).to({x:208.2},0).wait(1).to({x:210.7},0).wait(1).to({x:212.6},0).wait(1).to({x:213.9},0).wait(1).to({x:214.8},0).wait(1).to({x:215.3},0).wait(1).to({x:215.5},0).to({x:229.5},46).wait(1).to({x:229.7},0).wait(1).to({x:230.5},0).wait(1).to({x:231.8},0).wait(1).to({x:234},0).wait(1).to({x:237},0).wait(1).to({x:241.4},0).wait(1).to({x:247.4},0).wait(1).to({x:255.9},0).wait(1).to({x:267.8},0).wait(1).to({x:284.6},0).wait(1).to({x:305.4},0).wait(1).to({x:325.3},0).wait(1).to({x:340.4},0).wait(1).to({x:351.1},0).wait(1).to({x:358.8},0).wait(1).to({x:364.4},0).wait(1).to({x:368.4},0).wait(1).to({x:371.3},0).wait(1).to({x:373.3},0).wait(1).to({x:374.6},0).wait(1).to({x:375.3},0).wait(1).to({x:375.5},0).wait(23));

	// Layer 8
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(357.5,219);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(237.5,219);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({x:357.4},0).wait(1).to({x:357},0).wait(1).to({x:356.3},0).wait(1).to({x:355.1},0).wait(1).to({x:353.4},0).wait(1).to({x:350.9},0).wait(1).to({x:347.2},0).wait(1).to({x:341.5},0).wait(1).to({x:331.4},0).wait(1).to({x:305.3},0).wait(1).to({x:276.6},0).wait(1).to({x:264.6},0).wait(1).to({x:257.4},0).wait(1).to({x:252.4},0).wait(1).to({x:248.7},0).wait(1).to({x:245.8},0).wait(1).to({x:243.6},0).wait(1).to({x:241.9},0).wait(1).to({x:240.5},0).wait(1).to({x:239.5},0).wait(1).to({x:238.7},0).wait(1).to({x:238.2},0).wait(1).to({x:237.8},0).wait(1).to({x:237.6},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(33).to({_off:false},0).to({x:223.5},45).wait(1).to({x:223.1},0).wait(1).to({x:221.9},0).wait(1).to({x:219.7},0).wait(1).to({x:216.4},0).wait(1).to({x:211.5},0).wait(1).to({x:204.8},0).wait(1).to({x:195.7},0).wait(1).to({x:183.4},0).wait(1).to({x:166.7},0).wait(1).to({x:143.6},0).wait(1).to({x:112.5},0).wait(1).to({x:74.8},0).wait(1).to({x:38.8},0).wait(1).to({x:10.6},0).wait(1).to({x:-10.1},0).wait(1).to({x:-25.3},0).wait(1).to({x:-36.6},0).wait(1).to({x:-45},0).wait(1).to({x:-51.2},0).wait(1).to({x:-55.7},0).wait(1).to({x:-58.9},0).wait(1).to({x:-61},0).wait(1).to({x:-62.1},0).wait(1).to({x:-62.5},0).wait(23));

	// Layer 7
	this.instance_11 = new lib.Symbol3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(270,656.5,1,1,0,0,0,4,56.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(1).to({y:656.1},0).wait(1).to({y:654.7},0).wait(1).to({y:652.1},0).wait(1).to({y:647.9},0).wait(1).to({y:641.8},0).wait(1).to({y:632.9},0).wait(1).to({y:619.7},0).wait(1).to({y:599.3},0).wait(1).to({y:563.3},0).wait(1).to({y:470.5},0).wait(1).to({y:368.1},0).wait(1).to({y:325.1},0).wait(1).to({y:299.4},0).wait(1).to({y:281.5},0).wait(1).to({y:268.3},0).wait(1).to({y:258.2},0).wait(1).to({y:250.3},0).wait(1).to({y:244.1},0).wait(1).to({y:239.3},0).wait(1).to({y:235.6},0).wait(1).to({y:232.8},0).wait(1).to({y:230.8},0).wait(1).to({y:229.5},0).wait(1).to({y:228.7},0).wait(1).to({y:228.5},0).to({y:214.5},47).wait(1).to({y:214.1},0).wait(1).to({y:212.8},0).wait(1).to({y:210.5},0).wait(1).to({y:207},0).wait(1).to({y:201.8},0).wait(1).to({y:194.6},0).wait(1).to({y:184.7},0).wait(1).to({y:171.1},0).wait(1).to({y:152.2},0).wait(1).to({y:126},0).wait(1).to({y:91.3},0).wait(1).to({y:53.3},0).wait(1).to({y:21.3},0).wait(1).to({y:-2.2},0).wait(1).to({y:-19.2},0).wait(1).to({y:-31.7},0).wait(1).to({y:-40.8},0).wait(1).to({y:-47.5},0).wait(1).to({y:-52.3},0).wait(1).to({y:-55.7},0).wait(1).to({y:-57.9},0).wait(1).to({y:-59.1},0).wait(1).to({y:-59.5},0).wait(23));

	// Layer 2
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(257,-66.5,1,1,0,0,0,4,56.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).wait(1).to({y:-66.2},0).wait(1).to({y:-65.3},0).wait(1).to({y:-63.6},0).wait(1).to({y:-60.9},0).wait(1).to({y:-56.9},0).wait(1).to({y:-51.1},0).wait(1).to({y:-42.5},0).wait(1).to({y:-29.3},0).wait(1).to({y:-5.9},0).wait(1).to({y:54.4},0).wait(1).to({y:120.9},0).wait(1).to({y:148.7},0).wait(1).to({y:165.5},0).wait(1).to({y:177.1},0).wait(1).to({y:185.7},0).wait(1).to({y:192.2},0).wait(1).to({y:197.3},0).wait(1).to({y:201.3},0).wait(1).to({y:204.5},0).wait(1).to({y:206.9},0).wait(1).to({y:208.7},0).wait(1).to({y:210},0).wait(1).to({y:210.9},0).wait(1).to({y:211.3},0).wait(1).to({y:211.5},0).to({y:225.5},46).wait(1).to({y:226},0).wait(1).to({y:227.7},0).wait(1).to({y:230.8},0).wait(1).to({y:235.5},0).wait(1).to({y:242.2},0).wait(1).to({y:251.4},0).wait(1).to({y:263.7},0).wait(1).to({y:280.2},0).wait(1).to({y:302.4},0).wait(1).to({y:332.4},0).wait(1).to({y:372.9},0).wait(1).to({y:424.9},0).wait(1).to({y:480.9},0).wait(1).to({y:529},0).wait(1).to({y:565.4},0).wait(1).to({y:592.5},0).wait(1).to({y:612.6},0).wait(1).to({y:627.8},0).wait(1).to({y:639.2},0).wait(1).to({y:647.8},0).wait(1).to({y:654.1},0).wait(1).to({y:658.5},0).wait(1).to({y:661.4},0).wait(1).to({y:663},0).wait(1).to({y:663.5},0).wait(23));

	// bg
	this.instance_13 = new lib.bb_bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_advil_lines_atlas_.png", id:"300x600_advil_lines_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;