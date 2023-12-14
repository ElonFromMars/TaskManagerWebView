import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '1',
    title: "",
    tables: [
        {
            id: '1',
            title: 'Table test name 1',
        },
        {
            id: '2',
            title: 'Table test name 2',
        },
        {
            id: '3',
            title: 'Table test name 3',
        },
        {
            id: '4',
            title: 'Table test name 4',
        },
        {
            id: '5',
            title: 'Table test name 5',
        },
    ]
};

const workspacesSlice = createSlice({
    name: 'workspaces',
    initialState,
})

export const selectAllTables = (state) => state.workspaces.tables;//TODO

export default workspacesSlice.reducer;