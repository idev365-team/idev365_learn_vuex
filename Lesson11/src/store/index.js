import Vuex from 'vuex'


export default function createStore(){
   return new Vuex.Store({
        state:{
            count:1,
        }
    }) 
}