(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_lemur_2_atlas_", frames: [[0,0,300,441],[229,645,83,49],[0,645,227,40],[0,443,335,200]]}
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
	this.spriteSheet = ss["728x90_lemur_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["728x90_lemur_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lb_landlemur = function() {
	this.spriteSheet = ss["728x90_lemur_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lb_pattern = function() {
	this.spriteSheet = ss["728x90_lemur_2_atlas_"];
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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgOA/IAAgdIAdAAIAAAdgAgOAVIAAhTIAdAAIAABTg");
	this.shape.setTransform(200.3,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AgPA/IAAgtIglhQIAjAAIARAzIATgzIAjAAIgmBQIAAAtg");
	this.shape_1.setTransform(192,55.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AAcA/IgHgSIgrAAIgFASIgjAAIAyh9IAaAAIAxB9gAANATIgNgrIgOArIAbAAg");
	this.shape_2.setTransform(180.1,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("Ag1A/IAAh9IApAAIAMAAQAIABAGACQAJACAGAFQAKAIAEAGQADAEACAFIAEAKQACAIAAALQgBARgCAHIgEALIgHAJIgJAIQgFADgGADQgGADgIABQgHABgIAAgAgVAjIAOAAQAHAAAGgDQAGgDAEgFQADgFACgGQABgGAAgHIgBgKQgCgHgDgFQgDgFgFgDQgIgDgHgBIgOAAg");
	this.shape_3.setTransform(167.6,55.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AgNBAIgNgEQgGgDgFgEIgKgIIgIgJIgGgLIgDgMIgBgMQAAgGABgHQABgHADgHQADgGAEgFIAIgKIAKgHIALgGQAGgCAGgBIAMgBIAOABIANAEIALAGIAKAIIAIAKIAGALIADAMIABAMIgBANIgDAMIgGALIgIAKIgKAIIgLAGIgNAEQgHABgHAAQgHAAgGgBgAgOghQgGADgEAGQgFAFgCAGQgCAHAAAGIAAAAQAAAHACAHQADAGAEAFQAFAGAGADQAHADAHAAQAIAAAGgEQAGgDAFgGQAEgFACgGQACgHAAgGQAAgFgCgHQgCgGgEgGQgFgFgGgEQgHgDgIAAQgHAAgHADg");
	this.shape_4.setTransform(153.8,55.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AgPA/IAAhhIgZAAIAAgcIBRAAIAAAcIgZAAIAABhg");
	this.shape_5.setTransform(142.4,55.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgKBAIgJgCIgIgEIgGgGQgGgFgCgJQgDgHAAgKIAgAAQAAAFACAEQABADADACQADADAEAAQAFAAAEgEQADgDAAgFQAAgEgFgEIgTgJQgfgLAAgYIABgJIADgHQAEgHAHgGQAGgEAIgDQAHgCAHAAQAIAAAGABQAIADAGAEQAHAFADAHIADAIQACAFAAAGIggAAQgCgNgKAAQgDAAgDADQgEADAAAEQAAAEAFADIAUALIAPAIQAGADADAEQADAFABAFQACAEAAAGQAAAIgCAHQgDAHgFAGQgFAGgIADQgNADgIAAg");
	this.shape_6.setTransform(128.1,55.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgPA/IAAhhIgZAAIAAgcIBRAAIAAAcIgZAAIAABhg");
	this.shape_7.setTransform(119,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgjA/IAAh9IBGAAIAAAcIglAAIAAAUIAkAAIAAAbIgkAAIAAAWIAlAAIAAAcg");
	this.shape_8.setTransform(110.5,55.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AAOA/Igig2IAAA2IggAAIAAh9IAgAAIAAA5IAjg5IAiAAIgqA+IAuA/g");
	this.shape_9.setTransform(100.6,55.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgMBAIgNgEQgGgDgFgEIgKgIIgHgKIgGgLIgEgMIgBgMIABgLIAEgMIAFgLIAIgKQAEgFAFgDQAFgEAGgDQAHgDAGgBQAHgBAHAAIAOABIAMAEQAIADALAJQAGAFAHAMQAFAIABAIIgiAAIgEgIIgGgHQgEgDgFgCQgFgCgGAAQgHAAgHADQgGADgEAFQgEAGgDAGQgCAHAAAGQAAAHADAGQACAHAEAFQAFAGAGADQAGADAHAAQAUAAAKgVIAiAAIgEAKIgFAKQgJALgFAFQgMAHgHADQgOADgIAAIgNgBg");
	this.shape_10.setTransform(86.8,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgPA/IAAh9IAfAAIAAB9g");
	this.shape_11.setTransform(77,55.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgPA/IAAhhIgZAAIAAgcIBRAAIAAAcIgZAAIAABhg");
	this.shape_12.setTransform(70.1,55.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AgPA/IAAgtIglhQIAjAAIARAzIATgzIAjAAIgmBQIAAAtg");
	this.shape_13.setTransform(55.1,55.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AgQA+IgKgEIgJgHIgGgJIgEgIQgCgGAAgQIAAhLIAgAAIAABLQAAAKACAFQACAEADACQAEADAEAAQAGAAADgCQAEgCABgEQACgFAAgLIAAhLIAgAAIAABLIgBAOIgCAKIgEAIIgFAHQgJAHgGACIgJADIgLABQgJAAgIgCg");
	this.shape_14.setTransform(43.7,55.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("AguA/IAAh9IAuAAQAJAAAHACQAIADAGAEQAFAEADAGQADAGAAAIQAAAIgEAGIgEAHQgDACgEACQAUAHABAWQAAAHgDAIQgDAHgGAFIgIAGIgJADQgNACgKAAgAgOAjIAOAAQAGAAADgBQAEgCABgDQACgCAAgFQAAgDgBgCIgFgEIgKgBIgOAAgAgOgOIAMAAIAHgBIADgDQACgCAAgEQAAgEgCgBQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgHgBIgMAAg");
	this.shape_15.setTransform(32.7,55.3);

	this.instance = new lib.lb_landlemur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,227,68), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lb_pattern();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,335,200), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpApIAAhRIBTAAIAABRg");
	this.shape.setTransform(175.6,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgICNQgOgFgKgIQgKgJgFgPQgFgOAAgUIAAhcIgbAAIAAhAIAbAAIAAg6IBPAAIAAA6IA1AAIAABAIg1AAIAABMQAAAMAFAGQAFAFAMAAQAOAAAQgIIAAA/QgLAGgOADQgOAEgQAAQgTAAgNgEg");
	this.shape_1.setTransform(160.3,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhDBuQgOgGgKgKQgKgLgFgPQgGgRAAgSIAAiUIBQAAIAAB6QAAASAJAKQAJAKAOAAQAOAAAJgKQAKgKAAgSIAAh6IBQAAIAADiIhQAAIAAgfQgNAQgPAJQgHAGgKACQgLADgLAAQgSAAgPgGg");
	this.shape_2.setTransform(138.1,31.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaB0IgYgGIgVgMIgSgOQgLgLgPgaIgHgXIgDgXIAAgBQAAgPAKgeQAGgOAUgYIASgOIAWgLIAYgIQANgCAMAAQATAAAgAJQAPAHAYATQAUAXAGAOQAKAeAAAQIAAAAQAAAMgDAMIgHAWQgPAbgLALQgZAUgPAGIgYAGQgNADgNAAQgNAAgNgDgAgTguQgJAEgGAHQgGAHgDAJQgEAJAAAKIAAAAQAAAKAEAKQADAJAHAHQAGAHAJAFQAJADAJAAQALAAAJgDQAJgFAGgHQAGgHAEgIQADgKAAgKIAAgBQAAgJgEgKQgDgJgHgHQgGgHgJgEQgJgEgKAAQgKAAgJAEg");
	this.shape_3.setTransform(111.1,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhBCQQgbgHgZgNIAZg1QATALASAFQAVAGAWAAQANAAAMgEQALgDAHgIQAIgHAEgKQADgLAAgNIAAgJQgOAQgPAIQgIAFgJACQgLADgMAAQgVAAgSgHQgTgIgNgNQgOgOgIgTQgIgTAAgYIAAgBQAAgYAIgUQAIgTAOgPQANgNASgIQASgHAUAAQARAAAYAJQAOAIAPAPIAAgbIBQAAIAACsQgDAmgEAPQgEALgGAKQgFAJgIAHQgHAIgKAGQgKAGgNAEQgMAEgPACIggACQgqgCgTgEgAgShTQgIADgHAGQgGAGgDAIQgEAIAAAJIAAABQAAAJAEAJQADAHAGAGQAHAGAIAEQAJACAJAAQAKAAAJgDQAIgDAGgGQAGgGAEgIQADgIAAgJIAAgBQAAgKgDgIQgEgIgGgFQgGgGgIgDQgJgEgKAAQgJAAgJAEg");
	this.shape_4.setTransform(71.2,34.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgB0IAAh6QAAgSgIgKQgJgKgOAAQgOAAgKAKQgJAKABASIAAB6IhRAAIAAjiIBRAAIAAAgQAMgRAOgJQAJgFAJgDQAKgDAMAAQASAAAPAGQAOAFAKALQAKALAFAQQAFAPAAAUIAACTg");
	this.shape_5.setTransform(44.2,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABxQgOgEgKgJQgLgJgFgNQgGgOAAgQIAAgBQAAgSAGgNQAHgNALgJQAMgIARgFQAQgFAUAAQAVAAAhAJIAAgEQAAgRgMgKQgFgFgJgCQgHgCgMAAQgRAAgQADQgNADgRAGIgQg4QAVgJAUgEQAYgFAaAAQAUAAAgAHQAVAHAOAOQAMAMAGASQAGASAAAYIAACCIhPAAIAAgYQgMAOgQAHQgQAIgWAAQgQAAgOgFgAgYAWQgJAHAAANIAAABQAAAMAIAGQAHAHANAAQAQAAALgKQALgLAAgQIAAgLQgOgGgRAAQgQAAgKAIg");
	this.shape_6.setTransform(17.8,31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgCZIAAh7QAAgSgIgKQgJgJgOAAQgOAAgKAJQgJAKAAASIAAB7IhQAAIAAkxIBQAAIAABuQANgQAOgJQAJgFAJgDQAKgDAMAAQASAAAPAGQAOAFAKALQAKALAFAQQAFAPAAATIAACUg");
	this.shape_7.setTransform(-7.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-23,0,206.6,54.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhB0IAAh6QAAgSgJgKQgJgKgPAAQgNAAgKAKQgIAKgBASIAAB6IhQAAIAAjiIBQAAIAAAgQANgRAOgJQAIgFAKgDQAKgDAMAAQASAAAPAGQAOAFAKALQAKALAFAQQAGAPgBAUIAACTg");
	this.shape.setTransform(145.3,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnCZIAAjiIBPAAIAADigAgphdIAAg7IBTAAIAAA7g");
	this.shape_1.setTransform(125.6,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah8CWIAAklIBQAAIAAAdQAOgQAOgIQAIgGAJgCQALgDAMAAQAUAAATAIQASAJAOAPQAOAQAHAVQAJAfAAASIAAAAQgDAjgGAPQgHAVgOAQQgOAPgSAJQgTAHgUABQgMAAgLgDQgJgCgJgGQgOgHgNgPIAABfgAgRhOQgJAEgGAGQgHAIgDAJQgEAKAAAKIAAABQAAALAEAKQADAJAHAGQAGAHAJAEQAIAEAJAAQAJAAAJgEQAIgEAHgGQAGgHADgJQAEgJAAgMIAAgBQAAgLgEgJQgDgJgGgIQgHgGgIgEQgJgEgJAAQgJAAgIAEg");
	this.shape_2.setTransform(94,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaB0IgYgGIgVgMIgSgOQgLgLgPgaIgHgXIgDgXIAAgBQAAgPAKgeQAGgOAUgYIASgOIAWgLIAYgIQANgCAMAAQATAAAgAJQAPAHAYATQAUAXAGAOQAKAeAAAQIAAAAQAAAMgDAMIgHAWQgPAbgLALQgZAUgPAGIgYAGQgNADgNAAQgNAAgNgDgAgTguQgJAEgGAHQgGAHgDAJQgEAJAAAKIAAAAQAAAKAEAKQADAJAHAHQAGAHAJAFQAJADAJAAQALAAAJgDQAJgFAGgHQAGgHAEgIQADgKAAgKIAAgBQAAgJgEgKQgDgJgHgHQgGgHgJgEQgJgEgKAAQgKAAgJAEg");
	this.shape_3.setTransform(65.6,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLB0IAAjiIBPAAIAAAtQAFgMAGgJQAHgKAJgGQAJgGAKgEQAMgDAOABIAABUIgHAAQgQAAgMAEQgMAFgIAJQgJAKgEANQgEAPAAATIAABHg");
	this.shape_4.setTransform(44,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiLCTIAAklIByAAQATAAARADQARACAQAGQAPAFANAHQANAIALAKQALAKAIALQAIALAFAOQAGANADAPQADAPAAAPIAAABQAAAPgDAPQgDAOgGAOQgFANgJAMQgIAMgKAKQgLAKgNAIQgOAHgPAGQgQAFgRADQgRADgUAAgAg5BLIAhAAQASAAAOgFQAPgFALgKQAKgJAGgOQAGgOAAgSIAAAAQAAgRgGgOQgGgOgKgJQgLgKgPgFQgOgEgSAAIghAAg");
	this.shape_5.setTransform(18.7,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,160.6,54.4), null);


(lib.lemurrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;
	this.instance.setTransform(300,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lemurrr, new cjs.Rectangle(0,0,300,441), null);


// stage content:
(lib._728x90_lemur_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(624,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178));

	// landolemur
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(482.5,117,1,1,0,0,0,113.5,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(162).to({_off:false},0).wait(1).to({regY:30.9,y:127.6},0).wait(1).to({y:126.8},0).wait(1).to({y:125.1},0).wait(1).to({y:122.3},0).wait(1).to({y:117.9},0).wait(1).to({y:111.1},0).wait(1).to({y:100},0).wait(1).to({y:82.6},0).wait(1).to({y:65.2},0).wait(1).to({y:54.7},0).wait(1).to({y:49},0).wait(1).to({y:45.8},0).wait(1).to({y:44.3},0).wait(1).to({regY:20,y:33},0).wait(2));

	// Layer 6
	this.instance_2 = new lib.Symbol2copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(472.1,34.8,1,1,-179,0,0,80.2,27.2);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({_off:false},0).to({regX:80.3,rotation:0,y:44.8,alpha:1},10,cjs.Ease.get(1)).wait(46).to({regX:80.5,regY:30.4,x:472.3,y:47.8},0).wait(1).to({y:46.9},0).wait(1).to({y:45.3},0).wait(1).to({y:42.7},0).wait(1).to({y:38.5},0).wait(1).to({y:32},0).wait(1).to({y:21.4},0).wait(1).to({y:4.9},0).wait(1).to({y:-11.7},0).wait(1).to({y:-21.6},0).wait(1).to({y:-27.1},0).wait(1).to({y:-30.1},0).wait(1).to({y:-31.5},0).wait(1).to({regX:80.3,regY:27.2,x:472.1,y:-35.2},0).wait(6));

	// dropin
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(472.1,-28.2,1,1,0,0,0,80.3,27.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({regX:80.6,regY:30.3,x:472.4,y:-20.3},0).wait(1).to({y:-13.5},0).wait(1).to({y:-3.6},0).wait(1).to({y:9},0).wait(1).to({y:20},0).wait(1).to({y:27.7},0).wait(1).to({y:33},0).wait(1).to({y:36.8},0).wait(1).to({y:39.7},0).wait(1).to({y:42},0).wait(1).to({y:43.7},0).wait(1).to({y:45},0).wait(1).to({y:46},0).wait(1).to({y:46.8},0).wait(1).to({y:47.3},0).wait(1).to({y:47.6},0).wait(1).to({y:47.8},0).wait(1).to({regX:80.3,regY:27.2,x:472.1,y:44.8},0).wait(58).to({rotation:180,alpha:0.301},10,cjs.Ease.get(-1)).to({_off:true},1).wait(74));

	// lemur
	this.instance_4 = new lib.lemurrr();
	this.instance_4.parent = this;
	this.instance_4.setTransform(169.1,260.6,0.81,0.81,0,0,0,150.1,220.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:150,x:169,y:248.6},0).wait(1).to({y:234.2},0).wait(1).to({y:217},0).wait(1).to({y:196.9},0).wait(1).to({y:174.4},0).wait(1).to({y:150.6},0).wait(1).to({y:127.5},0).wait(1).to({y:106.5},0).wait(1).to({y:88.4},0).wait(1).to({y:73.1},0).wait(1).to({y:60.4},0).wait(1).to({y:49.9},0).wait(1).to({y:41.2},0).wait(1).to({y:34.1},0).wait(1).to({y:28.2},0).wait(1).to({y:23.5},0).wait(1).to({y:19.6},0).wait(1).to({y:16.6},0).wait(1).to({y:14.3},0).wait(1).to({y:12.6},0).wait(1).to({y:11.5},0).wait(1).to({y:10.8},0).wait(1).to({regX:150.1,x:169.1,y:10.6},0).wait(1).to({regX:150,x:169,y:10.7},0).wait(1).to({y:11.1},0).wait(1).to({y:11.8},0).wait(1).to({y:13},0).wait(1).to({y:14.7},0).wait(1).to({y:17.2},0).wait(1).to({y:20.6},0).wait(1).to({y:24.8},0).wait(1).to({y:29},0).wait(1).to({y:32.6},0).wait(1).to({y:35.3},0).wait(1).to({y:37.3},0).wait(1).to({y:38.7},0).wait(1).to({y:39.6},0).wait(1).to({y:40.2},0).wait(1).to({y:40.5},0).wait(1).to({regX:150.1,x:169.1,y:40.6},0).wait(1).to({regX:150,x:169,y:40.5},0).wait(1).to({y:40.4},0).wait(1).to({y:40},0).wait(1).to({y:39.4},0).wait(1).to({y:38.2},0).wait(1).to({y:36},0).wait(1).to({y:33.2},0).wait(1).to({y:31.7},0).wait(1).to({y:31},0).wait(1).to({y:30.7},0).wait(1).to({regX:150.1,x:169.1,y:30.6},0).wait(30).to({regX:150,rotation:0.2,x:169},0).wait(1).to({rotation:0.7,y:30.7},0).wait(1).to({rotation:1.7,y:30.9},0).wait(1).to({rotation:3.2,x:169.1,y:31.2},0).wait(1).to({rotation:5.2,x:169.3,y:31.5},0).wait(1).to({rotation:8.1,x:169.4,y:31.9},0).wait(1).to({rotation:11.9,x:169.7,y:32.6},0).wait(1).to({rotation:16.9,x:170,y:33.4},0).wait(1).to({rotation:23.7,x:170.4,y:34.5},0).wait(1).to({rotation:32.9,x:171,y:36.1},0).wait(1).to({rotation:46.1,x:171.7,y:38.2},0).wait(1).to({rotation:66,x:173,y:41.6},0).wait(1).to({rotation:96.1,x:174.8,y:46.6},0).wait(1).to({rotation:126.4,x:176.7,y:51.6},0).wait(1).to({rotation:145.8,x:177.9,y:54.8},0).wait(1).to({rotation:157.8,x:178.7,y:56.9},0).wait(1).to({rotation:165.7,x:179.2,y:58.2},0).wait(1).to({rotation:171.1,x:179.5,y:59.1},0).wait(1).to({rotation:174.9,x:179.8,y:59.7},0).wait(1).to({rotation:177.3,x:179.9,y:60.1},0).wait(1).to({rotation:178.9,x:180,y:60.4},0).wait(1).to({rotation:179.7,y:60.5},0).wait(1).to({regX:150.1,rotation:180,y:60.6},0).wait(75));

	// pattern
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(174.5,45,1,1,0,0,0,167.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({rotation:0.2,y:45.1},0).wait(1).to({rotation:0.7,y:45},0).wait(1).to({rotation:1.7,y:45.1},0).wait(1).to({rotation:3.2,y:45},0).wait(1).to({rotation:5.2,y:45.1},0).wait(1).to({rotation:8.1},0).wait(1).to({rotation:11.9},0).wait(1).to({rotation:16.9,y:45.2},0).wait(1).to({rotation:23.7},0).wait(1).to({rotation:32.9,y:45.3},0).wait(1).to({rotation:46.1},0).wait(1).to({rotation:66,y:45.5},0).wait(1).to({rotation:96.1,y:45.6},0).wait(1).to({rotation:126.4,y:45.8},0).wait(1).to({rotation:145.8},0).wait(1).to({rotation:157.8,y:45.9},0).wait(1).to({rotation:165.7,y:46},0).wait(1).to({rotation:171.1,y:46.1},0).wait(1).to({rotation:174.9,y:46},0).wait(1).to({rotation:177.3,y:46.1},0).wait(1).to({rotation:178.9},0).wait(1).to({rotation:179.7},0).wait(1).to({rotation:180},0).wait(75));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC1D37").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(178));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-10,728,494.2);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_lemur_2_atlas_.png", id:"728x90_lemur_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;