import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiPost, apiGet }  from "./../APIUtils.js";
import { ACCESS_TOKEN } from '../../constants';

export const registerUser = createAsyncThunk('user/registerUser',
    async (signupRequest) => {
        const response = await apiPost("auth/register", signupRequest);

        return response.data;
    }
);

export const loginUser = createAsyncThunk('user/loginUser',
    async (loginRequest) => {
        const response = await apiPost("/auth/login", loginRequest);
        
        return response.data;
    }
);

export const fetchUserBytoken  = createAsyncThunk('user/fetchUserBytoken',
    async () => {
        const response = await apiGet("/users/me");
        return response.data;
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
            .addCase(registerUser.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(registerUser.fulfilled, (state, { meta }) => {
                state.status = 'succeeded'

                state.email = meta.email;
                state.username = meta.username;
                state.name = meta.name;
            })
            .addCase(registerUser.rejected, (state, { error }) => {
                state.status = 'failed'
                state.error = error.message;
            })


            .addCase(loginUser.pending, (state, { payload }) => {
                state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'

                //TODO move to field
                //localStorage.setItem(ACCESS_TOKEN, payload.accessToken);
                
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
            
                state.email = payload.email;
                state.username = payload.username;

                state.status = 'succeeded'
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