<template>
	<view>
		<view class="search">
			<input type="text" class="search-input" v-model="keyword" placeholder="输入城市名或拼音">
		</view>
		<view class="search-content" ref="search" v-show="keyword">
			<view>
				<view 
					class="search-item border-bottom"
					v-for="item in list"
					:key="item.id"
					@click="handleCityChange(item.name)"
				>
					{{ item.name }}
				</view>
				<view class="search-item border-bottom" v-show="hasNoData">
					没有找到匹配项
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data() {
			return {
				keyword: '',
				list: [],
				timer: null
			}
		},
		computed: {
			hasNoData() {
				return !this.list.length
			}
		},
		watch: {
			keyword() {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = [];
					return
				}
				this.timer = setTimeout( () => {
					const result = [];
					for (let i in this.cities) {
						this.cities[i].forEach( city => {
							if (city.spell.indexOf(this.keyword) > -1 ||
								city.name.indexOf(this.keyword) > -1
							) {
								result.push(city)
							}
						} )
					}
					this.list = result;
				} ,10)
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
	.search-content {
		position: absolute;
		overflow: hidden;
		z-index: 100;
		top: 45px;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #eeeeee;
		.search-item {
			font-size: 16px;
			line-height: 76rpx;
			padding-left: 20rpx;
			background: #FFFFFF;
			color: #666666;
		}
	}
</style>
