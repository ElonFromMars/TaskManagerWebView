import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from './features/workspaceSlice.js';
import allWorkspacesReducer from './features/allWorkspacesSlice.js';
import tableReducer from './features/tableSlice.js';
import cardReducer from './features/cardSlice.js';


export const store = configureStore({
    reducer: {
        workspace: workspaceReducer,
        allWorkspaces: allWorkspacesReducer,
        table: tableReducer,
        card: cardReducer,
    }
})
