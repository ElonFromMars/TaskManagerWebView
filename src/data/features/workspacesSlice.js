import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
    const response = await axios.post(POSTS_URL, initialPost)
    return response.data
})

const initialState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    selectdWorkspaceId: "1",
    workspaces: [
        {
            id: '1',
            title: "Personal",
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
        },
        {
            id: '2',
            title: "workspace name 2",
            tables: [
                {
                    id: '1',
                    title: 'Table test name 1',
                },
                {
                    id: '2',
                    title: 'Table test name 2',
                },
            ]
        },
        {
            id: '3',
            title: "workspace name 3",
            tables: [
            ]
        },

    ]
};

const workspacesSlice = createSlice({
    name: 'workspaces',
    initialState,
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
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Adding date and reactions
                let min = 1;
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });

                // Add any fetched posts to the array
                postsAdapter.upsertMany(state, loadedPosts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                // Fix for API post IDs:
                // Creating sortedPosts & assigning the id 
                // would be not be needed if the fake API 
                // returned accurate new post IDs

                action.payload.id = state.ids[state.ids.length - 1] + 1
                // End fix for fake API post IDs 

                action.payload.userId = Number(action.payload.userId)
                action.payload.date = new Date().toISOString();
                action.payload.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                console.log(action.payload)
                postsAdapter.addOne(state, action.payload)
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Update could not complete')
                    console.log(action.payload)
                    return;
                }
                action.payload.date = new Date().toISOString();
                postsAdapter.upsertOne(state, action.payload)
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                if (!action.payload?.id) {
                    console.log('Delete could not complete')
                    console.log(action.payload)
                    return;
                }
                const { id } = action.payload;
                postsAdapter.removeOne(state, id)
            })
    }
})

export const selectAllTablesFromWorkpace = (state, id) => state.workspaces.workspaces.find(workspace => workspace.id === id).tables;
export const selectAllWorkpaces = (state) => state.workspaces.workspaces;
export const getSelectdWorkspaceId = (state) => state.workspaces.selectdWorkspaceId;

export const { selectWorkspace, createTable, createWorkspace, removeWorkspace } = workspacesSlice.actions;

export default workspacesSlice.reducer;