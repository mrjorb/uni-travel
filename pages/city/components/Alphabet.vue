<template>
	<view>
		<ul class="list">
			<li class="item" @click="goTop">#</li>
			<li 
				:ref="item" 
				class="item" 
				:data-letterName="item"
				v-for="item in letters" :key="item"
				@longtap="handleLetterClick"
				@touchstart.prevent="handleTouchStart"
				@touchmove.prevent="handleTouchMove"
				@touchend.prevent="handleTouchEnd"
				>
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
				touchStatus: false,
				timer: null
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
		methods: {
			handleLetterClick(e) {
				let lettername = e.currentTarget.dataset.lettername;
				this.$emit('change', lettername)
			},
			handleTouchStart(e) {
				this.touchStatus = true;
			},
			handleTouchMove(e) {
				if (this.touchStatus) {
					if (this.timer) {
						clearTimeout(this.timer)
					}
					
					this.timer = setTimeout( () => {
						this.startY = this.$refs['A'][0].offsetTop;
						let touchY = e.changedTouches[0].clientY;
						let index = Math.floor( (touchY - this.startY) / 24  );
						
						if (index >=0 && index < this.letters.length) {
							this.$emit('change', this.letters[index]);
						}
					}, 16)
				}
			},
			handleTouchEnd () {
			  this.touchStatus = false;
			},
			goTop() {
				this.$emit('gotop')
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
		z-index: 10;
		right: 0;
		top: 50px;
		bottom: 0;
		width: 30px;
		.item {
			line-height: 20px;
			font-size: 14px;
			color: $bgColor;
			padding: 2px;
		}
	}
</style>
