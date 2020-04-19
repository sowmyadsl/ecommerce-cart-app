import {
  SET_PRODUCT_INFO,
  ADD_CART_ITEMS,
  UPDATE_CART_ITEMS,
  REMOVE_CART_ITEMS
} from "../actions/constants";

const initialState = {
  productInfo: {},
  isFetching: true,
  availableItems: []
};

function rootReducer(state = initialState, action) {
  console.log("@@@@@@action:", action);
  switch (action.type) {
    case SET_PRODUCT_INFO: {
      return {
        ...state,
        productInfo: action.productInfo,
        availableItems: action.availableItems,
        isFetching: false
      };
    }
    case ADD_CART_ITEMS: {
      return {
        ...state,
        productInfo: action.productInfo,
        availableItems: action.availableItems
      };
    }
    case UPDATE_CART_ITEMS: {
      return {
        ...state,
        productInfo: action.productInfo,
        availableItems: action.availableItems
      };
    }
    case REMOVE_CART_ITEMS: {
      return {
        ...state,
        productInfo: action.productInfo,
        availableItems: action.availableItems
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
