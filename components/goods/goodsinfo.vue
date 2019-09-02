<template>
  <div>
    <!-- 小球动画 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="showBall" ref="ball"></div>
    </transition>

    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipeItems="swipeItems" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价：
            <span class="market-price">￥{{ goodsInfo.mPrice }}</span>&nbsp;&nbsp;
            销售价：
            <span class="now">￥{{ goodsInfo.price }}</span>
          </p>
          <span class="count">购买数量：</span>
          <numberbox :storage="storage" @getCount="getSelectedCount" class="numberbox"></numberbox>
          <div class="option">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCart(goodsInfo.id)">加入购物车</mt-button>
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
            <span>{{ goodsInfo.storage }}</span>
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
import swiper from "../common/swiper.vue";
import numberbox from "../common/numberbox.vue";

export default {
  computed: {
    goodsInfo() {
      return this.$store.state.goodslist.find(item => item.id == this.id);
    }
  },
  data() {
    return {
      selectedCount: 1,
      id: this.$route.params.id,
      showBall: false,
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
    goDescPage(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goCommentPage(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToCart(goodsId) {
      this.showBall = !this.showBall;
      const goods = this.$store.state.goodslist.find(item => item.id == goodsId)
      const order = {
        id: parseInt(goodsId),
        count: this.selectedCount,
        title: goods.title,
        selected: true,
        price: goods.price,
        img: goods.img
      };
      this.$store.commit("addToCart", order);
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDistance = badgePosition.left - ballPosition.left;
      const yDistance = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDistance}px, ${yDistance}px)`;
      el.style.transition = "all 0.7s cubic-bezier(.17,.67,.83,.67)";
      done();
    },
    afterEnter(el) {
      this.showBall = !this.showBall;
    },
    getSelectedCount(val) {
      this.selectedCount = val;
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
.ball {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  left: 170px;
  top: 387px;
}
</style>