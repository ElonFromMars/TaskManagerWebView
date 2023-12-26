import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/userSlice.js';
import workspacesReducer from './features/workspacesSlice.js';
import tableReducer from './features/tableSlice.js';
import cardReducer from './features/cardSlice.js';


export const store = configureStore({
    reducer: {
        user: userReducer,
        workspaces: workspacesReducer,
        table: tableReducer,
        card: cardReducer,
    }
})
