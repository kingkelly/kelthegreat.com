(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_lastchance_atlas_", frames: [[233,619,134,74],[0,0,377,503],[233,505,167,112],[0,505,231,221],[0,728,233,213]]}
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



(lib.bb_clzoo = function() {
	this.spriteSheet = ss["300x600_lastchance_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_lemur = function() {
	this.spriteSheet = ss["300x600_lastchance_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_lemurlogo = function() {
	this.spriteSheet = ss["300x600_lastchance_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_snow = function() {
	this.spriteSheet = ss["300x600_lastchance_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_sun = function() {
	this.spriteSheet = ss["300x600_lastchance_atlas_"];
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_clzoo();
	this.instance.parent = this;
	this.instance.setTransform(-76,294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,294,134,74);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_snow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,231,221), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgKAtIAAgUIAVAAIAAAUgAgEAPIgHg5IAAgDIAXAAIAAADIgHA5g");
	this.shape.setTransform(154.4,128.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AgJAtIAAgkIgjg2IAXAAIAVAlIAWglIAXAAIgjA2IAAAkg");
	this.shape_1.setTransform(147.6,128.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AAbAuIgIgVIglAAIgJAVIgUAAIAnhbIARAAIAnBbgAAMAIIgMgdIgLAdIAXAAg");
	this.shape_2.setTransform(137.8,128.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("AgpAtIAAhaIAjAAIAJABIAKADIAIAEIAHAGIAGAGIAEAIIADAIIABAJIAAAAIgBAJIgDAJIgEAHIgGAIIgHAFIgIAEIgKACIgJABgAgVAbIAPAAQAGAAAFgCQAEgCAFgDQADgEACgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgFgEgEgCQgFgCgGAAIgPAAg");
	this.shape_3.setTransform(127.9,128.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AgJAuIgKgDIgIgEIgHgFIgGgIIgEgIQgCgDAAgGIgBgJIABgJIACgJIAFgHIAFgHIAHgGIAJgFIAJgCIAJgBIAKABIAKACIAIAFIAHAFIAFAHIAFAIIACAJIABAJIAAAAIgBAJIgCAJIgFAIIgFAHIgHAGIgJAEIgJADIgKABIgJgBgAgKgaQgFADgEAEQgDADgCAGQgCAFAAAFIAAAAQAAAGACAFQACAFADAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCAEgEQADgDACgGQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgEgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(117,128.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AgJAtIAAhHIgcAAIAAgTIBLAAIAAATIgcAAIAABHg");
	this.shape_5.setTransform(107.3,128.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgGAuIgKgDQgGgBgEgEQgFgCgEgEIAMgOQAGAFAHADIAHACIAGABQAHAAADgCQAEgDgBgEQABgEgEgCQgEgDgKgDIgMgDIgKgFQgEgDgCgEQgCgFAAgGIAAAAQAAgGACgFQADgGAEgDQAEgEAGgCQAGgCAGAAIAKABIAIACIAIAEIAHAFIgKAPQgGgFgGgCQgGgCgFAAQgFAAgEACQgDADAAADQAAAFAFACIAOAFIANAEIAJAEQADAEACAEQACAFAAAFQAAAIgCAFQgCAFgFAEQgEADgHACQgGACgHAAIgJgBg");
	this.shape_6.setTransform(95,128.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgJAtIAAhHIgcAAIAAgTIBLAAIAAATIgcAAIAABHg");
	this.shape_7.setTransform(86.7,128.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgiAtIAAhaIBEAAIAAASIgwAAIAAATIAqAAIAAAQIgqAAIAAATIAxAAIAAASg");
	this.shape_8.setTransform(78.4,128.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AARAtIgbgmIgLAKIAAAcIgUAAIAAhaIAUAAIAAApIAlgpIAXAAIglAnIAnAzg");
	this.shape_9.setTransform(69.6,128.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgEAuIgJgDIgIgEIgHgFIgGgIIgDgIQgDgEAAgEIgBgKIABgJIADgJIADgHIAGgHIAHgGIAIgFIAJgCIAJgBIAMABIAKADQAFACAJAIIgNAOQgFgEgFgDQgHgCgGgBQgFAAgFACIgIAHQgEADgBAGQgCAFAAAFIAAAAQAAAGACAFQACAFADAEQAEAEAEACQAFACAFAAQAFAAAJgDQAEgCAGgFIANANIgHAGIgIAGIgKADIgNABIgIgBg");
	this.shape_10.setTransform(59.7,128.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgJAtIAAhaIATAAIAABag");
	this.shape_11.setTransform(52.7,128.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgJAtIAAhHIgcAAIAAgTIBLAAIAAATIgcAAIAABHg");
	this.shape_12.setTransform(46.3,128.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AgJAtIAAgkIgjg2IAXAAIAVAlIAWglIAXAAIgjA2IAAAkg");
	this.shape_13.setTransform(33.5,128.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AgQAsIgHgEIgFgEIgFgGIgDgHIgCgIIgBgJIAAgzIAUAAIAAAyQAAAGACAEQABAEACADIAHAEQADACAEAAQAFAAADgCIAGgEIAEgHIABgJIAAgzIAVAAIAAAyIgBAKIgCAIIgEAHIgEAGQgDADgDABIgHAEQgKACgGAAIgQgCg");
	this.shape_14.setTransform(24,128.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("AgmAtIAAhaIApAAQAIAAAGACQAGACAEAEQADADACAFQABAEAAAEIAAABIAAAGIgDAFQgDAFgGADIAIACIAFAFQACADABADQACAEAAAEQAAAGgDAGQgCAEgFAEQgEACgHACQgGACgIgBgAgSAcIAWAAQAHAAAEgDQAEgCAAgFQAAgFgEgDIgFgCIgGAAIgWAAgAgSgIIASAAQAGABAEgDQAEgDAAgFQAAgEgEgDQgDgCgHAAIgSAAg");
	this.shape_15.setTransform(14.7,128.9);

	this.instance = new lib.bb_lemurlogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,167,138), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape.setTransform(241,212.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBUIAAinIBBAAQAKAAAIACQAJABAIADQAIAEAIAEIAMAKQAHAFAEAIIAIANIAFARQABAIABAIIAAAAQgBAJgBAIIgFAQIgIAOQgEAHgHAGQgGAGgGAEQgIAFgIADIgRAEQgIACgKAAgAgnAzIAcAAQALAAAJgEQAJgEAHgGQAHgHADgJQAEgJAAgMIAAAAQAAgKgEgJQgDgKgHgGQgHgIgJgDQgJgEgLAAIgcAAg");
	this.shape_1.setTransform(223.6,212.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBUIAAinIAkAAIAACng");
	this.shape_2.setTransform(209.8,212.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBUQgKgBgIgDQgKgDgIgFIgRgMIAWgaQAMAJAMAFIANAFQAGABAGAAQAMAAAGgFQAHgEAAgHIAAgBQAAgHgHgEQgHgEgTgGQgOgDgJgEQgKgEgIgFQgHgFgEgJQgDgIAAgNIAAAAQAAgLADgJQAFgKAIgGQAIgHALgEQAKgEANAAIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgKAAgGAEQgFAFAAAGIAAABQAAAHAIAEQAGAFAWAFQANAEAJAEQAKAFAGAEQAIAGADAIQADAIABALIAAABQgBALgEAKQgFAKgHAHQgJAGgLAEQgMAEgNAAQgIgBgKgCg");
	this.shape_3.setTransform(197.9,212.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_4.setTransform(182.6,212.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBRQgHgDgFgDQgGgEgFgEIgIgLIgGgNQgDgHgBgIIgBgRIAAhfIAlAAIAABeQAAAKACAIQADAIAEAFQAFAFAHADQAHACAHAAQAJAAAGgCQAHgDAFgFQAEgFADgIQACgHAAgKIAAhfIAlAAIAABeIgBARQgBAJgDAHIgGANQgEAGgFAFIgKAIIgNAGQgTAEgLAAQgVgBgJgDg");
	this.shape_5.setTransform(165.8,212.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBVQgJgBgIgEQgIgDgHgFQgIgFgFgFQgGgGgFgHQgFgHgDgIQgDgHgCgJQgBgIAAgKIAAAAQAAgIABgIQACgJADgIQADgIAFgGQAFgHAGgHQAGgFAHgFQAHgFAIgDQAIgEAJgBQAJgCAJAAQAKAAAJACQAJABAIAEQAIADAHAFQAHAFAGAFIAKANQAFAHADAIQAEAHABAJQACAIAAAJIAAAAQAAAJgCAJQgBAIgEAIQgDAHgFAHQgEAHgGAHIgNAKIgQAIQgIAEgJABQgJACgJAAQgJAAgJgCgAgUgvQgJADgHAIQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAHAJAEQAKAFAKAAQALAAAJgFQAJgDAHgIQAHgHAEgJQADgKAAgLIAAAAQAAgKgDgJQgEgKgHgHQgHgHgJgEQgKgFgKAAQgKAAgKAFg");
	this.shape_6.setTransform(146.6,212.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBUIAAhtIgvBHIAAAAIguhGIAABsIglAAIAAinIAoAAIArBHIAthHIAnAAIAACng");
	this.shape_7.setTransform(118.8,212.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_8.setTransform(100.7,212.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_9.setTransform(83.2,212.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_10.setTransform(66.3,212.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_11.setTransform(43.6,212.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBUIAAinIAkAAIAACng");
	this.shape_12.setTransform(31.8,212.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgKgDQgJgDgJgFIgQgMIAXgaQAMAJALAFIANAFQAHABAFAAQAMAAAGgFQAHgEAAgHIAAgBQAAgHgHgEQgGgEgUgGQgOgDgJgEQgLgEgGgFQgIgFgEgJQgEgIAAgNIAAAAQAAgLAEgJQAFgKAIgGQAIgHALgEQALgEAMAAIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgJAAgGAEQgGAFAAAGIAAABQAAAHAIAEQAGAFAVAFQAOAEAJAEQAKAFAGAEQAIAGADAIQADAIAAALIAAABQAAALgEAKQgEAKgJAHQgIAGgLAEQgLAEgOAAQgJgBgJgCg");
	this.shape_13.setTransform(19.9,212.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBUIAAinIAkAAIAACng");
	this.shape_14.setTransform(8.4,212.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQBVIhEipIApAAIAsB2IAsh2IAnAAIhDCpg");
	this.shape_15.setTransform(-4.6,212.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSBVQgJgBgIgEQgIgDgHgFQgIgFgFgFQgGgGgFgHQgFgHgDgIQgDgHgCgJQgBgIAAgKIAAAAQAAgIABgJQACgIADgIQADgIAFgGQAFgHAGgHQAGgFAHgFQAHgFAIgDQAIgEAJgBQAJgCAJAAQAKAAAJACQAJABAIAEQAIADAHAFQAHAFAGAFIAKANQAFAHADAIQAEAHABAJQACAIAAAJIAAAAQAAAJgCAJQgBAIgEAIQgDAHgFAHQgEAHgGAHIgNAKIgQAIQgIAEgJABQgJACgJAAQgJAAgJgCgAgUgvQgJADgHAIQgHAHgDAJQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAHAJAEQAKAFAKAAQALAAAJgFQAJgDAHgIQAHgHAEgJQADgKAAgLIAAAAQAAgJgDgKQgEgKgHgHQgHgHgJgEQgKgFgKAAQgKAAgKAFg");
	this.shape_16.setTransform(218.6,186.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_17.setTransform(200.6,186.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_18.setTransform(178,186.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJBVQgIgBgIgEQgIgDgGgFQgIgFgFgFQgGgGgFgHIgIgOQgDgJgBgIQgBgIAAgKIAAAAQAAgIABgJQABgIADgIIAIgOIAKgOQAHgFAHgFQAGgFAIgDQAJgEAIgBQAIgCAKAAQAMAAAKACQAJACAIADQALAFAQAOIgYAbQgJgJgKgEQgMgGgMAAQgJAAgJAFQgJADgHAIQgGAHgEAJQgDAKAAAKIAAAAQAAALADAJQAEAKAGAHQAHAHAJAEQAJAFAJAAQAKAAAPgGQAIgEAMgKIAYAYIgPANQgHAFgHAEQgJAEgJACQgLACgMAAQgIAAgJgCg");
	this.shape_19.setTransform(160.9,186.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBmIAAhmIAlAAIAACng");
	this.shape_20.setTransform(142.4,186.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAyBVIgPgmIhGAAIgPAmIgmAAIBIipIAhAAIBICpgAAWAOIgWg2IgWA2IAsAAg");
	this.shape_21.setTransform(123.4,186.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiBUIAAhDIhDAAIAABDIglAAIAAinIAlAAIAABCIBDAAIAAhCIAlAAIAACng");
	this.shape_22.setTransform(104.9,186.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJBVQgIgBgIgEQgIgDgGgFQgIgFgFgFQgGgGgFgHIgIgOQgDgJgBgIQgBgIAAgKIAAAAQAAgIABgJQABgIADgIIAIgOIAKgOQAHgFAHgFQAGgFAIgDQAJgEAIgBQAIgCAKAAQAMAAAKACQAJACAIADQALAFAQAOIgYAbQgKgJgJgEQgMgGgMAAQgJAAgJAFQgJADgHAIQgGAHgEAJQgDAKAAAKIAAAAQAAALADAJQAEAKAGAHQAHAHAJAEQAJAFAJAAQAKAAAPgGQAIgEAMgKIAYAYIgPANQgHAFgHAEQgJAEgJACQgLACgMAAQgIAAgJgCg");
	this.shape_23.setTransform(87.1,186.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_24.setTransform(63.1,186.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgKgDQgJgEgJgFIgQgLIAXgaQAMAKALAEIANAFQAHABAFAAQAMAAAGgEQAHgFAAgHIAAgBQAAgHgHgEQgHgEgTgGQgOgDgJgEQgLgEgGgFQgIgFgDgJQgFgIAAgNIAAAAQAAgLAFgJQAEgKAIgGQAHgHALgEQAMgEAMAAIARACIAQAEIAPAHIAOAJIgUAcQgLgIgLgEQgLgFgJAAQgLAAgFAFQgGAEAAAGIAAABQAAAHAHAEQAHAEAVAGQAOAEAJAEQAKAEAHAFQAGAGAEAIQADAIAAALIAAABQAAAMgEAJQgEAKgJAHQgIAHgLADQgLAEgOAAQgJAAgJgDg");
	this.shape_25.setTransform(47.5,186.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAyBVIgPgmIhGAAIgPAmIgmAAIBIipIAhAAIBICpgAAWAOIgWg2IgWA2IAsAAg");
	this.shape_26.setTransform(30.5,186.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag7BUIAAinIAlAAIAACGIBTAAIAAAhg");
	this.shape_27.setTransform(14.2,186.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-32.2,174,299.3,54), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,377,503), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_snow();
	this.instance.parent = this;
	this.instance.setTransform(-17,-17,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,265.7,254.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBVQgIgCgJgDIgPgIQgHgEgGgGQgGgFgEgHQgFgHgDgIQgDgIgBgJIgCgSIAAAAQAAgIACgJQABgIADgIQADgIAFgGIAKgOQAGgFAIgFQAGgFAJgDQAIgDAIgCQAJgCAJAAQALAAAKACQAIABAJADQAKAEASANIgYAcQgKgJgJgDQgLgFgOAAQgIAAgKAFQgIADgGAHQgIAIgDAKQgDAJAAAKIAAAAQAAAMADAKQAEAJAHAHQAHAHAIAFQAKADAKAAQALAAAIgCQAJgCAHgGIAAgYIglAAIAAgeIBJAAIAABHQgTAOgMAFQgKAEgJACQgLACgLAAQgJAAgJgCg");
	this.shape.setTransform(258,160.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBmIAAhmIAlAAIAACng");
	this.shape_1.setTransform(239.2,160.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAkAAIAACng");
	this.shape_2.setTransform(225.7,160.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwBUIAAhtIgwBHIAAAAIgvhGIAABsIgkAAIAAinIAoAAIArBHIAthHIAnAAIAACng");
	this.shape_3.setTransform(211.3,160.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBVQgJgBgIgEQgIgDgHgFQgIgFgFgGQgGgFgFgHQgFgHgDgIQgDgIgCgIQgBgIAAgKIAAAAQAAgIABgJQACgIADgIQADgIAFgGQAFgIAGgGQAGgFAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAFIAKANQAFAHADAIQAEAHABAJQACAIAAAJIAAAAQAAAJgCAIQgBAJgEAIQgDAHgFAIQgEAHgGAFIgNALIgQAIQgIAEgJABQgJACgJAAQgJAAgJgCgAgUgvQgJADgHAHQgHAIgDAJQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAHAJAFQAKAEAKAAQALAAAJgEQAJgFAHgHQAHgHAEgJQADgKAAgLIAAAAQAAgJgDgKQgEgKgHgHQgHgIgJgDQgKgFgKAAQgKAAgKAFg");
	this.shape_4.setTransform(190.7,160.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBVQgIgBgIgEQgIgDgGgFQgIgFgFgGQgGgFgFgHIgIgOQgCgJgCgIQgCgIABgKIAAAAQgBgIACgJQACgIACgIIAIgOIAKgOQAGgFAIgFQAGgFAJgDQAIgDAIgCQAIgCAKAAQALAAALACQAJACAIADQAKAFARAOIgYAbQgKgJgJgEQgMgGgMAAQgJAAgJAFQgJADgGAHQgHAIgEAJQgDAKAAAKIAAAAQAAALADAJQAEAKAHAHQAGAHAJAFQAJAEAJAAQAKAAAPgGQAIgEAMgKIAYAYIgPANQgHAFgHAEQgJAEgJACQgLACgMAAQgIAAgJgCg");
	this.shape_5.setTransform(171.8,160.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBVQgJgCgKgDQgJgEgJgFIgQgLIAXgaQAMAJALAGIANADQAHACAFAAQAMAAAGgEQAHgFAAgHIAAgBQAAgHgHgEQgGgFgUgFQgOgEgJgDQgLgEgGgFQgIgFgEgIQgEgJABgNIAAAAQgBgLAEgJQAFgKAIgHQAIgGALgEQALgDAMAAIARABIAQAEIAPAHIANAJIgTAcQgLgJgKgDQgMgFgKAAQgJAAgGAFQgGAEAAAGIAAABQAAAHAIAEQAGAFAVAFQAOAEAJAEQAKAEAGAFQAIAGADAIQADAIAAALIAAABQAAAMgEAJQgEAKgJAHQgIAGgLAEQgLADgOABQgJAAgJgCg");
	this.shape_6.setTransform(147.7,160.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAmIAFhLIAoAAIAAABIgaBKg");
	this.shape_7.setTransform(137,155.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAEQAMAFAIAIQAHAHAEAKQAEAKAAAMIAAAAQAAAKgDAIQgDAJgEAFQgFAHgHAFQgGAEgIADIApA8gAgjgBIAlAAQAHgBAFgBQAFgCAEgDQADgDACgFQACgEAAgFIAAgBQAAgFgCgFQgCgFgEgDQgDgDgGgBQgFgBgHAAIgkAAg");
	this.shape_8.setTransform(125.3,160.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_9.setTransform(108.4,160.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_10.setTransform(92.2,160.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBmIAAhmIAlAAIAACng");
	this.shape_11.setTransform(74.9,160.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAkAAIAACng");
	this.shape_12.setTransform(61.5,160.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmBVIgmhtIglBtIggAAIg5ioIAnAAIAjBwIAmhxIAfAAIAlBxIAjhwIAnAAIg6Cog");
	this.shape_13.setTransform(44,160.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,147.6,298,28);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_sun();
	this.instance.parent = this;
	this.instance.setTransform(-20,-18,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-18,271.7,248.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,223.6,1,1,0,0,0,111.5,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.2,101.6,265.7,254.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.5,192.3,1,1,0,0,0,116.5,106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,startPosition:28},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,67.8,271.7,248.3);


// stage content:
(lib._300x600_lastchance = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,189.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(253).to({_off:false},0).wait(1).to({regX:-9,regY:331,x:201,y:520.5,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.251},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:210,y:189.5},0).wait(7));

	// Layer 10
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214.5,-85,1,1,0,0,0,83.5,56);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).wait(1).to({regY:66.8,y:-73.5,alpha:0.001},0).wait(1).to({x:214.4,y:-71.4,alpha:0.006},0).wait(1).to({x:214.3,y:-67.4,alpha:0.015},0).wait(1).to({x:214.1,y:-61.2,alpha:0.028},0).wait(1).to({x:213.8,y:-52.1,alpha:0.048},0).wait(1).to({x:213.4,y:-39.2,alpha:0.076},0).wait(1).to({x:212.9,y:-20.9,alpha:0.116},0).wait(1).to({x:212.1,y:4.8,alpha:0.172},0).wait(1).to({x:211,y:41.7,alpha:0.252},0).wait(1).to({x:209.4,y:92.8,alpha:0.363},0).wait(1).to({x:207.6,y:153.6,alpha:0.496},0).wait(1).to({x:205.9,y:208.9,alpha:0.616},0).wait(1).to({x:204.6,y:251.5,alpha:0.709},0).wait(1).to({x:203.6,y:283.3,alpha:0.778},0).wait(1).to({x:202.9,y:307.6,alpha:0.831},0).wait(1).to({x:202.3,y:326.3,alpha:0.871},0).wait(1).to({x:201.9,y:341,alpha:0.903},0).wait(1).to({x:201.5,y:352.6,alpha:0.929},0).wait(1).to({x:201.2,y:361.8,alpha:0.949},0).wait(1).to({x:201,y:369,alpha:0.964},0).wait(1).to({x:200.8,y:374.6,alpha:0.977},0).wait(1).to({x:200.7,y:378.8,alpha:0.986},0).wait(1).to({x:200.6,y:381.9,alpha:0.992},0).wait(1).to({x:200.5,y:383.9,alpha:0.997},0).wait(1).to({y:385,alpha:0.999},0).wait(1).to({regY:56,y:374.6,alpha:1},0).wait(45));

	// lemur
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(415.5,-53.1,1,1,-18.4,0,0,120.5,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).wait(1).to({regX:188.5,regY:251.5,x:558.2,y:162.2},0).wait(1).to({rotation:-18.3,x:556},0).wait(1).to({rotation:-18.1,x:552.1,y:162.4},0).wait(1).to({rotation:-17.7,x:546.4,y:162.6},0).wait(1).to({rotation:-17.3,x:538.9,y:162.8},0).wait(1).to({rotation:-16.8,x:529.1,y:163.2},0).wait(1).to({rotation:-16.1,x:517.1,y:163.5},0).wait(1).to({rotation:-15.3,x:502.6,y:163.9},0).wait(1).to({rotation:-14.4,x:485.5,y:164.3},0).wait(1).to({rotation:-13.3,x:465.6,y:164.7},0).wait(1).to({rotation:-12,x:442.7,y:165},0).wait(1).to({rotation:-10.6,x:417,y:165.2},0).wait(1).to({rotation:-9,x:388.2,y:165.4},0).wait(1).to({rotation:-7.3,x:356.7,y:165.3},0).wait(1).to({rotation:-5.4,x:322.7,y:165},0).wait(1).to({rotation:-3.5,x:286.7,y:164.4},0).wait(1).to({rotation:-1.4,x:249.2,y:163.4},0).wait(1).to({rotation:0.6,x:211,y:162.2},0).wait(1).to({rotation:2.7,x:172.7,y:160.5},0).wait(1).to({rotation:4.7,x:134.9,y:158.6},0).wait(1).to({rotation:6.7,x:98.2,y:156.5},0).wait(1).to({rotation:8.6,x:63.1,y:154.2},0).wait(1).to({rotation:10.4,x:29.6,y:151.7},0).wait(1).to({rotation:12.1,x:-1.7,y:149.1},0).wait(1).to({rotation:13.6,x:-31.1,y:146.5},0).wait(1).to({rotation:15.1,x:-58.4,y:143.9},0).wait(1).to({rotation:16.4,x:-83.5,y:141.4},0).wait(1).to({rotation:17.7,x:-106.7,y:138.9},0).wait(1).to({rotation:18.8,x:-128,y:136.6},0).wait(1).to({rotation:19.9,x:-147.5,y:134.2},0).wait(1).to({rotation:20.8,x:-165.2,y:132.1},0).wait(1).to({rotation:21.7,x:-181.4,y:130.2},0).wait(1).to({rotation:22.5,x:-196.1,y:128.3},0).wait(1).to({rotation:23.2,x:-209.3,y:126.6},0).wait(1).to({rotation:23.8,x:-221.2,y:125},0).wait(1).to({rotation:24.4,x:-231.8,y:123.5},0).wait(1).to({rotation:24.9,x:-241.3,y:122.2},0).wait(1).to({rotation:25.4,x:-249.6,y:121},0).wait(1).to({rotation:25.8,x:-256.9,y:120},0).wait(1).to({rotation:26.1,x:-263.3,y:119.1},0).wait(1).to({rotation:26.4,x:-268.8,y:118.3},0).wait(1).to({rotation:26.6,x:-273.4,y:117.6},0).wait(1).to({rotation:26.8,x:-277.1,y:117.1},0).wait(1).to({rotation:27,x:-280.1,y:116.6},0).wait(1).to({rotation:27.1,x:-282.4,y:116.3},0).wait(1).to({rotation:27.2,x:-284,y:116},0).wait(1).to({rotation:27.3,x:-284.9,y:115.9},0).wait(1).to({regX:120.5,regY:2,x:-231.4,y:-137},0).to({_off:true},1).wait(41).to({_off:false,regX:124.5,regY:152,rotation:0,x:63,y:-357.9},0).wait(1).to({regX:188.5,regY:251.5,x:127.1,y:-258.1},0).wait(1).to({y:-257},0).wait(1).to({y:-254.9},0).wait(1).to({y:-251.8},0).wait(1).to({y:-247.2},0).wait(1).to({y:-240.6},0).wait(1).to({y:-231.5},0).wait(1).to({x:127.2,y:-218.3},0).wait(1).to({x:127.3,y:-198.1},0).wait(1).to({x:127.4,y:-162.4},0).wait(1).to({x:127.7,y:-58.7},0).wait(1).to({x:128,y:36.4},0).wait(1).to({x:128.2,y:73.7},0).wait(1).to({y:96.4},0).wait(1).to({x:128.3,y:112.3},0).wait(1).to({y:124.1},0).wait(1).to({x:128.4,y:133.1},0).wait(1).to({y:140.2},0).wait(1).to({y:145.7},0).wait(1).to({y:150},0).wait(1).to({y:153.4},0).wait(1).to({y:155.9},0).wait(1).to({y:157.7},0).wait(1).to({y:158.9},0).wait(1).to({y:159.6},0).wait(1).to({regX:124.5,regY:152,x:64.4,y:60.3},0).wait(48));

	// Layer 12
	this.instance_3 = new lib.Symbol13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-75.5,727.5,1,1,0,0,0,115.5,110.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(228).to({_off:false},0).wait(1).to({x:-75.4,y:727.3},0).wait(1).to({scaleX:1,scaleY:1,x:-75.2,y:726.9},0).wait(1).to({x:-74.7,y:726.1},0).wait(1).to({scaleX:1,scaleY:1,x:-74.1,y:724.8},0).wait(1).to({scaleX:1,scaleY:1,x:-73.2,y:723},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-71.8,y:720.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-70,y:716.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-67.3,y:711.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-63.3,y:703.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-56,y:688.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-35.1,y:646.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-15.8,y:608.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-8.3,y:592.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-3.6,y:583.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-0.4,y:577.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:2,y:572.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:3.8,y:568.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:5.2,y:566},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:6.3,y:563.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:7.2,y:562},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:7.9,y:560.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:8.4,y:559.6},0).wait(1).to({x:8.8,y:558.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:9,y:558.4},0).wait(1).to({x:9.1,y:558.1},0).wait(45));

	// Layer 9
	this.instance_4 = new lib.Symbol11();
	this.instance_4.parent = this;
	this.instance_4.setTransform(128.1,293.3,0.1,0.1,0,0,0,95,40.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).wait(1).to({regX:117.1,regY:199.8,scaleX:0.15,scaleY:0.15,x:131.4,y:308.5},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:133,y:307.6},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:135.3,y:306.1},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:138.9,y:304},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:142.1,y:302},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:144.3,y:300.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:145.7,y:299.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:146.7,y:299.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:147.5,y:298.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:148.1,y:298.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:148.6,y:298.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:149,y:297.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:149.3,y:297.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.5,y:297.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:149.7,y:297.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.9,y:297.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:150},0).wait(1).to({scaleX:1,scaleY:1,x:150.1,y:297.2},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:150.2},0).wait(1).to({regX:95,regY:40,x:128.1,y:137.9},0).wait(50).to({regX:117.1,regY:199.8,x:150.2,y:297.9},0).wait(1).to({y:298.9},0).wait(1).to({y:300.6},0).wait(1).to({y:303.2},0).wait(1).to({y:307.1},0).wait(1).to({y:312.6},0).wait(1).to({y:320.3},0).wait(1).to({y:331.4},0).wait(1).to({y:348.4},0).wait(1).to({y:378.5},0).wait(1).to({y:465.7},0).wait(1).to({y:545.8},0).wait(1).to({y:577.2},0).wait(1).to({y:596.3},0).wait(1).to({y:609.7},0).wait(1).to({y:619.6},0).wait(1).to({y:627.2},0).wait(1).to({y:633.1},0).wait(1).to({y:637.8},0).wait(1).to({y:641.4},0).wait(1).to({y:644.2},0).wait(1).to({y:646.4},0).wait(1).to({y:647.9},0).wait(1).to({y:648.9},0).wait(1).to({y:649.5},0).wait(1).to({regX:95,regY:40,x:128.1,y:489.9},0).wait(48));

	// Layer 4
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,254.9,0.15,0.15,0,0,0,149,14.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).wait(1).to({regX:148.6,regY:160.4,scaleX:0.15,scaleY:0.15,y:276.8},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:149.9,y:276.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:277.1},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:277.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:278.2},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:149.8,y:279.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:149.7,y:281.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:282.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:149.6,y:283.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:284.1},0).wait(1).to({scaleX:1,scaleY:1,y:284.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:284.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:284.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:285.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:285.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:285.3},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({regX:148.9,regY:14,scaleX:1.1,scaleY:1.1,x:150,y:124.7},0).wait(53).to({regX:148.6,regY:160.4,scaleX:1.1,scaleY:1.1,x:149.7,y:285.6,alpha:0.996},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.982},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:285.5,alpha:0.956},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:285.3,alpha:0.914},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:285,alpha:0.852},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:284.5,alpha:0.766},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.8,y:284,alpha:0.65},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:283.3,alpha:0.511},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:282.6,alpha:0.369},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:149.9,y:281.9,alpha:0.248},0).wait(1).to({scaleX:0.26,scaleY:0.26,y:281.5,alpha:0.156},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:150,y:281.2,alpha:0.091},0).wait(1).to({scaleX:0.16,scaleY:0.16,y:281,alpha:0.047},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:280.8,alpha:0.019},0).wait(1).to({scaleX:0.11,scaleY:0.11,alpha:0.004},0).wait(1).to({regX:149.1,regY:14.1,scaleX:0.11,scaleY:0.11,y:264.7,alpha:0},0).wait(178));

	// snow circ
	this.instance_6 = new lib.Symbol7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.5,132.6,1,1,0,0,0,55.3,61.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).wait(1).to({regX:55.6,regY:228.6,x:150.8,y:300.1,alpha:0.09,startPosition:1},0).wait(1).to({alpha:0.207,startPosition:2},0).wait(1).to({alpha:0.351,startPosition:3},0).wait(1).to({alpha:0.503,startPosition:4},0).wait(1).to({alpha:0.641,startPosition:5},0).wait(1).to({alpha:0.751,startPosition:6},0).wait(1).to({alpha:0.834,startPosition:7},0).wait(1).to({alpha:0.895,startPosition:8},0).wait(1).to({alpha:0.938,startPosition:9},0).wait(1).to({alpha:0.968,startPosition:10},0).wait(1).to({alpha:0.987,startPosition:11},0).wait(1).to({alpha:0.997,startPosition:12},0).wait(1).to({regX:55.3,regY:61.1,x:150.5,y:132.6,alpha:1,startPosition:13},0).wait(28).to({startPosition:40},0).to({alpha:0,startPosition:23},8,cjs.Ease.get(1)).wait(140));

	// sun circle
	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.6,125.5,1,1,0,0,0,45.5,38.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({startPosition:34},0).to({alpha:0.441,startPosition:52},18,cjs.Ease.get(1)).wait(48).to({startPosition:40},0).to({alpha:0,startPosition:7},10).wait(188));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27988A").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(298));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_lastchance_atlas_.png", id:"300x600_lastchance_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;