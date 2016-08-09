"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),Carousel=function(e){var t="carousel",i="4.0.0-alpha",n="bs.carousel",s="."+n,a=".data-api",l=e.fn[t],r=600,o={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},u={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h={NEXT:"next",PREVIOUS:"prev"},c={SLIDE:"slide"+s,SLID:"slid"+s,KEYDOWN:"keydown"+s,MOUSEENTER:"mouseenter"+s,MOUSELEAVE:"mouseleave"+s,LOAD_DATA_API:"load"+s+a,CLICK_DATA_API:"click"+s+a},d={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},_={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},v=function(){function a(t,i){_classCallCheck(this,a),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(i),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(_.INDICATORS)[0],this._addEventListeners()}return _createClass(a,[{key:"next",value:function(){this._isSliding||this._slide(h.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(h.PREVIOUS)}},{key:"pause",value:function(t){t||(this._isPaused=!0),e(this._element).find(_.NEXT_PREV)[0]&&Util.supportsTransitionEnd()&&(Util.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(e.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(t){var i=this;this._activeElement=e(this._element).find(_.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0)){if(this._isSliding)return void e(this._element).one(c.SLID,function(){return i.to(t)});if(n===t)return this.pause(),void this.cycle();var s=t>n?h.NEXT:h.PREVIOUS;this._slide(s,this._items[t])}}},{key:"dispose",value:function(){e(this._element).off(s),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(i){return i=e.extend({},o,i),Util.typeCheckConfig(t,i,u),i}},{key:"_addEventListeners",value:function(){this._config.keyboard&&e(this._element).on(c.KEYDOWN,e.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||e(this._element).on(c.MOUSEENTER,e.proxy(this.pause,this)).on(c.MOUSELEAVE,e.proxy(this.cycle,this))}},{key:"_keydown",value:function(e){if(e.preventDefault(),!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}}},{key:"_getItemIndex",value:function(t){return this._items=e.makeArray(e(t).parent().find(_.ITEM)),this._items.indexOf(t)}},{key:"_getItemByDirection",value:function(e,t){var i=e===h.NEXT,n=e===h.PREVIOUS,s=this._getItemIndex(t),a=this._items.length-1,l=n&&0===s||i&&s===a;if(l&&!this._config.wrap)return t;var r=e===h.PREVIOUS?-1:1,o=(s+r)%this._items.length;return o===-1?this._items[this._items.length-1]:this._items[o]}},{key:"_triggerSlideEvent",value:function(t,i){var n=e.Event(c.SLIDE,{relatedTarget:t,direction:i});return e(this._element).trigger(n),n}},{key:"_setActiveIndicatorElement",value:function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(_.ACTIVE).removeClass(d.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(d.ACTIVE)}}},{key:"_slide",value:function(t,i){var n=this,s=e(this._element).find(_.ACTIVE_ITEM)[0],a=i||s&&this._getItemByDirection(t,s),l=Boolean(this._interval),o=t===h.NEXT?d.LEFT:d.RIGHT;if(a&&e(a).hasClass(d.ACTIVE))return void(this._isSliding=!1);var u=this._triggerSlideEvent(a,o);if(!u.isDefaultPrevented()&&s&&a){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(a);var v=e.Event(c.SLID,{relatedTarget:a,direction:o});Util.supportsTransitionEnd()&&e(this._element).hasClass(d.SLIDE)?(e(a).addClass(t),Util.reflow(a),e(s).addClass(o),e(a).addClass(o),e(s).one(Util.TRANSITION_END,function(){e(a).removeClass(o).removeClass(t),e(a).addClass(d.ACTIVE),e(s).removeClass(d.ACTIVE).removeClass(t).removeClass(o),n._isSliding=!1,setTimeout(function(){return e(n._element).trigger(v)},0)}).emulateTransitionEnd(r)):(e(s).removeClass(d.ACTIVE),e(a).addClass(d.ACTIVE),this._isSliding=!1,e(this._element).trigger(v)),l&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=e(this).data(n),s=e.extend({},o,e(this).data());"object"==typeof t&&e.extend(s,t);var l="string"==typeof t?t:s.slide;if(i||(i=new a(this,s),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof l){if(void 0===i[l])throw new Error('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})}},{key:"_dataApiClickHandler",value:function(t){var i=Util.getSelectorFromElement(this);if(i){var s=e(i)[0];if(s&&e(s).hasClass(d.CAROUSEL)){var l=e.extend({},e(s).data(),e(this).data()),r=this.getAttribute("data-slide-to");r&&(l.interval=!1),a._jQueryInterface.call(e(s),l),r&&e(s).data(n).to(r),t.preventDefault()}}}},{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return o}}]),a}();return e(document).on(c.CLICK_DATA_API,_.DATA_SLIDE,v._dataApiClickHandler),e(window).on(c.LOAD_DATA_API,function(){e(_.DATA_RIDE).each(function(){var t=e(this);v._jQueryInterface.call(t,t.data())})}),e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=l,v._jQueryInterface},v}(jQuery);