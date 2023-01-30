(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_panda_atlas_P_", frames: [[99,0,121,26],[0,83,165,20],[99,28,64,22],[0,52,158,29],[0,0,97,50]]}
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
	this.spriteSheet = ss["300x600_panda_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_panda = function() {
	this.initialize(img.bb_panda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,718);


(lib.bb_previews = function() {
	this.spriteSheet = ss["300x600_panda_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_rare = function() {
	this.spriteSheet = ss["300x600_panda_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bb_spring = function() {
	this.spriteSheet = ss["300x600_panda_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.calzooLogo = function() {
	this.spriteSheet = ss["300x600_panda_atlas_P_"];
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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA9QAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIA1AAQASAAAMAMQAMAMAAATQAAARgMAMQgGAHgIADQgHADgJAAIgcAAIAAAiQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAgAgVABIAWAAQAJAAAGgEQADgCABgEQACgDAAgFQAAgFgCgEQgBgEgDgCQgDgDgEgBIgIgBIgWAAg");
	this.shape.setTransform(182.7,289.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKA9QgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAh1QAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAVAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAIAAB1QAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(173.7,289.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcA9QgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgwIgxAAIAAAwQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIgVAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAh1QAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAVAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAAvIAxAAIAAgvQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAVAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAB1QAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_2.setTransform(164.4,289.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7QgLgDgKgHQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAMgPQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAGAFAHACQAGADAIAAQAIAAAEgEQAFgDAAgGQAAgHgKgEIgJgDIgJgDQgRgHgHgFQgFgFgCgGQgDgGAAgIQAAgIADgGQAEgGAGgEQAGgFAIgCQAJgDAKAAQASAAATALQAAABABAAQAAAAAAABQAAAAAAABQAAAAgBABIgKAQQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgMgIgLAAQgJAAgEADQgFACAAAFQAAAGAMAFIALAEIAMAEQAOAFAHAIQAHAJAAANQAAAQgNAKQgHAGgIACQgJADgJAAQgMAAgKgEg");
	this.shape_3.setTransform(152.9,289.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA9QAAAAgBAAQAAAAgBAAQgBgBAAAAQAAgBgBAAIgTgoIgSAAIAAAoQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgWAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIA7AAQAPAAAMAMQAFAFADAIQADAHAAAIQAAANgHAKQgIAKgLAEIAVApIABACQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAgAgWgDIAcAAQAFAAAGgEQADgDABgDQACgDAAgEIgCgHIgEgGQgGgEgFAAIgcAAg");
	this.shape_4.setTransform(142.3,289.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA9QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIBZAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIhAAAIAAAaIA2AAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAASQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIg2AAIAAAbIBAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_5.setTransform(130.9,289.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA9QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAh1QAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAoAAQANAAAKAGQAPAIAAARQAAASgPAIIgBAAQANADAHAIQAGAIAAAMQAAAQgOAKQgMAHgRAAgAgSAmIASAAQAHAAAFgDQAGgDAAgHQAAgOgXAAIgNAAgAgSgLIAGAAQAUAAAAgPQAAgGgFgDQgDgCgFAAIgNAAg");
	this.shape_6.setTransform(119.7,289.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnA9QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhHIgZApIgCADIgQAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIgYgpIAABHQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAWAAIADACIAhA6IAig6IADgCIAWAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAB1QAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(106.2,289.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA9QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIBYAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIAAAaIA2AAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAASQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIg2AAIAAAbIA/AAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAg");
	this.shape_8.setTransform(93.7,289.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA9QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhHIgZApIgCADIgRAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIgZgpIAABHQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAWAAIADACIAhA6IAig6IACgCIAXAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAB1QAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_9.setTransform(80,289.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfA9QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIgHgWIgpAAIgHAWQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgXAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBIArhzQAAgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAVAAQABAAAAABQAAAAABAAQAAABABAAQAAABAAABIAqB0QAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAgAgMAOIAaAAIgOgpg");
	this.shape_10.setTransform(62,289.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA9QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIBYAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIhAAAIAAAaIA2AAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAASQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIg2AAIAAAbIBAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_11.setTransform(46.7,289.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMA+QAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgrh1QAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAYAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAABIAcBXIAchXQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAYAAIACAAIAAACIgrB1QAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_12.setTransform(34.8,289.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKA9QgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAh1QAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAVAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAB1QAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(26.3,289.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTA6QgLgEgJgJQgKgKgEgKQgEgMAAgNQAAgMAEgMQAFgKAJgJQAJgKALgFQALgEANAAQATAAATAMQABABAAAAQABABAAAAQAAABAAAAQgBAAAAABIgLASQAAAAgBAAQAAABgBAAQAAAAgBAAQAAgBgBAAQgGgEgGgCQgHgDgFAAQgOAAgLAMQgFAFgDAGQgCAHAAAHQAAAPAKAMQALALAOgBQARABAKgJIAAgJIgXAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgTQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAvAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIAAA8QAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgWAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgBQgNAGgOAAQgMAAgMgFg");
	this.shape_14.setTransform(16.6,289.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("Av7izIf3AAIAAFnI/3AAg");
	this.shape_15.setTransform(102,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1,271,206,38), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(0,255,0.924,0.924);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,255,89.6,46.2), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_previews();
	this.instance.parent = this;
	this.instance.setTransform(0,263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,263,165,20), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA9QgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAIAAhgIgfAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgTQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIBZAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIggAAIAABgQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape.setTransform(121.5,269.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrA9QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAIBYAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIhAAAIAAAaIA2AAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAASQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIg2AAIAAAbIBAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(111.8,269.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTA6QgLgEgJgJQgKgKgEgKQgFgMABgNQgBgMAFgMQAFgKAJgJQAJgKAMgFQALgEAMAAQATAAATAMQABABAAAAQABABAAAAQAAABAAAAQgBAAAAABIgLASQAAAAgBAAQAAABgBAAQAAAAgBAAQAAgBgBAAQgGgEgGgCQgGgDgGAAQgOAAgKAMQgFAFgEAGQgCAHAAAHQAAAPALAMQAKALAOAAQAQAAALgJIAAgKIgXAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgTQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIAuAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABIAAA8QAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgUAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgBQgNAGgOAAQgNAAgLgFg");
	this.shape_2.setTransform(98.7,269.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA7QgLgDgKgHQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAMgPQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAGAFAHACQAGADAIAAQAIAAAEgEQAFgDAAgGQAAgHgKgEIgJgDIgJgDQgRgHgHgFQgFgFgCgGQgDgGAAgIQAAgIADgGQAEgGAGgEQAGgFAIgCQAJgDAKAAQASAAATALQAAABABAAQAAAAAAABQAAAAAAABQAAAAgBABIgKAQQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgMgIgLAAQgJAAgEADQgFACAAAFQAAAGAMAFIALAEIAMAEQAOAFAHAIQAHAJAAANQAAAQgNAKQgHAGgIACQgJADgJAAQgMAAgKgEg");
	this.shape_3.setTransform(82.5,269.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA9QAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIgTgoIgSAAIAAAoQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIgWAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIA7AAQAPAAAMAMQAFAFADAIQADAHAAAIQAAANgHAKQgIAKgLAEIAVApIABACQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAgAgWgDIAcAAQAFAAAGgEQADgDABgDQACgDAAgEIgCgHIgEgGQgGgEgFAAIgcAAg");
	this.shape_4.setTransform(71.9,269.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA9QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIBYAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIAAAaIA2AAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAASQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIg2AAIAAAbIA/AAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAg");
	this.shape_5.setTransform(60.5,269.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA9QgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAIAAh1QAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAoAAQANAAAKAGQAPAIAAARQAAASgPAIIgBAAQANADAHAIQAGAIAAAMQAAAQgOAKQgMAHgRAAgAgSAmIASAAQAHAAAFgDQAGgDAAgHQAAgOgXAAIgNAAgAgSgLIAGAAQAUAAAAgPQAAgGgFgDQgDgCgFAAIgNAAg");
	this.shape_6.setTransform(49.3,269.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmA9QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhHIgZApIgCADIgQAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIgYgpIAABHQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAXAAIACACIAhA6IAig6IADgCIAWAAQABAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAB1QAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_7.setTransform(35.8,269.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA9QAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIBYAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg/AAIAAAaIA2AAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAASQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIg2AAIAAAbIA/AAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAATQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBAAg");
	this.shape_8.setTransform(23.2,269.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAnA9QgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhHIgZApIgCADIgQAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIgYgpIAABHQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAIgVAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAh1QAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAXAAIACACIAhA6IAig6IADgCIAWAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAAB1QAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_9.setTransform(9.6,269.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,257.2,128.3,25.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAgZQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB3AAQADAAAAAEIAAAZQAAADgDAAIgrAAIAAB/QAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(179.3,294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQAAAAgBgBQAAAAAAgBQgBAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(166.4,294);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaBSQgEAAgCgEIgag0IgYAAIAAA0QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIBOAAQAUAAAPAQQAIAIAEAJQAEAKAAALQAAARgKANQgKAPgPAFIAcA2IACADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAgAgegFIAmAAQAHAAAHgFQAEgDACgFQACgEAAgFQAAgFgCgEQgCgFgEgDQgHgFgHAAIgmAAg");
	this.shape_2.setTransform(152.3,294);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_3.setTransform(140.2,294);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BSQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIBtAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAAAZQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBAAIhNAAIAAAiIBCAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAYQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhCAAIAAA/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(130.2,294);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIghA3QgBABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAgBIghg3IAABeQAAAEgDAAIgbAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAdAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_5.setTransform(106,294);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_6.setTransform(89.3,294);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAg/IhBAAIAAA/QAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgcAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAA+IBBAAIAAg+QAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_7.setTransform(72.4,294);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBSQAAAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh/IgqAAQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgZQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB2AAQAFAAAAAEIAAAZQAAADgFAAIgpAAIAAB/QAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_8.setTransform(57.5,294);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_9.setTransform(38.3,294);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_10.setTransform(23.5,294);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_11.setTransform(8.7,294);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,277.9,187.6,32.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_members();
	this.instance.parent = this;
	this.instance.setTransform(0,275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,275,121,26), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_spring();
	this.instance.parent = this;
	this.instance.setTransform(-1,285);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,285,158,29), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape.setTransform(160.7,259.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeBPQgOgEgNgKQgBAAAAgBQAAAAgBgBQAAAAABgBQAAgBAAAAIARgVQACgDADACQAIAGAJAEQAJADAJAAQAMAAAGgFQAGgEAAgJQAAgJgOgFIgLgEIgNgEQgXgJgJgHQgGgHgDgIQgEgIAAgLQAAgKAEgIQAFgIAIgGQAIgGALgDQAMgEANAAQAYAAAZAPQADABgCAEIgOAWQgCADgDgCQgQgKgPAAQgLAAgGADQgGADgBAGQAAAJAQAGIAPAFIARAGQASAGAJALQAJAMAAARQAAAWgRAOQgJAHgLADQgLAEgNAAQgQAAgOgFg");
	this.shape_1.setTransform(145.9,259.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABAAIBGAAQAYAAAQARQAQAQAAAZQAAAXgQARQgIAIgKAEQgKAEgMAAIgmAAIAAAtQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAgAgdACIAeAAQAMAAAIgGQAEgDACgFQACgFAAgGQAAgHgCgFQgCgFgEgDQgEgDgFgCQgEgBgHAAIgeAAg");
	this.shape_2.setTransform(131.9,259.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBSQgBAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAheIgiA3QAAABAAABQgBAAAAABQgBAAAAABQAAAAAAAAIgXAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAgBIghg3IAABeQAAAEgDAAIgbAAQgBAAgBAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQABAAABAAIAdAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAABIAtBNIAthNQAAgBABgBQAAAAABgBQAAAAABgBQAAAAABAAIAdAAQABAAABAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQgBAAgBAAg");
	this.shape_3.setTransform(113.4,259.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAbAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAACbQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_4.setTransform(99.7,259.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBSQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAibQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAcAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAB/IA5AAQABAAABAAQAAABABAAQAAAAABABQAAABAAAAIAAAZQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(90.9,259.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBOQgQgGgLgMQgNgNgGgOQgGgQAAgRQAAgRAHgOQAFgPANgMQANgNAPgGQAOgGARAAQAaAAAZARQABAAAAABQABAAAAABQAAAAAAABQAAABgBAAIgPAYQgBACgEgBQgIgHgJgCQgIgDgHAAQgTAAgOAPQgHAHgEAJQgDAIAAAKQAAAVAOAOQAOAPATAAQAWAAANgKIAAgOIgdAAQgEAAgBgDIAAgaQABgEAEAAIA+AAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAAAIgdAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAgBQgRAHgSAAQgSAAgOgGg");
	this.shape_6.setTransform(74.7,259.4);

	this.instance = new lib.bb_rare();
	this.instance.parent = this;
	this.instance.setTransform(0,248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,243.2,169.6,32.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApBSQgDAAgBgEIgJgdIg3AAIgJAdQgBAEgDAAIgfAAQgFAAACgFIA5ibQABAAAAgBQABgBAAAAQAAgBABAAQAAAAABAAIAcAAQACAAACADIA4CcQABAEgEAAgAgRATIAjAAIgSg2g");
	this.shape.setTransform(94.8,263.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBSQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBIAAhJIg8hRIgBgDQAAAAABgBQAAAAAAAAQAAAAABgBQAAAAABAAIAkAAQAEAAADAEIAgAzIAhgzQADgEADAAIAlAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIgBADIg8BSIAABIQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_1.setTransform(73.3,263.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBPQgPgHgMgLQgNgMgHgPQgGgQAAgRQAAgSAGgPQAHgPANgNQAZgXAiAAQASAAAPAGQAPAGANALQAZAZAAAkQAAAkgZAYQgZAXgkAAQgQAAgQgFgAgigiQgOAPAAAUQAAAJAEAJQADAJAHAIQAIAHAIADQAJAEAJAAQALAAAIgEQAJgDAHgHQAOgPAAgUQAAgKgDgJQgEgJgHgHQgPgPgUAAQgTAAgPAPg");
	this.shape_2.setTransform(56.2,263.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBEQgCgDADgDIAQgRQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAEAEAFACQAEACAGAAQAMAAAHgIQAHgJAAgQIAAhiQAAgBAAgBQAAAAAAgBQABAAABgBQAAAAABAAIAdAAQAAAAABAAQABABAAAAQABABAAAAQAAABAAABIAABiQAAAQgEALQgFANgJAIQgRAPgaAAQgaAAgPgPg");
	this.shape_3.setTransform(39.9,263.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBSIgDgBIhKhmIAABjQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgaAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAibQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAaAAIAEACIBJBlIAAhjQAAgEAEAAIAaAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAACbQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape_4.setTransform(25.7,263.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BSQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBIAAibQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIB1AAQABAAABAAQAAABABAAQAAABAAAAQAAABAAABIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIhVAAIAAAiIBIAAQAEAAAAADIAAAYQAAADgEAAIhIAAIAAAjIBVAAQABAAABAAQAAABABAAQAAAAAAABQAAABAAAAIAAAZQAAABAAABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_5.setTransform(10.2,263.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,247.5,104.6,32.1), null);


(lib.panda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bb_panda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panda, new cjs.Rectangle(0,0,504,718), null);


// stage content:
(lib._300x600_panda = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(69.8,129.1,1,1,0,0,0,44.8,23.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185).to({_off:false},0).to({y:114.1,alpha:1},19,cjs.Ease.get(1)).wait(31));

	// Layer 5
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.4,170.9,1,1,0,0,0,50.4,10.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(183).to({_off:false},0).to({y:155.9,alpha:1},19,cjs.Ease.get(1)).wait(33));

	// Layer 4
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(93,190,1,1,0,0,0,65,10);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({_off:false},0).to({y:175,alpha:1},19,cjs.Ease.get(1)).wait(35));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(45).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},90).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179).to({_off:false},0).to({y:209.6,alpha:1},19,cjs.Ease.get(1)).wait(37));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(55).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},4).wait(56));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(46).to({alpha:0},14,cjs.Ease.get(1)).to({_off:true},10).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).wait(54).to({alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// pandy
	this.instance_9 = new lib.panda();
	this.instance_9.parent = this;
	this.instance_9.setTransform(128,154,1,1,0,0,0,174.5,206.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:252,regY:359,x:205.5,y:306.6},0).wait(3).to({x:205.4},0).wait(2).to({x:205.3},0).wait(1).to({x:205.2,y:306.7},0).wait(1).to({x:205.1},0).wait(1).to({x:205},0).wait(1).to({x:204.9,y:306.8},0).wait(1).to({x:204.7},0).wait(1).to({x:204.6,y:306.9},0).wait(1).to({x:204.4,y:307},0).wait(1).to({x:204.2},0).wait(1).to({x:204,y:307.1},0).wait(1).to({x:203.8,y:307.2},0).wait(1).to({x:203.5},0).wait(1).to({x:203.3,y:307.3},0).wait(1).to({x:203,y:307.4},0).wait(1).to({x:202.8,y:307.5},0).wait(1).to({x:202.5,y:307.6},0).wait(1).to({x:202.2,y:307.7},0).wait(1).to({x:201.8,y:307.8},0).wait(1).to({x:201.5,y:307.9},0).wait(1).to({x:201.2,y:308.1},0).wait(1).to({x:200.8,y:308.2},0).wait(1).to({x:200.4,y:308.3},0).wait(1).to({x:200,y:308.4},0).wait(1).to({x:199.6,y:308.6},0).wait(1).to({x:199.2,y:308.7},0).wait(1).to({x:198.8,y:308.9},0).wait(1).to({x:198.3,y:309},0).wait(1).to({x:197.8,y:309.2},0).wait(1).to({x:197.4,y:309.4},0).wait(1).to({x:196.9,y:309.5},0).wait(1).to({x:196.3,y:309.7},0).wait(1).to({x:195.8,y:309.9},0).wait(1).to({x:195.3,y:310.1},0).wait(1).to({x:194.7,y:310.3},0).wait(1).to({x:194.2,y:310.4},0).wait(1).to({x:193.6,y:310.6},0).wait(1).to({x:193,y:310.9},0).wait(1).to({x:192.4,y:311.1},0).wait(1).to({x:191.7,y:311.3},0).wait(1).to({x:191.1,y:311.5},0).wait(1).to({x:190.5,y:311.7},0).wait(1).to({x:189.8,y:311.9},0).wait(1).to({x:189.1,y:312.2},0).wait(1).to({x:188.4,y:312.4},0).wait(1).to({x:187.7,y:312.7},0).wait(1).to({x:187,y:312.9},0).wait(1).to({x:186.2,y:313.2},0).wait(1).to({x:185.5,y:313.4},0).wait(1).to({x:184.7,y:313.7},0).wait(1).to({x:183.9,y:313.9},0).wait(1).to({x:183.2,y:314.2},0).wait(1).to({x:182.4,y:314.5},0).wait(1).to({x:181.5,y:314.8},0).wait(1).to({x:180.7,y:315.1},0).wait(1).to({x:179.9,y:315.3},0).wait(1).to({x:179,y:315.6},0).wait(1).to({x:178.2,y:315.9},0).wait(1).to({x:177.3,y:316.2},0).wait(1).to({x:176.4,y:316.5},0).wait(1).to({x:175.5,y:316.8},0).wait(1).to({x:174.6,y:317.2},0).wait(1).to({x:173.7,y:317.5},0).wait(1).to({x:172.7,y:317.8},0).wait(1).to({x:171.8,y:318.1},0).wait(1).to({x:170.8,y:318.4},0).wait(1).to({x:169.9,y:318.8},0).wait(1).to({x:168.9,y:319.1},0).wait(1).to({x:167.9,y:319.4},0).wait(1).to({x:166.9,y:319.8},0).wait(1).to({x:165.9,y:320.1},0).wait(1).to({x:164.9,y:320.5},0).wait(1).to({x:163.9,y:320.8},0).wait(1).to({x:162.9,y:321.2},0).wait(1).to({x:161.8,y:321.5},0).wait(1).to({x:160.8,y:321.9},0).wait(1).to({x:159.7,y:322.2},0).wait(1).to({x:158.7,y:322.6},0).wait(1).to({x:157.6,y:323},0).wait(1).to({x:156.5,y:323.3},0).wait(1).to({x:155.5,y:323.7},0).wait(1).to({x:154.4,y:324.1},0).wait(1).to({x:153.3,y:324.5},0).wait(1).to({x:152.2,y:324.8},0).wait(1).to({x:151.1,y:325.2},0).wait(1).to({x:150,y:325.6},0).wait(1).to({x:148.9,y:326},0).wait(1).to({x:147.7,y:326.3},0).wait(1).to({x:146.6,y:326.7},0).wait(1).to({x:145.5,y:327.1},0).wait(1).to({x:144.4,y:327.5},0).wait(1).to({x:143.3,y:327.9},0).wait(1).to({x:142.1,y:328.3},0).wait(1).to({x:141,y:328.7},0).wait(1).to({x:139.9,y:329},0).wait(1).to({x:138.7,y:329.4},0).wait(1).to({x:137.6,y:329.8},0).wait(1).to({x:136.4,y:330.2},0).wait(1).to({x:135.3,y:330.6},0).wait(1).to({x:134.2,y:331},0).wait(1).to({x:133,y:331.4},0).wait(1).to({x:131.9,y:331.8},0).wait(1).to({x:130.7,y:332.2},0).wait(1).to({x:129.6,y:332.6},0).wait(1).to({x:128.5,y:333},0).wait(1).to({x:127.3,y:333.3},0).wait(1).to({x:126.2,y:333.7},0).wait(1).to({x:125.1,y:334.1},0).wait(1).to({x:123.9,y:334.5},0).wait(1).to({x:122.8,y:334.9},0).wait(1).to({x:121.7,y:335.3},0).wait(1).to({x:120.6,y:335.7},0).wait(1).to({x:119.4,y:336},0).wait(1).to({x:118.3,y:336.4},0).wait(1).to({x:117.2,y:336.8},0).wait(1).to({x:116.1,y:337.2},0).wait(1).to({x:115,y:337.6},0).wait(1).to({x:113.9,y:337.9},0).wait(1).to({x:112.8,y:338.3},0).wait(1).to({x:111.7,y:338.7},0).wait(1).to({x:110.7,y:339},0).wait(1).to({x:109.6,y:339.4},0).wait(1).to({x:108.5,y:339.8},0).wait(1).to({x:107.5,y:340.1},0).wait(1).to({x:106.4,y:340.5},0).wait(1).to({x:105.4,y:340.9},0).wait(1).to({x:104.3,y:341.2},0).wait(1).to({x:103.3,y:341.6},0).wait(1).to({x:102.3,y:341.9},0).wait(1).to({x:101.3,y:342.3},0).wait(1).to({x:100.2,y:342.6},0).wait(1).to({x:99.2,y:343},0).wait(1).to({x:98.3,y:343.3},0).wait(1).to({x:97.3,y:343.6},0).wait(1).to({x:96.3,y:344},0).wait(1).to({x:95.3,y:344.3},0).wait(1).to({x:94.4,y:344.6},0).wait(1).to({x:93.4,y:345},0).wait(1).to({x:92.5,y:345.3},0).wait(1).to({x:91.6,y:345.6},0).wait(1).to({x:90.6,y:345.9},0).wait(1).to({x:89.7,y:346.2},0).wait(1).to({x:88.8,y:346.5},0).wait(1).to({x:87.9,y:346.8},0).wait(1).to({x:87,y:347.1},0).wait(1).to({x:86.2,y:347.4},0).wait(1).to({x:85.3,y:347.7},0).wait(1).to({x:84.5,y:348},0).wait(1).to({x:83.6,y:348.3},0).wait(1).to({x:82.8,y:348.6},0).wait(1).to({x:82,y:348.9},0).wait(1).to({x:81.2,y:349.1},0).wait(1).to({x:80.4,y:349.4},0).wait(1).to({x:79.6,y:349.7},0).wait(1).to({x:78.8,y:350},0).wait(1).to({x:78.1,y:350.2},0).wait(1).to({x:77.3,y:350.5},0).wait(1).to({x:76.6,y:350.7},0).wait(1).to({x:75.8,y:351},0).wait(1).to({x:75.1,y:351.2},0).wait(1).to({x:74.4,y:351.5},0).wait(1).to({x:73.7,y:351.7},0).wait(1).to({x:73,y:351.9},0).wait(1).to({x:72.3,y:352.2},0).wait(1).to({x:71.7,y:352.4},0).wait(1).to({x:71,y:352.6},0).wait(1).to({x:70.4,y:352.8},0).wait(1).to({x:69.8,y:353.1},0).wait(1).to({x:69.1,y:353.3},0).wait(1).to({x:68.5,y:353.5},0).wait(1).to({x:67.9,y:353.7},0).wait(1).to({x:67.3,y:353.9},0).wait(1).to({x:66.8,y:354.1},0).wait(1).to({x:66.2,y:354.3},0).wait(1).to({x:65.7,y:354.5},0).wait(1).to({x:65.1,y:354.6},0).wait(1).to({x:64.6,y:354.8},0).wait(1).to({x:64.1,y:355},0).wait(1).to({x:63.6,y:355.2},0).wait(1).to({x:63.1,y:355.3},0).wait(1).to({x:62.6,y:355.5},0).wait(1).to({x:62.1,y:355.7},0).wait(1).to({x:61.7,y:355.8},0).wait(1).to({x:61.2,y:356},0).wait(1).to({x:60.8,y:356.1},0).wait(1).to({x:60.4,y:356.3},0).wait(1).to({x:60,y:356.4},0).wait(1).to({x:59.6,y:356.5},0).wait(1).to({x:59.2,y:356.7},0).wait(1).to({x:58.8,y:356.8},0).wait(1).to({x:58.4,y:356.9},0).wait(1).to({x:58.1,y:357.1},0).wait(1).to({x:57.7,y:357.2},0).wait(1).to({x:57.4,y:357.3},0).wait(1).to({x:57.1,y:357.4},0).wait(1).to({x:56.8,y:357.5},0).wait(1).to({x:56.4,y:357.6},0).wait(1).to({x:56.2,y:357.7},0).wait(1).to({x:55.9,y:357.8},0).wait(1).to({x:55.6,y:357.9},0).wait(1).to({x:55.3,y:358},0).wait(1).to({x:55.1,y:358.1},0).wait(1).to({x:54.9,y:358.2},0).wait(1).to({x:54.6},0).wait(1).to({x:54.4,y:358.3},0).wait(1).to({x:54.2,y:358.4},0).wait(1).to({x:54},0).wait(1).to({x:53.8,y:358.5},0).wait(1).to({x:53.7,y:358.6},0).wait(1).to({x:53.5},0).wait(1).to({x:53.3,y:358.7},0).wait(1).to({x:53.2},0).wait(1).to({x:53.1,y:358.8},0).wait(1).to({x:52.9},0).wait(1).to({x:52.8},0).wait(1).to({x:52.7,y:358.9},0).wait(1).to({x:52.6},0).wait(2).to({x:52.5,y:359},0).wait(1).to({x:52.4},0).wait(2).to({x:52.3},0).wait(4).to({regX:174.5,regY:206.5,x:-25.3,y:206.5},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.5,247.5,504,718);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bb_panda.jpg", id:"bb_panda"},
		{src:"images/300x600_panda_atlas_P_.png", id:"300x600_panda_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;