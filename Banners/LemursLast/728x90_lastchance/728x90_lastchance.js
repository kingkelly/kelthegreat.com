(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_lastchance_atlas_", frames: [[332,0,134,74],[0,0,330,310],[233,527,241,73],[0,312,231,221],[233,312,233,213]]}
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



(lib.bb_clzoo = function() {
	this.spriteSheet = ss["728x90_lastchance_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_lemur = function() {
	this.spriteSheet = ss["728x90_lastchance_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_lemurlogo = function() {
	this.spriteSheet = ss["728x90_lastchance_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_snow = function() {
	this.spriteSheet = ss["728x90_lastchance_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_sun = function() {
	this.spriteSheet = ss["728x90_lastchance_atlas_"];
	this.gotoAndStop(4);
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_clzoo();
	this.instance.parent = this;
	this.instance.setTransform(390,-172,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,-172,108.6,60);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemurlogo();
	this.instance.parent = this;
	this.instance.setTransform(213,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(213,-6,241,73), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfB+IAAj7IC9AAIAAAxIiGAAIAAA0IB2AAIAAAvIh2AAIAAA1ICIAAIAAAyg");
	this.shape.setTransform(610.7,-37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhzB+IAAj7IBiAAQAPAAANADQANACANAFQAMAEAKAHQALAGAJAJQAJAJAHAKQAHAKAEALQAFALADANQACAMAAANIAAAAQAAANgCANQgDAMgFALQgEAMgHAKQgHAKgJAIQgJAJgLAHQgKAGgMAFQgNAFgNACQgNADgPAAgAg8BMIArAAQARAAANgGQAOgFAKgKQAKgKAGgOQAFgOAAgQIAAgBQAAgPgFgPQgGgOgKgKQgKgKgOgFQgNgGgRAAIgrAAg");
	this.shape_1.setTransform(584.5,-37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbB+IAAj7IA3AAIAAD7g");
	this.shape_2.setTransform(563.9,-37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUB/QgPgDgNgEQgOgGgNgHQgNgIgLgKIAhgnQASAPARAIIATAFQALACAJAAQARAAAKgFQAKgHAAgLIAAgBQAAgLgKgGQgKgHgegIQgWgGgNgFQgQgFgKgIQgLgIgGgNQgGgNAAgSIAAAAQAAgSAHgOQAGgNAMgLQAMgKAQgFQAQgFAUgBQAMAAANACQANACALAEQAMAFALAFIAUAPIgdApQgRgMgQgGQgRgHgOABQgQgBgIAHQgJAGAAAJIAAABQAAAMALAGQAKAHAhAIQAUAGAOAFQAPAHAKAIQAKAIAFAMQAGAMAAARIAAAAQAAATgHAPQgHAOgMALQgNAJgQAFQgRAGgVAAQgNgBgOgCg");
	this.shape_3.setTransform(546.1,-37.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbB+IAAjIIhMAAIAAgzIDPAAIAAAzIhMAAIAADIg");
	this.shape_4.setTransform(523.2,-37.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtB5QgLgEgIgFQgJgFgHgHQgHgIgFgIQgGgJgDgKQgEgLgCgMIgCgaIAAiPIA3AAIAACNQAAAQAEALQAEAMAHAIQAHAIAKAEQAKAEAMAAQANAAAKgEQAKgEAHgHQAHgIADgMQAEgLAAgOIAAiQIA4AAIAACNIgCAbQgCANgEAKQgEALgGAIQgFAJgHAIQgHAHgJAFQgJAFgKAEQgdAHgQAAQgggDgNgEg");
	this.shape_5.setTransform(498,-37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCAQgMgDgNgFQgMgEgKgIQgLgHgJgIQgJgKgHgJQgHgLgFgMQgFgLgCgNQgDgNAAgNIAAgBQAAgMADgNQADgMAEgMQAFgNAHgKQAHgKAJgJQAJgJALgHQAKgHAMgFQANgFANgDQAOgDANAAQAOAAAOADQAOADAMAFQAMAEALAIQAKAHAKAIQAIAKAHAKQAHAKAFAMQAFALADANQACANAAANIAAAAQAAANgCANQgDANgFALQgFAMgHALQgHAKgJAJQgJAJgLAHQgLAHgMAFQgMAFgOADQgNACgOAAQgOAAgOgCgAgehIQgOAGgKALQgKAKgGAPQgFAPAAAPIAAAAQAAAQAFAPQAGAOAKALQALALAOAGQAOAGAPAAQARAAAOgGQANgGALgLQAKgLAGgOQAFgOAAgQIAAgBQAAgPgGgPQgFgOgLgLQgKgLgNgGQgPgGgQAAQgQAAgOAGg");
	this.shape_6.setTransform(469.1,-37.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABHB+IAAikIhHBrIAAAAIhHhqIAACjIg2AAIAAj7IA8AAIBBBqIBChqIA8AAIAAD7g");
	this.shape_7.setTransform(427.4,-37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhfB+IAAj7IC9AAIAAAxIiGAAIAAA0IB2AAIAAAvIh2AAIAAA1ICIAAIAAAyg");
	this.shape_8.setTransform(400.3,-37.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAzB+IAAhlIhlAAIAABlIg4AAIAAj7IA4AAIAABkIBlAAIAAhkIA4AAIAAD7g");
	this.shape_9.setTransform(374,-37.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbB+IAAjIIhMAAIAAgzIDPAAIAAAzIhMAAIAADIg");
	this.shape_10.setTransform(348.7,-37.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbB+IAAjIIhMAAIAAgzIDPAAIAAAzIhMAAIAADIg");
	this.shape_11.setTransform(314.6,-37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbB+IAAj7IA3AAIAAD7g");
	this.shape_12.setTransform(296.9,-37.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUB/QgPgDgNgEQgOgGgNgHQgNgIgLgKIAhgnQASAPARAIIATAFQALACAJAAQARAAAKgFQAKgHAAgLIAAgBQAAgLgKgGQgKgHgegIQgWgGgNgFQgQgFgKgIQgLgIgGgNQgGgNAAgSIAAAAQAAgSAHgOQAGgNAMgLQAMgKAQgFQAQgFAUgBQAMAAANACQANACALAEQAMAFALAFIAUAPIgdApQgRgMgQgGQgRgHgOABQgQgBgIAHQgJAGAAAJIAAABQAAAMALAGQAKAHAhAIQAUAGAOAFQAPAHAKAIQAKAIAFAMQAGAMAAARIAAAAQAAATgHAPQgHAOgMALQgNAJgQAFQgRAGgVAAQgNgBgOgCg");
	this.shape_13.setTransform(279.1,-37.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbB+IAAj7IA3AAIAAD7g");
	this.shape_14.setTransform(261.8,-37.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYB/Ihlj9IA9AAIBBCwIBBiwIA9AAIhnD9g");
	this.shape_15.setTransform(242.3,-37.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgbCAQgNgDgNgFQgMgFgLgHQgLgHgIgJQgJgJgHgKQgHgKgFgMQgFgMgDgMQgCgNAAgNIAAgBQAAgMACgNQADgMAFgNQAFgLAHgKQAHgLAJgJQAJgJAKgHQAMgHAMgFQAMgFAOgCQANgEAOAAQAOAAAOAEQANACAMAFQAMAEAKAIQAMAHAIAJQAJAIAHALQAHAKAFAMQAFAMACAMQADANAAANIAAAAQAAANgDANQgCANgFALQgFAMgHALQgHAKgJAJQgJAJgLAHQgKAHgMAFQgNAFgNACQgOADgOAAQgOAAgNgCgAgehIQgNAGgLALQgKALgFAOQgGAPAAAPIAAAAQAAAQAGAOQAFAPALALQAKALANAGQAPAGAQAAQAQAAAOgGQANgGALgLQAKgLAGgOQAFgOAAgQIAAgBQAAgPgGgPQgFgOgKgLQgLgLgOgGQgOgGgQAAQgQAAgOAGg");
	this.shape_16.setTransform(577.1,-70.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbB+IAAjIIhMAAIAAgzIDPAAIAAAzIhMAAIAADIg");
	this.shape_17.setTransform(550.2,-70.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhfB+IAAj7IC+AAIAAAxIiGAAIAAAzIB1AAIAAAwIh1AAIAAA1ICHAAIAAAyg");
	this.shape_18.setTransform(516.2,-70.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNCAQgNgDgLgFQgMgFgKgGQgLgIgIgJQgJgIgHgLQgHgKgEgLQgFgMgDgNQgCgNAAgNIAAgBQAAgNACgMQADgNAEgMQAFgLAHgKQAHgLAIgJQAJgJALgHQAKgHAMgFQAMgFANgCQANgEAOAAQASAAAPAEQAOACAMAGQAQAGAZAWIgkAoQgPgOgPgGQgQgIgSAAQgPAAgNAGQgOAGgKALQgJALgGAOQgFAPAAAPIAAAAQAAAQAFAOQAFAPAKALQAKALANAGQAOAGAPAAQAOAAAWgIQAOgGAQgQIAjAkQgKALgKAIQgLAJgMAFQgMAGgPADQgPAEgSgBQgNAAgNgCg");
	this.shape_19.setTransform(490.6,-70.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABBB+Ih5ifIAACfIg3AAIAAj7IA0AAIB1CaIAAiaIA2AAIAAD7g");
	this.shape_20.setTransform(462.9,-70.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABMB/IgXg4IhqAAIgXA4Ig5AAIBsj9IAyAAIBtD9gAAhAVIghhQIghBQIBCAAg");
	this.shape_21.setTransform(434.5,-70.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAzB+IAAhlIhlAAIAABlIg4AAIAAj7IA4AAIAABkIBlAAIAAhkIA4AAIAAD7g");
	this.shape_22.setTransform(406.6,-70.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNCAQgNgDgLgFQgMgFgKgGQgLgIgIgJQgJgIgHgLQgHgKgEgLQgFgMgDgNQgCgNAAgNIAAgBQAAgNACgMQADgNAEgMQAFgLAHgKQAHgLAIgJQAJgJALgHQAKgHAMgFQAMgFANgCQANgEAOAAQASAAAPAEQAOACAMAGQAQAGAZAWIgkAoQgPgOgPgGQgQgIgSAAQgPAAgNAGQgOAGgKALQgJALgGAOQgFAPAAAPIAAAAQAAAQAFAOQAFAPAKALQAKALANAGQAOAGAPAAQAOAAAWgIQAOgGAQgQIAjAkQgKALgKAIQgLAJgMAFQgMAGgPADQgPAEgSgBQgNAAgNgCg");
	this.shape_23.setTransform(379.9,-70.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbB+IAAjIIhMAAIAAgzIDPAAIAAAzIhMAAIAADIg");
	this.shape_24.setTransform(343.9,-70.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUB/QgPgDgNgFQgOgEgNgIQgNgHgLgKIAhgoQASAPARAIIATAGQALACAJAAQARAAAKgHQAKgGAAgLIAAgBQAAgLgKgGQgKgHgegIQgWgFgNgGQgQgGgKgHQgLgJgGgMQgGgNAAgSIAAAAQAAgRAHgPQAGgNAMgLQAMgKAQgFQAQgGAUAAQAMABANACQANACALADQAMAFALAFIAUAOIgdAqQgRgMgQgGQgRgGgOAAQgQAAgIAGQgJAGAAAJIAAABQAAANALAFQAKAHAhAIQAUAGAOAFQAPAHAKAHQAKAJAFAMQAGANAAAQIAAABQAAASgHAPQgHAOgMAKQgNAKgQAGQgRAEgVAAQgNABgOgDg");
	this.shape_25.setTransform(320.5,-70.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABMB/IgXg4IhqAAIgXA4Ig5AAIBsj9IAyAAIBtD9gAAhAVIghhQIghBQIBCAAg");
	this.shape_26.setTransform(295.1,-70.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhaB+IAAj7IA4AAIAADIIB9AAIAAAzg");
	this.shape_27.setTransform(270.7,-70.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(131,-89,589,73), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_lemur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,330,310), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_snow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,221);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPCDQgOgCgNgFQgMgFgKgHQgLgHgKgJQgIgJgHgLQgHgKgGgMQgEgNgDgNQgCgNgBgOIAAgBQABgNACgNQADgNAFgMQAFgMAHgKQAHgLAJgKQAJgIALgIQALgIAMgFQANgEANgDQAOgDANAAQARAAAPACQAOADANAEQAQAGAbAVIgjArQgRgOgOgFQgRgIgVABQgNAAgOAGQgOAGgKALQgLAMgFAOQgGAPAAAQIAAAAQAAASAGAPQAFAOALAMQALALAOAGQAOAGAQAAQARAAANgEQANgDALgJIAAglIg5AAIAAgvIBxAAIAABvQgeAVgSAIQgOAFgPAEQgRADgSAAQgNAAgOgDg");
	this.shape.setTransform(610.1,-58.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDCBIh9ijIAACjIg4AAIAAkCIA1AAIB4CfIAAifIA4AAIAAECg");
	this.shape_1.setTransform(581.2,-58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcCBIAAkCIA5AAIAAECg");
	this.shape_2.setTransform(560.4,-58.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABJCBIAAioIhJBuIgBAAIhIhsIAACmIg4AAIAAkCIA+AAIBDBuIBEhuIA+AAIAAECg");
	this.shape_3.setTransform(538.1,-58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcCDQgOgDgNgEQgMgGgLgHQgLgHgJgJQgJgJgHgLQgHgLgFgLQgFgMgDgNQgDgNAAgOIAAgBQAAgNADgNQADgNAFgMQAFgMAHgKQAHgLAJgKQAKgIALgIQALgIAMgFQANgEAOgDQAOgDANAAQAPAAAOADQAOADANAEQAMAFALAIQALAHAJAJQAJAJAHALQAHALAFALQAFANADANQADANAAANIAAAAQAAANgDAOQgDANgFAMQgFAMgHALQgHAKgJAJQgKAJgLAIQgLAHgMAGQgNAFgOACQgOADgOAAQgOAAgOgDgAgfhKQgOAGgKALQgLAMgFAOQgGAPAAAQIAAAAQAAARAGAOQAFAPALALQALAMAOAGQAOAGAQABQARgBAPgGQAOgGAKgLQALgMAFgOQAGgPAAgQIAAgBQAAgQgGgPQgFgOgLgMQgLgKgOgHQgPgGgQAAQgQAAgPAGg");
	this.shape_4.setTransform(506.3,-58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNCDQgNgDgNgEQgMgGgKgHQgKgHgJgJQgKgJgGgLQgIgKgEgMQgFgMgDgNQgDgOAAgNIAAgBQAAgNADgNQACgNAGgMQAEgMAIgKQAGgLAKgKQAJgIAKgIQALgIAMgFQANgEANgDQANgDAOAAQATAAAPADQAPACAMAGQAQAHAaAWIgkAqQgQgPgQgGQgQgJgTABQgPAAgOAGQgNAGgLALQgJAMgGAOQgGAPAAAQIAAAAQAAARAGAOQAFAPAKALQAKAMAOAGQAOAGAPABQAPAAAXgJQAOgGAQgQIAkAlQgKALgKAIQgMAJgMAFQgNAHgPADQgPADgTAAQgNAAgNgDg");
	this.shape_5.setTransform(477.2,-58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVCCQgPgCgOgFQgOgFgNgIQgNgIgLgLIAhgnQATAPASAHIATAHQALACAKAAQARAAAKgHQAKgGAAgMIAAAAQAAgMgKgGQgLgHgegIQgWgGgOgFQgQgHgLgHQgLgJgGgNQgGgNAAgSIAAgBQAAgRAHgPQAGgOAMgLQAMgKARgFQARgGAUAAQANAAANACQANACAMAEQAMAFALAFIAVAPIgeAqQgSgMgQgGQgRgHgPAAQgQAAgJAGQgJAHAAAJIAAABQAAANAMAGQAKAGAhAJQAVAGAOAGQAQAHAKAHQALAKAFAMQAFANAAAQIAAABQAAATgGAPQgHAPgNAKQgNAKgRAGQgSAFgVAAQgNAAgPgDg");
	this.shape_6.setTransform(440.1,-58.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiA7IAHh1IA+AAIAAACIgnBzg");
	this.shape_7.setTransform(423.6,-65.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAuCBIg3hTIgtAAIAABTIg5AAIAAkCIB1AAQARABAbAGQATAHANANQALALAGAOQAFAQAAASIAAABQAAAPgEANQgEANgHAJQgIAKgJAIQgLAGgNAFIBABcgAg2gDIA5AAQAKAAAIgDQAJgCAFgFQAFgFADgHQAEgGAAgJIAAAAQAAgJgEgHQgCgHgHgFQgGgEgHgDQgJgCgKAAIg4AAg");
	this.shape_8.setTransform(405.6,-58.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhiCBIAAkCIDDAAIAAAzIiKAAIAAA1IB5AAIAAAyIh5AAIAAA2ICMAAIAAAyg");
	this.shape_9.setTransform(379.5,-58.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbCBIAAjNIhPAAIAAg1IDVAAIAAA1IhOAAIAADNg");
	this.shape_10.setTransform(354.5,-58.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABDCBIh8ijIAACjIg5AAIAAkCIA0AAIB5CfIAAifIA4AAIAAECg");
	this.shape_11.setTransform(328,-58.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcCBIAAkCIA4AAIAAECg");
	this.shape_12.setTransform(307.2,-58.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA6CDIg6ipIg6CpIgxAAIhZkEIA+AAIA1CuIA6ivIAwAAIA6CvIA2iuIA8AAIhZEEg");
	this.shape_13.setTransform(280.2,-58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128,-77.3,628.3,41);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_sun();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(203));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,213);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.3,-24.4,1,1,0,0,0,111.5,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.2,-129.4,231,221);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.5,-41.7,1,1,0,0,0,116.5,106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,startPosition:28},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-148.2,233,213);


// stage content:
(lib._728x90_lastchance = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210,189.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(253).to({_off:false},0).wait(1).to({regX:444.3,regY:-142,x:654.3,y:47.5,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.011},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.251},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.881},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.916},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.962},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:210,y:189.5},0).wait(7));

	// Layer 10
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(214.5,-185,1,1,0,0,0,83.5,56);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227).to({_off:false},0).wait(1).to({regX:333.5,regY:30.5,x:464.5,y:-210.2},0).wait(1).to({y:-209.6},0).wait(1).to({y:-208.3},0).wait(1).to({y:-206.3},0).wait(1).to({y:-203.5},0).wait(1).to({y:-199.4},0).wait(1).to({y:-193.7},0).wait(1).to({y:-185.5},0).wait(1).to({y:-173},0).wait(1).to({y:-150.7},0).wait(1).to({y:-86.3},0).wait(1).to({y:-27.1},0).wait(1).to({y:-4},0).wait(1).to({y:10.1},0).wait(1).to({y:20},0).wait(1).to({y:27.3},0).wait(1).to({y:32.9},0).wait(1).to({y:37.3},0).wait(1).to({y:40.7},0).wait(1).to({y:43.4},0).wait(1).to({y:45.5},0).wait(1).to({y:47.1},0).wait(1).to({y:48.2},0).wait(1).to({y:48.9},0).wait(1).to({y:49.4},0).wait(1).to({regX:83.5,regY:56,x:214.5,y:75},0).wait(45));

	// lemur
	this.instance_2 = new lib.Symbol10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-161.3,-110,1,1,32.3,0,0,120.5,2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).wait(1).to({regX:165,regY:155,rotation:32.2,x:-204.5,y:43.2},0).wait(1).to({rotation:32,x:-201.5,y:43.4},0).wait(1).to({rotation:31.7,x:-196.4,y:43.7},0).wait(1).to({rotation:31.2,x:-188.9,y:44.3},0).wait(1).to({rotation:30.6,x:-178.8,y:45},0).wait(1).to({rotation:29.8,x:-166,y:45.8},0).wait(1).to({rotation:28.8,x:-150.2,y:46.8},0).wait(1).to({rotation:27.6,x:-131.1,y:47.9},0).wait(1).to({rotation:26.1,x:-108.5,y:49.2},0).wait(1).to({rotation:24.5,x:-82.3,y:50.5},0).wait(1).to({rotation:22.6,x:-52.3,y:51.9},0).wait(1).to({rotation:20.4,x:-18.5,y:53.2},0).wait(1).to({rotation:18,x:19.2,y:54.4},0).wait(1).to({rotation:15.4,x:60.3,y:55.4},0).wait(1).to({rotation:12.7,x:104.5,y:56.2},0).wait(1).to({rotation:9.7,x:151.1,y:56.5},0).wait(1).to({rotation:6.6,x:199.5,y:56.4},0).wait(1).to({rotation:3.5,x:248.6,y:55.9},0).wait(1).to({rotation:0.4,x:297.7,y:54.8},0).wait(1).to({rotation:-2.7,x:345.8,y:53.4},0).wait(1).to({rotation:-5.6,x:392.4,y:51.6},0).wait(1).to({rotation:-8.5,x:436.8,y:49.5},0).wait(1).to({rotation:-11.2,x:478.8,y:47.2},0).wait(1).to({rotation:-13.7,x:518.1,y:44.7},0).wait(1).to({rotation:-16.1,x:554.7,y:42.2},0).wait(1).to({rotation:-18.3,x:588.5,y:39.6},0).wait(1).to({rotation:-20.3,x:619.6,y:37.1},0).wait(1).to({rotation:-22.2,x:648.2,y:34.5},0).wait(1).to({rotation:-23.9,x:674.4,y:32.1},0).wait(1).to({rotation:-25.5,x:698.2,y:29.9},0).wait(1).to({rotation:-26.9,x:719.9,y:27.7},0).wait(1).to({rotation:-28.3,x:739.6,y:25.7},0).wait(1).to({rotation:-29.4,x:757.4,y:23.7},0).wait(1).to({rotation:-30.5,x:773.4,y:22},0).wait(1).to({rotation:-31.5,x:787.7,y:20.3},0).wait(1).to({rotation:-32.3,x:800.5,y:18.9},0).wait(1).to({rotation:-33.1,x:812,y:17.6},0).wait(1).to({rotation:-33.8,x:822,y:16.4},0).wait(1).to({rotation:-34.4,x:830.9,y:15.3},0).wait(1).to({rotation:-34.9,x:838.5,y:14.4},0).wait(1).to({rotation:-35.3,x:845,y:13.6},0).wait(1).to({rotation:-35.7,x:850.5,y:12.9},0).wait(1).to({rotation:-36,x:855,y:12.3},0).wait(1).to({rotation:-36.3,x:858.6,y:11.9},0).wait(1).to({rotation:-36.4,x:861.4,y:11.6},0).wait(1).to({rotation:-36.6,x:863.2,y:11.3},0).wait(1).to({x:864.4,y:11.2},0).wait(1).to({regX:120.5,regY:2,rotation:-36.7,x:737.6,y:-85},0).to({_off:true},1).wait(41).to({_off:false,regX:124.5,regY:152,rotation:0,x:143,y:-163.9},0).wait(1).to({regX:165,regY:155,x:183.5,y:-160.7},0).wait(1).to({y:-160.1},0).wait(1).to({y:-159},0).wait(1).to({y:-157.3},0).wait(1).to({y:-154.8},0).wait(1).to({y:-151.3},0).wait(1).to({y:-146.3},0).wait(1).to({y:-139.2},0).wait(1).to({y:-128.3},0).wait(1).to({y:-109},0).wait(1).to({y:-53},0).wait(1).to({y:-1.6},0).wait(1).to({y:18.6},0).wait(1).to({y:30.9},0).wait(1).to({y:39.4},0).wait(1).to({y:45.8},0).wait(1).to({y:50.7},0).wait(1).to({y:54.5},0).wait(1).to({y:57.5},0).wait(1).to({y:59.8},0).wait(1).to({y:61.6},0).wait(1).to({y:63},0).wait(1).to({y:64},0).wait(1).to({y:64.6},0).wait(1).to({y:65},0).wait(1).to({regX:124.5,regY:152,x:143,y:62.1},0).wait(48));

	// Layer 9
	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(448.1,47.9,0.1,0.1,0,0,0,95,40.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(158).to({_off:false},0).wait(1).to({regX:424.9,regY:-54.3,scaleX:0.15,scaleY:0.15,x:479.8,y:38.6},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:478,y:39},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:475.3,y:39.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:471.2,y:40.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:467.4,y:41.1},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:464.9,y:41.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:463.2,y:42},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:462,y:42.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:461.1,y:42.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:460.4,y:42.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:459.9,y:42.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:459.4,y:42.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:459.1,y:42.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:458.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:458.5,y:43},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:458.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:458.2},0).wait(1).to({scaleX:1,scaleY:1,x:458.1},0).wait(1).to({scaleX:1,scaleY:1,x:458},0).wait(1).to({scaleX:1,scaleY:1,y:43.1},0).wait(1).to({regX:95,regY:40,x:128.1,y:137.9},0).wait(46).to({regX:424.9,regY:-54.3,x:458,y:43.7},0).wait(1).to({y:44.1},0).wait(1).to({y:45},0).wait(1).to({y:46.2},0).wait(1).to({y:48.1},0).wait(1).to({y:50.8},0).wait(1).to({y:54.5},0).wait(1).to({y:59.9},0).wait(1).to({y:68},0).wait(1).to({y:82.6},0).wait(1).to({y:124.7},0).wait(1).to({y:163.4},0).wait(1).to({y:178.6},0).wait(1).to({y:187.8},0).wait(1).to({y:194.2},0).wait(1).to({y:199},0).wait(1).to({y:202.7},0).wait(1).to({y:205.6},0).wait(1).to({y:207.8},0).wait(1).to({y:209.6},0).wait(1).to({y:210.9},0).wait(1).to({y:212},0).wait(1).to({y:212.7},0).wait(1).to({y:213.2},0).wait(1).to({y:213.5},0).wait(1).to({regX:95,regY:40,x:128.1,y:307.9},0).wait(48));

	// Layer 4
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(430,56.7,0.15,0.15,0,0,0,149,14.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).wait(1).to({regX:441.5,regY:-58.6,scaleX:0.15,scaleY:0.15,x:473.8,y:45.7},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:45.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:473.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:473.5,y:45.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:473.2,y:45.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:472.7,y:45},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:472.4,y:44.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:472.2,y:44.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:472,y:44.6},0).wait(1).to({scaleX:1,scaleY:1,x:471.9,y:44.5},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:471.8,y:44.4},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({regX:148.9,regY:14,scaleX:1.1,scaleY:1.1,x:150,y:124.7},0).wait(98).to({alpha:0},11,cjs.Ease.get(0.95)).wait(137));

	// snow circ
	this.instance_5 = new lib.Symbol7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.5,132.6,1,1,0,0,0,55.3,61.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(146).to({_off:false},0).wait(1).to({regY:-18.9,y:52.6,alpha:0.09,startPosition:1},0).wait(1).to({alpha:0.207,startPosition:2},0).wait(1).to({alpha:0.351,startPosition:3},0).wait(1).to({alpha:0.503,startPosition:4},0).wait(1).to({alpha:0.641,startPosition:5},0).wait(1).to({alpha:0.751,startPosition:6},0).wait(1).to({alpha:0.834,startPosition:7},0).wait(1).to({alpha:0.895,startPosition:8},0).wait(1).to({alpha:0.938,startPosition:9},0).wait(1).to({alpha:0.968,startPosition:10},0).wait(1).to({alpha:0.987,startPosition:11},0).wait(1).to({alpha:0.997,startPosition:12},0).wait(1).to({regY:61.1,y:132.6,alpha:1,startPosition:13},0).wait(65).to({startPosition:78},0).wait(1).to({regY:-18.9,x:150.3,y:52.6,startPosition:79},0).wait(1).to({x:149.5,startPosition:0},0).wait(1).to({x:148,startPosition:1},0).wait(1).to({x:145.4,startPosition:2},0).wait(1).to({x:141.1,startPosition:3},0).wait(1).to({x:134,startPosition:4},0).wait(1).to({x:121.4,startPosition:5},0).wait(1).to({x:102.3,startPosition:6},0).wait(1).to({x:87.1,startPosition:7},0).wait(1).to({x:78,startPosition:8},0).wait(1).to({x:72.1,startPosition:9},0).wait(1).to({x:68.1,startPosition:10},0).wait(1).to({x:65.3,startPosition:11},0).wait(1).to({x:63.3,startPosition:12},0).wait(1).to({x:62,startPosition:13},0).wait(1).to({x:61.1,startPosition:14},0).wait(1).to({x:60.6,startPosition:15},0).wait(1).to({regY:61.1,x:60.5,y:132.6,mode:"single",startPosition:16},0).wait(56));

	// sun circle
	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.6,125.5,1,1,0,0,0,45.5,38.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({startPosition:34},0).to({startPosition:52},18,cjs.Ease.get(1)).wait(94).to({startPosition:40},0).to({alpha:0,startPosition:7},10).wait(142));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#27988A").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(298));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-16,728,213);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_lastchance_atlas_.png", id:"728x90_lastchance_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;