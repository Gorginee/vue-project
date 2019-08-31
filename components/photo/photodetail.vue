<template>
  <div class="photo-info-container">
    <div class="photo-info-head">
      <p>{{ photoInfo.title }}</p>
      <p>
        <span>发布时间：{{ photoInfo.pub_time | dateFormat }}</span>
        <span>阅读：{{ photoInfo.view_count }}</span>
      </p>
    </div>
    <hr />

    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    <div class="photo-info-content" v-html="photoInfo.content"></div>

    <photo-info-comment></photo-info-comment>
  </div>
</template>

<script>
import photoInfoCmment from "../news/comment.vue";

export default {
  data() {
    return {
      slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ],
      photoInfo: {
        title: "photo info title",
        pub_time: Date.now(),
        view_count: 88,
        content:
          "DffjdlfjldjfldjlfdjfldlLjfdlfjdkj机砥砺奋进的FJ的金发的机砥砺奋进的FJ的金发的机砥砺奋进的FJ的金发的 fd飞机砥砺奋进的FJ的金发的链接d"
      }
    };
  },

  components: { "photo-info-comment": photoInfoCmment }
};
</script>


<style lang="scss">
.photo-info-container {
  padding: 0 5px;
  .photo-info-head {
    padding-top: 5px;
    p:first-child {
      font-size: 15px;
    }
    p:last-child {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
  hr {
    padding: 0;
    margin: 0;
  }
}
</style>