(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_banff_bigger_atlas_P_", frames: [[0,0,300,600],[0,602,300,394]]},
		{name:"300x600_banff_bigger_atlas_NP_", frames: [[302,0,300,600],[0,0,300,600]]}
];


// symbols:



(lib.db_bg = function() {
	this.spriteSheet = ss["300x600_banff_bigger_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_gondola = function() {
	this.spriteSheet = ss["300x600_banff_bigger_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_laundry = function() {
	this.spriteSheet = ss["300x600_banff_bigger_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_Mountains = function() {
	this.spriteSheet = ss["300x600_banff_bigger_atlas_NP_"];
	this.gotoAndStop(1);
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


(lib.whitey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A35NMQgWAAAEtMIAHtLMAwQAGsIAATrg");
	this.shape.setTransform(154.9,84.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitey, new cjs.Rectangle(0,0,309.7,168.8), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF853D").ss(3,2,1).p("AljAAILHAA");
	this.shape.setTransform(35.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1.5,-1.5,74.3,3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVA8IgVhLIgVBLIgWAAIgjh3IAaAAIAVBOIAWhOIAUAAIAWBOIAUhOIAaAAIgiB3g");
	this.shape.setTransform(163.3,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAtQgPgRAAgbIAAgBQAAgbAQgQQAPgRAWAAQAXAAAQARQAPAQAAAbIAAABQAAAbgQARQgPARgXAAQgXAAgPgRgAgTgbQgJAKABARIAAABQgBARAJALQAHAKAMgBQAMABAIgKQAIgLAAgRIAAgBQAAgRgIgKQgIgLgMAAQgMAAgHALg");
	this.shape_1.setTransform(149,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA7IguhHIAABHIgYAAIAAh2IAXAAIAsBFIAAhFIAYAAIAAB2g");
	this.shape_2.setTransform(137.1,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpAsIAPgSQAPANANgBQAIAAADgCQAFgDAAgGQAAgFgEgDQgFgEgLgFQgSgGgGgGQgKgIAAgPQAAgPALgLQALgJAQAAQAXAAAPAPIgNATQgNgMgMAAQgGAAgDADQgFADAAAFIAAAAQAAAFAFAEIASAJQAQAGAHAGQAIAJAAANIAAABQAAAQgLAKQgLAJgSAAQgYAAgTgRg");
	this.shape_3.setTransform(122.6,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARA7IgVgnIgQAAIAAAnIgYAAIAAh2IAsAAQAUAAAMAMQAKAKAAASIAAAAQAAAZgWAKIAZArgAgUAAIASAAQAJAAAFgFQAFgFAAgIIAAAAQAAgSgTAAIgSAAg");
	this.shape_4.setTransform(113.2,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAwQgMgMAAgYIAAhIIAYAAIAABIQAAAZAUAAQAVABAAgZIAAhJIAYAAIAABIQAAAYgMAMQgMANgVAAQgUAAgMgNg");
	this.shape_5.setTransform(101.9,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmAtQgPgRAAgbIAAgBQAAgbAQgQQAOgRAXAAQAYAAAPARQAPAQAAAbIAAABQAAAbgPARQgQARgXAAQgXAAgPgRgAgUgbQgIAKAAARIAAABQAAARAIALQAJAKALgBQANABAIgKQAHgLAAgRIAAgBQAAgRgHgKQgIgLgNAAQgMAAgIALg");
	this.shape_6.setTransform(90.3,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA7IAAgvIgnhHIAcAAIAWAvIAYgvIAbAAIgnBHIAAAvg");
	this.shape_7.setTransform(78.9,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA7IguhHIAABHIgYAAIAAh2IAXAAIAsBFIAAhFIAYAAIAAB2g");
	this.shape_8.setTransform(64.1,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdA8IgJgaIgoAAIgJAaIgYAAIAqh3IAXAAIAqB3gAANAMIgNgmIgMAmIAZAAg");
	this.shape_9.setTransform(52.5,24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjA7IAAh2IAYAAIAABgIAvAAIAAAWg");
	this.shape_10.setTransform(42.7,24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA7IAAh2IAoAAQATABAMAKQAMALAAAUQAAASgOALQgLALgTAAIgOAAIAAAkgAgQABIAOAAQAIAAAFgEQAGgGAAgIQgBgTgSAAIgOAAg");
	this.shape_11.setTransform(33.4,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF853D").s().p("AuzD8QgoAAAAgoIAAmnQAAgoAoAAIdnAAQAoAAAAAoIAAGqQgBAkgkABg");
	this.shape_12.setTransform(98.8,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,197.7,50.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_gondola();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCBuIAAjbICDAAIAAArIhQAAIAAAsIBJAAIAAAqIhJAAIAAAwIBSAAIAAAqg");
	this.shape.setTransform(184.4,51.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeBuQgHgugFgNQgGgQgOAAIgdAAIAABLIg0AAIAAjbIBaAAQAhgBASAMQAZAQAAAkQAAAxgqALQAUADAKAXQAIAUAFAygAgfgHIAYAAQASAAAJgGQAJgHAAgUQAAgPgGgGQgFgEgOAAIgjAAg");
	this.shape_1.setTransform(165.8,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBuIAAjbICDAAIAAArIhRAAIAAAsIBKAAIAAAqIhKAAIAAAwIBTAAIAAAqg");
	this.shape_2.setTransform(147,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBuIAAhZIhEAAIAABZIg0AAIAAjbIA0AAIAABVIBEAAIAAhVIAzAAIAADbg");
	this.shape_3.setTransform(127.3,51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBuQgHgugFgNQgGgQgOAAIgdAAIAABLIg0AAIAAjbIBaAAQAhgBASAMQAZAQAAAkQAAAxgqALQAUADAKAXQAIAUAFAygAgfgHIAYAAQASAAAJgGQAJgHAAgUQAAgPgGgGQgFgEgOAAIgjAAg");
	this.shape_4.setTransform(100.5,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBuIAAjbICDAAIAAArIhQAAIAAAsIBJAAIAAAqIhJAAIAAAwIBSAAIAAAqg");
	this.shape_5.setTransform(81.7,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag9BZQgagYAAg+QAAhCAbgaQAYgXAwAAQAxgBAZAXIgeAlQgSgOgdAAQgWgBgKALQgJAMAAAtQAAAzAKALQAJAKAXAAQASAAANgEIAAgqIgkAAIAAgpIBTAAIAAByQgjAOgpABQgxAAgYgZg");
	this.shape_6.setTransform(62.1,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BZQgagYAAg+QAAhCAbgaQAYgXAwAAQAxgBAZAXIgeAlQgSgOgdAAQgWgBgKALQgJAMAAAtQAAAzAKALQAJAKAXAAQASAAANgEIAAgqIgkAAIAAgpIBTAAIAAByQgjAOgpABQgxAAgYgZg");
	this.shape_7.setTransform(41.4,51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBuIAAjbIAzAAIAADbg");
	this.shape_8.setTransform(26.6,51.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQBuIAAjbIBbAAQAggBAQANQASAOAAAbQAAApgkALQAoAFAAAsQAAAhgVARQgUAPgiAAgAgeBGIAeAAQAOgBAHgFQAHgHAAgOQAAgOgHgGQgGgEgNgBIggAAgAgegTIAYAAQAdAAAAgcQAAgMgFgFQgEgEgMAAIggAAg");
	this.shape_9.setTransform(12.4,51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBuIAAjbICDAAIAAArIhQAAIAAAsIBJAAIAAAqIhJAAIAAAwIBSAAIAAAqg");
	this.shape_10.setTransform(159.1,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBuQgHgugFgNQgGgQgOAAIgdAAIAABLIg0AAIAAjbIBaAAQAhgBASAMQAZAQAAAkQAAAxgqALQAUADAKAXQAIAUAFAygAgfgHIAYAAQASAAAJgGQAJgHAAgUQAAgPgGgGQgFgEgOAAIgjAAg");
	this.shape_11.setTransform(140.5,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAuBuIgMgpIhFAAIgMApIg1AAIBGjbIA9AAIBFDbgAAYAbIgYhUIgXBUIAvAAg");
	this.shape_12.setTransform(120,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhOBcIAagmQAUAQAgAAQAbAAAAgXQAAgMgQgIIgigMQgYgIgLgLQgQgQAAgbQAAgfAZgSQAXgRAhAAQAsAAAXATIgYAlQgTgNgbAAQgaAAAAAWQABALAQAHQAIAEAZAHQAXAJAMALQAQAQAAAcQAAAjgcATQgXAPghAAQgxAAgYgWg");
	this.shape_13.setTransform(95.1,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBuIAAhSIhDiJIA7AAIAiBWIAjhWIA7AAIhFCJIAABSg");
	this.shape_14.setTransform(77.6,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuBuIgLgpIhGAAIgLApIg1AAIBFjbIA9AAIBFDbgAAYAbIgYhUIgYBUIAwAAg");
	this.shape_15.setTransform(58.6,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhYBuIAAjbIBXAAQArgBAVAVQAZAYAABAQABBCgcAZQgWAUgnAAgAgkBBIAhAAQASABAKgLQAKgMgBgrQAAgrgKgMQgIgJgTAAIghAAg");
	this.shape_16.setTransform(38.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,194.8,72.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBuIhFiVIACCVIgyAAIAAjbIBBAAIBGCWIgCiWIAyAAIAADbg");
	this.shape.setTransform(229,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBuIAAjbIAzAAIAADbg");
	this.shape_1.setTransform(212.8,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBuIgLgpIhGAAIgLApIg1AAIBFjbIA9AAIBFDbgAAYAbIgYhUIgYBUIAwAAg");
	this.shape_2.setTransform(198.1,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBuIAAitIg5AAIAAguIClAAIAAAuIg5AAIAACtg");
	this.shape_3.setTransform(179.7,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaBuIhFiVIACCVIgyAAIAAjbIBCAAIBFCWIgCiWIAyAAIAADbg");
	this.shape_4.setTransform(159.8,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBXQgPgSgBgmIAAiOIA0AAIAACNQAAAUAGAIQAGAKAXAAQAVAAAHgKQAGgHAAgVIAAiNIAzAAIAACMQAAAlgOATQgWAcgyAAQgxAAgVgag");
	this.shape_5.setTransform(137.6,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBbQgZgaAAg/QAAhAAcgcQAYgYAtAAQAvAAAYAYQAZAZAABAQAABAgcAbQgZAZgtAAQguAAgYgYgAgdg6QgMANAAAtQAAAwAMANQAJAKAUAAQAUAAAKgMQAMgOAAgtQAAgvgMgNQgJgKgUAAQgUAAgKAMg");
	this.shape_6.setTransform(115.7,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABIBuIgGiiIgrCYIguAAIgriYIgFCiIgyAAIAMjbIBGAAIAnCKIApiKIBFAAIAMDbg");
	this.shape_7.setTransform(90.9,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBuIgiiWIgiCWIg7AAIgvjbIA0AAIAcCfIAjiZIA0AAIAjCZIAcifIAzAAIgwDbg");
	this.shape_8.setTransform(56.4,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCBuIAAjbICDAAIAAArIhRAAIAAAsIBKAAIAAAqIhKAAIAAAwIBTAAIAAAqg");
	this.shape_9.setTransform(33.7,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaBuIhFiVIACCVIgyAAIAAjbIBBAAIBGCWIgCiWIAyAAIAADbg");
	this.shape_10.setTransform(13.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,242.6,36.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_Mountains();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_laundry();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,394), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBuIgMgpIhEAAIgNApIg1AAIBGjbIA9AAIBGDbgAAXAbIgXhUIgXBUIAuAAg");
	this.shape.setTransform(162,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeBuQgHgugFgNQgGgQgOAAIgdAAIAABLIg0AAIAAjbIBaAAQAhgBASAMQAZAQAAAkQAAAxgqALQAUADAKAXQAIAUAFAygAgfgHIAYAAQASAAAJgGQAJgHAAgUQAAgPgGgGQgFgEgOAAIgjAAg");
	this.shape_1.setTransform(136.2,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBuIAAjbICDAAIAAArIhQAAIAAAsIBJAAIAAAqIhJAAIAAAwIBSAAIAAAqg");
	this.shape_2.setTransform(117.3,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhGBXQgQgSAAgmIAAiOIA0AAIAACNQAAAUAGAIQAGAKAXAAQAVAAAHgKQAFgHABgVIAAiNIA0AAIAACMQAAAlgPATQgWAcgyAAQgxAAgVgag");
	this.shape_3.setTransform(97.6,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBeQgNADgOAAQguAAgYgYQgZgaAAg+QAAhBAbgcQAZgZAuABQAugBAYAZQAZAZgBA/QAAA8gWAaIAbAeIgoAmgAgghNQgLAOAAAuQAAAvALANQAKAKAUAAQAUAAAKgMQALgOAAgsQAAgxgLgMQgJgKgTAAQgVgBgLAMg");
	this.shape_4.setTransform(76,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBuIhGiVIABCVIgxAAIAAjbIBCAAIBFCWIgBiWIAxAAIAADbg");
	this.shape_5.setTransform(53.4,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBbQgZgaAAg/QAAhAAcgcQAYgYAtAAQAvAAAYAYQAZAZAABAQAABAgcAbQgZAZgtAAQguAAgYgYgAgdg6QgMANAAAtQAAAwAMANQAJAKAUAAQAUAAAKgMQAMgOAAgtQAAgvgMgNQgJgKgUAAQgUAAgKAMg");
	this.shape_6.setTransform(31,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BcQgagaAAhAQAAhAAagbQAXgYAqAAQAtAAAWAYIgcAjQgPgOgZAAQgUAAgIAMQgIAOAAAsQAAAsAJANQAIALAQAAQAYAAAUgWIAeAfQgeAjguAAQgnAAgUgWg");
	this.shape_7.setTransform(11.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,174.2,36.5), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiXAOgIAA8/MBEvAAAIAAc/g");
	mask.setTransform(220,92.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkzLZQiOg8hthtQhuhug8iOQg/iTAAihQAAhlAbhkIgCgFIADgBQBGj/DSijQDVimEOAAQB5AABzAlQBzAkBkBFIg9A9QhXg6hjgeQhkgehoAAQjlAAi6CIQi2CFhIDVQCXgOB3BEQAwAbApAqIEdkdIBqBrIg8A8IgugvIjmDmQA+BZAiB+QBqgUBNAuQBZAzAfB8QBqgOBIAzQBHAyASBrQB8hZBNiFQBPiIANicIijiiIjKDIIh9h8IA8g8IBBBBIDKjJICjCjQgPi4hpiZIA9g9IABABQBHBlAmB0QAlB1AAB6QAAChg/CTQg8COhtBuQhuBtiOA8QiTA/ihAAQigAAiTg/gAq0iIQgOBGAABCQAAEkDQDQQBhBhB/A2QCEA4COAAQCwAACbhTQgGhkg1gmQgkgag8ACIg0AIIgvAOIgIgwQgTh2hDgoQgrgYg+AFIg2ALIgtARIgLgvQg3j4iahYQg/gkhNgIQgVgCgVAAQgiAAgjAGg");
	this.shape.setTransform(88,89.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipCIIEykzIAhAnIkwEwg");
	this.shape_1.setTransform(17,151.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjQCuIGAl/IAgAnIl8F8g");
	this.shape_2.setTransform(20.9,164.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AHKnbIAkAjIuRORIhKADg");
	this.shape_3.setTransform(118.7,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AoJHhIPvvzIAkAjIv+QCg");
	this.shape_4.setTransform(116.3,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiZDSIAAmjICtAAQAtAAAhAhQAhAgAAAuIAAAkQAAAagMAYQAIAFAHAHIAAAAIAIAMQAMAYAAAbIAAAjQAAAughAhQggAhguAAgAhBB9IBsAAQAKAAAGgHQAHgHAAgKIAAgmQAAgIgFgHQgGgHgIgBIhwAAgAhBgnIBYAAQAJgBAFgHQAGgGAAgJIAAgmQAAgKgHgHQgHgHgJAAIhVAAg");
	this.shape_5.setTransform(214.9,65.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/DSIAAicIh8AjIAAB5IhZAAIAAk0QAAguAhggQAhghAuAAIBOAAQAuAAAgAhQAhAgAAAuIAAE0gAg2hyQgHAHAAAJIAABhIB8giIAAg/QAAgJgHgHQgHgHgJAAIhOAAQgKAAgGAHg");
	this.shape_6.setTransform(424.9,120.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRDSQgtAAghghQghggAAguIAAk0IBYAAIAAE0QAAAKAHAGQAHAHAJAAICRAAIABBYg");
	this.shape_7.setTransform(391.7,120.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnDSQgtAAggghQghggAAguIAAjFQAAgtAhghQAgghAtAAIBPAAQAtAAAhAhQAgAhAAAtIAADFQAAAuggAgQghAhgtAAgAg3hyQgHAHAAAJIAADFQAAAKAHAGQAHAHAJAAIBPAAQAJAAAHgHQAHgGAAgKIAAjFQAAgJgHgHQgHgHgJAAIhPAAQgJAAgHAHg");
	this.shape_8.setTransform(358.2,120.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiVDSIAAmjIC8AAQAuAAAhAhQAgAgAAAuIAADGQAAAtggAgQggAhgvAAgAg+B6IBlAAQAKAAAHgGQAHgHAAgJIAAjGQAAgJgHgHQgHgHgKAAIhlAAg");
	this.shape_9.setTransform(322.6,120.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABADSIAAk0QAAgJgHgHQgGgHgKAAIhoAAIAAFLIhXAAIAAmjIC/AAQAtAAAgAhQAhAhAAAtIAAE0g");
	this.shape_10.setTransform(286.2,120.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnDSQgtAAghghQggggAAguIAAjFQAAgtAgghQAhghAtAAIBPAAQAtAAAhAhQAgAhAAAtIAADFQAAAuggAgQghAhgtAAgAg3hyQgHAHAAAJIAADFQAAAKAHAGQAGAHAKAAIBPAAQAJAAAHgHQAHgGAAgKIAAjFQAAgJgHgHQgHgHgJAAIhPAAQgKAAgGAHg");
	this.shape_11.setTransform(250.5,120.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnDSQgtAAghghQggggAAguIAAjFQAAguAgggQAhghAtAAIBNAAQAuAAAhAhQAhAgAAAuIAAAPIhYATIAAgiQAAgKgHgHQgHgHgKAAIhNAAQgJAAgHAHQgHAHAAAKIAADFQAAAKAHAGQAHAHAJAAIBNAAQAKAAAHgGQAHgGAAgJIAAghIg+AQIAAhRICWglIAACGQAAAtghAhQghAgguAAg");
	this.shape_12.setTransform(214.9,120.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiADSIAAk0QABgtAgghQAfggAvgBICSAAIAABYIiSAAQgJAAgHAHQgIAHAAAJIAABaICAgjIAABbIiAAiIAACAg");
	this.shape_13.setTransform(353,64.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiADSIAAk0QAAgtAgghQAgggAvgBICSAAIAABYIiSAAQgKAAgGAHQgHAHAAAJIAABaIB/gjIAABbIh/AiIAACAg");
	this.shape_14.setTransform(321,64.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABADSIAAk0QAAgJgHgHQgHgHgJAAIhoAAIAAFLIhXAAIAAmjIC/AAQAtABAhAgQAgAhAAAtIAAE0g");
	this.shape_15.setTransform(286.8,64.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA+DSIAAicIh8AjIAAB5IhYAAIAAk0QAAgtAhghQAgggAvgBIBOAAQAtABAhAgQAgAhABAtIAAE0gAg2hxQgIAGAAAJIAABhIB8giIAAg/QABgJgIgGQgGgIgJABIhOAAQgKgBgGAIg");
	this.shape_16.setTransform(250.4,64.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,440,185.7), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgJBkIAAjHIASAAIAADHg");
	this.shape_17.setTransform(7.6,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACfDvQgngRgQg9QgPg3AKg8Qg0BNgiAiQg9A8hFACQg3ACgegaQgZgYgEgrQgLADgVgFQgWgFAAgJQABgHAVgDIAhgDQAEgmASgnQASgkAZgYQAxgvA0gHQA0gIASAkQAWAnghAuQgmA0hVAgQgPAGgTAEQAAAoAVAQQAZASAugUQBAgbA4hNQAzhGAQhDQAPhtAIghQACgJAAgMQABgJACgCQADgCALABQAmAEALARQAHAKgCARQgBAIgGAUIgDAKQgMAlgJA5IgLBKQgKBFADAxQADBGAeAQQARAJAUgDQAUgDAUgOQAIgFADADQAAAAAAAAQABAAAAABQAAAAAAABQAAAAgBABQgTAggkALQgPAEgPAAQgUAAgVgJgAgvg3QgSAEgbAXQgXATgSAeQgQAcgIAfQA+gZAogtQAkgogJgTQgDgGgJAAIgHAAg");
	this.shape_18.setTransform(146.8,92);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ai3DMQgSgSgBg2QAAgfAHhFQAFgmAAgVIABgVIgBgbQAAgZANgLQAMgKASAEQAKACAHAHQALAKABATQAAAUgKA7IgHA7QAhh7ArhAQAqg9A3gRQA6gRAwAYQAnAUAPAiQAFALAAAFIAAABQgHgCgGgFQhFgvhIAgQhFAfg0BdQg1BcgLBxQgBAKACANIABAIQgDAEgPAAIgGAAQgQAAgJgKg");
	this.shape_19.setTransform(57.5,92.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAwDNQgMgMgCgQQgOhfgfhGIgDABQgDAlgRArQgRAsgZAcQgcAgghADQgYABgRgPQgggcgDhYIAAgGIgCAFQguBPgdAdQgqAqgrgOQgSgGgJgTQgOgdALg4QAKgvAWgxQAhhKAlgdQAagUAgABQAgABAPAYQAJANABARQABAQgGAMQgDAHgCAAQgCAAgFgIQgPgXgSgBQgkgBggA9QgZAwgLA+QgGAjAPAGQARAHAcgmIAmg6QAXglAKgNQARgSANADQASADAGANQAFANADAnQACAnAJAXQAJAXANAAQASAAASgeQAYgnALg2QAMg8gRgeQgcgggUAAQgJAAgBgEQgCgEAPgJQAlgVAoATQAiAQAdA3QAkBDARBxIADAAQA0h9A/hgQAuhGAcgZQAhgfAjAAQAhAAATAeQAJAQgDAHQgDAGgKgDQgcgJguAjQgtAigmA6QgqA7grBVQggBAgGARQgJAegeACIgEAAQgPAAgLgLg");
	this.shape_20.setTransform(94.7,95.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXD5QgYgWgMgwQgLgtAFhRIAFg0QALhtAfh2QACgNgEgIQgDgHACgDQAMgNAeACQAfADALATQAFAJgBAMIAAACIgEAOQgVAsgRBFQgQBEgIBJIgDAxQgHBwAVAiQAKASATALIgCAAIgGAAQgiAAgWgUg");
	this.shape_21.setTransform(29.4,89.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ak6A4QgqgDgEgaQgFggAHgGQADgCAGACIABABQAKAFAVgDIAPgCQBCgJAegGIgBAAQDogmCWAKQBNAFAtASQAsATAQAiIAAAAQADAFACAIQACAJgCADIgBAAIgLgFIgCgCQgZgQgSgFQgbgIg7gEQgegChEADQhIADhDAHIgnAEIABAAQjaAhglAAIgDAAg");
	this.shape_22.setTransform(36.3,57.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AFhEzQgsgNAFhNQAFhDAlhTQjjEmh3hKQhLgwAbjqQhKAugwA8Qg4BHgFBJQgBAQACAOQgBAIgWACQg5AFAGhfQASh1ADgpQgtBRhABBQhZBahUAHQg/AGgjgcQgfgZgGgwQg7AMhKAJQgeAignATQg0Aag2AAQgvABgcgSQgigVAEgVQAEgSAegKQgRhRAOi5QARizgCgZQgCgiACgFQADgKATADQA4AIAGAsQABANgLA6QgNA9gGBMIgKCAQAVhPAngrQAyg4BIASQBCAQAIBUQAJBRgxBOQBEgJAlgJQACgrATgtQASgrAbgdQA2g3A7gMQA6gLAZAnQAaAqgkA4QgoA8hfAqQgOAGgYAIQABAtAaAQQAcATA0gZQBBgfBAhRQAkgtA5hUQAgguAgAKQAfAIAAAiQgBASgIAlIgOA/QAkhDAxgyQAvgyA2ggIAOhVQAEgaAKgrIAFgmQADgLARADQA3AIACAsQABAMgQA8IgGAUQACgDgFAYIAIgCQBRgSBBAcQA1AWANAiQAHASgDADQgDADgRgIQgngTg0gCQhAgChCAaQgTBtACBIQABBQAbAVQAzAmB5iEQA/hGBNhpQAkgsAjgaQAogfAfAAQArAAARAmQAOAggMAdQgHARgNgOQgSgTgNADQgpAHgpBVQghBDgOBCQgIAnAPABQAQABAhgsQAbgjAthEQAlgzAagDQAngEALAcIAIA3QAHA6AhAqQAxA8BaAAQBaAABGhMQBBhHAAhOQAAgkgQgOIgMgOQAEgJANgBQAPgBAOAIQAoAVACA3QAFBihVBJQhZBMiJAAQh7AAg/hEQgtgxgIhHQhEBnghApQgvA6gpAAQgJAAgIgDgAvgDoIgBAOQAAALgHAGQAOADAQgDQAfgFAeghQgsAFgnACgAusAhQgkBHgNBfIBrgKQAnhAAMhKQALhKgegKQgIgDgHAAQgnAAgkBFgAnrgYQgUAFgeAbQgaAXgSAkQgRAhgHAjQBFgfArg2QAngwgLgUQgEgHgJAAIgJABg");
	this.shape_23.setTransform(397.6,86.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AqeG/QgTgVACgQQADgQARAOQAqAjBCAEQBoAHBeheQC1i0ClkhQAzheA0hqIA3hzQAdg7AjgWQAigWAiASQARAIACADQADADgFAIQgZAogMAtQgZBZgGCPQgGCDAKCPQD8iTAqjKIAEgmQABgLARADQA4AIAGAsQABANgLA7QgiCngIBsQgJB4ASBpQALA5AeAmQAbAjAeAFQAGABALgCQAJgCABADQACAEgIAHQgKAIgOACQggADgigTQgegQgSgXQg+hTgBjCQgBh5AVh8QhOCMi9B0QAOCIAaBdQBeAbgUAqQgLAXgQAHQgUAJgegRQgygdkUiEQghgPgPgMQgTgPABgOQABgOARgMQASgMAegIQBigaBrg1QgLh6gBh2QgBhiAHhNQhhC8hhCfQiXD3hyByQg9A9hfAPQgVADgUAAQhcAAhChHgAC5F0QgPg5gNhnQhQAqhWAgQBpA2BZAgIAAAAg");
	this.shape_24.setTransform(222.2,75.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgiBKIAAiTIBFAAIAACTg");
	this.shape_25.setTransform(429.5,140.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiBKIAAiTIBFAAIAACTg");
	this.shape_26.setTransform(454.7,140.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgCBLIAAgYQAAgDgEAAIglAIQAHgKAAgFQAAgDgFgFIghgaIAFgCQADgBAAgDIgFgYIATAEQADAAABgEIAFgJIARATQAAABAAAAQAAAAABABQAAAAABAAQAAAAAAAAQADAAAAgEIgJgpIAPAIIADgDIAMgXIAMAXQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAPgIIgJAqQAAABABAAQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAQgTIAFAJQADAEACAAIATgEIgHAYQAAACADACIAHACIgiAaQgEAEAAAFQAAAEAGAKIgkgIQgFAAAAADIAAAYg");
	this.shape_27.setTransform(442.2,140.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AFbBeQgPgLAAgVQAAgbAZgKQALgEAqgFQANgCAEgDQAGgEAAgKQAAgegmAAQgRAAgKAIQgLAJgBAQIgRAAQABgYAQgMQAPgMAaAAQA1AAAAAvIAABMQAAAKALAAIAFgBIAAAPIgLABQgMAAgFgHQgEgFAAgNIAAAAQgKAPgLAHQgMAHgUAAQgVAAgNgKgAGhAcIgsAIQgXAHAAASQAAANAKAIQAJAIANAAQAVAAAPgMQAPgNAAgVIAAgXIgBAAQgCAEgNADgAC9BRQgQgUAAghQAAggAQgVQASgXAfAAQARAAAOAIQAOAJAFAPIABAAIAAhTIASAAIAADHIgRAAIAAgbIAAAAQgGAOgPAJQgPAIgQAAQgfAAgSgXgADKgNQgLAQAAAZQAAAZALARQANAUAXAAQAaAAAOgUQALgRAAgZQAAgagLgPQgOgUgaAAQgXAAgNAUgAAoBeQgOgLAAgVQAAgbAYgKQAMgEApgFQANgCAEgDQAGgEAAgKQAAgegmAAQgmAAAAAhIgSAAQABgYAQgMQAQgMAaAAQA1AAAAAvIAABMQAAAKAKAAIAGgBIAAAPIgMABQgMAAgFgHQgDgFAAgNIgBAAQgKAPgLAHQgMAHgUAAQgVAAgNgKgABvAcIgtAIQgXAHAAASQAAANAKAIQAKAIANAAQAVAAAOgMQAPgNAAgVIAAgXIAAAAQgDAEgMADgAj/BeQgPgLAAgVQAAgbAZgKQALgEAqgFQANgCAEgDQAGgEAAgKQAAgegmAAQgmAAgBAhIgRAAQABgYAQgMQAPgMAaAAQA2AAAAAvIAABMQAAAKAKAAIAGgBIAAAPIgMABQgMAAgFgHQgEgFAAgNIAAAAQgKAPgLAHQgMAHgUAAQgVAAgNgKgAi5AcIgsAIQgXAHAAASQAAANAKAIQAJAIANAAQAVAAAPgMQAPgNAAgVIAAgXIgBAAQgCAEgNADgAm6BJQgXgdAAgsQAAgrAXgdQAagfAtAAQAeAAAXARQAYASAEAeIgTAAQgFgXgSgNQgQgNgXAAQglAAgUAcQgSAYAAAjQAAAkASAZQAUAbAlAAQAbAAASgSQARgSACgcIAUAAQgEAlgWAWQgXAVgjAAQgtAAgagfgAgQBkIAAhaQAAgrglAAQgVAAgMAPQgMANgBAVIAABUIgRAAIAAiPIARAAIAAAYIABAAQAFgMANgJQANgIAPAAQAdAAANAPQAKAOAAAaIAABdg");
	this.shape_28.setTransform(366.5,137.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNgLIAeABIAEAFQgPAEgRAHIgJAGQAGgMABgLg");
	this.shape_29.setTransform(65.9,84.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AApBkIAAhaQAAgrglAAQgTAAgNAOQgLAOgBAVIAABUIgSAAIAAjHIASAAIAABQIABAAQAEgMANgJQANgHAPgBQAdABAMAPQAMANAAAaIAABdg");
	this.shape_30.setTransform(219.7,10);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDBYQgHgHAAgTIAAhhIgZAAIAAgPIAZAAIAAgsIARAAIAAAsIAdAAIAAAPIgdAAIAABgQAAAKACAEQADAFAJAAIAPgBIAAAPIgQABQgSAAgFgHg");
	this.shape_31.setTransform(207.7,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIBkIAAiPIARAAIAACPgAgIhGIAAgdIARAAIAAAdg");
	this.shape_32.setTransform(201.3,10);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAkBIIgkh4IAAAAIgjB4IgTAAIgviPIATAAIAlB7IABAAIAjh7IATAAIAjB7IABAAIAlh7IATAAIgvCPg");
	this.shape_33.setTransform(188.4,12.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhCBlIAAjFIARAAIAAAbIAAAAQAGgOAOgIQAOgJARAAQAfAAASAXQAQAUAAAhQAAAggQAUQgSAYgfAAQgQgBgNgHQgPgJgFgPIgBAAIAABRgAgwgYQAAAZALARQAOATAZAAQAXAAANgTQALgRAAgZQAAgZgLgQQgNgVgXAAQgyABAAA9g");
	this.shape_34.setTransform(162.5,15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIBkIAAiPIARAAIAACPgAgIhGIAAgdIARAAIAAAdg");
	this.shape_35.setTransform(151.6,10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AApBkIAAhaQAAgrglAAQgTAAgNAOQgLAOgBAVIAABUIgSAAIAAjHIASAAIAABQIABAAQAFgMANgJQAMgHAPgBQAdABAMAPQAMANAAAaIAABdg");
	this.shape_36.setTransform(141.4,10);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag6AaIASAAQABARAMAKQAMAJARAAQAPAAALgGQANgIAAgOQAAgLgKgHQgGgEgPgEIgWgFQgUgEgJgIQgLgJAAgRQAAgUARgLQAPgJAVAAQAXAAAOALQAPANABAWIgSAAQAAgPgMgJQgKgIgPAAQgNAAgKAGQgLAHAAAMQAAARAeAIIAXAFQARADALAIQANALAAARQAAAWgTALQgQAKgXAAQg2AAgFgyg");
	this.shape_37.setTransform(127.2,12.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgjBJIAAiPIARAAIAAAiIAAAAQAHgSANgJQAOgKAUABIAAARQgYgBgOAPQgPAPAAAXIAABMg");
	this.shape_38.setTransform(116.9,12.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgwA2QgQgVAAghQAAgfAQgUQARgYAgAAQAgAAARAZQAPAWgBAhIhuAAQAAAWALAQQANATAXAAQAkAAAJglIASAAQgNAzgyAAQggAAgRgWgAgggtQgMAOgCAWIBcAAQAAgVgMgPQgNgQgUAAQgUAAgNAQg");
	this.shape_39.setTransform(104.5,12.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AApBKIAAhZQAAgsglAAQgTAAgNAPQgLANgBAWIAABTIgSAAIAAiPIASAAIAAAZIABAAQAFgNANgIQAMgIAPAAQAdAAAMAPQAMANAAAbIAABcg");
	this.shape_40.setTransform(89.6,12.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDBYQgHgHAAgTIAAhhIgZAAIAAgPIAZAAIAAgsIARAAIAAAsIAdAAIAAAPIgdAAIAABgQAAAKACAEQADAFAJAAIAPgBIAAAPIgPABQgSAAgGgHg");
	this.shape_41.setTransform(77.6,10.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgjBJIAAiPIARAAIAAAiIAAAAQAHgSANgJQAOgKAUABIAAARQgYgBgOAPQgPAPAAAXIAABMg");
	this.shape_42.setTransform(69.1,12.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgzBCQgPgLAAgVQAAgaAYgJQANgFAogFQAMgCAFgDQAFgEAAgLQAAgeglAAQgRAAgKAIQgLAJAAARIgSAAQACgYAQgNQAPgLAZAAQA1AAAAAuIAABMQAAAKALAAIAFgBIAAAPIgLABQgNAAgFgHQgDgFAAgNIgBAAQgKAPgLAHQgMAHgSAAQgWAAgMgKgAASAAQgfAEgNAEQgWAHgBASQABANAJAIQAKAIANAAQAUAAAOgMQAPgNAAgVIAAgWIgBAAQgBAEgNACg");
	this.shape_43.setTransform(56.9,12.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhCBlIAAjFIARAAIAAAbIAAAAQAGgOAOgIQAOgJARAAQAfAAASAXQAQAUAAAhQAAAggQAUQgSAYgfAAQgQgBgNgHQgPgJgFgPIgBAAIAABRgAgwgYQAAAZALARQAOATAZAAQAXAAANgTQALgRAAgZQAAgZgLgQQgNgVgXAAQgyABAAA9g");
	this.shape_44.setTransform(41.6,15.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AApBKIAAhZQAAgsglAAQgTAAgNAPQgLANgBAWIAABTIgSAAIAAiPIASAAIAAAZIABAAQAFgNANgIQAMgIAPAAQAdAAAMAPQAMANAAAbIAABcg");
	this.shape_45.setTransform(17.9,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,508.1,148.2), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib._300x600_banff_bigger = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(172.4,208,0.166,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(242).to({_off:false},0).to({scaleX:1},14,cjs.Ease.get(1)).wait(6));

	// Layer_6
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.1,550.6,1,1,0,0,0,98.8,25.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(205).to({_off:false},0).wait(1).to({y:550,alpha:0.048},0).wait(1).to({y:549.2,alpha:0.111},0).wait(1).to({y:548.1,alpha:0.202},0).wait(1).to({y:546.5,alpha:0.335},0).wait(1).to({y:544.6,alpha:0.497},0).wait(1).to({y:543,alpha:0.625},0).wait(1).to({y:542,alpha:0.712},0).wait(1).to({y:541.3,alpha:0.773},0).wait(1).to({y:540.7,alpha:0.819},0).wait(1).to({y:540.3,alpha:0.855},0).wait(1).to({y:539.9,alpha:0.884},0).wait(1).to({y:539.7,alpha:0.908},0).wait(1).to({y:539.4,alpha:0.927},0).wait(1).to({y:539.2,alpha:0.943},0).wait(1).to({y:539.1,alpha:0.956},0).wait(1).to({y:538.9,alpha:0.967},0).wait(1).to({y:538.8,alpha:0.976},0).wait(1).to({alpha:0.983},0).wait(1).to({y:538.7,alpha:0.989},0).wait(1).to({y:538.6,alpha:0.993},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:1},0).wait(34));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_200 = new cjs.Graphics().p("A4aNVIAA6pINYCEIAIAmQALAuARArQA1CFBZAlIAqAwIJuA1IGgi3QAggNAxgWQAygXAmgtQAlgtAVg4QAWg3ANhKILtAAIAAabg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(200).to({graphics:mask_graphics_200,x:149.1,y:517.6}).wait(62));

	// Layer 1
	this.instance_2 = new lib.whitey();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,687.3,1,1,0,0,0,154.8,84.4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200).to({_off:false},0).wait(1).to({regX:154.9,x:150.6,y:680.2},0).wait(1).to({y:671.2},0).wait(1).to({y:659.1},0).wait(1).to({y:642},0).wait(1).to({y:618.8},0).wait(1).to({y:595.6},0).wait(1).to({y:578.5},0).wait(1).to({y:566.4},0).wait(1).to({y:557.4},0).wait(1).to({y:550.4},0).wait(1).to({y:544.8},0).wait(1).to({y:540.2},0).wait(1).to({y:536.4},0).wait(1).to({y:533.2},0).wait(1).to({y:530.6},0).wait(1).to({y:528.3},0).wait(1).to({y:526.4},0).wait(1).to({y:524.8},0).wait(1).to({y:523.5},0).wait(1).to({y:522.4},0).wait(1).to({y:521.5},0).wait(1).to({y:520.7},0).wait(1).to({y:520.2},0).wait(1).to({y:519.8},0).wait(1).to({y:519.5},0).wait(1).to({y:519.3},0).wait(1).to({regX:154.8,x:150.5},0).wait(35));

	// logo
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.8,66.8,0.311,0.311,0,0,0,219.9,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(262));

	// Travel Alberta
	this.instance_4 = new lib.ClipGroup_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(152.8,538.8,0.389,0.389,0,0,0,254.2,74.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(154).to({_off:false},0).to({alpha:1},19).wait(89));

	// Layer_5
	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.7,173.6,1.35,1.35,0,0,0,97.5,36.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(136).to({_off:false},0).wait(1).to({regX:97.7,regY:33.6,scaleX:1.34,scaleY:1.34,x:150,y:169.7,alpha:0.033},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.074},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:169.8,alpha:0.125},0).wait(1).to({scaleX:1.28,scaleY:1.28,alpha:0.192},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:169.9,alpha:0.281},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:149.9,y:170.1,alpha:0.394},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:170.2,alpha:0.511},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:170.3,alpha:0.605},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.676},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:170.4,alpha:0.73},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.773},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:170.5,alpha:0.808},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.837},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.861},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.882},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:170.6,alpha:0.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.915},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.929},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.94},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.95},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.959},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.967},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.974},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.979},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.988},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,y:170.7,alpha:0.996},0).wait(1).to({y:170.6,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:97.4,regY:36.5,x:149.7,y:173.6},0).wait(93));

	// Layer_4
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,127.2,1.485,1.485,0,0,0,121.2,18.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).wait(1).to({regY:15.5,scaleX:1.47,scaleY:1.47,y:124.3,alpha:0.04},0).wait(1).to({scaleX:1.42,scaleY:1.42,y:127.2,alpha:0.138},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:150.1,y:131.4,alpha:0.285},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:150,y:135.2,alpha:0.415},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:138.1,alpha:0.515},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:140.3,alpha:0.593},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:142.1,alpha:0.655},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:143.6,alpha:0.706},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:144.9,alpha:0.75},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:145.9,alpha:0.787},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:146.8,alpha:0.818},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:147.6,alpha:0.846},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:148.4,alpha:0.87},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:148.9,alpha:0.891},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:149.5,alpha:0.909},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:149.9,alpha:0.925},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:150.3,alpha:0.939},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:150.7,alpha:0.951},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:151,alpha:0.962},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.2,alpha:0.97},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.4,alpha:0.978},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.6,alpha:0.984},0).wait(1).to({scaleX:1,scaleY:1,y:151.8,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,y:151.9,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,y:152,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,y:152.1,alpha:1},0).wait(1).to({regY:18.2,y:154.8},0).wait(30).to({regX:121.3,scaleX:0.8,scaleY:0.8,alpha:0},30,cjs.Ease.cubicInOut).wait(107));

	// mount2
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,300,1.35,1.35,0,0,0,150,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(125).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},33,cjs.Ease.cubicInOut).wait(104));

	// mount1
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,300,1.35,1.35,0,0,0,150,300);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},33,cjs.Ease.cubicInOut).wait(173));

	// Layer_1
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,90.8,1.444,1.444,0,0,0,87.1,18.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({_off:false},0).wait(1).to({regX:87.7,regY:17.3,scaleX:1.44,scaleY:1.44,x:150.8,y:90.7,alpha:0.019},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:150.9,y:93,alpha:0.056},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:150.8,y:96.8,alpha:0.116},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:102.1,alpha:0.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:107.9,alpha:0.291},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:150.7,y:113.2,alpha:0.374},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:150.8,y:117.6,alpha:0.444},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:150.7,y:121.4,alpha:0.504},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:124.6,alpha:0.554},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:127.5,alpha:0.598},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:129.9,alpha:0.637},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:132.1,alpha:0.672},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:134,alpha:0.702},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:135.8,alpha:0.73},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:137.4,alpha:0.755},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:138.8,alpha:0.777},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:140.1,alpha:0.798},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150.6,y:141.3,alpha:0.817},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150.7,y:142.4,alpha:0.834},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150.6,y:143.4,alpha:0.85},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:144.4,alpha:0.865},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.7,y:145.3,alpha:0.879},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.6,y:146,alpha:0.891},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:146.8,alpha:0.902},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:147.4,alpha:0.913},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:148,alpha:0.923},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:148.6,alpha:0.932},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:149.1,alpha:0.94},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:149.6,alpha:0.947},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:150,alpha:0.954},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:150.4,alpha:0.96},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:150.8,alpha:0.966},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.1,alpha:0.971},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.4,alpha:0.976},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.7,alpha:0.98},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:151.9,alpha:0.984},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:152.1,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,y:152.3,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:152.5,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,y:152.6,alpha:0.994},0).wait(1).to({y:152.7,alpha:0.996},0).wait(1).to({scaleX:1,scaleY:1,y:152.8,alpha:0.998},0).wait(1).to({y:152.9,alpha:0.999},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({alpha:1},0).wait(1).to({regX:87,regY:18.2,x:150,y:153.9},0).wait(8).to({regX:87.7,regY:17.3,scaleX:0.99,scaleY:0.99,x:150.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:155.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:156.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:158.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:161.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:164.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:167.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:169.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:171},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:150.5,y:172.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:173},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:173.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:174.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:174.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:175.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:175.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:175.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:176.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:176.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:176.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:176.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:176.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:177},0).wait(1).to({y:177.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:177.2},0).wait(2).to({scaleX:0.8,scaleY:0.8,y:177.3},0).wait(2).to({regX:87,regY:18.2,x:150,y:178},0).wait(173));

	// Layer_3
	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,407.6,1.016,1.016,0,0,0,150,197);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({regX:150.1,regY:197.1,scaleX:0.87,scaleY:0.87},33,cjs.Ease.cubicInOut).wait(173));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.6,300,305,607.9);
// library properties:
lib.properties = {
	id: '49865BB29AE54529A55526A37054846A',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_banff_bigger_atlas_P_.png", id:"300x600_banff_bigger_atlas_P_"},
		{src:"images/300x600_banff_bigger_atlas_NP_.jpg", id:"300x600_banff_bigger_atlas_NP_"}
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
an.compositions['49865BB29AE54529A55526A37054846A'] = {
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