(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_longos_bread_atlas_", frames: [[0,184,144,52],[0,0,273,182]]}
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



(lib.bb_logo = function() {
	this.spriteSheet = ss["728x90_longos_bread_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["728x90_longos_bread_atlas_"];
	this.gotoAndStop(1);
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


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgNAOIgEgGQgCgEAAgEQAAgEACgDIAEgGQAGgGAHAAQAIAAAGAGQADADACADQABADAAAEIgBAIQgCADgDADQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(381.7,-10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAwAAIAAAcIgwAAIAAAYIA9AAIAAAeg");
	this.shape_1.setTransform(373.6,-15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AguBEIAAiHIAkAAIAABpIA5AAIAAAeg");
	this.shape_2.setTransform(362.3,-15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgRBEIAAiHIAjAAIAACHg");
	this.shape_3.setTransform(353.3,-15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAYBEIAAg1IgvAAIAAA1IgkAAIAAiHIAkAAIAAA0IAvAAIAAg0IAkAAIAACHg");
	this.shape_4.setTransform(343.1,-15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAiBGIgihIIghBIQAAAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAIg5iJIAmAAIAaBAIAchCQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAfBCIAYhAIAlAAIg5CJIgBABIgBgBg");
	this.shape_5.setTransform(326.5,-15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_6.setTransform(305.6,-15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AARBEIgXgrIgNAAIAAArIgkAAIAAiHIA3AAQAIAAAOADQAJAEAHAGQAIAHADAJQAEAJAAAKQAAAHgCAGQgCAGgDAEIgIAJQgEAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_7.setTransform(287.9,-15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgNBEIgNgEIgNgGQgGgDgFgFIgJgKIgHgMIgEgNIgCgPQAAgHACgHQABgHADgGIAHgMIAJgKQAFgFAGgEIANgGIANgEIANgBIAOABIAOAEIAMAGQAHAEAEAFIAJAKIAHAMIAFANQABAHAAAHIgBAPIgFANIgHAMIgJAKQgEAFgHADIgMAGIgOAEQgGACgIAAIgNgCgAgOgiQgGACgFAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAHADAHAAQAJAAAGgDQAHgDAFgFQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgHgCQgGgDgJAAQgHAAgHADg");
	this.shape_8.setTransform(273.3,-15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgtBEIAAiHIBbAAIAAAeIg3AAIAAAcIAxAAIAAAeIgxAAIAAAvg");
	this.shape_9.setTransform(260.3,-15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("Ag8BEIAAiHIA1AAIANABIANADIAMAGIAKAIIAJAKIAFALIAFAOIABAOIgBAPIgFAOIgFALIgJAKIgKAIIgMAFIgNAEIgNABgAgYAlIANAAQAIAAAFgDQAHgCAFgFQAFgFACgHQACgGABgJQgBgIgCgGQgCgHgFgFQgFgFgHgCQgFgDgIAAIgNAAg");
	this.shape_10.setTransform(243.2,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AA6BGIhUhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBUBFIAAhDIAiAAIAACJIgBABIgCgBg");
	this.shape_11.setTransform(228.6,-15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AgXBCQgNgGgGgEIgHgIIgEgJIgEgLIgBgOIAAhSIAkAAIAABSIABAKQACAFADADQADADAEACQAEABAFAAQAGAAAEgBQAEgCADgDQADgDABgFQACgEgBgGIAAhSIAlAAIAABSIgCAOIgCALQgCAEgEAFIgHAIIgJAFIgKAFQgKADgNAAQgMAAgLgDg");
	this.shape_12.setTransform(214.4,-15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgNBEIgNgEIgNgGQgGgDgFgFIgJgKIgHgMIgEgNIgCgPQAAgHACgHQABgHADgGIAHgMIAJgKQAFgFAGgEIANgGIANgEIANgBIAOABIAOAEIAMAGQAGAEAGAFIAJAKIAGAMIAFANQABAHAAAHIgBAPIgFANIgGAMIgJAKQgGAFgGADIgMAGIgOAEQgGACgIAAIgNgCgAgOgiQgGACgFAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAHADAHAAQAIAAAIgDQAGgDAFgFQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgFgGgGgCQgIgDgIAAQgHAAgHADg");
	this.shape_13.setTransform(199.7,-15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AAQBEIgWgrIgNAAIAAArIgkAAIAAiHIA3AAQAHAAAPADQAJAEAIAGQAGAHAEAJQAEAJgBAKQABAHgCAGQgCAGgCAEIgIAJQgFAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_14.setTransform(185.8,-15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_15.setTransform(172.2,-15.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AA6BGIhUhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIBVBFIAAhDIAiAAIAACJIgBABIgCgBg");
	this.shape_16.setTransform(390.6,-34.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAxAAIAAAcIgxAAIAAAXIA9AAIAAAfg");
	this.shape_17.setTransform(377.9,-34.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAxAAIAAAcIgxAAIAAAXIA9AAIAAAfg");
	this.shape_18.setTransform(366.3,-34.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("Ag2BEIAAiHIA7AAQAJAAAIACQAJADAGAEQAFAFAEAGQADAGAAAJIgBALIgFAJQgEAGgJAEIAJACIAIAGQADAEACAGQACAGABAGQAAAKgEAHQgDAHgHAGQgHAEgJAEQgKACgMAAgAgTAoIAWAAQAHAAAEgFQAEgDAAgHQAAgGgEgEQgEgEgHAAIgWAAgAgTgOIATAAQAHAAADgDQADgDAAgGQAAgGgDgDQgDgDgHAAIgTAAg");
	this.shape_19.setTransform(354.2,-34.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAxAAIAAAcIgxAAIAAAXIA9AAIAAAfg");
	this.shape_20.setTransform(337.3,-34.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AAABEIhAiIIAmAAIAbA/IAbg/IAlAAIhACIIgBABIAAgBg");
	this.shape_21.setTransform(324.6,-34.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_22.setTransform(314.2,-34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AAYBEIAAg1IgvAAIAAA1IgkAAIAAiHIAkAAIAAA0IAvAAIAAg0IAkAAIAACHg");
	this.shape_23.setTransform(300.2,-34.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgRBDQgJgCgHgEQgKgFgKgLIAagUQAGAHAGADQAHAFAJAAQAIAAAEgDQAFgDAAgFQAAgEgEgDIgKgFIgPgFQgHgDgGgDQgGgEgFgEQgEgFgDgGQgCgHAAgIQAAgKADgIQAEgHAGgGQAHgFAJgCQAIgDAIAAQAIAAAJACQAGABAGADQAIADAKAJIgVAWQgFgFgFgCQgGgDgIAAQgFAAgEADQgDACAAAFQAAADACADIAHAEIASAGQAJADAIAEQAGAEAFAEQAEAFACAGQACAGAAAIQAAAJgDAIQgDAIgHAGQgGAFgJAEQgLADgNAAQgKAAgJgDg");
	this.shape_24.setTransform(282.4,-34.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AARBEIgYgrIgMAAIAAArIgkAAIAAiHIA3AAQAIAAAOADQAJAEAHAGQAHAHAEAJQAEAJAAAKQAAAHgCAGQgCAGgDAEIgIAJQgEAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_25.setTransform(270.8,-34.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAxAAIAAAcIgxAAIAAAXIA9AAIAAAfg");
	this.shape_26.setTransform(258.5,-34.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AATBEIgggyIgLAPIAAAjIgkAAIAAiHIAkAAIAAA4IAog4IAoAAIgtA7IAyBMg");
	this.shape_27.setTransform(246.2,-34.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_28.setTransform(232,-34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("Ag2BEIAAiHIA6AAQAKAAAIACQAJADAGAEQAFAFAEAGQADAGAAAJIgBALIgFAJQgEAGgJAEIAJACIAIAGQADAEACAGQACAGABAGQAAAKgEAHQgDAHgHAGQgHAEgJAEQgKACgMAAgAgTAoIAWAAQAHAAAEgFQAEgDAAgHQAAgGgEgEQgEgEgHAAIgWAAgAgTgOIATAAQAHAAADgDQADgDAAgGQAAgGgDgDQgDgDgHAAIgTAAg");
	this.shape_29.setTransform(219.2,-34.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAQBEIgWgrIgNAAIAAArIgkAAIAAiHIA3AAQAIAAAOADQAJAEAIAGQAGAHAEAJQAEAJgBAKQAAAHgBAGQgBAGgDAEIgIAJQgFAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_30.setTransform(201.6,-34.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgWBCQgOgGgFgEIgHgIIgGgJIgDgMIgBgNIAAhSIAlAAIAABSIABAKQABAFADADQACADAFABQAEACAFAAQAGAAAEgCQAEgBADgDQADgDABgFQABgEABgGIAAhSIAkAAIAABSIgBANIgEAMQgCAFgDAEIgHAIIgJAFIgJAFQgLADgNAAQgMAAgKgDg");
	this.shape_31.setTransform(187.9,-34.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AgNBEIgOgEIgMgGQgGgDgFgFIgJgKIgHgMIgFgNIgBgPQAAgHABgHQACgHADgGIAHgMIAJgKQAFgFAGgEIAMgGIAOgEIANgBIAOABIAOAEIANAGQAFAEAFAFIAJAKIAIAMIADANQACAHAAAHIgCAPIgDANIgIAMIgJAKQgFAFgFADIgNAGIgOAEQgHACgHAAIgNgCgAgOgiQgGACgFAGQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAHADAHAAQAJAAAGgDQAHgDAEgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgEgGgHgCQgGgDgJAAQgHAAgHADg");
	this.shape_32.setTransform(173.2,-34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(163.4,-45.2,349,43), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgNAOIgEgGQgCgEAAgEQAAgEACgDIAEgGQAGgGAHAAQAJAAAFAGQADADACADQABADAAAEIgBAIQgCADgDADQgFAGgJAAQgHAAgGgGg");
	this.shape.setTransform(411.8,-10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("Ag7BEIAAiHIA0AAIANABIANADIAMAGIAKAIIAJAKIAFALIAFAOIABAOIgBAPIgFAOIgFALIgJAKIgKAIIgMAFIgNAEIgNABgAgXAlIAMAAQAIAAAGgDQAGgCAFgFQAFgFACgHQACgGABgJQgBgIgCgGQgCgHgFgFQgFgFgGgCQgGgDgIAAIgMAAg");
	this.shape_1.setTransform(402.6,-15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgNBEIgOgEIgMgGQgGgDgFgFIgJgKIgHgMIgFgNIgBgPQAAgHABgHQACgHADgGIAHgMIAJgKQAFgFAGgEIAMgGIAOgEIANgBIAPABIANAEIANAGQAFAEAGAFIAJAKIAHAMIADANQACAHAAAHIgCAPIgDANIgHAMIgJAKQgGAFgFADIgNAGIgNAEQgIACgHAAIgNgCgAgOgiQgHACgEAGQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAHADAHAAQAIAAAIgDQAGgDAEgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgEgGgGgCQgIgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(387.5,-15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgNBEIgNgEIgNgGQgGgDgFgFIgJgKIgHgMIgEgNIgCgPQAAgHACgHQABgHADgGIAHgMIAJgKQAFgFAGgEIANgGIANgEIANgBIAOABIAOAEIAMAGQAHAEAEAFIAJAKIAHAMIAFANQABAHAAAHIgBAPIgFANIgHAMIgJAKQgEAFgHADIgMAGIgOAEQgGACgIAAIgNgCgAgOgiQgGACgFAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAHADAHAAQAJAAAGgDQAHgDAFgFQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgHgCQgGgDgJAAQgHAAgHADg");
	this.shape_3.setTransform(371.9,-15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAiBGIgihIIghBIQAAAAAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAIg5iJIAmAAIAaBAIAchCQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAfBCIAYhAIAlAAIg5CJIgBABIgBgBg");
	this.shape_4.setTransform(354.8,-15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAQBEIgWgrIgNAAIAAArIgkAAIAAiHIA3AAQAIAAAOADQAJAEAIAGQAGAHAEAJQAEAJgBAKQAAAHgBAGQgBAGgDAEIgIAJQgFAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_5.setTransform(339.3,-15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_6.setTransform(325.7,-15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AAYBEIAAg1IgvAAIAAA1IgkAAIAAiHIAkAAIAAA0IAvAAIAAg0IAkAAIAACHg");
	this.shape_7.setTransform(311.8,-15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgRBEIAAhpIgkAAIAAgeIBrAAIAAAeIgkAAIAABpg");
	this.shape_8.setTransform(293.9,-15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_9.setTransform(281.2,-15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("Ag8BEIAAiHIA1AAIANABIANADIAMAGIAKAIIAIAKIAGALIAEAOIACAOIgCAPIgEAOIgGALIgIAKIgKAIIgMAFIgNAEIgNABgAgYAlIANAAQAIAAAFgDQAHgCAFgFQAEgFADgHQACgGAAgJQAAgIgCgGQgDgHgEgFQgFgFgHgCQgFgDgIAAIgNAAg");
	this.shape_10.setTransform(263.1,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AA7BGIhVhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBUBFIAAhDIAiAAIAACJIgBABIgBgBg");
	this.shape_11.setTransform(248.6,-15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_12.setTransform(234.5,-15.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AguBEIAAiHIAkAAIAABpIA5AAIAAAeg");
	this.shape_13.setTransform(222.5,-15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgRBDQgJgCgHgEQgKgFgKgLIAagUQAGAHAGADQAHAFAJAAQAIAAAEgDQAFgDAAgFQAAgEgEgDIgKgFIgPgFQgHgDgGgDQgHgEgEgEQgEgFgDgGQgCgHAAgIQAAgKAEgIQADgHAGgGQAHgFAJgCQAIgDAIAAQAJAAAIACQAGABAGADQAIADAKAJIgVAWQgFgFgFgCQgGgDgIAAQgFAAgEADQgDACAAAFQAAADACADIAHAEIASAGQAJADAHAEQAIAEAEAEQAEAFACAGQACAGAAAIQAAAJgDAIQgDAIgHAGQgGAFgKAEQgJADgOAAQgJAAgKgDg");
	this.shape_14.setTransform(210.7,-15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgSBDQgIgCgHgEQgJgFgLgLIAagUQAGAHAGADQAHAFAJAAQAIAAAEgDQAFgDAAgFQAAgEgEgDIgJgFIgQgFQgHgDgGgDQgGgEgFgEQgFgFgCgGQgDgHAAgIQABgKAEgIQADgHAGgGQAHgFAJgCQAIgDAIAAQAJAAAHACQAHABAGADQAIADAKAJIgWAWQgEgFgFgCQgHgDgHAAQgGAAgDADQgDACAAAFQAAADACADIAHAEIARAGQALADAGAEQAIAEAEAEQAEAFACAGQACAGAAAIQAAAJgDAIQgEAIgGAGQgGAFgKAEQgJADgOAAQgKAAgKgDg");
	this.shape_15.setTransform(199.4,-15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgNBEIgNgEIgNgGQgGgDgFgFIgJgKIgHgMIgEgNIgCgPQAAgHACgHQABgHADgGIAHgMIAJgKQAFgFAGgEIANgGIANgEIANgBIAOABIAOAEIAMAGQAHAEAEAFIAJAKIAHAMIAFANQABAHAAAHIgBAPIgFANIgHAMIgJAKQgEAFgHADIgMAGIgOAEQgGACgIAAIgNgCgAgOgiQgGACgFAGQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAHADAHAAQAJAAAGgDQAHgDAFgFQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgHgCQgGgDgJAAQgHAAgHADg");
	this.shape_16.setTransform(186.1,-15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAQBEIgXgrIgMAAIAAArIgkAAIAAiHIA3AAQAHAAAPADQAJAEAIAGQAGAHAEAJQADAJAAAKQABAHgCAGQgBAGgEAEIgHAJQgFAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_17.setTransform(172.2,-15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AA6BGIhUhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIBVBFIAAhDIAiAAIAACJIgBABIgCgBg");
	this.shape_18.setTransform(356.3,-34.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgNBEIgOgEIgMgGQgGgDgFgFIgJgKIgHgMIgFgNIgBgPQAAgHABgHQACgHADgGIAHgMIAJgKQAFgFAGgEIAMgGIAOgEIANgBIAPABIANAEIANAGQAFAEAGAFIAJAKIAHAMIADANQACAHAAAHIgCAPIgDANIgHAMIgJAKQgGAFgFADIgNAGIgNAEQgIACgHAAIgNgCgAgOgiQgHACgEAGQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAHADAHAAQAIAAAIgDQAGgDAEgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgEgGgGgCQgIgDgIAAQgHAAgHADg");
	this.shape_19.setTransform(341.2,-34.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AA6BGIhUhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIBVBFIAAhDIAiAAIAACJIgBABIgCgBg");
	this.shape_20.setTransform(321.3,-34.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAwAAIAAAcIgwAAIAAAXIA9AAIAAAfg");
	this.shape_21.setTransform(308.5,-34.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("Ag1BEIAAiHIA2AAQAIAAAPADQAJAEAHAHQAHAGAEAJQADAKAAAKQAAAKgDAIQgEAJgHAGQgHAHgJADQgPAEgIAAIgSAAIAAAngAgRgBIARAAQAIAAAFgEQAFgFAAgIQAAgJgFgEQgFgFgIAAIgRAAg");
	this.shape_22.setTransform(296.5,-34.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgNBEIgOgEIgMgGQgGgDgFgFIgJgKIgHgMIgFgNIgBgPQAAgHABgHQACgHADgGIAHgMIAJgKQAFgFAGgEIAMgGIAOgEIANgBIAOABIAOAEIANAGQAFAEAFAFIAJAKIAIAMIADANQACAHAAAHIgCAPIgDANIgIAMIgJAKQgFAFgFADIgNAGIgOAEQgHACgHAAIgNgCgAgOgiQgHACgEAGQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAHADAHAAQAJAAAGgDQAHgDAEgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgEgGgHgCQgGgDgJAAQgHAAgHADg");
	this.shape_23.setTransform(282.1,-34.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAiBGIgihIIghBIQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAIg5iJIAmAAIAaBAIAchCQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAfBCIAYhAIAlAAIg5CJIgBABIgBgBg");
	this.shape_24.setTransform(260.1,-34.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgNBEIgNgEIgNgGQgGgDgFgFIgJgKIgHgMIgEgNIgCgPQAAgHACgHQABgHADgGIAHgMIAJgKQAFgFAGgEIANgGIANgEIANgBIAPABIANAEIAMAGQAGAEAGAFIAJAKIAGAMIAFANQABAHAAAHIgBAPIgFANIgGAMIgJAKQgGAFgGADIgMAGIgNAEQgIACgHAAIgNgCgAgOgiQgHACgEAGQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAHADAHAAQAIAAAIgDQAGgDAFgFQAEgFADgHQACgHAAgIQAAgHgCgHQgDgHgEgFQgFgGgGgCQgIgDgIAAQgHAAgHADg");
	this.shape_25.setTransform(243,-34.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AA7BGIhVhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBUBFIAAhDIAiAAIAACJIgBABIgBgBg");
	this.shape_26.setTransform(227.9,-34.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAaBEIgaguIgcAuIgmAAIAvhIIgog/IApAAIATAjIAVgjIAlAAIgnA+IAvBJg");
	this.shape_27.setTransform(209.1,-34.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_28.setTransform(195.5,-34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgNBEIgNgGQgFgCgEgEIgHgJIAcgSIAFAGQADADAEAAQADAAADgDQACgDAAgGIAAheIAlAAIAABhQAAAJgDAIQgDAIgFAFQgGAFgHADQgIACgKAAQgHAAgHgBg");
	this.shape_29.setTransform(183.3,-34.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_30.setTransform(172.2,-34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(163.4,-45.2,349,43), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgNAOIgEgGQgCgEAAgEQAAgEACgDIAEgGQAGgGAHAAQAIAAAGAGQADADACADQABADAAAEIgBAIQgCADgDADQgGAFgIABQgHgBgGgFg");
	this.shape.setTransform(310.4,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgNAOIgEgGQgCgEAAgEQAAgEACgDIAEgGQAGgGAHAAQAIAAAGAGQADADACADQABADAAAEIgBAIQgCADgDADQgGAFgIABQgHgBgGgFg");
	this.shape_1.setTransform(305,-9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgNAOIgEgGQgCgEAAgEQAAgEACgDIAEgGQAGgGAHAAQAIAAAGAGQADADACADQABADAAAEIgBAIQgCADgDADQgGAFgIABQgHgBgGgFg");
	this.shape_2.setTransform(299.6,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("Ag7BEIAAiHIA0AAIANABIANADIAMAGIAKAIIAIAKIAHALIADAOIABAOIgBAPIgDAOIgHALIgIAKIgKAIIgMAGIgNADIgNABgAgXAlIAMAAQAIAAAGgDQAGgCAFgFQAEgFADgHQADgGgBgJQABgIgDgGQgDgHgEgFQgFgFgGgCQgGgDgIAAIgMAAg");
	this.shape_3.setTransform(290.4,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_4.setTransform(276.3,-14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAwAAIAAAcIgwAAIAAAYIA9AAIAAAeg");
	this.shape_5.setTransform(264.1,-14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AARBEIgXgrIgNAAIAAArIgkAAIAAiHIA3AAQAIAAAOADQAJAEAHAGQAIAHADAJQAEAJAAAKQAAAHgCAGQgCAGgCAEIgJAJQgEAEgGADIAcAwgAgTgCIARAAQAIABAFgFQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_6.setTransform(251.9,-14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag1BEIAAiHIA6AAQAJAAAJACQAIACAFAFQAHAFACAGQADAHAAAIIgBALIgDAIQgFAHgJADIAJADIAIAGQAEAFACAFQABAFAAAIQAAAJgDAHQgDAIgHAFQgGAFgKADQgKACgNAAgAgSAoIAUAAQAIAAAFgFQADgDAAgHQAAgHgDgDQgFgEgIAAIgUAAgAgSgOIASAAQAGAAAEgDQADgDAAgGQAAgGgDgDQgDgDgHgBIgSAAg");
	this.shape_7.setTransform(239,-14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("Ag7BEIAAiHIA0AAIANABIANADIAMAGIAKAIIAIAKIAHALIADAOIABAOIgBAPIgDAOIgHALIgIAKIgKAIIgMAGIgNADIgNABgAgXAlIAMAAQAIAAAGgDQAGgCAFgFQAEgFADgHQADgGgBgJQABgIgDgGQgDgHgEgFQgFgFgGgCQgGgDgIAAIgMAAg");
	this.shape_8.setTransform(221.1,-14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAxAAIAAAcIgxAAIAAAYIA9AAIAAAeg");
	this.shape_9.setTransform(208.4,-14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AASBEIgfgxIgMANIAAAkIgkAAIAAiHIAkAAIAAA4IApg4IAoAAIgtA7IAyBMg");
	this.shape_10.setTransform(196,-14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AAeBGIgIgRIguAAIgHARIgjAAIBCiKQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIBCCKgAALAbIgMgcIgMAcIAYAAg");
	this.shape_11.setTransform(181.9,-14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("Ag2BEIAAiHIA7AAQAKAAAIACQAIACAFAFQAHAFACAGQAEAHAAAIIgBALIgFAIQgEAHgJADIAJADIAIAGQADAFACAFQACAFAAAIQABAJgEAHQgDAIgHAFQgHAFgJADQgKACgMAAgAgTAoIAWAAQAIAAAEgFQADgDAAgHQAAgHgDgDQgEgEgIAAIgWAAgAgTgOIATAAQAHAAADgDQADgDAAgGQAAgGgDgDQgDgDgHgBIgTAAg");
	this.shape_12.setTransform(169,-14.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AAXBEIAAg1IguAAIAAA1IgkAAIAAiHIAkAAIAAA0IAuAAIAAg0IAlAAIAACHg");
	this.shape_13.setTransform(339.2,-33.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgRBDQgJgCgIgEQgJgFgKgLIAagUQAGAHAGADQAHAFAJAAQAIAAAEgDQAFgDAAgFQAAgEgEgDIgKgFIgOgFQgJgDgFgDQgGgEgFgEQgEgFgDgGQgDgHABgIQAAgKADgIQAEgHAGgGQAHgFAIgCQAJgDAIAAQAIAAAJACQAGABAGADQAIADAJAJIgUAWQgFgFgFgCQgHgDgHAAQgGAAgDADQgDACAAAFQAAADACADIAHAEIASAGQAKADAHAEQAGAEAFAEQAEAFACAGQACAGAAAIQAAAJgDAIQgDAIgHAGQgGAFgJAEQgKADgOAAQgKAAgJgDg");
	this.shape_14.setTransform(326.1,-33.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAwAAIAAAcIgwAAIAAAYIA9AAIAAAeg");
	this.shape_15.setTransform(315.2,-33.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AAQBEIgWgrIgNAAIAAArIgkAAIAAiHIA3AAQAHAAAPADQAJAEAIAGQAGAHAEAJQADAJAAAKQAAAHgBAGQgBAGgDAEIgIAJQgFAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_16.setTransform(303,-33.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgtBEIAAiHIBbAAIAAAeIg3AAIAAAcIAxAAIAAAeIgxAAIAAAvg");
	this.shape_17.setTransform(291,-33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AARBEIgXgrIgNAAIAAArIgkAAIAAiHIA3AAQAIAAAOADQAJAEAIAGQAGAHAEAJQAEAJAAAKQAAAHgCAGQgBAGgDAEIgIAJQgFAEgGADIAcAwgAgTgCIARAAQAIAAAFgEQAFgFAAgIQAAgIgFgEQgFgFgIAAIgRAAg");
	this.shape_18.setTransform(274.3,-33.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgWBCQgOgGgFgEIgHgIIgGgJIgDgLIgBgOIAAhSIAkAAIAABSIABAKQACAFADADQADADAEACQAEABAFAAQAFAAAFgBQAEgCADgDQADgDABgFQABgEAAgGIAAhSIAlAAIAABSIgBAOIgDALQgDAEgDAFIgHAIIgJAFIgKAFQgKADgNAAQgMAAgKgDg");
	this.shape_19.setTransform(260.6,-33.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgNBEIgNgEIgNgGQgGgDgFgFIgJgKIgHgMIgEgNIgCgPQAAgHACgHQABgHADgGIAHgMIAJgKQAFgFAGgEIANgGIANgEIANgBIAOABIAOAEIAMAGQAHAEAEAFIAJAKIAHAMIAFANQABAHAAAHIgBAPIgFANIgHAMIgJAKQgEAFgHADIgMAGIgOAEQgGACgIAAIgNgCgAgOgiQgGACgFAGQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAHADAHAAQAJAAAGgDQAHgDAFgFQAEgFACgHQADgHAAgIQAAgHgDgHQgCgHgEgFQgFgGgHgCQgGgDgJAAQgHAAgHADg");
	this.shape_20.setTransform(245.8,-33.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgwBEIAAiHIBeAAIAAAeIg6AAIAAAXIAwAAIAAAcIgwAAIAAAYIA9AAIAAAeg");
	this.shape_21.setTransform(227.8,-33.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AATBEIgggyIgMAOIAAAkIgkAAIAAiHIAkAAIAAA4IAqg4IAnAAIgtA7IAzBMg");
	this.shape_22.setTransform(215.4,-33.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgRBEIAAiHIAjAAIAACHg");
	this.shape_23.setTransform(205,-33.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AguBEIAAiHIAkAAIAABpIA5AAIAAAeg");
	this.shape_24.setTransform(196.7,-33.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AA7BGIhVhGIAABEIgiAAIAAiJQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBUBFIAAhDIAiAAIAACJIgBABIgBgBg");
	this.shape_25.setTransform(183.5,-33.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgXBCQgNgGgFgEIgIgIIgEgJIgEgLIgBgOIAAhSIAkAAIAABSIABAKQACAFADADQACADAFACQAEABAFAAQAGAAAEgBQAEgCADgDQADgDABgFQACgEgBgGIAAhSIAlAAIAABSIgBAOIgDALQgCAEgEAFIgHAIIgJAFIgKAFQgKADgNAAQgMAAgLgDg");
	this.shape_26.setTransform(169.3,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(160.4,-44.2,406,43), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxAL5IAAsYID0AAIAAiGIDNAAIAAkiIgCAAIAAkxIbCAAIAAXuIgNAAIAAmIIsVAAIAAGIIrIAAIAAADg");
	mask.setTransform(202.3,91.4);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(33.5,-42.6,1,1,15);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(93.4,15.3,203.7,152.2), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAtHnIAAAAIAAAAIAAAAgAAonmIBuAJQATCIABgBQh9M6AAADIjWAAQABAADQvNg");
	mask.setTransform(73.4,137.3);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(56.4,88.6,34,93.5), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjRDRQhWhWgBh7QABh6BWhXQBXhWB6gBQB7ABBWBWQBYBXAAB6QAAB7hYBWQhWBYh7gBQh6ABhXhYg");
	mask.setTransform(36.5,134.7);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(6.9,105.1,59.3,59.3), null);


// stage content:
(lib._728x90_longos_bread = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(44.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:254.3,regY:-24,x:239.1,y:46.8,alpha:0.059},0).wait(1).to({x:241.7,alpha:0.143},0).wait(1).to({x:245.6,alpha:0.276},0).wait(1).to({x:251.3,alpha:0.466},0).wait(1).to({x:256.1,alpha:0.625},0).wait(1).to({x:259.1,alpha:0.725},0).wait(1).to({x:261.1,alpha:0.793},0).wait(1).to({x:262.6,alpha:0.842},0).wait(1).to({x:263.7,alpha:0.879},0).wait(1).to({x:264.5,alpha:0.908},0).wait(1).to({x:265.2,alpha:0.93},0).wait(1).to({x:265.8,alpha:0.948},0).wait(1).to({x:266.2,alpha:0.963},0).wait(1).to({x:266.5,alpha:0.974},0).wait(1).to({x:266.8,alpha:0.983},0).wait(1).to({x:267,alpha:0.99},0).wait(1).to({x:267.1,alpha:0.994},0).wait(1).to({x:267.2,alpha:0.998},0).wait(1).to({x:267.3,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(48).to({regX:254.3,regY:-24,x:267.4,y:46.8,alpha:0.997},0).wait(1).to({x:267.8,alpha:0.988},0).wait(1).to({x:268.5,alpha:0.97},0).wait(1).to({x:269.7,alpha:0.939},0).wait(1).to({x:271.8,alpha:0.887},0).wait(1).to({x:275.4,alpha:0.798},0).wait(1).to({x:281.8,alpha:0.637},0).wait(1).to({x:290,alpha:0.432},0).wait(1).to({x:295.7,alpha:0.289},0).wait(1).to({x:299.3,alpha:0.199},0).wait(1).to({x:301.8,alpha:0.138},0).wait(1).to({x:303.5,alpha:0.095},0).wait(1).to({x:304.7,alpha:0.064},0).wait(1).to({x:305.7,alpha:0.041},0).wait(1).to({x:306.3,alpha:0.024},0).wait(1).to({x:306.8,alpha:0.013},0).wait(1).to({x:307.1,alpha:0.005},0).wait(1).to({x:307.2,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(102));

	// Layer 2
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:281.1,regY:-24.9,x:264.3,y:46.1,alpha:0.067},0).wait(1).to({x:267,alpha:0.153},0).wait(1).to({x:270.4,alpha:0.256},0).wait(1).to({x:274,alpha:0.37},0).wait(1).to({x:277.6,alpha:0.484},0).wait(1).to({x:280.9,alpha:0.587},0).wait(1).to({x:283.7,alpha:0.676},0).wait(1).to({x:286.1,alpha:0.75},0).wait(1).to({x:288,alpha:0.81},0).wait(1).to({x:289.6,alpha:0.859},0).wait(1).to({x:290.8,alpha:0.898},0).wait(1).to({x:291.8,alpha:0.929},0).wait(1).to({x:292.6,alpha:0.953},0).wait(1).to({x:293.2,alpha:0.971},0).wait(1).to({x:293.6,alpha:0.985},0).wait(1).to({x:293.9,alpha:0.993},0).wait(1).to({x:294,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(54).to({regX:281.1,regY:-24.9,x:294.2,y:46.1,alpha:0.997},0).wait(1).to({x:294.6,alpha:0.987},0).wait(1).to({x:295.5,alpha:0.966},0).wait(1).to({x:296.9,alpha:0.93},0).wait(1).to({x:299.4,alpha:0.867},0).wait(1).to({x:303.9,alpha:0.754},0).wait(1).to({x:311.9,alpha:0.555},0).wait(1).to({x:319.7,alpha:0.36},0).wait(1).to({x:324.5,alpha:0.239},0).wait(1).to({x:327.6,alpha:0.163},0).wait(1).to({x:329.7,alpha:0.11},0).wait(1).to({x:331.2,alpha:0.073},0).wait(1).to({x:332.2,alpha:0.047},0).wait(1).to({x:333,alpha:0.028},0).wait(1).to({x:333.5,alpha:0.014},0).wait(1).to({x:333.9,alpha:0.006},0).wait(1).to({x:334,alpha:0.001},0).wait(1).to({regX:79.1,regY:34,x:132.1,y:105,alpha:0},0).wait(21));

	// Layer 8
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.1,105,1,1,0,0,0,79.1,34);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(174).to({_off:false},0).wait(1).to({regX:289.6,regY:-24.9,x:274.6,y:46.1,alpha:0.066},0).wait(1).to({x:277.2,alpha:0.15},0).wait(1).to({x:280.3,alpha:0.254},0).wait(1).to({x:283.7,alpha:0.369},0).wait(1).to({x:287.2,alpha:0.485},0).wait(1).to({x:290.3,alpha:0.591},0).wait(1).to({x:293,alpha:0.68},0).wait(1).to({x:295.2,alpha:0.754},0).wait(1).to({x:297,alpha:0.814},0).wait(1).to({x:298.5,alpha:0.862},0).wait(1).to({x:299.6,alpha:0.901},0).wait(1).to({x:300.5,alpha:0.931},0).wait(1).to({x:301.2,alpha:0.955},0).wait(1).to({x:301.8,alpha:0.972},0).wait(1).to({x:302.2,alpha:0.985},0).wait(1).to({x:302.4,alpha:0.994},0).wait(1).to({x:302.6,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(10));

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

	// logo
	this.instance_3 = new lib.bb_logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(202));

	// rosemary
	this.instance_4 = new lib.saltcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(513.4,198.2,1,1,25,0,0,38.5,209.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:73.3,regY:135.3,x:571.4,y:140.2},0).wait(1).to({x:564.2,y:132.5},0).wait(1).to({x:553.1,y:120.5},0).wait(1).to({x:537.2,y:103.2},0).wait(1).to({x:523.8,y:88.7},0).wait(1).to({x:515.4,y:79.6},0).wait(1).to({x:509.7,y:73.4},0).wait(1).to({x:505.6,y:69},0).wait(1).to({x:502.5,y:65.6},0).wait(1).to({x:500,y:63},0).wait(1).to({x:498.1,y:60.9},0).wait(1).to({x:496.6,y:59.3},0).wait(1).to({x:495.4,y:58},0).wait(1).to({x:494.5,y:57},0).wait(1).to({x:493.7,y:56.2},0).wait(1).to({x:493.2,y:55.6},0).wait(1).to({x:492.8,y:55.1},0).wait(1).to({x:492.5,y:54.8},0).wait(1).to({x:492.3,y:54.7},0).wait(1).to({regX:38.5,regY:209.6,x:429.4,y:107.2},0).wait(177));

	// meaty
	this.instance_5 = new lib.saltcopy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(678.3,208.3,1,1,10,0,0,135.6,147.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).wait(1).to({regX:195.3,regY:91.3,x:739.4,y:156.7},0).wait(1).to({x:728.7,y:147.2},0).wait(1).to({x:712.1,y:132.4},0).wait(1).to({x:688.1,y:111.1},0).wait(1).to({x:668,y:93.3},0).wait(1).to({x:655.4,y:82},0).wait(1).to({x:646.9,y:74.5},0).wait(1).to({x:640.7,y:69},0).wait(1).to({x:636,y:64.8},0).wait(1).to({x:632.4,y:61.6},0).wait(1).to({x:629.6,y:59.1},0).wait(1).to({x:627.3,y:57.1},0).wait(1).to({x:625.5,y:55.5},0).wait(1).to({x:624.1,y:54.2},0).wait(1).to({x:623,y:53.2},0).wait(1).to({x:622.1,y:52.5},0).wait(1).to({x:621.5,y:51.9},0).wait(1).to({x:621.1,y:51.6},0).wait(1).to({x:620.9,y:51.4},0).wait(1).to({regX:135.6,regY:147.5,x:552.3,y:96.3},0).wait(175));

	// salt
	this.instance_6 = new lib.salt();
	this.instance_6.parent = this;
	this.instance_6.setTransform(665.6,37.5,1,1,0,0,0,177,36.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).wait(1).to({regX:36.5,regY:134.7,x:521.3,y:130.3},0).wait(1).to({x:516,y:122},0).wait(1).to({x:507.7,y:109.1},0).wait(1).to({x:495.7,y:90.4},0).wait(1).to({x:485.7,y:74.8},0).wait(1).to({x:479.3,y:65},0).wait(1).to({x:475.1,y:58.4},0).wait(1).to({x:472,y:53.6},0).wait(1).to({x:469.7,y:50},0).wait(1).to({x:467.9,y:47.1},0).wait(1).to({x:466.4,y:44.9},0).wait(1).to({x:465.3,y:43.1},0).wait(1).to({x:464.4,y:41.7},0).wait(1).to({x:463.7,y:40.6},0).wait(1).to({x:463.1,y:39.8},0).wait(1).to({x:462.7,y:39.1},0).wait(1).to({x:462.4,y:38.7},0).wait(1).to({x:462.2,y:38.3},0).wait(1).to({x:462.1,y:38.2},0).wait(1).to({regX:177,regY:36.1,x:602.6,y:-60.5},0).wait(179));

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
		{src:"images/728x90_longos_bread_atlas_.png", id:"728x90_longos_bread_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;