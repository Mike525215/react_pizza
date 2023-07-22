import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: "Все",
        selected: 1,
        closed: true,
        sortName: "sorted by"
    },
    reducers: {
        setCategory: (state, action) => {
            state.value = action.payload;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        setClose: (state) => {
            state.closed === true ? state.closed = false : state.closed = true
        },
        setSortedName: (state, action) => {
            state.sortName = action.payload;
        }
    }
});

export const { setCategory, setSelected, setClose, setSortedName } = categorySlice.actions;
export default categorySlice.reducer;