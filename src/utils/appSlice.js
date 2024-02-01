import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentLanguage: "en"
    },
    reducers: {
        updateCurrentLanguage: (state, action)=>{
            return {...state, currentLanguage: action.payload}
        }
    }
});

export const { updateCurrentLanguage } = appSlice.actions;

export default appSlice.reducer;