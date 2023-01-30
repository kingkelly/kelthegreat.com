(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_longos_meat_guelph_atlas_", frames: [[0,402,144,52],[0,0,291,400]]}
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
	this.spriteSheet = ss["300x600_longos_meat_guelph_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["300x600_longos_meat_guelph_atlas_"];
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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgWAXQgEgFgDgFQgCgGAAgHQAAgGACgGQADgFAEgFQAKgIAMAAQANAAAJAIQAFAFACAFQADAGAAAGQAAAHgDAGQgCAFgFAFQgJAIgNAAQgMAAgKgIg");
	this.shape.setTransform(179.8,131.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQAMAAAKACQAKACAKAEQALADAIAGQAJAFAHAHQAIAHAGAJQAGAJAEAKQAEAKACALQACAMAAALQAAANgCALQgCALgEAKQgEAKgGAJQgGAJgIAHQgHAHgJAFQgIAGgLADQgKAEgKACQgKACgMAAgAgmA8IAUAAQANAAAJgFQALgEAHgIQAIgIAEgKQADgMABgNQgBgMgDgMQgEgKgIgIQgHgIgLgEQgJgFgNAAIgUAAg");
	this.shape_1.setTransform(165,123.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_2.setTransform(144.7,123.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_3.setTransform(123.2,123.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgWBtQgLgBgLgFQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgLADgMQACgLAFgLQAEgKAHgJQAGgIAIgIQAIgHAJgFQAKgHAKgDQALgFALgCQALgBALAAQALAAAMABQALACALAFQAKADAJAHQAKAFAIAHQAIAIAGAIQAHAJAEAKQAFALACALQADAMAAALQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAFgLABQgMADgLAAQgLAAgLgDgAgXg4QgLAFgHAIQgIAJgEALQgDALAAAMQAAANADALQAEALAIAIQAHAJALAEQAKAFANAAQANAAALgFQALgEAHgJQAHgIAEgLQAEgLAAgNQAAgMgEgLQgEgLgHgJQgHgIgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_4.setTransform(99.1,123.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgDQAIgFAAgJQAAgHgGgEQgEgEgMgEIgYgIQgNgEgJgGQgKgGgHgGQgIgIgDgKQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgDAOAAQAOAAAMABQALADAKAEQAMAFAPAPIghAjQgHgHgJgEQgKgFgMAAQgJAAgGAFQgFADAAAIQAAAFAEAEQADADAIAEIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAFgVABQgRAAgPgEg");
	this.shape_5.setTransform(77.2,123.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAvBwIgLgaIhLAAIgLAaIg5AAIBqjdQABgEACAEIBqDdgAASArIgTgtIgUAtIAnAAg");
	this.shape_6.setTransform(57.6,122.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_7.setTransform(37.9,123.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgDQAIgFAAgJQAAgHgGgEQgEgEgMgEIgYgIQgNgEgJgGQgKgGgHgGQgIgIgDgKQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgDAOAAQAOAAAMABQALADAKAEQAMAFAPAPIghAjQgHgHgJgEQgKgFgMAAQgJAAgGAFQgFADAAAIQAAAFAEAEQADADAIAEIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAFgVABQgRAAgPgEg");
	this.shape_8.setTransform(18.8,123.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_9.setTransform(154.3,92.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_10.setTransform(136.5,92.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_11.setTransform(118.4,92.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AA2BwIg2h0Ig1B0QgBAEgCgEIhbjbIA8AAIApBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABAAABIAyBqIAmhmIA7AAIhaDbIgDACIgCgCg");
	this.shape_12.setTransform(93.7,92);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_13.setTransform(62.2,92.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_14.setTransform(42.6,92.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AAvBwIgLgaIhLAAIgLAaIg4AAIBpjdQABgEACAEIBqDdgAASArIgUgtIgTAtIAnAAg");
	this.shape_15.setTransform(20.9,91.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgcBsQgOgEgMgGQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgEQAIgEAAgJQAAgGgGgFQgEgDgMgFIgYgIQgNgEgJgGQgKgGgHgGQgIgJgDgJQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgEAOABQAOgBAMACQALADAKAEQAMAGAPAOIghAjQgHgIgJgDQgKgFgMAAQgJAAgGAFQgFADAAAHQAAAGAEAEQADAEAIADIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAGgVAAQgRgBgPgDg");
	this.shape_16.setTransform(164.3,61.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_17.setTransform(145.7,61.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_18.setTransform(126.1,61.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AAmBtIAAhVIhLAAIAABVIg6AAIAAjZIA6AAIAABUIBLAAIAAhUIA6AAIAADZg");
	this.shape_19.setTransform(104.9,61.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgNBuQgLgDgKgEQgKgEgJgFQgJgHgIgHQgIgHgGgJQgGgJgEgKQgFgKgCgLQgCgMAAgMQAAgMACgLQACgLAFgLQAEgJAGgKQAGgIAHgIQAIgHAJgGQAJgFAJgEQAKgEALgDQALgCAKABQAQAAAPADQAOADAMAGQALAGAKAJQAIAJAHAKIgsAeQgHgMgJgGQgHgEgIgCQgIgCgJAAQgLAAgKAEQgKAFgGAJQgHAHgDAMQgEALAAAMQAAAMAEAMQADALAHAIQAHAIAKAFQAKAFALAAQAKAAAJgCQAHgCAHgFQAKgHAJgOIAtAcQgJAOgJAKQgLAJgLAHQgMAGgOADQgOAEgRAAQgKAAgLgCg");
	this.shape_20.setTransform(82.6,61.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_21.setTransform(61.9,61.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AglBpQgVgJgJgHQgGgGgFgHQgFgGgDgJQgEgIgCgJQgCgKABgLIAAiEIA6AAIAACDQAAAKACAHQACAHAFAFQAEAFAHADQAHACAIAAQAJAAAHgCQAHgDAFgFQAEgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgBAKQgCAJgEAIQgDAJgFAGQgFAHgHAGIgNAJIgQAHQgRAFgVAAQgTAAgSgFg");
	this.shape_22.setTransform(41.4,61.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AhWBtIAAjZIBdAAQAQAAANAEQAOADAJAIQAJAHAFAKQAFALAAAOQAAAJgCAIQgCAHgEAGQgIALgOAFQAIADAHACQAHAFAFAFQAGAHADAIQADAKAAALQAAAPgFALQgFAMgLAIQgLAIgPAFQgQAEgUAAgAgeA/IAiAAQANAAAHgGQAFgGAAgLQAAgLgGgFQgGgGgNAAIgiAAgAgegXIAeAAQALAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgLAAIgeAAg");
	this.shape_23.setTransform(20.6,61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_24.setTransform(157.3,30.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgEgIgBgJQgDgKAAgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAFgFQAEgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgDAIQgEAJgFAGQgFAHgHAGIgNAJIgQAHQgSAFgUAAQgTAAgRgFg");
	this.shape_25.setTransform(135.3,30.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGIgRgNQgIgIgGgIQgHgJgEgKQgFgLgCgKQgDgMAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgIQAIgHAJgFQAKgGAKgFQALgEALgBQALgCALAAQALAAAMACQALABALAEQAKAFAJAGQAKAFAIAHQAIAIAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDAMQgCAKgFALQgEAKgHAJQgGAIgIAIQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAIQgIAJgEAKQgDAMAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgMQgEgKgHgJQgHgIgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_26.setTransform(111.7,30.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_27.setTransform(79.8,30.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBPAAIAAAtIhPAAIAAAmIBiAAIAAAxg");
	this.shape_28.setTransform(59.4,30.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgBBtIhnjbIA+AAIAsBmIArhmIA8AAIhoDbIgBACIgBgCg");
	this.shape_29.setTransform(39.1,30.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_30.setTransform(19.8,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(8,14,178.3,129), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqDVQIpUsxICW9uIXlAAIM0UxIvoVug");
	mask.setTransform(161,235.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(37,99.1,248.1,272), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An9JEIAAyHIGGAAIAAEEIDbAAIAAHVIGaAAIAAGug");
	mask.setTransform(50.1,345.1);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(0,287.1,101.1,112.9), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj+INIgtifQhIgahDg7QgSgQgWghIgfgCIAAryIP7AAIAAQZg");
	mask.setTransform(169.1,55.6);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-70,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(118.1,3.1,102,105), null);


// stage content:
(lib._300x600_longos_meat_guelph = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(76).to({_off:false},0).wait(1).to({regX:102,regY:75.9,x:77.7,y:146.9,alpha:0.066},0).wait(1).to({x:81.1,alpha:0.15},0).wait(1).to({x:85.2,alpha:0.254},0).wait(1).to({x:89.8,alpha:0.369},0).wait(1).to({x:94.5,alpha:0.485},0).wait(1).to({x:98.7,alpha:0.591},0).wait(1).to({x:102.2,alpha:0.68},0).wait(1).to({x:105.2,alpha:0.754},0).wait(1).to({x:107.6,alpha:0.814},0).wait(1).to({x:109.5,alpha:0.862},0).wait(1).to({x:111,alpha:0.901},0).wait(1).to({x:112.2,alpha:0.931},0).wait(1).to({x:113.2,alpha:0.955},0).wait(1).to({x:113.9,alpha:0.972},0).wait(1).to({x:114.4,alpha:0.985},0).wait(1).to({x:114.7,alpha:0.994},0).wait(1).to({x:114.9,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:96.5,regY:76.6,x:62.5,y:147.4,alpha:0.059},0).wait(1).to({x:66.7,alpha:0.143},0).wait(1).to({x:73.3,alpha:0.276},0).wait(1).to({x:82.8,alpha:0.466},0).wait(1).to({x:90.8,alpha:0.625},0).wait(1).to({x:95.8,alpha:0.725},0).wait(1).to({x:99.2,alpha:0.793},0).wait(1).to({x:101.6,alpha:0.842},0).wait(1).to({x:103.5,alpha:0.879},0).wait(1).to({x:104.9,alpha:0.908},0).wait(1).to({x:106,alpha:0.93},0).wait(1).to({x:106.9,alpha:0.948},0).wait(1).to({x:107.6,alpha:0.963},0).wait(1).to({x:108.2,alpha:0.974},0).wait(1).to({x:108.6,alpha:0.983},0).wait(1).to({x:109,alpha:0.99},0).wait(1).to({x:109.2,alpha:0.994},0).wait(1).to({x:109.4,alpha:0.998},0).wait(1).to({x:109.5,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(31).to({regX:96.5,regY:76.6,x:109.6,y:147.4,alpha:0.997},0).wait(1).to({x:110,alpha:0.988},0).wait(1).to({x:110.7,alpha:0.97},0).wait(1).to({x:111.9,alpha:0.939},0).wait(1).to({x:114,alpha:0.887},0).wait(1).to({x:117.6,alpha:0.798},0).wait(1).to({x:124,alpha:0.637},0).wait(1).to({x:132.2,alpha:0.432},0).wait(1).to({x:137.9,alpha:0.289},0).wait(1).to({x:141.5,alpha:0.199},0).wait(1).to({x:144,alpha:0.138},0).wait(1).to({x:145.7,alpha:0.095},0).wait(1).to({x:146.9,alpha:0.064},0).wait(1).to({x:147.9,alpha:0.041},0).wait(1).to({x:148.5,alpha:0.024},0).wait(1).to({x:149,alpha:0.013},0).wait(1).to({x:149.3,alpha:0.005},0).wait(1).to({x:149.4,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// meaty
	this.instance_3 = new lib.saltcopy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(390.5,545.6,1,1,0,0,0,135.5,147.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:161,regY:235.1,x:401.2,y:621.3},0).wait(1).to({x:379.8,y:604.4},0).wait(1).to({x:346.5,y:578},0).wait(1).to({x:298.6,y:539.9},0).wait(1).to({x:258.5,y:508.1},0).wait(1).to({x:233.2,y:488},0).wait(1).to({x:216.1,y:474.5},0).wait(1).to({x:203.8,y:464.7},0).wait(1).to({x:194.5,y:457.3},0).wait(1).to({x:187.2,y:451.5},0).wait(1).to({x:181.5,y:447},0).wait(1).to({x:177,y:443.4},0).wait(1).to({x:173.4,y:440.5},0).wait(1).to({x:170.5,y:438.3},0).wait(1).to({x:168.3,y:436.5},0).wait(1).to({x:166.6,y:435.2},0).wait(1).to({x:165.4,y:434.2},0).wait(1).to({x:164.6,y:433.6},0).wait(1).to({x:164.1,y:433.2},0).wait(1).to({regX:135.5,regY:147.6,x:138.5,y:345.6},0).wait(73));

	// salt
	this.instance_4 = new lib.salt();
	this.instance_4.parent = this;
	this.instance_4.setTransform(432,475.1,1,1,0,0,0,177,36.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(1).to({regX:169.1,regY:55.6,x:413.3,y:480.9},0).wait(1).to({x:397.7,y:461.3},0).wait(1).to({x:373.4,y:430.6},0).wait(1).to({x:338.4,y:386.5},0).wait(1).to({x:309.1,y:349.5},0).wait(1).to({x:290.6,y:326.2},0).wait(1).to({x:278.2,y:310.5},0).wait(1).to({x:269.2,y:299.2},0).wait(1).to({x:262.4,y:290.6},0).wait(1).to({x:257.1,y:283.9},0).wait(1).to({x:252.9,y:278.7},0).wait(1).to({x:249.6,y:274.5},0).wait(1).to({x:246.9,y:271.2},0).wait(1).to({x:244.9,y:268.6},0).wait(1).to({x:243.2,y:266.5},0).wait(1).to({x:242,y:265},0).wait(1).to({x:241.1,y:263.9},0).wait(1).to({x:240.5,y:263.1},0).wait(1).to({x:240.2,y:262.7},0).wait(1).to({regX:177,regY:36.1,x:248,y:243.1},0).wait(71));

	// rosemary
	this.instance_5 = new lib.saltcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,320);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(1).to({regX:50.5,regY:343.6,x:332.8,y:656.5},0).wait(1).to({x:307.5,y:646.3},0).wait(1).to({x:267.8,y:630.5},0).wait(1).to({x:210.7,y:607.6},0).wait(1).to({x:163,y:588.5},0).wait(1).to({x:132.9,y:576.5},0).wait(1).to({x:112.6,y:568.4},0).wait(1).to({x:97.9,y:562.5},0).wait(1).to({x:86.8,y:558.1},0).wait(1).to({x:78.2,y:554.6},0).wait(1).to({x:71.4,y:551.9},0).wait(1).to({x:66,y:549.7},0).wait(1).to({x:61.7,y:548},0).wait(1).to({x:58.3,y:546.7},0).wait(1).to({x:55.6,y:545.6},0).wait(1).to({x:53.6,y:544.8},0).wait(1).to({x:52.2,y:544.2},0).wait(1).to({x:51.2,y:543.8},0).wait(1).to({x:50.7,y:543.6},0).wait(1).to({regX:0,regY:0,x:0,y:200},0).wait(75));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_4.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(98));

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
		{src:"images/300x600_longos_meat_guelph_atlas_.png", id:"300x600_longos_meat_guelph_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;