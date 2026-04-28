import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cartItems");
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return [];
  }
};

const saveCartToStorage = (cartItems) => {
  try {
    const serializedCart = JSON.stringify(cartItems);
    localStorage.setItem("cartItems", serializedCart);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState = {
  cartItems: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity += quantity;
      } else {
        state.cartItems.push({ ...product, quantity });
      }
      saveCartToStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== productId
      );
      saveCartToStorage(state.cartItems);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === productId
      );

      if (existingItemIndex >= 0) {
        if (quantity <= 0) {
          state.cartItems.splice(existingItemIndex, 1);
        } else {
          state.cartItems[existingItemIndex].quantity = quantity;
        }
      }
      saveCartToStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveCartToStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
