(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_advil_relief_atlas_", frames: [[220,672,119,73],[0,0,300,600],[0,602,218,138],[302,747,104,30],[0,747,300,27],[220,602,183,68]]}
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
	this.spriteSheet = ss["300x600_advil_relief_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_bg = function() {
	this.spriteSheet = ss["300x600_advil_relief_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_box = function() {
	this.spriteSheet = ss["300x600_advil_relief_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_cta = function() {
	this.spriteSheet = ss["300x600_advil_relief_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_legal = function() {
	this.spriteSheet = ss["300x600_advil_relief_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bb_pill = function() {
	this.spriteSheet = ss["300x600_advil_relief_atlas_"];
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
	this.instance = new lib.bb_legal();
	this.instance.parent = this;
	this.instance.setTransform(0,330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,330,300,27), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_advillogo();
	this.instance.parent = this;
	this.instance.setTransform(4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(4,0,119,73), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_cta();
	this.instance.parent = this;
	this.instance.setTransform(-10,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-10,270,104,30), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AgaAVIAJgpIAsAAIgKApg");
	this.shape.setTransform(160.8,57.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("Ag4BlIAZh1IgYAAIAHgbIAXAAIAGgZQAEgKAFgHQAHgIAIgDQAKgEAQAAIAMABIAOABIgHAdIgGgBIgGAAQgIAAgEACQgEACgCADIgEAJIgCALIAcAAIgGAbIgcAAIgYB1g");
	this.shape_1.setTransform(153.8,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgjBIQgLgDgJgJQgIgIgFgLQgFgMAAgQQAAgLAGgWQAGgPAKgNQAKgNAPgGQAHgFAJgCQAIgBAIAAQAQAAAMADQAMAFAJAIQAJAHAFANQAFAMAAAPQAAAKgCALIhqAAIAAAEIAAACIAAADQAAAGACAGQACAFADAEQAIAHAQAAQAGAAAEgCIAIgEIAGgHIAFgHIAoAAQgFANgGAJQgHAKgJAFQgJAHgMADQgLADgPAAQgPAAgMgEgAgFgrQgHADgEAEQgFAEgDAGIgGAMIBBAAIgBgMQAAgFgDgFQgDgEgFgDQgGgCgIAAQgJAAgFACg");
	this.shape_2.setTransform(138.2,52.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AgoBkIAeiQIAnAAIgeCQgAgFhCIAGghIAoAAIgHAhg");
	this.shape_3.setTransform(126.2,49.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AgoBkIApjHIAoAAIgqDHg");
	this.shape_4.setTransform(117.9,49.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgjBIQgLgDgJgJQgIgIgFgLQgFgMAAgQQAAgLAGgWQAGgPAKgNQAKgNAPgGQAHgFAJgCQAIgBAIAAQAQAAAMADQAMAFAJAIQAJAHAFANQAFAMAAAPQAAAKgCALIhqAAIAAAEIAAACIAAADQAAAGACAGQACAFADAEQAIAHAQAAQAGAAAEgCIAIgEIAGgHIAFgHIAoAAQgFANgGAJQgHAKgJAFQgJAHgMADQgLADgPAAQgPAAgMgEgAgFgrQgHADgEAEQgFAEgDAGIgGAMIBBAAIgBgMQAAgFgDgFQgDgEgFgDQgGgCgIAAQgJAAgFACg");
	this.shape_5.setTransform(104.7,52.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("Ag9BKIAeiQIAkAAIgFAbIAAAAQAEgIAFgFQAFgGAGgEQAOgHAQAAIAMAAIgIAnIgIgCIgJAAQgLAAgIAEQgIADgGAHQgEAHgDAIIgFARIgOBAg");
	this.shape_6.setTransform(91.1,52.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AARBKIAShUIABgJIABgIQAAgHgHgEQgFgEgHAAQgJAAgHADQgGAEgFAGQgFAFgDAHIgFAPIgQBMIgoAAIAeiQIAnAAIgFAVIAAAAQATgYAfAAQAWAAAKAJQALAKgBATIAAAGIgCAHIgBAHIgBAFIgSBUg");
	this.shape_7.setTransform(65.9,52.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgoBkIAeiQIAnAAIgeCQgAgFhCIAGghIAoAAIgHAhg");
	this.shape_8.setTransform(53.9,49.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AgvBJQgJgDgFgFQgGgFgDgHQgDgHAAgHQAAgLAEgJQADgIAHgGQAIgGAKgDQAKgFANgBIAYgCIARgDQAHgCADgDQADgEAAgHQAAgGgCgDQgDgDgDgCIgJgDIgIAAQgKAAgIAEQgIAGgCAKIglAAQABgNAHgJQAGgKAKgFQAJgFALgDQALgCAMAAIAVABQAKABAJAFQAJAEAGAHQAGAIgBAMQAAAKgDAOIgNA5IgBAKIgBAKIACAIIgoAAIAAgNQgIAIgLAFQgMAEgMAAQgMAAgJgDgAAMAIIgQACIgLACQgFABgEACQgEADgDAFQgDAEAAAGQAAAJAHADQAHAFAIAAQAKAAAFgDQAGgDAFgEQAEgFACgGIAFgMIAEgOQgIAEgJABg");
	this.shape_9.setTransform(40.3,52.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AhWBjIApjCIAnAAIgFASIABABQAHgMAKgFQAMgFANgBQAOAAAKAEQAKAEAHAHQAOAQAAAbQAAARgEASQgFAPgKAOQgFAGgGAGQgGAFgIAEQgOAJgUgBIgMgBIgLgEQgGgDgEgEQgEgFgDgFIAAAAIgQBFgAAAg/QgHAHgGAJQgFAJgDAKQgCAMAAAIQAAAOAHAJQADADAGADQAFACAGAAQAMAAAIgGQAIgGAGgJQAFgIACgLQACgKABgKQgBgGgBgGQgCgFgDgFQgEgEgFgDQgGgCgGAAQgLAAgJAFg");
	this.shape_10.setTransform(22.1,54.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("Ag6BkIAiiiIg/AAIAIglICnAAIgJAlIg8AAIggCig");
	this.shape_11.setTransform(200,19.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AhCBYQgVgSAAgkIApAAQAAAKADAIQADAGAGAFQAGAEAIACQAIABAKABIAMgCIANgFQAFgEADgFQAEgFAAgHQAAgIgEgFQgFgEgHgEIgQgFIgSgGIgSgHQgKgDgGgGQgIgGgEgIQgEgKgBgNQAAgRAIgLQAHgMALgHQALgIAPgDQANgEAOAAQAQAAANAEQAOADAKAIQAKAIAGAMQAGANAAAQIgpAAQAAgIgDgFQgDgGgEgEQgGgDgGgCIgOgCIgMABQgHACgFADQgEADgEAFQgCAEAAAIQgBAGAGAFQAGAFAHAEIAPAFIANACIAVAIQALAEAGAGQAHAGAFAJQAEAJgBANQAAAKgBAHQgCAIgEAGQgIANgLAIQgLAHgPAEQgOAEgOAAQgqAAgUgRg");
	this.shape_12.setTransform(179.6,19.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AA3BkIgHgtIhKAAIgZAtIguAAIB1jHIAtAAIAhDHgAgIAXIA0AAIgKhPIAAAAg");
	this.shape_13.setTransform(158.1,19.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AhbBkIAqjHICNAAIgIAlIhhAAIgKAuIBVAAIgHAiIhVAAIgRBSg");
	this.shape_14.setTransform(142,19.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AgtARIAIghIBTAAIgHAhg");
	this.shape_15.setTransform(125.8,21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF200").s().p("AhJBkIAqjHIArAAIghCiIBfAAIgIAlg");
	this.shape_16.setTransform(110.8,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF200").s().p("AgqBkIAqjHIArAAIgqDHg");
	this.shape_17.setTransform(98.4,19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF200").s().p("AhCBkIgXjHIAsAAIANCVIABAAIBLiVIAuAAIhqDHg");
	this.shape_18.setTransform(86.6,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF200").s().p("AhiBkIApjHIBIAAQAqAAAWAUQAKALAFAOQAGAPAAASQAAAZgIAXQgDALgGAJQgFAKgHAIQgPAQgVAKQgWAJgcAAgAgvA/IAiAAQAQAAANgGQANgGAJgLQAJgKAEgOQAEgOAAgQQAAgKgBgKQgDgIgFgHQgFgGgJgEQgIgDgMAAIggAAg");
	this.shape_19.setTransform(63.8,19.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF200").s().p("AA3BkIgHgtIhKAAIgZAtIguAAIB1jHIAtAAIAhDHgAgIAXIA0AAIgKhPIAAAAg");
	this.shape_20.setTransform(41.4,19.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF200").s().p("AgEBfIgNgBQgHgBgFgDQgGgDgDgGQgEgGAAgJIABgGIACgHIAQhNIgaAAIAGgbIAaAAIAJgrIAmAAIgJArIAdAAIgGAbIgcAAIgPBHIgBAEIAAADIABAGIADADIAFABIAEAAIAOAAIgHAeIgMABg");
	this.shape_21.setTransform(19.3,20);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF200").s().p("AgjBIQgLgDgJgJQgIgHgFgMQgFgMAAgQQAAgLAGgWQAGgQAKgMQAKgNAPgGQAHgEAJgDQAIgBAIAAQAQAAAMADQAMAFAJAIQAJAHAFANQAFALAAAQQAAAKgCAMIhqAAIAAADIAAABIAAAEQAAAGACAGQACAFADAEQAIAHAQABQAGAAAEgDIAIgEIAGgHIAFgHIAoAAQgFANgGAJQgHAJgJAHQgJAGgMADQgLADgPAAQgPAAgMgEgAgFgqQgHACgEAEQgFAEgDAGIgGAMIBBAAIgBgLQAAgGgDgFQgDgEgFgCQgGgDgIAAQgJAAgFADg");
	this.shape_22.setTransform(4.2,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF200").s().p("AgtBjQgRgGgLgLQgXgXAAgqQAAgYAHgWQAIgWAOgRQAOgQAUgKQAVgKAYAAQASAAAPAFQAQAEALAIQAMAJAGAOQAHAMAAATIgsAAQAAgJgEgHQgDgGgEgEQgGgEgHgCQgIgCgJAAQgIAAgGACQgIACgGAEQgNAHgHANQgIAMgFAPQgDAOAAAPQAAAKACAJQADAJAFAIQAGAGAJAEQAIAEAMAAQALAAAKgDQAJgCAGgHQAHgFAEgIQAFgIACgJIguAAIAIggIBUAAIgXBrIgbAAIAAgUIgBAAQgFAGgGAFQgGAFgGADQgNAGgOAAQgUAAgRgGg");
	this.shape_23.setTransform(-14.9,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-27.7,0,237.6,67.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,218,138), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("AAZAAQAAAKgIAIQgHAHgKAAQgKAAgIgHQgGgIAAgKQAAgKAGgHQAIgHAKAAQAKAAAHAHQAIAHAAAKg");
	this.shape.setTransform(2.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","rgba(0,0,0,0.749)"],[0,0.894],1.4,-1.3,0,1.4,-1.3,4.4).s().p("AgSARQgGgHAAgKQAAgJAGgIQAIgHAKAAQAJAAAIAHQAIAIAAAJQAAAKgIAHQgIAIgJAAQgKAAgIgIg");
	this.shape_1.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,7,7), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_pill();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,68);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AhfBoIAsjOICSAAIgIAmIhlAAIgKAvIBYAAIgIAjIhXAAIgSBWg");
	this.shape.setTransform(195.2,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhkBoIAsjOICdAAIgIAmIhwAAIgJAsIBnAAIgHAjIhoAAIgKAzIBxAAIgIAmg");
	this.shape_1.setTransform(175.4,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgsBoIAsjOIAtAAIgsDOg");
	this.shape_2.setTransform(160.2,51.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AhMBoIArjOIAtAAIgiCoIBjAAIgIAmg");
	this.shape_3.setTransform(145.9,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhkBoIAsjOICdAAIgIAmIhwAAIgJAsIBnAAIgHAjIhoAAIgKAzIBxAAIgIAmg");
	this.shape_4.setTransform(127.9,51.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAhBoIgCgHIAAgHIABgVIABgVQAAgIgCgFQgCgEgEgDQgEgDgFgBIgNgBIgpAAIgRBRIguAAIArjOIBiAAQAOgBALADQAMADAIAGQAIAHAFAKQAEALAAAPQAAAKgDAKQgEAKgGAHQgHAHgJAEQgIAFgLACIAAAAQAHACAEAEQAFADACAFQAEAKAAANIgBAQIgBAUIABANIADALgAgggJIApAAQAKAAAIgCQAJgBAGgEQAGgEAFgHQADgGAAgIQABgJgDgFQgDgFgFgDQgFgCgFgBIgNgBIgqAAg");
	this.shape_5.setTransform(106.2,51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("Ag8BoIAkioIhBAAIAIgmICsAAIgIAmIg+AAIgjCog");
	this.shape_6.setTransform(231.9,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AhFBbQgVgSAAgmIArAAQgBALAEAHQADAIAGAEQAGAEAIACQAJACAKAAQAGAAAGgBQAHgCAGgEQAGgDADgGQAEgFAAgIQAAgIgFgEQgEgFgIgEIgQgGIgSgFIgUgHQgJgEgHgGQgIgGgEgJQgFgJAAgOQAAgRAIgMQAHgNALgHQAMgIAPgEQAOgDAOAAQAQAAAOADQAOAEALAIQALAIAGANQAGAMAAASIgrAAQAAgIgDgGQgCgGgFgEQgFgEgHgBIgPgCIgMABQgHACgFADQgFADgDAFQgDAFAAAHQAAAHAFAGQAGAFAIADIAPAFIAOADIAWAIQAKAEAIAGQAHAGAEAKQAEAJAAAOQAAAKgCAHQgCAIgDAHQgIANgMAIQgMAIgPAEQgPADgOAAQgsAAgVgRg");
	this.shape_7.setTransform(210.8,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AA4BoIgGguIhNAAIgaAuIgwAAIB5jOIAvAAIAjDOgAgJAYIA3AAIgLhSIAAAAg");
	this.shape_8.setTransform(188.6,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AhfBoIAsjOICTAAIgJAmIhlAAIgKAvIBYAAIgIAjIhXAAIgSBWg");
	this.shape_9.setTransform(172,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AguASIAHgjIBWAAIgHAjg");
	this.shape_10.setTransform(155.2,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AhMBoIArjOIAtAAIgiCnIBjAAIgJAng");
	this.shape_11.setTransform(139.7,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgsBoIAsjOIAtAAIgsDOg");
	this.shape_12.setTransform(126.9,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AhEBoIgYjOIAuAAIANCaIABAAIBNiaIAwAAIhuDOg");
	this.shape_13.setTransform(114.7,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AhmBoIArjOIBKAAQAsgBAWAVQALALAGAPQAFAPAAATQAAAagHAXQgEAMgGAKQgFAKgIAJQgPAQgWAKQgXAKgdAAgAgxBBIAjAAQARABANgHQAOgGAJgLQAJgLAFgPQAEgPAAgPQAAgLgCgKQgCgIgGgIQgFgGgJgEQgJgDgMAAIghAAg");
	this.shape_14.setTransform(91.1,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AA4BoIgGguIhNAAIgaAuIgwAAIB5jOIAvAAIAjDOgAgJAYIA3AAIgLhSIAAAAg");
	this.shape_15.setTransform(68,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(0,0,300,70.2), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AAXB2IhAilIAAAAIgiClIgwAAIAxjrIA1AAIA/CnIABAAIAiinIAvAAIgxDrg");
	this.shape.setTransform(256.9,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgyB2IAyjrIAzAAIgyDrg");
	this.shape_1.setTransform(238.7,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("ABAB2IgIg1IhXAAIgdA1Ig3AAICKjrIA1AAIAoDrgAgKAbIA+AAIgMhdIAAAAg");
	this.shape_2.setTransform(219.2,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AhwB2IAyjrIBdAAQASAAAPAEQAOADAMAIQALAIAGANQAFANAAAUQAAAJgCAJQgBAJgEAIQgIAOgMALQgMAKgRAGQgRAFgSAAIg/AAIgSBVgAgigGIA0AAQAKAAAIgDQAIgCAFgFQAMgKAAgVQAAgJgEgGQgDgGgFgDQgFgDgGgBIgOgCIgrAAg");
	this.shape_3.setTransform(198.3,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhyB2IAxjrICzAAIgJAsIh/AAIgKAyIB1AAIgIAnIh2AAIgLA6ICAAAIgJAsg");
	this.shape_4.setTransform(165.4,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AhWB2IAwjrIA0AAIgnC/IBwAAIgJAsg");
	this.shape_5.setTransform(142.8,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgyB0QgUgGgNgOQgcgaAAgzQAAgcAJgZQAJgaARgUQARgTAYgMQAXgLAdAAQAVAAARAFQASAGAMALQAHAFAFAHIAIAPQADAIACAKIACAUIg0AAQAAgLgDgIQgDgIgGgGQgMgLgSAAQgKAAgIACQgJADgHAEQgPAJgJAPQgJAOgFASQgFAQAAARQAAAMADALQAEALAGAJQAGAIALAFQAKAFAOAAQAJAAAKgEQAJgEAHgGQAIgHAFgIQAFgJABgJIA0AAQgMAegHAMQgKARgOALQgNAKgQAFQgRAFgSAAQgZAAgTgHg");
	this.shape_6.setTransform(121,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AhOBnQgZgUAAgrIAyAAQgBAMAEAJQADAIAHAFQAHAFAKACQAJACALAAQAHAAAIgCQAIgCAHgEQAGgEAEgGQAEgGAAgJQAAgJgFgFQgFgGgJgEIgTgHIgUgGIgWgIQgLgEgIgHQgJgHgFgLQgFgKAAgPQAAgUAIgOQAJgOANgJQANgIARgEQAQgEARAAQASAAAQAEQAQAEAMAJQAMAJAHAPQAHAOAAAUIgxAAQAAgJgDgHQgDgHgGgEQgGgFgIgBIgQgCIgOABQgIACgFADQgGAEgEAFQgEAGAAAIQAAAJAHAFQAGAGAJAEIASAGIAPADIAaAJQALAFAJAGQAIAIAFALQAEALAAAPQAAALgCAJQgCAJgEAHQgJAPgOAKQgNAJgSAEQgRAEgQAAQgxAAgYgUg");
	this.shape_7.setTransform(96.8,22.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("Ag5B1QgRgEgOgIQgNgIgHgOQgEgGgDgJQgCgHAAgLIACgRIAEgSIAciHIA0AAIgdCHIgBAHIgCAIIgBAIIAAAIIABAJQACAGAFAFQAFAEAIAEQAJADAOAAQAQAAAJgEQAJgEAGgHQAHgIADgLIAGgYIAdiLIA0AAIgcCJQgFAYgJAUQgHATgOANQgNAOgTAGQgKAEgMACIgYABQgRAAgQgDg");
	this.shape_8.setTransform(73.9,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AA1B2IAri7IgBAAIhjC7IgnAAIgXi7IgBAAIgjC7IgwAAIAxjrIBHAAIATCqIAAAAIBaiqIBIAAIgxDrg");
	this.shape_9.setTransform(45,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,0,300,43.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AhxB2IAwjrICzAAIgJAsIh+AAIgLAyIB1AAIgIAnIh1AAIgMA6ICAAAIgJAsg");
	this.shape.setTransform(235.8,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AAWB2IAWhmIheAAIgVBmIg1AAIAyjrIA0AAIgTBbIBfAAIAThbIA0AAIgyDrg");
	this.shape_1.setTransform(211.4,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgyB0QgUgGgNgOQgcgaAAgzQAAgcAJgZQAJgaARgUQARgTAYgMQAXgLAdAAQAVAAARAFQASAGAMALQAHAFAFAHIAIAPQADAIACAKIACAUIg0AAQAAgLgDgIQgDgIgGgGQgMgLgSAAQgKAAgIACQgJADgHAEQgPAJgJAPQgJAOgFASQgFAQAAARQAAAMADALQAEALAGAJQAGAIALAFQAKAFAOAAQAJAAAKgEQAJgEAHgGQAIgHAFgIQAFgJABgJIA0AAQgMAegHAMQgKARgOALQgNAKgQAFQgRAFgSAAQgZAAgTgHg");
	this.shape_2.setTransform(185.9,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("ABAB2IgIg1IhXAAIgdA1Ig3AAICKjrIA1AAIAoDrgAgKAbIA+AAIgMhdIAAAAg");
	this.shape_3.setTransform(159,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("Ah0B2IAxjrIBUAAQAyAAAZAYQANAMAGARQAGARAAAWQAAAegIAaQgEANgHAMQgGALgJAKQgRATgZALQgaALghAAgAg3BKIAnAAQATAAAQgHQAPgHAKgNQALgMAFgRQAGgQAAgSQAAgNgDgKQgDgLgGgIQgHgHgJgEQgKgEgOAAIgmAAg");
	this.shape_4.setTransform(136.1,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("ABAB2IgIg1IhXAAIgdA1Ig3AAICKjrIA1AAIAoDrgAgKAbIA+AAIgMhdIAAAAg");
	this.shape_5.setTransform(110,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AhyB2IAyjrICzAAIgJAsIh/AAIgLAyIB2AAIgJAnIh1AAIgNA6ICCAAIgKAsg");
	this.shape_6.setTransform(89.3,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AAWB2IAWhmIheAAIgWBmIgzAAIAxjrIA0AAIgTBbIBeAAIAUhbIAzAAIgxDrg");
	this.shape_7.setTransform(64.8,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,43.4), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-15.7,-10.4,1,1,0,0,0,2.5,2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("AAUgfQADACABACQAMAKAAAPQAAANgMALQgKALgOAAQgOAAgLgLQgJgLAAgNQAAgPAJgKQACgCADgC");
	this.shape.setTransform(14.7,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","rgba(0,0,0,0.749)"],[0,0.894],2,-2.3,0,2,-2.3,6.4).s().p("AgZAWQgJgLAAgNQAAgPAJgLIAFgDIAoAAIAFADQAKALABAPQgBANgKALQgLAKgOABQgOgBgLgKg");
	this.shape_1.setTransform(14.7,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-13.4,38,27.4);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2copy2();
	this.instance.parent = this;
	this.instance.setTransform(150,11.7,1,1,0,0,0,150,21.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-2,-10,307,79), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2copy();
	this.instance.parent = this;
	this.instance.setTransform(150,21.7,1,1,0,0,0,150,21.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-2,0,307,52), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(150,21.7,1,1,0,0,0,150,21.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-2,0,307,52), null);


(lib.masterbubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.1,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.masterbubble, new cjs.Rectangle(-30.4,-19.7,38.5,27.9), null);


(lib.bubblemove2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.masterbubble();
	this.instance.parent = this;
	this.instance.setTransform(-6.7,-3.7,1,1,0,0,0,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-11.1,regY:-5.8,scaleX:0.83,scaleY:0.83,x:-60.9,y:-29.9,alpha:0.767},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:-76.8,y:-30.4,alpha:0.68},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-89.6,y:-28.5,alpha:0.618},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-99.8,y:-25.6,alpha:0.568},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-107.9,y:-22.3,alpha:0.525},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-114.6,y:-19.3,alpha:0.489},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-119.4,y:-17.3,alpha:0.456},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-123.9,y:-15.8,alpha:0.427},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-128.2,y:-14.6,alpha:0.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-132.3,y:-13.6,alpha:0.376},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-136.2,y:-13,alpha:0.354},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-139.9,y:-12.6,alpha:0.333},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-143.5,y:-12.4,alpha:0.314},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-146.9,alpha:0.296},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:-150.1,y:-12.5,alpha:0.279},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:-153.2,y:-12.9,alpha:0.263},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-156.1,y:-13.4,alpha:0.248},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:-158.9,y:-14,alpha:0.235},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:-161.5,y:-14.7,alpha:0.221},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:-164,y:-15.5,alpha:0.209},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:-166.3,y:-16.3,alpha:0.197},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-168.4,y:-17.2,alpha:0.186},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:-170.5,y:-18.2,alpha:0.175},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-172.4,y:-19.1,alpha:0.165},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:-174.1,y:-20.1,alpha:0.156},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-175.8,y:-21.1,alpha:0.147},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-177.3,y:-22.1,alpha:0.138},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-178.7,y:-23,alpha:0.13},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-180.1,y:-24,alpha:0.122},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-181.3,y:-24.9,alpha:0.114},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-182.4,y:-25.8,alpha:0.107},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:-183.5,y:-26.7,alpha:0.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-184.6,y:-27.5,alpha:0.094},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-185.5,y:-28.4,alpha:0.088},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-186.4,y:-29.1,alpha:0.082},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:-187.2,y:-29.9,alpha:0.077},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-188,y:-30.6,alpha:0.071},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-188.7,y:-31.4,alpha:0.066},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:-189.4,y:-32,alpha:0.061},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-190,y:-32.7,alpha:0.057},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-190.6,y:-33.3,alpha:0.053},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:-191.2,y:-33.9,alpha:0.048},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-191.7,y:-34.5,alpha:0.045},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-192.2,y:-35,alpha:0.041},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-192.7,y:-35.5,alpha:0.037},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:-193.1,y:-36,alpha:0.034},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-193.5,y:-36.5,alpha:0.031},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-193.8,y:-36.9,alpha:0.028},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-194.2,y:-37.3,alpha:0.025},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-194.5,y:-37.7,alpha:0.023},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:-194.8,y:-38,alpha:0.02},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-195.1,y:-38.4,alpha:0.018},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-195.4,y:-38.7,alpha:0.016},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-195.6,y:-39,alpha:0.014},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-195.9,y:-39.2,alpha:0.012},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-196,y:-39.5,alpha:0.011},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-196.2,y:-39.7,alpha:0.009},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-196.4,y:-39.9,alpha:0.008},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:-196.6,y:-40.1,alpha:0.006},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-196.7,y:-40.3,alpha:0.005},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-196.8,y:-40.4,alpha:0.004},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-197,y:-40.6,alpha:0.003},0).wait(1).to({x:-197.1,y:-40.7,alpha:0.002},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:-197.2,y:-40.8},0).wait(1).to({y:-40.9,alpha:0.001},0).wait(1).to({x:-197.3,y:-41},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0},0).wait(1).to({x:-197.4},0).wait(1).to({y:-41.1},0).wait(1).to({regX:3.6,regY:3.6,x:-193.7,y:-38.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-26.5,37.5,26.9);


(lib.bubblemove1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.masterbubble();
	this.instance.parent = this;
	this.instance.setTransform(0.3,-7,1,1,0,0,0,3.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-11.1,regY:-5.8,scaleX:0.85,scaleY:0.85,x:-49.6,y:-37.1,alpha:0.69},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-62.1,y:-44.5,alpha:0.58},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-71,y:-49.6,alpha:0.502},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-77.9,y:-53.7,alpha:0.441},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-83.6,y:-57.1,alpha:0.39},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:-88.5,y:-59.9,alpha:0.348},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:-92.7,y:-62.4,alpha:0.311},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-96.3,y:-64.5,alpha:0.279},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-99.6,y:-66.4,alpha:0.25},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:-102.5,y:-68.2,alpha:0.224},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-105,y:-69.7,alpha:0.201},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-107.4,y:-71,alpha:0.181},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:-109.5,y:-72.3,alpha:0.162},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-111.5,y:-73.4,alpha:0.145},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-113.2,y:-74.5,alpha:0.13},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-114.8,y:-75.4,alpha:0.116},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-116.2,y:-76.3,alpha:0.103},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:-117.6,y:-77,alpha:0.091},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-118.8,y:-77.8,alpha:0.081},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:-119.9,y:-78.4,alpha:0.071},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-120.9,y:-79,alpha:0.062},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-121.8,y:-79.5,alpha:0.054},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-122.6,y:-80,alpha:0.047},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-123.3,y:-80.4,alpha:0.041},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-124,y:-80.8,alpha:0.035},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-124.6,y:-81.2,alpha:0.029},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-125.1,y:-81.5,alpha:0.025},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-125.6,y:-81.7,alpha:0.02},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-126,y:-82,alpha:0.017},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-126.4,y:-82.2,alpha:0.014},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-126.7,y:-82.4,alpha:0.011},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-127,y:-82.6,alpha:0.008},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-127.2,y:-82.7,alpha:0.006},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-127.4,y:-82.8,alpha:0.004},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-127.6,y:-82.9,alpha:0.003},0).wait(1).to({x:-127.7,y:-83,alpha:0.002},0).wait(1).to({x:-127.8,y:-83.1,alpha:0.001},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-127.9,alpha:0},0).wait(2).to({regX:3.6,regY:3.6,x:-120.6,y:-78.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-29.9,37.5,26.9);


(lib.pill = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.bubblemove2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.3,17.4,1.2,1.2,0,180,0,3.6,3.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},35).wait(12));

	// Layer 11
	this.instance_1 = new lib.bubblemove2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,17.4,1.2,1.2,0,180,0,3.6,3.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},36).wait(12));

	// Layer 10
	this.instance_2 = new lib.bubblemove2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.6,27.4,1,1,0,180,0,3.6,3.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({_off:true},30).wait(12));

	// Layer 9
	this.instance_3 = new lib.bubblemove2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(31.3,17.5,1.563,1.563,0,0,0,3.6,3.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},34).wait(12));

	// Layer 8
	this.instance_4 = new lib.bubblemove2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.6,47.5,1.25,1.25,0,0,0,3.6,3.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({_off:true},37).wait(12));

	// Layer 7
	this.instance_5 = new lib.bubblemove2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(29.4,37.5,1,1,0,0,0,3.6,3.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true},39).wait(12));

	// Layer 12
	this.instance_6 = new lib.bubblemove1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.4,7.4,1,1,0,180,0,3.6,3.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({_off:true},35).wait(12));

	// Layer 5
	this.instance_7 = new lib.bubblemove1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(69.3,16.5,1.563,1.563,0,180,0,3.6,3.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({_off:true},38).wait(12));

	// Layer 4
	this.instance_8 = new lib.bubblemove1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-10.6,23.4,1,1,0,180,0,3.6,3.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({_off:true},33).wait(12));

	// Layer 13
	this.instance_9 = new lib.bubblemove1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-4.6,60.5,1,1,0,0,0,3.6,3.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({_off:true},32).wait(12));

	// Layer 15
	this.instance_10 = new lib.bubblemove1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(85.3,50.5,1.25,1.25,0,0,0,3.6,3.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({_off:true},37).wait(12));

	// Layer 3
	this.instance_11 = new lib.bubblemove1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-24.6,50.5,1,1,0,0,0,3.6,3.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({_off:true},35).wait(12));

	// Layer 2
	this.instance_12 = new lib.bubblemove1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(9.3,27.5,1.25,1.25,0,0,0,3.6,3.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({_off:true},39).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib._300x600_advil_relief = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-101.9,286.3,1,1,0,0,0,82,29.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:91.5,regY:34,x:-90.7,y:290.8},0).wait(1).to({x:-85.2,y:290.7},0).wait(1).to({x:-75.5},0).wait(1).to({x:-61.2,y:290.6},0).wait(1).to({x:-41.9,y:290.4},0).wait(1).to({x:-17.5,y:290.2},0).wait(1).to({x:11.9,y:290},0).wait(1).to({x:45.5,y:289.7},0).wait(1).to({x:82.3,y:289.4},0).wait(1).to({x:120.5,y:289.1},0).wait(1).to({x:158.6,y:288.8},0).wait(1).to({x:195,y:288.5},0).wait(1).to({x:228.6,y:288.3},0).wait(1).to({x:259,y:288},0).wait(1).to({x:285.7,y:287.8},0).wait(1).to({x:308.9,y:287.7},0).wait(1).to({x:328.7,y:287.5},0).wait(1).to({x:345.3,y:287.4},0).wait(1).to({x:359,y:287.3},0).wait(1).to({x:370,y:287.2},0).wait(1).to({x:378.6,y:287.1},0).wait(1).to({x:384.9},0).wait(1).to({x:389.2,y:287},0).wait(1).to({x:391.7},0).wait(1).to({regX:82,regY:29.5,x:383,y:282.5},0).wait(33).to({x:386.1,y:287.7},0).wait(1).to({regX:91.5,regY:34,x:393.3,y:292.2},0).wait(1).to({x:386.1},0).wait(1).to({x:373.2},0).wait(1).to({x:354.1},0).wait(1).to({x:328.4,y:292.3},0).wait(1).to({x:296.1},0).wait(1).to({x:258.1},0).wait(1).to({x:215.9},0).wait(1).to({x:172,y:292.4},0).wait(1).to({x:128.8},0).wait(1).to({x:88.4,y:292.5},0).wait(1).to({x:51.9},0).wait(1).to({x:20.1},0).wait(1).to({x:-7.2},0).wait(1).to({x:-29.9},0).wait(1).to({x:-48.6,y:292.6},0).wait(1).to({x:-63.5},0).wait(1).to({x:-75},0).wait(1).to({x:-83.4},0).wait(1).to({x:-89.2},0).wait(1).to({x:-92.4},0).wait(1).to({regX:82,regY:29.5,x:-103,y:288.1},0).to({_off:true},39).wait(91));

	// pillright
	this.instance_1 = new lib.pill("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,315.9,1,1,0,0,180,82,29.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({_off:true},45).wait(104));

	// pillleft
	this.instance_2 = new lib.pill("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(221,307.5,1,1,0,0,0,82,29.5);

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.1,353.7,0.1,0.1,0,0,0,95.5,27);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},57).to({state:[]},34).to({state:[{t:this.instance_3}]},121).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(212).to({_off:false},0).wait(1).to({regX:92.1,regY:38.3,scaleX:0.11,scaleY:0.11,x:152.7,y:354.7},0).wait(1).to({scaleX:0.14,scaleY:0.14,y:354.5},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:152.5,y:353.9},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:152,y:352.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:151.2,y:350.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:150.3,y:348.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:149.9,y:347.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:149.7,y:346.9},0).wait(1).to({regX:95.3,regY:26.7,scaleX:1,scaleY:1,x:153.1,y:335.5},0).wait(43));

	// legal
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151,236.5,1,1,0,0,0,150,13.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240).to({_off:false},0).to({alpha:1},9).wait(15));

	// Layer 8
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88,197,1,1,0,0,0,52,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(226).to({_off:false},0).to({alpha:1},11).wait(27));

	// Layer 7
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(220.5,474.5,1,1,0,0,0,59.5,36.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(226).to({_off:false},0).to({alpha:1},11).wait(27));

	// fastrelief
	this.instance_7 = new lib.Symbol1copy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,293.7,0.15,0.15,0,0,0,150,21.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(131).to({_off:false},0).wait(1).to({regX:149.4,regY:27,scaleX:0.22,scaleY:0.22,x:149.9,y:294.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:149.8,y:295.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:149.7,y:296.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:149.5,y:297.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:298},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:298.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:298.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:298.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:149.4,y:298.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:298.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:299},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:299.1},0).wait(1).to({regX:150,regY:21.7,scaleX:1,scaleY:1,x:150.1,y:293.8},0).wait(24).to({regX:149.4,regY:27,x:149.5,y:298.8},0).wait(1).to({y:298.2},0).wait(1).to({y:296.8},0).wait(1).to({y:294.6},0).wait(1).to({y:290.9},0).wait(1).to({y:284.7},0).wait(1).to({y:272.5},0).wait(1).to({y:249},0).wait(1).to({y:236},0).wait(1).to({y:230.4},0).wait(1).to({y:227.7},0).wait(1).to({y:226.4},0).wait(1).to({regX:150,regY:21.7,x:150.1,y:220.8},0).wait(20).to({regX:149.4,regY:27,scaleX:0.98,scaleY:0.98,x:149.5,y:225.6,alpha:0.973},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:223.8,alpha:0.857},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:149.7,y:219.5,alpha:0.576},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:149.8,y:215,alpha:0.287},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:212.6,alpha:0.129},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:149.9,y:211.3,alpha:0.048},0).wait(1).to({scaleX:0.21,scaleY:0.21,y:210.7,alpha:0.01},0).wait(1).to({regX:150,regY:21.8,scaleX:0.2,scaleY:0.2,x:150,y:209.5,alpha:0},0).to({_off:true},1).wait(54));

	// pillbox
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(122.1,315,1,1,0,0,0,80.5,47);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169).to({_off:false},0).wait(1).to({regX:109,regY:69,x:150.6,y:337.1,alpha:0.003},0).wait(1).to({y:337.3,alpha:0.014},0).wait(1).to({x:150.5,y:337.7,alpha:0.037},0).wait(1).to({y:338.4,alpha:0.075},0).wait(1).to({x:150.4,y:339.7,alpha:0.141},0).wait(1).to({x:150.2,y:342,alpha:0.264},0).wait(1).to({x:149.8,y:347.4,alpha:0.548},0).wait(1).to({x:149.4,y:352.6,alpha:0.822},0).wait(1).to({x:149.3,y:354.6,alpha:0.926},0).wait(1).to({x:149.2,y:355.5,alpha:0.973},0).wait(1).to({y:355.9,alpha:0.994},0).wait(1).to({regX:80.5,regY:47,x:120.7,y:334,alpha:1},0).wait(24).to({regX:109,regY:69,x:149.2,y:355.1},0).wait(1).to({y:351.6},0).wait(1).to({y:344.2},0).wait(1).to({y:329.4},0).wait(1).to({y:302.5},0).wait(1).to({y:272.8},0).wait(1).to({y:254},0).wait(1).to({y:242.9},0).wait(1).to({y:236.3},0).wait(1).to({y:232.5},0).wait(1).to({y:230.6},0).wait(1).to({regX:80.5,regY:47,x:120.7,y:208},0).wait(48));

	// muscle pain
	this.instance_9 = new lib.Symbol1copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,293.7,0.15,0.15,0,0,0,150,21.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73).to({_off:false},0).wait(1).to({regX:149.6,regY:23.9,scaleX:0.22,scaleY:0.22,x:149.9,y:294.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:149.8,y:294.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:294.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:149.7,y:295.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:295.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:149.6,y:295.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:149.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:149.6,y:295.8},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:295.9},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:296},0).wait(1).to({regX:150,regY:21.7,scaleX:1,scaleY:1,x:150.1,y:293.8},0).to({_off:true},33).wait(143));

	// headache
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,293.7,0.15,0.15,0,0,0,150,21.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(1).to({regX:149.8,regY:23.9,scaleX:0.22,scaleY:0.22,y:294.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:149.9,y:294.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:294.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:149.8,y:295.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:295.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:295.7},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:295.8},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:295.9},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:296},0).wait(1).to({regX:150,regY:21.7,scaleX:1,scaleY:1,x:150.1,y:293.8},0).to({_off:true},40).wait(199));

	// bg
	this.instance_11 = new lib.bb_bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(264));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_advil_relief_atlas_.png", id:"300x600_advil_relief_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;