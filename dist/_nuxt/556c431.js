(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{257:function(e,n,t){"use strict";var o=t(252),r={name:"CardPost",components:{Card:o.b,Button:o.a},props:["id","title","author","image"],computed:{imagePath:function(){return"http://localhost:1337".concat(this.image.url)},link:function(){return"/post/".concat(this.id)}}},d=t(19),component=Object(d.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Card",{attrs:{image:e.imagePath,type:"left",href:e.link}},[t("template",{slot:"content"},[t("div",{staticClass:"u-type--sm"},[e._v(e._s(e.author))]),e._v(" "),t("h3",{staticClass:"u-mb--0 u-mt--0"},[e._v(e._s(e.title))]),e._v(" "),t("p",[e._v("This is some example post content that is medium long...")])])],2)}),[],!1,null,null,null);n.a=component.exports},260:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Posts"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"posts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"author"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:140}};t.loc.source={body:"query Posts {\n  posts {\n    id\n    title\n    author\n    content\n    image {\n      url\n    }\n    categories {\n      id\n      name\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var o=n.type;"NamedType"===o.kind&&t.add(o.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.Posts=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=o[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var o=r(e,n);o&&t.definitions.push(o)})),t}(t,"Posts")},271:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Categories"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categories"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:99}};t.loc.source={body:"query Categories {\n  categories {\n    id\n    name\n    description\n    image {\n      url\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var o=n.type;"NamedType"===o.kind&&t.add(o.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.Categories=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var d=o[n]||new Set,c=new Set,l=new Set;for(d.forEach((function(e){l.add(e)}));l.size>0;){var m=l;l=new Set,m.forEach((function(e){c.has(e)||(c.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(n){var o=r(e,n);o&&t.definitions.push(o)})),t}(t,"Categories")},319:function(e,n,t){"use strict";t.r(n);t(48),t(90),t(36),t(91);var o=t(260),r=t.n(o),d=t(271),c=t.n(d),l=t(252),m={name:"CardCategory",components:{Tile:l.f,Button:l.a},props:["id","title","image"],computed:{imagePath:function(){return"http://localhost:1337".concat(this.image.url)},link:function(){return"/category/".concat(this.id)}}},f=t(19),v={name:"home",components:{CardCategory:Object(f.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("Tile",{attrs:{image:this.imagePath}},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,null,null).exports,CardPost:t(257).a,Grid:l.d,GridCol:l.e},data:function(){return{type:"right",categories:[],query:""}},apollo:{categories:{prefetch:!0,query:c.a},posts:{prefetch:!0,query:r.a}},methods:{categoryHref:function(e){return"/category/".concat(e)}},computed:{filteredList:function(){var e=this;return this.categories.filter((function(n){return categories.name.toLowerCase().includes(e.query.toLowerCase())}))}}},h=Object(f.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"l-container"},[t("h2",[e._v("Categories")]),e._v(" "),t("Grid",e._l(e.categories,(function(e){return t("GridCol",{key:e.id,attrs:{xs:"2"}},[t("CardCategory",{attrs:{title:e.name,id:e.id,image:e.image}})],1)})),1),e._v(" "),t("br"),e._v(" "),t("h2",[e._v("Blog posts")]),e._v(" "),t("Grid",e._l(e.posts,(function(e){return t("GridCol",{key:e.id,attrs:{xs:"8"}},[t("CardPost",{attrs:{title:e.title,id:e.id,image:e.image,author:e.author}})],1)})),1)],1)}),[],!1,null,null,null);n.default=h.exports}}]);