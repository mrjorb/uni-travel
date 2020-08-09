<template>
	<view class="list">
		<view>
			<scroll-view scroll-y="true" :scroll-top="scrollTop" class="scroll-wrapper">
				<view>
					<view class="title border-topbottom">当前城市</view>
					<view class="btn-list">
						<view class="btn-wrapper">
							<view class="btn" style="border-color: #00BCD4;color: #00BCD4;">{{ city }}</view>
						</view>
					</view>
				</view>
				<view>
					<view class="title border-topbottom">热门城市</view>
					<view class="btn-list">
						<view class="btn-wrapper" v-for="item in hotCities" :key="item.id" @click="handleCityChange(item.name)">
							<view class="btn">{{ item.name }}</view>
						</view>
					</view>
				</view>
				<ul v-for="(item, key) in cities" :key="key">
					<li class="title border-topbottom" :id="key" :ref="key">{{ key }}</li>
					<ul class="item-list">
						<li class="item border-bottom" v-for="subItem in item" :key="subItem.id" @click="handleCityChange(subItem.name)">
							{{ subItem.name }}
						</li>
					</ul>
				</ul>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name: 'CityList',
		props: {
			cities: Object,
			hotCities: Array,
			letter: String
		},
		data() {
			return {
				scrollTop: 0
			}
		},
		computed: {
			letters() {
				const letters = [];
				for (let i in this.cities) {
					letters.push(i);
				}
				return letters;
			},
			...mapState(['city'])
		},
		watch: {
			letter(newVal) {
				const element = this.$refs[newVal][0];
				// const element = document.getElementById(newVal);
				this.scrollTop = element.offsetTop;
			}
		},
		methods: {
			handleCityChange(city) {
				this.changeCity(city)
				uni.navigateBack()
			},
			...mapMutations(['changeCity'])
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
