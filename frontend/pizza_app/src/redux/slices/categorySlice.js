import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: "Все"
    },
    reducers: {
        setCategory: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;