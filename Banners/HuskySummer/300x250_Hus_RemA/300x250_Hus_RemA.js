(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_Hus_RemA_atlas_", frames: [[238,0,202,316],[0,291,216,54],[0,0,236,289]]}
];


// symbols:



(lib.bb_caf = function() {
	this.spriteSheet = ss["300x250_Hus_RemA_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_MyRewards = function() {
	this.spriteSheet = ss["300x250_Hus_RemA_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_cafe_blur = function() {
	this.spriteSheet = ss["300x250_Hus_RemA_atlas_"];
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
	this.instance = new lib.db_cafe_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,236,289), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape.setTransform(408,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("Ag8BXQgagSAAglIA0AAQACAgAjAAQANAAAJgFQAJgFABgKQAAgMgSgGIgngMQgbgHgNgKQgSgOAAgZQAAgfAbgQQAWgOAfAAQAhAAAWAPQAZASABAfIg1AAQABgMgKgHQgJgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAGQAbAIANALQASAOAAAYQAAAjgbASQgXAOglAAQglAAgXgRg");
	this.shape_1.setTransform(389.7,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AAvBkIgMgkIhFAAIgNAkIg1AAIBKjHIA0AAIBLDHgAAWAaIgWhFIAAAAIgWBFIAsAAg");
	this.shape_2.setTransform(370.5,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AhIBkIAAjHICSAAIAAAqIhfAAIAAApIBSAAIAAAnIhSAAIAABNg");
	this.shape_3.setTransform(352.7,38);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("Ag8BXQgagSAAglIA0AAQABAgAkAAQANAAAJgFQAKgFAAgKQAAgMgSgGIgmgMQgbgHgOgKQgSgOAAgZQAAgfAagQQAXgOAfAAQAhAAAWAPQAZASAAAfIg0AAQABgMgLgHQgIgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAGQAbAIANALQASAOAAAYQAAAjgbASQgXAOglAAQglAAgXgRg");
	this.shape_4.setTransform(325.4,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_5.setTransform(306.8,38);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AhIBKQgagdABgtQgBgsAagdQAbgeAtAAQAuAAAbAeQAZAdABAsQgBAtgZAdQgbAeguAAQgtAAgbgegAgjgoQgKAQAAAYQAAAZAKAQQANASAWAAQAXAAANgSQAKgQAAgZQAAgYgKgQQgNgTgXAAQgWAAgNATg");
	this.shape_6.setTransform(286.1,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AhEBKQgbgdAAgtQAAgsAbgdQAcgeAsAAQAhAAAZARQAcAUAEAjIg0AAQgCgMgKgIQgLgHgQgBQgXAAgMATQgLAQAAAYQAAAZALAQQAMASAXAAQASABANgJQAMgIADgOIglAAIAAglIBUAAIAABsIgiAAIgDgWQgSAaglAAQgsAAgcgeg");
	this.shape_7.setTransform(264.1,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AAmBkQgEgFgDgbQAAgTgGgJQgGgMgQAAIgnAAIAABIIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAdQAAAQgIANQgIANgQAHIAAAAQAaAGADAqQADAnAGAGgAgkgMIAqAAQAZAAAAgXQAAgWgaAAIgpAAg");
	this.shape_8.setTransform(374.4,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_9.setTransform(354.5,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("AA/BkIAAiXIgBAAIgqCXIgmAAIgriXIAAAAIAACXIgxAAIAAjHIBMAAIAiCFIAAAAIAjiFIBMAAIAADHg");
	this.shape_10.setTransform(331.6,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF464").s().p("AA+BkIAAiXIAAAAIgqCXIgnAAIgqiXIAAAAIAACXIgxAAIAAjHIBMAAIAiCFIAAAAIAjiFIBNAAIAADHg");
	this.shape_11.setTransform(305.7,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF464").s().p("AhBBRQgVgWAAgrIAAh1IA0AAIAAB3QAAAVAIAIQAIAKASAAQASAAAJgKQAIgIAAgVIAAh3IA0AAIAAB1QAAArgUAWQgWAVgtAAQgsAAgVgVg");
	this.shape_12.setTransform(282.4,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF464").s().p("Ag8BYQgagTAAglIA0AAQABAgAkAAQANAAAJgFQAJgFABgKQAAgMgSgGIgngMQgbgHgNgKQgSgOAAgZQAAgeAbgRQAWgOAfAAQAhAAAWAPQAZASABAfIg1AAQABgMgKgHQgJgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbARQgXAOglAAQglAAgXgQg");
	this.shape_13.setTransform(262.8,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF464").s().p("AhABeQgcgVAAgmIA3AAQADAiAmAAQANgBAKgFQAKgFABgMQAAgMgUgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAcgSQAZgOAiAAQAjAAAXAPQAbAUAAAhIg4AAQABgNgLgHQgJgGgOAAQgbABAAASQAAAKATAHQALAEAfAHQAdAIAOAMQATAPAAAaQAAAmgdASQgYAPgoAAQgnAAgZgRg");
	this.shape_14.setTransform(108.6,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF464").s().p("AhiBrIAAjVIBdAAQAwAAAcAcQAcAcAAAyQAAAzgdAdQgbAbgwAAgAgqA7IAbAAQAfAAANgOQAOgPAAgeQAAg7g6AAIgbAAg");
	this.shape_15.setTransform(87.6,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF464").s().p("AApBrQgEgFgDgdQgBgVgGgJQgGgOgSAAIgqAAIAABOIg3AAIAAjVIBsAAQAgAAAUAOQAXAQAAAeQAAASgJAOQgIAOgQAHIAAABQAbAGAEAsQADArAGAGgAgngNIAuAAQAaAAAAgZQAAgXgcAAIgsAAg");
	this.shape_16.setTransform(65.6,42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF464").s().p("AAyBrIgNgmIhKAAIgNAmIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_17.setTransform(43.6,42.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF464").s().p("AAeBrIgeiTIAAAAIgdCTIg5AAIg5jVIA4AAIAdCbIABAAIAgibIAzAAIAfCbIABAAIAfibIA4AAIg8DVg");
	this.shape_18.setTransform(18.7,42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF464").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_19.setTransform(-5.7,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF464").s().p("AAoBrQgDgFgDgdQgBgVgFgJQgHgOgSAAIgqAAIAABOIg3AAIAAjVIBsAAQAfAAAVAOQAXAQAAAeQAAASgJAOQgIAOgQAHIAAABQAbAGADAsQAEArAFAGgAgngNIAuAAQAaAAAAgZQAAgXgcAAIgsAAg");
	this.shape_20.setTransform(-26.5,42.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AApBrQgEgFgDgdQgBgVgGgJQgGgOgSAAIgpAAIAABOIg4AAIAAjVIBsAAQAgAAAUAOQAXAQAAAeQAAASgJAPQgIANgQAHIAAAAQAbAHADAsQAEArAGAGgAgmgNIAtAAQAaAAAAgaQAAgWgcAAIgrAAg");
	this.shape_21.setTransform(167.8,12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_22.setTransform(146.4,12.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgbBrIAAilIhAAAIAAgwIC3AAIAAAwIhAAAIAAClg");
	this.shape_23.setTransform(126.1,12.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhABeQgcgVAAgmIA3AAQADAhAmAAQANAAAJgEQALgGAAgLQAAgNgTgHIgpgMQgdgIgOgKQgUgQAAgbQAAggAdgSQAYgPAhAAQAkABAXAPQAbATABAjIg4AAQAAgOgLgHQgKgFgNgBQgbAAAAATQAAAKAUAHQAKAEAfAHQAcAIAOALQAUAQAAAaQAAAlgdATQgYAPgoABQgnAAgZgSg");
	this.shape_24.setTransform(106.4,12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAyBrIgNgnIhKAAIgNAnIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_25.setTransform(85.8,12.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhOBrIAAjVICdAAIAAAtIhlAAIAAAsIBXAAIAAApIhXAAIAABTg");
	this.shape_26.setTransform(66.8,12.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAjBrIhJiEIgBAAIAACEIg0AAIAAjVIA5AAIBJCDIABAAIAAiDIA0AAIAADVg");
	this.shape_27.setTransform(36.4,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AApBrQgEgFgDgdQgCgVgFgJQgHgOgRAAIgpAAIAABOIg4AAIAAjVIBsAAQAgAAAUAOQAXAQAAAeQAAASgJAPQgIANgRAHIAAAAQAcAHAEAsQACArAHAGgAgmgNIAtAAQAaAAAAgaQAAgWgcAAIgrAAg");
	this.shape_28.setTransform(15.1,12.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAyBrIgNgnIhKAAIgNAnIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_29.setTransform(-6.9,12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_30.setTransform(-27.4,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_31.setTransform(408,39);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag8BYQgagTAAglIA0AAQACAgAjAAQANAAAJgFQAJgFABgKQAAgMgSgGIgngMQgbgHgNgKQgSgOAAgaQAAgdAbgRQAWgOAfAAQAhAAAWAPQAZASABAfIg1AAQABgNgKgGQgJgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbARQgXAOglAAQglAAgXgQg");
	this.shape_32.setTransform(389.7,39);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAvBkIgMgkIhFAAIgNAkIg1AAIBKjHIA0AAIBLDHgAAWAaIgWhFIAAAAIgWBFIAsAAg");
	this.shape_33.setTransform(370.5,39);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhIBkIAAjHICSAAIAAAqIhfAAIAAApIBSAAIAAAnIhSAAIAABNg");
	this.shape_34.setTransform(352.7,39);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag8BYQgagTAAglIA0AAQABAgAkAAQANAAAJgFQAKgFAAgKQAAgMgSgGIgmgMQgbgHgOgKQgSgOAAgaQAAgdAagRQAXgOAfAAQAhAAAWAPQAZASAAAfIg0AAQABgNgLgGQgIgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbARQgXAOglAAQglAAgXgQg");
	this.shape_35.setTransform(325.4,39);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_36.setTransform(306.8,39);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhIBKQgagdABgtQgBgsAagdQAbgeAtAAQAuAAAbAeQAZAdABAsQgBAtgZAdQgbAeguAAQgtAAgbgegAgjgoQgKAQAAAYQAAAZAKAQQANASAWAAQAXAAANgSQAKgQAAgZQAAgYgKgQQgNgTgXAAQgWAAgNATg");
	this.shape_37.setTransform(286.1,39);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhEBKQgbgeAAgsQAAgsAbgdQAcgeAsAAQAhAAAZARQAcAUAEAjIg0AAQgCgNgKgHQgLgIgQAAQgXAAgMATQgLAQAAAYQAAAZALAQQAMASAXAAQASABANgJQAMgIADgOIglAAIAAglIBUAAIAABsIgiAAIgDgWQgSAaglAAQgsAAgcgeg");
	this.shape_38.setTransform(264.1,39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAmBkQgEgFgDgbQAAgTgGgJQgGgMgQAAIgnAAIAABIIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAcQAAARgIANQgIANgQAHIAAAAQAaAGADAqQADAnAGAGgAgkgMIAqAAQAZAAAAgXQAAgWgaAAIgpAAg");
	this.shape_39.setTransform(374.4,13);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_40.setTransform(354.5,13);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA/BkIAAiXIgBAAIgqCXIgmAAIgriXIAAAAIAACXIgxAAIAAjHIBMAAIAiCFIAAAAIAjiFIBMAAIAADHg");
	this.shape_41.setTransform(331.6,13);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA+BkIAAiXIAAAAIgqCXIgnAAIgqiXIAAAAIAACXIgxAAIAAjHIBMAAIAiCFIAAAAIAjiFIBNAAIAADHg");
	this.shape_42.setTransform(305.7,13);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhBBQQgVgUAAgsIAAh1IA0AAIAAB3QAAAVAIAIQAIALASAAQASAAAJgLQAIgIAAgVIAAh3IA0AAIAAB1QAAAsgUAUQgWAWgtAAQgsAAgVgWg");
	this.shape_43.setTransform(282.4,13.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag8BYQgagTAAgkIA0AAQABAfAkAAQANAAAJgEQAJgGABgKQAAgMgSgGIgngLQgbgIgNgKQgSgOAAgaQAAgdAbgRQAWgOAfAAQAhAAAWAPQAZARABAhIg1AAQABgNgKgHQgJgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAjgbASQgXAOglAAQglAAgXgQg");
	this.shape_44.setTransform(262.8,13);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhABeQgcgVAAgmIA3AAQADAiAmAAQANgBAKgFQAKgFABgMQAAgMgUgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAcgSQAZgOAiAAQAjAAAXAPQAbAUAAAhIg4AAQABgNgLgHQgJgGgOAAQgbABAAASQAAAKATAHQALAEAfAHQAdAIAOAMQATAOAAAbQAAAmgdASQgYAPgoAAQgnAAgZgRg");
	this.shape_45.setTransform(108.6,43.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhiBrIAAjVIBdAAQAwAAAcAcQAcAcAAAyQAAAzgdAdQgbAbgwAAgAgqA7IAbAAQAfgBANgOQAOgOAAgeQAAg6g6gBIgbAAg");
	this.shape_46.setTransform(87.6,43.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AApBrQgEgFgDgdQgBgVgGgJQgGgOgSAAIgqAAIAABOIg3AAIAAjVIBsAAQAgAAAUAOQAXAQAAAeQAAASgJAOQgIAPgQAGIAAABQAbAGAEAtQADAqAGAGgAgngNIAuAAQAaAAAAgZQAAgYgcAAIgsAAg");
	this.shape_47.setTransform(65.6,43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAyBrIgNgmIhKAAIgNAmIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_48.setTransform(43.6,43.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAeBrIgeiSIAAAAIgdCSIg5AAIg5jVIA4AAIAdCcIABAAIAgicIAzAAIAfCcIABAAIAficIA4AAIg8DVg");
	this.shape_49.setTransform(18.7,43.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAsIhyAAIAAAmIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_50.setTransform(-5.7,43.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAoBrQgDgFgDgdQgBgVgFgJQgHgOgSAAIgqAAIAABOIg3AAIAAjVIBsAAQAfAAAVAOQAXAQAAAeQAAASgJAOQgIAPgQAGIAAABQAbAGADAtQAEAqAFAGgAgngNIAuAAQAaAAAAgZQAAgYgcAAIgsAAg");
	this.shape_51.setTransform(-26.5,43.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AApBrQgEgFgDgdQgBgVgGgJQgGgOgSAAIgpAAIAABOIg4AAIAAjVIBsAAQAgAAAUAOQAXAQAAAeQAAASgJAOQgIAPgQAGIAAABQAbAGADAsQAEArAGAGgAgmgNIAtAAQAaAAAAgaQAAgWgcAAIgrAAg");
	this.shape_52.setTransform(167.8,13.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_53.setTransform(146.4,13.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape_54.setTransform(126.1,13.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhABeQgcgVAAgmIA3AAQADAiAmgBQANAAAJgEQALgHAAgKQAAgNgTgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAdgSQAYgPAhAAQAkAAAXAQQAbAUABAhIg4AAQAAgNgLgHQgKgFgNgBQgbAAAAATQAAAKAUAHQAKAEAfAHQAcAIAOALQAUAQAAAaQAAAlgdATQgYAPgoAAQgnAAgZgRg");
	this.shape_55.setTransform(106.4,13.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAyBrIgNgnIhKAAIgNAnIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_56.setTransform(85.8,13.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhOBrIAAjVICdAAIAAAtIhlAAIAAAsIBXAAIAAApIhXAAIAABTg");
	this.shape_57.setTransform(66.8,13.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAjBrIhJiEIgBAAIAACEIg0AAIAAjVIA5AAIBJCDIABAAIAAiDIA0AAIAADVg");
	this.shape_58.setTransform(36.4,13.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AApBrQgEgFgDgdQgCgVgFgJQgHgOgRAAIgpAAIAABOIg4AAIAAjVIBsAAQAgAAAUAOQAXAQAAAeQAAASgJAOQgIAPgRAGIAAABQAcAGAEAsQACArAHAGgAgmgNIAtAAQAaAAAAgaQAAgWgcAAIgrAAg");
	this.shape_59.setTransform(15.1,13.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAyBrIgNgnIhKAAIgNAnIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_60.setTransform(-6.9,13.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_61.setTransform(-27.4,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-40,0,459.3,65), null);


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
	this.instance = new lib.bb_caf();
	this.instance.parent = this;
	this.instance.setTransform(26,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(26,-20,101,158), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006D43").s().p("AwULKMAgpgWeIAAWpg");
	this.shape.setTransform(199.5,180.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00663F").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,304,253.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:6.1}).wait(91).to({graphics:null,x:0,y:0}).wait(62));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({x:-50.5},0).to({_off:true},9).wait(62));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAkIAAhHIAeAAQANAAAKAJQAIAJABARQgBAQgHAJQgJALgPAAgAgPAXIAOAAQAGAAAFgFQAGgGAAgLQAAgKgEgGQgGgGgJAAIgMAAg");
	this.shape.setTransform(67.3,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAkIgGgQIgZAAIgGAQIgQAAIAbhHIAPAAIAbBHgAAJAIIgJgZIAAAAIgIAZIARAAg");
	this.shape_1.setTransform(60,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAJALQAKAKAAAPQAAAQgKALQgJAKgQAAQgPAAgKgKgAgOgQQgFAHAAAJQAAAKAFAHQAFAHAJAAQAJAAAGgHQAEgHABgKQgBgJgEgHQgFgHgKAAQgJAAgFAHg");
	this.shape_2.setTransform(52.8,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAPAAIAAA6IAiAAIAAANg");
	this.shape_3.setTransform(46.2,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAkIgcgvIAAAAIAAAvIgPAAIAAhHIAPAAIAdAvIAAgvIAPAAIAABHg");
	this.shape_4.setTransform(39.3,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAkIgMgwIgLAwIgQAAIgThHIAQAAIALAwIANgwIANAAIANAxIALgxIAQAAIgTBHg");
	this.shape_5.setTransform(30.9,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAJALQAKAKAAAPQAAAQgKALQgJAKgQAAQgPAAgKgKgAgOgQQgEAHgBAJQABAKAEAHQAFAHAJAAQAJAAAGgHQAFgHgBgKQABgJgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_6.setTransform(22.3,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAkIAAhHIAfAAQANAAAKAJQAJAJAAARQAAAQgJAJQgIALgPAAgAgPAXIAOAAQAGAAAGgFQAFgGAAgLQAAgKgEgGQgGgGgKAAIgLAAg");
	this.shape_7.setTransform(14.9,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},91).wait(62));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1BAEDB").s().p("AnBB4QgeAAAAgZIAAi9QAAgZAeAAIODAAQAeAAAAAZIAAC9QAAAZgeAAg");
	this.shape_8.setTransform(41,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},91).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.4,96,25);


// stage content:
(lib._300x250_Hus_RemA = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(1).to({regX:76.5,regY:59,x:0.2,y:159.2},0).wait(1).to({x:42.2,y:159.7},0).wait(1).to({x:87.5,y:160.2},0).wait(1).to({x:127.2,y:160.6},0).wait(1).to({x:159.1,y:160.9},0).wait(1).to({x:184.4,y:161.2},0).wait(1).to({x:204.3,y:161.4},0).wait(1).to({x:219.9,y:161.6},0).wait(1).to({x:232.1,y:161.7},0).wait(1).to({x:241.5,y:161.8},0).wait(1).to({x:248.6,y:161.9},0).wait(1).to({x:253.6},0).wait(1).to({x:257,y:162},0).wait(1).to({x:258.9},0).wait(1).to({regX:52,regY:68,x:235,y:171},0).wait(1).to({regX:76.5,regY:59,x:259.4,y:162},0).wait(1).to({x:259.2},0).wait(1).to({x:258.6},0).wait(1).to({x:257.5},0).wait(1).to({x:255.5},0).wait(1).to({x:253},0).wait(1).to({x:251.6},0).wait(1).to({x:250.9},0).wait(1).to({x:250.6},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(66));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75,159.3,0.55,0.55,0,0,0,117.9,144.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1).to({regX:118,regY:144.5,x:-47,y:159.2,alpha:0.945},0).wait(1).to({x:-4.6,alpha:0.862},0).wait(1).to({x:41.3,alpha:0.771},0).wait(1).to({x:81.4,alpha:0.693},0).wait(1).to({x:113.6,alpha:0.629},0).wait(1).to({x:139.2,alpha:0.579},0).wait(1).to({x:159.2,alpha:0.539},0).wait(1).to({x:175,alpha:0.508},0).wait(1).to({x:187.4,alpha:0.484},0).wait(1).to({x:196.9,alpha:0.465},0).wait(1).to({x:204,alpha:0.451},0).wait(1).to({x:209.1,alpha:0.441},0).wait(1).to({x:212.5,alpha:0.435},0).wait(1).to({x:214.4,alpha:0.431},0).wait(1).to({regX:117.9,regY:144.6,x:215,y:159.3,alpha:0.43},0).wait(1).to({regX:118,regY:144.5,x:215.1,y:159.2,alpha:0.426},0).wait(1).to({x:215.4,alpha:0.414},0).wait(1).to({x:216,alpha:0.388},0).wait(1).to({x:217.2,alpha:0.336},0).wait(1).to({x:219.5,alpha:0.237},0).wait(1).to({x:222.3,alpha:0.119},0).wait(1).to({x:223.9,alpha:0.052},0).wait(1).to({x:224.6,alpha:0.019},0).wait(1).to({x:225,alpha:0.004},0).wait(1).to({regX:117.9,regY:144.6,y:159.3,alpha:0},0).wait(66));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_49 = new cjs.Graphics().p("AzSOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_50 = new cjs.Graphics().p("AxyOTIAAu1MAi0AAAIAAO1g");
	var mask_graphics_51 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_52 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_53 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_54 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_55 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_56 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_57 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_58 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_59 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_60 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_61 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_62 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_63 = new cjs.Graphics().p("AxaOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_64 = new cjs.Graphics().p("AxUOTIAAu1MAi0AAAIAAO1g");
	var mask_graphics_65 = new cjs.Graphics().p("AxKOTIAAu1MAi0AAAIAAO1g");
	var mask_graphics_66 = new cjs.Graphics().p("AxFOTIAAu1MAi1AAAIAAO1g");
	var mask_graphics_67 = new cjs.Graphics().p("AxDOTIAAu1MAi1AAAIAAO1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_graphics_49,x:-123.5,y:91.5}).wait(1).to({graphics:mask_graphics_50,x:-113.9,y:91.5}).wait(1).to({graphics:mask_graphics_51,x:-87.6,y:91.5}).wait(1).to({graphics:mask_graphics_52,x:-54.3,y:91.5}).wait(1).to({graphics:mask_graphics_53,x:-22.4,y:91.5}).wait(1).to({graphics:mask_graphics_54,x:5.2,y:91.5}).wait(1).to({graphics:mask_graphics_55,x:28.1,y:91.5}).wait(1).to({graphics:mask_graphics_56,x:46.9,y:91.5}).wait(1).to({graphics:mask_graphics_57,x:62.3,y:91.5}).wait(1).to({graphics:mask_graphics_58,x:74.9,y:91.5}).wait(1).to({graphics:mask_graphics_59,x:85.2,y:91.5}).wait(1).to({graphics:mask_graphics_60,x:93.5,y:91.5}).wait(1).to({graphics:mask_graphics_61,x:100.2,y:91.5}).wait(1).to({graphics:mask_graphics_62,x:105.5,y:91.5}).wait(1).to({graphics:mask_graphics_63,x:109.6,y:91.5}).wait(1).to({graphics:mask_graphics_64,x:112,y:91.5}).wait(1).to({graphics:mask_graphics_65,x:113,y:91.5}).wait(1).to({graphics:mask_graphics_66,x:113.6,y:91.5}).wait(1).to({graphics:mask_graphics_67,x:113.8,y:91.5}).wait(73));

	// masked
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.1,167.5,1,1,0,0,0,41.1,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTArQgJgFgBgLIAOAAQADAKANAAQARAAAAgRIAAgLQgHAMgNAAQgPAAgIgKQgHgKAAgOQAAgOAIgKQAJgKAOAAQANAAAGALIAAgJIAPAAIAAA/QAAAeghAAQgLAAgIgFgAgNgcQgEAHAAAJQAAAJAEAGQAFAHAIAAQAJAAAFgIQAEgFAAgKQAAgJgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape.setTransform(111.1,131.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAiIAAgpQgBgPgNAAQgGAAgFAGQgEAFAAAHIAAAmIgOAAIAAhBIANAAIAAAJIAAAAQAIgLANAAQALAAAGAFQAHAGgBALIAAAtg");
	this.shape_1.setTransform(103.7,130.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAZQgJgJAAgQQAAgPAJgJQAJgKAPAAQAQAAAJAKQAJAJAAAPQAAAQgJAJQgJALgQAAQgPAAgJgLgAgOgPQgEAGAAAJQAAAJAEAHQAGAHAIAAQAKAAAEgHQAFgHAAgJQAAgJgFgGQgEgIgKAAQgIAAgGAIg");
	this.shape_2.setTransform(96.1,130.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAuIAAhbIAOAAIAABbg");
	this.shape_3.setTransform(90.7,129.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAiIAAhBIAOAAIAAAMIABAAQABgFAFgFQAFgFAHABIAGAAIAAAOIgHgBQgIAAgEAHQgFAGAAAKIAAAfg");
	this.shape_4.setTransform(83.7,130.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAZQgIgJAAgQQAAgOAJgKQAJgKANAAQAQAAAJAMQAJALgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMABAEgMIAOAAQgCALgJAHQgIAFgLABQgPAAgJgLgAARgFQAAgHgFgFQgEgGgIAAQgGAAgFAGQgFAFAAAHIAhAAIAAAAg");
	this.shape_5.setTransform(77.4,130.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiAiIAAglQAAgLgCgDQgDgFgHAAQgPAAAAASIAAAmIgOAAIAAgpQAAgIgCgDQgDgEgGAAQgHAAgEAEQgEAFAAAJIAAAmIgPAAIAAhBIAOAAIAAAJQAIgLANAAQAOAAAEALQAIgLANAAQAXAAAAAWIAAAtg");
	this.shape_6.setTransform(68.1,130.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiAiIAAglQAAgLgCgDQgDgFgHAAQgPAAAAASIAAAmIgOAAIAAgpQAAgIgCgDQgDgEgGAAQgHAAgEAEQgEAFAAAJIAAAmIgPAAIAAhBIAOAAIAAAJQAIgLANAAQAOAAAEALQAIgLANAAQAXAAAAAWIAAAtg");
	this.shape_7.setTransform(56.8,130.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAIIAAgpIAPAAIAAAnQAAARANgBQAPABAAgTIAAglIAPAAIAABBIgPAAIAAgJQgCAFgGADQgFADgFABQgZAAAAgbg");
	this.shape_8.setTransform(47.5,130.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAeQgIgHgBgLIAPAAQABALANAAQAQAAgBgIQAAgGgHgCIgOgEQgKgCgEgCQgIgFAAgJQAAgLAKgFQAIgDAKAAQALgBAHAFQAJAGABAKIgPAAQgCgJgMAAQgMAAABAHQAAAFAGADIAOADQALACAEADQAHAEAAAJQAAAMgKAFQgIAFgMABQgNgBgHgFg");
	this.shape_9.setTransform(40.4,130.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGAuIAAhbIANAAIAABbg");
	this.shape_10.setTransform(31.9,129.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAuIAAhbIAPAAIAABbg");
	this.shape_11.setTransform(28.8,129.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AANAbQgIAJgPAAQgJgBgHgFQgGgFAAgKQgBgKAJgFQAGgDAMgBIAMgCQAHgCAAgGQgBgJgNAAQgNAAgBALIgPAAQACgWAcAAQALgBAHAFQAJAFgBAKIAAAiQAAAEAEAAIADAAIAAAKQgEACgFABQgKAAgBgJgAAEADIgJABQgNACAAAJQABAEAFADQADACAFgBQAFAAAFgCQAGgDAAgHIAAgLIgIADg");
	this.shape_12.setTransform(23.8,130.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAdQgIgFgBgMIAPAAQABAMANgBQAPABAAgJQAAgFgHgDIgOgEQgKgCgEgCQgIgFABgKQAAgJAJgGQAHgDALAAQALAAAHAEQAIAFACALIgQAAQgBgJgLAAQgMAAAAAHQgBAFAHADIAOADQALACAEADQAHAFAAAIQAAAMgKAFQgIAGgMAAQgMAAgIgHg");
	this.shape_13.setTransform(143.6,114.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgnIgMAAIAAgLIAMAAIAAgUIANAAIAAAUIAOAAIAAALIgOAAIAAAjQAAAFABACQACACAEAAIAHAAIAAAMIgKAAQgKAAgEgEg");
	this.shape_14.setTransform(138,113.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAOAjIAAgqQAAgPgMAAQgHAAgFAGQgEAEAAAIIAAAnIgPAAIAAhDIAPAAIAAAKIAAAAQAHgMANABQALgBAGAHQAHAFAAALIAAAug");
	this.shape_15.setTransform(132.2,114.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAvIAAhDIANAAIAABDgAgGgfIAAgPIANAAIAAAPg");
	this.shape_16.setTransform(126.9,113.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAaQgJgLAAgPQAAgPAJgKQAJgKAPABQAQgBAJAKQAJAKAAAPQAAAPgJALQgJAJgQABQgPgBgJgJgAgNgQQgFAHAAAJQAAAKAFAGQAFAIAIgBQAKABAEgIQAFgGAAgKQAAgJgFgHQgEgHgKAAQgIAAgFAHg");
	this.shape_17.setTransform(121.5,114.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghAvIAAhbIAPAAIAAAJIAAAAQAGgLAOAAQAPAAAJALQAHAJABAPQAAAOgIAKQgHALgOAAQgQAAgGgLIgBAAIAAAigAgOgcQgEAHAAAKQAAALAFAFQAFAHAIAAQAJAAAFgIQAEgEAAgLQAAgJgEgHQgGgIgIABQgIgBgGAHg");
	this.shape_18.setTransform(113.9,115.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAdQgJgFAAgMIAPAAQABAMANgBQAPABAAgJQAAgFgHgDIgOgEQgKgCgEgCQgIgFAAgKQAAgJAKgGQAHgDALAAQALAAAHAEQAIAFACALIgPAAQgCgJgMAAQgMAAABAHQAAAFAGADIAOADQALACAEADQAHAFAAAIQAAAMgKAFQgIAGgMAAQgMAAgIgHg");
	this.shape_19.setTransform(102.9,114.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAIIAAgqIAPAAIAAApQAAAPANAAQAPABAAgTIAAgmIAQAAIAABDIgQAAIAAgKQgCAFgGADQgFAEgEAAQgagBAAgag");
	this.shape_20.setTransform(95.8,114.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAOAjIAAgqQAAgPgMAAQgHAAgFAGQgEAEAAAIIAAAnIgPAAIAAhDIAPAAIAAAKIAAAAQAHgMAMABQALgBAHAHQAGAFABALIAAAug");
	this.shape_21.setTransform(88.3,114.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAaQgJgLAAgPQAAgPAJgKQAJgKAPABQAQgBAJAKQAJAKAAAPQAAAPgJALQgJAJgQABQgPgBgJgJgAgNgQQgFAHAAAJQAAAKAFAGQAFAIAIgBQAJABAGgIQAEgGAAgKQAAgJgEgHQgGgHgJAAQgIAAgFAHg");
	this.shape_22.setTransform(80.7,114.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSAlIAAAAIAAAJIgOAAIAAhdIAPAAIAAAjIAAAAQACgFAHgDQAFgCAFAAQAPAAAJAKQAHAJAAAPQABAPgIAKQgHAKgPABQgQgBgGgKgAgOgEQgEAFAAALQAAALAFAGQAFAHAIgBQAJABAFgIQAEgGABgKQAAgKgGgGQgEgHgJAAQgIAAgGAHg");
	this.shape_23.setTransform(73.1,113.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgnIgMAAIAAgLIAMAAIAAgUIANAAIAAAUIAOAAIAAALIgOAAIAAAjQAAAFABACQACACAEAAIAHAAIAAAMIgKAAQgKAAgEgEg");
	this.shape_24.setTransform(63.1,113.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_25.setTransform(57.5,114.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTArQgJgFgBgLIAOAAQADAKANAAQARAAAAgRIAAgLQgHAMgNAAQgPAAgIgKQgHgKAAgOQAAgOAIgKQAJgKAOAAQANAAAGALIAAgJIAPAAIAAA/QAAAeghAAQgLAAgIgFgAgNgcQgEAHAAAJQAAAJAEAGQAFAHAIAAQAJAAAFgIQAEgFAAgKQAAgJgEgGQgFgHgJAAQgIAAgFAHg");
	this.shape_26.setTransform(49.9,115.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAlQgIgKAAgPQAAgQAJgKQAIgIAMAAQAPAAAGAKIABAAIAAgjIAOAAIAABdIgOAAIAAgJQgGAKgOABQgPAAgIgLgAgNgDQgEAFAAALQAAAJAEAHQAFAGAIAAQAJABAGgIQAEgGAAgKQAAgMgFgEQgFgHgJAAQgIAAgFAIg");
	this.shape_27.setTransform(38.4,113.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAOAjIAAgqQAAgPgMAAQgHAAgFAGQgEAEAAAIIAAAnIgPAAIAAhDIAPAAIAAAKIAAAAQAHgMANABQALgBAGAHQAHAFAAALIAAAug");
	this.shape_28.setTransform(31,114.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AANAbQgIAJgPAAQgJAAgHgGQgGgFAAgJQgBgMAJgEQAGgDAMgBIAMgDQAHgBAAgGQgBgJgNAAQgNAAgBALIgPAAQACgXAcABQALAAAHAEQAJAFgBAKIAAAiQAAAEAEAAIADAAIAAALQgEACgFAAQgKAAgBgJgAAEACIgJACQgNACAAAJQABAEAFADQADABAFAAQAFAAAFgDQAGgDAAgGIAAgLIgIACg");
	this.shape_29.setTransform(23.8,114.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggAvIAAhbIANAAIAAAJIABAAQAGgLAOAAQAPAAAIALQAJAJAAAQQgBAOgHAJQgIALgNAAQgQAAgGgLIgBAAIAAAigAgNgcQgFAHAAALQAAAKAFAFQAFAHAIAAQAJAAAFgIQAFgFgBgJQAAgKgEgHQgGgHgIAAQgJAAgEAGg");
	this.shape_30.setTransform(147,99.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AggAvIAAhbIANAAIAAAJIABAAQAGgLAOAAQAPAAAIALQAJAJgBAQQAAAOgHAJQgIALgOAAQgPAAgGgLIgBAAIAAAigAgNgcQgFAHAAALQAAAKAFAFQAFAHAIAAQAJAAAFgIQAFgFAAgJQgBgKgFgHQgEgHgJAAQgJAAgEAGg");
	this.shape_31.setTransform(139.1,99.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAbAvIgJgZIgkAAIgIAZIgRAAIAjhdIARAAIAjBdgAAOAKIgOgoIAAAAIgNAoIAbAAg");
	this.shape_32.setTransform(130.6,97.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAuIAAgMIAHABQAFAAACgDIADgHIACgFIgZhCIAQAAIAQAxIABAAIARgxIAPAAIgaBGQgFAMgCAEQgFAHgLAAIgKgBg");
	this.shape_33.setTransform(119.3,99.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAvIgTghIgJAIIAAAZIgPAAIAAhdIAPAAIAAA0IAagaIASAAIgaAYIAcArg");
	this.shape_34.setTransform(112.9,97.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAdQgJgFAAgMIAPAAQABAMANAAQAQAAgBgJQAAgFgHgDIgOgEQgKgBgEgDQgIgFABgKQAAgKAJgEQAIgFAKAAQALABAHAEQAIAGACAKIgQAAQgBgJgLAAQgNAAAAAHQAAAFAHADIAPADQAKACAEADQAHAEAAAKQAAAKgKAGQgIAGgMAAQgMAAgIgHg");
	this.shape_35.setTransform(105.7,98.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcAIIAAgqIAOAAIAAApQAAAQANAAQAQAAAAgSIAAgnIAOAAIAABDIgOAAIAAgKQgDAFgFAEQgGADgEAAQgZAAAAgbg");
	this.shape_36.setTransform(98.6,98.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAVAvIAAgrIgpAAIAAArIgQAAIAAhdIAQAAIAAAmIApAAIAAgmIAQAAIAABdg");
	this.shape_37.setTransform(90.2,97.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgaAuIAAgMIAHABQAFAAACgDIADgHIACgFIgZhCIAQAAIAQAxIABAAIARgxIAPAAIgaBGQgFAMgCAEQgFAHgLAAIgKgBg");
	this.shape_38.setTransform(82.2,99.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAiAjIAAgnQAAgJgCgEQgDgFgHAAQgPAAAAASIAAAnIgOAAIAAgqQAAgIgCgDQgDgEgGAAQgHAAgEAFQgEAFAAAHIAAAoIgPAAIAAhDIAOAAIAAAJQAIgKANgBQAOABAEAKQAIgKANgBQAXAAAAAXIAAAug");
	this.shape_39.setTransform(73.2,98.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgLANAAQAQABAJALQAJAMgCAOIgwAAQAAAJAEAFQAFAGAIABQAMAAAEgMIAOAAQgCALgJAGQgIAHgLAAQgPAAgJgKgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_40.setTransform(60.4,98.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAPAvIAAgrQgBgOgMAAQgHAAgFAFQgEAFAAAHIAAAoIgPAAIAAhdIAPAAIAAAjIABAAQACgFAGgDQAFgDAFAAQAMAAAGAHQAHAFAAALIAAAug");
	this.shape_41.setTransform(53,97.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgmIgMAAIAAgMIAMAAIAAgUIANAAIAAAUIAOAAIAAAMIgOAAIAAAjQAAAFABABQACADAEAAIAHgBIAAAMIgKAAQgKAAgEgEg");
	this.shape_42.setTransform(47,97.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgmIgMAAIAAgMIAMAAIAAgUIANAAIAAAUIAOAAIAAAMIgOAAIAAAjQAAAFABABQACADAEAAIAHgBIAAAMIgKAAQgKAAgEgEg");
	this.shape_43.setTransform(39.1,97.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgLANAAQAQABAJALQAJAMgCAOIgwAAQAAAJAEAFQAFAGAIABQAMAAAEgMIAOAAQgCALgJAGQgIAHgLAAQgPAAgJgKgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_44.setTransform(33.5,98.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgeAiQgMgNAAgVQAAgTAMgOQANgPATAAQAQABAKAHQAMAJACAPIgQAAQgBgIgHgGQgHgEgJAAQgNAAgIALQgGAKAAANQAAAPAGAJQAIAMANAAQAMgBAHgGQAHgHAAgMIgZAAIAAgMIAoAAIAAAxIgLAAIgCgLQgHAHgGADQgHACgIABQgTgBgNgOg");
	this.shape_45.setTransform(24.8,97.3);

	var maskedShapeInstanceList = [this.instance_2,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},49).wait(91));

	// dog
	this.instance_3 = new lib.bb_MyRewards();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20,201,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-138.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({regX:190.2,regY:28.2,x:-43.1,y:51.2},0).wait(1).to({x:-40.9},0).wait(1).to({x:-36.8},0).wait(1).to({x:-30.2},0).wait(1).to({x:-20.4},0).wait(1).to({x:-6.2},0).wait(1).to({x:14.4},0).wait(1).to({x:44.3},0).wait(1).to({x:86},0).wait(1).to({x:133.4},0).wait(1).to({x:172.6},0).wait(1).to({x:199.6},0).wait(1).to({x:217.8},0).wait(1).to({x:230},0).wait(1).to({x:237.9},0).wait(1).to({x:242.8},0).wait(1).to({x:245.4},0).wait(1).to({regX:95.9,regY:32,x:151.9,y:55},0).wait(93));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,125,578,253.1);
// library properties:
lib.properties = {
	id: '3425675A7A2D434FB1A7BE1713B1B77E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_Hus_RemA_atlas_.png", id:"300x250_Hus_RemA_atlas_"}
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