import React, { useEffect } from 'react'
import netflixLogo from '../assets/Netflix_Logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchBar } from '../utils/GptSearchSlice';
import { SUPPORTED_LANGUAGES } from '../utils/languageConstants';
import { updateCurrentLanguage } from '../utils/appSlice';
const Header = () => {
  const user = useSelector((store)=> store.user);
  const showGptSearchBar = useSelector((store)=> store.gptSearch.showGptSearchBar);
  const currentLanguage = useSelector((store)=> store.app.currentLanguage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async()=>{
    signOut(auth)
  }

  const toggleGptSearch = ()=>{
    dispatch(toggleGptSearchBar());
  }

  const onChangeHandler = (e)=>{
      dispatch(updateCurrentLanguage(e.target.value))
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
          const { email, uid, displayName, photoURL } = user;
          dispatch(addUser({email, uid, displayName, photoURL}));
          navigate("/browse");
        }
        else{
          dispatch(removeUser());
          navigate("/");
        }
    })
     return ()=> unSubscribe();
  },[])

  return (
    <div className='w-full flex justify-between fixed px-8 py-2 bg-gradient-to-b from-black z-20'>
        <img src={netflixLogo} alt="logo" className='w-44'/>
        {user && (
          <div className='flex items-center'>
            {showGptSearchBar && (
              <select className="p-2 bg-gray-900 text-white m-2" onChange={onChangeHandler}>
                {SUPPORTED_LANGUAGES.map((lang)=> <option selected={lang.identifier === currentLanguage} key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>
            )}
            <button className="bg-purple-800 px-4 py-2 mr-4 text-white rounded-lg" onClick={toggleGptSearch}>
                {showGptSearchBar ? 'Home Page' : 'GPT Search'}
            </button>           
            <img src={user.photoURL} className="w-8 mr-3"/>
            <p className='text-white'>Hello, {user.displayName}</p>
            <button onClick={handleSignOut} className="text-white font-semibold ml-2">
              SignOut
            </button>
          </div>
        )}
    </div>
  )
}

export default Header