import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        totalSum: 0,
        cartArray: []
    },
    reducers: {
        setTotalCount: (state) => {
            state.count += 1
        },
        setTotalAmount: (state, action) => {
            state.totalSum += action.payload;
        },
        addPizza: (state, action) => {
            const item = state.cartArray.filter(obj => obj.id === action.payload.id && obj.title === action.payload.title && obj.weight === action.payload.weight && obj.long === action.payload.long);
            item.length ? item[0].count++ : state.cartArray.push({...action.payload, count: 1});
        },
        reducePizzaCount: (state, action) => {
            const item = state.cartArray.filter(obj => obj.id === action.payload.id && obj.title === action.payload.title && obj.weight === action.payload.weight && obj.long === action.payload.long);
            item[0].count--;
        },
        deletePizza: (state, action) => {
            state.cartArray.splice(action.payload, 1);
        },
        setTotalAmountReduce: (state, action) => {
            state.totalSum -= action.payload;
        },
        setTotalCountReduce: (state, action) => {
            state.count -= action.payload;
        },
        clearCart: (state) => {
            state.cartArray = [];
            state.count = 0;
            state.totalSum = 0;
        }
    }

});

export const cart = (state) => state.cart;

export const {setTotalCount, setTotalAmount, addPizza, deletePizza, setTotalAmountReduce, setTotalCountReduce, clearCart, reducePizzaCount} = cartSlice.actions;
export default cartSlice.reducer;