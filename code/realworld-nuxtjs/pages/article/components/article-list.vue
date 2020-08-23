<template>
  <div>
    <div v-if="(articles.length > 0)" v-for="article in articles" :key="article.slug" class="article-preview">
      <div class="article-meta">
        <nuxt-link
          :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }"
        >
          <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
          <nuxt-link
            :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }"
            class="author"
          >{{ article.author.username }}</nuxt-link>
          <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
        </div>
        <button
          class="btn btn-outline-primary btn-sm pull-xs-right"
          :class="{
                  active: article.favorited
                }"
          @click="onFavorite(article)"
          :disabled="article.favoriteDisabled"
        >
          <i class="ion-heart"></i>
          {{ article.favoritesCount }}
        </button>
      </div>
      <nuxt-link
        :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }"
        class="preview-link"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
      </nuxt-link>
    </div>
    <div v-else>
      dfedewfewfwfwe
    </div>
  </div>
</template>

<script>
import {
  addFavorite,
  deletelFavorite
} from "@/api/article";
export default {
  name: "articleLists",
  props: {
    articles: {
      type: Array,
      require: true
    },
  },
  data() {
    return {
    };
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
  }
};
</script>