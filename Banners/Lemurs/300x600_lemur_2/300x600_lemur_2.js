(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x600_lemur_2_atlas_", frames: [[296,470,83,49],[296,334,201,134],[0,334,294,328],[0,0,432,332]]}
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
	this.spriteSheet = ss["300x600_lemur_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sk_landlemur = function() {
	this.spriteSheet = ss["300x600_lemur_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.sk_lemur = function() {
	this.spriteSheet = ss["300x600_lemur_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.sk_pattern = function() {
	this.spriteSheet = ss["300x600_lemur_2_atlas_"];
	this.gotoAndStop(3);
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


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sk_lemur();
	this.instance.parent = this;
	this.instance.setTransform(-147,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-164,294,328);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sk_lemur();
	this.instance.parent = this;
	this.instance.setTransform(-147,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-164,294,328);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sk_lemur();
	this.instance.parent = this;
	this.instance.setTransform(-147,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-164,294,328);


(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAjIAAhFIBHAAIAABFg");
	this.shape.setTransform(239.4,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghCZIAAiwIgiAAIAAg1IAiAAIAAhMIBEAAIAABMIAhAAIAAA1IghAAIAACwg");
	this.shape_1.setTransform(225.6,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguB0QgLgDgJgFQgQgIgKgQQgMgUgCgnIAAiPIBFAAIAAB9QAAAWAGALQAFAHAHAEQAHADALAAQAMAAAIgEQAIgDAEgIQAHgLAAgVIAAh9IBFAAIAADlIhAAAIAAgYQgXAggoAAQgOAAgMgDg");
	this.shape_2.setTransform(205.2,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB3QgOgDgLgFQgMgGgKgHQgJgHgIgJQgPgRgIgWQgIgVAAgWIAAAAQAAgVAIgVQAIgWAPgRQAIgJAJgHQAKgIAMgFQALgFAOgDQAOgDAOAAQAPAAAOADQAOADAMAFQALAFAKAIQAJAHAIAJQAPARAIAWQAIAVAAAVQAAAWgIAVQgIAWgPARQgIAJgJAHQgKAHgLAGQgMAFgOADQgOADgPAAQgOAAgOgDgAgUg0QgKAEgIAHQgHAJgFAKQgEALAAALIAAABQAAAMAEAKQAFALAHAHQAIAIAKAFQAKAEAKAAQALAAAKgEQAKgFAIgIQAIgHAEgLQAEgLAAgMQAAgLgEgLQgEgKgIgJQgIgHgKgEQgKgFgLAAQgKAAgKAFg");
	this.shape_3.setTransform(178.4,37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggCnIgXgGQgUgHgPgNQgNgLgHgPQgHgNgCgNIBPAAQAFALARAJQAJADAJAAQAKAAAJgEQAKgDAIgGQAJgIAEgKQAFgLAAgOIAAgOQgHANgOAIQgIAGgKACQgMAEgLAAQgYAAgVgJQgVgIgQgQIgOgSIgLgUQgEgLgDgMQgCgNAAgNQAAgPACgNQADgNAFgMQAGgPATgXQAQgQAVgJQAVgIAXAAQATAAAQAHQASAIAKAOIAAgWIBEAAIAADKQAAAbgCAQQgDASgIAOQgHALgLAKQgLAKgPAHQgPAIgSAEQgTAFgTAAgAgUhkQgKAEgIAHQgIAIgEAKQgEALAAAMIAAABQAAANAEALQAFALAHAIQAIAGAKAEQAKAEAKAAQAMAAAKgEQAKgEAIgGQAHgIAEgKQAEgKABgMQAAgNgEgLQgEgLgHgIQgHgIgKgFQgLgFgNAAQgKAAgKAFg");
	this.shape_4.setTransform(137.1,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmB3IAAh9QAAgWgHgLQgEgHgHgDQgHgEgLAAQgMAAgIAEQgHAEgFAHQgHALAAAWIAAB8IhEAAIAAjlIBAAAIAAAYQAJgNAKgHQAIgFAKgDQALgEAOAAQAOAAAMADQALADAJAFQAQAIAKAQQAIAOADARQACANAAAPIAACPg");
	this.shape_5.setTransform(110.3,37.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjB4QgNgCgKgFQgLgFgJgHIgRgPQgOgRgIgWQgIgXAAgYQAAgNADgNQACgNAFgLQAGgPATgYQAPgQAWgIQAUgJAYAAQAMAAAMADQAKADAJAFQAPAIAIANIAAgYIBFAAIAADlIhFAAIAAgZQgEAIgHAGQgIAHgJAEQgSAIgUAAQgOAAgMgDgAgZg0QgKAFgHAJQgIAIgDALQgDAKAAAKQAAAIADAKQADAKAHAJQAIAJAKAGQAMAFANAAQARAAANgHQAKgHAIgLQAIgNABgRQACgOgIgPQgGgNgMgJQgGgEgIgDQgJgDgKAAQgNAAgMAGg");
	this.shape_6.setTransform(82.1,37.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmCZIAAh9QAAgWgHgKQgFgHgHgEQgIgEgKAAQgNAAgJAGQgHAFgEAIQgFAJAAARIAAB/IhEAAIAAkxIBEAAIAABFIAAAdQAJgPARgIQAOgGATAAQANAAALACQAKACAJAEQAQAJAKAPQAIAOAEAVQADARAAAYIAACAg");
	this.shape_7.setTransform(55.1,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5copy, new cjs.Rectangle(0,14,287.9,50.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmB3IAAh9QAAgWgHgLQgEgHgHgDQgHgEgLAAQgMAAgIAEQgHAEgFAHQgHALAAAWIAAB8IhEAAIAAjlIBAAAIAAAYQAJgNAKgHQAIgFAKgDQALgEAOAAQAOAAAMADQALADAJAFQAQAIAKAQQAIAOADARQACANAAAPIAACPg");
	this.shape.setTransform(207.2,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghCZIAAjlIBDAAIAADlgAghhkIAAg0IBDAAIAAA0g");
	this.shape_1.setTransform(188.3,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah8CdIAAkxIBBAAIAAAZQAMgPAQgIQAKgFAKgDQALgCANAAQAOAAAOADQAMADALAGQALAFAJAJQAIAHAHAJQANASAHAXQAGAVAAAVQgDAggGAOQgIAVgPARQgVAUgOAGQgKAFgLACQgMACgMABQgogBgcgcIAAAUIAABNgAgYhXQgKAEgIAJQgIAIgEAKQgEALAAAMQAAAMAEALQAEAKAIAHQAIAIALAEQALAFALAAQANAAALgFQAKgEAIgJQAHgHAEgLQAEgKAAgLIAAgBQAAgKgEgKQgDgKgIgJQgHgJgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_2.setTransform(155.8,41.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB3QgOgDgLgFQgMgGgKgHQgJgHgIgJQgPgRgIgWQgIgVAAgWIAAAAQAAgVAIgVQAIgWAPgRQAIgJAJgHQAKgIAMgFQALgFAOgDQAOgDAOAAQAPAAAOADQAOADAMAFQALAFAKAIQAJAHAIAJQAPARAIAWQAIAVAAAVQAAAWgIAVQgIAWgPARQgIAJgJAHQgKAHgLAGQgMAFgOADQgOADgPAAQgOAAgOgDgAgUg0QgKAEgIAHQgHAJgFAKQgEALAAALIAAABQAAAMAEAKQAFALAHAHQAIAIAKAFQAKAEAKAAQALAAAKgEQAKgFAIgIQAIgHAEgLQAEgLAAgMQAAgLgEgLQgEgKgIgJQgIgHgKgEQgKgFgLAAQgKAAgKAFg");
	this.shape_3.setTransform(127.2,37.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9B3IAAjlIBAAAIAAAaQAHgPAJgHQAIgFAJgDQAMgEAOAAIAABFIgDAAQgOAAgJADQgKACgGAGQgHAFgDAJQgDAIAAAMIAAB7g");
	this.shape_4.setTransform(107.1,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiECZIAAkxIBmAAIAeABQASACARAEQAUAGARALQAXATAKAOQAHALAFALIAJAYQAHAWAAAbQgDAogFATQgFAOgGAMQgHAMgJALQgKAKgMAJQgMAIgQAGQgPAGgSADQgSADgVAAgAg1BVIAiAAQATAAAQgIQAOgGAJgMQAIgLAEgQQADgOAAgSQAAgNgDgOQgDgQgJgMQgIgNgMgGQgVgJgRAAIgiAAg");
	this.shape_5.setTransform(83.8,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,14,287.9,50.6), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6B333").s().p("AgPBGIAAggIAfAAIAAAggAgPAYIAAhdIAfAAIAABdg");
	this.shape.setTransform(168.8,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6B333").s().p("AgRBGIAAgzIgqhYIAnAAIAUA4IAVg4IAnAAIgqBYIAAAzg");
	this.shape_1.setTransform(159.5,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6B333").s().p("AAfBGIgHgUIgwAAIgGAUIgnAAIA4iLIAdAAIA2CLgAAPAVIgPgwIgPAwIAeAAg");
	this.shape_2.setTransform(146.2,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6B333").s().p("Ag8BGIAAiLIAvAAIANAAQAJABAHACQAJADAIAFQAKAIAFAHIAGAKIAEALQADAKAAAMQgCASgCAJIgFAMQgDAGgEAEQgEAFgGAEIgNAHIgPAEQgIABgJAAgAgYAnIAQAAQAIAAAHgEQAHgDAEgFQADgFADgHQABgHAAgIQAAgGgBgGQgDgHgDgGQgDgGgGgDQgKgEgHAAIgQAAg");
	this.shape_3.setTransform(132.3,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6B333").s().p("AgPBHQgIgBgGgDQgHgDgGgEIgLgJIgIgLIgHgMIgEgNIgBgNQAAgIACgIQABgIADgHQADgGAEgGIAJgLIAMgJQAFgDAHgDIAOgEIANgBIAQABQAHACAHADIANAHIAKAJIAJALQAEAGADAGIAEAOIABANQAAAHgBAHIgEAOQgDAGgEAGIgJALIgKAJIgNAHIgOAEQgIACgIAAQgHAAgIgCgAgPglQgHAEgFAGQgFAFgDAIQgCAHAAAHQAAAIACAHQADAIAFAGQAFAGAHADQAIADAIAAQAJAAAHgDQAHgEAFgHQAFgFACgIQACgHAAgHQAAgGgCgHQgCgIgFgGQgFgGgHgEQgIgDgJAAQgIAAgHADg");
	this.shape_4.setTransform(116.8,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6B333").s().p("AgRBGIAAhsIgbAAIAAgfIBaAAIAAAfIgcAAIAABsg");
	this.shape_5.setTransform(104.1,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6B333").s().p("AgLBIIgLgDIgJgEIgGgGQgHgHgCgJQgDgJAAgKIAkAAQAAAFABAFQACADADACQAEAEAEAAQAFAAAEgEQAEgEAAgGQAAgFgFgDIgWgKQghgNAAgbIABgKIACgIQAEgIAIgGQAHgFAJgDQAIgDAIAAQAJAAAHACQAIACAHAFQAIAGAEAIQACAEABAFQACAFAAAHIgkAAQgBgOgLAAQgEAAgEADQgEADAAAFQAAAFAFADIAXAMQAKAEAHAFQAFADAFAFQADAFABAFQACAFAAAHQAAAJgDAHQgCAJgGAGQgGAHgIADQgOAEgKAAg");
	this.shape_6.setTransform(88.1,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6B333").s().p("AgRBGIAAhsIgcAAIAAgfIBaAAIAAAfIgbAAIAABsg");
	this.shape_7.setTransform(77.9,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6B333").s().p("AgnBGIAAiLIBPAAIAAAfIgrAAIAAAWIAqAAIAAAfIgqAAIAAAYIArAAIAAAfg");
	this.shape_8.setTransform(68.4,9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6B333").s().p("AAPBGIglg9IAAA9IgkAAIAAiLIAkAAIAAA/IAng/IAlAAIguBFIAzBGg");
	this.shape_9.setTransform(57.3,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F6B333").s().p("AgNBHQgIgBgGgDIgNgHIgLgJIgJgLQgEgGgCgHQgDgGgBgHIgCgOIACgNIAEgNQACgGAEgGIAIgLIAKgJQAGgFAIgDQAGgDAIgBIAPgCIAQABQAHACAGADQAJADANALQAGAFAIANQAFAJABAJIglAAIgEgIIgHgIIgKgGQgGgCgHAAQgIAAgHADQgHAEgFAGQgFAFgCAIQgCAHAAAHQAAAIACAHQADAIAEAFQAFAHAHADQAIADAHAAQAXAAALgXIAlAAIgDAMIgGAKQgKANgGAFQgNAIgIADQgQAEgJAAQgGAAgIgCg");
	this.shape_10.setTransform(41.9,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6B333").s().p("AgRBGIAAiLIAjAAIAACLg");
	this.shape_11.setTransform(30.9,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6B333").s().p("AgRBGIAAhsIgbAAIAAgfIBaAAIAAAfIgcAAIAABsg");
	this.shape_12.setTransform(23.2,9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6B333").s().p("AgRBGIAAgzIgqhYIAnAAIAUA4IAVg4IAnAAIgqBYIAAAzg");
	this.shape_13.setTransform(6.5,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6B333").s().p("AgSBFIgLgFQgGgDgEgFQgEgEgDgFQgDgEgBgFQgCgHgBgRIAAhVIAkAAIAABVQAAAKACAGQADAFADACQAEADAFAAQAHAAAEgDQADgCACgEQACgFAAgMIAAhVIAkAAIAABVIgBAOIgDANQgBAEgDAEIgGAHQgKAJgHADIgKACIgMABQgKABgJgDg");
	this.shape_14.setTransform(-6.3,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6B333").s().p("Ag0BGIAAiLIA0AAQAKAAAJACQAIACAGAFQAGAFADAHQAEAHAAAJQAAAIgEAHIgFAHQgDAEgFACQAXAHABAYQAAAJgEAIQgDAJgGAFIgKAHQgEACgFABQgPACgLAAgAgQAnIAQAAQAHAAAEgCQADgBACgDQACgDAAgFQAAgEgCgDQgCgCgDgBQgDgCgIAAIgQAAgAgQgQIANAAQAFAAAEgBIAEgEQABgCAAgEQAAgEgBgCIgEgDQgDgCgGAAIgNAAg");
	this.shape_15.setTransform(-18.7,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-27.2,0,201.3,23), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.calzooLogo();
	this.instance.parent = this;
	this.instance.setTransform(59,200);

	this.instance_1 = new lib.sk_landlemur();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,201,249), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sk_pattern();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,432,332), null);


(lib.both = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sk_lemur();
	this.instance.parent = this;
	this.instance.setTransform(68.7,3.8);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(216,166,1,1,0,0,0,216,166);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.both, new cjs.Rectangle(0,0,432,332), null);


// stage content:
(lib._300x600_lemur_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(151.2,491.6,1,1,0,0,0,75.2,10);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({alpha:1},16,cjs.Ease.get(1)).wait(3));

	// Layer 6
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(415,391,1,1,0,0,0,100.5,67);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).wait(1).to({regY:124.5,x:414.5,y:448.5},0).wait(1).to({x:412.9},0).wait(1).to({x:409.6},0).wait(1).to({x:404.1},0).wait(1).to({x:395},0).wait(1).to({x:379.3},0).wait(1).to({x:346.7},0).wait(1).to({x:274.4},0).wait(1).to({x:229.1},0).wait(1).to({x:205.7},0).wait(1).to({x:190.6},0).wait(1).to({x:179.9},0).wait(1).to({x:172},0).wait(1).to({x:166},0).wait(1).to({x:161.5},0).wait(1).to({x:158.1},0).wait(1).to({x:155.5},0).wait(1).to({x:153.7},0).wait(1).to({x:152.5},0).wait(1).to({x:151.9},0).wait(1).to({regY:67,x:151.7,y:391},0).wait(17));

	// Layer 4
	this.instance_2 = new lib.both();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,309.6,1,1,0,0,0,205.7,7.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).wait(1).to({regX:216,regY:166,rotation:0.1,x:161,y:468.2},0).wait(1).to({rotation:0.5,x:160},0).wait(1).to({rotation:1.1,x:158.2,y:468.3},0).wait(1).to({rotation:2.1,x:155.4},0).wait(1).to({rotation:3.6,x:151.5,y:468.2},0).wait(1).to({rotation:5.5,x:146.1,y:468},0).wait(1).to({rotation:8.1,x:138.9,y:467.3},0).wait(1).to({rotation:11.6,x:129.3,y:466},0).wait(1).to({rotation:16.2,x:116.5,y:463.2},0).wait(1).to({rotation:22.8,x:99,y:457.6},0).wait(1).to({rotation:32.7,x:74.1,y:445.6},0).wait(1).to({rotation:50.5,x:35.1,y:413.6},0).wait(1).to({rotation:104.8,x:-5.1,y:269},0).wait(1).to({rotation:137.3,x:35.8,y:186.8},0).wait(1).to({rotation:150.9,x:64.7,y:161.5},0).wait(1).to({rotation:159.2,x:85,y:149.6},0).wait(1).to({rotation:165,x:99.8,y:143.1},0).wait(1).to({rotation:169.2,x:111.2,y:139.4},0).wait(1).to({rotation:172.4,x:119.8,y:137.1},0).wait(1).to({rotation:174.8,x:126.4,y:135.8},0).wait(1).to({rotation:176.6,x:131.3,y:134.8},0).wait(1).to({rotation:178,x:135,y:134.3},0).wait(1).to({rotation:178.9,x:137.6,y:134},0).wait(1).to({rotation:179.5,x:139.4,y:133.8},0).wait(1).to({rotation:179.9,x:140.3,y:133.7},0).wait(1).to({regX:205.7,regY:7.4,rotation:180,x:150.9,y:292.3},0).wait(89));

	// lemur
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(161,771.3);

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(161,458.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(161,481.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.sk_lemur();
	this.instance_6.parent = this;
	this.instance_6.setTransform(14,306);

	this.instance_7 = new lib.Symbol5copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.5,272.3,1,1,0,0,0,144,21.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},25).to({state:[{t:this.instance_7}]},21).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},32).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:771},0).wait(1).to({y:770},0).wait(1).to({y:768.4},0).wait(1).to({y:765.8},0).wait(1).to({y:762.3},0).wait(1).to({y:757.6},0).wait(1).to({y:751.6},0).wait(1).to({y:744},0).wait(1).to({y:734.4},0).wait(1).to({y:722.3},0).wait(1).to({y:707.2},0).wait(1).to({y:688.3},0).wait(1).to({y:665},0).wait(1).to({y:637.1},0).wait(1).to({y:606.2},0).wait(1).to({y:575.5},0).wait(1).to({y:548.5},0).wait(1).to({y:526.3},0).wait(1).to({y:508.8},0).wait(1).to({y:495.1},0).wait(1).to({y:484.5},0).wait(1).to({y:476.3},0).wait(1).to({y:470.1},0).wait(1).to({y:465.5},0).wait(1).to({y:462.2},0).wait(1).to({y:460.1},0).wait(1).to({y:458.9},0).to({_off:true},1).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).wait(1).to({y:458.6},0).wait(1).to({y:458.8},0).wait(1).to({y:459.4},0).wait(1).to({y:460.2},0).wait(1).to({y:461.5},0).wait(1).to({y:463.5},0).wait(1).to({y:466.4},0).wait(1).to({y:470.5},0).wait(1).to({y:474.5},0).wait(1).to({y:477.4},0).wait(1).to({y:479.2},0).wait(1).to({y:480.4},0).wait(1).to({y:481.1},0).wait(1).to({y:481.4},0).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(43).to({_off:false},0).wait(1).to({y:481.4},0).wait(1).to({y:481.2},0).wait(1).to({y:480.7},0).wait(1).to({y:479.7},0).wait(1).to({y:478.1},0).wait(1).to({y:475.9},0).wait(1).to({y:473.9},0).wait(1).to({y:472.6},0).wait(1).to({y:471.7},0).wait(1).to({y:471},0).wait(1).to({y:470.6},0).wait(1).to({y:470.3},0).wait(1).to({y:470.1},0).wait(1).to({y:470},0).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(104).to({_off:false},0).wait(1).to({regX:143.7,regY:39,x:149.2,y:295.4,alpha:0.048},0).wait(1).to({y:303.4,alpha:0.111},0).wait(1).to({y:314.8,alpha:0.202},0).wait(1).to({y:331.5,alpha:0.335},0).wait(1).to({y:352,alpha:0.497},0).wait(1).to({y:368.1,alpha:0.625},0).wait(1).to({y:379,alpha:0.712},0).wait(1).to({y:386.8,alpha:0.773},0).wait(1).to({y:392.6,alpha:0.819},0).wait(1).to({y:397.1,alpha:0.855},0).wait(1).to({y:400.8,alpha:0.884},0).wait(1).to({y:403.7,alpha:0.908},0).wait(1).to({y:406.2,alpha:0.927},0).wait(1).to({y:408.2,alpha:0.943},0).wait(1).to({y:409.8,alpha:0.956},0).wait(1).to({y:411.2,alpha:0.967},0).wait(1).to({y:412.3,alpha:0.976},0).wait(1).to({y:413.2,alpha:0.983},0).wait(1).to({y:413.9,alpha:0.989},0).wait(1).to({y:414.5,alpha:0.993},0).wait(1).to({y:414.9,alpha:0.996},0).wait(1).to({y:415.1,alpha:0.998},0).wait(1).to({y:415.3,alpha:1},0).wait(1).to({regX:144,regY:21.9,x:149.5,y:398.3},0).wait(33).to({regX:143.7,regY:39,x:148.6,y:415.4},0).wait(1).to({x:146.5},0).wait(1).to({x:142.6},0).wait(1).to({x:135.9},0).wait(1).to({x:124.8},0).wait(1).to({x:105.5},0).wait(1).to({x:65.7},0).wait(1).to({x:-22.7},0).wait(1).to({x:-78.1},0).wait(1).to({x:-106.7},0).wait(1).to({x:-125.2},0).wait(1).to({x:-138.3},0).wait(1).to({x:-147.9},0).wait(1).to({x:-155.2},0).wait(1).to({x:-160.8},0).wait(1).to({x:-165},0).wait(1).to({x:-168.1},0).wait(1).to({x:-170.3},0).wait(1).to({x:-171.7},0).wait(1).to({x:-172.5},0).wait(1).to({regX:144,regY:21.9,y:398.3},0).wait(17));

	// dropin
	this.instance_8 = new lib.Symbol5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149.5,-41.3,1,1,0,0,0,144,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:144.2,regY:37.6,x:149.7,y:-25.2},0).wait(1).to({y:-23.6},0).wait(1).to({y:-20.6},0).wait(1).to({y:-15},0).wait(1).to({y:-5},0).wait(1).to({y:15.6},0).wait(1).to({y:53.7},0).wait(1).to({y:79.7},0).wait(1).to({y:93.8},0).wait(1).to({y:102.6},0).wait(1).to({y:108.6},0).wait(1).to({y:112.8},0).wait(1).to({y:115.8},0).wait(1).to({y:117.8},0).wait(1).to({y:119},0).wait(1).to({y:119.7},0).wait(1).to({regX:144,regY:21.9,x:149.5,y:104.3},0).wait(67).to({regX:144.2,regY:37.6,rotation:0.1,x:149.8,y:119.9,alpha:0.999},0).wait(1).to({rotation:0.5,x:150.3,y:119.8,alpha:0.995},0).wait(1).to({rotation:1.1,x:151.1,y:119.7,alpha:0.989},0).wait(1).to({rotation:2.1,x:152.4,y:119.4,alpha:0.98},0).wait(1).to({rotation:3.5,x:154.3,y:119.2,alpha:0.966},0).wait(1).to({rotation:5.5,x:156.8,y:118.7,alpha:0.948},0).wait(1).to({rotation:8.1,x:160.1,y:118.1,alpha:0.923},0).wait(1).to({rotation:11.5,x:164.7,y:117.1,alpha:0.89},0).wait(1).to({rotation:16.2,x:170.8,y:115.8,alpha:0.845},0).wait(1).to({rotation:22.7,x:179.4,y:113.8,alpha:0.782},0).wait(1).to({rotation:32.5,x:192.4,y:110.4,alpha:0.688},0).wait(1).to({rotation:50.2,x:216.7,y:103.3,alpha:0.518},0).wait(1).to({regX:143.9,regY:21.9,scaleX:1,scaleY:1,rotation:104.3,x:313.9,y:81.1,alpha:0},0).to({_off:true},1).wait(101));

	// pattern
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(161.3,468.2,1,1,0,0,0,216,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},83).wait(115));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC1D37").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.3,250.8,432,984.6);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_lemur_2_atlas_.png", id:"300x600_lemur_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;