import {
  SET_CARTS_ACTION,
  DECREASE_QUANTITY_ACTION,
  INCREASE_QUANTITY_ACTION,
  DELETE_ACTION,
  ADD_ACTION,
} from "../../action/CartDetail/types";

const initialState = [];

const cartDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARTS_ACTION:
      return action.payload;

    case ADD_ACTION:
      return action.payload;

    case DELETE_ACTION: {
      const newCarts = state.filter((cart) => {
        return cart.id !== action.payload;
      });

      return newCarts;
    }

    case INCREASE_QUANTITY_ACTION: {
      const newCarts = state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            quantity: cart.quantity + 1,
          };
        }

        return cart;
      });

      return newCarts;
    }

    case DECREASE_QUANTITY_ACTION: {
      console.log(action);
      console.log(state);
      const newCarts = state
        .map((cart) => {
          if (cart.id === action.payload) {
            return {
              ...cart,
              quantity: cart.quantity - 1,
            };
          }

          return cart;
        })
        .filter((cart) => cart.quantity > 0);

      return newCarts;
    }

    default:
      return state;
  }
};

export default cartDetailReducer;
