(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_longos_surf_alt_atlas_", frames: [[0,0,525,225],[527,0,209,204],[738,0,188,186]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["300x250_longos_surf_alt_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["300x250_longos_surf_alt_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["300x250_longos_surf_alt_atlas_"];
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
	this.shape.setTransform(57.9,-132.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbApIAAhRIA1AAIAAAPIgkAAIAAATIAgAAIAAANIggAAIAAATIAmAAIAAAPg");
	this.shape_1.setTransform(50.4,-132.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHApIAAgeIgcgzIATAAIAMAWIAFAQIAGgQIAMgWIARAAIgbAyIAAAfg");
	this.shape_2.setTransform(43,-132.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaApIAAhRIARAAIAABCIAkAAIAAAPg");
	this.shape_3.setTransform(36.1,-132.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAzAAIAAAPIgiAAIAAAVIAfAAIAAAOIgfAAIAAAfg");
	this.shape_4.setTransform(29.3,-132.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYApIgSgnIgGgKIgDAKIgTAnIgCAAIgehRIASAAIAMAhIAEAOIACgGIADgIIAPgiIABAAIARAiIAEAOIAFgOIALghIARAAIgdBRg");
	this.shape_5.setTransform(17.5,-132.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbApIAAhRIA1AAIAAAPIgkAAIAAATIAgAAIAAANIggAAIAAATIAmAAIAAAPg");
	this.shape_6.setTransform(8.3,-132.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_7.setTransform(3,-132.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAApIgkhRIASAAIAOAfIAFASIACgHIAEgLIAOgfIAQAAIgjBRg");
	this.shape_8.setTransform(-2.7,-132.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AmyB0IAAjnINlAAIAADng");
	this.shape_9.setTransform(27.4,-133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-16.1,-145.5,87.1,23.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(114.3,-389.4,0.368,0.368,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(114.3,-408.7,200.6,101.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(69.3,-236.8,0.492,0.492,0,104.2,-75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-19.3,-348.9,111.4,112.1), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgUAWQgKgJAAgNQAAgMAKgJQAJgIALAAQANAAAJAIQAJAJAAAMQAAANgJAJQgJAIgNAAQgLAAgJgIg");
	this.shape.setTransform(71.4,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhGBqIAAjTICOAAIAAAwIhWAAIAAArIBLAAIAAAvIhLAAIAABJg");
	this.shape_1.setTransform(59.1,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAaBqIgkhCIgTAAIAABCIg5AAIAAjTIBVAAQAmABAXAVQAWAUAAAiQAAAqgnASIAsBLgAgdgCIAaAAQAcAAAAgbQAAgbgcAAIgaAAg");
	this.shape_2.setTransform(40.5,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhBBWQgagXAAgpIAAiAIA5AAIAACAQAAAmAigBQAjABAAgmIAAiAIA5AAIAACAQAAApgaAXQgZAVgpAAQgoAAgZgVg");
	this.shape_3.setTransform(19.3,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AhTBFIApgeQATAXAYAAQAbAAAAgRQAAgLgVgHIgYgIQg0gSAAgtQAAgeAWgRQAUgQAdAAQAwAAAYAcIggAiQgPgQgWAAQgTAAAAAPQAAALAOAFIAbAJQAfAKANAPQANAPAAAXQAAAegTASQgVASgoAAQg5AAgegng");
	this.shape_4.setTransform(-0.6,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AAaBqIgkhDIgTAAIAABDIg5AAIAAjTIBVAAQAmAAAXAWQAWAUAAAhQAAArgnARIAsBMgAgdgDIAaAAQAcAAAAgbQAAgbgcAAIgaAAg");
	this.shape_5.setTransform(131.6,-19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AhOBOQgigfAAgvQAAgtAiggQAggeAuAAQAvAAAgAeQAiAgAAAtQAAAvgiAfQghAeguAAQguAAgggegAgogpQgPAQAAAZQAAAaAPAQQAPARAZAAQAaAAAPgRQAOgQAAgaQAAgZgOgQQgPgRgaAAQgZAAgPARg");
	this.shape_6.setTransform(109,-19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AgbBqIAAjTIA3AAIAADTg");
	this.shape_7.setTransform(92.2,-19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AAaBqIgkhDIgTAAIAABDIg5AAIAAjTIBVAAQAmAAAXAWQAWAUAAAhQAAArgnARIAsBMgAgdgDIAaAAQAcAAAAgbQAAgbgcAAIgaAAg");
	this.shape_8.setTransform(77.9,-19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhLBqIAAjTICTAAIAAAwIhaAAIAAAjIBKAAIAAAsIhKAAIAAAkIBeAAIAAAwg");
	this.shape_9.setTransform(58.9,-19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AhTBqIAAjTIBUAAQAnAAAXAXQAVAUAAAiQAAAfgVAVQgXAVgnAAIgcAAIAAA9gAgbgBIAaAAQAcAAAAgbQAAgdgcAAIgaAAg");
	this.shape_10.setTransform(40.3,-19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AhBBWQgagXAAgpIAAiAIA5AAIAACAQAAAlAiAAQAjAAAAglIAAiAIA5AAIAACAQAAApgaAXQgZAVgpAAQgoAAgZgVg");
	this.shape_11.setTransform(19.3,-19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AhTBFIApgeQATAXAYAAQAbAAAAgRQAAgLgVgHIgYgIQg0gSAAgtQAAgeAWgRQAUgQAdAAQAwAAAYAcIggAiQgPgQgWAAQgTAAAAAPQAAALAOAFIAbAJQAfAKANAPQANAPAAAXQAAAegTASQgVASgoAAQg5AAgegng");
	this.shape_12.setTransform(-0.6,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-11.1,-35.6,257.1,65), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AgUAWQgKgJAAgNQAAgMAKgJQAJgIALAAQANAAAIAIQAKAJAAAMQAAANgKAJQgIAIgNAAQgLAAgJgIg");
	this.shape.setTransform(72,77.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhHBqIAAjTICOAAIAAAwIhVAAIAAArIBLAAIAAAuIhLAAIAABKg");
	this.shape_1.setTransform(59.7,70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAaBqIgkhDIgTAAIAABDIg5AAIAAjTIBVAAQAmAAAXAWQAWAUAAAhQAAArgnARIAsBMgAgdgDIAaAAQAcAAAAgbQAAgbgcAAIgaAAg");
	this.shape_2.setTransform(41.1,70.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhABWQgagXAAgpIAAiAIA4AAIAACAQAAAlAiAAQAjAAAAglIAAiAIA4AAIAACAQAAApgaAXQgYAVgpAAQgoAAgYgVg");
	this.shape_3.setTransform(19.9,70.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AgbBqIAAijIg4AAIAAgwICnAAIAAAwIg3AAIAACjg");
	this.shape_4.setTransform(0,70.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AhTBpIAAjRIBUAAQAnAAAXAVQAVAVAAAhQAAAhgVAUQgXAVgnAAIgcAAIAAA8gAgbgBIAaAAQAcAAAAgcQAAgcgcAAIgaAAg");
	this.shape_5.setTransform(100.5,40.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("AhOBOQgigfAAgvQAAgtAigfQAggfAuAAQAvAAAgAfQAiAfAAAtQAAAvgiAfQghAeguAAQguAAgggegAgogpQgPARAAAYQAAAaAPAQQAPARAZAAQAaAAAPgRQAOgQAAgaQAAgYgOgRQgPgQgaAAQgZAAgPAQg");
	this.shape_6.setTransform(78.1,40.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AgbBpIAAiiIg4AAIAAgvICnAAIAAAvIg3AAIAACig");
	this.shape_7.setTransform(56.9,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AglAWIAAgsIBLAAIAAAsg");
	this.shape_8.setTransform(42.9,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AhTBpIAAjRIBUAAQAnAAAXAVQAVAVAAAhQAAAhgVAUQgXAVgnAAIgcAAIAAA8gAgbgBIAaAAQAcAAAAgcQAAgcgcAAIgaAAg");
	this.shape_9.setTransform(28.9,40.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AgbBpIAAjRIA3AAIAADRg");
	this.shape_10.setTransform(13.9,40.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AgbBpIAAiiIg4AAIAAgvICnAAIAAAvIg3AAIAACig");
	this.shape_11.setTransform(0,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-11.1,-35.6,257.1,125), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(8,-467,0.489,0.471);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(8,-467,102.2,96), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2722").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIANgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgJgJgAgQgQQgHAHAAAJQAAALAHAHQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgIgJAAQgKAAgHAIgAAIARIgDgIQgBgFgEAAIgEAAIAAAMIgHAAIAAgeIALgBQAHAAAEACQADACAAAFQAAAGgHABIAAAAQAEABACAHIACAIgAgEAAIAEAAQAGAAAAgFQABgFgHABIgEAAg");
	this.shape.setTransform(248.6,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(210.3,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(234.4,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(125.5,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(6.2,0,245.6,84.5), null);


// stage content:
(lib._300x250_longos_surf_alt = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(69.1,33.8,0.403,0.403,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(379,746.3,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:201.8,y:616},41,cjs.Ease.quartOut).wait(26));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(580.8,330.7,1,1,-39,0,0,45.6,60.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:437.5},41,cjs.Ease.quartOut).wait(31));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(386.1,374.1,1,1,-25,0,0,126,92.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regY:92.6,rotation:0,x:151,y:487.6},41,cjs.Ease.quartOut).wait(31));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.6,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).to({x:92.6,alpha:1},33,cjs.Ease.quartInOut).wait(1));

	// Layer_4 copy
	this.instance_5 = new lib.Symbol1copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-24.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({x:157.7},41,cjs.Ease.quartInOut).wait(44));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-24.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({x:157.7},41,cjs.Ease.quartInOut).wait(20));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_longos_surf_alt_atlas_.png", id:"300x250_longos_surf_alt_atlas_"}
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