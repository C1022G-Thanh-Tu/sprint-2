/* eslint-disable no-unreachable */
import { SHOW_LIST_ACTION, DECREASE_QUANTITY_ACTION } from "../action/types"
import cartDetailService from "../../service/carDetailService"

export const showListAction = () => async (dispatch) =>{
    try {
        const cartDetailsResponse = await cartDetailService.findAll();
        dispatch({
            type: SHOW_LIST_ACTION,
            payload: cartDetailsResponse.data
        }) 
    } catch (error) {
        console.warn(error);
    }
}

export const decreaseListAction = (id) => async (dispatch) => {
    try {
        await cartDetailService.update(id, -1);
        dispatch({
            type: DECREASE_QUANTITY_ACTION,
            payload: id
        }) 
    } catch (error) {
        console.warn(error);
    }
}