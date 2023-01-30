(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_Hus_ExB_atlas_", frames: [[200,0,241,174],[0,0,198,400]]}
];


// symbols:



(lib.bb_phone_speed = function() {
	this.spriteSheet = ss["300x250_Hus_ExB_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_PhoneTag = function() {
	this.spriteSheet = ss["300x250_Hus_ExB_atlas_"];
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_phone_speed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,241,174), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AgiAyQgOgKgBgWIAeAAQABASAUAAQAHAAAFgCQAGgEAAgFQAAgHgKgDIgWgHQgPgFgIgEQgKgJAAgOQAAgRAPgKQANgHARgBQATAAANAJQAOAKAAASIgeAAQABgHgGgEQgFgCgHAAQgOAAAAAJQAAAGAKADQAFADARADQAPAEAHAHQALAHAAAOQAAAUgQAKQgNAJgVAAQgUAAgOgKg");
	this.shape.setTransform(240.5,78.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AgOA5IAAhYIgiAAIAAgZIBhAAIAAAZIgjAAIAABYg");
	this.shape_1.setTransform(230.1,78.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AATA5IgnhGIAABGIgcAAIAAhxIAeAAIAnBFIAAAAIAAhFIAcAAIAABxg");
	this.shape_2.setTransform(218.9,78.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AgOA5IAAhxIAdAAIAABxg");
	this.shape_3.setTransform(210.5,78.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AgpAqQgOgRAAgZQAAgZAOgRQAQgRAZAAQAaAAAQARQAOARAAAZQAAAZgOARQgQARgaABQgZgBgQgRgAgTgXQgHAJAAAOQAAAOAHAJQAHALAMAAQANAAAHgLQAHgJAAgOQAAgOgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_4.setTransform(201.8,78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AgvA5IAAhxIA1AAQATAAAKAIQANAJAAAUQAAAmgqAAIgXAAIAAAmgAgRgDIATAAQAQAAAAgOQAAgPgQgBIgTAAg");
	this.shape_5.setTransform(190.5,78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AgiAyQgOgKgBgWIAeAAQABASAUAAQAHAAAFgCQAGgEAAgFQAAgHgKgDIgWgHQgPgFgIgEQgKgJAAgOQAAgRAPgKQANgHARgBQATAAANAJQAOAKAAASIgeAAQABgHgGgEQgFgCgHAAQgOAAAAAJQAAAGAKADQAFADARADQAPAEAHAHQALAHAAAOQAAAUgQAKQgNAJgVAAQgUAAgOgKg");
	this.shape_6.setTransform(174.3,78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AglAuQgMgMAAgZIAAhCIAeAAIAABDQAAAMAFAFQAEAGAKAAQALAAAEgGQAFgFAAgMIAAhDIAeAAIAABCQAAAZgMAMQgMAMgaAAQgZAAgMgMg");
	this.shape_7.setTransform(163.1,78.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AATA5IgnhGIAABGIgcAAIAAhxIAeAAIAnBFIAAAAIAAhFIAcAAIAABxg");
	this.shape_8.setTransform(151.2,78.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AgpAqQgOgRAAgZQAAgZAOgRQAQgRAZAAQAaAAAQARQAOARAAAZQAAAZgOARQgQARgaABQgZgBgQgRgAgTgXQgHAJAAAOQAAAOAHAJQAHALAMAAQANAAAHgLQAHgJAAgOQAAgOgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_9.setTransform(139.1,78.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("AgxA5IAAhxIA1AAQApgBAAAeQAAAPgPAIQAJACAGAHQAFAHAAAKQAAAjgtAAgAgTAhIAXAAQAQAAAAgMQAAgOgQAAIgXAAgAgTgLIAWAAQAFAAADgCQAEgDAAgGQAAgLgMAAIgWAAg");
	this.shape_10.setTransform(127.3,78.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah0CGQghgzAAhTQAAhSAhgzQAng7BLAAQBNAAAoA7QAjAzAABSQAABTgjAzQgoA7hNAAQhLAAgng7gAg0hNQgJAaAAAzQAAA0AJAaQAOApAmAAQAoAAAOgpQAIgZAAg1QAAg0gIgZQgOgogoAAQgmAAgOAog");
	this.shape_11.setTransform(231.4,43.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah0CGQghgzAAhTQAAhSAhgzQAng7BLAAQBNAAAoA7QAjAzAABSQAABTgjAzQgoA7hNAAQhLAAgng7gAg0hNQgJAaAAAzQAAA0AJAaQAOApAmAAQAoAAAOgpQAIgZAAg1QAAg0gIgZQgOgogoAAQgmAAgOAog");
	this.shape_12.setTransform(197.4,43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah0CGQghgzAAhTQAAhSAhgzQAng7BLAAQBNAAAoA7QAjAzAABSQAABTgjAzQgoA7hNAAQhLAAgng7gAg0hNQgJAaAAAzQAAA0AJAaQAOApAmAAQAoAAAOgpQAIgZAAg1QAAg0gIgZQgOgogoAAQgmAAgOAog");
	this.shape_13.setTransform(163.4,43.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCC8IAAjmIhbAAIAAhDQAtABAegSQAhgUADgpIBMAAIAAF3g");
	this.shape_14.setTransform(130.4,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiAyQgOgKgBgWIAeAAQABASAUAAQAHAAAFgCQAGgDAAgGQAAgHgKgDIgWgHQgPgFgIgEQgKgJAAgOQAAgRAPgKQANgHARgBQATAAANAJQAOAKAAASIgeAAQABgHgGgEQgFgDgHAAQgOAAAAAKQAAAGAKADQAFADARADQAPAFAHAGQALAHAAAOQAAAVgQAJQgNAJgVAAQgUAAgOgKg");
	this.shape_15.setTransform(240.5,79.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA5IAAhXIgiAAIAAgaIBhAAIAAAaIgjAAIAABXg");
	this.shape_16.setTransform(230.1,79.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATA5IgnhGIAABGIgcAAIAAhxIAeAAIAnBFIAAAAIAAhFIAcAAIAABxg");
	this.shape_17.setTransform(218.9,79.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOA5IAAhxIAdAAIAABxg");
	this.shape_18.setTransform(210.5,79.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpAqQgOgRAAgZQAAgZAOgRQAQgRAZAAQAaAAAQARQAOARAAAZQAAAZgOARQgQASgaAAQgZAAgQgSgAgTgXQgHAJAAAOQAAAOAHAJQAHALAMAAQANAAAHgLQAHgJAAgOQAAgOgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_19.setTransform(201.8,79.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvA5IAAhxIA1AAQATAAAKAIQANAJAAAUQAAAmgqAAIgXAAIAAAmgAgRgDIATAAQAQAAAAgPQAAgPgQAAIgTAAg");
	this.shape_20.setTransform(190.5,79.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiAyQgOgKgBgWIAeAAQABASAUAAQAHAAAFgCQAGgDAAgGQAAgHgKgDIgWgHQgPgFgIgEQgKgJAAgOQAAgRAPgKQANgHARgBQATAAANAJQAOAKAAASIgeAAQABgHgGgEQgFgDgHAAQgOAAAAAKQAAAGAKADQAFADARADQAPAFAHAGQALAHAAAOQAAAVgQAJQgNAJgVAAQgUAAgOgKg");
	this.shape_21.setTransform(174.3,79.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AglAuQgMgMAAgZIAAhCIAeAAIAABDQAAAMAFAFQAEAGAKAAQALAAAEgGQAFgFAAgMIAAhDIAeAAIAABCQAAAZgMAMQgMAMgaAAQgZAAgMgMg");
	this.shape_22.setTransform(163.1,79.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATA5IgnhGIAABGIgcAAIAAhxIAeAAIAnBFIAAAAIAAhFIAcAAIAABxg");
	this.shape_23.setTransform(151.2,79.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgpAqQgOgRAAgZQAAgZAOgRQAQgRAZAAQAaAAAQARQAOARAAAZQAAAZgOARQgQASgaAAQgZAAgQgSgAgTgXQgHAJAAAOQAAAOAHAJQAHALAMAAQANAAAHgLQAHgJAAgOQAAgOgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_24.setTransform(139.1,79.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgxA5IAAhxIA1AAQApgBAAAeQAAAPgPAIQAJACAGAHQAFAHAAAKQAAAjgtAAgAgTAhIAXAAQAQAAAAgMQAAgOgQAAIgXAAgAgTgLIAWAAQAFAAADgCQAEgDAAgGQAAgLgMAAIgWAAg");
	this.shape_25.setTransform(127.3,79.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ah0CGQghgzAAhTQAAhSAhgzQAng7BLAAQBNAAAoA7QAjAzAABSQAABTgjAzQgoA7hNAAQhLAAgng7gAg0hMQgJAZAAAzQAAA0AJAaQAOApAmAAQAoAAAOgpQAIgZAAg1QAAg0gIgYQgOgpgoAAQgmAAgOApg");
	this.shape_26.setTransform(233.4,44.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ah0CGQghgzAAhTQAAhSAhgzQAng7BLAAQBNAAAoA7QAjAzAABSQAABTgjAzQgoA7hNAAQhLAAgng7gAg0hMQgJAZAAAzQAAA0AJAaQAOApAmAAQAoAAAOgpQAIgZAAg1QAAg0gIgYQgOgpgoAAQgmAAgOApg");
	this.shape_27.setTransform(199.4,44.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah0CGQghgzAAhTQAAhSAhgzQAng7BLAAQBNAAAoA7QAjAzAABSQAABTgjAzQgoA7hNAAQhLAAgng7gAg0hMQgJAZAAAzQAAA0AJAaQAOApAmAAQAoAAAOgpQAIgZAAg1QAAg0gIgYQgOgpgoAAQgmAAgOApg");
	this.shape_28.setTransform(165.4,44.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCC8IAAjmIhbAAIAAhDQAtABAegSQAhgUADgpIBMAAIAAF3g");
	this.shape_29.setTransform(132.4,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(113.4,22,139.2,70), null);


(lib.shine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.349)","rgba(255,255,255,0)"],[0,0.467,1],-15.1,-8.8,15.2,8.7).s().p("AlBDPIFUpLIEuCuIlSJLg");
	this.shape.setTransform(32.2,52.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shine, new cjs.Rectangle(0,14,64.3,76.3), null);


(lib.gascan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_PhoneTag();
	this.instance.parent = this;
	this.instance.setTransform(-156,-69,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(-156,-69,99,200), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E43").s().p("AwULKMAgpgWeIAAWpg");
	this.shape.setTransform(199.5,180.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E43").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,304,253.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:6.1}).wait(111).to({graphics:null,x:0,y:0}).wait(42));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({x:-50.5},0).to({_off:true},29).wait(42));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAfQgJgHAAgMIAPAAQAAAHAFADQAEADAGAAQAGAAADgBQAFgDAAgFQAAgFgHgCIgNgEQgKgDgFgDQgGgFAAgJQAAgKAIgGQAIgFAKAAQAMAAAHAFQAJAGAAAMIgPAAQgBgLgMAAQgFAAgDACQgDACAAAEQAAAEAEACIAQAFQAIACAFADQAIAEAAALQAAAKgHAGQgIAGgOAAQgMAAgJgGg");
	this.shape.setTransform(76.8,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAPAAIAAA6IAiAAIAAANg");
	this.shape_1.setTransform(70.9,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAkIAAhHIAPAAIAABHg");
	this.shape_2.setTransform(66.2,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAkIgGgQIgZAAIgGAQIgQAAIAbhHIAPAAIAbBHgAAJAIIgJgZIAAAAIgIAZIARAAg");
	this.shape_3.setTransform(61.3,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAkIAAg5IgVAAIAAgOIA5AAIAAAOIgVAAIAAA5g");
	this.shape_4.setTransform(54.9,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA0AAIAAAOIgkAAIAAAPIAhAAIAAALIghAAIAAASIAlAAIAAANg");
	this.shape_5.setTransform(48.8,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAkIAAhHIAfAAQAOAAAIAJQAJAJAAARQAAAQgHAJQgJALgPAAgAgPAXIAOAAQAHAAAEgFQAGgGAAgLQAAgKgFgGQgEgGgLAAIgLAAg");
	this.shape_6.setTransform(41.8,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAkIgCgIIgBgJQAAgGgDgDQgDgCgFAAIgPAAIAAAcIgQAAIAAhHIAmAAQAJAAAGAGQAGAGAAAIQAAANgMAEIAAAAQAKADABAOIAAAIQABAGACADgAgOgCIAQAAQALAAAAgLQAAgJgLAAIgQAAg");
	this.shape_7.setTransform(31.8,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA1AAIAAAOIgmAAIAAAPIAiAAIAAALIgiAAIAAASIAmAAIAAANg");
	this.shape_8.setTransform(25,5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAxAAIAAAOIghAAIAAAQIAcAAIAAALIgcAAIAAAeg");
	this.shape_9.setTransform(18.9,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAxAAIAAAOIgiAAIAAAQIAeAAIAAALIgeAAIAAAeg");
	this.shape_10.setTransform(13,5.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAKALQAJAKAAAPQAAAQgJALQgKAKgQAAQgPAAgKgKgAgOgQQgEAHAAAJQAAAKAEAHQAFAHAJAAQAJAAAGgHQAFgHgBgKQABgJgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_11.setTransform(5.9,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},111).wait(42));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BAEDB").s().p("AnBB4QgeAAAAgZIAAi9QAAgZAeAAIODAAQAeAAAAAZIAAC9QAAAZgeAAg");
	this.shape_12.setTransform(41,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},111).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.4,96,25);


// stage content:
(lib._300x250_Hus_ExB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(513,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:-106.5,regY:31,x:325.9,y:131.2},0).wait(1).to({x:282.5,y:131.7},0).wait(1).to({x:235.5,y:132.2},0).wait(1).to({x:194.4,y:132.6},0).wait(1).to({x:161.4,y:132.9},0).wait(1).to({x:135.2,y:133.2},0).wait(1).to({x:114.6,y:133.4},0).wait(1).to({x:98.5,y:133.6},0).wait(1).to({x:85.9,y:133.7},0).wait(1).to({x:76.1,y:133.8},0).wait(1).to({x:68.8,y:133.9},0).wait(1).to({x:63.6},0).wait(1).to({x:60.1,y:134},0).wait(1).to({x:58.1},0).wait(1).to({regX:52,regY:68,x:216,y:171},0).wait(1).to({regX:-106.5,regY:31,x:57.6,y:134},0).wait(1).to({x:58},0).wait(1).to({x:58.8},0).wait(1).to({x:60.5},0).wait(1).to({x:63.6},0).wait(1).to({x:65.9},0).wait(1).to({x:66.9},0).wait(1).to({x:67.4},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(87));

	// Layer_1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(383.5,118,1,1,0,0,0,120.5,87);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({x:355.3,y:118.3,alpha:0.942},0).wait(1).to({x:312.4,y:118.7,alpha:0.854},0).wait(1).to({x:266.1,y:119.2,alpha:0.759},0).wait(1).to({x:225.6,y:119.6,alpha:0.676},0).wait(1).to({x:193,y:120,alpha:0.609},0).wait(1).to({x:167.2,y:120.2,alpha:0.556},0).wait(1).to({x:146.9,y:120.4,alpha:0.514},0).wait(1).to({x:130.9,y:120.6,alpha:0.481},0).wait(1).to({x:118.5,y:120.7,alpha:0.456},0).wait(1).to({x:108.9,y:120.8,alpha:0.436},0).wait(1).to({x:101.7,y:120.9,alpha:0.421},0).wait(1).to({x:96.5,alpha:0.411},0).wait(1).to({x:93.1,y:121,alpha:0.404},0).wait(1).to({x:91.2,alpha:0.4},0).wait(1).to({x:90.5,alpha:0.398},0).wait(1).to({x:90.4,alpha:0.394},0).wait(1).to({x:89.6,alpha:0.38},0).wait(1).to({x:88,alpha:0.347},0).wait(1).to({x:84.5,alpha:0.277},0).wait(1).to({x:78.3,alpha:0.155},0).wait(1).to({x:73.8,alpha:0.064},0).wait(1).to({x:71.7,alpha:0.022},0).wait(1).to({x:70.8,alpha:0.005},0).wait(1).to({x:70.5,alpha:0},0).wait(87));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_3 = new cjs.Graphics().p("AH0QQIAAxLMAi2AAAIAARLg");
	var mask_graphics_4 = new cjs.Graphics().p("AGRQbIAAxMMAi2AAAIAARMg");
	var mask_graphics_5 = new cjs.Graphics().p("AD6QrIAAxMMAi2AAAIAARMg");
	var mask_graphics_6 = new cjs.Graphics().p("ABdQ8IAAxMMAi1AAAIAARMg");
	var mask_graphics_7 = new cjs.Graphics().p("AgnRKIAAxMMAi1AAAIAARMg");
	var mask_graphics_8 = new cjs.Graphics().p("AiPRVIAAxNMAi0AAAIAARNg");
	var mask_graphics_9 = new cjs.Graphics().p("AjgRdIAAxMMAi0AAAIAARMg");
	var mask_graphics_10 = new cjs.Graphics().p("AkfRkIAAxNMAi1AAAIAARNg");
	var mask_graphics_11 = new cjs.Graphics().p("AlPRpIAAxMMAi0AAAIAARMg");
	var mask_graphics_12 = new cjs.Graphics().p("Al0RtIAAxNMAi1AAAIAARNg");
	var mask_graphics_13 = new cjs.Graphics().p("AmPRwIAAxNMAi0AAAIAARNg");
	var mask_graphics_14 = new cjs.Graphics().p("AmjRyIAAxNMAi1AAAIAARNg");
	var mask_graphics_15 = new cjs.Graphics().p("AmwRzIAAxMMAi1AAAIAARMg");
	var mask_graphics_16 = new cjs.Graphics().p("Am3R0IAAxMMAi1AAAIAARMg");
	var mask_graphics_17 = new cjs.Graphics().p("Am5R0IAAxMMAi0AAAIAARMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_3,x:273,y:104}).wait(1).to({graphics:mask_graphics_4,x:263.1,y:105.1}).wait(1).to({graphics:mask_graphics_5,x:248,y:106.7}).wait(1).to({graphics:mask_graphics_6,x:232.2,y:108.4}).wait(1).to({graphics:mask_graphics_7,x:219,y:109.8}).wait(1).to({graphics:mask_graphics_8,x:208.5,y:110.9}).wait(1).to({graphics:mask_graphics_9,x:200.4,y:111.7}).wait(1).to({graphics:mask_graphics_10,x:194.2,y:112.4}).wait(1).to({graphics:mask_graphics_11,x:189.3,y:112.9}).wait(1).to({graphics:mask_graphics_12,x:185.7,y:113.3}).wait(1).to({graphics:mask_graphics_13,x:182.9,y:113.6}).wait(1).to({graphics:mask_graphics_14,x:181,y:113.8}).wait(1).to({graphics:mask_graphics_15,x:179.7,y:113.9}).wait(1).to({graphics:mask_graphics_16,x:179,y:114}).wait(1).to({graphics:mask_graphics_17,x:178.8,y:114}).wait(97));

	// masked
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(186.1,199.5,1,1,0,0,0,41.1,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAuIAAhbIAOAAIAABbg");
	this.shape.setTransform(277.5,163.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAuIAAhbIAOAAIAABbg");
	this.shape_1.setTransform(274.4,163.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAuIAAhBIANAAIAABBgAgGggIAAgNIANAAIAAANg");
	this.shape_2.setTransform(271.3,163.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAuIAAg2IgMAAIAAgLIAMAAIAAgHQgBgLAGgFQADgDAJAAIAKABIAAALIgGgBQgIAAAAAIIAAAHIANAAIAAALIgNAAIAAA2g");
	this.shape_3.setTransform(267.8,163.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgmIgMAAIAAgLIAMAAIAAgVIANAAIAAAVIAOAAIAAALIgOAAIAAAjQAAAEABACQACACAEABIAHgBIAAALIgKABQgKAAgEgEg");
	this.shape_4.setTransform(259.8,163.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAhIgRgZIgQAZIgSAAIAagiIgYgfIASAAIAOAUIAPgUIARAAIgYAeIAbAjg");
	this.shape_5.setTransform(254.3,164.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAZQgIgJAAgQQAAgOAJgKQAJgLANAAQAQAAAJANQAJALgCAPIgwAAQAAAIAEAFQAFAHAIgBQAMABAEgLIAOAAQgCAKgJAHQgIAFgLAAQgPAAgJgKgAARgFQAAgHgFgGQgEgFgIAAQgGAAgFAFQgFAGAAAHIAhAAIAAAAg");
	this.shape_6.setTransform(247.3,164.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAiIAAgpQgBgPgNAAQgGAAgEAFQgFAGAAAHIAAAmIgOAAIAAhBIANAAIAAAJIAAABQAIgNANAAQAKABAHAFQAHAGgBALIAAAtg");
	this.shape_7.setTransform(239.9,164.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAiIAAhBIAOAAIAAAMIABAAQABgFAFgFQAGgFAGAAIAGABIAAAOIgGgBQgJAAgFAHQgEAGAAAKIAAAfg");
	this.shape_8.setTransform(230.8,164.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAIIAAgpIAPAAIAAAnQAAAQANAAQAPAAAAgSIAAglIAPAAIAABBIgPAAIAAgJQgCAFgGADQgFADgFAAQgZAAAAgag");
	this.shape_9.setTransform(224.3,164.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAZQgJgKAAgPQAAgPAJgJQAJgLAPAAQAQAAAJALQAJAJAAAPQAAAPgJAKQgJAKgQAAQgPAAgJgKgAgNgPQgFAGAAAJQAAAKAFAGQAFAHAIAAQAJAAAGgHQAEgGAAgKQAAgJgEgGQgGgIgJAAQgIAAgFAIg");
	this.shape_10.setTransform(216.7,164.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAuIAAgMIAHABQAFAAACgDIADgHIACgFIgZhCIAQAAIAQAxIABAAIARgxIAPAAIgaBGQgFAMgCAEQgFAHgLAAIgKgBg");
	this.shape_11.setTransform(209.5,165.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAiIAAgpQgBgPgNAAQgGAAgEAFQgFAGAAAHIAAAmIgOAAIAAhBIANAAIAAAJIAAABQAIgNANAAQAKABAHAFQAGAGAAALIAAAtg");
	this.shape_12.setTransform(198.9,164.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAZQgJgKAAgPQAAgPAJgJQAJgLAPAAQAQAAAJALQAJAJAAAPQAAAPgJAKQgJAKgQAAQgPAAgJgKgAgNgPQgFAGAAAJQAAAKAFAGQAFAHAIAAQAKAAAEgHQAFgGAAgKQAAgJgFgGQgEgIgKAAQgIAAgFAIg");
	this.shape_13.setTransform(191.3,164.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAoQgJgIgBgOIAPAAQABAIAEAEQAFAEAGAAQARAAAAgUQAAgIgEgGQgFgEgIAAQgLAAgDAIIgPAAIAKgyIAuAAIAAANIgjAAIgFAYQAHgHAJAAQANAAAIAJQAIAHAAAOQAAAMgIAJQgIALgQAAQgNAAgIgGg");
	this.shape_14.setTransform(180.2,163.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCA7IAAgLQgOAAgIgIQgJgIAAgOIAPAAQAAASAQABIAAggQgNgEgHgDQgJgIAAgMQAAgMAJgHQAJgHALAAIAAgKIAFAAIAAAKQAMAAAIAGQAJAHgBANIgOAAQAAgOgOAAIAAAbQAPAEAGAFQAKAGAAANQAAAOgJAIQgIAHgOAAIAAALgAADAlQAQgBAAgPQAAgGgFgEQgDgDgIgCgAgQgXQAAAJAOAEIAAgaQgOAAAAANg");
	this.shape_15.setTransform(173,163.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAZQgIgJAAgQQAAgOAJgKQAJgLANAAQAQAAAJANQAJALgCAPIgwAAQAAAIAEAFQAFAHAIgBQAMABAEgLIAOAAQgCAKgJAHQgIAFgLAAQgPAAgJgKgAARgFQAAgHgFgGQgEgFgIAAQgGAAgFAFQgFAGAAAHIAhAAIAAAAg");
	this.shape_16.setTransform(162.3,164.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAhIgZhBIARAAIAQAyIAQgyIAQAAIgYBBg");
	this.shape_17.setTransform(155.3,164.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAbQgJAJgNgBQgKAAgGgEQgIgGAAgKQAAgKAJgFQAFgDAMgBIAOgCQAFgCAAgFQAAgKgMAAQgOAAgBALIgPAAQACgWAcgBQALAAAHAFQAJAFAAAKIAAAhQAAAGADgBIAEAAIAAAKQgFACgEAAQgLABgBgJgAADADIgJABQgMACABAJQAAAEAEADQAEABAFAAQAFAAAFgCQAGgEAAgGIAAgLIgJADg");
	this.shape_18.setTransform(148.5,164.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAeQgJgHAAgLIAPAAQABALANAAQAPAAAAgIQAAgGgHgCIgOgDQgKgCgFgDQgGgFgBgJQAAgLAKgEQAIgEAKgBQALAAAHAFQAJAFABALIgQAAQgCgJgLAAQgLAAgBAHQABAFAGACIAPAEQAJACAFADQAHAFAAAJQAAAKgKAHQgIAEgMAAQgNAAgHgFg");
	this.shape_19.setTransform(141.4,164.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAlQgIgKAAgPQAAgRAJgJQAIgJAMABQAPAAAGAKIABAAIAAgjIAOAAIAABcIgOAAIAAgJQgGAMgOAAQgPAAgIgLgAgNgDQgEAGAAAKQAAAJAEAGQAFAIAIgBQAJAAAGgHQAEgHAAgJQAAgMgFgEQgFgHgJAAQgIAAgFAIg");
	this.shape_20.setTransform(243.2,147.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAiIAAgpQgBgPgNAAQgGAAgEAGQgFAFAAAHIAAAmIgOAAIAAhBIANAAIAAAJIAAAAQAIgLANAAQAKAAAHAFQAGAGAAALIAAAtg");
	this.shape_21.setTransform(235.8,148.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANAbQgJAJgNAAQgKgBgHgFQgHgFAAgKQAAgKAJgFQAFgDAMgBIAOgCQAFgCAAgGQAAgJgMAAQgOAAgBALIgPAAQACgWAcAAQALgBAHAFQAJAFAAAKIAAAiQAAAEADAAIAEAAIAAAKQgFACgEABQgLAAgBgJgAADADIgJABQgMACABAJQAAAEAEADQAEACAFgBQAFAAAFgCQAGgDAAgHIAAgLIgJADg");
	this.shape_22.setTransform(228.6,148.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAvIAAhbIANAAIAAAJIABAAQAGgLAOAAQAPAAAIAKQAIAKAAAPQABAPgIAJQgIALgOAAQgOAAgHgKIAAAAIAAAhgAgNgcQgFAGAAALQAAALAFAGQAFAGAIAAQAJAAAFgHQAFgGAAgKQgBgKgFgGQgEgIgJAAQgJAAgEAHg");
	this.shape_23.setTransform(217.5,149.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAvIAAhbIAPAAIAAAJIAAAAQAGgLAOAAQAPAAAJAKQAHAKABAPQAAAPgIAJQgHALgPAAQgOAAgHgKIAAAAIAAAhgAgOgcQgEAGAAALQAAALAFAGQAFAGAIAAQAKAAAEgHQAEgGABgKQAAgKgGgGQgEgIgJAAQgIAAgGAHg");
	this.shape_24.setTransform(209.6,149.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAbAuIgJgYIgkAAIgIAYIgRAAIAjhcIARAAIAjBcgAAOAJIgOgmIAAAAIgNAmIAbAAg");
	this.shape_25.setTransform(201.1,147.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAuIAAgMIAHABQAFAAACgDIADgHIACgFIgZhCIAQAAIAQAxIABAAIARgxIAPAAIgaBGQgFAMgCAEQgFAHgLAAIgKgBg");
	this.shape_26.setTransform(189.8,149.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANAuIgTggIgJAJIAAAXIgPAAIAAhcIAPAAIAAA1IAagaIASAAIgaAXIAcAqg");
	this.shape_27.setTransform(183.4,147.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAeQgJgHAAgLIAPAAQABALANAAQAPAAAAgIQAAgGgHgCIgOgEQgKgCgEgCQgIgFAAgJQAAgLAKgFQAHgDALAAQALgBAHAFQAIAGACAKIgPAAQgCgJgMAAQgMAAABAHQAAAFAGADIAOADQALACAEADQAHAEAAAJQAAAMgKAFQgIAFgMABQgMgBgIgFg");
	this.shape_28.setTransform(176.2,148.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAIIAAgpIAPAAIAAAnQAAARANgBQAPABABgTIAAglIAPAAIAABBIgPAAIAAgJQgDAFgGADQgFADgEABQgaAAAAgbg");
	this.shape_29.setTransform(169.1,148.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVAuIAAgpIgpAAIAAApIgQAAIAAhcIAQAAIAAAlIApAAIAAglIAQAAIAABcg");
	this.shape_30.setTransform(160.7,147.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaAuIAAgMIAHABQAFAAACgDIADgHIACgFIgZhCIAQAAIAQAxIABAAIARgxIAPAAIgaBGQgFAMgCAEQgFAHgLAAIgKgBg");
	this.shape_31.setTransform(152.7,149.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAiAiIAAglQAAgLgCgDQgDgFgHAAQgPAAAAASIAAAmIgOAAIAAgpQAAgIgCgDQgDgEgGAAQgHAAgEAEQgEAFAAAJIAAAmIgPAAIAAhBIAOAAIAAAJQAIgLANAAQAOAAAEALQAIgLANAAQAXAAAAAWIAAAtg");
	this.shape_32.setTransform(143.7,148.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_33.setTransform(267.4,132.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOAvIAAgrQAAgOgMAAQgHAAgFAGQgEAEAAAHIAAAoIgPAAIAAhdIAPAAIAAAjIABAAQACgFAGgDQAFgCAFAAQAMgBAGAHQAHAFAAAKIAAAvg");
	this.shape_34.setTransform(260,131.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgnIgMAAIAAgLIAMAAIAAgUIANAAIAAAUIAOAAIAAALIgOAAIAAAjQAAAFABACQACACAEAAIAHAAIAAAMIgKAAQgKAAgEgEg");
	this.shape_35.setTransform(254,131.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAOAvIAAgrQAAgOgMAAQgHAAgEAGQgFAEAAAHIAAAoIgOAAIAAhdIAOAAIAAAjIAAAAQADgFAFgDQAGgCAFAAQALgBAHAHQAGAFAAAKIAAAvg");
	this.shape_36.setTransform(244.7,131.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgnIgMAAIAAgLIAMAAIAAgUIANAAIAAAUIAOAAIAAALIgOAAIAAAjQAAAFABACQACACAEAAIAHAAIAAAMIgKAAQgKAAgEgEg");
	this.shape_37.setTransform(238.7,131.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAvIAAhDIAPAAIAABDgAgHgfIAAgPIAPAAIAAAPg");
	this.shape_38.setTransform(235.1,131.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAMAiIgMgyIgMAyIgPAAIgVhDIAQAAIANAyIABAAIAMgyIAOAAIAMAyIAOgyIAPAAIgVBDg");
	this.shape_39.setTransform(228.5,132.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAvIAAhdIANAAIAABdg");
	this.shape_40.setTransform(218.3,131.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_41.setTransform(213.2,132.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcAIIAAgqIAOAAIAAApQAAAPANAAQAQABAAgTIAAgmIAOAAIAABDIgOAAIAAgKQgDAFgFADQgGAEgEAAQgZgBAAgag");
	this.shape_42.setTransform(205.8,132.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgHAvIAAg4IgMAAIAAgLIAMAAIAAgGQAAgLAFgEQADgFAJAAIAKABIAAAMIgHAAQgHAAAAAGIAAAHIANAAIAAALIgNAAIAAA4g");
	this.shape_43.setTransform(200.1,131.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_44.setTransform(190.9,132.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUAdQgJgFAAgMIAPAAQABAMANgBQAPABAAgJQAAgFgHgDIgOgEQgKgCgFgCQgGgFAAgKQAAgJAJgGQAIgDAKAAQALAAAHAEQAIAFACALIgQAAQgBgJgLAAQgNAAAAAHQAAAFAHADIAPADQAKACAEADQAHAFAAAIQAAAMgKAFQgIAGgMAAQgMAAgIgHg");
	this.shape_45.setTransform(183.9,132.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AANAbQgIAJgOAAQgKAAgGgGQgIgFAAgJQABgMAIgEQAGgDAMgBIAMgDQAHgBgBgGQABgJgNAAQgOAAgBALIgPAAQACgXAcABQALAAAHAEQAJAFAAAKIAAAiQgBAEAEAAIADAAIAAALQgEACgFAAQgJAAgCgJgAADACIgJACQgLACAAAJQAAAEAEADQAEABAFAAQAFAAAFgDQAGgDAAgGIAAgLIgJACg");
	this.shape_46.setTransform(177.1,132.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAPAvIAAgrQgBgOgNAAQgGAAgEAGQgFAEAAAHIAAAoIgOAAIAAhdIAOAAIAAAjIAAAAQADgFAFgDQAGgCAGAAQAKgBAHAHQAGAFAAAKIAAAvg");
	this.shape_47.setTransform(169.6,131.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgWAaQgJgKAAgPQAAgQAJgJQAIgKAPAAQANgBAIAHQAJAGABAMIgPAAQgCgNgNAAQgHAAgFAFQgGAGAAANQAAAJAEAHQAFAGAIAAQAGAAAFgDQAEgFABgGIAPAAQgFAbgaAAQgOgBgJgJg");
	this.shape_48.setTransform(162.3,132.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTAjIAAhDIAOAAIAAAOIABAAQABgHAEgEQAHgEAGAAIAFAAIAAAOIgFgBQgIABgGAFQgEAHAAAKIAAAgg");
	this.shape_49.setTransform(156.9,132.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAIIAAgqIAPAAIAAApQAAAPANAAQAPABAAgTIAAgmIAQAAIAABDIgQAAIAAgKQgCAFgGADQgFAEgFAAQgZgBAAgag");
	this.shape_50.setTransform(150.4,132.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIAoAAQARABAIAJQAGAIAAALQAAALgGAHQgIAKgRAAIgYAAIAAAkgAgTgCIAXAAQAGAAAEgCQAGgFAAgIQAAgPgQAAIgXAAg");
	this.shape_51.setTransform(142.6,131.3);

	var maskedShapeInstanceList = [this.instance_2,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},3).wait(111));

	// Layer_2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(341.9,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({regX:184.7,regY:55,x:430.3,y:78},0).wait(1).to({x:428.9},0).wait(1).to({x:426.3},0).wait(1).to({x:422.3},0).wait(1).to({x:416.5},0).wait(1).to({x:408.2},0).wait(1).to({x:396.6},0).wait(1).to({x:380.5},0).wait(1).to({x:357.9},0).wait(1).to({x:327.8},0).wait(1).to({x:293.8},0).wait(1).to({x:264.5},0).wait(1).to({x:243.2},0).wait(1).to({x:228.3},0).wait(1).to({x:217.9},0).wait(1).to({x:210.7},0).wait(1).to({x:205.9},0).wait(1).to({x:202.8},0).wait(1).to({x:201.2},0).wait(1).to({regX:95.9,regY:32,x:111.9,y:55},0).wait(93));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,498.6,253.1);
// library properties:
lib.properties = {
	id: '3425675A7A2D434FB1A7BE1713B1B77E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_Hus_ExB_atlas_.png", id:"300x250_Hus_ExB_atlas_"}
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
an.compositions['3425675A7A2D434FB1A7BE1713B1B77E'] = {
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