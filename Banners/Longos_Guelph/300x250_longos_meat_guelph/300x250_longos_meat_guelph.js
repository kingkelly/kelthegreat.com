(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_longos_meat_guelph_atlas_", frames: [[0,234,144,52],[0,0,211,232]]}
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
	this.spriteSheet = ss["300x250_longos_meat_guelph_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["300x250_longos_meat_guelph_atlas_"];
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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgDACgEIAEgHQAHgHAIAAQAJAAAGAHQAEACABAFQACAEAAADQAAAFgCAEQgBADgEADQgGAHgJgBQgIABgHgHg");
	this.shape.setTransform(121,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_1.setTransform(110,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIAMAJIAJALIAIANIAEAPQADAIAAAHQAAAIgDAIQgBAIgDAHIgIANIgJALIgMAJIgOAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHgBgJQABgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(93.4,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_3.setTransform(77.6,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_4.setTransform(62.9,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIAKALIAIANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgIANIgKALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_5.setTransform(46.9,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgIBLIgOgEIgOgHIgMgJIgKgLQgEgGgDgHQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAHgNIAKgLIAMgJIANgHIAPgEIAPgCQAJAAAJACQAKACAHADQAHAEAHAFQAGAFAFAGIgcAYQgGgHgIgEQgIgFgLAAQgIAAgIADQgGADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAIQADAHAEAGQAGAGAHAEQAHADAJAAQAPAAAOgGIAAgPIgeAAIAAgeIBCAAIAABAQgPALgLAEQgHADgKABQgKACgMAAQgIAAgIgCg");
	this.shape_6.setTransform(30.3,74.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AgmBKQgKgDgIgGQgIgGgEgIQgEgIAAgKQAAgIACgHQACgGAFgFQAEgFAGgEIAOgIQgFgHgCgIQgCgHAAgHQAAgIADgHQADgHAGgFQAGgEAIgDQAIgDAKAAQAIAAAIADQAHACAGAFQAFAEAEAGQADAGAAAIQAAAHgCAFQgCAFgDAEQgDAFgGAEIgMAIIASAVQAFgJABgKIAhAAQgCARgDAIQgEALgIAKIAYAfIguAAIgGgHQgIAEgJADQgJACgKAAQgMAAgLgDgAgdAUQgCAEAAAFQAAAIAEAEQAFAEAKAAQAHAAAGgDIgXgeQgFADgCAFgAgKgvQgCACAAAFQAAAHAGAIQAFgDACgEQADgEAAgEQAAgEgCgDQgCgCgDAAQgFAAgCACg");
	this.shape_7.setTransform(9.7,74.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgPAPIgEgGQgCgEAAgFQAAgEACgEIAEgGQAHgHAIABQAJgBAGAHQAEADABADQACAEAAAEQAAAFgCAEQgBAEgEACQgGAGgJABQgIgBgHgGg");
	this.shape_8.setTransform(123.3,59.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAjBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_9.setTransform(112,53.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_10.setTransform(89.7,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgTBLIAAiVIAnAAIAACVg");
	this.shape_11.setTransform(78.9,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_12.setTransform(68,53.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_13.setTransform(54.8,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgIBLIgPgEIgNgHIgLgJIgLgLIgGgNQgEgHgBgIQgCgIAAgIQAAgHACgIIAFgPIAGgNIAKgLQAFgFAHgEIAMgHIAOgEIAOgCQAMAAAKADQAJACAJAFQAHAEAGAGQAGAFAGAIIgfAUQgFgIgGgEIgKgEQgFgCgIAAQgHAAgGADQgHADgEAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAHADQAGADAIAAQAHAAAFgCIAKgEQAIgFAFgKIAfAUQgGAJgGAHQgHAHgIAEQgIAFgKACQgJACgMAAQgHAAgHgCg");
	this.shape_14.setTransform(40.9,53.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_15.setTransform(21.4,53.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_16.setTransform(9.5,53.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_17.setTransform(112.8,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_18.setTransform(98.8,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_19.setTransform(85.6,32.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAFAPQACAIAAAHQAAAIgCAIQgCAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHAAgJQAAgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_20.setTransform(69.7,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgnBNIg+iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABABIAiBJIAahGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBAAAAIgmhPIgkBPIgBABIgCgBg");
	this.shape_21.setTransform(45.6,32.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgNgJQgFgFgEgGIgIgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAIgNQAEgGAFgFIANgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIAMAJIAJALIAIANIAEAPQACAIABAHQgBAIgCAIQgBAIgDAHIgIANIgJALIgMAJIgOAHIgPAEIgQACIgPgCgAgPgmQgIADgFAGQgFAGgCAHQgEAIAAAIQAAAJAEAHQACAIAFAGQAFAGAIADQAHADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQACgHABgJQgBgIgCgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgHADg");
	this.shape_22.setTransform(26.7,32.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_23.setTransform(10,32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_24.setTransform(79.7,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("Ag7BLIAAiVIA8AAQAJAAAQAEQALAEAIAHQAHAIAEAKQAEAJAAAMQAAALgEAJQgEAKgHAHQgIAHgLAEQgQAEgJAAIgUAAIAAArgAgTgBIATAAQAJAAAFgFQAGgFAAgJQAAgKgGgFQgFgFgJAAIgTAAg");
	this.shape_25.setTransform(65.2,11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_26.setTransform(52.2,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_27.setTransform(39.8,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgZBIQgPgGgGgFIgIgIQgDgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHACAFQABAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAEgBADgEQAEgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgCAHQAAAHgDAFIgGALIgIAIIgJAHIgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_28.setTransform(25.5,11.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgHBLIgQgEIgNgHIgMgJIgKgLQgEgGgDgHQgEgHgBgIQgCgIAAgIQAAgHACgIIAFgPIAHgNIAKgLIAMgJIANgHIAPgEIAPgCQAJAAAKACQAIACAIADQAIAEAGAFQAGAFAFAGIgcAYQgGgHgHgEQgJgFgLAAQgIAAgHADQgHADgFAGQgFAGgCAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAGAIAEQAIADAIAAQAOAAAPgGIAAgPIgdAAIAAgeIBBAAIAABAQgPALgLAEQgIADgJABQgKACgMAAQgIAAgHgCg");
	this.shape_29.setTransform(9.9,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,128.4,89), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgOAPIgGgGQgBgEAAgFQAAgDABgEIAGgHQAGgHAIAAQAJAAAGAHQAEACABAFQACAEAAADQAAAFgCAEQgBADgEADQgGAHgJgBQgIABgGgHg");
	this.shape.setTransform(118.6,80.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhCBLIAAiVIA6AAQAIAAAHACQAHABAHACIANAHQAGADAFAFIAJALQAEAGADAHQADAHABAHQACAIAAAIQAAAJgCAIQgBAHgDAHQgDAHgEAGIgJALQgFAFgGADIgNAHQgHACgHABQgHACgIAAgAgaApIAOAAQAJAAAGgDQAHgDAFgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgFgFgHgDQgGgDgJAAIgOAAg");
	this.shape_1.setTransform(108.5,74.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_2.setTransform(94.5,74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_3.setTransform(79.8,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgPBLIgOgEIgPgHIgLgJQgGgFgEgGIgIgNQgDgHgCgIQgCgIAAgIQAAgHACgIIAFgPIAIgNQAEgGAGgFIALgJIAPgHIAOgEIAPgCIAQACIAPAEIANAHIAMAJIALALIAHANIAFAPQABAIAAAHQAAAIgBAIQgCAIgDAHIgHANIgLALIgMAJIgNAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_4.setTransform(63.2,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_5.setTransform(48.1,74.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAgBNIgIgSIgzAAIgHASIgnAAIBIiXQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABABIBICXgAAMAeIgNgfIgNAfIAaAAg");
	this.shape_6.setTransform(34.7,74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_7.setTransform(21.2,74.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_8.setTransform(8,74.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_9.setTransform(101.1,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgzBLIAAiVIAoAAIAABzIA/AAIAAAig");
	this.shape_10.setTransform(88.9,53.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_11.setTransform(76.4,53.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AgmBNIg/iWIAqAAIAcBGIAfhJQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAiBJIAbhGIAoAAIg+CWQAAAAgBABQAAAAAAAAQAAAAgBAAQAAgBgBAAIglhPIgkBPIgBABIgBgBg");
	this.shape_12.setTransform(59.5,53.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_13.setTransform(37.9,53.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_14.setTransform(24.4,53.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AAhBNIgIgSIg0AAIgHASIgnAAIBJiXQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAAAABIBJCXgAAMAeIgMgfIgOAfIAaAAg");
	this.shape_15.setTransform(9.5,53.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgTBKQgJgCgIgEQgLgGgLgNIAdgWQAGAIAGAEQAJAFAJAAQAJAAAFgDQAFgDAAgGQAAgFgEgDQgDgCgIgDIgRgGIgOgGQgHgFgFgEQgFgGgDgGQgDgIAAgJQAAgLAFgIQAEgJAHgFQAHgGAJgDQAJgDAJAAQAKAAAIACIAOAEQAJAEAKAKIgWAYQgFgFgGgDQgHgDgIAAQgGAAgEADQgEADAAAFQAAAEADACQACADAFACIATAGQAMAEAHAFQAIAEAFAFQAEAFACAHQACAGAAAJQAAAKgDAJQgDAIgHAHQgHAGgLADQgLAEgOAAQgLAAgLgDg");
	this.shape_16.setTransform(107.9,32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_17.setTransform(95.2,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_18.setTransform(81.7,32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AAaBLIAAg7IgzAAIAAA7IgoAAIAAiVIAoAAIAAA6IAzAAIAAg6IAoAAIAACVg");
	this.shape_19.setTransform(67.2,32.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgIBLIgPgEIgNgHIgMgJIgKgLIgHgNQgDgHgBgIQgCgIAAgIQAAgHACgIIAEgPIAHgNIAKgLQAFgFAGgEIANgHIAOgEIAOgCQALAAALADQAKACAHAFQAJAEAFAGQAGAFAFAIIgdAUQgFgIgHgEIgKgEQgFgCgIAAQgGAAgIADQgFADgGAGQgEAGgDAHQgCAIAAAIQAAAJACAHQADAIAFAGQAFAGAHADQAGADAIAAQAHAAAGgCIAKgEQAGgFAGgKIAfAUQgFAJgIAHQgGAHgIAEQgIAFgKACQgKACgLAAQgHAAgHgCg");
	this.shape_20.setTransform(51.9,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgTBLIAAhzIgoAAIAAgiIB3AAIAAAiIgoAAIAABzg");
	this.shape_21.setTransform(37.7,32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AgZBIQgPgGgFgFIgIgIQgEgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHABAFQACAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAFgBADgEQADgDABgFQABgFAAgHIAAhaIApAAIAABbQAAAHgBAHQgBAHgDAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgOAAgLgEg");
	this.shape_22.setTransform(23.6,32.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("Ag7BLIAAiVIBAAAQALAAAJADQAJACAGAFQAHAFADAHQAEAIAAAJQAAAGgCAGIgEAJQgGAHgJAEIAKADQAFADAEAEQAEAFACAFQACAHAAAHQAAALgEAIQgEAIgGAFQgIAGgKADQgLADgOAAgAgVArIAXAAQAKAAAFgEQADgEAAgHQAAgIgEgEQgEgEgKAAIgXAAgAgVgPIAVAAQAHAAAEgEQADgDAAgHQAAgGgDgEQgDgDgIAAIgVAAg");
	this.shape_23.setTransform(9.3,32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AASBLIgZgvIgOAAIAAAvIgoAAIAAiVIA9AAQAIAAAQAEQALAEAIAHQAHAHAEAKQAEAKAAALQAAAIgCAGQgCAHgDAEQgEAGgFAEQgFAFgGADIAfA1gAgVgCIATAAQAJAAAFgFQAGgFAAgJQAAgJgGgFQgFgFgJAAIgTAAg");
	this.shape_24.setTransform(103.2,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgZBIQgPgGgGgFIgIgIQgDgFgCgGIgEgMIgBgOIAAhbIAoAAIAABaQAAAHACAFQABAFADADQADAEAFABQAEACAGAAQAGAAAFgCQAEgBADgEQAEgDABgFQACgFgBgHIAAhaIApAAIAABbQAAAHgCAHQgBAHgCAFIgGALIgHAIIgKAHIgLAEQgMAEgOAAQgNAAgMgEg");
	this.shape_25.setTransform(88.1,11.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgPBLIgPgEIgNgHIgMgJQgGgFgEgGIgIgNQgDgHgCgIQgBgIAAgIQAAgHABgIIAFgPIAIgNQAEgGAGgFIAMgJIANgHIAPgEIAPgCIAQACIAPAEIAOAHIALAJIAKALIAIANIAFAPQACAIAAAHQAAAIgCAIQgCAIgDAHIgIANIgKALIgLAJIgOAHIgPAEIgQACIgPgCgAgQgmQgHADgFAGQgFAGgCAHQgDAIgBAIQABAJADAHQACAIAFAGQAFAGAHADQAIADAIAAQAJAAAIgDQAHgDAFgGQAFgGADgIQADgHgBgJQABgIgDgIQgDgHgFgGQgFgGgHgDQgIgDgJAAQgIAAgIADg");
	this.shape_26.setTransform(71.9,11.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("ABABNIhdhNIAABLIglAAIAAiXQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABABIBdBMIAAhKIAlAAIAACXQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_27.setTransform(49.9,11.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_28.setTransform(35.9,11.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AAABLIhHiWIArAAIAdBFIAehFIApAAIhHCWIgBABIAAgBg");
	this.shape_29.setTransform(22,11.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("Ag1BLIAAiVIBoAAIAAAiIhAAAIAAAYIA1AAIAAAfIg1AAIAAAaIBDAAIAAAig");
	this.shape_30.setTransform(8.7,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,123.8,89), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2NNImGlUIAA1FINbAAIKeCgIAAX5g");
	mask.setTransform(136.5,147.6);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(60,63.1,151,168.9), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYDhIAAgGIloAAIAAm7IIbAAIAAB4ICWAAIAAAyIBQAAIAAEXg");
	mask.setTransform(38.5,210.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(0,187.6,77,44.4), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipFKIgeg8QgwgRgsgoQgNgLgPgWIgUgBIAAn8IKnAAIAAKTg");
	mask.setTransform(177,36.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(143,3.1,68,66), null);


// stage content:
(lib._300x250_longos_meat_guelph = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(98));

	// logo
	this.instance = new lib.bb_logo();
	this.instance.parent = this;
	this.instance.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98));

	// Layer 8
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).wait(1).to({regX:63.8,regY:43.3,x:39.5,y:114.3,alpha:0.066},0).wait(1).to({x:42.9,alpha:0.15},0).wait(1).to({x:47,alpha:0.254},0).wait(1).to({x:51.6,alpha:0.369},0).wait(1).to({x:56.3,alpha:0.485},0).wait(1).to({x:60.5,alpha:0.591},0).wait(1).to({x:64,alpha:0.68},0).wait(1).to({x:67,alpha:0.754},0).wait(1).to({x:69.4,alpha:0.814},0).wait(1).to({x:71.3,alpha:0.862},0).wait(1).to({x:72.8,alpha:0.901},0).wait(1).to({x:74,alpha:0.931},0).wait(1).to({x:75,alpha:0.955},0).wait(1).to({x:75.7,alpha:0.972},0).wait(1).to({x:76.2,alpha:0.985},0).wait(1).to({x:76.5,alpha:0.994},0).wait(1).to({x:76.7,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:61.4,regY:43.2,x:27.4,y:114,alpha:0.059},0).wait(1).to({x:31.6,alpha:0.143},0).wait(1).to({x:38.2,alpha:0.276},0).wait(1).to({x:47.7,alpha:0.466},0).wait(1).to({x:55.7,alpha:0.625},0).wait(1).to({x:60.7,alpha:0.725},0).wait(1).to({x:64.1,alpha:0.793},0).wait(1).to({x:66.5,alpha:0.842},0).wait(1).to({x:68.4,alpha:0.879},0).wait(1).to({x:69.8,alpha:0.908},0).wait(1).to({x:70.9,alpha:0.93},0).wait(1).to({x:71.8,alpha:0.948},0).wait(1).to({x:72.5,alpha:0.963},0).wait(1).to({x:73.1,alpha:0.974},0).wait(1).to({x:73.5,alpha:0.983},0).wait(1).to({x:73.9,alpha:0.99},0).wait(1).to({x:74.1,alpha:0.994},0).wait(1).to({x:74.3,alpha:0.998},0).wait(1).to({x:74.4,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(31).to({regX:61.4,regY:43.2,x:74.5,y:114,alpha:0.997},0).wait(1).to({x:74.9,alpha:0.988},0).wait(1).to({x:75.6,alpha:0.97},0).wait(1).to({x:76.8,alpha:0.939},0).wait(1).to({x:78.9,alpha:0.887},0).wait(1).to({x:82.5,alpha:0.798},0).wait(1).to({x:88.9,alpha:0.637},0).wait(1).to({x:97.1,alpha:0.432},0).wait(1).to({x:102.8,alpha:0.289},0).wait(1).to({x:106.4,alpha:0.199},0).wait(1).to({x:108.9,alpha:0.138},0).wait(1).to({x:110.6,alpha:0.095},0).wait(1).to({x:111.8,alpha:0.064},0).wait(1).to({x:112.8,alpha:0.041},0).wait(1).to({x:113.4,alpha:0.024},0).wait(1).to({x:113.9,alpha:0.013},0).wait(1).to({x:114.2,alpha:0.005},0).wait(1).to({x:114.3,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// salt
	this.instance_3 = new lib.salt();
	this.instance_3.parent = this;
	this.instance_3.setTransform(341,164.1,1,1,0,0,0,177,36.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(1).to({regY:36,x:335.7,y:157.5},0).wait(1).to({x:328.1,y:148.2},0).wait(1).to({x:316.2,y:133.6},0).wait(1).to({x:299.1,y:112.7},0).wait(1).to({x:284.7,y:95.2},0).wait(1).to({x:275.7,y:84.1},0).wait(1).to({x:269.6,y:76.7},0).wait(1).to({x:265.2,y:71.3},0).wait(1).to({x:261.9,y:67.3},0).wait(1).to({x:259.3,y:64.1},0).wait(1).to({x:257.3,y:61.6},0).wait(1).to({x:255.6,y:59.6},0).wait(1).to({x:254.3,y:58},0).wait(1).to({x:253.3,y:56.8},0).wait(1).to({x:252.5,y:55.8},0).wait(1).to({x:251.9,y:55.1},0).wait(1).to({x:251.5,y:54.6},0).wait(1).to({x:251.2,y:54.2},0).wait(1).to({x:251.1,y:54},0).wait(1).to({regY:36.1,x:251,y:54.1},0).wait(71));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(339.5,275.6,1,1,0,0,0,135.5,147.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({x:331.9,y:269.7},0).wait(1).to({x:321,y:261.3},0).wait(1).to({x:303.9,y:248.3},0).wait(1).to({x:279.4,y:229.4},0).wait(1).to({x:258.9,y:213.7},0).wait(1).to({x:245.9,y:203.7},0).wait(1).to({x:237.2,y:197},0).wait(1).to({x:230.9,y:192.2},0).wait(1).to({x:226.1,y:188.5},0).wait(1).to({x:222.4,y:185.7},0).wait(1).to({x:219.5,y:183.4},0).wait(1).to({x:217.1,y:181.7},0).wait(1).to({x:215.3,y:180.2},0).wait(1).to({x:213.8,y:179.1},0).wait(1).to({x:212.7,y:178.2},0).wait(1).to({x:211.8,y:177.6},0).wait(1).to({x:211.2,y:177.1},0).wait(1).to({x:210.8,y:176.8},0).wait(1).to({x:210.6,y:176.6},0).wait(1).to({x:210.5},0).wait(73));

	// rosemary
	this.instance_5 = new lib.saltcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(232.5,277.8,1,1,0,0,0,38.5,209.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(1).to({x:224.8,y:274.8},0).wait(1).to({x:213.8,y:270.6},0).wait(1).to({x:196.7,y:264},0).wait(1).to({x:171.9,y:254.5},0).wait(1).to({x:151.2,y:246.5},0).wait(1).to({x:138.2,y:241.5},0).wait(1).to({x:129.4,y:238.1},0).wait(1).to({x:123,y:235.6},0).wait(1).to({x:118.2,y:233.8},0).wait(1).to({x:114.5,y:232.4},0).wait(1).to({x:111.5,y:231.2},0).wait(1).to({x:109.2,y:230.3},0).wait(1).to({x:107.3,y:229.6},0).wait(1).to({x:105.9,y:229},0).wait(1).to({x:104.7,y:228.6},0).wait(1).to({x:103.9,y:228.3},0).wait(1).to({x:103.2,y:228},0).wait(1).to({x:102.8,y:227.9},0).wait(1).to({x:102.6,y:227.8},0).wait(1).to({x:102.5},0).wait(75));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(98));

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
		{src:"images/300x250_longos_meat_guelph_atlas_.png", id:"300x250_longos_meat_guelph_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;