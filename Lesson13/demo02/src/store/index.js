import Vuex from 'vuex'
import createLoggger from 'vuex/dist/logger'


export default function createStore(){
   return new Vuex.Store({
        state:{
            count:1,
        },
        mutations: {
            increment (state) {
                state.count++
            }
        },
        plugins:[
            createLoggger()
        ]
    }) 
}