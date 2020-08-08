<template>
	<view>
		<ul class="list">
			<li :ref="item" class="item" v-for="item in letters" :key="item" @click="handleLetterClick">
				{{ item }}
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		data() {
			return {
				startY: 0,
			}
		},
		computed: {
			letters() {
				const letters = [];
				for (let i in this.cities) {
					letters.push(i);
				}
				return letters;
			}
		},
		onReady() {
			console.log(12)
			console.log(this.$refs['A'][0])
			this.startY = this.$refs['A'][0].offsetTop;
		},
		methods: {
			handleLetterClick(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import  '../../../static/style/varibles.scss';
	
	.list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		right: 0;
		top: 100px;
		bottom: 0;
		width: 40rpx;
		.item {
			line-height: 20px;
			font-size: 14px;
			color: $bgColor;
		}
	}
</style>
