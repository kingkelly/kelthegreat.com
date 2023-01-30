(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.lb_speak = function() {
	this.initialize(img.lb_speak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1456,180);// helper functions:

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
	this.shape.graphics.f("#525E6C").s().p("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");
	this.shape.setTransform(1.9,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-117.1,-98.3,238,135.8), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525E6C").s().p("AgKALQgFgEAAgGQAAgGAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAGQAAAGgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(469.8,153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525E6C").s().p("Ag0BPQgHgFAAgIQAAgFAEgEQAEgFAGAAQANAAAAAMIAAAGQAOgDAPgnIgmhaQgEgKgOgCIAAgIIA1AAIAAAIQgNABAAAEIABAFIAZBAIABAAIAYg7IABgHQAAgDgGgDIgJgCIAAgIIAqAAIAAAHQgEABgFAEQgHAEgCAFIgaA+IgNAfQgOAhgKAKQgHAIgNAAQgGAAgFgEg");
	this.shape_1.setTransform(461.2,151.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525E6C").s().p("AgwAzQgHgHAAgMQAAgYAYgIIAVgHIATgIIAAgKQgBgJgDgFQgFgLgMAAQgKABgFAFIACAPQAAAEgEADQgEAEgGAAQgLAAAAgOQAAgKANgIQAMgIAPAAQATABAKAGQAMAIgBAWIAAA2QAAAEABADQADAFAGAAQAIAAAAgSIAIAAQgCAfgYAAQgQAAgFgQIgBAAQgNAQgXAAQgMABgIgIgAgUAHQgMAHAAAOQAAASARAAQANAAAJgMIACgnQgVAFgIAHg");
	this.shape_2.setTransform(450.1,148.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525E6C").s().p("AgvBLQgPgRAAgbQAAgZARgPQAQgQAWAAQAOAAAOAHIAAgrQgBgLgFgEQgGgDgOgBIAAgHIAugDIACACIAACZQAAAHAGAEQADACALAAIAAAIIgoADIgCgCIAAgLIgBAAQgOAPgRAAQgVAAgPgQgAgcgDQgKANAAAXQAAAUAJAMQAJAOARAAQAMAAAMgMIAAhBQgGgTgUABQgOAAgJANg");
	this.shape_3.setTransform(437,145.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525E6C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_4.setTransform(423.5,148.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_5.setTransform(413,147.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525E6C").s().p("AgYBZIAAgHIALgCQAHgBgBgJIAAiDQAAgKgGgDQgFgEgMgBIAAgHIArgDIABACIAACcQAAAHAHAEQAFACAFAAIAAAHg");
	this.shape_6.setTransform(399.4,145.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525E6C").s().p("AgwAzQgHgHAAgMQAAgYAXgIIAWgHIATgIIAAgKQAAgJgEgFQgFgLgMAAQgKABgFAFIACAPQAAAEgDADQgFAEgGAAQgLAAAAgOQABgKANgIQAMgIAOAAQAUABAJAGQAMAIgBAWIgBA2QAAAEACADQAEAFAFAAQAIAAAAgSIAIAAQgCAfgYAAQgPAAgGgQIgBAAQgNAQgWAAQgNABgIgIgAgUAHQgMAHAAAOQAAASARAAQANAAAKgMIABgnQgUAFgJAHg");
	this.shape_7.setTransform(390.9,148.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525E6C").s().p("AgZBWIAAgHIAKgCQAHgCAAgJIAAhCQgBgIgGgDQgFgEgJgBIAAgHIAogDIABACIAABZQAAAIAHADQAGADAFAAIAAAHgAgKg8QgEgEAAgGQAAgGAEgEQAFgFAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAFgGAAQgFAAgFgFg");
	this.shape_8.setTransform(380.9,145.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525E6C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_9.setTransform(372.9,148.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_10.setTransform(363.6,147.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525E6C").s().p("AgkApQgNgQAAgZQAAgXAOgRQAOgSAXAAQAXAAAMAPQALAMAAAVIAAAGIhKAAQAAAyAlAAQALAAAIgGQAGgEAHgLIAHAEQgGANgMAIQgNAJgPgBQgZAAgPgRgAgRgoQgIALgBAQIAzAAQAAglgXAAQgLABgIAJg");
	this.shape_11.setTransform(348.2,148.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525E6C").s().p("AgkApQgNgQAAgZQAAgXAOgRQAOgSAXAAQAXAAAMAPQALAMAAAVIAAAGIhKAAQAAAyAlAAQALAAAIgGQAGgEAHgLIAHAEQgGANgMAIQgNAJgPgBQgZAAgPgRgAgRgoQgIALgBAQIAzAAQAAglgXAAQgLABgIAJg");
	this.shape_12.setTransform(336.9,148.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525E6C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_13.setTransform(326.6,148.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525E6C").s().p("AgqBaIAAgIIAKgBQAHgCgBgJIAAhPIgXAAIAAgLIAXAAIAAgFQAAggAQgRQANgPAWAAQANAAAGAHQAHAGAAAJQgBAEgDAEQgDAEgGAAQgGAAgDgCQgGgDAAgGIACgNQgBgCgEAAQgMAAgGALQgEALgBAbIgBAMIAdAAIAAALIgdAAIAABOQAAAIAGADQAFACAKAAIAAAIg");
	this.shape_14.setTransform(319,145.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525E6C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_15.setTransform(303.5,148.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525E6C").s().p("AgtATIAAgyQAAgJgGgDQgEgDgIAAIAAgIIAngDIABACIAABLQAAAMAGAHQAFAGAIAAQASAAAKgQIAAg9QAAgIgGgEQgDgCgMAAIAAgIIAqgDIABACIAABWQABAIAFAEQADACAJAAIAAAIIgmACIgBgBIAAgPIgBAAQgKAKgFADQgJAGgNAAQggAAAAgng");
	this.shape_16.setTransform(291.5,148.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525E6C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_17.setTransform(278.4,148.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525E6C").s().p("Ag0BPQgHgFAAgIQAAgFAEgEQAEgFAGAAQANAAAAAMIAAAGQAOgDAPgnIgmhaQgEgKgOgCIAAgIIA1AAIAAAIQgNABAAAEIABAFIAZBAIABAAIAYg7IABgHQAAgDgGgDIgJgCIAAgIIAqAAIAAAHQgEABgFAEQgHAEgCAFIgaA+IgNAfQgOAhgKAKQgHAIgNAAQgGAAgFgEg");
	this.shape_18.setTransform(266.5,151.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_19.setTransform(250.9,147.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525E6C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_20.setTransform(242.2,148.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525E6C").s().p("AgvAzQgIgHAAgMQAAgYAXgIIAWgHIATgIIAAgKQAAgJgDgFQgGgLgLAAQgLABgFAFIACAPQAAAEgDADQgFAEgGAAQgLAAAAgOQAAgKAOgIQAMgIAOAAQATABAKAGQALAIAAAWIgBA2QAAAEACADQADAFAGAAQAIAAAAgSIAIAAQgBAfgZAAQgQAAgFgQIgBAAQgNAQgWAAQgNABgHgIgAgUAHQgMAHAAAOQAAASAQAAQAOAAAKgMIABgnQgVAFgIAHg");
	this.shape_21.setTransform(231.7,148.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_22.setTransform(221,147.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525E6C").s().p("AgmBJIgIAMIgIAAIgCg7IAIAAQAIAWALAMQAOAQATAAQAdAAABgdQAAgWgXgJIghgOQgdgMgBgdQAAgUAPgNQAOgMAVAAQATAAAQAMIAIgMIAIAAIABA5IgHAAQgJgXgIgKQgNgOgTAAQgIAAgGAFQgKAGAAAMQAAASAVALQAKAGAVAIQASAIAHAHQAKAKAAASQAAAWgQAOQgQAOgYAAQgYAAgPgMg");
	this.shape_23.setTransform(210.2,146.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-58,134.1,792.2,27.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525E6C").s().p("AgKAMQgFgFAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape.setTransform(472.8,120.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525E6C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_1.setTransform(465.3,116.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525E6C").s().p("AgkApQgNgQAAgZQAAgXAOgQQAOgTAXABQAXAAAMANQALANAAAVIAAAGIhKAAQAAAyAlAAQALAAAIgFQAGgFAHgLIAHAEQgGAOgMAHQgNAJgPAAQgZAAgPgSgAgRgnQgIAJgBASIAzgBQAAglgXABQgLAAgIAKg");
	this.shape_2.setTransform(454.7,116.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525E6C").s().p("AAsA5IAAgHIAKgCQAGgCAAgIIAAg3QAAgMgGgHQgFgHgIABQgUAAgJAQIAAA/QAAAHAGADQAFACAFABIAAAHIg2AAIAAgHIAKgCQAGgCAAgIIAAg3QAAgMgFgHQgGgHgIABQgUgBgJASIAAA9QAAAIAGADQAFACAGABIAAAHIg4AAIAAgHIALgCQAGgCAAgIIAAhDQgBgIgFgEQgFgDgIgBIAAgGIAngEIACADIAAAQIAAAAQALgLAEgCQAKgHAOAAQAVAAAJAUIAQgNQAKgHAOAAQAfAAAAAnIAAA2QAAAHAHADQAEACAHABIAAAHg");
	this.shape_3.setTransform(438.5,116.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525E6C").s().p("AAsA5IAAgHIAKgCQAGgCAAgIIAAg3QAAgMgGgHQgFgHgIABQgUAAgJAQIAAA/QAAAHAGADQAFACAFABIAAAHIg2AAIAAgHIAKgCQAGgCAAgIIAAg3QAAgMgFgHQgGgHgIABQgUgBgJASIAAA9QAAAIAGADQAFACAGABIAAAHIg4AAIAAgHIALgCQAGgCAAgIIAAhDQgBgIgFgEQgFgDgIgBIAAgGIAngEIACADIAAAQIAAAAQALgLAEgCQAKgHAOAAQAVAAAJAUIAQgNQAKgHAOAAQAfAAAAAnIAAA2QAAAHAHADQAEACAHABIAAAHg");
	this.shape_4.setTransform(417.4,116.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525E6C").s().p("AgtATIAAgyQAAgJgGgDQgEgDgIAAIAAgIIAngDIABACIAABLQAAAMAGAHQAFAGAIAAQASAAAKgQIAAg9QAAgIgGgEQgDgCgMAAIAAgIIAqgDIABACIAABWQABAIAFAEQADACAJAAIAAAIIgmACIgBgBIAAgPIgBAAQgKAKgFADQgJAGgNAAQggAAAAgng");
	this.shape_5.setTransform(399.9,116.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525E6C").s().p("AgQA3QgJgDgDgDIgCAHIgJAAIgBgmIAIAAQADALAHAJQALAMAMABQAWAAAAgUQAAgJgGgFQgHgFgOgEQgggJAAgZQAAgNAJgJQALgJAQAAQAPgBAJAHIACgHIAIAAIABAjIgHAAQgDgLgGgHQgIgIgLAAQgUAAABAPQgBAKAHAFQAEACARAHQAQAEAHAHQAJAJAAAOQAAAQgMAKQgLAJgRAAQgHAAgJgEg");
	this.shape_6.setTransform(388.2,116.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525E6C").s().p("AgRA3QgHgDgEgDIgCAHIgIAAIgBgmIAHAAQACALAJAJQAJAMAMABQAXAAAAgUQAAgJgGgFQgHgFgNgEQgigJABgZQAAgNAJgJQAKgJARAAQAPgBAJAHIACgHIAIAAIABAjIgIAAQgBgLgIgHQgHgIgLAAQgUAAABAPQAAAKAGAFQAEACARAHQAPAEAJAHQAIAJABAOQAAAQgNAKQgLAJgRAAQgHAAgKgEg");
	this.shape_7.setTransform(372.7,116.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525E6C").s().p("AgZBWIAAgIIAKgBQAHgCAAgIIAAhDQgBgHgGgEQgFgEgJgBIAAgGIAogEIABADIAABYQAAAJAHACQAGACAFAAIAAAIgAgKg7QgEgFAAgGQAAgGAEgFQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgGAAQgFAAgFgDg");
	this.shape_8.setTransform(364.3,113.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525E6C").s().p("AAKBZIAAgHIAMgCQAGgCAAgIIAAg3QAAgMgGgGQgGgHgIAAQgKAAgJAHQgHADgDAGIAAA/QAAAHAHADQAEACAHABIAAAHIg5AAIAAgHIALgCQAGgCAAgIIAAiEQgBgKgFgDQgEgDgNAAIAAgIIArgDIACACIAABTIAAAAQAKgKAGgDQAJgHANABQAhAAAAAlIAAA3QAAAIAGACQAFADAGAAIAAAHg");
	this.shape_9.setTransform(353.6,113.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_10.setTransform(342.7,115.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525E6C").s().p("AgtATIAAgyQAAgJgGgDQgEgDgIAAIAAgIIAngDIABACIAABLQAAAMAGAHQAFAGAIAAQASAAAKgQIAAg9QAAgIgGgEQgDgCgMAAIAAgIIAqgDIABACIAABWQABAIAFAEQADACAJAAIAAAIIgmACIgBgBIAAgPIgBAAQgKAKgFADQgJAGgNAAQggAAAAgng");
	this.shape_11.setTransform(325.9,116.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525E6C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_12.setTransform(312.8,116.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525E6C").s().p("Ag0BPQgHgFAAgIQAAgFAEgEQAEgFAGAAQANAAAAAMIAAAGQAOgDAPgnIgmhaQgEgKgOgCIAAgIIA1AAIAAAIQgNABAAAEIABAFIAZBAIABAAIAYg7IABgHQAAgDgGgDIgJgCIAAgIIAqAAIAAAHQgEABgFAEQgHAEgCAFIgaA+IgNAfQgOAhgKAKQgHAIgNAAQgGAAgFgEg");
	this.shape_13.setTransform(300.9,119.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525E6C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_14.setTransform(283.1,116.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_15.setTransform(272.6,115.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525E6C").s().p("AgRA3QgIgDgDgDIgCAHIgIAAIgCgmIAIAAQADALAHAJQAKAMANABQAWAAAAgUQAAgJgGgFQgGgFgPgEQgggJAAgZQAAgNAJgJQAKgJARAAQAPgBAJAHIACgHIAIAAIABAjIgIAAQgBgLgIgHQgIgIgKAAQgUAAABAPQgBAKAHAFQAFACAQAHQAQAEAHAHQAJAJAAAOQAAAQgMAKQgLAJgRAAQgHAAgKgEg");
	this.shape_16.setTransform(257.8,116.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525E6C").s().p("AAcBZQgGgQgKgQQgMgUgKAAQgGAAgEAEIAAAcQAAAIAHACQAFADAFAAIAAAHIg4AAIAAgHIAKgCQAHgCAAgIIAAiEQgBgJgGgEQgDgDgNAAIAAgIIArgDIACACIAAB4QAXgWAMgNQADgCABgCQAAgGgPgBIAAgHIAyAAIAAAHQgSAFgLAIIgWAUQAPAIALAPQAEAFANAZQACAEAIADQAEACAGABIAAAGg");
	this.shape_17.setTransform(246.6,113.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525E6C").s().p("AgvAzQgIgHAAgMQAAgYAYgIIAVgHIASgIIAAgLQAAgHgCgGQgGgLgLABQgLgBgFAGIACAPQAAAEgDAEQgEADgHAAQgLAAABgNQAAgLAMgIQAMgIAPABQAUAAAIAFQANAJAAAWIgCA2QABAEACADQADAFAFAAQAIAAABgSIAHAAQgBAfgZAAQgPAAgHgQIAAAAQgNARgWAAQgNAAgHgIgAgUAHQgMAHAAAOQAAASAQAAQAOAAAJgMIABgnQgTAFgJAHg");
	this.shape_18.setTransform(234.6,116.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525E6C").s().p("AgkApQgNgQAAgZQAAgXAOgQQAOgTAXABQAXAAAMANQALANAAAVIAAAGIhKAAQAAAyAlAAQALAAAIgFQAGgFAHgLIAHAEQgGAOgMAHQgNAJgPAAQgZAAgPgSgAgRgnQgIAJgBASIAzgBQAAglgXABQgLAAgIAKg");
	this.shape_19.setTransform(222.6,116.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525E6C").s().p("Ag9BUIAAgHIANgCQAGgCAAgJIAAh4QAAgJgGgDQgEgDgJgBIAAgHIAngDIACACIAAAMIABABQAOgQARAAQAVAAAPAQQAOARAAAaQAAAYgQARQgQAQgWAAQgRAAgKgIIgBAAIAAAlQAAAJAHACQAHADAIABIAAAHgAgUg7IAABBQADAHAFAFQAIAGAKAAQAOAAAJgMQAJgNAAgXQAAgTgIgNQgJgPgRAAQgOAAgKAMg");
	this.shape_20.setTransform(209.7,119.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525E6C").s().p("AgRA3QgHgDgEgDIgCAHIgIAAIgBgmIAHAAQACALAJAJQAKAMALABQAXAAAAgUQAAgJgHgFQgFgFgOgEQgigJAAgZQAAgNAKgJQAKgJARAAQAPgBAJAHIABgHIAIAAIACAjIgIAAQgBgLgIgHQgHgIgMAAQgSAAgBAPQABAKAGAFQAFACAPAHQAQAEAJAHQAIAJABAOQgBAQgMAKQgLAJgRAAQgIAAgJgEg");
	this.shape_21.setTransform(198.3,116.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525E6C").s().p("Ag0BPQgHgFAAgIQAAgFAEgEQAEgFAGAAQANAAAAAMIAAAGQAOgDAPgnIgmhaQgEgKgOgCIAAgIIA1AAIAAAIQgNABAAAEIABAFIAZBAIABAAIAYg7IABgHQAAgDgGgDIgJgCIAAgIIAqAAIAAAHQgEABgFAEQgHAEgCAFIgaA+IgNAfQgOAhgKAKQgHAIgNAAQgGAAgFgEg");
	this.shape_22.setTransform(447.1,92.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525E6C").s().p("AgYBaIAAgIIALgBQAGgCAAgJIAAiDQgBgKgFgDQgGgEgLgBIAAgHIAqgCIACABIAACcQAAAIAGADQAFACAGAAIAAAIg");
	this.shape_23.setTransform(437.7,86.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#525E6C").s().p("AgYBaIAAgIIALgBQAHgCgBgJIAAiDQAAgKgGgDQgFgEgMgBIAAgHIArgCIABABIAACcQAAAIAHADQAFACAFAAIAAAIg");
	this.shape_24.setTransform(430.9,86.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#525E6C").s().p("AgwAzQgHgHAAgMQAAgYAXgIIAWgHIATgIIAAgKQAAgJgEgFQgFgLgMAAQgKABgFAFIACAPQAAAEgDADQgFADgGABQgLAAAAgOQABgKANgIQAMgIAOAAQAUAAAJAHQAMAIgBAWIgBA2QAAADACAEQAEAFAFAAQAIAAAAgSIAIAAQgCAfgYAAQgPAAgGgQIgBAAQgNAQgWAAQgNAAgIgHgAgUAGQgMAIAAAOQAAASARAAQANAAAKgNIABgmQgUAFgJAGg");
	this.shape_25.setTransform(422.4,89.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#525E6C").s().p("AgkApQgNgQAAgZQAAgXAOgRQAOgRAXgBQAXABAMAOQALAMAAAUIAAAHIhKAAQAAAyAlAAQALAAAIgGQAGgEAHgLIAHAEQgGANgMAIQgNAIgPAAQgZAAgPgRgAgRgoQgIALgBAQIAzAAQAAglgXAAQgLAAgIAKg");
	this.shape_26.setTransform(410.4,89.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#525E6C").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_27.setTransform(400.1,89.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_28.setTransform(385,88.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#525E6C").s().p("AgvAzQgIgHAAgMQAAgYAYgIIAVgHIASgIIAAgKQAAgJgCgFQgGgLgLAAQgLABgFAFIACAPQAAAEgDADQgEADgHABQgLAAABgOQAAgKAMgIQAMgIAPAAQAUAAAIAHQANAIAAAWIgCA2QABADACAEQADAFAFAAQAIAAABgSIAHAAQgBAfgZAAQgPAAgHgQIAAAAQgNAQgWAAQgNAAgHgHgAgUAGQgMAIAAAOQAAASAQAAQAOAAAJgNIABgmQgTAFgJAGg");
	this.shape_29.setTransform(375.5,89.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#525E6C").s().p("AAKBaIAAgIIAMgBQAGgCAAgJIAAg3QAAgMgGgHQgGgGgIAAQgKAAgKAGQgGAEgDAGIAAA/QAAAIAHADQAEACAHAAIAAAIIg5AAIAAgIIALgBQAGgCAAgJIAAiEQgBgKgFgEQgEgCgNgBIAAgHIArgCIACABIAABTIAAAAQAKgKAGgDQAJgGANgBQAhABAAAkIAAA4QAAAIAGADQAFACAGAAIAAAIg");
	this.shape_30.setTransform(361.7,86.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#525E6C").s().p("AgSApIAAhEIgWAAIAAgLIAXAAIAAgjIATAAIAAAjIAhAAIAAALIggAAIAABBQAAAWARAAQALAAACgTIAIAAQgBAPgIAIQgIAKgOAAQgcAAAAghg");
	this.shape_31.setTransform(350.8,88.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#525E6C").s().p("AAbBaQgFgSgKgQQgMgTgKAAQgGAAgEAEIAAAcQAAAIAHADQAFACAGAAIAAAIIg5AAIAAgIIALgBQAGgCAAgJIAAiEQgBgJgFgFQgEgCgNgBIAAgHIArgCIACABIAAB5QAXgXAMgMQADgEAAgCQAAgEgOgCIAAgHIAyAAIAAAGQgTAGgKAIIgWAUQAPAHALAQQAEAGANAYQACAFAIADQAEABAGAAIAAAIg");
	this.shape_32.setTransform(334.6,86.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#525E6C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_33.setTransform(321.7,89.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#525E6C").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_34.setTransform(309,89.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#525E6C").s().p("AgpBbIABgtIAAhvQgBgJgGgFQgEgCgMgBIAAgHIArgCIABABIAABOIABABQAOgPASgBQAVABAOAPQAOAQAAAbQAAAYgQARQgQARgWAAQgQAAgTgLIgJAOgAgTgDIAABAQAHAUATAAQAOAAAJgMQAJgOAAgXQAAgTgHgNQgKgOgQAAQgOAAgLALg");
	this.shape_35.setTransform(295.6,86.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#525E6C").s().p("AgvAzQgIgHAAgMQAAgYAYgIIAVgHIASgIIAAgKQAAgJgCgFQgGgLgLAAQgLABgFAFIACAPQAAAEgDADQgEADgHABQgLAAABgOQAAgKAMgIQAMgIAPAAQAUAAAIAHQANAIAAAWIgCA2QABADACAEQADAFAFAAQAIAAABgSIAHAAQgBAfgZAAQgPAAgHgQIAAAAQgNAQgXAAQgMAAgHgHgAgUAGQgMAIAAAOQAAASAQAAQAOAAAKgNIAAgmQgTAFgJAGg");
	this.shape_36.setTransform(278.3,89.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#525E6C").s().p("AgvBLQgPgRAAgbQAAgZARgPQAQgQAWAAQAOAAAOAHIAAgrQgBgLgFgEQgGgDgOgBIAAgHIAugDIACACIAACZQAAAHAGAEQADACALAAIAAAIIgoACIgCgBIAAgLIgBAAQgOAPgRAAQgVAAgPgQgAgcgDQgKANAAAXQAAAUAJAMQAJAOARAAQAMAAAMgMIAAhBQgGgTgUABQgOAAgJANg");
	this.shape_37.setTransform(259.4,86.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#525E6C").s().p("AAIA5IAAgHIALgCQAGgCABgJIAAg2QAAgLgHgIQgGgGgHgBQgLABgJAGQgGAFgEAFIAAA+QAAAIAHADQAFACAGABIAAAHIg5AAIAAgHIALgCQAHgCAAgJIAAhBQgBgJgGgFQgEgCgHgBIAAgHIAmgCIABABIAAARIABAAIAPgOQAJgGAOAAQAhAAgBAmIAAA2QAAAJAHACQAFADAFAAIAAAHg");
	this.shape_38.setTransform(245.3,89.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#525E6C").s().p("AgZBWIAAgHIAKgCQAHgCAAgJIAAhCQgBgHgGgFQgFgDgJgBIAAgHIAogCIABABIAABZQAAAIAHADQAGADAFAAIAAAHgAgKg8QgEgEAAgGQAAgGAEgEQAFgFAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAFgGAAQgFgBgFgEg");
	this.shape_39.setTransform(234.7,86.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#525E6C").s().p("AhCBSIAAgIIATgCQAHgDAAgJIAAh1QAAgJgHgDQgIgDgLgBIAAgIICFAAIAAAqIgJAAQgDgKgHgKQgJgLgGgBIgVgBIgbAAIAABCIAUAAQAMAAAJgHQAFgFACgQIAJAAIAABDIgJAAQAAgGgDgIQgCgHgCgCQgIgIgNABIgUAAIAAA4QAAAIAIAEQAGADALAAIAAAIg");
	this.shape_40.setTransform(224.2,87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-30,75,729.2,54.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_speak();
	this.instance.parent = this;
	this.instance.setTransform(0,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,320,1456,180), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAhIgWghIgHAHIAAAaIgJAAIAAhBIAJAAIAAAcIAagcIAMAAIgYAaIAaAng");
	this.shape.setTransform(312.4,60.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAZQgKgJAAgQQAAgPAKgJQAKgJANAAQAOAAAKAJQAKAJAAAPQAAAQgKAJQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAALAHAHQAIAIAJAAQALAAAHgIQAHgHAAgLQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_1.setTransform(304.6,60.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAZQgKgJAAgQQAAgPAKgJQAKgJANAAQAOAAAKAJQAKAJAAAPQAAAQgKAJQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAALAHAHQAIAIAJAAQALAAAHgIQAHgHAAgLQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_2.setTransform(296.3,60.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIASAAQAKAAAFADQAHAEAAAJQAAAFgDAEQgDAEgEACQAOACAAANQABAJgIAFQgFAFgKAAgAgNAaIAKAAQAIgBADgCQAFgDAAgGQAAgGgFgEQgDgCgIAAIgKAAgAgNgEIAIAAQAHAAACgCQAFgDAAgGQgBgFgEgDQgDgCgFAAIgJAAg");
	this.shape_3.setTransform(289.1,60.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAZQgKgJAAgQQAAgPAKgJQAKgJANAAQAOAAAKAJQAKAJAAAPQAAAQgKAJQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAALAHAHQAIAIAJAAQALAAAHgIQAHgHAAgLQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_4.setTransform(281.6,60.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAhIAAhBIAIAAIAABBg");
	this.shape_5.setTransform(275.8,60.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIATAAQAPAAAJAIQALAKAAAOQAAAPgLAKQgJAIgPAAgAgRAZIAKAAQALAAAGgGQAIgIAAgLQAAgKgIgIQgGgGgLgBIgKAAg");
	this.shape_6.setTransform(270.8,60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAZQgFgGAAgOIAAglIAJAAIAAAlIABAFQAAAGACAEQAEAFAIAAQAJAAAEgFIACgFIABgKIAAglIAJAAIAAAlQAAAPgFAFQgHAJgNgBQgMABgHgJg");
	this.shape_7.setTransform(263.3,60.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAhIgHgRIgcAAIgGARIgKAAIAbhBIAHAAIAbBBgAALAIIgLgdIgLAdIAWAAg");
	this.shape_8.setTransform(256.1,60.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAmAAIAAAHIgdAAIAAAUIAbAAIAAAHIgbAAIAAAXIAeAAIAAAIg");
	this.shape_9.setTransform(247.2,60.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAmAAIAAAHIgdAAIAAAUIAbAAIAAAHIgbAAIAAAXIAeAAIAAAIg");
	this.shape_10.setTransform(241.3,60.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAhIgQgdIgHAAIAAAdIgJAAIAAhBIASAAQAJAAAGAFQAHAFAAAIQAAAJgFAEQgEAEgGAAIASAegAgMgCIAHAAQAHAAADgDQAEgCAAgHQAAgFgEgDQgDgCgHgBIgHAAg");
	this.shape_11.setTransform(235.6,60.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAhIAAhBIAjAAIAAAHIgaAAIAAAXIAZAAIAAAGIgZAAIAAAdg");
	this.shape_12.setTransform(229.7,60.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525E6C").s().p("AoAByIAAjjIQCAAIAADjg");
	this.shape_13.setTransform(271.1,60.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(219.8,48.8,102.7,22.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,320,1456,180), null);


// stage content:
(lib._728x90_speak = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,105,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:1.8,regY:-30.4,x:91.4,y:55.8,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:55.7,alpha:0.008},0).wait(1).to({alpha:0.015},0).wait(1).to({y:55.6,alpha:0.026},0).wait(1).to({y:55.5,alpha:0.04},0).wait(1).to({y:55.3,alpha:0.059},0).wait(1).to({y:55.1,alpha:0.084},0).wait(1).to({y:54.8,alpha:0.117},0).wait(1).to({y:54.4,alpha:0.163},0).wait(1).to({y:53.9,alpha:0.225},0).wait(1).to({y:53.2,alpha:0.312},0).wait(1).to({y:52.3,alpha:0.421},0).wait(1).to({y:51.3,alpha:0.532},0).wait(1).to({y:50.6,alpha:0.624},0).wait(1).to({y:50,alpha:0.695},0).wait(1).to({y:49.5,alpha:0.75},0).wait(1).to({y:49.1,alpha:0.795},0).wait(1).to({y:48.8,alpha:0.831},0).wait(1).to({y:48.6,alpha:0.86},0).wait(1).to({y:48.4,alpha:0.885},0).wait(1).to({y:48.2,alpha:0.906},0).wait(1).to({y:48,alpha:0.924},0).wait(1).to({y:47.9,alpha:0.939},0).wait(1).to({y:47.8,alpha:0.952},0).wait(1).to({y:47.7,alpha:0.962},0).wait(1).to({y:47.6,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:47.5,alpha:0.985},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:47.4,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:150,y:96.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,34.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:271.1,regY:60.1,x:363.8,y:86.3,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:86.2,alpha:0.008},0).wait(1).to({y:86.1,alpha:0.015},0).wait(1).to({y:86,alpha:0.026},0).wait(1).to({y:85.8,alpha:0.04},0).wait(1).to({y:85.5,alpha:0.059},0).wait(1).to({y:85.2,alpha:0.084},0).wait(1).to({y:84.8,alpha:0.117},0).wait(1).to({y:84.2,alpha:0.163},0).wait(1).to({y:83.4,alpha:0.225},0).wait(1).to({y:82.2,alpha:0.312},0).wait(1).to({y:80.8,alpha:0.421},0).wait(1).to({y:79.4,alpha:0.532},0).wait(1).to({y:78.2,alpha:0.624},0).wait(1).to({y:77.3,alpha:0.695},0).wait(1).to({y:76.5,alpha:0.75},0).wait(1).to({y:76,alpha:0.795},0).wait(1).to({y:75.5,alpha:0.831},0).wait(1).to({y:75.1,alpha:0.86},0).wait(1).to({y:74.8,alpha:0.885},0).wait(1).to({y:74.5,alpha:0.906},0).wait(1).to({y:74.3,alpha:0.924},0).wait(1).to({y:74.1,alpha:0.939},0).wait(1).to({y:73.9,alpha:0.952},0).wait(1).to({y:73.8,alpha:0.962},0).wait(1).to({y:73.7,alpha:0.971},0).wait(1).to({y:73.6,alpha:0.979},0).wait(1).to({y:73.5,alpha:0.985},0).wait(1).to({y:73.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:73.3,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:57.3,regY:8,x:150,y:21.2},0).wait(34).to({regX:271.1,regY:60.1,x:363.8,y:73.3},0).wait(1).to({y:73.2},0).wait(1).to({y:73.1},0).wait(1).to({y:73},0).wait(1).to({y:72.7},0).wait(1).to({y:72.3},0).wait(1).to({y:71.7},0).wait(1).to({y:70.6},0).wait(1).to({y:69.4},0).wait(1).to({y:68.5},0).wait(1).to({y:67.9},0).wait(1).to({y:67.5},0).wait(1).to({y:67.2},0).wait(1).to({y:66.9},0).wait(1).to({y:66.7},0).wait(1).to({y:66.6},0).wait(1).to({y:66.5},0).wait(1).to({y:66.4},0).wait(2).to({y:66.3},0).wait(2).to({regX:57.3,regY:8,x:150,y:14.2},0).wait(22).to({scaleX:0.8,scaleY:0.8,x:196,y:24.2,alpha:0.801},3).to({scaleX:1,scaleY:1,x:150,y:14.2,alpha:1},5).wait(80));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,32.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol3copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,-63.6,1,1,0,0,0,120.4,52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:334.3,regY:102.6,x:364,y:83},0).wait(1).to({alpha:0.002},0).wait(1).to({y:82.9,alpha:0.004},0).wait(1).to({y:82.8,alpha:0.007},0).wait(1).to({y:82.7,alpha:0.011},0).wait(1).to({y:82.5,alpha:0.016},0).wait(1).to({y:82.2,alpha:0.023},0).wait(1).to({y:81.9,alpha:0.032},0).wait(1).to({y:81.5,alpha:0.043},0).wait(1).to({y:81,alpha:0.056},0).wait(1).to({y:80.5,alpha:0.071},0).wait(1).to({y:79.8,alpha:0.091},0).wait(1).to({y:78.9,alpha:0.114},0).wait(1).to({y:77.9,alpha:0.143},0).wait(1).to({y:76.6,alpha:0.179},0).wait(1).to({y:75,alpha:0.224},0).wait(1).to({y:73,alpha:0.28},0).wait(1).to({y:70.5,alpha:0.348},0).wait(1).to({y:67.7,alpha:0.425},0).wait(1).to({y:64.9,alpha:0.503},0).wait(1).to({y:62.4,alpha:0.572},0).wait(1).to({y:60.3,alpha:0.631},0).wait(1).to({y:58.5,alpha:0.681},0).wait(1).to({y:57,alpha:0.723},0).wait(1).to({y:55.8,alpha:0.758},0).wait(1).to({y:54.7,alpha:0.788},0).wait(1).to({y:53.7,alpha:0.814},0).wait(1).to({y:52.9,alpha:0.837},0).wait(1).to({y:52.2,alpha:0.858},0).wait(1).to({y:51.5,alpha:0.875},0).wait(1).to({y:51,alpha:0.891},0).wait(1).to({y:50.5,alpha:0.905},0).wait(1).to({y:50,alpha:0.918},0).wait(1).to({y:49.6,alpha:0.929},0).wait(1).to({y:49.2,alpha:0.939},0).wait(1).to({y:48.9,alpha:0.948},0).wait(1).to({y:48.6,alpha:0.956},0).wait(1).to({y:48.4,alpha:0.963},0).wait(1).to({y:48.2,alpha:0.969},0).wait(1).to({y:48,alpha:0.975},0).wait(1).to({y:47.8,alpha:0.98},0).wait(1).to({y:47.6,alpha:0.984},0).wait(1).to({y:47.5,alpha:0.988},0).wait(1).to({y:47.4,alpha:0.991},0).wait(1).to({y:47.3,alpha:0.993},0).wait(1).to({y:47.2,alpha:0.995},0).wait(1).to({alpha:0.997},0).wait(1).to({y:47.1,alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:-3.6},0).wait(35).to({regX:334.3,regY:102.6,x:364,y:47},0).wait(1).to({y:46.9},0).wait(1).to({y:46.7},0).wait(1).to({y:46.4},0).wait(1).to({y:45.9},0).wait(1).to({y:45.1},0).wait(1).to({y:43.8},0).wait(1).to({y:41.6},0).wait(1).to({y:39.2},0).wait(1).to({y:37.4},0).wait(1).to({y:36.2},0).wait(1).to({y:35.4},0).wait(1).to({y:34.8},0).wait(1).to({y:34.3},0).wait(1).to({y:33.9},0).wait(1).to({y:33.7},0).wait(1).to({y:33.4},0).wait(1).to({y:33.3},0).wait(1).to({y:33.2},0).wait(1).to({y:33.1},0).wait(2).to({regX:120.4,regY:52,x:150.1,y:-17.6},0).wait(37).to({regX:334.3,regY:102.6,x:363.9,y:33,alpha:0.997},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.851},0).wait(1).to({x:363.8,y:32.9,alpha:0.72},0).wait(1).to({x:363.6,alpha:0.51},0).wait(1).to({x:363.5,y:32.8,alpha:0.335},0).wait(1).to({x:363.4,y:32.7,alpha:0.226},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.106},0).wait(1).to({x:363.3,alpha:0.071},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120.4,regY:52,x:149.4,y:-18,alpha:0},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({_off:false},0).wait(1).to({regX:337.9,regY:148.1,x:367.6,y:32.5,alpha:0.001},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.799},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:-63.6,alpha:1},0).wait(97));

	// img
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(79,154.1,0.567,0.567,0,0,0,299.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:300,scaleX:0.5,scaleY:0.5,x:150,y:140},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273,40.3,825.5,115);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lb_speak.jpg", id:"lb_speak"}
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