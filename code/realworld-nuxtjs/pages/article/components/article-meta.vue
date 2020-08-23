<template>
  <div class="article-meta">
    <nuxt-link
      :to="{
      name:'profile',
      params: {
        username: article.author.username
      }
    }"
    >
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
      name:'profile',
      params: {
        username: article.author.username
      }
    }"
      >{{ article.author.username }}</nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <template v-if="user.username != article.author.username">
      <button
        class="btn btn-sm btn-outline-secondary"
        :class="{
          active: article.author.following
        }"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{ article.author.following ? "unFollow" : "Follow" }} {{ article.author.username }}
        <span
          class="counter"
        ></span>
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{
          active: article.favorited
        }"
        @click="onFavorite(article)"
        :disabled="article.avoriteDisabled"
      >
        <i class="ion-heart"></i>
        &nbsp;
        {{ article.favorited ? "Unfavorite" : "favorite"}} Article
        <span
          class="counter"
        >({{ article.favoritesCount }})</span>
      </button>
    </template>
    <template v-else>
      <nuxt-link
        class="btn btn-outline-secondary btn-sm"
        :to="{
          name:'editor',
          params: {
            slug:article.slug
          }
        }"
      >
        <i class="ion-edit"></i> Edit Article
      </nuxt-link>
      <button
        class="btn btn-outline-danger btn-sm"
        @click="delArticle(article.slug)"
      >
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </template>
  </div>
</template>

<script>
import { addFavorite, deletelFavorite, deleteArticle } from "@/api/article";
import { mapState } from "vuex";
export default {
  name: "articleMeta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    onFavorite(article) {
      console.log(article, "article");
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
    },
    async delArticle(slug) {
      try {
        const {data} = await deleteArticle(slug)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>