import {createSlice} from '@reduxjs/toolkit';

export const pizzaSlice = createSlice({
    name: 'pizzaList',
    initialState: {
        pizzaArray: [],
        filteredArray: [],
        error: false
    },
    reducers: {
        setArray: (state, action) => {
            state.pizzaArray = action.payload
        },
        setFilteredArray: (state, action) => {
            state.filteredArray = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {setArray, setFilteredArray, setError} = pizzaSlice.actions;

export default pizzaSlice.reducer;