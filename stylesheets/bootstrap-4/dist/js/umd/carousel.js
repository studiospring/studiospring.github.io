!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module","./util"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module,require("./util"));else{var i={exports:{}};t(i.exports,i,e.Util),e.carousel=i.exports}}(this,function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=n(i),l=function(e){var t="carousel",i="4.0.0-alpha",n="bs.carousel",l="."+n,o=".data-api",u=e.fn[t],d=600,h={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},c={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},f={NEXT:"next",PREVIOUS:"prev"},_={SLIDE:"slide"+l,SLID:"slid"+l,KEYDOWN:"keydown"+l,MOUSEENTER:"mouseenter"+l,MOUSELEAVE:"mouseleave"+l,LOAD_DATA_API:"load"+l+o,CLICK_DATA_API:"click"+l+o},v={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},E={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},m=function(){function o(t,i){s(this,o),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(i),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(E.INDICATORS)[0],this._addEventListeners()}return a(o,[{key:"next",value:function(){this._isSliding||this._slide(f.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(f.PREVIOUS)}},{key:"pause",value:function(t){t||(this._isPaused=!0),e(this._element).find(E.NEXT_PREV)[0]&&r["default"].supportsTransitionEnd()&&(r["default"].triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(e.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(t){var i=this;this._activeElement=e(this._element).find(E.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||0>t)){if(this._isSliding)return void e(this._element).one(_.SLID,function(){return i.to(t)});if(n===t)return this.pause(),void this.cycle();var s=t>n?f.NEXT:f.PREVIOUS;this._slide(s,this._items[t])}}},{key:"dispose",value:function(){e(this._element).off(l),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(i){return i=e.extend({},h,i),r["default"].typeCheckConfig(t,i,c),i}},{key:"_addEventListeners",value:function(){this._config.keyboard&&e(this._element).on(_.KEYDOWN,e.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||e(this._element).on(_.MOUSEENTER,e.proxy(this.pause,this)).on(_.MOUSELEAVE,e.proxy(this.cycle,this))}},{key:"_keydown",value:function(e){if(e.preventDefault(),!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}}},{key:"_getItemIndex",value:function(t){return this._items=e.makeArray(e(t).parent().find(E.ITEM)),this._items.indexOf(t)}},{key:"_getItemByDirection",value:function(e,t){var i=e===f.NEXT,n=e===f.PREVIOUS,s=this._getItemIndex(t),a=this._items.length-1,r=n&&0===s||i&&s===a;if(r&&!this._config.wrap)return t;var l=e===f.PREVIOUS?-1:1,o=(s+l)%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]}},{key:"_triggerSlideEvent",value:function(t,i){var n=e.Event(_.SLIDE,{relatedTarget:t,direction:i});return e(this._element).trigger(n),n}},{key:"_setActiveIndicatorElement",value:function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(E.ACTIVE).removeClass(v.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(v.ACTIVE)}}},{key:"_slide",value:function(t,i){var n=this,s=e(this._element).find(E.ACTIVE_ITEM)[0],a=i||s&&this._getItemByDirection(t,s),l=Boolean(this._interval),o=t===f.NEXT?v.LEFT:v.RIGHT;if(a&&e(a).hasClass(v.ACTIVE))return void(this._isSliding=!1);var u=this._triggerSlideEvent(a,o);if(!u.isDefaultPrevented()&&s&&a){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(a);var h=e.Event(_.SLID,{relatedTarget:a,direction:o});r["default"].supportsTransitionEnd()&&e(this._element).hasClass(v.SLIDE)?(e(a).addClass(t),r["default"].reflow(a),e(s).addClass(o),e(a).addClass(o),e(s).one(r["default"].TRANSITION_END,function(){e(a).removeClass(o).removeClass(t),e(a).addClass(v.ACTIVE),e(s).removeClass(v.ACTIVE).removeClass(t).removeClass(o),n._isSliding=!1,setTimeout(function(){return e(n._element).trigger(h)},0)}).emulateTransitionEnd(d)):(e(s).removeClass(v.ACTIVE),e(a).addClass(v.ACTIVE),this._isSliding=!1,e(this._element).trigger(h)),l&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(t){return this.each(function(){var i=e(this).data(n),s=e.extend({},h,e(this).data());"object"==typeof t&&e.extend(s,t);var a="string"==typeof t?t:s.slide;if(i||(i=new o(this,s),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof a){if(void 0===i[a])throw new Error('No method named "'+a+'"');i[a]()}else s.interval&&(i.pause(),i.cycle())})}},{key:"_dataApiClickHandler",value:function(t){var i=r["default"].getSelectorFromElement(this);if(i){var s=e(i)[0];if(s&&e(s).hasClass(v.CAROUSEL)){var a=e.extend({},e(s).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(e(s),a),l&&e(s).data(n).to(l),t.preventDefault()}}}},{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return h}}]),o}();return e(document).on(_.CLICK_DATA_API,E.DATA_SLIDE,m._dataApiClickHandler),e(window).on(_.LOAD_DATA_API,function(){e(E.DATA_RIDE).each(function(){var t=e(this);m._jQueryInterface.call(t,t.data())})}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=u,m._jQueryInterface},m}(jQuery);t.exports=l});