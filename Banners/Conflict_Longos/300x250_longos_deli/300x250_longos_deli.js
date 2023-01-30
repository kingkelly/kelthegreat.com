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
	this.shape.graphics.f("#E2231A").s().p("AgOAPIgGgGQgBgEAAgFQAAgDABgEIAGgHQAGgHAIAAQAJAAAGAHQADACACAFQACAEAAADQAAAFgCAEQgCADgDADQgGAHgJgBQgIABgGgHg");
	this.shape.setTransform(74.5,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_1.setTransform(65.5,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_2.setTransform(52,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgBgIgBgIQABgHABgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAFAPQACAIAAAHQAAAIgCAIQgCAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(36,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_4.setTransform(20.9,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_5.setTransform(8,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_6.setTransform(132.2,53.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_7.setTransform(118.7,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_8.setTransform(104.2,53.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_9.setTransform(89.8,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIAKALIAIANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgIANIgKALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_10.setTransform(74.8,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(58.1,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_12.setTransform(42.7,53.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_13.setTransform(23.4,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_14.setTransform(9.5,53.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_15.setTransform(156,32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_16.setTransform(142.1,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_17.setTransform(128.9,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_18.setTransform(116,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_19.setTransform(104,32.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_20.setTransform(90.6,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_21.setTransform(76.4,32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_22.setTransform(61.5,32.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgZBIQgPgGgGgFIgHgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHACAFQABAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAEgBAEgEQADgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgBAHQgBAHgDAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_23.setTransform(41.1,32.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIAKALIAIANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgIANIgKALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_24.setTransform(24.8,32.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgTBLIAAg6Ig0hbIArAAIAdA3IAdg3IArAAIg0BaIAAA7g");
	this.shape_25.setTransform(9.1,32.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_26.setTransform(184.4,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_27.setTransform(171.9,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgHBLIgQgEIgNgHIgMgJIgKgLQgEgGgEgHQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNIAKgLIAMgJIANgHIAPgEIAPgCQAKAAAJACQAIACAIADQAHAEAHAFQAGAFAFAGIgcAYQgGgHgHgEQgJgFgLAAQgIAAgHADQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAIQADAHAFAGQAGAGAHAEQAHADAJAAQAOAAAPgGIAAgPIgdAAIAAgeIBBAAIAABAQgPALgKAEQgJADgJABQgKACgMAAQgIAAgHgCg");
	this.shape_28.setTransform(157.3,11.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_29.setTransform(137,11.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_30.setTransform(123.3,11.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAFgBADgEQADgDABgFQACgFAAgHIAAhaIAoAAIAABbQAAAHgBAHQgCAHgCAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_31.setTransform(109.2,11.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgMgJQgFgFgEgGIgIgNQgDgHgBgIQgDgIAAgIQAAgHADgIIAEgPIAIgNQAEgGAFgFIAMgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIANAJIAKALIAHANIAEAPQACAIAAAHQAAAIgCAIQgBAIgDAHIgHANIgKALIgNAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_32.setTransform(93,11.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AgnBNIg+iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAiBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgCgBg");
	this.shape_33.setTransform(74.1,11.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_34.setTransform(52.1,11.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_35.setTransform(38.2,11.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_36.setTransform(22.8,11.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_37.setTransform(8.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,193,89), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgOAQIgGgHQgBgEAAgFQAAgEABgEIAGgHQAGgFAIAAQAJAAAGAFQAEADABAEQACAEAAAEQAAAFgCAEQgBADgEAEQgGAFgJAAQgIAAgGgFg");
	this.shape.setTransform(98.4,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgTBLIAAg6Ig1hbIAsAAIAdA3IAeg3IApAAIgzBaIAAA7g");
	this.shape_1.setTransform(90.3,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAFgBADgEQACgDACgFQACgFAAgHIAAhaIAoAAIAABbQAAAHgBAHQgCAHgCAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_2.setTransform(75.6,32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAHAFQAGAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgGAHgJAEIAKADQAFADAEAEQAEAFACAFQACAHAAAHQAAALgEAIQgDAIgIAFQgHAGgLADQgLADgNAAgAgUArIAWAAQAKAAAFgEQADgEAAgHQAAgIgEgEQgEgEgKAAIgWAAgAgUgPIAUAAQAIAAADgEQAEgDAAgHQAAgGgEgEQgEgDgHAAIgUAAg");
	this.shape_3.setTransform(61.3,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgZBIQgPgGgGgFIgHgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHACAFQABAFADADQADAEAFABQAFACAFAAQAGAAAFgCQAEgBAEgEQADgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgBAHQgBAHgDAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_4.setTransform(41.1,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIAKALIAIANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgIANIgKALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_5.setTransform(24.8,32.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgTBLIAAg6Ig0hbIArAAIAdA3IAdg3IArAAIg0BaIAAA7g");
	this.shape_6.setTransform(9.1,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_7.setTransform(125.5,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_8.setTransform(112,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIAMAJIAJALIAIANIAEAPQACAIABAHQgBAIgCAIQgBAIgDAHIgIANIgJALIgMAJIgOAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_9.setTransform(96,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgyBLIAAiVIBlAAIAAAiIg9AAIAAAeIA2AAIAAAhIg2AAIAAA0g");
	this.shape_10.setTransform(81.6,11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_11.setTransform(69.3,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAGAFQAHAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgGAHgJAEIAKADQAFADADAEQAEAFADAFQACAHAAAHQAAALgDAIQgEAIgHAFQgIAGgKADQgMADgNAAgAgVArIAYAAQAJAAAEgEQAEgEAAgHQAAgIgEgEQgEgEgJAAIgYAAgAgVgPIAVAAQAHAAAEgEQAEgDgBgHQAAgGgCgEQgEgDgIAAIgVAAg");
	this.shape_12.setTransform(55.9,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgSBLIAAg6Ig1hbIAsAAIAcA3IAdg3IArAAIg1BaIAAA7g");
	this.shape_13.setTransform(36.2,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_14.setTransform(22.4,11.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_15.setTransform(8.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,133.7,47), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AGdNRQAAgDjfhuQizhYgigTIgIgFIgNABIi3gmIh7iGIjSiIIhoiUQi7kLAAgCQAAgDHnl0QHnl1AAgCQFPFPAAgFQAAgDCOGBQCOGAAAgCIBuJdIjbACIhhAAQh7AAAAgCg");
	mask.setTransform(212.8,82.2);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(127.6,0,170.5,165), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnfDyIAenfQAAgCEOAAQENAAAAgDQAAgCBEA8QBDA8AAgDQAAgCBfBmQBfBmAAgDQAAgCAhBGQAeBBACACIngAUQmUAQg/AAIgMgBg");
	mask.setTransform(159.5,144.3);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(111.6,120,96,45), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlRFRQiLiLgBjGQABjFCLiMQCMiMDFABQDGgBCMCMQCLCMAADFQAADGiLCLQiMCNjGAAQjFAAiMiNg");
	mask.setTransform(62.8,126.8);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(15.1,79,95.5,86), null);


// stage content:
(lib._300x250_longos_deli = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(204));

	// Layer 2
	this.instance = new lib.Symbol2copy();
	this.instance.parent = this;
	this.instance.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).wait(1).to({regX:78.7,regY:43.1,x:54.4,y:114.1,alpha:0.067},0).wait(1).to({x:57.9,alpha:0.153},0).wait(1).to({x:62,alpha:0.255},0).wait(1).to({x:66.4,alpha:0.367},0).wait(1).to({x:70.8,alpha:0.477},0).wait(1).to({x:74.8,alpha:0.576},0).wait(1).to({x:78.2,alpha:0.662},0).wait(1).to({x:81.1,alpha:0.734},0).wait(1).to({x:83.4,alpha:0.794},0).wait(1).to({x:85.4,alpha:0.843},0).wait(1).to({x:87,alpha:0.882},0).wait(1).to({x:88.3,alpha:0.915},0).wait(1).to({x:89.3,alpha:0.94},0).wait(1).to({x:90.1,alpha:0.96},0).wait(1).to({x:90.7,alpha:0.976},0).wait(1).to({x:91.2,alpha:0.987},0).wait(1).to({x:91.5,alpha:0.994},0).wait(1).to({x:91.6,alpha:0.999},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(1));

	// Layer 8
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:96.1,regY:43.1,x:71.8,y:114.1,alpha:0.066},0).wait(1).to({x:75.2,alpha:0.15},0).wait(1).to({x:79.3,alpha:0.254},0).wait(1).to({x:83.9,alpha:0.369},0).wait(1).to({x:88.6,alpha:0.485},0).wait(1).to({x:92.8,alpha:0.591},0).wait(1).to({x:96.3,alpha:0.68},0).wait(1).to({x:99.3,alpha:0.754},0).wait(1).to({x:101.7,alpha:0.814},0).wait(1).to({x:103.6,alpha:0.862},0).wait(1).to({x:105.1,alpha:0.901},0).wait(1).to({x:106.3,alpha:0.931},0).wait(1).to({x:107.3,alpha:0.955},0).wait(1).to({x:108,alpha:0.972},0).wait(1).to({x:108.5,alpha:0.985},0).wait(1).to({x:108.8,alpha:0.994},0).wait(1).to({x:109,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(63).to({regX:96.1,regY:43.1,x:111.4,y:114.1,alpha:0.942},0).wait(1).to({x:114.4,alpha:0.868},0).wait(1).to({x:117.9,alpha:0.779},0).wait(1).to({x:122,alpha:0.678},0).wait(1).to({x:126.2,alpha:0.572},0).wait(1).to({x:130.3,alpha:0.471},0).wait(1).to({x:133.9,alpha:0.381},0).wait(1).to({x:137,alpha:0.304},0).wait(1).to({x:139.5,alpha:0.239},0).wait(1).to({x:141.7,alpha:0.186},0).wait(1).to({x:143.4,alpha:0.142},0).wait(1).to({x:144.9,alpha:0.106},0).wait(1).to({x:146,alpha:0.077},0).wait(1).to({x:146.9,alpha:0.054},0).wait(1).to({x:147.7,alpha:0.036},0).wait(1).to({x:148.2,alpha:0.022},0).wait(1).to({x:148.6,alpha:0.012},0).wait(1).to({x:148.9,alpha:0.005},0).wait(1).to({x:149.1,alpha:0.001},0).wait(1).to({regX:79.1,regY:34,x:132.1,y:105,alpha:0},0).wait(12));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:66.3,regY:22.2,x:32.3,y:93,alpha:0.059},0).wait(1).to({x:36.5,alpha:0.143},0).wait(1).to({x:43.1,alpha:0.276},0).wait(1).to({x:52.6,alpha:0.466},0).wait(1).to({x:60.6,alpha:0.625},0).wait(1).to({x:65.6,alpha:0.725},0).wait(1).to({x:69,alpha:0.793},0).wait(1).to({x:71.4,alpha:0.842},0).wait(1).to({x:73.3,alpha:0.879},0).wait(1).to({x:74.7,alpha:0.908},0).wait(1).to({x:75.8,alpha:0.93},0).wait(1).to({x:76.7,alpha:0.948},0).wait(1).to({x:77.4,alpha:0.963},0).wait(1).to({x:78,alpha:0.974},0).wait(1).to({x:78.4,alpha:0.983},0).wait(1).to({x:78.8,alpha:0.99},0).wait(1).to({x:79,alpha:0.994},0).wait(1).to({x:79.2,alpha:0.998},0).wait(1).to({x:79.3,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(47).to({regX:66.3,regY:22.2,x:81.8,y:93,alpha:0.938},0).wait(1).to({x:84.9,alpha:0.86},0).wait(1).to({x:88.7,alpha:0.764},0).wait(1).to({x:93.1,alpha:0.656},0).wait(1).to({x:97.5,alpha:0.545},0).wait(1).to({x:101.7,alpha:0.441},0).wait(1).to({x:105.3,alpha:0.351},0).wait(1).to({x:108.3,alpha:0.275},0).wait(1).to({x:110.8,alpha:0.212},0).wait(1).to({x:112.8,alpha:0.162},0).wait(1).to({x:114.5,alpha:0.12},0).wait(1).to({x:115.8,alpha:0.087},0).wait(1).to({x:116.9,alpha:0.061},0).wait(1).to({x:117.7,alpha:0.04},0).wait(1).to({x:118.3,alpha:0.025},0).wait(1).to({x:118.8,alpha:0.013},0).wait(1).to({x:119.1,alpha:0.006},0).wait(1).to({x:119.2,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(105));

	// salt
	this.instance_3 = new lib.salt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(341,194.1,1,1,0,0,0,177,36.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:62.8,regY:122,x:217.1,y:275.7},0).wait(1).to({x:203.3,y:269.5},0).wait(1).to({x:181.6,y:259.9},0).wait(1).to({x:150.4,y:246.1},0).wait(1).to({x:124.3,y:234.6},0).wait(1).to({x:107.8,y:227.3},0).wait(1).to({x:96.7,y:222.4},0).wait(1).to({x:88.7,y:218.8},0).wait(1).to({x:82.6,y:216.1},0).wait(1).to({x:77.9,y:214},0).wait(1).to({x:74.2,y:212.4},0).wait(1).to({x:71.2,y:211.1},0).wait(1).to({x:68.9,y:210.1},0).wait(1).to({x:67,y:209.2},0).wait(1).to({x:65.6,y:208.6},0).wait(1).to({x:64.5,y:208.1},0).wait(1).to({x:63.7,y:207.8},0).wait(1).to({x:63.2,y:207.5},0).wait(1).to({x:62.9,y:207.4},0).wait(1).to({regX:177,regY:36.1,x:177,y:121.5},0).wait(181));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(292.5,386.5,1,1,0,0,0,135.5,147.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(1).to({regX:212.8,regY:82.5,x:361.9,y:313.6},0).wait(1).to({x:350.6,y:302.3},0).wait(1).to({x:332.9,y:284.7},0).wait(1).to({x:307.4,y:259.3},0).wait(1).to({x:286,y:238.1},0).wait(1).to({x:272.6,y:224.8},0).wait(1).to({x:263.5,y:215.8},0).wait(1).to({x:257,y:209.2},0).wait(1).to({x:252,y:204.3},0).wait(1).to({x:248.2,y:200.5},0).wait(1).to({x:245.1,y:197.5},0).wait(1).to({x:242.7,y:195.1},0).wait(1).to({x:240.8,y:193.2},0).wait(1).to({x:239.3,y:191.6},0).wait(1).to({x:238.1,y:190.5},0).wait(1).to({x:237.2,y:189.6},0).wait(1).to({x:236.6,y:188.9},0).wait(1).to({x:236.1,y:188.5},0).wait(1).to({x:235.9,y:188.3},0).wait(1).to({regX:135.5,regY:147.6,x:158.5,y:253.3},0).wait(177));

	// rosemary
	this.instance_5 = new lib.saltcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(237.5,377.8,1,1,0,0,0,38.5,209.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(1).to({regX:159.5,regY:142.5,x:346.8,y:305.6},0).wait(1).to({x:330,y:298.7},0).wait(1).to({x:303.7,y:287.9},0).wait(1).to({x:265.9,y:272.2},0).wait(1).to({x:234.2,y:259.2},0).wait(1).to({x:214.3,y:251},0).wait(1).to({x:200.8,y:245.4},0).wait(1).to({x:191.1,y:241.4},0).wait(1).to({x:183.8,y:238.4},0).wait(1).to({x:178,y:236},0).wait(1).to({x:173.5,y:234.2},0).wait(1).to({x:169.9,y:232.7},0).wait(1).to({x:167.1,y:231.5},0).wait(1).to({x:164.8,y:230.6},0).wait(1).to({x:163.1,y:229.9},0).wait(1).to({x:161.8,y:229.3},0).wait(1).to({x:160.8,y:228.9},0).wait(1).to({x:160.2,y:228.6},0).wait(1).to({x:159.8,y:228.5},0).wait(1).to({regX:38.5,regY:209.8,x:38.7,y:295.8},0).wait(179));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(204));

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