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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAzIAJgPQAFAGAGgBQAHABADgEQAEgFAAgFIgjhWIATAAIAZA9IAag9IATAAIgqBjIgDAIIgGAFQgHAGgJgBQgLAAgKgIg");
	this.shape.setTransform(46.8,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAqQgGgCgEgDQgEgFgCgEQgDgGAAgGQAAgMAKgGQAEgCAHgCQAGgCAIAAIAWAAIAAgDQAAgIgFgFQgFgEgJAAQgLAAgNAIIgIgKQAIgGAJgEQAJgDAJAAQAHAAAGACQAGACAFADQAFAFACAGQADAGAAAHIAAA2IgRAAIAAgLQgKANgRAAQgHAAgFgCgAgOAGQgFADAAAHQAAAGAFADQAFAEAIAAQAIAAAGgFQAEgDABgDQACgDAAgEIAAgHIgUAAQgJAAgFACg");
	this.shape_1.setTransform(37.2,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSA4QgGgDgGgGQgNgLAAgVQAAgJAEgHQADgIAGgGQAMgMARAAQAHAAAIADQAHAFAEAGIAAguIATAAIAAB1IgTAAIAAgMQgKAOgRAAQgIAAgIgEgAgRgDQgIAHAAANQABALAHAIQAEAEAFACQAFACADAAQAGAAAEgCQAFgCADgEQAFgEABgEQACgGAAgGQAAgGgCgFQgBgFgFgDQgGgIgMAAQgJAAgIAIg");
	this.shape_2.setTransform(27.2,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAfQgGgHgEgHQgDgIAAgJQAAgIADgIQAEgIAGgGQANgNASAAQAKAAAIADQAHADAHAHQAGAGAEAIQADAIAAAIQAAATgNAMQgHAHgHACQgIAEgKAAQgSAAgNgNgAgSgTQgIAHAAAMQAAANAIAHQADAEAFACQAFACAFAAQAGAAAFgCQAEgCAEgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgHgIgMAAQgLAAgHAIg");
	this.shape_3.setTransform(16.9,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA4IAAheIgiAAIAAgRIBVAAIAAARIgiAAIAABeg");
	this.shape_4.setTransform(6.8,32.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARA7IgYglIgNANIAAAYIgSAAIAAh1IASAAIAABEIAhgjIAYAAIghAhIAjAzg");
	this.shape_5.setTransform(39.3,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAfQgGgGgEgIQgDgIAAgJQAAgIADgIQAEgIAGgGQANgNASAAQAKAAAIADQAHADAHAHQAGAGAEAIQADAIAAAIQAAATgNAMQgHAGgHADQgIAEgKAAQgSAAgNgNgAgSgTQgIAIAAALQAAANAIAHQADAEAFACQAFACAFAAQAGAAAFgCQAEgCAEgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgHgIgMAAQgLAAgHAIg");
	this.shape_6.setTransform(28.9,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAfQgGgGgEgIQgDgIAAgJQAAgIADgIQAEgIAGgGQANgNASAAQAKAAAIADQAHADAHAHQAGAGAEAIQADAIAAAIQAAATgNAMQgHAGgHADQgIAEgKAAQgSAAgNgNgAgSgTQgIAIAAALQAAANAIAHQADAEAFACQAFACAFAAQAGAAAFgCQAEgCAEgEQAEgEACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgHgIgMAAQgLAAgHAIg");
	this.shape_7.setTransform(18.5,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA4IAAhvIAsAAQAKAAAIADQAJADAEAEQAHAJAAALQAAAGgCAFQgCAFgEADIgEADIgEACQAKABAGAIIAFAHQACAFAAAFQAAALgIAKQgFAFgIADQgIACgMAAgAgZAnIAdAAQAKgBAGgCIAEgGQABgDAAgEQAAgPgYAAIgaAAgAgZgIIAYAAQAUAAAAgPQAAgDgCgDQgBgDgCgCIgHgCIgIgCIgYAAg");
	this.shape_8.setTransform(8,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,53.5,44), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFCXIB/k3IAMAKIh/E3gAAVCUQgJgJAAgRIAAhSQAAgRAJgJQAJgJAPAAQAOAAAJAJQAJAJAAARIAABSQAAARgJAJQgJAKgOAAQgPAAgJgKgAAjAlIAABYQAAAKAKAAQAJAAAAgKIAAhYQAAgKgJAAQgKAAAAAKgAhDgMQgJgKAAgRIAAhSQAAgQAJgKQAJgJAOAAQAOAAAJAJQAKAKAAAQIAABSQAAARgKAKQgJAJgOAAQgOAAgJgJgAg1h8IAABYQAAALAJAAQAJAAAAgLIAAhYQAAgKgJAAQgJAAAAAKg");
	this.shape.setTransform(70.1,197.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSCXQgHgEgFgHQgLgPAAgUIAAglIAgAAIAAAlQAAALAIAAQAHAAAAgKIAAhqQAAgKgGAAQgIAAAAAKIgggDIAGiXIBMAAQAAAVgGAJQgFAIgJAAIgbAAIgDBTQAIgJAOAAQALAAAHAJQAHAKAAAOIAABxQAAALgDAKQgDAJgFAHQgGAHgHAEQgIADgIAAQgJAAgIgEg");
	this.shape_1.setTransform(56.9,197.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQCZIAAkiQAOAAAAgPIATAAIAAExg");
	this.shape_2.setTransform(48.3,197.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkCZIAAkxIBJAAIAAAlIgmAAIAABdIAaAAIAAAkIgaAAIAABmIAmAAIAAAlg");
	this.shape_3.setTransform(36.5,197.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRCZIgekxIAjAAIANDOIAPjOIAgAAIgeExg");
	this.shape_4.setTransform(26.8,197.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALCZIgCg3IgUAAIgEA3IggAAIAckxIAnAAIAcExgAAHA6IgHiGIgICGIAPAAg");
	this.shape_5.setTransform(17.1,197.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSCZQgIgDgHgIQgFgHgEgKQgCgLAAgNIAAglIAeAAIAAAqQAAAQAOAAQALAAgBgQQAAgWgEgVQgGgUgLgcQgOgggIgWIgIgeQgDgPAAgLQAAgOADgLQADgLAFgIQAGgIAKgEQAJgFALAAQAJAAAIAEQAHADAGAHQAFAHAEALQACAKAAAOIAAApIgeAAIAAguQAAgOgLAAQgLAAAAAOQAAAbAGAUIARAuQAPAhAGAYQAKAfgBAWQAAARgEAMQgEALgIAHQgLAMgSAAQgJAAgJgEg");
	this.shape_6.setTransform(7.3,197.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbB1IAAjoIA3AAIAAAbIgcAAIAABIIATAAIAAAaIgTAAIAABPIAcAAIAAAcg");
	this.shape_7.setTransform(177.5,108.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghB1IAAjoIAkAAQANgBAIAIQAFAEADAHQACAIAAAKIAACfQAAALgCAHQgDAHgFAEQgIAIgNAAgAgGBZIAGAAQAHAAAAgJIAAieQAAgKgHAAIgGAAg");
	this.shape_8.setTransform(169.8,108.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNB1IAAjoIAbAAIAADog");
	this.shape_9.setTransform(163.5,108.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALB1QgCAAgDgOIgBgWIAAg3QAAgJgFAAIgHAAIAABkIgbAAIAAjoIAiAAQANgBAIAIQAEAEADAHQADAIAAAKIAAA8QAAAIgEAFQgDAFgGAFQAHAFADAFQAEAGAAAIIAAAxQAAAQADAXIAAABgAgHgJIAHAAQAEAAAAgJIAAg8QAAgKgEAAIgHAAg");
	this.shape_10.setTransform(157.6,108.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZBtQgDgFgDgHQgCgIAAgJIAAieQAAgJACgHQADgIAFgFQAEgFAGgDQAGgDAHAAQAGAAAHADQAFADAFAFQAFAFACAIQACAHAAAJIAAAvIgZAAIAAgxQABgJgIAAQgHAAABAJIAAClQgBAIAHAAQAHAAAAgIIAAg5IgGAAIAAgZIAhAAIAAByIgRAAIgCgJQgDAGgFADQgFACgFAAQgOAAgIgKg");
	this.shape_11.setTransform(146.3,108.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOB1IgWh0IgFgeIAACSIgXAAIAAjoIAcAAIASBxIAEAfIAAiQIAXAAIAADog");
	this.shape_12.setTransform(137.9,108.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNB1IAAjoIAbAAIAADog");
	this.shape_13.setTransform(131.3,108.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOB1IAAhcIgXiMIAaAAIAMBgIAKhgIAbAAIgaCMIAABcg");
	this.shape_14.setTransform(125.5,108.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaB1IAAjoIAaAAIAADNIAbAAIAAAbg");
	this.shape_15.setTransform(119,108.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaB1IAAjoIA1AAIAAAbIgbAAIAABJIAVAAIAAAaIgVAAIAABqg");
	this.shape_16.setTransform(112.5,108.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbB1IAAjoIA3AAIAAAbIgcAAIAABIIATAAIAAAaIgTAAIAABPIAcAAIAAAcg");
	this.shape_17.setTransform(102.7,108.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNB1IAAjLIgUAAIAAgdIBDAAIAAAdIgUAAIAADLg");
	this.shape_18.setTransform(95.6,108.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAIB1IgCgrIgPAAIgCArIgZAAIAWjoIAdAAIAVDogAAFAtIgFhnIgGBnIALAAg");
	this.shape_19.setTransform(88.5,108.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAYB1IAAi7IgEAzIgNCIIgSAAIgMiIIgDgzIAAC7IgXAAIAAjoIAkAAIALBbIADA7IAEg7IAKhbIAiAAIAADog");
	this.shape_20.setTransform(79.2,108.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNB1IAAjoIAbAAIAADog");
	this.shape_21.setTransform(71.3,108.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNB1IAAjLIgUAAIAAgdIBDAAIAAAdIgUAAIAADLg");
	this.shape_22.setTransform(65.7,108.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaB1IAAjoIAaAAIAADNIAbAAIAAAbg");
	this.shape_23.setTransform(59.4,108.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgMBzQgGgDgFgFQgFgFgCgIQgDgHAAgJIAAjDIAbAAIAADFQABAJAFAAQAIAAAAgJIAAjFIAaAAIAADDQgBAJgCAHQgCAIgFAFQgEAFgGADQgGADgIAAQgFAAgHgDg");
	this.shape_24.setTransform(51.8,108.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbB1IAAjoIA3AAIAAAbIgcAAIAABIIATAAIAAAaIgTAAIAABPIAcAAIAAAcg");
	this.shape_25.setTransform(41.4,108.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAHB1IAAhkIgNAAIAABkIgbAAIAAjoIAbAAIAABnIANAAIAAhnIAbAAIAADog");
	this.shape_26.setTransform(33.6,108.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMB1IAAjLIgVAAIAAgdIBDAAIAAAdIgUAAIAADLg");
	this.shape_27.setTransform(25.9,108.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAOB1IgWh0IgFgeIAACSIgXAAIAAjoIAcAAIASBxIAEAfIAAiQIAXAAIAADog");
	this.shape_28.setTransform(14.9,108.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNB1QgFgDgFgFQgFgGgDgHQgDgIABgIIAAieQgBgJADgHQADgIAFgFQAFgFAFgDQAHgDAGAAQAHAAAGADQAHADAEAFQAFAFADAIQACAHAAAJIAACeQAAAIgCAIQgDAHgFAGQgEAFgHADQgGACgHAAQgGAAgHgCgAgGhQIAACiQAAAIAGAAQAHAAAAgIIAAiiQAAgJgHAAQgGAAAAAJg");
	this.shape_29.setTransform(6.4,108.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAIB1IgBgrIgQAAIgCArIgZAAIAWjoIAdAAIAVDogAAFAtIgFhnIgGBnIALAAg");
	this.shape_30.setTransform(141.1,18.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AghB1IAAjoIAkAAQANgBAIAIQAFAEADAHQACAIAAAKIAACfQAAALgCAHQgDAHgFAFQgIAHgNAAgAgFBZIAFAAQAHAAAAgJIAAieQAAgKgHAAIgFAAg");
	this.shape_31.setTransform(133.5,18.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAIB1IgCgrIgPAAIgCArIgZAAIAWjoIAdAAIAWDogAAFAtIgFhnIgGBnIALAAg");
	this.shape_32.setTransform(125.6,18.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAOB1IgWh0IgFgeIAACSIgXAAIAAjoIAcAAIASBxIAEAfIAAiQIAXAAIAADog");
	this.shape_33.setTransform(117.6,18.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAJB1IgDgrIgOAAIgDArIgYAAIAVjoIAdAAIAWDogAAFAtIgFhnIgGBnIALAAg");
	this.shape_34.setTransform(109.5,18.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKB1QgHgDgFgFQgFgGgCgHQgDgIAAgIIAAieQAAgJADgHQACgIAFgFQAFgFAHgDQAGgDAGAAQAIAAAGADQAFADAEAFQAIALAAASIAAAsIgWAAIAAgtQAAgKgIAAQgHAAAAAKIAACgQAAAJAHAAQAIAAAAgJIAAguIAWAAIAAAtQAAAJgCAHQgCAHgEAGQgEAFgFADQgGACgIAAQgGAAgGgCg");
	this.shape_35.setTransform(102.2,18.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AALB1QgCAAgDgOIgBgWIAAg3QAAgJgFAAIgHAAIAABkIgbAAIAAjoIAiAAQANgBAIAIQAEAEADAHQADAIAAAKIAAA8QAAAIgEAFQgDAFgGAFQAHAFADAFQAEAGAAAIIAAAxQAAAQADAXIAAABgAgHgJIAHAAQAEAAAAgJIAAg8QAAgKgEAAIgHAAg");
	this.shape_36.setTransform(91.4,18.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMBzQgGgDgEgFQgFgFgDgIQgCgHAAgJIAAjDIAbAAIAADFQAAAJAFAAQAIAAgBgJIAAjFIAbAAIAADDQgBAJgCAHQgCAIgFAFQgFAFgFADQgHADgHAAQgFAAgHgDg");
	this.shape_37.setTransform(83.1,18.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMB1QgHgDgFgFQgFgGgCgHQgDgIAAgIIAAieQAAgJADgHQACgIAFgFQAFgFAHgDQAGgDAGAAQAHAAAHADQAGADAFAFQAEAFADAIQACAHAAAJIAACeQAAAIgCAIQgDAHgEAGQgFAFgGADQgHACgHAAQgGAAgGgCgAgGhQIAACiQAAAIAGAAQAHAAAAgIIAAiiQAAgJgHAAQgGAAAAAJg");
	this.shape_38.setTransform(74.9,18.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOB1IAAhcIgXiMIAaAAIALBgIALhgIAbAAIgaCMIAABcg");
	this.shape_39.setTransform(67.1,18.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AALB1QgCAAgDgOIgBgWIAAg3QAAgJgFAAIgHAAIAABkIgbAAIAAjoIAiAAQANgBAIAIQAEAEADAHQADAIAAAKIAAA8QAAAIgEAFQgDAFgGAFQAHAFADAFQAEAGAAAIIAAAxQAAAQADAXIAAABgAgHgJIAHAAQAEAAAAgJIAAg8QAAgKgEAAIgHAAg");
	this.shape_40.setTransform(56.5,18.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgbB1IAAjoIA3AAIAAAbIgcAAIAABIIATAAIAAAbIgTAAIAABOIAcAAIAAAcg");
	this.shape_41.setTransform(49.1,18.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMB1IgYjoIAbAAIAKCcIALicIAZAAIgYDog");
	this.shape_42.setTransform(41.8,18.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNB1QgGgDgFgFQgEgGgDgHQgDgIABgIIAAieQgBgJADgHQADgIAEgFQAFgFAGgDQAHgDAGAAQAHAAAGADQAHADAEAFQAFAFADAIQADAHAAAJIAACeQAAAIgDAIQgDAHgFAGQgEAFgHADQgGACgHAAQgGAAgHgCgAgGhQIAACiQAAAIAGAAQAHAAAAgIIAAiiQAAgJgHAAQgGAAAAAJg");
	this.shape_43.setTransform(34,18.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgKB1QgHgDgFgFQgFgGgCgHQgDgIAAgIIAAieQAAgJADgHQACgIAFgFQAFgFAHgDQAGgDAGAAQAIAAAGADQAFADAEAFQAIALAAASIAAAsIgWAAIAAgtQAAgKgIAAQgHAAAAAKIAACgQAAAJAHAAQAIAAAAgJIAAguIAWAAIAAAtQAAAJgCAHQgCAHgEAGQgEAFgFADQgGACgIAAQgGAAgGgCg");
	this.shape_44.setTransform(26.2,18.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOB1QgGgDgFgFQgEgGgCgIQgDgIAAgKIAAgcIAYAAIAAAgQAAAMAJAAQAJAAAAgMQAAgRgEgQQgEgPgIgVIgRgpIgGgXQgCgLAAgJQAAgKACgJQACgIAEgGQAFgGAHgEQAHgDAIAAQAHAAAGACQAGADAEAFQAEAGACAIQADAIAAALIAAAfIgYAAIAAgkQAAgKgIAAQgIAAAAAKQAAAVAEAPQACAHALAcQALAZAGATQAHAXAAARQAAANgEAJQgDAIgGAGQgJAIgNAAQgHAAgHgCg");
	this.shape_45.setTransform(18.4,18.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNB1IAAjoIAbAAIAADog");
	this.shape_46.setTransform(12.5,18.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AghB1IAAjoIAkAAQANgBAIAIQAFAEACAHQADAIAAAKIAACfQAAALgDAHQgCAHgFAFQgIAHgNAAgAgGBZIAGAAQAHAAAAgJIAAieQAAgKgHAAIgGAAg");
	this.shape_47.setTransform(6.3,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,182.7,224), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(18,12,14,0)","rgba(18,12,14,0.949)"],[0.576,1],-23,0,22.9,0).s().p("AjeBEQgXhNAuiDID0gNQgSAwABAWQAAAdAdAAQAZAAAhgWQAggWAugwQgCBNAoAsQhNBUhYAwQhVAvhKAAQhoAAgZhWg");
	this.shape.setTransform(23.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,46.2,30.8), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(18,12,14,0)","rgba(18,12,14,0.949)"],[0.584,1],-11.5,0,10.8,0).s().p("AhxgQIBDhEQApA/AuAAQAUABARgTQASgSASgrIg/DHIgXACQhgAAgth1g");
	this.shape.setTransform(11.4,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,22.9,20.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#231F20","#FFFFFF"],[0,0.624],-18.1,0,3.5,0).s().p("AiYARQBKgQAwglQAuglAEguICogTQgIBuhxBMQhlBGiZAVQAJg7Aag/g");
	this.shape.setTransform(18.8,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,37.5,27.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#231F20","rgba(35,31,32,0.796)","rgba(35,31,32,0)"],[0,0.09,1],-30.5,0,30.5,0).s().p("AA9BZQhJgCiDgLQhegJhDgBQAihMAdhOQBBgBC/AOQCuALB0gFIAACRQhdANhuAAIgpAAg");
	this.shape.setTransform(30.5,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,61,17.8), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E4E5E6","#AAACAE","#525254","#414042"],[0,0.149,0.467,0.925,1],-1.9,-0.5,3.9,0.5).s().p("AgqBZQAhhWAdhyQgQBSAmASQgZA+gLA9QgbgHgVgQg");
	this.shape.setTransform(4.3,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,8.5,22.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#231F20","rgba(35,31,32,0.796)","rgba(35,31,32,0)"],[0,0.09,1],19.6,0,-19.5,0).s().p("AjDBCQBSiBD3hzQAhgPAcgKIg6CTIgDABQhDAbg3ApQg9AugiA4QgZArgHAug");
	this.shape.setTransform(19.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,39.1,40.9), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(18,12,14,0)","rgba(18,12,14,0.949)"],[0.576,1],-18.8,0,18.8,0).s().p("Ah8AgQBBAABWg2QBXg2BWheIhHC6QhEBFhVAqQhaAshVAAg");
	this.shape.setTransform(20,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,40,34.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuUBvQgogrAAhEQAAhDApgrQArgsBEgBQA5AAAkAdQAjAcAIAyIhDAAQgNgxg4AAQgmgBgWAcQgXAbAAArQAAArAXAcQAXAbAmAAQA3AAANgyIBDAAQgIAzgjAcQglAcg5ABQhGAAgpgtgAN1CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgANPAjIgqh6IgBAAIgqB6IBVAAgAFpCWIAAksIBzAAQBNABArArQAoAoAABCQAABEgoAoQgrAqhNAAgAGtBeIApAAQAyAAAYgcQAXgYAAgqQAAgpgXgZQgYgcgyAAIgpAAgAD2CWIgUg9Ih5AAIgVA9IhGAAIBxksIBQAAIBvEsgADQAjIgqh6IgBAAIgqB6IBVAAgAhXCWIiQi5IgBAAIABC5IhEAAIAAksIA8AAICQC5IABAAIgBi5IBEAAIAAEsgAmdCWIgVg9Ih4AAIgVA9IhGAAIBvksIBQAAIBxEsgAnEAjIgph6IgCAAIgqB6IBVAAg");
	this.shape.setTransform(51.7,26.7,0.16,0.16);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(65.8,9.4,0.16,0.16,0,0,0,20.9,17.8);
	this.instance.alpha = 0.352;

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.8,6.4,0.16,0.16,0,0,0,4.7,11.8);
	this.instance_1.alpha = 0.352;

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(66.1,6.1,0.16,0.16,0,0,0,19.7,14.7);
	this.instance_2.alpha = 0.352;

	this.instance_3 = new lib.Path_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.4,4.8,0.16,0.16,0,0,0,12.5,11.2);
	this.instance_3.alpha = 0.352;

	this.instance_4 = new lib.Path();
	this.instance_4.parent = this;
	this.instance_4.setTransform(24.3,23.9,0.16,0.16,0,0,0,20.6,21.2);
	this.instance_4.alpha = 0.352;

	this.instance_5 = new lib.Path_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(35.2,21.5,0.16,0.16,0,0,0,31.4,9.7);
	this.instance_5.alpha = 0.352;

	this.instance_6 = new lib.Path_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.7,20.2,0.16,0.16,0,0,0,24,16.5);
	this.instance_6.alpha = 0.352;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxJOCQguguAIhPQAMh1BChSQBahuDXhkQAggPAdgKIAvh2QgrAwg0AaQgzAZg1AAQhBAAgmgoQhMBUhYAxQhWAuhKAAQhoAAgZhVQgXhOAviDIFTvAID8gYIlbPLQgSAwABAWQAAAdAdAAQAZAAAhgWQAfgWAugvQABg4AYg/IDapfIDqgcIjYJaQgRAuACAaQACAcAZAAQAuAAA0hIQBEhcBJjMIB+liIDwgdIlZOxQBGgCCSALQCbALBTAAQExABEZhtIAFADQi3DIkzAwQisAakdgZQhegIhDgCQjXHlj4AAQhNAAgrgrgArwHnQhgAnhBA+QhNBKgNBVQgBAZAMARQAMAPATAAQA0AAAvhFQAkg4Ayh/IAahCgA+0mTIiSAPIBwk5IOdhZIgeBUQgsB+hTA6QhUA5inAPIivASIhdEDIFXgiIhbEBIlZAiIjYJgIlEBOgARADgIAnhNIieAsIi/g8IBKgtIIRheIg4D1Ig4AsgAg7AqQhThVALidQAHhqAkh4QAmiGA+hsQCakQDiAAQCDAABRA6QBRA5AVBvQAjApAkgBQAUAAARgSQATgSASgrIDYgVIipIFQgKAgAEANQADANAQAAQA4AABQibQBYisA5kDIC2gSQgNBLgRBGQgIArAGAYQAGAYAUAJQAyh9BZhNQBmhaB/ABQBWAAAsAnQApAmgFBAQgIBuhwBNQhnBGiYAVIgDAdQgCAhANASQANASAcAAQBBABBXg3QBXg2BXhfIB8lGICFgMIgOBeQAdg3ArgeQAsgfA4AAQAoAAAhAOIg5CbQgYgDgZAAQhDAAguArQgtAogfBQIhgD/IjJAtIAghSQhEBGhVAqQhbAshVAAQhYgBgvgwQgwgyAGhcQABgVAFgeQgcgIgUgQQhHC8hjBqQh5CAieAAQhiAAgkg/Qgjg/AhhrIBbkdQgOADgJAAQgeAAgagMQgMBpgoBxQgtB9hCBjQijD0jdAAQiQAAhNhRgADTomQhaC8gLCqQgJCABTABQBiAABijQQBYi9ANipQAJiAhUAAQhhgBhiDQgAZmqpQguA2gfBLQBLgQAwglQAvgmADguQACgUgHgMQgHgLgOAAQgbAAgrAzg");
	this.shape_1.setTransform(38.4,15.1,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,76.7,30.2), null);


// stage content:
(lib._300x50_disc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// real logo
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(252.9,-19.5,1,1,0,0,0,38.4,15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:false},0).wait(1).to({y:-17.2},0).wait(1).to({y:-14.1},0).wait(1).to({y:-9.6},0).wait(1).to({y:-2.8},0).wait(1).to({y:4.8},0).wait(1).to({y:10.4},0).wait(1).to({y:14.2},0).wait(1).to({y:16.8},0).wait(1).to({y:18.8},0).wait(1).to({y:20.4},0).wait(1).to({y:21.7},0).wait(1).to({y:22.7},0).wait(1).to({y:23.5},0).wait(1).to({y:24.2},0).wait(1).to({y:24.8},0).wait(1).to({y:25.2},0).wait(1).to({y:25.6},0).wait(1).to({y:25.9},0).wait(1).to({y:26.1},0).wait(1).to({y:26.3},0).wait(1).to({y:26.4},0).wait(2).to({y:26.5},0).wait(28));

	// Layer 4
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.5,24.3,1,1,0,0,0,26.8,22);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(211).to({_off:false},0).to({alpha:1},16).wait(2));

	// logo
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.2,76.8,1,1,0,0,0,73.5,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:91.5,regY:110,x:97.2,y:167.2},0).wait(1).to({y:166.9},0).wait(1).to({y:166.1},0).wait(1).to({y:164.9},0).wait(1).to({y:163},0).wait(1).to({y:159.9},0).wait(1).to({y:154.4},0).wait(1).to({y:144.2},0).wait(1).to({y:132.9},0).wait(1).to({y:126.7},0).wait(1).to({y:123.1},0).wait(1).to({y:120.8},0).wait(1).to({y:119.3},0).wait(1).to({y:118.4},0).wait(1).to({y:117.8},0).wait(1).to({y:117.4},0).wait(1).to({regX:73.5,regY:19.4,x:79.2,y:26.8},0).wait(68).to({regX:91.5,regY:110,x:97.2,y:117.2},0).wait(1).to({y:116.6},0).wait(1).to({y:115.4},0).wait(1).to({y:113.6},0).wait(1).to({y:110.6},0).wait(1).to({y:106.1},0).wait(1).to({y:98.7},0).wait(1).to({y:85.2},0).wait(1).to({y:64.4},0).wait(1).to({y:49.7},0).wait(1).to({y:41.4},0).wait(1).to({y:36.2},0).wait(1).to({y:32.8},0).wait(1).to({y:30.5},0).wait(1).to({y:29},0).wait(1).to({y:28.1},0).wait(1).to({y:27.6},0).wait(1).to({regX:73.5,regY:19.4,x:79.2,y:-63.2},0).wait(68).to({regX:91.5,regY:110,x:97.2,y:27.2},0).wait(1).to({y:26.6},0).wait(1).to({y:25.5},0).wait(1).to({y:23.6},0).wait(1).to({y:20.7},0).wait(1).to({y:16.1},0).wait(1).to({y:8.7},0).wait(1).to({y:-4.8},0).wait(1).to({y:-25.6},0).wait(1).to({y:-40.3},0).wait(1).to({y:-48.6},0).wait(1).to({y:-53.8},0).wait(1).to({y:-57.2},0).wait(1).to({y:-59.5},0).wait(1).to({y:-61},0).wait(1).to({y:-61.9},0).wait(1).to({y:-62.4},0).wait(1).to({regX:73.5,regY:19.4,x:79.2,y:-153.2},0).wait(42));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BB192C").s().p("A5sEnIAApNMAzZAAAIAAJNg");
	this.shape.setTransform(161.5,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.1,21.1,329,285.3);
// library properties:
lib.properties = {
	width: 300,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;