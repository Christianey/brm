import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    removeFromCart: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items.splice(index, 1);
    },
  },
});

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) =>
  state.cart.items.filter((item) => item.id === id);
export const selectCartTotal = (state) => {
  console.log(state.cart.items);
  return state.cart.items.reduce((total, curr) => total + curr?.price, 0);
};
// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
