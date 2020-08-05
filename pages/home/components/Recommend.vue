<template>
	<view>
		<view class="title">热销推荐</view>
		<ul>
			<li class="recommend-item" v-for="recommendItem in recommendList" :key="recommendItem.id">
				<img class="item-img" :src="recommendItem.imgUrl">
				<view class="item-info">
					<view class="item-title">{{ recommendItem.title }}</view>
					<view class="item-desc">{{ recommendItem.desc }}</view>
					<view class="item-btn">查看详情</view>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			recommendList: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import  '../../../static/style/mixins.scss';
	.title {
		margin-top: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		background: #eeeeee;
		text-indent: 20rpx;
	}
	
	.recommend-item {
		display: flex;
		flex-direction: row;
		overflow: hidden;
		height: 190rpx;
		.item-img {
			width: 170rpx;
			height: 170rpx;
			padding: 10rpx;
		}
		.item-info {
			flex: 1;
			padding: 10rpx;
			min-width: 0;
			.item-title {
				font-size: 16px;
				line-height: 54rpx;
				@include ellipsis;
			}
			.item-desc {
				font-size: 16px;
				line-height: 40rpx;
				color: #cccccc;
				@include ellipsis;
			}
			.item-btn {
				width: 160rpx;
				margin-top: 25rpx;
				padding: 0 20rpx;
				line-height: 44rpx;
				font-size: 16px;
				text-align: center;
				background: #ff9300;
				color: #ffffff;
				border-radius: 10rpx;
			}
		}
	}
</style>
