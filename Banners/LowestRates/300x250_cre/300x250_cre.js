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
p.nominalBounds = new cjs.Rectangle(0,0,173,238);// helper functions:

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

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape.setTransform(163.5,2,0.507,0.507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAPCnIgKAAQhAgGgmgnQgmgpgEhGIAAgVQAEhGAngpQAmgoA/gEIAKgBIAHAAQAYAAAXAFQAhAHATARQAbAXgNAcQgJAUgOAFQgQgYgfgHQgPgEgaAAQgkAAgTAZQgUAZAAAuQAAAvAUAZQATAZAkAAQAaAAAPgEQAfgIAQgXQANAEAKAVQANAcgbAXQghAdhCAAg");
	this.shape_1.setTransform(173.6,-4.7,0.507,0.507);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AhvCQQgigZAAg0QAAhwC+AAIAAgPQAAgqg3AAQggAAgiAPIgcAPQgFgDgFgGQgLgNAAgTQAAgWAmgPQAmgOA0AAQCAAAgBBnIAACmQABAVAHAPQAEAHAEAEQgDADgGACQgNAGgUAAQgYAAgKgIQgKgIgIgWQgJAKgQAKQgfAUggAAQguAAgdgVgAghAQQgdAOABAcQAAAZAPAMQAMAJATAAQAVAAAUgLQAXgMgBgQIAAhBQg0ABgdAPg");
	this.shape_2.setTransform(190.1,-4.6,0.507,0.507);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCDZQgLgIgOgYIhOiEIglAAIAACqIhdAAIAAnAIAjgCQAqgDAmAAQBTAAAsAVQBBAfAABRQAAA0gdAkQgWAagkAQIBzC7QgDADgJACQgRAGgbAAQgdAAgRgOgAhKikIAACeIAKAAQA7ABAagXQAYgVAAgqQAAglgYgUQgXgSgrAAQgSAAgLACg");
	this.shape_3.setTransform(91.6,-8,0.507,0.507);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBeAAIAABFIheAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_4.setTransform(123.6,-7.2,0.507,0.507);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbCcQghgOAAgZQAAgVALgPQAGgHAFgEIAaARQAgAQAdAAQAbAAAMgIQALgJAAgSQAAgVgZgLIg2gPQhQgWAAhEQAAgzAqgaQAjgVA2AAQAyAAAeALQAhAMAAAXQAAASgLAQIgLAMQgKgIgQgIQghgQggAAQgSABgLAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1gfAeQgjAhhGAAQgwABgggNg");
	this.shape_5.setTransform(153.3,-4.7,0.507,0.507);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhkB9QgtgtAAhTQAAhFAlgtQApgyBOAAQBGgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAlAAAZgSQANgJAGgJIANAIQAOAOAAAZQAAAZggAQQghAQgxAAQhTAAgsgrgAA/gjQAAhJg5AAQgcAAgQAUQgQATgCAiIB3AAIAAAAg");
	this.shape_6.setTransform(137.4,-4.7,0.507,0.507);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhxCTQgjgaAAg1QAAg5AygcQAxgdBfAAIAAgQQAAgqg4AAQggAAgkAPIgcAPQgFgCgGgHQgKgNAAgTQAAgXAngPQAmgOA2AAQCBAAAABpIAACpQAAAVAIAPQAEAIAEAEQgKALghAAQgYAAgLgIQgKgIgIgWQgJAKgQALQgfATgiAAQgvABgdgWgAghAPQgeAQAAAcQAAAaAQAMQAMAJATAAQAWAAAVgLQAWgMAAgRIAAhCQg1ABgdAOg");
	this.shape_7.setTransform(108.5,-4.7,0.507,0.507);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBdAAIAABFIhdAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_8.setTransform(75.2,-7.2,0.507,0.507);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaCcQgigOAAgZQAAgVALgPQAGgHAFgEIAbARQAgAQAcAAQAbAAAMgIQAMgJAAgSQAAgVgZgLIg3gPQhQgWAAhEQAAgzAqgaQAjgVA3AAQAxAAAfALQAgAMAAAXQAAASgLAQIgLAMQgKgIgQgIQgggQggAAQgSABgMAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1geAeQgjAhhGAAQgxABgfgNg");
	this.shape_9.setTransform(61.1,-4.7,0.507,0.507);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhkB9QgtgsAAhUQAAhFAkgtQAqgyBNAAQBHgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAkAAAagSQANgJAFgJIAOAIQANAOAAAZQAAAZggAQQggAQgxAAQhTAAgsgrgAA/gjQAAgjgMgSQgOgUgfAAQgcAAgRAUQgPATgCAiIB3AAIAAAAg");
	this.shape_10.setTransform(45.2,-4.7,0.507,0.507);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA7ChIg1iOIg7COIhEAAIh0k1IAMgGQAQgGAVAAQAVAAAMAJQAPALAJAaIA7CuIAthqIghhmIAJgGQANgGATAAQAVAAANAMQAOANAJAdIA2ChIAxixQALgmAuAAQAcAAAMAMIhrE1g");
	this.shape_11.setTransform(24.5,-4.9,0.507,0.507);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzB7QgrgtAAhOQAAhNAsgtQAsguBIABQBKgBApAtQAqAsAABPQAABPgtAuQgsArhGAAQhIAAgrgtgAgvhKQgSAbAAAvQAAAyASAZQARAYAeAAQAeAAARgXQATgaAAgyQAAgxgRgZQgRgZgfAAQgeAAgSAZg");
	this.shape_12.setTransform(3.8,-4.7,0.507,0.507);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiKDjIAAm/QAKgGAbAAQAYAAAPAMQARANAAAYIAAFKICLAAQAVAAAMAMQAMAMAAAWIAAAcg");
	this.shape_13.setTransform(-12.5,-8.3,0.507,0.507);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37BCB5").s().p("AgJAoIgFAAIgFgBIgEgBIgDgBIgBgWIALAAIABANIAFABIAGAAQAJAAAEgDIADgDIABgFQAAgEgDgDIgHgEIgJgDIgKgEQgFgCgDgEQgDgEAAgGQAAgGACgEQACgEAEgDQAHgGAMAAIAKABIALACIADABIAAAUIgKAAIgCgLIgFgCIgHAAIgEAAIgEACIgDADIgBAEQAAAFADACIAIAEIAJADIAJAFQAFABADAEQADAEAAAGQAAAHgDAEQgCAFgFADQgEADgGACQgGABgGAAg");
	this.shape_14.setTransform(143.2,44.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37BCB5").s().p("AAIAnIAAgIIAKgDIAAgmQgBgIgDgFQgCgDgHAAIgFABIgFACIgFADIgDADIgCACIAAArIAJADIAAAIIgkAAIAAgIIAMgDIAAg2IgMgCIAAgIIAXgBIACALIAEgEIAGgEIAHgDIAJgBQAGAAAFACQADABAEADQAFAIAAAMIAAAoIALADIAAAIg");
	this.shape_15.setTransform(135.1,44.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#37BCB5").s().p("AgPAmQgGgDgFgFQgJgKAAgTQAAgFADgLQADgHAEgGQAFgFAHgDQAHgDAHAAQARAAAJAKQAEAFACAIQADAHAAAJQAAAIgDAIQgDAHgEAGQgFAFgHADQgHADgHAAQgIAAgHgCgAgUAAQAAAOAGAHQAFAIAJAAQAFAAAEgCQAEgCACgEQAFgHAAgOQAAgOgFgHQgFgGgJAAQgVAAAAAbg");
	this.shape_16.setTransform(126,44.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37BCB5").s().p("AgSA4IAAgIIANgDIAAg2IgNgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgCgDgBgEQABgGACgCQADgDADAAQAJAAAAALQABAEgEADQgDADgDAAQgEAAgCgDg");
	this.shape_17.setTransform(119.5,42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37BCB5").s().p("AgBAwQgDgBgCgCIgEgHIgBgJIAAguIgOAAIAAgJIAOgBIAAgTIAOgDIAAAWIAVAAIAAAKIgVAAIAAAuQAAAFACACQACACAEAAQAEAAAHgDIAEAHQgFAEgFACQgGACgEAAQgFAAgCgCg");
	this.shape_18.setTransform(114.2,43.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37BCB5").s().p("AgmA4IAAgIIALgDIAAhXIgMgDIAAgIIAZgBIABAIQALgJAKAAQAQAAAIAKQAIAKAAATQAAAJgDAHQgCAHgFAGQgFAFgIADQgHADgKAAQgFAAgHgCIAAAXIAOADIAAAIgAgEgpQgFADgDAFIAAArIAGACIAIABQALAAAGgIQAFgGABgPIgBgLIgEgJQgCgEgEgCQgDgBgFAAQgGAAgEACg");
	this.shape_19.setTransform(106.7,46.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37BCB5").s().p("AgiAnQgGgGgDgKQgCgJAAgNIAAgKIADgLQADgKAGgHQAHgHAIgEQAJgEAKAAQAKAAAJAEIAIAEIAGAGQAGAHADAKIADAKIAAALQAAALgDAKQgEAJgGAIIgHAGIgIAFQgJAEgKAAQgWAAgLgOgAgdAAQAAAUAHAKQAIAKAOAAQANAAAIgKQAFgFACgIQACgHAAgKQAAgngeAAQgdAAAAAng");
	this.shape_20.setTransform(96.9,43.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37BCB5").s().p("AgUA4IAAgIIANgDIAAhZIgNgDIAAgIIAaAAIAABkIAPADIAAAIg");
	this.shape_21.setTransform(86,42.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37BCB5").s().p("AgdAjQgGgGAAgLQAAgLAJgGQAIgEARAAIALAAIAAgMQAAgNgNAAQgIAAgFABIgCABIgCALIgKAAIAAgSIAPgFIAOgBQAFAAAFABQAFABADADQAHAFAAANIAAArIAMADIAAAIIgXABIgDgKQgGAFgEADQgGADgGAAQgLAAgGgFgAgPAIQgFADAAAGQAAAGADADQADADAFAAIAFgBIAEgDIAEgCIADgDIADgDIAAgMIgKAAQgLAAgEADg");
	this.shape_22.setTransform(79.5,44.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37BCB5").s().p("AgSA4IAAgIIAMgDIAAg2IgMgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgCgDAAgEQAAgGACgCQADgDADAAQAJAAAAALQAAAEgDADQgDADgDAAQgDAAgDgDg");
	this.shape_23.setTransform(73,42.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#37BCB5").s().p("AgLAmQgHgDgFgFQgJgLAAgSQAAgIADgIQADgHAEgGQAFgFAHgDQAFgCAKgBIAGAAIAGABIAFACIAFABIADACIgBATIgJAAIgDgMIgNgBQgEAAgEABQgEACgDADQgGAHAAAOQAAAGACAGQABAFADAEQAGAIAKAAIAGgBIAGgCIAFgCIADgCIADgCIAFAJIgCABIgFADIgGADIgIADIgIABQgIAAgHgCg");
	this.shape_24.setTransform(66.9,44.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#37BCB5").s().p("AAIAnIAAgIIAKgDIAAgmQAAgIgEgFQgCgDgHAAIgFABIgGACIgEADIgDADIgCACIAAArIAJADIAAAIIglAAIAAgIIANgDIAAg2IgNgCIAAgIIAZgBIABALIAEgEIAGgEIAHgDIAJgBQAGAAAEACQAFABADADQAFAIAAAMIAAAoIAMADIAAAIg");
	this.shape_25.setTransform(58.4,44.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#37BCB5").s().p("AgdAjQgGgGAAgLQAAgLAJgGQAIgEARAAIALAAIAAgMQAAgNgNAAQgIAAgFABIgCABIgCALIgKAAIAAgSIAPgFIAOgBQAFAAAFABQAFABADADQAHAFAAANIAAArIAMADIAAAIIgXABIgDgKQgGAFgEADQgGADgGAAQgLAAgGgFgAgPAIQgFADAAAGQAAAGADADQADADAFAAIAFgBIAEgDIAEgCIADgDIADgDIAAgMIgKAAQgLAAgEADg");
	this.shape_26.setTransform(49.5,44.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#37BCB5").s().p("AAIAnIAAgIIAJgDIAAgmQABgIgDgFQgEgDgFAAIgGABIgGACIgEADIgDADIgDACIAAArIAKADIAAAIIglAAIAAgIIANgDIAAg2IgNgCIAAgIIAZgBIABALIAEgEIAGgEIAHgDIAJgBQAGAAAEACQAFABADADQAFAIABAMIAAAoIALADIAAAIg");
	this.shape_27.setTransform(40.6,44.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#37BCB5").s().p("AgSA4IAAgIIANgDIAAg2IgNgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgDgDAAgEQAAgGADgCQADgDADAAQAKAAgBALQAAAEgDADQgDADgDAAQgEAAgCgDg");
	this.shape_28.setTransform(33.2,42.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#37BCB5").s().p("AgjAzIAAgJIAMgCIAAhOIgMgDIAAgIIAbgBIAsAAIAAAYIgKAAIgDgMIgfAAIAAAhIAhAAIAAAKIghAAIAAAjIAOACIAAAJg");
	this.shape_29.setTransform(26.6,43.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#37BCB5").s().p("AgdAoIAAgIIAMgEIAAg2IgMgCIAAgIIAYgBIABAKQAKgMALABQAGAAAGABIABABIAAAVIgKAAIgCgLQgNAAgHALIAAArIANAEIAAAIg");
	this.shape_30.setTransform(126.7,24.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#37BCB5").s().p("AgSAlQgEgBgDgEQgGgGAAgNIAAgoIgMgDIAAgHIAbgCIAAAzQAAAHADAEQADAEAGAAQAFAAAGgDIAHgFIADgDIAAgrIgMgDIAAgHIAbgCIAABCIAMACIAAAIIgYABIgBgKQgHAFgHAEQgHACgFAAQgGAAgFgCg");
	this.shape_31.setTransform(118.4,25.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#37BCB5").s().p("AgPAmQgGgDgFgFQgJgKAAgTQAAgFADgLQADgHAEgGQAFgFAHgDQAHgDAHAAQARAAAJAKQAEAFACAIQADAHAAAJQAAAIgDAIQgDAHgEAGQgFAFgHADQgHADgHAAQgIAAgHgCgAgUAAQAAAOAGAHQAFAIAJAAQAFAAAEgCQAEgCACgEQAFgHAAgOQAAgOgFgHQgFgGgJAAQgVAAAAAbg");
	this.shape_32.setTransform(109.5,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#37BCB5").s().p("AgTAzIAAgJIAMgCIAAgbIgcgzIgKgDIAAgIIAlgBIAAAJIgKADIASAoIAWgoIgMgDIAAgIIAkgBIAAAJIgJACIgdA0IAAAbIAMACIAAAJg");
	this.shape_33.setTransform(100.8,23.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#37BCB5").s().p("AgXAeQgJgLAAgSQAAgIACgHQADgIAFgGQAEgFAHgDQAHgDAGAAQAQAAAHAIQAIAJAAARIgBAHIgxAAQAAAGABAFQACAFADADQAGAIAIAAIAHgBIAGgCIAFgCIAEgCIADgCIAFAIIgJAGIgKAEQgGACgGAAQgRAAgIgKgAASgIQAAgJgEgFQgEgGgIAAQgEAAgDACIgGAEQgFAGAAAIIAiAAIAAAAg");
	this.shape_34.setTransform(89,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#37BCB5").s().p("AgdAoIAAgIIAMgEIAAg2IgMgCIAAgIIAYgBIABAKQAKgMALABQAGAAAGABIABABIAAAVIgKAAIgCgLQgNAAgHALIAAArIANAEIAAAIg");
	this.shape_35.setTransform(81.9,24.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#37BCB5").s().p("AgPAmQgGgDgFgFQgJgKAAgTQAAgFADgLQADgHAEgGQAFgFAHgDQAHgDAHAAQARAAAJAKQAEAFACAIQADAHAAAJQAAAIgDAIQgDAHgEAGQgFAFgHADQgHADgHAAQgIAAgHgCgAgUAAQAAAOAGAHQAFAIAJAAQAFAAAEgCQAEgCACgEQAFgHAAgOQAAgOgFgHQgFgGgJAAQgVAAAAAbg");
	this.shape_36.setTransform(74.2,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#37BCB5").s().p("AgUA4IAAgIIAMgDIAAhZIgMgDIAAgIIAbAAIAABkIAOADIAAAIg");
	this.shape_37.setTransform(67.9,23.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#37BCB5").s().p("AgmA4IAAgIIALgDIAAhXIgMgDIAAgIIAZgBIABAIQAKgJALAAQAQAAAIAKQAIAKAAATQAAAJgDAHQgCAHgFAGQgFAFgIADQgGADgLAAQgFAAgHgCIAAAXIAOADIAAAIgAgEgpQgFADgDAFIAAArIAGACIAIABQALAAAGgIQAFgGABgPIgBgLIgEgJQgDgEgDgCQgEgBgEAAQgGAAgEACg");
	this.shape_38.setTransform(60.9,26.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#37BCB5").s().p("AAFAnIAAgIIAGgCIgLgTIgSAdIgWAAIAAgIIANgEIATgbIgTgbIgLgCIAAgIIAhgBIAAAJIgFABIAKATIASgcIAVgBIAAAJIgMACIgTAbIATAbIAOAEIAAAIg");
	this.shape_39.setTransform(52.5,25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#37BCB5").s().p("AgkAzIAAgJIAMgCIAAhOIgMgDIAAgIIAcgBIArAAIAAAZIgJAAIgEgNIgeAAIAAAfIAgAAIAAALIggAAIAAAkIAgAAIADgPIAKAAIAAAag");
	this.shape_40.setTransform(43.8,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-19.6,-19.7,217.1,76.2), null);


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
	this.shape_14.setTransform(138.7,43.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4157").s().p("AgoAyQgKgJAAgSQAAgSANgIQANgIAYgCIAUAAIAAgFQAAgRgSAAQgMgBgTAJIgKgVQATgLAYAAQAWAAANAKQAMALAAAUIAABLIgWAAIgGgPIAAAAQgJAKgIAEQgHAEgNgBQgRAAgJgJgAAIAFQgNAAgGAFQgHAEAAAJQAAANAPABQAKAAAHgHQAGgGAAgKIAAgKg");
	this.shape_15.setTransform(127.6,44.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4157").s().p("AgaA6IgQgFIAAgaQAIAEAMADQAKACAJABQAPAAABgKQAAgEgCgCIgIgGIgPgGQgNgFgFgEQgHgFgCgGQgDgHAAgIQAAgQAMgIQALgJAVAAQAVAAATAJIgKAYIgQgHQgHgCgHAAQgNAAgBAIQABADAEADIATAKQANAFAGAFQAHAEADAGQACAGAAAIQAAASgMAJQgMAJgXAAQgNAAgJgBg");
	this.shape_16.setTransform(111.1,44.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4157").s().p("AAWA6IAAhBQAAgNgFgGQgEgGgKAAQgMgBgGAKQgGAJAAASIAAA2IgfAAIAAhxIAYAAIAEAOIACAAQAFgIAJgEQAJgEALgBQAUABALAKQAKALAAAVIAABJg");
	this.shape_17.setTransform(98.9,44.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4157").s().p("AgcA1QgNgIgHgOQgGgNAAgSQAAgbAOgPQAPgQAZgBQARABAMAHQANAHAHANQAGAOAAARQAAAcgOAQQgPAPgaAAQgQAAgMgGgAgRgYQgGAIAAAQQAAARAGAJQAGAIALABQAMAAAGgJQAGgJAAgRQAAgQgGgIQgGgJgMAAQgLAAgGAJg");
	this.shape_18.setTransform(85.5,44.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4157").s().p("AgPBQIAAhyIAfAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgFAEgIAAQgQAAAAgQg");
	this.shape_19.setTransform(75.8,42.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4157").s().p("AgPA9QgJgJAAgUIAAg1IgPAAIAAgOIARgLIAJgXIATAAIAAAYIAgAAIAAAYIggAAIAAA1QAAAIAEACQAEADAGABQAIAAAMgEIAAAYQgMAEgRAAQgSAAgIgJg");
	this.shape_20.setTransform(67.9,43.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4157").s().p("Ag1BUIAAikIAaAAIAEAOIACAAQAKgRAVAAQAUAAAMAQQALAQAAAcQAAASgFANQgGANgJAHQgKAHgOAAQgTAAgLgOIgCAAIACAQIAAAvgAgQgyQgFAHAAAQIAAAEQgBASAGAHQAFAIALAAQAWAAgBgiQAAgRgEgIQgGgJgLAAQgLAAgFAIg");
	this.shape_21.setTransform(57.2,46.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4157").s().p("AgcA1QgNgIgHgOQgGgNAAgSQAAgbAOgPQAPgQAZgBQARABAMAHQANAHAHANQAGAOAAARQAAAcgOAQQgPAPgaAAQgQAAgMgGgAgRgYQgGAIAAAQQAAARAGAJQAGAIALABQAMAAAGgJQAGgJAAgRQAAgQgGgIQgGgJgMAAQgLAAgGAJg");
	this.shape_22.setTransform(43.7,44.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C4157").s().p("AgpBBQgMgQAAgbQAAgcAMgPQAMgQAVAAQAUAAAMARIABAAQgDgNAAgKIAAglIAfAAIAACfIgYAAIgFgPIgCAAQgKARgVAAQgVAAgLgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAJAAQANAAAFgHQAGgHABgRIAAgDQAAgTgHgHQgFgIgNAAQgKAAgFAJg");
	this.shape_23.setTransform(24.8,42.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4157").s().p("AgkA6IAAhxIAXAAIAFATIABAAQAGgKAIgFQAJgHALAAIAKABIgCAeIgJgBQgPAAgJAHQgHAJAAAMIAAA6g");
	this.shape_24.setTransform(14.8,44.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C4157").s().p("AgpAyQgJgJAAgSQAAgSANgIQANgIAYgCIAUAAIAAgFQAAgRgSAAQgMgBgTAJIgKgVQAUgLAWAAQAXAAAMAKQANALAAAUIAABLIgWAAIgGgPIAAAAQgIAKgJAEQgHAEgOgBQgQAAgKgJgAAIAFQgNAAgGAFQgHAEAAAJQAAANAPABQAKAAAHgHQAGgGAAgKIAAgKg");
	this.shape_25.setTransform(2.8,44.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C4157").s().p("AgtABQAAgdAOgPQAPgQAaAAQAUAAAQAIIgJAZIgOgFQgGgCgHAAQgXAAAAAiQAAAhAXAAQAKAAAHgCQAIgCAHgGIAAAbQgHAFgIABQgHACgNAAQg0ABAAg7g");
	this.shape_26.setTransform(-8.4,44.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C4157").s().p("AgPA9QgJgJAAgTIAAg2IgPAAIAAgOIARgKIAJgZIATAAIAAAZIAgAAIAAAYIggAAIAAA2QAAAHAEADQAEACAGAAQAIAAAMgDIAAAXQgMAGgRAAQgSAAgIgKg");
	this.shape_27.setTransform(179.5,17.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C4157").s().p("AgOBQIAAhyIAdAAIAABygAgQhAQAAgPAQAAQARAAAAAPQAAAIgEAEQgEAEgJAAQgQAAAAgQg");
	this.shape_28.setTransform(171.8,16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C4157").s().p("AgpBBQgLgQAAgbQAAgcALgPQAMgQAVAAQAUAAALARIABAAQgCgNAAgKIAAglIAgAAIAACfIgYAAIgHgPIgBAAQgKARgWAAQgTAAgMgQgAgPgDQgGAIAAARQAAARAGAIQAGAJAKAAQALAAAHgHQAFgHAAgRIAAgDQAAgTgFgHQgGgIgNAAQgJAAgGAJg");
	this.shape_29.setTransform(161.7,16.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C4157").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_30.setTransform(149.2,18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C4157").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_31.setTransform(139.2,18.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C4157").s().p("AgtABQAAgcAOgQQAPgPAaAAQAUAAAQAIIgJAXIgOgEQgGgCgHAAQgXAAAAAhQAAAiAXAAQAJAAAIgCQAHgDAJgFIAAAbQgJAFgHACQgHACgMAAQg1gBAAg6g");
	this.shape_32.setTransform(128.7,18.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C4157").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_33.setTransform(113.5,18.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C4157").s().p("AgqAwQgKgLAAgVIAAhJIAfAAIAABCQAAAMAFAGQAEAGAKAAQAMAAAGgIQAGgJAAgTIAAg2IAfAAIAABxIgYAAIgEgOIgCAAQgFAIgJAEQgJAEgLAAQgUAAgLgKg");
	this.shape_34.setTransform(101.2,18.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C4157").s().p("AgdA0QgMgHgHgNQgHgOAAgSQAAgbAPgQQAPgPAaAAQAQgBANAIQAMAHAHAOQAGANABARQAAAcgPAQQgPAQgaAAQgQAAgNgIgAgRgZQgFAJAAAQQAAARAFAIQAGAKALgBQANAAAFgIQAGgJgBgRQABgQgGgJQgFgIgNAAQgLAAgGAIg");
	this.shape_35.setTransform(87.9,18.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C4157").s().p("Ag0BRIAAgZIANABQAIAAAGgFQAGgFAEgKIACgGIguhxIAiAAIAWBBQADAIAAALIABAAQABgKADgJIAVhBIAiAAIgxCBQgGARgMAKQgMAIgRABQgIAAgIgCg");
	this.shape_36.setTransform(75.4,21.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C4157").s().p("AgkAsQgQgPAAgcQAAgcAPgQQAOgPAYAAQAZAAANANQAOAOAAAZIAAAOIhJAAQAAANAIAIQAHAIAMgBQALAAAJgCQAJgCAKgFIAAAZQgIAEgJACQgKACgNAAQgbgBgPgPgAAXgMQAAgMgGgFQgFgHgKAAQgJAAgGAHQgGAFAAAMIAqAAIAAAAg");
	this.shape_37.setTransform(57.8,18.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C4157").s().p("AgkA7IAAhyIAXAAIAFATIABAAQAGgJAIgHQAJgFALAAIAKABIgCAdIgJgBQgPAAgJAIQgHAHAAANIAAA7g");
	this.shape_38.setTransform(47.9,18.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C4157").s().p("AgdA0QgMgHgHgNQgHgOAAgSQAAgbAPgQQAPgPAaAAQAQgBANAIQAMAHAHAOQAHANAAARQAAAcgPAQQgPAQgaAAQgQAAgNgIgAgRgZQgFAJAAAQQAAARAFAIQAFAKAMgBQANAAAFgIQAFgJAAgRQAAgQgFgJQgFgIgNAAQgMAAgFAIg");
	this.shape_39.setTransform(36,18.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C4157").s().p("AgPBQIAAifIAeAAIAACfg");
	this.shape_40.setTransform(26.3,16.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C4157").s().p("Ag0BUIAAikIAZAAIAEAOIABAAQAMgRAUAAQAVAAALAQQAMAQAAAcQAAASgGANQgGANgKAHQgJAHgNAAQgUAAgMgOIgBAAIABAQIAAAvgAgQgyQgFAHgBAQIAAAEQABASAFAHQAGAIALAAQAUAAAAgiQAAgRgEgIQgGgJgLAAQgKAAgGAIg");
	this.shape_41.setTransform(16.9,21.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C4157").s().p("AAYA5IgYgnIgXAnIgkAAIAng5Iglg4IAkAAIAVAkIAWgkIAkAAIglA4IAnA5g");
	this.shape_42.setTransform(3.8,18.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C4157").s().p("AgqBLIAAiVIBVAAIAAAaIg1AAIAAAhIAxAAIAAAZIgxAAIAAAnIA1AAIAAAag");
	this.shape_43.setTransform(-7.8,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-16,0,202.3,75.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outlined-icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36BBB3").s().p("Ag8A9QgZgaAAgjQAAgjAZgZQAagZAiAAQAkAAAZAZQAZAaAAAiQAAAjgZAaQgZAZgkAAQgiAAgagZgAgmgmQgRAQAAAWQAAAXARAQQAQARAWAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgWAAgQARg");
	this.shape.setTransform(298.9,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36BBB3").s().p("AApB7QgEgEAAgGIAAjSIhJAAIAABkQAAAGgEAEQgFAFgGAAQgGAAgEgFQgFgEAAgGIAAhzQAAgGAFgEQAEgFAGAAIBnAAQAGAAAEAFQAFAEAAAGIAADhQAAAGgFAEQgEAFgGAAQgHAAgEgFg");
	this.shape_1.setTransform(306.9,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36BBB3").s().p("AhABDQgHAAgEgFQgEgEAAgGQAAgHAEgEQAEgEAHAAIByAAIAAhJIgmAAQgHAAgEgEQgDgEgBgHQABgGADgEQAEgFAHAAIA1AAQAGAAAFAFQAEAEAAAGIAABnQAAAGgEAEQgFAFgGAAg");
	this.shape_2.setTransform(269.7,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36BBB3").s().p("Ag8A9QgZgaAAgjQAAgiAZgaQAagZAiAAQAjAAAaAZQAZAZAAAjQAAAjgZAaQgaAZgjAAQgjAAgZgZgAgmgmQgRAQAAAWQAAAXARAQQAQARAWAAQAXAAAQgRQARgQAAgXQAAgWgRgQQgQgRgXAAQgWAAgQARg");
	this.shape_3.setTransform(271.6,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36BBB3").s().p("AChCwQgFAAgFgFQgFgDAAgHQAAgGAFgEQAFgFAFAAICYAAIAAkjIoWAAIgxA5IApANQAIADACAHQACAIgGAGIhZBmIAABfIA2AAQAGAAAEAFQAFAEAAAGQAAAHgFADQgEAFgGAAIhEAAQgHAAgEgFQgEgDgBgHIAAh0QABgGADgEIBOhZIgqgMQgHgDgDgIQgCgHAGgHIBFhPQAFgFAHAAIIqAAQAHAAAEAEQAEAEAAAHIAAFBQAAAHgEADQgEAFgHAAg");
	this.shape_4.setTransform(290,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#36BBB3").s().p("Ag+APQgHAAgEgFQgEgDAAgHQAAgFAEgEQAEgFAHAAIB9AAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAg");
	this.shape_5.setTransform(285.2,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36BBB3").s().p("AgeByQgZAAgSgRQgRgSAAgYQAAg+A2grIgZgZQgEgFAAgGQAAgHAFgEQAIgGAHgDQAUgHAZAAQAmgBAWARQAFADABAIQAAAGgFAFIgZAZQA3ArAAA+QAAAZgSARQgRARgZAAgAgFgiQg3AiAAA3QAAAMAIAIQAJAKANgBIA9AAQANABAIgKQAJgIAAgMQAAg4g3giQgEgCgCgEQgBAEgEADgAgZhQIAZAaIACgFIAXgVQgOgEgLAAQgQAAgJAEg");
	this.shape_6.setTransform(407.2,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#36BBB3").s().p("Aj5EmQgHAAgEgEQgEgFAAgGIAAjtIgrgBQgKABgDgKQgEgJAHgHIEykxQAEgEAGAAQAGAAAEAEIE1E1QAHAHgEAJQgDAJgKAAIgrAAIAAAjQAAAHgEAEQgEAEgHAAQgGAAgEgEQgFgEAAgHIAAgyQAAgGAFgEQAEgFAGAAIAVAAIkQkQIkOENIAWAAQAGAAAEAEQAFAFAAAGIAADtIHkAAQAHAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgHAAg");
	this.shape_7.setTransform(383.6,31.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#36BBB3").s().p("AAdB9QgFgEAAgHIAAjUIgvAAIAACGQAAAGgFAEQgEAFgGAAQgHAAgEgFQgEgEAAgGIAAiVQAAgHAEgEQAEgEAHAAIBNAAQAGAAAFAEQAEAEAAAHIAADjQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_8.setTransform(402.3,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#36BBB3").s().p("AA2CHQgEgEAAgHIAAjoIhjAAIAADoQAAAHgEAEQgFAEgGAAQgGAAgEgEQgFgEAAgHIAAj3QAAgHAFgEQAEgEAGAAICBAAQAGAAAEAEQAFAEAAAHIAAD3QAAAHgFAEQgEAEgGAAQgGAAgFgEg");
	this.shape_9.setTransform(383.6,46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#36BBB3").s().p("AgoAnQgHAAgEgFQgEgEAAgGIAAgvQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIAAAgIAzAAIAAggQAAgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGIAAAvQAAAGgEAEQgEAFgHAAg");
	this.shape_10.setTransform(180,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#36BBB3").s().p("AgoAnQgHAAgEgFQgEgEAAgGIAAgvQAAgGAEgEQAEgFAHAAQAGAAAEAFQAFAEAAAGIAAAgIAzAAIAAggQAAgGAFgEQAEgFAGAAQAHAAAEAFQAEAEAAAGIAAAvQAAAGgEAEQgEAFgHAAg");
	this.shape_11.setTransform(222.7,52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#36BBB3").s().p("Aj5C/QgWAAgQgPQgQgQAAgXIAAhaQAAgSAMgPIA8hMQAMgmAoguQAUgXATgRQAFgEAFAAIEFAAQAGAAAEAEIAoAoQAnAuAMAmIA8BMQAMAPAAASIAABaQAAAXgQAQQgQAPgWAAgAjLgzIgDAFIg+BPQgFAGAAAIIAABaQAAAKAHAHQAHAHAKAAIHzAAQAKAAAHgHQAHgHAAgKIAAhaQAAgIgFgGIg+hPIgDgFQgOguhBg/Ij5AAQhBA/gOAug");
	this.shape_12.setTransform(201.2,31.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#36BBB3").s().p("AhSAPQgGAAgEgFQgFgDAAgHQAAgFAFgEQAEgFAGAAICkAAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAg");
	this.shape_13.setTransform(201.3,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#36BBB3").s().p("AgiAPQgHAAgDgFQgFgDAAgHQAAgFAFgEQADgFAHAAIBFAAQAHAAADAFQAFAEAAAFQAAAHgFADQgDAFgHAAg");
	this.shape_14.setTransform(219.6,42);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgFQgFgDAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAFAFQAEAEAAAFQAAAHgEADQgFAFgGAAg");
	this.shape_15.setTransform(182.9,42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#36BBB3").s().p("AjQAPIhPgVQgGgCgDgGQgCgGACgGQADgFAFgDQAHgCAFACIBLAVQBfATBqAAQBsAABfgTQAvgKAbgLQAGgCAFACQAGADACAFQADAGgDAGQgCAGgGACQgUAJg6AMQhiAVhwAAQhvAAhhgVg");
	this.shape_16.setTransform(201.4,26.8);

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
	this.shape_22.setTransform(132.1,45.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36BBB3").s().p("AhCAPQgGAAgFgEQgEgEAAgHQAAgFAEgEQAFgFAGAAICFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAg");
	this.shape_23.setTransform(117,47.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#36BBB3").s().p("AgNAPQgHAAgEgEQgEgEAAgHQAAgFAEgEQAEgFAHAAIAbAAQAHAAAEAFQAEAEAAAFQAAAHgEAEQgEAEgHAAg");
	this.shape_24.setTransform(105.1,47.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36BBB3").s().p("AicAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIE5AAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAg");
	this.shape_25.setTransform(108.1,43.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgEQgFgEAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAg");
	this.shape_26.setTransform(95.8,47.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#36BBB3").s().p("AiVAqQgHAAgEgFQgEgEAAgGIAAg1QAAgGAEgEQAEgFAHAAIErAAQAGAAAFAFQAEAEAAAGIAAA1QAAAGgEAEQgFAFgGAAgAiGAMIENAAIAAgXIkNAAg");
	this.shape_27.setTransform(107.1,31);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#36BBB3").s().p("AjKC4QgiAAgYgZQgYgYAAghIAAjLQAAghAYgYQAYgZAiAAIGWAAQAhAAAYAZQAYAXAAAiIAADLQAAAhgYAYQgYAZghAAgAjviJQgPAPAAAVIAADLQAAAVAPAPQAPAPAWAAIGWAAQAVAAAPgPQAPgPAAgVIAAjLQAAgVgPgPQgPgQgVAAImWAAQgWAAgPAQg");
	this.shape_28.setTransform(113.7,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(3,0,493.3,61), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA1F58").s().p("A2PH8IABgQQAAgJgGgGIABgHIAEgWQACgNAAgJQABgDgFgFQgFgEgCgDQAQgSgOgMIAIhAIgMgPQADgHABgEQABgHgEgFQgCgDAAgEQAFgPgHgIQgBgBgBgEIAGgvQAAgEgDgEQgIgMAHgLQAGgKgGgKIgCgNIgBgOIgBgLQAAgGgCgDQgMgUAEgVIAIglQABgEAIgKIAEgCQAFgEAFgQQAFgSgCgGIgBgUIgEgjQgCgVABgPQAEgngHgZQgEgRAAgHQgBgMAGgLQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgHgPAFgRIALgcQABgDAEgEQAEgCADgBQBzgEA6AAQAJAAARACIAbAEQBeAHAiABQBNABBHgDQAjgCBHgIQAHgBAQAAICMgNIBBgGIAtAAQAcAAARgCIA8gGIA8gJIDQgeIBvgTQAPgCAVgBIAjgCICpgLQAMgBAXgFQAYgFALgBQAYgDAtgHQApgGAcABQAuACBEgHQAegDA9gNQAPgBAeACQAPAAAOAEIAPAJQAKAGAMgCIBDgKIAWgEQAFgBAGgKQAFgIAAgIIAAgLIAsgDQAugGBEgBIBzgBIAnAAQAXAAAOgBQAdgCA7gJQAMgCArgCIBXgDIAKACIALAEQgOAMAFATQAJAYgBAuIgBANQABAHAEAEQACACgDAHQgHAVAGAOIABAIIgBAkIABADQAKARABAaQAAAPgCAeIgDAuQgDAZANAYQABADAAADIADA3QgBAYgKASIgGAMQgEAGgFACQgEABAAAGQgEAeAAALQAAAMAFAUQABAGAGAQIAFAXQADALgEAPQgJAhAIAhQADAKgDAOIgFAYIgFAdQgBAQgEAEQgEAEgNABIiWADQgOAAgWgCIgkgEQhAgHggAAQhagBhaADQgNAAgYADIgmAEIkfAXQgoAAgVACIhzANIhbAMIhOAMQhWARgsAFQgbAEhtAHQhVAFgsAEIghAGQgWAFgLABIg+AKQglAGgYgBQg5gBg+AFQgRACgiAGIgzAJQgLABgRgBIgdgCIgBAAQgKAAgMgEIgUgMQgDgCgFABIhbAOIgFACQgLAOgTAAQgCAAgCAIQgDARgPAAQhCAHghABIilABQg9ABgiAHIgyAFIgyAEIhRADIgBAAQgTAAABgYg");
	this.shape.setTransform(15.4,167.1,0.463,1,0,0,6.1,-144.1,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(14.9,116,133.7,92.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgGgGAAgLQAAgKAGgGQAGgGALAAQALAAAGAGQAHAGAAAKQAAALgHAGQgGAGgLAAQgKAAgHgGg");
	this.shape.setTransform(64,111.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBMIgMg1IgQhCIAAAAIgcB3IgtAAIgriYIAqAAIARBFQAEAQAFAgIABAAQAAgKAEgWIADgLIAShKIAtAAIASBKIACAIIACANIACAMIABAKIABAAIAEgbIAFgVIAShFIApAAIgsCYg");
	this.shape_1.setTransform(49.1,105.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBGQgRgKgJgSQgJgSAAgYQAAgkATgWQAUgUAiAAQAWAAARAJQARAKAJASQAJASAAAXQAAAlgUAVQgTAVgjAAQgVAAgRgJgAgXghQgIALAAAWQAAAWAIAMQAHAMAQAAQARgBAHgKQAHgMAAgXQAAgWgHgLQgHgLgRAAQgQAAgHALg");
	this.shape_2.setTransform(29.1,105.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBOIAAhZQAAgQgGgIQgGgJgNAAQgRAAgHAMQgIAMAAAaIAABIIgpAAIAAiYIAfAAIAGATIACAAQAHgLAMgFQAMgGAPAAQAbAAAOAPQANAOAAAbIAABjg");
	this.shape_3.setTransform(11.3,105.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BkQgRgLAAgUQAAgOAIgJQAJgJARgFQgHgCgEgHQgGgGAAgGQABgKAFgEQAFgGAJgFQgLgGgIgMQgGgLgBgQQAAgZAQgNQARgOAeAAIAOABIALACIA2AAIAAAVIgYAHQAHAJgBANQABAZgSAOQgRANgeAAIgHAAIgGAAQgGAFAAAEQAAAKAWgBIAZAAQAZAAAOALQANALAAAVQAAAagWAPQgWAQgqgBQgfAAgRgLgAggAzQgIAFAAAKQAAAIAIAFQAJAFAPAAQAVAAANgGQAMgGAAgLQAAgJgIgDQgHgDgPAAIgVAAQgLAAgIAFgAgZg6QAAAMAGAIQAFAHAMAAQALAAAFgHQAGgIAAgMQAAgbgWgBQgXABAAAbg");
	this.shape_4.setTransform(67.3,76.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBOIAAhZQAAgQgGgIQgGgJgNAAQgRAAgHAMQgIAMAAAaIAABIIgpAAIAAiYIAfAAIAGATIACAAQAHgLAMgFQAMgGAPAAQAbAAAOAPQAOAOgBAbIAABjg");
	this.shape_5.setTransform(50.3,73.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBqIAAiYIApAAIAACYgAgWhVQAAgUAWAAQAXAAAAAUQAAAKgGAFQgGAFgLAAQgWAAAAgUg");
	this.shape_6.setTransform(36.8,70.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBqIAAhZQAAgggZAAQgRAAgHAMQgIALAAAaIAABIIgpAAIAAjTIApAAIAAArIgBAYIgBAMIACAAQAOgWAdAAQAcAAAOAOQANAPAAAaIAABjg");
	this.shape_7.setTransform(23.4,70.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBRQgLgMAAgZIAAhJIgUAAIAAgRIAXgPIAMggIAaAAIAAAgIArAAIAAAgIgrAAIAABJQAAAIAEAFQAGAEAIAAQAKAAAQgFIAAAgQgQAGgXAAQgXAAgMgNg");
	this.shape_8.setTransform(8,72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2BDQgNgNAAgXQAAgYARgLQARgLAhgCIAbAAIAAgHQgBgXgXAAQgSAAgYALIgOgcQAagOAfAAQAfAAARANQAQAOAAAbIAABlIgdAAIgIgVIgBAAQgLANgLAFQgKAFgSAAQgWAAgMgMgAAKAGQgQABgKAGQgJAGAAAMQAAASAVAAQAOAAAIgIQAJgJAAgNIAAgNg");
	this.shape_9.setTransform(59.7,41.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjBNQgMgCgJgFIAAgiQALAFAPAEQAOADALABQAWgBAAgNQAAgEgDgEQgDgDgHgDIgTgJQgSgIgIgFQgJgHgDgHQgEgJAAgMQAAgUAQgLQAPgLAdAAQAcAAAaAMIgNAeIgVgIQgKgDgLAAQgRgBgBAKQABAHAFADQAHAFASAIQASAHAJAGQAIAFAEAJQAEAIAAALQAAAXgQANQgRAMgfAAQgRAAgMgCg");
	this.shape_10.setTransform(37.6,41.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAkIgGhHIAlAAIgGBHg");
	this.shape_11.setTransform(27.7,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVBSQgLgNAAgZIAAhJIgUAAIAAgSIAXgNIAMghIAaAAIAAAhIAqAAIAAAfIgqAAIAABJQAAAIAEAFQAFAEAJAAQALAAAPgFIAAAfQgPAHgYAAQgYAAgLgMg");
	this.shape_12.setTransform(17.2,39.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBkIAAjHIApAAIAADHg");
	this.shape_13.setTransform(6.6,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,17,191,106.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37BCB5").s().p("AvANsIAA2LQAAjPCmhTQAzgbA/gKQAfgFAUAAIY2AAIAAWLQAADQinBTQhTAphTAAg");
	this.shape.setTransform(96.1,87.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,192.2,175.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4054").s().p("AgQARQgHgGAAgLQAAgKAGgGQAGgGALAAQAMAAAFAGQAHAGAAAKQAAALgHAGQgFAGgMAAQgLAAgFgGg");
	this.shape.setTransform(72,94.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4054").s().p("AgjBNQgMgCgJgEIAAgjQALAGAOADQAPAEALgBQAWAAAAgMQAAgFgDgEQgDgCgIgFIgSgJQgSgHgIgFQgIgGgEgJQgEgHAAgMQAAgVAQgLQAPgLAcAAQAcAAAaAMIgMAeIgWgIQgKgDgKAAQgSAAAAAKQAAAFAHAFQAFAEAUAHQARAIAJAGQAIAGAEAHQAEAJAAALQAAAYgQAMQgRAMgfAAQgRAAgMgCg");
	this.shape_1.setTransform(61.2,88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4054").s().p("Ag3BXQgQgVAAglQAAgkAQgWQAQgVAcABQAbgBAQAWIABAAQgDgQAAgOIAAgxIApAAIAADUIgfAAIgIgUIgCAAQgOAXgcgBQgbABgQgVgAgUgEQgIALAAAXQAAAWAIALQAHAMAOAAQAQAAAIgKQAHgJABgXIAAgEQgBgZgHgJQgIgLgRAAQgNAAgHAMg");
	this.shape_2.setTransform(44.8,85.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4054").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_3.setTransform(31.4,88.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4054").s().p("Ag2BDQgNgNAAgXQAAgYARgLQARgLAhgCIAbAAIAAgHQAAgXgYAAQgRAAgZALIgOgcQAbgOAfAAQAfAAAQANQAQAOAAAbIAABlIgdAAIgIgVIgBAAQgLANgLAFQgKAFgSAAQgWAAgMgMgAAKAGQgQABgKAGQgIAGgBAMQAAASAVAAQANAAAJgIQAIgJABgNIAAgNg");
	this.shape_4.setTransform(15.4,88.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4054").s().p("Ag8ABQAAgmATgVQAUgUAjAAQAaAAAVAKIgMAhIgSgHQgJgDgIABQggAAAAAtQAAAsAgABQAMAAAKgDQAKgEALgHIAAAkQgKAGgLADQgKACgQAAQhGAAAAhOg");
	this.shape_5.setTransform(0.4,88.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4054").s().p("AgVBRQgLgMAAgZIAAhJIgUAAIAAgRIAXgPIAMggIAaAAIAAAgIAqAAIAAAgIgqAAIAABJQAAAJAEAEQAFAEAJAAQALAAAPgFIAAAgQgPAGgYAAQgYAAgLgNg");
	this.shape_6.setTransform(116.2,55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4054").s().p("AgUBqIAAiYIApAAIAACYgAgWhVQAAgUAWAAQAXAAAAAUQAAAKgGAFQgGAFgLAAQgWAAAAgUg");
	this.shape_7.setTransform(106,53.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4054").s().p("Ag3BXQgPgVAAglQgBglARgUQAPgWAbAAQAcAAAPAXIACAAQgDgRAAgOIAAgxIAqAAIAADUIghAAIgIgUIgBAAQgPAXgcgBQgbABgPgVgAgVgEQgHALAAAWQAAAXAHALQAJALANAAQAQAAAHgJQAIgJAAgWIAAgFQABgYgIgKQgHgLgSAAQgMAAgJAMg");
	this.shape_8.setTransform(92.5,53.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4054").s().p("AgwA7QgWgVAAglQABglATgVQATgVAhAAQAgAAASASQASATAAAgIAAAUIhhAAQABARAJAKQAKAKARAAQAOAAAMgCQANgDANgHIAAAgQgLAGgMACQgNADgSAAQgkAAgUgUgAAggQQgBgQgIgIQgHgJgOAAQgMAAgIAJQgHAIgBAQIA6AAIAAAAg");
	this.shape_9.setTransform(75.9,56.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4054").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_10.setTransform(62.6,56.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4054").s().p("Ag8ABQAAgmATgVQAUgUAjAAQAaAAAVAKIgMAhIgSgHQgJgCgIAAQgggBAAAuQAAAsAgABQAMAAAKgEQAKgDALgHIAAAkQgKAGgLADQgKACgQAAQhGAAAAhOg");
	this.shape_11.setTransform(48.4,56.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4054").s().p("AgxBOIAAiYIAgAAIAGAaIACAAQAHgNALgIQAMgIAOAAIAPABIgEAnIgMgBQgUAAgLAKQgKALAAARIAABOg");
	this.shape_12.setTransform(28.3,56.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4054").s().p("AgmBFQgRgJgJgSQgJgSAAgYQAAglATgVQAUgUAiAAQAWAAARAKQARAJAJASQAJARAAAYQAAAlgUAVQgTAVgjAAQgVAAgRgKgAgXghQgIALAAAWQAAAXAIALQAHAMAQAAQARgBAHgKQAHgMAAgXQAAgWgHgLQgHgLgRAAQgQAAgHALg");
	this.shape_13.setTransform(12.5,56.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4054").s().p("AgiBrIAAh5IgXAAIAAgTIAXgMIAAgLQAAgaANgMQANgMAbAAQAWAAARAGIgLAfQgMgEgLAAQgJAAgEAFQgEAFAAAJIAAAJIAkAAIAAAfIgkAAIAAB5g");
	this.shape_14.setTransform(-0.7,53.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4054").s().p("Ag7BkQgRgLAAgUQAAgOAJgJQAIgJARgFQgGgCgGgHQgEgGAAgGQgBgKAGgEQAFgGAJgFQgMgGgGgMQgIgLAAgPQABgaAQgNQAQgOAeAAIAPABIAKACIA2AAIAAAWIgYAGQAGAJABANQgBAZgRAOQgRAOgdAAIgIgBIgGAAQgHAFABAEQgBAKAXgBIAZAAQAaABANAKQANALAAAVQAAAagWAPQgXAPgpABQggAAgQgMgAggAzQgIAGAAAJQAAAIAJAFQAHAFAPAAQAWAAAMgGQANgGAAgLQAAgJgHgDQgIgDgQAAIgUAAQgMAAgHAFgAgZg6QAAAMAGAIQAFAHAMAAQALAAAGgHQAFgIAAgMQAAgbgWgBQgXABAAAbg");
	this.shape_15.setTransform(114.2,27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4054").s().p("AAdBOIAAhZQAAgQgGgIQgGgJgNAAQgQAAgIAMQgIAMAAAaIAABIIgqAAIAAiYIAgAAIAGATIACAAQAHgLANgFQALgGAPAAQAbAAANAPQAOAOABAbIAABjg");
	this.shape_16.setTransform(97.3,24.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4054").s().p("AgUBqIAAiYIApAAIAACYgAgWhVQAAgUAWAAQAXAAAAAUQAAAKgGAFQgGAFgLAAQgWAAAAgUg");
	this.shape_17.setTransform(83.8,21.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4054").s().p("AhGBwIAAjcIAiAAIAFAUIACAAQAPgWAcgBQAbAAAPAVQAPAVAAAlQAAAZgHARQgHASgNAKQgOAIgRABQgaAAgQgUIgCAAIACAWIAAA/gAgVhEQgHAKgBAVIAAAFQAAAYAIALQAHAKAPAAQAcAAAAgtQAAgXgHgLQgHgLgPAAQgOAAgHAJg");
	this.shape_18.setTransform(71.1,27.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4054").s().p("AhGBwIAAjcIAiAAIAFAUIACAAQAPgWAcgBQAbAAAPAVQAPAVAAAlQAAAZgHARQgHASgNAKQgOAIgRABQgaAAgQgUIgCAAIACAWIAAA/gAgVhEQgHAKgBAVIAAAFQAAAYAIALQAHAKAPAAQAcAAAAgtQAAgXgHgLQgHgLgPAAQgOAAgHAJg");
	this.shape_19.setTransform(53.4,27.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4054").s().p("AgmBFQgRgJgJgSQgJgSAAgYQAAgkATgWQAUgUAiAAQAWAAARAKQARAJAJASQAJASAAAXQAAAlgUAVQgTAVgjAAQgVAAgRgKgAgXghQgIALAAAWQAAAXAIALQAHAMAQAAQARAAAHgMQAHgLAAgXQAAgWgHgLQgHgMgRAAQgQAAgHAMg");
	this.shape_20.setTransform(35.5,24.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4054").s().p("AAdBqIAAhZQAAgggZAAQgRAAgHAMQgIALAAAaIAABIIgpAAIAAjTIApAAIAAArIgBAYIgBAMIACAAQAOgWAdAAQAbAAAPAOQANAPAAAaIAABjg");
	this.shape_21.setTransform(17.7,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4054").s().p("AhABbIAAgnQAUAJAOADQAOAEAMAAQAMAAAIgFQAHgGAAgKQAAgGgCgFQgEgEgGgEIgZgOQgTgJgIgHQgKgHgGgLQgFgLAAgOQAAgaASgPQASgQAfAAQAQAAANAEQAOAEAQAHIgOAhQgQgHgKgDQgKgCgKAAQgLAAgHAFQgGAGgBAJQABAGACAEQADAEAFAEQAGAEAUAKQAcANALANQAKANAAAUQAAAbgUAPQgTAQgiAAQggAAgYgMg");
	this.shape_22.setTransform(0.8,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-9,0,191,106.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Blackgirl_Bigbox11();
	this.instance.parent = this;
	this.instance.setTransform(160.3,14.3,1.032,1.032,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-18.2,14.3,178.5,245.6), null);


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
(lib._300x250_rates_cre = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:71,regY:137,x:224,y:385.5},0).wait(1).to({y:384},0).wait(1).to({y:381.2},0).wait(1).to({y:376.5},0).wait(1).to({y:369.3},0).wait(1).to({y:358.2},0).wait(1).to({y:340},0).wait(1).to({y:306},0).wait(1).to({y:237.8},0).wait(1).to({y:189.1},0).wait(1).to({y:165.1},0).wait(1).to({y:150.8},0).wait(1).to({y:141.5},0).wait(1).to({y:135.4},0).wait(1).to({y:131.3},0).wait(1).to({y:128.8},0).wait(1).to({y:127.4},0).wait(1).to({regX:104,regY:130.1,x:257,y:120.1},0).wait(132).to({regX:71,regY:137,x:225.2,y:127},0).wait(1).to({x:230},0).wait(1).to({x:240.9},0).wait(1).to({x:265.2},0).wait(1).to({x:327.7},0).wait(1).to({x:378.7},0).wait(1).to({x:398.9},0).wait(1).to({x:408.4},0).wait(1).to({x:412.8},0).wait(1).to({regX:104,regY:130.1,x:447,y:120.1},0).to({_off:true},1).wait(196));

	// explore
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(158.6,276.2,1,1,0,0,0,89.8,29.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(155).to({_off:false},0).wait(1).to({regX:85.2,regY:42,x:154,y:288.6},0).wait(1).to({y:286.9},0).wait(1).to({y:283.4},0).wait(1).to({y:276.6},0).wait(1).to({y:261.6},0).wait(1).to({y:224.5},0).wait(1).to({y:203.8},0).wait(1).to({y:195.5},0).wait(1).to({y:191.4},0).wait(1).to({y:189.6},0).wait(1).to({regX:89.8,regY:29.1,x:158.6,y:176.2},0).to({_off:true},90).wait(100));

	// headline2
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125.5,61.6,1,1,0,0,0,95.5,72.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).wait(1).to({regX:38.8,regY:71.3,x:68.8,y:60.9,alpha:0.008},0).wait(1).to({y:62.1,alpha:0.037},0).wait(1).to({y:64.7,alpha:0.101},0).wait(1).to({y:69.9,alpha:0.233},0).wait(1).to({y:79.7,alpha:0.479},0).wait(1).to({y:89.4,alpha:0.722},0).wait(1).to({y:94.9,alpha:0.859},0).wait(1).to({y:97.9,alpha:0.934},0).wait(1).to({y:99.5,alpha:0.974},0).wait(1).to({y:100.3,alpha:0.994},0).wait(1).to({regX:95.5,regY:72.3,x:125.5,y:101.6,alpha:1},0).wait(65).to({regX:38.8,regY:71.3,x:67.4,y:100.6},0).wait(1).to({x:62.1},0).wait(1).to({x:50},0).wait(1).to({x:23.1},0).wait(1).to({x:-46.4},0).wait(1).to({x:-103},0).wait(1).to({x:-125.4},0).wait(1).to({x:-136},0).wait(1).to({x:-140.8},0).wait(1).to({regX:95.5,regY:72.3,x:-85.5,y:101.6},0).to({_off:true},1).wait(196));

	// highlite
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(25.1,82.2,0.123,0.486,0,4.5,10.6,-3.5,61.1);
	this.instance_7.alpha = 0.148;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},0).wait(1).to({regX:81.7,regY:162.3,scaleX:0.24,skewY:9.1,x:40.3,y:134.5,alpha:0.364},0).wait(1).to({scaleX:0.44,skewY:6.3,x:56,y:135.6,alpha:0.745},0).wait(1).to({scaleX:0.52,skewY:5.3,x:61.8,y:135.5,alpha:0.884},0).wait(1).to({scaleX:0.55,skewY:4.9,x:64.4,y:135.4,alpha:0.948},0).wait(1).to({scaleX:0.57,skewY:4.6,x:65.8,y:135.3,alpha:0.98},0).wait(1).to({scaleX:0.58,rotation:4.5,skewX:0,skewY:0,x:66.4,alpha:0.996},0).wait(1).to({regX:-2.8,regY:61.4,scaleX:0.58,x:21.1,y:82.3,alpha:1},0).wait(51).to({regX:-2.6,regY:61.5,scaleX:0.56,x:23.1,y:82.4},0).wait(1).to({regX:81.7,regY:162.3,scaleX:0.56,x:65.1,y:135},0).wait(1).to({scaleX:0.56,x:59.6},0).wait(1).to({scaleX:0.55,x:47.2},0).wait(1).to({scaleX:0.54,x:19.3,y:135.1},0).wait(1).to({scaleX:0.51,x:-52.6,y:135.2},0).wait(1).to({scaleX:0.48,x:-111.2,y:135.3},0).wait(1).to({scaleX:0.47,x:-134.5,y:135.2},0).wait(1).to({scaleX:0.47,x:-145.4,y:135.3},0).wait(1).to({scaleX:0.46,x:-150.4},0).wait(1).to({regX:-2.8,regY:61.4,x:-187,y:83.4},0).to({_off:true},1).wait(196));

	// headline
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(133.5,-83.8,1,1,0,0,0,95.5,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:57.7,regY:53.6,x:95.7,y:-85},0).wait(1).to({y:-83.9},0).wait(1).to({y:-81.8},0).wait(1).to({y:-78.4},0).wait(1).to({y:-73.1},0).wait(1).to({y:-65},0).wait(1).to({y:-51.7},0).wait(1).to({y:-26.7},0).wait(1).to({y:23.3},0).wait(1).to({y:59},0).wait(1).to({y:76.6},0).wait(1).to({y:87.1},0).wait(1).to({y:93.9},0).wait(1).to({y:98.4},0).wait(1).to({y:101.4},0).wait(1).to({y:103.3},0).wait(1).to({y:104.3},0).wait(1).to({regX:95.5,regY:55.2,x:133.5,y:106.2},0).wait(54).to({regX:57.7,regY:53.6,x:95.7,y:104.8,alpha:0.992},0).wait(1).to({y:105.5,alpha:0.963},0).wait(1).to({y:107.1,alpha:0.899},0).wait(1).to({y:110.4,alpha:0.767},0).wait(1).to({y:116.6,alpha:0.521},0).wait(1).to({y:122.7,alpha:0.278},0).wait(1).to({y:126.1,alpha:0.141},0).wait(1).to({y:127.9,alpha:0.066},0).wait(1).to({y:129,alpha:0.026},0).wait(1).to({y:129.5,alpha:0.006},0).wait(1).to({regX:95.5,regY:55.2,x:133.5,y:131.2,alpha:0},0).to({_off:true},1).wait(273));

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
p.nominalBounds = new cjs.Rectangle(149.5,-54.1,313.7,687.9);
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