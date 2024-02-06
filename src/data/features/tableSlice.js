import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit";
import {apiGet, apiPut} from "../APIUtils";

export const fetchTable = createAsyncThunk('workspaces/fetchTable',
    async (fetchTableRequest) => {
        const url = "/tables/" + fetchTableRequest.id;
        const response = await apiGet(url, fetchTableRequest);
        return response.data;
    }
)

export const createCardList = createAsyncThunk('table/createCardList',
    async (createCardListRequest, {getState}) => {
        const state = getState();
        const url = `/tables/${state.table.table.id}/cardLists/`;
        const response = await apiPut(url, createCardListRequest);
        return response.data;
    }
)

export const createCard = createAsyncThunk('table/createCard',
    async (createCardRequest, {getState}) => {
        const state = getState();
        const url = `/tables/${state.table.table.id}/cardLists/${createCardRequest.cardListId}/cards`;
        const response = await apiPut(url, createCardRequest);
        return response.data;
    }
)

const initialState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    table : {
        cardLists : []
    }
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        clearState: (state) => {
            return initialState;
        },
        listAdded(state, action) {
            const list =
            {
                id: nanoid(),
                title: "New list",
                cards: []
            };
            state.table.cardLists.push(list);
        },
        cardAdded(state, action) {
            const card =
            {
                id: nanoid(),
                name: action.payload.name,
            } 
            state.cardLists.find(l=>l.id === action.payload.listId)?.cards.push(card);
        },
        cardTitleChanged(state, action) {
            
        },
        cardDeleted(state, action) {
            
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTable.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(fetchTable.fulfilled, (state, { meta, payload }) => {
                state.status = 'succeeded'
                state.table = payload;
            })
            .addCase(fetchTable.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message
            })

            .addCase(createCardList.fulfilled, (state, { meta, payload }) => {
                state.table.cardLists.push(payload);
            })
            .addCase(createCard.fulfilled, (state, { meta, payload }) => {
                state.table.cardLists.find(cardList => cardList.id === meta.arg.cardListId).cards.push(payload);
            })
    }
})

export const selectAllCardLists = (state) => state.table.table.cardLists;
export const getTableStatus = (state) => state.table.status;

export const { clearState, listAdded, cardAdded, cardTitleChanged, cardDeleted } = tableSlice.actions;

export default tableSlice.reducer;