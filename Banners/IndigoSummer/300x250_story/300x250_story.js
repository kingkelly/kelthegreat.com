(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box_story = function() {
	this.initialize(img.box_story);
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(241.9,-94.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(122.9,-162.3,238,135.8), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(207.9,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBJQgFgFAAgHQAAgFACgEQAEgEAGAAQAMAAgBALIAAAFQANgCAOgkIgihTQgFgJgMgCIAAgGIAwAAIAAAGQgMABABAEIABAFIAXA6IABAAIAVg2IABgGQAAgDgFgCIgJgDIAAgGIAnAAIAAAFQgEABgEAEQgGADgDAFIgYA5IgLAcQgMAfgKAJQgHAHgLgBQgGAAgFgCg");
	this.shape_1.setTransform(200.1,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAvQgIgHABgLQgBgVAWgIIAUgHQALgDAGgDIAAgKQAAgIgDgFQgFgJgLAAQgJAAgEAFIACANQgBAEgDAEQgEACgGAAQgJABgBgMQAAgKANgIQAKgHAOAAQASABAIAFQALAIAAAUIgBAyQAAADACADQADAEAFABQAHAAAAgRIAHAAQgBAcgWAAQgPAAgFgPIgBAAQgLAQgVgBQgMAAgGgGgAgTAGQgKAIAAALQAAARAPAAQAMAAAJgLIABgjQgTAFgIAFg");
	this.shape_2.setTransform(189.9,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBEQgOgPAAgYQAAgXAQgPQAOgOAVAAQANAAAMAGIAAgoQgBgJgFgDQgEgEgOgBIAAgGIArgDIABACIAACMQABAHAFAEQACACALAAIAAAGIglADIgCgCIAAgJIAAAAQgNAOgQAAQgUAAgNgQgAgagDQgIAMAAAWQAAASAHALQAJAMAQAAQALABAKgMIAAg7QgGgSgSABQgNAAgIAMg");
	this.shape_3.setTransform(177.9,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAnQgPgPAAgYQAAgXAPgPQANgPAWAAQAXAAAOAPQAOAPAAAXQAAAWgOAQQgOAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQAAATAGANQAIAOANAAQAPAAAGgOQAIgMgBgUQABgTgHgMQgHgOgPAAQgOAAgIAOg");
	this.shape_4.setTransform(165.6,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA8QAAAUAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZgBAAgeg");
	this.shape_5.setTransform(155.9,34.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgDgLAAIAAgHIAogCIABACIAACOQAAAHAGADQAEACAFAAIAAAHg");
	this.shape_6.setTransform(219,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrAvQgIgHABgKQgBgWAWgIIAUgHQAMgDAFgDIAAgKQAAgHgDgGQgFgJgLAAQgJAAgEAFIACANQgBAFgDADQgEACgFAAQgLAAAAgLQAAgKANgIQALgGANgBQASAAAIAGQALAHAAAVIgBAyQAAADACADQADAEAFABQAHAAABgRIAGAAQgBAcgWAAQgPAAgFgOIgBAAQgMAPgUgBQgMAAgGgGgAgTAGQgKAHAAAMQAAARAPAAQAMAAAJgLIABgjQgSAEgJAGg");
	this.shape_7.setTransform(211.2,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBPIAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgFgDgIAAIAAgHIAkgCIACABIAABSQAAAHAGADQAFACAEAAIAAAHgAgJg3QgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(201.9,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg9QAAgHgGgEQgEgDgGAAIAAgGIAjgDIABACIAAAOIABAAQANgRAPAAQAGAAAEAEQAFAFAAAFQgBAGgDAFQgEAFgFAAQgLAAAAgLIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAIAFACQAEACAKAAIAAAHg");
	this.shape_9.setTransform(194.7,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgfg");
	this.shape_10.setTransform(186.1,8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAlQgMgOAAgXQAAgVAMgPQAOgRAUAAQAWAAALAOQAJALAAASIAAAHIhDAAQAAAtAiAAQALABAGgGQAGgEAGgKIAHAEQgGAMgLAHQgLAHgOAAQgXABgOgRgAgQgkQgHAJgBAQIAvgBQAAghgWAAQgJAAgIAJg");
	this.shape_11.setTransform(172.1,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAlQgMgOAAgXQAAgVAMgPQAOgRAUAAQAWAAALAOQAKALAAASIAAAHIhEAAQAAAtAiAAQALABAGgGQAGgEAGgKIAHAEQgGAMgLAHQgLAHgOAAQgXABgOgRgAgQgkQgHAJgBAQIAvgBQAAghgWAAQgJAAgIAJg");
	this.shape_12.setTransform(161.7,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg9QAAgHgGgEQgEgDgGAAIAAgGIAjgDIABACIAAAOIABAAQAMgRAQAAQAGAAAEAEQAFAFAAAFQAAAGgEAFQgDAFgGAAQgLAAAAgLIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAIAFACQAEACAKAAIAAAHg");
	this.shape_13.setTransform(152.3,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnBSIAAgHIAKgBQAGgCAAgIIAAhIIgWAAIAAgKIAWAAIAAgFQAAgdAOgQQAMgNAUAAQALAAAHAGQAFAFAAAIQAAAEgDAEQgDAEgGAAQgEAAgEgCQgEgDAAgFIABgMQgCgCgDAAQgLAAgFAKQgEAKgBAZIAAALIAaAAIAAAKIgaAAIAABHQAAAIAFACQAEACAKAAIAAAHg");
	this.shape_14.setTransform(145.2,6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg9QAAgHgGgEQgEgDgGAAIAAgGIAjgDIABACIAAAOIABAAQAMgRAQAAQAGAAAEAEQAFAFAAAFQAAAGgEAFQgDAEgGABQgLAAAAgLIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAHAFADQAEACALAAIAAAHg");
	this.shape_15.setTransform(225.2,-16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpARIAAguQgBgHgFgEQgDgCgHAAIAAgHIAjgDIABACIAABFQAAALAGAGQAFAGAHAAQAQAAAKgPIAAg4QgBgIgGgDQgCgCgLAAIAAgHIAmgDIABACIAABPQABAHAFAEQADABAIABIAAAGIgjADIgBgCIAAgNIgBAAQgJAJgFACQgIAGgMAAQgdAAAAgkg");
	this.shape_16.setTransform(214.1,-16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjAnQgPgPAAgYQAAgXAOgPQAOgPAWAAQAXAAAOAPQAOAPAAAXQAAAWgOAQQgOAQgXAAQgUAAgPgPgAgVgfQgHAMABATQAAATAGANQAIAOANAAQAPAAAGgOQAIgMgBgUQAAgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_17.setTransform(202.1,-16.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgwBIQgFgEgBgHQABgFADgEQAEgEAFAAQALAAAAALIAAAFQAOgDANgjIgjhTQgDgJgNgCIAAgGIAxAAIAAAHQgNAAAAAEIACAFIAWA6IABAAIAWg2IACgGQAAgDgHgCIgIgDIAAgGIAnAAIAAAFQgDACgFADQgHAEgBAEIgZA5IgLAcQgNAfgJAJQgHAHgMAAQgFgBgFgDg");
	this.shape_18.setTransform(191.3,-13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgfg");
	this.shape_19.setTransform(176.9,-17.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg9QAAgHgGgEQgEgDgGAAIAAgGIAjgDIABACIAAAOIABAAQANgRAPAAQAGAAAEAEQAFAFAAAFQgBAGgDAFQgEAEgFABQgLAAAAgLIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAHAFADQAEACAKAAIAAAHg");
	this.shape_20.setTransform(169,-16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgsAvQgGgHgBgKQABgWAVgIIAUgGQALgFAGgCIAAgKQAAgHgDgGQgEgJgLAAQgKAAgFAFIACANQAAAFgDACQgEADgGAAQgKAAABgMQgBgJAMgIQALgGAOgBQASAAAIAGQALAHAAAVIgBAyQAAADACADQADAEAEAAQAIAAABgQIAHAAQgCAcgXAAQgOAAgFgOIAAAAQgNAOgUAAQgLABgIgHgAgSAGQgLAHAAAMQAAARAPAAQANAAAIgLIABgjQgTAEgHAGg");
	this.shape_21.setTransform(159.4,-16.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgfg");
	this.shape_22.setTransform(149.5,-17.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgjBDIgHAKIgIAAIgBg2IAHAAQAIAWAKAKQAMAOASAAQAbAAAAgbQAAgTgUgJIgfgMQgbgLAAgbQAAgSANgMQANgLATAAQASAAAOALIAHgLIAIAAIABA1IgHAAQgIgXgIgJQgLgMgRAAQgHAAgHAEQgIAGAAALQAAARASAJQAKAGATAIQARAHAGAGQAJAKAAAQQAAAUgOANQgPANgVAAQgXAAgOgLg");
	this.shape_23.setTransform(139.7,-18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(61,-30,240.8,78), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(213.8,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBIQgFgEgBgHQAAgFAEgEQAEgEAFAAQAMAAgBALIAAAFQANgDAOgjIgjhTQgDgJgNgCIAAgGIAxAAIAAAHQgNAAAAAEIACAFIAWA6IABAAIAWg2IACgGQAAgDgHgCIgIgDIAAgGIAnAAIAAAFQgDACgFADQgHAEgBAEIgZA5IgLAcQgNAfgJAJQgHAHgMAAQgFgBgFgDg");
	this.shape_1.setTransform(206,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA0IAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgEgDgHAAIAAgGIAkgDIABACIAAAOIAAAAQAOgRAPAAQAGAAAFAEQAEAFgBAFQAAAGgDAFQgDAEgGABQgLAAAAgLIACgHQgIAAgHAFQgEAFgDAFIAAA5QAAAHAFADQAFACAJAAIAAAHg");
	this.shape_2.setTransform(196.7,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAnQgPgPAAgYQABgXAOgPQANgPAXAAQAWAAAOAPQANAPAAAXQAAAWgNAQQgOAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQgBATAHANQAHAOAPAAQAOAAAGgOQAIgMAAgUQAAgTgHgMQgHgOgOAAQgPAAgIAOg");
	this.shape_3.setTransform(186.2,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgfg");
	this.shape_4.setTransform(176.5,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_5.setTransform(168.2,10.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsAvQgGgHgBgKQABgWAVgIIAUgGQALgFAGgCIAAgKQAAgHgDgGQgEgJgLAAQgKAAgFAFIACANQAAAFgDACQgEADgGAAQgKAAABgMQgBgJAMgIQALgGAOgBQASAAAIAGQALAHAAAVIgBAyQAAADACADQADAEAEAAQAIAAAAgQIAIAAQgCAcgXAAQgOAAgFgOIAAAAQgNAOgUAAQgLABgIgHgAgSAGQgLAHAAAMQAAARAPAAQANAAAIgLIABgjQgTAEgHAGg");
	this.shape_6.setTransform(153.5,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpARIAAguQAAgHgGgEQgDgCgIAAIAAgHIAkgDIABACIAABFQABALAFAGQAEAGAIAAQAQAAAJgPIAAg4QAAgIgFgDQgDgCgMAAIAAgHIAngDIABACIAABPQABAHAFAEQADABAHABIAAAGIgiADIgCgCIAAgNIAAAAQgJAJgEACQgJAGgMAAQgdAAAAgkg");
	this.shape_7.setTransform(237.4,-15.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAnQgOgPAAgYQgBgXAOgPQAPgPAVAAQAXAAAOAPQANAPAAAXQABAWgNAQQgPAQgXAAQgVAAgOgPgAgVgfQgHAMAAATQABATAGANQAHAOAOAAQAOAAAIgOQAGgMABgUQgBgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_8.setTransform(225.4,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBIQgFgEAAgHQAAgFACgEQAEgEAGAAQAMAAgBALIAAAFQANgDAOgjIgihTQgFgJgMgCIAAgGIAwAAIAAAHQgMAAABAEIABAFIAXA6IABAAIAVg2IABgGQAAgDgFgCIgJgDIAAgGIAnAAIAAAGQgEAAgFAEQgFAEgDAEIgYA5IgLAdQgMAegKAJQgHAHgLAAQgGAAgFgEg");
	this.shape_9.setTransform(214.5,-12.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_10.setTransform(199.5,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgDgKAAIAAgHIAmgCIACABIAACPQAAAHAGADQAFACAEAAIAAAHg");
	this.shape_11.setTransform(191.7,-18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgDgKAAIAAgHIAmgCIACABIAACPQAAAHAGADQAFACAEAAIAAAHg");
	this.shape_12.setTransform(185.5,-18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghAmQgMgPAAgXQAAgVAMgPQAOgQAVAAQAVAAALAMQAKAMAAASIAAAGIhEAAQABAuAhAAQAKAAAIgEQAFgFAGgKIAHAEQgGAMgLAHQgMAIgOgBQgXAAgNgPgAgQgkQgHAKgBAOIAuAAQABghgVAAQgKAAgIAJg");
	this.shape_13.setTransform(177.6,-15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAmIAAg/IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgeg");
	this.shape_14.setTransform(168.4,-16.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAmIAAg/IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgeg");
	this.shape_15.setTransform(155.5,-16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsAvQgGgGgBgLQABgWAVgIIAUgGQALgFAGgCIAAgKQAAgIgDgFQgEgJgLAAQgKAAgFAFIACANQAAAFgDACQgEADgGABQgKAAABgNQgBgJAMgIQALgGAOAAQASgBAIAGQALAHAAAVIgBAyQAAADACADQADAEAEAAQAIAAAAgQIAIAAQgCAcgXAAQgOAAgFgOIAAAAQgNAOgUAAQgLABgIgHgAgSAGQgLAHAAAMQAAARAPAAQANAAAIgLIABgjQgTAEgHAGg");
	this.shape_16.setTransform(146.8,-15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAJBSIAAgHIAKgBQAHgCAAgIIAAgyQgBgLgFgGQgGgGgHAAQgJAAgJAGQgGADgCAGIAAA5QAAAHAFADQAFACAGAAIAAAHIg0AAIAAgHIAKgBQAFgCABgIIAAh4QgCgKgEgDQgDgDgMAAIAAgHIAngCIACABIAABNIAAAAIAOgNQAJgFAMAAQAeAAgBAhIAAAzQAAAHAHADQAEACAFAAIAAAHg");
	this.shape_17.setTransform(134.2,-18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAmIAAg/IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgeg");
	this.shape_18.setTransform(124.2,-16.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAZBSQgEgQgKgOQgLgSgJAAQgFAAgFADIAAAaQABAHAFADQAGACAFAAIAAAHIg0AAIAAgHIAKgBQAFgCAAgIIAAh4QAAgJgFgEQgEgCgLgBIAAgHIAngCIABABIAABvIAhggQADgDAAgCQAAgEgOgCIAAgHIAuAAIAAAHQgRAEgJAIIgUASQAOAHAKAPQADAEAMAXQACAEAHADQAEACAFAAIAAAGg");
	this.shape_19.setTransform(227.8,-44.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAnQgPgPAAgYQAAgXAPgPQANgPAXAAQAWAAAOAPQAOAPAAAXQAAAWgOAQQgOAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQAAATAGANQAIAOAOAAQAOAAAGgOQAIgMgBgUQABgTgHgMQgHgOgOAAQgPAAgIAOg");
	this.shape_20.setTransform(216,-41.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjAnQgPgPAAgYQAAgXAOgPQAOgPAWAAQAXAAAOAPQAOAPAAAXQAAAWgOAQQgOAQgXAAQgUAAgPgPgAgVgfQgHAMABATQAAATAGANQAIAOANAAQAPAAAGgOQAIgMgBgUQAAgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_21.setTransform(204.4,-41.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmBTIABgoIAAhmQAAgJgGgEQgDgCgLgBIAAgGIAngDIABACIAABHIABAAQAMgNARAAQATAAANAOQANAPAAAYQAAAWgPAQQgPAPgUAAQgOAAgRgJIgIAMgAgRgDIAAA7QAHATARAAQANAAAIgMQAIgMAAgWQAAgSgHgLQgIgNgQAAQgNAAgJAKg");
	this.shape_22.setTransform(192,-44.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgrAvQgIgGAAgLQAAgWAWgIIAUgGQAMgFAFgDIAAgJQAAgIgDgFQgFgJgLAAQgJAAgEAFIABAOQAAADgDADQgEAEgFAAQgKAAAAgNQAAgJAMgIQALgGANAAQASgBAIAGQALAHAAAVIgBAxQAAADACAEQADAFAFgBQAHAAABgQIAGAAQgBAcgWAAQgPAAgFgOIAAAAQgMAPgVAAQgMAAgGgHgAgSAGQgLAIAAALQAAARAPAAQAMAAAJgLIABgkQgSAFgIAGg");
	this.shape_23.setTransform(176.2,-41.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQAmIAAg/IgVAAIAAgJIAVAAIAAghIASAAIAAAhIAeAAIAAAJIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAIgNAAQgZAAAAgdg");
	this.shape_24.setTransform(161.1,-42.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghAmQgMgPAAgXQAAgVAMgPQAOgQAUAAQAWAAALAMQAJAMAAASIAAAGIhDAAQAAAvAigBQALAAAGgEQAGgFAGgKIAHAEQgGAMgLAHQgLAIgOAAQgXAAgOgQgAgQgkQgHAKgBAOIAvAAQAAghgWAAQgJAAgIAJg");
	this.shape_25.setTransform(152.3,-41.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAoBCQgdAMgVAAQgbgBgTgTQgWgWAAgiQAAghAYgXQAYgYAiAAQAJAAALAEQAKADAFAFIAHgMIAJAAIABA3IgHAAQgPgugmgBQgUABgNARQgOAUAAAgQAAAeAOATQAPATAUAAQARAAAKgHQAJgHABgLIAAgNQAAgKgHgDQgHgCgPgBIAAgHIBJAAIAAAHIgQADQgHADAAAIIAAAyIgFABg");
	this.shape_26.setTransform(139.2,-43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(88,-55,188.1,78), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.box_story();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,500), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78AC3C").s().p("AAOAhIgWghIgGAGIAAAbIgJAAIAAhBIAJAAIAAAcIAagcIALAAIgZAaIAaAng");
	this.shape.setTransform(158.3,-60.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#78AC3C").s().p("AgXAZQgKgKAAgPQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAPgKAKQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAALAHAIQAIAGAJAAQALAAAHgGQAHgIAAgLQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_1.setTransform(150.5,-60.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78AC3C").s().p("AgXAZQgKgKAAgPQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAPgKAKQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAALAHAIQAIAGAJAAQALAAAHgGQAHgIAAgLQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_2.setTransform(142.2,-60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#78AC3C").s().p("AgVAhIAAhBIARAAQAKAAAFADQAHAEAAAKQAAAEgDAFQgCAEgFABQAPACAAANQgBAJgGAGQgGAEgKAAgAgMAZIAKAAQAHAAADgCQAFgDAAgGQAAgGgFgEQgEgBgGAAIgKAAgAgMgEIAHAAQAGAAAEgCQADgDAAgFQAAgGgDgDQgEgCgFAAIgIAAg");
	this.shape_3.setTransform(135.1,-60.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#78AC3C").s().p("AgXAZQgKgKAAgPQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAPgKAKQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAALAHAIQAIAGAJAAQALAAAHgGQAHgIAAgLQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_4.setTransform(127.5,-60.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#78AC3C").s().p("AgDAhIAAhBIAIAAIAABBg");
	this.shape_5.setTransform(121.8,-60.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#78AC3C").s().p("AgbAhIAAhBIAUAAQAOAAAKAJQAKAJAAAOQAAAPgKAJQgKAJgOAAgAgSAZIALAAQAKAAAHgGQAIgHAAgMQAAgLgIgHQgHgHgKABIgLAAg");
	this.shape_6.setTransform(116.7,-60.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#78AC3C").s().p("AgTAaQgFgHAAgNIAAgnIAJAAIAAAmIAAAFQABAGACADQAFAHAHAAQAIAAAFgHIACgEIABgKIAAgmIAJAAIAAAnQAAANgFAHQgHAHgNABQgMgBgHgHg");
	this.shape_7.setTransform(109.2,-60.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#78AC3C").s().p("AAVAhIgHgRIgcAAIgGARIgKAAIAbhBIAHAAIAbBBgAALAIIgLgdIgLAdIAWAAg");
	this.shape_8.setTransform(102.1,-60.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#78AC3C").s().p("AgTAhIAAhBIAmAAIAAAIIgdAAIAAAUIAbAAIAAAGIgbAAIAAAXIAeAAIAAAIg");
	this.shape_9.setTransform(93.1,-60.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#78AC3C").s().p("AgTAhIAAhBIAmAAIAAAIIgdAAIAAAUIAbAAIAAAGIgbAAIAAAXIAeAAIAAAIg");
	this.shape_10.setTransform(87.3,-60.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#78AC3C").s().p("AALAhIgQgdIgHAAIAAAdIgJAAIAAhBIASAAQAJAAAGAEQAHAGAAAJQAAAHgFAFQgEADgGACIASAdgAgMgCIAHAAQAHAAADgCQAEgEAAgFQAAgGgEgDQgDgCgHAAIgHAAg");
	this.shape_11.setTransform(81.5,-60.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#78AC3C").s().p("AgRAhIAAhBIAjAAIAAAIIgaAAIAAAVIAZAAIAAAHIgZAAIAAAdg");
	this.shape_12.setTransform(75.6,-60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AoAByIAAjjIQCAAIAADjg");
	this.shape_13.setTransform(117.1,-60.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(65.7,-72.3,102.7,22.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,600,500), null);


// stage content:
(lib._300x250_story = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:241.9,regY:-94.5,x:211.5,y:183.7,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.008},0).wait(1).to({y:183.6,alpha:0.015},0).wait(1).to({y:183.5,alpha:0.026},0).wait(1).to({y:183.4,alpha:0.04},0).wait(1).to({y:183.3,alpha:0.059},0).wait(1).to({y:183,alpha:0.084},0).wait(1).to({y:182.8,alpha:0.117},0).wait(1).to({y:182.4,alpha:0.163},0).wait(1).to({y:181.9,alpha:0.225},0).wait(1).to({y:181.1,alpha:0.312},0).wait(1).to({y:180.2,alpha:0.421},0).wait(1).to({y:179.3,alpha:0.532},0).wait(1).to({y:178.5,alpha:0.624},0).wait(1).to({y:177.9,alpha:0.695},0).wait(1).to({y:177.4,alpha:0.75},0).wait(1).to({y:177.1,alpha:0.795},0).wait(1).to({y:176.8,alpha:0.831},0).wait(1).to({y:176.5,alpha:0.86},0).wait(1).to({y:176.3,alpha:0.885},0).wait(1).to({y:176.1,alpha:0.906},0).wait(1).to({y:176,alpha:0.924},0).wait(1).to({y:175.9,alpha:0.939},0).wait(1).to({y:175.8,alpha:0.952},0).wait(1).to({y:175.7,alpha:0.962},0).wait(1).to({y:175.6,alpha:0.971},0).wait(1).to({y:175.5,alpha:0.979},0).wait(1).to({alpha:0.985},0).wait(1).to({y:175.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:150,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:117.1,regY:-60.9,x:209.8,y:125.3,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:125.2,alpha:0.008},0).wait(1).to({y:125.1,alpha:0.015},0).wait(1).to({y:125,alpha:0.026},0).wait(1).to({y:124.8,alpha:0.04},0).wait(1).to({y:124.6,alpha:0.059},0).wait(1).to({y:124.3,alpha:0.084},0).wait(1).to({y:123.9,alpha:0.117},0).wait(1).to({y:123.3,alpha:0.163},0).wait(1).to({y:122.6,alpha:0.225},0).wait(1).to({y:121.6,alpha:0.312},0).wait(1).to({y:120.2,alpha:0.421},0).wait(1).to({y:118.9,alpha:0.532},0).wait(1).to({y:117.8,alpha:0.624},0).wait(1).to({y:117,alpha:0.695},0).wait(1).to({y:116.3,alpha:0.75},0).wait(1).to({y:115.8,alpha:0.795},0).wait(1).to({y:115.3,alpha:0.831},0).wait(1).to({y:115,alpha:0.86},0).wait(1).to({y:114.7,alpha:0.885},0).wait(1).to({y:114.4,alpha:0.906},0).wait(1).to({y:114.2,alpha:0.924},0).wait(1).to({y:114,alpha:0.939},0).wait(1).to({y:113.9,alpha:0.952},0).wait(1).to({y:113.8,alpha:0.962},0).wait(1).to({y:113.6,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:113.5,alpha:0.985},0).wait(1).to({y:113.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:113.3,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:57.3,regY:8,x:150,y:182.2},0).wait(77).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:158.1,y:174.2,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:150,y:182.2,alpha:1},5).wait(80));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.1,192.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol3copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,96.4,1,1,0,0,0,120.4,52);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:181.8,regY:-15.9,x:211.5,y:124.5},0).wait(1).to({y:124.4,alpha:0.002},0).wait(1).to({alpha:0.004},0).wait(1).to({y:124.3,alpha:0.007},0).wait(1).to({y:124.1,alpha:0.011},0).wait(1).to({y:123.9,alpha:0.016},0).wait(1).to({y:123.7,alpha:0.023},0).wait(1).to({y:123.3,alpha:0.032},0).wait(1).to({y:123,alpha:0.043},0).wait(1).to({y:122.5,alpha:0.056},0).wait(1).to({y:121.9,alpha:0.071},0).wait(1).to({y:121.2,alpha:0.091},0).wait(1).to({y:120.4,alpha:0.114},0).wait(1).to({y:119.3,alpha:0.143},0).wait(1).to({y:118.1,alpha:0.179},0).wait(1).to({y:116.4,alpha:0.224},0).wait(1).to({y:114.4,alpha:0.28},0).wait(1).to({y:112,alpha:0.348},0).wait(1).to({y:109.2,alpha:0.425},0).wait(1).to({y:106.4,alpha:0.503},0).wait(1).to({y:103.9,alpha:0.572},0).wait(1).to({y:101.8,alpha:0.631},0).wait(1).to({y:100,alpha:0.681},0).wait(1).to({y:98.5,alpha:0.723},0).wait(1).to({y:97.2,alpha:0.758},0).wait(1).to({y:96.1,alpha:0.788},0).wait(1).to({y:95.2,alpha:0.814},0).wait(1).to({y:94.4,alpha:0.837},0).wait(1).to({y:93.6,alpha:0.858},0).wait(1).to({y:93,alpha:0.875},0).wait(1).to({y:92.4,alpha:0.891},0).wait(1).to({y:91.9,alpha:0.905},0).wait(1).to({y:91.5,alpha:0.918},0).wait(1).to({y:91,alpha:0.929},0).wait(1).to({y:90.7,alpha:0.939},0).wait(1).to({y:90.4,alpha:0.948},0).wait(1).to({y:90.1,alpha:0.956},0).wait(1).to({y:89.8,alpha:0.963},0).wait(1).to({y:89.6,alpha:0.969},0).wait(1).to({y:89.4,alpha:0.975},0).wait(1).to({y:89.2,alpha:0.98},0).wait(1).to({y:89.1,alpha:0.984},0).wait(1).to({y:88.9,alpha:0.988},0).wait(1).to({y:88.8,alpha:0.991},0).wait(1).to({y:88.7,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:88.6,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({y:88.5,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:156.4},0).wait(35).to({regX:181.8,regY:-15.9,x:211.5,y:88.4},0).wait(1).to({y:88.2},0).wait(1).to({y:87.7},0).wait(1).to({y:86.9},0).wait(1).to({y:85.6},0).wait(1).to({y:83.6},0).wait(1).to({y:80.3},0).wait(1).to({y:74.9},0).wait(1).to({y:68.8},0).wait(1).to({y:64.4},0).wait(1).to({y:61.4},0).wait(1).to({y:59.3},0).wait(1).to({y:57.8},0).wait(1).to({y:56.6},0).wait(1).to({y:55.7},0).wait(1).to({y:55},0).wait(1).to({y:54.5},0).wait(1).to({y:54.1},0).wait(1).to({y:53.8},0).wait(1).to({y:53.6},0).wait(1).to({y:53.5},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:121.4},0).wait(37).to({regX:181.8,regY:-15.9,x:211.5,y:53.5,alpha:0.997},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.335},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:121.4,alpha:0},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({_off:false},0).wait(1).to({regX:181.8,regY:9.6,x:211.5,y:54,alpha:0.001},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.799},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:96.4,alpha:1},0).wait(97));

	// img
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(169,337.1,0.567,0.567,0,0,0,299.9,600.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:300,regY:600,scaleX:0.5,scaleY:0.5,x:150,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,121.8,340.2,283.5);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box_story.jpg", id:"box_story"}
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