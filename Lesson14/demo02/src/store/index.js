import Vuex from 'vuex'
import createLoggger from 'vuex/dist/logger'

console.log("NODE_ENV:",process.env.NODE_ENV)


export default function createStore(){
   return new Vuex.Store({
        strict:process.env.NODE_ENV!="production",
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