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
p.nominalBounds = new cjs.Rectangle(0,0,300,180);// helper functions:

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

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,158.3,89), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgOAPIgGgGQgBgEAAgFQAAgDABgEIAGgHQAGgHAIAAQAJAAAGAHQADACACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgGgHg");
	this.shape.setTransform(86,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_1.setTransform(76.2,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_2.setTransform(62.8,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_3.setTransform(48.2,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgIBLIgPgEIgNgHIgMgJIgKgLQgEgGgDgHQgEgHgBgIQgCgIAAgIQAAgHACgIIAFgPIAHgNIAKgLIAMgJIANgHIAPgEIAPgCQAJAAAKACQAIACAIADQAIAEAGAFQAGAFAFAGIgcAYQgGgHgHgEQgJgFgLAAQgIAAgHADQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAGAIAEQAIADAIAAQAOAAAPgGIAAgPIgdAAIAAgeIBBAAIAABAQgPALgLAEQgIADgJABQgKACgMAAQgIAAgIgCg");
	this.shape_4.setTransform(32.4,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_5.setTransform(21.2,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_6.setTransform(9.9,74.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_7.setTransform(85.9,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_8.setTransform(73.5,53.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_9.setTransform(60.6,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_10.setTransform(47.7,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_11.setTransform(37.9,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_12.setTransform(28.7,53.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_13.setTransform(9.5,53.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_14.setTransform(122.7,32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_15.setTransform(109.6,32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_16.setTransform(94.9,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAgBNIgHgSIgzAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_17.setTransform(80,32.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_18.setTransform(65.3,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_19.setTransform(49.3,32.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AAgBNIgIgSIgyAAIgIASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_20.setTransform(33.9,32.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_21.setTransform(20.9,32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_22.setTransform(8,32.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_23.setTransform(141.2,11.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgZBIQgPgGgGgFIgIgIQgDgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHACAFQABAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAEgBADgEQADgDACgFQABgFABgHIAAhaIAoAAIAABbQAAAHgCAHQAAAHgDAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_24.setTransform(126.2,11.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIAMAJIAJALIAIANIAEAPQACAIABAHQgBAIgCAIQgBAIgDAHIgIANIgJALIgMAJIgOAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_25.setTransform(109.9,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_26.setTransform(89.6,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_27.setTransform(76.7,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAgBNIgIgSIgyAAIgIASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_28.setTransform(63.2,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgJBLIgOgEIgNgHIgLgJIgKgLIgHgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAHgNIAJgLQAFgFAGgEIANgHIAOgEIAOgCQAMAAAKADQAJACAIAFQAJAEAGAGQAFAFAGAIIgfAUQgEgIgIgEIgJgEQgGgCgGAAQgHAAgHADQgGADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAGADQAIADAHAAQAHAAAFgCIAKgEQAIgFAFgKIAfAUQgGAJgGAHQgHAHgIAEQgIAFgKACQgKACgLAAQgHAAgIgCg");
	this.shape_29.setTransform(48.3,11.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_30.setTransform(29.3,11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAiBJIAbhGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_31.setTransform(12.3,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,150.2,89), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao2HjIAAvFIRtAAIAAPFg");
	mask.setTransform(82.3,135.9);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(25.6,87.6,113.5,92.4), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOOJIAA8HIYqAAIAAcHg");
	mask.setTransform(150,90.6);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(142.1,1.1,157.9,178.9), null);


// stage content:
(lib._300x250_longos_sea = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(123));

	// Layer 8
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).wait(1).to({regX:78.7,regY:43.1,x:54.4,y:114.1,alpha:0.066},0).wait(1).to({x:57.8,alpha:0.15},0).wait(1).to({x:61.9,alpha:0.254},0).wait(1).to({x:66.5,alpha:0.369},0).wait(1).to({x:71.2,alpha:0.485},0).wait(1).to({x:75.4,alpha:0.591},0).wait(1).to({x:78.9,alpha:0.68},0).wait(1).to({x:81.9,alpha:0.754},0).wait(1).to({x:84.3,alpha:0.814},0).wait(1).to({x:86.2,alpha:0.862},0).wait(1).to({x:87.7,alpha:0.901},0).wait(1).to({x:88.9,alpha:0.931},0).wait(1).to({x:89.9,alpha:0.955},0).wait(1).to({x:90.6,alpha:0.972},0).wait(1).to({x:91.1,alpha:0.985},0).wait(1).to({x:91.4,alpha:0.994},0).wait(1).to({x:91.6,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

	// text
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:74.8,regY:43.1,x:40.8,y:113.9,alpha:0.059},0).wait(1).to({x:45,alpha:0.143},0).wait(1).to({x:51.6,alpha:0.276},0).wait(1).to({x:61.1,alpha:0.466},0).wait(1).to({x:69.1,alpha:0.625},0).wait(1).to({x:74.1,alpha:0.725},0).wait(1).to({x:77.5,alpha:0.793},0).wait(1).to({x:79.9,alpha:0.842},0).wait(1).to({x:81.8,alpha:0.879},0).wait(1).to({x:83.2,alpha:0.908},0).wait(1).to({x:84.3,alpha:0.93},0).wait(1).to({x:85.2,alpha:0.948},0).wait(1).to({x:85.9,alpha:0.963},0).wait(1).to({x:86.5,alpha:0.974},0).wait(1).to({x:86.9,alpha:0.983},0).wait(1).to({x:87.3,alpha:0.99},0).wait(1).to({x:87.5,alpha:0.994},0).wait(1).to({x:87.7,alpha:0.998},0).wait(1).to({x:87.8,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(56).to({regX:74.8,regY:43.1,x:87.9,y:113.9,alpha:0.997},0).wait(1).to({x:88.3,alpha:0.988},0).wait(1).to({x:89,alpha:0.97},0).wait(1).to({x:90.2,alpha:0.939},0).wait(1).to({x:92.3,alpha:0.887},0).wait(1).to({x:95.9,alpha:0.798},0).wait(1).to({x:102.3,alpha:0.637},0).wait(1).to({x:110.5,alpha:0.432},0).wait(1).to({x:116.2,alpha:0.289},0).wait(1).to({x:119.8,alpha:0.199},0).wait(1).to({x:122.3,alpha:0.138},0).wait(1).to({x:124,alpha:0.095},0).wait(1).to({x:125.2,alpha:0.064},0).wait(1).to({x:126.2,alpha:0.041},0).wait(1).to({x:126.8,alpha:0.024},0).wait(1).to({x:127.3,alpha:0.013},0).wait(1).to({x:127.6,alpha:0.005},0).wait(1).to({x:127.7,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// salt
	this.instance_2 = new lib.salt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(341,184.1,1,1,0,0,0,177,36.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:150,regY:90,x:305.8,y:234},0).wait(1).to({x:294.4,y:228.5},0).wait(1).to({x:277.7,y:220.5},0).wait(1).to({x:252.7,y:208.5},0).wait(1).to({x:226.2,y:195.7},0).wait(1).to({x:207.8,y:186.9},0).wait(1).to({x:195.5,y:180.9},0).wait(1).to({x:186.6,y:176.7},0).wait(1).to({x:180,y:173.5},0).wait(1).to({x:174.8,y:171},0).wait(1).to({x:170.6,y:169},0).wait(1).to({x:167.3,y:167.4},0).wait(1).to({x:164.6,y:166.1},0).wait(1).to({x:162.4,y:165},0).wait(1).to({x:160.6,y:164.1},0).wait(1).to({x:159.1,y:163.5},0).wait(1).to({x:158,y:162.9},0).wait(1).to({x:157.1,y:162.5},0).wait(1).to({x:156.4,y:162.2},0).wait(1).to({regX:177,regY:36.1,x:183,y:108.1},0).wait(96));

	// meaty
	this.instance_3 = new lib.saltcopy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(339.5,275.6,1,1,0,0,0,135.5,147.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:82.3,regY:133.8,x:274.3,y:258.4},0).wait(1).to({x:257,y:253.6},0).wait(1).to({x:230.1,y:246},0).wait(1).to({x:191.2,y:235.2},0).wait(1).to({x:158.8,y:226.1},0).wait(1).to({x:138.3,y:220.4},0).wait(1).to({x:124.5,y:216.5},0).wait(1).to({x:114.5,y:213.8},0).wait(1).to({x:107,y:211.6},0).wait(1).to({x:101.1,y:210},0).wait(1).to({x:96.5,y:208.7},0).wait(1).to({x:92.8,y:207.7},0).wait(1).to({x:89.9,y:206.9},0).wait(1).to({x:87.6,y:206.2},0).wait(1).to({x:85.8,y:205.7},0).wait(1).to({x:84.4,y:205.3},0).wait(1).to({x:83.4,y:205.1},0).wait(1).to({x:82.8,y:204.9},0).wait(1).to({x:82.4,y:204.8},0).wait(1).to({regX:135.5,regY:147.6,x:135.5,y:218.6},0).wait(98));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(123));

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
		{src:"images/bb_meat.jpg", id:"bb_meat"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;