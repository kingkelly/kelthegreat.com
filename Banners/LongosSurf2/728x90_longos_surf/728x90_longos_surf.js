(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_longos_surf_atlas_", frames: [[0,0,552,309],[0,311,209,204],[211,311,188,186]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["728x90_longos_surf_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["728x90_longos_surf_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["728x90_longos_surf_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAYApIgSgmIgGgLIgDALIgTAmIgCAAIgehRIASAAIAMAhIAEAOIABgFIAEgJIAPgiIABAAIAQAiIAGAOIAEgOIALghIARAAIgeBRg");
	this.shape.setTransform(519,-253.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_1.setTransform(508.4,-253.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgApIgogmIgKgKIABAOIAAAiIgQAAIAAhSIACAAIAoAnIAKALIgBgOIAAgjIAQAAIAABRg");
	this.shape_2.setTransform(499.5,-253.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIAcAAQANAAAHAHQAJAHAAANQAAANgJAHQgHAHgNAAIgLAAIAAAbgAgLAAIALAAQAMAAAAgNQAAgMgMAAIgLAAg");
	this.shape_3.setTransform(489.2,-253.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAHgHAAgMQAAgLgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_4.setTransform(480.6,-253.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARApIAAggIghAAIAAAgIgRAAIAAhRIARAAIAAAjIAhAAIAAgjIARAAIAABRg");
	this.shape_5.setTransform(471.5,-253.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAZIANgIQAHAKAJAAQAFAAADgCQADgDAAgDQAAgEgDgDIgJgEIgDgCQgKgFgFgEQgFgGAAgKQAAgJAGgGQAHgHAKAAQARAAAHAOIgNAIQgEgHgHAAQgCAAgDACQgCACAAADQAAAEADACQACACAFACIAEACQALAFAFAEQAGAHAAAJQAAAMgIAGQgHAGgNAAQgVAAgIgRg");
	this.shape_6.setTransform(463.9,-253.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AoJCiIAAlDIQUAAIAAFDg");
	this.shape_7.setTransform(492.1,-253.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(439.8,-269.8,104.5,32.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(695.9,-398.8,0.507,0.507,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(676.2,-398.8,297.7,190.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(432.9,-433.4,0.705,0.705,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(428.3,-433.4,137,135.6), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgcAdQgMgLAAgSQAAgQAMgMQAMgLAQAAQARAAAMALQAMAMAAAQQAAARgMAMQgMALgRAAQgQAAgMgLg");
	this.shape.setTransform(459.1,-46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AheCLIAAkWIC9AAIAAA/IhyAAIAAA5IBkAAIAAA+IhkAAIAABgg");
	this.shape_1.setTransform(442.8,-57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAiCLIgvhXIgaAAIAABXIhLAAIAAkWIBxAAQAzAAAdAcQAdAcAAArQAAA5gyAXIA5BjgAgngEIAjAAQAlAAAAgkQAAgjglAAIgjAAg");
	this.shape_2.setTransform(418.3,-57);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhWBxQgigdAAg3IAAiqIBLAAIAACqQAAAxAtABQAugBAAgxIAAiqIBLAAIAACqQAAA3giAdQghAdg2AAQg1AAghgdg");
	this.shape_3.setTransform(390.2,-56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AhuBbIA3goQAYAeAhAAQAjAAAAgWQAAgOgcgKIgfgKQhGgYAAg8QAAgnAdgXQAbgVAmAAQBAAAAgAlIgrAsQgTgTgdgBQgaABAAASQAAAPATAGIAkANQApANARAUQARAUAAAeQAAAogZAXQgcAZg1AAQhMAAgng0g");
	this.shape_4.setTransform(363.9,-57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AAiCLIgvhXIgaAAIAABXIhLAAIAAkWIBxAAQAzAAAdAcQAdAcAAArQAAA5gyAXIA5BjgAgngEIAjAAQAlAAAAgkQAAgjglAAIgjAAg");
	this.shape_5.setTransform(330.2,-57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AhoBnQgtgpAAg+QAAg9AtgpQArgoA9AAQA+AAArAoQAtApAAA9QAAA+gtApQgrAog+AAQg9AAgrgogAg1g3QgTAWAAAhQAAAiATAVQAUAXAhAAQAiAAAUgXQATgVAAgiQAAghgTgWQgUgWgiAAQghAAgUAWg");
	this.shape_6.setTransform(300.3,-57);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AgkCLIAAkWIBJAAIAAEWg");
	this.shape_7.setTransform(278,-57);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AAjCLIgxhXIgZAAIAABXIhLAAIAAkWIBxAAQAzAAAeAcQAcAcAAArQAAA5gzAXIA6BjgAgngEIAiAAQAmAAAAgkQAAgjgmAAIgiAAg");
	this.shape_8.setTransform(259.1,-57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhkCLIAAkWIDDAAIAAA/Ih4AAIAAAuIBkAAIAAA7IhkAAIAAAwIB+AAIAAA+g");
	this.shape_9.setTransform(233.9,-57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AhuCLIAAkWIBvAAQA1AAAdAdQAcAbAAAsQAAAsgcAaQgdAcg1AAIglAAIAABQgAgkgCIAjAAQAlAAAAglQAAgkglAAIgjAAg");
	this.shape_10.setTransform(209.3,-57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AhWBxQgigdAAg3IAAiqIBLAAIAACqQAAAxAtABQAugBAAgxIAAiqIBLAAIAACqQAAA3giAdQghAdg2AAQg1AAghgdg");
	this.shape_11.setTransform(181.5,-56.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AhuBbIA3goQAYAeAhAAQAjAAAAgWQAAgOgcgKIgfgKQhGgYAAg8QAAgnAdgXQAbgVAmAAQBAAAAgAlIgrAsQgTgTgdgBQgaABAAASQAAAPATAGIAkANQApANARAUQARAUAAAeQAAAogZAXQgcAZg1AAQhMAAgng0g");
	this.shape_12.setTransform(155.3,-57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(142.1,-77.1,658,83), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgcAdQgMgLAAgSQAAgQAMgMQAMgLAQAAQARAAAMALQAMAMAAAQQAAARgMAMQgMALgRAAQgQAAgMgLg");
	this.shape.setTransform(414.4,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AheCLIAAkWIC9AAIAAA/IhyAAIAAA5IBkAAIAAA+IhkAAIAABgg");
	this.shape_1.setTransform(398.1,-19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAiCLIgwhXIgZAAIAABXIhLAAIAAkWIBxAAQAzAAAdAcQAdAbAAAsQAAA6gyAWIA5BjgAgngEIAiAAQAmAAAAgkQAAgjgmAAIgiAAg");
	this.shape_2.setTransform(373.6,-19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhWByQgigeAAg3IAAiqIBLAAIAACqQAAAxAtABQAugBAAgxIAAiqIBLAAIAACqQAAA3giAeQghAcg2AAQg1AAghgcg");
	this.shape_3.setTransform(345.5,-18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AgkCLIAAjXIhKAAIAAg/IDdAAIAAA/IhKAAIAADXg");
	this.shape_4.setTransform(319.2,-19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AhuCLIAAkWIBvAAQA1AAAdAeQAdAbAAArQAAAsgdAaQgdAcg1AAIglAAIAABQgAgkgCIAjAAQAlAAAAglQAAgkglAAIgjAAg");
	this.shape_5.setTransform(285.1,-19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AhoBnQgtgpAAg+QAAg9AtgpQArgoA9AAQA+AAArAoQAtApAAA9QAAA+gtApQgrAog+AAQg9AAgrgogAg1g3QgTAWAAAhQAAAiATAVQAUAXAhAAQAiAAAUgXQATgVAAgiQAAghgTgWQgUgWgiAAQghAAgUAWg");
	this.shape_6.setTransform(255.5,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AgkCLIAAjXIhKAAIAAg/IDdAAIAAA/IhKAAIAADXg");
	this.shape_7.setTransform(229.5,-19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AgxAeIAAg7IBjAAIAAA7g");
	this.shape_8.setTransform(212.9,-16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhvCLIAAkWIBxAAQAzAAAeAeQAcAbABArQgBAsgcAaQgeAcgzAAIgmAAIAABQgAgkgCIAjAAQAmAAgBglQABgkgmAAIgjAAg");
	this.shape_9.setTransform(194.3,-19);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AgkCLIAAkWIBJAAIAAEWg");
	this.shape_10.setTransform(174.5,-19);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AgkCLIAAjXIhKAAIAAg/IDdAAIAAA/IhKAAIAADXg");
	this.shape_11.setTransform(156.1,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(142.1,-77.1,658,83), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(383,-569,0.681,0.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(383,-569,142.3,138.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2722").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIANgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgJgJgAgQgQQgHAHAAAJQAAALAHAHQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgIgJAAQgKAAgHAIgAAIARIgDgIQgBgFgEAAIgEAAIAAAMIgHAAIAAgeIALgBQAHAAAEACQADACAAAFQAAAGgHABIAAAAQAEABACAHIACAIgAgEAAIAEAAQAGAAAAgFQABgFgHABIgEAAg");
	this.shape.setTransform(204.1,59.1,0.816,0.817);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(172.8,32.5,0.816,0.817);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(192.5,24.9,0.816,0.817);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(103.6,49.4,0.816,0.817);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(6.2,13.4,200.5,69), null);


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
	this.instance.setTransform(521.1,-252.1,1,1,0,0,0,3.1,4.2);

	this.instance_1 = new lib.B();
	this.instance_1.parent = this;
	this.instance_1.setTransform(514.4,-252.1,1,1,0,0,0,3.3,4.2);

	this.instance_2 = new lib.RED();
	this.instance_2.parent = this;
	this.instance_2.setTransform(497.3,-252.1,1,1,0,0,0,9.6,4.2);

	this.instance_3 = new lib.E();
	this.instance_3.parent = this;
	this.instance_3.setTransform(484.5,-252.1,1,1,0,0,0,3.2,4.2);

	this.instance_4 = new lib.V();
	this.instance_4.parent = this;
	this.instance_4.setTransform(478.4,-252.1,1,1,0,0,0,3.1,4.2);

	this.instance_5 = new lib.DELI();
	this.instance_5.parent = this;
	this.instance_5.setTransform(464.4,-252.1,1,1,0,0,0,12.3,4.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18423B").s().p("AgQBVIAAhVIgihVIAiAAIAQArIARgrIAiAAIgiBVIAABVg");
	this.shape.setTransform(527.8,-231.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#18423B").s().p("AARBVIgahEIgHAAIAABEIgiAAIAAiqIAyAAQAMAAAIAFQAJADAIAHQAHAIADAJQAEAJAAALQAAAPgIANQgIAMgNAFIAdBJgAgQgQIAQAAQAHgBAFgEQAFgGAAgGQAAgHgFgFQgFgFgHAAIgQAAg");
	this.shape_1.setTransform(515.1,-231.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#18423B").s().p("AgyBVIAAiqIBlAAIAAAjIhDAAIAAAiIAyAAIAAAhIgyAAIAAAjIBDAAIAAAhg");
	this.shape_2.setTransform(501.7,-231.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgGgFgKQgDgJAAgMIAAhDQAAgMADgIQAEgKAHgHQAHgGAKgFQAIgEALAAQALAAAJAEQAKAFAGAGQAIAJADAIQAEAJAAALIgiAAQAAgHgFgFQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgEAAgIIAiAAQAAALgEAKQgDAJgIAHQgGAGgKAFQgJAEgLgBQgLABgIgEg");
	this.shape_3.setTransform(488.2,-231.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgGgFgKQgDgJAAgMIAAhDQAAgMADgIQAEgKAHgHQAHgGAKgFQAIgEALAAQALAAAJAEQAKAFAGAGQAIAJADAIQAEAJAAALIAABDQAAALgEAKQgDAJgIAHQgGAGgKAFQgJAEgLgBQgLABgIgEgAgLgtQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgEAAgIIAAhDQAAgHgFgFQgFgFgHAAQgHAAgEAFg");
	this.shape_4.setTransform(474.8,-231.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#18423B").s().p("AARBVIgahEIgHAAIAABEIgiAAIAAiqIAyAAQAMAAAIAFQAKAEAGAGQAIAJADAIQAEAJAAALQAAAPgIANQgIAMgNAFIAdBJgAgQgQIAQAAQAHgBAFgEQAFgFAAgHQAAgHgFgFQgFgFgHAAIgQAAg");
	this.shape_5.setTransform(461.3,-231.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#18423B").s().p("AgTBSQgJgEgIgHQgGgGgEgKQgEgJAAgMIAAhDQAAgNAEgHQADgJAHgIQAIgHAJgDQAIgFALAAQAMAAAIAFQAKAEAGAGQAIAHADAKQAEAJAAALIgiAAQAAgHgFgFQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAEQAFAFAGABQAGgBAGgFQAFgFAAgHIAAgRIgRAAIAAghIAzAAIAAAyQAAALgEAKQgEAKgHAGQgGAGgKAFQgIAEgMgBQgLABgIgEg");
	this.shape_6.setTransform(447.8,-231.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#18423B").s().p("AgQBWIAAhWIgihVIAiAAIAQArIARgrIAiAAIgiBVIAABWg");
	this.shape_7.setTransform(528,-209.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#18423B").s().p("AARBWIgHgjIgTAAIgHAjIgiAAIAiirIAhAAIAiCrgAgDARIAGAAIgDgRg");
	this.shape_8.setTransform(516.6,-209.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#18423B").s().p("AARBWIgRhWIgQBWIgiAAIgiirIAiAAIARBVIARhVIAhAAIARBVIAShVIAiAAIgiCrg");
	this.shape_9.setTransform(501.6,-209.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#18423B").s().p("AgzBWIAAirIBnAAIAAAjIhEAAIAAAiIAyAAIAAAhIgyAAIAAAiIBEAAIAAAjg");
	this.shape_10.setTransform(485.1,-209.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#18423B").s().p("AgQBWIAAiIIgiAAIAAgjIBlAAIAAAjIgiAAIAACIg");
	this.shape_11.setTransform(472,-209.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#18423B").s().p("AARBWIgHgjIgTAAIgHAjIgiAAIAiirIAhAAIAiCrgAgCARIAGAAIgEgRg");
	this.shape_12.setTransform(460.3,-209.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#18423B").s().p("AgTBSQgKgEgHgHQgGgHgFgJQgDgJAAgMIAAhDQAAgMADgIQAFgKAGgHQAIgHAJgEQAJgEAKAAQAKAAAKAEQAJAEAHAHQAIAIADAJQAEAJAAALIgiAAQAAgIgFgEQgFgFgHAAQgHAAgEAFQgFAEAAAIIAABDQAAAIAFAFQAEAEAHAAQAHAAAFgEQAFgFAAgIIAAgRIgRAAIAAghIAzAAIAAAyQAAAKgEALQgDAIgIAIQgGAHgKAEQgIAEgMAAQgLAAgIgEg");
	this.shape_13.setTransform(447.6,-209.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gg, new cjs.Rectangle(442.5,-259.5,90.6,58.5), null);


// stage content:
(lib._728x90_longos_surf = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(76.7,41.2,0.432,0.432,0,0,0,123.1,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(123));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.5,349.7,0.751,0.751,0,0,0,46.9,42.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:231.5,y:462.4},41,cjs.Ease.quartOut).wait(77));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(821.6,315.7,0.75,0.75,-75,0,0,45.5,60.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regY:60.5,scaleX:0.75,scaleY:0.75,rotation:0,x:298,y:326.8},33,cjs.Ease.quartOut).wait(82));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({alpha:1},26,cjs.Ease.quartInOut).wait(32));

	// GG_stack_svg
	this.instance_5 = new lib.gg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(69.2,224.3,0.751,0.751,0,0,0,45.2,29.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(51).to({_off:false},0).to({regX:45.3,x:89.3,alpha:1},33,cjs.Ease.quartInOut).wait(39));

	// Layer_4 copy
	this.instance_6 = new lib.Symbol1copy2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(117.5,236.9,0.751,0.751,0,0,0,128.5,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:118.4,y:160},41,cjs.Ease.quartInOut).wait(82));

	// Layer_4
	this.instance_7 = new lib.Symbol1copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(117.5,236.9,0.751,0.751,0,0,0,128.5,115);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({x:118.4,y:160},41,cjs.Ease.quartInOut).wait(55));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-324.2,728,524.2);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_longos_surf_atlas_.png", id:"728x90_longos_surf_atlas_"}
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