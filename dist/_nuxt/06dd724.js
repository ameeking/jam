(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(t,e,r){"use strict";var n=r(24),o={name:"CardPost",components:{Card:n.c,Button:n.b},props:["id","title","author","image"],computed:{imagePath:function(){return"https://drupal-9-headless.lndo.site".concat(this.image.uri.url)},link:function(){return"/post/".concat(this.id)}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{attrs:{image:t.imagePath,type:"left",href:t.link}},[r("template",{slot:"content"},[r("div",{staticClass:"u-type--sm"},[t._v(t._s(t.author))]),t._v(" "),r("h3",{staticClass:"u-mb--0 u-mt--1"},[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v("This is some example post content that is medium long...")])])],2)}),[],!1,null,null,null);e.a=component.exports},251:function(t,e,r){"use strict";var n=r(24),o={name:"CardProduct",components:{Card:n.c,Chip:n.d,Button:n.b},props:["id","name","description","image","categories"],data:function(){return{border:!0}},computed:{imagePath:function(){return"https://drupal-9-headless.lndo.site".concat(this.image.uri.url)},link:function(){return"/product/".concat(this.id)}},methods:{categoryHref:function(t){return"/category/".concat(t)}}},c=r(2),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{attrs:{image:t.imagePath,border:t.border,scale:"16:9"}},[r("template",{slot:"content"},[r("div",t._l(t.categories,(function(e){return r("Chip",{key:e.id,attrs:{href:t.categoryHref(e.id)}},[t._v("\n        "+t._s(e.title)+"\n      ")])})),1),t._v(" "),r("h3",{staticClass:"u-mb--0 u-mt--1"},[t._v(t._s(t.name))]),t._v(" "),r("p",[t._v(t._s(t.description))]),t._v(" "),r("Button",{staticClass:"u-mt--auto",attrs:{href:t.link,type:"primary"}},[t._v("View product")])],1)],2)}),[],!1,null,null,null);e.a=component.exports},252:function(t,e,r){"use strict";var n=r(24),o={name:"CardCategory",components:{Card:n.c,Button:n.b},props:["id","title","image"],computed:{imagePath:function(){return"https://drupal-9-headless.lndo.site".concat(this.image.uri.url)},link:function(){return"/category/".concat(this.id)}}},c=r(2),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("Card",{attrs:{image:this.imagePath,href:this.link,scale:"9:16",border:""}},[e("template",{slot:"content"},[this._v("\n    "+this._s(this.title)+"\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports},261:function(t,e,r){"use strict";r.r(e);r(50),r(65),r(26),r(96),r(25);var n=r(4),o=r(252),c=r(250),l=r(251),d=r(24),m={name:"index",components:{CardCategory:o.a,CardPost:c.a,CardProduct:l.a,Grid:d.e,GridCol:d.f},data:function(){return{type:"right",categories:[],posts:[],products:[],query:""}},methods:{categoryHref:function(t){return"/category/".concat(t)}},computed:{filteredList:function(){var t=this;return this.categories.filter((function(e){return categories.name.toLowerCase().includes(t.query.toLowerCase())}))}},mounted:function(){this.$store.commit("page/setTitle",""),this.$store.commit("page/setBanner","https://cdn.pixabay.com/photo/2019/04/22/01/51/south-tyrol-4145438_1280.jpg")},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$repository,e.next=3,r.product.getAllProducts(4);case 3:return n=e.sent,e.next=6,r.category.getAllCategories(6);case 6:return o=e.sent,e.next=9,r.post.getAllPosts(2);case 9:return c=e.sent,e.abrupt("return",{categories:o,products:n,posts:c});case 11:case"end":return e.stop()}}),e)})))()}},h=r(2),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"l-container"},[r("h2",[t._v("Pick your adventure")]),t._v(" "),r("Grid",t._l(t.categories,(function(t){return r("GridCol",{key:t.id,attrs:{xs:"2"}},[r("CardCategory",{attrs:{title:t.title,id:t.id,image:t.field_image}})],1)})),1)],1),t._v(" "),r("div",{staticClass:"l-container u-mt--8 u-pt--5 u-pb--8 u-color--gray-ltr"},[r("h2",{staticClass:"u-mt--0"},[t._v("Get inspired")]),t._v(" "),r("Grid",t._l(t.posts,(function(t){return r("GridCol",{key:t.id,attrs:{xs:"7"}},[r("CardPost",{attrs:{title:t.title,id:t.id,image:t.field_image}})],1)})),1)],1),t._v(" "),r("div",{staticClass:"l-container"},[r("h2",{staticClass:"u-mt--8"},[t._v("Popular adventures")]),t._v(" "),r("Grid",t._l(t.products,(function(t){return r("GridCol",{key:t.id,attrs:{xs:"3"}},[r("CardProduct",{attrs:{name:t.title,id:t.id,image:t.field_image,description:t.body.summary,categories:t.field_category}})],1)})),1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);