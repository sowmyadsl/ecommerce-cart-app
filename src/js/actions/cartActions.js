import {
  ADD_CART_ITEMS,
  UPDATE_CART_ITEMS,
  REMOVE_CART_ITEMS
} from "./constants";

export function addItemsToCart(sku, selectedQty) {
  return (dispatch, getState) => {
    const { availableItems } = getState();

    const foundIndex = availableItems.findIndex(item => item.sku === sku);
    const selectedItem = availableItems[foundIndex];

    selectedItem.availability -= selectedQty;
    if (selectedItem.quantity) {
      selectedItem.quantity += selectedQty;
    } else {
      selectedItem.quantity = selectedQty;
    }

    let modifiedItems = availableItems.map((item, i) => {
      return i === foundIndex ? selectedItem : item;
    });

    return dispatch(addCartItem(getState().productInfo, modifiedItems));
  };
}

export function updItemsInCart(sku, selectedQty) {
  return (dispatch, getState) => {
    const { availableItems } = getState();

    const foundIndex = availableItems.findIndex(item => item.sku === sku);
    const selectedItem = availableItems[foundIndex];
    console.log("inside updItemsInCard", selectedItem);
    const totalQuantity = selectedItem.availability + selectedItem.quantity;

    selectedItem.availability = totalQuantity - selectedQty;
    selectedItem.quantity = selectedQty;
    console.log();
    let modifiedItems = availableItems.map((item, i) => {
      return i === foundIndex ? selectedItem : item;
    });

    return dispatch(updateCartItem(getState().productInfo, modifiedItems));
  };
}

export function delItemsFromCart(sku) {
  return (dispatch, getState) => {
    const { availableItems } = getState();

    const foundIndex = availableItems.findIndex(item => item.sku === sku);
    const selectedItem = availableItems[foundIndex];

    selectedItem.availability += selectedItem.quantity;
    selectedItem.quantity = 0;

    let modifiedItems = availableItems.map((item, i) => {
      return i === foundIndex ? selectedItem : item;
    });

    return dispatch(addCartItem(getState().productInfo, modifiedItems));
  };
}

export function addCartItem(productInfo, availableItems) {
  return { type: ADD_CART_ITEMS, productInfo, availableItems };
}
export function updateCartItem(productInfo, availableItems) {
  return { type: UPDATE_CART_ITEMS, productInfo, availableItems };
}
export function removeCartItem(productInfo, availableItems) {
  return { type: REMOVE_CART_ITEMS, productInfo, availableItems };
}
