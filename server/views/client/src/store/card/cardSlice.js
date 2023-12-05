/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products[id];
      if (state.products[id]) {
        state.products[id].quantity = product.quantity + quantity;
      } else {
        state.products[id] = action.payload;
      }
    },
    increaseProduct: (state, action) => {
      const productId = action.payload;
      const product = state.products[productId];
      const { quantity } = product;
      state.products[productId].quantity = quantity + 1;
    },
    decreaseProduct: (state, action) => {
      const productId = action.payload;
      const product = state.products[productId];
      const { quantity } = product;
      if (quantity > 1) {
        state.products[productId].quantity = quantity - 1;
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      delete state.products[productId];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCard, increaseProduct, decreaseProduct, removeProduct } =
  cardSlice.actions;

export default cardSlice;
