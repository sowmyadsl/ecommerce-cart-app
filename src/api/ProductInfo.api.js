export default class ProductInfoApi {
  static get(productId) {
    const baseUrl = "https://www.adidas.com/api/products/";
    const postString = "/availability";

    const url = baseUrl + productId + postString;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const productInfo = data;
        return Promise.resolve(productInfo);
      })
      .catch(error => Promise.reject(error));
  }
}
