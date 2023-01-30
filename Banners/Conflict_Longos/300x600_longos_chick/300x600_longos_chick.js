(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_longos_chick_atlas_", frames: [[149,247,144,52],[0,0,284,245],[0,247,147,105]]}
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
	this.spriteSheet = ss["300x600_longos_chick_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["300x600_longos_chick_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_salmTxt = function() {
	this.spriteSheet = ss["300x600_longos_chick_atlas_"];
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
	this.instance = new lib.db_salmTxt();
	this.instance.parent = this;
	this.instance.setTransform(2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(2,0,147,105), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgVAXQgFgFgDgFQgCgGAAgHQAAgGACgGQADgFAFgFQAJgIAMAAQANAAAKAIQAEAFADAFQACAGAAAGQAAAHgCAGQgDAFgEAFQgKAIgNAAQgMAAgJgIg");
	this.shape.setTransform(231.6,130.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQALAAALACQALACAKAEQAKADAJAGQAIAFAIAHQAHAHAGAJQAGAJADAKQAFAKACALQACAMAAALQAAANgCALQgCALgFAKQgDAKgGAJQgGAJgHAHQgIAHgIAFQgJAGgKADQgKAEgLACQgLACgLAAgAgmA8IATAAQANAAALgFQAKgEAIgIQAHgIADgKQAEgMABgNQgBgMgEgMQgDgKgHgIQgIgIgKgEQgLgFgNAAIgTAAg");
	this.shape_1.setTransform(216.8,122.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgWBuQgLgDgLgEQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgIQAIgHAJgGQAKgFAKgEQALgEALgDQALgCALABQALgBAMACQALADALAEQAKAEAJAFQAKAGAIAHQAIAIAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAEgLADQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_2.setTransform(192.7,122.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgWBuQgLgDgLgEQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgIQAIgHAJgGQAKgFAKgEQALgEALgDQALgCALABQALgBAMACQALADALAEQAKAEAJAFQAKAGAIAHQAIAIAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAEgLADQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_3.setTransform(167.7,122.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AA3BwIg3h0Ig0B0QgCAEgDgEIhbjbIA9AAIApBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABAAABIAyBqIAmhmIA6AAIhaDbIgCACIgBgCg");
	this.shape_4.setTransform(140.3,122.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_5.setTransform(115.4,122.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBqDdgAASArIgUgtIgTAtIAnAAg");
	this.shape_6.setTransform(93.7,122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_7.setTransform(71.4,122.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_8.setTransform(42.8,122.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_9.setTransform(22.5,122);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQALAAALACQAKACALAEQAJADAKAGQAIAFAIAHQAHAHAGAJQAGAJADAKQAFAKACALQACAMAAALQAAANgCALQgCALgFAKQgDAKgGAJQgGAJgHAHQgIAHgIAFQgKAGgJADQgLAEgKACQgLACgLAAgAgmA8IATAAQANAAALgFQAKgEAHgIQAIgIADgKQAFgMAAgNQAAgMgFgMQgDgKgIgIQgHgIgKgEQgLgFgNAAIgTAAg");
	this.shape_10.setTransform(224.1,91.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(200.8,91.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgLAaIg4AAIBpjdQABgEACAEIBqDdgAASArIgUgtIgTAtIAnAAg");
	this.shape_12.setTransform(178.3,91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_13.setTransform(159.1,91.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOAAAGgEQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgEQANgDAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAGAMAGQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_14.setTransform(140.3,91.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOAAAGgEQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgEQANgDAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAGAMAGQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_15.setTransform(122.1,91.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGQgJgFgIgIQgIgHgGgJQgHgJgEgKQgFgLgCgKQgDgMAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgIQAIgHAJgFQAKgGAKgFQALgEALgBQALgCALAAQALAAAMACQALABALAEQAKAFAJAGQAKAFAIAHQAIAIAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDAMQgCAKgFALQgEAKgHAJQgGAJgIAHQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAIQgIAIgEALQgDAMAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgMQgEgLgHgIQgHgIgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_16.setTransform(100.9,91.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_17.setTransform(78.5,91.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_18.setTransform(48.3,91.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGQgJgFgIgIQgIgHgGgJQgHgJgEgKQgFgLgCgKQgDgMAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgIQAIgHAJgFQAKgGAKgFQALgEALgBQALgCALAAQALAAAMACQALABALAEQAKAFAJAGQAKAFAIAHQAIAIAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDAMQgCAKgFALQgEAKgHAJQgGAJgIAHQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAIQgIAIgEALQgDAMAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgMQgEgLgHgIQgHgIgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_19.setTransform(24.1,91.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_20.setTransform(172.8,60.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_21.setTransform(152.4,60.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AhWBtIAAjZIBXAAQAOAAAXAGQAPAGAMAKQAKALAHAOQAFAPAAAQQAAARgFANQgHAOgKALQgMAKgPAGQgXAFgOAAIgdAAIAAA/gAgcgBIAbAAQAOAAAIgIQAHgHABgOQgBgNgHgIQgIgIgOAAIgbAAg");
	this.shape_22.setTransform(133.2,60.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgWBuQgLgCgLgFQgKgEgKgFIgRgOQgIgIgGgIQgHgJgEgKQgFgLgCgLQgDgLAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgHQAIgIAJgGQAKgFAKgEQALgFALgCQALgCALAAQALAAAMACQALACALAFQAKAEAJAFQAKAGAIAIQAIAHAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDALQgCALgFALQgEAKgHAJQgGAIgIAIQgIAHgKAHQgJAFgKAEQgLAFgLACQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADALQAEAMAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgMQAEgLAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_23.setTransform(110.1,60.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AA2BwIg2h0Ig1B0QgCAEgBgEIhbjbIA9AAIAoBmIAuhqQAAgBAAgBQABAAAAAAQAAAAABAAQAAABABABIAwBqIAnhmIA7AAIhaDbQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAg");
	this.shape_24.setTransform(75,60.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgWBuQgLgCgLgFQgKgEgKgFIgRgOQgIgIgGgIQgHgJgEgKQgFgLgCgLQgDgLAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgHQAIgIAJgGQAKgFAKgEQALgFALgCQALgCALAAQALAAAMACQALACALAFQAKAEAJAFQAKAGAIAIQAIAHAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDALQgCALgFALQgEAKgHAJQgGAIgIAIQgIAHgKAHQgJAFgKAEQgLAFgLACQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADALQAEAMAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgMQAEgLAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_25.setTransform(47.5,60.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_26.setTransform(23.3,60.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AAqBtIgrhKIgsBKIg9AAIBLh0IhAhlIBBAAIAgA3IAhg3IA8AAIg/BiIBLB3g");
	this.shape_27.setTransform(81.7,29.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AAvBwIgLgaIhLAAIgLAaIg5AAIBqjdQABgEACAEIBqDdgAASArIgTgtIgUAtIAnAAg");
	this.shape_28.setTransform(59.8,29);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgWBsQgLgDgJgFQgIgEgHgHQgGgHgEgIIAsgcQAEAHADADQAFAFAHAAQAGAAAEgFQAEgEAAgKIAAiXIA6AAIAACbQAAAPgEANQgFALgJAJQgIAIgNAEQgMAEgQAAQgMAAgLgCg");
	this.shape_29.setTransform(40.4,29.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_30.setTransform(22.5,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(9.6,13.2,228.5,129), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgWAXQgEgFgCgFQgDgGAAgHQAAgGADgGQACgFAEgFQAKgIAMAAQANAAAJAIQAFAFACAFQADAGAAAGQAAAHgDAGQgCAFgFAFQgJAIgNAAQgMAAgKgIg");
	this.shape.setTransform(194.4,131.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgcBtIAAhUIhMiFIBAAAIAqBQIArhQIA8AAIhLCDIAABWg");
	this.shape_1.setTransform(179.7,123.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_2.setTransform(161,123.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_3.setTransform(146.6,123.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AA+BvIgFhdIg3A/QAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIg4g/IgFBdIg5AAIANjbQAAgBAAAAQAAgBABAAQAAAAABABQAAAAABABIBnB0IBnh0QAAgBABAAQAAgBABAAQAAAAAAABQABAAAAABIAMDbg");
	this.shape_4.setTransform(128.5,122.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_5.setTransform(104.4,122.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AhJBtIAAjZICTAAIAAAxIhZAAIAAAsIBOAAIAAAwIhOAAIAABMg");
	this.shape_6.setTransform(85.1,123.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQALAAALACQALACAKAEQAJADAKAGQAIAFAHAHQAIAHAGAJQAGAJADAKQAFAKACALQACAMAAALQAAANgCALQgCALgFAKQgDAKgGAJQgGAJgIAHQgHAHgIAFQgKAGgJADQgKAEgLACQgLACgLAAgAgmA8IATAAQAOAAAKgFQAKgEAIgIQAHgIAEgKQADgMAAgNQAAgMgDgMQgEgKgHgIQgIgIgKgEQgKgFgOAAIgTAAg");
	this.shape_7.setTransform(57.8,123.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_8.setTransform(37.4,123.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AhJBtIAAjZICTAAIAAAxIhZAAIAAAsIBOAAIAAAwIhOAAIAABMg");
	this.shape_9.setTransform(19.3,123.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_10.setTransform(235.2,92.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_11.setTransform(214.8,92.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAeBtIgzhPIgTAWIAAA5Ig5AAIAAjZIA5AAIAABaIBDhaIA/AAIhIBfIBRB6g");
	this.shape_12.setTransform(195,92.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgNBtQgKgCgLgEQgKgEgJgGQgJgFgIgIQgIgHgGgJQgHgJgEgKQgEgKgDgMQgCgLABgMQgBgLACgMQADgLAEgKQAEgLAHgIQAGgJAIgHQAHgIAJgGQAJgFAKgFQAKgDAKgCQAKgCAKgBQARAAAQAEQAOADAMAHQAKAFAKAKQAJAHAHALIgsAeQgIgMgJgGQgHgEgIgCQgIgCgKAAQgLAAgJAFQgJAEgIAJQgGAIgDAKQgEAMAAAMQAAANAEAKQADAMAHAIQAHAIAKAFQAKAFAMAAQAJAAAJgDQAIgCAGgDQAKgIAIgPIAtAdQgIAOgKAKQgKAJgLAHQgLAHgPADQgOACgQAAQgLAAgLgCg");
	this.shape_13.setTransform(172.5,92.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_14.setTransform(156.2,92.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AAmBtIAAhVIhLAAIAABVIg6AAIAAjZIA6AAIAABUIBLAAIAAhUIA6AAIAADZg");
	this.shape_15.setTransform(139.9,92.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgNBtQgKgCgLgEQgKgEgJgGQgJgFgIgIQgIgHgGgJQgGgJgEgKQgFgKgCgMQgCgLAAgMQAAgLACgMQACgLAFgKQAEgLAGgIQAGgJAHgHQAIgIAJgGQAJgFAJgFQALgDAKgCQALgCAKgBQAQAAAPAEQAOADAMAHQAMAFAIAKQAKAHAGALIgsAeQgHgMgKgGQgGgEgHgCQgJgCgJAAQgLAAgKAFQgKAEgGAJQgHAIgDAKQgEAMAAAMQAAANAEAKQADAMAHAIQAHAIAKAFQAKAFALAAQALAAAIgDQAHgCAHgDQAKgIAJgPIAtAdQgJAOgJAKQgKAJgMAHQgMAHgOADQgOACgRAAQgKAAgLgCg");
	this.shape_16.setTransform(117.6,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_17.setTransform(88.8,92.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgDgIgDgJQgCgKAAgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAFgFQAEgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgEAIQgDAJgFAGQgFAHgHAGIgNAJIgQAHQgRAFgVAAQgTAAgRgFg");
	this.shape_18.setTransform(66.8,92.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGIgRgNQgIgHgGgJQgHgJgEgKQgFgKgCgMQgDgLAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgHQAIgIAJgGQAKgFAKgFQALgDALgCQALgCALgBQALABAMACQALACALADQAKAFAJAFQAKAGAIAIQAIAHAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDALQgCAMgFAKQgEAKgHAJQgGAJgIAHQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAJQgIAIgEAKQgDAMAAAMQAAANADAKQAEAMAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgMQAEgKAAgNQAAgMgEgMQgEgKgHgIQgHgJgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_19.setTransform(43.2,92.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AgcBtIAAhUIhMiFIA/AAIArBQIArhQIA8AAIhLCDIAABWg");
	this.shape_20.setTransform(20.4,92.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_21.setTransform(211.8,61.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AgWBuQgLgDgLgEQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgMADgLQACgLAFgLQAEgJAHgKQAGgIAIgIQAIgHAJgGQAKgFAKgEQALgEALgDQALgCALABQALgBAMACQALADALAEQAKAEAJAFQAKAGAIAHQAIAIAGAIQAHAKAEAJQAFALACALQADALAAAMQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAEgLADQgMACgLAAQgLAAgLgCgAgXg4QgLAFgHAJQgIAHgEAMQgDALAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgLQgEgMgHgHQgHgJgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_22.setTransform(188.4,61.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AhJBtIAAjZICTAAIAAAxIhZAAIAAAsIBOAAIAAAwIhOAAIAABMg");
	this.shape_23.setTransform(167.5,61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_24.setTransform(138.9,61.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_25.setTransform(118.5,61.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AAeBtIgzhPIgTAWIAAA5Ig5AAIAAjZIA5AAIAABaIBDhaIA/AAIhIBfIBRB6g");
	this.shape_26.setTransform(98.7,61.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AgNBuQgKgDgLgEQgKgEgJgFQgJgHgIgHQgIgHgGgJQgHgJgEgKQgEgKgDgLQgBgMgBgMQABgMABgLQADgLAEgLQAEgJAHgKQAGgIAIgIQAHgHAJgGQAJgFAKgEQAKgEAKgDQAKgCAKABQARAAAQADQAOADAMAGQAKAGAKAJQAJAJAHAKIgsAeQgIgMgJgGQgHgEgIgCQgIgCgKAAQgLAAgJAEQgJAFgIAJQgGAHgEAMQgDALAAAMQAAAMADAMQAEALAHAIQAHAIAKAFQAKAFAMAAQAJAAAJgCQAIgCAGgFQAKgHAIgOIAtAcQgIAOgKAKQgKAJgLAHQgLAGgPADQgOAEgQAAQgLAAgLgCg");
	this.shape_27.setTransform(76.2,61.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_28.setTransform(59.9,61.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AAmBtIAAhVIhLAAIAABVIg6AAIAAjZIA6AAIAABUIBLAAIAAhUIA6AAIAADZg");
	this.shape_29.setTransform(43.6,61.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AgNBuQgKgDgLgEQgKgEgJgFQgJgHgIgHQgIgHgGgJQgGgJgEgKQgFgKgCgLQgCgMAAgMQAAgMACgLQACgLAFgLQAEgJAGgKQAGgIAHgIQAIgHAJgGQAJgFAJgEQALgEAKgDQALgCAKABQAQAAAPADQAOADAMAGQAMAGAIAJQAKAJAGAKIgsAeQgHgMgKgGQgGgEgHgCQgJgCgJAAQgLAAgKAEQgKAFgGAJQgHAHgDAMQgEALAAAMQAAAMAEAMQADALAHAIQAHAIAKAFQAKAFALAAQALAAAIgCQAHgCAHgFQAKgHAJgOIAtAcQgJAOgJAKQgKAJgMAHQgMAGgOADQgOAEgRAAQgKAAgLgCg");
	this.shape_30.setTransform(21.3,61.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQAMAAAKACQAKACAKAEQALADAIAGQAJAFAHAHQAIAHAGAJQAGAJAEAKQAEAKACALQACAMAAALQAAANgCALQgCALgEAKQgEAKgGAJQgGAJgIAHQgHAHgJAFQgIAGgLADQgKAEgKACQgKACgMAAgAgmA8IAUAAQANAAAJgFQALgEAHgIQAIgIAEgKQADgMAAgNQAAgMgDgMQgEgKgIgIQgHgIgLgEQgJgFgNAAIgUAAg");
	this.shape_31.setTransform(164.1,30.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_32.setTransform(143.8,30.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AhJBtIAAjZICTAAIAAAxIhZAAIAAAsIBOAAIAAAwIhOAAIAABMg");
	this.shape_33.setTransform(125.6,30.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_34.setTransform(97,30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_35.setTransform(80.4,30.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg6AAIBqjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_36.setTransform(64.6,29.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_37.setTransform(43.9,30.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2231A").s().p("AgLBtQgLgCgLgEQgLgEgJgGQgJgFgIgIQgIgIgHgIQgGgJgFgKQgEgLgCgKQgDgMAAgMQAAgLADgMQACgLAEgKQAFgLAGgIQAGgJAIgIQAIgHAKgFQAJgGAKgFQALgEALgBQALgCALAAQAOAAANACQANADALAFQALAEAJAHQAJAIAHAJIgoAkQgJgMgLgFQgNgHgPAAQgMAAgLAFQgKAEgHAIQgHAJgEAKQgDAMAAAMQAAAMADAMQAEAMAHAIQAIAJALAEQALAGANAAQAVAAAVgJIAAgWIgrAAIAAgrIBfAAIAABcQgWAQgPAFQgMAFgNACQgPACgSAAQgLAAgLgCg");
	this.shape_38.setTransform(21.4,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(8,14,241.1,129), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(0,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(0,78,284,245), null);


// stage content:
(lib._300x600_longos_chick = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(109));

	// logo
	this.instance = new lib.bb_logo();
	this.instance.parent = this;
	this.instance.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109));

	// Layer 2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.5,262.5,1,1,0,0,0,66.5,45.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({alpha:1},12).wait(68));

	// Layer 8
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({_off:false},0).wait(1).to({regX:123.2,regY:75.7,x:98.9,y:146.7,alpha:0.066},0).wait(1).to({x:102.3,alpha:0.15},0).wait(1).to({x:106.4,alpha:0.254},0).wait(1).to({x:111,alpha:0.369},0).wait(1).to({x:115.7,alpha:0.485},0).wait(1).to({x:119.9,alpha:0.591},0).wait(1).to({x:123.4,alpha:0.68},0).wait(1).to({x:126.4,alpha:0.754},0).wait(1).to({x:128.8,alpha:0.814},0).wait(1).to({x:130.7,alpha:0.862},0).wait(1).to({x:132.2,alpha:0.901},0).wait(1).to({x:133.4,alpha:0.931},0).wait(1).to({x:134.4,alpha:0.955},0).wait(1).to({x:135.1,alpha:0.972},0).wait(1).to({x:135.6,alpha:0.985},0).wait(1).to({x:135.9,alpha:0.994},0).wait(1).to({x:136.1,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(4));

	// text
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(1).to({regX:127.4,regY:76.4,x:93.4,y:147.2,alpha:0.059},0).wait(1).to({x:97.6,alpha:0.143},0).wait(1).to({x:104.2,alpha:0.276},0).wait(1).to({x:113.7,alpha:0.466},0).wait(1).to({x:121.7,alpha:0.625},0).wait(1).to({x:126.7,alpha:0.725},0).wait(1).to({x:130.1,alpha:0.793},0).wait(1).to({x:132.5,alpha:0.842},0).wait(1).to({x:134.4,alpha:0.879},0).wait(1).to({x:135.8,alpha:0.908},0).wait(1).to({x:136.9,alpha:0.93},0).wait(1).to({x:137.8,alpha:0.948},0).wait(1).to({x:138.5,alpha:0.963},0).wait(1).to({x:139.1,alpha:0.974},0).wait(1).to({x:139.5,alpha:0.983},0).wait(1).to({x:139.9,alpha:0.99},0).wait(1).to({x:140.1,alpha:0.994},0).wait(1).to({x:140.3,alpha:0.998},0).wait(1).to({x:140.4,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(47).to({regX:127.4,regY:76.4,x:140.5,y:147.2,alpha:0.997},0).wait(1).to({x:140.9,alpha:0.988},0).wait(1).to({x:141.6,alpha:0.97},0).wait(1).to({x:142.8,alpha:0.939},0).wait(1).to({x:144.9,alpha:0.887},0).wait(1).to({x:148.5,alpha:0.798},0).wait(1).to({x:154.9,alpha:0.637},0).wait(1).to({x:163.1,alpha:0.432},0).wait(1).to({x:168.8,alpha:0.289},0).wait(1).to({x:172.4,alpha:0.199},0).wait(1).to({x:174.9,alpha:0.138},0).wait(1).to({x:176.6,alpha:0.095},0).wait(1).to({x:177.8,alpha:0.064},0).wait(1).to({x:178.8,alpha:0.041},0).wait(1).to({x:179.4,alpha:0.024},0).wait(1).to({x:179.9,alpha:0.013},0).wait(1).to({x:180.2,alpha:0.005},0).wait(1).to({x:180.3,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(321.5,672.1,1,1,0,0,0,135.5,147.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:142,regY:200.5,x:318.1,y:708.5},0).wait(1).to({x:303.9,y:684.8},0).wait(1).to({x:281.7,y:647.7},0).wait(1).to({x:249.7,y:594.3},0).wait(1).to({x:223,y:549.7},0).wait(1).to({x:206.1,y:521.5},0).wait(1).to({x:194.7,y:502.5},0).wait(1).to({x:186.5,y:488.8},0).wait(1).to({x:180.3,y:478.4},0).wait(1).to({x:175.5,y:470.4},0).wait(1).to({x:171.6,y:464},0).wait(1).to({x:168.6,y:459},0).wait(1).to({x:166.2,y:454.9},0).wait(1).to({x:164.3,y:451.8},0).wait(1).to({x:162.8,y:449.3},0).wait(1).to({x:161.7,y:447.4},0).wait(1).to({x:160.9,y:446.1},0).wait(1).to({x:160.4,y:445.2},0).wait(1).to({x:160,y:444.7},0).wait(1).to({regX:135.5,regY:147.6,x:153.5,y:391.6},0).wait(84));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_4.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(109));

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
		{src:"images/300x600_longos_chick_atlas_.png", id:"300x600_longos_chick_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;