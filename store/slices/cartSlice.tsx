import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
  categoria: string;
  fabricante: string;
  id: string;
  img: string;
  garantia: string;
  name: string;
  pathName: string;
  pPrazo: number;
  specs: string[];
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
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const newItem = state.cart.filter((i) => {
        i.categoria !== action.payload;
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
