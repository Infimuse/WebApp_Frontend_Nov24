import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import AuthService, { Login, SignUp } from './authService';

export const signUp = createAsyncThunk(
  'auth/SignUp',
  async (user: SignUp, thunkAPI) => {
    try {
      const response = await AuthService.signUp(user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
); 



export const login = createAsyncThunk(
  'auth/login',
  async (userData:Login, thunkAPI) => {
    try {
      const response = await AuthService.login(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpSuccess = createAction('auth/signUpSuccess');

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};
  
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      })
      .addCase(signUpSuccess, (state) => {
        state.isSuccess = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      });
  },
});
  
export const { reset } = authSlice.actions;
export default authSlice.reducer;
