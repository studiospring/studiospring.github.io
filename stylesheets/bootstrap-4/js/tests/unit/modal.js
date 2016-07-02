$(function(){"use strict";QUnit.module("modal plugin"),QUnit.test("should be defined on jquery object",function(o){o.expect(1),o.ok($(document.body).modal,"modal method is defined")}),QUnit.module("modal",{beforeEach:function(){$.fn.bootstrapModal=$.fn.modal.noConflict()},afterEach:function(){$.fn.modal=$.fn.bootstrapModal,delete $.fn.bootstrapModal}}),QUnit.test("should provide no conflict",function(o){o.expect(1),o.strictEqual($.fn.modal,void 0,"modal was set back to undefined (orig value)")}),QUnit.test("should throw explicit error on undefined method",function(o){o.expect(1);var t=$('<div id="modal-test"/>');t.bootstrapModal();try{t.bootstrapModal("noMethod")}catch(e){o.strictEqual(e.message,'No method named "noMethod"')}}),QUnit.test("should return jquery collection containing the element",function(o){o.expect(2);var t=$('<div id="modal-test"/>'),e=t.bootstrapModal();o.ok(e instanceof $,"returns jquery collection"),o.strictEqual(e[0],t[0],"collection contains element")}),QUnit.test("should expose defaults var for settings",function(o){o.expect(1),o.ok($.fn.bootstrapModal.Constructor.Default,"default object exposed")}),QUnit.test("should insert into dom when show method is called",function(o){o.expect(1);var t=o.async();$('<div id="modal-test"/>').on("shown.bs.modal",function(){o.notEqual($("#modal-test").length,0,"modal inserted into dom"),t()}).bootstrapModal("show")}),QUnit.test("should fire show event",function(o){o.expect(1);var t=o.async();$('<div id="modal-test"/>').on("show.bs.modal",function(){o.ok(!0,"show event fired"),t()}).bootstrapModal("show")}),QUnit.test("should not fire shown when show was prevented",function(o){o.expect(1);var t=o.async();$('<div id="modal-test"/>').on("show.bs.modal",function(e){e.preventDefault(),o.ok(!0,"show event fired"),t()}).on("shown.bs.modal",function(){o.ok(!1,"shown event fired")}).bootstrapModal("show")}),QUnit.test("should hide modal when hide is called",function(o){o.expect(3);var t=o.async();$('<div id="modal-test"/>').on("shown.bs.modal",function(){o.ok($("#modal-test").is(":visible"),"modal visible"),o.notEqual($("#modal-test").length,0,"modal inserted into dom"),$(this).bootstrapModal("hide")}).on("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),t()}).bootstrapModal("show")}),QUnit.test("should toggle when toggle is called",function(o){o.expect(3);var t=o.async();$('<div id="modal-test"/>').on("shown.bs.modal",function(){o.ok($("#modal-test").is(":visible"),"modal visible"),o.notEqual($("#modal-test").length,0,"modal inserted into dom"),$(this).bootstrapModal("toggle")}).on("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),t()}).bootstrapModal("toggle")}),QUnit.test('should remove from dom when click [data-dismiss="modal"]',function(o){o.expect(3);var t=o.async();$('<div id="modal-test"><span class="close" data-dismiss="modal"/></div>').on("shown.bs.modal",function(){o.ok($("#modal-test").is(":visible"),"modal visible"),o.notEqual($("#modal-test").length,0,"modal inserted into dom"),$(this).find(".close").trigger("click")}).on("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),t()}).bootstrapModal("toggle")}),QUnit.test('should allow modal close with "backdrop:false"',function(o){o.expect(2);var t=o.async();$('<div id="modal-test" data-backdrop="false"/>').on("shown.bs.modal",function(){o.ok($("#modal-test").is(":visible"),"modal visible"),$(this).bootstrapModal("hide")}).on("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),t()}).bootstrapModal("show")}),QUnit.test("should close modal when clicking outside of modal-content",function(o){o.expect(3);var t=o.async();$('<div id="modal-test"><div class="contents"/></div>').on("shown.bs.modal",function(){o.notEqual($("#modal-test").length,0,"modal inserted into dom"),$(".contents").trigger("click"),o.ok($("#modal-test").is(":visible"),"modal visible"),$("#modal-test").trigger("click")}).on("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),t()}).bootstrapModal("show")}),QUnit.test("should close modal when escape key is pressed via keydown",function(o){o.expect(3);var t=o.async(),e=$('<div id="modal-test"/>');e.on("shown.bs.modal",function(){o.ok($("#modal-test").length,"modal insterted into dom"),o.ok($("#modal-test").is(":visible"),"modal visible"),e.trigger($.Event("keydown",{which:27})),setTimeout(function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),e.remove(),t()},0)}).bootstrapModal("show")}),QUnit.test("should not close modal when escape key is pressed via keyup",function(o){o.expect(3);var t=o.async(),e=$('<div id="modal-test"/>');e.on("shown.bs.modal",function(){o.ok($("#modal-test").length,"modal inserted into dom"),o.ok($("#modal-test").is(":visible"),"modal visible"),e.trigger($.Event("keyup",{which:27})),setTimeout(function(){o.ok(e.is(":visible"),"modal still visible"),e.remove(),t()},0)}).bootstrapModal("show")}),QUnit.test("should trigger hide event once when clicking outside of modal-content",function(o){o.expect(1);var t,e=o.async();$('<div id="modal-test"><div class="contents"/></div>').on("shown.bs.modal",function(){t=0,$("#modal-test").trigger("click")}).on("hide.bs.modal",function(){t+=1,o.strictEqual(t,1,"modal hide triggered once"),e()}).bootstrapModal("show")}),QUnit.test('should close reopened modal with [data-dismiss="modal"] click',function(o){o.expect(2);var t=o.async();$('<div id="modal-test"><div class="contents"><div id="close" data-dismiss="modal"/></div></div>').one("shown.bs.modal",function(){$("#close").trigger("click")}).one("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),$(this).one("shown.bs.modal",function(){$("#close").trigger("click")}).one("hidden.bs.modal",function(){o.ok(!$("#modal-test").is(":visible"),"modal hidden"),t()}).bootstrapModal("show")}).bootstrapModal("show")}),QUnit.test("should restore focus to toggling element when modal is hidden after having been opened via data-api",function(o){o.expect(1);var t=o.async(),e=$('<button data-toggle="modal" data-target="#modal-test"/>').appendTo("#qunit-fixture");$('<div id="modal-test"><div class="contents"><div id="close" data-dismiss="modal"/></div></div>').on("hidden.bs.modal",function(){setTimeout(function(){o.ok($(document.activeElement).is(e),"toggling element is once again focused"),t()},0)}).on("shown.bs.modal",function(){$("#close").trigger("click")}).appendTo("#qunit-fixture"),e.trigger("click")}),QUnit.test("should not restore focus to toggling element if the associated show event gets prevented",function(o){o.expect(1);var t=o.async(),e=$('<button data-toggle="modal" data-target="#modal-test"/>').appendTo("#qunit-fixture"),n=$('<button id="other-btn"/>').appendTo("#qunit-fixture");$('<div id="modal-test"><div class="contents"><div id="close" data-dismiss="modal"/></div>').one("show.bs.modal",function(o){o.preventDefault(),n.trigger("focus"),setTimeout($.proxy(function(){$(this).bootstrapModal("show")},this),0)}).on("hidden.bs.modal",function(){setTimeout(function(){o.ok($(document.activeElement).is(n),"focus returned to toggling element"),t()},0)}).on("shown.bs.modal",function(){$("#close").trigger("click")}).appendTo("#qunit-fixture"),e.trigger("click")}),QUnit.test("should restore inline body padding after closing",function(o){o.expect(2);var t=o.async(),e=0,n=$(document.body);n.css("padding-right",e),$('<div id="modal-test"/>').on("hidden.bs.modal",function(){var i=parseInt(n.css("padding-right"),10);o.notStrictEqual(n.attr("style"),"","body has non-empty style attribute"),o.strictEqual(i,e,"original body padding was not changed"),n.removeAttr("style"),t()}).on("shown.bs.modal",function(){$(this).bootstrapModal("hide")}).bootstrapModal("show")}),QUnit.test("should ignore values set via CSS when trying to restore body padding after closing",function(o){o.expect(1);var t=o.async(),e=$(document.body),n=$("<style>body { padding-right: 42px; }</style>").appendTo("head");$('<div id="modal-test"/>').on("hidden.bs.modal",function(){o.ok(!e.attr("style"),"body does not have inline padding set"),n.remove(),t()}).on("shown.bs.modal",function(){$(this).bootstrapModal("hide")}).bootstrapModal("show")}),QUnit.test("should ignore other inline styles when trying to restore body padding after closing",function(o){o.expect(2);var t=o.async(),e=$(document.body),n=$("<style>body { padding-right: 42px; }</style>").appendTo("head");e.css("color","red"),$('<div id="modal-test"/>').on("hidden.bs.modal",function(){o.strictEqual(e[0].style.paddingRight,"","body does not have inline padding set"),o.strictEqual(e[0].style.color,"red","body still has other inline styles set"),e.removeAttr("style"),n.remove(),t()}).on("shown.bs.modal",function(){$(this).bootstrapModal("hide")}).bootstrapModal("show")}),QUnit.test("should properly restore non-pixel inline body padding after closing",function(o){o.expect(1);var t=o.async(),e=$(document.body);e.css("padding-right","5%"),$('<div id="modal-test"/>').on("hidden.bs.modal",function(){o.strictEqual(e[0].style.paddingRight,"5%","body does not have inline padding set"),e.removeAttr("style"),t()}).on("shown.bs.modal",function(){$(this).bootstrapModal("hide")}).bootstrapModal("show")})});