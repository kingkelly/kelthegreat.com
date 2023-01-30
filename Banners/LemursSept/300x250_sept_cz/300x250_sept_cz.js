(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_sept_cz_atlas_", frames: [[0,0,276,275],[278,0,213,157],[0,277,293,233],[278,159,97,50]]}
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



(lib.bb_lemur = function() {
	this.spriteSheet = ss["300x250_sept_cz_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_pattern1 = function() {
	this.spriteSheet = ss["300x250_sept_cz_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_pattern2 = function() {
	this.spriteSheet = ss["300x250_sept_cz_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["300x250_sept_cz_atlas_"];
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pattern1();
	this.instance.parent = this;
	this.instance.setTransform(-28.9,-129.1,1,1,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.8,-129.1,263.8,258.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pattern1();
	this.instance.parent = this;
	this.instance.setTransform(-28.9,-129.1,1,1,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.8,-129.1,263.8,258.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,97,50), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgKAwIAAgWIAVAAIAAAWgAgKARIAAhAIAVAAIAABAg");
	this.shape.setTransform(154.9,66.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AgaAwIAAhfIA1AAIAAAWIgcAAIAAAOIAcAAIAAAVIgcAAIAAARIAcAAIAAAVg");
	this.shape_1.setTransform(149.4,66.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AATAwIgkg5IABA5IgYAAIAAhfIAWAAIAkA6IgBg6IAYAAIAABfg");
	this.shape_2.setTransform(140.9,66.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("AgMAwIAAhfIAYAAIAABfg");
	this.shape_3.setTransform(134,66.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AgZAwIAAhfIAYAAIAABKIAbAAIAAAVg");
	this.shape_4.setTransform(129.2,66.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AATAwIgkg5IABA5IgYAAIAAhfIAWAAIAkA6IgBg6IAYAAIAABfg");
	this.shape_5.setTransform(120.6,66.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgKAxIgKgDIgIgFIgIgGIgGgHIgEgJIgDgJIgBgJIABgKIAEgLQABgEADgEIAHgHIAHgGIAJgEIAJgDIAJgBIALABIAJADIAJAEIAIAHIAGAIIAEAIIADAJIABAJIgBAKIgDAJIgEAJIgGAHIgIAGIgJAFIgJADIgLABIgKgBgAgKgZQgFADgDAEQgEADgBAGQgCAEAAAFIAAAAQAAAGACAFIAFAJQADADAFADQAFACAFABQAHAAAFgDQAEgDAEgEIAFgJQABgFAAgFQAAgEgBgEQgCgGgDgEQgEgEgEgDQgGgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(110.2,66.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgLAwIAAgjIgdg8IAbAAIANAnIAPgnIAaAAIgcA8IAAAjg");
	this.shape_7.setTransform(96.5,66.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgMAvIgIgDIgHgGIgEgGIgDgGQgBgFgBgMIAAg5IAYAAIAAA5QABAIABADIAEAGQADACADAAQAEAAADgCQADgCABgDQABgEAAgIIAAg5IAZAAIAAA5IgBAKIgCAJIgDAGIgEAEQgGAGgFACIgIACIgHABQgHAAgGgCg");
	this.shape_8.setTransform(87.8,66.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AgjAwIAAhfIAjAAQAHAAAGACQAFABAFADQAEADACAFQADAFAAAGQAAAGgDAFIgDAFIgGADQAQAFAAARQAAAGgCAFQgDAGgEADIgGAFQgDACgDABIgSABgAgKAbIAKAAIAIgBQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAgBIgDgCIgIgBIgKAAgAgKgLIAJAAIAFgBIADgCIABgEIgBgFIgDgBIgFgBIgJAAg");
	this.shape_9.setTransform(79.3,66.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgMAvIgHgDIgIgGIgEgGIgDgGQgBgFgBgMIAAg5IAZAAIAAA5QgBAIACADIAEAGQADACADAAQAEAAADgCQADgCAAgDQACgEAAgIIAAg5IAZAAIAAA5IgBAKIgBAJIgEAGIgEAEQgGAGgFACIgIACIgIABQgGAAgGgCg");
	this.shape_10.setTransform(66.3,66.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgKAxIgKgDIgIgFIgIgGIgGgHIgEgJIgDgJIgBgJIABgKIAEgLQABgEADgEIAHgHIAHgGIAJgEIAJgDIAJgBIALABIAJADIAJAEIAIAHIAGAIIAEAIIADAJIABAJIgBAKIgDAJIgEAJIgGAHIgIAGIgJAFIgJADIgLABIgKgBgAgKgZQgFADgDAEQgEADgBAGQgCAEAAAFIAAAAQAAAGACAFIAFAJQADADAFADQAFACAFABQAHAAAFgDQAEgDAEgEIAFgJQABgFAAgFQAAgEgBgEQgCgGgDgEQgEgEgEgDQgGgCgGAAQgFAAgFACg");
	this.shape_11.setTransform(56.2,66.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgLAwIAAgjIgdg8IAbAAIANAnIAPgnIAaAAIgcA8IAAAjg");
	this.shape_12.setTransform(46.5,66.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AATAwIgkg5IABA5IgYAAIAAhfIAWAAIAkA6IgBg6IAYAAIAABfg");
	this.shape_13.setTransform(33.4,66.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AgaAwIAAhfIA1AAIAAAWIgcAAIAAAOIAcAAIAAAVIgcAAIAAARIAcAAIAAAVg");
	this.shape_14.setTransform(25.2,66.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("AAQAwIAAgmIgfAAIAAAmIgYAAIAAhfIAYAAIAAAkIAfAAIAAgkIAZAAIAABfg");
	this.shape_15.setTransform(16.7,66.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6B333").s().p("AAPAwIgPg+IgOA+IgWAAIgZhfIAZAAIANA9IAPg9IARAAIAPA9IANg9IAZAAIgaBfg");
	this.shape_16.setTransform(5.4,66.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQBqIgQgEIgNgHQgGgDgFgFQgJgKgEgNQgEgOABgPIA0AAQAAAJADAFQACAGAEADQAFAFAHAAQAJAAAGgGQAFgGAAgHQAAgIgIgGQgGgEgagKQgygUAAgnQAAgHACgIIAEgMQAGgMALgIQAKgIANgFQANgDAMAAQAMgBALADQANAEAKAHQALAIAGAMQADAGACAHIACASIg0AAQgDgVgQABQgHAAgFAEQgFAFAAAHQAAAHAHAEQAGAEAcAOQAPAGAJAHQAKAFAFAIQAFAHADAIQACAIAAAJQAAANgEALQgEAMgIAKQgJAJgNAFQgVAHgNAAg");
	this.shape_17.setTransform(134.8,41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWBqQgLgCgKgFQgKgEgJgGQgJgGgHgIQgHgHgGgIQgGgJgEgKQgEgJgCgLQgCgLAAgKQAAgMACgKQACgLAEgKQAEgKAHgIQAFgIAIgIQAIgGAJgGQAIgGAKgDQAKgEALgDQALgCAKABQANAAAXAFQALAEAUAMQANAKAKANQAKAOAEAOIg7AAQgFgHgGgGQgHgHgIgCQgKgEgJAAQgKAAgKAEQgKADgIAIQgJAHgEAMQgFAMAAAOQAAAPAFAMQAEAMAJAHQAIAIAKADQAKAFAKAAQAJgBAIgCQAIgCAHgFQAGgEAEgGQAFgHACgHIg9AAIAAgqIB6AAQABANgCAOQgCASgHAOQgDAJgFAHIgLANQgLAMgPAHQgNAHgPAFQgOADgNAAQgLAAgLgCg");
	this.shape_18.setTransform(114.9,41.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AApBoIhOh8IABB8IgyAAIAAjPIAuAAIBOB+IgBh+IAyAAIAADPg");
	this.shape_19.setTransform(92.3,41.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZBoIAAjPIA0AAIAADPg");
	this.shape_20.setTransform(77.2,41.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbBoIhEjPIA2AAIApCRIAqiRIA2AAIhFDPg");
	this.shape_21.setTransform(62.6,41.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAuBoIgKgeIhIAAIgJAeIg6AAIBSjPIAtAAIBQDPgAAWAgIgWhHIgWBHIAsAAg");
	this.shape_22.setTransform(41.9,41.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQBqIgQgEIgNgHQgGgDgFgFQgJgKgEgNQgEgOABgPIA0AAQAAAJADAFQACAGAEADQAFAFAHAAQAJAAAGgGQAFgGAAgHQAAgIgIgGQgGgEgagKQgygUAAgnQAAgHACgIIAEgMQAGgMALgIQAKgIANgFQANgDAMAAQAMgBALADQANAEAKAHQALAIAGAMQADAGACAHIACASIg0AAQgDgVgQABQgHAAgFAEQgFAFAAAHQAAAHAHAEQAGAEAcAOQAPAGAJAHQAKAFAFAIQAFAHADAIQACAIAAAJQAAANgEALQgEAMgIAKQgJAJgNAFQgVAHgNAAg");
	this.shape_23.setTransform(23.3,41.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4BoIAAjPIA1AAIAACgIA8AAIAAAvg");
	this.shape_24.setTransform(104.4,12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag4BoIAAjPIA1AAIAACgIA8AAIAAAvg");
	this.shape_25.setTransform(90.8,12.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAuBoIgKgeIhIAAIgJAeIg5AAIBSjPIAsAAIBQDPgAAWAgIgWhHIgXBHIAtAAg");
	this.shape_26.setTransform(72.5,12.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag4BoIAAjPIBxAAIAAAvIg8AAIAAAjIA5AAIAAAuIg5AAIAABPg");
	this.shape_27.setTransform(55.3,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-3,0,162.1,77), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pattern2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,293,233), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBMIgMgDIgJgFIgHgGQgHgHgDgJQgDgKABgLIAlAAQAAAGACAFIAEAFQAEAEAFAAQAGAAAEgFQAEgEAAgFQAAgGgGgDQgEgDgSgIQgkgOAAgbQAAgGABgFQABgEADgFQAEgIAIgGQAHgGAJgDQAJgDAJAAQAIAAAIACQAJADAHAFQAIAGAEAIIAEAKIACAMIgmAAQgCgOgLAAQgFAAgDADQgEAEAAAEQAAAFAFAEIAYAMQAKAEAHAFQAHAEAEAFQAEAFABAHQACAEAAAIQAAAJgDAIQgDAJgFAGQgHAHgJAEQgPAEgKAAg");
	this.shape.setTransform(121.3,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBLQgIgBgHgDQgHgDgHgEIgLgKQgGgFgEgHIgHgMQgDgIgBgHQgCgIAAgHQAAgIACgHQABgIAEgHQACgHAFgGIAKgLQAFgGAGgDQAHgEAHgDQAHgDAIgCQAHgBAHAAQAJAAARAFQAIACAOAJQAKAHAGAKQAHAJADAKIgqAAIgIgJQgFgEgGgDQgGgDgHABQgHgBgHADQgHADgGAFQgGAFgDAJQgEAIAAAKQAAAKAEAKQADAHAGAGQAGAGAHACQAHADAHAAQAHAAAFgCQAGgBAFgEQAEgDADgEQAEgFABgFIgrAAIAAgdIBXAAQAAAJgBAKQgCANgEAJIgGAMIgIAJQgIAIgKAGQgKAFgLACQgKADgJAAIgPgCg");
	this.shape_1.setTransform(107.1,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBKIg4hYIABBYIgkAAIAAiTIAgAAIA4BZIgBhZIAkAAIAACTg");
	this.shape_2.setTransform(90.9,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBKIAAiTIAlAAIAACTg");
	this.shape_3.setTransform(80.1,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBKIgyiTIAnAAIAdBnIAehnIAnAAIgyCTg");
	this.shape_4.setTransform(69.7,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBKIgHgVIg0AAIgGAVIgpAAIA6iTIAgAAIA5CTgAAQAWIgQgyIgQAyIAgAAg");
	this.shape_5.setTransform(55,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLBMIgMgDIgJgFIgHgGQgHgHgDgJQgDgKABgLIAlAAQAAAGACAFIAEAFQAEAEAFAAQAGAAAEgFQAEgEAAgFQAAgGgGgDQgEgDgSgIQgkgOAAgbQAAgGABgFQABgEADgFQAEgIAIgGQAHgGAJgDQAJgDAJAAQAIAAAIACQAJADAHAFQAIAGAEAIIAEAKIACAMIgmAAQgCgOgLAAQgFAAgDADQgEAEAAAEQAAAFAFAEIAYAMQAKAEAHAFQAHAEAEAFQAEAFABAHQACAEAAAIQAAAJgDAIQgDAJgFAGQgHAHgJAEQgPAEgKAAg");
	this.shape_6.setTransform(41.6,25.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAmAAIAAByIArAAIAAAhg");
	this.shape_7.setTransform(25.6,25.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIAmAAIAAByIArAAIAAAhg");
	this.shape_8.setTransform(15.9,25.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgBKIgHgVIgyAAIgHAVIgpAAIA7iTIAfAAIA5CTgAAPAWIgPgyIgQAyIAfAAg");
	this.shape_9.setTransform(2.8,25.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBKIAAiTIBPAAIAAAhIgqAAIAAAaIApAAIAAAgIgpAAIAAA4g");
	this.shape_10.setTransform(-9.5,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-17,16,146.1,24), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBGIAAiLIBPAAIAAAfIgrAAIAAAWIAqAAIAAAfIgqAAIAAAYIArAAIAAAfg");
	this.shape.setTransform(112.4,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBHQgIgBgGgDIgNgHIgLgJIgJgLQgDgGgDgHQgDgGgBgHIgBgOIABgNIADgNQADgGAEgGIAIgLIAKgJQAHgFAHgDQAGgDAIgBIAPgCIAQABQAHACAGADQAJADANALQAGAFAIANQAFAJACAJIgmAAIgEgIIgHgIIgKgGQgGgCgHAAQgIAAgHADQgHAEgFAGQgEAFgDAIQgDAHABAHQgBAIADAHQADAIAFAFQAFAHAGADQAIADAHAAQAWAAAMgXIAmAAIgFAMIgFAKQgKANgGAFQgNAIgIADQgQAEgJAAQgHAAgHgCg");
	this.shape_1.setTransform(99.3,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBGIg0hTIAABTIgiAAIAAiLIAeAAIA1BUIAAhUIAiAAIAACLg");
	this.shape_2.setTransform(84.2,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBGIAAiLIBPAAIAAAfIgrAAIAAAWIApAAIAAAfIgpAAIAAAYIArAAIAAAfg");
	this.shape_3.setTransform(72.2,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRBGIAAiLIAjAAIAACLg");
	this.shape_4.setTransform(63.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASBGIgjhEIAGAAIALAAQAGgBADgBQAEgDACgEQACgFAAgGQAAgFgCgEQgCgFgEgCQgGgEgIAAIgNAAIAABsIgkAAIAAiLIAuAAQAKAAAQACQAKADAGAFIAIAHIAFAKQADAEABAGIABALQAAAIgCAHIgFAKQgEAFgFAEIgKAGIAdAzg");
	this.shape_5.setTransform(55.2,38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBGIAAiLIBPAAIAAAfIgrAAIAAAWIApAAIAAAfIgpAAIAAAYIArAAIAAAfg");
	this.shape_6.setTransform(43.7,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIAuAAQAMAAAQACQAIADAHAFIAHAIIAFAJIADAKIABAKQgBAPgDAGIgEAIIgHAHQgHAHgJACQgOADgKAAIgOAAIAAAsgAgQgEIANAAQAJAAAEgCQAEgCACgEQADgDAAgGQAAgGgDgEQgCgDgEgCQgFgCgJAAIgMAAg");
	this.shape_7.setTransform(33,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBGIgdgyIgdAyIgoAAIAyhKIgshBIAoAAIAYAoIAXgoIAoAAIgrBCIAxBJg");
	this.shape_8.setTransform(19.2,38);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBGIAAiLIBPAAIAAAfIgrAAIAAAWIApAAIAAAfIgpAAIAAAYIArAAIAAAfg");
	this.shape_9.setTransform(7.3,38);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZBoIAAhMIg+iDIA5AAIAeBUIAghUIA4AAIg9CDIAABMg");
	this.shape_10.setTransform(71.9,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag4BoIAAjPIA1AAIAACgIA8AAIAAAvg");
	this.shape_11.setTransform(57,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BoIAAjPIA1AAIAACgIA8AAIAAAvg");
	this.shape_12.setTransform(43.4,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBlQgJgCgHgEQgJgFgFgGIgLgOQgEgHgCgHQgDgKgCgaIAAh9IA1AAIAAB9QAAAQAFAJQACAGAGAEQAGAEAHAAQAKAAAFgEQAGgDADgGQADgIAAgSIAAh9IA0AAIAAB9IAAAWIgEASQgDAGgEAGIgJALQgOANgLAEQgGADgJABQgIACgKAAQgOAAgOgFg");
	this.shape_13.setTransform(25.9,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4BoIAAjPIBxAAIAAAvIg8AAIAAAjIA5AAIAAAuIg5AAIAABPg");
	this.shape_14.setTransform(9.5,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,150,52), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;
	this.instance.setTransform(-14,-9,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-14,-9,303.6,302.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(75,26,1,1,0,0,0,75,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,150,52), null);


// stage content:
(lib._300x250_sept_cz = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// endtext
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(96.1,-38.2,1,1,0,0,0,79,30.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156).to({_off:false},0).wait(1).to({regX:77.6,regY:36.9,x:94.7,y:-31.3},0).wait(1).to({y:-29.5},0).wait(1).to({y:-25.7},0).wait(1).to({y:-18},0).wait(1).to({y:-0.9},0).wait(1).to({y:33.7},0).wait(1).to({y:57.2},0).wait(1).to({y:70.2},0).wait(1).to({y:78.7},0).wait(1).to({y:84.7},0).wait(1).to({y:89},0).wait(1).to({y:92.3},0).wait(1).to({y:94.7},0).wait(1).to({y:96.5},0).wait(1).to({y:97.7},0).wait(1).to({y:98.6},0).wait(1).to({y:99},0).wait(1).to({regX:79,regY:30.5,x:96.1,y:92.8},0).wait(43));

	// Layer 6
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(172,234.4,1,1,0,0,0,79,16);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).wait(1).to({regX:56.5,regY:25.4,x:149.5,y:243.7,alpha:0.001},0).wait(1).to({y:243.6,alpha:0.005},0).wait(1).to({y:243.4,alpha:0.013},0).wait(1).to({y:243.1,alpha:0.025},0).wait(1).to({y:242.6,alpha:0.044},0).wait(1).to({y:241.8,alpha:0.073},0).wait(1).to({y:240.6,alpha:0.118},0).wait(1).to({y:238.3,alpha:0.2},0).wait(1).to({y:232.1,alpha:0.433},0).wait(1).to({y:224.8,alpha:0.702},0).wait(1).to({y:222.1,alpha:0.801},0).wait(1).to({y:220.5,alpha:0.86},0).wait(1).to({y:219.5,alpha:0.899},0).wait(1).to({y:218.7,alpha:0.928},0).wait(1).to({y:218.1,alpha:0.949},0).wait(1).to({y:217.7,alpha:0.966},0).wait(1).to({y:217.4,alpha:0.978},0).wait(1).to({y:217.1,alpha:0.987},0).wait(1).to({y:216.9,alpha:0.993},0).wait(1).to({y:216.8,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:79,regY:16,x:172,y:207.4,alpha:1},0).wait(51).to({y:218.4,alpha:0},7,cjs.Ease.get(1)).wait(62));

	// Layer 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,279.5,1,1,0,0,0,75,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:59.8,regY:23.6,x:77.8,y:274.1},0).wait(1).to({y:271.2},0).wait(1).to({y:266.8},0).wait(1).to({y:260.2},0).wait(1).to({y:250.6},0).wait(1).to({y:238.6},0).wait(1).to({y:228},0).wait(1).to({y:220.5},0).wait(1).to({y:215.4},0).wait(1).to({y:211.8},0).wait(1).to({y:209.4},0).wait(1).to({y:207.8},0).wait(1).to({y:206.8},0).wait(1).to({y:206.2},0).wait(1).to({regX:75,regY:26,x:93,y:208.5},0).wait(60).to({regX:59.8,regY:23.6,x:77.8,y:234.6},0).wait(1).to({y:252.9},0).wait(1).to({y:265.5},0).wait(1).to({y:274.5},0).wait(1).to({y:281},0).wait(1).to({y:285.8},0).wait(1).to({y:289.4},0).wait(1).to({y:292.1},0).wait(1).to({y:294.5},0).wait(1).to({y:296.6},0).wait(1).to({y:298.9},0).wait(1).to({y:301.7},0).wait(1).to({y:305.1},0).wait(1).to({y:309.8},0).wait(1).to({regX:75,regY:26,x:93,y:318.5},0).wait(128));

	// lemur
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(203,-152.5,1,1,0,0,0,138,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:137.8,regY:142.2,x:202.8,y:-129.9},0).wait(1).to({y:-106.8},0).wait(1).to({y:-77.3},0).wait(1).to({y:-41.6},0).wait(1).to({y:-3.3},0).wait(1).to({y:31.4},0).wait(1).to({y:59.7},0).wait(1).to({y:81.7},0).wait(1).to({y:98.7},0).wait(1).to({y:112},0).wait(1).to({y:122.5},0).wait(1).to({y:130.7},0).wait(1).to({y:137},0).wait(1).to({y:141.9},0).wait(1).to({y:145.5},0).wait(1).to({y:148.2},0).wait(1).to({y:149.9},0).wait(1).to({y:150.9},0).wait(1).to({regX:138,regY:137.5,x:203,y:146.5},0).wait(1).to({regX:137.8,regY:142.2,x:202.8,y:151.2},0).wait(1).to({y:151.1},0).wait(1).to({y:150.8},0).wait(1).to({y:150.4},0).wait(1).to({y:149.7},0).wait(1).to({y:148.3},0).wait(1).to({y:145.7},0).wait(1).to({y:143.9},0).wait(1).to({y:143.1},0).wait(1).to({y:142.6},0).wait(1).to({y:142.4},0).wait(1).to({y:142.2},0).wait(1).to({regX:138,regY:137.5,x:203,y:137.5},0).wait(39).to({regX:137.8,regY:142.2,x:202.7,y:142.2},0).wait(1).to({scaleX:1,scaleY:1,x:202.4,y:142},0).wait(1).to({scaleX:1,scaleY:1,x:201.9,y:141.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:201.1,y:141},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:199.8,y:140.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:197.8,y:138.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:194.8,y:136.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:189.9,y:133.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:180.8,y:126.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:169.9,y:119},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:163.4,y:114.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:159.7,y:111.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:157.2,y:110.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:155.6,y:109},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:154.5,y:108.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:153.8,y:107.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:153.3,y:107.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:153,y:107.1},0).wait(1).to({regX:138.2,regY:137.6,x:153.2,y:103.6},0).wait(59).to({regX:137.8,regY:142.2,x:153,y:107.1},0).wait(1).to({x:153.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:154.1,y:107.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:155.3,y:107.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:156.9,y:107.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:159.2,y:108},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:162.4,y:108.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:166.8,y:109.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:172.9,y:110.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:181.9,y:111.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:196,y:113.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:215.1,y:116.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:230.2,y:118.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:239.2,y:120.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:244.7,y:121.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:248.3,y:121.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:250.5,y:122},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:251.9,y:122.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:252.6,y:122.4},0).wait(1).to({regX:138.2,regY:137.6,x:253.1,y:118.6},0).wait(50));

	// logo
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(96.5,189,1,1,0,0,0,48.5,25);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(23));

	// pattern2
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(305.5,218.5,1,1,0,0,0,146.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(149).to({x:305.4},0).wait(1).to({rotation:0.1,x:305,y:218.4},0).wait(1).to({rotation:0.2,x:304.2,y:218.2},0).wait(1).to({rotation:0.3,x:302.9,y:217.9},0).wait(1).to({rotation:0.6,x:300.9,y:217.5},0).wait(1).to({rotation:1,x:297.8,y:216.8},0).wait(1).to({rotation:1.6,x:292.7,y:215.6},0).wait(1).to({rotation:2.6,x:284.5,y:213.8},0).wait(1).to({rotation:3.7,x:275.9,y:211.9},0).wait(1).to({rotation:4.3,x:270.8,y:210.7},0).wait(1).to({rotation:4.7,x:268,y:210.1},0).wait(1).to({rotation:4.9,x:266.4,y:209.8},0).wait(1).to({rotation:5,x:265.7,y:209.6},0).wait(1).to({regX:146.6,x:265.6,y:209.5},0).wait(55));

	// pattern1
	this.instance_6 = new lib.bb_pattern1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-15.4,-102.6,1,1,41);

	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(13.5,26.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-86.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},148).to({state:[{t:this.instance_8}]},7).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(148).to({_off:false},0).to({_off:true,x:-86.5,y:6.5},7,cjs.Ease.get(-1)).wait(62));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C4D4D").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.7,-174,570.4,634);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_sept_cz_atlas_.png", id:"300x250_sept_cz_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;