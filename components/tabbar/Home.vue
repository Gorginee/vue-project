<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipeItems" :key="item.img">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/news/newslist">
          <img src="../../imgs/home/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/home/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/home/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/home/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/home/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../imgs/home/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeItems: [
        {
          img: "https://static-image.xfz.cn/1566553920_239.png",
          url: "https://jinshuju.net/f/HfPDMu?adf=top.banner"
        },
        {
          img: "https://static-image.xfz.cn/1566465514_774.jpg",
          url:
            "https://mp.weixin.qq.com/s?__biz=MzA3OTMxMDUzOQ==&mid=2653786724&idx=1&sn=dc44b42659a93f0b63e2e4c0db0a5543&chksm=846c49c0b31bc0d63a305f7ce20f80f734e70d2085db32fcc2ad368c6da14533b00f48c144a0&token=1130&adf=top.banner"
        },
        {
          img: "https://static-image.xfz.cn/1566297399_819.png",
          url: "https://www.xfz.cn/form/class?acid=8AuvgX3i1N&adf=top.banner"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: lightblue;
    }
    &:nth-child(2) {
      background-color: lightcoral;
    }
    &:nth-child(3) {
      background-color: lightcyan;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  
}



img {
    width: 60px;
    height: 60px;
  }

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}

</style>