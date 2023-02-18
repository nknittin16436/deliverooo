import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex((item) => item._id === action.payload.id);
            if (index >= 0) {
                const newBasket = [...state.items];
                newBasket.splice(index, 1);
                state.items = newBasket;
            }
            else {
                console.warn(`Cannot remove item with Id ${action.payload.id} because it is not present in basket`);
            }
        },
    },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemWithId = (state, id) => state.basket.items.filter((item) => item._id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer