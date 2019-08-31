<template>
  <div>
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipeItems="swipeItems" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">OPPO Find X</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价：
            <span class="market-price">￥2999</span>&nbsp;&nbsp;
            销售价：
            <span class="now">￥2199</span>
          </p>
          <span class="count">购买数量：</span>
          <numberbox class="numberbox"></numberbox>
          <div class="option">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品信息 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            商品货号：
            <span>201988888888</span>
          </p>
          <p>
            库存情况：
            <span>888件</span>
          </p>
          <p>
            上架时间：
            <span>2019-08-31 21:43</span>
          </p>
        </div>
      </div>
    </div>

    <div class="btn-div">
      <mt-button type="danger" size="large" plain @click="goDescPage(id)">图文介绍</mt-button>
    </div>
    <div class="btn-div">
      <mt-button type="primary" size="large" plain @click="goCommentPage(id)">商品评论</mt-button>
    </div>
  </div>
</template>


<script>
import swiper from "../common/swiper.vue"
import numberbox from "../common/numberbox.vue"

export default {
  data() {
    return {
      id: this.$route.params.id,
      swipeItems: [
        {
          img:
            "http://img14.360buyimg.com/n5/s108x108_jfs/t1/83118/1/488/217626/5ceb8ee6Edc08ec3c/d44fcf68cdedc317.jpg",
          url: "https://item.jd.com/100003534811.html#none"
        },
        {
          img:
            "http://img14.360buyimg.com/n5/s108x108_jfs/t1/36084/30/10910/154902/5ceb8ee6E4f57e9a4/06fbfb70437f97b0.jpg",
          url: "https://item.jd.com/100003534811.html#none"
        },
        {
          img:
            "http://img14.360buyimg.com/n5/s108x108_jfs/t1/68972/7/502/164027/5ceb8ee6E12dfb709/6f53f32681527721.jpg",
          url: "https://item.jd.com/100003534811.html#none"
        }
      ]
    };
  },
  methods: {
    goDescPage (id) {
      this.$router.push({ name: 'goodsdesc', params: { id } })
    },
    goCommentPage (id) {
      this.$router.push({ name: 'goodscomment', params: { id } })
    }
  },
  components: { swiper, numberbox }
};
</script>

<style lang="scss">
.mui-card-content-inner {
  p {
    .market-price {
      text-decoration: line-through;
    }
    .now {
      font-size: 15px;
      color: red;
      font-weight: bold;
    }
  }
  .option {
    display: block;
    margin-top: 8px;
  }
  .numberbox {
    display: inline;
  }
  .count {
    font-size: 18px;
    color: #555;
  }
}
.btn-div {
  margin: 8px;
}
</style>