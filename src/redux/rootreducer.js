import { combineReducers } from "redux";
import { mobileReducer } from "./mobile-reducer/mobile-reducer"




export const rootReducer = combineReducers( {
    toggle : mobileReducer,
});