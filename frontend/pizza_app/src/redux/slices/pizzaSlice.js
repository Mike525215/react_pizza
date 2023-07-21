import {createSlice} from '@reduxjs/toolkit';

export const pizzaSlice = createSlice({
    name: 'pizzaList',
    initialState: {
        pizzaArray: []
    },
    reducers: {
        setArray: (state, action) => {
            state.pizzaArray = action.payload
        }
    }
});

export const {setArray} = pizzaSlice.actions;

export default pizzaSlice.reducer;