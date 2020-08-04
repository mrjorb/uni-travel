<template>
	<view class="container">
		<home-header></home-header>
		<home-swiper :imgList="swiperList"></home-swiper>
		<home-icon :iconList="iconList"></home-icon>
	</view>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcon from './components/Icon.vue'
	
	import indexData from '../../static/mock/index.js'
	export default {
		data() {
			return {
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: []
			}
		},
		onShow() {
			this.getHomeInfo();
		},
		methods: {
			getHomeInfo() {
				this.swiperList = indexData.data.swiperList;
				this.iconList = indexData.data.iconList;
				console.log(this.iconList)
			}
		},
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcon
		}
	}
</script>

<style lang="scss">

</style>
