import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request}  from "./../APIUtils.js";
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants';

export const signupUser = createAsyncThunk('user/signupUser',
    async (signupRequest) => {
        const response = await request({
            url: API_BASE_URL + "/auth/signup",
            method: 'POST',
            body: JSON.stringify(signupRequest)
        });

        return response.data
    }
);

export const loginUser = createAsyncThunk('user/loginUser',
    async (loginRequest) => {
        const response = await request({
            url: API_BASE_URL + "/auth/login",
            method: 'POST',
            body: JSON.stringify(loginRequest)
        });
        
        return response.data
    }
);

export const fetchUserBytoken  = createAsyncThunk('user/fetchUserBytoken',
    async () => {
        if(!localStorage.getItem(ACCESS_TOKEN)) {
            return Promise.reject("No access token set.");
        }
    
        const response = await request({
            url: API_BASE_URL + "/user/me",
            method: 'GET'
        });

        return response.data
    }
);

const initialState = {
    name: '',
    username: '',
    email: '',
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearState: (state) => {
            state = initialState;
            return state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(signupUser.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(signupUser.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'

                state.email = payload.email;
                state.username = payload.username;
                state.name = payload.name;
            })
            .addCase(signupUser.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message;
            })


            .addCase(loginUser.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'

                //TODO move to field
                localStorage.setItem(ACCESS_TOKEN, payload.accessToken);
                
                state.email = payload.email;
                state.username = payload.username;
                state.name = payload.name;
            })
            .addCase(loginUser.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message;
            })


            .addCase(fetchUserBytoken.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(fetchUserBytoken.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'

                state.email = payload.email;
                state.username = payload.username;
            })
            .addCase(fetchUserBytoken.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message;
            })
    },
});

export const { clearState } = userSlice.actions;

export const getLoginStatus = (state) => state.user.status;
export const getError = (state) => state.user.error;
export const userSelector = (state) => state.user;

export default userSlice.reducer;