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
p.nominalBounds = new cjs.Rectangle(0,0,300,349);// helper functions:

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


(lib.Symbol1copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgVAXQgFgFgDgFQgCgGAAgHQAAgGACgGQADgFAFgFQAJgIAMAAQANAAAKAIQAEAFADAFQACAGAAAGQAAAHgCAGQgDAFgEAFQgKAIgNAAQgMAAgJgIg");
	this.shape.setTransform(217.3,162.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg5AAIBpjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_1.setTransform(202.1,153.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("AhbBtQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBABAAIBfilIhPAAIAAgxICoAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIhfClIBXAAIAAAxg");
	this.shape_2.setTransform(181.2,154.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AhbBtQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBABAAIBfilIhPAAIAAgxICoAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBABIhfClIBXAAIAAAxg");
	this.shape_3.setTransform(161.6,154.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_4.setTransform(147,154.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AhWBtIAAjZIBXAAQAOAAAXAGQAPAGAMAKQAKALAGAOQAGAPAAAQQAAARgGANQgGAOgKALQgMAKgPAGQgXAFgOAAIgdAAIAAA/gAgcgBIAbAAQAOAAAIgIQAHgHABgOQgBgNgHgIQgIgIgOAAIgbAAg");
	this.shape_5.setTransform(132.7,154.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AhgBtIAAjZIBUAAQALAAALACQAKACALAEQAJADAKAGQAIAFAIAHQAHAHAGAJQAGAJADAKQAFAKACALQACAMAAALQAAANgCALQgCALgFAKQgDAKgGAJQgGAJgHAHQgIAHgIAFQgKAGgJADQgLAEgKACQgLACgLAAgAgmA8IATAAQANAAALgFQAKgEAHgIQAIgIADgKQAFgMAAgNQAAgMgFgMQgDgKgIgIQgHgIgKgEQgLgFgNAAIgTAAg");
	this.shape_6.setTransform(104,154.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBPAAIAAAtIhPAAIAAAmIBiAAIAAAxg");
	this.shape_7.setTransform(83.6,154.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AAeBtIgzhPIgSAWIAAA5Ig7AAIAAjZIA7AAIAABaIBChaIA/AAIhJBfIBRB6g");
	this.shape_8.setTransform(63.8,154.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg6AAIBqjdQABgEACAEIBpDdgAARArIgSgtIgUAtIAmAAg");
	this.shape_9.setTransform(41.2,153.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("AhWBtIAAjZIBdAAQAQAAANAEQAOADAJAIQAJAHAFAKQAFALAAAOQAAAJgCAIQgCAHgEAGQgIALgOAFQAIADAHACQAHAFAFAFQAGAHADAIQADAKAAALQAAAPgFALQgFAMgLAIQgLAIgPAFQgQAEgUAAgAgeA/IAiAAQANAAAHgGQAFgGAAgLQAAgLgGgFQgGgGgNAAIgiAAgAgegXIAeAAQALAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgLAAIgeAAg");
	this.shape_10.setTransform(20.6,154.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_11.setTransform(197.8,123.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_12.setTransform(177.4,123.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AgBBtIhnjbIA+AAIAsBmIArhmIA8AAIhoDbIgBACIgBgCg");
	this.shape_13.setTransform(157.1,123.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AgWBtQgLgBgLgFQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgLADgMQACgLAFgLQAEgKAHgJQAGgIAIgIQAIgHAJgFQAKgHAKgDQALgFALgCQALgBALAAQALAAAMABQALACALAFQAKADAJAHQAKAFAIAHQAIAIAGAIQAHAJAEAKQAFALACALQADAMAAALQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAFgLABQgMADgLAAQgLAAgLgDgAgXg4QgLAFgHAIQgIAJgEALQgDALAAAMQAAANADALQAEALAIAIQAHAJALAEQAKAFANAAQANAAALgFQALgEAHgJQAHgIAEgLQAEgLAAgNQAAgMgEgLQgEgLgHgJQgHgIgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_14.setTransform(134,123.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIheAAIAAAkIBOAAIAAAtIhOAAIAAAmIBiAAIAAAxg");
	this.shape_15.setTransform(105.1,123.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_16.setTransform(83.6,123.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E2231A").s().p("AgWBtQgLgBgLgFQgKgEgKgFIgRgOQgIgHgGgJQgHgJgEgKQgFgKgCgLQgDgMAAgMQAAgLADgMQACgLAFgLQAEgKAHgJQAGgIAIgIQAIgHAJgFQAKgHAKgDQALgFALgCQALgBALAAQALAAAMABQALACALAFQAKADAJAHQAKAFAIAHQAIAIAGAIQAHAJAEAKQAFALACALQADAMAAALQAAAMgDAMQgCALgFAKQgEAKgHAJQgGAJgIAHQgIAHgKAHQgJAFgKAEQgLAFgLABQgMADgLAAQgLAAgLgDgAgXg4QgLAFgHAIQgIAJgEALQgDALAAAMQAAANADALQAEALAIAIQAHAJALAEQAKAFANAAQANAAALgFQALgEAHgJQAHgIAEgLQAEgLAAgNQAAgMgEgLQgEgLgHgJQgHgIgLgFQgLgEgNAAQgNAAgKAEg");
	this.shape_17.setTransform(59.5,123.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_18.setTransform(37.6,123.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgDQAIgFAAgJQAAgHgGgEQgEgEgMgEIgYgIQgNgEgJgGQgKgGgHgGQgIgIgDgKQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgDAOAAQAOAAAMABQALADAKAEQAMAFAPAPIghAjQgHgHgJgEQgKgFgMAAQgJAAgGAFQgFADAAAIQAAAFAEAEQADADAIAEIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAFgVABQgRAAgPgEg");
	this.shape_19.setTransform(18.8,123.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2231A").s().p("AhJBtIAAjZICTAAIAAAxIhZAAIAAAsIBOAAIAAAwIhOAAIAABMg");
	this.shape_20.setTransform(138.3,92.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2231A").s().p("AgWBtQgLgCgLgEQgKgEgKgGQgJgFgIgIQgIgHgGgJQgHgJgEgKQgFgKgCgMQgDgLAAgMQAAgLADgMQACgLAFgKQAEgLAHgIQAGgJAIgHQAIgIAJgGQAKgFAKgFQALgDALgCQALgCALgBQALABAMACQALACALADQAKAFAJAFQAKAGAIAIQAIAHAGAJQAHAIAEALQAFAKACALQADAMAAALQAAAMgDALQgCAMgFAKQgEAKgHAJQgGAJgIAHQgIAIgKAFQgJAGgKAEQgLAEgLACQgMACgLAAQgLAAgLgCgAgXg3QgLAEgHAJQgIAIgEAKQgDAMAAAMQAAANADAKQAEAMAIAIQAHAIALAFQAKAFANAAQANAAALgFQALgFAHgIQAHgIAEgMQAEgKAAgNQAAgMgEgMQgEgKgHgIQgHgJgLgEQgLgFgNAAQgNAAgKAFg");
	this.shape_21.setTransform(116.5,92.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBPAAIAAAtIhPAAIAAAmIBjAAIAAAxg");
	this.shape_22.setTransform(87.6,92.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2231A").s().p("AgNBtQgKgCgLgEQgKgEgJgGQgJgFgIgIQgIgHgGgJQgHgJgDgKQgFgKgDgMQgBgLAAgMQAAgLABgMQADgLAFgKQADgLAHgIQAGgJAIgHQAHgIAJgGQAJgFAJgFQAKgDALgCQAKgCAKgBQARAAAQAEQAOADAMAHQAKAFAKAKQAIAHAIALIgsAeQgIgMgJgGQgHgEgIgCQgIgCgKAAQgLAAgJAFQgJAEgHAJQgHAIgDAKQgEAMAAAMQAAANAEAKQADAMAHAIQAHAIAKAFQAKAFALAAQAKAAAJgDQAIgCAGgDQALgIAHgPIAtAdQgIAOgKAKQgKAJgLAHQgMAHgOADQgNACgSAAQgKAAgLgCg");
	this.shape_23.setTransform(67.1,92.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_24.setTransform(50.8,92.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_25.setTransform(37.6,92.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgHgRgTIAqggQAJALAJAFQAMAIAOAAQAOAAAGgFQAIgEAAgJQAAgGgGgFQgEgEgMgDIgYgJQgNgEgJgFQgKgHgHgHQgIgHgDgLQgEgKAAgNQAAgRAGgMQAGgMAKgIQAKgJAOgDQANgEAOgBQAOABAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAGQAAAHAEADQADADAIADIAcAKQAQAGAMAGQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEAMgKAJQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_26.setTransform(18.8,92.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_27.setTransform(145,61.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2231A").s().p("AgcBsQgOgEgMgGQgOgHgRgUIAqgfQAJALAJAGQAMAGAOAAQAOAAAGgEQAIgEAAgJQAAgGgGgFQgEgDgMgFIgYgIQgNgEgJgGQgKgGgHgGQgIgJgDgJQgEgMAAgNQAAgQAGgMQAGgMAKgIQAKgIAOgFQANgEAOABQAOgBAMACQALADAKAEQAMAGAPAOIghAjQgHgIgJgDQgKgFgMAAQgJAAgGAFQgFADAAAHQAAAGAEAEQADAEAIADIAcAJQAQAGAMAGQALAHAHAHQAGAIADAKQADAJAAAMQAAAPgFAMQgEANgKAKQgLAIgPAFQgQAGgVAAQgRgBgPgDg");
	this.shape_28.setTransform(126.2,61.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E2231A").s().p("AAvBwIgLgaIhLAAIgLAaIg5AAIBqjdQABgEACAEIBqDdgAASArIgTgtIgUAtIAnAAg");
	this.shape_29.setTransform(106.6,60.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_30.setTransform(87.4,61.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2231A").s().p("AhOBtIAAjZICYAAIAAAxIhdAAIAAAkIBNAAIAAAtIhNAAIAAAmIBiAAIAAAxg");
	this.shape_31.setTransform(61.5,61.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_32.setTransform(40.3,61.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_33.setTransform(19.4,61.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOgBAGgDQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgDQANgEAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAFAMAHQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_34.setTransform(181.9,30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2231A").s().p("AgYAuIAMgiQgJgDgFgHQgFgHAAgJQAAgHADgGQACgFAFgFQAIgIANAAQANAAAJAIQAFAFACAFQADAGAAAHQAAAIgDAHQgDAIgHAIIgTAdg");
	this.shape_35.setTransform(168.8,23.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E2231A").s().p("AgcBtIAAioIg6AAIAAgxICtAAIAAAxIg6AAIAACog");
	this.shape_36.setTransform(155.1,30.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_37.setTransform(140.7,30.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOgBAGgDQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgDQANgEAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAFAMAHQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_38.setTransform(118.7,30.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOgBAGgDQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgDQANgEAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAFAMAHQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_39.setTransform(100.6,30.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2231A").s().p("AhNBtIAAjZICXAAIAAAxIheAAIAAAkIBPAAIAAAtIhPAAIAAAmIBjAAIAAAxg");
	this.shape_40.setTransform(83.1,30.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E2231A").s().p("AhKBtIAAjZIA6AAIAACoIBbAAIAAAxg");
	this.shape_41.setTransform(65,30.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_42.setTransform(43.9,30.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2231A").s().p("AgkBpQgWgJgJgHQgGgGgFgHQgFgGgDgJQgDgIgCgJQgCgKgBgLIAAiEIA7AAIAACDQAAAKACAHQACAHAFAFQAFAFAGADQAHACAIAAQAJAAAHgCQAHgDAFgFQAEgFACgHQACgHAAgKIAAiDIA6AAIAACEQAAALgCAKQgBAJgDAIQgEAJgFAGQgFAHgHAGIgNAJIgQAHQgSAFgUAAQgTAAgRgFg");
	this.shape_43.setTransform(21.1,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(8,14,260.2,160), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2231A").s().p("AgVAXQgFgFgCgFQgDgGAAgHQAAgGADgGQACgFAFgFQAJgIAMAAQANAAAKAIQAEAFACAFQADAGAAAGQAAAHgDAGQgCAFgEAFQgKAIgNAAQgMAAgJgIg");
	this.shape.setTransform(135.1,69.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2231A").s().p("AgLBuQgLgDgLgEQgLgEgJgFQgJgHgIgHQgIgHgHgJQgGgJgFgKQgEgKgCgLQgDgMAAgMQAAgMADgLQACgLAEgLQAFgJAGgKQAGgIAIgIQAIgHAKgGQAJgFAKgEQALgEALgDQALgCALABQAOAAANACQANADALAEQALAFAJAHQAJAIAHAJIgoAjQgJgLgLgGQgNgGgPAAQgMAAgLAEQgKAFgHAJQgHAHgEAMQgDALAAAMQAAANADALQAEALAHAJQAIAIALAGQALAEANAAQAVABAVgJIAAgWIgrAAIAAgsIBfAAIAABdQgWAQgPAGQgMAEgNACQgPACgSABQgLAAgLgCg");
	this.shape_1.setTransform(119.1,61.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_2.setTransform(96,61.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_3.setTransform(79.4,61.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_4.setTransform(64.7,61.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgLAaIg4AAIBpjdQABgEACAEIBqDdgAASArIgUgtIgTAtIAnAAg");
	this.shape_5.setTransform(43,60.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2231A").s().p("AgNBuQgKgDgLgEQgKgEgJgFQgJgHgIgHQgIgHgGgJQgGgJgEgKQgFgKgCgLQgCgMAAgMQAAgMACgLQACgLAFgLQAEgJAGgKQAGgIAHgIQAIgHAJgGQAJgFAJgEQALgEAKgDQALgCAKABQAQAAAPADQAOADAMAGQAMAGAIAJQAKAJAGAKIgsAeQgHgMgKgGQgGgEgHgCQgJgCgJAAQgLAAgKAEQgKAFgGAJQgHAHgDAMQgEALAAAMQAAAMAEAMQADALAHAIQAHAIAKAFQAKAFALAAQALAAAIgCQAHgCAHgFQAKgHAJgOIAtAcQgJAOgJAKQgKAJgMAHQgMAGgOADQgOAEgRAAQgKAAgLgCg");
	this.shape_6.setTransform(21.3,61.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOgBAGgDQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgDQANgEAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAFAMAHQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_7.setTransform(176.1,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_8.setTransform(162.4,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2231A").s().p("AgLBtQgLgCgLgEQgLgEgJgGQgJgFgIgIQgIgIgHgIQgGgJgFgKQgEgLgCgKQgDgMAAgMQAAgLADgMQACgLAEgKQAFgLAGgIQAGgJAIgIQAIgHAKgFQAJgGAKgFQALgEALgBQALgCALAAQAOAAANACQANADALAFQALAEAJAHQAJAIAHAJIgoAkQgJgMgLgFQgNgHgPAAQgMAAgLAFQgKAEgHAIQgHAJgEAKQgDAMAAAMQAAAMADAMQAEAMAHAIQAIAJALAEQALAGANAAQAVAAAVgJIAAgWIgrAAIAAgrIBfAAIAABcQgWAQgPAFQgMAFgNACQgPACgSAAQgLAAgLgCg");
	this.shape_9.setTransform(138.2,30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2231A").s().p("ABeBxIiIhxIAABtIg3AAIAAjcQAAgEAFAEICHBvIAAhsIA3AAIAADcQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_10.setTransform(115.1,30.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2231A").s().p("AgcBtIAAjZIA5AAIAADZg");
	this.shape_11.setTransform(98.5,30.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E2231A").s().p("AAbBtIgmhEIgUAAIAABEIg6AAIAAjZIBYAAQANAAAXAGQAQAGALAKQALAKAGAPQAFAOAAAQQAAALgCAKQgDAJgFAHQgFAIgHAHQgIAGgJAFIAtBNgAgfgDIAbAAQAOAAAIgHQAIgHAAgOQAAgNgIgHQgIgIgOAAIgbAAg");
	this.shape_12.setTransform(83.7,30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2231A").s().p("AAwBwIgMgaIhLAAIgKAaIg6AAIBqjdQABgEACAEIBpDdgAARArIgTgtIgTAtIAmAAg");
	this.shape_13.setTransform(62,29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2231A").s().p("AAlBtIAAhVIhKAAIAABVIg6AAIAAjZIA6AAIAABUIBKAAIAAhUIA7AAIAADZg");
	this.shape_14.setTransform(39.7,30.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2231A").s().p("AgcBsQgOgDgMgHQgOgIgRgSIAqggQAJALAJAFQAMAIAOAAQAOgBAGgDQAIgFAAgJQAAgGgGgFQgEgEgMgEIgYgIQgNgEgJgGQgKgFgHgIQgIgHgDgLQgEgKAAgNQAAgQAGgNQAGgMAKgIQAKgJAOgDQANgEAOAAQAOAAAMACQALACAKAEQAMAFAPAPIghAjQgHgHgJgFQgKgDgMAAQgJAAgGADQgFAFAAAHQAAAGAEADQADADAIADIAcAKQAQAFAMAHQALAHAHAHQAGAIADAJQADAKAAAMQAAAPgFANQgEANgKAIQgLAJgPAGQgQAEgVAAQgRABgPgEg");
	this.shape_15.setTransform(18.8,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(8,14,179.7,67), null);


(lib.saltcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6fa7MAAAg11MA0/AAAMAAAA11g");
	mask.setTransform(169.6,172.3);

	// Layer 1
	this.instance = new lib.bb_meat();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.saltcopy, new cjs.Rectangle(0,0,300,344.6), null);


// stage content:
(lib._300x600_longos_kitch = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(211));

	// Layer 2
	this.instance = new lib.Symbol1copy();
	this.instance.parent = this;
	this.instance.setTransform(32.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:115.3,regY:92,x:89.3,y:162.8,alpha:0.069},0).wait(1).to({x:93,alpha:0.157},0).wait(1).to({x:97.4,alpha:0.262},0).wait(1).to({x:102.2,alpha:0.376},0).wait(1).to({x:106.9,alpha:0.489},0).wait(1).to({x:111.1,alpha:0.59},0).wait(1).to({x:114.8,alpha:0.678},0).wait(1).to({x:117.8,alpha:0.751},0).wait(1).to({x:120.3,alpha:0.81},0).wait(1).to({x:122.4,alpha:0.859},0).wait(1).to({x:124,alpha:0.898},0).wait(1).to({x:125.3,alpha:0.929},0).wait(1).to({x:126.3,alpha:0.953},0).wait(1).to({x:127.1,alpha:0.971},0).wait(1).to({x:127.7,alpha:0.985},0).wait(1).to({x:128,alpha:0.993},0).wait(1).to({x:128.2,alpha:0.998},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(72).to({regX:115.3,regY:92,x:128.4,y:162.8,alpha:0.997},0).wait(1).to({x:128.8,alpha:0.987},0).wait(1).to({x:129.6,alpha:0.968},0).wait(1).to({x:130.9,alpha:0.937},0).wait(1).to({x:133,alpha:0.889},0).wait(1).to({x:136,alpha:0.816},0).wait(1).to({x:140.6,alpha:0.707},0).wait(1).to({x:146.9,alpha:0.557},0).wait(1).to({x:153.6,alpha:0.398},0).wait(1).to({x:158.9,alpha:0.272},0).wait(1).to({x:162.7,alpha:0.182},0).wait(1).to({x:165.3,alpha:0.119},0).wait(1).to({x:167.2,alpha:0.074},0).wait(1).to({x:168.5,alpha:0.044},0).wait(1).to({x:169.4,alpha:0.023},0).wait(1).to({x:169.9,alpha:0.009},0).wait(1).to({x:170.2,alpha:0.002},0).wait(1).to({regX:61.9,regY:44.5,x:116.9,y:115.3,alpha:0},0).wait(12));

	// Layer 8
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.1,105,1,1,0,0,0,79.1,34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).wait(1).to({regX:123.2,regY:75.7,x:98.9,y:146.7,alpha:0.066},0).wait(1).to({x:102.3,alpha:0.15},0).wait(1).to({x:106.4,alpha:0.254},0).wait(1).to({x:111,alpha:0.369},0).wait(1).to({x:115.7,alpha:0.485},0).wait(1).to({x:119.9,alpha:0.591},0).wait(1).to({x:123.4,alpha:0.68},0).wait(1).to({x:126.4,alpha:0.754},0).wait(1).to({x:128.8,alpha:0.814},0).wait(1).to({x:130.7,alpha:0.862},0).wait(1).to({x:132.2,alpha:0.901},0).wait(1).to({x:133.4,alpha:0.931},0).wait(1).to({x:134.4,alpha:0.955},0).wait(1).to({x:135.1,alpha:0.972},0).wait(1).to({x:135.6,alpha:0.985},0).wait(1).to({x:135.9,alpha:0.994},0).wait(1).to({x:136.1,alpha:0.998},0).wait(1).to({regX:79.1,regY:34,x:92.1,y:105,alpha:1},0).wait(1));

	// text
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.9,115.3,1,1,0,0,0,61.9,44.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:97.4,regY:45.5,x:63.4,y:116.3,alpha:0.059},0).wait(1).to({x:67.6,alpha:0.143},0).wait(1).to({x:74.2,alpha:0.276},0).wait(1).to({x:83.7,alpha:0.466},0).wait(1).to({x:91.7,alpha:0.625},0).wait(1).to({x:96.7,alpha:0.725},0).wait(1).to({x:100.1,alpha:0.793},0).wait(1).to({x:102.5,alpha:0.842},0).wait(1).to({x:104.4,alpha:0.879},0).wait(1).to({x:105.8,alpha:0.908},0).wait(1).to({x:106.9,alpha:0.93},0).wait(1).to({x:107.8,alpha:0.948},0).wait(1).to({x:108.5,alpha:0.963},0).wait(1).to({x:109.1,alpha:0.974},0).wait(1).to({x:109.5,alpha:0.983},0).wait(1).to({x:109.9,alpha:0.99},0).wait(1).to({x:110.1,alpha:0.994},0).wait(1).to({x:110.3,alpha:0.998},0).wait(1).to({x:110.4,alpha:0.999},0).wait(1).to({regX:61.9,regY:44.5,x:74.9,y:115.3,alpha:1},0).wait(47).to({regX:97.4,regY:45.5,x:110.5,y:116.3,alpha:0.997},0).wait(1).to({x:110.9,alpha:0.988},0).wait(1).to({x:111.6,alpha:0.97},0).wait(1).to({x:112.8,alpha:0.939},0).wait(1).to({x:114.9,alpha:0.887},0).wait(1).to({x:118.5,alpha:0.798},0).wait(1).to({x:124.9,alpha:0.637},0).wait(1).to({x:133.1,alpha:0.432},0).wait(1).to({x:138.8,alpha:0.289},0).wait(1).to({x:142.4,alpha:0.199},0).wait(1).to({x:144.9,alpha:0.138},0).wait(1).to({x:146.6,alpha:0.095},0).wait(1).to({x:147.8,alpha:0.064},0).wait(1).to({x:148.8,alpha:0.041},0).wait(1).to({x:149.4,alpha:0.024},0).wait(1).to({x:149.9,alpha:0.013},0).wait(1).to({x:150.2,alpha:0.005},0).wait(1).to({x:150.3,alpha:0.001},0).wait(1).to({regX:61.9,regY:44.5,x:114.9,y:115.3,alpha:0},0).wait(112));

	// rosemary
	this.instance_3 = new lib.saltcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(272,530,1,1,20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:150,regY:172.3,rotation:18.8,x:342.4,y:724.3},0).wait(1).to({rotation:17.1,x:325.6,y:697.1},0).wait(1).to({rotation:14.5,x:299.2,y:654.2},0).wait(1).to({rotation:10.7,x:260.7,y:591.6},0).wait(1).to({rotation:7.5,x:228.2,y:538.6},0).wait(1).to({rotation:5.5,x:207.5,y:504.8},0).wait(1).to({rotation:4.1,x:193.4,y:482},0).wait(1).to({rotation:3.2,x:183.2,y:465.4},0).wait(1).to({rotation:2.4,x:175.5,y:452.8},0).wait(1).to({rotation:1.8,x:169.4,y:443},0).wait(1).to({rotation:1.4,x:164.7,y:435.3},0).wait(1).to({rotation:1,x:160.9,y:429.1},0).wait(1).to({rotation:0.7,x:157.9,y:424.2},0).wait(1).to({rotation:0.5,x:155.5,y:420.3},0).wait(1).to({rotation:0.3,x:153.6,y:417.3},0).wait(1).to({rotation:0.2,x:152.2,y:415},0).wait(1).to({rotation:0.1,x:151.2,y:413.4},0).wait(1).to({rotation:0,x:150.5,y:412.2},0).wait(1).to({x:150.1,y:411.7},0).wait(1).to({regX:0,regY:0,x:0,y:239.2},0).wait(186));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F2EB").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_4.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(211));

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
		{src:"images/bb_meat.jpg", id:"bb_meat"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;