<template>
  <div id="main-box">
    <mt-header class="header" fixed title="fixed top"></mt-header>
    
		<router-view></router-view>

    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-override" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-override" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-override" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span id="badge" class="mui-badge">{{ $store.getters.itemCount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-override" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>


  export default {
    data () { return {} },
    methods: {}
  }
</script>

<style scoped>
	.header {
		z-index: 99;
	}
  #main-box {
    padding-top: 40px;
		padding-bottom: 50px;
  }

	.mui-bar-tab {
    bottom: 0;
    display: table;
    width: 100%;
    height: 50px;
    padding: 0;
    table-layout: fixed;
    border-top: 0;
    border-bottom: 0;
    -webkit-touch-callout: none;
}
	
	.mui-bar-tab .mui-tab-item-override.mui-active {
    color: #007aff;
}


	.mui-bar-tab .mui-tab-item-override {
			display: table-cell;
			overflow: hidden;
			width: 1%;
			height: 50px;
			text-align: center;
			vertical-align: middle;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: #929292;
	}

	.mui-bar-tab .mui-tab-item-override .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

	.mui-bar-tab .mui-tab-item-override .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>