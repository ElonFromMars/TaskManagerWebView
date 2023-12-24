import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workspaces: [
        {
            id: '1',
            title: "default",
        },
        {
            id: '2',
            title: "super name",
        },
        {
            id: '3',
            title: "blabalab",
        },

    ]
};

const workspacesSlice = createSlice({
    name: 'allWorkspaces',
    initialState,
})

export const selectAllWorkpaces = (state) => state.allWorkspaces.workspaces;

export default workspacesSlice.reducer;