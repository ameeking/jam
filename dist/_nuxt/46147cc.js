(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{260:function(t,e,r){"use strict";r.r(e);r(25);var n=r(4),c={data:function(){return{product:{}}},computed:{imagePath:function(){if(this.product.field_image)return"https://drupal-9-headless.lndo.site".concat(this.product.field_image.uri.url)}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$repository,n=t.store,c=t.route,e.next=3,r.product.getProduct(c.params.id);case 3:return o=e.sent,n.commit("page/setTitle",o.title),n.commit("page/setBanner",""),e.abrupt("return",{product:o.data});case 7:case"end":return e.stop()}}),e)})))()}},o=r(2),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"l-container"},[e("div",[e("img",{attrs:{src:this.imagePath}})]),this._v(" "),e("p",[this._v(this._s(this.product.description))])])}),[],!1,null,null,null);e.default=component.exports}}]);