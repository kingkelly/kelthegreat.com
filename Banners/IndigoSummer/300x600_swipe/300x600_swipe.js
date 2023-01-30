(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.db_swipe = function() {
	this.initialize(img.db_swipe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);// helper functions:

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// indigologo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#514E4C").s().p("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");
	this.shape.setTransform(123.1,114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-39.2,21.4,324.8,185.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#514E4C").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(194.9,93.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#514E4C").s().p("Ag1BHIAAgJIAOgCQAHgCAAgMIAAhSQgBgMgGgEQgFgEgKAAIAAgJIAvgEIACADIAAAUIACAAQARgYAWAAQAIAAAGAGQAFAGAAAIQABAJgFAGQgFAFgIABQgOAAAAgPIACgKQgLABgJAHQgGAGgFAHIAABOQAAAKAIAEQAGACAOABIAAAJg");
	this.shape_1.setTransform(185.5,87.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#514E4C").s().p("AgvA2QgVgVAAggQAAggATgVQATgUAfAAQAfAAATAUQASAUAAAfQAAAfgSAVQgUAWggAAQgcAAgSgTgAgegqQgIAQAAAZQAAAcAJARQALATASAAQAUAAAJgTQAKgRAAgbQAAgagIgRQgKgTgVAAQgTAAgLAUg");
	this.shape_2.setTransform(171.2,88);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#514E4C").s().p("AAMBwIAAgJIAPgCQAIgCAAgMIAAhEQAAgQgIgHQgHgJgKAAQgOAAgLAJQgIAEgEAHIAABPQAAAJAIAFQAHACAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgMIAAikQgBgNgHgEQgFgDgPgCIAAgJIA1gDIACACIAABoIABAAQANgNAGgEQAMgIARAAQAoAAAAAvIAABFQAAAKAIAEQAGACAHABIAAAJg");
	this.shape_3.setTransform(154.2,83.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#514E4C").s().p("AgWAzIAAhVIgcAAIAAgOIAcAAIAAgrIAZAAIAAArIAoAAIAAAOIgnAAIAABRQAAAcAVAAQAOAAADgXIAKAAQgCASgJAKQgKAMgSAAQgjAAAAgpg");
	this.shape_4.setTransform(140.7,86);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#514E4C").s().p("Ag4AXIAAg/QgBgJgHgFQgFgEgKAAIAAgKIAwgDIACACIAABfQAAAOAIAJQAGAIAKAAQAXAAAMgVIAAhNQAAgKgHgEQgEgDgQAAIAAgKIA1gDIACACIAABsQABAKAHAFQADACALABIAAAJIgvADIgCgCIAAgTIgBAAQgMANgHAEQgLAHgRAAQgnAAAAgxg");
	this.shape_5.setTransform(126.8,88.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#514E4C").s().p("Ag7BAQgKgJAAgPQAAgdAdgLIAcgJIAXgJIAAgOQAAgKgEgHQgHgNgOAAQgNAAgHAHQADAMAAAHQAAAFgFAEQgFAEgIAAQgNAAAAgRQAAgNAQgJQAPgKASAAQAZAAALAHQAPALAAAcIgBBDQAAAFADAEQADAHAHgBQAKABABgXIAJAAQgCAngfAAQgTgBgHgTIgBAAQgRAUgbAAQgQAAgJgJgAgZAIQgPAKAAARQAAAXAVgBQARABAMgQIABgwQgZAGgLAIg");
	this.shape_6.setTransform(111.6,88);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#514E4C").s().p("AAmBGIgkhfIgZBAQgHARgEAOIgKAAIgwhzQgDgGgGgEQgGgEgHgBIAAgJIBBAAIAAAJQgQABAAAGIACAGIAfBOIABAAIAbhGIgDgIQgHgMgNgBIAAgJIA8AAIAAAJQgPABAAAFIACAHIAeBOIABAAIAbhJIACgIQAAgFgHgDQgHgCgFAAIAAgJIA2AAIAAAJQgHAAgGAFQgIAFgDAIIghBRIgKAfg");
	this.shape_7.setTransform(85.3,88.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#514E4C").s().p("AgtAzQgRgTAAggQABgdAQgVQATgWAcAAQAdAAAPASQAOAPAAAaIAAAHIhdAAQAABAAvAAQAOAAAJgHQAIgGAIgOIAJAGQgHAQgQAKQgPAKgTAAQggAAgSgWgAgWgyQgKAOgBAUIA/AAQAAgugdAAQgNAAgKAMg");
	this.shape_8.setTransform(67.1,88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#514E4C").s().p("AAKBHIAAgJIAOgCQAIgCAAgLIAAhEQAAgPgIgJQgHgIgKAAQgNAAgMAIQgIAFgEAIIAABNQAAAKAJAEQAGACAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgLIAAhTQgBgLgHgFQgFgDgKgBIAAgJIAwgDIACACIAAAUIABAAQANgMAGgEQAMgIARAAQApAAAAAvIAABFQAAAJAHAEQAGADAIAAIAAAJg");
	this.shape_9.setTransform(51.1,87.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#514E4C").s().p("AgtAzQgQgTAAggQAAgdAQgVQATgWAcAAQAeAAAPASQANAPgBAaIAAAHIhbAAQAABAAuAAQAOAAAJgHQAIgGAIgOIAJAGQgHAQgPAKQgQAKgTAAQggAAgSgWgAgWgyQgJAOgBAUIA/AAQAAgugdAAQgOAAgKAMg");
	this.shape_10.setTransform(205.2,53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#514E4C").s().p("AgXAzIAAhVIgbAAIAAgOIAcAAIAAgrIAZAAIAAArIAoAAIAAAOIgnAAIAABRQgBAcAWAAQAOAAACgXIAKAAQgBASgKAKQgKAMgRAAQgkAAAAgpg");
	this.shape_11.setTransform(192.7,51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#514E4C").s().p("AggBsIAAgJIANgDQAJgCAAgLIAAhTQgBgKgIgFQgGgEgLgBIAAgJIAygDIACACIAABwQAAAJAIAEQAHADAGABIAAAJgAgMhLQgGgGAAgGQAAgJAGgFQAFgGAHABQAIAAAFAEQAGAGAAAHQAAAIgGAGQgFAFgIABQgHgBgFgFg");
	this.shape_12.setTransform(183.1,49.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#514E4C").s().p("Ag1BHIAAgJIAOgCQAHgDABgLIAAhTQgCgLgGgEQgFgDgLgBIAAgJIAxgEIACADIAAAUIABAAQARgYAVAAQAIAAAHAGQAFAFABAJQAAAJgFAFQgFAHgHAAQgPAAAAgPIABgKQgKABgKAHQgGAGgDAHIAABOQAAAKAHAEQAGACAOABIAAAJg");
	this.shape_13.setTransform(173.2,52.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#514E4C").s().p("Ag4AXIAAg/QgBgJgHgFQgFgEgKAAIAAgKIAwgDIACACIAABfQAAAOAIAJQAGAIAKAAQAXAAAMgVIAAhNQAAgJgHgFQgEgCgQgBIAAgKIA1gDIACACIAABsQABAKAHAFQADACALABIAAAJIgvADIgCgCIAAgTIgBAAQgMANgHADQgLAIgRAAQgnAAAAgxg");
	this.shape_14.setTransform(158.1,53.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#514E4C").s().p("AgvA2QgVgVAAggQAAggATgVQATgUAfAAQAfAAATAUQASAUAAAfQAAAfgSAVQgTAWggAAQgcAAgTgTgAgegqQgIAQAAAZQAAAcAJARQALATATAAQASAAAKgTQAKgRAAgbQAAgagJgRQgJgTgUAAQgVAAgKAUg");
	this.shape_15.setTransform(141.7,53);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#514E4C").s().p("AgFBGIgvhzQgFgNgSgCIAAgJIBEAAIAAAJQgSABAAAGIACAGIAfBPIACAAIAehJIABgJQABgIgVgCIAAgJIA2AAIAAAIQgQADgGAOIgjBSQgHAPgFARg");
	this.shape_16.setTransform(126.8,53.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#514E4C").s().p("Ag7BAQgKgJAAgPQAAgdAdgLIAcgJIAXgJIAAgOQAAgKgEgHQgHgNgOAAQgNAAgHAHQADAMAAAHQAAAFgFAEQgFAEgIAAQgNAAAAgRQAAgMAQgKQAPgKASAAQAZAAALAIQAPAKAAAcIgBBDQAAAFADAEQADAHAHgBQAKABABgXIAJAAQgCAngfAAQgTgBgHgTIgBAAQgRAUgbAAQgQAAgJgJgAgZAIQgPAKAAARQAAAXAVgBQARABAMgPIABgxQgZAHgLAHg");
	this.shape_17.setTransform(112.8,53);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#514E4C").s().p("Ag2BwIAAgJIAOgCQAIgDAAgLIAAhjIgeAAIAAgNIAeAAIAAgGQAAgoAUgWQARgSAaAAQAQAAAIAIQAIAHAAALQAAAFgEAFQgFAGgHAAQgGAAgGgDQgFgDAAgIIABgQQgCgCgFAAQgPAAgGANQgHAOAAAhIgBAQIAkAAIAAANIgkAAIAABiQAAAKAHAEQAGACAOABIAAAJg");
	this.shape_18.setTransform(101.5,48.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#514E4C").s().p("Ag1BHIAAgJIAOgCQAHgDABgLIAAhTQgCgLgGgEQgGgDgKgBIAAgJIAwgEIADADIAAAUIABAAQARgYAVAAQAIAAAHAGQAFAFAAAJQABAJgFAFQgFAHgHAAQgQAAABgPIABgKQgKABgJAHQgHAGgDAHIAABOQgBAKAIAEQAGACAOABIAAAJg");
	this.shape_19.setTransform(82.2,52.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#514E4C").s().p("Ag4AXIAAg/QgBgJgHgFQgFgEgKAAIAAgKIAwgDIACACIAABfQAAAOAIAJQAGAIAKAAQAXAAAMgVIAAhNQAAgJgHgFQgEgCgQgBIAAgKIA1gDIACACIAABsQABAKAHAFQADACALABIAAAJIgvADIgCgCIAAgTIgBAAQgMANgHADQgLAIgRAAQgnAAAAgxg");
	this.shape_20.setTransform(67.1,53.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#514E4C").s().p("AgwA2QgUgVAAggQAAggATgVQATgUAfAAQAfAAATAUQASAUAAAfQAAAfgSAVQgTAWggAAQgcAAgUgTgAgegqQgIAQAAAZQAAAcAJARQAKATAUAAQASAAAKgTQAKgRAAgbQAAgagJgRQgKgTgTAAQgVAAgKAUg");
	this.shape_21.setTransform(50.7,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#514E4C").s().p("AhCBjQgHgGAAgKQgBgHAFgFQAFgGAHAAQAQAAAAAPIAAAIQATgEARgxIguhxQgGgNgRgCIAAgJIBCAAIAAAJQgRABAAAGIADAGIAfBQIABAAIAehKIABgJQAAgEgHgDQgHgDgFAAIAAgJIA1AAIAAAIQgFABgGAFQgJAFgCAGIghBOIgQAnQgSAqgMAMQgJAJgQAAQgIAAgHgEg");
	this.shape_22.setTransform(35.9,56.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#514E4C").s().p("AAKBHIAAgJIAOgCQAIgCAAgLIAAhEQAAgPgIgJQgHgIgKAAQgNAAgMAIQgIAFgEAIIAABNQAAAKAJAEQAGACAIABIAAAJIhHAAIAAgJIANgCQAIgCAAgLIAAhTQgBgLgHgFQgFgDgKgBIAAgJIAwgDIACACIAAAUIABAAQANgMAGgEQAMgIARAAQApAAAAAvIAABFQAAAJAHAEQAGADAIAAIAAAJg");
	this.shape_23.setTransform(206.9,17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#514E4C").s().p("AgwA2QgUgVAAggQAAggATgVQATgUAfAAQAfAAATAUQASAUAAAfQAAAfgSAVQgUAWgfAAQgdAAgTgTgAgegqQgIAQAAAZQAAAcAJARQAKATAUAAQASAAALgTQAJgRAAgbQAAgagJgRQgKgTgTAAQgUAAgLAUg");
	this.shape_24.setTransform(190.1,18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#514E4C").s().p("AgWAzIAAhVIgdAAIAAgOIAdAAIAAgrIAZAAIAAArIAoAAIAAAOIgnAAIAABRQAAAcAVAAQAOAAADgXIAKAAQgCASgJAKQgLAMgRAAQgkAAABgpg");
	this.shape_25.setTransform(169.8,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#514E4C").s().p("AAMBwIAAgJIAPgCQAIgDAAgLIAAhEQAAgPgIgJQgHgHgKgBQgOABgLAHQgIAFgEAIIAABOQAAAJAIAFQAHACAIABIAAAJIhHAAIAAgJIANgCQAIgDAAgLIAAikQgBgNgHgFQgFgCgPgBIAAgJIA1gEIACADIAABnIABAAQANgMAGgFQAMgHARgBQAoABAAAuIAABFQAAAKAIAEQAGADAHAAIAAAJg");
	this.shape_26.setTransform(155.6,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#514E4C").s().p("AhJBEQAAgOAKgJQALgKAXAAIAAgCQgcgJAAgSQAAgPAYgJIAAgCQgggOAAgaQABgUAQgMQAOgMAXAAQAUAAAUAJQAPgJAQAAQAFAAAEAEQAFAEAAAHQAAAOgNAAQgNAAABgSQgMAAgHAGIAAAAQALANAAAQQAAATgQANQgPAMgTAAIgRAAQgLADAAAJQAAAJALADQAFACARAAIAhACQAOABALAKQANAMAAASQgBAWgRAOQgVAOgkAAQhBAAAAglgAgpAxQgGAHAAANQgBAKAKAHQAMAJAYAAQAtAAAAgiQAAgQgQgFQgPgCgeAAQgQADgHAIgAgkg8QAAAQAHAKQAHAKALAAQALAAAHgLQAGgJABgPQAAgjgaAAQgYAAAAAig");
	this.shape_27.setTransform(139.9,21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#514E4C").s().p("AggBsIAAgJIANgDQAJgCAAgLIAAhTQgBgKgIgFQgGgEgLgBIAAgJIAygDIACACIAABwQAAAKAIADQAHADAGABIAAAJgAgMhLQgGgGAAgGQAAgJAGgFQAFgGAHABQAIAAAFAEQAGAGAAAHQAAAIgGAGQgFAFgIABQgHgBgFgFg");
	this.shape_28.setTransform(127.5,14.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#514E4C").s().p("Ag1BHIAAgJIAOgCQAHgDAAgLIAAhTQgBgLgGgEQgGgDgJgBIAAgJIAvgDIACACIAAAUIACAAQARgYAVAAQAJAAAGAGQAFAFAAAJQABAJgFAFQgFAHgIAAQgOAAAAgPIACgKQgLAAgJAIQgGAGgFAHIAABOQAAAKAIAEQAGACAOABIAAAJg");
	this.shape_29.setTransform(117.5,17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#514E4C").s().p("AgtAzQgQgTAAggQAAgdARgVQASgWAcAAQAeAAAOASQANAPAAAaIAAAHIhcAAQABBAAtAAQAPAAAJgHQAIgGAJgOIAJAGQgJAQgPAKQgPAKgTAAQggAAgSgWgAgWgyQgKANgBAVIA/gBQAAgtgdAAQgNAAgKAMg");
	this.shape_30.setTransform(97.1,18);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#514E4C").s().p("AhNBpIAAgJIARgDQAIgCAAgLIAAiXQgBgKgHgFQgGgDgLgBIAAgJIAygDIACACIAAAPIABAAQASgTAVAAQAbAAARAUQATAVAAAhQAAAegVAVQgUAUgbAAQgVAAgNgJIgBAAIAAAuQAAAKAIAEQAJADALABIAAAJgAgZhKIAABSQADAJAHAGQAKAIAMAAQASAAALgQQALgQAAgdQAAgYgKgQQgLgTgVAAQgRAAgNAPg");
	this.shape_31.setTransform(81,21.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#514E4C").s().p("AggBsIAAgJIANgDQAJgCAAgLIAAhTQgBgKgIgFQgGgEgLgBIAAgJIAygDIACACIAABwQAAAKAIADQAHADAGABIAAAJgAgMhLQgGgGAAgGQAAgJAGgFQAFgGAHABQAIAAAFAEQAGAGAAAHQAAAIgGAGQgFAFgIABQgHgBgFgFg");
	this.shape_32.setTransform(68.4,14.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#514E4C").s().p("AAmBGIgkhfIgZBAIgLAfIgLAAIgvhzQgDgGgGgEQgGgEgHgBIAAgJIBBAAIAAAJQgQABAAAGIACAGIAgBOIABAAIAahGIgDgIQgHgMgOgBIAAgJIA9AAIAAAJQgPABAAAFIACAHIAeBOIABAAIAbhJIACgIQAAgFgHgDQgHgCgFAAIAAgJIA2AAIAAAJQgHAAgGAFQgJAFgCAIIggBRIgLAfg");
	this.shape_33.setTransform(53.1,18.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#514E4C").s().p("AgvBbIgLAOIgKAAIgDhJIAKAAQALAdANAOQASATAYAAQAlAAAAgkQAAgbgbgLIgrgSQglgPABglQAAgYARgQQASgPAaAAQAYAAAUAOIAKgOIAKAAIABBHIgJAAQgKgegLgMQgPgRgZAAQgKAAgIAGQgMAHAAAQQAAAWAaAOQANAIAaAJQAXAKAJAKQAMANAAAWQABAbgVASQgUARgdAAQgfAAgSgPg");
	this.shape_34.setTransform(33.6,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,240.8,104), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.db_swipe();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,600,1200), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVATIAGgGQACADAGADQAEACADAAQALAAAAgIQAAgEgFgDIgDgBIgDgCIgIgDQgJgDAAgKQgBgHAGgEQAFgFAIAAQAMAAAHAIIgFAHQgFgGgJAAQgIAAAAAHQAAAFAKADIAIADIAHADQAEAEAAAHQAAAIgGAFQgGAFgKAAQgOAAgHgLg");
	this.shape.setTransform(94.7,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAqIgSgcIgHAGIAAAWIgLAAIAAhSIALAAIAAAvIAWgWIANAAIgVAVIAZAkg");
	this.shape_1.setTransform(88.9,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAGgGQAFgGAAgIQAAgIgFgGQgGgFgIAAQgHAAgGAFg");
	this.shape_2.setTransform(81,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAVQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAJAJQAIAIAAAMQAAANgIAIQgJAJgNAAQgMAAgJgJgAgNgOQgFAGAAAIQAAAIAFAGQAGAGAHAAQAIAAAGgGQAFgGAAgIQAAgIgFgGQgGgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(73.2,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbAqIAAhSIAWAAQANAAAGADQAJAGAAAMQAAAGgEAFQgDAFgGACIAAAAQASACAAARQAAALgIAHQgHAFgNABgAgQAgIANAAQAJAAAFgDQAFgEAAgIQAAgGgFgFQgFgDgJAAIgNAAgAgQgFIAKAAQAIAAAEgDQAFgEAAgGQAAgIgFgCQgEgDgHAAIgLAAg");
	this.shape_4.setTransform(65.5,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAVQgIgIAAgNQAAgNAJgIQAIgIALAAQAMAAAHAIQAIAHAAAMIgBAEIgrAAQABAJAFAFQAFAFAHAAQAHAAAGgDIAGgEIAFAHIgBAAQgIAJgRAAQgLAAgIgJgAARgEQAAgGgFgFQgDgGgJAAQgGAAgEAGQgFAFAAAGIAgAAIAAAAg");
	this.shape_5.setTransform(57.7,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAqIAAhSIAYAAQAMAAAHAFQAIAHAAALQAAALgIAGQgHAGgMAAIgMAAIAAAkgAgNgCIALAAQAGAAAFgEQAFgDAAgIQAAgHgFgEQgFgDgGAAIgLAAg");
	this.shape_6.setTransform(47.2,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAfQgNgMAAgTQAAgSANgMQAMgMARAAQASAAAMAMQANAMAAASQAAATgNAMQgMAMgSAAQgRAAgMgMgAgVgXQgJAJAAAOQAAAOAJAJQAJAJAMAAQANAAAJgJQAJgJAAgOQAAgOgJgJQgJgJgNAAQgMAAgJAJg");
	this.shape_7.setTransform(38.1,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWAqIAAgnIgrAAIAAAnIgMAAIAAhSIAMAAIAAAiIArAAIAAgiIAMAAIAABSg");
	this.shape_8.setTransform(28.1,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAlIgJgIIAHgIQAJAMALAAQAHAAAFgEQAEgEAAgGQAAgGgGgEIgEgCIgDgCIgNgFQgEgCgEgDQgFgGAAgJQAAgJAHgHQAIgGALAAQANAAAKALIgGAIQgJgJgJAAQgFAAgFADQgDADAAAGQAAAFADADIAHAEIAPAHQAFABAEAEQAFAHAAAHQAAALgJAHQgIAHgLAAQgKAAgIgGg");
	this.shape_9.setTransform(19.6,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#514E4C").s().p("AoHCOIAAkbIQPAAIAAEbg");
	this.shape_10.setTransform(57.4,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(5.4,-1.2,104,28.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,600,1200), null);


// stage content:
(lib._300x600_swipe = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lgoo
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,265,0.5,0.5,0,0,0,119,68);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).wait(1).to({regX:123.1,regY:114,x:152.1,y:288,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:287.9,alpha:0.008},0).wait(1).to({alpha:0.015},0).wait(1).to({y:287.8,alpha:0.026},0).wait(1).to({y:287.7,alpha:0.04},0).wait(1).to({y:287.5,alpha:0.059},0).wait(1).to({y:287.3,alpha:0.084},0).wait(1).to({y:287,alpha:0.117},0).wait(1).to({y:286.6,alpha:0.163},0).wait(1).to({y:286.1,alpha:0.225},0).wait(1).to({y:285.4,alpha:0.312},0).wait(1).to({y:284.5,alpha:0.421},0).wait(1).to({y:283.5,alpha:0.532},0).wait(1).to({y:282.8,alpha:0.624},0).wait(1).to({y:282.2,alpha:0.695},0).wait(1).to({y:281.7,alpha:0.75},0).wait(1).to({y:281.3,alpha:0.795},0).wait(1).to({y:281,alpha:0.831},0).wait(1).to({y:280.8,alpha:0.86},0).wait(1).to({y:280.6,alpha:0.885},0).wait(1).to({y:280.4,alpha:0.906},0).wait(1).to({y:280.2,alpha:0.924},0).wait(1).to({y:280.1,alpha:0.939},0).wait(1).to({y:280,alpha:0.952},0).wait(1).to({y:279.9,alpha:0.962},0).wait(1).to({y:279.8,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:279.7,alpha:0.985},0).wait(1).to({alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:279.6,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regX:119,regY:68,x:150,y:256.6},0).wait(161));

	// Layer_3
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,194.2,1,1,0,0,0,57.3,8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(1).to({regY:13.1,y:199.3,alpha:0.001},0).wait(1).to({alpha:0.003},0).wait(1).to({y:199.2,alpha:0.008},0).wait(1).to({y:199.1,alpha:0.015},0).wait(1).to({y:199,alpha:0.026},0).wait(1).to({y:198.8,alpha:0.04},0).wait(1).to({y:198.6,alpha:0.059},0).wait(1).to({y:198.3,alpha:0.084},0).wait(1).to({y:197.9,alpha:0.117},0).wait(1).to({y:197.3,alpha:0.163},0).wait(1).to({y:196.6,alpha:0.225},0).wait(1).to({y:195.6,alpha:0.312},0).wait(1).to({y:194.2,alpha:0.421},0).wait(1).to({y:192.9,alpha:0.532},0).wait(1).to({y:191.8,alpha:0.624},0).wait(1).to({y:191,alpha:0.695},0).wait(1).to({y:190.3,alpha:0.75},0).wait(1).to({y:189.8,alpha:0.795},0).wait(1).to({y:189.3,alpha:0.831},0).wait(1).to({y:189,alpha:0.86},0).wait(1).to({y:188.7,alpha:0.885},0).wait(1).to({y:188.4,alpha:0.906},0).wait(1).to({y:188.2,alpha:0.924},0).wait(1).to({y:188,alpha:0.939},0).wait(1).to({y:187.9,alpha:0.952},0).wait(1).to({y:187.8,alpha:0.962},0).wait(1).to({y:187.6,alpha:0.971},0).wait(1).to({alpha:0.979},0).wait(1).to({y:187.5,alpha:0.985},0).wait(1).to({y:187.4,alpha:0.99},0).wait(1).to({alpha:0.994},0).wait(1).to({y:187.3,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:1},0).wait(1).to({regY:8,y:182.2},0).wait(22).to({regX:57.4,scaleX:0.88,scaleY:0.88,x:150.1,alpha:0.699},3).to({regX:57.3,scaleX:1,scaleY:1,x:150,alpha:1},5).wait(135));

	// Layer_2
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-89.9,156.4,1,1,0,0,0,120.4,52);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:120.7,regY:48.9,x:-89.5,y:153.3},0).wait(1).to({x:-89.2,alpha:0.002},0).wait(1).to({x:-88.7,alpha:0.004},0).wait(1).to({x:-88,alpha:0.007},0).wait(1).to({x:-87,alpha:0.011},0).wait(1).to({x:-85.7,alpha:0.016},0).wait(1).to({x:-84,alpha:0.023},0).wait(1).to({x:-81.9,alpha:0.032},0).wait(1).to({x:-79.4,alpha:0.043},0).wait(1).to({x:-76.2,alpha:0.056},0).wait(1).to({x:-72.5,alpha:0.071},0).wait(1).to({x:-67.8,alpha:0.091},0).wait(1).to({x:-62.2,alpha:0.114},0).wait(1).to({x:-55.3,alpha:0.143},0).wait(1).to({x:-46.7,alpha:0.179},0).wait(1).to({x:-35.9,alpha:0.224},0).wait(1).to({x:-22.4,alpha:0.28},0).wait(1).to({x:-6,alpha:0.348},0).wait(1).to({x:12.5,alpha:0.425},0).wait(1).to({x:31.1,alpha:0.503},0).wait(1).to({x:47.8,alpha:0.572},0).wait(1).to({x:62,alpha:0.631},0).wait(1).to({x:73.8,alpha:0.681},0).wait(1).to({x:83.8,alpha:0.723},0).wait(1).to({x:92.3,alpha:0.758},0).wait(1).to({x:99.6,alpha:0.788},0).wait(1).to({x:105.9,alpha:0.814},0).wait(1).to({x:111.4,alpha:0.837},0).wait(1).to({x:116.2,alpha:0.858},0).wait(1).to({x:120.5,alpha:0.875},0).wait(1).to({x:124.3,alpha:0.891},0).wait(1).to({x:127.7,alpha:0.905},0).wait(1).to({x:130.7,alpha:0.918},0).wait(1).to({x:133.4,alpha:0.929},0).wait(1).to({x:135.8,alpha:0.939},0).wait(1).to({x:137.9,alpha:0.948},0).wait(1).to({x:139.8,alpha:0.956},0).wait(1).to({x:141.5,alpha:0.963},0).wait(1).to({x:143,alpha:0.969},0).wait(1).to({x:144.3,alpha:0.975},0).wait(1).to({x:145.5,alpha:0.98},0).wait(1).to({x:146.5,alpha:0.984},0).wait(1).to({x:147.4,alpha:0.988},0).wait(1).to({x:148.1,alpha:0.991},0).wait(1).to({x:148.8,alpha:0.993},0).wait(1).to({x:149.3,alpha:0.995},0).wait(1).to({x:149.7,alpha:0.997},0).wait(1).to({x:150,alpha:0.998},0).wait(1).to({x:150.2,alpha:0.999},0).wait(1).to({x:150.3,alpha:1},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:156.4},0).wait(35).to({regX:120.7,regY:48.9,x:150.4,y:153.2},0).wait(1).to({y:152.7},0).wait(1).to({y:151.9},0).wait(1).to({y:150.5},0).wait(1).to({y:148.4},0).wait(1).to({y:144.9},0).wait(1).to({y:139.2},0).wait(1).to({y:129.9},0).wait(1).to({y:119.5},0).wait(1).to({y:112},0).wait(1).to({y:106.9},0).wait(1).to({y:103.3},0).wait(1).to({y:100.6},0).wait(1).to({y:98.6},0).wait(1).to({y:97.1},0).wait(1).to({y:95.9},0).wait(1).to({y:95},0).wait(1).to({y:94.3},0).wait(1).to({y:93.8},0).wait(1).to({y:93.5},0).wait(1).to({y:93.4},0).wait(1).to({regX:120.4,regY:52,x:150.1,y:96.4},0).wait(181));

	// img
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,300.1,0.567,0.567,0,0,0,299.9,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:300,scaleX:0.5,scaleY:0.5,y:300},287).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,259.9,530.5,680.4);
// library properties:
lib.properties = {
	id: 'C6DEDD3BCFB2443587B0868CA58F5C2E',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/db_swipe.jpg", id:"db_swipe"}
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
an.compositions['C6DEDD3BCFB2443587B0868CA58F5C2E'] = {
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