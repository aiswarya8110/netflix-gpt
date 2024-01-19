import React from 'react'
import netflixLogo from '../assets/Netflix_Logo.png';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Header = () => {
  const user = useSelector((store)=> store.user);
  const handleSignOut = async()=>{
    signOut(auth)
  }

  return (
    <div className='w-full flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black'>
        <img src={netflixLogo} alt="logo" className='w-44'/>
        {user && (
          <div className='flex items-center'>
            <img src={user.photoURL} className="w-8"/>
            <p>Hello, {user.displayName}</p>
            <button onClick={handleSignOut} className="text-white font-semibold ml-2">
              SignOut
            </button>
          </div>
        )}
    </div>
  )
}

export default Header