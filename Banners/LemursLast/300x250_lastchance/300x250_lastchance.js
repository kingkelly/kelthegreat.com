(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_lastchance_atlas_", frames: [[169,306,76,45],[0,0,249,304],[0,306,167,112],[251,0,231,221],[251,223,233,213]]}
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
	this.spriteSheet = ss["300x250_lastchance_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_lemur = function() {
	this.spriteSheet = ss["300x250_lastchance_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_lemurlogo = function() {
	this.spriteSheet = ss["300x250_lastchance_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_snow = function() {
	this.spriteSheet = ss["300x250_lastchance_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_sun = function() {
	this.spriteSheet = ss["300x250_lastchance_atlas_"];
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
	this.instance.setTransform(-38,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-22.5,76,45);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_clzoo();
	this.instance.parent = this;
	this.instance.setTransform(-38,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-22.5,76,45);


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
	this.shape.setTransform(164.5,56.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNBUIAAinIBCAAQAKAAAIABQAJACAJADQAHADAHAFIAOAKQAFAGAFAGIAIAPIAFAQQACAHAAAJIAAAAQAAAJgCAIIgFAQIgIAPQgFAGgFAFQgHAHgHAEQgHAEgHADIgSAGQgIABgKAAgAgoAyIAdAAQALABAJgEQAJgDAHgHQAHgHADgJQAEgKAAgKIAAgBQAAgKgEgKQgDgIgHgHQgHgIgJgDQgJgDgLAAIgdAAg");
	this.shape_1.setTransform(147.1,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAkAAIAACng");
	this.shape_2.setTransform(133.4,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBVQgKgCgJgEQgJgDgJgEIgPgNIAWgaQALALAMAEIANAEQAGACAHAAQALAAAHgFQAGgDAAgIIAAAAQAAgIgGgEQgHgFgUgFQgOgEgJgDQgKgEgHgFQgIgFgDgJQgFgIAAgMIAAgBQAAgLAFgKQAEgJAIgGQAHgHALgEQALgDANgBIARACIAQAEIAPAHIAOAJIgTAcQgMgJgLgEQgLgEgJAAQgLAAgGAEQgFAEAAAHIAAAAQAAAIAHAFQAHADAVAHQAOADAJAEQAKAEAHAFQAGAGAEAIQAEAIgBALIAAAAQABAMgFALQgEAJgJAHQgIAHgLADQgLAEgOgBQgIAAgKgBg");
	this.shape_3.setTransform(121.5,56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_4.setTransform(106.2,56.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBRQgHgDgFgDQgGgEgFgEIgIgLIgGgNQgDgHgBgIIgBgRIAAhfIAlAAIAABeQAAAKACAIQADAIAEAFQAFAFAHADQAHACAHAAQAJAAAGgCQAHgDAFgFQAEgFADgIQACgHAAgKIAAhfIAlAAIAABeIgBARQgBAJgDAHIgGANQgEAGgFAFIgKAIIgNAGQgTAEgLAAQgVgBgJgDg");
	this.shape_5.setTransform(89.4,56.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgHQgGgFgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgGAGgGQAGgHAHgEQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAEAGAHIAKAMQAFAHADAIQAEAHABAJQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAIgFAHQgEAIgGAFIgNALIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAGQgHAIgDAJQgEAKAAAKIAAAAQAAALAEAKQAEAJAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_6.setTransform(70.1,56.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvBUIAAhsIgvBGIAAAAIguhGIAABsIglAAIAAinIAoAAIArBHIAshHIAoAAIAACng");
	this.shape_7.setTransform(198.6,30.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_8.setTransform(180.6,30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBUIAAhDIhDAAIAABDIglAAIAAinIAlAAIAABDIBDAAIAAhDIAlAAIAACng");
	this.shape_9.setTransform(163.1,30.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_10.setTransform(146.2,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_11.setTransform(123.4,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAkAAIAACng");
	this.shape_12.setTransform(111.7,30.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgKgDQgJgEgJgEIgQgNIAXgaQAMALALAEIANAFQAHABAFAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgHgFgTgFQgOgEgJgDQgKgEgHgFQgIgFgDgJQgFgIAAgMIAAgBQAAgLAFgKQAEgJAIgGQAHgHALgEQALgDANgBIARACIAQAEIAPAHIAOAJIgTAcQgMgIgLgFQgLgEgJAAQgLAAgFAEQgGAFAAAGIAAAAQAAAIAHAFQAHADAVAHQAOADAJAEQAKAFAHAEQAGAGAEAIQAEAIgBALIAAABQABALgFALQgEAJgJAHQgIAHgLADQgLAEgOgBQgJAAgJgCg");
	this.shape_13.setTransform(99.8,30.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBUIAAinIAjAAIAACng");
	this.shape_14.setTransform(88.3,30.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQBVIhDioIAoAAIArB1IAth1IAnAAIhDCog");
	this.shape_15.setTransform(75.2,30.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgGQgGgGgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgHAGgFQAGgGAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAGIAKAMQAFAHADAIQAEAIABAIQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAJgFAGQgEAIgGAGIgNAKIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_16.setTransform(48.8,30.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_17.setTransform(30.8,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_18.setTransform(198.1,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJBVQgIgCgIgDQgIgDgGgEQgIgFgFgGQgGgGgFgHIgIgOQgDgJgBgIQgBgIAAgJIAAgBQAAgIABgIQABgJADgIIAIgPIAKgNQAHgFAHgFQAHgFAHgDQAJgEAIgBQAJgCAJAAQAMAAAKACQAJACAIADQALAFAQAOIgXAbQgKgJgKgEQgMgGgMAAQgJAAgJAEQgJAFgHAHQgGAGgEAKQgDAKAAAKIAAAAQAAALADAJQAEAKAGAHQAHAIAJADQAJAFAJAAQAKAAAPgGQAJgEALgKIAYAYIgPANQgGAFgIAEQgJAEgJACQgLACgMAAQgIAAgJgCg");
	this.shape_19.setTransform(181.1,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBnIAAhnIAlAAIAACng");
	this.shape_20.setTransform(162.5,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAyBVIgPgmIhGAAIgPAmIgmAAIBIioIAhAAIBICogAAWAOIgWg1IgWA1IAsAAg");
	this.shape_21.setTransform(143.6,4.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiBUIAAhDIhDAAIAABDIglAAIAAinIAlAAIAABDIBDAAIAAhDIAlAAIAACng");
	this.shape_22.setTransform(125,4.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJBVQgIgCgIgDQgIgDgGgEQgIgFgFgGQgGgGgFgHIgIgOQgDgJgBgIQgBgIAAgJIAAgBQAAgIABgIQABgJADgIIAIgPIAKgNQAHgFAHgFQAHgFAHgDQAJgEAIgBQAJgCAJAAQAMAAAKACQAJACAIADQALAFAQAOIgXAbQgKgJgKgEQgMgGgMAAQgJAAgJAEQgJAFgHAHQgGAGgEAKQgDAKAAAKIAAAAQAAALADAJQAEAKAGAHQAHAIAJADQAJAFAJAAQAKAAAPgGQAJgEALgKIAYAYIgPANQgGAFgIAEQgJAEgJACQgLACgMAAQgIAAgJgCg");
	this.shape_23.setTransform(107.3,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_24.setTransform(83.2,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgKgDQgJgEgJgEIgQgNIAXgZQAMAJALAFIANAFQAHABAFAAQAMAAAGgFQAHgEAAgHIAAAAQAAgIgHgEQgGgEgUgGQgOgDgJgEQgLgEgGgFQgIgFgEgJQgEgIAAgMIAAgBQAAgLAEgJQAFgKAIgGQAIgHALgEQALgDAMgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgJAAgGAEQgGAFAAAGIAAABQAAAIAIAEQAGAEAVAFQAOAEAJAEQAKAFAGAEQAIAGADAIQADAIABALIAAABQgBAMgEAJQgEAKgJAHQgIAGgLAEQgLADgOAAQgJAAgJgCg");
	this.shape_25.setTransform(67.6,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAyBVIgPgmIhGAAIgPAmIgmAAIBIioIAhAAIBICogAAWAOIgWg1IgWA1IAsAAg");
	this.shape_26.setTransform(50.6,4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag8BUIAAinIAmAAIAACFIBTAAIAAAig");
	this.shape_27.setTransform(34.4,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(21,-8,190.1,80), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,249,304), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_snow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,221);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBVQgIgBgJgDIgPgIQgHgFgGgFQgGgHgEgHQgFgGgDgIQgDgIgBgIIgCgSIAAgBQAAgIACgIQABgJADgIQADgHAFgIIAKgMQAGgGAIgFQAGgFAJgDQAIgDAIgCQAJgCAJAAQALAAAKABQAIACAJADQAKAEASANIgYAcQgKgIgJgFQgLgEgOAAQgIAAgKAEQgIAFgGAHQgIAHgDAJQgDAKAAAKIAAAAQAAALADAKQAEAKAHAHQAHAIAIADQAKAFAKAAQALAAAIgEQAJgCAHgFIAAgYIglAAIAAgfIBJAAIAABIQgTAPgMAEQgKAEgJACQgLACgLAAQgJAAgJgCg");
	this.shape.setTransform(258,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBnIAAhnIAlAAIAACng");
	this.shape_1.setTransform(239.2,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAkAAIAACng");
	this.shape_2.setTransform(225.7,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwBUIAAhsIgwBGIAAAAIgvhGIAABsIgkAAIAAinIAoAAIArBHIAthHIAnAAIAACng");
	this.shape_3.setTransform(211.3,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgGQgGgGgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgHAGgFQAGgGAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAGIAKAMQAFAHADAIQAEAIABAIQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAJgFAGQgEAIgGAGIgNAKIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_4.setTransform(190.7,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBVQgIgCgIgDQgIgDgGgEQgIgGgFgFQgGgGgFgHIgIgOQgCgIgCgJQgCgJABgIIAAgBQgBgIACgIQACgJACgIIAIgPIAKgMQAGgGAIgFQAGgFAJgDQAIgDAIgCQAIgCAKAAQALAAALACQAJACAIAEQAKAEARAOIgYAbQgKgJgJgFQgMgFgMAAQgJAAgJAEQgJAFgGAHQgHAGgEAKQgDAKAAAKIAAAAQAAALADAJQAEAKAHAHQAGAIAJADQAJAFAJAAQAKAAAPgGQAIgEAMgKIAYAYIgPAMQgHAGgHAEQgJAEgJACQgLACgMAAQgIAAgJgCg");
	this.shape_5.setTransform(171.8,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgKgDQgJgEgJgEIgQgNIAXgaQAMALALAEIANAFQAHABAFAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgGgFgUgFQgOgEgJgDQgLgEgGgFQgIgFgEgJQgEgIABgMIAAgBQgBgLAEgKQAFgJAIgGQAIgHALgEQALgDAMgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgJAAgGAEQgGAFAAAGIAAAAQAAAIAIAFQAGADAVAHQAOADAJAEQAKAFAGAEQAIAGADAIQADAIAAALIAAABQAAALgEAKQgEAKgJAHQgIAHgLADQgLAEgOgBQgJAAgJgCg");
	this.shape_6.setTransform(147.7,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAmIAFhLIAoAAIAAABIgaBKg");
	this.shape_7.setTransform(137,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_8.setTransform(125.3,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_9.setTransform(108.4,12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_10.setTransform(92.2,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBnIAAhnIAlAAIAACng");
	this.shape_11.setTransform(74.9,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAkAAIAACng");
	this.shape_12.setTransform(61.5,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmBVIgmhtIglBtIggAAIg5ioIAnAAIAjBwIAmhxIAfAAIAlBxIAjhwIAnAAIg6Cog");
	this.shape_13.setTransform(44,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298,28);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_sun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,213);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,55.6,1,1,0,0,0,111.5,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-49.4,231,221);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.5,38.3,1,1,0,0,0,116.5,106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,startPosition:28},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-68.2,233,213);


// stage content:
(lib._300x250_lastchance = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,189.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(210,189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},253).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(253).to({_off:false},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.251},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(7));

	// Layer 10
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214.5,-185,1,1,0,0,0,83.5,56);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(227).to({_off:false},0).wait(1).to({regY:66.8,y:-173.9},0).wait(1).to({y:-173.3},0).wait(1).to({y:-172},0).wait(1).to({y:-170},0).wait(1).to({y:-167.2},0).wait(1).to({y:-163.1},0).wait(1).to({y:-157.4},0).wait(1).to({y:-149.2},0).wait(1).to({y:-136.7},0).wait(1).to({y:-114.4},0).wait(1).to({y:-50},0).wait(1).to({y:9.2},0).wait(1).to({y:32.3},0).wait(1).to({y:46.4},0).wait(1).to({y:56.3},0).wait(1).to({y:63.6},0).wait(1).to({y:69.2},0).wait(1).to({y:73.6},0).wait(1).to({y:77},0).wait(1).to({y:79.7},0).wait(1).to({y:81.8},0).wait(1).to({y:83.4},0).wait(1).to({y:84.5},0).wait(1).to({y:85.2},0).wait(1).to({y:85.7},0).wait(1).to({regY:56,y:75},0).wait(45));

	// lemur
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(415.5,-53.1,1,1,-18.4,0,0,120.5,2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({_off:false},0).wait(1).to({regX:124.5,regY:152,x:466.2,y:88},0).wait(1).to({rotation:-18.3,x:464.5,y:88.2},0).wait(1).to({rotation:-18.1,x:461.6,y:88.3},0).wait(1).to({rotation:-17.7,x:457.3,y:88.6},0).wait(1).to({rotation:-17.3,x:451.5,y:88.9},0).wait(1).to({rotation:-16.8,x:444.2,y:89.4},0).wait(1).to({rotation:-16.1,x:435.2,y:89.9},0).wait(1).to({rotation:-15.3,x:424.3,y:90.6},0).wait(1).to({rotation:-14.4,x:411.3,y:91.3},0).wait(1).to({rotation:-13.3,x:396.4,y:92.1},0).wait(1).to({rotation:-12,x:379.2,y:92.8},0).wait(1).to({rotation:-10.6,x:359.8,y:93.7},0).wait(1).to({rotation:-9,x:338.3,y:94.5},0).wait(1).to({rotation:-7.3,x:314.8,y:95.2},0).wait(1).to({rotation:-5.4,x:289.4,y:95.9},0).wait(1).to({rotation:-3.5,x:262.6,y:96.4},0).wait(1).to({rotation:-1.4,x:234.8,y:96.8},0).wait(1).to({rotation:0.6,x:206.5,y:97},0).wait(1).to({rotation:2.7,x:178.1},0).wait(1).to({rotation:4.7,x:150.2,y:96.8},0).wait(1).to({rotation:6.7,x:123.2,y:96.4},0).wait(1).to({rotation:8.6,x:97.4,y:95.9},0).wait(1).to({rotation:10.4,x:72.9,y:95.2},0).wait(1).to({rotation:12.1,x:49.9,y:94.5},0).wait(1).to({rotation:13.6,x:28.4,y:93.7},0).wait(1).to({rotation:15.1,x:8.4,y:92.8},0).wait(1).to({rotation:16.4,x:-10,y:92},0).wait(1).to({rotation:17.7,x:-26.9,y:91},0).wait(1).to({rotation:18.8,x:-42.3,y:90.2},0).wait(1).to({rotation:19.9,x:-56.5,y:89.4},0).wait(1).to({rotation:20.8,x:-69.5,y:88.5},0).wait(1).to({rotation:21.7,x:-81.2,y:87.8},0).wait(1).to({rotation:22.5,x:-91.8,y:87.1},0).wait(1).to({rotation:23.2,x:-101.4,y:86.4},0).wait(1).to({rotation:23.8,x:-110.1,y:85.8},0).wait(1).to({rotation:24.4,x:-117.8,y:85.2},0).wait(1).to({rotation:24.9,x:-124.7,y:84.7},0).wait(1).to({rotation:25.4,x:-130.7,y:84.2},0).wait(1).to({rotation:25.8,x:-136,y:83.8},0).wait(1).to({rotation:26.1,x:-140.7,y:83.4},0).wait(1).to({rotation:26.4,x:-144.6,y:83.1},0).wait(1).to({rotation:26.6,x:-147.9,y:82.8},0).wait(1).to({rotation:26.8,x:-150.6,y:82.6},0).wait(1).to({rotation:27,x:-152.8,y:82.4},0).wait(1).to({rotation:27.1,x:-154.5,y:82.3},0).wait(1).to({rotation:27.2,x:-155.7,y:82.2},0).wait(1).to({rotation:27.3,x:-156.3,y:82.1},0).wait(1).to({regX:120.5,regY:2,x:-91.4,y:-53},0).to({_off:true},1).wait(41).to({_off:false,regX:124.5,regY:152,rotation:0,x:63,y:-133.9},0).wait(1).to({y:-133.7},0).wait(1).to({y:-133},0).wait(1).to({y:-131.7},0).wait(1).to({y:-129.8},0).wait(1).to({y:-126.9},0).wait(1).to({y:-122.9},0).wait(1).to({y:-117.2},0).wait(1).to({y:-109},0).wait(1).to({y:-96.4},0).wait(1).to({y:-74.2},0).wait(1).to({y:-9.7},0).wait(1).to({y:49.4},0).wait(1).to({y:72.6},0).wait(1).to({y:86.7},0).wait(1).to({y:96.6},0).wait(1).to({y:103.9},0).wait(1).to({y:109.5},0).wait(1).to({y:113.9},0).wait(1).to({y:117.3},0).wait(1).to({y:120},0).wait(1).to({y:122.1},0).wait(1).to({y:123.7},0).wait(1).to({y:124.8},0).wait(1).to({y:125.5},0).wait(1).to({y:126},0).wait(1).to({y:126.1},0).wait(48));

	// Layer 12
	this.instance_4 = new lib.Symbol13();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.5,377.5,1,1,0,0,0,115.5,110.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(224).to({_off:false},0).wait(1).to({x:8.6,y:377.4},0).wait(1).to({x:8.7,y:377},0).wait(1).to({x:8.8,y:376.3},0).wait(1).to({x:9,y:375.3},0).wait(1).to({x:9.4,y:373.7},0).wait(1).to({x:9.8,y:371.6},0).wait(1).to({x:10.5,y:368.5},0).wait(1).to({x:11.4,y:364.1},0).wait(1).to({x:12.9,y:357.3},0).wait(1).to({x:15.4,y:345.3},0).wait(1).to({x:22.9,y:310.6},0).wait(1).to({x:29.7,y:278.8},0).wait(1).to({x:32.4,y:266.3},0).wait(1).to({x:34,y:258.7},0).wait(1).to({x:35.1,y:253.4},0).wait(1).to({x:36,y:249.5},0).wait(1).to({x:36.6,y:246.4},0).wait(1).to({x:37.1,y:244.1},0).wait(1).to({x:37.5,y:242.2},0).wait(1).to({x:37.9,y:240.8},0).wait(1).to({x:38.1,y:239.6},0).wait(1).to({x:38.3,y:238.8},0).wait(1).to({x:38.4,y:238.2},0).wait(1).to({x:38.5,y:237.8},0).wait(1).to({y:237.6},0).wait(1).to({y:237.5},0).wait(48));

	// Layer 9
	this.instance_5 = new lib.Symbol11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(128.1,137.9,0.1,0.1,0,0,0,95,40.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(154).to({_off:false},0).wait(1).to({regX:115.4,regY:30.8,scaleX:0.15,scaleY:0.15,x:131.1,y:136.4},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:132.6,y:135.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:134.8,y:134.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:138,y:133.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:141.1,y:131.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:143,y:130.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:144.3,y:130.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:145.3,y:129.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:146,y:129.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:146.6,y:129.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:147,y:128.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:147.4,y:128.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:147.7,y:128.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:147.9,y:128.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:148.1,y:128.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:148.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:148.3,y:128.2},0).wait(1).to({scaleX:1,scaleY:1,x:148.4},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:148.5},0).wait(1).to({regX:95,regY:40,x:128.1,y:137.9},0).wait(50).to({regX:115.4,regY:30.8,x:148.5,y:128.8},0).wait(1).to({y:129.2},0).wait(1).to({y:130.1},0).wait(1).to({y:131.3},0).wait(1).to({y:133.2},0).wait(1).to({y:135.9},0).wait(1).to({y:139.6},0).wait(1).to({y:145},0).wait(1).to({y:153.1},0).wait(1).to({y:167.7},0).wait(1).to({y:209.8},0).wait(1).to({y:248.5},0).wait(1).to({y:263.7},0).wait(1).to({y:272.9},0).wait(1).to({y:279.3},0).wait(1).to({y:284.1},0).wait(1).to({y:287.8},0).wait(1).to({y:290.7},0).wait(1).to({y:292.9},0).wait(1).to({y:294.7},0).wait(1).to({y:296},0).wait(1).to({y:297.1},0).wait(1).to({y:297.8},0).wait(1).to({y:298.3},0).wait(1).to({y:298.6},0).wait(1).to({regX:95,regY:40,x:128.1,y:307.9},0).wait(48));

	// Layer 4
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,124.7,0.15,0.15,0,0,0,149,14.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).wait(1).to({regX:148.6,regY:12.8,scaleX:0.15,scaleY:0.15,y:124.4},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:149.9},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:124.3},0).wait(1).to({scaleX:0.23,scaleY:0.23},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:124.2},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:149.8,y:123.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:149.7,y:123.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:123.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:149.6,y:123.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:123.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:123},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:122.9},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({regX:148.9,regY:14,scaleX:1.1,scaleY:1.1,x:150,y:124.7},0).wait(53).to({regX:148.6,regY:12.8,scaleX:1.1,scaleY:1.1,x:149.7,y:123.4,alpha:0.996},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.982},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.956},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.914},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:123.5,alpha:0.852},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:123.6,alpha:0.766},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:149.8,y:123.8,alpha:0.65},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:123.9,alpha:0.511},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:124.1,alpha:0.369},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:149.9,y:124.2,alpha:0.248},0).wait(1).to({scaleX:0.26,scaleY:0.26,y:124.3,alpha:0.156},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:150,y:124.4,alpha:0.091},0).wait(1).to({scaleX:0.16,scaleY:0.16,y:124.5,alpha:0.047},0).wait(1).to({scaleX:0.13,scaleY:0.13,alpha:0.019},0).wait(1).to({scaleX:0.11,scaleY:0.11,alpha:0.004},0).wait(1).to({regX:149.1,regY:14.1,scaleX:0.11,scaleY:0.11,y:124.7,alpha:0},0).wait(178));

	// snow circ
	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.5,132.6,1,1,0,0,0,55.3,61.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).wait(1).to({alpha:0.09,startPosition:1},0).wait(1).to({alpha:0.207,startPosition:2},0).wait(1).to({alpha:0.351,startPosition:3},0).wait(1).to({alpha:0.503,startPosition:4},0).wait(1).to({alpha:0.641,startPosition:5},0).wait(1).to({alpha:0.751,startPosition:6},0).wait(1).to({alpha:0.834,startPosition:7},0).wait(1).to({alpha:0.895,startPosition:8},0).wait(1).to({alpha:0.938,startPosition:9},0).wait(1).to({alpha:0.968,startPosition:10},0).wait(1).to({alpha:0.987,startPosition:11},0).wait(1).to({alpha:0.997,startPosition:12},0).wait(1).to({alpha:1,startPosition:13},0).wait(28).to({startPosition:40},0).to({alpha:0,startPosition:23},8,cjs.Ease.get(1)).wait(140));

	// sun circle
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.6,125.5,1,1,0,0,0,45.5,38.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(34).to({startPosition:34},0).to({alpha:0.441,startPosition:52},18,cjs.Ease.get(1)).wait(48).to({startPosition:40},0).to({alpha:0,startPosition:7},10).wait(188));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27988A").s().p("A3dTiMAAAgnDMAu7AAAMAAAAnDg");
	this.shape.setTransform(150.2,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(298));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.4,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_lastchance_atlas_.png", id:"300x250_lastchance_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;