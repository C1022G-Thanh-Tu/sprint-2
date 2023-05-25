import { combineReducers } from "redux"
import carDetailReducer from "./cartDetailReducer"

export const rootReducer = combineReducers({
    cartDetails: carDetailReducer
})