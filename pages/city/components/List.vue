<template>
	<view class="list">
		<view>
			<scroll-view scroll-y="true" class="scroll-wrapper">
				<view>
					<view class="title border-topbottom">当前城市</view>
					<view class="btn-list">
						<view class="btn-wrapper">
							<view class="btn">北京</view>
						</view>
					</view>
				</view>
				<view>
					<view class="title border-topbottom">热门城市</view>
					<view class="btn-list">
						<view class="btn-wrapper" v-for="item in hotCities" :key="item.id">
							<view class="btn">{{ item.name }}</view>
						</view>
					</view>
				</view>
				<view v-for="(item, key) in cities" :key="key">
					<view class="title border-topbottom">{{ key }}</view>
					<view class="item-list">
						<view class="item border-bottom" v-for="subItem in item" :key="subItem.id">
							{{ subItem.name }}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'CityList',
		props: {
			cities: Object,
			hotCities: Array
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.border-topbottom {
		&::before {
			border-color: #CCCCCC;
		}

		&::after {
			border-color: #CCCCCC;
		}
	}

	.border-bottom {
		&::before {
			border-color: #CCCCCC;
		}
	}

	.list {
		position: absolute;
		overflow: hidden;
		top: 45px;
		left: 0;
		right: 0;
		bottom: 0;
		.scroll-wrapper {
			width: 100%;
			height: calc(100vh - 90px);
			.title {
				line-height: 70rpx;
				background: #eeeeee;
				padding-left: 20rpx;
				font-size: 16px;
			}
			.btn-list {
				padding: 10rpx;
				overflow: hidden;
			
				.btn-wrapper {
					float: left;
					width: 33.33%;
			
					.btn {
						margin: 10rpx;
						padding: 10rpx;
						text-align: center;
						border: 2rpx solid #CCCCCC;
						border-radius: 5px;
					}
				}
			}
			.item-list {
				.item {
					line-height: 76rpx;
					padding-left: 20rpx;
				}
			}
		}
	}
</style>
