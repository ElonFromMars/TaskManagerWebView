import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    id: '1',
    title: "",
    lists: [
        {
            id: '1',
            title: 'List test name 1',
            cards: [
                {id: '1', title: "Card test name 1"},
                {id: '2', title: "Card test name 2"},
                {id: '3', title: "Card test name 3"},
            ]
        },
        {
            id: '2',
            title: 'List test name 2',
            cards: [
                {id: '1', title: "Card test name 1"},
                {id: '2', title: "Card test name 2"},
                {id: '3', title: "Card test name 3"},
                {id: '4', title: "Card test name 4"},
            ]
        },
        {
            id: '3',
            title: 'List test name 3',
            cards: [
                {id: '1', title: "Card test name 1"},
            ]
        },
    ]
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        listAdded: {
            reducer(state, action) {
                state.lists.push(action.payload)
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        cards: [
                        ]
                    }
                }
            },
        },
        cardAdded(state, action) {
            
        },
        cardTitleChanged(state, action) {
            
        },
        cardDeleted(state, action) {
            
        }
    }
})

export const selectAllCardLists = (state) => state.table.lists;

export const { listAdded, cardAdded, cardTitleChanged, cardDeleted } = tableSlice.actions;

export default tableSlice.reducer;