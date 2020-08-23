(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{188:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"h",(function(){return f})),r.d(e,"i",(function(){return m})),r.d(e,"a",(function(){return v})),r.d(e,"d",(function(){return h})),r.d(e,"c",(function(){return x})),r.d(e,"k",(function(){return k})),r.d(e,"e",(function(){return y}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"post",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"get",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"get",url:"/api/articles/".concat(t,"/comments")})},v=function(t,data){return Object(n.b)({method:"post",url:"/api/articles/".concat(t,"/comments"),data:data})},h=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},x=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},k=function(data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(data.article.slug),data:data})},y=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})}},263:function(t,e,r){"use strict";r.r(e);r(29);var n=r(4),article=r(188),c={name:"EditorPage",middleware:"authenticated",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.params,e.prev=1,!r||!r.slug){e.next=8;break}return e.next=5,Object(article.h)(r.slug);case 5:o=e.sent,data=o.data,n=data.article;case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c=!0;case 13:return e.abrupt("return",{articleInfo:n,err:c});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()},data:function(){return{article:{title:"",description:"",body:"",tag:"",tagList:[]},errors:{}}},created:function(){this.articleInfo&&(this.article=this.articleInfo),this.err&&this.$router.push("/")},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.article.slug){e.next=7;break}return e.next=4,Object(article.k)({article:t.article});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Object(article.c)({article:t.article});case 9:e.t0=e.sent;case 10:r=e.t0,data=r.data,t.$router.push("/article/".concat(data.article.slug)),e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),t.errors=e.t1.response.data.errors;case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()},addTag:function(){var article=this.article;return article.tagList.push(article.tag),article.tag="",!1}}},o=r(22),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("ul",{staticClass:"error-messages"},[t._l(t.errors,(function(e,n){return t._l(e,(function(e,c){return r("li",{key:c},[t._v(t._s(n)+" "+t._s(e))])}))}))],2),t._v(" "),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title",required:""},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?",required:""},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)",required:""},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tag,expression:"article.tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.tag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag(e)},input:function(e){e.target.composing||t.$set(t.article,"tag",e.target.value)}}}),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e){return r("span",{key:e,staticClass:"tag-default tag-pill ng-binding ng-scope"},[r("i",{staticClass:"ion-close-round"}),t._v("\n                "+t._s(e)+"\n              ")])})),0)]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Publish Article")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);