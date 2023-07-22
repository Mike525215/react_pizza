import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        totalSum: 0
    },
    reducers: {
        setCount: (state) => {
            state.count += 1
        },
        setTotalSum: (state, action) => {
            state.totalSum += action.payload;
        }
    }

});

export const {setCount, setTotalSum} = cartSlice.actions;
export default cartSlice.reducer;