(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_mcqueen_en_atlas_", frames: [[390,0,267,230],[0,0,388,250],[0,502,296,213],[377,252,200,337],[298,591,348,171],[0,252,375,248]]}
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
	this.spriteSheet = ss["300x250_mcqueen_en_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CT_Kids = function() {
	this.spriteSheet = ss["300x250_mcqueen_en_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.McQueenBack_sm = function() {
	this.spriteSheet = ss["300x250_mcqueen_en_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.McQueenFront_sm = function() {
	this.spriteSheet = ss["300x250_mcqueen_en_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.McQueenRoof_sm = function() {
	this.spriteSheet = ss["300x250_mcqueen_en_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.McQueenTire_sm = function() {
	this.spriteSheet = ss["300x250_mcqueen_en_atlas_"];
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


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.McQueenFront_sm();
	this.instance.parent = this;
	this.instance.setTransform(-74,-124.7,0.74,0.74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-124.7,148,249.4);


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
	this.shape.graphics.f("#FFFFFF").s().p("A0DPBIAAlhIAnAAIAAy+IgnAAIAAliMAoHAAAIAAFiIgKAAIAAS+IAKAAIAAFhgAuiJgIdiAAIAAy+I9iAAg");
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.McQueenBack_sm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,296,213), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.McQueenTire_sm();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,378.8,250.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.McQueenRoof_sm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,348,171), null);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3vUAMAAAgn/MAvfAAAMAAAAn/g");
	this.shape.setTransform(152,128);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,304,256), null);


(lib.fronty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5();
	this.instance.parent = this;
	this.instance.setTransform(75.6,127.3,1.02,1.02,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fronty, new cjs.Rectangle(0,0,151,254.4), null);


// stage content:
(lib._300x250_mcqueen_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(149.6,192.6,0.1,0.1,0,0,0,63.5,18.5);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(365).to({_off:false},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:149.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:149.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:149.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:149.6},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.5},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.6},0).wait(1).to({scaleX:1,scaleY:1,x:149.5},0).wait(1).to({scaleX:1,scaleY:1,x:149.6},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,61);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(357).to({_off:false},0).wait(21));

	// Layer 2
	this.instance_2 = new lib.Symbol6copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(142.9,205.2,1,1,0,0,0,114,12.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(291).to({_off:false},0).to({alpha:1},16).wait(71));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(218).to({_off:false},0).to({alpha:1},20).wait(44).to({alpha:0},8).to({_off:true},1).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(291).to({_off:false},0).to({alpha:1},16).to({_off:true},51).wait(20));

	// logo
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,115.4,0.15,0.15,0,0,0,72.7,62.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(201).to({_off:false},0).wait(1).to({regX:72.4,regY:62.4,scaleX:0.21,scaleY:0.21,y:115.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:149.9,y:116.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:117.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:119.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:149.8,y:120.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:121.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:121.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:122},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:122.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:122.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:122.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.7,y:122.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:149.8,y:123},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.7,y:123.1},0).wait(1).to({scaleX:1,scaleY:1,x:149.8},0).wait(1).to({regX:72.5,scaleX:1,scaleY:1,x:150.1,y:123.4},0).to({_off:true},140).wait(20));

	// black
	this.instance_6 = new lib.black();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.1,126.1,1,1,0,0,0,152,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0},35,cjs.Ease.get(0.99)).wait(161).to({alpha:1},4,cjs.Ease.get(-1)).to({_off:true},1).wait(177));

	// Layer 5
	this.instance_7 = new lib.fronty();
	this.instance_7.parent = this;
	this.instance_7.setTransform(157,194.7,1,1,0,0,0,75.5,127.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(157).to({_off:false},0).wait(1).to({x:156.9},0).wait(3).to({x:156.8},0).wait(1).to({x:156.6},0).wait(1).to({x:156.5},0).wait(1).to({x:156.3},0).wait(1).to({x:156},0).wait(1).to({x:155.5},0).wait(1).to({x:155},0).wait(1).to({x:155.1},0).wait(1).to({x:155.3},0).wait(1).to({x:155.7},0).wait(1).to({x:156.1},0).wait(1).to({x:156.7},0).wait(1).to({x:157.1},0).wait(1).to({x:157.4},0).wait(1).to({x:157.6},0).wait(1).to({x:157.8},0).wait(1).to({x:157.9},0).wait(1).to({x:158},0).wait(1).to({x:157.2},0).wait(1).to({x:156.6},0).wait(1).to({x:156.1},0).wait(1).to({x:155.8},0).wait(1).to({x:155.5},0).wait(1).to({x:155.3},0).wait(1).to({x:155.1},0).wait(1).to({x:155},0).wait(3).to({scaleX:1.03,scaleY:1.03,y:197.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:155.2,y:205.8},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:155.6,y:221.2},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:156.2,y:244.8},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:157,y:278.6},0).wait(1).to({scaleX:2.69,scaleY:2.69,x:158.1,y:325.2},0).wait(1).to({scaleX:3.51,scaleY:3.51,x:159.6,y:388.3},0).wait(1).to({scaleX:4.62,scaleY:4.62,x:161.6,y:474.2},0).wait(1).to({scaleX:6.17,scaleY:6.17,x:164.5,y:593.5},0).wait(1).to({scaleX:8.43,scaleY:8.43,x:168.6,y:768.4},0).wait(1).to({scaleX:12.21,scaleY:12.21,x:175.5,y:1060.2},0).wait(1).to({regX:75.2,scaleX:28.9,scaleY:28.9,x:206,y:2349.6},0).to({_off:true},1).wait(177));

	// Layer 4
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(145.1,109.6,1.063,0.948,0,0,0,150,107.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(110).to({_off:false},0).to({regY:107.5,scaleX:1,scaleY:1,x:150,y:122.5},46).to({_off:true},1).wait(221));

	// Layer 3
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(102.7,125.2,1,1,0,0,0,167.7,126.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({_off:false},0).to({regX:167.6,scaleX:0.88,x:125.7},52).to({_off:true},1).wait(268));

	// Layer 1
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(175,163.6,1,0.734,0,0,0,175,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:1,x:165,y:185.5},56).to({_off:true},1).wait(321));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,123.1,350,256);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_mcqueen_en_atlas_.jpg", id:"300x250_mcqueen_en_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;