(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(e,t,o){"use strict";var r=o(24),n={name:"CardProduct",components:{Card:r.c,Chip:r.d,Button:r.b},props:["id","name","description","image","categories"],data:function(){return{border:!0}},computed:{imagePath:function(){return"https://drupal-9-headless.lndo.site".concat(this.image.uri.url)},link:function(){return"/product/".concat(this.id)}},methods:{categoryHref:function(e){return"/category/".concat(e)}}},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Card",{attrs:{image:e.imagePath,border:e.border,scale:"16:9"}},[o("template",{slot:"content"},[o("div",e._l(e.categories,(function(t){return o("Chip",{key:t.id,attrs:{href:e.categoryHref(t.id)}},[e._v("\n        "+e._s(t.title)+"\n      ")])})),1),e._v(" "),o("h3",{staticClass:"u-mb--0 u-mt--1"},[e._v(e._s(e.name))]),e._v(" "),o("p",[e._v(e._s(e.description))]),e._v(" "),o("Button",{staticClass:"u-mt--auto",attrs:{href:e.link,type:"primary"}},[e._v("View product")])],1)],2)}),[],!1,null,null,null);t.a=component.exports},256:function(e,t,o){"use strict";o.r(t);o(50),o(35),o(65),o(51),o(123),o(96),o(36),o(25);var r=o(4),n=o(251),c=o(24),d={name:"products",components:{CardProduct:n.a,Grid:c.e,GridCol:c.f},data:function(){return{products:[],categoriesModel:[],locationsModel:[],query:""}},methods:{matchesCategoriesModel:function(e){return-1!==this.categoriesModel.indexOf(e.id)||0===this.categoriesModel.length},matchesLocationsModel:function(e){return-1!==this.locationsModel.indexOf(e.id)||0===this.locationsModel.length}},computed:{filteredProducts:function(){var e=this;return this.products.filter((function(t){return t.title.toLowerCase().includes(e.query.toLowerCase())&&t.field_category.some(e.matchesCategoriesModel)&&t.field_location.some(e.matchesLocationsModel)}))},categories:function(){var e={};return this.filteredProducts.forEach((function(t){t.field_category.forEach((function(t){e[t.id]=t}))})),e},locations:function(){var e={};return this.filteredProducts.forEach((function(t){t.field_location.forEach((function(t){e[t.id]=t}))})),e}},mounted:function(){this.$store.commit("page/setTitle","Search"),this.$store.commit("page/setBanner","")},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$repository,t.next=3,o.product.getAllProducts();case 3:return r=t.sent,t.abrupt("return",{products:r});case 5:case"end":return t.stop()}}),t)})))()}},l=o(2),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"l-container"},[o("form",{staticClass:"u-mb--5"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]),e._v(" "),o("Grid",[o("GridCol",{attrs:{xs:"3"}},[o("strong",[e._v("Category")]),e._v(" "),e._l(e.categories,(function(t){return o("div",{key:t.id},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.categoriesModel,expression:"categoriesModel"}],attrs:{type:"checkbox",id:"cat-"+t.id},domProps:{value:t.id,checked:Array.isArray(e.categoriesModel)?e._i(e.categoriesModel,t.id)>-1:e.categoriesModel},on:{change:function(o){var r=e.categoriesModel,n=o.target,c=!!n.checked;if(Array.isArray(r)){var d=t.id,l=e._i(r,d);n.checked?l<0&&(e.categoriesModel=r.concat([d])):l>-1&&(e.categoriesModel=r.slice(0,l).concat(r.slice(l+1)))}else e.categoriesModel=c}}}),e._v(" "),o("label",{attrs:{for:"cat-"+t.id}},[e._v(e._s(t.title))])])})),e._v(" "),o("strong",{staticClass:"u-mt--4"},[e._v("Location")]),e._v(" "),e._l(e.locations,(function(t){return o("div",{key:t.id},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.locationsModel,expression:"locationsModel"}],attrs:{type:"checkbox",id:t.id},domProps:{value:t.id,checked:Array.isArray(e.locationsModel)?e._i(e.locationsModel,t.id)>-1:e.locationsModel},on:{change:function(o){var r=e.locationsModel,n=o.target,c=!!n.checked;if(Array.isArray(r)){var d=t.id,l=e._i(r,d);n.checked?l<0&&(e.locationsModel=r.concat([d])):l>-1&&(e.locationsModel=r.slice(0,l).concat(r.slice(l+1)))}else e.locationsModel=c}}}),e._v(" "),o("label",{attrs:{for:t.id}},[e._v(e._s(t.title))])])}))],2),e._v(" "),o("GridCol",{attrs:{xs:"9"}},[o("Grid",e._l(e.filteredProducts,(function(e){return o("GridCol",{key:e.id,attrs:{xs:"4"}},[o("CardProduct",{attrs:{name:e.title,id:e.id,image:e.field_image,description:e.body.summary,categories:e.field_category}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);