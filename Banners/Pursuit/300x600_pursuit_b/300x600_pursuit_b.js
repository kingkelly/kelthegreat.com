(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_pursuit_b_atlas_", frames: [[0,0,300,600],[302,0,300,600],[302,602,300,600],[0,1204,300,600],[0,602,300,600]]}
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
	this.spriteSheet = ss["300x600_pursuit_b_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo2 = function() {
	this.spriteSheet = ss["300x600_pursuit_b_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo3 = function() {
	this.spriteSheet = ss["300x600_pursuit_b_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo4 = function() {
	this.spriteSheet = ss["300x600_pursuit_b_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo5 = function() {
	this.spriteSheet = ss["300x600_pursuit_b_atlas_"];
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
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhAIAACB");
	this.shape.setTransform(0,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAADjIAAnF");
	this.shape_1.setTransform(0,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAFzIAArl");
	this.shape_2.setTransform(0,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAHzIAAvl");
	this.shape_3.setTransform(0,50.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAJhIAAzB");
	this.shape_4.setTransform(0,51.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAK/IAA19");
	this.shape_5.setTransform(0,52.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAMLIAA4V");
	this.shape_6.setTransform(0,53.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAANHIAA6N");
	this.shape_7.setTransform(0,53.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAANxIAA7h");
	this.shape_8.setTransform(0,54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAOLIAA8V");
	this.shape_9.setTransform(0,54.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAuSIAAcl");
	this.shape_10.setTransform(0,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,38.5,3,16);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA8IgOgDIgOgHIgMgIIASgWQAGAFANAGQAGACANABQAGAAAEgCQADgCABgEIAAgBQAAgDgFgCQgEgDgKgDIgSgEQgJgEgGgDQgFgEgEgFQgDgIAAgIIAAAAQAAgIADgIQADgGAGgGQAGgFAJgDQAIgCAKAAIAOABIANACIALAGIAKAGIgQAXQgIgFgJgDQgIgDgHAAQgGAAgDACQgDACAAAEIAAAAQAAAEAEACQAEADAMADIASAEQAIADAGAFQAGADADAGQADAGAAAIIAAABQAAAJgEAHQgDAHgHAFQgFAFgKADQgJACgKAAIgPgBg");
	this.shape.setTransform(241.9,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IBfAAIAAAbIg/AAIAAASIA5AAIAAAaIg5AAIAAASIA/AAIAAAcg");
	this.shape_1.setTransform(231,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA7IgXgkIgPAAIAAAkIghAAIAAh1IA4AAQAJAAAOADQAFACADACIAHAFQAGAGACAHQADAGAAAJIAAAAQAAAHgCAGIgFAJQgDAFgFADQgEAEgGACIAdApgAgVgCIAVAAQAIABAFgEQAFgEAAgGIAAgBQAAgHgFgEQgFgDgIAAIgVAAg");
	this.shape_2.setTransform(219.5,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWA5IgJgDIgJgGIgGgIIgEgJIgEgLIgBgOIAAhBIAiAAIAABAQAAAHABAFQACAEADADQADAEAEACQAEABAEAAQAFAAAEgBQAEgCADgDQADgDACgEQABgFAAgHIAAhBIAiAAIAABAIgBAOIgEAMIgEAJIgHAIIgIAGIgJADQgPADgIAAQgQgBgGgCg");
	this.shape_3.setTransform(206.6,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQA7IAAhZIgjAAIAAgcIBnAAIAAAcIgkAAIAABZg");
	this.shape_4.setTransform(194.5,10.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbA7Igyg/IAAA/IggAAIAAh1IAfAAIAvA+IAAg+IAhAAIAAB1g");
	this.shape_5.setTransform(182.3,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IBfAAIAAAbIg/AAIAAASIA5AAIAAAaIg5AAIAAASIA/AAIAAAcg");
	this.shape_6.setTransform(170.1,10.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOA8Igwh3IAlAAIAaBLIAbhLIAkAAIgwB3g");
	this.shape_7.setTransform(157.8,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3A7IAAh1IAtAAIAPAAQAGACAHACIALAFIAKAHIAHAJIAGAKQADAFAAAGIABAMIgBAMQAAAGgDAFIgGAKIgHAJIgKAIQgGADgGACIgNADIgOABgAgWAfIANAAQAHAAAGgCQAGgCAEgFQAEgDACgGQADgFAAgIQAAgGgDgGQgCgGgEgEQgEgDgGgCQgGgCgHAAIgNAAg");
	this.shape_8.setTransform(145.1,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfA8IgJgVIgtAAIgIAVIgjAAIAzh3IAfAAIAyB3gAANANIgNghIgNAhIAaAAg");
	this.shape_9.setTransform(131.6,10.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHA8IgMgCIgKgGIgJgIQgFgDgDgGQgDgFgCgFIgEgMIgBgMIAAgBIABgMIADgLIAGgLQADgFAFgEIAJgHQAFgEAFgCIAMgDIANgCQAJAAAIACQAGABAHAEIALAIQAFAEAEAGIgYATQgGgGgGgEQgHgEgHAAQgGAAgFACQgFADgEAEQgEAFgCAFQgCAHAAAFIAAAAQAAAGACAHQACAFAEAEQADAFAGADQAFACAGAAIAIgBIAHgDQAFgDAGgIIAZASIgJALQgFAFgHAEQgGADgIACQgIACgJAAQgGAAgGgCg");
	this.shape_10.setTransform(114.1,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQA7IAAh1IAhAAIAAB1g");
	this.shape_11.setTransform(105,10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAbA7Igyg/IAAA/IggAAIAAh1IAfAAIAvA+IAAg+IAhAAIAAB1g");
	this.shape_12.setTransform(95.6,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNA8IgMgDQgFgCgFgEIgKgHIgHgJQgEgFgCgGIgEgLIgBgMIAAgBIABgMIAEgLQACgFAEgFIAIgKIAJgHIAKgGQAHgDAGAAIAMgCQAHAAAGACQAHAAAGADIALAGIAJAHIAIAJIAGALIADALIABAMIAAAAIgBANIgEALQgCAFgDAFIgIAJIgJAIIgLAGQgHADgGAAIgNACQgGAAgHgCgAgLgdQgGADgEAEQgEAFgCAFQgCAHAAAFIAAAAQAAAGACAHQACAFAEAEQAFAFAFADQAGACAFAAQAHAAAFgCQAGgDAEgFQAEgEACgFQACgGAAgGIAAgBQAAgFgCgHQgCgFgEgFQgEgEgGgDQgFgCgHAAQgFAAgGACg");
	this.shape_13.setTransform(81.9,10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHA8IgMgCIgKgGIgJgIQgFgDgDgGQgDgFgCgFIgEgMIgBgMIAAgBIABgMIAEgLIAFgLQADgFAFgEIAJgHQAFgEAFgCIANgDIALgCQAKAAAIACQAGABAHAEIALAIQAFAEAEAGIgYATQgGgGgGgEQgGgEgJAAQgFAAgFACQgFADgEAEQgEAFgCAFQgCAHAAAFIAAAAQAAAGACAHQACAFAEAEQADAFAGADQAFACAFAAIAJgBIAHgDQAFgDAGgIIAZASIgJALQgGAFgGAEQgGADgIACQgIACgJAAQgGAAgGgCg");
	this.shape_14.setTransform(68.8,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQA7IAAh1IAhAAIAAB1g");
	this.shape_15.setTransform(59.6,10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARA7IgXgkIgPAAIAAAkIghAAIAAh1IA4AAQAJAAAOADQAFACADACIAHAFQAGAGACAHQADAGAAAJIAAAAQAAAHgCAGIgFAJQgDAFgFADQgEAEgGACIAdApgAgVgCIAVAAQAIABAFgEQAFgEAAgGIAAgBQAAgHgFgEQgFgDgIAAIgVAAg");
	this.shape_16.setTransform(46.5,10.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWA5IgJgDIgIgGIgHgIIgEgJIgEgLIgBgOIAAhBIAiAAIAABAQAAAHACAFQABAEADADQADAEAEACQAEABAEAAQAFAAAEgBQAEgCADgDQADgDACgEQABgFAAgHIAAhBIAhAAIAABAIgBAOIgCAMIgGAJIgGAIIgIAGIgJADQgPADgIAAQgQgBgGgCg");
	this.shape_17.setTransform(33.6,10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMA8IgNgDQgFgCgGgEIgJgHIgIgJQgDgFgCgGIgEgLIgBgMIAAgBIABgMIAEgLQACgFADgFIAIgKIAKgHIAKgGQAHgDAGAAIAMgCQAHAAAHACQAGAAAFADIALAGIAKAHIAHAJIAHALIADALIABAMIAAAAIgBANIgEALQgCAFgEAFIgHAJIgKAIIgLAGQgFADgHAAIgNACQgGAAgGgCgAgLgdQgGADgEAEQgEAFgCAFQgCAHAAAFIAAAAQAAAGACAHQACAFAEAEQAFAFAFADQAFACAGAAQAHAAAGgCQAFgDAEgFQAEgEACgFQADgGAAgGIAAgBQAAgFgDgHQgCgFgEgFQgEgEgFgDQgHgCgGAAQgGAAgFACg");
	this.shape_18.setTransform(20.1,10.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvA7IAAh1IBfAAIAAAcIg+AAIAAAUIA4AAIAAAbIg4AAIAAAqg");
	this.shape_19.setTransform(7.8,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-2,249.8,24.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAuIAAhcIBKAAIAAAWIgwAAIAAAOIArAAIAAAUIgrAAIAAAPIAxAAIAAAVg");
	this.shape.setTransform(-19.7,235.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAvIgJgDIgJgDIgHgHIgFgHIgFgIIgDgJIgBgKIABgJIADgJIAEgJIAGgHIAIgFIAIgFIAJgCIAJgBQAHgBAGACQAGABAFADIAJAGIAHAIIgTAPQgFgGgEgCQgFgDgHAAQgEAAgEACIgHAFQgDADgBAFQgCAFAAAEIAAAAQAAAFACAEQABAFADADQADAEAEACQAEACAEAAIAHgBIAFgCQAFgDAEgFIAUANIgIAIIgJAIQgFADgGABQgGACgIAAIgIgCg");
	this.shape_1.setTransform(-29.1,235.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVAuIgmgxIAAAxIgaAAIAAhcIAYAAIAlAwIAAgwIAaAAIAABcg");
	this.shape_2.setTransform(-39.2,235.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAvIgHgQIgjAAIgGAQIgbAAIAohdIAYAAIAnBdgAAKALIgKgaIgKAaIAUAAg");
	this.shape_3.setTransform(-49.7,235);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAvIgmhdIAdAAIAUA6IAVg6IAdAAIgmBdg");
	this.shape_4.setTransform(-60,235.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrAuIAAhcIAjAAIALABIALACIAJAFQAEACADADIAGAHIAEAIIADAIIABAKIgBAJIgDAJIgEAIIgGAHIgIAGIgJAEIgKACIgLABgAgSAYIALAAQAGgBADgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgFgCgEQgCgFgDgDQgEgDgFgBQgDgCgGAAIgLAAg");
	this.shape_5.setTransform(-70,235.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAvIgIgQIgjAAIgGAQIgbAAIAohdIAXAAIAoBdgAAKALIgKgaIgKAaIAUAAg");
	this.shape_6.setTransform(-80.5,235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVAuIgngxIAAAxIgZAAIAAhcIAYAAIAlAxIAAgxIAaAAIAABcg");
	this.shape_7.setTransform(-31.4,220.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAuIAAhcIAZAAIAABcg");
	this.shape_8.setTransform(-38.8,220.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOAuIgXgiIgJALIAAAXIgaAAIAAhcIAaAAIAAAmIAfgmIAfAAIgkApIAlAzg");
	this.shape_9.setTransform(-49,220.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAwIgJgEQgFgBgEgDIgHgGIgGgHQgDgDgBgFIgDgJIgBgKIABgJIADgJQABgFADgDIAGgIIAIgFIAIgFIAKgDIAJAAIALAAIAJADIAJAFIAHAFIAGAHQADAFABAEIADAJIABAJIAAAAIgBAJIgDAJQgBAFgDAEIgGAHIgIAGIgIAEIgKAEIgKABIgKgBgAgJgWQgEACgDADIgFAIQgCAFAAAEIAAAAQAAAFACAEQACAFADADQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEIAFgIQACgEAAgFQAAgEgCgFIgFgIQgDgEgEgBQgFgDgFAAQgEABgFACg");
	this.shape_10.setTransform(-59.8,220.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAwIgJgEQgFgBgEgDIgHgGIgGgHQgDgDgBgFIgDgJIgBgKIABgJIADgJQABgFADgDIAGgIIAIgFIAIgFIAKgDIAJAAIALAAIAJADIAJAFIAHAFIAGAHQADAFABAEIADAJIABAJIAAAAIgBAJIgDAJQgBAFgDAEIgGAHIgIAGIgIAEIgKAEIgKABIgKgBgAgJgWQgEACgDADIgFAIQgCAFAAAEIAAAAQAAAFACAEQACAFADADQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEIAFgIQACgEAAgFQAAgEgCgFIgFgIQgDgEgEgBQgFgDgFAAQgEABgFACg");
	this.shape_11.setTransform(-70.8,220.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpAuIAAhcIAvAAQAJAAAGACQAGACAEAEQADADACAEQABAEABAFIAAAAIgBAIIgEAFIgEAFIgGACIAIADQAEACACADIADAGIABAJIAAAAQAAAGgCAFQgCAEgFAEQgEADgHABQgHACgIAAgAgPAaIASAAQAHAAACgCQAEgCAAgFQAAgEgEgCQgDgCgGgBIgSAAgAgPgJIAPAAQAFAAAEgCQADgBAAgFIAAAAQAAgEgDgCQgDgCgGAAIgPAAg");
	this.shape_12.setTransform(-80.8,220.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAtIgHgDIgHgFIgFgGIgEgHIgCgJIAAgLIAAgyIAaAAIAAAyIABAJQABADACADQACACAEABQADACADAAQAEAAADgCQADgBACgCIAEgGIABgJIAAgyIAbAAIAAAyIgCALIgCAJIgDAHIgGAGIgGAFIgHADQgMACgGAAQgMgBgFgBg");
	this.shape_13.setTransform(-12.4,206.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAvIgJgCQgFgCgEgDIgHgFIgGgIQgDgDgBgFIgDgJIgBgKIABgJIADgJQABgEADgEIAGgIIAIgGIAIgEIAKgCIAJgCIALACIAJACIAJAEIAHAGIAGAIQADAEABAEIADAJIABAJIAAAAIgBAKIgDAJQgBAEgDAEIgGAHIgIAGIgIAFIgKACIgKABIgKgBgAgJgXQgEACgDAEIgFAIQgCAFAAAEIAAAAQAAAFACAFQACAEADAEQADADAEACQAFACAEAAQAFAAAFgCQAEgCADgDIAFgIQACgFAAgFQAAgEgCgEIgFgIQgDgEgEgCQgFgCgFgBQgEAAgFACg");
	this.shape_14.setTransform(-22.9,206.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMAvIAAgkIgkg4IAeAAIATAhIATghIAcAAIgjA4IAAAkg");
	this.shape_15.setTransform(-33.2,206.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVAvIgmgzIAAAzIgaAAIAAhcIAYAAIAlAvIAAgvIAaAAIAABcg");
	this.shape_16.setTransform(-46.8,206.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglAvIAAhcIBKAAIAAAVIgwAAIAAAPIArAAIAAATIgrAAIAAAPIAxAAIAAAWg");
	this.shape_17.setTransform(-56.3,206.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQAvIAAgkIggAAIAAAkIgZAAIAAhcIAZAAIAAAiIAgAAIAAgiIAaAAIAABcg");
	this.shape_18.setTransform(-65.9,206.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAvIgSg1IgSA1IgXAAIgehcIAbAAIAQA0IASg1IAVAAIASA1IAQg0IAbAAIgfBcg");
	this.shape_19.setTransform(-78.3,206.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA+CHQgMgGgKgKQgJgKgFgNQgFgOAAgOIAAgBQAAgPAFgOQAFgNAJgKQAKgKAMgFQAOgGAQAAQAPAAAOAGQAMAFAKAKQAJAKAFANQAFAOAAAOIAAABQAAAPgFAOQgFANgJAKQgKAKgNAGQgNAGgQAAQgPAAgOgGgABLAtQgGAIAAANIAAABQAAANAGAJQAHAJAKAAQAKAAAGgJQAGgIAAgNIAAgBQAAgNgGgJQgHgIgKgBQgKABgGAIgAiDCJIBziSIBfh/IA1AAIh2CVIhcB8gAh4ABQgNgEgJgLQgKgKgFgNQgEgNAAgPIAAgCQAAgPAEgNQAFgOAKgJQAJgLANgFQAOgGAPAAQAQAAANAGQANAFAKALQAJAJAFAOQAFAOAAAOIAAABQAAAPgFAOQgFANgKAKQgJAKgNAFQgOAGgPAAQgQAAgNgGgAhshYQgGAIAAANIAAABQAAANAHAJQAHAJAJAAQAKAAAHgJQAGgIAAgNIAAgCQAAgNgGgIQgHgJgKAAQgKAAgHAJg");
	this.shape_20.setTransform(-122,247);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgbCLQgNgCgNgFQgLgGgKgIQgKgHgIgLQgIgJgHgLQgGgMgEgNQgFgMgCgOIgCgcIAAgBQAAgOACgNQACgOAFgNQAFgNAGgMQAGgLAJgJQAIgKAKgIQAKgIALgGQAMgFANgDQAOgDANAAQAPAAANADQANADAMAFQAMAGAJAIQAKAIAJAJQAIAKAGALQAGALAFANQAFANACAOIACAcIAAAAQAAAPgCANQgCAOgFANQgFANgGALQgGALgJAKQgIAKgKAIQgKAIgLAFQgNAFgNADQgNAEgOAAQgOAAgNgEgAgUhFQgJAGgHAKQgGAKgEANQgEAOAAAQIAAAAQAAAQAEAOQAEAOAGAKQAHAKAKAGQAJAFAKAAQALAAAKgFQAKgGAGgKQAHgJADgPQAEgNAAgQIAAgBQAAgPgFgOQgDgOgHgKQgGgKgKgGQgJgFgLAAQgLAAgJAFg");
	this.shape_21.setTransform(-153.8,247);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhsCMIAAg6IBnhOQASgOAIgLQAIgLAAgNQAAgMgIgHQgJgIgMAAQgOAAgMAJQgMAHgQATIg0grQAMgOALgLQAMgLAMgHQAOgIAPgEQAQgDATAAQAVgBATAHQATAGAOAMQANAMAHAPQAIARAAATIAAABQAAAQgFANQgDAMgJALQgHALgMALIgcAUIguAiIBwAAIAAA+g");
	this.shape_22.setTransform(-180.4,246.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhXBsIAAjXICtAAIAAAzIhxAAIAAAhIBmAAIAAAuIhmAAIAAAiIBzAAIAAAzg");
	this.shape_23.setTransform(-113.6,213.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbBtIhXjZIBDAAIAwCIIAxiIIBBAAIhXDZg");
	this.shape_24.setTransform(-136,213.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA4BtIgPgnIhTAAIgPAnIg/AAIBcjZIA5AAIBcDZgAAXAYIgXg9IgYA9IAvAAg");
	this.shape_25.setTransform(-159.9,213.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBtQgOgCgNgFQgNgEgLgHQgMgGgKgJIAhgoQALAIAXALQAMAFAXACQAMAAAHgEQAGgEAAgHIAAgBQAAgGgHgFQgIgEgUgFQgUgFgNgEQgPgFgKgIQgMgGgFgLQgHgMAAgQIAAgBQAAgPAGgMQAGgNAKgJQAMgKAPgFQAQgFASAAQANAAANACQAMACALADQALAEAKAFQAKAGAJAHIgeAqQgPgKgQgGQgPgFgOAAQgKAAgGAEQgFAEAAAGIAAAAQAAAIAHAEQAIAEAVAFQAUAFAOAFQAPAFAKAIQALAHAFALQAFALAAAPIAAAAQAAAQgGAOQgGANgLAJQgMAJgQAFQgQAFgUAAQgNAAgOgDg");
	this.shape_26.setTransform(-182.5,213.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-196.3,190.6,192.6,83.1), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdCcQgVgDgRgHQgTgGgQgKQgSgJgOgNIAwg5QAPAMAhAQQARAGAiADQARAAAJgFQAJgGAAgKIAAgBQAAgKgLgGQgKgGgegHQgcgHgSgGQgWgIgOgKQgRgKgIgPQgJgRAAgXIAAgBQAAgVAIgSQAJgSAPgOQAPgNAXgHQAWgHAbAAQATAAARACQASADAQAFQAPAFAOAIQAOAHANAKIgrA9QgVgPgWgIQgXgIgTAAQgPAAgIAGQgIAFAAAJIAAABQAAALALAGQALAGAeAHQAdAGAUAHQAVAIAPALQAPALAHAPQAJAQgBAVIAAABQABAXgKATQgJASgQANQgQANgXAHQgXAHgdAAQgSAAgUgDg");
	this.shape.setTransform(109.1,157.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeCcQgTgDgTgHQgSgGgRgKQgQgJgOgNIAvg5QAPAMAhAQQAQAGAjADQARAAAJgFQAJgGAAgKIAAgBQAAgKgKgGQgMgGgdgHQgcgHgSgGQgWgIgPgKQgQgKgIgPQgJgRAAgXIAAgBQAAgVAIgSQAIgSAQgOQAQgNAVgHQAXgHAbAAQATAAASACQARADAQAFQAQAFAOAIQANAHANAKIgrA9QgVgPgWgIQgWgIgUAAQgPAAgIAGQgIAFAAAJIAAABQAAALALAGQALAGAeAHQAdAGATAHQAWAIAOALQAPALAJAPQAHAQABAVIAAABQgBAXgIATQgJASgRANQgQANgXAHQgYAHgbAAQgUAAgUgDg");
	this.shape_1.setTransform(80.4,157.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABRCbIgXg3Ih1AAIgWA3IhaAAICDk1IBRAAICDE1gAAiAhIgihWIgiBWIBEAAg");
	this.shape_2.setTransform(49.1,157.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiBCaIAAkzICDAAQAdAAAYAHQAXAHARAPQARANAJAVQAJAcAAARIAAABQAAANgDANQgCAMgFAJQgFAKgHAJIgPAQQgSANgYAIQgZAHgbAAIgrAAIAABYgAgsAAIApAAQAKAAAJgDQAJgDAHgFQAGgFADgHQAEgIAAgJIAAgBQAAgJgEgJQgDgHgGgFQgHgFgJgCQgJgDgKAAIgpAAg");
	this.shape_3.setTransform(17.7,157.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArCaIg9hdIgmAAIAABdIhVAAIAAkzICRAAQAXAAAlAJQANAEAJAGQALAHAHAIQAOANAHARQAGATAAAWIAAABQABASgFAOQgEAPgJALQgIAMgMAJQgLAIgPAGIBJBsgAg4gFIA4AAQAWAAAMgKQAMgJAAgSIAAgBQgBgSgMgJQgLgJgWAAIg4AAg");
	this.shape_4.setTransform(234.7,114.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah8CaIAAkzID3AAIAABIIijAAIAAAvICTAAIAABDIiTAAIAAAwIClAAIAABJg");
	this.shape_5.setTransform(203.6,114.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArCaIg9hdIgmAAIAABdIhUAAIAAkzICQAAQAXAAAlAJQAMAEAKAGQALAHAHAIQAOANAGARQAIATgBAWIAAABQAAASgEAOQgFAPgIALQgIAMgMAJQgLAIgPAGIBJBsgAg4gFIA4AAQAWAAAMgKQAMgJAAgSIAAgBQAAgSgNgJQgMgJgVAAIg4AAg");
	this.shape_6.setTransform(173.7,114.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiCdQgQgDgQgGQgOgGgOgJQgNgIgLgLQgLgLgJgNQgJgMgGgPQgGgPgDgPQgDgQAAgQIAAgBQAAgQADgPQADgQAHgPQAGgOAJgNQAIgNALgKQAMgLANgJQANgJAPgFQAPgHARgDQARgDAQAAQASAAARADQAQADAPAHQAPAFANAJQAOAJALALQALAKAIANQAJANAGAOQAGAPAEAPQADAQAAAQIAAAAQAAARgDAPQgEAQgGAOQgGAOgJANQgJANgLALQgLALgNAJQgOAJgPAGQgPAGgQADQgRADgRAAQgRAAgRgDgAgfhLQgPAFgKANQgKAKgGAQQgGAOAAARIAAAAQAAARAGAPQAGAPAKALQALAMAOAHQAPAGAQAAQARAAAPgGQAOgHALgLQAKgLAGgPQAGgPAAgRIAAgBQAAgQgGgPQgGgOgKgMQgLgMgOgGQgPgHgRAAQgRAAgOAHg");
	this.shape_7.setTransform(138.5,114.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah0CaIAAkzIBVAAIAADoICUAAIAABLg");
	this.shape_8.setTransform(107.6,114.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiBCaIAAkzICDAAQAdAAAYAHQAXAIARANQARAPAJATQAJAdAAARIAAABQAAAOgDAMQgCALgFAKQgFAKgHAJIgPAQQgSAOgYAHQgZAHgbAAIgrAAIAABYgAgsAAIApAAQAKAAAJgCQAJgDAHgGQAGgFADgIQAEgHAAgJIAAAAQAAgLgEgHQgDgIgGgFQgHgFgJgDQgJgDgKAAIgpAAg");
	this.shape_9.setTransform(79.3,114.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA6CaIg6hdIg7BdIhgAAIBpibIhliYIBiAAIA2BXIA3hXIBgAAIhmCXIBqCcg");
	this.shape_10.setTransform(47.5,114.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah8CaIAAkzID3AAIAABIIijAAIAAAvICTAAIAABDIiTAAIAAAwIClAAIAABJg");
	this.shape_11.setTransform(17.2,114.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah8CaIAAkzID3AAIAABJIijAAIAAAuICTAAIAABCIiTAAIAAAyIClAAIAABIg");
	this.shape_12.setTransform(223.1,71.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqCaIAAjoIhcAAIAAhLIENAAIAABLIhcAAIAADog");
	this.shape_13.setTransform(193.4,71.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABRCbIgXg3Ih1AAIgWA3IhaAAICDk1IBRAAICDE1gAAiAhIgihWIgiBWIBEAAg");
	this.shape_14.setTransform(161.4,71.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABOCaIAAiwIhOB3IgBAAIhOh2IAACvIhUAAIAAkzIBaAAIBJB3IBJh3IBaAAIAAEzg");
	this.shape_15.setTransform(124.9,71.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqCaIAAkzIBVAAIAAEzg");
	this.shape_16.setTransform(98.7,71.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqCaIAAjoIhcAAIAAhLIENAAIAABLIhcAAIAADog");
	this.shape_17.setTransform(77,71.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah0CaIAAkzIBVAAIAADoICUAAIAABLg");
	this.shape_18.setTransform(49.8,71.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7CUQgNgEgLgHQgMgGgJgIQgJgJgHgLQgIgLgEgNQgFgNgDgRQgCgPAAgSIAAisIBWAAIAACqQAAAQAEANQAEAMAIAIQAHAJALAEQAKADAMABQANgBAKgDQALgEAHgIQAIgHAEgMQAEgNAAgPIAAitIBWAAIAACpQAAATgCAQQgDARgFANQgFAOgHAKQgHALgKAKQgJAIgMAGQgLAHgNAEQgmAJgVAAQgqgDgRgGg");
	this.shape_19.setTransform(18.7,72);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah8CaIAAkzID3AAIAABIIijAAIAAAvICTAAIAABDIiTAAIAAAwIClAAIAABJg");
	this.shape_20.setTransform(79.7,28.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA2CaIAAh1IhsAAIAAB1IhVAAIAAkzIBVAAIAAB0IBsAAIAAh0IBWAAIAAEzg");
	this.shape_21.setTransform(47.8,28.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgqCaIAAjoIhcAAIAAhLIENAAIAABLIhcAAIAADog");
	this.shape_22.setTransform(16.5,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,251.6,185.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBUQgKgBgIgDQgKgEgIgEIgRgNIAWgaQAMALAMAEIANAFQAGABAGAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgHgFgTgFQgOgEgJgDQgKgEgIgFQgHgFgEgJQgDgIAAgMIAAgBQAAgLADgKQAFgJAIgGQAIgHALgEQAKgDANgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgKAAgGAEQgFAFAAAGIAAAAQAAAIAIAFQAGADAWAHQANADAJAEQAKAFAGAEQAIAGADAIQADAIABALIAAABQgBALgEALQgFAJgHAHQgJAHgLADQgMAEgNgBQgIAAgKgCg");
	this.shape.setTransform(214.1,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_1.setTransform(197.5,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_2.setTransform(179.6,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_3.setTransform(162.1,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgGQgGgGgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgHAGgFQAGgGAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAGIAKAMQAFAHADAIQAEAIABAIQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAJgFAGQgEAIgGAGIgNAKIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_4.setTransform(141.7,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BUIAAinIAlAAIAACFIBSAAIAAAig");
	this.shape_5.setTransform(123.7,39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBUIAAinIBDAAQAPAAAMAFQAMADAJAIQAIAIAEAKQAFALAAANIAAABIgCANIgDALQgGALgKAIQgIAHgNAEQgMADgOAAIgbAAIAAAzgAgcABIAcAAQAGgBAHAAQAEgCAFgEQADgDACgFQACgFAAgFIAAAAQAAgGgCgFQgCgFgEgDQgEgDgGgCQgFgBgGgBIgcAAg");
	this.shape_6.setTransform(107.3,39.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBUIglg5IgmA5IgpAAIA6hUIg4hTIArAAIAiA2IAkg2IAqAAIg5BSIA8BVg");
	this.shape_7.setTransform(88.9,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_8.setTransform(71.4,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_9.setTransform(46.2,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_10.setTransform(27.7,39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_11.setTransform(9.8,39.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgGQgGgGgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgHAGgFQAGgGAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAGIAKAMQAFAHADAIQAEAIABAIQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAJgFAGQgEAIgGAGIgNAKIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_12.setTransform(132.8,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_13.setTransform(113.8,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBUQgKgBgIgDQgKgEgIgEIgRgNIAWgaQAMALAMAEIANAFQAGABAGAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgHgFgTgFQgOgEgJgDQgKgEgIgFQgHgFgEgJQgDgIAAgMIAAgBQAAgLADgKQAFgJAIgGQAIgHALgEQAKgDANgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgKAAgGAEQgFAFAAAGIAAAAQAAAIAIAFQAGADAWAHQANADAJAEQAKAFAGAEQAIAGADAIQADAIABALIAAABQgBALgEAKQgFAKgHAHQgJAHgLADQgMAEgNgBQgIAAgKgCg");
	this.shape_14.setTransform(89,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAXQAGAAAFgCQAFgCADgDQAFgGgBgKIgOAAIAAgmIAmAAIAAAhQAAAKgDAJQgDAIgGAGQgFAFgIADQgIACgLABg");
	this.shape_15.setTransform(76.8,8.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_16.setTransform(65,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_17.setTransform(47.5,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_18.setTransform(29.6,12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_19.setTransform(11.1,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,225.2,55), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgJgDQgKgEgIgEIgQgNIAVgaQANALALAEIANAFQAGABAHAAQALAAAHgFQAGgDAAgIIAAAAQAAgIgGgEQgIgFgTgFQgPgEgIgDQgKgEgIgFQgHgFgEgJQgDgIAAgMIAAgBQAAgLADgKQAFgJAIgGQAIgHALgEQAKgDANgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgKAAgGAEQgFAFAAAGIAAAAQAAAIAIAFQAGADAWAHQANADAJAEQAKAFAGAEQAIAGADAIQAEAIAAALIAAABQAAALgFALQgFAJgHAHQgJAHgLADQgMAEgNgBQgIAAgKgCg");
	this.shape.setTransform(174.9,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_1.setTransform(158.3,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_2.setTransform(140.4,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBUIgzhIIgTAUIAAA0IglAAIAAinIAlAAIAABKIBDhKIAsAAIhEBHIBIBgg");
	this.shape_3.setTransform(123.1,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_4.setTransform(104.8,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_5.setTransform(87.8,39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgKgDQgJgEgJgEIgQgNIAXgaQAMALALAEIANAFQAHABAFAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgHgFgTgFQgOgEgJgDQgKgEgHgFQgIgFgDgJQgFgIAAgMIAAgBQAAgLAFgKQAEgJAIgGQAHgHALgEQALgDANgBIARACIAQAEIAPAHIAOAJIgTAcQgMgIgLgFQgLgEgJAAQgLAAgFAEQgGAFAAAGIAAAAQAAAIAHAFQAHADAVAHQAOADAJAEQAKAFAHAEQAGAGAEAIQAEAIgBALIAAABQABALgFALQgEAJgJAHQgIAHgLADQgLAEgOgBQgJAAgJgCg");
	this.shape_6.setTransform(70.5,39.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_7.setTransform(46.2,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_8.setTransform(27.7,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_9.setTransform(9.8,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgGQgGgGgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgHAGgFQAGgGAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAGIAKAMQAFAHADAIQAEAIABAIQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAJgFAGQgEAIgGAGIgNAKIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_10.setTransform(132.8,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_11.setTransform(113.8,12.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBUQgKgBgIgDQgKgEgIgEIgRgNIAWgaQAMALAMAEIANAFQAGABAGAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgHgFgTgFQgOgEgJgDQgKgEgIgFQgHgFgEgJQgDgIAAgMIAAgBQAAgLADgKQAFgJAIgGQAIgHALgEQAKgDANgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgKAAgGAEQgFAFAAAGIAAAAQAAAIAIAFQAGADAWAHQANADAJAEQAKAFAGAEQAIAGADAIQADAIABALIAAABQgBALgEAKQgFAKgHAHQgJAHgLADQgMAEgNgBQgIAAgKgCg");
	this.shape_12.setTransform(89,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAXQAGAAAFgCQAFgCADgDQAFgGgBgKIgOAAIAAgmIAmAAIAAAhQAAAKgDAJQgDAIgGAGQgFAFgIADQgIACgLABg");
	this.shape_13.setTransform(76.8,8.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_14.setTransform(65,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_15.setTransform(47.5,12.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_16.setTransform(29.6,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_17.setTransform(11.1,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,185.9,55), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,330,660), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgNBUQgJgBgJgDQgKgEgIgEIgQgNIAVgaQANALALAEIANAFQAGABAHAAQALAAAHgFQAGgDAAgIIAAAAQAAgIgGgEQgIgFgTgFQgPgEgIgDQgKgEgIgFQgHgFgEgJQgDgIAAgMIAAgBQAAgLADgKQAFgJAIgGQAIgHALgEQAKgDANgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgJAAgHAEQgFAFAAAGIAAAAQAAAIAIAFQAGADAWAHQANADAJAEQAKAFAGAEQAIAGADAIQAEAIAAALIAAABQAAALgFALQgFAJgHAHQgJAHgLADQgMAEgNgBQgIAAgKgCg");
	this.shape.setTransform(228.9,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_1.setTransform(212.3,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_2.setTransform(194.4,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_3.setTransform(176.9,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_4.setTransform(159,39.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhMBUIAAinIBBAAQAKAAAIACQAJABAJADQAHADAIAFIANAKQAFAGAFAGIAIAPIAFAQQABAHABAJIAAAAQgBAJgBAIIgFAQIgIAOQgFAHgFAFQgGAHgHAEQgIAEgHADIgSAGQgIABgKAAgAgnAyIAcAAQALABAJgEQAJgDAHgHQAGgHAEgJQAEgJAAgLIAAgBQAAgKgEgKQgEgIgGgHQgHgIgJgDQgJgDgLgBIgcAAg");
	this.shape_5.setTransform(140.6,39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBUIhQhqIAABqIglAAIAAinIAjAAIBNBnIAAhnIAlAAIAACng");
	this.shape_6.setTransform(120.3,39.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAyBVIgPgmIhGAAIgPAmIgmAAIBIioIAhAAIBICogAAWAOIgWg1IgWA1IAsAAg");
	this.shape_7.setTransform(100.4,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBVIgmhtIglBtIggAAIg5ioIAnAAIAjBwIAmhxIAfAAIAlBxIAjhwIAmAAIg5Cog");
	this.shape_8.setTransform(76.5,39.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_9.setTransform(46.2,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_10.setTransform(27.7,39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_11.setTransform(9.8,39.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBVQgJgCgIgDQgIgDgHgFQgIgEgFgGQgGgGgFgHQgFgHgDgIQgDgIgCgIQgBgJAAgIIAAgBQAAgIABgIQACgJADgIQADgHAFgIQAFgHAGgFQAGgGAHgFQAHgFAIgDQAIgDAJgCQAJgCAJAAQAKAAAJACQAJACAIADQAIADAHAFQAHAFAGAGIAKAMQAFAHADAIQAEAIABAIQACAJAAAIIAAAAQAAAJgCAJQgBAIgEAHQgDAJgFAGQgEAIgGAGIgNAKIgQAIQgIADgJACQgJACgJAAQgJAAgJgCgAgUgwQgJAFgHAHQgHAGgDAKQgEAKAAAKIAAAAQAAALAEAJQAEAKAGAHQAHAIAJADQAKAFAKAAQALAAAJgFQAJgEAHgGQAHgIAEgJQADgKAAgKIAAgBQAAgKgDgKQgEgJgHgHQgHgHgJgFQgKgEgKAAQgKAAgKAEg");
	this.shape_12.setTransform(132.8,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBUIAAiFIg0AAIAAgiICLAAIAAAiIg0AAIAACFg");
	this.shape_13.setTransform(113.8,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBUQgKgBgIgDQgKgEgIgEIgRgNIAWgaQAMALAMAEIANAFQAGABAGAAQAMAAAGgFQAHgDAAgIIAAAAQAAgIgHgEQgHgFgTgFQgOgEgJgDQgKgEgIgFQgHgFgEgJQgDgIAAgMIAAgBQAAgLADgKQAFgJAIgGQAIgHALgEQAKgDANgBIARACIAQAEIAPAHIANAJIgTAcQgLgIgKgFQgMgEgKAAQgKAAgGAEQgFAFAAAGIAAAAQAAAIAIAFQAGADAWAHQANADAJAEQAKAFAGAEQAIAGADAIQADAIABALIAAABQgBALgEAKQgFAKgHAHQgJAHgLADQgMAEgNgBQgIAAgKgCg");
	this.shape_14.setTransform(89,12.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAXQAGAAAFgCQAFgCADgDQAFgGgBgKIgOAAIAAgmIAmAAIAAAhQAAAKgDAJQgDAIgGAGQgFAFgIADQgIACgLABg");
	this.shape_15.setTransform(76.8,8.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_16.setTransform(65,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdBUIgjg2IgdAAIAAA2IglAAIAAinIBMAAQALAAASAFQAMADAIAJQAHAHAEAKQAEAJAAANIAAAAQAAAKgDAJQgDAHgEAGQgFAGgHAGQgGAEgIADIApA8gAgjgCIAlAAQAHAAAFgBQAFgCAEgDQADgDACgEQACgFAAgFIAAAAQAAgHgCgEQgCgEgEgDQgDgDgGgCQgFgBgHgBIgkAAg");
	this.shape_17.setTransform(47.5,12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIB+AAIAAAhIhZAAIAAAiIBOAAIAAAgIhOAAIAAAjIBaAAIAAAhg");
	this.shape_18.setTransform(29.6,12.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAjBUIAAhDIhEAAIAABDIglAAIAAinIAlAAIAABDIBEAAIAAhDIAkAAIAACng");
	this.shape_19.setTransform(11.1,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.9,55);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.photo1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.redbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1844").s().p("EgXvAvRMAAAhehMAvfAAAMAAABehg");
	this.shape.setTransform(152,302.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redbg, new cjs.Rectangle(0,0,304,605), null);


// stage content:
(lib._300x600_pursuit_b = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// pursuit
	this.instance = new lib.Symbol14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(103,564,1,1,0,0,0,78,14);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-1)).wait(1));

	// Layer 15
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.4,33.1,1,1,0,0,0,89.4,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(237).to({_off:false},0).wait(1).to({regX:125.1,regY:10.4,x:43.4,y:35.5,alpha:0.002},0).wait(1).to({x:44.1,alpha:0.009},0).wait(1).to({x:45.6,alpha:0.022},0).wait(1).to({x:47.9,alpha:0.044},0).wait(1).to({x:51.6,alpha:0.078},0).wait(1).to({x:57.2,alpha:0.13},0).wait(1).to({x:66,alpha:0.211},0).wait(1).to({x:79.4,alpha:0.336},0).wait(1).to({x:96.4,alpha:0.493},0).wait(1).to({x:111,alpha:0.628},0).wait(1).to({x:121.4,alpha:0.725},0).wait(1).to({x:128.9,alpha:0.794},0).wait(1).to({x:134.5,alpha:0.846},0).wait(1).to({x:138.8,alpha:0.886},0).wait(1).to({x:142.1,alpha:0.916},0).wait(1).to({x:144.7,alpha:0.94},0).wait(1).to({x:146.6,alpha:0.959},0).wait(1).to({x:148.2,alpha:0.973},0).wait(1).to({x:149.3,alpha:0.984},0).wait(1).to({x:150.2,alpha:0.991},0).wait(1).to({x:150.7,alpha:0.996},0).wait(1).to({x:151,alpha:0.999},0).wait(1).to({regX:89.4,regY:8,x:115.4,y:33.1,alpha:1},0).wait(16));

	// Layer 14
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(153.4,110.7,1,1,0,0,0,25.4,20);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).wait(1).to({regX:-100,regY:231.4,x:28.2,y:322.1,alpha:0.002},0).wait(1).to({x:28.9,alpha:0.009},0).wait(1).to({x:30.1,alpha:0.022},0).wait(1).to({x:32.2,alpha:0.044},0).wait(1).to({x:35.4,alpha:0.078},0).wait(1).to({x:40.4,alpha:0.13},0).wait(1).to({x:48.1,alpha:0.211},0).wait(1).to({x:59.9,alpha:0.336},0).wait(1).to({x:74.8,alpha:0.493},0).wait(1).to({x:87.7,alpha:0.628},0).wait(1).to({x:96.9,alpha:0.725},0).wait(1).to({x:103.5,alpha:0.794},0).wait(1).to({x:108.4,alpha:0.846},0).wait(1).to({x:112.2,alpha:0.886},0).wait(1).to({x:115.1,alpha:0.916},0).wait(1).to({x:117.3,alpha:0.94},0).wait(1).to({x:119.1,alpha:0.959},0).wait(1).to({x:120.4,alpha:0.973},0).wait(1).to({x:121.4,alpha:0.984},0).wait(1).to({x:122.2,alpha:0.991},0).wait(1).to({x:122.6,alpha:0.996},0).wait(1).to({x:122.9,alpha:0.999},0).wait(1).to({regX:25.4,regY:20,x:248.4,y:110.7,alpha:1},0).wait(8));

	// Layer 16
	this.instance_3 = new lib.Symbol13("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(131,264.2,1,1,90,0,0,0,46.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(257).to({_off:false},0).wait(19));

	// Layer 13
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,115.1,1,1,0,0,0,67,51);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(242).to({_off:false},0).wait(1).to({regX:125.9,regY:93.3,x:47.2,y:157.4,alpha:0.002},0).wait(1).to({x:47.9,alpha:0.009},0).wait(1).to({x:49.3,alpha:0.022},0).wait(1).to({x:51.6,alpha:0.044},0).wait(1).to({x:55.1,alpha:0.078},0).wait(1).to({x:60.6,alpha:0.13},0).wait(1).to({x:69.1,alpha:0.211},0).wait(1).to({x:82.2,alpha:0.336},0).wait(1).to({x:98.7,alpha:0.493},0).wait(1).to({x:112.9,alpha:0.628},0).wait(1).to({x:123,alpha:0.725},0).wait(1).to({x:130.3,alpha:0.794},0).wait(1).to({x:135.8,alpha:0.846},0).wait(1).to({x:139.9,alpha:0.886},0).wait(1).to({x:143.1,alpha:0.916},0).wait(1).to({x:145.6,alpha:0.94},0).wait(1).to({x:147.6,alpha:0.959},0).wait(1).to({x:149.1,alpha:0.973},0).wait(1).to({x:150.2,alpha:0.984},0).wait(1).to({x:151,alpha:0.991},0).wait(1).to({x:151.5,alpha:0.996},0).wait(1).to({x:151.8,alpha:0.999},0).wait(1).to({regX:67,regY:51,x:93,y:115.1,alpha:1},0).wait(11));

	// REDEND
	this.instance_5 = new lib.redbg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-153.9,126.6,1,1,0,0,0,152,128.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(234).to({_off:false},0).wait(1).to({regY:302.5,x:-151.9,y:300.6},0).wait(1).to({x:-144.3},0).wait(1).to({x:-127.4},0).wait(1).to({x:-93.4},0).wait(1).to({x:-34.7},0).wait(1).to({x:23.7},0).wait(1).to({x:63.5},0).wait(1).to({x:90.1},0).wait(1).to({x:108.8},0).wait(1).to({x:122.2},0).wait(1).to({x:131.9},0).wait(1).to({x:138.9},0).wait(1).to({x:143.7},0).wait(1).to({x:146.9},0).wait(1).to({x:148.6},0).wait(1).to({regY:128.5,x:149.1,y:126.6},0).wait(26));

	// Layer 11
	this.instance_6 = new lib.Symbol3("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(243.8,81.9,1,1,0,0,0,17,0);
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
	this.instance_10.setTransform(204.6,81.9,1,1,0,0,0,17,0);
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
	this.instance_14.setTransform(257.3,82.3,1,1,0,0,0,17,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(8).to({_off:false},0).to({_off:true},51).wait(217));

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
p.nominalBounds = new cjs.Rectangle(137.3,288.4,313.5,627);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_pursuit_b_atlas_.jpg", id:"300x600_pursuit_b_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;