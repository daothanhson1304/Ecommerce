const cardSelector = (state) =>
  Object.entries(state.card.products).map(([, product]) => product);
export default cardSelector;
