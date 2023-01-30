(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_disc_atlas_NP_", frames: [[0,602,160,218],[302,0,300,600],[604,0,300,600],[0,0,300,600]]}
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



(lib.Couple160x600 = function() {
	this.spriteSheet = ss["160x600_disc_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Lights300x250 = function() {
	this.spriteSheet = ss["160x600_disc_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mountains300x250 = function() {
	this.spriteSheet = ss["160x600_disc_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Valley300x250 = function() {
	this.spriteSheet = ss["160x600_disc_atlas_NP_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah3EEIDboXIAUAQIjbIXgAAlD/QgQgRAAgcIAAiOQAAgcAQgQQAPgQAZAAQAZAAAPAQQAPAQAAAcIAACOQAAAcgPARQgQAQgYAAQgZAAgPgQgAA9BAIAACXQAAARAQAAQAQAAAAgRIAAiXQAAgSgQAAQgQAAAAASgAhzgWQgQgRAAgcIAAiOQAAgcAQgQQAPgQAYAAQAZAAAPAQQAQAQAAAcIAACOQAAAcgQARQgPAQgZAAQgYAAgPgQgAhcjVIAACXQAAASAQAAQAQAAAAgSIAAiXQAAgSgQAAQgQAAAAASg");
	this.shape.setTransform(139.5,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfEDQgNgGgJgNQgSgZAAgjIAAhAIA2AAIAABAQAAATAPAAQANgBAAgRIAAi3QAAgQgMAAQgNAAAAAQIg2gFIAIkCICEAAQAAAjgKAQQgIAOgQAAIgvAAIgECPQANgQAYAAQAUAAALAQQAMAQABAZIAADCQAAATgGARQgEAQgKAMQgJALgOAHQgNAGgPAAQgPAAgNgHg");
	this.shape_1.setTransform(116.8,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcEHIAAn0QAYABAAgaIAhAAIAAINg");
	this.shape_2.setTransform(102,38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/EHIAAoNIB/AAIAAA/IhCAAIAACgIAsAAIAAA+IgsAAIAACxIBCAAIAAA/g");
	this.shape_3.setTransform(81.6,38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdEHIg1oNIA9AAIAWFjIAaljIA4AAIg1INg");
	this.shape_4.setTransform(65.1,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATEHIgEhgIgjAAIgHBgIg2AAIAvoNIBEAAIAwINgAALBkIgLjnIgPDnIAaAAg");
	this.shape_5.setTransform(48.4,38.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggEHQgOgGgLgMQgKgNgFgRQgGgSABgYIAAhAIA1AAIAABKQAAAbAWAAQAUAAAAgbQAAgngJgkQgJgigUgwQgYg4gNgmIgNgzQgGgaAAgTQAAgXAEgTQAGgTAJgOQALgOAPgHQAQgIAUAAQAQAAANAGQANAFAKAMQAJAMAFATQAFASAAAYIAABHIg1AAIAAhQQAAgYgSAAQgUAAAAAYQAAAvAKAhQAFARAZA/QAZA6AMApQARA1gBAlQABAegJAVQgGATgNAMQgVATgeAAQgRAAgPgGg");
	this.shape_6.setTransform(31.5,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(20.8,0,135.4,82.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBERIAAohICDAAIAABCIhEAAIAACmIAuAAIAABAIguAAIAAC4IBEAAIAABBg");
	this.shape.setTransform(173.7,-73.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfERIAAncIgwAAIAAhFICfAAIAABFIgvAAIAAHcg");
	this.shape_1.setTransform(157.1,-73.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATERIgDhjIglAAIgHBjIg5AAIAyohIBGAAIAyIhgAALBoIgLjwIgQDwIAbAAg");
	this.shape_2.setTransform(140.4,-73.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3ERIAAm4IgGB4IggFAIgsAAIgclAIgGh4IAAG4Ig2AAIAAohIBUAAIAXDXIAKCKIALiKIAVjXIBSAAIAAIhg");
	this.shape_3.setTransform(118.5,-73.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfERIAAohIA/AAIAAIhg");
	this.shape_4.setTransform(100,-73.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfERIAAncIgwAAIAAhFICfAAIAABFIgvAAIAAHcg");
	this.shape_5.setTransform(86.8,-73.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/ERIAAohIA/AAIAAHiIBAAAIAAA/g");
	this.shape_6.setTransform(72.1,-73.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdENQgOgGgLgMQgMgNgGgRQgGgSAAgUIAAnKIBAAAIAAHPQAAATAPAAQARAAAAgTIAAnPIA9AAIAAHKQAAAUgGASQgGARgLANQgKAMgOAGQgOAHgRAAQgPAAgPgHg");
	this.shape_7.setTransform(54.2,-72.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmCgIAAk/IBNAAIAAAnIgoAAIAABhIAbAAIAAAlIgbAAIAABrIAoAAIAAAng");
	this.shape_8.setTransform(174.7,-122);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKCgIAAiKIgSAAIAACKIgmAAIAAk/IAmAAIAACOIASAAIAAiOIAlAAIAAE/g");
	this.shape_9.setTransform(163.9,-122);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSCgIAAkWIgcAAIAAgpIBdAAIAAApIgcAAIAAEWg");
	this.shape_10.setTransform(153.4,-122);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmCgIAAk/IBNAAIAAAnIgoAAIAABhIAbAAIAAAlIgbAAIAABrIAoAAIAAAng");
	this.shape_11.setTransform(140,-122);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPCgQgIgEgHgHQgHgIgEgKQgEgKAAgMIAAjZQAAgMAEgKQAEgKAHgHQAHgIAIgEQAJgEAJAAQAKAAAIAEQAIAEAGAIQALAOAAAZIAAA9IggAAIAAg+QAAgNgLAAQgKAAAAANIAADbQAAANAKAAQALAAAAgNIAAg/IAgAAIAAA+QAAAMgDAKQgDAKgFAIQgGAHgIAEQgIAEgKAAQgJAAgJgEg");
	this.shape_12.setTransform(129.9,-122);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATCgIgeieIgHgqIAADIIgfAAIAAk/IAmAAIAZCcIAFArIAAjHIAgAAIAAE/g");
	this.shape_13.setTransform(118.6,-122);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmCgIAAk/IBNAAIAAAnIgoAAIAABhIAbAAIAAAlIgbAAIAABrIAoAAIAAAng");
	this.shape_14.setTransform(108.3,-122);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSCgIAAk/IAlAAIAAE/g");
	this.shape_15.setTransform(100.3,-122);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQCgQgEAAgDgTIgCgfIAAhLQAAgNgIAAIgJAAIAACKIglAAIAAk/IAvAAQASAAAKAKQAHAGADAJQAEALAAAOIAABSQAAALgEAIQgEAHgJAGQAJAHAEAHQAFAJAAAKIAABFQAAAVAFAeIAAACgAgKgNIAKAAQAFAAAAgNIAAhSQAAgMgFAAIgKAAg");
	this.shape_16.setTransform(92.2,-122);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmCgIAAk/IBNAAIAAAnIgoAAIAABhIAbAAIAAAlIgbAAIAABrIAoAAIAAAng");
	this.shape_17.setTransform(82,-122);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgsCgIAAk/IAvAAQASAAAKAKQAHAGADAJQAEALAAAOIAABbQAAAOgEAKQgDAJgHAGQgKAKgSAAIgKAAIAACBgAgHgDIAJAAQAHAAAAgNIAAhcQAAgMgHAAIgJAAg");
	this.shape_18.setTransform(71.9,-122);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOCgIgOhmIgPBmIgkAAIAfieIgcihIAlAAIAMBxIAQhxIAjAAIgeCaIAdClg");
	this.shape_19.setTransform(61.1,-122);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmCgIAAk/IBNAAIAAAnIgoAAIAABhIAbAAIAAAlIgbAAIAABrIAoAAIAAAng");
	this.shape_20.setTransform(51.7,-122);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgzDZIAAmwIBnAAIAAA0Ig1AAIAACDIAkAAIAAAzIgkAAIAACRIA1AAIAAA1g");
	this.shape_21.setTransform(173.7,-19.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+DZIAAmwIBEAAQAXAAAPANQAJAIAFANQAFAOAAAUIAAEnQAAAUgFAOQgFANgJAIQgPANgXABgAgMClIAMAAQANAAAAgSIAAklQAAgRgNAAIgMAAg");
	this.shape_22.setTransform(159.5,-19.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYDZIAAmwIAxAAIAAGwg");
	this.shape_23.setTransform(147.6,-19.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAVDZQgFAAgEgaIgDgpIAAhnQAAgRgKAAIgNAAIAAC7IgyAAIAAmwIBAAAQAYAAAOANQAJAIAFANQAFAOAAAUIAABvQAAANgGAMQgGAKgLAJQAMAJAFAJQAIAMAAAOIAABcQAAAdAGAqIAAACgAgOgRIANAAQAIgBAAgRIAAhvQAAgRgIAAIgNAAg");
	this.shape_24.setTransform(136.6,-19.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvDLQgHgKgEgNQgEgOAAgTIAAklQAAgRAFgOQAEgNAJgKQAIgKAMgFQALgGANAAQAMAAAMAGQAKAFAJAKQAIAKAEANQAFAOAAARIAABYIguAAIAAhdQAAgPgOAAQgNAAAAAPIAAE0QAAAQANAAQANAAAAgQIAAhpIgLAAIAAgvIA9AAIAADUIgfAAIgEgRQgFALgKAGQgJAEgKABQgagBgPgSg");
	this.shape_25.setTransform(115.5,-19.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAaDZIgpjXIgKg5IAAEQIgqAAIAAmwIA0AAIAiDSIAIA7IAAkNIApAAIAAGwg");
	this.shape_26.setTransform(99.9,-19.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYDZIAAmwIAxAAIAAGwg");
	this.shape_27.setTransform(87.7,-19.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaDZIAAirIgskFIAxAAIAWCzIAVizIAxAAIgxEFIAACrg");
	this.shape_28.setTransform(76.9,-19.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyDZIAAmwIAyAAIAAF9IAzAAIAAAzg");
	this.shape_29.setTransform(64.8,-19.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgxDZIAAmwIBjAAIAAA0IgyAAIAACGIAoAAIAAAyIgoAAIAADEg");
	this.shape_30.setTransform(52.8,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(42.6,-146.4,140.5,163.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATEHIgEhgIgjAAIgHBgIg2AAIAvoNIBEAAIAwINgAALBkIgLjnIgPDnIAaAAg");
	this.shape.setTransform(132.5,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMEHIAAoNIBTAAQAdAAASAQQAKAKAHAQQAGARAAAYIAAFnQAAAYgGARQgHAQgKAKQgSAQgdAAgAgODJIAOAAQAPAAABgWIAAlkQgBgWgPAAIgOAAg");
	this.shape_1.setTransform(115.3,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATEHIgEhgIgjAAIgHBgIg2AAIAvoNIBEAAIAwINgAALBkIgLjnIgPDnIAaAAg");
	this.shape_2.setTransform(97.4,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfEHIgykEIgMhGIAAFKIgzAAIAAoNIA/AAIAqEAIAJBIIAAlIIAzAAIAAINg");
	this.shape_3.setTransform(79.3,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATEHIgEhgIgjAAIgHBgIg2AAIAvoNIBEAAIAwINgAALBkIgLjnIgPDnIAaAAg");
	this.shape_4.setTransform(61,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZEHQgOgGgLgMQgMgNgFgQQgHgRAAgTIAAlmQAAgTAHgRQAFgRAMgMQALgMAOgHQAPgGAPAAQAQAAAOAGQANAHAJAMQASAYAAApIAABkIgzAAIAAhnQAAgVgSAAQgSAAAAAVIAAFrQAAAVASAAQASAAAAgVIAAhoIAzAAIAABmQAAAUgFAQQgEARgJAMQgJAMgNAGQgOAGgQAAQgPAAgPgGg");
	this.shape_5.setTransform(44.5,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(0,-19,176.6,82.9), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaEHQgGAAgFgeIgEg0IAAh7QAAgVgMAAIgQAAIAADiIg+AAIAAoNIBPAAQAdAAASAQQALAKAFAPQAHASAAAYIAACGQAAASgIANQgGAMgOALQANAMAHAKQAKAPgBARIAABwQAAAjAJAzIAAACgAgRgWIAQAAQAKAAAAgWIAAiGQAAgVgKAAIgQAAg");
	this.shape.setTransform(115.7,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcEDQgOgFgKgNQgLgMgGgQQgGgRAAgTIAAm6IA9AAIAAG+QAAATAPAAQARAAAAgTIAAm+IA6AAIAAG6QAAATgGARQgFARgLALQgKANgNAFQgOAHgQAAQgPAAgOgHg");
	this.shape_1.setTransform(96.7,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdEHQgOgGgLgMQgMgNgFgQQgGgRAAgTIAAlmQAAgTAGgRQAFgRAMgMQALgMAOgHQAOgGAPAAQAQAAAPAGQANAHALAMQALAMAGARQAGARAAATIAAFmQAAATgGARQgGAQgLANQgKAMgOAGQgOAGgRAAQgPAAgOgGgAgOi3IAAFvQAAATAOAAQAQAAAAgTIAAlvQAAgTgQAAQgOAAAAATg");
	this.shape_2.setTransform(78.2,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggEHIAAjPIg1k+IA7AAIAbDaIAajaIA7AAIg7E+IAADPg");
	this.shape_3.setTransform(60.7,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,-24,176.6,82.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZEHQgFAAgFgeIgEgzIAAh8QAAgVgNAAIgOAAIAADiIg+AAIAAoNIBPAAQAcAAASAQQAKAKAHAPQAGASAAAYIAACGQAAASgIANQgHAMgOALQAPAMAGAKQAJAPAAARIAABwQABAjAHAzIAAACgAgQgWIAPAAQAKAAAAgVIAAiHQAAgVgKAAIgPAAg");
	this.shape.setTransform(145.8,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/EHIAAoNIB/AAIAAA/IhCAAIAACgIAsAAIAAA+IgsAAIAACxIBCAAIAAA/g");
	this.shape_1.setTransform(129,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdEHIg1oNIA9AAIAWFjIAaljIA4AAIg1INg");
	this.shape_2.setTransform(112.5,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeEHQgNgGgLgMQgMgNgFgQQgGgRAAgTIAAlmQAAgTAGgRQAFgRAMgMQALgMANgHQAPgGAPAAQAQAAAPAGQANAHALAMQALAMAGARQAGARAAATIAAFmQAAATgGARQgGAQgLANQgKAMgOAGQgOAGgRAAQgPAAgPgGgAgOi3IAAFvQAAATAOAAQAQAAAAgTIAAlvQAAgTgQAAQgOAAAAATg");
	this.shape_3.setTransform(94.9,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZEHQgOgGgLgMQgMgNgFgQQgHgRAAgTIAAlmQAAgTAHgRQAFgRAMgMQALgMAOgHQAPgGAPAAQAQAAAOAGQANAHAJAMQASAYAAApIAABkIgzAAIAAhnQAAgVgSAAQgSAAAAAVIAAFrQAAAVASAAQASAAAAgVIAAhoIAzAAIAABmQAAAUgFAQQgEARgJAMQgJAMgNAGQgOAGgQAAQgPAAgPgGg");
	this.shape_4.setTransform(77.3,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggEHQgOgGgLgMQgKgNgFgRQgGgSABgYIAAhAIA1AAIAABKQAAAbAWAAQAUAAAAgbQAAgngJgkQgIgigVgwQgYg4gNgmIgOgzQgFgaAAgTQAAgXAEgTQAGgTAJgOQALgOAPgHQAQgIAUAAQAQAAANAGQANAFAKAMQAJAMAFATQAFASAAAYIAABHIg1AAIAAhQQAAgYgSAAQgUAAAAAYQAAAvAKAhQAFARAZA/QAZA6AMApQARA1gBAlQABAegJAVQgHATgMAMQgVATgeAAQgRAAgPgGg");
	this.shape_5.setTransform(59.8,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeEHIAAoNIA9AAIAAINg");
	this.shape_6.setTransform(46.3,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMEHIAAoNIBTAAQAdAAASAQQALAKAFAPQAHASAAAYIAAFnQAAAYgHARQgFAQgLAKQgSAQgdAAgAgODIIAOAAQAQAAgBgUIAAlmQABgVgQAAIgOAAg");
	this.shape_7.setTransform(32.3,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-60.4,-25,298,82.9), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Valley300x250();
	this.instance.parent = this;
	this.instance.setTransform(-29,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-29,0,300,600), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Lights300x250();
	this.instance.parent = this;
	this.instance.setTransform(31,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(31,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mountains300x250();
	this.instance.parent = this;
	this.instance.setTransform(41,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(41,0,300,600), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BGIALgUQAIAHAIAAQAJAAAFgFQAFgGAAgHIgvh4IAaAAIAiBVIAjhVIAaAAIg4CKIgFAKIgJAIQgJAHgMAAQgQAAgNgMg");
	this.shape.setTransform(148.1,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA6QgIgDgGgFQgGgFgDgHQgDgHAAgIQAAgSANgHQAGgFAJgCQAJgCALAAIAeAAIAAgEQAAgMgGgGQgHgGgMAAQgQAAgRAMIgLgPQAKgJAMgEQAMgEANAAQAKAAAJADQAIACAHAFQAGAGAEAIQADAIAAALIAABLIgXAAIAAgQQgOARgYAAQgJAAgHgCgAgTAJQgHAFAAAIQAAAJAHAEQAGAFAMAAQALAAAIgHQAFgDACgFQACgEAAgGIAAgKIgbAAQgNAAgGAEg");
	this.shape_1.setTransform(134.9,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYBOQgKgDgIgJQgRgRAAgbQAAgOAEgKQAFgKAIgJQARgQAXAAQALAAAKAFQAJAFAHAKIAAhBIAZAAIAACjIgZAAIAAgRQgOATgZAAQgLAAgJgFgAgYgEQgKAKAAARQAAARALAKQAFAFAGAEQAHACAGAAQAHAAAGgCQAGgEAFgFQAGgFACgHQADgGAAgJQAAgIgDgIQgCgGgGgFQgKgLgOAAQgOAAgLALg");
	this.shape_2.setTransform(121.1,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrArQgJgJgEgKQgFgLAAgNQAAgLAFgLQAEgLAJgJQASgRAZAAQANAAALAEQALAFAJAIQAJAJAEALQAFALAAALQAAAagSARQgJAJgLAEQgLAEgNAAQgZAAgSgRgAgagaQgKAKAAAQQAAARAKALQAGAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgJQAAgHgDgHQgCgHgGgFQgKgLgQAAQgPAAgLALg");
	this.shape_3.setTransform(107,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBNIAAiBIgvAAIAAgYIB3AAIAAAYIgvAAIAACBg");
	this.shape_4.setTransform(93.2,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYBSIgigzIgSASIAAAhIgZAAIAAijIAZAAIAABfIAugwIAgAAIgsAtIAvBHg");
	this.shape_5.setTransform(75,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrArQgJgJgEgKQgFgLAAgNQAAgLAFgLQAEgLAJgJQASgRAZAAQANAAALAEQALAFAJAIQAJAJAEALQAFALAAALQAAAagSARQgJAJgLAEQgLAEgNAAQgZAAgSgRgAgagaQgKAKAAAQQAAARAKALQAGAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgJQAAgHgDgHQgCgHgGgFQgKgLgQAAQgPAAgLALg");
	this.shape_6.setTransform(60.7,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrArQgJgJgEgKQgFgLAAgNQAAgLAFgLQAEgLAJgJQASgRAZAAQANAAALAEQALAFAJAIQAJAJAEALQAFALAAALQAAAagSARQgJAJgLAEQgLAEgNAAQgZAAgSgRgAgagaQgKAKAAAQQAAARAKALQAGAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgJQAAgHgDgHQgCgHgGgFQgKgLgQAAQgPAAgLALg");
	this.shape_7.setTransform(46.4,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BNIAAiZIA7AAQAPAAALAEQAMAEAFAGQALAMAAAPQAAAJgDAHQgDAHgGAEIgFADIgGADQAOACAJAKQAEAFACAGQACAGAAAIQAAAPgLANQgGAHgLADQgLAEgQAAgAgiA1IAnAAQAPAAAHgFQAEgCACgEQACgEAAgHQAAgUghAAIgkAAgAgigMIAhAAQAbAAAAgTQAAgGgCgEQgCgEgDgCQgEgDgFgBQgFgBgGAAIghAAg");
	this.shape_8.setTransform(32,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BookToday, new cjs.Rectangle(21.7,-14.3,134.8,30.8), null);


(lib.Tween2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BookToday();
	this.instance.parent = this;
	this.instance.setTransform(-1,217.7,1,1,0,0,0,89,17.2);

	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,16.1,1,1,0,0,0,112.9,56);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-186.3,140.5,403.3);


// stage content:
(lib._160x600_disc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuUBvQgogrAAhEQAAhDApgrQArgsBEgBQA5AAAkAdQAjAcAIAyIhDAAQgNgxg4AAQgmgBgWAcQgXAbAAArQAAArAXAcQAXAbAmAAQA3AAANgyIBDAAQgIAzgjAcQglAcg5ABQhGAAgpgtgAN1CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgANPAjIgqh6IgBAAIgqB6IBVAAgAFpCWIAAksIBzAAQBNABArArQAoAoAABCQAABEgoAoQgrAqhNAAgAGtBeIApAAQAyAAAYgcQAXgYAAgqQAAgpgXgZQgYgcgyAAIgpAAgAD2CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgADQAjIgqh6IgBAAIgqB6IBVAAgAhXCWIiQi5IgBAAIABC5IhEAAIAAksIA8AAICQC5IABAAIgBi5IBEAAIAAEsgAmdCWIgVg9Ih4AAIgVA9IhGAAIBvksIBQAAIBxEsgAnEAjIgph6IgCAAIgqB6IBVAAg");
	this.shape.setTransform(103.9,552.4,0.286,0.286);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(128.9,521.4,0.286,0.286,0,0,0,20.2,17.1);
	this.instance.alpha = 0.352;

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.1,516.2,0.286,0.286,0,0,0,4.4,11.6);
	this.instance_1.alpha = 0.352;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(129.3,515.6,0.286,0.286,0,0,0,19.1,14);
	this.instance_2.alpha = 0.352;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.3,513.2,0.286,0.286,0,0,0,11.7,10.7);
	this.instance_3.alpha = 0.352;

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(54.8,547.4,0.286,0.286,0,0,0,19.9,20.8);
	this.instance_4.alpha = 0.352;

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74.2,543.1,0.286,0.286,0,0,0,31.1,9.1);
	this.instance_5.alpha = 0.352;

	this.instance_6 = new lib.Path_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(46.5,540.7,0.286,0.286,0,0,0,23.2,15.9);
	this.instance_6.alpha = 0.352;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxJOCQguguAIhPQAMh1BChSQBahuDXhkQAggPAdgKIAvh2QgrAwg0AaQgzAZg1AAQhBAAgmgoQhMBUhYAxQhWAuhKAAQhoAAgZhVQgXhOAviDIFTvAID8gYIlbPLQgSAwABAWQAAAdAdAAQAZAAAhgWQAfgWAugvQABg4AYg/IDapfIDqgcIjYJaQgRAuACAaQACAcAZAAQAuAAA0hIQBEhcBJjMIB+liIDwgdIlZOxQBGgCCSALQCbALBTAAQExABEZhtIAFADQi3DIkzAwQisAakdgZQhegIhDgCQjXHlj4AAQhNAAgrgrgArwHnQhgAnhBA+QhNBKgNBVQgBAZAMARQAMAPATAAQA0AAAvhFQAkg4Ayh/IAahCgA+0mTIiSAPIBwk5IOdhZIgeBUQgsB+hTA6QhUA5inAPIivASIhdEDIFXgiIhbEBIlZAiIjYJgIlEBOgARADgIAnhNIieAsIi/g8IBKgtIIRheIg4D1Ig4AsgAg7AqQhThVALidQAHhqAkh4QAmiGA+hsQCakQDiAAQCDAABRA6QBRA5AVBvQAjApAkgBQAUAAARgSQATgSASgrIDYgVIipIFQgKAgAEANQADANAQAAQA4AABQibQBYisA5kDIC2gSQgNBLgRBGQgIArAGAYQAGAYAUAJQAyh9BZhNQBmhaB/ABQBWAAAsAnQApAmgFBAQgIBuhwBNQhnBGiYAVIgDAdQgCAhANASQANASAcAAQBBABBXg3QBXg2BXhfIB8lGICFgMIgOBeQAdg3ArgeQAsgfA4AAQAoAAAhAOIg5CbQgYgDgZAAQhDAAguArQgtAogfBQIhgD/IjJAtIAghSQhEBGhVAqQhbAshVAAQhYgBgvgwQgwgyAGhcQABgVAFgeQgcgIgUgQQhHC8hjBqQh5CAieAAQhiAAgkg/Qgjg/AhhrIBbkdQgOADgJAAQgeAAgagMQgMBpgoBxQgtB9hCBjQijD0jdAAQiQAAhNhRgADTomQhaC8gLCqQgJCABTABQBiAABijQQBYi9ANipQAJiAhUAAQhhgBhiDQgAZmqpQguA2gfBLQBLgQAwglQAvgmADguQACgUgHgMQgHgLgOAAQgbAAgrAzg");
	this.shape_1.setTransform(80.1,531.8,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(305));

	// txt3
	this.instance_7 = new lib.Symbol2copy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,273,0.1,0.1,0,0,0,88.5,29.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({_off:false},0).wait(1).to({regX:88.8,regY:19.8,scaleX:0.24,scaleY:0.24,y:270.7},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:80.1,y:270.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:269.6},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:269.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:268.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:80.2,y:268.5},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:268.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:267.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:267.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:267.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:267.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:266.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:266.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:266.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:266.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:266.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:266},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:265.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:265.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:265.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:265.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:265.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:265.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:80.3,y:265.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:80.2,y:265},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:264.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:264.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:264.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:80.3,y:264.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:80.2,y:264.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:264.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:80.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:264.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:264.2},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:264.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:264},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:263.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:80.4,y:263.8},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:80.3,y:263.7},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:263.6},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:263.5},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:263.4},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:80.4},0).wait(1).to({scaleX:1,scaleY:1,y:263.3},0).wait(1).to({scaleX:1,scaleY:1,x:80.3},0).wait(1).to({scaleX:1,scaleY:1,x:80.4},0).wait(1).to({regX:88.3,regY:29,scaleX:1,scaleY:1,x:80,y:273},0).to({regX:88.4,regY:29.1,scaleX:1.73,scaleY:1.73,x:80.1,y:273.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(122));

	// txt2
	this.instance_8 = new lib.Symbol2copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,273,0.1,0.1,0,0,0,88.5,29.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).wait(1).to({regX:87.9,regY:14.8,scaleX:0.24,scaleY:0.24,x:79.8,y:269.5},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:268.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:267.8},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:79.7,y:267.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:266.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:266.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:265.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:265.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:264.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:79.6,y:264.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:264.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:263.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:263.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:263.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:262.9},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:262.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:79.5,y:262.4},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:79.6,y:262.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:79.5,y:261.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:261.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:261.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:261.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:261.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:261},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:260.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:260.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:260.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:260.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:260.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:260.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:79.4,y:260},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:79.5,y:259.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:259.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:259.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:259.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:259.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:259.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:259.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:259.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:259.1},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:259},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:258.9},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:258.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:258.7},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:258.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:79.4},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:258.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:79.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:258.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:79.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:79.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:79.4,y:258.3},0).wait(1).to({scaleX:1,scaleY:1,x:79.5},0).wait(1).to({regX:88.3,regY:29,scaleX:1,scaleY:1,x:80,y:273},0).to({regX:88.4,regY:29.1,scaleX:1.99,scaleY:1.99,x:80.1,y:273.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(181));

	// txt1
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,273,0.1,0.1,0,0,0,88.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:89.2,regY:13.8,scaleX:0.24,scaleY:0.24,x:80.1,y:269.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:80.2,y:268.2},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:267.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:80.3,y:266.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:266.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:265.6},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:80.4,y:265.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:264.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:264.2},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:263.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:263.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:263.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:80.5,y:262.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:262.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:262.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:261.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:261.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:261.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:261.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:261},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:80.6,y:260.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:260.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:80.5,y:260.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:80.6,y:260.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:260},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:259.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:259.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:259.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:259.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:259.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:259.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:259},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:258.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:80.7,y:258.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:258.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:258.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:258.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:258.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:258.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:258.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:258.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:258},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:257.9},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:257.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:257.7},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:257.6},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:257.5},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:257.4},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:80.8},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:80.7,y:257.3},0).wait(1).to({scaleX:1,scaleY:1,x:80.8},0).wait(1).to({regX:88.3,regY:29,scaleX:1,scaleY:1,x:80,y:273},0).to({regX:88.4,regY:29.1,scaleX:1.73,scaleY:1.73,x:80.1,y:273.1,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(240));

	// img1
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80.1,125.1,1.21,1.21,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.03,scaleY:1.03},59).to({scaleX:1,scaleY:1,x:80,y:125,alpha:0},10).to({_off:true},1).wait(235));

	// img2
	this.instance_11 = new lib.Symbol1copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(80,-115.9,2.265,2.265,0,0,0,149.9,124.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({regX:150,regY:125,scaleX:1.18,scaleY:1.18,x:80.1,y:125.2},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:125.1},49).to({scaleX:1,scaleY:1,x:80,y:125,alpha:0},10).to({_off:true},1).wait(176));

	// img3
	this.instance_12 = new lib.Symbol1copy2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(80.1,37.1,1.887,1.887,0,0,0,150,125);
	this.instance_12._off = true;

	this.instance_13 = new lib.Symbol5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(80,258,1,1,0,0,0,88.5,54);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(118).to({_off:false},0).to({scaleX:1.18,scaleY:1.18,y:125.2},10,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,y:125.1},49).to({scaleX:1,scaleY:1,x:80,y:125,alpha:0},10).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(262).to({_off:false},0).wait(1).to({regX:88.2,regY:38.9,x:79.7,y:243,alpha:0.003},0).wait(1).to({y:243.3,alpha:0.015},0).wait(1).to({y:243.9,alpha:0.039},0).wait(1).to({y:245,alpha:0.082},0).wait(1).to({y:247,alpha:0.161},0).wait(1).to({y:250.8,alpha:0.313},0).wait(1).to({y:256.5,alpha:0.537},0).wait(1).to({y:260.5,alpha:0.696},0).wait(1).to({y:262.9,alpha:0.792},0).wait(1).to({y:264.6,alpha:0.856},0).wait(1).to({y:265.7,alpha:0.901},0).wait(1).to({y:266.5,alpha:0.934},0).wait(1).to({y:267.1,alpha:0.958},0).wait(1).to({y:267.6,alpha:0.975},0).wait(1).to({y:267.9,alpha:0.987},0).wait(1).to({y:268.1,alpha:0.994},0).wait(1).to({y:268.2,alpha:0.999},0).wait(1).to({regX:88.5,regY:54,x:80,y:283.3,alpha:1},0).wait(25));

	// End Txt1
	this.instance_14 = new lib.Symbol4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(80.1,473.6,1,1,0,0,0,112.9,56);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(80,120.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(188).to({_off:false},0).wait(1).to({regX:113.3,regY:-67.8,x:80.5,y:346.2,alpha:0.083},0).wait(1).to({y:340.2,alpha:0.224},0).wait(1).to({y:330,alpha:0.466},0).wait(1).to({y:321.6,alpha:0.664},0).wait(1).to({y:317,alpha:0.773},0).wait(1).to({y:314,alpha:0.842},0).wait(1).to({y:312,alpha:0.889},0).wait(1).to({y:310.6,alpha:0.923},0).wait(1).to({y:309.5,alpha:0.948},0).wait(1).to({y:308.8,alpha:0.967},0).wait(1).to({y:308.2,alpha:0.98},0).wait(1).to({y:307.8,alpha:0.99},0).wait(1).to({y:307.5,alpha:0.996},0).wait(1).to({y:307.4,alpha:0.999},0).wait(1).to({regX:112.9,regY:56,x:80.1,y:431.2,alpha:1},0).wait(57).to({regX:113.3,regY:-67.8,x:80.5,y:307.7,alpha:0.997},0).wait(1).to({y:308.7,alpha:0.987},0).wait(1).to({y:311,alpha:0.966},0).wait(1).to({y:315,alpha:0.927},0).wait(1).to({y:322.9,alpha:0.853},0).wait(1).to({y:343.3,alpha:0.661},0).wait(1).to({y:380.7,alpha:0.308},0).wait(1).to({y:394.8,alpha:0.175},0).wait(1).to({y:402.1,alpha:0.107},0).wait(1).to({y:406.6,alpha:0.064},0).wait(1).to({y:409.5,alpha:0.037},0).wait(1).to({y:411.4,alpha:0.019},0).wait(1).to({y:412.5,alpha:0.008},0).wait(1).to({y:413.2,alpha:0.002},0).wait(1).to({regX:112.9,regY:56,x:80.1,y:537.2,alpha:0},0).to({_off:true},16).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(290).to({_off:false},0).to({alpha:1},9).wait(6));

	// red
	this.instance_16 = new lib.Symbol3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(78.6,599.8,1,1.287,0,0,0,152.5,255);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(177).to({_off:false},0).wait(128));

	// coupe
	this.instance_17 = new lib.Couple160x600();
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(177).to({_off:false},0).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.2,273.8,363,726);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_disc_atlas_NP_.jpg", id:"160x600_disc_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;