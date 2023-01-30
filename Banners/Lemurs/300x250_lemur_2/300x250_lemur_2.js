(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_lemur_2_atlas_", frames: [[0,476,300,441],[0,0,400,474],[302,476,160,193]]}
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
	this.spriteSheet = ss["300x250_lemur_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_pattern = function() {
	this.spriteSheet = ss["300x250_lemur_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x250_lemur_2_atlas_"];
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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pattern();
	this.instance.parent = this;
	this.instance.setTransform(-221.9,-262.9,1.109,1.109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.9,-262.9,443.8,525.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAbIAAg1IA3AAIAAA1g");
	this.shape.setTransform(218.1,25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB3IAAiJIgbAAIAAgoIAbAAIAAg8IA0AAIAAA8IAaAAIAAAoIgaAAIAACJg");
	this.shape_1.setTransform(207.4,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBaQgIgCgHgEQgNgHgIgMQgIgPgCgfIAAhuIA1AAIAABgQAAARAFAJQAEAFAFADQAGADAJAAQAIAAAHgDQAGgDADgGQAGgIAAgRIAAhgIA1AAIAACxIgyAAIAAgTQgRAZgfAAQgLAAgKgCg");
	this.shape_2.setTransform(191.6,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBcQgKgCgJgDQgJgFgIgFIgOgNQgLgNgGgRQgGgRAAgRIAAAAQAAgQAGgRQAGgRALgNIAOgMQAIgHAJgDQAJgEAKgCQALgDALAAQAMAAALADQAKACAJAEQAJADAIAHQAHAFAGAHQAMANAGARQAGARAAAQQAAARgGARQgGARgMANQgGAHgHAGQgIAFgJAFQgJADgKACQgLADgMAAQgLAAgLgDgAgQgpQgHAEgGAFQgGAHgEAIQgDAIAAAJIAAAAQAAAKADAIQAEAIAGAHQAGAFAHAEQAIADAIAAQAJAAAHgDQAIgEAGgFQAGgHADgIQAEgJAAgJQAAgJgEgIQgDgIgGgHQgGgFgIgEQgHgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(170.8,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZCDIgSgGQgQgFgLgKQgKgIgGgMQgFgKgCgLIA+AAQAEAJANAHQAHACAHAAQAHAAAIgCQAIgDAGgFQAGgGAEgIQAEgIAAgMIAAgKQgGAKgLAHQgGAEgIACQgJADgJAAQgSgBgQgGQgRgHgMgMIgLgOIgJgQQgDgIgCgJQgCgKAAgLQAAgLACgKQACgLAEgIQAFgMAPgTQAMgMARgHQAQgGARAAQAPAAANAFQAOAHAHAKIAAgQIA2AAIAACcQAAAWgCAMQgDAOgGALQgFAIgJAIQgJAIgLAFQgMAHgOACQgOAEgPAAgAgQhOQgHAEgGAFQgHAGgDAIQgDAJAAAKQAAAKADAJQAEAIAGAGQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAGgFQAFgFAEgJQADgHAAgKQAAgJgDgKQgDgIgFgGQgGgHgIgEQgIgDgKAAQgIAAgIADg");
	this.shape_4.setTransform(138.6,23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBdIAAhhQAAgSgFgIQgDgFgGgDQgFgDgJAAQgIAAgHADQgGADgDAFQgFAKAAAQIAABhIg2AAIAAiyIAyAAIAAATQAHgLAIgFQAGgEAIgCQAIgDALgBQALAAAJADQAJACAHAEQANAGAHANQAGALADANQACAKAAAMIAABvg");
	this.shape_5.setTransform(117.9,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBdQgKgBgIgEQgIgEgIgFIgMgMQgMgNgGgSQgGgRAAgTQAAgKACgKQABgJAEgJQAFgMAPgTQANgMAPgHQARgGASgBQAJAAAJADQAIACAHAEQAMAGAGALIAAgTIA2AAIAACyIg2AAIAAgUQgDAHgGAEQgGAFgGAEQgOAFgQABQgLAAgJgDgAgTgoQgJAEgFAHQgFAHgDAIQgCAIgBAGIAAABQABAHACAHQADAIAEAGQAHAIAIAEQAIAEALAAQANAAAKgFQAIgFAGgJQAGgKABgNQABgLgFgLQgFgLgJgGQgFgEgGgCQgHgCgIgBQgLABgIAEg");
	this.shape_6.setTransform(95.9,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdB3IAAhhQAAgRgFgIQgEgFgFgDQgGgDgJAAQgJAAgHAEQgGAEgDAGQgDAHAAANIAABjIg2AAIAAjtIA2AAIAAA1IAAAXQAGgLANgGQALgGAPAAQAKAAAJACQAIACAGADQANAHAHAMQAHALADAQQADANAAASIAABkg");
	this.shape_7.setTransform(75,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,287.9,41.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBjIAAhoQAAgSgGgJQgDgGgGgDQgGgDgKAAQgJAAgHADQgGAEgEAFQgFAKAAASIAABnIg6AAIAAi+IA2AAIAAAUQAIgLAIgGQAHgFAIgCQAJgDAMAAQALAAAKACQAJADAIAEQANAHAIANQAHALADAPQACALAAANIAAB2g");
	this.shape.setTransform(196.6,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcCAIAAi/IA5AAIAAC/gAgchTIAAgsIA5AAIAAAsg");
	this.shape_1.setTransform(180.8,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhnCDIAAj+IA2AAIAAAVQALgNANgGQAIgEAJgDQAIgCALAAQAMAAALACQALADAJAFQAJAEAHAHQAHAGAGAJQAKAOAGATQAFARAAASQgCAagEAMQgIATgMANQgSAQgMAGQgIADgJACQgKADgKAAQgigBgWgXIAAARIAABAgAgThJQgJAEgGAHQgHAHgDAIQgEAKAAAKQAAAKAEAIQADAJAHAGQAGAGAJAEQAJAEAKAAQAKAAAJgEQAJgEAGgHQAGgGAEgJQADgJAAgJIAAAAQAAgIgDgJQgEgJgFgGQgHgIgJgEQgJgEgKAAQgKAAgJADg");
	this.shape_2.setTransform(153.8,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBjQgLgCgLgFQgJgEgJgGIgOgOQgMgOgHgSQgGgSAAgSQAAgRAGgSQAHgSAMgPIAOgNQAJgGAJgFQALgEALgCQALgDAMAAQAMAAAMADQAMACAJAEQAKAFAIAGQAIAGAGAHQANAPAGASQAHASAAARQAAASgHASQgGASgNAOQgGAIgIAGQgIAGgKAEQgJAFgMACQgMADgMAAQgMAAgLgDgAgRgsQgIAEgGAGQgHAHgDAJQgEAJAAAJIAAAAQAAAKAEAJQADAJAHAGQAGAHAIAEQAJADAIAAQAJAAAIgDQAJgEAGgHQAGgGAEgJQADgJAAgKQAAgJgDgJQgEgJgGgHQgGgGgJgEQgIgDgJAAQgIAAgJADg");
	this.shape_3.setTransform(130,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBjIAAi+IA0AAIAAAVQAHgMAHgGQAGgFAIgCQAJgDAMAAIAAA5IgCAAQgLAAgIADQgIACgGAEQgFAFgDAHQgCAHAAALIAABlg");
	this.shape_4.setTransform(113.2,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhuCAIAAj/IBVAAIAZABQAPACAOAEQAQAEAPAKQASAPAJAMQAGAJAFAKIAHATQAGATAAAWQgDAigEAPQgFAMgEAKQgHAKgHAJQgIAJgKAHQgKAHgMAEQgNAGgPACQgPADgSAAgAgtBGIAcAAQARAAANgFQAMgGAHgKQAHgJADgNQADgMAAgPQAAgLgDgLQgDgOgGgKQgHgKgKgGQgSgHgOAAIgdAAg");
	this.shape_5.setTransform(93.9,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,287.9,43.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgMA4IAAgaIAZAAIAAAagAgMATIAAhKIAZAAIAABKg");
	this.shape.setTransform(153.1,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AgNA4IAAgpIghhGIAeAAIAQAtIARgtIAeAAIggBGIAAApg");
	this.shape_1.setTransform(145.8,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AAYA4IgFgQIgmAAIgFAQIgfAAIAshvIAYAAIAqBvgAAMARIgMgmIgMAmIAYAAg");
	this.shape_2.setTransform(135.3,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("AgvA4IAAhvIAlAAIAKABIAMACQAIACAGAEQAJAHADAFIAFAIIADAJQACAIAAAJQgBAOgCAHIgEAKIgFAIIgJAHIgJAFIgMADIgOACgAgSAfIALAAQAHgBAGgCQAFgCADgEQADgFABgFIABgMIgBgJIgDgLQgEgEgEgDQgHgDgHAAIgLAAg");
	this.shape_3.setTransform(124.3,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AgMA5IgLgEIgKgFIgJgIIgGgIIgFgKIgDgKIgBgKIAAgBIABgMQAAgGADgFIAGgKIAHgJIAJgGIAKgGIALgDIAKgBIAMABIAMAEIAKAFIAIAIIAHAIIAFAKIADAKIACALIgCAMIgDAKIgFAKIgHAJIgIAHIgKAFIgMAEIgMABIgMgBgAgMgdQgFADgEAFQgFAEgBAGQgCAGAAAFIAAAAQAAAGACAGQACAGAEAFQAEAEAGADQAFACAGABQAHAAAHgDQAEgDAFgFQADgFACgFQACgHAAgFQAAgFgCgFQgCgGgDgEQgFgGgFgDQgGgCgHAAQgGgBgGADg");
	this.shape_4.setTransform(112.1,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AgNA4IAAhWIgWAAIAAgZIBHAAIAAAZIgWAAIAABWg");
	this.shape_5.setTransform(102,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgIA5IgJgDIgHgDIgGgEQgEgGgCgHQgCgHgBgJIAdAAQAAAGACACQABAEABABQAEADADAAQAFAAADgDQACgDAAgFQAAgEgEgDIgQgIQgbgJAAgVIABgIQAAgEACgDQADgGAGgFQAGgEAGgDQAHgBAGgBQAHABAFABQAHACAGAEQAFAEAEAGIADAIIAAAJIgcAAQgBgLgIAAQgDAAgEADQgCACAAAEQAAADADADIASAJIAOAHQAEADAEAEIADAIIABAJQAAAHgBAGQgDAGgEAGQgFAFgHACQgLAEgHAAg");
	this.shape_6.setTransform(89.4,7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgNA4IAAhWIgWAAIAAgZIBHAAIAAAZIgVAAIAABWg");
	this.shape_7.setTransform(81.4,7.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgfA4IAAhvIA+AAIAAAZIghAAIAAASIAgAAIAAAYIggAAIAAATIAhAAIAAAZg");
	this.shape_8.setTransform(73.9,7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AAMA4IgdgxIAAAxIgdAAIAAhvIAdAAIAAAzIAegzIAeAAIglA3IApA4g");
	this.shape_9.setTransform(65.1,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgKA5IgMgEIgKgGIgIgHIgHgIIgFgKQgCgFgBgGIgBgLIABgKIADgKIAFgKIAGgJIAJgHQAEgEAGgBIALgFIAMgBIAMABIALAEQAHADAKAIQAFAFAGAJQAEAHABAIIgdAAIgEgHIgFgGIgIgFQgFgCgFABQgGgBgGADQgFADgEAFQgEAEgCAGQgCAGAAAFQAAAGACAGQACAGAEAFQAEAEAGADQAFACAGABQASAAAJgTIAdAAIgDAJIgEAJQgIAKgFADQgKAIgHABQgMAEgHAAIgLgBg");
	this.shape_10.setTransform(53,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgNA4IAAhvIAbAAIAABvg");
	this.shape_11.setTransform(44.3,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgNA4IAAhWIgWAAIAAgZIBHAAIAAAZIgVAAIAABWg");
	this.shape_12.setTransform(38.2,7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AgNA4IAAgpIghhGIAeAAIAQAtIARgtIAeAAIggBGIAAApg");
	this.shape_13.setTransform(25,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AgOA3IgJgEQgEgDgDgDIgGgHIgDgIQgCgFgBgOIAAhDIAdAAIAABDQAAAIACAFQABAEADACQADABAEABQAFgBADgBQADgCACgEQABgEAAgJIAAhDIAdAAIAABDIgBALIgCAKIgEAHIgEAFQgIAIgFABIgJADIgJABQgIAAgHgCg");
	this.shape_14.setTransform(14.9,7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("AgpA4IAAhvIApAAQAIAAAGACQAIADAEADQAFADACAGQADAGAAAGQAAAIgDAFIgEAFIgGAFQASAFAAAUQAAAGgCAHQgDAHgFAEIgHAFIgHADIgVACgAgMAfIANAAIAIgBQADgCAAgCQACgDAAgDQAAgDgBgCIgEgDIgIgBIgNAAgAgMgMIAKAAIAGgBIAEgDQABgCAAgDQAAgDgBgCIgEgDIgGgBIgKAAg");
	this.shape_15.setTransform(5.2,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-2,0,159.8,19), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,160,193), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pattern();
	this.instance.parent = this;
	this.instance.setTransform(0,351.3,1.048,1.048,-56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,645.3,622.7), null);


(lib.lemur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lemur, new cjs.Rectangle(0,0,330,485.1), null);


// stage content:
(lib._300x250_lemur_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// CTA
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(94.3,168.7,1,1,0,0,0,75.2,10);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(248).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(95,-105.5,1,1,0,0,0,80,96.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(216).to({_off:false},0).wait(1).to({y:-104.9,alpha:0.002},0).wait(1).to({y:-103.3,alpha:0.009},0).wait(1).to({y:-100.3,alpha:0.021},0).wait(1).to({y:-95.6,alpha:0.04},0).wait(1).to({y:-88.7,alpha:0.068},0).wait(1).to({y:-78.9,alpha:0.107},0).wait(1).to({y:-65.2,alpha:0.162},0).wait(1).to({y:-46.4,alpha:0.238},0).wait(1).to({y:-21,alpha:0.341},0).wait(1).to({y:10.6,alpha:0.468},0).wait(1).to({y:43.4,alpha:0.6},0).wait(1).to({y:71.2,alpha:0.712},0).wait(1).to({y:92.4,alpha:0.798},0).wait(1).to({y:108,alpha:0.861},0).wait(1).to({y:119.4,alpha:0.907},0).wait(1).to({y:127.8,alpha:0.941},0).wait(1).to({y:133.8,alpha:0.965},0).wait(1).to({y:137.9,alpha:0.982},0).wait(1).to({y:140.6,alpha:0.992},0).wait(1).to({y:142.1,alpha:0.998},0).wait(1).to({y:142.5,alpha:1},0).wait(1).to({y:142.4},0).wait(1).to({y:142.2},0).wait(1).to({y:141.8},0).wait(1).to({y:141.2},0).wait(1).to({y:140.2},0).wait(1).to({y:139},0).wait(1).to({y:137.9},0).wait(1).to({y:137},0).wait(1).to({y:136.3},0).wait(1).to({y:135.9},0).wait(1).to({y:135.7},0).wait(1).to({y:135.5},0).wait(14));

	// lemur
	this.instance_2 = new lib.lemur();
	this.instance_2.parent = this;
	this.instance_2.setTransform(165,441.6,1,1,0,0,0,165,242.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).wait(1).to({regY:242.5,y:389.9},0).wait(1).to({y:345.2},0).wait(1).to({y:306.9},0).wait(1).to({y:274.1},0).wait(1).to({y:246.3},0).wait(1).to({y:222.9},0).wait(1).to({y:203.1},0).wait(1).to({y:186.7},0).wait(1).to({y:173},0).wait(1).to({y:161.8},0).wait(1).to({y:152.8},0).wait(1).to({y:145.7},0).wait(1).to({y:140.2},0).wait(1).to({y:136.2},0).wait(1).to({y:133.6},0).wait(1).to({y:132},0).wait(1).to({regY:242.6,y:131.6},0).wait(1).to({regY:242.5,y:131.9},0).wait(1).to({y:132.9},0).wait(1).to({y:135},0).wait(1).to({y:138.2},0).wait(1).to({y:142.5},0).wait(1).to({y:147.5},0).wait(1).to({y:152.2},0).wait(1).to({y:155.9},0).wait(1).to({y:158.6},0).wait(1).to({y:160.3},0).wait(1).to({y:161.2},0).wait(1).to({regY:242.6,y:161.6},0).wait(1).to({regY:242.5,y:161.5},0).wait(1).to({y:161.3},0).wait(1).to({y:160.9},0).wait(1).to({y:160.2},0).wait(1).to({y:159.2},0).wait(1).to({y:157.6},0).wait(1).to({y:155.7},0).wait(1).to({y:154},0).wait(1).to({y:152.9},0).wait(1).to({y:152.2},0).wait(1).to({y:151.8},0).wait(1).to({y:151.6},0).wait(1).to({regY:242.6},0).wait(27).to({regY:242.5,rotation:0.2,y:151.5},0).wait(1).to({rotation:0.9,x:164.9,y:151.4},0).wait(1).to({rotation:2,x:164.7,y:151.3},0).wait(1).to({rotation:3.8,x:164.4,y:151.1},0).wait(1).to({rotation:6.3,x:164,y:150.9},0).wait(1).to({rotation:9.8,x:163.5,y:150.6},0).wait(1).to({rotation:14.3,x:162.8,y:150.1},0).wait(1).to({rotation:20.2,x:161.9,y:149.6},0).wait(1).to({rotation:27.9,x:160.7,y:148.8},0).wait(1).to({rotation:38,x:159.1,y:147.7},0).wait(1).to({rotation:51.3,x:157,y:146.4},0).wait(1).to({rotation:68.6,x:154.3,y:144.8},0).wait(1).to({rotation:89.5,x:151,y:142.6},0).wait(1).to({rotation:111.1,x:147.7,y:140.4},0).wait(1).to({rotation:129.5,x:144.7,y:138.7},0).wait(1).to({rotation:143.6,x:142.5,y:137.3},0).wait(1).to({rotation:154.2,x:140.9,y:136.2},0).wait(1).to({rotation:162,x:139.6,y:135.4},0).wait(1).to({rotation:167.9,x:138.7,y:134.8},0).wait(1).to({rotation:172.2,x:138,y:134.4},0).wait(1).to({rotation:175.4,x:137.5,y:134.1},0).wait(1).to({rotation:177.5,x:137.2,y:133.8},0).wait(1).to({rotation:179,x:137,y:133.7},0).wait(1).to({rotation:179.8,x:136.9,y:133.6},0).wait(1).to({regY:242.6,rotation:180,x:136.8,y:133.5},0).wait(12).to({regY:242.5,scaleX:1,scaleY:1,y:133.4},0).wait(1).to({scaleX:1,scaleY:1,x:136.9,y:132.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:137,y:131.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:137.2,y:129.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:137.5,y:126.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:137.9,y:121.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:138.7,y:113.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:140.1,y:100.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:141.6,y:84.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:142.5,y:75.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:142.9,y:71.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:143.1,y:68.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:143.3,y:67.7},0).wait(1).to({regX:164.8,regY:242.4,scaleX:0.73,scaleY:0.73,x:143.4,y:67.3},0).wait(51).to({regX:165,regY:242.5,x:143.5,y:67.4},0).wait(1).to({x:144.5,y:67.8},0).wait(1).to({x:146.4,y:68.6},0).wait(1).to({x:149.6,y:70},0).wait(1).to({x:154.6,y:72.2},0).wait(1).to({x:162.7,y:75.7},0).wait(1).to({x:176.5,y:81.6},0).wait(1).to({x:201.6,y:92.4},0).wait(1).to({x:228,y:103.8},0).wait(1).to({x:242.5,y:110},0).wait(1).to({x:250.3,y:113.4},0).wait(1).to({x:254.9,y:115.4},0).wait(1).to({x:257.5,y:116.5},0).wait(1).to({x:258.8,y:117.1},0).wait(1).to({regX:164.8,regY:242.4,x:259.4,y:117.3},0).wait(38));

	// dropin
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,280.7,1,1,0,0,0,144,20.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(146).to({_off:false},0).wait(1).to({regX:143.8,regY:20.4,x:150.8,y:280.2},0).wait(1).to({y:279.4},0).wait(1).to({y:277.9},0).wait(1).to({y:275.6},0).wait(1).to({y:272},0).wait(1).to({y:266.6},0).wait(1).to({y:258.4},0).wait(1).to({y:246.1},0).wait(1).to({y:231},0).wait(1).to({y:219.3},0).wait(1).to({y:212.4},0).wait(1).to({y:208.7},0).wait(1).to({y:206.9},0).wait(1).to({regX:144,regY:20.7,x:151,y:206.7},0).wait(51).to({regX:143.8,regY:20.4,x:150.8,y:206.9},0).wait(1).to({y:208.6},0).wait(1).to({y:211.8},0).wait(1).to({y:216.8},0).wait(1).to({y:223.9},0).wait(1).to({y:233},0).wait(1).to({y:243.2},0).wait(1).to({y:253},0).wait(1).to({y:261.2},0).wait(1).to({y:267.4},0).wait(1).to({y:271.7},0).wait(1).to({y:274.5},0).wait(1).to({y:276},0).wait(1).to({regX:144,regY:20.7,x:151,y:276.7},0).wait(39));

	// letshang
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(149.8,-18.8,1,1,0,0,0,144,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:144.2,regY:20.5,x:150,y:-13.3},0).wait(1).to({y:-2.2},0).wait(1).to({y:17},0).wait(1).to({y:35.4},0).wait(1).to({y:46.1},0).wait(1).to({y:52.8},0).wait(1).to({y:57.5},0).wait(1).to({y:60.8},0).wait(1).to({y:63.4},0).wait(1).to({y:65.3},0).wait(1).to({y:66.8},0).wait(1).to({y:67.9},0).wait(1).to({y:68.7},0).wait(1).to({y:69.2},0).wait(1).to({y:69.6},0).wait(1).to({regX:144,regY:21.9,x:149.8,y:71.2},0).wait(95).to({regX:144.2,regY:20.5,rotation:0.1,x:150.1,y:69.8,alpha:0.998},0).wait(1).to({rotation:0.6,x:150.7,y:70.2,alpha:0.993},0).wait(1).to({rotation:1.5,x:151.6,y:70.8,alpha:0.983},0).wait(1).to({rotation:2.8,x:153.2,y:71.6,alpha:0.968},0).wait(1).to({rotation:4.8,x:155.4,y:73,alpha:0.947},0).wait(1).to({rotation:7.5,x:158.4,y:74.8,alpha:0.917},0).wait(1).to({rotation:11.3,x:162.7,y:77.3,alpha:0.875},0).wait(1).to({rotation:16.4,x:168.6,y:80.8,alpha:0.818},0).wait(1).to({rotation:23.5,x:176.6,y:85.7,alpha:0.738},0).wait(1).to({rotation:33.4,x:187.8,y:92.4,alpha:0.629},0).wait(1).to({rotation:45.8,x:201.7,y:100.9,alpha:0.491},0).wait(1).to({rotation:58.4,x:215.9,y:109.6,alpha:0.351},0).wait(1).to({rotation:68.4,x:227,y:116.5,alpha:0.24},0).wait(1).to({rotation:75.5,x:235,y:121.4,alpha:0.161},0).wait(1).to({rotation:80.5,x:240.6,y:124.9,alpha:0.105},0).wait(1).to({rotation:84.1,x:244.4,y:127.3,alpha:0.066},0).wait(1).to({rotation:86.5,x:247.2,y:129,alpha:0.039},0).wait(1).to({rotation:88.2,x:249.1,y:130.2,alpha:0.02},0).wait(1).to({rotation:89.3,x:250.2,y:130.9,alpha:0.008},0).wait(1).to({rotation:89.8,x:250.9,y:131.3,alpha:0.002},0).wait(1).to({regX:144,regY:21.9,rotation:90,x:249.7,y:131.2,alpha:0},0).wait(132));

	// pattern2
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(195.8,277.6,1,1,0,0,0,322.6,311.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(210).to({_off:false},0).wait(1).to({x:195.5},0).wait(1).to({x:194.3,y:277.4},0).wait(1).to({x:191.9,y:277.1},0).wait(1).to({x:188.1,y:276.5},0).wait(1).to({x:182,y:275.7},0).wait(1).to({x:172.1,y:274.3},0).wait(1).to({x:155.3,y:271.9},0).wait(1).to({x:124.9,y:267.6},0).wait(1).to({x:92.7,y:263},0).wait(1).to({x:75.2,y:260.5},0).wait(1).to({x:65.6,y:259.2},0).wait(1).to({x:60.1,y:258.4},0).wait(1).to({x:56.9,y:257.9},0).wait(1).to({x:55.3,y:257.7},0).wait(1).to({x:54.8,y:257.6},0).wait(38));

	// pattern
	this.instance_6 = new lib.bb_pattern();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-106,-155,1.109,1.109);

	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(115.9,108);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},110).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},13).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},50).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({_off:false},0).wait(1).to({rotation:0.2,x:116},0).wait(1).to({rotation:0.8,x:116.2,y:108.3},0).wait(1).to({rotation:2,x:116.7,y:108.7},0).wait(1).to({rotation:3.8,x:117.4,y:109.4},0).wait(1).to({rotation:6.2,x:118.3,y:110.3},0).wait(1).to({rotation:9.6,x:119.6,y:111.6},0).wait(1).to({rotation:14,x:121.3,y:113.3},0).wait(1).to({rotation:19.8,x:123.6,y:115.5},0).wait(1).to({rotation:27.3,x:126.5,y:118.4},0).wait(1).to({rotation:37.1,x:130.3,y:122.2},0).wait(1).to({rotation:50.1,x:135.3,y:127.2},0).wait(1).to({rotation:66.9,x:141.9,y:133.6},0).wait(1).to({rotation:87.4,x:149.9,y:141.5},0).wait(1).to({rotation:109,x:158.2,y:149.8},0).wait(1).to({rotation:127.7,x:165.5,y:157},0).wait(1).to({rotation:142.3,x:171.2,y:162.6},0).wait(1).to({rotation:153.1,x:175.4,y:166.7},0).wait(1).to({rotation:161.3,x:178.5,y:169.9},0).wait(1).to({rotation:167.3,x:180.9,y:172.2},0).wait(1).to({rotation:171.8,x:182.6,y:173.9},0).wait(1).to({rotation:175.1,x:183.9,y:175.2},0).wait(1).to({rotation:177.4,x:184.8,y:176.1},0).wait(1).to({rotation:178.9,x:185.4,y:176.7},0).wait(13).to({startPosition:0},0).wait(1).to({y:176.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:178.7,x:185.5,y:175.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:178.4,x:185.7,y:173.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:177.9,x:185.9,y:170.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:177.1,x:186.4,y:166.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:175.9,x:187.1,y:158.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:173.9,x:188.3,y:146.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:170.4,x:190.4,y:126.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:166.4,x:192.8,y:102.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:164.1,x:194.1,y:89.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:163,x:194.8,y:82.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:162.3,x:195.1,y:78.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:162.1,x:195.3,y:77.2},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:0.85,scaleY:0.85,rotation:162,x:195.5,y:76.6},0).wait(50).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:195.3,y:76.3},0).wait(1).to({x:195.2,y:75.5},0).wait(1).to({x:195,y:74},0).wait(1).to({x:194.7,y:71.5},0).wait(1).to({x:194.3,y:67.6},0).wait(1).to({x:193.6,y:61.4},0).wait(1).to({x:192.4,y:50.6},0).wait(1).to({x:190.3,y:31.2},0).wait(1).to({x:188,y:10.7},0).wait(1).to({x:186.7,y:-0.5},0).wait(1).to({x:186.1,y:-6.6},0).wait(1).to({x:185.7,y:-10.2},0).wait(1).to({x:185.4,y:-12.2},0).wait(1).to({x:185.3,y:-13.2},0).wait(1).to({regX:-0.1,regY:-0.2,x:185.5,y:-13.4},0).wait(38));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC1D37").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(263));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44,-30,443.8,525.9);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_lemur_2_atlas_.png", id:"300x250_lemur_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;