(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_Hus_NonB_atlas_", frames: [[233,179,71,83],[233,0,251,177],[0,0,231,360]]}
];


// symbols:



(lib.bb_Dogtag = function() {
	this.spriteSheet = ss["300x250_Hus_NonB_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_slurp_blur = function() {
	this.spriteSheet = ss["300x250_Hus_NonB_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bb_slushy = function() {
	this.spriteSheet = ss["300x250_Hus_NonB_atlas_"];
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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb_slurp_blur();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,251,177), null);


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
	this.shape_14.graphics.f("#FFF464").s().p("AAlBkQgDgFgCgbQgCgTgFgJQgGgNgQAAIgnAAIAABJIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAcQAAASgIANQgJAMgOAHIAAAAQAZAGADAqQADAnAGAGgAgkgMIArAAQAYAAAAgYQAAgVgaAAIgpAAg");
	this.shape_14.setTransform(165.9,42);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF464").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_15.setTransform(145.9,42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF464").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_16.setTransform(127,42);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF464").s().p("Ag8BYQgagTAAgkIA0AAQABAfAkAAQANAAAJgEQAKgGgBgLQAAgLgRgHIgmgKQgbgIgOgKQgSgPAAgZQAAgeAagQQAXgOAfAAQAhAAAWAPQAZARAAAhIg0AAQABgOgLgFQgIgGgNAAQgZAAAAARQAAAKASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAjgbARQgXAPglAAQglAAgXgQg");
	this.shape_17.setTransform(108.6,42);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF464").s().p("AAvBkIgMgkIhFAAIgNAkIg1AAIBKjHIA0AAIBLDHgAAWAZIgWhFIAAAAIgWBFIAsAAg");
	this.shape_18.setTransform(89.4,42);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF464").s().p("AhIBkIAAjHICRAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_19.setTransform(71.6,42);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF464").s().p("AhJBkIAAjHICSAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_20.setTransform(45.7,42);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF464").s().p("AhJBkIAAjHICSAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_21.setTransform(28.6,42);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF464").s().p("AhBBQQgVgVAAgsIAAh0IA0AAIAAB3QAAAVAIAJQAJAJARABQASgBAJgJQAIgJAAgVIAAh3IA0AAIAAB0QAAAsgUAVQgWAWgtAAQgsAAgVgWg");
	this.shape_22.setTransform(9.1,42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF464").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_23.setTransform(-10.3,42);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF464").s().p("Ag8BYQgagTAAgkIA0AAQABAfAkAAQANAAAJgEQAKgGgBgLQAAgLgRgHIgmgKQgbgIgOgKQgSgPAAgZQAAgeAagQQAXgOAfAAQAhAAAWAPQAZARAAAhIg0AAQABgOgLgFQgIgGgNAAQgZAAAAARQAAAKASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAjgbARQgXAPglAAQglAAgXgQg");
	this.shape_24.setTransform(-28.6,42);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_25.setTransform(96.2,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_26.setTransform(77,12);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAmBkQgEgFgDgbQAAgTgGgJQgGgMgQAAIgnAAIAABIIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAdQAAAQgIANQgIANgQAHIAAAAQAaAGADAqQADAnAGAGgAgkgMIAqAAQAZAAAAgXQAAgWgbAAIgoAAg");
	this.shape_27.setTransform(57.6,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhJBkIAAjHICSAAIAAAqIhdAAIAAApIBRAAIAAAnIhRAAIAABNg");
	this.shape_28.setTransform(39,12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_29.setTransform(12,12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_30.setTransform(-6.3,12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhEBKQgbgeAAgsQAAgsAbgdQAcgeArAAQAjAAAZARQAbAUAEAjIg0AAQgBgNgLgHQgMgIgPAAQgXAAgMATQgLAQAAAYQAAAZALAQQAMASAXAAQASABANgJQAMgIACgOIgkAAIAAglIBUAAIAABsIghAAIgEgWQgTAaglAAQgrAAgcgeg");
	this.shape_31.setTransform(-27.3,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_32.setTransform(408,39);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag8BYQgagTAAglIA0AAQACAgAjAAQANAAAJgFQAJgFABgKQAAgMgSgGIgngMQgbgHgNgKQgSgOAAgaQAAgdAbgRQAWgOAfAAQAhAAAWAPQAZASABAfIg1AAQABgNgKgGQgJgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbARQgXAOglAAQglAAgXgQg");
	this.shape_33.setTransform(389.7,39);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAvBkIgMgkIhFAAIgNAkIg1AAIBKjHIA0AAIBLDHgAAWAaIgWhFIAAAAIgWBFIAsAAg");
	this.shape_34.setTransform(370.5,39);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhIBkIAAjHICSAAIAAAqIhfAAIAAApIBSAAIAAAnIhSAAIAABNg");
	this.shape_35.setTransform(352.7,39);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag8BYQgagTAAglIA0AAQABAgAkAAQANAAAJgFQAKgFAAgKQAAgMgSgGIgmgMQgbgHgOgKQgSgOAAgaQAAgdAagRQAXgOAfAAQAhAAAWAPQAZASAAAfIg0AAQABgNgLgGQgIgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbARQgXAOglAAQglAAgXgQg");
	this.shape_36.setTransform(325.4,39);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_37.setTransform(306.8,39);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhIBKQgagdABgtQgBgsAagdQAbgeAtAAQAuAAAbAeQAZAdABAsQgBAtgZAdQgbAeguAAQgtAAgbgegAgjgoQgKAQAAAYQAAAZAKAQQANASAWAAQAXAAANgSQAKgQAAgZQAAgYgKgQQgNgTgXAAQgWAAgNATg");
	this.shape_38.setTransform(286.1,39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhEBKQgbgeAAgsQAAgsAbgdQAcgeAsAAQAhAAAZARQAcAUAEAjIg0AAQgCgNgKgHQgLgIgQAAQgXAAgMATQgLAQAAAYQAAAZALAQQAMASAXAAQASABANgJQAMgIADgOIglAAIAAglIBUAAIAABsIgiAAIgDgWQgSAaglAAQgsAAgcgeg");
	this.shape_39.setTransform(264.1,39);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAmBkQgEgFgDgbQAAgTgGgJQgGgMgQAAIgnAAIAABIIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAcQAAARgIANQgIANgQAHIAAAAQAaAGADAqQADAnAGAGgAgkgMIAqAAQAZAAAAgXQAAgWgaAAIgpAAg");
	this.shape_40.setTransform(374.4,13);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_41.setTransform(354.5,13);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA/BkIAAiXIgBAAIgqCXIgmAAIgriXIAAAAIAACXIgxAAIAAjHIBMAAIAiCFIAAAAIAjiFIBMAAIAADHg");
	this.shape_42.setTransform(331.6,13);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AA+BkIAAiXIAAAAIgqCXIgnAAIgqiXIAAAAIAACXIgxAAIAAjHIBMAAIAiCFIAAAAIAjiFIBNAAIAADHg");
	this.shape_43.setTransform(305.7,13);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhBBQQgVgUAAgsIAAh1IA0AAIAAB3QAAAVAIAIQAIALASAAQASAAAJgLQAIgIAAgVIAAh3IA0AAIAAB1QAAAsgUAUQgWAWgtAAQgsAAgVgWg");
	this.shape_44.setTransform(282.4,13.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag8BYQgagTAAgkIA0AAQABAfAkAAQANAAAJgEQAJgGABgKQAAgMgSgGIgngLQgbgIgNgKQgSgOAAgaQAAgdAbgRQAWgOAfAAQAhAAAWAPQAZARABAhIg1AAQABgNgKgHQgJgFgNAAQgZAAAAASQAAAJASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAjgbASQgXAOglAAQglAAgXgQg");
	this.shape_45.setTransform(262.8,13);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAlBkQgDgFgCgbQgCgTgFgJQgGgNgQAAIgnAAIAABJIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAcQAAASgIANQgJANgOAFIAAABQAZAGADAqQADAnAGAGgAgkgMIArAAQAYAAAAgYQAAgVgaAAIgpAAg");
	this.shape_46.setTransform(165.9,43);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_47.setTransform(145.9,43);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_48.setTransform(127,43);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag8BYQgagTAAgkIA0AAQABAfAkAAQANAAAJgEQAKgGgBgLQAAgLgRgHIgmgKQgbgIgOgKQgSgPAAgZQAAgeAagQQAXgOAfAAQAhAAAWAPQAZASAAAgIg0AAQABgOgLgFQgIgGgNAAQgZAAAAARQAAAKASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbAQQgXAPglAAQglAAgXgQg");
	this.shape_49.setTransform(108.6,43);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAvBkIgMgkIhFAAIgNAkIg1AAIBKjHIA0AAIBLDHgAAWAZIgWhFIAAAAIgWBFIAsAAg");
	this.shape_50.setTransform(89.4,43);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhIBkIAAjHICRAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_51.setTransform(71.6,43);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhJBkIAAjHICSAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_52.setTransform(45.7,43);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhJBkIAAjHICSAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_53.setTransform(28.6,43);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhBBQQgVgVAAgsIAAh0IA0AAIAAB4QAAATAIAKQAJAKARAAQASAAAJgKQAIgKAAgTIAAh4IA0AAIAAB0QAAAsgUAVQgWAWgtAAQgsAAgVgWg");
	this.shape_54.setTransform(9.1,43.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_55.setTransform(-10.3,43);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag8BYQgagTAAgkIA0AAQABAfAkAAQANAAAJgEQAKgGgBgLQAAgLgRgHIgmgKQgbgIgOgKQgSgPAAgZQAAgeAagQQAXgOAfAAQAhAAAWAPQAZASAAAgIg0AAQABgOgLgFQgIgGgNAAQgZAAAAARQAAAKASAGQAKAEAdAHQAbAHANALQASAOAAAYQAAAkgbAQQgXAPglAAQglAAgXgQg");
	this.shape_56.setTransform(-28.6,43);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_57.setTransform(96.2,13);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_58.setTransform(77,13);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAmBkQgEgFgDgbQAAgTgGgJQgGgMgQAAIgnAAIAABIIg0AAIAAjHIBlAAQAdAAATANQAWAPAAAcQAAARgIANQgIANgQAHIAAAAQAaAGADAqQADAnAGAGgAgkgMIAqAAQAZAAAAgXQAAgWgbAAIgoAAg");
	this.shape_59.setTransform(57.6,13);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhJBkIAAjHICSAAIAAAqIhdAAIAAAoIBRAAIAAAoIhRAAIAABNg");
	this.shape_60.setTransform(39,13);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZBkIAAiaIg8AAIAAgtICrAAIAAAtIg8AAIAACag");
	this.shape_61.setTransform(12,13);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AhQBkIAAjHICeAAIAAAqIhqAAIAAAjIBhAAIAAAnIhhAAIAAAmIBtAAIAAAtg");
	this.shape_62.setTransform(-6.3,13);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhEBKQgbgeAAgsQAAgsAbgdQAcgeArAAQAjAAAZARQAbAUAEAjIg0AAQgBgNgLgHQgMgIgPAAQgXABgMASQgLAQAAAYQAAAZALAQQAMASAXABQASAAANgJQAMgIACgOIgkAAIAAglIBUAAIAABsIghAAIgEgWQgTAaglAAQgrAAgcgeg");
	this.shape_63.setTransform(-27.3,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-40,0,459.3,63), null);


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
	this.instance = new lib.bb_slushy();
	this.instance.parent = this;
	this.instance.setTransform(6,-41,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(6,-41,115.5,180), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#715291").s().p("AwULKMAgpgWeIAAWpg");
	this.shape.setTransform(199.5,180.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#62477E").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,304,253.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:6.1}).wait(90).to({graphics:null,x:0,y:0}).wait(63));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({x:-50.5},0).to({_off:true},8).wait(63));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},90).wait(63));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1BAEDB").s().p("AnBB4QgeAAAAgZIAAi9QAAgZAeAAIODAAQAeAAAAAZIAAC9QAAAZgeAAg");
	this.shape_12.setTransform(41,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},90).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.4,96,25);


// stage content:
(lib._300x250_Hus_NonB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(1).to({regX:63.7,regY:49,x:-12.6,y:149.2},0).wait(1).to({x:29.4,y:149.7},0).wait(1).to({x:74.7,y:150.2},0).wait(1).to({x:114.4,y:150.6},0).wait(1).to({x:146.3,y:150.9},0).wait(1).to({x:171.6,y:151.2},0).wait(1).to({x:191.5,y:151.4},0).wait(1).to({x:207.1,y:151.6},0).wait(1).to({x:219.3,y:151.7},0).wait(1).to({x:228.7,y:151.8},0).wait(1).to({x:235.8,y:151.9},0).wait(1).to({x:240.8},0).wait(1).to({x:244.2,y:152},0).wait(1).to({x:246.1},0).wait(1).to({regX:52,regY:68,x:235,y:171},0).wait(1).to({regX:63.7,regY:49,x:246.6,y:152},0).wait(1).to({x:246.4},0).wait(1).to({x:245.8},0).wait(1).to({x:244.7},0).wait(1).to({x:242.7},0).wait(1).to({x:240.2},0).wait(1).to({x:238.8},0).wait(1).to({x:238.1},0).wait(1).to({x:237.8},0).wait(1).to({regX:52,regY:68,x:226,y:171},0).wait(65));

	// Layer_1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.5,148.5,1,1,0,0,0,125.5,88.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(1).to({x:-64.5,y:148.4,alpha:0.942},0).wait(1).to({x:-25.1,y:148.2,alpha:0.854},0).wait(1).to({x:17.6,y:148.1,alpha:0.759},0).wait(1).to({x:54.8,y:147.9,alpha:0.676},0).wait(1).to({x:84.8,y:147.8,alpha:0.609},0).wait(1).to({x:108.5,y:147.7,alpha:0.556},0).wait(1).to({x:127.1,alpha:0.514},0).wait(1).to({x:141.8,y:147.6,alpha:0.481},0).wait(1).to({x:153.3,alpha:0.456},0).wait(1).to({x:162.1,y:147.5,alpha:0.436},0).wait(1).to({x:168.7,alpha:0.421},0).wait(1).to({x:173.5,alpha:0.411},0).wait(1).to({x:176.7,alpha:0.404},0).wait(1).to({x:178.4,alpha:0.4},0).wait(1).to({x:179,alpha:0.398},0).wait(1).to({x:178.9,alpha:0.395},0).wait(1).to({x:178.6,alpha:0.384},0).wait(1).to({x:178,alpha:0.359},0).wait(1).to({x:176.8,alpha:0.311},0).wait(1).to({x:174.5,alpha:0.22},0).wait(1).to({x:171.8,alpha:0.111},0).wait(1).to({x:170.2,alpha:0.048},0).wait(1).to({x:169.4,alpha:0.017},0).wait(1).to({x:169.1,alpha:0.004},0).wait(1).to({x:169,alpha:0},0).wait(65));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_50 = new cjs.Graphics().p("AzSNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_51 = new cjs.Graphics().p("AxyNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_52 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_53 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_54 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_55 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_56 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_57 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_58 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_59 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_60 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_61 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_62 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_63 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_64 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_65 = new cjs.Graphics().p("AxUNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_66 = new cjs.Graphics().p("AxKNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_67 = new cjs.Graphics().p("AxFNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_68 = new cjs.Graphics().p("AxDNIIAAsgMAi1AAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_50,x:-123.5,y:84}).wait(1).to({graphics:mask_graphics_51,x:-113.9,y:84}).wait(1).to({graphics:mask_graphics_52,x:-87.6,y:84}).wait(1).to({graphics:mask_graphics_53,x:-54.3,y:84}).wait(1).to({graphics:mask_graphics_54,x:-22.4,y:84}).wait(1).to({graphics:mask_graphics_55,x:5.2,y:84}).wait(1).to({graphics:mask_graphics_56,x:28.1,y:84}).wait(1).to({graphics:mask_graphics_57,x:46.9,y:84}).wait(1).to({graphics:mask_graphics_58,x:62.3,y:84}).wait(1).to({graphics:mask_graphics_59,x:74.9,y:84}).wait(1).to({graphics:mask_graphics_60,x:85.2,y:84}).wait(1).to({graphics:mask_graphics_61,x:93.5,y:84}).wait(1).to({graphics:mask_graphics_62,x:100.2,y:84}).wait(1).to({graphics:mask_graphics_63,x:105.5,y:84}).wait(1).to({graphics:mask_graphics_64,x:109.6,y:84}).wait(1).to({graphics:mask_graphics_65,x:112,y:84}).wait(1).to({graphics:mask_graphics_66,x:113,y:84}).wait(1).to({graphics:mask_graphics_67,x:113.6,y:84}).wait(1).to({graphics:mask_graphics_68,x:113.8,y:84}).wait(72));

	// masked
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.1,151.5,1,1,0,0,0,41.1,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAdQgIgFgBgMIAPAAQABAMANgBQAQABgBgJQAAgFgHgDIgOgEQgKgCgFgCQgHgFAAgKQAAgJAKgGQAIgDAKAAQALAAAHAEQAJAFABALIgPAAQgCgJgMAAQgMAAABAHQAAAFAGADIAOADQALACAEADQAHAFAAAIQAAAMgKAFQgIAGgMAAQgNAAgHgHg");
	this.shape.setTransform(146.2,114.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_1.setTransform(139.2,114.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAdQgJgFAAgMIAPAAQABAMANgBQAQABgBgJQAAgFgHgDIgOgEQgKgCgEgCQgIgFABgKQAAgJAJgGQAIgDAKAAQALAAAHAEQAIAFACALIgQAAQgBgJgLAAQgNAAAAAHQAAAFAHADIAPADQAKACAEADQAHAFAAAIQAAAMgKAFQgIAGgMAAQgMAAgIgHg");
	this.shape_2.setTransform(132.3,114.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAbQgJAJgNAAQgKAAgGgGQgIgFAAgJQAAgMAJgEQAFgDANgBIANgDQAFgBAAgGQABgJgNAAQgOAAgBALIgPAAQACgXAcABQALAAAHAEQAJAFAAAKIAAAiQgBAEAEAAIAEAAIAAALQgFACgEAAQgKAAgCgJgAADACIgJACQgMACABAJQAAAEAEADQAEABAFAAQAFAAAFgDQAGgDAAgGIAAgLIgJACg");
	this.shape_3.setTransform(125.4,114.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAvIAAgrQgBgOgNAAQgGAAgEAGQgFAEAAAHIAAAoIgOAAIAAhdIAOAAIAAAjIAAAAQADgFAFgDQAGgCAGAAQAKgBAHAHQAHAFgBAKIAAAvg");
	this.shape_4.setTransform(118,113.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAaQgJgKAAgPQAAgQAJgJQAIgKAPAAQANgBAIAHQAJAGABAMIgPAAQgCgNgNAAQgHAAgFAFQgGAGAAANQAAAJAEAHQAFAGAIAAQAGAAAFgEQAEgEABgGIAPAAQgFAbgaAAQgOgBgJgJg");
	this.shape_5.setTransform(110.6,114.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAjIAAhDIAOAAIAAAOIABAAQABgHAFgEQAGgEAGAAIAGAAIAAAOIgGgBQgJABgFAFQgEAHAAAKIAAAgg");
	this.shape_6.setTransform(105.2,114.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAIIAAgqIAPAAIAAApQAAAPANAAQAPABAAgTIAAgmIAPAAIAABDIgPAAIAAgKQgCAFgGADQgFAEgFAAQgZgBAAgag");
	this.shape_7.setTransform(98.8,114.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAvIAAhbIANAAIAAAJIABAAQAGgLAOAAQAPAAAIALQAJAJgBAPQAAAOgHAKQgIALgNAAQgQAAgGgLIgBAAIAAAigAgNgcQgFAHAAAKQAAALAFAFQAFAHAIAAQAKAAAEgIQAFgEgBgLQAAgJgEgHQgFgIgJABQgJgBgEAHg");
	this.shape_8.setTransform(91.3,115.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAvIAAhdIAPAAIAABdg");
	this.shape_9.setTransform(82,113.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_10.setTransform(76.9,114.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAIIAAgqIAPAAIAAApQAAAPANAAQAPABAAgTIAAgmIAPAAIAABDIgPAAIAAgKQgCAFgGADQgFAEgFAAQgZgBAAgag");
	this.shape_11.setTransform(69.5,114.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAvIAAg4IgLAAIAAgLIALAAIAAgGQAAgLAGgEQADgFAJAAIAKABIAAAMIgGAAQgIAAAAAGIAAAHIAMAAIAAALIgMAAIAAA4g");
	this.shape_12.setTransform(63.8,113.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAnQgHgJgBgPIAPAAQAAAJAEAGQAEAFAIAAQAHAAAFgEQAGgFAAgHQgBgRgXABIAAgKQAIABAGgEQAGgEAAgHQAAgGgEgEQgEgDgGAAQgGAAgFAGQgEAFAAAIIgOAAQABgOAHgJQAJgIAMgBQALABAIAGQAKAHgBALQABAPgNAEIAAABQAHACAFAEQAEAGAAAKQAAAMgJAIQgJAIgOAAQgPgBgIgIg");
	this.shape_13.setTransform(54.5,113.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAjIAAhDIANAAIAAAOIAAAAQACgHAEgEQAHgEAGAAIAFAAIAAAOIgFgBQgJABgFAFQgEAHAAAKIAAAgg");
	this.shape_14.setTransform(45.5,114.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgKANAAQAQgBAJAMQAJAMgCAOIgwAAQAAAJAEAGQAFAFAIAAQAMAAAEgLIAOAAQgCALgJAGQgIAHgLAAQgPgBgJgJgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_15.setTransform(39.2,114.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgnIgMAAIAAgLIAMAAIAAgUIANAAIAAAUIAOAAIAAALIgOAAIAAAjQAAAFABACQACACAEAAIAHAAIAAAMIgKAAQgKAAgEgEg");
	this.shape_16.setTransform(33.3,113.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAvIAAg4IgLAAIAAgLIALAAIAAgGQABgLAFgEQADgFAJAAIAKABIAAAMIgGAAQgIAAAAAGIAAAHIAMAAIAAALIgMAAIAAA4g");
	this.shape_17.setTransform(29.3,113.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAbQgIAJgPAAQgJAAgHgGQgGgFAAgJQgBgMAJgEQAGgDAMgBIAMgDQAHgBAAgGQgBgJgNAAQgNAAgBALIgPAAQACgXAcABQALAAAHAEQAJAFgBAKIAAAiQAAAEAEAAIADAAIAAALQgEACgFAAQgKAAgBgJgAAEACIgJACQgNACAAAJQABAEAFADQADABAFAAQAFAAAFgDQAGgDAAgGIAAgLIgIACg");
	this.shape_18.setTransform(23.8,114.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAjIAAhDIANAAIAAAOIAAAAQACgHAEgEQAGgEAHgBIAGABIAAAOIgHAAQgHAAgFAFQgFAHAAAJIAAAhg");
	this.shape_19.setTransform(137.1,98.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgLANAAQAQABAJALQAJAMgCAOIgwAAQAAAJAEAFQAFAGAIABQAMAAAEgMIAOAAQgCALgJAGQgIAHgLAAQgPAAgJgKgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_20.setTransform(130.8,98.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgmIgMAAIAAgMIAMAAIAAgUIANAAIAAAUIAOAAIAAAMIgOAAIAAAjQAAAFABABQACADAEAAIAHgBIAAAMIgKAAQgKAAgEgEg");
	this.shape_21.setTransform(124.9,97.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAdQgJgFAAgMIAPAAQABAMANAAQAPAAAAgJQAAgFgHgDIgOgEQgKgBgFgDQgGgFAAgKQAAgKAJgEQAIgFAKAAQALABAHAEQAIAGACAKIgQAAQgBgJgLAAQgNAAAAAHQAAAFAHADIAPADQAKACAEADQAHAEAAAKQAAAKgKAGQgIAGgMAAQgMAAgIgHg");
	this.shape_22.setTransform(119.6,98.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANAbQgIAIgOABQgKAAgGgGQgIgFAAgJQABgMAIgEQAGgDAMgBIAMgDQAHgBgBgGQABgJgNAAQgOAAgBALIgPAAQACgXAcAAQALABAHAEQAJAFAAAKIAAAhQgBAFAEABIADAAIAAAKQgEABgFABQgJgBgCgIgAADACIgJACQgLACAAAJQAAAFAEACQAEACAFAAQAFAAAFgEQAGgDAAgGIAAgLIgJACg");
	this.shape_23.setTransform(112.7,98.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAvIAAg3IgLAAIAAgMIALAAIAAgFQAAgMAGgEQADgEAJgBIAKACIAAALIgGAAQgIgBAAAIIAAAGIAMAAIAAAMIgMAAIAAA3g");
	this.shape_24.setTransform(107,97.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXAvIgXgkIgXAkIgSAAIAggwIgegtIATAAIAUAhIAWghIATAAIggAtIAhAwg");
	this.shape_25.setTransform(97.1,97.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAmQgHgHgBgQIAPAAQgBAJAFAFQAFAGAHAAQAIAAAEgEQAFgFABgHQAAgRgXABIAAgKQAHAAAGgCQAGgFAAgHQAAgGgEgEQgEgDgGAAQgHAAgEAGQgDAFAAAIIgQAAQABgOAIgJQAIgIANgBQALAAAJAHQAJAGAAAMQgBAPgNAEIAAABQAJACAEAEQAEAHAAAJQAAAMgKAIQgIAHgOABQgOAAgJgKg");
	this.shape_26.setTransform(89.3,97.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAdQgIgFgBgMIAPAAQABAMANAAQAPAAAAgJQAAgFgHgDIgOgEQgKgBgEgDQgIgFABgKQAAgKAJgEQAHgFALAAQALABAHAEQAIAGACAKIgQAAQgBgJgLAAQgMAAAAAHQgBAFAHADIAPADQAKACAEADQAHAEAAAKQAAAKgKAGQgIAGgMAAQgMAAgIgHg");
	this.shape_27.setTransform(78.8,98.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgmIgMAAIAAgMIAMAAIAAgUIANAAIAAAUIAOAAIAAAMIgOAAIAAAjQAAAFABABQACADAEAAIAHgBIAAAMIgKAAQgKAAgEgEg");
	this.shape_28.setTransform(73.2,97.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOAjIAAgqQAAgPgMAAQgHAAgFAFQgEAFAAAIIAAAnIgPAAIAAhDIAPAAIAAAKIAAAAQAHgLAMgBQAMAAAGAHQAHAFAAAMIAAAtg");
	this.shape_29.setTransform(67.4,98.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAvIAAhDIANAAIAABDgAgGggIAAgOIANAAIAAAOg");
	this.shape_30.setTransform(62.1,97.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAaQgJgLAAgPQAAgPAJgKQAJgKAPAAQAQAAAJAKQAJAKAAAPQAAAPgJALQgJAKgQAAQgPAAgJgKgAgNgQQgFAHAAAJQAAAJAFAHQAFAIAIAAQAKAAAEgIQAFgHAAgJQAAgJgFgHQgEgHgKAAQgIAAgFAHg");
	this.shape_31.setTransform(56.7,98.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AghAvIAAhbIAPAAIAAAJIAAAAQAGgLAOAAQAPAAAJALQAHAJABAQQAAAOgIAJQgHALgOAAQgQAAgGgLIgBAAIAAAigAgOgcQgEAHAAALQAAAKAFAFQAFAHAIAAQAJAAAFgIQAEgFAAgJQAAgKgEgHQgGgHgIAAQgIAAgGAGg");
	this.shape_32.setTransform(49.1,99.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgEAoQgDgEAAgJIAAgmIgMAAIAAgMIAMAAIAAgUIANAAIAAAUIAOAAIAAAMIgOAAIAAAjQAAAFABABQACADAEAAIAHgBIAAAMIgKAAQgKAAgEgEg");
	this.shape_33.setTransform(39.1,97.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXAaQgIgKAAgQQAAgOAJgKQAJgLANAAQAQABAJALQAJAMgCAOIgwAAQAAAJAEAFQAFAGAIABQAMAAAEgMIAOAAQgCALgJAGQgIAHgLAAQgPAAgJgKgAARgFQAAgIgFgEQgEgGgIAAQgGAAgFAGQgFAEAAAIIAhAAIAAAAg");
	this.shape_34.setTransform(33.5,98.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAiQgMgNAAgVQAAgTAMgOQANgPATAAQAQABAKAHQAMAJACAPIgQAAQgBgIgHgGQgHgEgJAAQgNAAgIALQgGAKAAANQAAAPAGAJQAIAMANAAQAMgBAHgGQAHgHAAgMIgZAAIAAgMIAoAAIAAAxIgLAAIgCgLQgHAHgGADQgHACgIABQgTgBgNgOg");
	this.shape_35.setTransform(24.8,97.3);

	var maskedShapeInstanceList = [this.instance_2,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},50).wait(90));

	// dog
	this.instance_3 = new lib.bb_Dogtag();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20,174,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-138.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({regX:189.6,regY:27.5,x:-43.7,y:50.5},0).wait(1).to({x:-41.5},0).wait(1).to({x:-37.4},0).wait(1).to({x:-30.8},0).wait(1).to({x:-21},0).wait(1).to({x:-6.8},0).wait(1).to({x:13.8},0).wait(1).to({x:43.7},0).wait(1).to({x:85.4},0).wait(1).to({x:132.8},0).wait(1).to({x:172},0).wait(1).to({x:199},0).wait(1).to({x:217.2},0).wait(1).to({x:229.4},0).wait(1).to({x:237.3},0).wait(1).to({x:242.2},0).wait(1).to({x:244.8},0).wait(1).to({regX:95.9,regY:32,x:151.9,y:55},0).wait(93));

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
		{src:"images/300x250_Hus_NonB_atlas_.png", id:"300x250_Hus_NonB_atlas_"}
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