<template>
	<view>
		<view class="title">周末去哪儿</view>
		<ul>
			<li class="weekend-item" v-for="weekendItem in weekendList" :key="weekendItem.id">
				<view class="item-img-wrapper">
					<img class="item-img" :src="weekendItem.imgUrl">
				</view>
				<view class="item-info">
					<view class="item-title">{{ weekendItem.title }}</view>
					<view class="item-desc">{{ weekendItem.desc }}</view>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		name: 'HomeWeekend',
		props: {
			weekendList: {
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
	.item-img-wrapper {
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 37.09%;
		.item-img {
			width: 100%;
		}
	}
	.item-info {
		padding: 10rpx;
		.item-title {
			line-height: 54rpx;
			font-size: 16px;
			@include ellipsis;
		}
		.item-desc {
			line-height: 40rpx;
			font-size: 16px;
			color: #cccccc;
			@include ellipsis;
		}
	}
</style>
