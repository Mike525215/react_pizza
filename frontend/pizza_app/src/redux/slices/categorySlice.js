import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: "Все",
        selected: 1
    },
    reducers: {
        setCategory: (state, action) => {
            state.value = action.payload;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const { setCategory, setSelected } = categorySlice.actions;
export default categorySlice.reducer;