import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

//Creating the fature selector which will be use int selector

const getCounterState=createFeatureSelector<CounterState>('counter'); 

export const getCounter=createSelector(getCounterState,(state)=>{
    return state.counter;
})

export const getChannelName=createSelector(getCounterState,(state)=>{
    return state.channelName;
})