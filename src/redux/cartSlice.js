import { createSlice } from "@reduxjs/toolkit";

// Helper functions for localStorage operations
const fetchFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

// Initial state
const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        const updatedCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            const updatedQuantity = item.quantity + action.payload.quantity;
            const updatedTotalPrice = updatedQuantity * item.price;
            return {
              ...item,
              quantity: updatedQuantity,
              totalPrice: updatedTotalPrice,
            };
          }
          return item;
        });
        state.carts = updatedCart;
      } else {
        const newItem = {
          ...action.payload,
          totalPrice: action.payload.quantity * action.payload.price,
        };
        state.carts.push(newItem);
      }
      storeInLocalStorage(state.carts);
    },

    // Remove an item from the cart
    removeFromCart: (state, action) => {
      const updatedCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = updatedCart;
      storeInLocalStorage(state.carts);
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    // Calculate total items and amount in the cart
    getCartTotal: (state) => {
      const { totalAmount, itemCount } = state.carts.reduce(
        (cartTotal, cartItem) => {
          const { totalPrice, quantity } = cartItem;
          cartTotal.totalAmount += totalPrice;
          cartTotal.itemCount += quantity;
          return cartTotal;
        },
        { totalAmount: 0, itemCount: 0 }
      );
      state.totalAmount = totalAmount;
      state.itemCount = itemCount;
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
