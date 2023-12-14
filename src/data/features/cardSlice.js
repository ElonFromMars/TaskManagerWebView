import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '1',
    title: "List test name 1",
    text: "description 123 123 123 123 123",
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
})

export const getCard = (state) => state.card;

export default cardSlice.reducer;