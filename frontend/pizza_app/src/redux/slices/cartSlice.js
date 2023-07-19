import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0
    },
    reducers: {
        setCount: (state) => {
            state.count += 1
        }
    }

});

export const {setCount} = cartSlice.actions;
export default cartSlice.reducer;