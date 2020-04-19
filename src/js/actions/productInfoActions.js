import { SET_PRODUCT_INFO } from "./constants";
import ProductInfoApi from "../../api/ProductInfo.api";

export function getProductInfo(productId) {
  if (!productId) return;

  return dispatch =>
    ProductInfoApi.get(productId).then(productInfo => {
      const availableItems = productInfo.variation_list.map(item => ({
        ...item,
        quantity: 0
      }));
      return dispatch(setProductInfo(productInfo, availableItems));
    });
}
export function setProductInfo(productInfo, availableItems) {
  return { type: SET_PRODUCT_INFO, productInfo, availableItems };
}
