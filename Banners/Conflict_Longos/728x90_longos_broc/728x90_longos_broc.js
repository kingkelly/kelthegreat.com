(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_longos_broc_atlas_", frames: [[0,89,144,52],[0,0,120,87],[0,143,127,53]]}
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
	this.spriteSheet = ss["728x90_longos_broc_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["728x90_longos_broc_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_salmTxt = function() {
	this.spriteSheet = ss["728x90_longos_broc_atlas_"];
	this.gotoAndStop(2);
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_salmTxt();
	this.instance.parent = this;
	this.instance.setTransform(-38,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-38,5,127,53), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgDACgEIAEgIQAHgFAIgBQAJABAGAFQADADACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgHgHg");
	this.shape.setTransform(442,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_1.setTransform(431.8,-14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgPBLIgPgEIgOgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIgBgIQABgHACgIIAEgPIAIgNQAEgGAFgFIAMgJIAOgHIAPgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEQgIACgIAAQgHAAgIgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(415.3,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEQgIACgIAAQgHAAgIgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(398.1,-14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgnBNIg+iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAiBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgCgBg");
	this.shape_4.setTransform(379.2,-14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_5.setTransform(362.2,-14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAgBNIgHgSIgzAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_6.setTransform(347.3,-14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_7.setTransform(331.9,-14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_8.setTransform(312.3,-14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_9.setTransform(298.4,-14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_10.setTransform(278.4,-14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(262.4,-14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_12.setTransform(247,-14.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_13.setTransform(233.7,-14.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_14.setTransform(220.8,-14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_15.setTransform(208.4,-14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEQgIACgIAAQgHAAgIgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_16.setTransform(193.8,-14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_17.setTransform(178.4,-14.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_18.setTransform(381.3,-35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIALALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgLALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_19.setTransform(364.7,-35.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_20.setTransform(342.7,-35.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_21.setTransform(328.7,-35.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_22.setTransform(315.5,-35.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgPBLIgPgEIgOgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIgBgIQABgHACgIIAEgPIAIgNQAEgGAFgFIAMgJIAOgHIAPgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_23.setTransform(299.6,-35.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAjBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_24.setTransform(275.5,-35.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIAKALIAIANIAFAPQABAIABAHQgBAIgBAIQgCAIgDAHIgIANIgKALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_25.setTransform(256.6,-35.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_26.setTransform(239.9,-35.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAdBLIgdgzIgfAzIgqAAIA0hQIgshFIAtAAIAWAmIAWgmIAqAAIgsBEIA0BRg");
	this.shape_27.setTransform(219.1,-35.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAgBNIgIgSIgyAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_28.setTransform(204.1,-35.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgPBKQgHgCgHgDQgFgDgFgFIgHgKIAegTIAFAHQAEADAEAAQAEAAADgDQADgDAAgHIAAhoIAoAAIAABrQAAAKgDAJQgDAIgGAFQgGAGgJADQgIADgLAAQgIAAgIgCg");
	this.shape_29.setTransform(190.7,-35.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAhBNIgJgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_30.setTransform(178.5,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(169,-47,349.1,47), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgOAQIgGgHQgBgEAAgFQAAgEABgDIAGgIQAGgFAIgBQAJABAGAFQAEAEABAEQACADAAAEQAAAFgCAEQgBAEgEADQgGAFgJAAQgIAAgGgFg");
	this.shape.setTransform(405.4,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_1.setTransform(395.9,-13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_2.setTransform(383.9,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgJBLIgOgEIgNgHIgMgJIgJgLIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNIAJgLQAFgFAGgEIANgHIAOgEIAOgCQALAAALADQAJACAIAFQAIAEAHAGQAGAFAEAIIgdAUQgGgIgHgEIgJgEQgGgCgGAAQgIAAgHADQgGADgFAGQgEAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAGADQAIADAHAAQAHAAAFgCIALgEQAGgFAGgKIAfAUQgGAJgHAHQgGAHgIAEQgIAFgKACQgKACgLAAQgHAAgIgCg");
	this.shape_3.setTransform(369.8,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_4.setTransform(358.7,-13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_5.setTransform(348.6,-13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_6.setTransform(334.6,-13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AgTBLIAAg6Ig1hbIAsAAIAdA3IAeg3IApAAIgzBaIAAA7g");
	this.shape_7.setTransform(314.9,-13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_8.setTransform(302.1,-13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_9.setTransform(288.9,-13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAFgBADgEQADgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgBAHQgBAHgDAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_10.setTransform(273.8,-13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIALALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgLALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_11.setTransform(257.6,-13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAGAFQAHAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgFAHgKAEIAKADQAFADADAEQAEAFADAFQACAHAAAHQAAALgEAIQgEAIgGAFQgIAGgKADQgLADgOAAgAgVArIAYAAQAJAAAFgEQADgEAAgHQAAgIgEgEQgEgEgJAAIgYAAgAgVgPIAVAAQAHAAAEgEQAEgDgBgHQAAgGgDgEQgDgDgIAAIgVAAg");
	this.shape_12.setTransform(242.3,-13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_13.setTransform(227.2,-13.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgIBLIgOgEIgOgHIgMgJIgKgLQgEgGgDgHQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAHgNIAKgLIAMgJIANgHIAPgEIAPgCQAJAAAJACQAKACAHADQAIAEAGAFQAGAFAFAGIgcAYQgGgHgIgEQgIgFgLAAQgIAAgIADQgGADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAIQADAHAFAGQAGAGAHAEQAHADAJAAQAPAAAOgGIAAgPIgeAAIAAgeIBCAAIAABAQgPALgKAEQgIADgKABQgKACgMAAQgIAAgIgCg");
	this.shape_14.setTransform(211.3,-13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_15.setTransform(200.1,-13.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_16.setTransform(190.7,-13.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_17.setTransform(176,-13.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgOAPIgGgGQgBgEAAgFQAAgDABgEIAGgHQAGgHAIAAQAJAAAGAHQADACACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJAAQgIAAgGgHg");
	this.shape_18.setTransform(376.4,-28.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_19.setTransform(366.3,-34.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_20.setTransform(352.3,-34.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgJBLIgOgEIgNgHIgLgJIgKgLIgIgNQgCgHgCgIQgCgIAAgIQAAgHACgIIAEgPIAIgNIAJgLQAFgFAGgEIANgHIAOgEIAOgCQAMAAAKADQAKACAHAFQAIAEAHAGQAGAFAFAIIgeAUQgGgIgHgEIgJgEQgGgCgGAAQgHAAgIADQgFADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAGADQAIADAHAAQAHAAAFgCIAKgEQAIgFAFgKIAfAUQgGAJgGAHQgHAHgIAEQgIAFgKACQgKACgLAAQgHAAgIgCg");
	this.shape_21.setTransform(338.2,-34.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_22.setTransform(323.7,-34.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAFgBADgEQACgDACgFQACgFAAgHIAAhaIAoAAIAABbQAAAHgBAHQgCAHgCAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_23.setTransform(308.7,-34.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_24.setTransform(292.4,-34.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_25.setTransform(277.4,-34.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgSBLIAAg6Ig1hbIAsAAIAcA3IAdg3IArAAIg0BaIAAA7g");
	this.shape_26.setTransform(259,-34.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_27.setTransform(246.1,-34.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_28.setTransform(233.9,-34.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AAhBNIgIgSIgzAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_29.setTransform(220,-34.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AgJBLIgOgEIgNgHIgMgJIgJgLIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNIAJgLQAFgFAGgEIANgHIAOgEIAOgCQALAAALADQAJACAIAFQAIAEAHAGQAGAFAEAIIgdAUQgGgIgHgEIgJgEQgGgCgGAAQgIAAgHADQgGADgFAGQgEAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAGADQAIADAHAAQAHAAAFgCIALgEQAGgFAGgKIAfAUQgGAJgGAHQgHAHgIAEQgIAFgKACQgKACgLAAQgHAAgIgCg");
	this.shape_30.setTransform(205.1,-34.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgCgIQgBgIAAgIQAAgHABgIIAFgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAEAPQADAIAAAHQAAAIgDAIQgBAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHgBgJQABgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_31.setTransform(188.8,-34.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_32.setTransform(174.4,-34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(166,-46,406,47), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-23,104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(-23,104,120,87), null);


// stage content:
(lib._728x90_longos_broc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(44.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regX:288.4,regY:-23.9,x:273.2,y:46.9,alpha:0.059},0).wait(1).to({x:275.8,alpha:0.143},0).wait(1).to({x:279.7,alpha:0.276},0).wait(1).to({x:285.4,alpha:0.466},0).wait(1).to({x:290.2,alpha:0.625},0).wait(1).to({x:293.2,alpha:0.725},0).wait(1).to({x:295.2,alpha:0.793},0).wait(1).to({x:296.7,alpha:0.842},0).wait(1).to({x:297.8,alpha:0.879},0).wait(1).to({x:298.6,alpha:0.908},0).wait(1).to({x:299.3,alpha:0.93},0).wait(1).to({x:299.9,alpha:0.948},0).wait(1).to({x:300.3,alpha:0.963},0).wait(1).to({x:300.6,alpha:0.974},0).wait(1).to({x:300.9,alpha:0.983},0).wait(1).to({x:301.1,alpha:0.99},0).wait(1).to({x:301.2,alpha:0.994},0).wait(1).to({x:301.3,alpha:0.998},0).wait(1).to({x:301.4,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(45).to({regX:288.4,regY:-23.9,x:301.5,y:46.9,alpha:0.997},0).wait(1).to({x:301.9,alpha:0.988},0).wait(1).to({x:302.6,alpha:0.97},0).wait(1).to({x:303.8,alpha:0.939},0).wait(1).to({x:305.9,alpha:0.887},0).wait(1).to({x:309.5,alpha:0.798},0).wait(1).to({x:315.9,alpha:0.637},0).wait(1).to({x:324.1,alpha:0.432},0).wait(1).to({x:329.8,alpha:0.289},0).wait(1).to({x:333.4,alpha:0.199},0).wait(1).to({x:335.9,alpha:0.138},0).wait(1).to({x:337.6,alpha:0.095},0).wait(1).to({x:338.8,alpha:0.064},0).wait(1).to({x:339.8,alpha:0.041},0).wait(1).to({x:340.4,alpha:0.024},0).wait(1).to({x:340.9,alpha:0.013},0).wait(1).to({x:341.2,alpha:0.005},0).wait(1).to({x:341.3,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// Layer 2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(662.5,47.5,1,1,0,0,0,46.5,31.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({alpha:1},13).wait(67));

	// Layer 8
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(62.1,105,1,1,0,0,0,79.1,34);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).wait(1).to({regX:307.6,regY:-24.9,x:292.6,y:46.1,alpha:0.066},0).wait(1).to({x:295.2,alpha:0.15},0).wait(1).to({x:298.3,alpha:0.254},0).wait(1).to({x:301.7,alpha:0.369},0).wait(1).to({x:305.2,alpha:0.485},0).wait(1).to({x:308.3,alpha:0.591},0).wait(1).to({x:311,alpha:0.68},0).wait(1).to({x:313.2,alpha:0.754},0).wait(1).to({x:315,alpha:0.814},0).wait(1).to({x:316.5,alpha:0.862},0).wait(1).to({x:317.6,alpha:0.901},0).wait(1).to({x:318.5,alpha:0.931},0).wait(1).to({x:319.2,alpha:0.955},0).wait(1).to({x:319.8,alpha:0.972},0).wait(1).to({x:320.2,alpha:0.985},0).wait(1).to({x:320.4,alpha:0.994},0).wait(1).to({x:320.6,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(106));

	// logo
	this.instance_3 = new lib.bb_logo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(678,137.3,1,1,0,0,0,135.5,147.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:37,regY:147.5,x:575.4,y:132},0).wait(1).to({x:569.5,y:124.3},0).wait(1).to({x:560.4,y:112.4},0).wait(1).to({x:547.3,y:95.3},0).wait(1).to({x:536.3,y:81},0).wait(1).to({x:529.4,y:72},0).wait(1).to({x:524.7,y:65.9},0).wait(1).to({x:521.4,y:61.5},0).wait(1).to({x:518.8,y:58.1},0).wait(1).to({x:516.8,y:55.6},0).wait(1).to({x:515.2,y:53.5},0).wait(1).to({x:514,y:51.9},0).wait(1).to({x:513,y:50.6},0).wait(1).to({x:512.2,y:49.6},0).wait(1).to({x:511.6,y:48.8},0).wait(1).to({x:511.2,y:48.2},0).wait(1).to({x:510.8,y:47.8},0).wait(1).to({x:510.6,y:47.5},0).wait(1).to({x:510.5,y:47.3},0).wait(1).to({regX:135.5,regY:147.6,x:609},0).wait(81));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_4.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(106));

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
		{src:"images/728x90_longos_broc_atlas_.png", id:"728x90_longos_broc_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;