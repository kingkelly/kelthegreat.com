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



(lib._72890navygirl = function() {
	this.initialize(img._72890navygirl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,90);// helper functions:

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


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgGgFAAgJQAAgIAFgGQAFgEAJAAQAJAAAGAFQAFAFAAAIQAAAJgFAFQgGAFgJAAQgIAAgFgFg");
	this.shape.setTransform(189.5,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXA/IgKgsIgNg3IAAAAIgWBjIglAAIgkh9IAiAAIAPA4QADAOAEAaIAAAAQABgJADgSIACgJIAQg8IAkAAIAPA8IACAHIABAKIACALIABAIIAAAAIAEgWIAEgSIAPg4IAhAAIgkB9g");
	this.shape_1.setTransform(177.3,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfA6QgOgJgIgPQgHgOAAgUQAAgeAQgRQAQgRAcAAQASAAAOAIQAOAIAHAPQAIAOAAATQAAAegQASQgRARgcAAQgRAAgOgHgAgTgbQgGAJAAASQAAASAGAKQAGAKANAAQAOgBAGgIQAGgKAAgTQAAgRgGgKQgGgKgOAAQgNAAgGAKg");
	this.shape_2.setTransform(160.8,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBAIAAhJQAAgNgFgHQgFgGgLgBQgNAAgHAKQgGAKAAAVIAAA7IgiAAIAAh8IAaAAIAFAPIABAAQAHgIAKgFQAIgFANAAQAWAAALAMQAMAMAAAWIAABRg");
	this.shape_3.setTransform(146.2,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBSQgOgJAAgQQAAgMAHgHQAHgIAOgDQgGgCgDgFQgEgGAAgFQAAgIAEgDQAEgFAIgFQgKgEgGgJQgGgKAAgNQAAgUAOgLQANgMAZAAIALABIAKACIArAAIAAARIgTAFQAFAJAAAKQAAAUgOAMQgOALgYAAIgGgBIgFAAQgGAEAAAEQAAAHATAAIAVAAQAUAAALAJQALAJAAARQAAAWgSAMQgTANghAAQgaAAgOgKgAgaAqQgGAFAAAHQAAAHAGAEQAHAEAMAAQASAAAKgFQALgFAAgJQAAgHgGgCQgHgDgNAAIgQAAQgKAAgGAEgAgUgvQAAAKAFAGQAEAGAKAAQAJAAAEgGQAFgGAAgKQAAgXgSAAQgTAAAAAXg");
	this.shape_4.setTransform(126.1,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYBAIAAhJQgBgNgEgHQgFgGgKgBQgOAAgHAKQgGAKAAAVIAAA7IgiAAIAAh8IAaAAIAEAPIACAAQAHgIAJgFQAKgFANAAQAVAAALAMQAMAMAAAWIAABRg");
	this.shape_5.setTransform(112.2,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBXIAAh8IAhAAIAAB8gAgShGQAAgQASAAQATAAAAAQQAAAIgFAFQgFAEgJAAQgSAAAAgRg");
	this.shape_6.setTransform(101.1,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXBXIAAhJQAAgagUAAQgNAAgGAKQgHAIAAAWIAAA7IgiAAIAAitIAiAAIAAAjIAAAUIgBAKIACAAQALgTAYAAQAWAAAMAMQALAMAAAVIAABSg");
	this.shape_7.setTransform(90.1,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBDQgKgKAAgVIAAg8IgQAAIAAgOIATgMIAKgaIAVAAIAAAbIAjAAIAAAZIgjAAIAAA8QAAAHAEAEQAEADAHAAQAJAAANgEIAAAaQgOAFgSAAQgUAAgJgKg");
	this.shape_8.setTransform(77.5,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtA3QgKgKAAgUQAAgUAOgIQAOgJAbgBIAWgBIAAgGQAAgTgTAAQgOAAgVAJIgLgXQAWgLAZAAQAZAAANALQAOALAAAWIAABTIgYAAIgHgRIgBAAQgIALgJAEQgJAEgOAAQgSAAgLgKgAAJAFQgOAAgHAGQgIAFAAAJQAAAPARAAQALAAAHgHQAHgGAAgMIAAgKg");
	this.shape_9.setTransform(59.3,33.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBAQgJgDgIgDIAAgcQAJAEAMADQAMADAJAAQASAAAAgKQAAgFgCgCIgJgGIgPgHQgPgGgHgFQgGgEgEgHQgCgHAAgKQgBgRANgJQANgJAXAAQAXAAAVAKIgKAYIgSgGQgIgCgJgBQgOAAABAIQAAAFAEAEQAFADAQAHQAOAFAHAGQAHAEADAHQADAHABAIQAAAUgOAKQgNAKgaAAQgNAAgLgBg");
	this.shape_10.setTransform(41.2,33.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAdIgFg5IAfAAIgFA5g");
	this.shape_11.setTransform(33.1,26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBDQgJgKAAgVIAAg8IgQAAIAAgOIASgMIAKgaIAVAAIAAAbIAjAAIAAAZIgjAAIAAA8QAAAHAEAEQAEADAHAAQAJAAANgEIAAAaQgNAFgTAAQgUAAgJgKg");
	this.shape_12.setTransform(24.5,32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRBSIAAijIAiAAIAACjg");
	this.shape_13.setTransform(15.8,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(10,13,381,35.4), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4054").s().p("AgNAOQgGgFAAgJQAAgJAFgEQAFgFAJAAQAJAAAGAFQAFAFAAAIQAAAJgFAFQgGAFgJAAQgIAAgFgFg");
	this.shape.setTransform(383.7,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4054").s().p("AgdA/QgJgCgJgDIAAgdQAKAFAMADQAMADAJAAQASAAAAgLQAAgEgCgCIgJgGIgQgIQgOgFgGgEQgIgFgCgHQgEgHAAgKQABgQANgJQAMgKAXAAQAXAAAVAKIgKAZIgRgHQgJgCgIAAQgOAAgBAIQAAAEAGADQAEAEAQAHQAOAGAHAFQAHAEADAGQAEAIAAAJQAAATgOAKQgOAKgZAAQgOAAgKgCg");
	this.shape_1.setTransform(374.9,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4054").s().p("AgtBHQgMgRAAgeQAAgeAMgRQANgSAXAAQAWAAANATIABAAQgDgOABgLIAAgoIAiAAIAACtIgaAAIgHgQIgBAAQgMASgXAAQgXAAgMgRgAgRgDQgGAJAAASQAAATAGAJQAHAJAKAAQAOAAAGgHQAGgIAAgSIAAgEQABgUgHgIQgGgJgOAAQgKAAgHAKg");
	this.shape_2.setTransform(361.4,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4054").s().p("AgoBAIAAh9IAaAAIAFAVIACAAQAGgKAJgGQAKgHALAAIAMABIgDAgIgKgBQgQAAgJAIQgJAJAAAOIAABAg");
	this.shape_3.setTransform(350.4,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4054").s().p("AgsA3QgLgLAAgSQAAgVAOgIQAOgJAcgCIAVAAIAAgFQAAgUgTAAQgPAAgUAKIgLgYQAWgLAZAAQAZAAANALQAOALAAAXIAABSIgYAAIgGgRIgCAAQgIALgJAEQgJAEgOAAQgSAAgKgKgAAJAGQgOAAgIAEQgGAGgBAKQABAOAQAAQALAAAHgGQAHgIAAgLIAAgKg");
	this.shape_4.setTransform(337.3,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4054").s().p("AgxABQAAgfAQgRQAPgRAdAAQAWAAARAJIgKAaIgPgFQgHgDgHABQgZgBAAAlQAAAmAZgBQAKABAJgDQAIgDAIgGIAAAeQgIAFgIACQgJACgNAAQg5AAAAhAg");
	this.shape_5.setTransform(325,20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4054").s().p("AgRBDQgKgKABgVIAAg8IgQAAIAAgOIASgMIAKgaIAVAAIAAAbIAjAAIAAAZIgjAAIAAA8QAAAHAEAEQAEADAHAAQAJAAAMgEIAAAaQgMAFgTAAQgTAAgKgKg");
	this.shape_6.setTransform(307.9,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4054").s().p("AgQBXIAAh8IAhAAIAAB8gAgShGQAAgQASAAQATAAAAAQQAAAIgFAFQgFAEgJAAQgSAAAAgRg");
	this.shape_7.setTransform(299.5,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4054").s().p("AgtBHQgMgRAAgeQAAgeAMgRQANgSAWAAQAYAAAMATIABAAQgCgOgBgLIAAgoIAjAAIAACtIgaAAIgHgQIgCAAQgMASgXAAQgWAAgMgRgAgRgDQgGAJAAASQAAATAGAJQAHAJAKAAQAOAAAGgHQAGgIAAgSIAAgEQAAgUgFgIQgHgJgOAAQgKAAgHAKg");
	this.shape_8.setTransform(288.4,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4054").s().p("AgoAwQgRgQAAgfQAAgfAQgQQAQgSAaAAQAbAAAPAPQAPAQAAAaIAAAQIhQAAQAAAPAIAIQAJAIANAAQALAAALgDQAKgCALgFIAAAaQgJAFgLACQgKACgOAAQgeAAgRgRgAAagNQgBgMgGgIQgGgGgLAAQgKAAgGAGQgHAIAAAMIAvAAIAAAAg");
	this.shape_9.setTransform(274.7,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4054").s().p("AgoBAIAAh9IAaAAIAFAVIACAAQAGgKAJgGQAKgHALAAIAMABIgDAgIgKgBQgQAAgJAIQgJAJAAAOIAABAg");
	this.shape_10.setTransform(263.8,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4054").s().p("AgxABQAAgfAQgRQAPgRAdAAQAWAAARAJIgKAaIgPgFQgHgDgHABQgZgBAAAlQAAAmAZgBQAKABAJgDQAIgDAIgGIAAAeQgIAFgIACQgJACgNAAQg5AAAAhAg");
	this.shape_11.setTransform(252.2,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4054").s().p("AgoBAIAAh9IAaAAIAFAVIACAAQAGgKAJgGQAKgHALAAIAMABIgDAgIgKgBQgQAAgJAIQgJAJAAAOIAABAg");
	this.shape_12.setTransform(235.7,20.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4054").s().p("AgfA5QgOgHgIgPQgHgPAAgUQAAgeAQgRQAQgRAcAAQASAAAOAIQAOAIAHAOQAIAPAAATQAAAfgQARQgRARgcAAQgRAAgOgIgAgTgbQgGAJAAASQAAASAGAKQAGAJANAAQAOABAGgKQAGgJAAgTQAAgSgGgJQgGgJgOAAQgNAAgGAJg");
	this.shape_13.setTransform(222.7,20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4054").s().p("AgbBYIAAhjIgTAAIAAgRIATgJIAAgJQAAgVAKgKQAKgKAXAAQASAAANAFIgJAaQgKgEgJAAQgHAAgDAEQgDAFAAAGIAAAIIAeAAIAAAaIgeAAIAABjg");
	this.shape_14.setTransform(211.9,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4054").s().p("AgwBSQgOgJAAgQQAAgMAHgHQAHgIAOgDQgGgCgDgFQgEgGAAgFQAAgIAEgDQAEgFAIgFQgKgEgGgJQgGgKAAgNQAAgUAOgLQANgMAZAAIALABIAKACIArAAIAAARIgTAFQAFAJAAAKQAAAUgOAMQgOALgYAAIgGgBIgFAAQgGAEAAAEQAAAHATAAIAVAAQAUAAALAJQALAJAAARQAAAWgSAMQgTANghAAQgaAAgOgKgAgaAqQgGAFAAAHQAAAHAGAEQAHAEAMAAQASAAAKgFQALgFAAgJQAAgHgGgCQgHgDgNAAIgQAAQgKAAgGAEgAgUgvQAAAKAFAGQAEAGAKAAQAJAAAEgGQAFgGAAgKQAAgXgSAAQgTAAAAAXg");
	this.shape_15.setTransform(194.2,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4054").s().p("AAXBAIAAhIQABgOgFgGQgFgIgLABQgNAAgGAJQgHAJAAAWIAAA7IgiAAIAAh9IAaAAIAFARIABAAQAGgKALgEQAJgFAMAAQAWAAALAMQAMAMAAAWIAABRg");
	this.shape_16.setTransform(180.3,20.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4054").s().p("AgQBXIAAh8IAhAAIAAB8gAgShGQAAgQASAAQATAAAAAQQAAAIgFAFQgFAEgJAAQgSAAAAgRg");
	this.shape_17.setTransform(169.2,17.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4054").s().p("Ag6BcIAAi0IAdAAIAEAQIABAAQAMgTAXAAQAXAAAMASQAMARAAAeQABAUgGAOQgGAPgLAIQgLAHgPAAQgVAAgNgQIgBAAIABATIAAAzgAgRg3QgGAHgBASIAAAEQABAUAGAIQAGAJAMAAQAXAAAAglQAAgTgGgJQgFgJgNAAQgLAAgGAIg");
	this.shape_18.setTransform(158.8,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4054").s().p("Ag5BcIAAi0IAcAAIAEAQIACAAQALgTAYAAQAVAAANASQANARAAAeQgBAUgFAOQgGAPgLAIQgLAHgPAAQgUAAgNgQIgCAAIACATIAAAzgAgRg3QgGAHAAASIAAAEQgBAUAHAIQAFAJANAAQAXAAAAglQAAgTgGgJQgGgJgMAAQgMAAgFAIg");
	this.shape_19.setTransform(144.3,23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4054").s().p("AgfA5QgOgHgIgPQgHgPAAgUQAAgeAQgRQAQgRAcAAQASAAAOAIQAOAIAHAOQAIAPAAATQAAAfgQARQgRARgcAAQgRAAgOgIgAgTgbQgGAJAAASQAAASAGAKQAGAJANAAQAOABAGgKQAGgJAAgTQAAgSgGgJQgGgJgOAAQgNAAgGAJg");
	this.shape_20.setTransform(129.5,20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4054").s().p("AAYBXIAAhJQgBgagTAAQgOAAgHAKQgGAIAAAWIAAA7IgiAAIAAitIAiAAIAAAjIgBAUIgBAKIADAAQALgTAYAAQAWAAALAMQAMAMAAAVIAABSg");
	this.shape_21.setTransform(114.9,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4054").s().p("Ag1BLIAAghQARAIALADQAMADAKAAQAKAAAHgFQAFgEAAgJQAAgEgDgEQgCgEgFgDIgUgMQgQgHgHgFQgIgHgEgIQgFgJABgMQAAgVAOgNQAPgMAZAAQANAAALADQAMADANAFIgLAbQgNgFgJgCQgJgCgIAAQgJAAgFAEQgGAFAAAHQAAAFADADIAGAHIAWALQAWALAJALQAIALAAAQQABAWgRANQgQAMgbAAQgaAAgVgJg");
	this.shape_22.setTransform(101.1,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(8,0,381,35.4), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape.setTransform(144.8,20.8,0.474,0.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAPCnIgKAAQhAgGgmgnQgmgpgEhGIAAgVQAEhGAngpQAmgoA/gEIAKgBIAHAAQAYAAAXAFQAhAHATARQAbAXgNAcQgJAUgOAFQgQgYgfgHQgPgEgaAAQgkAAgTAZQgUAZAAAuQAAAvAUAZQATAZAkAAQAaAAAPgEQAfgIAQgXQANAEAKAVQANAcgbAXQghAdhCAAg");
	this.shape_1.setTransform(154.2,14.6,0.474,0.474);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AhvCQQgigZAAg0QAAhwC+AAIAAgPQAAgqg3AAQggAAgiAPIgcAPQgFgDgFgGQgLgNAAgTQAAgWAmgPQAmgOA0AAQCAAAgBBnIAACmQABAVAHAPQAEAHAEAEQgDADgGACQgNAGgUAAQgYAAgKgIQgLgIgHgWQgJAKgQAKQgfAUggAAQguAAgdgVgAghAQQgdAOABAcQAAAZAPAMQAMAJATAAQAVAAAUgLQAXgMgBgQIAAhBQg0ABgdAPg");
	this.shape_2.setTransform(169.6,14.6,0.474,0.474);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A4052").s().p("ABCDZQgLgIgOgYIhOiEIglAAIAACqIhdAAIAAnAIAjgCQAqgDAmAAQBTAAAsAVQBBAfAABRQAAA0gdAkQgWAagkAQIBzC7QgDADgJACQgRAGgbAAQgdAAgRgOgAhKikIAACeIAKAAQA7ABAagXQAYgVAAgqQAAglgYgUQgXgSgrAAQgSAAgLACg");
	this.shape_3.setTransform(77.5,11.4,0.474,0.474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4052").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBeAAIAABFIheAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_4.setTransform(107.5,12.2,0.474,0.474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A4052").s().p("AhbCcQghgOAAgZQAAgVALgPQAGgHAFgEIAaARQAgAQAdAAQAbAAAMgIQALgJAAgSQAAgVgZgLIg2gPQhQgWAAhEQAAgzAqgaQAjgVA2AAQAyAAAeALQAhAMAAAXQAAASgLAQIgLAMQgKgIgQgIQghgQggAAQgSABgLAGQgNAIAAAOQAAARAZAKQAPAFAoAKQBQAXAABBQAAA1gfAeQgjAhhGAAQgwABgggNg");
	this.shape_5.setTransform(135.2,14.5,0.474,0.474);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A4052").s().p("AhkB9QgtgtAAhTQAAhFAlgtQApgyBOAAQBGgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAlAAAZgSQANgJAGgJIANAIQAOAOAAAZQAAAZggAQQghAQgxAAQhTAAgsgrgAA/gjQAAgjgMgSQgOgUgfAAQgcAAgQAUQgQATgCAiIB3AAIAAAAg");
	this.shape_6.setTransform(120.4,14.5,0.474,0.474);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A4052").s().p("AhxCTQgjgaAAg1QAAg5AygcQAxgdBfAAIAAgQQAAgqg4AAQggAAgkAPIgcAPQgFgCgGgHQgKgNAAgTQAAgXAngPQAmgOA2AAQCBAAAABpIAACpQAAAVAIAPQAEAIAEAEQgKALghAAQgYAAgLgIQgLgIgHgWQgJAKgQALQgfATgiAAQgvABgdgWgAghAPQgeAQAAAcQAAAaAQAMQAMAJATAAQAWAAAVgLQAWgMAAgRIAAhCQg1ABgdAOg");
	this.shape_7.setTransform(93.3,14.5,0.474,0.474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A4052").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBdAAIAABFIhdAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAVgcAQQgcAQgnAAQhsAAAAhng");
	this.shape_8.setTransform(62.2,12.2,0.474,0.474);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A4052").s().p("AhaCcQgigOAAgZQAAgVALgPQAGgHAFgEIAbARQAgAQAcAAQAbAAAMgIQAMgJAAgSQAAgVgZgLIg3gPQhQgWAAhEQAAgzAqgaQAjgVA2AAQAyAAAfALQAgAMAAAXQAAASgLAQIgLAMQgKgIgQgIQghgQggAAQgRABgMAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1gfAeQgjAhhFAAQgxABgfgNg");
	this.shape_9.setTransform(49,14.5,0.474,0.474);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A4052").s().p("AhkB9QgtgsAAhUQAAhFAkgtQAqgyBNAAQBHgBAjAtQAeAkAAA+QAAAWgEARIjDAAQAAAoAWAXQAXAXApAAQAkAAAagSQANgJAFgJIAOAIQANAOAAAZQAAAZggAQQggAQgxAAQhTAAgsgrgAA/gjQAAgjgMgSQgOgUgfAAQgcAAgRAUQgPATgCAiIB3AAIAAAAg");
	this.shape_10.setTransform(34.2,14.5,0.474,0.474);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A4052").s().p("AA7ChIg1iOIg7COIhEAAIh0k1IAMgGQAQgGAVAAQAVAAAMAJQAPALAJAaIA7CuIAshqIgghmIAJgGQANgGATAAQAVAAANAMQAOANAJAdIA2ChIAxixQALgmAuAAQAcAAAMAMIhrE1g");
	this.shape_11.setTransform(14.8,14.3,0.474,0.474);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A4052").s().p("AhzB7QgrgtAAhOQAAhNAsgtQAsguBIABQBKgBApAtQAqAsAABPQAABPgtAuQgsArhGAAQhIAAgrgtgAgvhKQgSAbAAAvQAAAyASAZQARAYAeAAQAeAAARgXQATgaAAgyQAAgxgRgZQgRgZgfAAQgeAAgSAZg");
	this.shape_12.setTransform(-4.6,14.5,0.474,0.474);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A4052").s().p("AiKDjIAAm/QAKgGAbAAQAYAAAPAMQARANAAAYIAAFKICLAAQAVAAAMAMQAMAMAAAWIAAAcg");
	this.shape_13.setTransform(-19.8,11.2,0.474,0.474);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-26.4,0.5,202.9,22), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEAEC").s().p("AgnA+QgMgPAAgaQAAgbAMgPQALgPAUAAQATAAAMAQIABAAQgCgMgBgJIAAgjIAfAAIAACYIgYAAIgFgPIgCAAQgKAQgUAAQgUABgKgQgAgPgDQgFAIAAAQQAAARAFAIQAGAHAJAAQAMABAFgHQAGgHABgQIAAgDQAAgSgGgGQgGgIgMAAQgJAAgGAIg");
	this.shape.setTransform(148.1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEAEC").s().p("AgjArQgPgPAAgbQAAgbAOgPQAOgPAXAAQAYAAANANQANANAAAYIAAANIhGAAQAAANAHAHQAHAIAMgBQAKAAAJgBQAJgCAKgFIAAAXQgIAEgJACQgJACgNAAQgaAAgPgOgAAXgLQgBgMgFgFQgGgHgJAAQgJAAgFAHQgGAFgBAMIAqAAIAAAAg");
	this.shape_1.setTransform(136.3,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEAEC").s().p("AgOA7QgJgJAAgTIAAg0IgOAAIAAgMIAQgLIAJgXIASAAIAAAYIAfAAIAAAWIgfAAIAAA0QAAAHAEADQADADAGAAQAIAAALgEIAAAXQgLAFgQAAQgRAAgIgJg");
	this.shape_2.setTransform(126.1,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBEAEC").s().p("AgjA4IAAhtIAXAAIAEASIACAAQAFgJAIgFQAIgGAKAAIALABIgDAcIgJgBQgOAAgIAIQgHAGAAANIAAA4g");
	this.shape_3.setTransform(118,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBEAEC").s().p("AgnAwQgJgJAAgRQAAgRAMgHQAMgJAYgBIAUAAIAAgFQgBgRgRAAQgMAAgSAIIgKgUQATgKAXAAQAVAAANAKQALAJAAAUIAABIIgVAAIgFgPIgBAAQgIAKgIAEQgHADgNAAQgQAAgJgJgAAHAFQgMAAgGAEQgGAFAAAJQAAAMAOAAQAKAAAGgGQAHgGAAgKIAAgJg");
	this.shape_4.setTransform(106.6,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEAEC").s().p("AgOA7QgJgJAAgTIAAg0IgOAAIAAgMIAQgLIAJgXIASAAIAAAYIAfAAIAAAWIgfAAIAAA0QAAAHAEADQADADAGAAQAIAAALgEIAAAXQgLAFgQAAQgRAAgIgJg");
	this.shape_5.setTransform(96.5,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBEAEC").s().p("AgZA3IgPgEIAAgZIASAHQALACAIAAQAPAAAAgKQAAgDgCgCQgCgCgFgDIgOgHQgMgFgGgEQgGgEgDgGQgDgGAAgJQAAgOAMgIQALgIAUAAQAUAAATAJIgJAVIgQgFQgHgDgIAAQgMAAAAAHQAAAFAEACIASAJQANAFAGAFQAGADADAGQADAGAAAJQAAAQgMAJQgMAJgWAAQgMAAgJgCg");
	this.shape_6.setTransform(87.5,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBEAEC").s().p("AgOA7QgJgJAAgTIAAg0IgOAAIAAgMIAQgLIAJgXIASAAIAAAYIAfAAIAAAWIgfAAIAAA0QAAAHAEADQADADAGAAQAIAAALgEIAAAXQgLAFgQAAQgRAAgIgJg");
	this.shape_7.setTransform(73.1,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBEAEC").s().p("AgjArQgPgPAAgbQAAgbAOgPQAOgPAXAAQAYAAANANQANANAAAYIAAANIhGAAQAAANAHAHQAHAIAMgBQAKAAAJgBQAJgCAKgFIAAAXQgIAEgJACQgJACgNAAQgaAAgPgOgAAXgLQgBgMgFgFQgGgHgJAAQgJAAgFAHQgGAFgBAMIAqAAIAAAAg");
	this.shape_8.setTransform(63.1,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBEAEC").s().p("AgpA3QgRgTAAgkQAAgiAUgUQAUgTAiAAQAWAAAVAJIgKAZQgQgJgRAAQgTAAgMANQgMAOAAAVQAAAYAKAMQAKAMARABQAJAAAKgCIAAgfIgbAAIAAgYIA5AAIAABKQgOAFgMABQgMACgNAAQggAAgRgTg");
	this.shape_9.setTransform(49.8,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA1F58").s().p("AtNDLIAAjQQAAh8BjgwQAxgaAxAAIXWAAIAADQQAAB8hjAxQgfARglAGIgfACg");
	this.shape_10.setTransform(94.8,15.3,1.102,1.102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(1.5,-7.1,186.6,44.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAQQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(146.1,52.6,0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAHDvQhbgHg2g6Qg4g7gFhjIgBgOIABgCIgBgBIABgOQAFhkA4g7QA3g5BbgHIAOgBIAIABIACgBQAiAAAhAIQAwAKAbAYQAnAigSAnQgOAdgUAIQgXgigsgLQgWgGgkAAQg1AAgcAkQgcAkAABCQAABDAcAkQAcAkA1AAQAkAAAWgFQAsgMAXgiQAUAIAOAdQASAngnAiQgbAYgwAKQghAIgiAAg");
	this.shape_1.setTransform(152.3,48.8,0.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AifDPQgxglAAhKQAAhRBGgoQBFgoCGAAIAAgWQAAgdgSgOQgUgRgqAAQgtAAgxAWIgpAWQgHgEgIgKQgPgRAAgcQAAggA4gWQA1gUBMAAQC2AAAACUIAADvQAAAdALAWQAGAKAFAFQgDAEgKAEQgSAJgdgBQgiABgPgMQgPgMgKgfQgNAPgXAOQgtAdgvAAQhBAAgpgegAgvAWQgqAWAAAnQAAAlAWAQQARAOAbAAQAfAAAdgRQAggRAAgYIAAhcQhMABgoAVg");
	this.shape_2.setTransform(161.6,48.9,0.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A4052").s().p("ABeE2QgQgMgUgkIhvi6Ig0AAIAADwIiFAAIAAp8IAygEQA7gEA2AAQB3AAA/AeQBcAtAABzQAABKgpAzQgeAlg1AXICkEJQgFAFgMAEQgYAIgnAAQgpAAgYgTgAhpjrIAADiIANABQBVgBAlggQAigdAAg9QAAg0gigcQghgag9AAQgXAAgSACg");
	this.shape_3.setTransform(105.4,47,0.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4052").s().p("AiQChIAAnMIAMgEQARgEAXAAQAjAAAVARQAWASAAAiIAABMICFAAIAABhIiFAAIAADVQAAAcAOAPQAOAQAbAAQAXAAAZgQQANgIAJgIIARALQARASAAAcQAAAfgoAXQgoAWg3AAQiaAAAAiTg");
	this.shape_4.setTransform(123.4,47.5,0.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A4052").s().p("AiBDdQgxgUABgjQAAgeAPgUQAJgLAHgEIAmAXQAtAWApAAQAnAAARgMQAQgMAAgaQABgdglgPIhNgXQg1gPgZgWQgkggAAg6QAAhKA7gkQAzgfBOAAQBGAAArAQQAvASAAAfQAAAcgPAWIgQARQgOgLgYgLQgugXgtABQgaAAgQAJQgTALABASQgBAZAlANQAUAJA5AOQByAhAABdQABBMgtAqQgxAwhkAAQhGAAgsgTg");
	this.shape_5.setTransform(140,48.8,0.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A4052").s().p("AiPCyQhAg/AAh3QAAhiA0hAQA8hJBuAAQBkAAAyA+QArA1AABYQAAAZgFAgIkXAAQABA4AeAgQAhAiA7AAQA0AAAlgaQASgNAIgNIATAMQATAUAAAjQAAAjguAYQguAXhGAAQh2AAg/g+gABagzQAAgygSgYQgTgdgsAAQgpAAgYAdQgVAagDAwICqAAIAAAAg");
	this.shape_6.setTransform(131.1,48.8,0.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A4052").s().p("AihDRQgyglAAhLQAAhRBHgpQBGgpCHAAIAAgWQAAgdgSgQQgTgQgrAAQguAAgyAWIgpAWQgHgEgIgJQgPgSAAgdQAAggA4gWQA3gUBMAAQC4AAAACWIAADyQAAAdAMAWQAFALAGAFQgEAEgJAEQgTAJgdgBQgiABgQgMQgPgMgLgfQgNAPgXAOQgsAdgwAAQhCAAgqgfgAgwAWQgqAWAAAoQAAAlAXARQARAOAbAAQAfAAAegRQAggSAAgYIAAhdQhNABgpAVg");
	this.shape_7.setTransform(114.9,48.8,0.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A4052").s().p("AiQChIAAnMIAMgEQARgEAXAAQAjAAAVARQAWASAAAiIAABMICFAAIAABhIiFAAIAADVQAAAcAOAPQAOAQAbAAQAXAAAagQQANgIAIgIIARALQARASAAAcQAAAfgoAXQgoAWg2AAQibAAAAiTg");
	this.shape_8.setTransform(96.2,47.5,0.2,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A4052").s().p("AiBDdQgwgUAAgjQAAgeAQgUQAIgLAIgEIAlAXQAtAWApAAQAnAAARgMQAQgMAAgaQAAgdgjgPIhOgXQg1gPgagWQgjggAAg6QAAhKA8gkQAygfBNAAQBHAAArAQQAvASAAAfQAAAcgQAWIgPARQgOgLgYgLQgugXguABQgaAAgQAJQgRALAAASQAAAZAjANQAVAJA5AOQByAhAABdQAABMgsAqQgxAwhkAAQhGAAgsgTg");
	this.shape_9.setTransform(88.3,48.8,0.2,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A4052").s().p("AiPCyQhAg/AAh3QAAhiA0hAQA8hJBuAAQBkAAAyA+QArA1AABYQAAAdgFAcIkXAAQABA4AeAgQAhAiA7AAQA0AAAlgaQASgNAIgNIATAMQATAUAAAjQAAAjguAYQguAXhGAAQh2AAg/g+gABagzQAAgygSgYQgTgdgsAAQgpAAgXAdQgWAagDAwICqAAIAAAAg");
	this.shape_10.setTransform(79.4,48.8,0.2,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A4052").s().p("ABVDlIhNjKIhUDKIhhAAIilm4IARgIQAWgJAgAAQAdAAASANQAUAPANAmIBUD4IA/iXIgtiSIAMgIQATgJAaAAQAeAAAUARQAUASANApQASA9A6CpIBHj7QAPg3BBAAQAYAAAUAIQAJAEAEAEIiZG5g");
	this.shape_11.setTransform(67.8,48.7,0.2,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A4052").s().p("AikCvQg+hAAAhvQAAhtBAhCQA+hABmAAQBqAAA7A+QA8BAAABxQAABwhCBCQg+A+hjAAQhnAAg9hBgAhDhpQgaAlAABEQAABHAZAkQAZAjArAAQAqAAAZgiQAbglAAhHQAAhGgZgkQgYgigsgBQgrAAgZAkg");
	this.shape_12.setTransform(56.2,48.8,0.2,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A4052").s().p("AjFFDIAAp9QAOgIAmAAQAkAAAVARQAXASAAAjIAAHWIDHAAQAeAAARARQARARAAAgIAAAng");
	this.shape_13.setTransform(47.1,46.8,0.2,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4157").s().p("AgLAvQgHgIAAgOIAAgpIgLAAIAAgKIANgIIAGgTIAPAAIAAATIAZAAIAAASIgZAAIAAApQAAAFADACQADADAEAAQAGAAAKgDIAAASQgKAEgNAAQgNAAgGgHg");
	this.shape_14.setTransform(164.1,27.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4157").s().p("AgfAmQgHgHAAgNQAAgOAKgGQAJgGAUgBIAPgBIAAgDQAAgOgOAAQgJAAgPAHIgIgQQAQgIARAAQARAAAJAHQAKAIAAAQIAAA5IgRAAIgEgMIgBAAQgGAHgGADQgGADgJAAQgNAAgIgHgAAGAEQgJAAgFADQgFAEgBAHQAAAKAMAAQAIAAAEgFQAFgFABgIIAAgHg");
	this.shape_15.setTransform(155.6,28.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4157").s().p("AgTAsIgNgEIAAgTQAHADAIACQAIACAHAAQAMAAAAgIQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAIgGgEIgKgFQgKgFgFgCQgFgEgCgEQgCgFAAgHQAAgLAJgHQAJgGAQAAQAPAAAPAHIgHARIgMgFQgGgCgGAAQgJAAAAAGQAAADADADQADACALAFQAKAEAFADQAFADACAFQACAEAAAHQAAANgJAHQgJAHgSAAIgQgBg");
	this.shape_16.setTransform(142.9,28.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4157").s().p("AARAtIAAgyQAAgKgEgFQgDgEgIAAQgJgBgEAIQgEAGAAAOIAAAqIgYAAIAAhXIASAAIADALIABAAQAEgGAIgDQAFgEAJABQAQgBAHAJQAIAIAAAPIAAA5g");
	this.shape_17.setTransform(133.7,28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4157").s().p("AgVAoQgKgGgFgKQgGgKAAgOQAAgUAMgMQALgMATAAQANAAAKAFQAJAGAFAKQAFAKABANQAAAVgMAMQgLAMgUAAQgMAAgJgFgAgNgTQgEAHAAAMQAAANAFAHQADAGAJAAQAJAAAFgGQAEgHAAgNQAAgMgEgHQgFgGgJAAQgJAAgEAGg");
	this.shape_18.setTransform(123.5,28.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4157").s().p("AgLA9IAAhXIAXAAIAABXgAgMgwQAAgMAMAAQANAAAAAMQAAAFgDAEQgEADgGAAQgMAAAAgMg");
	this.shape_19.setTransform(116.1,26.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4157").s().p("AgLAvQgHgIAAgOIAAgpIgMAAIAAgKIAOgIIAGgTIAPAAIAAATIAZAAIAAASIgZAAIAAApQAAAFADACQADADAEAAQAHAAAJgDIAAASQgKAEgNAAQgNAAgGgHg");
	this.shape_20.setTransform(110.2,27.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4157").s().p("AgoBAIAAh9IAUAAIADALIABAAQAIgNAQAAQAPAAAJAMQAJAMAAAVQAAAOgEAKQgEAKgIAFQgIAGgKAAQgOAAgJgLIgBAAIABAMIAAAkgAgMgmQgEAFAAANIAAACQAAAOAEAFQAEAHAJAAQAQAAAAgaQAAgNgEgGQgEgHgJAAQgIAAgEAGg");
	this.shape_21.setTransform(102,30.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4157").s().p("AgVAoQgKgGgFgKQgGgKABgOQAAgUALgMQALgMATAAQANAAAKAFQAJAGAFAKQAFAKAAANQAAAVgLAMQgLAMgUAAQgMAAgJgFgAgNgTQgEAHAAAMQAAANAFAHQADAGAJAAQAKAAAEgGQAEgHAAgNQAAgMgEgHQgEgGgKAAQgIAAgFAGg");
	this.shape_22.setTransform(91.7,28.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C4157").s().p("AgfAyQgJgMAAgWQAAgUAJgMQAJgMAQAAQAPAAAJANIAAAAIgBgRIAAgcIAYAAIAAB4IgSAAIgFgLIgBAAQgIANgQgBQgPABgJgMgAgLgCQgFAGABANQgBAMAFAHQAEAGAHAAQAKAAAEgEQAEgGAAgNIAAgDQAAgOgEgFQgEgFgKgBQgHAAgEAHg");
	this.shape_23.setTransform(77.3,26.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4157").s().p("AgbAtIAAhXIASAAIADAPIABAAQAEgIAHgEQAGgFAIABIAIAAIgBAWIgIAAQgLAAgHAGQgEAFgBAKIAAAtg");
	this.shape_24.setTransform(69.7,28.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C4157").s().p("AgfAmQgHgHAAgNQAAgOAKgGQAJgGAUgBIAOgBIAAgDQAAgOgNAAQgJAAgPAHIgIgQQAPgIASAAQARAAAKAHQAJAIAAAQIAAA5IgRAAIgEgMIgBAAQgGAHgGADQgGADgKAAQgNAAgHgHgAAGAEQgJAAgFADQgFAEgBAHQAAAKAMAAQAIAAAFgFQAEgFAAgIIAAgHg");
	this.shape_25.setTransform(60.5,28.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C4157").s().p("AgiABQAAgWALgLQALgMAUAAQAPAAAMAGIgHASIgKgEIgKgBQgSAAAAAZQAAAaASAAQAHAAAGgCQAFgCAGgEIAAAVQgFAEgGABQgGABgJAAQgoAAAAgsg");
	this.shape_26.setTransform(52,28.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C4157").s().p("AgLAvQgHgIAAgOIAAgpIgLAAIAAgKIANgIIAHgTIAOAAIAAATIAYAAIAAASIgYAAIAAApQAAAFADACQADADAFAAQAGAAAIgDIAAASQgIAEgNAAQgOAAgGgHg");
	this.shape_27.setTransform(40.1,27.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C4157").s().p("AgLA9IAAhXIAXAAIAABXgAgMgwQAAgMAMAAQANAAAAAMQAAAFgDAEQgEADgGAAQgMAAAAgMg");
	this.shape_28.setTransform(34.3,26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C4157").s().p("AgfAyQgJgMAAgWQAAgUAJgMQAJgMAQAAQAPAAAJANIABAAIgCgRIAAgcIAYAAIAAB4IgTAAIgEgLIgBAAQgIANgQgBQgPABgJgMgAgLgCQgFAGABANQgBAMAFAHQAEAGAIAAQAIAAAFgEQAEgGABgNIAAgDQgBgOgEgFQgEgFgKgBQgHAAgEAHg");
	this.shape_29.setTransform(26.6,26.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C4157").s().p("AgbAiQgMgMAAgVQAAgVALgMQALgMASAAQATAAAKAKQAKALAAASIAAALIg3AAQAAAKAGAGQAGAGAJAAQAIAAAHgCQAHgCAHgDIAAASQgGADgHACQgHABgKAAQgUAAgMgLgAASgJQAAgJgFgEQgEgFgIAAQgGAAgEAFQgFAEAAAJIAgAAIAAAAg");
	this.shape_30.setTransform(17,28.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C4157").s().p("AgbAtIAAhXIASAAIADAPIABAAQAEgIAHgEQAGgFAIABIAIAAIgCAWIgHAAQgLAAgHAGQgEAFAAAKIAAAtg");
	this.shape_31.setTransform(9.5,28.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C4157").s().p("AgiABQAAgWALgLQALgMAUAAQAPAAAMAGIgHASIgKgEIgKgBQgSAAAAAZQAAAaASAAQAHAAAGgCQAFgCAGgEIAAAVQgFAEgGABQgGABgJAAQgoAAAAgsg");
	this.shape_32.setTransform(1.4,28.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C4157").s().p("AgbAtIAAhXIARAAIAEAPIABAAQAEgHAHgFQAGgFAIABIAIAAIgCAWIgHAAQgLAAgHAGQgEAFAAAKIAAAtg");
	this.shape_33.setTransform(164.4,9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C4157").s().p("AgfAkQgIgIAAgPIAAg5IAYAAIAAAyQAAAKADAFQADAFAIgBQAJAAAEgGQAFgHAAgOIAAgqIAXAAIAABXIgSAAIgDgLIgBAAQgEAGgHADQgHADgIAAQgQAAgHgIg");
	this.shape_34.setTransform(155,9.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C4157").s().p("AgWAoQgJgGgFgKQgFgKgBgOQAAgUAMgMQALgMATAAQANAAAJAFQAKAGAFAKQAGAKAAANQAAAVgMAMQgLAMgUAAQgMAAgKgFgAgNgTQgEAHAAAMQAAANAEAHQAFAGAIAAQAKAAAEgGQAEgHAAgNQAAgMgEgHQgEgGgKAAQgIAAgFAGg");
	this.shape_35.setTransform(144.9,9.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C4157").s().p("AgnA+IAAgTIAKABQAFgBAFgDQAFgEADgIIABgEIgjhWIAaAAIARAxQACAGAAAIIAAAAQACgGACgIIAQgxIAZAAIglBiQgEANgJAHQgJAHgNAAIgMgBg");
	this.shape_36.setTransform(135.4,11.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C4157").s().p("AgbAiQgMgMAAgVQAAgVALgMQALgMASAAQATAAAKAKQAKALAAASIAAALIg3AAQAAAKAGAGQAGAGAJAAQAIAAAHgCQAHgCAHgDIAAASQgGADgHACQgHABgKAAQgUAAgMgLgAASgJQAAgJgFgEQgEgFgIAAQgGAAgEAFQgFAEAAAJIAgAAIAAAAg");
	this.shape_37.setTransform(121.9,9.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C4157").s().p("AgcAtIAAhXIASAAIAEAPIABAAQAFgHAFgFQAHgFAJABIAIAAIgCAWIgHAAQgMAAgGAGQgGAFAAAKIAAAtg");
	this.shape_38.setTransform(114.4,9.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C4157").s().p("AgVAoQgKgGgFgKQgGgKAAgOQAAgUAMgMQALgMATAAQANAAAKAFQAJAGAFAKQAFAKABANQAAAVgMAMQgLAMgUAAQgMAAgJgFgAgNgTQgEAHAAAMQAAANAFAHQADAGAJAAQAJAAAFgGQAEgHAAgNQAAgMgEgHQgFgGgJAAQgJAAgEAGg");
	this.shape_39.setTransform(105.4,9.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C4157").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_40.setTransform(98,8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C4157").s().p("AgoBAIAAh9IAUAAIADALIABAAQAIgNAQAAQAPAAAJAMQAJAMAAAVQAAAOgEAKQgEAKgIAFQgIAGgKAAQgOAAgJgLIgBAAIABAMIAAAkgAgMgmQgEAFAAANIAAACQAAAOAEAFQAEAHAJAAQAQAAAAgaQAAgNgEgGQgEgHgJAAQgIAAgEAGg");
	this.shape_41.setTransform(90.8,11.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C4157").s().p("AASAsIgSgeIgRAeIgbAAIAdgsIgcgrIAbAAIAQAcIARgcIAbAAIgcArIAdAsg");
	this.shape_42.setTransform(80.8,9.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C4157").s().p("AggA5IAAhxIBBAAIAAAUIgpAAIAAAYIAmAAIAAAUIgmAAIAAAdIApAAIAAAUg");
	this.shape_43.setTransform(72,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-5,-5,174.6,58.6), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outlined-icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36BBB3").s().p("AgaAqQgGAAgEgFQgFgEAAgGIAAg1QAAgGAFgEQAEgFAGAAIA1AAQAGAAAEAFQAFAEAAAGIAAA1QAAAGgFAEQgEAFgGAAgAgLAMIAXAAIAAgXIgXAAg");
	this.shape.setTransform(123.6,245.8,0.596,0.596);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36BBB3").s().p("AhCAPQgGAAgFgEQgEgEAAgHQAAgFAEgEQAFgFAGAAICFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAg");
	this.shape_1.setTransform(114.7,247.2,0.596,0.596);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36BBB3").s().p("AgNAPQgHAAgEgEQgEgEAAgHQAAgFAEgEQAEgFAHAAIAbAAQAHAAAEAFQAEAEAAAFQAAAHgEAEQgEAEgHAAg");
	this.shape_2.setTransform(107.5,247.2,0.596,0.596);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36BBB3").s().p("AicAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIE5AAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAg");
	this.shape_3.setTransform(109.3,244.3,0.596,0.596);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgEQgFgEAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAg");
	this.shape_4.setTransform(102,247.2,0.596,0.596);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#36BBB3").s().p("AiVAqQgHAAgEgFQgEgEAAgGIAAg1QAAgGAEgEQAEgFAHAAIErAAQAGAAAFAFQAEAEAAAGIAAA1QAAAGgEAEQgFAFgGAAgAiGAMIENAAIAAgXIkNAAg");
	this.shape_5.setTransform(108.7,237.2,0.596,0.596);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36BBB3").s().p("AjKC4QgiAAgYgZQgYgYAAghIAAjLQAAghAYgYQAYgZAiAAIGWAAQAhAAAYAZQAYAXAAAiIAADLQAAAhgYAYQgYAZghAAgAjviJQgPAPAAAVIAADLQAAAVAPAPQAPAPAWAAIGWAAQAVAAAPgPQAPgPAAgVIAAjLQAAgVgPgPQgPgQgVAAImWAAQgWAAgPAQg");
	this.shape_6.setTransform(112.7,241.4,0.596,0.596);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#36BBB3").s().p("AgeByQgZAAgSgRQgRgSAAgYQAAg+A2grIgZgZQgEgFAAgGQAAgHAFgEQAIgGAHgDQAUgHAZAAQAmgBAWARQAFADABAIQAAAGgFAFIgZAZQA3ArAAA+QAAAZgSARQgRARgZAAgAgFgiQg3AiAAA3QAAAMAIAIQAJAKANgBIA9AAQANABAIgKQAJgIAAgMQAAg4g3giQgEgCgCgEQgBAEgEADgAgZhQIAZAaIACgFIAXgVQgOgEgLAAQgQAAgJAEg");
	this.shape_7.setTransform(124.1,172.8,0.596,0.596);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#36BBB3").s().p("Aj5EmQgHAAgEgEQgEgFAAgGIAAjtIgrgBQgKABgDgKQgEgJAHgHIEykxQAEgEAGAAQAGAAAEAEIE1E1QAHAHgEAJQgDAJgKAAIgrAAIAAAjQAAAHgEAEQgEAEgHAAQgGAAgEgEQgFgEAAgHIAAgyQAAgGAFgEQAEgFAGAAIAVAAIkQkQIkOENIAWAAQAGAAAEAEQAFAFAAAGIAADtIHkAAQAHAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgHAAg");
	this.shape_8.setTransform(110.1,162,0.596,0.596);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#36BBB3").s().p("AAdB9QgFgEAAgHIAAjUIgvAAIAACGQAAAGgFAEQgEAFgGAAQgHAAgEgFQgEgEAAgGIAAiVQAAgHAEgEQAEgEAHAAIBNAAQAGAAAFAEQAEAEAAAHIAADjQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_9.setTransform(121.2,151.8,0.596,0.596);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#36BBB3").s().p("AA2CHQgEgEAAgHIAAjoIhjAAIAADoQAAAHgEAEQgFAEgGAAQgGAAgEgEQgFgEAAgHIAAj3QAAgHAFgEQAEgEAGAAICBAAQAGAAAEAEQAFAEAAAHIAAD3QAAAHgFAEQgEAEgGAAQgGAAgFgEg");
	this.shape_10.setTransform(110.1,171.2,0.596,0.596);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#36BBB3").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZgAgmgmQgRAQAAAWQAAAXARAQQAQARAWAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgWAAgQARg");
	this.shape_11.setTransform(115.7,207.6,0.596,0.596);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#36BBB3").s().p("AApB7QgEgEAAgGIAAjSIhJAAIAABkQAAAGgEAEQgFAFgGAAQgGAAgEgFQgFgEAAgGIAAhzQAAgGAFgEQAEgFAGAAIBnAAQAGAAAEAFQAFAEAAAGIAADhQAAAGgFAEQgEAFgGAAQgHAAgEgFg");
	this.shape_12.setTransform(120.5,200.4,0.596,0.596);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#36BBB3").s().p("AhABDQgHAAgEgFQgEgEAAgGQAAgHAEgEQAEgEAHAAIByAAIAAhJIgmAAQgHAAgEgEQgDgEgBgHQABgGADgEQAEgFAHAAIA1AAQAGAAAFAFQAEAEAAAGIAABnQAAAGgEAEQgFAFgGAAg");
	this.shape_13.setTransform(98.3,196.9,0.596,0.596);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#36BBB3").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZgAgmgmQgRAQAAAWQAAAXARAQQAQARAWAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgWAAgQARg");
	this.shape_14.setTransform(99.5,207.6,0.596,0.596);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36BBB3").s().p("AChCwQgFAAgFgFQgFgDAAgHQAAgGAFgEQAFgFAFAAICYAAIAAkjIoWAAIgxA5IApANQAIADACAHQACAIgGAGIhZBmIAABfIA2AAQAGAAAEAFQAFAEAAAGQAAAHgFADQgEAFgGAAIhEAAQgHAAgEgFQgEgDgBgHIAAh0QABgGADgEIBOhZIgqgMQgHgDgDgIQgCgHAGgHIBFhPQAFgFAHAAIIqAAQAHAAAEAEQAEAEAAAHIAAFBQAAAHgEADQgEAFgHAAg");
	this.shape_15.setTransform(110.4,197.5,0.596,0.596);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#36BBB3").s().p("Ag+APQgHAAgEgFQgEgDAAgHQAAgFAEgEQAEgFAHAAIB9AAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAg");
	this.shape_16.setTransform(107.5,207.1,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#36BBB3").s().p("AgcAdQgMgMAAgRQAAgQAMgNQAMgMAQABQARgBAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgHgHQgDADAAAEQAAAEADAEQADADAEABQAFgBADgDQADgEAAgEQAAgEgDgDQgDgDgFgBQgEABgDADg");
	this.shape_17.setTransform(115.8,283.3,0.596,0.596);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#36BBB3").s().p("Ah5BnQgCgGADgGQADgFAGgBIDMg5IAAhvIisAAQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIC7AAQAGAAAEAEQAFAFAAAGIAACKQAAALgLADIjXA8IgEAAQgMAAgCgLg");
	this.shape_18.setTransform(104.9,287.4,0.596,0.596);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#36BBB3").s().p("AjxECQgJgPgIgjQgOhCAAhrQAAh/BRhWQBRhWB4AAQBnAABYBQQAgAeAVAgQATAdAAANIAAAEIgpC9QgDAJgIACQmCB4g6AUIgFABQgIAAgFgHgAirieQhHBNAAB0QAACHAWA9IGoiFIAnizQgGghg+g1QhPhDhWAAQhtAAhIBMg");
	this.shape_19.setTransform(110.8,286.3,0.596,0.596);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#36BBB3").s().p("AgoAnQgHAAgEgFQgEgEAAgGIAAgvQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIAAAgIAzAAIAAggQAAgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGIAAAvQAAAGgEAEQgEAFgHAAg");
	this.shape_20.setTransform(99.9,139.8,0.596,0.596);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#36BBB3").s().p("AgoAnQgHAAgEgFQgEgEAAgGIAAgvQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIAAAgIAzAAIAAggQAAgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGIAAAvQAAAGgEAEQgEAFgHAAg");
	this.shape_21.setTransform(125.4,139.8,0.596,0.596);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#36BBB3").s().p("Aj5C/QgWAAgQgPQgQgQAAgXIAAhaQAAgSAMgPIA8hMQAMgmAoguQAUgXATgRQAFgEAFAAIEFAAQAGAAAEAEIAoAoQAnAuAMAmIA8BMQAMAPAAASIAABaQAAAXgQAQQgQAPgWAAgAjLgzIgDAFIg+BPQgFAGAAAIIAABaQAAAKAHAHQAHAHAKAAIHzAAQAKAAAHgHQAHgHAAgKIAAhaQAAgIgFgGIg+hPIgDgFQgOguhBg/Ij5AAQhBA/gOAug");
	this.shape_22.setTransform(112.6,127.5,0.596,0.596);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36BBB3").s().p("AhSAPQgGAAgEgFQgFgDAAgHQAAgFAFgEQAEgFAGAAICkAAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAg");
	this.shape_23.setTransform(112.6,133.5,0.596,0.596);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#36BBB3").s().p("AgiAPQgHAAgDgFQgFgDAAgHQAAgFAFgEQADgFAHAAIBFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAg");
	this.shape_24.setTransform(123.6,133.5,0.596,0.596);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgFQgFgDAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAFAFQAEAEAAAFQAAAHgEADQgFAFgGAAg");
	this.shape_25.setTransform(101.7,133.5,0.596,0.596);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#36BBB3").s().p("AjQAPIhPgVQgGgCgDgGQgCgGACgGQADgFAFgDQAHgCAFACIBLAVQBfATBqAAQBsAABfgTQAvgKAbgLQAGgCAFACQAGADACAFQADAGgDAGQgCAGgGACQgUAJg6AMQhiAVhwAAQhvAAhhgVg");
	this.shape_26.setTransform(112.7,124.5,0.596,0.596);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#36BBB3").s().p("AgcAdQgMgMAAgRQAAgQAMgNQAMgMAQABQARgBAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgHgHQgDADAAAEQAAAEADAEQADADAEABQAFgBADgDQADgEAAgEQAAgEgDgDQgDgDgFgBQgEABgDADg");
	this.shape_27.setTransform(115.8,42.5,0.596,0.596);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#36BBB3").s().p("Ah5BnQgCgGADgGQADgFAGgBIDMg5IAAhvIisAAQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIC7AAQAGAAAEAEQAFAFAAAGIAACKQAAALgLADIjXA8IgEAAQgMAAgCgLg");
	this.shape_28.setTransform(104.9,46.6,0.596,0.596);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#36BBB3").s().p("AjxECQgJgPgIgjQgOhCAAhrQAAh/BRhWQBRhWB4AAQBnAABYBQQAgAeAVAgQATAdAAANIAAAEIgpC9QgDAJgIACQmCB4g6AUIgFABQgIAAgFgHgAirieQhHBNAAB0QAACHAWA9IGoiFIAnizQgGghg+g1QhPhDhWAAQhtAAhIBMg");
	this.shape_29.setTransform(110.8,45.6,0.596,0.596);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#36BBB3").s().p("AgFBxQgjgQgggbQg+g0AAg4QAAgfAWgXQAWgWAfABQAmAAAVAdQAXgdAkAAQAfgBAXAWQAWAXAAAfQAAA4g/A0IhCArQgDACgDgBIgFgBgAhahGQgOANAAATQAAAmAsAoQAaAYAiATQAigSAbgYQAsgnAAgoQAAgTgOgNQgNgOgTAAQgQAAgNAMQgNALgCAQQgBAGgEAEQgFADgFABQgFgBgEgDQgEgEgBgGQgCgQgNgLQgNgMgRAAQgSAAgNAOg");
	this.shape_30.setTransform(119.8,92,0.596,0.596);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#36BBB3").s().p("AjUEtQgGAAgFgFQgEgEAAgGIAAhdQAAhHAog6QAog6BBgZQgggVgTghQgTgjAAgnQAAhAAtgsQAtgtA+AAQA/AAAtAtQAtAsAABAQAAAygeApQgeAogwAPQgGABgFgCQgGgDgCgGQgCgGADgFQADgGAGgCQAngMAYggQAYghAAgoQAAgzgkgkQgkgkgzAAQgyAAgkAkQgkAkAAAzQAAAoAYAhQAYAgAnAMQAMAEgBAMQgBALgLACQhGAMguA4QgtA2AABIIAABOIGLAAIAAhOQAAgcgGgXQgCgFAEgGQADgGAGgBQAGgBAFACQAFAEACAFQAHAdAAAeIAABdQAAAGgEAEQgEAFgHAAg");
	this.shape_31.setTransform(111.5,87.8,0.596,0.596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(90,29.8,40.8,272.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07BCB6").s().p("AgIAKQgDgEAAgGQAAgFADgDQAEgEAEAAQAGAAADAEQADADAAAFQAAAGgEAEQgDADgFAAQgEAAgEgDg");
	this.shape.setTransform(126.3,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#07BCB6").s().p("AAAA+IgIgFQgCgDgBgFQgCgGAAgHIAAg5IgTAAIAAgMIATgCIAAgYIASgDIAAAbIAbAAIAAAOIgbAAIAAA6QAAAGACADQACADAFAAQAFAAAJgFIAFAKQgGAEgHADQgGACgHAAQgFAAgCgBg");
	this.shape_1.setTransform(120.3,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#07BCB6").s().p("AgmAsQgGgHAAgOQgBgOALgHQALgHAVAAIAOAAIAAgOQAAgRgQAAQgKAAgIACIgBABIgDAOIgMAAIgBgYIATgFQAJgCAIAAQAIAAAGACQAGABAFAEQAIAGAAAQIAAA3IAQAEIAAAKIgeABIgEgNQgHAIgGADQgIAEgGAAQgPAAgIgHgAgUAKQgGAEABAHQgBAIAEADQADAEAGAAIAHgBIAGgDIAFgDIAEgEIADgEIAAgOIgMAAQgOAAgGADg");
	this.shape_2.setTransform(111.7,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#07BCB6").s().p("AALBHIAAgKIAMgEIAAgzQAAgIgEgGQgEgEgIAAIgHABIgGACIgGAFIgEADIgEADIAAA3IAMAEIAAAKIguAAIAAgKIAQgEIAAhxIgQgDIAAgKIAigCIAAA5QAQgOAPAAQAIAAAGACQAFADAEAEQAEAFACAFQABAHAAAHIAAA0IAOAEIAAAKg");
	this.shape_3.setTransform(100.3,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#07BCB6").s().p("AAAA+IgHgFQgDgDgCgFQgBgGAAgHIAAg5IgTAAIAAgMIATgCIAAgYIARgDIAAAbIAbAAIAAAOIgbAAIAAA6QAAAGADADQACADAEAAQAHAAAIgFIAFAKQgGAEgHADQgGACgHAAQgEAAgDgBg");
	this.shape_4.setTransform(90.8,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#07BCB6").s().p("AgeAmQgLgNAAgXQAAgLADgKQADgJAGgHQAGgHAJgEQAIgEAJAAQAUAAAJALQAKALAAAWIgBAIIg/ABQAAAHACAHQACAGAEAEQAHAJALAAIAIgBIAIgBIAHgDIAFgDIADgCIAHAKIgMAIIgMAFQgHACgJAAQgVAAgLgNgAAXgKQAAgLgFgHQgFgIgLAAQgEAAgEACQgFACgDAEQgGAHgBALIAsAAIAAAAg");
	this.shape_5.setTransform(78.2,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#07BCB6").s().p("AAaBHIgagvIgQAAIAAAhIAMAEIAAAKIguAAIAAgKIAQgEIAAhxIgQgDIAAgKIAigCIAABRIAQAAIANgWIgIgDIAAgKIAogBIAAALIgNADIgTAbIAYAqIAAAAIAOAEIAAAKg");
	this.shape_6.setTransform(68.1,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#07BCB6").s().p("AgXBHIAAgKIAQgFIAAhDIgQgFIAAgKIAiAAIAABSIANAFIAAAKgAgIgvQgDgEAAgGQAAgGAEgEQADgDAEAAQAMAAAAAOQAAAGgEADQgEADgEAAQgFAAgDgDg");
	this.shape_7.setTransform(59.6,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#07BCB6").s().p("AgaBHIAAgKIAQgEIAAhxIgQgDIAAgKIAigCIAACAIATAEIAAAKg");
	this.shape_8.setTransform(53.8,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#07BCB6").s().p("AAAA+IgHgFQgDgDgCgFQgBgGAAgHIAAg5IgTAAIAAgMIATgCIAAgYIARgDIAAAbIAbAAIAAAOIgbAAIAAA6QAAAGADADQACADAEAAQAHAAAIgFIAFAKQgGAEgHADQgGACgHAAQgEAAgDgBg");
	this.shape_9.setTransform(43.1,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#07BCB6").s().p("AgMAzIgHgBIgGgBIgFgBIgEgBIAAgcIANAAIACAQIAGACIAIAAQALAAAFgDIAEgFQACgDAAgEQAAgEgEgDQgEgDgGgCIgLgFIgNgFQgGgCgDgFQgEgGAAgIQAAgHACgFQACgGAFgDQAJgIAQAAIAMABIAOADIAFACIgBAZIgMAAIgDgPIgGgBIgJgBIgFAAIgGACIgDAEQgCACAAAEQAAAFAEADQAEADAGADIALAEIANAFQAGADADAFQAEAFAAAIQAAAHgDAGQgDAGgGAEQgGAEgHACQgIACgHAAg");
	this.shape_10.setTransform(35.2,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#07BCB6").s().p("AgXAwQgFgCgEgFQgHgIAAgQIAAgzIgQgEIAAgKIAigBIAABAQAAAKAEAFQAEAEAIAAQAHAAAHgDIAKgIIADgDIAAg2IgQgEIAAgKIAjgBIAABSIAPAEIAAAKIgeABIgCgNQgIAHgKAEQgJAEgGAAQgIAAgGgCg");
	this.shape_11.setTransform(24.8,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#07BCB6").s().p("AgeBOIABgOIAKAAQAQAAAAgSIAAhtIgQgEIAAgKIAygBIAAALIgPAEIAABqQAAAIgDAHQgCAGgFAFQgEAFgGADQgGACgJAAg");
	this.shape_12.setTransform(15.1,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(8.9,-2,123.3,29.1), null);


(lib.hilite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA1F58").s().p("AkoCWIgygEQgSgCgLACIgPAAIgOAAIgYgBQgGgBAAgIIABgFIgBgGIAAgCIACgIIABgHIgBgDIgCgDQAEgFgDgFIAEgWIgEgFIACgEIgBgEIAAgDQACgFgCgDIgBgCIADgQQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgCgEACgEQACgDgBgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIgBgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgDQgEgIACgGIADgNQAAgCADgCIABgBIAEgIIABgHIAAgHIAAgNIAAgMQACgOgBgIIgBgIQgBgFADgEIAAgBQgCgFACgGIADgJIAEgDIABgBIAzAEIAIACIAHABQAcAGALABQAWADAWAAQALABAVgCIAHABIA9gBIANABIAOABIASgBIASgBIBfgHIAKgBIALABIAyABIALgBIALgCIAUgBIAUAAQAOACAVgBQAJAAASgDIANACIAIACIAGAEQACADAEgBIAUgCIAHAAIADgEIABgFIABgEIANAAQAOgBAUACIAiADIAMABIALAAIAbgBIAQAAIAaABIADACIADABQgFAEACAHQABAIAAAQIgBAFIACAEIgBADQgDAHACAEIAAAEIgBAMIABABQACAGAAAJIgCAQIgCAPQgBAKADAIIABACIAAASQgBAJgEAGIgCAEIgDACQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgCAOQgBAEACAHIACAIIAAAIQABAEgBAFQgEALADAMQAAADgCAFIgCAIIgBAKIgCAHIgGABIgtgDIgJgCIgLgCQgUgFgIgBIg2gEIgLAAIgMAAIhVAAIgSgBIgjACIgbABIgYADIgnADIgpAAIgmAAIgJABIgKABIgTABQgLACgHgCIgkgBIgPABIgQACIgHgBIgJgBIAAgBQgDABgEgCIgGgFQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAIgbADIgCAAQgDAFgFgBQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQgCAGgEAAIgRAAIgMAAg");
	this.shape.setTransform(169.5,0,0.724,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hilite, new cjs.Rectangle(138,-15,62.9,30), null);


(lib.greeny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07BCB6").s().p("Egi5AFuIAAp6QAAg+AxgYQAYgMAYAAMBESAAAIAAJ8QAAA9gwAYIgwALg");
	this.shape.setTransform(223.4,36.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greeny, new cjs.Rectangle(0,0,446.8,73.3), null);


(lib.duder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._72890navygirl();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.duder, new cjs.Rectangle(0,0,106,90), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBEAEC","rgba(235,234,236,0)"],[0.42,1],0,-11.8,0,11.9).s().p("AnGB2IAAjrIONAAIAADrg");
	this.shape.setTransform(130,-117.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBEAEC","rgba(235,234,236,0)"],[0.42,1],0,11.6,0,-11.6).s().p("AnGB0IAAjnIONAAIAADng");
	this.shape_1.setTransform(130,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(50));

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(250.1,-125.6,0.879,0.879,0,0,0,247.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:110.4,regY:165.9,x:130,y:-25.2},0).wait(1).to({y:-35.1},0).wait(1).to({y:-43.3},0).wait(1).to({y:-50.4},0).wait(1).to({y:-56.9},0).wait(1).to({y:-62.9},0).wait(1).to({y:-68.4},0).wait(1).to({y:-73.6},0).wait(1).to({y:-78.4},0).wait(1).to({y:-82.9},0).wait(1).to({y:-87.2},0).wait(1).to({y:-91.2},0).wait(1).to({y:-95},0).wait(1).to({y:-98.6},0).wait(1).to({y:-102},0).wait(1).to({y:-105.3},0).wait(1).to({y:-108.3},0).wait(1).to({y:-111.3},0).wait(1).to({y:-114},0).wait(1).to({y:-116.7},0).wait(1).to({y:-119.2},0).wait(1).to({y:-121.5},0).wait(1).to({y:-123.8},0).wait(1).to({y:-125.9},0).wait(1).to({y:-127.9},0).wait(1).to({y:-129.8},0).wait(1).to({y:-131.5},0).wait(1).to({y:-133.2},0).wait(1).to({y:-134.8},0).wait(1).to({y:-136.3},0).wait(1).to({y:-137.7},0).wait(1).to({y:-139},0).wait(1).to({y:-140.2},0).wait(1).to({y:-141.3},0).wait(1).to({y:-142.3},0).wait(1).to({y:-143.3},0).wait(1).to({y:-144.2},0).wait(1).to({y:-145},0).wait(1).to({y:-145.7},0).wait(1).to({y:-146.3},0).wait(1).to({y:-146.9},0).wait(1).to({y:-147.4},0).wait(1).to({y:-147.8},0).wait(1).to({y:-148.2},0).wait(1).to({y:-148.4},0).wait(1).to({y:-148.7},0).wait(1).to({y:-148.8},0).wait(1).to({y:-148.9},0).wait(1).to({regX:247.1,regY:30.9,x:250.1,y:-267.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.5,-128.9,91,241.7);


// stage content:
(lib._728x90_rates_cre = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(241));

	// dude
	this.instance = new lib.duder();
	this.instance.parent = this;
	this.instance.setTransform(82.6,148.1,1,1,0,0,0,64,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:53,regY:45,x:71.6,y:147.7},0).wait(1).to({y:146.7},0).wait(1).to({y:144.7},0).wait(1).to({y:141.2},0).wait(1).to({y:135.3},0).wait(1).to({y:123.9},0).wait(1).to({y:96.4},0).wait(1).to({y:69},0).wait(1).to({y:57.7},0).wait(1).to({y:51.7},0).wait(1).to({y:48.3},0).wait(1).to({y:46.3},0).wait(1).to({y:45.3},0).wait(1).to({regX:64,regY:45.1,x:82.6,y:45.1},0).wait(139).to({regX:53,regY:45,x:71.6,y:46.1},0).wait(1).to({y:50.4},0).wait(1).to({y:60.6},0).wait(1).to({y:85.9},0).wait(1).to({y:125.6},0).wait(1).to({y:142.5},0).wait(1).to({y:148.5},0).wait(1).to({regX:64,regY:45.1,x:82.6,y:150.1},0).wait(81));

	// logo
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(595.5,70.7,1.06,1.06,0,0,0,90.4,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(241));

	// text2
	this.instance_2 = new lib.text2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(327.5,2.5,1,1,0,0,0,190.5,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).wait(1).to({regX:102.8,regY:33.6,x:239.8,y:18.6,alpha:0.004},0).wait(1).to({y:19,alpha:0.018},0).wait(1).to({y:19.8,alpha:0.046},0).wait(1).to({y:21.5,alpha:0.102},0).wait(1).to({y:25,alpha:0.219},0).wait(1).to({y:37.2,alpha:0.628},0).wait(1).to({y:44.3,alpha:0.863},0).wait(1).to({y:46.6,alpha:0.942},0).wait(1).to({y:47.8,alpha:0.979},0).wait(1).to({y:48.3,alpha:0.995},0).wait(1).to({regX:190.5,regY:17.7,x:327.5,y:32.5,alpha:1},0).wait(67).to({regX:102.8,regY:33.6,x:239.8,y:47.6},0).wait(1).to({y:44.4},0).wait(1).to({y:36.7},0).wait(1).to({y:16.1},0).wait(1).to({y:-22.2},0).wait(1).to({y:-35.8},0).wait(1).to({y:-40.4},0).wait(1).to({regX:190.5,regY:17.7,x:327.5,y:-57.5},0).wait(81));

	// hilite
	this.instance_3 = new lib.hilite();
	this.instance_3.parent = this;
	this.instance_3.setTransform(134.5,62.5,0.048,1,0,0,0,0,15);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).wait(1).to({regX:169.5,regY:0,scaleX:0.06,x:144.7,y:47.5,alpha:0.013},0).wait(1).to({scaleX:0.11,x:152.8,alpha:0.063},0).wait(1).to({scaleX:0.23,x:172.9,alpha:0.188},0).wait(1).to({scaleX:0.49,x:218.3,alpha:0.469},0).wait(1).to({scaleX:0.76,x:264.1,alpha:0.752},0).wait(1).to({scaleX:0.9,x:286.6,alpha:0.892},0).wait(1).to({scaleX:0.96,x:297.6,alpha:0.96},0).wait(1).to({scaleX:0.99,x:302.7,alpha:0.991},0).wait(1).to({regX:0,regY:15,scaleX:1,x:134.5,y:62.5,alpha:1},0).wait(53).to({regX:169.5,regY:0,x:304,y:46.7},0).wait(1).to({y:43.5},0).wait(1).to({y:35.8},0).wait(1).to({y:15.1},0).wait(1).to({y:-23.1},0).wait(1).to({y:-36.7},0).wait(1).to({y:-41.3},0).wait(1).to({regX:0,regY:15,x:134.5,y:-27.5},0).wait(81));

	// text1
	this.instance_4 = new lib.text1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(237.5,-43.5,1,1,0,0,0,190.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:240.7,regY:20.6,x:287.7,y:-40.3},0).wait(1).to({y:-39.4},0).wait(1).to({y:-37.7},0).wait(1).to({y:-34.6},0).wait(1).to({y:-29.4},0).wait(1).to({y:-19.5},0).wait(1).to({y:4.6},0).wait(1).to({y:28.4},0).wait(1).to({y:38.3},0).wait(1).to({y:43.5},0).wait(1).to({y:46.5},0).wait(1).to({y:48.3},0).wait(1).to({y:49.1},0).wait(1).to({regX:190.5,regY:17.7,x:237.5,y:46.5},0).wait(57).to({regX:240.7,regY:20.6,x:287.7,y:49.5,alpha:0.996},0).wait(1).to({y:49.8,alpha:0.982},0).wait(1).to({y:50.5,alpha:0.954},0).wait(1).to({y:51.7,alpha:0.898},0).wait(1).to({y:54.4,alpha:0.781},0).wait(1).to({y:63.8,alpha:0.372},0).wait(1).to({y:69.3,alpha:0.137},0).wait(1).to({y:71.1,alpha:0.058},0).wait(1).to({y:71.9,alpha:0.021},0).wait(1).to({y:72.3,alpha:0.005},0).wait(1).to({regX:190.5,regY:17.7,x:237.5,y:69.5,alpha:0},0).to({_off:true},9).wait(151));

	// green
	this.instance_5 = new lib.greeny();
	this.instance_5.parent = this;
	this.instance_5.setTransform(231.5,-45,1,1,0,0,0,223.3,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:223.4,x:231.6,y:-44.7},0).wait(1).to({y:-43.8},0).wait(1).to({y:-42.1},0).wait(1).to({y:-39},0).wait(1).to({y:-33.8},0).wait(1).to({y:-23.9},0).wait(1).to({y:0.2},0).wait(1).to({y:24.1},0).wait(1).to({y:33.9},0).wait(1).to({y:39.1},0).wait(1).to({y:42.1},0).wait(1).to({y:43.9},0).wait(1).to({y:44.7},0).wait(1).to({regX:223.3,x:231.5,y:45},0).wait(139).to({regX:223.4,x:231.6,y:44.2},0).wait(1).to({y:41},0).wait(1).to({y:33.3},0).wait(1).to({y:12.7},0).wait(1).to({y:-25.6},0).wait(1).to({y:-39.2},0).wait(1).to({y:-43.8},0).wait(1).to({regX:223.3,x:231.5,y:-45},0).wait(81));

	// CTA
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(338.6,61,0.126,0.126,0,0,0,84.7,20.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(210).to({_off:false},0).wait(1).to({regX:94.8,regY:15.3,scaleX:0.14,scaleY:0.14,x:339.9,y:60.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:340.6,y:59.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:342.8,y:58.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:345.2,y:57.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:345.8,y:57.2},0).wait(1).to({regX:84.7,regY:20.4,scaleX:0.73,scaleY:0.73,x:338.6,y:61},0).wait(1).to({regX:94.8,regY:15.3,scaleX:0.72,scaleY:0.72,x:345.9,y:57.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:345.5,y:57.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:345,y:57.7},0).wait(1).to({regX:84.7,regY:20.4,scaleX:0.63,scaleY:0.63,x:338.6,y:61},0).wait(21));

	// justlikedat
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(332.6,29,1,1,0,0,0,56.5,13.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(193).to({_off:false},0).to({alpha:1},6).wait(42));

	// CAROUSEL
	this.instance_8 = new lib.Symbol6("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(359.7,159,1,1,0,0,0,247.1,30.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).wait(86));

	// explore
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(124.6,48.1,1,1,0,0,0,89.8,29.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(155).to({_off:false},0).wait(86));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEAEC").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.6,-36.6,729,274.6);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_72890navygirl.png", id:"_72890navygirl"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;