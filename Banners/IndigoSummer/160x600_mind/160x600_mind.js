(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.lb_book = function() {
	this.initialize(img.lb_book);
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(121.1,104.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(16.4,44.4,209.5,119.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(166.5,111.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkApQgNgQAAgZQAAgXAOgQQAOgTAXABQAXAAAMANQALANAAAVIAAAGIhKAAQAAAyAlAAQALAAAIgFQAGgFAHgLIAHAEQgGAOgMAHQgNAJgPAAQgZgBgPgRgAgRgnQgIAJgBASIAzgBQAAglgXAAQgLAAgIALg");
	this.shape_1.setTransform(158,107.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6A2QAAgLAIgHQAJgIASAAIAAgCQgXgHAAgOQABgMASgHIAAgCQgYgLAAgVQAAgQAMgKQANgJARAAQAQAAAQAHQALgHAOAAQAEAAAEADQADAEAAAFQAAALgKAAQgKAAAAgOQgJAAgGAEIAAABQAJAKAAANQAAAPgNAKQgMAKgOAAIgPAAQgIADAAAHQAAAHAIACIASACIAaABQAMABAIAIQAKAKAAAOQAAASgOAKQgRAMgcAAQg0AAAAgegAggAnQgGAFAAALQAAAIAIAGQAKAHASAAQAkAAAAgbQAAgNgMgEQgMgCgYAAQgNADgFAGgAgdgwQAAANAGAIQAGAIAIAAQAKAAAEgJQAFgHABgMQgBgcgTAAQgUAAAAAbg");
	this.shape_2.setTransform(146.3,110.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHA5IAAgHIAMgCQAGgCAAgIIAAg3QABgMgHgHQgGgHgHABQgLgBgJAHQgGAEgEAGIAAA+QAAAIAHADQAFACAGABIAAAHIg5AAIAAgHIALgCQAHgCgBgIIAAhDQAAgJgGgDQgEgDgIgBIAAgGIAngEIABACIAAAQIABAAIAPgMQAJgHAOAAQAhAAgBAmIAAA2QAAAJAHACQAFACAFABIAAAHg");
	this.shape_3.setTransform(132.9,107.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwAzQgHgHAAgMQAAgXAXgJIAWgHIATgIIAAgLQAAgHgEgGQgFgLgMAAQgKAAgFAGIACAPQAAAFgEADQgEADgGAAQgLgBAAgNQABgKANgIQALgIAPABQAUAAAJAFQAMAJgBAWIgBA2QAAADACAEQADAFAGAAQAIAAAAgSIAIAAQgCAfgYAAQgQAAgFgQIgBAAQgNAQgWABQgNAAgIgIgAgUAHQgMAHAAAOQAAASARAAQANAAAKgMIABgnQgUAFgJAHg");
	this.shape_4.setTransform(120.4,107.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAKBZIAAgHIALgCQAHgCAAgIIAAg3QAAgMgHgGQgFgHgIAAQgLAAgIAHQgIADgCAGIAAA/QAAAIAGACQAGACAFABIAAAHIg4AAIAAgHIAKgCQAHgCAAgIIAAiEQgBgKgGgDQgDgDgMgBIAAgHIAqgDIACACIAABTIABAAQAJgKAFgDQAKgHAOABQAgAAAAAlIAAA3QAAAIAGACQAFADAFAAIAAAHg");
	this.shape_5.setTransform(106.6,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAqQgOgQAAgaQAAgXAPgRQAQgRAXAAQASgBALAJQAKAIAAAMQAAAPgOAAQgFAAgEgDQgEgDAAgGQAAgGABgEIACgFQgCgIgOgBQgKAAgJAMQgKANAAAZQAAATAKAOQAJANAPAAQAUAAAOgVIAHAFQgIANgMAHQgMAJgPAAQgZAAgNgRg");
	this.shape_6.setTransform(94.9,107.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwAzQgHgHAAgMQAAgXAXgJIAWgHIATgIIAAgLQgBgHgDgGQgFgLgMAAQgKAAgFAGIACAPQAAAFgEADQgEADgGAAQgKgBAAgNQgBgKANgIQAMgIAPABQATAAAKAFQAMAJAAAWIgBA2QAAADABAEQADAFAGAAQAIAAAAgSIAIAAQgCAfgYAAQgQAAgFgQIgBAAQgNAQgXABQgMAAgIgIgAgUAHQgMAHAAAOQAAASARAAQANAAAJgMIACgnQgVAFgIAHg");
	this.shape_7.setTransform(78,107.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_8.setTransform(178.7,78.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_9.setTransform(167.3,78.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqBaIAAgIIAKgBQAHgCAAgJIAAhPIgYAAIAAgLIAYAAIAAgFQAAggAPgRQANgPAWAAQANAAAGAHQAHAGgBAJQAAAEgDAEQgEAEgFAAQgGAAgDgCQgGgDAAgGIACgNQgBgCgEAAQgMAAgGALQgEALgCAbIAAAMIAdAAIAAALIgdAAIAABOQAAAIAGADQAFACAKAAIAAAIg");
	this.shape_10.setTransform(158.4,75.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag6A2QAAgLAIgHQAJgIASAAIAAgCQgXgHAAgOQAAgMATgHIAAgCQgZgLAAgVQAAgQAOgKQAMgJARAAQAQAAAQAHQALgHAOAAQAEAAADADQAEAEAAAFQAAALgKAAQgKAAAAgOQgJAAgGAEIAAABQAJAKAAANQAAAPgNAKQgMAKgPAAIgNAAQgJADAAAHQAAAHAJACIARACIAaABQALABAJAIQALAKgBAOQAAASgOAKQgRAMgcAAQg0AAAAgegAggAnQgGAFAAALQAAAIAIAGQAKAHASAAQAkAAAAgbQAAgNgMgEQgNgCgXAAQgNADgFAGgAgdgwQAAANAGAIQAGAIAIAAQAKAAAFgJQAEgHAAgMQAAgcgTAAQgUAAAAAbg");
	this.shape_11.setTransform(141.6,81.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAIA5IAAgIIALgBQAGgCABgIIAAg3QAAgLgHgIQgFgGgIAAQgLAAgJAGQgHAEgDAHIAAA+QABAHAGADQAFACAGAAIAAAIIg4AAIAAgIIAKgBQAHgCAAgIIAAhDQgBgIgGgFQgEgCgHAAIAAgHIAmgDIABACIAAAQIABAAIAPgOQAJgGAOAAQAhAAgBAmIAAA3QABAHAGADQAFADAFgBIAAAIg");
	this.shape_12.setTransform(128.2,78.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZBWIAAgIIAKgBQAHgCAAgIIAAhDQgBgIgGgEQgFgDgJAAIAAgHIAogDIABACIAABYQAAAJAHACQAGADAFgBIAAAIgAgKg7QgEgFAAgGQAAgGAEgFQAFgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAFQgEAFgGgBQgFAAgFgDg");
	this.shape_13.setTransform(117.6,75.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYBaIAAgIIALgBQAHgDgBgIIAAiDQAAgJgGgFQgFgDgMAAIAAgIIArgCIABABIAACbQAAAJAGACQAGADAFAAIAAAIg");
	this.shape_14.setTransform(110.4,75.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBaIAAgIIALgBQAGgDABgIIAAiDQgBgJgGgFQgFgDgMAAIAAgIIAqgCIACABIAACbQAAAJAHACQAEADAGAAIAAAIg");
	this.shape_15.setTransform(103.6,75.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_16.setTransform(94.2,78.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqA5IAAgIIALgBQAGgCAAgJIAAhCQgBgJgFgEQgFgCgHgBIAAgHIAmgDIACACIAAAQIAAAAQAOgTARAAQAHAAAFAFQAEAEAAAHQAAAHgDAFQgEAEgGAAQgMAAAAgLIABgIQgIAAgHAHQgFAEgDAGIAAA+QAAAIAFADQAFACALAAIAAAIg");
	this.shape_17.setTransform(83.4,78.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkApQgNgPAAgaQAAgXAPgRQAQgRAXAAQATAAAKAIQAJAIAAAMQAAAPgNAAQgEAAgEgDQgGgDAAgGQAAgGACgEIACgEQgBgKgOABQgLgBgJALQgKANABAZQgBAVAKANQAKANAOAAQAUAAANgVIAIAFQgHANgMAHQgNAJgOAAQgagBgOgRg");
	this.shape_18.setTransform(73.3,78.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQA4QgJgDgDgEIgCAIIgJAAIAAgnIAHAAQADALAHAKQALAMAMgBQAWABAAgUQAAgJgHgFQgFgFgPgEQgggIgBgaQAAgNAKgJQALgKAQABQAPAAAJAGIABgHIAIAAIACAjIgHAAQgDgLgGgHQgJgIgLAAQgSAAgBAQQABAJAGAEQAFAEAPAFQARAFAHAHQAKAJgBAOQABAQgMAKQgMAJgRAAQgIAAgIgDg");
	this.shape_19.setTransform(62.6,78.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaBXQgJgFAAgKQABgGAEgOIAhhtQAEgLAAgFQAAgHgIgBIgPgBIAAgFIA0gCIgvCTQgEANgBAFQAAAIAJAAQAOAAAMgfIAEABQgHASgHAIQgJAKgKAAQgKAAgGgDg");
	this.shape_20.setTransform(160.3,46.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgtAwQgHgHAAgMQAAgFAEgMIAOgjQAFgMAAgHQAAgIgHgBQgIAAgGAJQgGAHgGARIgEgBQAHgTAGgHQAIgKAMAAQAJAAAHADQAIAGAAAJQAAAHgFANIgOAkQgFAMAAAFQAAANAMAAQAJAAAKgIQAHgHAGgKIAZhNIAWAAIgaBMQgDANAAAEQAAAKAIAAQAHAAAHgIQAFgHAHgQIAEABQgHASgHAIQgIAKgMAAQgXAAAAgWIgBAAQgPAWgTAAQgMABgIgJg");
	this.shape_21.setTransform(148.9,49.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhaBjQAAgFADgEQAEgEAGAAQAEAAAEACQAEAEAAAFQAAAFgFAHQABAEAEAAQANAAAJgMQAJgMAIgbIAahjIgZAAIADgIIAYAAIADgKQAIgeAUgSQAOgNAUAAQAMgBAGAHQAGAGAAAIQAAAEgDAEQgDAEgGAAQgEAAgEgCQgFgDAAgGQAAgDADgJQgBgFgEAAQgWAAgOAzIgFAQIAeAAIgCAIIgeAAIgYBdQgLAhgSAPQgRAOgRAAQgYAAAAgTg");
	this.shape_22.setTransform(138,49.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhEA1QAAgXASgZQAUgbAeAAQAQAAAFAPIABAAIAPgzQAEgLAAgFQAAgGgKgCIgRgBIAAgEIA3gDIgvCTQgDAMAAAFQAAAKAIAAQAIAAAGgIQAFgHAHgRIAEACQgHASgGAIQgJAKgMAAQgWAAAAgWIgBAAQgPAXgTAAQgiAAAAgmgAggAJQgNAZAAAYQAAAYAPAAQATAAAMgXIASg7QgFgRgPAAQgRAAgOAag");
	this.shape_23.setTransform(128.3,46.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARA1QgJgFAAgKQAAgGAFgOIAOglQAFgLAAgHQAAgLgMAAQgJAAgKAJQgIAIgHANIgYBIIgWAAIAahMQAFgNAAgGQAAgJgHAAQgIAAgGAJQgFAGgHARIgFgBQAIgTAGgIQAJgKALAAQAWAAAAAWIABABQAQgXARAAQAMAAAIAIQAIAIAAALQAAAGgEAMIgOAjQgFANAAAFQAAAIAJAAQAOAAAMgfIAFACQgIARgGAJQgJAJgMABQgJAAgHgEg");
	this.shape_24.setTransform(113.9,49.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPBTQgJgFAAgKQAAgHAFgNIAQgpQAEgNABgFQgBgJgGAAQgJAAgGAIQgFAHgHAQIgEgBQAIgSAGgIQAIgKAMAAQAIAAAHAFQAIAGAAAKQAAAFgIASIgNAjQgEAOAAAFQAAAIAHAAQAJAAAGgIQAGgHAGgQIAEABQgIASgGAIQgIAKgMAAQgJAAgGgDgAAKhEQgBgHAFgFQAEgFAIAAQAFAAADAEQADAEAAAFQAAAHgEAFQgFAFgHAAQgLAAAAgNg");
	this.shape_25.setTransform(102.7,46.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAwA1QgJgFAAgKQAAgFAFgPIAOglQAFgLAAgHQAAgLgNAAQgOAAgQAXIgaBPIgVAAIAZhMQACgIABgHQgBgLgMAAQgIAAgLAKQgIAIgGAMIgYBIIgWAAIAahMQAEgNABgGQAAgJgIAAQgHAAgGAJQgGAGgGARIgFgBQAHgTAHgIQAIgKAMAAQAWAAAAAWIABABQAQgXASAAQALAAAIAIQAHAFABAKIAAAAQARgXARAAQAMAAAIAIQAIAJAAAKQAAAGgFAMIgMAjQgGANAAAFQAAAIAJAAQAOAAAMgfIAFACQgHARgHAJQgIAJgMABQgKAAgHgEg");
	this.shape_26.setTransform(88.4,49.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgkApQgNgQAAgZQAAgXAOgQQAOgTAXABQAXAAAMANQALANAAAVIAAAGIhKAAQAAAyAlAAQALAAAIgFQAGgFAHgLIAHAEQgGAOgMAHQgNAJgPAAQgZgBgPgRgAgRgnQgIAJgBASIAzgBQAAglgXAAQgLAAgIALg");
	this.shape_27.setTransform(175.7,20.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAsA5IAAgHIAKgCQAGgCAAgIIAAg3QAAgMgGgHQgFgHgIABQgUAAgJAQIAAA+QAAAJAGACQAFACAFABIAAAHIg2AAIAAgHIAKgCQAGgCAAgIIAAg3QAAgMgFgHQgGgHgIABQgUAAgJAQIAAA+QAAAIAGADQAFACAGABIAAAHIg4AAIAAgHIALgCQAGgCAAgIIAAhDQgBgIgFgEQgFgDgIgBIAAgGIAngEIACACIAAARIAAAAQALgLAEgCQAKgHAOAAQAVAAAJAUIAQgNQAKgHAOAAQAfAAAAAnIAAA1QAAAJAHACQAEACAHABIAAAHg");
	this.shape_28.setTransform(159.5,20.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_29.setTransform(142.5,20.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRA3QgHgDgEgDIgCAHIgJAAIAAgmIAHAAQACALAJAJQAJANAMAAQAXgBAAgTQAAgJgHgFQgFgFgOgDQgigKAAgZQAAgNAKgJQALgJAQAAQAPgBAJAHIABgHIAIAAIACAjIgIAAQgBgLgIgHQgHgIgMAAQgSAAgBAPQABAKAGAFQAFACAPAHQAQAEAJAHQAJAJAAAOQgBAQgLAKQgMAJgRAAQgIAAgJgEg");
	this.shape_30.setTransform(131.3,20.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag0BPQgHgFAAgIQAAgFAEgEQAEgFAGAAQANAAAAAMIAAAGQAOgDAPgnIgmhaQgEgKgOgCIAAgIIA1AAIAAAIQgNABAAAEIABAFIAZBAIABAAIAYg7IABgHQAAgDgGgDIgJgCIAAgIIAqAAIAAAHQgEABgFAEQgHAEgCAFIgaA+IgNAfQgOAhgKAKQgHAIgNAAQgGAAgFgEg");
	this.shape_31.setTransform(115.1,23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgmArQgQgRAAgaQAAgZAPgQQAQgRAYAAQAYAAAQARQAOAQAAAZQAAAYgOARQgQASgZAAQgXAAgPgQgAgYgiQgGANAAAUQAAAWAHAOQAIAPAPAAQAQAAAIgPQAHgOAAgVQAAgVgHgNQgIgQgQAAQgQAAgIAQg");
	this.shape_32.setTransform(103.1,20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdBsQgGgFAAgIQAAgEADgEQAEgFAGAAQAOAAAAAMQAAAFgCAFIAFABQAKAAAEgLQAEgLAAgcIAAhRQgBgJgGgEQgFgDgNgBIAAgHIAtgDIACACIAABkQAAAhgPAQQgPAPgQAAQgLAAgHgFgAALhXQgEgEAAgGQAAgGAEgFQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_33.setTransform(91.2,20.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAIA5IAAgHIALgCQAGgCABgIIAAg3QAAgMgHgHQgFgHgIABQgLgBgJAHQgHAEgDAGIAAA+QABAIAGADQAFACAGABIAAAHIg4AAIAAgHIAKgCQAHgCAAgIIAAhDQgBgJgGgDQgEgDgHgBIAAgGIAmgEIABACIAAAQIABAAIAPgMQAJgHAOAAQAhAAgBAmIAAA2QABAJAGACQAFACAFABIAAAHg");
	this.shape_34.setTransform(82.8,20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhHBSIAAgIQAOgBAFgBQAGgEABgJIAAh0QgBgJgGgDQgJgDgKgBIAAgIICCAAIAAAoIgIAAQgDgJgHgJQgIgLgIgBIgUgBIgZAAIAABCIAUAAQALAAAIgIQAFgGACgPIAJAAIAABCIgJAAIgDgMQgCgIgCgCQgIgHgLAAIgUAAIAAAxQAAAPAFADQAFAEASAAQAgAAAFgGQAFgFAGgMIAIgRIAJAAIgDAxg");
	this.shape_35.setTransform(67.8,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(42,6,156.9,114.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lb_book();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,320,1200), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#296418").s().p("AgVATIAGgGQACADAGADQAEACADAAQALAAAAgIQAAgEgFgDIgCgBIgFgCIgIgDQgIgDgBgKQAAgHAGgEQAFgFAIAAQAMAAAHAIIgFAHQgFgGgJAAQgIAAAAAHQAAAFAKADIAIADIAGADQAFAEAAAHQAAAIgGAFQgGAFgKAAQgOAAgHgLg");
	this.shape.setTransform(94.1,22.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#296418").s().p("AAMApIgTgbIgGAGIAAAVIgMAAIAAhSIAMAAIAAAxIAWgXIAOAAIgXAVIAaAjg");
	this.shape_1.setTransform(88.4,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#296418").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgIQAAgIgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_2.setTransform(80.7,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#296418").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgIQAAgIgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(73.1,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#296418").s().p("AgbApIAAhSIAWAAQANAAAGAFQAJAFAAAMQAAAGgEAFQgDAFgGACIAAAAQASACAAARQAAALgIAHQgHAGgNgBgAgQAgIANAAQAJAAAEgDQAGgEAAgHQAAgIgGgEQgEgDgJAAIgNAAgAgQgFIAKAAQAIAAAEgCQAFgEAAgHQAAgIgFgCQgEgDgHAAIgLAAg");
	this.shape_4.setTransform(65.5,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#296418").s().p("AgTAVQgIgIAAgNQAAgNAJgIQAIgIALAAQAMAAAHAIQAIAHAAAMIAAAEIgsAAQABAJAFAFQAFAFAHAAQAHAAAGgDIAGgEIAFAHIgBAAQgJAJgPAAQgMAAgIgJgAARgEQAAgGgFgFQgEgGgHAAQgHAAgEAGQgFAFAAAGIAgAAIAAAAg");
	this.shape_5.setTransform(57.9,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#296418").s().p("AgZApIAAhSIAYAAQAMAAAHAHQAIAGAAAMQAAALgIAFQgHAGgMAAIgMAAIAAAjgAgNgDIALAAQAGAAAFgDQAFgEAAgGQAAgIgFgDQgFgEgGAAIgLAAg");
	this.shape_6.setTransform(47.9,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#296418").s().p("AgdAfQgNgMAAgTQAAgSANgMQAMgMARAAQASAAAMAMQANAMAAASQAAATgNAMQgMAMgSAAQgRAAgMgMgAgVgXQgJAJAAAOQAAAOAJAJQAJAJAMAAQANAAAJgJQAJgJAAgOQAAgOgJgJQgJgJgNAAQgMAAgJAJg");
	this.shape_7.setTransform(38.9,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#296418").s().p("AAWApIAAgmIgrAAIAAAmIgMAAIAAhSIAMAAIAAAjIArAAIAAgjIAMAAIAABSg");
	this.shape_8.setTransform(29.1,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#296418").s().p("AgRAlIgKgIIAHgIQAJAMALAAQAHAAAFgEQAEgEAAgGQAAgGgFgEIgFgCIgDgCIgNgFQgFgCgDgDQgFgGAAgJQAAgJAIgGQAGgHAMAAQANAAAKALIgGAIQgIgJgKAAQgFAAgEADQgFADAAAGQABAFADADIAHAEIAOAHQAGABADAEQAGAHAAAHQAAALgJAHQgIAHgLAAQgLAAgGgGg");
	this.shape_9.setTransform(20.8,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoHCPIAAkdIQPAAIAAEdg");
	this.shape_10.setTransform(57.4,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(5.4,6.4,104,28.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(289.2,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(139.2,0,320,1200), null);


// stage content:
(lib._160x600_mind = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(80,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:121.1,regY:104.1,x:81.1,y:283,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.008},0).wait(1).to({y:282.9,alpha:0.015},0).wait(1).to({y:282.8,alpha:0.026},0).wait(1).to({y:282.7,alpha:0.04},0).wait(1).to({y:282.6,alpha:0.059},0).wait(1).to({y:282.3,alpha:0.084},0).wait(1).to({y:282.1,alpha:0.117},0).wait(1).to({y:281.7,alpha:0.163},0).wait(1).to({y:281.2,alpha:0.225},0).wait(1).to({y:280.4,alpha:0.312},0).wait(1).to({y:279.5,alpha:0.421},0).wait(1).to({y:278.6,alpha:0.532},0).wait(1).to({y:277.8,alpha:0.624},0).wait(1).to({y:277.2,alpha:0.695},0).wait(1).to({y:276.7,alpha:0.75},0).wait(1).to({y:276.4,alpha:0.795},0).wait(1).to({y:276.1,alpha:0.831},0).wait(1).to({y:275.8,alpha:0.86},0).wait(1).to({y:275.6,alpha:0.885},0).wait(1).to({y:275.4,alpha:0.906},0).wait(1).to({y:275.3,alpha:0.924},0).wait(1).to({y:275.2,alpha:0.939},0).wait(1).to({y:275.1,alpha:0.952},0).wait(1).to({y:275,alpha:0.962},0).wait(1).to({y:274.9,alpha:0.971},0).wait(1).to({y:274.8,alpha:0.979},0).wait(1).to({alpha:0.985},0).wait(1).to({y:274.7,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:80,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regY:20.6,y:206.8,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:206.7,alpha:0.008},0).wait(1).to({y:206.6,alpha:0.015},0).wait(1).to({y:206.5,alpha:0.026},0).wait(1).to({y:206.3,alpha:0.04},0).wait(1).to({y:206.1,alpha:0.059},0).wait(1).to({y:205.8,alpha:0.084},0).wait(1).to({y:205.4,alpha:0.117},0).wait(1).to({y:204.8,alpha:0.163},0).wait(1).to({y:204.1,alpha:0.225},0).wait(1).to({y:203.1,alpha:0.312},0).wait(1).to({y:201.7,alpha:0.421},0).wait(1).to({y:200.4,alpha:0.532},0).wait(1).to({y:199.3,alpha:0.624},0).wait(1).to({y:198.5,alpha:0.695},0).wait(1).to({y:197.8,alpha:0.75},0).wait(1).to({y:197.3,alpha:0.795},0).wait(1).to({y:196.8,alpha:0.831},0).wait(1).to({y:196.5,alpha:0.86},0).wait(1).to({y:196.2,alpha:0.885},0).wait(1).to({y:195.9,alpha:0.906},0).wait(1).to({y:195.7,alpha:0.924},0).wait(1).to({y:195.5,alpha:0.939},0).wait(1).to({y:195.4,alpha:0.952},0).wait(1).to({y:195.3,alpha:0.962},0).wait(1).to({y:195.1,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:195,alpha:0.985},0).wait(1).to({y:194.9,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:194.8,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regY:8,y:182.2},0).wait(78).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:80.1,y:184.6,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:80,y:182.2,alpha:1},5).wait(79));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.1,192.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:120.8,regY:63.8,x:80.5,y:204.2},0).wait(1).to({y:204.1,alpha:0.002},0).wait(1).to({alpha:0.004},0).wait(1).to({y:204,alpha:0.007},0).wait(1).to({y:203.8,alpha:0.011},0).wait(1).to({y:203.6,alpha:0.016},0).wait(1).to({y:203.4,alpha:0.023},0).wait(1).to({y:203,alpha:0.032},0).wait(1).to({y:202.7,alpha:0.043},0).wait(1).to({y:202.2,alpha:0.056},0).wait(1).to({y:201.6,alpha:0.071},0).wait(1).to({y:200.9,alpha:0.091},0).wait(1).to({y:200.1,alpha:0.114},0).wait(1).to({y:199,alpha:0.143},0).wait(1).to({y:197.8,alpha:0.179},0).wait(1).to({y:196.1,alpha:0.224},0).wait(1).to({y:194.1,alpha:0.28},0).wait(1).to({y:191.7,alpha:0.348},0).wait(1).to({y:188.9,alpha:0.425},0).wait(1).to({y:186.1,alpha:0.503},0).wait(1).to({y:183.6,alpha:0.572},0).wait(1).to({y:181.5,alpha:0.631},0).wait(1).to({y:179.7,alpha:0.681},0).wait(1).to({y:178.2,alpha:0.723},0).wait(1).to({y:176.9,alpha:0.758},0).wait(1).to({y:175.8,alpha:0.788},0).wait(1).to({y:174.9,alpha:0.814},0).wait(1).to({y:174.1,alpha:0.837},0).wait(1).to({y:173.3,alpha:0.858},0).wait(1).to({y:172.7,alpha:0.875},0).wait(1).to({y:172.1,alpha:0.891},0).wait(1).to({y:171.6,alpha:0.905},0).wait(1).to({y:171.2,alpha:0.918},0).wait(1).to({y:170.7,alpha:0.929},0).wait(1).to({y:170.4,alpha:0.939},0).wait(1).to({y:170.1,alpha:0.948},0).wait(1).to({y:169.8,alpha:0.956},0).wait(1).to({y:169.5,alpha:0.963},0).wait(1).to({y:169.3,alpha:0.969},0).wait(1).to({y:169.1,alpha:0.975},0).wait(1).to({y:168.9,alpha:0.98},0).wait(1).to({y:168.8,alpha:0.984},0).wait(1).to({y:168.6,alpha:0.988},0).wait(1).to({y:168.5,alpha:0.991},0).wait(1).to({y:168.4,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:168.3,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({y:168.2,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:120.4,regY:52,x:80.1,y:156.4},0).wait(35).to({regX:120.8,regY:63.8,x:80.5,y:168},0).wait(1).to({y:167.5},0).wait(1).to({y:166.4},0).wait(1).to({y:164.6},0).wait(1).to({y:161.7},0).wait(1).to({y:157.1},0).wait(1).to({y:149.6},0).wait(1).to({y:137.3},0).wait(1).to({y:123.6},0).wait(1).to({y:113.6},0).wait(1).to({y:106.9},0).wait(1).to({y:102.2},0).wait(1).to({y:98.7},0).wait(1).to({y:96},0).wait(1).to({y:94},0).wait(1).to({y:92.4},0).wait(1).to({y:91.2},0).wait(1).to({y:90.4},0).wait(1).to({y:89.7},0).wait(1).to({y:89.3},0).wait(1).to({y:89.1},0).wait(1).to({regX:120.4,regY:52,x:80.1,y:77.2},0).wait(181));

	// img
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80,300.1,0.567,0.567,0,0,0,299.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:300,scaleX:0.5,scaleY:0.5,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.9,259.9,181.5,680.4);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lb_book.jpg", id:"lb_book"}
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