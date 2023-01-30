(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"728x90_panda_atlas_", frames: [[730,53,121,26],[0,0,728,166],[829,31,165,20],[853,53,64,22],[829,0,158,29],[730,0,97,50]]}
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



(lib.bb_members = function() {
	this.spriteSheet = ss["728x90_panda_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_panda = function() {
	this.spriteSheet = ss["728x90_panda_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_previews = function() {
	this.spriteSheet = ss["728x90_panda_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_rare = function() {
	this.spriteSheet = ss["728x90_panda_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bb_spring = function() {
	this.spriteSheet = ss["728x90_panda_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["728x90_panda_atlas_"];
	this.gotoAndStop(5);
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


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,89.6,46.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAyAAQAQAAALAMQAMALAAASQAAAQgMAMQgFAFgHADQgHAEgIAAIgbAAIAAAfQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgAgUABIAVAAQAIAAAGgDQADgCABgEQABgEAAgEQAAgFgBgEQgBgDgDgCQgDgDgEgBIgHgBIgVAAg");
	this.shape.setTransform(238.2,-139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIATAAQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAABtQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(229.7,-139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA6QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIAAgsIguAAIAAAsQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgUAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIAAhtQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAUAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAsIAuAAIAAgsQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAABtQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_2.setTransform(220.9,-139);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA4QgKgDgJgHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBABAAIALgPQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAGAFAGACQAGADAHAAQAIAAAEgEQAEgDAAgGQAAgGgJgEIgIgDIgJgDQgQgGgHgFQgEgEgDgGQgCgGAAgIQAAgHADgGQADgFAGgFQAFgEAIgCQAJgCAJAAQARAAASAKQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAIgKAQQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgMgHgKAAQgIAAgEACQgFACAAAEQAAAGAMAFIAKAEIAMAEQAMAEAHAHQAGAJAAAMQAAAQgMAJQgGAFgIADQgIACgJAAQgLAAgKgDg");
	this.shape_3.setTransform(210,-139);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA6QAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBgBgBIgSglIgRAAIAAAlQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgUAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIA3AAQAPAAAKAMQAGAFADAGQACAHAAAJQAAAMgHAIQgHALgLAEIAVAlIABADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgVgDIAaAAQAGAAAFgEIAEgFQABgDAAgDQAAgEgBgEIgEgEQgFgFgGAAIgaAAg");
	this.shape_4.setTransform(200,-139);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBTAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg8AAIAAAZIAzAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAQQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAYIA8AAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_5.setTransform(189.2,-139);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAmAAQAMAAAKAGQANAIAAAQQAAARgOAHIAAABQAMACAGAIQAGAHAAAMQAAAPgNAJQgLAHgQAAgAgRAjIARAAQAHAAAEgBQAGgDAAgHQAAgNgWgBIgMAAgAgRgKIAGAAQASgBAAgOQAAgFgFgDQgCgBgFgBIgMAAg");
	this.shape_6.setTransform(178.7,-139);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhBIgYAmIgBACIgQAAIgCgCIgYgmIAABBQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgTAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABIAfA2IAgg2QAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAIAUAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAABtQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_7.setTransform(165.9,-139);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBTAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg8AAIAAAZIAzAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAQQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAYIA8AAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_8.setTransform(154,-139);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhBIgYAmIgBACIgQAAIgCgCIgYgmIAABBQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgTAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABIAfA2IAgg2QAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAIAUAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAABtQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_9.setTransform(141.2,-139);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdA6QAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgHgVIgnAAIgGAVQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgWAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAohtQAAgBABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAoBtQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgMANIAZAAIgNgmg");
	this.shape_10.setTransform(124.2,-139);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBTAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg8AAIAAAZIAzAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAAQQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAYIA8AAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_11.setTransform(109.6,-139);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLA6QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgohuQgBgBABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAXAAQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAABIAaBRIAbhRQAAgBABgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAXAAIACABIAAACIgoBuQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAg");
	this.shape_12.setTransform(98.4,-139);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIATAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABtQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_13.setTransform(90.4,-139);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSA3QgLgEgIgJQgJgIgEgLQgEgLAAgMQAAgLAEgLQAFgKAIgJQAJgJALgEQAKgFAMAAQASAAASAMQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgLAQQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGgEgGgCQgGgDgFAAQgNAAgKALQgFAFgDAHQgCAGAAAGQAAAPAKAKQAKAKANAAQAPAAAKgHIAAgJIgVAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgSQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAsAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAA5QAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgVAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgBQgMAGgNAAQgMAAgLgFg");
	this.shape_14.setTransform(81.2,-139);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("AuhifIdCAAIAAE/I9CAAg");
	this.shape_15.setTransform(158.6,-139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(64.6,-156,187.9,34), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_previews();
	this.instance.parent = this;
	this.instance.setTransform(141,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(141,-150,165,20), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJA6QgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIAAhaIgdAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgSQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAIBTAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAASQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgdAAIAABaQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(131.8,-122);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBTAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg8AAIAAAZIAzAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAZIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(122.7,-122);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSA3QgLgEgIgJQgJgIgEgLQgEgLAAgMQAAgLAEgLQAFgKAIgJQAJgJALgEQAKgFAMAAQASAAASAMQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgLAQQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGgEgGgCQgGgDgFAAQgNAAgKALQgFAFgDAHQgCAGAAAGQAAAPAKAKQAKAKANAAQAPAAAKgHIAAgJIgVAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAgSQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAsAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAA5QAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgVAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgBQgMAGgNAAQgMAAgLgFg");
	this.shape_2.setTransform(110.3,-122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA4QgKgDgJgHQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBABAAIALgPQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAGAFAGACQAGADAHAAQAIAAAEgEQAEgDAAgGQAAgGgJgEIgIgDIgJgDQgQgGgHgFQgEgEgDgGQgCgGAAgIQAAgHADgGQADgFAGgFQAFgEAIgCQAJgCAJAAQARAAASAKQAAAAABAAQAAABAAAAQAAABAAAAQAAABgBAAIgKAQQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgMgHgKAAQgIAAgEACQgFACAAAEQAAAGAMAFIAKAEIAMAEQAMAEAHAHQAGAJAAAMQAAAQgMAJQgGAFgIADQgIACgJAAQgLAAgKgDg");
	this.shape_3.setTransform(95,-122);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA6QAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBgBIgSglIgRAAIAAAlQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgUAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIA3AAQAPAAAKAMQAGAFADAGQACAIAAAIQAAALgHAJQgHAKgLAFIAVAlIABADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAgAgVgDIAaAAQAGAAAFgEIAEgFQABgDAAgDQAAgFgBgDIgEgFQgFgEgGAAIgaAAg");
	this.shape_4.setTransform(85,-122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBTAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg8AAIAAAZIAzAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAZIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_5.setTransform(74.2,-122);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAmAAQAMAAAKAGQANAIAAAQQAAARgOAHIAAABQAMACAGAIQAGAHAAAMQAAAPgNAJQgLAHgQAAgAgRAkIARAAQAHAAAEgCQAGgDAAgHQAAgNgWgBIgMAAgAgRgKIAGAAQASAAAAgPQAAgFgFgDQgCgBgFgBIgMAAg");
	this.shape_6.setTransform(63.7,-122);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhBIgYAmIgCACIgPAAIgCgCIgYgmIAABBQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgSAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABIAfA2IAgg2QAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAIAUAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAABtQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_7.setTransform(50.9,-122);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpA6QAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIBTAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAASQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIg8AAIAAAZIAzAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgzAAIAAAZIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAAARQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_8.setTransform(39,-122);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkA6QgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAhBIgYAmIgBACIgQAAIgCgCIgYgmIAABBQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgTAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhtQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAUAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABIAfA2IAgg2QAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAIAUAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAABtQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_9.setTransform(26.2,-122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(17,-134,121.4,23.9), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgZQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB3AAQADAAAAAEIAAAZQAAADgDAAIgrAAIAAB/QAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(198.3,-142.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAAAgBQgBAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(185.4,-142.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBSQgEAAgCgEIgag0IgYAAIAAA0QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIBOAAQAUAAAPAQQAIAIAEAJQAEAKAAALQAAARgKANQgKAPgPAFIAcA2IACADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAgAgegFIAmAAQAHAAAHgFQAEgDACgFQACgEAAgFQAAgFgCgEQgCgFgEgDQgHgFgHAAIgmAAg");
	this.shape_2.setTransform(171.3,-142.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_3.setTransform(159.2,-142.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BSQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAAAAAIBuAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAIhNAAIAAAiIBCAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAYQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIhCAAIAAA/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(149.2,-142.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIgiA3QAAABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAgBIghg3IAABeQAAAEgDAAIgbAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAdAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_5.setTransform(125,-142.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_6.setTransform(108.3,-142.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAg/IhBAAIAAA/QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAA+IBBAAIAAg+QAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_7.setTransform(91.4,-142.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBSQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgZQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB3AAQADAAAAAEIAAAZQAAADgDAAIgqAAIAAB/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_8.setTransform(76.5,-142.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAAAZQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAAZQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_9.setTransform(57.3,-142.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_10.setTransform(42.5,-142.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_11.setTransform(27.7,-142.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(19,-159,187.6,32.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_members();
	this.instance.parent = this;
	this.instance.setTransform(20,-159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(20,-159,121,26), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_spring();
	this.instance.parent = this;
	this.instance.setTransform(219,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(219,-157,158,29), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQABABAAABIAAAZQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQABABAAAAIAAAZQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(182.8,-148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQAAAAgBgBQAAAAAAgBQgBAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(168,-148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIBHAAQAXAAAQARQARAQAAAZQAAAXgRARQgIAIgKAEQgKAEgLAAIgnAAIAAAtQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAgAgdACIAfAAQAMAAAHgGQAEgDACgFQACgFAAgGQAAgHgCgFQgCgFgEgDQgEgDgEgCQgFgBgGAAIgfAAg");
	this.shape_2.setTransform(154,-148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAheIggA3QgBABAAABQgBAAAAABQgBAAAAABQAAAAgBAAIgVAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBgBIggg3IAABeQAAAEgFAAIgbAAQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAAAAAIAeAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQABgBAAgBQAAAAABgBQAAAAABgBQAAAAAAAAIAfAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAg");
	this.shape_3.setTransform(135.5,-148);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(121.8,-148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAB/IA5AAQABAAABAAQAAABABAAQAAAAABABQAAABAAAAIAAAZQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(113,-148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaBOQgOgGgNgMQgMgNgGgPQgGgPAAgRQAAgRAGgOQAHgPAMgNQANgMAOgGQAPgGARAAQAZAAAaARQABAAAAABQABAAAAABQAAAAAAABQgBABAAABIgOAWQgDADgDgCQgIgFgIgEQgIgCgIAAQgTAAgOAPQgHAHgDAJQgEAJAAAJQAAAVAOAPQAOAOATAAQAWAAAOgLIAAgMIgfAAQgEgBABgEIAAgZQgBgEAEABIA+AAQABAAABAAQABAAAAAAQABABAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQgBABgBAAIgcAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgCQgRAIgTAAQgSAAgPgGg");
	this.shape_6.setTransform(96.8,-147.9);

	this.instance = new lib.bb_rare();
	this.instance.parent = this;
	this.instance.setTransform(21,-158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(21,-164.1,170.7,32.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBSQgDAAgBgEIgJgdIg3AAIgJAdQgBAEgDAAIgfAAQgFAAACgFIA5ibQABAAAAgBQABgBAAAAQAAgBABAAQAAAAABAAIAcAAQACAAACADIA4CcQABAEgEAAgAgRATIAjAAIgSg2g");
	this.shape.setTransform(114.8,-141.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBSQAAAAgBAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAhJIg8hRIgBgDQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAkAAQAEAAADAEIAgAzIAhgzQADgEADAAIAlAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIgBADIg8BSIAABIQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_1.setTransform(93.3,-141.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBPQgQgHgMgLQgNgMgHgPQgGgQAAgRQAAgSAGgPQAHgPANgNQAZgXAiAAQASAAAPAGQAPAGANALQAZAZAAAkQAAAkgZAYQgZAXgkAAQgQAAgPgFgAgigiQgOAPAAAUQAAAJADAJQAEAJAHAIQAHAHAJADQAJAEAJAAQAKAAAJgEQAJgDAHgHQAPgPAAgUQAAgKgEgJQgEgJgHgHQgPgPgUAAQgTAAgPAPg");
	this.shape_2.setTransform(76.2,-141.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBEQgCgDADgDIAQgRQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAEAEAFACQAEACAGAAQAMAAAHgIQAHgJAAgQIAAhiQAAgBAAgBQAAAAAAgBQABAAABgBQAAAAABAAIAdAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAABiQAAAQgEALQgFANgJAIQgRAPgaAAQgaAAgPgPg");
	this.shape_3.setTransform(59.9,-141.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBSIgDgBIhKhmIAABjQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgaAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAaAAIAEACIBJBlIAAhjQAAgEAEAAIAaAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(45.7,-141.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(30.2,-141.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(20,-158,104.6,32.1), null);


(lib.panda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_panda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panda, new cjs.Rectangle(0,0,728,166), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(637.8,-44.8,0.9,0.9,0,0,0,44.7,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(597.5,-65.6,80.6,41.6), null);


// stage content:
(lib._728x90_panda = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(69.8,129.1,1,1,0,0,0,44.8,23.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(186).to({_off:false},0).to({y:114.1,alpha:1},19,cjs.Ease.get(1)).wait(27));

	// Layer 5
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.4,170.9,1,1,0,0,0,50.4,10.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({y:155.9,alpha:1},19,cjs.Ease.get(1)).wait(31));

	// Layer 4
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,190,1,1,0,0,0,65,10);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({_off:false},0).to({y:175,alpha:1},19,cjs.Ease.get(1)).wait(31));

	// Layer 6
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(103,215.5,1,1,0,0,0,79,14.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(107.6,224.6,1,1,0,0,0,79.5,14.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},90).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({y:209.6,alpha:1},19,cjs.Ease.get(1)).wait(33));

	// Layer 3
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(58,217,1,1,0,0,0,32,11);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(84.5,191,1,1,0,0,0,60.5,13);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(91).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(55).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},4).wait(52));

	// Layer 2
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.3,190.6,1,1,0,0,0,52.2,16.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.9,216.9,1,1,0,0,0,93.8,16.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},11).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(54).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(52));

	// pandy
	this.instance_9 = new lib.panda();
	this.instance_9.parent = this;
	this.instance_9.setTransform(174.5,130.5,1,1,0,0,0,174.5,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:364,regY:83,x:364,y:7.1},0).wait(5).to({y:7.2},0).wait(2).to({y:7.3},0).wait(2).to({y:7.4},0).wait(1).to({y:7.5},0).wait(2).to({y:7.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.8},0).wait(1).to({y:7.9},0).wait(1).to({y:8},0).wait(1).to({y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.6},0).wait(1).to({y:8.7},0).wait(1).to({y:8.9},0).wait(1).to({y:9},0).wait(1).to({y:9.2},0).wait(1).to({y:9.4},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:11.1},0).wait(1).to({y:11.3},0).wait(1).to({y:11.6},0).wait(1).to({y:11.8},0).wait(1).to({y:12.1},0).wait(1).to({y:12.4},0).wait(1).to({y:12.6},0).wait(1).to({y:12.9},0).wait(1).to({y:13.2},0).wait(1).to({y:13.5},0).wait(1).to({y:13.8},0).wait(1).to({y:14.1},0).wait(1).to({y:14.5},0).wait(1).to({y:14.8},0).wait(1).to({y:15.1},0).wait(1).to({y:15.5},0).wait(1).to({y:15.8},0).wait(1).to({y:16.2},0).wait(1).to({y:16.5},0).wait(1).to({y:16.9},0).wait(1).to({y:17.3},0).wait(1).to({y:17.7},0).wait(1).to({y:18.1},0).wait(1).to({y:18.4},0).wait(1).to({y:18.8},0).wait(1).to({y:19.3},0).wait(1).to({y:19.7},0).wait(1).to({y:20.1},0).wait(1).to({y:20.5},0).wait(1).to({y:20.9},0).wait(1).to({y:21.4},0).wait(1).to({y:21.8},0).wait(1).to({y:22.3},0).wait(1).to({y:22.7},0).wait(1).to({y:23.2},0).wait(1).to({y:23.6},0).wait(1).to({y:24.1},0).wait(1).to({y:24.6},0).wait(1).to({y:25.1},0).wait(1).to({y:25.6},0).wait(1).to({y:26},0).wait(1).to({y:26.5},0).wait(1).to({y:27},0).wait(1).to({y:27.5},0).wait(1).to({y:28},0).wait(1).to({y:28.5},0).wait(1).to({y:29.1},0).wait(1).to({y:29.6},0).wait(1).to({y:30.1},0).wait(1).to({y:30.6},0).wait(1).to({y:31.2},0).wait(1).to({y:31.7},0).wait(1).to({y:32.2},0).wait(1).to({y:32.8},0).wait(1).to({y:33.3},0).wait(1).to({y:33.8},0).wait(1).to({y:34.4},0).wait(1).to({y:34.9},0).wait(1).to({y:35.5},0).wait(1).to({y:36},0).wait(1).to({y:36.6},0).wait(1).to({y:37.1},0).wait(1).to({y:37.7},0).wait(1).to({y:38.3},0).wait(1).to({y:38.8},0).wait(1).to({y:39.4},0).wait(1).to({y:39.9},0).wait(1).to({y:40.5},0).wait(1).to({y:41.1},0).wait(1).to({y:41.6},0).wait(1).to({y:42.2},0).wait(1).to({y:42.8},0).wait(1).to({y:43.3},0).wait(1).to({y:43.9},0).wait(1).to({y:44.4},0).wait(1).to({y:45},0).wait(1).to({y:45.6},0).wait(1).to({y:46.1},0).wait(1).to({y:46.7},0).wait(1).to({y:47.2},0).wait(1).to({y:47.8},0).wait(1).to({y:48.4},0).wait(1).to({y:48.9},0).wait(1).to({y:49.5},0).wait(1).to({y:50},0).wait(1).to({y:50.6},0).wait(1).to({y:51.1},0).wait(1).to({y:51.7},0).wait(1).to({y:52.2},0).wait(1).to({y:52.7},0).wait(1).to({y:53.3},0).wait(1).to({y:53.8},0).wait(1).to({y:54.3},0).wait(1).to({y:54.9},0).wait(1).to({y:55.4},0).wait(1).to({y:55.9},0).wait(1).to({y:56.4},0).wait(1).to({y:56.9},0).wait(1).to({y:57.5},0).wait(1).to({y:58},0).wait(1).to({y:58.5},0).wait(1).to({y:59},0).wait(1).to({y:59.5},0).wait(1).to({y:60},0).wait(1).to({y:60.4},0).wait(1).to({y:60.9},0).wait(1).to({y:61.4},0).wait(1).to({y:61.9},0).wait(1).to({y:62.4},0).wait(1).to({y:62.8},0).wait(1).to({y:63.3},0).wait(1).to({y:63.7},0).wait(1).to({y:64.2},0).wait(1).to({y:64.6},0).wait(1).to({y:65.1},0).wait(1).to({y:65.5},0).wait(1).to({y:66},0).wait(1).to({y:66.4},0).wait(1).to({y:66.8},0).wait(1).to({y:67.2},0).wait(1).to({y:67.6},0).wait(1).to({y:68},0).wait(1).to({y:68.4},0).wait(1).to({y:68.8},0).wait(1).to({y:69.2},0).wait(1).to({y:69.6},0).wait(1).to({y:70},0).wait(1).to({y:70.4},0).wait(1).to({y:70.7},0).wait(1).to({y:71.1},0).wait(1).to({y:71.5},0).wait(1).to({y:71.8},0).wait(1).to({y:72.2},0).wait(1).to({y:72.5},0).wait(1).to({y:72.8},0).wait(1).to({y:73.2},0).wait(1).to({y:73.5},0).wait(1).to({y:73.8},0).wait(1).to({y:74.1},0).wait(1).to({y:74.5},0).wait(1).to({y:74.8},0).wait(1).to({y:75.1},0).wait(1).to({y:75.3},0).wait(1).to({y:75.6},0).wait(1).to({y:75.9},0).wait(1).to({y:76.2},0).wait(1).to({y:76.5},0).wait(1).to({y:76.7},0).wait(1).to({y:77},0).wait(1).to({y:77.2},0).wait(1).to({y:77.5},0).wait(1).to({y:77.7},0).wait(1).to({y:78},0).wait(1).to({y:78.2},0).wait(1).to({y:78.4},0).wait(1).to({y:78.6},0).wait(1).to({y:78.8},0).wait(1).to({y:79.1},0).wait(1).to({y:79.3},0).wait(1).to({y:79.5},0).wait(1).to({y:79.6},0).wait(1).to({y:79.8},0).wait(1).to({y:80},0).wait(1).to({y:80.2},0).wait(1).to({y:80.4},0).wait(1).to({y:80.5},0).wait(1).to({y:80.7},0).wait(1).to({y:80.8},0).wait(1).to({y:81},0).wait(1).to({y:81.1},0).wait(1).to({y:81.3},0).wait(1).to({y:81.4},0).wait(1).to({y:81.5},0).wait(1).to({y:81.6},0).wait(1).to({y:81.8},0).wait(1).to({y:81.9},0).wait(1).to({y:82},0).wait(1).to({y:82.1},0).wait(1).to({y:82.2},0).wait(1).to({y:82.3},0).wait(1).to({y:82.4},0).wait(2).to({y:82.5},0).wait(1).to({y:82.6},0).wait(2).to({y:82.7},0).wait(1).to({y:82.8},0).wait(2).to({y:82.9},0).wait(3).to({y:83},0).wait(6).to({regX:174.5,regY:206.5,x:174.5,y:206.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-31,728,166);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_panda_atlas_.png", id:"728x90_panda_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;