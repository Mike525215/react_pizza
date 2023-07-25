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
        },
        deletePizza: (state, action) => {
            state.cartArray.splice(action.payload, 1);
        },
        setTotalSumDecr: (state, action) => {
            state.totalSum -= action.payload;
        },
        setCountDecr: (state, action) => {
            state.count -= action.payload;
        }
    }

});

export const {setCount, setTotalSum, addPizza, deletePizza, setTotalSumDecr, setCountDecr} = cartSlice.actions;
export default cartSlice.reducer;