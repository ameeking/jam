(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{351:function(e,t,n){"use strict";n.r(t);n(57),n(77),n(38),n(112);var r=n(158),o={name:"categories",data:function(){return{categories:[],query:""}},apollo:{categories:{prefetch:!0,query:n.n(r).a}},methods:{categoryHref:function(e){return"/category/".concat(e)}},computed:{filteredList:function(){var e=this;return this.categories.filter((function(t){return categories.name.toLowerCase().includes(e.query.toLowerCase())}))}},mounted:function(){this.$store.commit("page/setTitle","Categories"),this.$store.commit("page/setBanner","")}},c=n(6),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"l-container"},[n("ul",e._l(e.categories,(function(t){return n("li",{key:t.id},[n("nuxt-link",{attrs:{to:e.categoryHref(t.id)}},[e._v("\n        "+e._s(t.name)+"\n      ")])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);