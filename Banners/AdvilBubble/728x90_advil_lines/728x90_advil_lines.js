(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_advil_lines_atlas_", frames: [[559,92,160,78],[0,0,728,90],[730,0,218,138],[721,140,104,30],[0,92,557,24],[827,140,113,8]]}
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
	this.spriteSheet = ss["728x90_advil_lines_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_bg = function() {
	this.spriteSheet = ss["728x90_advil_lines_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_box = function() {
	this.spriteSheet = ss["728x90_advil_lines_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_cta = function() {
	this.spriteSheet = ss["728x90_advil_lines_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_legal = function() {
	this.spriteSheet = ss["728x90_advil_lines_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bb_line = function() {
	this.spriteSheet = ss["728x90_advil_lines_atlas_"];
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
	this.instance.setTransform(229.1,4,3.877,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-4,438.1,8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("Ag/BFIAdiJIBhAAIgFAZIhDAAIgHAgIA7AAIgGAXIg5AAIgNA5g");
	this.shape.setTransform(181.5,-30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhCBFIAdiJIBoAAIgFAZIhKAAIgGAeIBEAAIgFAWIhFAAIgGAiIBLAAIgGAag");
	this.shape_1.setTransform(168.4,-30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_2.setTransform(158.3,-30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgyBFIAciJIAeAAIgXBvIBCAAIgFAag");
	this.shape_3.setTransform(148.8,-30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhCBFIAdiJIBoAAIgFAZIhKAAIgGAeIBEAAIgFAWIhFAAIgGAiIBLAAIgGAag");
	this.shape_4.setTransform(136.9,-30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAWBFIgBgFIAAgEIAAgPIABgNQAAgGgBgCIgFgGQgCgBgEgBIgIgBIgbAAIgMA2IgeAAIAciJIBBAAQAKAAAHACQAIACAGAEQAFAEADAHQADAHAAAKQAAAHgCAGQgDAHgEAFIgKAHQgGAEgHABQAEABADACQADACACAEQACAGAAAJIAAALIgBANIABAIIABAIgAgVgFIAbAAQAHAAAFgCQAFgBAFgDIAHgHQADgDAAgHQAAgFgDgEIgEgEIgIgDIgIgBIgcAAg");
	this.shape_5.setTransform(122.4,-30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AANBFIglhgIgUBgIgcAAIAdiJIAfAAIAlBhIAAAAIAUhhIAcAAIgdCJg");
	this.shape_6.setTransform(102,-30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_7.setTransform(91.3,-30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AAlBFIgEgfIgzAAIgRAfIgfAAIBQiJIAeAAIAYCJgAgFAPIAkAAIgHg1g");
	this.shape_8.setTransform(79.9,-30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AhBBFIAdiJIA2AAQAKAAAJACQAJACAGAFQAHAEADAIQAEAIAAALIgBALIgDAJQgFAIgHAHQgIAGgJADQgKADgLAAIgkAAIgLAygAgTgDIAeAAQAFAAAFgBQAFgCADgDQAHgGAAgMQAAgGgCgDQgCgDgDgCQgDgCgEgBIgIgBIgZAAg");
	this.shape_9.setTransform(67.6,-30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgoBFIAYhwIgrAAIAFgZIByAAIgFAZIgqAAIgWBwg");
	this.shape_10.setTransform(49.8,-30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AguA8QgOgLAAgZIAdAAQAAAGACAFQACAGAEACQAEADAGACIAMABIAIgBQAFgCADgCQAEgDADgDQACgEAAgFQAAgFgDgDQgDgDgFgDIgLgDIgMgEIgNgFQgGgCgFgEQgFgEgDgGQgDgHAAgJQAAgLAFgIQAFgIAIgGQAHgFAKgCQAKgCAJAAQALAAAJACQAJACAHAGQAHAFAFAJQAEAIAAAMIgdAAQAAgGgCgEQgCgDgDgDQgDgCgFgCIgKAAIgHAAIgIADQgEACgCAEQgCACAAAGQAAAEAEAEQAEADAFACIAKAEIAJACIAPAFQAHADAEADQAFAFADAGQADAHAAAIIgBAMIgEAKQgFAIgIAGQgIAFgLACQgKADgIAAQgdAAgPgMg");
	this.shape_11.setTransform(35.8,-30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AAmBFIgFgfIgzAAIgRAfIgfAAIBQiJIAeAAIAYCJgAgFAPIAkAAIgIg1g");
	this.shape_12.setTransform(21.1,-30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("Ag+BFIAdiJIBhAAIgGAZIhCAAIgHAgIA5AAIgEAXIg7AAIgLA5g");
	this.shape_13.setTransform(10,-30.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AgfAMIAGgXIA5AAIgFAXg");
	this.shape_14.setTransform(-1.1,-28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AhEBFIAdiJIAxAAQAdAAAPAOQAHAHAEAKQAEAKAAANQAAARgFAPIgHAPQgDAGgFAGQgKAMgPAFQgPAHgTAAgAggArIAXAAQALAAAJgDQAJgFAGgIQAGgGADgLQADgJAAgKQAAgIgBgFQgCgHgEgEQgDgFgGgCQgGgDgIAAIgWAAg");
	this.shape_15.setTransform(-12.9,-30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_16.setTransform(-23.1,-30.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF200").s().p("AghBFQgKgDgIgEQgHgFgFgIQgDgEgBgFIgBgKIABgLIACgKIARhPIAeAAIgRBPIgBAEIAAAFIgBAFIgBAEIACAGQABADACACQADADAFADQAFABAIAAQAKAAAEgCQAGgCAEgFQADgFACgFIAEgPIARhRIAfAAIgRBQQgDAPgFALQgFALgHAIQgIAHgLAEIgNAEIgOABQgKAAgJgCg");
	this.shape_17.setTransform(-33.3,-30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF200").s().p("AAYA8QgHADgHABQgIACgIAAQgPAAgLgEQgMgEgHgHQgRgQABgdQAAgRAFgPQAFgPAKgLQAJgLAPgIQANgGARAAQAJAAAQAEQAMAEAHAHQAJAHAEALQAEAMAAAOQABATgIARQgGASgOAMIAQAQIgRAOgAgDgzIgJAFQgJAFgFAIQgFAJgDAKQgDALAAAJQAAAGACAHQACAGADAFQAEAFAGADQAGACAJAAQAFAAAFgCIgJgLIAPgOIAMAOQAIgJADgLQAEgMAAgLQAAgIgBgGQgDgGgDgFQgEgFgFgDQgHgCgIgBIgKABg");
	this.shape_18.setTransform(-49,-29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF200").s().p("AgdBFIAdiJIAeAAIgeCJg");
	this.shape_19.setTransform(-60,-30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF200").s().p("AgyBFIAciJIAeAAIgXBvIBCAAIgFAag");
	this.shape_20.setTransform(-69.5,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-97.3,-43.6,307.4,25.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_legal();
	this.instance.parent = this;
	this.instance.setTransform(162,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(162,-156,557,24), null);


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
	this.shape.graphics.f("#FFF200").s().p("AhyDMIAzjuIgvAAIALg2IAwAAIANgyQAGgVAMgPQAMgOASgHQAUgIAgAAIAaABIAbADIgNA7IgNgBIgNgBQgPAAgIADQgIAEgEAHIgHARIgGAXIA6AAIgMA2Ig6AAIgxDug");
	this.shape.setTransform(321,-99.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhxDMIAyjuIgwAAIAMg2IAwAAIAMgyQAIgVALgPQAMgOATgHQATgIAgAAIAaABIAaADIgMA7IgNgBIgNgBQgPAAgIADQgIAEgEAHIgHARIgFAXIA5AAIgLA2Ig7AAIgxDug");
	this.shape_1.setTransform(301.1,-99.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AhzB6QglgfABg/QAAglALggIAPggIATgbQAWgYAfgPQAPgHASgDQARgEATAAQAeAAAZAHQAZAIATAPQASAPAKAXQAKAYAAAfQgEAygIAWQgMAhgWAaQgWAZgfANQgQAIgSADQgSAEgTAAQg9AAglgggAgYhRQgQAMgLATQgKASgEAVQgGAUAAATQAAANAEAMQAEAMAHAJQAHAJALAFQALAGAOAAQAVAAARgMQAQgNALgSQAKgTAFgVQAFgUAAgTQAAgPgDgMQgEgMgHgIQgGgJgMgEQgKgEgRgBQgVABgQALg");
	this.shape_2.setTransform(270.9,-94);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgyDuIAJgvQgagCgTgKQgUgJgNgQQgNgPgGgYQgHgYABggIBHAAQAAASACANQADAMAGAIQAMAQAVADIAVhrIgGgCIglgOQgSgGgMgMQgNgLgIgRQgHgRAAgaQAAgeAMgUQALgWAUgOQATgOAagGQAZgHAbAAIABAAIAIgpIAaAAIgJAtQAUAEAQAJQASAIAMAPQAMAOAGATQAGAUgCAYIhHAAQABgWgJgMQgIgLgOgGIgRBcIAmANQASAIAOALQAOALAIASQAIARAAAcQAAAhgNAZQgMAXgVAPQgUAQgaAGQgaAHgZAAIgJAtgAgECFIAUgEQAKgDAJgGQAJgGAGgLQAGgKAAgPQAAgKgEgIQgEgIgFgGIgOgJIgOgHgAgCiEIgRAIQgIAGgFAJQgGAIAAAMQAAASANAKQAMAJARAGIAQhYIgDAAg");
	this.shape_3.setTransform(180,-99.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AiIE8QgrgPgcgcQg4g6AHhzIB6AAQgDAdAFAWQAFAXANARQAaAiA6AAQAyAAAkgfQAjgdAAg4QAAgpgagTQgZgTgnAAIgtAAIARhaIAmAAIArgDQAVgEASgJQARgKAMgQQALgRAAgZQAAgVgHgOQgIgPgMgKQgLgKgQgEIghgFQg2AAgbAbQgcAbgMA3Ih7AAQAPhoBBg4QAhgcApgNQAqgOAyAAQAmAAAlAIQAmAJAeAUQAdATATAgQASAgAAAuQAAAcgIAYQgJAZgQATQgiAng0ALIAAACQAYAIARALQASAMAKAQQAKARAEAUQAGAUAAAZQAAAcgGAYQgFAZgKAUQgVApgkAaQgkAagvANQgvANg1AAQg7AAgrgOg");
	this.shape_4.setTransform(220,-87.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy2, new cjs.Rectangle(163.4,-146.2,167,111.9), null);


(lib.Symbol6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AgWBKQgMgDgKgFQgJgHgGgKQgGgJgBgPIAmAAQAAAHADAFQACAEAEADQAFADAFABIALACIAJgBIAIgDQAEgCACgEQADgEAAgFQAAgJgNgEQgMgFgTgEIgRgFIgQgGQgFgEgFgHQgDgGAAgKQgBgOAGgIQAFgKAKgFQAIgFAMgCQALgCALAAQALAAALACQALADAJAEQAJAGAGAJQAFAJACANIgnAAQAAgMgIgDQgIgFgKAAIgHABIgHABIgGAFQgBADAAAEQAAAFADAEQAEADAHACIANAEIARADIAQAFQAJADAGAEQAGAEAFAHQADAHAAAKQAAAOgGAKQgGAJgIAHQgKAFgMADQgLACgNAAQgMAAgLgCg");
	this.shape.setTransform(529.3,-194.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgTBkIAAjHIAnAAIAADHg");
	this.shape_1.setTransform(517.2,-197.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgcBGQgOgEgJgLQgKgKgFgOQgFgOAAgQQAAgQAFgOQAFgOAKgKQAKgKAOgGQANgGAQAAQASAAAOAHQAHAEAFAFQAGAEAEAGQAJAMAEAPQAEAQgBAQIhnAAQAAAJACAIQADAGAEAFQAJAJAQAAQAMAAAJgHQAJgFACgHIAjAAQgFANgGAJQgGAJgJAGQgSALgYAAQgQAAgOgGgAgOgqQgGAEgEAEQgEAFgBAFIgCAKIA/AAQgCgPgIgJQgDgDgGgCQgFgCgHAAQgJAAgGADg");
	this.shape_2.setTransform(504.6,-194.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgjBhQgJgFgIgFQgHgFgHgIQgMgOgHgSQgHgTAAgWQAAgWAHgSQAEgLAEgHQAFgJAGgHQAHgIAHgFQAIgGAJgEQASgHAWgBQAQAAAOAFQAOAFAMAIQAMAKAHANQAIANABARIgpAAQgFgRgLgJQgLgIgQAAQgNAAgLAGQgKAFgHALQgGAJgDAMQgDANAAAMQAAANADAMQADALAGAKQAHAJAKAGQALAGANAAQAMAAAHgDQAJgDAGgFQAMgMACgUIgtAAIAAggIBVAAIAABrIgcAAIgFgWQgMAPgOAFQgOAGgPABQgWgBgSgHg");
	this.shape_3.setTransform(484.7,-197.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgpARIAAghIBTAAIAAAhg");
	this.shape_4.setTransform(467.7,-195.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_5.setTransform(457.4,-197.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgoBGQgKgEgHgIQgFgHgCgLQgDgLAAgOIAAhYIAoAAIAABRIACAPQABAHACAFQAGAIAPAAQAOAAAIgJQAHgKAAgWIAAhLIAoAAIAACQIgmAAIAAgUIgBAAQgEAGgFAEQgFAFgFADQgLAFgNAAQgQAAgKgEg");
	this.shape_6.setTransform(444.5,-194.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AAiBkIAAhFIgBAAQgHAMgMAEQgNAFgMABQgLAAgKgEQgLgEgJgIQgJgKgGgOQgGgNAAgWQAAgOAEgOQAEgPAIgKQAIgLANgGQAGgEAHgBQAHgBAIAAQANAAAMAEQALAGAHALIABAAIAAgSIAmAAIAADDgAgOhBQgHAEgEAHQgEAGgCAIQgCAJAAAJQAAAIACAJQABAHAEAHQAEAGAHAEQAHAEAIAAQAKAAAHgEQAGgDAEgHQAFgGABgIQACgIAAgJQAAgIgCgJQgBgIgEgGQgEgHgHgFQgHgEgJAAQgJABgGADg");
	this.shape_7.setTransform(426.3,-192.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_8.setTransform(413.5,-197.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AhGBkIAAjHIAsAAIAACiIBhAAIAAAlg");
	this.shape_9.setTransform(401.3,-197.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AgTBkIAAjHIAnAAIAADHg");
	this.shape_10.setTransform(378.9,-197.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_11.setTransform(370.7,-197.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgVBJIgxiQIApAAIAeBiIAAAAIAfhiIAnAAIgxCQg");
	this.shape_12.setTransform(358.8,-194.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AgkBgQgNgHgIgKQgIgLgEgOQgEgOAAgPQAAgPAEgMQAEgOAIgLQAIgKAMgGQAGgDAHgCQAHgBAIAAQAMAAAMAFQALAFAHALIABAAIAAhJIAoAAIAADHIgmAAIAAgSIgBAAQgHAMgLAFQgMAFgNAAQgQAAgMgGgAgOgQQgHAEgEAHQgEAFgCAJQgCAIAAAJQAAAIACAIQACAJAEAHQAFAGAGAEQAHAEAIAAQAKAAAGgEQAHgEAEgGQAEgHABgIQACgJAAgIQAAgKgCgIQgBgIgEgFQgEgHgHgEQgGgDgKAAQgJAAgGADg");
	this.shape_13.setTransform(341.7,-197.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AA0BkIgPgtIhKAAIgQAtIgsAAIBMjHIAsAAIBKDHgAgaAXIAzAAIgZhJIAAAAg");
	this.shape_14.setTransform(322.9,-197.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6copy, new cjs.Rectangle(273.2,-216.8,304.8,37.4), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AAGBhQgHgBgHgEQgGgEgEgHQgEgHAAgLIAAhYIgZAAIAAgbIAZAAIAAgtIAoAAIAAAtIAeAAIAAAbIgeAAIAABKQAAAKAEADQADAEAKAAIAHAAIAGgBIAAAgIgLABIgNAAg");
	this.shape.setTransform(187.2,-75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgdBJQgOgGgKgKQgKgLgGgOQgFgPAAgRQAAgQAGgOQAFgOAKgLQALgLAOgGQAOgGAQAAQATAAAOAHQAHAEAGAFQAGAFAEAGQAKAMAEARQAEAPgCARIhrAAQABAKACAHQADAIAFAEQAJAJAQAAQANAAAJgGQAJgGACgIIAkAAQgEAOgHAKQgHAKgJAFQgSAMgZAAQgRAAgOgGgAgPgsQgGADgEAFQgEAFgCAGIgCAKIBCAAQgDgQgHgIQgEgEgFgCQgGgCgHAAQgJAAgHADg");
	this.shape_1.setTransform(172.9,-73.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgkBkQgKgEgIgGQgIgFgGgIQgNgOgHgUQgHgTAAgXQAAgWAHgUQADgKAFgJQAFgIAHgIQAGgHAIgGQAIgGAKgEQATgIAXAAQAPAAAPAFQAPAEAMAKQAMAJAIAOQAIANACASIgsAAQgEgSgLgIQgMgJgQAAQgPAAgLAGQgKAGgHAKQgHAKgDANQgDAMAAANQAAANADAMQADANAHAKQAHAKAKAFQALAGAPAAQALAAAJgCQAIgDAGgGQANgLACgWIguAAIAAghIBXAAIAABvIgdAAIgFgYQgMAQgPAGQgOAGgPAAQgXAAgTgIg");
	this.shape_2.setTransform(152.3,-76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(139.5,-96,56,38.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_line();
	this.instance.parent = this;
	this.instance.setTransform(194.7,8,2.139,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-47,0,241.7,8), null);


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
	this.instance.setTransform(471.6,-114.9,0.9,0.9,0,0,0,52.1,15);

	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(590.7,-119.7,1,1,0,0,0,59.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(424.7,-156.2,266.5,78), null);


// stage content:
(lib._728x90_advil_lines = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(305.9,49.4,0.1,0.1,0,0,0,106.5,38.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({_off:false},0).wait(1).to({regX:56.6,regY:-28.2,scaleX:0.2,scaleY:0.2,x:301.4,y:42.7},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:302.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:303.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:304.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:305},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:305.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:305.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:305.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:305.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:305.9},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:106.2,regY:38,scaleX:1,scaleY:1,x:355.9,y:109.4},0).wait(7));

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
	this.instance_3.setTransform(105.5,37.4,0.387,0.387,0,0,0,81,47.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({regX:-38,regY:69,scaleX:0.39,scaleY:0.39,x:59.4,y:45.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:59.7},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:60.2},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:61},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:62.3},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:64.2,y:45.6},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:67.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:72,y:45.5},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:77.4,y:45.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:81.3,y:45.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:83.8,y:45.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:85.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:86.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:87.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:87.6},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:87.9},0).wait(1).to({regX:81.4,regY:47.9,scaleX:0.59,scaleY:0.59,x:158.6,y:32.4},0).wait(21));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).wait(1).to({regX:424.6,regY:-193.7,x:720.6,y:47.5},0).wait(1).to({x:704.3},0).wait(1).to({x:676.9},0).wait(1).to({x:632.4},0).wait(1).to({x:582.4},0).wait(1).to({x:546.9},0).wait(1).to({x:523.9},0).wait(1).to({x:508.6},0).wait(1).to({x:498},0).wait(1).to({x:490.7},0).wait(1).to({x:485.8},0).wait(1).to({x:482.7},0).wait(1).to({x:481},0).wait(1).to({regX:95.3,regY:26.7,x:151.2,y:267.9},0).wait(47).to({alpha:0},8,cjs.Ease.get(1)).wait(33));

	// Layer 3
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-112,147.7,1,1,0,0,0,95.3,26.7);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(1).to({regX:167.4,regY:-74.6,x:-32.3,y:46.4},0).wait(1).to({x:-19.9},0).wait(1).to({x:0.9},0).wait(1).to({x:34.7},0).wait(1).to({x:72.7},0).wait(1).to({x:99.7},0).wait(1).to({x:117.1},0).wait(1).to({x:128.8},0).wait(1).to({x:136.9},0).wait(1).to({x:142.4},0).wait(1).to({x:146.1},0).wait(1).to({x:148.5},0).wait(1).to({x:149.8},0).wait(1).to({regX:95.3,regY:26.7,x:78,y:147.7},0).wait(46).to({alpha:0},8,cjs.Ease.get(1)).wait(34));

	// Layer 10
	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(779.3,80,0.8,0.8,0,0,0,56.6,4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regX:56.5,x:779.1},0).wait(1).to({x:778.7},0).wait(1).to({x:778},0).wait(1).to({x:777},0).wait(1).to({x:775.5},0).wait(1).to({x:773.5},0).wait(1).to({x:770.8},0).wait(1).to({x:767},0).wait(1).to({x:761.9},0).wait(1).to({x:754.4},0).wait(1).to({x:742.6},0).wait(1).to({x:718.8},0).wait(1).to({x:674.5},0).wait(1).to({x:651.4},0).wait(1).to({x:638.6},0).wait(1).to({x:629.9},0).wait(1).to({x:623.4},0).wait(1).to({x:618.4},0).wait(1).to({x:614.4},0).wait(1).to({x:611.2},0).wait(1).to({x:608.6},0).wait(1).to({x:606.4},0).wait(1).to({x:604.6},0).wait(1).to({x:603.1},0).wait(1).to({x:602},0).wait(1).to({x:601.1},0).wait(1).to({x:600.3},0).wait(1).to({x:599.8},0).wait(1).to({x:599.5},0).wait(1).to({x:599.3},0).wait(1).to({regX:56.6},0).to({x:589.3},40).wait(1).to({regX:56.5,x:588.1},0).wait(1).to({x:584.4},0).wait(1).to({x:577.7},0).wait(1).to({x:567.1},0).wait(1).to({x:551.6},0).wait(1).to({x:529.4},0).wait(1).to({x:498.1},0).wait(1).to({x:453.5},0).wait(1).to({x:389.4},0).wait(1).to({x:301.1},0).wait(1).to({x:202.6},0).wait(1).to({x:121.7},0).wait(1).to({x:64.1},0).wait(1).to({x:23.8},0).wait(1).to({x:-4.9},0).wait(1).to({x:-25.4},0).wait(1).to({x:-39.9},0).wait(1).to({x:-49.9},0).wait(1).to({x:-56.2},0).wait(1).to({x:-59.7},0).wait(1).to({regX:56.6,x:-60.7},0).wait(23));

	// Layer 9
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-106.4,72,0.8,0.8,0,0,0,64.5,4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).wait(1).to({regX:73.9,x:-98.4},0).wait(1).to({x:-97},0).wait(1).to({x:-94.5},0).wait(1).to({x:-90.6},0).wait(1).to({x:-85},0).wait(1).to({x:-77.3},0).wait(1).to({x:-66.9},0).wait(1).to({x:-52.9},0).wait(1).to({x:-33.4},0).wait(1).to({x:-5.3},0).wait(1).to({x:39.4},0).wait(1).to({x:129.2},0).wait(1).to({x:296.6},0).wait(1).to({x:383.9},0).wait(1).to({x:432.3},0).wait(1).to({x:465.2},0).wait(1).to({x:489.6},0).wait(1).to({x:508.5},0).wait(1).to({x:523.6},0).wait(1).to({x:535.8},0).wait(1).to({x:545.8},0).wait(1).to({x:554},0).wait(1).to({x:560.7},0).wait(1).to({x:566.2},0).wait(1).to({x:570.6},0).wait(1).to({x:574.1},0).wait(1).to({x:576.8},0).wait(1).to({x:578.8},0).wait(1).to({x:580.1},0).wait(1).to({x:580.9},0).wait(1).to({regX:64.5,x:573.6},0).to({x:583.6},40).wait(1).to({regX:73.9,x:591.5},0).wait(1).to({x:592.7},0).wait(1).to({x:594.9},0).wait(1).to({x:598.4},0).wait(1).to({x:603.5},0).wait(1).to({x:610.7},0).wait(1).to({x:620.6},0).wait(1).to({x:634.5},0).wait(1).to({x:654.1},0).wait(1).to({x:681.6},0).wait(1).to({x:715.9},0).wait(1).to({x:748.6},0).wait(1).to({x:773.3},0).wait(1).to({x:791},0).wait(1).to({x:803.6},0).wait(1).to({x:812.8},0).wait(1).to({x:819.4},0).wait(1).to({x:824.2},0).wait(1).to({x:827.5},0).wait(1).to({x:829.6},0).wait(1).to({x:830.7},0).wait(1).to({regX:64.5,x:823.6},0).wait(23));

	// Layer 8
	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(911.2,64,0.8,0.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:10.1,x:919.1},0).wait(1).to({x:918.4},0).wait(1).to({x:917.2},0).wait(1).to({x:915.4},0).wait(1).to({x:912.8},0).wait(1).to({x:909.2},0).wait(1).to({x:904.3},0).wait(1).to({x:897.7},0).wait(1).to({x:888.5},0).wait(1).to({x:875.3},0).wait(1).to({x:854.3},0).wait(1).to({x:812},0).wait(1).to({x:733.2},0).wait(1).to({x:692.1},0).wait(1).to({x:669.3},0).wait(1).to({x:653.8},0).wait(1).to({x:642.4},0).wait(1).to({x:633.5},0).wait(1).to({x:626.4},0).wait(1).to({x:620.6},0).wait(1).to({x:615.9},0).wait(1).to({x:612.1},0).wait(1).to({x:608.9},0).wait(1).to({x:606.3},0).wait(1).to({x:604.2},0).wait(1).to({x:602.6},0).wait(1).to({x:601.3},0).wait(1).to({x:600.4},0).wait(1).to({x:599.8},0).wait(1).to({x:599.4},0).wait(1).to({regX:0,x:591.2},0).to({x:581.2},39).wait(1).to({regX:10.1,x:588.3},0).wait(1).to({x:585},0).wait(1).to({x:579},0).wait(1).to({x:569.8},0).wait(1).to({x:556.6},0).wait(1).to({x:538.3},0).wait(1).to({x:513.6},0).wait(1).to({x:480},0).wait(1).to({x:434.3},0).wait(1).to({x:371.5},0).wait(1).to({x:286.5},0).wait(1).to({x:183.7},0).wait(1).to({x:85.5},0).wait(1).to({x:8.6},0).wait(1).to({x:-47.8},0).wait(1).to({x:-89.2},0).wait(1).to({x:-119.9},0).wait(1).to({x:-142.9},0).wait(1).to({x:-159.9},0).wait(1).to({x:-172.2},0).wait(1).to({x:-180.9},0).wait(1).to({x:-186.6},0).wait(1).to({x:-189.7},0).wait(1).to({regX:0,x:-198.8},0).wait(23));

	// Layer 7
	this.instance_10 = new lib.Symbol3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(617.2,-48.3,0.8,0.8,0,0,0,4,56.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).wait(1).to({regY:56.5},0).wait(1).to({y:-48.1},0).wait(1).to({y:-47.6},0).wait(1).to({y:-46.9},0).wait(1).to({y:-46},0).wait(1).to({y:-44.6},0).wait(1).to({y:-42.8},0).wait(1).to({y:-40.3},0).wait(1).to({y:-36.9},0).wait(1).to({y:-31.9},0).wait(1).to({y:-24},0).wait(1).to({y:-8.1},0).wait(1).to({y:21.4},0).wait(1).to({y:36.8},0).wait(1).to({y:45.3},0).wait(1).to({y:51.1},0).wait(1).to({y:55.4},0).wait(1).to({y:58.7},0).wait(1).to({y:61.4},0).wait(1).to({y:63.6},0).wait(1).to({y:65.3},0).wait(1).to({y:66.8},0).wait(1).to({y:67.9},0).wait(1).to({y:68.9},0).wait(1).to({y:69.7},0).wait(1).to({y:70.3},0).wait(1).to({y:70.8},0).wait(1).to({y:71.1},0).wait(1).to({y:71.4},0).wait(1).to({y:71.5},0).wait(1).to({regY:56.6,y:71.7},0).to({y:81.7},41).wait(1).to({regY:56.5,y:81.6},0).wait(1).to({y:81.9},0).wait(1).to({y:82.4},0).wait(1).to({y:83.2},0).wait(1).to({y:84.3},0).wait(1).to({y:85.9},0).wait(1).to({y:88.1},0).wait(1).to({y:91.1},0).wait(1).to({y:95.2},0).wait(1).to({y:100.9},0).wait(1).to({y:108.5},0).wait(1).to({y:116.9},0).wait(1).to({y:123.9},0).wait(1).to({y:129},0).wait(1).to({y:132.7},0).wait(1).to({y:135.5},0).wait(1).to({y:137.5},0).wait(1).to({y:138.9},0).wait(1).to({y:140},0).wait(1).to({y:140.7},0).wait(1).to({y:141.2},0).wait(1).to({y:141.5},0).wait(1).to({regY:56.6,y:141.7},0).wait(23));

	// Layer 2
	this.instance_11 = new lib.Symbol4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(606.8,141.1,0.8,0.8,0,0,0,4,56.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).wait(1).to({regY:56.5,y:140.9},0).wait(1).to({y:140.7},0).wait(1).to({y:140.4},0).wait(1).to({y:139.9},0).wait(1).to({y:139.3},0).wait(1).to({y:138.3},0).wait(1).to({y:137.1},0).wait(1).to({y:135.3},0).wait(1).to({y:133},0).wait(1).to({y:129.5},0).wait(1).to({y:124.1},0).wait(1).to({y:113.1},0).wait(1).to({y:92.7},0).wait(1).to({y:82},0).wait(1).to({y:76.1},0).wait(1).to({y:72.1},0).wait(1).to({y:69.1},0).wait(1).to({y:66.8},0).wait(1).to({y:65},0).wait(1).to({y:63.5},0).wait(1).to({y:62.3},0).wait(1).to({y:61.3},0).wait(1).to({y:60.4},0).wait(1).to({y:59.8},0).wait(1).to({y:59.2},0).wait(1).to({y:58.8},0).wait(1).to({y:58.5},0).wait(1).to({y:58.2},0).wait(1).to({y:58.1},0).wait(1).to({y:58},0).wait(1).to({regY:56.6,y:58.1},0).to({y:48.1},40).wait(1).to({regY:56.5,y:47.8},0).wait(1).to({y:47.4},0).wait(1).to({y:46.6},0).wait(1).to({y:45.4},0).wait(1).to({y:43.8},0).wait(1).to({y:41.5},0).wait(1).to({y:38.4},0).wait(1).to({y:34.3},0).wait(1).to({y:28.7},0).wait(1).to({y:21.2},0).wait(1).to({y:11},0).wait(1).to({y:-2.1},0).wait(1).to({y:-16.1},0).wait(1).to({y:-28.2},0).wait(1).to({y:-37.4},0).wait(1).to({y:-44.2},0).wait(1).to({y:-49.2},0).wait(1).to({y:-53},0).wait(1).to({y:-55.9},0).wait(1).to({y:-58.1},0).wait(1).to({y:-59.6},0).wait(1).to({y:-60.7},0).wait(1).to({y:-61.5},0).wait(1).to({y:-61.9},0).wait(1).to({regY:56.6},0).wait(23));

	// bg
	this.instance_12 = new lib.bb_bg();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_advil_lines_atlas_.png", id:"728x90_advil_lines_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;