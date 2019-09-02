<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div
          class="mui-card-content-inner mui-card-content-inner-goods"
          v-for="item in $store.state.cart"
          :key="item.id"
        >
          <mt-switch @change="changeSwitch" v-model="item.selected"></mt-switch>
          <div>
            <img :src="item.img" />
          </div>
          <div class="goods-info">
            <p>{{ item.title }}</p>
            <div>
              <span class="price">{{ item.price }}</span>
              <numberbox :initCount="item.count" :goodsId="item.id"></numberbox>
              <a @click="delGoods(item.id)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner settlement">
          <div>
            <p class="total">总计（不含运费）</p>
            <p>
              已勾选
              <span class="goods-count">{{ goodsCount }}</span>件商品，总计￥
              <span class="total-price">{{ totalPrice }}</span>
            </p>
          </div>
          <div>
            <mt-button type="danger" size="normal">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from "../common/numberbox-cart.vue";

export default {
  computed: {
    goodsCount() {
      let count = 0;
      this.$store.state.cart.forEach(item => {
        if (item.selected) {
          count += item.count;
        }
      });
      return count;
    },
    totalPrice() {
      let tPrice = 0;
      this.$store.state.cart.forEach(item => {
        if (item.selected) {
          tPrice += parseInt(item.price * item.count);
        }
      });
      return tPrice;
    }
  },
  components: { numberbox },
  methods: {
    delGoods(goodsId) {
      this.$store.commit("delGoods", parseInt(goodsId));
    },
    changeSwitch() {
      this.$store.commit("changeSwitch");
    }
  }
};
</script>

<style lang="scss">
.mui-card-content-inner-goods {
  display: flex;
  justify-content: space-between;
  img {
    width: 100px;
    height: 100px;
  }
  .goods-info {
    .numberbox-container {
      display: inline;
    }
    p {
      font-size: 18px;
      color: #000;
    }
    .price {
      font-size: 15px;
      color: red;
      font-weight: bold;
    }
  }
}

.settlement {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    .total {
      font-size: 20px;
      background-color: #333;
    }
    .goods-count,
    .total-price {
      font-size: 18px;
      color: red;
      font-weight: bold;
    }
  }
}
</style>