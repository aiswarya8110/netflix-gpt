import React, { useEffect } from 'react'
import netflixLogo from '../assets/Netflix_Logo.png';
import { useSelector } from 'react-redux';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async()=>{
    signOut(auth)
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