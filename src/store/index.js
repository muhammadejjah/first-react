import { createStore } from 'redux'
const initState = { value: 0 ,show :true}
const counterReducer = (state = initState, action) => {
    console.log(action)
    console.log(state.show)
    if(action.type ==="plus"){
        if(state.value<100000){
            return {...state,value:state.value + +action.payload}
        }
    }
    if(action.type ==="min"){
        if(state.value>0){
            return {...state,value:state.value - +action.payload}
        }
    }
    if(action.type ==="toggle"){
        return {...state,show:!state.show}
    }
    return state
}
const store = createStore(counterReducer)

export default store;