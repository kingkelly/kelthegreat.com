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
p.nominalBounds = new cjs.Rectangle(0,0,329,90);// helper functions:

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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgDACgEIAEgHQAHgHAIAAQAJAAAGAHQADACACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgHgHg");
	this.shape.setTransform(442,-9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_1.setTransform(431.8,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgPBLIgPgEIgOgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIgBgIQABgHACgIIAEgPIAIgNQAEgGAFgFIAMgJIAOgHIAPgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(415.3,-15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(398.1,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgnBNIg+iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAiBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgCgBg");
	this.shape_4.setTransform(379.2,-15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_5.setTransform(362.2,-15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAgBNIgHgSIgzAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_6.setTransform(347.3,-15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_7.setTransform(331.9,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_8.setTransform(312.3,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_9.setTransform(298.4,-15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_10.setTransform(278.4,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(262.4,-15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_12.setTransform(247,-15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_13.setTransform(233.7,-15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_14.setTransform(220.8,-15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_15.setTransform(208.4,-15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_16.setTransform(193.8,-15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_17.setTransform(178.4,-15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_18.setTransform(381.3,-36.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIALALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgLALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_19.setTransform(364.7,-36.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_20.setTransform(342.7,-36.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_21.setTransform(328.7,-36.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_22.setTransform(315.5,-36.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgPBLIgPgEIgOgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIgBgIQABgHACgIIAEgPIAIgNQAEgGAFgFIAMgJIAOgHIAPgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_23.setTransform(299.6,-36.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAjBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_24.setTransform(275.5,-36.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIAKALIAIANIAFAPQABAIABAHQgBAIgBAIQgCAIgDAHIgIANIgKALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_25.setTransform(256.6,-36.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_26.setTransform(239.9,-36.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAdBLIgdgzIgfAzIgqAAIA0hQIgshFIAtAAIAWAmIAWgmIAqAAIgsBEIA0BRg");
	this.shape_27.setTransform(219.1,-36.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAgBNIgIgSIgyAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_28.setTransform(204.1,-36.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgPBKQgHgCgHgDQgFgDgFgFIgHgKIAegTIAFAHQAEADAEAAQAEAAADgDQADgDAAgHIAAhoIAoAAIAABrQAAAKgDAJQgDAIgGAFQgGAGgJADQgIADgLAAQgIAAgIgCg");
	this.shape_29.setTransform(190.7,-36.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAhBNIgJgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_30.setTransform(178.5,-36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(169,-48,349.1,47), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgOAPIgGgGQgBgEAAgFQAAgDABgEIAGgIQAGgFAIgBQAJABAGAFQADADACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgGgHg");
	this.shape.setTransform(404.7,-8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_1.setTransform(394.9,-14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_2.setTransform(381.5,-14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_3.setTransform(366.9,-14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_4.setTransform(352.6,-14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_5.setTransform(342.8,-14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_6.setTransform(333.4,-14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_7.setTransform(315.4,-14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_8.setTransform(302.2,-14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgZBIQgPgGgGgFIgIgIQgDgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHACAFQABAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAEgBADgEQADgDACgFQABgFABgHIAAhaIAoAAIAABbQAAAHgCAHQAAAHgDAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_9.setTransform(288.6,-14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIAMAJIAJALIAIANIAEAPQACAIABAHQgBAIgCAIQgBAIgDAHIgIANIgJALIgMAJIgOAHIgPAEQgIACgIAAQgHAAgIgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_10.setTransform(272.4,-14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_11.setTransform(255.9,-14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_12.setTransform(236,-14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAFgBACgEQADgDACgFQACgFAAgHIAAhaIAoAAIAABbQAAAHgCAHQgBAHgCAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_13.setTransform(220.9,-14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgPBLIgPgEIgOgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIgBgIQABgHACgIIAEgPIAIgNQAEgGAFgFIAMgJIAOgHIAPgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEQgIACgIAAQgHAAgIgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_14.setTransform(204.7,-14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_15.setTransform(182.7,-14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_16.setTransform(171.4,-14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_17.setTransform(468.5,-35.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_18.setTransform(456.5,-35.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_19.setTransform(444.1,-35.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_20.setTransform(431.1,-35.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_21.setTransform(417.3,-35.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_22.setTransform(402.6,-35.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_23.setTransform(382.6,-35.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_24.setTransform(367.2,-35.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAHAFQAGAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgFAHgKAEIAKADQAFADADAEQAEAFADAFQACAHAAAHQAAALgDAIQgFAIgHAFQgHAGgLADQgKADgOAAgAgUArIAXAAQAJAAAEgEQAEgEAAgHQAAgIgEgEQgEgEgJAAIgXAAgAgUgPIAUAAQAIAAADgEQADgDABgHQAAgGgDgEQgFgDgHAAIgUAAg");
	this.shape_25.setTransform(353.1,-35.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_26.setTransform(334,-35.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_27.setTransform(319.5,-35.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAgBNIgHgSIgzAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_28.setTransform(304.1,-35.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAjBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_29.setTransform(289.3,-35.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_30.setTransform(267.3,-35.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgQAgIAIgYQgGgCgEgFQgDgEAAgHQAAgEABgEQADgEADgDQAGgGAIAAQAIAAAHAGQADADACAEQACAEAAAEQAAAGgCAFIgHALIgNAUg");
	this.shape_31.setTransform(257.9,-39.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_32.setTransform(246.8,-35.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_33.setTransform(230.2,-35.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_34.setTransform(214.5,-35.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_35.setTransform(195.2,-35.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAjBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_36.setTransform(178.3,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(166,-47,406,47), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnjhCINkjpIBjFuItkDpg");
	mask.setTransform(29.8,209.8);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-52.9,151,1,1,-15);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(-18.6,179.8,96.8,58.2), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuSHbIAAu0IclAAIAAO0g");
	mask.setTransform(237.5,42.6);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(146,0,183,90), null);


// stage content:
(lib._728x90_longos_prod = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(44.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:321.2,regY:-24.9,x:306,y:45.9,alpha:0.059},0).wait(1).to({x:308.6,alpha:0.143},0).wait(1).to({x:312.5,alpha:0.276},0).wait(1).to({x:318.2,alpha:0.466},0).wait(1).to({x:323,alpha:0.625},0).wait(1).to({x:326,alpha:0.725},0).wait(1).to({x:328,alpha:0.793},0).wait(1).to({x:329.5,alpha:0.842},0).wait(1).to({x:330.6,alpha:0.879},0).wait(1).to({x:331.4,alpha:0.908},0).wait(1).to({x:332.1,alpha:0.93},0).wait(1).to({x:332.7,alpha:0.948},0).wait(1).to({x:333.1,alpha:0.963},0).wait(1).to({x:333.4,alpha:0.974},0).wait(1).to({x:333.7,alpha:0.983},0).wait(1).to({x:333.9,alpha:0.99},0).wait(1).to({x:334,alpha:0.994},0).wait(1).to({x:334.1,alpha:0.998},0).wait(1).to({x:334.2,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(68).to({regX:321.2,regY:-24.9,x:334.3,y:45.9,alpha:0.997},0).wait(1).to({x:334.7,alpha:0.988},0).wait(1).to({x:335.4,alpha:0.97},0).wait(1).to({x:336.6,alpha:0.939},0).wait(1).to({x:338.7,alpha:0.887},0).wait(1).to({x:342.3,alpha:0.798},0).wait(1).to({x:348.7,alpha:0.637},0).wait(1).to({x:356.9,alpha:0.432},0).wait(1).to({x:362.6,alpha:0.289},0).wait(1).to({x:366.2,alpha:0.199},0).wait(1).to({x:368.7,alpha:0.138},0).wait(1).to({x:370.4,alpha:0.095},0).wait(1).to({x:371.6,alpha:0.064},0).wait(1).to({x:372.6,alpha:0.041},0).wait(1).to({x:373.2,alpha:0.024},0).wait(1).to({x:373.7,alpha:0.013},0).wait(1).to({x:374,alpha:0.005},0).wait(1).to({x:374.1,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// Layer 8
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).wait(1).to({regX:307.6,regY:-25.9,x:292.6,y:45.1,alpha:0.066},0).wait(1).to({x:295.2,alpha:0.15},0).wait(1).to({x:298.3,alpha:0.254},0).wait(1).to({x:301.7,alpha:0.369},0).wait(1).to({x:305.2,alpha:0.485},0).wait(1).to({x:308.3,alpha:0.591},0).wait(1).to({x:311,alpha:0.68},0).wait(1).to({x:313.2,alpha:0.754},0).wait(1).to({x:315,alpha:0.814},0).wait(1).to({x:316.5,alpha:0.862},0).wait(1).to({x:317.6,alpha:0.901},0).wait(1).to({x:318.5,alpha:0.931},0).wait(1).to({x:319.2,alpha:0.955},0).wait(1).to({x:319.8,alpha:0.972},0).wait(1).to({x:320.2,alpha:0.985},0).wait(1).to({x:320.4,alpha:0.994},0).wait(1).to({x:320.6,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(135));

	// salt
	this.instance_2 = new lib.salt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(804,41.1,1,1,0,0,0,177,36.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:237.5,regY:45,x:851.1,y:49.7},0).wait(1).to({x:831.8,y:49.2},0).wait(1).to({x:801.7,y:48.6},0).wait(1).to({x:758.3,y:47.6},0).wait(1).to({x:722,y:46.8},0).wait(1).to({x:699.1,y:46.3},0).wait(1).to({x:683.7,y:46},0).wait(1).to({x:672.5,y:45.7},0).wait(1).to({x:664.1,y:45.6},0).wait(1).to({x:657.5,y:45.4},0).wait(1).to({x:652.4,y:45.3},0).wait(1).to({x:648.2,y:45.2},0).wait(1).to({x:645,y:45.1},0).wait(1).to({x:642.4},0).wait(1).to({x:640.4,y:45},0).wait(1).to({x:638.9},0).wait(1).to({x:637.8},0).wait(1).to({x:637},0).wait(1).to({x:636.6},0).wait(1).to({regX:177,regY:36.1,x:576,y:36.1},0).wait(108));

	// rosemary
	this.instance_3 = new lib.saltcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(729.5,122.4,1,1,15,0,0,38.6,209.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:29.8,regY:208.8,x:707,y:116.7},0).wait(1).to({x:686.5,y:113.1},0).wait(1).to({x:654.6,y:107.6},0).wait(1).to({x:608.5,y:99.6},0).wait(1).to({x:570,y:92.9},0).wait(1).to({x:545.7,y:88.7},0).wait(1).to({x:529.3,y:85.8},0).wait(1).to({x:517.5,y:83.8},0).wait(1).to({x:508.5,y:82.2},0).wait(1).to({x:501.6,y:81},0).wait(1).to({x:496.1,y:80.1},0).wait(1).to({x:491.7,y:79.3},0).wait(1).to({x:488.3,y:78.7},0).wait(1).to({x:485.5,y:78.2},0).wait(1).to({x:483.4,y:77.9},0).wait(1).to({x:481.8,y:77.6},0).wait(1).to({x:480.6,y:77.4},0).wait(1).to({x:479.8,y:77.2},0).wait(1).to({x:479.4},0).wait(1).to({regX:38.6,regY:209.8,x:487.5,y:80.4},0).wait(112));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_4.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(135));

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