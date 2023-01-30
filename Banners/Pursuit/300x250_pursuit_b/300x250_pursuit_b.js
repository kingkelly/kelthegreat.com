(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_pursuit_b_atlas_", frames: [[302,252,300,250],[302,0,300,250],[0,252,300,250],[0,0,300,250],[604,0,300,250]]}
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



(lib.photo1 = function() {
	this.spriteSheet = ss["300x250_pursuit_b_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo2 = function() {
	this.spriteSheet = ss["300x250_pursuit_b_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo3 = function() {
	this.spriteSheet = ss["300x250_pursuit_b_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo4 = function() {
	this.spriteSheet = ss["300x250_pursuit_b_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo5 = function() {
	this.spriteSheet = ss["300x250_pursuit_b_atlas_"];
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


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZA5IALgNQAZAXAfAAQAQAAAKgHQAKgJAAgMIAAAAQAAgMgIgGQgKgIgYgEQgdgHgMgJQgOgLAAgTIAAgBQAAgTAPgNQAQgMAXAAQAfgBAaAVIgLANQgWgRgZAAQgPAAgKAHQgJAIAAALIAAABQAAAMAIAHQAKAHAaAGQAbAFANAKQANALAAASIAAAAQAAAWgQAMQgPAMgZAAQglAAgdgagACIBRIAAiCIg7BWIgBAAIg7hWIAACCIgRAAIAAihIASAAIA7BYIA7hYIASAAIAAChg");
	this.shape.setTransform(163,8,0.286,0.286);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQCXQgQgVgXgLQgZgKgaAFQgZAEgTARIDOlEQAIgMANAGQANAFgEAOIhXF2QgBgZgOgWg");
	this.shape_1.setTransform(128.8,8.6,0.286,0.286);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsDEQgNgFADgOIBWl2QABAZAPAVQAPAWAYAKQAZALAagFQAagFAUgSIjQFGQgFAIgIAAQgDAAgEgCg");
	this.shape_2.setTransform(125.4,20.2,0.286,0.286);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBEsIAAndIi2AAIAAh6IHvAAIAAB6Ii2AAIAAHdg");
	this.shape_3.setTransform(147,14.2,0.286,0.286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai/DtQhFhFAAiCIAAlWICEAAIAAFTQAABHAiAnQAiAlA8AAQA9AAAigkQAiglAAhGIAAlXICEAAIAAFSQAACFhHBGQhEBEh7AAQh7gBhDhDg");
	this.shape_4.setTransform(106.9,14.4,0.286,0.286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah0EcQhDgYg1gwIBOhdQArAjApASQAuAUAwAAQAoAAAXgPQAXgPAAgbIAAgBQAAgagXgPQgZgRhIgTQhngagpgfQg2gqAAhTIAAgCQAAhRA7gyQA6gxBdAAQB+AABfBMIhEBjQhVg7hGAAQglAAgVAPQgTAPAAAWIAAACQAAAdAaAPQAYAOBOAVQBiAZArAlQAxAqAABLIAAABQAABYg9AyQg8AwhjAAQhEAAhBgYg");
	this.shape_5.setTransform(82.2,14.2,0.286,0.286);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABpEsIiAjAIhnAAIAADAIiEAAIAApXIERAAQBxAAA+A9QAzAzAABWIAAACQAABGgjAvQghAtg9AXICTDWgAh+gIICFAAQAvAAAbgXQAagXABgmIAAgCQgBgqgbgWQgbgWgxAAIiCAAg");
	this.shape_6.setTransform(59,14.2,0.286,0.286);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai/DtQhFhFAAiCIAAlWICEAAIAAFTQAABHAiAnQAiAlA8AAQA9AAAigkQAiglAAhGIAAlXICEAAIAAFSQAACFhHBGQhEBEh7AAQh7gBhDhDg");
	this.shape_7.setTransform(32.9,14.4,0.286,0.286);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjsEsIAApXID0AAQBqAAA+A6QA9A4AABdIAAACQAABjhGA5QhDA2hoAAIhkAAIAAC0gAhoADIBoAAQAwAAAcgZQAcgaAAgnIAAgCQAAgsgdgYQgcgXgxAAIhmAAg");
	this.shape_8.setTransform(8.7,14.2,0.286,0.286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,2.9,165.5,23);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAhAIAACB");
	this.shape.setTransform(0,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAACNIAAkZ");
	this.shape_1.setTransform(0,46.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAADRIAAmh");
	this.shape_2.setTransform(0,46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAENIAAoZ");
	this.shape_3.setTransform(0,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFBIAAqB");
	this.shape_4.setTransform(0,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAFtIAArZ");
	this.shape_5.setTransform(0,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAGRIAAsh");
	this.shape_6.setTransform(0,46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAGtIAAtZ");
	this.shape_7.setTransform(0,46.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAHBIAAuB");
	this.shape_8.setTransform(0,46.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAHNIAAuZ");
	this.shape_9.setTransform(0,46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAnQIAAOh");
	this.shape_10.setTransform(0,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,39,2,15);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAxIgMgCIgLgGIgKgHIAPgSQAFAEAKAFQAGACAKABQAGAAADgCQACgCAAgCIAAgBQABgDgEgCIgMgEIgPgEQgHgDgFgDQgFgDgCgEQgDgGAAgHIAAgBQAAgGADgGQACgFAFgFQAFgEAHgDQAHgBAIAAIAMAAIAKACIAJAFIAJAFIgOATQgGgEgHgCQgIgDgFAAQgEAAgDACQgDABAAADIAAAAQAAAEAEACQADABAJADIAQAEIALAGQAFADACAEQADAGAAAHIAAAAQAAAHgDAGQgDAGgFAEQgGAFgGACQgIABgJAAIgMgBg");
	this.shape.setTransform(199.4,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAxIAAhhIBOAAIAAAXIgzAAIAAAPIAuAAIAAAVIguAAIAAAPIA0AAIAAAXg");
	this.shape_1.setTransform(190.4,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAxIgTgdIgMAAIAAAdIgbAAIAAhhIAtAAQAIAAALADIAIADIAFAEQAFAFACAFQACAGAAAIQAAAFgCAFQgBAEgDAEIgGAGIgIAFIAXAigAgRgBIARAAQAHAAAEgDQAEgDAAgGIAAAAQAAgGgEgDQgEgCgHAAIgRAAg");
	this.shape_2.setTransform(180.9,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAvIgIgDIgHgFIgEgHIgFgHIgCgKIgBgKIAAg2IAcAAIAAA1QAAAFABAEQABAEADADQACADADABQAEABADAAQAEAAAEgBQADgBACgCQACgDACgEIABgJIAAg2IAbAAIAAA1IAAALIgCAKIgFAHIgFAHIgHAFIgIADQgMADgGAAQgMgBgGgCg");
	this.shape_3.setTransform(170.3,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAxIAAhJIgeAAIAAgYIBVAAIAAAYIgdAAIAABJg");
	this.shape_4.setTransform(160.4,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXAxIgpg1IAAA1IgbAAIAAhhIAZAAIAoAzIAAgzIAaAAIAABhg");
	this.shape_5.setTransform(150.3,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAxIAAhhIBOAAIAAAXIgzAAIAAAPIAuAAIAAAVIguAAIAAAPIA0AAIAAAXg");
	this.shape_6.setTransform(140.3,8.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAxIgnhhIAeAAIAVA9IAWg9IAeAAIgnBhg");
	this.shape_7.setTransform(130.2,8.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguAxIAAhhIAmAAIAMABIALACIAJAFIAIAGIAGAGQADAEACAFIADAJIABAKIgBAKIgDAKIgFAIIgGAHIgIAGIgKAFIgLACIgLABgAgSAZIALAAQAGAAAEgCQAFgBADgDQAEgEACgEQACgFAAgGQAAgFgCgFQgCgEgEgEQgDgDgFgBQgEgCgGAAIgLAAg");
	this.shape_8.setTransform(119.7,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaAxIgIgRIgkAAIgHARIgdAAIAqhhIAZAAIAqBhgAALALIgLgbIgKAbIAVAAg");
	this.shape_9.setTransform(108.6,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAyIgJgDQgFgCgEgDIgIgFIgGgIQgCgEgCgEIgDgKIgBgKIAAgBIABgKIADgJIAEgJQADgEADgDIAIgGIAJgFIAJgDIAKgBQAIAAAGABIALAEIAJAHIAIAIIgUARQgFgGgEgDQgGgDgHAAQgEAAgFACQgDACgEADQgDAEgBAEIgCAKIAAAAQAAAFACAGQABAEADAEQAEADADACQAFACAEAAIAHgBIAGgCQAEgDAGgGIAUAPIgIAJQgFAEgFACQgEAEgHABQgGACgJAAIgJgBg");
	this.shape_10.setTransform(94.3,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNAxIAAhhIAbAAIAABhg");
	this.shape_11.setTransform(86.7,8.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXAxIgpg1IAAA1IgbAAIAAhhIAZAAIAoAzIAAgzIAaAAIAABhg");
	this.shape_12.setTransform(79,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAyIgKgDIgJgFIgIgGIgGgHQgDgEgCgFIgDgJIgBgKIAAgBIABgKIADgJIAFgJIAGgHIAIgGIAJgFIAKgDIAKgBIALABIAKADIAJAFIAIAGQADADADAEIAFAJIADAJIABAKIAAAAIgBAKIgDAKIgFAJIgGAHIgIAGIgJAFIgKADIgLABIgKgBgAgJgXQgFABgDAEQgEAEgBAEQgCAGAAAEIAAAAQAAAFACAFQACAFADAEQADADAFACQAFACAEAAQAFAAAFgCQAFgCADgDIAFgIIACgKIAAgBQAAgEgCgFQgCgFgDgEQgEgEgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_13.setTransform(67.7,8.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAyIgKgDQgEgCgEgDIgHgFIgHgIQgCgEgCgEIgDgKIgBgKIAAgBIABgKIACgJIAFgJQADgEAEgDIAHgGIAJgFIAKgDIAKgBQAHAAAGABIAMAEIAJAHIAHAIIgVARQgEgGgFgDQgFgDgHAAQgEAAgEACQgFACgCADQgEAEgCAEIgBAKIAAAAQAAAFABAGQACAEAEAEQACADAFACQAEACAEAAIAHgBIAGgCQAFgDAEgGIAVAPIgIAJQgEAEgFACQgGAEgGABQgHACgHAAIgKgBg");
	this.shape_14.setTransform(57,8.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAxIAAhhIAbAAIAABhg");
	this.shape_15.setTransform(49.4,8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAxIgTgdIgMAAIAAAdIgbAAIAAhhIAtAAQAIAAALADIAIADIAFAEQAFAFACAFQACAGAAAIQAAAFgCAFQgBAEgDAEIgGAGIgIAFIAXAigAgRgBIARAAQAHAAAEgDQAEgDAAgGIAAAAQAAgGgEgDQgEgCgHAAIgRAAg");
	this.shape_16.setTransform(38.6,8.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSAvIgIgDIgHgFIgEgHIgFgHIgCgKIgBgKIAAg2IAcAAIAAA1QAAAFABAEQABAEADADQACADADABQAEABADAAQAEAAAEgBQADgBACgCQACgDACgEIABgJIAAg2IAbAAIAAA1IAAALIgCAKIgFAHIgFAHIgGAFIgJADQgMADgGAAQgMgBgGgCg");
	this.shape_17.setTransform(28,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAyIgKgDIgJgFIgIgGIgGgHQgDgEgCgFIgDgJIgBgKIAAgBIABgKIADgJIAFgJIAGgHIAIgGIAJgFIAKgDIAKgBIALABIAKADIAJAFIAIAGQADADADAEIAFAJIADAJIABAKIAAAAIgBAKIgDAKIgFAJIgGAHIgIAGIgJAFIgKADIgLABIgKgBgAgJgXQgFABgDAEQgEAEgBAEQgCAGAAAEIAAAAQAAAFACAFQACAFADAEQADADAFACQAFACAEAAQAFAAAFgCQAFgCADgDIAFgIIACgKIAAgBQAAgEgCgFQgCgFgDgEQgEgEgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_18.setTransform(16.9,8.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmAxIAAhhIBNAAIAAAYIgyAAIAAARIAtAAIAAAVIgtAAIAAAjg");
	this.shape_19.setTransform(6.8,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-2,206.3,20.8), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBAQgGgCgFgFQgEgFgDgGQgCgGAAgIIAAAAQAAgHACgGQADgHAEgFQAFgFAGgCQAGgCAIgBQAHABAHACQAGACAEAFQAFAFACAGQADAGAAAIQAAAHgDAHQgCAGgFAFQgEAFgGACQgHADgHAAQgIAAgGgDgAAkAVQgDAFAAAGQAAAGADAFQADAEAFAAQAFAAADgEQADgFAAgGIAAAAQAAgGgDgFQgEgDgEAAQgFAAgDADgAg+BBIA3hFIAtg8IAZAAIg4BHIgsA6gAg5ABQgGgCgEgFQgFgFgCgGQgDgHAAgHIAAgBQAAgGADgHQACgGAFgFQAEgFAGgCQAHgEAHAAQAIAAAGAEQAGACAFAFQAEAFADAGQACAHAAAGIAAABQAAAHgDAHQgCAGgEAFQgFAFgGACQgHACgHAAQgHAAgHgCgAgzgqQgDAEAAAGIAAABQAAAGADAEQAEAFAEAAQAFAAADgFQADgEAAgGIAAgBQAAgGgDgEQgDgEgFAAQgFAAgDAEg");
	this.shape.setTransform(36.6,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBCQgHAAgFgDIgLgHIgIgIIgHgKIgFgLIgDgNIgCgNIAAgBQAAgGACgHIADgMIAFgMIAHgKIAJgIIAKgHIAMgEIAMgBIAOABIALAEIALAHIAJAHIAGALIAGAMIADAMIABANIAAAAIgBANIgDAOIgGALIgHAKIgIAIIgLAHQgFACgHABQgGACgHAAIgMgCgAgJghQgEADgDAFQgEAFgBAGQgCAHAAAHIAAAAQAAAIACAGQABAHAEAFQADAFAEACQAFADAEAAQAGAAAEgCQAFgDADgFQADgFACgHQABgGAAgHIAAgBQAAgHgCgHQgBgGgDgFQgEgFgEgDQgFgCgFAAQgEAAgFACg");
	this.shape_1.setTransform(21.3,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBDIAAgcIAxglQAIgGAEgGQAEgFAAgGQAAgGgEgDQgEgEgGAAQgGAAgGAEQgFAEgJAJIgYgVIALgMIAMgIQAGgEAHgCQAIgCAIAAQALAAAJADQAJADAGAGQAHAGADAHQAEAIAAAJIAAABQAAAHgDAHQgBAGgEAEIgJAKIgOAKIgVAQIA1AAIAAAeg");
	this.shape_2.setTransform(8.6,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA0IAAhnIBSAAIAAAZIg2AAIAAAPIAxAAIAAAWIgxAAIAAAQIA3AAIAAAZg");
	this.shape_3.setTransform(40.6,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMA0IgqhnIAgAAIAXBAIAXhAIAfAAIgqBng");
	this.shape_4.setTransform(29.9,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbA0IgIgSIgmAAIgIASIgeAAIAshnIAbAAIAsBngAALALIgLgcIgLAcIAWAAg");
	this.shape_5.setTransform(18.5,12.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKA0IgMgDQgGgCgGgEQgFgDgFgEIAQgTQAFAEALAFQAFADALABQAGAAADgCQADgCAAgEIAAAAQAAgDgDgCQgEgCgKgDIgPgEQgHgDgFgDQgFgCgEgGQgDgGAAgHIAAgBQAAgGADgGQADgHAFgEQAGgEAHgDQAIgCAIAAIAMABQAGAAAFACQAFACAFACIAJAGIgOAUQgHgFgIgCQgHgCgGgBQgFABgDABQgCACgBADQABADADADIANAEIAQAFQAIADAEADQAGADACAFQADAFAAAIQAAAHgDAHQgDAGgGAEQgFAEgHADQgJACgJAAIgNgBg");
	this.shape_6.setTransform(7.7,12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAcIAAg3IAsAAIAAANIgcAAIAAAIIAZAAIAAAMIgZAAIAAAJIAdAAIAAANg");
	this.shape_7.setTransform(42.7,66.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAcIgFgBIgFgCIgEgEIgEgEIgCgFIgCgGIgBgGIABgFIACgFIACgGIAEgDIAEgEIAFgDIAGgBIAFgBIAIABIAGACIAFAEIAFAEIgMAKIgFgFQgEgCgDAAIgFABIgEAEIgDAEIgBAFIABAGIADAEIAEAEIAFABIAEAAIADgCIAFgFIAMAJIgEAEIgGAFQgDACgDAAIgJABIgFgBg");
	this.shape_8.setTransform(37.1,66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAcIgXgdIAAAdIgPAAIAAg3IAOAAIAWAcIAAgcIAQAAIAAA3g");
	this.shape_9.setTransform(31,66.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAcIgEgKIgVAAIgEAKIgQAAIAYg3IAOAAIAXA3gAAGAGIgGgPIgFAPIALAAg");
	this.shape_10.setTransform(24.7,66.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAcIgWg3IASAAIALAiIANgiIARAAIgXA3g");
	this.shape_11.setTransform(18.5,66.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAcIAAg3IAWAAIAGABIAGABIAGACIAEAEIAEAEIACAFIACAFIAAAFIAAAAIAAAGIgCAFIgCAFIgEAEIgEAEIgGACIgGABIgGABgAgKAPIAHAAIAFgCIAEgDIADgEIACgGIgCgFIgDgEIgEgEIgFAAIgHAAg");
	this.shape_12.setTransform(12.5,66.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAPAcIgEgKIgVAAIgEAKIgQAAIAYg3IAOAAIAXA3gAAGAGIgGgPIgFAPIALAAg");
	this.shape_13.setTransform(6.2,66.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANAcIgXgdIAAAdIgPAAIAAg3IAOAAIAWAcIAAgcIAQAAIAAA3g");
	this.shape_14.setTransform(35.7,55.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAcIAAg3IAPAAIAAA3g");
	this.shape_15.setTransform(31.2,55.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAIAcIgNgVIgGAHIAAAOIgPAAIAAg3IAPAAIAAAXIATgXIASAAIgVAYIAWAfg");
	this.shape_16.setTransform(25.1,55.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAcIgGgBIgFgDIgFgEIgDgEIgDgFIgCgFIAAgGIAAgFIACgFIADgGIADgDIAFgEIAFgDIAGgCIAFAAIAGAAIAGACIAFADIAFAEIADADIADAGIACAFIAAAFIAAAGIgCAFIgDAFIgEAEIgEAEIgFADIgGABIgGABIgFgBgAgFgNQgCABgCADIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBQACgBACgDIADgEIABgGIgBgFIgDgEIgEgEIgGgBIgFABg");
	this.shape_17.setTransform(18.6,55.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAcIgGgBIgFgDIgFgEIgDgEIgDgFIgCgFIAAgGIAAgFIACgFIADgGIADgDIAFgEIAFgDIAGgCIAFAAIAGAAIAGACIAFADIAFAEIADADIADAGIACAFIAAAFIAAAGIgCAFIgDAFIgEAEIgEAEIgFADIgGABIgGABIgFgBgAgFgNIgEAEIgDAEIgBAFIABAGIADAEIAEAEIAFABIAGgBQACgBACgDIADgEIABgGIgBgFIgDgEIgEgEIgGgBIgFABg");
	this.shape_18.setTransform(12,55.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAcIAAg3IAcAAQAFAAAEABQAEABACADIADAEIABAFIgBAEIgCAEIgDADIgDABIAEABIAEAEIADAEIAAAFQAAADgBADIgFAFIgGADIgJABgAgJAQIALAAQADgBADgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgDgCgDAAIgLAAgAgJgEIAJAAQAEAAACgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgGgCIgJAAg");
	this.shape_19.setTransform(6,55.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKAbIgFgCIgDgDIgEgDIgCgEIgBgGIAAgGIAAgeIAQAAIAAAdIAAAGIACADIADADIAEABIAEgBIAEgDIACgDIAAgFIAAgeIAQAAIAAAdIAAAHIgCAFIgCAEIgDAEIgEADIgFACIgKABIgKgBg");
	this.shape_20.setTransform(47.1,45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAdIgGgCIgFgDIgFgDIgDgFIgDgEIgCgGIAAgGIAAgFIACgGIADgEIADgFIAFgDIAFgDIAGgCIAFAAIAGAAIAGACIAFADIAFADIADAFIADAEIACAGIAAAFIAAAGIgCAGIgDAEIgEAFIgEADIgFADIgGACIgGAAIgFAAgAgFgNQgCABgCACIgDAFIgBAFIABAGIADAFIAEADIAFABIAGgBQACgBACgCIADgFIABgGIgBgFIgDgFIgEgDIgGgBIgFABg");
	this.shape_21.setTransform(40.8,44.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAcIAAgVIgVgiIASAAIAKAVIALgVIASAAIgVAiIAAAVg");
	this.shape_22.setTransform(34.6,44.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANAcIgXgeIAAAeIgPAAIAAg3IAOAAIAWAdIAAgdIAQAAIAAA3g");
	this.shape_23.setTransform(26.4,44.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAcIAAg3IAsAAIAAANIgcAAIAAAJIAZAAIAAALIgZAAIAAAJIAdAAIAAANg");
	this.shape_24.setTransform(20.7,44.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAKAcIAAgWIgTAAIAAAWIgPAAIAAg3IAPAAIAAAVIATAAIAAgVIAPAAIAAA3g");
	this.shape_25.setTransform(15,44.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAMAcIgMgfIgKAfIgNAAIgUg3IARAAIAKAfIALgfIAMAAIALAfIAJgfIAQAAIgSA3g");
	this.shape_26.setTransform(7.5,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(1,1.7,51.3,71.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBRQgKgBgKgEIgSgIIgQgMIAZgdQAIAGARAIQAJADARACQAJAAAFgDQAEgDAAgFIAAgBQAAgFgFgDQgGgDgPgEIgYgGQgMgFgHgFQgJgFgEgIQgFgJAAgLIAAgBQAAgLAFgKQAEgJAIgHQAIgHAMgEQALgDAOAAIATABIASAEIAPAHIAOAJIgWAfQgLgHgMgEQgMgEgJAAQgIAAgFACQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAZAHQAMAEAHAGQAIAFAEAIQAEAIAAALIAAABQAAAMgEAKQgFAJgIAHQgJAHgMADQgMAEgPAAQgJAAgLgCg");
	this.shape.setTransform(57.9,86.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBRQgKgBgKgEIgSgIIgQgMIAZgdQAIAGARAIQAJADARACQAJAAAFgDQAEgDAAgFIAAgBQAAgFgFgDQgGgDgPgEIgYgGQgMgFgHgFQgJgFgEgIQgFgJAAgLIAAgBQAAgLAFgKQAEgJAIgHQAIgHAMgEQALgDAOAAIATABIASAEIAPAHIAOAJIgWAfQgLgHgMgEQgMgEgJAAQgIAAgFACQgEADAAAFIAAAAQAAAGAGADQAGADAPAEIAZAHQAMAEAHAGQAIAFAEAIQAEAIAAALIAAABQAAAMgEAKQgFAJgIAHQgJAHgMADQgMAEgPAAQgJAAgLgCg");
	this.shape_1.setTransform(42.9,86.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBRIgMgcIg9AAIgLAcIgvAAIBFihIApAAIBFChgAASASIgSgtIgSAtIAkAAg");
	this.shape_2.setTransform(26.6,86.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBQIAAifIBEAAQAPAAANADQAMAEAJAHQAJAIAEAKQAFAPAAAJIAAABIgBANIgEALIgGAKIgJAIQgJAHgNAEQgMADgOAAIgWAAIAAAugAgWAAIAVAAQAFAAAEgBQAFgBADgDQAEgDACgEQABgEAAgFIAAAAQAAgFgBgEQgCgEgEgDQgDgCgFgBQgEgCgFAAIgVAAg");
	this.shape_3.setTransform(10.2,86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBQIgggwIgUAAIAAAwIgsAAIAAigIBLAAQAMAAATAFIAMAFIAJAIQAIAHADAJQADAKABALIAAABQAAAJgCAIQgDAHgEAGQgEAGgHAEQgGAFgIADIAnA4gAgdgCIAdAAQALAAAGgGQAHgFAAgIIAAgBQAAgJgHgFQgGgFgLAAIgdAAg");
	this.shape_4.setTransform(123.6,63.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABQIAAigICAAAIAAAnIhUAAIAAAYIBMAAIAAAiIhMAAIAAAaIBVAAIAAAlg");
	this.shape_5.setTransform(107.3,63.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBQIgggwIgUAAIAAAwIgsAAIAAigIBLAAQAMAAATAFIAMAFIAJAIQAIAHADAJQADAKAAALIAAABQAAAJgBAIQgDAHgEAGQgEAGgHAEQgGAFgIADIAnA4gAgdgCIAdAAQALAAAGgGQAHgFgBgIIAAgBQABgJgHgFQgGgFgLAAIgdAAg");
	this.shape_6.setTransform(91.7,63.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRBSQgJgCgIgDQgHgDgIgFQgGgEgGgGQgGgFgEgHQgFgHgDgHQgEgIgBgIIgCgRIAAAAIACgQQABgIAEgIQADgHAFgHQAEgHAGgFQAGgGAHgFQAHgEAHgDQAJgEAIgBIARgCQAKAAAIACQAIABAJAEQAHADAHAEIANAKQAGAGAEAHQAFAGADAIQAEAHABAIIACARIAAAAIgCARQgBAIgEAHQgDAIgFAHIgKAMQgGAGgHAEQgHAFgIADQgIADgIACQgJACgJAAQgJAAgIgCgAgQgnQgHADgGAGQgFAGgDAIQgDAIAAAIIAAAAQAAAIADAIQADAIAGAGQAFAGAHAEQAJADAHAAQAJAAAIgDQAHgEAGgGQAFgFADgIQADgIAAgJIAAAAQAAgIgDgIQgDgIgGgGQgFgGgHgDQgIgEgJAAQgIAAgIAEg");
	this.shape_7.setTransform(73.3,63.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8BQIAAigIAsAAIAAB6IBNAAIAAAmg");
	this.shape_8.setTransform(57.2,63.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBQIAAigIBEAAQAPAAANAFQAMADAJAIQAJAHAEAKQAFAPAAAJIAAABIgBANIgEAKIgGALIgJAHQgJAIgNAEQgMADgOAAIgWAAIAAAugAgWAAIAVAAQAFAAAEgBQAFgCADgCQAEgDACgEQABgEAAgEIAAgBQAAgFgBgEQgCgEgEgDQgDgCgFgBQgEgCgFAAIgVAAg");
	this.shape_9.setTransform(42.4,63.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBQIgegwIgfAwIgyAAIA3hRIg0hPIAzAAIAbAuIAdguIAyAAIg1BPIA4BRg");
	this.shape_10.setTransform(25.8,63.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhABQIAAigICAAAIAAAnIhUAAIAAAYIBMAAIAAAiIhMAAIAAAaIBVAAIAAAlg");
	this.shape_11.setTransform(10,63.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhABRIAAihICAAAIAAAmIhUAAIAAAZIBMAAIAAAiIhMAAIAAAaIBVAAIAAAmg");
	this.shape_12.setTransform(117.5,39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBRIAAh6IgwAAIAAgnICNAAIAAAnIgxAAIAAB6g");
	this.shape_13.setTransform(102,39.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAqBRIgLgdIg+AAIgLAdIgvAAIBFihIAqAAIBEChgAARARIgRgtIgSAtIAjAAg");
	this.shape_14.setTransform(85.3,39.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApBRIAAhcIgpA+IAAAAIgpg9IAABbIgrAAIAAihIAvAAIAlA/IAmg/IAwAAIAAChg");
	this.shape_15.setTransform(66.2,39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVBRIAAihIAsAAIAAChg");
	this.shape_16.setTransform(52.5,39.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWBRIAAh6IgvAAIAAgnICMAAIAAAnIgxAAIAAB6g");
	this.shape_17.setTransform(41.2,39.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BRIAAihIAsAAIAAB6IBNAAIAAAng");
	this.shape_18.setTransform(27,39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeBNQgHgCgGgDIgLgIIgJgKIgFgNIgFgPQgBgIAAgJIAAhaIAtAAIAABZQAAAIACAGQACAHAFAEQADAFAGABQAFACAGAAQAHAAAGgCQAFgBAEgFQAEgDACgHQACgGAAgIIAAhaIAtAAIAABYIgBATIgEAPIgHANQgDAFgGAFIgLAIQgFADgHACQgUAFgLAAQgVgBgJgEg");
	this.shape_19.setTransform(10.7,39.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhABRIAAigICAAAIAAAlIhUAAIAAAZIBMAAIAAAiIhMAAIAAAaIBVAAIAAAmg");
	this.shape_20.setTransform(42.6,16.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBRIAAg+Ig4AAIAAA+IgsAAIAAigIAsAAIAAA8IA4AAIAAg8IAtAAIAACgg");
	this.shape_21.setTransform(25.9,16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVBRIAAh6IgxAAIAAgmICMAAIAAAmIgwAAIAAB6g");
	this.shape_22.setTransform(9.6,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,133.4,102.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBGIgPgDIgPgHIgOgKIATgWQAKAIAJAEIALADIALACQAJAAAGgDQAFgEAAgGIAAgBQAAgGgFgDQgGgEgRgEIgSgHQgKgDgFgEQgHgEgDgHQgCgHAAgLIAAAAQAAgJADgIQADgIAHgFQAGgGAJgDQAKgDAKAAIAOABIANAEIANAFIALAIIgQAXQgJgHgJgDQgKgEgHAAQgJAAgEAEQgFADAAAGIAAAAQAAAHAGADQAGAEARAEQAMADAHADQAIAEAGAEQAFAFADAHQADAGABAJIAAAAQAAALgEAIQgEAIgHAFQgHAGgJADQgKADgLAAQgHAAgIgCg");
	this.shape.setTransform(180.8,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBGIgcgtIgZAAIAAAtIgeAAIAAiLIA/AAQAIAAAPAEQAKADAHAHQAGAGADAIQADAJAAAKQAAAIgCAHQgCAHgEAFQgEAEgFAFQgGAEgHACIAiAygAgdgBIAfAAQAFAAAFgBIAGgFIAFgFQACgFAAgEQAAgFgCgEQgBgDgEgDQgDgDgEgBIgLgBIgdAAg");
	this.shape_1.setTransform(166.9,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_2.setTransform(151.7,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBGIgdgtIgYAAIAAAtIgfAAIAAiLIA/AAQAJAAAPAEQAKADAHAHQAGAGADAIQADAJAAAKQAAAIgCAHQgCAHgEAFQgEAEgGAFQgFAEgHACIAiAygAgdgBIAfAAQAFAAAEgBIAIgFIAEgFQACgFAAgEQAAgFgCgEQgBgDgDgDQgDgDgFgBIgKgBIgeAAg");
	this.shape_3.setTransform(137,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBHIgOgEIgNgHIgLgJIgJgKIgGgNIgEgNQgCgHABgIIAAAAQgBgHACgGIAEgOIAHgMIAIgLIALgJQAGgEAIgCQAGgDAHgCQAIgBAHgBIAQACIAOAFQAGACAHAEQAGADAEAGIAKALIAGALIAEAOQABAHAAAHIAAAAQAAAHgBAIIgEANIgHANIgJAKIgKAJQgHAEgHADQgGADgHABQgIABgIAAIgPgBgAgQgnQgIADgFAGQgGAGgDAHQgDAJAAAIIAAAAQAAAJADAIQADAIAGAGQAFAGAIAEQAIADAIAAQAJAAAIgDQAIgDAFgHQAGgGADgIQADgHAAgKIAAAAQAAgIgDgIQgDgIgGgGQgFgGgIgDQgIgEgJAAQgJAAgHAEg");
	this.shape_4.setTransform(119.8,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBGIAAiLIAeAAIAABvIBFAAIAAAcg");
	this.shape_5.setTransform(104.6,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BGIAAiLIA4AAQAMAAAKAEQAKADAHAHQAHAGAEAJQADAJAAALIAAAAIgBALQgBAFgCAEQgEAJgIAGQgIAGgKAEQgKADgLAAIgYAAIAAAqgAgYAAIAYAAQAFAAAFAAQAEgBAEgDQADgEABgDQACgEAAgEIAAgBQAAgFgCgEQgBgEgEgDQgDgDgEgBIgKgBIgYAAg");
	this.shape_6.setTransform(90.8,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBGIgfgwIgfAwIgjAAIAxhGIgvhFIAkAAIAdAuIAdguIAjAAIguBEIAwBHg");
	this.shape_7.setTransform(75.3,34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_8.setTransform(60.6,34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_9.setTransform(39.2,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcBGIAAg4Ig4AAIAAA4IgeAAIAAiLIAeAAIAAA4IA4AAIAAg4IAfAAIAACLg");
	this.shape_10.setTransform(23.6,34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBGIAAhuIgqAAIAAgdIBzAAIAAAdIgrAAIAABug");
	this.shape_11.setTransform(8.5,34);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBHIgOgEIgMgHIgMgJIgJgLIgGgLIgEgOQgBgHgBgHIAAgBQABgGABgIIAEgNIAHgNIAIgKIAMgJQAGgEAGgDQAHgDAIgBQAHgBAHAAIAQABIAOAEQAHADAFAEQAHAEAEAEIAJALIAHANIAEANQACAHAAAHIAAAAQAAAIgCAGIgEAOIgHAMIgJALIgLAJQgFAEgHACQgHADgIACQgHABgIABIgPgCgAgQgoQgIAEgGAGQgFAGgDAIQgDAHAAAJIAAAAQAAAJADAIQADAIAFAGQAGAGAIADQAIAEAIAAQAKAAAHgEQAIgDAGgGQAFgGADgHQADgJAAgIIAAgBQAAgIgDgIQgDgIgFgGQgHgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_12.setTransform(112.4,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPBGIAAhvIgqAAIAAgcIBzAAIAAAcIgrAAIAABvg");
	this.shape_13.setTransform(96.5,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBHIgPgFIgPgHIgOgKIATgVQAKAIAJAEIALAEIALABQAJAAAFgEQAGgDAAgHIAAAAQAAgGgGgEQgFgDgQgFIgTgFQgKgEgFgEQgHgEgDgHQgCgIAAgKIAAAAQgBgJAEgIQADgIAHgGQAGgFAJgDQAJgDALAAIAOABIANADIANAGIALAIIgQAXQgKgHgIgDQgKgEgHAAQgJAAgEAEQgFADAAAFIAAABQAAAHAGADQAGADARAFQAMADAHAEQAIADAGAEQAFAFADAGQADAHAAAJIAAABQAAAKgDAIQgEAIgHAFQgHAHgJACQgKADgLAAQgHAAgIgBg");
	this.shape_14.setTransform(75.4,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAUIAJgCIAHgFQADgFAAgIIgLAAIAAgfIAfAAIAAAbQAAAJgDAHQgCAHgFAEQgEAFgHACQgGACgJAAg");
	this.shape_15.setTransform(65.1,7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_16.setTransform(55.1,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZBGIgegtIgYAAIAAAtIgfAAIAAiLIA/AAQAJAAAPADQAKAFAHAGQAGAGADAIQADAIAAAKQAAAJgCAHQgCAHgEAEQgEAGgGADQgFAFgHACIAjAygAgdgBIAfAAQAFAAAEgCIAIgDIAEgHQACgEAAgEQAAgFgCgEQgBgDgDgDQgDgCgFgCIgKgBIgeAAg");
	this.shape_17.setTransform(40.4,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_18.setTransform(25.2,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcBGIAAg4Ig3AAIAAA4IgfAAIAAiLIAfAAIAAA3IA3AAIAAg3IAfAAIAACLg");
	this.shape_19.setTransform(9.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,190.6,47), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLBGIgPgDIgPgHIgOgKIATgWQAKAIAJAEIALADIALACQAJAAAFgDQAGgEAAgGIAAgBQAAgGgGgDQgFgEgQgEIgTgHQgKgDgFgEQgHgEgDgHQgCgHAAgLIAAAAQgBgJAEgIQADgIAHgFQAGgGAKgDQAJgDAKAAIAOABIANAEIANAFIALAIIgQAXQgKgHgIgDQgKgEgHAAQgJAAgEAEQgFADAAAGIAAAAQAAAHAGADQAGAEARAEQAMADAHADQAIAEAGAEQAFAFADAHQADAGAAAJIAAAAQAAALgDAIQgEAIgHAFQgHAGgJADQgKADgLAAQgHAAgIgCg");
	this.shape.setTransform(147.9,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBGIgcgtIgZAAIAAAtIgeAAIAAiLIA/AAQAIAAAPAEQAKADAHAHQAGAGADAIQADAJAAAKQAAAIgCAHQgCAHgEAFQgEAEgFAFQgGAEgHACIAiAygAgdgBIAeAAQAGAAAFgBIAGgFIAGgFQABgFAAgEQAAgFgCgEQgBgDgEgDQgDgDgEgBIgLgBIgdAAg");
	this.shape_1.setTransform(133.9,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_2.setTransform(118.8,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaBGIgqg8IgQARIAAArIgfAAIAAiLIAfAAIAAA9IA4g9IAlAAIg5A7IA7BQg");
	this.shape_3.setTransform(104.2,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_4.setTransform(88.8,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_5.setTransform(74.4,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBGIgQgDIgPgHIgNgKIASgWQAKAIAJAEIALADIAKACQAKAAAFgDQAGgEAAgGIAAgBQAAgGgGgDQgFgEgQgEIgUgHQgIgDgGgEQgGgEgDgHQgDgHgBgLIAAAAQAAgJAEgIQAEgIAGgFQAHgGAJgDQAIgDALAAIAOABIANAEIANAFIAMAIIgQAXQgLgHgIgDQgJgEgIAAQgIAAgGAEQgEADAAAGIAAAAQAAAHAGADQAFAEASAEQAMADAHADQAIAEAGAEQAGAFADAHQACAGAAAJIAAAAQAAALgDAIQgEAIgHAFQgGAGgKADQgJADgMAAQgHAAgHgCg");
	this.shape_6.setTransform(59.8,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_7.setTransform(39.2,34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBGIAAg4Ig4AAIAAA4IgeAAIAAiLIAeAAIAAA4IA4AAIAAg4IAfAAIAACLg");
	this.shape_8.setTransform(23.6,34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBGIAAhuIgqAAIAAgdIBzAAIAAAdIgrAAIAABug");
	this.shape_9.setTransform(8.5,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPBHIgOgEIgMgHIgMgJIgJgLIgGgLIgEgOQgBgHgBgHIAAgBQABgGABgIIAEgNIAHgNIAIgKIAMgJQAGgEAGgDQAHgDAIgBQAHgBAHAAIAQABIAOAEQAHADAFAEQAHAEAEAEIAJALIAHANIAEANQACAHAAAHIAAAAQAAAIgCAGIgEAOIgHAMIgJALIgLAJQgFAEgHACQgHADgIACQgHABgIABIgPgCgAgQgoQgIAEgGAGQgFAGgDAIQgDAHAAAJIAAAAQAAAJADAIQADAIAFAGQAGAGAIADQAIAEAIAAQAKAAAHgEQAIgDAGgGQAFgGADgHQADgJAAgIIAAgBQAAgIgDgIQgDgIgFgGQgHgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_10.setTransform(112.4,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBGIAAhvIgqAAIAAgcIBzAAIAAAcIgrAAIAABvg");
	this.shape_11.setTransform(96.5,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLBHIgPgFIgPgHIgOgKIATgVQAKAIAJAEIALAEIALABQAJAAAFgEQAGgDAAgHIAAAAQAAgGgGgEQgFgDgQgFIgTgFQgKgEgFgEQgHgEgDgHQgCgIAAgKIAAAAQgBgJAEgIQADgIAHgGQAGgFAJgDQAJgDALAAIAOABIANADIANAGIALAIIgQAXQgKgHgIgDQgKgEgHAAQgJAAgEAEQgFADAAAFIAAABQAAAHAGADQAGADARAFQAMADAHAEQAIADAGAEQAFAFADAGQADAHAAAJIAAABQAAAKgDAIQgEAIgHAFQgHAHgJACQgKADgLAAQgHAAgIgBg");
	this.shape_12.setTransform(75.4,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAUIAJgCIAHgFQADgFAAgIIgLAAIAAgfIAfAAIAAAbQAAAJgDAHQgCAHgFAEQgEAFgHACQgGACgJAAg");
	this.shape_13.setTransform(65.1,7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_14.setTransform(55.1,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZBGIgegtIgYAAIAAAtIgfAAIAAiLIA/AAQAJAAAPADQAKAFAHAGQAGAGADAIQADAIAAAKQAAAJgCAHQgCAHgEAEQgEAGgGADQgFAFgHACIAjAygAgdgBIAfAAQAFAAAEgCIAIgDIAEgHQACgEAAgEQAAgFgCgEQgBgDgDgDQgDgCgFgCIgKgBIgeAAg");
	this.shape_15.setTransform(40.4,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_16.setTransform(25.2,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAcBGIAAg4Ig3AAIAAA4IgfAAIAAiLIAfAAIAAA3IA3AAIAAg3IAfAAIAACLg");
	this.shape_17.setTransform(9.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,157.6,47), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,330,275), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAAAPIAAgd");
	this.shape.setTransform(28.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(1,1,1).p("AAAgwIAABh");
	this.shape_1.setTransform(28.1,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_2.setTransform(28.1,-6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(1,1,1).p("AAAhhIAADD");
	this.shape_3.setTransform(28.1,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(1,1,1).p("AAAhwIAADh");
	this.shape_4.setTransform(28.1,-10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(1,1,1).p("AAAh5IAADz");
	this.shape_5.setTransform(28.1,-11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(1,1,1).p("AAAB9IAAj5");
	this.shape_6.setTransform(28.1,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(1,1,1).p("AgRAAIAjAA");
	this.shape_7.setTransform(1.3,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(1,1,1).p("AgWAAIAtAA");
	this.shape_8.setTransform(1.8,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(1,1,1).p("AglAAIBLAA");
	this.shape_9.setTransform(3.3,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(1,1,1).p("Ag+AAIB9AA");
	this.shape_10.setTransform(5.8,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(1,1,1).p("AhhAAIDDAA");
	this.shape_11.setTransform(9.3,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(1,1,1).p("AiOAAIEdAA");
	this.shape_12.setTransform(13.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,5.6,2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBGIgQgDIgPgHIgNgKIASgWQAKAIAJAEIALADIALACQAJAAAFgDQAGgEAAgGIAAgBQAAgGgGgDQgFgEgQgEIgTgHQgJgDgGgEQgGgEgDgHQgDgHAAgLIAAAAQAAgJADgIQAEgIAGgFQAGgGAKgDQAIgDALAAIAOABIANAEIANAFIAMAIIgRAXQgKgHgIgDQgJgEgIAAQgIAAgGAEQgEADAAAGIAAAAQAAAHAGADQAGAEARAEQALADAIADQAJAEAFAEQAGAFADAHQACAGAAAJIAAAAQABALgEAIQgEAIgHAFQgGAGgKADQgJADgMAAQgHAAgHgCg");
	this.shape.setTransform(193.1,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBGIgegtIgYAAIAAAtIgfAAIAAiLIA/AAQAJAAAPAEQAKADAHAHQAGAGADAIQADAJAAAKQAAAIgCAHQgCAHgEAFQgEAEgGAFQgFAEgHACIAjAygAgdgBIAeAAQAGAAAEgBIAHgFIAGgFQABgFAAgEQAAgFgCgEQgCgDgDgDQgDgDgEgBIgLgBIgdAAg");
	this.shape_1.setTransform(179.2,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_2.setTransform(164,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBGIgcgtIgZAAIAAAtIgeAAIAAiLIA/AAQAIAAAPAEQAKADAHAHQAGAGADAIQADAJAAAKQAAAIgCAHQgCAHgEAFQgEAEgFAFQgGAEgHACIAiAygAgdgBIAfAAQAFAAAFgBIAGgFIAFgFQACgFAAgEQAAgFgCgEQgBgDgEgDQgDgDgEgBIgLgBIgdAAg");
	this.shape_3.setTransform(149.3,34);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_4.setTransform(134.2,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhABGIAAiLIA3AAQAIAAAGACQAIABAHACIANAHIAKAIIAJAKIAHAMIAEAOIACANIAAAAQAAAHgCAIIgEAMIgHANIgJAKIgKAJIgNAFQgHAEgIABQgGABgIAAgAghAqIAYAAQAJAAAHgDQAIgDAGgFQAFgGADgIQADgHAAgKIAAAAQAAgIgDgIQgDgIgFgFQgGgGgIgDQgHgDgJAAIgYAAg");
	this.shape_5.setTransform(118.7,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkBGIhDhYIAABYIgeAAIAAiLIAcAAIBBBVIAAhVIAeAAIAACLg");
	this.shape_6.setTransform(101.7,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqBHIgNggIg6AAIgNAgIgfAAIA8iMIAbAAIA8CMgAASAMIgSgsIgSAsIAkAAg");
	this.shape_7.setTransform(84.9,34);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBHIgghbIgfBbIgaAAIgwiMIAhAAIAdBeIAfhfIAaAAIAfBfIAdheIAgAAIgwCMg");
	this.shape_8.setTransform(64.8,34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAcIhKAAIAAAcIBBAAIAAAaIhBAAIAAAeIBLAAIAAAbg");
	this.shape_9.setTransform(39.2,34);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcBGIAAg4Ig4AAIAAA4IgeAAIAAiLIAeAAIAAA4IA4AAIAAg4IAfAAIAACLg");
	this.shape_10.setTransform(23.6,34);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPBGIAAhuIgqAAIAAgdIBzAAIAAAdIgrAAIAABug");
	this.shape_11.setTransform(8.5,34);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBHIgOgEIgMgHIgMgJIgJgLIgGgLIgEgOQgBgHgBgHIAAgBQABgGABgIIAEgNIAHgNIAIgKIAMgJQAGgEAGgDQAHgDAIgBQAHgBAHAAIAQABIAOAEQAHADAFAEQAHAEAEAEIAJALIAHANIAEANQACAHAAAHIAAAAQAAAIgCAGIgEAOIgHAMIgJALIgLAJQgFAEgHACQgHADgIACQgHABgIABIgPgCgAgQgoQgIAEgGAGQgFAGgDAIQgDAHAAAJIAAAAQAAAJADAIQADAIAFAGQAGAGAIADQAIAEAIAAQAKAAAHgEQAIgDAGgGQAFgGADgHQADgJAAgIIAAgBQAAgIgDgIQgDgIgFgGQgHgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_12.setTransform(112.4,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPBGIAAhvIgqAAIAAgcIBzAAIAAAcIgrAAIAABvg");
	this.shape_13.setTransform(96.5,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBHIgPgFIgPgHIgOgKIATgVQAKAIAJAEIALAEIALABQAJAAAFgEQAGgDAAgHIAAAAQAAgGgGgEQgFgDgQgFIgTgFQgKgEgFgEQgHgEgDgHQgCgIAAgKIAAAAQgBgJAEgIQADgIAHgGQAGgFAJgDQAJgDALAAIAOABIANADIANAGIALAIIgQAXQgKgHgIgDQgKgEgHAAQgJAAgEAEQgFADAAAFIAAABQAAAHAGADQAGADARAFQAMADAHAEQAIADAGAEQAFAFADAGQADAHAAAJIAAABQAAAKgDAIQgEAIgHAFQgHAHgJACQgKADgLAAQgHAAgIgBg");
	this.shape_14.setTransform(75.4,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAUIAJgCIAHgFQADgFAAgIIgLAAIAAgfIAfAAIAAAbQAAAJgDAHQgCAHgFAEQgEAFgHACQgGACgJAAg");
	this.shape_15.setTransform(65.1,7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_16.setTransform(55.1,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZBGIgegtIgYAAIAAAtIgfAAIAAiLIA/AAQAJAAAPADQAKAFAHAGQAGAGADAIQADAIAAAKQAAAJgCAHQgCAHgEAEQgEAGgGADQgFAFgHACIAjAygAgdgBIAfAAQAFAAAEgCIAIgDIAEgHQACgEAAgEQAAgFgCgEQgBgDgDgDQgDgCgFgCIgKgBIgeAAg");
	this.shape_17.setTransform(40.4,11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BGIAAiLIBoAAIAAAbIhKAAIAAAdIBBAAIAAAaIhBAAIAAAdIBLAAIAAAcg");
	this.shape_18.setTransform(25.2,11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcBGIAAg4Ig3AAIAAA4IgfAAIAAiLIAfAAIAAA3IA3AAIAAg3IAfAAIAACLg");
	this.shape_19.setTransform(9.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.9,47);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.redbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1844").s().p("A3vUFMAAAgoJMAvfAAAMAAAAoJg");
	this.shape.setTransform(152,128.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redbg, new cjs.Rectangle(0,0,304,257), null);


// stage content:
(lib._300x250_pursuit_b = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// pursuit
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(98,221,1,1,0,0,0,78,14);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-1)).wait(1));

	// Layer 15
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.4,33.1,1,1,0,0,0,89.4,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(237).to({_off:false},0).wait(1).to({regX:103.2,regY:8.6,x:21.5,y:33.7,alpha:0.002},0).wait(1).to({x:22.2,alpha:0.009},0).wait(1).to({x:23.5,alpha:0.022},0).wait(1).to({x:25.8,alpha:0.044},0).wait(1).to({x:29.3,alpha:0.078},0).wait(1).to({x:34.6,alpha:0.13},0).wait(1).to({x:43,alpha:0.211},0).wait(1).to({x:55.9,alpha:0.336},0).wait(1).to({x:72,alpha:0.493},0).wait(1).to({x:85.9,alpha:0.628},0).wait(1).to({x:95.9,alpha:0.725},0).wait(1).to({x:103.1,alpha:0.794},0).wait(1).to({x:108.4,alpha:0.846},0).wait(1).to({x:112.4,alpha:0.886},0).wait(1).to({x:115.6,alpha:0.916},0).wait(1).to({x:118,alpha:0.94},0).wait(1).to({x:120,alpha:0.959},0).wait(1).to({x:121.4,alpha:0.973},0).wait(1).to({x:122.5,alpha:0.984},0).wait(1).to({x:123.3,alpha:0.991},0).wait(1).to({x:123.8,alpha:0.996},0).wait(1).to({x:124.1,alpha:0.999},0).wait(1).to({regX:89.4,regY:8,x:110.4,y:33.1,alpha:1},0).wait(16));

	// Layer 14
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(153.4,110.7,1,1,0,0,0,25.4,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(242).to({_off:false},0).wait(1).to({regX:26.4,regY:38.1,x:154.6,y:128.8,alpha:0.002},0).wait(1).to({x:155.3,alpha:0.009},0).wait(1).to({x:156.6,alpha:0.022},0).wait(1).to({x:158.8,alpha:0.044},0).wait(1).to({x:162.2,alpha:0.078},0).wait(1).to({x:167.4,alpha:0.13},0).wait(1).to({x:175.5,alpha:0.211},0).wait(1).to({x:188,alpha:0.336},0).wait(1).to({x:203.7,alpha:0.493},0).wait(1).to({x:217.2,alpha:0.628},0).wait(1).to({x:226.9,alpha:0.725},0).wait(1).to({x:233.8,alpha:0.794},0).wait(1).to({x:239,alpha:0.846},0).wait(1).to({x:243,alpha:0.886},0).wait(1).to({x:246,alpha:0.916},0).wait(1).to({x:248.4,alpha:0.94},0).wait(1).to({x:250.3,alpha:0.959},0).wait(1).to({x:251.7,alpha:0.973},0).wait(1).to({x:252.8,alpha:0.984},0).wait(1).to({x:253.5,alpha:0.991},0).wait(1).to({x:254,alpha:0.996},0).wait(1).to({x:254.3,alpha:0.999},0).wait(1).to({regX:25.4,regY:20,x:253.4,y:110.7,alpha:1},0).wait(11));

	// Layer 16
	this.instance_3 = new lib.Symbol13("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(192,114.2,1,1,0,0,0,0,46.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(257).to({_off:false},0).wait(19));

	// Layer 13
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,115.1,1,1,0,0,0,67,51);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(242).to({_off:false},0).wait(1).to({regX:66.8,regY:51.6,x:-11.9,y:115.7,alpha:0.002},0).wait(1).to({x:-11.2,alpha:0.009},0).wait(1).to({x:-9.9,alpha:0.022},0).wait(1).to({x:-7.7,alpha:0.044},0).wait(1).to({x:-4.4,alpha:0.078},0).wait(1).to({x:0.9,alpha:0.13},0).wait(1).to({x:9,alpha:0.211},0).wait(1).to({x:21.5,alpha:0.336},0).wait(1).to({x:37.2,alpha:0.493},0).wait(1).to({x:50.6,alpha:0.628},0).wait(1).to({x:60.3,alpha:0.725},0).wait(1).to({x:67.2,alpha:0.794},0).wait(1).to({x:72.4,alpha:0.846},0).wait(1).to({x:76.4,alpha:0.886},0).wait(1).to({x:79.4,alpha:0.916},0).wait(1).to({x:81.8,alpha:0.94},0).wait(1).to({x:83.7,alpha:0.959},0).wait(1).to({x:85.1,alpha:0.973},0).wait(1).to({x:86.2,alpha:0.984},0).wait(1).to({x:86.9,alpha:0.991},0).wait(1).to({x:87.4,alpha:0.996},0).wait(1).to({x:87.7,alpha:0.999},0).wait(1).to({regX:67,regY:51,x:88,y:115.1,alpha:1},0).wait(11));

	// REDEND
	this.instance_5 = new lib.redbg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-153.9,126.6,1,1,0,0,0,152,128.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(234).to({_off:false},0).wait(1).to({x:-151.9},0).wait(1).to({x:-144.3},0).wait(1).to({x:-127.4},0).wait(1).to({x:-93.4},0).wait(1).to({x:-34.7},0).wait(1).to({x:23.7},0).wait(1).to({x:63.5},0).wait(1).to({x:90.1},0).wait(1).to({x:108.8},0).wait(1).to({x:122.2},0).wait(1).to({x:131.9},0).wait(1).to({x:138.9},0).wait(1).to({x:143.7},0).wait(1).to({x:146.9},0).wait(1).to({x:148.6},0).wait(1).to({x:149.1},0).wait(26));

	// Layer 11
	this.instance_6 = new lib.Symbol3("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(209,76.1,1,1,0,0,0,17,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(197).to({_off:false},0).to({_off:true},54).wait(25));

	// Layer 10
	this.instance_7 = new lib.Symbol9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(98.5,45.5,1,1,0,0,0,78.8,23.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({_off:false},0).to({alpha:1},12).to({_off:true},49).wait(25));

	// photo 5
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,115,1.1,1.1,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181).to({_off:false},0).to({scaleX:1.07,scaleY:1.07,x:150.1,y:117.8,alpha:1},12).to({scaleX:1,scaleY:1,x:150,y:125},47).to({_off:true},11).wait(25));

	// photo 4
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(140).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,x:147,y:122.3,alpha:1},12).to({scaleX:1.1,scaleY:1.1,x:138,y:114},35).to({_off:true},7).wait(82));

	// Layer 9
	this.instance_10 = new lib.Symbol3("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(177,76.1,1,1,0,0,0,17,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(111).to({_off:false},0).to({_off:true},83).wait(82));

	// Layer 8
	this.instance_11 = new lib.Symbol7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(99.8,45.5,1,1,0,0,0,78.8,23.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(103).to({_off:false},0).to({alpha:1},12).to({_off:true},79).wait(82));

	// photo 3
	this.instance_12 = new lib.Symbol6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,124.5,1,1,0,0,0,165,137.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(92).to({_off:false},0).to({scaleX:0.98,scaleY:0.98,x:150.1,alpha:1},12).to({scaleX:0.91,scaleY:0.91,y:124.6},47).to({_off:true},1).wait(124));

	// photo 2
	this.instance_13 = new lib.Symbol4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,x:147.5,y:125.8,alpha:1},12).to({scaleX:1.1,scaleY:1.1,x:139,y:128},41).to({_off:true},27).wait(149));

	// Layer 7
	this.instance_14 = new lib.Symbol3("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(221,75.1,1,1,0,0,0,17,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).wait(39).to({startPosition:11},0).to({startPosition:11},6).to({_off:true},6).wait(217));

	// Layer 6
	this.instance_15 = new lib.Symbol2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(121.4,46,1,1,0,0,0,101.4,23.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},11).wait(36).to({startPosition:0},0).to({startPosition:0},6).to({_off:true},6).wait(217));

	// photo1
	this.instance_16 = new lib.Symbol1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(144.1,119,1.045,1.045,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:1,scaleY:1,x:150,y:125},53).to({_off:true},6).wait(217));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.3,113.4,313.5,261.3);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_pursuit_b_atlas_.jpg", id:"300x250_pursuit_b_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;