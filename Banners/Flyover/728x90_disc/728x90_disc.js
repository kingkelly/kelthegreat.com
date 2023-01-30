(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.Mountains728x90 = function() {
	this.initialize(img.Mountains728x90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);// helper functions:

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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BJIAMgVQAIAIAJAAQAIAAAGgGQAFgGAAgHIgxh9IAbAAIAkBZIAlhZIAbAAIg7CQQgDAGgDAEQgDAFgFAEQgKAHgMAAQgRAAgOgNg");
	this.shape.setTransform(66.4,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbA8QgIgDgGgFQgGgGgDgGQgDgIAAgJQAAgSANgIQAHgFAJgCQAJgCALAAIAgAAIAAgEQAAgMgGgGQgHgHgOAAQgQAAgSAMIgMgQQAMgIAMgFQANgEANAAQALAAAJADQAJACAGAGQAHAFAEAJQADAIAAAMIAABOIgXAAIAAgRQgQATgYAAQgKAAgIgDgAgVAKQgHAEAAAIQAAAJAHAGQAHAEANAAQALAAAJgHQAFgDACgFQACgEAAgHIAAgKIgcAAQgOAAgHAFg");
	this.shape_1.setTransform(52.6,48.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBSQgKgFgJgIQgRgSAAgcQAAgPAFgKQAEgLAJgJQASgRAYAAQAMAAAKAFQAJAFAHALIAAhDIAaAAIAACpIgaAAIAAgSQgOAUgaAAQgMAAgKgEgAgZgFQgLALAAASQAAARAMALQAFAGAHADQAGACAHAAQAIAAAGgCQAGgDAFgGQAGgFACgIQADgHAAgJQAAgIgDgIQgCgHgGgFQgKgLgQAAQgOAAgLALg");
	this.shape_2.setTransform(38.2,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtAsQgJgIgFgMQgFgLABgNQgBgMAFgLQAFgMAJgJQATgSAaAAQAOAAAMAEQALAFAJAJQAJAJAFAMQAEALAAAMQAAAbgSARQgJAKgLAEQgMAFgOAAQgaAAgTgTgAgagcQgLALAAARQAAARALAMQAFAFAGADQAIADAHAAQAIAAAIgDQAHgDAFgFQAFgGADgHQADgHgBgJQABgIgDgHQgDgIgFgFQgLgLgRAAQgQAAgKALg");
	this.shape_3.setTransform(23.4,48.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBRIAAiHIgwAAIAAgZIB8AAIAAAZIgyAAIAACHg");
	this.shape_4.setTransform(9,46.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBVIgkg1IgSATIAAAiIgaAAIAAipIAaAAIAABjIAxgzIAhAAIgvAvIAyBKg");
	this.shape_5.setTransform(55.6,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAsQgJgJgFgKQgEgMAAgNQAAgMAEgMQAFgLAJgJQATgSAaAAQAOAAAMAFQALAEAJAJQAJAJAFALQAFAMgBAMQAAAbgSARQgJAJgLAGQgMAEgOAAQgaAAgTgTgAgbgcQgLALABARQgBASALAKQAFAHAHACQAIADAHAAQAIAAAIgDQAGgCAFgHQAGgFADgHQACgIAAgIQAAgIgCgIQgDgGgGgGQgKgLgRAAQgQAAgLALg");
	this.shape_6.setTransform(40.7,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAsQgJgJgFgKQgEgMAAgNQAAgMAEgMQAFgLAJgJQATgSAaAAQAOAAAMAFQALAEAJAJQAJAJAFALQAFAMgBAMQAAAbgSARQgJAJgLAGQgMAEgOAAQgaAAgTgTgAgbgcQgLALABARQgBASALAKQAFAHAHACQAIADAHAAQAIAAAIgDQAGgCAFgHQAGgFADgHQACgIAAgIQAAgIgCgIQgDgGgGgGQgKgLgRAAQgQAAgLALg");
	this.shape_7.setTransform(25.7,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BQIAAifIA/AAQAPAAAMAEQAMADAFAHQALANAAAPQAAAJgDAIQgDAGgGAFIgGAFIgGACQAPACAJALQAEAFADAGQACAGAAAIQAAAQgLAOQgHAHgMAEQgMADgQAAgAgkA4IApAAQAQgBAHgFQAFgCACgEQACgEAAgHQgBgWgiABIgmAAgAgkgNIAjAAQAcAAAAgTQAAgHgCgDQgCgEgEgDQgDgDgGgBIgLgBIgjAAg");
	this.shape_8.setTransform(10.7,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,75.2,62), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqDnIDCnaIATANIjDHagAAgDiQgOgPAAgYIAAh/QAAgZAOgOQAOgOAWABQAWgBANAOQAOAOAAAZIAAB/QAAAYgOAPQgNAPgWAAQgWAAgOgPgAA2A5IAACFQAAAQAOAAQAOAAAAgQIAAiFQAAgQgOAAQgOAAAAAQgAhmgTQgOgPAAgZIAAh+QAAgYAOgPQANgOAWAAQAWAAANAOQAOAPAAAYIAAB+QAAAZgOAPQgOAOgVAAQgWAAgNgOgAhRi9IAACGQAAAQAOAAQAOAAAAgQIAAiGQAAgPgOgBQgOABAAAPg");
	this.shape.setTransform(105.4,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcDmQgLgHgIgLQgQgWAAgfIAAg5IAwAAIAAA5QAAARANAAQAMAAAAgPIAAijQAAgOgLAAQgMAAAAAOIgwgEIAIjlIB1AAQAAAfgJAOQgHAMgPAAIgpAAIgEB/QAMgOAVAAQARAAALAPQALAOAAAWIAACrQAAASgFAOQgEAOgJALQgIAKgLAGQgMAGgOAAQgNAAgMgGg");
	this.shape_1.setTransform(85.3,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZDpIAAm7QAVABABgXIAdAAIAAHRg");
	this.shape_2.setTransform(72.2,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4DpIAAnRIBxAAIAAA4Ig7AAIAACOIAoAAIAAA3IgoAAIAACcIA7AAIAAA4g");
	this.shape_3.setTransform(54.1,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZDpIgvnRIA2AAIATE7IAXk7IAxAAIguHRg");
	this.shape_4.setTransform(39.5,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARDpIgEhVIgfAAIgGBVIgwAAIAqnRIA8AAIArHRgAAKBZIgKjNIgNDNIAXAAg");
	this.shape_5.setTransform(24.7,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcDpQgNgGgJgKQgJgMgFgPQgEgQAAgUIAAg6IAvAAIAABBQAAAZATAAQASAAAAgZQAAgigIggQgIgdgRgrQgWgygLghIgNgtQgEgYAAgRQAAgUAEgRQAEgQAJgMQAJgNAOgHQAOgGARAAQAOgBAMAGQAMAEAIALQAIALAFAQQAEAQAAAWIAAA+IgvAAIAAhHQAAgVgQAAQgRAAAAAVQAAAqAJAdQAEAQAXA3QAVAzALAkQAOAwAAAhQAAAagGATQgHAQgLALQgSARgbABQgPgBgNgFg");
	this.shape_6.setTransform(9.7,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,120.5,74), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB192C").s().p("Eg5pAHgIAAu/MBzTAAAIAAO/g");
	this.shape.setTransform(369,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,738,96), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DpIAAnRIBxAAIAAA4Ig7AAIAACOIAoAAIAAA3IgoAAIAACcIA7AAIAAA4g");
	this.shape.setTransform(461.5,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDDpIAAnRIBJAAQAaAAAQAOQAJAJAFAOQAGAPAAAWIAAE9QAAAWgGAPQgFAOgJAJQgQAOgaAAgAgMCxIANAAQANAAAAgSIAAk8QAAgTgNAAIgNAAg");
	this.shape_1.setTransform(446.1,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbDpIAAnRIA2AAIAAHRg");
	this.shape_2.setTransform(433.4,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXDpQgGAAgEgbIgEgtIAAhuQAAgTgLAAIgMAAIAADJIg3AAIAAnRIBFAAQAaAAAPAOQAKAJAFAOQAGAPAAAWIAAB2QAAAQgIAMQgFAKgNAKQANAKAHAKQAHAMAAAQIAABkQAAAeAHAtIAAACgAgOgUIANAAQAJABAAgUIAAh2QAAgTgJAAIgNAAg");
	this.shape_3.setTransform(421.6,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzDbQgIgLgEgOQgEgQAAgTIAAk9QAAgRAFgPQAFgOAJgMQAJgKAMgGQANgFAOAAQANAAAMAFQAMAGAJAKQAIALAFAPQAFAPAAARIAABfIgxAAIAAhjQAAgRgPAAQgOAAAAARIAAFKQAAASAOAAQAOAAAAgSIAAhwIgMAAIAAgzIBCAAIAADkIghAAIgFgSQgGAMgKAGQgKAFgKABQgdgBgQgTg");
	this.shape_4.setTransform(398.8,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcDpIgsjmIgLg+IAAEkIgtAAIAAnRIA4AAIAkDjIAJA/IAAkiIAsAAIAAHRg");
	this.shape_5.setTransform(382,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbDpIAAnRIA2AAIAAHRg");
	this.shape_6.setTransform(368.9,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdDpIAAi3IgukaIA0AAIAYDBIAXjBIA0AAIg0EaIAAC3g");
	this.shape_7.setTransform(357.2,34.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2DpIAAnRIA2AAIAAGbIA3AAIAAA2g");
	this.shape_8.setTransform(344.2,34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2DpIAAnRIBtAAIAAA4Ig3AAIAACQIArAAIAAA3IgrAAIAADSg");
	this.shape_9.setTransform(331.2,34.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag3DpIAAnRIBvAAIAAA4Ig5AAIAACOIAmAAIAAA3IgmAAIAACcIA5AAIAAA4g");
	this.shape_10.setTransform(311.6,34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaDpIAAmWIgpAAIAAg7ICHAAIAAA7IgpAAIAAGWg");
	this.shape_11.setTransform(297.4,34.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARDpIgEhVIgfAAIgGBVIgwAAIAqnRIA8AAIArHRgAAKBZIgKjNIgNDNIAXAAg");
	this.shape_12.setTransform(283.1,34.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAvDpIAAl3IgGBmIgbERIglAAIgXkRIgGhmIAAF3IguAAIAAnRIBIAAIAUC3IAIB1IAJh1IASi3IBGAAIAAHRg");
	this.shape_13.setTransform(264.4,34.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaDpIAAnRIA2AAIAAHRg");
	this.shape_14.setTransform(248.6,34.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaDpIAAmWIgpAAIAAg7ICHAAIAAA7IgpAAIAAGWg");
	this.shape_15.setTransform(237.3,34.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2DpIAAnRIA2AAIAAGbIA3AAIAAA2g");
	this.shape_16.setTransform(224.8,34.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZDmQgMgGgJgKQgKgLgFgOQgFgPAAgSIAAmHIA2AAIAAGLQAAARANAAQAPAAAAgRIAAmLIAzAAIAAGHQAAASgFAPQgFAOgJALQgJAKgMAGQgMAGgOAAQgNAAgNgGg");
	this.shape_17.setTransform(209.5,34.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag4DpIAAnRIBwAAIAAA4Ig6AAIAACOIAoAAIAAA3IgoAAIAACcIA6AAIAAA4g");
	this.shape_18.setTransform(188.8,34.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPDpIAAjJIgcAAIAADJIg3AAIAAnRIA3AAIAADPIAcAAIAAjPIA2AAIAAHRg");
	this.shape_19.setTransform(173.1,34.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaDpIAAmWIgpAAIAAg7ICHAAIAAA7IgpAAIAAGWg");
	this.shape_20.setTransform(157.7,34.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4DpIAAnRIBxAAIAAA4Ig7AAIAACOIAoAAIAAA3IgoAAIAACcIA7AAIAAA4g");
	this.shape_21.setTransform(138.2,34.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWDoQgNgFgJgKQgLgLgFgOQgFgPAAgSIAAk9QAAgRAFgPQAFgOALgMQAJgKANgGQANgFANAAQAPAAAMAFQAMAGAHAKQAQAWAAAkIAABZIgtAAIAAhbQAAgTgQAAQgPAAAAATIAAFBQAAASAPAAQAQAAAAgSIAAhcIAtAAIAABaQAAASgEAPQgEAOgIALQgHAKgMAFQgMAHgPAAQgNAAgNgHg");
	this.shape_22.setTransform(123.5,34.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcDpIgsjmIgLg+IAAEkIgtAAIAAnRIA4AAIAkDjIAJA/IAAkiIAsAAIAAHRg");
	this.shape_23.setTransform(107,34.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag4DpIAAnRIBxAAIAAA4Ig7AAIAACOIAoAAIAAA3IgoAAIAACcIA7AAIAAA4g");
	this.shape_24.setTransform(91.9,34.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbDpIAAnRIA2AAIAAHRg");
	this.shape_25.setTransform(80.4,34.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWDpQgFAAgEgbIgDgtIAAhuQAAgTgMAAIgMAAIAADJIg3AAIAAnRIBGAAQAZAAAPAOQAKAJAFAOQAGAPAAAWIAAB2QAAAQgHAMQgGAKgMAKQAMAKAHAKQAHAMAAAQIAABkQAAAeAHAtIAAACgAgOgUIANAAQAJABAAgUIAAh2QAAgTgJAAIgNAAg");
	this.shape_26.setTransform(68.5,34.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag3DpIAAnRIBvAAIAAA4Ig5AAIAACOIAmAAIAAA3IgmAAIAACcIA5AAIAAA4g");
	this.shape_27.setTransform(53.6,34.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhBDpIAAnRIBGAAQAZAAAQAOQAJAJAFAOQAGAPAAAWIAACDQAAAVgGAOQgFAOgJAJQgQAPgZAAIgPAAIAAC7gAgKgFIANAAQAKgBAAgRIAAiGQAAgTgKAAIgNAAg");
	this.shape_28.setTransform(38.8,34.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUDpIgUiUIgWCUIg0AAIAtjlIgqjsIA2AAIASClIAYilIAzAAIgsDhIAqDwg");
	this.shape_29.setTransform(23.1,34.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag3DpIAAnRIBvAAIAAA4Ig5AAIAACOIAnAAIAAA3IgnAAIAACcIA5AAIAAA4g");
	this.shape_30.setTransform(9.3,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,469.8,74), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARDpIgEhVIgfAAIgGBVIgwAAIAqnRIA8AAIArHRgAAKBZIgKjNIgNDNIAXAAg");
	this.shape.setTransform(87.7,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhDDpIAAnRIBJAAQAaAAAQAOQAJAJAFAOQAGAPAAAWIAAE9QAAAWgGAPQgFAOgJAJQgQAOgaAAgAgMCxIANAAQANAAAAgSIAAk8QAAgTgNAAIgNAAg");
	this.shape_1.setTransform(72.4,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARDpIgEhVIgfAAIgGBVIgwAAIAqnRIA8AAIArHRgAAKBZIgKjNIgNDNIAXAAg");
	this.shape_2.setTransform(56.6,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcDpIgsjmIgLg+IAAEkIguAAIAAnRIA5AAIAlDjIAIA/IAAkiIAtAAIAAHRg");
	this.shape_3.setTransform(40.6,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARDpIgEhVIgfAAIgGBVIgwAAIAqnRIA8AAIArHRgAAKBZIgKjNIgNDNIAXAAg");
	this.shape_4.setTransform(24.4,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWDoQgNgFgJgKQgLgLgFgOQgFgPAAgSIAAk9QAAgRAFgPQAFgOALgMQAJgKANgGQANgFANAAQAPAAAMAFQAMAGAHAKQAQAWAAAkIAABZIgtAAIAAhbQAAgTgQAAQgPAAAAATIAAFBQAAASAPAAQAQAAAAgSIAAhcIAtAAIAABaQAAASgEAPQgEAOgIALQgHAKgMAFQgMAHgPAAQgNAAgNgHg");
	this.shape_5.setTransform(9.8,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,97.2,74), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXDpQgGAAgEgbIgEgtIAAhuQABgTgLAAIgOAAIAADJIg3AAIAAnRIBGAAQAaAAAQAOQAJAJAFAOQAGAPAAAWIAAB2QAAAQgIAMQgFAKgNAKQANAKAGAKQAIAMAAAQIAABkQAAAeAHAtIAAACgAgPgUIAOAAQAJABAAgUIAAh2QAAgTgJAAIgOAAg");
	this.shape.setTransform(58.2,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZDmQgMgGgJgKQgKgLgFgOQgFgPAAgSIAAmHIA2AAIAAGLQAAARANAAQAPAAAAgRIAAmLIAzAAIAAGHQAAASgFAPQgFAOgJALQgJAKgMAGQgMAGgOAAQgNAAgNgGg");
	this.shape_1.setTransform(41.4,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaDoQgMgFgKgKQgKgLgFgOQgFgPAAgSIAAk9QAAgRAFgPQAFgOAKgMQAKgKAMgGQANgFANAAQAOAAANAFQANAGAJAKQAKAMAFAOQAFAPAAARIAAE9QAAASgFAPQgFAOgKALQgJAKgNAFQgMAHgPAAQgNAAgNgHgAgNiiIAAFFQAAAQANAAQAOAAAAgQIAAlFQAAgRgOAAQgNAAAAARg");
	this.shape_2.setTransform(24.9,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdDpIAAi3IgukaIA0AAIAYDBIAXjBIA0AAIg0EaIAAC3g");
	this.shape_3.setTransform(9.4,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,67.8,74), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXDpQgGAAgEgbIgEgtIAAhuQABgTgLAAIgOAAIAADJIg3AAIAAnRIBGAAQAZAAARAOQAJAJAFAOQAGAPAAAWIAAB2QAAAQgIAMQgFAKgNAKQANAKAGAKQAIAMAAAQIAABkQAAAeAIAtIAAACgAgPgUIAPAAQAIABAAgUIAAh2QAAgTgIAAIgPAAg");
	this.shape.setTransform(111.2,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4DpIAAnRIBxAAIAAA4Ig7AAIAACOIAoAAIAAA3IgoAAIAACcIA7AAIAAA4g");
	this.shape_1.setTransform(96.3,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZDpIgvnRIA2AAIAUE7IAWk7IAyAAIgvHRg");
	this.shape_2.setTransform(81.7,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaDoQgMgFgKgKQgKgLgFgOQgFgPAAgSIAAk9QAAgRAFgPQAFgOAKgMQAKgKAMgGQANgFANAAQAOAAANAFQANAGAJAKQAKAMAFAOQAFAPAAARIAAE9QAAASgFAPQgFAOgKALQgJAKgNAFQgMAHgPAAQgNAAgNgHgAgNiiIAAFFQAAAQANAAQAOAAAAgQIAAlFQAAgRgOAAQgNAAAAARg");
	this.shape_3.setTransform(66,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWDoQgNgFgJgKQgLgLgFgOQgFgPAAgSIAAk9QAAgRAFgPQAFgOALgMQAJgKANgGQANgFANAAQAPAAAMAFQAMAGAHAKQAQAWAAAkIAABZIgtAAIAAhbQAAgTgQAAQgPAAAAATIAAFBQAAASAPAAQAQAAAAgSIAAhcIAtAAIAABaQAAASgEAPQgEAOgIALQgHAKgMAFQgMAHgPAAQgNAAgNgHg");
	this.shape_4.setTransform(50.4,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcDpQgNgGgJgKQgJgMgFgPQgEgQAAgUIAAg6IAvAAIAABBQAAAZATAAQASAAAAgZQAAgigIggQgIgdgRgrQgWgygLghIgNgtQgEgYAAgRQAAgUAEgRQAEgQAJgMQAJgNAOgHQAOgGARAAQAOgBAMAGQAMAEAIALQAIALAFAQQAEAQAAAWIAAA+IgvAAIAAhHQAAgVgQAAQgRAAAAAVQAAAqAJAdQAEAQAXA3QAVAzALAkQAOAwAAAhQAAAagGATQgHAQgLALQgSARgbABQgPgBgNgFg");
	this.shape_5.setTransform(34.9,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbDpIAAnRIA3AAIAAHRg");
	this.shape_6.setTransform(23,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDDpIAAnRIBJAAQAaAAAQAOQAJAJAFAOQAGAPAAAWIAAE9QAAAWgGAPQgFAOgJAJQgQAOgaAAgAgMCxIANAAQANAAAAgSIAAk8QAAgTgNAAIgNAAg");
	this.shape_7.setTransform(10.5,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,120.8,74), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mountains728x90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,728,90), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(18,12,14,0)","rgba(18,12,14,0.949)"],[0.576,1],-23,0,22.9,0).s().p("AjeBEQgXhNAuiDID0gNQgSAwABAWQAAAdAdAAQAZAAAhgWQAggWAugwQgCBNAoAsQhNBUhYAwQhVAvhKAAQhoAAgZhWg");
	this.shape.setTransform(23.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,46.2,30.8), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(18,12,14,0)","rgba(18,12,14,0.949)"],[0.584,1],-11.5,0,10.8,0).s().p("AhxgQIBDhEQApA/AuAAQAUABARgTQASgSASgrIg/DHIgXACQhgAAgth1g");
	this.shape.setTransform(11.4,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,22.9,20.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#231F20","#FFFFFF"],[0,0.624],-18.1,0,3.5,0).s().p("AiYARQBKgQAwglQAuglAEguICogTQgIBuhxBMQhlBGiZAVQAJg7Aag/g");
	this.shape.setTransform(18.8,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,37.5,27.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#231F20","rgba(35,31,32,0.796)","rgba(35,31,32,0)"],[0,0.09,1],-30.5,0,30.5,0).s().p("AA9BZQhJgCiDgLQhegJhDgBQAihMAdhOQBBgBC/AOQCuALB0gFIAACRQhdANhuAAIgpAAg");
	this.shape.setTransform(30.5,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,61,17.8), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E4E5E6","#AAACAE","#525254","#414042"],[0,0.149,0.467,0.925,1],-1.9,-0.5,3.9,0.5).s().p("AgqBZQAhhWAdhyQgQBSAmASQgZA+gLA9QgbgHgVgQg");
	this.shape.setTransform(4.3,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,8.5,22.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#231F20","rgba(35,31,32,0.796)","rgba(35,31,32,0)"],[0,0.09,1],19.6,0,-19.5,0).s().p("AjDBCQBSiBD3hzQAhgPAcgKIg6CTIgDABQhDAbg3ApQg9AugiA4QgZArgHAug");
	this.shape.setTransform(19.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,39.1,40.9), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(18,12,14,0)","rgba(18,12,14,0.949)"],[0.576,1],-18.8,0,18.8,0).s().p("Ah8AgQBBAABWg2QBXg2BWheIhHC6QhEBFhVAqQhaAshVAAg");
	this.shape.setTransform(20,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,40,34.2), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,368.9,48);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg5pgHfMBzTAAAIAAO/MhzTAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.9,-49,740,98);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,368.9,48);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg5pgHfMBzTAAAIAAO/MhzTAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.9,-49,740,98);


// stage content:
(lib._728x90_disc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuUBvQgogrAAhEQAAhDApgrQArgsBEgBQA5AAAkAdQAjAcAIAyIhDAAQgNgxg4AAQgmgBgWAcQgXAbAAArQAAArAXAcQAXAbAmAAQA3AAANgyIBDAAQgIAzgjAcQglAcg5ABQhGAAgpgtgAN1CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgANPAjIgqh6IgBAAIgqB6IBVAAgAFpCWIAAksIBzAAQBNABArArQAoAoAABCQAABEgoAoQgrAqhNAAgAGtBeIApAAQAyAAAYgcQAXgYAAgqQAAgpgXgZQgYgcgyAAIgpAAgAD2CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgADQAjIgqh6IgBAAIgqB6IBVAAgAhXCWIiQi5IgBAAIABC5IhEAAIAAksIA8AAICQC5IABAAIgBi5IBEAAIAAEsgAmdCWIgVg9Ih4AAIgVA9IhGAAIBvksIBQAAIBxEsgAnEAjIgph6IgCAAIgqB6IBVAAg");
	this.shape.setTransform(666.7,67.1,0.272,0.272);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(690.3,37.7,0.272,0.272,0,0,0,20.2,17.1);
	this.instance.alpha = 0.352;

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(680.1,32.7,0.272,0.272,0,0,0,4.4,11.4);
	this.instance_1.alpha = 0.352;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(690.7,32.1,0.272,0.272,0,0,0,18.8,14);
	this.instance_2.alpha = 0.352;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(664.1,29.9,0.272,0.272,0,0,0,11.6,10.5);
	this.instance_3.alpha = 0.352;

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(620,62.3,0.272,0.272,0,0,0,19.7,20.4);
	this.instance_4.alpha = 0.352;

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(638.4,58.2,0.272,0.272,0,0,0,30.9,9);
	this.instance_5.alpha = 0.352;

	this.instance_6 = new lib.Path_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(612.1,55.9,0.272,0.272,0,0,0,23.2,15.7);
	this.instance_6.alpha = 0.352;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxJOCQguguAIhPQAMh1BChSQBahuDXhkQAggPAdgKIAvh2QgrAwg0AaQgzAZg1AAQhBAAgmgoQhMBUhYAxQhWAuhKAAQhoAAgZhVQgXhOAviDIFTvAID8gYIlbPLQgSAwABAWQAAAdAdAAQAZAAAhgWQAfgWAugvQABg4AYg/IDapfIDqgcIjYJaQgRAuACAaQACAcAZAAQAuAAA0hIQBEhcBJjMIB+liIDwgdIlZOxQBGgCCSALQCbALBTAAQExABEZhtIAFADQi3DIkzAwQisAakdgZQhegIhDgCQjXHlj4AAQhNAAgrgrgArwHnQhgAnhBA+QhNBKgNBVQgBAZAMARQAMAPATAAQA0AAAvhFQAkg4Ayh/IAahCgA+0mTIiSAPIBwk5IOdhZIgeBUQgsB+hTA6QhUA5inAPIivASIhdEDIFXgiIhbEBIlZAiIjYJgIlEBOgARADgIAnhNIieAsIi/g8IBKgtIIRheIg4D1Ig4AsgAg7AqQhThVALidQAHhqAkh4QAmiGA+hsQCakQDiAAQCDAABRA6QBRA5AVBvQAjApAkgBQAUAAARgSQATgSASgrIDYgVIipIFQgKAgAEANQADANAQAAQA4AABQibQBYisA5kDIC2gSQgNBLgRBGQgIArAGAYQAGAYAUAJQAyh9BZhNQBmhaB/ABQBWAAAsAnQApAmgFBAQgIBuhwBNQhnBGiYAVIgDAdQgCAhANASQANASAcAAQBBABBXg3QBXg2BXhfIB8lGICFgMIgOBeQAdg3ArgeQAsgfA4AAQAoAAAhAOIg5CbQgYgDgZAAQhDAAguArQgtAogfBQIhgD/IjJAtIAghSQhEBGhVAqQhbAshVAAQhYgBgvgwQgwgyAGhcQABgVAFgeQgcgIgUgQQhHC8hjBqQh5CAieAAQhiAAgkg/Qgjg/AhhrIBbkdQgOADgJAAQgeAAgagMQgMBpgoBxQgtB9hCBjQijD0jdAAQiQAAhNhRgADTomQhaC8gLCqQgJCABTABQBiAABijQQBYi9ANipQAJiAhUAAQhhgBhiDQgAZmqpQguA2gfBLQBLgQAwglQAvgmADguQACgUgHgMQgHgLgOAAQgbAAgrAzg");
	this.shape_1.setTransform(644,47.5,0.272,0.272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(269));

	// Layer 9
	this.instance_7 = new lib.Symbol8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(203,47.1,1,1,0,0,0,37.6,31);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(256).to({_off:false},0).to({alpha:1},12).wait(1));

	// Layer 8
	this.instance_8 = new lib.Symbol7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(81.1,122.1,1,1,0,0,0,60.2,37);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(232).to({_off:false},0).wait(1).to({regX:60,regY:34.7,x:80.9,y:113.7},0).wait(1).to({y:103.4},0).wait(1).to({y:85.8},0).wait(1).to({y:71.4},0).wait(1).to({y:63.4},0).wait(1).to({y:58.3},0).wait(1).to({y:54.9},0).wait(1).to({y:52.4},0).wait(1).to({y:50.6},0).wait(1).to({y:49.2},0).wait(1).to({y:48.2},0).wait(1).to({y:47.6},0).wait(1).to({y:47.1},0).wait(1).to({y:46.9},0).wait(1).to({regX:60.2,regY:37,x:81.1,y:49.1},0).wait(22));

	// red
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(365,145.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(365,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},221).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(221).to({_off:false},0).wait(1).to({y:144.1},0).wait(1).to({y:141.2},0).wait(1).to({y:134.5},0).wait(1).to({y:117.9},0).wait(1).to({y:90.9},0).wait(1).to({y:74.6},0).wait(1).to({y:65},0).wait(1).to({y:58.6},0).wait(1).to({y:54.1},0).wait(1).to({y:50.8},0).wait(1).to({y:48.4},0).wait(1).to({y:46.6},0).wait(1).to({y:45.4},0).wait(1).to({y:44.6},0).wait(1).to({y:44.2},0).to({_off:true},1).wait(32));

	// Layer 6
	this.instance_11 = new lib.Symbol5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(256.2,118.1,1,1,0,0,0,234.9,37);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(136).to({_off:false},0).wait(1).to({regX:235.4,regY:34.6,x:256.7,y:115,alpha:0.009},0).wait(1).to({y:112.3,alpha:0.048},0).wait(1).to({y:105.2,alpha:0.148},0).wait(1).to({y:90.5,alpha:0.354},0).wait(1).to({y:76.9,alpha:0.547},0).wait(1).to({y:68,alpha:0.671},0).wait(1).to({y:62,alpha:0.756},0).wait(1).to({y:57.6,alpha:0.818},0).wait(1).to({y:54.3,alpha:0.865},0).wait(1).to({y:51.7,alpha:0.901},0).wait(1).to({y:49.7,alpha:0.929},0).wait(1).to({y:48.2,alpha:0.951},0).wait(1).to({y:47,alpha:0.968},0).wait(1).to({y:46.1,alpha:0.98},0).wait(1).to({y:45.4,alpha:0.99},0).wait(1).to({y:45,alpha:0.996},0).wait(1).to({y:44.8,alpha:0.999},0).wait(1).to({regX:234.9,regY:37,x:256.2,y:47.1,alpha:1},0).wait(115));

	// Layer 5
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(261.4,97,1,1,0,0,0,48.6,37);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42).to({_off:false},0).wait(1).to({regX:49.1,regY:34.6,x:261.9,y:91.8,alpha:0.056},0).wait(1).to({y:87.9,alpha:0.134},0).wait(1).to({y:82,alpha:0.253},0).wait(1).to({y:73.2,alpha:0.429},0).wait(1).to({y:64.9,alpha:0.593},0).wait(1).to({y:59.5,alpha:0.701},0).wait(1).to({y:55.9,alpha:0.773},0).wait(1).to({y:53.3,alpha:0.825},0).wait(1).to({y:51.4,alpha:0.864},0).wait(1).to({y:49.9,alpha:0.895},0).wait(1).to({y:48.6,alpha:0.919},0).wait(1).to({y:47.7,alpha:0.939},0).wait(1).to({y:46.9,alpha:0.954},0).wait(1).to({y:46.3,alpha:0.967},0).wait(1).to({y:45.8,alpha:0.977},0).wait(1).to({y:45.4,alpha:0.985},0).wait(1).to({y:45.1,alpha:0.991},0).wait(1).to({y:44.9,alpha:0.995},0).wait(1).to({y:44.7,alpha:0.998},0).wait(1).to({y:44.6,alpha:0.999},0).wait(1).to({regX:48.6,regY:37,x:261.4,y:47,alpha:1},0).wait(58).to({regX:49.1,regY:34.6,x:261.9,y:44.5,alpha:0.998},0).wait(1).to({y:44.1,alpha:0.993},0).wait(1).to({y:43.3,alpha:0.983},0).wait(1).to({y:42,alpha:0.967},0).wait(1).to({y:40,alpha:0.942},0).wait(1).to({y:37.1,alpha:0.904},0).wait(1).to({y:32.5,alpha:0.844},0).wait(1).to({y:23.9,alpha:0.734},0).wait(1).to({y:-2.6,alpha:0.395},0).wait(1).to({y:-21.5,alpha:0.151},0).wait(1).to({y:-27.6,alpha:0.073},0).wait(1).to({y:-30.7,alpha:0.034},0).wait(1).to({y:-32.3,alpha:0.013},0).wait(1).to({y:-33.1,alpha:0.003},0).wait(1).to({regX:48.6,regY:37,x:261.4,y:-31,alpha:0},0).to({_off:true},6).wait(128));

	// Layer 4
	this.instance_13 = new lib.Symbol3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(176.4,97,1,1,0,0,0,33.9,37);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21).to({_off:false},0).wait(1).to({regX:33.5,regY:34.6,x:176,y:91.8,alpha:0.056},0).wait(1).to({y:87.9,alpha:0.134},0).wait(1).to({y:82,alpha:0.253},0).wait(1).to({y:73.2,alpha:0.429},0).wait(1).to({y:64.9,alpha:0.593},0).wait(1).to({y:59.5,alpha:0.701},0).wait(1).to({y:55.9,alpha:0.773},0).wait(1).to({y:53.3,alpha:0.825},0).wait(1).to({y:51.4,alpha:0.864},0).wait(1).to({y:49.9,alpha:0.895},0).wait(1).to({y:48.6,alpha:0.919},0).wait(1).to({y:47.7,alpha:0.939},0).wait(1).to({y:46.9,alpha:0.954},0).wait(1).to({y:46.3,alpha:0.967},0).wait(1).to({y:45.8,alpha:0.977},0).wait(1).to({y:45.4,alpha:0.985},0).wait(1).to({y:45.1,alpha:0.991},0).wait(1).to({y:44.9,alpha:0.995},0).wait(1).to({y:44.7,alpha:0.998},0).wait(1).to({y:44.6,alpha:0.999},0).wait(1).to({regX:33.9,regY:37,x:176.4,y:47,alpha:1},0).wait(81).to({regX:33.5,regY:34.6,x:176,y:44.5,alpha:0.998},0).wait(1).to({y:44.1,alpha:0.993},0).wait(1).to({y:43.3,alpha:0.983},0).wait(1).to({y:42,alpha:0.967},0).wait(1).to({y:40,alpha:0.942},0).wait(1).to({y:37.1,alpha:0.904},0).wait(1).to({y:32.5,alpha:0.844},0).wait(1).to({y:23.9,alpha:0.734},0).wait(1).to({y:-2.6,alpha:0.395},0).wait(1).to({y:-21.5,alpha:0.151},0).wait(1).to({y:-27.6,alpha:0.073},0).wait(1).to({y:-30.7,alpha:0.034},0).wait(1).to({y:-32.3,alpha:0.013},0).wait(1).to({y:-33.1,alpha:0.003},0).wait(1).to({regX:33.9,regY:37,x:176.4,y:-31,alpha:0},0).to({_off:true},4).wait(128));

	// txt1
	this.instance_14 = new lib.Symbol2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(80.2,96.9,1,1,0,0,0,60.4,37);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:61,regY:34.6,x:80.8,y:91.7,alpha:0.056},0).wait(1).to({y:87.8,alpha:0.134},0).wait(1).to({y:81.8,alpha:0.253},0).wait(1).to({y:73,alpha:0.429},0).wait(1).to({y:64.8,alpha:0.593},0).wait(1).to({y:59.4,alpha:0.701},0).wait(1).to({y:55.8,alpha:0.773},0).wait(1).to({y:53.2,alpha:0.825},0).wait(1).to({y:51.2,alpha:0.864},0).wait(1).to({y:49.7,alpha:0.895},0).wait(1).to({y:48.5,alpha:0.919},0).wait(1).to({y:47.5,alpha:0.939},0).wait(1).to({y:46.7,alpha:0.954},0).wait(1).to({y:46.1,alpha:0.967},0).wait(1).to({y:45.6,alpha:0.977},0).wait(1).to({y:45.2,alpha:0.985},0).wait(1).to({y:44.9,alpha:0.991},0).wait(1).to({y:44.7,alpha:0.995},0).wait(1).to({y:44.6,alpha:0.998},0).wait(1).to({y:44.5,alpha:0.999},0).wait(1).to({regX:60.4,regY:37,x:80.2,y:46.9,alpha:1},0).wait(104).to({regX:61,regY:34.6,x:80.8,y:44.3,alpha:0.998},0).wait(1).to({y:43.9,alpha:0.993},0).wait(1).to({y:43.1,alpha:0.983},0).wait(1).to({y:41.8,alpha:0.967},0).wait(1).to({y:39.9,alpha:0.942},0).wait(1).to({y:36.9,alpha:0.904},0).wait(1).to({y:32.3,alpha:0.844},0).wait(1).to({y:23.7,alpha:0.734},0).wait(1).to({y:-2.7,alpha:0.395},0).wait(1).to({y:-21.7,alpha:0.151},0).wait(1).to({y:-27.8,alpha:0.073},0).wait(1).to({y:-30.9,alpha:0.034},0).wait(1).to({y:-32.5,alpha:0.013},0).wait(1).to({y:-33.3,alpha:0.003},0).wait(1).to({regX:60.4,regY:37,x:80.2,y:-31.1,alpha:0},0).to({_off:true},2).wait(128));

	// mounts
	this.instance_15 = new lib.Symbol1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.2,scaleY:1.2},238).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,133.8);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Mountains728x90.jpg", id:"Mountains728x90"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;