(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x250_longos_surf_alt_atlas_", frames: [[0,0,552,309],[0,311,209,204],[211,311,188,186]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["970x250_longos_surf_alt_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["970x250_longos_surf_alt_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["970x250_longos_surf_alt_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AAMApIgPgdIgLAAIAAAdIgRAAIAAhRIAeAAQANAAAIAGQAJAHAAAOQAAARgQAGIATAfgAgOgBIANAAQANAAAAgMQAAgMgNAAIgNAAg");
	this.shape.setTransform(95,-130.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbApIAAhRIA1AAIAAAPIgkAAIAAATIAgAAIAAANIggAAIAAATIAmAAIAAAPg");
	this.shape_1.setTransform(87.5,-130.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHApIAAgeIgcgzIATAAIAMAWIAFAQIAGgQIAMgWIARAAIgbAyIAAAfg");
	this.shape_2.setTransform(80.1,-130.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaApIAAhRIARAAIAABCIAkAAIAAAPg");
	this.shape_3.setTransform(73.2,-130.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAzAAIAAAPIgiAAIAAAVIAfAAIAAAOIgfAAIAAAfg");
	this.shape_4.setTransform(66.4,-130.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAqIgSgoIgGgLIgDALIgTAoIgCAAIgehRIASAAIAMAgIAEAOIABgGIAEgIIAPghIABAAIAQAhIAGAOIAEgOIALggIARAAIgeBRg");
	this.shape_5.setTransform(54.6,-130.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbApIAAhRIA1AAIAAAPIgkAAIAAATIAgAAIAAANIggAAIAAATIAmAAIAAAPg");
	this.shape_6.setTransform(45.4,-130.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_7.setTransform(40.1,-130.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAApIgkhRIASAAIAOAgIAFARIACgHIAEgKIAOggIAQAAIgjBRg");
	this.shape_8.setTransform(34.4,-130.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("Ao6CiIAAlDIR1AAIAAFDg");
	this.shape_9.setTransform(67,-130.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(10,-146.9,114.2,32.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(549,-482,0.769,0.769);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(549,-482,424.6,237.7), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(570,-300,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(570,-300,161.5,159.9), null);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgoAqQgSgRAAgZQAAgYASgQQARgRAXAAQAYAAARARQASAQAAAYQAAAZgSARQgRAQgYAAQgXAAgRgQg");
	this.shape.setTransform(465.5,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AiHDJIAAmRIEPAAIAABbIikAAIAABRICRAAIAABaIiRAAIAACLg");
	this.shape_1.setTransform(442.1,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAxDJIhFh+IglAAIAAB+IhrAAIAAmRICiAAQBJAAArApQApAmAABAQAABShJAhIBTCPgAg5gGIAxAAQA3AAAAgzQAAg0g3AAIgxAAg");
	this.shape_2.setTransform(406.9,12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("Ah8CjQgxgqAAhPIAAj1IBrAAIAAD0QAABIBCAAQBDAAAAhIIAAj0IBrAAIAAD1QAABPgxAqQgvAphOAAQhNAAgvgpg");
	this.shape_3.setTransform(366.4,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AieCEIBOg7QAiAsAwAAQAzgBAAgfQAAgVgogNIgugQQhkgiAAhWQAAg4AqgiQAmgeA4AAQBcAAAtA1Ig9BAQgcgcgqAAQgmgBAAAcQAAAVAdAJIA0ARQA6AUAaAdQAXAcAAAsQAAA6gkAhQgoAkhMAAQhuAAg3hKg");
	this.shape_4.setTransform(328.6,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AAxDJIhFh+IglAAIAAB+IhrAAIAAmRICiAAQBJAAArApQApAmAABAQAABShJAhIBUCPgAg5gGIAxAAQA3AAAAgzQAAg0g3AAIgxAAg");
	this.shape_5.setTransform(280.1,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AiWCUQhAg8AAhYQAAhYBAg7QA+g5BYAAQBZAAA+A5QBAA7AABYQAABYhAA8Qg/A6hYgBQhYABg+g6gAhNhPQgcAfAAAwQAAAxAcAfQAdAgAwABQAxgBAdggQAbgfAAgxQAAgwgbgfQgdgggxAAQgwAAgdAgg");
	this.shape_6.setTransform(237,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("Ag1DJIAAmRIBrAAIAAGRg");
	this.shape_7.setTransform(204.8,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AAxDJIhFh+IglAAIAAB+IhsAAIAAmRICjAAQBJAAArApQAqAmAABAQgBBShJAhIBUCPgAg5gGIAxAAQA4AAAAgzQAAg0g4AAIgxAAg");
	this.shape_8.setTransform(177.7,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AiQDJIAAmRIEZAAIAABbIitAAIAABCICPAAIAABUIiPAAIAABGIC1AAIAABag");
	this.shape_9.setTransform(141.4,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AifDJIAAmRIChAAQBKAAArAqQAqAnAAA/QAAA/gqAmQgrAphKAAIg2AAIAABzgAg0gDIAxAAQA3AAABg1QgBg1g3AAIgxAAg");
	this.shape_10.setTransform(106,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("Ah8CjQgxgqAAhPIAAj1IBrAAIAAD0QAABIBCAAQBDAAAAhIIAAj0IBrAAIAAD1QAABPgxAqQgvAphOAAQhNAAgvgpg");
	this.shape_11.setTransform(66,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AieCEIBOg7QAiAsAwAAQAzgBAAgfQAAgVgogNIgugQQhkgiAAhWQAAg4AqgiQAmgeA4AAQBcAAAtA1Ig9BAQgcgcgqAAQgmgBAAAcQAAAVAdAJIA0ARQA6AUAaAdQAXAcAAAsQAAA6gkAhQgoAkhMAAQhuAAg3hKg");
	this.shape_12.setTransform(28.2,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(10,-15,658,63), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgoAqQgSgRAAgZQAAgYASgRQARgQAXAAQAYAAARAQQASARAAAYQAAAZgSARQgRAQgYAAQgXAAgRgQg");
	this.shape.setTransform(399.8,78.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AiHDJIAAmRIEPAAIAABbIikAAIAABRICRAAIAABaIiRAAIAACLg");
	this.shape_1.setTransform(376.3,63.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAxDJIhGh+IgkAAIAAB+IhsAAIAAmRICiAAQBKAAArApQAqAmAABAQAABShKAhIBUCPgAg5gGIAyAAQA3AAAAgzQAAg0g3AAIgyAAg");
	this.shape_2.setTransform(341.1,63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("Ah8CjQgxgqAAhPIAAj1IBrAAIAAD0QAABIBCAAQBDAAAAhIIAAj0IBrAAIAAD1QAABPgxAqQgvAphOAAQhNAAgvgpg");
	this.shape_3.setTransform(300.6,64.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("Ag1DJIAAk2IhqAAIAAhbIE/AAIAABbIhrAAIAAE2g");
	this.shape_4.setTransform(262.9,63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AifDJIAAmRIChAAQBKAAArAqQApAnAAA/QAAA/gpAmQgrAphKAAIg2AAIAABzgAg0gDIAxAAQA3AAAAg1QAAg1g3AAIgxAAg");
	this.shape_5.setTransform(214.8,63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AiWCUQhAg7AAhZQAAhYBAg7QA+g5BYgBQBZABA+A5QBAA7AABYQAABZhAA7Qg/A5hYABQhYgBg+g5gAhNhPQgcAfAAAwQAAAxAcAfQAdAhAwAAQAxAAAdghQAbgfAAgxQAAgwgbgfQgdgggxAAQgwAAgdAgg");
	this.shape_6.setTransform(172.2,64);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("Ag1DJIAAk2IhqAAIAAhbIE/AAIAABbIhrAAIAAE2g");
	this.shape_7.setTransform(135.8,63.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AhHArIAAhVICPAAIAABVg");
	this.shape_8.setTransform(111.2,67.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AifDJIAAmRIChAAQBKAAArAqQAqAnAAA/QAAA/gqAmQgrAphKAAIg2AAIAABzgAg0gDIAxAAQA3AAABg1QgBg1g3AAIgxAAg");
	this.shape_9.setTransform(84.4,63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("Ag1DJIAAmRIBrAAIAAGRg");
	this.shape_10.setTransform(55.7,63.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("Ag0DJIAAk2IhrAAIAAhbIE/AAIAABbIhqAAIAAE2g");
	this.shape_11.setTransform(29.4,63.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(10,-15,658,114), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(-85,-130,0.915,0.915);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(-85,-130,191.3,186.7), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2722").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIANgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgJgJgAgQgQQgHAHAAAJQAAALAHAHQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgIgJAAQgKAAgHAIgAAIARIgDgIQgBgFgEAAIgEAAIAAAMIgHAAIAAgeIALgBQAHAAAEACQADACAAAFQAAAGgHABIAAAAQAEABACAHIACAIgAgEAAIAEAAQAGAAAAgFQABgFgHABIgEAAg");
	this.shape.setTransform(263.7,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(225.3,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(249.5,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(140.6,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(21.3,-12.2,245.6,84.5), null);


// stage content:
(lib._970x250_longos_surf_alt = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(102.1,54.8,0.576,0.576,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(124));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.8,656.4,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({x:650.4,y:292},41,cjs.Ease.quartOut).wait(29));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1294.6,780.5,1,1,-75,0,0,45.5,60.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:435.5},41,cjs.Ease.quartOut).wait(34));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(655.5,431.2,1,1,-55,0,0,126,92.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({regY:92.6,rotation:0,x:151,y:487.6},41,cjs.Ease.quartOut).wait(34));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.6,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(83).to({_off:false},0).to({x:92.6,alpha:1},26,cjs.Ease.quartInOut).wait(15));

	// Layer_4 copy
	this.instance_5 = new lib.Symbol1copy3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-362.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:157.7},49,cjs.Ease.quartInOut).wait(74));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-362.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({x:157.7},49,cjs.Ease.quartInOut).wait(48));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,125,970,250);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/970x250_longos_surf_alt_atlas_.png", id:"970x250_longos_surf_alt_atlas_"}
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