(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box_speak = function() {
	this.initialize(img.box_speak);
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
	this.shape.graphics.f("#525E6C").s().p("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");
	this.shape.setTransform(1.9,-46.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-117.1,-114.3,238,135.8), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525E6C").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(88.9,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525E6C").s().p("AgwBJQgFgFAAgHQAAgFADgEQADgEAGAAQALAAAAALIAAAGQAOgEANgjIgjhTQgDgJgNgCIAAgHIAxAAIAAAIQgMAAAAAEIABAFIAWA6IABAAIAWg2IACgGQAAgDgHgDIgIgCIAAgHIAnAAIAAAHQgEABgEADQgHADgBAFIgZA5IgLAdQgMAegKAJQgHAGgMABQgFAAgFgDg");
	this.shape_1.setTransform(81.1,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525E6C").s().p("AgsAvQgGgGAAgMQAAgVAVgIIAUgGQALgEAGgEIAAgJQAAgHgDgGQgEgJgMAAQgJAAgFAFIADAOQAAADgEADQgEAEgGAAQgKgBAAgMQABgJALgHQAMgIANABQASgBAIAGQALAHAAAVIgBAxQAAADACAEQADAFAEgBQAIAAAAgQIAHAAQgBAcgXAAQgOAAgFgPIgBAAQgMAQgUAAQgLAAgIgHgAgTAGQgKAHAAANQAAAQAPAAQAMAAAJgLIABgkQgTAFgIAGg");
	this.shape_2.setTransform(70.9,49.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525E6C").s().p("AgrBFQgOgQAAgZQAAgWAQgOQAOgPAVAAQANAAAMAGIAAgnQgBgKgFgEQgEgDgOgBIAAgGIArgCIABABIAACMQABAHAFAEQACABALABIAAAHIglACIgCgBIAAgKIAAAAQgNANgQAAQgUABgNgPgAgagDQgIAMAAAWQAAARAHAMQAJANAQAAQALAAAKgMIAAg8QgGgQgSgBQgNAAgIANg");
	this.shape_3.setTransform(58.9,46.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525E6C").s().p("AgjAnQgPgPAAgYQABgXAOgPQAOgPAWAAQAWAAAOAPQANAPAAAXQAAAWgMAQQgPAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQgBATAHANQAHAOAPAAQAOAAAGgOQAIgMAAgUQAAgTgHgMQgHgOgOAAQgPAAgIAOg");
	this.shape_4.setTransform(46.6,49.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525E6C").s().p("AgQAmIAAg/IgVAAIAAgJIAVAAIAAghIASAAIAAAhIAeAAIAAAJIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAIgNAAQgZAAAAgdg");
	this.shape_5.setTransform(36.9,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525E6C").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgDQgFgEgKAAIAAgGIAmgDIACABIAACPQAAAHAGADQAFACAEAAIAAAHg");
	this.shape_6.setTransform(100,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525E6C").s().p("AgsAvQgGgHAAgLQAAgVAVgIIAUgHQALgEAGgDIAAgJQAAgHgDgGQgEgJgMAAQgJAAgEAFIACAOQgBADgDAEQgEADgGAAQgJgBgBgLQABgKAMgHQAKgIAOABQASAAAIAFQALAIAAAUIgBAxQAAADACAEQADAFAEgBQAIAAAAgQIAHAAQgBAcgXAAQgOAAgFgPIgBAAQgLAPgVABQgLgBgIgGgAgTAGQgKAIAAAMQAAAQAPAAQAMAAAJgLIABgkQgTAGgIAFg");
	this.shape_7.setTransform(92.2,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525E6C").s().p("AgXBPIAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgFgDgIAAIAAgHIAkgCIACABIAABSQAAAHAGADQAFACAEAAIAAAHgAgJg3QgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(82.9,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525E6C").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg8QAAgJgGgDQgEgCgGgBIAAgHIAigCIACABIAAAQIABAAQANgSAPAAQAGAAAEAEQAEAEABAHQAAAGgEAEQgEAFgFgBQgLAAAAgKIABgHQgHAAgHAGQgEAEgDAFIAAA5QAAAHAFADQAEABALABIAAAHg");
	this.shape_9.setTransform(75.7,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525E6C").s().p("AgQAmIAAg/IgVAAIAAgJIAVAAIAAghIASAAIAAAhIAeAAIAAAJIgeAAIAAA8QAAAUAQAAQAKAAACgRIAIAAQgCANgGAIQgIAIgNAAQgZAAAAgdg");
	this.shape_10.setTransform(67.1,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525E6C").s().p("AghAlQgMgOAAgXQAAgVAMgPQAOgQAUAAQAWgBALANQAKAMAAATIAAAFIhEAAQAAAvAiAAQAKgBAHgFQAGgEAGgKIAHAEQgGAMgLAHQgMAIgOAAQgWgBgOgQgAgQgkQgHAJgBAPIAuAAQABghgWAAQgJAAgIAJg");
	this.shape_11.setTransform(53.1,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525E6C").s().p("AghAlQgMgOAAgXQAAgVAMgPQAOgQAUAAQAWgBALANQAKAMAAATIAAAFIhEAAQAAAvAiAAQAKgBAIgFQAFgEAGgKIAHAEQgGAMgLAHQgMAIgOAAQgWgBgOgQgAgQgkQgHAJgBAPIAuAAQABghgWAAQgJAAgIAJg");
	this.shape_12.setTransform(42.7,23.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525E6C").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg8QAAgJgGgDQgDgCgIgBIAAgHIAjgCIACABIAAAQIABAAQANgSAPAAQAGAAAEAEQAEAEAAAHQAAAGgDAEQgEAFgFgBQgLAAAAgKIABgHQgHAAgHAGQgEAEgDAFIAAA5QAAAHAFADQAEABALABIAAAHg");
	this.shape_13.setTransform(33.3,23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525E6C").s().p("AgnBSIAAgHIAKgBQAGgCAAgIIAAhIIgWAAIAAgKIAWAAIAAgFQAAgdAOgQQAMgNAUAAQALAAAHAGQAFAFAAAIQAAAEgDAEQgDAEgGAAQgEAAgEgCQgEgDAAgFIABgMQgCgCgDAAQgLAAgFAKQgEAKgBAZIAAALIAaAAIAAAKIgaAAIAABHQAAAIAFACQAEACAKAAIAAAHg");
	this.shape_14.setTransform(26.2,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525E6C").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg8QAAgJgGgDQgDgCgIgBIAAgHIAjgCIACABIAAAPIABAAQANgRAPAAQAGAAAEAEQAEAEAAAHQAAAFgDAFQgEAFgFgBQgLAAAAgKIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAIAFACQAEABALABIAAAHg");
	this.shape_15.setTransform(106.2,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525E6C").s().p("AgpARIAAguQgBgHgEgEQgEgCgHAAIAAgHIAjgDIACACIAABFQAAALAEAGQAGAGAHAAQAQAAAKgPIAAg4QgBgIgFgDQgDgCgMAAIAAgHIAngDIACACIAABPQAAAHAFAEQADABAIABIAAAGIgiADIgCgCIAAgNIgBAAQgJAJgFACQgIAGgMAAQgdAAAAgkg");
	this.shape_16.setTransform(95.1,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525E6C").s().p("AgjAnQgPgPAAgYQABgXAOgPQANgPAXAAQAWAAAOAPQANAPAAAXQAAAWgNAQQgOAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQgBATAHANQAHAOAPAAQAOAAAGgOQAIgMgBgUQABgTgHgMQgHgOgOAAQgPAAgIAOg");
	this.shape_17.setTransform(83.1,-2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525E6C").s().p("AgvBJQgHgFAAgHQAAgFAEgEQAEgEAFAAQAMAAAAALIAAAGQAMgDAOgkIgihTQgEgJgNgCIAAgHIAxAAIAAAHQgMABgBAEIACAFIAXA6IAAAAIAWg2IACgGQgBgDgGgDIgIgCIAAgHIAnAAIAAAGQgDACgGADQgFAEgCAEIgYA5IgMAcQgNAfgJAJQgHAGgLAAQgGAAgEgCg");
	this.shape_18.setTransform(72.3,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525E6C").s().p("AgQAmIAAg/IgVAAIAAgJIAVAAIAAghIASAAIAAAhIAeAAIAAAJIgeAAIAAA8QAAAUAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNgBQgZAAAAgdg");
	this.shape_19.setTransform(57.9,-3.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525E6C").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg8QAAgJgGgDQgEgCgGgBIAAgHIAigCIACABIAAAPIABAAQANgRAPAAQAGAAAEAEQAEAEABAHQAAAFgEAFQgEAFgFgBQgLAAAAgKIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAIAFACQAEABALABIAAAHg");
	this.shape_20.setTransform(50,-2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525E6C").s().p("AgrAvQgIgHAAgLQAAgVAWgIIAUgHQAMgDAFgEIAAgJQAAgHgDgGQgFgJgKAAQgKAAgFAFIACAOQABADgEAEQgEACgFAAQgKABAAgMQAAgKALgHQAMgIANAAQASABAIAFQALAIAAAUIgBAxQAAAEACADQADAFAFAAQAHgBABgQIAHAAQgCAcgWAAQgPAAgFgPIAAAAQgMAPgVABQgLgBgHgGgAgSAGQgLAIAAAMQAAAQAPAAQAMAAAJgLIABgkQgTAGgHAFg");
	this.shape_21.setTransform(40.4,-2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525E6C").s().p("AgQAmIAAg/IgVAAIAAgJIAVAAIAAghIASAAIAAAhIAeAAIAAAJIgeAAIAAA8QAAAUAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNgBQgZAAAAgdg");
	this.shape_22.setTransform(30.5,-3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525E6C").s().p("AgjBDIgHAKIgIAAIgBg1IAHAAQAIAUAKALQAMAOASAAQAbAAAAgbQAAgTgUgIIgfgOQgbgKAAgcQAAgRANgLQANgMATAAQASAAAOALIAHgKIAIAAIABAzIgHAAQgIgVgIgKQgLgMgRAAQgHAAgHAEQgIAGAAALQAAARASAKQAKAFATAHQARAIAGAGQAJAKAAAQQAAAUgOANQgPANgVAAQgXAAgOgLg");
	this.shape_23.setTransform(20.7,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-58,-16,240.8,78), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525E6C").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(121.2,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#525E6C").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg8QAAgJgGgDQgEgCgGgBIAAgGIAigDIACABIAAAPIABAAQANgRAPAAQAGAAAEAEQAEAEABAHQAAAFgEAFQgEAFgFgBQgLABAAgLIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAIAFACQAEABALABIAAAHg");
	this.shape_1.setTransform(114.4,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525E6C").s().p("AghAlQgMgOAAgXQAAgVANgPQANgRAUAAQAWABALANQAJALAAATIAAAGIhCAAQgBAtAiABQALAAAGgGQAGgEAGgKIAHAEQgGAMgLAHQgLAHgOAAQgXAAgOgQgAgQgkQgHAKAAAPIAugBQAAghgWAAQgJAAgIAJg");
	this.shape_2.setTransform(104.7,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#525E6C").s().p("AAoA0IAAgHIAJgBQAGgCAAgIIAAgyQAAgLgFgGQgFgGgHAAQgSAAgJAPIAAA5QgBAIAHACQAEACAFAAIAAAHIgyAAIAAgHIAJgBQAGgCABgIIAAgyQAAgLgGgGQgFgGgHAAQgTAAgIAQIAAA4QAAAHAFADQAFACAFAAIAAAHIgzAAIAAgHIAKgBQAFgCAAgIIAAg9QAAgHgFgDQgFgDgGgBIAAgGIAjgDIACACIAAAPIAAAAIAOgMQAJgGANAAQATAAAIATQAKgLAEgCQAKgGANAAQAcAAAAAkIAAAwQABAIAFACQAFACAGAAIAAAHg");
	this.shape_3.setTransform(89.8,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#525E6C").s().p("AAoA0IAAgHIAJgBQAGgCAAgIIAAgyQAAgLgFgGQgFgGgIAAQgRAAgKAPIAAA5QABAIAFACQAEACAGAAIAAAHIgxAAIAAgHIAJgBQAFgCAAgIIAAgyQABgLgGgGQgFgGgIAAQgRAAgKAQIAAA4QAAAHAHADQAEACAFAAIAAAHIgzAAIAAgHIAJgBQAHgCAAgIIAAg9QgBgHgGgDQgDgDgIgBIAAgGIAkgDIABACIAAAPIABAAIAOgMQAJgGAMAAQAUAAAIATQALgLAEgCQAJgGAMAAQAeAAAAAkIAAAwQgBAIAGACQAEACAGAAIAAAHg");
	this.shape_4.setTransform(70.5,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525E6C").s().p("AgpARIAAguQgBgHgFgEQgDgCgHAAIAAgHIAjgDIACACIAABFQgBALAGAGQAFAGAHAAQAQAAAKgPIAAg4QgBgIgGgDQgCgCgLAAIAAgHIAmgDIABACIAABPQABAHAFAEQADABAIABIAAAGIgjADIgBgCIAAgNIgBAAQgJAJgFACQgIAGgMAAQgdAAAAgkg");
	this.shape_5.setTransform(54.4,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#525E6C").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_6.setTransform(43.6,34.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525E6C").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_7.setTransform(29.4,34.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525E6C").s().p("AgXBPIAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgFgDgIAAIAAgHIAkgCIACABIAABSQAAAHAGADQAFACAEAAIAAAHgAgJg3QgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_8.setTransform(21.7,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#525E6C").s().p("AAJBSIAAgHIALgBQAFgCABgIIAAgzQAAgLgGgFQgFgGgIAAQgJAAgJAFQgGAEgDAFIAAA6QABAHAFADQAFACAGAAIAAAHIg0AAIAAgHIAKgBQAFgCAAgIIAAh5QgBgJgEgDQgEgDgLAAIAAgGIAngDIABACIAABLIABAAIAOgLQAIgHANAAQAdAAABAiIAAA0QAAAGAFADQAFACAFAAIAAAHg");
	this.shape_9.setTransform(11.9,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#525E6C").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAggIASAAIAAAgIAeAAIAAAKIgeAAIAAA8QAAAUAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNgBQgZAAAAgeg");
	this.shape_10.setTransform(1.9,33.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#525E6C").s().p("AgpARIAAguQAAgHgGgEQgDgCgIAAIAAgHIAkgDIABACIAABFQABALAFAGQAEAGAIAAQAQAAAJgPIAAg4QAAgIgFgDQgDgCgMAAIAAgHIAngDIABACIAABPQABAHAFAEQADABAHABIAAAGIgiADIgCgCIAAgNIAAAAQgJAJgEACQgJAGgMAAQgdAAAAgkg");
	this.shape_11.setTransform(118.6,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#525E6C").s().p("AgjAnQgOgPAAgYQgBgXAOgPQAPgPAVAAQAXAAAOAPQAOAPgBAXQABAWgNAQQgPAQgXAAQgVAAgOgPgAgVgfQgHAMAAATQABATAGANQAHAOAOAAQAOAAAIgOQAGgMABgUQgBgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_12.setTransform(106.6,8.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525E6C").s().p("AgwBIQgFgEAAgHQAAgFACgEQAEgEAGAAQAMAAgBALIAAAFQANgCAOgkIgihTQgFgJgMgCIAAgGIAwAAIAAAGQgMABABAEIABAFIAXA6IABAAIAVg2IABgGQAAgDgFgCIgJgDIAAgGIAnAAIAAAFQgEABgFAEQgFADgDAFIgYA5IgLAcQgMAfgKAJQgHAHgLgBQgGAAgFgDg");
	this.shape_13.setTransform(95.7,11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#525E6C").s().p("AgjAnQgPgPAAgYQABgXAOgPQAOgPAWAAQAWAAAOAPQANAPAAAXQAAAWgMAQQgPAQgXAAQgUAAgPgPgAgWgfQgFAMAAATQgBATAHANQAHAOAPAAQAOAAAGgOQAIgMAAgUQAAgTgHgMQgHgOgOAAQgPAAgIAOg");
	this.shape_14.setTransform(79.4,8.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#525E6C").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA8QAAAUAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZgBAAgeg");
	this.shape_15.setTransform(69.8,7.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#525E6C").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_16.setTransform(56.2,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#525E6C").s().p("AAZBSQgFgQgJgPQgLgRgJAAQgGAAgEAEIAAAZQABAIAFACQAGACAFAAIAAAHIg0AAIAAgHIAJgBQAHgCgBgIIAAh4QAAgJgGgEQgDgDgLAAIAAgGIAngDIABACIAABtIAhgfQADgDAAgCQAAgEgNgCIAAgGIAtAAIAAAFQgRAGgJAHIgUATQAOAGAJAOQAFAFALAXQACAEAHADQAEACAFgBIAAAHg");
	this.shape_17.setTransform(45.9,5.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#525E6C").s().p("AgsAvQgGgHAAgLQAAgVAVgIIAUgHQALgDAGgDIAAgKQAAgIgDgFQgEgJgLAAQgKAAgFAFIADANQAAAEgEAEQgEACgGAAQgKABAAgMQABgKALgIQAMgHANAAQASABAIAFQALAIAAAUIgBAyQAAADACADQADAEAEABQAIAAAAgRIAHAAQgBAcgXAAQgOAAgFgPIgBAAQgMAQgUgBQgLAAgIgGgAgTAGQgKAIAAALQAAARAPAAQANAAAIgLIABgjQgSAFgJAFg");
	this.shape_18.setTransform(34.9,8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#525E6C").s().p("AghAlQgMgOAAgXQAAgVAMgPQAOgRAUAAQAWABALANQAKALAAATIAAAGIhEAAQAAAtAiABQAKAAAHgGQAGgEAGgKIAHAEQgGAMgLAHQgMAHgOAAQgWABgOgRgAgQgkQgHAJgBAQIAvgBQAAghgWAAQgKAAgHAJg");
	this.shape_19.setTransform(23.9,8.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525E6C").s().p("Ag4BNIAAgHIAMgBQAFgCAAgIIAAhvQAAgHgFgEQgEgCgIAAIAAgHIAkgCIABABIAAALIABAAQANgOAQAAQAUAAAMAPQAOAPAAAZQAAAVgQAPQgOAPgUAAQgPAAgKgGIgBAAIAAAhQAAAIAHADQAHACAHAAIAAAHgAgTg2IAAA8QADAGAFAFQAIAFAIABQANAAAIgMQAJgLgBgVQAAgTgGgLQgJgOgPAAQgNAAgKALg");
	this.shape_20.setTransform(12.2,11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#525E6C").s().p("AgPAzQgHgDgDgDIgCAHIgIAAIgBgkIAHAAQACALAIAIQAJALALAAQAUAAAAgRQAAgJgGgFQgFgDgNgFQgegIAAgWQAAgNAJgIQAJgJAPAAQAOAAAIAGIACgGIAHAAIABAgIgHAAQgCgKgGgHQgHgHgKAAQgSAAAAAOQAAAJAGAEQAFADAOAFQAPAFAHAGQAIAIAAANQAAAOgLAJQgKAJgQAAQgHAAgIgDg");
	this.shape_21.setTransform(1.6,8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525E6C").s().p("AgwBIQgFgEAAgHQAAgFADgEQADgEAGAAQALAAAAALIAAAFQAOgCANgkIgjhTQgDgJgNgCIAAgGIAxAAIAAAGQgMABAAAEIABAFIAWA6IABAAIAWg2IABgGQABgDgHgCIgIgDIAAgGIAnAAIAAAFQgEABgEAEQgHAEgBAEIgZA5IgLAcQgMAfgKAJQgHAHgMgBQgFAAgFgDg");
	this.shape_22.setTransform(104.5,-14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#525E6C").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgDgKAAIAAgHIAmgCIACACIAACOQAAAHAGADQAFACAEAAIAAAHg");
	this.shape_23.setTransform(95.9,-20.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#525E6C").s().p("AgWBSIAAgHIAKgBQAGgCAAgIIAAh4QgBgJgFgEQgFgDgLAAIAAgHIAngCIACACIAACOQAAAHAGADQAEACAFAAIAAAHg");
	this.shape_24.setTransform(89.7,-20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#525E6C").s().p("AgrAvQgIgHABgKQgBgWAWgIIAUgHQALgEAGgCIAAgKQAAgHgDgGQgFgJgLAAQgJAAgEAFIACANQgBAFgDACQgEADgGAAQgJAAgBgMQAAgJANgIQAKgGAOgBQASAAAIAGQALAHAAAVIgBAyQAAADACADQADAEAFABQAHAAAAgRIAHAAQgBAcgWAAQgPAAgFgOIgBAAQgLAPgVgBQgMAAgGgGgAgTAGQgKAHAAAMQAAARAPAAQAMAAAJgLIABgjQgTAEgIAGg");
	this.shape_25.setTransform(81.9,-17.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#525E6C").s().p("AghAlQgMgOAAgXQAAgVANgPQANgRAUAAQAWAAALAOQAJALAAASIAAAHIhCAAQgBAtAiAAQALABAGgGQAGgEAGgKIAHAEQgGAMgLAHQgLAHgOAAQgXABgOgRgAgQgkQgHAJAAAQIAugBQAAghgWAAQgJAAgIAJg");
	this.shape_26.setTransform(70.9,-17.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#525E6C").s().p("AgmA0IAAgHIAJgBQAGgCAAgIIAAg9QAAgHgGgEQgEgDgGAAIAAgGIAjgDIABACIAAAOIABAAQANgRAPAAQAGAAAEAEQAFAFAAAFQgBAGgDAFQgEAFgFAAQgLAAAAgLIABgHQgHAAgHAFQgEAFgDAFIAAA5QAAAIAFACQAEACAKAAIAAAHg");
	this.shape_27.setTransform(61.5,-17.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#525E6C").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgfg");
	this.shape_28.setTransform(47.7,-18.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#525E6C").s().p("AgrAvQgIgHABgKQgBgWAWgIIAUgHQAMgEAFgCIAAgKQAAgHgDgGQgFgJgLAAQgJAAgEAFIABANQAAAFgDACQgEADgFAAQgKAAAAgMQAAgJAMgIQALgGANgBQASAAAIAGQALAHAAAVIgBAyQAAADACADQADAEAFABQAHAAABgRIAGAAQgBAcgWAAQgPAAgFgOIAAAAQgMAPgVgBQgMAAgGgGgAgSAGQgLAHAAAMQAAARAPAAQAMAAAJgLIABgjQgSAEgIAGg");
	this.shape_29.setTransform(38.9,-17.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#525E6C").s().p("AAJBSIAAgHIALgBQAFgCABgIIAAgzQAAgKgGgGQgFgGgIAAQgJAAgJAFQgGAEgDAFIAAA6QABAHAFADQAFACAGAAIAAAHIg0AAIAAgHIAKgBQAFgCAAgIIAAh5QgBgJgEgDQgEgDgLAAIAAgHIAngCIABACIAABLIABAAIAOgMQAIgFANgBQAdABABAhIAAA0QAAAGAFADQAFACAFAAIAAAHg");
	this.shape_30.setTransform(26.3,-20.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#525E6C").s().p("AgQAlIAAg+IgVAAIAAgKIAVAAIAAgfIASAAIAAAfIAeAAIAAAKIgeAAIAAA7QAAAVAQAAQAKAAACgRIAIAAQgCANgGAIQgIAJgNAAQgZAAAAgfg");
	this.shape_31.setTransform(16.3,-18.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#525E6C").s().p("AAZBSQgEgQgKgOQgLgSgJAAQgFAAgEADIAAAaQAAAHAFADQAGACAFAAIAAAHIg0AAIAAgHIAKgBQAFgCAAgIIAAh4QAAgKgFgDQgEgDgLAAIAAgHIAngCIACABIAABuIAggfQADgDAAgCQAAgFgOgBIAAgGIAuAAIAAAFQgRAGgJAHIgUASQANAHALAOQADAGAMAWQACAEAHADQAEABAFAAIAAAHg");
	this.shape_32.setTransform(112.3,-46.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#525E6C").s().p("AgjAnQgPgPAAgYQAAgXAOgPQAOgPAWAAQAXAAAOAPQAOAPAAAXQAAAWgOAQQgOAQgXAAQgUAAgPgPgAgVgfQgHAMABATQAAATAGANQAIAOANAAQAPAAAGgOQAIgMgBgUQAAgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_33.setTransform(100.4,-43.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#525E6C").s().p("AgjAnQgOgPAAgYQAAgXANgPQAPgPAVAAQAXAAAOAPQAOAPAAAXQgBAWgNAQQgOAQgXAAQgVAAgOgPgAgVgfQgHAMAAATQABATAGANQAIAOANAAQAOAAAIgOQAGgMAAgUQAAgTgFgMQgIgOgPAAQgOAAgHAOg");
	this.shape_34.setTransform(88.8,-43.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#525E6C").s().p("AgmBTIABgoIAAhmQAAgJgGgEQgDgCgLgBIAAgGIAngDIABACIAABHIABAAQAMgNARAAQATAAANAOQANAPAAAYQAAAWgPAQQgPAPgUAAQgOAAgRgJIgIAMgAgRgDIAAA7QAHATARAAQANAAAIgMQAIgMAAgWQAAgSgHgLQgIgNgQAAQgNAAgJAKg");
	this.shape_35.setTransform(76.4,-46.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#525E6C").s().p("AgrAvQgIgHAAgKQAAgWAWgIIAUgGQAMgFAFgCIAAgKQAAgHgDgGQgFgJgKAAQgKAAgFAFIACANQABAFgEACQgEADgFAAQgKAAAAgMQAAgJALgIQAMgGANgBQASAAAIAGQALAHAAAVIgBAyQAAADACADQADAEAFAAQAHAAABgQIAHAAQgCAcgWAAQgPAAgFgOIAAAAQgMAOgVAAQgLABgHgHgAgSAGQgLAHAAAMQAAARAPAAQAMAAAJgLIABgjQgTAEgHAGg");
	this.shape_36.setTransform(60.6,-43.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#525E6C").s().p("AgrBEQgOgPAAgYQAAgXAQgOQAOgPAVAAQANAAAMAHIAAgpQgBgJgFgDQgEgEgOgBIAAgGIArgDIABACIAACMQABAHAFAEQACABALABIAAAGIglADIgCgCIAAgJIAAAAQgNAOgQAAQgUgBgNgPgAgagDQgIAMAAAWQAAARAHALQAJAOAQAAQALAAAKgMIAAg7QgGgSgSABQgNAAgIAMg");
	this.shape_37.setTransform(43.3,-46.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#525E6C").s().p("AAHA0IAAgHIAKgBQAHgCAAgIIAAgxQgBgLgFgHQgGgGgHAAQgJAAgIAGQgHAEgCAGIAAA4QAAAHAFADQAFACAGAAIAAAHIg0AAIAAgHIAKgBQAFgCABgIIAAg8QgBgIgFgEQgEgCgHgBIAAgGIAjgDIACACIAAAPIAAAAQAKgKAEgCQAJgGAMAAQAdAAAAAjIAAAyQAAAHAHACQAEACAFAAIAAAHg");
	this.shape_38.setTransform(30.4,-43.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#525E6C").s().p("AgXBPIAAgHIAKgBQAGgCAAgIIAAg9QgBgHgFgEQgFgDgIAAIAAgHIAkgCIACABIAABSQAAAHAGADQAFACAEAAIAAAHgAgJg3QgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_39.setTransform(20.6,-46.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#525E6C").s().p("Ag9BLIAAgHIASgCQAHgDAAgIIAAhrQAAgIgHgDQgIgDgKgBIAAgHIB7AAIAAAmIgJAAQgCgIgHgKQgIgKgHgBIgSgBIgYAAIAAA9IARAAQAMAAAIgHQAFgFACgOIAHAAIAAA9IgHAAIgDgMQgCgHgCgCQgHgHgNAAIgRAAIAAA0QAAAIAHADQAGACAJABIAAAHg");
	this.shape_40.setTransform(11,-45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-33,-57,188.1,104), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.box_speak();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,500), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAhIgUghIgIAHIAAAaIgJAAIAAhBIAJAAIAAAcIAagcIAMAAIgYAaIAaAng");
	this.shape.setTransform(37.3,-36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAZQgKgJAAgQQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAQgKAJQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAAMAHAGQAIAIAJgBQALABAHgIQAHgGAAgMQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_1.setTransform(29.5,-36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAZQgKgJAAgQQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAQgKAJQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAAMAHAGQAIAIAJgBQALABAHgIQAHgGAAgMQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_2.setTransform(21.2,-36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIASAAQAKAAAFADQAHAFAAAIQAAAGgDADQgCAFgFABQAOACAAANQABAJgIAFQgFAFgKAAgAgNAZIAKAAQAIAAADgCQAFgDAAgGQAAgGgFgDQgDgCgIgBIgKAAgAgNgEIAIAAQAHAAACgCQAEgDABgGQgBgGgEgCQgDgCgFAAIgJAAg");
	this.shape_3.setTransform(14.1,-36.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAZQgKgJAAgQQAAgOAKgKQAKgJANAAQAOAAAKAJQAKAKAAAOQAAAQgKAJQgKAJgOAAQgNAAgKgJgAgRgSQgHAHAAALQAAAMAHAGQAIAIAJgBQALABAHgIQAHgGAAgMQAAgLgHgHQgIgHgKAAQgJAAgIAHg");
	this.shape_4.setTransform(6.5,-36.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAhIAAhBIAIAAIAABBg");
	this.shape_5.setTransform(0.8,-36.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAUAAQANAAAKAIQALAKAAAOQAAAPgLAKQgKAIgNAAgAgRAZIALAAQAKAAAGgGQAIgHAAgMQAAgLgIgHQgGgHgKAAIgLAAg");
	this.shape_6.setTransform(-4.3,-36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAaQgFgHAAgOIAAgmIAJAAIAAAlIABAGQAAAHACADQAEAFAIABQAJgBAEgFIACgFIABgLIAAglIAJAAIAAAmQAAAOgFAHQgHAHgNAAQgMAAgHgHg");
	this.shape_7.setTransform(-11.8,-36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVAhIgHgRIgcAAIgGARIgKAAIAbhBIAHAAIAbBBgAALAIIgLgdIgLAdIAWAAg");
	this.shape_8.setTransform(-18.9,-36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAmAAIAAAHIgdAAIAAAVIAbAAIAAAGIgbAAIAAAXIAeAAIAAAIg");
	this.shape_9.setTransform(-27.9,-36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAhIAAhBIAmAAIAAAHIgdAAIAAAVIAbAAIAAAGIgbAAIAAAXIAeAAIAAAIg");
	this.shape_10.setTransform(-33.7,-36.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAhIgQgcIgHAAIAAAcIgJAAIAAhBIASAAQAJAAAGAEQAHAFAAAKQAAAHgFAFQgEADgGACIASAdgAgMgCIAHAAQAHAAADgCQAEgEAAgFQAAgGgEgDQgDgDgHAAIgHAAg");
	this.shape_11.setTransform(-39.5,-36.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAhIAAhBIAjAAIAAAHIgaAAIAAAXIAZAAIAAAHIgZAAIAAAcg");
	this.shape_12.setTransform(-45.4,-36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#525E6C").s().p("AoAByIAAjjIQCAAIAADjg");
	this.shape_13.setTransform(-3.9,-36.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-55.3,-48.3,102.7,22.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,600,500), null);


// stage content:
(lib._300x250_speak = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:1.8,regY:-46.4,x:91.4,y:207.8,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:207.7,alpha:0.008},0).wait(1).to({alpha:0.015},0).wait(1).to({y:207.6,alpha:0.026},0).wait(1).to({y:207.5,alpha:0.04},0).wait(1).to({y:207.3,alpha:0.059},0).wait(1).to({y:207.1,alpha:0.084},0).wait(1).to({y:206.8,alpha:0.117},0).wait(1).to({y:206.4,alpha:0.163},0).wait(1).to({y:205.9,alpha:0.225},0).wait(1).to({y:205.2,alpha:0.312},0).wait(1).to({y:204.3,alpha:0.421},0).wait(1).to({y:203.3,alpha:0.532},0).wait(1).to({y:202.6,alpha:0.624},0).wait(1).to({y:202,alpha:0.695},0).wait(1).to({y:201.5,alpha:0.75},0).wait(1).to({y:201.1,alpha:0.795},0).wait(1).to({y:200.8,alpha:0.831},0).wait(1).to({y:200.6,alpha:0.86},0).wait(1).to({y:200.4,alpha:0.885},0).wait(1).to({y:200.2,alpha:0.906},0).wait(1).to({y:200,alpha:0.924},0).wait(1).to({y:199.9,alpha:0.939},0).wait(1).to({y:199.8,alpha:0.952},0).wait(1).to({y:199.7,alpha:0.962},0).wait(1).to({y:199.6,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:199.5,alpha:0.985},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:199.4,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:150,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regX:-3.9,regY:-36.9,x:88.8,y:149.3,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:149.2,alpha:0.008},0).wait(1).to({y:149.1,alpha:0.015},0).wait(1).to({y:149,alpha:0.026},0).wait(1).to({y:148.8,alpha:0.04},0).wait(1).to({y:148.6,alpha:0.059},0).wait(1).to({y:148.3,alpha:0.084},0).wait(1).to({y:147.9,alpha:0.117},0).wait(1).to({y:147.3,alpha:0.163},0).wait(1).to({y:146.6,alpha:0.225},0).wait(1).to({y:145.6,alpha:0.312},0).wait(1).to({y:144.2,alpha:0.421},0).wait(1).to({y:142.9,alpha:0.532},0).wait(1).to({y:141.8,alpha:0.624},0).wait(1).to({y:141,alpha:0.695},0).wait(1).to({y:140.3,alpha:0.75},0).wait(1).to({y:139.8,alpha:0.795},0).wait(1).to({y:139.3,alpha:0.831},0).wait(1).to({y:139,alpha:0.86},0).wait(1).to({y:138.7,alpha:0.885},0).wait(1).to({y:138.4,alpha:0.906},0).wait(1).to({y:138.2,alpha:0.924},0).wait(1).to({y:138,alpha:0.939},0).wait(1).to({y:137.9,alpha:0.952},0).wait(1).to({y:137.8,alpha:0.962},0).wait(1).to({y:137.6,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:137.5,alpha:0.985},0).wait(1).to({y:137.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:137.3,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:57.3,regY:8,x:150,y:182.2},0).wait(77).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:143.1,y:176.2,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:150,y:182.2,alpha:1},5).wait(80));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:61.1,regY:-7.2,x:90.8,y:133.2},0).wait(1).to({y:133.1,alpha:0.002},0).wait(1).to({alpha:0.004},0).wait(1).to({y:133,alpha:0.007},0).wait(1).to({y:132.8,alpha:0.011},0).wait(1).to({y:132.6,alpha:0.016},0).wait(1).to({y:132.4,alpha:0.023},0).wait(1).to({y:132,alpha:0.032},0).wait(1).to({y:131.7,alpha:0.043},0).wait(1).to({y:131.2,alpha:0.056},0).wait(1).to({y:130.6,alpha:0.071},0).wait(1).to({y:129.9,alpha:0.091},0).wait(1).to({y:129.1,alpha:0.114},0).wait(1).to({y:128,alpha:0.143},0).wait(1).to({y:126.8,alpha:0.179},0).wait(1).to({y:125.1,alpha:0.224},0).wait(1).to({y:123.1,alpha:0.28},0).wait(1).to({y:120.7,alpha:0.348},0).wait(1).to({y:117.9,alpha:0.425},0).wait(1).to({y:115.1,alpha:0.503},0).wait(1).to({y:112.6,alpha:0.572},0).wait(1).to({y:110.5,alpha:0.631},0).wait(1).to({y:108.7,alpha:0.681},0).wait(1).to({y:107.2,alpha:0.723},0).wait(1).to({y:105.9,alpha:0.758},0).wait(1).to({y:104.8,alpha:0.788},0).wait(1).to({y:103.9,alpha:0.814},0).wait(1).to({y:103.1,alpha:0.837},0).wait(1).to({y:102.3,alpha:0.858},0).wait(1).to({y:101.7,alpha:0.875},0).wait(1).to({y:101.1,alpha:0.891},0).wait(1).to({y:100.6,alpha:0.905},0).wait(1).to({y:100.2,alpha:0.918},0).wait(1).to({y:99.7,alpha:0.929},0).wait(1).to({y:99.4,alpha:0.939},0).wait(1).to({y:99.1,alpha:0.948},0).wait(1).to({y:98.8,alpha:0.956},0).wait(1).to({y:98.5,alpha:0.963},0).wait(1).to({y:98.3,alpha:0.969},0).wait(1).to({y:98.1,alpha:0.975},0).wait(1).to({y:97.9,alpha:0.98},0).wait(1).to({y:97.8,alpha:0.984},0).wait(1).to({y:97.6,alpha:0.988},0).wait(1).to({y:97.5,alpha:0.991},0).wait(1).to({y:97.4,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({y:97.3,alpha:0.997},0).wait(1).to({alpha:0.998},0).wait(1).to({y:97.2,alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:156.4},0).wait(35).to({regX:61.1,regY:-7.2,x:90.8,y:97.1},0).wait(1).to({y:96.9},0).wait(1).to({y:96.4},0).wait(1).to({y:95.6},0).wait(1).to({y:94.3},0).wait(1).to({y:92.3},0).wait(1).to({y:89},0).wait(1).to({y:83.6},0).wait(1).to({y:77.5},0).wait(1).to({y:73.1},0).wait(1).to({y:70.1},0).wait(1).to({y:68},0).wait(1).to({y:66.5},0).wait(1).to({y:65.3},0).wait(1).to({y:64.4},0).wait(1).to({y:63.7},0).wait(1).to({y:63.2},0).wait(1).to({y:62.8},0).wait(1).to({y:62.5},0).wait(1).to({y:62.3},0).wait(1).to({y:62.2},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:121.4},0).wait(37).to({regX:61.1,regY:-7.2,x:90.8,y:62.2,alpha:0.997},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.72},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.335},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.045},0).wait(1).to({alpha:0.027},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.001},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:121.4,alpha:0},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(162).to({_off:false},0).wait(1).to({regX:62.8,regY:23.6,x:92.5,y:68,alpha:0.001},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.024},0).wait(1).to({alpha:0.04},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.799},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.874},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.956},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.977},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.998},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:96.4,alpha:1},0).wait(97));

	// img
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,340.1,0.567,0.567,0,0,0,299.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:300,scaleX:0.5,scaleY:0.5,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130,124.9,340.2,283.5);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box_speak.jpg", id:"box_speak"}
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