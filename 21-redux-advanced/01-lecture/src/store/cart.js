import {createSlice} from "@reduxjs/toolkit";

const initialCartState = {
    cartIsVisible: false,
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible;
        },
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.item);
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.itemId,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }

        },
        removeItemFromCart: (state, action) => {

        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;