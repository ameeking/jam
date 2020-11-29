(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{343:function(e,n,t){"use strict";var r=t(76),o={name:"CardPost",components:{Card:r.c,Button:r.b},props:["id","title","author","image"],computed:{imagePath:function(){return"http://localhost:1337".concat(this.image.url)},link:function(){return"/post/".concat(this.id)}}},d=t(6),component=Object(d.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Card",{attrs:{image:e.imagePath,type:"left",href:e.link}},[t("template",{slot:"content"},[t("div",{staticClass:"u-type--sm"},[e._v(e._s(e.author))]),e._v(" "),t("h3",{staticClass:"u-mb--0 u-mt--1"},[e._v(e._s(e.title))]),e._v(" "),t("p",[e._v("This is some example post content that is medium long...")])])],2)}),[],!1,null,null,null);n.a=component.exports},344:function(e,n,t){"use strict";var r=t(76),o={name:"CardProduct",components:{Card:r.c,Chip:r.d,Button:r.b},props:["id","name","description","image","categories"],data:function(){return{border:!0}},computed:{imagePath:function(){return"http://localhost:1337".concat(this.image.url)},link:function(){return"/product/".concat(this.id)}},methods:{categoryHref:function(e){return"/category/".concat(e)}}},d=t(6),component=Object(d.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Card",{attrs:{image:e.imagePath,border:e.border,scale:"16:9"}},[t("template",{slot:"content"},[t("div",e._l(e.categories,(function(n){return t("Chip",{key:n.id,attrs:{href:e.categoryHref(n.id)}},[e._v("\n        "+e._s(n.name)+"\n      ")])})),1),e._v(" "),t("h3",{staticClass:"u-mb--0 u-mt--1"},[e._v(e._s(e.name))]),e._v(" "),t("p",[e._v(e._s(e.description))]),e._v(" "),t("Button",{staticClass:"u-mt--auto",attrs:{href:e.link,type:"primary"}},[e._v("View product")])],1)],2)}),[],!1,null,null,null);n.a=component.exports},345:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Posts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"author"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:140}};t.loc.source={body:"query Posts {\n  posts {\n    id\n    title\n    author\n    content\n    image {\n      url\n    }\n    categories {\n      id\n      name\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var r=n.type;"NamedType"===r.kind&&t.add(r.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.Posts=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"Posts")},346:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Categories"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:99}};t.loc.source={body:"query Categories {\n  categories {\n    id\n    name\n    description\n    image {\n      url\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var r=n.type;"NamedType"===r.kind&&t.add(r.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.Categories=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"Categories")},347:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Products"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:138}};t.loc.source={body:"query Products {\n  products {\n    id\n    name\n    description\n    image {\n      url\n    }\n    categories {\n      id\n      name\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var r=n.type;"NamedType"===r.kind&&t.add(r.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.Products=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=r[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"Products")},351:function(e,n,t){"use strict";t.r(n);t(56),t(77),t(37),t(114);var r=t(347),o=t.n(r),d=t(345),c=t.n(d),l=t(346),m=t.n(l),f=t(76),v={name:"CardCategory",components:{Card:f.c,Button:f.b},props:["id","title","image"],computed:{imagePath:function(){return"http://localhost:1337".concat(this.image.url)},link:function(){return"/category/".concat(this.id)}}},h=t(6),k=Object(h.a)(v,(function(){var e=this.$createElement,n=this._self._c||e;return n("Card",{attrs:{image:this.imagePath,href:this.link,scale:"9:16",border:""}},[n("template",{slot:"content"},[this._v("\n    "+this._s(this.title)+"\n  ")])],2)}),[],!1,null,null,null).exports,S=t(343),y=t(344),_={name:"home",components:{CardCategory:k,CardPost:S.a,CardProduct:y.a,Grid:f.e,GridCol:f.f},data:function(){return{type:"right",categories:[],query:""}},apollo:{categories:{prefetch:!0,query:m.a},posts:{prefetch:!0,query:c.a},products:{prefetch:!0,query:o.a}},methods:{categoryHref:function(e){return"/category/".concat(e)}},computed:{filteredList:function(){var e=this;return this.categories.filter((function(n){return categories.name.toLowerCase().includes(e.query.toLowerCase())}))}},mounted:function(){this.$store.commit("page/setTitle",""),this.$store.commit("page/setBanner","https://cdn.pixabay.com/photo/2019/04/22/01/51/south-tyrol-4145438_1280.jpg")}},C=Object(h.a)(_,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"l-container"},[t("h2",[e._v("Pick your adventure")]),e._v(" "),t("Grid",e._l(e.categories,(function(e){return t("GridCol",{key:e.id,attrs:{xs:"2"}},[t("CardCategory",{attrs:{title:e.name,id:e.id,image:e.image}})],1)})),1)],1),e._v(" "),t("div",{staticClass:"l-container u-mt--8 u-pt--5 u-pb--8 u-color--gray-ltr"},[t("h2",{staticClass:"u-mt--0"},[e._v("Get inspired")]),e._v(" "),t("Grid",e._l(e.posts,(function(e){return t("GridCol",{key:e.id,attrs:{xs:"7"}},[t("CardPost",{attrs:{title:e.title,id:e.id,image:e.image,author:e.author}})],1)})),1)],1),e._v(" "),t("div",{staticClass:"l-container"},[t("h2",{staticClass:"u-mt--8"},[e._v("Popular adventures")]),e._v(" "),t("Grid",e._l(e.products,(function(e){return t("GridCol",{key:e.id,attrs:{xs:"3"}},[t("CardProduct",{attrs:{name:e.name,id:e.id,image:e.image,description:e.description,categories:e.categories}})],1)})),1)],1)])}),[],!1,null,null,null);n.default=C.exports}}]);