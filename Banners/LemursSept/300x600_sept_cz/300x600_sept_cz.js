(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_sept_cz_atlas_", frames: [[0,0,391,514],[295,516,125,302],[0,516,293,233],[0,751,97,50]]}
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
	this.spriteSheet = ss["300x600_sept_cz_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_pattern1 = function() {
	this.spriteSheet = ss["300x600_sept_cz_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_pattern2 = function() {
	this.spriteSheet = ss["300x600_sept_cz_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["300x600_sept_cz_atlas_"];
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


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgNA7IAAgbIAbAAIAAAbgAgNAUIAAhOIAbAAIAABOg");
	this.shape.setTransform(193.7,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AggA7IAAh1IBBAAIAAAaIgjAAIAAATIAjAAIAAAZIgjAAIAAAVIAjAAIAAAag");
	this.shape_1.setTransform(187,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AAYA7IgshGIAABGIgdAAIAAh1IAbAAIAsBHIgBhHIAdAAIAAB1g");
	this.shape_2.setTransform(176.6,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("AgOA7IAAh1IAdAAIAAB1g");
	this.shape_3.setTransform(167.9,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AggA7IAAh1IAfAAIAABbIAiAAIAAAag");
	this.shape_4.setTransform(162,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AAYA7IgthGIABBGIgdAAIAAh1IAbAAIAsBHIgBhHIAdAAIAAB1g");
	this.shape_5.setTransform(151.6,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgNA8IgLgEQgGgCgFgEIgJgHIgHgJIgGgLIgDgLIgBgLIAAAAQAAgGABgHQABgGADgGQACgGAEgFIAIgJIAJgHIAKgFQAGgCAGgCIALgBIANABIAMAFQAGABAFAEIAJAHIAHAKIAGAKIADALIACAMIgCAMIgDALIgGALIgHAJIgJAHIgLAGIgMAEIgNACQgGAAgHgCgAgNgfQgFADgFAFQgEAFgCAGQgCAGAAAGQAAAGACAHQADAGADAFQAFAFAGACQAGAEAHAAQAHAAAGgEQAGgDAEgFQAFgFACgGQABgGAAgGQAAgFgBgGQgCgGgFgGQgEgEgGgEQgGgDgIAAQgGAAgHADg");
	this.shape_6.setTransform(138.7,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgOA7IAAgrIgjhKIAgAAIARAvIASgvIAgAAIgjBKIAAArg");
	this.shape_7.setTransform(121.8,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgQA6IgJgEQgFgCgDgFIgFgHIgFgIQgBgFAAgQIAAhHIAdAAIAABHQAAAJACAGIAGAFQADADAEAAQAGAAADgDQADgBABgEQACgFAAgKIAAhHIAfAAIAABHIgBANIgDAKIgEAIIgEAFQgJAIgGACIgJADIgJABQgJAAgIgDg");
	this.shape_8.setTransform(111.1,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AgrA7IAAh1IArAAQAJAAAHACQAHACAFAEQAFAEADAGQADAFAAAIQAAAHgEAGIgEAGIgGAFQATAFAAAVQAAAIgCAGQgDAIgFAEIgIAFIgIAEIgWABgAgNAhIANAAQAGAAADgCQADgBACgCQABgDAAgEQAAgDgBgDIgEgDIgKgBIgNAAgAgNgNIALAAIAHgBQAAgBABAAQAAAAABAAQAAgBABAAQAAgBAAAAQACgCAAgEQAAgDgCgCQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgCgCgFAAIgLAAg");
	this.shape_9.setTransform(100.6,7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgPA6IgJgEQgGgCgCgFIgHgHIgDgIQgCgFAAgQIAAhHIAeAAIAABHQAAAJABAGIAGAFQADADAEAAQAGAAADgDQACgBACgEQACgFAAgKIAAhHIAfAAIAABHIgBANIgDAKIgDAIIgGAFQgIAIgFACIgJADIgKABQgJAAgHgDg");
	this.shape_10.setTransform(84.7,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgNA8IgLgEQgGgCgFgEIgJgHIgIgJIgFgLIgDgLIgBgLIAAAAQgBgGACgHQABgGADgGQACgGADgFIAIgJIAKgHIAKgFQAGgCAGgCIALgBIANABIAMAFQAGABAFAEIAJAHIAIAKIAFAKIAEALIABAMIgBAMIgEALIgFALIgIAJIgJAHIgLAGIgMAEIgNACQgGAAgHgCgAgNgfQgFADgFAFQgEAFgCAGQgCAGAAAGQAAAGACAHQACAGAEAFQAFAFAGACQAGAEAHAAQAHAAAGgEQAGgDAFgFQADgFACgGQACgGAAgGQAAgFgCgGQgCgGgDgGQgFgEgGgEQgGgDgIAAQgGAAgHADg");
	this.shape_11.setTransform(72.3,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgOA7IAAgrIgjhKIAgAAIARAvIASgvIAgAAIgjBKIAAArg");
	this.shape_12.setTransform(60.3,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AAYA7IgthGIABBGIgdAAIAAh1IAaAAIAtBHIgBhHIAdAAIAAB1g");
	this.shape_13.setTransform(44.2,7.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AghA7IAAh1IBDAAIAAAaIgkAAIAAATIAjAAIAAAZIgjAAIAAAVIAkAAIAAAag");
	this.shape_14.setTransform(34.2,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("AATA7IAAgvIglAAIAAAvIgfAAIAAh1IAfAAIAAAsIAlAAIAAgsIAfAAIAAB1g");
	this.shape_15.setTransform(23.7,7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6B333").s().p("AASA7IgShLIgRBLIgbAAIgfh1IAfAAIAQBMIAShMIAWAAIARBMIAQhMIAfAAIgfB1g");
	this.shape_16.setTransform(9.9,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,198.4,20), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,97,50), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pattern2();
	this.instance.parent = this;
	this.instance.setTransform(13.4,252.1,1.25,1.25,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-93.2,252.1,447.5,405.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXCUIgWgGQgKgEgJgFQgIgGgGgHQgMgNgGgTQgGgSABgVIBJAAQAAALAEAJQADAHAFAFQAIAHAJAAQANAAAIgJQAHgIAAgLQAAgKgLgIQgIgFgkgPQhHgcAAg2QAAgLADgJQACgKAEgIQAIgQAQgMQAOgLASgGQASgGARAAQARAAAPAEQASAFANAKQAQALAIARQAFAJADAKQACALAAANIhJAAQgDgcgXAAQgJAAgIAGQgHAGAAAKQAAAKAKAHQAJAFAnATQAUAJAOAJQANAIAHAKQAIAKADAMQADAKAAANQAAATgFAPQgGARgLANQgMAOgTAHQgdAIgTAAg");
	this.shape.setTransform(133.8,197.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfCTQgPgDgOgGQgOgGgMgIQgMgIgLgLQgKgKgIgMQgIgNgGgNQgGgOgDgOQgDgPAAgPQAAgPAEgPQADgPAGgOQAFgNAJgMQAIgMALgKQAKgKANgIQAMgIAOgFQAOgFAPgDQAPgDAPAAQARAAAgAIQAQAGAbAQQATAOAOATQANASAGAVIhTAAQgGgLgJgIQgJgJgMgFQgNgEgNAAQgOAAgOAFQgOAFgLAKQgMALgHAPQgHARAAAUQAAAVAHASQAHAQAMALQALAJAPAGQANAFAOAAQANAAALgEQAMgDAJgGQAIgGAGgIQAGgJADgKIhVAAIAAg6ICqAAQACASgDATQgDAagJASQgFAMgHALIgPASQgQAQgUALQgSAKgVAFQgUAFgSAAQgPAAgQgDg");
	this.shape_1.setTransform(106,197.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA6CQIhuitIACCtIhHAAIAAkfIBAAAIBuCvIgCivIBHAAIAAEfg");
	this.shape_2.setTransform(74.5,197.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkCQIAAkfIBJAAIAAEfg");
	this.shape_3.setTransform(53.5,197.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglCQIhhkfIBMAAIA6DJIA7jJIBLAAIhhEfg");
	this.shape_4.setTransform(33.1,197.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABACQIgOgpIhkAAIgNApIhQAAIBykfIA/AAIBuEfgAAfAsIgfhkIggBkIA/AAg");
	this.shape_5.setTransform(4.2,197.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXCUIgWgGQgKgEgJgFQgIgGgGgHQgMgNgGgTQgGgSABgVIBJAAQAAALAEAJQADAHAFAFQAIAHAJAAQANAAAIgJQAHgIAAgLQAAgKgLgIQgIgFgkgPQhHgcAAg2QAAgLADgJQACgKAEgIQAIgQAQgMQAOgLASgGQASgGARAAQARAAAPAEQASAFANAKQAQALAIARQAFAJADAKQACALAAANIhJAAQgDgcgXAAQgJAAgIAGQgHAGAAAKQAAAKAKAHQAJAFAnATQAUAJAOAJQANAIAHAKQAIAKADAMQADAKAAANQAAATgFAPQgGARgLANQgMAOgTAHQgdAIgTAAg");
	this.shape_6.setTransform(-21.7,197.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPCQIAAkfIBKAAIAADfIBVAAIAABAg");
	this.shape_7.setTransform(91.4,158.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhOCQIAAkfIBKAAIAADfIBTAAIAABAg");
	this.shape_8.setTransform(72.5,158.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABACQIgOgpIhkAAIgNApIhQAAIBykfIA/AAIBuEfgAAfAsIgfhkIggBkIA/AAg");
	this.shape_9.setTransform(46.9,158.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOCQIAAkfICdAAIAABAIhTAAIAAAyIBQAAIAAA/IhQAAIAABug");
	this.shape_10.setTransform(23,158.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-34.9,142,181.9,82), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCB2IAAjrICFAAIAAA1IhIAAIAAAlIBGAAIAAA0IhGAAIAAAoIBIAAIAAA1g");
	this.shape.setTransform(222,308.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXB4QgNgDgLgFQgMgEgKgHQgKgHgIgJQgIgIgHgKQgGgKgEgLQgFgLgCgMQgCgMAAgLQAAgLACgLQACgLAEgLQAEgLAHgKQAGgKAIgIQAIgJAJgHQAKgHAMgFQALgGANgCQANgDAOAAQANAAANADQAMACALAFQAOAFAWASQAKAKAOAVQAJAQACAOIg/AAIgHgOQgGgHgGgGQgIgGgJgEQgKgEgMAAQgNAAgNAGQgLAGgIAKQgIAKgFAMQgEAMAAANQAAANAEAMQAFANAIAKQAJAKALAGQAMAGAOAAQAmAAATgoIA/AAIgHAUIgJASQgRAVgKAIQgXAPgNAEQgaAHgPAAQgMAAgNgDg");
	this.shape_1.setTransform(199.9,308.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvB2IhZiNIABCNIg6AAIAAjrIA0AAIBaCPIgBiPIA6AAIAADrg");
	this.shape_2.setTransform(174.4,308.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCB2IAAjrICFAAIAAA1IhIAAIAAAlIBGAAIAAA0IhGAAIAAAoIBIAAIAAA1g");
	this.shape_3.setTransform(154.3,308.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdB2IAAjrIA7AAIAADrg");
	this.shape_4.setTransform(140.3,308.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfB2Ig9hyIAKAAIAUgBQAKgCAFgCQAGgEAEgIQADgIAAgJQAAgJgDgHQgEgIgGgEQgLgGgNAAIgWAAIAAC2Ig9AAIAAjrIBNAAQASAAAbAEQARAFALAIQAHAGAFAGQAGAIADAIQAEAIACAKIACATQgBAMgDAMQgDAJgGAIQgFAJgIAGQgIAHgJADIAxBXg");
	this.shape_5.setTransform(125.7,308.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhCB2IAAjrICFAAIAAA1IhJAAIAAAlIBHAAIAAA0IhHAAIAAAoIBJAAIAAA1g");
	this.shape_6.setTransform(106.3,308.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhYB2IAAjrIBNAAQAWAAAZAEQAPAEAKAJQAHAGAGAHQAFAHADAIIAFARIACASQgCAYgEALIgIAOQgFAHgGAFQgNALgNAEQgYAFgSABIgYAAIAABJgAgcgIIAXAAQAOAAAIgDQAHgDADgGQAEgHAAgJQAAgKgEgHQgDgEgIgEQgIgDgQAAIgUAAg");
	this.shape_7.setTransform(88.1,308.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAyB2IgzhTIgwBTIhEAAIBTh9IhKhuIBFAAIAnBDIAohDIBEAAIhIBvIBSB8g");
	this.shape_8.setTransform(65,308.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCB2IAAjrICFAAIAAA1IhIAAIAAAlIBGAAIAAA0IhGAAIAAAoIBIAAIAAA1g");
	this.shape_9.setTransform(44.8,308.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguC5IAAiGIhujrIBmAAIA2CUIA4iUIBlAAIhtDrIAACGg");
	this.shape_10.setTransform(187.4,264.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhlC5IAAlxIBfAAIAAEeIBsAAIAABTg");
	this.shape_11.setTransform(160.7,264.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhlC5IAAlxIBeAAIAAEeIBtAAIAABTg");
	this.shape_12.setTransform(136.3,264.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyC1QgPgFgNgHQgPgIgLgMQgLgMgIgMQgHgMgEgNQgFgSgCgvIAAjfIBeAAIAADfQAAAdAHAQQAFAMAKAGQALAIAPAAQAQAAALgHQAJgGAEgMQAHgNgBghIAAjfIBfAAIAADfIgDAoQgCASgFANQgEANgIAKIgPAUQgaAWgRAHQgNAFgPADQgQACgQABQgagBgagHg");
	this.shape_13.setTransform(105.1,264.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhkC5IAAlxIDJAAIAABTIhqAAIAAA/IBmAAIAABSIhmAAIAACNg");
	this.shape_14.setTransform(75.8,264.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.2,243.8,268.3,87), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;
	this.instance.setTransform(-93,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-93,-9,391,514), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(75,26,1,1,0,0,0,75,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1.2,243.8,268.3,87), null);


// stage content:
(lib._300x600_sept_cz = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(150,492.7,1,1,0,0,0,48.5,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(-1)).wait(16));

	// endtext
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.2,427.7,1,1,0,0,0,99.2,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(44));

	// Layer 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,387.5,1,1,0,0,0,75,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:133.4,regY:283.4,x:151.4,y:637.5},0).wait(1).to({y:630},0).wait(1).to({y:619.1},0).wait(1).to({y:602.5},0).wait(1).to({y:578.1},0).wait(1).to({y:548},0).wait(1).to({y:521.3},0).wait(1).to({y:502.3},0).wait(1).to({y:489.3},0).wait(1).to({y:480.4},0).wait(1).to({y:474.3},0).wait(1).to({y:470.2},0).wait(1).to({y:467.6},0).wait(1).to({y:466.3},0).wait(1).to({regX:75,regY:26,x:93,y:208.5},0).wait(60).to({regX:133.4,regY:283.4,x:151.4,y:466.1,alpha:0.997},0).wait(1).to({y:467,alpha:0.989},0).wait(1).to({y:468.8,alpha:0.974},0).wait(1).to({y:471.5,alpha:0.949},0).wait(1).to({y:475.5,alpha:0.912},0).wait(1).to({y:481.4,alpha:0.859},0).wait(1).to({y:490,alpha:0.781},0).wait(1).to({y:502.7,alpha:0.665},0).wait(1).to({y:521.3,alpha:0.496},0).wait(1).to({y:542.8,alpha:0.3},0).wait(1).to({y:558.7,alpha:0.156},0).wait(1).to({y:567.9,alpha:0.073},0).wait(1).to({y:572.8,alpha:0.028},0).wait(1).to({y:575.2,alpha:0.006},0).wait(1).to({regX:75,regY:26,x:93,y:318.5,alpha:0},0).wait(67));

	// lemur
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(203,-152.5,1,1,0,0,0,138,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:102.5,regY:248,x:167.5,y:-24.1},0).wait(1).to({y:-1},0).wait(1).to({y:28.5},0).wait(1).to({y:64.2},0).wait(1).to({y:102.5},0).wait(1).to({y:137.2},0).wait(1).to({y:165.5},0).wait(1).to({y:187.5},0).wait(1).to({y:204.5},0).wait(1).to({y:217.8},0).wait(1).to({y:228.3},0).wait(1).to({y:236.5},0).wait(1).to({y:242.8},0).wait(1).to({y:247.7},0).wait(1).to({y:251.3},0).wait(1).to({y:254},0).wait(1).to({y:255.7},0).wait(1).to({y:256.7},0).wait(1).to({regX:138,regY:137.5,x:203,y:146.5},0).wait(1).to({regX:102.5,regY:248,x:167.5,y:257},0).wait(1).to({y:256.9},0).wait(1).to({y:256.6},0).wait(1).to({y:256.2},0).wait(1).to({y:255.5},0).wait(1).to({y:254.1},0).wait(1).to({y:251.5},0).wait(1).to({y:249.7},0).wait(1).to({y:248.9},0).wait(1).to({y:248.4},0).wait(1).to({y:248.2},0).wait(1).to({y:248},0).wait(1).to({regX:138,regY:137.5,x:203,y:137.5},0).wait(39).to({regX:102.5,regY:248,x:167.5,y:247.9},0).wait(1).to({scaleX:1,scaleY:1,y:247.4},0).wait(1).to({scaleX:1,scaleY:1,x:167.4,y:246.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:245},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:242.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:167.2,y:239.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:167.1,y:234},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:166.9,y:225.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:166.4,y:209.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:165.9,y:189.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:165.5,y:178.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:165.3,y:171.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:165.2,y:167.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:165.1,y:164.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:162.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:161.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:165,y:160.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:159.9},0).wait(1).to({regX:138.2,regY:137.4,scaleX:0.77,scaleY:0.77,x:192.3,y:75.1},0).wait(1).to({regX:102.5,regY:248,x:164.9,y:160},0).wait(1).to({y:160.2},0).wait(1).to({y:160.7},0).wait(1).to({y:161.7},0).wait(1).to({y:164.3},0).wait(1).to({y:168.6},0).wait(1).to({y:170.4},0).wait(1).to({y:171.2},0).wait(1).to({y:171.6},0).wait(1).to({y:171.8},0).wait(1).to({regX:138.2,regY:137.4,x:192.3,y:87.1},0).wait(56));

	// Layer 6
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(172.1,186.4,0.8,0.8,0,0,0,79.2,16.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).wait(1).to({regX:56.1,regY:178.2,x:153.6,y:316.1,alpha:0.001},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:316.3,alpha:0.005},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:153.5,y:316.7,alpha:0.013},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:317.4,alpha:0.025},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:153.4,y:318.4,alpha:0.044},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:153.3,y:319.9,alpha:0.073},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:153.1,y:322.4,alpha:0.118},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:152.7,y:326.8,alpha:0.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:151.6,y:339.2,alpha:0.433},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:150.4,y:353.6,alpha:0.702},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:149.9,y:358.9,alpha:0.801},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:149.6,y:362,alpha:0.86},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:149.4,y:364.1,alpha:0.899},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.3,y:365.7,alpha:0.928},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:366.8,alpha:0.949},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.1,y:367.6,alpha:0.966},0).wait(1).to({scaleX:1,scaleY:1,y:368.3,alpha:0.978},0).wait(1).to({scaleX:1,scaleY:1,y:368.8,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,x:149,y:369.1,alpha:0.993},0).wait(1).to({y:369.3,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,y:369.4,alpha:0.999},0).wait(1).to({regX:79,regY:16,x:172,y:207.4,alpha:1},0).wait(62));

	// pattern2
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(305.5,218.5,1,1,0,0,0,146.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(156));

	// pattern1
	this.instance_6 = new lib.bb_pattern1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.9,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(156));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C4D4D").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122,1,541.3,1058.2);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_sept_cz_atlas_.png", id:"300x600_sept_cz_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;