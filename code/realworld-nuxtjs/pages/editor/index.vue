<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(messages,field) in errors">
              <li v-for="(msg, index) in messages" :key="index">{{field}} {{msg}}</li>
            </template>
          </ul>
          <form >
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="article.title"
                  placeholder="Article Title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="article.description"
                  placeholder="What's this article about?"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="article.body"
                  placeholder="Write your article (in markdown)"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="article.tag"
                  placeholder="Enter tags"
                  @keyup.enter="addTag"
                />
                <div class="tag-list">
                  <span v-for="tag in article.tagList" :key="tag" class="tag-default tag-pill ng-binding ng-scope">
                  <i class="ion-close-round"></i>
                  {{tag}}
                </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click.prevent="onSubmit">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, getArticleContent, updateArticle } from "@/api/article";
export default {
  name: "EditorPage",
  middleware: "authenticated",
    async asyncData({ params }){
      let articleInfo
      let err
      try {
        if (params && params.slug) {
          const { data } = await getArticleContent(params.slug)
          articleInfo = data.article    
        }
      } catch (error) {
        err = true
      }
      // console.log(err)
      return {
        articleInfo,
        err
      }
    },
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tag: '',
        tagList: []
      },
      errors: {}
    };
  },
  created () {
    if(this.articleInfo) this.article = this.articleInfo
    //首次获取文章数据时出错，跳转到首页
    if(this.err) this.$router.push('/')
  },
  methods: {
    async onSubmit() {
      try {       
        const { data } = this.article.slug 
        ? await updateArticle({
            article: this.article
          })
        : await createArticle({
            article: this.article
          })
        this.$router.push(`/article/${data.article.slug}`)
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    },
    addTag() {
      const article = this.article
      article.tagList.push(article.tag)
      article.tag = ""
      return false
    }
  }
};
</script>