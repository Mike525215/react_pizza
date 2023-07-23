import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        totalSum: 0,
        cartArray: []
    },
    reducers: {
        setCount: (state) => {
            state.count += 1
        },
        setTotalSum: (state, action) => {
            state.totalSum += action.payload;
        },
        addPizza: (state, action) => {
            state.cartArray.push(action.payload);
        }
    }

});

export const {setCount, setTotalSum, addPizza} = cartSlice.actions;
export default cartSlice.reducer;