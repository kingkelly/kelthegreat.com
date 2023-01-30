(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_disc_atlas_NP_", frames: [[0,602,300,305],[604,0,300,600],[0,0,300,600],[302,0,300,600]]}
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



(lib.Couple300x600 = function() {
	this.spriteSheet = ss["300x600_disc_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Lights300x250 = function() {
	this.spriteSheet = ss["300x600_disc_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mountains300x250 = function() {
	this.spriteSheet = ss["300x600_disc_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Valley300x250 = function() {
	this.spriteSheet = ss["300x600_disc_atlas_NP_"];
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB192C").s().p("A30XcMAAAgu3MAvpAAAMAAAAu3g");
	this.shape.setTransform(152.5,104.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,-45.1,305,300), null);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeGdIgGiWIg4AAIgLCWIhVAAIBLs5IBqAAIBMM5gAASCdIgSlrIgYFrIAqAAg");
	this.shape.setTransform(157.7,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah4GdIAAs5ICDAAQAtAAAcAaQARAPAJAYQALAcAAAlIAAI1QAAAmgLAaQgJAZgRAQQgcAZgtAAgAgXE7IAYAAQAYAAAAgiIAAowQAAgigYAAIgYAAg");
	this.shape_1.setTransform(130.6,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeGdIgGiWIg4AAIgLCWIhVAAIBLs5IBqAAIBMM5gAASCdIgSlrIgYFrIAqAAg");
	this.shape_2.setTransform(102.5,40.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyGdIhQmYIgThvIAAIHIhQAAIAAs5IBjAAIBCGSIAPBxIAAoDIBPAAIAAM5g");
	this.shape_3.setTransform(74.2,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeGdIgGiWIg4AAIgLCWIhVAAIBLs5IBqAAIBMM5gAASCdIgSlrIgYFrIAqAAg");
	this.shape_4.setTransform(45.4,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnGdQgXgLgRgSQgSgTgJgaQgLgbAAgfIAAoxQAAgfALgbQAJgZASgTQARgTAXgLQAWgKAZABQAagBAVAKQAUAKAOAUQAdAmAABAIAACdIhRAAIAAihQAAgigcAAQgcAAAAAiIAAI5QAAAhAcAAQAcAAAAghIAAiiIBRAAIAACeQAAAggIAaQgHAagOATQgOASgUALQgVAJgaABQgZgBgWgJg");
	this.shape_5.setTransform(19.5,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(0,-19,176.6,127.9), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoGdQgKAAgHgwIgGhQIAAjCQAAghgUAAIgYAAIAAFjIhhAAIAAs5IB9AAQAsAAAcAZQARAQAJAZQALAbAAAmIAADSQAAAcgNAVQgKASgWASQAWASALASQAOAWAAAbIAACxQAAA2ANBQIAAADgAgbgjIAZAAQAQAAAAghIAAjUQAAgggQgBIgZAAg");
	this.shape.setTransform(131.4,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsGYQgXgKgQgTQgRgTgJgaQgJgaAAgfIAAq2IBfAAIAAK9QAAAeAYAAQAbAAAAgeIAAq9IBbAAIAAK2QAAAfgJAaQgJAagQATQgQATgVAKQgWAKgZAAQgYAAgVgKg");
	this.shape_1.setTransform(101.6,36.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvGcQgVgKgRgSQgSgUgJgZQgJgbAAgeIAAoyQAAgeAJgbQAJgaASgTQARgTAVgLQAXgJAZgBQAYABAXAJQAWALARATQARATAJAaQAKAbgBAeIAAIyQABAegKAbQgJAZgRAUQgRASgWAKQgXALgYgBQgZABgXgLgAgXkgIAAJBQAAAeAYAAQAYAAAAgeIAApBQAAgdgYAAQgYAAAAAdg");
	this.shape_2.setTransform(72.5,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0GdIAAlEIhRn1IBcAAIArFWIAolWIBcAAIhbH1IAAFEg");
	this.shape_3.setTransform(45,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,-24,176.6,127.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoGdQgKAAgHgwIgGhQIAAjCQAAghgUAAIgYAAIAAFjIhhAAIAAs5IB9AAQAsAAAcAZQARAQAJAZQALAbAAAmIAADSQAAAcgNAVQgKASgWASQAWASALASQAOAWAAAbIAACxQAAA2ANBQIAAADgAgbgjIAZAAQAQABAAgjIAAjTQAAgggQgBIgZAAg");
	this.shape.setTransform(178.6,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjGdIAAs5IDHAAIAABjIhoAAIAAD8IBGAAIAABiIhGAAIAAEVIBoAAIAABjg");
	this.shape_1.setTransform(152.2,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguGdIhTs5IBgAAIAkIuIAoouIBXAAIhTM5g");
	this.shape_2.setTransform(126.2,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguGcQgWgJgSgTQgRgTgJgaQgKgaAAggIAAoxQAAgeAKgbQAJgaARgTQASgTAWgLQAWgJAYgBQAZABAXAJQAWALARATQARATAKAaQAIAbABAeIAAIxQgBAggIAaQgKAagRATQgRATgWAJQgXALgZgBQgYABgWgLgAgYkgIAAJBQAAAeAYAAQAZAAAAgeIAApBQAAgdgZAAQgYAAAAAdg");
	this.shape_3.setTransform(98.5,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnGcQgXgJgRgTQgSgTgJgaQgLgaAAggIAAoxQAAgeALgbQAJgaASgTQARgTAXgLQAWgJAZgBQAaABAVAJQAUALAOATQAdAlAABBIAACdIhRAAIAAihQAAghgcAAQgcAAAAAhIAAI5QAAAiAcAAQAcAAAAgiIAAiiIBRAAIAACeQAAAggIAaQgHAagOATQgOATgUAJQgVALgagBQgZABgWgLg");
	this.shape_4.setTransform(70.9,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzGdQgWgJgQgUQgQgTgJgcQgIgdAAgkIAAhlIBUAAIAAB0QAAArAiAAQAhAAgBgrQAAg9gOg5QgNg0gghMQgmhZgUg8IgWhPQgJgpAAgeQAAglAHgdQAIgfAQgVQAPgWAZgLQAYgMAhgBQAYABAVAIQAVAKAPASQAOATAJAdQAHAdAAAmIAABuIhTAAIAAh+QABgkgdAAQggAAAAAkQAABLAPAzQAIAbApBjQAmBbAUBBQAZBTAAA7QAAAugMAhQgLAegUATQggAegwAAQgbAAgYgJg");
	this.shape_5.setTransform(43.4,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvGdIAAs5IBgAAIAAM5g");
	this.shape_6.setTransform(22.2,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah4GdIAAs5ICDAAQAtAAAcAZQARAQAJAZQALAbAAAmIAAI0QAAAmgLAbQgJAYgRAPQgcAagtAAgAgXE7IAYAAQAYAAAAgiIAAoxQAAgggYgBIgYAAg");
	this.shape_7.setTransform(0.2,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-60.4,-25,298,127.9), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Valley300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lights300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mountains300x250();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,600), null);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBcIAPgaQAKAKALAAQALAAAGgIQAIgIgBgJQgVg3gphnIAjAAIAtBxIAuhxIAjAAIhLC2QgDAIgEAGQgFAGgGAEQgMAJgPAAQgWAAgRgQg");
	this.shape.setTransform(167,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiBMQgKgDgHgIQgIgGgEgJQgEgJAAgMQAAgWAQgLQAJgGALgCQAMgDAOAAIApAAIAAgGQAAgQgIgHQgJgIgRAAQgVAAgXAQIgOgUQAOgMAQgFQAQgGAQAAQAOAAALAEQALADAJAHQAJAHAEALQAEALAAAPIAABiIgdAAIAAgVQgTAXggAAQgMAAgKgDgAgaAMQgJAGAAAKQAAAMAJAGQAIAGAQAAQAOAAAMgJQAGgEADgGQADgGAAgIIAAgMIgkAAQgRAAgJAFg");
	this.shape_1.setTransform(149.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBnQgMgFgLgLQgWgXAAgjQAAgSAGgOQAGgOALgLQAWgVAfAAQAOAAANAGQAMAHAJANIAAhVIAhAAIAADWIghAAIAAgXQgSAaghAAQgPAAgNgGgAgggGQgOAOABAWQAAAWAOAOQAHAHAIADQAJAEAIAAQAJAAAJgEQAIgDAHgHQAGgHAEgJQADgJAAgLQAAgLgDgKQgEgJgGgGQgOgPgTAAQgTAAgOAPg");
	this.shape_2.setTransform(131.5,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5A4QgMgLgFgOQgGgOAAgRQAAgQAGgOQAFgOAMgLQAXgYAiAAQARAAAPAGQAOAGAMAMQALALAHAOQAFAOAAAQQAAAhgXAXQgMAMgOAFQgPAHgRgBQgiAAgXgXgAgigkQgNAOAAAWQAAAWANAOQAHAHAIAEQAKADAJABQALgBAIgDQAJgEAHgHQAHgGADgKQAEgJAAgLQAAgKgEgJQgDgJgHgIQgOgNgVAAQgUAAgOANg");
	this.shape_3.setTransform(112.8,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBlIAAiqIg+AAIAAgfICdAAIAAAfIg+AAIAACqg");
	this.shape_4.setTransform(94.6,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfBrIgthDIgXAXIAAAsIggAAIAAjWIAgAAIAAB9IA+hAIApAAIg6A9IA/Bcg");
	this.shape_5.setTransform(70.5,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5A4QgLgLgHgOQgFgOAAgRQAAgQAFgOQAHgOALgLQAXgYAiAAQARAAAPAGQAPAGALAMQALALAHAOQAFAOAAAQQAAAhgXAXQgLAMgPAFQgPAHgRgBQgiAAgXgXgAgigkQgNAOgBAWQABAWANAOQAHAHAIAEQAKADAJABQALgBAJgDQAIgEAHgHQAHgGADgKQAEgJAAgLQAAgKgEgJQgDgJgHgIQgOgNgVAAQgUAAgOANg");
	this.shape_6.setTransform(51.7,16.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5A4QgLgLgHgOQgFgOAAgRQAAgQAFgOQAHgOALgLQAXgYAiAAQARAAAPAGQAPAGALAMQALALAHAOQAFAOAAAQQAAAhgXAXQgLAMgPAFQgPAHgRgBQgiAAgXgXgAgigkQgNAOgBAWQABAWANAOQAHAHAIAEQAKADAJABQALgBAJgDQAIgEAHgHQAHgGADgKQAEgJAAgLQAAgKgEgJQgDgJgHgIQgOgNgVAAQgUAAgOANg");
	this.shape_7.setTransform(32.8,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhQBlIAAjJIBPAAQATAAAQAEQAPAGAGAIQAOAPAAAVQAAAMgDAIQgEAJgIAGIgHAFIgHAEQATADALAMQAFAGADAIQADAJAAAJQAAAWgOAPQgJAKgPAFQgPAFgUgBgAguBGIA1AAQATAAAKgGQAFgDACgGQADgFAAgIQAAgbgrAAIgxAAgAgugQIAsAAQAkAAAAgaQAAgGgCgGQgDgFgEgDQgFgEgGgBQgIgBgIgBIgsAAg");
	this.shape_8.setTransform(13.8,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BookToday, new cjs.Rectangle(0.8,-6,176.6,39.4), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BookToday();
	this.instance.parent = this;
	this.instance.setTransform(-1,162.7,1,1,0,0,0,89,17.2);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,16.1,1,1,0,0,0,112.9,56);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-71.9,225.7,250.8);


// stage content:
(lib._300x600_disc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuUBvQgogrAAhEQAAhDApgrQArgsBEgBQA5AAAkAdQAjAcAIAyIhDAAQgNgxg4AAQgmgBgWAcQgXAbAAArQAAArAXAcQAXAbAmAAQA3AAANgyIBDAAQgIAzgjAcQglAcg5ABQhGAAgpgtgAN1CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgANPAjIgqh6IgBAAIgqB6IBVAAgAFpCWIAAksIBzAAQBNABArArQAoAoAABCQAABEgoAoQgrAqhNAAgAGtBeIApAAQAyAAAYgcQAXgYAAgqQAAgpgXgZQgYgcgyAAIgpAAgAD2CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgADQAjIgqh6IgBAAIgqB6IBVAAgAhXCWIiQi5IgBAAIABC5IhEAAIAAksIA8AAICQC5IABAAIgBi5IBEAAIAAEsgAmdCWIgVg9Ih4AAIgVA9IhGAAIBvksIBQAAIBxEsgAnEAjIgph6IgCAAIgqB6IBVAAg");
	this.shape.setTransform(176.6,554.7,0.318,0.318);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(204.3,520.3,0.318,0.318,0,0,0,20.3,17.2);
	this.instance.alpha = 0.352;

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.4,514.5,0.318,0.318,0,0,0,4.4,11.5);
	this.instance_1.alpha = 0.352;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.7,513.8,0.318,0.318,0,0,0,18.9,14);
	this.instance_2.alpha = 0.352;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(173.7,511.1,0.318,0.318,0,0,0,11.7,10.6);
	this.instance_3.alpha = 0.352;

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(122,549.1,0.318,0.318,0,0,0,19.8,20.6);
	this.instance_4.alpha = 0.352;

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(143.6,544.3,0.318,0.318,0,0,0,31,9.1);
	this.instance_5.alpha = 0.352;

	this.instance_6 = new lib.Path_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(112.8,541.6,0.318,0.318,0,0,0,23.2,15.7);
	this.instance_6.alpha = 0.352;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxJOCQguguAIhPQAMh1BChSQBahuDXhkQAggPAdgKIAvh2QgrAwg0AaQgzAZg1AAQhBAAgmgoQhMBUhYAxQhWAuhKAAQhoAAgZhVQgXhOAviDIFTvAID8gYIlbPLQgSAwABAWQAAAdAdAAQAZAAAhgWQAfgWAugvQABg4AYg/IDapfIDqgcIjYJaQgRAuACAaQACAcAZAAQAuAAA0hIQBEhcBJjMIB+liIDwgdIlZOxQBGgCCSALQCbALBTAAQExABEZhtIAFADQi3DIkzAwQisAakdgZQhegIhDgCQjXHlj4AAQhNAAgrgrgArwHnQhgAnhBA+QhNBKgNBVQgBAZAMARQAMAPATAAQA0AAAvhFQAkg4Ayh/IAahCgA+0mTIiSAPIBwk5IOdhZIgeBUQgsB+hTA6QhUA5inAPIivASIhdEDIFXgiIhbEBIlZAiIjYJgIlEBOgARADgIAnhNIieAsIi/g8IBKgtIIRheIg4D1Ig4AsgAg7AqQhThVALidQAHhqAkh4QAmiGA+hsQCakQDiAAQCDAABRA6QBRA5AVBvQAjApAkgBQAUAAARgSQATgSASgrIDYgVIipIFQgKAgAEANQADANAQAAQA4AABQibQBYisA5kDIC2gSQgNBLgRBGQgIArAGAYQAGAYAUAJQAyh9BZhNQBmhaB/ABQBWAAAsAnQApAmgFBAQgIBuhwBNQhnBGiYAVIgDAdQgCAhANASQANASAcAAQBBABBXg3QBXg2BXhfIB8lGICFgMIgOBeQAdg3ArgeQAsgfA4AAQAoAAAhAOIg5CbQgYgDgZAAQhDAAguArQgtAogfBQIhgD/IjJAtIAghSQhEBGhVAqQhbAshVAAQhYgBgvgwQgwgyAGhcQABgVAFgeQgcgIgUgQQhHC8hjBqQh5CAieAAQhiAAgkg/Qgjg/AhhrIBbkdQgOADgJAAQgeAAgagMQgMBpgoBxQgtB9hCBjQijD0jdAAQiQAAhNhRgADTomQhaC8gLCqQgJCABTABQBiAABijQQBYi9ANipQAJiAhUAAQhhgBhiDQgAZmqpQguA2gfBLQBLgQAwglQAvgmADguQACgUgHgMQgHgLgOAAQgbAAgrAzg");
	this.shape_1.setTransform(150.1,531.8,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(287));

	// txt3
	this.instance_7 = new lib.Symbol2copy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,273,0.1,0.1,0,0,0,88.5,29.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({_off:false},0).wait(1).to({regX:89.2,regY:40.8,scaleX:0.24,scaleY:0.24,x:150.1,y:275.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:150.2,y:276.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:277},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:150.3,y:277.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:277.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:278.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:150.4,y:278.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:279},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:279.3},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:279.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:279.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:280.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:150.5,y:280.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:280.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:280.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:280.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:281.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:281.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:281.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:281.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:150.6,y:281.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:282},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:150.5,y:282.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:150.6,y:282.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:282.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:282.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:282.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:282.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:282.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:282.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:283},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:283.1},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:283.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:150.7,y:283.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:150.6,y:283.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:150.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:150.6,y:283.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:283.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:150.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:283.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:283.8},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:283.9},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:284},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:284.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:284.2},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:284.3},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:88.3,regY:29,scaleX:1,scaleY:1,x:150,y:273},0).to({regX:88.4,regY:29.1,scaleX:1.73,scaleY:1.73,x:150.1,y:273.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// txt2
	this.instance_8 = new lib.Symbol2copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,273,0.1,0.1,0,0,0,88.5,29.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).wait(1).to({regX:87.7,regY:35.8,scaleX:0.24,scaleY:0.24,x:149.8,y:274.5},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:274.9},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:149.7,y:275.2},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:275.5},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:275.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:149.6,y:276},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:276.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:276.4},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:149.5,y:276.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:276.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:276.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:277},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:277.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:277.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:149.4,y:277.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:149.5,y:277.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:149.4,y:277.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:277.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:277.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:277.8},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:277.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:278},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:149.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:149.4,y:278.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:149.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:278.3},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:278.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:278.5},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:278.6},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:278.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:278.8},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:149.2,y:278.9},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:149.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:279},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:149.2},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:279.1},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:279.2},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:279.3},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:88.3,regY:29,scaleX:1,scaleY:1,x:150,y:273},0).to({regX:88.4,regY:29.1,scaleX:1.99,scaleY:1.99,x:150.1,y:273.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(163));

	// txt1
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,273,0.1,0.1,0,0,0,88.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:89.6,regY:34.8,scaleX:0.24,scaleY:0.24,x:150.2,y:274.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:150.3,y:274.6},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:150.4,y:274.9},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:275.1},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:150.5,y:275.3},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:275.5},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:150.6,y:275.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:275.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:276},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:276.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:150.7,y:276.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:276.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:276.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:150.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:150.7,y:276.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:150.8,y:276.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:276.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:276.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:277},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:150.9,y:277.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:277.2},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:277.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:277.4},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:277.5},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:151,y:277.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:150.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:277.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:151},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:277.8},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:277.9},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:278},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:277.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:151.1,y:278},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:151},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:151.1,y:278.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:151},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:151.1},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:278.2},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:278.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:278.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:278.3},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:88.3,regY:29,scaleX:1,scaleY:1,x:150,y:273},0).to({regX:88.4,regY:29.1,scaleX:1.73,scaleY:1.73,x:150.1,y:273.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(222));

	// img1
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.1,125.1,1.21,1.21,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.03,scaleY:1.03},59).to({scaleX:1,scaleY:1,x:150,y:125,alpha:0},10).to({_off:true},1).wait(217));

	// img2
	this.instance_11 = new lib.Symbol1copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.1,125.1,1.887,1.887,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,y:125.2},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:125.1},49).to({scaleX:1,scaleY:1,x:150,y:125,alpha:0},10).to({_off:true},1).wait(158));

	// img3
	this.instance_12 = new lib.Symbol1copy2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.1,125.1,1.887,1.887,0,0,0,150,125);
	this.instance_12._off = true;

	this.instance_13 = new lib.Symbol5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,91.9,1,1,0,0,0,88.5,54);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(118).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,y:125.2},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:125.1},49).to({scaleX:1,scaleY:1,x:150,y:125,alpha:0},10).to({_off:true},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(244).to({_off:false},0).wait(1).to({regX:88.1,regY:50.6,x:149.6,y:88.9,alpha:0.003},0).wait(1).to({y:90.5,alpha:0.015},0).wait(1).to({y:93.6,alpha:0.039},0).wait(1).to({y:99.2,alpha:0.082},0).wait(1).to({y:109.5,alpha:0.161},0).wait(1).to({y:129.5,alpha:0.313},0).wait(1).to({y:158.8,alpha:0.537},0).wait(1).to({y:179.6,alpha:0.696},0).wait(1).to({y:192.2,alpha:0.792},0).wait(1).to({y:200.6,alpha:0.856},0).wait(1).to({y:206.5,alpha:0.901},0).wait(1).to({y:210.7,alpha:0.934},0).wait(1).to({y:213.9,alpha:0.958},0).wait(1).to({y:216.1,alpha:0.975},0).wait(1).to({y:217.7,alpha:0.987},0).wait(1).to({y:218.7,alpha:0.994},0).wait(1).to({y:219.2,alpha:0.999},0).wait(1).to({regX:88.5,regY:54,x:150,y:222.8,alpha:1},0).wait(25));

	// End Txt1
	this.instance_14 = new lib.Symbol4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.1,473.6,1,1,0,0,0,112.9,56);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,120.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(188).to({_off:false},0).wait(1).to({regX:113.1,regY:32.7,x:150.3,y:446.7,alpha:0.083},0).wait(1).to({y:440.7,alpha:0.224},0).wait(1).to({y:430.5,alpha:0.466},0).wait(1).to({y:422.1,alpha:0.664},0).wait(1).to({y:417.5,alpha:0.773},0).wait(1).to({y:414.5,alpha:0.842},0).wait(1).to({y:412.5,alpha:0.889},0).wait(1).to({y:411.1,alpha:0.923},0).wait(1).to({y:410,alpha:0.948},0).wait(1).to({y:409.3,alpha:0.967},0).wait(1).to({y:408.7,alpha:0.98},0).wait(1).to({y:408.3,alpha:0.99},0).wait(1).to({y:408,alpha:0.996},0).wait(1).to({y:407.9,alpha:0.999},0).wait(1).to({regX:112.9,regY:56,x:150.1,y:431.2,alpha:1},0).wait(39).to({regX:113.1,regY:32.7,x:150.3,y:407.9,alpha:0.996},0).wait(1).to({y:408.2,alpha:0.982},0).wait(1).to({y:408.7,alpha:0.951},0).wait(1).to({y:409.9,alpha:0.888},0).wait(1).to({y:412.7,alpha:0.729},0).wait(1).to({y:420,alpha:0.324},0).wait(1).to({y:422.8,alpha:0.169},0).wait(1).to({y:424.1,alpha:0.095},0).wait(1).to({y:424.9,alpha:0.052},0).wait(1).to({y:425.4,alpha:0.026},0).wait(1).to({y:425.7,alpha:0.01},0).wait(1).to({y:425.8,alpha:0.002},0).wait(1).to({regX:112.9,regY:56,x:150.1,y:449.2,alpha:0},0).to({_off:true},18).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(272).to({_off:false},0).to({alpha:1},9).wait(6));

	// red
	this.instance_16 = new lib.Symbol3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(148.6,599.7,1,1,0,0,0,152.5,254.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(177).to({_off:false},0).wait(65).to({regY:104.9,scaleY:1,y:448.9},0).wait(1).to({scaleY:1.02,y:446.1},0).wait(1).to({scaleY:1.07,y:439.9},0).wait(1).to({scaleY:1.15,y:427},0).wait(1).to({scaleY:1.36,y:395.4},0).wait(1).to({scaleY:1.67,y:349.3},0).wait(1).to({scaleY:1.82,y:327.1},0).wait(1).to({scaleY:1.9,y:315.3},0).wait(1).to({scaleY:1.94,y:308.1},0).wait(1).to({scaleY:1.97,y:303.7},0).wait(1).to({scaleY:1.99,y:301.1},0).wait(1).to({scaleY:2,y:299.7},0).wait(1).to({regY:254.9,scaleY:2,y:599.7},0).wait(33));

	// coupe
	this.instance_17 = new lib.Couple300x600();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,-1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(177).to({_off:false},0).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.6,273.8,363,726);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_disc_atlas_NP_.jpg", id:"300x600_disc_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;