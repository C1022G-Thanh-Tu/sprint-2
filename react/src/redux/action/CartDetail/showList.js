/* eslint-disable no-unreachable */
import { SHOW_LIST_ACTION, DECREASE_QUANTITY_ACTION, INCREASE_QUANTITY_ACTION, DELETE_ACTION } from "./types"
import cartDetailService from "../../../service/carDetailService"

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

export const increaseListAction = (id) => async (dispatch) => {
    try {
        await cartDetailService.update(id, 1);
        dispatch({
            type: INCREASE_QUANTITY_ACTION,
            payload: id
        }) 
    } catch (error) {
        console.warn(error);
    }
}

export const deleteListAction = (id) => async (dispatch) => {
    try {
        await cartDetailService.remove(id);
        dispatch({
            type: DELETE_ACTION,
            payload: id
        }) 
    } catch (error) {
        console.warn(error);
    }
}