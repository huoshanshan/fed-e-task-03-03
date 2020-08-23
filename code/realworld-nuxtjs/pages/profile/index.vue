<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p>{{ profile.bio }}</p>

            <nuxt-link v-if="(user.username == profile.username)" class="btn btn-sm btn-outline-secondary action-btn" to="/setting">
              <i class="ion-gear-a"></i> Edit Profile Settings
            </nuxt-link>
            <button v-else class="btn btn-sm btn-outline-secondary action-btn" @click="onFollow(profile)">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{profile.following ? "Unfollow" : "Follow"}} {{profile.username}}
            </button>

          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  exact
                  :class="{
                    active: author == 'author' || (!author && !favorited)
                  }"
                  :to="{
                  name:'profile',
                  query : {
                    author: 'author'
                  }
                }"
                >My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: favorited == 'favorited'
                  }"
                  exact
                  :to="{
                  name:'profile',
                  query : {
                    favorited: 'favorited',
                  }
                }"
                >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <article-lists :articles="articles" :totalPage="totalPage" />

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
                    name: 'profile',
                    query:{
                      author: author,
                      favorited: favorited,
                      page: item,
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getProfile, addFollow, delFollow } from "@/api/profile";
import { getArticle } from "@/api/article";
import articleLists from "@/pages/article/components/article-list";
export default {
  name: "ProfilePage",
  middleware: "authenticated",
  components: {
    articleLists
  },
  async asyncData({ params, query }) {
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
    const [profileInfo, articlesList] = await Promise.all([
      getProfile(params.username),
      getArticle(param)
    ]);

    const { articles, articlesCount } = articlesList.data;
    const { profile } = profileInfo.data;
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
  computed: {
    ...mapState(["user"]),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }
  },
  methods: {
    async onFollow(profile){
      if(profile.following){
        delFollow(profile.username)
        profile.following = false
      } else {
        addFollow(profile.username)
        profile.following = true
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
};
</script>