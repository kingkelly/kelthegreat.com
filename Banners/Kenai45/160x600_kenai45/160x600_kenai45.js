(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.db_bottom = function() {
	this.initialize(img.db_bottom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,382);


(lib.db_glacier = function() {
	this.initialize(img.db_glacier);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.db_whale = function() {
	this.initialize(img.db_whale);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.ss_boat = function() {
	this.initialize(img.ss_boat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,714);// helper functions:

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


(lib.whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_whale();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whale, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59E39").s().p("AAZA7QgGgDgEgEQgDgEgCgGQgCgFAAgGQAAgHACgGQACgFAEgEQADgEAGgCQAFgDAHAAQAGAAAGADQAFACAEAEQADAEACAFQACAGABAHQgBAGgCAFQgCAGgDAEQgFAEgEADQgGACgHAAQgGAAgFgCgAAcAUQgDAEAAAHQAAAFADAFQAEAFAFgBQAFABADgFQADgFAAgFQgBgHgDgEQgCgEgGgBQgFABgDAEgAg1A7IBWh1IAUAAIhVB1gAgvgCQgFgCgEgEQgEgEgDgGQgCgFABgGQAAgGACgGQACgGAEgEQADgEAGgCQAGgDAFAAQAHAAAGADQAEACAFAEQAEAEABAGQACAFAAAGQAAAHgCAFQgCAGgDAEQgFAEgFACQgFACgHAAQgGAAgFgCgAgsgoQgCAFgBAFQAAAGADAFQAEAFAEAAQAGAAADgFQACgFAAgFQAAgGgDgFQgCgFgGAAQgFAAgDAFg");
	this.shape.setTransform(97.5,-11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F59E39").s().p("AgVA5QgJgFgIgIQgGgJgEgLQgEgLAAgNQAAgMAEgLQAEgMAHgHQAHgJAKgFQAJgFALABQAMgBAKAFQAJAFAIAIQAGAJAEALQAEALAAAMQAAANgEALQgEALgGAIQgIAJgJAFQgKAFgMgBQgLABgKgFgAgKgiQgFACgDAFQgEAGgBAHQgCAGAAAIQAAAIACAHQACAHADAFQAEAFAEADQAFADAFAAQAGAAAFgDQAEgDAEgFQADgFACgHQACgGAAgJQAAgHgCgHQgCgHgDgFQgDgFgGgDQgEgDgGAAQgFAAgFADg");
	this.shape_1.setTransform(84,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59E39").s().p("AAAA8IAAhdIgUAGIgFgWIAhgKIASAAIAAB3g");
	this.shape_2.setTransform(73.6,-11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59E39").s().p("AgsA7IAAh1IBYAAIAAAXIg/AAIAAAYIA3AAIAAAWIg3AAIAAAZIBAAAIAAAXg");
	this.shape_3.setTransform(60.1,-11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59E39").s().p("AgLA8Igwh3IAdAAIAeBTIAfhTIAdAAIgwB3g");
	this.shape_4.setTransform(47.8,-11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59E39").s().p("AAkA8IgLgaIgxAAIgLAaIgbAAIAzh3IAXAAIAzB3gAgPAKIAeAAIgPglg");
	this.shape_5.setTransform(37.7,-11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F59E39").s().p("AgXA5QgNgFgKgKIAPgTQAIAHAJAEQAIAEAKAAQAIAAAFgDQAEgDAAgFIAAgBIgBgEIgDgEIgIgDIgLgDIgQgGQgIgCgFgEQgFgDgDgGQgCgGgBgJIAAAAQAAgIADgHQADgGAGgFQAFgFAIgCQAIgDAJAAQAMAAALADQALAEAJAIIgOATQgHgFgIgDQgIgDgGAAQgIAAgEADQgEADAAAEQAAAEABACQABACAEABIAHAEIAMADQAJACAHAEQAHACAFADQAFAFADAGQACAFAAAIIAAAAQAAAJgDAHQgEAHgFAEQgGAFgIADQgIACgKAAQgNAAgNgEg");
	this.shape_6.setTransform(25.5,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(18.1,-19.8,88.8,19.1), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfA3IAAhqIAeAAIAAAVQAEgLAIgGQAIgHANABIAAAfIgBAAQgPAAgJAKQgIAJAAASIAAAog");
	this.shape.setTransform(153.1,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSA0QgKgEgIgIQgHgHgFgKQgDgKAAgNIAAAAQAAgLADgKQAEgKAHgIQAHgHAKgFQAJgEAMAAQANAAAJAFQALAFAGAIQAHAIACAKQADALAAAKIAAABIAAADIAAAEIhKAAQADALAHAFQAHAFAJAAQAIAAAFgCQAHgDAGgGIARAQQgHAJgLAFQgLAGgOAAQgLAAgLgEgAgOgYQgGAGgCAKIAtAAQgCgKgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_1.setTransform(142.7,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBGQgJgDgGgIQgHgHgEgKQgEgKAAgOIAAAAQAAgNAEgJQAEgLAGgHQAHgHAJgDQAJgEAJAAQAMAAAHAFQAIAFAGAFIAAg0IAeAAIAACRIgeAAIAAgPQgGAHgIAFQgIAFgLAAQgJAAgJgEgAgJgJQgFACgDAEQgEADgCAGQgCAFAAAHIAAAAQAAAHACAGQACAGAEAEQADADAFADQAFACAEAAQAGAAAEgCIAIgGQAEgEACgGQACgGAAgHIAAAAQAAgHgCgFQgCgGgEgDQgDgEgFgCQgEgCgGAAQgEAAgFACg");
	this.shape_2.setTransform(129.9,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATA3IAAg7QAAgLgFgGQgFgFgJAAQgIAAgFAFQgFAGAAALIAAA7IgeAAIAAhqIAeAAIAAAPIAGgHIAHgGIAHgDIALgBQARAAAKAKQAJAKAAATIAABFg");
	this.shape_3.setTransform(117.5,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgEgKAAgMIAAAAQAAgLAEgKQAEgKAIgIQAIgHALgFQALgEALAAQAMAAALAEQAKAFAJAHQAHAIAEAKQAFAKAAALIAAAAQAAALgFALQgEAKgHAHQgJAIgKAEQgLAFgMAAQgMAAgLgFgAgLgaQgFACgDAEQgFAEgBAFQgCAFAAAGIAAAAQAAAGACAFQACAFAEAFQADAEAGACQAEACAGAAQAGAAAGgCQAFgCADgEQAEgEACgFQACgGAAgGIAAAAQAAgFgCgFQgCgGgEgEQgDgEgGgCQgFgDgGAAQgGAAgFADg");
	this.shape_4.setTransform(104.9,44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA2IgUhBIgUBBIgbAAIghhrIAeAAIASBAIAUhAIAZAAIAUBAIAShAIAeAAIghBrg");
	this.shape_5.setTransform(90,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBKIAAhQIgNAAIAAgZIANAAIAAgHQAAgSAJgIQAIgJAPAAIANABIAJACIAAAaIgHgCIgHgBQgLAAAAAMIAAAEIAZAAIAAAZIgZAAIAABQg");
	this.shape_6.setTransform(72.3,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAzQgKgEgIgHQgHgIgEgKQgFgKAAgMIAAAAQAAgLAFgKQAEgKAHgIQAJgHAKgFQALgEALAAQAMAAALAEQALAFAIAHQAHAIAFAKQAEAKAAALIAAAAQAAALgEALQgFAKgHAHQgIAIgLAEQgLAFgMAAQgMAAgLgFgAgLgaQgFACgDAEQgFAEgBAFQgCAFAAAGIAAAAQAAAGACAFQACAFAEAFQADAEAGACQAFACAFAAQAGAAAGgCQAFgCADgEQAEgEACgFQACgGAAgGIAAAAQAAgFgCgFQgCgGgEgEQgEgEgFgCQgFgDgGAAQgGAAgFADg");
	this.shape_7.setTransform(62.1,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAzQgLgDgLgJIAMgTQAJAFAJAEQAJADAGAAQAHAAADgCQAEgDAAgDIAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgEgDIgHgDIgIgDIgLgDQgGgDgEgDQgFgDgDgFQgDgGAAgIIAAgBQAAgHADgHQAEgGAFgEQAFgFAHgCQAHgCAIAAQAKAAAKADQAKAEAJAFIgMAVQgIgFgHgCQgIgDgFAAQgFAAgCACQgDADAAACIAAABQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAEADIAGADIAIACIALAFQAHADAEADQAEACADAGQADAFABAHIAAABQgBAJgDAHQgDAGgFAEQgGAFgHACQgHACgJAAQgLAAgMgFg");
	this.shape_8.setTransform(143.3,22.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfA3IAAhqIAeAAIAAAVQAEgLAIgGQAIgHANABIAAAfIgBAAQgPAAgJAKQgIAJAAASIAAAog");
	this.shape_9.setTransform(135,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaA1QgHgCgFgEQgFgEgDgGQgCgHAAgIQAAgJADgGQADgHAGgDQAFgEAJgCQAIgCAJAAQAHAAAGABIAMADIAAgCQAAgJgFgFQgHgFgKAAQgIAAgIABIgNAFIgIgYIATgGQAJgCANAAQAYAAAMAMQAMAMAAAWIAAA9IgeAAIAAgLQgFAGgJAEQgGADgMAAQgHAAgHgCgAgNAKQgGAEAAAHIAAAAQAAAGAFAEQAEADAHAAQALAAAGgFQAHgFAAgJIAAgFIgJgDIgLgBQgJAAgFAEg");
	this.shape_10.setTransform(124.6,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSA0QgKgEgHgIQgIgHgFgKQgDgKAAgNIAAAAQAAgLADgKQAEgKAHgIQAHgHAKgFQAJgEAMAAQANAAAJAFQAKAFAHAIQAGAIADAKQADALAAAKIAAABIAAADIAAAEIhKAAQADALAGAFQAIAFAJAAQAHAAAHgCQAGgDAGgGIARAQQgHAJgLAFQgLAGgOAAQgLAAgLgEgAgOgYQgGAGgCAKIAtAAQgCgKgFgGQgGgHgJAAQgJAAgGAHg");
	this.shape_11.setTransform(113.1,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBEQgHgCgGgEIALgWIAGADIAHACQAEAAACgCQACgBACgEIgqhrIAgAAIAYBIIAXhIIAgAAIgpBtQgDAIgEAGIgHAJQgDAEgGABQgFACgHAAQgIAAgGgCg");
	this.shape_12.setTransform(101.2,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdBCQgMgGgLgKIASgWQAJAHAHAEQAJAEAJAAQAKAAAGgFQAHgFAAgJQAAgKgHgFQgHgFgKAAQgHAAgGACIgLAEIgSgLIAFhFIBUAAIAAAbIg6AAIgBAYIAHgCIAKAAQAKAAAJACQAJADAGAFQAHAGAEAHQAEAJAAAMQAAALgEAJQgEAJgHAGQgHAGgJAEQgKADgMAAQgQAAgNgFg");
	this.shape_13.setTransform(83.4,20.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMBHIAAgfIhDAAIgFgVIBMhZIAaAAIAABWIATAAIAAAYIgTAAIAAAfgAgYAQIAkAAIAAgrg");
	this.shape_14.setTransform(70.5,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(53.4,11,105.3,43.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBHQgNgDgKgFIALgYQAIAEAJADQAJADAMAAQAPAAAIgIQAIgIAAgPIAAgFQgHAIgJAFQgIAFgMAAQgKAAgJgDQgJgEgHgHQgHgGgEgKQgEgJAAgMIAAgBQAAgNAEgJQAEgKAHgHQAHgHAJgDQAJgDAKAAQAMAAAIAEQAJAFAGAHIAAgOIAgAAIAABWQAAAQgEALQgEALgHAHQgIAIgMADQgMADgPAAQgNAAgNgDgAgKgtQgFACgDADQgEAEgCAFQgCAEAAAGIAAABQAAALAIAHQAHAHALAAQAGAAAFgCQAFgCAEgDQAEgDACgFQACgFAAgFIAAgBQAAgGgCgEQgCgFgEgEQgEgDgFgCQgFgCgGAAQgFAAgFACg");
	this.shape.setTransform(133.9,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATA5IAAg9QAAgMgEgFQgGgGgJAAQgIAAgGAGQgFAFAAAMIAAA9IggAAIAAhvIAgAAIAAAQIAGgHIAHgGIAIgEQAFgBAGAAQASAAALALQAJALABATIAABIg");
	this.shape_1.setTransform(120.7,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBNIAAhwIAfAAIAABwgAgQgvIAAgdIAhAAIAAAdg");
	this.shape_2.setTransform(110.9,31.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA4IAAgWIA5g/Ig3AAIAAgaIBfAAIAAAWIg5A/IA5AAIAAAag");
	this.shape_3.setTransform(101.9,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA4QgHgCgFgFQgGgEgDgGQgDgHAAgJQAAgJAEgHQADgGAGgEQAGgFAIgCQAJgCAKAAIAOABIAMAEIAAgCQAAgKgGgFQgGgGgLAAQgJABgHABIgPAFIgIgZQAJgEAKgDQAKgCAOAAQAaAAAMANQAMANAAAWIAABBIgfAAIAAgMQgGAGgIAFQgHADgMAAQgIAAgHgCgAgOALQgGAEAAAHIAAABQAAAGAFADQAFAEAIAAQAKAAAHgFQAHgGAAgJIAAgFIgKgEIgLgBQgJAAgGAFg");
	this.shape_4.setTransform(89.5,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA2A5IAAg9QAAgMgFgFQgFgGgJAAQgJAAgFAGQgFAFAAAMIAAA9IgfAAIAAg9QAAgMgFgFQgFgGgJAAQgJAAgFAGQgFAFAAAMIAAA9IggAAIAAhvIAgAAIAAAQIAGgHIAHgGIAJgEQAFgBAGAAQALAAAIAEQAHAFAFAJQAHgJAJgFQAJgEAMAAQASAAAKAKQAKALAAAUIAABIg");
	this.shape_5.setTransform(73.6,33.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBKIgNghIg9AAIgOAhIghAAIA/iTIAdAAIA/CTgAgTANIAmAAIgTgvg");
	this.shape_6.setTransform(55.4,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(45,22,98.4,22.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ss_boat();
	this.instance.parent = this;
	this.instance.setTransform(88,-51,0.933,0.933);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(88,-51,177.3,666.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTA3QgLgFgIgIQgIgIgEgKQgEgKAAgNIAAgBQAAgLAEgLQAEgLAHgHQAHgJALgEQAKgEALgBQAOAAALAGQAKAEAHAJQAHAIADALQADAMAAALIAAAAIAAAEIAAAEIhOAAQADALAHAGQAHAFAKAAQAIAAAGgDQAGgDAHgFIASAQQgIAJgLAGQgLAFgQAAQgLABgLgEgAgPgZQgGAGgCALIAvAAQgCgLgGgGQgGgHgKAAQgJAAgGAHg");
	this.shape.setTransform(147.8,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2A5IAAg9QAAgMgFgFQgFgGgJAAQgJAAgFAGQgFAFAAAMIAAA9IgfAAIAAg9QAAgMgFgFQgFgGgJAAQgJAAgFAGQgFAFAAAMIAAA9IggAAIAAhvIAgAAIAAAQIAGgHIAHgGIAJgEQAFgBAGAAQALAAAIAEQAHAFAFAJQAHgJAJgFQAJgEAMAAQASAAAKAKQAKALAAAUIAABIg");
	this.shape_1.setTransform(131.4,33.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA2QgMgEgIgJQgIgHgEgLQgFgLAAgLIAAgBQAAgMAFgKQAEgLAJgHQAIgJALgEQALgEAMgBQANABALAEQALAEAJAJQAIAHAEALQAFALAAALIAAAAQAAAMgFALQgEALgJAHQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgMgcQgFACgEAFQgDAEgCAFQgCAGAAAGIAAAAQAAAGACAGQACAGAEAEQAEAEAFADQAFACAGAAQAHAAAFgCQAGgDAEgEQADgEACgGQACgFAAgGIAAgBQAAgFgCgGQgCgGgEgEQgEgEgFgDQgGgCgGAAQgGAAgGACg");
	this.shape_2.setTransform(114.5,33.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA2QgMgEgMgJIAOgVQAJAHAJADQAJAEAHgBQAHABAEgDQADgCAAgEIAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgFgEIgIgDIgIgCIgLgFQgGgCgFgEQgFgCgDgGQgDgGAAgIIAAgBQAAgIADgHQADgGAGgFQAGgFAHgCQAHgCAIAAQALAAALADQALAEAJAGIgMAWQgJgFgIgDQgIgDgGABQgFAAgCACQgDACAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAFAEIAGADIAJADIAMAFQAGACAEAEQAFACADAGQAEAFAAAJIAAAAQAAAJgEAHQgDAHgGAEQgGAFgIACQgHACgKAAQgKAAgNgEg");
	this.shape_3.setTransform(102.1,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTA3QgLgFgIgIQgIgIgEgKQgEgKAAgNIAAgBQAAgLAEgLQAEgLAHgHQAHgJALgEQAKgEALgBQAOAAALAGQAKAEAHAJQAHAIADALQADAMAAALIAAAAIAAAEIAAAEIhOAAQADALAHAGQAHAFAKAAQAIAAAGgDQAGgDAHgFIASAQQgIAJgLAGQgLAFgQAAQgLABgLgEgAgPgZQgGAGgCALIAvAAQgCgLgGgGQgGgHgKAAQgJAAgGAHg");
	this.shape_4.setTransform(90.6,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA5IgWhFIgVBFIgdAAIgjhxIAhAAIASBEIAVhEIAaAAIAWBEIAShEIAgAAIgjBxg");
	this.shape_5.setTransform(75.2,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBKIgNghIg9AAIgOAhIghAAIA/iTIAdAAIA/CTgAgTANIAmAAIgTgvg");
	this.shape_6.setTransform(57.9,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(47.5,22,108.8,22.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTA3QgLgFgIgIQgIgIgEgKQgEgKAAgNIAAgBQAAgLAEgLQAEgLAHgHQAHgJALgEQAKgEALgBQAOAAALAGQAKAEAHAJQAHAIADALQADAMAAALIAAAAIAAAEIAAAEIhOAAQADALAHAGQAHAFAKAAQAIAAAGgDQAGgDAHgFIASAQQgIAJgLAGQgLAFgQAAQgLABgLgEgAgPgZQgGAGgCALIAvAAQgCgLgGgGQgGgHgKAAQgJAAgGAHg");
	this.shape.setTransform(152.9,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBNIAAiZIAfAAIAACZg");
	this.shape_1.setTransform(143.4,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBJQgHgFgGgHIAAAPIggAAIAAiZIAgAAIAAA5QAFgIAJgFQAIgFAMAAQAKAAAJAEQAJAEAIAHQAGAIAFAKQAEAKAAAOIAAABQAAAOgEALQgFAKgGAIQgIAHgJAEQgJAEgKAAQgMAAgJgFgAgKgJQgFACgDAEQgFAEgBAFQgDAGAAAHIAAABQAAAHADAFQABAGAFAEQADAFAFACQAFACAFAAQAFAAAFgCQAFgCAEgFQAEgEACgFQACgGAAgHIAAgBQAAgHgCgGIgGgJQgEgEgFgCQgFgCgFAAQgFAAgFACg");
	this.shape_2.setTransform(133.4,31.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBNIAAhwIAfAAIAABwgAgQgvIAAgdIAhAAIAAAdg");
	this.shape_3.setTransform(122.9,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBKQgJgEgHgHQgHgIgFgKQgEgLAAgOIAAgBQAAgOAEgKQAFgKAHgIQAHgHAJgEQAJgEAKAAQAMAAAIAFQAJAFAFAHIAAg4IAgAAIAACZIggAAIAAgQQgGAIgIAFQgIAFgMAAQgKAAgJgEgAgJgJQgFACgEAEQgEAEgCAFQgCAGAAAHIAAABQAAAHACAFQACAGAEAEQAEAFAFACQAFACAEAAQAGAAAFgCQAFgCAEgFQADgEACgGQADgFAAgHIAAgBQAAgHgDgGQgCgFgDgEQgEgEgFgCQgFgCgGAAQgEAAgFACg");
	this.shape_4.setTransform(112.4,31.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA3QgLgFgIgIQgIgIgEgKQgEgKAAgNIAAgBQAAgLAEgLQAEgLAHgHQAHgJALgEQAKgEALgBQAOAAALAGQAKAEAHAJQAHAIADALQADAMAAALIAAAAIAAAEIAAAEIhOAAQADALAHAGQAHAFAKAAQAIAAAGgDQAGgDAHgFIASAQQgIAJgLAGQgLAFgQAAQgLABgLgEgAgPgZQgGAGgCALIAvAAQgCgLgGgGQgGgHgKAAQgJAAgGAHg");
	this.shape_5.setTransform(99.2,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA5IAAhvIAgAAIAAAWQAEgLAIgHQAJgHAOABIAAAhIgCAAQgQAAgJAKQgIAJAAAUIAAApg");
	this.shape_6.setTransform(88.8,33.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQA2QgLgEgIgJQgIgHgEgLQgEgLAAgLIAAgBQAAgLAEgLQAEgLAIgHQAIgJALgEQALgEAMgBQAQAAAKAGQALAEAIAJIgUAVQgFgGgGgDQgGgDgJAAQgGAAgEACQgFACgDAFQgEAEgCAFQgCAGAAAGIAAAAQAAAGACAGQACAGAEAEQAEAEAFADQAEACAHAAQAIAAAGgDQAGgDAFgGIATATQgIAJgLAFQgKAHgRgBQgLAAgLgEg");
	this.shape_7.setTransform(78.2,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA5IAAg9QgBgMgFgFQgEgGgKAAQgIAAgFAGQgGAFAAAMIAAA9IgfAAIAAhvIAfAAIAAAQIAGgHIAIgGIAIgEQAEgBAGAAQATAAAKALQAKALgBATIAABIg");
	this.shape_8.setTransform(65.6,33.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBJIAAiRIAfAAIAACRg");
	this.shape_9.setTransform(55.5,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(49.9,22,111.6,22.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_bottom();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300,382), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBBIALAAIgLAAIAAgJIAbgWIgbAAIAAgCIAZgbIgZAAIAAgCIAdgeIgdAAIAAgCIAdgfIgdgkIAAg+QAoAGAhATQAhATAWAdIgVAZIAgAhIggAAIAgAgIgbAAIAbAdIgeAAIAiAbQgSAmgmAaQgmAbgxAHgAgCA/IAjgdIgeAAIAcgdIgcAAIAgggIggAAIAgghIglgsIgBAAIgmAsIAgAhIgfAAIAfAgIgbAAIAbAdIgdAAg");
	this.shape.setTransform(117.6,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPB9QgmgagSgmIAigbIgeAAIAcgdIgcAAIAgggIggAAIAgghIgVgZQAWgdAhgTQAhgTAogGIAAA+IgdAkIAdAfIAAACIgdAAIAdAeIAAACIgZAAIAZAbIAAACIgbAAIAbAWIAAAJIgLAAIALAAIAABeQgxgHgmgbgAADA/IAkgdIgdAAIAbgdIgbAAIAfggIgfAAIAfghIglgsIAAAAIgmAsIAgAhIggAAIAgAgIgcAAIAcAdIgeAAg");
	this.shape_1.setTransform(95.9,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai7GSIBjiaQhHgagrg2Qgsg3AAhEQAAhAAqg3QApg1BEgbQhkgVhMhOIAOgXQASgcAbgXQBUhKB/AAIAhABQA9AAAqAoQAqAnAAA4QAAAigQAdQgPAcgdATQBGAaAqA2QArA3AABBQAABEgsA3QgsA2hGAaIBjCagAAYFlIBDAdIAqg5IgshEIgXAiIgugQgAhtFJIArA5IBCgdIAEhOIgsAQIgZgigAAiDgIAJgBQBPgIA2gzQA1gzAAhEQAAhDg1gzQg2gzhPgIIgJgBgAgMiEQhPAIg1AzQg1AzAABDQAABFA1AyQA1AzBPAIIAKABIAAllgAhIirQgighgGguIgjAAQAcA1AvAaIAAAAgAgclCQgaAYAAAhQAAAiAaAYQAZAXAjAAQAkAAAagXQAZgYgBgiQABghgZgYQgagXgkAAQgjAAgZAXgAi1jfQgIgKgKgRIgTAAQAOANAXAOIAAAAgAh9k4QgQAXgHAZIAkAAIAAgBQAAg2AngmQggATgUAagAi9kwQgUARgRAXIAdAAQASgoAlggQgYAOgXASg");
	this.shape_2.setTransform(105.2,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgagQIA1AOIgjATg");
	this.shape_3.setTransform(99.9,74.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgagQIA1AOIgjATg");
	this.shape_4.setTransform(100.9,71.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgagCIA1gOIgSAhg");
	this.shape_5.setTransform(112.9,74.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgagCIA1gOIgSAhg");
	this.shape_6.setTransform(111.9,71.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRATQgIgJAAgKQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAAKgHAJQgIAHgLAAQgKAAgHgHg");
	this.shape_7.setTransform(108.4,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBALIgHgOIAAALIAAABIABABIgBABIgDAAIgBgBIABgBIAAgBIAAgPIAAgBIgBgBIABgBIAEAAIAHAPIAHgPIAFAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBABIAAABIAAAPIAAABIABABIgBABIgGAAIAAgBIAAgBIABgBIAAgLIgHAOg");
	this.shape_8.setTransform(148.9,121.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBALIgBgBIABgBIAAAAIAAgQIgDAAIgBAAIgBABIgCABIgBgBIAAgCIABgBIACgBIANAAIACABIAAABIAAACIAAABIgCgBIgBgBIgBAAIgDAAIAAAQIAAAAIABABIgBABg");
	this.shape_9.setTransform(146.4,121.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBEQgMAAgNgEIgJgaIABgDQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQADABABADQAFALAIAEQAHADAKAAIAGAAQAFgBAFgCQAHgDADgGQAEgGAAgJIAAgBQAAgJgHgFQgDgCgHgCQgGgCgJgBQgMgCgHgDQgJgDgEgIQgEgIAAgJQAAgQAMgNQANgLASAAIADAAQAUABAPAKIABAAIgDAUQAAADgEAAIAAAAQgDAAgCgEQgDgHgHgFQgHgGgHAAIgBAAQgHAAgFACIgHAFIgDAFIgCAGIgBAGIABAGQACAFADADIAGADIAGABIARADIANADQAIADAEAEIAGAJQACAEAAAJQAAATgQAOQgHAGgKADIgOAEg");
	this.shape_10.setTransform(139.5,126.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdBAQgCAAgGgHIglg0IgKAAIAAAsQAAAFAEABQAFACAAADQAAAEgEAAIgeAAQgFAAAAgEQAAgDAFgCQAEgBAAgFIAAhhQAAgEgEgCQgFgBAAgEQAAgEAFAAIAzAAQAIAAAMADQAKAEAGAKQAFAIAAALQAAALgGAIQgFAHgJACQgIAEgDAAIAmAxIAEACQAFAAAAAEQAAAEgEAAgAgagEIASAAIAKgCQAFgBAFgEQAHgHAAgKQAAgKgHgHQgHgGgLAAIgUAAg");
	this.shape_11.setTransform(123.6,126.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWA/QgLgDgHgIQgLgOAAgdIAAg7QAAgEgEgBQgFgCAAgEQAAgEAEAAIAeAAQAFAAAAAEQAAAEgFACQgEABAAAEIABBGQABALADAGQADAGAHAEQAHADAMAAQAVAAAIgQQAGgMAAgZIAAgvQAAgEgEgBQgFgCAAgEQAAgEAEAAIAXAAQAEAAAAAEQAAAEgEACQgFABAAAEIAAA7QAAAOgCAKQgDAMgGAHQgLAOgaAAQgOAAgMgDg");
	this.shape_12.setTransform(104.6,126.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBDQgbAAgTgRQgUgSAAgcIAAgEQABgdATgTQATgSAegBIABAAQAeABAUARQATASAAAbIAAAEQgCAfgUASQgUARgcABgAgjgmQgKAQAAAXQAAAWANARQANAQATAAIAAAAQAUAAANgRQANgQAAgWIAAAAQAAgVgLgSQgLgRgYAAQgZABgKAQg");
	this.shape_13.setTransform(84.9,126.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOBAQgEAAAAgEQAAgDAEgCQAFgBAAgFIAAhkIgVAAQgEAAgCADIgHAJQgDAFgDAAQgFAAABgEIAAgRQgBgFADgCQADgBAHAAIBSAAIALABQACABABAGIAAARQgBAEgEAAQgCAAgDgFIgIgJQgCgDgFAAIgTAAIAABkQAAAFAEABQAEACAAADQAAAEgEAAg");
	this.shape_14.setTransform(66.6,126.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BiIgOgmIAAgDIACgDQACgEAEAAQAEACADAFQAHARAMAGQAMAFAOAAIAJgBQAIgBAJgDQAIgFAGgKQAGgJAAgNIAAgCQAAgNgKgIQgEgDgLgDQgKgDgPgBQgNgCgPgGQgOgGgGgMQgGgLAAgOQAAgbATgRQATgSAcAAIAEAAQAgACAWAPIABAAIgEAeQAAAGgGgBIgBAAQgDAAgEgFQgFgMgKgIQgJgHgNgBIgCAAQgKAAgHAEQgHADgEADQgDAEgDAEQgCAFAAAFIgBAJIABAIQADAIAFAFIAKAEIAJACIAJACIAQADIAUAEQAKAEAHAHQAGAFAEAJQAEAHAAAMQAAAfgYATQgNALgOAFQgOAEgIAAIgLAAQgTAAgUgFg");
	this.shape_15.setTransform(204.3,98.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhhBdQAAgGAHgCQAHgCAAgHIAAiWQAAgIgHgBQgHgDAAgGQAAgFAHgBIA2AAIArABQAXACAUAJQAUAIANASQAPAWAAAkQAAAWgKAUQgIATgTAPQggAZgsgBIg9AAIgOABQgHAAAAgGgAgyhPIAACeQAOACAPAAIALAAQArgDATgkQAKgTAAgaIAAgFQgCgogYgSQgUgPggAAIgEAAQgSAAgMACg");
	this.shape_16.setTransform(185,98.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAsBhQgDABgJgLIg5hQIgQAAIAABEQAAAHAHACQAHADAAAFQAAAFgHAAIgtAAQgHAAAAgFQABgGAGgCQAHgCAAgHIAAiVQAAgGgHgDQgGgCgBgGQAAgGAHAAIBPAAQAPABAPAEQAPAFAKAQQAHANAAAQQAAAPgJAOQgIAKgMAEQgNAGgFAAIA5BMQAEACAEABQAGAAABAFIAAABQgBAFgGAAgAgpgHIAcAAQALAAAFgDQAJgCAGgGQALgKgBgQQAAgPgKgKQgKgLgSAAIgfAAg");
	this.shape_17.setTransform(164.4,98.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGBnQgnAAgegbQgegbAAgsIAAgFQABguAdgcQAegbAtgBIABAAQAtAAAfAcQAdAaAAAqIAAAGQgCAvgfAbQgfAagqADgAg2g7QgQAYAAAkQAAAjAUAZQATAYAfABIAAAAQAeAAAUgaQAUgaAAggIAAgBQAAgggRgbQgQgaglAAQgmAAgQAZg");
	this.shape_18.setTransform(142.1,98.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfB9IAAgNQAHgEADgEQAFgGACgGQACgFgBgKIAAizQAAgGgGgDQgHgCAAgFQAAgGAGAAIAuAAQAGAAAAAGQAAAFgHACQgGADAAAGIAACRQgBAZgDAPQgDAOgKAKQgNANgUAFg");
	this.shape_19.setTransform(125,101.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag8BhQgHAAAAgFQAAgDAFgDIAEgDIAEgEIABgEIAAiVQAAgHgHgCQgHgDAAgFQAAgGAHAAICAAAIAAAmQAAAGgHAAQgDAAgFgHIgLgNQgEgFgHAAIg0AAIAABDIAaAAQAEAAADgDIAEgHQACgEAEAAQAHAAAAAGIAAAiQAAAFgHAAQgEAAgDgEIgEgHQgCgCgEgBIgaAAIAABFIABAFIADAEIAEACQAFADAAADIAAACQgCADgEAAg");
	this.shape_20.setTransform(112.4,98.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWBhQgHAAABgFQAAgFAGgDQAHgCAAgHIAAiVQAAgHgHgCQgGgDAAgFQAAgGAGAAIAtAAQAGAAAAAGQABAFgIADQgGACAAAHIAACVQAAAHAGACQAIADgBAFQAAAFgGAAg");
	this.shape_21.setTransform(89.1,98.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA1BjIgEgBIgEgDIAAgDIACgDIAFgFIABgDIgBgDIgTgsIhIAAIgUAvIAAAEIACADIAAACIABADIgBACQgBAEgFAAIgjAAQgFAAAAgEIAAgCQABgEAEgCIAKgEQAEgDACgEIBOiuIAMAAIAAAAIBMCuQAAADAFAEIAMAGIADADIAAADIAAACQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAgAAZAQIgchEIgdBEIA5AAg");
	this.shape_22.setTransform(72.5,98.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABWBlIgegHIAAAAIh6iYIAACBQAAAHAHACQAHADAAAFQAAAGgHAAIgiAAQgGAAAAgGQAAgFAGgDQAHgBAAgIIAAiVQAAgGgHgDQgGgCAAgFQAAgGAGAAIAlAAIB6CZIAAiDQAAgGgGgDQgHgCAAgFQAAgGAGAAIAiAAQAIAAAAAGQAAAFgIACQgGADAAAGIgBCzg");
	this.shape_23.setTransform(49.5,99);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhBBhQgGAAAAgFQAAgFAHgDQAGgCAAgHIAAiVQAAgHgGgCQgHgDAAgFQAAgGAGAAICBAAIAAAmQgBAGgGAAQgDAAgGgHIgKgNQgFgFgFAAIg1AAIAABDIAaAAQAGAAACgHQADgHAGAAQAHAAgBAGIAAAiQABAFgHAAQgGAAgDgHQgDgGgGgBIgZAAIAABJIA1AAQAKAAAIgJIAMgPQAEgEADAAQAHABAAAFIAAAEIgLAkg");
	this.shape_24.setTransform(28.7,98.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnBhQgGAAAAgFQAAgCACgDIABgBIgDgFIhOhIIAABCQAAAHAHACQAHADAAAFQAAAFgHAAIgtAAQgHAAAAgFQAAgFAHgDQAGgCAAgHIAAiVQAAgHgGgCQgHgDAAgFQAAgGAHAAIAtAAQAHAAAAAGQAAAFgHADQgHACAAAHIAAA9IBQhNQAHgHAFAAQAFAAADACIAPAHQAEACAAADIgBADIgIAYIgNgGIgJgCQgFAAgEAFIgzAyIBiBbIAGAEQAEADAAADQAAAFgGAAg");
	this.shape_25.setTransform(9.1,98.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,211.2,133.2), null);


(lib.galcier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_glacier();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.galcier, new cjs.Rectangle(0,0,300,600), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAtIgUg5IgTA5IgRAAIgehYIAVAAIASA7IAUg7IAPAAIAUA7IATg7IAUAAIgeBYg");
	this.shape.setTransform(131.5,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAqQgIgDgHgHQgGgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgHQAHgFAJgEQAIgEAJABQALgBAIAEQAIAEAHAFQAGAHAEAIQADAIAAAJIAAAAQAAAJgDAJQgEAIgGAGQgHAGgIAEQgJADgKABQgJgBgJgDgAgKgYQgFABgDAFQgEADgCAFQgBAFAAAFIAAAAQAAAGABAEQACAFAEAFQADADAGADQAEACAFAAQAGAAAFgCQAFgCADgEQADgEADgFQACgFAAgGQAAgFgCgFQgDgFgDgDQgEgFgEgBQgFgDgGAAQgFAAgFADg");
	this.shape_1.setTransform(119.1,36.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAsIgqg3IAAA3IgTAAIAAhXIASAAIAoA1IAAg1IATAAIAABXg");
	this.shape_2.setTransform(108.8,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARAsIgbglIgKAKIAAAbIgTAAIAAhXIATAAIAAAmIAjgmIAXAAIgjAlIAlAyg");
	this.shape_3.setTransform(95.9,36.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAqQgJgDgFgHQgHgGgDgIQgEgIAAgKQAAgIAEgJQADgIAHgHQAGgFAIgEQAJgEAJABQAKgBAJAEQAJAEAFAFQAHAHADAIQAEAIAAAJIAAAAQAAAJgEAJQgDAIgHAGQgFAGgJAEQgJADgKABQgJgBgJgDgAgKgYQgFABgDAFQgDADgCAFQgCAFAAAFIAAAAQAAAGACAEQACAFADAFQADADAFADQAFACAFAAQAGAAAFgCQAFgCAEgEQACgEACgFQACgFAAgGQAAgFgCgFQgCgFgDgDQgDgFgFgBQgGgDgFAAQgFAAgFADg");
	this.shape_4.setTransform(85.5,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAqQgIgDgHgHQgGgGgEgIQgDgIAAgKQAAgIADgJQAEgIAGgHQAGgFAKgEQAIgEAJABQAKgBAJAEQAIAEAHAFQAGAHAEAIQADAIAAAJIAAAAQAAAJgDAJQgEAIgGAGQgHAGgIAEQgJADgKABQgJgBgJgDgAgKgYQgEABgEAFQgEADgCAFQgCAFAAAFIAAAAQAAAGACAEQACAFAEAFQAEADAFADQAEACAFAAQAGAAAFgCQAFgCADgEQADgEADgFQABgFABgGQgBgFgBgFQgCgFgEgDQgEgFgFgBQgEgDgGAAQgFAAgFADg");
	this.shape_5.setTransform(74.8,36.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglAsIAAhXIApAAQANAAAIAGQAHAGABAKIAAABIgBAGIgDAGIgEAEIgEADQAHACAFAEQAFAFAAAKIAAAAQAAAGgDAEQgCAFgEADQgFADgGACQgGABgHAAgAgSAbIAXAAQAGAAADgCQAEgDAAgEIAAgBQAAgEgDgDQgEgCgHAAIgWAAgAgSgHIASAAQAGAAADgCQAFgDAAgFQgBgEgDgDQgDgCgHAAIgSAAg");
	this.shape_6.setTransform(65.2,36.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F58F35").s().p("AIDCdIwPAAIAAk6IQPAAIAKAAIAAE6g");
	this.shape_7.setTransform(100,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(47.5,19.8,105,31.5), null);


// stage content:
(lib._160x600_kenai45 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(61.6,57.5,0.384,0.384,0,0,0,105.8,66.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).wait(269));

	// Layer_9
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.6,201.6,1,1,0,0,0,62.5,12.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200).to({_off:false},0).wait(1).to({regX:62.4,regY:-11.3,x:61.5,y:177.6,alpha:0.003},0).wait(1).to({y:177.8,alpha:0.013},0).wait(1).to({y:178.2,alpha:0.032},0).wait(1).to({y:178.8,alpha:0.063},0).wait(1).to({y:179.7,alpha:0.109},0).wait(1).to({y:181.1,alpha:0.176},0).wait(1).to({y:183,alpha:0.27},0).wait(1).to({y:185.4,alpha:0.394},0).wait(1).to({y:188.2,alpha:0.533},0).wait(1).to({y:190.7,alpha:0.659},0).wait(1).to({y:192.7,alpha:0.759},0).wait(1).to({y:194.2,alpha:0.834},0).wait(1).to({y:195.3,alpha:0.889},0).wait(1).to({y:196.1,alpha:0.929},0).wait(1).to({y:196.7,alpha:0.958},0).wait(1).to({y:197.1,alpha:0.978},0).wait(1).to({y:197.4,alpha:0.991},0).wait(1).to({y:197.5,alpha:0.998},0).wait(1).to({regX:62.5,regY:12.7,x:61.6,y:221.6,alpha:1},0).wait(66));

	// Layer_8
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-40.4,125.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.5,133,1,1,0,0,0,106,40.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({y:158.9,alpha:1},15,cjs.Ease.get(1)).wait(37).to({regX:101.9,regY:19.8,x:61.5,y:178.7},0).wait(1).to({regX:101.7,regY:32.1,x:61.3,y:191.2,alpha:0.993},0).wait(1).to({y:191.9,alpha:0.97},0).wait(1).to({y:193.3,alpha:0.922},0).wait(1).to({y:195.9,alpha:0.836},0).wait(1).to({y:200.1,alpha:0.695},0).wait(1).to({y:206,alpha:0.499},0).wait(1).to({y:211.5,alpha:0.315},0).wait(1).to({y:215.4,alpha:0.186},0).wait(1).to({y:217.8,alpha:0.104},0).wait(1).to({y:219.4,alpha:0.052},0).wait(1).to({y:220.3,alpha:0.021},0).wait(1).to({y:220.8,alpha:0.005},0).wait(1).to({regX:101.9,regY:19.8,x:61.5,y:208.7,alpha:0},0).to({_off:true},1).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(196).to({_off:false},0).wait(1).to({regX:106.3,regY:31.6,x:61.8,y:124.6,alpha:0.005},0).wait(1).to({y:125.1,alpha:0.022},0).wait(1).to({y:126.1,alpha:0.056},0).wait(1).to({y:127.8,alpha:0.113},0).wait(1).to({y:130.6,alpha:0.204},0).wait(1).to({y:134.7,alpha:0.341},0).wait(1).to({y:139.9,alpha:0.514},0).wait(1).to({y:144.7,alpha:0.674},0).wait(1).to({y:148.2,alpha:0.792},0).wait(1).to({y:150.6,alpha:0.873},0).wait(1).to({y:152.3,alpha:0.927},0).wait(1).to({y:153.3,alpha:0.963},0).wait(1).to({y:154,alpha:0.985},0).wait(1).to({y:154.3,alpha:0.997},0).wait(1).to({regX:106,regY:40.1,x:61.5,y:163,alpha:1},0).wait(74));

	// texty
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.5,177.7,1,1,0,0,0,104.5,19.8);

	this.instance_5 = new lib.Symbol5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(59.7,148.7,1,1,0,0,0,92,19.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({regX:106.1,regY:31.8,x:63.1,y:189.9,alpha:0.993},0).wait(1).to({y:190.6,alpha:0.97},0).wait(1).to({y:192,alpha:0.922},0).wait(1).to({y:194.6,alpha:0.836},0).wait(1).to({y:198.8,alpha:0.695},0).wait(1).to({y:204.7,alpha:0.499},0).wait(1).to({y:210.2,alpha:0.315},0).wait(1).to({y:214.1,alpha:0.186},0).wait(1).to({y:216.5,alpha:0.104},0).wait(1).to({y:218.1,alpha:0.052},0).wait(1).to({y:219,alpha:0.021},0).wait(1).to({y:219.5,alpha:0.005},0).wait(1).to({regX:104.5,regY:19.8,x:61.5,y:207.7,alpha:0},0).to({_off:true},1).wait(212));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).wait(1).to({regX:93.7,regY:33.4,x:61.4,y:162.4,alpha:0.004},0).wait(1).to({y:162.8,alpha:0.019},0).wait(1).to({y:163.7,alpha:0.048},0).wait(1).to({y:165.1,alpha:0.096},0).wait(1).to({y:167.4,alpha:0.171},0).wait(1).to({y:170.8,alpha:0.284},0).wait(1).to({y:175.4,alpha:0.437},0).wait(1).to({y:180.2,alpha:0.599},0).wait(1).to({y:184.2,alpha:0.731},0).wait(1).to({y:187,alpha:0.826},0).wait(1).to({y:189,alpha:0.892},0).wait(1).to({y:190.4,alpha:0.938},0).wait(1).to({y:191.3,alpha:0.968},0).wait(1).to({y:191.9,alpha:0.987},0).wait(1).to({y:192.2,alpha:0.997},0).wait(1).to({regX:92,regY:19.8,x:59.7,y:178.7,alpha:1},0).wait(51).to({regX:93.7,regY:33.4,x:61.4,y:192.5,alpha:0.993},0).wait(1).to({y:193.2,alpha:0.97},0).wait(1).to({y:194.6,alpha:0.922},0).wait(1).to({y:197.2,alpha:0.836},0).wait(1).to({y:201.4,alpha:0.695},0).wait(1).to({y:207.3,alpha:0.499},0).wait(1).to({y:212.8,alpha:0.315},0).wait(1).to({y:216.7,alpha:0.186},0).wait(1).to({y:219.1,alpha:0.104},0).wait(1).to({y:220.7,alpha:0.052},0).wait(1).to({y:221.6,alpha:0.021},0).wait(1).to({y:222.1,alpha:0.005},0).wait(1).to({regX:92,regY:19.8,x:59.7,y:208.7,alpha:0},0).wait(82));

	// butt
	this.instance_6 = new lib.cta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(71.5,538.5,1,1,0,0,0,110,27.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},20,cjs.Ease.get(1)).wait(265));

	// whiteshit
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(61.5,419,1,1,0,0,0,150,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(285));

	// Layer_7
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(61.5,285.5,1,1,0,0,0,150,285.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(118).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,alpha:1},12).to({scaleX:1.09,scaleY:1.09,x:61.6},154).wait(1));

	// Layer_6
	this.instance_9 = new lib.whale();
	this.instance_9.parent = this;
	this.instance_9.setTransform(61.5,300,1,1,0,0,0,150,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({scaleX:1.02,scaleY:1.02,alpha:1},13).to({scaleX:1.1,scaleY:1.1},59).wait(154));

	// Layer_2
	this.instance_10 = new lib.galcier();
	this.instance_10.parent = this;
	this.instance_10.setTransform(61.5,266.5,1,1,0,0,0,150,266.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.1,scaleY:1.1},72).wait(213));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,300,300,610);
// library properties:
lib.properties = {
	id: '644DE44FDD594B418D5533437E2D54D4',
	width: 123,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_bottom.png", id:"db_bottom"},
		{src:"images/db_glacier.jpg", id:"db_glacier"},
		{src:"images/db_whale.jpg", id:"db_whale"},
		{src:"images/ss_boat.jpg", id:"ss_boat"}
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
an.compositions['644DE44FDD594B418D5533437E2D54D4'] = {
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