import axios from "axios";
import { createStore } from "vuex"

export default createStore({
    state: {
        counter: 0,
        colorCode: 'red'
    },
    mutations: {
        incrementCounter(state, newValue) {
            state.counter += newValue;
        },
        
        decrementCounter(state, newValue) {
            state.counter -= newValue;
        },

        setColorCode(state, newValue){
            state.colorCode = newValue
        }
    },
    actions: {
        incrementCounter({commit}) {
            console.log("action incre")
            axios('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1')
            .then((response) => 
            commit('incrementCounter', response.data[0])
            )
        },
        decrementCounter({commit}) {
            console.log("action incre")
            axios('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1')
            .then((response) => 
            commit('decrementCounter', response.data[0])
            )
        },

        setColorCode({commit} , newValue){
            commit('setColorCode', newValue)
        }
    },
    getters: {
        counterSquared(state){
            return state.counter * state.counter
        }
    },
    modules: {

    }
})
