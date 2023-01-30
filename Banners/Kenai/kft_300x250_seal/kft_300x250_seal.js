(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kft_300x250_seal_atlas_P_", frames: [[0,234,214,121],[0,357,200,126],[0,0,300,232]]}
];


// symbols:



(lib._20 = function() {
	this.spriteSheet = ss["kft_300x250_seal_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.db_bg = function() {
	this.initialize(img.db_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.KFT_Logo_RGB = function() {
	this.spriteSheet = ss["kft_300x250_seal_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Seal = function() {
	this.spriteSheet = ss["kft_300x250_seal_atlas_P_"];
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


(lib.wavecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004CA9").s().p("ArsDLQAFgeARgtQAhhYA5hEQC1jdFeA7QGNBEDPABQDLABAvg/QgTAthFAtQiLBZj9gFQlwgGiNAdQjQAsAHCRg");
	this.shape.setTransform(279.9,-674.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYHaIBLgxQBXhABBhKQDPjthjj7Qg9AfhFALQiLAXgshkQgVgxACguQADg0AigkQAcgdApgOQAUgHAWgCQA9gHBGAlQA3AcA4A1QBDA/ApBRQApBTAIBbQAXDoiyEcgAojHaQghgfAEgfQAJg9C7ADQDaAEBcgJQB1gMAYgmQAJAegjAlQhEBKjUAig");
	this.shape_1.setTransform(328.7,-701.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64B4EC").s().p("AMVIYQCykcgWjpQgJhagphSQgphShCg+Qg5g1g2gdQhGglg9AHQgWADgUAHQgqAOgcAdQgiAkgCA0QgDAtAWAyQArBkCLgXQBGgLA9ggQBjD8jPDtQhBBKhYBAIhKAwIkFAAQDVgiBFhKQAigkgIgfQgYAnh2AMQhdAJjYgEQi8gDgIA9QgEAeAgAfIl9AAQgHiRDQgsQCNgeFwAGQD9AFCLhZQBFgtATgtQgvA/jLgBQjPgBmNhEQleg7i1DdQg5BFghBYQgRAtgFAeIjoAAQAOgsAgg/QBBh/BZheQB9iFCdgyQDGg9DsBGQFNBlDDgMQCqgKA6hfQgUAEgYAAQhzAAhShRQhRhRAAhzQAAhzBRhSQBShRBzAAIAKAAQBugOB9BLQCDBNBWCMQBgCcAIC9QAKDZhuDlg");
	this.shape_2.setTransform(291.6,-707.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wavecopy, new cjs.Rectangle(181.9,-761,219.6,107.2), null);


(lib.wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004CA9").s().p("ArsDLQAFgeARgtQAhhYA5hEQC1jdFeA7QGNBEDPABQDLABAvg/QgTAthFAtQiLBZj9gFQlwgGiNAdQjQAsAHCRg");
	this.shape.setTransform(246.1,-468.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYHaIBLgxQBXhABBhKQDPjthjj7Qg9AfhFALQiLAXgshkQgVgxACguQADg0AigkQAcgdApgOQAUgHAWgCQA9gHBGAlQA3AcA4A1QBDA/ApBRQApBTAIBbQAXDoiyEcgAojHaQghgfAEgfQAJg9C7ADQDaAEBcgJQB1gMAYgmQAJAegjAlQhEBKjUAig");
	this.shape_1.setTransform(294.8,-495.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64B4EC").s().p("AMVIYQCykcgWjpQgJhagphSQgphShCg+Qg5g1g2gdQhGglg9AHQgWADgUAHQgqAOgcAdQgiAkgCA0QgDAtAWAyQArBkCLgXQBGgLA9ggQBjD8jPDtQhBBKhYBAIhKAwIkFAAQDVgiBFhKQAigkgIgfQgYAnh2AMQhdAJjYgEQi8gDgIA9QgEAeAhAfIl+AAQgHiRDQgsQCNgeFwAGQD9AFCLhZQBFgtATgtQgvA/jLgBQjPgBmNhEQleg7i1DdQg5BFghBYQgRAtgFAeIjoAAQAOgsAgg/QBBh/BZheQB9iFCdgyQDGg9DsBGQFNBlDDgMQCqgKA6hfQgUAEgYAAQhzAAhShRQhRhRAAhzQAAhzBRhSQBShRBzAAIAKAAQBugOB9BLQCDBNBWCMQBgCcAIC9QAKDZhuDlg");
	this.shape_2.setTransform(257.8,-502);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave, new cjs.Rectangle(148,-555.6,219.6,107.2), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071B7").s().p("ADKBSICZh2QAvBDAiBLgAh9AuIC6iSICNC2gAmzAZQAbgaAigZQBEgxBFgeIBwCXg");
	this.shape.setTransform(99.7,280.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6CC5EA").s().p("ANqW9IAZACIgPAMgACfTDIi5CSIhxiXQAxgWAxgMQAQgEgRgdIATALQAsh1AMh+QAYkBh8jWIANknIATmzIAMkDQAsBQAoBYIhgBbICKAMQAoBkAfBtIjkDWIEeAWIAAAGQA8E0gCFMQgBClgNBoQBoBcBJBoIiZB4gAlSCVIEcAAIiGCGQhEhJhSg9gAsPhEQgvgPg3gHIgNjkIHEABIkPEOIhCgVgAm+k9gAm6rpIEqAQQAcAlAbAoIllFPgAsy3KIC+A7Ig2DIg");
	this.shape_1.setTransform(89.9,148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.7,296.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CC5EA").s().p("AKEYvIgGAAIipCZIiWi6IgLgBIisClIiajBIFMAWIHIAyIgDAAIBtAMQAMAbALAdIh4BhgAh5D2IARmBIGZAfImKF1IgggTgAts2eIgWAJIAOgUIABAAIAAgBQAog4AugvQC5i8DugPQBogGBzAbIhSExIjwB+IiBkUIgDgBIkFCJIADABIgIAEIGOCHIkPCNg");
	this.shape.setTransform(89.9,175.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.9,351.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004CB0").s().p("AgbAZIAIgMQAMAHAJABQAIAAAAgGIAAAAQAAgDgEgBIgJgEQgJgCgFgEQgHgFAAgJQAAgKAIgHQAHgFAKAAQAOAAAMAIIgIAOQgLgHgIAAQgGAAAAAFQAAACAEACIAJAFQAKADAEADQAHAEAAAJIAAAAQAAALgIAHQgHAFgLAAQgQAAgNgLg");
	this.shape.setTransform(207.4,-214.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004CB0").s().p("AgXAaQgKgKAAgQQAAgOAJgLQAKgKAOAAQARAAAJALQAIALAAAPIAAAFIgwAAQADANANAAQAKAAAHgHIAMAKQgLANgSAAQgPAAgKgKgAAPgFQgBgGgEgEQgEgEgGAAQgLAAgDAOIAdAAIAAAAg");
	this.shape_1.setTransform(200.2,-214.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004CB0").s().p("AgbAZIAIgMQAMAHAJABQAIAAAAgGIAAAAQAAgDgEgBIgJgEQgJgCgFgEQgHgFAAgJQAAgKAIgHQAHgFAKAAQAOAAAMAIIgIAOQgLgHgIAAQgGAAAAAFQAAACAEACIAJAFQAKADAEADQAHAEAAAJIAAAAQAAALgIAHQgHAFgLAAQgQAAgNgLg");
	this.shape_2.setTransform(192.9,-214.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004CB0").s().p("AgJAvIAAhEIATAAIAABEgAgKgdIAAgRIAUAAIAAARg");
	this.shape_3.setTransform(187.8,-215.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004CB0").s().p("AgZAcQgGgGAAgNIAAgsIAUAAIAAAmQAAAOALAAQAMAAAAgOIAAgmIAUAAIAABFIgUAAIAAgKQgJALgKAAQgLABgHgIg");
	this.shape_4.setTransform(181.8,-214.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004CB0").s().p("AgUAkIAAhFIATAAIAAAOQAHgQAPABIAAAUIgBAAQgUAAgBAYIAAAag");
	this.shape_5.setTransform(175.4,-214.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004CB0").s().p("AgVAaQgKgLAAgPQAAgOAKgLQAKgKAPAAQASAAAKALIgMANQgHgHgJAAQgGAAgFAFQgFAGAAAHIAAAAQAAAIAFAGQAFAFAHAAQAIAAAIgHIALAMQgLAMgRAAQgPAAgKgKg");
	this.shape_6.setTransform(168.8,-214.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004CB0").s().p("AggAnIAHgPQALAGAMABQATgBAAgSIAAgEQgJAMgNAAQgMAAgJgJQgKgJAAgOIAAgBQAAgOAKgKQAJgIAMAAQAMAAAKALIAAgJIAUAAIAAA1QAAASgJAJQgKAJgTAAQgRAAgOgHgAgLgYQgFAFAAAGIAAABQAAAHAFAEQAFAEAGAAQAHAAAFgEQAFgEAAgHIAAgBQAAgGgFgFQgFgEgHgBQgGABgFAEg");
	this.shape_7.setTransform(222.4,-227.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004CB0").s().p("AAMAkIAAgnQAAgOgMABQgLgBAAAOIAAAnIgUAAIAAhFIAUAAIAAAJQAJgLAKABQALgBAHAIQAGAGAAANIAAAsg");
	this.shape_8.setTransform(214.2,-228.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004CB0").s().p("AgJAwIAAhFIATAAIAABFgAgKgdIAAgSIAUAAIAAASg");
	this.shape_9.setTransform(208.2,-229.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004CB0").s().p("AgUAkIAAhFIAUAAIAAAOQAFgQAQABIAAAUIgBAAQgVAAABAYIAAAag");
	this.shape_10.setTransform(203.8,-228.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004CB0").s().p("AgjAuIAAhZIATAAIAAAKQAIgMANAAQANAAAJAJQAKALAAAQIAAAAQAAAQgKAKQgJAKgNgBQgMABgJgLIAAAegAgLgXQgFAGAAAIIAAAAQAAAJAFAEQAEAGAHAAQAHgBAEgFQAGgEAAgJIAAAAQAAgIgGgGQgEgFgHAAQgHAAgEAFg");
	this.shape_11.setTransform(196.6,-227.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004CB0").s().p("AgbAaIAIgOQAMAJAJgBQAIAAAAgEIAAgBQAAgDgEgCIgJgDQgJgDgFgEQgHgEAAgJQAAgLAIgFQAHgGAKAAQAOAAAMAIIgIANQgLgGgIAAQgGAAAAAFQAAADAEACIAJADQAKADAEAEQAHAFAAAIIAAAAQAAAMgIAFQgHAGgLAAQgQAAgNgKg");
	this.shape_12.setTransform(188.7,-228.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004CB0").s().p("AAMAkIAAgnQAAgOgMABQgLgBAAAOIAAAnIgUAAIAAhFIAUAAIAAAJQAJgLAKABQALgBAHAIQAGAGAAANIAAAsg");
	this.shape_13.setTransform(177.7,-228.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004CB0").s().p("AgaAaQgLgLAAgPQAAgOALgLQALgKAPAAQAQAAALAKQALALAAAOIAAAAQAAAPgLALQgLAKgQAAQgPAAgLgKgAgMgNQgFAGAAAHIAAAAQAAAIAFAFQAFAGAHAAQAIAAAFgFQAFgGAAgIQAAgHgFgFQgFgGgIAAQgHAAgFAFg");
	this.shape_14.setTransform(169.3,-228.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(163,-237.1,66.1,31), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7415").s().p("Ag3BCIALgZQATAKAVAAQAhAAAAggIAAgGQgQAUgVAAQgWAAgPgPQgQgPAAgYIAAgBQAAgZAQgQQAPgOAWAAQAVAAAPASIAAgQIAiAAIAABbQAAAfgPAPQgQAQghAAQgeAAgXgMgAgTgqQgIAIAAAMIAAABQAAAMAIAHQAIAHALAAQAMAAAJgHQAIgHAAgMIAAgBQAAgMgIgIQgJgHgMAAQgLAAgIAHg");
	this.shape.setTransform(87.3,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7415").s().p("AAUA8IAAhBQAAgYgUAAQgUAAABAYIAABBIgiAAIAAh1IAiAAIAAARQAOgTATAAQATAAALALQAKAMAAAVIAABLg");
	this.shape_1.setTransform(73.3,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7415").s().p("AgQBQIAAh1IAhAAIAAB1gAgRgyIAAgdIAjAAIAAAdg");
	this.shape_2.setTransform(63.1,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7415").s().p("AgjA8IAAh1IAiAAIAAAYQAKgbAaABIAAAjIgCAAQgiAAAAApIAAArg");
	this.shape_3.setTransform(55.7,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7415").s().p("Ag9BOIAAiYIAiAAIAAARQAOgUAVABQAWAAAPAPQARARAAAcQAAAcgQARQgPAPgXAAQgVAAgOgRIAAAzgAgTgnQgJAJAAAOQAAAPAJAIQAHAKAMAAQAMAAAIgKQAIgIAAgPQAAgOgIgJQgIgJgMAAQgMAAgHAJg");
	this.shape_4.setTransform(43.5,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7415").s().p("AgvArIAPgWQATAOARAAQAOAAAAgJIAAAAQAAgFgHgDIgQgGQgQgEgJgHQgLgIAAgPIAAgBQAAgRANgKQALgKATAAQAXAAAVAOIgOAXQgSgLgNAAQgLAAgBAIIAAAAQAAAFAHADIAQAGQARAGAIAGQALAIAAAOIAAABQAAATgNAKQgMAJgUAAQgbAAgXgSg");
	this.shape_5.setTransform(30.2,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF7415").s().p("AgsAsQgTgSAAgaIAAAAQAAgZATgRQASgSAbAAQAaAAATARQASASAAAZQAAAagSARQgTASgbAAQgbAAgRgRgAgWgWQgIAJAAANQAAANAJAKQAIAKAOAAQANAAAIgKQAJgJAAgOIAAAAQAAgMgJgKQgJgKgNAAQgNAAgJAKg");
	this.shape_6.setTransform(10.9,-3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7415").s().p("AgWAoIAAg4IgPAAIAAgcIAPAAIAAgeIAgAAIAAAeIAbAAIAAAcIgbAAIAAAyQAAALALAAQAIAAAIgDIAAAaQgMAHgOAAQgiAAABgjg");
	this.shape_7.setTransform(-1.1,-4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF7415").s().p("AgtAsQgSgSAAgaIAAAAQAAgZASgRQATgSAaAAQAbAAASARQATASAAAZQAAAagTARQgSASgbAAQgaAAgTgRgAgVgWQgJAJAAANQAAANAJAKQAIAKANAAQAOAAAJgKQAIgJAAgOIAAAAQAAgMgIgKQgKgKgNAAQgNAAgIAKg");
	this.shape_8.setTransform(89,-26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF7415").s().p("AgQBQIAAifIAhAAIAACfg");
	this.shape_9.setTransform(78.4,-28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7415").s().p("AgQBQIAAifIAhAAIAACfg");
	this.shape_10.setTransform(71.8,-28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF7415").s().p("AgoAsQgRgRAAgbIAAAAQAAgZAQgRQARgSAZAAQAcAAAPATQAOASAAAaIAAAIIhRAAQAEAYAXAAQAQAAANgNIATARQgRAWgfAAQgaAAgSgRgAAZgIQgBgMgGgHQgHgGgKAAQgUAAgFAZIAxAAIAAAAg");
	this.shape_11.setTransform(61.8,-26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF7415").s().p("AAVBQIAAhBQgBgYgTAAQgVAAAAAYIAABBIghAAIAAifIAhAAIAAA7QAPgTATAAQATAAAKAMQALALAAAUIAABMg");
	this.shape_12.setTransform(48.3,-28.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF7415").s().p("AgzBFIALgZQAIAFAGAAQAIAAAEgHIguh2IAjAAIAaBQIAahQIAiAAIgtB4QgHASgIAHQgIAIgPAAQgQAAgNgIg");
	this.shape_13.setTransform(28.1,-24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF7415").s().p("AgpA0QgMgKAAgRIAAgBQAAgSANgJQAMgKAWAAQAOABAOAFIAAgCQAAgWgYAAQgQAAgRAGIgIgaQAVgJAYAAQAaABANANQANAMAAAZIAABDIggAAIAAgMQgOAPgVAAQgRgBgLgIgAgVAXIAAAAQAAAHAFAEQAFADAIAAQALAAAHgFQAHgGAAgJIAAgGQgJgFgMABQgWAAAAAQg");
	this.shape_14.setTransform(14.8,-26.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF7415").s().p("Ag8A2IAUgXQAWASAXABQAWAAAAgPIAAgBQAAgGgGgEQgGgFgSgEQgagHgLgIQgOgKAAgVIAAgBQAAgUAPgNQAQgNAXAAQAgAAAYAUIgSAZQgVgPgRAAQgKAAgGADQgEAFAAAFIAAAAQAAAIAGAEQAGADAUAGQAZAHALAIQANALAAATIAAABQAAAWgQANQgQAMgYAAQglAAgcgZg");
	this.shape_15.setTransform(1.4,-28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-7.5,-40,106,49), null);


(lib.save = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7415").s().p("Ag3BJIAAiRIBuAAIAAAdIhOAAIAAAdIBEAAIAAAcIhEAAIAAAfIBPAAIAAAcg");
	this.shape.setTransform(-34.9,-43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7415").s().p("AgNBKIg8iTIAkAAIAlBnIAnhnIAjAAIg8CTg");
	this.shape_1.setTransform(-50.2,-43.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7415").s().p("AAsBKIgNghIg9AAIgOAhIghAAIA/iTIAdAAIA/CTgAATANIgTgvIgTAvIAmAAg");
	this.shape_2.setTransform(-63.3,-43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7415").s().p("Ag5A0IATgXQAWASAVAAQAVAAAAgOQAAgGgGgFQgGgEgRgEQgZgHgKgHQgNgKAAgUIAAgBQAAgTAOgMQAOgNAXAAQAeABAYASIgRAYQgVgOgQAAQgJAAgFADQgFAEAAAFIAAABQAAAIAGADQAGAEATAEQAXAHALAIQAMALAAARIAAABQAAAWgPAMQgPALgYAAQgjABgagYg");
	this.shape_3.setTransform(-78.4,-43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.save, new cjs.Rectangle(-87,-55.2,61,25), null);


(lib.pho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Seal();
	this.instance.parent = this;
	this.instance.setTransform(-10,-120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pho, new cjs.Rectangle(-10,-120,300,232), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.KFT_Logo_RGB();
	this.instance.parent = this;
	this.instance.setTransform(2,1,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(2,1,120,75.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ASVR1QgbgogLgsIgGglQg/BhiqAjQg1AMg5ADIgvACQgTi2CZhxQBNg4BRgUQAZgGhahaQhHhGgdgWQh0hRiMhJQh5hAiWhBQhtgviphCIhRggIAyFoQkmhUiFjQQhJhzgIh0Qnpign5h0QAii5CcieQCViXDqhkQDrhjEOgaQEcgcEOA8QANghAWgoQAshMA5g6QCzi2D7A8IiDHjQHsEBB/KTQAoDPgBDeQgBBvgIBFQCzCeAnDWQATBqgQBMQjPgXhVh9g");
	mask.setTransform(147.3,147.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinJxIgglwIB2hwICNBZIB3gjIDVAYIFXA3ICCDaIgvDKIisBXgAtfokQgIhDA2g3QAxgyBageQBVgeBhgEQBigEBMAYQD+BOCUCiQCmC3gWDsQgIBVgeBNg");
	this.shape.setTransform(231.6,220.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(145.1,142.2,149.4,134.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AihDkQh5gihjhFIhNg9IjbBnIAAlCIDbCBQHMljGAC7QB4A7BiBqQAyA0AYApQlCDEkiAAQh0AAhvggg");
	mask_1.setTransform(69.8,25.8);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071B7").s().p("AAAAAIABAAIAAABg");
	this.shape_1.setTransform(53.1,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6CC5EA").s().p("AjDBgIjnBbIAJllIDzCAIEVjJIAAgPIBnBSIBNhJIAABJIBNhJIAABAIBDhAIAACWIhDhAIAABAIhNhJIAABJIhNhJIhhBVIBhBOIBNhKIAABKIBNhKIAABAIBDhAIAACWIhDhAIAABAIhNhIIAABIIhNhIIhmBYIgBABIBnBWIBNhJIAABJIBNhJIAAA/IBDg/IAACWIhDhAIAABAIhNhJIAABJIhNhJIhmBSIAAADg");
	this.shape_2.setTransform(42.7,26.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(2,0.3,83.5,51.6), null);


(lib.booknow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAiIgPgrIgOArIgNAAIgXhCIAQAAIAOAsIAPgtIAMAAIAPAtIAOgsIAPAAIgXBCg");
	this.shape.setTransform(81.8,-213.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAYQgKgKAAgOQAAgOAKgJQALgLAOAAQAPAAALALQAKAJAAAOQAAAOgKAKQgLALgPgBQgOABgLgLgAgOgOQgFAGAAAIQAAAIAFAHQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgFgGQgGgGgJAAQgIAAgGAGg");
	this.shape_1.setTransform(72.4,-213.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAhIgfgpIAAApIgPAAIAAhBIAOAAIAeAnIAAgnIAPAAIAABBg");
	this.shape_2.setTransform(64.5,-213.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANAhIgUgcIgHAIIAAAUIgPAAIAAhBIAPAAIAAAdIAagdIASAAIgcAcIAdAlg");
	this.shape_3.setTransform(54.7,-213.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAYQgKgKAAgOQAAgOAKgJQALgLAOAAQAPAAALALQAKAJAAAOQAAAOgKAKQgLALgPgBQgOABgLgLgAgOgOQgFAGAAAIQAAAIAFAHQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgFgGQgGgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(46.8,-213.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAYQgKgKAAgOQAAgOAKgJQALgLAOAAQAPAAALALQAKAJAAAOQAAAOgKAKQgLALgPgBQgOABgLgLgAgOgOQgFAGAAAIQAAAIAFAHQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgFgGQgGgGgJAAQgIAAgGAGg");
	this.shape_5.setTransform(38.6,-213.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAhIAAhBIAfAAQALAAAGAFQAFAFAAAGIAAABQAAAKgJAEQAMAEAAAMQAAAJgGAFQgHAEgLAAgAgNAVIARAAQAKgBAAgGIAAgBQAAgHgLAAIgQAAgAgNgFIANAAQAKgBAAgGIAAgBQAAgGgKgBIgNAAg");
	this.shape_6.setTransform(31.3,-213.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7415").s().p("AmSB+IAAj6IMlAAIAAD6g");
	this.shape_7.setTransform(57.4,-214.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.booknow, new cjs.Rectangle(17.2,-227,80.6,25.1), null);


(lib._20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7415").s().p("AAOAvQgHgIAAgLQAAgMAHgIQAHgIAMAAQAMAAAHAIQAHAIAAALIAAABQAAALgHAIQgHAIgMAAQgMAAgHgIgAAaASQgDAEAAAFIAAABQAAAFADAEQADAEAEAAQAFAAACgEQADgEAAgFQAAgGgDgEQgDgEgEAAQgEAAgDAEgAgwA2IArg5IAjgyIASAAIgrA5IgiAygAgzgHQgHgIAAgLQAAgMAHgIQAHgIAMAAQAMAAAHAIQAHAIAAALIAAABQAAALgHAIQgHAHgMAAQgMAAgHgHgAgogkQgCAEAAAFIAAABQAAAFADAEQACAEAFAAQAFAAADgEQACgEAAgFQAAgGgCgEQgDgEgFAAQgFAAgDAEg");
	this.shape.setTransform(173.1,-116.6);

	this.instance = new lib._20();
	this.instance.parent = this;
	this.instance.setTransform(35,-126.6,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._20_1, new cjs.Rectangle(35,-126.6,146.1,77.5), null);


(lib.whalee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(352.3,183.1,1,1,0,0,0,89.9,175.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.994},0).wait(1).to({alpha:0.97},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.835},0).wait(1).to({alpha:0.701},0).wait(1).to({alpha:0.555},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.376},0).wait(1).to({alpha:0.332},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.289},0).wait(1).to({alpha:0.291},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.325},0).wait(1).to({alpha:0.351},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.498},0).wait(1).to({alpha:0.575},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.798},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.989},0).wait(1).to({alpha:0.995},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.997},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.802},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.305},0).wait(1).to({alpha:0.253},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.148},0).to({_off:true},8).wait(20));

	// Layer_3
	this.instance_1 = new lib.Symbol12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(382.5,199.9,1,1,0,0,0,89.9,148.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:89.8,x:382.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:89.9,x:382.5},0).wait(1).to({regX:89.8,x:382.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:89.9,x:382.5},0).wait(1).to({regX:89.8,x:382.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:89.9,x:382.5},0).to({_off:true},14).wait(20));

	// Layer_2
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.parent = this;
	this.instance_2.setTransform(243.9,201,1.5,1.5,0,0,0,159.1,149.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},60).wait(20));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgBAxQgUgBgOgPQgNgPAAgTQABgVAPgNQAPgNATABQAUAAAOAPQAOAPgBATQgBAVgPANQgOANgSAAIgCAAg");
	this.shape.setTransform(123,133,1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB1A5Ql5hvjsguIBagXQBygaB1gNQF3grETBjQgEBbAIBOQAFAwANBBQhkgkkYhTg");
	this.shape_1.setTransform(79.7,174.3,1.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah5CeQiXgRhZhJIAAgBQAOgxA9g4QBAg6BMgeQCEg0CTAZQCJAWBcBNQgOAygyAuQg2AyhMAeQhlAohxAAQglAAgmgEg");
	this.shape_2.setTransform(194.2,119.2,1.5,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071B7").s().p("ASVR1QgbgogLgsIgGglQg/BhiqAjQg1AMg5ADIgvACQgTi2CZhxQBNg4BRgUQAZgGhahaQhHhGgdgWQh0hRiMhJQh5hAiWhBQhtgviphCIhRggIAyFoQkmhUiFjQQhJhzgIh0Qnpign5h0QAii5CcieQCViXDqhkQDrhjEOgaQEcgcEOA8QANghAWgoQAshMA5g6QCzi2D7A8IiDHjQHsEBB/KTQAoDPgBDeQgBBvgIBFQCzCeAnDWQATBqgQBMQjPgXhVh9g");
	this.shape_3.setTransform(226.1,197.8,1.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0070B7").ss(1,1,1).p("AW4UmQh8gOhVgzQhBgngog6QgUgegMggIgDgJIgIAGQhIA8h5AcQhIAQhVADIgrAAIgDgbQgIhQAYhHQAVg+AugzQAngtA3giQAugeA1gTIAJgDIgGgIQgZgdgygvQgsgqgUgRQhxhPiMhJQh5g/iYhCQhrgvilhBIgigMIAyFjIgtgOQkyhWiKjbQhDhqgQhyIgBgEIgEgBQncibnshxIgcgGIAFgcQAciaBsiIQBqiGCphmQCohnDUg7QDZg8DrgFIAqgBQCzAACvAjIAFABIACgFQA2hxBVhUQA9g8BIgiQBVgoBfgDIALAAQA7AABDAQIAeAHIiFHqIAFADQDtCECaDrQCbDqA/FCQAjC4AEDFQACB4gKBiIAAAEIADACQCvCiAnDXQATBtgRBUIgFAag");
	this.shape_4.setTransform(225.8,198.1,1.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071B7").s().p("AW4UlQh8gNhVgzQhBgngog6QgUgegMggIgDgJIgIAGQhIA8h5AcQhIAQhVADIgrAAIgDgbQgIhQAYhHQAVg9Aug0QAngtA3giQAugeA1gTIAJgDIgGgIQgZgcgygwQgsgqgUgRQhxhPiMhJQh5hAiYhBQhrgvilhAIgigOIAyFkIgtgOQkyhWiKjbQhDhqgQhxIgBgFIgEgBQncianshyIgcgGIAFgcQAciaBsiIQBqiGCphmQCohnDUg7QDZg7DrgGIAqAAQCzgBCvAkIAFABIACgGQA2hxBVhUQA9g8BIghQBVgpBfgDIALAAQA7AABDAQIAeAIIiFHpIAFADQDtCECaDrQCbDqA/FCQAjC5AEDEQACB4gKBjIAAADIADACQCvCiAnDXQATBtgRBUIgFAbg");
	this.shape_5.setTransform(225.8,198.1,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},60).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,483.3,426.3);


(lib.whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// whale
	this.instance = new lib.whalee("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1361.4,902.6,1,1,60,0,0,236.2,200.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:235.7,regY:198,rotation:59.7,x:1361.2,y:897.3,startPosition:1},0).wait(1).to({rotation:58.6,x:1353,y:885.7,startPosition:2},0).wait(1).to({rotation:56.5,x:1337,y:863,startPosition:3},0).wait(1).to({rotation:52.9,x:1310.2,y:824.9,startPosition:4},0).wait(1).to({rotation:47.3,x:1268.3,y:765.4,startPosition:5},0).wait(1).to({rotation:39.1,x:1207,y:678.3,startPosition:6},0).wait(1).to({rotation:28.6,x:1128,y:566.4,startPosition:7},0).wait(1).to({rotation:17.5,x:1045.3,y:449.3,startPosition:8},0).wait(1).to({rotation:7.9,x:972.7,y:346.6,startPosition:9},0).wait(1).to({rotation:0,x:913.9,y:263.5,startPosition:10},0).wait(1).to({rotation:-6.2,x:867,y:197.2,startPosition:11},0).wait(1).to({rotation:-11.3,x:829.4,y:144.2,startPosition:12},0).wait(1).to({rotation:-15.3,x:799,y:101.3,startPosition:13},0).wait(1).to({rotation:-18.6,x:774.4,y:66.5,startPosition:14},0).wait(1).to({rotation:-21.3,x:754.2,y:38.1,startPosition:15},0).wait(1).to({rotation:-23.5,x:737.9,y:15,startPosition:16},0).wait(1).to({rotation:-25.2,x:724.6,y:-3.8,startPosition:17},0).wait(1).to({rotation:-26.7,x:714,y:-18.8,startPosition:18},0).wait(1).to({rotation:-27.8,x:705.6,y:-30.7,startPosition:19},0).wait(1).to({rotation:-28.6,x:699.1,y:-39.7,startPosition:20},0).wait(1).to({rotation:-29.3,x:694.4,y:-46.3,startPosition:21},0).wait(1).to({rotation:-29.7,x:691.3,y:-50.8,startPosition:22},0).wait(1).to({rotation:-29.9,x:689.5,y:-53.3,startPosition:23},0).wait(1).to({regX:236.2,regY:201,rotation:-30,x:690.8,y:-51.9},0).wait(1).to({regX:235.7,regY:198,rotation:-30.2,x:686.8,startPosition:24},0).wait(1).to({rotation:-30.6,x:683.1,y:-47.6,startPosition:25},0).wait(1).to({rotation:-31.3,x:677.3,y:-41,startPosition:26},0).wait(1).to({rotation:-32.2,x:669.5,y:-32.1,startPosition:27},0).wait(1).to({rotation:-33.3,x:659.5,y:-20.6,startPosition:28},0).wait(1).to({rotation:-34.7,x:647.1,y:-6.4,startPosition:29},0).wait(1).to({rotation:-36.4,x:632.2,y:10.8,startPosition:30},0).wait(1).to({rotation:-38.4,x:614.5,y:31,startPosition:31},0).wait(1).to({rotation:-40.8,x:593.8,y:54.8,startPosition:32},0).wait(1).to({rotation:-43.5,x:569.8,y:82.3,startPosition:33},0).wait(1).to({rotation:-46.6,x:542.3,y:114.1,startPosition:34},0).wait(1).to({rotation:-50.2,x:510.7,y:150.4,startPosition:35},0).wait(1).to({rotation:-54.3,x:474.6,y:191.9,startPosition:36},0).wait(1).to({rotation:-59,x:433.5,y:239.2,startPosition:37},0).wait(1).to({rotation:-64.3,x:386.6,y:293.2,startPosition:38},0).wait(1).to({rotation:-70.4,x:332.8,y:355.2,startPosition:39},0).wait(1).to({rotation:-77.4,x:271.1,y:426.5,startPosition:40},0).wait(1).to({rotation:-85.6,x:199.4,y:509.3,startPosition:41},0).wait(1).to({rotation:-95.2,x:114.9,y:606.9,startPosition:42},0).wait(1).to({rotation:-106.8,x:13.3,y:724.3,startPosition:43},0).wait(1).to({rotation:-121.3,x:-113.9,y:871.6,startPosition:44},0).wait(1).to({regX:236.1,regY:201,rotation:-141.2,x:-286.4,y:1070.2,startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1255.5,671.2,330,514.8);


(lib.fishy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(70.6,-629.2,0.8,0.8,0,0,0,68.9,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071B7").s().p("AihDkQh5gihjhFIhNg9IjbBnIAAlCIDbCBQHMljGAC7QB5A7BhBqQAyA0AZApQlDDEkiAAQhzAAhwggg");
	this.shape.setTransform(71.3,-629.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishy, new cjs.Rectangle(15.5,-650.1,110.2,41.8), null);


(lib.fishiesEnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fishy();
	this.instance.parent = this;
	this.instance.setTransform(30.6,36.7,0.45,0.45,0,0,180,71.2,29.4);

	this.instance_1 = new lib.fishy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.7,8.3,0.315,0.315,0,0,180,71.3,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fishiesEnd, new cjs.Rectangle(6.1,-269.1,81.1,76.5), null);


// stage content:
(lib.kft_300x250_seal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.wave();
	this.instance.parent = this;
	this.instance.setTransform(-105,487.2,0.43,0.43,0,0,0,171.4,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:257.8,regY:-502,x:-57.8,y:235.3},0).wait(1).to({x:-44.2},0).wait(1).to({x:-24.5},0).wait(1).to({x:4.7},0).wait(1).to({x:38.1},0).wait(1).to({x:62.4},0).wait(1).to({x:78.7},0).wait(1).to({x:90.3},0).wait(1).to({x:99.1},0).wait(1).to({x:106},0).wait(1).to({x:111.4},0).wait(1).to({x:115.8},0).wait(1).to({x:119.4},0).wait(1).to({x:122.4},0).wait(1).to({x:124.8},0).wait(1).to({x:126.8},0).wait(1).to({x:128.4},0).wait(1).to({x:129.6},0).wait(1).to({x:130.6},0).wait(1).to({x:131.3},0).wait(1).to({x:131.8},0).wait(1).to({x:132.1},0).wait(1).to({regX:171.4,regY:84,x:95,y:487.2},0).to({x:187.5},278,cjs.Ease.get(-0.18)).to({x:242.5},148).wait(1));

	// Layer_7
	this.instance_1 = new lib.wave();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110,554.8,0.568,0.568,0,0,0,171.4,84.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:257.8,regY:-502,x:-45.8,y:222.1},0).wait(1).to({x:-25.2},0).wait(1).to({x:4.5},0).wait(1).to({x:48.8},0).wait(1).to({x:99.2},0).wait(1).to({x:136},0).wait(1).to({x:160.6},0).wait(1).to({x:178.2},0).wait(1).to({x:191.5},0).wait(1).to({x:201.9},0).wait(1).to({x:210.1},0).wait(1).to({x:216.8},0).wait(1).to({x:222.3},0).wait(1).to({x:226.8},0).wait(1).to({x:230.5},0).wait(1).to({x:233.5},0).wait(1).to({x:235.9},0).wait(1).to({x:237.8},0).wait(1).to({x:239.2},0).wait(1).to({x:240.3},0).wait(1).to({x:241},0).wait(1).to({x:241.4},0).wait(1).to({regX:171.4,regY:84.1,x:192.5,y:554.8},0).to({x:322.5},278,cjs.Ease.get(-0.18)).to({x:398.8},148).wait(1));

	// Layer_5
	this.instance_2 = new lib.wavecopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-70,567.2,0.43,0.43,0,0,0,171.4,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:92.5},301,cjs.Ease.get(-0.15)).to({x:165},148).wait(1));

	// Layer_9
	this.instance_3 = new lib.whale("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(75.1,310.7,0.16,0.16,0,0,180,1131,791.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({_off:false},0).to({_off:true},50).wait(261));

	// last fish
	this.instance_4 = new lib.fishiesEnd();
	this.instance_4.parent = this;
	this.instance_4.setTransform(362.7,494.5,1,1,0,0,0,45.8,24.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(309).to({_off:false},0).wait(1).to({regX:46.4,regY:-230.9,scaleX:1,scaleY:1,x:360.1,y:238.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:356.5,y:238.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:352.2,y:237.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:346.9,y:236.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:340.5,y:235.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:332.2,y:234.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:322,y:232.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:310.7,y:230.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:300.1,y:228.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:291.6,y:227.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:284.8,y:225.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:279.4,y:225},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:274.9,y:224.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:271.1,y:223.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:268,y:223},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:265.2,y:222.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:262.8,y:222.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:260.7,y:221.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:258.8,y:221.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:257.2,y:221.2},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:255.7,y:220.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:254.4,y:220.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:253.3,y:220.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:252.3,y:220.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:251.3,y:220.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:250.5,y:220},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:249.7,y:219.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:249.1,y:219.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:248.5,y:219.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:248,y:219.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:247.5,y:219.5},0).wait(1).to({x:247.1,y:219.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:246.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:246.5,y:219.3},0).wait(1).to({x:246.2},0).wait(1).to({x:246,y:219.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:245.9},0).wait(1).to({x:245.8},0).wait(1).to({x:245.7},0).wait(1).to({x:245.6},0).wait(1).to({regX:45.8,regY:24.3,x:245.2,y:423.3},0).wait(100));

	// last whale
	this.instance_5 = new lib.whalee("synched",19);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11.9,347.9,0.143,0.143,0,-68,112,235.2,202.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(301).to({_off:false},0).wait(1).to({regX:235.7,regY:198,skewX:-66.5,skewY:113.5,x:-10.8,y:344.2,startPosition:20},0).wait(1).to({skewX:-64.6,skewY:115.4,x:-8.9,y:340.1,startPosition:21},0).wait(1).to({skewX:-62.4,skewY:117.6,x:-6.6,y:335.2,startPosition:22},0).wait(1).to({skewX:-59.7,skewY:120.3,x:-3.8,y:329.3,startPosition:23},0).wait(1).to({skewX:-56.4,skewY:123.6,x:-0.4,y:321.9,startPosition:24},0).wait(1).to({skewX:-52.2,skewY:127.8,x:4,y:312.6,startPosition:25},0).wait(1).to({skewX:-47,skewY:133,x:9.4,y:301,startPosition:26},0).wait(1).to({skewX:-41.2,skewY:138.8,x:15.5,y:288.2,startPosition:27},0).wait(1).to({skewX:-35.9,skewY:144.1,x:21.1,y:276.3,startPosition:28},0).wait(1).to({skewX:-31.5,skewY:148.5,x:25.7,y:266.5,startPosition:29},0).wait(1).to({skewX:-28,skewY:152,x:29.4,y:258.9,startPosition:30},0).wait(1).to({skewX:-25.2,skewY:154.8,x:32.3,y:252.7,startPosition:31},0).wait(1).to({skewX:-23,skewY:157,x:34.6,y:247.6,startPosition:32},0).wait(1).to({skewX:-21.1,skewY:158.9,x:36.7,y:243.4,startPosition:33},0).wait(1).to({skewX:-19.4,skewY:160.6,x:38.4,y:239.8,startPosition:34},0).wait(1).to({skewX:-18,skewY:162,x:39.9,y:236.7,startPosition:35},0).wait(1).to({skewX:-16.8,skewY:163.2,x:41.1,y:234,startPosition:36},0).wait(1).to({skewX:-15.7,skewY:164.3,x:42.2,y:231.6,startPosition:37},0).wait(1).to({skewX:-14.8,skewY:165.2,x:43.2,y:229.6,startPosition:38},0).wait(1).to({skewX:-14,skewY:166,x:44.1,y:227.7,startPosition:39},0).wait(1).to({skewX:-13.2,skewY:166.8,x:44.9,y:226.1,startPosition:40},0).wait(1).to({skewX:-12.5,skewY:167.5,x:45.6,y:224.5,startPosition:41},0).wait(1).to({skewX:-12,skewY:168,x:46.2,y:223.3,startPosition:42},0).wait(1).to({skewX:-11.4,skewY:168.6,x:46.8,y:222.1,startPosition:43},0).wait(1).to({skewX:-10.9,skewY:169.1,x:47.3,y:221,startPosition:44},0).wait(1).to({skewX:-10.5,skewY:169.5,x:47.7,y:220.1,startPosition:45},0).wait(1).to({skewX:-10.1,skewY:169.9,x:48.1,y:219.2,startPosition:46},0).wait(1).to({skewX:-9.8,skewY:170.2,x:48.5,y:218.5,startPosition:47},0).wait(1).to({skewX:-9.5,skewY:170.5,x:48.8,y:217.8,startPosition:48},0).wait(1).to({skewX:-9.2,skewY:170.8,x:49.1,y:217.2,startPosition:49},0).wait(1).to({skewX:-9,skewY:171,x:49.3,y:216.7,startPosition:50},0).wait(1).to({skewX:-8.8,skewY:171.2,x:49.5,y:216.3,startPosition:51},0).wait(1).to({skewX:-8.6,skewY:171.4,x:49.7,y:215.9,startPosition:52},0).wait(1).to({skewX:-8.5,skewY:171.5,x:49.8,y:215.6,startPosition:53},0).wait(1).to({skewX:-8.4,skewY:171.6,x:50,y:215.3,startPosition:54},0).wait(1).to({skewX:-8.3,skewY:171.7,x:50.1,y:215.1,startPosition:55},0).wait(1).to({skewX:-8.2,skewY:171.8,x:50.2,y:214.9,startPosition:56},0).wait(1).to({skewX:-8.1,skewY:171.9,y:214.7,startPosition:57},0).wait(1).to({x:50.3,y:214.6,startPosition:58},0).wait(1).to({skewX:-8,skewY:172,startPosition:59},0).wait(1).to({regX:234.4,regY:203.1,x:50.5,y:215.2,mode:"single",startPosition:22},0).wait(108));

	// fish
	this.instance_6 = new lib.fishy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(354.8,519.4,0.5,0.5,0,0,180,71.3,29.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({x:217.3},25,cjs.Ease.get(0.95)).to({x:124.8},24,cjs.Ease.get(1)).to({x:49.8},29,cjs.Ease.get(1)).to({x:-50.2},34,cjs.Ease.get(1)).wait(12).to({x:354.8},0).to({x:217.3},25,cjs.Ease.get(0.95)).to({x:124.8},24,cjs.Ease.get(1)).to({x:49.8},29,cjs.Ease.get(1)).to({x:-50.2},34,cjs.Ease.get(1)).wait(158));

	// fish
	this.instance_7 = new lib.fishy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(354.8,444.4,0.35,0.35,0,0,180,71.3,29.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).to({x:204.8},34,cjs.Ease.get(0.95)).to({x:99.8},35,cjs.Ease.get(1)).to({regX:71.5,x:-50.2},42,cjs.Ease.get(1)).to({_off:true},3).wait(10).to({_off:false,regX:71.3,x:354.8,y:506.9},0).to({x:204.8},34,cjs.Ease.get(0.95)).to({x:99.8},35,cjs.Ease.get(1)).to({regX:71.5,x:-50.2},42,cjs.Ease.get(1)).wait(149));

	// boknow
	this.instance_8 = new lib.booknow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(133.8,408.5,1,1,0,0,0,43.8,9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(169).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(-1)).wait(273));

	// Layer_13
	this.instance_9 = new lib.Symbol2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-110.2,352.5,1,1,0,0,0,105.2,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121).to({_off:false},0).wait(1).to({regX:195.8,regY:-222.4,x:-18.6,y:116.1},0).wait(1).to({x:-15.5},0).wait(1).to({x:-9.3},0).wait(1).to({x:1.3},0).wait(1).to({x:18.4},0).wait(1).to({x:45.7},0).wait(1).to({x:85.3},0).wait(1).to({x:128.6},0).wait(1).to({x:163.3},0).wait(1).to({x:188.2},0).wait(1).to({x:206.1},0).wait(1).to({x:219.2},0).wait(1).to({x:229},0).wait(1).to({x:236.2},0).wait(1).to({x:241.4},0).wait(1).to({x:245},0).wait(1).to({x:247.4},0).wait(1).to({x:248.7},0).wait(1).to({regX:105.2,regY:14,x:158.6,y:352.5},0).wait(310));

	// Layer_12
	this.instance_10 = new lib._20_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-77.5,268,1,1,0,0,0,107,60.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(118).to({_off:false},0).wait(1).to({regY:-87.9,x:-76.7,y:119.6,alpha:0.003},0).wait(1).to({x:-74,alpha:0.015},0).wait(1).to({x:-68.8,alpha:0.038},0).wait(1).to({x:-59.8,alpha:0.078},0).wait(1).to({x:-45.3,alpha:0.141},0).wait(1).to({x:-22.2,alpha:0.243},0).wait(1).to({x:11.3,alpha:0.39},0).wait(1).to({x:48,alpha:0.551},0).wait(1).to({x:77.3,alpha:0.68},0).wait(1).to({x:98.4,alpha:0.773},0).wait(1).to({x:113.5,alpha:0.84},0).wait(1).to({x:124.7,alpha:0.889},0).wait(1).to({x:132.9,alpha:0.925},0).wait(1).to({x:139,alpha:0.952},0).wait(1).to({x:143.4,alpha:0.971},0).wait(1).to({x:146.5,alpha:0.985},0).wait(1).to({x:148.5,alpha:0.994},0).wait(1).to({x:149.7,alpha:0.998},0).wait(1).to({regY:60.5,x:150,y:268,alpha:1},0).wait(313));

	// Layer_11
	this.instance_11 = new lib.save();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-31.3,178.7,1,1,0,0,0,46.1,18);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(115).to({_off:false},0).wait(1).to({regX:-56.8,regY:-43.8,x:-133.5,y:116.9,alpha:0.003},0).wait(1).to({x:-131.4,alpha:0.015},0).wait(1).to({x:-127.2,alpha:0.038},0).wait(1).to({x:-120.1,alpha:0.078},0).wait(1).to({x:-108.5,alpha:0.141},0).wait(1).to({x:-90.2,alpha:0.243},0).wait(1).to({x:-63.4,alpha:0.39},0).wait(1).to({x:-34.3,alpha:0.551},0).wait(1).to({x:-10.9,alpha:0.68},0).wait(1).to({x:5.9,alpha:0.773},0).wait(1).to({x:18,alpha:0.84},0).wait(1).to({x:26.9,alpha:0.889},0).wait(1).to({x:33.4,alpha:0.925},0).wait(1).to({x:38.3,alpha:0.952},0).wait(1).to({x:41.8,alpha:0.971},0).wait(1).to({x:44.3,alpha:0.985},0).wait(1).to({x:45.9,alpha:0.994},0).wait(1).to({x:46.8,alpha:0.998},0).wait(1).to({regX:46.1,regY:18,x:150,y:178.7,alpha:1},0).wait(316));

	// logo
	this.instance_12 = new lib.logo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(56.3,37.4,0.77,0.77,0,0,0,60.1,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(450));

	// Layer_3
	this.instance_13 = new lib.Symbol1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-137.5,140,1,1,0,0,0,135.1,16);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(1).to({regX:45.3,regY:-15.2,x:-214.8,y:108.8,alpha:0.043},0).wait(1).to({x:-198.6,alpha:0.1},0).wait(1).to({x:-176.6,alpha:0.176},0).wait(1).to({x:-145.5,alpha:0.284},0).wait(1).to({x:-104.5,alpha:0.427},0).wait(1).to({x:-65.6,alpha:0.562},0).wait(1).to({x:-37.2,alpha:0.661},0).wait(1).to({x:-17,alpha:0.731},0).wait(1).to({x:-1.9,alpha:0.784},0).wait(1).to({x:9.8,alpha:0.825},0).wait(1).to({x:19.2,alpha:0.857},0).wait(1).to({x:26.8,alpha:0.884},0).wait(1).to({x:33.2,alpha:0.906},0).wait(1).to({x:38.4,alpha:0.924},0).wait(1).to({x:42.8,alpha:0.939},0).wait(1).to({x:46.5,alpha:0.952},0).wait(1).to({x:49.6,alpha:0.963},0).wait(1).to({x:52.1,alpha:0.972},0).wait(1).to({x:54.3,alpha:0.979},0).wait(1).to({x:56,alpha:0.985},0).wait(1).to({x:57.4,alpha:0.99},0).wait(1).to({x:58.5,alpha:0.994},0).wait(1).to({x:59.3,alpha:0.997},0).wait(1).to({x:59.8,alpha:0.999},0).wait(1).to({x:60.1,alpha:1},0).wait(1).to({regX:135.1,regY:16,x:150,y:140},0).wait(71).to({regX:45.3,regY:-15.2,x:61.6,y:108.8,alpha:0.995},0).wait(1).to({x:66.4,alpha:0.979},0).wait(1).to({x:75.7,alpha:0.946},0).wait(1).to({x:91.5,alpha:0.891},0).wait(1).to({x:116.6,alpha:0.804},0).wait(1).to({x:153.7,alpha:0.675},0).wait(1).to({x:200.2,alpha:0.513},0).wait(1).to({x:244.2,alpha:0.36},0).wait(1).to({x:278.1,alpha:0.242},0).wait(1).to({x:302.3,alpha:0.158},0).wait(1).to({x:319.3,alpha:0.099},0).wait(1).to({x:331.2,alpha:0.058},0).wait(1).to({x:339.1,alpha:0.03},0).wait(1).to({x:344.2,alpha:0.012},0).wait(1).to({x:346.9,alpha:0.003},0).wait(1).to({regX:135.1,regY:16,x:437.5,y:140,alpha:0},0).wait(323));

	// sel
	this.instance_14 = new lib.pho();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160.3,566.5,1,1,0,0,0,146,213.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:140,regY:-4,x:154.1,y:341.1},0).wait(1).to({x:153.9,y:331},0).wait(1).to({x:153.6,y:317.4},0).wait(1).to({x:153.2,y:298.1},0).wait(1).to({x:152.7,y:272.1},0).wait(1).to({x:152.2,y:246.1},0).wait(1).to({x:151.8,y:226.8},0).wait(1).to({x:151.6,y:213.2},0).wait(1).to({x:151.4,y:203.1},0).wait(1).to({x:151.2,y:195.2},0).wait(1).to({x:151.1,y:188.9},0).wait(1).to({x:151,y:183.8},0).wait(1).to({x:150.9,y:179.5},0).wait(1).to({x:150.8,y:176},0).wait(1).to({y:173},0).wait(1).to({x:150.7,y:170.4},0).wait(1).to({y:168.3},0).wait(1).to({x:150.6,y:166.5},0).wait(1).to({y:165},0).wait(1).to({y:163.8},0).wait(1).to({x:150.5,y:162.7},0).wait(1).to({y:161.9},0).wait(1).to({y:161.3},0).wait(1).to({y:160.8},0).wait(1).to({y:160.5},0).wait(1).to({y:160.3},0).wait(1).to({regX:146,regY:213.5,x:156.5,y:377.8},0).to({y:365.3},74).wait(1).to({regX:140,regY:-4,x:150.5,y:147.6},0).wait(1).to({x:150.4,y:147.1},0).wait(1).to({x:150.3,y:146.2},0).wait(1).to({x:150.2,y:144.6},0).wait(1).to({x:150,y:142.3},0).wait(1).to({x:149.7,y:139.7},0).wait(1).to({x:149.5,y:137.5},0).wait(1).to({x:149.3,y:136.1},0).wait(1).to({y:135.4},0).wait(1).to({regX:146,regY:213.5,x:155.3,y:352.8},0).wait(1).to({regX:140,regY:-4,x:149.3,y:136.8},0).wait(1).to({y:142},0).wait(1).to({x:149.4,y:151.8},0).wait(1).to({x:149.6,y:167.3},0).wait(1).to({x:149.8,y:190.1},0).wait(1).to({x:150.2,y:220.9},0).wait(1).to({x:150.5,y:258.2},0).wait(1).to({x:150.9,y:295.9},0).wait(1).to({x:151.3,y:327.2},0).wait(1).to({x:151.5,y:349.5},0).wait(1).to({x:151.7,y:363.3},0).wait(1).to({y:370.6},0).wait(1).to({regX:146,regY:213.5,x:157.8,y:590.3},0).wait(326));

	// bg
	this.instance_15 = new lib.db_bg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.7,126,427.6,600);
// library properties:
lib.properties = {
	id: 'ADD1D3B8A0A746C6B4DBBBB4ED094B0A',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_bg.jpg", id:"db_bg"},
		{src:"images/kft_300x250_seal_atlas_P_.png", id:"kft_300x250_seal_atlas_P_"}
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
an.compositions['ADD1D3B8A0A746C6B4DBBBB4ED094B0A'] = {
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