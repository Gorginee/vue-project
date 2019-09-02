<template>
  <div class="numberbox-container">
    <div class="mui-numbox" data-numbox-min="1" data-numbox-max="60">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input @change="updateCartInfo" ref="number" id="test" class="mui-input-numbox" type="number" :value="initCount" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../src/lib/mui/js/mui.min.js'


export default {
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    updateCartInfo () {
      const selectCount = parseInt(this.$refs.number.value)
      this.$store.commit('updateCart', { id: this.goodsId, count: selectCount })
    }
  },
  props: ['initCount', 'goodsId']
}
</script>

<style lang="scss">
</style>