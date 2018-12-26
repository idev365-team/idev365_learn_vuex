import Vue from 'vue'
import Vuex from 'vuex'
import createStore from './store'
import Counter from './components/counter'

Vue.use(Vuex)

const store = createStore()

const app = new Vue({
    el:"#app",
    store,
    components:{ Counter },
    template:`
        <div class="app">
            <counter></counter>
        </div>
    `
})
