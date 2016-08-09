!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module","./util"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module,require("./util"));else{var n={exports:{}};t(n.exports,n,e.Util),e.dropdown=n.exports}}(this,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=r(n),s=function(e){var t="dropdown",n="4.0.0-alpha",r="bs.dropdown",s="."+r,l=".data-api",d=e.fn[t],u={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,CLICK:"click"+s,CLICK_DATA_API:"click"+s+l,KEYDOWN_DATA_API:"keydown"+s+l},f={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},c={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},h=function(){function t(e){a(this,t),this._element=e,this._addEventListeners()}return i(t,[{key:"toggle",value:function(){if(this.disabled||e(this).hasClass(f.DISABLED))return!1;var n=t._getParentFromElement(this),r=e(n).hasClass(f.OPEN);if(t._clearMenus(),r)return!1;if("ontouchstart"in document.documentElement&&!e(n).closest(c.NAVBAR_NAV).length){var a=document.createElement("div");a.className=f.BACKDROP,e(a).insertBefore(this),e(a).on("click",t._clearMenus)}var i={relatedTarget:this},o=e.Event(u.SHOW,i);return e(n).trigger(o),!o.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded","true"),e(n).toggleClass(f.OPEN),e(n).trigger(e.Event(u.SHOWN,i)),!1)}},{key:"dispose",value:function(){e.removeData(this._element,r),e(this._element).off(s),this._element=null}},{key:"_addEventListeners",value:function(){e(this._element).on(u.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var a=e(this).data(r);if(a||e(this).data(r,a=new t(this)),"string"==typeof n){if(void 0===a[n])throw new Error('No method named "'+n+'"');a[n].call(this)}})}},{key:"_clearMenus",value:function(n){if(!n||3!==n.which){var r=e(c.BACKDROP)[0];r&&r.parentNode.removeChild(r);for(var a=e.makeArray(e(c.DATA_TOGGLE)),i=0;i<a.length;i++){var o=t._getParentFromElement(a[i]),s={relatedTarget:a[i]};if(e(o).hasClass(f.OPEN)&&!(n&&"click"===n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(o,n.target))){var l=e.Event(u.HIDE,s);e(o).trigger(l),l.isDefaultPrevented()||(a[i].setAttribute("aria-expanded","false"),e(o).removeClass(f.OPEN).trigger(e.Event(u.HIDDEN,s)))}}}}},{key:"_getParentFromElement",value:function(t){var n=void 0,r=o["default"].getSelectorFromElement(t);return r&&(n=e(r)[0]),n||t.parentNode}},{key:"_dataApiKeydownHandler",value:function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(f.DISABLED))){var r=t._getParentFromElement(this),a=e(r).hasClass(f.OPEN);if(!a&&27!==n.which||a&&27===n.which){if(27===n.which){var i=e(r).find(c.DATA_TOGGLE)[0];e(i).trigger("focus")}return void e(this).trigger("click")}var o=e.makeArray(e(c.VISIBLE_ITEMS));if(o=o.filter(function(e){return e.offsetWidth||e.offsetHeight}),o.length){var s=o.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<o.length-1&&s++,~s||(s=0),o[s].focus()}}}},{key:"VERSION",get:function(){return n}}]),t}();return e(document).on(u.KEYDOWN_DATA_API,c.DATA_TOGGLE,h._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,c.ROLE_MENU,h._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,c.ROLE_LISTBOX,h._dataApiKeydownHandler).on(u.CLICK_DATA_API,h._clearMenus).on(u.CLICK_DATA_API,c.DATA_TOGGLE,h.prototype.toggle).on(u.CLICK_DATA_API,c.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=d,h._jQueryInterface},h}(jQuery);t.exports=s});