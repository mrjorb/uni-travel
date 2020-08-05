<template>
	<view class="header">
		<view class="header-input">
			<view class="iconfont">
				&#xe632;
				<text>请输入城市/景点</text>
			</view>
		</view>
		<view class="header-right">
			北京
			<text class="iconfont arrow-icon">&#xe64a;</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeHeader'
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
			width: 140rpx;
			text-align: center;
			.arrow-icon {
				margin-left: 5rpx;
			}
		}
	}
</style>
