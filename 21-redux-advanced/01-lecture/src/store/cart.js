import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    cartIsVisible: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;