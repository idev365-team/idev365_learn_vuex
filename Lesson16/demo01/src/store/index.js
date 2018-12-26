import Vuex from 'vuex'
import createLoggger from 'vuex/dist/logger'
import { mutations } from './mutations'

export default function createStore(){
   return new Vuex.Store({
        state:{
            count:1,
        },
        mutations,
        plugins:[
            createLoggger()
        ]
    }) 
}