(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x600_longos_surf_alt_atlas_", frames: [[0,0,552,309],[0,311,209,204],[211,311,188,186]]}
];


// symbols:



(lib.ribeye = function() {
	this.spriteSheet = ss["300x600_longos_surf_alt_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shallot = function() {
	this.spriteSheet = ss["300x600_longos_surf_alt_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thyme = function() {
	this.spriteSheet = ss["300x600_longos_surf_alt_atlas_"];
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
	this.shape.setTransform(82.4,-17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbApIAAhRIA1AAIAAAPIgkAAIAAATIAgAAIAAANIggAAIAAATIAmAAIAAAPg");
	this.shape_1.setTransform(74.9,-17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHApIAAgeIgcgzIATAAIAMAWIAFAQIAGgQIAMgWIARAAIgbAyIAAAfg");
	this.shape_2.setTransform(67.5,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaApIAAhRIARAAIAABCIAkAAIAAAPg");
	this.shape_3.setTransform(60.5,-17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAzAAIAAAPIgiAAIAAAVIAfAAIAAAOIgfAAIAAAfg");
	this.shape_4.setTransform(53.8,-17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXApIgSgmIgEgLIgEALIgTAmIgBAAIgfhRIASAAIAMAhIAEAOIABgFIAEgJIAPgiIACAAIAQAiIAEAOIAFgOIAMghIAQAAIgeBRg");
	this.shape_5.setTransform(42,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbApIAAhRIA1AAIAAAPIgkAAIAAATIAgAAIAAANIggAAIAAATIAmAAIAAAPg");
	this.shape_6.setTransform(32.7,-17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_7.setTransform(27.4,-17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAApIgkhRIASAAIAOAfIAFASIACgHIAEgLIAOgfIAQAAIgjBRg");
	this.shape_8.setTransform(21.7,-17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("Ao6CiIAAlDIR1AAIAAFDg");
	this.shape_9.setTransform(52.4,-18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-4.6,-34.5,114.2,32.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ribeye();
	this.instance.parent = this;
	this.instance.setTransform(10,-52,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(10,-52,314.7,176.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thyme();
	this.instance.parent = this;
	this.instance.setTransform(-108,9,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-108,9,194.9,192.8), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AghAjQgOgPAAgTQAAgUAOgOQAOgNATAAQATAAAOANQAPAOAAAUQAAATgPAPQgOAMgTAAQgTAAgOgMg");
	this.shape.setTransform(126.6,72.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhuCjIAAlFIDdAAIAABJIiFAAIAABCIB1AAIAABJIh1AAIAABxg");
	this.shape_1.setTransform(107.5,60.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAoCjIg4hmIgeAAIAABmIhXAAIAAlFICDAAQA8AAAjAhQAiAfAAA0QAABCg8AbIBEB0gAgugFIAoAAQAtAAAAgpQAAgqgtAAIgoAAg");
	this.shape_2.setTransform(78.9,60.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhlCFQgogiABhAIAAjHIBXAAIAADGQAAA6A1AAQA3AAAAg6IAAjGIBWAAIAADHQABBAgoAiQgmAhhAgBQg/ABgmghg");
	this.shape_3.setTransform(45.9,60.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AiBBrIBAgvQAdAjAmAAQApAAAAgaQAAgRgggLIglgNQhRgbAAhGQgBguAjgbQAegYAuAAQBKAAAmArIgyA0QgYgYghAAQgfAAAAAXQAAAQAXAIIAqAOQAwAQAUAYQAUAWgBAkQABAwgeAaQggAdg+AAQhZAAgug8g");
	this.shape_4.setTransform(15.2,60.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AAoCjIg5hmIgdAAIAABmIhXAAIAAlFICEAAQA7AAAjAhQAhAfAAA0QAABCg7AbIBEB0gAgugFIAoAAQAsAAAAgpQAAgqgsAAIgoAAg");
	this.shape_5.setTransform(220,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("Ah6B4Qg0gwAAhIQAAhHA0gxQAzguBHAAQBIAAAzAuQA0AxAABHQAABIg0AwQgzAvhIAAQhHAAgzgvgAg/hAQgWAZAAAnQAAAnAWAaQAYAaAnABQAogBAYgaQAWgaAAgnQAAgngWgZQgYgbgoAAQgnAAgYAbg");
	this.shape_6.setTransform(185,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AgrCjIAAlFIBXAAIAAFFg");
	this.shape_7.setTransform(158.8,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("AAoCjIg5hmIgdAAIAABmIhYAAIAAlFICEAAQA8AAAjAhQAiAfgBA0QABBCg8AbIBDB0gAgugFIAoAAQAsAAABgpQgBgqgsAAIgoAAg");
	this.shape_8.setTransform(136.7,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("Ah1CjIAAlFIDkAAIAABJIiMAAIAAA2IB0AAIAABFIh0AAIAAA4ICTAAIAABJg");
	this.shape_9.setTransform(107.3,13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AiBCjIAAlFICCAAQA9AAAjAhQAiAgAAA0QAAAzgiAfQgjAhg9AAIgrAAIAABdgAgqgCIAoAAQAtAAAAgrQAAgrgtAAIgoAAg");
	this.shape_10.setTransform(78.5,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AhlCFQgogjABg/IAAjIIBXAAIAADHQAAA6A1AAQA3AAAAg6IAAjHIBWAAIAADIQABA/goAjQgmAhhAgBQg/ABgmghg");
	this.shape_11.setTransform(45.9,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E52527").s().p("AiBBrIBAgvQAdAjAmAAQApAAAAgaQAAgRgggLIglgNQhRgbAAhGQgBguAjgbQAegYAuAAQBKAAAmArIgyA0QgYgYghAAQgfAAAAAXQAAAQAXAIIAqAOQAwAQAUAYQAUAWgBAkQABAwgeAaQggAdg+AAQhZAAgug8g");
	this.shape_12.setTransform(15.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(0,-10,257.1,99), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E52527").s().p("AghAiQgOgNAAgVQAAgTAOgOQAOgNATAAQATAAAOANQAPAOAAATQAAAVgPANQgOANgTAAQgTAAgOgNg");
	this.shape.setTransform(127.5,166.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52527").s().p("AhuCjIAAlFIDdAAIAABJIiFAAIAABCIB1AAIAABJIh1AAIAABxg");
	this.shape_1.setTransform(108.5,154.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E52527").s().p("AAoCjIg5hmIgdAAIAABmIhYAAIAAlFICFAAQA7AAAjAhQAhAfAAA0QABBCg8AbIBDB0gAgugFIAoAAQAsAAAAgpQAAgqgsAAIgoAAg");
	this.shape_2.setTransform(79.8,154.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E52527").s().p("AhkCFQgpgjAAhAIAAjHIBYAAIAADGQAAA7A1AAQA3AAgBg7IAAjGIBYAAIAADHQgBBAgoAjQglAghAABQg+gBgmggg");
	this.shape_3.setTransform(46.9,154.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E52527").s().p("AgqCjIAAj8IhXAAIAAhJIEDAAIAABJIhXAAIAAD8g");
	this.shape_4.setTransform(16.1,154.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E52527").s().p("AiBCjIAAlFICDAAQA8AAAjAhQAhAgABA0QgBAzghAfQgjAhg8AAIgsAAIAABdgAgqgCIAoAAQAsAAAAgrQAAgrgsAAIgoAAg");
	this.shape_5.setTransform(171.8,107.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E52527").s().p("Ah6B4Qg0gwAAhIQAAhIA0gvQAzgvBHAAQBIAAAzAvQA0AvAABIQAABIg0AwQgzAvhIAAQhHAAgzgvgAg/hAQgWAZAAAnQAAAnAWAaQAYAbAngBQAoABAYgbQAWgaAAgnQAAgngWgZQgYgbgoABQgngBgYAbg");
	this.shape_6.setTransform(137.2,107.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E52527").s().p("AgqCjIAAj8IhXAAIAAhJIEDAAIAABJIhXAAIAAD8g");
	this.shape_7.setTransform(104.3,107.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E52527").s().p("Ag6AjIAAhFIB0AAIAABFg");
	this.shape_8.setTransform(82.7,109.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E52527").s().p("AiCCjIAAlFICEAAQA8AAAjAhQAhAgAAA0QAAAzghAfQgjAhg8AAIgsAAIAABdgAgqgCIAoAAQAsAAAAgrQAAgrgsAAIgoAAg");
	this.shape_9.setTransform(60.9,107.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52527").s().p("AgrCjIAAlFIBXAAIAAFFg");
	this.shape_10.setTransform(37.6,107.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E52527").s().p("AgqCjIAAj8IhXAAIAAhJIEDAAIAABJIhXAAIAAD8g");
	this.shape_11.setTransform(16.1,107.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(0,-10,257.1,193), null);


(lib.shal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shallot();
	this.instance.parent = this;
	this.instance.setTransform(-122,-64,0.946,0.946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shal, new cjs.Rectangle(-122,-64,197.7,192.9), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE2722").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIANgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgNAAgJgJgAgQgQQgHAHAAAJQAAALAHAHQAHAHAKAAQAJAAAHgHQAHgIAAgKQAAgJgHgHQgHgIgJAAQgKAAgHAIgAAIARIgDgIQgBgFgEAAIgEAAIAAAMIgHAAIAAgeIALgBQAHAAAEACQADACAAAFQAAAGgHABIAAAAQAEABACAHIACAIgAgEAAIAEAAQAGAAAAgFQABgFgHABIgEAAg");
	this.shape.setTransform(242.4,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60BA52").s().p("AAXBYQgugegWg9IgRg1QgKgggMgTQAfAAAfATQAuAeAWA/QAhBeAGAJQggAAgegUg");
	this.shape_1.setTransform(204.1,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9D110").s().p("AiFCMQATgaASgrIAfhHQAnhWBFgjQAvgWAsAEQgTAagSArIgfBIQgnBWhGAiQgmATglAAIgPgBg");
	this.shape_2.setTransform(228.2,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE2722").s().p("AhoF8QgygbACgyQABgyAygZQAtgYBLACIAYAAQAFAAADAEQACAFgCAGQgFALgLAAIgQAAQgcgBgUAVQgUAVgBAgQAAAeAWAWQAVAVAcAAQBAAABOhZQAug0AqhKQgfAHghgCQgegCgYgQQgXgPgOgZQgeAegjARQglARgdgFQgsAAgZgZQgagaAOgnQAEgKAig4IAqhDQAMgUgCgHQgDgIgWAPQggATgkAmQglAnghAyIg1BaIh1AAIBPiOQgYgCgXgTQAAAIgFARQgWA/g9ApQg+AqhKgBQgnAAgdgRQgaAfgrAVQgoAUgygIQhngRg0g9QgOALgXAMQguAYgtABQg7ACglgaQgkgbABgrQAAgxAngkQAqgmBDAAQAiAAAmAPQApAQAZAbQAZggA3hsQBFiHAkg9QAZgsAqgZQAqgZAsAAQAuAAAXAiQAWAhgJAzQgBAJgNAEQgHACgGgBQgGgCgCgEIAAgEQAGgegHgUQgHgUgRAAQgbAAg8BqQgiA7g/B7QgZAtghAjQgYAagnAhQAqArA1AaQBEAlAugwQgWgUgHgeQgGgfAMgiQAXhFA9goQA5gkBIAAQAwACAfASQAeASANAgQARAiAbAJQAMADAGgCQAGgBAGgIIA2haIB4AAIgbAvQAegZAfgOQAjgRAcAAQAoAAASAbQATAdgVAhIhTCDQgKATACAMQACAMALAAQAdAAA+hHQgGgmATgmQAeg8A3ggQA2ghBAACQBBACAeAoIAPgZIB2gBIiHDuQARgGAWgQQAWgPAogjQACgSAGgSQAXhFA+gnQA5glBIABQAqABAeAPQAdAPAOAaQAmArAxAEQBJAJBQhoIAOgQQAIgHAKAAQAKAAACAIQACAJgIAQQgOAgAGA6QADBXhBA4QA6gQBIgpIALgHQAJgEAEAKQABAEgBAFQgCAFgDACQgQALgLAFQhSAogSAHQgmAOg0AFQhCAIgkgfQgbgXAAghQAAgkAVgRQAQgOAYAAQAZAAANASQAKAPgBAPQgCAQgMAMQgOAOgYACQABAIAKAHQAJAHANADQAYADANgUQAjgugIhPQghAPgxgEQgMgBgWgGQgVgGgQgHQgKBShHA1QhBAxhQgCQgygCgegXQgZgVgLgbIAAABQgkAbgbAPQggASghAHQgmA8hAA8Qh/B4h/AAQhLAAgtgYgAxjAqQgUAUAAAbQAAAZAWAUQAYAVAkAAQAfAAAegYQALgIAXgZQgcgngPgOQgagXgegCQgkAAgWAWgAKihAQglAggcAwQgbAwgCAjQgDAkAZACQAZACAmggQAlghAcgwQAbgvADgkQACgjgZgCIgDAAQgZAAgjAegAEMhAQglAggcAwQgcAwgCAjQgCAkAZACQAZACAlggQAmghAbgwQAcgvACgkQACgjgZgCIgDAAQgYAAgjAegAnwhAQglAhgcAvQgcAwgCAjQgCAkAZACQAZACAmggQAlghAcgwQAcgvABgkQACgjgZgCIgDAAQgYAAgjAeg");
	this.shape_3.setTransform(119.3,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,245.6,84.5), null);


// stage content:
(lib._300x600_longos_surf_alt = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// longos_svg
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(102.1,54.8,0.576,0.576,0,0,0,123,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87));

	// shallot
	this.instance_1 = new lib.shal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(201.8,656.4,1,1,0,0,0,46.8,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:124.4,y:506.6},41,cjs.Ease.quartOut).wait(41));

	// thyme
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(381.7,417.5,1,1,-75,0,0,45.5,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:45.4,regY:60.5,rotation:0,x:290.4,y:437.5},41,cjs.Ease.quartOut).wait(46));

	// beef
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(440.3,248.1,1,1,-55,0,0,126,92.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:92.6,rotation:0,x:263.1,y:331.3},41,cjs.Ease.quartOut).wait(46));

	// Layer_10
	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-27.4,363.3,1,1,0,0,0,51.1,16.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({x:92.6,alpha:1},33,cjs.Ease.quartInOut).wait(1));

	// Layer_4 copy
	this.instance_5 = new lib.Symbol1copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-117.3,213.3,1,1,0,0,0,128.5,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:157.7},42,cjs.Ease.quartInOut).wait(45));

	// Layer_4
	this.instance_6 = new lib.Symbol1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-117.3,213.3,1,1,0,0,0,128.5,115);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({x:157.7},42,cjs.Ease.quartInOut).wait(20));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F0E9").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.8,300,825.9,602.3);
// library properties:
lib.properties = {
	id: 'A8C478718CAB45E28846BC16F88772FB',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_longos_surf_alt_atlas_.png", id:"300x600_longos_surf_alt_atlas_"}
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