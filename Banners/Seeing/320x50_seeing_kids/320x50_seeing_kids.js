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



(lib.bb_ender = function() {
	this.initialize(img.bb_ender);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,107);// helper functions:

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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#138CC8","#0F7CB8"],[0,1],7,-2,0,7,-2,98).s().p("AtvDIIAAmPIbfAAIAAGPg");
	this.shape.setTransform(88,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,176,40), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_ender();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,107.8,44.4), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008DC9").s().p("AgOAQIAAgfIAdAAIAAAfg");
	this.shape.setTransform(239.2,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008DC9").s().p("AgOBRIAAhhIgUAAIAAgWIAUAAIAAgrIAcAAIAAArIAVAAIAAAWIgVAAIAABhg");
	this.shape_1.setTransform(232.1,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008DC9").s().p("AgQBTIAAhhIgOAAIAAgXIAOAAIAAgGQABgHABgGIADgJQAEgHAHgEQAJgFAXgBIAAAXQgJAAgEABQgDACgBAEQgCAEgBAFIAAAGIAUAAIAAAXIgUAAIAABhg");
	this.shape_2.setTransform(225.1,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008DC9").s().p("AgNBRIAAh3IAbAAIAAB3gAgNg3IAAgaIAbAAIAAAag");
	this.shape_3.setTransform(219,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008DC9").s().p("AgZBVQgKgDgIgHQgHgGgFgHQgEgHgCgHIAiAAQADAHAJAFQAIAEAHAAQAHAAAGgCQAGgDAFgEQAGgFADgGQADgHAAgJIAAgLQgIAMgGAEIgLAFQgHACgGAAIgNgCIgMgEQgLgEgIgIIgHgKIgGgLIgEgLIgBgNIABgPIAEgMQADgIAKgNQAJgIALgFQAHgCARgCQAFAAAGACIALADIAJAHQAEAEADAEIAAgQIAdAAIAABpQAAAPgDAKQgDAKgFAIIgKAKIgNAHQgHAEgIACQgJACgIAAQgNAAgLgEgAgNg6QgGADgFAFQgFAFgDAGQgDAHAAAIQAAAIADAGQACAHAFAFQAFAEAHADQAGADAHAAQAIAAAHgDQAGgCAFgFQAFgEACgHQADgGAAgIQAAgHgCgHQgCgGgFgGQgEgFgHgDQgHgEgJAAQgGAAgHADg");
	this.shape_4.setTransform(208.3,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008DC9").s().p("AgRA/IgMgEIgKgGIgJgIQgIgJgFgMQgDgLAAgNQAAgJAEgQQAEgIAKgNQAIgIALgFIALgDIANgBQAHAAAGACIANAFQAGAEAHAKIAAgRIAdAAIAAB3IgdAAIAAgRQgCAFgFAEQgEAEgGADIgLAEIgLABQgHAAgHgBgAgPghQgHADgEAFQgFAGgDAGQgCAHAAAGQAAAGACAGQACAHAFAFQAFAGAGAEQAIADAIAAQAGAAAFgBIAJgEQAHgFAFgJQAEgHAAgKQABgIgDgIQgEgJgJgGQgEgDgGgCQgFgBgGAAQgIAAgHADg");
	this.shape_5.setTransform(186.5,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008DC9").s().p("AgNA+QgJgCgGgEQgHgFgEgIQgFgIgBgKIAdAAQABAFACADQABADADACQAFADAFAAQAGAAAGgEQAFgEgBgGQAAgIgHgEQgFgDgSgGIgMgFIgJgFQgEgEgCgFQgDgFAAgHQABgIADgIQADgHAGgFQAGgFAIgDQAIgCAIAAQAHAAAGABQAHACAGAEQAHAEAEAHQAEAIABAKIgcAAQAAgGgDgDQgEgEgHAAQgGAAgEAEQgEADAAAFQAAAFAGAEQAFAEAJACIAOAFQAIADAFADQAGADADAGQAEAHAAAJQAAAJgEAIQgDAHgGAGQgHAFgIADQgIADgKAAQgGAAgHgCg");
	this.shape_6.setTransform(167.2,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008DC9").s().p("AgNBRIAAh3IAbAAIAAB3gAgNg3IAAgaIAbAAIAAAag");
	this.shape_7.setTransform(159.1,10.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008DC9").s().p("AgOBRIAAhhIgUAAIAAgWIAUAAIAAgrIAcAAIAAArIAVAAIAAAWIgVAAIAABhg");
	this.shape_8.setTransform(146,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#008DC9").s().p("AAbBRIAAhBQAAgHgCgFQgBgGgCgDQgEgFgFgCQgFgDgIAAQgHAAgFADQgFADgEAFQgDAEgBAEIgBAKIAABDIgdAAIAAiiIAdAAIAAAoIAAARQADgFADgDIAJgGQAKgEAJAAIAOABIAKADQAJAEAFAJQAFAIACAKQACAJABANIAABCg");
	this.shape_9.setTransform(135.4,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#008DC9").s().p("AgZBVQgKgDgIgHQgHgGgFgHQgEgHgCgHIAiAAQADAHAJAFQAIAEAHAAQAHAAAGgCQAGgDAFgEQAGgFADgGQADgHAAgJIAAgLQgIAMgGAEIgLAFQgHACgGAAIgNgCIgMgEQgLgEgIgIIgHgKIgGgLIgEgLIgBgNIABgPIAEgMQADgIAKgNQAJgIALgFQAHgCARgCQAFAAAGACIALADIAJAHQAEAEADAEIAAgQIAdAAIAABpQAAAPgDAKQgDAKgFAIIgKAKIgNAHQgHAEgIACQgJACgIAAQgNAAgLgEgAgNg6QgGADgFAFQgFAFgDAGQgDAHAAAIQAAAIADAGQACAHAFAFQAFAEAHADQAGADAHAAQAIAAAHgDQAGgCAFgFQAFgEACgHQADgGAAgIQAAgHgCgHQgCgGgFgGQgEgFgHgDQgHgEgJAAQgGAAgHADg");
	this.shape_10.setTransform(120.5,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008DC9").s().p("AgNBRIAAh3IAbAAIAAB3gAgNg3IAAgaIAbAAIAAAag");
	this.shape_11.setTransform(110.4,10.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#008DC9").s().p("AgOA+QgIgCgGgEQgHgFgFgIQgEgIgBgKIAdAAQAAAFACADQACADADACQAFADAFAAQAHAAAFgEQAEgEAAgGQAAgIgHgEQgFgDgSgGIgLgFIgKgFQgEgEgCgFQgDgFABgHQAAgIACgIQAEgHAGgFQAGgFAIgDQAIgCAIAAQAGAAAHABQAIACAFAEQAHAEAEAHQAFAIAAAKIgcAAQAAgGgDgDQgEgEgHAAQgGAAgFAEQgDADAAAFQAAAFAGAEQAFAEAIACIAPAFQAIADAFADQAGADADAGQAEAHAAAJQAAAJgEAIQgDAHgGAGQgHAFgIADQgIADgJAAQgHAAgIgCg");
	this.shape_12.setTransform(102.3,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#008DC9").s().p("AgOA+QgHgCgHgEQgHgFgEgIQgFgIgBgKIAdAAQABAFABADQACADADACQAFADAFAAQAGAAAFgEQAFgEAAgGQAAgIgHgEQgFgDgSgGIgMgFIgJgFQgEgEgCgFQgCgFgBgHQAAgIAEgIQADgHAGgFQAGgFAIgDQAIgCAIAAQAHAAAGABQAIACAFAEQAHAEAEAHQAFAIABAKIgdAAQAAgGgDgDQgEgEgHAAQgHAAgDAEQgEADAAAFQAAAFAGAEQAFAEAJACIAOAFQAIADAFADQAGADAEAGQADAHAAAJQAAAJgDAIQgEAHgGAGQgHAFgIADQgIADgKAAQgGAAgIgCg");
	this.shape_13.setTransform(85.1,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008DC9").s().p("AgKAhIAAhBIAVAAIAABBg");
	this.shape_14.setTransform(77.3,5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#008DC9").s().p("AgQBSIgMgEQgGgDgEgDIgJgHQgJgJgEgMQgCgIgCgRQAAgKAFgPQADgJAKgMQAIgIALgFQAMgEAMAAQAHAAAHACIAMAFQAIAFAFAIIAAgSIAAgpIAdAAIAACiIgcAAIAAgRQgEAJgJAFQgGAEgGABQgHACgIABQgHgBgGgBgAgOgOQgGADgGAFQgEAGgDAFQgCAHgBAHQAAAIADAGQADAHAFAFQAFAFAHADQAHADAGAAQAIAAAIgDQAGgDAFgFQAGgFACgHQADgHAAgHQAAgIgDgHQgDgFgFgFQgFgGgGgCQgIgDgHAAQgHAAgIADg");
	this.shape_15.setTransform(66.8,10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008DC9").s().p("AgNBRIAAiiIAbAAIAACig");
	this.shape_16.setTransform(56.6,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008DC9").s().p("AgNBRIAAh3IAbAAIAAB3gAgNg3IAAgaIAbAAIAAAag");
	this.shape_17.setTransform(50.9,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008DC9").s().p("AAbBRIAAhBQAAgHgBgFQgCgGgDgDQgDgFgFgCQgGgDgGAAQgHAAgHADQgEADgEAFQgDAEgBAEIgBAKIAABDIgcAAIAAiiIAcAAIAAAoIAAARQACgFAEgDIAJgGQAKgEAKAAIAMABIALADQAIAEAGAJQAGAIACAKQACAJAAANIAABCg");
	this.shape_18.setTransform(41.2,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008DC9").s().p("AgMA/IgMgEIgLgGIgJgIQgGgGgIgPIgDgMIgBgMQAAgIAEgQQADgIALgNIAKgHIAKgGIAMgEQAGgBAHAAQAKAAALADQAKAEAIAGQAJAGAGAJQAGAJADALIgeAAIgFgIQgDgEgFgDQgEgDgEgCIgLgBQgIgBgGADQgGADgFAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAFAEAGADQAHADAHAAQAGAAAFgCIAKgFQAHgFAEgJIAeAAQgDAKgGAJQgFAJgJAGQgHAHgLADQgKAEgLAAIgOgBg");
	this.shape_19.setTransform(27.1,12.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008DC9").s().p("AgeA+IAAh3IAcAAIAAAPQADgJAIgEQAEgDAFgCQAGgBAGAAIAAAdIgBAAQgIAAgFACQgGABgEAEQgEAEgBAGQgBAFAAAIIAABAg");
	this.shape_20.setTransform(10.2,12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#008DC9").s().p("AgVA9IgLgEQgJgFgFgIQgFgHgCgKQgCgHAAgJIAAhIIAdAAIAABAQAAAHABAGQACAGACAEQAEAEAFADQAFACAHAAQAHAAAFgCQAGgDADgEQADgEACgGQABgFAAgHIAAhBIAdAAIAAB3IgbAAIAAgQQgFAJgIAFQgFADgFABQgGACgIAAIgNgBg");
	this.shape_21.setTransform(-1.2,12.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#008DC9").s().p("AgOA/IgNgFQgGgCgFgEQgFgDgEgGQgIgIgFgMQgEgLAAgMQAAgLAEgLQAFgMAIgIIAJgJIALgGQAGgDAHgBQAHgCAHAAQAIAAAHACQAHABAGADIALAGIAJAJQAIAIAEAMQAFALAAALQAAAMgFALQgEAMgIAIQgEAGgFADQgFAEgGACIgNAFQgHABgIAAQgHAAgHgBgAgNghQgHADgEAFQgGAFgCAGQgDAHAAAHQAAAIADAHQACAGAGAGQAEAFAHACQAHADAGAAQAHAAAHgDQAGgCAFgFQAFgGADgHQADgGAAgIQAAgHgDgHQgDgGgFgFQgFgFgGgDQgHgDgHAAQgGAAgHADg");
	this.shape_22.setTransform(-15.4,12.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008DC9").s().p("AgPBRIAAg6IgyhoIAjAAIAeBKIAfhKIAjAAIgyBoIAAA6g");
	this.shape_23.setTransform(-29.5,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-38.5,0,283.1,26), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFArIAAg1IgMAAIAAgJIAMAAIAAgXIALAAIAAAXIAMAAIAAAJIgMAAIAAA1g");
	this.shape.setTransform(119.1,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAgQgFgBgDgCQgEgDgCgDQgBgEgBgGIAMAAIACAFIACADQADADAEAAQADAAADgDQAEgDAAgEIgBgEIgDgDIgMgFIgGgCIgFgCIgDgFQgBgDgBgDQABgFABgDIAFgGQADgDAEgBQAEgCADAAIAGABIAHADIAGAGQABAEABAFIgMAAQAAgEgDgCQgCgDgEAAQgDAAgDADQgCACAAAEQAAADADACQADACAEACIAIACIAGADIAFAEIACAJQAAAEgCAEQgBAEgEADQgDADgEABQgEACgFAAQgDAAgDgCg");
	this.shape_1.setTransform(114.4,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFArIAAg+IALAAIAAA+gAgFgdIAAgNIALAAIAAANg");
	this.shape_2.setTransform(110.4,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAhIAAg/IALAAIAAAKIADgFIAEgEIAFgCIAGgBIAAANIgBAAIgHABQgEABgCACIgCAGIgBAIIAAAig");
	this.shape_3.setTransform(107.4,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFArIAAg1IgMAAIAAgJIAMAAIAAgXIAKAAIAAAXIANAAIAAAJIgNAAIAAA1g");
	this.shape_4.setTransform(103.2,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAhIgHgCIgFgEIgFgEQgFgFgCgGQgCgGAAgGQAAgDACgJQADgGAEgFIAFgEIAGgDIAGgCIAGgBQAFAAAIADQAGACAFAFIAEAGIAEAHIABAHIAAAHIg1AAQAAAFACADIAFAGIAHAEIAGABIAGgBIAFgCIAFgDIADgEIAMAAQgCAFgDAEIgIAGIgIAEQgFACgFAAIgGgBgAAVgFIgCgGIgEgGIgHgEQgDgBgFAAQgDAAgEABIgHAEIgEAGQgCADAAADIApAAIAAAAg");
	this.shape_5.setTransform(97.6,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkAhIAAgiIgBgHIgCgHIgFgEQgDgBgEAAQgEAAgDABIgFAFIgCAGIgBAHIAAAiIgLAAIAAgiIgBgHIgCgGIgEgEQgEgCgEAAQgEAAgDACQgDABgCADQgCADAAADIgBAHIAAAiIgMAAIAAg/IALAAIAAAJQACgEAFgDIAGgDIAGgBQAFAAAEACQAFACADADIADAGIAEgGQADgDAFgCQAEgCAFAAQAFAAAEACIAIAFIAEAEIACAFQABAFAAAKIAAAig");
	this.shape_6.setTransform(88.3,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAhIgGgCIgGgEIgFgEQgEgFgDgGQgCgGAAgGIAAAAQAAgFACgGQADgHAEgEIAFgEIAGgEIAGgCIAHgBIAHABIAHACIALAIQAEAFACAGQADAGAAAFQAAAGgDAGQgCAGgEAFIgLAIIgHACIgHABIgHgBgAgIgTQgEABgDADIgEAHQgCAEAAAEQAAAFACAEIAEAHIAHAFQAEABAEAAQAEAAAEgBIAHgFQADgDACgEQACgEAAgFQAAgEgCgEQgCgEgDgDQgDgDgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_7.setTransform(78.9,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGArIAAg1IgLAAIAAgJIALAAIAAgXIALAAIAAAXIANAAIAAAJIgNAAIAAA1g");
	this.shape_8.setTransform(73.2,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAsIAAhVIALAAIAAALIAEgFIAGgEIAHgDIAHgBIAIABIAGACQAEACAGAGQAEAFACAGQACAGAAAGQAAAHgCAFQgDAGgEAEQgGAGgEABIgHACIgGABQgEAAgEgBIgHgDIgFgEIgDgEIAAAKIAAAXgAgJgeIgGAFQgEADgBAEQgBAEgBAFQABAEABAEIAFAGIAHAFQAEACAEAAQAEAAAEgCIAHgFQADgDACgDQABgEABgEIAAgBQgBgEgBgDQgBgEgDgEIgHgFQgEgCgFAAQgEAAgFACg");
	this.shape_9.setTransform(67.5,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAhIgGgCIgGgEIgFgEQgEgFgDgGQgCgGAAgGIAAAAQAAgFACgGQADgHAEgEIAFgEIAGgEIAGgCIAHgBIAHABIAHACIALAIQAEAFACAGQADAGAAAFQAAAGgDAGQgCAGgEAFIgLAIIgHACIgHABIgHgBgAgIgTQgEABgDADIgEAHQgCAEAAAEQAAAFACAEIAEAHIAHAFQAEABAEAAQAEAAAEgBIAHgFQADgDACgEQACgEAAgFQAAgEgCgEQgCgEgDgDQgDgDgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_10.setTransform(59.5,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARAhIAAgiIgBgIIgDgGIgFgEQgDgBgFAAQgDAAgEABIgFAEQgCADgBADIgBAHIAAAjIgMAAIAAg/IALAAIAAAKIADgFIAFgDIAGgDIAHgBIAGABIAGACQAFACADAFQADADABAGIABAKIAAAkg");
	this.shape_11.setTransform(48.6,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAhIgHgCIgFgDIgFgFQgEgEgCgGQgCgGAAgHQAAgEADgIQABgEAFgHQAEgFAHgCIAFgCIAIgBQADAAAEACIAHADIAFAEIADAFIAAgMIAMAAIAAA/IgMAAIAAgLIgEAFIgGAEIgGADIgGABIgIgBgAgIgTQgEABgDADQgDAEgBAEQgCAEAAADIACAIQAAAEADADQADADAEACQAEACAFAAIAHgBIAGgCIADgEIAEgFQACgFAAgFQAAgEgCgEIgDgFIgEgEIgGgDIgHgBQgEAAgEACg");
	this.shape_12.setTransform(40.7,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIArIgGgCIgFgDIgFgEQgEgFgDgGQgCgGAAgHQAAgFADgHQABgEAFgHQAFgEAGgDIAGgBIAGgBQAEAAAEABIAHADQAEADAEAFIAAgLIAAgWIAMAAIAABVIgMAAIAAgLQgEAHgEACQgDACgEABQgEABgDAAIgIgBgAgIgJQgEACgDADQgDADgBADQgCAEAAAEIAAABIACAIQABAEADADQADADAEACQAEACAEAAQAFAAAEgCIAHgFIAFgHIACgJQAAgEgCgFQgCgDgDgCIgHgFQgEgCgFAAQgDAAgFACg");
	this.shape_13.setTransform(29.2,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARAhIAAgiIgBgIIgDgGIgFgEQgDgBgFAAQgDAAgEABIgFAEQgCADgBADIgBAHIAAAjIgMAAIAAg/IALAAIAAAKIADgFIAFgDIAGgDIAHgBIAGABIAGACQAFACADAFQADADABAGIABAKIAAAkg");
	this.shape_14.setTransform(21.7,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFArIAAg+IALAAIAAA+gAgFgdIAAgNIALAAIAAANg");
	this.shape_15.setTransform(16.6,14.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWArIAAhVIAsAAIAAAMIgeAAIAAAZIAeAAIAAALIgeAAIAAAlg");
	this.shape_16.setTransform(12.6,14.3);

	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(69.3,14.7,0.729,0.729,0,0,0,95,20.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-11,-9,154,55), null);


// stage content:
(lib._320x50_seeing_kids = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(83.9,77.2,1,1,0,0,0,53.9,22.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(1).to({y:76.7},0).wait(1).to({y:74.4},0).wait(1).to({y:68.1},0).wait(1).to({y:55.6},0).wait(1).to({y:45.9},0).wait(1).to({y:40},0).wait(1).to({y:36},0).wait(1).to({y:33.2},0).wait(1).to({y:31.1},0).wait(1).to({y:29.5},0).wait(1).to({y:28.4},0).wait(1).to({y:27.5},0).wait(1).to({y:26.9},0).wait(1).to({y:26.5},0).wait(1).to({y:26.3},0).wait(1).to({y:26.2},0).wait(20));

	// Layer_3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(232,76.6,1,1,0,0,0,64.2,14.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).wait(1).to({regX:64.1,regY:15.3,x:231.9,y:76.7},0).wait(1).to({y:74.5},0).wait(1).to({y:68.2},0).wait(1).to({y:55.6},0).wait(1).to({y:45.9},0).wait(1).to({y:40.1},0).wait(1).to({y:36.1},0).wait(1).to({y:33.3},0).wait(1).to({y:31.2},0).wait(1).to({y:29.6},0).wait(1).to({y:28.4},0).wait(1).to({y:27.6},0).wait(1).to({y:26.9},0).wait(1).to({y:26.5},0).wait(1).to({y:26.3},0).wait(1).to({regX:64.2,regY:14.6,x:232,y:25.6},0).wait(17));

	// Layer_2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(160,70,1,1,0,0,0,103,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:102.2,regY:12.7,x:159.2,y:69.6},0).wait(1).to({y:69.1},0).wait(1).to({y:68},0).wait(1).to({y:66.1},0).wait(1).to({y:62.4},0).wait(1).to({y:55.5},0).wait(1).to({y:48.1},0).wait(1).to({y:43.1},0).wait(1).to({y:39.8},0).wait(1).to({y:37.3},0).wait(1).to({y:35.4},0).wait(1).to({y:33.9},0).wait(1).to({y:32.7},0).wait(1).to({y:31.8},0).wait(1).to({y:31},0).wait(1).to({y:30.4},0).wait(1).to({y:29.9},0).wait(1).to({y:29.5},0).wait(1).to({y:29.2},0).wait(1).to({y:29},0).wait(1).to({y:28.8},0).wait(1).to({y:28.7},0).wait(1).to({regX:103,regY:13,x:160,y:29},0).wait(56).to({regX:102.2,regY:12.7,x:159.2,y:28.8},0).wait(1).to({y:29.2},0).wait(1).to({y:30},0).wait(1).to({y:31.2},0).wait(1).to({y:33.2},0).wait(1).to({y:36.5},0).wait(1).to({y:42.3},0).wait(1).to({y:52.1},0).wait(1).to({y:60.2},0).wait(1).to({y:64.4},0).wait(1).to({y:66.7},0).wait(1).to({y:67.9},0).wait(1).to({y:68.5},0).wait(1).to({regX:103,regY:13,x:160,y:69},0).wait(35));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#E5E9EB"],[0.482,1],0,0,0,0,0,209).s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(1,1,1,1,0,0,0,-159.1,-24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160.1,25,320,83);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bb_ender.png", id:"bb_ender"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;