import { createAction, props } from "@ngrx/store";



export const increment=createAction('increment')
export const decrement=createAction('decrement')
export const reset=createAction('reset')

//Custom Incrementation
//props get the value from the components 
export const customIncrement=createAction('customIncrement',props<{value:number}>())


export const changeChannelName=createAction('changeChannelName')