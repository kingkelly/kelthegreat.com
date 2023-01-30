(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_hubcap_en_atlas_", frames: [[0,504,267,230],[0,252,388,250],[193,736,191,186],[0,0,414,250],[0,736,191,186]]}
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



(lib.Cars3Logo_1080 = function() {
	this.spriteSheet = ss["300x250_hubcap_en_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CT_Kids = function() {
	this.spriteSheet = ss["300x250_hubcap_en_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hubcap_blur = function() {
	this.spriteSheet = ss["300x250_hubcap_en_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hubcap_car = function() {
	this.spriteSheet = ss["300x250_hubcap_en_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.hubcap_wheel = function() {
	this.spriteSheet = ss["300x250_hubcap_en_atlas_"];
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
	this.instance = new lib.hubcap_wheel();
	this.instance.parent = this;
	this.instance.setTransform(-95.5,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-93,191,186);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hubcap_wheel();
	this.instance.parent = this;
	this.instance.setTransform(-95.5,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-93,191,186);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hubcap_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,186);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hubcap_car();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,414,250), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA1IgYhDIgXBDIgUAAIgkhoIAZAAIAWBFIAXhGIATAAIAYBGIAVhFIAZAAIgkBog");
	this.shape.setTransform(100.2,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgGIgHgIIgFgJIgDgLIgBgLIAAAAIABgKIADgKIAFgKIAHgIIAIgGIAKgFIAKgDIALgCQAGAAAGACIALADIAJAFIAIAGIAHAIIAFAJIADALIABAKIAAAAIgBALIgDAKIgFAKIgHAIIgIAGIgKAFIgKADIgMABQgFAAgGgBgAgMgeQgGADgEAFQgEAEgCAGQgDAGAAAGIAAAAQAAAGADAHQACAGAEAFQAFAEAFADQAGACAGAAQAHAAAGgCQAGgDAEgEQAEgFACgGQADgGAAgHIAAAAQAAgGgDgGQgCgFgEgFQgFgFgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_1.setTransform(86,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbA0IgyhBIAABBIgXAAIAAhnIAWAAIAwA/IAAg/IAXAAIAABng");
	this.shape_2.setTransform(73.7,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA0IAAhnIArAAQAJAAAIACQAGADAGAFQAFAFADAGQACAHAAAIIAAAJIgDAGQgDAHgGAFQgFAEgIACQgIADgIAAIgRAAIAAAfgAgRAAIARAAIAIAAIAFgDQADgCABgDQABgDABgDIAAgBQgBgDgBgDIgEgGQgCgCgDgBIgIAAIgRAAg");
	this.shape_3.setTransform(58.7,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLA1IgLgDIgJgFIgIgGIgHgIIgFgJIgDgLIgBgLIAAAAIABgKIADgKIAFgKIAHgIIAIgGIAKgFIAKgDIALgCQAGAAAGACIALADIAJAFIAIAGIAHAIIAFAJIADALIABAKIAAAAIgBALIgDAKIgFAKIgHAIIgIAGIgKAFIgKADIgMABQgFAAgGgBgAgMgeQgGADgEAFQgEAEgCAGQgDAGAAAGIAAAAQAAAGADAHQACAGAEAFQAFAEAFADQAGACAGAAQAHAAAGgCQAGgDAEgEQAEgFACgGQADgGAAgHIAAAAQAAgGgDgGQgCgFgEgFQgFgFgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_4.setTransform(46.9,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA0IAAgpIgqAAIAAApIgWAAIAAhnIAWAAIAAApIAqAAIAAgpIAYAAIAABng");
	this.shape_5.setTransform(34.9,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA1IgLgDIgMgGQgFgDgFgEIAOgQQAHAGAIADIAHADIAIAAQAHABAFgDQADgDABgEQgBgFgDgDQgFgDgLgDIgPgFIgLgFQgEgDgDgFQgDgGABgHIAAAAQAAgIACgGQADgFAFgFQAFgDAGgCQAHgDAIAAIAKABIAKADIAKADIAIAHIgLARQgIgFgHgDQgGgCgGAAQgHAAgDACQgEADAAAEIAAAAQAAAFAFADQAFACAMADIAOAGQAHACAEACQAEAFACAEQACAGABAGIAAABQgBAHgDAGQgCAHgGADQgEAEgHADQgIACgIAAIgLgBg");
	this.shape_6.setTransform(24.3,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("Ap6C5IAAlxIT1AAIAAFxg");
	this.shape_7.setTransform(63.5,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,37);


(lib.Symbol7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0DPAIAAlhIAnAAIAAy+IgnAAIAAlgMAoHAAAIAAFgIgKAAIAAS+IAKAAIAAFhgAuiJfIdiAAIAAy+I9iAAg");
	this.shape.setTransform(93.1,32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.CT_Kids();
	this.instance.parent = this;
	this.instance.setTransform(-3,-31,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A30UAMAAAgn/MAvpAAAMAAAAn/g");
	this.shape_1.setTransform(95.5,64.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-56.9,-63.9,305,256), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-6,0,6).s().p("AxzA8IAAh3MAjnAAAIAAB3g");
	this.shape.setTransform(115,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AgNA/IAAhkIgmAAIAAgZIBnAAIAAAZIgmAAIAABkg");
	this.shape_1.setTransform(155.4,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AAmBAIgMgdIg0AAIgMAdIgcAAIA2h+IAZAAIA2B+gAAQALIgQgoIgQAoIAgAAg");
	this.shape_2.setTransform(144.2,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AAdBAIgdhSIgcBSIgXAAIgsh+IAeAAIAaBUIAchVIAXAAIAcBVIAbhUIAcAAIgrB+g");
	this.shape_3.setTransform(121.6,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgNBAIgNgEIgMgGIgJgIQgEgEgEgGIgGgLQgCgFgCgGIgBgOIAAAAIABgMQACgGACgHIAGgLIAIgJIAKgIIALgGIANgEIANgBIAOABIANAEIALAGIAKAIQAEAEAEAFIAGALIAEANIABAMIAAAAIgBANQgCAHgCAFIgGALIgIAKIgKAIIgLAGIgNAEIgOABIgNgBgAgPgkQgHADgEAGQgFAFgDAIQgDAHAAAHIAAAAQAAAIADAHQADAHAFAGQAFAFAHADQAHAEAHAAQAJAAAGgEQAHgDAGgFQAEgGADgHQADgHAAgIIAAAAQAAgHgDgHQgDgIgEgFQgGgGgHgDQgHgCgIAAQgHAAgIACg");
	this.shape_4.setTransform(104.6,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AAgA/Ig7hPIAABPIgcAAIAAh9IAZAAIA7BNIAAhNIAbAAIAAB9g");
	this.shape_5.setTransform(89.9,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(1,5,228,22), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-6,0,6).s().p("AxzA8IAAh3MAjnAAAIAAB3g");
	this.shape.setTransform(115,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AgKA/QgHgBgHgCIgNgHIgMgJIARgTQAJAIAIADIAKAEIAJABQAJgBAFgDQAEgDAAgGIAAAAQAAgGgEgDQgGgDgOgEIgRgFQgIgDgFgEQgGgEgDgGQgDgHAAgJIAAAAQAAgJAEgGQADgHAGgGQAGgEAIgDQAIgDAJAAQAGAAAHABIAMAEIALAEIAKAHIgOAVQgJgGgIgDQgIgEgHABQgIgBgEAEQgEADAAAEIAAABQAAAGAFADQAFAEAQAEQAKACAHADQAIAEAFADQAFAFACAFQADAHAAAHQAAAKgDAIQgEAHgGAEQgGAFgJADQgIADgKAAQgHAAgHgCg");
	this.shape_1.setTransform(172.6,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AgHBAIgMgEIgMgGIgKgIQgEgEgDgFQgEgFgCgGQgCgGgBgGQgCgGAAgIIAAAAQAAgGACgGQABgGACgHIAGgLIAIgJQAEgFAGgDIALgGIAMgEIANgBIAPABQAHABAHADQAHACANAKIgRAVQgIgHgGgCQgJgDgKAAQgGAAgHACQgHADgEAGQgFAFgDAIQgDAHAAAHIAAAAQAAAIADAIQADAHAFAFQAFAGAHADQAHADAHAAQAIAAAGgCQAHgCAFgDIAAgSIgbAAIAAgYIA2AAIAAA2QgOALgJAEIgOADIgQACIgOgBg");
	this.shape_2.setTransform(159.8,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AAhA/Ig8hPIAABPIgcAAIAAh9IAaAAIA6BNIAAhNIAbAAIAAB9g");
	this.shape_3.setTransform(145.8,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AgNA/IAAh9IAbAAIAAB9g");
	this.shape_4.setTransform(135.7,15.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AAaA/IAAgyIgyAAIAAAyIgcAAIAAh9IAcAAIAAAyIAyAAIAAgyIAbAAIAAB9g");
	this.shape_5.setTransform(125.8,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgNA/IAAhkIgmAAIAAgZIBnAAIAAAZIgmAAIAABkg");
	this.shape_6.setTransform(113.2,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgsA/IAAh9IAcAAIAABkIA9AAIAAAZg");
	this.shape_7.setTransform(96.9,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgsA/IAAh9IAcAAIAABkIA9AAIAAAZg");
	this.shape_8.setTransform(85.8,15.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AAmBAIgMgdIg0AAIgMAdIgcAAIA2h+IAZAAIA2B+gAAQALIgQgoIgQAoIAgAAg");
	this.shape_9.setTransform(72.7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(1,5,228,22), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,0.961],0,-6,0,6).s().p("AxzA8IAAh3MAjnAAAIAAB3g");
	this.shape.setTransform(102.9,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3D0DE").s().p("AgSA+QgJgEgHgHIgGgHQgDgEgCgHIgDgNIgBgQIAAgBQAAgIAEgSIAEgLIAGgKIAIgIQAEgFAFgCIAMgEIALgBQAJAAAOAEQAIACAJAHIgPAWIgLgHQgHgDgIAAQgFAAgFADQgEACgEAFQgDAFgBAFIgCAJIAMgFQAHgDAGAAQAKAAAIADQAIACAGAGQAGAEADAHQAEAHgBAKQABAKgEAIQgDAIgHAGQgGAGgKADQgJADgJAAQgOgBgGgCgAgIAFIgHAEIgEAGQgCADAAAEQAAAFACADQACAEACACIAHAEQAFABAEAAQAEAAAFgBIAHgEIADgGQACgDAAgEIAAgBQAAgEgCgDIgEgFQgCgDgEgCQgFgBgFAAQgEAAgEABg");
	this.shape_1.setTransform(200.9,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3D0DE").s().p("AAAA/IAAhiIgVAGIgGgXIAjgLIATAAIAAB+g");
	this.shape_2.setTransform(190.6,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3D0DE").s().p("AgvA/IAAh9IBeAAIAAAYIhCAAIAAAaIA6AAIAAAYIg6AAIAAAaIBDAAIAAAZg");
	this.shape_3.setTransform(176.3,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C3D0DE").s().p("AAhA/Ig8hPIAABPIgcAAIAAh9IAaAAIA6BMIAAhMIAbAAIAAB9g");
	this.shape_4.setTransform(162.9,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3D0DE").s().p("AgWA9IgJgFIgJgGIgGgIQgDgEgBgGIgDgLIgBgNIAAhHIAcAAIAABGQAAAIACAGQACAFADAEQAEAFAEACQAGABAFAAQAGAAAGgBQAEgCAEgEQADgEACgGQACgFAAgIIAAhHIAcAAIAABGIgBANIgDAMIgEAKIgHAIIgIAGIgKAFQgOADgIAAQgPgBgHgCg");
	this.shape_5.setTransform(149,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C3D0DE").s().p("AgPA/IgKgFQgIgDgJgKIASgTQAFAGAFADQAGADAGAAIAGgBQAEgCACgCIADgGIABgKIAAhQIAdAAIAABSQAAALgDAIQgDAIgGAGQgGAGgIADQgJADgIAAQgIAAgHgBg");
	this.shape_6.setTransform(136.6,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C3D0DE").s().p("AgKBAQgHgBgHgEIgNgFIgMgJIARgUQAJAIAIADIAKADIAJABQAJABAFgEQAEgDAAgFIAAgBQAAgFgEgDQgGgEgOgEIgRgFQgIgDgFgEQgGgEgDgGQgDgHAAgIIAAgBQAAgIAEgIQADgHAGgEQAGgFAIgDQAIgDAJAAQAGAAAHACIAMACIALAGIAKAGIgOAVQgJgGgIgDQgIgDgHgBQgIABgEADQgEADAAAEIAAABQAAAGAFAEQAFADAQADQAKADAHADQAIAEAFADQAFAFACAFQADAHAAAIQAAAJgDAHQgEAHgGAGQgGAEgJADQgIADgKAAQgHAAgHgBg");
	this.shape_7.setTransform(120.7,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C3D0DE").s().p("AgvA/IAAh9IBeAAIAAAYIhDAAIAAAaIA7AAIAAAYIg7AAIAAAaIBEAAIAAAZg");
	this.shape_8.setTransform(109.4,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3D0DE").s().p("AAWA/IgagpIgWAAIAAApIgcAAIAAh9IA5AAQAJAAAMADQAKADAGAHQAFAFADAIQACAHABAIIAAABQgBAHgBAHQgCAGgEAEIgJAIIgKAGIAeAtgAgagBIAbAAIAJgBIAHgEQADgCABgEQABgDABgDIAAgBQgBgEgBgEIgEgGIgHgDIgJgBIgbAAg");
	this.shape_9.setTransform(97,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C3D0DE").s().p("AgNA/IAAhjIgmAAIAAgaIBnAAIAAAaIgmAAIAABjg");
	this.shape_10.setTransform(84.2,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C3D0DE").s().p("AAmA/IgMgcIg0AAIgMAcIgcAAIA2h+IAZAAIA2B+gAAQALIgQgoIgQAoIAgAAg");
	this.shape_11.setTransform(73,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C3D0DE").s().p("AgvA/IAAh9IBeAAIAAAYIhDAAIAAAaIA7AAIAAAYIg7AAIAAAaIBEAAIAAAZg");
	this.shape_12.setTransform(60.1,10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C3D0DE").s().p("AAaA/IAAgzIgyAAIAAAzIgcAAIAAh9IAcAAIAAAyIAyAAIAAgyIAbAAIAAB9g");
	this.shape_13.setTransform(47,10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C3D0DE").s().p("AgNA/IAAhjIgmAAIAAgaIBnAAIAAAaIgmAAIAABjg");
	this.shape_14.setTransform(34.3,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C3D0DE").s().p("AAhA/Ig9hPIAABPIgbAAIAAh9IAaAAIA6BMIAAhMIAbAAIAAB9g");
	this.shape_15.setTransform(16,10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C3D0DE").s().p("AgNA/IAAh9IAbAAIAAB9g");
	this.shape_16.setTransform(5.9,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-11.1,0,228,22), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cars3Logo_1080();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.543,0.543);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,144.9,124.8), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3vUAMAAAgn/MAvfAAAMAAAAn/g");
	this.shape.setTransform(152,128);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,304,256), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95.5,93);

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.5,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-1.9},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-10.5},0).wait(1).to({rotation:-13.8},0).wait(1).to({rotation:-17.5},0).wait(1).to({rotation:-21.8},0).wait(1).to({rotation:-26.5},0).wait(1).to({rotation:-31.8},0).wait(1).to({rotation:-37.6},0).wait(1).to({rotation:-43.9},0).wait(1).to({rotation:-50.7},0).wait(1).to({rotation:-58.1},0).wait(1).to({rotation:-66},0).wait(1).to({rotation:-74.5},0).wait(1).to({rotation:-83.6},0).wait(1).to({rotation:-93.3},0).wait(1).to({rotation:-103.6},0).wait(1).to({rotation:-114.6},0).wait(1).to({rotation:-126.1},0).wait(1).to({rotation:-138.3},0).wait(1).to({rotation:-151.2},0).wait(1).to({rotation:-164.7},0).wait(1).to({rotation:-179},0).wait(1).to({rotation:-193.9},0).wait(1).to({rotation:-209.6},0).wait(1).to({rotation:-226},0).wait(1).to({rotation:-243.2},0).wait(1).to({rotation:-261.2},0).wait(1).to({rotation:-279.9},0).wait(1).to({rotation:-299.5},0).wait(1).to({rotation:-319.9},0).wait(1).to({rotation:-341.2},0).wait(1).to({rotation:-363.3},0).wait(1).to({rotation:-386.3},0).wait(1).to({rotation:-410.3},0).wait(1).to({rotation:-435.1},0).wait(1).to({rotation:-461},0).wait(1).to({rotation:-487.8},0).wait(1).to({rotation:-515.6},0).wait(1).to({rotation:-544.4},0).wait(1).to({rotation:-574.3},0).wait(1).to({rotation:-605.3},0).wait(1).to({rotation:-637.3},0).wait(1).to({rotation:-670.5},0).wait(1).to({rotation:-704.9},0).wait(1).to({rotation:-740.4},0).wait(1).to({rotation:-777.1},0).wait(1).to({rotation:-815.1},0).wait(1).to({rotation:-854.3},0).wait(1).to({rotation:-894.8},0).wait(1).to({rotation:-936.6},0).wait(1).to({rotation:-979.7},0).wait(1).to({rotation:-1024.2},0).wait(1).to({rotation:-1070},0).wait(1).to({rotation:-1117.3},0).wait(1).to({rotation:-1166},0).wait(1).to({rotation:-1216.1},0).wait(1).to({rotation:-1267.6},0).wait(1).to({rotation:-1320.7},0).wait(1).to({rotation:-1375.2},0).wait(1).to({rotation:-1431.2},0).wait(1).to({rotation:-1488.7},0).wait(1).to({rotation:-1547.7},0).wait(1).to({rotation:-1608.2},0).wait(1).to({rotation:-1670.2},0).wait(1).to({rotation:-1733.6},0).wait(1).to({rotation:-1798.5},0).wait(1).to({rotation:-1864.9},0).wait(1).to({rotation:-1932.6},0).wait(1).to({rotation:-2001.7},0).wait(1).to({rotation:-2072.1},0).wait(1).to({rotation:-2143.7},0).wait(1).to({rotation:-2216.5},0).wait(1).to({rotation:-2290.4},0).wait(1).to({rotation:-2365.4},0).wait(1).to({rotation:-2441.3},0).wait(1).to({rotation:-2518},0).wait(1).to({rotation:-2595.4},0).wait(1).to({rotation:-2673.5},0).wait(1).to({rotation:-2752.1},0).wait(1).to({rotation:-2831.1},0).wait(1).to({rotation:-2910.3},0).wait(1).to({rotation:-2989.6},0).wait(1).to({rotation:-3069},0).wait(1).to({rotation:-3148.2},0).wait(1).to({rotation:-3227.1},0).wait(1).to({rotation:-3305.7},0).wait(1).to({rotation:-3383.7},0).wait(1).to({rotation:-3461.1},0).wait(1).to({rotation:-3537.8},0).wait(1).to({rotation:-3613.6},0).wait(1).to({rotation:-3688.5},0).wait(1).to({rotation:-3762.3},0).wait(1).to({rotation:-3835.1},0).wait(1).to({rotation:-3906.6},0).wait(1).to({rotation:-3976.9},0).wait(1).to({rotation:-4045.9},0).wait(1).to({rotation:-4113.5},0).wait(1).to({rotation:-4179.8},0).wait(1).to({rotation:-4244.6},0).wait(1).to({rotation:-4307.9},0).wait(1).to({rotation:-4369.8},0).wait(1).to({rotation:-4430.2},0).wait(1).to({rotation:-4489.1},0).wait(1).to({rotation:-4546.5},0).wait(1).to({rotation:-4602.4},0).wait(1).to({rotation:-4656.8},0).wait(1).to({rotation:-4709.7},0).wait(1).to({rotation:-4761.1},0).wait(1).to({rotation:-4811.1},0).wait(1).to({rotation:-4859.7},0).wait(1).to({rotation:-4906.9},0).wait(1).to({rotation:-4952.6},0).wait(1).to({rotation:-4997},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,186);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.parent = this;
	this.instance.setTransform(95.5,93,1,1,0,0,0,95.5,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4680},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,186);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqsKtQkckcAAmRQAAmQEckcQEckbGQAAQGRAAEcEbQEbEcAAGQQAAGRkbEcQkcEbmRAAQmQAAkckbg");
	mask.setTransform(95.6,95.1);

	// Layer 4
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(94.5,91,1,1,0,0,0,95.5,93);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({alpha:1},14).wait(64));

	// Layer 1
	this.instance_1 = new lib.Symbol14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(95.5,93,1,1,0,0,0,95.5,93);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,186);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(171.5,125,1,1,0,0,0,171.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:207,x:207,y:125.5},0).wait(1).to({y:126.5},0).wait(1).to({regX:171.5,x:171.5,y:127},0).wait(1).to({regX:207,x:207.2,y:126.3},0).wait(1).to({x:207.8,y:124.8},0).wait(1).to({regX:171.5,x:172.5,y:124},0).wait(1).to({regX:207,x:207.9,y:124.3},0).wait(1).to({x:207.5,y:125},0).wait(1).to({x:207.1,y:125.7},0).wait(1).to({regX:171.5,x:171.5,y:126},0).wait(1).to({regX:207,x:206.9,y:125.6},0).wait(1).to({x:206.5,y:124.4},0).wait(1).to({x:206.2,y:123.4},0).wait(1).to({regX:171.5,x:170.5,y:123},0).wait(1).to({regX:207,x:206.2,y:123.8},0).wait(1).to({x:206.6,y:125.7},0).wait(1).to({x:206.9,y:127.4},0).wait(1).to({regX:171.5,x:171.5,y:128},0).wait(1).to({regX:207,x:207,y:127.3},0).wait(1).to({y:125.7},0).wait(1).to({regX:171.5,x:171.5,y:125},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414,250);


// stage content:
(lib._300x250_hubcap_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(149.6,192.6,0.1,0.1,0,0,0,63.5,18.5);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(338).to({_off:false},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:149.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:149.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:149.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:149.6},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.5},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.6},0).wait(1).to({scaleX:1,scaleY:1,x:149.5},0).wait(1).to({scaleX:1,scaleY:1,x:149.6},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,61);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(330).to({_off:false},0).wait(21));

	// Layer 2
	this.instance_2 = new lib.Symbol6copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(142.9,205.2,1,1,0,0,0,114,12.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(264).to({_off:false},0).to({alpha:1},16).wait(71));

	// Layer 7
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,207.8,1,1,0,0,0,104.9,12.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(142.9,35.2,1,1,0,0,0,114,12.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(191).to({_off:false},0).to({alpha:1},20).wait(44).to({alpha:0},8).to({_off:true},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({alpha:1},16).to({_off:true},51).wait(20));

	// logo
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,115.4,0.15,0.15,0,0,0,72.7,62.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).wait(1).to({regX:72.4,regY:62.4,scaleX:0.21,scaleY:0.21,y:115.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.9,y:116.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:117.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:119.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:149.8,y:120.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:121.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:121.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:122},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:122.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:122.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:122.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.7,y:122.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:149.8,y:123},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.7,y:123.1},0).wait(1).to({scaleX:1,scaleY:1,x:149.8},0).wait(1).to({regX:72.5,scaleX:1,scaleY:1,x:150.1,y:123.4},0).to({_off:true},140).wait(20));

	// black
	this.instance_6 = new lib.black();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.1,126.1,1,1,0,0,0,152,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0},35,cjs.Ease.get(0.99)).wait(134).to({alpha:1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// wheel
	this.instance_7 = new lib.Symbol11("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.5,149,1.05,1.05,0,0,0,95.5,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(53).to({startPosition:0},0).wait(1).to({regX:95.6,regY:95.1,scaleX:1.05,scaleY:1.05,x:153.6,y:151.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:153.5,y:151},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:150.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:150},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:153.3,y:148.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:153.1,y:146.2},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:152.3,y:138.2},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:152,y:135.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:151.9,y:133.9},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:151.8,y:133.1},0).wait(1).to({scaleX:1.52,scaleY:1.52,y:132.6},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:151.7,y:132.2},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:132},0).wait(1).to({scaleX:1.54,scaleY:1.54,y:131.9},0).wait(1).to({regX:95.5,regY:93.1,scaleX:1.54,scaleY:1.54,x:151.6,y:128.7},0).wait(16).to({regX:95.6,x:151.7,mode:"synched"},0).wait(80).to({scaleX:1.54,scaleY:1.54,rotation:28.1,x:151.8,y:128.8,startPosition:79},0).wait(1).to({regY:95.1,x:148.5,y:131.5,startPosition:80},0).wait(1).to({x:142.4,startPosition:81},0).wait(1).to({x:130.7,startPosition:82},0).wait(1).to({x:111.1,startPosition:83},0).wait(1).to({x:79.7,startPosition:84},0).wait(1).to({x:29.1,startPosition:85},0).wait(1).to({x:-54,startPosition:86},0).wait(1).to({x:-172.7,startPosition:87},0).wait(1).to({x:-274.4,startPosition:88},0).wait(1).to({regY:93.1,x:-336.2,y:128.8,startPosition:20},0).wait(177));

	// car
	this.instance_8 = new lib.Symbol10("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(131.6,125,1.05,1.05,0,0,0,171.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(53).to({startPosition:19},0).wait(1).to({regX:207,regY:125.5,scaleX:1.05,scaleY:1.05,x:168.9,y:125.5,startPosition:20},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:169,y:125.2,startPosition:21},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:169.1,y:124.6,startPosition:0},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:169.2,y:123.7,startPosition:1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:169.6,y:121.8,startPosition:2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:170.2,y:117.5,startPosition:3},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:172.4,y:104.7,startPosition:4},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:173.2,y:99.9,startPosition:5},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:173.6,y:97.7,startPosition:6},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:173.8,y:96.3,startPosition:7},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:174,y:95.5,startPosition:8},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:174.1,y:94.9,startPosition:9},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:94.6,startPosition:10},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:174.2,y:94.4,startPosition:11},0).wait(1).to({regX:171.3,regY:124.9,scaleX:1.54,scaleY:1.54,x:119.5,y:93.6,startPosition:10},0).wait(96).to({startPosition:1},0).wait(1).to({regX:207,regY:125.5,x:172.6,y:94.5,startPosition:2},0).wait(1).to({x:166.5,startPosition:3},0).wait(1).to({x:154.8,startPosition:4},0).wait(1).to({x:135.2,startPosition:5},0).wait(1).to({x:103.8,startPosition:6},0).wait(1).to({x:53.2,startPosition:7},0).wait(1).to({x:-30,startPosition:8},0).wait(1).to({x:-148.6,startPosition:9},0).wait(1).to({x:-250.4,startPosition:10},0).wait(1).to({regX:171.3,regY:124.9,x:-368.5,y:93.6,startPosition:0},0).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.5,118.8,434.7,262.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_hubcap_en_atlas_.jpg", id:"300x250_hubcap_en_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;