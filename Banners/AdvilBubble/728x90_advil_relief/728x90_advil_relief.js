(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_advil_relief_atlas_", frames: [[348,92,119,73],[0,0,728,90],[0,92,161,94],[469,92,104,30],[0,188,557,24],[163,92,183,68]]}
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
	this.spriteSheet = ss["728x90_advil_relief_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_bg = function() {
	this.spriteSheet = ss["728x90_advil_relief_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_box = function() {
	this.spriteSheet = ss["728x90_advil_relief_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_cta = function() {
	this.spriteSheet = ss["728x90_advil_relief_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_legal = function() {
	this.spriteSheet = ss["728x90_advil_relief_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bb_pill = function() {
	this.spriteSheet = ss["728x90_advil_relief_atlas_"];
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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AgRAOIAGgcIAdAAIgGAcg");
	this.shape.setTransform(273.6,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AgnBEIAXhuIgqAAIAFgZIBwAAIgFAZIgpAAIgWBug");
	this.shape_1.setTransform(266.4,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgtA8QgOgMAAgZIAcAAQAAAHACAFQACAFAEADQAEADAGABIAMABIAIgBIAIgEIAGgGQADgDAAgFQAAgFgDgDQgDgDgFgCIgLgEIgMgEIgMgFQgGgDgFgCQgFgFgDgGQgDgGAAgJQAAgLAFgIQAEgIAIgFQAIgFAJgCQAKgDAJAAQAKAAAJADQAKACAHAFQAHAFAEAJQAEAIAAAMIgdAAQABgGgCgEQgCgEgDgCQgEgCgEgCIgKgBIgHABIgIADQgEACgCADQgCAEAAAEQAAAFAEAEQAEADAFACIAKAEIAJABIAOAFQAHADAFADQAFAFACAGQADAHAAAIIgBALQgCAGgCAEQgFAJgIAFQgIAGgKACQgKACgIAAQgdAAgOgLg");
	this.shape_2.setTransform(252.2,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AAlBEIgFgeIgxAAIgRAeIggAAIBPiHIAfAAIAXCHgAgFAPIAjAAIgHg1IAAAAg");
	this.shape_3.setTransform(237.4,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("Ag9BEIAciHIBgAAIgGAZIhBAAIgHAgIA5AAIgFAWIg5AAIgMA4g");
	this.shape_4.setTransform(226.1,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AgeALIAFgVIA4AAIgFAVg");
	this.shape_5.setTransform(214.8,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("AgxBEIAciHIAdAAIgWBuIBAAAIgFAZg");
	this.shape_6.setTransform(204.3,13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AgcBEIAciHIAdAAIgdCHg");
	this.shape_7.setTransform(195.6,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AgtBEIgPiHIAeAAIAJBlIAAAAIAzhlIAfAAIhICHg");
	this.shape_8.setTransform(187.2,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AhDBEIAdiHIAwAAQAdAAAOAOQAHAHAEAKQADAJAAANQAAARgEAPIgHAOQgDAHgFAFQgKALgOAGQgQAHgSAAgAggArIAYAAQAJAAAJgEQAJgFAHgHQAGgHADgKQACgJAAgKQABgHgCgGQgCgGgDgFQgDgEgHgCQgFgDgIAAIgWAAg");
	this.shape_9.setTransform(171.4,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AAlBEIgFgeIgxAAIgRAeIggAAIBPiHIAfAAIAXCHgAgFAPIAjAAIgHg1IAAAAg");
	this.shape_10.setTransform(155.9,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AgmBEIARhPIgQAAIAFgSIAQAAIAEgQQACgHAEgGQAEgEAGgDQAGgCALgBIAJABIAJABIgFATIgEAAIgFAAQgFAAgCACQgDABgCACIgBAGIgCAHIATAAIgEASIgUAAIgQBPg");
	this.shape_11.setTransform(141,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgYAxQgHgDgGgFQgGgFgDgIQgDgIAAgLQAAgIAEgOQAEgLAGgIQAIgJAKgFQAEgCAGgBIALgCQAKAAAJADQAIADAGAFQAGAGADAIQAEAIAAAKIgCAPIhHAAIgBABIAAACIAAACQAAAFACADIAEAGQAGAGALAAQACAAAEgCIAFgDIAEgEIADgFIAcAAQgDAIgFAHQgFAGgFAEQgGAFgJACQgIACgKAAQgJAAgJgDgAgDgdIgIAFQgEADgCAEIgDAIIAsAAIgBgIQgBgEgCgDQgCgDgDgCQgEgBgFAAQgGAAgDABg");
	this.shape_12.setTransform(130.1,15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AgbBEIAVhhIAaAAIgUBhgAgEgtIAFgWIAbAAIgFAWg");
	this.shape_13.setTransform(121.6,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AgbBEIAciHIAbAAIgcCHg");
	this.shape_14.setTransform(115.7,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AgYAxQgIgDgFgFQgGgFgDgIQgDgIAAgLQAAgIAEgOQADgLAIgIQAGgJALgFQAFgCAFgBIALgCQAKAAAJADQAIADAGAFQAGAGAEAIQADAIAAAKIgCAPIhHAAIgBABIAAACIAAACQABAFABADIAEAGQAGAGAKAAQAEAAACgCIAGgDIAEgEIAEgFIAbAAQgEAIgEAHQgFAGgFAEQgHAFgIACQgIACgKAAQgJAAgJgDgAgEgdIgHAFQgDADgCAEIgEAIIAsAAIgBgIQAAgEgDgDQgCgDgDgCQgDgBgHAAQgFAAgEABg");
	this.shape_15.setTransform(106.4,15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF200").s().p("AgpAyIAUhhIAZAAIgEASIAAAAQACgFAEgEQADgEAFgCQAJgFALgBIAIABIgFAaIgGAAIgGgBQgHAAgGACQgFADgEAEQgDAFgCAGIgDALIgKArg");
	this.shape_16.setTransform(96.9,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF200").s().p("AALAyIAMg4IABgGIABgGQAAgEgEgDQgEgDgFAAQgGAAgFACQgDACgEAEQgDAEgCAFIgEALIgLAyIgaAAIAUhhIAaAAIgDAOIAAAAQAMgRAWAAQAOABAHAGQAHAHAAANIAAAEIgBAEIgBAGIgBADIgMA4g");
	this.shape_17.setTransform(79.1,15.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF200").s().p("AgbBEIAUhhIAbAAIgUBhgAgDgtIADgWIAcAAIgFAWg");
	this.shape_18.setTransform(70.7,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF200").s().p("AgfAyQgHgCgDgEQgFgDgBgFQgCgFAAgFQAAgHACgGQADgFAFgFQAFgDAGgDQAHgCAJgBIAQgCIALgCIAIgDQACgDAAgFQAAgDgCgDIgFgDIgEgCIgHgBQgGAAgFAEQgGADgCAIIgZAAQABgJAFgHQAFgGAGgEQAGgDAIgCQAHgCAIAAIAOABQAHABAGADQAGADAEAFQAEAFAAAIQAAAHgCAKIgJAmIgBAHIAAAHIABAFIgbAAIAAgJQgGAGgHADQgIADgJAAQgHAAgGgCgAAIAGIgKABIgIABQgEABgCACQgDABgBADQgCADAAAFQgBAFAFADQAEADAGAAQAHAAADgCQAEgCADgDIAFgHIADgIIADgKQgFADgHABg");
	this.shape_19.setTransform(61.1,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF200").s().p("Ag6BEIAciEIAaAAIgDAMIABABQAEgIAHgEQAIgEAJAAQAJAAAHADQAHADAFAFQAJAKAAASQAAAMgDAMQgDAKgHAKIgHAIIgJAGQgKAGgOAAIgIgBIgHgDQgEgCgDgDQgDgDgCgEIAAAAIgKAwgAAAgqQgEAEgEAGQgEAGgCAIQgCAHAAAGQAAAJAFAGQADADADABQAEACAEAAQAIAAAFgEQAGgEADgGQAEgGACgHIABgNIgBgJIgEgHQgCgDgDgCQgEgBgFAAQgHAAgGAEg");
	this.shape_20.setTransform(48.4,17.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF200").s().p("AgLBAQgFgBgEgCQgDgCgDgEQgCgEAAgGIABgEIABgFIALg0IgSAAIAEgSIASAAIAGgeIAaAAIgGAeIATAAIgEASIgTAAIgKAwIgBADIAAABIABAFIACACIADABIADAAIAKgBIgFAVIgIAAIgIABg");
	this.shape_21.setTransform(33.2,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF200").s().p("AgYAxQgHgDgGgFQgGgFgDgIQgDgIAAgLQAAgIAEgOQAEgLAGgIQAHgJAKgFQAFgCAGgBIALgCQALAAAIADQAIADAGAFQAGAGADAIQAEAIAAAKIgBAPIhIAAIgBABIAAACIAAACQAAAFACADIAEAGQAFAGAMAAQACAAAEgCIAFgDIAEgEIADgFIAbAAQgDAIgEAHQgFAGgGAEQgFAFgIACQgJACgKAAQgJAAgJgDgAgDgdIgIAFQgEADgCAEIgDAIIAsAAIgBgIQAAgEgDgDQgBgDgEgCQgEgBgFAAQgGAAgDABg");
	this.shape_22.setTransform(22.7,15.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF200").s().p("AgeBDQgLgDgIgJQgQgPAAgdQAAgPAFgPQAGgPAJgMQAKgLAOgGQANgHAQAAQAMAAALADQAKADAIAGQAIAGAEAIQAFAJAAANIgeAAQAAgGgCgEQgCgFgEgCQgDgDgFgCQgFgBgGAAQgGAAgEABIgJAFQgJAEgFAJQgGAIgCAKQgDAJAAAKQAAAIACAFQACAHADAEQAEAGAGACQAGADAIAAQAHAAAHgCQAGgDAEgDQAFgEADgFIAFgMIggAAIAFgVIA5AAIgPBIIgTAAIAAgOIAAAAIgHAIIgJAFQgJAEgIAAQgPAAgLgEg");
	this.shape_23.setTransform(9.3,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,280.4,26.7), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_legal();
	this.instance.parent = this;
	this.instance.setTransform(163,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(163,-157,557,24), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_advillogo();
	this.instance.parent = this;
	this.instance.setTransform(433,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(433,-153,119,73), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_cta();
	this.instance.parent = this;
	this.instance.setTransform(438,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(438,-156,104,30), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,161,94), null);


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
	this.shape.graphics.f("#FFF200").s().p("AhfBoIAsjOICSAAIgIAmIhlAAIgJAvIBXAAIgHAjIhYAAIgSBWg");
	this.shape.setTransform(310.7,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF200").s().p("AhkBoIAsjOICdAAIgIAmIhwAAIgJAsIBnAAIgHAjIhoAAIgKAyIBxAAIgIAng");
	this.shape_1.setTransform(290.9,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF200").s().p("AgsBoIAsjOIAtAAIgsDOg");
	this.shape_2.setTransform(275.8,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF200").s().p("AhMBoIArjOIAtAAIgiCnIBjAAIgIAng");
	this.shape_3.setTransform(261.4,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF200").s().p("AhkBoIAsjOICdAAIgIAmIhwAAIgJAsIBnAAIgHAjIhoAAIgKAyIBxAAIgIAng");
	this.shape_4.setTransform(243.5,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF200").s().p("AAhBoIgCgHIAAgHIABgVIABgVQAAgIgCgFQgCgEgEgDQgEgDgFgBIgNgBIgqAAIgQBRIguAAIArjOIBiAAQAOgBALADQAMADAIAGQAIAHAFAKQAEALAAAPQAAAKgDAKQgEAKgGAHQgHAHgIAEQgJAFgKACIAAAAQAGACAEAEQAFADACAFQAEAKAAANIgBAQIgBAUIABANIACALgAgggJIAqAAQAJAAAIgCQAJgBAGgEQAGgEAFgHQADgGAAgIQABgJgDgFQgDgFgFgDQgEgCgGgBIgNgBIgqAAg");
	this.shape_5.setTransform(221.7,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF200").s().p("Ag8BoIAjioIhBAAIAJgmICrAAIgIAmIg+AAIgiCog");
	this.shape_6.setTransform(194.5,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF200").s().p("AhFBbQgVgSAAgmIArAAQgBALAEAHQADAIAGAEQAGAEAIACQAJACAKAAQAGAAAGgBQAHgCAGgEQAGgDADgGQAEgFAAgIQAAgIgFgEQgEgFgIgEIgQgGIgSgFIgUgHQgJgEgHgGQgIgGgEgJQgFgJAAgOQAAgRAIgMQAHgNALgHQAMgIAPgEQAOgDAOAAQAQAAAOADQAOAEALAIQALAIAGANQAGAMAAASIgrAAQAAgIgDgGQgCgGgFgEQgFgEgHgBIgPgCIgMABQgHACgFADQgFADgDAFQgDAFAAAHQAAAHAFAGQAGAFAIADIAPAFIAOADIAWAIQAKAEAIAGQAHAGAEAKQAEAJAAAOQAAAKgCAHQgCAIgDAHQgIANgMAIQgMAIgPAEQgPADgOAAQgsAAgVgRg");
	this.shape_7.setTransform(173.4,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF200").s().p("AA4BoIgGguIhNAAIgaAuIgwAAIB5jOIAvAAIAjDOgAgJAYIA3AAIgLhSIAAAAg");
	this.shape_8.setTransform(151.2,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF200").s().p("AheBoIArjOICSAAIgIAmIhkAAIgKAvIBXAAIgHAjIhYAAIgSBWg");
	this.shape_9.setTransform(134.6,20);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF200").s().p("AguASIAHgjIBWAAIgHAjg");
	this.shape_10.setTransform(117.8,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF200").s().p("AhMBoIArjOIAtAAIgiCnIBjAAIgIAng");
	this.shape_11.setTransform(102.3,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF200").s().p("AgsBoIAsjOIAtAAIgsDOg");
	this.shape_12.setTransform(89.5,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF200").s().p("AhEBoIgYjOIAuAAIANCaIABAAIBNiaIAwAAIhuDOg");
	this.shape_13.setTransform(77.3,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF200").s().p("AhmBoIArjOIBKAAQAsgBAWAVQALALAGAPQAFAPAAATQAAAagHAXQgEAMgGAKQgFAKgIAJQgPAQgWAKQgXAKgdAAgAgxBBIAjAAQARABANgHQAOgGAJgLQAJgLAFgPQAEgPAAgPQAAgLgCgKQgCgIgGgIQgFgGgJgEQgJgDgMAAIghAAg");
	this.shape_14.setTransform(53.7,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("AA4BoIgGguIhNAAIgaAuIgwAAIB5jOIAvAAIAjDOgAgJAYIA3AAIgLhSIAAAAg");
	this.shape_15.setTransform(30.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(0,0,342,38.6), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-2,-10,350,47), null);


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
	this.instance.setTransform(365,-58.3,1,1,0,0,0,150,21.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(213,-80,308,53), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},30).wait(17));

	// Layer 11
	this.instance_1 = new lib.bubblemove2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,17.4,1.2,1.2,0,180,0,3.6,3.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},31).wait(17));

	// Layer 10
	this.instance_2 = new lib.bubblemove2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.6,27.4,1,1,0,180,0,3.6,3.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({_off:true},25).wait(17));

	// Layer 9
	this.instance_3 = new lib.bubblemove2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(31.3,17.5,1.563,1.563,0,0,0,3.6,3.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},29).wait(17));

	// Layer 8
	this.instance_4 = new lib.bubblemove2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.6,47.5,1.25,1.25,0,0,0,3.6,3.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({_off:true},32).wait(17));

	// Layer 7
	this.instance_5 = new lib.bubblemove2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(29.4,37.5,1,1,0,0,0,3.6,3.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true},34).wait(17));

	// Layer 12
	this.instance_6 = new lib.bubblemove1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.4,7.4,1,1,0,180,0,3.6,3.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({_off:true},30).wait(17));

	// Layer 5
	this.instance_7 = new lib.bubblemove1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(69.3,16.5,1.563,1.563,0,180,0,3.6,3.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({_off:true},33).wait(17));

	// Layer 4
	this.instance_8 = new lib.bubblemove1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-10.6,23.4,1,1,0,180,0,3.6,3.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({_off:true},28).wait(17));

	// Layer 13
	this.instance_9 = new lib.bubblemove1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-4.6,60.5,1,1,0,0,0,3.6,3.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).to({_off:true},27).wait(17));

	// Layer 15
	this.instance_10 = new lib.bubblemove1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(85.3,50.5,1.25,1.25,0,0,0,3.6,3.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({_off:true},32).wait(17));

	// Layer 3
	this.instance_11 = new lib.bubblemove1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-24.6,50.5,1,1,0,0,0,3.6,3.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({_off:true},30).wait(17));

	// Layer 2
	this.instance_12 = new lib.bubblemove1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(9.3,27.5,1.25,1.25,0,0,0,3.6,3.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({_off:true},34).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib._728x90_advil_relief = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-103.9,39.5,1,1,0,0,0,82,29.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:91.5,regY:34,x:-93.2,y:44},0).wait(1).to({x:-89.5},0).wait(1).to({x:-83},0).wait(1).to({x:-73.7},0).wait(1).to({x:-61.2},0).wait(1).to({x:-45.5,y:43.9},0).wait(1).to({x:-26.3},0).wait(1).to({x:-3.6},0).wait(1).to({x:22.8},0).wait(1).to({x:52.9,y:43.8},0).wait(1).to({x:86.4},0).wait(1).to({x:123},0).wait(1).to({x:162.6,y:43.7},0).wait(1).to({x:204.4},0).wait(1).to({x:247.9,y:43.6},0).wait(1).to({x:292.2},0).wait(1).to({x:336.7,y:43.5},0).wait(1).to({x:380.6},0).wait(1).to({x:423.3,y:43.4},0).wait(1).to({x:464.3},0).wait(1).to({x:503.3},0).wait(1).to({x:540,y:43.3},0).wait(1).to({x:574.2},0).wait(1).to({x:605.9,y:43.2},0).wait(1).to({x:635.1},0).wait(1).to({x:661.7},0).wait(1).to({x:686},0).wait(1).to({x:707.8,y:43.1},0).wait(1).to({x:727.5},0).wait(1).to({x:745},0).wait(1).to({x:760.6},0).wait(1).to({x:774.2},0).wait(1).to({x:786,y:43},0).wait(1).to({x:796.1},0).wait(1).to({x:804.6},0).wait(1).to({x:811.6},0).wait(1).to({x:817.1},0).wait(1).to({x:821.3},0).wait(1).to({x:824.2},0).wait(1).to({x:825.9},0).wait(1).to({regX:82,regY:29.5,x:817,y:38.5},0).wait(33).to({x:816.1,y:39.5},0).wait(1).to({regX:91.5,regY:34,x:824.4,y:44},0).wait(1).to({x:820.6},0).wait(1).to({x:814.2},0).wait(1).to({x:804.9},0).wait(1).to({x:792.4},0).wait(1).to({x:776.7,y:43.9},0).wait(1).to({x:757.6},0).wait(1).to({x:734.9},0).wait(1).to({x:708.6},0).wait(1).to({x:678.6,y:43.8},0).wait(1).to({x:645.2},0).wait(1).to({x:608.5},0).wait(1).to({x:569,y:43.7},0).wait(1).to({x:527.3},0).wait(1).to({x:483.9,y:43.6},0).wait(1).to({x:439.7},0).wait(1).to({x:395.3,y:43.5},0).wait(1).to({x:351.5},0).wait(1).to({x:308.9,y:43.4},0).wait(1).to({x:267.9},0).wait(1).to({x:229},0).wait(1).to({x:192.4,y:43.3},0).wait(1).to({x:158.3},0).wait(1).to({x:126.6,y:43.2},0).wait(1).to({x:97.5},0).wait(1).to({x:71},0).wait(1).to({x:46.8},0).wait(1).to({x:25,y:43.1},0).wait(1).to({x:5.3},0).wait(1).to({x:-12.2},0).wait(1).to({x:-27.6},0).wait(1).to({x:-41.2},0).wait(1).to({x:-53,y:43},0).wait(1).to({x:-63.1},0).wait(1).to({x:-71.6},0).wait(1).to({x:-78.6},0).wait(1).to({x:-84.1},0).wait(1).to({x:-88.3},0).wait(1).to({x:-91.2},0).wait(1).to({x:-92.9},0).wait(1).to({regX:82,regY:29.5,x:-103,y:38.5},0).to({_off:true},29).wait(42));

	// pillright
	this.instance_1 = new lib.pill("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(290,75.5,1,1,0,0,180,82,29.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({_off:false},0).to({_off:true},35).wait(66));

	// pillleft
	this.instance_2 = new lib.pill("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(331,55.5,1,1,0,0,0,82,29.5);

	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(313.1,100.1,1,1,0,0,0,140.2,13.3);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.247)",0,3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},64).to({state:[]},40).to({state:[{t:this.instance_3}]},104).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(208).to({_off:false},0).wait(1).to({regX:139.1,regY:16.8,x:312,y:102.8},0).wait(1).to({y:99.9},0).wait(1).to({y:92.9},0).wait(1).to({y:80.7},0).wait(1).to({y:69.1},0).wait(1).to({y:61.1},0).wait(1).to({y:55.7},0).wait(1).to({y:51.9},0).wait(1).to({y:49.2},0).wait(1).to({y:47.3},0).wait(1).to({y:46},0).wait(1).to({y:45.1},0).wait(1).to({y:44.7},0).wait(1).to({regX:140.2,regY:13.3,x:313.1,y:41.1},0).wait(18));

	// legal
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151,236.5,1,1,0,0,0,150,13.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(215).to({_off:false},0).to({alpha:1},9).wait(16));

	// Layer 8
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88,197,1,1,0,0,0,52,15);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(221).to({_off:false},0).to({alpha:1},11).wait(8));

	// Layer 7
	this.instance_6 = new lib.Symbol8();
	this.instance_6.parent = this;
	this.instance_6.setTransform(220.5,194.5,1,1,0,0,0,59.5,36.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(227).to({_off:false},0).to({alpha:1},11).wait(2));

	// fastrelief
	this.instance_7 = new lib.Symbol1copy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(343,53.7,0.15,0.15,0,0,0,150,21.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).wait(1).to({regX:170.3,regY:11.4,scaleX:0.22,scaleY:0.22,x:346,y:51.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:346.1,y:51.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,y:49.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:346.2,y:49},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:48.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:48.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:48},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:47.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:47.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:47.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:346.3,y:47.5},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,x:346.2},0).wait(1).to({scaleX:1,scaleY:1,x:346.3},0).wait(1).to({regX:150,regY:21.7,scaleX:1,scaleY:1,x:326,y:57.8},0).wait(33).to({regX:170.3,regY:11.4,scaleX:1,scaleY:1,x:346.3,y:47.5,alpha:0.995},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:47.6,alpha:0.979},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:346.4,y:47.7,alpha:0.944},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:346.5,y:48,alpha:0.882},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:346.7,y:48.4,alpha:0.764},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:347.1,y:49.6,alpha:0.495},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:347.7,y:51,alpha:0.17},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:347.9,y:51.5,alpha:0.053},0).wait(1).to({scaleX:0.11,scaleY:0.11,x:348,y:51.6,alpha:0.011},0).wait(1).to({regX:150.5,regY:22,scaleX:0.1,scaleY:0.1,x:346,y:52.7,alpha:0},0).to({_off:true},4).wait(23));

	// pillbox
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(83.6,137,0.729,0.729,0,0,0,80.7,47.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(203).to({_off:false},0).wait(1).to({regX:80.5,regY:47,x:83.4,y:136.6},0).wait(1).to({y:135.6},0).wait(1).to({y:133.6},0).wait(1).to({y:130.1},0).wait(1).to({y:124.1},0).wait(1).to({y:112.9},0).wait(1).to({y:87},0).wait(1).to({y:62.1},0).wait(1).to({y:52.6},0).wait(1).to({y:48.3},0).wait(1).to({y:46.4},0).wait(1).to({regX:80.7,regY:47.1,x:83.6,y:46},0).wait(25));

	// muscle pain
	this.instance_9 = new lib.Symbol1copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(339,45.7,0.15,0.15,0,0,0,150,21.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).wait(1).to({regX:149.6,regY:23.9,scaleX:0.22,scaleY:0.22,x:338.9,y:46.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:339,y:46.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:339.2,y:46.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:339.3,y:46.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:339.4,y:46.8},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:339.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:46.9},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:339.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:339.5,y:47},0).wait(1).to({scaleX:1,scaleY:1,x:339.6,y:46.9},0).wait(1).to({scaleX:1,scaleY:1,x:339.5,y:47},0).wait(1).to({regX:150,regY:21.7,scaleX:1,scaleY:1,x:340,y:44.8},0).to({_off:true},52).wait(94));

	// headache
	this.instance_10 = new lib.Symbol1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(340,55.7,0.15,0.15,0,0,0,150,21.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).wait(1).to({regX:364.8,regY:-56.1,scaleX:0.22,scaleY:0.22,x:371.6,y:44.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:370.6,y:44.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:368.8,y:45.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:367.3,y:46.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:366.5,y:47},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:366,y:47.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:365.6,y:47.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:365.3,y:47.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:365.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:365.1,y:47.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:364.9,y:47.9},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,x:364.8},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:150,regY:21.7,scaleX:1,scaleY:1,x:150.1,y:125.8},0).to({_off:true},47).wait(168));

	// bg
	this.instance_11 = new lib.bb_bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_advil_relief_atlas_.png", id:"728x90_advil_relief_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;