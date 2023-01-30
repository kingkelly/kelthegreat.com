(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_panda_atlas_", frames: [[99,602,121,26],[0,0,270,600],[99,630,130,20],[222,602,64,22],[0,654,158,29],[0,602,97,50]]}
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



(lib.bb_members = function() {
	this.spriteSheet = ss["160x600_panda_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_panda = function() {
	this.spriteSheet = ss["160x600_panda_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_previews = function() {
	this.spriteSheet = ss["160x600_panda_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_rare = function() {
	this.spriteSheet = ss["160x600_panda_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_spring = function() {
	this.spriteSheet = ss["160x600_panda_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["160x600_panda_atlas_"];
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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAsQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAhTQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAmAAQANAAAJAJQAJAIAAAOQAAAMgJAJQgFAEgFADQgFACgHAAIgUAAIAAAYQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAgAgPABIAQAAQAGAAAFgDIADgEIABgGIgBgGQgBgDgDgCQgCgCgCAAIgGgBIgQAAg");
	this.shape.setTransform(113,281.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAsQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAhTQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAPAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAABTQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(106.4,281.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAsQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgiIgjAAIAAAiQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgPAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhTQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAPAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAhIAjAAIAAghQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAQAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAABTQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_2.setTransform(99.7,281.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQArQgHgDgHgFQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIAJgLQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAFAEAFABQAEACAFAAQAGAAADgCQADgDAAgFQABgEgIgDIgFgDIgIgCQgMgEgFgEQgEgDgBgFQgCgEAAgGQAAgFADgFQACgEAEgEQAEgDAHgCQAGgBAHAAQANAAANAHQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIgIAMQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgJgGgJAAQgFAAgDACQgEACABADQgBAFAJADIAIADIAJADQAJADAFAGQAFAGAAAJQAAAMgJAIQgFAEgGACQgGABgHAAQgIAAgIgCg");
	this.shape_3.setTransform(91.4,281.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAsQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBIgOgcIgNAAIAAAcQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgPAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhTQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAqAAQALAAAIAIQAEAFACAFQACAFAAAGQAAAJgFAHQgFAIgJACIAQAeIABABQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAgAgQgCIAUAAQAEAAAEgDIADgEQACgCAAgDIgCgFIgDgEQgEgDgEAAIgUAAg");
	this.shape_4.setTransform(83.8,281.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAsQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAhTQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIA/AAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAANQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIguAAIAAASIAnAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAMQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgnAAIAAATIAuAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAAANQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_5.setTransform(75.6,281.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeAsQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAhTQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAdAAQAJAAAHAEQALAGAAAMQAAAOgLAFIAAAAQAJACAEAFQAFAGAAAJQAAAMgKAHQgIAFgNAAgAgNAbIANAAQAFAAADgBQAFgDAAgFQAAgKgRAAIgJAAgAgNgIIAFAAQAOAAAAgKQAAgFgEgCQgCgBgDAAIgKAAg");
	this.shape_6.setTransform(67.5,281.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcAsQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgyIgSAdIgBACIgMAAIgCgCIgSgdIAAAyQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgPAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAhTQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAQAAIACACIAYApIAZgpIABgCIARAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAABTQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_7.setTransform(57.8,281.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAsQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhTQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIA/AAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAANQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIguAAIAAASIAnAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAMQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgnAAIAAATIAuAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAANQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_8.setTransform(48.7,281.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcAsQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgyIgSAdIgBACIgMAAIgCgCIgSgdIAAAyQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgPAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAhTQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAQAAIACACIAYApIAZgpIABgCIARAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAABTQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_9.setTransform(38.9,281.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWAsQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgFgRIgdAAIgFARQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgRAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABgBIAehUIACgCIAPAAIACACIAfBVQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAgJAKIATAAIgKgcg");
	this.shape_10.setTransform(25.9,281.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAsQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhTQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIA/AAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAANQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgtAAIAAASIAmAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAMQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgmAAIAAATIAtAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAANQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_11.setTransform(14.9,281.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAtQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAgBIgehTQgBgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIARAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAUA+IAVg+QAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIARAAIABAAIAAACIgeBTQgBABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_12.setTransform(6.3,281.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAsQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAhTQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAPAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAABTQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(0.1,281.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNAqQgJgDgGgHQgHgGgDgIQgDgJAAgJQAAgJADgHQADgIAHgIQAHgGAIgDQAIgDAJAAQANAAAOAJQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgIAMQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgJgFIgIgBQgKgBgIAJQgDAEgCAEQgCAFAAAFQAAALAHAIQAIAIAKAAQAMAAAHgGIAAgHIgQAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgOQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAhAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIAAAsQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgPAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgBQgJAFgKAAQgJAAgIgEg");
	this.shape_14.setTransform(-6.9,281.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("ArSiYIWlAAIAAExI2lAAg");
	this.shape_15.setTransform(52.1,281.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-21.1,265.6,146.5,32.6), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(-14,262,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-14,262,89.6,46.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_previews();
	this.instance.parent = this;
	this.instance.setTransform(-14,261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-14,261,130,20), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhKIgYAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAgOQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIBFAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgYAAIAABKQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape.setTransform(81.1,272.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAwQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgwAAIAAATIApAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgpAAIAAAUIAwAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(73.6,272.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAuQgIgEgIgHQgGgIgEgIQgDgJAAgKQAAgJADgJQADgJAIgGQAHgIAJgEQAIgDAKAAQAPAAAPAKQAAAAAAABQABAAAAAAQAAAAAAABQgBAAAAAAIgIAOQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBQgEgDgFgCQgEgCgFAAQgLABgIAIQgEAFgCAFQgCAFAAAFQAAAMAIAJQAIAIALAAQAMAAAJgGIAAgIIgSAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgPQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAkAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAwQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgCQgKAFgLAAQgKAAgJgDg");
	this.shape_2.setTransform(63.4,272.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAuQgIgCgIgGQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAKgMQAAAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAFAEAFABQAFACAGAAQAGAAADgCQAFgDAAgFQAAgFgJgDIgGgDIgIgCQgNgFgFgEQgEgEgBgFQgCgEgBgHQAAgFADgFQACgFAFgDQAFgEAHgCQAGgCAIAAQAOAAAPAJQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgIAMQgBABAAAAQgBAAAAAAQAAABgBAAQAAgBgBAAQgIgGgKAAQgFAAgEACQgDACgBADQAAAFAKAEIAIADIAKADQAKAEAFAGQAGAHgBAKQAAANgKAIQgEAEgHACQgHACgHAAQgJAAgIgDg");
	this.shape_3.setTransform(50.8,272.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAwQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgPgfIgOAAIAAAfQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgQAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAtAAQAMAAAJAKQAFAEACAGQACAFAAAHQAAAKgGAHQgGAIgIADIAQAgIABACQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAgAgRgCIAVAAQAFAAAEgDIAEgFIABgFIgBgGIgEgEQgEgDgFAAIgVAAg");
	this.shape_4.setTransform(42.5,272.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAwQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBFAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAOQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAIgyAAIAAATIAqAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgqAAIAAAUIAyAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_5.setTransform(33.6,272.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAfAAQAKAAAIAFQALAHAAANQAAAOgMAGIAAAAQAKACAEAGQAFAGABAKQAAANgMAHQgIAGgOAAgAgOAdIAOAAQAGAAADgBQAGgDgBgGQAAgKgSAAIgKAAgAgOgIIAFAAQAPAAAAgMQABgFgFgCQgCgBgEAAIgKAAg");
	this.shape_6.setTransform(25,272.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAg3IgTAgIgCACIgNAAIgCgCIgTggIAAA3QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIASAAIACADIAZAsIAagsIACgDIASAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABIAABaQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_7.setTransform(14.4,272.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAwQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBEAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgxAAIAAATIAqAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgqAAIAAAUIAxAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_8.setTransform(4.7,272.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeAwQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAg3IgTAgIgCACIgNAAIgCgCIgTggIAAA3QAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAhaQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIASAAIACADIAZAsIAagsIACgDIASAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABaQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_9.setTransform(-6,272.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-13.8,262,100.8,20.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgZQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB2AAQAEAAAAAEIAAAZQAAADgEAAIgqAAIAAB/QAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(58.9,299.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(46,299.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBSQgEAAgCgEIgag0IgYAAIAAA0QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIBOAAQAUAAAPAQQAIAIAEAJQAEAKAAALQAAARgKANQgKAPgPAFIAcA2IACADQAAABAAAAQgBAAAAAAQAAABgBAAQgBAAAAAAgAgegFIAmAAQAHAAAHgFQAEgDACgFQACgEAAgFQAAgFgCgEQgCgFgEgDQgHgFgHAAIgmAAg");
	this.shape_2.setTransform(31.9,299.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_3.setTransform(19.8,299.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BSQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAAAAAIBvAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIhOAAIAAAiIBCAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAYQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIhCAAIAAA/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(9.8,299.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIghA3QgBABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAgBIghg3IAABeQAAAEgDAAIgbAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAdAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_5.setTransform(106,271.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_6.setTransform(89.3,271.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAg/IhBAAIAAA/QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAA+IBBAAIAAg+QAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_7.setTransform(72.4,271.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBSQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgZQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB2AAQAFAAAAAEIAAAZQAAADgFAAIgpAAIAAB/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_8.setTransform(57.5,271.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_9.setTransform(38.3,271.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_10.setTransform(23.5,271.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_11.setTransform(8.7,271.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,255.1,118.3,60.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_members();
	this.instance.parent = this;
	this.instance.setTransform(0,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,252,121,26), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmXCeIAAk7IMvAAIAAE7g");
	mask.setTransform(45.5,296.5);

	// Layer 2
	this.instance = new lib.bb_spring();
	this.instance.parent = this;
	this.instance.setTransform(-94,282);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AnfCeIAAk6IO/AAIAAE6g");
	mask_1.setTransform(48.4,266.1);

	// Layer 1
	this.instance_1 = new lib.bb_spring();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,255);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0.4,255,96,56), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIAAibQABgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAAAZQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAAZQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(96.7,220.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAAAgBQgBAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(81.9,220.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIBGAAQAYAAAQARQAQAQAAAZQAAAXgQARQgIAIgKAEQgKAEgMAAIgmAAIAAAtQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAgAgdACIAeAAQAMAAAIgGQAEgDACgFQACgFAAgGQAAgHgCgFQgCgFgEgDQgEgDgFgCQgEgBgHAAIgeAAg");
	this.shape_2.setTransform(67.9,220.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIgiA3QAAABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAgBIghg3IAABeQAAAEgDAAIgbAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAdAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_3.setTransform(49.4,220.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(35.7,220.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAB/IA5AAQABAAABAAQAAABABAAQAAAAABABQAAABAAAAIAAAZQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(26.9,220.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBOQgPgGgMgMQgMgMgGgPQgGgPAAgSQAAgRAGgOQAHgPAMgMQAMgNAQgGQAOgGARAAQAaAAAZARQABAAAAABQABAAAAABQAAAAAAABQgBABAAAAIgPAYQgCACgDgCQgIgFgIgEQgJgCgHAAQgTAAgOAPQgHAHgEAJQgDAIAAAKQAAAVAOAOQAOAPATAAQAWAAANgKIAAgOIgdAAQgFAAAAgDIAAgaQAAgEAFAAIA+AAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIgdAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAgBQgQAHgTAAQgRAAgQgGg");
	this.shape_6.setTransform(10.7,220.8);

	this.instance = new lib.bb_rare();
	this.instance.parent = this;
	this.instance.setTransform(0,186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,186,105.6,50.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBSQgDAAgBgEIgJgdIg3AAIgJAdQgBAEgDAAIgfAAQgFAAACgFIA5iaQABgBAAgBQABgBAAAAQAAgBABAAQAAAAABAAIAcAAQACAAACAEIA4CbQABAEgEAAgAgRASIAjAAIgSg2g");
	this.shape.setTransform(94.8,200.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBSQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAhJIg8hRIgBgDQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAkAAQAEAAADAEIAgAzIAhgzQADgEADAAIAlAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIgBADIg8BSIAABIQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_1.setTransform(73.3,200.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBOQgPgFgMgNQgNgMgHgPQgGgOAAgTQAAgRAGgPQAHgPANgMQAZgYAiAAQASAAAPAGQAPAGANAMQAZAYAAAjQAAAlgZAYQgZAXgkAAQgQAAgQgGgAgigiQgOAPAAATQAAAKAEAKQADAIAHAHQAIAIAIAEQAJAEAJgBQALABAIgEQAJgEAHgIQAOgOAAgVQAAgJgDgJQgEgJgHgHQgPgPgUAAQgTAAgPAPg");
	this.shape_2.setTransform(56.2,200.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBEQgCgDADgDIAQgRQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAEAEAFACQAEACAGAAQAMAAAHgIQAHgJAAgQIAAhiQAAgBAAgBQAAAAAAgBQABAAABgBQAAAAABAAIAdAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAABiQAAAQgEALQgFANgJAIQgRAPgaAAQgaAAgPgPg");
	this.shape_3.setTransform(39.9,200.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBSIgDgBIhKhmIAABjQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgaAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAaAAIAEACIBJBlIAAhjQAAgEAEAAIAaAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(25.7,200.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(10.2,200.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,184.1,104.6,32.1), null);


(lib.panda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_panda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panda, new cjs.Rectangle(0,0,270,600), null);


// stage content:
(lib._160x600_panda = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(69.8,129.1,1,1,0,0,0,44.8,23.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(187).to({_off:false},0).to({y:114.1,alpha:1},19,cjs.Ease.get(1)).wait(28));

	// Layer 5
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.4,170.9,1,1,0,0,0,50.4,10.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(185).to({_off:false},0).to({y:155.9,alpha:1},19,cjs.Ease.get(1)).wait(30));

	// Layer 4
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,190,1,1,0,0,0,65,10);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(183).to({_off:false},0).to({y:175,alpha:1},19,cjs.Ease.get(1)).wait(32));

	// Layer 6
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(103,215.5,1,1,0,0,0,79,14.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(107.6,224.6,1,1,0,0,0,79.5,14.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(181).to({_off:false},0).to({y:209.6,alpha:1},19,cjs.Ease.get(1)).wait(34));

	// Layer 3
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(58,217,1,1,0,0,0,32,11);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(84.5,191,1,1,0,0,0,60.5,13);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(92).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(55).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},4).wait(53));

	// Layer 2
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.3,190.6,1,1,0,0,0,52.2,16.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.9,216.9,1,1,0,0,0,93.8,16.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},15).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(54).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// pandy
	this.instance_9 = new lib.panda();
	this.instance_9.parent = this;
	this.instance_9.setTransform(173,206.5,1,1,0,0,0,174.5,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:135,regY:300,x:133.5,y:300},0).wait(3).to({x:133.4},0).wait(2).to({x:133.3},0).wait(2).to({x:133.2},0).wait(1).to({x:133.1},0).wait(1).to({x:133},0).wait(1).to({x:132.9},0).wait(1).to({x:132.8},0).wait(1).to({x:132.7},0).wait(1).to({x:132.6},0).wait(1).to({x:132.4},0).wait(1).to({x:132.3},0).wait(1).to({x:132.1},0).wait(1).to({x:131.9},0).wait(1).to({x:131.8},0).wait(1).to({x:131.6},0).wait(1).to({x:131.4},0).wait(1).to({x:131.2},0).wait(1).to({x:130.9},0).wait(1).to({x:130.7},0).wait(1).to({x:130.5},0).wait(1).to({x:130.2},0).wait(1).to({x:130},0).wait(1).to({x:129.7},0).wait(1).to({x:129.4},0).wait(1).to({x:129.1},0).wait(1).to({x:128.8},0).wait(1).to({x:128.5},0).wait(1).to({x:128.2},0).wait(1).to({x:127.9},0).wait(1).to({x:127.5},0).wait(1).to({x:127.2},0).wait(1).to({x:126.8},0).wait(1).to({x:126.4},0).wait(1).to({x:126.1},0).wait(1).to({x:125.7},0).wait(1).to({x:125.3},0).wait(1).to({x:124.9},0).wait(1).to({x:124.4},0).wait(1).to({x:124},0).wait(1).to({x:123.6},0).wait(1).to({x:123.1},0).wait(1).to({x:122.7},0).wait(1).to({x:122.2},0).wait(1).to({x:121.7},0).wait(1).to({x:121.2},0).wait(1).to({x:120.7},0).wait(1).to({x:120.2},0).wait(1).to({x:119.7},0).wait(1).to({x:119.2},0).wait(1).to({x:118.6},0).wait(1).to({x:118.1},0).wait(1).to({x:117.6},0).wait(1).to({x:117},0).wait(1).to({x:116.4},0).wait(1).to({x:115.8},0).wait(1).to({x:115.3},0).wait(1).to({x:114.7},0).wait(1).to({x:114.1},0).wait(1).to({x:113.4},0).wait(1).to({x:112.8},0).wait(1).to({x:112.2},0).wait(1).to({x:111.6},0).wait(1).to({x:110.9},0).wait(1).to({x:110.3},0).wait(1).to({x:109.6},0).wait(1).to({x:109},0).wait(1).to({x:108.3},0).wait(1).to({x:107.6},0).wait(1).to({x:106.9},0).wait(1).to({x:106.2},0).wait(1).to({x:105.5},0).wait(1).to({x:104.8},0).wait(1).to({x:104.1},0).wait(1).to({x:103.4},0).wait(1).to({x:102.7},0).wait(1).to({x:102},0).wait(1).to({x:101.2},0).wait(1).to({x:100.5},0).wait(1).to({x:99.8},0).wait(1).to({x:99},0).wait(1).to({x:98.3},0).wait(1).to({x:97.5},0).wait(1).to({x:96.7},0).wait(1).to({x:96},0).wait(1).to({x:95.2},0).wait(1).to({x:94.5},0).wait(1).to({x:93.7},0).wait(1).to({x:92.9},0).wait(1).to({x:92.1},0).wait(1).to({x:91.4},0).wait(1).to({x:90.6},0).wait(1).to({x:89.8},0).wait(1).to({x:89},0).wait(1).to({x:88.2},0).wait(1).to({x:87.4},0).wait(1).to({x:86.6},0).wait(1).to({x:85.8},0).wait(1).to({x:85.1},0).wait(1).to({x:84.3},0).wait(1).to({x:83.5},0).wait(1).to({x:82.7},0).wait(1).to({x:81.9},0).wait(1).to({x:81.1},0).wait(1).to({x:80.3},0).wait(1).to({x:79.5},0).wait(1).to({x:78.7},0).wait(1).to({x:77.9},0).wait(1).to({x:77.2},0).wait(1).to({x:76.4},0).wait(1).to({x:75.6},0).wait(1).to({x:74.8},0).wait(1).to({x:74},0).wait(1).to({x:73.3},0).wait(1).to({x:72.5},0).wait(1).to({x:71.7},0).wait(1).to({x:71},0).wait(1).to({x:70.2},0).wait(1).to({x:69.4},0).wait(1).to({x:68.7},0).wait(1).to({x:67.9},0).wait(1).to({x:67.2},0).wait(1).to({x:66.4},0).wait(1).to({x:65.7},0).wait(1).to({x:65},0).wait(1).to({x:64.2},0).wait(1).to({x:63.5},0).wait(1).to({x:62.8},0).wait(1).to({x:62.1},0).wait(1).to({x:61.4},0).wait(1).to({x:60.6},0).wait(1).to({x:59.9},0).wait(1).to({x:59.3},0).wait(1).to({x:58.6},0).wait(1).to({x:57.9},0).wait(1).to({x:57.2},0).wait(1).to({x:56.5},0).wait(1).to({x:55.9},0).wait(1).to({x:55.2},0).wait(1).to({x:54.6},0).wait(1).to({x:53.9},0).wait(1).to({x:53.3},0).wait(1).to({x:52.6},0).wait(1).to({x:52},0).wait(1).to({x:51.4},0).wait(1).to({x:50.8},0).wait(1).to({x:50.2},0).wait(1).to({x:49.6},0).wait(1).to({x:49},0).wait(1).to({x:48.4},0).wait(1).to({x:47.8},0).wait(1).to({x:47.2},0).wait(1).to({x:46.7},0).wait(1).to({x:46.1},0).wait(1).to({x:45.6},0).wait(1).to({x:45},0).wait(1).to({x:44.5},0).wait(1).to({x:44},0).wait(1).to({x:43.5},0).wait(1).to({x:43},0).wait(1).to({x:42.5},0).wait(1).to({x:42},0).wait(1).to({x:41.5},0).wait(1).to({x:41},0).wait(1).to({x:40.5},0).wait(1).to({x:40.1},0).wait(1).to({x:39.6},0).wait(1).to({x:39.1},0).wait(1).to({x:38.7},0).wait(1).to({x:38.3},0).wait(1).to({x:37.9},0).wait(1).to({x:37.4},0).wait(1).to({x:37},0).wait(1).to({x:36.6},0).wait(1).to({x:36.2},0).wait(1).to({x:35.8},0).wait(1).to({x:35.5},0).wait(1).to({x:35.1},0).wait(1).to({x:34.7},0).wait(1).to({x:34.4},0).wait(1).to({x:34},0).wait(1).to({x:33.7},0).wait(1).to({x:33.4},0).wait(1).to({x:33},0).wait(1).to({x:32.7},0).wait(1).to({x:32.4},0).wait(1).to({x:32.1},0).wait(1).to({x:31.8},0).wait(1).to({x:31.6},0).wait(1).to({x:31.3},0).wait(1).to({x:31},0).wait(1).to({x:30.7},0).wait(1).to({x:30.5},0).wait(1).to({x:30.2},0).wait(1).to({x:30},0).wait(1).to({x:29.8},0).wait(1).to({x:29.6},0).wait(1).to({x:29.3},0).wait(1).to({x:29.1},0).wait(1).to({x:28.9},0).wait(1).to({x:28.7},0).wait(1).to({x:28.6},0).wait(1).to({x:28.4},0).wait(1).to({x:28.2},0).wait(1).to({x:28},0).wait(1).to({x:27.9},0).wait(1).to({x:27.7},0).wait(1).to({x:27.6},0).wait(1).to({x:27.5},0).wait(1).to({x:27.3},0).wait(1).to({x:27.2},0).wait(1).to({x:27.1},0).wait(1).to({x:27},0).wait(1).to({x:26.9},0).wait(1).to({x:26.8},0).wait(1).to({x:26.7},0).wait(2).to({x:26.6},0).wait(1).to({x:26.5},0).wait(2).to({x:26.4},0).wait(2).to({x:26.3},0).wait(5).to({regX:174.5,regY:206.5,x:65.7,y:206.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.5,300,270,600);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_panda_atlas_.png", id:"160x600_panda_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;