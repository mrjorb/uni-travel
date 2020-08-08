<template>
	<view>
		<view class="search">
			<input type="text" class="search-input" v-model="keyword" placeholder="输入城市名或拼音">
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CitySearch',
		data() {
			return {
				keyword: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import  '../../../static/style/varibles.scss';
	.search{
		position: fixed;
		width: 100%;
		z-index: 1;
		height: 80rpx;
		padding: 10rpx 10rpx 0;
		background: $bgColor;
		.search-input {
			width: 95%;
			height: 60rpx;
			line-height: 60rpx;
			padding: 0 10rpx;
			text-align: center;
			border-radius: 6px;
			background: #FFFFFF;
			color: #666666;
		}
	}
</style>
