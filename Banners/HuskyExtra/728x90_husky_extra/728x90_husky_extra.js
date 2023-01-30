(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_husky_extra_atlas_", frames: [[0,302,728,90],[0,0,300,300],[906,147,85,121],[906,0,113,145],[730,302,153,203],[906,270,42,63],[302,0,300,300],[604,0,300,300],[0,394,332,62]]}
];


// symbols:



(lib._728x90BG = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HockeyGlove = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Huskylogo = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.line_mar = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.line_red = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.line_teal = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Red_Toolbox = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Snowshoe = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Triangle = function() {
	this.spriteSheet = ss["728x90_husky_extra_atlas_"];
	this.gotoAndStop(8);
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


(lib.triangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Triangle();
	this.instance.parent = this;
	this.instance.setTransform(-6,-4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.triangle, new cjs.Rectangle(-6,-4,166,31), null);


(lib.toolbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Red_Toolbox();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.toolbox, new cjs.Rectangle(0,0,300,300), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib._728x90BG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,728.1,90), null);


(lib.snowshoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snowshoe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.snowshoe, new cjs.Rectangle(0,0,300,300), null);


(lib.line_red_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.line_red();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_red_1, new cjs.Rectangle(0,0,153,203), null);


(lib.line_mar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.line_mar();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_mar_1, new cjs.Rectangle(0,0,113,145), null);


(lib.line_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.line_teal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.line_blue, new cjs.Rectangle(0,0,42,63), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape.setTransform(269.9,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASArIgYgiIgMAKIAAAYIgIAAIAAhVIAIAAIAAA1IAhgdIAKAAIgZAWIAbAng");
	this.shape_1.setTransform(265.6,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_2.setTransform(259.2,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASArIAAgnQAAgSgQAAQgIAAgFAGQgFAGgBAJIAAAkIgHAAIAAhVIAHAAIAAAjIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAALIAAAog");
	this.shape_3.setTransform(252.8,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAfQgKgMAAgTQAAgSAKgMQALgOASAAQANAAAKAHQALAIABANIgIAAQgDgKgGgFQgIgGgKAAQgPAAgIAMQgIAKAAAPQAAAPAIALQAIAMAPAAQAMAAAHgIQAIgIABgMIAIAAQgCAQgJAJQgJAKgQAAQgSAAgLgOg");
	this.shape_4.setTransform(245.5,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJAoQgIAAgCgDQgDgCAAgIIAAgqIgLAAIAAgGIALAAIAAgTIAHAAIAAATIAMAAIAAAGIgMAAIAAApIAAAGQACACAEABIAGgBIAAAGg");
	this.shape_5.setTransform(236,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAgIAAg9IAHAAIAAAOIAAAAQADgHAFgFQAGgDAIAAIAAAIQgKgBgFAGQgHAHABAJIAAAhg");
	this.shape_6.setTransform(232.9,21.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAXQgHgJAAgOQAAgNAHgJQAIgKANAAQAOAAAIAKQAHAJAAANQAAAOgHAJQgIAKgOAAQgNAAgIgKgAgPgRQgGAHAAAKQAAALAGAHQAGAIAJAAQAKAAAGgIQAGgHAAgLQAAgKgGgHQgGgJgKAAQgJAAgGAJg");
	this.shape_7.setTransform(227.3,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcArIAAhUIAHAAIAAAMIABAAQACgGAGgEQAGgDAHAAQANAAAIAJQAHAJAAAOQAAANgHAJQgIAKgNAAQgHAAgFgDQgGgEgDgHIAAAjgAgUgKQAAAKAFAHQAGAJAKAAQAKAAAFgJQAFgHAAgKQAAgKgFgIQgFgIgKAAQgVAAAAAag");
	this.shape_8.setTransform(220.7,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXAlQgKgHABgPIAIAAQgBAXAcAAQAIAAAGgEQAIgFAAgJQAAgLgRgEIgSgFQgUgEAAgQQAAgIAGgHQAIgJAQAAQAMAAAJAHQAKAHAAANIgJAAQAAgJgHgGQgGgFgJAAQgJAAgGAEQgHAEAAAJQAAAKANADIAUAGQALABAFAFQAHAFAAAKQAAAIgFAGQgJALgTAAQgPAAgJgIg");
	this.shape_9.setTransform(213.3,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAiQgGgJAAgOQAAgNAGgJQAIgKANAAQAHAAAFADQAGAEADAHIAAgkIAIAAIAABVIgIAAIAAgMQgCAGgHAEQgFAEgHAAQgNAAgIgKgAgPgGQgFAGAAALQAAALAFAHQAGAIAJAAQAKAAAHgIQAEgHAAgLQAAgLgEgGQgHgJgKAAQgJAAgGAJg");
	this.shape_10.setTransform(202.7,20.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAgIAAgmQAAgTgQAAQgIAAgFAGQgFAGgBAKIAAAjIgHAAIAAg9IAHAAIAAALIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAAMIAAAng");
	this.shape_11.setTransform(196.2,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAcQgHgFAAgJQAAgLALgDQAFgCARgCIAHgCQACgCABgFQAAgNgQAAQgQAAgBAPIgHAAQABgLAGgFQAHgFALAAQAWAAAAAUIAAAgQAAAEAEAAIACAAIAAAGIgEABQgFAAgDgDQgBgDAAgFIAAAAQgFAHgEACQgGAEgHAAQgJAAgFgFgAAIAAIgJABIgJACQgKADAAAIQAAAFAEAEQAEADAFAAQAIAAAHgFQAGgFABgJIAAgJIgBAAQgBACgFAAg");
	this.shape_12.setTransform(190.1,21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYALIAIAAQAAAHAFAEQAFAEAHAAQAGAAAFgCQAGgEAAgGQAAgIgOgDIgJgCQgIgBgEgDQgFgEAAgIQAAgIAIgFQAGgEAIAAQAKAAAGAFQAHAFAAAKIgHAAQgBgHgEgDQgFgEgGAAQgGAAgEADQgEADAAAFQAAAHANAEIAJACQAHABAFADQAFAEAAAIQAAAJgIAFQgHAFgKAAQgWAAgCgWg");
	this.shape_13.setTransform(180.6,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDAOIAAgbIAHAAIAAAbg");
	this.shape_14.setTransform(176.1,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASArIgYgiIgMAKIAAAYIgIAAIAAhVIAIAAIAAA1IAhgdIAKAAIgZAWIAbAng");
	this.shape_15.setTransform(171.9,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAgIAAg9IAHAAIAAAOIAAAAQADgHAFgFQAGgDAIAAIAAAIQgKgBgGAGQgFAHAAAJIAAAhg");
	this.shape_16.setTransform(167,21.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWAcQgFgFAAgJQgBgLALgDQAFgCAQgCIAIgCQACgCAAgFQAAgNgPAAQgQAAAAAPIgIAAQAAgLAIgFQAGgFALAAQAWAAAAAUIAAAgQAAAEAFAAIACAAIAAAGIgFABQgGAAgBgDQgCgDAAgFIgBAAQgEAHgEACQgGAEgHAAQgJAAgGgFgAAIAAIgJABIgKACQgJADAAAIQAAAFAEAEQAEADAGAAQAIAAAGgFQAHgFgBgJIAAgJIAAAAQgBACgFAAg");
	this.shape_17.setTransform(161.8,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAhArIAAhJIAAAAIgdBJIgHAAIgdhJIAAAAIAABJIgJAAIAAhVIAMAAIAdBKIAehKIALAAIAABVg");
	this.shape_18.setTransform(153.6,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAKQADgCABgEQABgCgBgDIgEAAIAAgMIAJAAIAAAMQAAAFgCAEQgDAFgEABg");
	this.shape_19.setTransform(143.6,24.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_20.setTransform(138.9,21.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgPAgIAAg9IAHAAIAAAOIABAAQADgHAFgFQAGgDAJAAIAAAIQgLgBgGAGQgFAHgBAJIAAAhg");
	this.shape_21.setTransform(134.3,21.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDArIAAg9IAHAAIAAA9gAgDgeIAAgMIAHAAIAAAMg");
	this.shape_22.setTransform(130.9,20.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDArIAAhOIgeAAIAAgHIBDAAIAAAHIgeAAIAABOg");
	this.shape_23.setTransform(126.5,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASAgIAAgmQAAgTgQAAQgIAAgFAGQgFAGgBAKIAAAjIgHAAIAAg9IAHAAIAAALIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAAMIAAAng");
	this.shape_24.setTransform(116.7,21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAcQgHgFAAgJQAAgLALgDQAFgCARgCIAHgCQACgCABgFQAAgNgQAAQgQAAgBAPIgHAAQABgLAGgFQAHgFALAAQAWAAAAAUIAAAgQAAAEAEAAIACAAIAAAGIgEABQgGAAgCgDQgBgDAAgFIAAAAQgEAHgFACQgFAEgIAAQgJAAgFgFgAAHAAIgIABIgKACQgJADAAAIQAAAFAEAEQAEADAFAAQAIAAAHgFQAGgFABgJIAAgJIgBAAQgBACgGAAg");
	this.shape_25.setTransform(110.5,21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDArIAAg9IAHAAIAAA9gAgDgeIAAgMIAHAAIAAAMg");
	this.shape_26.setTransform(106.2,20.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAiQgIgJAAgOQAAgNAIgJQAHgKANAAQAHAAAGADQAFAEADAHIAAgkIAHAAIAABVIgGAAIAAgMQgDAGgGAEQgGAEgHAAQgNAAgHgKgAgPgGQgFAGAAALQAAALAFAHQAFAIAKAAQALAAAFgIQAFgHAAgLQAAgLgFgGQgFgJgLAAQgKAAgFAJg");
	this.shape_27.setTransform(101.5,20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAcQgFgFAAgJQAAgLAKgDQAFgCAQgCIAIgCQACgCAAgFQAAgNgPAAQgQAAAAAPIgIAAQAAgLAIgFQAGgFALAAQAWAAAAAUIAAAgQAAAEAFAAIABAAIAAAGIgEABQgFAAgCgDQgCgDAAgFIgBAAQgEAHgEACQgFAEgIAAQgJAAgGgFgAAIAAIgJABIgJACQgKADAAAIQAAAFAEAEQAEADAFAAQAJAAAGgFQAHgFgBgJIAAgJIAAAAQgBACgFAAg");
	this.shape_28.setTransform(95.3,21.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAgIAAgmQAAgTgQAAQgIAAgFAGQgFAGgBAKIAAAjIgHAAIAAg9IAHAAIAAALIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAAMIAAAng");
	this.shape_29.setTransform(88.8,21.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWAcQgFgFAAgJQAAgLAKgDQAFgCAQgCIAIgCQACgCAAgFQAAgNgPAAQgQAAAAAPIgIAAQAAgLAIgFQAGgFALAAQAWAAAAAUIAAAgQAAAEAFAAIABAAIAAAGIgEABQgFAAgCgDQgCgDAAgFIgBAAQgEAHgEACQgFAEgIAAQgJAAgGgFgAAIAAIgJABIgJACQgKADAAAIQAAAFAEAEQAEADAGAAQAIAAAGgFQAHgFgBgJIAAgJIAAAAQgBACgFAAg");
	this.shape_30.setTransform(82.7,21.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbAfQgKgMAAgTQAAgSAKgMQALgOATAAQAMAAAKAHQALAIABANIgIAAQgDgKgGgFQgIgGgJAAQgQAAgIAMQgIAKAAAPQAAAPAIALQAIAMAQAAQALAAAIgIQAHgIABgMIAIAAQgBAQgKAJQgKAKgOAAQgTAAgLgOg");
	this.shape_31.setTransform(75.3,20.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAJAoQgIAAgCgDQgDgCAAgIIAAgqIgKAAIAAgGIAKAAIAAgTIAHAAIAAATIAMAAIAAAGIgMAAIAAApIABAGQABACAEABIAGgBIAAAGg");
	this.shape_32.setTransform(65.8,20.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVAcQgGgFgBgJQAAgLALgDQAFgCAQgCIAIgCQADgCgBgFQAAgNgPAAQgQAAgBAPIgHAAQABgLAGgFQAHgFALAAQAWAAAAAUIAAAgQAAAEAEAAIADAAIAAAGIgFABQgGAAgCgDQgBgDAAgFIgBAAQgDAHgFACQgGAEgHAAQgJAAgFgFgAAHAAIgIABIgKACQgJADAAAIQAAAFAEAEQAEADAGAAQAHAAAHgFQAGgFAAgJIAAgJIAAAAQgBACgGAAg");
	this.shape_33.setTransform(61.2,21.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAjAgIAAgpQAAgQgPAAQgQAAgBAXIAAAiIgGAAIAAgpQAAgQgNAAQgJAAgFAHQgEAGAAAKIAAAiIgIAAIAAg9IAHAAIAAAKIABAAQAGgMAOAAQAGAAAFADQAEADACAGQAFgMAOAAQAVAAAAAWIAAApg");
	this.shape_34.setTransform(49.7,21.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_35.setTransform(41.7,21.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_36.setTransform(35.5,21.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAiQgIgJABgOQgBgNAIgJQAHgKANAAQAGAAAGADQAHAEACAHIAAgkIAHAAIAABVIgHAAIAAgMQgCAGgHAEQgGAEgGAAQgNAAgHgKgAgPgGQgFAGAAALQAAALAFAHQAFAIAKAAQAKAAAHgIQAEgHAAgLQAAgLgEgGQgHgJgKAAQgKAAgFAJg");
	this.shape_37.setTransform(28.8,20.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_38.setTransform(22.4,21.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgPAgIAAg9IAIAAIAAAOIAAAAQADgHAFgFQAGgDAIAAIAAAIQgKgBgFAGQgHAHABAJIAAAhg");
	this.shape_39.setTransform(17.8,21.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAXQgHgJAAgOQAAgNAHgJQAIgKANAAQAOAAAIAKQAHAJAAANQAAAOgHAJQgIAKgOAAQgNAAgIgKgAgPgRQgGAHAAAKQAAALAGAHQAGAIAJAAQAKAAAGgIQAGgHAAgLQAAgKgGgHQgGgJgKAAQgJAAgGAJg");
	this.shape_40.setTransform(8.9,21.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAIAoQgHAAgCgDQgDgCAAgIIAAgqIgLAAIAAgGIALAAIAAgTIAGAAIAAATIAOAAIAAAGIgOAAIAAApIABAGQACACAEABIAHgBIAAAGg");
	this.shape_41.setTransform(3.7,20.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTAVQgJgJAAgMQAAgLAJgIQAIgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAJQgJAIgMAAQgLAAgIgIgAgRgRQgGAIgBAJQABALAGAHQAIAHAJAAQAKAAAHgHQAIgHAAgLQAAgJgIgIQgHgGgKAAQgJAAgIAGgAAKARIgJgPIgGAAIAAAPIgFAAIAAghIAMAAQAMABAAAIQAAAIgJABIAKAPgAgFgBIAFAAIAGgBQAEAAgBgFQABgFgJAAIgGAAg");
	this.shape_42.setTransform(318.8,4.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAqIAAgHIAFABQAEAAADgCIAEgHIACgIIgZg9IAJAAIATA0IATg0IAIAAIgbBHQgDAIgDACQgDAEgHAAIgFgBg");
	this.shape_43.setTransform(312.9,8.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_44.setTransform(307.1,7.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AASAgIAAgmQAAgTgQAAQgIAAgFAGQgFAGgBAKIAAAjIgHAAIAAg9IAHAAIAAALIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAAMIAAAng");
	this.shape_45.setTransform(300.7,7.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAXQgHgJAAgOQAAgNAHgJQAIgKANAAQAOAAAIAKQAHAJAAANQAAAOgHAJQgIAKgOAAQgNAAgIgKgAgPgRQgGAHAAAKQAAALAGAHQAGAIAJAAQAKAAAGgIQAGgHAAgLQAAgKgGgHQgGgJgKAAQgJAAgGAJg");
	this.shape_46.setTransform(294.2,7.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAiArIAAhJIgBAAIgdBJIgHAAIgdhJIgBAAIAABJIgHAAIAAhVIAMAAIAcBKIAdhKIANAAIAABVg");
	this.shape_47.setTransform(285.9,6.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDArIAAhOIgeAAIAAgHIBDAAIAAAHIgeAAIAABOg");
	this.shape_48.setTransform(274.3,6.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAfQgKgMAAgTQAAgSAKgMQALgOASAAQANAAAKAHQAKAIACANIgIAAQgDgKgHgFQgHgGgKAAQgOAAgJAMQgIAKAAAPQAAAPAIALQAJAMAOAAQAMAAAHgIQAIgIABgMIAIAAQgBAQgKAJQgJAKgQAAQgSAAgLgOg");
	this.shape_49.setTransform(266.8,6.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AASAgIAAgmQAAgTgQAAQgIAAgFAGQgFAGgBAKIAAAjIgHAAIAAg9IAHAAIAAALIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAAMIAAAng");
	this.shape_50.setTransform(256.1,7.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDArIAAg9IAHAAIAAA9gAgDgeIAAgMIAHAAIAAAMg");
	this.shape_51.setTransform(251.8,6.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AASArIgYgiIgMAKIAAAYIgIAAIAAhVIAIAAIAAA1IAhgdIAKAAIgZAWIAbAng");
	this.shape_52.setTransform(244.8,6.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAXQgIgJAAgOQAAgNAIgJQAIgKANAAQAKAAAGAFQAIAGABAKIgIAAQgDgPgOAAQgKAAgFAJQgGAHAAAKQAAALAGAHQAFAIAKAAQAHAAAFgFQAFgFABgHIAHAAQgBALgHAGQgHAHgKAAQgNAAgIgKg");
	this.shape_53.setTransform(238.3,7.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgWAcQgFgFgBgJQAAgLALgDQAFgCAQgCIAIgCQADgCgBgFQAAgNgPAAQgQAAgBAPIgHAAQABgLAGgFQAHgFALAAQAWAAAAAUIAAAgQAAAEAEAAIADAAIAAAGIgFABQgGAAgCgDQgBgDAAgFIgBAAQgDAHgFACQgGAEgHAAQgJAAgGgFgAAHAAIgIABIgKACQgJADAAAIQAAAFAEAEQAEADAGAAQAHAAAHgFQAGgFAAgJIAAgJIAAAAQgBACgGAAg");
	this.shape_54.setTransform(232.2,7.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAoQgGgEgCgGIgBAAIAAAMIgHAAIAAhVIAIAAIAAAkQADgHAGgEQAFgDAHAAQANAAAIAKQAHAJAAANQAAAOgHAJQgIAKgNAAQgHAAgGgEgAgPgGQgFAGAAALQAAALAFAHQAGAIAKAAQAKAAAFgIQAFgHAAgLQAAgLgFgGQgFgJgKAAQgKAAgGAJg");
	this.shape_55.setTransform(225.7,6.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbArIAAhVIAIAAIAABOIAvAAIAAAHg");
	this.shape_56.setTransform(216.1,6.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgVAtIAlhZIAFAAIgjBZg");
	this.shape_57.setTransform(210.5,6.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgBAsIAAgMQgMgBgHgKQgHgJAAgMQAAgNAHgJQAHgJAMgBIAAgLIAEAAIAAALQAKgBAGAGQAHAFABAKIgHAAQgEgOgNgBIAAA0QAHAAAEgFQAFgFABgHIAIAAQgCALgGAGQgHAGgKABIAAAMgAgOgRQgFAHAAAKQAAAJAFAHQAFAIAIABIAAgzQgIABgFAIg");
	this.shape_58.setTransform(205.2,7.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgTAkQgIgIAAgLIAHAAQAAAIAGAFQAGAGAIAAQAJAAAGgHQAGgHAAgJQAAgJgGgGQgGgGgJAAQgMAAgGAJIgHAAIAIgrIApAAIAAAIIgjAAIgGAcQAHgIAKAAQANAAAIAIQAHAHAAANQAAAMgIAIQgJAJgLgBQgMAAgHgGg");
	this.shape_59.setTransform(198.4,6.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAJApQgIAAgCgEQgDgDAAgHIAAgpIgLAAIAAgHIALAAIAAgSIAGAAIAAASIAOAAIAAAHIgOAAIAAAoIABAGQACACAEAAIAHAAIAAAHg");
	this.shape_60.setTransform(190,6.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_61.setTransform(185.3,7.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgQAoQgIgFAAgJIAHAAQACAMAPAAQAUAAAAgXIAAgJIAAAAQgDAGgFAEQgFADgHAAQgNAAgHgKQgHgIAAgNQAAgOAIgIQAHgJAMAAQAHAAAFAEQAGADACAGIAAAAIAAgMIAIAAIAAA5QAAAOgGAHQgHAIgPAAQgJAAgHgEgAgOgdQgFAHAAALQAAAKAFAGQAFAIAJgBQAKABAFgIQAFgGAAgKQAAgLgEgGQgGgJgKAAQgJAAgFAIg");
	this.shape_62.setTransform(178.6,8.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEAJQADAAABgFQABgDgBgCIgEAAIAAgNIAJAAIAAANQAAAFgCAEQgDAFgEACg");
	this.shape_63.setTransform(170.5,10.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAiQgIgJAAgOQAAgNAIgJQAHgKANAAQAHAAAGADQAGAEACAHIAAgkIAHAAIAABVIgGAAIAAgMQgDAGgGAEQgGAEgHAAQgNAAgHgKgAgPgGQgFAGAAALQAAALAFAHQAFAIAKAAQALAAAFgIQAFgHAAgLQAAgLgFgGQgFgJgLAAQgKAAgFAJg");
	this.shape_64.setTransform(165.3,6.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgPAfIAAg9IAIAAIAAAPIAAAAQADgHAFgEQAGgFAJAAIAAAIQgLAAgFAHQgHAFAAALIAAAfg");
	this.shape_65.setTransform(160.5,7.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVAcQgHgFABgJQAAgLAKgDQAFgCARgCIAHgCQADgCAAgFQAAgNgQAAQgQAAgBAPIgHAAQAAgLAHgFQAHgFALAAQAWAAAAAUIAAAgQAAAEAEAAIACAAIAAAGIgEABQgFAAgCgDQgCgDAAgFIAAAAQgEAHgFACQgGAEgHAAQgJAAgFgFgAAIAAIgJABIgJACQgKADAAAIQAAAFAEAEQAEADAFAAQAJAAAGgFQAHgFAAgJIAAgJIgBAAQgBACgFAAg");
	this.shape_66.setTransform(155.3,7.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTAXQgHgJgBgOQABgNAHgJQAIgKANAAQAKAAAGAFQAHAGACAKIgIAAQgDgPgOAAQgJAAgHAJQgFAHAAAKQAAALAFAHQAHAIAJAAQAHAAAFgFQAFgFABgHIAHAAQgBALgHAGQgHAHgKAAQgNAAgIgKg");
	this.shape_67.setTransform(149,7.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAIApQgHAAgCgEQgDgDAAgHIAAgpIgKAAIAAgHIAKAAIAAgSIAHAAIAAASIAMAAIAAAHIgMAAIAAAoIABAGQABACAEAAIAGAAIAAAHg");
	this.shape_68.setTransform(140.7,6.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgDArIAAg9IAHAAIAAA9gAgDgeIAAgMIAHAAIAAAMg");
	this.shape_69.setTransform(137.9,6.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgUAiQgIgJABgOQgBgNAIgJQAHgKANAAQAHAAAFADQAHAEACAHIAAgkIAHAAIAABVIgHAAIAAgMQgCAGgHAEQgFAEgHAAQgNAAgHgKgAgPgGQgFAGAAALQAAALAFAHQAFAIAKAAQAKAAAHgIQAEgHAAgLQAAgLgEgGQgHgJgKAAQgKAAgFAJg");
	this.shape_70.setTransform(133.3,6.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_71.setTransform(126.9,7.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPAfIAAg9IAIAAIAAAPIAAAAQADgHAFgEQAGgFAJAAIAAAIQgLAAgFAHQgHAFAAALIAAAfg");
	this.shape_72.setTransform(122.3,7.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgTAXQgHgJAAgOQAAgNAHgJQAIgKANAAQAKAAAGAFQAIAGABAKIgIAAQgDgPgOAAQgJAAgHAJQgFAHAAAKQAAALAFAHQAHAIAJAAQAHAAAFgFQAFgFABgHIAHAAQgBALgHAGQgHAHgKAAQgNAAgIgKg");
	this.shape_73.setTransform(117,7.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AArAZIAAgrIgRArIgFAAIgRgrIAAArIgGAAIAAgxIAKAAIAQAnIAPgnIAKAAIAAAxgAggAZIAAgsIgRAAIAAgFIAnAAIAAAFIgQAAIAAAsg");
	this.shape_74.setTransform(104.6,4.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAXQgHgJAAgOQAAgNAHgJQAHgKANAAQAOAAAIALQAGAJAAAOIgvAAQAAAJAFAHQAFAIAJAAQAQAAAEgQIAHAAQgFAXgWAAQgNAAgHgKgAAUgEQAAgJgFgGQgGgHgJAAQgHAAgGAHQgFAGgBAJIAnAAIAAAAg");
	this.shape_75.setTransform(95.6,7.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgDArIAAhVIAHAAIAABVg");
	this.shape_76.setTransform(91.4,6.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgQAoQgIgFAAgJIAHAAQACAMAPAAQAUAAAAgXIAAgJIAAAAQgDAGgFAEQgFADgHAAQgNAAgHgKQgHgIAAgNQAAgOAIgIQAHgJAMAAQAHAAAFAEQAGADACAGIAAAAIAAgMIAIAAIAAA5QAAAOgGAHQgHAIgPAAQgJAAgHgEgAgOgdQgFAHAAALQAAAKAFAGQAFAIAJgBQAKABAFgIQAFgGAAgKQAAgLgEgGQgGgJgKAAQgJAAgFAIg");
	this.shape_77.setTransform(86.8,8.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AASAgIAAgmQAAgTgQAAQgIAAgFAGQgFAGgBAKIAAAjIgHAAIAAg9IAHAAIAAALIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAAMIAAAng");
	this.shape_78.setTransform(80.4,7.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgWAcQgFgFgBgJQAAgLALgDQAFgCAQgCIAIgCQADgCgBgFQAAgNgPAAQgQAAgBAPIgHAAQABgLAGgFQAHgFALAAQAWAAAAAUIAAAgQAAAEAEAAIADAAIAAAGIgFABQgGAAgCgDQgBgDAAgFIgBAAQgDAHgFACQgGAEgHAAQgJAAgGgFgAAHAAIgIABIgKACQgJADAAAIQAAAFAEAEQAEADAGAAQAHAAAHgFQAGgFAAgJIAAgJIAAAAQgBACgGAAg");
	this.shape_79.setTransform(74.3,7.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgDArIAAg9IAHAAIAAA9gAgDgeIAAgMIAHAAIAAAMg");
	this.shape_80.setTransform(69.9,6.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgOAfIAAg9IAGAAIAAAPIABAAQADgHAFgEQAGgFAIAAIAAAIQgKAAgGAHQgFAFgBALIAAAfg");
	this.shape_81.setTransform(67.3,7.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgDArIAAhOIgeAAIAAgHIBDAAIAAAHIgeAAIAABOg");
	this.shape_82.setTransform(61.8,6.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWAcQgFgFAAgJQAAgLAKgDQAFgCAQgCIAIgCQADgCAAgFQgBgNgPAAQgQAAAAAPIgIAAQAAgLAIgFQAGgFALAAQAWAAAAAUIAAAgQAAAEAFAAIABAAIAAAGIgEABQgFAAgCgDQgCgDAAgFIAAAAQgFAHgEACQgGAEgHAAQgJAAgGgFgAAIAAIgJABIgJACQgKADAAAIQAAAFAEAEQAEADAFAAQAJAAAGgFQAHgFAAgJIAAgJIgBAAQgBACgFAAg");
	this.shape_83.setTransform(52.2,7.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AASArIAAgnQAAgSgQAAQgIAAgFAGQgFAGgBAJIAAAkIgHAAIAAhVIAHAAIAAAjIABAAQACgGAFgEQAGgDAFAAQANAAAFAGQAFAGAAALIAAAog");
	this.shape_84.setTransform(42.4,6.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAJApQgIAAgCgEQgDgDAAgHIAAgpIgLAAIAAgHIALAAIAAgSIAGAAIAAASIAOAAIAAAHIgOAAIAAAoIABAGQACACAEAAIAHAAIAAAHg");
	this.shape_85.setTransform(37.3,6.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgDArIAAg9IAHAAIAAA9gAgDgeIAAgMIAHAAIAAAMg");
	this.shape_86.setTransform(34.6,6.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAQAfIgQgzIgOAzIgIAAIgVg9IAIAAIAQA0IAQg0IAHAAIAPA0IAQg0IAIAAIgTA9g");
	this.shape_87.setTransform(29.1,7.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgUAqIAAgHIAFABQAEAAADgCIAEgHIACgIIgZg9IAJAAIATA0IATg0IAIAAIgbBHQgDAIgDACQgDAEgHAAIgFgBg");
	this.shape_88.setTransform(18.5,8.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgWAcQgFgFAAgJQgBgLALgDQAFgCAQgCIAIgCQACgCAAgFQAAgNgPAAQgQAAAAAPIgIAAQAAgLAIgFQAGgFALAAQAWAAAAAUIAAAgQAAAEAFAAIACAAIAAAGIgFABQgGAAgBgDQgCgDAAgFIgBAAQgEAHgEACQgGAEgHAAQgJAAgGgFgAAIAAIgJABIgKACQgJADAAAIQAAAFAEAEQAEADAGAAQAIAAAGgFQAHgFgBgJIAAgJIAAAAQgBACgFAAg");
	this.shape_89.setTransform(12.8,7.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgfArIAAhVIAlAAQAMAAAHAHQAHAGAAAMQAAALgHAGQgHAGgMAAIgcAAIAAAlgAgWAAIAbAAQAIAAAFgEQAGgFAAgIQAAgJgGgFQgFgEgIAAIgbAAg");
	this.shape_90.setTransform(6,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(0,0,331,30), null);


(lib.learnmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005B9C").s().p("AgUAXQgHgIgBgPQAAgNAIgJQAJgJALAAQAPAAAIAMQAGAKgBAMIgtAAQAAAJAEAFQAGAHAIAAQAOgBACgLIAKAAQgCAJgHAGQgHAFgKABQgNAAgIgKgAARgFQAAgHgFgGQgFgEgHAAQgHAAgFAEQgFAGAAAHIAiAAIAAAAg");
	this.shape.setTransform(59.9,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005B9C").s().p("AgPAgIAAg9IAJAAIAAANQAHgPAPAAIAAALQgVAAAAAYIAAAcg");
	this.shape_1.setTransform(55,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005B9C").s().p("AgWAXQgHgJAAgOQAAgNAHgJQAJgJANAAQAOAAAIAJQAIAJAAANQAAAOgIAJQgIAKgOAAQgNAAgJgKgAgNgRQgFAHAAAKQAAALAFAGQAGAHAHAAQAJAAAEgHQAGgGAAgLQAAgKgGgHQgEgFgJAAQgHAAgGAFg");
	this.shape_2.setTransform(49.3,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005B9C").s().p("AAgArIAAhGIgbBGIgJAAIgbhGIAABGIgLAAIAAhVIAQAAIAaBHIAbhHIAQAAIAABVg");
	this.shape_3.setTransform(40.6,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005B9C").s().p("AAQAgIAAgpQAAgGgEgDQgDgEgGAAQgIAAgFAGQgEAFAAAJIAAAiIgLAAIAAg9IAKAAIAAAKQAHgMAMAAQAWAAAAAXIAAAog");
	this.shape_4.setTransform(28.7,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005B9C").s().p("AgPAgIAAg9IAJAAIAAANQAHgPAPAAIAAALQgVAAAAAYIAAAcg");
	this.shape_5.setTransform(23.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005B9C").s().p("AANAXQgIAKgNAAQgJAAgFgFQgGgEAAgJQAAgJAGgFQAFgCAKgCIAOgCQAFgDAAgEQAAgKgMAAQgPAAgBALIgKAAQAAgLAJgFQAGgFALABQAXgBAAASIAAAeIAAAGQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAIADgBIAAAIQgDABgEABQgJAAAAgKgAAEABIgJACQgMACAAAKQgBAJAMAAQAJAAAFgGQAFgDgBgGIAAgJQgCABgGAAg");
	this.shape_6.setTransform(18.4,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005B9C").s().p("AgUAXQgHgIgBgPQAAgNAIgJQAJgJALAAQAPAAAIAMQAGAKgBAMIgtAAQAAAJAEAFQAGAHAIAAQAOgBACgLIAKAAQgCAJgHAGQgHAFgKABQgNAAgIgKgAARgFQAAgHgFgGQgFgEgHAAQgHAAgFAEQgFAGAAAHIAiAAIAAAAg");
	this.shape_7.setTransform(12,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005B9C").s().p("AgbArIAAhVIALAAIAABLIAsAAIAAAKg");
	this.shape_8.setTransform(5.8,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#005B9C").ss(1,1,1).p("AkwAAIJhAA");
	this.shape_9.setTransform(32.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.learnmore, new cjs.Rectangle(0,0,65.2,16), null);


(lib.glove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HockeyGlove();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glove, new cjs.Rectangle(0,0,300,300), null);


(lib.fill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005B9C").s().p("Ag8BmQgngUAAguIBEAAQAAAIADAHQAGAQAZAAQAcAAAAgVQAAgHgJgFQgIgEgdgJQgmgLgNgIQgYgOAAgeQAAgkAbgUQAZgRAlAAQAnAAAXAQQAcATABAlIhAAAQABgLgJgHQgIgFgLAAQgZAAAAAPQABAKAUAGIAqALQAdAJAOAMQAUAPAAAbQAAApghATQgbARgqAAQggAAgagOg");
	this.shape.setTransform(449,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005B9C").s().p("AArBvIgJggIhFAAIgKAgIhEAAIBRjdIBCAAIBQDdgAAVAgIgUhEIgBAAIgUBEIApAAg");
	this.shape_1.setTransform(427.5,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005B9C").s().p("AAlBvQgFgNgBgVQgCgWgEgIQgHgNgSAAIgjAAIAABNIhEAAIAAjdICAAAQAgAAATAQQAWASAAAeQAAASgIAPQgKAPgPAGQAcALAEAsIACAYQABARAEAHgAgjgNIAjAAQAeAAAAgWQgBgWggAAIggAAg");
	this.shape_2.setTransform(405.6,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005B9C").s().p("AghBvIAAikIg+AAIAAg5IC/AAIAAA5Ig+AAIAACkg");
	this.shape_3.setTransform(383,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005B9C").s().p("AAkBvIgkhCIgnBCIhPAAIBRh1IhJhoIBQAAIAgA9IAhg9IBMAAIhHBpIBPB0g");
	this.shape_4.setTransform(361.2,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005B9C").s().p("AhcBvIAAjdIC2AAIAAA5IhyAAIAAAcIBnAAIAAAzIhnAAIAAAcIB2AAIAAA5g");
	this.shape_5.setTransform(339,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005B9C").s().p("AhcBvIAAjdIC2AAIAAA5IhyAAIAAAcIBoAAIAAAzIhoAAIAAAcIB1AAIAAA5g");
	this.shape_6.setTransform(306.9,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005B9C").s().p("AhdBvIAAjdIC3AAIAAA5IhyAAIAAAcIBoAAIAAAzIhoAAIAAAcIB1AAIAAA5g");
	this.shape_7.setTransform(285.1,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005B9C").s().p("AAlBvQgEgNgCgVQgCgWgEgIQgHgNgSAAIgjAAIAABNIhFAAIAAjdICCAAQAeAAAUAQQAWASAAAeQAAASgIAPQgJAPgRAGQAdALAEAsIACAYQACARAEAHgAgjgNIAjAAQAdAAAAgWQAAgWggAAIggAAg");
	this.shape_8.setTransform(263.2,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005B9C").s().p("AhVBvIAAjdICrAAIAAA5IhmAAIAAAcIBXAAIAAAzIhXAAIAABVg");
	this.shape_9.setTransform(241.8,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005B9C").s().p("AAgBvIAAhYIg/AAIAABYIhEAAIAAjdIBEAAIAABNIA/AAIAAhNIBEAAIAADdg");
	this.shape_10.setTransform(209.4,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005B9C").s().p("AghBvIAAikIg+AAIAAg5IC/AAIAAA5Ig+AAIAACkg");
	this.shape_11.setTransform(187.3,13.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005B9C").s().p("AghBvIAAjdIBDAAIAADdg");
	this.shape_12.setTransform(171.8,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005B9C").s().p("AAXBvIgXiGIgBAAIgXCGIhDAAIg7jdIBCAAIAbCIIABAAIAaiIIA8AAIAaCKIABAAIAbiKIBDAAIg+Ddg");
	this.shape_13.setTransform(151.8,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005B9C").s().p("AhhBvIAAjdIBxAAQApAAAXAaQASAWAAAcQAAAmgZAUQgWAUgoAAIgnAAIAABDgAgcgIIAaAAQAQAAAIgDQALgFAAgPQAAgOgKgFQgGgDgQAAIgdAAg");
	this.shape_14.setTransform(116.2,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#005B9C").s().p("AhkAWIAAiHIBEAAIAAB4QAAAYAEAKQAHARAVAAQAWAAAHgRQAEgKAAgYIAAh4IBEAAIAACHQAABbhlAAQhkAAAAhbg");
	this.shape_15.setTransform(92.9,13.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#005B9C").s().p("AhSBvIAAjdIBEAAIAACkIBhAAIAAA5g");
	this.shape_16.setTransform(61.4,13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005B9C").s().p("AhSBvIAAjdIBEAAIAACkIBhAAIAAA5g");
	this.shape_17.setTransform(41.9,13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005B9C").s().p("AghBvIAAjdIBDAAIAADdg");
	this.shape_18.setTransform(26.7,13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#005B9C").s().p("AhVBvIAAjdICrAAIAAA5IhmAAIAAAcIBXAAIAAAzIhXAAIAABVg");
	this.shape_19.setTransform(12.3,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fill, new cjs.Rectangle(0,0,482,35), null);


// stage content:
(lib._728x90_husky_extra = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.line_red_1();
	this.instance.parent = this;
	this.instance.setTransform(553.5,195.5,1,1,0,0,0,76.5,101.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({x:674.5,y:13.5},34,cjs.Ease.cubicInOut).wait(10));

	// Layer_6
	this.instance_1 = new lib.line_mar_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.5,-68.5,1,1,0,0,0,56.5,72.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).to({x:696.5,y:45.5},34,cjs.Ease.cubicInOut).wait(6));

	// Layer_5
	this.instance_2 = new lib.line_blue();
	this.instance_2.parent = this;
	this.instance_2.setTransform(693,136.5,1,1,0,0,0,21,31.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({_off:false},0).to({x:718,y:72.5},34,cjs.Ease.cubicInOut).wait(1));

	// triangle
	this.instance_3 = new lib.triangle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(517.5,109,1,1,0,0,0,81.5,12);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).to({y:69},19,cjs.Ease.quartInOut).wait(41));

	// learnmo
	this.instance_4 = new lib.learnmore();
	this.instance_4.parent = this;
	this.instance_4.setTransform(389.6,70.9,1,1,0,0,0,32.6,8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({alpha:1},16,cjs.Ease.quintInOut).wait(42));

	// legal
	this.instance_5 = new lib.legal();
	this.instance_5.parent = this;
	this.instance_5.setTransform(246.6,105.9,1,1,0,0,0,165.5,15);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({_off:false},0).to({y:63.9},25,cjs.Ease.quintInOut).wait(50));

	// Layer_1
	this.instance_6 = new lib.fill();
	this.instance_6.parent = this;
	this.instance_6.setTransform(321.1,-11.6,1,1,0,0,0,241,17.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).to({y:30.4},25,cjs.Ease.quintInOut).wait(50));

	// Layer_10
	this.instance_7 = new lib.toolbox();
	this.instance_7.parent = this;
	this.instance_7.setTransform(200.7,156.8,0.512,0.512,0,0,0,150.2,149.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:278.7,y:41.8},30,cjs.Ease.quintInOut).wait(1).to({x:361.7,y:-89.2},33,cjs.Ease.quintInOut).wait(59));

	// Layer_9
	this.instance_8 = new lib.glove();
	this.instance_8.parent = this;
	this.instance_8.setTransform(436.7,-57.1,0.512,0.512,0,0,0,150.2,149.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:376.7,y:45.9},30,cjs.Ease.quintInOut).wait(1).to({x:323.7,y:146.9},33,cjs.Ease.quintInOut).wait(59));

	// Layer_8
	this.instance_9 = new lib.snowshoe();
	this.instance_9.parent = this;
	this.instance_9.setTransform(390.1,174.3,0.512,0.512,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:464.1,y:50.3},30,cjs.Ease.quintInOut).wait(1).to({x:547.1,y:-80.7},33,cjs.Ease.quintInOut).wait(59));

	// logo
	this.instance_10 = new lib.Huskylogo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(18,15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(123));

	// bg
	this.instance_11 = new lib.Symbol1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-88.8,728.1,384.9);
// library properties:
lib.properties = {
	id: 'A0E1BAF8F6EC4D049C4C2F61C4D43185',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_husky_extra_atlas_.png", id:"728x90_husky_extra_atlas_"}
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
an.compositions['A0E1BAF8F6EC4D049C4C2F61C4D43185'] = {
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