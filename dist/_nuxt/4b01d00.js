(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m}));var r={name:"Button",props:["size"],methods:{onClick:function(){this.$emit("onClick")}},computed:{computedClass:function(){return this.size?"button button--".concat(this.size):"button"}}},o=(n(258),n(19)),c=(Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("button",{class:this.computedClass,attrs:{type:"button"},on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,null,null).exports,{name:"Card",props:["image"]}),d=(n(259),Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card"},[t("div",{staticClass:"card__image",style:{"background-image":"url("+this.image+")"}}),this._v(" "),t("div",{staticClass:"card__content"},[t("div",{staticClass:"card__header"},[this._t("header")],2),this._v(" "),this._t("content")],2),this._v(" "),t("div",{staticClass:"card__footer"},[this._t("footer")],2)])}),[],!1,null,null,null).exports),l=(n(260),Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("a",{staticClass:"chip"},[this._t("default")],2)}),[],!1,null,null,null).exports),f=(n(261),Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"grid"},[this._t("default")],2)}),[],!1,null,null,null).exports),m=(n(262),Object(o.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"grid-col"},[this._t("default")],2)}),[],!1,null,null,null).exports)},258:function(e,t,n){"use strict";var r=n(252);n.n(r).a},259:function(e,t,n){"use strict";var r=n(253);n.n(r).a},260:function(e,t,n){"use strict";var r=n(254);n.n(r).a},261:function(e,t,n){"use strict";var r=n(255);n.n(r).a},262:function(e,t,n){"use strict";var r=n(256);n.n(r).a},266:function(e,t,n){"use strict";var r=n(257),o={name:"CardProduct",components:{Card:r.a,Chip:r.b},props:["id","name","description","image","categories"],computed:{imagePath:function(){return"http://localhost:1337".concat(this.image.url)},link:function(){return"/product/".concat(this.id)}},methods:{categoryHref:function(e){return"/category/".concat(e)}}},c=n(19),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{attrs:{image:e.imagePath}},[n("template",{slot:"header"},[e._v("\n    "+e._s(e.name)+"\n  ")]),e._v(" "),n("template",{slot:"content"},[e._l(e.categories,(function(t){return n("Chip",{key:t.id,attrs:{href:e.categoryHref(t.id)}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e._v(" "),n("p",[e._v(e._s(e.description))])],2),e._v(" "),n("template",{slot:"footer"},[n("nuxt-link",{attrs:{to:e.link}},[e._v("\n      View product\n    ")])],1)],2)}),[],!1,null,null,null);t.a=component.exports},267:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Products"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:138}};n.loc.source={body:"query Products {\n  products {\n    id\n    name\n    description\n    image {\n      url\n    }\n    categories {\n      id\n      name\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function o(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&n.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.Products=function(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=r[t]||new Set,d=new Set,l=new Set;for(c.forEach((function(e){l.add(e)}));l.size>0;){var f=l;l=new Set,f.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var r=o(e,t);r&&n.definitions.push(r)})),n}(n,"Products")},274:function(e,t,n){"use strict";n.r(t);n(48),n(90),n(36),n(91);var r=n(267),o=n.n(r),c=n(266),d=n(257),l={name:"products",components:{CardProduct:c.a,Grid:d.c,GridCol:d.d},data:function(){return{products:[],query:""}},apollo:{products:{prefetch:!0,query:o.a}},computed:{filteredList:function(){var e=this;return this.products.filter((function(t){return t.name.toLowerCase().includes(e.query.toLowerCase())}))}}},f=n(19),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Products")]),e._v(" "),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})]),e._v(" "),n("br"),e._v(" "),n("Grid",e._l(e.filteredList,(function(e){return n("GridCol",{key:e.id},[n("CardProduct",{attrs:{name:e.name,id:e.id,image:e.image,description:e.description,categories:e.categories}})],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);