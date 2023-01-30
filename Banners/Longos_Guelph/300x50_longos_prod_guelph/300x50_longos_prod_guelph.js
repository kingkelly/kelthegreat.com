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
p.nominalBounds = new cjs.Rectangle(0,0,300,240);// helper functions:

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgHAIIgCgDIgBgFIABgDIACgEQADgDAEAAQAFAAADADIACAEIABADIgBAFIgCADQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(100.7,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AAhAoIgvgoIAAAmIgUAAIAAhMQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAwAnIAAglIATAAIAABMIgBABIgBAAg");
	this.shape_1.setTransform(95,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgHAnIgHgDIgIgDIgGgFIgFgFIgEgHQgBgEgBgEIgBgIIABgHQABgEABgEIAEgHIAFgFIAGgFIAIgDIAHgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIACAIIABAHIgBAIIgCAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgHgTQgEACgDADIgEAHIgBAHIABAIIAEAHQADADAEACQAEABADAAQAEAAAFgBQAEgCACgDIAEgHIABgIIgBgHIgEgHQgCgDgEgCQgFgBgEAAQgDAAgEABg");
	this.shape_2.setTransform(86.5,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AghAmIAAhLIAdAAIAIAAIAHACIAGAEIAGAEIAFAFIADAHIACAIIABAHIgBAIIgCAIIgDAHIgFAFIgGAEIgGAEIgHACIgIAAgAgNAVIAHAAQAFAAADgCIAGgEQADgDABgDQABgEAAgFQAAgEgBgEQgBgEgDgCQgDgDgDgBQgDgCgFAAIgHAAg");
	this.shape_3.setTransform(78.5,47.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAJAmIgMgYIgHAAIAAAYIgVAAIAAhLIAfAAQAEAAAIACQAGACAEADQAEAEACAFQACAFAAAGIgBAHIgDAFIgEAFIgGAEIAQAbgAgKAAIAJAAQAFAAACgDQADgCAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_4.setTransform(70.9,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgHAnIgIgDIgGgDIgHgFIgFgFIgDgHQgDgEAAgEIgBgIIABgHQAAgEADgEIADgHIAFgFIAHgFIAGgDIAIgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIADAIIAAAHIAAAIIgDAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgIgTQgDACgDADIgEAHIgBAHIABAIIAEAHQADADADACQAFABADAAQAFAAADgBQAEgCADgDIAEgHIABgIIgBgHIgEgHQgDgDgEgCQgDgBgFAAQgDAAgFABg");
	this.shape_5.setTransform(62.7,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgDAnIgIgDIgHgDIgGgFIgFgFIgEgHIgCgIIgBgIIABgHIACgIIAEgHIAFgFIAGgFIAHgDIAHgDIAHAAIAKABIAIACIAHAFIAGAFIgOANQgDgEgEgCQgEgCgGAAQgEAAgDABQgEACgCADIgEAHIgBAHIABAIQABAFADADQACADAEABQAEACAEAAQAIAAAHgDIAAgIIgPAAIAAgOIAhAAIAAAgQgHAFgGACIgJACIgLABIgHAAg");
	this.shape_6.setTransform(54.2,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AgTAmQgFgCgEgDQgEgDgDgEQgBgEAAgFIAAgIIAEgGIAGgDIAHgEIgEgIIgBgIQAAgEABgDQACgEADgCQADgDAEgBIAJgBIAIABIAHADIAEAGQACADgBAEIAAAGIgCAFIgFAEIgGAEIAJALQACgFABgFIARAAIgCANQgDAGgEAFIAMAPIgXAAIgDgDIgJADIgJABQgGAAgGgBgAgPAKIgBAFQABAEACACQACACAFAAIAGgBIgLgQIgEAEgAgFgYIgBAEQAAADAEAFIACgEIACgEIgBgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgEABg");
	this.shape_7.setTransform(43.7,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgHAIIgCgEIgBgEIABgEIACgDQADgDAEAAQAFAAADADIACADIABAEIgBAEIgCAEQgDADgFAAQgEAAgDgDg");
	this.shape_8.setTransform(101.8,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AATAnIgTgoIgSAoQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgghMIAVAAIAOAkIAQgmQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIARAmIAOgkIAUAAIgfBMIgBABIgBgBg");
	this.shape_9.setTransform(96.1,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AAJAmIgMgYIgHAAIAAAYIgVAAIAAhLIAfAAQAEAAAIACQAGACAEADQAEAEACAFQACAFAAAGIgBAHIgDAFIgEAFIgGAEIAQAbgAgKAAIAJAAQAFAAACgDQADgCAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_10.setTransform(84.6,37);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgJAmIAAhLIATAAIAABLg");
	this.shape_11.setTransform(79.1,37);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AARAnIgEgJIgaAAIgEAJIgUAAIAlhNQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAlBNgAAGAPIgGgPIgHAPIANAAg");
	this.shape_12.setTransform(73.5,36.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgaAmIAAhLIAVAAIAAA6IAfAAIAAARg");
	this.shape_13.setTransform(66.8,37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgEAnIgHgDIgHgDIgGgFIgFgFIgEgHIgCgIIgBgIIABgHIACgIIAEgHIAFgFIAGgFIAGgDIAHgDIAHAAQAGAAAFABIAJADIAHAGIAGAGIgPALIgHgHIgEgCIgHAAQgDAAgDABQgEACgCADIgEAHIgBAHIABAIIAEAHQADADADACQAEABADAAIAGAAIAFgDQAEgCADgFIAQAKIgHAIQgDAEgEACQgEACgFABIgLABIgHAAg");
	this.shape_14.setTransform(59.7,37);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgJAmIAAg6IgVAAIAAgRIA8AAIAAARIgTAAIAAA6g");
	this.shape_15.setTransform(49.7,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AARAnIgEgJIgaAAIgEAJIgUAAIAlhNQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAlBNgAAGAPIgGgPIgHAPIANAAg");
	this.shape_16.setTransform(43.6,36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAhAoIgvgoIAAAmIgTAAIAAhMQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAwAnIAAglIATAAIAABMIgBABIgBAAg");
	this.shape_17.setTransform(143,26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_18.setTransform(135.8,26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgeAmIAAhLIAeAAQAFAAAIACQAGACAEAEQAEADACAFQACAFAAAGQAAAGgCAEQgCAFgEAEQgEADgGACQgIACgFAAIgJAAIAAAWgAgJAAIAJAAQAFAAACgCQADgDAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_19.setTransform(129,26.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgHAnIgIgDIgHgDIgGgFIgFgFIgDgHQgCgEgBgEIgBgIIABgHQABgEACgEIADgHIAFgFIAGgFIAHgDIAIgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIACAIIABAHIgBAIIgCAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgHgTQgEACgDADIgEAHIgBAHIABAIIAEAHQADADAEACQADABAEAAQAEAAAFgBQAEgCACgDIAEgHIABgIIgBgHIgEgHQgCgDgEgCQgFgBgEAAQgEAAgDABg");
	this.shape_20.setTransform(120.9,26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AATAnIgTgoIgSAoQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgghMIAVAAIAOAkIAQgmQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIARAmIAOgkIAUAAIgfBMIgBABIgBgBg");
	this.shape_21.setTransform(108.5,26.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AgHAnIgIgDIgHgDIgGgFIgFgFIgDgHQgCgEgBgEIgBgIIABgHQABgEACgEIADgHIAFgFIAGgFIAHgDIAIgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIACAIIABAHIgBAIIgCAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgHgTQgEACgDADIgEAHIgBAHIABAIIAEAHQADADAEACQADABAEAAQAEAAAFgBQAEgCACgDIAEgHIABgIIgBgHIgEgHQgCgDgEgCQgFgBgEAAQgEAAgDABg");
	this.shape_22.setTransform(98.9,26.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AAhAoIgvgoIAAAmIgTAAIAAhMQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAvAnIAAglIATAAIAABMIAAABIgBAAg");
	this.shape_23.setTransform(90.4,26.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AANAmIAAgeIgZAAIAAAeIgVAAIAAhLIAVAAIAAAdIAZAAIAAgdIAVAAIAABLg");
	this.shape_24.setTransform(79.5,26.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgeAmIAAhLIAeAAQAFAAAIACQAGACAEAEQAEADACAFQACAFAAAGQAAAGgCAEQgCAFgEAEQgEADgGACQgIACgFAAIgJAAIAAAWgAgJAAIAJAAQAFAAACgCQADgDAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_25.setTransform(72.1,26.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgZAmIAAhLIAUAAIAAA6IAgAAIAAARg");
	this.shape_26.setTransform(65.5,26.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_27.setTransform(59.1,26.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgMAlQgIgDgDgDIgEgEIgDgFIgCgHIAAgHIAAguIAUAAIAAAuIABAGIACAEIAEADIAFABIAFgBIAEgDQABgBAAAAQABAAAAgBQAAgBAAAAQABgBAAAAIABgGIAAguIAUAAIAAAuIgBAHIgBAHIgDAFIgEAEIgFAEIgGACQgGACgHAAQgGAAgGgCg");
	this.shape_28.setTransform(51.8,26.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgDAnIgIgDIgHgDIgGgFIgFgFIgEgHIgCgIIgBgIIABgHIACgIIAEgHIAFgFIAGgFIAHgDIAHgDIAHAAIAKABIAIACIAHAFIAGAFIgOANQgDgEgEgCQgEgCgGAAQgEAAgDABQgEACgCADIgEAHIgBAHIABAIQABAFADADQACADAEABQAEACAEAAQAIAAAHgDIAAgIIgPAAIAAgOIAhAAIAAAgQgHAFgGACIgJACIgLABIgHAAg");
	this.shape_29.setTransform(43.8,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(38.8,20.3,122.5,34.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgHAIIgCgEIgBgEIABgEIACgDQADgDAEAAQAFAAADADIACADIABAEIgBAEIgCAEQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(154.9,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AAJAmIgMgYIgHAAIAAAYIgVAAIAAhLIAfAAQAEAAAIACQAGACAEADQAEAEACAFQACAFAAAGIgBAHIgDAFIgEAFIgGAEIAQAbgAgKAAIAJAAQAFAAACgDQADgCAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_1.setTransform(149.9,-33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_2.setTransform(143,-33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AANAmIAAgeIgZAAIAAAeIgVAAIAAhLIAVAAIAAAdIAZAAIAAgdIAVAAIAABLg");
	this.shape_3.setTransform(135.6,-33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgJAmIAAg6IgUAAIAAgRIA7AAIAAARIgUAAIAAA6g");
	this.shape_4.setTransform(128.2,-33.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgJAmIAAhLIATAAIAABLg");
	this.shape_5.setTransform(123.2,-33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_6.setTransform(118.4,-33.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_7.setTransform(109.2,-33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgKAmIgJgDQgFgDgGgHIAQgLIAGAGQAEACAEAAQAFAAACgBQADgCAAgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgFgCIgIgDIgIgEQgEgCgDgCQgCgCgBgEQgBgEAAgEQAAgGACgEQACgEADgDQAEgDAEgCIAJgBIAJABIAIACQAEACAFAFIgLAMIgGgEQgDgBgEAAQgDAAgCABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAIADADIAJADIALAEIAGAEIADAHQABADABAEQAAAGgCAEQgCAEgEAEIgJAFQgFABgIAAIgLgBg");
	this.shape_8.setTransform(102.5,-33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgMAlQgIgDgDgDIgEgEIgDgFIgCgHIAAgHIAAguIAUAAIAAAuIABAGIACAEIAEADIAFABIAFgBIAEgDQABgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIABgGIAAguIAUAAIAAAuIgBAHIgBAHIgDAFIgEAEIgFAEIgGACQgGACgHAAQgGAAgGgCg");
	this.shape_9.setTransform(95.5,-33.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgHAnIgIgDIgHgDIgGgFIgFgFIgDgHQgCgEgBgEIgBgIIABgHQABgEACgEIADgHIAFgFIAGgFIAHgDIAIgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIACAIIABAHIgBAIIgCAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgHgTQgEACgDADIgEAHIgBAHIABAIIAEAHQADADAEACQADABAEAAQAEAAAFgBQAEgCACgDIAEgHIABgIIgBgHIgEgHQgCgDgEgCQgFgBgEAAQgEAAgDABg");
	this.shape_10.setTransform(87.2,-33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AANAmIAAgeIgZAAIAAAeIgVAAIAAhLIAVAAIAAAdIAZAAIAAgdIAVAAIAABLg");
	this.shape_11.setTransform(78.7,-33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAJAmIgMgYIgHAAIAAAYIgVAAIAAhLIAfAAQAEAAAIACQAGACAEADQAEAEACAFQACAFAAAGIgBAHIgDAFIgEAFIgGAEIAQAbgAgKAAIAJAAQAFAAACgDQADgCAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_12.setTransform(178.4,-44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgMAlQgIgDgDgDIgEgEIgDgFIgCgHIAAgHIAAguIAUAAIAAAuIABAGIACAEIAEADIAFABIAFgBIAEgDQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAIABgGIAAguIAUAAIAAAuIgBAHIgBAHIgDAFIgEAEIgFAEIgGACQgGACgHAAQgGAAgGgCg");
	this.shape_13.setTransform(170.7,-44.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgHAnIgHgDIgHgDIgHgFIgFgFIgEgHQgCgEAAgEIgBgIIABgHQAAgEACgEIAEgHIAFgFIAHgFIAHgDIAHgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIADAIIAAAHIAAAIIgDAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgIgTQgDACgDADIgEAHIgBAHIABAIIAEAHQADADADACQAFABADAAQAEAAAEgBQAEgCADgDIAEgHIABgIIgBgHIgEgHQgDgDgEgCQgEgBgEAAQgDAAgFABg");
	this.shape_14.setTransform(162.4,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AAhAoIgvgoIAAAmIgTAAIAAhMQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAvAnIAAglIATAAIAABMIAAABIgBAAg");
	this.shape_15.setTransform(151.1,-44.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgJAmIAAhLIATAAIAABLg");
	this.shape_16.setTransform(145.3,-44.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgJAmIgJgDQgGgDgGgHIAPgLIAHAGQAEACAFAAQAEAAADgBQACgCAAgDQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgGgCIgIgDIgHgEQgEgCgCgCQgDgCgBgEQgBgEgBgEQAAgGACgEQADgEAEgDQADgDAFgCIAJgBIAJABIAHACQAEACAGAFIgMAMIgFgEQgEgBgFAAQgCAAgCABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAIAEADIAKADIAJAEIAHAEIADAHQACADgBAEQAAAGgCAEQgBAEgEAEIgJAFQgFABgIAAIgKgBg");
	this.shape_17.setTransform(137.6,-44.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_18.setTransform(131.4,-44.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgaAmIAAhLIAVAAIAAA6IAfAAIAAARg");
	this.shape_19.setTransform(125,-44.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgeAmIAAhLIAeAAQAFAAAIACQAGACAEAEQAEADACAFQACAFAAAGQAAAGgCAEQgCAFgEAEQgEADgGACQgIACgFAAIgJAAIAAAWgAgJAAIAJAAQAFAAACgCQADgDAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_20.setTransform(118.4,-44.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgeAmIAAhLIAeAAQAFAAAIACQAGACAEAEQAEADACAFQACAFAAAGQAAAGgCAEQgCAFgEAEQgEADgGACQgIACgFAAIgJAAIAAAWgAgJAAIAJAAQAFAAACgCQADgDAAgFQAAgFgDgCQgCgDgFAAIgJAAg");
	this.shape_21.setTransform(111.3,-44.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AARAnIgEgJIgaAAIgEAJIgUAAIAlhNQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAlBNgAAGAPIgGgPIgHAPIANAAg");
	this.shape_22.setTransform(103.8,-44.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AghAmIAAhLIAdAAIAIAAIAHACIAGAEIAGAEIAFAFIADAHIACAIIABAHIgBAIIgCAIIgDAHIgFAFIgGAEIgGAEIgHACIgIAAgAgNAVIAHAAQAFAAADgCIAGgEQADgDABgDQABgEAAgFQAAgEgBgEQgBgEgDgCQgDgDgDgBQgDgCgFAAIgHAAg");
	this.shape_23.setTransform(93.6,-44.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AARAnIgEgJIgaAAIgEAJIgUAAIAlhNQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAlBNgAAGAPIgGgPIgHAPIANAAg");
	this.shape_24.setTransform(85.7,-44.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgeAmIAAhLIAhAAIAKABQAFABADADQADACACAEQACAEAAAEIgBAHIgCAEQgDAEgFACIAFABIAFAEIADAFIABAHQAAAFgCAEQgCAFgEACQgDADgGACQgFABgHAAgAgKAWIAMAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgCgEAAIgMAAgAgKgHIAKAAQAEAAACgCQACgCAAgDQAAgEgCgBQgCgCgEAAIgKAAg");
	this.shape_25.setTransform(78.4,-44.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgJAmIAAg6IgVAAIAAgRIA9AAIAAARIgUAAIAAA6g");
	this.shape_26.setTransform(160.2,-55.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAhAoIgvgoIAAAmIgUAAIAAhMQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAvAnIAAglIATAAIAABMIAAABIgBAAg");
	this.shape_27.setTransform(152.8,-55.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AARAnIgEgJIgaAAIgEAJIgUAAIAlhNQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAlBNgAAGAPIgGgPIgHAPIANAAg");
	this.shape_28.setTransform(144.9,-55.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AATAnIgTgoIgSAoQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgghMIAVAAIAOAkIAQgmQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIARAmIAOgkIAUAAIgfBMIgBABIgBgBg");
	this.shape_29.setTransform(136.8,-55.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AgJAmIAAg6IgVAAIAAgRIA9AAIAAARIgUAAIAAA6g");
	this.shape_30.setTransform(125.6,-55.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgIAQIAEgMQgDgBgBgCQgCgCAAgEIABgEIACgDQADgDAEAAQAFAAADADIACADIABAEIgBAFIgDAGIgHAKg");
	this.shape_31.setTransform(120.7,-57.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AAhAoIgvgoIAAAmIgUAAIAAhMQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAwAnIAAglIATAAIAABMIgBABIgBAAg");
	this.shape_32.setTransform(115.1,-55.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AgHAnIgHgDIgHgDIgHgFIgFgFIgEgHQgCgEAAgEIgBgIIABgHQAAgEACgEIAEgHIAFgFIAHgFIAHgDIAHgDIAHAAIAIAAIAIADIAHADIAGAFIAFAFIAEAHIADAIIAAAHIAAAIIgDAIIgEAHIgFAFIgGAFIgHADIgIADIgIAAIgHAAgAgIgTQgDACgDADIgEAHIgBAHIABAIIAEAHQADADADACQAFABADAAQAEAAAEgBQAEgCADgDIAEgHIABgIIgBgHIgEgHQgDgDgEgCQgEgBgEAAQgDAAgFABg");
	this.shape_33.setTransform(106.6,-55.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AghAmIAAhLIAdAAIAIAAIAHACIAGAEIAGAEIAFAFIADAHIACAIIABAHIgBAIIgCAIIgDAHIgFAFIgGAEIgGAEIgHACIgIAAgAgNAVIAHAAQAFAAADgCIAGgEQADgDABgDQABgEAAgFQAAgEgBgEQgBgEgDgCQgDgDgDgBQgDgCgFAAIgHAAg");
	this.shape_34.setTransform(98.5,-55.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AgbAmIAAhLIA1AAIAAARIggAAIAAANIAbAAIAAAPIgbAAIAAANIAiAAIAAARg");
	this.shape_35.setTransform(88.6,-55.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AATAnIgTgoIgSAoQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgghMIAVAAIAOAkIAQgmQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIARAmIAOgkIAUAAIgfBMIgBABIgBgBg");
	this.shape_36.setTransform(80,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(73.7,-61.4,115,34.8), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlZFaQiQiPAAjLQAAjKCQiQQCPiPDKAAQDLAACQCPQCPCQAADKQAADLiPCPQiQCQjLAAQjKAAiPiQg");
	mask.setTransform(241,225.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(192,176.1,98,63.9), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHEOIAAobIaPAAIAAIbg");
	mask.setTransform(81,215.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(0,188.1,165,51.9), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEROEIAA8HITXAAIAAcHg");
	mask.setTransform(151.3,87.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(127,-24,0.576,0.576);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(178.6,-2.9,121.3,117.2), null);


// stage content:
(lib._300x50_longos_prod_guelph = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68B264").s().p("AA4DYQhxhIg3iaIgpiBQgZhMgdgwQBMAABMAvQBxBJA3CZQAPArAaBXQAZBMAdAxQhMgBhMgwg");
	this.shape.setTransform(61.7,20.9,0.102,0.102);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1CB38").s().p("AlIFXQAvhAAthoQAwh4Abg5QAvhlA2hAQBDhSBkgxQBzg4BrALQgwBBgtBoIhKCxQgvBlg1BAQhEBShkAxQhfAvhYAAQgUAAgTgDg");
	this.shape_1.setTransform(67.7,18.5,0.102,0.102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC342E").s().p("Aj/OiQh6hCAEh7QACh5B6g/QBwg5C3ADIA7ABQAOAAAGAKQAHALgHAOQgFAOgIAGQgJAIgPAAIgqAAQhEgCgyA0QgxAzgCBNQAABLA1A1QAzAzBHAAQCeAAC+jZQBziEBkixQhOAShQgGQhIgGg7gmQg5glghg8QhJBJhYApQhbAqhIgLQhrAAg9g+Qg/hBAihdQAJgaBUiJQA/hoAog+QAegvgGgSQgHgUg3AjQhNAyhYBcQhcBhhSB6Ih/DbIkgABIDClaQgmgEgfgQQgRgKgegXQAAAUgMAqQg0CaiWBkQiYBmi2gCQhgAAhGgoQhDBMhmAyQhgAyh8gTQj7gqiDiXQgiAdg4AdQhwA6htADQiRAFhahBQhZhBABhrQACh2BehYQBphhCjAAQBTAABcAlQBlApA+BDQA9hRCHkIQCqlNBWiTQA/hrBng+QBlg9BsAAQBxAAA4BTQA1BRgUB+QgEAXggAJQgRAFgPgEQgOgEgDgKIAAgJQANhKgRgwQgRgygpAAQhCAAiUECQhTCRicEuQg8BvhPBWQg8BChhBOQAzA1BBAuQA7AqA6AcQCnBbBwh0Qg2gzgQhJQgQhMAdhTQA5irCXhgQCLhZCxABQB0ADBNAuQBKAsAeBNQAVAoAdAbQAdAdAfAKQAdAGAOgEQAOgEAPgSICEjdIEnABIhDByQBKg8BLgkQBXgpBGAAQBhAAAtBDQAvBFg1BRQi0EYgYAsQgYAtAEAeQAFAdAcAAQBGAACZitQgOhgAvhcQBIiSCHhQQCEhPCcAEQBdADBBAjQAwAZAcAoIAlg+IEggBIlKJIQArgOA2gnQA0gmBjhWQADgqAQguQA5irCXhgQCLhZCxABQBoADBJAlQBGAkAkBBQBcBnB4AMQCyAWDFj+IAjgpQATgRAZAAQAXAAAFAUQAFAVgSAoQgVAugDBDQgDAtAGA/QAEBmglBYQgnBchQBGQCKgmC0hnIAdgQQAIgFAJAFQAJAEADALQAEALgDALQgCAMgJAFQguAegUAKQjKBggsARQhcAjh+ANQikAShXhLQhCg5AAhRQAAhXA0grQAogiA7AAQA8AAAgAtQAaAkgFAlQgEAngdAdQgjAig7AGQADAUAYASQAXASAgAFQA6AJAggyQAqg4ARhOQAShPgKhfQhSAmh2gJQgfgDg2gPQgzgQgngSQgZDMiuCCQigB3jDgFQhGgCgygSQgogOgjgcQhAg0gahAIAAABQhXBEhCAkQhPAshQAQQheCTicCUQk5Enk3AAQi4AAhug8gEgrAABnQgyAwAABCQAAA/A2AvQA6A0BZAAQBMAABLg6QAXgTA8g/QhFhggngjQg+g4hKgDQhXAAg2A2gAZzifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAKQifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAzAifQhbBQhFB1QhEB2gFBXQgFBXA9AFQA9AGBchQQBbhPBEh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhVBKg");
	this.shape_2.setTransform(40.5,26,0.102,0.102);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F2EB").s().p("AlTCJIAAkRIKnAAIAAERg");
	this.shape_3.setTransform(41.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(123));

	// Layer 8
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(126.6,-25,1,1,0,0,0,79.1,34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).wait(1).to({regX:93.1,regY:37,x:140.7,y:-18.8,alpha:0.066},0).wait(1).to({x:140.8,y:-14.7,alpha:0.15},0).wait(1).to({x:140.9,y:-9.7,alpha:0.254},0).wait(1).to({x:141,y:-4,alpha:0.369},0).wait(1).to({x:141.1,y:1.6,alpha:0.485},0).wait(1).to({x:141.2,y:6.7,alpha:0.591},0).wait(1).to({x:141.3,y:11,alpha:0.68},0).wait(1).to({x:141.4,y:14.6,alpha:0.754},0).wait(1).to({y:17.5,alpha:0.814},0).wait(1).to({x:141.5,y:19.9,alpha:0.862},0).wait(1).to({y:21.7,alpha:0.901},0).wait(1).to({y:23.2,alpha:0.931},0).wait(1).to({x:141.6,y:24.4,alpha:0.955},0).wait(1).to({y:25.2,alpha:0.972},0).wait(1).to({y:25.8,alpha:0.985},0).wait(1).to({y:26.2,alpha:0.994},0).wait(1).to({y:26.5,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:127.6,y:23.5,alpha:1},0).wait(4));

	// text
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.9,70.3,1,1,0,0,0,61.9,44.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:128.2,regY:-44.7,x:141.2,y:-16.3,alpha:0.059},0).wait(1).to({y:-12.5,alpha:0.143},0).wait(1).to({y:-6.5,alpha:0.276},0).wait(1).to({y:2,alpha:0.466},0).wait(1).to({y:9.2,alpha:0.625},0).wait(1).to({y:13.7,alpha:0.725},0).wait(1).to({y:16.7,alpha:0.793},0).wait(1).to({y:18.9,alpha:0.842},0).wait(1).to({y:20.6,alpha:0.879},0).wait(1).to({y:21.9,alpha:0.908},0).wait(1).to({y:22.9,alpha:0.93},0).wait(1).to({y:23.7,alpha:0.948},0).wait(1).to({y:24.4,alpha:0.963},0).wait(1).to({y:24.9,alpha:0.974},0).wait(1).to({y:25.3,alpha:0.983},0).wait(1).to({y:25.6,alpha:0.99},0).wait(1).to({y:25.8,alpha:0.994},0).wait(1).to({y:25.9,alpha:0.998},0).wait(1).to({y:26,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(56).to({regX:128.2,regY:-44.7,x:141.2,y:26.2},0).wait(1).to({y:26.6},0).wait(1).to({y:27.4},0).wait(1).to({y:28.8},0).wait(1).to({y:31.1},0).wait(1).to({y:35.2},0).wait(1).to({y:42.4},0).wait(1).to({y:51.6},0).wait(1).to({y:58},0).wait(1).to({y:62.1},0).wait(1).to({y:64.8},0).wait(1).to({y:66.8},0).wait(1).to({y:68.2},0).wait(1).to({y:69.2},0).wait(1).to({y:70},0).wait(1).to({y:70.5},0).wait(1).to({y:70.8},0).wait(1).to({y:71},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:160.3},0).wait(15));

	// salt
	this.instance_2 = new lib.salt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(341,44.1,1,1,0,0,0,177,36.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).wait(1).to({regX:213.4,regY:55.7,x:367.8,y:63.2},0).wait(1).to({x:354,y:62.6},0).wait(1).to({x:332.5,y:61.7},0).wait(1).to({x:301.5,y:60.4},0).wait(1).to({x:275.5,y:59.3},0).wait(1).to({x:259.1,y:58.6},0).wait(1).to({x:248.1,y:58.1},0).wait(1).to({x:240.2,y:57.8},0).wait(1).to({x:234.1,y:57.5},0).wait(1).to({x:229.4,y:57.3},0).wait(1).to({x:225.7,y:57.1},0).wait(1).to({x:222.8,y:57},0).wait(1).to({x:220.5,y:56.9},0).wait(1).to({x:218.6,y:56.8},0).wait(1).to({x:217.2},0).wait(1).to({x:216.1,y:56.7},0).wait(1).to({x:215.3},0).wait(1).to({x:214.8},0).wait(1).to({x:214.5},0).wait(1).to({regX:177,regY:36.1,x:178,y:37.1},0).wait(96));

	// meaty
	this.instance_3 = new lib.saltcopy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(339.5,275.6,1,1,0,0,0,135.5,147.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:241,regY:208.1,x:432.6,y:329.2},0).wait(1).to({x:414.9,y:319.3},0).wait(1).to({x:387.1,y:303.8},0).wait(1).to({x:347.2,y:281.5},0).wait(1).to({x:313.7,y:262.9},0).wait(1).to({x:292.6,y:251.2},0).wait(1).to({x:278.4,y:243.3},0).wait(1).to({x:268.2,y:237.5},0).wait(1).to({x:260.4,y:233.2},0).wait(1).to({x:254.4,y:229.8},0).wait(1).to({x:249.6,y:227.2},0).wait(1).to({x:245.8,y:225.1},0).wait(1).to({x:242.8,y:223.4},0).wait(1).to({x:240.5,y:222.1},0).wait(1).to({x:238.6,y:221.1},0).wait(1).to({x:237.2,y:220.3},0).wait(1).to({x:236.2,y:219.7},0).wait(1).to({x:235.6,y:219.3},0).wait(1).to({x:235.2,y:219.1},0).wait(1).to({regX:135.5,regY:147.6,x:129.5,y:158.6},0).wait(98));

	// rosemary
	this.instance_4 = new lib.saltcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(232.5,277.8,1,1,0,0,0,38.5,209.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(1).to({regX:82.5,regY:214.1,x:265.1,y:278.7},0).wait(1).to({x:248.7,y:273.9},0).wait(1).to({x:223,y:266.3},0).wait(1).to({x:186.1,y:255.5},0).wait(1).to({x:155.2,y:246.4},0).wait(1).to({x:135.8,y:240.7},0).wait(1).to({x:122.6,y:236.8},0).wait(1).to({x:113.1,y:234.1},0).wait(1).to({x:106,y:231.9},0).wait(1).to({x:100.4,y:230.3},0).wait(1).to({x:96,y:229},0).wait(1).to({x:92.5,y:228},0).wait(1).to({x:89.7,y:227.2},0).wait(1).to({x:87.5,y:226.5},0).wait(1).to({x:85.8,y:226},0).wait(1).to({x:84.5,y:225.6},0).wait(1).to({x:83.6,y:225.4},0).wait(1).to({x:83,y:225.2},0).wait(1).to({x:82.6,y:225.1},0).wait(1).to({regX:38.5,regY:209.8,x:38.5,y:220.8},0).wait(100));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,25,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 50,
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