(function($) {
	var old = $.fn.drag;
 
	function Drag(element, options) {
		this.ver = '1.0';
		this.$element = $(element);
		this.options = $.extend({}, $.fn.drag.defaults, options);
		this.init();
	}
 
	Drag.prototype = {
		constructor: Drag,
		init: function() {
			var options = this.options;
 
			this.$element.on('touchstart.drag.founder mousedown.drag.founder', function(e) {
				var ev = e.type == 'touchstart' ? e.originalEvent.touches[0] : e,
					startPos = $(this).position(),
					disX = ev.pageX - startPos.left,
					disY = ev.pageY - startPos.top,
					that = this;
 
				//记录初始位置,以便复位使用
				$(this).data('startPos', startPos);
 
				if (options.before && $.isFunction(options.before)) {
					options.before.call(that, ev);
				}
 
				$(document).on('touchmove.drag.founder mousemove.drag.founder', function(e) {
					var ev = e.type == 'touchmove' ? e.originalEvent.touches[0] : e,
						$this = $(that),
						$parent = $this.offsetParent(),
						$parent=$parent.is(':root')?$(window):$parent,
						pPos = $parent.offset(),
						pPos=pPos?pPos:{left:0,top:0},
						left = ev.pageX - disX - pPos.left,
						top = ev.pageY - disY - pPos.top,
						r = $parent.width() - $this.outerWidth(true),
						d = $parent.height() - $this.outerHeight(true);
 
					left = left < 0 ? 0 : left > r ? r : left;
					top = top < 0 ? 0 : top > d ? d : top;
 				// 	var win = $(document).height();
					// if(win>=812){
					// 	left = left < 0 ? 30 : left > r ? r-30 : left;
					// }else{
					// 	left = left < 0 ? 10 : left > r ? r-10 : left;
					// 	top = top < 0 ? 0 : top > d ? d : top;
					// }

					$(that).css({
						left: left + 'px',
						// top: top + 'px'
					});
 
					if (options.process && $.isFunction(options.process)) {
						options.process.call(that, ev);
					}
 
					e.preventDefault();
				});
 
				$(document).on('touchend.drag.founder mouseup.drag.founder', function(e) {
					var ev = e.type == 'touchend' ? e.originalEvent.changedTouches[0] : e;
 
					if (options.end && $.isFunction(options.end)) {
						options.end.call(that, ev);
					}
 
					$(document).off('.drag.founder');
				});
			
			    e.preventDefault();
			});
		}
	};
 
	//jQ插件模式
	$.fn.drag = function(options) {
		return this.each(function() {
			var $this = $(this),
				instance = $this.data('drag');
 
			if (!instance) {
				instance = new Drag(this, options);
				$this.data('drag', instance);
			} else {
				instance.init();
			}
 
			if (typeof options === 'string') {
				//instance.options[options].call(this);
			}
 
		});
	};
 
	$.fn.drag.defaults = {
		before: $.noop,
		process: $.noop,
		end: $.noop
	};
 
	$.fn.drag.noConflict = function() {
		$.fn.drag = old;
		return this;
	};
})(jQuery);


