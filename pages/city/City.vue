<template>
	<view>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange" @gotop="handleGotop"></city-alphabet>
	</view>
</template>

<script>
	import CitySearch from './components/Search.vue'
	import CityList from './components/List.vue'
	import CityAlphabet from './components/Alphabet.vue'
	
	import cityData from '../../static/mock/city.js'
	
	export default {
		name: 'City',
		data() {
			return {
				cities: {},
				hotCities: [],
				letter: '',
			}
		},
		onShow() {
			this.getCityInfo();
		},
		methods: {
			getCityInfo() {
				this.cities = cityData.data.cities;
				this.hotCities = cityData.data.hotCities;
			},
			handleLetterChange(letter) {
				this.letter = letter;
			},
			handleGotop() {
				this.scrollTop = 0;
			}
		},
		components:{
			CitySearch,
			CityList,
			CityAlphabet
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
