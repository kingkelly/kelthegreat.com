(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_advil_lines_atlas_", frames: [[0,742,160,78],[0,0,160,600],[0,602,218,138],[0,871,104,30],[0,822,160,47],[106,871,113,8]]}
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



(lib.bb_advillogo = function() {
	this.spriteSheet = ss["160x600_advil_lines_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_bg = function() {
	this.spriteSheet = ss["160x600_advil_lines_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_box = function() {
	this.spriteSheet = ss["160x600_advil_lines_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_cta = function() {
	this.spriteSheet = ss["160x600_advil_lines_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_legal = function() {
	this.spriteSheet = ss["160x600_advil_lines_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bb_line = function() {
	this.spriteSheet = ss["160x600_advil_lines_atlas_"];
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(56.5,4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-4,113,8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(56.5,4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-4,113,8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("Ag+BFIAciJIBiAAIgGAaIhCAAIgIAfIA7AAIgFAXIg7AAIgMA5g");
	this.shape.setTransform(96.2,-16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhCBFIAciJIBpAAIgFAaIhKAAIgGAdIBEAAIgFAXIhFAAIgHAhIBMAAIgGAag");
	this.shape_1.setTransform(83,-16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_2.setTransform(72.9,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgyBFIAciJIAeAAIgXBvIBCAAIgFAag");
	this.shape_3.setTransform(63.4,-16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhCBFIAciJIBpAAIgFAaIhKAAIgGAdIBEAAIgFAXIhFAAIgHAhIBMAAIgGAag");
	this.shape_4.setTransform(51.5,-16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAWBFIgBgEIgBgFIABgOIABgPQAAgFgCgDIgDgEQgDgCgEgBIgIgBIgcAAIgLA2IgeAAIAdiJIBAAAQAKAAAHABQAIACAFAFQAGAFADAGQADAHAAAKQAAAHgDAGQgCAHgEAFIgKAHQgGADgHABQAEACADADQADABABAEQAEAHAAAIIgBALIAAANIAAAIIACAIgAgVgFIAbAAQAGgBAGgBQAFgBAFgDIAHgGQACgFAAgGQAAgFgCgEIgEgEIgHgDIgJAAIgcAAg");
	this.shape_5.setTransform(37.1,-16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AANBFIglhgIgUBgIgcAAIAdiJIAfAAIAlBhIAAAAIAUhhIAcAAIgdCJg");
	this.shape_6.setTransform(16.6,-16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_7.setTransform(6,-16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AAmBFIgFgfIgzAAIgRAfIgfAAIBQiJIAeAAIAYCJgAgFAPIAkAAIgIg1g");
	this.shape_8.setTransform(-5.5,-16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AhBBFIAdiJIA2AAQAKAAAJACQAJACAGAFQAHAFADAHQAEAIAAALIgBALIgDAKQgFAHgHAHQgIAGgJADQgKAEgLAAIgkAAIgLAxgAgTgDIAeAAQAFAAAFgCQAFgBADgDQAHgGAAgMQAAgFgCgDQgCgEgDgCQgDgCgEAAIgIgBIgZAAg");
	this.shape_9.setTransform(-17.8,-16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgoBFIAYhvIgrAAIAFgaIByAAIgFAaIgqAAIgWBvg");
	this.shape_10.setTransform(98.3,-38.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AguA8QgOgMAAgZIAdAAQAAAIACAEQACAGAEACQAEADAGACIAMABIAIgBQAFgBADgDQAEgDADgDQACgDAAgGQAAgFgDgDQgDgDgFgDIgLgDIgMgEIgNgFQgGgCgFgEQgFgEgDgGQgDgHAAgJQAAgLAFgIQAFgIAIgGQAHgFAKgCQAKgCAJAAQALAAAJACQAJADAHAFQAHAFAFAJQAEAIAAAMIgdAAQAAgFgCgFQgCgEgDgCQgDgCgFgCIgKgBIgHABIgIADQgEACgCADQgCAEAAAFQAAAEAEAEQAEAEAFABIAKAEIAJACIAPAFQAHADAEADQAFAFADAGQADAHAAAIIgBAMIgEAKQgFAIgIAGQgIAFgLACQgKADgIAAQgdAAgPgMg");
	this.shape_11.setTransform(84.3,-38.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AAlBFIgEgfIgyAAIgSAfIggAAIBQiJIAgAAIAWCJgAgGAPIAkAAIgHg1g");
	this.shape_12.setTransform(69.6,-38.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("Ag+BFIAciJIBhAAIgFAaIhDAAIgHAfIA7AAIgGAXIg5AAIgNA5g");
	this.shape_13.setTransform(58.6,-38.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AgfAMIAGgXIA5AAIgFAXg");
	this.shape_14.setTransform(47.5,-36.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AhEBFIAdiJIAxAAQAdAAAPAOQAHAHAEAKQAEAKAAANQAAARgFAPIgHAOQgDAHgFAGQgKAMgPAFQgPAHgTAAgAggArIAXAAQALAAAJgDQAJgFAGgIQAGgHADgJQADgKAAgKQAAgIgBgFQgCgHgEgEQgDgEgGgDQgGgCgIAAIgWAAg");
	this.shape_15.setTransform(35.7,-38.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_16.setTransform(25.5,-38.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF200").s().p("AghBFQgKgCgIgFQgHgFgFgIQgDgEgBgEIgBgLIABgLIACgKIARhPIAeAAIgRBPIgBAFIAAAEIgBAFIgBADIACAHQABADACACQADAEAFACQAFABAIAAQAKAAAEgCQAGgDAEgEQADgFACgFIAEgPIARhRIAfAAIgRBQQgDAPgFALQgFALgHAIQgIAHgLAEIgNAEIgOABQgKAAgJgCg");
	this.shape_17.setTransform(15.2,-38.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF200").s().p("AAYA8QgHADgIABQgIACgHAAQgPAAgLgEQgLgEgJgHQgQgQAAgdQAAgRAGgPQAFgOAKgMQAKgLANgIQAOgGARAAQAJAAARAEQAKADAJAIQAHAHAFALQAFALAAAPQgBATgGARQgHASgNAMIAOAQIgQAOgAgCgzIgKAFQgJAFgFAIQgGAJgDAKQgCALAAAJQAAAGACAHQACAGAEAFQADAFAGADQAGADAIAAQAGgBAFgCIgKgMIAPgNIANAOQAIgJADgLQAEgLAAgMQAAgHgCgHQgCgGgDgFQgEgFgGgDQgFgCgJgBIgJABg");
	this.shape_18.setTransform(-0.5,-37.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_19.setTransform(-11.4,-38.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF200").s().p("AgyBFIAciJIAeAAIgXBvIBCAAIgFAag");
	this.shape_20.setTransform(-21,-38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-27.3,-51.6,132.4,47.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_legal();
	this.instance.parent = this;
	this.instance.setTransform(-2,328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-2,328,160,47), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_advillogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,160,78), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_cta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,104,30), null);


(lib.Symbol6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AhQCRIAjipIghAAIAIgmIAiAAIAJgjQAFgQAIgKQAJgKAMgGQAOgFAXAAIATABIASACIgIApIgKAAIgJgBQgLAAgFADQgGACgDAFIgFAMIgEARIApAAIgIAmIgpAAIgjCpg");
	this.shape.setTransform(104.8,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhQCRIAjipIghAAIAIgmIAiAAIAJgjQAFgQAIgKQAJgKAMgGQAOgFAXAAIATABIASACIgIApIgKAAIgJgBQgLAAgFADQgGACgDAFIgFAMIgEARIApAAIgIAmIgpAAIgjCpg");
	this.shape_1.setTransform(90.6,42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AhRBXQgagWAAgtQgBgaAJgXIAKgWIANgUQAQgRAXgKQAKgGANgCQANgDAMAAQAWAAARAGQATAFANALQANALAGAQQAIARAAAWQgDAjgGAQQgIAYgQASQgQARgWAKQgLAFgNADQgNADgNAAQgrAAgagXgAgRg5QgMAJgGAMQgIANgDAQQgFAOAAANQAAAJADAJQADAIAFAHQAGAGAHAEQAIAEAKAAQAPAAAMgJQALgIAIgOQAHgNADgPQAEgOAAgOQAAgKgDgJQgBgIgGgGQgEgHgIgCQgIgEgMAAQgPAAgLAJg");
	this.shape_2.setTransform(69.2,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgkCpIAHghQgSgCgOgHQgOgGgJgLQgKgLgEgRQgFgRAAgXIAzAAQAAANACAJQACAJAEAFQAIAMAPACIAPhMIgEgCIgagKQgNgEgJgIQgJgIgFgMQgGgMAAgTQAAgVAJgPQAIgPAOgKQAOgKASgEQARgFATAAIACAAIAGgdIARAAIgGAfQAOAEAMAGQAMAGAJAKQAJAKAEAOQAFAOgCARIgzAAQABgPgGgJQgGgIgKgEIgMBBIAbAKQANAFAKAIQAKAHAGANQAFANAAATQAAAYgJARQgJARgOALQgPALgSAEQgTAFgRAAIgHAggAgDBeIAOgCQAIgCAGgFQAGgEAEgIQAEgHAAgLQAAgHgCgFQgDgGgEgEIgKgHIgKgFgAgBheIgNAGQgFAEgEAGQgEAHAAAIQAAANAJAGQAJAHALAFIAMhAIgCAAg");
	this.shape_3.setTransform(4.5,42.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhgDgQgfgJgUgVQgngpAFhSIBWAAQgCAUAEARQADAQAKAMQASAYApAAQAkAAAZgWQAZgUAAgoQAAgegSgNQgSgOgcAAIggAAIANg/IAaAAIAfgDQAPgCAMgHQANgGAIgMQAIgMAAgSQAAgPgFgKQgFgKgJgIQgIgHgLgDIgYgEQgmABgTATQgUAUgJAmIhXAAQAKhKAvgoQAXgUAegJQAdgKAjAAQAbAAAbAGQAbAHAVAOQAVANANAXQANAXAAAgQAAAVgGAQQgGASgLAOQgYAbgmAJIAAABQASAFAMAHQAMAJAIAMQAGAMAEAOQAEAOAAASQAAAUgEARQgEARgHAPQgPAdgaATQgZASgiAKQghAJglAAQgqAAgfgLg");
	this.shape_4.setTransform(32.9,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy2, new cjs.Rectangle(-7.4,9.7,119,79.6), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AgSA9QgKgDgIgEQgIgFgFgIQgFgIAAgMIAfAAQAAAFACAEQACAEAEACQADACAFABIAIACIAHgBIAHgDQADgBACgDQACgDAAgEQAAgIgJgDQgKgEgRgDIgOgFQgGgCgGgCQgFgEgDgFQgDgGAAgIQAAgLAEgIQAFgGAHgFQAHgEAKgCQAJgBAJgBQAJABAJABQAJACAHAEQAIAFAEAHQAFAIABAKIgfAAQgBgJgGgDQgHgEgHAAIgHABIgFABIgFADQgCACAAAEQAAAFAEADIAIAEIALADIANADIAOAEQAHACAFAEQAGADADAGQADAFAAAIQAAAMgFAIQgEAIgIAFQgIAFgJACQgKABgKAAQgKAAgJgBg");
	this.shape.setTransform(81.6,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_1.setTransform(71.5,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgXA6QgLgFgIgIQgIgIgEgLQgEgMAAgOQAAgMAEgMQAFgLAIgJQAIgIALgEQALgGANAAQAPAAALAHQAGACAEAEIAJAJQAHAKADAMQADANgBANIhUAAQAAAIACAFQACAHAEADQAHAHANAAQAKAAAHgFQAHgFACgFIAcAAQgDAKgFAIQgGAIgHAFQgOAJgUgBQgNAAgMgEgAgLgjIgJAHQgDAEgBAFIgBAIIA0AAQgDgNgFgGQgDgEgFgBQgEgCgGAAQgHAAgFACg");
	this.shape_2.setTransform(60.9,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgdBPQgHgDgHgEIgLgLQgKgLgGgQQgFgPAAgSQAAgSAFgPQADgIAEgHIAJgNIALgKIAOgIQAPgHASAAQANAAAMAEQAMAEAJAHQAKAHAGALQAGALABAOIgiAAQgDgOgKgHQgJgHgNAAQgLAAgJAFQgIAFgFAIQgGAIgCAKQgCAKAAAKQAAAKACAKQACAKAGAIQAFAHAIAFQAJAFALAAQAJAAAHgCQAHgDAFgEQAKgJABgSIgkAAIAAgaIBFAAIAABYIgXAAIgEgSQgJAMgMAFQgMAFgMAAQgSAAgPgHg");
	this.shape_3.setTransform(44.4,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgiAOIAAgbIBFAAIAAAbg");
	this.shape_4.setTransform(30.2,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_5.setTransform(21.6,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AghA5QgIgDgFgGQgFgHgCgJQgCgJAAgLIAAhIIAhAAIAABCIABANQABAGACADQAFAIAMAAQAMgBAGgHQAGgJAAgRIAAg+IAhAAIAAB2IgfAAIAAgRIgBAAIgHAJIgJAHQgJAEgKAAQgNAAgJgEg");
	this.shape_6.setTransform(10.8,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AAbBSIAAg5IAAAAQgGAKgKAEQgLAEgKAAQgHAAgKgDQgIgDgIgHQgHgHgFgMQgFgLABgRQAAgNADgLQADgMAGgIQAHgJAKgGIALgEIANgBQAKAAAKAEQAKAFAFAJIABAAIAAgPIAeAAIAACggAgLg1QgGADgDAGQgEAFgCAHIgBAOQAAAHABAHQACAGADAFQAEAFAFAEQAFADAHAAQAJAAAFgDQAFgDAEgGQADgFABgFQACgHAAgIQAAgHgCgGQgBgHgDgGQgDgFgGgEQgGgDgHAAQgHAAgFADg");
	this.shape_7.setTransform(-4.2,28.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_8.setTransform(-15,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("Ag5BSIAAijIAkAAIAACFIBPAAIAAAeg");
	this.shape_9.setTransform(-25.1,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_10.setTransform(53.4,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg3IAAgaIAfAAIAAAag");
	this.shape_11.setTransform(46.5,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgRA8Igph2IAjAAIAYBQIAAAAIAZhQIAhAAIgpB2g");
	this.shape_12.setTransform(36.6,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AgeBPQgKgGgGgJQgHgIgEgMQgDgLAAgNQAAgMADgKQAEgLAHgJQAGgIAKgGIALgDIAMgCQAJAAAKAFQAJAFAGAIIABAAIAAg7IAhAAIAACjIggAAIAAgQIAAAAQgGAKgJAFQgKADgKAAQgNAAgLgEgAgMgNQgFADgEAFQgDAFgBAHQgCAGAAAIQAAAHACAHQABAGAEAGQAEAGAFADQAFADAHAAQAIAAAFgDQAGgDADgGQADgFACgHIABgOQAAgIgBgGQgCgHgEgFQgDgFgFgDQgFgDgIAAQgHAAgGADg");
	this.shape_13.setTransform(22.4,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AArBSIgMglIg9AAIgNAlIgkAAIA+ijIAkAAIA9CjgAgUASIApAAIgVg7IAAAAg");
	this.shape_14.setTransform(6.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(-34.6,-16.8,125.5,55.9), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AASBLIgOgBQgFgCgFgDQgFgCgDgGQgDgFAAgIIAAhDIgSAAIAAgUIASAAIAAgjIAeAAIAAAjIAYAAIAAAUIgYAAIAAA4QABAIACADQACACAJAAIAEAAIAGAAIAAAYIgJABg");
	this.shape.setTransform(72.6,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgWA4QgLgEgHgIQgIgJgEgLQgEgKAAgNQAAgMAEgMQAEgKAIgJQAIgIALgEQAKgFAMAAQAPAAALAGQAFACAEAEQAFAEADAFQAHAKADAMQADAMgBAMIhRAAQABAHACAGQACAGADACQAHAIAMAAQAKgBAHgEQAGgFACgFIAbAAQgDAKgFAHQgFAIgHAEQgNAJgUAAQgMAAgLgEgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgCgDgFgBQgEgCgGAAQgGAAgFACg");
	this.shape_1.setTransform(61.5,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgbBMIgOgHQgGgFgEgFQgLgLgFgPQgFgPAAgRQAAgRAFgPIAHgOQAEgHAFgFQAEgGAGgEIAOgIQAOgGARAAQAMAAAMAEQALADAJAHQAJAHAGALQAGAKACANIghAAQgEgNgIgGQgJgHgNAAQgKAAgJAEQgIAFgFAIQgFAHgCAKQgCAKgBAJQABAKACAJQACAJAFAIQAFAHAIAFQAJAEAKAAQAIAAAIgCQAGgCAEgEQAKgJABgQIgjAAIAAgZIBDAAIAABUIgXAAIgDgSQgJAMgLAFQgLAEgMAAQgRAAgOgGg");
	this.shape_2.setTransform(45.7,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(35.5,0,44.1,30.2), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(129,8,1.142,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,129,8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(8,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,8,113), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(8,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,113);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(113,8,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_box();
	this.instance.parent = this;
	this.instance.setTransform(-147,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,0,218,138);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(43.6,279.8,1,1,0,0,0,52,15);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.7,340.3,1,1,0,0,0,59.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-31.8,264.8,160,117), null);


// stage content:
(lib._160x600_advil_lines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(92,287.7,0.1,0.1,0,0,0,106.5,38);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).wait(1).to({regX:39.1,regY:-26.1,scaleX:0.2,scaleY:0.2,x:84.7,y:281.1},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:83.7,y:280.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:82.3,y:280.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:81.6,y:280},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:81.2,y:279.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:81,y:279.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:80.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:80.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:80.6,y:279.6},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:106.2,regY:38,scaleX:1,scaleY:1,x:148,y:343.7},0).wait(7));

	// Layer 11
	this.instance_1 = new lib.Symbol9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151,236.5,1,1,0,0,0,150,13.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({alpha:1},10).wait(2));

	// Layer 1
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(158,194.5,1,1,0,0,0,122,36.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(103).to({_off:false},0).to({alpha:1},10).wait(12));

	// Layer 6
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(131.5,477.4,0.43,0.43,0,0,0,81,47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({regX:-38,regY:69,scaleX:0.43,scaleY:0.43,x:80.3,y:485.9},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:483.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:478.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:469.6},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:456.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,y:436},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:80.4,y:403.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:354.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:80.5,y:297.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:256.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:230},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:212.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:201.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:193.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:80.6,y:189.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:80.5,y:186.8},0).wait(1).to({regX:80.6,regY:47.1,scaleX:0.69,scaleY:0.69,x:162.9,y:171},0).wait(21));

	// Layer 5
	this.instance_4 = new lib.Symbol6copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(122.6,160.1,1,1,0,0,0,95.3,26.7);
	this.instance_4.alpha = 0;
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,6,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(0.92)).wait(54).to({alpha:0},8,cjs.Ease.get(1)).wait(32));

	// Layer 4
	this.instance_5 = new lib.Symbol6copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(401.2,267.9,1,1,0,0,0,95.3,26.7);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(1).to({regX:28.1,regY:15.2,x:324.1,y:256.4},0).wait(1).to({x:307.8},0).wait(1).to({x:280.4},0).wait(1).to({x:235.9},0).wait(1).to({x:185.9},0).wait(1).to({x:150.4},0).wait(1).to({x:127.4},0).wait(1).to({x:112.1},0).wait(1).to({x:101.5},0).wait(1).to({x:94.2},0).wait(1).to({x:89.3},0).wait(1).to({x:86.2},0).wait(1).to({x:84.5},0).wait(1).to({regX:95.3,regY:26.7,x:151.2,y:267.9},0).wait(47).to({alpha:0},8,cjs.Ease.get(1)).wait(33));

	// Layer 3
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-32,147.7,1,1,0,0,0,95.3,26.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(1).to({regX:57.3,regY:17.1,x:-65.6,y:138.1},0).wait(1).to({x:-58.4},0).wait(1).to({x:-46.3},0).wait(1).to({x:-26.8},0).wait(1).to({x:-4.8},0).wait(1).to({x:10.8},0).wait(1).to({x:20.9},0).wait(1).to({x:27.7},0).wait(1).to({x:32.4},0).wait(1).to({x:35.6},0).wait(1).to({x:37.7},0).wait(1).to({x:39.1},0).wait(1).to({x:39.8},0).wait(1).to({regX:95.3,regY:26.7,x:78,y:147.7},0).wait(46).to({alpha:0},8,cjs.Ease.get(1)).wait(34));

	// Layer 10
	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(241.6,225,0.8,0.8,0,0,0,56.6,4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regX:56.5,x:241.4,y:224.9},0).wait(1).to({x:241.1},0).wait(1).to({x:240.5},0).wait(1).to({x:239.7},0).wait(1).to({x:238.4},0).wait(1).to({x:236.6},0).wait(1).to({x:234.1},0).wait(1).to({x:230.4,y:224.8},0).wait(1).to({x:224.8},0).wait(1).to({x:214.3,y:224.7},0).wait(1).to({x:188.1,y:224.5},0).wait(1).to({x:167.6,y:224.3},0).wait(1).to({x:158.2,y:224.2},0).wait(1).to({x:152.2,y:224.1},0).wait(1).to({x:148},0).wait(1).to({x:144.8,y:224},0).wait(1).to({x:142.3},0).wait(1).to({x:140.3},0).wait(1).to({x:138.7},0).wait(1).to({x:137.5},0).wait(1).to({x:136.5},0).wait(1).to({x:135.7},0).wait(1).to({x:135.2},0).wait(1).to({x:134.7},0).wait(1).to({x:134.5},0).wait(1).to({x:134.3},0).wait(1).to({regX:56.6,x:134.4},0).to({x:114.4},44).wait(1).to({regX:56.5,x:113.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:112.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:110.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:107.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:103.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:97.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:88.1,y:224.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:75.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:56.8,y:224.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:31.5,y:224.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:3.2,y:224.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-20,y:224.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-36.6,y:224.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-48.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-56.4,y:224.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-62.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-66.5},0).wait(1).to({scaleX:1,scaleY:1,x:-69.4},0).wait(1).to({scaleX:1,scaleY:1,x:-71.2},0).wait(1).to({scaleX:1,scaleY:1,x:-72.2},0).wait(1).to({x:-72.5,y:225},0).wait(23));

	// Layer 9
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-74.4,217,0.8,0.8,0,0,0,64.5,4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).wait(1).to({x:-74.2,y:216.9},0).wait(1).to({x:-73.7},0).wait(1).to({x:-72.8},0).wait(1).to({x:-71.3},0).wait(1).to({x:-69.2},0).wait(1).to({x:-66.2},0).wait(1).to({x:-61.8},0).wait(1).to({x:-55.6,y:216.8},0).wait(1).to({x:-45.9},0).wait(1).to({x:-28.1,y:216.7},0).wait(1).to({x:16.8,y:216.5},0).wait(1).to({x:51.7,y:216.3},0).wait(1).to({x:67.9,y:216.2},0).wait(1).to({x:78.1,y:216.1},0).wait(1).to({x:85.3},0).wait(1).to({x:90.8,y:216},0).wait(1).to({x:95},0).wait(1).to({x:98.4},0).wait(1).to({x:101},0).wait(1).to({x:103.2},0).wait(1).to({x:104.9},0).wait(1).to({x:106.2},0).wait(1).to({x:107.2},0).wait(1).to({x:107.9},0).wait(1).to({x:108.4},0).wait(1).to({x:108.6},0).wait(1).to({x:108.7},0).to({x:128.7},44).wait(1).to({x:129},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:130.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:132.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:136.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:141.4,y:216.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:148.8,y:216.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:159,y:216.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:173.3,y:216.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:193.5,y:216.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:221.7,y:217.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:257,y:217.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:290.6,y:217.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:316.1,y:218.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:334.2,y:218.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:347.2,y:218.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:356.6,y:218.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:363.4,y:218.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:368.4,y:218.9},0).wait(1).to({scaleX:1,scaleY:1,x:371.7},0).wait(1).to({scaleX:1,scaleY:1,x:373.9},0).wait(1).to({scaleX:1,scaleY:1,x:375.1},0).wait(1).to({x:375.5,y:219},0).wait(23));

	// Layer 8
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(237.5,209,0.8,0.8);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(126.3,208,0.8,0.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({x:237.4,y:208.9},0).wait(1).to({x:237},0).wait(1).to({x:236.5},0).wait(1).to({x:235.6},0).wait(1).to({x:234.3},0).wait(1).to({x:232.4},0).wait(1).to({x:229.8},0).wait(1).to({x:226,y:208.8},0).wait(1).to({x:220.1},0).wait(1).to({x:209.3,y:208.7},0).wait(1).to({x:182.1,y:208.5},0).wait(1).to({x:160.9,y:208.3},0).wait(1).to({x:151.1,y:208.2},0).wait(1).to({x:144.9,y:208.1},0).wait(1).to({x:140.5},0).wait(1).to({x:137.2,y:208},0).wait(1).to({x:134.6},0).wait(1).to({x:132.5},0).wait(1).to({x:130.9},0).wait(1).to({x:129.6},0).wait(1).to({x:128.6},0).wait(1).to({x:127.8},0).wait(1).to({x:127.2},0).wait(1).to({x:126.8},0).wait(1).to({x:126.5},0).wait(1).to({x:126.3},0).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(35).to({_off:false},0).to({x:106.3},43).wait(1).to({x:106},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:105.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:104},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:102},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:99.2,y:208.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:95.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:89.9,y:208.2},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:82.6,y:208.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:72.7,y:208.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:59.1,y:208.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:40.7,y:209.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:18.5,y:209.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-2.8,y:209.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-19.4,y:210.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-31.6,y:210.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-40.6,y:210.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-47.2,y:210.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-52.2,y:210.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-55.9},0).wait(1).to({scaleX:1,scaleY:1,x:-58.6,y:210.9},0).wait(1).to({scaleX:1,scaleY:1,x:-60.4},0).wait(1).to({scaleX:1,scaleY:1,x:-61.7},0).wait(1).to({scaleX:1,scaleY:1,x:-62.3},0).wait(1).to({x:-62.5,y:211},0).wait(23));

	// Layer 7
	this.instance_11 = new lib.Symbol3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,656.6,0.8,0.8,0,0,0,4,56.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).wait(1).to({regY:56.5,y:656.1},0).wait(1).to({y:654.9},0).wait(1).to({y:652.6},0).wait(1).to({y:649.1},0).wait(1).to({y:643.9},0).wait(1).to({x:150.1,y:636.6},0).wait(1).to({y:626.2},0).wait(1).to({x:150.2,y:611.2},0).wait(1).to({x:150.3,y:587.8},0).wait(1).to({x:150.5,y:545},0).wait(1).to({x:151.1,y:436.8},0).wait(1).to({x:151.5,y:352.8},0).wait(1).to({x:151.7,y:313.9},0).wait(1).to({x:151.9,y:289.4},0).wait(1).to({x:152,y:271.9},0).wait(1).to({y:258.8},0).wait(1).to({x:152.1,y:248.6},0).wait(1).to({y:240.5},0).wait(1).to({x:152.2,y:234},0).wait(1).to({y:228.9},0).wait(1).to({y:224.9},0).wait(1).to({y:221.7},0).wait(1).to({y:219.3},0).wait(1).to({y:217.6},0).wait(1).to({y:216.4},0).wait(1).to({y:215.8},0).wait(1).to({regY:56.6,x:152.3,y:215.7},0).to({y:195.7},45).wait(1).to({regY:56.5,x:152.2,y:195.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:194},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:191.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:188.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:183.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:152.1,y:177},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:152,y:167.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:151.9,y:155.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:151.7,y:137.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:151.5,y:113.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:151.2,y:80.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:150.9,y:45.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:150.6,y:15.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:150.4,y:-6.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:150.3,y:-22.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:150.2,y:-33.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:150.1,y:-42.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:150,y:-48.4},0).wait(1).to({scaleX:1,scaleY:1,y:-52.9},0).wait(1).to({scaleX:1,scaleY:1,y:-56},0).wait(1).to({scaleX:1,scaleY:1,y:-58},0).wait(1).to({scaleX:1,scaleY:1,y:-59.1},0).wait(1).to({y:-59.5},0).wait(23));

	// Layer 2
	this.instance_12 = new lib.Symbol4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(137,-66.4,0.8,0.8,0,0,0,4,56.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).wait(1).to({y:-66.2},0).wait(1).to({y:-65.4},0).wait(1).to({y:-64.1},0).wait(1).to({y:-61.9},0).wait(1).to({x:137.1,y:-58.8},0).wait(1).to({x:137.2,y:-54.3},0).wait(1).to({x:137.3,y:-48},0).wait(1).to({x:137.5,y:-38.8},0).wait(1).to({x:137.7,y:-24.6},0).wait(1).to({x:138.2,y:1.5},0).wait(1).to({x:139.4,y:67.3},0).wait(1).to({x:140.3,y:118.4},0).wait(1).to({x:140.8,y:142.1},0).wait(1).to({x:141,y:157.1},0).wait(1).to({x:141.2,y:167.7},0).wait(1).to({x:141.4,y:175.7},0).wait(1).to({x:141.5,y:181.9},0).wait(1).to({x:141.6,y:186.9},0).wait(1).to({y:190.8},0).wait(1).to({x:141.7,y:193.9},0).wait(1).to({y:196.4},0).wait(1).to({x:141.8,y:198.3},0).wait(1).to({y:199.7},0).wait(1).to({y:200.8},0).wait(1).to({y:201.5},0).wait(1).to({y:201.9},0).wait(1).to({regY:56.6,x:141.9,y:202.1},0).to({y:222.1},44).wait(1).to({regY:56.5,y:222.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:224.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:227.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:232},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:238.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:248},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:260.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:142,y:277.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:142.1,y:299.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:329.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:142.2,y:370.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:142.3,y:423},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:142.5,y:479.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:142.6,y:527.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:142.7,y:564.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:142.8,y:591.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:612.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:142.9,y:627.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:639},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:647.6},0).wait(1).to({scaleX:1,scaleY:1,y:653.9},0).wait(1).to({scaleX:1,scaleY:1,y:658.4},0).wait(1).to({scaleX:1,scaleY:1,y:661.3},0).wait(1).to({scaleX:1,scaleY:1,y:663},0).wait(1).to({x:143,y:663.5},0).wait(23));

	// bg
	this.instance_13 = new lib.bb_bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_advil_lines_atlas_.png", id:"160x600_advil_lines_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;