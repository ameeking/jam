(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,r){"use strict";r.r(e);r(19),r(7),r(6),r(4),r(9);var n=r(1),c=r(76);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"category",data:function(){return{id:this.$route.params.id}},computed:O(O({},Object(c.b)(["storedata"])),{},{product:function(){return this.storedata[this.id]}})},h=r(50),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("h1",[this._v(this._s(this.product.name))]),this._v("\n  "+this._s(this.product.description)+"\n  "),e("img",{attrs:{src:this.product.image}})])}),[],!1,null,null,null);e.default=component.exports}}]);