(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_Hus_NonA_atlas_", frames: [[106,269,71,83],[0,269,104,136],[0,0,253,267]]}
];


// symbols:



(lib.bb_Dogtag = function() {
	this.spriteSheet = ss["300x250_Hus_NonA_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bb_gas = function() {
	this.spriteSheet = ss["300x250_Hus_NonA_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.db_gas_blur = function() {
	this.spriteSheet = ss["300x250_Hus_NonA_atlas_"];
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
	this.instance = new lib.db_gas_blur();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.512,0.512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,129.6,136.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF464").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape.setTransform(419.1,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF464").s().p("AhABeQgcgVAAgmIA3AAQACAiAngBQAOAAAIgEQALgHAAgKQAAgNgTgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAdgSQAYgPAhAAQAkAAAXAQQAbAUABAiIg4AAQAAgOgLgHQgKgFgNgBQgbAAAAATQAAAKAUAHQAKAEAfAHQAcAIAOALQAUAQAAAaQAAAlgdATQgYAPgoAAQgoAAgYgRg");
	this.shape_1.setTransform(399.4,40.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF464").s().p("AAyBrIgNgnIhKAAIgNAnIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_2.setTransform(378.9,40.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF464").s().p("AhOBrIAAjVICdAAIAAAtIhlAAIAAAsIBXAAIAAApIhXAAIAABTg");
	this.shape_3.setTransform(359.8,40.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF464").s().p("AhABeQgcgVAAgmIA3AAQACAiAngBQAOAAAIgEQALgHAAgKQAAgNgTgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAdgSQAYgPAhAAQAkAAAXAQQAbAUABAiIg4AAQAAgOgLgHQgKgFgNgBQgbAAAAATQAAAKATAHQALAEAfAHQAcAIAOALQAUAQAAAaQAAAlgdATQgYAPgoAAQgoAAgYgRg");
	this.shape_4.setTransform(330.6,40.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF464").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_5.setTransform(310.6,40.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF464").s().p("AhNBPQgcgfAAgwQAAgvAcgfQAdghAwAAQAxAAAdAhQAcAfAAAvQAAAwgcAfQgdAggxAAQgwAAgdgggAglgrQgMASAAAZQAAAaAMASQANATAYABQAZgBANgTQAMgSAAgaQAAgZgMgSQgNgTgZAAQgYAAgNATg");
	this.shape_6.setTransform(288.4,40.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF464").s().p("AhJBPQgdgfAAgwQAAguAdggQAeghAvAAQAkABAbASQAeAVAEAmIg4AAQgCgNgMgJQgLgIgSABQgXAAgNATQgMASAAAZQAAAaAMASQANATAXABQAWgBANgIQANgJACgPIgnAAIAAgoIBaAAIAAB0IgkAAIgDgYQgUAcgoAAQgvAAgeggg");
	this.shape_7.setTransform(264.8,40.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF464").s().p("AApBrQgEgFgDgdQgBgVgGgJQgGgOgSAAIgpAAIAABOIg4AAIAAjVIBsAAQAgAAATAOQAYAQAAAeQAAASgJAPQgIANgRAHIAAAAQAbAHAFAsQACArAHAGgAgmgNIAtAAQAaAAAAgaQAAgWgcAAIgrAAg");
	this.shape_8.setTransform(383.1,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF464").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_9.setTransform(361.7,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF464").s().p("ABDBrIAAiiIgBAAIgtCiIgqAAIgtiiIAAAAIAACiIg1AAIAAjVIBTAAIAkCOIAAAAIAliOIBSAAIAADVg");
	this.shape_10.setTransform(337.3,12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF464").s().p("ABDBrIAAiiIgBAAIgsCiIgqAAIgtiiIgBAAIAACiIg1AAIAAjVIBSAAIAlCOIAAAAIAliOIBTAAIAADVg");
	this.shape_11.setTransform(309.5,12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF464").s().p("AhGBWQgWgXgBgvIAAh8IA4AAIAAB/QAAAWAJAKQAJAKATAAQAUAAAJgKQAJgKAAgWIAAh/IA4AAIAAB8QAAAvgXAXQgXAXgwAAQgvAAgXgXg");
	this.shape_12.setTransform(284.5,12.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFF464").s().p("AhABeQgcgVAAgmIA3AAQADAhAmAAQANAAAJgEQALgGAAgLQAAgNgTgHIgpgMQgdgIgOgKQgUgQAAgbQAAggAdgSQAYgPAhAAQAkABAXAPQAbATABAjIg4AAQAAgOgLgHQgKgFgNgBQgbAAAAATQAAAKAUAHQAKAEAfAHQAcAIAOALQAUAQAAAaQAAAlgdATQgYAPgoABQgnAAgZgSg");
	this.shape_13.setTransform(263.4,12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF464").s().p("AAoBrQgDgFgDgdQgCgVgEgJQgIgOgRAAIgpAAIAABOIg5AAIAAjVIBtAAQAfAAAUAOQAYAQAAAeQAAASgIAOQgKAOgQAHIAAABQAbAGAFAsQACArAHAGgAgmgNIAtAAQAaAAAAgZQAAgXgcAAIgrAAg");
	this.shape_14.setTransform(163.3,42.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF464").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_15.setTransform(141.9,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF464").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape_16.setTransform(121.6,42.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF464").s().p("AhABeQgcgVAAgmIA4AAQABAiAmAAQAOgBAKgFQAKgFABgMQAAgMgUgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAcgSQAZgOAiAAQAjAAAXAPQAbAUAAAhIg4AAQABgNgLgHQgJgGgOAAQgbABAAASQAAAKATAHQALAEAfAHQAdAIAOAMQATAPAAAaQAAAmgdASQgYAPgoAAQgnAAgZgRg");
	this.shape_17.setTransform(101.9,42.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF464").s().p("AAyBrIgNgmIhKAAIgNAmIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_18.setTransform(81.4,42.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF464").s().p("AhOBrIAAjVICdAAIAAAtIhlAAIAAAsIBXAAIAAAqIhXAAIAABSg");
	this.shape_19.setTransform(62.3,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF464").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_20.setTransform(33.1,42.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF464").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_21.setTransform(12.6,42.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF464").s().p("AAoBrQgDgFgDgdQgCgVgEgJQgIgOgRAAIgqAAIAABOIg4AAIAAjVIBtAAQAgAAATAOQAYAQAAAeQAAASgIAOQgKAOgQAHIAAABQAcAGADAsQAEArAFAGgAgngNIAuAAQAaAAAAgZQAAgXgcAAIgsAAg");
	this.shape_22.setTransform(-8.2,42.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF464").s().p("AhOBrIAAjVICdAAIAAAtIhlAAIAAAsIBXAAIAAAqIhXAAIAABSg");
	this.shape_23.setTransform(-28.2,42.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhNBPQgcgfAAgwQAAgvAcgfQAdggAwgBQAxABAdAgQAcAfAAAvQAAAwgcAfQgdAggxABQgwgBgdgggAglgrQgMASAAAZQAAAaAMARQANAVAYAAQAZAAANgVQAMgRAAgaQAAgZgMgSQgNgTgZAAQgYAAgNATg");
	this.shape_24.setTransform(65.8,12.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbBrIAAilIhAAAIAAgwIC3AAIAAAwIhAAAIAAClg");
	this.shape_25.setTransform(44.4,12.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbBrIAAilIhAAAIAAgwIC3AAIAAAwIhAAAIAAClg");
	this.shape_26.setTransform(15.6,12.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_27.setTransform(-4.1,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhJBPQgdgfAAgwQAAguAdggQAeggAvgBQAlAAAaATQAeAVADAmIg3AAQgCgNgMgJQgLgIgSABQgYAAgNATQgLASAAAZQAAAaALARQANAVAYAAQAWgBAMgIQAOgJACgPIgnAAIAAgpIBaAAIAAB1IgkAAIgEgXQgTAcgoAAQgvgBgeggg");
	this.shape_28.setTransform(-26.6,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape_29.setTransform(419.1,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhABeQgcgVAAgmIA3AAQACAiAngBQAOAAAIgEQALgHAAgLQAAgMgTgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAdgSQAYgPAhAAQAkAAAXAQQAbAUABAhIg4AAQAAgNgLgHQgKgFgNgBQgbAAAAATQAAALAUAGQAKAEAfAHQAcAIAOAMQAUAPAAAaQAAAmgdASQgYAPgoAAQgoAAgYgRg");
	this.shape_30.setTransform(399.4,41.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAyBrIgNgnIhKAAIgNAnIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_31.setTransform(378.9,41.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhOBrIAAjVICdAAIAAAtIhlAAIAAAsIBXAAIAAAqIhXAAIAABSg");
	this.shape_32.setTransform(359.8,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhABeQgcgVAAgmIA3AAQACAiAngBQAOAAAIgEQALgHAAgLQAAgMgTgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAdgSQAYgPAhAAQAkAAAXAQQAbAUABAhIg4AAQAAgNgLgHQgKgFgNgBQgbAAAAATQAAALATAGQALAEAfAHQAcAIAOAMQAUAPAAAaQAAAmgdASQgYAPgoAAQgoAAgYgRg");
	this.shape_33.setTransform(330.6,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_34.setTransform(310.6,41.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhNBPQgcgfAAgwQAAgvAcgfQAdghAwAAQAxAAAdAhQAcAfAAAvQAAAwgcAfQgdAhgxgBQgwABgdghgAglgrQgMASAAAZQAAAaAMASQANATAYABQAZgBANgTQAMgSAAgaQAAgZgMgSQgNgTgZAAQgYAAgNATg");
	this.shape_35.setTransform(288.4,41.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhJBPQgdgfAAgwQAAguAdggQAeghAvAAQAkABAbASQAeAVAEAlIg4AAQgCgMgMgJQgLgHgSAAQgXAAgNATQgMASAAAZQAAAaAMASQANATAXABQAWAAANgJQANgJACgPIgnAAIAAgoIBaAAIAAB0IgkAAIgDgYQgUAcgoAAQgvABgeghg");
	this.shape_36.setTransform(264.8,41.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AApBrQgEgFgDgdQgBgVgGgJQgGgOgSAAIgpAAIAABOIg4AAIAAjVIBsAAQAgAAATAOQAYAQAAAeQAAASgJAOQgIAPgRAGIAAABQAbAGAFAsQACArAHAGgAgmgNIAtAAQAaAAAAgaQAAgWgcAAIgrAAg");
	this.shape_37.setTransform(383.1,13.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_38.setTransform(361.7,13.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ABDBrIAAihIgBAAIgtChIgqAAIgtihIAAAAIAAChIg1AAIAAjVIBTAAIAkCOIAAAAIAliOIBSAAIAADVg");
	this.shape_39.setTransform(337.3,13.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABDBrIAAihIgBAAIgsChIgqAAIgtihIgBAAIAAChIg1AAIAAjVIBSAAIAlCOIAAAAIAliOIBTAAIAADVg");
	this.shape_40.setTransform(309.5,13.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhGBWQgWgXgBgvIAAh8IA4AAIAAB/QAAAWAJAKQAJAKATAAQAUAAAJgKQAJgKAAgWIAAh/IA4AAIAAB8QAAAvgXAXQgXAXgwAAQgvAAgXgXg");
	this.shape_41.setTransform(284.5,13.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhABeQgcgVAAgmIA3AAQADAiAmgBQANAAAJgEQALgHAAgKQAAgNgTgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAdgSQAYgPAhAAQAkAAAXAQQAbAUABAhIg4AAQAAgNgLgHQgKgFgNgBQgbAAAAATQAAAKAUAHQAKAEAfAHQAcAIAOALQAUAQAAAaQAAAlgdATQgYAPgoAAQgnAAgZgRg");
	this.shape_42.setTransform(263.4,13.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAoBrQgDgFgDgdQgCgVgEgJQgIgOgRAAIgpAAIAABOIg5AAIAAjVIBtAAQAfAAAUAOQAYAQAAAeQAAASgIAOQgKAPgQAGIAAABQAbAGAFAtQACAqAHAGgAgmgNIAtAAQAaAAAAgZQAAgYgcAAIgrAAg");
	this.shape_43.setTransform(163.3,43.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAsIhyAAIAAAmIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_44.setTransform(141.9,43.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape_45.setTransform(121.6,43.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhABeQgcgVAAgmIA4AAQABAiAmAAQAOgBAKgFQAKgFABgMQAAgMgUgHIgpgMQgdgIgOgKQgUgQAAgaQAAghAcgSQAZgOAiAAQAjAAAXAPQAbAUAAAhIg4AAQABgNgLgHQgJgGgOAAQgbABAAASQAAAKATAHQALAEAfAHQAdAIAOAMQATAOAAAbQAAAmgdASQgYAPgoAAQgnAAgZgRg");
	this.shape_46.setTransform(101.9,43.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAyBrIgNgmIhKAAIgNAmIg5AAIBQjVIA3AAIBQDVgAAYAbIgYhKIAAAAIgYBKIAwAAg");
	this.shape_47.setTransform(81.4,43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhOBrIAAjVICdAAIAAAsIhlAAIAAAsIBXAAIAAArIhXAAIAABSg");
	this.shape_48.setTransform(62.3,43.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAsIhyAAIAAAmIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_49.setTransform(33.1,43.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAsIhyAAIAAAmIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_50.setTransform(12.6,43.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAoBrQgDgFgDgdQgCgVgEgJQgIgOgRAAIgqAAIAABOIg4AAIAAjVIBtAAQAgAAATAOQAYAQAAAeQAAASgIAOQgKAPgQAGIAAABQAcAGADAtQAEAqAFAGgAgngNIAuAAQAaAAAAgZQAAgYgcAAIgsAAg");
	this.shape_51.setTransform(-8.2,43.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhOBrIAAjVICdAAIAAAsIhlAAIAAAsIBXAAIAAArIhXAAIAABSg");
	this.shape_52.setTransform(-28.2,43.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhNBPQgcgfAAgwQAAgvAcgfQAdghAwAAQAxAAAdAhQAcAfAAAvQAAAwgcAfQgdAggxAAQgwAAgdgggAglgrQgMASAAAZQAAAaAMASQANATAYABQAZgBANgTQAMgSAAgaQAAgZgMgSQgNgTgZAAQgYAAgNATg");
	this.shape_53.setTransform(65.8,13.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape_54.setTransform(44.4,13.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgbBrIAAimIhAAAIAAgvIC3AAIAAAvIhAAAIAACmg");
	this.shape_55.setTransform(15.6,13.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhWBrIAAjVICqAAIAAAtIhyAAIAAAlIBoAAIAAAqIhoAAIAAApIB1AAIAAAwg");
	this.shape_56.setTransform(-4.1,13.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhJBPQgdgfAAgwQAAguAdggQAeghAvAAQAlABAaASQAeAVADAmIg3AAQgCgNgMgJQgLgIgSABQgYAAgNATQgLASAAAZQAAAaALASQANATAYABQAWgBAMgIQAOgJACgPIgnAAIAAgoIBaAAIAAB0IgkAAIgEgYQgTAcgoAAQgvAAgeggg");
	this.shape_57.setTransform(-26.6,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-40,0,471,65), null);


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
	this.instance = new lib.bb_gas();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gascan, new cjs.Rectangle(0,0,104,136), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0068B1").s().p("AwULKMAgpgWeIAAWpg");
	this.shape.setTransform(199.5,180.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005A9B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,304,253.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnBB9QgeAAAAgZIAAjGQAAgaAeAAIODAAQAeAAAAAaIAADGQAAAZgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41,y:6.1}).wait(93).to({graphics:null,x:0,y:0}).wait(60));

	// Layer_3
	this.instance = new lib.shine();
	this.instance.parent = this;
	this.instance.setTransform(-33.5,-2.5,1,1,0,0,0,32.1,38.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({x:-50.5},0).to({_off:true},11).wait(60));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA1AAIAAAOIglAAIAAAPIAhAAIAAALIghAAIAAASIAlAAIAAANg");
	this.shape.setTransform(72,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAkIgCgIIgBgJQAAgGgDgDQgDgCgFAAIgPAAIAAAcIgQAAIAAhHIAmAAQAJAAAGAGQAGAGAAAIQAAANgMAEIAAAAQAKADABAOIAAAIQABAGACADgAgOgCIAQAAQALAAAAgLQAAgJgLAAIgQAAg");
	this.shape_1.setTransform(65.1,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAbQgJgLAAgQQAAgPAJgKQAKgLAPAAQAQAAAJALQAKAKAAAPQAAAQgKALQgJAKgQAAQgPAAgKgKgAgOgQQgEAHgBAJQABAKAEAHQAFAHAJAAQAKAAAFgHQAFgHAAgKQAAgJgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_2.setTransform(57.5,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAkIAAgyIgSAyIgLAAIgSgxIAAAAIAAAxIgOAAIAAhHIAVAAIAQAwIAAAAIAQgwIAWAAIAABHg");
	this.shape_3.setTransform(49.1,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAkIgcgvIgBAAIAAAvIgOAAIAAhHIAPAAIAeAvIAAgvIAOAAIAABHg");
	this.shape_4.setTransform(38.1,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAkIgCgIIgBgJQAAgGgDgDQgDgCgFAAIgPAAIAAAcIgQAAIAAhHIAmAAQAJAAAGAGQAGAGAAAIQAAANgMAEIAAAAQAKADABAOIAAAIQABAGACADgAgOgCIAQAAQALAAAAgLQAAgJgLAAIgQAAg");
	this.shape_5.setTransform(31,5.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATAkIgGgQIgZAAIgGAQIgQAAIAbhHIAPAAIAbBHgAAJAIIgJgZIAAAAIgIAZIARAAg");
	this.shape_6.setTransform(23.8,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA1AAIAAAOIgmAAIAAAPIAiAAIAAALIgiAAIAAASIAmAAIAAANg");
	this.shape_7.setTransform(17.3,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAPAAIAAA6IAiAAIAAANg");
	this.shape_8.setTransform(11.2,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},93).wait(60));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1BAEDB").s().p("AnBB4QgeAAAAgZIAAi9QAAgZAeAAIODAAQAeAAAAAZIAAC9QAAAZgeAAg");
	this.shape_9.setTransform(41,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},93).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-6.4,96,25);


// stage content:
(lib._300x250_Hus_NonA = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// prop
	this.instance = new lib.gascan();
	this.instance.parent = this;
	this.instance.setTransform(-52,168,1,1,0,0,0,52,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).wait(1).to({x:-24.3,y:168.2},0).wait(1).to({x:17.7,y:168.7},0).wait(1).to({x:63,y:169.2},0).wait(1).to({x:102.7,y:169.6},0).wait(1).to({x:134.6,y:169.9},0).wait(1).to({x:159.9,y:170.2},0).wait(1).to({x:179.8,y:170.4},0).wait(1).to({x:195.4,y:170.6},0).wait(1).to({x:207.6,y:170.7},0).wait(1).to({x:217,y:170.8},0).wait(1).to({x:224.1,y:170.9},0).wait(1).to({x:229.1},0).wait(1).to({x:232.5,y:171},0).wait(1).to({x:234.4},0).wait(1).to({x:235},0).wait(1).to({x:234.9},0).wait(1).to({x:234.7},0).wait(1).to({x:234.1},0).wait(1).to({x:233},0).wait(1).to({x:231},0).wait(1).to({x:228.5},0).wait(1).to({x:227.1},0).wait(1).to({x:226.4},0).wait(1).to({x:226.1},0).wait(1).to({x:226},0).wait(68));

	// Layer_1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.2,167.4,1,1,0,0,0,64.8,68.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regY:68.3,x:-43,y:167.3,alpha:0.952},0).wait(1).to({x:-1.8,alpha:0.879},0).wait(1).to({x:42.9,alpha:0.8},0).wait(1).to({x:81.8,alpha:0.731},0).wait(1).to({x:113.2,alpha:0.675},0).wait(1).to({x:138,alpha:0.631},0).wait(1).to({x:157.5,alpha:0.596},0).wait(1).to({x:172.9,alpha:0.569},0).wait(1).to({x:184.9,alpha:0.548},0).wait(1).to({x:194.1,alpha:0.531},0).wait(1).to({x:201,alpha:0.519},0).wait(1).to({x:206,alpha:0.51},0).wait(1).to({x:209.3,alpha:0.504},0).wait(1).to({x:211.2,alpha:0.501},0).wait(1).to({regY:68.4,x:211.8,y:167.4,alpha:0.5},0).wait(1).to({regY:68.3,x:211.7,y:167.3,alpha:0.496},0).wait(1).to({x:211.4,alpha:0.482},0).wait(1).to({x:210.8,alpha:0.451},0).wait(1).to({x:209.6,alpha:0.391},0).wait(1).to({x:207.3,alpha:0.276},0).wait(1).to({x:204.6,alpha:0.139},0).wait(1).to({x:203,alpha:0.06},0).wait(1).to({x:202.2,alpha:0.022},0).wait(1).to({x:201.9,alpha:0.005},0).wait(1).to({regY:68.4,x:201.8,y:167.4,alpha:0},0).wait(68));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("AzSNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_48 = new cjs.Graphics().p("AxyNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_49 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_50 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_51 = new cjs.Graphics().p("AxaNIIAAsgMAi1AAAIAAMgg");
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
	var mask_graphics_62 = new cjs.Graphics().p("AxUNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_63 = new cjs.Graphics().p("AxKNIIAAsgMAi0AAAIAAMgg");
	var mask_graphics_64 = new cjs.Graphics().p("AxFNIIAAsgMAi1AAAIAAMgg");
	var mask_graphics_65 = new cjs.Graphics().p("AxDNIIAAsgMAi1AAAIAAMgg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:-123.5,y:84}).wait(1).to({graphics:mask_graphics_48,x:-113.9,y:84}).wait(1).to({graphics:mask_graphics_49,x:-87.6,y:84}).wait(1).to({graphics:mask_graphics_50,x:-54.3,y:84}).wait(1).to({graphics:mask_graphics_51,x:-22.4,y:84}).wait(1).to({graphics:mask_graphics_52,x:5.2,y:84}).wait(1).to({graphics:mask_graphics_53,x:28.1,y:84}).wait(1).to({graphics:mask_graphics_54,x:46.9,y:84}).wait(1).to({graphics:mask_graphics_55,x:62.3,y:84}).wait(1).to({graphics:mask_graphics_56,x:74.9,y:84}).wait(1).to({graphics:mask_graphics_57,x:85.2,y:84}).wait(1).to({graphics:mask_graphics_58,x:93.5,y:84}).wait(1).to({graphics:mask_graphics_59,x:100.2,y:84}).wait(1).to({graphics:mask_graphics_60,x:105.5,y:84}).wait(1).to({graphics:mask_graphics_61,x:109.6,y:84}).wait(1).to({graphics:mask_graphics_62,x:112,y:84}).wait(1).to({graphics:mask_graphics_63,x:113,y:84}).wait(1).to({graphics:mask_graphics_64,x:113.6,y:84}).wait(1).to({graphics:mask_graphics_65,x:113.8,y:84}).wait(75));

	// masked
	this.instance_2 = new lib.cta("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(68.1,151.5,1,1,0,0,0,41.1,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAbQgHgFgBgLIAOAAQABALAMAAQAPAAgBgIQAAgFgHgCIgMgDQgKgDgEgCQgHgEABgJQAAgJAJgFQAHgDAJAAQAKAAAGAEQAJAEAAALIgOAAQgCgJgKAAQgKAAgBAGQAAAFAHACIAMAEQAKACAEACQAHAEAAAJQgBAJgIAGQgIAEgLABQgLAAgIgGg");
	this.shape.setTransform(136.4,113.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAYQgIgKAAgOQAAgMAIgKQAJgKAMABQAPAAAIALQAIAKgBAOIgtAAQAAAIAEAFQAFAFAHAAQALAAAEgLIANAAQgCAKgIAGQgIAFgKABQgNgBgJgIgAAQgEQAAgHgEgFQgFgFgHAAQgGAAgEAFQgFAEAAAIIAfAAIAAAAg");
	this.shape_1.setTransform(129.9,113.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAbQgIgFAAgLIANAAQABALAMAAQAOAAAAgIQAAgFgGgCIgOgDQgJgDgEgCQgGgEAAgJQgBgJAKgFQAGgDAKAAQAKAAAHAEQAHAEACALIgPAAQgCgJgJAAQgMAAAAAGQABAFAFACIAOAEQAJACAEACQAGAEABAJQgBAJgIAGQgIAEgLABQgMAAgGgGg");
	this.shape_2.setTransform(123.5,113.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAZQgIAIgNAAQgJgBgFgEQgHgFAAgIQAAgLAIgEQAFgCALgBIAMgDQAGgBAAgFQAAgJgMAAQgNAAgBAKIgOAAQACgUAaAAQAKAAAHAEQAHAEAAAKIAAAeQAAAFAEAAIADAAIAAAJQgEABgFABQgJAAgBgIgAADACIgIACQgLACAAAIQAAAEAEACQAEACAEAAQAFAAAEgDQAGgDAAgGIAAgKIgIACg");
	this.shape_3.setTransform(117.2,113.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOArIAAgnQgBgNgLAAQgGAAgEAFQgEAEAAAGIAAAlIgOAAIAAhVIAOAAIAAAgQACgEAFgDQAFgDAFAAQALAAAFAFQAGAGAAAJIAAArg");
	this.shape_4.setTransform(110.3,111.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAYQgJgJABgPQgBgNAJgJQAHgKAOABQALgBAIAGQAIAGABAKIgNAAQgCgLgNAAQgFAAgFAEQgGAGAAALQAAAKAEAFQAFAHAHAAQAGAAADgEQAFgEABgHIANAAQgEAagYAAQgOgBgHgIg");
	this.shape_5.setTransform(103.6,113.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAgIAAg9IANAAIAAAMIAAAAQABgFAFgFQAFgEAGAAIAFAAIAAAOIgGgBQgHAAgEAFQgEAGAAAJIAAAeg");
	this.shape_6.setTransform(98.5,113);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAIIAAgnIAOAAIAAAlQAAAPAMAAQAOAAAAgRIAAgjIANAAIAAA9IgNAAIAAgIQgDAEgFADQgFADgEAAQgXAAAAgYg");
	this.shape_7.setTransform(92.6,113.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeArIAAhUIANAAIAAAJQAGgKANAAQAOAAAIAJQAHAJAAAPQAAAMgHAJQgHAKgNAAQgOAAgGgKIAAAAIAAAfgAgMgaQgFAGAAAKQAAAKAFAFQAFAGAHAAQAJAAAEgHQAEgFAAgJQAAgJgEgGQgFgHgIAAQgIAAgEAGg");
	this.shape_8.setTransform(85.7,114.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGArIAAhVIANAAIAABVg");
	this.shape_9.setTransform(77.1,111.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAYQgIgKAAgOQAAgMAIgKQAJgKAMABQAPAAAIALQAIAKgBAOIgtAAQAAAIAEAFQAFAFAHAAQALAAAEgLIANAAQgCAKgIAGQgIAFgKABQgNgBgJgIgAAQgEQAAgHgEgFQgFgFgHAAQgGAAgEAFQgFAEAAAIIAfAAIAAAAg");
	this.shape_10.setTransform(72.4,113.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAIIAAgnIAOAAIAAAlQAAAPAMAAQAOAAAAgRIAAgjIANAAIAAA9IgNAAIAAgIQgDAEgFADQgFADgEAAQgXAAAAgYg");
	this.shape_11.setTransform(65.6,113.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHArIAAgzIgKAAIAAgKIAKAAIAAgFQAAgLAFgFQADgDAIAAIAKABIAAALIgHgBQgGAAgBAGIAAAHIAMAAIAAAKIgMAAIAAAzg");
	this.shape_12.setTransform(60.4,111.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAkQgHgIgBgNIAOAAQAAAHAEAFQAEAGAHAAQAHgBAEgEQAFgEAAgGQAAgQgVABIAAgJQAHAAAFgDQAGgEAAgGQAAgGgEgDQgEgEgFAAQgGAAgEAGQgDAFAAAHIgOAAQABgMAHgJQAHgIAMAAQALABAHAFQAIAGAAALQAAAOgLAEQAHABAEAFQAEAGAAAIQAAALgJAIQgJAGgMABQgNgBgIgHg");
	this.shape_13.setTransform(51.8,112);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAgIAAg9IANAAIAAAMIAAAAQABgFAFgFQAFgEAGAAIAFAAIAAAOIgGgBQgHAAgEAFQgEAGAAAJIAAAeg");
	this.shape_14.setTransform(43.5,113);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAYQgIgKAAgOQAAgMAIgKQAJgKAMABQAPAAAIALQAIAKgBAOIgtAAQAAAIAEAFQAFAFAHAAQALAAAEgLIANAAQgCAKgIAGQgIAFgKABQgNgBgJgIgAAQgEQAAgHgEgFQgFgFgHAAQgGAAgEAFQgFAEAAAIIAfAAIAAAAg");
	this.shape_15.setTransform(37.7,113.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgEAkQgDgDAAgIIAAgkIgKAAIAAgKIAKAAIAAgSIANAAIAAASIAMAAIAAAKIgMAAIAAAhIABAFQABADAEAAIAGgBIAAALIgJABQgJAAgEgFg");
	this.shape_16.setTransform(32.3,112.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHArIAAgzIgLAAIAAgKIALAAIAAgFQAAgLAFgFQADgDAIAAIAJABIAAALIgGgBQgGAAAAAGIAAAHIALAAIAAAKIgLAAIAAAzg");
	this.shape_17.setTransform(28.6,111.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAMAZQgIAIgNAAQgJgBgFgEQgHgFAAgIQAAgLAIgEQAFgCALgBIAMgDQAGgBAAgFQAAgJgMAAQgNAAgBAKIgOAAQACgUAaAAQAKAAAHAEQAHAEAAAKIAAAeQAAAFAEAAIADAAIAAAJQgEABgFABQgJAAgBgIgAADACIgIACQgLACAAAIQAAAEAEACQAEACAEAAQAFAAAEgDQAGgDAAgGIAAgKIgIACg");
	this.shape_18.setTransform(23.5,113.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAcQgJgHABgKIANAAQABALAMAAQAOAAAAgJQgBgEgFgDIgOgCQgJgCgEgDQgGgFAAgIQgBgJAKgFQAGgDAKAAQAKAAAHADQAHAGACAKIgPAAQgCgJgJAAQgMAAAAAHQABAEAFACIAOAEQAJABAEADQAGAEABAJQAAAKgJAFQgIAEgLAAQgMAAgGgEg");
	this.shape_19.setTransform(175.8,98.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAlQgDgEAAgIIAAgkIgKAAIAAgKIAKAAIAAgSIANAAIAAASIAMAAIAAAKIgMAAIAAAhIABAGQABACAEAAIAGAAIAAAKIgJAAQgJAAgEgDg");
	this.shape_20.setTransform(170.6,97.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAOAgIAAgmQgBgOgLAAQgGAAgEAFQgEAEAAAHIAAAkIgOAAIAAg9IANAAIAAAJIAAAAQAHgLALAAQALAAAFAFQAGAGAAAKIAAAqg");
	this.shape_21.setTransform(165.3,98);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGArIAAg9IANAAIAAA9gAgGgdIAAgNIANAAIAAANg");
	this.shape_22.setTransform(160.4,96.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAXQgIgJAAgOQAAgNAIgJQAIgKAOABQAPgBAIAKQAIAJAAANQAAAOgIAJQgIAKgPgBQgOABgIgKgAgNgOQgEAGAAAIQAAAJAEAGQAFAHAIAAQAIAAAFgHQAFgGAAgJQAAgIgFgGQgFgHgIAAQgIAAgFAHg");
	this.shape_23.setTransform(155.5,98.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AggArIAAhVIAkAAQARAAAHAJQAGAHgBALQABAKgGAGQgHAJgRAAIgVAAIAAAhgAgRgBIAUAAQAGAAAEgDQAFgEABgIQAAgOgPAAIgVAAg");
	this.shape_24.setTransform(148.2,96.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAcQgJgHABgKIANAAQABALAMAAQAOAAAAgJQgBgEgFgDIgOgCQgJgCgEgDQgGgFAAgIQgBgJAKgFQAGgDAKAAQAKAAAHADQAHAGACAKIgPAAQgCgJgJAAQgMAAAAAHQABAEAFACIAOAEQAJABAEADQAGAEABAJQAAAKgJAFQgIAEgLAAQgMAAgGgEg");
	this.shape_25.setTransform(137.6,98.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAiQgIgJAAgPQAAgOAJgJQAHgHALAAQAOAAAGAJIAAAAIAAggIAOAAIAABVIgNAAIAAgJQgFALgOgBQgOAAgHgJgAgMgDQgEAFAAAKQAAAIAEAGQAFAHAHAAQAJAAAFgHQAEgGAAgJQAAgKgFgFQgFgGgHAAQgIAAgFAHg");
	this.shape_26.setTransform(130.6,97);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRAgIAAg9IANAAIAAAMIAAAAQABgFAFgFQAFgEAGAAIAFAAIAAAOIgGgBQgHAAgEAFQgEAGAAAJIAAAeg");
	this.shape_27.setTransform(125.4,98);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZQgIAHgNAAQgJAAgFgEQgHgFAAgJQAAgKAIgEQAFgDALAAIAMgDQAGgCAAgEQAAgJgMAAQgNAAgBAKIgOAAQACgVAaABQAKAAAHADQAHAFAAAKIAAAeQAAAFAEAAIADAAIAAAJQgEACgFgBQgJAAgBgHgAADADIgIABQgLABAAAJQAAAEAEACQAEACAEAAQAFAAAEgDQAGgDAAgGIAAgKIgIADg");
	this.shape_28.setTransform(119.7,98.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAfIgMgtIAAAAIgLAtIgOAAIgTg9IAOAAIAMAtIABAAIALgtIANAAIALAtIABAAIAMgtIAOAAIgTA9g");
	this.shape_29.setTransform(111.6,98.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAXQgIgJAAgOQAAgNAIgJQAJgJAMAAQAPgBAIALQAIALgBAOIgtAAQAAAHAEAFQAFAGAHAAQALAAAEgKIANAAQgCAKgIAFQgIAFgKAAQgNABgJgKgAAQgEQAAgHgEgFQgFgFgHAAQgGAAgEAFQgFAEAAAIIAfAAIAAAAg");
	this.shape_30.setTransform(103.7,98.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUArQgCgEAAgJQAAgMgDgFQgEgGgKAAIgVAAIAAAkIgPAAIAAhVIAoAAQAOAAAHAGQAHAGAAALQAAARgOAEIAAAAQANACAAAQQAAASAEAFgAgUgDIAXAAQAPAAAAgOQAAgNgPAAIgXAAg");
	this.shape_31.setTransform(96.4,96.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgYArIAAgMIAGABQAFAAACgCIADgHIACgEIgYg9IAPAAIAPAtIABAAIAPgtIAPAAIgZBAIgGAPQgFAGgKAAIgJAAg");
	this.shape_32.setTransform(85.5,99.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMArIgSgeIgIAIIAAAWIgOAAIAAhVIAOAAIAAAwIAYgYIARAAIgYAVIAaAog");
	this.shape_33.setTransform(79.6,96.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSAcQgJgHAAgKIAOAAQABALAMAAQAPAAgBgJQgBgEgFgDIgOgCQgIgCgFgDQgGgFgBgIQAAgJAJgFQAIgDAJAAQAKAAAHADQAHAGACAKIgPAAQgBgJgKAAQgLAAAAAHQAAAEAFACIAOAEQAJABAEADQAGAEAAAJQABAKgKAFQgHAEgLAAQgMAAgGgEg");
	this.shape_34.setTransform(73,98.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAIIAAgnIAOAAIAAAlQAAAPAMAAQAOAAAAgRIAAgjIANAAIAAA9IgNAAIAAgIQgDAEgFADQgFADgEAAQgXAAAAgYg");
	this.shape_35.setTransform(66.4,98.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATArIAAgnIgmAAIAAAnIgPAAIAAhVIAPAAIAAAiIAmAAIAAgiIAPAAIAABVg");
	this.shape_36.setTransform(58.7,96.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYArIAAgMIAGABQAFAAACgCIADgHIACgEIgYg9IAPAAIAPAtIABAAIAPgtIAPAAIgZBAIgGAPQgFAGgKAAIgJAAg");
	this.shape_37.setTransform(51.2,99.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAgAgIAAgjQAAgJgCgEQgDgEgHAAQgNAAAAAQIAAAkIgNAAIAAgnQAAgHgCgDQgDgDgGAAQgFAAgEAEQgEAFAAAHIAAAkIgOAAIAAg9IANAAIAAAIIABAAQAGgKANAAQAMAAAEAKQAIgKAMAAQAUAAAAAVIAAAqg");
	this.shape_38.setTransform(42.9,98);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAVArIgVghIgVAhIgRAAIAegsIgcgpIASAAIASAeIAVgeIAQAAIgcApIAeAsg");
	this.shape_39.setTransform(30.5,96.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgVAjQgHgHgBgNIAOAAQAAAHAEAFQAEAFAHABQAHAAAEgFQAFgDAAgIQAAgPgVABIAAgJQAHAAAFgDQAGgEAAgHQAAgEgEgEQgEgEgFABQgGgBgEAGQgDAFAAAHIgOAAQABgMAHgJQAHgHAMgBQALAAAHAGQAIAGAAALQAAANgLAFQAHACAEAEQAEAGAAAIQAAALgJAIQgJAGgMAAQgNABgIgJg");
	this.shape_40.setTransform(23.3,97);

	var maskedShapeInstanceList = [this.instance_2,this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},47).wait(93));

	// dog
	this.instance_3 = new lib.bb_Dogtag();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20,174,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(140));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-138.1,55,1,1,0,0,0,95.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({regX:195.7,regY:28.2,x:-37.6,y:51.2},0).wait(1).to({x:-35.4},0).wait(1).to({x:-31.3},0).wait(1).to({x:-24.7},0).wait(1).to({x:-14.9},0).wait(1).to({x:-0.7},0).wait(1).to({x:19.9},0).wait(1).to({x:49.8},0).wait(1).to({x:91.5},0).wait(1).to({x:138.9},0).wait(1).to({x:178.1},0).wait(1).to({x:205.1},0).wait(1).to({x:223.3},0).wait(1).to({x:235.5},0).wait(1).to({x:243.4},0).wait(1).to({x:248.3},0).wait(1).to({x:250.9},0).wait(1).to({regX:95.9,regY:32,x:151.9,y:55},0).wait(93));

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
		{src:"images/300x250_Hus_NonA_atlas_.png", id:"300x250_Hus_NonA_atlas_"}
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