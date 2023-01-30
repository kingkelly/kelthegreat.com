(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.db_glow = function() {
	this.initialize(img.db_glow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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
	this.shape.setTransform(121.1,113.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-22.5,31.6,287.3,163.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(177.9,107.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAzQgQgUgBgfQAAgdARgVQATgWAcAAQAdAAAQARQANAQgBAaIAAAIIhbAAQgBA/AvAAQAOAAAJgHQAIgGAIgOIAJAGQgHAQgPAKQgQAKgTAAQggAAgSgWgAgWgxQgJAMgBAVIA/gBQAAgtgdAAQgOAAgKANg");
	this.shape_1.setTransform(167.3,102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJBEQAAgOALgJQAKgKAWAAIAAgCQgbgJAAgSQAAgPAYgJIAAgCQgggOAAgaQAAgUAQgMQAQgMAWAAQAUAAAUAJQAOgJAQAAQAHAAADAEQAFAEAAAHQAAAOgNAAQgNAAAAgSQgLAAgHAGIAAAAQALANAAAQQAAATgQANQgPAMgSAAIgSAAQgLADAAAJQAAAJALADQAFACAQAAIAiACQAOABALAKQANAMAAASQgBAWgSAOQgUAOgjAAQhCAAAAglgAgpAxQgGAHgBANQABAKAJAHQANAJAWAAQAuAAAAgiQAAgQgPgFQgQgCgeAAQgQADgHAIgAgkg8QAAAQAGAKQAIAKALAAQALAAAHgLQAGgJAAgPQAAgjgZAAQgYAAAAAig");
	this.shape_2.setTransform(152.7,105.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKBHIAAgJIAOgCQAIgCAAgLIAAhEQAAgPgIgJQgHgIgKAAQgNAAgMAIQgIAFgEAIIAABNQAAAKAJAEQAGACAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgLIAAhTQgBgLgHgFQgFgDgKgBIAAgJIAwgDIACACIAAAUIABAAQANgMAGgEQAMgIARAAQApAAAAAvIAABFQAAAJAHAEQAGADAIAAIAAAJg");
	this.shape_3.setTransform(135.9,101.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BAQgKgJAAgPQAAgdAdgLIAcgJIAXgKIAAgNQAAgKgEgHQgHgNgOAAQgNAAgHAHQADAMAAAGQAAAGgFAEQgFAEgIAAQgNAAAAgQQAAgNAQgLQAPgJASAAQAZAAALAIQAPAKAAAbIgBBFQAAAEADAFQADAFAHABQAKgBABgWIAJAAQgCAmgfAAQgTABgHgVIgBAAQgRAVgbAAQgQAAgJgJgAgZAIQgPAKAAARQAAAWAVABQARAAAMgQIABgxQgZAHgLAIg");
	this.shape_4.setTransform(120.3,102);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMBwIAAgJIAPgCQAIgCAAgLIAAhGQAAgOgIgJQgHgHgKAAQgOAAgLAHQgIAFgEAIIAABOQAAAKAIADQAHADAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgLIAAilQgBgNgHgFQgFgDgPgBIAAgJIA1gDIACADIAABnIABAAQANgNAGgDQAMgIARAAQAoAAAAAuIAABGQAAAJAIADQAGADAHABIAAAJg");
	this.shape_5.setTransform(103.1,97.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA0QgQgTAAghQAAgdASgVQAUgWAdAAQAXAAANAKQAMALAAAOQAAAUgRgBQgGAAgEgCQgGgEAAgIQAAgIACgEIACgGQgCgMgRAAQgPAAgKAOQgMAQAAAfQAAAaAMAQQAMARASAAQAZAAARgaIAJAFQgJAQgPAJQgQALgSAAQgfAAgSgVg");
	this.shape_6.setTransform(88.5,102);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BAQgKgJAAgPQAAgdAdgLIAcgJIAXgKIAAgNQAAgKgEgHQgHgNgOAAQgNAAgHAHQADAMAAAGQAAAGgFAEQgFAEgIAAQgNAAAAgQQAAgNAQgLQAPgJASAAQAZAAALAIQAPAKAAAbIgBBFQAAAEADAFQADAFAHABQAKgBABgWIAJAAQgCAmgfAAQgTABgHgVIgBAAQgRAVgbAAQgQAAgJgJgAgZAIQgPAKAAARQAAAWAVABQARAAAMgQIABgxQgZAHgLAIg");
	this.shape_7.setTransform(67.3,102);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BHIAAgJIAMgCQAJgCgBgLIAAhTQAAgLgIgFQgFgDgJgBIAAgJIAwgEIABACIAAAVIABAAQASgYAWAAQAHAAAGAGQAHAFAAAJQgBAIgEAHQgFAFgIAAQgPAAAAgOIADgJQgLgBgKAIQgGAGgEAHIAABOQAAAKAIADQAGADANABIAAAJg");
	this.shape_8.setTransform(193.3,66.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwA2QgUgVAAggQAAggATgVQATgUAfAAQAfAAATAUQASAUAAAfQAAAfgSAVQgTAWggAAQgcAAgUgTgAgegqQgIAQAAAZQAAAcAJARQAKATAUAAQASAAAKgTQAKgRAAgbQAAgagJgRQgKgTgTAAQgVAAgKAUg");
	this.shape_9.setTransform(179,67);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BwIAAgJIANgCQAJgCAAgLIAAhkIgeAAIAAgNIAeAAIAAgGQAAgoAUgWQAQgSAbAAQAQAAAIAIQAIAIAAAKQAAAGgEAEQgFAGgHAAQgHAAgFgDQgFgEgBgGIACgRQgCgCgFAAQgOAAgIANQgFAOgCAiIAAAPIAkAAIAAANIgkAAIAABiQAAAKAHADQAGADANABIAAAJg");
	this.shape_10.setTransform(167.9,62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJBEQAAgOAKgJQALgKAXAAIAAgCQgcgJAAgSQAAgPAXgJIAAgCQgegOAAgaQgBgUARgMQAOgMAYAAQATAAAUAJQAPgJAQAAQAGAAAEAEQAEAEAAAHQAAAOgMAAQgNAAAAgSQgMAAgHAGIAAAAQALANAAAQQAAATgQANQgPAMgTAAIgRAAQgLADAAAJQAAAJALADQAFACARAAIAgACQAPABALAKQANAMAAASQAAAWgSAOQgVAOgkAAQhBAAAAglgAgpAxQgGAHAAANQgBAKALAHQAMAJAXAAQAtAAAAgiQAAgQgQgFQgPgCgeAAQgQADgHAIgAgkg8QAAAQAHAKQAGAKAMAAQAMAAAGgLQAHgJAAgPQAAgjgZAAQgZAAAAAig");
	this.shape_11.setTransform(146.9,70.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKBHIAAgJIAOgCQAIgCAAgLIAAhEQAAgPgIgJQgHgIgKAAQgNAAgMAIQgIAFgEAIIAABNQAAAKAJAEQAGACAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgLIAAhTQgBgLgHgFQgFgDgKgBIAAgJIAwgDIACACIAAAUIABAAQANgMAGgEQAMgIARAAQApAAAAAvIAABFQAAAJAHAEQAGADAIAAIAAAJg");
	this.shape_12.setTransform(130.1,66.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggBrIAAgJIANgBQAJgDAAgLIAAhTQgBgKgIgFQgGgEgLAAIAAgJIAygEIACACIAABvQAAALAIADQAHADAGAAIAAAJgAgMhLQgGgFAAgIQAAgHAGgGQAFgFAHgBQAIAAAFAGQAGAEAAAIQAAAIgGAGQgFAGgIgBQgHABgFgGg");
	this.shape_13.setTransform(116.8,63.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeBwIAAgJIANgCQAIgCAAgLIAAikQgBgMgHgFQgGgFgPgBIAAgJIA2gDIACACIAADDQAAAKAIADQAGADAHABIAAAJg");
	this.shape_14.setTransform(107.9,62.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeBwIAAgJIANgCQAIgCAAgLIAAikQgBgMgHgFQgGgFgPgBIAAgJIA2gDIACACIAADDQAAAKAIADQAGADAHABIAAAJg");
	this.shape_15.setTransform(99.4,62.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgwA2QgUgVAAggQAAggATgVQATgUAfAAQAfAAATAUQASAUAAAfQAAAfgSAVQgTAWggAAQgcAAgUgTgAgegqQgIAQAAAZQAAAcAJARQAKATAUAAQASAAAKgTQAKgRAAgbQAAgagJgRQgKgTgTAAQgVAAgKAUg");
	this.shape_16.setTransform(87.6,67);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1BHIAAgJIAOgCQAHgCABgLIAAhTQgCgLgGgFQgGgDgKgBIAAgJIAwgEIADACIAAAVIABAAQARgYAVAAQAIAAAHAGQAFAFAAAJQABAIgFAHQgFAFgHAAQgQAAABgOIABgJQgKgBgJAIQgHAGgDAHIAABOQgBAKAIADQAGADAOABIAAAJg");
	this.shape_17.setTransform(74.1,66.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtA0QgQgUAAggQAAgdASgVQAUgWAdAAQAXAAANAKQAMAKAAAPQAAAUgRgBQgGAAgEgDQgGgEAAgHQAAgIACgEIACgGQgCgMgRAAQgPAAgKAOQgMAQAAAfQAAAZAMARQAMARASAAQAZAAARgaIAJAGQgJAPgPAJQgQALgSAAQgfAAgSgVg");
	this.shape_18.setTransform(61.4,67);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBFQgKgDgEgFIgDAKIgKAAIgCgwIAKAAQADAOAKAMQANAOAPAAQAcAAAAgYQAAgLgJgGQgHgGgSgFQgpgMAAgeQAAgSAMgLQANgMAVAAQASAAAMAIIACgJIAKAAIACAsIgKAAQgCgOgJgIQgKgLgOAAQgYABAAATQAAALAJAHQAFADAUAIQAVAGAJAJQAMAKAAASQAAAUgPAMQgOAMgWAAQgKgBgLgEg");
	this.shape_19.setTransform(48,67);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghBsQgKgGAAgNQgBgGAGgTIAqiIQAEgNABgHQAAgIgMgCIgSgBIAAgGIBCgDIg7C3QgGASAAAGQAAAKALABQARgBAPgoIAGADQgKAWgHAKQgLANgOAAQgMAAgIgFg");
	this.shape_20.setTransform(170.2,28);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4A8QgKgJAAgOQAAgHAGgPIARgrQAGgQAAgJQAAgKgIAAQgKAAgIAKQgHAJgIAVIgFgCQAJgXAIgJQAKgNAPAAQALAAAJAFQAKAHAAALQAAAIgHARIgSAuQgFAPAAAHQAAAPAOAAQAMAAAMgKQAKgJAHgNIAfhfIAbAAIgfBeQgFAQAAAGQAAANAKAAQAKAAAIgLQAGgJAIgUIAGACQgJAXgIAJQgLANgPAAQgcAAAAgcIgBAAQgTAdgYAAQgPAAgKgLg");
	this.shape_21.setTransform(156,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhxB7QAAgGADgEQAFgGAHAAQAHAAAEAEQAFADAAAIQABAFgHAJQABAFAFAAQAQAAAMgQQALgOAKgiQAGgTAbhpIgfAAIADgJIAeAAIAEgMQAKgnAZgWQARgRAZAAQAOAAAJAJQAIAGAAALQAAAEgEAFQgEAGgIgBQgFAAgFgDQgGgDAAgGQAAgFAEgMQgCgFgFAAQgcAAgRA/IgGAVIAmAAIgDAJIgmAAIgdB0QgNAqgYATQgUARgWAAQgeAAAAgYg");
	this.shape_22.setTransform(142.5,31.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhVBCQAAgdAWgeQAagjAlAAQATAAAIATIABAAIATg/QAEgOAAgGQAAgJgNgBIgUgBIAAgGIBEgDIg6C3QgFAQAAAGQAAAMAKAAQAKAAAIgKQAGgJAJgVIAGACQgJAXgJAKQgLANgOAAQgbAAAAgcIgBAAQgUAcgYAAQgqAAAAgvgAgpALQgQAfAAAeQAAAfASAAQAZAAAQgdIAWhJQgHgXgTAAQgWAAgRAhg");
	this.shape_23.setTransform(130.3,28);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAVBCQgLgHAAgMQgBgHAHgSIASguQAFgOAAgIQAAgOgOAAQgMAAgMALQgLAKgHAQIgfBaIgbAAIAhheQAFgSAAgHQABgKgJAAQgKAAgIAKQgHAJgHAVIgHgCQAKgXAIgKQAKgNAPAAQAbAAAAAcIACAAQATgcAXAAQAOAAALAKQAJAKAAAOQAAAHgGAPIgRArQgGASAAAGQAAAKALABQASgBAPgoIAFADQgJAWgIAKQgLANgPAAQgMAAgIgFg");
	this.shape_24.setTransform(112.2,32.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTBnQgLgHAAgMQAAgJAGgQIAUgyQAGgRAAgGQAAgLgJAAQgKAAgIAKQgGAJgIAUIgGgCQAJgXAIgJQALgNAPAAQAKAAAIAHQALAGAAANQAAAHgKAWIgRAsQgGASAAAGQAAALAKAAQAKAAAIgLQAHgJAIgVIAGADQgJAWgJAKQgKANgPAAQgLAAgIgFgAAMhWQAAgIAGgHQAFgGAJAAQAHAAAEAFQADAFAAAGQAAAKgFAFQgFAHgJAAQgPAAAAgRg");
	this.shape_25.setTransform(98.2,28.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AA8BCQgMgHAAgMQABgGAGgTIASguQAGgOgBgIQAAgOgPAAQgTAAgTAcIgfBjIgcAAIAfheQAEgLAAgIQgBgOgPAAQgLAAgNAMQgKAKgIAPIgeBaIgbAAIAhheQAFgSAAgHQAAgKgIAAQgKAAgIAKQgHAJgHAVIgHgCQAKgXAIgKQAKgNAPAAQAbAAABAcIABAAQAUgcAXAAQANAAAKAJQAJAIAAALIACAAQAVgcAUAAQAPAAAKAKQALAKAAAOQAAAHgGAPIgQArQgHASAAAGQAAAKALABQARgBAQgoIAFADQgIAWgJAKQgLANgOAAQgMAAgJgFg");
	this.shape_26.setTransform(80.3,32.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgtAzQgRgUAAgfQABgdAQgVQATgWAcAAQAdAAAPARQANAQABAaIAAAIIhdAAQAAA/AvAAQAOAAAJgHQAIgGAIgOIAJAGQgHAQgPAKQgQAKgTAAQggAAgSgWgAgWgyQgJAOgCAUIBAAAQgBgugdAAQgNAAgKAMg");
	this.shape_27.setTransform(189.6,-3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA2BHIAAgJIANgCQAIgCAAgLIAAhFQAAgPgHgIQgHgIgKAAQgZAAgLAVIAABNQAAAKAHAEQAGADAIAAIAAAJIhEAAIAAgJIAMgCQAIgCAAgLIAAhFQAAgPgHgIQgHgIgKAAQgZAAgMAVIAABNQAAAKAIAEQAGADAIAAIAAAJIhGAAIAAgJIANgCQAIgCAAgLIAAhUQgBgJgHgFQgGgEgKgBIAAgJIAxgDIACACIAAAVIABAAQANgOAFgDQANgIARAAQAbAAALAaQAOgOAGgEQANgIAQAAQAoAAAAAxIAABCQAAAKAIAEQAGACAIABIAAAJg");
	this.shape_28.setTransform(169.2,-3.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgwA2QgUgVAAggQAAggATgVQAUgUAeAAQAeAAAUAUQASAUAAAfQAAAfgSAVQgUAWggAAQgbAAgUgTgAgegqQgIAQAAAZQAAAcAJARQAKATAUAAQASAAALgTQAJgRAAgbQAAgagIgRQgLgTgTAAQgVAAgKAUg");
	this.shape_29.setTransform(148.1,-3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVBFQgKgDgEgFIgDAKIgKAAIgCgxIAKAAQADAOAKAMQANAPAPAAQAcAAAAgYQAAgLgJgHQgHgFgSgFQgpgMAAgfQAAgRAMgLQANgMAVAAQASAAAMAIIACgJIAKAAIACAsIgKAAQgCgOgJgIQgKgKgOAAQgYAAAAATQAAALAJAHQAFADAUAHQAVAHAJAJQAMALAAARQAAAUgPAMQgOAMgWAAQgKAAgLgFg");
	this.shape_30.setTransform(134,-3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhCBjQgHgGAAgKQgBgHAFgFQAFgGAHAAQAQAAAAAPIAAAIQATgEARgxIgvhxQgFgNgRgCIAAgJIBCAAIAAAJQgRABABAGIACAGIAfBQIABAAIAehKIABgJQAAgEgHgDQgHgDgFAAIAAgJIA1AAIAAAIQgFABgGAFQgJAFgCAGIghBOIgQAnQgSAqgMAMQgJAJgRAAQgHAAgHgEg");
	this.shape_31.setTransform(113.7,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgwA2QgUgVAAggQAAggATgVQAUgUAeAAQAeAAAUAUQASAUAAAfQAAAfgSAVQgUAWggAAQgbAAgUgTgAgegqQgIAQAAAZQAAAcAJARQALATATAAQASAAALgTQAJgRAAgbQAAgagJgRQgKgTgTAAQgVAAgKAUg");
	this.shape_32.setTransform(98.7,-3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AglCHQgIgGAAgKQABgGAEgFQAFgFAIAAQAQAAABAOQgBAHgCAGIAGACQANgBAFgOQAFgOAAgiIAAhmQgBgKgHgFQgGgFgSgBIAAgJIA6gDIABACIAAB9QAAAqgSAUQgSASgUABQgPgBgJgGgAAOhtQgGgGAAgGQAAgJAGgFQAFgGAHAAQAJABAFAEQAGAFgBAIQABAIgGAGQgFAGgJAAQgHAAgFgGg");
	this.shape_33.setTransform(83.9,-3.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAKBHIAAgJIAOgCQAIgCAAgLIAAhEQAAgPgIgJQgHgIgKAAQgNAAgMAIQgIAFgEAIIAABNQAAAKAJAEQAGACAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgLIAAhTQgBgLgHgFQgFgDgKgBIAAgJIAwgDIACACIAAAUIABAAQANgMAGgEQAMgIARAAQApAAAAAvIAABFQAAAJAHAEQAGADAIAAIAAAJg");
	this.shape_34.setTransform(73.2,-3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhaBmIAAgKQASgBAGgBQAJgEAAgMIAAiRQAAgLgJgFQgKgDgOgBIAAgKIClAAIAAAxIgLAAQgDgLgKgMQgKgNgKgBIgYgBIggAAIAABSIAYAAQAPAAAJgJQAIgIACgTIALAAIAABTIgLAAQgBgHgDgIQgDgKgDgDQgIgJgQAAIgYAAIAAA+QAAARAHAGQAGAEAWAAQAoAAAGgHQAGgGAJgPQAHgNACgIIALAAIgEA8g");
	this.shape_35.setTransform(54.5,-6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,-21,240.8,139), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_glow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,1200), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#296418").s().p("AgVATIAGgGQACADAGADQAEACADAAQALAAAAgIQAAgEgFgDIgCgBIgFgCIgIgDQgIgDgBgKQAAgHAGgEQAFgFAIAAQAMAAAHAIIgFAHQgFgGgJAAQgIAAAAAHQAAAFAKADIAIADQAEACACABQAFAEAAAHQAAAIgGAFQgGAFgKAAQgOAAgHgLg");
	this.shape.setTransform(94.1,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#296418").s().p("AAMApIgTgbIgGAGIAAAVIgMAAIAAhRIAMAAIAAAvIAWgVIAOAAIgXAUIAaAjg");
	this.shape_1.setTransform(88.4,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#296418").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgIQAAgIgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_2.setTransform(80.7,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#296418").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAFgGQAGgGAAgIQAAgIgGgGQgFgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(73.1,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#296418").s().p("AgbApIAAhRIAWAAQANAAAGADQAJAGAAALQAAAHgEAFQgDAFgGABIAAABQASADAAAQQAAALgIAHQgHAFgNAAgAgQAgIANAAQAJAAAEgDQAGgEAAgIQAAgGgGgFQgEgDgJAAIgNAAgAgQgFIAKAAQAIAAAEgCQAFgFAAgGQAAgIgFgDQgEgCgHAAIgLAAg");
	this.shape_4.setTransform(65.5,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#296418").s().p("AgTAVQgIgIAAgNQAAgNAJgIQAIgIALAAQAMAAAHAIQAIAHAAAMIAAAEIgsAAQABAJAFAFQAFAFAHAAQAHAAAGgDIAGgEIAFAHIgBAAQgJAJgPAAQgMAAgIgJgAARgEQAAgGgFgFQgEgGgHAAQgHAAgEAGQgFAFAAAGIAgAAIAAAAg");
	this.shape_5.setTransform(57.9,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#296418").s().p("AgZApIAAhRIAYAAQAMgBAHAHQAIAGAAAMQAAAKgIAGQgHAGgMAAIgMAAIAAAjgAgNgDIALAAQAGAAAFgCQAFgFAAgGQAAgIgFgEQgFgDgGAAIgLAAg");
	this.shape_6.setTransform(47.9,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#296418").s().p("AgdAfQgNgMAAgTQAAgSANgMQAMgMARAAQASAAAMAMQANAMAAASQAAATgNAMQgMAMgSAAQgRAAgMgMgAgVgXQgJAJAAAOQAAAOAJAJQAJAJAMAAQANAAAJgJQAJgJAAgOQAAgOgJgJQgJgJgNAAQgMAAgJAJg");
	this.shape_7.setTransform(38.9,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#296418").s().p("AAWApIAAgmIgrAAIAAAmIgMAAIAAhRIAMAAIAAAiIArAAIAAgiIAMAAIAABRg");
	this.shape_8.setTransform(29.1,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#296418").s().p("AgRAlIgKgIIAHgIQAJAMALAAQAHAAAFgEQAEgEAAgGQAAgGgFgEIgFgCIgDgCIgNgFQgFgCgDgDQgFgGAAgJQAAgJAIgGQAGgHAMAAQANAAAKALIgGAIQgIgJgKAAQgFAAgEADQgFADAAAGQABAFADADIAHAEIAOAHQAGABADAEQAGAHAAAHQAAALgJAHQgIAHgLAAQgLAAgGgGg");
	this.shape_9.setTransform(20.8,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AoHCOIAAkbIQPAAIAAEbg");
	this.shape_10.setTransform(57.4,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(5.4,8.8,104,28.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,600,1200), null);


// stage content:
(lib._300x600_mind = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:121.1,regY:113.5,x:151.1,y:287.7,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.008},0).wait(1).to({y:287.6,alpha:0.015},0).wait(1).to({y:287.5,alpha:0.026},0).wait(1).to({y:287.4,alpha:0.04},0).wait(1).to({y:287.3,alpha:0.059},0).wait(1).to({y:287,alpha:0.084},0).wait(1).to({y:286.8,alpha:0.117},0).wait(1).to({y:286.4,alpha:0.163},0).wait(1).to({y:285.9,alpha:0.225},0).wait(1).to({y:285.1,alpha:0.312},0).wait(1).to({y:284.2,alpha:0.421},0).wait(1).to({y:283.3,alpha:0.532},0).wait(1).to({y:282.5,alpha:0.624},0).wait(1).to({y:281.9,alpha:0.695},0).wait(1).to({y:281.4,alpha:0.75},0).wait(1).to({y:281.1,alpha:0.795},0).wait(1).to({y:280.8,alpha:0.831},0).wait(1).to({y:280.5,alpha:0.86},0).wait(1).to({y:280.3,alpha:0.885},0).wait(1).to({y:280.1,alpha:0.906},0).wait(1).to({y:280,alpha:0.924},0).wait(1).to({y:279.9,alpha:0.939},0).wait(1).to({y:279.8,alpha:0.952},0).wait(1).to({y:279.7,alpha:0.962},0).wait(1).to({y:279.6,alpha:0.971},0).wait(1).to({y:279.5,alpha:0.979},0).wait(1).to({alpha:0.985},0).wait(1).to({y:279.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:150,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regY:23,y:209.2,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:209.1,alpha:0.008},0).wait(1).to({y:209,alpha:0.015},0).wait(1).to({y:208.9,alpha:0.026},0).wait(1).to({y:208.7,alpha:0.04},0).wait(1).to({y:208.5,alpha:0.059},0).wait(1).to({y:208.2,alpha:0.084},0).wait(1).to({y:207.8,alpha:0.117},0).wait(1).to({y:207.2,alpha:0.163},0).wait(1).to({y:206.5,alpha:0.225},0).wait(1).to({y:205.5,alpha:0.312},0).wait(1).to({y:204.1,alpha:0.421},0).wait(1).to({y:202.8,alpha:0.532},0).wait(1).to({y:201.7,alpha:0.624},0).wait(1).to({y:200.9,alpha:0.695},0).wait(1).to({y:200.2,alpha:0.75},0).wait(1).to({y:199.7,alpha:0.795},0).wait(1).to({y:199.2,alpha:0.831},0).wait(1).to({y:198.9,alpha:0.86},0).wait(1).to({y:198.6,alpha:0.885},0).wait(1).to({y:198.3,alpha:0.906},0).wait(1).to({y:198.1,alpha:0.924},0).wait(1).to({y:197.9,alpha:0.939},0).wait(1).to({y:197.8,alpha:0.952},0).wait(1).to({y:197.7,alpha:0.962},0).wait(1).to({y:197.5,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:197.4,alpha:0.985},0).wait(1).to({y:197.3,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:197.2,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regY:8,y:182.2},0).wait(22).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:150.1,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:150,alpha:1},5).wait(135));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,192.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:120.9,regY:49,x:150.6,y:189.4},0).wait(1).to({y:189.3,alpha:0.002},0).wait(1).to({alpha:0.004},0).wait(1).to({y:189.2,alpha:0.007},0).wait(1).to({y:189,alpha:0.011},0).wait(1).to({y:188.8,alpha:0.016},0).wait(1).to({y:188.6,alpha:0.023},0).wait(1).to({y:188.2,alpha:0.032},0).wait(1).to({y:187.9,alpha:0.043},0).wait(1).to({y:187.4,alpha:0.056},0).wait(1).to({y:186.8,alpha:0.071},0).wait(1).to({y:186.1,alpha:0.091},0).wait(1).to({y:185.3,alpha:0.114},0).wait(1).to({y:184.2,alpha:0.143},0).wait(1).to({y:183,alpha:0.179},0).wait(1).to({y:181.3,alpha:0.224},0).wait(1).to({y:179.3,alpha:0.28},0).wait(1).to({y:176.9,alpha:0.348},0).wait(1).to({y:174.1,alpha:0.425},0).wait(1).to({y:171.3,alpha:0.503},0).wait(1).to({y:168.8,alpha:0.572},0).wait(1).to({y:166.7,alpha:0.631},0).wait(1).to({y:164.9,alpha:0.681},0).wait(1).to({y:163.4,alpha:0.723},0).wait(1).to({y:162.1,alpha:0.758},0).wait(1).to({y:161,alpha:0.788},0).wait(1).to({y:160.1,alpha:0.814},0).wait(1).to({y:159.3,alpha:0.837},0).wait(1).to({y:158.5,alpha:0.858},0).wait(1).to({y:157.9,alpha:0.875},0).wait(1).to({y:157.3,alpha:0.891},0).wait(1).to({y:156.8,alpha:0.905},0).wait(1).to({y:156.4,alpha:0.918},0).wait(1).to({y:155.9,alpha:0.929},0).wait(1).to({y:155.6,alpha:0.939},0).wait(1).to({y:155.3,alpha:0.948},0).wait(1).to({y:155,alpha:0.956},0).wait(1).to({y:154.7,alpha:0.963},0).wait(1).to({y:154.5,alpha:0.969},0).wait(1).to({y:154.3,alpha:0.975},0).wait(1).to({y:154.1,alpha:0.98},0).wait(1).to({y:154,alpha:0.984},0).wait(1).to({y:153.8,alpha:0.988},0).wait(1).to({y:153.7,alpha:0.991},0).wait(1).to({y:153.6,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:153.5,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({y:153.4,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:156.4},0).wait(35).to({regX:120.9,regY:49,x:150.6,y:153.3},0).wait(1).to({y:152.8},0).wait(1).to({y:152},0).wait(1).to({y:150.6},0).wait(1).to({y:148.5},0).wait(1).to({y:145},0).wait(1).to({y:139.3},0).wait(1).to({y:130},0).wait(1).to({y:119.6},0).wait(1).to({y:112.1},0).wait(1).to({y:107},0).wait(1).to({y:103.4},0).wait(1).to({y:100.7},0).wait(1).to({y:98.7},0).wait(1).to({y:97.2},0).wait(1).to({y:96},0).wait(1).to({y:95.1},0).wait(1).to({y:94.4},0).wait(1).to({y:93.9},0).wait(1).to({y:93.6},0).wait(1).to({y:93.5},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:96.4},0).wait(181));

	// img
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,300.1,0.567,0.567,0,0,0,299.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:300,scaleX:0.5,scaleY:0.5,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130,259.9,340.2,680.4);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_glow.jpg", id:"db_glow"}
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