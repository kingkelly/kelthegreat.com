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



(lib.Blackgirl_Bigbox11 = function() {
	this.initialize(img.Blackgirl_Bigbox11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,250);// helper functions:

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


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape.setTransform(164,0,0.507,0.507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAPCnIgKAAQhAgGgmgnQgmgpgEhGIAAgVQAEhGAngpQAmgoA/gEIAKgBIAHAAQAYAAAXAFQAhAHATARQAbAXgNAcQgJAUgOAFQgQgYgfgHQgPgEgaAAQgkAAgTAZQgUAZAAAuQAAAvAUAZQATAZAkAAQAaAAAPgEQAfgIAQgXQANAEAKAVQANAcgbAXQghAdhCAAg");
	this.shape_1.setTransform(174.1,-6.7,0.507,0.507);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AhvCQQgigZAAg0QAAhwC+AAIAAgPQAAgqg3AAQggAAgiAPIgcAPQgFgDgFgGQgLgNAAgTQAAgWAmgPQAmgOA0AAQCAAAgBBnIAACmQABAVAHAPQAEAHAEAEQgDADgGACQgNAGgUAAQgYAAgKgIQgKgIgIgWQgJAKgQAKQgfAUggAAQguAAgdgVgAghAQQgdAOABAcQAAAZAPAMQAMAJATAAQAVAAAUgLQAXgMgBgQIAAhBQg0ABgdAPg");
	this.shape_2.setTransform(190.6,-6.6,0.507,0.507);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCDZQgLgIgOgYIhOiEIglAAIAACqIhdAAIAAnAIAjgCQAqgDAmAAQBTAAAsAVQBBAfAABRQAAA0gdAkQgWAagkAQIBzC7QgDADgJACQgRAGgbAAQgdAAgRgOgAhKikIAACeIAKAAQA7ABAagXQAYgVAAgqQAAglgYgUQgXgSgrAAQgSAAgLACg");
	this.shape_3.setTransform(92.1,-10,0.507,0.507);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBeAAIAABFIheAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_4.setTransform(124.1,-9.2,0.507,0.507);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbCcQghgOAAgZQAAgVALgPQAGgHAFgEIAaARQAgAQAdAAQAbAAAMgIQALgJAAgSQAAgVgZgLIg2gPQhQgWAAhEQAAgzAqgaQAjgVA2AAQAyAAAeALQAhAMAAAXQAAASgLAQIgLAMQgKgIgQgIQghgQggAAQgSABgLAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1gfAeQgjAhhGAAQgwABgggNg");
	this.shape_5.setTransform(153.8,-6.7,0.507,0.507);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhkB9QgtgtAAhTQAAhFAlgtQApgyBOAAQBGgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAlAAAZgSQANgJAGgJIANAIQAOAOAAAZQAAAZggAQQghAQgxAAQhTAAgsgrgAA/gjQAAhJg5AAQgcAAgQAUQgQATgCAiIB3AAIAAAAg");
	this.shape_6.setTransform(137.9,-6.7,0.507,0.507);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhxCTQgjgaAAg1QAAg5AygcQAxgdBfAAIAAgQQAAgqg4AAQggAAgkAPIgcAPQgFgCgGgHQgKgNAAgTQAAgXAngPQAmgOA2AAQCBAAAABpIAACpQAAAVAIAPQAEAIAEAEQgKALghAAQgYAAgLgIQgKgIgIgWQgJAKgQALQgfATgiAAQgvABgdgWgAghAPQgeAQAAAcQAAAaAQAMQAMAJATAAQAWAAAVgLQAWgMAAgRIAAhCQg1ABgdAOg");
	this.shape_7.setTransform(109,-6.7,0.507,0.507);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBdAAIAABFIhdAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_8.setTransform(75.7,-9.2,0.507,0.507);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaCcQgigOAAgZQAAgVALgPQAGgHAFgEIAbARQAgAQAcAAQAbAAAMgIQAMgJAAgSQAAgVgZgLIg3gPQhQgWAAhEQAAgzAqgaQAjgVA3AAQAxAAAfALQAgAMAAAXQAAASgLAQIgLAMQgKgIgQgIQgggQggAAQgSABgMAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1geAeQgjAhhGAAQgxABgfgNg");
	this.shape_9.setTransform(61.6,-6.7,0.507,0.507);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhkB9QgtgsAAhUQAAhFAkgtQAqgyBNAAQBHgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAkAAAagSQANgJAFgJIAOAIQANAOAAAZQAAAZggAQQggAQgxAAQhTAAgsgrgAA/gjQAAgjgMgSQgOgUgfAAQgcAAgRAUQgPATgCAiIB3AAIAAAAg");
	this.shape_10.setTransform(45.7,-6.7,0.507,0.507);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA7ChIg1iOIg7COIhEAAIh0k1IAMgGQAQgGAVAAQAVAAAMAJQAPALAJAaIA7CuIAthqIghhmIAJgGQANgGATAAQAVAAANAMQAOANAJAdIA2ChIAxixQALgmAuAAQAcAAAMAMIhrE1g");
	this.shape_11.setTransform(25,-6.9,0.507,0.507);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzB7QgrgtAAhOQAAhNAsgtQAsguBIABQBKgBApAtQAqAsAABPQAABPgtAuQgsArhGAAQhIAAgrgtgAgvhKQgSAbAAAvQAAAyASAZQARAYAeAAQAeAAARgXQATgaAAgyQAAgxgRgZQgRgZgfAAQgeAAgSAZg");
	this.shape_12.setTransform(4.3,-6.7,0.507,0.507);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiKDjIAAm/QAKgGAbAAQAYAAAPAMQARANAAAYIAAFKICLAAQAVAAAMAMQAMAMAAAWIAAAcg");
	this.shape_13.setTransform(-12,-10.3,0.507,0.507);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37BCB5").s().p("AgJAoIgFAAIgFgBIgEgBIgDgBIgBgWIALAAIABANIAFABIAGAAQAJAAAEgDIADgDIABgFQAAgEgDgDIgHgEIgJgDIgKgEQgFgCgDgEQgDgEAAgGQAAgGACgEQACgEAEgDQAHgGAMAAIAKABIALACIADABIAAAUIgKAAIgCgLIgFgCIgHAAIgEAAIgEACIgDADIgBAEQAAAFADACIAIAEIAJADIAJAFQAFABADAEQADAEAAAGQAAAHgDAEQgCAFgFADQgEADgGACQgGABgGAAg");
	this.shape_14.setTransform(143.7,42.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37BCB5").s().p("AAIAnIAAgHIAJgEIAAgmQAAgIgCgFQgDgDgGAAIgGABIgGACIgEADIgDADIgDACIAAArIAKAEIAAAHIglAAIAAgHIANgEIAAg2IgNgCIAAgIIAYgBIACAKIAEgDIAGgEIAHgDIAJgBQAGAAAEACQAFABACADQAHAIAAAMIAAAoIAKAEIAAAHg");
	this.shape_15.setTransform(135.6,42.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#37BCB5").s().p("AgPAmQgGgDgFgFQgJgKAAgTQAAgFADgLQADgHAEgGQAFgFAHgDQAHgDAHAAQARAAAJAKQAEAFACAIQADAHAAAJQAAAIgDAIQgDAHgEAGQgFAFgHADQgHADgHAAQgIAAgHgCgAgUAAQAAAOAGAHQAFAIAJAAQAFAAAEgCQAEgCACgEQAFgHAAgOQAAgOgFgHQgFgGgJAAQgVAAAAAbg");
	this.shape_16.setTransform(126.5,42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37BCB5").s().p("AgSA4IAAgIIAMgDIAAg2IgMgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgDgDABgEQgBgFADgDQADgDADAAQAKAAAAALQgBAFgDACQgDACgDABQgEgBgCgCg");
	this.shape_17.setTransform(120,41.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37BCB5").s().p("AAAAwQgDgBgDgCIgDgHIgBgJIAAguIgPAAIAAgJIAPgBIAAgTIANgDIAAAWIAWAAIAAAKIgWAAIAAAuQAAAFACACQACACADAAQAFAAAHgDIAEAHQgFAEgFACQgFACgFAAQgFAAgBgCg");
	this.shape_18.setTransform(114.7,41.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37BCB5").s().p("AgmA4IAAgIIAMgDIAAhXIgNgDIAAgIIAZgBIABAIQAKgJAMAAQAPAAAIAKQAIAKAAATQAAAJgCAHQgDAHgFAGQgFAFgHADQgIADgJAAQgGAAgHgCIAAAXIAPADIAAAIgAgEgpQgFADgDAFIAAArIAHACIAIABQALAAAFgIQAGgGgBgPIgBgLIgDgJQgDgEgDgCQgEgBgFAAQgFAAgEACg");
	this.shape_19.setTransform(107.2,44.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37BCB5").s().p("AgiAnQgGgGgDgKQgCgJAAgNIAAgKIADgLQADgKAGgHQAHgHAIgEQAJgEAKAAQAKAAAJAEIAIAEIAGAGQAGAHADAKIADAKIAAALQAAALgDAKQgEAJgGAIIgHAGIgIAFQgJAEgKAAQgWAAgLgOgAgdAAQAAAUAHAKQAIAKAOAAQANAAAIgKQAFgFACgIQACgHAAgKQAAgngeAAQgdAAAAAng");
	this.shape_20.setTransform(97.4,41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37BCB5").s().p("AgUA4IAAgIIAMgDIAAhZIgMgDIAAgIIAbAAIAABkIAOADIAAAIg");
	this.shape_21.setTransform(86.5,41.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37BCB5").s().p("AgdAjQgGgGAAgLQAAgLAJgGQAIgEARAAIALAAIAAgMQAAgNgNAAQgIAAgFABIgCABIgCALIgKAAIAAgSIAPgFIAOgBQAFAAAFABQAFABADADQAHAFAAANIAAArIAMADIAAAIIgXABIgDgKQgGAFgEADQgGADgGAAQgLAAgGgFgAgPAIQgFADAAAGQAAAGADADQADADAFAAIAFgBIAEgDIAEgCIADgDIADgDIAAgMIgKAAQgLAAgEADg");
	this.shape_22.setTransform(80,42.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37BCB5").s().p("AgSA4IAAgIIANgDIAAg2IgNgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgCgDAAgEQAAgFACgDQADgDADAAQAKAAAAALQAAAFgEACQgDACgDABQgDgBgDgCg");
	this.shape_23.setTransform(73.5,41.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#37BCB5").s().p("AgLAmQgHgDgFgFQgJgLAAgSQAAgIADgIQADgHAEgGQAFgFAHgDQAFgCAKgBIAGAAIAGABIAFACIAFABIADACIgBATIgJAAIgDgMIgNgBQgEAAgEABQgEACgDADQgGAHAAAOQAAAGACAGQABAFADAEQAGAIAKAAIAGgBIAGgCIAFgCIADgCIADgCIAFAJIgCABIgFADIgGADIgIADIgIABQgIAAgHgCg");
	this.shape_24.setTransform(67.4,42.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#37BCB5").s().p("AAIAnIAAgHIAJgEIAAgmQAAgIgDgFQgDgDgGAAIgFABIgFACIgFADIgDADIgCACIAAArIAJAEIAAAHIgkAAIAAgHIAMgEIAAg2IgMgCIAAgIIAXgBIACAKIAEgDIAGgEIAHgDIAJgBQAGAAAFACQADABADADQAHAIgBAMIAAAoIALAEIAAAHg");
	this.shape_25.setTransform(58.9,42.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#37BCB5").s().p("AgdAjQgGgGAAgLQAAgLAJgGQAIgEARAAIALAAIAAgMQAAgNgNAAQgIAAgFABIgCABIgCALIgKAAIAAgSIAPgFIAOgBQAFAAAFABQAFABADADQAHAFAAANIAAArIAMADIAAAIIgXABIgDgKQgGAFgEADQgGADgGAAQgLAAgGgFgAgPAIQgFADAAAGQAAAGADADQADADAFAAIAFgBIAEgDIAEgCIADgDIADgDIAAgMIgKAAQgLAAgEADg");
	this.shape_26.setTransform(50,42.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#37BCB5").s().p("AAIAnIAAgHIAKgEIAAgmQgBgIgDgFQgCgDgHAAIgFABIgFACIgFADIgDADIgCACIAAArIAJAEIAAAHIgkAAIAAgHIAMgEIAAg2IgMgCIAAgIIAXgBIACAKIAEgDIAGgEIAHgDIAJgBQAGAAAFACQADABAEADQAFAIAAAMIAAAoIALAEIAAAHg");
	this.shape_27.setTransform(41.1,42.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#37BCB5").s().p("AgSA4IAAgIIAMgDIAAg2IgMgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgDgDABgEQgBgFADgDQADgDADAAQAJAAAAALQAAAFgDACQgDACgDABQgDgBgDgCg");
	this.shape_28.setTransform(33.7,41.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#37BCB5").s().p("AgjAzIAAgJIAMgCIAAhOIgMgDIAAgIIAcgBIArAAIAAAYIgJAAIgEgMIgeAAIAAAhIAgAAIAAAKIggAAIAAAjIANACIAAAJg");
	this.shape_29.setTransform(27.1,41.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#37BCB5").s().p("AgdAoIAAgIIAMgEIAAg2IgMgCIAAgIIAYgBIABAKQAKgMALABQAGAAAGABIABABIAAAVIgKAAIgCgLQgNAAgHAMIAAAqIANAEIAAAIg");
	this.shape_30.setTransform(127.2,23.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#37BCB5").s().p("AgSAlQgEgBgDgDQgGgIAAgMIAAgoIgMgCIAAgIIAbgBIAAAyQAAAHADAFQADADAGAAQAFAAAGgDIAHgGIADgCIAAgrIgMgCIAAgIIAbgBIAABBIAMACIAAAIIgYABIgBgKQgHAFgHADQgHADgFAAQgGAAgFgCg");
	this.shape_31.setTransform(118.9,23.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#37BCB5").s().p("AgPAmQgGgDgFgFQgJgKAAgTQAAgFADgLQADgHAEgGQAFgFAHgDQAHgDAHAAQARAAAJAKQAEAFACAIQADAHAAAJQAAAIgDAIQgDAHgEAGQgFAFgHADQgHADgHAAQgIAAgHgCgAgUAAQAAAOAGAHQAFAIAJAAQAFAAAEgCQAEgCACgEQAFgHAAgOQAAgOgFgHQgFgGgJAAQgVAAAAAbg");
	this.shape_32.setTransform(110,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#37BCB5").s().p("AgTAzIAAgJIAMgCIAAgbIgcgzIgKgDIAAgIIAlgBIAAAJIgKADIASAoIAWgoIgMgDIAAgIIAkgBIAAAJIgJACIgdA0IAAAbIAMACIAAAJg");
	this.shape_33.setTransform(101.3,22);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#37BCB5").s().p("AgXAeQgJgLAAgSQAAgIACgHQADgIAFgGQAEgFAHgDQAHgDAGAAQAQAAAHAIQAIAJAAARIgBAHIgxAAQAAAGABAFQACAFADADQAGAIAIAAIAHgBIAGgCIAFgCIAEgCIADgCIAFAIIgJAGIgKAEQgGACgGAAQgRAAgIgKgAASgIQAAgJgEgFQgEgGgIAAQgEAAgDACIgGAEQgFAGAAAIIAiAAIAAAAg");
	this.shape_34.setTransform(89.5,23.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#37BCB5").s().p("AgdAoIAAgIIAMgEIAAg2IgMgCIAAgIIAYgBIABAKQAKgMALABQAGAAAGABIABABIAAAVIgKAAIgCgLQgNAAgHAMIAAAqIANAEIAAAIg");
	this.shape_35.setTransform(82.4,23.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#37BCB5").s().p("AgPAmQgGgDgFgFQgJgKAAgTQAAgFADgLQADgHAEgGQAFgFAHgDQAHgDAHAAQARAAAJAKQAEAFACAIQADAHAAAJQAAAIgDAIQgDAHgEAGQgFAFgHADQgHADgHAAQgIAAgHgCgAgUAAQAAAOAGAHQAFAIAJAAQAFAAAEgCQAEgCACgEQAFgHAAgOQAAgOgFgHQgFgGgJAAQgVAAAAAbg");
	this.shape_36.setTransform(74.7,23.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#37BCB5").s().p("AgUA4IAAgIIANgDIAAhZIgNgDIAAgIIAaAAIAABkIAPADIAAAIg");
	this.shape_37.setTransform(68.4,21.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#37BCB5").s().p("AgmA4IAAgIIAMgDIAAhXIgNgDIAAgIIAZgBIABAIQAKgJAMAAQAPAAAIAKQAIAKAAATQAAAJgCAHQgDAHgFAGQgFAFgHADQgHADgKAAQgGAAgHgCIAAAXIAOADIAAAIgAgEgpQgFADgDAFIAAArIAGACIAIABQAMAAAFgIQAGgGgBgPIgBgLIgDgJQgDgEgDgCQgDgBgGAAQgFAAgEACg");
	this.shape_38.setTransform(61.4,24.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#37BCB5").s().p("AAFAnIAAgIIAGgCIgLgTIgSAdIgWAAIAAgIIANgEIATgbIgTgbIgLgCIAAgIIAhgBIAAAJIgFABIAKATIASgcIAVgBIAAAJIgMACIgTAbIATAbIAOAEIAAAIg");
	this.shape_39.setTransform(53,23.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#37BCB5").s().p("AgkAzIAAgJIAMgCIAAhOIgMgDIAAgIIAcgBIArAAIAAAZIgJAAIgEgNIgeAAIAAAfIAgAAIAAALIggAAIAAAkIAgAAIADgPIAKAAIAAAag");
	this.shape_40.setTransform(44.3,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-19.1,-21.7,217.1,76.5), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEAEC").s().p("AghA5QgLgNAAgYQAAgYALgNQAKgOASAAQATAAAKAPIABAAIgBgRIAAgkIAVAAIAACJIgQAAIgEgMIgBAAQgKAPgTAAQgSAAgKgOgAgQgFQgHAIABARQgBAQAHAJQAFAIALABQANAAAGgIQAGgHAAgRIAAgCQAAgTgGgHQgGgIgNAAQgLAAgFAJg");
	this.shape.setTransform(129.3,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEAEC").s().p("AgeAmQgNgOAAgXQAAgYAMgNQAMgOAVAAQATAAALAMQAMALAAAVIAAALIhBAAQAAAOAIAIQAHAHAMAAQAJAAAIgBQAHgCAJgEIAAARQgIAEgIACQgIABgKAAQgWAAgNgNgAAXgKQAAgMgGgGQgFgGgKAAQgJAAgGAGQgHAGgBAMIAsAAIAAAAg");
	this.shape_1.setTransform(118.8,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBEAEC").s().p("AgRAeIAAg1IgOAAIAAgJIAPgIIAHgUIAMAAIAAAVIAcAAIAAAQIgcAAIAAA0QAAAIAEADQADAEAHAAQAHAAAIgCIAAAPIgJADIgLABQgdAAAAgfg");
	this.shape_2.setTransform(109.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBEAEC").s().p("AgdAyIAAhiIAQAAIADASIABAAQAFgJAHgFQAIgFAJAAIAKABIgCATIgJgBQgNAAgGAIQgIAJAAANIAAAyg");
	this.shape_3.setTransform(103.2,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBEAEC").s().p("AggArQgJgIAAgOQAAgPALgHQAMgIAWgBIARAAIAAgFQAAgKgFgEQgEgFgJAAQgGAAgIACIgNAFIgHgPQAIgEAJgCQALgCAHAAQASAAAKAIQAKAIAAASIAABBIgPAAIgFgOIAAAAQgHAKgIADQgGADgLAAQgPAAgHgIgAAIADQgNAAgIAFQgGAEAAAJQAAAHAEADQAEAEAHAAQALAAAHgGQAHgHAAgLIAAgJg");
	this.shape_4.setTransform(93.3,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEAEC").s().p("AgRAeIAAg1IgOAAIAAgJIAPgIIAHgUIAMAAIAAAVIAcAAIAAAQIgcAAIAAA0QAAAIAEADQADAEAHAAQAHAAAIgCIAAAPIgJADIgLABQgdAAAAgfg");
	this.shape_5.setTransform(84.7,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EBEAEC").s().p("AgjAtIAAgSQARAIAPAAQASAAAAgMQAAgDgCgDIgHgFIgMgGQgRgGgGgGQgGgHAAgLQAAgMAKgHQAKgHARAAQARAAAPAHIgGAQQgQgHgLAAQgQAAAAAJQAAAFAFADQAEADANAGQANAFAFADQAGAEACAFQADAFAAAHQAAAPgKAHQgLAIgTAAQgTAAgMgGg");
	this.shape_6.setTransform(77,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EBEAEC").s().p("AgRAeIAAg1IgOAAIAAgJIAPgIIAHgUIAMAAIAAAVIAcAAIAAAQIgcAAIAAA0QAAAIAEADQADAEAHAAQAHAAAIgCIAAAPIgJADIgLABQgdAAAAgfg");
	this.shape_7.setTransform(64.3,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBEAEC").s().p("AgeAmQgNgOAAgXQAAgYAMgNQAMgOAVAAQATAAALAMQAMALAAAVIAAALIhBAAQAAAOAIAIQAHAHAMAAQAJAAAIgBQAHgCAJgEIAAARQgIAEgIACQgIABgKAAQgWAAgNgNgAAXgKQAAgMgGgGQgFgGgKAAQgJAAgGAGQgHAGgBAMIAsAAIAAAAg");
	this.shape_8.setTransform(55.7,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBEAEC").s().p("AglAyQgQgSAAggQAAgfASgRQASgSAfAAQAVAAASAIIgIARQgQgHgPAAQgUAAgMANQgNANAAAWQAAAYALANQALAMAUAAQAKAAAMgDIAAghIgbAAIAAgSIAwAAIAABBQgMAEgLABQgLACgMAAQgdAAgQgRg");
	this.shape_9.setTransform(43.9,19.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA1F58").s().p("AtNDLIAAjQQAAh8BjgwQAxgaAxAAIXWAAIAADQQAAB8hjAxQgfARglAGIgfACg");
	this.shape_10.setTransform(84.6,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,169.3,40.7), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D4156").s().p("AqPIeIAAuhQAAhhBMgmQAngTAmAAISGAAIAAOiQAABfhMAnQgZAMgcAEIgYADg");
	this.shape.setTransform(137.5,113.6,2.096,2.096);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,275.1,227.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAQQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(114.9,74.2,0.247,0.247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAHDvQhbgHg2g6Qg4g7gFhjIgBgOIABgCIgBgBIABgOQAFhkA4g7QA3g5BbgHIAOgBIAIABIACgBQAiAAAhAIQAwAKAbAYQAnAigSAnQgOAdgUAIQgXgigsgLQgWgGgkAAQg1AAgcAkQgcAkAABCQAABDAcAkQAcAkA1AAQAkAAAWgFQAsgMAXgiQAUAIAOAdQASAngnAiQgbAYgwAKQghAIgiAAg");
	this.shape_1.setTransform(122.6,69.5,0.247,0.247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AifDPQgxglAAhKQAAhRBGgoQBFgoCGAAIAAgWQAAgdgSgOQgUgRgqAAQgtAAgxAWIgpAWQgHgEgIgKQgPgRAAgcQAAggA4gWQA1gUBMAAQC2AAAACUIAADvQAAAdALAWQAGAKAFAFQgDAEgKAEQgSAJgdgBQgiABgPgMQgPgMgKgfQgNAPgXAOQgtAdgvAAQhBAAgpgegAgvAWQgqAWAAAnQAAAlAWAQQARAOAbAAQAfAAAdgRQAggRAAgYIAAhcQhMABgoAVg");
	this.shape_2.setTransform(134.1,69.6,0.247,0.247);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A4052").s().p("ABeE2QgQgMgUgkIhvi6Ig0AAIAADwIiFAAIAAp8IAygEQA7gEA2AAQB3AAA/AeQBcAtAABzQAABKgpAzQgeAlg1AXICkEJQgFAFgMAEQgYAIgnAAQgpAAgYgTgAhpjrIAADiIANABQBVgBAlggQAigdAAg9QAAg0gigcQghgag9AAQgXAAgSACg");
	this.shape_3.setTransform(64.7,67.3,0.247,0.247);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4052").s().p("AiQChIAAnMIAMgEQARgEAXAAQAjAAAVARQAWASAAAiIAABMICFAAIAABhIiFAAIAADVQAAAcAOAPQAOAQAbAAQAXAAAZgQQANgIAJgIIARALQARASAAAcQAAAfgoAXQgoAWg3AAQiaAAAAiTg");
	this.shape_4.setTransform(86.9,67.9,0.247,0.247);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A4052").s().p("AiBDdQgxgUABgjQAAgeAPgUQAJgLAHgEIAmAXQAtAWApAAQAnAAARgMQAQgMAAgaQABgdglgPIhNgXQg1gPgZgWQgkggAAg6QAAhKA7gkQAzgfBOAAQBGAAArAQQAvASAAAfQAAAcgPAWIgQARQgOgLgYgLQgugXgtABQgaAAgQAJQgTALABASQgBAZAlANQAUAJA5AOQByAhAABdQABBMgtAqQgxAwhkAAQhGAAgsgTg");
	this.shape_5.setTransform(107.4,69.5,0.247,0.247);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A4052").s().p("AiPCyQhAg/AAh3QAAhiA0hAQA8hJBuAAQBkAAAyA+QArA1AABYQAAAZgFAgIkXAAQABA4AeAgQAhAiA7AAQA0AAAlgaQASgNAIgNIATAMQATAUAAAjQAAAjguAYQguAXhGAAQh2AAg/g+gABagzQAAgygSgYQgTgdgsAAQgpAAgYAdQgVAagDAwICqAAIAAAAg");
	this.shape_6.setTransform(96.5,69.5,0.247,0.247);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A4052").s().p("AihDRQgyglAAhLQAAhRBHgpQBGgpCHAAIAAgWQAAgdgSgQQgTgQgrAAQguAAgyAWIgpAWQgHgEgIgJQgPgSAAgdQAAggA4gWQA3gUBMAAQC4AAAACWIAADyQAAAdAMAWQAFALAGAFQgEAEgJAEQgTAJgdgBQgiABgQgMQgPgMgLgfQgNAPgXAOQgsAdgwAAQhCAAgqgfgAgwAWQgqAWAAAoQAAAlAXARQARAOAbAAQAfAAAegRQAggSAAgYIAAhdQhNABgpAVg");
	this.shape_7.setTransform(76.4,69.5,0.247,0.247);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A4052").s().p("AiQChIAAnMIAMgEQARgEAXAAQAjAAAVARQAWASAAAiIAABMICFAAIAABhIiFAAIAADVQAAAcAOAPQAOAQAbAAQAXAAAagQQANgIAIgIIARALQARASAAAcQAAAfgoAXQgoAWg2AAQibAAAAiTg");
	this.shape_8.setTransform(53.4,67.9,0.247,0.247);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A4052").s().p("AiBDdQgwgUAAgjQAAgeAQgUQAIgLAIgEIAlAXQAtAWApAAQAnAAARgMQAQgMAAgaQAAgdgjgPIhOgXQg1gPgagWQgjggAAg6QAAhKA8gkQAygfBNAAQBHAAArAQQAvASAAAfQAAAcgQAWIgPARQgOgLgYgLQgugXguABQgaAAgQAJQgRALAAASQAAAZAjANQAVAJA5AOQByAhAABdQAABMgsAqQgxAwhkAAQhGAAgsgTg");
	this.shape_9.setTransform(43.6,69.5,0.247,0.247);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A4052").s().p("AiPCyQhAg/AAh3QAAhiA0hAQA8hJBuAAQBkAAAyA+QArA1AABYQAAAdgFAcIkXAAQABA4AeAgQAhAiA7AAQA0AAAlgaQASgNAIgNIATAMQATAUAAAjQAAAjguAYQguAXhGAAQh2AAg/g+gABagzQAAgygSgYQgTgdgsAAQgpAAgXAdQgWAagDAwICqAAIAAAAg");
	this.shape_10.setTransform(32.6,69.5,0.247,0.247);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A4052").s().p("ABVDlIhNjKIhUDKIhhAAIilm4IARgIQAWgJAgAAQAdAAASANQAUAPANAmIBUD4IA/iXIgtiSIAMgIQATgJAaAAQAeAAAUARQAUASANApQASA9A6CpIBHj7QAPg3BBAAQAYAAAUAIQAJAEAEAEIiZG5g");
	this.shape_11.setTransform(18.3,69.4,0.247,0.247);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A4052").s().p("AikCvQg+hAAAhvQAAhtBAhCQA+hABmAAQBqAAA7A+QA8BAAABxQAABwhCBCQg+A+hjAAQhnAAg9hBgAhDhpQgaAlAABEQAABHAZAkQAZAjArAAQAqAAAZgiQAbglAAhHQAAhGgZgkQgYgigsgBQgrAAgZAkg");
	this.shape_12.setTransform(3.9,69.5,0.247,0.247);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A4052").s().p("AjFFDIAAp9QAOgIAmAAQAkAAAVARQAXASAAAjIAAHWIDHAAQAeAAARARQARARAAAgIAAAng");
	this.shape_13.setTransform(-7.4,67.1,0.247,0.247);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4157").s().p("AgPA9QgJgJAAgUIAAg1IgPAAIAAgOIARgLIAJgXIATAAIAAAYIAgAAIAAAYIggAAIAAA1QAAAIAEACQAEADAGABQAIAAAMgEIAAAYQgMAEgRAAQgSAAgIgJg");
	this.shape_14.setTransform(183.9,43.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4157").s().p("AgoAyQgKgJAAgSQAAgSAMgIQANgIAZgCIAUAAIAAgFQAAgRgSAAQgNgBgSAJIgLgVQAUgLAYAAQAXAAAMAKQAMALAAAUIAABLIgWAAIgGgPIAAAAQgJAKgIAEQgHAEgNgBQgRAAgJgJgAAIAFQgNAAgHAFQgGAEAAAJQAAANAPABQAKAAAGgHQAHgGAAgKIAAgKg");
	this.shape_15.setTransform(172.8,44.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4157").s().p("AgaA6IgQgFIAAgaQAIAEALADQALACAIABQAQAAABgKQgBgEgBgCIgIgGIgPgGQgMgFgHgEQgGgFgDgGQgCgHAAgIQgBgQAMgIQAMgJAVAAQAUAAAUAJIgKAYIgQgHQgHgCgHAAQgNAAgBAIQABADAEADIATAKQANAFAGAFQAGAEADAGQADAGAAAIQAAASgMAJQgMAJgYAAQgMAAgJgBg");
	this.shape_16.setTransform(156.3,44.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4157").s().p("AAWA6IAAhBQAAgNgFgGQgEgGgKAAQgMgBgGAKQgGAJAAASIAAA2IgfAAIAAhxIAYAAIAEAOIACAAQAFgIAJgEQAJgEALgBQAUABALAKQAKALAAAVIAABJg");
	this.shape_17.setTransform(144.1,44.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4157").s().p("AgcA1QgNgIgHgOQgGgNgBgSQAAgbAPgPQAPgQAZgBQARABAMAHQANAHAHANQAHAOgBARQAAAcgOAQQgPAPgaAAQgQAAgMgGgAgRgYQgGAIABAQQgBARAGAJQAFAIAMABQAMAAAGgJQAFgJABgRQgBgQgFgIQgGgJgMAAQgMAAgFAJg");
	this.shape_18.setTransform(130.7,44.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4157").s().p("AgOBQIAAhyIAdAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgEAEgJAAQgQAAAAgQg");
	this.shape_19.setTransform(121,42.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4157").s().p("AgPA9QgJgJAAgUIAAg1IgPAAIAAgOIARgLIAJgXIATAAIAAAYIAgAAIAAAYIggAAIAAA1QAAAIAEACQAEADAGABQAIAAAMgEIAAAYQgMAEgRAAQgSAAgIgJg");
	this.shape_20.setTransform(113.1,43.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4157").s().p("Ag1BUIAAikIAaAAIAEAOIACAAQAKgRAVAAQAVAAALAQQALAQAAAcQABASgGANQgFANgKAHQgKAHgOAAQgTAAgLgOIgCAAIACAQIAAAvgAgQgyQgFAHAAAQIAAAEQgBASAGAHQAFAIALAAQAWAAAAgiQgBgRgFgIQgFgJgLAAQgLAAgFAIg");
	this.shape_21.setTransform(102.4,46.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4157").s().p("AgdA1QgMgIgHgOQgGgNgBgSQAAgbAPgPQAPgQAZgBQARABANAHQAMAHAHANQAHAOgBARQAAAcgOAQQgPAPgaAAQgQAAgNgGgAgRgYQgGAIABAQQgBARAGAJQAFAIAMABQAMAAAGgJQAFgJABgRQgBgQgFgIQgGgJgMAAQgMAAgFAJg");
	this.shape_22.setTransform(88.9,44.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C4157").s().p("AgPBQIAAifIAfAAIAACfg");
	this.shape_23.setTransform(73.8,42.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4157").s().p("AgoAyQgKgJAAgSQAAgSAMgIQANgIAZgCIAUAAIAAgFQAAgRgSAAQgNgBgSAJIgLgVQAUgLAYAAQAXAAAMAKQAMALAAAUIAABLIgWAAIgGgPIAAAAQgJAKgIAEQgHAEgNgBQgRAAgJgJgAAIAFQgNAAgHAFQgGAEAAAJQAAANAPABQAKAAAHgHQAGgGAAgKIAAgKg");
	this.shape_24.setTransform(63.9,44.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C4157").s().p("AgOBQIAAhyIAdAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgFAEgIAAQgQAAAAgQg");
	this.shape_25.setTransform(54.7,42.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C4157").s().p("AgtABQAAgdAOgPQAPgQAaAAQAUAAAQAIIgJAZIgOgFQgGgCgHAAQgXAAAAAiQAAAhAXAAQAJAAAIgCQAHgCAJgGIAAAbQgJAFgHABQgHACgMAAQg1ABAAg7g");
	this.shape_26.setTransform(46.3,44.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C4157").s().p("AAWA6IAAhBQAAgNgFgGQgEgGgKAAQgMgBgGAKQgGAJAAASIAAA2IgfAAIAAhxIAYAAIAEAOIACAAQAFgIAJgEQAJgEALgBQAUABALAKQAKALAAAVIAABJg");
	this.shape_27.setTransform(33.9,44.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C4157").s().p("AgpAyQgJgJAAgSQAAgSANgIQANgIAYgCIAUAAIAAgFQAAgRgSAAQgMgBgTAJIgKgVQAUgLAWAAQAXAAAMAKQANALAAAUIAABLIgWAAIgGgPIAAAAQgIAKgJAEQgHAEgOgBQgQAAgKgJgAAIAFQgNAAgGAFQgHAEAAAJQAAANAPABQAKAAAHgHQAGgGAAgKIAAgKg");
	this.shape_28.setTransform(20.3,44.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C4157").s().p("AAWA6IAAhBQAAgNgFgGQgEgGgKAAQgMgBgGAKQgGAJAAASIAAA2IgfAAIAAhxIAYAAIAEAOIACAAQAFgIAJgEQAJgEALgBQAUABALAKQAKALAAAVIAABJg");
	this.shape_29.setTransform(7.4,44.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C4157").s().p("AgOBQIAAhyIAdAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgEAEgJAAQgQAAAAgQg");
	this.shape_30.setTransform(-2.7,42.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C4157").s().p("AgZBQIAAhaIgRAAIAAgPIARgIIAAgJQAAgTAKgJQAJgJAVAAQAQAAAMAEIgIAXQgJgDgIAAQgHAAgDAEQgDAEAAAGIAAAIIAcAAIAAAXIgcAAIAABag");
	this.shape_31.setTransform(-9.3,42);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C4157").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_32.setTransform(113.5,18.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C4157").s().p("AgqAwQgKgLAAgVIAAhJIAfAAIAABCQAAAMAFAGQAEAGAKAAQAMAAAGgIQAGgJAAgTIAAg2IAfAAIAABxIgYAAIgEgOIgCAAQgFAIgJAEQgJAEgLAAQgUAAgLgKg");
	this.shape_33.setTransform(101.2,18.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C4157").s().p("AgdA0QgMgHgHgNQgHgOAAgSQAAgbAPgQQAPgPAaAAQAQgBANAIQAMAHAHAOQAGANABARQAAAcgPAQQgPAQgaAAQgQAAgNgIgAgRgZQgFAJAAAQQAAARAFAIQAGAKALgBQANAAAFgIQAGgJgBgRQABgQgGgJQgFgIgNAAQgLAAgGAIg");
	this.shape_34.setTransform(87.9,18.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C4157").s().p("Ag0BRIAAgZIANABQAIAAAGgFQAGgFAEgKIACgGIguhxIAiAAIAWBBQADAIAAALIABAAQABgKADgJIAVhBIAiAAIgxCBQgGARgMAKQgMAIgRABQgIAAgIgCg");
	this.shape_35.setTransform(75.4,21.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C4157").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_36.setTransform(57.8,18.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C4157").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_37.setTransform(47.9,18.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C4157").s().p("AgdA0QgMgHgHgNQgHgOAAgSQAAgbAPgQQAPgPAaAAQAQgBANAIQAMAHAHAOQAHANAAARQAAAcgPAQQgPAQgaAAQgQAAgNgIgAgRgZQgFAJAAAQQAAARAFAIQAFAKAMgBQANAAAFgIQAFgJAAgRQAAgQgFgJQgFgIgNAAQgMAAgFAIg");
	this.shape_38.setTransform(36,18.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C4157").s().p("AgPBQIAAifIAeAAIAACfg");
	this.shape_39.setTransform(26.3,16.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C4157").s().p("Ag0BUIAAikIAZAAIAEAOIABAAQAMgRAUAAQAVAAALAQQAMAQAAAcQAAASgGANQgGANgKAHQgJAHgNAAQgUAAgMgOIgBAAIABAQIAAAvgAgQgyQgFAHgBAQIAAAEQABASAFAHQAGAIALAAQAUAAAAgiQAAgRgEgIQgGgJgLAAQgKAAgGAIg");
	this.shape_40.setTransform(16.9,21.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C4157").s().p("AAYA5IgYgnIgXAnIgkAAIAng5Iglg4IAkAAIAVAkIAWgkIAkAAIglA4IAnA5g");
	this.shape_41.setTransform(3.8,18.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C4157").s().p("AgqBLIAAiVIBVAAIAAAaIg1AAIAAAhIAxAAIAAAZIgxAAIAAAnIA1AAIAAAag");
	this.shape_42.setTransform(-7.8,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-16,0,206.8,75.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outlined-icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36BBB3").s().p("AgeByQgZAAgSgRQgRgSAAgYQAAg+A2grIgZgZQgEgFAAgGQAAgHAFgEQAIgGAHgDQAUgHAZAAQAmgBAWARQAFADABAIQAAAGgFAFIgZAZQA3ArAAA+QAAAZgSARQgRARgZAAgAgFgiQg3AiAAA3QAAAMAIAIQAJAKANgBIA9AAQANABAIgKQAJgIAAgMQAAg4g3giQgEgCgCgEQgBAEgEADgAgZhQIAZAaIACgFIAXgVQgOgEgLAAQgQAAgJAEg");
	this.shape.setTransform(404.6,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36BBB3").s().p("Aj5EmQgHAAgEgEQgEgFAAgGIAAjtIgrgBQgKABgDgKQgEgJAHgHIEykxQAEgEAGAAQAGAAAEAEIE1E1QAHAHgEAJQgDAJgKAAIgrAAIAAAjQAAAHgEAEQgEAEgHAAQgGAAgEgEQgFgEAAgHIAAgyQAAgGAFgEQAEgFAGAAIAVAAIkQkQIkOENIAWAAQAGAAAEAEQAFAFAAAGIAADtIHkAAQAHAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgHAAg");
	this.shape_1.setTransform(381,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36BBB3").s().p("AAdB9QgFgEAAgHIAAjUIgvAAIAACGQAAAGgFAEQgEAFgGAAQgHAAgEgFQgEgEAAgGIAAiVQAAgHAEgEQAEgEAHAAIBNAAQAGAAAFAEQAEAEAAAHIAADjQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_2.setTransform(399.7,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36BBB3").s().p("AA2CHQgEgEAAgHIAAjoIhjAAIAADoQAAAHgEAEQgFAEgGAAQgGAAgEgEQgFgEAAgHIAAj3QAAgHAFgEQAEgEAGAAICBAAQAGAAAEAEQAFAEAAAHIAAD3QAAAHgFAEQgEAEgGAAQgGAAgFgEg");
	this.shape_3.setTransform(381,46.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36BBB3").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZgAgmgmQgRAQAAAWQAAAXARAQQAQARAWAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgWAAgQARg");
	this.shape_4.setTransform(298.9,51.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#36BBB3").s().p("AApB7QgEgEAAgGIAAjSIhJAAIAABkQAAAGgEAEQgFAFgGAAQgGAAgEgFQgFgEAAgGIAAhzQAAgGAFgEQAEgFAGAAIBnAAQAGAAAEAFQAFAEAAAGIAADhQAAAGgFAEQgEAFgGAAQgHAAgEgFg");
	this.shape_5.setTransform(306.9,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36BBB3").s().p("AhABDQgHAAgEgFQgEgEAAgGQAAgHAEgEQAEgEAHAAIByAAIAAhJIgmAAQgHAAgEgEQgDgEgBgHQABgGADgEQAEgFAHAAIA1AAQAGAAAFAFQAEAEAAAGIAABnQAAAGgEAEQgFAFgGAAg");
	this.shape_6.setTransform(269.7,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#36BBB3").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZgAgmgmQgRAQAAAWQAAAXARAQQAQARAWAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgWAAgQARg");
	this.shape_7.setTransform(271.6,51.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#36BBB3").s().p("AChCwQgFAAgFgFQgFgDAAgHQAAgGAFgEQAFgFAFAAICYAAIAAkjIoWAAIgxA5IApANQAIADACAHQACAIgGAGIhZBmIAABfIA2AAQAGAAAEAFQAFAEAAAGQAAAHgFADQgEAFgGAAIhEAAQgHAAgEgFQgEgDgBgHIAAh0QABgGADgEIBOhZIgqgMQgHgDgDgIQgCgHAGgHIBFhPQAFgFAHAAIIqAAQAHAAAEAEQAEAEAAAHIAAFBQAAAHgEADQgEAFgHAAg");
	this.shape_8.setTransform(290,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#36BBB3").s().p("Ag+APQgHAAgEgFQgEgDAAgHQAAgFAEgEQAEgFAHAAIB9AAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAg");
	this.shape_9.setTransform(285.2,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#36BBB3").s().p("AgoAnQgHAAgEgFQgEgEAAgGIAAgvQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIAAAgIAzAAIAAggQAAgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGIAAAvQAAAGgEAEQgEAFgHAAg");
	this.shape_10.setTransform(93,53.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#36BBB3").s().p("AgoAnQgHAAgEgFQgEgEAAgGIAAgvQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIAAAgIAzAAIAAggQAAgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGIAAAvQAAAGgEAEQgEAFgHAAg");
	this.shape_11.setTransform(135.7,53.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#36BBB3").s().p("Aj5C/QgWAAgQgPQgQgQAAgXIAAhaQAAgSAMgPIA8hMQAMgmAoguQAUgXATgRQAFgEAFAAIEFAAQAGAAAEAEIAoAoQAnAuAMAmIA8BMQAMAPAAASIAABaQAAAXgQAQQgQAPgWAAgAjLgzIgDAFIg+BPQgFAGAAAIIAABaQAAAKAHAHQAHAHAKAAIHzAAQAKAAAHgHQAHgHAAgKIAAhaQAAgIgFgGIg+hPIgDgFQgOguhBg/Ij5AAQhBA/gOAug");
	this.shape_12.setTransform(114.2,32.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#36BBB3").s().p("AhSAPQgGAAgEgFQgFgDAAgHQAAgFAFgEQAEgFAGAAICkAAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAg");
	this.shape_13.setTransform(114.3,42.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#36BBB3").s().p("AgiAPQgHAAgDgFQgFgDAAgHQAAgFAFgEQADgFAHAAIBFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAg");
	this.shape_14.setTransform(132.6,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgFQgFgDAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAFAFQAEAEAAAFQAAAHgEADQgFAFgGAAg");
	this.shape_15.setTransform(95.9,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#36BBB3").s().p("AjQAPIhPgVQgGgCgDgGQgCgGACgGQADgFAFgDQAHgCAFACIBLAVQBfATBqAAQBsAABfgTQAvgKAbgLQAGgCAFACQAGADACAFQADAGgDAGQgCAGgGACQgUAJg6AMQhiAVhwAAQhvAAhhgVg");
	this.shape_16.setTransform(114.4,27.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#36BBB3").s().p("AgcAdQgMgMAAgRQAAgQAMgNQAMgMAQABQARgBAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgHgHQgDADAAAEQAAAEADAEQADADAEABQAFgBADgDQADgEAAgEQAAgEgDgDQgDgDgFgBQgEABgDADg");
	this.shape_17.setTransform(477.3,29.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#36BBB3").s().p("Ah5BnQgCgGADgGQADgFAGgBIDMg5IAAhvIisAAQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIC7AAQAGAAAEAEQAFAFAAAGIAACKQAAALgLADIjXA8IgEAAQgMAAgCgLg");
	this.shape_18.setTransform(459,36.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#36BBB3").s().p("AjxECQgJgPgIgjQgOhCAAhrQAAh/BRhWQBRhWB4AAQBnAABYBQQAgAeAVAgQATAdAAANIAAAEIgpC9QgDAJgIACQmCB4g6AUIgFABQgIAAgFgHgAirieQhHBNAAB0QAACHAWA9IGoiFIAnizQgGghg+g1QhPhDhWAAQhtAAhIBMg");
	this.shape_19.setTransform(468.9,34.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#36BBB3").s().p("AgFBxQgjgQgggbQg+g0AAg4QAAgfAWgXQAWgWAfABQAmAAAVAdQAXgdAkAAQAfgBAXAWQAWAXAAAfQAAA4g/A0IhCArQgDACgDgBIgFgBgAhahGQgOANAAATQAAAmAsAoQAaAYAiATQAigSAbgYQAsgnAAgoQAAgTgOgNQgNgOgTAAQgQAAgNAMQgNALgCAQQgBAGgEAEQgFADgFABQgFgBgEgDQgEgEgBgGQgCgQgNgLQgNgMgRAAQgSAAgNAOg");
	this.shape_20.setTransform(39.8,37.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#36BBB3").s().p("AjUEtQgGAAgFgFQgEgEAAgGIAAhdQAAhHAog6QAog6BBgZQgggVgTghQgTgjAAgnQAAhAAtgsQAtgtA+AAQA/AAAtAtQAtAsAABAQAAAygeApQgeAogwAPQgGABgFgCQgGgDgCgGQgCgGADgFQADgGAGgCQAngMAYggQAYghAAgoQAAgzgkgkQgkgkgzAAQgyAAgkAkQgkAkAAAzQAAAoAYAhQAYAgAnAMQAMAEgBAMQgBALgLACQhGAMguA4QgtA2AABIIAABOIGLAAIAAhOQAAgcgGgXQgCgFAEgGQADgGAGgBQAGgBAFACQAFAEACAFQAHAdAAAeIAABdQAAAGgEAEQgEAFgHAAg");
	this.shape_21.setTransform(25.8,30.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#36BBB3").s().p("AgaAqQgGAAgEgFQgFgEAAgGIAAg1QAAgGAFgEQAEgFAGAAIA1AAQAGAAAEAFQAFAEAAAGIAAA1QAAAGgFAEQgEAFgGAAgAgLAMIAXAAIAAgXIgXAAg");
	this.shape_22.setTransform(221.2,45.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36BBB3").s().p("AhCAPQgGAAgFgEQgEgEAAgHQAAgFAEgEQAFgFAGAAICFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAg");
	this.shape_23.setTransform(206.1,47.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#36BBB3").s().p("AgNAPQgHAAgEgEQgEgEAAgHQAAgFAEgEQAEgFAHAAIAbAAQAHAAAEAFQAEAEAAAFQAAAHgEAEQgEAEgHAAg");
	this.shape_24.setTransform(194.2,47.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36BBB3").s().p("AicAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIE5AAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAg");
	this.shape_25.setTransform(197.2,43.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgEQgFgEAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAg");
	this.shape_26.setTransform(184.9,47.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#36BBB3").s().p("AiVAqQgHAAgEgFQgEgEAAgGIAAg1QAAgGAEgEQAEgFAHAAIErAAQAGAAAFAFQAEAEAAAGIAAA1QAAAGgEAEQgFAFgGAAgAiGAMIENAAIAAgXIkNAAg");
	this.shape_27.setTransform(196.2,31);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#36BBB3").s().p("AjKC4QgiAAgYgZQgYgYAAghIAAjLQAAghAYgYQAYgZAiAAIGWAAQAhAAAYAZQAYAXAAAiIAADLQAAAhgYAYQgYAZghAAgAjviJQgPAPAAAVIAADLQAAAVAPAPQAPAPAWAAIGWAAQAVAAAPgPQAPgPAAgVIAAjLQAAgVgPgPQgPgQgVAAImWAAQgWAAgPAQg");
	this.shape_28.setTransform(202.8,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(3,0,493.3,61), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA1F58").s().p("A2PH8IABgQQAAgJgGgGIABgHIAEgWQACgNAAgJQABgDgFgFQgFgEgCgDQAQgSgOgMIAIhAIgMgPQADgHABgEQABgHgEgFQgCgDAAgEQAFgPgHgIQgBgBgBgEIAGgvQAAgEgDgEQgIgMAHgLQAGgKgGgKIgCgNIgBgOIgBgLQAAgGgCgDQgMgUAEgVIAIglQABgEAIgKIAEgCQAFgEAFgQQAFgSgCgGIgBgUIgEgjQgCgVABgPQAEgngHgZQgEgRAAgHQgBgMAGgLQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgHgPAFgRIALgcQABgDAEgEQAEgCADgBQBzgEA6AAQAJAAARACIAbAEQBeAHAiABQBNABBHgDQAjgCBHgIQAHgBAQAAICMgNIBBgGIAtAAQAcAAARgCIA8gGIA8gJIDQgeIBvgTQAPgCAVgBIAjgCICpgLQAMgBAXgFQAYgFALgBQAYgDAtgHQApgGAcABQAuACBEgHQAegDA9gNQAPgBAeACQAPAAAOAEIAPAJQAKAGAMgCIBDgKIAWgEQAFgBAGgKQAFgIAAgIIAAgLIAsgDQAugGBEgBIBzgBIAnAAQAXAAAOgBQAdgCA7gJQAMgCArgCIBXgDIAKACIALAEQgOAMAFATQAJAYgBAuIgBANQABAHAEAEQACACgDAHQgHAVAGAOIABAIIgBAkIABADQAKARABAaQAAAPgCAeIgDAuQgDAZANAYQABADAAADIADA3QgBAYgKASIgGAMQgEAGgFACQgEABAAAGQgEAeAAALQAAAMAFAUQABAGAGAQIAFAXQADALgEAPQgJAhAIAhQADAKgDAOIgFAYIgFAdQgBAQgEAEQgEAEgNABIiWADQgOAAgWgCIgkgEQhAgHggAAQhagBhaADQgNAAgYADIgmAEIkfAXQgoAAgVACIhzANIhbAMIhOAMQhWARgsAFQgbAEhtAHQhVAFgsAEIghAGQgWAFgLABIg+AKQglAGgYgBQg5gBg+AFQgRACgiAGIgzAJQgLABgRgBIgdgCIgBAAQgKAAgMgEIgUgMQgDgCgFABIhbAOIgFACQgLAOgTAAQgCAAgCAIQgDARgPAAQhCAHghABIilABQg9ABgiAHIgyAFIgyAEIhRADIgBAAQgTAAABgYg");
	this.shape.setTransform(141.3,47.2,0.926,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(6.7,-6,269.1,106.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgGgGAAgLQAAgKAGgGQAGgGALAAQALAAAHAGQAGAGAAAKQAAALgGAGQgHAGgLAAQgKAAgHgGg");
	this.shape.setTransform(113.9,122.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBsIAAghQAHABAJAAQALAAAJgGQAIgHAEgOIADgHIg9iXIAuAAIAdBWQADALABAOIABAAQABgNAFgMIAchWIAtAAIhBCrQgJAYgPAMQgRAMgWAAQgLAAgKgCg");
	this.shape_1.setTransform(103.1,120.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBqIAAjTIApAAIAADTg");
	this.shape_2.setTransform(90.9,113.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BXQgPgVgBglQAAglAQgUQAQgWAbAAQAcAAAQAXIABAAQgEgRABgOIAAgxIApAAIAADUIgfAAIgIgUIgCAAQgOAXgcAAQgbAAgQgVgAgUgEQgIALAAAWQAAAXAIALQAIALANAAQAQAAAHgJQAIgJAAgWIAAgFQAAgYgHgKQgIgLgRAAQgMAAgIAMg");
	this.shape_3.setTransform(77.3,113.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBOIAAhZQAAgQgGgIQgGgJgNAAQgRAAgHAMQgIAMAAAaIAABIIgpAAIAAiYIAfAAIAGATIACAAQAHgLAMgFQAMgGAPAAQAbAAAOAPQAOAOgBAbIAABjg");
	this.shape_4.setTransform(59.8,116.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxA7QgVgVABglQAAglATgVQATgVAhAAQAhAAARASQATATgBAgIAAAUIhhAAQABARAKAKQAJAKARAAQAOAAAMgCQANgDANgHIAAAgQgLAGgMACQgNADgSAAQgkAAgVgUgAAggQQgBgQgIgIQgIgJgNAAQgMAAgIAJQgHAIgBAQIA6AAIAAAAg");
	this.shape_5.setTransform(42.3,116.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBqIAAiYIApAAIAACYgAgWhVQAAgUAWAAQAXAAAAAUQAAAKgGAFQgGAFgLAAQgWAAAAgUg");
	this.shape_6.setTransform(29.8,113.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_7.setTransform(20,116.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBrIAAh5IgXAAIAAgUIAXgLIAAgLQAAgaANgMQANgMAbAAQAWAAARAGIgLAfQgMgEgLAAQgJAAgEAFQgEAFAAAJIAAAJIAkAAIAAAfIgkAAIAAB5g");
	this.shape_8.setTransform(8.3,113.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_9.setTransform(151.8,84.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwA7QgWgVAAglQAAglAUgVQATgVAhAAQAhAAASASQARASABAhIAAAUIhiAAQAAARAKAKQAKAKARAAQAOAAAMgCQAMgEAOgGIAAAgQgLAGgNADQgMACgSAAQgkAAgUgUgAAggQQgBgQgIgIQgHgIgOAAQgMAAgHAIQgIAIgBAQIA6AAIAAAAg");
	this.shape_10.setTransform(136.4,84.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiBNQgMgDgLgEIAAgiQAMAFAOAEQAPADALABQAWgBAAgNQAAgEgDgDQgDgEgIgDIgSgJQgSgIgIgFQgJgHgDgHQgEgJAAgMQAAgUAQgLQAQgLAcAAQAbAAAbAMIgNAeIgWgIQgKgDgKgBQgRAAAAAKQgBAHAHADQAGAFASAIQATAHAHAGQAJAFAEAJQAEAIAAALQAAAYgRAMQgPAMggAAQgRAAgLgCg");
	this.shape_11.setTransform(121.3,84.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BAQgNgPAAgbIAAhjIApAAIAABZQAAAQAGAJQAGAIANAAQARAAAHgMQAIgMAAgaIAAhIIApAAIAACYIgfAAIgGgTIgCAAQgHAKgMAGQgMAGgPAAQgbAAgOgOg");
	this.shape_12.setTransform(105,84.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFBsIAAghQAHABAJAAQALAAAJgGQAIgHAEgOIADgHIg9iXIAuAAIAdBWQADALABAOIABAAQABgNAFgMIAchWIAtAAIhBCrQgJAYgPAMQgRAMgWAAQgLAAgKgCg");
	this.shape_13.setTransform(80.6,88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBSQgLgNAAgZIAAhJIgUAAIAAgRIAXgPIAMggIAaAAIAAAgIArAAIAAAgIgrAAIAABJQAAAIAEAFQAGAEAIAAQAKAAAQgFIAAAgQgQAGgXAAQgXAAgMgMg");
	this.shape_14.setTransform(66.5,83.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVBSQgLgNAAgZIAAhJIgUAAIAAgRIAXgPIAMggIAaAAIAAAgIArAAIAAAgIgrAAIAABJQAAAIAEAFQAGAEAIAAQAKAAAQgFIAAAgQgPAGgYAAQgXAAgMgMg");
	this.shape_15.setTransform(54.3,83.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxA7QgUgVAAglQAAglATgVQATgVAhAAQAhAAARASQATASgBAhIAAAUIhhAAQAAARALAKQAJAKARAAQAOAAAMgCQAMgEAOgGIAAAgQgLAGgMADQgNACgSAAQgkAAgVgUgAAfgQQAAgQgIgIQgIgIgNAAQgMAAgHAIQgIAIgBAQIA5AAIAAAAg");
	this.shape_16.setTransform(40.2,84.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_17.setTransform(26.9,84.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhGBwIAAjcIAiAAIAFAUIACAAQAPgWAcgBQAbAAAPAVQAPAVAAAlQAAAZgHARQgHASgNAKQgOAIgRABQgaAAgQgUIgCAAIACAWIAAA/gAgVhEQgHAKgBAVIAAAFQAAAYAIALQAHAKAPAAQAcAAAAgtQAAgXgHgLQgHgLgPAAQgOAAgHAJg");
	this.shape_18.setTransform(11.3,87.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiBNQgMgDgLgEIAAgiQAMAGAOADQAPAEALAAQAWAAAAgOQAAgEgDgEQgDgCgIgEIgSgJQgSgIgIgFQgJgHgDgIQgEgHAAgNQAAgUAQgLQAQgLAbAAQAcAAAaAMIgMAeIgWgIQgKgDgKAAQgRgBAAAKQgBAGAHAEQAGAEASAIQATAIAHAGQAJAGAEAIQAEAIAAALQAAAXgRANQgPAMggAAQgRAAgLgCg");
	this.shape_19.setTransform(75.8,52.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAkIgGhHIAlAAIgGBHg");
	this.shape_20.setTransform(65.9,43.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUBSQgMgNAAgaIAAhIIgUAAIAAgSIAXgNIAMghIAZAAIAAAhIAsAAIAAAfIgsAAIAABIQAAAKAGAEQAEAEAJAAQAKAAAQgFIAAAfQgQAHgWAAQgZAAgKgMg");
	this.shape_21.setTransform(55.4,51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag2BDQgNgNAAgXQAAgYARgLQARgLAhgCIAbAAIAAgHQAAgXgYAAQgRAAgZALIgOgcQAbgOAfAAQAfAAAQANQAQAOAAAbIAABlIgdAAIgIgVIgBAAQgLANgLAFQgKAFgSAAQgWAAgMgMgAAKAGQgQABgKAGQgIAGgBAMQAAASAVAAQANAAAJgIQAIgJABgNIAAgNg");
	this.shape_22.setTransform(40.6,52.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdBqIAAhZQAAgggZAAQgRAAgHAMQgIALAAAaIAABIIgpAAIAAjTIApAAIAAArIgBAYIgBAMIACAAQAOgWAdAAQAcAAAOAOQANAPAAAaIAABjg");
	this.shape_23.setTransform(23.4,49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVBSQgLgNAAgaIAAhIIgUAAIAAgSIAXgNIAMghIAaAAIAAAhIArAAIAAAfIgrAAIAABIQAAAKAEAEQAGAEAIAAQAKAAAQgFIAAAfQgQAHgXAAQgXAAgMgMg");
	this.shape_24.setTransform(8,51);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhFBsIAAghQAHABAJAAQALAAAJgGQAIgHAEgOIADgHIg9iXIAuAAIAdBWQADALABAOIABAAQABgNAFgMIAchWIAtAAIhBCrQgJAYgPAMQgRAMgWAAQgLAAgKgCg");
	this.shape_25.setTransform(114.2,23.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag3BDQgMgNAAgXQAAgYARgLQARgLAhgCIAaAAIAAgHQABgXgYAAQgRAAgZALIgOgcQAagOAgAAQAfAAAQANQAQAOAAAbIAABlIgdAAIgIgVIgBAAQgLANgLAFQgKAFgSAAQgWAAgNgMgAAKAGQgQABgKAGQgIAGgBAMQABASAUAAQANAAAJgIQAIgJAAgNIAAgNg");
	this.shape_26.setTransform(97.4,20.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBNQgLgDgKgDIAAgjQALAFAPAEQAOADALAAQAWAAAAgMQAAgFgDgEQgDgCgHgFIgTgJQgSgHgIgFQgJgGgDgJQgEgHAAgNQAAgUAQgLQAPgLAcAAQAdAAAZAMIgMAeIgVgIQgKgEgLABQgRAAgBAKQABAGAFAEQAGAEAUAHQARAIAJAGQAIAGAEAHQAEAJAAALQAAAYgQAMQgQAMggAAQgRAAgMgCg");
	this.shape_27.setTransform(82.5,20.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag3BXQgQgVABglQAAgkAQgWQAPgUAcAAQAbAAAPAVIACAAQgDgRgBgNIAAgxIArAAIAADUIghAAIgIgUIgCAAQgNAWgdAAQgbAAgPgUgAgUgEQgIALAAAXQAAAWAIALQAHAMAOAAQAQAAAIgKQAHgJABgXIAAgEQAAgZgIgJQgHgLgSAAQgNAAgHAMg");
	this.shape_28.setTransform(58.9,17.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAkIgGhHIAlAAIgGBHg");
	this.shape_29.setTransform(48.5,11.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgwA7QgWgVABglQAAglATgVQATgVAhAAQAhAAARASQATASgBAhIAAATIhhAAQABASAJAKQAKAKARAAQAOAAAMgDQANgDANgGIAAAhQgLAFgMADQgNACgSAAQgkAAgUgUgAAggRQgBgOgIgJQgHgJgOABQgMgBgIAJQgHAJgBAOIA6AAIAAAAg");
	this.shape_30.setTransform(36.8,20.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAkBkIgbhoIgFgXIgEgYIgDAYIgFAXIgbBoIgwAAIgzjHIApAAIAaBsQAHAfADAWIAEgZIAFgZIAdhvIAnAAIAdBvIAFAXIAEAbIAFgbIAFgaIAahsIApAAIgyDHg");
	this.shape_31.setTransform(15.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,-4,191,138.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37BCB5").s().p("Am8GWIAAqRQAAhgBNgmQAXgNAegEQAOgDAJAAILgAAIAAKRQAABghNAnQgnATgmAAg");
	this.shape.setTransform(96.1,87.6,2.159,2.159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,192.2,175.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4054").s().p("AgQARQgHgGAAgLQAAgKAGgGQAGgGALAAQAMAAAFAGQAHAGAAAKQAAALgHAGQgFAGgMAAQgLAAgFgGg");
	this.shape.setTransform(99.9,106.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4054").s().p("AhFBsIAAghQAHABAJAAQALAAAJgGQAIgHAEgOIADgHIg9iXIAuAAIAdBWQADALABAOIABAAQABgNAFgMIAchWIAtAAIhBCrQgJAYgPAMQgRAMgWAAQgLAAgKgCg");
	this.shape_1.setTransform(89.1,104.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4054").s().p("AgxA7QgUgVAAglQAAglATgVQATgVAhAAQAhAAARASQATATgBAgIAAATIhhAAQAAASALAKQAJAKARAAQAOAAAMgDQANgCANgHIAAAhQgLAFgMACQgNADgSAAQgkAAgVgUgAAfgRQAAgOgIgJQgIgJgNAAQgMAAgHAJQgIAJgBAOIA5AAIAAAAg");
	this.shape_2.setTransform(73.5,100.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4054").s().p("AAdBOIAAhZQAAgQgGgIQgGgJgNAAQgRAAgHAMQgIAMAAAaIAABIIgpAAIAAiYIAfAAIAGATIACAAQAHgLAMgFQALgGAQAAQAbAAANAPQAPAOAAAbIAABjg");
	this.shape_3.setTransform(56,100.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4054").s().p("AgmBGQgRgKgJgSQgJgSAAgYQAAgkATgWQAUgUAiAAQAWAAARAJQARAKAJASQAJASAAAXQAAAlgUAVQgTAVgjAAQgVAAgRgJgAgXghQgIALAAAWQAAAWAIAMQAHALAQAAQARABAHgLQAHgMAAgXQAAgWgHgLQgHgLgRAAQgQAAgHALg");
	this.shape_4.setTransform(38.1,100.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4054").s().p("ABKBOIAAhZQAAgQgFgIQgGgJgMAAQgPAAgIALQgHALgBAXIAABNIgoAAIAAhZQAAgQgGgIQgFgJgMAAQgQAAgHAMQgHAMAAAaIAABIIgqAAIAAiYIAgAAIAFATIADAAQAGgKAMgGQALgGAPAAQAiAAAMAWIADAAQAHgKALgGQANgGAOAAQAaAAAOANQANAOAAAdIAABjg");
	this.shape_5.setTransform(15.8,100.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4054").s().p("Ag4BAQgNgPAAgbIAAhjIApAAIAABZQAAAQAGAJQAGAIANAAQARAAAHgMQAIgMAAgaIAAhIIApAAIAACYIgfAAIgGgTIgCAAQgHAKgMAGQgMAGgPAAQgbAAgOgOg");
	this.shape_6.setTransform(128.7,68.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4054").s().p("AgmBFQgRgJgJgSQgJgSAAgYQAAglATgVQAUgUAiAAQAWAAARAJQARAKAJASQAJARAAAYQAAAlgUAVQgTAVgjAAQgVAAgRgKgAgXghQgIALAAAWQAAAXAIALQAHAMAQAAQARgBAHgKQAHgMAAgXQAAgWgHgLQgHgLgRAAQgQAAgHALg");
	this.shape_7.setTransform(110.9,68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4054").s().p("AhFBsIAAghQAHABAJAAQALAAAJgGQAIgHAEgOIADgHIg9iXIAuAAIAdBWQADALABAOIABAAQABgNAFgMIAchWIAtAAIhBCrQgJAYgPAMQgRAMgWAAQgLAAgKgCg");
	this.shape_8.setTransform(94.3,72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4054").s().p("AgjBNQgMgCgJgEIAAgjQALAGAPADQAOADALAAQAWABAAgNQAAgGgDgCQgDgDgHgEIgTgJQgSgIgIgFQgJgHgDgHQgEgJAAgLQAAgVAQgLQAPgLAdAAQAcAAAaAMIgNAeIgVgIQgKgEgLAAQgRABgBAJQABAGAFAFQAHADASAJQASAHAJAGQAIAFAEAJQAEAIAAALQAAAXgQANQgRAMgfAAQgRAAgMgCg");
	this.shape_9.setTransform(72.3,68.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4054").s().p("AgxA7QgUgVAAglQgBglAUgVQATgVAhAAQAgAAATASQASATAAAgIAAAUIhiAAQAAARALAKQAJAKARAAQAOAAAMgCQAMgDAOgHIAAAgQgLAGgNACQgMADgSAAQgkAAgVgUgAAfgQQAAgQgIgIQgIgJgNAAQgMAAgHAJQgIAIgBAQIA5AAIAAAAg");
	this.shape_10.setTransform(57,68.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4054").s().p("AgVBMIg6iYIAsAAIAdBXQAFAQABAPIAAAAQABgNAGgSIAdhXIAsAAIg7CYg");
	this.shape_11.setTransform(40.8,68.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4054").s().p("Ag2BDQgNgNAAgXQAAgYARgLQARgLAhgCIAaAAIAAgHQABgXgYAAQgRAAgZALIgOgcQAagOAgAAQAfAAAQANQAQAOAAAbIAABlIgdAAIgIgVIgBAAQgLANgLAFQgKAFgSAAQgWAAgMgMgAAKAGQgQABgKAGQgIAGgBAMQAAASAVAAQANAAAJgIQAIgJAAgNIAAgNg");
	this.shape_12.setTransform(23.9,68.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4054").s().p("AgjBNQgMgCgJgEIAAgjQALAGAPADQAOADALAAQAWABAAgNQAAgGgDgCQgDgDgIgEIgSgJQgSgIgIgFQgJgHgDgHQgEgJAAgLQAAgVAQgLQAPgLAcAAQAcAAAaAMIgMAeIgVgIQgKgEgLAAQgSABAAAJQAAAGAHAFQAFADAUAJQARAHAJAGQAIAFAEAJQAEAIAAALQAAAXgQANQgRAMgfAAQgRAAgMgCg");
	this.shape_13.setTransform(9.1,68.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4054").s().p("AgxA7QgUgVgBglQAAglAUgVQATgVAhAAQAgAAATASQARASABAhIAAAUIhiAAQAAARAKAKQAKAKARAAQAOAAAMgCQAMgEAOgGIAAAgQgLAGgNACQgMADgSAAQgkAAgVgUgAAfgQQAAgQgIgIQgIgIgNgBQgMABgHAIQgIAIgBAQIA5AAIAAAAg");
	this.shape_14.setTransform(103,36.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4054").s().p("AgVBSQgLgNAAgZIAAhJIgUAAIAAgRIAXgPIAMggIAaAAIAAAgIArAAIAAAgIgrAAIAABJQAAAIAEAFQAGAEAIAAQAKAAAQgFIAAAgQgPAGgYAAQgXAAgMgMg");
	this.shape_15.setTransform(88.5,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4054").s().p("AgUBqIAAiYIApAAIAACYgAgWhVQAAgUAWAAQAXAAAAAUQAAAKgGAFQgGAFgLAAQgWAAAAgUg");
	this.shape_16.setTransform(78.3,33.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4054").s().p("AgjBNQgLgDgKgEIAAgiQALAFAPAEQAOADALABQAWgBAAgNQAAgEgDgDQgDgEgHgDIgTgJQgSgIgIgFQgJgHgDgHQgEgJAAgMQAAgUAQgLQAPgLAcAAQAdAAAZAMIgMAeIgVgIQgKgDgLgBQgRAAgBAKQABAHAGADQAFAFAUAIQARAHAJAGQAIAFAEAJQAEAIAAALQAAAYgQAMQgRAMgfAAQgRAAgMgCg");
	this.shape_17.setTransform(67.2,36.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4054").s().p("AgdBYIgDAAIgHARIgfAAIAAjTIApAAIAAAxIgBAeIABAAQAPgWAcgBQAbAAAPAWQAPAUAAAlQAAAlgPAVQgQAVgbAAQgaAAgQgUgAgVgHQgHAJgBAVIAAAFQAAAYAIAMQAHAKAPAAQANAAAHgMQAIgMAAgWQAAgXgIgKQgHgLgOAAQgOAAgHAJg");
	this.shape_18.setTransform(51.8,33.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4054").s().p("AgwA7QgWgVAAglQAAglAUgVQATgVAhAAQAhAAASASQARASABAhIAAAUIhiAAQAAARAKAKQAKAKARAAQAOAAAMgCQAMgEAOgGIAAAgQgLAGgNACQgMADgSAAQgkAAgUgUgAAggQQgBgQgIgIQgHgIgOgBQgMABgIAIQgHAIgBAQIA6AAIAAAAg");
	this.shape_19.setTransform(34.3,36.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4054").s().p("AAcBMIgMg1IgQhCIAAAAIgcB3IgtAAIgriYIAqAAIARBFQAEARAFAfIABAAQAAgKAEgXIADgKIAShKIAtAAIASBKIACAIIACANIACAMIABAKIABAAIAEgbIAFgVIAShFIApAAIgsCYg");
	this.shape_20.setTransform(14,36.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4054").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_21.setTransform(49.8,4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4054").s().p("Ag4BAQgNgPAAgbIAAhjIApAAIAABZQAAAQAGAJQAGAIANAAQARAAAHgMQAIgMAAgaIAAhIIApAAIAACYIgfAAIgGgTIgCAAQgHAKgMAGQgMAGgPAAQgbAAgOgOg");
	this.shape_22.setTransform(33.4,4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C4054").s().p("AhFBMQgZgaAAgyQAAgxAZgaQAYgbAtAAQAvAAAXAbQAZAaAAAxQAAAygZAaQgYAbguAAQgtAAgYgbgAglgxQgNARAAAgQAAAiANAQQAMARAZAAQAzAAgBhDQABhDgzAAQgYAAgNASg");
	this.shape_23.setTransform(13.2,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-20,191,138.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blackgirl_Bigbox11();
	this.instance.parent = this;
	this.instance.setTransform(153.6,16.5,1.092,1.092,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-53.9,16.5,207.5,273), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EBEAEC","rgba(235,234,236,0)"],[0.42,1],50.5,0,-50.4,0).s().p("An4HHIAAuNIPxAAIAAONg");
	this.shape.setTransform(250.4,-49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBEAEC","rgba(235,234,236,0)"],[0.42,1],-50.4,0,50.5,0).s().p("An4HHIAAuNIPxAAIAAONg");
	this.shape_1.setTransform(49.5,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},107).wait(3));

	// Layer 1
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(270.1,-55.1,0.879,0.879,0,0,0,247.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({regX:249.6,regY:30.5,x:272,y:-55.4},0).wait(1).to({x:270.7},0).wait(1).to({x:268.1},0).wait(1).to({x:262.8},0).wait(1).to({x:250.1},0).wait(1).to({x:214.6},0).wait(1).to({x:201.8},0).wait(1).to({x:196.5},0).wait(1).to({x:193.9},0).wait(1).to({x:192.7},0).wait(1).to({regX:247.1,regY:30.9,x:190.1,y:-55.1},0).wait(14).to({regX:249.6,regY:30.5,x:192,y:-55.4},0).wait(1).to({x:190.9},0).wait(1).to({x:188.5},0).wait(1).to({x:183.6},0).wait(1).to({x:171.8},0).wait(1).to({x:138.9},0).wait(1).to({x:127.1},0).wait(1).to({x:122.2},0).wait(1).to({x:119.8},0).wait(1).to({x:118.7},0).wait(1).to({regX:247.1,regY:30.9,x:116.1,y:-55.1},0).wait(14).to({regX:249.6,regY:30.5,x:118,y:-55.4},0).wait(1).to({x:116.8},0).wait(1).to({x:114.3},0).wait(1).to({x:109.1},0).wait(1).to({x:96.7},0).wait(1).to({x:62},0).wait(1).to({x:49.6},0).wait(1).to({x:44.4},0).wait(1).to({x:41.9},0).wait(1).to({x:40.7},0).wait(1).to({regX:247.1,regY:30.9,x:38.1,y:-55.1},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-94.5,490,91);


// stage content:
(lib._300x250_rates_gen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(356));

	// button
	this.instance = new lib.Symbol11();
	this.instance.parent = this;
	this.instance.setTransform(147.9,183.4,0.1,0.1,0,0,0,84.5,20.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284).to({_off:false},0).wait(1).to({regX:84.6,regY:20.4,scaleX:0.14,scaleY:0.14,y:183.3,alpha:0.038},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.213},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:148,y:183.2,alpha:0.603},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.872},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.975},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:147.9,y:183.4,alpha:1},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(62));

	// Layer 11
	this.instance_1 = new lib.Symbol16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.5,112,1,1,0,0,0,90.5,30.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(252).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(0.75)).wait(93));

	// BIGBLUE
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,125,1.2,1.2,0,0,0,137.5,113.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(245).to({_off:false},0).wait(1).to({regY:113.6,scaleX:1.2,scaleY:1.2,y:125.1,alpha:0.005},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:150.1,alpha:0.024},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:150,alpha:0.065},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:150.1,alpha:0.148},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:150,alpha:0.345},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.703},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.866},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:125,alpha:0.94},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.977},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.995},0).wait(1).to({regY:113.5,scaleX:1,scaleY:1,alpha:1},0).wait(100));

	// outlined-icons
	this.instance_3 = new lib.Symbol6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(247.1,55.5,1,1,0,0,0,247.1,30.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).wait(1).to({regX:156.3,regY:-49,x:156.3,y:-23.9,startPosition:1},0).wait(1).to({y:-22,startPosition:2},0).wait(1).to({y:-18.2,startPosition:3},0).wait(1).to({y:-11.4,startPosition:4},0).wait(1).to({y:1.3,startPosition:5},0).wait(1).to({y:28.4,startPosition:6},0).wait(1).to({y:69,startPosition:7},0).wait(1).to({y:87.4,startPosition:8},0).wait(1).to({y:95.3,startPosition:9},0).wait(1).to({y:98.7,startPosition:10},0).wait(1).to({regX:247.1,regY:30.9,x:247.1,y:179.5,startPosition:0},0).to({_off:true},91).wait(100));

	// dude
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(257,379.1,1,1,0,0,0,104,130.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:49.8,regY:152.9,x:202.8,y:401.4},0).wait(1).to({y:399.9},0).wait(1).to({y:397.1},0).wait(1).to({y:392.4},0).wait(1).to({y:385.2},0).wait(1).to({y:374.1},0).wait(1).to({y:355.9},0).wait(1).to({y:321.9},0).wait(1).to({y:253.7},0).wait(1).to({y:205},0).wait(1).to({y:181},0).wait(1).to({y:166.7},0).wait(1).to({y:157.4},0).wait(1).to({y:151.3},0).wait(1).to({y:147.2},0).wait(1).to({y:144.7},0).wait(1).to({y:143.3},0).wait(1).to({regX:104,regY:130.1,x:257,y:120.1},0).wait(132).to({regX:49.8,regY:152.9,x:204,y:142.9},0).wait(1).to({x:208.8},0).wait(1).to({x:219.7},0).wait(1).to({x:244},0).wait(1).to({x:306.5},0).wait(1).to({x:357.5},0).wait(1).to({x:377.7},0).wait(1).to({x:387.2},0).wait(1).to({x:391.6},0).wait(1).to({regX:104,regY:130.1,x:447,y:120.1},0).to({_off:true},1).wait(196));

	// explore
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(158.6,276.2,1,1,0,0,0,89.8,29.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(155).to({_off:false},0).wait(1).to({regX:87.2,regY:42,x:156,y:288.6},0).wait(1).to({y:286.9},0).wait(1).to({y:283.4},0).wait(1).to({y:276.6},0).wait(1).to({y:261.6},0).wait(1).to({y:224.5},0).wait(1).to({y:203.8},0).wait(1).to({y:195.5},0).wait(1).to({y:191.4},0).wait(1).to({y:189.6},0).wait(1).to({regX:89.8,regY:29.1,x:158.6,y:176.2},0).to({_off:true},90).wait(100));

	// headline2
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125.5,61.6,1,1,0,0,0,95.5,72.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(1).to({regX:79.4,regY:68.9,x:109.4,y:58.5,alpha:0.008},0).wait(1).to({y:59.7,alpha:0.037},0).wait(1).to({y:62.3,alpha:0.101},0).wait(1).to({y:67.5,alpha:0.233},0).wait(1).to({y:77.3,alpha:0.479},0).wait(1).to({y:87,alpha:0.722},0).wait(1).to({y:92.5,alpha:0.859},0).wait(1).to({y:95.5,alpha:0.934},0).wait(1).to({y:97.1,alpha:0.974},0).wait(1).to({y:97.9,alpha:0.994},0).wait(1).to({regX:95.5,regY:72.3,x:125.5,y:101.6,alpha:1},0).wait(65).to({regX:79.4,regY:68.9,x:108,y:98.2},0).wait(1).to({x:102.7},0).wait(1).to({x:90.6},0).wait(1).to({x:63.7},0).wait(1).to({x:-5.8},0).wait(1).to({x:-62.4},0).wait(1).to({x:-84.8},0).wait(1).to({x:-95.4},0).wait(1).to({x:-100.2},0).wait(1).to({regX:95.5,regY:72.3,x:-85.5,y:101.6},0).to({_off:true},1).wait(196));

	// highlite
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(25.1,146.2,0.123,0.486,0,4.5,10.6,-3.5,61.1);
	this.instance_7.alpha = 0.148;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},0).wait(1).to({regX:141.3,regY:47.2,scaleX:0.21,skewY:9.1,x:55,y:144.4,alpha:0.364},0).wait(1).to({scaleX:0.37,skewY:6.3,x:76.3,y:145.5,alpha:0.745},0).wait(1).to({scaleX:0.43,skewY:5.3,x:84.1,y:145.4,alpha:0.884},0).wait(1).to({scaleX:0.46,skewY:4.9,x:87.7,y:145.2,alpha:0.948},0).wait(1).to({scaleX:0.47,skewY:4.6,x:89.5,y:145.1,alpha:0.98},0).wait(1).to({scaleX:0.48,rotation:4.5,skewX:0,skewY:0,x:90.4,alpha:0.996},0).wait(1).to({regX:-2.8,regY:61.4,scaleX:0.48,x:21,y:146.4,alpha:1},0).wait(51).to({regX:-2.7,scaleX:0.47,x:23.1},0).wait(1).to({regX:141.3,regY:47.2,scaleX:0.47,x:89.3,y:144.8},0).wait(1).to({x:84},0).wait(1).to({x:72},0).wait(1).to({x:45.1,y:144.7},0).wait(1).to({scaleX:0.47,x:-24.2},0).wait(1).to({scaleX:0.47,x:-80.7},0).wait(1).to({scaleX:0.46,x:-103.1},0).wait(1).to({x:-113.7},0).wait(1).to({x:-118.5},0).wait(1).to({regX:-2.8,regY:61.4,x:-187,y:146.4},0).to({_off:true},1).wait(196));

	// headline
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(133.5,-83.8,1,1,0,0,0,95.5,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:69,regY:53.4,x:107,y:-85.2},0).wait(1).to({y:-84.1},0).wait(1).to({y:-82},0).wait(1).to({y:-78.6},0).wait(1).to({y:-73.3},0).wait(1).to({y:-65.2},0).wait(1).to({y:-51.9},0).wait(1).to({y:-26.9},0).wait(1).to({y:23.1},0).wait(1).to({y:58.8},0).wait(1).to({y:76.4},0).wait(1).to({y:86.9},0).wait(1).to({y:93.7},0).wait(1).to({y:98.2},0).wait(1).to({y:101.2},0).wait(1).to({y:103.1},0).wait(1).to({y:104.1},0).wait(1).to({regX:95.5,regY:55.2,x:133.5,y:106.2},0).wait(54).to({regX:69,regY:53.4,x:107,y:104.6,alpha:0.992},0).wait(1).to({y:105.3,alpha:0.963},0).wait(1).to({y:106.9,alpha:0.899},0).wait(1).to({y:110.2,alpha:0.767},0).wait(1).to({y:116.4,alpha:0.521},0).wait(1).to({y:122.5,alpha:0.278},0).wait(1).to({y:125.9,alpha:0.141},0).wait(1).to({y:127.7,alpha:0.066},0).wait(1).to({y:128.8,alpha:0.026},0).wait(1).to({y:129.3,alpha:0.006},0).wait(1).to({regX:95.5,regY:55.2,x:133.5,y:131.2,alpha:0},0).to({_off:true},1).wait(273));

	// square
	this.instance_9 = new lib.Symbol3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(109.5,-91.5,1,1,0,0,0,96,87.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:96.1,x:109.6,y:-91.1},0).wait(1).to({y:-90},0).wait(1).to({y:-87.9},0).wait(1).to({y:-84.5},0).wait(1).to({y:-79.2},0).wait(1).to({y:-71.1},0).wait(1).to({y:-57.8},0).wait(1).to({y:-32.8},0).wait(1).to({y:17.2},0).wait(1).to({y:52.9},0).wait(1).to({y:70.5},0).wait(1).to({y:81},0).wait(1).to({y:87.8},0).wait(1).to({y:92.3},0).wait(1).to({y:95.3},0).wait(1).to({y:97.2},0).wait(1).to({y:98.2},0).wait(1).to({regX:96,x:109.5,y:98.5},0).wait(132).to({regX:96.1,x:108.1},0).wait(1).to({x:102.8},0).wait(1).to({x:90.8},0).wait(1).to({x:63.8},0).wait(1).to({x:-5.6},0).wait(1).to({x:-62.3},0).wait(1).to({x:-84.7},0).wait(1).to({x:-95.3},0).wait(1).to({x:-100.1},0).wait(1).to({regX:96,x:-101.5},0).to({_off:true},1).wait(196));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEAEC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(356));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,-54.1,307,717.5);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Blackgirl_Bigbox11.png", id:"Blackgirl_Bigbox11"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;