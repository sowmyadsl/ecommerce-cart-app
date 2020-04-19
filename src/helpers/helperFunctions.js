export const getAvailableVariations = variationList =>
  variationList.reduce(
    (accumulator, variation) =>
      variation.availability ? [...accumulator, variation] : [...accumulator],
    []
  );

export const mapStateToProps = state => {
  return {
    productInfo: state.productInfo,
    isFetching: state.isFetching,
    availableItems: state.availableItems
  };
};

export const getItemCount = items => {
  let itemCount = items.reduce(
    (itemCount, item) =>
      item.quantity ? (itemCount += item.quantity) : itemCount,
    0
  );
  return itemCount;
};
