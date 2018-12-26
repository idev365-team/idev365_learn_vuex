import Vuex from 'vuex'

function createStore(){
    return new Vuex.Store({
        state: {
            count: 0,
            message:"Finish Vuex&Webpack Project",
        },
        mutations: {
            increment (state) {
                state.count++
            }
        }
    })
}

export default createStore