import { SHOW_LIST_ACTION, DECREASE_QUANTITY_ACTION, INCREASE_QUANTITY_ACTION, DELETE_ACTION } from "../../action/CartDetail/types"

const initialState = []

const cartDetailReducer = (cartDetails = initialState, action) => {
    switch (action.type) {
        case SHOW_LIST_ACTION:
            return action.payload
        case DECREASE_QUANTITY_ACTION:
            const decreasedCartDetails = cartDetails.map(cartDetail => {
                if (cartDetail.id === action.payload) {
                    return { ...cartDetail, quantity: cartDetail.quantity - 1 };
                }
                return cartDetail;
            });
            return decreasedCartDetails;
        case INCREASE_QUANTITY_ACTION:
            const increasedCartDetails = cartDetails.map(cartDetail => {
                if (cartDetail.id === action.payload) {
                    return { ...cartDetail, quantity: cartDetail.quantity + 1 };
                }
                return cartDetail;
            });
            return increasedCartDetails;
        case DELETE_ACTION:
            const deletedCartDetails = cartDetails.filter(cartDetail => cartDetail.id !== action.payload);
            return deletedCartDetails
        default:
            return cartDetails;
    }
}

export default cartDetailReducer