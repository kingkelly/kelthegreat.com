(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib.bb_meat = function() {
	this.initialize(img.bb_meat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,132);// helper functions:

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


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAQIgFgGIgCgJQAAgFACgEIAFgHQAHgGAIgBQAJABAHAGIAFAHQACAEAAAFIgCAJIgFAGQgHAHgJgBQgIABgHgHg");
	this.shape.setTransform(383,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_1.setTransform(372,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AhBBOQgBAAAAAAQAAAAgBAAQAAAAAAgBQABAAAAgBIBEh2Ig4AAIAAgjIB4AAQABAAAAAAQABAAAAAAQAAABgBAAQAAABAAAAIhEB2IA+AAIAAAjg");
	this.shape_2.setTransform(357.1,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AhBBOQgBAAAAAAQAAAAgBAAQAAAAAAgBQABAAAAgBIBEh2Ig4AAIAAgjIB4AAQABAAAAAAQABAAAAAAQAAABgBAAQAAABAAAAIhEB2IA+AAIAAAjg");
	this.shape_3.setTransform(343.1,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_4.setTransform(332.6,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("Ag+BOIAAibIA/AAQAKAAAQAEQAMAEAHAIQAIAHAFALQADAKABAMQgBAMgDAJQgFAKgIAIQgHAHgMAEQgQAEgKAAIgUAAIAAAtgAgTgBIATAAQAKAAAFgFQAGgFgBgKQABgKgGgFQgFgGgKAAIgTAAg");
	this.shape_5.setTransform(322.3,-2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AhFBOIAAibIA9AAQAIAAAHABIAPAEQAHADAHAEIALAJQAGAFAEAGQAEAGADAHQADAIABAIQACAIAAAIQAAAJgCAIQgBAIgDAIQgDAHgEAGQgEAGgGAFIgLAJQgHAEgHADQgHADgIABQgHABgIAAgAgbArIAOAAQAKAAAGgDQAIgDAFgGQAGgFACgIQADgIAAgKQAAgJgDgIQgCgHgGgGQgFgGgIgDQgGgDgKAAIgOAAg");
	this.shape_6.setTransform(301.6,-2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag4BOIAAibIBtAAIAAAjIhCAAIAAAaIA3AAIAAAgIg3AAIAAAbIBGAAIAAAjg");
	this.shape_7.setTransform(287,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AAWBOIglg5IgNARIAAAoIgqAAIAAibIAqAAIAABBIAwhBIAtAAIg0BEIA6BXg");
	this.shape_8.setTransform(272.8,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_9.setTransform(256.5,-2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("Ag+BOIAAibIBDAAQAMAAAJADQAKACAGAFQAHAFAEAIQADAIAAAJQAAAHgBAGQgCAFgDAEQgFAIgKAEIAKADQAFADAEAFQAEAEADAGQACAHAAAIQAAALgEAIQgEAJgHAFQgIAGgLADQgLADgPAAgAgVAtIAYAAQAKAAAEgEQAEgEAAgIQAAgIgEgEQgFgEgJAAIgYAAgAgVgQIAVAAQAIAAAEgEQADgDAAgHQAAgHgDgDQgEgEgIAAIgVAAg");
	this.shape_10.setTransform(241.7,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAoAAIAACdQgBABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(220.2,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_12.setTransform(205.5,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgBBOIhJidIAsAAIAgBJIAehJIArAAIhJCdIgCACIgBgCg");
	this.shape_13.setTransform(190.9,-1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgIgDgGgEQgHgEgGgGIgLgLQgEgHgDgHQgEgHgBgIQgCgJAAgIQAAgIACgIQABgIAEgIQADgHAEgGIALgMIANgKIAOgHIAQgEIAPgBIARABIAPAEIAPAHIAMAKIAKAMQAFAGADAHQADAIACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAHgGAEIgMAKQgIAEgHADQgIADgHABQgIACgJAAQgIAAgHgCgAgQgoQgIADgGAGQgFAHgDAIQgDAIAAAIQAAAJADAIQADAIAFAGQAGAGAIADQAIADAIABQAJgBAJgDQAHgDAFgGQAFgGADgIQADgIAAgJQAAgIgDgIQgDgIgFgHQgFgGgHgDQgJgDgJAAQgIAAgIADg");
	this.shape_14.setTransform(174.4,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("Ag4BOIAAibIBtAAIAAAjIhCAAIAAAaIA3AAIAAAgIg3AAIAAAbIBGAAIAAAjg");
	this.shape_15.setTransform(397.8,-24.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAoAAIAACdQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_16.setTransform(382.5,-24.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgQBOQgHgBgIgDQgIgCgHgFIgMgJIgLgMQgEgHgDgHQgEgHgBgIIgCgRQAAgIACgIQABgIAEgHQADgIAEgGIALgMIAMgJIAPgIIAPgEIAQgBIAQABIAQAEIAOAIIANAJIAKAMQAFAGADAIQADAHACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAGgGAGQgGAFgHAEQgGAFgIACQgHADgJABQgIACgIAAQgHAAgJgCgAgRgnQgHACgFAHQgGAGgCAHQgDAJAAAIQAAAJADAIQACAIAGAGQAFAGAHAEQAJACAIAAQAKAAAHgCQAIgEAGgGQAEgGADgIQADgIAAgJQAAgIgDgJQgDgHgEgGQgGgHgIgCQgHgEgKAAQgIAAgJAEg");
	this.shape_17.setTransform(365.1,-24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_18.setTransform(349.4,-24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgUBOQgJgDgJgFQgLgFgMgOIAfgXQAGAIAGAFQAJAEAKAAQAJAAAGgDQAEgCAAgHQAAgFgDgDQgEgDgHgCIgSgGQgJgDgHgFQgHgDgFgFQgFgGgDgIQgDgHAAgJQAAgMAFgJQAEgJAHgFQAIgHAJgCQAKgDAJAAQAKAAAJACQAIABAHADQAIAEAMALIgYAYQgFgFgHgCQgHgEgIAAQgGAAgFAEQgDACAAAFQgBAEADADQADADAFACIAUAGQAMAFAIAEQAIAFAFAFQAEAGADAGQACAIAAAIQAAALgDAJQgEAJgHAHQgIAGgLAEQgLADgPAAQgMAAgLgCg");
	this.shape_19.setTransform(335.9,-24);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("Ag0BOIAAibIBpAAIAAAjIg/AAIAAAgIA3AAIAAAiIg3AAIAAA2g");
	this.shape_20.setTransform(318,-24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgHgCgIgFIgMgJIgKgMQgFgHgDgHQgEgHgCgIIgBgRQAAgIABgIQACgIAEgHQADgIAFgGIAKgMIAMgJIAPgIIAQgEIAPgBIAQABIAQAEIAPAIIAMAJIAKAMQAFAGADAIQAEAHABAIQACAIAAAIQAAAIgCAJQgBAIgEAHQgDAHgFAHQgFAGgFAGIgMAJQgIAFgHACQgHADgJABQgHACgJAAQgIAAgHgCgAgQgnQgIACgGAHQgFAGgDAHQgCAJAAAIQAAAJACAIQADAIAFAGQAGAGAIAEQAHACAJAAQAKAAAHgCQAIgEAGgGQAFgGADgIQACgIAAgJQAAgIgCgJQgDgHgFgGQgGgHgIgCQgHgEgKAAQgJAAgHAEg");
	this.shape_21.setTransform(302.4,-24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_22.setTransform(281.6,-24.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgIBOQgJgBgHgDQgHgCgGgFQgHgEgGgFQgGgGgEgGQgEgHgEgHIgEgPIgCgRQAAgIACgIIAEgPQAEgIAEgGIAKgMIAMgJIANgIIAPgEIAOgBQANAAAKADQAKACAJAEQAIAFAHAGQAGAGAFAHIggAVQgFgHgIgFQgEgDgFgBQgGgCgHAAQgIAAgGAEQgIACgFAHQgEAGgCAHQgEAJAAAIQAAAJAEAIQACAIAFAGQAFAGAHAEQAHACAIAAQAIABAFgCQAGgBAEgEQAJgEAFgLIAgAVQgGAJgGAIQgIAGgIAFQgIAFgLACQgJACgMAAQgIAAgHgCg");
	this.shape_23.setTransform(266.8,-24);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_24.setTransform(255.2,-24.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("Ag1BOIAAibIAqAAIAAB4IBBAAIAAAjg");
	this.shape_25.setTransform(245.7,-24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgUBOQgKgDgIgFQgLgFgMgOIAegXQAGAIAIAFQAIAEAKAAQAJAAAGgDQAEgCAAgHQABgFgEgDQgEgDgHgCIgSgGQgJgDgGgFQgIgDgFgFQgGgGgCgIQgDgHAAgJQAAgMAFgJQADgJAIgFQAIgHAKgCQAJgDAJAAQALAAAIACQAIABAHADQAJAEALALIgYAYQgGgFgGgCQgGgEgKAAQgGAAgEAEQgDACAAAFQAAAEACADQADADAFACIAUAGQAMAFAIAEQAIAFAFAFQAFAGACAGQACAIAAAIQAAALgEAJQgDAJgHAHQgIAGgLAEQgLADgPAAQgMAAgLgCg");
	this.shape_26.setTransform(232.2,-24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_27.setTransform(213.6,-24.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgUBOQgJgDgJgFQgLgFgMgOIAfgXQAGAIAGAFQAJAEAKAAQAKAAAEgDQAFgCABgHQAAgFgEgDQgEgDgHgCIgSgGQgJgDgHgFQgHgDgFgFQgFgGgDgIQgDgHAAgJQAAgMAFgJQAEgJAHgFQAHgHAKgCQAKgDAJAAQAKAAAJACQAIABAHADQAIAEAMALIgYAYQgFgFgHgCQgHgEgIAAQgGAAgFAEQgDACgBAFQABAEACADQADADAFACIAUAGQAMAFAIAEQAIAFAFAFQAEAGADAGQACAIAAAIQAAALgDAJQgEAJgHAHQgIAGgKAEQgMADgPAAQgMAAgLgCg");
	this.shape_28.setTransform(200.1,-24);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_29.setTransform(185.9,-24.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("Ag1BOIAAibIAqAAIAAB4IBBAAIAAAjg");
	this.shape_30.setTransform(172.1,-24.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("Ag4BOIAAibIBuAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_31.setTransform(338.2,-46.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AAbBOIAAg9Ig1AAIAAA9IgqAAIAAibIAqAAIAAA8IA1AAIAAg8IAqAAIAACbg");
	this.shape_32.setTransform(322.9,-46.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_33.setTransform(307.9,-46.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AgUBNQgKgCgIgEQgLgGgMgNIAegYQAGAJAIADQAIAGAKAAQAJAAAGgDQAEgEAAgGQABgEgEgDQgEgEgHgCIgSgHQgJgDgGgDQgIgFgFgEQgGgGgCgIQgDgHAAgKQAAgLAFgJQADgIAIgHQAIgGAKgDQAJgCAJAAQALAAAIABQAIACAHADQAJAEALAKIgYAZQgGgFgGgDQgGgDgKAAQgGAAgEADQgDADAAAFQAAAFACACQADACAFACIAUAHQAMAEAIAFQAIAFAFAFQAFAFACAIQACAGAAAJQAAALgEAIQgDAKgHAGQgIAHgLADQgLAEgPAAQgMAAgLgDg");
	this.shape_34.setTransform(288.9,-46);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AgRAhIAJgYQgHgDgDgFQgEgEAAgIIACgJIAFgGQAGgGAJAAQAJAAAHAGQADADACADIACAJQAAAGgCAGQgCAFgFAGIgOAVg");
	this.shape_35.setTransform(279.4,-50.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_36.setTransform(269.6,-46.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2231A").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_37.setTransform(259.3,-46.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2231A").s().p("AgUBNQgKgCgIgEQgLgGgMgNIAfgYQAFAJAHADQAJAGAKAAQAKAAAEgDQAGgEAAgGQgBgEgDgDQgDgEgJgCIgRgHQgJgDgHgDQgHgFgFgEQgFgGgDgIQgDgHAAgKQAAgLAEgJQAFgIAIgHQAHgGAJgDQAKgCAKAAQAJAAAJABQAIACAHADQAJAEALAKIgYAZQgGgFgFgDQgHgDgJAAQgHAAgDADQgFADAAAFQABAFACACQACACAGACIAUAHQAMAEAIAFQAIAFAFAFQAEAFADAIQACAGAAAJQAAALgDAIQgEAKgHAGQgHAHgLADQgMAEgPAAQgMAAgLgDg");
	this.shape_38.setTransform(243.5,-46);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E2231A").s().p("AgUBNQgKgCgIgEQgLgGgMgNIAfgYQAFAJAHADQAJAGAKAAQAKAAAEgDQAGgEAAgGQgBgEgDgDQgDgEgJgCIgRgHQgJgDgHgDQgHgFgFgEQgFgGgDgIQgDgHAAgKQAAgLAEgJQAFgIAIgHQAHgGAJgDQAKgCAKAAQAJAAAJABQAIACAHADQAJAEALAKIgYAZQgGgFgFgDQgHgDgJAAQgHAAgDADQgFADAAAFQABAFACACQACACAGACIAUAHQAMAEAIAFQAIAFAFAFQAEAFADAIQACAGAAAJQAAALgDAIQgEAKgHAGQgHAHgLADQgMAEgPAAQgMAAgLgDg");
	this.shape_39.setTransform(230.4,-46);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2231A").s().p("Ag4BOIAAibIBtAAIAAAjIhCAAIAAAaIA3AAIAAAgIg3AAIAAAbIBGAAIAAAjg");
	this.shape_40.setTransform(217.8,-46.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E2231A").s().p("Ag1BOIAAibIAqAAIAAB4IBBAAIAAAjg");
	this.shape_41.setTransform(204.8,-46.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAnAAIAACdQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_42.setTransform(189.7,-46.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2231A").s().p("AgaBMQgPgHgHgFIgIgJIgGgLQgCgGgBgGQgCgHAAgIIAAhfIAqAAIAABeQAAAHACAFQABAFADAEQAEADAFACQAEACAGAAQAHAAAFgCQAEgCAEgDQADgEABgFQACgFAAgHIAAheIAqAAIAABfIgBAPIgEAMIgGALIgIAJIgKAHIgMAFQgMADgPAAQgOAAgMgDg");
	this.shape_43.setTransform(173.3,-46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(163.4,-58.2,349,71), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAQIgFgGIgCgJQAAgFACgEIAFgHQAHgGAIgBQAJABAHAGIAFAHQACAEAAAFIgCAJIgFAGQgHAHgJgBQgIABgHgHg");
	this.shape.setTransform(448.8,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhFBOIAAibIA9AAQAIAAAHABIAPAEQAHADAHAEIALAJQAGAFAEAGQAEAGADAHQADAIABAIQACAIAAAIQAAAJgCAIQgBAIgDAIQgDAHgEAGQgEAGgGAFIgLAJQgHAEgHADQgHADgIABQgHABgIAAgAgbArIAOAAQAKAAAGgDQAIgDAFgGQAGgFACgIQADgIAAgKQAAgJgDgIQgCgHgGgGQgFgGgIgDQgGgDgKAAIgOAAg");
	this.shape_1.setTransform(438.2,-11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgQBOQgHgBgIgDQgHgDgHgEIgNgKIgLgLQgEgHgDgHQgDgHgDgIIgBgRQAAgIABgIQADgIADgIQADgHAEgGIALgMIANgKIAOgHIAPgEIAQgBIAQABIAQAEIAOAHIANAKIAKAMQAFAGADAHQADAIACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAHgGAEQgGAGgHAEQgGAEgIADQgHADgJABQgIACgIAAQgHAAgJgCgAgRgoQgHADgFAGQgGAHgCAIQgDAIAAAIQAAAJADAIQACAIAGAGQAFAGAHADQAJADAIABQAKgBAHgDQAIgDAGgGQAEgGADgIQADgIAAgJQAAgIgDgIQgDgIgEgHQgGgGgIgDQgHgDgKAAQgIAAgJADg");
	this.shape_2.setTransform(420.9,-11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgIgDgGgEQgHgEgGgGIgLgLQgEgHgDgHQgEgHgBgIQgCgJAAgIQAAgIACgIQABgIAEgIQADgHAEgGIALgMIANgKIAOgHIAQgEIAPgBIARABIAPAEIAPAHIAMAKIAKAMQAFAGADAHQADAIACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAHgGAEIgMAKQgIAEgHADQgIADgHABQgIACgJAAQgIAAgHgCgAgQgoQgIADgGAGQgFAHgDAIQgDAIAAAIQAAAJADAIQADAIAFAGQAGAGAIADQAIADAIABQAJgBAJgDQAHgDAFgGQAFgGADgIQADgIAAgJQAAgIgDgIQgDgIgFgHQgFgGgHgDQgJgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(403,-11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAnBQIgnhSIgmBSQAAABAAABQgBAAAAAAQAAAAgBAAQAAgBAAgBIhCidIAsAAIAdBKIAhhNQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIAjBNIAchKIAqAAIhBCdIgBACIgCgCg");
	this.shape_4.setTransform(383.2,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAUBOIgbgxIgPAAIAAAxIgqAAIAAibIBAAAQAJAAAQAEQAMAEAHAIQAIAHAFAKQADAKAAAMQABAIgCAHQgCAHgEAFQgDAFgGAFQgFAFgHADIAhA3gAgWgCIAUAAQAJAAAGgFQAGgFAAgKQAAgJgGgGQgGgFgJAAIgUAAg");
	this.shape_5.setTransform(365.4,-11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_6.setTransform(349.8,-11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AAbBOIAAg9Ig1AAIAAA9IgqAAIAAibIAqAAIAAA8IA1AAIAAg8IAqAAIAACbg");
	this.shape_7.setTransform(333.7,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_8.setTransform(313.2,-11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_9.setTransform(298.6,-11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhFBOIAAibIA9AAQAIAAAHABIAPAEQAHADAHAEIALAJQAGAFAEAGQAEAGADAHQADAIABAIQACAIAAAIQAAAJgCAIQgBAIgDAIQgDAHgEAGQgEAGgGAFIgLAJQgHAEgHADQgHADgIABQgHABgIAAgAgbArIAOAAQAKAAAGgDQAIgDAFgGQAGgFACgIQADgIAAgKQAAgJgDgIQgCgHgGgGQgFgGgIgDQgGgDgKAAIgOAAg");
	this.shape_10.setTransform(277.7,-11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAoAAIAACdQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(261.1,-11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_12.setTransform(244.8,-11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("Ag1BOIAAibIAqAAIAAB4IBBAAIAAAjg");
	this.shape_13.setTransform(231,-11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgUBNQgJgCgJgEQgLgGgMgOIAfgWQAGAHAGAEQAJAGAKAAQAJAAAGgEQAEgDAAgGQAAgEgDgDQgEgDgHgDIgSgHQgJgCgHgFQgHgEgFgEQgGgGgCgHQgDgIAAgKQAAgLAFgJQAEgIAHgHQAIgFAJgEQAKgCAJAAQAKAAAJABQAIACAHADQAIAEAMAKIgYAaQgFgGgHgDQgHgDgIAAQgGAAgFADQgDADAAAFQgBAFADACQADACAFACIAUAIQAMADAIAFQAIAFAFAFQAEAGADAGQACAIAAAIQAAALgDAIQgEAKgHAGQgIAHgLADQgLAEgPAAQgMAAgLgDg");
	this.shape_14.setTransform(217.5,-11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgUBNQgJgCgJgEQgLgGgMgOIAfgWQAGAHAGAEQAJAGAKAAQAJAAAGgEQAEgDAAgGQAAgEgDgDQgEgDgHgDIgSgHQgJgCgHgFQgHgEgFgEQgGgGgCgHQgDgIAAgKQAAgLAFgJQAEgIAHgHQAHgFAKgEQAKgCAJAAQAKAAAJABQAIACAHADQAIAEAMAKIgYAaQgFgGgHgDQgHgDgIAAQgGAAgFADQgDADAAAFQgBAFADACQADACAFACIAUAIQAMADAIAFQAIAFAFAFQAEAGADAGQACAIAAAIQAAALgDAIQgEAKgHAGQgIAHgLADQgLAEgPAAQgMAAgLgDg");
	this.shape_15.setTransform(204.5,-11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgIgDgGgEQgHgEgGgGIgKgLQgFgHgDgHQgEgHgBgIQgCgJAAgIQAAgIACgIQABgIAEgIQADgHAFgGIAKgMIANgKIAOgHIAQgEIAPgBIARABIAPAEIAPAHIAMAKIAKAMQAFAGADAHQADAIACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAHgGAEIgMAKQgIAEgHADQgIADgHABQgIACgJAAQgIAAgHgCgAgQgoQgIADgGAGQgFAHgDAIQgDAIAAAIQAAAJADAIQADAIAFAGQAGAGAIADQAIADAIABQAJgBAJgDQAHgDAFgGQAFgGAEgIQACgIAAgJQAAgIgCgIQgEgIgFgHQgFgGgHgDQgJgDgJAAQgIAAgIADg");
	this.shape_16.setTransform(189.2,-11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAUBOIgcgxIgNAAIAAAxIgrAAIAAibIBAAAQAJAAAQAEQAMAEAHAIQAIAHAFAKQADAKAAAMQABAIgCAHQgCAHgEAFQgDAFgGAFQgFAFgHADIAhA3gAgVgCIATAAQAJAAAGgFQAGgFgBgKQABgJgGgGQgGgFgJAAIgTAAg");
	this.shape_17.setTransform(173.2,-11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgnAAIAAidQAAgBAAgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAnAAIAACdQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_18.setTransform(385.2,-33.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgIgCgGgFQgHgEgGgFIgLgMQgEgHgDgHQgEgHgBgIQgCgJAAgIQAAgIACgIQABgIAEgHQADgIAEgGIALgMIANgJIAOgIIAQgEIAPgBIARABIAPAEIAPAIIAMAJIAKAMQAFAGADAIQADAHACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAGgGAGIgMAJQgIAFgHACQgIADgHABQgIACgJAAQgIAAgHgCgAgQgnQgIACgGAHQgFAGgDAHQgDAJAAAIQAAAJADAIQADAIAFAGQAGAGAIAEQAIACAIAAQAJAAAJgCQAHgEAFgGQAFgGADgIQADgIAAgJQAAgIgDgJQgDgHgFgGQgFgHgHgCQgJgEgJAAQgIAAgIAEg");
	this.shape_19.setTransform(367.9,-33);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAnAAIAACdQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_20.setTransform(345,-33.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_21.setTransform(330.3,-33.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("Ag9BOIAAibIA+AAQAKAAARAEQAKAEAJAIQAHAHAEALQAEAKABAMQgBAMgEAJQgEAKgHAIQgJAHgKAEQgRAEgKAAIgVAAIAAAtgAgUgBIAUAAQAJAAAGgFQAFgFABgKQgBgKgFgFQgGgGgJAAIgUAAg");
	this.shape_22.setTransform(316.5,-33.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgIgCgGgFQgHgEgGgFIgLgMQgEgHgDgHQgEgHgBgIQgCgJAAgIQAAgIACgIQABgIAEgHQADgIAEgGIALgMIANgJIAOgIIAQgEIAPgBIARABIAPAEIAPAIIAMAJIAKAMQAFAGADAIQADAHACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAGgGAGIgMAJQgIAFgHACQgIADgHABQgIACgJAAQgIAAgHgCgAgQgnQgIACgGAHQgFAGgDAHQgDAJAAAIQAAAJADAIQADAIAFAGQAGAGAIAEQAIACAIAAQAJAAAJgCQAHgEAFgGQAFgGAEgIQACgIAAgJQAAgIgCgJQgEgHgFgGQgFgHgHgCQgJgEgJAAQgIAAgIAEg");
	this.shape_23.setTransform(299.9,-33);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAnBRIgnhUIgmBUQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAIhCieIAsAAIAdBJIAhhMQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABIAjBMIAchJIAqAAIhBCeIgBABIgCgBg");
	this.shape_24.setTransform(274.6,-33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgIgCgGgFQgHgEgGgFIgLgMQgEgHgDgHQgEgHgBgIQgCgJAAgIQAAgIACgIQABgIAEgHQADgIAEgGIALgMIANgJIAOgIIAQgEIAPgBIARABIAPAEIAPAIIAMAJIAKAMQAFAGADAIQADAHACAIQACAIAAAIQAAAIgCAJQgCAIgDAHQgDAHgFAHQgEAGgGAGIgMAJQgIAFgHACQgIADgHABQgIACgJAAQgIAAgHgCgAgQgnQgIACgGAHQgFAGgDAHQgDAJAAAIQAAAJADAIQADAIAFAGQAGAGAIAEQAIACAIAAQAJAAAJgCQAHgEAFgGQAFgGADgIQADgIAAgJQAAgIgDgJQgDgHgFgGQgFgHgHgCQgJgEgJAAQgIAAgIAEg");
	this.shape_25.setTransform(254.9,-33);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAoAAIAACdQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_26.setTransform(237.6,-33.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAfBOIgfg1IghA1IgrAAIA2hTIgthIIAvAAIAVAnIAYgnIAsAAIguBGIA2BVg");
	this.shape_27.setTransform(215.7,-33.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_28.setTransform(200,-33.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgQBOQgHgCgHgEQgGgDgFgFQgEgFgDgFIAggVIAFAIQADADAFAAQAEAAADgDQADgEAAgHIAAhsIAqAAIAABvQAAALgDAJQgDAJgHAFQgGAGgJADQgJADgLAAQgIAAgJgBg");
	this.shape_29.setTransform(186.1,-33);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_30.setTransform(173.2,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(163.4,-45.2,349,49), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAQIgFgHQgCgEAAgFQAAgEACgEIAFgHQAHgGAIAAQAJAAAHAGIAFAHQACAEAAAEIgCAJIgFAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(383.8,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgIBOQgIgBgIgDQgHgCgGgFQgIgEgFgFQgGgGgFgGIgIgOIgEgPIgCgRQAAgIACgIIAEgPQAEgIAEgGIAKgMIANgJIAOgIIAQgEIAPgBQALAAAJACQAJACAIADQAIADAHAGQAGAFAFAHIgdAZQgGgIgJgEQgJgFgKAAQgJAAgHAEQgIACgFAHQgFAFgCAIQgDAIgBAJQABAJADAIQACAIAGAHQAFAGAHADQAJAEAIAAQAQAAAPgGIAAgQIgfAAIAAgfIBEAAIAABDQgQALgKAEQgJADgJABQgLACgNAAQgIAAgIgCg");
	this.shape_1.setTransform(372.3,-23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAnAAIAACdQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_2.setTransform(355.8,-23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_3.setTransform(343.9,-23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AATBOIgbgxIgNAAIAAAxIgrAAIAAibIBAAAQAJAAAQAEQAMAEAHAIQAIAHAFAKQADAKAAAMQAAAIgBAHQgCAHgEAFQgDAFgGAFQgFAFgHADIAgA3gAgVgCIATAAQAKAAAFgFQAGgFgBgKQABgJgGgGQgFgFgKAAIgTAAg");
	this.shape_4.setTransform(333.3,-23.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_5.setTransform(317.6,-23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgIBOQgIgBgIgDQgHgCgHgFIgMgJQgFgGgFgGQgFgGgDgIIgFgPIgBgRQAAgIABgIIAFgPQADgIAFgGIAKgMIALgJIAOgIIAOgEIAPgBQAMAAALADQAKABAJAGQAHAEAHAGQAGAGAGAHIggAWQgFgJgHgEQgFgDgFgBQgGgCgHAAQgHAAgIAEQgHACgFAHQgEAFgDAIQgDAIAAAJQAAAJADAIQADAIAFAGQAFAGAHAEQAIACAHAAQAHABAHgCQAFgCAFgCQAHgGAGgKIAgAVQgGAJgGAHQgIAHgIAFQgJAFgJACQgLACgMAAQgHAAgHgCg");
	this.shape_6.setTransform(302.1,-23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AgUBNQgKgCgIgFQgLgFgMgOIAegWQAGAIAIAEQAIAEAKAAQAJAAAGgDQAEgDAAgGQABgFgEgDQgEgDgHgCIgSgGQgJgEgGgEQgIgDgFgFQgGgGgCgHQgDgIAAgJQAAgLAFgKQADgJAJgFQAHgHAKgCQAJgDAJAAQALAAAIACQAIABAHADQAJAEALALIgYAZQgGgGgGgCQgGgEgKAAQgGAAgEAEQgDACAAAFQAAAEACADQADADAFACIAUAHQAMAEAIAEQAIAFAFAFQAFAGACAGQACAIAAAIQAAALgEAIQgDAKgHAHQgIAGgLAEQgLADgPAAQgMAAgLgDg");
	this.shape_7.setTransform(281.7,-23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_8.setTransform(271.9,-23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgIBOQgIgBgIgDQgHgCgGgFQgIgEgFgFQgGgGgFgGIgIgOIgEgPIgCgRQAAgIACgIIAEgPQAEgIAEgGIAKgMIANgJIAOgIIAQgEIAPgBQALAAAJACQAJACAIADQAIADAHAGQAGAFAFAHIgdAZQgGgIgJgEQgJgFgKAAQgJAAgHAEQgIACgFAHQgFAFgCAIQgDAIgBAJQABAJADAIQACAIAGAHQAFAGAHADQAIAEAJAAQAQAAAPgGIAAgQIgfAAIAAgfIBEAAIAABDQgQALgKAEQgJADgJABQgLACgNAAQgIAAgIgCg");
	this.shape_9.setTransform(254.4,-23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgoAAIAAidQAAgBABgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAnAAIAACdQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_10.setTransform(237.9,-23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgUBOIAAibIApAAIAACbg");
	this.shape_11.setTransform(226,-23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AATBOIgbgxIgNAAIAAAxIgrAAIAAibIBAAAQAJAAAQAEQAMAEAHAIQAIAHAFAKQADAKAAAMQAAAIgBAHQgCAHgEAFQgDAFgGAFQgFAFgHADIAgA3gAgVgCIATAAQAKAAAFgFQAGgFgBgKQABgJgGgGQgFgFgKAAIgTAAg");
	this.shape_12.setTransform(215.4,-23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_13.setTransform(199.7,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AAbBOIAAg9Ig1AAIAAA9IgqAAIAAibIAqAAIAAA8IA1AAIAAg8IAqAAIAACbg");
	this.shape_14.setTransform(183.7,-23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgUBNQgKgCgIgFQgLgFgMgOIAfgWQAFAIAHAEQAJAEAKAAQAKAAAEgDQAFgDABgGQAAgFgEgDQgDgDgJgCIgRgGQgJgEgHgEQgHgDgFgFQgFgGgDgHQgDgIAAgJQAAgLAEgKQAEgJAIgFQAIgHAJgCQAKgDAKAAQAJAAAJACQAIABAHADQAIAEAMALIgYAZQgFgGgGgCQgIgEgIAAQgHAAgDAEQgFACAAAFQABAEACADQADADAFACIAUAHQAMAEAIAEQAIAFAFAFQAEAGADAGQACAIAAAIQAAALgDAIQgEAKgHAHQgIAGgKAEQgMADgPAAQgMAAgLgDg");
	this.shape_15.setTransform(168.7,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(160.4,-35.2,406,27), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzkNdIAA1ZMAnhAAAIAAVZg");
	mask.setTransform(127.7,86.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-6,39,0.8,0.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(2.5,39,231.6,105.6), null);


// stage content:
(lib._728x90_longos_kitch = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(44.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:274.2,regY:-23.1,x:259,y:47.7,alpha:0.059},0).wait(1).to({x:261.6,alpha:0.143},0).wait(1).to({x:265.5,alpha:0.276},0).wait(1).to({x:271.2,alpha:0.466},0).wait(1).to({x:276,alpha:0.625},0).wait(1).to({x:279,alpha:0.725},0).wait(1).to({x:281,alpha:0.793},0).wait(1).to({x:282.5,alpha:0.842},0).wait(1).to({x:283.6,alpha:0.879},0).wait(1).to({x:284.4,alpha:0.908},0).wait(1).to({x:285.1,alpha:0.93},0).wait(1).to({x:285.7,alpha:0.948},0).wait(1).to({x:286.1,alpha:0.963},0).wait(1).to({x:286.4,alpha:0.974},0).wait(1).to({x:286.7,alpha:0.983},0).wait(1).to({x:286.9,alpha:0.99},0).wait(1).to({x:287,alpha:0.994},0).wait(1).to({x:287.1,alpha:0.998},0).wait(1).to({x:287.2,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(48).to({regX:274.2,regY:-23.1,x:287.3,y:47.7,alpha:0.997},0).wait(1).to({x:287.7,alpha:0.988},0).wait(1).to({x:288.4,alpha:0.97},0).wait(1).to({x:289.6,alpha:0.939},0).wait(1).to({x:291.7,alpha:0.887},0).wait(1).to({x:295.3,alpha:0.798},0).wait(1).to({x:301.7,alpha:0.637},0).wait(1).to({x:309.9,alpha:0.432},0).wait(1).to({x:315.6,alpha:0.289},0).wait(1).to({x:319.2,alpha:0.199},0).wait(1).to({x:321.7,alpha:0.138},0).wait(1).to({x:323.4,alpha:0.095},0).wait(1).to({x:324.6,alpha:0.064},0).wait(1).to({x:325.6,alpha:0.041},0).wait(1).to({x:326.2,alpha:0.024},0).wait(1).to({x:326.7,alpha:0.013},0).wait(1).to({x:327,alpha:0.005},0).wait(1).to({x:327.1,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(119));

	// Layer 2
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:284.7,regY:-24.1,x:267.9,y:46.9,alpha:0.067},0).wait(1).to({x:270.6,alpha:0.153},0).wait(1).to({x:274,alpha:0.256},0).wait(1).to({x:277.6,alpha:0.37},0).wait(1).to({x:281.2,alpha:0.484},0).wait(1).to({x:284.5,alpha:0.587},0).wait(1).to({x:287.3,alpha:0.676},0).wait(1).to({x:289.7,alpha:0.75},0).wait(1).to({x:291.6,alpha:0.81},0).wait(1).to({x:293.2,alpha:0.859},0).wait(1).to({x:294.4,alpha:0.898},0).wait(1).to({x:295.4,alpha:0.929},0).wait(1).to({x:296.2,alpha:0.953},0).wait(1).to({x:296.8,alpha:0.971},0).wait(1).to({x:297.2,alpha:0.985},0).wait(1).to({x:297.5,alpha:0.993},0).wait(1).to({x:297.6,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(71).to({regX:284.7,regY:-24.1,x:297.8,y:46.9,alpha:0.997},0).wait(1).to({x:298.2,alpha:0.987},0).wait(1).to({x:299.1,alpha:0.966},0).wait(1).to({x:300.5,alpha:0.93},0).wait(1).to({x:303,alpha:0.867},0).wait(1).to({x:307.5,alpha:0.754},0).wait(1).to({x:315.5,alpha:0.555},0).wait(1).to({x:323.3,alpha:0.36},0).wait(1).to({x:328.1,alpha:0.239},0).wait(1).to({x:331.2,alpha:0.163},0).wait(1).to({x:333.3,alpha:0.11},0).wait(1).to({x:334.8,alpha:0.073},0).wait(1).to({x:335.8,alpha:0.047},0).wait(1).to({x:336.6,alpha:0.028},0).wait(1).to({x:337.1,alpha:0.014},0).wait(1).to({x:337.5,alpha:0.006},0).wait(1).to({x:337.6,alpha:0.001},0).wait(1).to({regX:79.1,regY:34,x:132.1,y:105,alpha:0},0).wait(21));

	// Layer 8
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.1,105,1,1,0,0,0,79.1,34);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(191).to({_off:false},0).wait(1).to({regX:308.2,regY:-22.1,x:293.2,y:48.9,alpha:0.066},0).wait(1).to({x:295.8,alpha:0.15},0).wait(1).to({x:298.9,alpha:0.254},0).wait(1).to({x:302.3,alpha:0.369},0).wait(1).to({x:305.8,alpha:0.485},0).wait(1).to({x:308.9,alpha:0.591},0).wait(1).to({x:311.6,alpha:0.68},0).wait(1).to({x:313.8,alpha:0.754},0).wait(1).to({x:315.6,alpha:0.814},0).wait(1).to({x:317.1,alpha:0.862},0).wait(1).to({x:318.2,alpha:0.901},0).wait(1).to({x:319.1,alpha:0.931},0).wait(1).to({x:319.8,alpha:0.955},0).wait(1).to({x:320.4,alpha:0.972},0).wait(1).to({x:320.8,alpha:0.985},0).wait(1).to({x:321,alpha:0.994},0).wait(1).to({x:321.2,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68B264").s().p("AA4DYQhxhIg3iaIgpiBQgZhMgdgwQBMAABMAvQBxBJA3CZQAPArAaBXQAZBMAdAxQhMgBhMgwg");
	this.shape.setTransform(135.5,36.9,0.231,0.231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1CB38").s().p("AlIFXQAvhAAthoQAwh4Abg5QAvhlA2hAQBDhSBkgxQBzg4BrALQgwBBgtBoIhKCxQgvBlg1BAQhEBShkAxQhfAvhYAAQgUAAgTgDg");
	this.shape_1.setTransform(149.2,31.6,0.231,0.231);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC342E").s().p("Aj/OiQh6hCAEh7QACh5B6g/QBwg5C3ADIA7ABQAOAAAGAKQAHALgHAOQgFAOgIAGQgJAIgPAAIgqAAQhEgCgyA0QgxAzgCBNQAABLA1A1QAzAzBHAAQCeAAC+jZQBziEBkixQhOAShQgGQhIgGg7gmQg5glghg8QhJBJhYApQhbAqhIgLQhrAAg9g+Qg/hBAihdQAJgaBUiJQA/hoAog+QAegvgGgSQgHgUg3AjQhNAyhYBcQhcBhhSB6Ih/DbIkgABIDClaQgmgEgfgQQgRgKgegXQAAAUgMAqQg0CaiWBkQiYBmi2gCQhgAAhGgoQhDBMhmAyQhgAyh8gTQj7gqiDiXQgiAdg4AdQhwA6htADQiRAFhahBQhZhBABhrQACh2BehYQBphhCjAAQBTAABcAlQBlApA+BDQA9hRCHkIQCqlNBWiTQA/hrBng+QBlg9BsAAQBxAAA4BTQA1BRgUB+QgEAXggAJQgRAFgPgEQgOgEgDgKIAAgJQANhKgRgwQgRgygpAAQhCAAiUECQhTCRicEuQg8BvhPBWQg8BChhBOQAzA1BBAuQA7AqA6AcQCnBbBwh0Qg2gzgQhJQgQhMAdhTQA5irCXhgQCLhZCxABQB0ADBNAuQBKAsAeBNQAVAoAdAbQAdAdAfAKQAdAGAOgEQAOgEAPgSICEjdIEnABIhDByQBKg8BLgkQBXgpBGAAQBhAAAtBDQAvBFg1BRQi0EYgYAsQgYAtAEAeQAFAdAcAAQBGAACZitQgOhgAvhcQBIiSCHhQQCEhPCcAEQBdADBBAjQAwAZAcAoIAlg+IEggBIlKJIQArgOA2gnQA0gmBjhWQADgqAQguQA5irCXhgQCLhZCxABQBoADBJAlQBGAkAkBBQBcBnB4AMQCyAWDFj+IAjgpQATgRAZAAQAXAAAFAUQAFAVgSAoQgVAugDBDQgDAtAGA/QAEBmglBYQgnBchQBGQCKgmC0hnIAdgQQAIgFAJAFQAJAEADALQAEALgDALQgCAMgJAFQguAegUAKQjKBggsARQhcAjh+ANQikAShXhLQhCg5AAhRQAAhXA0grQAogiA7AAQA8AAAgAtQAaAkgFAlQgEAngdAdQgjAig7AGQADAUAYASQAXASAgAFQA6AJAggyQAqg4ARhOQAShPgKhfQhSAmh2gJQgfgDg2gPQgzgQgngSQgZDMiuCCQigB3jDgFQhGgCgygSQgogOgjgcQhAg0gahAIAAABQhXBEhCAkQhPAshQAQQheCTicCUQk5Enk3AAQi4AAhug8gEgrAABnQgyAwAABCQAAA/A2AvQA6A0BZAAQBMAABLg6QAXgTA8g/QhFhggngjQg+g4hKgDQhXAAg2A2gAZzifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAKQifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAzAifQhbBQhFB1QhEB2gFBXQgFBXA9AFQA9AGBchQQBbhPBEh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhVBKg");
	this.shape_2.setTransform(87.6,48.6,0.231,0.231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F2EB").s().p("AsBE2IAAprIYDAAIAAJrg");
	this.shape_3.setTransform(90.1,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(219));

	// salt
	this.instance_3 = new lib.salt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(665.6,117.5,1,1,20,0,0,177,36.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:117,regY:91.8,rotation:18.8,x:588.8,y:143.8},0).wait(1).to({rotation:17.1,x:586.9,y:135.9},0).wait(1).to({rotation:14.5,x:584.2,y:123.4},0).wait(1).to({rotation:10.7,x:580.4,y:105.4},0).wait(1).to({rotation:7.5,x:577.5,y:90.2},0).wait(1).to({rotation:5.5,x:575.8,y:80.5},0).wait(1).to({rotation:4.1,x:574.7,y:73.9},0).wait(1).to({rotation:3.2,x:573.9,y:69.2},0).wait(1).to({rotation:2.4,x:573.4,y:65.6},0).wait(1).to({rotation:1.8,x:572.9,y:62.7},0).wait(1).to({rotation:1.4,x:572.5,y:60.5},0).wait(1).to({rotation:1,x:572.3,y:58.8},0).wait(1).to({rotation:0.7,x:572.1,y:57.4},0).wait(1).to({rotation:0.5,x:571.9,y:56.2},0).wait(1).to({rotation:0.3,x:571.8,y:55.4},0).wait(1).to({rotation:0.2,x:571.7,y:54.7},0).wait(1).to({rotation:0.1,x:571.6,y:54.3},0).wait(1).to({rotation:0,y:53.9},0).wait(1).to({y:53.7},0).wait(1).to({regX:177,regY:36.1,x:631.6,y:-2},0).wait(196));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_4.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(219));

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
		{src:"images/bb_meat.jpg", id:"bb_meat"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;