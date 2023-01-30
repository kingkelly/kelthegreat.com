(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_longos_salm_atlas_", frames: [[135,335,144,52],[0,0,300,333],[0,335,133,91]]}
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
	this.spriteSheet = ss["300x600_longos_salm_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_meat = function() {
	this.spriteSheet = ss["300x600_longos_salm_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_salmTxt = function() {
	this.spriteSheet = ss["300x600_longos_salm_atlas_"];
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,133,91), null);


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
	this.shape.graphics.f("#E2231A").s().p("AgWAXQgEgFgDgFQgCgGAAgHQAAgGACgGQADgFAEgFQAKgIAMAAQANAAAJAIQAFAFADAFQACAGAAAGQAAAHgCAGQgDAFgFAFQgJAIgNAAQgMAAgKgIg");
	this.shape.setTransform(145.4,131.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_1.setTransform(131.6,123.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgDgIgCgJQgCgKgBgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAEgFQAFgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgDAIQgEAJgFAGQgFAHgHAGIgNAJIgQAHQgSAFgUAAQgTAAgRgFg");
	this.shape_2.setTransform(111.1,123.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgNBtQgKgBgLgFQgKgEgJgFQgJgHgIgHQgIgHgGgJQgGgJgEgKQgFgKgCgLQgCgMAAgMQAAgLACgMQACgLAFgLQAEgKAGgJQAGgIAHgIQAIgHAJgFQAJgHAJgDQALgFAKgCQALgBAKAAQAQAAAPADQAOADAMAGQAMAGAIAKQAKAIAGAKIgsAeQgHgMgKgGQgGgEgHgCQgJgCgJAAQgLAAgKAEQgKAFgGAIQgHAJgDALQgEALAAAMQAAANAEALQADALAHAIQAHAJAKAEQAKAFALAAQALAAAIgCQAHgDAHgEQAKgHAJgOIAtAdQgJANgJAKQgKAJgMAHQgMAGgOADQgOAEgRAAQgKAAgLgDg");
	this.shape_3.setTransform(89.3,123.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_4.setTransform(61.5,123.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_5.setTransform(40.3,123.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_6.setTransform(19.4,123.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_7.setTransform(178.7,92.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AAeBtIgzhPIgSAWIAAA5Ig6AAIAAjZIA6AAIAABaIBChaIA/AAIhJBfIBRB6g");
	this.shape_8.setTransform(158.9,92.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg6AAIBqjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_9.setTransform(136.3,91.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AA+BvIgFhdIg3A/QAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAIg4g/IgFBdIg5AAIANjbQAAgBAAAAQAAgBABAAQAAAAABABQAAAAABABIBnB0IBnh0QAAgBABAAQAAgBABAAQAAAAAAABQABAAAAABIAMDbg");
	this.shape_10.setTransform(112.1,91.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgTIAqggQAJALAJAFQAMAIAOAAQAOAAAGgFQAIgEAAgJQAAgGgGgFQgEgEgMgDIgYgJQgNgEgJgFQgKgHgHgHQgIgHgDgLQgEgKAAgNQAAgRAGgMQAGgMAKgIQAKgJAOgDQANgEAOgBQAOABAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAGQAAAHAEADQADADAIADIAcAKQAQAGAMAGQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEAMgKAJQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_11.setTransform(81.8,92.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_12.setTransform(63.7,92.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgDgIgCgJQgCgKgBgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAEgFQAFgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgDAIQgEAJgFAGQgFAHgHAGIgNAJIgQAHQgSAFgUAAQgTAAgRgFg");
	this.shape_13.setTransform(43.2,92.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgNBtQgKgCgLgEQgKgEgJgGQgJgFgIgIQgIgHgGgJQgGgJgEgKQgFgKgCgMQgCgLAAgMQAAgLACgMQACgLAFgKQAEgLAGgIQAGgJAHgHQAIgIAJgGQAJgFAJgFQALgDAKgCQALgCAKgBQAQAAAPAEQAOADAMAHQAMAFAIAKQAKAHAGALIgsAeQgHgMgKgGQgGgEgHgCQgJgCgJAAQgLAAgKAFQgKAEgGAJQgHAIgDAKQgEAMAAAMQAAANAEAKQADAMAHAIQAHAIAKAFQAKAFALAAQALAAAIgDQAHgCAHgDQAKgIAJgPIAtAdQgJAOgJAKQgKAJgMAHQgMAHgOADQgOACgRAAQgKAAgLgCg");
	this.shape_14.setTransform(21.3,92.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_15.setTransform(154,61.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("AgcBsQgOgEgMgGQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgEQAIgEAAgJQAAgGgGgFQgEgDgMgFIgYgIQgNgEgJgGQgKgGgHgGQgIgJgDgJQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgEAOABQAOgBAMACQALADAKAEQAMAGAPAOIghAjQgHgIgJgDQgKgFgMAAQgJAAgGAFQgFADAAAHQAAAGAEAEQADAEAIADIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAGgVAAQgRgBgPgDg");
	this.shape_16.setTransform(135.2,61.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIhdAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_17.setTransform(117.7,61.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AAmBtIAAhVIhLAAIAABVIg6AAIAAjZIA6AAIAABUIBLAAIAAhUIA6AAIAADZg");
	this.shape_18.setTransform(96.5,61.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgcBsQgOgEgMgGQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgEQAIgEAAgJQAAgGgGgFQgEgDgMgFIgYgIQgNgEgJgGQgKgGgHgGQgIgJgDgJQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgEAOABQAOgBAMACQALADAKAEQAMAGAPAOIghAjQgHgIgJgDQgKgFgMAAQgJAAgGAFQgFADAAAHQAAAGAEAEQADAEAIADIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAGgVAAQgRgBgPgDg");
	this.shape_19.setTransform(75.6,61.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_20.setTransform(58.1,61.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_21.setTransform(38.5,61.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AhJBtIAAjZICTAAIAAAxIhZAAIAAAsIBOAAIAAAwIhOAAIAABMg");
	this.shape_22.setTransform(19.3,61.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_23.setTransform(156,30.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_24.setTransform(134.8,30.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_25.setTransform(113.9,30.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgbBtIAAhUIhOiFIBAAAIAqBQIAshQIA9AAIhNCDIAABWg");
	this.shape_26.setTransform(86.5,30.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_27.setTransform(67.8,30.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_28.setTransform(46.7,30.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGIgRgNQgIgIgGgIQgHgJgEgKQgFgLgCgKQgDgMAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgIQAIgHAJgFQAKgGAKgFQALgEALgBQALgCALAAQALAAAMACQALABALAEQAKAFAJAGQAKAFAIAHQAIAIAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDAMQgCAKgFALQgEAKgHAJQgGAIgIAIQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAIQgIAJgEAKQgDAMAAAMQAAAMADAMQAEALAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgLQAEgMAAgMQAAgMgEgMQgEgKgHgJQgHgIgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_29.setTransform(22.5,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(8,14,181.6,129), null);


(lib.saltcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3naXQgDgFgyj9Qgxj8gDgGQgDgFHGn+QHGn+gDgGQgDgFJ8uMQJ7uNgDgFIISAsQHEAkApgEQgZA8AgYZQARMxATMtQgDgF4ZAdQ0gAYjTAAQgpAAAAgBg");
	mask.setTransform(142.4,213.4);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(0,52);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy2, new cjs.Rectangle(0,52,300,330.3), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmlkVQADADGRBDQGQBDADADQAEAEAOEaQAPEcADADQADAEgsBDQgsBDADADQADAElzFKQlmE+gLAPQAFghgd3Qg");
	mask.setTransform(-37,124.4);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;
	this.instance.setTransform(-70,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(-70,96.6,75.3,152.3), null);


// stage content:
(lib._300x600_longos_salm = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({alpha:1},12).wait(63));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:98.6,regY:76.5,x:64.6,y:147.3,alpha:0.059},0).wait(1).to({x:68.8,alpha:0.143},0).wait(1).to({x:75.4,alpha:0.276},0).wait(1).to({x:84.9,alpha:0.466},0).wait(1).to({x:92.9,alpha:0.625},0).wait(1).to({x:97.9,alpha:0.725},0).wait(1).to({x:101.3,alpha:0.793},0).wait(1).to({x:103.7,alpha:0.842},0).wait(1).to({x:105.6,alpha:0.879},0).wait(1).to({x:107,alpha:0.908},0).wait(1).to({x:108.1,alpha:0.93},0).wait(1).to({x:109,alpha:0.948},0).wait(1).to({x:109.7,alpha:0.963},0).wait(1).to({x:110.3,alpha:0.974},0).wait(1).to({x:110.7,alpha:0.983},0).wait(1).to({x:111.1,alpha:0.99},0).wait(1).to({x:111.3,alpha:0.994},0).wait(1).to({x:111.5,alpha:0.998},0).wait(1).to({x:111.6,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(42).to({regX:98.6,regY:76.5,x:111.7,y:147.3,alpha:0.997},0).wait(1).to({x:112.1,alpha:0.988},0).wait(1).to({x:112.8,alpha:0.97},0).wait(1).to({x:114,alpha:0.939},0).wait(1).to({x:116.1,alpha:0.887},0).wait(1).to({x:119.7,alpha:0.798},0).wait(1).to({x:126.1,alpha:0.637},0).wait(1).to({x:134.3,alpha:0.432},0).wait(1).to({x:140,alpha:0.289},0).wait(1).to({x:143.6,alpha:0.199},0).wait(1).to({x:146.1,alpha:0.138},0).wait(1).to({x:147.8,alpha:0.095},0).wait(1).to({x:149,alpha:0.064},0).wait(1).to({x:150,alpha:0.041},0).wait(1).to({x:150.6,alpha:0.024},0).wait(1).to({x:151.1,alpha:0.013},0).wait(1).to({x:151.4,alpha:0.005},0).wait(1).to({x:151.5,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(15));

	// meaty
	this.instance_4 = new lib.saltcopy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(390.5,499.6,1,1,0,0,0,135.5,147.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({regX:150,regY:217.1,x:390.2,y:560},0).wait(1).to({x:368.8,y:547},0).wait(1).to({x:335.5,y:526.7},0).wait(1).to({x:287.6,y:497.3},0).wait(1).to({x:247.5,y:472.8},0).wait(1).to({x:222.2,y:457.4},0).wait(1).to({x:205.1,y:447},0).wait(1).to({x:192.8,y:439.4},0).wait(1).to({x:183.5,y:433.7},0).wait(1).to({x:176.2,y:429.3},0).wait(1).to({x:170.5,y:425.8},0).wait(1).to({x:166,y:423},0).wait(1).to({x:162.4,y:420.8},0).wait(1).to({x:159.5,y:419.1},0).wait(1).to({x:157.3,y:417.7},0).wait(1).to({x:155.6,y:416.7},0).wait(1).to({x:154.4,y:416},0).wait(1).to({x:153.6,y:415.5},0).wait(1).to({x:153.1,y:415.2},0).wait(1).to({regX:135.5,regY:147.6,x:138.5,y:345.6},0).wait(84));

	// salt
	this.instance_5 = new lib.salt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(156,452.1,1,1,0,0,0,177,36.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).wait(1).to({regX:-32.4,regY:124.4,x:-47.9,y:528},0).wait(1).to({x:-40.1,y:510.4},0).wait(1).to({x:-28,y:482.8},0).wait(1).to({x:-10.5,y:443},0).wait(1).to({x:4.1,y:409.7},0).wait(1).to({x:13.3,y:388.7},0).wait(1).to({x:19.6,y:374.6},0).wait(1).to({x:24.1,y:364.4},0).wait(1).to({x:27.5,y:356.6},0).wait(1).to({x:30.1,y:350.6},0).wait(1).to({x:32.2,y:345.9},0).wait(1).to({x:33.9,y:342.1},0).wait(1).to({x:35.2,y:339.1},0).wait(1).to({x:36.2,y:336.8},0).wait(1).to({x:37,y:334.9},0).wait(1).to({x:37.6,y:333.5},0).wait(1).to({x:38.1,y:332.5},0).wait(1).to({x:38.4,y:331.9},0).wait(1).to({x:38.5,y:331.5},0).wait(1).to({regX:177,regY:36.1,x:248,y:243.1},0).wait(82));

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
		{src:"images/300x600_longos_salm_atlas_.png", id:"300x600_longos_salm_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;