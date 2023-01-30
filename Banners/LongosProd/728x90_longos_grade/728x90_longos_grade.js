(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_longos_grade_atlas_", frames: [[0,0,442,325],[0,707,234,210],[0,327,284,378]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["728x90_longos_grade_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["728x90_longos_grade_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["728x90_longos_grade_atlas_"];
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


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYApIgSgmIgGgLIgDALIgTAmIgCAAIgehRIASAAIAMAhIAEAOIACgFIADgJIAPgiIABAAIAQAiIAGAOIAEgOIALghIARAAIgdBRg");
	this.shape.setTransform(439.8,-253.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_1.setTransform(429.2,-253.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgApIgogmIgKgKIABAOIAAAiIgQAAIAAhSIACAAIAoAnIAKALIgBgOIAAgjIAQAAIAABRg");
	this.shape_2.setTransform(420.3,-253.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIAcAAQANAAAHAHQAJAHAAANQAAANgJAHQgHAHgNAAIgLAAIAAAbgAgLAAIALAAQAMAAAAgNQAAgMgMAAIgLAAg");
	this.shape_3.setTransform(410,-253.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_4.setTransform(401.4,-253.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARApIAAggIghAAIAAAgIgRAAIAAhRIARAAIAAAjIAhAAIAAgjIARAAIAABRg");
	this.shape_5.setTransform(392.3,-253.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAZIANgIQAHAKAJAAQAFAAADgCQADgDAAgDQAAgEgDgDIgJgEIgDgCQgKgFgFgEQgFgGAAgKQAAgJAGgGQAHgHAKAAQARAAAHAOIgNAIQgEgHgHAAQgCAAgDACQgCACAAADQAAAEADACQACACAFACIAEACQALAFAFAEQAGAHAAAJQAAAMgIAGQgHAGgNAAQgVAAgIgRg");
	this.shape_6.setTransform(384.7,-253.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AoJCiIAAlDIQUAAIAAFDg");
	this.shape_7.setTransform(412.9,-253.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(360.6,-269.8,104.5,32.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(485.4,-374.2,0.507,0.507,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(485.4,-403.6,244,192.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(474,-388,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(474,-388,90.9,121), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgHAKAAQALAAAIAHQAIAIAAAKQAAALgIAIQgIAHgLAAQgKAAgIgHg");
	this.shape.setTransform(357.4,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("Ag9BcIAAi3IB7AAIAAApIhKAAIAAAmIBBAAIAAAoIhBAAIAABAg");
	this.shape_1.setTransform(346.6,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AhEBEQgegbABgpQgBgoAegbQAdgaAnAAQApAAAcAaQAeAbAAAoQAAApgeAbQgcAagpAAQgnAAgdgagAgigkQgOAPAAAVQAAAWAOAPQANAPAVAAQAXAAANgPQAMgPAAgWQAAgVgMgPQgNgOgXAAQgVAAgNAOg");
	this.shape_2.setTransform(328.3,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhRBcIAAi3IBHAAQAnAAAaAZQAbAZAAApQAAAqgbAZQgaAZgnAAgAggAyIAQAAQAWAAAMgNQAOgOAAgXQAAgWgOgOQgMgNgWAAIgQAAg");
	this.shape_3.setTransform(302.5,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("Ag4BLQgXgTAAglIAAhvIAxAAIAABvQAAAgAeABQAegBAAggIAAhvIAyAAIAABvQAAAlgXATQgVASgkAAQgjAAgVgSg");
	this.shape_4.setTransform(283.3,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AhEBEQgdgbgBgpQABgoAdgbQAdgaAnAAQApAAAcAaQAeAbgBAoQABApgeAbQgcAagpAAQgnAAgdgagAgjgkQgNAPABAVQgBAWANAPQANAPAWAAQAWAAAOgPQANgPAAgWQAAgVgNgPQgOgOgWAAQgWAAgNAOg");
	this.shape_5.setTransform(263.4,-3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AAWBcIgfg6IgRAAIAAA6IgxAAIAAi3IBKAAQAiAAATATQATARAAAdQAAAlghAQIAmBBgAgagCIAXAAQAZAAAAgYQAAgXgZAAIgXAAg");
	this.shape_6.setTransform(244.6,-3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AhIBcIAAi3IBIAAQAjAAATATQAUASgBAdQABAcgUASQgTASgjAAIgYAAIAAA1gAgYgBIAXAAQAZAAAAgYQAAgYgZAAIgXAAg");
	this.shape_7.setTransform(227.4,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AhBBcIAAi3ICAAAIAAApIhPAAIAAAfIBBAAIAAAmIhBAAIAAAfIBSAAIAAAqg");
	this.shape_8.setTransform(204.6,-3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhJBcIAAi3IBPAAQAcAAAPAMQARANAAAXQAAAegaAJQAiAJAAAiQAAAZgSAOQgTAOgiAAgAgZA1IAcAAQAVAAAAgTQAAgTgVAAIgcAAgAgZgTIAZAAQASAAAAgRQAAgQgSAAIgZAAg");
	this.shape_9.setTransform(188.2,-3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AhRBcIAAi3IBHAAQAnAAAaAZQAbAZAAApQAAAqgbAZQgaAZgnAAgAggAyIARAAQAVAAANgNQANgOgBgXQABgWgNgOQgNgNgVAAIgRAAg");
	this.shape_10.setTransform(164,-3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("Ag/BcIAAi3IAxAAIAACNIBNAAIAAAqg");
	this.shape_11.setTransform(147.2,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("Ag4BLQgXgTAAglIAAhvIAxAAIAABvQAAAgAeABQAegBAAggIAAhvIAyAAIAABvQAAAlgXATQgVASgkAAQgjAAgVgSg");
	this.shape_12.setTransform(129.9,-3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E52527").s().p("AhEBEQgegbABgpQgBgoAegbQAdgaAnAAQApAAAcAaQAeAbAAAoQAAApgeAbQgcAagpAAQgnAAgdgagAgigkQgOAPAAAVQAAAWAOAPQANAPAVAAQAXAAANgPQAMgPAAgWQAAgVgMgPQgNgOgXAAQgVAAgNAOg");
	this.shape_13.setTransform(110,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E52527").s().p("AAuBeIguhhIgsBhQgCAEgBgEIhNi4IAzAAIAjBWIAmhaQAAAAABgBQAAAAAAAAQAAAAABAAQAAABAAAAIAqBaIAghWIAxAAIhMC4IgBACIgCgCg");
	this.shape_14.setTransform(86.8,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E52527").s().p("AA0BeIgEhPIguA2QAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgvg2IgFBPIgwAAIALi5QAAgBABAAQAAAAAAgBQAAAAABABQAAAAABABIBXBiIBWhiQABgBAAAAQABgBAAAAQAAABAAAAQABAAAAABIALC5g");
	this.shape_15.setTransform(56.6,-4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E52527").s().p("AhEBEQgegbABgpQgBgoAegbQAdgaAnAAQApAAAcAaQAeAbAAAoQAAApgeAbQgcAagpAAQgnAAgdgagAgigkQgOAPAAAVQAAAWAOAPQANAPAVAAQAXAAANgPQAMgPAAgWQAAgVgMgPQgNgOgXAAQgVAAgNAOg");
	this.shape_16.setTransform(34.9,-3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E52527").s().p("AA0BeIgEhPIguA2QgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgvg2IgFBPIgwAAIALi5QAAgBABAAQAAAAAAgBQAAAAABABQAAAAABABIBXBiIBWhiQABgBAAAAQABgBAAAAQAAABAAAAQABAAAAABIALC5g");
	this.shape_17.setTransform(13.2,-4.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E52527").s().p("AgXBcIAAhHIhBhwIA2AAIAjBDIAkhDIA0AAIhABuIAABJg");
	this.shape_18.setTransform(308.1,-32.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E52527").s().p("ABPBfIhyhfIAABcIgvAAIAAi5QAAgBABgBQAAAAAAAAQABAAABAAQABAAABABIByBeIAAhbIAuAAIAAC5QAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCgBg");
	this.shape_19.setTransform(289.5,-32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E52527").s().p("AAoBeIgJgWIg/AAIgKAWIgwAAIBai6QAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBZC6gAAPAlIgQgmIgQAmIAgAAg");
	this.shape_20.setTransform(270.4,-33.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E52527").s().p("AhBBcIAAi3ICAAAIAAApIhPAAIAAAfIBBAAIAAAmIhBAAIAAAfIBSAAIAAAqg");
	this.shape_21.setTransform(247.4,-32.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E52527").s().p("AhRBcIAAi3IBHAAQAnAAAaAZQAbAZAAApQAAAqgbAZQgaAZgnAAgAggAyIARAAQAVAAANgNQANgOAAgXQAAgWgNgOQgNgNgVAAIgRAAg");
	this.shape_22.setTransform(230.4,-32.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E52527").s().p("AAoBeIgJgWIg/AAIgKAWIgwAAIBai6QAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBZC6gAAPAlIgQgmIgQAmIAgAAg");
	this.shape_23.setTransform(211.4,-33.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E52527").s().p("AAWBcIgfg6IgRAAIAAA6IgxAAIAAi3IBKAAQAiAAATATQATARAAAdQAAAlghAQIAmBBgAgagCIAXAAQAZAAAAgYQAAgXgZAAIgXAAg");
	this.shape_24.setTransform(194,-32.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E52527").s().p("Ag7BEQgdgbAAgpQAAgoAdgbQAbgaAoAAQAwAAAaAhIgiAdQgPgTgaAAQgVAAgNAOQgLAOgBAWQAAAXANAOQANAQAXAAQAUAAAQgHIAAgTIglAAIAAglIBQAAIAABPQgfAZgwAAQgpAAgcgag");
	this.shape_25.setTransform(175.1,-32.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E52527").s().p("AAoBeIgJgWIg/AAIgKAWIgwAAIBai6QAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBZC6gAAPAlIgQgmIgQAmIAgAAg");
	this.shape_26.setTransform(149.7,-33.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E52527").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgHAKAAQALAAAIAHQAIAIAAAKQAAALgIAIQgIAHgLAAQgKAAgIgHg");
	this.shape_27.setTransform(130.4,-26.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E52527").s().p("Ag9BcIAAi3IB7AAIAAApIhKAAIAAAmIBBAAIAAAoIhBAAIAABAg");
	this.shape_28.setTransform(119.7,-32.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E52527").s().p("AhBBcIAAi3ICAAAIAAApIhPAAIAAAfIBBAAIAAAmIhBAAIAAAfIBSAAIAAAqg");
	this.shape_29.setTransform(104.5,-32.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E52527").s().p("AhBBcIAAi3ICAAAIAAApIhPAAIAAAfIBBAAIAAAmIhBAAIAAAfIBSAAIAAAqg");
	this.shape_30.setTransform(88.9,-32.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E52527").s().p("AhJBcIAAi3IBPAAQAcAAAPAMQARANAAAXQAAAegaAJQAiAJAAAiQAAAZgSAOQgTAOgiAAgAgZA1IAcAAQAVAAAAgTQAAgTgVAAIgcAAgAgZgTIAZAAQASAAAAgRQAAgQgSAAIgZAAg");
	this.shape_31.setTransform(72.5,-32.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E52527").s().p("AAoBeIgJgWIg/AAIgKAWIgwAAIBai6QAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBZC6gAAPAlIgQgmIgQAmIAgAAg");
	this.shape_32.setTransform(47.9,-33.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E52527").s().p("AAoBeIgJgWIg/AAIgKAWIgwAAIBai6QAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBZC6gAAPAlIgQgmIgQAmIAgAAg");
	this.shape_33.setTransform(29.5,-33.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E52527").s().p("AAoBeIgJgWIg/AAIgKAWIgwAAIBai6QAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABIBZC6gAAPAlIgQgmIgQAmIAgAAg");
	this.shape_34.setTransform(11.2,-33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,-46.8,658,60), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(316,-587,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(316,-587,82.4,73.9), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2722").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIANgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgJgJgAgQgQQgHAHAAAJQAAALAHAHQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgIgJAAQgKAAgHAIgAAIARIgDgIQgBgFgEAAIgEAAIAAAMIgHAAIAAgeIALgBQAHAAAEACQADACAAAFQAAAGgHABIAAAAQAEABACAHIACAIgAgEAAIAEAAQAGAAAAgFQABgFgHABIgEAAg");
	this.shape.setTransform(170.1,9.5,0.71,0.71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(142.9,-13.6,0.71,0.71);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(160,-20.2,0.71,0.71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(82.8,1.1,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-1.9,-30.2,174.4,60), null);


(lib.Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAgIgBgCIAAgYIgUgiIAAgCIABgCIACAAIADABIAQAfIARgfIADgBIACAAIABACIAAACIgUAiIAAAYIgBACIgCABIgBgBg");
	this.shape.setTransform(2.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Y, new cjs.Rectangle(-2,-3.1,10.2,14.8), null);


(lib.V = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAhQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgSg7QAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAAAIADAAIABACIAQA2IARg2IABgCIADAAQAAAAABAAQAAABABAAQAAABAAABQAAAAAAABIgSA7QgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(2.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.V, new cjs.Rectangle(-2,-3.1,10.2,14.8), null);


(lib.RED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgSAhQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAg7IABgCIADgBIAOAAQANAAAHAJQAHAJAAAOQAAAPgHAJQgIAJgMAAgAgQAbIAMAAQAKAAAGgIQAFgIAAgLQAAgLgFgHQgGgIgKAAIgMAAg");
	this.shape.setTransform(16.1,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AgRAhIgCgBIgBgCIAAg7IABgDIACAAIAjAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIgBACIgDABIggAAIAAAYIAXAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIgBACIgDABIgXAAIAAAYIAgAAIADABIABACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_1.setTransform(9.7,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AAPAgIgPgdIgPAAIAAAbIAAACIgCABIgDgBIgBgCIAAg7IABgCIADgBIAVAAQAHAAAGAFQAFAFAAAIQAAAHgEAFQgFAEgGABIAOAaIAAACIgBACIgCAAIgDgBgAgPgCIATAAQAFAAADgEQADgDAAgFQAAgFgDgDQgDgEgFAAIgTAAg");
	this.shape_2.setTransform(3.4,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RED, new cjs.Rectangle(-2,-3.1,23.3,14.8), null);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgRAhIgCgBIgBgCIAAg7IABgDIACAAIAjAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIgCACIgCABIggAAIAAAYIAXAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAIgCACIgCABIgXAAIAAAYIAgAAIACABIACACQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape.setTransform(3.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.E, new cjs.Rectangle(-2,-3.1,10.4,14.8), null);


(lib.DELI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgBAgIgBgCIAAg7IABgCIABgBQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIAAA7QAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgBgBg");
	this.shape.setTransform(20,4.5);

	this.text = new cjs.Text(" ", "9px 'GroceryGateway'", "#18423B");
	this.text.lineHeight = 13;
	this.text.parent = this;
	this.text.setTransform(18.5,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AgQAhQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIAAg7QAAgBABgBQAAAAAAgBQABAAAAAAQABAAABAAIACABIABACIAAA4IAeAAIADABIABACIgBACIgDABg");
	this.shape_1.setTransform(15.9,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AgRAhIgCgBIgCgCIAAg7IACgDIACAAIAjAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIgBACIgCABIggAAIAAAYIAXAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgBACIgCABIgXAAIAAAYIAgAAIACABIABACQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_2.setTransform(9.8,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgSAhQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAg7IABgCIADgBIAOAAQANAAAHAJQAHAJAAAOQAAAPgHAJQgIAJgMAAgAgQAbIAMAAQAKAAAGgIQAFgIAAgLQAAgLgFgHQgGgIgKAAIgMAAg");
	this.shape_3.setTransform(3.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DELI, new cjs.Rectangle(-2,-3.1,28.7,14.8), null);


(lib.B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgRAhQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIAAg7IABgCIADgBIATAAQAJAAAFAEQAGAFAAAJQAAAKgIAEQAIAFAAAKQAAAJgFAFQgGAEgJAAgAgOAbIAQAAQAOAAAAgMQAAgMgOAAIgQAAgAgOgCIAQAAQAFAAAEgDQAFgDAAgGQAAgMgOAAIgQAAg");
	this.shape.setTransform(3.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.B, new cjs.Rectangle(-2,-3.1,10.6,14.8), null);


(lib.gg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Y();
	this.instance.parent = this;
	this.instance.setTransform(441.9,-252.1,1,1,0,0,0,3.1,4.2);

	this.instance_1 = new lib.B();
	this.instance_1.parent = this;
	this.instance_1.setTransform(435.2,-252.1,1,1,0,0,0,3.3,4.2);

	this.instance_2 = new lib.RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(418.1,-252.1,1,1,0,0,0,9.6,4.2);

	this.instance_3 = new lib.E();
	this.instance_3.parent = this;
	this.instance_3.setTransform(405.3,-252.1,1,1,0,0,0,3.2,4.2);

	this.instance_4 = new lib.V();
	this.instance_4.parent = this;
	this.instance_4.setTransform(399.2,-252.1,1,1,0,0,0,3.1,4.2);

	this.instance_5 = new lib.DELI();
	this.instance_5.parent = this;
	this.instance_5.setTransform(385.2,-252.1,1,1,0,0,0,12.3,4.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgQBVIAAhVIgihVIAiAAIAQArIARgrIAiAAIgiBVIAABVg");
	this.shape.setTransform(448.6,-231.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AARBVIgahEIgHAAIAABEIgiAAIAAiqIAyAAQAMAAAIAFQAJADAIAHQAHAIADAJQAEAJAAALQAAAPgIANQgIAMgNAFIAdBJgAgQgQIAQAAQAHgBAFgEQAFgGAAgGQAAgHgFgFQgFgFgHAAIgQAAg");
	this.shape_1.setTransform(435.9,-231.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AgyBVIAAiqIBlAAIAAAjIhDAAIAAAiIAyAAIAAAhIgyAAIAAAjIBDAAIAAAhg");
	this.shape_2.setTransform(422.5,-231.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgGgFgKQgDgJAAgMIAAhDQAAgMADgIQAEgKAHgHQAHgGAKgFQAIgEALAAQALAAAJAEQAKAFAGAGQAIAJADAIQAEAJAAALIgiAAQAAgHgFgFQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgEAAgIIAiAAQAAALgEAKQgDAJgIAHQgGAGgKAFQgJAEgLgBQgLABgIgEg");
	this.shape_3.setTransform(409,-231.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgGgFgKQgDgJAAgMIAAhDQAAgMADgIQAEgKAHgHQAHgGAKgFQAIgEALAAQALAAAJAEQAKAFAGAGQAIAJADAIQAEAJAAALIAABDQAAALgEAKQgDAJgIAHQgGAGgKAFQgJAEgLgBQgLABgIgEgAgLgtQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgEAAgIIAAhDQAAgHgFgFQgFgFgHAAQgHAAgEAFg");
	this.shape_4.setTransform(395.6,-231.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18423B").s().p("AARBVIgahEIgHAAIAABEIgiAAIAAiqIAyAAQAMAAAIAFQAKAEAGAGQAIAJADAIQAEAJAAALQAAAPgIANQgIAMgNAFIAdBJgAgQgQIAQAAQAHgBAFgEQAFgFAAgHQAAgHgFgFQgFgFgHAAIgQAAg");
	this.shape_5.setTransform(382.1,-231.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18423B").s().p("AgTBSQgJgEgIgHQgGgGgEgKQgEgJAAgMIAAhDQAAgNAEgHQADgJAHgIQAIgHAJgDQAIgFALAAQAMAAAIAFQAKAEAGAGQAIAHADAKQAEAJAAALIgiAAQAAgHgFgFQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgFAAgHIAAgRIgRAAIAAghIAzAAIAAAyQAAALgEAKQgEAKgHAGQgGAGgKAFQgIAEgMgBQgLABgIgEg");
	this.shape_6.setTransform(368.6,-231.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AgQBWIAAhWIgihVIAiAAIAQArIARgrIAiAAIgiBVIAABWg");
	this.shape_7.setTransform(448.8,-209.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18423B").s().p("AARBWIgHgjIgTAAIgHAjIgiAAIAiirIAhAAIAiCrgAgDARIAGAAIgDgRg");
	this.shape_8.setTransform(437.4,-209.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18423B").s().p("AARBWIgRhWIgQBWIgiAAIgiirIAiAAIARBVIARhVIAhAAIARBVIAShVIAiAAIgiCrg");
	this.shape_9.setTransform(422.4,-209.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18423B").s().p("AgzBWIAAirIBnAAIAAAjIhEAAIAAAiIAyAAIAAAhIgyAAIAAAiIBEAAIAAAjg");
	this.shape_10.setTransform(405.9,-209.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18423B").s().p("AgQBWIAAiIIgiAAIAAgjIBlAAIAAAjIgiAAIAACIg");
	this.shape_11.setTransform(392.8,-209.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18423B").s().p("AARBWIgHgjIgTAAIgHAjIgiAAIAiirIAhAAIAiCrgAgCARIAGAAIgEgRg");
	this.shape_12.setTransform(381.1,-209.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgHgFgJQgDgJAAgMIAAhDQAAgMADgIQAFgKAGgHQAIgHAJgEQAJgEAKAAQAKAAAKAEQAJAEAHAHQAIAIADAJQAEAJAAALIgiAAQAAgIgFgEQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAFQAEAEAHAAQAHAAAFgEQAFgFAAgIIAAgRIgRAAIAAghIAzAAIAAAyQAAAKgEALQgDAIgIAIQgGAHgKAEQgIAEgMAAQgLAAgIgEg");
	this.shape_13.setTransform(368.4,-209.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gg, new cjs.Rectangle(363.3,-259.5,90.6,58.5), null);


// stage content:
(lib._728x90_longos_grade = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(76.7,41.2,0.432,0.432,0,0,0,123.1,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.5,402.7,0.751,0.751,0,0,0,46.9,42.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:231.5,y:462.4},41,cjs.Ease.quartOut).wait(77));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(771.6,375.7,0.75,0.75,-75,0,0,45.5,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:60.5,scaleX:0.75,scaleY:0.75,rotation:0,x:298,y:326.8},41,cjs.Ease.quartOut).wait(82));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(492,363.7,0.75,0.75,-55,0,0,126,92.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:92.7,scaleX:0.75,scaleY:0.75,rotation:0,x:193.3,y:366},41,cjs.Ease.quartOut).wait(82));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(89.5,272.6,0.751,0.751,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({alpha:1},26,cjs.Ease.quartInOut).wait(49));

	// GG_stack_svg
	this.instance_5 = new lib.gg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(29.2,224.3,0.751,0.751,0,0,0,45.2,29.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({regX:45.3,x:89.3,alpha:1},33,cjs.Ease.quartInOut).wait(56));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-211.8,160,0.751,0.751,0,0,0,128.5,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:118.4},41,cjs.Ease.quartInOut).wait(82));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.7,-175.9,1036.3,311);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_longos_grade_atlas_.png", id:"728x90_longos_grade_atlas_"}
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
an.compositions['A8C478718CAB45E28846BC16F88772FB'] = {
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