(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_longos_prod_guelph_atlas_", frames: [[0,602,144,52],[0,0,300,600]]}
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
	this.spriteSheet = ss["300x600_longos_prod_guelph_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["300x600_longos_prod_guelph_atlas_"];
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
	this.shape.graphics.f("#E2231A").s().p("AgWAXQgEgFgDgFQgCgGAAgHQAAgGACgGQADgFAEgFQAKgIAMAAQANAAAJAIQAFAFACAFQADAGAAAGQAAAHgDAGQgCAFgFAFQgJAIgNAAQgMAAgKgIg");
	this.shape.setTransform(184.7,130.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_1.setTransform(168.7,122.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgWBuQgLgDgLgEQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgIQAIgHAJgGQAKgFAKgEQALgEALgDQALgCALABQALgBAMACQALADALAEQAKAEAJAFQAKAGAIAHQAIAIAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAEgLADQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_2.setTransform(144.5,122.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQAMAAAKACQAKACALAEQAJADAJAGQAJAFAIAHQAHAHAGAJQAGAJADAKQAFAKACALQACAMAAALQAAANgCALQgCALgFAKQgDAKgGAJQgGAJgHAHQgIAHgJAFQgJAGgJADQgLAEgKACQgKACgMAAgAgmA8IATAAQANAAAKgFQALgEAHgIQAIgIADgKQAFgMAAgNQAAgMgFgMQgDgKgIgIQgHgIgLgEQgKgFgNAAIgTAAg");
	this.shape_3.setTransform(121.6,122.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_4.setTransform(100.2,122.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgWBuQgLgDgLgEQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgIQAIgHAJgGQAKgFAKgEQALgEALgDQALgCALABQALgBAMACQALADALAEQAKAEAJAFQAKAGAIAHQAIAIAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAEgLADQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_5.setTransform(76.8,122.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgLBuQgLgDgLgEQgLgEgJgFQgJgHgIgHQgIgHgHgJQgGgJgFgKQgEgKgCgLQgDgMAAgMQAAgMADgLQACgLAEgLQAFgJAGgKQAGgIAIgIQAIgHAKgGQAJgFAKgEQALgEALgDQALgCALABQAOAAANACQANADALAEQALAFAJAHQAJAIAHAJIgoAjQgJgLgLgGQgNgGgPAAQgMAAgLAEQgKAFgHAJQgHAHgEAMQgDALAAAMQAAANADALQAEALAHAJQAIAIALAGQALAEANAAQAVABAVgJIAAgWIgrAAIAAgsIBfAAIAABdQgWAQgPAGQgMAEgNACQgPACgSABQgLAAgLgCg");
	this.shape_6.setTransform(52.7,122.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("Ag3BrQgPgEgMgIQgLgIgGgMQgGgMAAgPQAAgMADgKQADgJAGgIQAGgGAKgGQAIgGAMgFQgHgLgDgMQgEgLAAgJQAAgNAFgKQAFgJAIgHQAJgHAMgEQALgDAOAAQANAAALADQALADAJAGQAHAHAFAJQAEAKAAAKQAAAKgCAHQgCAIgFAHQgFAGgIAFIgRAMIAaAgQAHgNABgQIAwAAQgDAZgEAMQgGARgLAPIAiArIhDAAIgIgKQgMAHgNADQgNADgPABQgSAAgPgFgAgrAcQgDAGAAAIQAAALAHAGQAHAHAPAAQAKAAAJgFIgjgtQgHAGgDAGgAgPhFQgDACAAAIQAAAKAJAMQAIgFADgFQAEgFAAgHQAAgGgEgDQgCgEgFAAQgHAAgDADg");
	this.shape_7.setTransform(22.8,122.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgWAXQgEgFgCgFQgDgGAAgHQAAgGADgGQACgFAEgFQAKgIAMAAQANAAAJAIQAFAFACAFQADAGAAAGQAAAHgDAGQgCAFgFAFQgJAIgNAAQgMAAgKgIg");
	this.shape_8.setTransform(189,99.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AA3BwIg3h0Ig0B0QgCAEgDgEIhbjbIA9AAIApBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABAAABIAyBqIAmhmIA6AAIhaDbIgCACIgBgCg");
	this.shape_9.setTransform(172.7,91.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_10.setTransform(140.1,91.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_11.setTransform(124.3,91.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBqDdgAASArIgUgtIgTAtIAnAAg");
	this.shape_12.setTransform(108.6,91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_13.setTransform(89.3,91.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgNBtQgLgCgKgEQgKgEgJgGQgJgFgIgIQgIgHgGgJQgGgJgFgKQgEgLgDgKQgCgMAAgMQAAgLACgMQADgLAEgKQAFgLAGgIQAGgJAIgIQAHgHAJgFQAJgGAKgFQAKgEAKgBQALgCAJAAQASAAAPADQANADANAGQAKAGAJAKQAJAHAIALIgtAeQgHgMgKgGQgGgEgHgCQgJgCgJAAQgMAAgJAFQgJAEgIAIQgGAIgEALQgDAMAAAMQAAAMADAMQAEALAHAIQAHAIAKAFQAKAFAMAAQAKAAAIgDQAHgCAHgDQALgIAHgPIAtAeQgIANgKAKQgKAJgLAHQgLAHgPADQgNACgRAAQgLAAgLgCg");
	this.shape_14.setTransform(69.2,91.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_15.setTransform(40.8,91.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_16.setTransform(22.5,91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_17.setTransform(172.8,60.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_18.setTransform(152.4,60.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AhWBtIAAjZIBXAAQAOAAAXAGQAPAGAMAKQAKALAHAOQAFAPAAAQQAAARgFANQgHAOgKALQgMAKgPAGQgXAFgOAAIgdAAIAAA/gAgcgBIAbAAQAOAAAIgIQAHgHABgOQgBgNgHgIQgIgIgOAAIgbAAg");
	this.shape_19.setTransform(133.2,60.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgWBuQgLgCgLgFQgKgEgKgFIgRgOQgIgIgGgIQgHgJgEgKQgFgLgCgLQgDgLAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgHQAIgIAJgGQAKgFAKgEQALgFALgCQALgCALAAQALAAAMACQALACALAFQAKAEAJAFQAKAGAIAIQAIAHAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDALQgCALgFALQgEAKgHAJQgGAIgIAIQgIAHgKAHQgJAFgKAEQgLAFgLACQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADALQAEAMAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgMQAEgLAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_20.setTransform(110.1,60.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AA2BwIg2h0Ig1B0QgCAEgBgEIhbjbIA9AAIAoBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABABABIAwBqIAnhmIA7AAIhaDbQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAg");
	this.shape_21.setTransform(75,60.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AgWBuQgLgCgLgFQgKgEgKgFIgRgOQgIgIgGgIQgHgJgEgKQgFgLgCgLQgDgLAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgHQAIgIAJgGQAKgFAKgEQALgFALgCQALgCALAAQALAAAMACQALACALAFQAKAEAJAFQAKAGAIAIQAIAHAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDALQgCALgFALQgEAKgHAJQgGAIgIAIQgIAHgKAHQgJAFgKAEQgLAFgLACQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADALQAEAMAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgMQAEgLAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_22.setTransform(47.5,60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_23.setTransform(23.3,60.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_24.setTransform(124.6,29.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AhWBtIAAjZIBXAAQAOAAAXAGQAQAGAKAKQAMALAFAOQAGAPAAAQQAAARgGANQgFAOgMALQgKAKgQAGQgXAFgOAAIgdAAIAAA/gAgcgBIAbAAQAOAAAHgIQAIgHAAgOQAAgNgIgIQgHgIgOAAIgbAAg");
	this.shape_25.setTransform(103.7,29.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_26.setTransform(84.7,29.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_27.setTransform(66.6,29.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AglBpQgVgJgIgHQgHgGgFgHQgFgGgDgJQgDgIgCgJQgCgKAAgLIAAiEIA6AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAEgFQAFgFACgHQACgHAAgKIAAiDIA7AAIAACEQAAALgCAKQgCAJgDAIQgEAJgFAGQgFAHgGAGIgOAJIgQAHQgSAFgUAAQgUAAgRgFg");
	this.shape_28.setTransform(45.7,29.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgLBtQgLgCgLgEQgLgEgJgGQgJgFgIgIQgIgIgHgIQgGgJgFgKQgEgLgCgKQgDgMAAgMQAAgLADgMQACgLAEgLQAFgJAGgJQAGgJAIgIQAIgHAKgFQAJgHAKgDQALgFALgBQALgCALAAQAOAAANACQANADALAFQALAFAJAGQAJAIAHAJIgoAkQgJgMgLgFQgNgHgPAAQgMAAgLAFQgKAEgHAIQgHAJgEAKQgDAMAAAMQAAAMADAMQAEAMAHAIQAIAJALAEQALAGANgBQAVAAAVgIIAAgWIgrAAIAAgrIBfAAIAABcQgWAQgPAFQgMAFgNACQgPACgSAAQgLAAgLgCg");
	this.shape_29.setTransform(23,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(9.6,13.2,185.9,129), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgVAXQgFgFgDgFQgCgGAAgHQAAgGACgGQADgFAFgFQAJgIAMAAQANAAAKAIQAEAFADAFQACAGAAAGQAAAHgCAGQgDAFgEAFQgKAIgNAAQgMAAgJgIg");
	this.shape.setTransform(123.7,162.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_1.setTransform(109.5,154.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_2.setTransform(89.9,154.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_3.setTransform(68.7,154.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_4.setTransform(47.8,154.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_5.setTransform(33.4,154.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_6.setTransform(19.8,154.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_7.setTransform(183.7,123.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgDQAIgFAAgJQAAgHgGgEQgEgEgMgEIgYgIQgNgEgJgGQgKgGgHgGQgIgIgDgKQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgDAOAAQAOAAAMABQALADAKAEQAMAFAPAPIghAjQgHgHgJgEQgKgFgMAAQgJAAgGAFQgFADAAAIQAAAFAEAEQADADAIAEIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAFgVABQgRAAgPgEg");
	this.shape_8.setTransform(164.5,123.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgDgIgDgJQgCgKAAgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAFgFQAEgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgEAIQgDAJgFAGQgFAHgHAGIgNAJIgQAHQgRAFgVAAQgTAAgRgFg");
	this.shape_9.setTransform(144.7,123.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AgWBtQgLgBgLgFQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgLADgMQACgLAFgLQAEgKAHgJQAGgIAIgIQAIgHAJgFQAKgHAKgDQALgFALgCQALgBALAAQALAAAMABQALACALAFQAKADAJAHQAKAFAIAHQAIAIAGAIQAHAJAEAKQAFALACALQADAMAAALQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAFgLABQgMADgLAAQgLAAgLgDgAgXg4QgLAFgHAIQgIAJgEALQgDALAAAMQAAANADALQAEALAIAIQAHAJALAEQAKAFANAAQANAAALgFQALgEAHgJQAHgIAEgLQAEgLAAgNQAAgMgEgLQgEgLgHgJQgHgIgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_10.setTransform(121.1,123.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AAmBtIAAhVIhLAAIAABVIg6AAIAAjZIA6AAIAABUIBLAAIAAhUIA6AAIAADZg");
	this.shape_11.setTransform(97.1,123.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_12.setTransform(68.1,123.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgDgIgDgJQgCgKAAgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAFgFQAEgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgEAIQgDAJgFAGQgFAHgHAGIgNAJIgQAHQgRAFgVAAQgTAAgRgFg");
	this.shape_13.setTransform(46.1,123.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgWBtQgLgBgLgFQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgLADgMQACgLAFgLQAEgKAHgJQAGgIAIgIQAIgHAJgFQAKgHAKgDQALgFALgCQALgBALAAQALAAAMABQALACALAFQAKADAJAHQAKAFAIAHQAIAIAGAIQAHAJAEAKQAFALACALQADAMAAALQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAFgLABQgMADgLAAQgLAAgLgDgAgXg4QgLAFgHAIQgIAJgEALQgDALAAAMQAAANADALQAEALAIAIQAHAJALAEQAKAFANAAQANAAALgFQALgEAHgJQAHgIAEgLQAEgLAAgNQAAgMgEgLQgEgLgHgJQgHgIgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_14.setTransform(22.5,123.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_15.setTransform(155.5,92.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_16.setTransform(138.9,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgTIAqggQAJALAJAFQAMAIAOAAQAOAAAGgFQAIgEAAgJQAAgGgGgFQgEgEgMgDIgYgJQgNgEgJgFQgKgHgHgHQgIgHgDgLQgEgKAAgNQAAgRAGgMQAGgMAKgIQAKgJAOgDQANgEAOgBQAOABAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAGQAAAHAEADQADADAIADIAcAKQAQAGAMAGQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEAMgKAJQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_17.setTransform(116.9,92.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBPAAIAAAtIhPAAIAAAmIBiAAIAAAxg");
	this.shape_18.setTransform(99.4,92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_19.setTransform(81.3,92.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AhWBtIAAjZIBXAAQAOAAAXAGQAPAGALAKQALALAHAOQAFAPAAAQQAAARgFANQgHAOgLALQgLAKgPAGQgXAFgOAAIgdAAIAAA/gAgcgBIAbAAQAOAAAHgIQAJgHAAgOQAAgNgJgIQgHgIgOAAIgbAAg");
	this.shape_20.setTransform(62.4,92.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AhWBtIAAjZIBXAAQAOAAAXAGQAPAGALAKQAMALAFAOQAGAPAAAQQAAARgGANQgFAOgMALQgLAKgPAGQgXAFgOAAIgdAAIAAA/gAgcgBIAbAAQAOAAAHgIQAJgHgBgOQABgNgJgIQgHgIgOAAIgbAAg");
	this.shape_21.setTransform(42.4,92.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AAvBwIgLgaIhLAAIgLAaIg4AAIBpjdQABgEACAEIBqDdgAASArIgUgtIgTAtIAnAAg");
	this.shape_22.setTransform(20.9,91.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQALAAALACQAKACAKAEQALADAIAGQAJAFAIAHQAHAHAGAJQAGAJAEAKQAEAKACALQACAMAAALQAAANgCALQgCALgEAKQgEAKgGAJQgGAJgHAHQgIAHgJAFQgIAGgLADQgKAEgKACQgLACgLAAgAgmA8IAUAAQAMAAAKgFQALgEAHgIQAIgIADgKQAFgMAAgNQAAgMgFgMQgDgKgIgIQgHgIgLgEQgKgFgMAAIgUAAg");
	this.shape_23.setTransform(162.2,61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg6AAIBqjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_24.setTransform(139.8,60.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AhWBtIAAjZIBdAAQAQAAANAEQAOADAJAIQAJAHAFAKQAFALAAAOQAAAJgCAIQgCAHgEAGQgIALgOAFQAIADAHACQAHAFAFAFQAGAHADAIQADAKAAALQAAAPgFALQgFAMgLAIQgLAIgPAFQgQAEgUAAgAgeA/IAiAAQANAAAHgGQAFgGAAgLQAAgLgGgFQgGgGgNAAIgiAAgAgegXIAeAAQALAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgLAAIgeAAg");
	this.shape_25.setTransform(119.2,61.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_26.setTransform(91.5,61.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_27.setTransform(70.4,61.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAvBwIgLgaIhLAAIgKAaIg6AAIBqjdQABgEACAEIBpDdgAARArIgSgtIgUAtIAmAAg");
	this.shape_28.setTransform(47.9,60.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AA2BwIg2h0Ig1B0QgCAEgBgEIhbjbIA9AAIAoBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABABABIAwBqIAnhmIA7AAIhaDbQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAg");
	this.shape_29.setTransform(25,61);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_30.setTransform(154.6,30.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AgYAuIAMgiQgJgDgFgHQgFgHAAgJQAAgHACgGQADgFAEgFQAJgIANAAQANAAAJAIQAFAFADAFQACAGAAAHQAAAIgDAHQgEAIgFAIIgUAdg");
	this.shape_31.setTransform(140.9,23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_32.setTransform(124.8,30.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGQgJgFgIgIQgIgIgGgIQgHgJgEgKQgFgLgCgKQgDgMAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgIQAIgHAJgFQAKgGAKgFQALgEALgBQALgCALAAQALAAAMACQALABALAEQAKAFAJAGQAKAFAIAHQAIAIAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDAMQgCAKgFALQgEAKgHAJQgGAIgIAIQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAIQgIAJgEAKQgDAMAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgMQgEgKgHgJQgHgIgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_33.setTransform(100.7,30.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQALAAALACQALACAKAEQAKADAJAGQAIAFAIAHQAHAHAGAJQAGAJADAKQAFAKACALQACAMAAALQAAANgCALQgCALgFAKQgDAKgGAJQgGAJgHAHQgIAHgIAFQgJAGgKADQgKAEgLACQgLACgLAAgAgmA8IATAAQANAAALgFQAKgEAIgIQAHgIADgKQAEgMABgNQgBgMgEgMQgDgKgHgIQgIgIgKgEQgLgFgNAAIgTAAg");
	this.shape_34.setTransform(77.8,30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_35.setTransform(49.7,30.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AA2BwIg2h0Ig1B0QgCAEgBgEIhbjbIA9AAIAoBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABABABIAwBqIAnhmIA7AAIhaDbIgDACIgCgCg");
	this.shape_36.setTransform(25,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(8,14,186.6,160), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuSakMAAAg1HIclAAMAAAA1Hg");
	mask.setTransform(220.9,342.7);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(129.4,172.8,170.7,340), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4JIiIAAtcIAPAAIAAjnIMRAAIAADnMAjzAAAIAANcg");
	mask.setTransform(154.6,545.4);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(0,490.8,300,109.3), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmnMYIAA4vINPAAIAAYvg");
	mask.setTransform(199.3,69.9);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-70,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(156.9,0,73.1,149.1), null);


// stage content:
(lib._300x600_longos_prod_guelph = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68B264").s().p("AA4DYQhxhIg3iaIgpiBQgZhMgdgwQBMAABMAvQBxBJA3CZQAPArAaBXQAZBMAdAxQhMgBhMgwg");
	this.shape.setTransform(150.9,35.1,0.275,0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1CB38").s().p("AlIFXQAvhAAthoQAwh4Abg5QAvhlA2hAQBDhSBkgxQBzg4BrALQgwBBgtBoIhKCxQgvBlg1BAQhEBShkAxQhfAvhYAAQgUAAgTgDg");
	this.shape_1.setTransform(167.2,28.8,0.275,0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC342E").s().p("Aj/OiQh6hCAEh7QACh5B6g/QBwg5C3ADIA7ABQAOAAAGAKQAHALgHAOQgFAOgIAGQgJAIgPAAIgqAAQhEgCgyA0QgxAzgCBNQAABLA1A1QAzAzBHAAQCeAAC+jZQBziEBkixQhOAShQgGQhIgGg7gmQg5glghg8QhJBJhYApQhbAqhIgLQhrAAg9g+Qg/hBAihdQAJgaBUiJQA/hoAog+QAegvgGgSQgHgUg3AjQhNAyhYBcQhcBhhSB6Ih/DbIkgABIDClaQgmgEgfgQQgRgKgegXQAAAUgMAqQg0CaiWBkQiYBmi2gCQhgAAhGgoQhDBMhmAyQhgAyh8gTQj7gqiDiXQgiAdg4AdQhwA6htADQiRAFhahBQhZhBABhrQACh2BehYQBphhCjAAQBTAABcAlQBlApA+BDQA9hRCHkIQCqlNBWiTQA/hrBng+QBlg9BsAAQBxAAA4BTQA1BRgUB+QgEAXggAJQgRAFgPgEQgOgEgDgKIAAgJQANhKgRgwQgRgygpAAQhCAAiUECQhTCRicEuQg8BvhPBWQg8BChhBOQAzA1BBAuQA7AqA6AcQCnBbBwh0Qg2gzgQhJQgQhMAdhTQA5irCXhgQCLhZCxABQB0ADBNAuQBKAsAeBNQAVAoAdAbQAdAdAfAKQAdAGAOgEQAOgEAPgSICEjdIEnABIhDByQBKg8BLgkQBXgpBGAAQBhAAAtBDQAvBFg1BRQi0EYgYAsQgYAtAEAeQAFAdAcAAQBGAACZitQgOhgAvhcQBIiSCHhQQCEhPCcAEQBdADBBAjQAwAZAcAoIAlg+IEggBIlKJIQArgOA2gnQA0gmBjhWQADgqAQguQA5irCXhgQCLhZCxABQBoADBJAlQBGAkAkBBQBcBnB4AMQCyAWDFj+IAjgpQATgRAZAAQAXAAAFAUQAFAVgSAoQgVAugDBDQgDAtAGA/QAEBmglBYQgnBchQBGQCKgmC0hnIAdgQQAIgFAJAFQAJAEADALQAEALgDALQgCAMgJAFQguAegUAKQjKBggsARQhcAjh+ANQikAShXhLQhCg5AAhRQAAhXA0grQAogiA7AAQA8AAAgAtQAaAkgFAlQgEAngdAdQgjAig7AGQADAUAYASQAXASAgAFQA6AJAggyQAqg4ARhOQAShPgKhfQhSAmh2gJQgfgDg2gPQgzgQgngSQgZDMiuCCQigB3jDgFQhGgCgygSQgogOgjgcQhAg0gahAIAAABQhXBEhCAkQhPAshQAQQheCTicCUQk5Enk3AAQi4AAhug8gEgrAABnQgyAwAABCQAAA/A2AvQA6A0BZAAQBMAABLg6QAXgTA8g/QhFhggngjQg+g4hKgDQhXAAg2A2gAZzifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAKQifQhbBQhEB1QhEB2gFBXQgFBXA9AFQA9AGBbhQQBbhPBFh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhWBKgAzAifQhbBQhFB1QhEB2gFBXQgFBXA9AFQA9AGBchQQBbhPBEh2QBEh1AFhXQAFhXg9gGIgIAAQg7AAhVBKg");
	this.shape_2.setTransform(103.3,49.1,0.275,0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F2EB").s().p("AuUFxIAArhIcpAAIAALhg");
	this.shape_3.setTransform(105.2,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(114));

	// logo
	this.instance = new lib.bb_logo();
	this.instance.parent = this;
	this.instance.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114));

	// Layer 8
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(1).to({regX:102,regY:75.9,x:77.7,y:146.9,alpha:0.066},0).wait(1).to({x:81.1,alpha:0.15},0).wait(1).to({x:85.2,alpha:0.254},0).wait(1).to({x:89.8,alpha:0.369},0).wait(1).to({x:94.5,alpha:0.485},0).wait(1).to({x:98.7,alpha:0.591},0).wait(1).to({x:102.2,alpha:0.68},0).wait(1).to({x:105.2,alpha:0.754},0).wait(1).to({x:107.6,alpha:0.814},0).wait(1).to({x:109.5,alpha:0.862},0).wait(1).to({x:111,alpha:0.901},0).wait(1).to({x:112.2,alpha:0.931},0).wait(1).to({x:113.2,alpha:0.955},0).wait(1).to({x:113.9,alpha:0.972},0).wait(1).to({x:114.4,alpha:0.985},0).wait(1).to({x:114.7,alpha:0.994},0).wait(1).to({x:114.9,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:100.8,regY:91.9,x:66.8,y:162.7,alpha:0.059},0).wait(1).to({x:71,alpha:0.143},0).wait(1).to({x:77.6,alpha:0.276},0).wait(1).to({x:87.1,alpha:0.466},0).wait(1).to({x:95.1,alpha:0.625},0).wait(1).to({x:100.1,alpha:0.725},0).wait(1).to({x:103.5,alpha:0.793},0).wait(1).to({x:105.9,alpha:0.842},0).wait(1).to({x:107.8,alpha:0.879},0).wait(1).to({x:109.2,alpha:0.908},0).wait(1).to({x:110.3,alpha:0.93},0).wait(1).to({x:111.2,alpha:0.948},0).wait(1).to({x:111.9,alpha:0.963},0).wait(1).to({x:112.5,alpha:0.974},0).wait(1).to({x:112.9,alpha:0.983},0).wait(1).to({x:113.3,alpha:0.99},0).wait(1).to({x:113.5,alpha:0.994},0).wait(1).to({x:113.7,alpha:0.998},0).wait(1).to({x:113.8,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(47).to({regX:100.8,regY:91.9,x:113.9,y:162.7,alpha:0.997},0).wait(1).to({x:114.3,alpha:0.988},0).wait(1).to({x:115,alpha:0.97},0).wait(1).to({x:116.2,alpha:0.939},0).wait(1).to({x:118.3,alpha:0.887},0).wait(1).to({x:121.9,alpha:0.798},0).wait(1).to({x:128.3,alpha:0.637},0).wait(1).to({x:136.5,alpha:0.432},0).wait(1).to({x:142.2,alpha:0.289},0).wait(1).to({x:145.8,alpha:0.199},0).wait(1).to({x:148.3,alpha:0.138},0).wait(1).to({x:150,alpha:0.095},0).wait(1).to({x:151.2,alpha:0.064},0).wait(1).to({x:152.2,alpha:0.041},0).wait(1).to({x:152.8,alpha:0.024},0).wait(1).to({x:153.3,alpha:0.013},0).wait(1).to({x:153.6,alpha:0.005},0).wait(1).to({x:153.7,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// rosemary
	this.instance_3 = new lib.saltcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4,118.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:150,regY:545.4,x:153.7,y:658.7},0).wait(1).to({x:153.4,y:651.3},0).wait(1).to({x:152.9,y:639.7},0).wait(1).to({x:152.1,y:623.1},0).wait(1).to({x:151.5,y:609.2},0).wait(1).to({x:151.1,y:600.4},0).wait(1).to({x:150.8,y:594.5},0).wait(1).to({x:150.6,y:590.2},0).wait(1).to({x:150.5,y:586.9},0).wait(1).to({x:150.4,y:584.4},0).wait(1).to({x:150.3,y:582.4},0).wait(1).to({x:150.2,y:580.9},0).wait(1).to({x:150.1,y:579.6},0).wait(1).to({y:578.6},0).wait(1).to({y:577.8},0).wait(1).to({x:150,y:577.3},0).wait(1).to({y:576.8},0).wait(1).to({y:576.6},0).wait(1).to({y:576.4},0).wait(1).to({regX:0,regY:0,x:0,y:31},0).wait(91));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(306.2,273.3,1,1,0,0,0,135.5,147.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:214.7,regY:342.7,x:375.5,y:463.4},0).wait(1).to({x:361.3,y:456.1},0).wait(1).to({x:339.1,y:444.8},0).wait(1).to({x:307.2,y:428.5},0).wait(1).to({x:280.6,y:414.8},0).wait(1).to({x:263.7,y:406.2},0).wait(1).to({x:252.4,y:400.4},0).wait(1).to({x:244.2,y:396.2},0).wait(1).to({x:238,y:393.1},0).wait(1).to({x:233.2,y:390.6},0).wait(1).to({x:229.4,y:388.7},0).wait(1).to({x:226.3,y:387.1},0).wait(1).to({x:223.9,y:385.9},0).wait(1).to({x:222,y:384.9},0).wait(1).to({x:220.6,y:384.2},0).wait(1).to({x:219.5,y:383.6},0).wait(1).to({x:218.6,y:383.2},0).wait(1).to({x:218.1,y:382.9},0).wait(1).to({x:217.8,y:382.7},0).wait(1).to({regX:135.5,regY:147.6,x:138.5,y:187.6},0).wait(89));

	// salt
	this.instance_5 = new lib.salt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(432,41.1,1,1,0,0,0,177,36.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).wait(1).to({regX:193.4,regY:74.5,x:437.6,y:79},0).wait(1).to({x:422,y:78.5},0).wait(1).to({x:397.7,y:77.6},0).wait(1).to({x:362.7,y:76.3},0).wait(1).to({x:333.4,y:75.2},0).wait(1).to({x:314.9,y:74.5},0).wait(1).to({x:302.5,y:74.1},0).wait(1).to({x:293.5,y:73.8},0).wait(1).to({x:286.7,y:73.5},0).wait(1).to({x:281.4,y:73.3},0).wait(1).to({x:277.2,y:73.2},0).wait(1).to({x:273.9,y:73.1},0).wait(1).to({x:271.2,y:73},0).wait(1).to({x:269.2,y:72.9},0).wait(1).to({x:267.5,y:72.8},0).wait(1).to({x:266.3},0).wait(1).to({x:265.4,y:72.7},0).wait(1).to({x:264.8},0).wait(1).to({x:264.5},0).wait(1).to({regX:177,regY:36.1,x:248,y:34.3},0).wait(87));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_4.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_longos_prod_guelph_atlas_.png", id:"300x600_longos_prod_guelph_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;