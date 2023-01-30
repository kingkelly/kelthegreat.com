(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kft_300x600_seal_atlas_P_", frames: [[294,0,214,121],[294,123,200,126],[0,0,292,427]]}
];


// symbols:



(lib._20 = function() {
	this.spriteSheet = ss["kft_300x600_seal_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_bg = function() {
	this.initialize(img.db_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.KFT_Logo_RGB = function() {
	this.spriteSheet = ss["kft_300x600_seal_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Seal = function() {
	this.spriteSheet = ss["kft_300x600_seal_atlas_P_"];
	this.gotoAndStop(2);
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


(lib.wavecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004CA9").s().p("AySE+QAIgwAahFQA0iLBZhrQEblZIjBdQJuBqFCACQE+ACBKhjQgeBHhtBFQjZCLmKgHQpBgKjcAuQlEBFAKDjg");
	this.shape.setTransform(16.1,135.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmLkIB1hMQCJhkBlhzQFElzibmJQhfAxhtARQjZAkhEidQgihNAEhHQAEhRA1g4QAsguBBgVQAfgLAjgEQBfgLBtA5QBVAtBYBTQBpBiA/B/QBACBAOCOQAjFrkWG8gAtXLkQgzgxAGgvQAOhgElAFQFTAGCRgOQC3gSAmg9QANAwg2A5QhqB0lNA1g");
	this.shape_1.setTransform(92.2,93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64B4EC").s().p("ATRNFQEWm8gjlsQgOiNhAiAQg/iAhphiQhYhShVgtQhtg6hfALQgjAEgfAMQhBAVgsAtQg1A4gEBSQgEBHAiBNQBECcDZgjQBtgSBfgxQCbGKlEFyQhlB0iJBkIh1BLImXAAQFNg1BrhzQA2g5gNgwQgmA9i4ASQiRAOlSgGQklgFgOBfQgGAwAzAwIpUAAQgKjjFEhFQDcguJBAKQGKAGDZiKQBthFAehHQhKBik+gBQlCgCpuhqQojhdkbFZQhZBsg0CKQgaBGgIAvIlqAAQAWhFAyhjQBljGCLiTQDEjPD2hOQE0hgFyBuQIICeExgUQEJgQBbiTQgfAFgmAAQi0AAh/h9Qh/iAAAizQAAi0B/iAQB/h/C0AAIAPABQCsgWDEB0QDMB5CHDbQCWD0ANEnQAPFTirFmg");
	this.shape_2.setTransform(34.4,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wavecopy, new cjs.Rectangle(-137.2,0,343.1,167.5), null);


(lib.wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004CA9").s().p("AySE+QAIgwAahFQA0iLBZhrQEblZIjBdQJuBqFCACQE+ACBKhjQgeBHhtBFQjZCLmKgHQpBgKjcAuQlEBFAKDjg");
	this.shape.setTransform(153.3,135.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmLkIB1hMQCJhkBlhzQFElzibmJQhfAxhtARQjZAkhEidQgihNAEhHQAEhRA1g4QAsguBBgVQAfgLAjgEQBfgLBtA5QBVAtBYBTQBpBiA/B/QBACBAOCOQAjFrkWG8gAtXLkQgzgxAGgvQAOhgElAFQFTAGCRgOQC3gSAmg9QANAwg2A5QhqB0lNA1g");
	this.shape_1.setTransform(229.4,93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64B4EC").s().p("ATRNFQEWm8gjlsQgOiNhAiAQg/iAhphiQhYhShVgtQhtg6hfALQgjAEgfAMQhBAVgsAtQg1A4gEBSQgEBHAiBNQBECcDZgjQBtgSBfgxQCbGKlEFyQhlB0iJBkIh1BLImXAAQFNg1BrhzQA2g5gNgwQgmA9i4ASQiRAOlSgGQklgFgOBfQgGAwAzAwIpUAAQgKjjFEhFQDcguJBAKQGKAGDZiKQBthFAehHQhKBik+gBQlCgCpuhqQojhdkbFZQhZBsg0CKQgaBGgIAvIlqAAQAWhFAyhjQBljGCLiTQDEjPD2hOQE0hgFyBuQIICeExgUQEJgQBbiTQgfAFgmAAQi0AAh/h9Qh/iAAAizQAAi0B/iAQB/h/C0AAIAPABQCsgWDEB0QDMB5CHDbQCWD0ANEnQAPFTirFmg");
	this.shape_2.setTransform(171.6,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave, new cjs.Rectangle(0,0,343.1,167.5), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071B7").s().p("ADKBSICZh2QAvBDAiBLgAh9AuIC6iSICNC2gAmzAZQAbgaAigZQBEgxBFgeIBwCXg");
	this.shape.setTransform(99.7,280.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CC5EA").s().p("ANqW9IAZACIgPAMgACfTDIi5CSIhxiXQAxgWAxgMQAQgEgRgdIATALQAsh1AMh+QAYkBh8jWIANknIATmzIAMkDQAsBQAoBYIhgBbICKAMQAoBkAfBtIjkDWIEeAWIAAAGQA8E0gCFMQgBClgNBoQBoBcBJBoIiZB4gAlSCVIEcAAIiGCGQhEhJhSg9gAsPhEQgvgPg3gHIgNjkIHEABIkPEOIhCgVgAm+k9gAm6rpIEqAQQAcAlAbAoIllFPgAsy3KIC+A7Ig2DIg");
	this.shape_1.setTransform(89.9,148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.7,296.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CC5EA").s().p("AKEYvIgGAAIipCZIiWi6IgLgBIisClIiajBIFMAWIHIAyIgDAAIBtAMQAMAbALAdIh4BhgAh5D2IARmBIGZAfImKF1IgggTgAts2eIgWAJIAOgUIABAAIAAgBQAog4AugvQC5i8DugPQBogGBzAbIhSExIjwB+IiBkUIgDgBIkFCJIADABIgIAEIGOCHIkPCNg");
	this.shape.setTransform(89.9,175.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.9,351.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004CB0").s().p("AgvArIAOgWQAUAOAQAAQAPAAAAgJIAAAAQAAgFgIgDIgQgGQgQgEgHgHQgMgIAAgPIAAgBQAAgRANgKQAMgKARAAQAYAAAUAOIgMAXQgUgLgNAAQgLAAABAIIAAAAQgBAFAIADIAPAGQARAGAHAGQAMAIAAAOIAAABQAAATgNAKQgMAJgUAAQgbAAgXgSg");
	this.shape.setTransform(185.5,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004CB0").s().p("AgoAsQgRgRAAgbIAAAAQAAgZAQgRQARgSAZAAQAcAAAPATQAOASAAAaIgBAIIhQAAQAEAYAXAAQAQAAANgNIATARQgRAWgfAAQgaAAgSgRgAAZgIQgBgMgGgHQgHgGgKAAQgUAAgFAZIAxAAIAAAAg");
	this.shape_1.setTransform(173.4,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004CB0").s().p("AgvArIAPgWQATAOARAAQAOAAAAgJIAAAAQAAgFgHgDIgQgGQgRgEgIgHQgLgIAAgPIAAgBQAAgRANgKQAMgKASAAQAXAAAUAOIgMAXQgTgLgOAAQgKAAgBAIIAAAAQAAAFAIADIAPAGQAQAGAIAGQAMAIAAAOIAAABQAAATgNAKQgMAJgUAAQgbAAgXgSg");
	this.shape_2.setTransform(161,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004CB0").s().p("AgQBQIAAh1IAhAAIAAB1gAgRgyIAAgdIAjAAIAAAdg");
	this.shape_3.setTransform(152.4,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004CB0").s().p("AgrAwQgKgLAAgUIAAhMIAiAAIAABBQAAAYATAAQAVAAgBgYIAAhBIAiAAIAAB1IgiAAIAAgRQgOATgTAAQgTAAgLgMg");
	this.shape_4.setTransform(142.2,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004CB0").s().p("AgiA8IAAh1IAhAAIAAAYQAKgbAbABIAAAjIgCAAQgjAAAAApIAAArg");
	this.shape_5.setTransform(131.3,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004CB0").s().p("AglArQgRgRAAgaIAAAAQAAgZARgRQATgSAZAAQAeAAARATIgVAWQgMgNgOAAQgMAAgHAKQgJAJAAANQAAAOAJAJQAIAKAMAAQAOAAANgNIAUAUQgUAVgdAAQgYAAgTgSg");
	this.shape_6.setTransform(120.1,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004CB0").s().p("Ag3BCIALgZQATAKAWAAQAgAAAAggIAAgGQgQAUgWAAQgVAAgPgPQgQgPAAgYIAAgBQAAgZAQgQQAPgOAVAAQAVAAARASIAAgQIAhAAIAABbQAAAfgPAPQgQAQghAAQgeAAgXgMgAgTgqQgJAIAAAMIAAABQAAAMAJAHQAIAHALAAQANAAAIgHQAIgHAAgMIAAgBQAAgMgIgIQgIgHgNAAQgLAAgIAHg");
	this.shape_7.setTransform(99.4,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004CB0").s().p("AAVA8IAAhAQAAgZgVAAQgTAAgBAZIAABAIghAAIAAh1IAhAAIAAARQAPgTATAAQATAAAKALQALAMAAAVIAABLg");
	this.shape_8.setTransform(85.4,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004CB0").s().p("AgQBQIAAh1IAhAAIAAB1gAgRgyIAAgdIAjAAIAAAdg");
	this.shape_9.setTransform(75.2,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004CB0").s().p("AgiA8IAAh1IAhAAIAAAYQAKgbAbABIAAAjIgCAAQgjAAAAApIAAArg");
	this.shape_10.setTransform(67.8,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004CB0").s().p("Ag9BOIAAiYIAhAAIAAARQAOgUAWAAQAWABAPAPQARARAAAcQAAAcgRARQgPAPgWAAQgVAAgPgRIAAAzgAgUgnQgIAJAAAOQAAAPAIAJQAJAJALAAQALAAAJgJQAJgJgBgPQABgOgJgJQgJgJgLAAQgLAAgJAJg");
	this.shape_11.setTransform(55.6,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004CB0").s().p("AgvArIAOgWQAUAOAQAAQAPAAAAgJIAAAAQAAgFgIgDIgQgGQgQgEgHgHQgMgIAAgPIAAgBQAAgRANgKQAMgKARAAQAYAAAUAOIgMAXQgUgLgNAAQgKAAAAAIIAAAAQAAAFAGADIAQAGQAQAGAIAGQAMAIAAAOIAAABQAAATgNAKQgMAJgUAAQgbAAgXgSg");
	this.shape_12.setTransform(42.3,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004CB0").s().p("AAVA8IAAhAQgBgZgTAAQgVAAAAAZIAABAIghAAIAAh1IAhAAIAAARQAPgTATAAQATAAAKALQALAMAAAVIAABLg");
	this.shape_13.setTransform(23.5,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004CB0").s().p("AgsAsQgTgSAAgaIAAAAQAAgZATgRQASgSAbAAQAbAAASARQASASAAAZQAAAagSARQgTASgbAAQgbAAgRgRgAgWgWQgIAJAAANQAAANAJAKQAJAKANAAQANAAAIgKQAJgJAAgOIAAAAQAAgMgJgKQgIgKgOAAQgNAAgJAKg");
	this.shape_14.setTransform(9.3,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,193.3,26), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7415").s().p("AhGBTIAOgfQAZANAaAAQAqAAAAgpIAAgHQgVAYgbAAQgcAAgTgSQgUgTAAggIAAAAQAAggAUgUQATgSAcAAQAbAAAUAWIAAgTIArAAIAABzQAAAogTATQgVAUgrAAQglAAgdgQgAgZg1QgKAKAAAPIAAAAQAAAQAKAKQAKAIAPAAQAQAAAKgJQALgJAAgQIAAAAQAAgPgLgKQgKgKgQAAQgPAAgKAKg");
	this.shape.setTransform(258.2,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7415").s().p("AAaBMIAAhSQAAgfgaAAQgZAAAAAfIAABSIgrAAIAAiVIArAAIAAAWQATgZAYAAQAYABANAPQAOAOAAAaIAABgg");
	this.shape_1.setTransform(240.5,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7415").s().p("AgUBmIAAiVIApAAIAACVgAgVg/IAAgmIArAAIAAAmg");
	this.shape_2.setTransform(227.5,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7415").s().p("AgsBNIAAiVIAqAAIAAAeQAOgjAhACIAAAsIgCAAQgtAAAAA0IAAA4g");
	this.shape_3.setTransform(218,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7415").s().p("AhOBjIAAjCIArAAIAAAVQASgYAcAAQAcAAATAUQAVAWAAAjIAAABQAAAjgVAWQgTAUgcAAQgbAAgTgXIAABBgAgZgyQgLAMAAARIAAABQAAASALAMQAKAKAPABQAPgBAKgKQALgMAAgSIAAgBQAAgRgLgMQgKgMgPAAQgPAAgKAMg");
	this.shape_4.setTransform(202.4,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7415").s().p("Ag8A3IATgcQAYASAVAAQATAAAAgLIAAAAQAAgHgKgEIgUgHQgVgGgKgIQgOgLAAgTIAAgBQAAgWAQgNQAPgMAXAAQAeAAAaARIgRAeQgYgPgQAAQgPAAAAALIAAABQAAAFAKAFIATAHQAWAHAKAIQAOALAAASIAAABQAAAXgRANQgPAMgZAAQgjAAgdgXg");
	this.shape_5.setTransform(185.4,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF7415").s().p("Ag6A3QgWgWAAggIAAgBQAAggAXgWQAYgXAhAAQAjAAAXAWQAXAXAAAgIAAAAQAAAhgXAWQgYAXgiAAQgiAAgYgXgAgcgcQgLALAAARIAAAAQAAARAMAMQALAMAQAAQASAAALgMQAKgLAAgRIAAgBQAAgQgKgMQgMgMgRAAQgRAAgLAMg");
	this.shape_6.setTransform(161,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7415").s().p("AgdAzIAAhGIgSAAIAAglIASAAIAAgmIApAAIAAAmIAkAAIAAAlIgkAAIAAA+QABAPAOAAQAKAAAKgGIAAAjQgOAJgUAAQgqgBAAgsg");
	this.shape_7.setTransform(145.7,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF7415").s().p("Ag6A3QgWgWAAggIAAgBQAAggAXgWQAXgXAiAAQAjAAAXAWQAXAXAAAgIAAAAQAAAhgXAWQgXAXgjAAQgiAAgYgXgAgcgcQgLALAAARIAAAAQABARAKAMQAMAMAQAAQASAAALgMQAKgLAAgRIAAgBQAAgQgKgMQgMgMgRAAQgRAAgLAMg");
	this.shape_8.setTransform(122.4,16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF7415").s().p("AgUBmIAAjLIApAAIAADLg");
	this.shape_9.setTransform(108.9,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7415").s().p("AgUBmIAAjLIApAAIAADLg");
	this.shape_10.setTransform(100.4,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF7415").s().p("AgzA5QgWgWABgiIAAgBQAAggAUgWQAVgXAgAAQAjAAAUAZQARAWAAAhIAAAMIhoAAQAHAdAdAAQAUAAAQgPIAZAVQgXAcgnAAQggAAgXgVgAAggLQgCgPgIgIQgJgJgMAAQgbAAgFAgIA/AAIAAAAg");
	this.shape_11.setTransform(87.6,16.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF7415").s().p("AAaBmIAAhTQAAgegaAAQgZAAAAAeIAABTIgrAAIAAjLIArAAIAABLQATgYAYAAQAYAAANAPQAOAPAAAZIAABhg");
	this.shape_12.setTransform(70.4,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF7415").s().p("AhCBYIAPgfQAJAGAJAAQAKAAAFgKIg7iWIAtAAIAhBlIAhhlIAsAAIg6CZQgIAXgLAJQgKAKgTAAQgUAAgSgKg");
	this.shape_13.setTransform(44.8,19.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF7415").s().p("Ag1BCQgPgNAAgVIAAgBQAAgYARgLQAQgMAbAAQATAAARAGIAAgCQAAgcgfAAQgTAAgXAJIgKghQAcgMAdAAQAiAAARARQAQAQAAAgIAABWIgpAAIAAgRQgRATgcAAQgWAAgOgLgAgbAdIAAABQABAIAFAFQAHAFALAAQANAAAKgHQAIgIABgLIAAgIQgMgFgPAAQgdAAAAAUg");
	this.shape_14.setTransform(27.8,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF7415").s().p("AhNBGIAagfQAdAYAdAAQAcAAAAgSIAAgBQAAgJgHgEQgJgGgXgGQghgJgOgKQgSgNAAgbIAAAAQABgbASgQQAUgRAeAAQAoAAAgAZIgXAhQgcgUgVAAQgNAAgGAGQgHAEAAAIIAAAAQAAAKAJAFQAHAEAaAHQAgAIAOALQAQAOAAAZIAAAAQAAAdgVAQQgTAQggAAQgvAAgkgfg");
	this.shape_15.setTransform(10.8,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,270.2,32), null);


(lib.save = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7415").s().p("AhUBwIAAjfICoAAIAAAsIh3AAIAAAtIBoAAIAAArIhoAAIAAAvIB4AAIAAAsg");
	this.shape.setTransform(79.9,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7415").s().p("AgVBxIhajhIA2AAIA6CdIA6idIA1AAIhaDhg");
	this.shape_1.setTransform(56.7,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7415").s().p("ABDBxIgUgzIheAAIgUAzIgzAAIBhjhIAsAAIBgDhgAAdATIgdhIIgdBIIA6AAg");
	this.shape_2.setTransform(35.1,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7415").s().p("AhYBQIAdgjQAhAbAhAAQAhAAAAgWIAAAAQAAgKgJgFQgJgGgbgIQgmgKgQgLQgUgQAAgeIAAgBQAAgeAWgSQAWgTAjAAQAuAAAkAcIgaAlQgggVgZAAQgOgBgIAGQgHAGAAAIIAAABQAAALAKAFQAJAGAdAHQAkAJAQAOQATAPAAAcIAAABQAAAhgXASQgXASglAAQg2AAgogjg");
	this.shape_3.setTransform(12,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.save, new cjs.Rectangle(0,0,92.3,36), null);


(lib.pho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Seal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pho, new cjs.Rectangle(0,0,292,427), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.KFT_Logo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,120,75.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ASVR1QgbgogLgsIgGglQg/BhiqAjQg1AMg5ADIgvACQgTi2CZhxQBNg4BRgUQAZgGhahaQhHhGgdgWQh0hRiMhJQh5hAiWhBQhtgviphCIhRggIAyFoQkmhUiFjQQhJhzgIh0Qnpign5h0QAii5CcieQCViXDqhkQDrhjEOgaQEcgcEOA8QANghAWgoQAshMA5g6QCzi2D7A8IiDHjQHsEBB/KTQAoDPgBDeQgBBvgIBFQCzCeAnDWQATBqgQBMQjPgXhVh9g");
	mask.setTransform(147.3,147.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinJxIgglwIB2hwICNBZIB3gjIDVAYIFXA3ICCDaIgvDKIisBXgAtfokQgIhDA2g3QAxgyBageQBVgeBhgEQBigEBMAYQD+BOCUCiQCmC3gWDsQgIBVgeBNg");
	this.shape.setTransform(231.6,220.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(145.1,142.2,149.4,134.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AihDkQh5gihjhFIhNg9IjbBnIAAlCIDbCBQHMljGAC7QB4A7BiBqQAyA0AYApQlCDEkiAAQh0AAhvggg");
	mask_1.setTransform(69.8,25.8);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071B7").s().p("AAAAAIABAAIAAABg");
	this.shape_1.setTransform(53.1,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CC5EA").s().p("AjDBgIjnBbIAJllIDzCAIEVjJIAAgPIBnBSIBNhJIAABJIBNhJIAABAIBDhAIAACWIhDhAIAABAIhNhJIAABJIhNhJIhhBVIBhBOIBNhKIAABKIBNhKIAABAIBDhAIAACWIhDhAIAABAIhNhIIAABIIhNhIIhmBYIgBABIBnBWIBNhJIAABJIBNhJIAAA/IBDg/IAACWIhDhAIAABAIhNhJIAABJIhNhJIhmBSIAAADg");
	this.shape_2.setTransform(42.7,26.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(2,0.3,83.5,51.6), null);


(lib.booknow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWAyIgWg/IgVA/IgTAAIgihiIAYAAIAUBBIAWhBIARAAIAXBBIAUhBIAXAAIgiBig");
	this.shape.setTransform(93.1,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAkQgPgOAAgWIAAAAQAAgUAPgPQAPgOAVAAQAWAAAPAOQAPAPAAAUIAAAAQAAAVgPAPQgPAPgWAAQgWAAgOgPgAgUgVQgJAJABAMIAAAAQAAANAIAJQAJAJALAAQANAAAIgJQAIgJAAgNIAAAAQABgMgJgIQgJgKgMAAQgMAAgIAJg");
	this.shape_1.setTransform(79.3,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAxIgvg9IAAA9IgUAAIAAhhIATAAIAtA8IAAg8IAWAAIAABhg");
	this.shape_2.setTransform(67.8,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAxIgdgqIgLAMIAAAeIgWAAIAAhhIAWAAIAAArIAngrIAaAAIgpApIArA4g");
	this.shape_3.setTransform(53.5,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAkQgPgOAAgWIAAAAQAAgUAPgPQAPgOAVAAQAWAAAPAOQAPAPAAAUIAAAAQAAAVgPAPQgPAPgWAAQgWAAgOgPgAgUgVQgJAJABAMIAAAAQAAANAIAJQAJAJALAAQANAAAIgJQAIgJAAgNIAAAAQABgMgJgIQgJgKgMAAQgMAAgIAJg");
	this.shape_4.setTransform(41.9,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAkQgPgOAAgWIAAAAQAAgUAPgPQAPgOAVAAQAXAAAPAOQAOAPAAAUIAAAAQAAAVgOAPQgPAPgXAAQgVAAgPgPgAgVgVQgHAJAAAMIAAAAQgBANAJAJQAJAJALAAQANAAAIgJQAJgJgBgNIAAAAQAAgMgIgIQgJgKgMAAQgMAAgJAJg");
	this.shape_5.setTransform(30,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpAxIAAhhIAtAAQARAAAIAJQAHAGAAALQAAANgNAIQASAGABARQAAANgLAHQgJAHgRAAgAgUAeIAZAAQAPAAAAgLIAAAAQAAgLgQAAIgYAAgAgUgJIAUAAQAOAAABgKQAAgKgOAAIgVAAg");
	this.shape_6.setTransform(19.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7415").s().p("ApMC3IAAltISZAAIAAFtg");
	this.shape_7.setTransform(57.5,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.booknow, new cjs.Rectangle(-1.3,-5.6,117.7,36.7), null);


(lib._20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7415").s().p("AAWBJQgLgMAAgRIAAgBQAAgSALgNQAMgMASAAQASAAALAMQALAMAAATIAAAAQAAASgLAMQgMANgSAAQgSAAgLgNgAAoAcQgEAFAAAKIAAAAQAAAIAEAHQAFAGAHAAQAHAAAEgGQAEgGAAgIIAAgBQAAgJgEgGQgFgGgHAAQgHAAgEAGgAhLBUIBEhaIA2hNIAdAAIhEBaIg2BNgAhQgLQgLgMAAgTIAAAAQAAgSALgMQAMgNASAAQARAAAMANQALAMAAARIAAABQAAASgLANQgMALgSAAQgSAAgLgLgAg+g5QgEAGAAAIIAAABQAAAJAEAGQAFAGAHAAQAHAAAEgGQAEgGAAgJIAAAAQAAgJgEgGQgFgGgHAAQgHAAgEAGg");
	this.shape.setTransform(215.8,15.7);

	this.instance = new lib._20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._20_1, new cjs.Rectangle(0,0,228.3,121), null);


(lib.whalee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(352.3,183.1,1,1,0,0,0,89.9,175.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.835},0).wait(1).to({alpha:0.701},0).wait(1).to({alpha:0.555},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.376},0).wait(1).to({alpha:0.332},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.498},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.802},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.305},0).wait(1).to({alpha:0.253},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.148},0).to({_off:true},8).wait(20));

	// Layer_3
	this.instance_1 = new lib.Symbol12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(382.5,199.9,1,1,0,0,0,89.9,148.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:89.8,x:382.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:89.9,x:382.5},0).wait(1).to({regX:89.8,x:382.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:89.9,x:382.5},0).wait(1).to({regX:89.8,x:382.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:89.9,x:382.5},0).to({_off:true},14).wait(20));

	// Layer_2
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.9,201,1.5,1.5,0,0,0,159.1,149.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},60).wait(20));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgBAxQgUgBgOgPQgNgPAAgTQABgVAPgNQAPgNATABQAUAAAOAPQAOAPgBATQgBAVgPANQgOANgSAAIgCAAg");
	this.shape.setTransform(123,133,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB1A5Ql5hvjsguIBagXQBygaB1gNQF3grETBjQgEBbAIBOQAFAwANBBQhkgkkYhTg");
	this.shape_1.setTransform(79.7,174.3,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah5CeQiXgRhZhJIAAgBQAOgxA9g4QBAg6BMgeQCEg0CTAZQCJAWBcBNQgOAygyAuQg2AyhMAeQhlAohxAAQglAAgmgEg");
	this.shape_2.setTransform(194.2,119.2,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071B7").s().p("ASVR1QgbgogLgsIgGglQg/BhiqAjQg1AMg5ADIgvACQgTi2CZhxQBNg4BRgUQAZgGhahaQhHhGgdgWQh0hRiMhJQh5hAiWhBQhtgviphCIhRggIAyFoQkmhUiFjQQhJhzgIh0Qnpign5h0QAii5CcieQCViXDqhkQDrhjEOgaQEcgcEOA8QANghAWgoQAshMA5g6QCzi2D7A8IiDHjQHsEBB/KTQAoDPgBDeQgBBvgIBFQCzCeAnDWQATBqgQBMQjPgXhVh9g");
	this.shape_3.setTransform(226.1,197.8,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0070B7").ss(1,1,1).p("AW4UmQh8gOhVgzQhBgngog6QgUgegMggIgDgJIgIAGQhIA8h5AcQhIAQhVADIgrAAIgDgbQgIhQAYhHQAVg+AugzQAngtA3giQAugeA1gTIAJgDIgGgIQgZgdgygvQgsgqgUgRQhxhPiMhJQh5g/iYhCQhrgvilhBIgigMIAyFjIgtgOQkyhWiKjbQhDhqgQhyIgBgEIgEgBQncibnshxIgcgGIAFgcQAciaBsiIQBqiGCphmQCohnDUg7QDZg8DrgFIAqgBQCzAACvAjIAFABIACgFQA2hxBVhUQA9g8BIgiQBVgoBfgDIALAAQA7AABDAQIAeAHIiFHqIAFADQDtCECaDrQCbDqA/FCQAjC4AEDFQACB4gKBiIAAAEIADACQCvCiAnDXQATBtgRBUIgFAag");
	this.shape_4.setTransform(225.8,198.1,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071B7").s().p("AW4UlQh8gNhVgzQhBgngog6QgUgegMggIgDgJIgIAGQhIA8h5AcQhIAQhVADIgrAAIgDgbQgIhQAYhHQAVg9Aug0QAngtA3giQAugeA1gTIAJgDIgGgIQgZgcgygwQgsgqgUgRQhxhPiMhJQh5hAiYhBQhrgvilhAIgigOIAyFkIgtgOQkyhWiKjbQhDhqgQhxIgBgFIgEgBQncianshyIgcgGIAFgcQAciaBsiIQBqiGCphmQCohnDUg7QDZg7DrgGIAqAAQCzgBCvAkIAFABIACgGQA2hxBVhUQA9g8BIghQBVgpBfgDIALAAQA7AABDAQIAeAIIiFHpIAFADQDtCECaDrQCbDqA/FCQAjC5AEDEQACB4gKBjIAAADIADACQCvCiAnDXQATBtgRBUIgFAbg");
	this.shape_5.setTransform(225.8,198.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},60).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,483.3,426.3);


(lib.whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whale
	this.instance = new lib.whalee("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1361.4,902.6,1,1,60,0,0,236.2,200.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:235.7,regY:198,rotation:59.7,x:1361.2,y:897.3,startPosition:1},0).wait(1).to({rotation:58.6,x:1353,y:885.7,startPosition:2},0).wait(1).to({rotation:56.5,x:1337,y:863,startPosition:3},0).wait(1).to({rotation:52.9,x:1310.2,y:824.9,startPosition:4},0).wait(1).to({rotation:47.3,x:1268.3,y:765.4,startPosition:5},0).wait(1).to({rotation:39.1,x:1207,y:678.3,startPosition:6},0).wait(1).to({rotation:28.6,x:1128,y:566.4,startPosition:7},0).wait(1).to({rotation:17.5,x:1045.3,y:449.3,startPosition:8},0).wait(1).to({rotation:7.9,x:972.7,y:346.6,startPosition:9},0).wait(1).to({rotation:0,x:913.9,y:263.5,startPosition:10},0).wait(1).to({rotation:-6.2,x:867,y:197.2,startPosition:11},0).wait(1).to({rotation:-11.3,x:829.4,y:144.2,startPosition:12},0).wait(1).to({rotation:-15.3,x:799,y:101.3,startPosition:13},0).wait(1).to({rotation:-18.6,x:774.4,y:66.5,startPosition:14},0).wait(1).to({rotation:-21.3,x:754.2,y:38.1,startPosition:15},0).wait(1).to({rotation:-23.5,x:737.9,y:15,startPosition:16},0).wait(1).to({rotation:-25.2,x:724.6,y:-3.8,startPosition:17},0).wait(1).to({rotation:-26.7,x:714,y:-18.8,startPosition:18},0).wait(1).to({rotation:-27.8,x:705.6,y:-30.7,startPosition:19},0).wait(1).to({rotation:-28.6,x:699.1,y:-39.7,startPosition:20},0).wait(1).to({rotation:-29.3,x:694.4,y:-46.3,startPosition:21},0).wait(1).to({rotation:-29.7,x:691.3,y:-50.8,startPosition:22},0).wait(1).to({rotation:-29.9,x:689.5,y:-53.3,startPosition:23},0).wait(1).to({regX:236.2,regY:201,rotation:-30,x:690.8,y:-51.9},0).wait(1).to({regX:235.7,regY:198,rotation:-30.2,x:686.8,startPosition:24},0).wait(1).to({rotation:-30.6,x:683.1,y:-47.6,startPosition:25},0).wait(1).to({rotation:-31.3,x:677.3,y:-41,startPosition:26},0).wait(1).to({rotation:-32.2,x:669.5,y:-32.1,startPosition:27},0).wait(1).to({rotation:-33.3,x:659.5,y:-20.6,startPosition:28},0).wait(1).to({rotation:-34.7,x:647.1,y:-6.4,startPosition:29},0).wait(1).to({rotation:-36.4,x:632.2,y:10.8,startPosition:30},0).wait(1).to({rotation:-38.4,x:614.5,y:31,startPosition:31},0).wait(1).to({rotation:-40.8,x:593.8,y:54.8,startPosition:32},0).wait(1).to({rotation:-43.5,x:569.8,y:82.3,startPosition:33},0).wait(1).to({rotation:-46.6,x:542.3,y:114.1,startPosition:34},0).wait(1).to({rotation:-50.2,x:510.7,y:150.4,startPosition:35},0).wait(1).to({rotation:-54.3,x:474.6,y:191.9,startPosition:36},0).wait(1).to({rotation:-59,x:433.5,y:239.2,startPosition:37},0).wait(1).to({rotation:-64.3,x:386.6,y:293.2,startPosition:38},0).wait(1).to({rotation:-70.4,x:332.8,y:355.2,startPosition:39},0).wait(1).to({rotation:-77.4,x:271.1,y:426.5,startPosition:40},0).wait(1).to({rotation:-85.6,x:199.4,y:509.3,startPosition:41},0).wait(1).to({rotation:-95.2,x:114.9,y:606.9,startPosition:42},0).wait(1).to({rotation:-106.8,x:13.3,y:724.3,startPosition:43},0).wait(1).to({rotation:-121.3,x:-113.9,y:871.6,startPosition:44},0).wait(1).to({regX:236.1,regY:201,rotation:-141.2,x:-286.4,y:1070.2,startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1255.5,671.2,330,514.8);


(lib.fishy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(70.4,29.5,1,1,0,0,0,68.8,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071B7").s().p("AihDkQh5gihjhFIhNg9IjbBnIAAlCIDbCBQHMljGAC7QB5A7BhBqQAyA0AZApQlDDEkiAAQhzAAhwggg");
	this.shape.setTransform(71.4,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishy, new cjs.Rectangle(1.6,3.4,137.6,52.3), null);


(lib.fishiesEnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fishy();
	this.instance.parent = this;
	this.instance.setTransform(30.6,36.7,0.45,0.45,0,0,180,71.2,29.4);

	this.instance_1 = new lib.fishy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.7,8.3,0.315,0.315,0,0,180,71.3,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishiesEnd, new cjs.Rectangle(0,0,91.6,48.5), null);


// stage content:
(lib.kft_300x600_seal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.wave();
	this.instance.parent = this;
	this.instance.setTransform(-25,567.2,0.43,0.43,0,0,0,171.4,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:171.6,regY:83.8,x:-19.8},0).wait(1).to({x:-13.1},0).wait(1).to({x:-3.2},0).wait(1).to({x:11.4},0).wait(1).to({x:28.1},0).wait(1).to({x:40.2},0).wait(1).to({x:48.4},0).wait(1).to({x:54.2},0).wait(1).to({x:58.6},0).wait(1).to({x:62},0).wait(1).to({x:64.8},0).wait(1).to({x:67},0).wait(1).to({x:68.8},0).wait(1).to({x:70.3},0).wait(1).to({x:71.5},0).wait(1).to({x:72.5},0).wait(1).to({x:73.3},0).wait(1).to({x:73.8},0).wait(1).to({x:74.3},0).wait(1).to({x:74.7},0).wait(1).to({x:74.9},0).wait(1).to({x:75.1},0).wait(1).to({regX:171.4,regY:84,x:75},0).to({x:167.5},278,cjs.Ease.get(-0.18)).to({x:202.5},148).wait(1));

	// Layer_7
	this.instance_1 = new lib.wave();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30,554.8,0.568,0.568,0,0,0,171.4,84.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:171.6,regY:83.8,x:38.3,y:554.6},0).wait(1).to({x:49.3},0).wait(1).to({x:65.3},0).wait(1).to({x:89.1},0).wait(1).to({x:116.1},0).wait(1).to({x:135.9},0).wait(1).to({x:149.1},0).wait(1).to({x:158.6},0).wait(1).to({x:165.7},0).wait(1).to({x:171.3},0).wait(1).to({x:175.7},0).wait(1).to({x:179.3},0).wait(1).to({x:182.3},0).wait(1).to({x:184.7},0).wait(1).to({x:186.6},0).wait(1).to({x:188.3},0).wait(1).to({x:189.5},0).wait(1).to({x:190.6},0).wait(1).to({x:191.3},0).wait(1).to({x:191.9},0).wait(1).to({x:192.3},0).wait(1).to({x:192.5},0).wait(1).to({regX:171.4,regY:84.1,y:554.8},0).to({x:322.5},278,cjs.Ease.get(-0.18)).to({x:398.8},148).wait(1));

	// Layer_5
	this.instance_2 = new lib.wavecopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,567.2,0.43,0.43,0,0,0,171.4,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:112.5},301,cjs.Ease.get(-0.15)).to({x:145},148).wait(1));

	// Layer_9
	this.instance_3 = new lib.whale("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(37.6,635.7,0.25,0.25,0,0,180,1131.4,791.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({_off:false},0).to({_off:true},50).wait(261));

	// last fish
	this.instance_4 = new lib.fishiesEnd();
	this.instance_4.parent = this;
	this.instance_4.setTransform(362.7,532,1,1,0,0,0,45.8,24.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(309).to({_off:false},0).wait(1).to({regX:45.5,x:357.4,y:531.3},0).wait(1).to({x:351.6,y:530.6},0).wait(1).to({x:344.7,y:529.7},0).wait(1).to({x:336.4,y:528.5},0).wait(1).to({x:326,y:527.2},0).wait(1).to({x:312.9,y:525.4},0).wait(1).to({x:296.7,y:523.2},0).wait(1).to({x:278.5,y:520.8},0).wait(1).to({x:261.8,y:518.6},0).wait(1).to({x:248.1,y:516.8},0).wait(1).to({x:237.3,y:515.3},0).wait(1).to({x:228.6,y:514.2},0).wait(1).to({x:221.5,y:513.2},0).wait(1).to({x:215.5,y:512.4},0).wait(1).to({x:210.4,y:511.7},0).wait(1).to({x:206.1,y:511.2},0).wait(1).to({x:202.2,y:510.7},0).wait(1).to({x:198.9,y:510.2},0).wait(1).to({x:196,y:509.8},0).wait(1).to({x:193.3,y:509.5},0).wait(1).to({x:191,y:509.2},0).wait(1).to({x:188.9,y:508.9},0).wait(1).to({x:187.1,y:508.6},0).wait(1).to({x:185.4,y:508.4},0).wait(1).to({x:183.9,y:508.2},0).wait(1).to({x:182.6,y:508},0).wait(1).to({x:181.4,y:507.9},0).wait(1).to({x:180.4,y:507.7},0).wait(1).to({x:179.4,y:507.6},0).wait(1).to({x:178.6,y:507.5},0).wait(1).to({x:177.9,y:507.4},0).wait(1).to({x:177.3,y:507.3},0).wait(1).to({x:176.7,y:507.2},0).wait(1).to({x:176.2},0).wait(1).to({x:175.9,y:507.1},0).wait(1).to({x:175.5},0).wait(1).to({x:175.3},0).wait(1).to({x:175.1,y:507},0).wait(1).to({x:175},0).wait(1).to({x:174.9},0).wait(1).to({regX:45.8,x:175.2},0).wait(100));

	// last whale
	this.instance_5 = new lib.whalee("synched",19);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-24.4,649.1,0.279,0.279,0,-68,112,235,202.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(301).to({_off:false},0).wait(1).to({regX:235.7,regY:198,skewX:-66.5,skewY:113.5,x:-22.9,y:644.8,startPosition:20},0).wait(1).to({skewX:-64.6,skewY:115.4,x:-19.9,y:640,startPosition:21},0).wait(1).to({skewX:-62.4,skewY:117.6,x:-16.2,y:634.3,startPosition:22},0).wait(1).to({skewX:-59.7,skewY:120.3,x:-11.9,y:627.3,startPosition:23},0).wait(1).to({skewX:-56.4,skewY:123.6,x:-6.4,y:618.7,startPosition:24},0).wait(1).to({skewX:-52.2,skewY:127.8,x:0.5,y:607.9,startPosition:25},0).wait(1).to({skewX:-47,skewY:133,x:9.1,y:594.4,startPosition:26},0).wait(1).to({skewX:-41.2,skewY:138.8,x:18.7,y:579.4,startPosition:27},0).wait(1).to({skewX:-35.9,skewY:144.1,x:27.6,y:565.4,startPosition:28},0).wait(1).to({skewX:-31.5,skewY:148.5,x:34.8,y:554.2,startPosition:29},0).wait(1).to({skewX:-28,skewY:152,x:40.5,y:545.2,startPosition:30},0).wait(1).to({skewX:-25.2,skewY:154.8,x:45.2,y:538,startPosition:31},0).wait(1).to({skewX:-23,skewY:157,x:48.9,y:532.1,startPosition:32},0).wait(1).to({skewX:-21.1,skewY:158.9,x:52.1,y:527.2,startPosition:33},0).wait(1).to({skewX:-19.4,skewY:160.6,x:54.8,y:523,startPosition:34},0).wait(1).to({skewX:-18,skewY:162,x:57.1,y:519.3,startPosition:35},0).wait(1).to({skewX:-16.8,skewY:163.2,x:59.1,y:516.2,startPosition:36},0).wait(1).to({skewX:-15.7,skewY:164.3,x:60.9,y:513.4,startPosition:37},0).wait(1).to({skewX:-14.8,skewY:165.2,x:62.5,y:511,startPosition:38},0).wait(1).to({skewX:-14,skewY:166,x:63.8,y:508.9,startPosition:39},0).wait(1).to({skewX:-13.2,skewY:166.8,x:65.1,y:506.9,startPosition:40},0).wait(1).to({skewX:-12.6,skewY:167.4,x:66.2,y:505.2,startPosition:41},0).wait(1).to({skewX:-12,skewY:168,x:67.2,y:503.7,startPosition:42},0).wait(1).to({skewX:-11.4,skewY:168.6,x:68.1,y:502.3,startPosition:43},0).wait(1).to({skewX:-11,skewY:169,x:68.9,y:501,startPosition:44},0).wait(1).to({skewX:-10.5,skewY:169.5,x:69.6,y:500,startPosition:45},0).wait(1).to({skewX:-10.1,skewY:169.9,x:70.2,y:499,startPosition:46},0).wait(1).to({skewX:-9.8,skewY:170.2,x:70.8,y:498.1,startPosition:47},0).wait(1).to({skewX:-9.5,skewY:170.5,x:71.3,y:497.4,startPosition:48},0).wait(1).to({skewX:-9.2,skewY:170.8,x:71.7,y:496.7,startPosition:49},0).wait(1).to({skewX:-9,skewY:171,x:72.1,y:496.1,startPosition:50},0).wait(1).to({skewX:-8.8,skewY:171.2,x:72.4,y:495.5,startPosition:51},0).wait(1).to({skewX:-8.6,skewY:171.4,x:72.7,y:495.1,startPosition:52},0).wait(1).to({skewX:-8.5,skewY:171.5,x:73,y:494.7,startPosition:53},0).wait(1).to({skewX:-8.4,skewY:171.6,x:73.2,y:494.4,startPosition:54},0).wait(1).to({skewX:-8.3,skewY:171.7,x:73.3,y:494.2,startPosition:55},0).wait(1).to({skewX:-8.2,skewY:171.8,x:73.5,y:493.9,startPosition:56},0).wait(1).to({skewX:-8.1,skewY:171.9,x:73.6,y:493.7,startPosition:57},0).wait(1).to({x:73.7,startPosition:58},0).wait(1).to({y:493.6,startPosition:59},0).wait(1).to({regX:235,regY:202.2,skewX:-8,skewY:172,x:74.1,y:494.8,mode:"single",startPosition:22},0).wait(108));

	// fish
	this.instance_6 = new lib.fishy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(354.8,519.4,0.5,0.5,0,0,180,71.3,29.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({x:217.3},25,cjs.Ease.get(0.95)).to({x:124.8},24,cjs.Ease.get(1)).to({x:49.8},29,cjs.Ease.get(1)).to({x:-50.2},34,cjs.Ease.get(1)).wait(12).to({x:354.8},0).to({x:217.3},25,cjs.Ease.get(0.95)).to({x:124.8},24,cjs.Ease.get(1)).to({x:49.8},29,cjs.Ease.get(1)).to({x:-50.2},34,cjs.Ease.get(1)).wait(158));

	// fish
	this.instance_7 = new lib.fishy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(354.8,506.9,0.35,0.35,0,0,180,71.3,29.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).to({x:204.8},34,cjs.Ease.get(0.95)).to({x:99.8},35,cjs.Ease.get(1)).to({regX:71.5,x:-50.2},42,cjs.Ease.get(1)).to({_off:true},3).wait(10).to({_off:false,regX:71.3,x:354.8},0).to({x:204.8},34,cjs.Ease.get(0.95)).to({x:99.8},35,cjs.Ease.get(1)).to({regX:71.5,x:-50.2},42,cjs.Ease.get(1)).wait(149));

	// boknow
	this.instance_8 = new lib.booknow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(133.8,408.5,1,1,0,0,0,43.8,9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(-1)).wait(273));

	// Layer_13
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-110.2,352.5,1,1,0,0,0,105.2,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121).to({_off:false},0).wait(1).to({regX:96.6,regY:13.3,x:-117.8,y:351.8},0).wait(1).to({x:-114.7},0).wait(1).to({x:-108.5},0).wait(1).to({x:-97.9},0).wait(1).to({x:-80.8},0).wait(1).to({x:-53.5},0).wait(1).to({x:-13.9},0).wait(1).to({x:29.4},0).wait(1).to({x:64.1},0).wait(1).to({x:89},0).wait(1).to({x:106.9},0).wait(1).to({x:120},0).wait(1).to({x:129.8},0).wait(1).to({x:137},0).wait(1).to({x:142.2},0).wait(1).to({x:145.8},0).wait(1).to({x:148.2},0).wait(1).to({x:149.5},0).wait(1).to({regX:105.2,regY:14,x:158.6,y:352.5},0).wait(310));

	// Layer_12
	this.instance_10 = new lib._20_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-127.5,268,1,1,0,0,0,107,60.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(118).to({_off:false},0).wait(1).to({regX:112.5,x:-121,alpha:0.003},0).wait(1).to({x:-117.7,alpha:0.015},0).wait(1).to({x:-111.3,alpha:0.038},0).wait(1).to({x:-100.4,alpha:0.078},0).wait(1).to({x:-82.7,alpha:0.141},0).wait(1).to({x:-54.6,alpha:0.243},0).wait(1).to({x:-13.7,alpha:0.39},0).wait(1).to({x:31,alpha:0.551},0).wait(1).to({x:66.8,alpha:0.68},0).wait(1).to({x:92.5,alpha:0.773},0).wait(1).to({x:111.1,alpha:0.84},0).wait(1).to({x:124.6,alpha:0.889},0).wait(1).to({x:134.6,alpha:0.925},0).wait(1).to({x:142.1,alpha:0.952},0).wait(1).to({x:147.5,alpha:0.971},0).wait(1).to({x:151.3,alpha:0.985},0).wait(1).to({x:153.7,alpha:0.994},0).wait(1).to({x:155.1,alpha:0.998},0).wait(1).to({regX:107,x:150,alpha:1},0).wait(313));

	// Layer_11
	this.instance_11 = new lib.save();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-95,178.7,1,1,0,0,0,46.1,18);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).wait(1).to({regX:45.8,regY:16.4,x:-94.5,y:177.1,alpha:0.003},0).wait(1).to({x:-91.6,alpha:0.015},0).wait(1).to({x:-85.9,alpha:0.038},0).wait(1).to({x:-76.3,alpha:0.078},0).wait(1).to({x:-60.7,alpha:0.141},0).wait(1).to({x:-35.9,alpha:0.243},0).wait(1).to({x:0.3,alpha:0.39},0).wait(1).to({x:39.8,alpha:0.551},0).wait(1).to({x:71.3,alpha:0.68},0).wait(1).to({x:94,alpha:0.773},0).wait(1).to({x:110.4,alpha:0.84},0).wait(1).to({x:122.4,alpha:0.889},0).wait(1).to({x:131.2,alpha:0.925},0).wait(1).to({x:137.8,alpha:0.952},0).wait(1).to({x:142.6,alpha:0.971},0).wait(1).to({x:145.9,alpha:0.985},0).wait(1).to({x:148.1,alpha:0.994},0).wait(1).to({x:149.3,alpha:0.998},0).wait(1).to({regX:46.1,regY:18,x:150,y:178.7,alpha:1},0).wait(316));

	// logo
	this.instance_12 = new lib.logo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,54.8,1,1,0,0,0,60,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(450));

	// Layer_3
	this.instance_13 = new lib.Symbol1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-137.5,140,1,1,0,0,0,135.1,16);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(1).to({regX:134.6,regY:16.4,x:-125.5,y:140.4,alpha:0.043},0).wait(1).to({x:-109.3,alpha:0.1},0).wait(1).to({x:-87.3,alpha:0.176},0).wait(1).to({x:-56.2,alpha:0.284},0).wait(1).to({x:-15.2,alpha:0.427},0).wait(1).to({x:23.7,alpha:0.562},0).wait(1).to({x:52.1,alpha:0.661},0).wait(1).to({x:72.3,alpha:0.731},0).wait(1).to({x:87.4,alpha:0.784},0).wait(1).to({x:99.1,alpha:0.825},0).wait(1).to({x:108.5,alpha:0.857},0).wait(1).to({x:116.1,alpha:0.884},0).wait(1).to({x:122.5,alpha:0.906},0).wait(1).to({x:127.7,alpha:0.924},0).wait(1).to({x:132.1,alpha:0.939},0).wait(1).to({x:135.8,alpha:0.952},0).wait(1).to({x:138.9,alpha:0.963},0).wait(1).to({x:141.4,alpha:0.972},0).wait(1).to({x:143.6,alpha:0.979},0).wait(1).to({x:145.3,alpha:0.985},0).wait(1).to({x:146.7,alpha:0.99},0).wait(1).to({x:147.8,alpha:0.994},0).wait(1).to({x:148.6,alpha:0.997},0).wait(1).to({x:149.1,alpha:0.999},0).wait(1).to({x:149.4,alpha:1},0).wait(1).to({regX:135.1,regY:16,x:150,y:140},0).wait(71).to({regX:134.6,regY:16.4,x:150.9,y:140.4,alpha:0.995},0).wait(1).to({x:155.7,alpha:0.979},0).wait(1).to({x:165,alpha:0.946},0).wait(1).to({x:180.8,alpha:0.891},0).wait(1).to({x:205.9,alpha:0.804},0).wait(1).to({x:243,alpha:0.675},0).wait(1).to({x:289.5,alpha:0.513},0).wait(1).to({x:333.5,alpha:0.36},0).wait(1).to({x:367.4,alpha:0.242},0).wait(1).to({x:391.6,alpha:0.158},0).wait(1).to({x:408.6,alpha:0.099},0).wait(1).to({x:420.5,alpha:0.058},0).wait(1).to({x:428.4,alpha:0.03},0).wait(1).to({x:433.5,alpha:0.012},0).wait(1).to({x:436.2,alpha:0.003},0).wait(1).to({regX:135.1,regY:16,x:437.5,y:140,alpha:0},0).wait(323));

	// sel
	this.instance_14 = new lib.pho();
	this.instance_14.parent = this;
	this.instance_14.setTransform(247.8,566.5,1,1,0,0,0,146,213.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:243.9,y:559.7},0).wait(1).to({x:239,y:550.9},0).wait(1).to({x:232.4,y:539},0).wait(1).to({x:223.2,y:522.4},0).wait(1).to({x:210.6,y:499.8},0).wait(1).to({x:198,y:477.2},0).wait(1).to({x:188.7,y:460.5},0).wait(1).to({x:182.1,y:448.7},0).wait(1).to({x:177.2,y:439.9},0).wait(1).to({x:173.4,y:433.1},0).wait(1).to({x:170.4,y:427.6},0).wait(1).to({x:167.9,y:423.2},0).wait(1).to({x:165.8,y:419.5},0).wait(1).to({x:164.1,y:416.4},0).wait(1).to({x:162.6,y:413.8},0).wait(1).to({x:161.4,y:411.6},0).wait(1).to({x:160.4,y:409.7},0).wait(1).to({x:159.5,y:408.2},0).wait(1).to({x:158.8,y:406.9},0).wait(1).to({x:158.2,y:405.8},0).wait(1).to({x:157.7,y:404.9},0).wait(1).to({x:157.3,y:404.2},0).wait(1).to({x:157,y:403.6},0).wait(1).to({x:156.8,y:403.2},0).wait(1).to({x:156.6,y:403},0).wait(1).to({x:156.5,y:402.8},0).wait(1).to({x:151.5,y:390.3},74).wait(1).to({y:390},0).wait(1).to({y:389.1},0).wait(1).to({y:387.2},0).wait(1).to({y:384.2},0).wait(1).to({y:379.9},0).wait(1).to({y:374.9},0).wait(1).to({y:370.8},0).wait(1).to({y:368.2},0).wait(1).to({y:366.9},0).wait(1).to({y:366.5},0).wait(1).to({x:151.7,y:369.4},0).wait(1).to({x:152.6,y:378.9},0).wait(1).to({x:154.1,y:396.8},0).wait(1).to({x:156.6,y:425.4},0).wait(1).to({x:160.2,y:467.2},0).wait(1).to({x:165,y:523.9},0).wait(1).to({x:170.9,y:592.4},0).wait(1).to({x:176.9,y:661.7},0).wait(1).to({x:181.8,y:719.2},0).wait(1).to({x:185.3,y:760},0).wait(1).to({x:187.5,y:785.5},0).wait(1).to({x:188.7,y:798.8},0).wait(1).to({x:189,y:802.8},0).wait(326));

	// bg
	this.instance_15 = new lib.db_bg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,301,576.5,779);
// library properties:
lib.properties = {
	id: 'ADD1D3B8A0A746C6B4DBBBB4ED094B0A',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_bg.jpg", id:"db_bg"},
		{src:"images/kft_300x600_seal_atlas_P_.png", id:"kft_300x600_seal_atlas_P_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ADD1D3B8A0A746C6B4DBBBB4ED094B0A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;