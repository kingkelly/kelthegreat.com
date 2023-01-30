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
p.nominalBounds = new cjs.Rectangle(0,0,300,165);// helper functions:

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAQIgFgGIgCgJQAAgFACgEIAFgHQAHgGAIgBQAJABAHAGIAFAHQACAEAAAFIgCAJIgFAGQgHAHgJgBQgIABgHgHg");
	this.shape.setTransform(389.9,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("Ag4BOIAAibIBuAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBHAAIAAAjg");
	this.shape_1.setTransform(380.5,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AAUBOIgbgxIgPAAIAAAxIgqAAIAAibIBAAAQAJAAAQAEQALAEAJAIQAIAHAEAKQADAKAAAMQAAAIgBAHQgCAHgDAFQgEAFgFAFQgGAFgHADIAhA3gAgWgCIAUAAQAKAAAFgFQAGgFAAgKQAAgJgGgGQgFgFgKAAIgUAAg");
	this.shape_2.setTransform(366.4,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgHgDgIgEIgMgKIgKgLQgFgHgDgHQgEgHgCgIIgBgRQAAgIABgIQACgIAEgIQADgHAFgGIAKgMIAMgKIAPgHIAQgEIAPgBIAQABIAQAEIAPAHIAMAKIAKAMQAFAGADAHQAEAIABAIQACAIAAAIQAAAIgCAJQgBAIgEAHQgDAHgFAHQgFAHgFAEIgMAKQgIAEgHADQgHADgJABQgHACgJAAQgIAAgHgCgAgQgoQgIADgGAGQgFAHgDAIQgCAIAAAIQAAAJACAIQADAIAFAGQAGAGAIADQAHADAJABQAKgBAHgDQAIgDAGgGQAFgGADgIQACgIAAgJQAAgIgCgIQgDgIgFgHQgGgGgIgDQgHgDgKAAQgJAAgHADg");
	this.shape_3.setTransform(349.7,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_4.setTransform(333.9,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgUBNQgKgCgIgEQgLgGgMgOIAfgWQAFAHAHAEQAJAGAKAAQAKAAAEgEQAGgDAAgGQgBgEgDgDQgDgDgJgDIgRgHQgJgCgHgFQgHgEgFgEQgFgGgDgHQgDgIAAgKQAAgLAEgJQAEgIAJgHQAHgFAJgEQAKgCAKAAQAJAAAJABQAIACAHADQAJAEALAKIgYAaQgGgGgFgDQgHgDgJAAQgHAAgDADQgFADAAAFQABAFACACQACACAGACIAUAIQAMADAIAFQAIAFAFAFQAEAGADAGQACAIAAAIQAAALgDAIQgEAKgHAGQgHAHgLADQgMAEgPAAQgMAAgLgDg");
	this.shape_5.setTransform(320.4,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAUBOIgbgxIgPAAIAAAxIgqAAIAAibIBAAAQAJAAAQAEQAMAEAHAIQAIAHAFAKQADAKAAAMQABAIgCAHQgCAHgEAFQgDAFgGAFQgFAFgHADIAhA3gAgWgCIAUAAQAJAAAGgFQAGgFAAgKQAAgJgGgGQgGgFgJAAIgUAAg");
	this.shape_6.setTransform(301.5,-2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_7.setTransform(287.4,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AAbBOIAAg9Ig1AAIAAA9IgqAAIAAibIAqAAIAAA8IA1AAIAAg8IAqAAIAACbg");
	this.shape_8.setTransform(272.2,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_9.setTransform(257.2,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgQBOQgHgBgIgDQgHgDgIgEIgMgKIgKgLQgFgHgDgHQgEgHgCgIIgBgRQAAgIABgIQACgIAEgIQADgHAFgGIAKgMIAMgKIAPgHIAPgEIAQgBIAQABIAQAEIAOAHIANAKIAKAMQAFAGADAHQAEAIABAIQACAIAAAIQAAAIgCAJQgBAIgEAHQgDAHgFAHQgEAHgGAEQgGAGgHAEQgGAEgIADQgHADgJABQgHACgJAAQgIAAgIgCgAgRgoQgHADgFAGQgGAHgDAIQgCAIAAAIQAAAJACAIQADAIAGAGQAFAGAHADQAJADAIABQAJgBAIgDQAIgDAGgGQAEgGAEgIQACgIAAgJQAAgIgCgIQgEgIgEgHQgGgGgIgDQgIgDgJAAQgIAAgJADg");
	this.shape_10.setTransform(241.5,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABDBRIhhhRIAABOIgnAAIAAidQAAgBAAgBQAAAAAAAAQABAAAAAAQABAAABABIBhBQIAAhNIAnAAIAACdQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(224.1,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_12.setTransform(207.9,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_13.setTransform(187.8,-2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_14.setTransform(173.2,-2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AhFBOIAAibIA9AAQAIAAAHABIAPAEQAHADAHAEIALAJQAGAFAEAGQAEAGADAHQADAIABAIQACAIAAAIQAAAJgCAIQgBAIgDAIQgDAHgEAGQgEAGgGAFIgLAJQgHAEgHADQgHADgIABQgHABgIAAgAgbArIAOAAQAKAAAGgDQAIgDAFgGQAGgFACgIQADgIAAgKQAAgJgDgIQgCgHgGgGQgFgGgIgDQgGgDgKAAIgOAAg");
	this.shape_15.setTransform(375.4,-24.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_16.setTransform(360.8,-24.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_17.setTransform(347,-24.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgUBOQgJgDgJgFQgLgFgMgOIAfgXQAFAIAHAFQAJAEAKAAQAJAAAGgDQAEgCAAgHQABgFgEgDQgEgDgHgCIgSgGQgJgDgGgFQgIgDgFgFQgFgGgDgIQgDgHAAgJQAAgMAFgJQADgJAIgFQAIgHAJgCQAKgDAJAAQAKAAAJACQAIABAHADQAJAEALALIgYAYQgFgFgHgCQgGgEgKAAQgFAAgFAEQgDACAAAFQgBAEADADQADADAFACIAUAGQAMAFAIAEQAIAFAFAFQAFAGACAGQACAIAAAIQAAALgDAJQgEAJgHAHQgIAGgLAEQgLADgPAAQgMAAgLgCg");
	this.shape_18.setTransform(333.5,-24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_19.setTransform(320.9,-24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AATBOIgbgxIgOAAIAAAxIgpAAIAAibIA/AAQAJAAARAEQAKAEAJAIQAHAHAEAKQAFAKAAAMQAAAIgCAHQgCAHgDAFQgEAFgFAFQgGAFgHADIAgA3gAgWgCIAUAAQAJAAAGgFQAFgFAAgKQAAgJgFgGQgGgFgJAAIgUAAg");
	this.shape_20.setTransform(306.9,-24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AATBOIgbgxIgOAAIAAAxIgpAAIAAibIA/AAQAJAAARAEQAKAEAJAIQAHAHAEAKQAEAKABAMQAAAIgCAHQgCAHgDAFQgEAFgFAFQgGAFgHADIAgA3gAgWgCIAUAAQAJAAAGgFQAFgFABgKQgBgJgFgGQgGgFgJAAIgUAAg");
	this.shape_21.setTransform(292,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_22.setTransform(276.4,-24.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgaBMQgPgHgHgFIgIgJIgGgLQgCgGgBgGQgCgHAAgIIAAhfIAqAAIAABeQAAAHACAFQABAFADAEQAEADAFACQAEACAGAAQAHAAAFgCQAEgCAEgDQADgEABgFQACgFAAgHIAAheIAqAAIAABfIgBAPIgEAMIgGALIgIAJIgKAHIgMAFQgMADgPAAQgOAAgMgDg");
	this.shape_23.setTransform(255,-24);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgQBOQgHgBgIgDQgIgCgGgFQgHgEgGgFIgLgMQgEgHgDgHQgDgHgCgIIgCgRQAAgIACgIQACgIADgHQADgIAEgGIALgMIANgJIAOgIIAPgEIAQgBIARABIAPAEIAOAIIANAJIAKAMQAFAGADAIQAEAHABAIQACAIAAAIQAAAIgCAJQgBAIgEAHQgDAHgFAHQgEAGgGAGQgGAFgHAEQgGAFgIACQgIADgHABQgJACgIAAQgHAAgJgCgAgRgnQgHACgFAHQgGAGgCAHQgDAJgBAIQABAJADAIQACAIAGAGQAFAGAHAEQAJACAIAAQAJAAAIgCQAIgEAFgGQAGgGACgIQADgIAAgJQAAgIgDgJQgCgHgGgGQgFgHgIgCQgIgEgJAAQgIAAgJAEg");
	this.shape_24.setTransform(238.1,-24);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgTBOIAAg8Ig4hfIAuAAIAeA5IAfg5IAsAAIg3BeIAAA9g");
	this.shape_25.setTransform(221.7,-24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_26.setTransform(202,-24.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("Ag4BOIAAibIBtAAIAAAjIhCAAIAAAaIA3AAIAAAgIg3AAIAAAbIBGAAIAAAjg");
	this.shape_27.setTransform(188.9,-24.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgHBOQgJgBgIgDQgHgCgGgFQgIgEgFgFQgGgGgFgGIgIgOIgEgPQgCgJAAgIQAAgIACgIIAEgPQAEgIAEgGIAKgMIANgJIAOgIIAQgEIAQgBQAJAAAKACQAJABAIAEQAIADAGAGQAHAFAFAGIgdAaQgHgIgHgEQgKgFgKAAQgJAAgHAEQgIACgFAHQgFAGgDAHQgDAJAAAIQAAAJADAIQADAIAFAHQAGAGAIAEQAHADAKAAQAPAAAPgGIAAgQIgfAAIAAgfIBEAAIAABDQgPALgMADQgHAEgLABQgKACgNAAQgIAAgHgCg");
	this.shape_28.setTransform(173.6,-24);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AhFBOIAAibIA9AAQAIAAAHABIAPAEQAHADAHAEIALAJQAGAFAEAGQAEAGADAHQADAIABAIQACAIAAAIQAAAJgCAIQgBAIgDAIQgDAHgEAGQgEAGgGAFIgLAJQgHAEgHADQgHADgIABQgHABgIAAgAgbArIAOAAQAKAAAGgDQAIgDAFgGQAGgFACgIQADgIAAgKQAAgJgDgIQgCgHgGgGQgFgGgIgDQgGgDgKAAIgOAAg");
	this.shape_29.setTransform(306.5,-46.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("Ag1BOIAAibIAqAAIAAB4IBBAAIAAAjg");
	this.shape_30.setTransform(292.2,-46.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgaBMQgPgHgHgFIgIgJIgGgLQgCgGgBgGQgCgHAAgIIAAhfIAqAAIAABeQAAAHACAFQABAFADAEQAEADAFACQAEACAGAAQAHAAAFgCQAEgCAEgDQADgEABgFQACgFAAgHIAAheIAqAAIAABfIgBAPIgEAMIgGALIgIAJIgKAHIgMAFQgMADgPAAQgOAAgMgDg");
	this.shape_31.setTransform(277.5,-46);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AgPBPQgJgCgHgDQgHgDgIgEIgMgKIgKgLQgFgHgDgHQgEgHgCgIIgBgRQAAgIABgIQACgIAEgIQADgHAFgGIAKgMIAMgKIAPgGIAQgFIAPgBIAQABIAQAFIAPAGIAMAKIAKAMQAFAGADAHQAEAIABAIQACAIAAAIQAAAJgCAIQgBAIgEAHQgDAHgFAHQgFAHgFAEIgMAKQgIAEgHADQgHADgJACQgHABgJAAQgIAAgHgBgAgQgoQgIAEgGAFQgFAGgDAJQgCAHAAAJQAAAJACAIQADAIAFAGQAGAGAIADQAHAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQACgIAAgJQAAgJgCgHQgDgJgFgGQgGgFgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_32.setTransform(260.6,-46);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AAnBQIgnhSIgmBSQAAABAAABQgBAAAAAAQAAAAgBAAQAAgBAAgBIhCidIAsAAIAdBKIAhhNQAAAAAAgBQABAAAAAAQAAAAAAAAQABABAAAAIAjBNIAchKIAqAAIhBCdIgBACIgCgCg");
	this.shape_33.setTransform(240.8,-46.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_34.setTransform(217.8,-46.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AAiBQIgIgTIg2AAIgHATIgpAAIBMieQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBLCegAANAfIgOggIgOAgIAcAAg");
	this.shape_35.setTransform(203.2,-46.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AAbBOIAAg9Ig1AAIAAA9IgqAAIAAibIAqAAIAAA8IA1AAIAAg8IAqAAIAACbg");
	this.shape_36.setTransform(187.1,-46.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_37.setTransform(172.1,-46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(163.4,-58.2,349,71), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
	this.shape.graphics.f("#E2231A").s().p("AgPAQIgFgHIgCgJQAAgEACgEIAFgHQAHgGAIAAQAJAAAHAGIAFAHQACAEAAAEIgCAJIgFAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(404.1,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgTBOIAAg8Ig4hfIAuAAIAeA5IAfg5IAsAAIg3BeIAAA9g");
	this.shape_1.setTransform(395.6,-23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgaBMQgPgHgHgFIgIgJIgGgLQgCgGgBgGQgCgHAAgIIAAhfIAqAAIAABeQAAAHACAFQABAFADAEQAEADAFACQAEACAGAAQAHAAAFgCQAEgCAEgDQADgEABgFQACgFAAgHIAAheIAqAAIAABfIgBAPIgEAMIgGALIgIAJIgKAHIgMAFQgMADgPAAQgOAAgMgDg");
	this.shape_2.setTransform(380.2,-23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("Ag+BOIAAibIBDAAQAMAAAJADQAKACAGAFQAHAFAEAIQADAIAAAJQAAAHgBAGQgCAFgDAEQgFAIgKAEIAKADQAFADAEAFQAEAEADAGQACAHAAAIQAAALgEAIQgEAJgHAFQgIAGgLADQgLADgPAAgAgVAtIAYAAQAKAAAEgEQAEgEAAgIQAAgIgEgEQgFgEgJAAIgYAAgAgVgQIAVAAQAIAAAEgEQADgDAAgHQAAgHgDgDQgEgEgIAAIgVAAg");
	this.shape_3.setTransform(365.2,-23.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgaBMQgPgHgHgFIgIgJIgGgLQgCgGgBgGQgCgHAAgIIAAhfIAqAAIAABeQAAAHACAFQABAFADAEQAEADAFACQAEACAGAAQAHAAAFgCQAEgCAEgDQADgEABgFQACgFAAgHIAAheIAqAAIAABfIgBAPIgEAMIgGALIgIAJIgKAHIgMAFQgMADgPAAQgOAAgMgDg");
	this.shape_4.setTransform(344.1,-23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgHgCgIgFIgMgJIgKgMQgFgGgDgIQgEgHgCgIIgBgRQAAgIABgIQACgIAEgHQADgIAFgGIAKgMIAMgJIAPgIIAQgEIAPgBIAQABIAQAEIAPAIIAMAJIAKAMQAFAGADAIQAEAHABAIQACAIAAAIQAAAJgCAIQgBAIgEAHQgDAIgFAGQgFAGgFAGIgMAJQgIAFgHACQgHADgJABQgHACgJAAQgIAAgHgCgAgQgnQgIACgGAHQgFAFgDAIQgCAIAAAJQAAAJACAIQADAIAFAGQAGAGAIAEQAHACAJAAQAKAAAHgCQAIgEAGgGQAFgGADgIQACgIAAgJQAAgJgCgIQgDgIgFgFQgGgHgIgCQgHgEgKAAQgJAAgHAEg");
	this.shape_5.setTransform(327.2,-23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgTBOIAAg8Ig4hfIAuAAIAeA5IAfg5IAsAAIg3BeIAAA9g");
	this.shape_6.setTransform(310.7,-23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_7.setTransform(291.5,-23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AAUBOIgbgxIgPAAIAAAxIgpAAIAAibIA/AAQAJAAARAEQAKAEAJAIQAHAHAEAKQAEAKAAAMQAAAIgBAHQgCAHgDAFQgEAFgFAFQgGAFgHADIAhA3gAgWgCIAUAAQAJAAAGgFQAFgFABgKQgBgJgFgGQgGgFgJAAIgUAAg");
	this.shape_8.setTransform(277.4,-23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgPBOQgJgBgHgDQgHgCgIgFIgMgJIgKgMQgFgGgDgIQgDgHgDgIIgBgRQAAgIABgIQADgIADgHQADgIAFgGIAKgMIAMgJIAPgIIAQgEIAPgBIAQABIAQAEIAPAIIAMAJIAKAMQAFAGADAIQADAHACAIQACAIAAAIQAAAJgCAIQgCAIgDAHQgDAIgFAGQgFAGgFAGIgMAJQgIAFgHACQgIADgIABQgHACgJAAQgIAAgHgCgAgQgnQgIACgGAHQgFAFgDAIQgDAIABAJQgBAJADAIQADAIAFAGQAGAGAIAEQAHACAJAAQAKAAAIgCQAHgEAFgGQAFgGAEgIQACgIAAgJQAAgJgCgIQgEgIgFgFQgFgHgHgCQgIgEgKAAQgJAAgHAEg");
	this.shape_9.setTransform(260.7,-23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("Ag0BOIAAibIBpAAIAAAjIg/AAIAAAgIA3AAIAAAiIg3AAIAAA2g");
	this.shape_10.setTransform(245.7,-23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("Ag3BOIAAibIBtAAIAAAjIhEAAIAAAaIA4AAIAAAgIg4AAIAAAbIBGAAIAAAjg");
	this.shape_11.setTransform(232.7,-23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("Ag+BOIAAibIBDAAQAMAAAJADQAKACAGAFQAHAFAEAIQADAIAAAJQAAAHgBAGQgCAFgDAEQgFAIgKAEIAKADQAFADAEAFQAEAEADAGQACAHAAAIQAAALgEAIQgEAJgHAFQgIAGgLADQgLADgPAAgAgVAtIAYAAQAKAAAEgEQAEgEAAgIQAAgIgEgEQgFgEgJAAIgYAAgAgVgQIAVAAQAIAAAEgEQADgDAAgHQAAgHgDgDQgEgEgIAAIgVAAg");
	this.shape_12.setTransform(218.7,-23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgTBOIAAg8Ig4hfIAuAAIAeA5IAfg5IAsAAIg3BeIAAA9g");
	this.shape_13.setTransform(198.1,-23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AATBOIgbgxIgNAAIAAAxIgqAAIAAibIA/AAQAJAAARAEQAKAEAIAIQAJAHADAKQAFAKAAAMQgBAIgBAHQgCAHgDAFQgEAFgGAFQgFAFgHADIAgA3gAgVgCIATAAQAKAAAFgFQAFgFAAgKQAAgJgFgGQgFgFgKAAIgTAAg");
	this.shape_14.setTransform(183.7,-23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgUBOIAAh4IgpAAIAAgjIB7AAIAAAjIgpAAIAAB4g");
	this.shape_15.setTransform(169.1,-23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(160.4,-35.2,406,27), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABFJNIiSiAQiSh+AAABIhMh0QhMhzgBABQgBAAi0k2QABAAATimQABAAGzimIGximQDcFNABgBIACGcIADGgQgwDsgBAJgAotjMIAAAAIAAAAIAAAAg");
	mask.setTransform(193,93.9);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(51.2,-21.5,0.8,0.8,15);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(137.3,23.6,111.6,140.7), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AliC/Ig3hAIgCgBIABjqQABAAC8hIQC/hKAAACIBVAqIByAUQgBABAyAhIAxAhIAAAAIAAAAIBIBAQBGA+ACABQgGABrAD5Ig3g/gAGbAEIABAAIgBAAIAAAAgAmahsIAAAAIAAAAg");
	mask.setTransform(188.5,111.5);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(26.3,42.8,0.8,0.8,-20);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(147.4,86.2,82.3,50.7), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj2MWQhxhyAAigQAAihBxhxQByhyCfABQCggBByByQBxBxAAChQAACghxByQhyBxigABQifgBhyhxg");
	mask.setTransform(41.5,90.4);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-6,39,0.8,0.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(5.4,103.2,77.5,67.8), null);


// stage content:
(lib._728x90_longos_deli = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(44.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:284.6,regY:-23.1,x:269.4,y:47.7,alpha:0.059},0).wait(1).to({x:272,alpha:0.143},0).wait(1).to({x:275.9,alpha:0.276},0).wait(1).to({x:281.6,alpha:0.466},0).wait(1).to({x:286.4,alpha:0.625},0).wait(1).to({x:289.4,alpha:0.725},0).wait(1).to({x:291.4,alpha:0.793},0).wait(1).to({x:292.9,alpha:0.842},0).wait(1).to({x:294,alpha:0.879},0).wait(1).to({x:294.8,alpha:0.908},0).wait(1).to({x:295.5,alpha:0.93},0).wait(1).to({x:296.1,alpha:0.948},0).wait(1).to({x:296.5,alpha:0.963},0).wait(1).to({x:296.8,alpha:0.974},0).wait(1).to({x:297.1,alpha:0.983},0).wait(1).to({x:297.3,alpha:0.99},0).wait(1).to({x:297.4,alpha:0.994},0).wait(1).to({x:297.5,alpha:0.998},0).wait(1).to({x:297.6,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(48).to({regX:284.6,regY:-23.1,x:297.7,y:47.7,alpha:0.997},0).wait(1).to({x:298.1,alpha:0.988},0).wait(1).to({x:298.8,alpha:0.97},0).wait(1).to({x:300,alpha:0.939},0).wait(1).to({x:302.1,alpha:0.887},0).wait(1).to({x:305.7,alpha:0.798},0).wait(1).to({x:312.1,alpha:0.637},0).wait(1).to({x:320.3,alpha:0.432},0).wait(1).to({x:326,alpha:0.289},0).wait(1).to({x:329.6,alpha:0.199},0).wait(1).to({x:332.1,alpha:0.138},0).wait(1).to({x:333.8,alpha:0.095},0).wait(1).to({x:335,alpha:0.064},0).wait(1).to({x:336,alpha:0.041},0).wait(1).to({x:336.6,alpha:0.024},0).wait(1).to({x:337.1,alpha:0.013},0).wait(1).to({x:337.4,alpha:0.005},0).wait(1).to({x:337.5,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(102));

	// Layer 2
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:278.8,regY:-24.1,x:262,y:46.9,alpha:0.067},0).wait(1).to({x:264.7,alpha:0.153},0).wait(1).to({x:268.1,alpha:0.256},0).wait(1).to({x:271.7,alpha:0.37},0).wait(1).to({x:275.3,alpha:0.484},0).wait(1).to({x:278.6,alpha:0.587},0).wait(1).to({x:281.4,alpha:0.676},0).wait(1).to({x:283.8,alpha:0.75},0).wait(1).to({x:285.7,alpha:0.81},0).wait(1).to({x:287.3,alpha:0.859},0).wait(1).to({x:288.5,alpha:0.898},0).wait(1).to({x:289.5,alpha:0.929},0).wait(1).to({x:290.3,alpha:0.953},0).wait(1).to({x:290.9,alpha:0.971},0).wait(1).to({x:291.3,alpha:0.985},0).wait(1).to({x:291.6,alpha:0.993},0).wait(1).to({x:291.7,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(54).to({regX:278.8,regY:-24.1,x:291.9,y:46.9,alpha:0.997},0).wait(1).to({x:292.3,alpha:0.987},0).wait(1).to({x:293.2,alpha:0.966},0).wait(1).to({x:294.6,alpha:0.93},0).wait(1).to({x:297.1,alpha:0.867},0).wait(1).to({x:301.6,alpha:0.754},0).wait(1).to({x:309.6,alpha:0.555},0).wait(1).to({x:317.4,alpha:0.36},0).wait(1).to({x:322.2,alpha:0.239},0).wait(1).to({x:325.3,alpha:0.163},0).wait(1).to({x:327.4,alpha:0.11},0).wait(1).to({x:328.9,alpha:0.073},0).wait(1).to({x:329.9,alpha:0.047},0).wait(1).to({x:330.7,alpha:0.028},0).wait(1).to({x:331.2,alpha:0.014},0).wait(1).to({x:331.6,alpha:0.006},0).wait(1).to({x:331.7,alpha:0.001},0).wait(1).to({regX:79.1,regY:34,x:132.1,y:105,alpha:0},0).wait(21));

	// Layer 8
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.1,105,1,1,0,0,0,79.1,34);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).wait(1).to({regX:308.2,regY:-22.1,x:293.2,y:48.9,alpha:0.066},0).wait(1).to({x:295.8,alpha:0.15},0).wait(1).to({x:298.9,alpha:0.254},0).wait(1).to({x:302.3,alpha:0.369},0).wait(1).to({x:305.8,alpha:0.485},0).wait(1).to({x:308.9,alpha:0.591},0).wait(1).to({x:311.6,alpha:0.68},0).wait(1).to({x:313.8,alpha:0.754},0).wait(1).to({x:315.6,alpha:0.814},0).wait(1).to({x:317.1,alpha:0.862},0).wait(1).to({x:318.2,alpha:0.901},0).wait(1).to({x:319.1,alpha:0.931},0).wait(1).to({x:319.8,alpha:0.955},0).wait(1).to({x:320.4,alpha:0.972},0).wait(1).to({x:320.8,alpha:0.985},0).wait(1).to({x:321,alpha:0.994},0).wait(1).to({x:321.2,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(10));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(202));

	// salt
	this.instance_3 = new lib.salt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(665.6,37.5,1,1,0,0,0,177,36.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:41.5,regY:105,x:529.8,y:101.5},0).wait(1).to({x:529.5,y:94.6},0).wait(1).to({x:528.9,y:83.7},0).wait(1).to({x:528.2,y:68},0).wait(1).to({x:527.5,y:54.8},0).wait(1).to({x:527.1,y:46.5},0).wait(1).to({x:526.9,y:41},0).wait(1).to({x:526.7,y:36.9},0).wait(1).to({x:526.5,y:33.9},0).wait(1).to({x:526.4,y:31.5},0).wait(1).to({x:526.3,y:29.6},0).wait(1).to({y:28.2},0).wait(1).to({x:526.2,y:27},0).wait(1).to({y:26},0).wait(1).to({x:526.1,y:25.3},0).wait(1).to({y:24.8},0).wait(1).to({y:24.4},0).wait(1).to({y:24.1},0).wait(1).to({y:23.9},0).wait(1).to({regX:177,regY:36.1,x:661.6,y:-45},0).wait(179));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(678.3,208.3,1,1,10,0,0,135.6,147.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(1).to({regX:193,regY:93.9,rotation:8.8,x:738.7,y:158},0).wait(1).to({rotation:7.1,x:730.9,y:147.2},0).wait(1).to({rotation:4.5,x:718.6,y:130.5},0).wait(1).to({rotation:0.7,x:700.7,y:106.7},0).wait(1).to({rotation:-2.5,x:685.4,y:86.9},0).wait(1).to({rotation:-4.5,x:675.8,y:74.6},0).wait(1).to({rotation:-5.9,x:669.2,y:66.2},0).wait(1).to({rotation:-6.8,x:664.4,y:60.3},0).wait(1).to({rotation:-7.6,x:660.8,y:55.8},0).wait(1).to({rotation:-8.2,x:658,y:52.3},0).wait(1).to({rotation:-8.6,x:655.8,y:49.5},0).wait(1).to({rotation:-9,x:654,y:47.3},0).wait(1).to({rotation:-9.3,x:652.6,y:45.5},0).wait(1).to({rotation:-9.5,x:651.5,y:44.2},0).wait(1).to({rotation:-9.7,x:650.6,y:43.1},0).wait(1).to({rotation:-9.8,x:650,y:42.4},0).wait(1).to({rotation:-9.9,x:649.5,y:41.7},0).wait(1).to({x:649.2,y:41.4},0).wait(1).to({rotation:-10,x:649,y:41.1},0).wait(1).to({regX:135.7,regY:147.5,x:601.8,y:103.8},0).wait(175));

	// rosemary
	this.instance_5 = new lib.saltcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(513.4,198.2,1,1,25,0,0,38.5,209.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(1).to({regX:188.5,regY:111.5,x:685.8,y:167.4},0).wait(1).to({x:678.7,y:159.7},0).wait(1).to({x:667.6,y:147.7},0).wait(1).to({x:651.6,y:130.3},0).wait(1).to({x:638.2,y:115.9},0).wait(1).to({x:629.8,y:106.7},0).wait(1).to({x:624.1,y:100.6},0).wait(1).to({x:620,y:96.1},0).wait(1).to({x:616.9,y:92.8},0).wait(1).to({x:614.5,y:90.1},0).wait(1).to({x:612.6,y:88.1},0).wait(1).to({x:611.1,y:86.4},0).wait(1).to({x:609.9,y:85.1},0).wait(1).to({x:608.9,y:84.1},0).wait(1).to({x:608.2,y:83.3},0).wait(1).to({x:607.6,y:82.7},0).wait(1).to({x:607.2,y:82.3},0).wait(1).to({x:607,y:82},0).wait(1).to({x:606.8,y:81.8},0).wait(1).to({regX:38.5,regY:209.6,x:429.4,y:107.2},0).wait(177));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_4.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(202));

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
		{src:"images/bb_meat.png", id:"bb_meat"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;