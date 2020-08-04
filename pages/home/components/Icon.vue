<template>
	<view class="">
		<uni-grid :column="4" :show-border="false"  :square="false">
		    <uni-grid-item class="icon-item" v-for="iconItem in iconList" :key="iconItem.id">
				<image class="icon-img" :src="iconItem.imgUrl"></image>
		        <text class="icon-desc">{{ iconItem.desc }}</text>
		    </uni-grid-item>
		</uni-grid>
	</view>
	
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	
	export default {
		name: 'HomeIcon',
		props: {
			iconList: {
				type: Array,
				default: []
			}
		},
		components: {
			uniGrid,
			uniGridItem
		}
	}
</script>

<style lang="scss" scoped>
	.icon-item {
		display: flex;
		margin-top: 10px;
		justify-content: center;
		text-align: center;
		.icon-img {
			margin-left: 25px;
			width: 100rpx;
			height: 100rpx;
		}
		.icon-desc {
			font-size: 14px;
		}
	}
</style>
