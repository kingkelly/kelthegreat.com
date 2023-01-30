(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_zoolight_atlas_", frames: [[694,0,300,140],[0,0,692,90],[0,92,49,37]]}
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
	this.spriteSheet = ss["728x90_zoolight_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_zoolights = function() {
	this.spriteSheet = ss["728x90_zoolight_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.glimma = function() {
	this.spriteSheet = ss["728x90_zoolight_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgOBKQgIgDgHgFQgGgFgEgGQgEgFgCgHIgCgMIAdAAQABAIAEAFQAFAHAJAAQAIAAAGgGQAGgFAAgIQAAgGgDgEQgDgEgFgDIgUgJQgNgEgGgFQgFgFgEgIQgDgIAAgJQgBgLAGgKQAGgKAKgGQAKgFAKAAQAKAAAJAEQAIAEAGAGQAFAFADAHQACAHABAJIgcAAQgBgJgCgDQgFgFgIAAQgFAAgFAEQgEAFAAAGQAAAIAFAEQAEADALAEIASAHQAJAFAEAFQAGAFACAIQADAHAAAKQgBAXgRANQgNAJgQAAQgIAAgHgCg");
	this.shape.setTransform(597.9,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBJIAAh4IgbAAIAAgZIBRAAIAAAZIgcAAIAAB4g");
	this.shape_1.setTransform(588.8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBJIAAiRIBOAAIAAAZIgzAAIAAAkIAxAAIAAAYIgxAAIAAAjIAzAAIAAAZg");
	this.shape_2.setTransform(579.5,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBJIgthAIAABAIgcAAIAAiRIAcAAIAAA/IAtg/IAgAAIg2BIIA2BJg");
	this.shape_3.setTransform(569.1,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA2QgWgXAAgfQAAgQAGgOQAGgOAKgJQAKgJALgGQAPgHAQAAQAMAAAMAEQAMAEAKAHQAJAHAGAIQAEAFAEAKIgeAAQgJgKgJgFQgJgFgMAAQgLAAgMAHQgLAGgHANQgGAMAAAMQAAALAEAKQAFAJAGAHQAHAGAHADQAJAFAKAAQAVAAAPgTIAgAAQgGALgFAHQgHAJgKAGQgJAFgKADQgKADgLAAQgeAAgXgWg");
	this.shape_4.setTransform(554.6,6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBJIAAiRIAbAAIAACRg");
	this.shape_5.setTransform(543.9,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBJIAAh4IgbAAIAAgZIBRAAIAAAZIgcAAIAAB4g");
	this.shape_6.setTransform(537.1,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMBJIAAg2IgxhbIAeAAIAfBDIAghDIAeAAIgwBbIAAA2g");
	this.shape_7.setTransform(521.2,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBIQgKgDgGgEQgFgFgEgFQgDgFgCgJQgCgIgBgPIAAhcIAbAAIAABcQAAAKADAHQACAHAHAEQAFADAIAAQAJAAAGgEQAGgEADgHQABgFAAgLIAAhcIAbAAIAABcQAAATgFALQgEAHgGAHQgHAGgIADQgJAEgNAAQgLAAgIgDg");
	this.shape_8.setTransform(508.8,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBJIAAiRIAcAAQASAAAIACQAJACAGAFQAHAFAFAHQAEAIAAAKQAAASgRAJQAIADAGADQAGAFADAIQACAHAAAJQAAAKgCAHQgDAHgGAGQgFAFgGADQgFADgJACQgIABgNAAgAgTAwIANAAQAOAAAGgFQAHgGgBgJQABgIgHgGQgGgFgOAAIgNAAgAgTgPIAJAAQAMAAAFgEQAEgFAAgHQAAgHgEgFQgFgEgKAAIgLAAg");
	this.shape_9.setTransform(497.1,6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D71FF").s().p("AgXBBQgMgHgGgLQgGgMAAgNIABgNIAEgJIAGgLIAmg7IAdAAIgfAvIAHgBQAKAAAKAGQAKAGAGALQAFAKAAAMQAAANgGAMQgGAMgMAHQgLAGgNAAQgMAAgLgGgAgRAIQgFAGAAAIQAAALAHAHQAHAHAIAAQALAAAGgHQAGgIAAgJQAAgKgHgHQgHgHgJAAQgLAAgGAJg");
	this.shape_10.setTransform(611.2,41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D71FF").s().p("AAcBGIg6hkIAAAAIAABkIgaAAIAAiLIAeAAIA4BlIABAAIAAhlIAaAAIAACLg");
	this.shape_11.setTransform(593.8,41.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D71FF").s().p("AAnBGIgOgkIgxAAIgPAkIgdAAIA7iLIATAAIA6CLgAAPAJIgPgpIgPApIAeAAg");
	this.shape_12.setTransform(579.8,41.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D71FF").s().p("AgRBEQgIgFgFgIQgFgHgCgMIAaAAQACAGADACQACADAEAAQAGAAADgEQAEgEAAgJIAAhlIAZAAIAABkQAAANgEAKQgEAIgJAGQgJAFgMAAQgIAAgJgDg");
	this.shape_13.setTransform(567.6,41.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D71FF").s().p("AgZALIAAgVIAzAAIAAAVg");
	this.shape_14.setTransform(554.5,43.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D71FF").s().p("AAKBGIAAgVIg7AAIAAgUIA/hiIAVAAIAABeIAPAAIAAAYIgPAAIAAAVgAgWAZIAgAAIAAg0IAAAAg");
	this.shape_15.setTransform(540,41.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D71FF").s().p("AgsBHIAAgYIAxguQAJgHADgHQADgGABgGQAAgKgGgGQgFgGgKAAQgEAAgGAEQgFADgDAFQgCAGAAAJIgZAAIAAgFQAAgLAGgLQAGgLALgGQAKgGAMAAQANAAAKAGQALAGAGALQAGALAAAMQAAAHgDAIQgBAHgGAFQgGAJgLAKIgcAZIA3AAIAAAYg");
	this.shape_16.setTransform(529.5,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D71FF").s().p("AgJBGIg3iLIAcAAIAkBpIAAAAIAmhpIAbAAIg2CLg");
	this.shape_17.setTransform(512.3,41.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D71FF").s().p("AgdBCQgNgGgKgJQgIgJgFgLQgHgPAAgQQAAgNAFgOQAFgNAKgKQAJgJAMgGQAPgHAQAAQAQAAANAGQANAGAKAJQAJAKAFALQAHAOAAAQQAAAMgDALQgFALgGAJQgGAIgJAHQgJAHgLAEQgMAEgMAAQgQAAgNgHgAgSgsQgIAEgHAHQgGAGgEAJQgDAJAAAJQAAAKADAJQAEAIAGAHQAGAGAJAEQAJAEAJAAQAMAAAMgGQAKgGAHgMQAGgLAAgNQAAgMgGgLQgHgMgKgGQgMgHgMAAQgKAAgIAEg");
	this.shape_18.setTransform(497.8,41.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D71FF").s().p("AAcBGIg6hkIAAAAIAABkIgaAAIAAiLIAdAAIA6BlIAAAAIAAhlIAaAAIAACLg");
	this.shape_19.setTransform(482.9,41.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A548E").s().p("AqQDPQhWAAg9g9Qg8g8AAhWQAAhVA8g9QA9g8BWAAIUhAAQBWAAA8A8QA9A9AABVQAABWg9A8Qg8A9hWAAg");
	this.shape_20.setTransform(545.5,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(459.1,-15,172.8,71.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApUC7IAAl1ISpAAIAAF1g");
	mask.setTransform(100,-36.9);

	// Layer 2
	this.instance = new lib.bb_logo();
	this.instance.parent = this;
	this.instance.setTransform(-40,-143,0.933,0.933);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.bb_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(196,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(40.3,-90,455.7,140), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.glimma();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,37);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("EAhIAFkIAAjCIDUAAIAADCgAdwFfIAAobIBkAAIAAIbgARkDdIAAmjICvAAIAAGjgAENC/IAAmeIEIAAIAAGegEgitABUIAAgKIhuAAIAAheIBfAAIAAlPICgAAIAAGAIg8AAIAAAtIgyAAIAAAKg");
	this.shape.setTransform(229,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-4.2,-19.2,466.4,71.3), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("AogEMIAAgoIhLAAIAAgtIhfAAIAAiWIAUAAIAAhUIA3AAIAAivIBBAAIAAD5ICMAAIAABaIAKAAIAACbgEAg/ADJIAAmoIB9AAIAAGogA7mDGIAAm8IBQAAIAAAtIAyAAIAACMIgyAAIAAB8IAUAAIAAAeIAoAAIAABkIgoAAIAAAFgEgi7ADEIAAibIB9AAIAAAKIBMAAIAAgyIBBAAIAACbIiNAAIAAAogAtpCxIAAm8IBkAAIAAG8gA2LCiIAAjCIEEAAIAADCgAgbCDIAAl7IBtAAIAAF7gAcQAzIAAjlICWAAIAADlg");
	this.shape.setTransform(313,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(89.4,-38.4,447.3,53.7), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("AbKD1IAAnkIBkAAIAAHkgAS5DoIAAkcIg2AAIAAEDIhsAAIAAkDIgvAAIAAA9IAOAAIAADIIjrAAIAAl7IDdAAIAAAcIEFAAIAAAFIAEAAIAAFxgAihDXIAAnLICfAAIAAHLgA8tDXIAAnLIBfAAIAAHLgA5tDVIAAhLIgZAAIAAg3IgRAAIAAhGIARAAIAAgiIAZAAIAAhfIDSAAIAAFJgAxpDPIAAmyIClAAIAAGygAorBDIAAj0IB4AAIAAD0g");
	this.shape.setTransform(292.6,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(108.9,4.5,367.5,49), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#25077A").s().p("EAi2AFOIAAi+IjFAAIAAlOIDFAAIAAgUIIwAAIAAIggAAUDwIAAmtICRAAIAAGtgASsDDIAAmjID0AAIAAGjgAyoDDIAAmyIBuAAIAAGygAbJCqIAAmjIA8AAIAAGjgAqPjkID1AAIAUGAIj/AKgEghpACmIAAlnIBBAAIAAFngAiDClIAAnVIBfAAIAAHVgAvcChIAAlxIAeAAIAAh9ICCAAIAADcIgtAAIAACfIg3AAIAABzgAG0CXIAAliIByAAIAAFigEgrlABtIAAmoIFeAAIAABGIBuAAIAAB4IhuAAIAADqgA5EgRIAAi+IDXAAIAAC+g");
	this.shape.setTransform(262.5,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-16.5,-15.4,558.1,66.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_zoolights();
	this.instance.parent = this;
	this.instance.setTransform(74,7,0.844,0.844);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74,7,584.4,76);


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
	this.instance.setTransform(394,-97.2,0.5,0.5,0,0,0,24.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,y:-97.3,startPosition:1},0).wait(1).to({rotation:16.1,x:393.9,startPosition:2},0).wait(1).to({rotation:36.1,startPosition:3},0).wait(1).to({rotation:61.1,x:393.8,startPosition:4},0).wait(1).to({rotation:86.9,x:393.5,y:-97.2,startPosition:5},0).wait(1).to({rotation:110.2,x:393.4,startPosition:6},0).wait(1).to({rotation:129.7,x:393.3,startPosition:7},0).wait(1).to({rotation:145.2,x:393.2,startPosition:8},0).wait(1).to({rotation:156.9,x:393,startPosition:9},0).wait(1).to({rotation:165.4,startPosition:10},0).wait(1).to({rotation:170.9,x:392.9,startPosition:11},0).wait(1).to({rotation:174,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,x:393,y:-97.3,startPosition:13},0).wait(1));

	// twinkle
	this.instance_1 = new lib.Symbol7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(461,-98.5,1,1,0,0,0,24.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:461.1,y:-98.6,startPosition:1},0).wait(1).to({rotation:16.1,x:461.2,y:-98.4,startPosition:2},0).wait(1).to({rotation:36.1,x:461.4,y:-98.2,startPosition:3},0).wait(1).to({rotation:61.1,x:461.5,y:-97.8,startPosition:4},0).wait(1).to({rotation:86.9,x:461.7,y:-97.5,startPosition:5},0).wait(1).to({rotation:110.2,y:-97.1,startPosition:6},0).wait(1).to({rotation:129.7,x:461.8,y:-97,startPosition:7},0).wait(1).to({rotation:145.2,y:-96.8,startPosition:8},0).wait(1).to({rotation:156.9,y:-96.7,startPosition:9},0).wait(1).to({rotation:165.4,y:-96.6,startPosition:10},0).wait(1).to({rotation:170.9,y:-96.5,startPosition:11},0).wait(1).to({rotation:174,x:461.9,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,x:462,y:-96.7,startPosition:13},0).wait(5));

	// twinkle
	this.instance_2 = new lib.Symbol7("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(241,-94.5,0.7,0.7,0,0,0,24.6,18.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).wait(1).to({regY:18.3,rotation:3.9,x:241.1,y:-94.6,startPosition:1},0).wait(1).to({rotation:16.1,x:241,y:-94.4,startPosition:2},0).wait(1).to({rotation:36.1,y:-94.1,startPosition:3},0).wait(1).to({rotation:61.1,y:-93.7,startPosition:4},0).wait(1).to({rotation:86.9,x:240.9,y:-93.2,startPosition:5},0).wait(1).to({rotation:110.2,y:-92.8,startPosition:6},0).wait(1).to({rotation:129.7,x:240.8,y:-92.5,startPosition:7},0).wait(1).to({rotation:145.2,x:240.7,y:-92.2,startPosition:8},0).wait(1).to({rotation:156.9,x:240.6,y:-92,startPosition:9},0).wait(1).to({rotation:165.4,x:240.5,y:-91.9,startPosition:10},0).wait(1).to({rotation:170.9,y:-91.8,startPosition:11},0).wait(1).to({rotation:174,startPosition:12},0).wait(1).to({regX:24.4,regY:18.4,rotation:175,x:240.6,y:-92,startPosition:13},0).wait(12));

	// twinkle
	this.instance_3 = new lib.Symbol7("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-41.5,-87.5,1,1,0,0,0,24.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:-41.4,y:-87.7,startPosition:1},0).wait(1).to({rotation:16.1,startPosition:2},0).wait(1).to({rotation:36.1,x:-41.5,startPosition:3},0).wait(1).to({rotation:61.1,x:-41.6,y:-87.8,startPosition:4},0).wait(1).to({rotation:86.9,x:-41.7,y:-87.9,startPosition:5},0).wait(1).to({rotation:110.2,x:-41.9,startPosition:6},0).wait(1).to({rotation:129.7,x:-42.1,y:-88,startPosition:7},0).wait(1).to({rotation:145.2,x:-42.3,y:-88.1,startPosition:8},0).wait(1).to({rotation:156.9,x:-42.4,startPosition:9},0).wait(1).to({rotation:165.4,x:-42.5,y:-88.2,startPosition:10},0).wait(1).to({rotation:170.9,startPosition:11},0).wait(1).to({rotation:174,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,y:-88.4,startPosition:13},0).wait(16));

	// twinkle
	this.instance_4 = new lib.Symbol7("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(88,-96,1,1,0,0,0,24.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).wait(1).to({regX:24.6,regY:18.3,rotation:3.9,x:88.1,y:-96.2,startPosition:1},0).wait(1).to({rotation:16.1,x:88.3,startPosition:2},0).wait(1).to({rotation:36.1,x:88.4,y:-96.1,startPosition:3},0).wait(1).to({rotation:61.1,x:88.6,startPosition:4},0).wait(1).to({rotation:86.9,x:88.7,startPosition:5},0).wait(1).to({rotation:110.2,x:88.8,startPosition:6},0).wait(1).to({rotation:129.7,startPosition:7},0).wait(1).to({rotation:145.2,startPosition:8},0).wait(1).to({rotation:156.9,x:88.9,y:-96.2,startPosition:9},0).wait(1).to({rotation:165.4,startPosition:10},0).wait(1).to({rotation:170.9,startPosition:11},0).wait(1).to({rotation:174,startPosition:12},0).wait(1).to({regX:24.5,regY:18.4,rotation:175,x:89,y:-96.4,startPosition:13},0).wait(33));

	// Layer 6
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-19.8,-78.8,1,1,0,0,0,3,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({alpha:0},40,cjs.Ease.get(-1)).wait(45));

	// Layer 5
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-90.2,-50.4,1,1,0,0,0,27.2,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({alpha:0.52},16,cjs.Ease.get(-1)).to({alpha:0.66},10).to({alpha:0},21).wait(43));

	// Layer 10
	this.instance_7 = new lib.Symbol3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-79.9,-90.9,1,1,0,0,0,19,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({alpha:0.52},14).to({alpha:0.66},10).to({alpha:0},40).wait(29));

	// Layer 3
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-40.2,-84.2,1,1,0,0,0,5.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({alpha:0.461},15).to({alpha:0.75},12).to({alpha:0},21).wait(54));

	// Layer 12
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(3,8,1,1,0,0,0,153,133);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-118,584.4,76);


// stage content:
(lib._728x90_zoolight = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 17
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(150.1,44,1,1,0,0,0,88.4,15.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(-1)).wait(16));

	// Layer 16
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149,123,1,1,0,0,0,150,37);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(126).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(0.96)).wait(24));

	// grad
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0.635,0.973],9.7,3.4,0,9.7,3.4,382.7).s().p("Eg5nAINIAAwZMBzPAAAIAAQZg");
	this.shape.setTransform(364.3,44.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(168));

	// MASTA
	this.instance_2 = new lib.MastaBlasta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.2,124,1,1,0,0,0,7.2,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({startPosition:110},0).to({alpha:0},18,cjs.Ease.get(1)).wait(38));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25077A").s().p("Eg5tAH0IAAvnMBzbAAAIAAPng");
	this.shape_1.setTransform(362.7,45.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(357.3,37.2,739.9,105);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_zoolight_atlas_.png", id:"728x90_zoolight_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;