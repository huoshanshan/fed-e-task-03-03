<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form class="card comment-form"  
        @submit.prevent="addComment">
        <div class="card-block">
          <textarea class="form-control" v-model="comment.body" placeholder="Write a comment..." rows="3"></textarea>
        </div>
        <div class="card-footer">
          <img :src="user.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary"
          >Post Comment</button>
        </div>
      </form>

      <div class="card" v-for="comment in comments" :key="comment.id">
        <div class="card-block">
          <p
            class="card-text"
          >{{comment.body}}</p>
        </div>
        <div class="card-footer">
          <nuxt-link
            :to="{
              name:'profile',
              params:{
                username: comment.author.username
              }
            }"
            class="comment-author">
            <img :src="comment.author.image" class="comment-author-img" />
          </nuxt-link>
          &nbsp;
          <nuxt-link
            :to="{
              name:'profile',
              params:{
                username: comment.author.username
              }
            }"
            class="comment-author">
            {{ comment.author.username }}
          </nuxt-link>
          <span class="date-posted">{{comment.createdAt | date('MMM DD, YYYY')}}</span>
          <span v-if="comment.author.username == user.username" class="mod-options" 
            @click="onDelete(comment.id)"
          >
            <i class="ion-trash-a"></i>
          </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { getComments, addComments, delComments } from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'articleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
      comments:[],
      comment:{
        body:''
      }
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  async mounted() {
    const { data } = await getComments(this.article.slug)
    this.comments = data.comments
  },
  methods: {
    async addComment(){
      const { data } = await addComments(this.article.slug, {
        comment: this.comment
      })
      // 把请求回来的数据添加到 comments 数组中
      this.comments.splice(0, 0, data.comment)
      // 清空文本框
      this.comment.body = ''
    },
    async onDelete (id){
      const { data } = await delComments(this.article.slug, id)
      // 遍历当前文章的所有评论
      this.comments.forEach((element, index) => {
        // 找到和当前要删除的评论 id 相同的从 comments 数组中删除
        if(element.id == id){
          this.comments.splice(index, 1)
        }
      });
    }
  }
};
</script>