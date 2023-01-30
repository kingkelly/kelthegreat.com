(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_3talk_dog_atlas_NP_", frames: [[0,504,300,250],[0,0,300,250],[0,252,300,250]]}
];


// symbols:



(lib.dbl_badge = function() {
	this.initialize(img.dbl_badge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,61);


(lib.dbl_bike = function() {
	this.spriteSheet = ss["300x250_3talk_dog_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dbl_hotel = function() {
	this.spriteSheet = ss["300x250_3talk_dog_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.dbl_ski = function() {
	this.spriteSheet = ss["300x250_3talk_dog_atlas_NP_"];
	this.gotoAndStop(2);
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


(lib.the = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiAoQgIgFgBgOQgBgKACgLQACgLAFgJQAFgKAIgGQAIgHALAAQAFABADAEQADAEAAAGIgDAKQgCAFgDAFIgHAGIgIAHIgGAHQgDAFAAACQgBAHADACQAEACAEAAIAJgDIAHgFIAIgGIAIgIIAIgIIAGgGIAEgFIAEgDIADgBQABAAAAABQAAAAAAABQAAAAAAABQAAABgBABIgFAJIgGAHIgJAMIgLALIgMAKQgGAEgHABIgFAAQgJAAgHgEgAgNgXQgEAEgCAJIAKgJQAFgFACgHQgIADgDAFg");
	this.shape.setTransform(-26.1,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIB3IgHgGIgFgHQgCgFAAgFIABgEIABgGIAFgQIAFgQQADgMAGgMIAAgBIgBAAIgTARQgJAHgHALIgIALIgGANQgCACgDAAQgHgGgCgHQgDgHgBgIQAAgJABgIIADgPIAJggIAJghIAMggIAMgdIAHgMIAIgIQACgDADAAIAEABIADACIACAEQADAMgEAPQgDAPgFAQQgGAPgIAOQgIAPgHAHIgBADIgHAVIgGAWIAAAFIgBAHIAHgIIARgQQAIgIALgFIAHgFQAEgBAFABIAHADQADACABADIgBAHIgGAWIgGAXIgGATIgBAJQAAABABAAQAAAAABAAQAAAAABAAQABAAABgBIAJgJIAMgNIAMgQIAMgPIAKgLQADgEACAAQADABgBAEIgHAMIgLAQIgNATIgOAQIgNAOQgHAFgFAAIgIgBgAgGhTIgJAaIgJAaIgHATIAGgJIAIgOIAJgTIAHgUIADgQQABgIgCgEg");
	this.shape_1.setTransform(-35.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBsQgEgEgBgHQgBgIABgIIACgRIADgMIAHgcIAGgbIAGgZIAGgYIgLAAIgMABIgLAAIgKgCQgFgBgCgCIgCgEQAAgDADgCQACgCAFAAIAKAAIAOAAIAOAAIAIgCIABgBIADgKIADgLIADgKIADgIQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAGACIAGAFQADACAAACQAAAHgDAIIgEAPIAdgCIAYgBIAIAAIAGAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgHADQgQAHgQADIgfAGIgBABIgBABIAAABIAAAAIgHAcIgJAeIgIAfIgGAcIgEAUQgBAIABACQACAFAFgCQAFgCAGgHIANgPIAMgTIALgQIAGgJIADgFIAEgEIADgBIACgCQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgCAFIgEALIgIAPIgKASIgNAQIgNAPQgHAGgIABIgMADQgFAAgFgEg");
	this.shape_2.setTransform(-45,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.the, new cjs.Rectangle(-52.6,-19.7,33.1,44.6), null);


(lib.talkeetna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBUQgIAAgGgDQgHgEgFgGIgHgOIgJAJIgLAJIgNAHQgHACgIAAIgMgDIgKgHQgFgEgCgHIgDgOIAEgcIAHgdQAIgYAOgUQAOgUAYgJQAHgDAJABQAJAAAHADQAGAEAEAGQAFAGgBAJIgBAFIgDAGIgDADIgDgDIgCgEIgCgFIgFgEIgIgBQgJABgKANQgKANgJARIgPAhIgGAZQgCANAEABQAEAAAGgHIAOgUIAPgYIAMgUIAGgJQAGgGAGAAQAGgBAFAEQAFAEADAFQADAHgDAGIgGATQgFAMAAAJQAAANAFADQAFAEAMgHQAJgFAJgMIARgYIARgXIAMgRIADgEIAEgBIADACIABAEIgLAgQgHAQgJAPQgKAOgMANQgMAMgPAIQgJAEgHAAIgCAAg");
	this.shape.setTransform(125.6,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBfIgMgIIgIgLIgEgOQgEgYAIgaIAPgtQAEgLgDgEQgDgEgLAHQgJAGgHANIgMAbIgKAcIgIAXIgCAFQgHAHgFgIIgCgIIgCgHIgDgWIADgaIAGgfIAKgdIAKgWQACgFAFgBQAFgBAGACQAFADAEAFQADAFAAAHIgCADIgCAGIgCAGIgCADIAKgKIAKgLIALgJQAFgEAHgBQAHgBAHADQAIAFAFAGQAFAFACAIQACAIgBAHQgDAOgGAOIgNAaIgKAbQgGANgBAOQgBALACACQAEACADgCIAIgGIAGgGQATgTAPgVIAegoQANgRADgCQAEgBgCAGIgHASIgIATIgNAaIgUAfQgKAOgNALQgMALgMABIgEABQgFAAgFgCg");
	this.shape_1.setTransform(108.5,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7DMQgIgGgCgOQgDgOAAgPIACggIADgXIAJg1IAHgzIAHgwIAHgsIgUACIgVACIgVACIgUgBQgIgBgEgEQgFgEAAgEQAAgFAEgEQAEgDAJgCIASgBIAagCIAagDIAPgEIABgCIAEgUIAEgUIAEgSIAEgQQABgEAHAAIAMACIANAHQAGAFAAAEQAAANgEANIgFAeIA1gIIAsgGIAOgCIALAAQABAAAAAAQABAAAAAAQABABgBAAQAAABAAAAIgMAHQgeAOgdAJIg4APIgCACIgBADIgBABIAAABIgJAzIgMA6IgKA7IgHA0IgEAnQgBAPADAEQAFAJAIgFQAJgFAKgNIAVgfIAWgjIARggIAJgSIAFgJIAHgIIAEgEIAFgDQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABIgDAKIgGATIgMAeIgRAhIgVAiIgXAcQgLAMgNAFIgXAGIgFAAQgIAAgHgFg");
	this.shape_2.setTransform(92.5,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BNQgQgJgDgYQgEgTACgVQADgUAHgTQAIgSAOgNQANgNAVgDQAKABAGAHQAHAHgBAMIgDATQgDAIgHAKIgLAMIgNAOIgLAQQgFAIABAFQAAAOAGACQAGAEAJgDQAIgCAJgEIAMgJIANgOIAOgQIANgPIALgOIAGgIIAHgHIAGgBQACAAgCAIIgHAQIgKAQIgRAYIgSAWIgVAUQgKAIgNAEIgOABQgOAAgLgGgAgdgsQgGAJgCAQIARgSQAIgKADgMQgNAGgHAJg");
	this.shape_3.setTransform(79.8,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BNQgQgJgDgYQgEgTACgVQADgUAHgTQAIgSAOgNQANgNAVgDQAKABAGAHQAHAHgBAMIgDATQgDAIgHAKIgLAMIgNAOIgLAQQgFAIABAFQAAAOAGACQAGAEAJgDQAIgCAJgEIAMgJIANgOIAOgQIANgPIALgOIAGgIIAHgHIAGgBQACAAgCAIIgHAQIgKAQIgRAYIgSAWIgVAUQgKAIgNAEIgOABQgOAAgLgGgAgdgsQgGAJgCAQIARgSQAIgKADgMQgNAGgHAJg");
	this.shape_4.setTransform(66.6,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACDbQgIgBgGgJQgGgJgEgMIgFgbIgCgcIgCgaIgDgSQgIAGgHAPIgKAgIgGAgIgCAVIAAAFIAAAEQgBAGgCACIgFAAIgGgEIgEgFIgGgTIgFgWIgCgWIgBgQIACguIAIg7IAMhAQAHgiAKgfQAJgfALgbQAMgcAOgTQAEgFAHAAQAFAAAHAEQAGAEAEAHQADAGgCAHIgHAgIgKAyIgTBEQgMAmgVArIgFATIgBAUIAHgOIAOgTIASgWIASgUIARgPQAJgGAFAAIAIABIAGAFIABAEQAAABAAAAQAAABAAAAQgBABgBAAQAAAAgBABQgGABgJAJIgUAVIgRAXIgKAQQAJACAFALQADAKADAQIAEAfIAEAeQACAOAFAJQADAIAHgBQADAAAFgIIAMgSIANgXIAOgaIAKgXIAIgSQACgHACABQAEABgBAEIgDATIgGARIgIATIgKAYIgPAZQgHANgKAJQgJAJgJAFQgFACgFAAQgFAAgGgCgAgFiNIgPAxIgPA3IgNA5IANgeIAMgmIAMgpIAKgnIAHghIADgXg");
	this.shape_5.setTransform(51.4,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzDcQgMgGgEgNQgHgeAAgfQgBgkAFgoQAFgnAJgnQAJgnAMgmQAMgmAPghIAMgcIAPgZQACgFAFgDQAFgCAGABQALAEABAOQAAAdgFAdQgEAdgJAcQgJAbgNAZQgLAagOAXIgCAEIgBAEIgJAuIgGAvIgCArQABAUADAKQADAFAFAAIAHgEIAYgfIAVghIAUghIATgcQAEgFACACQADACgBAFIgLAYIgLAXIgaAzQgMAbgQAUQgLAMgNAEIgFAAQgLAAgKgFgAANhnIgWBQIAJgRIAKgaIALggIAKghIAHgdIADgWQgQAngMAog");
	this.shape_6.setTransform(35.8,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKBUQgIAAgGgDQgHgEgFgGIgHgOIgJAJIgLAJIgNAHQgHACgIAAIgMgDIgKgHQgFgEgCgHIgDgOIAEgcIAHgdQAIgYAOgUQAOgUAYgJQAHgDAJABQAJAAAHADQAGAEAEAGQAFAGgBAJIgBAFIgDAGIgDADIgDgDIgCgEIgCgFIgFgEIgIgBQgJABgKANQgKANgJARIgPAhIgGAZQgCANAEABQAEAAAGgHIAOgUIAPgYIAMgUIAGgJQAGgGAGAAQAGgBAFAEQAFAEADAFQADAHgDAGIgGATQgFAMAAAJQAAANAFADQAFAEAMgHQAJgFAJgMIARgYIARgXIAMgRIADgEIAEgBIADACIABAEIgLAgQgHAQgJAPQgKAOgMANQgMAMgPAIQgJAEgHAAIgCAAg");
	this.shape_7.setTransform(20,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhODKQgIgCgDgLIgHgZIgDgbIAAgSQAAgdAEghQAEgiAIghQAHghALggQAKggAOgbIADgEIgRACIgdAGIggAJIgWAJIAJAGIAOAJIAIAJQACAEgJABIgWAAIgVgEIgMgEIgMgGIgLgHQgEgEgBgFQgCgOANgJQAagSApgNQApgNAvgIQAvgIAwgDQAxgDAqACIAHABIANADIALAFIAKAFQADADgBADQgBADgHACIgNADIgOABIhYAMIhVAPIACAFIAFAFIADAHQABAEgBAEQgWA5gPBCQgPBCgMBUIgBAKIgCAJIgCALIgCANQgBAFgEAAIgCAAg");
	this.shape_8.setTransform(9.1,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.talkeetna, new cjs.Rectangle(-16.8,-35.1,158.5,95.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsCEQgRgFgKgGIgTgOIAdgqIAHAGIARAKQANAGAKAAQAYAAAOgRQANgQADgdQgYAQgbAAQgmAAgYgYQgagYABgoQAAgoAbgZQAbgZAoAAQAbAAAWALQAUALAMAUQAXAlgBA5QAAAkgJAbQgIAcgQAQQgfAggrAAQgTAAgRgGgAgghMQgKALgBARQAAARAKALQAKAMASAAQARAAAMgKQALgLAAgRQAAgQgLgMQgMgNgQAAQgRAAgLALg");
	this.shape.setTransform(76,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbCIIAAgsIBOhQQAXgXAKgOQAKgOAAgOQAAgNgJgJQgIgJgNAAQgZAAgXAkIgvgcQATgdAWgPQAWgPAiAAQAiAAAaAWQAaAWAAAlQAAAVgKATQgLASgcAdIgvAyIBoAAIAAA1g");
	this.shape_1.setTransform(52.4,40.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCCFIAAjWIgzAAIAAgzIBrAAIAAEJg");
	this.shape_2.setTransform(32.3,41);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBFIAAgMQgVgDgSgRIAPgTQANAMALADIAAgZQgSgEgIgHQgIgIAAgOQAAgPAJgJQAKgJAPgCIAAgIIARAAIAAAIQARADAQAMIgNATQgLgHgJgDIAAAZQASAEAJAHQAIAIAAAOQAAAOgJAKQgKAJgQACIAAAMgAALAiQAIgDAAgHQAAgEgBgCQgCgCgFgDgAgNgbQAAAGAHAEIAAgTQgHACAAAHg");
	this.shape_3.setTransform(17.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(11.4,16.2,78.1,49), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(255,255,255,0.486)","rgba(0,0,0,0)","rgba(255,255,255,0)"],[0,0.502,1,1],37.6,-18.1,37.6,33.6).s().p("AwzA1IAAhsIUsiKIIKAAICvASIgjAEIClAaImeAOIAcAtIAtgBIBEAHIioAFIA/AfIjeAfQjhAfgUAGQgVAHgaAEIkwAYIMKBRImFA2g");
	this.shape.setTransform(107.6,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,215.3,38.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(154,131);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(4,6,300,250), null);


(lib.ski = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_ski();
	this.instance.parent = this;
	this.instance.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ski, new cjs.Rectangle(0,11,300,250), null);


(lib.moneynumbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.moneynumbers, null, null);


(lib.is = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBoQgFgBgEgDQgJgJgDgMQgCgKACgMIAFgNQAHgPAJgLIATgUIgQgUQgIgKgCgNQgBgPAHgOQAIgOAKgJIAJgFQAEgDAGACIAFABIADABIAFADQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIACARIADAMIADAIIADAHIAAAHQgBACgEgBQgJgDgFgIIgGgQIgDgFIgCgFQgDgBgEADIgHAIQgDAGAAAGQAAAHAEAGIAFAFIAGAGIAGAGIAFAFIACACIAEgBIALgGIAQgHIAQgHIAMgDQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAgBABQAAAAAAABIgEAEIgFADIgDADIgQAKIgQALIgDABIgDACIAIAQQADAHAAAHIgCAOIgFARIgJASIgKAPQgGAHgIAEQgHAFgKAAgAgTAaIgMASIgIATQgDAKACAFQAIgDAHgJQAHgIAFgKQAGgKABgJQACgKgEgGg");
	this.shape.setTransform(5.7,-30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBZQgHgEgEgFQgEgGgBgHQgCgUACgWQADgXAFgRIAEgMQADgDAFABQAFABAEAEQAEAFACAGQACAHgBAGIgDANIgCAMIgCAJIgCAMIgDANIgBAIQAAAGADgDIAKgKIAaghIAZggIAEgFIAAAAIAAABQACAJgCADIgCAFIgJAQIgMATIgMASIgJAMIgIALIgFADIgGACIgHABgAgSgtQgFgHgDgIQgCgJACgIQACgFAEgEQAFgDAEAAIAFACIAEAEQADAKgEAKQgFAKgGAHIgCACIgCgBg");
	this.shape_1.setTransform(-2.8,-33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.is, new cjs.Rectangle(-11.7,-64.1,27.8,60.6), null);


(lib.hotel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_hotel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hotel, new cjs.Rectangle(0,0,300,250), null);


(lib.from = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJARIAAgdIgHAAIAAgFIAIgEIADgMIAHAAIAAAMIAPAAIAAAJIgPAAIAAAcQAAAEACACQACACADAAIAIgBIAAAIIgEACIgHAAQgPAAAAgQg");
	this.shape.setTransform(189.3,-60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAmIAAghQAAgGgCgDQgDgCgFAAQgGAAgEADQgDAEAAAKIAAAbIgMAAIAAhLIAMAAIAAAUIgBAJIABAAQACgDAFgDQAEgCAEAAQAUAAAAATIAAAjg");
	this.shape_1.setTransform(184.3,-60.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAkQgFgFAAgHQgBgFAEgDQADgDAFgBIgDgDIgCgGQAAgCACgCIAFgEQgEgBgDgFQgDgEAAgFQABgJAFgEQAGgGAKAAIAEABIADAAIAUAAIAAAHIgKABIACAFIABAFQAAAIgGAFQgGAFgJAAIgEgBQgEADAAACQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAGABIAIAAQAKAAAEAFQAFADgBAIQABAJgIAEQgHAGgOgBQgLAAgGgDgAgMASQgDACAAAEQAAAEADACQAEABAFAAQAJABAFgDQAEgDAAgEQAAgEgCgBQgDgCgHAAIgIAAQgEAAgDADgAgHgdQgDAEAAAFQAAAFADADQACACAFAAQAJABAAgLQAAgGgDgCQgCgDgEAAQgFAAgCACg");
	this.shape_2.setTransform(178.3,-58.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAlIAAg1IALAAIAAA1gAgEgZQgCgCAAgDQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQACgBACAAQADAAACABQAAABABAAQAAABAAAAQAAABAAAAQABABAAABQgBADgBACQgCABgDAAQgCAAgCgBg");
	this.shape_3.setTransform(174.2,-60.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAbIAAgfQAAgHgCgDQgDgDgFAAQgGAAgEAEQgDAFAAAIIAAAbIgMAAIAAg1IAJAAIACAHIABAAQACgDAFgDQAEgCAFAAQATABAAATIAAAig");
	this.shape_4.setTransform(169.7,-59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAkIAahHIALAAIgaBHg");
	this.shape_5.setTransform(162,-60.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAbIAAggQABgGgDgDQgDgDgFAAQgGAAgDAEQgDAEAAAJIAAAbIgLAAIAAggQAAgGgCgDQgDgDgFAAQgGAAgDAEQgEAEABAJIAAAbIgMAAIAAg1IAJAAIACAIIABAAQACgEAEgDQAEgCAGAAQALABAEAIIAAAAQADgEAEgCQAFgCAFgBQAKAAAFAGQAEAEAAAKIAAAig");
	this.shape_6.setTransform(152.1,-107);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAYQgGgDgDgHQgCgFAAgJQAAgMAGgIQAHgHALAAQAMAAAHAHQAHAIAAAMQAAANgHAIQgHAHgMAAQgGAAgHgEgAgJgNQgEAFAAAIQAAASANABQAOgBAAgSQAAgRgOAAQgGgBgDAFg");
	this.shape_7.setTransform(144.2,-107);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAbIAAg1IAJAAIACAKIABAAQACgFAEgDQAEgDAFAAIAGABIgCAKIgFAAQgHAAgDAFQgEAEAAAHIAAAbg");
	this.shape_8.setTransform(139.3,-107);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAkIAAhHIAnAAIAAAKIgcAAIAAAXIAaAAIAAAIIgaAAIAAAeg");
	this.shape_9.setTransform(134.5,-107.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.from, new cjs.Rectangle(129.5,-117,64,65.1), null);


(lib.calling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAHQgBgJAFgJQAHgIAJgCQAIgBAGAFQAGAFABAHQABAKgEAIQgEAIgJABIgFAAQgSAAgCgPg");
	this.shape.setTransform(126.1,-32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaDVQgMgIgGgNQgGgMgBgPQgCgPACgPIAFgaQAIghANgeQANgdAQgaQAQgcATgZIAmgxIADgKIAAgPIgCgKQgCgEgDAFIgTAUIgWAUIgZAOQgNAGgNAAQgNAAgIgGQgIgFgEgIQgFgIgBgLIAAgUQABgVAJgRQAJgRATgKQAdgOAeAHIALAEQAFABADAGQAGAKgNABIgMAAIgMACQgRADgJAKQgLAKgEAMQgFAMgBAMQAAAMADAFQAEADAIgGIARgQIATgVIARgQIAJgIIAOgHIAOgDQAGABACAGIAEATIAFATIABAGIAUgTIAUgRIAVgSIAWgOIABAAIAAAAIgBADIgBABIgQAXIgQAVIgSAXIgSAWQgHAKgCAJIgDAVIgKBMQgFAqgLAnQgJAogRAjQgSAigdAXIgPACQgJgBgIgEgAgcgOIgZAqIgVAsQgIAXgFAZIgCAfQAAAOAHAPQAJgHAJgPIAPghIAMgiIAIgbIAIgZIAKglIAIgiQADgRgBgHg");
	this.shape_1.setTransform(110.7,-20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBmIgNgJIgJgLIgFgPQgFgaAHgcIAQgxQAEgNgDgDQgEgFgMAJQgJAGgHAOIgNAdIgJAfIgJAZIgCAGQgHAIgFgJIgDgIIgCgIIgEgYIACgdIAHggIAJggIAKgYQACgFAGgCQAFgBAGACQAGACAEAFQAEAGAAAIIgCADIgCAHIgCAGIgBAEIAKgLIAKgMIALgLQAFgEAIgCQAIgBAIAEQAIAEAGAGQAFAHADAIQACAIgBAIQgCAPgHAPIgNAdIgLAdQgFAPgBAPQgBALADADQAEACADgCIAJgHIAGgHQAUgVAQgXIAfgsQANgTAEgCQAEgCgCAHIgHAUIgIAVIgOAcIgUAiQgLAQgNAMQgNAMgMACIgFAAQgFAAgGgBg");
	this.shape_2.setTransform(90.3,-30.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjB+QgJgEgHgHQgGgIgCgKQgGgcACggQABggAFgZIAFgRQAEgFAHABQAGABAHAFQAGAGAEAKQAEAJgCAKIgCARIgCASIgBANIgCASIgDARIAAANQAAAIAFgFIAMgPIAhgyIAggwIAFgHIABAAIABABQADAMgDAGIgCAHIgLAWIgPAdIgPAbIgLASIgLAQIgHAFIgJAEIgJACgAghhBQgJgJgEgMQgDgLACgNQABgHAGgFQAHgGAGABIAHACIAGAFQAGAOgFAOQgGAPgIALQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgCgCg");
	this.shape_3.setTransform(75.2,-32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzDvQgOgGgEgNQgJgggBgiQgBgnAEgrQAEgrAIgqQAJgrAMgpQAMgpAOglIAOgeIAOgbQADgGAFgDQAFgDAHACQANADAAAPQACAggFAfQgEAggJAeQgJAdgNAdQgLAcgPAZIgCAEIgBAFIgIAxIgFA0IgBAuQACAVADAMQAEAEAEAAIAJgEIAYgjIAXgkIAUgkIAUgfQAEgFACACQADACgBAFIgLAaIgMAaIgZA4QgNAdgSAWQgKAOgPAEIgGAAQgLAAgKgFgAAJhwIgWBXIAJgSIAKgdIALgiIAKgkIAHggIADgXQgRAqgLArg");
	this.shape_4.setTransform(62.5,-38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzDvQgOgGgEgNQgJgggBgiQgBgnAEgrQAEgrAIgqQAJgrAMgpQAMgpAOglIAOgeIAOgbQADgGAFgDQAFgDAHACQANADAAAPQACAggFAfQgEAggJAeQgJAdgNAdQgLAcgPAZIgCAEIgBAFIgIAxIgFA0IgBAuQACAVADAMQAEAEAEAAIAJgEIAYgjIAXgkIAUgkIAUgfQAEgFACACQADACgBAFIgLAaIgMAaIgZA4QgNAdgSAWQgKAOgPAEIgGAAQgLAAgKgFgAAJhwIgWBXIAJgSIAKgdIALgiIAKgkIAHggIADgXQgRAqgLArg");
	this.shape_5.setTransform(48.6,-35.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXBZIgMgHQgFgEgCgIIgEgPIAEgeIAGggQAHgaAQgWQAPgXAYgJQAIgDAKgBQAKAAAHAEQAHAEAFAGQAFAHgBAJIgCAGIgBAGIgEADIgDgCIgCgFIgDgFIgFgEIgIgCQgLACgKAPQgLAOgJATIgOAkIgHAbQgCAOAFABQADAAAIgIIAOgWIAQgaIAMgWIAGgKQAGgHAHAAQAGgBAGAEQAGADADAHQADAGgCAIIgHAVQgFAMABAKQAAAOAGADQAFAEAMgHQAKgGAJgNIASgaIARgaIAOgUIADgDIAEgCIAEACIAAAEIgLAlQgHARgKAQQgJAPgNAOQgNANgQAKQgKAFgJAAQgIAAgHgDQgIgEgFgHIgJgPIgJAKIgLAKIgPAIQgHADgJAAg");
	this.shape_6.setTransform(31.7,-23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBNQgRgCgKgNQgMgPgCgWQgCgWAHgUQAFgWAOgQQANgRATgEQAFgCAHADQAHAEACAGIADALIgBANIgCAQIAAASIgDAEIgEgCQgHgIgCgIIgGgPQgDAAgEAIIgIAQIgEAUIgBATQACALAEAFQAEAEAFABIALgCIAMgIIAxglQAYgTAUgWQAGgEACADQACACgCAFIgGANIgJAMIgSAUIgMAOIgIAJIgGAGIgWASIgUAOQgMAGgMAAIgIgBg");
	this.shape_7.setTransform(14.4,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.calling, new cjs.Rectangle(-2.1,-82.4,140.9,101.7), null);


(lib.call = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAJQgCgJAFgIQAFgJAJgCQAGgCAHAEQAGAEACAHQABAKgDAHQgCAHgJACIgIABQgOAAgDgMg");
	this.shape.setTransform(16.4,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghDlQgNgEgGgMQgLgegEgfQgGglAAgpQAAgoAEgoQAEgpAHgoQAIgoAJgkIAKgeIAMgbQACgFAFgEQAFgDAGABQALACACAOQAEAegBAeQgBAegFAdQgGAdgIAbQgJAcgMAZIgBAEIgBAEIgCAvIAAAyIADArQAEAUAEAKQAEAFAEgCIAIgEIATgjIASglIAQgiIAPggQADgFADABQADACAAAFIgIAaIgJAZIgTA3QgJAcgPAXQgJAOgMAFIgKABQgIAAgIgDgAgKhqIgNBUIAHgSIAIgcIAHghIAEgiIAEggIABgWQgLApgHAqg");
	this.shape_1.setTransform(4.4,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghDlQgNgEgGgMQgLgegEgfQgGglAAgpQAAgoAEgoQAEgpAHgoQAIgoAJgkIAKgeIAMgbQACgFAFgEQAFgDAGABQALACACAOQAEAegBAeQgBAegFAdQgGAdgIAbQgJAcgMAZIgBAEIgBAEIgCAvIAAAyIADArQAEAUAEAKQAEAFAEgCIAIgEIATgjIASglIAQgiIAPggQADgFADABQADACAAAFIgIAaIgJAZIgTA3QgJAcgPAXQgJAOgMAFIgKABQgIAAgIgDgAgKhqIgNBUIAHgSIAIgcIAHghIAEgiIAEggIABgWQgLApgHAqg");
	this.shape_2.setTransform(-8.4,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBYIgMgGQgFgCgEgJIgEgNIAAgdIADgeQAGgZALgXQAMgWAXgLQAHgEAJgBQAJgBAIACQAHADAEAFQAFAHABAIIgBAHIgCAFIgDADIgCgCIgCgEIgEgEIgGgEIgIgBQgIADgKAPQgIAPgGASIgLAjIgEAZQABAOADAAQAEAAAGgIIAMgVIAMgaIAJgXIAFgKQAFgHAGgBQAGgBAGADQAGADADAGQADAFgBAIIgEAUQgDANABAJQACAMAFADQAGADALgIQAHgGAJgNIAOgaIAOgaIAKgUIADgEIAEgCIADACIABADIgHAjQgEASgIAPQgHAQgMAOQgKAOgPAKQgJAGgIABQgIABgIgDQgGgCgGgGIgJgOIgIAKIgKALIgMAIQgHAEgIABg");
	this.shape_3.setTransform(-23.9,40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9A+QgMgNgEgVQgEgUAEgUQADgVALgQQALgRARgGQAFgCAHADQAHACADAFIADAKIAAANIAAAPIABARIgBAEIgFgBQgHgHgDgHIgHgOQgDABgDAHIgFAQIgDATIACASQADAKADAEQAFAEAFAAIAKgDIALgIIAqgnQAUgUARgYQAFgEACADQACACgBAEIgEANIgIAMIgOAVIgKAOIgHAJIgFAGIgTATIgSAPQgOAJgPAAQgQAAgLgMg");
	this.shape_4.setTransform(-40.1,45.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.call, new cjs.Rectangle(-59.5,-11.7,91,94), null);


(lib.booknow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAdIgPgnIgOAnIgOAAIgVg5IANAAIAQAqIAQgqIAKAAIAQArIAQgrIAMAAIgWA5g");
	this.shape.setTransform(56.1,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAaQgHgEgFgHQgDgGAAgJQAAgIADgHQAFgGAHgEQAHgEAIAAQAJAAAHAEQAIAEADAGQAEAHABAIQgBAJgEAGQgDAHgIAEQgHAEgJAAQgIAAgHgEgAgLgMQgFAFgBAHQABAIAFAFQAEAFAHAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgHAAgEAFg");
	this.shape_1.setTransform(47.5,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAmIgqgzIAAAzIgOAAIAAhLIAMAAIApAyIAAgyIAOAAIAABLg");
	this.shape_2.setTransform(39.5,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOApIgTgZIgLAJIAAAQIgNAAIAAhRIANAAIAAAwIAcgZIAQAAIgYAYIAbAig");
	this.shape_3.setTransform(29.1,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAaQgHgEgFgHQgEgGAAgJQAAgIAEgHQAFgGAHgEQAHgEAIAAQAJAAAHAEQAHAEAEAGQAEAHAAAIQAAAJgEAGQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgMgMQgEAFAAAHQAAAIAEAFQAFAFAHAAQAIAAAFgFQAEgFAAgIQAAgHgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_4.setTransform(21.6,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAaQgIgEgEgHQgDgGAAgJQAAgIADgHQAEgGAIgEQAHgEAIAAQAJAAAHAEQAHAEAEAGQAFAHAAAIQAAAJgFAGQgEAHgHAEQgHAEgJAAQgIAAgHgEgAgLgMQgGAFAAAHQAAAIAGAFQAEAFAHAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgHAAgEAFg");
	this.shape_5.setTransform(14.6,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghAmIAAhLIAjAAQAOgBAHAGQAIAFAAAKQAAAFgEAFQgCAEgEADQAGAAAEAGQADAEAAAIQAAAKgIAFQgHAGgPgBgAgTAbIAWAAQARAAAAgLQAAgLgRAAIgWAAgAgTgFIATAAQAIAAAEgDQAEgDAAgFQAAgFgEgDQgEgCgIAAIgTAAg");
	this.shape_6.setTransform(7.1,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnuiQIPdAAIAAEhIvdAAg");
	this.shape_7.setTransform(31.4,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.2)").s().p("AnuCRIAAkhIPdAAIAAEhg");
	this.shape_8.setTransform(31.4,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.booknow, new cjs.Rectangle(-19.1,11.1,101,31), null);


(lib.bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_bike();
	this.instance.parent = this;
	this.instance.setTransform(0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bike, new cjs.Rectangle(0,11,300,250), null);


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dbl_badge();
	this.instance.parent = this;
	this.instance.setTransform(185,-289);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.badge, new cjs.Rectangle(185,-289,113,61), null);


(lib.answer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBiQgGgBgDgGQgCgGADgHIADgdIAEgiIACgiIAEgiQABgFADgDIAIgDIAJABQAEABACAFQADAKgCAPIgEAeIASgeIAVgfQALgPAOgKQAOgKARAAQAJABAGAGIAIANIAFAOIAAANIgHARIgGASQgCAKABAIQACAIAIAGQAEAEgDACIgKAEIgNAAQgHgBgCgDQgKgKgDgMQgEgLACgMQABgNAFgMIALgYQgTALgPAUQgOAUgNAWIgZAwIgXAuQgDAEgEAAIgDgBg");
	this.shape.setTransform(103.4,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BRQgQgKgDgaQgDgUACgWQAEgVAIgUQAIgTAQgNQAOgNAWgEQALACAGAIQAHAHgBANIgEAUQgDAJgIAKIgMANIgPAOIgMARQgFAIABAFQAAAPAGACQAGAEAJgCQAJgCAJgFIAOgJIAOgNIAPgRIAPgQIAMgOIAHgIIAHgHIAHgCQACABgCAIIgJARIgLARIgSAYIgUAYIgYATQgKAIgOAEIgOABQgPAAgMgHgAgeguQgHAJgCARIATgTQAJgKACgNQgNAGgIAKg");
	this.shape_1.setTransform(89.5,41.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah0BdQgHgEgEgHQgFgIAAgRIACgkIAFgiIADgZQAAgFAGAAIAMAEQAHACAFAHQAFAHAAAJIgDAXIgDAVIgEAUIgGAZQACACAGgKIAMgYIANgdIAJgVQADgFAAgFIACgLQADgFAFAAIAJACIAJAGIAFAEQADAGAAAMIgBAZIgBAaQAAANAFAHIAFABQACAAACgEIALgiIAKgpIAGgqQACgVgCgOQgBgHAFgCQAFgCAGACIAMAIQAFAFABAIQACAPAIAJQAJAKALAEQAMAFANgBQANAAALgDIAEAAIAAACIgDAFQgJAHgKAEQgKADgLAAIgWgDQgKgDgIgGIgIAhIgKAjQgGARgKANQgJANgMAFIgIABIgKgCIgKgGIgIgGQgFgGgCgIIgDgPIAAgQIgBgOIgIATIgMAaIgPAZQgHAKgFABQgJgBgIgEg");
	this.shape_2.setTransform(70,42.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag4CSQgIgBgFgFQgNgMgEgQQgDgPADgQIAGgSQAKgVAMgQIAagdIgXgbQgMgPgCgSQgDgVALgTQAJgUAOgMIANgIQAGgEAIADIAHABIAFACIAGACQADACABAEIADAYIAEAPIAEAMIAFAKIAAAJQgBAEgHgCQgMgDgGgMIgKgXIgEgHIgDgHQgEAAgGAEIgJAMQgEAHAAAKQAAAJAFAIIAHAHIAJAIIAJAJIAIAGIADADIAFgCIAQgIIAVgLIAWgKIARgEQADAAACACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgFAGIgHAFIgEAEIgWAOIgWAPIgEADIgEACIALAXQAEAKAAAJIgCAUIgGAXIgMAZIgPAWQgIAKgKAGQgLAHgNABgAgZAkIgQAaIgMAbQgFAMAEAJQAKgFAKgNQAKgMAHgNQAHgOACgNQADgNgGgJg");
	this.shape_3.setTransform(49.2,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBkIgMgIIgJgNIgEgOQgDgaAIgaIASgwQAFgMgDgEQgDgEgMAHQgKAGgIANIgNAdIgMAdIgJAYIgCAGQgIAHgEgJIgDgIIgBgIIgCgXIADgdIAIgfIALgfIALgXQACgFAGgBQAFgBAGACQAGADADAGQAEAFAAAHIgDAEIgCAGIgCAGIgCAEIALgLIAKgLIAMgJQAFgEAIgBQAIgBAHAEQAIAEAFAHQAFAGACAJQACAIgBAHQgEAPgHAOIgOAcIgMAcQgGAPgCAOQgCALADACQADADAFgCIAIgGIAHgHQATgSARgXIAigqQAOgRAEgCQADgBgCAGIgHATIgKAUIgPAbIgVAgQgMAPgNALQgOAMgLABIgEAAQgGAAgGgDg");
	this.shape_4.setTransform(34.2,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABnDXIgDgEQgPgugFguIgBglIADgmIAAgBIgPAAIgYACIgYAEIgRACIgLAGQgUARgQAUIgjAmQgRASgUAPQgTAQgaAHQgHACgHgFQgDgDACgEIAHgIQAdgaAbgcIA1g6IABgCIAEgDIgugEIgsgGIgPgDIgPgEQgEgEAEgBIAGgBIAPgEIAPgEIA9gIIA4gHIAFgCIADgCQAVgYASgZIAig0IAeg1IAfg2QAHgNAPACIAIAGQAEAEABAGQABAwgGAtIgMBbIAAACIAAACIAYADQAMACAFAMQADAHgIAHIgSAJIgUAFIgCABIAAADQgIApgDAsIgIBWIgCAGIgEADgABSg6IgRAVIgRAUIgMARIABAAIAXgCIAYgDIAAgBIABgBIAGgiIAEgig");
	this.shape_5.setTransform(4.8,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer, new cjs.Rectangle(-19,-3.5,139.8,94), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(103,-131.9,1,1,0,0,0,60,38);

	this.instance_1 = new lib.moneynumbers();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122.9,-129.9,1,1,0,0,0,38.2,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.4,-153.7,78,49);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.booknow();
	this.instance.parent = this;
	this.instance.setTransform(31.6,-213.9,1,1,0,0,0,62.6,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-49.6,-235.3,100,30), null);


// stage content:
(lib._300x250_3talk_dog = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// badge
	this.instance = new lib.badge();
	this.instance.parent = this;
	this.instance.setTransform(150,540,1,1,0,0,0,150,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(524));

	// Layer_7
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.5,213.4,1.349,12.915,45,0,0,145.2,27);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(137).to({_off:false},0).to({alpha:0.5},14).to({alpha:0},27).to({scaleX:1.35,scaleY:12.89,rotation:44.9,x:31.9,y:213,alpha:1},29).to({scaleX:1.35,scaleY:12.92,rotation:45,x:31.5,y:213.4,alpha:0.309},6).to({alpha:0.77},11).to({scaleX:1.35,scaleY:12.89,rotation:44.9,x:31.9,y:213,alpha:0.641},12).to({scaleX:1.35,scaleY:12.92,rotation:45,x:31.5,y:213.4,alpha:0},46).to({alpha:0.531},16).to({alpha:0.012},58).to({alpha:0.75},75).to({alpha:0},39).to({alpha:0.82},53).wait(1));

	// Layer_3
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135.7,490.9,1,1,0,0,0,62.6,33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).wait(1).to({regX:0.4,regY:-220.4,x:73.5,y:237.4,alpha:0.004},0).wait(1).to({y:237.1,alpha:0.015},0).wait(1).to({y:236.6,alpha:0.037},0).wait(1).to({y:235.8,alpha:0.07},0).wait(1).to({y:234.6,alpha:0.116},0).wait(1).to({y:233,alpha:0.179},0).wait(1).to({y:231,alpha:0.26},0).wait(1).to({y:228.6,alpha:0.356},0).wait(1).to({y:225.9,alpha:0.463},0).wait(1).to({y:223.2,alpha:0.571},0).wait(1).to({y:220.7,alpha:0.67},0).wait(1).to({y:218.6,alpha:0.755},0).wait(1).to({y:216.9,alpha:0.824},0).wait(1).to({y:215.5,alpha:0.879},0).wait(1).to({y:214.5,alpha:0.921},0).wait(1).to({y:213.7,alpha:0.952},0).wait(1).to({y:213.1,alpha:0.975},0).wait(1).to({y:212.8,alpha:0.989},0).wait(1).to({y:212.6,alpha:0.997},0).wait(1).to({regX:62.6,regY:33,x:135.7,y:465.9,alpha:1},0).wait(369));

	// money
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.8,194);
	this.instance_3.alpha = 0.109;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).wait(1).to({regX:92.6,regY:-129.1,x:228.4,y:62,alpha:0.238},0).wait(1).to({y:58.6,alpha:0.388},0).wait(1).to({y:54.8,alpha:0.56},0).wait(1).to({y:51.3,alpha:0.713},0).wait(1).to({y:49.1,alpha:0.815},0).wait(1).to({y:47.6,alpha:0.878},0).wait(1).to({y:46.7,alpha:0.918},0).wait(1).to({y:46.1,alpha:0.945},0).wait(1).to({y:45.7,alpha:0.964},0).wait(1).to({y:45.4,alpha:0.978},0).wait(1).to({y:45.2,alpha:0.987},0).wait(1).to({y:45.1,alpha:0.993},0).wait(1).to({y:45,alpha:0.997},0).wait(1).to({y:44.9,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:135.8,y:174,alpha:1},0).wait(389));

	// from
	this.instance_4 = new lib.from();
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.2,164.5,1,1,0,0,0,80.9,36.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(127).to({_off:false},0).wait(1).to({regX:161.8,regY:-83,x:235.1,y:45.1,alpha:0.012},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.285},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.991},0).wait(1).to({regX:80.9,regY:36.4,x:154.2,y:164.5,alpha:1},0).wait(386));

	// Layer_4
	this.instance_5 = new lib.calling();
	this.instance_5.parent = this;
	this.instance_5.setTransform(166.4,241.3,1,1,0,0,0,128.6,92.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.call();
	this.instance_6.parent = this;
	this.instance_6.setTransform(223.5,112.7,1,1,0,0,0,61.5,63.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({_off:false},0).wait(1).to({regX:66.9,regY:-30.3,x:104.7,y:118.7,alpha:0.005},0).wait(1).to({y:118.3,alpha:0.022},0).wait(1).to({y:117.8,alpha:0.052},0).wait(1).to({y:116.8,alpha:0.101},0).wait(1).to({y:115.5,alpha:0.171},0).wait(1).to({y:113.7,alpha:0.265},0).wait(1).to({y:111.5,alpha:0.381},0).wait(1).to({y:109.1,alpha:0.508},0).wait(1).to({y:106.8,alpha:0.631},0).wait(1).to({y:104.8,alpha:0.736},0).wait(1).to({y:103.2,alpha:0.82},0).wait(1).to({y:102,alpha:0.884},0).wait(1).to({y:101.1,alpha:0.931},0).wait(1).to({y:100.4,alpha:0.964},0).wait(1).to({y:100,alpha:0.985},0).wait(1).to({y:99.8,alpha:0.996},0).wait(1).to({regX:128.6,regY:92.2,x:166.4,y:222.3,alpha:1},0).wait(17).to({regX:66.9,regY:-30.3,x:104.7,y:99.8,alpha:0.995},0).wait(1).to({y:100.2,alpha:0.978},0).wait(1).to({y:100.7,alpha:0.948},0).wait(1).to({y:101.7,alpha:0.899},0).wait(1).to({y:103,alpha:0.829},0).wait(1).to({y:104.8,alpha:0.735},0).wait(1).to({y:107,alpha:0.619},0).wait(1).to({y:109.4,alpha:0.492},0).wait(1).to({y:111.7,alpha:0.369},0).wait(1).to({y:113.7,alpha:0.264},0).wait(1).to({y:115.3,alpha:0.18},0).wait(1).to({y:116.5,alpha:0.116},0).wait(1).to({y:117.4,alpha:0.069},0).wait(1).to({y:118.1,alpha:0.036},0).wait(1).to({y:118.5,alpha:0.015},0).wait(1).to({y:118.7,alpha:0.004},0).wait(1).to({regX:128.6,regY:92.2,x:166.4,y:241.3,alpha:0},0).to({_off:true},9).wait(415));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).wait(1).to({regX:-14.8,regY:26.4,x:147.2,y:75.4,alpha:0.004},0).wait(1).to({y:75.2,alpha:0.015},0).wait(1).to({y:74.8,alpha:0.037},0).wait(1).to({y:74.2,alpha:0.07},0).wait(1).to({y:73.3,alpha:0.116},0).wait(1).to({y:72.1,alpha:0.179},0).wait(1).to({y:70.6,alpha:0.26},0).wait(1).to({y:68.7,alpha:0.356},0).wait(1).to({y:66.7,alpha:0.463},0).wait(1).to({y:64.6,alpha:0.571},0).wait(1).to({y:62.8,alpha:0.67},0).wait(1).to({y:61.2,alpha:0.755},0).wait(1).to({y:59.8,alpha:0.824},0).wait(1).to({y:58.8,alpha:0.879},0).wait(1).to({y:58,alpha:0.921},0).wait(1).to({y:57.4,alpha:0.952},0).wait(1).to({y:57,alpha:0.975},0).wait(1).to({y:56.7,alpha:0.989},0).wait(1).to({y:56.5,alpha:0.997},0).wait(1).to({regX:61.5,regY:63.6,x:223.5,y:93.7,alpha:1},0).wait(395));

	// type21
	this.instance_7 = new lib.is();
	this.instance_7.parent = this;
	this.instance_7.setTransform(85.1,191.2,1,1,0,0,0,26.8,61.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.the();
	this.instance_8.parent = this;
	this.instance_8.setTransform(151.7,125.2,1,1,0,0,0,22.4,30.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(46).to({_off:false},0).wait(1).to({regX:2.3,regY:-31.4,x:60.6,y:98.2,alpha:0.005},0).wait(1).to({y:97.8,alpha:0.022},0).wait(1).to({y:97.3,alpha:0.052},0).wait(1).to({y:96.3,alpha:0.101},0).wait(1).to({y:95,alpha:0.171},0).wait(1).to({y:93.2,alpha:0.265},0).wait(1).to({y:91,alpha:0.381},0).wait(1).to({y:88.6,alpha:0.508},0).wait(1).to({y:86.3,alpha:0.631},0).wait(1).to({y:84.3,alpha:0.736},0).wait(1).to({y:82.7,alpha:0.82},0).wait(1).to({y:81.5,alpha:0.884},0).wait(1).to({y:80.6,alpha:0.931},0).wait(1).to({y:79.9,alpha:0.964},0).wait(1).to({y:79.5,alpha:0.985},0).wait(1).to({y:79.3,alpha:0.996},0).wait(1).to({regX:26.8,regY:61.5,x:85.1,y:172.2,alpha:1},0).wait(23).to({regX:2.3,regY:-31.4,x:60.6,y:79.3,alpha:0.995},0).wait(1).to({y:79.7,alpha:0.978},0).wait(1).to({y:80.2,alpha:0.948},0).wait(1).to({y:81.2,alpha:0.899},0).wait(1).to({y:82.5,alpha:0.829},0).wait(1).to({y:84.3,alpha:0.735},0).wait(1).to({y:86.5,alpha:0.619},0).wait(1).to({y:88.9,alpha:0.492},0).wait(1).to({y:91.2,alpha:0.369},0).wait(1).to({y:93.2,alpha:0.264},0).wait(1).to({y:94.8,alpha:0.18},0).wait(1).to({y:96,alpha:0.116},0).wait(1).to({y:96.9,alpha:0.069},0).wait(1).to({y:97.6,alpha:0.036},0).wait(1).to({y:98,alpha:0.015},0).wait(1).to({y:98.2,alpha:0.004},0).wait(1).to({regX:26.8,regY:61.5,x:85.1,y:191.2,alpha:0},0).to({_off:true},5).wait(417));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(107).to({_off:false},0).wait(1).to({regX:-37.1,regY:-0.2,x:92.2,y:94.5,alpha:0.004},0).wait(1).to({y:94.3,alpha:0.015},0).wait(1).to({y:93.9,alpha:0.037},0).wait(1).to({y:93.2,alpha:0.07},0).wait(1).to({y:92.3,alpha:0.116},0).wait(1).to({y:91.1,alpha:0.179},0).wait(1).to({y:89.6,alpha:0.26},0).wait(1).to({y:87.8,alpha:0.356},0).wait(1).to({y:85.7,alpha:0.463},0).wait(1).to({y:83.7,alpha:0.571},0).wait(1).to({y:81.8,alpha:0.67},0).wait(1).to({y:80.2,alpha:0.755},0).wait(1).to({y:78.9,alpha:0.824},0).wait(1).to({y:77.9,alpha:0.879},0).wait(1).to({y:77.1,alpha:0.921},0).wait(1).to({y:76.5,alpha:0.952},0).wait(1).to({y:76,alpha:0.975},0).wait(1).to({y:75.8,alpha:0.989},0).wait(1).to({y:75.6,alpha:0.997},0).wait(1).to({regX:22.4,regY:30.4,x:151.7,y:106.2,alpha:1},0).wait(397));

	// type1
	this.instance_9 = new lib.talkeetna();
	this.instance_9.parent = this;
	this.instance_9.setTransform(148.2,124.6,1,1,0,0,0,125.4,75.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.answer();
	this.instance_10.parent = this;
	this.instance_10.setTransform(119.4,86.8,1,1,0,0,0,95.4,63.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(1).to({regX:62.6,regY:8.6,x:85.4,y:57.9,alpha:0.005},0).wait(1).to({y:57.6,alpha:0.022},0).wait(1).to({y:57,alpha:0.052},0).wait(1).to({y:56,alpha:0.101},0).wait(1).to({y:54.6,alpha:0.171},0).wait(1).to({y:52.7,alpha:0.265},0).wait(1).to({y:50.4,alpha:0.381},0).wait(1).to({y:47.8,alpha:0.508},0).wait(1).to({y:45.4,alpha:0.631},0).wait(1).to({y:43.3,alpha:0.736},0).wait(1).to({y:41.6,alpha:0.82},0).wait(1).to({y:40.3,alpha:0.884},0).wait(1).to({y:39.4,alpha:0.931},0).wait(1).to({y:38.7,alpha:0.964},0).wait(1).to({y:38.3,alpha:0.985},0).wait(1).to({y:38.1,alpha:0.996},0).wait(1).to({regX:125.4,regY:75.2,x:148.2,y:104.6,alpha:1},0).wait(62).to({regX:62.6,regY:8.6,x:85.4,y:38.1,alpha:0.995},0).wait(1).to({y:38.4,alpha:0.978},0).wait(1).to({y:39,alpha:0.948},0).wait(1).to({y:39.9,alpha:0.899},0).wait(1).to({y:41.2,alpha:0.829},0).wait(1).to({y:43,alpha:0.735},0).wait(1).to({y:45.2,alpha:0.619},0).wait(1).to({y:47.7,alpha:0.492},0).wait(1).to({y:50,alpha:0.369},0).wait(1).to({y:52,alpha:0.264},0).wait(1).to({y:53.6,alpha:0.18},0).wait(1).to({y:54.8,alpha:0.116},0).wait(1).to({y:55.7,alpha:0.069},0).wait(1).to({y:56.3,alpha:0.036},0).wait(1).to({y:56.7,alpha:0.015},0).wait(1).to({y:56.9,alpha:0.004},0).wait(1).to({regX:125.4,regY:75.2,x:148.2,y:123.6,alpha:0},0).to({_off:true},1).wait(419));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(105).to({_off:false},0).wait(1).to({regX:49.2,regY:41.1,x:73.2,y:63.9,alpha:0.004},0).wait(1).to({y:63.7,alpha:0.015},0).wait(1).to({y:63.3,alpha:0.037},0).wait(1).to({y:62.6,alpha:0.07},0).wait(1).to({y:61.7,alpha:0.116},0).wait(1).to({y:60.5,alpha:0.179},0).wait(1).to({y:59,alpha:0.26},0).wait(1).to({y:57.2,alpha:0.356},0).wait(1).to({y:55.1,alpha:0.463},0).wait(1).to({y:53.1,alpha:0.571},0).wait(1).to({y:51.2,alpha:0.67},0).wait(1).to({y:49.6,alpha:0.755},0).wait(1).to({y:48.3,alpha:0.824},0).wait(1).to({y:47.3,alpha:0.879},0).wait(1).to({y:46.5,alpha:0.921},0).wait(1).to({y:45.9,alpha:0.952},0).wait(1).to({y:45.4,alpha:0.975},0).wait(1).to({y:45.2,alpha:0.989},0).wait(1).to({y:45,alpha:0.997},0).wait(1).to({regX:95.4,regY:63.9,x:119.4,y:67.8,alpha:1},0).wait(399));

	// Layer_5
	this.instance_11 = new lib.hotel();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(84).to({_off:false},0).wait(1).to({regY:125,y:125,alpha:0.001},0).wait(1).to({alpha:0.005},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.074},0).wait(1).to({alpha:0.101},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.265},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.508},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.854},0).wait(1).to({alpha:0.884},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.949},0).wait(1).to({alpha:0.964},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.985},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regY:300,y:300,alpha:1},0).wait(406));

	// blok
	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(153,299,1,1,0,0,0,157,304.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:0},17,cjs.Ease.get(1)).to({_off:true},1).wait(506));

	// Layer_2
	this.instance_13 = new lib.bike();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,290,1,1,0,0,0,150,300);
	this.instance_13.alpha = 0.109;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,y:293,alpha:1},7).to({regY:299.9,scaleX:1.21,scaleY:1.21,x:150.1,y:299.9},68).to({_off:true},1).wait(408));

	// Layer_1
	this.instance_14 = new lib.ski();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,300,1.25,1.25,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:1,scaleY:1,y:295},51).wait(473));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.5,63.8,375,312.5);
// library properties:
lib.properties = {
	id: 'C7CB987D005142BCAE17C71A41D11768',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dbl_badge.png", id:"dbl_badge"},
		{src:"images/300x250_3talk_dog_atlas_NP_.jpg", id:"300x250_3talk_dog_atlas_NP_"}
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
an.compositions['C7CB987D005142BCAE17C71A41D11768'] = {
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