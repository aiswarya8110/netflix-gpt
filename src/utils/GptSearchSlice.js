import { createSlice } from '@reduxjs/toolkit';

const gptSearchSlice = createSlice({
    name: 'GptSearch',
    initialState: {
        showGptSearchBar: false
    },
    reducers: {
        toggleGptSearchBar: (state)=>{
            return {...state, showGptSearchBar: !state.showGptSearchBar}
        }
    }
});

export const { toggleGptSearchBar } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;