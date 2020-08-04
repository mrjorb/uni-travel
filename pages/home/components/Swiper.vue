<template>
	<view class="uni-padding-wrap">
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="imgItem in imgList" :key="imgItem.id">
						<view class="swiper-item uni-bg-red">
							<image class="swiper-img" :src="imgItem.imgUrl" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeSwiper',
		props: {
			imgList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},

		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.swiper-img {
		width: 100%;
	}
</style>
