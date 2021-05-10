import { state } from "@angular/animations";
import {Action,createReducer, on } from "@ngrx/store";
import { changeChannelName, customIncrement, decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state"



const _counterReducer=createReducer(initialState,on(increment,(state)=>{
    return{
        ...state,
        counter:state.counter+1
       
    };
}),on(decrement,(state)=>{
    return{
    ...state,
    counter:state.counter-1
}

}),
on(reset,(state)=>{
    return{
        ...state,
        counter:0
    }
}),
on(customIncrement,(state,action)=>{
    console.log("My action is"+action)
    return{
        ...state,
        counter:state.counter+action.value
    }
}),
on(changeChannelName,(state)=>{
    return{
        ...state,
        channelName:'The name is changed to Subhadwip'
    }
})

)

export function counterReducer(state: { counter: number; } | any,action: Action){
    return _counterReducer(state,action)
}



