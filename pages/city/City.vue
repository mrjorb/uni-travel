<template>
	<view>
		<city-search></city-search>
		<city-list :cities="cities" :hotCities="hotCities"></city-list>
		<city-alphabet :cities="cities"></city-alphabet>
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
				hotCities: []
			}
		},
		onShow() {
			this.getCityInfo();
		},
		methods: {
			getCityInfo() {
				this.cities = cityData.data.cities;
				this.hotCities = cityData.data.hotCities;
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
