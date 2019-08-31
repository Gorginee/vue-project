<template>
  <div>
    <div class="goods-container">
      <ul>
        <li v-for="item in [1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1]" :key="item.index" @click="goInfoPage(item)">
          <div>
            <div class="goods-main-box">
            <img
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13c41ccd1bd8b38f9017c6faf569fb24.jpg?thumb=1&w=200&h=200&f=webp&q=90"
              alt
            />
            <p>Redmi note 8 pro</p>
          </div>
          <div class="goods-info-box">
            <div class="price-box">
              <span>￥2199</span>
              <s>￥2999</s>
            </div>
            <p>
              <span>热卖中</span>
              <span>库存88件</span>
            </p>
          </div>
          </div>
        </li>
      </ul>

      <mt-button size="large" type="danger">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goInfoPage (item){
      this.$router.push('/goodsinfo/' + item)
    }
  }
};
</script>


<style lang="scss">
.goods-container {
  ul {
    padding: 0 5px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    background-color: #eee;
    li {
      box-shadow: 3px 3px 1px #e1e1e1;;
      margin: 3px 5px;
      .goods-main-box {
        p {
          margin: 0;
          font-size: 16px;
          width: 176px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        img {
          width: 176px;
          height: 230px;
        }
      }
      .goods-info-box {
        padding: 1px;
        .price-box {
          span:first-child {
            font-size: 18px;
            color: red;
          }
          s {
            font-size: 13px;
            color: #444;
            
          }
          
        }
        p {
            display: flex;
            justify-content: space-between;
          }
      }
    }
  }
}
</style>