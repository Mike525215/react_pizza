import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizza = createAsyncThunk('pizza/fetchPizza', async () => {
    const request = await axios.get('http://127.0.0.1:8000/api/v1/pizza/');
    const response = request.data;
    return response;
});

export const searchPizza = createAsyncThunk('pizza/searchPizza', async (value) => {
     const changedValue = value[0].toUpperCase() + value.substring(1).toLowerCase();
     const {data} = await axios.get('http://127.0.0.1:8000/api/v1/pizza?search=' + changedValue);
     return data;
})

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
    },
    extraReducers: {
        [fetchPizza.pending]: (state) => {
            state.pizzaArray = [];
            state.filteredArray = [];
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.pizzaArray = action.payload;
            state.filteredArray = action.payload;
        },
        [fetchPizza.rejected]: (state) => {
            state.error = true;
            state.pizzaArray = [];
            state.filteredArray = [];
        },
        [searchPizza.pending]: (state) => {
            state.filteredArray = [];
        },
        [searchPizza.fulfilled]: (state, action) => {
            state.filteredArray = action.payload;
        },
        [searchPizza.rejected]: (state) => {
            state.filteredArray = [];
        }

    }
});

export const {setArray, setFilteredArray, setError} = pizzaSlice.actions;

export default pizzaSlice.reducer;