(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box_book = function() {
	this.initialize(img.box_book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

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
	this.shape.setTransform(-20.8,-35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-115.1,-89.6,188.5,107.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(91.2,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAmQgMgPAAgXQAAgVAMgPQAOgQAVAAQAVAAALAMQAKAMAAASIAAAGIhDAAQAAAuAhAAQAKAAAIgEQAFgFAGgKIAHAEQgGAMgLAHQgLAIgPgBQgXAAgNgPgAgPgkQgIAKAAAOIAtAAQAAghgUAAQgLAAgGAJg");
	this.shape_1.setTransform(83.5,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1AxQAAgKAHgGQAJgHAQAAIAAgCQgVgGAAgNQAAgLARgHIAAgBQgWgKAAgTQAAgPAMgKQALgIAQAAQAPAAAOAHQALgHAMAAQAEAAADADQADADAAAFQAAALgJgBQgKAAAAgNQgIAAgFAEIAAABQAIAJAAAMQAAAOgMAJQgLAJgNAAIgNAAQgHADAAAGQAAAHAHABIAQACIAYACQAKAAAJAIQAJAJAAAMQAAARgOAJQgOALgaAAQgwAAAAgcgAgeAkQgFAFAAAJQAAAIAIAGQAIAFARAAQAhAAAAgYQAAgMgLgDQgLgCgWAAQgMACgFAGgAgagrQAAALAFAHQAFAIAIAAQAIAAAFgIQAFgHAAgKQAAgagSAAQgSAAAAAZg");
	this.shape_2.setTransform(72.7,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHA0IAAgHIAKgBQAHgCAAgIIAAgxQgBgLgFgHQgGgGgHAAQgKAAgHAGQgHAEgCAGIAAA4QAAAHAFADQAFACAGAAIAAAHIg0AAIAAgHIAKgBQAFgCAAgIIAAg8QAAgIgFgEQgEgCgHgBIAAgGIAjgDIACACIAAAPIAAAAQAJgKAFgCQAIgGANAAQAdAAAAAjIAAAyQAAAHAHACQAEACAFAAIAAAHg");
	this.shape_3.setTransform(60.5,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsAvQgGgGAAgLQAAgWAVgIIAUgGQALgFAGgCIAAgKQAAgIgDgFQgEgJgMAAQgJAAgEAFIACANQgBAFgDACQgEADgGABQgJAAgBgNQABgJAMgIQAKgGAOAAQASgBAIAGQALAHAAAVIgBAyQAAADACADQADAEAEAAQAIAAAAgQIAHAAQgBAcgXAAQgOAAgFgOIgBAAQgLAOgVAAQgLABgIgHgAgTAGQgKAHAAAMQAAARAPAAQAMAAAJgLIABgjQgTAEgIAGg");
	this.shape_4.setTransform(49,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJBSIAAgHIALgBQAFgCAAgIIAAgyQABgLgGgGQgFgGgIAAQgKAAgIAGQgGADgDAGIAAA5QAAAHAHADQAEACAGAAIAAAHIg0AAIAAgHIAJgBQAHgCAAgIIAAh4QgBgKgGgDQgCgDgMAAIAAgHIAngCIABABIAABNIABAAIAOgNQAJgFAMAAQAdAAAAAhIAAAzQABAHAFADQAFACAFAAIAAAHg");
	this.shape_5.setTransform(36.4,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAnQgNgPAAgYQAAgVAOgQQAOgPAWAAQAQAAAKAHQAJAIAAAKQAAAOgMABQgFgBgDgBQgFgDAAgGQAAgFACgEIABgFQgBgIgNAAQgKAAgIAKQgJAMAAAXQAAASAJAMQAJAMAOAAQASAAAMgTIAHAFQgHALgLAHQgMAIgNgBQgWAAgNgOg");
	this.shape_6.setTransform(25.6,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrAvQgIgGAAgLQAAgWAWgIIAUgGQAMgFAFgCIAAgKQAAgIgDgFQgFgJgLAAQgJAAgEAFIABANQAAAFgDACQgEADgFABQgKAAAAgNQAAgJAMgIQALgGANAAQASgBAIAGQALAHAAAVIgBAyQAAADACADQADAEAFAAQAHAAABgQIAGAAQgBAcgWAAQgPAAgFgOIAAAAQgMAOgVAAQgMABgGgHgAgSAGQgLAHAAAMQAAARAPAAQAMAAAJgLIABgjQgSAEgIAGg");
	this.shape_7.setTransform(10.1,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA0IAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgDgDgIAAIAAgHIAjgCIACABIAAAQIAAAAQANgSAQAAQAGAAAFAEQADAFAAAFQABAHgEAEQgDAEgGAAQgLAAAAgKIACgHQgIAAgHAGQgEAEgDAFIAAA5QAAAHAFADQAEACALAAIAAAHg");
	this.shape_8.setTransform(102.5,-23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjAnQgOgPAAgYQAAgXANgPQAPgPAVAAQAXAAAOAPQAOAPAAAXQgBAWgNAQQgOAQgXAAQgVAAgOgPgAgVgfQgHAMAAATQABATAGANQAIAOANAAQAOAAAIgOQAGgMAAgUQAAgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_9.setTransform(92,-23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnBSIAAgHIAKgBQAGgCAAgIIAAhIIgWAAIAAgKIAWAAIAAgFQAAgdAOgQQAMgNAUAAQALAAAHAGQAFAFAAAIQAAAEgDAEQgDAEgGAAQgEAAgEgCQgEgDAAgFIABgMQgCgCgDAAQgLAAgFAKQgEAKgBAZIAAALIAaAAIAAAKIgaAAIAABHQAAAIAFACQAEACAKAAIAAAHg");
	this.shape_10.setTransform(83.8,-26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1AxQAAgKAHgGQAJgHAQAAIAAgCQgVgGAAgNQAAgLARgHIAAgBQgWgLAAgSQAAgPAMgKQALgIAQAAQAPAAAOAHQALgHAMAAQAEAAADADQADAEAAAEQAAALgJAAQgKAAAAgOQgIAAgFAFIAAAAQAIAJAAAMQAAAOgMAJQgLAJgNAAIgNAAQgHACAAAIQAAAFAHADIAQABIAYACQAKAAAJAIQAJAIAAANQAAARgOAJQgOALgaAAQgwAAAAgcgAgeAkQgFAFAAAJQAAAIAIAGQAIAFARAAQAhAAAAgYQAAgMgLgEQgLgBgWAAQgMADgFAFgAgagrQAAALAFAHQAFAIAIAAQAIAAAFgIQAFgHAAgKQAAgbgSAAQgSAAAAAag");
	this.shape_11.setTransform(68.4,-20.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAHA0IAAgHIAKgBQAHgCAAgIIAAgxQgBgLgFgHQgGgGgHAAQgKAAgHAGQgHAEgCAGIAAA4QgBAHAHADQAEACAGAAIAAAHIg0AAIAAgHIAJgBQAGgCABgIIAAg8QgBgIgGgEQgDgCgHgBIAAgGIAjgDIACACIAAAPIAAAAQAKgKAEgCQAJgGAMAAQAdAAAAAjIAAAyQAAAHAHACQAEACAFAAIAAAHg");
	this.shape_12.setTransform(56.2,-23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXBPIAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgFgDgIAAIAAgHIAkgCIACABIAABSQAAAHAGADQAFACAEAAIAAAHgAgJg3QgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_13.setTransform(46.4,-26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgCgLgBIAAgHIAogCIABABIAACPQAAAHAGADQAEACAFAAIAAAHg");
	this.shape_14.setTransform(39.9,-26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgCgLgBIAAgHIAogCIABABIAACPQAAAHAGADQAEACAGAAIAAAHg");
	this.shape_15.setTransform(33.7,-26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAnQgOgPAAgYQAAgXANgPQAPgPAVAAQAXAAAOAPQAOAPAAAXQgBAWgNAQQgOAQgXAAQgVAAgOgPgAgVgfQgHAMAAATQABATAGANQAIAOANAAQAOAAAIgOQAGgMAAgUQAAgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_16.setTransform(25,-23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg9QAAgHgGgEQgEgDgGAAIAAgHIAjgCIABABIAAAQIABAAQANgSAPAAQAGAAAEAEQAFAFAAAFQgBAHgDAEQgEAEgFAAQgLAAAAgKIABgHQgHAAgHAGQgEAEgDAFIAAA5QAAAHAFADQAEACAKAAIAAAHg");
	this.shape_17.setTransform(15.1,-23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggAnQgNgPAAgYQAAgVAOgQQAOgPAWAAQAQAAAKAIQAJAGAAAMQAAAOgMgBQgFAAgDgBQgFgEAAgFQAAgFACgEIABgFQgBgIgNAAQgKAAgIAKQgJAMAAAXQAAASAJAMQAJAMAOAAQASAAAMgTIAHAFQgHALgLAHQgMAIgNAAQgWAAgNgPg");
	this.shape_18.setTransform(5.8,-23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_19.setTransform(-4,-23.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYBQQgIgFAAgJQAAgGAEgNIAfhkQADgJAAgFQAAgGgHgBIgOgBIAAgFIAwgCIgrCHQgEAMAAAFQAAAHAIABQAMgBALgdIAEABQgGASgGAGQgIAKgKAAQgJAAgGgDg");
	this.shape_20.setTransform(85.5,-52.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAtQgHgIAAgKQAAgGAEgKIANgfQAEgMAAgGQAAgIgGAAQgHAAgGAIQgFAGgGAPIgEgBQAHgQAGgIQAHgJALAAQAIAAAGAEQAIAEAAAJQAAAGgFAMIgNAiQgEAKAAAGQAAALALAAQAIAAAJgIQAHgGAFgKIAXhFIAUAAIgXBFQgEAMAAADQAAAKAHAAQAIAAAGgIQAFgGAFgPIAFABQgHARgGAHQgIAKgLAAQgVgBAAgUIAAgBQgOAWgSAAQgKAAgIgHg");
	this.shape_21.setTransform(75.1,-49.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhTBaQAAgEADgEQAEgDAFAAQAEAAAEACQAEADAAAFQAAAEgFAHQABADAEAAQALAAAJgLQAIgKAHgZIAYhbIgXAAIADgHIAWAAIACgJQAIgcASgRQANgMASAAQALAAAGAGQAGAGAAAHQAAADgDAEQgEAEgFAAQgEAAgDgCQgFgDAAgFIADgMQgBgDgDAAQgVAAgNAtIgEAQIAcAAIgDAHIgbAAIgWBUQgJAfgRAOQgQANgPAAQgXAAAAgSg");
	this.shape_22.setTransform(65.1,-49.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag+AxQAAgVAQgXQATgZAbAAQAOAAAFAOIABAAIAPgvQACgKAAgEQABgGgKgCIgPAAIAAgFIAygCIgrCGQgDAMAAAEQAAAJAIAAQAHAAAFgHQAFgHAGgPIAFABQgHARgGAHQgIAKgLAAQgTAAgBgUIgBgBQgOAVgRAAQgfAAAAgigAgdAIQgMAXAAAWQAAAXANAAQASAAALgVIARg2QgGgRgNAAQgPAAgNAYg");
	this.shape_23.setTransform(56.2,-52.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAPAxQgIgFAAgJQAAgGAFgNIANghQAEgLAAgFQAAgLgKAAQgJAAgJAIQgHAIgHALIgVBDIgUAAIAXhGQAFgNAAgFQAAgHgHgBQgHAAgGAIQgEAGgHAQIgEgCQAHgRAGgGQAIgKAKAAQAVAAAAAUIABABQANgVAQAAQALAAAIAHQAHAIAAAJQAAAGgEALIgNAgQgEAMAAAFQgBAHAJABQANgBALgdIAEABQgGASgHAGQgHAKgMAAQgIAAgHgDg");
	this.shape_24.setTransform(43,-49.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOBMQgIgFAAgJQAAgGAEgMIAPgmQAEgMABgEQAAgIgHAAQgHAAgGAHQgFAHgGAOIgEgBQAHgQAGgHQAHgKALAAQAIAAAGAFQAIAFAAAJQgBAFgGAQIgNAhQgEAMAAAFQAAAIAHAAQAIAAAFgIQAGgGAFgPIAFABQgIARgGAHQgHAJgLAAQgIAAgGgDgAAJg/QAAgGAEgEQAEgFAHAAQAEAAADAEQADADAAAFQAAAHgDAEQgFAFgGAAQgLAAAAgNg");
	this.shape_25.setTransform(32.8,-51.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAsAxQgIgFAAgJQAAgFAEgOIANghQAFgLAAgFQAAgLgMAAQgOAAgOAVIgXBJIgUAAIAXhGQACgIAAgFQAAgLgKAAQgJAAgJAJQgIAIgFAKIgWBDIgUAAIAXhGQAFgNAAgFQAAgHgHgBQgHAAgGAIQgEAGgGAQIgFgCQAHgRAGgGQAIgKALAAQAUAAAAAUIABABQAOgVARAAQAKAAAHAGQAGAGABAJIABAAQAPgVAPAAQALAAAIAHQAHAIAAAJQAAAGgEALIgMAgQgFAMAAAFQAAAHAIABQANgBALgdIAFABQgHASgGAGQgIAKgLAAQgJAAgGgDg");
	this.shape_26.setTransform(19.7,-49.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghAlQgMgOAAgXQAAgVAMgPQAOgQAVAAQAVgBALANQAKAMAAATIAAAFIhEAAQABAvAhAAQAKgBAIgFQAFgEAGgKIAHAEQgGAMgLAHQgMAIgOAAQgXgBgNgQgAgQgkQgHAJgBAPIAuAAQABghgVAAQgKAAgIAJg");
	this.shape_27.setTransform(99.8,-75.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAoA0IAAgHIAJgBQAGgCAAgIIAAgyQAAgLgFgGQgFgGgIAAQgRAAgKAPIAAA5QABAIAFACQAEACAGAAIAAAHIgxAAIAAgHIAJgBQAFgCAAgIIAAgyQABgLgGgGQgFgGgIAAQgRAAgKAQIAAA4QAAAHAHADQAEACAGAAIAAAHIg0AAIAAgHIAJgBQAHgCAAgIIAAg9QgBgHgGgDQgDgDgIgBIAAgGIAkgDIABACIAAAPIABAAIAOgMQAJgGAMAAQAUAAAIATQALgLADgCQAKgGAMAAQAeAAAAAkIAAAwQgBAIAGACQAEACAGAAIAAAHg");
	this.shape_28.setTransform(84.9,-75.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgjAnQgOgPAAgYQgBgXAOgPQAOgPAXAAQAWAAAOAPQANAPAAAXQABAWgNAQQgPAQgXAAQgVAAgOgPgAgWgfQgFAMgBATQAAATAHANQAHAOAPAAQANAAAIgOQAGgMABgUQgBgTgGgMQgHgOgOAAQgPAAgIAOg");
	this.shape_29.setTransform(69.3,-75.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_30.setTransform(59,-75.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgwBJQgFgFAAgHQAAgFADgEQADgEAGAAQALAAAAALIAAAGQAOgDANgkIgjhTQgDgJgNgCIAAgHIAxAAIAAAHQgMABAAAEIABAFIAWA6IABAAIAWg2IABgGQABgDgHgDIgIgCIAAgHIAnAAIAAAHQgEABgEADQgHADgBAFIgZA5IgLAdQgMAegKAJQgHAGgMAAQgFAAgFgCg");
	this.shape_31.setTransform(44.2,-72.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgjAnQgPgPAAgYQABgXAOgPQANgPAXAAQAWAAAOAPQANAPAAAXQAAAWgNAQQgOAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQgBATAHANQAHAOAPAAQAOAAAGgOQAIgMgBgUQABgTgHgMQgHgOgOAAQgPAAgIAOg");
	this.shape_32.setTransform(33.2,-75.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbBjQgFgFAAgHQAAgEADgEQAEgDAFAAQAMgBAAALIgBAJIAEABQAJAAAEgKQAEgKAAgaIAAhJQgBgJgFgDQgFgDgMgBIAAgHIAqgCIABABIAABcQAAAegOAPQgNANgPAAQgKAAgHgEgAAKhPQgEgFAAgFQAAgFAEgFQAEgEAFAAQAGABAFADQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_33.setTransform(22.3,-75.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAHA0IAAgHIALgBQAFgCAAgIIAAgxQABgLgGgHQgGgGgHAAQgJAAgJAGQgGAEgDAGIAAA4QAAAHAHADQAEACAGAAIAAAHIg0AAIAAgHIAJgBQAHgCAAgIIAAg8QgBgIgGgEQgDgCgHgBIAAgGIAjgDIABACIAAAPIABAAQAJgKAFgCQAIgGAMAAQAeAAAAAjIAAAyQABAHAFACQAFACAFAAIAAAHg");
	this.shape_34.setTransform(14.5,-75.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhCBLIAAgHQAOgBAEgBQAHgDAAgIIAAhrQAAgIgHgDQgHgDgLgBIAAgHIB5AAIAAAkIgIAAQgDgIgGgIQgIgKgHgBIgSgBIgXAAIAAA8IARAAQALAAAHgHQAFgFACgOIAIAAIAAA9IgIAAIgCgMQgDgHgCgCQgGgGgMAAIgRAAIAAAtQAAANAFADQAFAEAPAAQAdAAAFgFQAFgFAGgLIAHgPIAIAAIgDAsg");
	this.shape_35.setTransform(0.8,-77.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-45,-89,188.1,104), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.box_book();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,500), null);


(lib.cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#296418").s().p("AgPAOIAEgFQACADADACIAGABQAIAAAAgGQAAgDgEgBIgCgBIgCgCIgGgCQgGgCgBgHQAAgFAFgDQADgEAGAAQAIAAAFAGIgDAFQgFgEgFAAQgGAAAAAFQAAADAHADIAGACIAEACQAEADAAAFQAAAGgEADQgFAEgHAAQgKAAgFgIg");
	this.shape.setTransform(12.4,-29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#296418").s().p("AAJAeIgNgUIgFAFIAAAPIgJAAIAAg7IAJAAIAAAiIAQgPIAKAAIgRAOIATAag");
	this.shape_1.setTransform(8.2,-30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#296418").s().p("AgOAQQgHgGAAgKQAAgIAHgGQAFgHAJAAQAKAAAFAHQAHAGAAAIQAAAKgHAGQgFAGgKAAQgJAAgFgGgAgJgKQgDAFAAAFQAAAGADAEQAEAFAFAAQAGAAAEgFQADgEABgGQgBgFgDgFQgEgEgGAAQgFAAgEAEg");
	this.shape_2.setTransform(2.6,-29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#296418").s().p("AgPAQQgGgGAAgKQAAgIAGgGQAHgHAIAAQAKAAAFAHQAHAGAAAIQAAAKgHAGQgFAGgKAAQgIAAgHgGgAgJgKQgDAFgBAFQABAGADAEQAEAFAFAAQAGAAAEgFQAEgEgBgGQABgFgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_3.setTransform(-2.9,-29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#296418").s().p("AgUAeIAAg7IARAAQAJAAAEADQAGAEAAAIQAAAFgCADQgDAEgEABQAOACAAAMQAAAIgHAFQgFAEgJAAgAgLAXIAJAAQAHAAADgCQAEgDAAgFQAAgGgEgDQgEgCgGAAIgJAAgAgLgDIAHAAQAFAAADgCQAEgDAAgFQAAgGgEgCQgDgBgEAAIgIAAg");
	this.shape_4.setTransform(-8.4,-30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#296418").s().p("AgNAQQgGgGAAgKQAAgJAGgGQAGgGAIAAQAJAAAFAGQAFAGAAAIIAAADIgfAAQABAGADAEQAEADAFAAQAEAAAFgCIAEgDIAEAFIgBAAQgGAHgLAAQgJAAgFgGgAANgDQgBgEgDgEQgDgEgFAAQgFAAgDAEQgDAEgBAEIAYAAIAAAAg");
	this.shape_5.setTransform(-14,-29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#296418").s().p("AgSAeIAAg7IARAAQAJAAAFAEQAGAFAAAIQAAAIgGAEQgFAEgJAAIgIAAIAAAagAgJgCIAIAAQAEAAADgCQAEgDAAgFQAAgFgEgDQgDgCgEAAIgIAAg");
	this.shape_6.setTransform(-21.4,-30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#296418").s().p("AgVAWQgJgIAAgOQAAgNAJgJQAJgIAMAAQANAAAJAIQAJAJAAANQAAAOgJAIQgJAJgNAAQgMAAgJgJgAgPgRQgGAHAAAKQAAALAGAGQAHAHAIAAQAKAAAGgHQAHgGAAgLQAAgKgHgHQgGgGgKAAQgIAAgHAGg");
	this.shape_7.setTransform(-27.9,-30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#296418").s().p("AAQAeIAAgcIgfAAIAAAcIgJAAIAAg7IAJAAIAAAZIAfAAIAAgZIAJAAIAAA7g");
	this.shape_8.setTransform(-35,-30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#296418").s().p("AgNAbIgGgGIAFgGQAGAJAIAAQAFAAADgDQAEgCAAgGQAAgEgEgCIgDgCIgDgBIgJgEIgGgEQgEgEAAgGQAAgHAGgFQAFgEAIAAQAKAAAHAHIgEAGQgHgGgHAAQgDAAgDACQgDACAAAEQAAAFACACIAGACIAKAFQAEABADADQADAEAAAGQAAAIgGAGQgGAEgIAAQgHAAgGgEg");
	this.shape_9.setTransform(-41.1,-30.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Al6BoIAAjPIL1AAIAADPg");
	this.shape_10.setTransform(-14.4,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-52.3,-41.3,75.8,20.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,600,500), null);


// stage content:
(lib._300x250_mind = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:-20.8,regY:-35.9,x:80.1,y:213,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.008},0).wait(1).to({y:212.9,alpha:0.015},0).wait(1).to({y:212.8,alpha:0.026},0).wait(1).to({y:212.7,alpha:0.04},0).wait(1).to({y:212.6,alpha:0.059},0).wait(1).to({y:212.3,alpha:0.084},0).wait(1).to({y:212.1,alpha:0.117},0).wait(1).to({y:211.7,alpha:0.163},0).wait(1).to({y:211.2,alpha:0.225},0).wait(1).to({y:210.4,alpha:0.312},0).wait(1).to({y:209.5,alpha:0.421},0).wait(1).to({y:208.6,alpha:0.532},0).wait(1).to({y:207.8,alpha:0.624},0).wait(1).to({y:207.2,alpha:0.695},0).wait(1).to({y:206.7,alpha:0.75},0).wait(1).to({y:206.4,alpha:0.795},0).wait(1).to({y:206.1,alpha:0.831},0).wait(1).to({y:205.8,alpha:0.86},0).wait(1).to({y:205.6,alpha:0.885},0).wait(1).to({y:205.4,alpha:0.906},0).wait(1).to({y:205.3,alpha:0.924},0).wait(1).to({y:205.2,alpha:0.939},0).wait(1).to({y:205.1,alpha:0.952},0).wait(1).to({y:205,alpha:0.962},0).wait(1).to({y:204.9,alpha:0.971},0).wait(1).to({y:204.8,alpha:0.979},0).wait(1).to({alpha:0.985},0).wait(1).to({y:204.7,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:150,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:-14.5,regY:-30.9,x:78.2,y:155.3,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:155.2,alpha:0.008},0).wait(1).to({y:155.1,alpha:0.015},0).wait(1).to({y:155,alpha:0.026},0).wait(1).to({y:154.8,alpha:0.04},0).wait(1).to({y:154.6,alpha:0.059},0).wait(1).to({y:154.3,alpha:0.084},0).wait(1).to({y:153.9,alpha:0.117},0).wait(1).to({y:153.3,alpha:0.163},0).wait(1).to({y:152.6,alpha:0.225},0).wait(1).to({y:151.6,alpha:0.312},0).wait(1).to({y:150.2,alpha:0.421},0).wait(1).to({y:148.9,alpha:0.532},0).wait(1).to({y:147.8,alpha:0.624},0).wait(1).to({y:147,alpha:0.695},0).wait(1).to({y:146.3,alpha:0.75},0).wait(1).to({y:145.8,alpha:0.795},0).wait(1).to({y:145.3,alpha:0.831},0).wait(1).to({y:145,alpha:0.86},0).wait(1).to({y:144.7,alpha:0.885},0).wait(1).to({y:144.4,alpha:0.906},0).wait(1).to({y:144.2,alpha:0.924},0).wait(1).to({y:144,alpha:0.939},0).wait(1).to({y:143.9,alpha:0.952},0).wait(1).to({y:143.8,alpha:0.962},0).wait(1).to({y:143.6,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:143.5,alpha:0.985},0).wait(1).to({y:143.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:143.3,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:57.3,regY:8,x:150,y:182.2},0).wait(28).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:143.1,y:178.2,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:150,y:182.2,alpha:1},5).wait(129));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,192.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:49.4,regY:-36.6,x:79.1,y:103.8},0).wait(1).to({y:103.7,alpha:0.002},0).wait(1).to({alpha:0.004},0).wait(1).to({y:103.6,alpha:0.007},0).wait(1).to({y:103.4,alpha:0.011},0).wait(1).to({y:103.2,alpha:0.016},0).wait(1).to({y:103,alpha:0.023},0).wait(1).to({y:102.6,alpha:0.032},0).wait(1).to({y:102.3,alpha:0.043},0).wait(1).to({y:101.8,alpha:0.056},0).wait(1).to({y:101.2,alpha:0.071},0).wait(1).to({y:100.5,alpha:0.091},0).wait(1).to({y:99.7,alpha:0.114},0).wait(1).to({y:98.6,alpha:0.143},0).wait(1).to({y:97.4,alpha:0.179},0).wait(1).to({y:95.7,alpha:0.224},0).wait(1).to({y:93.7,alpha:0.28},0).wait(1).to({y:91.3,alpha:0.348},0).wait(1).to({y:88.5,alpha:0.425},0).wait(1).to({y:85.7,alpha:0.503},0).wait(1).to({y:83.2,alpha:0.572},0).wait(1).to({y:81.1,alpha:0.631},0).wait(1).to({y:79.3,alpha:0.681},0).wait(1).to({y:77.8,alpha:0.723},0).wait(1).to({y:76.5,alpha:0.758},0).wait(1).to({y:75.4,alpha:0.788},0).wait(1).to({y:74.5,alpha:0.814},0).wait(1).to({y:73.7,alpha:0.837},0).wait(1).to({y:72.9,alpha:0.858},0).wait(1).to({y:72.3,alpha:0.875},0).wait(1).to({y:71.7,alpha:0.891},0).wait(1).to({y:71.2,alpha:0.905},0).wait(1).to({y:70.8,alpha:0.918},0).wait(1).to({y:70.3,alpha:0.929},0).wait(1).to({y:70,alpha:0.939},0).wait(1).to({y:69.7,alpha:0.948},0).wait(1).to({y:69.4,alpha:0.956},0).wait(1).to({y:69.1,alpha:0.963},0).wait(1).to({y:68.9,alpha:0.969},0).wait(1).to({y:68.7,alpha:0.975},0).wait(1).to({y:68.5,alpha:0.98},0).wait(1).to({y:68.4,alpha:0.984},0).wait(1).to({y:68.2,alpha:0.988},0).wait(1).to({y:68.1,alpha:0.991},0).wait(1).to({y:68,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:67.9,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({y:67.8,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:156.4},0).wait(237));

	// img
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149,327.1,0.567,0.567,0,0,0,299.9,600.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:300,regY:600,scaleX:0.5,scaleY:0.5,x:150,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(129,111.8,340.2,283.5);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box_book.jpg", id:"box_book"}
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