import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item: any) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item: any = state.cart.find(
        (item: any) => item.pizzaId === action.payload,
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item: any = state.cart.find(
        (item: any) => item.pizzaId === action.payload,
      );
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        return cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getUserName = (state: any) => state.user.username;

export const getCart = (state: any) => state.cart.cart;

export const getTotalCartQuantity = (state: any) =>
  state.cart.cart.reduce((sum: any, item: any) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: any) =>
  state.cart.cart.reduce((sum: any, item: any) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: any) => (state: any) =>
  state.cart.cart.find((item: any) => item.pizzaId === id)?.quantity ?? 0;
