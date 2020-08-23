<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <article-meta :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body">
          
        </div>
      </div>

      <ul class="tag-list">
          <li v-for="tag in article.tagList" :key="tag" class="tag-default tag-pill tag-outline ng-binding ng-scope">
            {{ tag }}
          </li>
        </ul>

      <hr />

      <div class="article-actions">
        <article-meta :article="article" />
      </div>

      <article-comments :article="article" />
      
    </div>
  </div>
</template>

<script>
import { getArticleContent } from '@/api/article'
import MarkdownIt from 'markdown-it'
import articleMeta from './components/article-meta'
import articleComments from './components/article-comments'
export default {
  components: {
    articleMeta,
    articleComments
  },
  async asyncData({ params }) {
    const { data } = await getArticleContent(params.slug)
    const { article } = data
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    return {
      article
    }
  },
  head() {
    return {
      title: this.article.title + '-realworld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
};
</script>