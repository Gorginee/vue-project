<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="storage">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input @change="getNumber" ref="number" id="test" class="mui-input-numbox" type="number" value="1" />
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
    getNumber () {
      const value = this.$refs.number.value
      this.$emit('getCount', parseInt(value))
    }
  },
  props: ['storage'],
};
</script>

<style lang="scss">
</style>