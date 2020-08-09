import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京';
try {
	if (uni.getStorageSync('city')) {
		defaultCity = uni.getStorageSync('city');
	}
} catch (e) {}

export default new Vuex.Store({
	state: {
		city: defaultCity
	},
	actions: {
		changeCity(ctx, city) {
			ctx.commit('changeCity', city)
		}
	},
	mutations: {
		changeCity(state, city) {
			state.city = city;
			uni.setStorageSync('city', city)
		}
	}
});