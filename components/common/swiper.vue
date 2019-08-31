<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item  v-for="item in swipeItems" :key="item.img">
        <img :src="item.img" alt="Loading..." :class="{ isFull: isFull }"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: ['swipeItems', 'isFull']
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  text-align: center;
  height: 200px;
  .mint-swipe-item {
    img {
      height: 100%;
    }
  }
}

.isFull {
  width: 100%;
}
</style>