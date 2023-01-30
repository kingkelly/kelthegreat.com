(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_disc_atlas_NP_", frames: [[0,0,300,250],[0,252,300,250],[0,504,300,250]]}
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



(lib.Lights300x250 = function() {
	this.spriteSheet = ss["300x250_disc_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mountains300x250 = function() {
	this.spriteSheet = ss["300x250_disc_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Valley300x250 = function() {
	this.spriteSheet = ss["300x250_disc_atlas_NP_"];
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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieFWIEirAIAbAVIkiLAgAAwFQQgVgXAAgkIAAi8QAAgkAVgWQAUgUAhAAQAhAAATAUQAVAWAAAkIAAC8QAAAkgVAXQgUAVggAAQghAAgUgVgABRBUIAADHQAAAXAUAAQAVAAAAgXIAAjHQAAgYgVAAQgUAAAAAYgAiYgeQgVgWAAgkIAAi7QAAglAVgWQATgVAhAAQAhAAATAVQAWAWAAAlIAAC7QAAAkgWAWQgUAWggAAQghAAgTgWgAh6kZIAADHQAAAYAWAAQAUAAAAgYIAAjHQAAgYgUAAQgWAAAAAYg");
	this.shape.setTransform(155.7,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqFVQgQgJgMgQQgXghgBgvIAAhUIBIAAIAABVQAAAYASAAQATAAgBgWIAAjyQABgVgRAAQgRAAAAAVIhHgGIALlUICtAAQABAugMAVQgMASgVAAIg+AAIgGC8QARgVAgAAQAaAAARAWQAPAVAAAhIAAD/QAAAZgGAWQgHAVgNAQQgMAQgRAIQgSAIgVAAQgTAAgSgJg");
	this.shape_1.setTransform(125.8,50.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmFaIAAqSQAgAAAAghIAtAAIAAKzg");
	this.shape_2.setTransform(106.2,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTFaIAAqzICnAAIAABTIhXAAIAADTIA7AAIAABSIg7AAIAADoIBXAAIAABTg");
	this.shape_3.setTransform(79.4,50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnFaIhFqzIBQAAIAeHUIAhnUIBKAAIhFKzg");
	this.shape_4.setTransform(57.6,50.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZFaIgFh+IgvAAIgJB+IhHAAIA+qzIBaAAIA/KzgAAPCEIgPkxIgUExIAjAAg");
	this.shape_5.setTransform(35.6,50.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqFbQgTgIgOgRQgNgQgHgYQgHgXAAgfIAAhUIBGAAIAABhQAAAkAdAAQAbAAAAgkQAAgzgMgwQgLgsgbg/QgghLgRgyIgShDQgIgiAAgZQAAgeAHgZQAGgaANgSQAOgSAUgKQAVgKAbAAQAUAAASAIQARAHAMAPQANAQAGAZQAHAXAAAhIAABcIhGAAIAAhpQAAgfgXAAQgbAAAAAfQAAA/ANAqQAGAXAjBTQAgBNAQA1QAVBGAAAyQAAAmgKAcQgJAZgRAQQgbAZgoAAQgXAAgTgHg");
	this.shape_6.setTransform(13.4,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,177,107.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnCjIAAlFIBOAAIAAAnIgnAAIAABkIAbAAIAAAmIgbAAIAABtIAnAAIAAAng");
	this.shape.setTransform(218.9,-7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSCjIAAkbIgdAAIAAgqIBfAAIAAAqIgdAAIAAEbg");
	this.shape_1.setTransform(209,-7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMCjIgCg7IgWAAIgEA7IgiAAIAdlFIAqAAIAeFFgAAHA+IgHiPIgJCPIAQAAg");
	this.shape_2.setTransform(199,-7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhCjIAAkGIgEBIIgTC+IgaAAIgQi+IgEhIIAAEGIggAAIAAlFIAyAAIAOCAIAGBSIAGhSIANiAIAwAAIAAFFg");
	this.shape_3.setTransform(185.9,-7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSCjIAAlFIAlAAIAAFFg");
	this.shape_4.setTransform(174.9,-7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSCjIAAkbIgcAAIAAgqIBdAAIAAAqIgcAAIAAEbg");
	this.shape_5.setTransform(167,-7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmCjIAAlFIAmAAIAAEfIAnAAIAAAmg");
	this.shape_6.setTransform(158.2,-7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRChQgJgEgHgHQgGgIgEgKQgDgKAAgNIAAkRIAmAAIAAEUQgBAMAJAAQALAAgBgMIAAkUIAlAAIAAERQAAANgEAKQgDAKgGAIQgHAHgIAEQgJAEgKAAQgIAAgJgEg");
	this.shape_7.setTransform(147.6,-7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnCjIAAlFIBOAAIAAAnIgnAAIAABkIAbAAIAAAmIgbAAIAABtIAnAAIAAAng");
	this.shape_8.setTransform(133,-7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKCjIAAiMIgTAAIAACMIgmAAIAAlFIAmAAIAACRIATAAIAAiRIAmAAIAAFFg");
	this.shape_9.setTransform(122,-7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSCjIAAkbIgcAAIAAgqIBdAAIAAAqIgcAAIAAEbg");
	this.shape_10.setTransform(111.2,-7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnCjIAAlFIBOAAIAAAnIgnAAIAABkIAbAAIAAAmIgbAAIAABtIAnAAIAAAng");
	this.shape_11.setTransform(97.5,-7.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPCjQgJgEgHgHQgHgIgDgKQgFgKAAgNIAAjdQAAgNAFgKQADgKAHgIQAHgHAJgEQAJgEAJAAQAKAAAJAEQAHAEAGAHQAMAPAAAaIAAA+IghAAIAAhAQABgNgLAAQgLAAAAANIAADhQAAANALAAQALAAgBgNIAAhBIAhAAIAAA/QAAANgEAKQgDAKgFAIQgGAHgHAEQgJAEgKAAQgJAAgJgEg");
	this.shape_12.setTransform(87.3,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUCjIgfihIgIgrIAADMIgfAAIAAlFIAnAAIAZCfIAGAsIAAjLIAfAAIAAFFg");
	this.shape_13.setTransform(75.7,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmCjIAAlFIBOAAIAAAnIgpAAIAABkIAbAAIAAAmIgbAAIAABtIApAAIAAAng");
	this.shape_14.setTransform(65.2,-7.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSCjIAAlFIAlAAIAAFFg");
	this.shape_15.setTransform(57.1,-7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQCjQgEAAgDgTIgDgfIAAhNQAAgNgGAAIgKAAIAACMIgnAAIAAlFIAyAAQARAAALAKQAHAGADAKQAEALABAOIAABUQgBAKgFAJQgEAHgIAHQAIAHAFAHQAGAJAAAKIAABGQAAAVAEAgIAAABgAgKgNIAKAAQAGAAgBgNIAAhUQABgNgGAAIgKAAg");
	this.shape_16.setTransform(48.8,-7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnCjIAAlFIBOAAIAAAnIgoAAIAABkIAcAAIAAAmIgcAAIAABtIAoAAIAAAng");
	this.shape_17.setTransform(38.4,-7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguCjIAAlFIAyAAQARAAALAKQAHAGAEAKQADALAAAOIAABcQAAAPgDAKQgEAKgHAGQgLAKgRAAIgLAAIAACDgAgHgDIAJAAQAIAAgBgNIAAheQABgNgIAAIgJAAg");
	this.shape_18.setTransform(28.1,-7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOCjIgOhoIgPBoIglAAIAgihIgdikIAlAAIANBzIAQhzIAkAAIgfCdIAeCog");
	this.shape_19.setTransform(17.1,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgnCjIAAlFIBOAAIAAAnIgnAAIAABkIAbAAIAAAmIgbAAIAABtIAnAAIAAAng");
	this.shape_20.setTransform(7.4,-7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhWFoIAArPICtAAIAABXIhaAAIAADbIA9AAIAABVIg9AAIAADxIBaAAIAABXg");
	this.shape_21.setTransform(214,52.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhoFoIAArPIBxAAQAoAAAZAXQAOANAIAVQAJAYAAAhIAAHrQAAAhgJAYQgIAVgOAOQgZAWgoAAgAgUESIAVAAQAVAAAAgdIAAnoQAAgdgVAAIgVAAg");
	this.shape_22.setTransform(190.4,52.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpFoIAArPIBTAAIAALPg");
	this.shape_23.setTransform(170.7,52.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAiFoQgHAAgHgqIgGhGIAAipQABgcgSAAIgUAAIAAE1IhVAAIAArPIBsAAQAoAAAXAXQAQANAHAVQAKAYAAAhIAAC3QAAAYgLATQgKAQgSAPQATAQAKAPQAMAUgBAYIAACZQABAwAKBFIAAADgAgXgeIAVAAQAOAAAAgeIAAi3QAAgdgOAAIgVAAg");
	this.shape_24.setTransform(152.5,52.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhPFRQgMgQgHgXQgGgXAAgeIAAnpQAAgaAIgYQAIgWAOgRQANgRATgJQATgIAWAAQAVAAATAIQASAJANARQAOAQAHAXQAIAXAAAbIAACTIhMAAIAAiaQAAgagXAAQgXAAAAAaIAAH/QAAAbAXAAQAWAAAAgbIAAiuIgTAAIAAhOIBmAAIAAFfIg0AAIgHgbQgJASgQAJQgOAJgRAAQgsAAgZgfg");
	this.shape_25.setTransform(117.4,52.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAsFoIhGlkIgQhgIAAHEIhHAAIAArPIBXAAIA5FfIANBiIAAnBIBGAAIAALPg");
	this.shape_26.setTransform(91.4,52.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpFoIAArPIBTAAIAALPg");
	this.shape_27.setTransform(71.2,52.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgtFoIAAkaIhHm1IBRAAIAlEqIAjkqIBQAAIhPG1IAAEag");
	this.shape_28.setTransform(53.2,52.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhTFoIAArPIBTAAIAAJ7IBUAAIAABUg");
	this.shape_29.setTransform(33.1,52.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhTFoIAArPICnAAIAABXIhUAAIAADeIBCAAIAABWIhCAAIAAFEg");
	this.shape_30.setTransform(13,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,-32,225.7,143.9), null);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYFNIgFh5IgtAAIgIB5IhFAAIA8qZIBWAAIA9KZgAAOB/IgOklIgTElIAhAAg");
	this.shape.setTransform(144.3,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhFNIAAqZIBpAAQAlAAAXAVQAOAMAHATQAJAWAAAfIAAHHQAAAegJAXQgHATgOAMQgXAVglAAgAgSD+IASAAQAUAAgBgbIAAnEQABgbgUAAIgSAAg");
	this.shape_1.setTransform(122.5,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYFNIgFh5IgtAAIgIB5IhFAAIA8qZIBWAAIA9KZgAAOB/IgOklIgTElIAhAAg");
	this.shape_2.setTransform(99.8,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoFNIhAlJIgPhZIAAGiIhBAAIAAqZIBQAAIA1FEIAMBbIAAmfIBAAAIAAKZg");
	this.shape_3.setTransform(76.9,29.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYFNIgFh5IgtAAIgIB5IhFAAIA8qZIBWAAIA9KZgAAOB/IgOklIgTElIAhAAg");
	this.shape_4.setTransform(53.7,29.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggFMQgSgHgNgPQgPgQgIgUQgIgWAAgZIAAnFQAAgZAIgVQAIgVAPgPQANgPASgJQATgIATAAQAVAAASAIQAQAIALAQQAXAeAAA0IAAB/IhBAAIAAiCQAAgbgXAAQgWAAAAAbIAAHLQAAAbAWAAQAXAAAAgbIAAiDIBBAAIAACAQAAAZgGAWQgFAUgMAQQgLAPgQAHQgSAJgVAAQgTAAgTgJg");
	this.shape_5.setTransform(32.8,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(0,-19,176.6,103.9), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgFNQgHAAgGgmIgGhBIAAidQABgagRAAIgTAAIAAEeIhNAAIAAqZIBkAAQAjAAAXAUQAOANAHAUQAJAVAAAfIAACqQAAAWgLASQgIAOgRAOQARAPAJAOQAMASAAAWIAACOQgBAsALBAIAAADgAgWgcIAUAAQANAAAAgbIAAiqQAAgbgNAAIgUAAg");
	this.shape.setTransform(123.1,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkFJQgRgJgOgPQgOgPgGgVQgIgVAAgZIAAovIBNAAIAAI1QAAAYATAAQAVAAAAgYIAAo1IBKAAIAAIvQAAAZgIAVQgGAWgOAOQgMAPgRAJQgSAIgUAAQgTAAgSgIg");
	this.shape_1.setTransform(99,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmFNQgRgJgNgPQgPgPgHgVQgIgVAAgZIAAnFQAAgYAIgWQAHgVAPgPQANgPARgIQASgJAUAAQAUAAATAJQASAIANAPQAOAPAIAVQAHAWAAAYIAAHFQAAAZgHAVQgIAVgOAPQgNAPgSAJQgTAIgUAAQgUAAgSgIgAgTjoIAAHRQAAAYATAAQAUAAAAgYIAAnRQAAgYgUAAQgTAAAAAYg");
	this.shape_2.setTransform(75.5,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpFNIAAkFIhDmUIBMAAIAhEUIAhkUIBKAAIhKGUIAAEFg");
	this.shape_3.setTransform(53.4,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,-24,176.6,103.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgFNQgIAAgFgnIgGhAIAAidQABgagRAAIgTAAIAAEeIhNAAIAAqZIBkAAQAkAAAWAUQAOANAHAUQAJAVAAAfIAACqQAAAWgLASQgIAOgRAOQARAPAJAOQAMASAAAWIAACOQgBAsALBAIAAADgAgWgcIAVAAQANAAgBgbIAAiqQABgbgNAAIgVAAg");
	this.shape.setTransform(161,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhQFNIAAqZICgAAIAABQIhSAAIAADLIA3AAIAABPIg3AAIAADfIBSAAIAABQg");
	this.shape_1.setTransform(139.7,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglFNIhDqZIBNAAIAdHCIAgnCIBHAAIhDKZg");
	this.shape_2.setTransform(118.7,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmFNQgRgJgNgPQgPgPgHgVQgIgVAAgZIAAnFQAAgZAIgVQAHgVAPgPQANgPARgIQATgJATAAQAUAAATAJQASAIANAPQANAPAJAVQAHAVAAAZIAAHFQAAAZgHAVQgJAVgNAPQgNAPgSAJQgSAIgVAAQgTAAgTgIgAgTjoIAAHRQAAAYATAAQAUAAAAgYIAAnRQAAgYgUAAQgTAAAAAYg");
	this.shape_3.setTransform(96.3,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggFNQgSgJgNgPQgQgPgHgVQgIgVAAgZIAAnFQAAgZAIgVQAHgVAQgPQANgPASgIQASgJAUAAQAVAAASAJQAQAHALAQQAXAeAAA0IAAB/IhBAAIAAiCQAAgbgXAAQgWAAAAAbIAAHLQAAAbAWAAQAXAAAAgbIAAiDIBBAAIAACAQAAAagGAUQgFAWgMAOQgLAPgQAJQgSAIgVAAQgUAAgSgIg");
	this.shape_4.setTransform(74,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpFNQgSgIgNgQQgMgPgHgWQgHgYAAgdIAAhRIBDAAIAABdQAAAjAcAAQAaAAAAgjQAAgxgMguQgKgrgag8QgfhHgQgxIgShAQgHggAAgZQAAgdAGgYQAHgZAMgRQANgSAUgJQATgKAaAAQAVAAAQAIQARAHALAPQANAPAGAXQAGAYAAAeIAABZIhDAAIAAhlQAAgegXABQgZgBAAAeQAAA8AMApQAHAWAgBQQAfBKAQAzQAUBDAAAwQAAAlgKAbQgJAYgQAPQgaAZgmAAQgWAAgTgIg");
	this.shape_5.setTransform(51.8,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmFNIAAqZIBNAAIAAKZg");
	this.shape_6.setTransform(34.7,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhFNIAAqZIBqAAQAkAAAXAUQAOANAHAUQAJAVAAAfIAAHHQAAAegJAXQgHATgOAMQgXAVgkAAgAgSD+IATAAQASAAAAgbIAAnEQAAgbgSAAIgTAAg");
	this.shape_7.setTransform(17,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-25,176.6,103.9), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Valley300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lights300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mountains300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,250), null);


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


(lib.BookToday = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBcIAPgaQAKAKALAAQALAAAGgIQAIgIgBgJQgVg3gphnIAjAAIAtBxIAuhxIAjAAIhLC2QgDAIgEAGQgFAGgGAFQgMAIgPAAQgWAAgRgQg");
	this.shape.setTransform(167,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBMQgKgDgHgIQgIgGgEgJQgEgJAAgMQAAgXAQgKQAJgGALgCQAMgDAOAAIApAAIAAgGQAAgPgIgIQgJgHgRAAQgVAAgXAPIgOgUQAOgLAQgGQAQgFAQgBQAOABALADQALAEAJAGQAJAHAEALQAEALAAAOIAABjIgdAAIAAgVQgTAYggAAQgMAAgKgEgAgaAMQgJAFAAALQAAAMAJAGQAIAGAQAAQAOAAAMgJQAGgEADgGQADgGAAgIIAAgMIgkAAQgRgBgJAGg");
	this.shape_1.setTransform(149.7,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBnQgMgFgLgLQgWgXAAgjQAAgSAGgOQAGgOALgLQAWgVAfAAQAOAAANAGQAMAHAJANIAAhVIAhAAIAADWIghAAIAAgXQgSAaghAAQgPAAgNgGgAgggGQgOAOABAWQAAAWAOAOQAHAHAIADQAJAEAIAAQAJAAAJgEQAIgDAHgHQAGgHAEgJQADgJAAgLQAAgLgDgKQgEgJgGgGQgOgPgTAAQgTAAgOAPg");
	this.shape_2.setTransform(131.5,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5A4QgMgMgFgOQgGgNAAgRQAAgQAGgOQAFgOAMgLQAXgYAiAAQARABAPAFQAOAGAMAMQALALAHAOQAFAOAAAQQAAAhgXAXQgMAMgOAFQgPAGgRABQgiAAgXgYgAgigjQgNAOAAAVQAAAWANAOQAHAHAIAEQAKADAJAAQALAAAIgDQAJgEAHgHQAHgHADgJQAEgJAAgLQAAgLgEgIQgDgKgHgGQgOgOgVgBQgUABgOAOg");
	this.shape_3.setTransform(112.8,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBmIAAirIg+AAIAAggICdAAIAAAgIg+AAIAACrg");
	this.shape_4.setTransform(94.6,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBsIgthEIgXAXIAAAtIggAAIAAjWIAgAAIAAB8IA+hAIApAAIg6A9IA/Bdg");
	this.shape_5.setTransform(70.5,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5A4QgLgMgHgOQgFgNAAgRQAAgQAFgOQAHgOALgLQAXgYAiAAQARABAPAFQAPAGALAMQALALAHAOQAFAOAAAQQAAAhgXAXQgLAMgPAFQgPAGgRABQgiAAgXgYgAgigjQgNAOgBAVQABAWANAOQAHAHAIAEQAKADAJAAQALAAAJgDQAIgEAHgHQAHgHADgJQAEgJAAgLQAAgLgEgIQgDgKgHgGQgOgOgVgBQgUABgOAOg");
	this.shape_6.setTransform(51.7,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5A4QgLgMgHgOQgFgNAAgRQAAgQAFgOQAHgOALgLQAXgYAiAAQARABAPAFQAPAGALAMQALALAHAOQAFAOAAAQQAAAhgXAXQgLAMgPAFQgPAGgRABQgiAAgXgYgAgigjQgNAOgBAVQABAWANAOQAHAHAIAEQAKADAJAAQALAAAJgDQAIgEAHgHQAHgHADgJQAEgJAAgLQAAgLgEgIQgDgKgHgGQgOgOgVgBQgUABgOAOg");
	this.shape_7.setTransform(32.8,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhQBmIAAjLIBPAAQATABAQAFQAPAEAGAJQAOAQAAATQAAAMgDAJQgEAJgIAGIgHAFIgHADQATAEALAMQAFAGADAJQADAHAAALQAAAVgOAQQgJAJgPAFQgPAEgUABgAguBGIA1AAQATAAAKgGQAFgDACgFQADgHAAgIQAAgbgrAAIgxAAgAgugQIAsAAQAkAAAAgZQAAgIgCgFQgDgFgEgDQgFgDgGgCQgIgCgIABIgsAAg");
	this.shape_8.setTransform(13.8,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BookToday, new cjs.Rectangle(0.8,0,176.6,39.4), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BookToday();
	this.instance.parent = this;
	this.instance.setTransform(-1,2.1,1,1,0,0,0,89,17.2);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,16.1,1,1,0,0,0,112.9,56);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-71.9,225.7,143.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BookToday();
	this.instance.parent = this;
	this.instance.setTransform(-1,1.1,1,1,0,0,0,89,17.2);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,16.1,1,1,0,0,0,112.9,56);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-71.9,225.7,143.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuUBvQgogrAAhEQAAhDApgrQArgsBEgBQA5AAAkAdQAjAcAIAyIhDAAQgNgxg4AAQgmgBgWAcQgXAbAAArQAAArAXAcQAXAbAmAAQA3AAANgyIBDAAQgIAzgjAcQglAcg5ABQhGAAgpgtgAN1CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgANPAjIgqh6IgBAAIgqB6IBVAAgAFpCWIAAksIBzAAQBNABArArQAoAoAABCQAABEgoAoQgrAqhNAAgAGtBeIApAAQAyAAAYgcQAXgYAAgqQAAgpgXgZQgYgcgyAAIgpAAgAD2CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgADQAjIgqh6IgBAAIgqB6IBVAAgAhXCWIiQi5IgBAAIABC5IhEAAIAAksIA8AAICQC5IABAAIgBi5IBEAAIAAEsgAmdCWIgVg9Ih4AAIgVA9IhGAAIBvksIBQAAIBxEsgAnEAjIgph6IgCAAIgqB6IBVAAg");
	this.shape.setTransform(176.9,221.2,0.272,0.272);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(200.6,191.7,0.272,0.272,0,0,0,20.2,17.1);
	this.instance.alpha = 0.352;

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190.4,186.8,0.272,0.272,0,0,0,4.4,11.4);
	this.instance_1.alpha = 0.352;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(200.9,186.2,0.272,0.272,0,0,0,18.8,14);
	this.instance_2.alpha = 0.352;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(174.4,183.9,0.272,0.272,0,0,0,11.6,10.5);
	this.instance_3.alpha = 0.352;

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(130.2,216.4,0.272,0.272,0,0,0,19.7,20.4);
	this.instance_4.alpha = 0.352;

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.7,212.3,0.272,0.272,0,0,0,30.9,9);
	this.instance_5.alpha = 0.352;

	this.instance_6 = new lib.Path_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(122.3,210,0.272,0.272,0,0,0,23.2,15.7);
	this.instance_6.alpha = 0.352;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxJOCQguguAIhPQAMh1BChSQBahuDXhkQAggPAdgKIAvh2QgrAwg0AaQgzAZg1AAQhBAAgmgoQhMBUhYAxQhWAuhKAAQhoAAgZhVQgXhOAviDIFTvAID8gYIlbPLQgSAwABAWQAAAdAdAAQAZAAAhgWQAfgWAugvQABg4AYg/IDapfIDqgcIjYJaQgRAuACAaQACAcAZAAQAuAAA0hIQBEhcBJjMIB+liIDwgdIlZOxQBGgCCSALQCbALBTAAQExABEZhtIAFADQi3DIkzAwQisAakdgZQhegIhDgCQjXHlj4AAQhNAAgrgrgArwHnQhgAnhBA+QhNBKgNBVQgBAZAMARQAMAPATAAQA0AAAvhFQAkg4Ayh/IAahCgA+0mTIiSAPIBwk5IOdhZIgeBUQgsB+hTA6QhUA5inAPIivASIhdEDIFXgiIhbEBIlZAiIjYJgIlEBOgARADgIAnhNIieAsIi/g8IBKgtIIRheIg4D1Ig4AsgAg7AqQhThVALidQAHhqAkh4QAmiGA+hsQCakQDiAAQCDAABRA6QBRA5AVBvQAjApAkgBQAUAAARgSQATgSASgrIDYgVIipIFQgKAgAEANQADANAQAAQA4AABQibQBYisA5kDIC2gSQgNBLgRBGQgIArAGAYQAGAYAUAJQAyh9BZhNQBmhaB/ABQBWAAAsAnQApAmgFBAQgIBuhwBNQhnBGiYAVIgDAdQgCAhANASQANASAcAAQBBABBXg3QBXg2BXhfIB8lGICFgMIgOBeQAdg3ArgeQAsgfA4AAQAoAAAhAOIg5CbQgYgDgZAAQhDAAguArQgtAogfBQIhgD/IjJAtIAghSQhEBGhVAqQhbAshVAAQhYgBgvgwQgwgyAGhcQABgVAFgeQgcgIgUgQQhHC8hjBqQh5CAieAAQhiAAgkg/Qgjg/AhhrIBbkdQgOADgJAAQgeAAgagMQgMBpgoBxQgtB9hCBjQijD0jdAAQiQAAhNhRgADTomQhaC8gLCqQgJCABTABQBiAABijQQBYi9ANipQAJiAhUAAQhhgBhiDQgAZmqpQguA2gfBLQBLgQAwglQAvgmADguQACgUgHgMQgHgLgOAAQgbAAgrAzg");
	this.shape_1.setTransform(154.3,201.6,0.272,0.272);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB192C").s().p("A30UFMAAAgoJMAvpAAAMAAAAoJg");
	this.shape_2.setTransform(152.5,128.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,305,257), null);


// stage content:
(lib._300x250_disc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// txt3
	this.instance = new lib.Symbol2copy2();
	this.instance.parent = this;
	this.instance.setTransform(150,130,0.1,0.1,0,0,0,88.5,29.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({_off:false},0).wait(1).to({regX:89,regY:29.6,scaleX:0.24,scaleY:0.24,x:150.1},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:150.2},0).wait(1).to({scaleX:0.41,scaleY:0.41},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:150.3,y:130.1},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:130},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:130.1},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:130},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:130.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:150.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:150.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:150.4},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.76,scaleY:0.76},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:150.5},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:150.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:150.5},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({regX:88.3,regY:29,x:150,y:130},0).to({regX:88.4,regY:29.1,scaleX:1.73,scaleY:1.73,x:150.1,y:130.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// txt2
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,130,0.1,0.1,0,0,0,88.5,29.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(1).to({regX:87.8,regY:24.6,scaleX:0.24,scaleY:0.24,x:149.8,y:128.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:128.5},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:149.7,y:128.2},0).wait(1).to({scaleX:0.41,scaleY:0.41,y:128},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:127.8},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:127.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:149.6,y:127.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:127.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:127.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:127.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:127},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:126.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:149.5,y:126.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:126.6},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:126.4},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:126.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:149.4,y:126.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:126.1},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:126},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:125.9},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:125.8},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:125.7},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:125.6},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:125.5},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:149.3,y:125.4},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:125.3},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:125.2},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:125.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({regX:88.3,regY:29,x:150,y:130},0).to({regX:88.4,regY:29.1,scaleX:1.99,scaleY:1.99,x:150.1,y:130.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// txt1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,130,0.1,0.1,0,0,0,88.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:89.1,regY:23.6,scaleX:0.24,scaleY:0.24,x:150.1,y:128.6},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:150.2,y:128.2},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:127.9},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:150.3,y:127.6},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:127.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:127.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:127},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:126.8},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:126.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:150.4,y:126.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,y:126.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:126.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:126.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:125.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:125.8},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:150.5,y:125.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:125.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:150.4,y:125.5},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:150.5,y:125.3},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:125.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:125.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:125},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:124.9},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:124.8},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:150.6,y:124.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:150.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:150.6,y:124.6},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:124.5},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:124.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:150.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:150.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:124.3},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:124.2},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:124.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({regX:88.3,regY:29,x:150,y:130},0).to({regX:88.4,regY:29.1,scaleX:1.73,scaleY:1.73,x:150.1,y:130.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(222));

	// img1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,125.1,1.21,1.21,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.03,scaleY:1.03},59).to({scaleX:1,scaleY:1,x:150,y:125,alpha:0},10).to({_off:true},1).wait(217));

	// img2
	this.instance_4 = new lib.Symbol1copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,125.1,1.887,1.887,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,y:125.2},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:125.1},49).to({scaleX:1,scaleY:1,x:150,y:125,alpha:0},10).to({_off:true},1).wait(158));

	// img3
	this.instance_5 = new lib.Symbol1copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.1,125.1,1.887,1.887,0,0,0,150,125);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,-40.1,1,1,0,0,0,88.5,54);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,y:125.2},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:125.1},49).to({scaleX:1,scaleY:1,x:150,y:125,alpha:0},10).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(254).to({_off:false},0).wait(1).to({regX:88.1,regY:50.6,x:149.6,y:-31.2},0).wait(1).to({y:-6.6},0).wait(1).to({y:25.3},0).wait(1).to({y:41.6},0).wait(1).to({y:50.6},0).wait(1).to({y:56.4},0).wait(1).to({y:60.2},0).wait(1).to({y:62.9},0).wait(1).to({y:64.6},0).wait(1).to({y:65.7},0).wait(1).to({y:66.3},0).wait(1).to({regX:88.5,regY:54,x:150,y:69.9},0).wait(21));

	// End Txt1
	this.instance_7 = new lib.Symbol4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.1,-47.8,1,1,0,0,0,112.9,56);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,120.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,120.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},188).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},44).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},18).to({state:[{t:this.instance_9}]},9).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(188).to({_off:false},0).wait(1).to({regX:113.1,regY:32.7,x:150.3,y:-53.3},0).wait(1).to({y:-17.5},0).wait(1).to({y:28.9},0).wait(1).to({y:52.6},0).wait(1).to({y:65.7},0).wait(1).to({y:74.1},0).wait(1).to({y:79.7},0).wait(1).to({y:83.6},0).wait(1).to({y:86.1},0).wait(1).to({y:87.7},0).wait(1).to({y:88.6},0).wait(1).to({regX:112.9,regY:56,x:150.1,y:112.2},0).wait(45).to({regX:113.1,regY:32.7,x:150.3,y:89,alpha:0.993},0).wait(1).to({y:89.5,alpha:0.966},0).wait(1).to({y:90.7,alpha:0.897},0).wait(1).to({y:95,alpha:0.661},0).wait(1).to({y:102.7,alpha:0.228},0).wait(1).to({y:104.9,alpha:0.107},0).wait(1).to({y:106,alpha:0.049},0).wait(1).to({y:106.5,alpha:0.019},0).wait(1).to({y:106.8,alpha:0.004},0).wait(1).to({regX:112.9,regY:56,x:150.1,y:130.2,alpha:0},0).to({_off:true},18).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(272).to({_off:false},0).to({_off:true,alpha:1},9).wait(6));

	// red
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(148.6,124.5,1,1,0,0,0,152.5,128.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(177).to({_off:false},0).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.6,98.8,363,302.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_disc_atlas_NP_.jpg", id:"300x250_disc_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;