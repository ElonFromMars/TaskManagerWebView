import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { apiGet, apiPut } from "./../APIUtils.js";


function getBaseUrl(getState){
    const state = getState();
    const userName = state.user.username;

    return `/users/${userName}`;
}

export const fetchWorkspaces = createAsyncThunk('workspaces/fetchWorkspaces', 
    async (arg, { getState }) => {

    const baseUrl = getBaseUrl(getState);

    const response = await apiGet(baseUrl  + "/workspaces");

    return response.data;
})

export const createWorkspace = createAsyncThunk('workspaces/createWorkspace', 
    async (addNewWorkspaceRequest, { getState }) => {
    
    const baseUrl = getBaseUrl(getState);
    
    const response = await apiPut(baseUrl  + "/workspaces", addNewWorkspaceRequest);

    return response.data;
})

export const deleteWorkspace = createAsyncThunk('workspaces/deleteWorkspace', 
    async (deleteWorkspaceRequest, { getState }) => {

})

export const createTable = createAsyncThunk('workspaces/createTable', 
    async (addNewTableRequest, { getState }) => {
    
    const response = await apiPut(`/workspaces/${addNewTableRequest.workspaceId}/tables`, addNewTableRequest);

    return response.data;
})

export const deleteTable = createAsyncThunk('workspaces/deleteTable', 
    async (deleteTableRequest, { getState }) => {

})

const initialState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    selectdWorkspaceId: null,
    workspaces: [
    ]
};

const workspacesSlice = createSlice({
    name: 'workspaces',
    initialState,
    clearState: (state) => {
        state = initialState;
        return state;
    },
    reducers: {
        selectWorkspace(state, action) {
            const selectedId = action.payload.id;
            if(state.workspaces.find(w => w.id === selectedId)){
                state.selectdWorkspaceId = selectedId;
            }
        },
        createTable(state, action) {
            const workspaceIndex = state.workspaces.map(w => w.id).indexOf(action.payload.workspaceId);
            if(workspaceIndex !== -1){
                const newTable = {
                    id: nanoid(),
                    title: action.payload.title
                }
                state.workspaces[workspaceIndex].tables.push(newTable);
            }
        },
        createWorkspace(state, action) {
            const newWorkspace = {
                id: nanoid(),
                title: action.payload.title,
                tables: [
                ]
            }
            state.workspaces.push(newWorkspace);
        },
        removeWorkspace(state, action) {
            const workspaces = state.workspaces.filter(workspace => workspace.id !== action.payload.id);
            state.workspaces = workspaces;
            state.selectdWorkspaceId = state.workspaces[0].id;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchWorkspaces.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(fetchWorkspaces.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'

                state.workspaces = payload;
                if(payload?.length > 0){
                    state.selectdWorkspaceId = payload[0].id;
                }
            })
            .addCase(fetchWorkspaces.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message
            })


            .addCase(createWorkspace.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(createWorkspace.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'
                state.workspaces.push(payload);
            })
            .addCase(createWorkspace.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message
            })


            .addCase(createTable.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(createTable.fulfilled, (state, { meta, payload }) => {
                state.status = 'succeeded'
                state.workspaces.find(w => w.id === meta.arg.workspaceId).cardTables.push(payload);
            })
            .addCase(createTable.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message
            })
    }
})

export const selectAllTablesFromWorkpace = (state, id) => state.workspaces.workspaces.find(workspace => workspace.id === id)?.cardTables;
export const selectAllWorkpaces = (state) => state.workspaces.workspaces;
export const getSelectdWorkspaceId = (state) => state.workspaces.selectdWorkspaceId;

export const getWorkspacesStatus = (state) => state.workspaces.status;
export const getError = (state) => state.workspaces.error;

export const { selectWorkspace, clearState } = workspacesSlice.actions;

export default workspacesSlice.reducer;