(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BurgundyProducts = function() {
	this.initialize(img.BurgundyProducts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,165);


(lib.HockeyGlove = function() {
	this.initialize(img.HockeyGlove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Red_Toolbox = function() {
	this.initialize(img.Red_Toolbox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.RedProducts = function() {
	this.initialize(img.RedProducts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,230);


(lib.Snowshoe = function() {
	this.initialize(img.Snowshoe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.TealProducts = function() {
	this.initialize(img.TealProducts);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,75);


(lib.Triangle_cards = function() {
	this.initialize(img.Triangle_cards);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,104);// helper functions:

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


(lib.mc_triangle_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#830B2C").s().p("Aj2ipIHtAAIj3FTgAAABnIAAAAICejZIALgPIAAAAIlRAAg");
	this.shape.setTransform(-10.515,-0.3809,0.3159,0.3159);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77CCC8").s().p("AgKDWIksmcQgEgHADgHQAEgHAIAAIJXAAQAIAAAEAHQADAIgFAGIkrGcQgEAGgHAAQgGAAgEgGgAAAChID3lUIntAAg");
	this.shape_1.setTransform(-10.5164,-0.0808,0.3159,0.3159);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E01C24").s().p("AIjFuQgeggAAgvQAAggARgcQASgcAfgPQgXgGgRgVQgQgVAAgYQAAg0A1gfQgsgqAAhBQAAhGAwgrQAugpBGAAQA6AAAtAeQAIgcAagQQAYgQAeAAIARABIAAAmIgRgBQgXAAgRAMQgQANgEAWQAjApAAA6QAABFgwApQgvAphHAAQgxAAgngVQgSAIgMANQgNAPAAATQAAAdAeAMQARAHAqAAIBgAAQBXAAAqArQAjAkAAAyQAAAvgiAjQgyAzh7AAQhyAAgygzgAJEDiQgWAZAAAkQAAAhAYAXQAlAjBdAAQBlAAAmgnQAXgWAAghQAAgggVgXQgfgghLAAIh0AAQgfAHgUAWgAJmiiQgjAgAAA0QAAAzAjAeQAiAeA0AAQA1AAAigeQAjgeAAgzQAAg0gjggQgigfg1AAQg0AAgiAfgATaCnQg4hCAAhlQAAhiArg6QA4hMBdAAQBWAAA0BBQAyA8AABXIgBAcIlPAAQABAnALAiQAMAiAWAZQAnAvBDAAQA6AAAlgnQAagbAIgjIAtAAQgIA0gpAoQgzAzhKAAQhVAAg3g+gAT3iQQgoAuAABDIEiAAQgBhCglgtQgogxhBAAQhCAAgpAvgAPrCCIAAoiIAsAAIAAIgQAAAZAJANQAKAPAaAAQAaAAAMgCIAAAnQgVAFgTAAQhXAAAAhdgAsRCCIAAlfIAsAAIAAFdQAAAZAJANQALAPAaAAQAZAAANgCIAAAnQgVAFgTAAQhYAAAAhdgAFlDaIAAkfQAAh4hxAAQhLAAgmA6QghAyAABQIAADbIgsAAIAAm3IAnAAIAFBQQASgpArgZQApgZAuAAQBLAAAoArQAoArAABLIAAEhgAxYDaIAAm3IAmAAIAGBZQAOgsAogZQAlgYAwAAQAdAAAOACIAAAsQgSgEgZAAQhLAAgkA9QgcAxAABQIAADTgA1wDaIAApDIjFAAIAAgsIG5AAIAAAsIjGAAIAAJDgAlNBaIipjoIFSAAIgKAPIieDZgAYwi8IAAgZIgLAQIgMgQIAAAZIgFAAIAAgiIAGAAIALAQIALgQIAGAAIAAAigAX+i8IAAgdIgMAAIAAgFIAeAAIAAAFIgMAAIAAAdg");
	this.shape_2.setTransform(0.0208,0.014,0.3159,0.3159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_triangle_logo, new cjs.Rectangle(-50.2,-13.1,100.5,26.299999999999997), null);


(lib.mc_tri_cards = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Triangle_cards();
	this.instance.parent = this;
	this.instance.setTransform(-200,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_tri_cards, new cjs.Rectangle(-200,-52,400,104), null);


(lib.mc_teal_snowshoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Snowshoe();
	this.instance.parent = this;
	this.instance.setTransform(-124.95,-124.95,0.8331,0.8331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_teal_snowshoe, new cjs.Rectangle(-124.9,-124.9,249.9,249.9), null);


(lib.mc_showshoe_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.TealProducts();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_showshoe_line, new cjs.Rectangle(-25.5,-37.5,51,75), null);


(lib.mc_redproduct_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.RedProducts();
	this.instance.parent = this;
	this.instance.setTransform(-87,-115);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_redproduct_line, new cjs.Rectangle(-87,-115,174,230), null);


(lib.mc_red_toolbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Red_Toolbox();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_red_toolbox, new cjs.Rectangle(-150,-150,300,300), null);


(lib.mc_products_burg_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BurgundyProducts();
	this.instance.parent = this;
	this.instance.setTransform(-43.9,-55.75,0.6757,0.6757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_products_burg_line, new cjs.Rectangle(-43.9,-55.7,87.9,111.5), null);


(lib.mc_Husky_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005596").s().p("AEeB7IgRgCIAAgoIALACIAMAAQAMgBAGgCQAFgDAAgGIAAgCIg3iOIA9AAIAYBTIAZhTIAqAAIg5CfQgIATgNAJQgOAJgVAAIgNAAgAjTA9QgMgMAAgcIAAheIA4AAIAABYQAAALADAEQADAFAHAAQAHAAAEgFQAEgFAAgLIAAhXIA3AAIAACPIg0AAIAAgVQgFANgLAFQgKAHgOAAQgZAAgKgNgAgrA9QgTgLgFgWIAtgGQABAJAJADQAHAFANAAQAJgBAGgCQAFgDAAgEQAAgGgSgCIgMgCIgBgBQgdgFgNgKQgHgEgEgJQgEgIgBgKQABgVASgOQASgOAeAAQAZAAARAKQARAKAHASIgrAIQgEgGgGgEQgGgCgKAAQgHAAgFACQgDACAAAFQgBAHAWADIATACQAbAFAKAJQAGAGAEAGQADAJAAAJQAAAWgUAOQgUAPggAAQgdAAgUgMgADDBGIgcg6IgPASIAAAoIg3AAIAAjAIA3AAIAABoIAug3IAyAAIgsAxIAxBegAkzBGIAAhMIgtAAIAABMIg7AAIAAjAIA7AAIAABHIAtAAIAAhHIA8AAIAADAg");
	this.shape.setTransform(-12.8,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF3E42").s().p("AAWBxQgHgCgEgJQgDgIACgIQACgHAGgGIAGgDIAHgDQARgIAFgLQAIgRgPgfQgEgHgHgDQgGgCgJADIgHADQgFACgDgBQgCgBgBgFQgCgEgBAAQgEAAgEACQgFACgCADQgCAEAMAEQAFABAAAEQABADgDADQgEAEgIgHQgLgIgFgLQgDgHgBgIQACgMgBgBQgCAAgFAMIgBAGQAAADgDABIgNAIQgMAGgGAEQgLAJAHAGQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIgCADIgCAGQgBAGAGAFQAHAGANABQALAAAJgEIASgJQALgGAEADQADACABADQAAAEgCACQgDAFgIACIgOACIgGACQgFABgBACQgBAAABAAQAAABAAAAQABAAAAAAQABAAABgBIAFAAIAOgBIAGAAIAGABQAEgBADgCQADgDACgEIACgHQAAgEADgBQAHgBADAJQADAIgDAHQgEANgSAAIgDgBIgDABQgCACgCAFQgCAGAFAHIAEAHQABAFgBADQgCACgEABQgDAAgDgBQgGgCgEgHQgDgHAAgGQAAgMgBgDQgDgIgIAAQgDAAgFACQgFADgCAAIgHABQgEAAgDgCQgDgCABgEIABgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgCQgJgFgKgJIgGgGQgDgDAAgEQAAgFAHgFIAPgLIAOgJIAJgFQAGgFAAgDIgCgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgFIAHgJIANgPQADgCAAgGIAAgKQgBgPACgHIABgHQABgFADgCQADAAADACIAEAEIAXAcQACACADABQADAAACgCIACgFIABgGQACgJACgEQADgIAFgCQAFgDAFAHIAGALQAHALALAZQACAEAEAEIAGAJIAMARIAGAKIAGAKQAJAVgJAIIgGAEQgEACgBADQgCACgBAEIgBAHIgFATQgEAKgEACQgDABgEgBIgHgCQgHAAgDAHIgFANQgDAJgFAFQgGAHgGAAIgDgBgAgMgbIAFADIAHAEIADABIgBgCIgCgFIAAgEIAAgEQAAgDgDgDQgDgCgDAAIgGADQgHAEgDADQgBABgBAFQgBACAAABQAAABAAAAQAAABABAAQAAAAABAAQACgBACgDQACgEACAAQADAAADACgAAcg0IAHAHQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIABgEIAAgJIAAgRIgCgLQgBgJgCABIgCAJIgEAHQgCACACAFIADAHIACAEQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgGAAIgEgBQAAABAIAFgAgUhgIgBACIgBAVQABAHADgBIAFgDQACgCgBgDIgCgGIgDgIQgCgHgBAAIAAAAg");
	this.shape_1.setTransform(43.3439,-2.8472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_Husky_logo, new cjs.Rectangle(-54,-14.2,108,28.5), null);


(lib.mc_headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005596").s().p("AhHB7QgvgZAAg3IBRAAQAAAKADAIQAIATAeAAQAiAAAAgYQAAgKgMgFQgJgFgjgKQgtgNgQgLQgdgRAAgjQABgrAggYQAdgVAtABQAvgBAbAUQAiAVABAtIhNAAQACgNgLgHQgKgHgNAAQgdAAAAASQAAAMAYAHIAzAOQAiAKARAOQAXASAAAhQAAAwgnAXQggAVgygBQgnAAgegPg");
	this.shape.setTransform(110.85,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005596").s().p("AA0CEIgLgmIhTAAIgLAmIhSAAIBhkHIBOAAIBhEHgAAZAlIgYhQIAAAAIgZBQIAxAAg");
	this.shape_1.setTransform(86.15,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005596").s().p("AArCEQgEgPgCgaQgDgZgFgKQgIgQgVAAIgqAAIAABcIhSAAIAAkHICaAAQAlAAAYATQAaAVAAAkQAAAVgKASQgLATgTAGQAiAOAFA0IACAdQACAUAFAIgAgqgQIAqAAQAjABAAgbQAAgbgnAAIgmAAg");
	this.shape_2.setTransform(60.975,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005596").s().p("AgoCEIAAjDIhKAAIAAhEIDlAAIAABEIhLAAIAADDg");
	this.shape_3.setTransform(35.075,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005596").s().p("AArCEIgshPIguBPIhdAAIBfiMIhXh7IBfAAIAoBHIAmhHIBbAAIhUB8IBdCLg");
	this.shape_4.setTransform(10,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005596").s().p("AhvCEIAAkHIDaAAIAABEIiIAAIAAAhIB7AAIAAA+Ih7AAIAAAgICMAAIAABEg");
	this.shape_5.setTransform(-15.45,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005596").s().p("AhuCEIAAkHIDZAAIAABEIiIAAIAAAhIB7AAIAAA+Ih7AAIAAAgICMAAIAABEg");
	this.shape_6.setTransform(-51.8,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005596").s().p("AhuCEIAAkHIDZAAIAABEIiIAAIAAAhIB8AAIAAA+Ih8AAIAAAgICNAAIAABEg");
	this.shape_7.setTransform(-76.8,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005596").s().p("AArCEQgEgPgCgaQgDgZgFgKQgIgQgVAAIgqAAIAABcIhSAAIAAkHICaAAQAlAAAYATQAaAVAAAkQAAAVgKASQgLATgTAGQAiAOAFA0IACAdQACAUAFAIgAgqgQIAqAAQAjABAAgbQAAgbgnAAIgmAAg");
	this.shape_8.setTransform(-101.875,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005596").s().p("AhlCEIAAkHIDLAAIAABEIh6AAIAAAhIBpAAIAAA+IhpAAIAABkg");
	this.shape_9.setTransform(-126.425,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005596").s().p("AAmCEIAAhpIhLAAIAABpIhSAAIAAkHIBSAAIAABcIBLAAIAAhcIBRAAIAAEHg");
	this.shape_10.setTransform(97.85,-22.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005596").s().p("AgoCEIAAjEIhKAAIAAhDIDlAAIAABDIhLAAIAADEg");
	this.shape_11.setTransform(72.475,-22.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005596").s().p("AgoCEIAAkHIBRAAIAAEHg");
	this.shape_12.setTransform(54.975,-22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005596").s().p("AAcCEIgcigIgBAAIgcCgIhPAAIhIkHIBQAAIAgCiIABAAIAgiiIBHAAIAfCkIAAAAIAhikIBRAAIhKEHg");
	this.shape_13.setTransform(32.025,-22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005596").s().p("Ah0CEIAAkHICHAAQAxAAAbAfQAWAZgBAiQAAAtgcAZQgbAXgwAAIgvAAIAABQgAgigKIAgAAQATAAAJgEQAOgGAAgSQAAgQgMgGQgIgDgTgBIgjAAg");
	this.shape_14.setTransform(-8.4,-22.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#005596").s().p("Ah3AbIAAihIBRAAIAACOQAAAdAFAMQAIAUAZAAQAaAAAIgUQAFgMAAgdIAAiOIBRAAIAAChQAABsh4AAQh3AAAAhsg");
	this.shape_15.setTransform(-35.15,-22.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#005596").s().p("AhiCEIAAkHIBRAAIAADDIB0AAIAABEg");
	this.shape_16.setTransform(-70.825,-22.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005596").s().p("AhiCEIAAkHIBRAAIAADDIB0AAIAABEg");
	this.shape_17.setTransform(-93.125,-22.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005596").s().p("AgoCEIAAkHIBRAAIAAEHg");
	this.shape_18.setTransform(-110.275,-22.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#005596").s().p("AhlCEIAAkHIDLAAIAABDIh6AAIAAAiIBpAAIAAA+IhpAAIAABkg");
	this.shape_19.setTransform(-126.425,-22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_headline, new cjs.Rectangle(-140.7,-38,281.5,76), null);


(lib.mc_CTA_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(78.575,6.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAeIgOgXIgHAHIAAAQIgHAAIAAg7IAHAAIAAAjIATgTIAKAAIgSAPIATAcg");
	this.shape_1.setTransform(75.5,4.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAQQgFgFAAgLQAAgJAGgGQAFgHAIAAQALAAAFAJQAFAGgBAJIggAAQAAAGAEAFQADADAGAAQAKAAACgIIAHAAQgCAHgFAEQgFAEgHAAQgJAAgGgHgAANgDQgBgFgDgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_2.setTransform(70.7775,4.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALAeIAAgeQAAgDgDgCQgCgCgEAAQgFAAgEAEQgDADAAAFIAAAZIgHAAIAAg7IAHAAIAAAXIAAAAQACgEAEgCQAEgCADAAQAPAAAAAPIAAAdg");
	this.shape_3.setTransform(66.125,4.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAXQgHgJAAgOQAAgNAHgJQAIgJANAAQAJAAAHAFQAHAFACAKIgIAAQgCgGgEgEQgFgDgGAAQgKAAgFAHQgFAHAAAKQAAALAFAGQAFAIAKAAQAHAAAFgFQAFgFAAgIIAIAAQgBAMgHAGQgHAHgLAAQgNAAgHgJg");
	this.shape_4.setTransform(60.725,4.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGAcQgFAAgCgCQgCgCAAgFIAAgbIgIAAIAAgHIAIAAIAAgMIAGAAIAAAMIAJAAIAAAHIgJAAIAAAaIABAEIAFAAIADAAIAAAGg");
	this.shape_5.setTransform(53.875,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_6.setTransform(51.525,4.7989);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAQQgFgGAAgKQAAgJAFgGQAGgHAJAAQAKAAAGAHQAFAGAAAJQAAAKgFAGQgGAHgKAAQgJAAgGgHgAgJgMQgEAFAAAHQAAAIAEAFQAEADAFAAQAGAAAEgDQAEgFAAgIQAAgHgEgFQgEgDgGAAQgFAAgEADg");
	this.shape_7.setTransform(47.425,4.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAfIAAg8IAIAAIAAAGQADgHAJAAQAKAAAGAHQAFAHAAAJQAAAJgFAGQgGAHgJAAIgHgBQgEgCgCgEIAAAXgAgKgTQgDAFAAAHQAAAHADAEQAEAEAGAAQAHAAAEgEQACgEAAgIQAAgGgDgFQgEgEgGAAQgGAAgEAEg");
	this.shape_8.setTransform(42.65,5.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAbQgIgGABgLIAIAAQAAAHAEAEQAFAEAHAAQAPAAAAgLQAAgGgFgCIgNgEQgKgCgDgCQgHgEABgHQgBgJAIgFQAGgEAIAAQAJAAAGAFQAGAFABAJIgHAAQgCgMgNAAQgGAAgDACQgFADABAFQAAAFAFADIANADQAJACAEACQAHAFgBAIQABAJgJAEQgGAFgKAAQgJAAgHgFg");
	this.shape_9.setTransform(37.25,4.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAYQgFgGAAgKQAAgJAFgGQAGgHAJAAQADAAAEABQAEACADAEIAAgXIAHAAIAAA8IgHAAIAAgGQgEAHgKAAQgJAAgGgHgAgJgDQgDAEAAAHQAAAHADAEQAEAFAGAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgFgHAAQgGAAgDAFg");
	this.shape_10.setTransform(29.525,4.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AALAWIAAgdQAAgEgDgCQgCgCgEAAQgFAAgEAEQgDADAAAHIAAAXIgHAAIAAgrIAGAAIAAAHIABAAQAEgHAJgBQAPAAAAAQIAAAcg");
	this.shape_11.setTransform(24.825,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgBAHgCIAKgBQAEgCAAgEQAAgGgJAAQgKAAgBAHIgHAAQAAgHAGgEQAFgDAHAAQAQAAAAAMIAAAWIAAADIACABIADAAIAAAGIgGABQgGAAAAgHgAADABIgGACQgJABAAAGQAAAGAIAAQAGABAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_12.setTransform(20.275,4.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMAUQgFgEgBgIIAIAAQAAAIAKAAQALAAAAgGQAAgDgEgCIgJgDQgHgCgDgBQgFgDAAgGQAAgFAGgEQAEgDAHAAQAQAAABAOIgHAAQgBgIgJABQgJgBAAAGQAAADAFACIAIADQAHABADABQAFADAAAGQAAAHgGAEQgFADgIAAQgHAAgFgDg");
	this.shape_13.setTransform(13.425,4.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_14.setTransform(10.125,2.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAeIgOgXIgHAHIAAAQIgHAAIAAg7IAHAAIAAAjIATgTIAKAAIgRAPIASAcg");
	this.shape_15.setTransform(7.05,4.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_16.setTransform(3.425,4.7989);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgBAHgCIAKgBQAEgCAAgEQAAgGgJAAQgKAAgBAHIgHAAQAAgHAGgEQAFgDAHAAQAQAAAAAMIAAAWIAAADIACABIADAAIAAAGIgGABQgGAAAAgHgAADABIgGACQgJABAAAGQAAAGAIAAQAGABAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_17.setTransform(-0.425,4.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXAeIAAgxIgTAxIgGAAIgTgxIAAAxIgIAAIAAg7IALAAIASAyIATgyIALAAIAAA7g");
	this.shape_18.setTransform(-6.5,4.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEAHQADgBABgDIAAgEIgEAAIAAgJIAJAAIAAAIQAAALgJACg");
	this.shape_19.setTransform(-13.725,7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAQQgFgFAAgLQAAgJAGgGQAFgHAIAAQALAAAFAJQAFAGgBAJIggAAQAAAGAEAFQADADAGAAQAKAAACgIIAHAAQgCAHgFAEQgFAEgHAAQgJAAgGgHgAANgDQgBgFgDgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_20.setTransform(-17.1225,4.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_21.setTransform(-20.575,4.7989);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAeIAAgrIAGAAIAAArgAgCgVIAAgIIAGAAIAAAIg");
	this.shape_22.setTransform(-23.15,4.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgDAeIAAg1IgUAAIAAgGIAvAAIAAAGIgUAAIAAA1g");
	this.shape_23.setTransform(-26.525,4.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AALAWIAAgdQAAgEgDgCQgCgCgEAAQgFAAgEAEQgDADAAAHIAAAXIgHAAIAAgrIAGAAIAAAHIABAAQAEgHAJgBQAPAAAAAQIAAAcg");
	this.shape_24.setTransform(-33.625,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgBAHgCIAKgBQAEgCAAgEQAAgGgJAAQgKAAgBAHIgHAAQAAgHAGgEQAFgDAHAAQAQAAAAAMIAAAWIAAADIACABIADAAIAAAGIgGABQgGAAAAgHgAADABIgGACQgJABAAAGQAAAGAIAAQAGABAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_25.setTransform(-38.175,4.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAeIAAgrIAFAAIAAArgAgCgVIAAgIIAFAAIAAAIg");
	this.shape_26.setTransform(-41.45,4.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPAYQgFgGAAgKQAAgJAFgGQAGgHAJAAQADAAAEABQAEACADAEIAAgXIAHAAIAAA8IgHAAIAAgGQgEAHgKAAQgJAAgGgHgAgJgDQgDAEAAAHQAAAHADAEQAEAFAGAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgFgHAAQgGAAgDAFg");
	this.shape_27.setTransform(-45.025,4.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgBAHgCIAKgBQAEgCAAgEQAAgGgJAAQgKAAgBAHIgHAAQAAgHAGgEQAFgDAHAAQAQAAAAAMIAAAWIAAADIACABIADAAIAAAGIgGABQgGAAAAgHgAADABIgGACQgJABAAAGQAAAGAIAAQAGABAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_28.setTransform(-49.575,4.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AALAWIAAgdQAAgEgDgCQgCgCgEAAQgFAAgEAEQgDADAAAHIAAAXIgHAAIAAgrIAGAAIAAAHIABAAQAEgHAJgBQAPAAAAAQIAAAcg");
	this.shape_29.setTransform(-54.275,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgBAHgCIAKgBQAEgCAAgEQAAgGgJAAQgKAAgBAHIgHAAQAAgHAGgEQAFgDAHAAQAQAAAAAMIAAAWIAAADIACABIADAAIAAAGIgGABQgGAAAAgHgAADABIgGACQgJABAAAGQAAAGAIAAQAGABAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_30.setTransform(-58.825,4.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAXQgHgJAAgOQAAgNAHgJQAIgJANAAQAJAAAHAFQAHAFACAKIgIAAQgCgGgEgEQgFgDgGAAQgKAAgFAHQgFAHAAAKQAAALAFAGQAFAIAKAAQAHAAAFgFQAFgFAAgIIAIAAQgBAMgHAGQgHAHgLAAQgNAAgHgJg");
	this.shape_31.setTransform(-64.225,4.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAGAcQgFAAgCgCQgCgCAAgFIAAgbIgIAAIAAgHIAIAAIAAgMIAGAAIAAAMIAJAAIAAAHIgJAAIAAAaIABAEIAFAAIADAAIAAAGg");
	this.shape_32.setTransform(-71.075,4.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgBAHgCIAKgBQAEgCAAgEQAAgGgJAAQgKAAgBAHIgHAAQAAgHAGgEQAFgDAHAAQAQAAAAAMIAAAWIAAADIACABIADAAIAAAGIgGABQgGAAAAgHgAADABIgGACQgJABAAAGQAAAGAIAAQAGABAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_33.setTransform(-74.475,4.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAYAWIAAgcQAAgJgJAAQgFAAgDADQgDADAAAFIAAAaIgHAAIAAgcQAAgJgIAAQgGAAgDAFQgDADAAADIAAAaIgHAAIAAgrIAHAAIAAAHIAAAAQAFgIAJAAQAJAAACAIQAFgIAJAAQAPAAAAAOIAAAeg");
	this.shape_34.setTransform(-82.825,4.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgOAQQgFgFAAgLQAAgJAGgGQAFgHAIAAQALAAAFAJQAFAGgBAJIggAAQAAAGAEAFQADADAGAAQAKAAACgIIAHAAQgCAHgFAEQgFAEgHAAQgJAAgGgHgAANgDQgBgFgDgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_35.setTransform(-88.6725,4.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAQQgFgFAAgLQAAgJAGgGQAFgHAIAAQALAAAFAJQAFAGgBAJIggAAQAAAGAEAFQADADAGAAQAKAAACgIIAHAAQgCAHgFAEQgFAEgHAAQgJAAgGgHgAANgDQgBgFgDgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_36.setTransform(-93.2225,4.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgPAYQgFgGAAgKQAAgJAFgGQAGgHAJAAQADAAAEABQAEACADAEIAAgXIAHAAIAAA8IgHAAIAAgGQgEAHgKAAQgJAAgGgHgAgJgDQgDAEAAAHQAAAHADAEQAEAFAGAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgFgHAAQgGAAgDAFg");
	this.shape_37.setTransform(-98.175,4.075);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOAQQgFgFAAgLQAAgJAGgGQAFgHAIAAQALAAAFAJQAFAGgBAJIggAAQAAAGAEAFQADADAGAAQAKAAACgIIAHAAQgCAHgFAEQgFAEgHAAQgJAAgGgHgAANgDQgBgFgDgEQgEgDgFAAQgEAAgEADQgDAEgBAFIAZAAIAAAAg");
	this.shape_38.setTransform(-102.7725,4.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_39.setTransform(-106.225,4.7989);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgPAQQgFgGAAgKQAAgJAFgGQAGgHAJAAQAKAAAGAHQAFAGAAAJQAAAKgFAGQgGAHgKAAQgJAAgGgHgAgJgMQgEAFAAAHQAAAIAEAFQAEADAFAAQAGAAAEgDQAEgFAAgIQAAgHgEgFQgEgDgGAAQgFAAgEADg");
	this.shape_40.setTransform(-112.675,4.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAGAcQgFAAgCgCQgCgCAAgFIAAgbIgIAAIAAgHIAIAAIAAgMIAGAAIAAAMIAJAAIAAAHIgJAAIAAAaIABAEIAFAAIADAAIAAAGg");
	this.shape_41.setTransform(-116.525,4.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAPQgHgHAAgIQAAgIAHgGQAFgFAIAAQAJAAAFAFQAGAGABAIQgBAIgGAHQgFAFgJAAQgIAAgFgFgAgLgLQgFAEAAAHQAAAHAFAGQAFAEAGAAQAHAAAFgEQAFgGAAgHQAAgHgFgEQgFgGgHAAQgGAAgFAGgAAGAMIgGgLIgDAAIAAALIgEAAIAAgXIAJAAQAHAAAAAHQAAAFgFAAIAHALgAgDgBIADAAIAEAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgEgGAAIgDAAg");
	this.shape_42.setTransform(111.5,-7.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgPAeIAAgHIAEABQAEAAACgEIADgHIgSgrIAJAAIALAjIABAAIAMgjIAIAAIgUAxQgBAHgDACQgDADgEAAIgFgBg");
	this.shape_43.setTransform(107.175,-4.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOARQgFgHAAgKQAAgJAGgGQAFgHAIAAQALAAAFAIQAFAIgBAIIggAAQAAAHAEADQADAEAGABQAKAAACgJIAHAAQgCAIgFADQgFAEgHAAQgJAAgGgGgAANgDQgBgGgDgDQgEgDgFAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_44.setTransform(102.8275,-5.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AALAXIAAgeQAAgDgDgCQgCgDgEAAQgFAAgEAEQgDAEAAAGIAAAYIgHAAIAAgrIAGAAIAAAHIABAAQAEgIAJAAQAPAAAAAPIAAAdg");
	this.shape_45.setTransform(98.175,-5.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgPARQgFgHAAgKQAAgJAFgGQAGgHAJAAQAKAAAGAHQAFAGAAAJQAAAKgFAHQgGAGgKAAQgJAAgGgGgAgJgMQgEAGAAAGQAAAIAEAEQAEAEAFABQAGgBAEgEQAEgEAAgIQAAgGgEgGQgEgDgGAAQgFAAgEADg");
	this.shape_46.setTransform(93.375,-5.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWAeIAAgxIgTAxIgFAAIgUgxIAAAxIgHAAIAAg7IALAAIASAyIATgyIALAAIAAA7g");
	this.shape_47.setTransform(87.25,-6.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDAeIAAg1IgUAAIAAgGIAvAAIAAAGIgUAAIAAA1g");
	this.shape_48.setTransform(78.775,-6.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTAXQgHgJAAgOQAAgNAHgJQAIgJANAAQAJAAAHAFQAHAFACAKIgIAAQgCgGgEgEQgFgDgGAAQgKAAgFAHQgFAHAAAKQAAALAFAGQAFAIAKAAQAHAAAFgFQAFgFAAgIIAIAAQgBAMgHAGQgHAHgLAAQgNAAgHgJg");
	this.shape_49.setTransform(73.325,-6.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AALAXIAAgeQAAgDgDgCQgCgDgEAAQgFAAgEAEQgDAEAAAGIAAAYIgHAAIAAgrIAGAAIAAAHIABAAQAEgIAJAAQAPAAAAAPIAAAdg");
	this.shape_50.setTransform(65.575,-5.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDAeIAAgrIAGAAIAAArgAgDgVIAAgIIAGAAIAAAIg");
	this.shape_51.setTransform(62.3,-6.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAKAeIgOgXIgHAHIAAAQIgHAAIAAg7IAHAAIAAAjIATgTIAKAAIgSAPIATAcg");
	this.shape_52.setTransform(57.1,-6.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgNARQgGgGAAgKQAAgKAFgGQAFgHAKAAQAHAAAGAEQAFAEAAAHIgGAAQgDgIgJAAQgNAAABAQQAAAGACAEQAEAFAFABQALAAACgLIAHAAQgBAIgFAFQgFAEgJAAQgIAAgFgGg");
	this.shape_53.setTransform(52.35,-5.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgCAHgBIAKgCQAEgBAAgDQAAgIgJABQgKgBgBAJIgHAAQAAgIAGgDQAFgEAHAAQAQAAAAAMIAAAVIAAAEIACACIADgBIAAAGIgGABQgGAAAAgHgAADABIgGABQgJACAAAGQAAAHAIAAQAGAAAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_54.setTransform(47.875,-5.65);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGAdQgEgCgDgDIAAAGIgHAAIAAg8IAHAAIAAAXQAEgHAKAAQAKAAAFAHQAFAGAAAJQAAAKgFAGQgGAHgJAAIgHgCgAgKgDQgDAEAAAHQAAAHAEAEQADAFAGAAQAHAAADgFQADgEAAgIQAAgGgDgEQgEgFgGAAQgGAAgEAFg");
	this.shape_55.setTransform(43.15,-6.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTAeIAAg7IAIAAIAAA0IAfAAIAAAHg");
	this.shape_56.setTransform(36.125,-6.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPAgIAYg/IAHAAIgZA/g");
	this.shape_57.setTransform(32.075,-6.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAgIAAgJQgJgBgFgGQgFgGAAgKQAAgJAFgGQAFgHAJAAIAAgIIADAAIAAAIQAPAAACAOIgHAAQgDgIgHAAIAAAgQAIAAACgKIAHAAQgBAGgEAFQgFAFgHABIAAAJgAgMAAQABAGACAFQADAEAGABIAAggQgMACAAAOg");
	this.shape_58.setTransform(28.35,-5.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgNAaQgGgGAAgHIAHAAQAAAEAEADQADADAFABQAFAAAEgEQAEgEAAgHQAAgFgEgEQgEgDgFgBQgGABgFAEIgHAAIAGgeIAdAAIAAAGIgYAAIgDARQAEgDAHAAQAIAAAGAEQAFAFAAAKQAAAIgFAGQgGAGgJAAQgIAAgFgEg");
	this.shape_59.setTransform(23.55,-6.35);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAGAdQgFAAgCgDQgCgBAAgGIAAgbIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAJAAIAAAGIgJAAIAAAaIABAEIAFAAIADAAIAAAHg");
	this.shape_60.setTransform(17.475,-6.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOARQgFgHAAgKQAAgJAGgGQAFgHAIAAQALAAAFAIQAFAIgBAIIggAAQAAAHAEADQADAEAGABQAKAAACgJIAHAAQgCAIgFADQgFAEgHAAQgJAAgGgGgAANgDQgBgGgDgDQgEgDgFAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_61.setTransform(14.0275,-5.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgLAcQgGgDAAgHIAHAAQAAAEAEACQADABADAAQANAAAAgQIAAgDQgCAEgEACQgDACgEAAQgJAAgFgHQgFgGAAgIQAAgKAEgGQAGgIAJABQAJgBAEAIIAAgGIAHAAIAAAnQAAAVgUABQgGAAgFgEgAgJgTQgDAEAAAHQAAAHADADQADAFAGAAQAGAAAEgFQADgDAAgIQAAgGgDgEQgDgFgHAAQgFAAgEAFg");
	this.shape_62.setTransform(9.175,-4.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEAHQADgBABgDIAAgDIgEAAIAAgKIAJAAIAAAJQAAAJgJADg");
	this.shape_63.setTransform(3.325,-3.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgPAYQgFgGAAgKQAAgJAFgGQAGgHAJAAQADAAAEABQAEACADAEIAAgXIAHAAIAAA8IgHAAIAAgGQgEAHgKAAQgJAAgGgHgAgJgDQgDAEAAAHQAAAHADAEQAEAFAGAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgFgHAAQgGAAgDAFg");
	this.shape_64.setTransform(-0.475,-6.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_65.setTransform(-3.975,-5.7011);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgCAHgBIAKgCQAEgBAAgDQAAgIgJABQgKgBgBAJIgHAAQAAgIAGgDQAFgEAHAAQAQAAAAAMIAAAVIAAAEIACACIADgBIAAAGIgGABQgGAAAAgHgAADABIgGABQgJACAAAGQAAAHAIAAQAGAAAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_66.setTransform(-7.825,-5.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNARQgGgGAAgKQAAgKAFgGQAFgHAKAAQAHAAAGAEQAFAEAAAHIgGAAQgDgIgJAAQgNAAABAQQAAAGACAEQAEAFAFABQALAAACgLIAHAAQgBAIgFAFQgFAEgJAAQgIAAgFgGg");
	this.shape_67.setTransform(-12.45,-5.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAGAdQgFAAgCgDQgCgBAAgGIAAgbIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAJAAIAAAGIgJAAIAAAaIABAEIAFAAIADAAIAAAHg");
	this.shape_68.setTransform(-18.525,-6.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgCAeIAAgrIAFAAIAAArgAgCgVIAAgIIAFAAIAAAIg");
	this.shape_69.setTransform(-20.65,-6.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgPAYQgFgGAAgKQAAgJAFgGQAGgHAJAAQADAAAEABQAEACADAEIAAgXIAHAAIAAA8IgHAAIAAgGQgEAHgKAAQgJAAgGgHgAgJgDQgDAEAAAHQAAAHADAEQAEAFAGAAQAGAAAEgFQADgEAAgHQAAgHgDgEQgEgFgHAAQgGAAgDAFg");
	this.shape_70.setTransform(-24.225,-6.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgOARQgFgHAAgKQAAgJAGgGQAFgHAIAAQALAAAFAIQAFAIgBAIIggAAQAAAHAEADQADAEAGABQAKAAACgJIAHAAQgCAIgFADQgFAEgHAAQgJAAgGgGgAANgDQgBgGgDgDQgEgDgFAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_71.setTransform(-28.8225,-5.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_72.setTransform(-32.275,-5.7011);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgNARQgGgGAAgKQAAgKAFgGQAGgHAJAAQAHAAAGAEQAFAEAAAHIgGAAQgCgIgKAAQgNAAABAQQAAAGACAEQAEAFAFABQALAAACgLIAHAAQgBAIgFAFQgFAEgJAAQgIAAgFgGg");
	this.shape_73.setTransform(-36.2,-5.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAUALIAAgRIgIARIgCAAIgHgRIAAARIgDAAIAAgWIAFAAIAGARIAHgRIAGAAIAAAWgAgQALIAAgSIgHAAIAAgEIASAAIAAAEIgHAAIAAASg");
	this.shape_74.setTransform(-43.525,-8.35);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOARQgFgHAAgKQAAgJAGgGQAFgHAIAAQALAAAFAIQAFAIgBAIIggAAQAAAHAEADQADAEAGABQAKAAACgJIAHAAQgCAIgFADQgFAEgHAAQgJAAgGgGgAANgDQgBgGgDgDQgEgDgFAAQgEAAgEADQgDADgBAGIAZAAIAAAAg");
	this.shape_75.setTransform(-48.4725,-5.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_76.setTransform(-51.7,-6.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLAcQgGgDAAgHIAHAAQAAAEAEACQADABADAAQANAAAAgQIAAgDQgCAEgEACQgDACgEAAQgJAAgFgHQgFgGAAgIQAAgKAEgGQAGgIAJABQAJgBAEAIIAAgGIAHAAIAAAnQAAAVgUABQgGAAgFgEgAgJgTQgDAEAAAHQAAAHADADQADAFAGAAQAGAAAEgFQADgDAAgIQAAgGgDgEQgDgFgHAAQgFAAgEAFg");
	this.shape_77.setTransform(-55.175,-4.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AALAXIAAgeQAAgDgDgCQgCgDgEAAQgFAAgEAEQgDAEAAAGIAAAYIgHAAIAAgrIAGAAIAAAHIABAAQAEgIAJAAQAPAAAAAPIAAAdg");
	this.shape_78.setTransform(-59.825,-5.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgCAHgBIAKgCQAEgBAAgDQAAgIgJABQgKgBgBAJIgHAAQAAgIAGgDQAFgEAHAAQAQAAAAAMIAAAVIAAAEIACACIADgBIAAAGIgGABQgGAAAAgHgAADABIgGABQgJACAAAGQAAAHAIAAQAGAAAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_79.setTransform(-64.375,-5.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgDAeIAAgrIAGAAIAAArgAgDgVIAAgIIAGAAIAAAIg");
	this.shape_80.setTransform(-67.65,-6.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgLAXIAAgrIAHAAIAAAJQAFgLALABIAAAHQgPAAAAARIAAAUg");
	this.shape_81.setTransform(-69.725,-5.7011);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgDAeIAAg1IgUAAIAAgGIAvAAIAAAGIgUAAIAAA1g");
	this.shape_82.setTransform(-73.825,-6.475);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgCAHgBIAKgCQAEgBAAgDQAAgIgJABQgKgBgBAJIgHAAQAAgIAGgDQAFgEAHAAQAQAAAAAMIAAAVIAAAEIACACIADgBIAAAGIgGABQgGAAAAgHgAADABIgGABQgJACAAAGQAAAHAIAAQAGAAAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_83.setTransform(-80.775,-5.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AALAeIAAgeQAAgDgDgCQgCgCgEAAQgFAAgEAEQgDADAAAFIAAAZIgHAAIAAg7IAHAAIAAAXIAAAAQACgEAEgCQAEgCADAAQAPAAAAAPIAAAdg");
	this.shape_84.setTransform(-87.825,-6.475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAGAdQgFAAgCgDQgCgBAAgGIAAgbIgIAAIAAgGIAIAAIAAgOIAGAAIAAAOIAJAAIAAAGIgJAAIAAAaIABAEIAFAAIADAAIAAAHg");
	this.shape_85.setTransform(-91.625,-6.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgDAeIAAgrIAGAAIAAArgAgDgVIAAgIIAGAAIAAAIg");
	this.shape_86.setTransform(-93.75,-6.475);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAJAWIgJgiIAAAAIgIAiIgIAAIgOgrIAIAAIAKAjIAJgjIAHAAIAJAjIAKgjIAIAAIgOArg");
	this.shape_87.setTransform(-97.875,-5.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgPAeIAAgHIAEABQAEAAACgEIADgHIgSgrIAJAAIALAjIABAAIAMgjIAIAAIgUAxQgBAHgDACQgDADgEAAIgFgBg");
	this.shape_88.setTransform(-105.575,-4.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAJAQQgFAHgJAAQgHAAgDgDQgFgDAAgGQAAgHAFgDQADgCAHgBIAKgCQAEgBAAgDQAAgIgJABQgKgBgBAJIgHAAQAAgIAGgDQAFgEAHAAQAQAAAAAMIAAAVIAAAEIACACIADgBIAAAGIgGABQgGAAAAgHgAADABIgGABQgJACAAAGQAAAHAIAAQAGAAAEgEQADgDAAgEIAAgGIgGABg");
	this.shape_89.setTransform(-109.875,-5.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAeIAAg7IAaAAQAJAAAFAEQAFAFAAAJQAAAIgFAEQgFAFgJgBIgSAAIAAAZgAgOAAIAPAAQAOAAAAgLQAAgMgOAAIgPAAg");
	this.shape_90.setTransform(-114.825,-6.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CTA_text, new cjs.Rectangle(-119.7,-11.5,239.5,23), null);


(lib.mc_CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005596").s().p("AgYAbQgIgKgBgRQAAgPAKgLQAKgLANAAQASAAAJAOQAHAMgBAPIg1AAQAAAKAFAGQAGAHAKAAQAQAAADgOIAMAAQgCAMgJAHQgIAGgMAAQgQAAgJgLgAAUgGQAAgIgGgGQgGgGgIAAQgIAAgGAGQgFAFgBAJIAoAAIAAAAg");
	this.shape.setTransform(31.6517,-0.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005596").s().p("AgSAlIAAhHIALAAIAAAPQAIgRASAAIAAANQgZAAAAAcIAAAgg");
	this.shape_1.setTransform(25.9,-0.7007);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005596").s().p("AgZAbQgJgKAAgRQAAgPAJgLQAJgLAQAAQARAAAJALQAJALAAAPQAAARgJAKQgJALgRAAQgQAAgJgLgAgPgTQgHAHAAAMQAAANAHAHQAGAHAJAAQAKAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_2.setTransform(19.175,-0.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005596").s().p("AAlAyIAAhSIgfBSIgKAAIgghSIAABSIgNAAIAAhjIATAAIAeBTIAghTIASAAIAABjg");
	this.shape_3.setTransform(9.075,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005596").s().p("AASAlIAAgwQAAgGgEgFQgEgDgHAAQgJAAgGAGQgFAGAAAKIAAAoIgMAAIAAhHIALAAIAAALIAAAAQAIgNAPAAQAZAAAAAbIAAAug");
	this.shape_4.setTransform(-4.7,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005596").s().p("AgSAlIAAhHIALAAIAAAPQAIgRASAAIAAANQgZAAAAAcIAAAgg");
	this.shape_5.setTransform(-10.5,-0.7007);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005596").s().p("AAPAbQgJALgPAAQgLAAgGgFQgHgFAAgKQAAgLAHgGQAGgCALgDIAQgDQAIgCAAgFQAAgMgPAAQgSAAAAANIgMAAQAAgMAKgGQAHgGANAAQAaAAAAAUIAAAkIABAGQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAIADAAIAAAJQgDACgGAAQgKAAAAgLgAAFACIgLACQgOACAAALQgBAKAOAAQALAAAFgFQAGgFAAgGIAAgLQgDABgHABg");
	this.shape_6.setTransform(-16.85,-0.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005596").s().p("AgYAbQgIgKgBgRQAAgPAKgLQAKgLANAAQASAAAJAOQAHAMgBAPIg1AAQAAAKAFAGQAGAHAKAAQAQAAADgOIAMAAQgCAMgJAHQgIAGgMAAQgQAAgJgLgAAUgGQAAgIgGgGQgGgGgIAAQgIAAgGAGQgFAFgBAJIAoAAIAAAAg");
	this.shape_7.setTransform(-24.3983,-0.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005596").s().p("AggAyIAAhjIANAAIAABYIA0AAIAAALg");
	this.shape_8.setTransform(-31.6,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#005596").ss(1,0,1).p("AlgAAILBAA");
	this.shape_9.setTransform(-0.075,6.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_CTA, new cjs.Rectangle(-38,-9,76.1,18), null);


(lib.mc_burgundy_glove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.HockeyGlove();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_burgundy_glove, new cjs.Rectangle(-150,-150,300,300), null);


(lib.mc_tealline_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mc_showshoe_line();
	this.instance.parent = this;
	this.instance.setTransform(-15.55,23.05,0.6228,0.6228,0,0,0,0.3,0.3);

	this.instance_1 = new lib.mc_showshoe_line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,-22.65,0.6228,0.6228,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_tealline_group, new cjs.Rectangle(-31.6,-46.2,63.3,92.4), null);


(lib.mc_redline_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mc_redproduct_line();
	this.instance.parent = this;
	this.instance.setTransform(-53.1,77.4,0.6845,0.6845,0,0,0,0.2,0.2);

	this.instance_1 = new lib.mc_redproduct_line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53.4,-77.1,0.6845,0.6845,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_redline_group, new cjs.Rectangle(-112.8,-155.9,225.6,311.9), null);


(lib.mc_burgline_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mc_products_burg_line();
	this.instance.parent = this;
	this.instance.setTransform(34.35,-50);

	this.instance_1 = new lib.mc_products_burg_line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.4,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_burgline_group, new cjs.Rectangle(-78.3,-105.7,156.6,211.5), null);


// stage content:
(lib._103205_Husky_CT_Animated_300x250_p42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_199 = function() {
		var _this = this;
		/*
		Stop the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(199).call(this.frame_199).wait(1));

	// Husky_Logo
	this.instance = new lib.mc_Husky_logo();
	this.instance.parent = this;
	this.instance.setTransform(68.85,34.65);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({alpha:1},10).wait(125));

	// Headline
	this.instance_1 = new lib.mc_headline();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123.25,101.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).to({x:150.75,alpha:1},15,cjs.Ease.get(1)).wait(104));

	// Copy
	this.instance_2 = new lib.mc_CTA_text();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-119.75,150.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(82).to({_off:false},0).to({x:132.25,alpha:1},15,cjs.Ease.get(1)).wait(103));

	// CTA
	this.instance_3 = new lib.mc_CTA();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38.05,224.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(104).to({_off:false},0).to({x:49.75,alpha:1},5).wait(91));

	// triangle_logo
	this.instance_4 = new lib.mc_triangle_logo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50.25,188.75);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({x:63.95,y:188.25,alpha:1},10,cjs.Ease.get(1)).wait(101));

	// Triangle_Cards_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("AmUCeIAAk6IMpAAIAAE6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:155.075,y:186.2}).wait(111));

	// Triangle_Cards
	this.instance_5 = new lib.mc_tri_cards();
	this.instance_5.parent = this;
	this.instance_5.setTransform(73.4,186.15,0.1973,0.1973,0,0,0,0.5,0.8);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({x:154.65},10,cjs.Ease.get(1)).wait(91));

	// Products_teal_2
	this.instance_6 = new lib.mc_tealline_group();
	this.instance_6.parent = this;
	this.instance_6.setTransform(247.9,302.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(123).to({_off:false},0).to({x:274.2,y:261.45},7,cjs.Ease.get(1)).wait(57).to({x:305.45,y:215.45},7,cjs.Ease.get(1)).wait(6));

	// Products_burgundy_2
	this.instance_7 = new lib.mc_burgline_group();
	this.instance_7.parent = this;
	this.instance_7.setTransform(378.3,61.75);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({x:307.65,y:165.4},12,cjs.Ease.get(1)).wait(51).to({x:239.05,y:265.15},12,cjs.Ease.get(1)).wait(11));

	// Products_Red_2
	this.instance_8 = new lib.mc_redline_group();
	this.instance_8.parent = this;
	this.instance_8.setTransform(104.4,412.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({_off:false},0).to({x:205.75,y:263.9},12,cjs.Ease.get(1)).wait(51).to({x:312.75,y:109.2},12,cjs.Ease.get(1)).wait(20));

	// Products_Teal
	this.instance_9 = new lib.mc_teal_snowshoe();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-18.05,374.95);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({x:153.95,y:124.95},8,cjs.Ease.get(1)).wait(5).to({x:319.95,y:-117.05},8,cjs.Ease.get(1)).to({_off:true},1).wait(138));

	// Products_Burgundy
	this.instance_10 = new lib.mc_burgundy_glove();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-8,352.95);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({x:150,y:127},8,cjs.Ease.get(1)).wait(5).to({x:313,y:-110},8,cjs.Ease.get(1)).to({_off:true},1).wait(158));

	// Products_Red
	this.instance_11 = new lib.mc_red_toolbox();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-20,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:150,y:117},8,cjs.Ease.get(1)).wait(5).to({x:317,y:-124},8,cjs.Ease.get(1)).to({_off:true},1).wait(178));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D1D1D1"],[0.29,1],0.1,-150,0.1,150).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-149,581,717.2);
// library properties:
lib.properties = {
	id: 'A3CBF7761B0B464AADDCB94CEF56FCE4',
	width: 300,
	height: 250,
	fps: 23,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BurgundyProducts.png", id:"BurgundyProducts"},
		{src:"images/HockeyGlove.png", id:"HockeyGlove"},
		{src:"images/Red_Toolbox.png", id:"Red_Toolbox"},
		{src:"images/RedProducts.png", id:"RedProducts"},
		{src:"images/Snowshoe.png", id:"Snowshoe"},
		{src:"images/TealProducts.png", id:"TealProducts"},
		{src:"images/Triangle_cards.png", id:"Triangle_cards"}
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
an.compositions['A3CBF7761B0B464AADDCB94CEF56FCE4'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;