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



(lib._300600_yello2 = function() {
	this.initialize(img._300600_yello2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,444);// helper functions:

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
	this.shape.graphics.f("#FFFFFF").s().p("AgTAVQgIgIAAgNQAAgMAHgIQAIgHAMAAQANAAAIAHQAHAIAAAMQAAAMgHAIQgIAIgNgBQgNAAgGgGg");
	this.shape.setTransform(75,104.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBaIgOg/IgThPIAAAAIggCOIg1AAIg0izIAxAAIAVBQQAFAUAFAmIABAAQABgNAFgaIACgNIAWhWIA1AAIAWBWIACAKIACAOIADAQIABAMIABAAIAFggIAFgaIAWhQIAwAAIgzCzg");
	this.shape_1.setTransform(57.5,98);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBSQgUgLgLgWQgKgVAAgcQAAgrAXgZQAXgYAoAAQAaAAAUALQAUALALAVQAKAVAAAcQAAAsgXAZQgXAYgpAAQgaAAgTgLgAgcgnQgIANAAAaQAAAbAJANQAIAOATAAQAUAAAIgOQAJgNAAgbQAAgagJgNQgIgOgUAAQgTAAgJAOg");
	this.shape_2.setTransform(33.9,97.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBcIAAhoQAAgUgHgKQgHgJgPAAQgUAAgJANQgJAOAAAfIAABVIgxAAIAAizIAmAAIAGAXIADAAQAIgNAOgHQANgHATAAQAgAAAQARQAQARAAAgIAAB1g");
	this.shape_3.setTransform(12.9,97.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGB2QgUgNAAgXQAAgRAKgLQALgLATgFQgHgDgGgHQgGgHAAgJQAAgKAGgGQAGgHAMgGQgPgHgIgNQgIgOAAgSQAAgeATgQQATgPAkgBIARACIANACIA/AAIAAAZIgcAHQAHAMAAAPQAAAdgUAQQgUAQgjAAIgJAAIgHAAQgIAFAAAGQAAALAbAAIAeAAQAeAAAPANQAQAMAAAZQAAAggbARQgaARgwAAQgmAAgUgNgAgmA9QgJAGAAAKQAAALAKAFQAJAGASAAQAZAAAPgHQAPgIAAgMQAAgKgJgEQgJgDgSAAIgZAAQgNgBgJAHgAgdhEQAAAPAGAIQAHAJAOAAQANAAAGgJQAGgIAAgPQAAghgZABQgbgBAAAhg");
	this.shape_4.setTransform(78.8,62.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBcIAAhoQAAgUgHgKQgHgJgPAAQgUAAgJANQgJAOAAAfIAABVIgxAAIAAizIAmAAIAGAXIADAAQAIgNAOgHQANgHATAAQAgAAAQARQAQARAAAgIAAB1g");
	this.shape_5.setTransform(58.9,58.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXB9IAAizIAwAAIAACzgAgahkQAAgYAaAAQAbAAAAAYQAAALgHAGQgGAHgOAAQgaAAAAgYg");
	this.shape_6.setTransform(43,55.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiB9IAAhpQAAgmgdAAQgUAAgJAOQgJANAAAfIAABVIgxAAIAAj5IAxAAIAAAzIgBAcIgBAOIACAAQARgaAjAAQAfAAAQARQARARAAAfIAAB1g");
	this.shape_7.setTransform(27.2,55.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYBgQgOgPAAgeIAAhVIgXAAIAAgVIAbgRIAOgmIAeAAIAAAnIAyAAIAAAlIgyAAIAABVQAAALAGAFQAGAFAJAAQAOAAARgGIAAAlQgSAIgbAAQgcAAgNgPg");
	this.shape_8.setTransform(9,57.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABPQgPgPAAgbQAAgdAUgNQAUgNAngBIAfgCIAAgHQAAgcgcAAQgUAAgdANIgRghQAfgQAlgBQAlAAATAQQATAQAAAhIAAB3IgiAAIgKgZIgBAAQgMAQgNAGQgNAGgVgBQgaAAgOgOgAAMAIQgUAAgKAIQgLAGAAAPQAAAVAYAAQAQAAAKgKQAKgKAAgQIAAgPg");
	this.shape_9.setTransform(70,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpBbQgOgDgMgFIAAgpQAOAHARAEQARAFANAAQAaAAAAgQQAAgGgEgDQgDgEgJgEIgWgLQgVgJgKgGQgKgIgEgJQgEgKAAgOQAAgYASgNQATgNAhAAQAhAAAeAOIgPAjIgZgJQgMgEgMAAQgVAAAAAMQAAAHAHAEQAHAFAXAKQAVAIAKAIQAKAGAFAKQAEAJAAAOQAAAbgTAPQgTAOgmAAQgTAAgOgCg");
	this.shape_10.setTransform(43.9,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPArIgHhVIAsAAIgGBVg");
	this.shape_11.setTransform(32.3,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBgQgOgPAAgeIAAhVIgXAAIAAgVIAbgRIAOgmIAeAAIAAAnIAyAAIAAAlIgyAAIAABVQAAALAGAFQAGAFAJAAQANAAATgGIAAAlQgTAIgaAAQgdAAgNgPg");
	this.shape_12.setTransform(19.9,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYB2IAAjrIAxAAIAADrg");
	this.shape_13.setTransform(7.5,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,-8.1,90.5,126.7), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C4157").s().p("AgTAVQgIgIAAgNQAAgMAHgHQAIgIAMAAQANAAAIAIQAHAHAAAMQAAAMgHAIQgIAIgNgBQgNAAgGgGg");
	this.shape.setTransform(95.1,58.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C4157").s().p("AgpBbQgOgDgMgFIAAgpQAOAHARAEQARAFANAAQAaAAAAgQQAAgGgEgDQgDgEgJgEIgWgLQgVgJgKgGQgKgIgEgJQgEgKAAgOQAAgYASgNQATgNAhAAQAhAAAeAOIgPAjIgZgJQgMgEgMAAQgVAAAAAMQAAAHAHAEQAHAFAXAKQAVAIAKAIQAKAGAFAKQAEAJAAAOQAAAbgTAPQgTAOgmAAQgTAAgOgCg");
	this.shape_1.setTransform(82.3,52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C4157").s().p("AhBBmQgSgYAAgsQAAgrATgZQARgZAhAAQAhAAASAbIABAAQgDgUAAgQIAAg6IAxAAIAAD6IgmAAIgJgYIgCAAQgRAbghAAQggAAgSgZgAgYgFQgKANAAAbQAAAaAKAOQAJANAQAAQATAAAJgLQAIgLABgaIAAgGQAAgdgJgLQgIgNgVAAQgPAAgJAOg");
	this.shape_2.setTransform(63.1,48.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C4157").s().p("Ag5BcIAAizIAlAAIAHAeIACAAQAJgPANgJQAOgKARAAIARACIgFAuIgOgCQgYAAgNAMQgMAMAAAVIAABcg");
	this.shape_3.setTransform(47.3,51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C4157").s().p("AhABPQgPgPAAgcQAAgcAUgMQAUgOAngBIAfgBIAAgJQAAgbgcAAQgUAAgdANIgRghQAfgQAlAAQAlgBATARQATAPAAAgIAAB3IgiAAIgKgYIgBAAQgMAPgNAHQgNAGgVAAQgaAAgOgPgAAMAHQgUABgKAHQgLAIAAAOQAAAVAYAAQAQAAAKgKQAKgKAAgQIAAgPg");
	this.shape_4.setTransform(28.4,52);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C4157").s().p("AhHABQAAgtAWgYQAXgYAqAAQAfAAAZAMIgOAmIgWgIQgKgDgKAAQglAAAAA2QAAA1AlAAQAOAAAMgEQAMgEAMgIIAAAqQgLAIgNADQgMACgSAAQhTAAAAhcg");
	this.shape_5.setTransform(10.7,52);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C4157").s().p("AgYBgQgOgPAAgeIAAhVIgXAAIAAgVIAbgRIAOgmIAeAAIAAAnIAyAAIAAAlIgyAAIAABVQAAALAGAFQAGAFAJAAQANAAATgGIAAAlQgTAIgaAAQgdAAgNgPg");
	this.shape_6.setTransform(147.3,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C4157").s().p("AgXB9IAAizIAwAAIAACzgAgahkQAAgYAaAAQAbAAAAAYQAAALgHAGQgGAHgOAAQgaAAAAgYg");
	this.shape_7.setTransform(135.2,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C4157").s().p("AhBBmQgSgYAAgsQAAgrASgZQATgZAgAAQAhAAASAbIACAAQgEgUAAgQIAAg6IAxAAIAAD6IglAAIgKgYIgCAAQgRAbghAAQggAAgSgZgAgYgFQgJANAAAbQAAAaAJAOQAJANAQAAQATAAAJgLQAJgLABgaIAAgGQgBgdgIgLQgKgNgTAAQgQAAgJAOg");
	this.shape_8.setTransform(119.3,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C4157").s().p("Ag5BFQgZgYAAgsQAAgsAXgYQAWgZAnAAQAnAAAUAVQAWAWAAAnIAAAWIhzAAQABAVALAMQALAMAVAAQAQAAAOgDQAPgEAPgHIAAAmQgNAGgOADQgOADgWAAQgqAAgYgYgAAkgTQAAgSgJgKQgJgKgPAAQgPAAgJAKQgJAKgBASIBDAAIAAAAg");
	this.shape_9.setTransform(99.7,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C4157").s().p("Ag5BcIAAizIAlAAIAHAeIACAAQAIgPAOgJQAOgKARAAIARACIgFAuIgOgCQgXAAgNAMQgNAMAAAVIAABcg");
	this.shape_10.setTransform(84.1,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C4157").s().p("AhHABQAAgtAWgYQAXgYAqAAQAfAAAZAMIgOAmIgWgIQgKgDgKAAQglAAAAA2QAAA1AlAAQAOAAAMgEQAMgEAMgIIAAAqQgLAIgNADQgMACgSAAQhTAAAAhcg");
	this.shape_11.setTransform(67.4,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C4157").s().p("Ag6BcIAAizIAmAAIAHAeIACAAQAJgPANgJQAOgKARAAIAQACIgEAuIgOgCQgYAAgNAMQgMAMABAVIAABcg");
	this.shape_12.setTransform(43.6,13);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C4157").s().p("AgtBSQgUgLgLgWQgKgVAAgcQAAgrAXgZQAXgYAoAAQAaAAAUALQAUALALAVQAKAVAAAcQAAAsgXAZQgXAYgpAAQgaAAgTgLgAgcgnQgIANAAAaQAAAbAJANQAIAOATAAQAUAAAIgOQAJgNAAgbQAAgagJgNQgIgOgUAAQgTAAgJAOg");
	this.shape_13.setTransform(25,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4157").s().p("AgoB+IAAiOIgbAAIAAgYIAbgNIAAgNQAAgfAQgOQAOgOAhAAQAZAAAUAHIgMAkQgPgEgNAAQgKAAgFAGQgFAGAAAKIAAALIArAAIAAAlIgrAAIAACOg");
	this.shape_14.setTransform(9.5,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4157").s().p("AhGB2QgUgNAAgXQAAgRAKgLQALgLATgEQgHgEgGgHQgGgHAAgJQAAgKAGgGQAGgGAMgHQgPgHgIgNQgIgNAAgTQAAgeATgPQATgQAkgBIARACIANACIA/AAIAAAZIgcAHQAHAMAAAPQAAAdgUAQQgUAQgjABIgJgBIgHAAQgIAFAAAGQAAALAbAAIAeAAQAeAAAPANQAQAMAAAZQAAAfgbASQgaARgwAAQgmAAgUgNgAgmA8QgJAHAAAKQAAALAKAFQAJAGASAAQAZAAAPgHQAPgHAAgNQAAgKgJgEQgJgEgSABIgZAAQgNAAgJAFgAgdhEQAAAPAGAIQAHAJAOgBQANABAGgJQAGgIAAgPQAAghgZAAQgbAAAAAhg");
	this.shape_15.setTransform(144.8,-21.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4157").s().p("AAiBcIAAhoQAAgUgHgKQgHgJgPAAQgUAAgJANQgJAOAAAfIAABVIgxAAIAAizIAmAAIAGAXIADAAQAIgNAOgHQANgHATAAQAfAAARARQAQARAAAgIAAB1g");
	this.shape_16.setTransform(124.9,-25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4157").s().p("AgXB9IAAizIAwAAIAACzgAgahkQAAgYAaAAQAbAAAAAYQAAALgHAGQgGAHgOAAQgaAAAAgYg");
	this.shape_17.setTransform(108.9,-29.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4157").s().p("AhTCDIAAkCIAoAAIAGAXIADAAQARgbAhAAQAgAAASAZQASAZAAArQAAAdgIAVQgJAVgQALQgPALgWAAQgeAAgSgXIgDAAIADAaIAABJgAgZhQQgJALAAAaIAAAFQAAAeAJALQAIAMASAAQAhAAAAg1QAAgbgIgNQgJgNgRAAQgRAAgIALg");
	this.shape_18.setTransform(94.1,-21.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4157").s().p("AhTCDIAAkCIAoAAIAHAXIACAAQARgbAhAAQAgAAASAZQASAZAAArQAAAdgJAVQgIAVgPALQgQALgWAAQgeAAgSgXIgCAAIACAaIAABJgAgZhQQgJALAAAaIAAAFQAAAeAJALQAIAMASAAQAhAAAAg1QAAgbgIgNQgIgNgSAAQgRAAgIALg");
	this.shape_19.setTransform(73.2,-21.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4157").s().p("AgtBSQgUgLgLgWQgKgVAAgcQAAgrAXgZQAXgYAoAAQAaAAAUALQAUALALAVQAKAVAAAcQAAAsgXAZQgXAYgpAAQgaAAgTgLgAgcgnQgIANAAAaQAAAbAJANQAIAOATAAQAUAAAIgOQAJgNAAgbQAAgagJgNQgIgOgUAAQgTAAgJAOg");
	this.shape_20.setTransform(52,-25.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4157").s().p("AAiB9IAAhpQAAgmgdAAQgUAAgJAOQgJANAAAfIAABVIgxAAIAAj5IAxAAIAAAzIgBAcIgCAOIADAAQAQgaAkAAQAfAAARARQAQARAAAfIAAB1g");
	this.shape_21.setTransform(31.1,-29.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4157").s().p("AhMBrIAAgvQAYALARAFQAQAEAOAAQAPAAAJgHQAJgFAAgNQAAgHgEgFQgEgGgHgEIgegRQgVgKgLgIQgLgJgGgNQgHgNAAgQQAAgfAVgSQAWgSAkAAQASAAARAEQARAFASAIIgQAmQgTgIgMgCQgNgDgMgBQgNAAgHAHQgIAHAAAKQAAAHADAFQADAFAHAEQAGAFAYAMQAhAQANAPQAMAPAAAXQAAAggXATQgXASgoAAQgmAAgdgOg");
	this.shape_22.setTransform(11.2,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,-54,156.8,126.7), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape.setTransform(154.5,22.8,0.43,0.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAPCnIgKAAQhAgGgmgnQgmgpgEhGIAAgVQAEhGAngpQAmgoA/gEIAKgBIAHAAQAYAAAXAFQAhAHATARQAbAXgNAcQgJAUgOAFQgQgYgfgHQgPgEgaAAQgkAAgTAZQgUAZAAAuQAAAvAUAZQATAZAkAAQAaAAAPgEQAfgIAQgXQANAEAKAVQANAcgbAXQghAdhCAAg");
	this.shape_1.setTransform(163.1,17.2,0.43,0.43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AhvCQQgigZAAg0QAAhwC+AAIAAgPQAAgqg3AAQggAAgiAPIgcAPQgFgDgFgGQgLgNAAgTQAAgWAmgPQAmgOA0AAQCAAAgBBnIAACmQABAVAHAPQAEAHAEAEQgDADgGACQgNAGgUAAQgYAAgKgIQgKgIgIgWQgJAKgQAKQgfAUggAAQguAAgdgVgAghAQQgdAOABAcQAAAZAPAMQAMAJATAAQAVAAAUgLQAXgMgBgQIAAhBQg0ABgdAPg");
	this.shape_2.setTransform(177,17.3,0.43,0.43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCDZQgLgIgOgYIhOiEIglAAIAACqIhdAAIAAnAIAjgCQAqgDAmAAQBTAAAsAVQBBAfAABRQAAA0gdAkQgWAagkAQIBzC7QgDADgJACQgRAGgbAAQgdAAgRgOgAhKikIAACeIAKAAQA7ABAagXQAYgVAAgqQAAglgYgUQgXgSgrAAQgSAAgLACg");
	this.shape_3.setTransform(93.5,14.3,0.43,0.43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBeAAIAABFIheAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_4.setTransform(120.7,15.1,0.43,0.43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhbCcQghgOAAgZQAAgVALgPQAGgHAFgEIAaARQAgAQAdAAQAbAAAMgIQALgJAAgSQAAgVgZgLIg2gPQhQgWAAhEQAAgzAqgaQAjgVA2AAQAyAAAeALQAhAMAAAXQAAASgLAQIgLAMQgKgIgQgIQghgQggAAQgSABgLAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1gfAeQgjAhhGAAQgwABgggNg");
	this.shape_5.setTransform(145.9,17.1,0.43,0.43);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhkB9QgtgtAAhTQAAhFAlgtQApgyBOAAQBGgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAlAAAZgSQANgJAGgJIANAIQAOAOAAAZQAAAZggAQQghAQgxAAQhTAAgsgrgAA/gjQAAhJg5AAQgcAAgQAUQgQATgCAiIB3AAIAAAAg");
	this.shape_6.setTransform(132.4,17.1,0.43,0.43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhxCTQgjgaAAg1QAAg5AygcQAxgdBfAAIAAgQQAAgqg4AAQggAAgkAPIgcAPQgFgCgGgHQgKgNAAgTQAAgXAngPQAmgOA2AAQCBAAAABpIAACpQAAAVAIAPQAEAIAEAEQgKALghAAQgYAAgLgIQgKgIgIgWQgJAKgQALQgfATgiAAQgvABgdgWgAghAPQgeAQAAAcQAAAaAQAMQAMAJATAAQAWAAAVgLQAWgMAAgRIAAhCQg1ABgdAOg");
	this.shape_7.setTransform(107.9,17.1,0.43,0.43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhlBxIAAlDIAJgCQALgDARAAQAZAAAOALQAPANAAAYIAAA1IBdAAIAABFIhdAAIAACVQAAATAKALQAKALATAAQAQAAASgLIAPgLIAMAIQAMAMAAAUQAAAWgcAPQgcAQgnAAQhsAAAAhng");
	this.shape_8.setTransform(79.6,15.1,0.43,0.43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhaCcQgigOAAgZQAAgVALgPQAGgHAFgEIAbARQAgAQAcAAQAbAAAMgIQAMgJAAgSQAAgVgZgLIg3gPQhQgWAAhEQAAgzAqgaQAjgVA3AAQAxAAAfALQAgAMAAAXQAAASgLAQIgLAMQgKgIgQgIQgggQggAAQgSABgMAGQgMAIAAAOQAAARAZAKQAOAFAoAKQBQAXAABBQAAA1geAeQgjAhhGAAQgxABgfgNg");
	this.shape_9.setTransform(67.7,17.1,0.43,0.43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhkB9QgtgsAAhUQAAhFAkgtQAqgyBNAAQBHgBAjAtQAeAkAAA+QAAAVgDASIjEAAQAAAoAWAXQAXAXApAAQAkAAAagSQANgJAFgJIAOAIQANAOAAAZQAAAZggAQQggAQgxAAQhTAAgsgrgAA/gjQAAgjgMgSQgOgUgfAAQgcAAgRAUQgPATgCAiIB3AAIAAAAg");
	this.shape_10.setTransform(54.2,17.1,0.43,0.43);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA7ChIg1iOIg7COIhEAAIh0k1IAMgGQAQgGAVAAQAVAAAMAJQAPALAJAaIA7CuIAthqIghhmIAJgGQANgGATAAQAVAAANAMQAOANAJAdIA2ChIAxixQALgmAuAAQAcAAAMAMIhrE1g");
	this.shape_11.setTransform(36.6,17,0.43,0.43);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzB7QgrgtAAhOQAAhNAsgtQAsguBIABQBKgBApAtQAqAsAABPQAABPgtAuQgsArhGAAQhIAAgrgtgAgvhKQgSAbAAAvQAAAyASAZQARAYAeAAQAeAAARgXQATgaAAgyQAAgxgRgZQgRgZgfAAQgeAAgSAZg");
	this.shape_12.setTransform(19.1,17.1,0.43,0.43);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiKDjIAAm/QAKgGAbAAQAYAAAPAMQARANAAAYIAAFKICLAAQAVAAAMAMQAMAMAAAWIAAAcg");
	this.shape_13.setTransform(5.2,14.2,0.43,0.43);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37BCB5").s().p("AgGAIQgDgDAAgFQAAgEADgCQADgDADAAQAEAAADACQADADAAAEQAAAFgDACQgDADgEAAQgEAAgCgCg");
	this.shape_14.setTransform(134.1,51.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37BCB5").s().p("AgBAwQgDgBgCgCIgEgHIgBgJIAAguIgOAAIAAgJIAOgBIAAgTIAOgDIAAAWIAVAAIAAAKIgVAAIAAAuQAAAFACACQACACAEAAQAEAAAHgDIAEAHQgFAEgFACQgGACgEAAQgFAAgCgCg");
	this.shape_15.setTransform(129.5,47.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#37BCB5").s().p("AgdAjQgGgGAAgLQAAgLAJgGQAIgEARAAIALAAIAAgMQAAgNgNAAQgIAAgFABIgCABIgCALIgKAAIAAgSIAPgFIAOgBQAFAAAFABQAFABADADQAHAFAAANIAAArIAMADIAAAIIgXABIgDgKQgGAFgEADQgGADgGAAQgLAAgGgFgAgPAIQgFADAAAGQAAAGADADQADADAFAAIAFgBIAEgDIAEgCIADgDIADgDIAAgMIgKAAQgLAAgEADg");
	this.shape_16.setTransform(122.7,48.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37BCB5").s().p("AAIA4IAAgIIAKgDIAAgoQAAgHgDgEQgDgDgGAAIgGABIgEACIgGADIgCADIgDABIAAAsIAJADIAAAIIgkAAIAAgIIAMgDIAAhZIgMgDIAAgIIAbAAIAAAsQAMgLALAAQAGAAAGACQAEACADADQACAEACAFQACAEgBAGIAAApIALADIAAAIg");
	this.shape_17.setTransform(113.9,46.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37BCB5").s().p("AgBAwQgDgBgCgCIgEgHIgBgJIAAguIgOAAIAAgJIAOgBIAAgTIAOgDIAAAWIAWAAIAAAKIgWAAIAAAuQAAAFACACQACACADAAQAFAAAHgDIAEAHQgFAEgFACQgGACgEAAQgEAAgDgCg");
	this.shape_18.setTransform(106.5,47.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37BCB5").s().p("AgXAeQgJgLAAgSQAAgIACgHQADgIAFgGQAEgFAHgDQAHgDAGAAQAQAAAHAIQAIAJAAARIgBAHIgxAAQAAAGABAFQACAFADADQAGAIAIAAIAHgBIAGgCIAFgCIAEgCIADgCIAFAIIgJAGIgKAEQgGACgGAAQgRAAgIgKgAASgIQAAgJgEgFQgEgGgIAAQgEAAgDACIgGAEQgFAGAAAIIAiAAIAAAAg");
	this.shape_19.setTransform(96.7,48.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37BCB5").s().p("AAVA4IgVglIgMAAIAAAaIAJADIAAAIIgkAAIAAgIIAMgDIAAhZIgMgDIAAgIIAbAAIAAA/IAMAAIAKgRIgGgCIAAgIIAggBIAAAJIgKABIgBAAIgPAWIATAhIALADIAAAIg");
	this.shape_20.setTransform(88.8,46.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37BCB5").s().p("AgSA4IAAgIIAMgDIAAg2IgMgDIAAgIIAagBIAABCIALADIAAAIgAgGglQgCgDAAgEQAAgFACgDQADgDADAAQAKAAAAALQgBAFgDACQgDACgDABQgDgBgDgCg");
	this.shape_21.setTransform(82.1,46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37BCB5").s().p("AgUA4IAAgIIANgDIAAhZIgNgDIAAgIIAaAAIAABkIAPADIAAAIg");
	this.shape_22.setTransform(77.6,46.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37BCB5").s().p("AAAAwQgDgBgDgCIgDgHIgBgJIAAguIgPAAIAAgJIAPgBIAAgTIANgDIAAAWIAWAAIAAAKIgWAAIAAAuQAAAFACACQACACADAAQAFAAAHgDIAEAHQgFAEgFACQgFACgFAAQgFAAgBgCg");
	this.shape_23.setTransform(69.3,47.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#37BCB5").s().p("AgJAoIgFAAIgFgBIgEgBIgDgBIgBgWIALAAIABANIAFABIAGAAQAJAAAEgDIADgDIABgFQAAgEgDgDIgHgEIgJgDIgKgEQgFgCgDgEQgDgEAAgGQAAgGACgEQACgEAEgDQAHgGAMAAIAKABIALACIADABIAAAUIgKAAIgCgLIgFgCIgHAAIgEAAIgEACIgDADIgBAEQAAAFADACIAIAEIAJADIAJAFQAFABADAEQADAEAAAGQAAAHgDAEQgCAFgFADQgEADgGACQgGABgGAAg");
	this.shape_24.setTransform(63,48.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#37BCB5").s().p("AgSAmQgEgCgDgEQgGgGAAgNIAAgoIgMgDIAAgIIAbgBIAAAzQAAAHADAEQADAEAGAAQAFAAAGgDIAHgFIADgEIAAgqIgMgDIAAgIIAbgBIAABCIAMACIAAAJIgYAAIgBgKQgHAFgHAEQgHACgFAAQgGAAgFgBg");
	this.shape_25.setTransform(55,48.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#37BCB5").s().p("AgYA9IACgLIAHAAQANAAAAgNIAAhWIgMgDIAAgIIAngBIAAAJIgNADIAABTQAAAGgBAGQgCAFgEAEQgEADgEACQgFACgGAAg");
	this.shape_26.setTransform(47.4,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-0.7,4.4,184.1,55.8), null);


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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outlined-icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36BBB3").s().p("AgeByQgZAAgSgRQgRgSAAgYQAAg+A2grIgZgZQgEgFAAgGQAAgHAFgEQAIgGAHgDQAUgHAZAAQAmgBAWARQAFADABAIQAAAGgFAFIgZAZQA3ArAAA+QAAAZgSARQgRARgZAAgAgFgiQg3AiAAA3QAAAMAIAIQAJAKANgBIA9AAQANABAIgKQAJgIAAgMQAAg4g3giQgEgCgCgEQgBAEgEADgAgZhQIAZAaIACgFIAXgVQgOgEgLAAQgQAAgJAEg");
	this.shape.setTransform(226.4,49.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36BBB3").s().p("Aj5EmQgHAAgEgEQgEgFAAgGIAAjtIgrgBQgKABgDgKQgEgJAHgHIEykxQAEgEAGAAQAGAAAEAEIE1E1QAHAHgEAJQgDAJgKAAIgrAAIAAAjQAAAHgEAEQgEAEgHAAQgGAAgEgEQgFgEAAgHIAAgyQAAgGAFgEQAEgFAGAAIAVAAIkQkQIkOENIAWAAQAGAAAEAEQAFAFAAAGIAADtIHkAAQAHAAAEAEQAEAFAAAGQAAAGgEAFQgEAEgHAAg");
	this.shape_1.setTransform(202.7,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36BBB3").s().p("AAdB9QgFgEAAgHIAAjUIgvAAIAACGQAAAGgFAEQgEAFgGAAQgHAAgEgFQgEgEAAgGIAAiVQAAgHAEgEQAEgEAHAAIBNAAQAGAAAFAEQAEAEAAAHIAADjQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_2.setTransform(221.4,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36BBB3").s().p("AA2CHQgEgEAAgHIAAjoIhjAAIAADoQAAAHgEAEQgFAEgGAAQgGAAgEgEQgFgEAAgHIAAj3QAAgHAFgEQAEgEAGAAICBAAQAGAAAEAEQAFAEAAAHIAAD3QAAAHgFAEQgEAEgGAAQgGAAgFgEg");
	this.shape_3.setTransform(202.8,46.8);

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
	this.shape_22.setTransform(405.3,44.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#36BBB3").s().p("AhCAPQgGAAgFgEQgEgEAAgHQAAgFAEgEQAFgFAGAAICFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAg");
	this.shape_23.setTransform(390.3,46.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#36BBB3").s().p("AgNAPQgHAAgEgEQgEgEAAgHQAAgFAEgEQAEgFAHAAIAbAAQAHAAAEAFQAEAEAAAFQAAAHgEAEQgEAEgHAAg");
	this.shape_24.setTransform(378.3,46.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#36BBB3").s().p("AicAPQgHAAgEgEQgEgFAAgGQAAgFAEgFQAEgEAHAAIE5AAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAg");
	this.shape_25.setTransform(381.3,42);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#36BBB3").s().p("AgiAPQgGAAgEgEQgFgEAAgHQAAgFAFgEQAEgFAGAAIBFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAg");
	this.shape_26.setTransform(369.1,46.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#36BBB3").s().p("AiVAqQgHAAgEgFQgEgEAAgGIAAg1QAAgGAEgEQAEgFAHAAIErAAQAGAAAFAFQAEAEAAAGIAAA1QAAAGgEAEQgFAFgGAAgAiGAMIENAAIAAgXIkNAAg");
	this.shape_27.setTransform(380.3,30);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#36BBB3").s().p("AjKC4QgiAAgYgZQgYgYAAghIAAjLQAAghAYgYQAYgZAiAAIGWAAQAhAAAYAZQAYAXAAAiIAADLQAAAhgYAYQgYAZghAAgAjviJQgPAPAAAVIAADLQAAAVAPAPQAPAPAWAAIGWAAQAVAAAPgPQAPgPAAgVIAAjLQAAgVgPgPQgPgQgVAAImWAAQgWAAgPAQg");
	this.shape_28.setTransform(386.9,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(3,0,493.3,61), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04BBB3").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAVgQAQQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(160.9,114.5,0.304,0.304);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#04BBB3").s().p("AAHDvQhbgHg2g6Qg4g7gFhjIgBgOIABgCIgBgBIABgOQAFhkA4g7QA3g5BbgHIAOgBIAIABIACgBQAiAAAhAIQAwAKAbAYQAnAigSAnQgOAdgUAIQgXgigsgLQgWgGgkAAQg1AAgcAkQgcAkAABCQAABDAcAkQAcAkA1AAQAkAAAWgFQAsgMAXgiQAUAIAOAdQASAngnAiQgbAYgwAKQghAIgiAAg");
	this.shape_1.setTransform(170.4,108.8,0.304,0.304);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#04BBB3").s().p("AifDPQgxglAAhKQAAhRBGgoQBFgoCGAAIAAgWQAAgdgSgOQgUgRgqAAQgtAAgxAWIgpAWQgHgEgIgKQgPgRAAgcQAAggA4gWQA1gUBMAAQC2AAAACUIAADvQAAAdALAWQAGAKAFAFQgDAEgKAEQgSAJgdgBQgiABgPgMQgPgMgKgfQgNAPgXAOQgtAdgvAAQhBAAgpgegAgvAWQgqAWAAAnQAAAlAWAQQARAOAbAAQAfAAAdgRQAggRAAgYIAAhcQhMABgoAVg");
	this.shape_2.setTransform(184.6,108.9,0.304,0.304);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A4052").s().p("ABeE2QgQgMgUgkIhvi6Ig0AAIAADwIiFAAIAAp8IAygEQA7gEA2AAQB3AAA/AeQBcAtAABzQAABKgpAzQgeAlg1AXICkEJQgFAFgMAEQgYAIgnAAQgpAAgYgTgAhpjrIAADiIANABQBVgBAlggQAigdAAg9QAAg0gigcQghgag9AAQgXAAgSACg");
	this.shape_3.setTransform(98.9,106,0.304,0.304);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A4052").s().p("AiQChIAAnMIAMgEQARgEAXAAQAjAAAVARQAWASAAAiIAABMICFAAIAABhIiFAAIAADVQAAAcAOAPQAOAQAbAAQAXAAAZgQQANgIAJgIIARALQARASAAAcQAAAfgoAXQgoAWg3AAQiaAAAAiTg");
	this.shape_4.setTransform(126.3,106.7,0.304,0.304);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A4052").s().p("AiBDdQgxgUABgjQAAgeAPgUQAJgLAHgEIAmAXQAtAWApAAQAnAAARgMQAQgMAAgaQABgdglgPIhNgXQg1gPgZgWQgkggAAg6QAAhKA7gkQAzgfBOAAQBGAAArAQQAvASAAAfQAAAcgPAWIgQARQgOgLgYgLQgugXgtABQgaAAgQAJQgTALABASQgBAZAlANQAUAJA5AOQByAhAABdQABBMgtAqQgxAwhkAAQhGAAgsgTg");
	this.shape_5.setTransform(151.7,108.8,0.304,0.304);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A4052").s().p("AiPCyQhAg/AAh3QAAhiA0hAQA8hJBuAAQBkAAAyA+QArA1AABYQAAAZgFAgIkXAAQABA4AeAgQAhAiA7AAQA0AAAlgaQASgNAIgNIATAMQATAUAAAjQAAAjguAYQguAXhGAAQh2AAg/g+gABagzQAAgygSgYQgTgdgsAAQgpAAgYAdQgVAagDAwICqAAIAAAAg");
	this.shape_6.setTransform(138.2,108.8,0.304,0.304);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A4052").s().p("AihDRQgyglAAhLQAAhRBHgpQBGgpCHAAIAAgWQAAgdgSgQQgTgQgrAAQguAAgyAWIgpAWQgHgEgIgJQgPgSAAgdQAAggA4gWQA3gUBMAAQC4AAAACWIAADyQAAAdAMAWQAFALAGAFQgEAEgJAEQgTAJgdgBQgiABgQgMQgPgMgLgfQgNAPgXAOQgsAdgwAAQhCAAgqgfgAgwAWQgqAWAAAoQAAAlAXARQARAOAbAAQAfAAAegRQAggSAAgYIAAhdQhNABgpAVg");
	this.shape_7.setTransform(113.4,108.8,0.304,0.304);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A4052").s().p("AiQChIAAnMIAMgEQARgEAXAAQAjAAAVARQAWASAAAiIAABMICFAAIAABhIiFAAIAADVQAAAcAOAPQAOAQAbAAQAXAAAagQQANgIAIgIIARALQARASAAAcQAAAfgoAXQgoAWg2AAQibAAAAiTg");
	this.shape_8.setTransform(84.9,106.7,0.304,0.304);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A4052").s().p("AiBDdQgwgUAAgjQAAgeAQgUQAIgLAIgEIAlAXQAtAWApAAQAnAAARgMQAQgMAAgaQAAgdgjgPIhOgXQg1gPgagWQgjggAAg6QAAhKA8gkQAygfBNAAQBHAAArAQQAvASAAAfQAAAcgQAWIgPARQgOgLgYgLQgugXguABQgaAAgQAJQgRALAAASQAAAZAjANQAVAJA5AOQByAhAABdQAABMgsAqQgxAwhkAAQhGAAgsgTg");
	this.shape_9.setTransform(72.9,108.8,0.304,0.304);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A4052").s().p("AiPCyQhAg/AAh3QAAhiA0hAQA8hJBuAAQBkAAAyA+QArA1AABYQAAAdgFAcIkXAAQABA4AeAgQAhAiA7AAQA0AAAlgaQASgNAIgNIATAMQATAUAAAjQAAAjguAYQguAXhGAAQh2AAg/g+gABagzQAAgygSgYQgTgdgsAAQgpAAgXAdQgWAagDAwICqAAIAAAAg");
	this.shape_10.setTransform(59.3,108.8,0.304,0.304);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A4052").s().p("ABVDlIhNjKIhUDKIhhAAIilm4IARgIQAWgJAgAAQAdAAASANQAUAPANAmIBUD4IA/iXIgtiSIAMgIQATgJAaAAQAeAAAUARQAUASANApQASA9A6CpIBHj7QAPg3BBAAQAYAAAUAIQAJAEAEAEIiZG5g");
	this.shape_11.setTransform(41.6,108.6,0.304,0.304);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A4052").s().p("AikCvQg+hAAAhvQAAhtBAhCQA+hABmAAQBqAAA7A+QA8BAAABxQAABwhCBCQg+A+hjAAQhnAAg9hBgAhDhpQgaAlAABEQAABHAZAkQAZAjArAAQAqAAAZgiQAbglAAhHQAAhGgZgkQgYgigsgBQgrAAgZAkg");
	this.shape_12.setTransform(23.9,108.8,0.304,0.304);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A4052").s().p("AjFFDIAAp9QAOgIAmAAQAkAAAVARQAXASAAAjIAAHWIDHAAQAeAAARARQARARAAAgIAAAng");
	this.shape_13.setTransform(10,105.8,0.304,0.304);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C4157").s().p("AgSBIQgLgKAAgXIAAhBIgSAAIAAgQIAVgMIALgdIAXAAIAAAdIAmAAIAAAcIgmAAIAABBQAAAIAFAEQAEADAHAAQAKABAOgFIAAAcQgPAGgTAAQgWAAgKgMg");
	this.shape_14.setTransform(183.9,78.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C4157").s().p("AgwA7QgMgKAAgVQAAgWAQgKQAPgKAdgBIAYAAIAAgHQAAgUgVAAQgQAAgWAKIgMgaQAYgMAbAAQAcAAAOAMQAPAMAAAYIAABaIgaAAIgHgSIgBAAQgKAMgKAEQgJAFgQAAQgTAAgLgMgAAKAGQgQAAgIAGQgIAFAAALQAAAPATABQALgBAIgGQAIgIAAgMIAAgMg");
	this.shape_15.setTransform(170.6,79.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C4157").s().p("AgfBFQgKgCgJgEIAAgfQAKAFANADQANADAKAAQATAAAAgLQAAgFgCgCQgDgDgHgEIgQgIQgQgGgHgFQgIgGgDgHQgEgHAAgLQAAgSAPgKQAOgKAZAAQAYAAAYALIgMAbIgTgHQgJgDgJAAQgQAAAAAJQAAAFAGADQAFAEARAHQAQAHAHAFQAIAFADAHQAEAIAAAKQAAAVgPALQgOALgcAAQgPAAgLgCg");
	this.shape_16.setTransform(150.9,79.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C4157").s().p("AAaBFIAAhOQAAgPgFgIQgGgHgLAAQgPAAgHAKQgGALAAAXIAABAIgmAAIAAiHIAdAAIAEARIADAAQAGgKALgFQAKgEANAAQAYgBAMANQANANAAAYIAABYg");
	this.shape_17.setTransform(136.5,79.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C4157").s().p("AgiA+QgPgJgIgQQgIgQAAgVQAAghARgSQASgTAfAAQATAAAPAJQAPAIAIAQQAIAQAAAVQAAAhgRATQgSATgfAAQgTAAgPgJgAgUgeQgHAKAAAUQAAAUAHAKQAGALAOAAQAPAAAHgKQAGgLAAgUQAAgTgGgLQgHgKgPAAQgOAAgGAKg");
	this.shape_18.setTransform(120.5,79.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C4157").s().p("AgSBfIAAiHIAlAAIAACHgAgThMQAAgSATAAQAUAAAAASQAAAJgFAFQgFAEgKABQgTAAAAgTg");
	this.shape_19.setTransform(109,77.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C4157").s().p("AgSBIQgKgKAAgXIAAhBIgSAAIAAgQIAUgMIALgdIAXAAIAAAdIAmAAIAAAcIgmAAIAABBQAAAIAFAEQAEADAHAAQAKABANgFIAAAcQgOAGgTAAQgWAAgKgMg");
	this.shape_20.setTransform(99.6,78.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C4157").s().p("Ag/BjIAAjDIAfAAIAFARIACAAQANgTAYAAQAYAAAOASQAOATAAAhQAAAWgHAPQgGAQgMAJQgMAIgQAAQgXAAgNgRIgCAAIACAUIAAA2gAgTg8QgGAIAAATIAAAFQAAAVAGAJQAHAKANAAQAZAAAAgoQAAgVgGgKQgHgKgNAAQgNAAgGAJg");
	this.shape_21.setTransform(86.8,82.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C4157").s().p("AgiA+QgPgJgIgQQgIgQAAgVQAAghARgSQASgTAfAAQATAAAPAJQAPAIAIAQQAIAQAAAVQAAAhgRATQgSATgfAAQgTAAgPgJgAgUgeQgHAKAAAUQAAAUAHAKQAGALAOAAQAPAAAHgKQAGgLAAgUQAAgTgGgLQgHgKgPAAQgOAAgGAKg");
	this.shape_22.setTransform(70.8,79.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C4157").s().p("AgxBOQgOgTAAghQAAghAPgSQANgTAZAAQAZAAANAUIABAAQgCgQgBgLIAAgsIAmAAIAAC9IgdAAIgHgSIgCAAQgMAUgZAAQgZAAgNgSgAgSgDQgHAJAAAUQAAAUAHALQAHAKAMAAQAOAAAHgJQAHgIAAgUIAAgEQAAgWgGgIQgIgKgPAAQgMAAgGALg");
	this.shape_23.setTransform(48.3,77.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C4157").s().p("AgsBFIAAiHIAdAAIAFAXIACAAQAHgMAJgGQALgIANABIAMABIgCAjIgLgBQgTgBgJAKQgJAIAAAQIAABFg");
	this.shape_24.setTransform(36.4,79.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C4157").s().p("AgwA7QgMgKAAgVQAAgWAQgKQAPgKAdgBIAYAAIAAgHQAAgUgVAAQgQAAgWAKIgMgaQAYgMAbAAQAcAAAOAMQAPAMAAAYIAABaIgaAAIgHgSIgBAAQgKAMgKAEQgJAFgQAAQgTAAgLgMgAAKAGQgQAAgIAGQgIAFAAALQAAAPATABQALgBAIgGQAIgIAAgMIAAgMg");
	this.shape_25.setTransform(22,79.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C4157").s().p("Ag2ABQAAgiASgSQARgTAfAAQAYAAATAJIgLAdIgQgFQgIgDgIAAQgcAAAAApQAAAoAcAAQALAAAJgDQAKgDAJgGIAAAgQgJAFgJACQgKADgOAAQg/AAAAhGg");
	this.shape_26.setTransform(8.6,79.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C4157").s().p("AgSBIQgKgKAAgXIAAhBIgTAAIAAgQIAVgMIALgdIAXAAIAAAdIAmAAIAAAcIgmAAIAABBQAAAHAFAFQAEADAHAAQAKAAAOgEIAAAcQgPAGgTAAQgWAAgKgMg");
	this.shape_27.setTransform(133,49.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C4157").s().p("AgSBfIAAiIIAlAAIAACIgAgThMQAAgSATAAQAUAAAAASQAAAJgFAFQgFAFgKAAQgTgBAAgSg");
	this.shape_28.setTransform(123.9,48.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2C4157").s().p("AgxBOQgOgTAAghQAAghAOgSQAOgTAYAAQAZAAAOAUIABAAQgCgQAAgLIAAgsIAlAAIAAC9IgdAAIgHgSIgBAAQgNAUgaAAQgXAAgOgSgAgSgDQgHAJAAAUQAAAUAHALQAHAKAMAAQAOAAAHgJQAGgIABgUIAAgEQAAgWgHgIQgGgKgQAAQgLAAgHALg");
	this.shape_29.setTransform(111.8,48.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C4157").s().p("AgrA1QgTgTAAghQAAghASgTQAQgTAeAAQAdAAAQARQAQAQAAAdIAAARIhXAAQAAAQAKAJQAIAJAPAAQANAAAKgDQALgCANgGIAAAdQgLAFgKACQgLADgQAAQggAAgTgSgAAcgOQAAgOgHgIQgHgHgMAAQgLAAgGAHQgHAIgBAOIAzAAIAAAAg");
	this.shape_30.setTransform(97,50.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C4157").s().p("AgsBFIAAiHIAcAAIAGAXIACAAQAGgLAKgIQALgGANAAIAMABIgCAjIgMgBQgRAAgKAJQgJAIAAAQIAABFg");
	this.shape_31.setTransform(85.1,50.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C4157").s().p("Ag2ABQAAgiASgSQARgTAfAAQAYAAATAJIgLAdIgQgFQgIgDgIAAQgcAAAAApQAAAoAcAAQALAAAJgDQAKgDAJgGIAAAgQgJAFgJACQgKADgOAAQg/AAAAhGg");
	this.shape_32.setTransform(72.4,50.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C4157").s().p("AgrBFIAAiHIAcAAIAFAXIACAAQAHgLAJgIQALgGAMAAIANABIgDAjIgKgBQgSAAgKAJQgJAIAAAQIAABFg");
	this.shape_33.setTransform(54.5,50.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C4157").s().p("AgyA4QgMgNAAgYIAAhYIAlAAIAABPQAAAPAFAIQAFAHAMAAQAOAAAHgLQAIgKgBgXIAAhBIAmAAIAACIIgdAAIgFgRIgCAAQgFAJgMAFQgKAGgNAAQgZgBgMgNg");
	this.shape_34.setTransform(39.9,51);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C4157").s().p("AgiA+QgPgJgIgQQgIgQAAgVQAAghARgSQASgTAfAAQATAAAPAJQAPAIAIAQQAIAQAAAVQAAAhgRATQgSATgfAAQgTAAgPgJgAgUgeQgHAKAAAUQAAAUAHAKQAGALAOAAQAPAAAHgKQAGgLAAgUQAAgTgGgLQgHgKgPAAQgOAAgGAKg");
	this.shape_35.setTransform(23.9,50.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C4157").s().p("Ag9BgIAAgdQAGABAIAAQAKAAAHgGQAIgGAEgMIACgHIg2iGIApAAIAZBNQAEAKAAAMIABAAQABgLAEgLIAZhNIAoAAIg6CZQgHAVgOALQgPAKgTAAQgKAAgJgCg");
	this.shape_36.setTransform(9.1,53.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C4157").s().p("AgrA1QgTgTAAghQAAghARgTQARgTAeAAQAdAAAQARQAQAQAAAdIAAARIhXAAQAAAQAKAJQAIAJAPAAQANAAALgDQALgCALgGIAAAdQgJAFgMACQgLADgQAAQgfAAgTgSgAAcgOQAAgOgHgIQgHgHgMAAQgLAAgHAHQgGAIgBAOIAzAAIAAAAg");
	this.shape_37.setTransform(87.6,21.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C4157").s().p("AgrBGIAAiIIAcAAIAFAXIACAAQAHgLAKgIQAKgGAMgBIAOACIgEAiIgLgBQgRABgKAIQgJAJAAAQIAABGg");
	this.shape_38.setTransform(75.7,21.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C4157").s().p("AgiA+QgPgJgIgQQgIgQAAgVQAAghARgSQASgTAfAAQATAAAPAJQAPAIAIAQQAIAQAAAVQAAAhgRATQgSATgfAAQgTAAgPgJgAgUgeQgHAKAAAUQAAAUAHAKQAGALAOAAQAPAAAHgKQAGgLAAgUQAAgTgGgLQgHgKgPAAQgOAAgGAKg");
	this.shape_39.setTransform(61.6,21.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C4157").s().p("AgSBfIAAi9IAlAAIAAC9g");
	this.shape_40.setTransform(50.1,19.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C4157").s().p("Ag/BkIAAjEIAfAAIAFASIACAAQANgVAYAAQAYABAOASQAOATAAAhQAAAWgHAPQgGAQgMAIQgMAJgQAAQgXAAgNgSIgCAAIACAUIAAA4gAgTg8QgGAIAAAUIAAAEQAAAVAGAKQAHAJANAAQAZAAAAgpQAAgTgGgKQgHgLgNAAQgNAAgGAJg");
	this.shape_41.setTransform(38.8,24.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C4157").s().p("AAdBEIgdgvIgcAvIgqAAIAuhEIgshDIArAAIAZArIAbgrIAqAAIgsBDIAuBEg");
	this.shape_42.setTransform(23.2,21.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2C4157").s().p("AgyBZIAAixIBlAAIAAAfIg/AAIAAAnIA7AAIAAAeIg7AAIAAAuIA/AAIAAAfg");
	this.shape_43.setTransform(9.4,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,200.1,116.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA1F58").s().p("AueHEIiYgIQg4gDggAFIgvACIguABIhMgCQgSgBACgYQADgLAAgFQABgJgGgGIACgHIAFgWQADgNAAgJQABgDgEgFIgGgIQAPgQgMgNIAMhAIgKgPQADgHABgEQABgHgCgFQgDgDABgEQAFgPgFgIQgCgBAAgFIAJguQAAgEgCgEQgHgNAHgKQAGgKgFgLIgBgMIAAgOIAAgLQABgGgCgDQgKgUAFgUIAJglIAKgOIAEgCQAEgDAHgRQAFgRgBgHIAAgUIgBgjQgBgVACgOQAGgogEgZQgEgRABgHQAAgMAGgKQABgBAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQgFgPAGgQIAMgcQABgDAEgDIAHgDQBqADA1ADQAJAAAPAEIAaAFQBWANAfADQBHAGBCAAQAgABBCgEQAHgBAOACICDgFIA8gCIAqACQAaACAQgBIA4gCIA4gFIDCgSIBogMQAMgBAUAAIAhAAICdAAQALgBAWgDQAXgEAKgBQAWgBAqgFQAmgDAbADQAqAEA/gDQAcgBA5gJQAOAAAcADQANACANAEIAOAKQAIAHAMgBIA+gHIAVgCQAEgBAGgJQAGgJAAgHIABgLIAoAAQArgDBAADIBqAGIAjABIAjACQAbgBA3gFQALgBAoAAIBRACIAJADIAKAFQgOALAEAUQAHAYgEAuIgCAMQAAAIAEAEQACACgEAHQgIAUAFAPIAAAIIgDAjIAAADQAJASgBAaQAAAPgEAeIgHAuQgEAZAKAZQACACAAADIgCA2QgCAYgKARIgGAMQgFAGgFABQgDABgBAIQgGAdgBALQAAAMAEAVQAAAGAFAQIADAXQABALgEAOQgLAhAGAhQACAKgEAPIgGAXIgGAdQgDAQgDAEQgEAEgMgBIiLgFQgNgBgUgDIghgGQg8gLgdgDQhSgGhUgCQgMgBgXACIgjACIkLAFQglgCgTAAIhsAHIhUAGIhJAHQhRAMgoACQgZAChmABQhPAAgoACQgKAAgVAEIggADIg5AGQgjAEgWgCQg0gFg6ACQgQABggAEIgwAFQgKABgPgCQgYgEgDABIgBgBQgJAAgLgFIgSgNQgDgDgEACIhVAIIgFABQgLAOgSgBQgCAAgCAIQgEAQgNAAIhJACIgUgBg");
	this.shape.setTransform(135.4,45.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,270.8,90.6), null);


(lib.person = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._300600_yello2();
	this.instance.parent = this;
	this.instance.setTransform(5.7,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.person, new cjs.Rectangle(5.7,-43.3,300,444), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07BCB6").s().p("A1icDMAAAgzDQABjJChhRQAygZA9gKQAegFAVAAMAmAAAAMAAAAzDQAADJihBRQhPAohRAAg");
	this.shape.setTransform(137.9,179.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.green, new cjs.Rectangle(0,0,275.7,359), null);


(lib.bleu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B4155").s().p("AoFGZIAAq4QAAhMA8geQAfgPAegBIOTAAIAAK5QgBBMg8AfQgTAJgXAEIgTABg");
	this.shape.setTransform(137.9,108.9,2.66,2.66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bleu, new cjs.Rectangle(0,0,275.9,217.9), null);


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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(44.5,42.3,0.307,0.458,0,0,0,135.2,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(3,21.6,83,41.5), null);


// stage content:
(lib._300x600_rates_cre = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(149.5,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(256));

	// text2
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(140.2,94.9,1,1,0,0,0,102,82.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).wait(1).to({regX:45.3,regY:56.5,x:83.5,y:68.8,alpha:0.005},0).wait(1).to({y:69.6,alpha:0.024},0).wait(1).to({y:71.2,alpha:0.061},0).wait(1).to({y:74,alpha:0.129},0).wait(1).to({y:79.3,alpha:0.256},0).wait(1).to({y:89.5,alpha:0.498},0).wait(1).to({y:100.7,alpha:0.765},0).wait(1).to({y:106.4,alpha:0.9},0).wait(1).to({y:109.1,alpha:0.964},0).wait(1).to({y:110.3,alpha:0.992},0).wait(1).to({regX:102,regY:82.8,x:140.2,y:136.9,alpha:1},0).wait(65).to({regX:45.3,regY:56.5,x:83,y:110.6},0).wait(1).to({x:81.4},0).wait(1).to({x:78.5},0).wait(1).to({x:73.8},0).wait(1).to({x:66.7},0).wait(1).to({x:56},0).wait(1).to({x:39.7},0).wait(1).to({x:12.3},0).wait(1).to({x:-45.8},0).wait(1).to({x:-131.8},0).wait(1).to({x:-170},0).wait(1).to({x:-189.4},0).wait(1).to({x:-200.8},0).wait(1).to({x:-207.8},0).wait(1).to({x:-211.9},0).wait(1).to({x:-214.1},0).wait(1).to({regX:102,regY:82.8,x:-158,y:136.9},0).wait(85));

	// highlitew
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.1,130.5,0.045,1,0,0,0,0,20.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({scaleX:1,alpha:1},6,cjs.Ease.get(1)).wait(52).to({regX:44.5,regY:42.3,x:80.1,y:152},0).wait(1).to({x:78.5},0).wait(1).to({x:75.6},0).wait(1).to({x:70.9},0).wait(1).to({x:63.8},0).wait(1).to({x:53.1},0).wait(1).to({x:36.8},0).wait(1).to({x:9.4},0).wait(1).to({x:-48.7},0).wait(1).to({x:-134.7},0).wait(1).to({x:-172.9},0).wait(1).to({x:-192.3},0).wait(1).to({x:-203.7},0).wait(1).to({x:-210.7},0).wait(1).to({x:-214.8},0).wait(1).to({x:-217},0).wait(1).to({regX:0,regY:20.8,x:-262.1,y:130.5},0).wait(85));

	// text1
	this.instance_2 = new lib.text1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(116.2,-183,1,1,0,0,0,78,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:78.2,regY:9.9,x:116.4,y:-216.6},0).wait(1).to({y:-215.6},0).wait(1).to({y:-213.7},0).wait(1).to({y:-210.7},0).wait(1).to({y:-206.4},0).wait(1).to({y:-200.3},0).wait(1).to({y:-191.6},0).wait(1).to({y:-179.1},0).wait(1).to({y:-159.9},0).wait(1).to({y:-124.9},0).wait(1).to({y:-32.7},0).wait(1).to({y:32.4},0).wait(1).to({y:59.3},0).wait(1).to({y:75.1},0).wait(1).to({y:85.5},0).wait(1).to({y:92.7},0).wait(1).to({y:97.6},0).wait(1).to({y:101},0).wait(1).to({y:103.1},0).wait(1).to({y:104.2},0).wait(1).to({regX:78,regY:43.9,x:116.2,y:138.6},0).wait(54).to({regX:78.2,regY:9.9,x:116.4,y:104.8,alpha:0.995},0).wait(1).to({y:105.6,alpha:0.976},0).wait(1).to({y:107.2,alpha:0.939},0).wait(1).to({y:110,alpha:0.871},0).wait(1).to({y:115.3,alpha:0.744},0).wait(1).to({y:125.5,alpha:0.502},0).wait(1).to({y:136.7,alpha:0.235},0).wait(1).to({y:142.4,alpha:0.1},0).wait(1).to({y:145.1,alpha:0.036},0).wait(1).to({y:146.3,alpha:0.008},0).wait(1).to({regX:78,regY:43.9,x:116.2,y:180.6,alpha:0},0).wait(70).to({regX:78.2,regY:9.9,x:115.9,y:146.6},0).wait(1).to({x:114.3},0).wait(1).to({x:111.4},0).wait(1).to({x:106.7},0).wait(1).to({x:99.6},0).wait(1).to({x:88.9},0).wait(1).to({x:72.6},0).wait(1).to({x:45.2},0).wait(1).to({x:-12.9},0).wait(1).to({x:-98.9},0).wait(1).to({x:-137.1},0).wait(1).to({x:-156.5},0).wait(1).to({x:-167.9},0).wait(1).to({x:-174.9},0).wait(1).to({x:-179},0).wait(1).to({x:-181.2},0).wait(1).to({regX:78,regY:43.9,x:-182,y:180.6},0).wait(85));

	// person
	this.instance_3 = new lib.person();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125,793.1,1,1,0,0,0,150,189.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:155.6,regY:178.6,x:130.6,y:781.8},0).wait(1).to({y:780.6},0).wait(1).to({y:778.4},0).wait(1).to({y:774.9},0).wait(1).to({y:769.8},0).wait(1).to({y:762.6},0).wait(1).to({y:752.4},0).wait(1).to({y:737.7},0).wait(1).to({y:715.1},0).wait(1).to({y:674},0).wait(1).to({y:565.6},0).wait(1).to({y:489},0).wait(1).to({y:457.4},0).wait(1).to({y:438.8},0).wait(1).to({y:426.6},0).wait(1).to({y:418.2},0).wait(1).to({y:412.4},0).wait(1).to({y:408.4},0).wait(1).to({y:406},0).wait(1).to({y:404.6},0).wait(1).to({regX:150,regY:189.5,x:125,y:415.1},0).wait(132).to({regX:155.6,regY:178.6,x:130.1,y:404.2},0).wait(1).to({x:128.6},0).wait(1).to({x:125.6},0).wait(1).to({x:120.9},0).wait(1).to({x:113.8},0).wait(1).to({x:103.2},0).wait(1).to({x:86.8},0).wait(1).to({x:59.4},0).wait(1).to({x:1.3},0).wait(1).to({x:-84.7},0).wait(1).to({x:-122.9},0).wait(1).to({x:-142.3},0).wait(1).to({x:-153.7},0).wait(1).to({x:-160.7},0).wait(1).to({x:-164.8},0).wait(1).to({x:-167},0).wait(1).to({regX:150,regY:189.5,x:-173.2,y:415.1},0).wait(87));

	// lowestLogo
	this.instance_4 = new lib.Symbol16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(438.9,506.9,1.1,1.1,0,0,0,90.5,30.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156).to({_off:false},0).wait(1).to({regX:91.3,regY:29.4,x:439.2,y:506.1},0).wait(1).to({x:437.3},0).wait(1).to({x:433.7},0).wait(1).to({x:427.8},0).wait(1).to({x:418.6,y:506},0).wait(1).to({x:404.4},0).wait(1).to({x:381.5,y:505.9},0).wait(1).to({x:339.7,y:505.7},0).wait(1).to({x:266.2,y:505.3},0).wait(1).to({x:212.9,y:505.1},0).wait(1).to({x:185.4,y:504.9},0).wait(1).to({x:169.1},0).wait(1).to({x:158.9,y:504.8},0).wait(1).to({x:152.4},0).wait(1).to({x:148.5},0).wait(1).to({x:146.4},0).wait(1).to({regX:90.5,regY:30.1,x:144.9,y:505.5},0).wait(83));

	// explore
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(458.5,203.5,1,1,0,0,0,100,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(157).to({_off:false},0).wait(1).to({regX:96.5,regY:62.9,x:454.4,y:200.9},0).wait(1).to({x:452.5},0).wait(1).to({x:449},0).wait(1).to({x:443.2},0).wait(1).to({x:434.1},0).wait(1).to({x:419.7},0).wait(1).to({x:395.4},0).wait(1).to({x:344.9},0).wait(1).to({x:250.6},0).wait(1).to({x:204.2},0).wait(1).to({x:181.1},0).wait(1).to({x:167.3},0).wait(1).to({x:158.5},0).wait(1).to({x:152.8},0).wait(1).to({x:149.3},0).wait(1).to({x:147.5},0).wait(1).to({regX:100,regY:65.5,x:150.5,y:203.5},0).wait(82));

	// CTA
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(144.6,300.3,0.117,0.117,0,0,0,84.4,20.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(196).to({_off:false},0).wait(1).to({regX:84.6,scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.29,scaleY:0.29},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:144.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:144.8,y:300.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:144.9},0).wait(1).to({regX:84.5,scaleX:1.29,scaleY:1.29,x:144.5,y:300.4},0).wait(1).to({regX:84.6,scaleX:1.28,scaleY:1.28,x:144.6,y:300.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:300.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:300.3},0).wait(1).to({regX:84.5,scaleX:1.17,scaleY:1.17,x:144.5,y:300.4},0).wait(50));

	// carousel
	this.instance_7 = new lib.Symbol6("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(556.1,171.7,1,1,0,0,0,247.1,30.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(157).to({_off:false},0).wait(1).to({regX:156.3,regY:-49,x:464.7,y:91.8},0).wait(1).to({x:462.9},0).wait(1).to({x:459.3},0).wait(1).to({x:453.5},0).wait(1).to({x:444.4},0).wait(1).to({x:430.1},0).wait(1).to({x:405.8},0).wait(1).to({x:355.2},0).wait(1).to({x:261},0).wait(1).to({x:214.5},0).wait(1).to({x:191.5},0).wait(1).to({x:177.7},0).wait(1).to({x:168.8},0).wait(1).to({x:163.1},0).wait(1).to({x:159.7},0).wait(1).to({x:157.8},0).wait(1).to({regX:247.1,regY:30.9,x:248.1,y:171.7,mode:"synched",startPosition:6,loop:false},0).wait(82));

	// bleu
	this.instance_8 = new lib.bleu();
	this.instance_8.parent = this;
	this.instance_8.setTransform(444.2,479.5,1,1,0,0,0,137.9,108.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).wait(1).to({x:443.6},0).wait(1).to({x:441.7},0).wait(1).to({x:438},0).wait(1).to({x:432.1},0).wait(1).to({x:423,y:479.6},0).wait(1).to({x:408.8},0).wait(1).to({x:385.8,y:479.7},0).wait(1).to({x:344,y:479.9},0).wait(1).to({x:270.6,y:480.3},0).wait(1).to({x:217.3,y:480.5},0).wait(1).to({x:189.7,y:480.7},0).wait(1).to({x:173.5},0).wait(1).to({x:163.2,y:480.8},0).wait(1).to({x:156.7},0).wait(1).to({x:152.8},0).wait(1).to({x:150.8},0).wait(1).to({x:150.2,y:480.9},0).wait(84));

	// greener
	this.instance_9 = new lib.green();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.2,-184.1,1,1,0,0,0,137.8,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({y:-183.7},0).wait(1).to({y:-182.5},0).wait(1).to({y:-180.3},0).wait(1).to({y:-176.8},0).wait(1).to({y:-171.7},0).wait(1).to({y:-164.6},0).wait(1).to({y:-154.5},0).wait(1).to({y:-139.9},0).wait(1).to({y:-117.4},0).wait(1).to({y:-76.7},0).wait(1).to({y:31},0).wait(1).to({y:106.9},0).wait(1).to({y:138.3},0).wait(1).to({y:156.8},0).wait(1).to({y:168.9},0).wait(1).to({y:177.3},0).wait(1).to({y:183},0).wait(1).to({y:186.9},0).wait(1).to({y:189.4},0).wait(1).to({y:190.7},0).wait(1).to({y:191.1},0).wait(133).to({x:149.7},0).wait(1).to({x:148.1},0).wait(1).to({x:145.2},0).wait(1).to({x:140.5},0).wait(1).to({x:133.4},0).wait(1).to({x:122.8},0).wait(1).to({x:106.4},0).wait(1).to({x:79},0).wait(1).to({x:20.9},0).wait(1).to({x:-65.1},0).wait(1).to({x:-103.3},0).wait(1).to({x:-122.7},0).wait(1).to({x:-134.1},0).wait(1).to({x:-141.1},0).wait(1).to({x:-145.2},0).wait(1).to({x:-147.4},0).wait(1).to({x:-148},0).wait(86));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEAEC").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.6,-63.6,319.4,1367.9);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_300600_yello2.png", id:"_300600_yello2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;