import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        weatherItem: []

    },
    mutations: {
        setWeatherItem(state,payLoad){
            state.weatherItem.unshift(payLoad)
        }
    },
    actions: {

    }
})
