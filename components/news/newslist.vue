<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/news/newsdetail/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h2>{{ item.title }}</h2>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>阅读：{{ item.click }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created: function () {
    this.getNewsList()
  },
  data () {
    return { 
      newslist: []
    }
  },
  methods: {
    getNewsList () {
    this.$http.get('http://www.liulongbin.top:3005/api/getnewslist')
    .then(function (data) {
      this.newslist = data.body.message
    })
  }
  }

};
</script>

<style lang="scss">
.mui-media-body {
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between
  }
}
</style>