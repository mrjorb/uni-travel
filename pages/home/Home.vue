<template>
	<view class="container">
		<home-header></home-header>
		<home-swiper :imgList="swiperList"></home-swiper>
		<home-icon :iconList="iconList"></home-icon>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</view>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeSwiper from './components/Swiper.vue'
	import HomeIcon from './components/Icon.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeWeekend from './components/Weekend.vue'
	
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
				this.recommendList = indexData.data.recommendList;
				this.weekendList = indexData.data.weekendList;
			}
		},
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcon,
			HomeRecommend,
			HomeWeekend
		}
	}
</script>

<style lang="scss">

</style>
