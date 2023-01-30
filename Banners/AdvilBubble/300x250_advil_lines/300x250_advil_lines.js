(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_advil_lines_atlas_", frames: [[302,114,119,73],[0,0,300,250],[302,0,170,112],[302,189,104,30],[0,252,300,27],[302,221,113,8]]}
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
	this.spriteSheet = ss["300x250_advil_lines_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_bg = function() {
	this.spriteSheet = ss["300x250_advil_lines_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_box = function() {
	this.spriteSheet = ss["300x250_advil_lines_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_cta = function() {
	this.spriteSheet = ss["300x250_advil_lines_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_legal = function() {
	this.spriteSheet = ss["300x250_advil_lines_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bb_line = function() {
	this.spriteSheet = ss["300x250_advil_lines_atlas_"];
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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_legal();
	this.instance.parent = this;
	this.instance.setTransform(-2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-2,0,300,27), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_advillogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,119,73), null);


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
	this.shape.graphics.f("#FFF200").s().p("Ah+DjIA4kJIg1AAIANg8IA1AAIAOg3QAHgYAOgQQANgQAVgJQAVgIAkAAIAdACIAdADIgNBBIgPgCIgOAAQgSAAgIAEQgKAEgEAIIgIASIgFAaIA/AAIgNA8IhAAAIg3EJg");
	this.shape.setTransform(204.6,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("Ah+DjIA4kJIg1AAIANg8IA1AAIAOg3QAHgYAOgQQANgQAUgJQAWgIAkAAIAdACIAdADIgNBBIgPgCIgOAAQgSAAgIAEQgKAEgEAIIgIASIgFAaIA/AAIgNA8IhAAAIg3EJg");
	this.shape_1.setTransform(182.4,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("Ah/CIQgpgjgBhFQAAgpANglIAQgjIAWgeQAYgcAjgQQARgHAUgEQATgFAVAAQAhAAAcAJQAdAIAUARQAUARAKAaQAMAaAAAkQgFA2gJAZQgMAlgZAcQgYAbgjARQgRAHgVAEQgTAEgWAAQhEABgogkgAgbhaQgRAOgMAUQgLAVgGAXQgGAWAAAWQAAAOAEANQAFANAIALQAIAJAMAGQAMAHAPAAQAZgBASgNQARgNAMgVQAMgUAFgYQAGgYAAgUQAAgQgEgOQgDgNgIgJQgHgLgMgEQgNgFgTAAQgWAAgTANg");
	this.shape_2.setTransform(148.8,58);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("Ag4EJIAKg0QgdgEgVgKQgWgKgPgSQgOgRgHgbQgHgaAAgkIBQAAQgBAUADAOQADAOAHAKQANARAXAEIAXh3IgGgDIgpgPQgUgHgOgNQgOgNgJgTQgIgTAAgdQAAggANgYQANgXAWgQQAWgPAcgIQAcgHAeAAIACAAIAJguIAcAAIgKAyQAWAFATAKQASAJAOAQQAOAQAHAWQAHAUgDAcIhPAAQABgYgKgNQgJgNgPgHIgTBmIAqAQQAUAHAQANQAPANAJATQAJAUAAAeQAAAlgOAbQgOAagXARQgXARgcAIQgdAHgcABIgKAygAgFCTIAWgDQAMgEAKgGQAKgIAGgLQAHgMAAgQQAAgMgFgJQgEgIgGgGIgPgLIgQgHgAgCiTIgUAKQgJAFgGAKQgFAJAAAOQAAATANALQAOALATAGIAShiIgEAAg");
	this.shape_3.setTransform(47.7,51.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AiXFfQgwgQgfggQg+hAAHiAICIAAQgEAgAGAZQAGAZAOATQAdAmBAAAQA5AAAngiQAoghAAg+QAAgugdgVQgdgUgqAAIgzAAIAThkIAqAAIAwgEQAXgEAUgLQAUgLAMgSQANgSAAgcQAAgYgIgQQgIgQgOgLQgMgLgSgFIglgFQg8AAgeAeQgfAegNA9IiJAAQAQh0BIg+QAlgfAugPQAvgPA3AAQAqAAAqAJQAqAKAhAWQAhAVAUAjQAVAkAAA0QAAAfgJAbQgKAbgSAWQglArg7AMIAAACQAbAJATAMQAUANALATQALASAFAXQAGAWAAAbQAAAggGAbQgGAbgLAWQgYAugnAdQgoAdg1APQg0AOg7AAQhBAAgwgQg");
	this.shape_4.setTransform(92.3,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy2, new cjs.Rectangle(29.1,0,185.9,124.4), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AgSA9QgKgDgIgEQgIgFgFgIQgFgIAAgMIAfAAQAAAFACAEQACAEAEACQADACAFABIAIACIAHgBIAHgDQADgBACgDQACgDAAgEQAAgIgJgDQgKgEgRgDIgOgFQgGgCgGgCQgFgEgDgFQgDgGAAgIQAAgLAEgIQAFgGAHgFQAHgEAKgCQAJgBAJgBQAJABAJABQAJACAHAFQAIAEAEAHQAFAIABAKIgfAAQgBgJgGgDQgHgEgHAAIgHABIgFABIgFADQgCACAAAEQAAAFAEADIAIAEIALADIANADIAOAEQAHACAFAEQAGADADAGQADAFAAAIQAAAMgFAIQgEAIgIAFQgIAFgJACQgKABgKABQgKgBgJgBg");
	this.shape.setTransform(181.7,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_1.setTransform(171.6,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgXA6QgLgFgIgIQgIgIgEgLQgEgMAAgOQAAgMAEgMQAFgLAIgJQAIgIALgEQALgGANAAQAPAAALAHQAGACAEAEIAJAJQAHAKADAMQADANgBANIhUAAQAAAIACAFQACAHAEADQAHAHANAAQAKAAAHgFQAHgFACgFIAcAAQgDAKgFAIQgGAIgHAFQgOAJgUAAQgNgBgMgEgAgLgjIgJAHQgDAEgBAFIgBAIIA0AAQgDgNgFgGQgDgEgFgCQgEgBgGAAQgHAAgFACg");
	this.shape_2.setTransform(161,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgdBPQgHgDgHgEIgLgLQgKgLgGgQQgFgPAAgSQAAgSAFgPQADgIAEgHIAJgNIALgKIAOgIQAPgHASAAQANAAAMAEQAMAEAJAHQAKAHAGALQAGALABAOIgiAAQgDgOgKgHQgJgHgNAAQgLAAgJAFQgIAFgFAIQgGAIgCAKQgCAKAAAKQAAAKACAKQACAKAGAIQAFAHAIAFQAJAFALAAQAJAAAHgCQAHgDAFgEQAKgJABgSIgkAAIAAgaIBFAAIAABYIgXAAIgEgSQgJAMgMAFQgMAFgMAAQgSAAgPgHg");
	this.shape_3.setTransform(144.5,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgiAOIAAgbIBFAAIAAAbg");
	this.shape_4.setTransform(130.3,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_5.setTransform(121.7,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AghA5QgIgDgFgGQgFgHgCgJQgCgJAAgLIAAhIIAhAAIAABCIABANQABAGACADQAFAIAMAAQAMgBAGgHQAGgJAAgRIAAg+IAhAAIAAB2IgfAAIAAgRIgBAAIgHAJIgJAGQgJAFgKAAQgNAAgJgEg");
	this.shape_6.setTransform(111,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AAbBSIAAg5IAAAAQgFAKgLAEQgKAEgKAAQgJAAgIgDQgJgDgIgHQgHgHgFgMQgFgLAAgRQAAgNAEgLQADgMAHgIQAGgJAKgGIALgEIANgBQAKAAAKAEQAJAFAGAJIAAAAIAAgPIAgAAIAACggAgLg1QgGADgDAGQgEAFgCAHIgBAOQAAAHABAHQACAGADAFQADAFAGAEQAFADAHAAQAJAAAFgDQAFgDAEgGQADgFABgFQACgHAAgIQAAgHgCgGQgBgHgDgGQgDgFgGgEQgFgDgIAAQgHAAgFADg");
	this.shape_7.setTransform(95.9,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_8.setTransform(85.2,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("Ag5BSIAAijIAkAAIAACFIBPAAIAAAeg");
	this.shape_9.setTransform(75,16.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgPBSIAAijIAfAAIAACjg");
	this.shape_10.setTransform(56.3,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AgPBSIAAh2IAfAAIAAB2gAgPg2IAAgbIAfAAIAAAbg");
	this.shape_11.setTransform(49.4,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgRA8Igph3IAjAAIAYBRIAAAAIAZhRIAhAAIgpB3g");
	this.shape_12.setTransform(39.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AgdBOQgLgFgGgIQgHgKgDgLQgEgMAAgMQAAgMAEgKQADgMAHgIQAGgIAKgFIALgFIAMgBQAJABAKAEQAKAEAFAJIAAAAIAAg8IAiAAIAACkIggAAIAAgQIAAAAQgGAKgJAFQgKAEgKAAQgOAAgJgGgAgLgNQgHAEgCAEQgEAFgCAHQgBAGAAAIQAAAHABAHQACAGAEAGQADAGAGADQAFADAGAAQAJAAAFgDQAGgEADgFQADgFABgHIACgOQAAgHgCgIQgBgGgDgFQgDgEgGgEQgFgDgJAAQgGAAgFADg");
	this.shape_13.setTransform(25.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AArBSIgMglIg9AAIgNAlIgkAAIA+ijIAkAAIA9CjgAgUASIApAAIgVg7IAAAAg");
	this.shape_14.setTransform(9.6,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(-0.4,0,191.4,31.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AASBLIgOgBQgFgCgFgDQgFgCgDgGQgDgFAAgIIAAhDIgSAAIAAgUIASAAIAAgjIAeAAIAAAjIAYAAIAAAUIgYAAIAAA4QABAIACADQACACAJAAIAEAAIAGAAIAAAYIgJABg");
	this.shape.setTransform(110.4,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgWA4QgLgEgHgIQgIgJgEgLQgEgKAAgNQAAgMAEgMQAEgKAIgJQAIgIALgEQAKgFAMAAQAPAAALAGQAFACAEAEQAFAEADAFQAHAKADAMQADAMgBAMIhRAAQABAHACAGQACAGADACQAHAIAMAAQAKgBAHgEQAGgFACgFIAbAAQgDAKgFAHQgFAIgHAEQgNAJgUAAQgMAAgLgEgAgLghQgFADgDAEIgEAIIgCAHIAyAAQgCgMgGgGQgCgDgFgBQgEgCgGAAQgGAAgFACg");
	this.shape_1.setTransform(99.3,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgbBMIgOgHQgGgFgEgFQgLgLgFgPQgFgPAAgRQAAgRAFgPIAHgOQAEgHAFgFQAEgGAGgEIAOgIQAOgGARAAQAMAAAMAEQALADAJAHQAJAHAGALQAGAKACANIghAAQgEgNgIgGQgJgHgNAAQgKAAgJAEQgIAFgFAIQgFAHgCAKQgCAKgBAJQABAKACAJQACAJAFAIQAFAHAIAFQAJAEAKAAQAIAAAIgCQAGgCAEgEQAKgJABgQIgjAAIAAgZIBDAAIAABUIgXAAIgDgSQgJAMgLAFQgLAEgMAAQgRAAgOgGg");
	this.shape_2.setTransform(83.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(73.3,0,44.1,30.2), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,112);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(52,39,1,1,0,0,0,52,15);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.5,36.5,1,1,0,0,0,59.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,244,73), null);


// stage content:
(lib._300x250_advil_lines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(151,236.5,1,1,0,0,0,150,13.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(113).to({_off:false},0).to({alpha:1},10).wait(2));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158,194.5,1,1,0,0,0,122,36.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).to({alpha:1},10).wait(12));

	// Layer 6
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.5,208,0.59,0.59,0,0,0,80.8,47.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({regX:85,regY:56,scaleX:0.59,scaleY:0.59,x:154,y:212.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:212},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:153.9,y:210.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:153.8,y:207.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:202.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:153.6,y:195.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:153.4,y:184.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:153,y:167.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:152.5,y:148.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:152.2,y:134},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:152,y:124.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:151.9,y:118.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:151.8,y:115},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:112.4},0).wait(1).to({scaleX:1,scaleY:1,x:151.7,y:110.8},0).wait(1).to({scaleX:1,scaleY:1,y:110},0).wait(1).to({regX:80.5,regY:47,scaleX:1,scaleY:1,x:147.5,y:101},0).wait(21));

	// Layer 5
	this.instance_3 = new lib.Symbol6copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.6,62.1,1,1,0,0,0,95.3,26.7);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,6,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(0.92)).wait(54).to({alpha:0},8,cjs.Ease.get(1)).wait(32));

	// Layer 4
	this.instance_4 = new lib.Symbol6copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(401.2,169.9,1,1,0,0,0,95.3,26.7);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(1).to({regX:94.4,regY:19.6,x:390.4,y:162.8},0).wait(1).to({x:374.1},0).wait(1).to({x:346.7},0).wait(1).to({x:302.2},0).wait(1).to({x:252.2},0).wait(1).to({x:216.7},0).wait(1).to({x:193.7},0).wait(1).to({x:178.4},0).wait(1).to({x:167.8},0).wait(1).to({x:160.5},0).wait(1).to({x:155.6},0).wait(1).to({x:152.5},0).wait(1).to({x:150.8},0).wait(1).to({regX:95.3,regY:26.7,x:151.2,y:169.9},0).wait(47).to({alpha:0},8,cjs.Ease.get(1)).wait(33));

	// Layer 3
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-32,49.7,1,1,0,0,0,95.3,26.7);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(1).to({regX:95.1,regY:17.1,x:-27.8,y:40.1},0).wait(1).to({x:-20.6},0).wait(1).to({x:-8.5},0).wait(1).to({x:11},0).wait(1).to({x:33},0).wait(1).to({x:48.6},0).wait(1).to({x:58.7},0).wait(1).to({x:65.5},0).wait(1).to({x:70.2},0).wait(1).to({x:73.4},0).wait(1).to({x:75.5},0).wait(1).to({x:76.9},0).wait(1).to({x:77.6},0).wait(1).to({regX:95.3,regY:26.7,x:78,y:49.7},0).wait(46).to({alpha:0},8,cjs.Ease.get(1)).wait(34));

	// Layer 10
	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(367.5,141,1,1,0,0,0,56.5,4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).wait(1).to({x:367.4},0).wait(1).to({x:366.9},0).wait(1).to({x:366.1},0).wait(1).to({x:364.9},0).wait(1).to({x:362.9},0).wait(1).to({x:360.1},0).wait(1).to({x:355.8},0).wait(1).to({x:348.8},0).wait(1).to({x:334.9},0).wait(1).to({x:299.7},0).wait(1).to({x:280.2},0).wait(1).to({x:270.6},0).wait(1).to({x:264.5},0).wait(1).to({x:260.1},0).wait(1).to({x:256.8},0).wait(1).to({x:254.3},0).wait(1).to({x:252.3},0).wait(1).to({x:250.8},0).wait(1).to({x:249.7},0).wait(1).to({x:248.8},0).wait(1).to({x:248.2},0).wait(1).to({x:247.8},0).wait(1).to({x:247.6},0).wait(1).to({x:247.5},0).to({x:217.5},50).wait(1).to({x:216.7},0).wait(1).to({x:214.2},0).wait(1).to({x:209.2},0).wait(1).to({x:201.2},0).wait(1).to({x:188.7},0).wait(1).to({x:169.5},0).wait(1).to({x:139.7},0).wait(1).to({x:94.1},0).wait(1).to({x:40.3},0).wait(1).to({x:-1.2},0).wait(1).to({x:-28.1},0).wait(1).to({x:-45.6},0).wait(1).to({x:-57.1},0).wait(1).to({x:-64.7},0).wait(1).to({x:-69.3},0).wait(1).to({x:-71.7},0).wait(1).to({x:-72.5},0).wait(23));

	// Layer 9
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-74.5,131,1,1,0,0,0,64.5,4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({x:-74.1},0).wait(1).to({x:-73.1},0).wait(1).to({x:-71.2},0).wait(1).to({x:-68.1},0).wait(1).to({x:-63.4},0).wait(1).to({x:-56.5},0).wait(1).to({x:-46.1},0).wait(1).to({x:-29.3},0).wait(1).to({x:4.3},0).wait(1).to({x:89.4},0).wait(1).to({x:136.5},0).wait(1).to({x:159.6},0).wait(1).to({x:174.5},0).wait(1).to({x:185.1},0).wait(1).to({x:193},0).wait(1).to({x:199.1},0).wait(1).to({x:203.8},0).wait(1).to({x:207.4},0).wait(1).to({x:210.2},0).wait(1).to({x:212.3},0).wait(1).to({x:213.8},0).wait(1).to({x:214.8},0).wait(1).to({x:215.3},0).wait(1).to({x:215.5},0).to({x:245.5},49).wait(1).to({x:245.8},0).wait(1).to({x:246.7},0).wait(1).to({x:248.4},0).wait(1).to({x:251.1},0).wait(1).to({x:255.2},0).wait(1).to({x:261.2},0).wait(1).to({x:270},0).wait(1).to({x:283.1},0).wait(1).to({x:302.1},0).wait(1).to({x:323.8},0).wait(1).to({x:341.1},0).wait(1).to({x:352.9},0).wait(1).to({x:360.9},0).wait(1).to({x:366.4},0).wait(1).to({x:370.2},0).wait(1).to({x:372.8},0).wait(1).to({x:374.4},0).wait(1).to({x:375.2},0).wait(1).to({x:375.5},0).wait(23));

	// Layer 8
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(357.5,121);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(237.5,121);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).wait(1).to({x:357.4},0).wait(1).to({x:356.9},0).wait(1).to({x:356.1},0).wait(1).to({x:354.9},0).wait(1).to({x:352.9},0).wait(1).to({x:350.1},0).wait(1).to({x:345.8},0).wait(1).to({x:338.8},0).wait(1).to({x:324.9},0).wait(1).to({x:289.7},0).wait(1).to({x:270.2},0).wait(1).to({x:260.6},0).wait(1).to({x:254.5},0).wait(1).to({x:250.1},0).wait(1).to({x:246.8},0).wait(1).to({x:244.3},0).wait(1).to({x:242.3},0).wait(1).to({x:240.8},0).wait(1).to({x:239.7},0).wait(1).to({x:238.8},0).wait(1).to({x:238.2},0).wait(1).to({x:237.8},0).wait(1).to({x:237.6},0).to({_off:true},1).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({x:207.5},47).wait(1).to({x:207.1},0).wait(1).to({x:205.7},0).wait(1).to({x:203.2},0).wait(1).to({x:199.3},0).wait(1).to({x:193.6},0).wait(1).to({x:185.5},0).wait(1).to({x:174.3},0).wait(1).to({x:158.7},0).wait(1).to({x:136.6},0).wait(1).to({x:105.7},0).wait(1).to({x:67.1},0).wait(1).to({x:30.4},0).wait(1).to({x:2.5},0).wait(1).to({x:-17.4},0).wait(1).to({x:-31.6},0).wait(1).to({x:-41.9},0).wait(1).to({x:-49.4},0).wait(1).to({x:-54.7},0).wait(1).to({x:-58.4},0).wait(1).to({x:-60.8},0).wait(1).to({x:-62.1},0).wait(1).to({x:-62.5},0).wait(23));

	// Layer 7
	this.instance_10 = new lib.Symbol3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(270,320.5,1,1,0,0,0,4,56.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).wait(1).to({y:320.3},0).wait(1).to({y:319.6},0).wait(1).to({y:318.3},0).wait(1).to({y:316.3},0).wait(1).to({y:313.3},0).wait(1).to({y:308.8},0).wait(1).to({y:301.9},0).wait(1).to({y:290.9},0).wait(1).to({y:268.9},0).wait(1).to({y:213.1},0).wait(1).to({y:182.2},0).wait(1).to({y:167.1},0).wait(1).to({y:157.3},0).wait(1).to({y:150.4},0).wait(1).to({y:145.2},0).wait(1).to({y:141.2},0).wait(1).to({y:138.2},0).wait(1).to({y:135.8},0).wait(1).to({y:134},0).wait(1).to({y:132.6},0).wait(1).to({y:131.6},0).wait(1).to({y:131},0).wait(1).to({y:130.6},0).wait(1).to({y:130.5},0).to({y:120.5},50).wait(1).to({y:120.2},0).wait(1).to({y:119},0).wait(1).to({y:117},0).wait(1).to({y:113.6},0).wait(1).to({y:108.7},0).wait(1).to({y:101.7},0).wait(1).to({y:91.5},0).wait(1).to({y:76.6},0).wait(1).to({y:55},0).wait(1).to({y:26.9},0).wait(1).to({y:0.3},0).wait(1).to({y:-19.2},0).wait(1).to({y:-32.6},0).wait(1).to({y:-41.9},0).wait(1).to({y:-48.4},0).wait(1).to({y:-53},0).wait(1).to({y:-56.1},0).wait(1).to({y:-58.1},0).wait(1).to({y:-59.1},0).wait(1).to({y:-59.5},0).wait(23));

	// Layer 2
	this.instance_11 = new lib.Symbol4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(257,-66.5,1,1,0,0,0,4,56.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).wait(1).to({y:-66.3},0).wait(1).to({y:-65.6},0).wait(1).to({y:-64.4},0).wait(1).to({y:-62.5},0).wait(1).to({y:-59.6},0).wait(1).to({y:-55.3},0).wait(1).to({y:-48.9},0).wait(1).to({y:-38.4},0).wait(1).to({y:-17.5},0).wait(1).to({y:35.3},0).wait(1).to({y:64.5},0).wait(1).to({y:78.8},0).wait(1).to({y:88.1},0).wait(1).to({y:94.6},0).wait(1).to({y:99.6},0).wait(1).to({y:103.3},0).wait(1).to({y:106.2},0).wait(1).to({y:108.5},0).wait(1).to({y:110.2},0).wait(1).to({y:111.5},0).wait(1).to({y:112.4},0).wait(1).to({y:113},0).wait(1).to({y:113.4},0).wait(1).to({y:113.5},0).to({y:123.5},51).wait(1).to({y:123.8},0).wait(1).to({y:124.9},0).wait(1).to({y:126.9},0).wait(1).to({y:130},0).wait(1).to({y:134.5},0).wait(1).to({y:141},0).wait(1).to({y:150.1},0).wait(1).to({y:163.2},0).wait(1).to({y:181.9},0).wait(1).to({y:207.7},0).wait(1).to({y:236.5},0).wait(1).to({y:260.2},0).wait(1).to({y:277},0).wait(1).to({y:288.8},0).wait(1).to({y:297.2},0).wait(1).to({y:303.2},0).wait(1).to({y:307.4},0).wait(1).to({y:310.3},0).wait(1).to({y:312.2},0).wait(1).to({y:313.2},0).wait(1).to({y:313.5},0).wait(23));

	// bg
	this.instance_12 = new lib.bb_bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_advil_lines_atlas_.png", id:"300x250_advil_lines_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;