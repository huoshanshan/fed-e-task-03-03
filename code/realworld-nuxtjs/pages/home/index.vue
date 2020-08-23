<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active: tab == 'your_feed'
                  }"
                  :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }"
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active: tab == 'global_feed'
                  }"
                  to
                >Global Feed</nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link
                  exact
                  class="nav-link active"
                  :class="{
                    active: tag
                  }"
                  :to="{
                   name:'home',
                   query:{
                     tag: tag,
                     tab: 'tag'
                   }
                 }"
                ># {{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <article-lists :articles="articles"/>
          <nav>
            <ul v-if="(totalPage > 1)" class="pagination">
              <li
                v-for="item in totalPage"
                :key="item"
                class="page-item"
                :class="{
                  active: item == page
                }"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name: $route.name,
                    query:{
                      page: item,
                      tag: tag,
                      tab: tab,
                      author: ''
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link
                v-for="(tag, index) in tags"
                :key="index"
                :to="{
                name:'home',
                query:{
                  tag: tag,
                  tab: 'tag'
                }
              }"
                class="tag-pill tag-default"
              >{{ tag }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticle,
  getYourFeedArticle,
  addFavorite,
  deletelFavorite
} from "@/api/article";
import { getTags } from "@/api/tag";
import { mapState } from "vuex";
import articleLists from "@/pages/article/components/article-list";
export default {
  name: "HomePage",
  components: {
    articleLists
  },
  async asyncData({ query }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 10;
    const tag = query.tag;
    const tab = query.tab || "global_feed";
    const loaderArticle = tab == "your_feed" ? getYourFeedArticle : getArticle;
    const [articleList, tagList] = await Promise.all([
      // 获取文章列表
      loaderArticle({
        limit,
        offset: (page - 1) * limit,
        tag
      }),
      // 获取标签列表
      getTags()
    ]);

    const { articles, articlesCount } = articleList.data;
    const { tags } = tagList.data;
    articles.forEach(article => (article.favoriteDisabled = false));
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit); // 向上取整
    },
    ...mapState(["user"])
  },
  methods: {
    onFavorite(article) {
      article.favoriteDisabled = true;
      if (article.favorited) {
        deletelFavorite(article.slug);
        article.favoritesCount += -1;
        article.favorited = false;
      } else {
        addFavorite(article.slug);
        article.favoritesCount += 1;
        article.favorited = true;
      }
      article.favoriteDisabled = false;
    }
  },
  watchQuery: ["page", "tag", "tab"]
};
</script>