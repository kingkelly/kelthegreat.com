(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_sept_cz_atlas_", frames: [[0,334,97,50],[0,0,428,240],[0,242,435,90]]}
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



(lib.calzooLogo = function() {
	this.spriteSheet = ss["728x90_sept_cz_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_lemur = function() {
	this.spriteSheet = ss["728x90_sept_cz_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lb_pattern = function() {
	this.spriteSheet = ss["728x90_sept_cz_atlas_"];
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


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lb_pattern();
	this.instance.parent = this;
	this.instance.setTransform(-217.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-45,435,90);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lb_pattern();
	this.instance.parent = this;
	this.instance.setTransform(-217.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-45,435,90);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgLA0IAAgYIAXAAIAAAYgAgLASIAAhFIAXAAIAABFg");
	this.shape.setTransform(33.6,-64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AgcA0IAAhnIA5AAIAAAXIgfAAIAAAQIAeAAIAAAXIgeAAIAAASIAfAAIAAAXg");
	this.shape_1.setTransform(27.7,-64.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AAVA0Igng+IABA+IgZAAIAAhnIAWAAIAnA+IAAg+IAYAAIAABng");
	this.shape_2.setTransform(18.6,-64.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("AgMA0IAAhnIAZAAIAABng");
	this.shape_3.setTransform(11,-64.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AgbA0IAAhnIAaAAIAABQIAdAAIAAAXg");
	this.shape_4.setTransform(5.8,-64.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AAVA0Igng+IAAA+IgZAAIAAhnIAXAAIAnA+IgBg+IAZAAIAABng");
	this.shape_5.setTransform(-3.3,-64.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgLA1IgKgEIgJgFIgIgHIgHgHIgEgJIgEgKIgBgKIABgLQABgGADgFIAFgJIAHgIIAIgGQAFgDAEgCIAKgDIAKgBIAMABQAFABAFADIAKAFIAIAGIAGAIIAFAJIACAKIABAKIgBALIgCAKIgFAJIgGAIIgIAGIgKAFIgKAEIgMABIgLgBgAgLgbQgFADgEAEQgEAEgCAGIgBAKQAAAGACAFQACAGADAEQAFAFAEACQAGACAFAAQAHAAAGgCQAEgDAFgFIAEgKQACgFAAgFQAAgEgCgFIgEgKQgFgFgEgDQgGgDgHAAQgGAAgFADg");
	this.shape_6.setTransform(-14.6,-64.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgMA0IAAgmIgfhBIAdAAIAOAqIAQgqIAcAAIgfBBIAAAmg");
	this.shape_7.setTransform(-29.4,-64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgNAzIgIgEIgHgFIgGgHIgDgHQgBgFgBgNIAAg+IAbAAIAAA+QAAAIACAEQABAEADABQADACADAAQAFAAADgBIAEgFQABgEAAgJIAAg+IAbAAIAAA+IgBALIgCAJIgDAGIgEAGQgIAGgFACIgHACIgJABQgHAAgHgCg");
	this.shape_8.setTransform(-38.8,-64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AgmA0IAAhnIAmAAQAHAAAHACQAGACAEADQAFAEACAFQADAFAAAGQAAAHgDAFIgEAFIgGAEQARAFABASQAAAHgDAGQgCAGgFAEIgHAFIgHACIgTACgAgLAdIALAAQAFAAADgCIAEgDQABgCAAgDQAAgEgBgCIgEgCIgIgBIgLAAgAgLgMIAJAAIAGAAIADgDQABgCAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIgDgDIgGgBIgJAAg");
	this.shape_9.setTransform(-47.9,-64.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgNAzIgIgEIgHgFIgGgHIgDgHQgBgFgBgNIAAg+IAbAAIAAA+QAAAIACAEQABAEADABQADACADAAQAFAAADgBIAEgFQABgEAAgJIAAg+IAbAAIAAA+IgBALIgCAJIgDAGIgEAGQgIAGgFACIgHACIgJABQgHAAgHgCg");
	this.shape_10.setTransform(-61.9,-64.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgLA1IgLgEIgJgFIgIgHIgGgHIgFgJIgCgKIgBgKIABgLQAAgGADgFIAFgJIAHgIIAIgGQAEgDAFgCIALgDIAJgBIALABQAGABAFADIAJAFIAIAGIAHAIIAEAJIAEAKIABAKIgBALIgEAKIgEAJIgHAIIgIAGIgJAFIgLAEIgLABIgLgBgAgLgbQgFADgEAEQgDAEgCAGIgCAKQAAAGACAFQACAGADAEQAFAFAEACQAGACAGAAQAGAAAFgCQAFgDAEgFIAGgKQACgFAAgFQAAgEgCgFIgGgKQgEgFgFgDQgFgDgHAAQgGAAgFADg");
	this.shape_11.setTransform(-72.7,-64.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgMA0IAAgmIgfhBIAdAAIAOAqIAQgqIAcAAIgfBBIAAAmg");
	this.shape_12.setTransform(-83.2,-64.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AAVA0Igng+IAAA+IgYAAIAAhnIAWAAIAnA+IgBg+IAZAAIAABng");
	this.shape_13.setTransform(-97.3,-64.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AgcA0IAAhnIA5AAIAAAXIgfAAIAAAQIAeAAIAAAXIgeAAIAAASIAfAAIAAAXg");
	this.shape_14.setTransform(-106.1,-64.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("AARA0IAAgqIghAAIAAAqIgaAAIAAhnIAaAAIAAAnIAhAAIAAgnIAaAAIAABng");
	this.shape_15.setTransform(-115.2,-64.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6B333").s().p("AAQA0IgQhCIgPBCIgYAAIgahnIAaAAIAPBDIAPhDIATAAIAPBDIAOhDIAbAAIgbBng");
	this.shape_16.setTransform(-127.3,-64.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSByIgRgFQgIgDgGgEQgGgEgFgGQgKgJgEgPQgEgOAAgRIA5AAQAAAJACAHQACAGAFADQAGAGAHAAQAJAAAHgHQAFgGAAgJQAAgHgJgGQgGgFgbgLQg2gVAAgqQAAgIABgIIAFgNQAHgMALgKQALgIAOgFQAOgEANAAQANAAAMADQANAEALAHQAMAJAGAMQAEAHACAIQACAJAAAKIg4AAQgDgWgSAAQgGAAgGAFQgGAFAAAIQAAAHAIAFQAGAFAfANQAPAIAKAHQAKAGAGAHQAGAIACAJQADAIAAAKQAAAOgEAMQgEANgJAKQgJAKgPAGQgWAGgPAAg");
	this.shape_17.setTransform(48.8,-89.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYBxQgLgCgLgFQgLgEgJgHQgKgGgIgIQgHgIgHgJQgGgKgEgKQgFgLgCgLQgCgLAAgLQAAgMACgMQACgLAFgLQAFgKAGgJQAGgJAJgIQAIgIAJgGQAKgGAKgEQALgEAMgCQALgCAMAAQANAAAZAGQAMAEAUANQAPALALAOQAKAOAEAQIg/AAQgFgIgHgHQgHgGgJgEQgKgEgKAAQgLAAgKAEQgLAEgJAIQgJAJgFALQgGANAAAQQAAAQAGANQAFAMAJAJQAJAHALAFQAKADALAAQAKAAAJgCQAIgDAHgEQAHgFAFgHQAEgGACgIIhBAAIAAgtICDAAQABAOgCAPQgDATgGAPIgKARIgLAOQgMANgQAIQgOAIgQAEQgPADgOAAQgMAAgMgCg");
	this.shape_18.setTransform(27.4,-89.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAsBvIhUiEIACCEIg3AAIAAjdIAxAAIBUCHIgBiHIA3AAIAADdg");
	this.shape_19.setTransform(3.2,-89.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgbBvIAAjdIA3AAIAADdg");
	this.shape_20.setTransform(-13,-89.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBvIhKjdIA5AAIAtCaIAtiaIA7AAIhLDdg");
	this.shape_21.setTransform(-28.6,-89.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAxBvIgKggIhNAAIgLAgIg9AAIBYjdIAwAAIBVDdgAAYAiIgYhNIgYBNIAwAAg");
	this.shape_22.setTransform(-50.8,-89.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSByIgRgFQgIgDgGgEQgGgEgFgGQgKgJgEgPQgEgOAAgRIA5AAQAAAJACAHQACAGAFADQAGAGAHAAQAJAAAHgHQAFgGAAgJQAAgHgJgGQgGgFgbgLQg2gVAAgqQAAgIABgIIAFgNQAHgMALgKQALgIAOgFQAOgEANAAQANAAAMADQANAEALAHQAMAJAGAMQAEAHACAIQACAJAAAKIg4AAQgDgWgSAAQgGAAgGAFQgGAFAAAIQAAAHAIAFQAGAFAfANQAPAIAKAHQAKAGAGAHQAGAIACAJQADAIAAAKQAAAOgEAMQgEANgJAKQgJAKgPAGQgWAGgPAAg");
	this.shape_23.setTransform(-70.7,-89.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag8BvIAAjdIA5AAIAACrIBAAAIAAAyg");
	this.shape_24.setTransform(-94.9,-89.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8BvIAAjdIA5AAIAACrIBAAAIAAAyg");
	this.shape_25.setTransform(-109.5,-89.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAxBvIgKggIhNAAIgLAgIg9AAIBYjdIAwAAIBVDdgAAYAiIgYhNIgYBNIAwAAg");
	this.shape_26.setTransform(-129.1,-89.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag8BvIAAjdIB5AAIAAAxIhAAAIAAAnIA9AAIAAAwIg9AAIAABVg");
	this.shape_27.setTransform(-147.6,-89.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSB1IgSgEQgIgDgGgFQgHgEgFgGQgKgKgEgPQgFgOABgRIA6AAQAAAJADAHQACAGAEADQAHAGAHAAQAKAAAHgHQAFgGAAgJQAAgIgJgHQgGgDgdgNQg4gWAAgrQAAgIACgIQACgHAEgHQAGgNAMgJQALgJAPgEQAOgFAOAAQANAAAMADQAOAEALAIQAMAIAHANQAEAIACAIQACAJAAAKIg6AAQgDgWgSAAQgHAAgGAEQgGAGAAAIQAAAHAIAFQAHAFAfAOQAQAIALAIQAKAFAGAJQAGAIACAIQADAJAAALQAAAOgEANQgFANgIAKQgKALgPAGQgXAGgPAAg");
	this.shape_28.setTransform(61.7,9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZB0QgMgCgLgEQgLgFgKgHQgJgGgJgIQgIgIgGgKQgHgKgEgKQgFgMgCgLQgCgMAAgLQAAgNACgMQACgMAFgLQAFgKAHgJQAGgKAJgIQAIgIAKgGQAKgGALgFQALgEAMgCQAMgCALAAQAOAAAaAGQAMAFAWANQAPALALAPQAKAPAFAQIhCAAQgFgJgHgGQgHgHgJgEQgLgDgKgBQgLAAgLAEQgMAFgIAIQgKAIgFAMQgGAOAAAQQAAAQAGAOQAFAMAKAJQAJAIALAFQALAEALAAQAKgBAJgCQAJgDAHgEQAHgFAFgHQAFgGACgJIhEAAIAAguICIAAQABAOgDAPQgCAVgHAOIgKATIgLAOQgNAMgQAKQgPAIgQADQgQAEgOAAQgMAAgNgDg");
	this.shape_29.setTransform(39.7,9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAuBzIhXiJIACCJIg5AAIAAjlIAzAAIBXCLIgBiLIA4AAIAADlg");
	this.shape_30.setTransform(14.6,9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_31.setTransform(-2.1,9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeBzIhMjlIA8AAIAuCgIAvigIA8AAIhNDlg");
	this.shape_32.setTransform(-18.2,9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAzBzIgLghIhPAAIgLAhIhAAAIBbjlIAyAAIBYDlgAAZAjIgZhPIgZBPIAyAAg");
	this.shape_33.setTransform(-41.2,9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSB1IgSgEQgIgDgGgFQgHgEgFgGQgKgKgEgPQgFgOABgRIA6AAQAAAJADAHQACAGAEADQAHAGAHAAQAKAAAHgHQAFgGAAgJQAAgIgJgHQgGgDgdgNQg4gWAAgrQAAgIACgIQACgHAEgHQAGgNAMgJQALgJAPgEQAOgFAOAAQANAAAMADQAOAEALAIQAMAIAHANQAEAIACAIQACAJAAAKIg6AAQgDgWgSAAQgHAAgGAEQgGAGAAAIQAAAHAIAFQAHAFAfAOQAQAIALAIQAKAFAGAJQAGAIACAIQADAJAAALQAAAOgEANQgFANgIAKQgKALgPAGQgXAGgPAAg");
	this.shape_34.setTransform(-61.8,9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag+BzIAAjlIA6AAIAACxIBDAAIAAA0g");
	this.shape_35.setTransform(28.1,-17);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag+BzIAAjlIA6AAIAACxIBDAAIAAA0g");
	this.shape_36.setTransform(13.1,-17);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAzBzIgLghIhPAAIgLAhIhAAAIBbjlIAyAAIBYDlgAAZAjIgZhPIgZBPIAyAAg");
	this.shape_37.setTransform(-7.2,-17);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag+BzIAAjlIB9AAIAAA0IhCAAIAAAnIA/AAIAAAyIg/AAIAABYg");
	this.shape_38.setTransform(-26.3,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.3,-102.5,348.4,133);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSB1IgSgEQgIgDgGgFQgHgEgFgGQgKgKgEgPQgFgOABgRIA6AAQAAAJADAHQACAGAEADQAHAGAHAAQAKAAAHgHQAFgGAAgJQAAgIgJgHQgGgDgdgNQg4gWAAgrQAAgIACgIQACgHAEgHQAGgNAMgJQALgJAPgEQAOgFAOAAQANAAAMADQAOAEALAIQAMAIAHANQAEAIACAIQACAJAAAKIg6AAQgDgWgSAAQgHAAgGAEQgGAGAAAIQAAAHAIAFQAHAFAfAOQAQAIALAIQAKAFAGAJQAGAIACAIQADAJAAALQAAAOgEANQgFANgIAKQgKALgPAGQgXAGgPAAg");
	this.shape.setTransform(61.7,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZB0QgMgCgLgEQgLgFgKgHQgJgGgJgIQgIgIgGgKQgHgKgEgKQgFgMgCgLQgCgMAAgLQAAgNACgMQACgMAFgLQAFgKAHgJQAGgKAJgIQAIgIAKgGQAKgGALgFQALgEAMgCQAMgCALAAQAOAAAaAGQAMAFAWANQAPALALAPQAKAPAFAQIhCAAQgFgJgHgGQgHgHgJgEQgLgDgKgBQgLAAgLAEQgMAFgIAIQgKAIgFAMQgGAOAAAQQAAAQAGAOQAFAMAKAJQAJAIALAFQALAEALAAQAKgBAJgCQAJgDAHgEQAHgFAFgHQAFgGACgJIhEAAIAAguICIAAQABAOgDAPQgCAVgHAOIgKATIgLAOQgNAMgQAKQgPAIgQADQgQAEgOAAQgMAAgNgDg");
	this.shape_1.setTransform(39.7,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBzIhXiJIACCJIg5AAIAAjlIAzAAIBXCLIgBiLIA4AAIAADlg");
	this.shape_2.setTransform(14.6,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_3.setTransform(-2.1,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBzIhMjlIA8AAIAuCgIAvigIA8AAIhNDlg");
	this.shape_4.setTransform(-18.2,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBzIgLghIhPAAIgLAhIhAAAIBbjlIAyAAIBYDlgAAZAjIgZhPIgZBPIAyAAg");
	this.shape_5.setTransform(-41.2,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSB1IgSgEQgIgDgGgFQgHgEgFgGQgKgKgEgPQgFgOABgRIA6AAQAAAJADAHQACAGAEADQAHAGAHAAQAKAAAHgHQAFgGAAgJQAAgIgJgHQgGgDgdgNQg4gWAAgrQAAgIACgIQACgHAEgHQAGgNAMgJQALgJAPgEQAOgFAOAAQANAAAMADQAOAEALAIQAMAIAHANQAEAIACAIQACAJAAAKIg6AAQgDgWgSAAQgHAAgGAEQgGAGAAAIQAAAHAIAFQAHAFAfAOQAQAIALAIQAKAFAGAJQAGAIACAIQADAJAAALQAAAOgEANQgFANgIAKQgKALgPAGQgXAGgPAAg");
	this.shape_6.setTransform(-61.8,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BzIAAjlIA6AAIAACxIBDAAIAAA0g");
	this.shape_7.setTransform(28.1,-17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BzIAAjlIA6AAIAACxIBDAAIAAA0g");
	this.shape_8.setTransform(13.1,-17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAzBzIgLghIhPAAIgLAhIhAAAIBbjlIAyAAIBYDlgAAZAjIgZhPIgZBPIAyAAg");
	this.shape_9.setTransform(-7.2,-17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+BzIAAjlIB9AAIAAA0IhCAAIAAAnIA/AAIAAAyIg/AAIAABYg");
	this.shape_10.setTransform(-26.3,-17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-30.5,145.4,61);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape.setTransform(86.2,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWB0QgMgCgMgFQgLgFgJgGQgKgIgIgIQgIgIgGgKQgGgJgEgLQgFgLgCgKQgCgMAAgLQAAgLACgKQACgMAEgKQAEgLAGgJQAGgJAIgJQAIgJAJgGQAKgHALgFQALgFAMgDQANgCANAAQANAAAMACQAMADALAEQAOAGAVARQAKAJANAVQAIAPACAOIg9AAIgHgOQgFgGgGgGQgIgGgIgEQgKgDgLAAQgOgBgMAGQgLAFgIALQgHAJgFAMQgEAMAAAMQAAAMAFANQAEAMAIAJQAIAKALAGQAMAFANABQAlAAASgoIA9AAIgGAUIgJARQgQAVgLAIQgVAOgNAFQgaAGgNAAQgNAAgMgDg");
	this.shape_1.setTransform(64.9,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBzIhXiJIACCJIg5AAIAAjlIAzAAIBXCLIgBiLIA4AAIAADlg");
	this.shape_2.setTransform(40.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape_3.setTransform(20.6,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_4.setTransform(7.1,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBzIg7hvIAJAAIAUgBQAJgCAGgCQAFgEAEgHQAEgIAAgJQAAgJgEgHQgEgHgGgEQgKgGgNAAIgVAAIAACxIg7AAIAAjlIBLAAQARAAAaAFQARAEAKAIQAHAFAFAHQAGAHADAIQAEAIABAJIACASQAAANgDALQgDAKgGAHQgFAJgIAGQgHAGgJADIAvBVg");
	this.shape_5.setTransform(-7.1,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape_6.setTransform(-25.9,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhVBzIAAjlIBLAAQAUAAAZAFQAOAEALAIQAGAGAFAHQAFAGADAIIAGARIACARQgDAXgEALIgIAOQgFAGgFAFQgMALgOAEQgXAFgQAAIgYAAIAABIgAgbgIIAWAAQANAAAIgDQAGgDAEgFQAFgHAAgJQAAgKgFgGQgEgFgGgDQgJgDgPAAIgTAAg");
	this.shape_7.setTransform(-43.5,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAwBzIgxhSIgvBSIhBAAIBQh5IhHhsIBCAAIAnBCIAmhCIBCAAIhGBtIBPB4g");
	this.shape_8.setTransform(-65.9,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape_9.setTransform(-85.5,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguC5IAAiHIhujqIBmAAIA2CVIA4iVIBlAAIhtDqIAACHg");
	this.shape_10.setTransform(54.4,-19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhlC5IAAlxIBeAAIAAEeIBtAAIAABTg");
	this.shape_11.setTransform(27.7,-19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhlC5IAAlxIBfAAIAAEeIBsAAIAABTg");
	this.shape_12.setTransform(3.4,-19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxC1QgQgEgNgIQgPgJgLgLQgMgNgGgLQgIgMgEgNQgFgRgCgwIAAjeIBeAAIAADeQABAdAGAQQAGALAJAHQAKAIAQgBQAQAAALgGQAJgHAEgKQAHgOAAghIAAjeIBeAAIAADeIgDAoQgCARgFAOQgFAMgGALIgQATQgaAXgSAGQgNAGgOACQgPAEgRAAQgaAAgZgIg");
	this.shape_13.setTransform(-27.9,-19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhkC5IAAlxIDJAAIAABTIhqAAIAAA/IBmAAIAABSIhmAAIAACNg");
	this.shape_14.setTransform(-57.1,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.1,-40,192.2,80);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape.setTransform(86.2,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWB0QgMgCgMgFQgLgFgJgGQgKgIgIgIQgIgIgGgKQgGgJgEgLQgFgLgCgKQgCgMAAgLQAAgLACgKQACgMAEgKQAEgLAGgJQAGgJAIgJQAIgJAJgGQAKgHALgFQALgFAMgDQANgCANAAQANAAAMACQAMADALAEQAOAGAVARQAKAJANAVQAIAPACAOIg9AAIgHgOQgFgGgGgGQgIgGgIgEQgKgDgLAAQgOgBgMAGQgLAFgIALQgHAJgFAMQgEAMAAAMQAAAMAFANQAEAMAIAJQAIAKALAGQAMAFANABQAlAAASgoIA9AAIgGAUIgJARQgQAVgLAIQgVAOgNAFQgaAGgNAAQgNAAgMgDg");
	this.shape_1.setTransform(64.9,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBzIhXiJIACCJIg5AAIAAjlIAzAAIBXCLIgBiLIA4AAIAADlg");
	this.shape_2.setTransform(40.1,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape_3.setTransform(20.6,18.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_4.setTransform(7.1,18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBzIg7hvIAJAAIAUgBQAJgCAGgCQAFgEAEgHQAEgIAAgJQAAgJgEgHQgEgHgGgEQgKgGgNAAIgVAAIAACxIg7AAIAAjlIBLAAQARAAAaAFQARAEAKAIQAHAFAFAHQAGAHADAIQAEAIABAJIACASQAAANgDALQgDAKgGAHQgFAJgIAGQgHAGgJADIAvBVg");
	this.shape_5.setTransform(-7.1,18.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape_6.setTransform(-25.9,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhVBzIAAjlIBLAAQAUAAAZAFQAOAEALAIQAGAGAFAHQAFAGADAIIAGARIACARQgDAXgEALIgIAOQgFAGgFAFQgMALgOAEQgXAFgQAAIgYAAIAABIgAgbgIIAWAAQANAAAIgDQAGgDAEgFQAFgHAAgJQAAgKgFgGQgEgFgGgDQgJgDgPAAIgTAAg");
	this.shape_7.setTransform(-43.5,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAwBzIgxhSIgvBSIhBAAIBQh5IhHhsIBCAAIAnBCIAmhCIBCAAIhGBtIBPB4g");
	this.shape_8.setTransform(-65.9,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABzIAAjlICBAAIAAA0IhGAAIAAAjIBEAAIAAAzIhEAAIAAAnIBGAAIAAA0g");
	this.shape_9.setTransform(-85.5,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguC5IAAiHIhujqIBmAAIA2CVIA4iVIBlAAIhtDqIAACHg");
	this.shape_10.setTransform(54.4,-19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhlC5IAAlxIBeAAIAAEeIBtAAIAABTg");
	this.shape_11.setTransform(27.7,-19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhlC5IAAlxIBfAAIAAEeIBsAAIAABTg");
	this.shape_12.setTransform(3.4,-19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxC1QgQgEgNgIQgPgJgLgLQgMgNgGgLQgIgMgEgNQgFgRgCgwIAAjeIBeAAIAADeQABAdAGAQQAGALAJAHQAKAIAQgBQAQAAALgGQAJgHAEgKQAHgOAAghIAAjeIBeAAIAADeIgDAoQgCARgFAOQgFAMgGALIgQATQgaAXgSAGQgNAGgOACQgPAEgRAAQgaAAgZgIg");
	this.shape_13.setTransform(-27.9,-19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhkC5IAAlxIDJAAIAABTIhqAAIAAA/IBmAAIAABSIhmAAIAACNg");
	this.shape_14.setTransform(-57.1,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.1,-40,192.2,80);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,97,50), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.db_lemur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,428,240), null);


// stage content:
(lib._728x90_sept_cz = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(486.1,-24.4);
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(486.1,47.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({_off:false},0).wait(1).to({regY:-3.8,y:-27.8},0).wait(1).to({y:-26.2},0).wait(1).to({y:-22.3},0).wait(1).to({y:-12.6},0).wait(1).to({y:9.2},0).wait(1).to({y:22.9},0).wait(1).to({y:30.1},0).wait(1).to({y:34.7},0).wait(1).to({y:37.8},0).wait(1).to({y:40},0).wait(1).to({y:41.5},0).wait(1).to({y:42.6},0).wait(1).to({y:43.3},0).wait(1).to({y:43.6},0).to({_off:true},1).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({_off:false},0).wait(47).to({startPosition:0},0).wait(1).to({regX:-41.9,regY:-40,x:444.2,y:7.7},0).wait(1).to({y:8.1},0).wait(1).to({y:8.9},0).wait(1).to({y:10.2},0).wait(1).to({y:12.2},0).wait(1).to({y:15.1},0).wait(1).to({y:19.5},0).wait(1).to({y:26.7},0).wait(1).to({y:39.3},0).wait(1).to({y:56.4},0).wait(1).to({y:67.7},0).wait(1).to({y:74.2},0).wait(1).to({y:78.4},0).wait(1).to({y:81.1},0).wait(1).to({y:83},0).wait(1).to({y:84.2},0).wait(1).to({y:85},0).wait(1).to({y:85.4},0).wait(1).to({regX:0,regY:0,x:486.1,y:125.6},0).wait(5));

	// Layer 5
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(489.1,-33.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(489.1,49.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(1).to({regX:0.4,regY:-3.8,x:489.5,y:-37.4},0).wait(1).to({y:-36.7},0).wait(1).to({y:-35.5},0).wait(1).to({y:-33.2},0).wait(1).to({y:-29.2},0).wait(1).to({y:-21.3},0).wait(1).to({y:2.2},0).wait(1).to({y:22},0).wait(1).to({y:30.2},0).wait(1).to({y:35.1},0).wait(1).to({y:38.5},0).wait(1).to({y:40.8},0).wait(1).to({y:42.5},0).wait(1).to({y:43.7},0).wait(1).to({y:44.5},0).wait(1).to({y:45},0).wait(1).to({y:45.3},0).to({_off:true},1).wait(145));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(47).to({startPosition:0},0).wait(1).to({regX:0.4,regY:-3.8,x:489.5,y:45.7},0).wait(1).to({y:46.7},0).wait(1).to({y:48.9},0).wait(1).to({y:52.9},0).wait(1).to({y:60.6},0).wait(1).to({y:78.1},0).wait(1).to({y:100.8},0).wait(1).to({y:112.1},0).wait(1).to({y:118.4},0).wait(1).to({y:122.4},0).wait(1).to({y:124.9},0).wait(1).to({y:126.6},0).wait(1).to({y:127.7},0).wait(1).to({y:128.2},0).wait(1).to({regX:0,regY:0,x:489.1,y:132.2},0).wait(83));

	// calzoo
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(661.5,47.5,1,1,0,0,0,48.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179));

	// Layer 3
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(163,-17,1,1,0,0,0,214,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:-16.6},0).wait(1).to({y:-15.4},0).wait(1).to({y:-13.1},0).wait(1).to({y:-9.1},0).wait(1).to({y:-2.9},0).wait(1).to({y:7.2},0).wait(1).to({y:23.4},0).wait(1).to({y:45.9},0).wait(1).to({y:65.9},0).wait(1).to({y:79.2},0).wait(1).to({y:87.9},0).wait(1).to({y:93.7},0).wait(1).to({y:97.6},0).wait(1).to({y:100.3},0).wait(1).to({y:101.9},0).wait(1).to({y:102.8},0).wait(1).to({y:103},0).wait(2).to({y:102.8},0).wait(1).to({y:102.5},0).wait(1).to({y:102.1},0).wait(1).to({y:101.3},0).wait(1).to({y:100.2},0).wait(1).to({y:98.4},0).wait(1).to({y:95.8},0).wait(1).to({y:92.4},0).wait(1).to({y:89.4},0).wait(1).to({y:87.3},0).wait(1).to({y:85.9},0).wait(1).to({y:84.9},0).wait(1).to({y:84.2},0).wait(1).to({y:83.7},0).wait(1).to({y:83.4},0).wait(1).to({y:83.2},0).wait(1).to({y:83.1},0).wait(1).to({y:83},0).wait(46).to({scaleX:1,scaleY:1,x:163.1,y:82.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:163,y:82.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:163.1,y:81.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:163,y:80.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:78.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:75.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:71.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:66.8},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:63.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,y:61.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,y:59.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,y:58.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:57.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:57.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:57.1},0).wait(1).to({regX:214.3,regY:119.9,scaleX:0.63,scaleY:0.63,y:57},0).wait(54).to({regX:214,regY:120,x:162.7,y:57.1},0).wait(1).to({x:162.3},0).wait(1).to({x:161.6},0).wait(1).to({x:160.5},0).wait(1).to({x:158.7},0).wait(1).to({x:156},0).wait(1).to({x:151.8},0).wait(1).to({x:145.4},0).wait(1).to({x:137.1},0).wait(1).to({x:130.2},0).wait(1).to({x:125.5},0).wait(1).to({x:122.4},0).wait(1).to({x:120.3},0).wait(1).to({x:118.8},0).wait(1).to({x:117.9},0).wait(1).to({x:117.3},0).wait(1).to({x:116.9},0).wait(1).to({regX:214.3,regY:119.9,x:117,y:57},0).wait(11));

	// pattern
	this.instance_6 = new lib.lb_pattern();
	this.instance_6.parent = this;

	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(217.5,45);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(107.5,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},150).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150).to({_off:false},0).wait(1).to({x:217.2},0).wait(1).to({x:216.4},0).wait(1).to({x:214.7},0).wait(1).to({x:212.2},0).wait(1).to({x:208.4},0).wait(1).to({x:202.9},0).wait(1).to({x:195.2},0).wait(1).to({x:184.3},0).wait(1).to({x:169.5},0).wait(1).to({x:152.6},0).wait(1).to({x:137.8},0).wait(1).to({x:126.8},0).wait(1).to({x:119.3},0).wait(1).to({x:114.3},0).wait(1).to({x:111},0).wait(1).to({x:108.9},0).wait(1).to({x:107.8},0).to({_off:true},1).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C4D4D").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(179));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(313,-92,779,240);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_sept_cz_atlas_.png", id:"728x90_sept_cz_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;