import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptSearchReducer from './GptSearchSlice';
import appReducer from './appSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptSearchReducer,
        app: appReducer
    }
});

export default store;