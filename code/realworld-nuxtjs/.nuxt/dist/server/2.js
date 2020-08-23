exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getYourFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deletelFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticleContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 文章列表

const getArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 文章列表

const getYourFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params
  });
}; // 文章列表

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles/${slug}/favorite`
  });
}; // 文章列表

const deletelFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 文章详情内容

const getArticleContent = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComments = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles/${slug}/comments`,
    data
  });
}; // 删除文章评论

const delComments = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 新建文章

const createArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data
  });
}; // 重新编辑文章

const updateArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${data.article.slug}`,
    data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-list.vue?vue&type=template&id=1e68e133&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.articles),function(article){return ((_vm.articles.length > 0))?_vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited
              }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n        "+_vm._s(article.favoritesCount)+"\n      ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            name: 'article',
            params: {
              slug: article.slug
            }
          }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2):_vm._ssrNode(("<div>\n    dfedewfewfwfwe\n  </div>"))}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-list.vue?vue&type=template&id=1e68e133&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_listvue_type_script_lang_js_ = ({
  name: "articleLists",
  props: {
    articles: {
      type: Array,
      require: true
    }
  },

  data() {
    return {};
  },

  methods: {
    onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        Object(api_article["f" /* deletelFavorite */])(article.slug);
        article.favoritesCount += -1;
        article.favorited = false;
      } else {
        Object(api_article["b" /* addFavorite */])(article.slug);
        article.favoritesCount += 1;
        article.favorited = true;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_listvue_type_script_lang_js_ = (article_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-list.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "aa52c07e"
  
)

/* harmony default export */ var article_list = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=038eca39&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "),((_vm.user.username == _vm.profile.username))?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/setting"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n          ")]):_c('button',{staticClass:"btn btn-sm btn-outline-secondary action-btn",on:{"click":function($event){return _vm.onFollow(_vm.profile)}}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n             \n            "+_vm._s(_vm.profile.following ? "Unfollow" : "Follow")+" "+_vm._s(_vm.profile.username)+"\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.author == 'author' || (!_vm.author && !_vm.favorited)
                },attrs:{"exact":"","to":{
                name:'profile',
                query : {
                  author: 'author'
                }
              }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.favorited == 'favorited'
                },attrs:{"exact":"","to":{
                name:'profile',
                query : {
                  favorited: 'favorited',
                }
              }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_c('article-lists',{attrs:{"articles":_vm.articles,"totalPage":_vm.totalPage}}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[((_vm.totalPage > 1))?_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item == _vm.page
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'profile',
                  query:{
                    author: _vm.author,
                    favorited: _vm.favorited,
                    page: item,
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0):_vm._e()])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=038eca39&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/profile.js
 // 获取作者详情

const getProfile = username => {
  return Object(request["b" /* request */])({
    method: 'get',
    url: `/api/profiles/${username}`
  });
}; // 添加关注作者

const addFollow = username => {
  return Object(request["b" /* request */])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注作者

const delFollow = username => {
  return Object(request["b" /* request */])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  });
};
// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// EXTERNAL MODULE: ./pages/article/components/article-list.vue + 4 modules
var article_list = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "ProfilePage",
  middleware: "authenticated",
  components: {
    articleLists: article_list["a" /* default */]
  },

  async asyncData({
    params,
    query
  }) {
    const page = Number.parseInt(query.page) || 1;
    const limit = 5;
    const favorited = query.favorited;
    const author = query.author;
    const objName = favorited ? "favorited" : "author";
    const param = {
      limit,
      offset: (page - 1) * limit
    };
    param[objName] = params.username;
    const [profileInfo, articlesList] = await Promise.all([getProfile(params.username), Object(article["g" /* getArticle */])(param)]);
    const {
      articles,
      articlesCount
    } = articlesList.data;
    const {
      profile
    } = profileInfo.data;
    return {
      profile,
      limit,
      articles,
      articlesCount,
      favorited,
      author,
      page
    };
  },

  watchQuery: ["page", "favorited", "author"],
  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onFollow(profile) {
      if (profile.following) {
        delFollow(profile.username);
        profile.following = false;
      } else {
        addFollow(profile.username);
        profile.following = true;
      }
    }

  },

  data() {
    return {};
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}

});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05b166d8"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map