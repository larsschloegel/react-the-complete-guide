import {createStore} from 'redux';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter: true
}

createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter = state.counter + action.amount;
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        }
    }
});
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1,
                showCounter: state.showCounter
            }
        case 'decrement':
            return {
                counter: state.counter - 1,
                showCounter: state.showCounter
            }
        case 'increase':
            return {
                counter: state.counter + action.payload,
                showCounter: state.showCounter
            }
        case 'toggle':
            return {
                counter: state.counter,
                showCounter: !state.showCounter
            }
        default:
            return state;
    }
}
const store = createStore(counterReducer);

export default store;