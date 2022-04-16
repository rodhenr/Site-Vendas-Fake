import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
  modelo: string;
  categoria: string;
  fabricante: string;
  id: string;
  img: string;
  img2: string;
  garantia: string;
  name: string;
  pathName: string;
  pPrazo: number;
  specs: object[];
  promo: boolean;
}

interface cartType {
  cart: Props[];
}

const initialState: cartType = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Props>) => {
      if (!state.cart.some((i) => i.id === action.payload.id)) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const newItem = state.cart.filter((i) => {
        return i.id !== action.payload;
      });
      state.cart = newItem;
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
