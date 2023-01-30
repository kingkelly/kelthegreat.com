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
p.nominalBounds = new cjs.Rectangle(0,0,273,182);// helper functions:

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
	this.shape.graphics.f("#E2231A").s().p("AgOAPIgGgGQgBgEAAgFQAAgDABgEIAGgHQAGgHAIAAQAJAAAGAHQADACACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgGgHg");
	this.shape.setTransform(153.1,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_1.setTransform(143,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAFAPQACAIAAAHQAAAIgCAIQgCAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_2.setTransform(126.4,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgMgJQgGgFgEgGIgIgNQgDgHgCgIQgBgIAAgIQAAgHABgIIAFgPIAIgNQAEgGAGgFIAMgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAFAPQACAIAAAHQAAAIgCAIQgCAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIgBAIQABAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHgBgJQABgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(109.2,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAhBJIAbhGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBAAAAIgmhPIgkBPIgBABIgBgBg");
	this.shape_4.setTransform(90.4,74.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_5.setTransform(73.3,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_6.setTransform(58.4,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_7.setTransform(43.1,74.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_8.setTransform(23.4,74.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_9.setTransform(9.5,74.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_10.setTransform(148,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(132,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_12.setTransform(116.6,53.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_13.setTransform(103.3,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_14.setTransform(90.4,53.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_15.setTransform(78,53.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgPBLIgPgEIgOgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIgBgIQABgHACgIIAEgPIAIgNQAEgGAFgFIAMgJIAOgHIAPgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_16.setTransform(63.4,53.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_17.setTransform(48,53.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_18.setTransform(27.2,53.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_19.setTransform(10.6,53.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_20.setTransform(112.8,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_21.setTransform(98.8,32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_22.setTransform(85.6,32.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAFAPQACAIAAAHQAAAIgCAIQgCAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_23.setTransform(69.7,32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgnBNIg+iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAiBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBAAAAIgmhPIgkBPIgBABIgCgBg");
	this.shape_24.setTransform(45.6,32.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIAMAJIAJALIAIANIAEAPQACAIABAHQgBAIgCAIQgBAIgDAHIgIANIgJALIgMAJIgOAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_25.setTransform(26.7,32.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_26.setTransform(10,32.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAdBLIgdgzIgfAzIgqAAIA0hQIgrhFIAtAAIAUAmIAXgmIApAAIgrBEIAzBRg");
	this.shape_27.setTransform(50.1,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_28.setTransform(35.1,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgPBKQgHgCgHgDQgFgDgFgFIgHgKIAegTIAFAHQAEADAEAAQAEAAADgDQADgDAAgHIAAhoIAoAAIAABrQAAAKgDAJQgDAIgGAFQgGAGgJADQgIADgLAAQgIAAgIgCg");
	this.shape_29.setTransform(21.8,11.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_30.setTransform(9.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(0,0,158.3,89), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgDACgEIAEgHQAHgHAIAAQAJAAAGAHQADACACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgHgHg");
	this.shape.setTransform(93.2,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_1.setTransform(84.2,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_2.setTransform(71.8,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_3.setTransform(62,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_4.setTransform(50.7,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAiBJIAbhGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_5.setTransform(32.6,74.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_6.setTransform(9.5,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_7.setTransform(136.8,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIALALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgLALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_8.setTransform(120.8,53.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgyBLIAAiVIBlAAIAAAiIg9AAIAAAeIA2AAIAAAhIg2AAIAAA0g");
	this.shape_9.setTransform(106.4,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_10.setTransform(87.6,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(71.6,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAFgBADgEQADgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgBAHQgBAHgDAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_12.setTransform(56,53.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIALALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgLALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_13.setTransform(39.8,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_14.setTransform(24.4,53.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_15.setTransform(9.5,53.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_16.setTransform(109.6,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_17.setTransform(95.6,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_18.setTransform(82.9,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAGAFQAHAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgFAHgKAEIAKADQAFADADAEQAEAFADAFQACAHAAAHQAAALgDAIQgFAIgGAFQgIAGgKADQgLADgOAAgAgVArIAYAAQAJAAAFgEQADgEAAgHQAAgIgEgEQgEgEgJAAIgYAAgAgVgPIAVAAQAHAAAEgEQAEgDgBgHQAAgGgCgEQgEgDgIAAIgVAAg");
	this.shape_19.setTransform(69.5,32.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_20.setTransform(50.9,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AAABLIhHiWIArAAIAdBFIAehFIApAAIhHCWIgBABIAAgBg");
	this.shape_21.setTransform(37,32.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_22.setTransform(25.3,32.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_23.setTransform(9.9,32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_24.setTransform(130.8,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_25.setTransform(118,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_26.setTransform(104.6,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAUBLIgig3IgNAQIAAAnIgoAAIAAiVIAoAAIAAA+IAug+IArAAIgyBBIA4BUg");
	this.shape_27.setTransform(90.9,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAhBNIgJgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_28.setTransform(75.4,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAHAFQAGAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgGAHgJAEIAKADQAFADAEAEQAEAFACAFQACAHAAAHQAAALgEAIQgDAIgIAFQgHAGgLADQgLADgNAAgAgUArIAWAAQAKAAAFgEQADgEAAgHQAAgIgEgEQgEgEgKAAIgWAAgAgUgPIAUAAQAIAAADgEQAEgDAAgHQAAgGgEgEQgEgDgHAAIgUAAg");
	this.shape_29.setTransform(61.3,11.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_30.setTransform(41.9,11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAFgBADgEQADgDABgFQACgFAAgHIAAhaIAoAAIAABbQAAAHgBAHQgCAHgCAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_31.setTransform(26.9,11.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_32.setTransform(10.6,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,145.8,89), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgEACgEIAEgGQAHgHAIABQAJgBAGAHQADADACADQACAEAAAEQAAAFgCAEQgCAEgDACQgGAGgJABQgIgBgHgGg");
	this.shape.setTransform(87.8,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgEACgEIAEgGQAHgHAIABQAJgBAGAHQADADACADQACAEAAAEQAAAFgCAEQgCAEgDACQgGAGgJABQgIgBgHgGg");
	this.shape_1.setTransform(81.9,59.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgEACgEIAEgGQAHgHAIABQAJgBAGAHQADADACADQACAEAAAEQAAAFgCAEQgCAEgDACQgGAGgJABQgIgBgHgGg");
	this.shape_2.setTransform(75.9,59.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_3.setTransform(65.8,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAhBNIgIgSIgzAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_4.setTransform(50.4,53.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_5.setTransform(36.9,53.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_6.setTransform(23.4,53.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAGAFQAHAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgGAHgJAEIAKADQAFADAEAEQAEAFACAFQACAHAAAHQAAALgEAIQgEAIgGAFQgIAGgKADQgLADgOAAgAgVArIAXAAQAKAAAFgEQADgEAAgHQAAgIgEgEQgEgEgKAAIgXAAgAgVgPIAVAAQAHAAAEgEQADgDAAgHQAAgGgDgEQgDgDgIAAIgVAAg");
	this.shape_7.setTransform(9.3,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_8.setTransform(139.1,32.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_9.setTransform(125.1,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AAUBLIgig3IgNAQIAAAnIgoAAIAAiVIAoAAIAAA+IAug+IArAAIgyBBIA4BUg");
	this.shape_10.setTransform(111.5,32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AAgBNIgIgSIgyAAIgIASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_11.setTransform(96,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAHAFQAGAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgGAHgJAEIAKADQAFADADAEQAEAFADAFQACAHAAAHQAAALgDAIQgFAIgHAFQgHAGgLADQgKADgOAAgAgUArIAXAAQAJAAAEgEQAEgEAAgHQAAgIgEgEQgEgEgJAAIgXAAgAgUgPIAUAAQAIAAADgEQADgDABgHQAAgGgDgEQgFgDgHAAIgUAAg");
	this.shape_12.setTransform(81.8,32.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_13.setTransform(61.4,32.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_14.setTransform(47,32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_15.setTransform(35,32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_16.setTransform(21.6,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgyBLIAAiVIBlAAIAAAiIg9AAIAAAeIA2AAIAAAhIg2AAIAAA0g");
	this.shape_17.setTransform(8.4,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_18.setTransform(125.2,11.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAFgBADgEQADgDABgFQACgFAAgHIAAhaIAoAAIAABbQAAAHgBAHQgCAHgCAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_19.setTransform(110.1,11.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_20.setTransform(93.9,11.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_21.setTransform(74,11.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAUBLIgig3IgNAQIAAAnIgoAAIAAiVIAoAAIAAA+IAug+IArAAIgyBBIA4BUg");
	this.shape_22.setTransform(60.3,11.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_23.setTransform(48.9,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_24.setTransform(39.8,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_25.setTransform(25.3,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAFgBADgEQADgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgBAHQgBAHgDAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_26.setTransform(9.7,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,148.4,68), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtgOJIAAuEIEsAAIAAjvICWAAIAAqeIT/AAIAAajIxfAAIAABug");
	mask.setTransform(184.5,91.6);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(98,1.1,173,180.9), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAtHnIAAAAIAAABIAAgBgAAonmIBuAKQATCHABAAQh9M5AAADIjWAAQABAADQvNg");
	mask.setTransform(73,135.8);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(56,87,34,95), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjRDRQhXhWABh7QgBh6BXhXQBXhWB6AAQB7AABXBWQBWBXABB6QgBB7hWBWQhXBYh7AAQh6AAhXhYg");
	mask.setTransform(35.2,137.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(5.6,107.5,59.3,59.3), null);


// stage content:
(lib._300x250_longos_bread = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68B264").s().p("AA4DYQhxhIg3iaIgpiBQgZhMgdgwQBMAABMAvQBxBJA3CZQAPArAaBXQAZBMAdAxQhMgBhMgwg");
	this.shape.setTransform(130.5,27.9,0.231,0.231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1CB38").s().p("AlIFXQAvhAAthoQAwh4Abg5QAvhlA2hAQBDhSBkgxQBzg4BrALQgwBBgtBoIhKCxQgvBlg1BAQhEBShkAxQhfAvhYAAQgUAAgTgDg");
	this.shape_1.setTransform(144.2,22.6,0.231,0.231);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC342E").s().p("Aj/OiQh6hCAEh7QACh5B6g/QBwg5C3ADIA7ABQAOAAAGAKQAHALgHAOQgFAOgIAGQgJAIgPAAIgqAAQhEgCgyA0QgxAzgCBNQAABLA1A1QAzAzBHAAQCeAAC+jZQBziEBkixQhOAShQgGQhIgGg7gmQg5glghg8QhJBJhYApQhbAqhIgLQhrAAg9g+Qg/hBAihdQAJgaBUiJQA/hoAog+QAegvgGgSQgHgUg3AjQhNAyhYBcQhcBhhSB6Ih/DbIkgABIDClaQgmgEgfgQQgRgKgegXQAAAUgMAqQg0CaiWBkQiYBmi2gCQhgAAhGgoQhDBMhmAyQhgAyh8gTQj7gqiDiXQgiAdg4AdQhwA6htADQiRAFhahBQhZhBABhrQACh2BehYQBphhCjAAQBTAABcAlQBlApA+BDQA9hRCHkIQCqlNBWiTQA/hrBng+QBlg9BsAAQBxAAA4BTQA1BRgUB+QgEAXggAJQgRAFgPgEQgOgEgDgKIAAgJQANhKgRgwQgRgygpAAQhCAAiUECQhTCRicEuQg8BvhPBWQg8BChhBOQAzA1BBAuQA7AqA6AcQCnBbBwh0Qg2gzgQhJQgQhMAdhTQA5irCXhgQCLhZCxABQB0ADBNAuQBKAsAeBNQAVAoAdAbQAdAdAfAKQAdAGAOgEQAOgEAPgSICEjdIEnABIhDByQBKg8BLgkQBXgpBGAAQBhAAAtBDQAvBFg1BRQi0EYgYAsQgYAtAEAeQAFAdAcAAQBGAACZitQgOhgAvhcQBIiSCHhQQCEhPCcAEQBdADBBAjQAwAZAcAoIAlg+IEggBIlKJIQArgOA2gnQA0gmBjhWQADgqAQguQA5irCXhgQCLhZCxABQBoADBJAlQBGAkAkBBQBcBnB4AMQCyAWDFj+IAjgpQATgRAZAAQAXAAAFAUQAFAVgSAoQgVAugDBDQgDAtAGA/QAEBmglBYQgnBchQBGQCKgmC0hnIAdgQQAIgFAJAFQAJAEADALQAEALgDALQgCAMgJAFQguAegUAKQjKBggsARQhcAjh+ANQikAShXhLQhCg5AAhRQAAhXA0grQAogiA7AAQA8AAAgAtQAaAkgFAlQgEAngdAdQgjAig7AGQADAUAYASQAXASAgAFQA6AJAggyQAqg4ARhOQAShPgKhfQhSAmh2gJQgfgDg2gPQgzgQgngSQgZDMiuCCQigB3jDgFQhGgCgygSQgogOgjgcQhAg0gahAIAAABQhXBEhCAkQhPAshQAQQheCTicCUQk5Enk3AAQi4AAhug8gEgrAABnQgyAwAABCQAAA/A2AvQA6A0BZAAQBMAABLg6QAXgTA8g/QhFhggngjQg+g4hKgDQhXAAg2A2gAZzifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAKQifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAzAifQhbBQhFB1QhEB2gFBXQgFBXA9AFQA9AGBchQQBbhPBEh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhVBKg");
	this.shape_2.setTransform(82.6,39.6,0.231,0.231);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F2EB").s().p("AsBE2IAAprIYDAAIAAJrg");
	this.shape_3.setTransform(85.1,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(193));

	// Layer 2
	this.instance = new lib.Symbol2copy();
	this.instance.parent = this;
	this.instance.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).wait(1).to({regX:78.7,regY:43.1,x:54.4,y:114.1,alpha:0.067},0).wait(1).to({x:57.9,alpha:0.153},0).wait(1).to({x:62,alpha:0.255},0).wait(1).to({x:66.4,alpha:0.367},0).wait(1).to({x:70.8,alpha:0.477},0).wait(1).to({x:74.8,alpha:0.576},0).wait(1).to({x:78.2,alpha:0.662},0).wait(1).to({x:81.1,alpha:0.734},0).wait(1).to({x:83.4,alpha:0.794},0).wait(1).to({x:85.4,alpha:0.843},0).wait(1).to({x:87,alpha:0.882},0).wait(1).to({x:88.3,alpha:0.915},0).wait(1).to({x:89.3,alpha:0.94},0).wait(1).to({x:90.1,alpha:0.96},0).wait(1).to({x:90.7,alpha:0.976},0).wait(1).to({x:91.2,alpha:0.987},0).wait(1).to({x:91.5,alpha:0.994},0).wait(1).to({x:91.6,alpha:0.999},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:72.5,regY:43.1,x:48.2,y:114.1,alpha:0.066},0).wait(1).to({x:51.6,alpha:0.15},0).wait(1).to({x:55.7,alpha:0.254},0).wait(1).to({x:60.3,alpha:0.369},0).wait(1).to({x:65,alpha:0.485},0).wait(1).to({x:69.2,alpha:0.591},0).wait(1).to({x:72.7,alpha:0.68},0).wait(1).to({x:75.7,alpha:0.754},0).wait(1).to({x:78.1,alpha:0.814},0).wait(1).to({x:80,alpha:0.862},0).wait(1).to({x:81.5,alpha:0.901},0).wait(1).to({x:82.7,alpha:0.931},0).wait(1).to({x:83.7,alpha:0.955},0).wait(1).to({x:84.4,alpha:0.972},0).wait(1).to({x:84.9,alpha:0.985},0).wait(1).to({x:85.2,alpha:0.994},0).wait(1).to({x:85.4,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(52).to({regX:72.5,regY:43.1,x:87.8,y:114.1,alpha:0.942},0).wait(1).to({x:90.8,alpha:0.868},0).wait(1).to({x:94.3,alpha:0.779},0).wait(1).to({x:98.4,alpha:0.678},0).wait(1).to({x:102.6,alpha:0.572},0).wait(1).to({x:106.7,alpha:0.471},0).wait(1).to({x:110.3,alpha:0.381},0).wait(1).to({x:113.4,alpha:0.304},0).wait(1).to({x:115.9,alpha:0.239},0).wait(1).to({x:118.1,alpha:0.186},0).wait(1).to({x:119.8,alpha:0.142},0).wait(1).to({x:121.3,alpha:0.106},0).wait(1).to({x:122.4,alpha:0.077},0).wait(1).to({x:123.3,alpha:0.054},0).wait(1).to({x:124.1,alpha:0.036},0).wait(1).to({x:124.6,alpha:0.022},0).wait(1).to({x:125,alpha:0.012},0).wait(1).to({x:125.3,alpha:0.005},0).wait(1).to({x:125.5,alpha:0.001},0).wait(1).to({regX:79.1,regY:34,x:132.1,y:105,alpha:0},0).wait(12));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:74.5,regY:32.6,x:40.5,y:103.4,alpha:0.059},0).wait(1).to({x:44.7,alpha:0.143},0).wait(1).to({x:51.3,alpha:0.276},0).wait(1).to({x:60.8,alpha:0.466},0).wait(1).to({x:68.8,alpha:0.625},0).wait(1).to({x:73.8,alpha:0.725},0).wait(1).to({x:77.2,alpha:0.793},0).wait(1).to({x:79.6,alpha:0.842},0).wait(1).to({x:81.5,alpha:0.879},0).wait(1).to({x:82.9,alpha:0.908},0).wait(1).to({x:84,alpha:0.93},0).wait(1).to({x:84.9,alpha:0.948},0).wait(1).to({x:85.6,alpha:0.963},0).wait(1).to({x:86.2,alpha:0.974},0).wait(1).to({x:86.6,alpha:0.983},0).wait(1).to({x:87,alpha:0.99},0).wait(1).to({x:87.2,alpha:0.994},0).wait(1).to({x:87.4,alpha:0.998},0).wait(1).to({x:87.5,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(47).to({regX:74.5,regY:32.6,x:90,y:103.4,alpha:0.938},0).wait(1).to({x:93.1,alpha:0.86},0).wait(1).to({x:96.9,alpha:0.764},0).wait(1).to({x:101.3,alpha:0.656},0).wait(1).to({x:105.7,alpha:0.545},0).wait(1).to({x:109.9,alpha:0.441},0).wait(1).to({x:113.5,alpha:0.351},0).wait(1).to({x:116.5,alpha:0.275},0).wait(1).to({x:119,alpha:0.212},0).wait(1).to({x:121,alpha:0.162},0).wait(1).to({x:122.7,alpha:0.12},0).wait(1).to({x:124,alpha:0.087},0).wait(1).to({x:125.1,alpha:0.061},0).wait(1).to({x:125.9,alpha:0.04},0).wait(1).to({x:126.5,alpha:0.025},0).wait(1).to({x:127,alpha:0.013},0).wait(1).to({x:127.3,alpha:0.006},0).wait(1).to({x:127.4,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(94));

	// salt
	this.instance_3 = new lib.salt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(341,194.1,1,1,0,0,0,177,36.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:35.2,regY:137.1,x:191.3,y:289.8},0).wait(1).to({x:180,y:282.1},0).wait(1).to({x:162.3,y:270.2},0).wait(1).to({x:136.8,y:253.1},0).wait(1).to({x:115.4,y:238.8},0).wait(1).to({x:102,y:229.8},0).wait(1).to({x:92.9,y:223.7},0).wait(1).to({x:86.4,y:219.3},0).wait(1).to({x:81.4,y:215.9},0).wait(1).to({x:77.6,y:213.4},0).wait(1).to({x:74.5,y:211.3},0).wait(1).to({x:72.1,y:209.7},0).wait(1).to({x:70.2,y:208.4},0).wait(1).to({x:68.7,y:207.4},0).wait(1).to({x:67.5,y:206.6},0).wait(1).to({x:66.6,y:206},0).wait(1).to({x:66,y:205.6},0).wait(1).to({x:65.5,y:205.3},0).wait(1).to({x:65.3,y:205.1},0).wait(1).to({regX:177,regY:36.1,x:207,y:104.1},0).wait(170));

	// rosemary
	this.instance_4 = new lib.saltcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(237.5,377.8,1,1,0,0,0,38.5,209.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:73,regY:134.5,x:262,y:296.9},0).wait(1).to({x:247.6,y:288.8},0).wait(1).to({x:225.1,y:276.3},0).wait(1).to({x:192.8,y:258.2},0).wait(1).to({x:165.7,y:243.1},0).wait(1).to({x:148.7,y:233.5},0).wait(1).to({x:137.2,y:227.1},0).wait(1).to({x:128.9,y:222.5},0).wait(1).to({x:122.6,y:218.9},0).wait(1).to({x:117.7,y:216.2},0).wait(1).to({x:113.8,y:214.1},0).wait(1).to({x:110.8,y:212.3},0).wait(1).to({x:108.3,y:211},0).wait(1).to({x:106.4,y:209.9},0).wait(1).to({x:104.9,y:209.1},0).wait(1).to({x:103.8,y:208.4},0).wait(1).to({x:103,y:208},0).wait(1).to({x:102.4,y:207.7},0).wait(1).to({x:102.1,y:207.5},0).wait(1).to({regX:38.5,regY:209.8,x:67.5,y:282.8},0).wait(168));

	// meaty
	this.instance_5 = new lib.saltcopy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(292.5,386.5,1,1,0,0,0,135.5,147.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).wait(1).to({regX:184.5,regY:91.5,x:334.4,y:321},0).wait(1).to({x:324.3,y:307.4},0).wait(1).to({x:308.4,y:286.3},0).wait(1).to({x:285.6,y:255.8},0).wait(1).to({x:266.5,y:230.4},0).wait(1).to({x:254.4,y:214.3},0).wait(1).to({x:246.3,y:203.5},0).wait(1).to({x:240.5,y:195.7},0).wait(1).to({x:236,y:189.8},0).wait(1).to({x:232.6,y:185.2},0).wait(1).to({x:229.8,y:181.5},0).wait(1).to({x:227.7,y:178.6},0).wait(1).to({x:226,y:176.4},0).wait(1).to({x:224.6,y:174.5},0).wait(1).to({x:223.6,y:173.1},0).wait(1).to({x:222.8,y:172.1},0).wait(1).to({x:222.2,y:171.3},0).wait(1).to({x:221.8,y:170.8},0).wait(1).to({x:221.6,y:170.5},0).wait(1).to({regX:135.5,regY:147.6,x:172.5,y:226.5},0).wait(166));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
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