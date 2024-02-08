import { createSlice, configureStore } from '@reduxjs/toolkit';
import * as console from 'react-dom/test-utils';

let user;

try{
  user = JSON.parse(localStorage.getItem('user'));
} catch (error) {
  user = null;
}

const initialState = {
  user,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, setLoading, logout } = userSlice.actions;

export default configureStore({
  reducer: {
    user:  userSlice.reducer,
  },
});
