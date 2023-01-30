(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bb_swipe = function() {
	this.initialize(img.bb_swipe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,1200);// helper functions:

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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// indigologo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#514E4C").s().p("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");
	this.shape.setTransform(119.5,142);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-5.4,70.7,249.9,142.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#514E4C").s().p("AgKAMQgFgFAAgGQAAgHAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAHQAAAGgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape.setTransform(180,141.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#514E4C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_1.setTransform(172.5,137.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#514E4C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_2.setTransform(161,137.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#514E4C").s().p("AAKBaIAAgIIAMgBQAGgDAAgIIAAg4QAAgLgGgHQgGgGgIAAQgKAAgKAGQgGAEgDAGIAAA/QAAAHAHADQAEADAHAAIAAAIIg5AAIAAgIIALgBQAGgDAAgIIAAiDQgBgLgFgEQgEgCgNAAIAAgIIArgCIACABIAABTIAAAAQAKgKAGgDQAJgGANAAQAhgBAAAlIAAA4QAAAIAGACQAFADAGAAIAAAIg");
	this.shape_3.setTransform(147.5,134.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#514E4C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_4.setTransform(136.6,136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#514E4C").s().p("AgtATIAAgyQAAgJgGgDQgEgDgIAAIAAgIIAngDIABACIAABLQAAAMAGAHQAFAGAIAAQASAAAKgQIAAg9QAAgIgGgEQgDgCgMAAIAAgIIAqgDIABACIAABWQABAIAFAEQADACAJAAIAAAIIgmACIgBgBIAAgPIgBAAQgKAKgFADQgJAGgNAAQggAAAAgng");
	this.shape_5.setTransform(125.5,137.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#514E4C").s().p("AgvAzQgIgHAAgMQAAgXAXgJIAWgHIATgHIAAgMQAAgHgDgGQgGgKgLAAQgLgBgFAGIACAPQAAAFgDADQgFACgGAAQgLABAAgNQAAgLAOgIQAMgHAOAAQATgBAJAHQAMAIAAAWIgBA2QAAAEACADQADAFAGAAQAIAAAAgSIAIAAQgBAfgZAAQgQAAgFgQIgBAAQgNARgWAAQgNgBgHgHgAgUAGQgMAJAAANQAAASAQAAQAOAAAKgNIABgmQgVAFgIAGg");
	this.shape_6.setTransform(113.4,137.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#514E4C").s().p("AAeA4IgdhMIgTAzIgJAZIgIAAIgmhcQgDgEgEgEQgFgDgGgBIAAgHIA0AAIAAAIQgNAAAAAFIACAFIAZA+IABAAIAWg4IgEgGQgFgKgLgBIAAgHIAxAAIAAAIQgMAAAAAEIABAGIAYA+IABAAIAWg7IABgGQAAgEgHgCQgEgCgFAAIAAgHIAsAAIAAAHQgGABgFADQgGAFgDAFIgaBBIgJAZg");
	this.shape_7.setTransform(92.3,137.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#514E4C").s().p("AgkApQgNgQAAgZQAAgXAOgQQAOgSAXAAQAXgBAMAOQALANAAAUIAAAHIhKAAQAAAyAlAAQALAAAIgFQAGgFAHgLIAHAFQgGANgMAHQgNAJgPAAQgZAAgPgSgAgRgnQgIAKgBARIAzgBQAAgkgXAAQgLgBgIALg");
	this.shape_8.setTransform(77.8,137.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#514E4C").s().p("AAIA5IAAgIIALgBQAHgCAAgIIAAg3QgBgLgFgIQgHgGgIAAQgKAAgJAGQgHAEgDAHIAAA+QABAHAGADQAFACAGAAIAAAIIg4AAIAAgIIALgBQAFgCABgIIAAhDQgBgIgFgFQgFgCgHAAIAAgHIAmgDIABACIAAAQIABAAIAPgOQAKgGANAAQAgAAABAmIAAA3QAAAHAGADQAFADAGgBIAAAIg");
	this.shape_9.setTransform(65,137.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#514E4C").s().p("AgkApQgNgQAAgZQAAgXAOgRQAOgRAXgBQAXABAMAOQALAMAAAUIAAAHIhKAAQAAAyAlAAQALAAAIgGQAGgEAHgLIAHAEQgGANgMAIQgNAIgPAAQgZAAgPgRgAgRgoQgIALgBAQIAzAAQAAglgXAAQgLAAgIAKg");
	this.shape_10.setTransform(161.8,108.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#514E4C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_11.setTransform(151.8,107.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#514E4C").s().p("AgZBWIAAgHIAKgCQAHgCAAgJIAAhCQgBgHgGgFQgFgDgJgBIAAgHIAogCIABABIAABZQAAAIAHADQAGADAFAAIAAAHgAgKg8QgEgEAAgGQAAgGAEgEQAFgFAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAFgGAAQgFgBgFgEg");
	this.shape_12.setTransform(144.1,105.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#514E4C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_13.setTransform(136.2,108.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#514E4C").s().p("AgtATIAAgyQAAgJgGgDQgEgDgIAAIAAgIIAngDIABACIAABLQAAAMAGAHQAFAGAIAAQASAAAKgQIAAg9QAAgIgGgEQgDgCgMAAIAAgIIAqgDIABACIAABWQABAIAFAEQADACAJAAIAAAIIgmACIgBgBIAAgPIgBAAQgKAKgFADQgJAGgNAAQggAAAAgng");
	this.shape_14.setTransform(124.1,108.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#514E4C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_15.setTransform(111,108.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#514E4C").s().p("AgDA4IgnhcQgEgKgNgCIAAgHIA1AAIAAAIQgOAAAAAFIACAFIAYA/IACAAIAYg7IABgGQAAgHgQgCIAAgHIArAAIAAAHQgNACgFALIgcBBQgFAMgEAOg");
	this.shape_16.setTransform(99.1,108.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#514E4C").s().p("AgvAzQgIgHAAgMQAAgYAYgIIAVgHIASgIIAAgKQAAgJgCgFQgGgLgLAAQgLABgFAFIACAPQAAAEgDADQgEADgHABQgLAAABgOQAAgKANgIQALgIAPAAQAUAAAIAHQANAIAAAWIgCA2QABADACAEQADAFAFAAQAIAAABgSIAHAAQgBAfgZAAQgPAAgHgQIAAAAQgNAQgXAAQgMAAgHgHgAgUAGQgMAIAAAOQAAASAQAAQAOAAAKgNIAAgmQgTAFgJAGg");
	this.shape_17.setTransform(87.9,108.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#514E4C").s().p("AgrBaIAAgIIALgBQAGgCAAgJIAAhPIgYAAIAAgLIAYAAIAAgFQABggAQgRQANgPAVAAQAMAAAIAHQAFAGABAJQAAAEgEAEQgDAEgHAAQgEAAgFgCQgEgDAAgGIABgNQgBgCgFAAQgMAAgFALQgFALAAAbIgBAMIAdAAIAAALIgdAAIAABOQAAAIAGADQAFACAKAAIAAAIg");
	this.shape_18.setTransform(78.8,105.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#514E4C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_19.setTransform(155.8,79.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#514E4C").s().p("AgtATIAAgyQAAgJgGgDQgEgDgIAAIAAgIIAngDIABACIAABLQAAAMAGAHQAFAGAIAAQASAAAKgQIAAg9QAAgIgGgEQgDgCgMAAIAAgIIAqgDIABACIAABWQABAIAFAEQADACAJAAIAAAIIgmACIgBgBIAAgPIgBAAQgKAKgFADQgJAGgNAAQggAAAAgng");
	this.shape_20.setTransform(143.7,79.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#514E4C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_21.setTransform(130.6,79.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#514E4C").s().p("Ag0BPQgHgFAAgIQAAgFAEgEQAEgFAGAAQANAAAAAMIAAAGQAOgDAPgnIgmhaQgEgKgOgCIAAgIIA1AAIAAAIQgNABAAAEIABAFIAZBAIABAAIAYg7IABgHQAAgDgGgDIgJgCIAAgIIAqAAIAAAHQgEABgFAEQgHAEgCAFIgaA+IgNAfQgOAhgKAKQgHAIgNAAQgGAAgFgEg");
	this.shape_22.setTransform(118.8,82.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#514E4C").s().p("AAHA5IAAgHIAMgCQAHgCgBgIIAAg3QAAgMgFgHQgHgHgIABQgKgBgJAHQgGAEgDAGIAAA+QAAAIAGADQAFACAHABIAAAHIg6AAIAAgHIAMgCQAFgCAAgIIAAhDQAAgJgFgDQgFgDgIgBIAAgGIAngEIACACIAAAQIAAAAIAPgMQAKgHANAAQAgAAABAmIAAA2QAAAJAGACQAEACAHABIAAAHg");
	this.shape_23.setTransform(100.4,79.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#514E4C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_24.setTransform(86.9,79.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#514E4C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_25.setTransform(176.2,49.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#514E4C").s().p("AAKBaIAAgIIALgBQAHgDAAgIIAAg4QAAgLgHgHQgFgGgIAAQgKAAgKAGQgGAEgDAGIAAA/QAAAHAHADQAFADAFAAIAAAIIg4AAIAAgIIAKgBQAHgDAAgIIAAiDQgBgLgGgEQgDgCgNAAIAAgIIArgCIACABIAABTIAAAAQALgKAFgDQAJgGAOAAQAggBAAAlIAAA4QAAAIAGACQAFADAFAAIAAAIg");
	this.shape_26.setTransform(164.8,47.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#514E4C").s().p("Ag6A2QAAgLAIgHQAJgIASAAIAAgCQgXgHAAgOQABgMASgHIAAgCQgZgLABgVQgBgQANgKQAMgJATAAQAQAAAPAHQAMgHANAAQAFAAADADQADAEAAAFQAAALgKAAQgKAAAAgOQgJAAgGAEIAAABQAJAKAAANQAAAPgNAKQgMAKgOAAIgPAAQgIADAAAHQAAAHAIACIASACIAZABQANABAIAIQALAKAAAOQAAASgPAKQgQAMgdAAQg0AAAAgegAggAnQgGAFAAALQAAAIAIAGQAKAHASAAQAkAAAAgbQAAgNgMgEQgMgCgYAAQgNADgFAGgAgdgwQABANAFAIQAFAIAKAAQAIAAAFgJQAGgHAAgMQAAgcgUAAQgTAAgBAbg");
	this.shape_27.setTransform(152.2,53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#514E4C").s().p("AgZBWIAAgIIAKgBQAHgCAAgIIAAhDQgBgIgGgEQgFgDgJAAIAAgHIAogDIABACIAABYQAAAJAHACQAGADAFgBIAAAIgAgKg7QgEgFAAgGQAAgGAEgFQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAFgGgBQgFAAgFgDg");
	this.shape_28.setTransform(142.3,47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#514E4C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_29.setTransform(134.4,50.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#514E4C").s().p("AgkApQgNgQAAgZQAAgXAOgQQAOgSAXAAQAXgBAMAOQALANAAAUIAAAHIhKAAQAAAyAlAAQALAAAIgFQAGgFAHgLIAHAFQgGANgMAHQgNAJgPAAQgZAAgPgSgAgRgnQgIAKgBARIAzgBQAAgkgXAAQgLgBgIALg");
	this.shape_30.setTransform(118,50.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#514E4C").s().p("Ag9BUIAAgHIANgCQAGgCAAgJIAAh4QAAgJgGgDQgEgDgJgBIAAgHIAngDIACACIAAAMIABABQAOgQARAAQAVAAAPAQQAOARAAAaQAAAYgQARQgQAQgWAAQgRAAgKgIIgBAAIAAAlQAAAJAHACQAHADAIABIAAAHgAgUg7IAABBQADAHAFAFQAIAGAKAAQAOAAAJgMQAJgNAAgXQAAgTgIgNQgJgPgRAAQgOAAgKAMg");
	this.shape_31.setTransform(105.2,53.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#514E4C").s().p("AgZBWIAAgIIAKgBQAHgCAAgIIAAhDQgBgIgGgEQgFgDgJAAIAAgHIAogDIABACIAABYQAAAJAHACQAGADAFgBIAAAIgAgKg7QgEgFAAgGQAAgGAEgFQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAFgGgBQgFAAgFgDg");
	this.shape_32.setTransform(95.1,47.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#514E4C").s().p("AAeA4IgdhMIgTAzIgKAZIgHAAIgnhcQgCgEgEgEQgGgDgFgBIAAgHIA0AAIAAAIQgNAAAAAFIACAFIAZA+IABAAIAVg4IgDgGQgFgKgLgBIAAgHIAxAAIAAAIQgNAAAAAEIACAGIAYA+IABAAIAWg7IABgGQAAgEgGgCQgFgCgFAAIAAgHIAsAAIAAAHQgFABgGADQgGAFgCAFIgaBBIgJAZg");
	this.shape_33.setTransform(82.9,50.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#514E4C").s().p("AgmBJIgJALIgHAAIgCg6IAIAAQAIAWALAMQAOAPATAAQAdAAAAgdQABgVgWgIIgigPQgegMABgeQAAgSAOgNQAOgNAVAAQATAAAPAMIAJgLIAIAAIABA5IgIAAQgIgYgIgLQgMgNgUAAQgIAAgHAEQgJAHAAAMQAAASAVALQAKAGAVAIQASAIAIAHQAJALAAARQAAAWgQAOQgQAOgXAAQgZAAgPgMg");
	this.shape_34.setTransform(67.3,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(42,36,156.9,114.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_swipe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,320,1200), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVATIAGgGQACADAGADQAEACADAAQALAAAAgIQAAgEgFgDIgDgBIgDgCIgIgDQgJgDAAgKQgBgHAGgEQAFgFAIAAQAMAAAHAIIgFAHQgFgGgJAAQgIAAAAAHQAAAFAKADIAIADIAHADQAEAEAAAHQAAAIgGAFQgGAFgKAAQgOAAgHgLg");
	this.shape.setTransform(94.7,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMApIgSgbIgHAGIAAAVIgLAAIAAhRIALAAIAAAvIAWgVIANAAIgVAUIAZAjg");
	this.shape_1.setTransform(88.9,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAGgGQAFgGAAgIQAAgIgFgGQgGgFgIAAQgHAAgGAFg");
	this.shape_2.setTransform(81,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAGgGQAFgGAAgIQAAgIgFgGQgGgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(73.2,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbApIAAhRIAWAAQANgBAGAEQAJAHAAAKQAAAHgEAFQgDAFgGABIAAABQASACAAARQAAALgIAHQgHAGgNgBgAgQAgIANAAQAJAAAFgDQAFgEAAgHQAAgIgFgEQgFgDgJAAIgNAAgAgQgFIAKAAQAIAAAEgCQAFgFAAgGQAAgIgFgDQgEgCgHAAIgLAAg");
	this.shape_4.setTransform(65.5,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAVQgIgIAAgNQAAgNAJgIQAIgIALAAQAMAAAHAIQAIAHAAAMIgBAEIgrAAQABAJAFAFQAFAFAHAAQAHAAAGgDIAGgEIAFAHIgBAAQgIAJgRAAQgLAAgIgJgAARgEQAAgGgFgFQgDgGgJAAQgGAAgEAGQgFAFAAAGIAgAAIAAAAg");
	this.shape_5.setTransform(57.7,39.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAYAAQAMgBAHAHQAIAGAAAMQAAAKgIAGQgHAGgMAAIgMAAIAAAjgAgNgDIALAAQAGAAAFgCQAFgEAAgHQAAgIgFgEQgFgDgGAAIgLAAg");
	this.shape_6.setTransform(47.2,37.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAfQgNgMAAgTQAAgSANgMQAMgMARAAQASAAAMAMQANAMAAASQAAATgNAMQgMAMgSAAQgRAAgMgMgAgVgXQgJAJAAAOQAAAOAJAJQAJAJAMAAQANAAAJgJQAJgJAAgOQAAgOgJgJQgJgJgNAAQgMAAgJAJg");
	this.shape_7.setTransform(38.1,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWApIAAgmIgrAAIAAAmIgMAAIAAhRIAMAAIAAAiIArAAIAAgiIAMAAIAABRg");
	this.shape_8.setTransform(28.1,37.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAlIgJgIIAHgIQAJAMALAAQAHAAAFgEQAEgEAAgGQAAgGgGgEIgEgCIgDgCIgNgFQgEgCgEgDQgFgGAAgJQAAgJAHgHQAIgGALAAQANAAAKALIgGAIQgJgJgJAAQgFAAgFADQgDADAAAGQAAAFADADIAHAEIAPAHQAFABAEAEQAFAHAAAHQAAALgJAHQgIAHgLAAQgKAAgIgGg");
	this.shape_9.setTransform(19.6,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#514E4C").s().p("AoHCPIAAkdIQPAAIAAEdg");
	this.shape_10.setTransform(57.4,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(5.4,23.5,104,28.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(289.2,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(139.2,0,320,1200), null);


// stage content:
(lib._160x600_swipe = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(80,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:119.5,regY:141.9,x:80.3,y:301.9,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.008},0).wait(1).to({y:301.8,alpha:0.015},0).wait(1).to({y:301.7,alpha:0.026},0).wait(1).to({y:301.6,alpha:0.04},0).wait(1).to({y:301.5,alpha:0.059},0).wait(1).to({y:301.2,alpha:0.084},0).wait(1).to({y:301,alpha:0.117},0).wait(1).to({y:300.6,alpha:0.163},0).wait(1).to({y:300.1,alpha:0.225},0).wait(1).to({y:299.3,alpha:0.312},0).wait(1).to({y:298.4,alpha:0.421},0).wait(1).to({y:297.5,alpha:0.532},0).wait(1).to({y:296.7,alpha:0.624},0).wait(1).to({y:296.1,alpha:0.695},0).wait(1).to({y:295.6,alpha:0.75},0).wait(1).to({y:295.3,alpha:0.795},0).wait(1).to({y:295,alpha:0.831},0).wait(1).to({y:294.7,alpha:0.86},0).wait(1).to({y:294.5,alpha:0.885},0).wait(1).to({y:294.3,alpha:0.906},0).wait(1).to({y:294.2,alpha:0.924},0).wait(1).to({y:294.1,alpha:0.939},0).wait(1).to({y:294,alpha:0.952},0).wait(1).to({y:293.9,alpha:0.962},0).wait(1).to({y:293.8,alpha:0.971},0).wait(1).to({y:293.7,alpha:0.979},0).wait(1).to({alpha:0.985},0).wait(1).to({y:293.6,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:80,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regY:37.8,y:224,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:223.9,alpha:0.008},0).wait(1).to({y:223.8,alpha:0.015},0).wait(1).to({y:223.7,alpha:0.026},0).wait(1).to({y:223.5,alpha:0.04},0).wait(1).to({y:223.3,alpha:0.059},0).wait(1).to({y:223,alpha:0.084},0).wait(1).to({y:222.6,alpha:0.117},0).wait(1).to({y:222,alpha:0.163},0).wait(1).to({y:221.3,alpha:0.225},0).wait(1).to({y:220.3,alpha:0.312},0).wait(1).to({y:218.9,alpha:0.421},0).wait(1).to({y:217.6,alpha:0.532},0).wait(1).to({y:216.5,alpha:0.624},0).wait(1).to({y:215.7,alpha:0.695},0).wait(1).to({y:215,alpha:0.75},0).wait(1).to({y:214.5,alpha:0.795},0).wait(1).to({y:214,alpha:0.831},0).wait(1).to({y:213.7,alpha:0.86},0).wait(1).to({y:213.4,alpha:0.885},0).wait(1).to({y:213.1,alpha:0.906},0).wait(1).to({y:212.9,alpha:0.924},0).wait(1).to({y:212.7,alpha:0.939},0).wait(1).to({y:212.6,alpha:0.952},0).wait(1).to({y:212.5,alpha:0.962},0).wait(1).to({y:212.3,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:212.2,alpha:0.985},0).wait(1).to({y:212.1,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:212,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regY:8,y:182.2},0).wait(78).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:80.1,y:184.6,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:80,y:182.2,alpha:1},5).wait(79));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75.9,156.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:120.1,regY:91,x:-76.1,y:195.4},0).wait(1).to({x:-76,alpha:0.002},0).wait(1).to({x:-75.6,alpha:0.004},0).wait(1).to({x:-75.2,alpha:0.007},0).wait(1).to({x:-74.5,alpha:0.011},0).wait(1).to({x:-73.6,alpha:0.016},0).wait(1).to({x:-72.6,alpha:0.023},0).wait(1).to({x:-71.2,alpha:0.032},0).wait(1).to({x:-69.5,alpha:0.043},0).wait(1).to({x:-67.5,alpha:0.056},0).wait(1).to({x:-65.1,alpha:0.071},0).wait(1).to({x:-62.1,alpha:0.091},0).wait(1).to({x:-58.4,alpha:0.114},0).wait(1).to({x:-53.9,alpha:0.143},0).wait(1).to({x:-48.3,alpha:0.179},0).wait(1).to({x:-41.3,alpha:0.224},0).wait(1).to({x:-32.5,alpha:0.28},0).wait(1).to({x:-21.9,alpha:0.348},0).wait(1).to({x:-9.8,alpha:0.425},0).wait(1).to({x:2.2,alpha:0.503},0).wait(1).to({x:13.1,alpha:0.572},0).wait(1).to({x:22.3,alpha:0.631},0).wait(1).to({x:30,alpha:0.681},0).wait(1).to({x:36.5,alpha:0.723},0).wait(1).to({x:42,alpha:0.758},0).wait(1).to({x:46.8,alpha:0.788},0).wait(1).to({x:50.9,alpha:0.814},0).wait(1).to({x:54.4,alpha:0.837},0).wait(1).to({x:57.6,alpha:0.858},0).wait(1).to({x:60.4,alpha:0.875},0).wait(1).to({x:62.8,alpha:0.891},0).wait(1).to({x:65,alpha:0.905},0).wait(1).to({x:67,alpha:0.918},0).wait(1).to({x:68.8,alpha:0.929},0).wait(1).to({x:70.3,alpha:0.939},0).wait(1).to({x:71.7,alpha:0.948},0).wait(1).to({x:72.9,alpha:0.956},0).wait(1).to({x:74,alpha:0.963},0).wait(1).to({x:75,alpha:0.969},0).wait(1).to({x:75.9,alpha:0.975},0).wait(1).to({x:76.6,alpha:0.98},0).wait(1).to({x:77.3,alpha:0.984},0).wait(1).to({x:77.9,alpha:0.988},0).wait(1).to({x:78.4,alpha:0.991},0).wait(1).to({x:78.8,alpha:0.993},0).wait(1).to({x:79.1,alpha:0.995},0).wait(1).to({x:79.4,alpha:0.997},0).wait(1).to({x:79.6,alpha:0.998},0).wait(1).to({x:79.7,alpha:0.999},0).wait(1).to({x:79.8,alpha:1},0).wait(1).to({regX:120.4,regY:52,x:80.1,y:156.4},0).wait(35).to({regX:120.1,regY:91,x:79.8,y:195.2},0).wait(1).to({y:194.7},0).wait(1).to({y:193.6},0).wait(1).to({y:191.8},0).wait(1).to({y:188.9},0).wait(1).to({y:184.3},0).wait(1).to({y:176.8},0).wait(1).to({y:164.5},0).wait(1).to({y:150.8},0).wait(1).to({y:140.8},0).wait(1).to({y:134.1},0).wait(1).to({y:129.4},0).wait(1).to({y:125.9},0).wait(1).to({y:123.2},0).wait(1).to({y:121.2},0).wait(1).to({y:119.6},0).wait(1).to({y:118.4},0).wait(1).to({y:117.6},0).wait(1).to({y:116.9},0).wait(1).to({y:116.5},0).wait(1).to({y:116.3},0).wait(1).to({regX:120.4,regY:52,x:80.1,y:77.2},0).wait(181));

	// img
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,300.1,0.567,0.567,0,0,0,299.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:300,scaleX:0.5,scaleY:0.5,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,259.9,324.7,680.4);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bb_swipe.jpg", id:"bb_swipe"}
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
an.compositions['C6DEDD3BCFB2443587B0868CA58F5C2E'] = {
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