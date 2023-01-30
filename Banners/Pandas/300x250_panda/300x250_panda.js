(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_panda_atlas_", frames: [[99,415,121,26],[0,0,349,413],[99,443,130,20],[222,415,64,22],[0,467,158,29],[0,415,97,50]]}
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
	this.spriteSheet = ss["300x250_panda_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_panda = function() {
	this.spriteSheet = ss["300x250_panda_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_previews = function() {
	this.spriteSheet = ss["300x250_panda_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_rare = function() {
	this.spriteSheet = ss["300x250_panda_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_spring = function() {
	this.spriteSheet = ss["300x250_panda_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["300x250_panda_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgjAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIApAAQANAAAKAKQAJAJAAAPQAAANgJAKQgFAFgGACQgGACgGAAIgWAAIAAAbQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAgAgQABIARAAQAHAAAEgDIAEgEIABgHIgBgHQgBgDgDgCQgCgCgDAAIgGgBIgRAAg");
	this.shape.setTransform(142.4,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAPAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAABaQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_1.setTransform(135.4,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAwQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAglIglAAIAAAlQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAIgQAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAQAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAjIAlAAIAAgjQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIARAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAABaQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_2.setTransform(128.2,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAuQgJgCgHgGQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAJgMQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAABQAFAEAGABQAFACAFAAQAGAAAEgCQADgDAAgFQAAgFgHgDIgHgDIgHgCQgNgFgGgEQgEgEgCgFQgCgEABgHQAAgFACgFQACgFAFgDQAFgEAGgCQAHgCAIAAQAOAAAOAJQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgJAMQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBgBQgJgGgJAAQgFAAgEACQgDACgBADQAAAFAJAEIAJADIAKADQAKAEAFAGQAFAHABAKQAAANgKAIQgGAEgGACQgGACgIAAQgJAAgIgDg");
	this.shape_3.setTransform(119.2,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAwQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIgPgfIgOAAIAAAfQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgRAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAtAAQAMAAAJAKQAEAEACAGQADAFAAAHQAAAKgGAHQgFAIgKADIARAgIABACQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAgAgRgCIAWAAQAEAAAEgDIADgFIABgFIgBgGIgDgEQgEgDgEAAIgWAAg");
	this.shape_4.setTransform(111,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIBDAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgwAAIAAATIApAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgpAAIAAAUIAwAAQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_5.setTransform(102.1,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAfAAQAKAAAHAFQAMAHAAANQAAAOgMAGIAAAAQAKACAFAGQAEAGAAAKQABANgMAHQgIAGgNAAgAgNAdIANAAQAGAAADgBQAFgDABgGQAAgKgTAAIgJAAgAgNgIIAEAAQAPAAAAgMQAAgFgEgCQgCgBgDAAIgKAAg");
	this.shape_6.setTransform(93.4,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAwQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAg3IgTAgIgCACIgNAAIgCgCIgTggIAAA3QAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAhaQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAIASAAIACADIAZAsIAagsIACgDIASAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABaQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_7.setTransform(82.9,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIBEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAOQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgyAAIAAATIAqAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgqAAIAAAUIAyAAQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAAPQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_8.setTransform(73.1,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAg3IgTAgIgCACIgNAAIgCgCIgTggIAAA3QAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgQAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIASAAIACADIAZAsIAagsIACgDIASAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABIAABaQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_9.setTransform(62.5,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYAwQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIgGgQIgfAAIgGAQQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgSAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABgBIAhhaQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAQAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAhBaQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgJALIAUAAIgLgfg");
	this.shape_10.setTransform(48.5,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIBDAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAOQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgwAAIAAATIApAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgpAAIAAAUIAwAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAAPQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_11.setTransform(36.6,14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAwQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIghhaQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIATAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAVBCIAWhCQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIATAAIABABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgiBaQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_12.setTransform(27.3,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAwQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAPAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAABaQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_13.setTransform(20.7,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAuQgIgEgHgHQgIgHgDgJQgDgJAAgKQAAgJADgJQAEgIAHgHQAHgIAJgDQAJgEAJAAQAPAAAPAKQAAAAAAABQABAAAAAAQAAAAAAABQgBAAAAABIgIANQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgFgDgFgBQgFgCgEAAQgLAAgIAJQgEAEgCAFQgCAFAAAFQAAAMAIAIQAIAJALAAQAMAAAJgGIAAgHIgSAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgOQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAkAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAAvQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgQAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgBQgKAEgLAAQgKAAgJgDg");
	this.shape_14.setTransform(13.1,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("AsaiQIY1AAIAAEhI41AAg");
	this.shape_15.setTransform(79.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1,-1,161,31), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,89.6,46.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_previews();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,130,20), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhKIgYAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgOQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIBFAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgYAAIAABKQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(95,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAwQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBFAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgyAAIAAATIAqAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgqAAIAAAUIAyAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_1.setTransform(87.5,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAtQgJgDgHgHQgGgHgEgJQgEgJABgKQgBgJAEgJQADgJAIgGQAHgIAJgEQAIgDAKAAQAOAAAQAKQAAAAAAABQABAAAAAAQAAAAAAABQgBAAAAAAIgIAOQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgEgFgCQgFgCgEAAQgLAAgIAJQgEAFgCAFQgCAFAAAFQAAAMAIAJQAIAIALAAQANAAAIgGIAAgIIgSAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgPQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAkAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAvQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAIgQAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgBQgKAFgLAAQgKAAgJgEg");
	this.shape_2.setTransform(77.3,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAuQgIgCgIgGQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAKgMQAAAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQAFAEAGABQAEACAGAAQAGAAADgCQAFgDAAgFQgBgFgHgDIgHgDIgIgCQgNgFgFgEQgEgEgBgFQgDgEAAgHQAAgFADgFQADgFAEgDQAFgEAHgCQAGgCAIAAQANAAAQAJQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgIAMQgBABAAAAQgBAAAAAAQAAABgBAAQAAgBgBAAQgIgGgKAAQgFAAgEACQgEACAAADQAAAFAKAEIAIADIAKADQAKAEAFAGQAGAHgBAKQABANgLAIQgEAEgHACQgHACgHAAQgJAAgIgDg");
	this.shape_3.setTransform(64.6,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAwQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgPgfIgOAAIAAAfQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgQAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAtAAQAMAAAJAKQAFAEACAGQACAFAAAHQAAAKgGAHQgGAIgIADIAQAgIABACQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAgAgRgCIAVAAQAFAAAEgDIADgFIACgFIgCgGIgDgEQgEgDgFAAIgVAAg");
	this.shape_4.setTransform(56.4,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIBEAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIAAAOQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAIgyAAIAAATIAqAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgqAAIAAAUIAyAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAAPQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_5.setTransform(47.5,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAfAAQAKAAAHAFQAMAHAAANQAAAOgMAGIAAAAQAKACAEAGQAFAGABAKQAAANgMAHQgIAGgNAAgAgOAdIAOAAQAFAAAEgBQAGgDgBgGQAAgKgSAAIgKAAgAgOgIIAFAAQAPAAAAgMQABgFgFgCQgCgBgEAAIgKAAg");
	this.shape_6.setTransform(38.8,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAg3IgTAgIgCACIgNAAIgCgCIgTggIAAA3QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIASAAIACADIAZAsIAagsIACgDIASAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABIAABaQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_7.setTransform(28.3,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAwQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhaQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIBFAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAOQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAIgyAAIAAATIAqAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAANQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgqAAIAAAUIAyAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAPQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_8.setTransform(18.5,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeAwQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAg3IgTAgIgCACIgNAAIgCgCIgTggIAAA3QAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIgQAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAhaQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIASAAIACADIAZAsIAagsIACgDIASAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABaQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_9.setTransform(7.9,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,100.8,20.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgZQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB3AAQADAAAAAEIAAAZQAAADgDAAIgrAAIAAB/QAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(179.3,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQAAAAgBgBQAAAAAAgBQgBAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(166.4,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBSQgEAAgCgEIgag0IgYAAIAAA0QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIBOAAQAUAAAPAQQAIAIAEAJQAEAKAAALQAAARgKANQgKAPgPAFIAcA2IACADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAgAgegFIAmAAQAHAAAHgFQAEgDACgFQACgEAAgFQAAgFgCgEQgCgFgEgDQgHgFgHAAIgmAAg");
	this.shape_2.setTransform(152.3,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_3.setTransform(140.2,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BSQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIBtAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAIhNAAIAAAiIBCAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAYQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhCAAIAAA/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(130.2,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIghA3QgBABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAgBIghg3IAABeQAAAEgDAAIgbAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAdAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_5.setTransform(106,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_6.setTransform(89.3,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAg/IhBAAIAAA/QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAA+IBBAAIAAg+QAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_7.setTransform(72.4,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBSQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgZQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB2AAQAFAAAAAEIAAAZQAAADgFAAIgpAAIAAB/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_8.setTransform(57.5,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_9.setTransform(38.3,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_10.setTransform(23.5,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_11.setTransform(8.7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,187.6,32.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_members();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,121,26), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_spring();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,0,158,29), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(161.8,-22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(147,-22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBgBgBIAAibQABgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIBGAAQAYAAAQARQAQAQABAZQgBAXgQARQgIAIgKAEQgKAEgMAAIgmAAIAAAtQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAgAgdACIAeAAQANAAAHgGQAEgDACgFQACgFAAgGQAAgHgCgFQgCgFgEgDQgEgDgEgCQgGgBgGAAIgeAAg");
	this.shape_2.setTransform(133,-22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIgiA3QAAABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBgBIghg3IAABeQAAAEgEAAIgaAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABABABIAsBNIAthNQAAgBABgBQAAAAABgBQAAAAABgBQAAAAAAAAIAeAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_3.setTransform(114.5,-22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(100.8,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAB/IA5AAQABAAABAAQAAABABAAQAAAAABABQAAABAAAAIAAAZQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(92,-22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBOQgPgGgMgMQgNgNgGgPQgGgPAAgRQAAgRAHgOQAFgPANgNQANgMAPgGQAPgGAQAAQAaAAAZARQABAAAAABQABAAAAABQAAAAAAABQAAABgBABIgOAWQgCADgEgCQgIgFgJgEQgHgCgIAAQgTAAgOAPQgHAHgDAJQgEAJAAAJQAAAVAOAPQAOAOATAAQAWAAANgLIAAgMIgeAAQgDgBAAgEIAAgZQAAgEADABIA/AAQAAAAABAAQABAAAAAAQABABAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgdAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAgCQgRAIgSAAQgRAAgPgGg");
	this.shape_6.setTransform(75.8,-21.9);

	this.instance = new lib.bb_rare();
	this.instance.parent = this;
	this.instance.setTransform(0,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-38.1,170.7,32.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBSQgDAAgBgEIgJgdIg3AAIgJAdQgBAEgDAAIgfAAQgFAAACgFIA5ibQABAAAAgBQABgBAAAAQAAgBABAAQAAAAABAAIAcAAQACAAACADIA4CcQABAEgEAAgAgRASIAjAAIgSg1g");
	this.shape.setTransform(94.8,-14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBSQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAhJIg8hRIgBgDQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAkAAQAEAAADAEIAgAzIAhgzQADgEADAAIAlAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIgBADIg8BSIAABIQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_1.setTransform(73.3,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBPQgPgHgMgLQgNgMgHgPQgGgQAAgSQAAgRAGgPQAHgPANgNQAZgXAiAAQASAAAPAGQAPAGANALQAZAZAAAjQAAAkgZAZQgZAXgkAAQgQAAgQgFgAgigiQgOAPAAATQAAAKAEAJQADAJAHAIQAIAHAIADQAJAEAJABQALgBAIgEQAJgDAHgHQAOgPAAgVQAAgJgDgJQgEgJgHgHQgPgPgUAAQgTAAgPAPg");
	this.shape_2.setTransform(56.2,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBEQgCgDADgDIAQgRQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAEAEAFACQAEACAGAAQAMAAAHgIQAHgJAAgQIAAhiQAAgBAAgBQAAAAAAgBQABAAABgBQAAAAABAAIAdAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAABiQAAAQgEALQgFANgJAIQgRAPgaAAQgaAAgPgPg");
	this.shape_3.setTransform(39.9,-14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBSIgDgBIhKhmIAABjQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgaAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAaAAIAEACIBJBlIAAhjQAAgEAEAAIAaAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(25.7,-14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(10.2,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-31,104.6,32.1), null);


(lib.panda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_panda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panda, new cjs.Rectangle(0,0,349,413), null);


// stage content:
(lib._300x250_panda = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(69.8,129.1,1,1,0,0,0,44.8,23.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(186).to({_off:false},0).to({y:114.1,alpha:1},19,cjs.Ease.get(1)).wait(28));

	// Layer 5
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.4,170.9,1,1,0,0,0,50.4,10.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).to({y:155.9,alpha:1},19,cjs.Ease.get(1)).wait(30));

	// Layer 4
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,190,1,1,0,0,0,65,10);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).to({y:175,alpha:1},19,cjs.Ease.get(1)).wait(32));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},90).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({y:209.6,alpha:1},19,cjs.Ease.get(1)).wait(34));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(91).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(55).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},4).wait(53));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},11).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(54).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(53));

	// pandy
	this.instance_9 = new lib.panda();
	this.instance_9.parent = this;
	this.instance_9.setTransform(129.5,54.5,1,1,0,0,0,174.5,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:129.6,y:54.6},0).wait(3).to({y:54.7},0).wait(2).to({y:54.8},0).wait(1).to({y:54.9},0).wait(1).to({y:55},0).wait(1).to({y:55.1},0).wait(1).to({y:55.2},0).wait(1).to({y:55.4},0).wait(1).to({y:55.5},0).wait(1).to({y:55.7},0).wait(1).to({y:55.9},0).wait(1).to({y:56.1},0).wait(1).to({y:56.3},0).wait(1).to({y:56.5},0).wait(1).to({y:56.8},0).wait(1).to({y:57},0).wait(1).to({y:57.3},0).wait(1).to({y:57.6},0).wait(1).to({y:57.9},0).wait(1).to({y:58.2},0).wait(1).to({y:58.5},0).wait(1).to({y:58.9},0).wait(1).to({y:59.2},0).wait(1).to({y:59.6},0).wait(1).to({y:60},0).wait(1).to({y:60.4},0).wait(1).to({y:60.8},0).wait(1).to({y:61.2},0).wait(1).to({y:61.7},0).wait(1).to({y:62.1},0).wait(1).to({x:129.7,y:62.6},0).wait(1).to({y:63.1},0).wait(1).to({y:63.6},0).wait(1).to({y:64.1},0).wait(1).to({y:64.6},0).wait(1).to({y:65.2},0).wait(1).to({y:65.7},0).wait(1).to({y:66.3},0).wait(1).to({y:66.9},0).wait(1).to({y:67.5},0).wait(1).to({y:68.1},0).wait(1).to({y:68.7},0).wait(1).to({y:69.4},0).wait(1).to({x:129.8,y:70},0).wait(1).to({y:70.7},0).wait(1).to({y:71.4},0).wait(1).to({y:72.1},0).wait(1).to({y:72.8},0).wait(1).to({y:73.5},0).wait(1).to({y:74.3},0).wait(1).to({y:75},0).wait(1).to({y:75.8},0).wait(1).to({y:76.6},0).wait(1).to({y:77.3},0).wait(1).to({x:129.9,y:78.1},0).wait(1).to({y:79},0).wait(1).to({y:79.8},0).wait(1).to({y:80.6},0).wait(1).to({y:81.5},0).wait(1).to({y:82.3},0).wait(1).to({y:83.2},0).wait(1).to({y:84.1},0).wait(1).to({x:130,y:85},0).wait(1).to({y:85.9},0).wait(1).to({y:86.8},0).wait(1).to({y:87.7},0).wait(1).to({y:88.7},0).wait(1).to({y:89.6},0).wait(1).to({y:90.6},0).wait(1).to({y:91.6},0).wait(1).to({y:92.5},0).wait(1).to({x:130.1,y:93.5},0).wait(1).to({y:94.5},0).wait(1).to({y:95.5},0).wait(1).to({y:96.5},0).wait(1).to({y:97.5},0).wait(1).to({y:98.6},0).wait(1).to({y:99.6},0).wait(1).to({x:130.2,y:100.7},0).wait(1).to({y:101.7},0).wait(1).to({y:102.8},0).wait(1).to({y:103.8},0).wait(1).to({y:104.9},0).wait(1).to({y:106},0).wait(1).to({y:107},0).wait(1).to({x:130.3,y:108.1},0).wait(1).to({y:109.2},0).wait(1).to({y:110.3},0).wait(1).to({y:111.4},0).wait(1).to({y:112.5},0).wait(1).to({y:113.6},0).wait(1).to({y:114.7},0).wait(1).to({x:130.4,y:115.9},0).wait(1).to({y:117},0).wait(1).to({y:118.1},0).wait(1).to({y:119.2},0).wait(1).to({y:120.3},0).wait(1).to({y:121.5},0).wait(1).to({y:122.6},0).wait(1).to({x:130.5,y:123.7},0).wait(1).to({y:124.8},0).wait(1).to({y:126},0).wait(1).to({y:127.1},0).wait(1).to({y:128.2},0).wait(1).to({y:129.3},0).wait(1).to({y:130.5},0).wait(1).to({x:130.6,y:131.6},0).wait(1).to({y:132.7},0).wait(1).to({y:133.8},0).wait(1).to({y:134.9},0).wait(1).to({y:136.1},0).wait(1).to({y:137.2},0).wait(1).to({x:130.7,y:138.3},0).wait(1).to({y:139.4},0).wait(1).to({y:140.5},0).wait(1).to({y:141.6},0).wait(1).to({y:142.7},0).wait(1).to({y:143.8},0).wait(1).to({y:144.8},0).wait(1).to({x:130.8,y:145.9},0).wait(1).to({y:147},0).wait(1).to({y:148.1},0).wait(1).to({y:149.1},0).wait(1).to({y:150.2},0).wait(1).to({y:151.2},0).wait(1).to({y:152.3},0).wait(1).to({y:153.3},0).wait(1).to({x:130.9,y:154.3},0).wait(1).to({y:155.4},0).wait(1).to({y:156.4},0).wait(1).to({y:157.4},0).wait(1).to({y:158.4},0).wait(1).to({y:159.4},0).wait(1).to({y:160.4},0).wait(1).to({x:131,y:161.3},0).wait(1).to({y:162.3},0).wait(1).to({y:163.3},0).wait(1).to({y:164.2},0).wait(1).to({y:165.2},0).wait(1).to({y:166.1},0).wait(1).to({y:167},0).wait(1).to({y:167.9},0).wait(1).to({x:131.1,y:168.8},0).wait(1).to({y:169.7},0).wait(1).to({y:170.6},0).wait(1).to({y:171.5},0).wait(1).to({y:172.4},0).wait(1).to({y:173.2},0).wait(1).to({y:174.1},0).wait(1).to({y:174.9},0).wait(1).to({y:175.7},0).wait(1).to({x:131.2,y:176.5},0).wait(1).to({y:177.3},0).wait(1).to({y:178.1},0).wait(1).to({y:178.9},0).wait(1).to({y:179.7},0).wait(1).to({y:180.4},0).wait(1).to({y:181.2},0).wait(1).to({y:181.9},0).wait(1).to({y:182.7},0).wait(1).to({y:183.4},0).wait(1).to({x:131.3,y:184.1},0).wait(1).to({y:184.8},0).wait(1).to({y:185.5},0).wait(1).to({y:186.1},0).wait(1).to({y:186.8},0).wait(1).to({y:187.5},0).wait(1).to({y:188.1},0).wait(1).to({y:188.7},0).wait(1).to({y:189.4},0).wait(1).to({y:190},0).wait(1).to({y:190.6},0).wait(1).to({y:191.1},0).wait(1).to({x:131.4,y:191.7},0).wait(1).to({y:192.3},0).wait(1).to({y:192.8},0).wait(1).to({y:193.4},0).wait(1).to({y:193.9},0).wait(1).to({y:194.4},0).wait(1).to({y:194.9},0).wait(1).to({y:195.4},0).wait(1).to({y:195.9},0).wait(1).to({y:196.4},0).wait(1).to({y:196.8},0).wait(1).to({y:197.3},0).wait(1).to({y:197.7},0).wait(1).to({y:198.1},0).wait(1).to({y:198.6},0).wait(1).to({x:131.5,y:199},0).wait(1).to({y:199.4},0).wait(1).to({y:199.7},0).wait(1).to({y:200.1},0).wait(1).to({y:200.5},0).wait(1).to({y:200.8},0).wait(1).to({y:201.2},0).wait(1).to({y:201.5},0).wait(1).to({y:201.8},0).wait(1).to({y:202.1},0).wait(1).to({y:202.4},0).wait(1).to({y:202.7},0).wait(1).to({y:203},0).wait(1).to({y:203.2},0).wait(1).to({y:203.5},0).wait(1).to({y:203.7},0).wait(1).to({y:204},0).wait(1).to({y:204.2},0).wait(1).to({y:204.4},0).wait(1).to({y:204.6},0).wait(1).to({y:204.8},0).wait(1).to({y:205},0).wait(1).to({y:205.2},0).wait(1).to({y:205.3},0).wait(1).to({y:205.5},0).wait(1).to({y:205.6},0).wait(1).to({y:205.7},0).wait(1).to({y:205.9},0).wait(1).to({y:206},0).wait(1).to({y:206.1},0).wait(1).to({y:206.2},0).wait(2).to({y:206.3},0).wait(1).to({y:206.4},0).wait(2).to({y:206.5},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105,-27,349,413);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_panda_atlas_.png", id:"300x250_panda_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;