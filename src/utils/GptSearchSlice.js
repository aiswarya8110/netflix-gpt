import { createSlice } from '@reduxjs/toolkit';
import addUIDToMovies from './addUIDToMovies';

const gptSearchSlice = createSlice({
    name: 'GptSearch',
    initialState: {
        showGptSearchBar: false,
        gptSearchResults: [],
        gptMovieNames: []
    },
    reducers: {
        toggleGptSearchBar: (state)=>{
            return {...state, showGptSearchBar: !state.showGptSearchBar}
        },
        updateGptSearchResultsAndGptMovieNames: (state, action)=>{

            const tmdbSearchResultsWithUID = action.payload.tmdbSearchResults.map((movieList)=>{
                  return  addUIDToMovies(movieList);
            })

            console.log(tmdbSearchResultsWithUID);

            return {...state, gptSearchResults: tmdbSearchResultsWithUID, gptMovieNames: action.payload.gptMovieNames}
        }
    }
});

export const { toggleGptSearchBar, updateGptSearchResultsAndGptMovieNames } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;


//  const [person, setPerson ] = useState({name: "john"})

//  person.name = "jane"
//  setPerson(person)

//  setPerson({name: "jane"})

// useReducer(reducer)



/* 

const [fruits, setFruits] = useState(["apple", "orange", "banana"])

const addFruit = ()=>{
    const newFruits = [...fruits];
    newFruits.push("mango");
    setFruits(newFruits);
}

const deleteFruit = ()=>{
    const newFruits = [...fruits];
    newFruits.pop();
    setFruits(newFruits);
}

const clearFruits = ()=>{
    setFruits([]);
}

*/

/* 
    const reducer = (state, action)=>{
        if(action.type === "add-fruits"){
            const newFruits = [...state];
            newFruits.push(action.payload);

            return newFruits;
        }

        if(action.type === "delete-fruits"){
            const newFruits = [...state];
            newFruits.pop();

            return newFruits;
        }

        if(action.type === "delete-cart"){
            return []
        }
    }

*/

/* 
    const [fruits, dispatch ]=useReducer(reducer, initialState);

    const addFruit = ()=>{
        dispatch({type: "add-fruits", payload: "mango"})
    }


*/