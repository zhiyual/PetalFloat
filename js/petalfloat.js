var PF = {};

(function () {
	function pf (option) {
		if (!option) {option = {};}
		// 花瓣列表
//		{
//			x : 0,
//			y : 0,
//			_alpha : 1,
//			_rotate : 0,
//			_scale : 0.6,
//			vx : 0.5,
//			vy : 0.5,
//			va : 0.001,
//			vr : 1,
//			life : 700,
//		}
		this._plist = [];
		
		
		this._path = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAWCAYAAAC2ew6NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUY2RkM2MzQ2NTcyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQ0M3NzgwODI4QkQxMUU4QTk1N0QwMEMxRjNFMzNEMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQ0M3NzgwNzI4QkQxMUU4QTk1N0QwMEMxRjNFMzNEMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFGNkZDNjM0NjU3MjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFGNkZDNjM0NjU3MjciLz4gPC9yZGY6RGVzY3Jp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"
		this._img = null;
		this._win = {
			w : window.innerWidth,
			h : window.innerHeight,
		}
		this._index = option.index || 99999;
		this.box = null;
		this.stage = null;
		this._anmition = null;
		this._time = null;
		this._maxtime = option.life || 30;
	}
	
	PF = pf;
	
	pf.prototype.init = function () {
		if (this.box) {return;}
		this._img = document.createElement("img");
		this._img.src = this._path;
		this.box = document.createElement("canvas");
		this.box.width = this._win.w;
		this.box.height = this._win.h;
		this.box.style.cssText = "display: block;position: fixed;top: 0;left: 0;margin: 0;padding: 0;border: none;background: none;pointer-events: none;";
		this.box.style.zIndex = this._index;
		document.body.appendChild(this.box);
		this.stage = this.box.getContext("2d");
	}
	
	pf.prototype.reSize = function () {
		this._win.w = window.innerWidth;
		this._win.h = window.innerHeight;
		this.box.width = this._win.w;
		this.box.height = this._win.h;
	}
	
	pf.prototype.action = function () {
		for (var i=0;i<this._plist.length;i++) {
			this._plist[i].life--;
			if (this._plist[i].life <= 0) {
				this._plist.splice(i, 1);
				i--;
				continue;
			}
			this._plist[i].x += this._plist[i].vx;
			this._plist[i].y += this._plist[i].vy;
			this._plist[i]._rotate += this._plist[i].vr;
			this._plist[i]._alpha += this._plist[i].va;
		}
	}
	
	pf.prototype.render = function (k) {
		this.action();
		if (this._time++ >= this._maxtime) {
			this._time = 0;
			this.addImg();
			this.addImg();
		}
		
//		console.log(this._plist)
		
		this.stage.clearRect(0, 0, this.box.width, this.box.height);
		for (var i=0;i<this._plist.length;i++) {
			this.drawImg(this._plist[i]);
		}
		if (k) {
			this._anmition = requestAnimationFrame(function () {
				this.render(1);
			}.bind(this));
		}
	}
	
	pf.prototype.addImg = function () {
		if (Math.random() >= 0.5) {
			var px = 0;
			var py = Math.floor(Math.random()*this._win.h)
		} else{
			var py = 0;
			var px = Math.floor(Math.random()*this._win.w)
		}
		
		if (px > 0 && py > 0) {
			debugger
		}
		
		this._plist.push({
			x : px,
			y : py,
			_alpha : 0.8,
			_rotate : 0,
			_scale : Math.random()*0.5+0.5,
			vx : Math.random()*2+0.2,
			vy : Math.random()+0.2,
			va : -0.0002,
			vr : -(Math.random()*1+1),
			life : Math.floor(Math.random()*200)+800,
		})
	}
	
	pf.prototype.start = function () {
		for (var i=0;i<4;i++) {
			this.addImg();
		}
		
		this.render(1);
	}
	
	pf.prototype.stop = function () {
		cancelAnimationFrame(this._anmition);
	}
	
	pf.prototype.drawImg = function (param) {
		var img_w = this._img.width * param._scale;
		var img_h = this._img.height * param._scale;
		
		this.stage.translate(param.x+img_w/2, param.y+img_h/2);
		this.stage.globalAlpha = param._alpha;
		this.stage.rotate(-(Math.PI/180*param._rotate));
		
		this.stage.drawImage(this._img, 0-img_w, 0-img_h, img_w, img_h);
		
		this.stage.rotate(Math.PI/180*param._rotate);
		this.stage.globalAlpha = 1;
		this.stage.translate(-(param.x+img_w/2), -(param.y+img_h/2));
	}
	
})();

