<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <textarea placeholder="请输入内容..." maxlength="120" v-model="postContent"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <!-- Comment content -->
    <div class="comm-content">
      <ul>
        <li v-for="item in commentItems" :key="item.index">
          <h4>{{ item.username }}@{{ item.pub_time | dateFormat }}</h4>
          <p>{{ item.content }}</p>
        </li>
      </ul>
    </div>

    <mt-button type="danger" size="large" plain @click="getMoreComment">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      commentCount: 5,
      postContent: '',
      comments: []
    }
  },
  methods: {
    postComment () {
      const content = this.postContent.trim()
      if (!content.length) {
        return Toast('评论内容不能为空！')
      }
      this.comments.unshift({ username: '匿名用户', pub_time: Date.now(), content: content })
      this.postContent = ''
    },

    getMoreComment () {
      // 如果评论数大于请求显示的评论数，则再加载五条评论
      if (this.comments.length > this.commentCount) {
        this.commentCount += 5
      }
    }
  },
  computed: {
    commentItems () {
      return this.comments.slice(0, this.commentCount)
    }
  }
}
</script>

<style lang="scss">
  .comment-container {
    margin-top: 15px;
    textarea {
      margin: 0
    }
    .comm-content {
    ul {
      margin: 0;
      padding: 3px;
      list-style: none;
      background-color: #eee;
      li {
        border-bottom: 1px solid #aaa;
        h4 {
          font-size: 15px;
        }
      }
    }
  }
  }
</style>