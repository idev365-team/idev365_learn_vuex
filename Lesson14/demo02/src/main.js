import Vue from 'vue'
import Vuex from 'vuex'
import createStore from './store';

Vue.use(Vuex)

const store = createStore();
window.store = store;

const app = new Vue({
    el:'#app',
    store,
    template:`
        <div>
            Hello Vue {{ $store.state.count }}
        </div>
    `
})

