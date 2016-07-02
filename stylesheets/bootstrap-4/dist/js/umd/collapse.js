!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module","./util"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module,require("./util"));else{var n={exports:{}};t(n.exports,n,e.Util),e.collapse=n.exports}}(this,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=i(n),l=function(e){var t="collapse",n="4.0.0-alpha",i="bs.collapse",l="."+i,o=".data-api",u=e.fn[t],d=600,g={toggle:!0,parent:""},h={toggle:"boolean",parent:"string"},f={SHOW:"show"+l,SHOWN:"shown"+l,HIDE:"hide"+l,HIDDEN:"hidden"+l,CLICK_DATA_API:"click"+l+o},_={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},c={WIDTH:"width",HEIGHT:"height"},p={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function l(t,n){a(this,l),this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],'+('[data-toggle="collapse"][data-target="#'+t.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return s(l,[{key:"toggle",value:function(){e(this._element).hasClass(_.IN)?this.hide():this.show()}},{key:"show",value:function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(_.IN)){var n=void 0,a=void 0;if(this._parent&&(n=e.makeArray(e(p.ACTIVES)),n.length||(n=null)),!(n&&(a=e(n).data(i),a&&a._isTransitioning))){var s=e.Event(f.SHOW);if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(l._jQueryInterface.call(e(n),"hide"),a||e(n).data(i,null));var o=this._getDimension();e(this._element).removeClass(_.COLLAPSE).addClass(_.COLLAPSING),this._element.style[o]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&e(this._triggerArray).removeClass(_.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var u=function(){e(t._element).removeClass(_.COLLAPSING).addClass(_.COLLAPSE).addClass(_.IN),t._element.style[o]="",t.setTransitioning(!1),e(t._element).trigger(f.SHOWN)};if(!r["default"].supportsTransitionEnd())return void u();var g=o[0].toUpperCase()+o.slice(1),h="scroll"+g;e(this._element).one(r["default"].TRANSITION_END,u).emulateTransitionEnd(d),this._element.style[o]=this._element[h]+"px"}}}}},{key:"hide",value:function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(_.IN)){var n=e.Event(f.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension(),a=i===c.WIDTH?"offsetWidth":"offsetHeight";this._element.style[i]=this._element[a]+"px",r["default"].reflow(this._element),e(this._element).addClass(_.COLLAPSING).removeClass(_.COLLAPSE).removeClass(_.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&e(this._triggerArray).addClass(_.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var s=function(){t.setTransitioning(!1),e(t._element).removeClass(_.COLLAPSING).addClass(_.COLLAPSE).trigger(f.HIDDEN)};return this._element.style[i]=0,r["default"].supportsTransitionEnd()?void e(this._element).one(r["default"].TRANSITION_END,s).emulateTransitionEnd(d):void s()}}}},{key:"setTransitioning",value:function(e){this._isTransitioning=e}},{key:"dispose",value:function(){e.removeData(this._element,i),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(n){return n=e.extend({},g,n),n.toggle=Boolean(n.toggle),r["default"].typeCheckConfig(t,n,h),n}},{key:"_getDimension",value:function(){var t=e(this._element).hasClass(c.WIDTH);return t?c.WIDTH:c.HEIGHT}},{key:"_getParent",value:function(){var t=this,n=e(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(l._getTargetFromElement(n),[n])}),n}},{key:"_addAriaAndCollapsedClass",value:function(t,n){if(t){var i=e(t).hasClass(_.IN);t.setAttribute("aria-expanded",i),n.length&&e(n).toggleClass(_.COLLAPSED,!i).attr("aria-expanded",i)}}}],[{key:"_getTargetFromElement",value:function(t){var n=r["default"].getSelectorFromElement(t);return n?e(n)[0]:null}},{key:"_jQueryInterface",value:function(t){return this.each(function(){var n=e(this),a=n.data(i),s=e.extend({},g,n.data(),"object"==typeof t&&t);if(!a&&s.toggle&&/show|hide/.test(t)&&(s.toggle=!1),a||(a=new l(this,s),n.data(i,a)),"string"==typeof t){if(void 0===a[t])throw new Error('No method named "'+t+'"');a[t]()}})}},{key:"VERSION",get:function(){return n}},{key:"Default",get:function(){return g}}]),l}();return e(document).on(f.CLICK_DATA_API,p.DATA_TOGGLE,function(t){t.preventDefault();var n=m._getTargetFromElement(this),a=e(n).data(i),s=a?"toggle":e(this).data();m._jQueryInterface.call(e(n),s)}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=u,m._jQueryInterface},m}(jQuery);t.exports=l});