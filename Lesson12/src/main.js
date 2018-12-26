import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './components/App.vue'

const app = new Vue({
    el:'#app',
    store,
    render:h=>h(App),
})