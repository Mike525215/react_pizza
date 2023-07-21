import {createSlice} from '@reduxjs/toolkit';

export const pizzaSlice = createSlice({
    name: 'pizzaList',
    initialState: {
        pizzaArray: [],
        filteredArray: []
    },
    reducers: {
        setArray: (state, action) => {
            state.pizzaArray = action.payload
        },
        setFilteredArray: (state, action) => {
            state.filteredArray = action.payload
        }
    }
});

export const {setArray, setFilteredArray} = pizzaSlice.actions;

export default pizzaSlice.reducer;