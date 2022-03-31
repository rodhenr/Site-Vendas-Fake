import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateProps {
  valorTotal: number;
  id: string;
}

interface newProps {
  obj: updateProps[];
}

const initialState: newProps = {
  obj: [],
};

export const newSlice = createSlice({
  name: "newSlice",
  initialState,
  reducers: {
    updateTotalPrice: (state, action: PayloadAction<updateProps>) => {
      if (state.obj.every((i) => i.id !== action.payload.id)) {
        state.obj.push(action.payload);
      } else {
        const newObj = state.obj.map((i) => {
          if (i.id === action.payload.id) {
            return { ...i, valorTotal: action.payload.valorTotal };
          } else {
            return i;
          }
        });
        state.obj = newObj;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const newObj = state.obj.filter((i) => i.id !== action.payload);
      state.obj = newObj;
    },
    cleanSlice: (state) => {
      state.obj = [];
    },
  },
});

export const { updateTotalPrice, cleanSlice, deleteItem } = newSlice.actions;
export default newSlice.reducer;
