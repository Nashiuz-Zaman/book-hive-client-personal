import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedItems: [],
  totalPrice: 0,
  quantity:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Add items
    add(state, { payload }) {
      let find = state.addedItems.findIndex((item) => item._id === payload._id);
      if (find >= 0) {
        state.addedItems[find].quantity += 1;
      } else {
      const arr = [...state.addedItems, payload];
        state.addedItems = arr;
      }
    },
    //Remove Items
    remove(state, { payload }) {
      state.addedItems = state.addedItems.filter(
        (item) => item._id !== payload
      );
    },
    totalPrice(state) {
      state.totalPrice = state.addedItems.reduce(
        (total, item) => total + item.price,
        0
      );
    },
  },
});

export const { add,remove } = cartSlice.actions;
export default cartSlice.reducer;