import { SHOW_LIST_ACTION } from "../action/types"

const initialState = []

const carDetailReducer = (cartDetails = initialState, action) => {
    switch (action.type) {
        case SHOW_LIST_ACTION:
            return action.payload
        default:
            return cartDetails;
    }
}

export default carDetailReducer