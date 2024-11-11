import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export let counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0,
    },
    reducers: {
        inc: qwerty => {qwerty.value++},
        dec: qwerty => {qwerty.value--},
        incByAmount: (qwerty, act) => {qwerty.value += act.payload},
        incByAmountMo: (qwerty, act) => {qwerty.value -= act.payload},
        zero: qwerty => {qwerty.value = 0},
    }
})

export const {inc, dec, incByAmount, incByAmountMo, zero} = counterSlice.actions

export default counterSlice.reducer