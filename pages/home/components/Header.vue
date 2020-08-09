<template>
	<view class="header">
		<view class="header-input" @tap="toCity">
			<view class="iconfont">
				&#xe632;
				<text>请输入城市/景点</text>
			</view>
		</view>
		<view class="header-right">
			{{ currentCity }}
			<text class="iconfont arrow-icon">&#xe64a;</text>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'HomeHeader',
		computed: {
			...mapState({
				currentCity: 'city'
			})
		},
		methods: {
			toCity() {
				uni.navigateTo({
					url: '/pages/city/City'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import  '../../../static/style/varibles.scss';
	.header {
		display: flex;
		padding-left: 10rpx;
		height: $headerHeight;
		line-height: $headerHeight;
		background: $bgColor;
		color: #FFFFFF;
		.header-input {
			flex: 1;
			height: 64rpx;
			line-height: 64rpx;
			margin-top: 12rpx;
			margin-left: 5rpx;
			padding-left: 10rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			font-size: 16px;
			color: #CCCCCC;
		}
		.header-right {
			float: right;
			min-width: 100rpx;
			padding: 0 10rpx;
			text-align: center;
			.arrow-icon {
				margin-left: 5rpx;
			}
		}
	}
</style>
